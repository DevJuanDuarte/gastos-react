import {useState, useEffect} from 'react'

const ControlPresupuesto = ({ gastos,presupuesto }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto)=> gasto.precio + total, 0)
      const totalDiponible = presupuesto - totalGastado
      setGastado(totalGastado)
      setDisponible(totalDiponible)
    }, [gastos])
    

    const formatearMoneda = (precio)=> {
        return precio.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div>
            <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

                <div>
                    <p>Grafica aqui</p>
                </div>

                <div className='contenido-presupuesto'>
                    <p><span>Presupuesto: </span>{formatearMoneda(presupuesto)}</p>
                    <p><span>Disponible: </span>{formatearMoneda(disponible)}</p>
                    <p><span>Gastado: </span>{formatearMoneda(gastado)}</p>
                </div>

            </div>
        </div>
    )
}

export default ControlPresupuesto