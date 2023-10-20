// import node module libraries
import Link from 'next/link';
import {  Col, Row, Card, Table, Image, Form } from 'react-bootstrap';

// import required data files
import DataDriver from "data/dashboard/DataDriver";

const listDriver = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <Form className="d-flex align-items-center col-md-3 ">
                            <Form.Control type="search" placeholder="Search" />
                        </Form>
                    </Card.Header>


                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Cargo</th>
                                <th>Categoria</th>
                                <th>Vencimento CNH</th>
                                <th>Acões</th>
                            </tr>
                        </thead>

                        <tbody>
                            {DataDriver.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.id}</td>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div>

                                                    <div className="d-flex justify-content-between align-items-center">

                                                        <Image src={`${item.foto}`} className="rounded-circle avatar-md" alt="" />

                                                    </div>

                                                </div>
                                                <div className="ms-3 lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.name}</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.cargo}</td>

                                        <td className="align-middle"><span className={`badge bg-${item.categoria.toUpperCase() == 'A' ? 'primary' : item.categoria.toUpperCase() == 'AB' ? 'success' : item.categoria.toUpperCase() == 'C' ? 'danger' : item.categoria.toUpperCase() == 'D' ? 'warning' : 'info'}`}>{item.categoria}</span></td>
                                        <td className="align-middle">{item.date_cnh}</td>

                                        {/* icons */}
                                        <td className="align-middle">

                                            <a class="badge bg-danger m-2" onClick={() => console.log('inativar motorista')} href="#"><i className="m-1 fe fe-x-square text-white  fs-3" title='Inativar'></i></a>
                                            <a class="badge bg-info m-2" onClick={() => console.log('editar mototista')} href="#"><i className="m-1 fe fe-edit-2 text-white  fs-3" title='Editar'></i></a>


                                        </td>



                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Projects</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default listDriver