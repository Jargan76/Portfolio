// return an array of the largest num out of all sub arrays
//  arr will have same num as num of sub arr's
function largestOfFour(arr) {
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        var sortTemp = temp.sort(function(a, b){
            return a - b;
        });
          answer.push(sortTemp[sortTemp.length - 1]);

    }
  return answer;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
