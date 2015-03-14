//문자열 표현 방법
'문자열'
"문자열"
"string"
"문'자열"

//이스케이프 문자///////////////////////////////////////////////////////////////////////////////
'문\'자열'
'문\\자열'
console.log('문\%자열');//다른 이스케이프 문자는 \n, \r, \t 등이 있다. 
console	.log('ans\ner');// 줄바꿈(newLine)
console	.log('ans\ter');// 띄어 쓰기(Tab)
console	.log('ans\rer');// 캐리지 리턴(carriage return)

// \n 리눅스 개열, \r애플 , 윈도우 둘다 

//숫자 표현하는 법///////////////////////////////////////////////////////////////////////////////
100
100.5
100.66789
0.6
.6
012 //8진법 표현(앞에 0을 써준다.)
0x12 // 16진법 표현(앞에 0x를 써준다.)
parseInt('012');
//8진수로 보이는 경우도 있고, 10진수로 보이는 경우도 있다. 최근 브라우저만....
//이를 10진법으로 쓴다고 할때 쓰는 방버은
parseInt('012',10);
//이렇게 넣으면 10진법으로 인식해 보여준다.

var intr = 0xc5f;
var intr1 = parseInt(intr,10);
console.log(intr1); //3167


console.log(parseInt('c5f',16));

//숫자를 다른 진법으로 변환할땐 toString 메소드를 사용///////////////////////////////////////////////////
(35).toString(16); //10진수 35를 16진법으로 변환하라는 의미
35.0.toString(16);
35..toString(16);
//3가지 모두 같은 값을 반환한다.


/////////////////////////////////////////////////////////////////////////////////////////////
//배열
var fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // 배열의 원소 중 첫번째(0) 인덱스를 접근할 수 있다.
console.log(fruits[2]); //cherry 출력


//배열에 값을 추가할 때는 변수에 할당하듯 저장하면 됨
fruits[3]="Mango";
console.log(fruits[3]); //Mango 출력됨
console.log(fruits[4]); //undefined 출력됨

fruits[6]='Tomato';
console.log(fruits[4]); //undefined 출력됨

/////////////////////////////////////////////////////////////////////////////////////////////
//객체
var obj = {
	name : '김태곤',
	age : 36,
};
//하나의 기능을 덩어리로 봤을때, 고유의 명령어를 가지고 있고, 그 안에 동작이 들어있는 상태를 객체라고 한다.
//변수에 들어가는 키를 ''에 넣어주면 'a ge'와 같이 써줘도 문제가 없다.

//문제 person 객체를 작성해보자.
var person = {
	name : 'LEE',
	age : 90,
	tall : 121,
	'shoes size' : 280,
	address : 'seoul',
	friend : ['cha', 'kim', 'park'],
	marry : false
	// var	habit = {
	// 	sportslike : true,
	// 	baseball : true,
	// 	football :false,
	// 	soccer: false,
	// };
};

//객체 프로퍼티의 접근법1 - 각괄호 표기법
obj['name'];

//객체 프로퍼티의 접근법2 - 점 표기법
obj.age;
	//프로퍼티 이름이 변수 기준에 준해서 만들어진 것만 사용이 가능하다.

/////////////////////////////////////////////////////////////////////////////////////////////
//함수

//함수 만드는 법1 - 선언식
function 라면요리(라면종류, 물양) {
	console.log(라면종류+'라면에 물양'+물양+'L를 넣어 끓입니다.');
	console.log('보글보글');
	console.log('후루룩');
	console.log('맛좋은 라면');
}
//두배()라는 함수를 만들었음.
라면요리('신라면', 400); //제작한 함수를 실행시키는 것.
라면요리(100, 300);
//라면종류 : '인수(argument)'라고 부른다.


//문제: 실행할 때 이름을 전달하면 "안녕하세요. 김태곤님"과 같이 콘솔에 출력하는 함수 hello를 선언하라.
function hello(name){
	console.log('안녕하세요. '+name+'님');
}
hello('김태곤');
hello('신승엽');



















