//easy 1:

function splitOddAndEven(numbers) {
    let odd = [];
    let even =[];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            //this means the number is even if it is divisable by 2
            even.push(numbers[i]);
        }else {
            //this is for if it is not divisable by 2 so it is even
            odd.push(numbers[i]);
        }
    }
    const returnObject = {
        odd,
        even,
    
    };
    return returnObject;    
}

console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]))

//easy 2: YOANA solved
let numberArray = [10,18,19,29,33, 35, 47, 66, 83]

function isPrime(num) {
    for (let i =2; num > i; i++) {
        if (num % i ==0) {
            return false;
}
    }
    return num > 1;
}
console.log(numberArray.filter(isPrime));
