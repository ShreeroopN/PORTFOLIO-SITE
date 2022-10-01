$(window).on("scroll",function(){
  if(window.pageYOffset > 380){
    $(".navbar").slideDown();
  } else{
    $(".navbar").slideUp();
  }
});

if (navigator.userAgent.match(/Mobile/)){
  $(".navbar").css("background-color", "transparent");
  $(".navbar-brand").css("display", "none");
}
