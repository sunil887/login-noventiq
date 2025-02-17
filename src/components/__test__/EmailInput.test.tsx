import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from 'vitest';

import EmailInput from '../common/EmailInput';

describe("EmailInput Component", () => {
    it("renders without crashing", () => {
        render(<EmailInput handleEmailChange={() => {}} />);
        expect(screen.getByTestId("email-input-testId")).toBeInTheDocument();
    });

    it("calls handleEmailChange on input change", async () => {
        const mockHandleEmailChange = vi.fn<(email: string) => void>();
        render(<EmailInput handleEmailChange={mockHandleEmailChange} />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        await userEvent.type(emailInput,"test@example.com");

        expect(mockHandleEmailChange).toHaveBeenCalledWith("test@example.com");
    });

    it("shows error message for invalid email", async () => {
        render(<EmailInput handleEmailChange={() => {}} errorMessage="Invalid email address" />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        await userEvent.type(emailInput,"invalid-email");

        expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });

    it("does not show error message for valid email", async () => {
        render(<EmailInput handleEmailChange={() => {}} errorMessage="Invalid email address" />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        await userEvent.type(emailInput,"sunil.tripathi@spglobal.com");

        expect(screen.queryByText("Invalid email address")).toHaveClass('visibility-hidden');
    });

    it("hides error message when input is empty", async () => {
        render(<EmailInput handleEmailChange={() => {}} errorMessage="Invalid email address" />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        await userEvent.type(emailInput," ");

        expect(screen.queryByText("Invalid email address")).toHaveClass('visibility-hidden');
    });
});
