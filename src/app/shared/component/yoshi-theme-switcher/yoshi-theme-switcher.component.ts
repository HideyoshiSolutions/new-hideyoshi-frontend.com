import {Component} from '@angular/core';
import {ThemeService} from "../../../core/services/theme.service";
import {state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-yoshi-theme-switcher',
    standalone: true,
    imports: [],
    templateUrl: './yoshi-theme-switcher.component.html',
    animations: [
        trigger('toggleSwitch', [
            state('dark', style({
                transform: 'translateX(0%)'
            })),
            state('light', style({
                transform: 'translateX(100%)'
            })),
        ]),
    ]
})
export class YoshiThemeSwitcherComponent {
    private themeMode: 'light' | 'dark' = 'dark';

    constructor(private themeService: ThemeService) {
        this.themeService.theme$.subscribe(theme => {
            this.themeMode = theme;
        });
    }

    toggleTheme() {
        this.themeService.toggleDarkMode();
    }

    get theme(): 'light' | 'dark' {
        return this.themeMode;
    }
}
