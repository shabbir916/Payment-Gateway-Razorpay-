import React from 'react'
import './ProductCard.css'
import PaymentButton from './PaymentButton'

const ProductCard = ({ product }) => {
  if (!product) return null

  const { title, description, image, price } = product
  const amount = price?.amount ?? 0
  const currency = price?.currency ?? 'INR'

  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency
  }).format(amount/100)

  const handleBuy = () => {
    // Replace with real checkout wiring when ready
    window.alert(`Proceeding to buy "${title}" for ${formatted}`)
  }

  return (
    <article className="pcard">
      <div className="pcard-media">
        <img src={image} alt={title} className="pcard-img" />
      </div>
      <div className="pcard-body">
        <h3 className="pcard-title">{title}</h3>
        <p className="pcard-desc">{description}</p>
        <div className="pcard-footer">
          <div className="pcard-price">{formatted}</div>
          <div className="pcard-actions">
            <button className="btn btn-outline">Add to Cart</button>
            <PaymentButton />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
