
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { multisite } from 'data/pricing/PricingPlansData';



const modalDriverNew = ({ showNew, setShowNew, motorista, setMotorista }) => {

    const [formData, setForm] = useState({
        id: "3",
        nome: "",
        CPF: "",
        RG: "",
        cargo: "",
        supervidor: "",
        ncnh: "",
        categoria: "",
        vencimento: "",
        endereco: "",
        bairro: "",
        cidadde: "",
        n: "",
        uf: "",
        email: "",
        celular: "",
        foto: "",
        whatsapp: "",
        foto: "https://i.pravatar.cc/150?img=1",
    });

    function handleInputChange(event) {

        const { name, value } = event.target;
        setForm({
            ...formData,
            [name]: value,


        });

    };



    function newMotor() {

        let n = Math.floor(Math.random() * (70 - 3 + 1) + 3)


        setForm({
            ...formData,
            id: n,
            foto: 'https://i.pravatar.cc/150?img=' + n,


        });

        setMotorista([...motorista, formData]);
        setForm({
            id: "3",
            nome: "",
            CPF: "",
            RG: "",
            cargo: "",
            supervidor: "",
            ncnh: "",
            categoria: "",
            vencimento: "",
            endereco: "",
            bairro: "",
            cidadde: "",
            n: "",
            uf: "",
            email: "",
            celular: "",
            foto: "",
            whatsapp: "",
            foto: "https://i.pravatar.cc/150?img=1",
        })
        setShowNew(!showNew)



    }





    return (
        <Modal className='modal-xl' show={showNew} onHide={() => setShowNew(!showNew)} >
            <Modal.Header className='bg-secondary' closeButton>
                <Modal.Title>Novo Motorista</Modal.Title>
            </Modal.Header>
            <Modal.Body  >

                <form >

                    <div className="row">

                        <div className="col-md-6 me-auto">
                            <label for="recipient-name" className="col-form-label">Nome:</label>
                            <input type="text" name="nome" className="form-control" id="recipient-name" value={formData.nome} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">CPF:</label>
                            <input type="text" name="CPF" className="form-control" id="recipient-cpf" value={formData.CPF} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-rg" className="col-form-label">RG:</label>
                            <input type="text" name="RG" className="form-control" id="recipient-rg" value={formData.RG} onChange={(e) => handleInputChange(e)} />
                        </div>


                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Cargo:</label>
                            <input type="text" name="cargo" className="form-control" id="recipient-cpf" value={formData.cargo} onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-rg" className="col-form-label">Supervisor:</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>

                        <div className="col-md-2">
                            <label for="recipient-cpf" className="col-form-label">Nº CNH:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-2">
                            <label for="recipient-rg" className="col-form-label">Categoria:</label>
                            <input type="text" name="categoria" className="form-control" id="recipient-rg" value={formData.categoria} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className="col-md-2">
                            <label for="recipient-rg" className="col-form-label" value={formData.vencimento} onChange={(e) => handleInputChange(e)} >Vencimento CNH:</label>
                            <input type="date" name="vencimento" className="form-control" id="recipient-rg" />
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Endereço:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-rg" className="col-form-label">Bairro:</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Cidade</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-1">
                            <label for="recipient-rg" className="col-form-label">Nº</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>
                        <div className="col-md-2">
                            <label for="recipient-rg" className="col-form-label">UF</label>
                            <input type="text" className="form-control" id="recipient-rg" />
                        </div>



                    </div>


                    <div className="row">

                        <div className="col-md-4">
                            <label for="recipient-cpf" className="col-form-label">Email:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Celular:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-3">
                            <label for="recipient-cpf" className="col-form-label">Whatsapp:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>

                        <div className="col-md-2">
                            <label for="recipient-cpf" className="col-form-label">Código Integração:</label>
                            <input type="text" className="form-control" id="recipient-cpf" />
                        </div>


                    </div>


                </form>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowNew(!showNew)}>
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