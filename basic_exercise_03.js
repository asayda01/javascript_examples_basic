export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => Math.pow (x,2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return  words.slice(0,1) + words.slice(1).map( words => { 
    return words[0].toUpperCase() + words.substring(1); 
}).join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
    /*
  
  let tot1 = 0;
  for (let i of people) {
    tot1 += i.subjects.length
    };
  return tot1;
  
  */
  
  /*
  let tot2 = 0;
  people.forEach((x) => tot2 += x.subjects.length);
  return tot2;
  
  */
  
  /*
  
  let tot3 = 0;
  people.map(x => {return tot3 += x.subjects.length}) ;
  return tot3;
  
  */

  let count_1 = people.map(people => { return people.subjects.length; });
  return count_1.reduce((a, b) => a + b, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  /*

  for (let i of menu) {
  if (i.ingredients.includes(ingredient) === true) {
    return true}
  };
  return false;

  */

  return menu.some(x => x.ingredients.includes(ingredient) === true);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  /*
  
  let set1 = new Set();
  for (let x of arr1) {
    for (let y of arr2) { 
      if (x === y) {
        set1.add(x)}
    }
  }
  return Array.from(set1);
  
  */
  
  /*
  
  let new_arr = arr1.filter(x => {return arr2.indexOf(x) > -1 });
  return [... new Set( new_arr.sort()) ];
  
  */

  return [...new Set(arr1)].filter(Set.prototype.has, new Set(arr2)).sort();
}
