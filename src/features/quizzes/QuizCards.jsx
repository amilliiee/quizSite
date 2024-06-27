import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { QUIZZES } from '../../app/shared/QUIZZES';
import '../../App.css';

const QuizCards = () => {

    return (
        <Container className='quiz-list'>
            <Row>
                {QUIZZES.map(quiz => (
                    <Col sm='4' key={quiz.id} className='mb-3 mt-3'>
                        <Card className='card-style'>
                            <CardBody className='cardBody-style'>
                                <div>
                                    <CardTitle tag='h5'>{quiz.name}</CardTitle>
                                    <CardText>{quiz.description}</CardText>
                                </div>
                                <div className='buttonContainer-style'>
                                    <Button href={`/${quiz.id}`}>Start Quiz</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default QuizCards;