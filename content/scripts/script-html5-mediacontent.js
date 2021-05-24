var arr = ['1', '7', '8', '', '', ''];  // Массив правильных вариантов ответа
var correctAnswers
function answer() {  // Функция подсчёта количества правильных ответов
	correctAnswers = 0;
	for (i of arr) {
		document.getElementById('f' + i).setAttribute('class', 'a');  // Присваивание класса 'a' каждому элементу из массива для подсветки
		if (document.getElementById('r' + i).checked == false) {		
		}
		else {
			correctAnswers++;
		}
	}
	if (correctAnswers < 4) {
		alert('Правильных ответов: '+correctAnswers+' из 10. Оценка 2');
	}
	else if (correctAnswers >= 4 && correctAnswers <= 6 ) {
		alert('Правильных ответов: '+correctAnswers+' из 10. Оценка 3');
	}
	else if (correctAnswers >= 7 && correctAnswers <= 8) {
		alert('Правильных ответов: '+correctAnswers+' из 10. Оценка 4');
	}
	else if (correctAnswers >= 9) {
		alert('Правильных ответов: '+correctAnswers+' из 10. Оценка 5');
	}
}