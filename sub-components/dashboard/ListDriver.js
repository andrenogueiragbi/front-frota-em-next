// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Table, Image, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import { toast } from 'react-toastify';
import { EditDriver, DeleteDriver } from 'modals'


function LineTr({ item, isEdit, setIsEdit, isDelete, setIsDelete, states, cities, setUfIBGE }) {

    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)



    return (
        <tr>
            <td className={`align-middle ${item.active ? '' : 'text-secondary'}`}>{item.id.split('-')[0]}</td>

            <td className="align-middle">
                <div className="d-flex align-items-center">
                    <div>

                        <div className="d-flex justify-content-between align-items-center">

                            <Image src={item.image ? item.image : '/images/avatar/placeholder-user.jpg'} className="rounded-circle avatar-md" style={{ 'filter': `${item.active ? 'none' : 'grayscale(100%)'}` }} alt="" />

                        </div>

                    </div>
                    <div className="ms-3 lh-1">
                        <h5 className=" mb-1">
                            <Link href="#" className={`text-inherit ${item.active ? '' : 'text-secondary'}`}>{item.name} {item.active ? "" : ' - INATIVO'}</Link></h5>
                    </div>
                </div>
            </td>
            {/* <td className="align-middle">{item.workload}</td> */}

            <td className="align-middle"><span className={`badge bg-${item.active ? item.cnh_category.toUpperCase() == 'A' ? 'primary' : item.cnh_category.toUpperCase() == 'AB' ? 'success' : item.cnh_category.toUpperCase() == 'C' ? 'danger' : item.cnh_category.toUpperCase() == 'D' ? 'warning' : 'info' : 'secondary'}`}>{item.cnh_category}</span></td>
            <td className={`align-middle ${item.active ? '' : 'text-secondary'}`}>{moment(item.cnh_expiration, 'YYYY-MM-DD').format('DD/MM/YYYY')}</td>

            {/* icons */}



            <td className="align-middle">
                <div className="d-flex align-items-center">
                    <button className="bg-transparent border border-danger border-2 p-1 m-1 rounded-2 d-flex justify-content-center align-items-center" onClick={() => setShowDelete(!showDelete)} ><i className="fe fe-x fs-3 text-danger" title='Inativar'></i></button>
                    <button className="bg-transparent border border-warning border-2 p-1 m-1 rounded-2 d-flex justify-content-center align-items-center" onClick={() => setShowEdit(!showEdit)} ><i className="fe fe-edit-3 fs-3 text-warning" title='Editar'></i></button>
                    {showEdit && <EditDriver
                        item={item}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        states={states}
                        cities={cities}
                        setUfIBGE={setUfIBGE}

                    />}

                    {showDelete &&
                        <DeleteDriver
                            item={item}
                            showDelete={showDelete}
                            setShowDelete={setShowDelete}
                            isDelete={isDelete}
                            setIsDelete={setIsDelete}

                        />

                    }


                </div>
            </td>


        </tr>

    )
}




const listDriver = ({ showNew }) => {


    const [driver, setDiver] = useState(null)

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState('5 linhas')
    const [Loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [ufIBGE, setUfIBGE] = useState(null)

    useEffect(() => {

        async function searchMotorista() {
            setLoading(true)

            const options = { method: 'GET' };

            if (page) {

                await toast.promise(
                    fetch(`https://api-frota.onrender.com/driver?page=${page}&limit=${limit.split(' ')[0]}&search=${search}&status=${status}`, options)
                        .then(response => response.json())
                        .then(response => setDiver(response))
                        .catch(err => console.error(err)),
                    {
                        pending: `Buscando Motoristas`,
                        error: 'Falha na API de buscar motoristas',
                    }
                );
            }

            setLoading(false)



        }

        searchMotorista()

    }, [page, limit, showNew, search, isEdit, isDelete, status])

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

            if (ufIBGE) {

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
                )
            }

        }

        searchIBGE()


    }, [ufIBGE])



    function handerNumberLine(e) {
        setPage(1)
        setLimit(e.target.value)

    }

    function handerSearch(e) {
        setPage(1)
        setSearch(e.target.value)
        setLimit('10 linhas')

    }






    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    {console.log(status)}
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


                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                {/*  <th>Cargo</th> */}
                                <th>Categoria</th>
                                <th>Vencimento CNH</th>
                                <th>Acões</th>
                            </tr>
                        </thead>

                        <tbody>

                            {driver ?
                                driver.drivers.map((item, index) => (
                                    <LineTr
                                        key={index}
                                        index={index}
                                        item={item}
                                        isEdit={isEdit}
                                        setIsEdit={setIsEdit}
                                        isDelete={isDelete}
                                        setIsDelete={setIsDelete}
                                        states={states}
                                        cities={cities}
                                        setUfIBGE={setUfIBGE}

                                    />

                                )) : false}
                        </tbody>
                    </Table>

                    <Card.Footer className="d-flex justify-content-center align-items-center">
                        {/*  <Link href="#" className="link-primary">View All Projects</Link> */}
                        <div className="d-flex align-items-center">

                            <button className="bg-transparent border border-black border-1 p-1 m-1 rounded-2 d-flex justify-content-center align-items-center" onClick={() => setPage(page > 1 ? page - 1 : 1)} ><i className="fe fe-arrow-left fs-3 text-black" title='Inativar'></i></button>

                            <div className="d-flex align-items-center gap-1">
                                <label>Pagina</label>


                                <input
                                    className="border border-black border-1 rounded-1 p-1"
                                    type="text"
                                    style={{ width: '70px' }}
                                    value={page}
                                    onChange={(e) => setPage(e.target.value.replace(/[^0-9]/g, '') < driver?.pagination.lastPage ? e.target.value.replace(/[^0-9]/g, '') : driver?.pagination.lastPage)}

                                />

                                <label>de {driver?.pagination?.lastPage}</label>


                                <button className="bg-transparent border border-black border-1 p-1 m-1 rounded-2 d-flex justify-content-center align-items-center" onClick={() => setPage(page < driver.pagination.lastPage ? page + 1 : page)} ><i className="fe fe-arrow-right fs-3 text-black" title='Inativar'></i></button>


                                <select name="city" className="border border-black border-1 rounded-2 p-1" id="status-select" style={{ 'width': '100px' }} value={limit} onChange={(e) => handerNumberLine(e)}  >

                                    {
                                        ['5 linhas', '10 linhas', '100 linhas', "1000 linhas"].map((item, index) => (
                                            <option className='' key={index} value={item}>{item}</option>


                                        ))
                                    }

                                </select>

                                <label>Total {driver?.pagination?.total}</label>

                                {Loading ?

                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    :
                                    <div className='' style={{ 'height': '32px', 'width': '32px' }}> </div>

                                }



                            </div>



                        </div>



                    </Card.Footer>
                </Card>
            </Col>



        </Row>
    )
}

export default listDriver