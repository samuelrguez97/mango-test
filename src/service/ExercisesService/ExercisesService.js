import BaseRestService from '../BaseRestService'

class ExercisesService extends BaseRestService {
  getNormalValues () {
    return super.get(`/normal`)
  }

  getFixedValues () {
    return super.get(`/fixed`)
  }
}

export default ExercisesService