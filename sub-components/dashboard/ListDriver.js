// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Table, Image, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react'
import moment from 'moment'

import { EditDriver } from 'modals'


import AlertToast from 'widgets/Alert/Alert'
import { DataContext } from 'hooks/DataFake';


function LineTr({ item }) {
    const [showEdit, setShowEdit] = useState(false)

    const { deleteMotorista } = useContext(DataContext);





    function deleteDriver(id, nome) {
        AlertToast(`ID: ${id}, ${nome} apagado!`, 'error')
        deleteMotorista(id)

    }




    return (
        <tr key={item.id}>
            <td className="align-middle">
                <div className="d-flex align-items-center">
                    <div>

                        <div className="d-flex justify-content-between align-items-center">

                            <Image src={item.foto ? `${item.foto}` : '/images/avatar/motorista4.png'} className="rounded-circle avatar-md" alt="" />

                        </div>

                    </div>
                    <div className="ms-3 lh-1">
                        <h5 className=" mb-1">
                            <Link href="#" className="text-inherit">{item.name}</Link></h5>
                    </div>
                </div>
            </td>
            <td className="align-middle">{item.workload}</td>

            <td className="align-middle"><span className={`badge bg-${item.cnh_category.toUpperCase() == 'A' ? 'primary' : item.cnh_category.toUpperCase() == 'AB' ? 'success' : item.cnh_category.toUpperCase() == 'C' ? 'danger' : item.cnh_category.toUpperCase() == 'D' ? 'warning' : 'info'}`}>{item.cnh_category}</span></td>
            <td className="align-middle">{moment(item.cnh_expiration, 'YYYY-MM-DD').format('DD/MM/YYYY')}</td>

            {/* icons */}



            <td className="align-middle">
                <div className="d-flex align-items-center">
                    <button className="bg-transparent border border-danger border-2 p-1 m-1 rounded-2 d-flex justify-content-center align-items-center" onClick={() => deleteDriver(item.id, item.nome)} ><i className="fe fe-x fs-3 text-danger" title='Inativar'></i></button>
                    <button className="bg-transparent border border-warning border-2 p-1 m-1 rounded-2 d-flex justify-content-center align-items-center" onClick={() => setShowEdit(!showEdit)} ><i className="fe fe-edit-3 fs-3 text-warning" title='Editar'></i></button>
{/*                     <EditDriver
                        item={item}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit}
                        ufIBGE={ufIBGE}
                        setUfIBGE={setUfIBGE}
                        cities={cities}
                        states={states}
                    /> */}

                </div>
            </td>


        </tr>

    )
}




const listDriver = ({ motorista, driver }) => {





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
                                <th>Nome</th>
                                <th>Cargo</th>
                                <th>Categoria</th>
                                <th>Vencimento CNH</th>
                                <th>Acões</th>
                            </tr>
                        </thead>

                        <tbody>
                            {driver?.map((item, index) => (
                                <LineTr
                                    key={index}
                                    item={item}

                                />

                            ))}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        {/*  <Link href="#" className="link-primary">View All Projects</Link> */}
                    </Card.Footer>
                </Card>
            </Col>



        </Row>
    )
}

export default listDriver