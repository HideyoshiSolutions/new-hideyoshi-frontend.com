import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ThemeService} from "../../../core/services/theme.service";

@Component({
  selector: 'app-yoshi-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
  templateUrl: './yoshi-header.component.html'
})
export class YoshiHeaderComponent {

    private isDarkMode: boolean = false;

    navItems: {name: string, url: string, section: string|undefined}[] = [
        {name: 'Home', url: '', section: 'home'},
        {name: 'Projects', url: '', section: 'projects'},
        {name: 'Contact', url: '', section: 'contact'},
    ];

    constructor(private themeService: ThemeService) {
        this.themeService.theme$.subscribe(theme => {
            this.isDarkMode = theme === 'dark';
        });
    }

    toggleTheme() {
        this.themeService.toggleDarkMode()
    }

    calculateIcon(): string {
        return `assets/icon/${this.isDarkMode ? 'white' : 'red'}/icon-96.png`;
    }
}
