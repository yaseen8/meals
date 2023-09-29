import { useEffect, useState } from 'react';
import './App.css';
import MealsLeftSide from './components/MealsLeftSide';
import { mealsData } from './data/meals';
import MealsRightSide from './components/MealsRightSide';


function App() {
  const [meals, setMeals] = useState()
  const [selectedItems, setSelectedItems] = useState([])
  const [uniqueCategories, setUniqueCategories] = useState()

  // const scrollToDiv = (id) => {
  //   scroller.scrollTo(id, {
  //     duration: 800, 
  //     smooth: 'easeInOutQuart' 
  //   });
  // };

  function generateUniqueCategoryObjects(meals) {
    const categoryMap = {};
    meals && meals.forEach((meal) => {
      const { id, category } = meal;
      if (!categoryMap[category]) {
        categoryMap[category] = { category, ids: [] };
      }
      categoryMap[category].ids.push(id);
    });
    setUniqueCategories(Object.values(categoryMap))
  }

  useEffect(() => {
    setMeals(mealsData)
    generateUniqueCategoryObjects(mealsData)
  }, [])
  
  return (
    <>
      <div className="mt-[80px] bg-[#F6F9F9] max-w-[1333px] mx-auto">
        <div className='flex gap-[44px]'>
        <div className='max-w-[881px] w-[100%]'>
          <MealsLeftSide selectedItems={selectedItems} uniqueCategories={uniqueCategories} setSelectedItems={setSelectedItems} meals={meals} />
        </div>
        <div className='rounded-lg'>
          <MealsRightSide meals={meals} setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
