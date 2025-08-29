// Get Our Elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const filled = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const range = player.querySelectorAll('.player__slider')
const button = player.querySelectorAll('[data-skip]')


// Build Out Functions


function TogglePlay( ){
    const method = video.paused ? 'play' : 'pause';

    video[method]();
   
}

function skip(){
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)


}

function HandleRange(){
 console.log(this.name)
 console.log(this.value)
 video[this.name] = this.value

}

function HandleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    filled.style.flexBasis = `${percent}%`;
}
function UpdateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function scrub(e) {
    console.log(e)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}
// Hook Up with Event Listeners


video.addEventListener('click', TogglePlay)
video.addEventListener('play', UpdateButton)
video.addEventListener('pause', UpdateButton)
video.addEventListener('timeupdate', HandleProgress)
toggle.addEventListener('click', TogglePlay)

button.forEach(element => {
    element.addEventListener('click', skip)
});

range.forEach( element => {
    element.addEventListener('change', HandleRange)
})


let mousedown = false

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)