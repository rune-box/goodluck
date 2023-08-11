import { useState, useEffect } from "react";
export function useCountdown(intervalInSeconds) {//mins
  const [secs, decrement] = useState(intervalInSeconds);
  const [progress, increment] = useState(0);
  useEffect(() => {
    if (secs > 0) {
      const progressLevel = setInterval(() => {
        //increment(progress + 100 / (mins * 60));
        increment(progress / intervalInSeconds);
        decrement(secs - 1);
        //if(secs === 0 && onComplete) { onComplete(); }
      }, 1000);
      return () => clearInterval(progressLevel);
    }
  }, [progress, secs]);//, mins
  //const min = parseInt(secs / 60, 10);
  const sec = parseInt(secs % 60, 10);
  //const minutes = min < 10 ? "0" + min : min;
  const seconds = sec < 10 ? "0" + sec : sec;
  return [progress, seconds];//minutes, 
}