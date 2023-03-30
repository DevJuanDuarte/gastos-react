import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

//3. Se extraen
const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {/* Luego va el componente de nuevo presupuesto: */}
        <NuevoPresupuesto 
          //4. Se agregan al otro componente
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        />
    </header>
  )
}

export default Header