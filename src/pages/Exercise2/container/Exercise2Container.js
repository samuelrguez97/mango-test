import React, { useState, useEffect } from 'react'

import Range from '../../../components/Range/Range'

import ExercisesService from '../../../service/ExercisesService/ExercisesService'

const Exercise2 = () => {

  const exercisesService = new ExercisesService()

  const [ values, setValues ] = useState()

  const getData = async () => {
    const data = await exercisesService.getFixedValues()
    setValues(data)
  }

  useEffect(getData, [])

  return (
    <div>
      <h2>Exercise 2</h2>
      <Range type="fixed" values={values}/>
    </div>
  )
}

export default Exercise2
