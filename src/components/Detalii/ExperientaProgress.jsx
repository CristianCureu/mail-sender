import { useEffect, useState } from "react";

function ExperientaProgress({ completed, time, random = 0.6, plus = false }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = random * 10;
        return Math.min(oldProgress + diff, completed);
      });
    }, time);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>{`${parseInt(progress)}${plus ? "+" : ""}`}</div>;
}

export default ExperientaProgress;
