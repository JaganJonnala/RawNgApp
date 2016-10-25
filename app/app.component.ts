import {Component, Injectable} from "@angular/core";

@Injectable()
@Component({
    selector: "main",
    template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent {
    constructor() {

    }
}
