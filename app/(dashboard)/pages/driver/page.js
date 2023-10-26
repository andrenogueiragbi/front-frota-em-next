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

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [ufIBGE, setUfIBGE] = useState(null)


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
            );






        }

        searchIBGE()


    }, [ufIBGE])








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
                    ufIBGE={ufIBGE}
                    setUfIBGE={setUfIBGE}
                    cities={cities}
                    states={states}

                />



            </Container>
            {/* MODAL EDIT*/}

            <NewDriver
                states={states}
                showNew={showNew}
                setShowNew={setShowNew}
                ufIBGE={ufIBGE}
                setUfIBGE={setUfIBGE}
                cities={cities}

            />


        </Fragment>
    )
}
export default Driver;
