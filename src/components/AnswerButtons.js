import AnswerButton from '../components/AnswerButton';
import '../components/AnswerButtons.css';

const AnswerButtons = (props) => (
    <>
        <div className="AnswerButtonRow">
            <AnswerButton propsLink={props} alternative={ props.alternatives[0] }/>
            <AnswerButton propsLink={props} alternative={ props.alternatives[1] }/>
        </div>
        <div className="AnswerButtonRow">
            <AnswerButton propsLink={props} alternative={ props.alternatives[2] }/>
            <AnswerButton propsLink={props} alternative={ props.alternatives[3] }/>
        </div>
    </>
)

export default AnswerButtons;