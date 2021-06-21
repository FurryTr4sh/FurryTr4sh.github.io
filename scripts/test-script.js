$(function() {	// До тех пор, пока все radio не будут отмечены, кнопка проверки результатов будет неактивной
	var button = $('#CheckResult').prop('disabled', true);
	var radios = $('input[type="radio"]');
	var arr = $.map(radios, function(el) { 
    	return el.name; 
  	});

    var groups = $.grep(arr, function(v, k) {
        return $.inArray(v, arr) === k;
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

function jumpToNext(x) {   // При заполнении текстового поля перейти к следующему
    var ml = ~~x.getAttribute('maxlength');
    if (ml && x.value.length >= ml) {
        do {
            x = x.nextSibling;
        }
        while (x && !(/text/.test(x.type)));
        if (x && /text/.test(x.type)) {
            x.focus();
        }
    }
}

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