// **Exercise 2: Remove Duplicates**

// - ให้เขียน Function ที่ชื่อว่า `removeDuplicates` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` ซึ่งเป็น Array ที่บรรจุตัวเลข
//     - Function นี้จะ Return ค่าเป็น Array ใหม่ ที่มีเพียงตัวเลขที่ไม่ซ้ำกัน จาก `arr` เดิม


function removeDuplicates(arr) {
   //Start Coding Here
   const set = new Set(arr);
   return Array.from(set);
};

let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
console.log(result1); // [1, 2, 3]

let result2 = removeDuplicates([5, 5, 5, 5]);
console.log(result2); // [5]

let result3 = removeDuplicates([5, 1, 5, 2]);
console.log(result3); 

let result4 = removeDuplicates([5, 2, 5, 2]);
console.log(result4); 