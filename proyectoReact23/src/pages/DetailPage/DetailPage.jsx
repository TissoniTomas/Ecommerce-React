import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [data, setData] = useState({});
  let { id } = useParams();
  const { title, price, description, category, image, rating } = data;

  console.log(id);
  console.log(data);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, [id]);

  return (
    <div className="flex items-center m-20 text-center">
      <img className="w-96" src={image} alt={title} />
      <div className="flex flex-col h-screen border-black border items-center m-10">
        <h1 className="font-Montserrat text-6xl hover:bg-black hover:text-white mt-20">
          {title}
        </h1>
        <h2>{category}</h2>
        {["women's clothing", "men's clothing"].includes(category) && (
          <select name="talle" id="talle">
            <option value="SM">SM</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        )}

        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default DetailPage;
