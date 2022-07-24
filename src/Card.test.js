import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke Tests
it("'Card' component renders without crashing", function() {
    render(<Card />);
});

// Snapshot Tests
it("'Card' matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});