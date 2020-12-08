import React, { useEffect, useState } from 'react';
import { Form ,Button,Container,Row,Col} from "react-bootstrap";
import {apiRequestAxio} from '../services/api/apiClass'
const LargestNo = () =>{
    const [largestNo ,setLargestNo] = useState('')
    const [type ,setType] = useState('')
    useEffect(() => {
        
    },[])
    const clickMe = async () => {
        console.log(type)
        const body = {
            "input_array" : [14,2,34,444,2,39]
        } 
        try {
            let response = await apiRequestAxio("POST", `api-get-no/`,body, { "Content-Type": "application/json" });
            if(response.data){
                type === 'largest'?setLargestNo(response.data.largest_no):setLargestNo(response.data.second_largest)   
            }
        }catch (e) {
            console.error(e);
            return null;
        }
    }
    
    return (
        <React.Fragment>
            <Container fluid>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    <label>Your array is <p className={`array-color`}>[14,2,34,444,2,39]</p></label>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Please Select Your Choice</Form.Label>
                        <Form.Control as="select" onChange = {(e) => setType(e.target.value)}>
                            <option disabled selected>Select...</option>
                            <option value="largest">Largest</option>
                            <option value="slargest">Second Largest</option>
                        </Form.Control>
                    </Form.Group>
                    <div>
                        <Button onClick ={clickMe} variant="outline-warning" disabled={type!==''?false:true}>Find Number</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                <label>Result <p className={`array-color`}>{largestNo}</p></label>
                </Col>
            </Row>
            </Container>

        </React.Fragment>

    )
}
export default  LargestNo;