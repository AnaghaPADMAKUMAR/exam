import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { productsViewAPI } from '../Service/allAPI'

function ProductDetails() {

    const {id}=useParams()

    const [view, setView] = useState([])

    //console.log(id);

    const viewProduct = async () => {
        const result = await productsViewAPI(id)
        if (result.status >= 200 && result.status < 300) {
            setView(result.data);
        }
    }
    console.log(view);

    useEffect(() => {
        viewProduct()
    }, [])

  return (
    <div>
        <Container className='mt-5 p-5'>
            <Row>
                
               <Col lg={6}>
               <img className='w-100' src={view.image} alt="" />
               </Col>

               <Col lg={6}>
                <p>Name : {view.name}</p>
                <p>Description : {view.description}</p>
                <p>Frame Color : {view.frameColor}</p>
                <p>Frame Shape : {view.frameShape}</p>
                <p>Size : {view.size}</p>
                <p>Brand Name : {view.BrandName}</p>
                <p>Collection : {view.collection}</p>
                <p>Warranty : {view.warranty}</p>
                <h3>Price : {view.price}</h3>
                <Link to={'/cart'}>
                    <Button>Add to Cart</Button>
                </Link>
               </Col>

            </Row>
        </Container>
    </div>
  )
}

export default ProductDetails