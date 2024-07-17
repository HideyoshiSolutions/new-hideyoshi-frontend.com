import {ComponentType} from "@angular/cdk/portal";
import SectionsBase from "../../sections/sections.base";

export interface Section {
    title: string,
    url: string,
    section: string,
    component: ComponentType<SectionsBase>,
}
