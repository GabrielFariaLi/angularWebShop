import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: `filters.component.html`,
  styles: [],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategoria = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;
  constructor(private storeService: StoreService) {}
  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((response) => {
        this.categories = response;
      });
  }

  onShowCategory(categoria: string): void {
    // assim que clicarmos em alguma categoria listada no html
    // podemos usar a variavel output para emitir o valor da categoria selecionada
    // para toda a aplicação
    this.showCategoria.emit(categoria);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe;
    }
  }
}
