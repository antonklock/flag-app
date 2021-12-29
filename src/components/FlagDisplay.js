import '../components/FlagDisplay.css';
import { Typography } from '@mui/material';

const FlagDisplay = ({ flag, showCorrectGuess }) => {
    return (
        <div className="FlagDisplay">
            <div className="CorrectAnswerWrapper">
                {showCorrectGuess ? 
                    <div className="CorrectAnswerBanner">
                        <Typography variant="h3" className="CorrectAnswerText">
                            {flag.flagName}
                        </Typography>
                    </div>
                    :
                    <>
                    </>
                }
                
                <img src={flag.src} alt='flag'/>
            </div>
        </div>
    )
}
    
export default FlagDisplay;