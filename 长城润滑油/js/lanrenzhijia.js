//鼠标经过预览图片函数
	function preview(img){
		$("#preview .jqzoom img").attr("src",$(img).attr("src"));
		$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
	}
	//图片放大镜效果
	$(function(){
		$(".jqzoom").jqueryzoom({xzoom:436,yzoom:436});
	});
	
	//图片预览小图移动效果,页面加载时触发
	$(function(){
		var tempLength = 0; //临时变量,当前移动的长度
		var viewNum = 5; //设置每次显示图片的个数量
		var moveNum = 2; //每次移动的数量
		var moveTime = 300; //移动速度,毫秒
		var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
		var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
		var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
		var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
	});

