import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from 'hooks/DataFake';
import AlertToast from 'widgets/Alert/Alert';


const modalFeetEdit = ({ item, showEdit, setShowEdit }) => {

    const { updateFrota } = useContext(DataContext);

    const id = item.id

    const [formData, setForm] = useState({
        id: item.id,
        model: item.model,
        code: item.code,
        icon: item.icon,
        marca: item.marca,
        placa: item.placa,
        km: item.km,
        chassi: item.chassi,
        combustivel: item.combustivel,
        ano: item.ano,
        nmotor: item.nmotor,
        tipo: item.tipo,
        status:item.status,
    });


    function handleInputChange(event) {
        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };

    function editFeet() {

        AlertToast('Dados atualizados!', 'success')
        updateFrota(id, formData)
        setShowEdit(!showEdit)

    }





    return (



        <Modal className='modal-xl' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-white fs-4 text-wrap'>Editar Frota</Modal.Title>
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

                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Modelo:</label>
                            <input type="text" name="model" className="form-control" value={formData?.model} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Codigo:</label>
                            <input type="text" name="code" className="form-control" value={formData?.code} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Marca:</label>
                            <input type="text" name="marca" className="form-control" value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>

                    <div className="row">

                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Placa:</label>
                            <input type="text" name="placa" className="form-control" value={formData?.placa} onChange={(e) => handleInputChange(e)} />
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
                <Button variant="secondary" onClick={() => setShowEdit(!showEdit)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => editFeet()}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>

        </Modal>





    )

}

export default modalFeetEdit