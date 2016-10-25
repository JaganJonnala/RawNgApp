import { Routes } from "@angular/router";
import { LoginComponent } from "./pages";

export const routes: Routes = [
  { path: "", component: LoginComponent },
];
export const navigatableComponents = [
  LoginComponent
];
