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

}



function skip(){
    console.log(this.dataset.skip) // the console log na ang skip value
    // skipper.value += this.dataset.skip;
   // console.log(skipper.value)
   video.currentTime += parseFloat(this.dataset.skip) // so dapat video diay
}


// Hook Up with Event Listeners

video.addEventListener('click', togglePlayer);
togglePlay.addEventListener('click', UpdateButton);
video.addEventListener('click', UpdateButton);

skipper.forEach( (button) => {
    button.addEventListener('click', skip)
})

video.addEventListener('ended ', () => { video.play()})