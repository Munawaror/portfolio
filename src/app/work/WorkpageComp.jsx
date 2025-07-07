import ButtonComp from '@/components/common/ButtonComp'
import Image from 'next/image'
import React from 'react'

const WorkpageComp = ({ title, img, content, btnContent, label }) => {
    return (
        <div className='w-full h-auto  flex flex-col sm:flex-row gap-2 sm:gap-12 py-2 border-b-2 border-[#E0E0E0]'>
            <div className='w-full sm:w-[200px] h-auto sm:h-[200px]  rounded-[6px] '>
                <Image
                    // src='/assets/image1.png'
                    src={img}
                    width='230'
                    height='180'
                    className=' rounded-[6px] sm:absolute '
                    alt='picture1' />
            </div>
            <div className=' text-[#21243D] text-[26px] font-bold'>
                <h3>
                    {title}
                </h3>
                <div className='flex gap-7 py-2'>
                    <ButtonComp
                        text={btnContent}
                    />
                    <small className='text-[#8695A4] font-[400]'>
                        {label}
                    </small>
                </div>
                <p className='w-full sm:w-[580px] h-auto sm:h-[93px] text-[#21243D] text-base font-normal'>
                    {content}
                </p>
            </div>

            
        </div>
    )
}

export default WorkpageComp
