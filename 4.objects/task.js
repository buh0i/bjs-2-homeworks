function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let Vova = new Student("Владимир", "Муж.", 45);
let Petya = new Student("Петр", "Муж.", 67);
let Alisa = new Student("Алиса", "Жен.", 25);

Student.prototype.setSubject = function (subjectName) {

}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (mark1, mark2, mark3, ...rest) {
  this.marks.push(mark1, mark2, mark3, ...rest);
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += marks[i];
  }
  console.log(sum / this.marks.length)
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  let excluded = {
    reason: reason,
  }

}

Vova.addMark(3);
Vova.addMark(4);
Vova.addMark(5);
Vova.addMarks(2, 2, 2, 5, 5, 4, 3);
Vova.getAverage;

console.log (Vova);
