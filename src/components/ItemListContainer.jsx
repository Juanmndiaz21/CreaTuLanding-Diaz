import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <section className='textoTienda'>
      <h2>{mensaje}</h2>
    </section>
  );
};

export default ItemListContainer;