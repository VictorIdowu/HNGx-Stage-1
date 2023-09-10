"use strict";

const time = document.querySelector(".time"),
  day = document.querySelector(".day");

const currentDate = new Date();

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

const utc = () => {
  const utcTime = Date.now();

  time.textContent = utcTime;
};

setInterval(() => {
  utc();
}, 1);
