import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemCardDetailPage = ({dataCard}) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
         
          image={dataCard.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            {dataCard.title}
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCardDetailPage