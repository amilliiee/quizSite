import { useState } from "react";
import { Button, Container, Input } from "reactstrap";
//import { checkAns, startGame } from "../composables/mathLogic";

const MathQuiz = () => {
    const [score, setScore] = useState(0);
    const [quesNum, setQuesNum] = useState(1);
    const [question, setQuestion] = useState('');

    return (
        <Container>
            <div className='math-quiz'>
                <div className='questionPrompt h3 mt-4' id='questionPrompt'>Question # {quesNum}</div>
                <div className='instructions h6 mt-2'>Please round your answer down to the nearest integer.</div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div className='questionDiv'
                        style={{
                            width: '400px',
                            height: '200px',
                            border: '2px dashed #ccc',
                            marginBottom: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#ccc'
                    }}>{question}</div>
                    <Input type='text' id='textInput' className='mt-3' style={{ width: '20%' }} placeholder='Type your answer here...' />
                </div>
                <Button color='primary' className='mx-2 mt-4'>Submit Answer</Button>
                <div className='scoreDiv mt-4 h5' id='scoreDiv'>Score: {score} / 10</div>
            </div>
        </Container>
    )
}

export default MathQuiz;