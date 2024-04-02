import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore
import ColorPicker from 'ColorPicker/ColorPicker'
// @ts-ignore
import ColorList from 'ColorList/ColorList'
// @ts-ignore
import useColors from 'ColorPicker/useColors'

import './index.css'


const App = () => {

  const {
    color,
    colors,
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors, } = useColors();


  return (
    <>
      <h1 className='text-center bg-dark text-light p-2'>ColorPicker</h1>
      <div className='container mt-4'>
        <div className='row'>
          <div className=' col-md-4 text-center listTitle '><h3>Lista de colores</h3><ColorList colorList={colors} handleClearColorList={handleClickClearColors} /></div>
          <div className='col-12 col-md-8'><ColorPicker color={color} handleChangeColor={handleChangeColor} handleSubmitSaveColor={handleSubmitSaveColor} /></div>
        </div></div>
    </>
  )
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
