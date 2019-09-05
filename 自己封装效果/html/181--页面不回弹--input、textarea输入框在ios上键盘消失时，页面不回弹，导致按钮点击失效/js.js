/**
 * 解决input、textarea在ios中获取焦点后，页面被顶上，失去焦点时，页面不回弹，导致页面其他按钮点击不起作用
 */
window.addEventListener('focusout', function () {
  document.body.scrollTop = document.body.scrollHeight;
  window.scroll(0, 0);
});