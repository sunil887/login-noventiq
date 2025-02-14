import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { useLocaleContext } from '../index';
import { LocaleContext } from '../../context/locale-context';

const wrapper = ({ children, value }) => (
  <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
);

describe('useLocaleContext hook', () => {
  it('should initialize with the context value', () => {
    const mockLocale = 'en-US';
    
    const { result } = renderHook(() => useLocaleContext(), {
      wrapper: ({ children }) => wrapper({ children, value: mockLocale })
    });
    
    expect(result.current.locale).toBe(mockLocale);
  });

  it('should update locale when setLocale is called', () => {
    const mockLocale = 'en-US';
    const { result } = renderHook(() => useLocaleContext(), {
      wrapper: ({ children }) => wrapper({ children, value: mockLocale })
    });

    act(() => {
      result.current.setLocale('fr');
    });

    expect(result.current.locale).toBe('fr');
  });
});
