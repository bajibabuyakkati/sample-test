import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirstModuleComponent} from "./components/first-module.component";


const firstModuleRoutes: Routes = [
  { path: 'first-module', component: FirstModuleComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(firstModuleRoutes)
  ],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
