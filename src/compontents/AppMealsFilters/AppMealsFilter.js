import React from 'react'

const AppMealsFilter = ({selectedFilter,setSelectedFilter}) => {
  return (
    <div className='meals_filter'>
      <select defaultValue={selectedFilter} onChange={(e)=>setSelectedFilter(e.target.value)}>
        <option value=""></option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  )
}

export default AppMealsFilter;
