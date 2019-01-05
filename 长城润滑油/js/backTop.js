$(function(){
	  //返回顶部JS
    var $backToTopEle = $('<div class="backgTop"></div>').appendTo($("body")).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
        //定义了两个变量：scrollTop()设置垂直滚动条的值     获取window的高
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide(); //高度大于0就显示，否则隐藏
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });
})
