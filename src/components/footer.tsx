import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer-bg flex flex-col items-center pt-8 pb-12">
      <div className="text-[#736D55] text-[90px] opacity-15 roboto-bold">
        Contact Us
      </div>
      <div className="text-[#352521] text-[36px] roboto-bold mt-[-60px]">
        We’d love to hear from you!
      </div>
      <div className="text-[#352521] text-center pt-2 text-sm STIXTwoText-regular">
        Let’s bring your cherished memories to life! Reach out to us for custom
        frames that make every <br></br> moment unforgettable
      </div>
      <div className="flex gap-1 mt-3 items-center">
        <img className="h-3 w-auto" src="/images/whatsapp.png" alt="" />
        <div className="text-[#352521] text-xs roboto-regular">
          Call/WhatsApp
        </div>
      </div>
      <a href="https://wa.me/919656023780">
        <div className="text-[#352521] cursor-pointer hover:underline text-sm pt-[2px] STIXTwoText-regular">
          +91 9656023780
        </div>
      </a>
      <div className="flex gap-1 mt-3 items-center">
        <img className="h-3 w-auto" src="/images/insta.png" alt="" />
        <div className="text-[#352521] text-xs roboto-regular">
          Follow & DM us on Instagram
        </div>
      </div>
      <a target="_black" href="https://www.instagram.com/my_frame_hut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
      <div className="text-[#352521] cursor-pointer hover:underline pt-[2px] text-sm STIXTwoText-regular">
        My_frame_hut
      </div>
      </a>
    </div>
  );
};
export default Footer;
