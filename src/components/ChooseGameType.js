import OptionsMenu from "./OptionsMenu";
import { useState, useEffect } from 'react';
import { Typography, Button, Card } from '@mui/material';
import '../components/ChooseGameType.css'


const ChooseGameType = ({
    setGameMode,
    setFlagFilters,
    flagFilters
}) => {
    const [canPlay, setCanPlay] = useState(true);

    useEffect(() => {
        setFlagFilters({type: ['letter', 'number', 'sweLetter']});
    }, [setFlagFilters])

    return (
        <>
            <Card className="chooseGameTypeCarousel">
                <Button>{'<'}</Button>
                    <Typography variant="body1">Four alternatives</Typography>
                <Button>{'>'}</Button>
            </Card>
            <Card>
                <OptionsMenu
                    setGameMode={ setGameMode }
                    setFlagFilters={ setFlagFilters }
                    flagFilters={ flagFilters }
                    setCanPlay={ setCanPlay }
                />
            </Card>
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
        </>
    );
}

export default ChooseGameType;