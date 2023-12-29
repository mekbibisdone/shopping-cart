import { Link } from "react-router-dom"
export default function Header() {
  return (
    <header>
      <h1>SwiftCart Provisions Express</h1>
      <nav>
        <Link to="./Home">Home</Link>
        <Link to="./Shop">Shop</Link>
        <a href="#">Shopping Cart</a>
      </nav>
    </header>
  )
}