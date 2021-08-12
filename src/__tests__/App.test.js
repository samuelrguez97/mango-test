import React from 'react'

import "core-js/stable";
import "regenerator-runtime/runtime";

import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/exercise 1/i);
  expect(linkElement).toBeTruthy();
});
