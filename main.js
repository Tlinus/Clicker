linesOfCode = 0;

function getRandom(){
  return Math.floor(Math.random() * (1 - 6) + 6);
}

function animRandom(el){
  animation = ['pulse','flash','bounce','wobble',"flip", "rotateIn","zoomIn"];
  el.addClass(animation[getRandom()]);
  el.addClass('animated');
  setTimeout(function(){
    el.removeClass('animated');
  }, 250);
}

function animScale(el){
  el.css("transform","scale(1.25)");
  el.css("transition","transform 0.25s");
}

$('#code').click(function(){
  linesOfCode++;
  $('#linesOfCode').html(linesOfCode);
  animScale($(this));
});
