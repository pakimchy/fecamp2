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

function 더하기(num1, num2){
	return(num1 + num2);
	//함수 안에서 만들어진 값은 함수 밖으로 나올 때 사라진다. 이를 괄호 밖에도 적용할 수 있도록 하려면, return으로 묶어주면 괄호 밖에서도 사용이 가능하게 바뀐다.
	//반환한다라고 표현한다.
}

var num = 더하기(3,5);
console.log(num);

//문제. 전달한 숫자를 제곱한 값을 반환하는 함수 제곱()을 작성하라.

function 제곱(num1){
	return(num1 * num1);
}
var num = 제곱(2);
console.log(num);

var 제곱1 = 제곱;
제곱1(5);
console.log(제곱1);

/////////////////////////////////////////////////////////////////////////////////////////
var lunch = {
	all : '라면집',
	학생1 : '떡라면',
	학생2 : '치즈라면',
	학생3 : '치즈라면',
	학생4 : '국수',
	학생5 : '오므라이스',
	학생6 : '라면'
};
// function 점심(이름,메뉴){
// 	console.log(이름+'님은 오늘 점심으로 '+메뉴+'를 먹었습니다.')
// }

// 점심('이현철','라면');
/////////////////////////////////////////////////////////////////////////////////////////

//함수 만드는 2 - 표현식
//
var fn = function (n){
	return n*n;
}
//아래처럼 함수를 만든 걸 변수로 취급해서 사용이 가능하다.
fn(5);
var num = (function(n){
	return n * n;
})(5);

/////////////////////////////////////////////////////////////////////////////////////////
var sum;
function add1(a, b) {
	sum = a + b;
}

function add2(a, b) {
	return a + b;
}


add1(1, 2);
console.log(sum + 3);

add2(1, 2) + 3;

console.log(add2(add2(1, 2), 3));
/////////////////////////////////////////////////////////////////////////////////////////




// 변수의 스코프(scope) = 유효범위
var 변수 = 1;
function 함수(){
	// var 변수 = 1;
	변수 = 변수 + 1;
	console.log(변수);
}
함수();
//console.log(변수);	<--지정되지도 않는 변수를 사용한다고 애러메세지가 나옴
함수();
함수();
함수();
함수();
함수();

//호이스팅(hoisting)
function 함수1(){
	안쪽함수();

	var 변수1 = 1;
	변수1 = 변수1 +1;
	console.log(변수1);

	function 안쪽함수(){
		console.log('안쪽1');
	}
}
함수1();
//처음 실행하면 변수와 함수를 먼저 찾는다. 이름만! 값은 저장하진 않는다. 그리고 나서 작동을 함으로 안쪽함수()가 위에 있어도, 아래있는 안쪽함수 함수를 읽어 들인다.


//메소드는 함수를 값으로 가진 프로퍼티
var car = {
	color : 'silver',
	start : function(){
		console.log('부릉');
	}
};
car.start();

// 문자열의 프로퍼티와 메소드
var str = '동해물과 백두산이 마르고 닳도록 백두산아';
//글자수?
var strlen = str.length;
console.log(strlen); // 17 문자의 길이를 구해줌

//특정 문자열을 포함하고 있나?
var idx = str.indexOf('마르고');
console.log(idx); //10, 글자 시작지점
console.log(str.indexOf('없다')); //-1, 글자가 없는 경우 -1로 나온다.

var newstr = str.substr(0, 7);
console.log(newstr); //문자열 자르기.(시작위치, 문자 수)

//문제. str에서 "백두산이"만 잘라내는 코드를 작성하라.
var 백두산이 = str.substr(5,4);
console.log(백두산이);

var lastIndex = str.lastIndexOf('백두산');
console.log(lastIndex); //18, 뒤에서 부터 찾고, 위치는 앞에서부터 몇번째인지를 확인한다.


//문자열 자르기 -substring(시작위치, 끝위치)
var 백두산 = str.substring(5,8);
console.log(백두산);


/////////////////////////////////////////////////////////////////////////////////////////////////////
//숫자의 메소드
var num = 1234.5;
//소수점 아래 자리수를 맞추는 방법
num.toFixed(3);
console.log(num.toFixed(3));
console.log(typeof num.toFixed(3)); //문자열로 변환된다.


//배열의 메소드
var fruits = ['Apple', 'Banana', 'Cherry'];

fruits.length; //3. 배열의 원소 개수
console.log(fruits.length);

//배열에 원소를 추가하는 방법1
fruits[fruits.length] = 'Mango'; //배열의 원소를 한개씩 추가하며 넣을때.

//배열에 원소를 추가하는 방법2
fruits.push('Mango','rrr', 'eee', 'fff'); //이렇게 넣어줘도 맨뒤에 추가로 들어간다.

console.log(fruits.join(" + ")); //각 원소들을 괄호안의 값을 사이에 넣어서 연결해준다.
console.log(fruits.join()); //각 원소들을 괄호안의 값을 사이에 넣어서 연결해준다.

//문제. 배열에 포함된 원소 갯수를 알아내서 반환하는 함수 
var 배열의크기 = arraySize(['a', 'b', 'c']);
var num;
function arraySize(배열){
	num= 배열.length;	
}

console.log(배열의크기);

//문제. 배열 첫 번째 원소의 값을 반환하는 asrrayFirst()함수를 작성하라.
var 첫번째원소 = arrayFirst(['a','b','c']); //'a'

function arrayFirst(배열){
	return 배열[0];
}
console.log(첫번째원소);

//문제. 배열 마지막 원소의 값을 반환하는 arrayLast()함수를 작성하라.
var 마지막원소 = arrayLast(['a','b','c']);
var 마지막원소 = arrayLast(['a','b']);
var 마지막원소 = arrayLast(['a']);

function arrayLast(배열){
	var num = 배열.length-1;
	return 	배열[num];
}
console.log(마지막원소);



















