import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import EmailInput from '../common/EmailInput';

describe("EmailInput Component", () => {
    it("renders without crashing", () => {
        render(<EmailInput handleEmailChange={() => {}} />);
        expect(screen.getByTestId("email-input-testId")).toBeInTheDocument();
    });

    it("calls handleEmailChange on input change", () => {
        const mockHandleEmailChange = vi.fn();
        render(<EmailInput handleEmailChange={mockHandleEmailChange} />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });

        expect(mockHandleEmailChange).toHaveBeenCalledWith("test@example.com");
    });

    it("shows error message for invalid email", () => {
        render(<EmailInput handleEmailChange={() => {}} errorMessage="Invalid email address" />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: "invalid-email" } });

        expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });

    it("does not show error message for valid email", () => {
        render(<EmailInput handleEmailChange={() => {}} errorMessage="Invalid email address" />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: "sunil.tripathi@spglobal.com" } });

        expect(screen.queryByText("Invalid email address")).toHaveClass('visibility-hidden');
    });

    it("hides error message when input is empty", () => {
        render(<EmailInput handleEmailChange={() => {}} errorMessage="Invalid email address" />);
        
        const emailInput = screen.getByTestId("email-input-testId") as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: "" } });

        expect(screen.queryByText("Invalid email address")).toHaveClass('visibility-hidden');
    });
});
