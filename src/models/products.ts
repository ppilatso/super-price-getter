import { Schema, model } from 'mongoose';
import IProduct from '../shared/interfaces/product.interface';

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  store: { type: String, required: true },
});

export const Product = model<IProduct>('Product', productSchema);
