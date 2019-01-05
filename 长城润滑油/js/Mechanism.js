//活动机制  选项卡  侧边
$(function(){
	$('.menu_tu div').first().show();
	$('.menu_xuan li').first().addClass('current');
	$('#menu_xuan li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$(this).children('a').css('color','white').siblings().css('color','#3A3A3A');
		var name=$(this).attr("name");
		if($('.menu_tu div').has(name)){
			$('.menu_tu div').hide();
			$('.menu_tu div'+"."+name).show();	
		};
	});
})