var arr = ['1', '5'];  // Массив правильных вариантов ответа
var correctAnswers;

var test = "";
var blocks_answer = "ffstl";


function answer() { // Функция подсчёта количества правильных ответов
		correctAnswers = 0;
	for (i of arr) {
		document.getElementById('f' + i).setAttribute('class', 'a');  // Присваивание класса 'a' каждому элементу из массива для подсветки
		if (document.getElementById('r' + i).checked == false) {		
		}
		else {
			correctAnswers++;
		}
	}


	$(".div-block.ui-sortable-handle").each(function() {
		test = test + $(this).attr('id');
	});

	if (test == blocks_answer) {
		console.log(test);
		console.log("Правильно");
		correctAnswers++;
	}
	else {
		console.log(test);
		console.log("Неправильно");
	}


	if (correctAnswers == 0) {
		alert('Правильных ответов: '+correctAnswers+' из 3. Оценка 2');
	}
	else if (correctAnswers == 1) {
		alert('Правильных ответов: '+correctAnswers+' из 3. Оценка 3');
	}
	else if (correctAnswers == 2) {
		alert('Правильных ответов: '+correctAnswers+' из 3. Оценка 4');
	}
	else if (correctAnswers == 3) {
		alert('Правильных ответов: '+correctAnswers+' из 3. Оценка 5');
	}
};


if (localStorage.getItem("ui") !== null) {
	// Если в localStorage есть элемент, то включена светлая тема
	$("body").addClass("body-light");
	$(".nav").addClass("nav-light");
	$(".white-text").addClass("white-text-light");
	$("h3").addClass("h3-light");
	$("label").addClass("label-light");
}
else {
	// Иначе же будет включено тёмное оформление
	$("body").removeClass("body-light");
	$(".nav").removeClass("nav-light");
	$(".white-text").removeClass("white-text-light");
	$("h3").removeClass("h3-light");
	$("label").removeClass("label-light");
}