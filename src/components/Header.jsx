import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Products from "./Products";
import Checkout from "./Checkout";
export default function Header() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { name } = useParams();
  function handleAdding(product) {
    let selectedProductsCopy = [...selectedProducts];
    if (product.amount >= 0) {
      const index = selectedProductsCopy.findIndex(
        (selectedProduct) => selectedProduct.id === product.id,
      );
      if (index >= 0) {
        if (product.amount == 0)
          selectedProductsCopy = selectedProductsCopy.filter(
            (selectedProduct) => selectedProduct.id !== product.id,
          );
        else selectedProductsCopy[index].amount = product.amount;
      } else {
        selectedProductsCopy.push(product);
      }
    }

    setSelectedProducts(selectedProductsCopy);
  }
  return (
    <>
      <header>
        <h1>SwiftCart Provisions Express</h1>
        <nav>
          <Link to="..">Home</Link>
          <Link to="../shop">Shop</Link>
          <div>
            <h1>
              cart:
              {selectedProducts.length > 0
                ? selectedProducts.reduce(
                    (prevAmount, nextProduct) =>
                      prevAmount + Number(nextProduct.amount),
                    0,
                  )
                : 0}
            </h1>
            <Link to="../checkout">Go to Checkout</Link>
          </div>
        </nav>
      </header>
      {name === "shop" ? (
        <Products handleAdding={handleAdding}></Products>
      ) : name === "checkout" ? (
        <Checkout selectedProducts={selectedProducts}></Checkout>
      ) : (
        <Home></Home>
      )}
      <Footer></Footer>
    </>
  );
}
