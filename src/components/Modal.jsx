import cerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = () => {

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 300);

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

            <form action="" className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Desde form</legend>
            </form>


        </div>
    )
}

export default Modal