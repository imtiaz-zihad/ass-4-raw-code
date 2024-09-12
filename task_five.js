function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }
  let sum = 0;
  for (const char of waitingTimes) {
    sum = sum + char;
  }
  let avg = Math.round(sum / waitingTimes.length);
  let remainingTime = (serialNumber - 1) * avg - waitingTimes.length * avg;
  return remainingTime;
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
