/**
 * Created by HUCC on 2017/5/13.
 */
(function () {
  
  //1. 找对象
  var slide = document.getElementById("slide");
  
  var imgUl = document.getElementsByClassName("imgs")[0];
  var imgLis = imgUl.children;
  
  var arrow = document.getElementsByClassName("arrow")[0];
  var arrLeft = arrow.children[0];
  var arrRight = arrow.children[1];
  
  var circleUl = document.getElementsByClassName("circle")[0];
  var circleLis = circleUl.children;
  
  var imgWidth = slide.offsetWidth;
  
  imgUl.appendChild(imgLis[0].cloneNode(true));
  
  var count = 0;
  
  //2. 简单轮播功能
  //2.1 注册点击事件
  for (var i = 0; i < circleLis.length; i++) {
    circleLis[i].index = i;
    circleLis[i].onclick = function () {
      //2.2 小圆点高亮排他
      for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].className = "";
      }
      this.className = "current";
  
      if (count == imgLis.length - 1) {
        count = 0;
        imgUl.style.left = 0;
      }
      
      //2.3 移动ul
      var target = -this.index * imgWidth;
      animate(imgUl, target, 40);
      count = this.index;
    }
  }
  
  //3. 左右焦点功能
  
  arrRight.onclick = function () {
    if (count == imgLis.length - 1) {
      count = 0;
      imgUl.style.left = 0;
    }
    
    count++;
    var target = -count * imgWidth;
    animate(imgUl, target, 40);
    
    //小圆点
    for (var i = 0; i < circleLis.length; i++) {
      circleLis[i].className = "";
    }
    
    if (count == imgLis.length - 1) {
      circleLis[0].className = "current";
    } else {
      circleLis[count].className = "current";
    }
    
  };
  
  arrLeft.onclick = function () {
    if (count == 0) {
      count = imgLis.length - 1;
      imgUl.style.left = -count * imgWidth + "px";
    }
    
    count--;
    var target = -count * imgWidth;
    animate(imgUl, target, 40);
    
    //小圆点
    for (var i = 0; i < circleLis.length; i++) {
      circleLis[i].className = "";
    }
    
    circleLis[count].className = "current";
  };
  
  
  //自动轮播功能
  var timer = setInterval(function () {
    arrRight.onclick();
  }, 1000);
  
  slide.onmouseover = function () {
      clearInterval(timer);
  }
  
  slide.onmouseout = function () {
    clearInterval(timer);
    timer = setInterval(function () {
      arrRight.onclick();
    }, 1000);
  }
  
})();
