var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(name, age, grade) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("".concat(this.studentName, " is  a ").concat(this.studentAge, " year old student and has a grade of ").concat(this.studentGrade, " in the class."));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function (gradeThreshold) {
        if (this.studentGrade > gradeThreshold) {
            return true;
        }
        else {
            return false;
        }
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var studentOne = new Student('abe', 30, 8);
studentOne.displayInfo();
console.log(studentOne.isPassing(9));
