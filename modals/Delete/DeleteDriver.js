
import { Modal, Button, Image } from 'react-bootstrap';
import AlertToast from 'widgets/Alert/Alert';
import { toast } from 'react-toastify';



const DeleteDriver = ({ item, showDelete, setShowDelete, isDelete, setIsDelete }) => {

    async function handerDelete(id) {

        const options = {
            method: 'DELETE',

        };

        await toast.promise(
            fetch(`https://api-frota.onrender.com/driver/${id}`, options)
                .then(response => response.json())
                .then(response => {
                    if (response.ok) {

                        AlertToast(response.message_pt, 'success')

                        setShowDelete(!showDelete) //fechando modal
                        setIsDelete(!isDelete) //fechando atualizando lista

                    } else if (response.message_en === 'server error') {

                        AlertToast(`${response.message_pt}`, 'error')
                    } else {

                        AlertToast(response.message_pt, 'warn')
                    }
                })
                .catch(err => console.error(err)),
            {
                pending: `Apagando Motorista de id ${id}`,
                error: 'Falha em salvar dados do motorista'

            }
        )







    }


    return (
        <Modal className='modal' show={showDelete} onHide={() => setShowDelete(!showDelete)} >
            <Modal.Header style={{ backgroundColor: '#da6b6e' }}   >
                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-text fs-3 text-white me-2"></i>
                    Apagar Motorista
                    <i className="fe fe-users fs-3 text-white ms-2"></i>
                </Modal.Title>



            </Modal.Header>
            <Modal.Body  >



                <form >


                    <div className="row">


                        <div class="modal-body">
                            <div className="d-flex flex-column justify-content-center align-items-center text-center">

                                <i className='fe fe-alert-triangle text-white p-2 rounded-circle text-center' style={{ fontSize: '60px', backgroundColor: '#da6b6e' }}></i>
                                <p className="fs-3 fw-bold" style={{ 'font-size': '1.2rem' }}>Deseja relamente apagar o registro de {item.name}?</p>

                            </div>
                        </div>

                    </div>

                </form>


            </Modal.Body>

            <Modal.Footer className='d-flex justify-content-center'>
                <Button className='text-secondary fw-bold fs-4 border border-secondary' variant="none" onClick={() => setShowDelete(!showDelete)}>
                    Fechar
                </Button>
                <Button className='text-danger fw-bold fs-4 border border-danger' variant="none" onClick={() => handerDelete(item.id)}>
                    Apagar
                </Button>
            </Modal.Footer>

        </Modal>


    );
}

export default DeleteDriver;
