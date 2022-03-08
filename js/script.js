$(function(){
  start();
  var imgs = 2;
  var now = 0;
  function start(){
    $("#eventslide img").eq(0).siblings().fadeOut();
    setInterval(function(){slide();},3000);
  };
  function slide(){
    now=now==imgs?0:now+=1;
    $("#eventslide img").eq(now-1).fadeOut();
    $("#eventslide img").eq(now).fadeIn();
  };
});

$(function(){
  $("#board li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on");
  });
});

$(function(){
  $(".under").hide();
  $("#gnb li").mouseenter(function(){
      $(this).children(".under").stop().slideDown()
  });
  $("#gnb li").mouseleave(function(){
    $(this).children(".under").stop().slideUp()
});
});

