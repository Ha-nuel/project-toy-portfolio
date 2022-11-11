import { useState, useRef } from 'react';

export default function useTimer(time: number) {
  const [timeIsOver, setTimeIsOver] = useState(false);
  const timerRef = useRef<number>(0);

  const startTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = 0;
      return;
    }

    timerRef.current = setTimeout(() => {
      setTimeIsOver(true);
    }, time);
  };

  return { startTimer, timeIsOver };
}
