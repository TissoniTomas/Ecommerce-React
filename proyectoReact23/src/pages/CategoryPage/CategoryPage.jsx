import useFetch from "../../hooks/useFetch";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SpinnerFB from "../../components/Spinner/Spinner";
import { ModeContext } from "../../context/modeContext";
import { useContext } from "react";


const CategoryPage = () => {

  const {data,spinner} = useFetch("https://fakestoreapi.com/products/")
 
  const { Categoryid } = useParams();
  const title = Categoryid.toUpperCase();
  const {mode} = useContext(ModeContext)

 
  const dataFiltered = data.filter((item) => item.category === Categoryid);
  console.log(dataFiltered);

  return (
    <>
      <main className={`flex flex-col items-center ${mode === "light" ? "bg-white" : "bg-gray-900"}`}>
        <h1 className={`font-Montserrat text-4xl my-10 ${mode === "light" ? "text-gray-900" : "text-white"}`}>{title}</h1>

          {spinner ? <SpinnerFB/> :
        <div className="grid grid-cols-1 gap-10 my-20 md:grid md:grid-cols-2 lg:grid-cols-3">
          
          {dataFiltered.map((item) => (
            <div className="animate-fade-down animate-duration-[3000ms] animate-delay-1000" key={item.id}>
            <Link to={`/product/detail/${item.id}`}>
            <ItemCard data={item} />
            </Link>
            </div>
            ))}
        
        </div>
        }
      </main>
    </>
  );
};

export default CategoryPage;
