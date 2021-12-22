import flags from '../tools/flags'
import getRandomKey from '../tools/getRandomKey';

const handleGuess = (guess, correctAnswer, setFlagDisplay) => {
    if(guess === correctAnswer){
        console.log(`CORRECT! ${guess} is indeed ${correctAnswer}`);
        setTimeout(() => {
            setFlagDisplay(getRandomKey(flags));
        }, 1000)
    } else {
        console.log(`That's not right. You guessed ${guess}. The correct answer is ${correctAnswer}.`)
    }
}

export default handleGuess;