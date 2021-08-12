import React from 'react'
import { render, fireEvent, createEvent } from '@testing-library/react'

import Range from '../components/Range/Range'

describe('Range Tests', () => {

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    jest.spyOn(React, 'useRef').mockReturnValue({ current: {} });
  });

  test('Should render', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const rangeBar = document.querySelector('#range-bar');
    expect(rangeBar).toBeTruthy()
  })

  test('Should render fixed', () => {
    render(<Range type="fixed" values={[1, 2, 3]} />)
    const rangeBar = document.querySelector('#range-bar');
    expect(rangeBar).toBeTruthy()
  })

  test('Should drag min', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const minBall = document.querySelector('#min');
    expect(minBall).toBeTruthy()
    fireEvent.drag(minBall)
  })

  test('Should drag min', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const minBall = document.querySelector('#min');
    expect(minBall).toBeTruthy()
    fireEvent.drag(minBall)
  })

  test('Should drag max', () => {
    render(<Range type="normal" values={{ min: 1, max: 100 }}  />)
    const maxBall = document.querySelector('#max');
    expect(maxBall).toBeTruthy()
    fireEvent.drag(maxBall)
  })

  test('Should dragstart', () => {
    render(<Range type="normal" values={{ min: 1, max: 100 }} />)
    const minBall = document.querySelector('#min');
    expect(minBall).toBeTruthy()
    const customEvent = createEvent.dragStart(minBall, { dataTransfer: { setDragImage: () => jest.fn() }})
    fireEvent(minBall, customEvent)
  })

  test('Should handle min change', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const minInput = document.querySelector('#min-input');
    expect(minInput).toBeTruthy()
    const customEvent = createEvent.change(minInput, { target: { value: 10 } })
    fireEvent(minInput, customEvent)
    expect(minInput.value).toBe("10")
  })

  test('Should handle min change NaN', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const minInput = document.querySelector('#min-input');
    expect(minInput).toBeTruthy()
    const customEvent = createEvent.change(minInput, { target: { value: 'NaN' } })
    fireEvent(minInput, customEvent)
    expect(minInput.value).toBe("1")
  })

  test('Should handle max change', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const maxInput = document.querySelector('#max-input');
    expect(maxInput).toBeTruthy()
    const customEvent = createEvent.change(maxInput, { target: { value: 1000 } })
    fireEvent(maxInput, customEvent)
    expect(maxInput.value).toBe("1000")
  })

  test('Should handle max change NaN', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    const maxInput = document.querySelector('#max-input');
    expect(maxInput).toBeTruthy()
    const customEvent = createEvent.change(maxInput, { target: { value: 'NaN' } })
    fireEvent(maxInput, customEvent)
    expect(maxInput.value).toBe("100")
  })

  test('Should max be mainBall', () => {
    render(<Range type="normal" values={{min: 1, max: 100}} />)
    
  })

})