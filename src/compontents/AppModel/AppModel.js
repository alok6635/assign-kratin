import React from 'react'

const AppModel = ({setopenModal}) => {
  return (
    <div className='modal'>
    <h3>calories Must Be Bigger Than 0 And Meal Name Cannot Be Blank</h3>
      <button className='btn_modal' onClick={()=>{setopenModal(false)}}>Close</button>
    </div>
  )
}

export default AppModel;
