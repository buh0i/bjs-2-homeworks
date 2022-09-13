// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    sum += arr[i];
    console.log(arr[i], max, min, sum);
  }

  avg = sum / arr.length;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log (arr, sum);
  return +sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    func(arrOfArr[i]);
    let sum = func(arrOfArr[i]);
    console.log (sum, max, sum > max);
    if (sum > +max) {
      max = sum;
    };
  };
  console.log (max);
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  console.log (max, min, Math.abs(max - min))
  return Math.abs(max - min)
}
