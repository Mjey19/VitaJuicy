import React from 'react'
import './MyProduct.scss'
function MyProduct() {
  return (
    <div>
        <h1>Наша Продукция</h1>
        <div className="product-img__block">
            <img src="img/people.png" alt="" className="__people" />
            <img src="img/asort.png" alt="" className="__product-img" />
        </div>
    </div>
  )
}

export default MyProduct