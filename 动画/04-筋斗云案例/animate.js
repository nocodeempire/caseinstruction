/**
 * Created by HUCC on 2017/5/13.
 */
function animate(element, target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    
    var step = (target - leader) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    leader += step;
    element.style.left = leader + "px";
    
    if (leader == target) {
      clearInterval(element.timer);
    }
  }, 15);
}