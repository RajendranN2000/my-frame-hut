import React, { useState } from "react";

const DetailSection: React.FC = () => {
  const [itemList, setItemList] = useState([
    {
      img: "/images/photo-mugs.png",
      name: "Personalized Photo Mugs",
    },
    {
      img: "/images/transparent-frame.png",
      name: "Transparent Frame",
    },
    {
      img: "/images/mini-frame.png",
      name: "Mini Frame",
    },
    {
      img: "/images/bouquet.png",
      name: "Bouquet",
    },
    {
      img: "/images/polaroids.png",
      name: "Polaroids",
    },
    {
      img: "/images/resin.png",
      name: "Resin",
    },
    {
      img: "/images/wallet.png",
      name: "Wallet",
    },
    {
      img: "/images/chain.png",
      name: "Chain",
    },
    {
      img: "/images/bracelet.png",
      name: "Bracelet",
    },
  ]);
  return (
    <div className="bg-[#EEECE8] pt-28 pb-12 flex flex-col items-center">
      <div className="text-[#C28B00] roboto-bold text-[36px] text-center ">
        "Explore Our Exclusive Collection of <br></br> Custom Photo Products"
      </div>
      <div className="grid grid-cols-3 max-w-[1000px] gap-4 mt-8">
        {itemList.map((each,index) => {
          return (
            <div className="relative" key={index}>
              <img
                className="w-full h-auto"
                src={each.img}
                alt=""
              />
              <div className="absolute bottom-0 w-full">
                <div className="bg-[#D9D9D9] py-4 text-center roboto-regular">
                  {each.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DetailSection;
