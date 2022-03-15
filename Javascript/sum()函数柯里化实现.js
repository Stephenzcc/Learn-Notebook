function sum(...args) {
  let result = 0;
  // 计算sum(args)
  result = args.reduce(function (pre, item) {
    return pre + item;
  }, 0);
  let add = function (...nextArgs) {
    // 计算sum(args)(nextArgs)
    result = nextArgs.reduce(function (pre, item) {
      return pre + item;
    }, result);
    return add;
  };
  add.sumOf = function () {
    return result;
  };
  return add;
}
console.log(sum(1, 2, 3)(2).sumOf());
