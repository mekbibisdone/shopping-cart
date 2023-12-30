import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Checkout from "./Checkout";
it("renders a helpful message when given an empty array of selected products", () => {
  render(<Checkout selectedProducts={[]}></Checkout>);
  expect(() =>
    screen.getByRole("heading", { name: "You haven't selected any product" }),
  ).not.toThrow();
});

it("renders the selected products when given an an array with a selected product", () =>{
  const product = {
    id: 0,
    title: "bluh",
    imageUrl: "bluh",
    price: 10,
    rating: { rate: 2, count: 30 },
    description: "water",
    selectedAmount: 1,
  };
  render(<Checkout selectedProducts={[product]}></Checkout>);
  expect(() => screen.getByRole("heading",{name:product.title})).not.Throw()
})
