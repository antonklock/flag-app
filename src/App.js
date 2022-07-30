import './App.css';
import { useState } from 'react';
import ChooseGameType from './components/ChooseGameType';
import GameFourButtons from './components/GameFourButtons';
import TopBar from './components/TopBar';
import { withTheme } from '@emotion/react';

function App() {
  const [gameMode, setGameMode] = useState('none');
  const [flagFilters, setFlagFilters] = useState({type: ['letter', 'number']});

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
      <h1 style={titleStyle}>The Flag Game</h1>
      { gameComponent() }
    </div>
  );
}

const titleStyle = {
  marginTop: '50px',
  color: '#fff',
  fontSize: '5rem',
}

export default App;