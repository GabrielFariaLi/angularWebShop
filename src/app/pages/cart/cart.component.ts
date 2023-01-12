import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: `./cart.component.html`,
  styles: [],
})
export class CartComponent implements OnInit {
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
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}
