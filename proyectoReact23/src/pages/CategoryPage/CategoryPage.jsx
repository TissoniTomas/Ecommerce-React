import { useState, useEffect } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const { Categoryid } = useParams();

  const title = Categoryid.toUpperCase();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const dataFiltered = data.filter((item) => item.category === Categoryid);
  console.log(dataFiltered);

  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="font-Montserrat text-4xl my-10">{title}</h1>

        <div className="grid gap-10 my-20">
          {dataFiltered.map((item) => (
            <div key={item.id}>
              <Link to={`/product/detail/${item.id}`}>
                <ItemCard data={item} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
