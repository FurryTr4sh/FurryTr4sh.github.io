var arr = ['3', '4', '10'];  // Массив правильных вариантов ответа
var correctAnswers;
var correctInput1 = 'куки';
var correctInput2 = 'cookie';


// Попытка переписать скрипт активности кнопки, но пока чёт не очень
$('input[type=checkbox], input[type=radio]').click(function(event) {
	if ($('.group1, .group2').is(':checked')) {
		$('#CheckResult').prop('disabled', false);
	}
	else {
		$('#CheckResult').prop('disabled', true);
	}
});

// Поле ввода будет расти в зависимости от кол-ва введённых символов, т. к. допускается два варианта ответов: на русском и на английском
$('#firstinput').autoGrowInput({ 
	minWidth: 40, maxWidth: 60
});

$('#firstinput').autoGrowInput({
	minWidth: 40, maxWidth: function() {
		return $('.InputsTaskDiv').width()-22;
	}, comfortZone: 0
});

$(window).resize(function() {
	$('#firstinput').trigger('autogrow');
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
	var str1 = str1.toLowerCase();
	if (str1 == correctInput1 || str1 == correctInput2) {
		correctAnswers++;
		$('#firstinput').css('border-color', '#2ce20d');
	}
	else {
		$('#firstinput').css('border-color', 'red');
	}

	if (correctAnswers <= 1) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 2');
	}
	else if (correctAnswers <= 2) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 3');
	}
	else if (correctAnswers == 3) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 4');
	}
	else if (correctAnswers == 4) {
		alert('Правильных ответов: '+correctAnswers+' из 4. Оценка 5');
	}
}

$('#CheckResult').on('click', function() {
	$('.span-hint').css('display', 'block');
});

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