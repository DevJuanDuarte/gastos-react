import React from 'react'
import Gasto from './Gasto'

const ListadoGasto = ({gastos, setGastoEditar}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
        {gastos.map(gasto => (
          <Gasto
          setGastoEditar={setGastoEditar}
          key={gasto.id}
          gasto={gasto}/>
        ))}
    </div>
  )
}

export default ListadoGasto