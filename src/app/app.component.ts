import {Component} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {YoshiHeaderComponent} from "./shared/component/yoshi-header/yoshi-header.component";
import {Section} from "./shared/types/section.type";
import {YoshiSectionComponent} from "./shared/component/yoshi-section/yoshi-section.component";
import {ContactComponent} from "./sections/contact/contact.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {HomeComponent} from "./sections/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, YoshiHeaderComponent, YoshiSectionComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'new-frontend-hideyoshi';

    sections: Section[] = [
        {title: 'Home', url: '', section: 'home', component: HomeComponent },
        {title: 'Projects', url: '', section: 'projects', component: ProjectsComponent },
        {title: 'Contact', url: '', section: 'contact', component: ContactComponent},
    ]

    constructor(private route: ActivatedRoute) {

        this.route.fragment.subscribe(fragment => {
            this.navigateToSection(fragment);
        });
    }

    private navigateToSection(section: string|null) {
        if (!section) {
            return;
        }
        document.getElementById(section)?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'start'
        });
    }
}
