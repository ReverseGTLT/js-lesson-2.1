var name = prompt('Введите имя', '');
var lastName = prompt('Введите фамилию', '');
var age = prompt('Полных лет', '');
alert(name + ' ' + lastName + ' ' + age + ' лет');

var number = prompt('Введите пятизначное число (без пробелов)', '');
function spaceDigits(number) {
  return number.toString().replace(/(\d)(?=(\d)+([^\d]|$))/g, '$1 ');
}
alert('Разложенное число ' + spaceDigits(number));