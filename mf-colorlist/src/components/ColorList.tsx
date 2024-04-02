import React from 'react'
import Swal from 'sweetalert2'

function ColorList({ colorList = [], handleClearColorList }) {
    const handleCopyColor = (color) => {
        navigator.clipboard.writeText(color)

        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: `Copied ${color} `,
            showConfirmButton: false,
            timer: 1300,
            timerProgressBar: true

        })
    }

    return (
        <>
            {colorList.length > 0 && <button className="btn btn-danger btn-block" onClick={handleClearColorList}>Clear Color List</button>}
            {colorList.length > 0 ? <div className="list-group text-center">
                {colorList.map((color) => (
                    <button className="list-group-item list-group-item-action text-white h6" style={{ backgroundColor: color, color: 'white' }} key={color}
                        onClick={() => handleCopyColor(color)}>{color}</button>
                ))}
            </div> : <div className="alert alert-danger" role="alert"> <b className="text-center h3">No Color List</b></div>}
        </>
    )
}

export default ColorList