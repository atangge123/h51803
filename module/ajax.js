define(["jquery"],function($){
	$(function(){
		$("#box").load("/requirejs/html/header.html",function(){
			let html = "";
			for(var i=0;i<4;i++){
				html +=`<div>${i}</div>`;
			}
			$("#box").prepend(html);
		});
	});
});