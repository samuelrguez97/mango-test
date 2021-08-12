import React from 'react'
import { render, screen } from '@testing-library/react'

import "core-js/stable";
import "regenerator-runtime/runtime";

import Exercise2 from '../pages/Exercise2/container/Exercise2Container'

jest.mock('./../service/ExercisesService/ExercisesService');

describe('Exercise2 Tests', () => {

  test('Should render', () => {
    render(<Exercise2 />)
    const exercise2 = screen.getByText(/exercise 2/i);
    expect(exercise2).toBeTruthy()
  })

})