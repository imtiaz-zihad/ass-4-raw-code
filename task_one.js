function calculateTax(income, expense) {
  if (0 >= income || income < expense || 0 >= expense) {
    return "Invalid Input";
  }
  let remaining = income - expense;
  let tax = remaining * 0.2;

  return tax;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let [username, domain] = email.split("@");

  return username + " sent you an email from " + domain;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (const char of name) {
    if (!isNaN(char)) {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input  ";
  }
  let finalScore = 0;
  let total = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    finalScore = total + 20;
    return finalScore >= 80 ? true : false;
  }

  return finalScore >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  for (const char of waitingTimes) {
    sum = sum + char;
  }
  let avg = Math.round(sum / waitingTimes.length);
  let remainingTime = (serialNumber - 1) * avg - waitingTimes.length * avg;
  return remainingTime;
}
