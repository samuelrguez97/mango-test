import React from 'react'
import { render, screen } from '@testing-library/react'

import "core-js/stable";
import "regenerator-runtime/runtime";

import Exercise1 from '../pages/Exercise1/container/Exercise1Container'

jest.mock('./../service/ExercisesService/ExercisesService');

describe('Exercise1 Tests', () => {

  test('Should render', () => {
    render(<Exercise1 />)
    const exercise1 = screen.getByText(/exercise 1/i);
    expect(exercise1).toBeTruthy()
  })

})