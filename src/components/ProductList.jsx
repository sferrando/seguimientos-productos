import { useState, useEffect } from 'react';
import * as API from "../services/products";
import { ProductItem } from "./ProductItem";


export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getAllProducts().then(setProducts)
  }, []);

  return (
    <div className='max-w-prose bg-gray-100'>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}