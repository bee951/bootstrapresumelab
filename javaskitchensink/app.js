var name='Ben';
const states='50';
function add(num1, num2) {
    return num1+num2;
}
var sum=add(4,5);
console.log(sum);
console.log(states);
console.log(name);
function checkname(namec){
    var namenum=namec.charCodeAt(0);
    if (namenum==76) {
        return "Back of the line!";
    }else{
        return "Next!";
    }
}
/*first the function check the ASCII code of the Letter at the start of the string the compare it to the desired number then return a string based on that comparison */
var test=checkname(name);
console.log(test);
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';