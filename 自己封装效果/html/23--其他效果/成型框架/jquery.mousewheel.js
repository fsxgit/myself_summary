/*! Copyright (c) 2015.7.24  BeiJing

 * 樊飘飘
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);



//转过来的
function fx_XunPai_fullpages(){
    var $warp = $("#wrap");
    var $block = $(".block");
    var $nav = $(".nav a");
    var arr = [];
    var iNow = 0;
    var scroll = 0;
    $block.each(function(){
        arr.push($(this).offset().top);
    });
    $nav.each(function(index){
        $(this).click(function()
        {
            startMove($warp,{"top":-arr[index]},700);
            $(this).addClass("active").siblings("a").removeClass("active");
            iNow = index;
        });
    });

    $("body").stop(true,true).bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down', vel = Math.abs(delta);

        scroll += 1;

        setTimeout(function(){
            scroll = 0;
        },1500)

        if(scroll === 3)
        {
            //向上滚动
            if(dir === "Up")
            {
                if(iNow === 0)
                {
                    return iNow;
                }
                console.log(iNow);
                startMove($warp,{"top":-arr[(--iNow)]},700);
                console.log(iNow);
            }

            //向下滚动
            if(dir === "Down" )
            {
                if(iNow >= arr.length)
                {
                    return iNow;
                }
                startMove($warp,{"top":-arr[++iNow]},700);
            }
        }

        $nav.eq(iNow).addClass("active").siblings("a").removeClass("active");
        return false;
    });

    function startMove(obj,json,timer)
    {
        obj.animate(json,timer, function () {
            scroll = 0;
        });
    };
}
//调用整屏滚动的函数
fx_XunPai_fullpages();
