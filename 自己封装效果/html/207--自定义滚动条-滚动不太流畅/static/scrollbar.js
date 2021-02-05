(function (win, doc, $) {
  function CusScrollBar(options) {
    this._init(options);
  }

  $.extend(CusScrollBar.prototype, {
    _init: function (options) {
      var self = this;
      self.options = {scrollDir: 'Y', contentSelector: '', barSelector: '', sliderSelector: '', wheelStep: 100,}
      $.extend(true, self.options, options || {});
      self._initDomEvent();
      return self;
    }, _initDomEvent: function () {
      var opts = this.options;
      this.$cont = $(opts.contentSelector);
      this.$slider = $(opts.sliderSelector);
      this.$bar = opts.barSelector ? $(opts.barSelector) : self.$slider.parent();
      this.$doc = $(doc);
      this._initSliderDragEvent();
      this._bindContentScroll();
      this._bindMousewheel();
      this._initSliderHeight();
    }, _initSliderHeight: function () {
      var rate = this.$cont.height() / this.$cont[0].scrollHeight;
      var sliderHeight = rate * this.$bar.height();
      this.$slider.css('height', sliderHeight);
    }, _initSliderDragEvent: function () {
      var self = this;
      var slider = this.$slider, sliderEl = slider[0];
      if (sliderEl) {
        var doc = this.$doc, dragStartPagePostion, dragStartScrollPostion, dragContBarRate;

        function mousemoveHandler(e) {
          e.preventDefault();
          if (dragStartPagePostion == null) {
            return;
          }
          self.scrollTo(dragStartScrollPostion + (e.pageY - dragStartPagePostion) * dragContBarRate);
        }

        slider.on('mousedown', function (e) {
          e.preventDefault();
          dragStartPagePostion = e.pageY;
          dragStartScrollPostion = self.$cont[0].scrollTop;
          dragContBarRate = self.getMaxScrollPosition() / self.getMaxSliderPosition();
          doc.on('mousemove.scroll', mousemoveHandler).on('mouseup.scroll', function () {
            doc.off('.scroll');
          });
        });
        return self;
      }
    }, getSliderPosition: function () {
      var self = this, maxSliderPosition = self.getMaxSliderPosition();
      return Math.min(maxSliderPosition, maxSliderPosition * self.$cont[0].scrollTop / self.getMaxScrollPosition());
    }, getMaxScrollPosition: function () {
      var self = this;
      return Math.max(self.$cont.height(), self.$cont[0].scrollHeight) - self.$cont.height();
    }, getMaxSliderPosition: function () {
      var self = this;
      return self.$bar.height() - self.$slider.height();
    }, _bindContentScroll: function () {
      var self = this;
      self.$cont.on('scroll', function () {
        var sliderEl = self.$slider && self.$slider[0];
        if (sliderEl) {
          sliderEl.style.top = self.getSliderPosition() + 'px';
        }
      });
      return self;
    }, _bindMousewheel: function () {
      var self = this;
      self.$cont.on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();
        var oEv = e.originalEvent, wheelRange = oEv.wheelDelta ? -oEv.wheelDelta / 120 : (oEv.detail || 0) / 3;
        self.scrollTo(self.$cont[0].scrollTop + wheelRange * self.options.wheelStep)
      });
    }, scrollTo: function (positonVal) {
      var self = this;
      self.$cont.scrollTop(positonVal);
    }
  });
  win.CusScrollBar = CusScrollBar;
})(window, document, jQuery)