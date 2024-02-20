import {useState} from 'react';

export default function UserInput() {
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

  function handleChangeTarget(e) {
    handleChange('initInvestment', e.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initInvestment} // 초기의 값을 전달
            onChange={handleChangeTarget}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment} // 초기의 값을 전달
            onChange={(e) => handleChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn} // 초기의 값을 전달
            onChange={(e) => handleChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration} // 초기의 값을 전달
            onChange={(e) => handleChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
