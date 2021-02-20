const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYears = '14 April 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate-currentDate )/1000;
    const days = Math.floor(totalseconds/ 3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds%60);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formate(hours);
    minutesEl.innerHTML = formate(mins);
    secondsEl.innerHTML = formate(seconds);


}

function formate(time){
    return time < 10 ? (`0${time}`):time;
}
countdown();

setInterval(countdown, 1000);