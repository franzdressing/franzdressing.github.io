$( document ).ready(function() {
    $("#snackButton02").on('click mouseover', function() {
    	$("#snackBowl01").show();
    	$("#snackBowl02").hide();
    	$("#snackBowl03").hide();
    	$("#snackBar").css('background-position','-15px 0');
    });
    $("#snackButton03").on('click mouseover', function() {
    	$("#snackBowl02").show();
    	$("#snackBowl03").hide();
    	$("#snackBar").css('background-position','-30px 0');
    });
    $("#snackButton04").on('click mouseover', function() {
    	$("#snackBowl03").show();
    	$("#snackBar").css('background-position','-45px 0');
    });
    $("#snackButton01").on('click mouseover', function() {
    	$("#snackBowl01").hide();
    	$("#snackBowl02").hide();
    	$("#snackBowl03").hide();
    	$("#snackBar").css('background-position','0px 0');
    });
});