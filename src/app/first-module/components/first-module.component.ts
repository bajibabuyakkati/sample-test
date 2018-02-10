import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {AuthService} from "./../../auth.service";

@Component({
  selector: 'app-first-module',
  templateUrl: "./first-module.component.html",
  styleUrls:["./first-module.component.css"]
})
export class FirstModuleComponent {

  constructor(private router: Router, private authService: AuthService){}
  onLoadSecondModule() {
    this.router.navigate(['/second-module']);
  }

  onAuthenticate(){
    this.authService.setAuthentication();
  }

  onUnAuthenticate(){
    this.authService.ResetAuthentication();
  }



}
