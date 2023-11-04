'use client'
// import node module libraries
import { Fragment, useContext, useState, useEffect } from "react";
import Link from 'next/link';
import { Container, Col, Row, Card, Form, } from 'react-bootstrap';
import { toast } from 'react-toastify';


// import widget/custom components
import { StatRightTopIconFeet } from "widgets";

// import sub components


import { DataContext } from 'hooks/DataFake';
import { NewFeet } from 'modals'

const Home = () => {

    const [fleet, setFleet] = useState()
    const { sorteFrota } = useContext(DataContext);
    const [showNew, setShowNew] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState(true)





    useEffect(() => {

        async function searchFleet() {

            const options = { method: 'GET' };

            await toast.promise(
                fetch(`https://api-frota.onrender.com/fleet?search=${search}&status=${status}`, options)
                    .then(response => response.json())
                    .then(response => setFleet(response))
                    .catch(err => console.error(err)),
                {
                    /*  pending: `Buscando frota`, */
                    error: 'Falha na API de buscar frota'

                }
            );

        }

        console.log(fleet)

        searchFleet()

    }, [isEdit, isNew, search,status])

    function handerSearch(e) {
        setSearch(e.target.value)
    
    }




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
                                    <Link onClick={() => setShowNew(!showNew)} href="#" className="btn btn-white">Criar Nova Frota</Link>
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
                                <Form className="d-flex justify-content-between align-items-md-center">

                                    <Form.Control style={{ 'width': '25%' }} type="search" placeholder="Search" value={search} onChange={handerSearch} />
                                    <div className="d-flex gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="radioGroup"
                                                id="exampleRadios1"
                                                value="ativos"
                                                checked={status === true} // Verifica se o estado é verdadeiro para marcar este radio button
                                                onChange={() => setStatus(true)}
                                            />
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Ativos
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="radioGroup"
                                                id="exampleRadios2"
                                                value="inativos"
                                                checked={status === false} // Verifica se o estado é falso para marcar este radio button
                                                onChange={() => setStatus(false)}
                                            />
                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                Inativos
                                            </label>
                                        </div>
                                    </div>


                                </Form>
                            </Card.Header>



                            <Container className="mb-10 p-5" >
                                <Row>
                                    <Col lg={12} md={12} xs={12}>
                                        {/* Page header */}

                                    </Col>
                                    {fleet?.fleets.map((item, index) => (

                                        <Col xl={4} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                            <StatRightTopIconFeet key={index} item={item} isEdit={isEdit} setIsEdit={setIsEdit} />
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
            <NewFeet showNew={showNew} setShowNew={setShowNew} isNew={isNew} setIsNew={setIsNew} />


        </Fragment>
    )
}
export default Home;
