import { render } from "@testing-library/react";
import Header from "./Header";
import { describe, expect, it } from "vitest";

describe("Header", () => {
  it("matches the snapshot taken", () => {
    const { container } = render(<Header></Header>);
    expect(container).toMatchSnapshot();
  });
});
