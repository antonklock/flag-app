import addIcon from '../tools/addIcon';
import compareStrings from '../tools/compareStrings';
import AnswerButton from '../components/AnswerButton';
import { chooseNextFlag, wrongGuessFlags } from '../tools/chooseNextFlag';
import '../components/AnswerButtons.css';

const AnswerButtons = (props) => {
    const handleGuess = (guess, correctAnswer) => {
        if(compareStrings(guess, correctAnswer)){
            props.setShowCorrectGuess(true);
            props.setAnswerResults([...props.answerResults, addIcon(true)]);
            props.setGameScore((prevState, props)=> {
                return prevState + 100;
            })
            setTimeout(() => {
                props.setFlagDisplay(chooseNextFlag(props.filteredFlags, props.flagName));
                props.setShowCorrectGuess(false);
            }, 1000)
        } else {
            props.setIsButtonDisabled(props.isButtonDisabled.map((isDisabled, index) => {
                return isDisabled ? true : props.alternatives[index] === guess;
            }));
            if(wrongGuessFlags.length < 3){
                wrongGuessFlags.push(props.flagName);
            }
            props.setAnswerResults([...props.answerResults, addIcon(false)]);
        }
    }
    
    return (
        <>
            <div className="AnswerButtonRow">
                <AnswerButton propsLink={props} alternative={ props.alternatives[0] } handleGuess={ handleGuess } />
                <AnswerButton propsLink={props} alternative={ props.alternatives[1] } handleGuess={ handleGuess }/>
            </div>
            <div className="AnswerButtonRow">
                <AnswerButton propsLink={props} alternative={ props.alternatives[2] } handleGuess={ handleGuess }/>
                <AnswerButton propsLink={props} alternative={ props.alternatives[3] } handleGuess={ handleGuess }/>
            </div>
        </>
    )
}

export default AnswerButtons;