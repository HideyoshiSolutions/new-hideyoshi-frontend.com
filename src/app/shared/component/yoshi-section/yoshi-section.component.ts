import {
    AfterViewInit,
    Component,
    createComponent,
    EnvironmentInjector,
    Injector,
    Input,
    TemplateRef,
    ViewChild, ViewContainerRef
} from '@angular/core';
import SectionsBase from "../../../sections/sections.base";
import {ComponentType} from "@angular/cdk/portal";

@Component({
  selector: 'app-yoshi-section',
  standalone: true,
  imports: [],
  templateUrl: './yoshi-section.component.html'
})
export class YoshiSectionComponent implements AfterViewInit{
    @Input()
    component!: ComponentType<SectionsBase>;

    @ViewChild('section', { read: ViewContainerRef })
    section!: ViewContainerRef;

    ngAfterViewInit() {
        this.section.createComponent(this.component);
    }
}
