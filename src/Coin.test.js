import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

// Smoke Tests
it("'Coin' component renders without crashing", function() {
    render(<Coin />);
});

// Snapshot Tests
it("'Coin' matches snapshot", function() {
    const {asFragment} = render(<Coin />);
    expect(asFragment()).toMatchSnapshot();
});