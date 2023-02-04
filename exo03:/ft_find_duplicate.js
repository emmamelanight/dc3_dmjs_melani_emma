function ft_find_duplicate(array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (unique.includes(array[i])) {
      return true;
    }
    unique.push(array[i]);
  }
  return false;
}