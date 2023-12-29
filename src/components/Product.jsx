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
}) {
  const [amount, setAmount] = useState(0);
  function add() {
    handleAdding(Number(amount));
  }
  return (
    <div>
      <img src={imageUrl} alt="" width="200px" />
      <h2>{title}</h2>
      <h2>Price:{price}</h2>
      <h2>
        Rating: {rating.rate} ({rating.count})
      </h2>
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
      <p>{description}</p>
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
  handleAdding: PropTypes.func.isRequired,
};
export default Product;
