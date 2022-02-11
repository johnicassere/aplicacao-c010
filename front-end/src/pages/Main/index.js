import { Card, Row, Col } from 'react-bootstrap';
import { Carrossel } from '../../components/Carrossel';
import { BlutecoImg } from '../../Api/Card';
import { imgInfo } from '../../Api/Carrossel-slider';


export const Main = () => {
    return(
        <>
        <Carrossel data={imgInfo} />
      <Row>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col lg={4} md={6} xs={12} key={Math.random()}>
            <a href="!#">
              <Card>
                <Card.Img variant="top" src={BlutecoImg[1].imageUrl} />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
        </>
    )
}