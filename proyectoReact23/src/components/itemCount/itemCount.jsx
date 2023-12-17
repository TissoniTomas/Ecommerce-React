import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const itemCount = () => {


  const [stock, setStock] = useState(0);


  const handleIncrement = () => {
    setStock(prevStock => prevStock + 1);
  };

  const handleDecrement = () => {
    setStock(prevStock => (prevStock > 0 ? prevStock - 1 : 0));
  };

  return (
    <TextField style={{marginTop:"20px", marginBottom:"20px"}}
      label="Stock"
      type="number"
      value={stock}
      InputProps={{
        endAdornment: (
          <>
          
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
        
          </>
        ),
      }}
    />
  );

};

export default itemCount;
