let currentScore = 0;

const addScore = ( scoreToAdd ) => {
    currentScore += scoreToAdd;
}

const subtractScore = ( scoreToSubtract ) => {
    currentScore -= scoreToSubtract;
}

export { currentScore, addScore, subtractScore };