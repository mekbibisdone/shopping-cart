import { render, screen } from "@testing-library/react";
import { expect, vi, it } from "vitest";
import Products from "./Products";
import { useProductsUrl, useImageUrl } from "../utils/useUrl";
vi.mock("../utils/useUrl.js");
it("renders the loading screen when the products haven't been loaded", () => {
  useProductsUrl.mockReturnValue({ loading: true, json: {}, error: false });
  const handleAdding = vi.fn();
  render(<Products handleAdding={handleAdding}></Products>);
  expect(() => screen.getByRole("heading", { name: "Loading" })).not.toThrow();
});

it("renders the error message when error is set true", () => {
  useProductsUrl.mockReturnValue({ loading: false, json: {}, error: true });
  const handleAdding = vi.fn();
  render(<Products handleAdding={handleAdding}></Products>);
  expect(() =>
    screen.getByRole("heading", { name: "Sorry couldn't load products" }),
  ).not.toThrow();
});

it("renders the the products when the request is successful", () => {
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
  useProductsUrl.mockReturnValue({
    loading: false,
    json: products,
    error: false,
  });
  useImageUrl.mockReturnValue({ loading: true, imgSrc: "", error: false });
  const handleAdding = vi.fn();
  render(<Products handleAdding={handleAdding}></Products>);
  expect(() =>
    screen.getByRole("heading", { name: products[0].title }),
  ).not.Throw();
  expect(() =>
    screen.getByRole("heading", { name: products[1].title }),
  ).not.Throw();
});
