import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as API from "../services/products";
import { useNavigate} from "react-router-dom";

export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
          <button onClick={() => navigate(-1)}>Back</button> 
        </>
    );
};


export function ProductDetails() {
  const [product, setProduct] = useState([]);
  let productId = useParams().ProductId

  useEffect(() => {
    API.getProductById(productId).then(setProduct)
  }, [productId]);

  return (
    <>
      <BackButton/>
      <div className='max-w-prose bg-gray-100'>
        <div className="text-lg">
          <img
          src={product.image}
          alt={product.title}
          className="rounded-t-lg max-h-[150px] max-w-[150px] mx-auto" />
          {product.title}
        </div>
      </div>
    </>
  );
}