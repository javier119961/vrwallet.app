import {CommonModule, Location} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {AccountStore} from '../../../account/services/account-store.service';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TransactionService} from '../../services/transaction.service';
import {Expense, Income, Transfer} from '../../interfaces/deposit.interface';
import {MessageService} from 'primeng/api';
import {Account} from "../../../account/interfaces/account.interface";
import {FormErrorLabelComponent} from "@shared/components/form-error-label/form-error-label.component";
import {Transaction, Type} from "../../interfaces/transaction.interface";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {CategoryService} from "@core/services/category.service";
import {AutoComplete, AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {Category} from "@core/Interfaces/category.interface";
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'vrw-transaction-form',
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    SelectButtonModule,
    ReactiveFormsModule,
    FormErrorLabelComponent,
    AutoComplete,
    DatePickerModule
  ],
  templateUrl: './transaction-form.component.html',
  styles: ``,
})
export default class TransactionFormComponent {
  private fb = inject(FormBuilder);
  private transactionService = inject(TransactionService);
  private categoryService = inject(CategoryService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  protected readonly Type = Type;
  
  accountStore = inject(AccountStore);

  filteredCategories  = signal<Category[]>([]);
  filteredAccounts = signal<Account[]>([]);
  categories = toSignal(this.categoryService.get(), {
    initialValue: [] 
  });
  
  form = this.fb.group({
    accountId: ['', Validators.required],
    destinationAccountId:[null],
    categoryId: ['',Validators.required],
    amount: [0, [
      Validators.required,
      Validators.min(1)
    ]],
    date: ['', Validators.required],
    note: ['', Validators.maxLength(100)],
    payer: ['', Validators.maxLength(100)],
    type:[Type.Income, Validators.required]
  });

  stateOptions: { label: string, value: Type } [] = [
    { label: 'Expense', value: Type.Expense },
    { label: 'Income', value: Type.Income },
    { label: 'Transfer', value: Type.Transfer },
  ];
  
  get currentIncome(): Income {
    return this.form.value as Income;
  }

  get currentTransfer(): Transfer {
    return this.form.getRawValue() as unknown as Transfer;
  }

  get currentExpense(): Expense {
    return this.form.value as Expense;
  }

  get buttonClass(): string {
    const type : Type = this.form.get('type')?.value!;
    
    const statusClasses: Record<Type, string> = {
      [Type.Expense]: 'kt-btn-destructive',
      [Type.Income]: 'bg-green-600',
      [Type.Transfer]: 'kt-btn-primary'
    };

    return statusClasses[type] || 'kt-btn-default';
  }

  constructor(private location: Location) {}

  filterCategory(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();

    const filter = this.categories().filter(category =>
      category.name.toLowerCase().startsWith(query)
    );
    
    this.filteredCategories.set(filter);
  }

  filterAccount(event: AutoCompleteCompleteEvent, isDestination: boolean = false) {
    const query = event.query.toLowerCase();

    const type = this.form.get('type')?.value;
    const destinationControl = this.form.get('destinationAccountId');

    if (
      !isDestination &&
      type === Type.Transfer &&
      this.currentTransfer.destinationAccountId
    ) {
      destinationControl?.reset();
    }

    const accounts = this.accountStore.accounts();

    const filtered = accounts.filter(account => {
      
      const matchesQuery = account.name.toLowerCase().startsWith(query);
      const validDestination = !isDestination || account.id !== this.currentTransfer.accountId;

      return matchesQuery && validDestination;
    });

    this.filteredAccounts.set(filtered);
  }
  
  onChange({ value }: any) {
    const destControl = this.form.get('destinationAccountId');
    if (value === Type.Transfer) {
      destControl?.setValidators([Validators.required]);
    } else {
      destControl?.clearValidators();
      destControl?.setValue(null);
    }
    destControl?.updateValueAndValidity();
  }

  handleSubmit(): void {
    if (this.form.invalid) return;
    
    const request$: Record<Type,Observable<Transaction>> = {
      [Type.Expense]: this.transactionService.expense(this.currentExpense),
      [Type.Income]:this.transactionService.add(this.currentIncome),
      [Type.Transfer]:this.transactionService.transfer(this.currentTransfer)
    }

    request$[this.form.get('type')?.value!]
      .subscribe({
        next: (transaction:Transaction) => {
          this.messageService.add({
            severity: 'success',
            detail: 'La transaccion se ha llevado acabo con exito.',
          });
          this.accountStore.loadAccounts();
          this.router.navigate(['/accounts',transaction.accountId]).then();
        },
        error: (error: any) => {
          //todo error aplicar interceptor, mensaje de error por cantidad insuficiente 
          console.error('Error:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Hubo problemas al realizar la transaccion',
          });
        },
      });
  }
  
  handleCancel(){
    this.location.back();
  }
}
