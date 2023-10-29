'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react'
import { NewDriver } from 'modals'
import { DataContext } from 'hooks/DataFake';
import { toast } from 'react-toastify';




// import sub components
import { ListDriver } from "sub-components";
import { Col, Row, Container } from 'react-bootstrap';


const Driver = () => {

    const [showNew, setShowNew] = useState(false)
    const { sorteMotorista } = useContext(DataContext);

    const [driver, setDiver] = useState()



    useEffect(() => {

        async function searchMotorista() {

            const options = { method: 'GET' };
            await toast.promise(
                fetch(`https://api-frota.onrender.com/driver`, options)
                    .then(response => response.json())
                    .then(response => setDiver(response.drivers))
                    .catch(err => console.error(err)),
                {
                    pending: `Buscando Motoristas`,
                    error: 'Falha na API de buscar motoristas'

                }
            );

        }

        searchMotorista()


    }, [])




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
                <ListDriver
                    motorista={sorteMotorista}
                    driver={driver}

                />



            </Container>
            {/* MODAL EDIT*/}

            {showNew && <NewDriver showNew={showNew} setShowNew={setShowNew} />}


        </Fragment>
    )
}
export default Driver;
