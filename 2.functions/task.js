function getArrayParams(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return {min: Number(min), max: Number(max), avg: Number((sum / arr.length).toFixed(2))};
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
