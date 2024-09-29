import puppeteer from "puppeteer";
import IProduct from "../shared/interfaces/product.interface";

export const checkersAdapter = async (): Promise<IProduct[]> => {
  console.log('Checkers Shopping...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.goto(
    'https://www.checkers.co.za/c-2256/All-Departments'
    , { waitUntil: 'networkidle2' }
  );

  const products: IProduct[] = await page.evaluate(() => {
    const elements = document.querySelectorAll('.item-product__content');

    return Array.from(elements).map((element) => ({
      name: element.querySelector('.product-listening-click')?.textContent?.trim() || 'no description',
      price: element.querySelector('.now')?.textContent?.trim().replace('R', '') || 'no price',
      store: 'Checkers'
    }));
  });

  console.log('Scraped Products:', products);
  await browser.close();
  return products;
}
