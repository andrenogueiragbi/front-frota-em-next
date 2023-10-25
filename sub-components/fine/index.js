// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';

const CurrentPlan = () => {
    const [modalShow, setModalShow] = useState(false);

    const ChangePlanModal = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Your Plan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-5">
                    <h4 className="mb-1">Change your plan</h4>
                    <p>You can choose from one of the available plans bellow.</p>
                    <Card className="border shadow-none">
                        <Card.Body className="border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Form.Check id="plan1">
                                        <Form.Check.Input type="radio" name="plan" />
                                        <Form.Check.Label>
                                            <span className="d-block text-dark fw-bold">Standard <Badge bg="success"> Active Plan</Badge></span>
                                            <span className="mb-0 small text-muted">Single Site</span>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 text-dark">$49.00</h4>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Form.Check id="plan2" >
                                        <Form.Check.Input type="radio" name="plan" />
                                        <Form.Check.Label>
                                            <span className="d-block text-dark fw-bold">Multiside</span>
                                            <span className="mb-0 small text-muted">Unlimited Site</span>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 text-dark">$149.00</h4>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Form.Check id="plan3">
                                        <Form.Check.Input type="radio" name="plan" />
                                        <Form.Check.Label>
                                            <span className="d-block text-dark fw-bold">Extended</span>
                                            <span className="mb-0 small text-muted">For spanaying users</span>
                                        </Form.Check.Label>
                                    </Form.Check>

                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 text-dark">$449.00</h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer className="justify-content-start p-5">
                    <Button>Save and Continue</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Col xs={12} className="mb-6 ">
            <Card className="border border-1 border-primary" >
                {/* card header  */}
                <Card.Header className="p-4 bg-white">
                    <h4 className="mb-0">Condutor: André Pereira Nogueira</h4>
                </Card.Header>
                {/* card body  */}
                <Card.Body>
                    <Row className="row">
                        <Col xl={8} lg={6} md={12} xs={12}>
                            <div className="mb-2">
                                <h3 className="mt-2 mb-3 fw-bold">01 Jan 2021 as 08:00 </h3>
                                <h3 className="mt-2 mb-3 fw-bold">Fazer ultrapassagem em faixa de mão dupla.</h3>


                                <p>
                                    Local: <span className="text-primary">BR 030 saida para Caetité</span>
                                </p>
                                <p>
                                    Justificativa: <span className="text-primary">Rede caetite parada geral</span>
                                </p>

                                <h3 className='d-flex align-items-center'>
                                    Placa:
                                    <div style={{ background: '#E8E9EA' }} className='border border-black rounded text-center w-30 ms-3'>
                                        <div style={{ fontSize: '8px' }} className="bg-primary d-flex justify-content-between align-items-center">

                                            <Image className="ms-1" src={`/images/frota/mercosul.png`} height={8} width={12} alt="" />
                                            <span className='text-white'>BRASIL</span>
                                            <Image className="me-1" src={`/images/frota/brasil.png`} height={7} width={11} alt="" />

                                        </div>
                                        <div className="mt-1 ms-2 me-2 fw-bold text-black">{'AAA-BCBC'}</div>
                                    </div>

                                </h3>


                            </div>
                        </Col>
                        <Col xl={4} lg={6} md={12} xs={12}>
                            <div>
                                <small className="text-muted">
                                    Valor da multa R$:
                                </small>
                                <h1 className="fw-bold text-primary">2.699,00</h1>
                                <Link href="#" className="mb-3 text-muted text-primary-hover d-block">Pagamento: <span className="text-primary">3 vezes</span></Link>



                                <p>
                                    <i className="fe fe-info fs-4 me-2 text-muted icon-xs"></i>
                                    Divisão de custos

                                </p>
                                <p>

                                    Empresa: <span className="text-primary">R$ 2.699.00</span>

                                </p>
                                <p>
                                    Motorista: <span className="text-primary">R$ 0.00</span>
                                </p>



                                <ChangePlanModal show={modalShow} onHide={() => setModalShow(false)} />

                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                {/* card footer  */}
                <Card.Footer className="bg-white">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-lg-0 text-center text-sm-start">
                            <h5 className="text-uppercase mb-0">Veiculo:</h5>
                            <div className="mt-2">
                                <span className="fw-bold">Hunday GB20 - C12</span>
                            </div>
                        </div>
                        <div className="text-center text-md-start">
                            <Link href="#" className="link-danger">Apagar</Link>
                            <Button className="btn ms-2" onClick={() => setModalShow(true)}>
                                Editar
                            </Button>

                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default CurrentPlan