import { Router } from 'express';
import { Product } from '../models/products';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
