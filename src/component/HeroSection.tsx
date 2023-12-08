// import React from 'react'
import { Icon } from '@iconify/react';

function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <div className='bg-primary5 h-hero w-full flex justify-center items-center'>
                <div className="bg-primary3 wh-local border-5 border-primary4 flex justify-start relative">
                    <div className='text-size64px text-uppercase padding-hero overflow-clip line-height text-primary4'>
                        <p>Local</p>
                        <p>Marketplace</p>
                        <p className='text-size96px'>For student</p>
                    </div>
                    <a href="" className='bg-primary1 wh-shop border-5 border-primary4 absolute position-shop items-center flex justify-center text-uppercase px-4 font-size48 text-primary4'> Shop now </a>
                    <div className="peach-page1">
                        <img src="/src/assets/peach1หน้าแรก361.88x367.36px.png" alt="peach-logo" />
                    </div>
                </div>
                {/* Arrow */}
                <button className='absolute text-primary4 arrow-right'>
                    <Icon icon="iconamoon:arrow-up-2" width="72" height="83" rotate={1} />
                </button>
                <button className='absolute text-primary4 arrow-left'>
                    <Icon icon="iconamoon:arrow-up-2" width="83" height="72" rotate={3} />
                </button>
            </div>
        </>
    )

}

export default HeroSection;
