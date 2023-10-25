
import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import AlertToast from 'widgets/Alert/Alert';
import { DataContext } from 'hooks/DataFake';




const modalFeetNew = ({ showNew, setShowNew }) => {

    const { addFrota, sorteMotorista, sorteFrota } = useContext(DataContext);
    const formaPagamento = ['Avista', '1 vezes', '2 vezes', '3 vezes', '4 vezes', '5 vezes', '6 vezes', '8 vezes', '9 vezes', '10 vezes', '11 vezes', '12 vezes']

    const [formData, setForm] = useState({
        id: "",
        model: "",
        code: "",
        icon: "",
        marca: "",
        placa: "",
        km: "",
        chassi: "",
        combustivel: "",
        ano: "",
        nmotor: "",
        tipo: "",
        status: "",
    });



    function handleInputChange(event) {

        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };


    function newFrota() {

        if (formData.model && formData.code, formData.marca, formData.placa) {


            addFrota(formData.model, formData.code, formData.marca, formData.placa, formData.km, formData.chassi, formData.combustivel, formData.ano, formData.nmotor, formData.tipo)

            //setMotorista([...motorista, formData]);
            AlertToast('Dados Salvos!', 'success')



        } else {
            return AlertToast('Dados inválidos para salvar!', 'info')


        }





        setForm({ //Zerando variaveis do formulario
            id: "",
            model: "",
            code: "",
            icon: "",
            marca: "",
            placa: "",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "",
        })
        setShowNew(!showNew) //fechando modal



    }


    function closeModal() {

        setForm({ //Zerando variaveis do formulario
            id: "",
            model: "",
            code: "",
            icon: "",
            marca: "",
            placa: "",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "",

        })
        setShowNew(!showNew) //fechando modal

    }





    return (
        <Modal className='modal-lg' show={showNew} onHide={() => setShowNew(!showNew)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-plus fs-3 text-white me-2"></i>
                    Nova Multa
                    <i className="fe fe-dollar-sign fs-3 text-white ms-2"></i>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  >


                <form >

                    <div className="row">

                        <div className="d-flex justify-content-center mb-3 ">
                            <div className="icon-shape">
                                <div className='d-flex flex-column'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <Image className="m-3" src='/images/frota/multa.png' height={60} width={60} alt="" />
                                        <label className='bg-primary' style={{ borderRadius: '5px', color: '#fff', cursor: 'pointer', margin: '10px', padding: '6px' }} htmlFor="customFile">Selecione uma foto &#187;</label>
                                        <input style={{ display: 'none' }} id='customFile' type='file' />

                                    </div>


                                </div>
                            </div>
                        </div>



                    </div>




                    <div className="row">

                        <div className="col-md-6">
                            <label className="col-form-label">Condutor:</label>
                            <select name="combustivel" className="form-control" id="status-select" value={formData?.combustivel} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {sorteMotorista.map((item, index) => (
                                    <option key={index} value={item.nome}>{item.nome}</option>


                                ))}

                            </select>
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Data:</label>
                            <input type="date" name="code" className="form-control" required value={formData?.code} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Hora:</label>
                            <input type="time" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>

                    </div>



                    <div className="row">

                        <div className="col-md-12 me-auto">
                            <label className="col-form-label">Descrição da Multa:</label>
                            <input type="text" name="placa" className="form-control" required value={formData?.placa} onChange={(e) => handleInputChange(e)} />
                        </div>



                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <label className="col-form-label">Local:</label>
                            <input type="text" name="nmotor" className="form-control" value={formData?.nmotor} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Justificativa:</label>
                            <input type="text" name="ano" className="form-control" value={formData?.ano} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>




                    <div className="row">


                        <div className="col-md-6">
                            <label className="col-form-label">Veiculo:</label>

                            <select name="combustivel" className="form-control" id="status-select" value={formData?.combustivel} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>
                                {sorteFrota.map((item, index) => (

                                    <option key={index} value={item.model}>{item.code} - {item.model} - {item.marca} - ({item.placa})</option>


                                ))}

                            </select>
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Valor:</label>
                            <input type="text" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Pagamento:</label>

                            <select name="combustivel" className="form-control" id="status-select" value={formData?.combustivel} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione...</option>
                                {formaPagamento.map((item, index) => (

                                    <option key={index} value={item}>{item}</option>


                                ))}

                            </select>
                        </div>

                    </div>



                    <div className="row">

                        <div className="col-md-4">
                            <label className="col-form-label">Pagamento pela Empresa:</label>
                            <input type="text" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Pagamento pelo Motorista:</label>
                            <input type="text" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Pontos:</label>
                            <input type="number" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>





                </form>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => newFrota()}>
                    Salvar
                </Button>
            </Modal.Footer>

        </Modal>
    )

}

export default modalFeetNew