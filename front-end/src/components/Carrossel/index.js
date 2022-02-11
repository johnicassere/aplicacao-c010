import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Image = styled.img`
height: 30rem;
width: 100%;
`;

const Caption = styled(Carousel.Caption)`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



h3{
    background-color: #00000080;
    border-radius: 2rem;
    padding: 0.7rem
}
p{
    background-color: #00000080;
    border-radius: 2rem;
    padding: 0.7rem
}
`;

export const Carrossel = (props) =>{
    return(
        <Carousel>
          {props.data.map((item) => (
           <Carousel.Item key={item.alt}>
            <Image src={item.img} alt={item.alt} />
            <Caption>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            </Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    )
}