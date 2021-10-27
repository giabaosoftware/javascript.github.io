//jshint esversion : 6

//0
let number = 7;
let flag = true;

if(number < 2){
    flag = false;
}else if(number === 2){
    flag = true;
}else{
    for(let i = 3; i < number - 1; i += 2){
        if(number % i === 0){
            flag = false;
            break;
        }
    }
}

let result = flag ? `${number} la so nguyen to` : `${number} khong phai la so nguyen to`;
console.log(result);

//1
let num2 = 3;
for(let i = 0; i < num2; i++){
    console.log(i);
}

//2
let num3 = 100;
for(let i = 1; i <= num3; i+= 2){
    console.log(i);
}

//3
let num4 = 300;
for(let i = 0; i <= num4; i+= 2){
    console.log(i);
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
let num6 = 10;
let total = 0;
for(let i = 1; i <= num6; i++){
    total += i;
}
console.log(total);

//6
let num7 = 3;
let total2 = 0;
for(let i = 1; i <= num7; i++){
    total2 += Math.pow(i,2);
}
console.log(total2);

//7
let num8 = 3;
let total3 = 0;
for(let i = 1; i <= num7; i+= 2){
    total3 += i;
}
console.log(total3);


//8
let num9 = 3;
let flag2 = false;

if(num9 % 2 === 1){
    flag2 = true;
}
let result2 = flag2 ? console.log('YES') : console.log('NO');


//9
let num10 = 12345654321;
let numString = num10 + "";
let numLength = numString.length;
let count = 0;

if(numString.length % 2 === 0){
    for(let i = 0; i < numLength/2; i++){
        if (numString[i] === numString[numLength - i - 1]){
        count++;
        }
    }
}else{
    numLength--;
    let numString2 = numString.slice(0,numLength/2) + numString.slice(numLength/2 + 1);
    for(let i = 0; i < numLength/2; i++){
        if (numString2[i] === numString2[numLength - i - 1]){
        count++;
        }
    }
}

let result3 = count === numLength/2 ? console.log('YES') : console.log('NO');

//10
let num11 = 7;
for(let i = 1; i <= 10; i++){
    console.log(`${num11} x ${i} = ${num11 * i}`);
}