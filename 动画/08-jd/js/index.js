/**
 * Created by HUCC on 2017/4/2.
 */
(function () {
  
  //1. 找对象
  
  //getElementsByClassName返回的是维数组，需要取出来
  var slider = document.getElementsByClassName("slider")[0];
  var imgUL = slider.children[0];
  var imgLis = imgUL.children;
  var arrow = slider.children[1];
  var leftArrow = arrow.children[0];
  var rightArrow = arrow.children[1];
  var circle = slider.children[2];
  var circleLis = circle.children;
  
  var imgWidth = slider.offsetWidth;
  
  var timer;
  
  var count = 0;
  
  //1. 定义锁
  var lock = true;

//2. 简单轮播图的功能
//2.1 给circleLis注册点击事件
  for (var i = 0; i < circleLis.length; i++) {
    
    circleLis[i].index = i;
    
    circleLis[i].onclick = function () {
      //2.2 排他
      //2.2.1 干掉所有人
      for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].className = "";
      }
      //2.2.2 复活我自己
      this.className = "current";
      
      
      //如果是假图片，瞬间变成真图片
      if (count >= imgLis.length - 1) {
        count = 0;
        imgUL.style.left = "0px";
      }
      
      
      //2.3 移动ul,需要用到animate
      var target = -this.index * imgWidth;
      animate(imgUL, {left: target});
      
      
      //更改count
      count = this.index;
      
    };
  }

//3. 左右焦点功能
//3.1 点击右箭头
  
  rightArrow.onclick = function () {
    
    if (lock) {
      
      //关门
      lock = false;
      
      //3.1.1 如果发现时最后一张了，瞬间变成第一张
      if (count >= imgLis.length - 1) {
        count = 0;
        imgUL.style.left = "0px";
      }
      
      //3.1.2 让图片往右走一张
      count++;
      var target = -count * imgWidth;
      animate(imgUL, {left: target}, function () {
        lock = true;
      });
      
      
      //3.1.3 同步小圆点
      //3.1.3.1 先把所有的小圆点干掉
      for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].className = "";
      }
      //3.1.3.2 复活count小圆点
      //在假图片的时候，会出问题，假图片对应的小圆点其实下标为0的那个
      console.log(count);
      if (count >= imgLis.length - 1) {
        circleLis[0].className = "current";
      } else {
        circleLis[count].className = "current";
      }
    }
    
  };
//3.2 点击左箭头
  leftArrow.onclick = function () {
    //3.2.1 如果是真图片，需要瞬间换成假图片
    if (count <= 0) {
      count = imgLis.length - 1;
      imgUL.style.left = -count * imgWidth + "px";
    }
    
    //3.2.2 让ul往右移动一张图片
    count--;
    var target = -count * imgWidth;
    animate(imgUL, {left: target});
    
    
    //3.1.3 同步小圆点
    //3.1.3.1 先把所有的小圆点干掉
    for (var i = 0; i < circleLis.length; i++) {
      circleLis[i].className = "";
    }
    //3.1.3.2 复活count小圆点
    //在假图片的时候，会出问题，假图片对应的小圆点其实下标为0的那个
    console.log(count);
    if (count >= imgLis.length - 1) {
      circleLis[0].className = "current";
    } else {
      circleLis[count].className = "current";
    }
    
    
  };


//4. 自动播放功能
  timer = setInterval(function () {
    rightArrow.click();
  }, 2000);
  
  slider.onmouseover = function () {
    clearInterval(timer);
  };
  
  slider.onmouseout = function () {
    timer = setInterval(function () {
      rightArrow.click();
    }, 2000);
  };
  
})();

