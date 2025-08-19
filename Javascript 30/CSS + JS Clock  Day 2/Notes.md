```css
html {
  background: #018DED url(https://unsplash.it/1500/1000?image=881&blur=5);
  background-size: cover;
  font-family: 'helvetica neue';
  text-align: center;
  font-size: 10px;
}
```
background-size: cover → makes sure the image always fills the screen.
text-align: center; → Centers inline text content horizontally.
font-size: 10px; → Sets a base font size. Other rem values will be based on this.

```css
body {
  margin: 0;
  font-size: 2rem;
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
}
```
margin: 0; → Removes default browser margins.

font-size: 2rem; → Makes text (if any) bigger (2 × 10px = 20px).

display: flex; → Uses Flexbox layout for easy centering.

flex: 1; → Tells body to expand to fill space.

min-height: 100vh; → Makes sure body is at least full screen height.


align-items: center; → Vertically centers the .clock div inside the page.
What it does: Vertically centers flex children.

Since <body> is display: flex;, the .clock is its child → so the .clock is vertically centered on the screen.

If you had multiple divs side by side, they’d all be vertically aligned along the center line.

# ⏰ Clock Container
```css
.clock {
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow:
    0 0 0 4px rgba(0,0,0,0.1),
    inset 0 0 0 3px #EFEFEF,
    inset 0 0 10px black,
    0 0 10px rgba(0,0,0,0.2);
}
```

width / height: 30rem; → The clock face is a circle, about 300px wide/tall (since 1rem = 10px).

border: 20px solid white; → Thick white border = the rim of the clock.

border-radius: 50%; → Makes it a perfect circle.

margin: 50px auto; → Centers the clock horizontally with spacing above/below.

position: relative; → Needed because the clock hands (absolute positioned) will be placed relative to this.
position: relative;

# What is position?
In CSS, position controls how elements are placed:

static (default): normal document flow.

relative: positioned relative to its normal place.

absolute: positioned relative to the nearest parent with position: relative.

fixed: relative to the viewport.

sticky: switches between relative and fixed based on scroll.

In your case:
.clock is relative, so the .hand (absolute) uses it as the reference point. That’s why the hands stay inside the clock circle.

padding: 2rem; → Adds spacing inside.

box-shadow: → Adds shadows/glow to make the clock look more 3D:

0 0 0 4px rgba(0,0,0,0.1) → faint outline.

inset 0 0 0 3px #EFEFEF → inner light border.

inset 0 0 10px black → dark inner shading.

0 0 10px rgba(0,0,0,0.2) → outer shadow for depth.

# 🕑 Clock Face
```css
.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /* account for the height of the clock hands */
}
```

position: relative; → So clock hands can be positioned inside.

width/height: 100%; → Fills the .clock circle.

transform: translateY(-3px); → Nudges the entire face upward slightly to compensate for the thickness of the hands, so they look perfectly centered.

# ➖ Clock Hands
```css
.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
```

width: 50%; → Each hand extends halfway across the clock.

height: 6px; → Thickness of the hand.

background: black; → Hand color.

position: absolute; → Positioned relative to the .clock-face.

top: 50%; → Vertically centers the hands in the middle.

transform-origin: 100%; → The pivot point is at the far right end of the hand → so it rotates like a real clock hand.

transform: rotate(90deg); → Starting position = pointing straight right (3 o’clock).

transition: all 0.05s; → Smooth animation when updating.

transition-timing-function: cubic-bezier(...) → Gives the motion a bit of bounce/natural feel.

# ⚡ So to summarize:

relative + absolute = parent/child positioning system.

transform-origin = defines the pivot point of rotation.
  
translateY(-3px) = little adjustment for centering.

cubic-bezier = makes the movement feel less robotic and more Cleaner