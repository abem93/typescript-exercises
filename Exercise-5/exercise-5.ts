class Student {
  // Define the properties here
  studentName: string;
  studentAge: number;
  studentGrade: number;
  
  // Define the constructor here
    constructor(name: string, age: number, grade: number){
    this.studentName = name;
    this.studentAge = age;
    this.studentGrade = grade;
  }

  // Define the displayInfo method here
  displayInfo(){
    console.log(`${this.studentName} is  a ${this.studentAge} year old student and has a grade of ${this.studentGrade} in the class.`)
  }

  // Define the isPassing method here
  isPassing(gradeThreshold: number): boolean{
    if(this.studentGrade > gradeThreshold){
      return true
    }else{
      return false
    }
  }
}

// Instantiate a new student object and call the methods to test your class

const studentOne = new Student('abe', 30, 8);

studentOne.displayInfo()
console.log(studentOne.isPassing(6))