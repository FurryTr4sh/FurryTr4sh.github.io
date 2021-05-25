var arr = ['1', '7', '8'];  // Массив правильных вариантов ответа
var correctAnswers
var correctInput = "progressvalue25";

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

		var str1 = $("#firstinput").val();
		var str2 = $("#secondinput").val();
		var str3 = $("#thirdinput").val();
		if (str1+str2+str3 == correctInput) {
			correctAnswers++;
		}

	if (correctAnswers <= 1) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 2');
	}
	else if (correctAnswers < 1) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 3');
	}
	else if (correctAnswers == 3) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 4');
	}
	else if (correctAnswers == 4) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 5');
	}
}