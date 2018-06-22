window.onerror = function(msg, url, line){
	document.documentElement.classList.remove("js");
	document.documentElement.classList.add("no-js");
};

/*!
 * Application
 */
 var cdn_url = cdn_url || '';
 var app_txts = {
	 'thank' : typeof(t)!=='undefined'&&t.thank ? t.thank : 'Děkujeme'
	,'warning' : typeof(t)!=='undefined'&&t.warning ? t.warning : 'Upozornění'
	,'error' : typeof(t)!=='undefined'&&t.error ? t.error : 'Chyba'
	,'error_required' : typeof(t)!=='undefined'&&t.error_required ? t.error_required : 'Povinné položky.'
	,'error_phone' : typeof(t)!=='undefined'&&t.error_phone ? t.error_phone : 'Telefonní číslo musí mít minimálně 9 číslic.'
	,'error_email' : typeof(t)!=='undefined'&&t.error_email ? t.error_email : 'Email nemá správný tvar.'
	,'selected' : typeof(t)!=='undefined'&&t.selected ? t.selected : 'Vybraných'
	,'show' : typeof(t)!=='undefined'&&t.show ? t.show : 'Otevřít'
  ,'hide' : typeof(t)!=='undefined'&&t.hide ? t.hide : 'Zavřít'
};
var app_libs =
{
	'popup' 	: {url:cdn_url+'assets/js/app/components/popup.js',status:false,load_widht:0}
,	'image' 	: {url:cdn_url+'assets/js/app/components/image.js',status:false,load_widht:0}
,	'map' 		: {url:cdn_url+'assets/js/app/components/map.js',status:false,load_widht:0}
,	'input' 	: {url:cdn_url+'assets/js/app/components/input.js',status:false,load_widht:0}
,	'filter' 	: {url:cdn_url+'assets/js/app/components/filter.js',status:false,load_widht:0}
,	'form' 		: {url:cdn_url+'assets/js/app/components/form.js',status:false,load_widht:0}
,	'more' 		: {url:cdn_url+'assets/js/app/components/more.js',status:false,load_widht:0}
,	'sh'		  : {url:cdn_url+'assets/js/app/components/shadowcube.js',status:false,load_widht:0}
,	'loaders' : {url:cdn_url+'assets/js/app/components/loaders.js',status:false,load_widht:0}
,	'slider' 	: {url:cdn_url+'assets/js/app/plugins/vislider.js',status:false,load_widht:0}

,	'twitter'         : {url:'//platform.twitter.com/widgets.js',status:false,load_widht:1024}
,	'facebook' 	      : {url:'//connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v2.0',status:false,load_widht:1024} //'//connect.facebook.net/cs_CZ/all.js#xfbml=1'
,	'pinterest'	      : {url:'//assets.pinterest.com/js/pinit.js',status:false,load_widht:1024}
,	'google-plus-one' : {url:'//apis.google.com/js/plusone.js',status:false,load_widht:1024}
};

var App = function( libs_to_load, container )
{

	this.FIXED_HEADER_LIMIT = 0;
	this.CHANGE_TO_DESCTOP = 1024;
	this.SCROLLTOP_TIME = 500;

	this.container = container || document.body;

  appOp = this; // compatible to all components
  appOp.body = $(this.container); // compatible to all components

	this.libs = app_libs;
	this.libs_to_load = libs_to_load || ['popup'];
	this.loaded = false;
	this.scripts = document.getElementsByTagName('script')[0];

	this._libs();
	// this.update();
	// this.initLinks();

	var that=this;

	if (this.container===document.body)
		window.onscroll = function(){ that.scroll(); };
	else
		this.container.onscroll = function(){ that.scroll(); };

	window.onresize = function(){ that.viewport(); };
	window.onload = function(){
		that.initLinks();
		that.update();
		that.loaded=true;
	};
};
App.prototype.viewportUpdate=function(){};
App.prototype.viewport=function()
{
  // this.width = this.container.clientWidth;
	// this.height = this.container.clientHeight;

  this.width = this.container.scrollWidth;
	this.height = this.container.scrollHeight;

	this.width_sc = window.innerWidth || document.documentElement.clientWidth;
	this.height_sc = window.innerHeight || document.documentElement.clientHeight;

	this.viewportUpdate();
};
App.prototype.scrollUpdate=function(){};
App.prototype.scroll=function(){
	this._top = this.top;
  // this.top = this.container.scrollTop || document.documentElement.scrollTop;
  this.top = this.container.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
	this.scrollUpdate();
};

App.prototype.addToUpdate=function(type, new_fun)
{
	if (typeof(type)==='string')
		type = [type];

	for (var i = type.length - 1; i >= 0; i--)
	{
		if (type[i]=='viewport')
		{
			var tmp_v = this.viewportUpdate;
			this.viewportUpdate = function(){tmp_v();new_fun();};
		}
	    else if (type[i]=='scroll')
	    {
	    	var tmp_s = this.scrollUpdate;
	    	this.scrollUpdate = function(){tmp_s();new_fun();};
	    }
	    else
	    	console.log('type "'+type[i]+'" not exist !');
	}

};
App.prototype.update=function(){
	this.viewport();
	this.scroll();
};

App.prototype.loadScript=function( url, async, callback )
{
	var script = document.createElement('script');
	async = async===undefined?true:async;
	script.async = async;
	if (typeof(callback)==='function') script.onload = callback;
	script.src = url;
	this.scripts.parentNode.insertBefore(script, this.scripts);
};

App.prototype.scrollTop=function(t, time, callback)
{

	if ( typeof($) == 'undefined' ) {new PopUp('Error', 'jQuery not loaded !');return;}

  var scroll_element =  (this.container===document.body) ? $('html, body') : $(this.container) ;

	if ( this.FIXED_HEADER_LIMIT )
		t = t-this.FIXED_HEADER_LIMIT;

	if ( time===undefined  )
	{
		scroll_element[0].scrollTop=t;
	}
	else
	{
		if ( typeof(callback) == 'function')
		{
      scroll_element.stop().animate({'scrollTop':t}, time);

			setTimeout( function(){ callback(); }, time );
		}
		else
		{
      scroll_element.stop().animate({'scrollTop':t}, time);
		}
	}
};

App.prototype.ajax=function(method, url, data, dataType, success, failure)
{
	if ( typeof($) == 'undefined' ) {new PopUp('Error', 'jQuery not loaded !');return;}
  if (typeof(data)=='string')
    $.ajax({
  		 'type': method
  		,'url': url
  		,'data': data
  		,'dataType': dataType
  		,'success': function (data) {
  			if (success!==undefined) success(data);
  		}
  		,'error': function (request, status, error) {
  			if (failure===undefined) new PopUp(status,error);
  			else failure(request, status, error);
  		}
  	});
  else
  	$.ajax({
  		 'type': method
  		,'url': url
  		,'data': data
  		,'dataType': dataType
  		,'success': function (data) {
  			if (success!==undefined) success(data);
  		}
  		,'error': function (request, status, error) {
  			if (failure===undefined) new PopUp(status,error);
  			else failure(request, status, error);
  		}
      ,'cache': false
      ,'contentType': false
      ,'processData': false
  	});

};

App.prototype.initLinks = function( links )
{
	if ( typeof($) == 'undefined' ) {new PopUp('Error', 'jQuery not loaded !');return;}

	var that=this;
	links = links===undefined?$('A'):links;
	for (var i = links.length - 1; i >= 0; i--)
	{
		var link = links.eq(i);

		var href = link.attr('href');
		if (href===undefined) continue;

		var events = $._data(link.get(0), "events");
		if ( events!==undefined && events.click ) continue; // if the link is attached click event dont bind them

		if (
			href.indexOf('http:')!=-1
			|| href.indexOf('https:')!=-1
		) {link.attr({'target':'_blank', 'rel':'noopener'});continue;} // if the link goes away dont bind them and add targer=_blank

		if ( href.indexOf('#')===0 )
		{
			link.click(function(e){
				var $target = $('#'+$(this).attr('href').split('#')[1]);
				if ($target.length===1)
				{
					e.preventDefault();
					that.scrollTop($target.offset().top, that.SCROLLTOP_TIME);
				}
			});
			continue;
		}

		if (
			href.indexOf('mailto:')!=-1
			|| href.indexOf('tel:')!=-1
			|| href.indexOf('.pdf')!=-1
			|| href==='#'
		) {continue;} // if the link goes away dont bind them


		// link.click(function(e){
		// 	if (that.width<that.CHANGE_TO_DESCTOP) return;
		// 	e.preventDefault();
		// 	this.loadPage(linkink.attr('href'));
		// });

	};

};

App.prototype.clp=function(p, callback)
{

  var that=this;
	p.ln.click(function(e){

		if ( that.width_sc>=p.wl_t ) return;
    if ( that.width_sc<p.wl_d ) return;

		var c = '.collapsible';
		var $l = $(this);
		var $c = $l.parent().find(c);
		var $co = $l.closest('.collapsible__set').find('.collapsible:not(.collapsed)');
    var is_unclosed_set = $l.closest('.collapsible__set').hasClass('collapsible__set--unclosed');

		if (p.fr!==undefined)
		{

			var fr = p.fr.split('');
			$c = $l;
			for (var  i=0, len=fr.length; i<len; i++)
			{
				switch(fr[i]) {
				    case 'p': $c = $c.parent(); break;
				    case 'n': $c = $c.next(c); break;
				    case 'c': $c = $c.children(c); break;
				    default: $c = $c.find(c).eq(0);
				}
			};
		}

		if ($c.length===0)
      return;

		e.preventDefault();

    if ( $c.css('display')=='block' && $c.hasClass('collapsible--unclosed') )
    {
      if ( typeof callback === 'function' ) callback($(this), $l);
      return;
    }

		if (is_unclosed_set && !$c.hasClass('collapsed')) {
      if ( typeof callback === 'function' ) callback($(this), $l);
      return;
    }

		if ( typeof($co)!='undefined' && $co.length!==0 )
			$co.stop().slideUp(function(){
				$(this).addClass('collapsed');
				$co.parent().find('.collapsible--open').removeClass('collapsible--open')
			});


		$c.stop().slideToggle(function(){
			if ($(this).css('display')=='none')
			{
  			$(this).addClass('collapsed');
  			$l.removeClass('collapsible--open');
  			if (typeof(t)!="undefined")
  				$l.html($l.html().replace(t.hide, t.show));
			}
			else
			{
				$(this).removeClass('collapsed');
				$l.addClass('collapsible--open');
				if (typeof(t)!="undefined")
					$l.html($l.html().replace(t.show, t.hide));
			}
			$(this).attr('style','');

			if ( typeof callback === 'function' ) callback($(this), $l);
		});

	});

};
App.prototype.clps=function(params, callback)
{

	if ( typeof($) == 'undefined' ) {new PopUp('Error', 'jQuery not loaded !');return;}

	this.clp(
	{
		 'ln':params[0] // link
		,'fr':params[1] // find rules
    ,'wl_t':params[2] || 1000000 // width top limit
    ,'wl_d':params[3] || 0 // width down limit
	}, callback);
};


App.prototype._libs = function( p )
{
	for (var i = this.libs_to_load.length - 1; i >= 0; i--)
		this._lib( this.libs[this.libs_to_load[i]] );
};

App.prototype._lib = function( lib )
{
	var that=this;
	if ( lib.load_widht <= document.body.clientWidth )
		this.loadScript( lib.url, true, function(){lib.status='loaded';} );
	else
		this.addToUpdate(['viewport'], function(){
			if ( lib.status==='loaded' ) return;
			if ( lib.load_widht <= document.body.clientWidth )
				that.loadScript( lib.url, true, function(){lib.status='loaded';} );
		});

};

App.prototype.initLoadedContent = function( content )
{

	// if ( $.inArray( 'image', this.libs_to_load )!==-1 )
	// 	Images.init( content );
  //
	// if ( $.inArray( 'sh', this.libs_to_load )!==-1 )
	// 	Sh.init( content );

	if ( $.inArray( 'form', this.libs_to_load )!==-1 )
		Forms.init( content );

	if ( $.inArray( 'input', this.libs_to_load )!==-1 )
		Inputs.init( content );

	// if ( $.inArray( 'facebook', this.libs_to_load )!==-1 )
	// 	try{FB.XFBML.parse(); }catch(ex){console.log(ex);}

	loadAfterAjax();

	this.update();

};

App.prototype.setCookie = function(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

App.prototype.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
