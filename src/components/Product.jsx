import PropTypes from "prop-types";
import { useState } from "react";
import Spinner from "../assets/Spinner-1s-200px.svg";
import Fail from "../assets/fail-1.1s-200px.svg";
import { useImageUrl } from "../utils/useUrl";
function Product({
  id,
  title,
  imageUrl,
  price,
  rating,
  description,
  handleAdding,
  selectedAmount,
  cart = false,
}) {
  const [amount, setAmount] = useState(0);
  const { loading, error, imgSrc } = useImageUrl(imageUrl);

  const product = {
    id,
    title,
    imageUrl,
    price,
    description,
    rating,
  };
  function add() {
    handleAdding({ ...product, amount });
  }
  return (
    <div className="product" style={{ display: "grid", maxWidth: "300px", justifyItems: "center", gap:"10px"}}>
      {loading ? (
        <img src={Spinner} alt="loading" width="200px" />
      ) : error ? (
        <img src={Fail} alt="Failed to fetch" width="200px" />
      ) : (
        <img src={imgSrc} alt="" />
      )}

      <h2>{title}</h2>
      <h2>Price:{price}</h2>
      <h2>
        Rating: {rating.rate} ({rating.count})
      </h2>
      <p>{description}</p>
      {cart === false ? (
        <>
          <label htmlFor={"amount" + id}>
            Amount:
            <input
              value={amount}
              min={0}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              name="amount"
              id={"amount" + id}
            />
          </label>
          <button className="addButton" onClick={add}>Add to cart</button>
        </>
      ) : (
        <h2>Amount:{selectedAmount}</h2>
      )}
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  handleAdding: PropTypes.func,
  cart: PropTypes.bool,
  selectedAmount: PropTypes.string,
};
export default Product;
