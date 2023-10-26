import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from 'hooks/DataFake';
import AlertToast from 'widgets/Alert/Alert';

export function year() {
    const dataAtual = new Date();
    const anoAtual = parseInt(dataAtual.getFullYear());
    const anostart = parseInt(dataAtual.getFullYear()) - 35;
    const arrayYear = []

    for (let i = anoAtual + 1; i >= anostart; i--) {
        arrayYear.push(i)

    }

    return arrayYear

}





const modalFineEdit = ({ item, showEdit, setShowEdit,setUfIBGE,cities,states }) => {

    const { addFrota, sorteMotorista, sorteFrota, addMulta, updateMulta } = useContext(DataContext);
    const formaPagamento = ['Avista', '2 vezes', '3 vezes', '4 vezes', '5 vezes', '6 vezes', '8 vezes', '9 vezes', '10 vezes', '11 vezes', '12 vezes']

    const id = item.id

    const [formData, setForm] = useState({
        motorista_id: item.motorista_id,
        veiculo_id: item.veiculo_id,
        data: item.data,
        hora: item.hora,
        tipo: item.tipo,
        local: item.local,
        justificativa: item.justificativa,
        placa: item.placa,
        valor: item.valor,
        pagamento: item.pagamento,
        p_empresa: item.p_empresa,
        p_motorista: item.p_motorista,
        pontos: item.pontos,
    });


    function handleInputChange(event) {
        const { name, value } = event.target;

        if (name === 'uf') setUfIBGE(value)

        setForm({
            ...formData,
            [name]: value,

        });

    };


    function editFine() {

        AlertToast('Dados atualizados com sucesso!', 'info', 2000)
        updateMulta(id, formData)
        setShowEdit(!showEdit)

    }





    return (



        <Modal className='modal-lg' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-plus fs-3 text-white me-2"></i>
                    Editar Multa
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

                        <div className="col-md-8 me-auto">
                            <label className="col-form-label">Descrição da Multa:</label>
                            <input type="text" name="tipo" className="form-control" required value={formData?.tipo} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-4">
                            <label className="col-form-label">Local:</label>
                            <input type="text" name="local" className="form-control" value={formData?.local} onChange={(e) => handleInputChange(e)} />
                        </div>



                    </div>

                    <div className="row">

                        <div className="col-md-2">
                            <label className="col-form-label">UF:</label>
                            <select name="uf" className="form-control" id="status-select" value={formData?.uf} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {states.map((item, index) => (
                                    <option key={index} value={item.sigla}>{item.sigla}</option>


                                ))}

                            </select>
                        </div>


                        <div className="col-md-4">
                            <label className="col-form-label">Cidade:</label>
                            <select name="cidade" className="form-control" id="status-select" value={formData?.cidade} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {
                                    cities.map((item, index) => (
                                        <option key={index} value={item?.nome}>{item?.nome}</option>


                                    ))
                                }

                            </select>
                        </div>


                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Justificativa:</label>
                            <input type="text" name="justificativa" className="form-control" value={formData?.justificativa} onChange={(e) => handleInputChange(e)} />
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
                <Button variant="secondary" onClick={() => setShowEdit(!showEdit)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => editFine()}>
                    Salvar
                </Button>
            </Modal.Footer>

        </Modal>





    )

}

export default modalFineEdit