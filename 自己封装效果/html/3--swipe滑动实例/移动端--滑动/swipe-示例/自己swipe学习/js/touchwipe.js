/**
 * Created by fsx on 2015/9/23.
 */
(function(a){

    a.fn.touchwipe=function(c){

        var b={

            drag:false,

            min_move_x:20,

            min_move_y:20,

            wipeLeft:function(){/*���󻬶�*/},

            wipeRight:function(){/*���һ���*/},

            wipeUp:function(){/*���ϻ���*/},

            wipeDown:function(){/*���»���*/},

            wipe:function(){/*���*/},

            wipehold:function(){/*��������*/},

            wipeDrag:function(x,y){/*�϶�*/},

            preventDefaultEvents:true

        };

        if(c){a.extend(b,c)};

        this.each(function(){

            var h,g,j=false,i=false,e;

            var supportTouch = "ontouchstart" in document.documentElement;

            var moveEvent = supportTouch ? "touchmove" : "mousemove",

                startEvent = supportTouch ? "touchstart" : "mousedown",

                endEvent = supportTouch ? "touchend" : "mouseup"





            /* �Ƴ� touchmove ���� */

            function m(){

                this.removeEventListener(moveEvent,d);

                h=null;

                j=false;

                clearTimeout(e)

            };



            /* �¼������� */

            function d(q){

                if(b.preventDefaultEvents){

                    q.preventDefault()

                };

                if(j){

                    var n = supportTouch ? q.touches[0].pageX : q.pageX;

                    var r = supportTouch ? q.touches[0].pageY : q.pageY;

                    var p = h-n;

                    var o = g-r;

                    if(b.drag){

                        h = n;

                        g = r;

                        clearTimeout(e);

                        b.wipeDrag(p,o);

                    }

                    else{

                        if(Math.abs(p)>=b.min_move_x){

                            m();

                            if(p>0){b.wipeLeft()}

                            else{b.wipeRight()}

                        }

                        else{

                            if(Math.abs(o)>=b.min_move_y){

                                m();

                                if(o>0){b.wipeUp()}

                                else{b.wipeDown()}

                            }

                        }

                    }

                }

            };



            /*wipe ������*/

            function k(){clearTimeout(e);if(!i&&j){b.wipe()};i=false;j=false;};

            /*wipehold ������*/

            function l(){i=true;b.wipehold()};



            function f(n){

                //if(n.touches.length==1){

                h = supportTouch ? n.touches[0].pageX : n.pageX;

                g = supportTouch ? n.touches[0].pageY : n.pageY;

                j=true;

                this.addEventListener(moveEvent,d,false);

                e=setTimeout(l,750)

                //}

            };



            //if("ontouchstart"in document.documentElement){

            this.addEventListener(startEvent,f,false);

            this.addEventListener(endEvent,k,false)

            //}

        });

        return this

    };

})(jQuery);