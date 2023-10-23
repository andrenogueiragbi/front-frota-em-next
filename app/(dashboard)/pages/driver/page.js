'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { NewDriver } from 'modals'
import DataMotorista from "data/dashboard/DataMotorista";



// import sub components
import { ListDriver } from "sub-components";

import { Col, Row, Container, Alert } from 'react-bootstrap';


const Driver = () => {

    const [showNew, setShowNew] = useState(false)
    const [motorista, setMotorista] = useState(DataMotorista)


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
                                    <h3 className="mb-0  text-white">Moristas</h3>
                                </div>
                                <div>
                                    <Link onClick={() => setShowNew(!showNew)} href="#" className="btn btn-white">Criar Novo Motorista</Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>

                {/* Active Projects  */}
                <ListDriver motorista={motorista} />



            </Container>
            {/* MODAL EDIT*/}

            <NewDriver motorista={motorista} setMotorista={setMotorista} showNew={showNew} setShowNew={setShowNew} />


        </Fragment>
    )
}
export default Driver;
