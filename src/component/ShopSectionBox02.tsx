import Gelpen from "../assets/limited jouice231x194.63px.png"
import OHHO from "../assets/ปากกาลูกลื่นลายohho212.14x195px.png"
import ruler from "../assets/ไม้บรรทัดอะลูมิเนียม 12 นิ้ว214.77x192px.png"
import Kioku from "../assets/เทปลบคำผิด7มม166x232px.png"
import { Icon } from '@iconify/react';

function ShopSectionBox02() {
    return (
        <div className='bg-primary2 border-3 border-primary4 shop-radius wh-shopsection my-shopsection p-shopsection font-size36 text-primary4'>
            {/* Header */}
            <div className='flex items-center'>
                <a href='' className='bg-primary1 border-3 border-primary4 absolute text-center text-uppercase wh-all-box all-box-radius font-size36 all-box-position'>All</a>
                <h1 className='font-size48 text-uppercase'>New Arrival</h1>
            </div>
            {/* Container */}
            <div className="grid-shop-container shop-container-flex">
                <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box flex p-4 cursor-default p-20px ' >
                    <a href=""><img src={Gelpen} width="228.78px" height="123px" alt="ชุดปากกาเจล" /></a>
                    <div className='absolute text-24px text1-position break-words'>
                        LIMITED JUICE SANRIO </div>
                    <div className='absolute text-24px text2-position'>ชุดปากกาเจล 0.5</div>
                    <div className='absolute text-24px price-position2'>฿ 359.00</div>
                    <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
                    <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
                </div>
                <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box flex justify-center p-4 cursor-default p-20px' >
                    <a href=""><img src={OHHO} width="228px" height="170px" alt="ปากกาลูกลื่นลายohho" /></a>
                    <div className='absolute text-24px text2-position'>ปากกาลูกลื่น ลาย OH HO (1 แพ็ค 2 แท่ง)</div>
                    <div className='absolute text-24px price-position2'>฿ 25.00</div>
                    <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
                    <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
                </div>
                <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box flex justify-center p-4 cursor-default p-20px' >
                    <a href=""><img src={ruler} width="214px" height="192.82px" alt="ไม้บรรทัดอะลูมิเนียม" /></a>
                    <div className='absolute text-24px text2-position mr-text'>ไม้บรรทัดอะลูมิเนียม 12 นิ้ว</div>
                    <div className='absolute text-24px price-position2'>฿ 29.00</div>
                    <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
                    <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
                </div>
                <div className='bg-primary5 border-3 border-primary4 shop-box-radius wh-grid-shop-box m-shop-box flex p-4 cursor-default p-20px' >
                    <a href=""><img src={Kioku} width="220px" height="193px" alt="เทปลบคำผิด7มม" /></a>
                    <div className='absolute text-24px text2-position'>เทปลบคำผิด KIOKU 7 มม.</div>
                    <div className='absolute text-24px price-position2'>฿ 49.00</div>
                    <Icon icon="mingcute:heart-line" width="35" height="35" className='absolute text-primary4 heart-position ' />
                    <Icon icon="fluent:cart-20-filled" width="38" height="38" className='absolute text-primary4 cart-position' />
                </div>
            </div>

        </div>
    )
}

export default ShopSectionBox02