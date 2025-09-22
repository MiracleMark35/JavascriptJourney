const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');          // ctx is like your paintbrush for the canvas.
const strip = document.querySelector('.strip'); // This is where your taken photos will appear.
const snap = document.querySelector('.snap'); // the sound

function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio:false}) // returns a promis
  .then(LocalMediaStream => {
    console.log(LocalMediaStream); // the data
    // old video.src = window.URL.createObjectURL(LocalMediaStream);
    video.srcObject = LocalMediaStream;
    video.play();
  }).catch( e => {
    print( `OH NOO ERROR ` + e);
  })
}

function paintCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height); // Copies the current frame of the video and 
                                               // draws it onto the canvas at (0,0) with width/height.

    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

  // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

     pixels = greenScreen(pixels);
    // put them back
    //After messing with pixel data (colors, transparency, effects), 
    // this redraws the changed pixels onto the canvas.
    ctx.putImageData(pixels, 0, 0);
  }, 16); // Runs the code inside every 16 milliseconds (like a movie frame).
}
function takePhoto(){

    // play the sound
    snap.currentTime = 0;
    snap.play();

    //take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
   //  console.log(data); // long DATA STRING
   const link = document.createElement('a');
   link.href = data;  // Setting link.href = data makes the link download/show that image.
   link.setAttribute('download', 'handsome'); // Tells the browser: when clicked, download this file.
   link.innerHTML = `<img src="${data}" alt="Handome Man" />`
                             // the image 
   strip.insertBefore(link, strip.firstChild); //Puts the new photo (link) at the start of .strip.
                                               //This makes the latest picture show first.

 }

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for ( i = 0; i < pixels.data.length; i += 4) {
   red = pixels.data[i + 0];
   green = pixels.data[i + 1];
   blue = pixels.data[i + 2];
   alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}


 // The way that filter works is that you get the pixels out of the canvas and you can mess with them in RGB values
getVideo();

video.addEventListener('canplay', paintCanvas); // "canplay" event = fires when the video has enough data to start playing.
