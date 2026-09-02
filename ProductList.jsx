import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Succulent",
    image: "/images/aloe-vera.jpg",
    description: "A low-maintenance plant with soothing properties.",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "/images/snake-plant.jpg",
    description: "An attractive and easy-to-care-for indoor plant.",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    category: "Indoor",
    image: "/images/peace-lily.jpg",
    description: "A beautiful flowering plant that brightens indoor spaces.",
  },
  {
    id: 4,
    name: "Monstera",
    price: 30,
    category: "Tropical",
    image: "/images/monstera.jpg",
    description: "A popular tropical plant with distinctive leaves.",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 18,
    category: "Indoor",
    image: "/images/spider-plant.jpg",
    description: "A fast-growing plant suitable for homes and offices.",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 22,
    category: "Succulent",
    image: "/images/jade-plant.jpg",
    description: "A compact succulent known for its thick green leaves.",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <h3>{product.name}</h3>

              <p className="category">
                Category: {product.category}
              </p>

              <p>{product.description}</p>

              <p className="price">
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
