import React from "react";
import Header from "../components/header";
import BannerSection from "../components/bannerSection";
import FrameSection from "../components/frameSection";
import GiftSection from "../components/giftSection";
import AllProducts from "../components/allProducts";
import Footer from "../components/footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <FrameSection />
      <GiftSection />
      <AllProducts/>
      <Footer/>
    </>
  );
};
export default LandingPage;
