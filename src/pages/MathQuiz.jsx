import { useState } from "react";
import { Button, Container, Input } from "reactstrap";
import { checkAns, startGame } from "../composables/mathLogic";

const MathQuiz = () => {
    

    return (
        <Container>
            <div className='math-quiz'>
                {/* <div className='questionPrompt' id='questionPrompt'>Question #</div>
                {gameStarted ? (<Input type='text' id='textInput' value={userAnswer} onChange={(e) => setUserAns(e.target.value)} />) : (<h6>Please start the game</h6>)}
                {gameStarted ? (<Button onClick={handleCheckAns}>Submit Answer</Button>) : (<Button onClick={handleStartGame}>Start Game</Button>)}
                <div className='scoreDiv' id='scoreDiv'>Score: </div> */}
                <p>test</p>
            </div>
        </Container>
    )
}

export default MathQuiz;