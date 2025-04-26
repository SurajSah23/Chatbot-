// ProductCard.jsx
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-contain object-center p-4"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 truncate" title={product.title}>
          {product.title}
        </h2>
        <div className="mt-2 flex items-center">
          <AiFillStar className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        <p className="mt-2 text-xl font-bold text-gray-900">${product.price}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
