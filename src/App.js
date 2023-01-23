import { useState, useEffect } from "react";

function App() {
  const [maxNumber, setMaxNumber] = useState(5);
  const [mypick, setMyPick] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const gameResult = randomNumber === parseInt(mypick) ? "win" : "lose";

  useEffect(() => {
    setIsPlay(false);
  }, [mypick, maxNumber]);

  const onPlay = () => {
    if (mypick) setIsPlay(true);
    setRandomNumber(Math.floor(Math.random() * maxNumber));
  };

  return (
    <>
      <h1>Random Number Game</h1>
      <h3>Generate a number between 0 and {maxNumber}</h3>
      <datalist id="number">
        <option value="50" />
        <option value="100" />
        <option value="150" />
        <option value="200" />
      </datalist>
      <input
        list="number"
        type="range"
        min="5"
        max="200"
        value={maxNumber}
        step="5"
        onChange={(e) => {
          setMaxNumber(e.target.value);
        }}
      />
      <br />
      <span>Guess the number:</span>
      <input
        style={{ width: "70px", margin: "0 5px" }}
        type="number"
        value={mypick}
        onChange={(e) => {
          setMyPick(e.target.value);
        }}
      ></input>
      <button onClick={() => onPlay()}>Play!</button>
      {isPlay ? (
        <>
          <div>
            You choose: {mypick}, the machine choose: {randomNumber}
          </div>
          <b>You {gameResult}!</b>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
