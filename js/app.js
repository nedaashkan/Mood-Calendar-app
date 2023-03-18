let calendarEl = document.getElementById("calander");
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function displayCalendar() {
  for (let i = 0; i < 35; i++) {
    let day = document.createElement("div");
    day.classList.add("day");
    let dayText = document.createElement("p");
    dayText.classList.add("day-text");
    dayText.innerText = dayNames[i % 7];
    let dayNumber = document.createElement("p");
    dayNumber.classList.add("day-number");
    let eventName = document.createElement("small");
    eventName.classList.add("event-name");
    calendarEl.appendChild(day);
    day.appendChild(dayText);
    day.appendChild(dayNumber);
    day.appendChild(eventName);
  }
}

// today date
// Saturday, March 18, 2023.
// 2023/3/18
// console log should give us index of 2 for month and 6 for day

// 1 : the month we are right now => March
// 2:the day we are right now => Saturday
// 3: the date  we are right now => 18
//4: the year  we are right now => 2023
//5: the first day of this month we need day name and date => 1 march is Wednesday
// var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
//6: the last day of this month we need day name and date => 31 march is Friday
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let current = new Date();
let currentYear = current.getFullYear();
let currentMouth = current.getMonth();
function updateCalendar(currentMouth, currentYear) {
  let dayElements = document.querySelectorAll(".day");
  let now = new Date();
  now.setMonth(currentMouth);
  now.setFullYear(currentYear);
  let dayIndex = now.getDay();
  let dayName = dayNames[dayIndex];
  let date = now.getDate();
  let year = now.getFullYear();
  let monthIndex = now.getMonth();
  let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  let firstDayMouth = firstDay.getDate();
  // 1
  let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  let lastDateMouth = lastDay.getDate();
  // 31
  let monthName = monthNames[monthIndex];
  let today = `${dayName} - ${monthName} - ${date}- ${year}`;
  // today Sat, March 18, 2023.
  let dayCounter = 1;
  for (let i = 0; i < dayElements.length; i++) {
    let day = dayElements[i];
    let dayNumber = day.querySelector(".day-number");
    if (i >= dayIndex && dayCounter <= lastDateMouth) {
      dayNumber.innerText = dayCounter;
      dayCounter++;
    }
  }
}

displayCalendar();
updateCalendar();

function dates() {
  let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // today Saturday, March 18, 2023.
  let now = new Date();
  console.log(now);
  let month = now.getMonth();
  console.log(month);
  console.log(monthsName[month]);
  let day = now.getDay();
  console.log(day);
  console.log(daysName[day]);
  let date = now.getDate();
  console.log(date);
  let year = now.getFullYear();
  console.log(year);
  // 1 march is Wednesday first day of this month
  console.log("this is first day and date of this month");

  let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  console.log(firstDay);
  let firstDayOfMonth = firstDay.getDay();
  console.log(firstDayOfMonth);
  console.log(daysName[firstDayOfMonth]);
  // if you put 1 it give us first day of this month
  // if you put 0 it give you last day of perries month
  console.log("this is last day and date of this month");
  // 31 march is Friday last day of this month
  let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  console.log(lastDay);
  // in here we going to +1 so we get last date and day of this month
  let lastDayThisMonth = lastDay.getDay();
  console.log(lastDayThisMonth);
  console.log(daysName[lastDayThisMonth]);
  let lastDateThisMouth = lastDay.getDate();
  console.log(lastDateThisMouth);
}
// dates();








function date(){

}
date();