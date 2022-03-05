import {
  render,
  screen,
  fireEvent,
  getByTestId,
  act,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
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
  render(
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

test("delete functionality works, click delete, input index, and submit", async () => {
  render(
    <MemoryRouter>
      {" "}
      <App />{" "}
    </MemoryRouter>
  );

  const delBtn = screen.getByTestId("deleteButton");
  fireEvent.click(delBtn);

  const delInpt = screen.getByTestId("deleteInput");
  fireEvent.change(delInpt, { target: { value: 2 } });
  expect(delInpt.value).toBe("2");

  const delSbmt = screen.getByTestId("deleteSubmit");
  fireEvent.click(delSbmt);

  const homeBtton = screen.getByTestId("homeButton");
  fireEvent.click(homeBtton);

  await waitForElementToBeRemoved(() =>
    screen.queryByText("enable cross-platform infomediaries")
  );
});

test("edit functionality works, click index number, input item, and submit", async () => {
  render(
    <MemoryRouter>
      {" "}
      <App />{" "}
    </MemoryRouter>
  );

  const indexElement = screen.getByText("5");
  expect(indexElement).toBeInTheDocument();
  fireEvent.click(indexElement);

  const editInpt = screen.getByTestId("enterEditInput");
  fireEvent.change(editInpt, {
    target: { value: "Hello add something here" },
  });
  expect(editInpt.value).toBe("Hello add something here");

  const editSbmt = screen.getByTestId("submitEditInput");
  fireEvent.click(editSbmt);

  const homeBtton = screen.getByTestId("homeButton");
  fireEvent.click(homeBtton);

  await waitFor(() => {
    screen.queryByText("Hello add something here");
  });

  screen.debug();
});
