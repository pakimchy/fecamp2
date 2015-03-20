// Array.isArray([]); <-- 배열인 경우에는 true라고 그 답이 나온다.
//ployfill.io 사이트로 접속해서 IE7, IE8에서는 사용이 안되는 코드를 script코드 한줄을 복사해와서 사용이 가능하도록 할 수 있다.


var str='문자열';
var str2=str;
str='문자열 수정';

//복합 타입
var arr=['A','B','C'];
var arr2=arr;
arr.push('D');
console.log(arr2);
// 자신이 값을 가지고 있는 것이 아니라, 배열이 있는 공간과 연결하는 연결고리만 가진다.
// 다시말해 arr2=arr 인 경우, 그 배열을 연결고리(pointer)만 복사해서 가르키는 곳이 같은 것이다.
arr2=null;
// 값이 사라지는 것이 아니라, 그 값이 있는 곳과 연결한 연결고리가 null로 사라졌음을 말한다.
console.log(arr);

//
function 함수(){
	arguments[0]; //해당 자리의 값을 확인할 수 있음
	arguments.length; //갯수 확인 가능
}
함수(1, 2, 3); //arguments.length=3이 나온다.
함수('가','나','다'); //arguments[1]로 '나'라는 값을 찾아낼 수 있다.

function 함수(첫번째, 두번째){
	console.log(arguments[1]);
}
함수('가','나','다'); //인수의 갯수가 다르지만, arguments는 3개가 모두 들어있는 것으로 알고 있다.

////////////////////////////////////////////////////////////////////////////////////////////////////////
//전역 함수/변수, 지역 함수/변수
function 함수(첫번째, 두번째){
	var local; //function(함수)에 속해 있음으로 지역 함수;
}
//위에 있는 str은 전역 함수이다.

var person = {//객체 생성
	name : '김태곤',
	sayName: function(){//프로퍼티 안에 함수를 만들었다.
		console.log(this.name);
	}
};
var shin = {
	name :  '신승엽',
};
shin.sayName = person.sayName;
person.sayName(); //김태곤 출력
shin.sayName(); //신승엽 출력

function 함수(첫번째, 두번째){
	var local;
	console.log(this);
}
함수('가','나','다'); // this가 찾을 곳이 없음으로, 가장 윗단계인 window를 호출한다.

var 변수1 = 1;
function 함수1(첫번째, 두번째){
	var 변수1 = 2;
	console.log(변수1);
}
함수1(); //2값이 나온다.

var 변수2 = 1;
function 함수2(첫번째, 두번째){
	var 변수2 = 2;
	console.log(window.변수2);
}
함수2(); //1값이 나온다.

//////////////////////////////////////////////////////////////////////////////
//문제. 다음 함수를 작성하여 결과를 완성하라.
function fn(){
	return this.width * this.height;
};

var rect1 = {
	width : 30,
	height : 10,
	getArea : fn
};
// console.log(this.width);
console.log(rect1.getArea());

var rect2 = {
	width : 20,
	height : 10,
	getArea : fn
};
console.log(rect2.getArea());

//////////////////////////////////////////////////////////////////////////////
//익명(anonymous)함수
function fn() {

}//fn()이라는 이름이 있다.(익명 함수 아님)
var fn = function(){
};
//익명함수
(function(str){
	console.log(str);
})('aaa');
//이것도 익명함수


setTimeout(function(){
	console.log('5초 경과');
},5000);
//callback함수. 특정한 상황이 됐을때 실행이 되도록 하는 함수를 말함.
//function(){console.log('5초 경과');}<--이놈을 말한다.

function 오초뒤(){
	console.log('5초 경과');
}
setTimeout(오초뒤,5000);
///전역함수라면, 함수 이름을 문자열로 전달할 수도 있다.(권장 안함)
setTimeout('오초뒤',5000);

////////////////////////////
var timerId = setTimeout(function(){
	console.log('5초 지남');
}, 5000);
clearTimeout(timerId);//예약된 작업이 완전히 취소되는 함수이다.
