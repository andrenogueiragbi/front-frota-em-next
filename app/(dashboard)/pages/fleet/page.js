'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row, Card, Form, } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIconFeet } from "widgets";

// import sub components

// import required data files
import DataFleet from "data/dashboard/DataFleet";

const Home = () => {


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
                                    <h3 className="mb-0  text-white">Frota</h3>
                                </div>
                                <div>
                                    <Link href="#" className="btn btn-white">Criar Nova Frota</Link>
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



                            <Container className="mb-10 p-5" >
                                <Row>
                                    <Col lg={12} md={12} xs={12}>
                                        {/* Page header */}
                                        <div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="mb-2 mb-lg-0">
                                                    <h3 className="mb-0  text-white">Projects</h3>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    {DataFleet.map((item, index) => (

                                        <Col xl={4} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                            <StatRightTopIconFeet key={index} info={item} />
                                        </Col>

                                    ))}
                                </Row>


                            </Container>
                            <Card.Footer className="bg-white text-center">
                                {/*                                 <Link href="#" className="link-primary">View All Projects</Link>
 */}                            </Card.Footer>



                        </Card>
                    </Col>
                </Row>



            </Container>

        </Fragment>
    )
}
export default Home;
