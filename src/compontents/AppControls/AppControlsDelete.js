import React from 'react'

const AppControlsDelete = ({deleteAllMeals}) => {
  return (
    <div className='controls_delete'>
<button className='btn' onClick={()=>{deleteAllMeals()}}>Delete All</button>
    </div>
  )
}

export default AppControlsDelete;
