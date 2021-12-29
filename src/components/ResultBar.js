import { Box } from '@mui/material';
import './ResultBar.css';

const ResultBar = ({ answerResults }) => {
    return (
        <Box className="answerResultsContainer">
            <Box className="answerResultsBox">
                { answerResults }
            </Box>
                
            <Box className="answerResultsBox">
                
            </Box>    
        </Box>
    );
}

export default ResultBar;