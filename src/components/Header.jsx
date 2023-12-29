import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Header({ shop = false, amount }) {
  return (
    <header>
      <h1>SwiftCart Provisions Express</h1>
      <nav>
        <Link to="..">Home</Link>
        <Link to={shop ? "./" : "./shop"}>Shop</Link>
        {shop ? <h1>cart:{amount}</h1> : null}
      </nav>
    </header>
  );
}

Header.propTypes = {
  shop: PropTypes.bool,
  amount: PropTypes.number,
};
