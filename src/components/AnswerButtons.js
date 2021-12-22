import AnswerButton from '../components/AnswerButton';

const AnswerButtons = ({ alternatives, flagDisplay, setFlagDisplay}) => (
    <div>
        <AnswerButton
            alternative={ alternatives[0] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
        />
        <AnswerButton
            alternative={ alternatives[1] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
        />
        <AnswerButton
            alternative={ alternatives[2] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
        />
        <AnswerButton
            alternative={ alternatives[3] }
            flagDisplay={ flagDisplay }
            setFlagDisplay={ setFlagDisplay }
        />
    </div>
)

export default AnswerButtons;