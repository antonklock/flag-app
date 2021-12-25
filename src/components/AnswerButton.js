import handleGuess from '../tools/handleGuess';

const AnswerButton = ({
    alternatives,
    alternative,
    flagDisplay,
    setFlagDisplay,
    setShowCorrectGuess,
    isButtonDisabled,
    setIsButtonDisabled
}) => (
    <>
        <button
            onClick={() => {
                handleGuess(
                    alternatives,
                    alternative,
                    flagDisplay.flagName,
                    setFlagDisplay,
                    setShowCorrectGuess,
                    isButtonDisabled,
                    setIsButtonDisabled
                    );
            }}
            disabled={ isButtonDisabled[alternatives.indexOf(alternative)] }
        >
            {alternative}
        </button>
    </>
);

export default AnswerButton;