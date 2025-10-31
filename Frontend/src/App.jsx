import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'

const sampleProduct = {
  price: {
    amount: 100000,
    currency: 'INR'
  },
  _id: '69032d801737596c32347e00',
  image:
    'https://images.unsplash.com/photo-1694570149728-b1011c2a772b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  title: 'test_title',
  description: 'test_desc',
  __v: 0
}

const App = () => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/product/get-item')
      .then((res) => {
        setProduct(res.data.product)
        console.log(res.data.product)
      })
      .catch(() => {
        // If API not running, we'll keep sampleProduct as fallback
      })
  }, [])

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'linear-gradient(180deg,#f7fbff,#ffffff)'}}>
      <ProductCard product={product || sampleProduct} />
    </div>
  )
}

export default App