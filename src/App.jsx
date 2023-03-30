import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  //Cuando un state pasa por distintos componentes es mejor agregarlos en la App:
  //1. Se crea el State
  const [presupuesto, setPresupuesto] = useState(0) //Se inicia en 0
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) //Comienza como falso

  return (
    <div>
      <Header
        //2. Se agrega al componente
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </div>
  )
}

export default App