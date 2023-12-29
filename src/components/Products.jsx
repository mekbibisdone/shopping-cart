import Product from "./Product";
import useUrl from "../utils/useUrl";

const url = "https://fakestoreapi.com/products";

export default function Products() {
  const { json: products, loading, error } = useUrl(url);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Sorry couldn&apos;t load products</h1>;
  return (
    <main>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          imageUrl={product.image}
          description={product.description}
          price={product.price}
          rating={product.rating}
        ></Product>
      ))}
    </main>
  );
}
