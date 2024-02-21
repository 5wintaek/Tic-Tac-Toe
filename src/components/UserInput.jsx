export default function UserInput({onChangeInput, userInput}) {
  // function handleChangeTarget(e) {
  //   handleChange('initInvestment', e.target.value);
  // }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initInvestment} // 초기의 값을 전달
            onChange={(e) => onChangeInput('initInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment} // 초기의 값을 전달
            onChange={(e) => onChangeInput('annualInvestment', e.target.value)}
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
            onChange={(e) => onChangeInput('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration} // 초기의 값을 전달
            onChange={(e) => onChangeInput('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
