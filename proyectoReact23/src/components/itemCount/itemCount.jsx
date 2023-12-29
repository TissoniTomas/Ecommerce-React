import React, { useState } from 'react';




const itemCount = () => {


  const [stock, setStock] = useState(0);


  const handleIncrement = () => {
    setStock(prevStock => prevStock + 1);
  };

  const handleDecrement = () => {
    setStock(prevStock => (prevStock > 0 ? prevStock - 1 : 0));
  };

  return (
  <h3>hola</h3>
  );

};

export default itemCount;
