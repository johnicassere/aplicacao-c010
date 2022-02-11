import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';

const FormS = styled.div`
background-color: #3F93D3;
height: 50rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;



export const Register = () => {
    return(
        <>
        <FormS>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
            <Form.Label>Sobre Nome:</Form.Label>
            <Form.Control type="name" placeholder="Enter first name" />

            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Label>Confirmação da Senha:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            </Form>
            </FormS>
        </>
    )
}