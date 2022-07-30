import addIcon from '../tools/addIcon';
import compareStrings from '../tools/compareStrings';
import AnswerButton from '../components/AnswerButton';
import { chooseNextFlag, wrongGuessFlags } from '../tools/chooseNextFlag';
import '../components/AnswerButtons.css';
import { Card } from '@mui/material';

const AnswerButtons = (props) => {
    const handleGuess = (guess, correctAnswer) => {
        if(compareStrings(guess, correctAnswer)){
            props.setShowCorrectGuess(true);
            props.setAnswerResults([...props.answerResults, addIcon(true)]);
            props.setGameScore((prevState, p) => {
                return prevState + 100 * props.multiplier;
            })
            setTimeout(() => {
                props.setFlagDisplay(chooseNextFlag(props.filteredFlags, props.flagName));
                props.setShowCorrectGuess(false);
            }, 1000)
            if(props.multiplierStreak < 2){
                props.setMultiplierStreak(props.multiplierStreak + 1);
            } else if(props.multiplierStreak >= 2){
                props.setMultiplier(props.multiplier + 1);
                props.setMultiplierStreak(0);
                props.setAnswerResults([]);
            }
        } else {
            props.setIsButtonDisabled(props.isButtonDisabled.map((isDisabled, index) => {
                return isDisabled ? true : props.alternatives[index] === guess;
            }));
            if(wrongGuessFlags.length < 3){
                wrongGuessFlags.push(props.flagName);
            }
            props.setAnswerResults([...props.answerResults, addIcon(false)]);
            props.setMultiplierStreak(0);
            props.setMultiplier(1);
            props.setAnswerResults([]);
        }
    }
    
    return (
        <Card style={buttonRowContainer}>
            <div style={buttonRowStyle}>
                <AnswerButton propsLink={props} alternative={ props.alternatives[0] } handleGuess={ handleGuess } />
                <AnswerButton propsLink={props} alternative={ props.alternatives[1] } handleGuess={ handleGuess }/>
            </div>
            <div style={buttonRowStyle}>
                <AnswerButton propsLink={props} alternative={ props.alternatives[2] } handleGuess={ handleGuess }/>
                <AnswerButton propsLink={props} alternative={ props.alternatives[3] } handleGuess={ handleGuess }/>
            </div>
        </Card>
    )
}

const buttonRowContainer = {
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '5px',
}

const buttonRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center', 
    width: '100%', 
}

export default AnswerButtons;