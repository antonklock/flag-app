import { AutoAwesome } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

const AnswerButton = ({ propsLink: props, alternative: guess, handleGuess }) => (
    <Box style={buttonContainerStyle}>
        <Button
            style={buttonStyle}
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

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: '10px',
}

const buttonStyle = {
    height: '75px',
    borderRadius: '10px',
}

export default AnswerButton;