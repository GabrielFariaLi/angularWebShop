import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = {
  // Quando tivermos 1 coluna a altura esperada será de 400
  // e por assim em diante
  1: 400,
  3: 335,
  4: 350,
};
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  // numero de items por coluna default = 3
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  //importando servicos do carrinho
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategoria: string): void {
    this.category = newCategoria;
  }
  onAddToCart(produto: Product): void {
    this.cartService.addToCart({
      product: produto.image,
      name: produto.title,
      price: produto.price,
      quantity: 1,
      id: produto.id,
    });
  }
}
