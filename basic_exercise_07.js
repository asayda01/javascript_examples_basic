/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits,
 *  e.g 6 in this example.
 * @param {Number} n
 */

export function sumDigits (n) {
    if (n === undefined) throw new Error("n is required");
    return n.toString().split('').map(Number)
    .reduce(function (a, b) {return a + b}, 0);
  };
  
  /**
   * This function creates a range of numbers as an array. 
   * It received a start, an end and a step. 
   * Step is the gap between numbers in the range.
   *  For example, if start = 3, end = 11 and step = 2 
   * the resulting range would be: [3, 5, 7, 9, 11]
   * Both the start and the end numbers are inclusive.
   * Step is an optional parameter. If it is not provided, assume the step is 1.
   * @param {Number} start
   * @param {Number} end
   * @param {Number} step
   */

export const createRange = (start, end, step) => {
    if (start === undefined) throw new Error("start is required");
    if (end === undefined) throw new Error("end is required");
    
    /*

    if (step === undefined){step = 1}; // as it`s an optional parameter.
    const arr = [];
    for (let i = start; i <= end; i = i + step) {
      arr.push(i)}
    return arr;

    */

    if (step === undefined) step = 1; // as it`s an optional parameter.
    return [...Array(Math.floor(((end - start) / step)) + 1).keys()]
    .map(x => (x * step) + start);
  };