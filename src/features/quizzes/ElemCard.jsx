import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row, } from "reactstrap";
import "../../App.css";

const ElemCard = ({ elem }) => {
  const [num, symbol, mass, group] = elem;

  return (
    <Container className="element">
      <Row>
        <Col sm="4" className="mb-3 mt-3">
          <Card className="card-style">
            <CardBody className="cardBody-style">
              <div>
                <CardText>Elem Num</CardText>
                <CardText>Elem mass</CardText>
                <CardText>Elem symbol</CardText>
                <CardText>?</CardText>
                <CardText>Elem Group</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ElemCard;
