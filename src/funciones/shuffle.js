export default (array) => {
  var thisIndex = array.length, temp, randIndex;
  while (0 !== thisIndex) {
    randIndex = Math.floor(Math.random() * thisIndex);
    thisIndex -= 1;
    temp = array[thisIndex];
    array[thisIndex] = array[randIndex];
    array[randIndex] = temp;
  }
  return array;
}
