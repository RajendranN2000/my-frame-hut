import React from "react";

const BannerSection: React.FC = () => {
  return (
    <div className="top-banner-bg flex min-h-[100vh] items-center">
      <div className="w-[40%] pl-20 flex flex-col items-center">
        <div className="text-[#352521] text-center text-[36px] stylescript-regular">
          Preserve Every Moment in Style <br></br> With
        </div>
        <img className="h-20 w-auto" src="/images/frame-hut.png" alt="" />
        <div className="text-[#352521] text-sm STIXTwoText-regular text-center pt-6">
          At My Frame Hub, we believe your memories deserve more than just a
          place to be stored – they deserve to be showcased. Whether it’s a
          cherished family photo, a breathtaking landscape, or an art print you
          love, our high-quality custom frames will bring your pictures to life.
          Frame your memories, frame your story.
        </div>
      </div>
      <div className="w-[60%] pt-[70px] flex justify-center">
        <img
          className="h-[500px] w-auto"
          src="/images/banner-hero-img.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default BannerSection;
