import {Component} from "@angular/core";

@Component({
  selector:'app-second-module',
  templateUrl: "./second-module.component.html",
  styleUrls :["./second-module.component.css"]
})

export class SecondModuleComponent {
  movieList = ["Bahubali1", "Bahubali2", "Bahubali3", "Bahubali4", "Bahubali5", "Bahubali6"];
  i = 0;
  j = 0;
  id : String;
  timer: any;
  onStart(){
   this.timer = setInterval(function() {
      if(this.i < 6){
        this.id = ""+this.i;
        document.getElementById(this.id).style.background="red";
      this.i = this.i + 1;
      }
    }, 2000)
  }

  onStop(){
    clearInterval(this.timer);
  }
}
