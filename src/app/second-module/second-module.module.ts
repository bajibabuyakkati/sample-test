import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SecondModuleComponent} from "./components/second-module.component";
import {SecondRoutingModule} from "./second-routing.module";

@NgModule({
  declarations:[SecondModuleComponent],
  imports:[SecondRoutingModule, CommonModule]
})
export class SecondModule{

}
