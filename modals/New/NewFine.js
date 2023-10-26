
import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import AlertToast from 'widgets/Alert/Alert';
import { DataContext } from 'hooks/DataFake';


export function year() {
    const dataAtual = new Date();
    const anoAtual = parseInt(dataAtual.getFullYear());
    const anostart = parseInt(dataAtual.getFullYear()) - 35;
    const arrayYear = []

    for (let i = anoAtual+1; i >= anostart; i--) {
        arrayYear.push(i)

    }

    return arrayYear

}





const modalFeetNew = ({ showNew, setShowNew }) => {

    const { addFrota, sorteMotorista, sorteFrota,addMulta } = useContext(DataContext);
    const formaPagamento = ['Avista', '2 vezes', '3 vezes', '4 vezes', '5 vezes', '6 vezes', '8 vezes', '9 vezes', '10 vezes', '11 vezes', '12 vezes']

    const [formData, setForm] = useState({
        motorista_id: "",
        veiculo_id: "",
        data: "",
        hora: "",
        tipo:"",
        local: "",
        justificativa: "",
        placa: "",
        valor: "",
        pagamento: "",
        p_empresa: "",
        p_motorista: "",
        pontos: "",
    });



    function handleInputChange(event) {

        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };


    function newFrota() {

        if (formData.motorista_id && formData.tipo) {


            addMulta(formData.veiculo_id, formData.motorista_id, formData.data, formData.hora, formData.tipo, formData.local, formData.justificativa, formData.placa, formData.valor, formData.pagamento, formData.p_empresa, formData.p_motorista, formData.pontos)

            //setMotorista([...motorista, formData]);
            AlertToast('Dados cadastrados com sucesso!', 'success',2000)



        } else {
            return AlertToast('Atenção. Verique os campos requeridos!', 'warn')


        }





        setForm({ //Zerando variaveis do formulario
            motorista_id: "",
            veiculo_id: "",
            data: "",
            hora: "",
            tipo:"",
            local: "",
            justificativa: "",
            placa: "",
            valor: "",
            pagamento: "",
            p_empresa: "",
            p_motorista: "",
            pontos: "",
        })
        setShowNew(!showNew) //fechando modal



    }


    function closeModal() {

        setForm({ //Zerando variaveis do formulario
            motorista_id: "",
            veiculo_id: "",
            data: "",
            hora: "",
            tipo:"",
            local: "",
            justificativa: "",
            placa: "",
            valor: "",
            pagamento: "",
            p_empresa: "",
            p_motorista: "",
            pontos: "",
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
                            <select name="motorista_id" className="form-control" id="status-select" value={formData?.motorista_id} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {sorteMotorista.map((item, index) => (
                                    <option key={index} value={item.id}>{item.nome}</option>


                                ))}

                            </select>
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Data:</label>
                            <input type="date" name="data" className="form-control" required value={formData?.data} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Hora:</label>
                            <input type="time" name="hora" className="form-control" required value={formData?.hora} onChange={(e) => handleInputChange(e)} />
                        </div>

                    </div>



                    <div className="row">

                        <div className="col-md-12 me-auto">
                            <label className="col-form-label">Descrição da Multa:</label>
                            <input type="text" name="tipo" className="form-control" required value={formData?.tipo} onChange={(e) => handleInputChange(e)} />
                        </div>



                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <label className="col-form-label">Local:</label>
                            <input type="text" name="local" className="form-control" value={formData?.local} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Justificativa:</label>
                            <input type="text" name="justificativa" className="form-control" value={formData?.justificativa} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>




                    <div className="row">


                        <div className="col-md-6">
                            <label className="col-form-label">Veiculo:</label>

                            <select name="veiculo_id" className="form-control" id="status-select" value={formData?.veiculo_id} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>
                                {sorteFrota.map((item, index) => (

                                    <option  key={index} value={item.id}>{item.code} - {item.model} - {item.marca} - ({item.placa})</option>


                                ))}

                            </select>
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Valor:</label>
                            <input type="text" name="valor" className="form-control" required value={formData?.valor} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Pagamento:</label>

                            <select name="pagamento" className="form-control" id="status-select" value={formData?.pagamento} onChange={(e) => handleInputChange(e)} >
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
                            <input type="text" name="p_empresa" className="form-control" required value={formData?.p_empresa} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Pagamento pelo Motorista:</label>
                            <input type="text" name="p_motorista" className="form-control" required value={formData?.p_motorista} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Pontos:</label>
                            <input type="number" name="pontos" className="form-control" required value={formData?.pontos} onChange={(e) => handleInputChange(e)} />
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