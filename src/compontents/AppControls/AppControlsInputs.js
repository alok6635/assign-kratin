import React from 'react';

const AppControlsInputs = ({addMealsHandler,mealName,cailories,setmealName,setCailories}) => {
 const onAddMealsClick = ()=>{
  addMealsHandler()
 }
  return (
<>
<div className='App_control'>
<div className='control_Input'>
      <input type="text" placeholder='Meal' value={mealName} onChange={(e)=>setmealName(e.target.value)}/>
      <input type="Number" placeholder='Cailories' value={cailories } min={0} onChange={(e)=>setCailories(e.target.value)}/>
      <button className='btn' onClick={onAddMealsClick}>Add Meal</button>
    </div>
</div>
</>
  )
}

export default AppControlsInputs;