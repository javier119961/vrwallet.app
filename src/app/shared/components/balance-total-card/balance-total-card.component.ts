import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AccountStore } from '../../../feature/account/services/account-store.service';

@Component({
  selector: 'vrw-balance-total-card',
  imports: [CurrencyPipe],
  templateUrl: './balance-total-card.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceTotalCardComponent implements OnDestroy {
  accountStore = inject(AccountStore);
  displayBalance = signal(0);
  private animationFrameId?: number;

  constructor() {
    effect(() => {
      const target = this.accountStore.balance();
      this.animateBalance(target);
    });
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private animateBalance(target: number) {
    const start = this.displayBalance();
    if (start === target) return;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    const duration = 250;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = start + (target - start) * easeProgress;

      this.displayBalance.set(current);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(update);
      } else {
        this.displayBalance.set(target);
        this.animationFrameId = undefined;
      }
    };

    this.animationFrameId = requestAnimationFrame(update);
  }
}
