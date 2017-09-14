$(function(){
		// 初始化JS
		$('#dowebok').fullpage({
			// 设置锚点 （哈希）
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			// 无缝滚动
    		continuousVertical : true,
    		// 绑定自定义的菜单栏
    		menu : '#menu',
    		// 设置侧边导航 默认值是false
    		'navigation': true,
    		// 当滚动到哪一屏的回调函数  接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
			afterLoad : function(anchorLink, index){
    			// 当滚动到哪一屏，干掉当前这一屏的comeout类
    			$('.section').eq(index - 1).removeClass('comeout').siblings().addClass('comeout');
    		},
    		// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
			// index 是离开的“页面”的序号，从1开始计算；

			// nextIndex 是滚动到的“页面”的序号，从1开始计算；

			// direction 判断往上滚动还是往下滚动，值是 up 或 down。
			onLeave : function(index,nextIndex,direction){
				console.log('我要开始滚动了，我现在在第'+index +'屏，方向为：'+ direction + '我即将去往第'+nextIndex+'屏');
			}
		});
	})