// Medium Practice

// Sum of All
// Write a function that returns the sum of all of the numbers in an array. No empty arrays will be passed in. For example, when an array 
// is passed like [19, 5, 42, 2, 77], the output should be 145.

var numb = [19, 5, 42, 2, 77];
var sum = 0;
numb.forEach(function(numbs)) {
  sum = sum + numbs;
} 
console.log(sum);

// Calculate Total Pay
// Trisha gets paid $22 each time she walks a dog. The array below holds 7 numbers, the number of dog walks she took each day last week. 
// Write a function that calculates her total pay.

var dogWalks = [4, 5, 2, 2, 6, 1, 3];
var totalPay = 0;
dogWalks.forEach(function(pay)) {
  totalPay = totalPay + pay;
}
