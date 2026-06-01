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
      return true;
    } else {
      return false;
    }
  }

  getUserDetails() {
    console.log(`
UserName: ${this.UserName},
MobileNum: ${this.MobileNum},
Age: ${this.Age},
//execute the isAdult method of the current object
Adult: ${this.isAdult()}
`);
}
}

const userone = new User("alice", "9976786672", 16,);

const usertwo = new User("bob", "9976786672",  19, );

const userthree = new User("charlie", "7418645952",    33,);


users.push(userone,usertwo,userthree);

console.log(users);

users.forEach((userdata)=>{
  userdata.getUserDetails();
})


//Create JSON Data:

const jsondata = `[
 { "username": "Alice", "mobileNum": "9876543210", "age": 25 },
 { "username": "Bob", "mobileNum": "9123456780", "age": 30 },
 { "username": "Charlie", "mobileNum": "9001122334", "age": 17 }
]`;

const usersdata = JSON.parse(jsondata);
usersdata.forEach((element) => {
  console.log(element);
});

  let data = JSON.stringify(usersdata);

  console.log(data);
      