// **Exercise 3: Find Passed Students**

// - ให้เขียน Function ที่ชื่อว่า `getPassedStudents` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `students` ซึ่งเป็น Array ของ Object
//         - โดย Object แต่ละอันจะมี Key 2 ตัวได้แก่ `name` และ `score`
//     - Function นี้จะ Return Array ของ ชื่อ นักเรียนที่มีคะแนนมากกว่าหรือเท่ากับ 50

function getPassedStudents(students) {
   //Start Coding Here
   return students
    .filter(student => student.score >= 50)
    .map(student => student.name);
};

let result1 = getPassedStudents([
   { name: "A", score: 80 },
   { name: "B", score: 45 },
   { name: "C", score: 60 }
]);
console.log(result1); // ["A", "C"]