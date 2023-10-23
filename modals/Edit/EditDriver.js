import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const modalDriverEdit = ({ showEdit, setShowEdit, valueEdit }) => {


    const [formData, setForm] = useState({
        id: valueEdit.id,
        nome:  valueEdit.nome,
        CPF:  valueEdit.CPF,
        RG:  valueEdit.RG,
        cargo:  valueEdit.cargo,
        supervisor:  valueEdit.supervisor,
        ncnh:  valueEdit.ncnh,
        categoria:  valueEdit.categoria,
        vencimento:  valueEdit.vencimento,
        endereco:  valueEdit.endereco,
        bairro:  valueEdit.bairro,
        cidade:  valueEdit.cidade,
        n:  valueEdit.n,
        uf:  valueEdit.uf,
        email:  valueEdit.email,
        celular:  valueEdit.celular,
        foto:  valueEdit.foto,
        whatsapp:  valueEdit.whatsapp,
        status:  valueEdit.status,
    });




    function handleInputChange(event) {

        const { name, value } = event.target;



        setForm({
            ...formData, // Mantenha os valores existentes
            [name]: value, // Atualize o campo "nome" com o novo valor
        });

    };


    function editMotor() {


        

        setShowEdit(!showEdit) //fechando modal



    }



    console.log('DADOS FORM',formData)
    console.log('DADOS VALOR EDITAR',formData)





    return (


        <Modal className='modal-xl' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-white fs-4 text-wrap'>Editar Motorista</Modal.Title>
            </Modal.Header>
            <Modal.Body  >



                <form >

                    <div className="col-md-2 me-auto">
                        <label >Status:</label>
                        <select name="status" className="form-control" id="status-select" value={formData.status} onChange={(e) => handleInputChange(e)}>
                            <option value="ATIVO">ATIVO</option>
                            <option value="INATIVO">INATIVO</option>
                        </select>
                    </div>

                    <div className="row">

                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Nome:</label>
                            <input type="text" name="nome" className="form-control" value={formData.nome} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">CPF:</label>
                            <input type="text" name="CPF" className="form-control" value={formData.CPF} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">RG:</label>
                            <input type="text" name="RG" className="form-control" value={formData.RG} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Cargo:</label>
                            <input type="text" name="cargo" className="form-control" value={formData.cargo} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Supervisor:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Nº CNH:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Categoria:</label>
                            <input type="text" name="categoria" className="form-control" value={formData.categoria} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-2">
                            <label className="col-form-label" value={formData.vencimento} onChange={(e) => handleInputChange(e)} >Vencimento CNH:</label>
                            <input type="date" name="vencimento" className="form-control" />
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Endereço:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Bairro:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Cidade</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-1">
                            <label className="col-form-label">Nº</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-2">
                            <label className="col-form-label">UF</label>
                            <input type="text" className="form-control" />
                        </div>



                    </div>


                    <div className="row">

                        <div className="col-md-4">
                            <label className="col-form-label">Email:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Celular:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Whatsapp:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Código Integração:</label>
                            <input type="text" className="form-control" />
                        </div>


                    </div>



                </form>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowEdit(!showEdit)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => editMotor()}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>

        </Modal>
    )

}

export default modalDriverEdit