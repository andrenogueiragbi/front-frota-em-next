'use client'
// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const StatRightTopIcon = props => {
    const { info } = props;




    return (
        <Card key={info.id} className='my-custom-card' >
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h4 className="mb-0 type_feet">{info.model}</h4>
                    </div>
                    <div className="icon-shape rounded-2">
                        <Image src={info.icon} height={50} width={90} alt="" />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <div className="ball_code d-flex d-flex justify-content-center align-items-center" style={{ width: '55px', height: '55px',borderRadius: '100px' }}>
                            <div className="d-flex justify-content-center align-items-center" >
                                <div className="text-center">
                                    <h5 className="text_color_code fs-6 badge text-wrap">C100</h5>
                                </div>
                            </div>
                        </div>

                        <p className="mb-0 marca type_marca_feet">{info.marca}</p>
                    </div>


                    <div style={{ background: '#E8E9EA' }} className='border border-black rounded text-center'>
                        <div style={{ fontSize: '8px' }} className="bg-primary d-flex justify-content-between align-items-center">

                            <Image className="ms-1" src={`/images/frota/mercosul.png`} height={8} width={12} alt="" />
                            <span className='text-white'>BRASIL</span>
                            <Image className="me-1" src={`/images/frota/brasil.png`} height={7} width={11} alt="" />

                        </div>
                        <div className="mt-1 ms-2 me-2 fw-bold text-black">{info.placa.toUpperCase()}</div>
                    </div>


                </div>


            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
StatRightTopIcon.propTypes = {
    info: PropTypes.any.isRequired
};

export default StatRightTopIcon