import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    // items já no carrinho
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      // adicionar item novo para o carrinho
      items.push(item);
    }

    // export para outros componentes terem acesso da lista de carrinho atualizada
    this.cart.next({ items });
    this._snackBar.open("1 item adicionado ao carrinho.", "Ok", {
      duration: 3000,
    });
    console.log("items no carrinho aqui cart.service.ts ", this.cart.value);
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }
    this.cart.next({ items: filteredItems });
    this._snackBar.open("1 item removido do carrinho.", "Ok", {
      duration: 3000,
    });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("Carrinho foi limpo!", "Ok", { duration: 3000 });
  }
  removeFromCart(item: CartItem, flagUpdate = true): Array<CartItem> {
    const cartFiltered = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if (flagUpdate) {
      this.cart.next({ items: cartFiltered });
      this._snackBar.open("1 item foi removido do carrinho.", "Ok", {
        duration: 3000,
      });
    }

    return cartFiltered;
  }
}
