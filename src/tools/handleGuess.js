import { chooseNextFlag, wrongGuessFlags } from '../tools/chooseNextFlag';
import addIcon from './addIcon';

const handleGuess = (
    alternatives,
    alternative,
    flagName,
    setFlagDisplay,
    setShowCorrectGuess,
    isButtonDisabled,
    setIsButtonDisabled,
    filteredFlags,
    setAnswerResults,
    answerResults
    ) => {
    if(alternative === flagName){
        setShowCorrectGuess(true);
        setAnswerResults([...answerResults, addIcon(true)]);
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
        setAnswerResults([...answerResults, addIcon(false)]);
    }
}

export default handleGuess;