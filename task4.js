function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input  '
    }
    let finalScore = 0;
    let total = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily=== true) {
       finalScore =  total + 20;
        return (finalScore >= 80) ? true : false
    }

    return (finalScore >= 80) ? true : false
    
}
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
));

