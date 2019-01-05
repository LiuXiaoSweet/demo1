$(function(){

    //选项卡：  产品介绍  产品规格
	$('.hot_xqR_title li').click(function(){
		var $index = $(this).index();
        $(this).addClass('xxCurrent').siblings('li').removeClass('xxCurrent');
        $('.hot_xqR_content div').eq($index).show().siblings('div').hide();
	})
	
	
	
    // 选信息
    $('.tb-thumb li').click(function(){
        $(this).children('b').show().end().siblings('li').children('b').hide();
    })
    //加
    $('.j_put').click(function(){
        var num = $(this).siblings('.put_shopSL').val();//获取数量框里的数值
        num++;
        $(this).siblings('.put_shopSL').val(num);
    })
    //减
    $('.z_put').click(function(){
        var num = $(this).siblings('.put_shopSL').val();//获取数量框里的数值
        if(num>1){
            num--;
            $(this).siblings('.put_shopSL').val(num);
        } 
    })
	
	
})



