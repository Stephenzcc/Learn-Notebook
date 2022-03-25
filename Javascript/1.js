var twoSum = function (nums, target) {
  let len = nums.length,
    i = 0,
    nMap = {};
  for (i = 0; i < len; i++) {
    let np = target - nums[i];
    if (nMap[np] !== undefined) {
      return [nMap[np], i];
    }
    nMap[nums[i]] = i;
  }
  return [];
};
console.log(twoSum([2, 7, 11, 2, 15], 9));
