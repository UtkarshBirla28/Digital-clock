

function setTime()
{
    const date = new Date();

let hour = date.getHours();
const meridian = hour>=12?"PM":"Am";
hour=hour%12 ||12;
hour=hour.toString().padStart(2,0)
const minute = date.getMinutes().toString().padStart(2,0);
const second = date.getSeconds().toString().padStart(2,0);

const time = hour+':'+minute+':'+second;

const enterData = document.getElementById("clock");
    enterData.textContent = time;
}
setTime();
setInterval(setTime,1000)