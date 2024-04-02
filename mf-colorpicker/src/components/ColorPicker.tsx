import React, { useState } from 'react'

function Colorpicker({ color, handleChangeColor, handleSubmitSaveColor }: any) {
  // const [color, setColor] = useState('#000')
  // const handleChangeColor = (color: string) => {
  //   setColor(color)
  // }
  // const handleSubmitSaveColor = (e: any) => {
  //   e.preventDefault()
  //   alert(color)
  // }
  return (
    <form onSubmit={handleSubmitSaveColor}>
      <input type="color" value={color} onChange={(e) => handleChangeColor(e.target.value)} className='form-control' style={{
        width: '100%',
        height: '300px'
      }} />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        <section>
          <h2 style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: color,
              borderRadius: '50%',
              marginRight: '1rem'
            }}>
            </div>
            {color}
          </h2>
          <button type="submit" className='btn btn-success' >
            Guardar Color
          </button>
        </section>
      </div>
    </form>
  )
}

export default Colorpicker