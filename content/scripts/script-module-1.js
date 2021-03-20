$(function() {	// До тех пор, пока все radio не будут отмечены, кнопка проверки результатов будет неактивной
	var button = $('#CheckResult').prop('disabled', true);
	var radios = $('input[type="radio"]');
	var arr = $.map(radios, function(el) { 
    	return el.name; 
  	});

    var groups = $.grep(arr, function(v, k) {
        return $.inArray(v ,arr) === k;
	}).length;

	radios.on('change', function () {
		button.prop('disabled', radios.filter(':checked').length < groups);
	});

	var checked_radios = $('input[type="radio"]');
	var amount_of_checked = checked_radios.length;
});

$(function() { // Кнопка сброса выбранных radio будет активна только до того момента, пока не будут отмечены все radio
	var button = $('#ClearInput').prop('disabled', false);
	var radios = $('input[type="radio"]');
	var arr = $.map(radios, function(el) { 
    	return el.name; 
  	});

	var groups = $.grep(arr, function(v, k) {
		return $.inArray(v ,arr) === k;
	}).length;

	radios.on('change', function () {
		button.prop('disabled', radios.filter(':checked').length === groups);
	});

	var checked_radios = $('input[type="radio"]');
	var amount_of_checked = checked_radios.length;
});

var arr = ['4', '7', '9', '15'];  // Массив правильных вариантов ответа
var correctAnswers
function answer() {  // Функция подсчёта количества правильных ответов
	correctAnswers = 0;
	for (i of arr) {
		document.getElementById('f' + i).setAttribute('class', 'a');  // Присваивание класса 'a' каждому элементу из массива для подсветки
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