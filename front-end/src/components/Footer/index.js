import { FaGithubSquare, FaLinkedin, } from "react-icons/fa";
import styled from "styled-components";


const FooTer = styled.div`
background-color: #0E6EFA;
color: #000;
padding: 1.2rem;
display: flex;
align-items: center;
justify-content: center;
`;

const Redes = styled.div`
font-size: 1.8rem;

a {
    color: #000;
    text-decoration: none;

    &:hover{
    font-size: 2.5rem;
}
}

`;


export const Footer = () => {
    return(
        <>
        <FooTer>
            <Redes>
            <a target="_blank" href="https://github.com/johnicassere">
                <FaGithubSquare />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/johni-cassere/">
            <FaLinkedin />
            </a>
            </Redes>
        </FooTer>
        
        </>
    )
}