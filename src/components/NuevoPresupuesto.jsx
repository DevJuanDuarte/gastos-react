import {useState} from 'react'
import Mensaje from './Mensaje'

//5. Lo extraes de nuevo
const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!Number(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('No es un presupuesto valido');
        } else {
            console.log('Si es un presupuesto valido');
        }

    }



    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input 
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Añade tu Presupuesto'
                        //Le agregas el valor de presupuesto para que inicie en 0
                        value={presupuesto}
                        //Como vamos a escribir en ese input le podemos pasar un evento.
                        onChange={(e)=>setPresupuesto(e.target.value)}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto