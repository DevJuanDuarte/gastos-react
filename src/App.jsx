import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

const App = () => {
  //Cuando un state pasa por distintos componentes es mejor agregarlos en la App:
  //1. Se crea el State
  const [presupuesto, setPresupuesto] = useState(0) //Se inicia en 0
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) //Comienza como falso
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gatos,setGastos] = useState([])


  //Icono crear
  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  const guardarGasto = gasto => {
    console.log(gasto)
  }

  return (
    <div>
      <Header
        //2. Se agrega al componente
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Icono Nuevo Gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal
                  setAnimarModal={setAnimarModal}
                  animarModal={animarModal}
                  setModal={setModal}
                  guardarGasto={guardarGasto} />}
    </div>
  )
}

export default App