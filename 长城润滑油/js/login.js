$(function(){
		$("#user,#pass").focus(function(){
			  $(this).css("background-color","#FDF6C8");
			  $(this).siblings("p").show();  
		})
	   $('#user').blur(function(){
            var username = $(this).val();
            var zz = {mobile: /^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/ };
            var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(username==''){
               $('.info').html('账号不能为空');
            }else if(!zz.mobile.test(username) && !(re.test(username))){
                $('.info').html('账号格式不正确，请重新输入');
            }else{
                $('.info')[0].innerHTML=' ';
            }
        })
        $('#pass').blur(function(){
            var username = $(this).val();
            var zz = {mobile: /^[a-zA-Z]\w{5,7}$/ };
            if(username==''){
                $('.infr').html('密码不可以是空');
            }else if(!zz.mobile.test(username)){
                $('.infr').html('密码输入有误');
            }else{
                $('.infr')[0].innerHTML=' ';
            }
        })	
})