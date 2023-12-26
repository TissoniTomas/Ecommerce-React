import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemCount from "../itemCount/itemCount";



const MainCardProducts = ({data}) => {
  
 

  return (
    <Card className=" w-64 relative" style={{height: "700px"}}>
      <CardMedia className="" style={{backgroundColor:"white"}} component="img" alt="boca-titular" image={data.imageRemera} />
      <CardContent>
        <h3 className="titleCard mb-6 text-xl text-center">{data.titleRemera}</h3>
        <Typography variant="body2" color="text.secondary">
          {data.descriptionRemera}
        </Typography>
      </CardContent>
      <CardActions className="absolute bottom-1 flex flex-col" >
        <Button className="botonesCard" color="inherit" size="small">Ver mas</Button>
        <ItemCount />
        <Button className="botonesCard" color="inherit" size="small">Añadir al Carrito</Button>
      </CardActions>
    </Card>
  );
};

export default MainCardProducts;

