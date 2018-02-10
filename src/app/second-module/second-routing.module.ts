import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SecondModuleComponent} from "./components/second-module.component";
import { AuthGuard} from "./../auth-guard.service";

const secondModuleRoutes: Routes = [
  { path: 'second-module', component: SecondModuleComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(secondModuleRoutes)
  ],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
