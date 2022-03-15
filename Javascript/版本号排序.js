let version = ["6", "1.1", "1.1.1", "3.3.3.3.3.3", "1.45.0"];
function twoSort(v1, v2) {
  if (v1 > v2) {
    return 1;
  } else if (v1 < v2) {
    return -1;
  } else {
    return 0;
  }
}
version.sort(function versionSort(version1, version2) {
  let v1 = version1.split(".").map(Number);
  let v2 = version2.split(".").map(Number);
  for (let i in v1.length >= v2.length ? v1 : v2) {
    if (v1.length === 0 && v2.length === 0) {
      return 0;
    } else if (v1.length === 0) {
      return -1;
    } else if (v2.length === 0) {
      return 1;
    } else {
      let res = twoSort(v1[i], v2[i]);
      if (res !== 0) {
        return res;
      }
    }
  }
});
console.log(version);
