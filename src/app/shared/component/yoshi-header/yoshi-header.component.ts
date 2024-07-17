import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ThemeService} from "../../../core/services/theme.service";
import {Section} from "../../types/section.type";

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

    private isDarkMode = false;

    @Input()
    navItems: Section[] | undefined;

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
