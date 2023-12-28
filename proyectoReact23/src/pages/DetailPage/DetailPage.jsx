import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemCardDetailPage from "../../components/ItemCardDetailPage/ItemCardDetailPage"
import "./DetailPage.css"




const DetailPage = () => {
    const [data, setData] = useState({})
    let { id } = useParams();
    const {title,price,description,category,image,rating} = data

    console.log(id);
    console.log(data);
    
   
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((data)=>{
        setData(data);
        console.log(data);
      })
    );
  }, [id]);


  return (
    <div className='container-product'>
      <h1 className='container-title'>{title}</h1>
      <div className='card-product'>

        <ItemCardDetailPage dataCard = {data}/>


     <div className='container-p'> 
      <p className='card-description'>{data.description}</p>
     </div>
      </div>
    </div>
  )
}

export default DetailPage
