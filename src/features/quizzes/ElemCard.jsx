import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row, } from "reactstrap";
import "../../App.css";

const ElemCard = ({ elem  = [0, 'H', 1.008, 'Nonmetal'] }) => {
  const [num, symbol, mass, group] = elem;

  return (
    <Container className="element">
      <Row>
        <Col>
          <Card className="elem-card">
            <CardBody className="elem-card-body">
              <div className="elem-num-mass">
                <CardText className="elem-num">{num}</CardText>
                <CardText className="elem-mass">{mass}</CardText>
              </div>
              <CardTitle className="elem-symbol">{symbol}</CardTitle>
              <CardText className="elem-name">?</CardText>
              <CardText className="elem-group">{group}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ElemCard;