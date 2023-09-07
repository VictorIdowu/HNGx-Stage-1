"use strict";

const time = document.querySelector(".time"),
  day = document.querySelector(".day");

const dayAndTime = () => {
  // Set utc time
  const currentDate = new Date();
  const utcHours = currentDate.getUTCHours();
  const utcMinutes = currentDate.getUTCMinutes();
  const utcSeconds = currentDate.getUTCSeconds();

  time.textContent = `${utcHours}:${utcMinutes}:${utcSeconds}`;

  // Set day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  day.textContent = daysOfWeek[currentDate.getDay()];
};

setInterval(() => {
  dayAndTime();
}, 1000);
