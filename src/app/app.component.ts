import { Component, inject, signal, Renderer2, DOCUMENT } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs/operators';
import { MetronicInitService } from './core/services/metronic-init.service';

@Component({
  selector: 'body[app-root]',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'metronic-tailwind-angular';
}
