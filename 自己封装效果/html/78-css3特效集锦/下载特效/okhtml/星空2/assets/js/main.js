o2pf = new App(['popup', 'loaders', 'input', 'form']);


o2pf.addToUpdate(['viewport'], function(){
  if (o2pf.width_sc > o2pf.height_sc) o2pf.body.addClass('landspace');
  else o2pf.body.removeClass('landspace');

});

var audio = new Audio(cdn_url+'assets/audio/O2_PF_2018_audio_fin.mp3');
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();
// audio = $('<audio autoplay loop preload><source src="'+cdn_url+'assets/audio/O2_PF_2018_audio_fin.ogg" type="audio/ogg"><source src="'+cdn_url+'assets/audio/O2_PF_2018_audio_fin.mp3" type="audio/mpeg"></audio>').appendTo(o2pf.body);
var _p_l;
(function($){

  loadAfterAjax();

  $(window).load(function(){

    Validate.alert_inline_template = '<span class="o2-pf__form-tooltip">${message}</span>';
    Validate.alert_inline_class = 'o2-pf__form-tooltip';

    _p_l = Loaders.page($('#page-loader'));

    o2pf.update();

    if (!is_pf_view) _p_l.close();

  });

})(jQuery);


function dynamicWidthInput(){
  var d_inputs = document.querySelectorAll('.dtext-input input');

  if (d_inputs.length!=0)
  {
    for (var i = 0, len=d_inputs.length; i < len; i++)
    {

      var events = $._data(d_inputs[i], "events");
      if (events!==undefined) continue;

      dynamicWidthInputCheck( $(d_inputs[i]) );
      d_inputs[i].onkeyup = function(event) {
        dynamicWidthInputCheck( $(this) );
      };

    }
  }


};

function dynamicWidthInputCheck( input ){

  if (o2pf.width_sc<768) return;

  var value = input.val();

  if (value=='') return;

  var widht_span = $('<span>').html(value.replace(/ /g, '\u00a0')).css({'font-size':input.css('font-size'),'width':'auto','position':'absolute','left':'0','top':'0','display':'inline-block', 'padding': '0 0.5em', 'visibility':'hidden'});
  input.after(widht_span);

  var w = widht_span.width();
  if ( input.parent().hasClass('o2-pf__form-item--share') )
    w += 30;

  widht_span.remove();

  input.css('width', w);

}

function ni(el, i, array)
{
  var allow_char = true;

  if ($('.o2-pf__form--login').length===1)
    el.onkeydown = function(e) {
      allow_char = true;
      if ( e.keyCode!==8 && isNaN(parseInt(e.key)) )
      {
        allow_char = false;
        e.preventDefault();
      }
      if ( e.keyCode===8 && this.value!='' )
        allow_char = false;
    };

  el.onkeyup = function(event) {

    if ( !allow_char || (this.value=='' && event.keyCode!==8) ) return;

    var nextInput = i + 1;

    if ( event.keyCode===8) // backspace
      nextInput = i - 1;

    if (nextInput < array.length && nextInput >= 0 )
    {
      array[nextInput].focus();
      if ( event.keyCode===8 )
        array[nextInput].value = '';
      else
        array[nextInput].select();

    }


  };
}

function nextInput(){

  var n_inputs = document.querySelectorAll('.fnext-input input');

  if (n_inputs.length!=0)
  {

    n_inputs[0].focus();

    for (var i=0, len=n_inputs.length; i < len; i++)
      ni(n_inputs[i], i, n_inputs);

  }

};

function changeContent(data, url) {

  _url = url.split('?')[0];

  appOp.body.find('.o2-pf--login').removeClass('o2-pf--login');

  if ( appOp.body.find('.o2-pf__content').length===0 ) {window.location.href = _url;return;}

  history.pushState({}, 'O2 PF 2018', _url);

	var content = $.parseHTML(data);
	for (var i = content.length - 1; i >= 0; i--)
	{
    var new_content = $(content[i]);
    var _cl = '';
    if (new_content.hasClass('o2-pf__header')) _cl = '.o2-pf__header';
		if (new_content.hasClass('o2-pf__content')) _cl = '.o2-pf__content';
		if (_cl!='')
    {
      o2pf.body.find(_cl).replaceWith(new_content);
      if (_cl == '.o2-pf__content')
        setTimeout(function(){
          o2pf.initLoadedContent(appOp.body.find('.o2-pf__content'));
          o2pf.update();
        }, 10);

    }
	};


};
function addXlsxFile()
{
  var file_input = $('#XlsxFile');
  if (file_input.length===1)
  {
    file_input.click(function(e){
      $(this).val(""); //  repair upload same file
    });
    file_input.change(function(e){

      var input = this;
      if (input.value.length===0) return;
      var reader = new FileReader();
      reader.onload = function(){
          var fileData = reader.result;
          var wb = XLSX.read(fileData, {type : 'binary'});

          wb.SheetNames.forEach(function(sheetName){
            var rowObj =XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
            var jsonObj = JSON.stringify(rowObj);
            var emails = JSON.parse(jsonObj);
            var buttons = $(input).parents('.buttons');
            for (var key in emails) {
               if (emails.hasOwnProperty(key)) {
                  var obj = emails[key];
                  for (var prop in obj) {
                     if (obj.hasOwnProperty(prop)) {
                        // console.log(prop + " = " + obj[prop]);
                        if (buttons.prev().find('input').val()=='')
                          buttons.prev().find('input').val(obj[prop]);
                        else
                          buttons.before('<div class="o2-pf__form-item o2-pf__form-item--text dtext-input"><input class="cFake email" type="text" name="email[]" value="'+obj[prop]+'" placeholder="Zadejte email příjemce" autocomplete="off"><a class="o2-pf__form-item__delete" href="#"><span></span><span></span></a></div>');
                     }
                  }
               }
            }

            alert('Bylo nahráno '+emails.length+' e-mailových adres.');

            dynamicWidthInput();

            buttons.parent().find('.o2-pf__form-item__delete').click(function(e){
              e.preventDefault();
              $(this).parent().remove();
            });
          });
      };
      reader.readAsBinaryString(input.files[0]);
    });
  }
};

function loadAfterAjax()
{

  $('#navOpen').click(function(e){
    e.preventDefault();
    $('html, body').toggleClass('noscroll');
    o2pf.body.toggleClass('o2-pf__nav--open');
  });

  if (!audio.paused)
    $('.o2-pf__nav-sound').addClass('play');


  $('.o2-pf__nav-sound').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('play'))
    {
      $(this).removeClass('play');
      audio.pause();
    }
    else
    {
      $(this).addClass('play');
      audio.play();
    }
  });

  $('.copy-to-clipboard').click(function(e){
    e.preventDefault();
    var input = $(this).parents('form').find('input[type=text]');

    var new_input = $('<input>')
      .attr('type','text')
      .val(input.val())
      .css({
        'width':input.width(),
        'background':'transparent',
        'position':'absolute',
        'left':'50%',
        'top':'0',
        'margin-left': (input.outerWidth()/-2)
      })
      ;

    input.after(new_input);

    new_input.animate({'opacity':0, 'top': '-50px'}, 400, function(){
      $(this).remove();
    });

    input.select();
    document.execCommand("copy");
    input.blur();

  });

  $('.add-content').click(function(e){
    e.preventDefault();
    $(this).parent().before($(this).data('add_content'));

    dynamicWidthInput();

    $(this).prev().find('.o2-pf__form-item__delete').click(function(e){
      e.preventDefault();
      $(this).parent().remove();
    });

  });

  // cssmask
  if (document.body.style[ '-webkit-mask-repeat' ]!==undefined)
  {

    var scroll_mask = $('.scroll-mask');
    var scroll_inner = $('.o2-pf__inner--scroll');
    if (scroll_inner.length===1 && scroll_mask.length===2)
    {

      $('.add-content').click(function(e){
        scroll_inner.trigger('scroll');
      });

      var scroll_mask_img = new Image();
      scroll_mask_img.src = scroll_mask.css('background-image').slice(4, -1).replace(new RegExp('"', 'g'), "")
      min_h = parseInt($('.o2-pf').css('min-height'));

      scroll_inner.scroll(function(){
        if ( $(this).height()>=$(this).get(0).scrollHeight )
        {
          scroll_mask.removeClass('scroll-mask--show');
          return;
        }

        if ( $(this).scrollTop() < ($(this).get(0).scrollHeight-$(this).height()) )
          scroll_mask.eq(1).addClass('scroll-mask--show');
        else
          scroll_mask.eq(1).removeClass('scroll-mask--show');

        if ( $(this).scrollTop()>0 )
          scroll_mask.eq(0).addClass('scroll-mask--show');
        else
          scroll_mask.eq(0).removeClass('scroll-mask--show');

      });

      o2pf.addToUpdate(['viewport'], function(){

        var height_sc = o2pf.height_sc<min_h ? min_h : o2pf.height_sc;
        var scale_h = o2pf.width_sc / scroll_mask_img.width;
        var scale_v = height_sc / scroll_mask_img.height;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        scroll_mask.css({'background-size':(scroll_mask_img.width*scale)+'px '+(scroll_mask_img.height*scale)+'px','background-position':'center -70px'});

        scroll_mask.eq(1).css({'background-position':'center '+(178-height_sc)+'px'})

        scroll_inner.trigger('scroll');
      });

    }

  }

  $('.button--pf').click(function(e){
    if ($(this).attr('href')!=='#') return true;

    e.preventDefault();
    window.location.reload();
  });

  $('.o2-pf__action .delete').click(function(e){

    e.preventDefault();

    if (confirm('Opravdu chcete toto přání smazat?')) {

      var url = $(this).data('ajax_url');
      var loader = Loaders.form(undefined, function(){
        appOp.ajax("GET", url, undefined, 'json', function(data){
          var redirected = data.redirected;
          appOp.ajax("GET", redirected, undefined, 'html', function(data){loader.close();changeContent(data, redirected);}, function(request, status, error){loader.close();new PopUp(status,error);});
        }, function(request, status, error){loader.close();new PopUp(status,error);});
      });

    }

  });

  $('.button--back, .button--close, .button--create, .o2-pf__action .send, .o2-pf__action .share, .o2-pf__header nav ul a').click(function(e){

    var url = $(this).data('ajax_url');
    if (url==undefined) return true;

    e.preventDefault();

    var loader = Loaders.form(undefined, function(){
      appOp.ajax("GET", url, undefined, 'html', function(data){loader.close();changeContent(data, url);}, function(request, status, error){loader.close();new PopUp(status,error);});
    });

  });

  addXlsxFile();
  dynamicWidthInput();
  nextInput();

}; // load after ajax load end
