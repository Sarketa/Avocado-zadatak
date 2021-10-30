$(function () {
  $(".nav li a").on("click", function () {
    $(".nav li a").removeClass("active");
    $(this).addClass("active");
  });
  $(".lang .dugme").on("click", function(){
    $(".lang .dugme").removeClass("active");
    $(this).addClass("active");
  })
  $("#myBtn").click(function(){
    $("html, body").animate({scrollTop: '0px'}, 200);
  })
});

