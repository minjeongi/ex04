import React, { useState } from 'react'
import {Row, Col, Table, Button } from 'react-bootstrap'
import ProductInsert from './ProductInsert';

const Products = () => {
    const [products, setProducts]=useState([
        {code:1, name:'LG 냉장고', price:2500000}, 
        {code:2, name:'LG 세탁기', price:2500000}, 
        {code:3, name:'LG 스타일러', price:2500000},
        {code:4, name:'LG TV', price:2500000},
    ]); //JSON 데이터

const onDelete = (del) => {
    if(window.confirm(`${del.name}를 삭제하시겠습니까?`)){
        const newProducts=products.filter(p=>p.code!==del.code);
         setProducts(newProducts);
    }
}

  return (
    <div>
        <h1>상품관리</h1>
        <Row className='justify-content-center my-5'>
            <Col md={10} className='px-2'>
                <ProductInsert setProducts={setProducts} products={products}/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>상품코드</td>
                            <td>상품이름</td>
                            <td>상품가격</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p=>
                            <tr key={p.code}>
                                <td>{p.code}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>
                                <Button onClick={()=>onDelete(p)} variant='danger'>
                                    삭제
                                </Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </div>
    
  )
}

export default Products