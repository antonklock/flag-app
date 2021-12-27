import handleGuess from '../tools/handleGuess';

const AnswerButton = ({ propsLink, alternative }) => (
    <>
        <button
            onClick={() => {
                handleGuess(
                    propsLink.alternatives,
                    alternative,
                    propsLink.flagDisplay.flagName,
                    propsLink.setFlagDisplay,
                    propsLink.setShowCorrectGuess,
                    propsLink.isButtonDisabled,
                    propsLink.setIsButtonDisabled,
                    propsLink.filteredFlags
                    );
            }}
            disabled={ propsLink.isButtonDisabled[propsLink.alternatives.indexOf(alternative)] }
        >
            {alternative}
        </button>
    </>
);

export default AnswerButton;