import { chooseNextFlag, wrongGuessFlags } from '../tools/chooseNextFlag';

const handleGuess = (
    alternatives,
    alternative,
    flagName,
    setFlagDisplay,
    setShowCorrectGuess,
    isButtonDisabled,
    setIsButtonDisabled,
    filteredFlags
    ) => {
    if(alternative === flagName){
        setShowCorrectGuess(true);
        setTimeout(() => {
            setFlagDisplay(chooseNextFlag(filteredFlags, flagName));
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