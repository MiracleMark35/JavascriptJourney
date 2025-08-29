// Get Our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const togglePlay = player.querySelector('.toggle');
const player__sliders = player.querySelectorAll('.player__slider');
const skipper = player.querySelectorAll('[data-skip]');


// Build Out Functions

function togglePlayer(){
    const Method = video.paused ? 'play' : 'pause'; // so dapat pause una kay pause man ang vid sa unahan
   //  video.pause();
    video[Method](); // method dayun
}

function UpdateButton(){
    const button = video.paused ? '►' : '❚ ❚';   // so dapat pause una kay pause man ang vid sa unahan

    togglePlay.textContent = button // update the textCOntnet Of the BUtton

}

function range(){
console.log(this.name) // name
console.log(this.value) // value
video[this.name] = this.value;  
}


function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function skip(){
    console.log(this.dataset.skip) // the console log na ang skip value
    // skipper.value += this.dataset.skip;
   // console.log(skipper.value)
   video.currentTime += parseFloat(this.dataset.skip) // so dapat video diay
}

function scrub(e){
    console.log(e)
    console.log(e.offsetX)
    console.log(progress.offsetWidth)
    console.log(video.duration)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log(scrubTime)
    video.currentTime = scrubTime
}


// Hook Up with Event Listeners

video.addEventListener('click', togglePlayer);

togglePlay.addEventListener('click', UpdateButton);
video.addEventListener('click', UpdateButton); // correct
video.addEventListener('timeupdate', handleProgress) //correct

skipper.forEach( (button) => {
    button.addEventListener('click', skip)
})

// video.addEventListener('ended ', () => { video.play()})

player__sliders.forEach( (element) => {
 element.addEventListener('change', range);
})

let mousemove = false;

progress.addEventListener('click', scrub); 
progress.addEventListener('mousemove', (e) =>  mousemove && scrub(e) )
progress.addEventListener('mousedown', () => mousemove = true)
progress.addEventListener('mouseup', () => mousemove = false)