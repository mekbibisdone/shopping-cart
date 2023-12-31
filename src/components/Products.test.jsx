import { render, screen } from "@testing-library/react";
import { expect, vi, it } from "vitest";
import Products from "./Products";
import { useProductsUrl } from "../utils/useUrl";
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
