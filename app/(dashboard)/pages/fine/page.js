'use client'
// import node module libraries
import { Fragment, useContext, useState } from "react";
import Link from 'next/link';
import { Container, Col, Row, Card, Form, } from 'react-bootstrap';
import { FineCard } from 'sub-components'



// import sub components

import { DataContext } from 'hooks/DataFake';
import { NewFine } from 'modals'

const Home = () => {

    const { sorteMulta } = useContext(DataContext);
    const [showNew, setShowNew] = useState(false)



    return (
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6 mb-10">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Multas</h3>
                                </div>
                                <div>
                                    <Link onClick={() => setShowNew(!showNew)} href="#" className="btn btn-white">Cadastra Nova Multa</Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>

                {/* Active Projects  */}

                <Row className="mt-6">
                    <Col md={12} xs={12}>
                        <Card>
                            <Card.Header className="bg-white  py-4">
                                <Form className="d-flex align-items-center col-md-3 ">
                                    <Form.Control type="search" placeholder="Search" />
                                </Form>
                            </Card.Header>

                            <Container fluid className="p-6">
                                {/* Page Heading */}

                                <Row className="mt-6">
                                    <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }} md={12} xs={12}  >
                                        <Row>
                                           
     

                                            {sorteMulta.map((item, index) => (
                                                 <FineCard key={index} item={item} />

                                            ))}



                                        </Row>
                                    </Col>
                                </Row>
                            </Container>




                            <Card.Footer className="bg-white text-center">
                                {/*                                 <Link href="#" className="link-primary">View All Projects</Link>
 */}                            </Card.Footer>



                        </Card>
                    </Col>
                </Row>



            </Container>
            <NewFine showNew={showNew} setShowNew={setShowNew} />


        </Fragment>
    )
}
export default Home;
