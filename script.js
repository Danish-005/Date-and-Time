let headone = document.querySelector("h1");
let headtwo = document.querySelector("h2");
let dayarr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let montharr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(updateTimeInHtml, 1000);

function updateTimeInHtml() {
  let currentDate = new Date();
  let hours = prependZeroForSingleDigitNumber(currentDate.getHours() % 12);
  let minutes = prependZeroForSingleDigitNumber(currentDate.getMinutes());
  let seconds = prependZeroForSingleDigitNumber(currentDate.getSeconds());
  let amPm = currentDate.getHours() >= 12 ? "PM" : "AM";
  let timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  let nameOfDay = getNameOfDay(currentDate.getDay());
  let date = prependZeroForSingleDigitNumber(currentDate.getDate());
  let nameOfMonth = getNameOfMonth(currentDate.getMonth());
  let year = currentDate.getFullYear();
  let dateString = `${nameOfDay}, ${nameOfMonth}  ${date}  ${year}`;
  headone.textContent = timeString;
  headtwo.textContent = dateString;
}

function prependZeroForSingleDigitNumber(number) {
  let updatedNumber = `${number}`;
  if (number <= 9) {
    updatedNumber = `0${number}`;
  }
  return updatedNumber;
}

function getNameOfDay(day) {
  return dayarr[day];
}

function getNameOfMonth(month) {
  return montharr[month];
}
