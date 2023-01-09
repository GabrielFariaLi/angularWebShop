import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

//rotas efetivas do aplicativo
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  // se entrarmos na url vazia, seremos redirecionados para a home
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
