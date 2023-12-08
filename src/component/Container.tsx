import React from 'react'
import ShopSectionBox01 from './ShopSectionBox'
import ShopSectionBox02 from './ShopSectionBox02'

function Container() {
  return (
    <>
      <div className='bg-primary3 w-full'>
        <div className='flex justify-between p-menu-bar'>
          <a href=""><img src="/src/assets/button เครื่องเขียน 274 x 330px.png" width="274" height="330" alt="menu-เครื่องเขียน" /></a>
          <a href=""><img src="/src/assets/button เครื่องแต่งกาย274 x 330px.png" width="274" height="330" alt="menu-แต่งกาย" /></a>
          <a href=""><img src="/src/assets/button หนังสือ 274 x 330.png" width="274" height="330" alt="menu-หนังสือ" /></a>
          <a href=""><img src="/src/assets/button อุปกรณ์กีฬา 274 x 330px.png" width="274" height="330" alt="menu-กีฬา" /></a>
        </div>
        <div className='flex justify-center mt-shopsection'>
          <ShopSectionBox01 />
        </div>
        <div className='flex justify-center'>
          <ShopSectionBox02 />
        </div>
      </div>
    </>
  )

}

export default Container