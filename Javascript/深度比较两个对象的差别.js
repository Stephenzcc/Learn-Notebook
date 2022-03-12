let diff = [];
let lastkey = [];
function funDifference(tree1, tree2) {
  let keys = Object.keys(tree1);
  keys.push(...Object.keys(tree2));
  let keyset = new Set(keys);

  for (let key of keyset) {
    lastkey.push(key);
    // 如果两个都为对象且都不为空
    if (
      typeof tree1[key] === "object" &&
      typeof tree2[key] === "object" &&
      tree1[key] &&
      tree2[key]
    ) {
      // 如果两个都为数组
      if (Array.isArray(tree1[key]) && Array.isArray(tree2[key])) {
        if (
          !(
            tree1[key].length === tree2[key].length &&
            tree1[key].every((v, i) => {
              return v === tree2[key][i];
            })
          )
        ) {
          diff.push({
            key: lastkey.join("."),
            tree1: tree1[key],
            tree2: tree2[key],
          });
        }
        lastkey.pop();
      } else {
        funDifference(tree1[key], tree2[key]);
        lastkey.pop();
      }
    } else if (tree1[key] !== tree2[key]) {
      diff.push({
        key: lastkey.join("."),
        tree1: tree1[key],
        tree2: tree2[key],
      });
      lastkey.pop();
    } else {
      lastkey.pop();
    }
  }
  if (JSON.stringify(diff) == "{}") {
    return null;
  } else {
    return diff;
  }
}
tree1 = {
  A: {
    a: 1,
    b: [1, 2],
    c: {
      cc: "cc",
    },
  },
  B: {
    a: 1,
    b: "Bb",
  },
};
tree2 = {
  A: {
    a: 1,
    b: [2, 3],
  },
  B: {
    a: 2,
    b: "2Bb",
  },
  C: {
    a: 1,
  },
};
/**
 * diff(tree1, tree2)返回：
 * res = [
 *  {
 *    key: "A.b",
 *    tree1: [1, 2],
 *    tree2: [2, 3]
 *  },
 *  {
 *    key: "A.c",
 *    tree1: {
        cc: 'cc'
      },
 *    tree2: 'undefined'
 *  },
 *  {
 *    key: "C",
 *    tree1: 'undefined',
 *    tree2: 1
 *  },
 *  ... ...
 * ]
 */
console.log(funDifference(tree1, tree2));
