class ArrayProblems {

  /*
   This method should return true if a given Array (array)
   has all equal elements and false otherwise
   Eg1: [1,1,1] -> true
   Eg2: [1,1,1,2] -> false
   */
  static allEqualElements(array) {
    console.log("I'm a new run with array : " + array.toString());
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        console.log(array[i] === array[j]);
        if (array[i] !== array[j]) {
          console.log("Found a different element!");
          return false;
        }
      }
    }
    console.log("They are all the same elements!");
    return true;
  }

  /*
   This method should return the maximum element from an integer Array (array)
   Eg1: [1,1,1] -> 1
   Eg2: [-3,-1,0,5] -> 5
   */
  static getMax(array) {
    // todo: do stuff here
  }

  /*
   Can you implement getMax again without using any js collection method?
   */
  static getMax2(array) {
    // todo: 🙌 do magic !
  }
}
module.exports = ArrayProblems;