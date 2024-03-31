const monthElem = document.getElementById("month");
const dayElem = document.getElementById("day");
const dayNumElem = document.getElementById("day-number");
const yearElem = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthElem.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});
dayElem.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});
dayNumElem.innerHTML = date.getDate();
yearElem.innerHTML = date.getFullYear();
