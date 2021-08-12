import "core-js/stable";
import "regenerator-runtime/runtime";

import { updateSliderMin, updateSliderMax, dragGhostAndCursorListener, calculateAmount } from './../common/Utils'

describe('Utils Tests', () => {

  test('Test updateSliderMin', async () => {
    const e = { pageX: 100 }
    const rangeWidth = 100;
    const rangeLeft = 50;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 }
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '100px' } } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMin = () => jest.fn();
    updateSliderMin(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMin)
  })

  test('Test updateSliderMin rangeBallMax no value', async () => {
    const e = { pageX: 100 }
    const rangeWidth = 1000;
    const rangeLeft = 50;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 }
    const rangeContainerRef = { current: { offsetWidth: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: {} } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMin = () => jest.fn();
    updateSliderMin(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMin)
  })

  test('Test updateSliderMin mobile', async () => {
    const e = { changedTouches: [{ pageX: 300 }] }
    const rangeWidth = 1000;
    const rangeLeft = 100;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 }
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '1000px' } } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMin = () => jest.fn();
    updateSliderMin(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMin)
  })

  test('Test updateSliderMin not max', async () => {
    const e = { pageX: 300 }
    const rangeWidth = 1000;
    const rangeLeft = 100;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 }
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '10px' } } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMin = () => jest.fn();
    updateSliderMin(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMin)
  })

  test('Test updateSliderMax', async () => {
    const e = { pageX: 1000 }
    const rangeWidth = 2000;
    const rangeLeft = 400;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 };
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '100px' } } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMax = () => jest.fn();
    updateSliderMax(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMax)
  })

  test('Test updateSliderMax rangeBallMin no value', async () => {
    const e = { pageX: 1000 }
    const rangeWidth = 2000;
    const rangeLeft = 400;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 };
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '100px' } } };
    const rangeBallMin = { current: { style: {} } };
    const setMax = () => jest.fn();
    updateSliderMax(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMax)
  })

  test('Test updateSliderMax mobile', async () => {
    const e = { changedTouches: [{ pageX: 100 }] }
    const rangeWidth = 100;
    const rangeLeft = 50;
    const type = 'normal';
    const min = 1;
    const max = 100;
    const values = { min: 1, max: 100 }
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '100px' } } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMax = () => jest.fn();
    updateSliderMax(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMax)
  })

  test('Test type fixed', async () => {
    const e = { pageX: 100 }
    const rangeWidth = 100;
    const rangeLeft = 50;
    const type = 'fixed';
    const min = 1;
    const max = 100;
    const values = [1, 2, 3]
    const rangeContainerRef = { current: { offsetLeft: 100 } };
    const rangeInnerBar = { current: { style: { left: '100px' } } };
    const rangeBallMax = { current: { style: { left: '100px' } } };
    const rangeBallMin = { current: { style: { left: '100px' } } };
    const setMin = () => jest.fn();
    updateSliderMin(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMin)
  })

  test('Test dragGhostAndCursorListener', async () => {
    const e = { dataTransfer: { setDragImage: () => jest.fn() } }
    dragGhostAndCursorListener(e)
  })

  test('Test calculateAmount', async () => {
    const e = { pageX: 100 }
    const rangeWidth = 100;
    const rangeLeft = 50;
    const type = 'fixed';
    const min = 100;
    const max = 1000;
    const values = [1, 2, 3]
    calculateAmount(e, rangeLeft, rangeWidth, type, values, min, max)
  })

  test('Test calculateAmount min float', async () => {
    const e = { pageX: 100 }
    const rangeWidth = 100;
    const rangeLeft = 50;
    const type = 'fixed';
    const min = 100.12;
    const max = 1000;
    const values = [1, 2, 3]
    calculateAmount(e, rangeLeft, rangeWidth, type, values, min, max)
  })

  test('Test calculateAmount less min', async () => {
    const e = { pageX: 1 }
    const rangeWidth = 100;
    const rangeLeft = 100;
    const type = 'fixed';
    const min = 100;
    const max = 1000;
    const values = [1, 2, 3]
    calculateAmount(e, rangeLeft, rangeWidth, type, values, min, max)
  })

  test('Test calculateAmount more max', async () => {
    const e = { pageX: 100 }
    const rangeWidth = 100;
    const rangeLeft = 100;
    const type = 'fixed';
    const min = 100;
    const max = 1;
    const values = [1, 2, 3]
    calculateAmount(e, rangeLeft, rangeWidth, type, values, min, max)
  })

})