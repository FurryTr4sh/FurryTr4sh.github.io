var arr = ['4', '7', '9', '15'];  // Массив правильных вариантов ответа
var correctAnswers
function answer() {  // Функция подсчёта количества правильных ответов
	correctAnswers = 0;
	for (i of arr) {
		document.getElementById('l' + i).setAttribute('class', 'a');  // Присваивание класса 'a' каждому элементу из массива для подсветки
		/*console.log(i);*/
		if (document.getElementById('r' + i).checked == false) {
			/*console.log(i + ' неправильно');*/
		}
		else {
			correctAnswers++;
		}
	}
	alert('Правильных ответов: '+correctAnswers+' из 4');
}