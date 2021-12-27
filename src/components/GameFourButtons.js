import AnswerButtons from './AnswerButtons';
import { chooseNextFlag } from '../tools/chooseNextFlag';
import FlagDisplay from './FlagDisplay';
import flags from '../tools/flags';
import { filterFlags } from '../tools/flagFilters';
import { useState, useEffect, useRef } from 'react';

const GameFourButtons = ({ setGameMode, flagFilters }) => {
    const [flagDisplay, setFlagDisplay] = useState({});
    const [alternatives, setAlternatives] = useState([]);
    const [showCorrectGuess, setShowCorrectGuess] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState([false, false, false, false]);
    let filteredFlags = useRef(null);
    
    useEffect(() => {
        filteredFlags.current = filterFlags( flags, flagFilters );
        setFlagDisplay(chooseNextFlag( filteredFlags.current,  false));
        console.log(filteredFlags.current)
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
        <div>
            <FlagDisplay
                flag={ flagDisplay }
                showCorrectGuess={ showCorrectGuess }
            />
            <AnswerButtons
                alternatives={ alternatives }
                flagDisplay={ flagDisplay }
                setFlagDisplay={ setFlagDisplay }
                setShowCorrectGuess={ setShowCorrectGuess }
                isButtonDisabled={ isButtonDisabled }
                setIsButtonDisabled={ setIsButtonDisabled }
                filteredFlags={ filteredFlags.current }
            />
            <button onClick={() =>{
                setGameMode('none');
            }}>Back</button>
        </div>
    )
}

export default GameFourButtons;