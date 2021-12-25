import { useState, useEffect } from 'react';
import './App.css';
import FlagDisplay from './components/FlagDisplay';
import flags from './tools/flags';
import getRandomKey from './tools/getRandomKey';
import AnswerButtons from './components/AnswerButtons';

function App() {
  const [flagDisplay, setFlagDisplay] = useState({});
  const [alternatives, setAlternatives] = useState([]);
  const [showCorrectGuess, setShowCorrectGuess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState([false, false, false, false]);

  useEffect(() => {
    setFlagDisplay(getRandomKey(flags));
  }, [])

  useEffect(()=> {
    const altOne = getRandomKey(flags).flagName;
    const altTwo = getRandomKey(flags).flagName;
    const altThree = getRandomKey(flags).flagName;
    const altFour = flagDisplay.flagName;

    const shuffledAlternatives = [altOne, altTwo, altThree, altFour]
    .sort(()=> Math.random() - 0.5);

    setAlternatives(shuffledAlternatives);
    setIsButtonDisabled([false, false, false, false]);
  }, [flagDisplay]);

  return (
    <div className="App">
      <h1>Flag app</h1>
      <FlagDisplay
        flag={flagDisplay}
        showCorrectGuess={showCorrectGuess}
      />
      <AnswerButtons
        alternatives={ alternatives }
        flagDisplay={ flagDisplay }
        setFlagDisplay={ setFlagDisplay }
        setShowCorrectGuess={ setShowCorrectGuess }
        isButtonDisabled={ isButtonDisabled }
        setIsButtonDisabled={ setIsButtonDisabled }
      />
    </div>
  );
}

export default App;