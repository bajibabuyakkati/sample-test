import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {FirstModuleComponent} from "./first-module/components/first-module.component";
import {SecondModuleComponent} from "./second-module/components/second-module.component";
import {AuthGuard} from "./auth-guard.service"

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './first-module/first-module.module.ts#FirstModule'},
  { path: 'second-module', loadChildren:'./second-module/second-module.module.ts#SecondModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
