import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-yoshi-section',
  standalone: true,
  imports: [],
  templateUrl: './yoshi-section.component.html'
})
export class YoshiSectionComponent {
    @Input() component!: unknown;

}
