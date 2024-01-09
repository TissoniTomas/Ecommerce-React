import SpinnerFB from "../../components/Spinner/Spinner";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import useFetch from "../../hooks/useFetch";


const HomePage = () => {
  const {data,spinner} = useFetch("https://fakestoreapi.com/products")
  console.log(data);
 
  return (
    <>
      {spinner == true ? (
        <div className="flex justify-center my-40">

        <SpinnerFB/>
        </div>
      ) : (
        <main className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-Montserrat text-center my-10 md:text-5xl">
            Men's & Woman's
          </h1>
          <ItemListContainer section="clothing" data={data} />
          <h2 className="text-4xl font-Montserrat text-center my-20 md:text-5xl">
            Electronics
          </h2>
          <ItemListContainer section="electronics" data={data} />
        </main>
      )}
    </>
  );
};

export default HomePage;
