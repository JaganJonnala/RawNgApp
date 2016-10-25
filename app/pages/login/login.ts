import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login.css"],
})
export class LoginComponent {
  status: string;
  constructor() {
  }
  public counter: number = 10;

  message() {
    if (this.counter > 0) {
      this.status = this.counter + " taps left";
    } else {
      this.status = "Hoorraaay! \nYou are ready to start building!";
    }
  }

  public onTap() {
    this.counter--;
    this.message();
  }
}
