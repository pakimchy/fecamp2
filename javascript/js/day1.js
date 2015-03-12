	var str = 'Hello, world!';
//var str;
// str이라는 변수를 선언한다.
// 변수에 값을 넣지 않은 경우, undefined라고 출력한다.
	console.log(str);
// 요소 검사 끝에 console에서 나온다. 로그를 확인 하기 위한 방법

//////////////////////////////////////////////////////////////////////

//변수 여러 개 선언 - 중간에 쉼표
	var str1='Hello', str2='world!';

//변수 이름 규칙
	//1. 첫글자로 숫자를 넣을 수 없음
	//2. 어떤 언어여도 상관 없음
	//3. 공백, 엔터, 특수문자 사용 못함
	//4. 유일한 특수문자 $, _ 만 사용 가능
	//5. var란 이름과 같은 키워드는 변수로 사용할 수 없음 

// 자바스크립트의 원시(primitive)타입(자료형)
	var str='문자열'; //string타입. 따옴표나 작은 따옴표 모두 사용 가능
	var num= 1; 
	var num= 100.5; //number타입. 숫자 타입으로 퉁 침
	var boo= true; //boolean타입.

	var str2=str;
	str='문자 바꿈';
	console.log(str2);
	console.log(str);
//str2에 str을 넣고, str을 바꿔줘도, str2는 동시에 바뀌지 않는다.

//////////////////////////////////////////////////////////////////////

//숫자의 연산
	var num1= 100;
	var num2= 20;
	console.log(num1+num2);

// 문자열 더하기
	var str1='Hello', str2='world!', str3;
	console.log(str1+' '+str2+str3);
// 값이 없는 str3을 넣어주면, undefine를 문자로 인식하고, 들어간다.
//문자와 숫자를 합치는 경우 숫자를 문자로 바꿔서 인식한다.

/* 주의
   html에서 value값을 가져올땐 항상 문자열로 인식한다.
   그래서 숫자로 사용하려면, 가져온 문자열은 꼭 다시 숫자로 변환해서 사용해야 한다.
*/

var 삼백 = '300';
var 숫자삼백 = parseInt(삼백);
//문자를 숫자로 바꿔주는 방법은 parseInt임
console.log(삼백 + 100);
console.log(숫자삼백 + 100);