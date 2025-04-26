import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';

export default function Products() {
  const dispatch = useDispatch();
  const { items: products, categories, status, error } = useSelector((state) => state.products);
  const { category } = useParams();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  if (status === 'loading') {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md ${
                !category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat}`}
                className={`block px-4 py-2 rounded-md ${
                  category === cat ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price}</span>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
