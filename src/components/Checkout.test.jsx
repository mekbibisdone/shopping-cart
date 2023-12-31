import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Checkout from "./Checkout";
it("renders a helpful message when given an empty array of selected products", () => {
  render(<Checkout selectedProducts={[]}></Checkout>);
  expect(() =>
    screen.getByRole("heading", { name: "You haven't selected any product" }),
  ).not.toThrow();
});

it("renders the selected product when given an an array with a selected product", () => {
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
  expect(() =>
    screen.getByRole("heading", { name: product.title }),
  ).not.Throw();
});

it("renders the selected products when given an array with more than one selected product", () => {
  const products = [
    {
      id: 0,
      title: "bluh",
      imageUrl: "bluh",
      price: 10,
      rating: { rate: 2, count: 30 },
      description: "water",
      selectedAmount: 1,
    },
    {
      id: 2,
      title: "fire",
      imageUrl: "flo",
      price: 10,
      rating: { rate: 2, count: 30 },
      description: "fire",
      selectedAmount: 2,
    },
  ];
  render(<Checkout selectedProducts={products}></Checkout>);
  expect(() =>
    screen.getByRole("heading", { name: products[0].title }),
  ).not.Throw();
  expect(() =>
    screen.getByRole("heading", { name: products[1].title }),
  ).not.Throw();
});
