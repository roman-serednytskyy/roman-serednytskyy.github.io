$(function() {
$(".tabContents").hide();
$(".tabContents:first").show();

$(".contaier ul li a").click(function(e){
     var activeTab = $(this).attr("href");
    $(".contaier ul li a").removeClass("active");
     $(this).addClass("active");
     $(".tabContents").hide();
     $(activeTab).fadeIn(700);
    e.preventDefault();
	});
});
