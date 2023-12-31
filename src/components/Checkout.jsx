import PropTypes from "prop-types";
import Product from "./Product";
export default function Checkout({ selectedProducts }) {
  return (
    <>
      <main style={{display:"flex", flexDirection:"column", gap:"40px", alignItems:"center"}}>
        <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center", gap:"40px"}}>
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
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
            ))
          ) : (
            <h1>You haven&apos;t selected any product</h1>
          )}
        </div>

        <button className="payButton">Pay</button>
      </main>
    </>
  );
}

Checkout.propTypes = {
  selectedProducts: PropTypes.array,
};
