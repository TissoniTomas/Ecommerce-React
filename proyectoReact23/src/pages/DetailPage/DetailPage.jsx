import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { NotificationComponent } from "../../components/Notification/Notification";
import { Button } from "keep-react";

const DetailPage = () => {
  let { id } = useParams();
  const { mode } = useContext(ModeContext);
  const {shoppingCart, setShoppingCart, counterStock, setCounterStock} = useContext(ShoppingCartContext);

  const [gamesData, setGamesData] = useState({});
  const [spinner, setSpinner] = useState(true);
  const {
    name,
    price,
    description,
    category,
    img,
    brand,
    release,
    consolas,
    discountPrice,
  } = gamesData;
  
  const [isFav, setIsFav] = useState(false);

  const [item, setItem] = useState({});
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const q = query(collection(db, "games"), where(documentId(), "==", id));

    const getGames = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });

        setGamesData(...docs);
        console.log(docs);
      });
    };
    setTimeout(() => {
      setSpinner(!spinner);
    }, 2000);

    getGames();
  }, [id]);

  const handleShoppingCart = (e) => {
    if (platform !== "" && counterStock >= 1) {
      const newitem = {
        name: name,
        price: price,
        image: img,
        quantity: counterStock,
        id: id,
        platform: platform,
        discountPrice: discountPrice,
      };
      setItem(item);
      e.preventDefault();

      const duplicatedItem = shoppingCart.findIndex(
        (item) => item.id === newitem.id && item.platform === newitem.platform
      );

      if (duplicatedItem !== -1) {
        setShoppingCart((prevCart) => {
          const updatedCart = [...prevCart];
          console.log(updatedCart[duplicatedItem]);
          updatedCart[duplicatedItem].quantity += newitem.quantity;
          return updatedCart;
        });
      } else {
        setShoppingCart((prevCart) => [...prevCart, newitem]);
      }

      
    }
  };

  useEffect(() => {
    console.log(shoppingCart);
  }, [shoppingCart]);

  const handleCounterUp = () => {
    setCounterStock(counterStock + 1);
  };

  const handleCounterDown = () => {
    setCounterStock(counterStock > 0 ? counterStock - 1 : 0);
  };

  const handleIsFav = () => {
    setIsFav(!isFav);
  };

  const counterManual = (e) => {
    setCounterStock(parseInt(e.target.value));
  };

  const claves = () => {
    let clavesConsolas = [];
    for (const clave in consolas) {
      clavesConsolas.push(clave);
    }
    let clavesOrdenadas = clavesConsolas.toSorted();
    return clavesOrdenadas;
  };

  let consolasArray = claves();

  return (
    <main
      className={` ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } lg:mt-48 px-6 w-screen`}
    >
      <div className="flex flex-col lg:flex-row w-full items-center text-center">
        <img className="w-auto lg:h-[600px]" src={img} alt={name} />
        <div className="flex flex-col h-full  items-center">
          <h1
            className={`font-Montserrat text-3xl px-10 hover:bg-black hover:text-white mt-10 lg:text-5xl ${
              mode === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {name}
          </h1>
          {discountPrice ? (
            <div className="flex items-center mt-6">
              <s
                className={`font-Montserrat text-4xl mr-4 ${
                  mode === "light" ? "text-gray-400 " : "text-white"
                } `}
              >
                {" "}
                $ {price}
              </s>
              <span
                className={`font-Montserrat text-6xl text-sky-400 `}
              >
                $ {discountPrice}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center my-6">
              <span
                className={`font-Montserrat text-6xl mt-6 text-sky-500 `}
              >
                $ {price}
              </span>
            </div>
          )}
          <p
            className={`my-10 font-Montserrat px-10 text-lg lg:px-20  ${
              mode === "light" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {description}
          </p>
          <ul
            className={` flex flex-col lg:flex-row font-Inter text-lg  mb-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            <li className="mx-10">Brand: {brand}</li>
            <li className="mx-10">Release: {release}</li>
            <li className="mx-10">Category: {category}</li>
          </ul>

          <form className="w-full flex flex-col items-center pb-20">
            <div className="flex justify-evenly items-center w-full">
              <label
                className={`font-Montserrat mx-6 lg:text-2xl ${
                  mode === "light" ? "text-gray-900" : "text-gray-400"
                }`}
                htmlFor="quantity"
              >
                Select Quantity
              </label>
              <input
                className={`w-20 font-Montserrat lg:text-2xl focus:border-4 focus:rounded-lg focus:animate-fade-up focus:border-sky-500 focus:outline-none ${
                  mode === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-900 text-gray-400"
                }`}
                type="number"
                name="stock"
                id="stock"
                value={counterStock}
                onChange={counterManual}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 lg:h-10 lg:w-10 cursor-pointer ${
                  mode === "light" ? "text-gray-900" : "text-gray-400"
                }`}
                onClick={handleCounterUp}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 lg:h-10 lg:w-10 cursor-pointer ${
                  mode === "light" ? "text-gray-900" : "text-gray-400"
                }`}
                onClick={handleCounterDown}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex justify-center w-full mt-10">
              <label
                className={`font-Montserrat mx-6 lg:text-2xl ${
                  mode === "light" ? "text-gray-900" : "text-gray-400"
                }`}
                htmlFor="platform"
              >
                Gaming Platform
              </label>
              <div className={`flex flex-col mb-20 justify-between  `}>
                {consolasArray.map((consola, index) => (
                  <div className="w-full" key={index}>
                    <span
                      onClick={() =>
                        platform === consola
                          ? setPlatform("")
                          : setPlatform(consola)
                      }
                      className={`text-gray-400 block w-32 font-Montserrat text-lg list-none mx-10 cursor-pointer hover:border p-1 ${
                        platform === consola ? " text-red-700 " : null
                      }`}
                      key={consola.id}
                    >
                      {consola}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="hover:animate-pulse "
                onMouseUp={handleShoppingCart}
              >
                {counterStock > 0 && platform !== "" ? (
                  <NotificationComponent />
                ) : (
                  <Button size="md" type="outlineGray">
                    Add to Cart
                  </Button>
                )}
              </button>

              <button type="button" onClick={handleIsFav}>
                {isFav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 lg:h-10 lg:w-10 text-pink-500"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 lg:h-10 lg:w-10 cursor-pointer ${
                      mode === "light" ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
