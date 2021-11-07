//jshint esversion : 6


//21
function total(arr){
    return arr.reduce((num1, num2) => num1 + num2);
}


//22
function minMaxAvg(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }

    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    let avg = total(arr)/arr.length;
    return [max, min, avg];
}


//23
function countMax(arr){
    let countMax = 0;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count >= countMax){
            countMax = count;
        }
    }
    return countMax;
}
  

//24
function primeNumber(arr){
    return arr.filter(num => {
        let flag = true;
        if(num < 2){
            flag = false;
        }else if(num === 2){
            flag = true;
        }else{
            for(let i = 3; i < num - 1; i++){
                if(num % i === 0){
                    flag = false;
                    break;
                }
            }
        }
        let result = flag ? num : false;
        return result;
    });
}


//25
function sqrt(arr){
    return arr.map(num => num * num);
}


//26
function nearNumber(arr, k){
    let sortArr = sortNumber(arr);
    let lessArr = sortArr.filter(num => num < k);
    let greaterArr = sortArr.filter(num => num > k);
    let result = [];
    if(lessArr[lessArr.length - 1]){
        result.push(lessArr[lessArr.length - 1]);
    }
    if(greaterArr[0]){
        result.push(greaterArr[0]);
    }
    return result;
}


//27, 28, 29
students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
];


//transformName 
function transformNameString(string){
    let stringArr = string.trim().split(" ");
    let result = [];
    for(let i=0; i<stringArr.length; i++){
        if(stringArr[i]){
            result.push(stringArr[i]);
        }
    }
    for(let i=0; i<result.length; i++){
        let string = "";
        string += result[i].charAt(0).toUpperCase();
        for(let j=1; j< result[i].length; j++){
            string += result[i].charAt(j).toLowerCase();
        }
        result[i] = string;
    }
    result = result.join(" ");
    return result;
}


function transformName(arr){
    arr.forEach(item => {
        item.firstName = transformNameString(item.firstName);
        item.lastName = transformNameString(item.lastName);
    });
    return arr;
}
transformName(students);


//27
function sortArray(arr){
    let result = [];
    for(var i = 0; i < arr.length; i++){
        if((arr[i].firstName.includes("a") || arr[i].firstName.includes("A")) && arr[i].firstName.length >= 3){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(sortArray(students));


//28
function sortArray2(arr){
    let result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].lastName.charAt(0) === "D" && arr[i].lastName.charAt(1) === "o"){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(sortArray2(students));


//29
function sortArray3(arr){
    return arr.sort((a,b)=> {
        var nameA = a.firstName.toUpperCase();
        var nameB = b.firstName.toUpperCase();
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    });
}
console.log(sortArray3(students));


//30
function secondaryMax(arr){
    arr = sortNumber(arr);
    let max1 = arr[arr.length - 1];
    let max2 = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        if(max1 > arr[i]){
            max2 = arr[i];
            break;
        }
    }
    let result = max2 ? max2 : -1;
    return result;
}


//31
function threeNumber(arr, k){
    let flag = false;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            for(let k = j + 1; k < arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === k){
                    flag = true;
                    break;
                }
            }
        }
    }
    let result = flag ? 'YES' : 'NO';
    return result;
}


//32
function addNumber(arr, k){
    let result = [];
    let head = arr.filter(num => num <= k);
    let tail = arr.filter(num => num >= k);
    result.push(head);
    result.push(k);
    result.push(tail);
    return result;
}


//33
function sortNumber(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] >= arr[j]){
                tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
}