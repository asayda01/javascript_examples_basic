export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x => {return x <1 });
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  //return names.filter(x => {return x.charAt(0) == char});
  
  return   names.filter(x => {return x.charAt(0) === char});
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  /*
  
  const arr1 = [];
  for (let i of words) {
    if (i.substring(0,3) === 'to ') {
      arr1.push(i)}
    };
  return arr1;
  
  */

  return words.filter(x => {return x.substring(0,3)== "to "});

  // as a second approach
  //return words.filter(x => {return x.charAt(0)== "t" && x.charAt(1)== "o" && x.charAt(2)== " " });
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  /*
  
  return nums.filter(x => {return Number.isInteger(x) });
  
  */

  return nums.filter(x => { return Number.isInteger(x) === true }) ;
  
  // as a second approach
  //return nums.filter(x => { return typeof x === 'number' && x % 1 === 0});
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  /*

  const arr1 = [];
  for (let x of users) {
    arr1.push(x.data.city.displayName)}
  return arr1;

  */

  /*
  
  const arr2 = [];
  users.forEach( (x) => arr2.push(x.data.city.displayName) );
  return arr2;
  
  */

  return users.map( x => { return x.data.city.displayName } );
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(x => { return parseFloat(Math.sqrt(x).toFixed(2) ) });
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter( x => {return x.toUpperCase().includes(str.toUpperCase()) });

  // for case sensitive searches
  //return sentences.filter( x => {return x.includes(str) }); 
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  /*

  return triangles.map(x => 
  { return x.reduce (     (a,b) => { return Math.max(a,b) }    )        }
  );

  */
  return triangles.map( x => {return Math.max.apply(Math, x) } );
}
