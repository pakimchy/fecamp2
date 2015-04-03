function Square(width, height){
    this.width = width;
    this.height = height;
    this.넓이 = function(){
        return this.width * this.height;
    };
}

var 사각형1 = new Square(10, 5);
var 사각형2 = new Square(3, 4);

console.log(사각형1.넓이());
console.log(사각형1.width);
console.log(사각형2);

//위와 같이 만드는 것은 넓이 함수를 계속 만들어준다. 복사형태로 계속 만들어줌으로 사각형1.넓이 === 사각형2.넓이 //false가 나온다.

function Square2(width, height){
    this.width = width;
    this.height = height;
}

Square.prototype.넓이2 = function(){
  return this.width * this.height;     
};

var 사각형1 = new Square(10, 5);
var 사각형2 = new Square(3, 4);

console.log(사각형1.넓이2());
console.log(사각형1.width);
console.log(사각형2);
// 사각형1.넓이 === 사각형2.넓이 //true가 나온다.

Square.prototype.a = function(){
  return this.width * this.height;     
};

Square.prototype.b = function(){
  return this.width * this.height;     
};

Square.prototype ={
    넓이 : function(){
        return this.width * this.height;     
    },
    넓이2 : function(){
        return this.width * this.height;     
    },
    넓이3 : function(){
        return this.width * this.height;     
    }
};

console.log(사각형1.넓이.apply(사각형2));
//함수에 들어있는 거
//apply와 call은 this를 첫번째 인수로 전달한 내용으로 바꿔준다.

Square.prototype.a = function(x,y){
  return this.width * this.height * a * b;     
};

console.log(사각형1.a.apply(사각형2, [2,3]) === 사각형1.a.call(사각형2,2,3));

//concat은 인수를 배열안에 넣어줍니다.
//[1,2].concat('a','b'); // [1,2,'a','b']로 된다.
// [1,2] === [1,2].concat(); ///false이다.

function argarr(){
    console.log(arguments);
    var arr1 = [].concat.apply([],arguments);
    //for문을 이용해 하나씩 함수에 arr.push(arguments[i])로 넣어주는 것과 동일하다.
    console.log(arr1);
    var arr2 = [].concat.call(arguments);
    console.log(arr2);
}
argarr(1,2,3);

//문제: 다음과 같이 동작하는 원(circle)데이터를 정의하라.
// var circle1 = new Circle(반지름숫자);
// var circle2 = new Circle(다른_반지름숫자);

//console.log(circle1.넓이());//원 넓이 = 반지름 제곱 * 파이(Math.PI)
//console.log(circle2.둘레());//원 둘레 = 2 * 파이 * 반지름
//console.log(circle2.지름());//원 지름 = 2 * 반지름


function Circle(r){
    this.r=r;
}

Circle.prototype.넓이 = function(){
    return this.r * this.r * Math.PI;
};
Circle.prototype.둘레 = function(){
    return this.r * 2 * Math.PI;
};
Circle.prototype.지름 = function(){
    return this.r * 2;
};

Circle.prototype = {
    넓이 : function(){
        return this.r * this.r * Math.PI;  
    },
    둘레 : function(){
        return this.r * 2 * Math.PI;  
    },
    지름 : function(){
        return this.r * 2;  
    },
};

var circle1 = new Circle(5);
//인스턴스(instance) : 클래스(class)또는 타입(type)을 사용해 구체적인 고유 데이터로 만든 것.
//이때 인스턴스를 만드는 과정에는 new 연산자가 사용되며 이 과정을 가리켜 인스턴스화(instantiation)라고 한다.


///////////////////////////////////////////////////////////////////////////////////////////////

//DOM <-- 브라우저의 offset 안에 있는 정보를 다루는 것을 말한다.
//BOM <-- offset 밖의 브라우저 정보를 다루는 것을 말한다.

var box = document.getElementById('box');

//var span = document.createElement('span');
//span이란 태그를 추가한다.
//var par = document.querySelector('h1');
//par.appendChild(span);

//var text = document.createTextNode('내용이 될 문자열 입력');
//span.appendChild(text);

























