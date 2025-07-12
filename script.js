// PART TWO; 1-Declaring Variables
const internName = "Elochukwu Orji";
let taskOneScore = 9.5;
let taskTwoScore = 10;
let taskThreeScore = 8;
var totalScore, averageScore, grade;

// PART TWO; 2-Calculating Total Score and Average Score
totalScore = taskOneScore + taskTwoScore + taskThreeScore;
averageScore = totalScore / 3;

// PART TWO; 3-Determining Grade
if (averageScore >= 9) {
    grade = "A";
} else if (averageScore >= 8) {
    grade = "B";
} else if (averageScore >= 7) {
    grade = "C";
} else if (averageScore >= 6) {
    grade = "D";
} else {
    grade = "E";
}

// PART TWO; 4-Displaying Output
console.log(`Student Name: ${internName}`);
console.log(`Task One Score: ${taskOneScore}`);
console.log(`Task Two Score: ${taskTwoScore}`);
console.log(`Task Three Score: ${taskThreeScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Final Grade: ${grade}`);

// PART TWO; 5-Message based on Grade
let message;
switch (grade){
    case "A":
        message = "Excellent performance!";
        break;
    case "B":
        message = "Great job! Keep aiming high.";
        break;
    case "C":
        message = "Good effort. Try to improve.";
        break;
    case "D":
        message = "You're close. Keep working at it.";
        break;
    case "E":
        message = "Don't give up. You can do better next time.";
        break;
    default:
        message = "Invalid grade";                
}

console.log(`Message: ${message}`);