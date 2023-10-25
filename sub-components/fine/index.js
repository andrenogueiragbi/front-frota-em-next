// import node module libraries
import Link from 'next/link';
import { useState, useContext } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';
import { DataContext } from 'hooks/DataFake';
import { EditFine } from 'modals'


const CurrentPlan = ({ item }) => {

    const { findMotorista, findFrota } = useContext(DataContext);
    const [showEdit, setShowEdit] = useState(false)



    return (
        <Col xs={12} className="mb-6 ">
            <Card className="border border-1 border-primary" >
                {/* card header  */}
                <Card.Header className="p-4 bg-white">
                    <h4 className="mb-0">Condutor: {findMotorista(item.motorista_id)?.nome}</h4>
                </Card.Header>
                {/* card body  */}
                <Card.Body>
                    <Row className="row">
                        <Col xl={8} lg={6} md={12} xs={12}>
                            <div className="mb-2">
                                <h3 className="mt-2 mb-3 fw-bold">{item.data} as {item.hora}</h3>
                                <h3 className="mt-2 mb-3 fw-bold">{item.tipo}</h3>


                                <p>
                                    Local: <span className="text-primary">{item.local}</span>
                                </p>
                                <p>
                                    Justificativa: <span className="text-primary">{item.justificativa}</span>
                                </p>

                                <h3 className='d-flex align-items-center'>
                                    Placa:
                                    <div style={{ background: '#E8E9EA' }} className='border border-black rounded text-center w-40 ms-3'>
                                        <div style={{ fontSize: '8px' }} className="bg-primary d-flex justify-content-between align-items-center">

                                            <Image className="ms-1" src={`/images/frota/mercosul.png`} height={8} width={12} alt="" />
                                            <span className='text-white'>BRASIL</span>
                                            <Image className="me-1" src={`/images/frota/brasil.png`} height={7} width={11} alt="" />

                                        </div>
                                        <div className="mt-1 fw-bold text-black">{findFrota(item.veiculo_id)?.placa}</div>
                                    </div>

                                </h3>


                            </div>
                        </Col>
                        <Col xl={4} lg={6} md={12} xs={12}>
                            <div>
                                <small className="text-muted">
                                    Valor da multa R$:
                                </small>
                                <h1 className="fw-bold text-primary">{item.valor}</h1>
                                <Link href="#" className="mb-3 text-muted text-primary-hover d-block">Pagamento: <span className="text-primary">{item.pagamento}</span></Link>



                                <p>
                                    <i className="fe fe-info fs-4 me-2 text-muted icon-xs"></i>
                                    Divisão de custos

                                </p>
                                <p>

                                    Empresa: <span className="text-primary">R$ {item.p_empresa}</span>

                                </p>
                                <p>
                                    Motorista: <span className="text-primary">R$ {item.p_motorista}</span>
                                </p>



                                <EditFine item={item} showEdit={showEdit} setShowEdit={setShowEdit} />

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
                                <span className="fw-bold">{`${findFrota(item.veiculo_id)?.marca} ${findFrota(item.veiculo_id)?.model} ${findFrota(item.veiculo_id)?.code}`}</span>
                            </div>
                        </div>
                        <div className="text-center text-md-start">
                            <Link href="#" className="link-danger">Apagar</Link>
                            <Button className="btn ms-2" onClick={() => setShowEdit(true)}>
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