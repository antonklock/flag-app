import flags from '../tools/flags'
import getRandomKey from '../tools/getRandomKey';

const handleGuess = (alternatives, alternative, flagName, setFlagDisplay, setShowCorrectGuess, isButtonDisabled, setIsButtonDisabled) => {
    if(alternative === flagName){
        console.log(`CORRECT! ${alternative} is indeed ${flagName}`);
        setShowCorrectGuess(true);
        setTimeout(() => {
            setFlagDisplay(getRandomKey(flags));
            setShowCorrectGuess(false);
        }, 1000)
    } else {
        console.log(`That's not right. You guessed ${alternative}. The correct answer is ${flagName}.`)
        
        setIsButtonDisabled(isButtonDisabled.map((isDisabled, index) => {
            return isDisabled ? true : alternatives[index] === alternative;
        }));
        console.log(isButtonDisabled);
    }
}

export default handleGuess;