$('#rst-btn').mouseenter(function (){
	$(this).addClass("btn-danger");
	$(this).removeClass("btn-warning");
});
$('#rst-btn').mouseleave(function (){
	$(this).removeClass("btn-danger");
	$(this).addClass("btn-warning");
});
$('#start-button').mouseenter(function (){
	$(this).addClass("btn-primary");
	$(this).removeClass("btn-success");
});
$('#start-button').mouseleave(function (){
	$(this).removeClass("btn-primary");
	$(this).addClass("btn-success");
});