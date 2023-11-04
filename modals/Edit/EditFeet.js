import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from 'hooks/DataFake';
import AlertToast from 'widgets/Alert/Alert';
import { toast } from 'react-toastify';


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




const modalFeetEdit = ({ item, showEdit, setShowEdit ,isEdit, setIsEdit}) => {

    const { updateFrota } = useContext(DataContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const id = item.id


    const [formData, setForm] = useState({
        active: item.active,
        model: item.model,
        code: item.code,
        plate: item.plate,
        chassi: item.chassi,
        engine_number: item.engine_number,
        year: item.year,
        fuel: item.fuel,
        brand: item.brand,
        type: item.type,
        km: item.km,

    });


    function handleInputChange(event) {
        const { name, value } = event.target;

        setForm({
            ...formData,
            [name]: value,

        });

    };

    async function editFeet() {
        const formDataToSend = new FormData();

        if (selectedImage) {
            formDataToSend.append('image', selectedImage);
        }

        if(formData.km < item.km){
            alert(`${formData.km < item.km} ${formData.km} < ${item.km}`)
            return AlertToast(`O km novo não pode ser menor do que o valor antivo!`, 'warn')
        }

        for (const key in formData) {
            console.log(key,formData[key])

            if (!formData[key] && key !== 'km' &&  key !== 'active' && key !== 'chassi' && key !== 'engine_number') return AlertToast(`Prencha todos os campos requeridos!`, 'warn')
            formDataToSend.append(key, formData[key]);
        }

        const options = {
            method: 'PUT',
            body: formDataToSend,

        };

        await toast.promise(
            fetch(`https://api-frota.onrender.com/fleet/${id}`, options)
                .then(response => response.json())
                .then(response => {
                    if (response.ok) {


                        AlertToast(response.message_pt, 'success')
                        setIsEdit(!isEdit)
                        setShowEdit(!showEdit)


                    } else if (response.message_en === 'server error') {

                        AlertToast(`${response.message_pt} ou dados pertencente a outro motorista`, 'error')

                    } else {

                        AlertToast(response.message_pt, 'warn')
                    }
                })
                .catch(err => console.error(err)),
            {
                pending: `Salvado Frota ${formData.model}`,
                error: 'Falha em salvar dados da frota'

            })




    }

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        const selectedFileName = event.target.files[0].name;
        document.getElementById('selectedFileName').textContent = selectedFileName;
        setSelectedAvatar(URL.createObjectURL(file))
        setSelectedImage(file);
    };






    return (



        <Modal className='modal-lg' show={showEdit} onHide={() => setShowEdit(!showEdit)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title className='text-center d-flex align-items-center  text-white' title='Nova Frota'>
                    <i className="fe fe-file-text fs-3 text-white me-2"></i>
                    Editar Frota
                    <i className="fe fe-truck fs-3 text-white ms-2"></i>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  >



                <form >


                    <div className="d-flex justify-content-center mb-3 ">
                        <div className="icon-shape">
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image className="m-3" src={selectedAvatar ? selectedAvatar : item.image ? item.image : '/images/avatar/placeholder-car2.png'} height={50} width={90} alt="" />
                                    <label className='bg-primary' style={{ borderRadius: '5px', color: '#fff', cursor: 'pointer', margin: '10px', padding: '6px' }} htmlFor="customFile">Selecione uma foto &#187;</label>
                                    <input name="image" id='customFile' type='file' onChange={handleImageChange} style={{ display: 'none' }} accept="image/*" />
                                    <p id="selectedFileName"></p>

                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="icon-shape">
                            <div className='d-flex flex-column'>
                                <div className="input-group col-md-8 align-items-center">
                                    <label className="form-check-label me-2 fs-3" htmlFor="inativo">{formData.active ? 'Inativar' : 'Inativo'}</label>

                                    <div className="form-check form-switch ">
                                        <input className={`form-check-input ${formData.active ? 'bg-success' : ''} p-3`} type="checkbox" id="inativo" style={{ 'width': '55px', 'height': '20px' }} checked={formData.active} onChange={() => setForm({
                                            ...formData,
                                            active: !formData.active,

                                        })} />
                                    </div>
                                    <label className="form-check-label ms-2 fs-3" htmlFor="inativo">{formData.active ? 'Ativo' : 'Ativar'}</label>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Modelo:</label>
                            <input type="text" name="model" className="form-control" required value={formData?.model} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Codigo:</label>
                            <input type="text" name="code" className="form-control" required value={formData?.code} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-4 me-auto">
                            <label className="col-form-label">Placa:</label>
                            <input type="text" name="plate" className="form-control" required value={formData?.plate} onChange={(e) => handleInputChange(e)} />
                        </div>

                    </div>



                    <div className="row">



                        <div className="col-md-4">
                            <label className="col-form-label">Chassi:</label>
                            <input type="text" name="chassi" className="form-control" value={formData?.chassi} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">Nº Motor:</label>
                            <input type="text" name="engine_number" className="form-control" value={formData?.engine_number} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-4">
                            <label className="col-form-label">Ano:</label>
                            <select name="year" className="form-control" id="status-select" value={formData?.year} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {year().map((item, index) => (

                                    <option key={index} value={item}>{item}</option>


                                ))}

                            </select>
                        </div>

                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Combustível:</label>
                            <select name="fuel" className="form-control" id="status-select" value={formData?.fuel} onChange={(e) => handleInputChange(e)} >
                                <option value={formData?.fuel}>{formData?.fuel}</option>
                                <option value="Álcool">Álcool</option>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Flex">Flex</option>
                                <option value="GNV">GNV</option>
                            </select>
                        </div>


                        <div className="col-md-3">
                            <label className="col-form-label">Marca:</label>
                            <input type="text" name="brand" className="form-control" required value={formData?.brand} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Tipo:</label>
                            <select name="type" className="form-control" id="status-select" value={formData?.type} onChange={(e) => handleInputChange(e)} >
                                <option value={formData?.type}>{formData?.type}</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Hatch">Hatch</option>
                                <option value="Picape">Picape</option>
                                <option value="SUV">SUV</option>
                                <option value="Motocicleta">Motocicleta</option>
                                <option value="Sidecar">Sidecar</option>
                                <option value="Bicicleta">Bicicleta</option>

                            </select>
                        </div>


                        <div className="col-md-3 me-auto">
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