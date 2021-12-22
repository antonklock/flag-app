import handleGuess from '../tools/handleGuess';

const AnswerButton = ({alternative, flagDisplay, setFlagDisplay}) => (
    <>
        <button
            onClick={() => {
                handleGuess(alternative, flagDisplay.flagName, setFlagDisplay);
            }}
        >
            {alternative}
        </button>
    </>
);

export default AnswerButton;