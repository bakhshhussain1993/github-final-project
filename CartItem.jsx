import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: Number(quantity),
      })
    );
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some beautiful plants to your cart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>
          Total Cost: <strong>${totalCost.toFixed(2)}</strong>
        </p>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Price: ${item.price.toFixed(2)}</p>

              <div className="quantity-control">
                <label htmlFor={`quantity-${item.id}`}>
                  Quantity:
                </label>

                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      item.id,
                      e.target.value
                    )
                  }
                />
              </div>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                type="button"
                onClick={() => dispatch(removeItem(item.id))}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ${totalCost.toFixed(2)}</h2>

        <button
          type="button"
          className="checkout-button"
          onClick={() => alert("Proceeding to checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
