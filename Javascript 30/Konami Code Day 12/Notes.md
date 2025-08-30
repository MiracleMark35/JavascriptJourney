```javascript
press.splice(-secretCode.length - 1, press.length - secretCode.length)

```


# 1. splice(start, deleteCount)

splice modifies the array in place.

start: where to begin removing elements.

deleteCount: how many elements to remove.

# 2. Values plugged in

secretCode.length = 4 ("mark" has 4 letters).

-secretCode.length - 1 → -4 - 1 = -5.

In JavaScript, a negative index in splice means start that far from the end.

So -5 means "start removing at the 5th element from the end."

press.length - secretCode.length → e.g., if press.length = 7, that’s 7 - 4 = 3.

## WHOLE SPLICE
```javascript
press = ['m','a','r','k','x','y','z'];
``` 
# Positive indexes:
```css

 0   1   2   3   4   5   6
[m] [a] [r] [k] [x] [y] [z]
```

# Negative indexes (counting from the end):
```css
-7  -6  -5  -4  -3  -2  -1
[m] [a] [r] [k] [x] [y] [z]
```
# So:
-1 → 'z'

-2 → 'y'

-3 → 'x'

-4 → 'k'

-5 → 'r' ✅

# Now apply splice:
```javascript
press.splice(-5, 3)
```

Start at 'r' (index 2).

Remove 3 elements: 'r', 'k', 'x'.

# Result:

```javascript
press = ['m','a','y','z']
```