document.body.onload=function(){var css=".draggable{cursor: move;display: inline-block;} .text:focus{cursor: auto;} .text-wrapper{width: 100%;position: relative;} .wrap{position: absolute;margin: auto;top: 0;bottom: 0;left: 0;right: 0;}';";var style=document.createElement('style');if(style.styleSheet){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));}
document.getElementsByTagName('head')[0].appendChild(style);console.log("done");var elements=document.querySelectorAll(".draggable");var texts=document.querySelectorAll(".text");z=1;editing=false;var editedText;var tgt;var clickTimer=null;document.body.addEventListener('mousedown',cancel);document.body.addEventListener('touchstart',cancel);function cancel(evt){if(!event.target.classList.contains("text")){editing=false;if(editing){editedText.blur();}}}
for(var i=0;i<elements.length;i++){elements[i].addEventListener('mousedown',drag);elements[i].addEventListener('touchstart',handleTouch);b=elements[i].getBoundingClientRect();elements[i].initialOffsetX=b.left+window.scrollX;elements[i].initialOffsetY=b.top+window.scrollY;elements[i].x=b.left;elements[i].y=b.top;elements[i].style.cursor="move";document.addEventListener('mouseup',end);document.addEventListener('touchend',end);};for(let i=0;i<texts.length;i++){texts[i].addEventListener("dblclick",editText);var div=document.createElement("div");div.className="text-wrapper";var parent=texts[i].parentNode;parent.insertBefore(div,texts[i]);div.appendChild(texts[i]);div.style.height=outerHeight(texts[i])+"px";var div=document.createElement("div");div.className="wrap";var parent=texts[i].parentNode;parent.insertBefore(div,texts[i]);div.appendChild(texts[i]);texts[i].contentEditable="true";}
function editText(evt){editedText=evt.target;editing=true;editedText.focus();}
function handleTouch(evt){evt.preventDefault();drag(evt);if(clickTimer==null){clickTimer=setTimeout(function(){clickTimer=null;},500)}else{clearTimeout(clickTimer);clickTimer=null;editText(evt);}}
function drag(event){if(!event.target.classList.contains("text")){editing=false;if(editing){editedText.blur();}}
if(!editing){event.preventDefault();moving=true;z=z+1;tgt=event.target;tgt.attributeName='test';b=tgt.getBoundingClientRect();var x=b.left+window.scrollX;var y=b.top+window.scrollY;offsetX=event.pageX||event.changedTouches[0].pageX;offsetY=event.pageY||event.changedTouches[0].pageY;document.addEventListener('mousemove',function(e){if(moving===true){var dx=e.pageX-offsetX+x-tgt.initialOffsetX;var dy=e.pageY-offsetY+y-tgt.initialOffsetY;var position='transform: translate('+dx+'px, '+dy+'px);z-index:'+z+';';tgt.setAttribute('style',position);};});document.addEventListener('touchmove',function(e){var touches=e.changedTouches;if(moving===true){for(let i=0;i<touches.length;i++){var dx=touches[i].pageX-offsetX+x-tgt.initialOffsetX;var dy=touches[i].pageY-offsetY+y-tgt.initialOffsetY;var position='transform: translate('+dx+'px, '+dy+'px);z-index:'+z+';';tgt.setAttribute('style',position);}};});}};function end(evt){moving=false;};function outerHeight(el){var height=el.offsetHeight;var style=getComputedStyle(el);height+=parseInt(style.marginTop)+parseInt(style.marginBottom);return height;}}