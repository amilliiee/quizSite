import { useState } from "react";
import { Button, Container, Input } from "reactstrap";
//import { checkAns, startGame } from "../composables/mathLogic";

const MathQuiz = () => {
    

    return (
        <Container>
            <div className='math-quiz'>
                <div className='questionPrompt h3 mt-4' id='questionPrompt'>Question #</div>
                {/* {gameStarted ? (<Input type='text' id='textInput' value={userAnswer} onChange={(e) => setUserAns(e.target.value)} />) : (<h6>Please start the game</h6>)} */}
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
                    }}>Placeholder for question</div>
                    <Input type='text' id='textInput' className='mt-3' style={{ width: '20%' }} placeholder='Type your answer here...' />
                </div>
                {/* {gameStarted ? (<Button onClick={handleCheckAns}>Submit Answer</Button>) : (<Button onClick={handleStartGame}>Start Game</Button>)} */}
                <Button color='primary' className='mx-2 mt-4'>Submit Answer</Button>
                {/* <div className='scoreDiv' id='scoreDiv'>Score: </div> */}
                <div className='scoreDiv mt-4 h5' id='scoreDiv'>Score: </div>
                {/* <p>test</p> */}
            </div>
        </Container>
    )
}

export default MathQuiz;