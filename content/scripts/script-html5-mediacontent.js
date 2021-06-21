var arr = ['1', '7', '8'];  // Массив правильных вариантов ответа
var correctAnswers;
var correctInput1 = "progress";
var correctInput2 = "value";
var correctInput3 = "25";

var test = "";
var blocks_answer = "fstl";

// Поле ввода будет расти в зависимости от ширины символов
$('#firstinput').autoGrowInput({ 
	minWidth: 78, maxWidth: 114
});
$('#firstinput').autoGrowInput({
	minWidth: 78, maxWidth: function() {
		return $('.InputsTaskDiv').width()-22;
	}, comfortZone: 0
});
$(window).resize(function() {
	$('#firstinput').trigger('autogrow');
});

$('#secondinput').autoGrowInput({ 
	minWidth: 48, maxWidth: 65
});
$('#secondinput').autoGrowInput({
	minWidth: 48, maxWidth: function() {
		return $('.InputsTaskDiv').width()-22;
	}, comfortZone: 0
});
$(window).resize(function() {
	$('#secondinput').trigger('autogrow');
});

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
	var str1 = str1.toLowerCase();
	var str2 = str2.toLowerCase();
	if (str1 == correctInput1) {
		$('#firstinput').css('border-color', '#2ce20d');
		correctAnswers++;
	}
	else {
		$('#firstinput').css('border-color', 'red');
	}
	if (str2 == correctInput2) {
		$('#secondinput').css('border-color', '#2ce20d');
		correctAnswers++;
	}
	else {
		$('#secondinput').css('border-color', 'red');
	}
	if (str3 == correctInput3) {
		$('#thirdinput').css('border-color', '#2ce20d');
		correctAnswers++;
	}
	else {
		$('#thirdinput').css('border-color', 'red');
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
	

	if (correctAnswers <= 2) {
		alert('Правильных ответов: '+correctAnswers+' из 7. Оценка 2');
	}
	else if (correctAnswers == 3) {
		alert('Правильных ответов: '+correctAnswers+' из 7. Оценка 3');
	}
	else if (correctAnswers >= 4 && correctAnswers <= 6) {
		alert('Правильных ответов: '+correctAnswers+' из 7. Оценка 4');
	}
	else if (correctAnswers == 7) {
		alert('Правильных ответов: '+correctAnswers+' из 7. Оценка 5');
	}
}

$('#CheckResult').on('click', function() {
	$('.span-hint').css('display', 'block');
});
