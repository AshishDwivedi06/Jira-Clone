/* let cricketer  = {
    firstName : "Virat",
    lastName  : "Kohli",
    welcome   : function () {
        console.log("Welcome"+" "+this.firstName,this.lastName);
    }
};
cricketer.welcome(); */
//
// ------------------------------different ways for print name ------------------------->
/* let cricketer  = {
    firstName : "Virat",
    lastName  : "Kohli",
    welcome   : function () {
        console.log(`Welcome ${this.firstName} ${this.lastName}`);
    }
};
cricketer.welcome(); */

//
//---------------->this is the to print different name using same welcome function-------------->
//----------------->for this case we use {call method}------------------------------------------>
/* let cricketer  = {
    firstName : "Virat",
    lastName  : "Kohli",
};
let cricketer2  = {
    firstName : "Shubaman", 
    lastName  : "Gill",
}; */
/* let  welcome   = function () {
    console.log(`Welcome ${this.firstName} ${this.lastName}`);
} */
// ----------------------->if we want sent more parameter then-------------------------->

 /*  let  welcome   = function (email,mobileNo) {
    console.log(`Welcome ${this.firstName} ${this.lastName},
    thankyou for signing up! Your email id is ${email},
    Your registered number is ${mobileNo}`);
}
welcome.call(cricketer,"virat@gmail.com",454554554);
welcome.call(cricketer2,"shubaman@gmail.com",45454545454);  */
//
//---------------------------------how to brroww the function--------->

// cricketer.welcome.call(cricketer2);
//
//---------------------------------{Apply method}--------------------------->
//same as call but argument as an array

//welcome.call(cricketer2,["shubaman@gmail.com",45454545454]);
//
//----------------------------------{Bind Method}--------------------------------->
//  same as call, but function should be called explicitly

/* let bindFn = welcome.bind(
    cricketer2,"shubaman@gmail.com",45454545454
)
bindFn();
  */