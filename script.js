multiplicationTable = function(size) {
  let arr = [];
  for (let j=1; j<=size; j++) {
    let arr2 = [];
  for (let i=1; i<=size; i++) {
    arr2.push(i * j);
    }
    arr.push(arr2);
   }
  return arr;
}
