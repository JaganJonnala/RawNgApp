import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import {LoginComponent} from './pages';
import {ApplicationStateService} from './application-state-service';
import {BaseConfig} from './base-config';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ...navigatableComponents,
  ],
  providers: [
    ApplicationStateService,
    BaseConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }