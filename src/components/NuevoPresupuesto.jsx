import React from 'react'

//5. Lo extraes de nuevo
const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario'>
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
            </form>
        </div>
    )
}

export default NuevoPresupuesto