var mmAcademy = {
  teacherRoot: "/Users/podgorniy/Dropbox/Academy/2014_11/teacher/",
  studentsRoot: "/Users/podgorniy/Dropbox/Academy/2014_11/students/",
  folderToCopyForStudent: ["examples", "task"],
  students: [{
    name: "Afanasiy Sergeevich",
    skype: "afanas",
    email: "afanas@gmail.com"
  }, {
    name: "Petro Kush",
    skype: "petrokush",
    email: "petrokush@gmail.com"
  }, {
    name: "Masha Kirook",
    skype: "mkrook",
    email: "masha.kirook@hotmail.com"
  }, {
    name: "Polina Medova",
    skype: "polinamedova",
    email: "p.medova@mail.ru"
  }]
};


var student1 = mmAcademy.students[0];
var student2 = {
  name: "Afanasiy Sergeevich",
  skype: "afanas",
  email: "afanas@gmail.com"
};
console.log(student1 === student2); // false


var arr1 = [];
var arr2 = [];
console.log(arr1 === arr2); // false





var student1 = mmAcademy.students[0];
var student2 = mmAcademy.students[0];


student1.mark = 4.3;
console.log(student2);





