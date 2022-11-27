// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    let length = string.length   
    let newString = ""
    for (let i = length-1; i > -1 ; i--) {
        newString += string[i];
    } 

    return newString;
} 

//Test 
console.log(reverseThisString("Hello"));


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) { 
    let length = string.length 
    let newString = "";
    for (let i = 0; i < length ; i++) {
        
        hold = string[i]; 
        if (string[i].toUpperCase() !==  string[i]) { //Letter is initially NOT uppercase
            newString += string[i].toUpperCase();
        } 

        else {
            newString += string[i].toLowerCase();
        }
    } 

    return newString;

} 

//Test: 
console.log(swapCase("Hello World"));



//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map 
//Rule: -32, then *(5/9)
function toCelcius(array){
    
    function convert(num) {
        return (num - 32) * (5/9);
    }
    
    return array.map(convert);
} 

//Test: 
console.log(toCelcius([23, 32, 41, 50, 59]));


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    
    function verify(num) {
        if (num >= 75) 
            return true 
        else 
            return false
    }
    
    return array.map(verify);
} 

//Test: 
console.log(passOrFail([20, 30, 50, 80, 90, 100]));

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers() {
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs']; 
    let i = -1;

    function verify(num) { 
        i++;
       return `${num} is ${germanNumbers[i]}`;
    }
    
    return cardinalNumbers.map(verify);
}

//Test: 
console.log(germanNumbers());


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
   
    function prime(num) {
 
        if (num == 1) 
            return;  

        let max = num;  
        let prime = true;
        
        for (let i = 2; i < max ; i++) {
            if (max % i == 0) {
                prime = false;
            }
        }  

        if (prime === true)
            return num;


    }

    return numbers.filter(prime);
} 

//Test: 
console.log(returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100 (inclusive), 
//for multiples of three, log (without quotes) "CSC225 RULES" instead of the number, 
//for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". 
//For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 

function numberLooper() {
    const max = 100; 
    let message = "";
    for (let i = 1; i <= max; i++) {
        
        message = "";
        if (i % 3 === 0) {
            message += "CSC225 RULES ";
        } 

        if (i % 5 === 0) {
            message += "I LOVE JAVASCRIPT";
        } 

        if (message === "") {
            console.log(i);
        } 
        else 
            console.log(message);
    }
} 

//Test: 
numberLooper();