import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = () => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {/* Luego va el componente de nuevo presupuesto: */}
        <NuevoPresupuesto />
    </header>
  )
}

export default Header