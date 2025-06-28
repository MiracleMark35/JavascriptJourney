
## App.jsx

```javascript
names.map((name, index) => (...))
```
It loops over each name in names
For each item:
name = the current name in the array (e.g., 'JOHN', 'JANE', 'DOE')
index = the position of that name in the array (e.g., 0, 1, 2)
```javascript
<li key={index}> {name} </li>
```
key={index} is needed by React to uniquely identify each <li> in the list (so React can track which item changed, added, or removed).

##In React (JSX), we put it inside curly braces {} because:

Anything inside {} is treated as JavaScript code

JSX allows us to write expressions (something that returns a value) inside {}.

## Wrapper Components

