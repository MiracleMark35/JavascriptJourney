# Speech Synthesis
```javascript
const msg = new SpeechSynthesisUtterance();
```

This creates an object msg which represents the text you want to be spoken.

Think of it as a "speech message" that you pass to the computer’s built-in speech system.
# Variables for voices and DOM elements
```javascript
let voices = []; // voices: will hold the list of available voices on the system.

const voicesDropdown = document.querySelector('[name="voice"]');
//voicesDropdown: refers to the <select> dropdown menu (where voices are listed).

const options = document.querySelectorAll('[type="range"], [name="text"]');
//options: selects all <input type="range"> sliders (rate, pitch) and the <textarea>.

const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
```
# Setting default text
```javascript
msg.text = document.querySelector('[name="text"]').value;

// This takes the initial text inside the <textarea> (→ “Hello! I love JavaScript 👍”) and stores it as the message to be spoken.
```