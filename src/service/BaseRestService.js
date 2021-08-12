const BASE_URL =
  process.env.REACT_APP_MANGO_TEST_API || 'https://virtserver.swaggerhub.com/mango-test/test/1.0.0'

const COMMON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8'
}

class BaseRestService {
  get (endpoint, headers = {}) {
    return this.doRequest(endpoint, { method: 'GET', headers })
  }

  doRequest (endpoint, requestParams) {
    const requestOptions = {
      ...requestParams,
      ...{
        headers: {
          ...COMMON_HEADERS
        }
      }
    }

    const requestURL = encodeURI(`${BASE_URL}${endpoint}`)

    return fetch(requestURL, requestOptions)
      .then(async (response) => await response.json())
      .catch((error) => {
        throw error
      })
  }
}

export default BaseRestService
