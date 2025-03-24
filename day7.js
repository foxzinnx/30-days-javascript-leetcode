var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0)); 

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100)); 

console.log(reduce([], function sum(accum, curr) { return 0; }, 25)); 