export let scoreAmount = 0;
export let questionNumber = 1;
export let correctAnswer = '';
let op= '';

export const generateQuestion = () => {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    // Prompt user to choose operation
    op = prompt('Choose an operation: +, -, *, or /');

    if (op === null) {
        return null;
    }

    // Validate user input - if invalid, ask again
    const validOps = ['+', '-', '*', '/'];
    while (!validOps.includes(op)) {
        alert('Invalid operation. Please choose +, -, *, or /');
        return generateQuestion();
    };

    if (op === '/') {
        while (num2 === 0) {
            num2 = Math.floor(Math.random() * 10) + 1;
        }
    }

    // Calculate correct answer
    correctAnswer = calculate(op, num1, num2);

    return `What is the result of ${num1} ${op} ${num2}?`;
}

export const checkAnswer = (userAnswer) => {
    const corrAns = Math.floor(correctAnswer);
    
    if (userAnswer === corrAns) {
        scoreAmount++;
        alert('Correct!');
    } else {
        alert(`Incorrect. The correct answer is ${corrAns}`);
    }

    questionNumber++;
    return { scoreAmount, questionNumber };
};

const calculate = (op, num1, num2) => {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}