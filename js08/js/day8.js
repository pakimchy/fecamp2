var str1 = 'A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.';
var str2 = '국내지점 서울/인천/경기 공항 지점. 인천지점. 지도보기. 주소, 인천광역시 남동구 미래로 49 제일은혜빌딩 2층. 연락처, TEL : 1588-8000. FAX : 032-437-0367.';
var str3 = '<h1>블리자드 엔터테인먼트: 연락처</h1><p>(한국) 대표 번호: 1644-0727</p><p>US Account & Billing: 1-800-592-5499</p><p>Australia Account & Billing: 1-800-041-378</p><p>Singapore Account & Billing: 1-800-2549-9273</p><p>Mexico Account & Billing: 001-888-578-7628</p><p>Argentina Account & Billing: 0800-333-0778</p><p>Chile Account & Billing: 1230-020-5554</p><p>Technical Support: 1-949-955-1382</p>';

var regex = new RegExp('o[rf]');
console.log(regex.exec(str1));
//o[rf] -  or과 of를 찾아라
//o[^rf] - or과 of를 제외한 o가 들어간 것을 찾아라

var regex = new RegExp('o[^nturf]');
console.log(regex.exec(str1));

var regex = new RegExp('o[a-z]');
console.log(regex.test(str1));
//[abcdefg......z] === [a-z](소문자만 찾기)
//[a-zA-Z] === 대소문자 모두 찾기


var regex = new RegExp('[0-9]');
console.log(regex.exec(str3));

var regex = new RegExp('<h[1-6]>');//<h1> <h2> <h3> <h4> <h5> <h6>
console.log(regex.exec(str3));

var regex = new RegExp('[0-9]{4}');
console.log(regex.exec(str3));
//[0-9]를 4번 반복해서 쓴것과 동일하다.

var regex = new RegExp('[0-9]{4}-[0-9]{4}');
console.log(regex.exec(str3));
//전화번호와 같이 1234-5678이런식으로 작성된 곳을 찾는다.

//주민등록번호 찾는 법
var 주민번호 = new RegExp();
주민번호 = /[0-9]{2}[01][0-9]{3}-[1-4][0-9]{6}/;

//[0-9]를 대체할 수 있다.
//[0-9] === \d
//주민번호는 우측과 같다. : /\d{2}[01]\d{3}-[1-4]\d{6}/;

var regex = /<p>/;
var regex = /<\/p>/; //닫는 p태그를 찾아라.
var regex = /<\/{0,1}p>/; //여는 p태그와 닫는 p태그를 찾아라.

console.log(regex.exec(str3));

// /[0-9]{1,}/ :1번부터 무한대까지
// /[0-9]+/ :이것과 동일하다.
// /[0-9]*/ :없을때부터 무한대까지

// . :점은 모든 문자열을 말한다.
// [a-zA-z]{4}:\/{2}[a-zA-Z]{1,}(\.[a-zA-Z]{1,})+\/  : http://......./를 찾는 방법
// http:\/{2}[a-zA-Z]+(\.[a-zA-Z]+)+\/

// [a-zA-Z\.]+@[a-zA-Z]+(\.[a-zA-Z]+)+     : 이메일 주소를 찾는 방법

// ^[a-z]  : 문자열의 맨 앞에 글자 찾기
// [a-z]$  : 문자열에서 맨 뒤에 글자를 찾기

//^[0-9]+$ : 처음부터 끝까지 숫자인지 확인하는 방법

// ^.[^ ]+@.+(\..+[^ ])+$ //이메일 주소 확인하는 방법

var tell = new RegExp();
regex = /\d+(\-\d+)+/g;

console.log(str3.replace(regex, '<em>$&</em>'));
console.log(str3.replace(regex, '전화번호'));

regex = /<(\/?)p>/g
console.log(str3.replace(regex, '<$1div>')); 
// 바꿔줄 내용에서 ?는 있는거랑 없는거 모두 이고, ()로 묶어서 그건 그대로 적혀 나오도록 할 수 있다.
// 그 방법은 그대로 가져올 내용을 괄호로 묶고, 바꿀 곳에 $1을 써준다. 여기서 $1의 $는 괄호를 말하고, 1은 몇번째 괄호인지를 알려준다.

//////////////////////////////////////////////////////////////////////////////////////////
//DOM컬렉션


for(i=0;i<document.images.length;i++){    
    
    if(document.images[i].getAttribute('width') !== null && document.images[i].getAttribute('height') !== null){
        var imageWidth = document.images[i].getAttribute('width');
        var imageHeight = document.images[i].getAttribute('height');
        
        document.images[i].setAttribute('src', 'https://placekitten.com/'+imageWidth+'/'+imageHeight);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
//DOM 이벤트

//var select = document.querySelectorAll('h2');
//for(i=0;i<select.length;i++){
//    select[i].addEventListener('click', function(event){
//        event.stopPropagation();
//        alert( this.innerHTML );
//    });
//}

//event 객체안에 많은 것이 들어있다~~~~


//var elem = document.querySelector('h1');
//console.log(elem);
//elem.addEventListener('click', function(event){
//    alert('클릭');
//});
//
//var click = document.querySelector('body');
//click.addEventListener('click', function(event){
//   alert('click'); 
//});


///////////////////////////////////////////////////////////////////////////
//document.forms[0].elements.password.value -- "password"
//document.forms[0].elements[0] //<input type="text" value="text input">
//document.forms[0].elements[0].value //text input
//document.forms[0].elements[0].value = '1234'; //1234


// jQuery는 2단계로 사용
//1. element 선택
jQuery('p')
//2. 기능 선택
jQuery(document).ready(function(){
    jQuery('p code').css('color', '#E447A0');
});
//3. head에 넣어놔서 문서를 읽기 전에 읽기 때문에 작동하지 않는 문제를
//문서를 본 후에 보도록 위와 같이 해야 한다.
jQuery(function(){
    
});
//4. 코딩을 간편하게 하기 위해 위와 같이 작성해도 된다.
jQuery(function($){
    $('p code').css('color', '#E447A0');
});
//5. 이렇게 쓰는 것을 기본 형태로 생각하면 된다.
//        event.shiftKey; //누르고 있었으면 true, 누르고 있지 않았으면 false
jQuery(function($){
    var codeColor = $('p code').css('color');
    console.log(codeColor);

    $('#box').on('click', function(event){
            var w = $(this).width();
            var h = $(this).height();
        if(event.shiftKey == true){

            w -= 10;
            console.log(w)
            h -= 10;
        }else{
            w += 10;
            h += 10;

        }
        $(this).width(w);
        $(this).height(h);
        
        //그냥 this라고 하면 DOM엘리먼트가 된다. $(this)라고 해야 jquery엘리먼트가 된다.    
    });


//클릭할때마다 10X10만큼 늘어나고, 시프트를 누른 상태에서 클릭하면 10X10만큼 작아진다.
});
// css에 color값을 codeColor에 넣어줄 수 있다.
















