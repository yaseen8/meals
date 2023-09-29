import React, {useState, useEffect} from 'react'
import SearchBar from './CategoryHeader'
import { Meals } from './Meals'

function MealsLeftSide({uniqueCategories, meals, setSelectedItems, selectedItems}) {
  const [activeButton, setActiveButton] = useState('Cold Apetizers');
  const handleButtonClick = (sectionName) => {
    setActiveButton(sectionName);
  };
 
  return (
    <div className='bg-[#fff] pb-[25px] border-[#D3DBDA] border-[1px] rounded-[12px]  relative'>
        <SearchBar handleButtonClick={handleButtonClick} activeButton={activeButton} meals={meals} uniqueCategories={uniqueCategories}/>
        <div className='overflow-auto' style={{maxHeight: "500px"}}>
          <Meals activeButton={activeButton} setActiveCategory={setActiveButton} uniqueCategories={uniqueCategories} meals={meals} setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>
        </div>
    </div>
  )
}

export default MealsLeftSide
