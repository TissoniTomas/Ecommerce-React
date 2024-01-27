import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

const useFetch = (db) => {
  const [gamesData, setGamesData] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "games"));

    const getGames = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
    
        docs.push({ ...doc.data(), id: doc.id });
        
        setGamesData(docs);
      });
     
    };
    setTimeout(() => {
      setSpinner(!spinner);
    }, 2000);

    getGames();
  }, []);

  return { gamesData, spinner };
};

export default useFetch;
