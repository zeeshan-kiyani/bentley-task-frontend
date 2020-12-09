import React, { useEffect, useState } from 'react';
import { Form ,Button,Container,Row,Col} from "react-bootstrap";
import {apiRequestAxio} from '../services/api/apiClass'
let noArr:any = [];
let noHolder:any = '';
const LargestNo = () =>{
    const [largestNo ,setLargestNo] = useState('');
    const [type ,setType] = useState('');
    const [noArrayElement , setNoArrayElement] = useState('');
    useEffect(() => {
        
    },[])
    const submitType = async () => {
        const body = {
            "input_array" : noArr
        } 
        try {
            let response = await apiRequestAxio("POST", `api-get-no/`,body, { "Content-Type": "application/json" });
            if(response.data){
                if(type === 'largest')
                {
                    setLargestNo(response.data.largest_no)
                }
                else if (type === 'secondlargest')
                {
                    setLargestNo(response.data.second_largest)   
                }
            }
        }catch (e) {
            console.error(e);
            return null;
        }
    }
    const collectArray = () =>{
        noArr.push(noArrayElement)
        noHolder = ''
        noArr.map((value:any)=>{
            noHolder += `${value},`;
        })
        setNoArrayElement('');
    }
    return (
        <React.Fragment>
            <Container fluid>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    <h1>Bentley Task</h1>
                </Col>
            </Row>
            <Row>

                <Col xs={{ span: 6, offset: 3 }}>
                    <Form.Group controlId="formArrayElement">
                    <Form.Label>Please Enter the values in array</Form.Label>
                    <Form.Control type='text' value={noArrayElement} onChange={(e)=>setNoArrayElement(e.target.value)} placeholder='Add element to the array' />
                    </Form.Group>
                    <div>
                        <Button onClick={collectArray} variant="outline-warning">Add No</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                   
            </Row>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Please Select Your Choice</Form.Label>
                        <Form.Control as="select" onChange = {(e) => setType(e.target.value)} >
                            <option disabled selected>Select...</option>
                            <option value="largest">Largest</option>
                            <option value="secondlargest">Second Largest</option>
                        </Form.Control>
                    </Form.Group>
                    <div>
                        <Button onClick ={submitType} variant="outline-warning" disabled={type!==''?false:true}>Find Number</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    {noHolder !== ''
                        ?<label>{`Your Array is ${noHolder}`}</label>
                        :null
                    }
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