import React, { useState, useRef } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPuased, setIsPaused] = useState(false);
  const timer = useRef(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCounter((count) => {
        return (count += 1);
      });
    }, 1000);
  };

  const handleStartTimer = () => {
    if (isStarted) {
      if (isPuased) {
        setIsPaused(false);
        startTimer();
      } else {
        setIsPaused(true);
        if (timer.current) clearInterval(timer.current);
      }
    } else {
      setIsStarted(true);
      if (timer.current) clearInterval(timer.current);
      startTimer();
    }
  };

  const reset = () => {
    setCounter(0);
    setIsStarted(false);
    setIsPaused(false);
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        height: '100vh',
      }}
    >
      <div style={{ fontSize: '80px', fontWeight: '900' }}>{counter}</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={handleStartTimer}>
          {isStarted ? (isPuased ? 'Resume' : 'Pause') : 'Start'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
