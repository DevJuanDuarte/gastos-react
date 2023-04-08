import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoDeGastos from './components/ListadoDeGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

const App = () => {
  //Cuando un state pasa por distintos componentes es mejor agregarlos en la App:
  //1. Se crea el State
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState('') //Se inicia en 0
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) //Comienza como falso

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(()=> {
    if (Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto()
    }
  }, [gastoEditar])


  //Icono crear
  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 300);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        //2. Se agrega al componente
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoDeGastos 
            setGastoEditar={setGastoEditar}
            gastos={gastos}/>
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
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