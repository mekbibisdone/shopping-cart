import PropTypes from "prop-types";
function Product({ title, imageUrl, price, rating, description }) {
  return (
    <div>
      <img src={imageUrl} alt="" width="200px"/>
      <h2>{title}</h2>
      <h2>Price:{price}</h2>
      <h2>
        Rating: {rating.rate} ({rating.count})
      </h2>
      <p>{description}</p>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};
export default Product;
