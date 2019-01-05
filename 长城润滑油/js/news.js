//输入关键字JS
$(function(){
	$('#keyword').focus(function(){
		if($(this).val()==this.defaultValue){
			$(this).val(" ").css('color','black');
		}
	}).blur(function(){
		if($(this).val()==" "){
			$(this).val(this.defaultValue).css('color','#717371')
		}
	})
})




