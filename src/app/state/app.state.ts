import { Book } from "../book-list/books.model";

export interface AppSstate {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
