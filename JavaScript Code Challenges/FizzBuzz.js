// Fizz Buzz
// Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead 
// of the number.

count = 1; 

while(count < 101) {
  word = "";
  if(count%3==0) {
    word = "Fizz";
  } 
  if(count%5==0) {
    word = word + "Buzz";
  }
  console.log(word);
}
