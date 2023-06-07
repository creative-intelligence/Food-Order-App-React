import React from 'react'
import MealsSummary from './MealsSummary'
import AvalaibleMeals from './AvalaibleMeals'
function Meals() {
  return (
   <React.Fragment>
    <MealsSummary />
    <AvalaibleMeals />
   </React.Fragment>
  )
}

export default Meals