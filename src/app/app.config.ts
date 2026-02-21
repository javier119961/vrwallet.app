import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import Aura from '@primeuix/themes/aura';
import {providePrimeNG} from "primeng/config";
import {definePreset} from "@primeuix/themes";

const MyCustomPreset = definePreset(Aura, {
  semantic: {
    transitionDuration: '0.2s',
    disabledOpacity: '0.6',
    primary: {
      color: '{zinc.500}', // Esto mapea internamente a las variables --p-primary
      hoverColor: '{zinc.600}',
      activeColor: '{zinc.700}'
    },
    formField: {
      borderRadius: 'var(--p-border-radius-md)',
      focusRing: {
        width: '0',
        style: 'none',
        color: 'transparent'
      }
    },
    // Puedes replicar toda la estructura que pegaste aquí
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: MyCustomPreset,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      },
    })
  ],
};

