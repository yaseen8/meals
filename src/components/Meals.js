import React, { useEffect, useRef } from 'react'
import { MealsList } from './MealsList';

export const Meals = ({ uniqueCategories, meals, setSelectedItems, selectedItems }) => {
    let lastCategory = null;
    
    const selectItemsHandler = (id) => {
        const selectedItem = meals.find((item) => item.id === id);
        if (selectedItem) {
            selectedItem.selected = true
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
        }
    }

    const sortedMealsOnBasisOfCartegories = meals && meals.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
    });
    
    return (
        <div className='px-[40px] mt-[65px]'>
            {sortedMealsOnBasisOfCartegories && sortedMealsOnBasisOfCartegories.map((meal) => {
                if (meal.category !== lastCategory) {
                    lastCategory = meal.category;
                    return (
                        <React.Fragment key={meal.category} >
                            <div className='flex category-div items-center mb-[26px] justify-between mt-[53px] px-[7px]' data-category={meal.category} id={meal.category}>
                                <div className='flex items-center gap-[12px]'>
                                    <h2 className='text-[20px] leading-[25px] font-bold'>{meal.category}</h2>
                                    <span className='text-[16px] bg-[#020A05] h-[28px] text-white flex items-center px-[9px] rounded-full'>{sortedMealsOnBasisOfCartegories.filter(item => item.category == meal.category).length}</span>
                                </div>
                                <span className='text-[#2F3333A6] text-[14px] leading-[18px] font-medium'>select</span>
                            </div>

                            <MealsList selectItemsHandler = {selectItemsHandler} meal={meal} />
                        </React.Fragment>
                    );
                } else {
                    return <MealsList selectItemsHandler={selectItemsHandler} key={meal.id} meal={meal} />;
                }
            })}
        </div>
    )
}
