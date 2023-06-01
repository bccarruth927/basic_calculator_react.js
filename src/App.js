import './App.css';
//Import the Wrapper Component
import Wrapper from './components/Wrapper';
//Import the Screen Component
import Screen from './components/Screen';
//Import the ButtonBox Component
import ButtonBox from './components/ButtonBox';
//Import the Button Component
import Button from './components/Button';

//Button values array
const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

function App() {
  return (
    <div>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, index) => (
            <Button
              value={btn}
              key={index}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
