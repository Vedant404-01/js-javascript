let num = 33
console.log(typeof num);
console.log(num);

/* Convert num into string*/  

let number = 33
let Number = String(number)
console.log(typeof Number);
console.log(Number);

/* Convert String to Number */

let word = "nigga"
let outputData = Number(word)
console.log(typeof outputData);
console.log(word);

// So the end output which I understood is conversion can be done....
// 1. In string "33" => 33 (String to number) but if "33abc" is the input it gives the output as NaN 
// 2. In case of Boolean True=1 & False=0 also in case of anything written like string "Vedant" it will return the value as True only
