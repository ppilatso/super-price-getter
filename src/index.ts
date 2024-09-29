import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';
import dotenv from 'dotenv';
import { supermarketFactory } from './shared/factories/supermarketFactories';
import { Product } from './models/products';
import { log } from 'console';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/supermarket';

app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    scrapeAllSupermarkets();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

const scrapeAllSupermarkets = async () => {
  try {
    const supermarket = ['checkers'];
    const allProducts = [];


    for (const store of supermarket) {
      const scrape = supermarketFactory.getScraper(store);
      const products = await scrape();
      console.log('my products: ', products);
      allProducts.push(...products);
    }

    await Product.insertMany(allProducts);
    console.log('Products saved to database.');
  } catch (error) {
    console.error('Error scraping products: ', error);
  } finally {
    mongoose.connection.close();
  }
}

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
