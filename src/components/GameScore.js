import { Typography } from '@mui/material';

const GameScore = ({ gameScore }) => {
    return (
        <p style={style}>
            { gameScore }
        </p>
    )
}

export default GameScore;

const style = {
    fontSize: '3.5rem',
    fontWeight: '1000',
    color: '#ffd600',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
}