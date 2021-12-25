import flags from '../tools/flags';
import getRandomKey from '../tools/getRandomKey';
const wrongGuessFlags = [];

const chooseNextFlag = (currentFlag) => {
    let loadRandomFlag = Math.floor(Math.random() + 0.5);
    if(wrongGuessFlags.length <= 0 || wrongGuessFlags[0] === currentFlag){
        loadRandomFlag = 1;
    }
    console.log(loadRandomFlag);
    if(loadRandomFlag){
        console.log('randomFlag');
        return () => {
            let newFlag = null;
            do{
                newFlag = getRandomKey(flags);
            } while (newFlag === currentFlag.flagName);
            return newFlag;
        } 
    } else {
        console.log('wrongGuessFlags');
        const wrongGuessFlag = wrongGuessFlags[0];
        wrongGuessFlags.shift();
        return () => {
            for(let flag in flags){
                if(wrongGuessFlag === flags[flag].flagName){
                    return flags[flag];
                }
            }
        };
    }
}

export { chooseNextFlag, wrongGuessFlags };