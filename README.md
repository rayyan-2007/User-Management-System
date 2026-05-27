# JavaScript Practice Tasks  
## Topic: JavaScript Classes & JSON

## Project Overview
This project contains solutions for:

- **Task 13.1:** User Management System using JavaScript Classes
- **Task 13.2:** Working with JSON Data

The project demonstrates:

- JavaScript Classes
- Constructors
- Class Methods
- Arrays of Objects
- Loops
- JSON Parsing
- JSON Stringify

---

# Task 13.1: User Management System

## Objective
Create a `User` class and manage multiple users using an array.

---

## Requirements

### 1. Create a Class

Create a class named:

```javascript
User
```

The class should contain these properties:

- `username`
- `mobileNum`
- `age`

### Class Structure

```text
User
 ├── username
 ├── mobileNum
 └── age
```

---

### 2. Create Class Methods

#### Method 1: `getUserDetails()`

Returns formatted user information.

Example Output:

```text
Username: Alice
Mobile: 9876543210
Age: 25
```

---

#### Method 2: `isAdult()`

Checks if user is an adult.

Returns:

- `true` → if age is 18 or above
- `false` → if age is below 18

---

### 3. Create User Objects

Create at least 3 users:

- Alice
- Bob
- Charlie

---

### 4. Store Users in an Array

Example:

```javascript
users = [user1, user2, user3]
```

---

### 5. Display User Details

Use a loop to display:

- User Details
- Adult Status

Example Output:

```text
Username: Alice
Mobile: 9876543210
Age: 22
Adult: true
```

---

# Task 13.2: Working with JSON Data

## Objective
Learn how JSON and JavaScript objects work together.

---

## Step 1: Create JSON Data

Create a JSON string:

```json
[
  { "username": "Alice", "mobileNum": "9876543210", "age": 25 },
  { "username": "Bob", "mobileNum": "9123456780", "age": 30 },
  { "username": "Charlie", "mobileNum": "9001122334", "age": 17 }
]
```

Store it in:

```javascript
jsonData
```

---

## Step 2: Convert JSON to JavaScript Object

Use:

```javascript
JSON.parse()
```

Store result in:

```javascript
users
```

---

## Step 3: Display Data

Print:

- Username
- Mobile Number
- Age

Example:

```text
Alice - 9876543210 - 25
Bob - 9123456780 - 30
Charlie - 9001122334 - 17
```

---

## Step 4: Convert Object Back to JSON

Use:

```javascript
JSON.stringify()
```

Store result in:

```javascript
jsonOutput
```

Print the output using:

```javascript
console.log()
```

---

# File Structure

```text
project-folder/
│
├── task13.js
└── README.md
```

---

# How to Run

## Using Node.js

Run the following command:

```bash
node task13.js
```

---

# Concepts Practiced

This project helps practice:

## JavaScript Classes
- Class creation
- Constructor
- Methods
- Object creation

## Arrays
- Storing multiple objects
- Looping through arrays

## JSON
- JSON.parse()
- JSON.stringify()

## Conditional Logic
- Checking age condition

---

# Submission Requirements

Submit:

- One JavaScript file
- Console output

The file must contain:

- Task 13.1 Solution
- Task 13.2 Solution

---

# Learning Outcomes

After completing this project, students will understand:

- How classes work in JavaScript
- How to create reusable objects
- How JSON is converted to JavaScript objects
- How to convert objects back to JSON
- How to loop through data

---

## Author

**Rayyan**  
BCA JavaScript Practice
