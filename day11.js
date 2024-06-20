//Exercise-1

//find the intersection of two arrays by using JS

var arr1 = [2,9,6,8,4,4,4];
var arr2 = [4,8,6,9,12];
let intersectionArr=arr1.filter((ele)=>{
    return arr2.includes(ele)
})
console.log([...new Set(intersectionArr)])

//Exercise-2

//Finding union of two arrays by using JS

var arr1 = [1,2,6,8,17];
var arr2 = [4,8,6,19,12,17];
var unionArr=[...arr1,...arr2]
console.log([...new Set(unionArr)])

//Exercise-3

//By using JS convert Kilometers into miles

var userInput=prompt("please enter a value to convert into Miles")
const factor=0.621371
const KilometerToMiles=userInput*factor
console.log(` ${userInput}=${KilometerToMiles}miles`);