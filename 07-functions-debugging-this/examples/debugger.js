function sayHi(person) {
  function getHello(age) {
    return age >= 18 ? 'Здравствуйте' : 'Привет';
  }

  function makeMessage(person) {
    return getHello(person.age) + ', ' + person.name;
  }

  return function() {
    var message = makeMessage(person);
    alert(message);
  };
}

var sayHiPete = sayHi({
  name: 'Петька',
  age: 17
});



var sayHiOther = sayHi({
  name: 'Василий Иванович',
  age: 35
});



sayHiPete();