$(function() {
    $(".tip").hide();
    $("input").hover(function() {
    $(this).next(".tip").stop(true, false).animate({
      opacity: "show",
      right: "-118"
    }, "slow");
  }, function() {
    $(this).next(".tip").stop(true, false).animate({opacity: "hide", right: "-118"}, "slow");
  });

  $("button").on('click', function(){
      $(".tip").show();
  })

});
