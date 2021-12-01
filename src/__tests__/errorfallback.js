import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorFallback from "../error/ErrorFallback";
import { render, screen } from "@testing-library/react";

test("test ErrorFallback", async () => {
  render(
    <Router>
      <ErrorFallback {...{ error: {} }} />
    </Router>
  );
  let text = await screen.findByText(/Unknown Error/i);
  expect(text).toBeInTheDocument();
});
