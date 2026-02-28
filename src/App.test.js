// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CodeSurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CodeSurge/i);
    expect(titleElement).toBeInTheDocument();
});
