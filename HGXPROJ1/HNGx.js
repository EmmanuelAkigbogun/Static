const day = document.getElementById("day");
const timeUTC = document.getElementById("time");
const date = new Date();
var dayValue = date.toLocaleString("en-us",{
    weekday:"long"
});
var timeUTCValue = date.gettime();
day.innerHTML=dayValue;
timeUTC.innerHTML=timeUTCValue;