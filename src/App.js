import React, { useState, useEffect } from "react";
import "./App.css";
import AppBar from "./compontents/AppBar/AppBar";
import AppControlsCounter from "./compontents/AppControls/AppControlsCounter";
import AppControlsDelete from "./compontents/AppControls/AppControlsDelete";
import AppControlsInputs from "./compontents/AppControls/AppControlsInputs";
import AppMealsList from "./compontents/AppMealsList/AppMealsList";
import AppModel from "./compontents/AppModel/AppModel";
import AppMealsFilter from "./compontents/AppMealsFilters/AppMealsFilter";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setmealName] = useState("");
  const [cailories, setCailories] = useState(0);
  const [openModal, setopenModal] = useState(false);
  const [selectedFilter,setSelectedFilter] = useState("")

  const addMealsHandler = () => {
    const oldMeals = [...meals];
    const meal = {
      mealName,
      cailories,
      id: Math.floor(Math.random() * 10000),
    };
    const newMeals = oldMeals.concat(meal);
    if (cailories <= 0 || mealName === "") {
      setopenModal(true);
    } else {
      setMeals(newMeals);
      localStorage.setItem("melas",JSON.stringify(newMeals)) 
    }
    setmealName("");
    setCailories(0);
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
  };

  const deleteAllMeals = () => {
    setMeals([]);
  };

  const total = meals.map((meal)=>meal.cailories).reduce((acc,value)=>acc+ + value,0);
  useEffect(()=>{
   const oldState = [...meals]
   if(selectedFilter === "Ascending"){
    const ascendingMeals = oldState.sort((a,b)=>a.cailories- b.cailories);
      setMeals(ascendingMeals);
  }else if(selectedFilter === "Descending"){
     const descendingMeals  = oldState.sort((b,a)=>a.cailories-b.cailories);
     setMeals(descendingMeals)
   }
  },[selectedFilter]) 

 

  return (
    <div className="App">
      <AppBar />
      <AppControlsCounter total ={total}/>
      <AppControlsDelete  deleteAllMeals ={deleteAllMeals} />
      <AppControlsInputs addMealsHandler={addMealsHandler} mealName={mealName} cailories={cailories} setmealName={setmealName} setCailories={setCailories}/>
      <div className="app_meal_container">
      <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
      </div>
      {openModal ? <AppModel setopenModal={setopenModal} /> : ""}
      <AppMealsFilter selectedFilter = {selectedFilter} setSelectedFilter = {setSelectedFilter}/>
    </div>
  );
};
export default App;
