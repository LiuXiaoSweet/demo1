$(function(){
	//图片偏移
	var move_time=300;
	var move_range=13;
	$('.hover_moving_img').hover(function(){
		$(this).stop().animate({'marginLeft':-move_range},move_time);
	},function(){
		$(this).stop().animate({'marginLeft':0},move_time);
	})
	
	
	//飘窗
	 $(document).scroll(function() {
        $(".inform").animate({"top":250+document.documentElement.scrollTop},20);
    });
    
    //点击飘窗显示
    $('.inform').click(function(){
    	$('.none_Bg').css('display','block');
    	$('.none_inform').css('display','block');
    })
    //点击关闭隐藏
    $('.close').click(function(){
    	$('.none_Bg').css('display','none');
    	$('.none_inform').css('display','none');
    })
    
    //轮播图 
   var _index=0;
   $('.circle li').click(function(){
   	    _index=$(this).index();
   	    $(this).addClass('current').siblings().removeClass('current');
        $('.flashbanner li').eq(_index).fadeIn(1000).siblings().fadeOut();
   })
    setInterval(function(){
    	_index++;
    	if(_index>2){
    		_index=0;
    	}
    	$('.circle li').eq(_index).addClass('current').siblings().removeClass('current');
        $('.flashbanner li').eq(_index).fadeIn(1000).siblings().fadeOut();
    },1000)


    
    
    
	
})

