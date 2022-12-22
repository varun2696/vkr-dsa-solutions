// Sum Related Even Problem
// Description

// You are given a numberN, you need to find sum of all the even numbers which are less than or equal to N.


// Input Format

// First and the only line contains one number N.

// Constraints

// 1 <= N <=10000


// Output sum of all even number which are less than equal to N.


// Sample Input  - 4
// Sample Output - 6

// Hint

// Numbers less than or equal to 4 are :- [1 2 3 4]

// Even Numbers less than or equal to 4 are :- [2 4], whose sum is 2 + 4 = 6.


// Write code bwlow


function sumRelatedProblem(N) {

    let sum = 0;
    let i = 1;
    while (i <= N) {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    }
    console.log(sum);
}

// sumRelatedProblem(4)