import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import PasswordInput from "../common/PasswordInput";

describe("PasswordInput Component", () => {
    it("to be in the document", () => {
        render(<PasswordInput handlePasswordChange={() => {}} />);
        expect(screen.getByTestId("pswd-input-testid")).toBeInTheDocument();
    });

    it("calls handlePasswordChange when input changes", async () => {
        const mockHandlePasswordChange = vi.fn();
        render(<PasswordInput handlePasswordChange={mockHandlePasswordChange} />);

        const passwordInput = screen.getByTestId("pswd-input-testid");
        await userEvent.type(passwordInput, "p@ssword");

        expect(mockHandlePasswordChange).toHaveBeenCalledWith("p@ssword");
    });

    it("toggles password visibility when eye icon is clicked", async () => {
        render(<PasswordInput handlePasswordChange={() => {}} />);

        const passwordInput = screen.getByTestId("pswd-input-testid");
        const toggleIcon = screen.getByTestId("togglePassword-testid");

        expect(passwordInput).toHaveAttribute("type", "password");

        await userEvent.click(toggleIcon);
        expect(passwordInput).toHaveAttribute("type", "text");

        await userEvent.click(toggleIcon);
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
