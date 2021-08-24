import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  test("should show 0 on title", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toBeInTheDocument();
  });

  test("should contain counter__title class on title", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toHaveClass("counter__title");
  });

  test("should not start title whith classes counter__title--increment or counter__title--decrement", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  test("should contain an increment button", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(incrementButton).toBeInTheDocument();
  });

  test("should contain an increment button with classes button and button--increment", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(incrementButton).toHaveClass("button");
    expect(incrementButton).toHaveClass("button--increment");
  });

  test("should contain and decrement button", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(decrementButton).toBeInTheDocument();
  });

  test("should contain an decrement button with classes button and button--decrement", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(decrementButton).toHaveClass("button");
    expect(decrementButton).toHaveClass("button--decrement");
  });

  test("should increment 1 when increment button is clicked", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("should decrement 1 when decrement button is clicked", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(decrementButton);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("should add counter__title--increment class on title, when value is greater than 0", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(incrementButton);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  test("should add counter__title--decrement class on title, whe value is lower than 0", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );
    userEvent.click(decrementButton);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});
