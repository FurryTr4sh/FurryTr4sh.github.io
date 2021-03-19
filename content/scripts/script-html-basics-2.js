var arr = ['3', '5', '6', '7', '12', '15', '18', '19', '21', '25'];  // Массив правильных вариантов ответа
var correctAnswers
function answer() {  // Функция подсчёта количества правильных ответов
	correctAnswers = 0;
	for (i of arr) {
		document.getElementById('l' + i).setAttribute('class', 'a');  // Присваивание класса 'a' каждому элементу из массива для подсветки
		if (document.getElementById('r' + i).checked == false) {		
		}
		else {
			correctAnswers++;
		}
	}
	alert('Правильных ответов: '+correctAnswers+' из 10');
}