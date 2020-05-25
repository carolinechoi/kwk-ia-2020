// Centuries
// Return the inputted numerical year in century format. For example 2014, would return 21st. The input will always be a 4 digit string. 
// So there is no need for year string validation Examples: Input: 1999/Output: 20th, Input: 2011/Output: 21st, Input: 2154/Output: 22nd.

year = 2014;

firstTwo = (year - (year%100)) / 100;
cent = firstTwo + 1;

if(cent % 10 == 1) {
  console.log(cent + "st");
} else if(cent % 10 == 2) {
  console.log(cent + "nd");
} else {
  console.log(cent + "th");
}
