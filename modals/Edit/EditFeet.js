import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from 'hooks/DataFake';
import AlertToast from 'widgets/Alert/Alert';

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
        status: item.status,
        km:item.km,
    });


    function handleInputChange(event) {
        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };

    function editFeet() {

        AlertToast('Dados atualizados com sucesso!', 'info',2000)
        updateFrota(id, formData)
        setShowEdit(!showEdit)

    }





    return (



        <Modal className='modal' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-text fs-3 text-white me-2"></i>
                    Editar Frota
                    <i className="fe fe-truck fs-3 text-white ms-2"></i>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  >



                <form >

                    <div className="row">

                        <div className="d-flex justify-content-center mb-3 ">
                            <div className="icon-shape">
                                <div className='d-flex flex-column'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <Image className="m-3" src={item.icon} height={50} width={90} alt="" />
                                        <label className='bg-primary' style={{ borderRadius: '5px', color: '#fff', cursor: 'pointer', margin: '10px', padding: '6px' }} htmlFor="customFile">Selecione uma foto &#187;</label>
                                        <input style={{ display: 'none' }} id='customFile' type='file' />

                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="input-group col-md-6 me-auto ps-20 pe-20">
                            <label className="input-group-text">Status</label>
                            <select name="status" className="form-control custom-select " id="status-select" value={formData?.status} onChange={(e) => handleInputChange(e)}>
                                <option value="ATIVO">ATIVO</option>
                                <option value="INATIVO">INATIVO</option>
                            </select>
                        </div>







                        {/*                         <div className="col-md-6 me-auto  d-flex justify-content-center ">
                            <div className="icon-shape">
                                <div className='d-flex flex-column'>
                                    <Image onChange={handleFileChange} src={item.icon} height={50} width={90} alt="" />
                                    <input  type="file" />

                                </div>
                            </div>
                        </div>
 */}


                    </div>




                    <div className="row">

                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Modelo:</label>
                            <input type="text" name="model" className="form-control" required value={formData?.model} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-6">
                            <label className="col-form-label">Codigo:</label>
                            <input type="text" name="code" className="form-control" required value={formData?.code} onChange={(e) => handleInputChange(e)} />
                        </div>

                    </div>



                    <div className="row">

                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Placa:</label>
                            <input type="text" name="placa" className="form-control" required value={formData?.placa} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-6">
                            <label className="col-form-label">Chassi:</label>
                            <input type="text" name="chassi" className="form-control" value={formData?.chassi} onChange={(e) => handleInputChange(e)} />
                        </div>



                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <label className="col-form-label">Nº Motor:</label>
                            <input type="text" name="nmotor" className="form-control" value={formData?.nmotor} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-6">
                            <label className="col-form-label">Ano:</label>
                            <select name="ano" className="form-control" id="status-select" value={formData?.ano} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {year().map((item,index) => (

                                    <option key={index} value={item}>{item}</option>


                                ))}

                            </select>
                        </div>



                    </div>




                    <div className="row">


                        <div className="col-md-6">
                            <label className="col-form-label">Combustível:</label>
                            <select name="combustivel" className="form-control" id="status-select" value={formData?.combustivel} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>
                                <option value="Álcool">Álcool</option>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Flex">Flex</option>
                                <option value="GNV">GNV</option>
                            </select>
                        </div>


                        <div className="col-md-6">
                            <label className="col-form-label">Marca:</label>
                            <input type="text" name="marca" className="form-control" required value={formData?.marca} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>






                    <div className="row">

                        <div className="col-md-6">
                            <label className="col-form-label">Tipo:</label>
                            <select name="tipo" className="form-control" id="status-select" value={formData?.tipo} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Hatch">Hatch</option>
                                <option value="Picape">Picape</option>
                                <option value="SUV">SUV</option>
                                <option value="Motocicleta">Motocicleta</option>
                                <option value="Sidecar">Sidecar</option>
                                <option value="Bicicleta">Bicicleta</option>

                            </select>
                            {/*  <input type="text" name="tipo" className="form-control" value={formData?.tipo} onChange={(e) => handleInputChange(e)} /> */}
                        </div>


                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">KM:</label>
                            <input type="number" min={0} name="km" className="form-control" value={formData?.km} onChange={(e) => handleInputChange(e)} />
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