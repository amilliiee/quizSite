import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row, } from "reactstrap";
import "../../App.css";

const ElemCard = ({ elem  = [0, 'H', 1.008, 1] }) => {
  const [num, symbol, mass, group] = elem;

  return (
    <Container className="element">
      <Row>
        <Col>
          <Card className="elem-card">
            <CardBody >
              <div>
                <CardText className="elem-num">Elem Num Elem mass</CardText>
                <CardText className="elem-mass">Elem mass</CardText>
                <CardText className="elem-symbol">Elem symbol</CardText>
                <CardText className="elem-name">?</CardText>
                <CardText className="elem-group">Elem Group</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ElemCard;


/*
Number        Mass
       Symbol
       Name
       Group
*/