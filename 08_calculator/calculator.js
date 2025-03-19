const add = (n1, n2) => n1+n2;

const subtract = (n1,n2) =>n1-n2;

const sum = function(nums) {
	total = 0;
  for(n of nums){
    total += n;
  }
  return total;
};

const multiply = function(nums) {
  if(nums.length == 0) return 0;
  total = 1;
  for(n of nums){
    total *= n;
  }
  return total;
};

const power = (n,exp) => Math.pow(n,exp);

const factorial = function(n) {
  if(n == 0) return 1;
  return n * factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
