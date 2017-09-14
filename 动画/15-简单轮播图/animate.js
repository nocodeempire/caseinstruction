/**
 * Created by HUCC on 2017/5/11.
 */
//把里面所有的全局变量全部搞掉
function animate(element, target, num) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    var step = target > leader ? num : -num;
    console.log(step);
    if (Math.abs(target - leader) >= Math.abs(step)) {
      leader += step;
      element.style.left = leader + "px";
    } else {
      clearInterval(element.timer);
      //抱过去
      element.style.left = target + "px";
    }
  }, 15);
}