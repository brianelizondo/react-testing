import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinFlip from "./CoinFlip";

// Smoke Tests
it("'CoinFlip' component renders without crashing", function() {
    render(<CoinFlip />);
});

// Snapshot Tests
it("'CoinFlip' matches snapshot", function() {
    const {asFragment} = render(<CoinFlip />);
    expect(asFragment()).toMatchSnapshot();
});

it("works before click on the flip button", function() {
    const { queryByTestId, queryByAltText } = render(<CoinFlip />);
  
    // expect not show a coin
    expect(queryByAltText("head")).not.toBeInTheDocument();
    expect(queryByAltText("tail")).not.toBeInTheDocument();
    expect(queryByTestId("flip-me")).toBeInTheDocument();
  
});

it("works when click on the flip button and show HEAD", function() {
    const { queryByTestId, queryByAltText } = render(<CoinFlip />);
  
    // expect not show a coin
    expect(queryByAltText("head")).not.toBeInTheDocument();
    expect(queryByAltText("tail")).not.toBeInTheDocument();
    expect(queryByTestId("flip-me")).toBeInTheDocument();
  
    // flip the coin button
    const flipButton = queryByTestId("flip-me");
    fireEvent.click(flipButton);
  
    // expect to show a coin
    expect(queryByAltText("head")).toBeInTheDocument();
    expect(queryByAltText("tail")).not.toBeInTheDocument();
});

it("works when click on the flip button and show TAIL", function() {
    const { queryByTestId, queryByAltText } = render(<CoinFlip />);
  
    // expect not show a coin
    expect(queryByAltText("head")).not.toBeInTheDocument();
    expect(queryByAltText("tail")).not.toBeInTheDocument();
    expect(queryByTestId("flip-me")).toBeInTheDocument();
  
    // flip the coin button
    const flipButton = queryByTestId("flip-me");
    fireEvent.click(flipButton);
  
    // expect to show a coin
    expect(queryByAltText("head")).not.toBeInTheDocument();
    expect(queryByAltText("tail")).toBeInTheDocument();
});