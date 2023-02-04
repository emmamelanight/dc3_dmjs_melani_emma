unction ft_print_max_values(numbers) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  for (const num of numbers) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return [max1, max2];
}