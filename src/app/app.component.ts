import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  // template raiz e principal de como nossa aplicação se comporta, nesse caso definimos o navegador como componente que sempre sera reutilizado e logo abaixo temos os diversos componentes que sofrem alteração com base na route que o usuario entrar
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "webshop";
}
