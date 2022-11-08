import { useState, useRef } from 'react';

export default function useTimer(time) {
  const [timeIsOver, setTimeIsOver] = useState(false);
  const timerRef = useRef();

  const startTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      return;
    }

    timerRef.current = setTimeout(() => {
      setTimeIsOver(true);
    }, time);
  };

  return { startTimer, timeIsOver };
}
