import OptionsMenu from "./OptionsMenu";
import { useState, useEffect } from 'react';

const ChooseGameType = ({
    setGameMode,
    setFlagFilters,
    flagFilters
}) => {
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        setFlagFilters({type: ['letter', 'number', 'sweLetter']});
    }, [setFlagFilters])

    return (
        <>
        <h2>Game type</h2>
        <div>
            <button>{'<'}</button>
            <p>Four alternatives</p>
            <button>{'>'}</button>
        </div>
        <div>
            <OptionsMenu
                setGameMode={ setGameMode }
                setFlagFilters={ setFlagFilters }
                flagFilters={ flagFilters }
                setCanPlay={ setCanPlay }
            />
        </div>
        <div>
            {canPlay ?
                <button onClick={() => {
                    setGameMode('FourAlternatives');
                }}>Start Game</button>
                :
                <button disabled>Start Game</button>
            }
        </div>
        </>
    );
}

export default ChooseGameType;