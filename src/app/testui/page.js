'use client';

import { DatePicker } from 'antd';


export default function TestUI() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  return (
    <div className="w-screen h-screen bg-yellow-200 flex justify-center items-center gap-5 flex-wrap overflow-auto">
      TEST UI
      {/* <DatePicker onChange={onChange} needConfirm/> */}
      <div className="relative bg-white w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col text-[#4C37AC] p-6">
        <div className=''> 2025 </div>
        <div className=''> 乙巳年[蛇]四月初四 </div>
        <div className=''> 五月 </div>
        <div className='text-[240px]'> 01 </div>
        <div className='text-[60px]'> 星期四 </div>
      </div>



    </div>
  );
}