
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link, useParams } from "react-router-dom";

import SpinnerFB from "../../components/Spinner/Spinner";
import { useContext, useState, useEffect } from "react";
import { ModeContext } from "../../context/modeContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs,  } from "firebase/firestore";




const CategoryPage = () => {
  
  const {mode} = useContext(ModeContext)
  const { Categoryid } = useParams();
  const [gamesData, setGamesData] = useState([]);
  const [spinner, setSpinner] = useState(true);


  
  useEffect(() => {
    
    
    
    
    const q = query(collection(db, "games"), where("categorySection", "==", Categoryid));

    const getGames = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
    
    
        docs.push({ ...doc.data(), id: doc.id });
        
        setGamesData(docs);
        console.log(docs);
      });
      
    };
 
    setTimeout(() => {
      setSpinner(false);
      console.log(spinner);
    }, 2000);


    getGames();

  }, [Categoryid]);

  let title;

  switch(Categoryid){
    case "rockstar-games" :{
      title = "ROCKSTAR GAMES OBRAS MAESTRAS"
      break;
    }
    case "cod-saga" :{
      title = "SAGA CALL OF DUTY"
      break;
    }
    case "nfs-saga" :{
      title = "SAGA NEED FOR SPEED"
      break;
    }
    case "sports&others" :{
      title = "DEPORTES Y OTROS"
      break;
    }

    default : 
    title = "La busqueda no devuelve resultados"

    
  }


  return (
    <>
      <main className={`flex flex-col items-center ${mode === "light" ? "bg-white" : "bg-gray-900"} lg:mt-48`}>
        <h1 className={`font-Montserrat text-center text-4xl lg:text-6xl my-10 ${mode === "light" ? "text-gray-900" : "text-white"}`}>{title}</h1>

          {spinner ? 
          <div className="my-44">
            <SpinnerFB/>

          </div>
           :
        <div className="grid grid-cols-1 gap-10 my-20 md:grid md:grid-cols-2 lg:grid-cols-3">
          
          {gamesData.map((item) => (
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
