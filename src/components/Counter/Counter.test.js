import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  describe("Title", () => {
    it("should show 0 on title", () => {
      render(<Counter />);

      const counterTitle = screen.getByText("0");

      expect(counterTitle).toBeInTheDocument();
    });

    it("should contain counter__title class on title", () => {
      render(<Counter />);

      const counterTitle = screen.getByText("0");

      expect(counterTitle).toHaveClass("counter__title");
    });

    it("should not start title whith classes counter__title--increment or counter__title--decrement", () => {
      render(<Counter />);

      const counterTitle = screen.getByText("0");

      expect(counterTitle).not.toHaveClass("counter__title--increment");
      expect(counterTitle).not.toHaveClass("counter__title--decrement");
    });
  });

  describe("Increment Button", () => {
    it("should have an increment button", () => {
      render(<Counter />);

      const incrementButton = screen.getByRole("button", {
        name: /incrementar/i,
      });

      expect(incrementButton).toBeInTheDocument();
    });

    it("should have an increment button with classes button and button--increment", () => {
      render(<Counter />);

      const incrementButton = screen.getByRole("button", {
        name: /incrementar/i,
      });

      expect(incrementButton).toHaveClass("button");
      expect(incrementButton).toHaveClass("button--increment");
    });

    it("should increment 1 when increment button is clicked", () => {
      render(<Counter />);

      const incrementButton = screen.getByRole("button", {
        name: /incrementar/i,
      });

      expect(screen.queryByText("1")).toBeNull();
      userEvent.click(incrementButton);
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("should add counter__title--increment class on title, when value is greater than 0", () => {
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
  });

  describe("Decrement Button", () => {
    it("should contain and decrement button", () => {
      render(<Counter />);

      const decrementButton = screen.getByRole("button", {
        name: /decrementar/i,
      });

      expect(decrementButton).toBeInTheDocument();
    });

    it("should contain a decrement button with classes button and button--decrement", () => {
      render(<Counter />);

      const decrementButton = screen.getByRole("button", {
        name: /decrementar/i,
      });

      expect(decrementButton).toHaveClass("button");
      expect(decrementButton).toHaveClass("button--decrement");
    });

    it("should decrement 1 when decrement button is clicked", () => {
      render(<Counter />);

      const decrementButton = screen.getByRole("button", {
        name: /decrementar/i,
      });

      expect(screen.queryByText("-1")).toBeNull();
      userEvent.click(decrementButton);
      expect(screen.getByText("-1")).toBeInTheDocument();
    });

    it("should add counter__title--decrement class on title, whe value is lower than 0", () => {
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
});
