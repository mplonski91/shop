import React from 'react'
import { connect } from 'react-redux'

function CartLink ({ cartQuantity }) {
  return (
    <div className="cart_link">
      <span>Products in cart: </span>
      <span>{cartQuantity}</span>
    </div>)
}

const mapStateToProps = state => ({
  cartQuantity: Object.values(state.cart.data).reduce((prev, { quantity }) => prev + quantity, 0)
});

export default connect(mapStateToProps)(CartLink)
