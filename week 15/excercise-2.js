// **Exercise 2: Sum of Even Numbers**

// - ให้เขียน Function ที่ชื่อว่า `sumEvenNumbers` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `numbers` มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็นผลรวมของเลขคู่ทั้งหมดใน Array

function sumEvenNumbers(numbers) {
   //Start Coding Here
   return numbers
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
};

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28

let result3 = sumEvenNumbers([7, 11, 10, 20, 30]);
console.log(result3); 