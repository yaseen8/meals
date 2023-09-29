import React from 'react';

export const MealDetail = ({ meal, selectItemsHandler, setModalVisibility }) => {
  return (
    <div className="max-w-sm w-[375px] bg-white rounded-lg shadow">
      <button
        onClick={() => {
            setModalVisibility(false)
        }}
        className="absolute top-[24px] right-2 bg-black text-white rounded-full w-[36px] h-[36px] border-[1px] text-[27px] flex items-center justify-center"
      >
        &times;
      </button>
      <div>
        <img className="rounded-t-lg w-[100%] h-[233px] object-cover" src={meal.image} alt="" />
      </div>
      <div className="p-[17px]">
        <div className='flex justify-between items-center'>
            <h5 className="text-[18px] font-bold">{meal.title}</h5>
            <span className='text-[#79E003] flex items-center text-[14px] font-normal'>
             <i className="fi fi-rr-star"></i>
              {meal.rating}</span>
        </div>
        <span className='text-[14px] text-[#410DEB] font-semibold pb-[24px] inline-block'>{meal.price}</span>
        <p className="mb-[34px] font-normal leading-[18px] text-[12px] text-clip overflow-hidden text-[#2F333399]">
          {meal.description}
        </p>
        <button
          onClick={() => {!meal.selected && selectItemsHandler(meal.id);
          }}
          className="bg-[#410DEB] w-[100%] rounded-[6px] text-[14px] leading-[16px] text-white flex items-center justify-center h-[38px]"
        >
          Add meal
        </button>
      </div>
    </div>
  );
}
