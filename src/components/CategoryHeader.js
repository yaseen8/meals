import React, { useEffect, useState } from 'react'

function SearchBar({uniqueCategories, handleButtonClick, activeButton}) {


  
  return (
    <div className='py-[25px] rounded-t-[12px] bg-white px-[40px] flex gap-[12px] z-10 sticky w-[100%] max-w-[880px] border-b-[1px] border-[#D3DBDA]'>
      {uniqueCategories && uniqueCategories.map(item => {
        return (
          <a href={'#' + item.category}
          
          className={`${activeButton === item.category ? 'bg-[#410DEB] text-white' : ''} text-[14px] text-[#410DEB] p-[16px] border-[#410DEB] h-[48px] flex items-center justify-center font-medium border-[2px] rounded-[24px]`}
          onClick={() => handleButtonClick(item.category)}
          // activeClass="bg-[#410DEB] text-white"
          >{item.category}</a>
        )
      })}
    </div>
  )
}

export default SearchBar
