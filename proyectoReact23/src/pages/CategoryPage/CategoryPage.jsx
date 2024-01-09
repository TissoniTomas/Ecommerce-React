import useFetch from "../../hooks/useFetch";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SpinnerFB from "../../components/Spinner/Spinner";


const CategoryPage = () => {

  const {data,spinner} = useFetch("https://fakestoreapi.com/products/")
 
  const { Categoryid } = useParams();
  const title = Categoryid.toUpperCase();

 
  const dataFiltered = data.filter((item) => item.category === Categoryid);
  console.log(dataFiltered);

  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="font-Montserrat text-4xl my-10">{title}</h1>

          {spinner ? <SpinnerFB/> :
        <div className="grid grid-cols-1 gap-10 my-20 md:grid md:grid-cols-2 lg:grid-cols-3">
          
          {dataFiltered.map((item) => (
            <div key={item.id}>
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
