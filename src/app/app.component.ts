import {Component, HostBinding} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from "./core/services/theme.service";
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HlmButtonDirective],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'new-frontend-hideyoshi';

    private isDarkMode = false;

    constructor(private _themeService: ThemeService) {
        this._themeService.theme$.subscribe((theme) => {
            this.isDarkMode = theme === 'dark';
        });
    }

    public toggleTheme(): void {
        this._themeService.toggleDarkMode();
    }
}
