import  { useEffect, useState } from "react";


const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
      setTimeout(() => {
        setSpinner(!spinner);
      }, 2000);
  },[]);

  return {data, spinner}
};

export default useFetch;
