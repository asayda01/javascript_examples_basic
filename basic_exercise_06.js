/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export function sumMultiples (arr) {
  if (arr === undefined) throw new Error("arr is required");

  /*
  
  let sum = 0;
  for (let x of arr) {
    if ((x % 3 === 0) || (x % 5 === 0)) {
      sum += x}
    }
  return sum;

 */

  /*

  let sum = 0;
  let arr2 = arr.filter(x => {return ((x % 3 === 0) || (x % 5 === 0)) })
  arr2.forEach( (x) => sum += x);
  return sum;

  */

  /*

  let sum = 0;
  (arr.filter(x => {return ((x % 3 === 0) || (x % 5 === 0)) })).forEach( (x) => sum += x);
  return sum;

  */

  let arr_factorized = arr.filter(x => {return (x % 3 === 0) || (x % 5 === 0) } );
  return arr_factorized.reduce((a, b) => a + b, 0);

  /*

  one-liner solution :
  
  return (arr.filter(x => 
  {return ((x % 3 === 0) || (x % 5 === 0)) })).
  reduce ( (a,b) => a+b, 0 );  

  */
};

/**
 * This function will receive a string of characters and 
 * should return true/false depending on whether it is a valid DNA string. 
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export function isValidDNA (str) {
  if (str === undefined) throw new Error("str is required");

  /*

  let arr1 = str.split("");
  let arr2 = arr1.map(x => 
      {return (   (x.toUpperCase()==="C") ||
        (x.toUpperCase()==="G") ||
        (x.toUpperCase()==="T") ||
        (x.toUpperCase()==="A")              )
                                                } );
  let arr3 = arr2.some(x => 
    {return String(x).includes(false) === true});
  return !arr3;

  */

  let arr_1 = str.split("").map(x => {return ((x.toUpperCase()==="C") ||
  (x.toUpperCase()==="G") || (x.toUpperCase()==="T") || (x.toUpperCase()==="A")) });
  return !arr_1.some(x => {return (x.toString()).includes(false) === true});
};

/**
 * This function will receive a valid DNA string (see above) and 
 * should return a string of the complementary base pairs. 
 * In DNA, T always pairs with A, and C always pairs with G. 
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export function getComplementaryDNA (str) {
  if (str === undefined) throw new Error("str is required");

  /*

  let arr = str.split("");
  
  for (let x =0; x < arr.length; x++) {
    
    if ( arr[x].toUpperCase() === 'A') 
    { arr[x] = arr[x].replace(arr[x], 'T') }
    
    else if ( arr[x].toUpperCase() === 'C') 
    { arr[x] = arr[x].replace(arr[x], 'G' ) }
    
    else if ( arr[x].toUpperCase() === 'G') 
    { arr[x] = arr[x].replace(arr[x], 'C' )}
    
    else if ( arr[x].toUpperCase() === 'T') 
    { arr[x] = arr[x].replace(arr[x], 'A' ) }
    
    };

  let str1 = arr.join("");
  return str1;

  */

  return (str.split("").map(x => { 
    if (x.toUpperCase()==="G") return "C";
    else if (x.toUpperCase()==="C") return "G";
    else if (x.toUpperCase()==="A") return "T";
    else if (x.toUpperCase()==="T") return "A";
    //else throw new Error( "Not a Valid DNA type" );
    })).join("");
};

/**
 * This function should receive a number and return true/false 
 * depending on whether it is a prime number or not.
 *  A prime number is a number that can only be divided evenly by 1 and itself
 *  (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export function isItPrime (n) {
  if (n === undefined) throw new Error("n is required");
  if (n <= 1) return false;    // negative numbers, 0 and 1 are not prime numbers.
  for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if(n % i === 0) return false;
  }; 
    return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays,
 *  each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. 
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export function createMatrix (n, fill) {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  /*

  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i< n ; i++) {
    arr1.push(fill)}
  for (let j = 0; j< n ; j++) {
    arr2.push(arr1)}
  return arr2;

  */

  /*

  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i< n ; i++) {
    arr1.push(fill);
    arr2.push(arr1);
    }
  return arr2;

  */

  /*

  let arr1 = [];
  for (let i = 0; i< n ; i++) {
    arr1.push( new Array(n).fill(fill)  );
    }
  return arr1;

  */

  let arr = [];
  for (let i = 0; i < n; i++) { arr.push(new Array(n).fill(fill))};
  return arr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. 
 * For the café to run successfully, 
 * at least 3 staff members are required per day. 
 * The function should return true/false 
 * depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  return (Object.keys(staff).map(x=> 
    {return String(staff[x].rota).includes(day)})).length >=3 ;
};

