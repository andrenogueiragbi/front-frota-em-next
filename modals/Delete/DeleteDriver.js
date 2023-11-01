import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Modal, Button, Image } from 'react-bootstrap';
const DeleteDriver = ({ item, showDelete, setShowDelete }) => {


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
                            <h3 style="color: #007bff;">Título Moderno</h3>
                            <p style="font-size: 1.2rem;">Este é um texto de exemplo no seu modal. Você pode adicionar parágrafos, estilizar o texto e adicionar elementos HTML conforme necessário.</p>
                            <ul class="list-group">
                                <li class="list-group-item">Item 1</li>
                                <li class="list-group-item">Item 2</li>
                                <li class="list-group-item">Item 3</li>
                            </ul>
                            <img src="sua-imagem.jpg" alt="Imagem Moderna" style="max-width: 100%; border-radius: 10px;"/>
                                <a href="#" class="btn btn-primary mt-3">Botão Moderno</a>
                        </div>




                    </div>





                </form>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowDelete(!showDelete)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => setShowDelete(!showDelete)}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>

        </Modal>


    );
}

export default DeleteDriver;
