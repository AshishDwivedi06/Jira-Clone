//-----> Set data
localStorage.setItem("name","Ashish");
localStorage.setItem("lastName","Dwivedi");

//---->  Get data
let name1 = localStorage.getItem("name");
console.log(name1);
let name2 = localStorage.name;
console.log(name2);

// ----> Delete
let deleteData = localStorage.removeItem("name");
console.log(deleteData);

//-----> Delete object data 
delete localStorage.name;

// -----> Get key by index
let a = localStorage.key(1);
console.log(a);

//------> how to get object
let user1 = {
    name: "Ashish",
    lastName: "Dwivedi",

};
let user2 = {

    name: "Sujeet",
    lastName: "Dwivedi",
};
 let profiles = [];
 profiles.push(user1);
 profiles.push(user2);
 
 //---> Stringfy covert object into a string

 localStorage.setItem("user", JSON.stringify(profiles));
  
 // ----> Parse convert sting into a object

 let allUsers = JSON.parse(localStorage.getItem("users"));
 console.log(allUsers);
