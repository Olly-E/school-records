import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

it("should have Student test", () => {
  render(<Home />);

  const myElem = screen.getByText("school");

  expect(myElem).toBeInTheDocument();
});
