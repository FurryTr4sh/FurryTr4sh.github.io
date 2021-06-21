if (localStorage.getItem("ui") !== null) {
	// Если в localStorage есть элемент, то включена светлая тема
	$("#switcher-label").attr("id", "switcher-label-light");
	$("#switcher").attr("id", "switcher-light");
	$("label").attr("for", "switcher-light");
	$("#theme-toggler").attr("id", "theme-toggler-light");
	$("#switcher-label-light").css("right", "3%");

	$("body").addClass("body-light");
	$(".nav").addClass("nav-light");
	$("h1").addClass("h1-light");
	$("h2").addClass("h2-light");
	$("h3").addClass("h3-light");
	$("p").addClass("p-light");
	$(".white-text").addClass("white-text-light");
	$(".code").addClass("code-light");
	$(".hint").addClass("hint-light");
	$(".tagB").addClass("tagB-light");
	$(".help-tag").addClass("help-tag-light");
	$(".div-p").addClass("div-p-light");
	$("b").addClass("b-light");
	$(".help-attr").addClass("help-attr-light");
	$(".help-value").addClass("help-value-light");
	$(".help-attr-exc").addClass("help-attr-exc-light");
	$(".help-tag-exc").addClass("help-tag-exc-light");
	$(".help-value-exc").addClass("help-value-exc-light");
	$(".hint-link").addClass("hint-link-light");
	$(".linktext").addClass("linktext-light");
	$(".redtext").addClass("redtext-light");
	$(".greentext").addClass("greentext-light");
	$(".bluetext").addClass("bluetext-light");
	$(".hint-help").addClass("hint-help-light");
	$(".b-bold").addClass("b-bold-light");
	$(".ST3").addClass("ST3-light");
	$(".ul-list").addClass("ul-list-light");
}
else {
	// Иначе же будет включено тёмное оформление
	$("#switcher-label-light").animate({ right: "62%" }, 200);
	$("#switcher-label-light").attr("id", "switcher-label");
	$("label").attr("for", "switcher");
	$("#theme-toggler-light").attr("id", "theme-toggler");
	$("#switcher-light").attr("id", "switcher");

	$("body").removeClass("body-light");
	$(".nav").removeClass("nav-light");
	$("h1").removeClass("h1-light");
	$("h2").removeClass("h2-light");
	$("h3").removeClass("h3-light");
	$("p").removeClass("p-light");
	$(".white-text").removeClass("white-text-light");
	$(".code").removeClass("code-light");
	$(".hint").removeClass("hint-light");
	$(".tagB").removeClass("tagB-light");
	$(".help-tag").removeClass("help-tag-light");
	$(".div-p").removeClass("div-p-light");
	$("b").removeClass("b-light");
	$(".help-attr").removeClass("help-attr-light");
	$(".help-value").removeClass("help-value-light");
	$(".help-attr-exc").removeClass("help-attr-exc-light");
	$(".help-tag-exc").removeClass("help-tag-exc-light");
	$(".help-value-exc").removeClass("help-value-exc-light");
	$(".hint-link").removeClass("hint-link-light");
	$(".linktext").removeClass("linktext-light");
	$(".redtext").removeClass("redtext-light");
	$(".greentext").removeClass("greentext-light");
	$(".bluetext").removeClass("bluetext-light");
	$(".hint-help").removeClass("hint-help-light");
	$(".b-bold").removeClass("b-bold-light");
	$(".ST3").removeClass("ST3-light");
	$(".ul-list").removeClass("ul-list-light");
}

// Включение светлой темы
$("#switcher").click(function() {
	localStorage.setItem("ui", "light-ui");
	$("#switcher-label").animate({ right: "3%" }, 200);
	$("#switcher-label").attr("id", "switcher-label-light");
	$("label").attr("for", "switcher-light");
	$("#theme-toggler").attr("id", "theme-toggler-light");
	$("#switcher").attr("id", "switcher-light");
	setTimeout(location.reload.bind(location), 200);
});

// Включение тёмной темы
$("#switcher-light").click(function() {
	localStorage.removeItem("ui", "light-ui");
	$("#switcher-label-light").animate({ right: "62%" }, 200);
	$("#switcher-label-light").attr("id", "switcher-label");
	$("label").attr("for", "switcher");
	$("#theme-toggler-light").attr("id", "theme-toggler");
	$("#switcher-light").attr("id", "switcher");
	setTimeout(location.reload.bind(location), 200);
});