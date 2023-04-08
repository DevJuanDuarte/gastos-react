import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import cerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar }) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')

    useEffect (()=> {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setPrecio(gastoEditar.precio)
            setCategoria(gastoEditar.categoria)
          }
    }, [])

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 300);
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, precio, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }
        guardarGasto({ nombre, precio, categoria })
    }


    return (
        <div className="modal">

            <div className="cerrar-modal">
                <img
                    src={cerrarBtn}
                    alt="Boton Cerrar"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Desde form</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="precio">Precio</label>
                    <input
                        id='precio'
                        type="number"
                        value={precio}
                        onChange={e => setPrecio(Number(e.target.value))}
                        placeholder='Añade el precio del gasto: ejemplo 300' />
                </div>


                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select name="" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">-- Ahorro --</option>
                        <option value="comida">-- Comida --</option>
                        <option value="casa">-- Casa --</option>
                        <option value="varios">-- Varios --</option>
                        <option value="ocio">-- Ocio --</option>
                        <option value="salud">-- Salud --</option>
                        <option value="suscripciones">-- Suscripciones --</option>
                    </select>
                </div>

                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal