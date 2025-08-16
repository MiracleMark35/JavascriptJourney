# What is data-key?
data-* attributes are custom attributes in HTML.
```html
<div data-key="65" class="key">...</div>
<audio data-key="65" src="sounds/clap.wav"></audio>

```
Both <div> and <audio> share the same data-key="65".


👉 Think of data-key as a label that links the key on your keyboard → the <div> → the <audio>.

# <audio> is an HTML audio element.

It has a src = path to the sound file.

You never see it on screen, but JavaScript can .play() it when you press a key.

# What is window.addEventListener?

```javascript
window.addEventListener('keydown', Playing);

```

window = the browser window.

.addEventListener(event, function) = "When this event happens, run this function". 

keydown = event triggered when you press a keyboard key.

Playing = the function that runs.

# What is document.querySelector?

It finds one element in the HTML that matches a CSS selector.
```javascript
document.querySelector('.key') // finds first <div class="key">
document.querySelector('audio[data-key="65"]') // finds <audio data-key="65">
```

```javascript
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //It means: “Find the <audio> where data-key="65".”
```

# What is happening here?
```javascript
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
   key.addEventListener('transitionend', RemoveTransition);
})
```

document.querySelectorAll('.key') = find all divs with class "key". Divsss

.forEach = loop through each of them. I know 

.addEventListener('transitionend', RemoveTransition) = // Event, and function

“When the CSS animation (transform) ends, call RemoveTransition.”

RemoveTransition removes "playing" class so the glow goes away.

# What is addEventListener generally?

click → runs when you click something.

keydown → runs when a key is pressed.

transitionend → runs when a CSS animation finished

New concepts today:
- data-* attributes
- <kbd> tag
- querySelector / querySelectorAll
- addEventListener
- transitionend event
- classList.add/remove
