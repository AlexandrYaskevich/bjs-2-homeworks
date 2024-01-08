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
  let sumElement = 0;
    for (let x = 0; x < arr.length; x++) {
    sumElement += arr[x];
    }
    return sumElement;
}

function differenceMaxMinWorker(...arr) {
  let maxWorker = Math.max.apply(null, arr);
  let minWorker = Math.min.apply(null, arr);
  let difference = maxWorker - minWorker;
    if (arr.length < 1) {
      difference = 0;
    }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
    for (let z = 0; z < arr.length; z++) {
      if (arr[z] % 2 === 0) {
        sumEvenElement += arr[z];
      }
      else {
        sumOddElement += arr[z];
      }
    }
  let differ = sumEvenElement - sumOddElement;
  return differ;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let w = 0; w < arr.length; w++) {
    if (arr[w] % 2 === 0) {
      sumEvenElement += arr[w];
      countEvenElement++;
    }
  }
  let average = sumEvenElement / countEvenElement;
  if (arr.length < 1) {
    average = 0;
  }
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let arrOfFunc = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    arrOfFunc.push(func(...arrOfArr[i]));
    maxWorkerResult = Number(Math.max.apply(null, arrOfFunc));
  }
  return maxWorkerResult;
}