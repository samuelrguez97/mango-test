const ballWidth = 20

export const updateSliderMin = (e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
  rangeInnerBar, rangeBallMax, rangeBallMin, setMin) => {
  if (!e?.pageX && e?.changedTouches) e.pageX = e.changedTouches[0].pageX
  if (e?.pageX >= rangeLeft && e?.pageX <= (rangeLeft + rangeWidth)) {
    const rangeBallMaxLeftValue = rangeBallMax.current.style.left 
      && parseInt(rangeBallMax.current.style.left.substring(0, rangeBallMax.current.style.left.length - 2))
    const rangeBallMaxLeft = (rangeBallMaxLeftValue || rangeContainerRef.current.offsetWidth) - 32
    const rangeBallMinNewLeft = (e.pageX - rangeLeft - ballWidth)
    if (rangeBallMaxLeft >= rangeBallMinNewLeft) {
      rangeBallMin.current.style.left = e.pageX - rangeLeft - ballWidth + 'px';
      rangeInnerBar.current.style.left = e.pageX - rangeLeft + 'px';
      rangeInnerBar.current.style.width = Math.abs(rangeBallMinNewLeft - rangeBallMaxLeft) + ballWidth + 'px';
      const rangeAmount = calculateAmount(e, rangeLeft, rangeWidth, type, values, min, max)
      setMin(rangeAmount);
    }
  }
}

export const updateSliderMax = (e, rangeWidth, rangeLeft, type, min, max, values, rangeContainerRef, 
  rangeInnerBar, rangeBallMax, rangeBallMin, setMax) => {
  if (!e?.pageX && e?.changedTouches) e.pageX = e.changedTouches[0].pageX
  if (e?.pageX >= rangeLeft && e?.pageX <= (rangeLeft + rangeWidth)) {
    const rangeBallMinLeftValue = rangeBallMin.current.style.left 
      && parseInt(rangeBallMin.current.style.left.substring(0, rangeBallMin.current.style.left.length - 2))
    let rangeBallMinLeft = (rangeBallMinLeftValue || rangeContainerRef.current.offsetLeft) + 32
    const rangeBallMaxNewLeft = (e.pageX - rangeLeft - ballWidth)
    if (rangeBallMinLeft <= rangeBallMaxNewLeft) {
      rangeBallMax.current.style.left = e.pageX - rangeLeft - ballWidth + 'px';
      rangeInnerBar.current.style.width = Math.abs(rangeBallMinLeft - rangeBallMaxNewLeft) + ballWidth + 'px';
      const rangeAmount = calculateAmount(e, rangeLeft, rangeWidth, type, values, min, max)
      setMax(rangeAmount);
    }
  }
}

// Remove drag ghost image
export const dragGhostAndCursorListener = (e) => {
  const img = new Image();
  img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
  e.dataTransfer.setDragImage(img, 0, 0);
}

export const calculateAmount = (e, rangeLeft, rangeWidth, type, values, min, max) => {
  let rangeAmount = ((e.pageX - rangeLeft) / rangeWidth) * 100
  rangeAmount = (((rangeAmount * max) / 100) + min).toFixed(2)
  rangeAmount = rangeAmount < min ? min : rangeAmount > max ? max : rangeAmount
  const isFloat = min % 1 != 0
  rangeAmount = isFloat ? rangeAmount : Math.round(rangeAmount)
  if (type === 'fixed') {
    rangeAmount = values.reduce((prev, curr) => Math.abs(curr - rangeAmount) < Math.abs(prev - rangeAmount) ? curr : prev);
  }
  return rangeAmount
}