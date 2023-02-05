 function ft_unique_occurrences(array) {
  let count = {};
  for (let num of array) {
    if(count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
 
  let values = Object.values(count);
  return new Set(values).size === values.length;
}