import { Modal, Button } from 'react-bootstrap';


const modalDriverEdit = ({ showEdit, setShowEdit }) => {

    return (
        <Modal className='modal-xl' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-white fs-4 text-wrap'>Editar Motorista</Modal.Title>
            </Modal.Header>
            <Modal.Body  >


                <form >

                    <div className="col-md-2 me-auto">
                        <label for="status-select">Status:</label>
                        <select className="form-control" id="status-select">
                            <option value="ATIVO">ATIVO</option>
                            <option value="INATIVO">INATIVO</option>
                        </select>
                    </div>

                    <div className="row">



                        <div className="col-md-6 me-auto">
                            <label for="recipient-name" className="col-form-label">Nome:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">CPF:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-rg" className="col-form-label">RG:</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>


                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Cargo:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-rg" className="col-form-label">Supervisor:</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>

                        <div className="col-md-2">
                            <label for="recipient-cpf" className="col-form-label">Nº CNH:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-2">
                            <label for="recipient-rg" className="col-form-label">Emissão CNH:</label>
                            <input type="date" className="form-control" id="recipient-rg" />
                        </div>
                        <div className="col-md-2">
                            <label for="recipient-rg" className="col-form-label">Vencimento CNH:</label>
                            <input type="date" className="form-control" id="recipient-rg"  />
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Endereço:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-rg" className="col-form-label">Bairro:</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Cidade</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-1">
                            <label for="recipient-rg" className="col-form-label">Nº</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>
                        <div className="col-md-2">
                            <label for="recipient-rg" className="col-form-label">UF</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>



                    </div>


                    <div className="row">

                        <div className="col-md-4">
                            <label for="recipient-cpf" className="col-form-label">Email:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Celular:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Whatsapp:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-2">
                            <label for="recipient-cpf" className="col-form-label">Código Integração:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>


                    </div>

                </form>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowEdit(!showEdit)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => setShowEdit(!showEdit)}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>

        </Modal>
    )

}

export default modalDriverEdit