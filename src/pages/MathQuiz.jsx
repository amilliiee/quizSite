import { useEffect, useState } from "react";
import { Button, Container, Input } from "reactstrap";
import { checkAnswer, generateQuestion, questionNumber, scoreAmount } from "../composables/mathLogic";

const MathQuiz = () => {
    const [score, setScore] = useState(scoreAmount);
    const [quesNum, setQuesNum] = useState(questionNumber);
    const [question, setQuestion] = useState('');
    const [endGame, setEndGame] = useState(false);
    const [pageRendered, setPageRendered] = useState(false);

    const promptUser = () => {
        const newQ = generateQuestion();
        if (newQ) {
            setQuestion(newQ);
        } else {
            setEndGame(true); // End game if prompt was canceled
        }
    };
    
    // Waits for page to render before asking the first question    
    useEffect(() => {
        if (!endGame && pageRendered) {
            promptUser();
        }
    }, [quesNum, endGame, pageRendered]);

    useEffect(() => {
        setPageRendered(true);
    }, []);

    const handleSubmit = () => {
        const userAns = parseInt(document.getElementById('textInput').value);
        const result = checkAnswer(userAns);
        setScore(result.scoreAmount);
        setQuesNum(result.questionNumber);

        document.getElementById('textInput').value = '';

        if (result.questionNumber > 10) {
            alert(result.scoreAmount >= 7 ? 'You won!' : 'Sorry, you didn\'t score high enough. Please try again!');
            // Reset game
            resetGame();
        }
    }

    const handleRestart = () => {
        setScore(0);
        setQuesNum(1);
        setQuestion('');
        setEndGame(false);
        setPageRendered(false);
        setTimeout(() => setPageRendered(true), 0)
    }

    return (
        <Container>
            <div className='math-quiz'>
                {!endGame ? (
                    <>
                        <div className='questionPrompt h3 mt-4' id='questionPrompt'>Question # {quesNum}</div>
                        <div className='questionFormat-style'>
                            <div className='questionDiv questionDiv-style h6'>
                                {question}
                            </div>
                            <div className='instructions h6 mt-2'>Please round your answer down to the nearest integer.</div>
                            <Input
                                type='text'
                                id='textInput'
                                className='mt-2 input-style'
                                placeholder='Type your answer here'
                            />
                        </div>
                        <Button color='primary' className='mt-3' onClick={handleSubmit}>Submit Answer</Button>
                        <div className='scoreDiv mt-3 h5' id='scoreDiv'>Score: {score} / 10</div>
                    </>
                ) : (
                    <div className='finalScore'>
                        <div className='finalScore-text h3 mt-2'>Final score: {score} / 10</div>
                        <Button color='primary' className='mt-3' onClick={handleRestart}>Play Again</Button>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default MathQuiz;