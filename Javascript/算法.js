/*
如何将浮点数点左边的数每三位添加一个逗号
*/
// 方法一
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
// 方法二
function format1(number) {
  return Intl.NumberFormat().format(number);
}
// 方法三
function format2(number) {
  return number.toLocaleString("en");
}
console.log(format1(12000000.11));

/*
parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，其中 radix 表示要解析的数字的基数。
（该值介于 2 ~ 36 之间，并且字符串中的数字不能大于 radix 才能正确返回数字结果值）。
此处 map 传了 3 个参数 (element, index, array)，默认第三个参数被忽略掉，
因此三次传入的参数分别为 "1-0", "2-1", "3-2"
因为字符串的值不能大于基数，因此后面两次调用均失败，返回 NaN ，
第一次基数为 0 ，按十进制解析返回 1。
*/
console.log(["1", "2", "3"].map(parseInt));
