import '../components/FlagDisplay.css';

const FlagDisplay = ({ flag, showCorrectGuess }) => {
    return (
        <div className="FlagDisplay">
            <div className="CorrectAnswerWrapper">
                {showCorrectGuess ? 
                    <div className="CorrectAnswerBanner">
                        <h1 className="CorrectAnswerText">{flag.flagName}</h1>
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