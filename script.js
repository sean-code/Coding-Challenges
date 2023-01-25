// First Split
// Then Reverse
//Then Join


            // Practice Challenges
// Q. 1

// Solution 1
// const isPalindrome = (string) => {
//     return string === string.split("").reverse().join("");
// }

// console.log(isPalindrome("racecar"));


// // Solution 2
// function palindromeIs(str){
//     const splitted = str.split("");
//     const reversed = splitted.reverse();
//     const joined = reversed.join("");
//     return joined === str;
// }

// console.log(palindromeIs("jack"));




// data = [1, 2, 3, 4]
// data2 = [4, 5, 8]

// for (let j=0; j<data2.length; j++){
// for (let i=0; i<data.length; i++)
//     console.log(data[i]+data2[j]);
// }

// // O(N*2)


// // Problem LeetCode


// array1 = [5, 6, 1]
// array2 = [1, 3, 2]

// function checkEqual(array1, array2){

//     let N = array1.length;
//     let M = array2.length;

//     if (N!= M){
//         return false;
//     }else{
//             const res = [];
//             for(let i = 0; i < array1.length; i++){
//                 const el = ((array1[i] || 0) - (array2[i] || 0));
//                 res[i] = el;
//             };
//             return (res.map(a => a*a).reduce((k, l) => k + l)/N)
//     }
// }

// console.log(checkEqual(array1, array2));




// 3.

// const fibonacci = (n) => {
//     if(n <= 1) {
//       return n;
//     }
  
//     const result = [0, 1];
  
//     for (let i = 2; i <= n; i++) {
//       result[i] = result[i - 2] + result[i - 1];
//     }
  
//     return result[result.length - 1];
//   }

//   console.log(fibonacci(100))




//   Option 2

// const fbonacci = n => {
//     let a = 0, b = 1, c = n;
    
//     for(let i = 2; i <= 100; i++) {
//       c = a + b;
//       a = b;
//       b = c;
//     }
    
//     return c;
//   };

//   console.log(fbonacci(1,2, 3));





//   function fbionacci(n) {
//   let fibNumSum = 0; 
//   let current = 0;
//   let next = 1; 

  
//   for (let i = 1; i <= 100; i++) {
//     let fibTotal = current + next;
//     current = next;
//     next = fibTotal;

//     if (total % 2 == 0) {
//       fibNumSum += fibTotal;
//     }
//   }
//   // You can do it!
//   return fibNumSum;
// }
// fbionacci(10); //44



// Problem 4

// Part A
const sumUp = (array, targetSum) => {
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10
  array.sort((a, b) => a - b)
  let leftOperand = 0
  let rightOperand = array.length - 1

  while (leftOperand < rightOperand) {
    let totalSum = array[leftOperand] + array[rightOperand]
    // let selfSum = a += a || b += b
    if (totalSum === targetSum ) {
      return [array[leftOperand], array[rightOperand]]
    } else if (totalSum < targetSum) {
      leftOperand++
    } else if (totalSum > targetSum) {
      rightOperand--
    }
  }
  return []
}


console.log(sumUp())


//Part B

const sumItself = (target) => {
  arr = [3, 5, -4, 8, 11, 1, -1, 6];
  target = 10;

  const arrayed = arr.map(item => {
    return item * 2
    // console.log(arrayed);
  })
}






// Problem 5

function num(numb){
  // Split the argument
  let splitted = Array.from(String(numb), Number);

  let order1 = splitted.sort().join("")
  // console.log(order1);
  let order2 = splitted.sort().reverse().join("")
  // console.log(order2);
  return (order2 - order1);
}

console.log(num(213));