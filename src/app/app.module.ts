import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter/counter.reducer";
import { booksReducer } from "./state/books.reducer";
import { collectionReducer } from "./state/collection.reducer";

import { MyCounterComponent } from "./counter/my-counter/my-counter.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookCollectionComponent } from "./book-list/book-collection.component";

@NgModule({
  declarations: [AppComponent, MyCounterComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
