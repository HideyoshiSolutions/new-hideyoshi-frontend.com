import {Component, HostBinding} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {ThemeService} from "../libs/services/theme.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HlmButtonDirective],
    host: {
        class:
            'block h-full bg-tertiary-50 ',
    },
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'new-frontend-hideyoshi';

    @HostBinding('class.dark:bg-primary-900')
    isDarkMode = false;

    constructor(private _themeService: ThemeService) {
        this._themeService.theme$.subscribe((theme) => {
            this.isDarkMode = theme === 'dark';
        });
    }

    public toggleTheme(): void {
        this._themeService.toggleDarkMode();
    }
}
