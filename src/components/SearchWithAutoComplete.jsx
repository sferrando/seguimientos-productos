import { useState, useEffect } from 'react';
import * as API from "../services/products";


export function SearchWithAutocomplete() {  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getAllProducts().then(setProducts)
  }, []);

  const fields = { value: 'Title' };
  const htmlAttributes = { name: "country", maxlength: "2", title: "AutoComplete" };
  return (
    <></>
  );
}
