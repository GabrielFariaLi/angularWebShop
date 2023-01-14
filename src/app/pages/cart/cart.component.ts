import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: `./cart.component.html`,
  styles: [],
})
export class CartComponent implements OnInit {
  // dummy items
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "sapatos",
        price: 150,
        quantity: 2,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "sapatos",
        price: 1245123,
        quantity: 3,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "sapatos",
        price: 462,
        quantity: 1,
        id: 3,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "sapatos",
        price: 150,
        quantity: 5,
        id: 4,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  // colunasm ostradas na tabela
  displayedColumns: Array<string> = [
    "Produto",

    "Nome",
    "Preço",
    "Quantidade",

    "Total",
    "Ações",
  ];
  constructor(private cartService: CartService, private http: HttpClient) {}
  ngOnInit(): void {
    this.dataSource = this.cart.items;

    // QUEREMOS DAR UM SUBSCRIBE PARA NOSSO NOVO COMPONENTE DE CARRINHO PARA PODERMOS TER ACESSO AOS PRODUTOS
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.http
      .post("http://localhost:4242/checkout", {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          "pk_test_51MQG2aKpSYi5Y7Z6MnX2edIXhomY8xZ1NRdOC5JRXOVKT44idQIt2dWTO5pCPkJ1sdefLJ7LdkdtVyREeOCQJrhG009KipXqVW"
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
