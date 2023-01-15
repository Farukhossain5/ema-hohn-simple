import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = ({product, handleAddToCart}) => {
    const { id, category, name, seller, price, stock, rattings, img } = product;
    return (
           <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {rattings}</small></p>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                    <p className='cart-text'>Add To Cart</p> 
                    <FontAwesomeIcon icon={faShoppingCart} className='icon'></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default Product;