// 🧩 Problem Statement: Student Record Management
// You are given data about students in a college.
//  Create a program using JavaScript Objects that performs the following tasks step by step:
// Create an object named student with properties:
//  name, age, course, and marks.

var obj1={name:"lukhman",age:22,course:"Python",marks:"marks"}
console.log(obj1)

// Add a new property grade and modify the marks value.
obj1.grade="B grade"
console.log(obj1)


// Use Object.keys() and Object.values() to display all property names and their values separately.

console.log(Object.keys(obj1))


// Use Object.entries() to print key–value pairs together in array format.
console.log(Object.values(obj1))

// Create another object extraDetails with properties like city and rollNo,
//  and merge it into the student object using Object.assign().
var extra_details={city:"Hyderabad",Roll_no:421}

var student;
student=Object.assign(obj1,extra_details)
console.log(student)


// Use Object.hasOwnProperty() to check if the student object has the property course and address.

console.log(student.hasOwnProperty("age"))


// Make a copy of the student object and apply Object.freeze() on it.

var copy=student
var dictiii=student

console.log(copy)
Object.freeze(copy)
//  Try adding or modifying properties and observe that no changes happen.

copy.class="9 A"
copy.name="Shaik"
delete copy.marks
console.log(copy)
// Apply Object.seal() on another copy of the object and verify that:


// Object.seal(dictiii)
dictiii.class="king"
dictiii.name="Shaik"
delete dictiii.marks
console.log(dictiii,90)

// You cannot add or delete properties,


// But you can modify existing values.


// 🎯 Goal:
// By the end, your program should demonstrate:
// Creation and modification of objects


// Use of all major Object methods (keys, values, entries, assign, hasOwnProperty, freeze, seal)


// Understanding the difference between frozen and sealed objects
