import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import DetailSection from "../components/detailSection";

const DetailPage:React.FC=()=>{
    return(
        <div className="">
            <Header/>
            <DetailSection/>
            <Footer/>
        </div>
    )
}
export default DetailPage