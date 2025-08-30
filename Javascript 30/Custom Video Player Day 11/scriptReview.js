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
    video[Method](); // method  nowww
}

function UpdateButton(){
    const button = video.paused ? '►' : '❚ ❚';   // so dapat pause una kay pause man ang vid sa unahan

    togglePlay.textContent = button // update the textCOntnet Of the BUtton

}

function range(){
console.log(this.name) // name
console.log(this.value) // value
video[this.name] = this.value;  // update whatever is the value of it
                                // e.g like volume or playback
}


function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100; // calculate the progress bar
    progressBar.style.flexBasis = `${percent}%`; // set the style
}
function skip(){
    console.log(this.dataset.skip) // the console log na ang skip value
    // skipper.value += this.dataset.skip;
   // console.log(skipper.value)
   video.currentTime += parseFloat(this.dataset.skip) // so dapat video diay
                                //the string value stored in this.dataset.skip into a floating-point number.
}

function scrub(e){
    // console.log(e)
   //  console.log(e.offsetX)
    // console.log(progress.offsetWidth)
  //   console.log(video.duration)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; // make a scrub time
    console.log(scrubTime) 
    video.currentTime = scrubTime // set current to scrub time
}


// Hook Up with Event Listeners

video.addEventListener('click', togglePlayer);

togglePlay.addEventListener('click', UpdateButton);

video.addEventListener('click', UpdateButton); // correct

video.addEventListener('timeupdate', handleProgress) //correct
                // The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
skipper.forEach( (button) => { // for each button we listen to clicks
    button.addEventListener('click', skip)
})

// video.addEventListener('ended ', () => { video.play()})

player__sliders.forEach( (element) => {
 element.addEventListener('change', range);
})

let mousemove = false; // make it false


// Click + drag to scrub
progress.addEventListener('click', scrub);  // Single click to jump
progress.addEventListener('mousemove', (e) => { if(mousemove){ scrub(e)}} ) // mousemove → only calls scrub(e) if mousemove === true.
progress.addEventListener('mousedown', () => mousemove = true) // set mousemove = true (user is dragging).
progress.addEventListener('mouseup', () => mousemove = false) // Set back to false (dragging stops).