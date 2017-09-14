/**
 * Created by HUCC on 2017/5/13.
 */

//轮播图功能
(function () {
  
  //1. 找对象
  var slide = document.getElementById("slide");
  var imgUl = document.getElementsByClassName("imgs")[0];
  var imgLis = imgUl.children;//伪数组
  
  var arrow = document.getElementsByClassName("arrow")[0];
  var arrowLeft = arrow.children[0];
  var arrowRight = arrow.children[1];
  
  var circleUl = document.getElementsByClassName("circle")[0];
  var circleLis = circleUl.children;
  
  var imgWidth = slide.offsetWidth;
  
  
  //添加一张假图片
  var cloneImg = imgLis[0].cloneNode(true);
  imgUl.appendChild(cloneImg);
  
  var timer = null;
  
  var count = 0;
  
  
  //2. 小圆点轮播图
  //2.1 给所有的小圆点注册点击事件
  for (var i = 0; i < circleLis.length; i++) {
    //先存一个索引
    circleLis[i].index = i;
    circleLis[i].onclick = function () {
      //2.2 小圆点排他
      for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].className = "";
      }
      this.className = "current";
      
      
      //偷偷摸摸干一件事情
      if (count == imgLis.length - 1) {
        count = 0;
        imgUl.style.left = 0;
      }

      //2.3 移动ul
      var target = -this.index * imgWidth;
      animate(imgUl, target, 40);
      count = this.index;  //需要让count跟imgUl一起改
    }
  }
  
  
  //3. 左右焦点图（无缝）
  //3.1 点击右箭头
  
  arrowRight.onclick = function () {
    //无缝,如果是假图片，偷偷摸摸的换成真
    // 图片
    if (count == imgLis.length - 1) {
      count = 0;
      imgUl.style.left = 0;
    }
    
    count++;
    var target = -count * imgWidth;
    animate(imgUl, target, 40);
    
    
    //控制小圆点亮
    
    //让所有的小圆点都不亮
    for (var i = 0; i < circleLis.length; i++) {
      circleLis[i].className = "";
    }
    
    
    // 让count亮
    if (count == imgLis.length - 1) {
      circleLis[0].className = "current";
    }else {
      circleLis[count].className = "current";
    }
    
  }
  
  //3.2 点击左箭头
  arrowLeft.onclick = function () {
    //无缝， 如果是真图片，偷偷摸摸的换成假图片
    if (count == 0) {
      count = imgLis.length - 1;
      imgUl.style.left = -count * imgWidth + "px";
    }
    count--;
    var target = -count * imgWidth;
    animate(imgUl, target, 40);
    
    
    //让所有的小圆点都不亮
    for (var i = 0; i < circleLis.length; i++) {
      circleLis[i].className = "";
    }
    
    //让count亮
    circleLis[count].className = "current";
    
  }
  
  
  //4. 自动轮播
  timer = setInterval(function () {
      arrowRight.onclick();
  }, 1000);
  
  slide.onmouseover = function () {
      clearInterval(timer);
  }
  
  slide.onmouseout = function () {
  
    clearInterval(timer);
    timer = setInterval(function () {
      arrowRight.onclick();
    }, 1000);
  }
  
})();

