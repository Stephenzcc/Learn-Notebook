const arr = [
  {
    name: "张三",
    age: 23,
    profession: "医生",
  },
  {
    name: "李四",
    age: 30,
    profession: "演员",
  },
  {
    name: "熊大",
    age: 18,
    profession: "运动员",
  },
  {
    name: "小陈",
    age: 28,
    profession: "医生",
  },
];

function sortObj(l) {
  let res = l.sort((a, b) => {
    return a.age - b.age;
  });
  return res;
}
console.log(sortObj(arr));
