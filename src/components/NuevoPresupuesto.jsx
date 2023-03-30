import { useState } from 'react'
import Mensaje from './Mensaje'

//5. Lo extraes de nuevo
const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto valido');
            return //Ya no se ejecutan las siguientes lineas y rompemos el ciclo de la función
        }
        //Se agrega otro setMensaje para que lo devuelva vacío
        setMensaje('')
        setIsValidPresupuesto(true)


    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu Presupuesto'
                        //Le agregas el valor de presupuesto para que inicie en 0
                        value={presupuesto}
                        //Como vamos a escribir en ese input le podemos pasar un evento.
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto