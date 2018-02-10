import { NgModule } from "@angular/core";

import { FirstModuleComponent } from "./components/first-module.component";
import {FirstRoutingModule} from "./first-routing.module";

@NgModule({
  declarations: [FirstModuleComponent],
  imports:[FirstRoutingModule]
})

export class FirstModule {

}
