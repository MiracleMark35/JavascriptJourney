```javascript
const items = JSON.parse(localStorage.getItem('item')) || [];
```
localStorage.getItem('item') → retrieves the value stored in localStorage under the key "item".

# LocalStorage only stores strings.

# JSON PARSE
JSON.parse(...) → converts that stored JSON string back into a real JavaScript array/object.

|| [] → means if nothing is stored yet, just start with an empty array.
```javascript
const text = (this.querySelector('[name=item]')).value;
```
```html
<input type="text" name="item" placeholder="Item Name" required>
```

That input has an attribute name="item".

this.querySelector('[name=item]') → means "find the element inside this (the form) that has the attribute name=item".
# CSS selectors

[name=item] → select element where name="item".

.className → select by class.

#idName → select by id.

```javascript
function populateLists(plates = [], plateLists) { ... }
```
plates = [] → this is default parameter.

If you call populateLists() without passing an array, it will automatically use an empty array [] instead of undefined.

```javascript
localStorage.setItem('item', JSON.stringify(items))
```
items is an array of objects, e.g.:
But localStorage can only store strings, not arrays or objects.
JSON.stringify(items) → converts that array into a string:

```javascript
const items = JSON.parse(localStorage.getItem('item')) || [];
```
We parse here because when we retrieve the data back from localStorage, it’s a string.
JSON.parse turns that string back into an array we can work with in JS.


```javascript
function toggleOpen(e) {
  if(!e.target.matches('input')) return;
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('item', JSON.stringify(items));
  populateLists(items, itemsList);
}
```
# Why set it again?
Because we just changed the done property of one item (ticked or unticked a checkbox).
If we don’t save the updated array back to localStorage, the change would be lost when you refresh.
# Why call populateLists again?
Because we want to re-render the UI so it reflects the new state of the checkboxes.

# CSS selector

# Class selector
```css
.button {
  background-color: red;
  color: white;
  padding: 10px;
}
```

# ID selector
```css
#navbar {
  background: black;
  color: white;
}
```
# Attribute selector

```css
input[type="text"] {
  border: 2px solid green;
}
```

# What is Local Storage?

Local Storage is like a tiny database inside your web browser.

It lets you store data (key–value pairs) on the user’s computer.

Data is saved even after the page is refreshed or the browser is closed.

Only strings can be stored, so objects/arrays need to be converted using JSON.stringify() and read back with JSON.parse().
```javascript
// Save data
localStorage.setItem("username", "MiracleMark");

// Get data
let name = localStorage.getItem("username");
console.log(name); // "MiracleMark"

// Remove data
localStorage.removeItem("username");

// Clear all storage
localStorage.clear();
```

Yes 👍 all values in localStorage are stored as strings — no matter if you save a number, boolean, or even an object.