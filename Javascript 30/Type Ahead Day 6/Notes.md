```javascript
.then(data => cities.push(...data))
```
data = the array of city objects fetched from the JSON file.

cities.push(...data) = pushes all items from data into cities.

# ... is the spread operator, which expands an array into individual elements.

Without ...: cities.push(data) → pushes the whole array as one element.

With ...: cities.push(...data) → pushes each city object individually.

# Why use map here?
```javascript
const html = matchArray.map(element => { ... }).join('')
```

.map() takes an array (matchArray) and transforms each element into a new value (in this case, an HTML string for <li>).

The result is an array of HTML strings.

# We then join them together into one big string.

✔ You could use forEach, but .map() is better when you want to transform an array into another array (or string).

#  Why do we create a regex again?
```javascript
const regex = new RegExp(this.value , 'gi')

```
this.value = what the user typed.

We create a regex so we can highlight matches inside city/state names.

g = global (find all matches).

i = case-insensitive (ignore uppercase/lowercase).

# Explain .replace()

```javascript
const cityName = element.city.replace(regex , `<span class="hl">${this.value}</span>`)

```
.replace(regex, something) finds text matching regex and replaces it.

# Why .join('') here?
```javascript
}).join('')
```
After .map(), we get an array like:

```javascript
["<li>...</li>", "<li>...</li>", "<li>...</li>"]
```
# .join('') combines them into one string:

```javascript
"<li>...</li><li>...</li><li>...</li>"
```
If you don’t join, you’d insert an array, not valid HTML.

# What is innerHTML?

innerHTML = property of a DOM element that sets or gets its HTML content.

Here, it replaces <ul class="suggestions"> content with our new <li> results.

# What are "change" and "keyup"?
```javascript

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
```

change → runs when the input loses focus (you type something, then click away or press Enter).

keyup → runs every time you release a key (live search as you type).

👉 That’s why both are used:

keyup = for instant live results.

change = catches the case where you finish typing then leave the input.


# Mistakes
Forget the element.cities instead of the city
forgot to  Move the template literal to the same line as return: