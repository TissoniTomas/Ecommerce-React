import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../../context/modeContext";

const ItemCard = ({ data }) => {
  const { mode, setMode } = useContext(ModeContext);

  return (
    <>
      <div
        className={`flex relative flex-col pt-10 items-center w-64 h-[550px] shadow-2xl px-4 lg:h-[750px] lg:w-96 hover:animate-fade-right  hover:animate-duration-[3000ms] ${
          mode === "light"
            ? "bg-white"
            : "bg-gray-900 border border-white shadow-white"
        }`}
      >
        <img className={`h-64 lg:h-96 w-72 pt-4`} src={data.img} alt="" />
        <h1
          className={`font-inter font-extrabold text-xl text-center my-10 lg:text-3xl lg:my-160 ${
            mode === "light" ? "text-black" : "text-white"
          }`}
        >
          {data.name}
        </h1>
        {data.discountPrice ?
        <div className="flex items-center">
   <s className={`font-Inter font-extrabold text-2xl mr-4 ${mode === "light" ? "text-gray-400 ": "text-white"} `}> $ {data.price}</s>
          <span className={`font-Inter font-extrabold text-3xl text-sky-400 `}>
            $ {data.discountPrice}
          </span>

        </div>
        : <div>
          <span  className={`font-Inter font-extrabold text-3xl mr-4 text-sky-500 `} >$ {data.price}</span>
          </div>}
        <Link to={`/product/detail/${data.id}`}>
          <button className="bg-cyan-700 text-white w-32 my-6 h-10 rounded-xl font-Inter font-medium absolute bottom-2 right-[25%]">{`See More`}</button>
        </Link>
      </div>
    </>
  );
};

export default ItemCard;
