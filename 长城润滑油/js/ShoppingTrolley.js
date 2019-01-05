$(function(){
	
	//清空购物车
	$('.Empty_car_rg').click(function(){
		$(".tab").remove();
		$(".Empty_car").remove();
		summation()   
	})
	
	//全选
	$('.Empty_car_lf_check').click(function(){
		if (this.checked==true) {
			$('.shop_tu input').attr('checked',true);
			$('.Empty_car_lf_check').attr('checked',true);
			$('.shop_tr').addClass("bbg");
		} else{
			$('.shop_tu input').attr('checked',false);
			$('.Empty_car_lf_check').attr('checked',false);
			$('.shop_tr').removeClass('bbg');
		}
		summation()  //调用总计的算法，随着选中件数的变化积分和件数都在改变
	})
	
	
	//单选
	$('.checkDan').click(function(){
		if (this.checked==true) {
			$(this).parent(".shop_tu").parent(".shop_tr").addClass("bbg");//如果商品被选中则改变其背景色
		} else{
			$(this).parent(".shop_tu").parent(".shop_tr").removeClass("bbg");//没有选中则是原有背景色
		}
         //全部选中时，两个全选框自动选中
		 let shopLen =$('.shop_tr').length;
		 let checkedLen=$(".checkDan:checked").length;
		 if (shopLen == checkedLen) {
		 	$('.Empty_car_lf_check').attr("checked",true);
		 } else{
		 	$('.Empty_car_lf_check').attr("checked",false);
		 }
		 summation();
	})
	
	//单选删除
	$('.del').click(function(){
		$(this).parents('.shop_tr').remove();
		summation()
	})
	
	//选中的删除
	$('.check_del').click(function(){
		$('.checkDan:checked').parents(".shop_tr").remove();
		summation()
	})
	
	//加号
	$(".jia").click(function(){
		let num=$(this).siblings(".shuru").val();
		num++;
	     if(num>1){
	       	$(this).siblings(".jian").addClass("jianClick");
	       	$(this).siblings(".jian").attr("disabled",false);
	       	
	     }
		$(this).siblings(".shuru").val(num);
		let price=$(this).parents("td").siblings(".jifen").html();//获取到单价
		let totalPrice=price*num;  //计算总价
		$(this).parents("td").siblings(".xiaoji").html(totalPrice+"积分");  //把得出的总计给小计
		summation();
	})
	
	//减号
	$(".jian").click(function(){
		let num=$(this).siblings(".shuru").val();
		num--;
		if(num==1){
			$(this).attr("disabled","disabled");
			$(this).removeClass("jianClick");
		}
		$(this).siblings(".shuru").val(num);
		let price=$(this).parents("td").siblings(".jifen").html();//获取到单价
		let totalPrice=price*num;  //计算总价
		$(this).parents("td").siblings(".xiaoji").html(totalPrice+"积分");  //把得出的总计给小计
		summation();
	})
	
	
	//输入数组积分随着增加
	$('.shuru').blur(function(){
		let value=$(this).val();   //得到输入的值/件数
		let price=$(this).parents("td").siblings(".jifen").html();//获取到单价
		let totalPrice=price*value;//计算小计
		$(this).parents("td").siblings(".xiaoji").html(totalPrice+"积分");  //把得出的总计给小计
		summation();
	})
	
	//计算总积分Js
	function summation(){
		let cumm=0;  //件数
		let sum=0;   //总积分
		cumm=$('.checkDan:checked').length;
		$('.checkDan').each(function(){
			if(this.checked==true){
				let xiaoji=parseFloat($(this).parent(".shop_tu").siblings(".xiaoji").html());
				sum += xiaoji;
			}
		})
		$('.Empty_car_ri p:last-child span').html(cumm);
		$('.Empty_car_ri p:nth-child(2) span').html(sum+"积分");
		
	}
	
})	