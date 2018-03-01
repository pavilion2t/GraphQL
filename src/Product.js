import React from 'react'
import './Product.css'

const Product = (props) => (
  <div className='product-wrap'>
    <div className='product-img-wrap'>
      <img src={props.productData.product.image_url} alt="" className='product-img'/>
    </div>
    <div className='product-info'>
      <span className='product-name'>{props.productData.product.name}</span>
      <span className='product-price'>{props.productData.price}</span>
    </div>
    <button className='add-to-cart' onClick={()=>props.onAddClick(props.productData)}>加入购物车</button>
  </div>
)

export default Product
