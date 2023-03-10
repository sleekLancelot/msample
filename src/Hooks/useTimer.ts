import { useState, useEffect } from "react";

const useTimer = (mins = 0.75) => {
  const [secs, decrement] = useState(mins * 60);
  const [progress, increment] = useState(0);

  useEffect(() => {
    if (secs > 0) {
      const progressLevel = setInterval(() => {
        increment(progress + 100 / (mins * 60));
        decrement(secs - 1);
      }, 1000);
      return () => clearInterval(progressLevel);
    }
  }, [progress, secs, mins]);

  const min = parseInt(`${secs / 60}`, 10);
  const sec = parseInt(`${secs % 60}`, 10);
  const minutes = min < 10 ? "0" + min : min;
  const seconds = sec < 10 ? "0" + sec : sec;

  return {
    progress,
    minutes,
    seconds,
  };
}

export {useTimer}