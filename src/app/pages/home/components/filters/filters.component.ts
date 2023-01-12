import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: `filters.component.html`,
  styles: [],
})
export class FiltersComponent implements OnInit {
  @Output() showCategoria = new EventEmitter<string>();
  categories = ["sapatos", "esportes"];
  constructor() {}
  ngOnInit(): void {}

  onShowCategory(categoria: string): void {
    // assim que clicarmos em alguma categoria listada no html
    // podemos usar a variavel output para emitir o valor da categoria selecionada
    // para toda a aplicação
    this.showCategoria.emit(categoria);
  }
}
