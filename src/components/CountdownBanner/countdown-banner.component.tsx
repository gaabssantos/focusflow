import { useState, useEffect } from 'react';

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const COUNTDOWN_DURATION = 2 * 60 * 60 * 1000;

  useEffect(() => {
    const calculateTimeLeft = () => {
      let endTime = localStorage.getItem('presaleEndTime');

      if (!endTime || new Date().getTime() > parseInt(endTime)) {
        const now = new Date();
        const end = new Date(now.getTime() + COUNTDOWN_DURATION);
        endTime = end.getTime().toString();
        localStorage.setItem('presaleEndTime', endTime);
      }

      const now = new Date().getTime();
      const difference = parseInt(endTime) - now;

      if (difference <= 0) {
        const newEnd = new Date().getTime() + COUNTDOWN_DURATION;
        localStorage.setItem('presaleEndTime', newEnd.toString());

        return {
          hours: Math.floor(COUNTDOWN_DURATION / (1000 * 60 * 60)),
          minutes: Math.floor(
            (COUNTDOWN_DURATION % (1000 * 60 * 60)) / (1000 * 60),
          ),
          seconds: Math.floor((COUNTDOWN_DURATION % (1000 * 60)) / 1000),
        };
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div
      style={{
        backgroundColor: '#ff0000',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        zIndex: '999',
        position: 'fixed',
        top: '80px',
      }}
    >
      FALTAM {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
      {formatNumber(timeLeft.seconds)} PARA ACABAR A PRÉ-VENDA!
    </div>
  );
}

export default CountdownBanner;
