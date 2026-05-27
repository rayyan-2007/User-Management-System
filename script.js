
                //User Management System:

// Objective:-
// Create a User class and manage multiple users using an array.

const users = [];
class User {
  constructor(username, mobilenum, age) {
    this.UserName = username;
    this.MobileNum = mobilenum;
    this.Age = age;
  }

  isAdult() {
    if (this.Age >= 18) {
        console.log("Adult :",true)
      return true;
    } else {
        console.log("Adult :",false)
      return false;
    }
  }

  getUserDetails() {
    console.log(`
UserName: ${this.UserName},
MobileNum: ${this.MobileNum},
Age: ${this.Age},`);
}
}
    
const userone = new User("alice", "9976786672", 16,);

const usertwo = new User("bob", "9976786672",  19, );

const userthree = new User("charlie", "7418645952",    33,);

userone.getUserDetails();
userone.isAdult(this.Age);
usertwo.getUserDetails();
usertwo.isAdult(this.Age);
userthree.getUserDetails();
userthree.isAdult(this.Age);

users.push(userone);

users.push(usertwo);

users.push(userthree);

console.log(users);

//Create JSON Data:

 [
  { username: "rayyan", phoneno: "9597075450", age: "19" },
  { username: "PEAKE", phoneno: "9976786672", age: "17" },
  { username: "jack", phoneno: "9976336672", age: "22" },
];

