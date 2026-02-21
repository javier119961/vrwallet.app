import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormErrorLabelComponent} from "@shared/components/form-error-label/form-error-label.component";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "primeng/api";
import { ToastModule} from "primeng/toast";

@Component({
  selector: 'app-sign-in',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormErrorLabelComponent,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './sign-in.component.html',
  standalone: true,
  styles: ``
})
export class SignInComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]]
  });
  
  handleSubmit(): void {
    console.log("paso")

    this.messageService.add({
      key: 'confirm',
      sticky: true,
      severity: 'custom',
      summary: 'Uploading your files.',
      styleClass: 'backdrop-blur-lg rounded-2xl'
    });
    
    if (this.form.invalid){
      
      this.form.markAllAsTouched();
      return;
    }
    // this.authService.login()
  }
  
}
