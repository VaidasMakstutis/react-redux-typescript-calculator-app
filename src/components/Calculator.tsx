import React, { useReducer, useState } from "react";
import calculatorReducer from "../store/reducers/calculatorReducer";
import { actionAdd, actionDiff, actionMult, actionDiv } from "../store/actions/calculatorActions";

const Calculator = () => {
  const [calculator, calculatorDispatch] = useReducer(calculatorReducer, 0);
  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);

  const sum = () => {
    calculatorDispatch(actionAdd({ d1: d1, d2: d2 }));
  };

  const diff = () => {
    calculatorDispatch(actionDiff({ d1: d1, d2: d2 }));
  };

  const mult = () => {
    calculatorDispatch(actionMult({ d1: d1, d2: d2 }));
  };

  const div = () => {
    calculatorDispatch(actionDiv({ d1: d1, d2: d2 }));
  };

  const handleChangeD1: React.ChangeEventHandler<HTMLInputElement> = e => {
    setD1(parseInt(e.target.value));
  };

  const handleChangeD2: React.ChangeEventHandler<HTMLInputElement> = e => {
    setD2(parseInt(e.target.value));
  };

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginTop: "40px", padding: "20px", border: "1px solid blue", borderRadius: "5px", backgroundColor: "rgb(241, 241, 241)" }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Calculator</h2>
        <div className="input-group mb-2">
          <input type="text" value={d1} onChange={handleChangeD1} />
        </div>
        <div className="input-group mb-2">
          <input type="text" value={d2} onChange={handleChangeD2} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary" onClick={sum}>
            +
          </button>
          <button className="btn btn-primary" onClick={diff}>
            -
          </button>
          <button className="btn btn-primary" onClick={mult}>
            *
          </button>
          <button className="btn btn-primary" onClick={div}>
            /
          </button>
        </div>
        <div style={{ marginTop: "10px", padding: "5px", border: "1px solid black", backgroundColor: "rgb(255, 255, 255)" }}>
          Result: {calculator}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
