//jshint esversion : 6

//0
//check prime
function isPrime(num){
    let flag = true;

    if(num < 2){
        flag = false;
    }else if(num === 2){
        flag = true;
    }else{
        for(let i = 3; i < num - 1; i += 2){
            if(num % i === 0){
                flag = false;
                break;
            }
        }
    }

    let result = flag ? `${num} la so nguyen to` : `${num} khong phai la so nguyen to`;
    return result;
}


//1
//print number
function print(number){
    for(let i = 0; i < number; i++){
    console.log(i);
    }
}


//2
//print even
function printOdd(number){
    for(let i = 1; i <= number; i+= 2){
        console.log(i);
    }
}


//3
function printEven(number){
    for(let i = 0; i <= number; i+= 2){
        console.log(i);
    }
}


//4 - Building
function isPrime(number){
    let flag = true;
    if(number < 2){
        flag = false;
    }else if(number === 2){
        flag = true;
    }else{
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                flag = false;
                break;
            }
        }
    }
    if(flag){
        return number;
    }else{
        return '';
    }
}

let num = 10;
for(let i = 0; i <= num; i++){
    console.log(isPrime(i));
}


//5
//total 
function total(number){
    let total = 0;
    for(let i = 1; i <= number; i++){
        total += i;
    }
    return total;
}


//6
//pow2
function powTwo(number){
    let total = 0;
    for(let i = 1; i <= number; i++){
        total += Math.pow(i,2);
    }
    return total;
}

//7
//plus odd number
function plusOdd(number){
    let total = 0;
    for(let i = 1; i <= number; i+= 2){
    total += i;
    }
}

//8
function isOdd(number){
    let flag = false;

    if(number % 2 === 1){
        flag = true;
    }

    let result = flag ? 'YES' : 'NO';
    return result;
}


//9

function isReverse(number){
    let numString = number + "";
    let numLength = numString.length;
    let count = 0;

    if(numString.length % 2 === 0){
        for(let i = 0; i < numLength/2; i++){
            if (numString[i] === numString[numLength - i - 1]){
            count++;
            }
        }
    } else {
        numLength--;
        let numString2 = numString.slice(0,numLength/2) + numString.slice(numLength/2 + 1);
        for(let i = 0; i < numLength/2; i++){
            if (numString2[i] === numString2[numLength - i - 1]){
            count++;
            }
        }
    }

    let result = count === numLength/2 ? 'YES' : 'NO';
    return result;
}


//10
function multiplicationTable(number){
    for(let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
    }
}
