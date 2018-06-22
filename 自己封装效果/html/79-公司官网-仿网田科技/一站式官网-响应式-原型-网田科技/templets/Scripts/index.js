!
    function(b) {
        "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b: b(jQuery)
    } (function(v) {
        function u(z) {
            var y = z || window.event,
                x = n.call(arguments, 1),
                w = 0,
                k = 0,
                i = 0,
                f = 0,
                e = 0,
                d = 0;
            if (z = v.event.fix(y), z.type = "mousewheel", "detail" in y && (i = -1 * y.detail), "wheelDelta" in y && (i = y.wheelDelta), "wheelDeltaY" in y && (i = y.wheelDeltaY), "wheelDeltaX" in y && (k = -1 * y.wheelDeltaX), "axis" in y && y.axis === y.HORIZONTAL_AXIS && (k = -1 * i, i = 0), w = 0 === i ? k: i, "deltaY" in y && (i = -1 * y.deltaY, w = i), "deltaX" in y && (k = y.deltaX, 0 === i && (w = -1 * k)), 0 !== i || 0 !== k) {
                if (1 === y.deltaMode) {
                    var c = v.data(this, "mousewheel-line-height");
                    w *= c,
                        i *= c,
                        k *= c
                } else {
                    if (2 === y.deltaMode) {
                        var a = v.data(this, "mousewheel-page-height");
                        w *= a,
                            i *= a,
                            k *= a
                    }
                }
                if (f = Math.max(Math.abs(i), Math.abs(k)), (!q || q > f) && (q = f, s(y, f) && (q /= 40)), s(y, f) && (w /= 40, k /= 40, i /= 40), w = Math[w >= 1 ? "floor": "ceil"](w / q), k = Math[k >= 1 ? "floor": "ceil"](k / q), i = Math[i >= 1 ? "floor": "ceil"](i / q), l.settings.normalizeOffset && this.getBoundingClientRect) {
                    var A = this.getBoundingClientRect();
                    e = z.clientX - A.left,
                        d = z.clientY - A.top
                }
                return z.deltaX = k,
                    z.deltaY = i,
                    z.deltaFactor = q,
                    z.offsetX = e,
                    z.offsetY = d,
                    z.deltaMode = 0,
                    x.unshift(z, w, k, i),
                r && clearTimeout(r),
                    r = setTimeout(t, 200),
                    (v.event.dispatch || v.event.handle).apply(this, x)
            }
        }
        function t() {
            q = null
        }
        function s(d, c) {
            return l.settings.adjustOldDeltas && "mousewheel" === d.type && c % 120 === 0
        }
        var r, q, p = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            n = Array.prototype.slice;
        if (v.event.fixHooks) {
            for (var m = p.length; m;) {
                v.event.fixHooks[p[--m]] = v.event.mouseHooks
            }
        }
        var l = v.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener) {
                    for (var a = o.length; a;) {
                        this.addEventListener(o[--a], u, !1)
                    }
                } else {
                    this.onmousewheel = u
                }
                v.data(this, "mousewheel-line-height", l.getLineHeight(this)),
                    v.data(this, "mousewheel-page-height", l.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener) {
                    for (var a = o.length; a;) {
                        this.removeEventListener(o[--a], u, !1)
                    }
                } else {
                    this.onmousewheel = null
                }
                v.removeData(this, "mousewheel-line-height"),
                    v.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(a) {
                var f = v(a),
                    e = f["offsetParent" in v.fn ? "offsetParent": "parent"]();
                return e.length || (e = v("body")),
                parseInt(e.css("fontSize"), 10) || parseInt(f.css("fontSize"), 10) || 16
            },
            getPageHeight: function(a) {
                return v(a).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        v.fn.extend({
            mousewheel: function(b) {
                return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
            },
            unmousewheel: function(b) {
                return this.unbind("mousewheel", b)
            }
        })
    }); (function(X) {
    var N = "left",
        O = "right",
        Y = "up",
        F = "down",
        Z = "in",
        E = "out",
        Q = "none",
        J = "auto",
        R = "swipe",
        I = "pinch",
        D = "tap",
        T = "doubletap",
        aa = "longtap",
        M = "horizontal",
        H = "vertical",
        U = "all",
        K = 10,
        W = "start",
        S = "move",
        V = "end",
        L = "cancel",
        ab = "ontouchstart" in window,
        C = "TouchSwipe";
    var P = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "button, input, select, textarea, a, .noSwipe"
    };
    X.fn.swipe = function(a) {
        var b = X(this),
            c = b.data(C);
        if (c && typeof a === "string") {
            if (c[a]) {
                return c[a].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                X.error("Method " + a + " does not exist on jQuery.swipe")
            }
        } else {
            if (!c && (typeof a === "object" || !a)) {
                return G.apply(this, arguments)
            }
        }
        return b
    };
    X.fn.swipe.defaults = P;
    X.fn.swipe.phases = {
        PHASE_START: W,
        PHASE_MOVE: S,
        PHASE_END: V,
        PHASE_CANCEL: L
    };
    X.fn.swipe.directions = {
        LEFT: N,
        RIGHT: O,
        UP: Y,
        DOWN: F,
        IN: Z,
        OUT: E
    };
    X.fn.swipe.pageScroll = {
        NONE: Q,
        HORIZONTAL: M,
        VERTICAL: H,
        AUTO: J
    };
    X.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: U
    };
    function G(a) {
        if (a && (a.allowPageScroll === undefined && (a.swipe !== undefined || a.swipeStatus !== undefined))) {
            a.allowPageScroll = Q
        }
        if (a.click !== undefined && a.tap === undefined) {
            a.tap = a.click
        }
        if (!a) {
            a = {}
        }
        a = X.extend({},
            X.fn.swipe.defaults, a);
        return this.each(function() {
            var b = X(this);
            var c = b.data(C);
            if (!c) {
                c = new B(this, a);
                b.data(C, c)
            }
        })
    }
    function B(a, a9) {
        var aw = (ab || !a9.fallbackToMouseEvents),
            w = aw ? "touchstart": "mousedown",
            ay = aw ? "touchmove": "mousemove",
            j = aw ? "touchend": "mouseup",
            l = aw ? null: "mouseleave",
            t = "touchcancel";
        var bn = 0,
            bE = null,
            c = 0,
            bs = 0,
            bu = 0,
            ax = 1,
            bd = 0,
            bK = 0,
            r = null;
        var bC = X(a);
        var e = "start";
        var h = 0;
        var bD = null;
        var k = 0,
            br = 0,
            bV = 0,
            bp = 0,
            q = 0;
        var bx = null;
        try {
            bC.bind(w, bG);
            bC.bind(t, bR)
        } catch(bj) {
            X.error("events not supported " + w + "," + t + " on jQuery.swipe")
        }
        this.enable = function() {
            bC.bind(w, bG);
            bC.bind(t, bR);
            return bC
        };
        this.disable = function() {
            bJ();
            return bC
        };
        this.destroy = function() {
            bJ();
            bC.data(C, null);
            return bC
        };
        this.option = function(ac, ad) {
            if (a9[ac] !== undefined) {
                if (ad === undefined) {
                    return a9[ac]
                } else {
                    a9[ac] = ad
                }
            } else {
                X.error("Option " + ac + " does not exist on jQuery.swipe.options")
            }
        };
        function bG(ac) {
            if (x()) {
                return
            }
            if (X(ac.target).closest(a9.excludedElements, bC).length > 0) {
                return
            }
            var af = ac.originalEvent ? ac.originalEvent: ac;
            var ad, ae = ab ? af.touches[0] : af;
            e = W;
            if (ab) {
                h = af.touches.length
            } else {
                ac.preventDefault()
            }
            bn = 0;
            bE = null;
            bK = null;
            c = 0;
            bs = 0;
            bu = 0;
            ax = 1;
            bd = 0;
            bD = bk();
            r = d();
            m();
            if (!ab || (h === a9.fingers || a9.fingers === U) || bw()) {
                bl(0, ae);
                k = bb();
                if (h == 2) {
                    bl(1, af.touches[1]);
                    bs = bu = ba(bD[0].start, bD[1].start)
                }
                if (a9.swipeStatus || a9.pinchStatus) {
                    ad = p(af, e)
                }
            } else {
                ad = false
            }
            if (ad === false) {
                e = L;
                p(af, e);
                return ad
            } else {
                bf(true)
            }
        }
        function bq(ai) {
            var af = ai.originalEvent ? ai.originalEvent: ai;
            if (e === V || e === L || bh()) {
                return
            }
            var ac, ad = ab ? af.touches[0] : af;
            var ah = bM(ad);
            br = bb();
            if (ab) {
                h = af.touches.length
            }
            e = S;
            if (h == 2) {
                if (bs == 0) {
                    bl(1, af.touches[1]);
                    bs = bu = ba(bD[0].start, bD[1].start)
                } else {
                    bM(af.touches[1]);
                    bu = ba(bD[0].end, bD[1].end);
                    bK = bc(bD[0].end, bD[1].end)
                }
                ax = bT(bs, bu);
                bd = Math.abs(bs - bu)
            }
            if ((h === a9.fingers || a9.fingers === U) || !ab || bw()) {
                bE = bI(ah.start, ah.end);
                bi(ai, bE);
                bn = bB(ah.start, ah.end);
                c = bH();
                bL(bE, bn);
                if (a9.swipeStatus || a9.pinchStatus) {
                    ac = p(af, e)
                }
                if (!a9.triggerOnTouchEnd || a9.triggerOnTouchLeave) {
                    var ae = true;
                    if (a9.triggerOnTouchLeave) {
                        var ag = bv(this);
                        ae = a7(ah.end, ag)
                    }
                    if (!a9.triggerOnTouchEnd && ae) {
                        e = v(S)
                    } else {
                        if (a9.triggerOnTouchLeave && !ae) {
                            e = v(V)
                        }
                    }
                    if (e == L || e == V) {
                        p(af, e)
                    }
                }
            } else {
                e = L;
                p(af, e)
            }
            if (ac === false) {
                e = L;
                p(af, e)
            }
        }
        function s(ad) {
            var ac = ad.originalEvent;
            if (ab) {
                if (ac.touches.length > 0) {
                    az();
                    return true
                }
            }
            if (bh()) {
                h = bp
            }
            ad.preventDefault();
            br = bb();
            c = bH();
            if (bQ()) {
                e = L;
                p(ac, e)
            } else {
                if (a9.triggerOnTouchEnd || (a9.triggerOnTouchEnd == false && e === S)) {
                    e = V;
                    p(ac, e)
                } else {
                    if (!a9.triggerOnTouchEnd && bU()) {
                        e = V;
                        bO(ac, e, D)
                    } else {
                        if (e === S) {
                            e = L;
                            p(ac, e)
                        }
                    }
                }
            }
            bf(false)
        }
        function bR() {
            h = 0;
            br = 0;
            k = 0;
            bs = 0;
            bu = 0;
            ax = 1;
            m();
            bf(false)
        }
        function u(ad) {
            var ac = ad.originalEvent;
            if (a9.triggerOnTouchLeave) {
                e = v(V);
                p(ac, e)
            }
        }
        function bJ() {
            bC.unbind(w, bG);
            bC.unbind(t, bR);
            bC.unbind(ay, bq);
            bC.unbind(j, s);
            if (l) {
                bC.unbind(l, u)
            }
            bf(false)
        }
        function v(af) {
            var ag = af;
            var ac = z();
            var ad = bg();
            var ae = bQ();
            if (!ac || ae) {
                ag = L
            } else {
                if (ad && af == S && (!a9.triggerOnTouchEnd || a9.triggerOnTouchLeave)) {
                    ag = V
                } else {
                    if (!ad && af == V && a9.triggerOnTouchLeave) {
                        ag = L
                    }
                }
            }
            return ag
        }
        function p(ac, ae) {
            var ad = undefined;
            if (y() || i()) {
                ad = bO(ac, ae, R)
            } else {
                if ((o() || bw()) && ad !== false) {
                    ad = bO(ac, ae, I)
                }
            }
            if (bN() && ad !== false) {
                ad = bO(ac, ae, T)
            } else {
                if (be() && ad !== false) {
                    ad = bO(ac, ae, aa)
                } else {
                    if (bm() && ad !== false) {
                        ad = bO(ac, ae, D)
                    }
                }
            }
            if (ae === L) {
                bR(ac)
            }
            if (ae === V) {
                if (ab) {
                    if (ac.touches.length == 0) {
                        bR(ac)
                    }
                } else {
                    bR(ac)
                }
            }
            return ad
        }
        function bO(af, ae, ac) {
            var ad = undefined;
            if (ac == R) {
                bC.trigger("swipeStatus", [ae, bE || null, bn || 0, c || 0, h]);
                if (a9.swipeStatus) {
                    ad = a9.swipeStatus.call(bC, af, ae, bE || null, bn || 0, c || 0, h);
                    if (ad === false) {
                        return false
                    }
                }
                if (ae == V && by()) {
                    bC.trigger("swipe", [bE, bn, c, h]);
                    if (a9.swipe) {
                        ad = a9.swipe.call(bC, af, bE, bn, c, h);
                        if (ad === false) {
                            return false
                        }
                    }
                    switch (bE) {
                        case N:
                            bC.trigger("swipeLeft", [bE, bn, c, h]);
                            if (a9.swipeLeft) {
                                ad = a9.swipeLeft.call(bC, af, bE, bn, c, h)
                            }
                            break;
                        case O:
                            bC.trigger("swipeRight", [bE, bn, c, h]);
                            if (a9.swipeRight) {
                                ad = a9.swipeRight.call(bC, af, bE, bn, c, h)
                            }
                            break;
                        case Y:
                            bC.trigger("swipeUp", [bE, bn, c, h]);
                            if (a9.swipeUp) {
                                ad = a9.swipeUp.call(bC, af, bE, bn, c, h)
                            }
                            break;
                        case F:
                            bC.trigger("swipeDown", [bE, bn, c, h]);
                            if (a9.swipeDown) {
                                ad = a9.swipeDown.call(bC, af, bE, bn, c, h)
                            }
                            break
                    }
                }
            }
            if (ac == I) {
                bC.trigger("pinchStatus", [ae, bK || null, bd || 0, c || 0, h, ax]);
                if (a9.pinchStatus) {
                    ad = a9.pinchStatus.call(bC, af, ae, bK || null, bd || 0, c || 0, h, ax);
                    if (ad === false) {
                        return false
                    }
                }
                if (ae == V && bS()) {
                    switch (bK) {
                        case Z:
                            bC.trigger("pinchIn", [bK || null, bd || 0, c || 0, h, ax]);
                            if (a9.pinchIn) {
                                ad = a9.pinchIn.call(bC, af, bK || null, bd || 0, c || 0, h, ax)
                            }
                            break;
                        case E:
                            bC.trigger("pinchOut", [bK || null, bd || 0, c || 0, h, ax]);
                            if (a9.pinchOut) {
                                ad = a9.pinchOut.call(bC, af, bK || null, bd || 0, c || 0, h, ax)
                            }
                            break
                    }
                }
            }
            if (ac == D) {
                if (ae === L || ae === V) {
                    clearTimeout(bx);
                    if (f() && !A()) {
                        q = bb();
                        bx = setTimeout(X.proxy(function() {
                                q = null;
                                bC.trigger("tap", [af.target]);
                                if (a9.tap) {
                                    ad = a9.tap.call(bC, af, af.target)
                                }
                            },
                            this), a9.doubleTapThreshold)
                    } else {
                        q = null;
                        bC.trigger("tap", [af.target]);
                        if (a9.tap) {
                            ad = a9.tap.call(bC, af, af.target)
                        }
                    }
                }
            } else {
                if (ac == T) {
                    if (ae === L || ae === V) {
                        clearTimeout(bx);
                        q = null;
                        bC.trigger("doubletap", [af.target]);
                        if (a9.doubleTap) {
                            ad = a9.doubleTap.call(bC, af, af.target)
                        }
                    }
                } else {
                    if (ac == aa) {
                        if (ae === L || ae === V) {
                            clearTimeout(bx);
                            q = null;
                            bC.trigger("longtap", [af.target]);
                            if (a9.longTap) {
                                ad = a9.longTap.call(bC, af, af.target)
                            }
                        }
                    }
                }
            }
            return ad
        }
        function bg() {
            var ac = true;
            if (a9.threshold !== null) {
                ac = bn >= a9.threshold
            }
            return ac
        }
        function bQ() {
            var ac = false;
            if (a9.cancelThreshold !== null && bE !== null) {
                ac = (bA(bE) - bn) >= a9.cancelThreshold
            }
            return ac
        }
        function bo() {
            if (a9.pinchThreshold !== null) {
                return bd >= a9.pinchThreshold
            }
            return true
        }
        function z() {
            var ac;
            if (a9.maxTimeThreshold) {
                if (c >= a9.maxTimeThreshold) {
                    ac = false
                } else {
                    ac = true
                }
            } else {
                ac = true
            }
            return ac
        }
        function bi(ae, ad) {
            if (a9.allowPageScroll === Q || bw()) {
                ae.preventDefault()
            } else {
                var ac = a9.allowPageScroll === J;
                switch (ad) {
                    case N:
                        if ((a9.swipeLeft && ac) || (!ac && a9.allowPageScroll != M)) {
                            ae.preventDefault()
                        }
                        break;
                    case O:
                        if ((a9.swipeRight && ac) || (!ac && a9.allowPageScroll != M)) {
                            ae.preventDefault()
                        }
                        break;
                    case Y:
                        if ((a9.swipeUp && ac) || (!ac && a9.allowPageScroll != H)) {
                            ae.preventDefault()
                        }
                        break;
                    case F:
                        if ((a9.swipeDown && ac) || (!ac && a9.allowPageScroll != H)) {
                            ae.preventDefault()
                        }
                        break
                }
            }
        }
        function bS() {
            var ad = bF();
            var ae = g();
            var ac = bo();
            return ad && ae && ac
        }
        function bw() {
            return !! (a9.pinchStatus || a9.pinchIn || a9.pinchOut)
        }
        function o() {
            return !! (bS() && bw())
        }
        function by() {
            var ah = z();
            var af = bg();
            var ac = bF();
            var ae = g();
            var ad = bQ();
            var ag = !ad && ae && ac && af && ah;
            return ag
        }
        function i() {
            return !! (a9.swipe || a9.swipeStatus || a9.swipeLeft || a9.swipeRight || a9.swipeUp || a9.swipeDown)
        }
        function y() {
            return !! (by() && i())
        }
        function bF() {
            return ((h === a9.fingers || a9.fingers === U) || !ab)
        }
        function g() {
            return bD[0].end.x !== 0
        }
        function bU() {
            return !! (a9.tap)
        }
        function f() {
            return !! (a9.doubleTap)
        }
        function bz() {
            return !! (a9.longTap)
        }
        function n() {
            if (q == null) {
                return false
            }
            var ac = bb();
            return (f() && ((ac - q) <= a9.doubleTapThreshold))
        }
        function A() {
            return n()
        }
        function a0() {
            return ((h === 1 || !ab) && (isNaN(bn) || bn === 0))
        }
        function bt() {
            return ((c > a9.longTapThreshold) && (bn < K))
        }
        function bm() {
            return !! (a0() && bU())
        }
        function bN() {
            return !! (n() && f())
        }
        function be() {
            return !! (bt() && bz())
        }
        function az() {
            bV = bb();
            bp = event.touches.length + 1
        }
        function m() {
            bV = 0;
            bp = 0
        }
        function bh() {
            var ad = false;
            if (bV) {
                var ac = bb() - bV;
                if (ac <= a9.fingerReleaseThreshold) {
                    ad = true
                }
            }
            return ad
        }
        function x() {
            return !! (bC.data(C + "_intouch") === true)
        }
        function bf(ac) {
            if (ac === true) {
                bC.bind(ay, bq);
                bC.bind(j, s);
                if (l) {
                    bC.bind(l, u)
                }
            } else {
                bC.unbind(ay, bq, false);
                bC.unbind(j, s, false);
                if (l) {
                    bC.unbind(l, u, false)
                }
            }
            bC.data(C + "_intouch", ac === true)
        }
        function bl(ad, ae) {
            var ac = ae.identifier !== undefined ? ae.identifier: 0;
            bD[ad].identifier = ac;
            bD[ad].start.x = bD[ad].end.x = ae.pageX || ae.clientX;
            bD[ad].start.y = bD[ad].end.y = ae.pageY || ae.clientY;
            return bD[ad]
        }
        function bM(ae) {
            var ac = ae.identifier !== undefined ? ae.identifier: 0;
            var ad = b(ac);
            ad.end.x = ae.pageX || ae.clientX;
            ad.end.y = ae.pageY || ae.clientY;
            return ad
        }
        function b(ac) {
            for (var ad = 0; ad < bD.length; ad++) {
                if (bD[ad].identifier == ac) {
                    return bD[ad]
                }
            }
        }
        function bk() {
            var ad = [];
            for (var ac = 0; ac <= 5; ac++) {
                ad.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return ad
        }
        function bL(ad, ac) {
            ac = Math.max(ac, bA(ad));
            r[ad].distance = ac
        }
        function bA(ac) {
            return r[ac].distance
        }
        function d() {
            var ac = {};
            ac[N] = a8(N);
            ac[O] = a8(O);
            ac[Y] = a8(Y);
            ac[F] = a8(F);
            return ac
        }
        function a8(ac) {
            return {
                direction: ac,
                distance: 0
            }
        }
        function bH() {
            return br - k
        }
        function ba(af, ac) {
            var ad = Math.abs(af.x - ac.x);
            var ae = Math.abs(af.y - ac.y);
            return Math.round(Math.sqrt(ad * ad + ae * ae))
        }
        function bT(ae, ad) {
            var ac = (ad / ae) * 1;
            return ac.toFixed(2)
        }
        function bc() {
            if (ax < 1) {
                return E
            } else {
                return Z
            }
        }
        function bB(ac, ad) {
            return Math.round(Math.sqrt(Math.pow(ad.x - ac.x, 2) + Math.pow(ad.y - ac.y, 2)))
        }
        function bP(ah, ad) {
            var ae = ah.x - ad.x;
            var af = ad.y - ah.y;
            var ac = Math.atan2(af, ae);
            var ag = Math.round(ac * 180 / Math.PI);
            if (ag < 0) {
                ag = 360 - Math.abs(ag)
            }
            return ag
        }
        function bI(ad, ae) {
            var ac = bP(ad, ae);
            if ((ac <= 45) && (ac >= 0)) {
                return N
            } else {
                if ((ac <= 360) && (ac >= 315)) {
                    return N
                } else {
                    if ((ac >= 135) && (ac <= 225)) {
                        return O
                    } else {
                        if ((ac > 45) && (ac < 135)) {
                            return F
                        } else {
                            return Y
                        }
                    }
                }
            }
        }
        function bb() {
            var ac = new Date();
            return ac.getTime()
        }
        function bv(ae) {
            ae = X(ae);
            var ac = ae.offset();
            var ad = {
                left: ac.left,
                right: ac.left + ae.outerWidth(),
                top: ac.top,
                bottom: ac.top + ae.outerHeight()
            };
            return ad
        }
        function a7(ad, ac) {
            return (ad.x > ac.left && ad.x < ac.right && ad.y > ac.top && ad.y < ac.bottom)
        }
    }
})(jQuery); !
    function(b) {
        b.fn.slide = function(a) {
            return b.fn.slide.defaults = {
                type: "slide",
                effect: "fade",
                autoPlay: !1,
                delayTime: 500,
                interTime: 2500,
                triggerTime: 150,
                defaultIndex: 0,
                titCell: ".hd li",
                mainCell: ".bd",
                targetCell: null,
                trigger: "mouseover",
                scroll: 1,
                vis: 1,
                titOnClassName: "on",
                autoPage: !1,
                prevCell: ".prev",
                nextCell: ".next",
                pageStateCell: ".pageState",
                opp: !1,
                pnLoop: !0,
                easing: "swing",
                startFun: null,
                endFun: null,
                switchLoad: null,
                playStateCell: ".playState",
                mouseOverStop: !0,
                defaultPlay: !0,
                returnDefault: !1
            },
                this.each(function() {
                    var a8 = b.extend({},
                            b.fn.slide.defaults, a),
                        a7 = b(this),
                        a6 = a8.effect,
                        a5 = b(a8.prevCell, a7),
                        a4 = b(a8.nextCell, a7),
                        a3 = b(a8.pageStateCell, a7),
                        a2 = b(a8.playStateCell, a7),
                        a1 = b(a8.titCell, a7),
                        a0 = a1.size(),
                        aZ = b(a8.mainCell, a7),
                        aY = aZ.children().size(),
                        aX = a8.switchLoad,
                        aW = b(a8.targetCell, a7),
                        aV = parseInt(a8.defaultIndex),
                        aU = parseInt(a8.delayTime),
                        aT = parseInt(a8.interTime);
                    parseInt(a8.triggerTime);
                    var am, aS = parseInt(a8.scroll),
                        aR = parseInt(a8.vis),
                        aQ = "false" == a8.autoPlay || 0 == a8.autoPlay ? !1 : !0,
                        aP = "false" == a8.opp || 0 == a8.opp ? !1 : !0,
                        aO = "false" == a8.autoPage || 0 == a8.autoPage ? !1 : !0,
                        aN = "false" == a8.pnLoop || 0 == a8.pnLoop ? !1 : !0,
                        aM = "false" == a8.mouseOverStop || 0 == a8.mouseOverStop ? !1 : !0,
                        aE = "false" == a8.defaultPlay || 0 == a8.defaultPlay ? !1 : !0,
                        aC = "false" == a8.returnDefault || 0 == a8.returnDefault ? !1 : !0,
                        aB = 0,
                        aA = 0,
                        az = 0,
                        ay = 0,
                        ax = a8.easing,
                        aw = null,
                        av = null,
                        au = null,
                        at = a8.titOnClassName,
                        ar = a1.index(a7.find("." + at)),
                        aq = aV = -1 == ar ? aV: ar,
                        ap = aV,
                        ao = aV,
                        an = aY >= aR ? 0 != aY % aS ? aY % aS: aS: 0,
                        al = "leftMarquee" == a6 || "topMarquee" == a6 ? !0 : !1,
                        ak = function() {
                            b.isFunction(a8.startFun) && a8.startFun(aV, a0, a7, b(a8.titCell, a7), aZ, aW, a5, a4)
                        },
                        aj = function() {
                            b.isFunction(a8.endFun) && a8.endFun(aV, a0, a7, b(a8.titCell, a7), aZ, aW, a5, a4)
                        },
                        ai = function() {
                            a1.removeClass(at),
                            aE && a1.eq(ap).addClass(at)
                        };
                    if ("menu" == a8.type) {
                        return aE && a1.removeClass(at).eq(aV).addClass(at),
                            a1.hover(function() {
                                    am = b(this).find(a8.targetCell);
                                    var c = a1.index(b(this));
                                    av = setTimeout(function() {
                                            switch (aV = c, a1.removeClass(at).eq(aV).addClass(at), ak(), a6) {
                                                case "fade":
                                                    am.stop(!0, !0).animate({
                                                            opacity: "show"
                                                        },
                                                        aU, ax, aj);
                                                    break;
                                                case "slideDown":
                                                    am.stop(!0, !0).animate({
                                                            height: "show"
                                                        },
                                                        aU, ax, aj)
                                            }
                                        },
                                        a8.triggerTime)
                                },
                                function() {
                                    switch (clearTimeout(av), a6) {
                                        case "fade":
                                            am.animate({
                                                    opacity:
                                                        "hide"
                                                },
                                                aU, ax);
                                            break;
                                        case "slideDown":
                                            am.animate({
                                                    height:
                                                        "hide"
                                                },
                                                aU, ax)
                                    }
                                }),
                        aC && a7.hover(function() {
                                clearTimeout(au)
                            },
                            function() {
                                au = setTimeout(ai, aU)
                            }),
                            void 0
                    }
                    if (0 == a0 && (a0 = aY), al && (a0 = 2), aO) {
                        if (aY >= aR) {
                            if ("leftLoop" == a6 || "topLoop" == a6) {
                                a0 = 0 != aY % aS ? (0 ^ aY / aS) + 1 : aY / aS
                            } else {
                                var ah = aY - aR;
                                a0 = 1 + parseInt(0 != ah % aS ? ah / aS + 1 : ah / aS),
                                0 >= a0 && (a0 = 1)
                            }
                        } else {
                            a0 = 1
                        }
                        a1.html("");
                        var ag = "";
                        if (1 == a8.autoPage || "true" == a8.autoPage) {
                            for (var af = 0; a0 > af; af++) {
                                ag += "<li>" + (af + 1) + "</li>"
                            }
                        } else {
                            for (var af = 0; a0 > af; af++) {
                                ag += a8.autoPage.replace("$", af + 1)
                            }
                        }
                        a1.html(ag);
                        var a1 = a1.children()
                    }
                    if (aY >= aR) {
                        aZ.children().each(function() {
                            b(this).width() > az && (az = b(this).width(), aA = b(this).outerWidth(!0)),
                            b(this).height() > ay && (ay = b(this).height(), aB = b(this).outerHeight(!0))
                        });
                        var ae = aZ.children(),
                            ad = function() {
                                for (var c = 0; aR > c; c++) {
                                    ae.eq(c).clone().addClass("clone").appendTo(aZ)
                                }
                                for (var c = 0; an > c; c++) {
                                    ae.eq(aY - c - 1).clone().addClass("clone").prependTo(aZ)
                                }
                            };
                        switch (a6) {
                            case "fold":
                                aZ.css({
                                    position:
                                        "relative",
                                    width: aA,
                                    height: aB
                                }).children().css({
                                    position: "absolute",
                                    width: az,
                                    left: 0,
                                    top: 0,
                                    display: "none"
                                });
                                break;
                            case "top":
                                aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aR * aB + 'px"></div>').css({
                                    top: -(aV * aS) * aB,
                                    position: "relative",
                                    padding: "0",
                                    margin: "0"
                                }).children().css({
                                    height: ay
                                });
                                break;
                            case "left":
                                aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aR * aA + 'px"></div>').css({
                                    width: aY * aA,
                                    left: -(aV * aS) * aA,
                                    position: "relative",
                                    overflow: "hidden",
                                    padding: "0",
                                    margin: "0"
                                }).children().css({
                                    "float": "left",
                                    width: az
                                });
                                break;
                            case "leftLoop":
                            case "leftMarquee":
                                ad(),
                                    aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aR * aA + 'px"></div>').css({
                                        width: (aY + aR + an) * aA,
                                        position: "relative",
                                        overflow: "hidden",
                                        padding: "0",
                                        margin: "0",
                                        left: -(an + aV * aS) * aA
                                    }).children().css({
                                        "float": "left",
                                        width: az
                                    });
                                break;
                            case "topLoop":
                            case "topMarquee":
                                ad(),
                                    aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aR * aB + 'px"></div>').css({
                                        height: (aY + aR + an) * aB,
                                        position: "relative",
                                        padding: "0",
                                        margin: "0",
                                        top: -(an + aV * aS) * aB
                                    }).children().css({
                                        height: ay
                                    })
                        }
                    }
                    var aI = function(d) {
                            var c = d * aS;
                            return d == a0 ? c = aY: -1 == d && 0 != aY % aS && (c = -aY % aS),
                                c
                        },
                        ba = function(e) {
                            var m = function(g) {
                                for (var f = g; aR + g > f; f++) {
                                    e.eq(f).find("img[" + aX + "]").each(function() {
                                        var h = b(this);
                                        if (h.attr("src", h.attr(aX)).removeAttr(aX), aZ.find(".clone")[0]) {
                                            for (var o = aZ.children(), n = 0; n < o.size(); n++) {
                                                o.eq(n).find("img[" + aX + "]").each(function() {
                                                    b(this).attr(aX) == h.attr("src") && b(this).attr("src", b(this).attr(aX)).removeAttr(aX)
                                                })
                                            }
                                        }
                                    })
                                }
                            };
                            switch (a6) {
                                case "fade":
                                case "fold":
                                case "top":
                                case "left":
                                case "slideDown":
                                    m(aV * aS);
                                    break;
                                case "leftLoop":
                                case "topLoop":
                                    m(an + aI(ao));
                                    break;
                                case "leftMarquee":
                                case "topMarquee":
                                    var l = "leftMarquee" == a6 ? aZ.css("left").replace("px", "") : aZ.css("top").replace("px", ""),
                                        k = "leftMarquee" == a6 ? aA: aB,
                                        j = an;
                                    if (0 != l % k) {
                                        var i = Math.abs(0 ^ l / k);
                                        j = 1 == aV ? an + i: an + i - 1
                                    }
                                    m(j)
                            }
                        },
                        aD = function(f) {
                            if (!aE || aq != aV || f || al) {
                                if (al ? aV >= 1 ? aV = 1 : 0 >= aV && (aV = 0) : (ao = aV, aV >= a0 ? aV = 0 : 0 > aV && (aV = a0 - 1)), ak(), null != aX && ba(aZ.children()), aW[0] && (am = aW.eq(aV), null != aX && ba(aW), "slideDown" == a6 ? (aW.not(am).stop(!0, !0).slideUp(aU), am.slideDown(aU, ax,
                                        function() {
                                            aZ[0] || aj()
                                        })) : (aW.not(am).stop(!0, !0).hide(), am.animate({
                                            opacity: "show"
                                        },
                                        aU,
                                        function() {
                                            aZ[0] || aj()
                                        }))), aY >= aR) {
                                    switch (a6) {
                                        case "fade":
                                            aZ.children().stop(!0, !0).eq(aV).animate({
                                                    opacity: "show"
                                                },
                                                aU, ax,
                                                function() {
                                                    aj()
                                                }).siblings().hide();
                                            break;
                                        case "fold":
                                            aZ.children().stop(!0, !0).eq(aV).animate({
                                                    opacity: "show"
                                                },
                                                aU, ax,
                                                function() {
                                                    aj()
                                                }).siblings().animate({
                                                    opacity: "hide"
                                                },
                                                aU, ax);
                                            break;
                                        case "top":
                                            aZ.stop(!0, !1).animate({
                                                    top: -aV * aS * aB
                                                },
                                                aU, ax,
                                                function() {
                                                    aj()
                                                });
                                            break;
                                        case "left":
                                            aZ.stop(!0, !1).animate({
                                                    left: -aV * aS * aA
                                                },
                                                aU, ax,
                                                function() {
                                                    aj()
                                                });
                                            break;
                                        case "leftLoop":
                                            var e = ao;
                                            aZ.stop(!0, !0).animate({
                                                    left: -(aI(ao) + an) * aA
                                                },
                                                aU, ax,
                                                function() { - 1 >= e ? aZ.css("left", -(an + (a0 - 1) * aS) * aA) : e >= a0 && aZ.css("left", -an * aA),
                                                    aj()
                                                });
                                            break;
                                        case "topLoop":
                                            var e = ao;
                                            aZ.stop(!0, !0).animate({
                                                    top: -(aI(ao) + an) * aB
                                                },
                                                aU, ax,
                                                function() { - 1 >= e ? aZ.css("top", -(an + (a0 - 1) * aS) * aB) : e >= a0 && aZ.css("top", -an * aB),
                                                    aj()
                                                });
                                            break;
                                        case "leftMarquee":
                                            var h = aZ.css("left").replace("px", "");
                                            0 == aV ? aZ.animate({
                                                    left: ++h
                                                },
                                                0,
                                                function() {
                                                    aZ.css("left").replace("px", "") >= 0 && aZ.css("left", -aY * aA)
                                                }) : aZ.animate({
                                                    left: --h
                                                },
                                                0,
                                                function() {
                                                    aZ.css("left").replace("px", "") <= -(aY + an) * aA && aZ.css("left", -an * aA)
                                                });
                                            break;
                                        case "topMarquee":
                                            var g = aZ.css("top").replace("px", "");
                                            0 == aV ? aZ.animate({
                                                    top: ++g
                                                },
                                                0,
                                                function() {
                                                    aZ.css("top").replace("px", "") >= 0 && aZ.css("top", -aY * aB)
                                                }) : aZ.animate({
                                                    top: --g
                                                },
                                                0,
                                                function() {
                                                    aZ.css("top").replace("px", "") <= -(aY + an) * aB && aZ.css("top", -an * aB)
                                                })
                                    }
                                }
                                a1.removeClass(at).eq(aV).addClass(at),
                                    aq = aV,
                                aN || (a4.removeClass("nextStop"), a5.removeClass("prevStop"), 0 == aV && a5.addClass("prevStop"), aV == a0 - 1 && a4.addClass("nextStop")),
                                    a3.html("<span>" + (aV + 1) + "</span>/" + a0)
                            }
                        };
                    aE && aD(!0),
                    aC && a7.hover(function() {
                            clearTimeout(au)
                        },
                        function() {
                            au = setTimeout(function() {
                                    aV = ap,
                                        aE ? aD() : "slideDown" == a6 ? am.slideUp(aU, ai) : am.animate({
                                                opacity: "hide"
                                            },
                                            aU, ai),
                                        aq = aV
                                },
                                300)
                        });
                    var a9 = function(c) {
                            aw = setInterval(function() {
                                    aP ? aV--:aV++,
                                        aD()
                                },
                                c ? c: aT)
                        },
                        aJ = function(c) {
                            aw = setInterval(aD, c ? c: aT)
                        },
                        aF = function() {
                            aM || (clearInterval(aw), a9())
                        },
                        s = function() { (aN || aV != a0 - 1) && (aV++, aD(), al || aF())
                        },
                        aK = function() { (aN || 0 != aV) && (aV--, aD(), al || aF())
                        },
                        aG = function() {
                            clearInterval(aw),
                                al ? aJ() : a9(),
                                a2.removeClass("pauseState")
                        },
                        aa = function() {
                            clearInterval(aw),
                                a2.addClass("pauseState")
                        };
                    if (aQ ? al ? (aP ? aV--:aV++, aJ(), aM && aZ.hover(aa, aG)) : (a9(), aM && a7.hover(aa, aG)) : (al && (aP ? aV--:aV++), a2.addClass("pauseState")), a2.click(function() {
                            a2.hasClass("pauseState") ? aG() : aa()
                        }), "mouseover" == a8.trigger ? a1.hover(function() {
                                var c = a1.index(this);
                                av = setTimeout(function() {
                                        aV = c,
                                            aD(),
                                            aF()
                                    },
                                    a8.triggerTime)
                            },
                            function() {
                                clearTimeout(av)
                            }) : a1.click(function() {
                            aV = a1.index(this),
                                aD(),
                                aF()
                        }), al) {
                        if (a4.mousedown(s), a5.mousedown(aK), aN) {
                            var aL, aH = function() {
                                    aL = setTimeout(function() {
                                            clearInterval(aw),
                                                aJ(0 ^ aT / 10)
                                        },
                                        150)
                                },
                                ac = function() {
                                    clearTimeout(aL),
                                        clearInterval(aw),
                                        aJ()
                                };
                            a4.mousedown(aH),
                                a4.mouseup(ac),
                                a5.mousedown(aH),
                                a5.mouseup(ac)
                        }
                        "mouseover" == a8.trigger && (a4.hover(s,
                            function() {}), a5.hover(aK,
                            function() {}))
                    } else {
                        a4.click(s),
                            a5.click(aK)
                    }
                })
        }
    } (jQuery),
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(g, f, j, i, h) {
            return jQuery.easing[jQuery.easing.def](g, f, j, i, h)
        },
        easeInQuad: function(g, f, j, i, h) {
            return i * (f /= h) * f + j
        },
        easeOutQuad: function(g, f, j, i, h) {
            return - i * (f /= h) * (f - 2) + j
        },
        easeInOutQuad: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f + j: -i / 2 * (--f * (f - 2) - 1) + j
        },
        easeInCubic: function(g, f, j, i, h) {
            return i * (f /= h) * f * f + j
        },
        easeOutCubic: function(g, f, j, i, h) {
            return i * ((f = f / h - 1) * f * f + 1) + j
        },
        easeInOutCubic: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f + j: i / 2 * ((f -= 2) * f * f + 2) + j
        },
        easeInQuart: function(g, f, j, i, h) {
            return i * (f /= h) * f * f * f + j
        },
        easeOutQuart: function(g, f, j, i, h) {
            return - i * ((f = f / h - 1) * f * f * f - 1) + j
        },
        easeInOutQuart: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f * f + j: -i / 2 * ((f -= 2) * f * f * f - 2) + j
        },
        easeInQuint: function(g, f, j, i, h) {
            return i * (f /= h) * f * f * f * f + j
        },
        easeOutQuint: function(g, f, j, i, h) {
            return i * ((f = f / h - 1) * f * f * f * f + 1) + j
        },
        easeInOutQuint: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f * f * f + j: i / 2 * ((f -= 2) * f * f * f * f + 2) + j
        },
        easeInSine: function(g, f, j, i, h) {
            return - i * Math.cos(f / h * (Math.PI / 2)) + i + j
        },
        easeOutSine: function(g, f, j, i, h) {
            return i * Math.sin(f / h * (Math.PI / 2)) + j
        },
        easeInOutSine: function(g, f, j, i, h) {
            return - i / 2 * (Math.cos(Math.PI * f / h) - 1) + j
        },
        easeInExpo: function(g, f, j, i, h) {
            return 0 == f ? j: i * Math.pow(2, 10 * (f / h - 1)) + j
        },
        easeOutExpo: function(g, f, j, i, h) {
            return f == h ? j + i: i * ( - Math.pow(2, -10 * f / h) + 1) + j
        },
        easeInOutExpo: function(g, f, j, i, h) {
            return 0 == f ? j: f == h ? j + i: (f /= h / 2) < 1 ? i / 2 * Math.pow(2, 10 * (f - 1)) + j: i / 2 * ( - Math.pow(2, -10 * --f) + 2) + j
        },
        easeInCirc: function(g, f, j, i, h) {
            return - i * (Math.sqrt(1 - (f /= h) * f) - 1) + j
        },
        easeOutCirc: function(g, f, j, i, h) {
            return i * Math.sqrt(1 - (f = f / h - 1) * f) + j
        },
        easeInOutCirc: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? -i / 2 * (Math.sqrt(1 - f * f) - 1) + j: i / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + j
        },
        easeInElastic: function(j, i, p, o, n) {
            var m = 1.70158,
                l = 0,
                k = o;
            if (0 == i) {
                return p
            }
            if (1 == (i /= n)) {
                return p + o
            }
            if (l || (l = 0.3 * n), k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return - (k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l)) + p
        },
        easeOutElastic: function(j, i, p, o, n) {
            var m = 1.70158,
                l = 0,
                k = o;
            if (0 == i) {
                return p
            }
            if (1 == (i /= n)) {
                return p + o
            }
            if (l || (l = 0.3 * n), k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return k * Math.pow(2, -10 * i) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
        },
        easeInOutElastic: function(j, i, p, o, n) {
            var m = 1.70158,
                l = 0,
                k = o;
            if (0 == i) {
                return p
            }
            if (2 == (i /= n / 2)) {
                return p + o
            }
            if (l || (l = n * 0.3 * 1.5), k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return 1 > i ? -0.5 * k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + p: 0.5 * k * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
        },
        easeInBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158),
            k * (g /= j) * g * ((i + 1) * g - i) + l
        },
        easeOutBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158),
            k * ((g = g / j - 1) * g * ((i + 1) * g + i) + 1) + l
        },
        easeInOutBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158),
                (g /= j / 2) < 1 ? k / 2 * g * g * (((i *= 1.525) + 1) * g - i) + l: k / 2 * ((g -= 2) * g * (((i *= 1.525) + 1) * g + i) + 2) + l
        },
        easeInBounce: function(g, f, j, i, h) {
            return i - jQuery.easing.easeOutBounce(g, h - f, 0, i, h) + j
        },
        easeOutBounce: function(g, f, j, i, h) {
            return (f /= h) < 1 / 2.75 ? i * 7.5625 * f * f + j: 2 / 2.75 > f ? i * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + j: 2.5 / 2.75 > f ? i * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + j: i * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + j
        },
        easeInOutBounce: function(g, f, j, i, h) {
            return h / 2 > f ? 0.5 * jQuery.easing.easeInBounce(g, 2 * f, 0, i, h) + j: 0.5 * jQuery.easing.easeOutBounce(g, 2 * f - h, 0, i, h) + 0.5 * i + j
        }
    });
var Swiper = function(a3, a2) {
    function a1(d, c) {
        return document.querySelectorAll ? (c || document).querySelectorAll(d) : jQuery(d, c)
    }
    function a0(b) {
        return "[object Array]" === Object.prototype.toString.apply(b) ? !0 : !1
    }
    function aZ() {
        var b = av - ar;
        return a2.freeMode && (b = av - ar),
        a2.slidesPerView > ay.slides.length && !a2.centeredSlides && (b = 0),
        0 > b && (b = 0),
            b
    }
    function aY() {
        function b(f) {
            var l, k, h = function() {
                "undefined" != typeof ay && null !== ay && (void 0 !== ay.imagesLoaded && ay.imagesLoaded++, ay.imagesLoaded === ay.imagesToLoad.length && (ay.reInit(), a2.onImagesReady && ay.fireCallback(a2.onImagesReady, ay)))
            };
            f.complete ? h() : (k = f.currentSrc || f.getAttribute("src"), k ? (l = new Image, l.onload = h, l.onerror = h, l.src = k) : h())
        }
        var j = ay.h.addEventListener,
            i = "wrapper" === a2.eventTarget ? ay.wrapper: ay.container;
        if (ay.browser.ie10 || ay.browser.ie11 ? (j(i, ay.touchEvents.touchStart, aO), j(document, ay.touchEvents.touchMove, aN), j(document, ay.touchEvents.touchEnd, aM)) : (ay.support.touch && (j(i, "touchstart", aO), j(i, "touchmove", aN), j(i, "touchend", aM)), a2.simulateTouch && (j(i, "mousedown", aO), j(document, "mousemove", aN), j(document, "mouseup", aM))), a2.autoResize && j(window, "resize", ay.resizeFix), aX(), ay._wheelEvent = !1, a2.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (ay._wheelEvent = "mousewheel"), !ay._wheelEvent) {
                try {
                    new WheelEvent("wheel"),
                        ay._wheelEvent = "wheel"
                } catch(g) {}
            }
            ay._wheelEvent || (ay._wheelEvent = "DOMMouseScroll"),
            ay._wheelEvent && j(ay.container, ay._wheelEvent, aU)
        }
        if (a2.keyboardControl && j(document, "keydown", aV), a2.updateOnImagesReady) {
            ay.imagesToLoad = a1("img", ay.container);
            for (var c = 0; c < ay.imagesToLoad.length; c++) {
                b(ay.imagesToLoad[c])
            }
        }
    }
    function aX() {
        var b, h = ay.h.addEventListener;
        if (a2.preventLinks) {
            var g = a1("a", ay.container);
            for (b = 0; b < g.length; b++) {
                h(g[b], "click", aQ)
            }
        }
        if (a2.releaseFormElements) {
            var c = a1("input, textarea, select", ay.container);
            for (b = 0; b < c.length; b++) {
                h(c[b], ay.touchEvents.touchStart, aP, !0),
                ay.support.touch && a2.simulateTouch && h(c[b], "mousedown", aP, !0)
            }
        }
        if (a2.onSlideClick) {
            for (b = 0; b < ay.slides.length; b++) {
                h(ay.slides[b], "click", aT)
            }
        }
        if (a2.onSlideTouch) {
            for (b = 0; b < ay.slides.length; b++) {
                h(ay.slides[b], ay.touchEvents.touchStart, aS)
            }
        }
    }
    function aW() {
        var b, h = ay.h.removeEventListener;
        if (a2.onSlideClick) {
            for (b = 0; b < ay.slides.length; b++) {
                h(ay.slides[b], "click", aT)
            }
        }
        if (a2.onSlideTouch) {
            for (b = 0; b < ay.slides.length; b++) {
                h(ay.slides[b], ay.touchEvents.touchStart, aS)
            }
        }
        if (a2.releaseFormElements) {
            var g = a1("input, textarea, select", ay.container);
            for (b = 0; b < g.length; b++) {
                h(g[b], ay.touchEvents.touchStart, aP, !0),
                ay.support.touch && a2.simulateTouch && h(g[b], "mousedown", aP, !0)
            }
        }
        if (a2.preventLinks) {
            var c = a1("a", ay.container);
            for (b = 0; b < c.length; b++) {
                h(c[b], "click", aQ)
            }
        }
    }
    function aV(v) {
        var u = v.keyCode || v.charCode;
        if (! (v.shiftKey || v.altKey || v.ctrlKey || v.metaKey)) {
            if (37 === u || 39 === u || 38 === u || 40 === u) {
                for (var t = !1,
                         s = ay.h.getOffset(ay.container), r = ay.h.windowScroll().left, q = ay.h.windowScroll().top, p = ay.h.windowWidth(), o = ay.h.windowHeight(), n = [[s.left, s.top], [s.left + ay.width, s.top], [s.left, s.top + ay.height], [s.left + ay.width, s.top + ay.height]], m = 0; m < n.length; m++) {
                    var l = n[m];
                    l[0] >= r && l[0] <= r + p && l[1] >= q && l[1] <= q + o && (t = !0)
                }
                if (!t) {
                    return
                }
            }
            an ? ((37 === u || 39 === u) && (v.preventDefault ? v.preventDefault() : v.returnValue = !1), 39 === u && ay.swipeNext(), 37 === u && ay.swipePrev()) : ((38 === u || 40 === u) && (v.preventDefault ? v.preventDefault() : v.returnValue = !1), 40 === u && ay.swipeNext(), 38 === u && ay.swipePrev())
        }
    }
    function aU(b) {
        var h = ay._wheelEvent,
            g = 0;
        if (b.detail) {
            g = -b.detail
        } else {
            if ("mousewheel" === h) {
                if (a2.mousewheelControlForceToAxis) {
                    if (an) {
                        if (! (Math.abs(b.wheelDeltaX) > Math.abs(b.wheelDeltaY))) {
                            return
                        }
                        g = b.wheelDeltaX
                    } else {
                        if (! (Math.abs(b.wheelDeltaY) > Math.abs(b.wheelDeltaX))) {
                            return
                        }
                        g = b.wheelDeltaY
                    }
                } else {
                    g = b.wheelDelta
                }
            } else {
                if ("DOMMouseScroll" === h) {
                    g = -b.detail
                } else {
                    if ("wheel" === h) {
                        if (a2.mousewheelControlForceToAxis) {
                            if (an) {
                                if (! (Math.abs(b.deltaX) > Math.abs(b.deltaY))) {
                                    return
                                }
                                g = -b.deltaX
                            } else {
                                if (! (Math.abs(b.deltaY) > Math.abs(b.deltaX))) {
                                    return
                                }
                                g = -b.deltaY
                            }
                        } else {
                            g = Math.abs(b.deltaX) > Math.abs(b.deltaY) ? -b.deltaX: -b.deltaY
                        }
                    }
                }
            }
        }
        if (a2.freeMode) {
            var e = ay.getWrapperTranslate() + g;
            if (e > 0 && (e = 0), e < -aZ() && (e = -aZ()), ay.setWrapperTransition(0), ay.setWrapperTranslate(e), ay.updateActiveSlide(e), 0 === e || e === -aZ()) {
                return
            }
        } else { (new Date).getTime() - af > 60 && (0 > g ? ay.swipeNext() : ay.swipePrev()),
            af = (new Date).getTime()
        }
        return a2.autoplay && ay.stopAutoplay(!0),
            b.preventDefault ? b.preventDefault() : b.returnValue = !1,
            !1
    }
    function aT(b) {
        ay.allowSlideClick && (aR(b), ay.fireCallback(a2.onSlideClick, ay, b))
    }
    function aS(b) {
        aR(b),
            ay.fireCallback(a2.onSlideTouch, ay, b)
    }
    function aR(b) {
        if (b.currentTarget) {
            ay.clickedSlide = b.currentTarget
        } else {
            var d = b.srcElement;
            do {
                if (d.className.indexOf(a2.slideClass) > -1) {
                    break
                }
                d = d.parentNode
            } while ( d );
            ay.clickedSlide = d
        }
        ay.clickedSlideIndex = ay.slides.indexOf(ay.clickedSlide),
            ay.clickedSlideLoopIndex = ay.clickedSlideIndex - (ay.loopedSlides || 0)
    }
    function aQ(b) {
        return ay.allowLinks ? void 0 : (b.preventDefault ? b.preventDefault() : b.returnValue = !1, a2.preventLinksPropagation && "stopPropagation" in b && b.stopPropagation(), !1)
    }
    function aP(b) {
        return b.stopPropagation ? b.stopPropagation() : b.returnValue = !1,
            !1
    }
    function aO(b) {
        if (a2.preventLinks && (ay.allowLinks = !0), ay.isTouched || a2.onlyExternal) {
            return ! 1
        }
        var j = b.target || b.srcElement;
        document.activeElement && document.activeElement !== document.body && document.activeElement !== j && document.activeElement.blur();
        var i = "input select textarea".split(" ");
        if (a2.noSwiping && j && aK(j)) {
            return ! 1
        }
        if (a5 = !1, ay.isTouched = !0, aD = "touchstart" === b.type, !aD && "which" in b && 3 === b.which) {
            return ay.isTouched = !1,
                !1
        }
        if (!aD || 1 === b.targetTouches.length) {
            ay.callPlugins("onTouchStartBegin"),
            !aD && !ay.isAndroid && i.indexOf(j.tagName.toLowerCase()) < 0 && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
            var h = aD ? b.targetTouches[0].pageX: b.pageX || b.clientX,
                g = aD ? b.targetTouches[0].pageY: b.pageY || b.clientY;
            ay.touches.startX = ay.touches.currentX = h,
                ay.touches.startY = ay.touches.currentY = g,
                ay.touches.start = ay.touches.current = an ? h: g,
                ay.setWrapperTransition(0),
                ay.positions.start = ay.positions.current = ay.getWrapperTranslate(),
                ay.setWrapperTranslate(ay.positions.start),
                ay.times.start = (new Date).getTime(),
                at = void 0,
            a2.moveStartThreshold > 0 && (ad = !1),
            a2.onTouchStart && ay.fireCallback(a2.onTouchStart, ay, b),
                ay.callPlugins("onTouchStartEnd")
        }
    }
    function aN(b) {
        if (ay.isTouched && !a2.onlyExternal && (!aD || "mousemove" !== b.type)) {
            var n = aD ? b.targetTouches[0].pageX: b.pageX || b.clientX,
                m = aD ? b.targetTouches[0].pageY: b.pageY || b.clientY;
            if ("undefined" == typeof at && an && (at = !!(at || Math.abs(m - ay.touches.startY) > Math.abs(n - ay.touches.startX))), "undefined" != typeof at || an || (at = !!(at || Math.abs(m - ay.touches.startY) < Math.abs(n - ay.touches.startX))), at) {
                return void(ay.isTouched = !1)
            }
            if (an) {
                if (!a2.swipeToNext && n < ay.touches.startX || !a2.swipeToPrev && n > ay.touches.startX) {
                    return
                }
            } else {
                if (!a2.swipeToNext && m < ay.touches.startY || !a2.swipeToPrev && m > ay.touches.startY) {
                    return
                }
            }
            if (b.assignedToSwiper) {
                return void(ay.isTouched = !1)
            }
            if (b.assignedToSwiper = !0, a2.preventLinks && (ay.allowLinks = !1), a2.onSlideClick && (ay.allowSlideClick = !1), a2.autoplay && ay.stopAutoplay(!0), !aD || 1 === b.touches.length) {
                if (ay.isMoved || (ay.callPlugins("onTouchMoveStart"), a2.loop && (ay.fixLoop(), ay.positions.start = ay.getWrapperTranslate()), a2.onTouchMoveStart && ay.fireCallback(a2.onTouchMoveStart, ay)), ay.isMoved = !0, b.preventDefault ? b.preventDefault() : b.returnValue = !1, ay.touches.current = an ? n: m, ay.positions.current = (ay.touches.current - ay.touches.start) * a2.touchRatio + ay.positions.start, ay.positions.current > 0 && a2.onResistanceBefore && ay.fireCallback(a2.onResistanceBefore, ay, ay.positions.current), ay.positions.current < -aZ() && a2.onResistanceAfter && ay.fireCallback(a2.onResistanceAfter, ay, Math.abs(ay.positions.current + aZ())), a2.resistance && "100%" !== a2.resistance) {
                    var l;
                    if (ay.positions.current > 0 && (l = 1 - ay.positions.current / ar / 2, ay.positions.current = 0.5 > l ? ar / 2 : ay.positions.current * l), ay.positions.current < -aZ()) {
                        var k = (ay.touches.current - ay.touches.start) * a2.touchRatio + (aZ() + ay.positions.start);
                        l = (ar + k) / ar;
                        var j = ay.positions.current - k * (1 - l) / 2,
                            e = -aZ() - ar / 2;
                        ay.positions.current = e > j || 0 >= l ? e: j
                    }
                }
                if (a2.resistance && "100%" === a2.resistance && (ay.positions.current > 0 && (!a2.freeMode || a2.freeModeFluid) && (ay.positions.current = 0), ay.positions.current < -aZ() && (!a2.freeMode || a2.freeModeFluid) && (ay.positions.current = -aZ())), !a2.followFinger) {
                    return
                }
                if (a2.moveStartThreshold) {
                    if (Math.abs(ay.touches.current - ay.touches.start) > a2.moveStartThreshold || ad) {
                        if (!ad) {
                            return ad = !0,
                                void(ay.touches.start = ay.touches.current)
                        }
                        ay.setWrapperTranslate(ay.positions.current)
                    } else {
                        ay.positions.current = ay.positions.start
                    }
                } else {
                    ay.setWrapperTranslate(ay.positions.current)
                }
                return (a2.freeMode || a2.watchActiveIndex) && ay.updateActiveSlide(ay.positions.current),
                a2.grabCursor && (ay.container.style.cursor = "move", ay.container.style.cursor = "grabbing", ay.container.style.cursor = "-moz-grabbin", ay.container.style.cursor = "-webkit-grabbing"),
                ac || (ac = ay.touches.current),
                aa || (aa = (new Date).getTime()),
                    ay.velocity = (ay.touches.current - ac) / ((new Date).getTime() - aa) / 2,
                Math.abs(ay.touches.current - ac) < 2 && (ay.velocity = 0),
                    ac = ay.touches.current,
                    aa = (new Date).getTime(),
                    ay.callPlugins("onTouchMoveEnd"),
                a2.onTouchMove && ay.fireCallback(a2.onTouchMove, ay, b),
                    !1
            }
        }
    }
    function aM(F) {
        if (at && ay.swipeReset(), !a2.onlyExternal && ay.isTouched) {
            ay.isTouched = !1,
            a2.grabCursor && (ay.container.style.cursor = "move", ay.container.style.cursor = "grab", ay.container.style.cursor = "-moz-grab", ay.container.style.cursor = "-webkit-grab"),
            ay.positions.current || 0 === ay.positions.current || (ay.positions.current = ay.positions.start),
            a2.followFinger && ay.setWrapperTranslate(ay.positions.current),
                ay.times.end = (new Date).getTime(),
                ay.touches.diff = ay.touches.current - ay.touches.start,
                ay.touches.abs = Math.abs(ay.touches.diff),
                ay.positions.diff = ay.positions.current - ay.positions.start,
                ay.positions.abs = Math.abs(ay.positions.diff);
            var E = ay.positions.diff,
                D = ay.positions.abs,
                C = ay.times.end - ay.times.start;
            5 > D && 300 > C && ay.allowLinks === !1 && (a2.freeMode || 0 === D || ay.swipeReset(), a2.preventLinks && (ay.allowLinks = !0), a2.onSlideClick && (ay.allowSlideClick = !0)),
                setTimeout(function() {
                        "undefined" != typeof ay && null !== ay && (a2.preventLinks && (ay.allowLinks = !0), a2.onSlideClick && (ay.allowSlideClick = !0))
                    },
                    100);
            var B = aZ();
            if (!ay.isMoved && a2.freeMode) {
                return ay.isMoved = !1,
                a2.onTouchEnd && ay.fireCallback(a2.onTouchEnd, ay, F),
                    void ay.callPlugins("onTouchEnd")
            }
            if (!ay.isMoved || ay.positions.current > 0 || ay.positions.current < -B) {
                return ay.swipeReset(),
                a2.onTouchEnd && ay.fireCallback(a2.onTouchEnd, ay, F),
                    void ay.callPlugins("onTouchEnd")
            }
            if (ay.isMoved = !1, a2.freeMode) {
                if (a2.freeModeFluid) {
                    var A, z = 1000 * a2.momentumRatio,
                        y = ay.velocity * z,
                        x = ay.positions.current + y,
                        w = !1,
                        v = 20 * Math.abs(ay.velocity) * a2.momentumBounceRatio; - B > x && (a2.momentumBounce && ay.support.transitions ? ( - v > x + B && (x = -B - v), A = -B, w = !0, a5 = !0) : x = -B),
                    x > 0 && (a2.momentumBounce && ay.support.transitions ? (x > v && (x = v), A = 0, w = !0, a5 = !0) : x = 0),
                    0 !== ay.velocity && (z = Math.abs((x - ay.positions.current) / ay.velocity)),
                        ay.setWrapperTranslate(x),
                        ay.setWrapperTransition(z),
                    a2.momentumBounce && w && ay.wrapperTransitionEnd(function() {
                        a5 && (a2.onMomentumBounce && ay.fireCallback(a2.onMomentumBounce, ay), ay.callPlugins("onMomentumBounce"), ay.setWrapperTranslate(A), ay.setWrapperTransition(300))
                    }),
                        ay.updateActiveSlide(x)
                }
                return (!a2.freeModeFluid || C >= 300) && ay.updateActiveSlide(ay.positions.current),
                a2.onTouchEnd && ay.fireCallback(a2.onTouchEnd, ay, F),
                    void ay.callPlugins("onTouchEnd")
            }
            au = 0 > E ? "toNext": "toPrev",
            "toNext" === au && 300 >= C && (30 > D || !a2.shortSwipes ? ay.swipeReset() : ay.swipeNext(!0, !0)),
            "toPrev" === au && 300 >= C && (30 > D || !a2.shortSwipes ? ay.swipeReset() : ay.swipePrev(!0, !0));
            var u = 0;
            if ("auto" === a2.slidesPerView) {
                for (var t, s = Math.abs(ay.getWrapperTranslate()), e = 0, b = 0; b < ay.slides.length; b++) {
                    if (t = an ? ay.slides[b].getWidth(!0, a2.roundLengths) : ay.slides[b].getHeight(!0, a2.roundLengths), e += t, e > s) {
                        u = t;
                        break
                    }
                }
                u > ar && (u = ar)
            } else {
                u = aw * a2.slidesPerView
            }
            "toNext" === au && C > 300 && (D >= u * a2.longSwipesRatio ? ay.swipeNext(!0, !0) : ay.swipeReset()),
            "toPrev" === au && C > 300 && (D >= u * a2.longSwipesRatio ? ay.swipePrev(!0, !0) : ay.swipeReset()),
            a2.onTouchEnd && ay.fireCallback(a2.onTouchEnd, ay, F),
                ay.callPlugins("onTouchEnd")
        }
    }
    function aL(d, c) {
        return d && d.getAttribute("class") && d.getAttribute("class").indexOf(c) > -1
    }
    function aK(b) {
        var d = !1;
        do {
            aL(b, a2.noSwipingClass) && (d = !0), b = b.parentElement
        } while (! d && b . parentElement && ! aL ( b , a2 . wrapperClass ));
        return ! d && aL(b, a2.wrapperClass) && aL(b, a2.noSwipingClass) && (d = !0),
            d
    }
    function aJ(f, e) {
        var h, g = document.createElement("div");
        return g.innerHTML = e,
            h = g.firstChild,
            h.className += " " + f,
            h.outerHTML
    }
    function aI(t, s, r) {
        function q() {
            var c = +new Date,
                a = c - o;
            n += m * a / (1000 / 60),
                b = "toNext" === l ? n > t: t > n,
                b ? (ay.setWrapperTranslate(Math.ceil(n)), ay._DOMAnimating = !0, window.setTimeout(function() {
                        q()
                    },
                    1000 / 60)) : (a2.onSlideChangeEnd && ("to" === s ? r.runCallbacks === !0 && ay.fireCallback(a2.onSlideChangeEnd, ay, l) : ay.fireCallback(a2.onSlideChangeEnd, ay, l)), ay.setWrapperTranslate(t), ay._DOMAnimating = !1)
        }
        var p = "to" === s && r.speed >= 0 ? r.speed: a2.speed,
            o = +new Date;
        if (ay.support.transitions || !a2.DOMAnimation) {
            ay.setWrapperTranslate(t),
                ay.setWrapperTransition(p)
        } else {
            var n = ay.getWrapperTranslate(),
                m = Math.ceil((t - n) / p * (1000 / 60)),
                l = n > t ? "toNext": "toPrev",
                b = "toNext" === l ? n > t: t > n;
            if (ay._DOMAnimating) {
                return
            }
            q()
        }
        ay.updateActiveSlide(t),
        a2.onSlideNext && "next" === s && r.runCallbacks === !0 && ay.fireCallback(a2.onSlideNext, ay, t),
        a2.onSlidePrev && "prev" === s && r.runCallbacks === !0 && ay.fireCallback(a2.onSlidePrev, ay, t),
        a2.onSlideReset && "reset" === s && r.runCallbacks === !0 && ay.fireCallback(a2.onSlideReset, ay, t),
        "next" !== s && "prev" !== s && "to" !== s || r.runCallbacks !== !0 || aH(s)
    }
    function aH(b) {
        if (ay.callPlugins("onSlideChangeStart"), a2.onSlideChangeStart) {
            if (a2.queueStartCallbacks && ay.support.transitions) {
                if (ay._queueStartCallbacks) {
                    return
                }
                ay._queueStartCallbacks = !0,
                    ay.fireCallback(a2.onSlideChangeStart, ay, b),
                    ay.wrapperTransitionEnd(function() {
                        ay._queueStartCallbacks = !1
                    })
            } else {
                ay.fireCallback(a2.onSlideChangeStart, ay, b)
            }
        }
        if (a2.onSlideChangeEnd) {
            if (ay.support.transitions) {
                if (a2.queueEndCallbacks) {
                    if (ay._queueEndCallbacks) {
                        return
                    }
                    ay._queueEndCallbacks = !0,
                        ay.wrapperTransitionEnd(function(a) {
                            ay.fireCallback(a2.onSlideChangeEnd, a, b)
                        })
                } else {
                    ay.wrapperTransitionEnd(function(a) {
                        ay.fireCallback(a2.onSlideChangeEnd, a, b)
                    })
                }
            } else {
                a2.DOMAnimation || setTimeout(function() {
                        ay.fireCallback(a2.onSlideChangeEnd, ay, b)
                    },
                    10)
            }
        }
    }
    function aG() {
        var d = ay.paginationButtons;
        if (d) {
            for (var c = 0; c < d.length; c++) {
                ay.h.removeEventListener(d[c], "click", aE)
            }
        }
    }
    function aF() {
        var d = ay.paginationButtons;
        if (d) {
            for (var c = 0; c < d.length; c++) {
                ay.h.addEventListener(d[c], "click", aE)
            }
        }
    }
    function aE(b) {
        for (var j, i = b.target || b.srcElement,
                 h = ay.paginationButtons,
                 g = 0; g < h.length; g++) {
            i === h[g] && (j = g)
        }
        a2.autoplay && ay.stopAutoplay(!0),
            ay.swipeTo(j)
    }
    function aC() {
        aB = setTimeout(function() {
                a2.loop ? (ay.fixLoop(), ay.swipeNext(!0, !0)) : ay.swipeNext(!0, !0) || (a2.autoplayStopOnLast ? (clearTimeout(aB), aB = void 0) : ay.swipeTo(0)),
                    ay.wrapperTransitionEnd(function() {
                        "undefined" != typeof aB && aC()
                    })
            },
            a2.autoplay)
    }
    function aA() {
        ay.calcSlides(),
        a2.loader.slides.length > 0 && 0 === ay.slides.length && ay.loadSlides(),
        a2.loop && ay.createLoop(),
            ay.init(),
            aY(),
        a2.pagination && ay.createPagination(!0),
            a2.loop || a2.initialSlide > 0 ? ay.swipeTo(a2.initialSlide, 0, !1) : ay.updateActiveSlide(0),
        a2.autoplay && ay.startAutoplay(),
            ay.centerIndex = ay.activeIndex,
        a2.onSwiperCreated && ay.fireCallback(a2.onSwiperCreated, ay),
            ay.callPlugins("onSwiperCreated")
    }
    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var az = HTMLElement.prototype;
        az.__defineGetter__ && az.__defineGetter__("outerHTML",
            function() {
                return (new XMLSerializer).serializeToString(this)
            })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function(b) {
            return this.el = b,
                this.getPropertyValue = function(a) {
                    var d = /(\-([a-z]){1})/g;
                    return "float" === a && (a = "styleFloat"),
                    d.test(a) && (a = a.replace(d,
                        function() {
                            return arguments[2].toUpperCase()
                        })),
                        b.currentStyle[a] ? b.currentStyle[a] : null
                },
                this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(f, e) {
            for (var h = e || 0,
                     g = this.length; g > h; h++) {
                if (this[h] === f) {
                    return h
                }
            }
            return - 1
        }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a3 && (a3.nodeType || 0 !== a1(a3).length)) {
        var ay = this;
        ay.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        },
            ay.positions = {
                start: 0,
                abs: 0,
                diff: 0,
                current: 0
            },
            ay.times = {
                start: 0,
                end: 0
            },
            ay.id = (new Date).getTime(),
            ay.container = a3.nodeType ? a3: a1(a3)[0],
            ay.isTouched = !1,
            ay.isMoved = !1,
            ay.activeIndex = 0,
            ay.centerIndex = 0,
            ay.activeLoaderIndex = 0,
            ay.activeLoopIndex = 0,
            ay.previousIndex = null,
            ay.velocity = 0,
            ay.snapGrid = [],
            ay.slidesGrid = [],
            ay.imagesToLoad = [],
            ay.imagesLoaded = 0,
            ay.wrapperLeft = 0,
            ay.wrapperRight = 0,
            ay.wrapperTop = 0,
            ay.wrapperBottom = 0,
            ay.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var ax, aw, av, au, at, ar, aq = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: 0.5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        a2 = a2 || {};
        for (var ap in aq) {
            if (ap in a2 && "object" == typeof a2[ap]) {
                for (var ao in aq[ap]) {
                    ao in a2[ap] || (a2[ap][ao] = aq[ap][ao])
                }
            } else {
                ap in a2 || (a2[ap] = aq[ap])
            }
        }
        ay.params = a2,
        a2.scrollContainer && (a2.freeMode = !0, a2.freeModeFluid = !0),
        a2.loop && (a2.resistance = "100%");
        var an = "horizontal" === a2.mode,
            am = ["mousedown", "mousemove", "mouseup"];
        ay.browser.ie10 && (am = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
        ay.browser.ie11 && (am = ["pointerdown", "pointermove", "pointerup"]),
            ay.touchEvents = {
                touchStart: ay.support.touch || !a2.simulateTouch ? "touchstart": am[0],
                touchMove: ay.support.touch || !a2.simulateTouch ? "touchmove": am[1],
                touchEnd: ay.support.touch || !a2.simulateTouch ? "touchend": am[2]
            };
        for (var al = ay.container.childNodes.length - 1; al >= 0; al--) {
            if (ay.container.childNodes[al].className) {
                for (var ak = ay.container.childNodes[al].className.split(/\s+/), aj = 0; aj < ak.length; aj++) {
                    ak[aj] === a2.wrapperClass && (ax = ay.container.childNodes[al])
                }
            }
        }
        ay.wrapper = ax,
            ay._extendSwiperSlide = function(b) {
                return b.append = function() {
                    return a2.loop ? b.insertAfter(ay.slides.length - ay.loopedSlides) : (ay.wrapper.appendChild(b), ay.reInit()),
                        b
                },
                    b.prepend = function() {
                        return a2.loop ? (ay.wrapper.insertBefore(b, ay.slides[ay.loopedSlides]), ay.removeLoopedSlides(), ay.calcSlides(), ay.createLoop()) : ay.wrapper.insertBefore(b, ay.wrapper.firstChild),
                            ay.reInit(),
                            b
                    },
                    b.insertAfter = function(e) {
                        if ("undefined" == typeof e) {
                            return ! 1
                        }
                        var a;
                        return a2.loop ? (a = ay.slides[e + 1 + ay.loopedSlides], a ? ay.wrapper.insertBefore(b, a) : ay.wrapper.appendChild(b), ay.removeLoopedSlides(), ay.calcSlides(), ay.createLoop()) : (a = ay.slides[e + 1], ay.wrapper.insertBefore(b, a)),
                            ay.reInit(),
                            b
                    },
                    b.clone = function() {
                        return ay._extendSwiperSlide(b.cloneNode(!0))
                    },
                    b.remove = function() {
                        ay.wrapper.removeChild(b),
                            ay.reInit()
                    },
                    b.html = function(a) {
                        return "undefined" == typeof a ? b.innerHTML: (b.innerHTML = a, b)
                    },
                    b.index = function() {
                        for (var a, d = ay.slides.length - 1; d >= 0; d--) {
                            b === ay.slides[d] && (a = d)
                        }
                        return a
                    },
                    b.isActive = function() {
                        return b.index() === ay.activeIndex ? !0 : !1
                    },
                b.swiperSlideDataStorage || (b.swiperSlideDataStorage = {}),
                    b.getData = function(a) {
                        return b.swiperSlideDataStorage[a]
                    },
                    b.setData = function(a, d) {
                        return b.swiperSlideDataStorage[a] = d,
                            b
                    },
                    b.data = function(a, d) {
                        return "undefined" == typeof d ? b.getAttribute("data-" + a) : (b.setAttribute("data-" + a, d), b)
                    },
                    b.getWidth = function(a, d) {
                        return ay.h.getWidth(b, a, d)
                    },
                    b.getHeight = function(a, d) {
                        return ay.h.getHeight(b, a, d)
                    },
                    b.getOffset = function() {
                        return ay.h.getOffset(b)
                    },
                    b
            },
            ay.calcSlides = function(b) {
                var l = ay.slides ? ay.slides.length: !1;
                ay.slides = [],
                    ay.displaySlides = [];
                for (var k = 0; k < ay.wrapper.childNodes.length; k++) {
                    if (ay.wrapper.childNodes[k].className) {
                        for (var j = ay.wrapper.childNodes[k].className, h = j.split(/\s+/), g = 0; g < h.length; g++) {
                            h[g] === a2.slideClass && ay.slides.push(ay.wrapper.childNodes[k])
                        }
                    }
                }
                for (k = ay.slides.length - 1; k >= 0; k--) {
                    ay._extendSwiperSlide(ay.slides[k])
                }
                l !== !1 && (l !== ay.slides.length || b) && (aW(), aX(), ay.updateActiveSlide(), ay.params.pagination && ay.createPagination(), ay.callPlugins("numberOfSlidesChanged"))
            },
            ay.createSlide = function(b, h, g) {
                h = h || ay.params.slideClass,
                    g = g || a2.slideElement;
                var f = document.createElement(g);
                return f.innerHTML = b || "",
                    f.className = h,
                    ay._extendSwiperSlide(f)
            },
            ay.appendSlide = function(e, d, f) {
                return e ? e.nodeType ? ay._extendSwiperSlide(e).append() : ay.createSlide(e, d, f).append() : void 0
            },
            ay.prependSlide = function(e, d, f) {
                return e ? e.nodeType ? ay._extendSwiperSlide(e).prepend() : ay.createSlide(e, d, f).prepend() : void 0
            },
            ay.insertSlideAfter = function(f, e, h, g) {
                return "undefined" == typeof f ? !1 : e.nodeType ? ay._extendSwiperSlide(e).insertAfter(f) : ay.createSlide(e, h, g).insertAfter(f)
            },
            ay.removeSlide = function(b) {
                if (ay.slides[b]) {
                    if (a2.loop) {
                        if (!ay.slides[b + ay.loopedSlides]) {
                            return ! 1
                        }
                        ay.slides[b + ay.loopedSlides].remove(),
                            ay.removeLoopedSlides(),
                            ay.calcSlides(),
                            ay.createLoop()
                    } else {
                        ay.slides[b].remove()
                    }
                    return ! 0
                }
                return ! 1
            },
            ay.removeLastSlide = function() {
                return ay.slides.length > 0 ? (a2.loop ? (ay.slides[ay.slides.length - 1 - ay.loopedSlides].remove(), ay.removeLoopedSlides(), ay.calcSlides(), ay.createLoop()) : ay.slides[ay.slides.length - 1].remove(), !0) : !1
            },
            ay.removeAllSlides = function() {
                for (var d = ay.slides.length,
                         c = ay.slides.length - 1; c >= 0; c--) {
                    ay.slides[c].remove(),
                    c === d - 1 && ay.setWrapperTranslate(0)
                }
            },
            ay.getSlide = function(b) {
                return ay.slides[b]
            },
            ay.getLastSlide = function() {
                return ay.slides[ay.slides.length - 1]
            },
            ay.getFirstSlide = function() {
                return ay.slides[0]
            },
            ay.activeSlide = function() {
                return ay.slides[ay.activeIndex]
            },
            ay.fireCallback = function() {
                var b = arguments[0];
                if ("[object Array]" === Object.prototype.toString.call(b)) {
                    for (var d = 0; d < b.length; d++) {
                        "function" == typeof b[d] && b[d](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }
                } else {
                    "[object String]" === Object.prototype.toString.call(b) ? a2["on" + b] && ay.fireCallback(a2["on" + b], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : b(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
            },
            ay.addCallback = function(f, d) {
                var h, g = this;
                return g.params["on" + f] ? a0(this.params["on" + f]) ? this.params["on" + f].push(d) : "function" == typeof this.params["on" + f] ? (h = this.params["on" + f], this.params["on" + f] = [], this.params["on" + f].push(h), this.params["on" + f].push(d)) : void 0 : (this.params["on" + f] = [], this.params["on" + f].push(d))
            },
            ay.removeCallbacks = function(b) {
                ay.params["on" + b] && (ay.params["on" + b] = null)
            };
        var ai = [];
        for (var ah in ay.plugins) {
            if (a2[ah]) {
                var ag = ay.plugins[ah](ay, a2[ah]);
                ag && ai.push(ag)
            }
        }
        ay.callPlugins = function(e, d) {
            d || (d = {});
            for (var f = 0; f < ai.length; f++) {
                e in ai[f] && ai[f][e](d)
            }
        },
        !ay.browser.ie10 && !ay.browser.ie11 || a2.onlyExternal || ay.wrapper.classList.add("swiper-wp8-" + (an ? "horizontal": "vertical")),
        a2.freeMode && (ay.container.className += " swiper-free-mode"),
            ay.initialized = !1,
            ay.init = function(P, O) {
                var N = ay.h.getWidth(ay.container, !1, a2.roundLengths),
                    M = ay.h.getHeight(ay.container, !1, a2.roundLengths);
                if (N !== ay.width || M !== ay.height || P) {
                    ay.width = N,
                        ay.height = M;
                    var L, K, J, I, H, G, F;
                    ar = an ? N: M;
                    var E = ay.wrapper;
                    if (P && ay.calcSlides(O), "auto" === a2.slidesPerView) {
                        var D = 0,
                            C = 0;
                        a2.slidesOffset > 0 && (E.style.paddingLeft = "", E.style.paddingRight = "", E.style.paddingTop = "", E.style.paddingBottom = ""),
                            E.style.width = "",
                            E.style.height = "",
                        a2.offsetPxBefore > 0 && (an ? ay.wrapperLeft = a2.offsetPxBefore: ay.wrapperTop = a2.offsetPxBefore),
                        a2.offsetPxAfter > 0 && (an ? ay.wrapperRight = a2.offsetPxAfter: ay.wrapperBottom = a2.offsetPxAfter),
                        a2.centeredSlides && (an ? (ay.wrapperLeft = (ar - this.slides[0].getWidth(!0, a2.roundLengths)) / 2, ay.wrapperRight = (ar - ay.slides[ay.slides.length - 1].getWidth(!0, a2.roundLengths)) / 2) : (ay.wrapperTop = (ar - ay.slides[0].getHeight(!0, a2.roundLengths)) / 2, ay.wrapperBottom = (ar - ay.slides[ay.slides.length - 1].getHeight(!0, a2.roundLengths)) / 2)),
                            an ? (ay.wrapperLeft >= 0 && (E.style.paddingLeft = ay.wrapperLeft + "px"), ay.wrapperRight >= 0 && (E.style.paddingRight = ay.wrapperRight + "px")) : (ay.wrapperTop >= 0 && (E.style.paddingTop = ay.wrapperTop + "px"), ay.wrapperBottom >= 0 && (E.style.paddingBottom = ay.wrapperBottom + "px")),
                            G = 0;
                        var B = 0;
                        for (ay.snapGrid = [], ay.slidesGrid = [], J = 0, F = 0; F < ay.slides.length; F++) {
                            L = ay.slides[F].getWidth(!0, a2.roundLengths),
                                K = ay.slides[F].getHeight(!0, a2.roundLengths),
                            a2.calculateHeight && (J = Math.max(J, K));
                            var A = an ? L: K;
                            if (a2.centeredSlides) {
                                var z = F === ay.slides.length - 1 ? 0 : ay.slides[F + 1].getWidth(!0, a2.roundLengths),
                                    y = F === ay.slides.length - 1 ? 0 : ay.slides[F + 1].getHeight(!0, a2.roundLengths),
                                    x = an ? z: y;
                                if (A > ar) {
                                    if (a2.slidesPerViewFit) {
                                        ay.snapGrid.push(G + ay.wrapperLeft),
                                            ay.snapGrid.push(G + A - ar + ay.wrapperLeft)
                                    } else {
                                        for (var w = 0; w <= Math.floor(A / (ar + ay.wrapperLeft)); w++) {
                                            ay.snapGrid.push(0 === w ? G + ay.wrapperLeft: G + ay.wrapperLeft + ar * w)
                                        }
                                    }
                                    ay.slidesGrid.push(G + ay.wrapperLeft)
                                } else {
                                    ay.snapGrid.push(B),
                                        ay.slidesGrid.push(B)
                                }
                                B += A / 2 + x / 2
                            } else {
                                if (A > ar) {
                                    if (a2.slidesPerViewFit) {
                                        ay.snapGrid.push(G),
                                            ay.snapGrid.push(G + A - ar)
                                    } else {
                                        if (0 !== ar) {
                                            for (var b = 0; b <= Math.floor(A / ar); b++) {
                                                ay.snapGrid.push(G + ar * b)
                                            }
                                        } else {
                                            ay.snapGrid.push(G)
                                        }
                                    }
                                } else {
                                    ay.snapGrid.push(G)
                                }
                                ay.slidesGrid.push(G)
                            }
                            G += A,
                                D += L,
                                C += K
                        }
                        a2.calculateHeight && (ay.height = J),
                            an ? (av = D + ay.wrapperRight + ay.wrapperLeft, a2.cssWidthAndHeight && "height" !== a2.cssWidthAndHeight || (E.style.width = D + "px"), a2.cssWidthAndHeight && "width" !== a2.cssWidthAndHeight || (E.style.height = ay.height + "px")) : (a2.cssWidthAndHeight && "height" !== a2.cssWidthAndHeight || (E.style.width = ay.width + "px"), a2.cssWidthAndHeight && "width" !== a2.cssWidthAndHeight || (E.style.height = C + "px"), av = C + ay.wrapperTop + ay.wrapperBottom)
                    } else {
                        if (a2.scrollContainer) {
                            E.style.width = "",
                                E.style.height = "",
                                I = ay.slides[0].getWidth(!0, a2.roundLengths),
                                H = ay.slides[0].getHeight(!0, a2.roundLengths),
                                av = an ? I: H,
                                E.style.width = I + "px",
                                E.style.height = H + "px",
                                aw = an ? I: H
                        } else {
                            if (a2.calculateHeight) {
                                for (J = 0, H = 0, an || (ay.container.style.height = ""), E.style.height = "", F = 0; F < ay.slides.length; F++) {
                                    ay.slides[F].style.height = "",
                                        J = Math.max(ay.slides[F].getHeight(!0), J),
                                    an || (H += ay.slides[F].getHeight(!0))
                                }
                                K = J,
                                    ay.height = K,
                                    an ? H = K: (ar = K, ay.container.style.height = ar + "px")
                            } else {
                                K = an ? ay.height: ay.height / a2.slidesPerView,
                                a2.roundLengths && (K = Math.ceil(K)),
                                    H = an ? ay.height: ay.slides.length * K
                            }
                            for (L = an ? ay.width / a2.slidesPerView: ay.width, a2.roundLengths && (L = Math.ceil(L)), I = an ? ay.slides.length * L: ay.width, aw = an ? L: K, a2.offsetSlidesBefore > 0 && (an ? ay.wrapperLeft = aw * a2.offsetSlidesBefore: ay.wrapperTop = aw * a2.offsetSlidesBefore), a2.offsetSlidesAfter > 0 && (an ? ay.wrapperRight = aw * a2.offsetSlidesAfter: ay.wrapperBottom = aw * a2.offsetSlidesAfter), a2.offsetPxBefore > 0 && (an ? ay.wrapperLeft = a2.offsetPxBefore: ay.wrapperTop = a2.offsetPxBefore), a2.offsetPxAfter > 0 && (an ? ay.wrapperRight = a2.offsetPxAfter: ay.wrapperBottom = a2.offsetPxAfter), a2.centeredSlides && (an ? (ay.wrapperLeft = (ar - aw) / 2, ay.wrapperRight = (ar - aw) / 2) : (ay.wrapperTop = (ar - aw) / 2, ay.wrapperBottom = (ar - aw) / 2)), an ? (ay.wrapperLeft > 0 && (E.style.paddingLeft = ay.wrapperLeft + "px"), ay.wrapperRight > 0 && (E.style.paddingRight = ay.wrapperRight + "px")) : (ay.wrapperTop > 0 && (E.style.paddingTop = ay.wrapperTop + "px"), ay.wrapperBottom > 0 && (E.style.paddingBottom = ay.wrapperBottom + "px")), av = an ? I + ay.wrapperRight + ay.wrapperLeft: H + ay.wrapperTop + ay.wrapperBottom, parseFloat(I) > 0 && (!a2.cssWidthAndHeight || "height" === a2.cssWidthAndHeight) && (E.style.width = I + "px"), parseFloat(H) > 0 && (!a2.cssWidthAndHeight || "width" === a2.cssWidthAndHeight) && (E.style.height = H + "px"), G = 0, ay.snapGrid = [], ay.slidesGrid = [], F = 0; F < ay.slides.length; F++) {
                                ay.snapGrid.push(G),
                                    ay.slidesGrid.push(G),
                                    G += aw,
                                parseFloat(L) > 0 && (!a2.cssWidthAndHeight || "height" === a2.cssWidthAndHeight) && (ay.slides[F].style.width = L + "px"),
                                parseFloat(K) > 0 && (!a2.cssWidthAndHeight || "width" === a2.cssWidthAndHeight) && (ay.slides[F].style.height = K + "px")
                            }
                        }
                    }
                    ay.initialized ? (ay.callPlugins("onInit"), a2.onInit && ay.fireCallback(a2.onInit, ay)) : (ay.callPlugins("onFirstInit"), a2.onFirstInit && ay.fireCallback(a2.onFirstInit, ay)),
                        ay.initialized = !0
                }
            },
            ay.reInit = function(b) {
                ay.init(!0, b)
            },
            ay.resizeFix = function(b) {
                ay.callPlugins("beforeResizeFix"),
                    ay.init(a2.resizeReInit || b),
                    a2.freeMode ? ay.getWrapperTranslate() < -aZ() && (ay.setWrapperTransition(0), ay.setWrapperTranslate( - aZ())) : (ay.swipeTo(a2.loop ? ay.activeLoopIndex: ay.activeIndex, 0, !1), a2.autoplay && (ay.support.transitions && "undefined" != typeof aB ? "undefined" != typeof aB && (clearTimeout(aB), aB = void 0, ay.startAutoplay()) : "undefined" != typeof a4 && (clearInterval(a4), a4 = void 0, ay.startAutoplay()))),
                    ay.callPlugins("afterResizeFix")
            },
            ay.destroy = function(b) {
                var h = ay.h.removeEventListener,
                    g = "wrapper" === a2.eventTarget ? ay.wrapper: ay.container;
                if (ay.browser.ie10 || ay.browser.ie11 ? (h(g, ay.touchEvents.touchStart, aO), h(document, ay.touchEvents.touchMove, aN), h(document, ay.touchEvents.touchEnd, aM)) : (ay.support.touch && (h(g, "touchstart", aO), h(g, "touchmove", aN), h(g, "touchend", aM)), a2.simulateTouch && (h(g, "mousedown", aO), h(document, "mousemove", aN), h(document, "mouseup", aM))), a2.autoResize && h(window, "resize", ay.resizeFix), aW(), a2.paginationClickable && aG(), a2.mousewheelControl && ay._wheelEvent && h(ay.container, ay._wheelEvent, aU), a2.keyboardControl && h(document, "keydown", aV), a2.autoplay && ay.stopAutoplay(), b) {
                    ay.wrapper.removeAttribute("style");
                    for (var f = 0; f < ay.slides.length; f++) {
                        ay.slides[f].removeAttribute("style")
                    }
                }
                ay.callPlugins("onDestroy"),
                window.jQuery && window.jQuery(ay.container).data("swiper") && window.jQuery(ay.container).removeData("swiper"),
                window.Zepto && window.Zepto(ay.container).data("swiper") && window.Zepto(ay.container).removeData("swiper"),
                    ay = null
            },
            ay.disableKeyboardControl = function() {
                a2.keyboardControl = !1,
                    ay.h.removeEventListener(document, "keydown", aV)
            },
            ay.enableKeyboardControl = function() {
                a2.keyboardControl = !0,
                    ay.h.addEventListener(document, "keydown", aV)
            };
        var af = (new Date).getTime();
        if (ay.disableMousewheelControl = function() {
                return ay._wheelEvent ? (a2.mousewheelControl = !1, ay.h.removeEventListener(ay.container, ay._wheelEvent, aU), !0) : !1
            },
                ay.enableMousewheelControl = function() {
                    return ay._wheelEvent ? (a2.mousewheelControl = !0, ay.h.addEventListener(ay.container, ay._wheelEvent, aU), !0) : !1
                },
                a2.grabCursor) {
            var ae = ay.container.style;
            ae.cursor = "move",
                ae.cursor = "grab",
                ae.cursor = "-moz-grab",
                ae.cursor = "-webkit-grab"
        }
        ay.allowSlideClick = !0,
            ay.allowLinks = !0;
        var ad, ac, aa, aD = !1,
            a5 = !0;
        ay.swipeNext = function(b, l) {
            "undefined" == typeof b && (b = !0),
            !l && a2.loop && ay.fixLoop(),
            !l && a2.autoplay && ay.stopAutoplay(!0),
                ay.callPlugins("onSwipeNext");
            var k = ay.getWrapperTranslate().toFixed(2),
                j = k;
            if ("auto" === a2.slidesPerView) {
                for (var i = 0; i < ay.snapGrid.length; i++) {
                    if ( - k >= ay.snapGrid[i].toFixed(2) && -k < ay.snapGrid[i + 1].toFixed(2)) {
                        j = -ay.snapGrid[i + 1];
                        break
                    }
                }
            } else {
                var e = aw * a2.slidesPerGroup;
                j = -(Math.floor(Math.abs(k) / Math.floor(e)) * e + e)
            }
            return j < -aZ() && (j = -aZ()),
                j === k ? !1 : (aI(j, "next", {
                    runCallbacks: b
                }), !0)
        },
            ay.swipePrev = function(b, l) {
                "undefined" == typeof b && (b = !0),
                !l && a2.loop && ay.fixLoop(),
                !l && a2.autoplay && ay.stopAutoplay(!0),
                    ay.callPlugins("onSwipePrev");
                var k, j = Math.ceil(ay.getWrapperTranslate());
                if ("auto" === a2.slidesPerView) {
                    k = 0;
                    for (var i = 1; i < ay.snapGrid.length; i++) {
                        if ( - j === ay.snapGrid[i]) {
                            k = -ay.snapGrid[i - 1];
                            break
                        }
                        if ( - j > ay.snapGrid[i] && -j < ay.snapGrid[i + 1]) {
                            k = -ay.snapGrid[i];
                            break
                        }
                    }
                } else {
                    var h = aw * a2.slidesPerGroup;
                    k = -(Math.ceil( - j / h) - 1) * h
                }
                return k > 0 && (k = 0),
                    k === j ? !1 : (aI(k, "prev", {
                        runCallbacks: b
                    }), !0)
            },
            ay.swipeReset = function(b) {
                "undefined" == typeof b && (b = !0),
                    ay.callPlugins("onSwipeReset");
                var j, i = ay.getWrapperTranslate(),
                    h = aw * a2.slidesPerGroup; - aZ();
                if ("auto" === a2.slidesPerView) {
                    j = 0;
                    for (var e = 0; e < ay.snapGrid.length; e++) {
                        if ( - i === ay.snapGrid[e]) {
                            return
                        }
                        if ( - i >= ay.snapGrid[e] && -i < ay.snapGrid[e + 1]) {
                            j = ay.positions.diff > 0 ? -ay.snapGrid[e + 1] : -ay.snapGrid[e];
                            break
                        }
                    } - i >= ay.snapGrid[ay.snapGrid.length - 1] && (j = -ay.snapGrid[ay.snapGrid.length - 1]),
                    i <= -aZ() && (j = -aZ())
                } else {
                    j = 0 > i ? Math.round(i / h) * h: 0,
                    i <= -aZ() && (j = -aZ())
                }
                return a2.scrollContainer && (j = 0 > i ? i: 0),
                j < -aZ() && (j = -aZ()),
                a2.scrollContainer && ar > aw && (j = 0),
                    j === i ? !1 : (aI(j, "reset", {
                        runCallbacks: b
                    }), !0)
            },
            ay.swipeTo = function(b, j, i) {
                b = parseInt(b, 10),
                    ay.callPlugins("onSwipeTo", {
                        index: b,
                        speed: j
                    }),
                a2.loop && (b += ay.loopedSlides);
                var h = ay.getWrapperTranslate();
                if (! (b > ay.slides.length - 1 || 0 > b)) {
                    var e;
                    return e = "auto" === a2.slidesPerView ? -ay.slidesGrid[b] : -b * aw,
                    e < -aZ() && (e = -aZ()),
                        e === h ? !1 : ("undefined" == typeof i && (i = !0), aI(e, "to", {
                            index: b,
                            speed: j,
                            runCallbacks: i
                        }), !0)
                }
            },
            ay._queueStartCallbacks = !1,
            ay._queueEndCallbacks = !1,
            ay.updateActiveSlide = function(b) {
                if (ay.initialized && 0 !== ay.slides.length) {
                    ay.previousIndex = ay.activeIndex,
                    "undefined" == typeof b && (b = ay.getWrapperTranslate()),
                    b > 0 && (b = 0);
                    var p;
                    if ("auto" === a2.slidesPerView) {
                        if (ay.activeIndex = ay.slidesGrid.indexOf( - b), ay.activeIndex < 0) {
                            for (p = 0; p < ay.slidesGrid.length - 1 && !( - b > ay.slidesGrid[p] && -b < ay.slidesGrid[p + 1]); p++) {}
                            var o = Math.abs(ay.slidesGrid[p] + b),
                                n = Math.abs(ay.slidesGrid[p + 1] + b);
                            ay.activeIndex = n >= o ? p: p + 1
                        }
                    } else {
                        ay.activeIndex = Math[a2.visibilityFullFit ? "ceil": "round"]( - b / aw)
                    }
                    if (ay.activeIndex === ay.slides.length && (ay.activeIndex = ay.slides.length - 1), ay.activeIndex < 0 && (ay.activeIndex = 0), ay.slides[ay.activeIndex]) {
                        if (ay.calcVisibleSlides(b), ay.support.classList) {
                            var m;
                            for (p = 0; p < ay.slides.length; p++) {
                                m = ay.slides[p],
                                    m.classList.remove(a2.slideActiveClass),
                                    ay.visibleSlides.indexOf(m) >= 0 ? m.classList.add(a2.slideVisibleClass) : m.classList.remove(a2.slideVisibleClass)
                            }
                            ay.slides[ay.activeIndex].classList.add(a2.slideActiveClass)
                        } else {
                            var l = new RegExp("\\s*" + a2.slideActiveClass),
                                k = new RegExp("\\s*" + a2.slideVisibleClass);
                            for (p = 0; p < ay.slides.length; p++) {
                                ay.slides[p].className = ay.slides[p].className.replace(l, "").replace(k, ""),
                                ay.visibleSlides.indexOf(ay.slides[p]) >= 0 && (ay.slides[p].className += " " + a2.slideVisibleClass)
                            }
                            ay.slides[ay.activeIndex].className += " " + a2.slideActiveClass
                        }
                        if (a2.loop) {
                            var j = ay.loopedSlides;
                            ay.activeLoopIndex = ay.activeIndex - j,
                            ay.activeLoopIndex >= ay.slides.length - 2 * j && (ay.activeLoopIndex = ay.slides.length - 2 * j - ay.activeLoopIndex),
                            ay.activeLoopIndex < 0 && (ay.activeLoopIndex = ay.slides.length - 2 * j + ay.activeLoopIndex),
                            ay.activeLoopIndex < 0 && (ay.activeLoopIndex = 0)
                        } else {
                            ay.activeLoopIndex = ay.activeIndex
                        }
                        a2.pagination && ay.updatePagination(b)
                    }
                }
            },
            ay.createPagination = function(b) {
                if (a2.paginationClickable && ay.paginationButtons && aG(), ay.paginationContainer = a2.pagination.nodeType ? a2.pagination: a1(a2.pagination)[0], a2.createPagination) {
                    var j = "",
                        i = ay.slides.length,
                        h = i;
                    a2.loop && (h -= 2 * ay.loopedSlides);
                    for (var c = 0; h > c; c++) {
                        j += "<" + a2.paginationElement + ' class="' + a2.paginationElementClass + '"></' + a2.paginationElement + ">"
                    }
                    ay.paginationContainer.innerHTML = j
                }
                ay.paginationButtons = a1("." + a2.paginationElementClass, ay.paginationContainer),
                b || ay.updatePagination(),
                    ay.callPlugins("onCreatePagination"),
                a2.paginationClickable && aF()
            },
            ay.updatePagination = function(b) {
                if (a2.pagination && !(ay.slides.length < 1)) {
                    var p = a1("." + a2.paginationActiveClass, ay.paginationContainer);
                    if (p) {
                        var o = ay.paginationButtons;
                        if (0 !== o.length) {
                            for (var n = 0; n < o.length; n++) {
                                o[n].className = a2.paginationElementClass
                            }
                            var m = a2.loop ? ay.loopedSlides: 0;
                            if (a2.paginationAsRange) {
                                ay.visibleSlides || ay.calcVisibleSlides(b);
                                var l, k = [];
                                for (l = 0; l < ay.visibleSlides.length; l++) {
                                    var c = ay.slides.indexOf(ay.visibleSlides[l]) - m;
                                    a2.loop && 0 > c && (c = ay.slides.length - 2 * ay.loopedSlides + c),
                                    a2.loop && c >= ay.slides.length - 2 * ay.loopedSlides && (c = ay.slides.length - 2 * ay.loopedSlides - c, c = Math.abs(c)),
                                        k.push(c)
                                }
                                for (l = 0; l < k.length; l++) {
                                    o[k[l]] && (o[k[l]].className += " " + a2.paginationVisibleClass)
                                }
                                a2.loop ? void 0 !== o[ay.activeLoopIndex] && (o[ay.activeLoopIndex].className += " " + a2.paginationActiveClass) : o[ay.activeIndex] && (o[ay.activeIndex].className += " " + a2.paginationActiveClass)
                            } else {
                                a2.loop ? o[ay.activeLoopIndex] && (o[ay.activeLoopIndex].className += " " + a2.paginationActiveClass + " " + a2.paginationVisibleClass) : o[ay.activeIndex] && (o[ay.activeIndex].className += " " + a2.paginationActiveClass + " " + a2.paginationVisibleClass)
                            }
                        }
                    }
                }
            },
            ay.calcVisibleSlides = function(b) {
                var n = [],
                    m = 0,
                    l = 0,
                    k = 0;
                an && ay.wrapperLeft > 0 && (b += ay.wrapperLeft),
                !an && ay.wrapperTop > 0 && (b += ay.wrapperTop);
                for (var j = 0; j < ay.slides.length; j++) {
                    m += l,
                        l = "auto" === a2.slidesPerView ? an ? ay.h.getWidth(ay.slides[j], !0, a2.roundLengths) : ay.h.getHeight(ay.slides[j], !0, a2.roundLengths) : aw,
                        k = m + l;
                    var i = !1;
                    a2.visibilityFullFit ? (m >= -b && -b + ar >= k && (i = !0), -b >= m && k >= -b + ar && (i = !0)) : (k > -b && -b + ar >= k && (i = !0), m >= -b && -b + ar > m && (i = !0), -b > m && k > -b + ar && (i = !0)),
                    i && n.push(ay.slides[j])
                }
                0 === n.length && (n = [ay.slides[ay.activeIndex]]),
                    ay.visibleSlides = n
            };
        var aB, a4;
        ay.startAutoplay = function() {
            if (ay.support.transitions) {
                if ("undefined" != typeof aB) {
                    return ! 1
                }
                if (!a2.autoplay) {
                    return
                }
                ay.callPlugins("onAutoplayStart"),
                a2.onAutoplayStart && ay.fireCallback(a2.onAutoplayStart, ay),
                    aC()
            } else {
                if ("undefined" != typeof a4) {
                    return ! 1
                }
                if (!a2.autoplay) {
                    return
                }
                ay.callPlugins("onAutoplayStart"),
                a2.onAutoplayStart && ay.fireCallback(a2.onAutoplayStart, ay),
                    a4 = setInterval(function() {
                            a2.loop ? (ay.fixLoop(), ay.swipeNext(!0, !0)) : ay.swipeNext(!0, !0) || (a2.autoplayStopOnLast ? (clearInterval(a4), a4 = void 0) : ay.swipeTo(0))
                        },
                        a2.autoplay)
            }
        },
            ay.stopAutoplay = function(b) {
                if (ay.support.transitions) {
                    if (!aB) {
                        return
                    }
                    aB && clearTimeout(aB),
                        aB = void 0,
                    b && !a2.autoplayDisableOnInteraction && ay.wrapperTransitionEnd(function() {
                        aC()
                    }),
                        ay.callPlugins("onAutoplayStop"),
                    a2.onAutoplayStop && ay.fireCallback(a2.onAutoplayStop, ay)
                } else {
                    a4 && clearInterval(a4),
                        a4 = void 0,
                        ay.callPlugins("onAutoplayStop"),
                    a2.onAutoplayStop && ay.fireCallback(a2.onAutoplayStop, ay)
                }
            },
            ay.loopCreated = !1,
            ay.removeLoopedSlides = function() {
                if (ay.loopCreated) {
                    for (var b = 0; b < ay.slides.length; b++) {
                        ay.slides[b].getData("looped") === !0 && ay.wrapper.removeChild(ay.slides[b])
                    }
                }
            },
            ay.createLoop = function() {
                if (0 !== ay.slides.length) {
                    ay.loopedSlides = "auto" === a2.slidesPerView ? a2.loopedSlides || 1 : a2.slidesPerView + a2.loopAdditionalSlides,
                    ay.loopedSlides > ay.slides.length && (ay.loopedSlides = ay.slides.length);
                    var t, s = "",
                        r = "",
                        q = "",
                        p = ay.slides.length,
                        o = Math.floor(ay.loopedSlides / p),
                        n = ay.loopedSlides % p;
                    for (t = 0; o * p > t; t++) {
                        var m = t;
                        if (t >= p) {
                            var l = Math.floor(t / p);
                            m = t - p * l
                        }
                        q += ay.slides[m].outerHTML
                    }
                    for (t = 0; n > t; t++) {
                        r += aJ(a2.slideDuplicateClass, ay.slides[t].outerHTML)
                    }
                    for (t = p - n; p > t; t++) {
                        s += aJ(a2.slideDuplicateClass, ay.slides[t].outerHTML)
                    }
                    var b = s + q + ax.innerHTML + q + r;
                    for (ax.innerHTML = b, ay.loopCreated = !0, ay.calcSlides(), t = 0; t < ay.slides.length; t++) { (t < ay.loopedSlides || t >= ay.slides.length - ay.loopedSlides) && ay.slides[t].setData("looped", !0)
                    }
                    ay.callPlugins("onCreateLoop")
                }
            },
            ay.fixLoop = function() {
                var b;
                ay.activeIndex < ay.loopedSlides ? (b = ay.slides.length - 3 * ay.loopedSlides + ay.activeIndex, ay.swipeTo(b, 0, !1)) : ("auto" === a2.slidesPerView && ay.activeIndex >= 2 * ay.loopedSlides || ay.activeIndex > ay.slides.length - 2 * a2.slidesPerView) && (b = -ay.slides.length + ay.activeIndex + ay.loopedSlides, ay.swipeTo(b, 0, !1))
            },
            ay.loadSlides = function() {
                var b = "";
                ay.activeLoaderIndex = 0;
                for (var h = a2.loader.slides,
                         g = a2.loader.loadAllSlides ? h.length: a2.slidesPerView * (1 + a2.loader.surroundGroups), f = 0; g > f; f++) {
                    b += "outer" === a2.loader.slidesHTMLType ? h[f] : "<" + a2.slideElement + ' class="' + a2.slideClass + '" data-swiperindex="' + f + '">' + h[f] + "</" + a2.slideElement + ">"
                }
                ay.wrapper.innerHTML = b,
                    ay.calcSlides(!0),
                a2.loader.loadAllSlides || ay.wrapperTransitionEnd(ay.reloadSlides, !0)
            },
            ay.reloadSlides = function() {
                var v = a2.loader.slides,
                    u = parseInt(ay.activeSlide().data("swiperindex"), 10);
                if (! (0 > u || u > v.length - 1)) {
                    ay.activeLoaderIndex = u;
                    var t = Math.max(0, u - a2.slidesPerView * a2.loader.surroundGroups),
                        s = Math.min(u + a2.slidesPerView * (1 + a2.loader.surroundGroups) - 1, v.length - 1);
                    if (u > 0) {
                        var r = -aw * (u - t);
                        ay.setWrapperTranslate(r),
                            ay.setWrapperTransition(0)
                    }
                    var q;
                    if ("reload" === a2.loader.logic) {
                        ay.wrapper.innerHTML = "";
                        var p = "";
                        for (q = t; s >= q; q++) {
                            p += "outer" === a2.loader.slidesHTMLType ? v[q] : "<" + a2.slideElement + ' class="' + a2.slideClass + '" data-swiperindex="' + q + '">' + v[q] + "</" + a2.slideElement + ">"
                        }
                        ay.wrapper.innerHTML = p
                    } else {
                        var o = 1000,
                            n = 0;
                        for (q = 0; q < ay.slides.length; q++) {
                            var m = ay.slides[q].data("swiperindex");
                            t > m || m > s ? ay.wrapper.removeChild(ay.slides[q]) : (o = Math.min(m, o), n = Math.max(m, n))
                        }
                        for (q = t; s >= q; q++) {
                            var b;
                            o > q && (b = document.createElement(a2.slideElement), b.className = a2.slideClass, b.setAttribute("data-swiperindex", q), b.innerHTML = v[q], ay.wrapper.insertBefore(b, ay.wrapper.firstChild)),
                            q > n && (b = document.createElement(a2.slideElement), b.className = a2.slideClass, b.setAttribute("data-swiperindex", q), b.innerHTML = v[q], ay.wrapper.appendChild(b))
                        }
                    }
                    ay.reInit(!0)
                }
            },
            aA()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function(i, h) {
        function n(a) {
            if (a.target === k && (i(l), l.params.queueEndCallbacks && (l._queueEndCallbacks = !1), !h)) {
                for (m = 0; m < j.length; m++) {
                    l.h.removeEventListener(k, j[m], n)
                }
            }
        }
        var m, l = this,
            k = l.wrapper,
            j = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (i) {
            for (m = 0; m < j.length; m++) {
                l.h.addEventListener(k, j[m], n)
            }
        }
    },
    getWrapperTranslate: function(h) {
        var g, l, k, j, i = this.wrapper;
        return "undefined" == typeof h && (h = "horizontal" === this.params.mode ? "x": "y"),
            this.support.transforms && this.params.useCSS3Transforms ? (k = window.getComputedStyle(i, null), window.WebKitCSSMatrix ? j = new WebKitCSSMatrix("none" === k.webkitTransform ? "": k.webkitTransform) : (j = k.MozTransform || k.OTransform || k.MsTransform || k.msTransform || k.transform || k.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), g = j.toString().split(",")), "x" === h && (l = window.WebKitCSSMatrix ? j.m41: parseFloat(16 === g.length ? g[12] : g[4])), "y" === h && (l = window.WebKitCSSMatrix ? j.m42: parseFloat(16 === g.length ? g[13] : g[5]))) : ("x" === h && (l = parseFloat(i.style.left, 10) || 0), "y" === h && (l = parseFloat(i.style.top, 10) || 0)),
        l || 0
    },
    setWrapperTranslate: function(h, g, l) {
        var k, j = this.wrapper.style,
            i = {
                x: 0,
                y: 0,
                z: 0
            };
        3 === arguments.length ? (i.x = h, i.y = g, i.z = l) : ("undefined" == typeof g && (g = "horizontal" === this.params.mode ? "x": "y"), i[g] = h),
            this.support.transforms && this.params.useCSS3Transforms ? (k = this.support.transforms3d ? "translate3d(" + i.x + "px, " + i.y + "px, " + i.z + "px)": "translate(" + i.x + "px, " + i.y + "px)", j.webkitTransform = j.MsTransform = j.msTransform = j.MozTransform = j.OTransform = j.transform = k) : (j.left = i.x + "px", j.top = i.y + "px"),
            this.callPlugins("onSetWrapperTransform", i),
        this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, i)
    },
    setWrapperTransition: function(d) {
        var c = this.wrapper.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = d / 1000 + "s",
            this.callPlugins("onSetWrapperTransition", {
                duration: d
            }),
        this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, d)
    },
    h: {
        getWidth: function(g, f, j) {
            var i = window.getComputedStyle(g, null).getPropertyValue("width"),
                h = parseFloat(i);
            return (isNaN(h) || i.indexOf("%") > 0 || 0 > h) && (h = g.offsetWidth - parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-right"))),
            f && (h += parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-right"))),
                j ? Math.ceil(h) : h
        },
        getHeight: function(g, f, j) {
            if (f) {
                return g.offsetHeight
            }
            var i = window.getComputedStyle(g, null).getPropertyValue("height"),
                h = parseFloat(i);
            return (isNaN(h) || i.indexOf("%") > 0 || 0 > h) && (h = g.offsetHeight - parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-bottom"))),
            f && (h += parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(g, null).getPropertyValue("padding-bottom"))),
                j ? Math.ceil(h) : h
        },
        getOffset: function(i) {
            var h = i.getBoundingClientRect(),
                n = document.body,
                m = i.clientTop || n.clientTop || 0,
                l = i.clientLeft || n.clientLeft || 0,
                k = window.pageYOffset || i.scrollTop,
                j = window.pageXOffset || i.scrollLeft;
            return document.documentElement && !window.pageYOffset && (k = document.documentElement.scrollTop, j = document.documentElement.scrollLeft),
            {
                top: h.top + k - m,
                left: h.left + j - l
            }
        },
        windowWidth: function() {
            return window.innerWidth ? window.innerWidth: document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth: void 0
        },
        windowHeight: function() {
            return window.innerHeight ? window.innerHeight: document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight: void 0
        },
        windowScroll: function() {
            return "undefined" != typeof pageYOffset ? {
                left: window.pageXOffset,
                top: window.pageYOffset
            }: document.documentElement ? {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }: void 0
        },
        addEventListener: function(f, e, h, g) {
            "undefined" == typeof g && (g = !1),
                f.addEventListener ? f.addEventListener(e, h, g) : f.attachEvent && f.attachEvent("on" + e, h)
        },
        removeEventListener: function(f, e, h, g) {
            "undefined" == typeof g && (g = !1),
                f.removeEventListener ? f.removeEventListener(e, h, g) : f.detachEvent && f.detachEvent("on" + e, h)
        }
    },
    setTransform: function(e, d) {
        var f = e.style;
        f.webkitTransform = f.MsTransform = f.msTransform = f.MozTransform = f.OTransform = f.transform = d
    },
    setTranslate: function(g, f) {
        var j = g.style,
            i = {
                x: f.x || 0,
                y: f.y || 0,
                z: f.z || 0
            },
            h = this.support.transforms3d ? "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px)": "translate(" + i.x + "px," + i.y + "px)";
        j.webkitTransform = j.MsTransform = j.msTransform = j.MozTransform = j.OTransform = j.transform = h,
        this.support.transforms || (j.left = i.x + "px", j.top = i.y + "px")
    },
    setTransition: function(e, d) {
        var f = e.style;
        f.webkitTransitionDuration = f.MsTransitionDuration = f.msTransitionDuration = f.MozTransitionDuration = f.OTransitionDuration = f.transitionDuration = d + "ms"
    },
    support: {
        touch: window.Modernizr && Modernizr.touch === !0 ||
        function() {
            return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        } (),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
        function() {
            var b = document.createElement("div").style;
            return "webkitPerspective" in b || "MozPerspective" in b || "OPerspective" in b || "MsPerspective" in b || "perspective" in b
        } (),
        transforms: window.Modernizr && Modernizr.csstransforms === !0 ||
        function() {
            var b = document.createElement("div").style;
            return "transform" in b || "WebkitTransform" in b || "MozTransform" in b || "msTransform" in b || "MsTransform" in b || "OTransform" in b
        } (),
        transitions: window.Modernizr && Modernizr.csstransitions === !0 ||
        function() {
            var b = document.createElement("div").style;
            return "transition" in b || "WebkitTransition" in b || "MozTransition" in b || "msTransition" in b || "MsTransition" in b || "OTransition" in b
        } (),
        classList: function() {
            var b = document.createElement("div");
            return "classList" in b
        } ()
    },
    browser: {
        ie8: function() {
            var e = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var d = navigator.userAgent,
                    f = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== f.exec(d) && (e = parseFloat(RegExp.$1))
            }
            return - 1 !== e && 9 > e
        } (),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
},
(window.jQuery || window.Zepto) && !
    function(b) {
        b.fn.swiper = function(a) {
            var d;
            return this.each(function(h) {
                var g = b(this),
                    c = new Swiper(g[0], a);
                h || (d = c),
                    g.data("swiper", c)
            }),
                d
        }
    } (window.jQuery || window.Zepto),
"undefined" != typeof module && (module.exports = Swiper),
"function" == typeof define && define.amd && define([],
    function() {
        return Swiper
    });
var pageIndex = 0,
    preloadCount = 0;
var loopPlayback = false,
    stopSwitch = true;
var videoSwiper, casesSwiper, qualitySwiper, aboutSwiper;
$(function() {
    if (window.location.host.indexOf("1000zhu.com") > 0) {
        $("section").remove();
        return
    }
    var a = document.location.href.toLowerCase().match(/#p(\d+)$/);
    if (a != null) {
        pageIndex = a[1] - 1
    }
    preload()
});
function preload() {
    $("body>section, .video .swiper-container, .video .swiper-slide").height($(window).height());
    var a = $("section.video .swiper-container .swiper-slide:lt(2)");
    if (pageIndex > 0 && pageIndex < $("body>section").size()) {
        a = $("body>section").eq(pageIndex)
    }
    preloadCount = a.size();
    a.each(function(c, d) {
        var e = $(d).css("background-image");
        var b = e.match(/url\("?([^"]+)"?\)/);
        loadImage(b[1], imgLoaded)
    })
}
function loadImage(b, c) {
    var a = new Image();
    a.src = b;
    if (a.complete) {
        preloadCount--;
        c.call(a);
        return
    }
    a.onload = function() {
        preloadCount--;
        c.call(a)
    }
}
function imgLoaded() {
    if (preloadCount == 0) {
        pageLoad()
    }
}
function pageLoad() {
    $("body").bind("mousewheel",
        function(f, g) {
            if (stopSwitch) {
                return
            }
            stopSwitch = true;
            g > 0 ? pageIndex--:pageIndex++;
            pageSwitching()
        }).bind("touchmove",
        function(f) {
            f.preventDefault()
        });
    $("body").swipe({
        swipeUp: function() {
            if (stopSwitch) {
                return
            }
            stopSwitch = true;
            pageIndex++;
            pageSwitching()
        },
        swipeDown: function() {
            if (stopSwitch) {
                return
            }
            stopSwitch = true;
            pageIndex--;
            pageSwitching()
        }
    });
    $("header").append('<div class="bg"></div>');
    $("header nav.menu").append('<i class="line"></i>');
    $("header .menu li a").bind("mouseenter",
        function() {
            var e = $("header .menu .line");
            if (e.css("display") == "none") {
                e.show()
            }
            e.stop().animate({
                    width: $(this).width() + 10,
                    left: parseInt($(this).position().left) - 5 + "px"
                },
                300)
        });
    $("header .menu").bind("mouseleave",
        function() {
            $("header .menu li.active a").trigger("mouseenter")
        }).trigger("mouseleave");
    $("header .menu").bind(whichTransitionEvent(),
        function() {
            $(this).trigger("mouseleave")
        });
    $("header .menu li").bind("click touchstart",
        function() {
            pageIndex = $(this).index();
            if(pageIndex<=4){
                pageSwitching()
            }
        });
    $("header .menu-icon span.glyphicon-th-large").bind("click touchstart",
        function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $("header .menu").removeClass("active")
            } else {
                $(this).addClass("active");
                $("header .menu").addClass("active")
            }
        });
    for (var b = 0; b < $(".video .swiper-slide").size(); b++) {
        $(".video .guide").append("<a></a>")
    }
    $(".video .guide a").eq(0).addClass("active");
    $(".video .nth1, .video .nth2").append('<div class="shade"></div>');
    videoSwiper = new Swiper(".video .swiper-container", {
        loop: true,
        autoplay: 5000,
        grabCursor: true,
        onSlideChangeStart: function() {
            resetVideoSwiperAnimation()
        },
        onSlideChangeEnd: function() {
            $(".video .guide a").removeClass("active").eq(videoSwiper.activeLoopIndex).addClass("active");
            videoSwiperAnimation()
        },
        onTouchEnd: function() {
            videoSwiper.startAutoplay()
        }
    });
    videoSwiper.stopAutoplay();
    $(".video .guide a").bind("mouseover click touchstart",
        function(f) {
            f.preventDefault();
            videoSwiper.stopAutoplay();
            videoSwiper.swipeTo($(this).index())
        }).mouseout(function(f) {
            videoSwiper.startAutoplay()
        });
    $(".video .movedown").bind("click touchstart",
        function() {
            if (stopSwitch) {
                return
            }
            stopSwitch = true;
            pageIndex = 1;
            pageSwitching()
        });
    $(".video .news").slide({
        mainCell: "ul",
        autoPage: true,
        effect: "top",
        interTime: 3500,
        autoPlay: true,
        vis: 1
    });
    $(".business .box").append("<label></label>");
    $(".business ul.items li").prepend('<u class="cl"></u><u class="cr"></u>');
    $(".cases .swiper-container").after('<a class="prev" href="javascript:;"></a><div class="swiper-container mini">' + $(".cases .swiper-container").html() + '</div><a class="next" href="javascript:;"></a>').after('<div class="swiper-container xs">' + $(".cases .swiper-container").html() + "</div>");
    $(".cases .xs .swiper-slide img").addClass("img-responsive");
    $(".cases .swiper-slide a").prepend('<div class="shade"><u></u></div>').append('<div class="bg"><u></u></div>');

    $(".cases a.prev").bind("click touchstart",
        function(f) {
            f.preventDefault();
            casesSwiper.swipePrev();
            casesSwiper.startAutoplay()
        });
    $(".cases a.next").bind("click touchstart",
        function(f) {
            f.preventDefault();
            casesSwiper.swipeNext();
            casesSwiper.startAutoplay()
        });
    $(".clients ul.items").after('<ul class="mini list-inline">' + $(".clients ul.items").html() + "</ul>");
    $(".clients ul").prepend('<li class="bg all"></li><li class="bg one"></li>');
    $(".clients ul.items li").not(".bg").bind("mouseover",
        function() {
            var e = $(this).position();
            $(this).parent().find(".one").show().css("top", e.top).css("left", e.left);
            $(".clients ul.items li").removeClass("active");
            $(this).addClass("active")
        });
    $(".clients ul.items").bind("mouseleave",
        function() {
            $(".clients ul.items li").removeClass("active");
            $(".clients ul.items li.bg.one").hide()
        });
    $(".quality .swiper-container").after('<a class="prev" href="javascript:;"></a><div class="swiper-container mini">' + $(".quality .swiper-container").html() + '</div><a class="next" href="javascript:;"></a>');
    qualitySwiper = new Swiper(".quality .swiper-container.mini", {
        loop: true,
        autoplay: 5000,
        grabCursor: true,
        onTouchEnd: function() {
            qualitySwiper.startAutoplay()
        }
    });

    $(".quality a.prev").bind("click touchstart",
        function(f) {
            f.preventDefault();
            qualitySwiper.swipePrev();
            qualitySwiper.startAutoplay()
        });
    $(".quality a.next").bind("click touchstart",
        function(f) {
            f.preventDefault();
            qualitySwiper.swipeNext();
            qualitySwiper.startAutoplay()
        });
    $(".marketing").append('<div class="shade"></div>');
    $(".marketing ul.items li").prepend('<u class="cl"></u><u class="cr"></u>');
    $(".aboutus .exp").after('<div class="expBg"></div><div class="shade"></div>');
    var c = new Swiper(".aboutus .swiper-container", {
        loop: true,
        autoplay: 4500,
        grabCursor: true,
        spaceBetween: 30,
        nextButton: ".aboutus .swiper-button-next",
        prevButton: ".aboutus .swiper-button-prev",
        autoplayDisableOnInteraction: false
    });
    $(".contact .box").append('<div class="below"><i></i><p style="margin-top:20px;">Copyright © 2009-2015,wangtiansoft.com,All rights reserved 版权所有 © 网田科技 京ICP备16009733号-1</p></div>');
    $(".contact .box .wechat img").addClass("img-responsive");
    $(window).bind("resize",
        function(h) {
            initLayout();
            var g = false;
            var f = "body>section.active";
            if (pageIndex == 0) {
                f = ".video .swiper-slide.active .box"
            }
            $(f).bind(whichTransitionEvent(),
                function() {
                    initLayout();
                    if (g) {
                        return
                    } else {
                        g = true
                    }
                    pageSwitching();
                    $("header .menu").trigger("mouseleave");
                    $(".dock").css("top", ($(window).height() - $(".dock").height()) / 2 + 35)
                })
        });
    dockEvent();
    var d = whichTransitionEvent();
    if (d == undefined) {
        initLayout();
        var a = '$("div.welcome").animate({opacity:"0", zIndex:"-1"}, 500, "swing", function(){ pageSwitching(); })';
        setTimeout(a, 600);
        pageSwitching();


    } else {
        $("div.welcome").animate({
                opacity: "0",
                zIndex: "-1"
            },
            500, "swing",
            function() {
                initLayout();
                pageSwitching();
                scrollContact();
            })
    }
}
function initLayout() {
    $("body>section, .video .swiper-container, .video .swiper-slide").height($(window).height());
    var f = $("header").height();
    var e = 70;
    if (f == 42) {
        e = 60
    } else {
        if (f == 0) {
            e = 0
        }
    }
    var c = $(".video .news").offset().top;
    if (c == 0) {
        c = $(".video .guide").offset().top
    }
    c = c + f;
    $(".video .swiper-slide").each(function(k, m) {
        if ($(m).hasClass("nth1")) {
            var n = parseInt((c - $(m).find(".box").height()) / 2);
            var l = $(m).find(".left").width() + $(m).find(".box").width();
            $(m).find(".box").css("margin-top", n).css("width", l);
            $(m).find(".shade").css("top", n - 711)
        } else {
            if ($(m).hasClass("nth2")) {
                var n = parseInt((c - $(m).find(".box").height()) / 2);
                $(m).find(".box").css("top", n)
            } else {
                if ($(m).hasClass("nth3")) {
                    boxHeight = 207;
                    if ($(m).find(".box .bottom").css("font-size") == "12px") {
                        boxHeight = 134
                    }
                    var n = parseInt((c - boxHeight) / 2);
                    $(m).find(".box").css("margin-top", n)
                } else {
                    if ($(m).hasClass("nth4")) {
                        var n = parseInt((c - $(m).find(".box").height()) / 2);
                        $(m).find(".box").css("margin-top", n)
                    }
                }
            }
        }
    });
    var h = $(".business ul.items li");
    if ($(window).width() > 1000) {
        var b = h.css("margin-left").replace("px", "");
        var a = h.outerWidth() * h.size() + b * 2 * h.size() + 4 * (h.size() - 1) + 2;
        $(".business ul.items").width(a);
        $('.solution').width(a);
    } else {
        var g = h.outerWidth() + 25;
        var i = parseInt($(window).width() / g);
        $(".business ul.items").width(g * i + 2);
        $('.solution').width(g * i + 2);
    }
    var d = $(".business .box");
    var j = parseInt(($(window).height() - d.height() + e) / 2);
    d.css("top", j);
    d = $(".cases .box");
    j = parseInt(($(window).height() - d.height() + e) / 2);
    if(j>0){
        d.css("top", j);
    }else{
        d.css("top", 100);
    }
    d = $(".clients .box");
    j = parseInt(($(window).height() - d.height() + e) / 2);
    d.css("top", j);
    d = $(".quality .box");
    console.log(d.height());
    j = parseInt(($(window).height() - d.height() + e) / 2);
    d.css("top", j);
    d = $(".contact .box");
    j = parseInt(($(window).height() - d.height() + e) / 2);
    d.css("top", j)
}

function videoSwiperAnimation() {
    var b = $(".video .swiper-container .nth" + (videoSwiper.activeLoopIndex + 1).toString()).addClass("active");
    if (videoSwiper.activeLoopIndex == 1) {
        if (b.find(".box").width() == $(window).width()) {
            b.find(".box").css("left", 0)
        } else {
            var a = $(window).width() / 2 - b.find(".box").width() - 30;
            b.find(".box").css("left", a)
        }
    }
}
function resetVideoSwiperAnimation() {
    if (!loopPlayback) {
        return
    }
    $(".video .swiper-slide").removeClass("active");
    $(".video .swiper-container .nth2 .box").css("left", -350)
}
function sectionAnimation() {
    if (pageIndex == 0) {
        videoSwiper.startAutoplay();
        videoSwiperAnimation();
        return
    } else {
        videoSwiper.stopAutoplay()
    }
    var f = $("body>section").eq(pageIndex).addClass("active");
    if (pageIndex == 2) {
        var c = $(".cases a.prev");
        var b = $(".cases a.next");
        if (c.css("display") == "block") {
            var g = $(".cases .mini").position().top + 140;
            c.css("top", g);
            b.css("top", g)
        }
    } else {
        if (pageIndex == 3) {
            var d = parseInt($(".clients ul.items").height() / $(".clients ul.items li.one").height());
            var a = parseInt($(".clients ul.items").width() / $(".clients ul.items li.one").width());
            $(".clients ul.items li:gt(1)").each(function(e, h) {
                if ((e + 1) % a != 0) {
                    $(this).addClass("r")
                } else {
                    $(this).removeClass("r")
                }
                if (e < a * (d - 1)) {
                    $(this).addClass("b")
                } else {
                    $(this).removeClass("b")
                }
            })
        } else {
            if (pageIndex == 4) {
                c = $(".quality a.prev");
                b = $(".quality a.next");
                if (c.css("display") == "block") {
                    var g = $(".quality .mini").position().top + 140;
                    c.css("top", g);
                    b.css("top", g)
                }
            }
        }
    }
}
function resetSectionAnimation() {
    if (!loopPlayback) {
        return
    }
    $("body>section").removeClass("active")
}
function pageSwitching() {
    if (pageIndex < 0) {
        pageIndex = 0;
        stopSwitch = false;
        return
    }
    if (pageIndex >= $("body>section").size()) {
        pageIndex = $("body>section").size() - 1;
        stopSwitch = false;
        return
    }
    var a = false;
    $("html,body").stop().animate({
            scrollTop: $("body>section").eq(pageIndex).offset().top
        },
        300, "swing",
        function() {
            if (a) {
                return
            } else {
                a = true
            }
            resetVideoSwiperAnimation();
            resetSectionAnimation();
            sectionAnimation();
            stopSwitch = false
        });
    if (pageIndex > 0) {
        $("header").addClass("fixed")
    } else {
        $("header").removeClass("fixed")
    }
    if(pageIndex <= 4){
        $("header .menu li").removeClass("active").eq(pageIndex).addClass("active");
        $("header .menu").trigger("mouseleave")
    }
    }

function dockEvent() {
    $(".dock").height($(".dock ul.icons li").length * 50 + $(".dock a.switch").height() + 20).css("top", ($(window).height() - $(".dock").height()) / 2 + 35);
    $(".dock ul.icons li i").bind("mouseover click touchstart",
        function() {
            $(".dock ul.icons li").removeClass("active");
            $(this).parent().addClass("active")
        });
    $(".dock ul.icons li").bind("mouseleave",
        function() {
            $(".dock ul.icons li").removeClass("active")
        });
    $(".dock ul.icons li.up i").bind("click touchstart",
        function() {
            pageIndex--;
            pageSwitching()
        });
    $(".dock ul.icons li.down i").bind("click touchstart",
        function() {
            pageIndex++;
            pageSwitching()
        });
    $(".dock a.switch").bind("click",
        function() {
            if ($(this).hasClass("off")) {
                $(".dock").removeClass("close");
                $(this).removeClass("off")
            } else {
                $(".dock ul.icons li").removeClass("active");
                $(".dock").addClass("close");
                $(this).addClass("off")
            }
        })
}
function whichTransitionEvent() {

    var a;
    var b = document.createElement("qianzhu");

    var c = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        MSTransition: "msTransitionEnd",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    };

    for (a in c) {
        if (b.style[a] !== undefined) {
            return c[a];
        }
    }

}
function scrollContact() {
    var a = (window.location.hash == "#contact");
    if (a) {
        $(".menu li").eq(7).trigger("click")
    }
};

