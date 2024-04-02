import { useEffect, useState } from 'react'
import { getColorsList, getLastColor } from '../helpers/getColors'

function useColors() {
  const [colors, setColors] = useState(getColorsList())
  const [color, setColor] = useState(getLastColor())
  const handleChangeColor = (color: string) => {
    setColor(color)
  }
  const handleSubmitSaveColor = (e: any) => {
    e.preventDefault()
    const newColors = [...colors, color]
    setColors(newColors)
  }
  const handleClickClearColors = () => {
    setColor('#f2f2f2')
    setColors([])
    localStorage.removeItem('colors')
  }
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors))
  }, [colors])
  return {
    color,
    colors,
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors,
  }
}

export default useColors
