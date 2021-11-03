//jshint esversion : 6

//11
function countWhiteSpace(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === " "){
            count++;
        }
    }
    return count;
}

//12
function removeSpace(string){
    let result = "";
    for(let i = 0; i < string.length; i++){
        if(string[i]){
            result += string[i];
        }
    }
    return result;
}

//13
function reverse(string){
    let result = "";
    for(let i = string.length - 1; i >= 0; i--){
        result += string[i];
    }
    return result;
}

//14
function find(strA, strB){
    let flag = true;
    let index = 0;
    if(strA.includes(strB)){
        for(let i= 0; i < strA.length; i++){
            if(strB[0] === strA[i]){
                for(let j = 0; j < strB.length; j++){
                    if(strA[i + j] !== strB[j]){
                        flag = false;
                    }
                }
                if(flag){
                    index = i;
                    break;
                }
            }
        }
    }
    return index;
}

//15
function transformName(string){
    //remove begin and end white space
    string = string.trim();
    //remove uppercase in string
    let stringArr = string.split(" ");
    let resultArr = "";
    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i]){
            resultArr.push(stringArr[i]);
        }
    }

    //Uppercase first letter for each words
    resultArr.map(item => { 
        let word = "";
        for(let i = 0; i < item.length; i++){
            if(i == 0 ){
                word += item[i].toUpperCase();
            }else{
                word += item[i].toLowerCase();
            }
        }
    });

    //convert to string
    let result = resultArr.join(" ");
    return result;
}

//16
function getId(string){
    let url = "https://www.facebook.com/";
    let endpoint = "";
    if(string.includes(url)){
        for(let i = url.length; i < string.length; i++){
            endpoint += string[i];
        }
        return result;
    }else{
        return -1;
    }
}

//17
function minMax(num1, num2, num3){
    let max = num1;
    let min = num1;

    //get min
    if(num2 <= num3 && num2 <= num1){
        min = num2;
    }else if(num3 <= num2 && num3 <= num1){
        min = num3;
    }else{
        min = num1;
    }

    //get max
    if(num2 >= num3 && num2 >= num1){
        max = num2;
    }else if(num3 >= num2 && num3 >= num1){
        max = num3;
    }else{
        max = num1;
    }
    
    return [min, max];
}

//18
function findSecondary(strA, strB){
    let reverseStrA = reverse(strA);
    let reverseStrB = reverse(strB);
    let index1 = find(reverseStrA, reverseStrB) + strB.length;
    let removePrimary = "";
    for(let i = index1 + 1; i < strA.length; i++){
        removePrimary += reverseStrA[i];
    }
    let index2 = find(removePrimary, reverseStrB) + strB.length;
    let result = removePrimary.length - index2;
    if(result >= 0){
        return result;
    }else{
        return -1;
    }
}

//19
function total(num){
    if(num == 1){
        return 1;
    }else{
        return num + total(num - 1);
    }
}

