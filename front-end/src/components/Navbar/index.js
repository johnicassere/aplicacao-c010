import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const NavH1 = styled.div`
font-size: 1.25rem;
color: #000;
&:hover{
  font-size: 1.5rem;
  color: #fff;
}
`;

export const NavBar = () => {
    return(
        
        <Navbar bg="primary" variant="dark">
          <Container>
            <NavH1 href="!#">BlueTeco</NavH1>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cadastrar">Cadastro</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/mesa">Mesa</Nav.Link>
            </Nav>
           </Container>
         </Navbar>
    );
};