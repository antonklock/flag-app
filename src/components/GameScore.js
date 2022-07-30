import { Typography } from '@mui/material';

const GameScore = ({ gameScore }) => {
    return (
        <p style={style}>
            { gameScore }
        </p>
    )
}

const style = {
    fontSize: '3.5rem',
    fontWeight: '1000',
    color: '#ffd600',
}

export default GameScore;