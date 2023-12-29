import PropTypes from "prop-types";
import { useState } from "react";
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
    <div>
      <img src={imageUrl} alt="" width="200px" />
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
          <button onClick={add}>Add to cart</button>
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
