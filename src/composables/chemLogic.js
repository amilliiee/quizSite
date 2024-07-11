// export let scoreAmount = 0;
// export let questionNumber = 1;
// export let correctAnswer = '';
import { CHEM_ELEMS } from "../app/shared/QUIZZES";
import ElemCard from "../features/quizzes/ElemCard";

export const genChemQuestion = () => {
    const elemIdx = Math.floor(Math.random() * CHEM_ELEMS.num.length);
    const elem = {
        num: CHEM_ELEMS.num[elemIdx],
        name: CHEM_ELEMS.name[elemIdx],
        symbol: CHEM_ELEMS.symbol[elemIdx],
        mass: CHEM_ELEMS.mass[elemIdx],
        group: CHEM_ELEMS.group[elemIdx]
    }
    const options = [];

    // Including answer in the options
    options.push(elem.name);
    
    while ( options.length < 4) {
        let rand = Math.floor(Math.random() * CHEM_ELEMS.num.length);

        if (rand !== elemIdx && !options.includes(CHEM_ELEMS.name[rand])) {
            options.push(CHEM_ELEMS.name[rand]);
        }
    }

    return {
        question: 'What element is displayed below?',
        card: <ElemCard props={elem} />,
        options: options.sort(() => Math.random() - 0.5) // Shuffles options
    }

}