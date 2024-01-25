import { Link } from "react-router-dom";

export function ProductItem(product) {
  return (
    <Link to={`/seguimientos-productos/products/${product.id}`}>
      <div key={product.id} className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl">
        <p className="mb-3 font-normal text-gray-700 text-center p-4 truncate" title={product.title}>
            {product.title}
        </p>
        <img
          src={product.image}
          alt={product.title}
          className="rounded-t-lg h-[100px] max-w-[100px] mx-auto" />
        <div className="p-5 mx-auto text-center">
          <p className='text-3xl font-medium text-gray-700 p-1'>${product.price}</p>
          <Link to={`/seguimientos-productos/products/${product.id}`}>
            <button className='inline-flex items-center bg-rojo hover:bg-amarillo px-3 py-1 rounded-full font-medium text-white shadow-lg'>
              Ver producto
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}