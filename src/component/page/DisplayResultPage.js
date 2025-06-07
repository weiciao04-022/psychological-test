'use client';

import Image from 'next/image';
import MobileFrame from '@/component/layout/MobileFrame';
import DR1 from '@/../public/2.displayResult/dr1.png';
import circle1Img from '@/../public/2.displayResult/blur-circle-1.png';

export default function DisplayResultPage({nextStep}) {

  return (


    <>
      <MobileFrame>
        <div className='flex flex-col justify-center items-center p-1.5'>
          <Image className="absolute top-0 -translate-y-1/2" src={circle1Img} alt="circle1Img" />
          <Image src={DR1} className="w-[70px]" alt="Dr1" />
          <div className='text-[#AA5F26] text-2xl font-bold gap-[14px]'>
            顯示我的失控可頌
          </div>

          <div
            onClick={nextStep}
            className="bg-[#AA5F26] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center 
          font-medium shadow-[0px_4px_0px_1px_#84491C] cursor-pointer hover:translate-y-0.5 transition">
            查看結果
          </div>
          <Image className="absolute bottom-0 translate-y-1/2" src={circle1Img} alt="circle1Img" />
          
        </div>


      </MobileFrame>



    </>

  )

}