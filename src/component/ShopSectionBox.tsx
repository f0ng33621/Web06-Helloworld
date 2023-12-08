// import React from 'react'
import { Icon } from '@iconify/react';

function ShopSectionBox01() {
  return (
    <div className='bg-primary2 border-3 border-primary4 shop-radius wh-shopsection my-shopsection p-shopsection font-size36 text-primary4 '>
      {/* Header */}
      <div className='flex items-center'>
        <a href='' className='bg-primary1 border-3 border-primary4 absolute text-center text-uppercase wh-all-box all-box-radius font-size36 all-box-position'>All</a>
        <h1 className='font-size48 text-uppercase'>Flash Sale</h1>
        <Icon icon="mi:clock" width="38" height="38" className='absolute clock-position ' />
        <div className='flex items-center gap-4 ml-time text-20px'>
          <div className='bg-primary1 border-3 border-primary4  text-center text-uppercase wh-time-box all-box-radius'>08</div>
          <div className='bg-primary1 border-3 border-primary4  text-center text-uppercase wh-time-box all-box-radius'>23</div>
          <div className='bg-primary1 border-3 border-primary4  text-center text-uppercase wh-time-box all-box-radius'>00</div>
        </div>
      </div>
      {/* Container */}
      <div className="grid-shop-container shop-container-flex">
        <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box text-center p-4 cursor-default' >
          <div className='wh-discount-box absolute bg-discount text-center text-size12px text-white discount-box-position '>
            -50%
          </div>
          <a href=""><img src="/src/assets/กบเหลาหลากสี228.78x123px.png" width="228.78px" height="123px" alt="กบเหลาดินสอ" /></a>
          <div className='absolute text-24px text1-position'>กบเหลาดินสอ</div>
          <div className='absolute text-24px text2-position'>Faber-Castell</div>
          <div className='absolute text-18px line-through text-discount-position '>฿ 18.00</div>
          <div className='absolute text-24px price-position price-color'>฿ 9.00</div>
          <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
          <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
        </div>
        <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box  flex justify-center p-4 cursor-default' >
          <div className='wh-discount-box absolute bg-discount text-center text-size12px text-white discount-box-position '>
            -15%
          </div>
          <a href=""><img src="/src/assets/สี steatler156.32 x 170px.png" width="228px" height="170px" alt="กบเหลาดินสอ" /></a>
          <div className='absolute text-24px text2-position'>สีไม้ Staedtler 24 สี</div>
          <div className='absolute text-18px line-through text-discount-position '>฿ 95.00</div>
          <div className='absolute text-24px price-position price-color'>฿ 81.00</div>
          <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
          <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
        </div>
        <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box flex items-center justify-center p-4 cursor-default' >
          <div className='wh-discount-box absolute bg-discount text-center text-size12px text-white discount-box-position '>
            -30%
          </div>
          <a href=""><img src="/src/assets/สีคอลลีน 48 194x181.82px.png" width="194px" height="181.82px" alt="กบเหลาดินสอ" /></a>
          <div className='absolute text-24px text2-position'>สีไม้ COLLEEN 48 สี</div>
          <div className='absolute text-18px line-through text-discount-position '>฿ 240.00</div>
          <div className='absolute text-24px price-position price-color'>฿ 168.00</div>
          <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
          <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
        </div>
        <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box text-center p-4 cursor-default' >
          <div className='wh-discount-box absolute bg-discount text-center text-size12px text-white discount-box-position '>
            -10%
          </div>
          <a href=""><img src="/src/assets/ปากกาลูกลื่นgsoft 171.23x193 px.png" width="220px" height="193px" alt="กบเหลาดินสอ" /></a>
          <div className='absolute text-24px text2-position'>ปากกาลูกลื่นเจล g'soft</div>
          <div className='absolute text-18px line-through text-discount-position '>฿ 10.00</div>
          <div className='absolute text-24px price-position price-color'>฿ 9.00</div>
          <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
          <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
        </div>
      </div>

    </div>
  )
}

export default ShopSectionBox01