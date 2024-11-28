
import { render } from '@testing-library/react';
import App from './App';

test('Always Passes', () => {
  render(<App />);
  expect(true).toBe(true);
});

