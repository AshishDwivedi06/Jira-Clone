//--------->varaiable decalartion and insilization
// let addbtn = document.querySelector(".add-btn");
// console.log(addbtn);

// ADDEVENT-listener is what we tell our browser that there will be a function named click and rest is a
// callback function....
            
// var isModalPresent = false;
// addbtn.addEventListener("click", function () {
//     if (!isModalPresent) {
// } else { }
//     isModalPresent = !isModalPresent;
// })

/* localStorage
location */
// 
//for( let i=1; i<=5; i++){ we also use var 
//     print (i);
// }
// function print(i){
//     setTimeout(function(){
//         console.log(i);
//     },3000*i);
// } 1 2 3 4 5

// function print(){
//     for(var i=1; i<=5; i++){

//     setTimeout(function(){
//         console.log(i);
//     },3000*i);
// }
//}
//print();6 6 6 6  6
// // function print(){
//     for(var i=1; i<=5; i++){
//function wrapper(b){
//     setTimeout(function(){
//         console.log(b);
//     },3000*b);
//}
//     wrapper(i);        

// }
//}
//print();1 2 3 4 5
// let i = 0;
// do {
//  alert( i );
//   i++;
//   //alert(i);
// } while (i < 3);
// //alert(i);
//******************************************************************************************************* */

// var arr = [2,3,4,5,6];
// let area = function(side){
//     return side*side;
// }
// let perimeter = function(side){
//     return side*4;
// }
// let diagonal = function(side){
//     return Math.sqrt(2) * side;
// }
// let calculate = function(arr,logic){
//     let res = [];
//     for(let i = 0; i < arr.length; i++ ){
//         res.push(logic(arr[i]));
//     }
//     return res;

// }
// console.log(calculate(arr,area));
// console.log(calculate(arr,perimeter));
//***************************************separate logic for all code*********************************
// let calculate = function(arr){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         res.push(arr[i]*arr[i]);
//     }
//     return res;
// }
// console.log(calculate(arr));
// if we want to avoid push then use map it is work internaly
// this is higher order function and callback function
// var areaOfSquare = arr.map((num)=>{
//     return num*num;

// })
// console.log(areaOfSquare);
//implementation map
// var areaOfSquare = arr.map(area);
// Array.prototype.calculate = function (logic){
//     let res = [];
//     for(let i = 0 ; i<this.length; i++){
//         res.push(logic(this[i]));
//     }
//     return res;
// }
//let narr = [2,5,7,12];
// var ans = arr.calculate(area);
// console.log(ans);
// //// implememnting own push method
// Array.prototype.myPush = function (num){
//     let length =  this.length;
//     this[length] = num;
//     return this;
// }
// arr.myPush(34);
// console.log(arr);
/***************************************************************************************************** */
// inshead of using if we can aslo use arr.filter for call logic
// var arr = [2,4,5,6,7,8];
// function greaterThan4(num){
//     if (num > 4) return num;
// }

// let ans = arr.filter(greaterThan4);
// console.log(ans);
//*******************************************reduce ***************************************************/
///***accumulator is use for value return form previous iteration and a is used just like a pointer */
// var arr =  [1,2,3];
// let sum = arr.reduce(add,0);
// function add(accumulator,a){
//     return accumulator+a;
// } console.log(sum);
//**************---------------------**find largest****************************************************************** */
// var arr = [1, 2, 3, -9, 5, 6, 7, 8, 10];
// let sum = arr.reduce(largestValue, 0);
// function largestValue(accumulator, a) {
//     if (a > accumulator) {
//         accumulator = a;
//     }
//     return accumulator;
// } console.log(sum);
//***************************************************************************************/
//**************************************this keyword type *****************************/
// 1
// <------------------------------------------------rule---------------------------------------->
// 1. the value of 'this' is evaluated during the run-time
// 2. value of 'this' depends from where it is called,
// 3. this points to that object from where the function is being called
// 4. arr,obj,fn are all passed by reference
                            
/* function type1(){
    console.log(this.name);
}
var name = "ashish dwivedi";
type1() ;*/ //------> when the function call globally then then is [pointing] to our window object
// 2
/* function type2(){
    console.log(this.lname);
}
var lname = "Dwivedi";
var obj = {
    lname: "Tiwari",
    type2
}
obj.type2(); */
// 3
/* var food = "Pizza";
var obj = {
    food : "Pasta",
    
    eat(){
    
        console.log("I like to eat" +" "+ this.food);
    }
}
var foo = obj.eat;
foo();

 */
// 4
//------------>this case for timer function pointing to global function that why output is 1------->
/* var length = 1;
function square() {
    let cb = function () {
        console.log(this.length * this.length);
    };
    setTimeout(cb,2000);
}
var obj = {
    length : 3,
    square
}
obj.square();
 */
// 5
//------------------------->but this case this is pointing to object output is 9------------------->
/* var length = 1;
function square() {
    let le = this.length;
    let cb = function () {
        console.log(le * le);
    };
    setTimeout(cb,2000);
}
var obj = {
    length : 3,
    square
}
obj.square();
 */
// 5 
// ------------------------------closer................................................
//A closure is a feature of JavaScript that allows inner functions to access their outer scope. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created

// ---->  How to add element and remove

const months = ["jan","march", "April", "June"];
// ---> index, num of elemnts to remove starting from index things to add starting at index

// ---> removing from array
months.splice(1,2);
console.log(months);

// ----> adding in array
months.splice(1, 0, "Feb", "March", "April", "May");
console.log(months);

// ----> removing and adding into array
months.splice(1,3, "July", "Aug", "Sept", "Oct");
console.log(months);