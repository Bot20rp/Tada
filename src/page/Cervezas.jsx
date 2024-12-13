import React from 'react';
import './Cervezas.css';

const Cervezas = () => {
  // Array con los datos de las imágenes, descripciones y precios
  const cervezas = [
    { id: 1, src: "/img/c1.jpeg", alt: 'Cerveza 1', descripcion: 'Cerveza Artesanal TADA', precio: '$10.00' },
    { id: 2, src: "/img/c2.jpg", alt: 'Cerveza 2', descripcion: 'Cerveza Lager Premium', precio: '$12.00' },
    { id: 3, src: "/img/TADA.png", alt: 'Cerveza 3', descripcion: 'Cerveza Stout Oscura', precio: '$14.00' },
    { id: 4, src: "/img/TADA.png", alt: 'Cerveza 4', descripcion: 'Cerveza Pale Ale', precio: '$11.00' },
  ];

  return (
    <div className="contaiCerveza">
      {cervezas.map((cerveza) => (
        <div key={cerveza.id} className="cerveza-item">
          <img src={cerveza.src} alt={cerveza.alt} />
          <div className="cerveza-info">
            <p className="cerveza-descripcion">{cerveza.descripcion}</p>
            <p className="cerveza-precio">{cerveza.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cervezas;
