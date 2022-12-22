// Sum Related Odd Problem 
// Description

// You are given a numbern, you need to find sum of all the odd numbers which are less than equal to n.
 

// Input Format

// First and the only line contains one number n.

// Constraints

// 1 <= n <=10000


// Output sum of all odd number which are less than equal to n.


// Sample Input - 4

// Sample Output  - 4

// Hint

// Numbers less than or equal to 4 are :- [1 2 3 4]

// Even Numbers less than or equal to 4 are :- [1 3], whose sum is 1 + 3 = 4.


// Write code here

function sumRelatedOddProblem(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
        i++;
    }
    console.log(sum);
}

// sumRelatedOddProblem(4)