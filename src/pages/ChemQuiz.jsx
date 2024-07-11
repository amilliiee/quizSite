import { useEffect, useState } from "react";
import { Button, Container, Input } from "reactstrap";
import { genChemQuestion } from '../composables/chemLogic'

const ChemQuiz = () => {
    const endGame = false;
    return (
        <Container>
            <div className='math-quiz'>
                {!endGame ? (
                    <>
                        <div className='questionPrompt h3 mt-4' id='questionPrompt'>Question # ?</div>
                        <div className='questionFormat-style'>
                            <div className='questionDiv questionDiv-style h6'>
                                QUESTION
                            </div>
                            <div>
                                CARD
                            </div>
                            <div className='instructions h6 mt-2'>Capitalization does not matter.</div>
                            <Input type='text' id='textInput' className='mt-2 input-style' placeholder='Type your answer here' />
                        </div>
                        <Button color='primary' className='mt-3'>Submit Answer</Button>
                        <div className='scoreDiv mt-3 h5' id='scoreDiv'>Score: ? / 10</div>
                    </>
                ) : (
                    <div className='finalScore'>
                        <div className='finalScore-text h3 mt-2'>Final score: ? / 10</div>
                        <Button color='primary' className='mt-3'>Play Again</Button>
                    </div>
                )}
            </div>
        </Container>
    )
};

export default ChemQuiz;