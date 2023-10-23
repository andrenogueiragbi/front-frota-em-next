import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from 'hooks/DataFake';
import AlertToast from 'widgets/Alert/Alert';


const modalDriverEdit = ({ item, showEdit, setShowEdit }) => {

    const { updateMotorista } = useContext(DataContext);

    const id = item.id

    const [formData, setForm] = useState({
        id: item.id,
        nome: item.nome,
        CPF: item.CPF,
        RG: item.RG,
        cargo: item.cargo,
        supervisor: item.supervisor,
        ncnh: item.ncnh,
        categoria: item.categoria,
        vencimento: item.vencimento,
        endereco: item.endereco,
        bairro: item.bairro,
        cidade: item.cidade,
        n: item.n,
        uf: item.uf,
        email: item.email,
        celular: item.celular,
        foto: item.foto,
        whatsapp: item.whatsapp,
        integracao: item.integracao,
        status: item.status

    });


    function handleInputChange(event) {
        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };

    function editMotor() {

        AlertToast('Dados atualizados!','success')
        updateMotorista(id,formData)
        setShowEdit(!showEdit)

    }





    return (



        <Modal className='modal-xl' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-white fs-4 text-wrap'>Editar Motorista</Modal.Title>
            </Modal.Header>
            <Modal.Body  >



                <form >

                    <div className="col-md-2 me-auto">
                        <label >Status:</label>
                        <select name="status" className="form-control" id="status-select" value={formData?.status} onChange={(e) => handleInputChange(e)} >
                            <option value="ATIVO">ATIVO</option>
                            <option value="INATIVO">INATIVO</option>
                        </select>
                    </div>

                    <div className="row">

                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Nome:</label>
                            <input type="text" name="nome" className="form-control" value={formData?.nome} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">CPF:</label>
                            <input type="text" name="CPF" className="form-control" value={formData?.CPF} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">RG:</label>
                            <input type="text" name="RG" className="form-control" value={formData?.RG} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Cargo:</label>
                            <input type="text" name="cargo" className="form-control" value={formData?.cargo} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Supervisor:</label>
                            <input type="text" name="supervisor" className="form-control" value={formData?.supervisor} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Nº CNH:</label>
                            <input type="text" name="ncnh" className="form-control" value={formData?.ncnh} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Categoria:</label>
                            <input type="text" name="categoria" className="form-control" value={formData?.categoria} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-2">
                            <label className="col-form-label"  >Vencimento CNH:</label>
                            <input type="date" name="vencimento" className="form-control" value={formData?.vencimento} onChange={(e) => handleInputChange(e)} />
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Endereço:</label>
                            <input type="text" name="endereco" className="form-control" value={formData?.endereco} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Bairro:</label>
                            <input type="text" name="bairro" className="form-control" value={formData?.bairro} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Cidade</label>
                            <input type="text" name="cidade" className="form-control" value={formData?.cidade} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-1">
                            <label className="col-form-label">Nº</label>
                            <input type="text" name="n" className="form-control" value={formData?.n} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-2">
                            <label className="col-form-label">UF</label>
                            <input type="text" name="uf" className="form-control" value={formData?.uf} onChange={(e) => handleInputChange(e)} />
                        </div>



                    </div>


                    <div className="row">

                        <div className="col-md-4">
                            <label className="col-form-label">Email:</label>
                            <input type="text" name="email" className="form-control" value={formData?.email} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Celular:</label>
                            <input type="text" name="celular" className="form-control" value={formData?.celular} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Whatsapp:</label>
                            <input type="text" name="whatsapp" className="form-control" value={formData?.whatsapp} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Código Integração:</label>
                            <input type="text" name="integracao" className="form-control" value={formData?.integracao} onChange={(e) => handleInputChange(e)} />
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