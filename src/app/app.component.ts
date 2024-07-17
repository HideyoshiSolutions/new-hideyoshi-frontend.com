import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {YoshiHeaderComponent} from "./shared/component/yoshi-header/yoshi-header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, YoshiHeaderComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'new-frontend-hideyoshi';
}
