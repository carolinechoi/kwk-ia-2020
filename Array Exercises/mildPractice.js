// 1) Calculate Daily Pay
// Trisha gets paid $22 each time she walks a dog. The array below holds 7 numbers, the number of dog walks she took each day last week. 
// Iterate over the array, and print out "Trisha earned $____ today!" for each day.

var dogWalks = [4, 5, 2, 2, 6, 1, 3];

dogWalks.forEach(function(walk)) {
  console.log("Trisha earned $" + walk + " today!");
}


// 2) YELLING
// Iterate over an array of strings. For each string, print out the YELLING version of it. Look into how to convert a string to uppercase!

var myStrings = ["St. Vincent", "Buzzy Lee", "Ambar Lucid"];

myStrings.forEach(function(artist)) {
  console.log(artist.toUpperCase());
}
