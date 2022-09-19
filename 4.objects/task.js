function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let vova = new Student("Владимир", "Муж.", 45);
let vetya = new Student("Петр", "Муж.", 67);
let alisa = new Student("Алиса", "Жен.", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  }
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...rest) {
  if(this.marks === undefined){ 
    this.marks = [];
  }
  this.marks.push(...rest);
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

vova.addMark(3);
vova.addMark(4);
vova.addMark(5);
vova.addMarks(2, 2, 2, 5, 5, 4, 3);
console.log(vova.getAverage())
console.log(vova);

let petya = new Student("Петр", "Муж.", 67);
petya.addMarks(3, 4, 5);
console.log(petya);

