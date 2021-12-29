import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { v4 as uuidv4 } from 'uuid';

const addIcon = (answerIsCorrect) => {
    if(answerIsCorrect){
        return <CheckCircleOutlineIcon className={"visable"} key={uuidv4()} sx={{color: 'green'}}/>
    } else {
        return <HighlightOffIcon className={"visable"} key={uuidv4()} sx={{color: 'red'}}/>
    }
}

export default addIcon;