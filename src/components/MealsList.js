import React, { useState } from 'react'
import { MealDetail } from './MealDetail'

export const MealsList = ({ meal, selectItemsHandler }) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const showModal = () => {
        setModalVisibility(!modalVisibility)
    }
    return (
        <div className={`divide-y divide-slate-200 ${meal.selected ? 'border-[#410DEB] mb-[14px] bg-[#F5F2FF] border-[3px] rounded-[12px]' : 'border-b-[#E0E8E4] border-b-[1px] '}`}>
            <div className={`mx-auto max-w-[787px]  py-[11px] flex sm:flex-row flex-col  sm:items-center justify-between`} >
                <div className="thumbnail">
                    <img className="max-w-[72px] h-[72px] w-[72px] object-cover rounded-md" src={meal.image} />
                </div>
                <div className="content  w-full ps-[15px]">
                    <h2 className='text-[18px] font-bold'>
                        {meal.title}
                    </h2>
                    <div className="flex justify-between">
                        <div className="text-[14px] pe-[20px]">
                            <span className="font-bold">{meal.price}</span>
                        </div>
                        <div className="rating pe-[34px]">
                            <span className="font-bold flex items-center gap-x-1 text-[#79E003]">
                                {meal.rating}
                                <i className="fi fi-rr-star"></i>
                            </span>
                        </div>
                        <div className="description pe-[20px]">
                            <p className="text-[#2F3333A6] text-[14px] text-clip overflow-hidden ..." >
                                {meal.description}
                            </p>
                        </div>
                        <div className='flex items-center relative'>
                            <div className='inline-flex items-center pt-[4px] pe-[12px]'>
                                <button className="border-none" onClick={showModal}>
                                <i className="fi fi-rr-eye"></i>
                                </button>
                                <div className={`absolute ${modalVisibility ? "block" : "hidden"} z-10 right-0`}>
                                    <MealDetail setModalVisibility={setModalVisibility} selectItemsHandler={selectItemsHandler} meal={meal} />
                                </div>
                            </div>
                            <div className=' inline-flex items-center'>
                                <input onChange={() => { !meal.selected && selectItemsHandler(meal.id) }} checked={meal.selected}
                                    type="checkbox" className="boxicon
                              appearance-none w-6 h-6 border-2 border-black  rounded-full bg-white checked:bg-blue-800 checked:border-blue-800 mt-1"
                                />
                                {meal.selected && <i className="fi fi-rr-check absolute w-4 h-4 mt-[4px] ms-[4px] text-white" ></i> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
