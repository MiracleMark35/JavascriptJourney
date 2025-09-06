# 1. Canvas Context
```javascript
const ctx = canvas.getContext('2d');
```
canvas.getContext('2d') gives you tools to draw on the <canvas> element (shapes, images, pixels, etc.).

ctx is like your paintbrush for the canvas.

# 2. Photo Strip
```javascript
const strip = document.querySelector('.strip');
```
Grabs the <div class="strip"></div> where snapshots will be added.

This is where your taken photos will appear.

# 3. Accessing Webcam
```javascript
navigator.mediaDevices.getUserMedia({video: true, audio:false})
```
navigator.mediaDevices.getUserMedia() asks the browser for permission to use the webcam/mic.

{video: true, audio: false} → use video, but don’t capture audio. 

# 4. Video Source
```javascript
video.srcObject = LocalMediaStream;
```

Takes the webcam stream (LocalMediaStream) and feeds it into the <video> element so it plays live.

# 5. Repeated Drawing
```javascript
setInterval(() => { ... }, 16);
```

Title: Loop Every 16ms (~60fps)

Runs the code inside every 16 milliseconds (like a movie frame).

Keeps updating the canvas with new video frames.

# 6. Draw Video on Canvas
```javascript
ctx.drawImage(video, 0, 0, width, height);
```

Copies the current frame of the video and draws it onto the canvas at (0,0) with width/height.

# 7. Put Pixel Data Back
```javascript
ctx.putImageData(pixels, 0, 0);
```
Title: Update Canvas Pixels

After messing with pixel data (colors, transparency, effects), this redraws the changed pixels onto the canvas.

# 8. Photo Data URL
```javascript
link.href = data;
```
Title: Link Points to Image Data

data is a base64 string version of the photo (canvas.toDataURL('image/jpeg')).

Setting link.href = data makes the link download/show that image.

# 9. Download Attribute
```javascript
link.setAttribute('download', 'handsome');
```

Tells the browser: when clicked, download this file.

'handsome' is the filename (e.g. handsome.jpg).

# 10. Insert Photo
```javascript
strip.insertBefore(link, strip.firstChild);
```

Title: Add Snapshot to Top of Strip

Puts the new photo (link) at the start of .strip.

This makes the latest picture show first.

# 11. Start Painting When Ready
```javascript
video.addEventListener('canplay', paintCanvas);
```
"canplay" event = fires when the video has enough data to start playing.

Calls paintCanvas() to start drawing frames only when the webcam is ready.