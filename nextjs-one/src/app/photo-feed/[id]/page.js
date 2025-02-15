'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Images from '../wonders.js'

export default async function photo({ params }) {
    let id = ( await params).id
    let findImage = Images.find(image => image.id == id)
    // console.log('id',id)
    return (
        <>
            
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        {findImage.name}
                                    </div>
                                    <div>
                                        <Link href="/photo-feed" className="btn btn-success">Back</Link>
                                    </div>
                                </div>
                            </Card.Header>
                        
                            <Card.Body>
                                <Row>
                                    <Col >
                                            <Image
                                            src={findImage.src}
                                            width={300}
                                            height={300}
                                            alt={findImage.name}
                                            />
                                            <h4>{findImage.name}</h4>
                                            <h5>{findImage.creator}</h5>
                                            <p> 
                                                {findImage.description}
                                            </p>
                                    </Col>
                                </Row>
                                
                            </Card.Body>
                        </Card>
                </Col>
                </Row>
            </Container>
            
        </>
    )
}