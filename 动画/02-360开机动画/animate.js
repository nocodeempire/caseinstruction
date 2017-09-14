/**
 * Created by HUCC on 2017/5/14.
 */
//1. 让支持多种样式
function animate(element, obj, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    
    var flag = true;
    
    for(var k in obj){
      var attr = k;
      var target = obj[k];
      var leader = getStyle(element, attr);//带px
      leader = parseInt(leader) || 0;
      
      var step = (target - leader) / 20;
      ///保证step最少都跑1px
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      leader += step;
      element.style[attr] = leader + "px";
      if (leader != target) {
        flag = false;
      }
    }
    
    if(flag) {
      clearInterval(element.timer);
      fn && fn();
    }
  }, 15);
}

//获取计算后的样式
function getStyle(element, attr) {
  if(window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  }else {
    return element.currentStyle[attr];
  }
}