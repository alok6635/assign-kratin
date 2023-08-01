import React from 'react';

const AppMealsList = ({meals, deleteMealHandler}) => {
  return (
    <div className='mealList_wrap'>
      {meals.map((item,index)=>{
        return(
          <div key = {index} className='mealList_wrap_inner'>
          <div>{`${item.mealName} : ${item.cailories}`}</div>
          <div>
            <button className='btn_dalete_meal' onClick={()=>deleteMealHandler(item.id)}> Delete</button>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default AppMealsList;
