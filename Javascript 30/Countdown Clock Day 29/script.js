
let countdown;
const time_left = document.querySelector('.display__time-left')
const end_time = document.querySelector('.display__end-time')
// const timers = document.querySelector('.timer__controls')
// const control = timers.querySelectorAll('[data-time]')
const buttons = document.querySelectorAll('[data-time]')
const form = document.getElementById('custom')

function timer(seconds){
    clearInterval(countdown)
    const now = Date.now();
   // console.log(now)
    const then = now + seconds * 1000;
   // console.log({ now, then})

    displayTime(seconds)
    endTime(then)
    countdown = setInterval( ()=>{
        
        const secondsLeft = Math.round((then - Date.now()) / 1000);
    

        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft)
    }, 1000)
    }

    const displayTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

        document.title = display;
        time_left.textContent = display;

    }

//timer(3000)

function endTime(timeStamp){
    const end = new Date(timeStamp);
    const hours = end.getHours()
    const minutes = end.getMinutes()
    end_time.textContent = `Be Back At ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes}`;

}


buttons.forEach( time => {
    time.addEventListener('click', timeAdd)
})

form.addEventListener('submit', ( function(e) {
    e.preventDefault();
    const mins =  this.minutes.value;
    console.log(mins);
    timer(mins * 60)
    this.reset();
}))

function timeAdd(){
    const seconds  = parseInt(this.dataset.time);
    timer(seconds)
}
//new Date(1759642658813)
//Sun Oct 05 2025 13:37:38 GMT+0800 (Philippine Standard Time)