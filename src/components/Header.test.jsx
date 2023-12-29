import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Header", () => {
  it("matches the snapshot taken", () => {
    const { container } = render(
      <BrowserRouter>
        <Header> </Header>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
