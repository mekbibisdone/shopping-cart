import PropTypes from "prop-types";
import Product from "./Product";
export default function Checkout({ selectedProducts }) {
  return (
    <>
      <main>
        {selectedProducts.length > 0 ? selectedProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
            rating={product.rating}
            selectedAmount={product.amount}
            cart={true}
          ></Product>
        )): <h1>You haven&apos;t selected any product</h1>}
      </main>
        <button>Pay</button>
    </>
  );
}

Checkout.propTypes = {
  selectedProducts: PropTypes.array,
};
