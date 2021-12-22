import { useState, useEffect } from 'react';
import './App.css';
import FlagDisplay from './components/FlagDisplay';
import flags from './tools/flags';
import getRandomKey from './tools/getRandomKey';
import AnswerButtons from './components/AnswerButtons';

function App() {
  const [flagDisplay, setFlagDisplay] = useState({});
  const [alternatives, setAlternatives] = useState([]);

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
  }, [flagDisplay]);

  return (
    <div className="App">
      <h1>Flag app</h1>
      <FlagDisplay flag={flagDisplay} />
      <AnswerButtons
        alternatives={alternatives}
        flagDisplay={flagDisplay}
        setFlagDisplay={setFlagDisplay}
      />
    </div>
  );
}

export default App;