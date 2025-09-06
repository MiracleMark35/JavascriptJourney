### Counter
```javascript
const reset = document.getElementById("reset");
const IncreaseB = document.getElementById("IncreaseB");
const DecreaseB = document.getElementById("DecreaseB");
const count = document.getElementById("count");

let counted = 0;

reset.onclick  = function(){
    counted = 0;
    count.textContent = counted;
}

document.getElementById("IncreaseB").onclick  = function(){
  counted += 1;
  count.textContent = counted;

}

DecreaseB.onclick = function(){
  counted -= 1;
  count.textContent = counted;
}
```