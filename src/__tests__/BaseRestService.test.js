import "core-js/stable";
import "regenerator-runtime/runtime";

import BaseRestService from './../service/BaseRestService'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ min: 1, max: 100 }),
  })
);

describe('BaseRestService Tests', () => {

  beforeEach(() => {
    fetch.mockClear();
  });

  test('Get endpoint OK', async () => {
    const baseRestService = new BaseRestService()
    const response = await baseRestService.get('normal')
    expect(response).toEqual({ min: 1, max: 100 })
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  test('Get endpoint KO', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.reject(() => new Error()),
    }));

    try {
      const baseRestService = new BaseRestService()
      await baseRestService.get('notfound')
    } catch (error) {
      expect(error).toBeTruthy()
      expect(fetch).toHaveBeenCalledTimes(1);
    }
    
  })

})