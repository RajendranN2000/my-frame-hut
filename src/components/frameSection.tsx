import React from "react";

const FrameSection: React.FC = () => {
  return (
    <div className="frame-bg flex flex-col items-center">
      <div className="roboto-bold text-[#C28B00] text-[44px] max-w-[70%] text-center pt-20">
        "Find the Right Size & Price for Your <br /> Perfect Frame"
      </div>
      <div className="flex gap-8 mt-12 mb-16 items-center">
      <div className="bg-[#CDB8A2] h-[380px] w-[250px]">
          <div className="bg-[#E4DACE] text-center py-4 mt-6 roboto-bold text-[#111111]">
          A5: ₹299
          </div>
          <div className="m-6">
            <img
              className="h-[250px] w-full"
              src="/images/a5-frame.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#99664F] h-[450px] w-[300px]">
          <div className="bg-[#E4DBD1] text-center py-4 mt-6 roboto-bold text-[#111111]">
          A4: ₹399
          </div>
          <div className="p-6">
            <img
              className="h-[320px] w-full"
              src="/images/a4-frame.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#352521] h-[500px] w-[330px]">
          <div className="bg-[#E4DBD1] text-center py-4 mt-6 roboto-bold text-[#111111]">
            A3: ₹649
          </div>
          <div className="p-6">
            <img
              className="h-[370px] w-full"
              src="/images/a3-frame.png"
              alt=""
            />
          </div>
        </div>
       
       
      </div>
    </div>
  );
};
export default FrameSection;
