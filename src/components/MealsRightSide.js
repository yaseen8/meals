import React, { useEffect, useState } from "react";

function MealsRightSide({selectedItems, setSelectedItems, meals}) {

  const [expense, setExpense] = useState(0)
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedItems.forEach((item) => {
      totalPrice += parseFloat(item.price.replace('AED ', '')); 
    });
    return setExpense(totalPrice.toFixed(2)); 
  };

  const removeSelectedItemHandler = (id) => {
    const updatedSelectedItems = selectedItems.filter((item) => item.id !== id);
    const updatedMeals = meals.find((item) => item.id === id);
    if(updatedMeals) {
      updatedMeals.selected = false
    setSelectedItems(updatedSelectedItems)
    }
  }
  
  useEffect(() => {
    calculateTotalPrice()
  }, [selectedItems])
  return (
    <>
        <div className="w-[408px]  border-[1px] bg-[#fff] rounded-lg pb-4">
        <div className="pb-[40px] ">
          <img
            src={'/images/Food1.png'}
            alt="food"
            className="w-full rounded-tl-lg rounded-tr-lg"
          />
          <div className="flex justify-center mt-4 items-center gap-3">
            <h3 className="text-[#000000] text-[18px] font-bold ">
              Hawharart Esham Restaurent
            </h3>

            <span className="text-[#79e003] flex items-center text-[15px]">
              <img
                src={"/images/star.png"}
                alt="ratings"
                className="w-[12px] h-[12px] me-1"
              ></img>
              4.7
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="capitalize text-[#000000] text-[14px] leading-[16px]">
              wafi mall, first floor,horus, phase 5, dubai
            </span>
            <span className="bg-[#020A05] flex justify-center items-center inline-block rounded-lg h-[30px] w-[30px]">
              <i className="fi fi-rr-marker text-white mt-[4px]"></i>
            </span>
          </div>
          <button className="  block mx-auto mt-[15px] w-[165px] bg-[#020A05] py-2 rounded text-[#fff] text-[14px] transition duration-300 ease-in-out hover:bg-[#123456]">
            Arabic Restaurent
          </button>
        </div>
        {selectedItems.length > 0 ? (
          selectedItems.map((items, index) => (
            <div
              key={index}
              className="py-2 px-[18px] flex justify-between items-center w-[100%] border-y border-[#D3DBDA]"
            >
              <div className="flex items-center gap-1">
                <img
                  src={items.image}
                  alt="food"
                  className="w-[60px] h-[60px] rounded-md"
                />
                <div className="ps-2 ">
                  <span className="block text-[#410deb] text-[18px] font-bold ">
                    {items.title}
                  </span>
                  <span className="block text-[#000000 ] text-[14px] font-bold ">
                    {items.price}
                  </span>
                </div>
              </div>
              <div onClick={() => {removeSelectedItemHandler(items.id)}} className="text-[15px] inline-block ">
                <i className="fi fi-rr-trash"></i>
              </div>
            </div>
          ))
        ) : (
          ''
        )}
        <span className="text-[#2F3333A6] text-[14px] flex gap-[13px] items-end ps-[18px]  mt-5">
          Total Price{" "}
          <span className="text-[#020A05] text-[18px] font-bold">AED {expense} </span>
        </span>
      </div>
    </>
  )
}

export default MealsRightSide
