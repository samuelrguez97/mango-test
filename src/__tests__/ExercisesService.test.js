import "core-js/stable";
import "regenerator-runtime/runtime";

import ExercisesService from './../service/ExercisesService/ExercisesService'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ min: 1, max: 100 }),
  })
);

describe('ExercisesService Tests', () => {

  beforeEach(() => {
    fetch.mockClear();
  });

  test('Get normal endpoint', async () => {
    const exercisesService = new ExercisesService()
    const response = await exercisesService.getNormalValues()
    expect(response).toEqual({ min: 1, max: 100 })
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  
  test('Get fixed endpoint', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve([1, 2, 3]) }));

    const exercisesService = new ExercisesService()
    const response = await exercisesService.getFixedValues()
    expect(response).toEqual([1, 2, 3])
    expect(fetch).toHaveBeenCalledTimes(1);
  })

})