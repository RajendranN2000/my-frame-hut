import React, { useState } from "react";

const AllProducts: React.FC = () => {
  const [productList, setProductList] = useState([
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
  function handleProduct(index: number) {
    setProductList((prevProductList) => {
        // Slice the array into two parts: before the clicked index and after
        const beforeClicked = prevProductList.slice(0, index); // Items before clicked
        const afterClicked = prevProductList.slice(index + 1); // Items after clicked

        // Reorder the array: clicked item -> remaining items
        return [prevProductList[index], ...afterClicked, ...beforeClicked];
      });
      const section = document.getElementById("product-card");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  }
  return (
    <div className="bg-[#D2C8B9] py-16 flex flex-col items-center " id="product-card">
      <div className="roboto font-bold text-center text-[#736D55] text-[36px]" >
        "Explore Our Exclusive Collection of Custom <br /> Photo Products"
      </div>
      <div className="relative mt-10" >
        <div className="grid grid-cols-2 gap-12" >
          {productList.map((each, index) => {
            if (index < 4) {
              return (
                <div className="w-[400px] h-[400px] relative">
                  <img className="h-full w-full" src={each.img} alt="" />
                  <div className="absolute bottom-0 bg-[#D9D9D9] w-full text-center py-5 roboto-regular text-sm">
                    {each.name}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="absolute top-0 right-[-70px] flex flex-col justify-center gap-4 h-full items-center">
          {productList.map((each, index) => {
            if (index > 3) {
              return (
                <div
                  className="cursor-pointer hover:scale-105 transform transition-transform duration-300 "
                  onClick={() => {
                    handleProduct(index);
                  }}
                >
                  <img className="h-[140px] w-[140px]" src={each.img} alt="" />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
