import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productsAPI } from '../Service/allAPI';
import { Link } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const result = await productsAPI()
        if (result.status >= 200 && result.status < 300) {
            setProducts(result.data);
        }
        else {
            alert("Connection Error")
        }
    }
    console.log(products);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5 mb-5 text-center'>Happy Shopping</h2>
            <Container>
                <Row>
                    {
                        products.length > 0 && products.map(i => (
                            <Col sm={12} md={6} lg={4} className='mb-3'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img style={{width:'100%',height:'300px'}} variant="top" src={i.image} />
                                    <Card.Body className='text-center'>
                                        <Card.Title>{i.name}</Card.Title>
                                        <Card.Text>
                                           {i.description}
                                        </Card.Text>
                                       <Link to={`/product-view/${i.id}`}>
                                         <Button className='btn bg-info'>View Product</Button>
                                       </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Products