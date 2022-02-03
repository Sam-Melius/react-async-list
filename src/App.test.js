import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/We have what you are looking for!/i);
  expect(linkElement).toBeInTheDocument();
});
