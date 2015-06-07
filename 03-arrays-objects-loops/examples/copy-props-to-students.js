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

var students = [];
var keysToDuplicate = ['teacherRoot', 'studentsRoot', 'folderToCopyForStudent'];
var keyNameToDuplicate;
var processedStudent;
for (var i = 0; i < mmAcademy.students.length; i += 1) {
  processedStudent = mmAcademy.students[i];
  for (var j = 0; j < keysToDuplicate.length; j += 1) {
    keyNameToDuplicate = keysToDuplicate[j];
    processedStudent[keyNameToDuplicate] = mmAcademy[keyNameToDuplicate];
  }
}
console.dir(mmAcademy);