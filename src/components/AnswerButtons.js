import AnswerButton from '../components/AnswerButton';

const AnswerButtons = (props) => (
    <div>
        <AnswerButton propsLink={props} alternative={ props.alternatives[0] }/>
        <AnswerButton propsLink={props} alternative={ props.alternatives[1] }/>
        <AnswerButton propsLink={props} alternative={ props.alternatives[2] }/>
        <AnswerButton propsLink={props} alternative={ props.alternatives[3] } />
    </div>
)

export default AnswerButtons;