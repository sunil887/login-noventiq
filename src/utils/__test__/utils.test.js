import { describe, it, expect } from 'vitest';
import { checkIsValidEmail } from '../index';


describe('checkIsValidEmail', () => {
  it('should return false for public domain emails', () => {
    expect(checkIsValidEmail('user@gmail.com')).toBe(false);
    expect(checkIsValidEmail('user@outlook.com')).toBe(false);
  });

  it('should return false for empty or undefined emails', () => {
    expect(checkIsValidEmail('')).toBe(false);
    expect(checkIsValidEmail(undefined)).toBe(false);
    expect(checkIsValidEmail(null)).toBe(false);
  });

  it('should return true for valid corporate domain emails', () => {
    expect(checkIsValidEmail('sunil.tripathi@noventiq.com')).toBe(true);
    expect(checkIsValidEmail('sunil.tripathi@spglobal.com')).toBe(true);
  });
});
