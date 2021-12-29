import { Box, Button } from '@mui/material';

const AnswerButton = ({ propsLink: props, alternative: guess, handleGuess }) => (
    <Box className="answerButton">
        <Button
            variant="contained"
            onClick={() => {
                handleGuess(guess, props.flagDisplay.flagName);
            }}
            fullWidth
            disabled={ props.isButtonDisabled[props.alternatives.indexOf( guess )] }
        >
            { guess }
        </Button>
    </Box>
);

export default AnswerButton;