/**
 * Created by HUCC on 2017/5/23.
 */
$.fn.bgColor = function (color) {
  //原型里面的this，指的就是创建出来的对象。
  this.css("backgroundColor", color);
  
  //核心
  return this;
}