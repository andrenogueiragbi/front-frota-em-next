
import { Modal, Button,Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import AlertToast from 'widgets/Alert/Alert';
import { DataContext } from 'hooks/DataFake';




const modalDriverNew = ({ showNew, setShowNew }) => {

    const { addMotorista } = useContext(DataContext);

    const [formData, setForm] = useState({
        id: "",
        nome: "",
        CPF: "",
        RG: "",
        cargo: "",
        supervisor: "",
        ncnh: "",
        categoria: "",
        vencimento: "",
        endereco: "",
        bairro: "",
        cidade: "",
        n: "",
        uf: "",
        email: "",
        celular: "",
        foto: "",
        whatsapp: "",
        foto: "",
        integracao: ""
    });




    function handleInputChange(event) {

        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };


    function newMotor() {

        if (formData.nome) {

            addMotorista(formData.nome, formData.CPF, formData.RG, formData.cargo, formData.supervisor, formData.ncnh, formData.categoria, formData.emissao, formData.vencimento, formData.endereco, formData.bairro, formData.cidade, formData.n, formData.uf, formData.email, formData.celular, formData.whatsapp, formData.integracao)

            //setMotorista([...motorista, formData]);
            AlertToast('Dados Salvos!', 'success')



        } else {
            return AlertToast('Dados inválidos para salvar!', 'info')


        }





        setForm({ //Zerando variaveis do formulario
            id: "",
            nome: "",
            CPF: "",
            RG: "",
            cargo: "",
            supervisor: "",
            ncnh: "",
            categoria: "",
            vencimento: "",
            endereco: "",
            bairro: "",
            cidade: "",
            n: "",
            uf: "",
            email: "",
            celular: "",
            foto: "",
            whatsapp: "",
            foto: "",
            integracao: ""
        })
        setShowNew(!showNew) //fechando modal



    }


    function closeModal() {

        setForm({ //Zerando variaveis do formulario
            id: "",
            nome: "",
            CPF: "",
            RG: "",
            cargo: "",
            supervisor: "",
            ncnh: "",
            categoria: "",
            vencimento: "",
            endereco: "",
            bairro: "",
            cidade: "",
            n: "",
            uf: "",
            email: "",
            celular: "",
            foto: "",
            whatsapp: "",
            foto: "",
            integracao: ""
        })
        setShowNew(!showNew) //fechando modal

    }





    return (
        <Modal className='modal-xl' show={showNew} onHide={() => setShowNew(!showNew)} >
            <Modal.Header className='bg-secondary' closeButton>

                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-plus fs-3 text-white me-2"></i>
                    Novo Motorista
                    <i className="fe fe-users fs-3 text-white ms-2"></i>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  >

                {/*            <form >

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
                            <input type="text" name="supervisor" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Nº CNH:</label>
                            <input type="text" name="ncnh" className="form-control" value={formData.ncnh} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Categoria:</label>
                            <input type="text" name="categoria" className="form-control" value={formData.categoria} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-2">
                            <label className="col-form-label"  >Vencimento CNH:</label>
                            <input type="date" name="vencimento" className="form-control" value={formData.vencimento} onChange={(e) => handleInputChange(e)} />
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Endereço:</label>
                            <input type="text" name="endereco" className="form-control" value={formData.endereco} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Bairro:</label>
                            <input type="text" name="bairro" className="form-control" value={formData.bairro} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Cidade</label>
                            <input type="text" name="cidade" className="form-control" value={formData.cidade} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-1">
                            <label className="col-form-label">Nº</label>
                            <input type="text" name="n" className="form-control" value={formData.n} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-2">
                            <label className="col-form-label">UF</label>
                            <input type="text" name="uf" className="form-control" value={formData.uf} onChange={(e) => handleInputChange(e)} />
                        </div>



                    </div>


                    <div className="row">

                        <div className="col-md-4">
                            <label className="col-form-label">Email:</label>
                            <input type="text" name="email" className="form-control" value={formData.email} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Celular:</label>
                            <input type="text" name="celular" className="form-control" value={formData.celular} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Whatsapp:</label>
                            <input type="text" name="whatsapp" className="form-control" value={formData.whatsapp} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Código Integração:</label>
                            <input type="text" name="integracao" className="form-control" value={formData.integracao} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>


                </form> */}

                <form >

                    <div className="d-flex justify-content-center mb-3 ">
                        <div className="icon-shape">
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image className="m-3 rounded-circle" src={''} height={90} width={90} alt="" />
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
                <Button variant="secondary" onClick={() => closeModal()}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => newMotor()}>
                    Salvar
                </Button>
            </Modal.Footer>

        </Modal>
    )

}

export default modalDriverNew