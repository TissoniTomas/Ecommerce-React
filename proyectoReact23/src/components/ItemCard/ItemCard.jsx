
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../../context/modeContext";

const ItemCard = ({ data }) => {
  

  const {mode, setMode} = useContext(ModeContext)
  
  return (
    <>
   <div className={`flex flex-col justify-center items-center w-64 h-[550px] shadow-2xl px-4 lg:h-[750px] lg:w-96 hover:animate-fade-right  hover:animate-duration-[3000ms] ${mode ==="light" ? "bg-white" : "bg-gray-900 border border-white shadow-white" }`}>
    <img className= {`h-44 lg:h-96 `} src={data.img} alt="" />
    <h1 className={`font-inter font-extrabold text-xl text-center my-6 lg:text-3xl lg:my-160 ${mode === "light" ? "text-black" : "text-white"}`} >{data.name}</h1>
    <Link to={`/product/detail/${data.id}`}>
    <button  className="bg-cyan-700 text-white w-32 my-6 h-10 rounded-xl font-Inter font-medium ">{data.category}</button>
    </Link>

   </div>
    </>
  );
};

export default ItemCard;
