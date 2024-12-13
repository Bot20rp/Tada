import React from 'react'
import { useNavigate} from "react-router-dom";
import "./PreciosPage.css"

const PreciosPage = () => {

  const navigate = useNavigate();

  const cervezas = () => {
    navigate("/cervezas")
  }

  return (
    <div className='container'>
      <div className='magia'>
        <video autoPlay muted loop style={{ width: '200px', borderRadius: '20%' }}>
          <source src="/titulo.mp4" type="video/mp4" />
        </video>

      </div>
      <div className='descuentos'>
        <button onClick={cervezas}>Descuento de Cervezas</button>
        <button>Combos</button>
        <button>Promociones</button>
        <img src="/img/TADA.png" alt="" />
      </div>
    </div>
  )
}

export default PreciosPage
