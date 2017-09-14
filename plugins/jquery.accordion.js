/**
 * Created by HUCC on 2017/5/23.
 */
$.fn.accordion = function (obj) {
  
  obj.colors = obj.colors || [];
  obj.minWidth = obj.minWidth || 0;
  
  var $li = this.find("li");
  //1. 给所有的li设置背景颜色
  
  //总盒子的宽度：
  var boxWidth = this.width();
  var liWidth = boxWidth / $li.length;
  var thisWidth = boxWidth - obj.minWidth * ($li.length - 1);
  
  $li.width(liWidth);
  
  $li.each(function (i, e) {
    $(e).css("backgroundColor", obj.colors[i]);
  });
  
  $li.on("mouseenter", function () {
    $(this).stop().animate({width: thisWidth}).siblings().stop().animate({width: obj.minWidth});
  });
  
  $li.on("mouseleave", function () {
    $li.stop().animate({width: liWidth});
  });
  
}