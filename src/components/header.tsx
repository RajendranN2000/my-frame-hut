const Header:React.FC=()=>{
    return(
        <div className="bg-[#CDB8A2] px-12 py-4 flex justify-center fixed w-full">
            <div className="flex gap-12 Sacramento-regular">
                <div className="text-[#352521] text-[25px] cursor-pointer">Home</div>
                <div className="text-[#352521] text-[25px] cursor-pointer">Frames</div>
                <div className="text-[#352521] text-[25px] cursor-pointer">Gifts</div>
                <div className="text-[#352521] text-[25px] cursor-pointer">All Products</div>
                <div className="text-[#352521] text-[25px] cursor-pointer">Contact Us</div>
            </div>
        </div>
    )
}
export default Header