import './App.css';
import { useState } from 'react';
import ChooseGameType from './components/ChooseGameType';
import GameFourButtons from './components/GameFourButtons';
import TopBar from './components/TopBar';

function App() {
  const [gameMode, setGameMode] = useState('none');
  const [flagFilters, setFlagFilters] = useState({type: ['letter', 'number', 'sweLetter']});

  const gameComponent = () => {
    switch (gameMode){
      case 'FourAlternatives' :
        return <GameFourButtons
          setGameMode={ setGameMode }
          flagFilters={ flagFilters }
        />
        
      default :
        return <ChooseGameType setGameMode={ setGameMode } setFlagFilters={ setFlagFilters } flagFilters={ flagFilters } />
    }
  }

  return (
    <div className="App">
      <TopBar />
      <h1>Flag app</h1>
      { gameComponent() }
    </div>
  );
}

export default App;