import React, { useState, useEffect } from 'react'

import Range from '../../../components/Range/Range'

import ExercisesService from '../../../service/ExercisesService/ExercisesService'

const Exercise1 = () => {

  const exercisesService = new ExercisesService()

  const [ values, setValues ] = useState()

  const getData = async () => {
    const data = await exercisesService.getNormalValues()
    setValues(data)
  }

  useEffect(getData, [])

  return (
    <div>
      <h2>Exercise 1</h2>
      <Range type="normal" values={values} />
    </div>
  )
}

export default Exercise1
