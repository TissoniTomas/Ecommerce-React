import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import "./ItemCard.css";

const ItemCard = ({ data }) => {
  const cardStyle = {
    boxShadow: "5px 4px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Card
      className="itemCard--card"
      style={cardStyle}
      sx={{ maxWidth: "400px", maxHeight: "800px" }}
    >
      <CardMedia
        className="itemCard--image"
        component="img"
        alt={data.title}
        image={data.image}
      />
      <CardContent>
        <h3 className="itemCard--title">{data.title}</h3>
      </CardContent>
      <CardActions className="divBotones">
        <Button id="botonesCard" size="small">
          Ver mas
        </Button>

        <Button id="botonesCard" size="small">
          Añadir al Carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
