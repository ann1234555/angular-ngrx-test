export interface Book {
  id: string;
  volumnInfo: {
    title: string;
    authors: Array<string>;
  };
}
