/* 定义模块 */
define(["jquery","template"],function($,template){
	$(function(){
		$.getJSON("/requirejs/mock/list.json",function(data){
			const html=template("list_template",{list:data.res_body.list});
			$(".list").html(html);
		});
	});
});