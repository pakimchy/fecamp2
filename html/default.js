jQuery(function($){
	$(".gnb>button").on("click", function(){
		// $(".gnb>ul").slideToggle(200);
		// slideToggle은 기본값을 400ms을 가진다.
		$(this).next("ul").slideToggle(200);
		// this는 섵개한 개체, next는 바로 다음에 올 것을 말하며, 이미 알고 있을 경우 ul을 생략해도 무관하다.
	});	
});
// jQuery = $
