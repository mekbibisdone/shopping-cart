import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./Product";
import { expect, vi, it } from "vitest";

const product = {
  id: 0,
  title: "bluh",
  imageUrl: "bluh",
  price: 10,
  rating: { rate: 2, count: 30 },
  description: "water",
};
it("calls add amount handler when it is called", async () => {
  const handleAdding = vi.fn();
  const user = userEvent.setup();
  render(
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      rating={product.rating}
      description={product.description}
      handleAdding={handleAdding}
    ></Product>,
  );
  const button = screen.getByRole("button");
  await user.click(button);
  expect(handleAdding).toHaveBeenCalled();
});
it("doesn't call the add handler when it isn't clicked", () => {
  const handleAdding = vi.fn();
  render(
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      rating={product.rating}
      description={product.description}
      handleAdding={handleAdding}
    ></Product>,
  );

  expect(handleAdding).not.toHaveBeenCalled();
})