import { Component, HostBinding, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MetronicInitService } from '../../core/services/metronic-init.service';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
	selector: 'app-demo9',
	imports: [RouterOutlet, HeaderComponent, NavbarComponent, ToolbarComponent, FooterComponent, HeaderComponent],
	templateUrl: './demo9.component.html',
	styleUrl: './demo9.component.scss'
})
export class Demo9Component {
	@HostBinding('class') bodyClass = 'flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height)';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
