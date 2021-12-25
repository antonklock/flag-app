import { chooseNextFlag, wrongGuessFlags } from '../tools/chooseNextFlag';

const handleGuess = (
    alternatives,
    alternative,
    flagName,
    setFlagDisplay,
    setShowCorrectGuess,
    isButtonDisabled,
    setIsButtonDisabled
    ) => {
    if(alternative === flagName){
        setShowCorrectGuess(true);
        setTimeout(() => {
            setFlagDisplay(chooseNextFlag(flagName));
            setShowCorrectGuess(false);
        }, 1000)
    } else {
        setIsButtonDisabled(isButtonDisabled.map((isDisabled, index) => {
            return isDisabled ? true : alternatives[index] === alternative;
        }));
        if(wrongGuessFlags.length < 3){
            wrongGuessFlags.push(flagName);
        }
    }
}

export default handleGuess;