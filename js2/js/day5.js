//문제
// 생일을 입력하면 만 나이를 구하는 age()함수를 작성하라.
// 사용예: age(1976, 3, 22);
function age(y, m, d){
    // 태어난 날
    var date = new Date(y, m-1, d);
    var dd = date.getFullYear();
    var ddMonth = date.getMonth();
    var ddDate = date.getDate();
    // 오늘
    var date1 = new Date();
    var now = date1.getFullYear();
    var nowMonth = date1.getMonth();
    var nowDate = date1.getDate();
    // 오늘 - 태어난날
    var age1 = now - dd;
    
    
    if(ddMonth < nowMonth){
        return age1;
    } 
    else if(ddMonth > nowMonth){
        return age1 +1;
    } 
    else {
        if(ddDate < nowDate){
            return age1;
        }
        else{
            return age1 +1;
        }
    }

//    if((오늘달 < m )||(오늘달===m)&& (오늘일<d))){
//        나이 -+1;
//    }
}
console.log(age(1976, 3, 22));


// 문제
// 생일을 입력하면 나이에 따라 '어린이', '청소년', '청년', '장년이상'으로 반환하는 함수
// 연령대()를 작성하라.
// 사용 예) 연령대(1976, 2, 22) // 1976년 3월 22일인 사람의 연령대는?
// 조건 : 
    // 10살 미만 어린이
    // 10~18살 청소년
    // 19~40살 청년
    // 41~ 살 장년이상

function 연령대(y, m, d){
    var date = new Date(y, m-1, d);
    var dd = date.getFullYear();
    var ddMonth = date.getMonth();
    var ddDate = date.getDate();
    
    var date1 = new Date();
    var now = date1.getFullYear();
    var nowMonth = date1.getMonth();
    var nowDate = date1.getDate();
    
    var age1 = now - dd;
    
    if(ddMonth < nowMonth){
       return ages(age1);
    } 
    else if(ddMonth > nowMonth){
        return ages(age1+1);
    } 
    else {
        if(ddDate < nowDate){
            return ages(age1);
        }
        else{
            return ages(age1+1);
        }
    }
}
function ages(num){
    if(num<10){
        return "어린이";   
    }else if(num>10 && num<18){
        return "청소년";   
    }else if(num>18 && num<40){
        return "청년";   
    }else{
        return "장년이상";   
    }
}
console.log(연령대(1998, 3, 2));
