const day = document.getElementById("day");
const timeUTC = document.getElementById("time");
const date = new Date();
var dayValue = date.toLocaleString("en-us",{
    weekday:"long"
});
var timeUTCValue = date.getUTCMilliseconds();
day.innerHTML=dayValue;
timeUTC.innerHTML=timeUTCValue;