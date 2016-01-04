
import React from 'react'
export default ({title}) => {
  return (
    <div className='crumb'>
        <ol className="breadcrumb">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Movies</a>
            </li>
            <li className="active">{title}</li>
        </ol>
    </div>
  )
}
