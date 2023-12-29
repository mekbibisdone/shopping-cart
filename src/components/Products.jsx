import Product from "./Product";
import useUrl from "../utils/useUrl";
import PropTypes from "prop-types";
const url = "https://fakestoreapi.com/products";

export default function Products({ handleAdding }) {
  const { json: products, loading, error } = useUrl(url);
  if (error) return <h1>Sorry couldn&apos;t load products</h1>;
  return (
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
  );
}

Products.propTypes = {
  handleAdding: PropTypes.func,
};
