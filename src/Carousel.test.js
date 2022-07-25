import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// Smoke Tests
it("'Carousel' component renders without crashing", function() {
  render(<Carousel />);
});

// Snapshot Tests
it("'Carousel' matches snapshot", function() {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  
  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  
  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it("works when you click on the left/right arrow show/hidden", function() {
  const { queryByTestId } = render(<Carousel />);

  // expect the right arrow is show, but not the left arrow
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the left and right arrows are show
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  expect(queryByTestId("left-arrow")).toBeInTheDocument();

  // move forward in the carousel
  fireEvent.click(rightArrow);

  // expect the left arrow is show, but not the right arrow
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
  expect(queryByTestId("left-arrow")).toBeInTheDocument();

  // move 2 places backware in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);
  fireEvent.click(leftArrow);

  // expect the right arrow is show, but not the left arrow
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();
});