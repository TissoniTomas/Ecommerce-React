import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [data, setData] = useState({});
  let { id } = useParams();
  const { title, price, description, category, image, rating } = data;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, [id]);

  return (
    <main style={{height:"1200px"}} >
      <div className="flex flex-col items-center m-10 text-center relative">
        <img className="w-72" src={image} alt={title} />
        <div className="flex flex-col h-screen items-center m-10">
          <h1 className="font-Montserrat text-3xl hover:bg-black hover:text-white mt-20">
            {title}
          </h1>

          <span className="my-10 text-5xl font-Montserrat text-sky-500">{`$ ${price}`}</span>
          <p className="my-20">{description}</p>
          {["women's clothing", "men's clothing"].includes(category) && (
            <select name="talle" id="talle">
              <option value="SM">SM</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          )}
          <span>Cantidad</span>
          <span>Cantidad</span>
          <span className="">Cantidad</span>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
