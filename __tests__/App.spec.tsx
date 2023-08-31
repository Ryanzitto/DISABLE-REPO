import { render } from "@testing-library/react";
import App from "../src/App";

test("Canvas should be rendered", () => {
  const { getByTestId } = render(<App />);
  const canvasElement = getByTestId("Exp");
  expect(canvasElement).toBeTruthy();
});
