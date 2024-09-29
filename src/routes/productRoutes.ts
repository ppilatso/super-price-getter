import { Router } from 'express';
import { Product } from '../models/products';

const router = Router();

router.post('/', async (req, res) => {
  const { name, price, store } = req.body;
  try {
    const product = new Product({ name, price, store });
    await product.save();
    res.status(201).json(product);
  } catch (error: unknown) {
    res.status(400).json({ error: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
