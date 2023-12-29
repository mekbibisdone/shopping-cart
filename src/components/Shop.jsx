import Product from "./Product";
import useUrl from "../utils/useUrl";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const url = "https://fakestoreapi.com/products";

export default function Shop() {
  const { json: products, loading, error } = useUrl(url);
  const [amount, setAmount] = useState(0);
  function handleAdding(newAmount) {
    setAmount(amount + newAmount);
  }
  if (error) return <h1>Sorry couldn&apos;t load products</h1>;
  return (
    <>
    <Header shop={true} amount={amount}></Header>
    <main>
      
      {loading ? (
        <h1>Loading</h1>
      ) : (
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            description={product.description}
            price={product.price}
            rating={product.rating}
            handleAdding={handleAdding}
          ></Product>
        ))
      )}
    </main>
    <Footer></Footer>
    </>
    
  );
}
