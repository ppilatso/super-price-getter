import { checkersAdapter } from "../../adapters/checkers";
import IProduct from "../interfaces/product.interface";

export class supermarketFactory {
  static getScraper(store: string): () => Promise<IProduct[]> {
    switch(store) {
      case 'checkers':
        return checkersAdapter;
      default:
        throw new Error(`No Scraper available for the store: ${store}.`)
    }
  }
}
