import React, { useState } from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'

const Students = () => {
    const [students, setStudents] = useState([
        {no:1, name:'강민정', dept:'소융과'},
        {no:2, name:'강민지', dept:'소융과'},
        {no:3, name:'이소영', dept:'소융과'},
    ])

const onDelete = (del) => {
    if(window.confirm(`${del.name} 학생 정보를 삭제하시겠습니까?`)){
        const newStudents=students.filter(s=>s.no!==del.no);
        setStudents(newStudents);
    }
}

  return (
    <div>
        <h1>학생 관리</h1>
        <Row className='justify-content-center my-5'>
            <Col md={8}>
                <Table striped bordered hover className='px-2'>
                <thead className='text-center'>
                        <tr>
                            <td>학번</td>
                            <td>이름</td>
                            <td>학과</td>
                            <td>삭제</td>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(s=>
                            <tr key={s.no}>
                                <td>{s.no}</td>
                                <td>{s.name}</td>
                                <td>{s.dept}</td>
                                <td>
                                    <Button onClick={()=>onDelete(s)} variant='danger'>
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

export default Students