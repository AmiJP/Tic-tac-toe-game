import { useState } from "react";

export const Gameboard = () => {
  const initialValue = [null, null, null, null, null, null, null, null, null];

  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [value, setValue] = useState(initialValue);
  const [isNextIsX, setIsNextIsX] = useState(true);

  function diclareWinner(arr) {
    for (let i = 0; i < winner.length; i++) {
      const p1 = winner[i][0];
      const p2 = winner[i][1];
      const p3 = winner[i][2];

      if (arr[p1] == arr[p2] && arr[p2] == arr[p3] && arr[p1] != null) {
        return `Result : ${arr[p1]} is Winner`;
      }
    }
  }

  function handleClick(i) {
    const arr = value;
    isNextIsX ? (arr[i] = "X") : (arr[i] = "0");
    setValue([...arr]);
    setIsNextIsX(!isNextIsX);
    diclareWinner(arr);
  }

  const result = diclareWinner(value);

  return (
    <div>
      {result && <h3>{result}</h3>}
      <button onClick={() => handleClick(0)}>{value[0]}</button>
      <button onClick={() => handleClick(1)}>{value[1]}</button>
      <button onClick={() => handleClick(2)}>{value[2]}</button>
      <br></br>
      <button onClick={() => handleClick(3)}>{value[3]}</button>
      <button onClick={() => handleClick(4)}>{value[4]}</button>
      <button onClick={() => handleClick(5)}>{value[5]}</button>
      <br></br>
      <button onClick={() => handleClick(6)}>{value[6]}</button>
      <button onClick={() => handleClick(7)}>{value[7]}</button>
      <button onClick={() => handleClick(8)}>{value[8]}</button>
    </div>
  );
};
