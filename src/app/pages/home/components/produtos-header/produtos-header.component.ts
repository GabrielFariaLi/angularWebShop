import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-produtos-header",
  templateUrl: `./produtos-header.component.html`,
})
export class ProdutosHeaderComponent implements OnInit {
  // mandar data desse componente para componentes externos
  // numero de colunas que queremos dar display em uma linha
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = "---";
  itemsShowCount = 12;
  constructor() {}
  ngOnInit(): void {}
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNumber: number): void {
    // efetivamente emite o evento com o numero de colunas pretendidas
    this.columnsCountChange.emit(colsNumber);
  }
}
