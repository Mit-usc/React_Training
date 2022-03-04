import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("adding new item into list", () => {
  render(
    <MemoryRouter>
      {" "}
      <App />{" "}
    </MemoryRouter>
  );
  const linkElement = screen.getByText("To-Do List");
  expect(linkElement).toBeInTheDocument();
});

test("check column 1", () => {
  render(
    <MemoryRouter>
      {" "}
      <App />{" "}
    </MemoryRouter>
  );

  const linkElement = screen.getByText("index");
  expect(linkElement).toBeInTheDocument();
});

test("add functionality works, click add, input item, and submit", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      {" "}
      <App />{" "}
    </MemoryRouter>
  );

  const addBtn = screen.getByTestId("addButton");
  fireEvent.click(addBtn);

  const addInpt = screen.getByTestId("addInput");
  fireEvent.change(addInpt, { target: { value: "Refactor code" } });
  expect(addInpt.value).toBe("Refactor code");

  const addSbmt = screen.getByTestId("addSubmit");
  fireEvent.click(addSbmt);

  const homeBtton = screen.getByTestId("homeButton");
  fireEvent.click(homeBtton);

  const checkAdd = screen.getByText("Refactor code");
  expect(checkAdd).toBeInTheDocument();
});
