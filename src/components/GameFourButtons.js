import '../components/GameFoourButtons.css';
import AnswerButtons from './AnswerButtons';
import { Card, Box, Button } from '@mui/material';
import { chooseNextFlag } from '../tools/chooseNextFlag';
import GameScore from './GameScore';
import FlagDisplay from './FlagDisplay';
import flags from '../tools/flags';
import { filterFlags } from '../tools/flagFilters';
import { useState, useEffect, useRef } from 'react';
import ResultBar from './ResultBar';

const GameFourButtons = ({ setGameMode, flagFilters }) => {
    const [flagDisplay, setFlagDisplay] = useState({});
    const [alternatives, setAlternatives] = useState([]);
    const [showCorrectGuess, setShowCorrectGuess] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState([false, false, false, false]);
    const [answerResults, setAnswerResults] = useState([]);
    const [gameScore, setGameScore] = useState(0);

    let filteredFlags = useRef(null);
    
    useEffect(() => {
        filteredFlags.current = filterFlags( flags, flagFilters );
        setFlagDisplay(chooseNextFlag( filteredFlags.current,  false));
    }, [flagFilters, filteredFlags])

    useEffect(()=> {
        const altOne = filteredFlags.current[Math.floor(Math.random() * filteredFlags.current.length)].flagName;
        const altTwo = filteredFlags.current[Math.floor(Math.random() * filteredFlags.current.length)].flagName;
        const altThree = filteredFlags.current[Math.floor(Math.random() * filteredFlags.current.length)].flagName;
        const altFour = flagDisplay.flagName;

        const shuffledAlternatives = [altOne, altTwo, altThree, altFour]
        .sort(()=> Math.random() - 0.5);

        setAlternatives(shuffledAlternatives);
        setIsButtonDisabled([false, false, false, false]);
    }, [flagDisplay]);

    return (
        <Card className="GameContainer">
            <div className="exitButtonContainer">
                <Button 
                className="exitButton"
                variant="outlined" 
                onClick={() =>{
                    setGameMode('none');
                }}>
                    X
                </Button>
            </div>
            <div className="gameScore">
                <GameScore gameScore={gameScore} />
            </div>
            <Box className="flagDisplayContainer">
                <FlagDisplay
                    flag={ flagDisplay }
                    showCorrectGuess={ showCorrectGuess }
                />
            </Box>
            <Box className="resultBar">
                <ResultBar answerResults={ answerResults } />
            </Box>
            
            <Box className="AnswerButtonContainer">
                <AnswerButtons
                    alternatives={ alternatives }
                    flagDisplay={ flagDisplay }
                    setFlagDisplay={ setFlagDisplay }
                    setShowCorrectGuess={ setShowCorrectGuess }
                    isButtonDisabled={ isButtonDisabled }
                    setIsButtonDisabled={ setIsButtonDisabled }
                    filteredFlags={ filteredFlags.current }
                    setAnswerResults={ setAnswerResults }
                    answerResults={ answerResults }
                    gameScore={ gameScore }
                    setGameScore={ setGameScore }
                />
            </Box>
        </Card>
    )
}

export default GameFourButtons;