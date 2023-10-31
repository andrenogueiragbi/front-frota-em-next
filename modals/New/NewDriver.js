
import { Modal, Button, Image } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import AlertToast from 'widgets/Alert/Alert';
import { toast } from 'react-toastify';





const modalDriverNew = ({ showNew, setShowNew }) => {

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [ufIBGE, setUfIBGE] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const selectedFileName = event.target.files[0].name;
        document.getElementById('selectedFileName').textContent = selectedFileName;
        setSelectedAvatar(URL.createObjectURL(file))
        setSelectedImage(file);
    };



    useEffect(() => {

        async function searchIBGE() {
            const options = { method: 'GET' };
            fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', options)
                .then(response => response.json())
                .then(response => setStates(response))
                .catch(err => console.error(err));


        }

        searchIBGE()


    }, [])


    useEffect(() => {

        async function searchIBGE() {

            if (ufIBGE) {

                const options = { method: 'GET' };
                await toast.promise(
                    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufIBGE}/municipios`, options)
                        .then(response => response.json())
                        .then(response => setCities(response))
                        .catch(err => console.error(err)),
                    {
                        pending: `Buscando cidades ${ufIBGE}`,
                        error: 'Falha na API do IBGE em busca cidades'

                    }
                )
            }

        }

        searchIBGE()


    }, [ufIBGE])




    const [formData, setForm] = useState({

        name: "",
        cpf: "",
        rg: "",
        workload: "",
        supervisor: "",
        cnh_number: "",
        cnh_category: "",
        cnh_expiration: "",
        address: "",
        neighborhood: "",
        city: "",
        number_address: "",
        state: "",
        email: "",
        cell_phone: "",
        whatsapp: "",
        integration_code: "",
        image: "",

    });

    function handleInputChange(event) {

        const { name, value } = event.target;

        if (name === 'state') setUfIBGE(value)




        setForm({
            ...formData,
            [name]: value,

        });





    };

    async function newDriver() {

        const formDataToSend = new FormData();
        formDataToSend.append('avatar', selectedImage);
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }


        const options = {
            method: 'POST',
            body: formDataToSend,

        };

        await toast.promise(
            fetch(`https://api-frota.onrender.com/driver`, options)
                .then(response => response.json())
                .then(response => {
                    if (response.ok) {
                        AlertToast(response.message_pt, 'success')
                        setForm({ //Zerando variaveis do formulario
                            name: "",
                            cpf: "",
                            rg: "",
                            workload: "",
                            supervisor: "",
                            cnh_number: "",
                            cnh_category: "",
                            cnh_expiration: "",
                            address: "",
                            neighborhood: "",
                            city: "",
                            number_address: "",
                            state: "",
                            email: "",
                            cell_phone: "",
                            whatsapp: "",
                            integration_code: "",
                            image: "",

                        })
                        setShowNew(!showNew) //fechando modal


                    } else if (response.message_en === 'server error') {
                        AlertToast(`${response.message_pt} ou dados pertencente a outro motorista`, 'error')
                    } else {
                        AlertToast(response.message_pt, 'warn')
                    }
                })
                .catch(err => console.error(err)),
            {
                pending: `Salvado Motorista ${formData.name}`,
                error: 'Falha em salvar dados do motorista'

            }
        )





    }

    function closeModal() {
        setForm({ //Zerando variaveis do formulario
            name: "",
            cpf: "",
            rg: "",
            workload: "",
            supervisor: "",
            cnh_number: "",
            cnh_category: "",
            cnh_expiration: "",
            address: "",
            neighborhood: "",
            city: "",
            number_address: "",
            state: "",
            email: "",
            cell_phone: "",
            whatsapp: "",
            integration_code: "",
            image: "",
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



                <form >



                    <div className="d-flex justify-content-center mb-3 ">
                        <div className="icon-shape">
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image className="m-3 rounded-circle bg-light border border-3" src={selectedAvatar ? selectedAvatar : '/images/avatar/placeholder-user.jpg'} height={90} width={90} alt="" />
                                    <label className='bg-primary' style={{ borderRadius: '5px', color: '#fff', cursor: 'pointer', margin: '10px', padding: '6px' }} htmlFor="customFile">Selecione uma foto &#187;</label>
                                    <input name="image" id='customFile' type='file' onChange={handleImageChange} style={{ display: 'none' }} accept="image/*" />
                                    <p id="selectedFileName"></p>

                                </div>


                            </div>
                        </div>
                    </div>







                    <div className="row">

                        <div className="col-md-6 me-auto">
                            <label className="col-form-label">Nome:</label>
                            <input type="text" name="name" className="form-control" value={formData?.name} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">CPF:</label>
                            <input type="text" name="cpf" className="form-control" value={formData?.cpf} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">RG:</label>
                            <input type="text" name="rg" className="form-control" value={formData?.rg} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Cargo:</label>
                            <input type="text" name="workload" className="form-control" value={formData?.workload} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Supervisor:</label>
                            <input type="text" name="supervisor" className="form-control" value={formData?.supervisor} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Nº CNH:</label>
                            <input type="text" name="cnh_number" className="form-control" value={formData?.cnh_number} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-2">
                            <label className="col-form-label">Categoria:</label>
                            <select name="cnh_category" className="form-control" id="status-select" value={formData?.cnh_category} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {["A", "B", "C", "D", "E", "AB", "AC", "AD", "AE"].map((item, index) => (
                                    <option key={index} value={item}>{item}</option>


                                ))}

                            </select>
                        </div>




                        <div className="col-md-2">
                            <label className="col-form-label"  >Vencimento CNH:</label>
                            <input type="date" name="cnh_expiration" className="form-control" value={formData?.cnh_expiration} onChange={(e) => handleInputChange(e)} />
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <label className="col-form-label">Endereço:</label>
                            <input type="text" name="address" className="form-control" value={formData?.address} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Bairro:</label>
                            <input type="text" name="neighborhood" className="form-control" value={formData?.neighborhood} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-1">
                            <label className="col-form-label">Nº</label>
                            <input type="text" name="number_address" className="form-control" value={formData?.number_address} onChange={(e) => handleInputChange(e)} />
                        </div>


                        <div className="col-md-2">
                            <label className="col-form-label">UF:</label>
                            <select name="state" className="form-control" id="status-select" value={formData?.state} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {states.map((item, index) => (
                                    <option key={index} value={item.sigla}>{item.sigla}</option>


                                ))}

                            </select>
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Cidade:</label>
                            <select name="city" className="form-control" id="status-select" value={formData?.city} onChange={(e) => handleInputChange(e)} >
                                <option value="">Selecione uma opção</option>

                                {
                                    cities.map((item, index) => (
                                        <option key={index} value={item?.nome}>{item?.nome}</option>


                                    ))
                                }

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
                            <input type="text" name="cell_phone" className="form-control" value={formData?.cell_phone} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label className="col-form-label">Whatsapp:</label>
                            <input type="text" name="whatsapp" className="form-control" value={formData?.whatsapp} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-2">
                            <label className="col-form-label">Código Integração:</label>
                            <input type="text" name="integration_code" className="form-control" value={formData?.integration_code} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>



                </form>



            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => newDriver()}>
                    Salvar
                </Button>
            </Modal.Footer>

        </Modal>
    )

}

export default modalDriverNew