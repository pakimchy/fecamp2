jQuery(function($){
// 모바일 GNB 토글 버튼	
	var	$gnbBtn = $(".gnb>button");
	// 반복되는 이름을 만들어준다.
	// 변수를 선언하지 않으면 지속적으로 찾아봐야하지만, 변수를 선언하면 한번만 찾는다.
	$gnbBtn.on("click", function(){
		// $(".gnb>ul").slideToggle(200);
		// slideToggle은 기본값을 400ms을 가진다.
		$(this).next("ul").slideToggle(200);
		// this는 섵개한 개체, next는 바로 다음에 올 것을 말하며, 이미 알고 있을 경우 ul을 생략해도 무관하다.
		if( $gnbBtn.text() == "메뉴 열기" ) {
			$gnbBtn.text("메뉴 닫기");
			alert("닫기");
		}else{
			$gnbBtn.text("메뉴 열기");
			alert("열기");
		}
	});	

// TABLET & DESKTOP의 GNB 메뉴
	$(".gnb>ul>li>a").on("mouseover", function(){
		$(this).parent().addClass("active");
		//parent(li)라고 써야하지만 this의 부모는 무조건 li이기때문에 생략가능
	});	
});
// jQuery = $
