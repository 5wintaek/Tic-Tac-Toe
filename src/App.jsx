import {useState} from 'react';
import Header from './components/Headers';
import Result from './components/Result';
import UserInput from './components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // inputIdentifer = userInput 중 하나라 string으로 매개변수 전달해야함
  function handleChange(inputIdentifer, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifer]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Result input={userInput} />
    </>
  );
}

export default App;
