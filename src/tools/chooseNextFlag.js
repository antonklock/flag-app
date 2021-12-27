const wrongGuessFlags = [];

const chooseNextFlag = ( flags, currentFlag) => {
    let loadRandomFlag = Math.floor(Math.random() + 0.5);
    if(wrongGuessFlags.length <= 0 || wrongGuessFlags[0] === currentFlag){
        loadRandomFlag = 1;
    }
    
    if(loadRandomFlag){
        return () => {
            let newFlag; 
            do{
                console.log(flags.length);
                newFlag = flags[Math.floor(Math.random() * flags.length)];
            }while (newFlag.flagName === currentFlag)
            return newFlag;
        } 
    } else {
        const wrongGuessFlag = wrongGuessFlags[0];
        wrongGuessFlags.shift();
        return () => {
            for(let i in flags){
                if(wrongGuessFlag === flags[i].flagName){
                    return flags[i];
                }
            }
        };
    }
}

export { chooseNextFlag, wrongGuessFlags };