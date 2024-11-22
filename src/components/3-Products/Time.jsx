
import { useEffect, useState } from 'react';
import Title from '../Title/Title';

const Time = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
  });

  useEffect(() => {
    // Set The Time I Want
      const target = new Date(new Date("Nov 31,2024,23:59:59").getTime());
      setTargetDate(target);

      const calculateTimeLeft = () => {
        // Get Date Now
          const now = new Date();
          // Difference between time I want and time now
          const difference = target - now;
          let timeLeft = {};

          if (difference > 0) {
            // Get the time units
              timeLeft = {
                  days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                  hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                  minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                  seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
              };
          } else {
              timeLeft = {
                  days: '00',
                  hours: '00',
                  minutes: '00',
                  seconds: '00',
              };
          }

          return timeLeft;
      };

      const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
  }, []);

  const units = [
      { label: 'Days', value: 'days' },
      { label: 'Hours', value: 'hours' },
      { label: 'Minutes', value: 'minutes' },
      { label: 'Seconds', value: 'seconds' },
  ];

  if (!targetDate) {
      return ;
  }

  return (
    <>
    <section className='flex flex-col md:flex-row md:gap-12'>
      <Title title={"Flash Sales"} text={"Today’s"}/>
      <div className="flex lg:flex-row flex-col lg:items-end items-start lg:gap-20 gap-4 mt-8">
        <div className="flex gap-4 items-center ">
          {units.map((unit) => (
              <div key={unit.label}>
                    <span className="block text-sm font-medium mb-2">{unit.label}</span>
                    <span className="text-3xl md:text-5xl font-semibold flex items-center gap-4">
                        {timeLeft[unit.value]}
                        <span className='text-3xl text-lightRed'>
                            {unit.value !== 'seconds' && ':'}
                        </span>
                    </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  </>
  );
};
export default Time