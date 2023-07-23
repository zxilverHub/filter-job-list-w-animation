import React from 'react'
import xButton from '../images/icon-remove.svg'

function Filtered({ filterInfo, removeFiltered }) {

  const removeFilter =(filt)=>{
    removeFiltered(filt)
  }

  return (
    <>
        <p className='filter-text'>{filterInfo}</p>
        <div className="x-button" onClick={()=>removeFilter(filterInfo)} >
          <img src={xButton} alt="x" />
        </div>
    </>
  )
}

export default Filtered