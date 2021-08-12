import React, { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types';

import { updateSliderMin, updateSliderMax, dragGhostAndCursorListener } from '../../common/Utils'

import "./Range.css"

const Range = (props) => {

  const { type, values } = props

  const rangeContainerRef = useRef(null);
  const rangeInnerBar = useRef(null);
  const rangeBallMin = useRef(null);
  const rangeBallMax = useRef(null);

  const ballWidth = 20

  const [ min, setMin ] = useState(0)
  const [ max, setMax ] = useState(0)

  const [ lastMin, setLastMin ] = useState(0)
  const [ lastMax, setLastMax ] = useState(0)

  const [ loaded, setLoaded ] = useState(false)

  const loadValues = () => {
    if (values) {
      if (Array.isArray(values)) {
        setMin(Number(values[0]))
        setMax(Number(values[values.length - 1]))
        setLastMin(Number(values[0]))
        setLastMax(Number(values[values.length - 1]))
      } else {
        setMin(Number(values.min))
        setMax(Number(values.max))
        setLastMin(Number(values.min))
        setLastMax(Number(values.max))
      }
      setLoaded(true)
    }
  }

  useEffect(loadValues, [values])

  const resetSlider = (value, from) => {
    rangeBallMin.current.style.left = '-20px';
    rangeBallMax.current.style.left = '230px';
    rangeInnerBar.current.style.width = '100%';
    rangeInnerBar.current.style.left = '0';
    if (from === 'min') {
      setMax(lastMax)
      setLastMin(value)
    } else {
      setMin(lastMin)
      setLastMax(value)
    }
  }

  const dragMinListener = (e) => {
    const rangeWidth = rangeContainerRef.current.offsetWidth;
    const rangeLeft = rangeContainerRef.current.offsetLeft;
    updateSliderMin(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMin);
  }

  const dragMaxListener = (e) => {
    const rangeWidth = rangeContainerRef.current.offsetWidth;
    const rangeLeft = rangeContainerRef.current.offsetLeft;
    updateSliderMax(e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
      rangeInnerBar, rangeBallMax, rangeBallMin, setMax);
  }

  const resetComponent = () => {
    if (rangeContainerRef && rangeBallMin && rangeBallMax && max && min && loaded) {
      rangeBallMin.current.style.width = ballWidth + 'px'
      rangeBallMin.current.style.left = -ballWidth + 'px'
      rangeBallMin.current.style.marginLeft = (ballWidth / 2) + 'px'

      rangeBallMax.current.style.width = ballWidth + 'px'
      rangeBallMax.current.style.right = -ballWidth + 'px'
      rangeBallMax.current.style.marginRight = (ballWidth / 2) + 'px'

      rangeBallMin.current.addEventListener("drag", dragMinListener, false);
      rangeBallMax.current.addEventListener("drag", dragMaxListener, false);
      rangeBallMin.current.addEventListener("touchmove", dragMinListener, false);
      rangeBallMax.current.addEventListener("touchmove", dragMaxListener, false);
      document.addEventListener("dragstart", dragGhostAndCursorListener, false);
    }

    return () => {
      rangeBallMin.current.removeEventListener("drag", dragMinListener, false);
      rangeBallMax.current.removeEventListener("drag", dragMaxListener, false);
      rangeBallMin.current.removeEventListener("touchmove", dragMinListener, false);
      rangeBallMax.current.removeEventListener("touchmove", dragMaxListener, false);
      document.removeEventListener("dragstart", dragGhostAndCursorListener, true);
    }
  }

  useEffect(resetComponent, [loaded, lastMin, lastMax]);

  const handleMin = (e) => {
    e.preventDefault()
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setMin(value)
      resetSlider(value, 'min')
    }
  }

  const handleMax = (e) => {
    e.preventDefault()
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setMax(value)
      resetSlider(value, 'max')
    }
  }

  return (
    <div id="range-bar" className="range-container">
      <div className="range-container__min-value">
        {type === 'fixed' ? <span>{min}</span> : <input value={min} id="min-input" onChange={handleMin}></input>}
      </div>
      <div className="range-container__range-bar" ref={rangeContainerRef}>
        <div draggable ref={rangeBallMin} id="min" className="range-container__range-bar__ball" />
        <div draggable ref={rangeBallMax} id="max" className="range-container__range-bar__ball" />
        <div ref={rangeInnerBar} className="range-container__range-bar__inner-bar" />
      </div>
      <div className="range-container__max-value">
        {type === 'fixed' ? <span>{max}</span> : <input value={max} id="max-input" onChange={handleMax}></input>}
      </div>
    </div>
  )
}

Range.propTypes = {
  type: PropTypes.string,
  values: PropTypes.any
};

export default Range
