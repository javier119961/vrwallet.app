import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'vrw-account-quick-actions',
  imports: [RouterLink],
  templateUrl: './account-quick-actions.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountQuickActionsComponent {
  router = inject(Router);
}
