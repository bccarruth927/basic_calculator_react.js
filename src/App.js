import './App.css';
//Import the Wrapper Component
import Wrapper from './components/Wrapper';
//Import the Screen Component
import Screen from './components/Screen';

function App() {
  return (
    <div>
      <Wrapper>
        <Screen />
        <h1>App</h1>
      </Wrapper>
    </div>
  );
}

export default App;
