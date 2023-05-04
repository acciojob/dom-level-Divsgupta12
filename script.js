//your JS code here. If required.
let element = document.getElementById('level');
let n = 0;

while (element.parentNode) {
  n++;
  element = element.parentNode;
}

alert("The level of the element is: "+n);