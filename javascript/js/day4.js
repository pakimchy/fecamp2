//call by value//////////////////////////////////////////////////////
function toNumber(str){
    var str;
    str = outerStr;
    str = '111';
    return parseInt(str);
}
var outerStr = '123.45';
var num = toNumber(outerStr);
//해당 값을 가지고 있는 것을 바꿔주는 것이라 두개의 변수값은 다르다.

//call by reference//////////////////////////////////////////////////////
function addOne(arr){
    var arr;
    arr = outerArr;
    arr.push('끝');
}

var outerArr = ['가', '나', '다'];
addOne(outerArr);
//가르키고 있는 것만 바뀌므로, 두개의 변수값은 같다.

///////////////////////////////////////////////////////////////////////////
//Date:날짜 다루는 객체
var date = new Date();

console.log(date);
console.log(date.getYear());//115(사용하지 말것)
console.log(date.getFullYear());//2015

console.log(date.getMonth()+1);//0부터 시작한다.
console.log(date.getDate());

console.log(date.getTimezoneOffset());//세계 표준시간을 기준으로 얼마나 차이가 나는지 확인
console.log(date.getUTCDate());//????

console.log(date);
date.setFullYear(2014);
console.log(date);

//지금으로 부터 100일 뒤는 몇월 몇일일까요?
var today = date.getDate()+100;
console.log(date.setDate(today));

date.setDate(date.getDate()+100);
console.log(date);

//두 날짜간의 차이를 구할 때 쓰는 방법
//2015년 02월 05일부터 오늘은 몇일 째인가?
var startDate = new Date(2015, 1, 5); //특정 날짜 만듬
var nowDate = new Date(); //오늘 날짜 만듬

var 시간차 = nowDate.getTime() - startDate.getTime(); //ms단위로 나온다.
var 몇일차이s = 시간차/1000; // s단위로 바뀜
var 몇일차이m = 시간차/1000/60; // m단위로 바뀜
var 몇일차이h = 시간차/1000/60/60; // h단위로 바뀜
var 몇일차이d = 시간차/1000/60/60/24; // d단위로 바뀜
var 몇일차이d올림 = Math.ceil(시간차/1000/60/60/24); // d단위로 바뀜
console.log(몇일차이d올림);//45일

//실습
//2014년3월2일부터 몇일째가 2015년4월6일인가?
function diffDate(arr1, arr2){
    var starDate = new Date(arr1[0], arr1[1]-1, arr1[2]);
    var dDate = new Date(arr2[0], arr2[1]-1, arr2[2], 1);
    //올림할 값을 만들기 위해 1시간 추가
    
    return Math.ceil((dDate.getTime()-starDate.getTime())/1000/60/60/24);
}
console.log(diffDate([2014, 3, 2], [2015, 4, 6])+'일째입니다.');


function setTimeText(date){
    document.getElementById('timer').innerHTML = date;
}
//문제: 1초마다 한번씩 현재 시각을 표시하는 함수 clock()을 작성하라.
//힌트: setTimeout

function clock(){
    var date = new Date();
    setTimeText(date);
    setTimeout(arguments.callee,1000);
    // = setTimeout(clock,1000);
}

window.onload = function(){clock();};

///////////////////////////////////////////////////////////////////////////
var now = Date.now();
//=
var date = new Date();
var now =date.getTime();

//문제: 날짜를 입력하면 요일을 "한국어로"반환하는 함수 요일()을 작성하라.
//힌트: 배열 또는 문자열 자르기

function 요일(y, m, d){
    var date = new Date(y, m-1, d);
    var day = date.getDay();
    var dayNames = ['일','월','화','수','목','금','토'];
    return dayNames[day];
    // 아래와 같이 표현도 가능하다. 
    //return '월화수목금토일'.substr(day,1);
}
var 무슨요일 = 요일(2015, 3, 13);
console.log('2015년 3월 15일은 '+무슨요일+'요일입니다.');

//////////////////////////////////////////////////////////////////////////
//Math.ceil();//올림
//Math.floor();//버림
//Math.round();//반올림
//Math.max();//최대값
//Math.min();//최소값
var rand = Math.random();
console.log(rand);

//0~1이 값을 0~10으로 바꾸려면?
console.log(Math.round(rand*10));  
//5~15까지
console.log(Math.round(rand*10+5));
//결국 공식화하면, rand*(MAX-MIN) + MIN 하면 해당 범위값을 구할 수 있다.

//문제. 주어진 범위의 랜덤한 '정수'를 변환하는 getRandom()함수를 작성하라./////
function getRandom(min, max){
    return Math.floor((Math.random()*(max-min)+min));
}
var 무작위수 = getRandom(1,6);
console.log(무작위수);



function 요일(y, m, d){
    var date = new Date(y, m-1, d);
    var str = date+'';
    return str.substr(0,3);
    // 아래와 같이 표현도 가능하다. 
    //return '월화수목금토일'.substr(day,1);
}
var 무슨요일 = 요일(2015, 3, 14);
console.log(typeof 무슨요일);
console.log(무슨요일);

//산술연산자
//사칙연산+나머지 : + - * / %
//++

var num = 10;
console.log(num++);//num을 출력하고, ++을 해줘라.
console.log(++num);//++을 해주고, num을 출력하라.
console.log(num);

var num1 = 10;
var num2 = num1++;
console.log(num1,num2);
















