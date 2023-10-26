import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from 'hooks/DataFake';
import AlertToast from 'widgets/Alert/Alert';
import { toast } from 'react-toastify';


const modalDriverEdit = ({ item, showEdit, setShowEdit, ufIBGE, cities, setUfIBGE, states }) => {

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


    async function handleInputChange(event) {
        const { name, value } = event.target;

        if (name === 'uf') setUfIBGE(value)

        setForm({
            ...formData,
            [name]: value,

        });

    };

    function editMotor() {


        AlertToast('Dados atualizados com sucesso!', 'info', 2000)

        updateMotorista(id, formData)
        setShowEdit(!showEdit)


    }








    return (



        <Modal className='modal-xl' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-text fs-3 text-white me-2"></i>
                    Editar Motorista
                    <i className="fe fe-users fs-3 text-white ms-2"></i>
                </Modal.Title>



            </Modal.Header>
            <Modal.Body  >



                <form >

                    <div className="d-flex justify-content-center mb-3 ">
                        <div className="icon-shape">
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image className="m-3 rounded-circle" src={item.foto} height={90} width={90} alt="" />
                                    <label className='bg-primary' style={{ borderRadius: '5px', color: '#fff', cursor: 'pointer', margin: '10px', padding: '6px' }} htmlFor="customFile">Selecione uma foto &#187;</label>
                                    <input style={{ display: 'none' }} id='customFile' type='file' />

                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center mb-3 ">
                        <div className="icon-shape">
                            <div className='d-flex flex-column'>
                                <div className="input-group col-md-6">
                                    <label className="input-group-text">Status</label>
                                    <select name="status" className="form-control custom-select " id="status-select" value={formData?.status} onChange={(e) => handleInputChange(e)}>
                                        <option value="ATIVO">ATIVO</option>
                                        <option value="INATIVO">INATIVO</option>
                                    </select>
                                </div>


                            </div>
                        </div>
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
                            <select name="categoria" className="form-control" id="status-select" value={formData?.categoria} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {["A", "B", "C", "D", "E", "A e B", "A e C", "A e D", "A e E"].map((item, index) => (
                                    <option key={index} value={item}>{item}</option>


                                ))}

                            </select>
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



                        <div className="col-md-1">
                            <label className="col-form-label">Nº</label>
                            <input type="text" name="n" className="form-control" value={formData?.n} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">UF:</label>
                            <select name="uf" className="form-control" id="status-select" value={formData?.uf} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {states?.map((item, index) => (
                                    <option key={index} value={item.sigla}>{item.sigla}</option>


                                ))}

                            </select>
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Cidade:</label>
                            <select name="cidade" className="form-control" id="status-select" value={formData?.cidade} onChange={(e) => handleInputChange(e)} >

                                {formData.uf !== item.uf ? <option value="">Selecione uma opção</option> : <option value={formData?.cidade}>{formData?.cidade}</option>}


                                {cities.map((item, index) => (
                                    <option key={index} value={item?.nome}>{item?.nome}</option>


                                ))}

                            </select>
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