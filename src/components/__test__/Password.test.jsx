import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import PasswordInput from "../common/PasswordInput";

describe("PasswordInput Component", () => {
    it("to be in the document", () => {
        render(<PasswordInput handlePasswordChange={() => {}} />);
        expect(screen.getByTestId("pswd-input-testid")).toBeInTheDocument();
    });

    it("calls handlePasswordChange when input changes", () => {
        const mockHandlePasswordChange = vi.fn();
        render(<PasswordInput handlePasswordChange={mockHandlePasswordChange} />);

        const passwordInput = screen.getByTestId("pswd-input-testid");
        fireEvent.change(passwordInput, { target: { value: "p@sswprd" } });

        expect(mockHandlePasswordChange).toHaveBeenCalledWith("p@sswprd");
    });

    it("toggles password visibility when eye icon is clicked", () => {
        render(<PasswordInput handlePasswordChange={() => {}} />);

        const passwordInput = screen.getByTestId("pswd-input-testid");
        const toggleIcon = screen.getByTestId("togglePassword-testid");

        expect(passwordInput).toHaveAttribute("type", "password");

        fireEvent.click(toggleIcon);
        expect(passwordInput).toHaveAttribute("type", "text");

        fireEvent.click(toggleIcon);
        expect(passwordInput).toHaveAttribute("type", "password");
    });

    it("shows default forgot password label", () => {
        render(<PasswordInput handlePasswordChange={() => {}} />);
        expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    });

    it("shows custom forgot password label when provided", () => {
        render(<PasswordInput handlePasswordChange={() => {}} forgotPasswordLabel="Reset Password" />);
        expect(screen.getByText("Reset Password")).toBeInTheDocument();
    });
});
