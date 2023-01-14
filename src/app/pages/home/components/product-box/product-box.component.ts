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
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onAddToCart(): void {
    // alguem clicou no shopping cart e então podemos adicionar esse produto no carrinho
    this.addToCart.emit(this.product);
  }
}
