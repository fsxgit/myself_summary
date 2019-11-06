/**
 * 解决input、textarea在ios中获取焦点后，页面被顶上，失去焦点时，页面不回弹，导致页面其他按钮点击不起作用
 */
window.addEventListener('focusout', function () {
  document.body.scrollTop = document.body.scrollHeight;
  window.scroll(0, 0);
});


/**
 * 或者
 在ios微信中，有输入框，底部还有固定按钮时，键盘弹起时按钮被顶起，键盘消失后，按钮不回到底部
 */
$("body").on("focus","input,textarea",function(){
  $(".calc_teach_share").hide();
  $(".c_bot_gap").hide();
});
$("body").on("blur","input,textarea",function(){
  $(".calc_teach_share").show();
  $(".c_bot_gap").show();
});