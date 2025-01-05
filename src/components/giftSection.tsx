import React from "react";

const GiftSection: React.FC = () => {
  return (
    <div className="bg-[#736D55] relative h-[700px]">
        <img className="h-full opacity-25 " src="/images/gift-star-bg.png" alt="" />
      {/* <div className=" gift-section-bg py-20 h-full px-20 flex justify-center"></div> */}
      <div className="absolute top-0 h-full py-20 w-full px-20 flex justify-center">

      <div className="max-w-[1100px] p-12 flex items-center rounded-[30px] border gift-box-shadow border-[#C68F38]">
        <img className="h-[400px]" src="/images/gift.png" alt="" />
        <div className="">
          <div className="text-[#FFFFFF] text-[80px] text-center Sacramento-regular">
            Customized Gifts Available
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-gradient-to-r cursor-pointer from-[#D0A348] rounded-full to-[#FBEA8E] py-3 px-8 text-[#FFFFFF] STIXTwoText-regular text-[28px] gift-btn-shadow">
              View All
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default GiftSection;
