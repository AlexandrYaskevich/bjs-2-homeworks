let student1 = new Student();
let student2 = new Student();
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(Student.hasOwnProperty(`marks`)) {  
  this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
    if(Student.hasOwnProperty(`marks`)) { 
        this.marks.reduce((accumulator, currentValue, index, array) => {
        const sum = accumulator + currentValue;
        if (index === array.length - 1) {
        return sum / array.length;
          }
        }, 0)
   
    }  else {
    return 0;
    }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
