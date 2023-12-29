import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("matches the taken snapshot", () => {
    const {container} = render(<Footer></Footer>)
    expect(container).toMatchSnapshot()
  })
})