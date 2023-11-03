import React, { useState, useEffect } from 'react';

const Widget = () => {
  const [greet, setGreet] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      displayGreetings(today);
      displayDate(today);
      displayClock(today);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function displayGreetings(today) {
    const hrs = today.getHours();
    let name = '';
    let greet;
    if (hrs < 12) {
      greet = 'Good Morning ' + name;
    } else if (hrs >= 12 && hrs <= 17) {
      greet = 'Good Afternoon ' + name;
    } else if (hrs >= 17 && hrs <= 24) {
      greet = 'Good Evening ' + name;
    }
    setGreet(greet);
  }

  function displayDate(today) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dayName = days[today.getDay()];
    const monthName = monthNames[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
    setDate(dayName + ', ' + monthName + ' ' + date + ', ' + year);
  }

  function displayClock(today) {
    let hour = padZeros(twelveHour(today.getHours()));
    let minutes = padZeros(today.getMinutes());
    let seconds = padZeros(today.getSeconds());
    if (today.getHours() >= 12) {
      seconds += ' pm';
    } else {
      seconds += ' am';
    }

    setHour(hour);
    setMin(minutes);
    setSec(seconds);
  }

  function twelveHour(hour) {
    if (hour > 12) {
      return hour -= 12;
    } else if (hour === 0) {
      return hour = 12;
    } else {
      return hour;
    }
  }

  function padZeros(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

  return (
      <div className="widget w-[98%] lg:w-[30%] h-2/5 lg:h-[65%] bg-white flex justify-center items-center flex-row lg:flex-col rounded-[10px]  border-3 border-black ">
        <div className="greet w-full text-3xl font-bold text-black text-center">
          {greet}
        </div>

        <div className="date w-full font-medium text-black text-2xl text-center">
          {date}
        </div>

        <div className="clock w-full flex justify-center font-medium tex-white text-2xl">
          <div className="time inline-block min-w-20 text-black">
            {hour}
          </div>
          <div className="colon text-black">:</div>
          <div className="time inline-block min-w-20 text-black">
            {min}
          </div>
          <div className="colon text-black">:</div>
          <div className="time inline-block min-w-20 text-black">
            {sec}
          </div>
        </div>
      </div>
  );
};

export default Widget;
