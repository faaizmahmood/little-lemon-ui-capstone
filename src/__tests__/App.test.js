import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders text on home page', () => {
  render(
    <MemoryRouter>
        <App />
    </MemoryRouter>
    );
  //  fix linkElement below to pass test with the current App.js code
  const h2Element = screen.getByText(/This weeks specials!/i);
  // const linkElement = screen.getByText(/learn react/i);
  expect(h2Element).toBeInTheDocument();
});