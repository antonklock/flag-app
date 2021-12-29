import handleGuess from '../tools/handleGuess';
import { Box, Button } from '@mui/material';

const AnswerButton = ({ propsLink, alternative }) => (
    <Box className="answerButton">
        <Button
            variant="contained"
            onClick={() => {
                // const isCorrect = handleGuess();
                handleGuess(
                    propsLink.alternatives,
                    alternative,
                    propsLink.flagDisplay.flagName,
                    propsLink.setFlagDisplay,
                    propsLink.setShowCorrectGuess,
                    propsLink.isButtonDisabled,
                    propsLink.setIsButtonDisabled,
                    propsLink.filteredFlags,
                    propsLink.setAnswerResults,
                    propsLink.answerResults
                );
            }}
            fullWidth
            disabled={ propsLink.isButtonDisabled[propsLink.alternatives.indexOf(alternative)] }
        >
            {alternative}
        </Button>
    </Box>
);

export default AnswerButton;