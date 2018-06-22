/* 定义模块，依赖于 tools.js 模块 */
define(["jquery"],function(){
	$(function(){
		$("#box").on("click",function(){
			console.log(123);
		});
	});
	
});