import OptionsMenu from "./OptionsMenu";
import { useState, useEffect } from 'react';
import { Button, Card } from '@mui/material';
import '../components/ChooseGameType.css'


const ChooseGameType = ({
    setGameMode,
    setFlagFilters,
    flagFilters
}) => {
    const [canPlay, setCanPlay] = useState(true);

    useEffect(() => {
        setFlagFilters({type: ['letter', 'number']});
    }, [setFlagFilters])

    return (
        <>
            <Card class="bgCard">
                <h1>Start a new game</h1>
                <div>
                    <Button 
                        variant="contained"
                        disabled={!canPlay}
                        onClick={() => {
                        setGameMode('FourAlternatives');
                        }}
                    >
                        Start Game
                    </Button>
                </div>
                <hr Style="width:50px; color:#f7f7f7; margin-top:20px; drop-shadow: none"></hr>
                <p>Choose the symbols you want to include</p>
                <OptionsMenu
                        setGameMode={ setGameMode }
                        setFlagFilters={ setFlagFilters }
                        flagFilters={ flagFilters }
                        setCanPlay={ setCanPlay }
                    />
                
            </Card>
            
        </>
    );
}

export default ChooseGameType;