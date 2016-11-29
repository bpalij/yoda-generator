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
function generate(){
	$(".wait").css("visibility", "visible");
	var originStr = $("#input-field").val();
	var endSymbol="";
	var noSpace = originStr.match(/\S/gi);
	if (noSpace===null) {
		alert("Incorrect input! Fill the field!");
		$(".wait").css("visibility", "hidden");
		return;
	}
	if (/[?!\.]/i.test(noSpace[noSpace.length-1] )) endSymbol=noSpace[noSpace.length-1];
	var wordsArr = originStr.match(/[A-Za-z0-9_А-ЯЁа-яё]+/gi);
	if (wordsArr===null) {
		alert("Incorrect input! [A-Za-z0-9_А-ЯЁа-яё] not found!");
		$(".wait").css("visibility", "hidden");
		return;
	}
	var n = wordsArr.length;
	if (n<2) {
		alert("Incorrect input! Minimum 2 words required!");
		$(".wait").css("visibility", "hidden");
		return;
	}
	wordsArr[0]=wordsArr[0][0].toLowerCase()+wordsArr[0].substr(1);	
	var randomized=[];
	var wordIsUsed=[];
	for (var i = 0; i < n; i++) {
		wordIsUsed[i]=false;
	}
	for (var i = 0; i < n; i++) {
		var generated = randomUnusedNumber(wordIsUsed);
		randomized[i]=wordsArr[generated];
		wordIsUsed[generated]=true;}
	randomized[0]=randomized[0][0].toUpperCase()+randomized[0].substr(1);
	var result = randomized.join(" ")+endSymbol;
	$("#output-string").text(result);
	$(".wait").css("visibility", "hidden");
};
function rangeRandomWhole(min,max){
	return (Math.floor(Math.random()*(max-min+1)+min));
};
function randomUnusedNumber(boolArr){
	var n = boolArr.length;
	var result = -1;
	var generated;
	do{
		generated=rangeRandomWhole(0,n-1);
		if (!boolArr[generated]) result=generated;
	} while(result===-1);
	return result;
}