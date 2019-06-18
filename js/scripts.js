$( document ).ready(function() {
    $("#snackButton02").on('click mouseover', function() {
    	$("#snackBowl01").show();
    	$("#snackBowl02").hide();
    	$("#snackBowl03").hide();
    	$("#snackBar").css('background-image','url(img/bar-02.gif)');
    });
    $("#snackButton03").on('click mouseover', function() {
    	$("#snackBowl02").show();
    	$("#snackBowl03").hide();
    	$("#snackBar").css('background-image','url(img/bar-03.gif)');
    });
    $("#snackButton04").on('click mouseover', function() {
    	$("#snackBowl03").show();
    	$("#snackBar").css('background-image','url(img/bar-04.gif)');
    });
    $("#snackButton01").on('click mouseover', function() {
    	$("#snackBowl01").hide();
    	$("#snackBowl02").hide();
    	$("#snackBowl03").hide();
    	$("#snackBar").css('background-image','url(img/bar-01.gif)');
    });

    $("#julianSkills02").on('click', function() {
        $("#julianEars").toggle();
        $("#julianTail").toggle();
    });
});