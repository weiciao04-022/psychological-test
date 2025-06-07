'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import { usePsyStore } from '@/app/store/store';
import r1 from '@/../public/3.result/r1.png';
import r2 from '@/../public/3.result/r2.png';
import r3 from '@/../public/3.result/r3.png';
import circle1Img from '@/../public/3.result/blur-circle-1.png';

export default function ResultPage() {
    const { score } = usePsyStore();

    const getResult = (score) => {
        if (score <= 3) {
            return (
                <div className='flex justify-center items-center flex-col gap-[60px]'>

                    <div className="w-full flex justify-center">
                        <img
                            src="/3.result/r1.png"
                            alt="r1"
                            style={{
                                width: '298px',
                                height: 'auto',
                                maxWidth: '100%',
                                display: 'block',
                            }}
                        />


                    </div>

                </div>

            );
        } else if (score <= 6) {
            return (
                <div className='flex justify-center items-center flex-col gap-[60px]'>

                    <div className="w-full flex justify-center">
                        <img
                            src="/3.result/r2.png"
                            alt="r2"
                            style={{
                                width: '298px',
                                height: 'auto',
                                maxWidth: '100%',
                                display: 'block',
                            }}
                        />


                    </div>

                </div>
            );
        } else {
            return (
                <div className='flex justify-center items-center flex-col gap-[60px]'>

                    <div className="w-full flex justify-center">
                        <img
                            src="/3.result/r3.png"
                            alt="r3"
                            style={{
                                width: '298px',
                                height: 'auto',
                                maxWidth: '100%',
                                display: 'block',
                            }}
                        />


                    </div>

                </div>
            );
        }
    };

    return (
        <MobileFrame>
            <div className="relative result-page w-full flex justify-center flex-col">

                {getResult(score)}

                <div className="relative w-full flex flex-col items-center ">
                
                    {/* 這裡放你的內容 */}
                    <div className="z-10 w-[298px]">
                        <div className='text-[#B95F0F] font-bold text-center text-[16px]
           leading-loose tracking-wide '>
                            長按或截圖可保存結果
                        </div>

                        <div className="flex justify-center gap-2">
                            <button className="bg-[#AA5F26] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center 
                font-medium shadow-[0px_4px_0px_1px_#84491C] cursor-pointer hover:translate-y-0.5 transition">再玩一次</button>
                            <button className="bg-[#AA5F26] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center 
                font-medium shadow-[0px_4px_0px_1px_#84491C] cursor-pointer hover:translate-y-0.5 transition">分享測驗</button>
                        </div>
                    </div>
                </div>
                <Image className=' absolute bottom-0 translate-y-4/5 pointer-event-none ' src={circle1Img} alt='circle1Img' />



            </div>

        </MobileFrame>

    );
}

