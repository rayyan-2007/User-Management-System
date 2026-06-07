const users = [];

// Create a Class:
class User {
  constructor(name, mobileNum, age) {
    this.username = name;
    this.mobileNumber = mobileNum;
    this.age = age;
  }

  //Create Class Methods:
  getUserDetails() {  
return`Username: ${this.username},
MobileNumber: ${this.mobileNumber},
Age: ${this.age}`;
}

  // Method 2: isAdult() This method should check the user's age.
  //Print whether the user is an adult
  isAdult() {
    if (this.age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}

const user1 = new User("rayyan", "9976786672", 19);

const user2 = new User("shahid", "7443567892", 17);

const user3 = new User("faasil", "8879665432", 18);



 //Store Users in an Array
users.push(user1,user2,user3);

  for(let i=0; i<users.length; i++){
    console.log(users[i].getUserDetails());
     console.log("adult:",users[i].isAdult());
  }

 const jsondata = `[
  {"username": "Alice", "mobileNum": "9876543210", "age": "25" },
  {"username": "Bob", "mobileNum": "9123456780", "age": "30" },
  {"username": "Charlie", "mobileNum": "9001122334", "age": "17" }
]`;

//before parse
console.log(jsondata)

let newdata = JSON.parse(jsondata);

//after parse
console.log(newdata);

for(let i=0; i<newdata.length; i++){
  console.log(`
               username: ${newdata[i].username}
               mobilenum: ${newdata[i].mobileNum}
               age: ${newdata[i].age}
               `)             
}

//Convert Object Back to JSON
  json = JSON.stringify(newdata);
 console.log(json)