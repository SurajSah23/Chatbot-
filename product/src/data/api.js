// api.js
export const fetchProducts = async () => {
    try {
      const cachedProducts = localStorage.getItem('products')
      if (cachedProducts) {
        return JSON.parse(cachedProducts)
      }
  
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
  
      const data = await response.json()
      localStorage.setItem('products', JSON.stringify(data))
      return data
    } catch (error) {
      throw error
    }
  }
  