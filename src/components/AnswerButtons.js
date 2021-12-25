import AnswerButton from '../components/AnswerButton';

const AnswerButtons = ({
    alternatives,
    flagDisplay,
    setFlagDisplay,
    setShowCorrectGuess,
    isButtonDisabled,
    setIsButtonDisabled
}) => (
    <div>
        <AnswerButton
            alternatives={ alternatives }
            alternative={ alternatives[0] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
            setShowCorrectGuess={ setShowCorrectGuess }
            isButtonDisabled={ isButtonDisabled }
            setIsButtonDisabled={ setIsButtonDisabled }
        />
        <AnswerButton
            alternatives={ alternatives }
            alternative={ alternatives[1] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
            setShowCorrectGuess={ setShowCorrectGuess }
            isButtonDisabled={ isButtonDisabled }
            setIsButtonDisabled={ setIsButtonDisabled }
        />
        <AnswerButton
            alternatives={ alternatives }
            alternative={ alternatives[2] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
            setShowCorrectGuess={ setShowCorrectGuess }
            isButtonDisabled={ isButtonDisabled }
            setIsButtonDisabled={ setIsButtonDisabled }
        />
        <AnswerButton
            alternatives={ alternatives }
            alternative={ alternatives[3] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
            setShowCorrectGuess={ setShowCorrectGuess }
            isButtonDisabled={ isButtonDisabled }
            setIsButtonDisabled={ setIsButtonDisabled }
        />
    </div>
)

export default AnswerButtons;