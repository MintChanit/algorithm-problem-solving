// **Optional: Find Mode**

// - ให้เขียน Function ที่ชื่อว่า `findMode` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` เป็น Array ของตัวเลข
//     - Function นี้จะ Return ค่า เลขที่ปรากฏบ่อยที่สุด (mode) ใน Array
//         - ถ้ามีมากกว่า 1 ตัวที่ถี่ที่สุด ให้ return ตัวที่เจอก่อนใน Array

function findMode(arr) {
   //Start Coding Here
    const frequency = {};
    let maxCount = 0;
    let mode;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (frequency[num] === undefined) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }

        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mode = num;
        }
  }

  return mode;
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7