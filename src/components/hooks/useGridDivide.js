function gridDivide(docs) {
  let gridOne = [],
    gridTwo = [],
    gridThree = [];
  let num = 3;
  let odd, even; // odd: số dư; even: thương chia hết
  if (docs) {
    if (docs.length % num !== 0) {
      console.log("Không chia hết cho num");
      odd = docs.length % num;
      even = (docs.length - odd) / num;
      docs.forEach((item) => {
        const { id, url } = item;
        const obj = { id, url };
        if (gridOne.length < even) {
          gridOne.push(obj);
        } else if (gridTwo.length < even) {
          gridTwo.push(obj);
        } else if (gridThree.length < even) {
          gridThree.push(obj);
        } else if (gridOne.length === even) {
          gridOne.push(obj);
        } else if (gridThree.length === even) {
          gridThree.push(obj);
        }
      });
    } else {
      console.log("Chia hết cho num");
      even = docs.length / num;
      docs.forEach((item) => {
        const { id, url } = item;
        const obj = { id, url };
        if (gridOne.length < even) {
          gridOne.push(obj);
        } else if (gridTwo.length < even) {
          gridTwo.push(obj);
        } else {
          gridThree.push(obj);
        }
      });
    }
  }

  return [gridOne, gridTwo, gridThree];
}
export default gridDivide;
