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

export const Mesa = () => {
    return(
        <>
        
        <FormS>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Numero da Mesa:</Form.Label>
            <Form.Control type="name" placeholder="Numero da Mesa" />
            <Form.Label>Descrição:</Form.Label>
            <Form.Control type="name" placeholder="Descrição" />

            <Form.Label>Menu:</Form.Label>
            <Form.Control type="name" placeholder="Menu" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Livre/Ocupado" />
            </Form.Group> 



            <Button variant="success" type="submit">
                Submit
            </Button>
            </Form>
            </FormS>

        </>
    )
}


