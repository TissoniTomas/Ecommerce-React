
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
      title = "ROCKSTAR GAMES MASTERPIECES"
      break;
    }
    case "cod-saga" :{
      title = "CALL OF DUTY SAGA"
      break;
    }
    case "nfs-saga" :{
      title = "NEED FOR SPEED SAGA"
      break;
    }
    case "sports&others" :{
      title = "SPORTS & OTHERS"
      break;
    }

    default : 
    title = "La busqueda no devuelve resultados"

    
  }

  
 
  

  return (
    <>
      <main className={`flex flex-col items-center ${mode === "light" ? "bg-white" : "bg-gray-900"}`}>
        <h1 className={`font-Montserrat text-4xl lg:text-6xl my-10 ${mode === "light" ? "text-gray-900" : "text-white"}`}>{title}</h1>

          {spinner ? <SpinnerFB/> :
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
