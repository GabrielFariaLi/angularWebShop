import { Component, OnInit } from "@angular/core";
import { Cart } from "./models/cart.model";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  // template raiz e principal de como nossa aplicação se comporta, nesse caso definimos o navegador como componente que sempre sera reutilizado e logo abaixo temos os diversos componentes que sofrem alteração com base na route que o usuario entrar
  template: `
    <app-header [cart]="cart" ]></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "webshop";
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

  //componente começa a incializar ngoninit roda
  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
