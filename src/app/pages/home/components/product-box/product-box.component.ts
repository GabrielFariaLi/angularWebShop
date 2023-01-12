import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: `./product-box.component.html`,
  styles: [],
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "dummyTitle",
    category: "dummyCategory",
    price: 132,
    description: "dummyDescription",
    image: "https://via.placeholder.com/150",
  };
  @Output() addToCart = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onAddToCart(): void {
    // alguem clicou no shopping cart e então podemos adicionar esse produto no carrinho
    this.addToCart.emit(this.product);
  }
}
