import { render, screen, fireEvent } from '@testing-library/react';
import { EmailInput } from '../emailInput';  // Adjust the import path if necessary
import { describe, it, expect, vi } from 'vitest';

describe('EmailInput', () => {
  it('should render email input field', () => {

    const mockHandleEmailChange = vi.fn();

    render(<EmailInput handleEmailChange={mockHandleEmailChange} />);

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });

  it('should display error message for invalid email', async () => {
  
    const mockHandleEmailChange = vi.fn();
    render(<EmailInput handleEmailChange={mockHandleEmailChange} />);

    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const errorMessage = screen.getByText('Invalid email');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should call handleEmailChange with valid email', async () => {

    const mockHandleEmailChange = vi.fn();
    render(<EmailInput handleEmailChange={mockHandleEmailChange} />);

    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(mockHandleEmailChange).toHaveBeenCalledWith('test@example.com');
  });

  it('should not call handleEmailChange with public domain email', async () => {
  
    const mockHandleEmailChange = vi.fn();
    render(<EmailInput handleEmailChange={mockHandleEmailChange} />);

  
    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'test' } });

    expect(mockHandleEmailChange).not.toHaveBeenCalledWith('test');
  });
});
