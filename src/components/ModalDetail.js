import React from 'react';
import { Modal, ModalBody, Row, Col, Button } from 'reactstrap';
let nama = localStorage.nama_user
class ModalDetail extends React.Component {
    render() {
        return (
            <div>
                <ModalBody>
                        <Row>
                            <Col md="6" className="mr-auto">
                                <h6>Checkout</h6>
                            </Col>
                            <Col md="6" className="ml-auto">
                                <h6>Receipt No: #3091284919</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" className="mr-auto">
                                <h6>Cashier: {nama}</h6>
                            </Col>
                        </Row>
                        <div className="mt-5">
                                        <Row className="mt-2">
                                            <Col md="6" className="mr-auto">
                                                <h6>Espresso</h6>
                                            </Col>
                                            <Col md="6" className="ml-auto">
                                                <h6 style={{ textAlign: 'right' }}>Rp. 15.000</h6>
                                            </Col>
                                        </Row>
                        </div>
                        <Row className="mt-5">
                            <Col md="6" className="mr-auto">
                                <h6>Ppn 10%</h6>
                            </Col>
                            <Col md="6" className="ml-auto">
                                <h6 style={{ textAlign: 'right' }}>Rp. 10.500</h6>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md="6" className="ml-auto">
                                <h6 style={{ textAlign: 'right' }}>Total: Rp. 15.000</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" className="mr-auto">
                                <h6 style={{ textAlign: 'left' }}>Payment: Cash</h6>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Button style={{ backgroundColor: '#F24F8A', width: '100%', height: 50, fontWeight: 'bold', fontSize: 20 }}>Print</Button>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <h6 style={{ textAlign: 'center' }}>Or</h6>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Button style={{ backgroundColor: '#57CAD5', width: '100%', height: 50, fontWeight: 'bold', fontSize: 20 }}>Send Email</Button>
                            </Col>
                        </Row>
                    </ModalBody>
            </div>
        );
    }
}

export default ModalDetail;