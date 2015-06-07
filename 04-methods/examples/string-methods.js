var sEmails = 'mail@mail.com, mail@gmail.com, mail@yandex.ru, mail@msn.com';
var aEmails = sEmails.split(', ');
console.log(aEmails, sEmails); // initial string was not changed





var greetingTemplate = "Hello, {{name}}";
var name = "Eugen";

var greetingString = template.replace('{{name}}', name);
console.log(greetingString)




// var s = "mail#mdn.com";
var s = "mail@gmail.com";
var containsAt = s.indexOf('@') !== -1;
var containsGmail = s.indexOf('gmail') !== -1;

console.log(containsAt, containsGmail); // true, true