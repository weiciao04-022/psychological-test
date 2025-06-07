'use client';

import Image from 'next/image';
import { useQuestionStore } from '@/app/store/store';
import { usePsyStore } from '@/app/store/store';

import MobileFrame from '@/component/layout/MobileFrame';

import q1Up from '@/../public/1.question/q1up.png';
import q1Down from '@/../public/1.question/q1-down.png'
import q2Up from '@/../public/1.question/q2up.png';
import q2Down from '@/../public/1.question/q2down.png';
import q3Up from '@/../public/1.question/q3up.png';
import q3Down from '@/../public/1.question/q3down.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import circle3Img from '@/../public/1.question/blur-circle-3.png';
import circle4Img from '@/../public/1.question/blur-circle-4.png';



export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  const clickAnswer = (option) => {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
  };

  // 安全取值：避免還沒載入或 index 越界
  const currentQuestion = questionData?.questions?.[`${questionIndex + 1}`];

  if (!currentQuestion) return null; // or show loading

  return (
    <MobileFrame>


      <div className="flex flex-col items-center gap-[26px]">


        {/* 題號圈圈 + 題目內容 */}
        {questionIndex === 0 && (
          <>
            <Image className="absolute top-0 -translate-y-1/2" src={circle2Img} alt="circle2Img" />

            <div className="flex flex-col items-center gap-[26px]">
              <Image src={q1Up} className="w-[88px]" alt="q1Up" />

              {/* 題號 */}
              <div className="text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl">
                Q{questionIndex + 1}
              </div>

              {/* 題目 */}
              <div className="text-center font-bold text-3xl text-[#90B62A] mb-[60px]">
                {currentQuestion.title}
              </div>

              {/* 按鈕區 */}
              <div className="flex flex-col gap-4 w-full items-center">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={option.title + index}
                    className="bg-[#BEE351] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition"
                    onClick={() => clickAnswer(option)}
                  >
                    {option.title}
                  </div>
                ))}
              </div>

              {/* q1Down 放這裡！按鈕下方 */}
              <Image src={q1Down} className="w-[88px]" alt="q1Down" />
            </div>



            <Image className="absolute bottom-0 translate-y-1/2" src={circle2Img} alt="circle2Img" />


          </>
        )}

        {questionIndex === 1 && (
          <>
            <Image className="absolute top-0 -translate-y-1/2" src={circle3Img} alt="circle3Img" />

            <div className="flex flex-col items-center gap-[26px]">
              <Image src={q2Up} className="w-[88px]" alt="q2Up" />

              {/* 題號 */}
              <div className="text-[#DD3E3E] border-2 border-[#DD3E3E] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl">
                Q{questionIndex + 1}
              </div>

              {/* 題目 */}
              <div className="text-center font-bold text-3xl text-[#DD3E3E] mb-[60px]">
                {currentQuestion.title}
              </div>

              {/* 按鈕區 */}
              <div className="flex flex-col gap-4 w-full items-center">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={option.title + index}
                    className="bg-[#DD3E3E] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition"
                    onClick={() => clickAnswer(option)}
                  >
                    {option.title}
                  </div>
                ))}
              </div>

              {/* q1Down 放這裡！按鈕下方 */}
              <Image src={q2Down} className="w-[88px]" alt="q2Down" />
            </div>



            <Image className="absolute bottom-0 translate-y-1/2" src={circle3Img} alt="circle3Img" />


          </>
        )}

        {questionIndex === 2 && (
          <>
            <Image className="absolute top-0 -translate-y-1/2" src={circle4Img} alt="circle4Img" />

            <div className="flex flex-col items-center gap-[26px]">
              <Image src={q3Up} className="w-[88px]" alt="q3Up" />

              {/* 題號 */}
              <div className="text-[#89BCFF] border-2 border-[#89BCFF] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl">
                Q{questionIndex + 1}
              </div>

              {/* 題目 */}
              <div className="text-center font-bold text-3xl text-[#89BCFF] mb-[60px]">
                {currentQuestion.title}
              </div>

              {/* 按鈕區 */}
              <div className="flex flex-col gap-4 w-full items-center">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={option.title + index}
                    className="bg-[#89BCFF] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition"
                    onClick={() => clickAnswer(option)}
                  >
                    {option.title}
                  </div>
                ))}
              </div>

              {/* q1Down 放這裡！按鈕下方 */}
              <Image src={q3Down} className="w-[88px]" alt="q3Down" />
            </div>



            <Image className="absolute bottom-0 translate-y-1/2" src={circle4Img} alt="circle4Img" />


          </>
        )}

        {/* 按鈕區 */}
        {/* <div className="flex flex-col gap-4 w-full items-center">
          {currentQuestion.options.map((option, index) => {
            if (questionIndex === 0) {
              return (
                <div
                  className="bg-[#BEE351] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition"
                  onClick={() => clickAnswer(option)}
                  key={option.title + 'green'}
                >
                  {option.title}
                </div>
              );
            }

            if (questionIndex === 1) {
              return (
                <div
                  className="bg-[#DD3E3E] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition"
                  onClick={() => clickAnswer(option)}
                  key={option.title + 'red'}
                >
                  {option.title}
                </div>
              );
            }

            if (questionIndex === 2) {
              return (
                <div
                  className="bg-[#89BCFF] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition"
                  onClick={() => clickAnswer(option)}
                  key={option.title + 'blue'}
                >
                  {option.title}
                </div>
              );
            }

            return null;
          })}
        </div> */}

      </div>


    </MobileFrame >
  );
}
