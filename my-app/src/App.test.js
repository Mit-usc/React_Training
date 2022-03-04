import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("adding new item into list", () => {
  render(<App />);
  const linkElement = screen.getByText("To-Do List");
  expect(linkElement).toBeInTheDocument();
});
