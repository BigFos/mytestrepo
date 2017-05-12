$(document).ready(function() {
$("#q1").hide();
$("#q2").hide();
$("#q3").hide();
$("#q4").hide();
$("#q5").hide();
$("#q6").hide();
$("#q7").hide();
$("#q8").hide();
$("#q9").hide();
$("#q10").hide();
$("#q1r").hide();
$("#q1w").hide();
$("#q2r").hide();
$("#q2w").hide();
$("#q3r").hide();
$("#q3w").hide();
$("#q4r").hide();
$("#q4w").hide();
$("#q5r").hide();
$("#q5w").hide();
$("#q6r").hide();
$("#q6w").hide();
$("#q7r").hide();
$("#q7w").hide();
$("#q8r").hide();
$("#q8w").hide();
$("#q9r").hide();
$("#q9w").hide();
$("#q10r").hide();
$("#q10w").hide();

function hide() {
	$("#q1").hide();
	$("#q2").hide();
	$("#q3").hide();
	$("#q4").hide();
	$("#q5").hide();
	$("#q6").hide();
	$("#q7").hide();
	$("#q8").hide();
	$("#q9").hide();
	$("#q10").hide();
	$("#q1r").hide();
	$("#q1w").hide();
	$("#q2r").hide();
	$("#q2w").hide();
	$("#q3r").hide();
	$("#q3w").hide();
	$("#q4r").hide();
	$("#q4w").hide();
	$("#q5r").hide();
	$("#q5w").hide();
	$("#q6r").hide();
	$("#q6w").hide();
	$("#q7r").hide();
	$("#q7w").hide();
	$("#q8r").hide();
	$("#q8w").hide();
	$("#q9r").hide();
	$("#q9w").hide();
	$("#q10r").hide();
	$("#q10w").hide();

}

function q1() {
    $("#q1").show();
}
function q2() {
    $("#q2").show();
}
setTimeout(q1, 1000 * 5);
setTimeout(hide, 1000 * 10);
setTimeout(q2, 1000 * 11)
setTimeout(hide, 1000 * 16);

}); // End of document ready