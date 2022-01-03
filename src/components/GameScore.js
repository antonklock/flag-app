import { Card, Typography } from '@mui/material';

const GameScore = ({ gameScore }) => {
    return (
        <Card>
            <Typography>
                { gameScore }
            </Typography>
        </Card>
    )
}

export default GameScore;