// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const StatRightTopIcon = props => {
    const { info } = props;
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h4 className="mb-0">{info.model}</h4>
                    </div>
                    <div className="icon-shape rounded-2">
                        <Image src={info.icon} height={50} width={90} alt="" />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h1 className="fw-bold">{info.code}</h1>
                        <p className="mb-0">{info.marca}</p>
                    </div>


                    <div style={{background: '#E8E9EA'}} className='border border-black rounded text-center'>
                        <div style={{ fontSize: '8px' }} className="bg-primary text-center m-0 p-0">
                            <span  className='text-white '>BRASIL</span>
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