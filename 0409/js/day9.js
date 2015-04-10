//항상 이게 제일 먼저 나온다.
jQuery(function($){
    //이벤트 함수 사용
    $('#box').on('mousedown',function(event){
        $(this).css('background-color' , 'red');
        // 터치하면, red로 바꾸어라!!
        $(this)
            /*.text(event.which)*/
            .css('background-color', 'blue');
        //event.which : 어떤 버튼으로 눌렀는지, 반환해주는 함수
        //이런 식으로 .을 기준으로 줄바꿈해도 된다.
    });
    $('a').on('click', function(event){
        // event.preventDefault(); //클릭을 해도 동작하지 않도록 한다.
        // event.stopPropagation(); //이벤트가 더이상 들어가지 않도록
        console.log('클릭');
    });
    // 마우스 관련 이벤트: click, mousedown, mouseup, mousemove
    // 키보드 관련 이벤트: click, keypress, keydown, keyup
    // 그 외 이벤트 : focus, blur, chage, scroll
    
    $(document).on('keydown.move click mousedown', function(event){
        // 띄어쓰기를 통해 여러개의 event를 지정할 수 있따.
        //좌측 : 37
        //우측 : 39
        //위   : 38
        //아래 : 40
        var btn = event.which;        
        var l = $('#box').position().left;
        var t = $('#box').position().top;

        switch(btn){
            case 27: //ESC
                $(document).off('keydown.move'); 
                //$(document).off('keydown');
                //이렇게 keydown에 기능을 지정하지 않은 경우, 이전에 동일한 이름으로 들어간 거는 모두 작동하지 않는다.
                //특정 이벤트의 동작만을 제거하고 싶을때는 keydown.name처럼 네임스페이스를 사용해서 해당 event만 삭제한다는 의미가 된다.
                break;
            case 37:
                l -= 5;
                $('#box').css('left',l);   
                break;
            case 39:
                l += 5;
                $('#box').css('left',l);      
                break;
            case 38:
                event.preventDefault();
                t -= 5;
                $('#box').css('top',t);    
                break;
            case 40:
                event.preventDefault();
                t += 5;
                $('#box').css('top',t);     
                break;
        }
        
//        if(btn === 37){
//            l -= 5;
//            $('#box').css('left',l);   
//        }else if(btn === 39){
//            l += 5;
//            $('#box').css('left',l);      
//        }else if(btn === 38){
//            event.preventDefault();
//            t -= 5;
//            $('#box').css('top',t);      
//        }else if(btn === 40){
//            event.preventDefault();
//            t += 5;
//            $('#box').css('top',t);      
//        }
    });
    // 드래그앤드랍 구현
    // 1. #box에서 마우스 버튼을 누를 때
    //  - 초기 위치값을 가지고 온다.
    //  - 현재 CSS left, top값을 저장해둔다.(스크롤이 움직였거나, position값때문에 다를 수 있다.)
    //  - document에 mousemove,mouseup이벤트를 건다.
    // 2. 버튼을 누른 채 마우스가 움직이면
    //  - 현재 위치값에서 초기 위치값을 빼면 차이를 알 수 있다.
    //  - 1에서 구한 CSS left,top값에 차이만큼을 더한다.
    // 3. 마우스 버튼을 떼면
    //  - document에 걸었던 mousemove,mouseup 이벤트를 지운다.
    $('.dragndrop').on('mousedown', function(event){
        event.preventDefault();//아래 선택되는 영역에 드래그가 된다.
        
        //현재 커서 위치
        var startX = event.pageX, startY = event.pageY;
        
        //현재 #box의 left,top값
        var $this = $(this);
        var startLeft = parseInt($this.css('left'));
        var startTop = parseInt($this.css('top'));
        
        if(isNaN(startLeft)) startLeft = 0;
        if(isNaN(startTop)) startTop = 0;
        
            var position = $this.css('position');
            if(position != 'absolute' && position != 'relative' && position != 'fixed' ){
                $this.css('position', 'relative');
            }
        
        
        $(document).on('mousemove.dragndrop', function(event){
            var endLeft = event.pageX - startX + startLeft;
            var endTop = event.pageY - startY + startTop;
                $this.css('left',endLeft);
                $this.css('top',endTop);
        });
        
        $(document).on('mouseup.dragndrop', function(event){
            // dragndrop이란 이름의 네임스페이스를 가진 애들을 모두 선택한다.
                if(event.shiftKey === true){
                    $this.css('left', startLeft);   
                    $this.css('top', startTop);   
                }
            $(document).off('.dragndrop'); 
        });
    });
    
//    $('.size-handle').on('mousedown',function(event){
//        event.stopPropagation(); 
//        event.preventDefault();
//        var positionX = event.pageX;
//        var positionY = event.pageY;
//        
//        var $this = $(this);
//        var handleLeft = parseInt($this.css('left'));
//        var handleTop = parseInt($this.css('top'));
//        
//        $(document).on('mousemove.handle', function(event){
//            var endhandleLeft = event.pageX - positionX + handleLeft;
//            var endhandleTop = event.pageY - positionY + handleTop;
//            var w = $('#box').width();
//            var h = $('#box').height();
//            $('#box').css('width', w + endhandleLeft);
//            $('#box').css('height',h + endhandleTop);
//        });
//        $(document).on('mouseup.handle', function(event){
//            $(document).off('.handle');
//        });
//                                  
//    });
});




















