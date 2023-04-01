import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

//3. Se extraen
const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto}/>
      ) :
        (
          <NuevoPresupuesto
            //4. Se agregan al otro componente
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}

      {/* Luego va el componente de nuevo presupuesto: */}

    </header>
  )
}

export default Header