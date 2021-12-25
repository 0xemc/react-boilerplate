import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header/>", () => {
  it("renders as expected", () => {
    render(<Header />);
    expect(screen.getByText(""));
  });
});
