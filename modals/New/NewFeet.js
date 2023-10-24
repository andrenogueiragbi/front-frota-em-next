
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import AlertToast from 'widgets/Alert/Alert';
import { DataContext } from 'hooks/DataFake';




const modalFeetNew = ({ showNew, setShowNew }) => {

    const { addFrota } = useContext(DataContext);

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

            alert(formData.tipo, formData.placa)

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
        <Modal className='modal-xl' show={showNew} onHide={() => setShowNew(!showNew)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title>Novo Motorista</Modal.Title>
            </Modal.Header>
            <Modal.Body  >

                <form >

                    <div className="row">

                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Modelo:</label>
                            <input type="text" name="model" className="form-control" required value={formData?.model} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Codigo:</label>
                            <input type="text" name="code" className="form-control" required value={formData?.code} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Marca:</label>
                            <input type="text" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>

                    <div className="row">

                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Placa:</label>
                            <input type="text" name="placa" className="form-control" required value={formData?.placa} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">chassi:</label>
                            <input type="text" name="chassi" className="form-control" value={formData?.chassi} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Combustivel:</label>
                            <input type="text" name="combustivel" className="form-control" value={formData?.combustivel} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>


                    <div className="row">

                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Ano:</label>
                            <input type="text" name="ano" className="form-control" value={formData?.ano} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Nº Motor:</label>
                            <input type="text" name="nmotor" className="form-control" value={formData?.nmotor} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Tipo:</label>
                            <input type="text" name="tipo" className="form-control" value={formData?.tipo} onChange={(e) => handleInputChange(e)} />
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