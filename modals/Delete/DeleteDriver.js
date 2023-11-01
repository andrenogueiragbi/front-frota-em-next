
import { Modal, Button, Image } from 'react-bootstrap';
import AlertToast from 'widgets/Alert/Alert';
import { toast } from 'react-toastify';



const DeleteDriver = ({ item, showDelete, setShowDelete }) => {

    async function handerDelete(id) {

        const options = {
            method: 'DELETE',

        };

        await toast.promise(
            fetch(`https://api-frota.onrender.com/driver/${id}`, options)
                .then(response => response.json())
                .then(response => {
                    if (response.ok) {

                        AlertToast('Registro apagado com sucesso', 'success')
                      
                        setShowDelete(!showDelete) //fechando modal

                    } else if (response.message_en === 'server error') {

                        AlertToast(`${response.message_pt} ou dados pertencente a outro motorista`, 'error')
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
            <Modal.Header className='bg-secondary' closeButton>
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


                                <h3 className="text-bg-danger rounded mb-3 fs-3 p-1 text-center d-flex justify-content-center align-items-center w-50"><i className="fe fe-x fs-1 text-white border border-1 rounded-0 border-white  m-1"></i>ATENÇÃO</h3>

                                <p className="fs-3 fw-bold" style={{ 'font-size': '1.2rem' }}>Deseja relamente apagar o registro de número {item.id}?</p>

                            </div>
                        </div>




                    </div>





                </form>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowDelete(!showDelete)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => handerDelete(item.id)}>
                    Apagar
                </Button>
            </Modal.Footer>

        </Modal>


    );
}

export default DeleteDriver;
