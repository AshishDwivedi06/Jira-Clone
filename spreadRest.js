//--->In this way it gives 2-d array, but we don't want to this we want to only value of first array that why spread is used----->
//----> Spread operator in case of ARRAY

/* let num = [1,2,3,4];
let nums = [num];
console.log(nums); */       //----> [[1,2,3,4]] 2-d array
//

/* let num1 = [1,2,3,4];
let nums1 = [...num,5,6];
console.log(nums1); */     //----> [1,2,3,4] 1-d array
                           //----> this case push operation is easy and avoid for loop

//----> Spread operator in case of OBJECT
// OVERRIDE is possible with the help of spread
//  1 case
/* const obj = {
    name : "ashish",
    age : 22
}
const user = {...obj, age : 23, hobbie:"cricket"};
console.log(user);
 */
               
// 2 case
/* const user = {
    name: "Ashish",
    age: 22,
    residence: {
        state: "madhya pradesh",
        city: "rewa"
    }
}
const newUser = {...user,age:23,hobbies:"cricket"};
console.log(newUser);
//user.residence.state = "Chhattisgarh";
console.log(user);
console.log(newUser);
 */

 