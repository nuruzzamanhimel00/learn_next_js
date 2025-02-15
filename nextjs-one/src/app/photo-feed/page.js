'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Images from './wonders'
import Link from 'next/link';
export default function PhotoFeed() {
    return (
        <>
            
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Image Gallery</Card.Header>
                        
                            <Card.Body>
                            <Row>
                                {
                                    Images.map((image, key) => (
                                        <Col key={key}>
                                            <Link href={`/photo-feed/${image.id}`}>
                                                <Image
                                                    src={image.src}
                                                    width={300}
                                                    height={300}
                                                    alt={image.name}
                                                    />
                                                    <h4>{image.name}</h4>
                                                    <h5>{image.creator}</h5>
                                            </Link>
                                            
                                        </Col>
                                    ))
                                }
                                </Row>
                                
                            </Card.Body>
                        </Card>
                </Col>
                </Row>
            </Container>
            
        </>
    )
}