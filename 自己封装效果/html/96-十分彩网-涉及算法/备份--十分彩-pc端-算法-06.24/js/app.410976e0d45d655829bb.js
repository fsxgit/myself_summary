webpackJsonp([4, 3], [function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function n(t) {
        console.log(t);
        var e = t.msg, a = t.status, s = (t.resolve, t.error, t.T, t.S);
        a && (e += a), s && (e += "_" + s), layer.alert(e), state.turning && (state.turning = !1), delete t.resolve, _catch(t)
    }

    function r(t) {
        var e, a, s, n;
        for (var i in t)e = t[i], s = "undefined" == typeof e ? "undefined" : (0, _.default)(e), "object" === s && (e = r(e), e[1] && (n = n || {}, n[i] = e[1]), e = e[0]), "string" === s && (a = filterXSS(e), e !== a && (n = n || {}, n[i] = {
            old: e,
            new: a
        }), e = a), t[i] = e;
        return [t, n]
    }

    function i(t) {
        function e(t) {
            var e = localStorage.getItem(t);
            try {
                e = JSON.parse(e)
            } catch (t) {
            }
            return e
        }

        for (var a, s = t.length - 1; s >= 0; s--) {
            if (a = e(t[s]), null !== a) {
                switch (t[s]) {
                    case"SiteConfig":
                        console.log(a), a.Style && a.Style.Id || (a = "")
                }
                B[t[s]] = a
            }
            state[t[s]] = a
        }
    }

    function o(t, e, a, s) {
        this.interval = t, this.timeBegin = e, this.timeEnd = a, this.SerTime = s
    }

    var l = a(7), c = s(l), u = a(6), d = s(u), v = a(27), m = s(v), f = a(12), p = s(f), h = a(185), _ = s(h), g = a(76), y = s(g), b = a(493), C = s(b), w = a(11), S = s(w), x = a(314), A = s(x), k = a(176), D = s(k), M = a(174), N = s(M), B = {};
    window.Vue = y.default, y.default.use(N.default), y.default.use(C.default), y.default.use(S.default), y.default.filter("filNum", function (t) {
        return String(Math.floor(t)).length > 7 ? Math.floor(t) : t
    }), y.default.directive("chaseBack", {
        bind: function (t, e, a) {
            var s = a.context, n = s.$store;
            t.addEventListener("click", function () {
                var t = n.state.lt.isChase;
                t === !0 && n.commit("lt_backChase")
            })
        }
    }), y.default.directive("clickShade", {
        bind: function (t, e, a) {
            a.context;
            t.addEventListener("click", function (e) {
                var a, s, n, r, i, o, l = t.getBoundingClientRect();
                a = l.top, s = l.left, n = t.offsetWidth, r = t.offsetHeight, i = e.clientX + document.body.scrollLeft, o = e.clientY + document.body.scrollTop;
                var c = document.createElement("div");
                c.style.position = "absolute", c.style.top = a + "px", c.style.left = s + "px", c.style.width = n + "px", c.style.height = r + "px", c.style.overflow = "hidden", c.style.zIndex = 10;
                var u = document.body;
                u.appendChild(c), n = n > r ? n : r;
                var d = document.createElement("div");
                d.style.position = "absolute", d.style.width = 2 * n + "px", d.style.height = 2 * n + "px", d.style.top = o - a - n + "px", d.style.left = i - s - n + "px", d.style.borderRadius = "100%", d.style.transform = "scale(.01)", d.style.transition = "transform .5s", d.style.background = "rgba(69,84,103,.2)", c.appendChild(d), setTimeout(function () {
                    d.style.transform = "scale(1.414)", setTimeout(function () {
                        c.parentNode.removeChild(c)
                    }, 500)
                }, 100)
            })
        }
    }), y.default.directive("copyBtn", {
        bind: function (t, e, a) {
            t.addEventListener("click", function () {
                var e = Array.prototype.filter.call(t.parentNode.children, function (e) {
                    return e !== t
                }), a = e[0];
                a.select(), document.execCommand("copy")
            })
        }
    }), Date.prototype.format = function (t) {
        var e = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var a in e)new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[a] : ("00" + e[a]).substr(("" + e[a]).length)));
        return t
    }, window._Tool = {
        Array: {
            Unique: function (t) {
                for (var e = [], a = 0; a < t.length; a++)e.indexOf(t[a]) == -1 && e.push(t[a]);
                return e
            }
        }, Date: {
            getTime: function () {
                return (new Date).getTime() - state.Difftime || 0
            }
        }
    }, document.body.oncontextmenu = function () {
        return !1
    }, localStorage.getItem("console") || (console.log = function () {
    }), window._catch = function (t) {
        var e, a = [];
        for (var s in t)e = t[s], "object" === ("undefined" == typeof e ? "undefined" : (0, _.default)(e)) && (e = encodeURIComponent((0, p.default)(e))), a.push(s + "=" + e);
        a = a.join("&");
        var n = state.UserName || t.UserName;
        n = n ? "/catch?U=" + n : "/catch", fetch(n, {
            credentials: "same-origin",
            method: "POST",
            cache: "no-store",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: a
        })
    };
    var P = filterXSS.whiteList;
    for (var I in P)P[I].push("style");
    var T = [];
    window._fetch = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 !== e.wait)var a = layer.msgWait(e.wait);
        t = r(t), t[1] && console.log(t[1]), t = t[0], t.SourceName = "PC";
        var s, i = [];
        for (var o in t)s = t[o], "object" === ("undefined" == typeof s ? "undefined" : (0, _.default)(s)) && (s = encodeURIComponent((0, p.default)(s))), i.push(o + "=" + s);
        i = i.join("&");
        for (var l = (new Date).getTime(), o = 0; o < T.length; o++) {
            if (T[o][0] + 500 < l) {
                T.length = o;
                break
            }
            if (T[o][1] === i)return {
                then: function () {
                    console.log("重复发送")
                }
            }
        }
        return T.unshift([l, i]), new m.default(function (s, o) {
            var u = state.turning && setTimeout(function () {
                    var t = "网络请求超时，请重试";
                    n({msg: t}, s), o()
                }, 1e4), v = state.UserName || t.UserName;
            v = v ? "/tools/ssc_ajax.ashx?U=" + v : "/tools/ssc_ajax.ashx", fetch(v, {
                credentials: "same-origin",
                method: "POST",
                cache: "no-store",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: i
            }).then(function (o) {
                layer.close(a);
                var v = ((new Date).getTime() - l) / 1e3, m = {};
                try {
                    var f = !0, h = !1, _ = void 0;
                    try {
                        for (var g, y = (0, d.default)(o.headers.entries()); !(f = (g = y.next()).done); f = !0) {
                            var b = g.value;
                            b[0] = b[0].toLowerCase(), ["a", "x-sec"].indexOf(b[0]) > -1 && (m[b[0]] = b[1])
                        }
                    } catch (t) {
                        h = !0, _ = t
                    } finally {
                        try {
                            !f && y.return && y.return()
                        } finally {
                            if (h)throw _
                        }
                    }
                } catch (t) {
                    m = {"x-sec": "I", a: "E"}
                }
                var C = m.a ? m.a + (m["x-sec"] ? "_" + m["x-sec"] : "") : null;
                if (200 !== o.status) {
                    var w = "网络错误";
                    return void n({msg: w, status: o.status, resolve: s, T: v, S: C, data: t})
                }
                o.text().then(function (a) {
                    if ("GetImageCode" === t.Action)return void s(a);
                    try {
                        a = JSON.parse(a)
                    } catch (r) {
                        if ("<" === a[0])_fetch(t, e).then(function (t) {
                            s(t)
                        }); else {
                            var i = "网络数据解析错误";
                            n({msg: i, json: a, resolve: s, T: v, S: C, data: t})
                        }
                    }
                    if ("string" != typeof a) {
                        a = r(a), a[1] && console.log(a[1]), a = a[0], state.turning && clearTimeout(u);
                        var o;
                        if ("GetInitData" === t.Action && (1 === a.Code || 0 === a.Code)) {
                            a = RootApp.SetFilter(a);
                            var l = a.BackData;
                            RootApp.WatchInitData(l), RootApp.SaveInitData(l), "{}" !== (0, p.default)(a.CacheData) && localStorage.setItem("CacheData", (0, p.default)((0, c.default)(CacheData, a.CacheData)))
                        }
                        !function () {
                            switch (a.Code) {
                                case 0:
                                    if (state.UserName)layer.alert("由于您长时间未操作，已自动退出，需要重新登录", function () {
                                        RootApp.Logout(), router.push("/login")
                                    }), o = !0; else {
                                        var n = RootApp.$route.meta;
                                        n.user === !0 && (router.push("/login"), o = !0)
                                    }
                                    break;
                                case-7:
                                    store.commit("SetMaintain", a.BackData), router.push("/maintain"), o = !0;
                                    break;
                                case-8:
                                    layer.alert("您的账号已被冻结，详情请咨询客服。", function () {
                                        RootApp.Logout();
                                        var t = RootApp._route.matched[0];
                                        t = t && t.meta, router.push("/login")
                                    }), o = !0;
                                    break;
                                case-1:
                                    "空" === a.StrCode && (console.log("补发接口"), _fetch(t, e).then(function (t) {
                                        s(t)
                                    }), o = !0)
                            }
                            0 === t.Action.search("Verify") && a.Code > -1 && (state.UserVerify = t.Action.replace("Verify", "") + ",")
                        }(), o || s(a)
                    }
                }).catch(function (t) {
                    var e = "网络数据错误";
                    n({msg: e, error: t, resolve: s, T: v, S: C, str: i})
                })
            }).catch(function (t) {
                var e = "网络错误，请检查网络状态";
                n({msg: e, error: t, resolve: s, str: i})
            })
        })
    }, window._fetchT = function (t) {
        return _fetch(t)
    };
    window.router = new C.default({
        routes: D.default,
        mode: "history",
        linkActiveClass: "curr",
        scrollBehavior: function (t, e, a) {
            return a ? a : {x: 0, y: 0}
        }
    });
    var R = ["UserHasSafePwd", "UserSafeQuestions", "UserMobile", "UserMail", "UserName", "UserPhoto", "UserNickName", "UserFirstCardInfo", "AgentRebate", "UserUpGradeBonus", "UserQQ", "UserMobile", "UserMail", "UserBirthDay", "UserGradeGrow", "UserSex", "UserHasSafePwd", "UserBalance", "UserFirstCardInfo", "UserBankCardList", "UserLastLoginInfo", "RebateK3", "RebateSSC", "RebateSYX5", "RebateKL8", "RebatePK10", "RebatePL35", "RebateFC3D"], L = ["SysActivity", "LotteryConfig", "LotteryList", "GradeList", "RewardData", "DefaultPhotoList", "NoticeData", "ActivityConfig", "BannerList", "HallBanner", "SiteConfig", "CloudUrl", "FooterConfig"], G = ["ServiceRating", "RankingList"], U = L.concat(R).concat(G);
    U.push("Difftime"), window.state = a(51), i(U), window.CacheData = localStorage.getItem("CacheData"), CacheData = CacheData ? JSON.parse(CacheData) : {};
    var $ = localStorage.getItem("LocalCacheData");
    $ = $ ? JSON.parse($) : {}, window.store = new S.default.Store({
        state: state, getters: {
            PhotoPath: function (t) {
                return t.constant.ImgHost + t.constant.PhotoPath
            }, WithdrwHtml: function (t) {
                return "login"
            }, NoDataDom: function (t) {
                return state.tpl.noData.join("msg")
            }
        }, mutations: {
            SaveInitData: function (t, e) {
                for (var a in e)t[a] = e[a], U.indexOf(a) + 1 && (null === e[a] ? t[a] = e[a] = "" : "object" == (0, _.default)(e[a]) && (e[a] = (0, p.default)(e[a])), localStorage.setItem(a, e[a]))
            }, ClearInitData: function (t, e) {
                for (var a = e.length - 1; a >= 0; a--)localStorage.removeItem(e[a]), t[e[a]] = null
            }, setDifftime: function (t, e) {
                var a = e[0].interval, s = 0;
                e.forEach(function (t, e) {
                    t.interval < a && (a = t.interval, s = e)
                });
                var n = e[s], r = n.timeBegin, i = n.timeEnd, o = n.SerTime, l = r + Math.floor((i - r) / 2) - o;
                t.Difftime = l, localStorage.setItem("Difftime", l)
            }, SetMaintain: function (t, e) {
                t.Maintain = e
            }, toggleAllLottery: function (t, e) {
                t.showAllLottery = e
            }, setTurning: function (t, e) {
                t.turning = e
            }
        }
    });
    var O = {RequirementArr: [], CallbackArr: [], TimeOut: null};
    window.RootApp = {
        Logout: function () {
            store.commit("ClearInitData", R), store.state.lt && (store.commit("lt_setBetRecord", []), store.commit("lt_setChaseRecord", []), store.commit("lt_setWhichRecord", "BetRecord")), sessionStorage.clear()
        }, Login: function (t, e) {
            var a = ["AgentRebate", "UserName", "UserPhoto"];
            this.SaveInitData({UserName: t}), this.GetInitData(a, e)
        }, SetFilter: function (t) {
            var e = t.BackData;
            t.CacheData;
            if (function (t) {
                    t && !t.State && setTimeout(function () {
                        layer.open({
                            shadeClose: !1,
                            title: "恭喜",
                            content: "恭喜您成功晋级，当前等级为VIP" + t.Grade + "，赶紧到活动中心领取奖励吧。",
                            className: "layerConfirm",
                            btn: ["领取奖励", "留在本页"],
                            yes: function (t) {
                                layer.close(t), router.push("/activity")
                            }
                        })
                    }, 100)
                }(e.UserUpGradeBonus), function (t) {
                    if (t) {
                        var a = {};
                        t.forEach(function (t) {
                            a[t.PayName] = [t.MinMoney, t.MaxMoney]
                        }), e.PayLimit = a
                    }
                }(e.PayLimit), function (t) {
                    if (t && t.length) {
                        e.LotteryList = {};
                        for (var a, s = t.length - 1; s >= 0; s--)a = t[s].LotteryCode, "1202" === a && (t[s].LotteryName = "排列3"), e.LotteryList[a] = t[s]
                    }
                }(e.LotteryList), e.NoticeData && e.NoticeData.length && e.NoticeData.length > 2 && (e.NoticeData.length = 2), e.GradeList && e.GradeList.length)for (var a = e.GradeList.length - 1; a >= 0; a--)e.GradeList[a].Grade = Number(e.GradeList[a].Grade), e.GradeList[a].GradeGrow = Number(e.GradeList[a].GradeGrow), e.GradeList[a].Bonus = Number(e.GradeList[a].Bonus), e.GradeList[a].JumpBonus = Number(e.GradeList[a].JumpBonus);
            return function (t) {
                if (t)for (var e = t.length - 1; e >= 0; e--)"object" == (0, _.default)(t[e].Img) && (t[e].Img = t[e].Img && t[e].Img[0])
            }(e.ActivityConfig), function (t) {
                t && 0 === t.length && delete e.RankingList
            }(e.RankingList), function () {
                for (var t = [], a = G.length - 1; a >= 0; a--)e[G[a]] && t.push(G[a]);
                var s = t.length;
                if (console.log(s), s) {
                    var n = _Tool.Date.getTime();
                    n /= 864e5, n = Math.floor(n) % 366, console.log(n);
                    for (var a = s - 1; a >= 0; a--)$[G[a]] = n;
                    localStorage.setItem("LocalCacheData", (0, p.default)($))
                }
            }(), t
        }, SaveInitData: function (t) {
            store.commit("SaveInitData", t)
        }, WatchInitData: function (t) {
            console.log(t);
            var e = document.getElementsByTagName("head")[0];
            for (var s in t)switch (s) {
                case"SiteConfig":
                    !function (t) {
                        document.title = t.Name, t.PCLogo || (t.PCLogo = {}, t.PCLogo.logo1 = "");
                        var s = t.PCLogo.logo1;
                        if (s) {
                            s = s.split("/")[1];
                            var n = document.createElement("link");
                            switch (n.setAttribute("type", "image/x-icon"), n.setAttribute("rel", "shortcut icon"), n.href = "//static.imagess-google.com/ico/" + s + ".ico", e.appendChild(n), s) {
                                case"gpc":
                                    a.e(2, function () {
                                        a(169)
                                    });
                                    break;
                                case"yingli":
                                    a.e(1, function () {
                                        a(170)
                                    });
                                    break;
                                case"ylcp":
                                    a.e(0, function () {
                                        a(171)
                                    })
                            }
                        }
                    }(t.SiteConfig)
            }
        }, AjaxGetInitData: function (t, e) {
            state.needVerify = 0, sessionStorage.setItem("needVerify", state.needVerify);
            var a = {Action: "GetInitData", Requirement: t, CacheData: CacheData};
            _fetch(a).then(function (t) {
                1 === t.Code || 0 === t.Code ? e && e(state) : layer.msgWarn(t.StrCode)
            })
        }, InitDataSubscriber: function (t, e) {
            var a = this;
            console.log((new Date).getTime(), t), clearTimeout(O.TimeOut), O.RequirementArr = O.RequirementArr.concat(t), e && O.CallbackArr.push(e), O.TimeOut = setTimeout(function () {
                var t = O.CallbackArr, e = _Tool.Array.Unique(O.RequirementArr);
                O.CallbackArr = [], O.RequirementArr = [], a.AjaxGetInitData(e, function (e) {
                    for (var a = t.length - 1; a >= 0; a--)t[a](e)
                })
            }, 100)
        }, GetInitData: function (t, e) {
            t = t.concat(L), state.UserName && t.push("UserUpGradeBonus");
            for (var a = [], s = ((new Date).format("yyMMdd"), t.length - 1); s >= 0; s--)switch (t[s]) {
                case"UserBalance":
                case"UserWithdrawAvail":
                case"WithdrawRemainTimes":
                case"PayLimit":
                case"RechargeWayWeixin":
                case"RechargeWayAlipay":
                case"RechargeWayBank":
                    a.push(t[s]);
                    break;
                default:
                    if (null == state[t[s]])a.push(t[s]); else if (G.indexOf(t[s]) > -1) {
                        console.log("核对本地版本时间");
                        var n = _Tool.Date.getTime();
                        n /= 864e5, n = Math.floor(n) % 366, $[t[s]] != n ? (console.log(t[s] + "过期"), n % 864e5 > 72e3 && (console.log(t[s] + "更新"), a.push(t[s]))) : console.log(t[s] + "没过期")
                    }
            }
            return a.length ? void this.InitDataSubscriber(a, e) : void(e && e(state))
        }, getServerTime: function () {
            var t = 0, e = [];
            return function (a) {
                var s = this, n = (new Date).getTime();
                _fetch({Action: "GetServerTimeMillisecond"}).then(function (r) {
                    var i = (new Date).getTime(), l = i - n, c = /^\d{13}$/;
                    if (r.Code > -1 && c.test(r.Data) && e.push(new o(l, i, n, r.Data)), t > 4) {
                        var u = e.every(function (t) {
                            return !t.SerTime
                        });
                        if (u) {
                            t = 0;
                            var d = 0;
                            try {
                                d = 60 * ((new Date).getTimezoneOffset() + 480)
                            } catch (t) {
                                layer.msgWarn("不支持getTimezoneOffset")
                            }
                            store.commit("setTmpDifftime", d), layer.url("因无法同步服务器时间,您将无法投注,请检查网络情况", "/lotteryHall"), e = [], a && a()
                        } else store.commit("setDifftime", e), t = 0, e = [], a && a()
                    } else l > 1e3 ? (t++, s.getServerTime(a)) : 1 === r.Code && r.Data ? (store.commit("setDifftime", e), t = 0, e = [], a && a()) : (t++, s.getServerTime(a))
                })
            }
        }(), beforEnter: function (t) {
            var e = t.matched[0].meta;
            if (e.user && (state.UserName ? e.agent && (state.AgentRebate || router.push("/notfount")) : (state.login2path = t.path, router.push("/login"))), e.verify) {
                var a = 1 === e.verify ? 1 : state[e.verify];
                "/setSafePwd" === t.path && (a *= 1), !a || state.UserVerify && e.from.search(state.UserVerify) != -1 || (console.log("条件不足"), router.go(-1))
            }
        }, QueryNotFound: function () {
            router.push("/notfount")
        }
    }, function () {
        var t = D.default.length, e = location.pathname.toLowerCase();
        if (/^\?id=\d{8}$/.test(location.search) && ("/" === e || "/index" === e || "/index.html" === e))return console.log("符合注册"), void router.push("/register" + location.search);
        if ("/" !== e) {
            e.search(".html") > -1 && (router.push(location.pathname.replace(".html", "") + location.search), e = e.replace(".html", ""));
            for (var a = 0; a < t; a++) {
                var s = D.default[a].path.toLowerCase().split("/")[1];
                if (s && e.indexOf(s) > -1) {
                    RootApp.beforEnter({matched: [D.default[a]]});
                    break
                }
            }
        }
    }(), window.RootApp = new y.default({
        el: "#app",
        store: store,
        router: router,
        methods: window.RootApp,
        render: function (t) {
            return t(A.default)
        }
    }), RootApp.WatchInitData(B), function () {
        var t = '<span class="iconfont">&#xe610;</span>';
        layer.icon = {}, layer.icon.load = state.tpl.load, layer.load = function () {
            layer.open({type: 2})
        }, layer.msg = function (t, e) {
            return this.open({content: t, time: e ? e - 1 : 3, style: "fill:#ececec", className: "msg"})
        }, layer.msgWarn = function (t, e) {
            return this.alert(t)
        }, layer.msgTip = function (e, a) {
            return this.msg(t + e, a)
        }, layer.msgWait = function (t, e) {
            return layer.wait = layer.open({type: 2, shadeClose: 0, className: "msgWait"}), layer.wait
        }, layer.url = function (t, e) {
            return layer.open({
                className: "layerConfirm", title: "温馨提示", content: t, btn: ["确定"], end: function () {
                    "string" == typeof e ? router.push(e) : router.go(e)
                }
            })
        }, layer.alert = function (t, e) {
            return layer.open({
                className: "layerConfirm",
                title: "温馨提示",
                shadeClose: !1,
                content: t,
                btn: ["确定"],
                end: e
            })
        }, layer.confirm = function (t, e, a, s, n) {
            return e.length || (n = s, s = a, a = e, e = ["确定", "取消"]), layer.open({
                className: "layerConfirm",
                title: "温馨提示",
                shadeClose: !1,
                content: t,
                btn: e,
                yes: function (t) {
                    a(), layer.close(t)
                },
                no: s,
                end: n
            })
        }, layer.closeAll = function () {
            for (var t = document.getElementsByClassName("layermbox"), e = 0; e < t.length; e++) {
                var a = t[e].getAttribute("index");
                a && layer.close(a)
            }
        }
    }(), router.beforeEach(function (t, e, a) {
        state.UserName && state.UserName !== localStorage.getItem("UserName") && i(R), state.turning = !0, RootApp.beforEnter(t), a()
    }), router.afterEach(function (t, e) {
        state.turning = !1, layer.closeAll(), state.needVerify++, sessionStorage.setItem("needVerify", state.needVerify)
    }), document.addEventListener("copy", function (t) {
        var e = t.target, a = [].filter.call(e.parentNode.children, function (t) {
            return t !== e
        })[0];
        a && a.className.indexOf("copy") > -1 && layer.alert('<b style="color:red">已将内容复制到剪切板</b>')
    }), RootApp.GetInitData([])
}, function (t, e, a) {
    var s, n, r = a(465);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(259), s = a(110);
    var r = a(430);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-33a2ca04", t.exports = s
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function n(t, e, a) {
        for (var s = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r];
            e.indexOf(t[r]) === -1 ? n.push(o) : s.push(o)
        }
        var l = s.length, c = n.length, u = e.length;
        return l * $(u - 1, a) + c * $(u, a)
    }

    function r(t) {
        for (var e = {}, a = [], s = 0; s < t.length; s++)e[t[s]] || (e[t[s]] = !0, a.push(t[s]));
        return a
    }

    function i(t, e) {
        for (var a = t.length, s = 0; s < a; s++)for (var n = 0; n < a; n++)for (var r = 0; r < a; r++)e([s, n, r])
    }

    function o(t, e) {
        for (var a = t.length, s = 0; s < a; s++)for (var n = 0; n < a; n++)e([s, n])
    }

    function l(t, e) {
        for (var a = 0, s = 0; s < t.length; s++)a += e(t[s]);
        return a
    }

    function c(t) {
        var e = {};
        for (var a in t)"string" == typeof a && (e[a] = t[a]);
        return e
    }

    function u(t, e, a) {
        var s = t.lt, n = t.lt.bet, r = e || n.betting_count, i = a || n.betting_number;
        if (this.lottery_code = s.lottery.LotteryCode, this.play_detail_code = s.lottery.LotteryCode + s.mode.mode, this.betting_number = i, this.betting_count = r, s.lottery.LotteryCode.indexOf("14") > -1 && "A10" === s.mode.mode ? this.betting_money = +(s.perbet * n.betting_model * n.graduation_count).toFixed(2) : this.betting_money = +(s.perbet * r * n.betting_model * n.graduation_count).toFixed(2), Array.isArray(s.award))var o = s.award[0]; else var o = s.award;
        this.betting_point = o + "-" + s.Rebate[s.lottery.LotteryType], this.betting_model = n.betting_model, this.betting_issuseNo = s.NowIssue, this.graduation_count = n.graduation_count, this.compress = n.compress
    }

    function d(t) {
        var e = t.lt.chaseConf, a = t.lt;
        this.before_issueNo = e.before_issueNo, this.before_eamings_cash = e.before_eamings_cash, this.after_eamings_cash = e.after_eamings_cash, this.before_earnings_rate = e.before_earnings_rate, this.after_earnings_rate = e.after_earnings_rate, this.isstop_afterwinning = +e.isstop_afterwinning, this.start_issueNo = a.NowIssue, this.lottery_code = a.lottery.LotteryCode, this.chase_money = 1 * statistics()[1], this.buy_count = e.buy_count, this.betting = v(a.basket, !0), this.shceme = a.scheme
    }

    function v(t, e) {
        return t.map(function (t) {
            var a = c(t);
            return a.compress && (a.betting_number = a.compress), e && (delete a.betting_issuseNo, delete a.graduation_count), delete a.compress, a
        })
    }

    function m(t, e) {
        function a(t, a) {
            return function () {
                var s = state.lt.Todaystr.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1/$2/$3"), n = Math.floor((Date.parse(s) - Date.parse(a)) / D), r = +(o > 72e6), i = ("00" + (n + t + r + e)).slice(-3);
                return s.slice(0, 4) + i
            }
        }

        function s(t, a, s, n) {
            return n || (n = 0), function () {
                for (var r = state.lt.Todaystr.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1/$2/$3"), i = "", o = 0; o < n; o++)i += "0";
                var l = Math.floor((Date.parse(r) - Date.parse(a)) / D);
                return i + (l * s + t + e)
            }
        }

        var n, r, i, o = ((new Date).getTime() - state.Difftime - P) % D;
        if (state.lt.PlanLen) {
            n = Math.floor(e / state.lt.PlanLen), r = e - n * state.lt.PlanLen;
            var l = state.lt.LotteryPlan[0];
            l.End < l.Start && l.Start < o && n++;
            var c, u = {
                1001: function () {
                    r >= 83 && o <= state.lt.LotteryPlan[state.lt.PlanLen - 1].End && n--
                },
                1406: s(68607, "2017/2/4", 89, 1),
                1302: s(807910, "2017/2/18", 179),
                1303: s(602481, "2017/2/18", 179),
                1201: a(33, "2017/2/9"),
                1202: a(33, "2017/2/9")
            };
            if (u[t] && (c = u[t]()), c)return c;
            if (n) {
                var d = new Date(state.lt.Todaystr.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3")).getTime();
                i = new Date(d + n * D).format("yyyyMMdd")
            } else i = state.lt.Todaystr;
            return i + state.lt.LotteryPlan[r].IssueNo
        }
    }

    function f(t, e) {
        switch (t[0]) {
            case"E":
            case"D":
                t = "F" + t.slice(1);
                break;
            case"B":
                t = "C" + t.slice(1);
                break;
            case"I":
                "I92" === t && (t = "I91"), "I94" !== t && "I95" !== t || (t = "I93")
        }
        for (var a = e, s = 0; s < a.length; s++)if (a[s].PlayCode === t)return a[s].Bonus
    }

    function p(t, e) {
        for (var a = 0; a < e.length; a++)if (e[a].PlayCode === t)return e[a].Bonus.indexOf(",") > -1 ? e[a].Bonus.split(",") : e[a].Bonus
    }

    function h(t, e) {
        for (var a = 0; a < e.length; a++)if (e[a].PlayCode === t)return e[a].Bonus
    }

    function _(t, e) {
        for (var a = 0, s = 0; s < t.length; s++)for (var n = 0; n < e.length; n++)t[s] !== e[n] && a++;
        return a
    }

    function g(t, e) {
        var a = t.value;
        return /^\d+$/.test(a) && +a ? a > T && (a = T, t.value = a, layer.msg("最多" + T + "倍")) : (a = e, t.value = a), +a
    }

    function y(t, e) {
        var a = t.value;
        return /^\d+$/.test(a) && +a ? a > R && (a = R, t.value = a, layer.msg("最多" + R + "期")) : (a = e, t.value = a), a
    }

    function b(t, e) {
        var a = t.value;
        return /^\d+$/.test(a) && +a ? a > L && (a = L, t.value = a, layer.msg("最多" + L + "%")) : (a = e, t.value = a), +(+a / 100).toFixed(2)
    }

    function C(t, e) {
        var a = t.value;
        return /^\d+$/.test(a) && +a || (a = e, t.value = a), a
    }

    function w(t, e) {
        for (var a = [], s = 0; s < t.length; s++)a.push(e[t[s]].length);
        return a
    }

    function S(t, e) {
        for (var a = [], s = t; s <= e; s++) {
            var n = ("0" + s).slice(-2);
            a.push(n)
        }
        return a
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.createStringArray = e.betSum = e.countSingle = e.checkInt = e.checkRate = e.checkIssue = e.checkMultiple = e.syx5_zx2 = e.Max_Expect_Rate = e.Max_Chase_Issue = e.Max_Rate = e.PERBET = e.GMT_DIF = e.SECOND_TIME = e.MINUTE_TIME = e.HOUR_TIME = e.DAY_TIME = e.getRebate = e.getMultipleRebate = e.getSSCRebate = e.computeIssue = e.deleteCompress = e.ChaseAjax = e.easyClone = e.BaseBet = e.bus = e.combSum3 = e.combSum2 = e.diff3 = e.diff2 = e.accumulate = e.normalSum3 = e.normalSum2 = e.unique = e.combNoRepeat = e.C = e.mul = e.factorial = void 0;
    var x = a(76), A = s(x), k = new A.default, D = 864e5, M = 36e5, N = 6e4, B = 1e3, P = -288e5, I = 2, T = 1e4, R = 50, L = 2e4, G = function () {
        var t = {};
        return function (e) {
            return t[e] ? t[e] : !(e < 0) && (0 === e ? 1 : 1 === e ? 1 : (t[e] = e * G(e - 1), t[e]))
        }
    }(), U = function () {
        var t = {};
        return function (e, a) {
            if (a.length < e)return 0;
            var s = 1, n = a.join(" ");
            if (t[n])return t[n];
            if (a.length)for (var r = 0; r < a.length; r++)s *= a[r];
            return t[n] = s, t[n]
        }
    }(), $ = function (t) {
        var e = {};
        return function (a, s) {
            if (a < s)return 0;
            if (a === s)return 1;
            var n = [a, s].join(" ");
            return e[n] ? e[n] : (e[n] = t(a) / (t(s) * t(a - s)), e[n])
        }
    }(G), O = function () {
        var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = {};
        return function (a) {
            if (e[a])return e[a];
            i(t, function (a) {
                for (var s = 0, n = 0; n < a.length; n++)s += t[a[n]];
                var r = a.join("");
                e[s] ? e[s].push(r) : e[s] = [r]
            });
            for (var s in e)e[s] = e[s].length;
            return e[a]
        }
    }(), j = function () {
        var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = {};
        return function (a) {
            if (e[a])return e[a];
            o(t, function (a) {
                for (var s = 0, n = 0; n < a.length; n++)s += t[a[n]];
                var r = a.join("");
                e[s] ? e[s].push(r) : e[s] = [r]
            });
            for (var s in e)e[s] = e[s].length;
            return e[a]
        }
    }(), F = function () {
        var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = {};
        return function (a) {
            if (e[a])return e[a];
            i(t, function (t) {
                var a = Math.max.apply({}, t), s = Math.min.apply({}, t), n = a - s, r = t.join("");
                e[n] ? e[n].push(r) : e[n] = [r]
            });
            for (var s in e)e[s] = e[s].length;
            return e[a]
        }
    }(), E = function () {
        var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = {};
        return function (a) {
            if (e[a])return e[a];
            o(t, function (t) {
                var a = Math.max.apply({}, t), s = Math.min.apply({}, t), n = a - s, r = t.join("");
                e[n] ? e[n].push(r) : e[n] = [r]
            });
            for (var s in e)e[s] = e[s].length;
            return e[a]
        }
    }(), H = function () {
        var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = {};
        return function (a) {
            if (e[a])return e[a];
            i(t, function (a) {
                if (a.some(function (t) {
                        return t !== a[0]
                    })) {
                    for (var s = 0, n = 0; n < a.length; n++)s += t[a[n]];
                    var r = a.sort(function (t, e) {
                        return t - e
                    }), i = r.join("");
                    e[s] ? e[s].indexOf(i) === -1 && e[s].push(i) : e[s] = [i]
                }
            });
            for (var s in e)e[s] = e[s].length;
            return e[a]
        }
    }(), V = function () {
        var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = {};
        return function (a) {
            if (e[a])return e[a];
            o(t, function (a) {
                if (a.some(function (t) {
                        return t !== a[0]
                    })) {
                    for (var s = 0, n = 0; n < a.length; n++)s += t[a[n]];
                    var r = a.sort(function (t, e) {
                        return t - e
                    }), i = r.join("");
                    e[s] ? e[s].indexOf(i) === -1 && e[s].push(i) : e[s] = [i]
                }
            });
            for (var s in e)e[s] = e[s].length;
            return e[a]
        }
    }();
    u.prototype.power2one = function (t) {
        this.graduation_count = 1, this.betting_money = +(t.lt.perbet * this.betting_count * this.betting_model * this.graduation_count).toFixed(2)
    }, u.prototype.setRebate = function (t, e) {
        var a = e.lt;
        this.betting_point = t + "-" + a.Rebate[a.lottery.LotteryType]
    }, u.prototype.setPower = function (t, e) {
        this.graduation_count = t, this.betting_money = +(e.lt.perbet * this.betting_count * this.betting_model * this.graduation_count).toFixed(2)
    };
    var z = function (t, e) {
        return w(t, e)[0]
    };
    e.factorial = G, e.mul = U, e.C = $, e.combNoRepeat = n, e.unique = r, e.normalSum2 = j, e.normalSum3 = O, e.accumulate = l, e.diff2 = E, e.diff3 = F, e.combSum2 = V, e.combSum3 = H, e.bus = k, e.BaseBet = u, e.easyClone = c, e.ChaseAjax = d, e.deleteCompress = v, e.computeIssue = m, e.getSSCRebate = f, e.getMultipleRebate = p, e.getRebate = h, e.DAY_TIME = D, e.HOUR_TIME = M, e.MINUTE_TIME = N, e.SECOND_TIME = B, e.GMT_DIF = P, e.PERBET = I, e.Max_Rate = T, e.Max_Chase_Issue = R, e.Max_Expect_Rate = L, e.syx5_zx2 = _, e.checkMultiple = g, e.checkIssue = y, e.checkRate = b, e.checkInt = C, e.countSingle = z, e.betSum = w, e.createStringArray = S
}, , , , , , function (t, e, a) {
    var s, n;
    a(263);
    var r = a(435);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-420621a5", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(248), s = a(109);
    var r = a(417);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, , , , , , , , , , , , , function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = {
        methods: {
            moneyFormat: function (t) {
                var e = t.target.value;
                e = e.trim();
                var a = /^[0-9]*$/, s = a.test(e);
                return s === !0 && (e = +e, this.$va.refreshValue("Money", e)), e
            }
        }
    };
    e.default = a
}, , , function (t, e, a) {
    var s, n;
    a(241), s = a(91);
    var r = a(409);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-12bcb889", t.exports = s
}, , , , , , , , , , function (t, e, a) {
    var s, n;
    s = a(92);
    var r = a(456);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(308), s = a(93);
    var r = a(486);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-ee8285fc", t.exports = s
}, , , , , , , , , , , , , , function (t, e) {
    "use strict";
    t.exports = {
        constant: {
            ImgHost: "//imagess-google.com",
            PhotoPath: "/system/common/headimg/",
            DefPhoto: "defaultHeadImg.png"
        },
        color: {blue: "#38f", red: "#dc3b40"},
        tpl: {
            noData: ["<div class='fullPageMsg'><div class='fullPageIcon iconfont'>&#xe63c;</div><p>','</p></div>"],
            load: '<svg class="svgLoad" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(0 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(30 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.08333333333333333s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(60 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.16666666666666666s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(90 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.25s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(120 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.3333333333333333s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(150 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.4166666666666667s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(180 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(210 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5833333333333334s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(240 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.6666666666666666s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(270 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.75s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(300 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.8333333333333334s" repeatCount="indefinite"/></rect><rect  x="46.5" y="40" width="7" height="20" rx="5" ry="5" transform="rotate(330 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.9166666666666666s" repeatCount="indefinite"/></rect></svg>'
        },
        turning: !1,
        HeadFootShow: !0,
        needVerify: sessionStorage.getItem("needVerify") || 0,
        showAllLottery: !1,
        navConfig: [{id: "navIndex", word: "首页", link: "/index"}, {
            id: "navLottery",
            word: "购彩大厅",
            link: "/lotteryHall"
        }, {id: "navActivity", word: "活动中心", link: "/activity"}, {
            id: "navMobile",
            word: "手机购彩",
            link: "/mobile"
        }, {id: "navSecurityCenter", word: "我的账户", link: "/securityCenter"}, {
            id: "navHelp",
            word: "帮助指南",
            link: "/helpCenter"
        }],
        bankType: {Type: ["久付", "乐盈", "闪付", "通汇卡", "易卡", "银宝", "摩宝"]}
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.fc3dPlay = e.fc3dConfig = void 0;
    var s = a(3), n = {
        "三星": {
            "直选": [{
                name: "直选复式",
                mode: "D11",
                tip: "每位至少选择一个号码，竞猜开奖号码，号码和位置都对应即中奖，奖金",
                group: "三星",
                subGroup: "直选",
                tag: "三星直选复式",
                eg: ["456", "456"],
                default: !0
            }, {
                name: "直选单式",
                mode: "D12",
                tip: "每位至少选择一个号码，竞猜开奖号码，号码和位置都对应即中奖，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["456", "456"],
                tag: "三星直选单式"
            }, {
                name: "直选和值",
                mode: "D13",
                tip: "至少选择一个和值，竞猜开奖号码数字之和，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["和值1", "001,010,100"],
                tag: "三星直选和值"
            }, {
                name: "跨度",
                mode: "D14",
                tip: "所选数值等于开奖号码的最大与最小数字相减之差，即为中奖，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["跨度8", "(1)数字08x(不限顺序),x≠9;(2)数字19x(不限顺序),x≠0"],
                tag: "三星直选跨度"
            }],
            "组选": [{
                name: "组选和值",
                mode: "D21",
                tip: "至少选择一个和值，竞猜开奖号码后三位数字之和(不含豹子号)，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["和值6", "033(不限顺序)", "和值6", "015(不限顺序)"],
                tag: "三星组选和值"
            }, {
                name: "组三",
                mode: "D22",
                tip: "从0-9中选择2个数字组成两注，所选号码与开奖号码相同，且顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["112", "112(不限顺序)"],
                tag: "三星组选组三"
            }, {
                name: "组六",
                mode: "D23",
                tip: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码相同，顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["123", "123(不限顺序)"],
                tag: "三星组选组六"
            }, {
                name: "混合组选",
                mode: "D24",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码相同，顺序不限，即为中奖，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["001", "001(不限顺序)", "123", "123(不限顺序)"],
                tag: "三星混合组选"
            }, {
                name: "组选包胆",
                mode: "D25",
                tip: "从0-9中任意选择1个包胆号码，开奖号码的后三位中任意1位与所选包胆号码相同(不含豹子号)，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["包胆3", "3xx或者33x(不限顺序)", "3xy(不限顺序)注:x≠y≠3", "包胆3", "3xy（不限顺序）注：x≠y≠3"],
                tag: "三星组选包胆"
            }, {
                name: "组三单式",
                mode: "D26",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码相同，顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["112", "112(不限顺序)"],
                tag: "三星组三单式"
            }, {
                name: "组六单式",
                mode: "D27",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码相同，顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["123", "123(不限顺序)"],
                tag: "三星组六单式"
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "D31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖，奖金",
                group: "三星",
                subGroup: "不定位",
                eg: ["1", "1xx(不限顺序)"],
                tag: "三星一码不定位"
            }, {
                name: "二码不定位",
                mode: "D32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码中包含这2个号码，包含即中奖，奖金",
                group: "三星",
                subGroup: "不定位",
                eg: ["12", "12x(不限顺序)"],
                tag: "三星二码不定位"
            }]
        },
        "前二": {
            "直选": [{
                name: "直选复式",
                mode: "C11",
                tip: "每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金",
                group: "前二",
                subGroup: "直选",
                tag: "前二直选复式",
                eg: ["45*", "45*"],
                default: !0
            }, {
                name: "直选单式",
                mode: "C12",
                tip: "每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金",
                group: "前二",
                subGroup: "直选",
                eg: ["45*", "45*"],
                tag: "前二直选单式"
            }, {
                name: "直选和值",
                mode: "C13",
                tip: "至少选择一个和值，竞猜开奖号码前二位数字之和，奖金",
                group: "前二",
                subGroup: "直选",
                eg: ["和值1", "01*,10*"],
                tag: "前二直选和值"
            }, {
                name: "跨度",
                mode: "C14",
                tip: "所选数值等于开奖号码的前二位最大与最小数字相减之差，即为中奖，奖金",
                group: "前二",
                subGroup: "直选",
                eg: ["跨度8", "08*,19*,80*,91*"],
                tag: "前二直选跨度"
            }],
            "组选": [{
                name: "组选复式",
                mode: "C21",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限，奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["5,8", "58*(不限顺序)"],
                tag: "前二组选复式"
            }, {
                name: "组选单式",
                mode: "C22",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限，奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["5,8", "58*(不限顺序)"],
                tag: "前二组选单式"
            }, {
                name: "组选和值",
                mode: "C23",
                tip: "所选数值等于开奖号码的前二位数字相加之和（不含对子），奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["和值1", "10*,01*"],
                tag: "前二组选和值"
            }, {
                name: "组选包胆",
                mode: "C24",
                tip: "从0-9中任意选择1个号码，开奖号码的前二位中任意1位包含所选的包胆号码相同,奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["包胆8", "x8*,8*x(不含对子)"],
                tag: "前二组选包胆"
            }]
        },
        "后二": {
            "直选": [{
                name: "直选复式",
                mode: "B11",
                tip: "每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["45*", "45*"],
                tag: "后二直选复式",
                default: !0
            }, {
                name: "直选单式",
                mode: "B12",
                tip: "每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["45*", "45*"],
                tag: "后二直选单式"
            }, {
                name: "直选和值",
                mode: "B13",
                tip: "至少选择一个和值，竞猜开奖号码后二位数字之和，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["和值1", "01*,10*"],
                tag: "后二直选和值"
            }, {
                name: "跨度",
                mode: "B14",
                tip: "所选数值等于开奖号码的后二位最大与最小数字相减之差，即为中奖，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["跨度8", "08*,19*,80*,91*"],
                tag: "后二直选跨度"
            }],
            "组选": [{
                name: "组选复式",
                mode: "B21",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限，奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["5,8", "58*(不限顺序)"],
                tag: "后二组选复式"
            }, {
                name: "组选单式",
                mode: "B22",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限，奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["5,8", "58*(不限顺序)"],
                tag: "后二组选单式"
            }, {
                name: "组选和值",
                mode: "B23",
                tip: "所选数值等于开奖号码的后二位数字相加之和（不含对子），奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["和值1", "10*,01*"],
                tag: "后二组选和值"
            }, {
                name: "组选包胆",
                mode: "B24",
                tip: "从0-9中任意选择1个号码，开奖号码的后二位中任意1位包含所选的包胆号码相同，奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["包胆8", "x8*,8*x(不含对子)"],
                tag: "后二组选包胆"
            }]
        },
        "一星": {
            "定位胆": [{
                name: "复式",
                mode: "A11",
                tip: "从百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致，奖金",
                group: "一星",
                subGroup: "定位胆",
                eg: ["1**(百位)", "1**"],
                tag: "一星定位胆复式",
                default: !0
            }]
        },
        "大小单双": {
            "大小单双": [{
                name: "前二大小单双",
                mode: "I11",
                tip: "从百位、十位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                tag: "前二大小单双",
                eg: ["小双", "百位与十位“小双”，即为中奖。"],
                default: !0
            }, {
                name: "后二大小单双",
                mode: "I12",
                tip: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                eg: ["小双", "十位与个位“小双”，即为中奖。"],
                tag: "后二大小单双"
            }]
        }
    }, r = {
        D11: {
            render: ["100", "10", "1"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        D12: {box: "normal", len: 3},
        D13: {
            render: ["psum27"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum27, s.normalSum3)
            }
        },
        D14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff3)
            }
        },
        D21: {
            render: ["csum26"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum26, s.combSum3)
            }
        },
        D22: {
            render: ["z3"], alg: function (t, e) {
                return 2 * (0, s.C)(e.z3.length, 2)
            }
        },
        D23: {
            render: ["z6"], alg: function (t, e) {
                return (0, s.C)(e.z6.length, 3)
            }
        },
        D24: {box: "normal", len: 3, special: "b3x2x3"},
        D25: {
            render: ["baodan"], alg: function (t, e) {
                return 54
            }
        },
        D26: {box: "normal", len: 3, special: "b3x2"},
        D27: {box: "normal", len: 3, special: "b3x3"},
        D31: {render: ["budingwei"], alg: s.countSingle},
        D32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)(e.budingwei.length, 2)
            }
        },
        C11: {
            render: ["100", "10"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        C12: {box: "normal", len: 2},
        C13: {
            render: ["psum18"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum18, s.normalSum2)
            }
        },
        C14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff2)
            }
        },
        C21: {
            render: ["zx"], alg: function (t, e) {
                return (0, s.C)(e.zx.length, 2)
            }
        },
        C22: {box: "normal", len: 2, special: "b2x2"},
        C23: {
            render: ["csum17"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum17.map(function (t) {
                    return t
                }), s.combSum2)
            }
        },
        C24: {
            render: ["baodan"], alg: function (t, e) {
                return 9
            }
        },
        B11: {
            render: ["10", "1"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        B12: {box: "normal", len: 2},
        B13: {
            render: ["psum18"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum18, s.normalSum2)
            }
        },
        B14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff2)
            }
        },
        B21: {
            render: ["zx"], alg: function (t, e) {
                return (0, s.C)(e.zx.length, 2)
            }
        },
        B22: {box: "normal", len: 2, special: "b2x2"},
        B23: {
            render: ["csum17"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum17.map(function (t) {
                    return t
                }), s.combSum2)
            }
        },
        B24: {
            render: ["baodan"], alg: function (t, e) {
                return 9
            }
        },
        A11: {
            render: ["100", "10", "1"], alg: function (t, e) {
                return (0, s.betSum)(t, e).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        I11: {
            render: ["i100", "i10"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        I12: {
            render: ["i10", "i1"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        }
    };
    e.fc3dConfig = n, e.fc3dPlay = r
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.kl8Play = e.kl8Config = void 0;
    var s = a(3), n = {
        "任选": {
            "普通玩法": [{
                name: "任选一",
                mode: "A10",
                tip: "从01-80中选择1个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖，奖金",
                group: "任选",
                subGroup: "普通玩法",
                tag: "任选一",
                eg: ["01", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                default: !0
            }, {
                name: "任选二",
                mode: "A11",
                tip: "从01-80中选择2-8个号码，当期开奖结果的20个号码中包含所选号码中的两个，即可中奖，奖金",
                group: "任选",
                subGroup: "普通玩法",
                eg: ["01 02", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                tag: "任选二"
            }, {
                name: "任选三",
                mode: "A12",
                tip: "从01-80中选择3-8个号码，当期开奖结果的20个号码中包含所选号码中的三个，即可中奖。 ",
                group: "任选",
                subGroup: "普通玩法",
                eg: ["01 02 03", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                tag: "任选三"
            }, {
                name: "任选四",
                mode: "A13",
                tip: "从01-80中选择4-8个号码，当期开奖结果的20个号码中包含所选号码中的四个，即可中奖。 ",
                group: "任选",
                subGroup: "普通玩法",
                eg: ["01 02 03 04", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                tag: "任选四"
            }, {
                name: "任选五",
                mode: "A14",
                tip: "从01-80中选择5-8个号码，当期开奖结果的20个号码中包含所选号码中的五个，即可中奖。 ",
                group: "任选",
                subGroup: "普通玩法",
                eg: ["01 02 03 04 05", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                tag: "任选五"
            }, {
                name: "任选六",
                mode: "A15",
                tip: "从01-80中选择6-8个号码，当期开奖结果的20个号码中包含所选号码中的六个，即可中奖。 ",
                group: "任选",
                subGroup: "普通玩法",
                eg: ["01 02 03 04 05 06", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                tag: "任选六"
            }, {
                name: "任选七",
                mode: "A16",
                tip: "从01-80中选择7-8个号码，当期开奖结果的20个号码中包含所选号码中的七个，即可中奖。 ",
                group: "任选",
                subGroup: "普通玩法",
                eg: ["01 02 03 04 05 06 07", "01 02 03 04 05 06 07 08 21 22 71 72 73 74 75 76 77 78 79 80"],
                tag: "任选七"
            }]
        },
        "趣味": {
            "标准": [{
                name: "上下盘",
                mode: "B10",
                tip: "选择20个开奖号码中包含“上盘(01-40)”与“下盘(41-80)”号码个数多少关系。 ",
                group: "趣味",
                subGroup: "标准",
                eg: ["中盘", "“上盘”号码个数10，“下盘”号码个数10。上=下"],
                tag: "趣味上下盘",
                default: !0
            }, {
                name: "奇偶盘",
                mode: "B11",
                tip: "选择20个开奖号码中包含“奇·偶”号码个数多少关系。 ",
                group: "趣味",
                subGroup: "标准",
                eg: ["和", "“奇数”号码个数10，“偶数”号码个数10。奇=偶"],
                tag: "趣味奇偶盘"
            }, {
                name: "和值大小单双",
                mode: "B12",
                tip: "选择20个开奖号码总和值的“大小单双”属性组合(和值<=810为小,>810为大)，奖金",
                group: "趣味",
                subGroup: "标准",
                eg: ["大·双", "20个开奖号码的总和值：834。属性为“大·双”"],
                tag: "趣味和值大小单双"
            }]
        }
    }, r = {
        A10: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.betSum)(t, e).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        A11: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.C)(e.above.length + e.below.length, 2)
            }
        },
        A12: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.C)(e.above.length + e.below.length, 3)
            }
        },
        A13: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.C)(e.above.length + e.below.length, 4)
            }
        },
        A14: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.C)(e.above.length + e.below.length, 5)
            }
        },
        A15: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.C)(e.above.length + e.below.length, 6)
            }
        },
        A16: {
            render: ["above", "below"], alg: function (t, e) {
                return (0, s.C)(e.above.length + e.below.length, 7)
            }
        },
        B10: {render: ["szx"], alg: s.countSingle},
        B11: {render: ["jho"], alg: s.countSingle},
        B12: {render: ["isum"], alg: s.countSingle}
    };
    e.kl8Config = n, e.kl8Play = r
}, function (t, e, a) {
    "use strict";
    function s(t, e) {
        for (var a = [], s = 0; s < t.length; s++)for (var n = 0; n < e.length; n++)t[s] !== e[n] && a.push([t[s], e[n]]);
        return a.length
    }

    function n(t, e, a) {
        for (var s = [], n = 0; n < t.length; n++)for (var r = 0; r < e.length; r++)for (var i = 0; i < a.length; i++) {
            var o = [t[n], e[r], a[i]];
            o.filter(function (t, e, a) {
                return a.indexOf(t) === e
            }).length === o.length && s.push(o)
        }
        return s.length
    }

    function r(t, e, a, s) {
        for (var n = [], r = 0; r < t.length; r++)for (var i = 0; i < e.length; i++)for (var o = 0; o < a.length; o++)for (var l = 0; l < s.length; l++) {
            var c = [t[r], e[i], a[o], s[l]];
            c.filter(function (t, e, a) {
                return a.indexOf(t) === e
            }).length === c.length && n.push(c)
        }
        return n.length
    }

    function i(t, e, a, s, n) {
        for (var r = [], i = 0; i < t.length; i++)for (var o = 0; o < e.length; o++)for (var l = 0; l < a.length; l++)for (var c = 0; c < s.length; c++)for (var u = 0; u < n.length; u++) {
            var d = [t[i], e[o], a[l], s[c], n[u]];
            d.filter(function (t, e, a) {
                return a.indexOf(t) === e
            }).length === d.length && r.push(d)
        }
        return r.length
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.pk10Play = e.pk10Config = void 0;
    var o = a(3), l = {
        "定位胆": {
            "标准": [{
                name: "定位胆",
                mode: "F11",
                tip: "从冠、亚、季、四、五、六、七、八、九、十任意位置上任意选择一个或一个以上号码，奖金",
                group: "定位胆",
                subGroup: "标准",
                tag: "定位胆",
                eg: ["冠选择01", "01 *"],
                default: !0
            }]
        },
        "猜前五": {
            "直选": [{
                name: "复式",
                mode: "E11",
                tip: "从各名次中各选择1个不重复的号码组成一注，奖金",
                group: "猜前五",
                subGroup: "直选",
                eg: ["1 2 3 4 5", "1 2 3 4 5 *"],
                tag: "前五直选复式",
                default: !0
            }, {
                name: "单式",
                mode: "E12",
                tip: "手动输入号码，输入5个号码组成一注，奖金",
                group: "猜前五",
                subGroup: "直选",
                eg: ["1 2 3 4 5", "1 2 3 4 5 *"],
                tag: "前五直选复式"
            }]
        },
        "猜前四": {
            "直选": [{
                name: "复式",
                mode: "D11",
                tip: "从各名次中各选择1个不重复的号码组成一注，奖金",
                group: "猜前四",
                subGroup: "直选",
                eg: ["1 2 3 4", "1 2 3 4 *"],
                tag: "前四直选复式",
                default: !0
            }, {
                name: "单式",
                mode: "D12",
                tip: "手动输入号码，输入4个号码组成一注，奖金",
                group: "猜前四",
                subGroup: "直选",
                eg: ["1 2 3 4", "1 2 3 4 *"],
                tag: "前四直选复式"
            }]
        },
        "猜前三": {
            "直选": [{
                name: "复式",
                mode: "C11",
                tip: "从各名次中各选择1个不重复的号码组成一注，奖金",
                group: "猜前三",
                subGroup: "直选",
                eg: ["1 2 3", "1 2 3 *"],
                tag: "前三直选复式",
                default: !0
            }, {
                name: "单式",
                mode: "C12",
                tip: "手动输入号码，输入3个号码组成一注，奖金",
                group: "猜前三",
                subGroup: "直选",
                eg: ["1 2 3", "1 2 3 *"],
                tag: "前三直选复式"
            }]
        },
        "猜前二": {
            "直选": [{
                name: "复式",
                mode: "B11",
                tip: "从各名次中各选择1个不重复的号码组成一注，奖金",
                group: "猜前二",
                subGroup: "直选",
                eg: ["1 2", "1 2 *"],
                tag: "前二直选复式",
                default: !0
            }, {
                name: "单式",
                mode: "B12",
                tip: "手动输入号码，输入2个号码组成一注，奖金",
                group: "猜前二",
                subGroup: "直选",
                eg: ["1 2", "1 2 *"],
                tag: "前二直选复式"
            }]
        },
        "猜冠军": {
            "直选": [{
                name: "复式",
                mode: "A11",
                tip: "选择1个号码组成一注，奖金",
                group: "猜冠军",
                subGroup: "直选",
                eg: ["2", "2 *"],
                tag: "前一直选复式",
                default: !0
            }]
        }
    }, c = {
        F11: {
            render: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"],
            alg: function (t, e) {
                return (0, o.betSum)(t, e).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        E11: {
            render: ["first", "second", "third", "fourth", "fifth"], alg: function (t, e) {
                return i(e.first, e.second, e.third, e.fourth, e.fifth)
            }
        },
        E12: {box: "syx5", len: 5, special: 10},
        D11: {
            render: ["first", "second", "third", "fourth"], alg: function (t, e) {
                return r(e.first, e.second, e.third, e.fourth)
            }
        },
        D12: {box: "syx5", len: 4, special: 10},
        C11: {
            render: ["first", "second", "third"], alg: function (t, e) {
                return n(e.first, e.second, e.third)
            }
        },
        C12: {box: "syx5", len: 3, special: 10},
        B11: {
            render: ["first", "second"], alg: function (t, e) {
                return s(e.first, e.second)
            }
        },
        B12: {box: "syx5", len: 2, special: 10},
        A11: {render: ["first"], alg: o.countSingle}
    };
    e.pk10Config = l, e.pk10Play = c
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.pl3Play = e.pl3Config = void 0;
    var s = a(3), n = {
        "三星": {
            "直选": [{
                name: "直选复式",
                mode: "D11",
                tip: "每位至少选择一个号码，竞猜开奖号码，号码和位置都对应即中奖，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["345", "345"],
                tag: "三星直选复式",
                default: !0
            }, {
                name: "直选单式",
                mode: "D12",
                tip: "每位至少选择一个号码，竞猜开奖号码，号码和位置都对应即中奖，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["345", "345"],
                tag: "三星直选单式"
            }, {
                name: "直选和值",
                mode: "D13",
                tip: "至少选择一个和值，竞猜开奖号码数字之和，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["和值1", "001,010,100"],
                tag: "三星直选和值"
            }, {
                name: "跨度",
                mode: "D14",
                tip: "所选数值等于开奖号码的最大与最小数字相减之差，即为中奖，奖金",
                group: "三星",
                subGroup: "直选",
                eg: ["跨度8", "(1)08x（不限顺序）,x≠9;(2)19x（不限顺序）,x≠0"],
                tag: "三星直选跨度"
            }],
            "组选": [{
                name: "组选和值",
                mode: "D21",
                tip: "至少选择一个和值，竞猜开奖号码后三位数字之和(不含豹子号)，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["和值6", "033(不限顺序)", "和值6", "015(不限顺序)"],
                tag: "三星组选和值"
            }, {
                name: "组三",
                mode: "D22",
                tip: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百、十、个位相同，且顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["112", "112(不限顺序)"],
                tag: "三星组选组三"
            }, {
                name: "组六",
                mode: "D23",
                tip: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百、十、个位相同，顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["123", "123(不限顺序)"],
                tag: "三星组选组六"
            }, {
                name: "混合组选",
                mode: "D24",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，即为中奖，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["001", "001(不限顺序)", "123", "123(不限顺序)"],
                tag: "三星混合组选"
            }, {
                name: "组选包胆",
                mode: "D25",
                tip: "从0-9中任意选择1个包胆号码，开奖号码的后三位中任意1位与所选包胆号码相同(不含豹子号)，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["包胆3", "3xx或者33x(不限顺序)", "包胆3", "3xy(不限顺序) 注：x≠y≠3"],
                tag: "三星组选包胆"
            }, {
                name: "组三单式",
                mode: "D26",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的百、十、个位相同，顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["112", "112（不限顺序）"],
                tag: "三星组三单式"
            }, {
                name: "组六单式",
                mode: "D27",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的百、十、个位相同，顺序不限，奖金",
                group: "三星",
                subGroup: "组选",
                eg: ["123", "123（不限顺序）"],
                tag: "三星组六单式"
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "D31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖，奖金",
                group: "三星",
                subGroup: "不定位",
                eg: ["1", "1xx(不限顺序)"],
                tag: "三星一码不定位"
            }, {
                name: "二码不定位",
                mode: "D32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码中包含这2个号码，包含即中奖，奖金",
                group: "三星",
                subGroup: "不定位",
                eg: ["12", "12x(不限顺序)"],
                tag: "三星二码不定位"
            }]
        },
        "前二": {
            "直选": [{
                name: "直选复式",
                mode: "C11",
                tip: "每位至少选择一个号码，竞猜开奖号码的的百位、十位，号码和位置都对应即中奖，奖金",
                group: "前二",
                subGroup: "直选",
                tag: "前二直选复式",
                eg: ["45", "45"],
                default: !0
            }, {
                name: "直选单式",
                mode: "C12",
                tip: "每位至少选择一个号码，竞猜开奖号码的的百位、十位，号码和位置都对应即中奖，奖金",
                group: "前二",
                subGroup: "直选",
                eg: ["45", "45"],
                tag: "前二直选单式"
            }, {
                name: "直选和值",
                mode: "C13",
                tip: "至少选择一个和值，竞猜开奖号码前二位数字之和，奖金",
                group: "前二",
                subGroup: "直选",
                eg: ["和值1", "01*,10*"],
                tag: "前二直选和值"
            }, {
                name: "跨度",
                mode: "C14",
                tip: "所选数值等于开奖号码的前二位最大与最小数字相减之差，即为中奖，奖金",
                group: "前二",
                subGroup: "直选",
                eg: ["跨度8", "08*,19*,80*,91*"],
                tag: "前二直选跨度"
            }],
            "组选": [{
                name: "组选复式",
                mode: "C21",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["5,8", "58*(不限顺序)"],
                tag: "前二组选复式"
            }, {
                name: "组选单式",
                mode: "C22",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["5,8", "58*(不限顺序)"],
                tag: "前二组选单式"
            }, {
                name: "组选和值",
                mode: "C23",
                tip: "所选数值等于开奖号码的前二位数字相加之和（不含对子），奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["和值1", "10*,01*"],
                tag: "前二组选和值"
            }, {
                name: "组选包胆",
                mode: "C24",
                tip: "从0-9中任意选择1个号码，开奖号码的前二位中任意1位包含所选的包胆号码相同，奖金",
                group: "前二",
                subGroup: "组选",
                eg: ["包胆8", "x8*,8*x(不含对子)"],
                tag: "前二组选包胆"
            }]
        },
        "后二": {
            "直选": [{
                name: "直选复式",
                mode: "B11",
                tip: "每位至少选择一个号码，竞猜开奖号码的的十位、个位，号码和位置都对应即中奖，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["45", "45"],
                tag: "后二直选复式",
                default: !0
            }, {
                name: "直选单式",
                mode: "B12",
                tip: "每位至少选择一个号码，竞猜开奖号码的的十位、个位，号码和位置都对应即中奖，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["45", "45"],
                tag: "后二直选单式"
            }, {
                name: "直选和值",
                mode: "B13",
                tip: "至少选择一个和值，竞猜开奖号码后二位数字之和，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["和值1", "01*,10*"],
                tag: "后二直选和值"
            }, {
                name: "跨度",
                mode: "B14",
                tip: "所选数值等于开奖号码的后二位最大与最小数字相减之差，即为中奖，奖金",
                group: "后二",
                subGroup: "直选",
                eg: ["跨度8", "08*,19*,80*,91*"],
                tag: "后二直选跨度"
            }],
            "组选": [{
                name: "组选复式",
                mode: "B21",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["5,8", "*58(不限顺序)"],
                tag: "后二组选复式"
            }, {
                name: "组选单式",
                mode: "B22",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["5,8", "*58(不限顺序)"],
                tag: "后二组选单式"
            }, {
                name: "组选和值",
                mode: "B23",
                tip: "所选数值等于开奖号码的后二位数字相加之和（不含对子），奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["和值1", "10*,01*"],
                tag: "后二组选和值"
            }, {
                name: "组选包胆",
                mode: "B24",
                tip: "从0-9中任意选择1个号码，开奖号码的后二位中任意1位包含所选的包胆号码相同，奖金",
                group: "后二",
                subGroup: "组选",
                eg: ["包胆8", "x8*,8*x(不含对子)"],
                tag: "后二组选包胆"
            }]
        },
        "一星": {
            "定位胆": [{
                name: "复式",
                mode: "A11",
                tip: "从百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致，奖金",
                group: "一星",
                subGroup: "定位胆",
                eg: ["1**(百位)", "1**"],
                tag: "一星定位胆复式",
                default: !0
            }]
        },
        "大小单双": {
            "大小单双": [{
                name: "前二大小单双",
                mode: "I11",
                tip: "从百位、十位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                tag: "前二大小单双",
                eg: ["小双", "百位与十位“小双”，即为中奖。"],
                default: !0
            }, {
                name: "后二大小单双",
                mode: "I12",
                tip: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                eg: ["小双", "十位与个位“小双”，即为中奖。"],
                tag: "后二大小单双"
            }]
        }
    }, r = {
        D11: {
            render: ["100", "10", "1"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        D12: {box: "normal", len: 3},
        D13: {
            render: ["psum27"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum27, s.normalSum3)
            }
        },
        D14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff3)
            }
        },
        D21: {
            render: ["csum26"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum26, s.combSum3)
            }
        },
        D22: {
            render: ["z3"], alg: function (t, e) {
                return 2 * (0, s.C)(e.z3.length, 2)
            }
        },
        D23: {
            render: ["z6"], alg: function (t, e) {
                return (0, s.C)(e.z6.length, 3)
            }
        },
        D24: {box: "normal", len: 3, special: "b3x2x3"},
        D25: {
            render: ["baodan"], alg: function (t, e) {
                return 54
            }
        },
        D26: {box: "normal", len: 3, special: "b3x2"},
        D27: {box: "normal", len: 3, special: "b3x3"},
        D31: {render: ["budingwei"], alg: s.countSingle},
        D32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)(e.budingwei.length, 2)
            }
        },
        B11: {
            render: ["10", "1"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        B12: {box: "normal", len: 2},
        B13: {
            render: ["psum18"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum18, s.normalSum2)
            }
        },
        B14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff2)
            }
        },
        B21: {
            render: ["zx"], alg: function (t, e) {
                return (0, s.C)(e.zx.length, 2)
            }
        },
        B22: {box: "normal", len: 2, special: "b2x2"},
        B23: {
            render: ["csum17"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum17.map(function (t) {
                    return t
                }), s.combSum2)
            }
        },
        B24: {
            render: ["baodan"], alg: function (t, e) {
                return 9
            }
        },
        C11: {
            render: ["100", "10"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        C12: {box: "normal", len: 2},
        C13: {
            render: ["psum18"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum18, s.normalSum2)
            }
        },
        C14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff2)
            }
        },
        C21: {
            render: ["zx"], alg: function (t, e) {
                return (0, s.C)(e.zx.length, 2)
            }
        },
        C22: {box: "normal", len: 2, special: "b2x2"},
        C23: {
            render: ["csum17"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum17.map(function (t) {
                    return t
                }), s.combSum2)
            }
        },
        C24: {
            render: ["baodan"], alg: function (t, e) {
                return 9
            }
        },
        A11: {
            render: ["100", "10", "1"], alg: function (t, e) {
                return (0, s.betSum)(t, e).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        I11: {
            render: ["i100", "i10"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        I12: {
            render: ["i10", "i1"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        }
    };
    e.pl3Config = n, e.pl3Play = r
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.sscPlay = e.sscConfig = void 0;
    var s = a(3), n = {
        "五星": {
            "直选": [{
                name: "复式",
                mode: "H11",
                tip: "每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金",
                group: "五星",
                subGroup: "直选",
                tag: "五星直选复式",
                eg: ["12345", "12345"],
                default: !0
            }, {
                name: "单式",
                mode: "H12",
                tip: "每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金",
                group: "五星",
                subGroup: "直选",
                eg: ["23456", "23456"],
                tag: "五星直选单式"
            }],
            "组选": [{
                name: "组选120",
                mode: "H21",
                tip: "至少选择五个号码投注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金",
                group: "五星",
                subGroup: "组选",
                tag: "五星组选120",
                eg: ["02568", "02568（不限顺序）"]
            }, {
                name: "组选60",
                mode: "H22",
                tip: "至少选择1个二重号码和3个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金",
                group: "五星",
                subGroup: "组选",
                tag: "五星组选60",
                eg: ["02588（8为二重号，0、2、5为单号）", "02588（不限顺序）"]
            }, {
                name: "组选30",
                mode: "H23",
                tip: "至少选择2个二重号码和1个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金",
                group: "五星",
                subGroup: "组选",
                tag: "五星组选30",
                eg: ["00588（0、8为二重号，5为单号）", "00588（不限顺序）"]
            }, {
                name: "组选20",
                mode: "H24",
                tip: "至少选择1个三重号码和2个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金",
                group: "五星",
                subGroup: "组选",
                tag: "五星组选20",
                eg: ["02888（8为三重号，0、2为单号）", "02888（不限顺序）"]
            }, {
                name: "组选10",
                mode: "H25",
                tip: "至少选择1个三重号码和1个二重号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金",
                group: "五星",
                subGroup: "组选",
                tag: "五星组选10",
                eg: ["22888（2为二重号，8为三重号）", "22888（不限顺序）"]
            }, {
                name: "组选5",
                mode: "H26",
                tip: "至少选择1个四重号码和1个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金",
                group: "五星",
                subGroup: "组选",
                tag: "五星组选5",
                eg: ["08888（8为四重号，0为单号）", "08888（不限顺序）"]
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "H31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖，奖金",
                group: "五星",
                subGroup: "不定位",
                tag: "五星一码不定位",
                eg: ["1", "xx1xx（不限顺序）"]
            }, {
                name: "二码不定位",
                mode: "H32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码中包含这2个号码，包含即中奖，奖金",
                group: "五星",
                subGroup: "不定位",
                tag: "五星二码不定位",
                eg: ["1,2", "1x2xx（不限顺序）"]
            }, {
                name: "三码不定位",
                mode: "H33",
                tip: "从0-9中至少选择3个号码投注，竞猜开奖号码中包含这3个号码，包含即中奖，奖金",
                group: "五星",
                subGroup: "不定位",
                tag: "五星三码不定位",
                eg: ["1,2,3", "1x2x3（不限顺序）"]
            }],
            "趣味": [{
                name: "一帆风顺",
                mode: "H41",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖，奖金",
                group: "五星",
                subGroup: "趣味",
                tag: "五星一帆风顺",
                eg: ["1", "xx1xx（不限顺序）"]
            }, {
                name: "好事成双",
                mode: "H42",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现2次，即中奖，奖金",
                group: "五星",
                subGroup: "趣味",
                tag: "五星好事成双",
                eg: ["8", "xxx88（不限顺序）"]
            }, {
                name: "三星报喜",
                mode: "H43",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现3次，即中奖，奖金",
                group: "五星",
                subGroup: "趣味",
                tag: "五星三星报喜",
                eg: ["8", "xx888（不限顺序）"]
            }, {
                name: "四季发财",
                mode: "H44",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现4次，即中奖，奖金",
                group: "五星",
                subGroup: "趣味",
                tag: "五星四季发财",
                eg: ["8", "x8888（不限顺序）"]
            }]
        },
        "四星": {
            "直选": [{
                name: "复式",
                mode: "G11",
                tip: "每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖，奖金",
                group: "四星",
                subGroup: "直选",
                tag: "四星直选复式",
                default: !0,
                eg: ["*3456", "*3456"]
            }, {
                name: "单式",
                mode: "G12",
                tip: "每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖，奖金",
                group: "四星",
                subGroup: "直选",
                tag: "四星直选单式",
                eg: ["*3456", "*3456"]
            }],
            "组选": [{
                name: "组选24",
                mode: "G21",
                tip: "至少选择4个号码投注，竞猜开奖号码的后4位，号码一致顺序不限即中奖，奖金",
                group: "四星",
                subGroup: "组选",
                tag: "四星组选24",
                eg: ["*2568", "*2568（不限顺序）"]
            }, {
                name: "组选12",
                mode: "G22",
                tip: "至少选择1个二重号码和2个单号号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，奖金",
                group: "四星",
                subGroup: "组选",
                tag: "四星组选12",
                eg: ["*2588（8为二重号，2、5为单号）", "*2588（不限顺序）"]
            }, {
                name: "组选6",
                mode: "G23",
                tip: "至少选择2个二重号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，奖金",
                group: "四星",
                subGroup: "组选",
                tag: "四星组选6",
                eg: ["*0088（0,8为二重号）", "*0088（不限顺序）"]
            }, {
                name: "组选4",
                mode: "G24",
                tip: "至少选择1个三重号码和1个单号号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，奖金",
                group: "四星",
                subGroup: "组选",
                tag: "四星组选4",
                eg: ["*2888（8为三重号，2为单号）", "*2888（不限顺序）"]
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "G31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码后四位中包含这个号码，包含即中奖，奖金",
                group: "四星",
                subGroup: "不定位",
                tag: "四星一码不定位",
                eg: ["1", "*1xxx（不限顺序）"]
            }, {
                name: "二码不定位",
                mode: "G32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码后四位中包含这2个号码，包含即中奖，奖金",
                group: "四星",
                subGroup: "不定位",
                tag: "四星二码不定位",
                eg: ["1,2", "*12xx（不限顺序）"]
            }]
        },
        "前三": {
            "直选": [{
                name: "复式",
                mode: "F11",
                tip: "每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖，奖金",
                group: "前三",
                subGroup: "直选",
                tag: "前三直选复式",
                eg: ["456**", "456**"],
                default: !0
            }, {
                name: "单式",
                mode: "F12",
                tip: "每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖，奖金",
                group: "前三",
                subGroup: "直选",
                tag: "前三直选单式",
                eg: ["456**", "456**"]
            }, {
                name: "直选和值",
                mode: "F13",
                tip: "至少选择一个和值，竞猜开奖号码前三位数字之和，奖金",
                group: "前三",
                subGroup: "直选",
                tag: "前三直选和值",
                eg: ["和值1", "001**,010**,100**"]
            }, {
                name: "跨度",
                mode: "F14",
                tip: "所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖，奖金",
                group: "前三",
                subGroup: "直选",
                tag: "前三直选跨度",
                eg: ["跨度8", "(1)前三数字08x（不限顺序）,x≠9;(2)前三数字19x（不限顺序）,x≠0"]
            }],
            "组选": [{
                name: "组选和值",
                mode: "F21",
                tip: "至少选择一个和值，竞猜开奖号码前三位数字之和(不含豹子号)，奖金",
                group: "前三",
                subGroup: "组选",
                tag: "前三组选和值",
                eg: ["和值6", "033**（不限顺序）", "和值6", "015**（不限顺序）"]
            }, {
                name: "组三",
                mode: "F22",
                tip: "从0-9中选择2个数字组成两注，所选号码与开奖号码的前三位相同，顺序不限，奖金",
                group: "前三",
                subGroup: "组选",
                tag: "前三组选组三",
                eg: ["112**", "112**（不限顺序）"]
            }, {
                name: "组六",
                mode: "F23",
                tip: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的前三位相同，顺序不限，奖金",
                group: "前三",
                subGroup: "组选",
                tag: "前三组选组六",
                eg: ["123**", "123**（不限顺序）"]
            }, {
                name: "混合组选",
                mode: "F24",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，即为中奖，奖金",
                group: "前三",
                subGroup: "组选",
                tag: "前三混合组选",
                eg: ["001", "001**（不限顺序）", "123", "123**（不限顺序）"]
            }, {
                name: "组选包胆",
                mode: "F25",
                tip: "从0-9中任意选择1个包胆号码，开奖号码的前三位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖，奖金",
                group: "前三",
                subGroup: "组选",
                eg: ["包胆3", "3xx**或者33x**（不限顺序）", "包胆3", "3xy**（不限顺序）注：x≠y≠3"],
                tag: "前三组选包胆"
            }, {
                name: "组三单式",
                mode: "F26",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，奖金",
                group: "前三",
                subGroup: "组选",
                tag: "前三组三单式",
                eg: ["112**", "112**（不限顺序）"]
            }, {
                name: "组六单式",
                mode: "F27",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，奖金",
                group: "前三",
                subGroup: "组选",
                tag: "前三组六单式",
                eg: ["123**", "123**（不限顺序）"]
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "F31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码前三位中包含这个号码，包含即中奖，奖金",
                group: "前三",
                subGroup: "不定位",
                tag: "前三一码不定位",
                eg: ["1", "1xx**（不限顺序）"]
            }, {
                name: "二码不定位",
                mode: "F32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码前三位中包含这2个号码，包含即中奖，奖金",
                group: "前三",
                subGroup: "不定位",
                tag: "前三二码不定位",
                eg: ["1,2", "12x**（不限顺序）"]
            }]
        },
        "中三": {
            "直选": [{
                name: "复式",
                mode: "E11",
                tip: "每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖，奖金",
                group: "中三",
                subGroup: "直选",
                tag: "中三直选复式",
                default: !0,
                eg: ["*456*", "*456*"]
            }, {
                name: "单式",
                mode: "E12",
                tip: "每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖，奖金",
                group: "中三",
                subGroup: "直选",
                tag: "中三直选单式",
                eg: ["*456*", "*456*"]
            }, {
                name: "直选和值",
                mode: "E13",
                tip: "至少选择一个和值，竞猜开奖号码中三位数字之和，奖金",
                group: "中三",
                subGroup: "直选",
                tag: "中三直选和值",
                eg: ["和值1", "*001*，*010*，*100*"]
            }, {
                name: "跨度",
                mode: "E14",
                tip: "所选数值等于开奖号码的中3位最大与最小数字相减之差，即是中奖，奖金",
                group: "中三",
                subGroup: "直选",
                tag: "中三直选跨度",
                eg: ["跨度8", "(1)中三数组08x（不限顺序），x≠9(2)中三数字19x（不限顺序），x≠0"]
            }],
            "组选": [{
                name: "组选和值",
                mode: "E21",
                tip: "至少选择一个和值，竞猜开奖号码中三位数字之和(不含豹子号)，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三组选和值",
                eg: ["和值6", "*033*（不限顺序）", "和值6", "*015*（不限顺序）"]
            }, {
                name: "组三",
                mode: "E22",
                tip: "从0-9中选择2个数字组成两注，所选号码与开奖号码的中三位相同，且顺序不限，即中奖，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三组选组三",
                eg: ["*112*（1为二重号，2为单号）", "*112*（不限顺序）"]
            }, {
                name: "组六",
                mode: "E23",
                tip: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的中三位相同，顺序不限，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三组选组六",
                eg: ["*123*", "*123*（不限顺序）"]
            }, {
                name: "混合组选",
                mode: "E24",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的中三位相同，顺序不限，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三混合组选",
                eg: ["001", "*001*（不限顺序）", "123", "*123*（不限顺序）"]
            }, {
                name: "组选包胆",
                mode: "E25",
                tip: "从0-9中任意选择1个包胆号码，开奖号码的中三位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三组选包胆",
                eg: ["包胆3", "*3xx*或者*33x*（不限顺序）", "包胆3", "*3xy*（不限顺序）注：x≠y≠3"]
            }, {
                name: "组三单式",
                mode: "E26",
                tip: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同),顺序不限，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三组三单式",
                eg: ["*112*", "*112*（不限顺序）"]
            }, {
                name: "组六单式",
                mode: "E27",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的中三位相同，顺序不限，奖金",
                group: "中三",
                subGroup: "组选",
                tag: "中三组六单式",
                eg: ["*123*", "*123*（不限顺序）"]
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "E31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码中三位中包含这个号码，包含即中奖，奖金",
                group: "中三",
                subGroup: "不定位",
                tag: "中三一码不定位",
                eg: ["1", "*1xx*（不限顺序）"]
            }, {
                name: "二码不定位",
                mode: "E32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码中三位中包含这2个号码，奖金",
                group: "中三",
                subGroup: "不定位",
                tag: "中三二码不定位",
                eg: ["1,2", "*12x*（不限顺序）"]
            }]
        },
        "后三": {
            "直选": [{
                name: "复式",
                mode: "D11",
                tip: "每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖，奖金",
                group: "后三",
                subGroup: "直选",
                tag: "后三直选复式",
                default: !0,
                eg: ["**456", "**456"]
            }, {
                name: "单式",
                mode: "D12",
                tip: "每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖，奖金",
                group: "后三",
                subGroup: "直选",
                tag: "后三直选单式",
                eg: ["**456", "**456"]
            }, {
                name: "直选和值",
                mode: "D13",
                tip: "至少选择一个和值，竞猜开奖号码后三位数字之和，奖金",
                group: "后三",
                subGroup: "直选",
                tag: "后三直选和值",
                eg: ["和值1", "**001,**010,**100"]
            }, {
                name: "跨度",
                mode: "D14",
                tip: "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖，最高奖金",
                group: "后三",
                subGroup: "直选",
                tag: "后三直选跨度",
                eg: ["跨度8", "(1)后三数字08x（不限顺序），x≠9;(2)后三数字19x（不限顺序）,x≠0"]
            }],
            "组选": [{
                name: "组选和值",
                mode: "D21",
                tip: "至少选择一个和值，竞猜开奖号码后三位数字之和(不含豹子号)，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三组选和值",
                eg: ["和值6", "**033（不限顺序）", "和值6", "**015（不限顺序）"]
            }, {
                name: "组三",
                mode: "D22",
                tip: "从0-9中选择2个数字组成两注，所选号码与开奖号码的后三位相同，且顺序不限，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三组选组三",
                eg: ["**112（1为二重号，2为单号）", "**112（不限顺序）"]
            }, {
                name: "组六",
                mode: "D23",
                tip: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的后三位相同，顺序不限，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三组选组六",
                eg: ["**123", "**123（不限顺序）"]
            }, {
                name: "混合组选",
                mode: "D24",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，即为中奖，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三混合组选",
                eg: ["001", "**001（不限顺序）", "123", "**123（不限顺序）"]
            }, {
                name: "组选包胆",
                mode: "D25",
                tip: "从0-9中任意选择1个包胆号码，开奖号码的后三位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三组选包胆",
                eg: ["包胆3", "**3xx或者**33x（不限顺序）", "包胆3", "**3xy（不限顺序）注：x≠y≠3"]
            }, {
                name: "组三单式",
                mode: "D26",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三组三单式",
                eg: ["**112", "**112（不限顺序）"]
            }, {
                name: "组六单式",
                mode: "D27",
                tip: "手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，奖金",
                group: "后三",
                subGroup: "组选",
                tag: "后三组六单式",
                eg: ["**123", "**123（不限顺序）"]
            }],
            "不定位": [{
                name: "一码不定位",
                mode: "D31",
                tip: "从0-9中至少选择1个号码投注，竞猜开奖号码后三位中包含这个号码，包含即中奖，奖金",
                group: "后三",
                subGroup: "不定位",
                tag: "后三一码不定位",
                eg: ["1", "**1xx（不限顺序）"]
            }, {
                name: "二码不定位",
                mode: "D32",
                tip: "从0-9中至少选择2个号码投注，竞猜开奖号码后三位中包含这2个号码，包含即中奖，奖金",
                group: "后三",
                subGroup: "不定位",
                tag: "后三二码不定位",
                eg: ["1,2", "**12x（不限顺序）"]
            }]
        },
        "前二": {
            "直选": [{
                name: "直选复式",
                mode: "C11",
                tip: "每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金",
                group: "前二",
                subGroup: "直选",
                tag: "前二直选复式",
                default: !0,
                eg: ["45***", "45***"]
            }, {
                name: "直选单式",
                mode: "C12",
                tip: "每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金",
                group: "前二",
                subGroup: "直选",
                tag: "前二直选单式",
                eg: ["45***", "45***"]
            }, {
                name: "直选和值",
                mode: "C13",
                tip: "至少选择一个和值，竞猜开奖号码前二位数字之和，奖金",
                group: "前二",
                subGroup: "直选",
                tag: "前二直选和值",
                eg: ["和值1", "01***,10***"]
            }, {
                name: "跨度",
                mode: "C14",
                tip: "所选数值等于开奖号码的前二位最大与最小数字相减之差，即为中奖，奖金",
                group: "前二",
                subGroup: "直选",
                tag: "前二直选跨度",
                eg: ["跨度8", "08***,19***,80***,91***"]
            }],
            "组选": [{
                name: "组选复式",
                mode: "C21",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限（不含对子），奖金",
                group: "前二",
                subGroup: "组选",
                tag: "前二组选复式",
                eg: ["5,8", "58***（不限顺序）"]
            }, {
                name: "组选单式",
                mode: "C22",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限（不含对子），奖金",
                group: "前二",
                subGroup: "组选",
                tag: "前二组选单式",
                eg: ["5,8", "58***（不限顺序）"]
            }, {
                name: "组选和值",
                mode: "C23",
                tip: "所选数值等于开奖号码的前二位数字相加之和（不含对子），奖金",
                group: "前二",
                subGroup: "组选",
                tag: "前二组选和值",
                eg: ["和值1", "10***（不限顺序）"]
            }, {
                name: "组选包胆",
                mode: "C24",
                tip: "从0-9中任意选择1个号码，开奖号码的前二位中任意1位包含所选的包胆号码相同（不含对子），奖金",
                group: "前二",
                subGroup: "组选",
                tag: "前二组选包胆",
                eg: ["包胆8", "x8***（不限顺序，x≠8）"]
            }]
        },
        "后二": {
            "直选": [{
                name: "直选复式",
                mode: "B11",
                tip: "每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金",
                group: "后二",
                subGroup: "直选",
                tag: "后二直选复式",
                default: !0,
                eg: ["***45", "***45"]
            }, {
                name: "直选单式",
                mode: "B12",
                tip: "每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金",
                group: "后二",
                subGroup: "直选",
                tag: "后二直选单式",
                eg: ["***45", "***45"]
            }, {
                name: "直选和值",
                mode: "B13",
                tip: "至少选择一个和值，竞猜开奖号码后二位数字之和，奖金",
                group: "后二",
                subGroup: "直选",
                tag: "后二直选和值",
                eg: ["和值1", "***01,***10"]
            }, {
                name: "跨度",
                mode: "B14",
                tip: "所选数值等于开奖号码的后二位最大与最小数字相减之差，即为中奖，奖金",
                group: "后二",
                subGroup: "直选",
                tag: "后二直选跨度",
                eg: ["跨度8", "***08,***19,***80,***91"]
            }],
            "组选": [{
                name: "组选复式",
                mode: "B21",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限（不含对子），奖金",
                group: "后二",
                subGroup: "组选",
                tag: "后二组选复式",
                eg: ["5,8", "***58（不限顺序）"]
            }, {
                name: "组选单式",
                mode: "B22",
                tip: "从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限（不含对子），奖金",
                group: "后二",
                subGroup: "组选",
                tag: "后二组选单式",
                eg: ["5,8", "***58（不限顺序）"]
            }, {
                name: "组选和值",
                mode: "B23",
                tip: "所选数值等于开奖号码的后二位数字相加之和（不含对子），奖金",
                group: "后二",
                subGroup: "组选",
                tag: "后二组选和值",
                eg: ["和值1", "***10（不限顺序）"]
            }, {
                name: "组选包胆",
                mode: "B24",
                tip: "从0-9中任意选择1个号码，开奖号码的后二位中任意1位包含所选的包胆号码相同（不含对子），奖金",
                group: "后二",
                subGroup: "组选",
                tag: "后二组选包胆",
                eg: ["包胆8", "***x8（不限顺序,x≠8）"]
            }]
        },
        "一星": {
            "定位胆": [{
                name: "复式",
                mode: "A11",
                tip: "从万位、千位、百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致，奖金",
                group: "一星",
                subGroup: "定位胆",
                tag: "一星复式",
                default: !0,
                eg: ["1****", "1****"]
            }]
        },
        "大小单双": {
            "大小单双": [{
                name: "前二",
                mode: "I91",
                tip: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                tag: "前二大小单双",
                default: !0,
                eg: ["小双", "万位与千位“小双”，即为中奖。"]
            }, {
                name: "后二",
                mode: "I92",
                tip: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                tag: "后二大小单双",
                eg: ["大单", "十位与个位“大单”，即为中奖。"]
            }, {
                name: "前三",
                mode: "I93",
                tip: "从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                tag: "前三大小单双",
                eg: ["小双小", "万位、千位、百位“小双小”，即为中奖"]
            }, {
                name: "后三",
                mode: "I95",
                tip: "从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注，奖金",
                group: "大小单双",
                subGroup: "大小单双",
                tag: "后三大小单双",
                eg: ["大单大", "百位、十位、个位“大单大”，即为中奖"]
            }]
        }
    }, r = {
        H11: {
            render: ["10000", "1000", "100", "10", "1"], alg: function (t, e) {
                return (0, s.mul)(5, (0, s.betSum)(t, e))
            }
        },
        H12: {box: "normal", len: 5},
        H21: {
            render: ["zx120"], alg: function (t, e) {
                return (0, s.C)(e.zx120.length, 5)
            }
        },
        H22: {
            render: ["xx", "x"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.xx, e.x, 3)
            }
        },
        H23: {
            render: ["xx", "x"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.x, e.xx, 2)
            }
        },
        H24: {
            render: ["xxx", "x"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.xxx, e.x, 2)
            }
        },
        H25: {
            render: ["xxx", "xx"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.xxx, e.xx, 1)
            }
        },
        H26: {
            render: ["xxxx", "x"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.xxxx, e.x, 1)
            }
        },
        H31: {render: ["budingwei"], alg: s.countSingle},
        H32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)((0, s.betSum)(t, e)[0], 2)
            }
        },
        H33: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)((0, s.betSum)(t, e)[0], 3)
            }
        },
        H41: {render: ["yffs"], alg: s.countSingle},
        H42: {render: ["hscs"], alg: s.countSingle},
        H43: {render: ["sxbx"], alg: s.countSingle},
        H44: {render: ["sjfc"], alg: s.countSingle},
        G11: {
            render: ["1000", "100", "10", "1"], alg: function (t, e) {
                return (0, s.mul)(4, (0, s.betSum)(t, e))
            }
        },
        G12: {box: "normal", len: 4},
        G21: {
            render: ["zx24"], alg: function (t, e) {
                return (0, s.C)(e.zx24.length, 4)
            }
        },
        G22: {
            render: ["xx", "x"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.xx, e.x, 2)
            }
        },
        G23: {
            render: ["xx"], alg: function (t, e) {
                return (0, s.C)(e.xx.length, 2)
            }
        },
        G24: {
            render: ["xxx", "x"], alg: function (t, e) {
                return (0, s.combNoRepeat)(e.xxx, e.x, 1)
            }
        },
        G31: {render: ["budingwei"], alg: s.countSingle},
        G32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)(e.budingwei.length, 2)
            }
        },
        F11: {
            render: ["10000", "1000", "100"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        F12: {box: "normal", len: 3},
        F13: {
            render: ["psum27"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum27, s.normalSum3)
            }
        },
        F14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff3)
            }
        },
        F21: {
            render: ["csum26"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum26, s.combSum3)
            }
        },
        F22: {
            render: ["z3"], alg: function (t, e) {
                return 2 * (0, s.C)(e.z3.length, 2)
            }
        },
        F23: {
            render: ["z6"], alg: function (t, e) {
                return (0, s.C)(e.z6.length, 3)
            }
        },
        F24: {box: "normal", len: 3, special: "b3x2x3"},
        F25: {
            render: ["baodan"], alg: function (t, e) {
                return 54
            }
        },
        F26: {box: "normal", len: 3, special: "b3x2"},
        F27: {box: "normal", len: 3, special: "b3x3"},
        F31: {render: ["budingwei"], alg: s.countSingle},
        F32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)(e.budingwei.length, 2)
            }
        },
        E11: {
            render: ["1000", "100", "10"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        E12: {box: "normal", len: 3},
        E13: {
            render: ["psum27"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum27, s.normalSum3)
            }
        },
        E14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff3)
            }
        },
        E21: {
            render: ["csum26"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum26, s.combSum3)
            }
        },
        E22: {
            render: ["z3"], alg: function (t, e) {
                return 2 * (0, s.C)(e.z3.length, 2)
            }
        },
        E23: {
            render: ["z6"], alg: function (t, e) {
                return (0, s.C)(e.z6.length, 3)
            }
        },
        E24: {box: "normal", len: 3, special: "b3x2x3"},
        E25: {
            render: ["baodan"], alg: function (t, e) {
                return 54
            }
        },
        E26: {box: "normal", len: 3, special: "b3x2"},
        E27: {box: "normal", len: 3, special: "b3x3"},
        E31: {render: ["budingwei"], alg: s.countSingle},
        E32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)(e.budingwei.length, 2)
            }
        },
        D11: {
            render: ["100", "10", "1"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        D12: {
            box: "normal", len: 3
        },
        D13: {
            render: ["psum27"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum27, s.normalSum3)
            }
        },
        D14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff3)
            }
        },
        D21: {
            render: ["csum26"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum26, s.combSum3)
            }
        },
        D22: {
            render: ["z3"], alg: function (t, e) {
                return 2 * (0, s.C)(e.z3.length, 2)
            }
        },
        D23: {
            render: ["z6"], alg: function (t, e) {
                return (0, s.C)(e.z6.length, 3)
            }
        },
        D24: {box: "normal", len: 3, special: "b3x2x3"},
        D25: {
            render: ["baodan"], alg: function (t, e) {
                return 54
            }
        },
        D26: {box: "normal", len: 3, special: "b3x2"},
        D27: {box: "normal", len: 3, special: "b3x3"},
        D31: {render: ["budingwei"], alg: s.countSingle},
        D32: {
            render: ["budingwei"], alg: function (t, e) {
                return (0, s.C)(e.budingwei.length, 2)
            }
        },
        C11: {
            render: ["10000", "1000"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        C12: {box: "normal", len: 2},
        C13: {
            render: ["psum18"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum18, s.normalSum2)
            }
        },
        C14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff2)
            }
        },
        C21: {
            render: ["zx"], alg: function (t, e) {
                return (0, s.C)(e.zx.length, 2)
            }
        },
        C22: {box: "normal", len: 2, special: "b2x2"},
        C23: {
            render: ["csum17"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum17.map(function (t) {
                    return t
                }), s.combSum2)
            }
        },
        C24: {
            render: ["baodan"], alg: function (t, e) {
                return 9
            }
        },
        B11: {
            render: ["10", "1"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        B12: {box: "normal", len: 2},
        B13: {
            render: ["psum18"], alg: function (t, e) {
                return (0, s.accumulate)(e.psum18, s.normalSum2)
            }
        },
        B14: {
            render: ["diff"], alg: function (t, e) {
                return (0, s.accumulate)(e.diff, s.diff2)
            }
        },
        B21: {
            render: ["zx"], alg: function (t, e) {
                return (0, s.C)(e.zx.length, 2)
            }
        },
        B22: {box: "normal", len: 2, special: "b2x2"},
        B23: {
            render: ["csum17"], alg: function (t, e) {
                return (0, s.accumulate)(e.csum17.map(function (t) {
                    return t
                }), s.combSum2)
            }
        },
        B24: {
            render: ["baodan"], alg: function (t, e) {
                return 9
            }
        },
        A11: {
            render: ["10000", "1000", "100", "10", "1"], alg: function (t, e) {
                return (0, s.betSum)(t, e).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        I91: {
            render: ["i10000", "i1000"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        I92: {
            render: ["i10", "i1"], alg: function (t, e) {
                return (0, s.mul)(2, (0, s.betSum)(t, e))
            }
        },
        I93: {
            render: ["i10000", "i1000", "i100"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        I94: {
            render: ["i1000", "i100", "i10"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        },
        I95: {
            render: ["i100", "i10", "i1"], alg: function (t, e) {
                return (0, s.mul)(3, (0, s.betSum)(t, e))
            }
        }
    };
    e.sscConfig = n, e.sscPlay = r
}, function (t, e, a) {
    "use strict";
    function s(t, e) {
        for (var a = [], s = 0; s < t.length; s++)for (var n = 0; n < e.length; n++)t[s] !== e[n] && a.push([t[s], e[n]]);
        return a.length
    }

    function n(t, e, a) {
        for (var s = [], n = 0; n < t.length; n++)for (var r = 0; r < e.length; r++)for (var i = 0; i < a.length; i++) {
            var o = [t[n], e[r], a[i]];
            o.filter(function (t, e, a) {
                return a.indexOf(t) === e
            }).length === o.length && s.push(o)
        }
        return s.length
    }

    function r(t, e, a) {
        return 0 === t.length ? 0 : (0, i.C)(e.length, a - t.length)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.syx5Play = e.syx5Config = void 0;
    var i = a(3), o = {
        "三码": {
            "三码": [{
                name: "前三直选复式",
                mode: "C11",
                tag: "前三直选复式",
                group: "三码",
                subGroup: "三码",
                tip: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中 的前3个号码相同，且顺序一致，即为中奖，奖金",
                eg: ["01,02,03", "01,02,03,*,*"],
                default: !0
            }, {
                name: "前三直选单式",
                mode: "C12",
                tag: "前三直选单式",
                group: "三码",
                subGroup: "三码",
                tip: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中 的前3个号码相同，且顺序一致，即为中奖，奖金",
                eg: ["01,02,03", "01,02,03,*,*"]
            }, {
                name: "前三组选复式",
                mode: "C21",
                tag: "前三组选复式",
                group: "三码",
                subGroup: "三码",
                eg: ["01,02,03", "01,02,03,*,*(不限顺序)"],
                tip: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中 的前3个号码相同，且顺序不限，即为中奖，奖金"
            }, {
                name: "前三组选单式",
                mode: "C22",
                tag: "前三组选单式",
                group: "三码",
                subGroup: "三码",
                eg: ["01,02,03", "01,02,03,*,*(不限顺序)"],
                tip: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中 的前3个号码相同，且顺序不限，即为中奖，奖金"
            }, {
                name: "前三组选胆拖",
                mode: "C23",
                tag: "前三组选胆拖",
                group: "三码",
                subGroup: "三码",
                eg: ["01,02,03", "01,02,03,*,*(不限顺序)"],
                tip: "从01-11共11个号码中至少选择3个以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期的前三位开奖号码中有3个包含所选号码（每注包含3个号码），即为中奖，奖金"
            }]
        },
        "二码": {
            "二码": [{
                name: "前二直选复式",
                mode: "B11",
                tag: "前二直选复式",
                group: "二码",
                subGroup: "二码",
                eg: ["01,02", "01,02,*,*,*"],
                tip: "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中 的前2个号码相同，且顺序一致，即为中奖，奖金",
                default: !0
            }, {
                name: "前二直选单式",
                mode: "B12",
                tag: "前二直选单式",
                group: "二码",
                subGroup: "二码",
                eg: ["01,02", "01,02,*,*,*"],
                tip: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中 的前2个号码相同，且顺序一致，即为中奖，奖金"
            }, {
                name: "前二组选复式",
                mode: "B21",
                tag: "前二组选复式",
                group: "二码",
                subGroup: "二码",
                eg: ["01,02", "01,02,*,*,*(不限顺序)"],
                tip: "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中 的前2个号码相同，且顺序不限，即为中奖，奖金"
            }, {
                name: "前二组选单式",
                mode: "B22",
                tag: "前二组选单式",
                group: "二码",
                subGroup: "二码",
                eg: ["01,02", "01,02,*,*,*(不限顺序)"],
                tip: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中 的前2个号码相同，且顺序不限，即为中奖，奖金"
            }, {
                name: "前二组选胆拖",
                mode: "B23",
                tag: "前二组选胆拖",
                group: "二码",
                subGroup: "二码",
                eg: ["01,02", "01,02,*,*,*(不限顺序)"],
                tip: "从01-11共11个号码中至少选择2个以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期的前二位开奖号码中有2个包含所选号码（每注包含2个号码），即为中奖，奖金"
            }]
        },
        "不定位": {
            "不定位": [{
                name: "前三一码不定位",
                mode: "A11",
                tag: "前三一码不定位",
                group: "不定位",
                subGroup: "不定位",
                eg: ["01", "01,X,Y,*,*(不限顺序)"],
                tip: "从01-11共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，奖金",
                default: !0
            }]
        },
        "定位胆": {
            "定位胆": [{
                name: "复式",
                mode: "A21",
                tag: "定位胆",
                group: "定位胆",
                subGroup: "定位胆",
                eg: ["01(第一位)", "01,*,*,*,*"],
                tip: "从第一位、第二位、第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，奖金",
                default: !0
            }]
        },
        "趣味型": {
            "趣味型": [{
                name: "定单双",
                mode: "I11",
                tag: "趣味定单双",
                group: "趣味型",
                subGroup: "趣味型",
                tip: "从6种单双个数组合中选择1种组合，当开奖号码的单双个数与所选单双组合一致，最高奖金",
                eg: ["0单5双", "出现0个单号5个双号(不限顺序)"],
                default: !0
            }, {
                name: "猜中位",
                mode: "I12",
                tag: "趣味猜中位",
                group: "趣味型",
                subGroup: "趣味型",
                eg: ["中位数为03", "出现03，小于以及大于03的各有2个号码(不限顺序)"],
                tip: "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖，最高奖金"
            }]
        },
        "任选复式": {
            "任选复式": [{
                name: "一中一",
                mode: "A31",
                tag: "任选一中一复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01", "01,W,X,Y,Z(不限顺序)"],
                tip: "从01-11共11个号码中选择1个号码进行购买，当期的5个开奖号码中包含所选号码，奖金",
                default: !0
            }, {
                name: "二中二",
                mode: "B31",
                tag: "任选二中二复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02", "01,02,X,Y,Z(不限顺序)"],
                tip: "从01-11共11个号码中选择2个号码进行购买，只要当期的5个开奖号码中包含所选号，奖金"
            }, {
                name: "三中三",
                mode: "C31",
                tag: "任选三中三复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02,03", "01,02,03,Y,Z(不限顺序)"],
                tip: "从01-11共11个号码中选择3个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "四中四",
                mode: "D11",
                tag: "任选四中四复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02,03,04", "01,02,03,04,Z(不限顺序)"],
                tip: "从01-11共11个号码中选择4个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "五中五",
                mode: "E11",
                tag: "任选五中五复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02,03,04,05", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中选择5个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "六中五",
                mode: "F11",
                tag: "任选六中五复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02,03,04,05,06", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中选择6个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "七中五",
                mode: "G11",
                tag: "任选七中五复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02,03,04,05,06,07", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中选择7个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "八中五",
                mode: "H11",
                tag: "任选八中五复式",
                group: "任选复式",
                subGroup: "任选复式",
                eg: ["01,02,03,04,05,06,07,08", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中选择8个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }]
        },
        "任选单式": {
            "任选单式": [{
                name: "一中一",
                mode: "A32",
                tag: "任选一中一单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01", "01,W,X,Y,Z(不限顺序)"],
                tip: "从01-11中手动输入1个号码进行购买，只要当期的5个开奖号码中包含所选号码，奖金",
                default: !0
            }, {
                name: "二中二",
                mode: "B32",
                tag: "任选二中二单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02", "01,02,X,Y,Z(不限顺序)"],
                tip: "从01-11中手动输入2个号码进行购买，只要当期的5个开奖号码中包含所选号码，奖金"
            }, {
                name: "三中三",
                mode: "C32",
                tag: "任选三中三单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02,03", "01,02,03,Y,Z(不限顺序)"],
                tip: "从01-11中手动输入3个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "四中四",
                mode: "D12",
                tag: "任选四中四单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02,03,04", "01,02,03,04,Z(不限顺序)"],
                tip: "从01-11中手动输入4个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "五中五",
                mode: "E12",
                tag: "任选五中五单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02,03,04,05", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11中手动输入5个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "六中五",
                mode: "F12",
                tag: "任选六中五单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02,03,04,05,06", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11中手动输入6个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "七中五",
                mode: "G12",
                tag: "任选七中五单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02,03,04,05,06,07", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11中手动输入7个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }, {
                name: "八中五",
                mode: "H12",
                tag: "任选八中五单式",
                group: "任选单式",
                subGroup: "任选单式",
                eg: ["01,02,03,04,05,06,07,08", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11中手动输入8个号码进行购买，只要当期的5个开奖号码中包含所选号码，即为中奖，奖金"
            }]
        },
        "任选胆拖": {
            "任选胆拖": [{
                name: "二中二",
                mode: "B33",
                tag: "任选二中二胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02", "01,02,X,Y,Z(不限顺序)"],
                tip: "从01-11共11个号码中至少选择2个以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期的5个开奖号码中有2个包含所选号码（每注包含2个号码），即为中奖，奖金",
                default: !0
            }, {
                name: "三中三",
                mode: "C33",
                tag: "任选三中三胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02,03", "01,02,03,Y,Z(不限顺序)"],
                tip: "从01-11共11个号码中至少选择3个以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期的5个开奖号码中有3个包含所选号码（每注包含3个号码），即为中奖，奖金"
            }, {
                name: "四中四",
                mode: "D13",
                tag: "任选四中四胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02,03,04", "01,02,03,04,Z(不限顺序)"],
                tip: "从01-11共11个号码中至少选择4个以上号码进行投注，每注需至少包括1个胆码及3个拖码。只要当期的5个开奖号码中有4个包含所选号码（每注包含4个号码），即为中奖，奖金"
            }, {
                name: "五中五",
                mode: "E13",
                tag: "任选五中五胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02,03,04,05", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中至少选择5个以上号码进行投注，每注需至少包括1个胆码及4个拖码。只要所选的每注5个号码和当期的5个开奖号码全部相同，即为中奖，奖金"
            }, {
                name: "六中五",
                mode: "F13",
                tag: "任选六中五胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02,03,04,05,06", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中至少选择6个以上号码进行投注，每注需至少包括1个胆码及5个拖码。只要所选的每注6个号码当中，有5个和当期的5个开奖号码全部相同，即为中奖，奖金"
            }, {
                name: "七中五",
                mode: "G13",
                tag: "任选七中五胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02,03,04,05,06,07", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中至少选择7个以上号码进行投注，每注需至少包括1个胆码及6个拖码。只要所选的每注7个号码当中，有5个和当期的5个开奖号码全部相同，即为中奖，奖金"
            }, {
                name: "八中五",
                mode: "H13",
                tag: "任选八中五胆拖",
                group: "任选胆拖",
                subGroup: "任选胆拖",
                eg: ["01,02,03,04,05,06,07,08", "01,02,03,04,05(不限顺序)"],
                tip: "从01-11共11个号码中至少选择8个以上号码进行投注，每注需至少包括1个胆码及7个拖码。只要所选的每注8个号码当中，有5个和当期的5个开奖号码全部相同，即为中奖，奖金"
            }]
        }
    }, l = {
        A11: {render: ["_budingwei"], alg: i.countSingle},
        A21: {
            render: ["d1", "d2", "d3"], alg: function (t, e) {
                return (0, i.betSum)(t, e).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        A31: {render: ["x1z1"], alg: i.countSingle},
        A32: {box: "syx5", len: 1, special: 11},
        B11: {
            render: ["d1", "d2"], alg: function (t, e) {
                return s(e.d1, e.d2)
            }
        },
        B12: {box: "syx5", len: 2, special: 11},
        B21: {
            render: ["qezx"], alg: function (t, e) {
                return (0, i.C)(e.qezx.length, 2)
            }
        },
        B22: {box: "syx5", len: 2, special: 11},
        B23: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 2)
            }
        },
        B31: {
            render: ["x2z2"], alg: function (t, e) {
                return (0, i.C)(e.x2z2.length, 2)
            }
        },
        B32: {box: "syx5", len: 2, special: 11},
        B33: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 2)
            }
        },
        C11: {
            render: ["d1", "d2", "d3"], alg: function (t, e) {
                return n(e.d1, e.d2, e.d3)
            }
        },
        C12: {box: "syx5", len: 3, special: 11},
        C21: {
            render: ["qszx"], alg: function (t, e) {
                return (0, i.C)(e.qszx.length, 3)
            }
        },
        C22: {box: "syx5", len: 3, special: 11},
        C23: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 3)
            }
        },
        C31: {
            render: ["x3z3"], alg: function (t, e) {
                return (0, i.C)(e.x3z3.length, 3)
            }
        },
        C32: {box: "syx5", len: 3, special: 11},
        C33: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 3)
            }
        },
        D11: {
            render: ["x4z4"], alg: function (t, e) {
                return (0, i.C)(e.x4z4.length, 4)
            }
        },
        D12: {box: "syx5", len: 4, special: 11},
        D13: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 4)
            }
        },
        E11: {
            render: ["x5z5"], alg: function (t, e) {
                return (0, i.C)(e.x5z5.length, 5)
            }
        },
        E12: {box: "syx5", len: 5, special: 11},
        E13: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 5)
            }
        },
        F11: {
            render: ["x6z5"], alg: function (t, e) {
                return (0, i.C)(e.x6z5.length, 6)
            }
        },
        F12: {box: "syx5", len: 6, special: 11},
        F13: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 6)
            }
        },
        G11: {
            render: ["x7z5"], alg: function (t, e) {
                return (0, i.C)(e.x7z5.length, 7)
            }
        },
        G12: {box: "syx5", len: 7, special: 11},
        G13: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 7)
            }
        },
        H11: {
            render: ["x8z5"], alg: function (t, e) {
                return (0, i.C)(e.x8z5.length, 8)
            }
        },
        H12: {box: "syx5", len: 8, special: 11},
        H13: {
            render: ["dm", "tm"], alg: function (t, e) {
                return r(e.dm, e.tm, 8)
            }
        },
        I11: {render: ["dds"], alg: i.countSingle},
        I12: {render: ["czw"], alg: i.countSingle}
    };
    e.syx5Config = o, e.syx5Play = l
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = {
        SSC: {
            H12: ["43222", "92692", "20861", "48363", "47622"],
            G12: ["4322", "9269", "2086", "4836", "4762"],
            F12: ["001", "112", "226"],
            F24: ["001", "112", "445", "123", "234", "567"],
            F26: ["001", "112", "226"],
            F27: ["264", "184", "270", "329", "235"],
            E12: ["001", "112", "226"],
            E24: ["001", "112", "445", "123", "234", "567"],
            E26: ["001", "112", "226"],
            E27: ["264", "184", "270", "329", "235"],
            D12: ["001", "112", "226"],
            D24: ["001", "112", "445", "123", "234", "567"],
            D26: ["001", "112", "226"],
            D27: ["264", "184", "270", "329", "235"],
            C12: ["43", "92", "20", "48", "47"],
            C22: ["43", "92", "20", "48", "47"],
            B12: ["43", "92", "20", "48", "47"],
            B22: ["43", "92", "20", "48", "47"]
        },
        SYX5: {
            C12: ["01 02 03", "03 07 09", "02 05 08", "04 05 06"],
            C22: ["01 02 03", "03 07 09", "02 05 08", "04 05 06"],
            B12: ["01 02", "03 07", "02 05", "04 05"],
            B22: ["01 02", "03 07", "02 08", "08 10"],
            A32: ["01", "03", "02", "08"],
            B32: ["01 02", "03 07", "02 08", "08 10"],
            C32: ["01 02 03", "03 07 09", "02 05 08", "04 05 06"],
            D12: ["01 02 03 04", "01 03 10 11", "03 06 09 10", "04 05 06 11"],
            E12: ["01 02 03 04 05", "01 03 05 09 11", "03 06 07 08 10", "04 05 06 08 11"],
            F12: ["01 02 03 04 05 08", "01 03 05 09 10 11", "03 06 07 08 09 10", "04 05 06 08 10 11"],
            G12: ["01 02 03 04 05 06 07", "01 03 05 07 08 09 10", "03 04 05 06 07 08 10", "04 05 06 07 08 09 11"],
            H12: ["01 02 03 04 05 06 07 08", "01 03 05 07 08 09 10 11", "03 04 05 06 07 08 10 11", "04 05 06 07 08 09 10 11"]
        },
        FC3D: {
            D12: ["433", "926", "208", "483", "476"],
            D24: ["001 123", "112 234", "445 567"],
            D26: ["001", "112", "226"],
            D27: ["264", "184", "270", "329", "235"],
            C12: ["43", "96", "28", "43", "46"],
            C22: ["43", "92", "20", "48", "47"],
            B12: ["43", "96", "28", "43", "46"],
            B22: ["43", "92", "20", "48", "47"]
        },
        PL35: {
            D12: ["433", "926", "208", "483", "476"],
            D24: ["001 123", "112 234", "445 567"],
            D26: ["001", "112", "226"],
            D27: ["264", "184", "270", "329", "235"],
            C12: ["43", "96", "28", "43", "46"],
            C22: ["43", "92", "20", "48", "47"],
            B12: ["43", "96", "28", "43", "46"],
            B22: ["43", "92", "20", "48", "47"]
        },
        PK10: {
            E12: ["01 02 03 04 05", "02 03 04 05 06"],
            D12: ["01 02 03 04", "03 04 05 06"],
            C12: ["01 02 03", "05 04 01"],
            B12: ["01 02", "01 05"]
        }
    };
    e.exampleText = a
}, , , , , , , , , , , , , , function (t, e, a) {
    var s, n;
    s = a(79);
    var r = a(470);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(235), s = a(81);
    var r = a(402);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-09d2a025", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(305), s = a(88);
    var r = a(481);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(292), s = a(89);
    var r = a(462);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-662f1bbc", t.exports = s
}, , function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(319), r = s(n), i = a(320), o = s(i), l = a(318), c = s(l), u = a(324), d = s(u);
    a(232), a(231), e.default = {
        components: {
            HeaderCom: o.default,
            FooterCom: c.default,
            Notice: d.default,
            Fullbg: r.default
        }, data: function () {
            return {}
        }, computed: {
            bodyClass: function () {
                return this.$route.path.split("/")[1]
            }
        }, watch: {
            $route: function (t, e) {
                this.$store.state.needVerify > 5 && (console.log("强制踩点功能"), RootApp.AjaxGetInitData(["UserUnread"]))
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["Type", "Info"], data: function () {
            return {UnClick: !0, StateData: "", ClickMsg: "不可领取"}
        }, created: function () {
            var t = this;
            if ("每日加奖" == this.Type) {
                var e = {Action: "GetActivityStateData", Qort: this.Type};
                _fetch(e).then(function (e) {
                    1 == e.Code && (t.StateData = e.BackData);
                    var a = -1;
                    t.StateData && (a = t.StateData.State), t.UnClick = 1 * a, t.ClickMsg = "0" == a ? "立即领取" : "1" == a ? "已领取" : "不可领取"
                })
            } else"晋级奖励" == this.Type && (RootApp.AjaxGetInitData(["UserUpGradeBonus"]), state.UserUpGradeBonus && (this.UnClick = state.UserUpGradeBonus.State))
        }, methods: {
            getBtn: function () {
                var t = this;
                if (!this.UnClick)if ("每日加奖" == this.Type) {
                    var e = {Action: "GetReward", Qort: this.Type}, a = {wait: "正在处理"};
                    _fetch(e, a).then(function (e) {
                        1 == e.Code ? (t.UnClick = !0, t.ClickMsg = "已领取", layer.msgWarn(e.StrCode)) : layer.msgWarn(e.StrCode)
                    })
                } else if ("晋级奖励" == this.Type) {
                    var e = {Action: "GetReward", Qort: this.Type}, a = {wait: "正在处理"};
                    _fetch(e, a).then(function (e) {
                        1 == e.Code ? (t.UnClick = !0, state.UserUpGradeBonus.State = 1, layer.msg(e.StrCode)) : layer.msgWarn(e.StrCode)
                    })
                }
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["dArr", "dWidth", "autoPlay"],
        data: function () {
            return {BannerDev: 0, BannerWidth: 0, leftNum: 0, dWid: 0}
        },
        created: function () {
            this.dWid = this.dWidth || 488, this.BannerWidth = this.dArr.length * this.dWid, this.autoPlay && this.AutoPlay(this.autoPlay, this.dArr.length)
        },
        methods: {
            goSlide: function (t) {
                this.leftNum = t * this.dWid, this.BannerDev = t
            }, AutoPlay: function (t, e) {
                var a = this;
                if (t) {
                    if (!RootApp.Play) {
                        var s = function t() {
                            RootApp.Play = setTimeout(function () {
                                var s = a.BannerDev + 1;
                                s > e - 1 && (a.BannerDev = 0, s = 0), a.goSlide(s), t()
                            }, 3e3)
                        };
                        s()
                    }
                } else this.cleartime()
            }, cleartime: function () {
                clearTimeout(RootApp.Play), RootApp.Play = ""
            }
        },
        beforeDestroy: function () {
            this.cleartime()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(172);
    e.default = {
        data: function () {
            return {defaultName: "省", ProvinceArr: i, CityArr: "", Province: "", City: ""}
        }, methods: {
            selName: function (t) {
                this.defaultName = t
            }, setProvin: function (t) {
                this.Province = t, this.defaultName = "市", this.City = "", this.CityArr = this.setCityArr(t), this.$parent.City = this.Province
            }, setCityArr: function (t) {
                var e = !0, a = !1, s = void 0;
                try {
                    for (var n, o = (0, r.default)(i); !(e = (n = o.next()).done); e = !0) {
                        var l = n.value;
                        if (l.name == t)return l.city
                    }
                } catch (t) {
                    a = !0, s = t
                } finally {
                    try {
                        !e && o.return && o.return()
                    } finally {
                        if (a)throw s
                    }
                }
            }, setCity: function (t) {
                this.City = t, this.$parent.City = this.Province + "-" + this.City, this.close()
            }, close: function () {
                return this.City && this.Province ? void(this.$parent.CityShow = !1) : void layer.alert("城市未选择完整")
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["ArrD", "setSpan"],
        methods: {
            close: function () {
                this.$parent.DetailShow = !1
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["DCode"], methods: {
            close: function () {
                this.$parent.DetailInfoShow = !1
            }, UPData: function () {
                var t = this;
                this.$parent.DInfo = this.$parent.DInfo.replace(/<\/?[^>]*>/gim, "").replace(/(^\s*)|(\s*$)/g, "");
                var e = this.$parent.DInfo;
                if (!e)return void layer.msgWarn("备注不能为空");
                var a = e.replace(/[^\x00-\xff]/g, "aa").length;
                if (a > 50)return layer.alert("备注不能超出25个汉字！");
                var s = {Action: "SetInviteUrlRemark", InviteCode: this.DCode, Remark: this.$parent.DInfo};
                _fetch(s).then(function (e) {
                    t.close(), 1 == e.Code ? (t.$parent.ArrList[t.$parent.DCodeIndex].Remark = t.$parent.DInfo, layer.msg("备注设置为：" + t.$parent.DInfo)) : layer.msgWarn(data.StrCode)
                })
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["s"], data: function () {
            return {ServiceRating: {}, ServiceTime: {RechargeTime: 0, WithdrawTime: 0}}
        }, beforeCreate: function () {
            var t = this, e = ["FooterConfig", "ServiceRating"];
            RootApp.GetInitData(e, function (e) {
                e.ServiceRating && (t.ServiceRating = e.ServiceRating)
            })
        }, mounted: function () {
            if (state.ServiceRating) {
                var t = 1 * state.ServiceRating.RechargeTime, e = 1 * state.ServiceRating.WithdrawTime, a = t % 60, a = a > 9 ? a : "0" + a, s = e % 60, s = s > 9 ? s : "0" + s, n = 60 * Math.round((t + e) / 60);
                this.ServiceTime.RechargeTime = Math.floor(t / 60) + "'" + a, this.ServiceTime.WithdrawTime = Math.floor(e / 60) + "'" + s, document.querySelector(".s1").style.width = t / n * 100 + "%", document.querySelector(".s2").style.width = e / n * 100 + "%"
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(323), r = s(n), i = a(321), o = s(i), l = a(322), c = s(l);
    e.default = {
        props: ["s"],
        components: {HeaderTop: r.default, HeaderMid: o.default, HeaderNav: c.default},
        computed: {
            headClass: function () {
                return this.isLotteryPage ? "" : "head" + this.s.SiteConfig.Style.Id
            }, isLotteryPage: function () {
                return "彩种" === this.$route.name
            }, hasMid: function () {
                var t = this.s.SiteConfig.Style;
                return [1, 5, 6, 10].indexOf(t.Id) > -1
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["s"],
        methods: {
            getServer: function (t, e, a) {
                if (!t)return !1;
                var s, n, r = a || 500, i = window.screen.width, o = e || 817, l = .9 * r;
                i < o && (o = .9 * i), s = (r - l) / 2, n = (i - o) / 2, window.open(t, "_blank", "top=" + s + ",left=" + n + ",width=" + o + ",height=" + l)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["fr", "s"], data: function () {
            return {}
        }, computed: {
            navConfig: function () {
                return this.$store.state.navConfig
            }
        }, methods: {
            getServer: function (t, e, a) {
                if (!t)return !1;
                var s, n, r = a || 500, i = window.screen.width, o = e || 817, l = .9 * r;
                i < o && (o = .9 * i), s = (r - l) / 2, n = (i - o) / 2, window.open(t, "_blank", "top=" + s + ",left=" + n + ",width=" + o + ",height=" + l)
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(12), r = s(n), i = a(37), o = s(i);
    e.default = {
        props: ["s", "showService", "hasMid"], data: function () {
            return {
                ShowAccount: !1,
                isShowBanlance: !1,
                ShowLetter: !1,
                letterS: !1,
                RefreshClass: "iconfont",
                UserUnreadData: [],
                setArr: ["女", "男", "保密"],
                cardArr: "",
                cardLeft: "",
                cardTop: "",
                cardDev: "",
                cardShow: !1,
                cardPosition: ["上", "下", "左", "右"]
            }
        }, computed: {
            isLotteryPage: function () {
                return "彩种" === this.$route.name
            }, Service: function () {
                return this.$store.state.SiteConfig.Service
            }
        }, created: function () {
            this.setWscroll()
        }, components: {UserCard: o.default}, watch: {
            $route: function (t) {
                this.cardShow = !1
            }
        }, methods: {
            getServer: function (t, e, a) {
                if (!t)return !1;
                var s, n, r = a || 500, i = window.screen.width, o = e || 817, l = .9 * r;
                i < o && (o = .9 * i), s = (r - l) / 2, n = (i - o) / 2, window.open(t, "_blank", "top=" + s + ",left=" + n + ",width=" + o + ",height=" + l)
            }, toggleBalance: function () {
                var t = this;
                this.isShowBanlance = !this.isShowBanlance, this.isShowBanlance && (this.RefreshBanlance(), setTimeout(function () {
                    t.isShowBanlance = !1
                }, 1e4))
            }, setWscroll: function () {
                var t = this;
                window.onscroll = document.onscroll = function () {
                    t.cardShow = !1
                }
            }, loginOut: function () {
                var t = {Action: "LogOut"}, e = {wait: "正在处理"};
                _fetch(t, e).then(function (t) {
                    1 === t.Code ? (RootApp.Logout(), router.push("/login")) : layer.msgWarn(t.StrCode)
                })
            }, letterOut: function () {
                var t = this;
                setTimeout(function () {
                    t.ShowLetter && !t.letterS && (t.ShowLetter = !1)
                }, 100)
            }, ShowLe: function () {
                this.letterS = !0
            }, OutLe: function () {
                this.ShowLetter = !1, this.letterS = !1
            }, RefreshBanlance: function () {
                var t = this;
                this.RefreshClass = "iconfont refreshMove", setTimeout(function () {
                    t.RefreshClass = "iconfont"
                }, 500), RootApp.GetInitData(["UserBalance"], function (e) {
                    e.UserUnread && (t.UserUnreadData = e.UserUnread)
                })
            }, getCard: function (t, e, a) {
                this.cardDev = "u" + t;
                var s = this.cardPosition.indexOf(a);
                if (s == -1)return !1;
                var n = e.target, r = n.offsetTop, i = n.offsetLeft, o = n.offsetWidth, l = n.offsetHeight, c = n.parentNode.offsetTop, u = n.parentNode.offsetLeft;
                switch (a) {
                    case"上":
                        this.cardTop = r + c - l - 150, this.cardLeft = i + u - 50;
                        break;
                    case"下":
                        this.cardTop = r + c + l, this.cardLeft = i + u - 100;
                        break;
                    case"左":
                        this.cardTop = r + c, this.cardLeft = i + u - 300;
                        break;
                    case"右":
                        this.cardTop = r + c, this.cardLeft = i + u + o
                }
                this.getCardDate(t)
            }, getCardDate: function (t) {
                var e = JSON.parse(sessionStorage.getItem("card" + t));
                if (e)this.cardArr = e, this.cardShow = !0; else {
                    if (this.cardArr = "", this.ispass)return !1;
                    this.ispass = !0;
                    var a = this;
                    this.cardShow = !1, setTimeout(function () {
                        a.getData(t)
                    }, 500)
                }
            }, getData: function (t) {
                var e = this, a = {Action: "GetCard", UserId: t};
                _fetch(a).then(function (a) {
                    if (1 === a.Code || 0 === a.Code) {
                        var s = e.setCardArr(a.BackData);
                        sessionStorage.setItem("card" + t, (0, r.default)(s)), e.cardDev && e.cardDev == "u" + t ? (e.cardArr = s, e.setWscroll(), e.getScrolltop() > 0 ? e.cardShow = !1 : e.cardShow = !0) : (e.cardArr = "", e.cardShow = !1)
                    } else e.cardShow = !1;
                    e.ispass = !1
                })
            }, setCardArr: function (t) {
                var e = t;
                return e.Sex = this.setArr[e.Sex], e.LotteryType = e.LotteryType.split(","), e
            }, getScrolltop: function () {
                return document.body.scrollTop
            }, getOut: function (t) {
                this.cardDev = "", this.cardShow = !1
            }, getUrl: function () {
                router.push("/personalInfo")
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(73), r = s(n), i = a(317), o = s(i), l = a(9), c = s(l), u = a(10), d = s(u);
    e.default = {
        props: ["CodeType"], data: function () {
            return {
                arr: {Action: "GetInviteUrl", UserType: "", Index: 0, DataNum: 10},
                data_count: null,
                TotalPage: "",
                isDataNot: !0,
                ArrList: [],
                CodeInit: {},
                isSupportCopy: !!document.execCommand,
                DetailShow: !1,
                DetailInfoShow: !1,
                DetailCode: "",
                DCodeIndex: "",
                DInfo: "",
                xUrl: location.host.replace(/www./, ""),
                DetailList: [],
                caiName: {
                    SSC: "时时彩",
                    XYNC: "幸运农场",
                    PK10: "北京PK10",
                    KL8: "北京快乐8",
                    PL35: "排列3/5",
                    FC3D: "福彩3D",
                    SYX5: "11选5",
                    K3: "快3"
                }
            }
        }, mounted: function () {
            this.getAjaxData()
        }, methods: {
            getAjaxData: function () {
                var t = this, e = this;
                this.isDataNot = !0, e.arr.UserType = e.CodeType, _fetch(this.arr).then(function (a) {
                    t.isDataNot = !1, 1 == a.Code ? a.BackData.length ? (0 === e.arr.Index && (t.data_count = a.DataCount, t.TotalPage = Math.ceil(Number(a.DataCount) / t.arr.DataNum)), e.ArrList = a.BackData) : e.data_count = 0 : layer.msgWarn(a.StrCode)
                })
            }, getList: function (t) {
                var e = this, a = {Action: "GetRebateInfo", InviteCode: t};
                e.CodeInit[t] ? e.setString(e.CodeInit[t]) : _fetch(a).then(function (a) {
                    1 == a.Code ? (e.setString(a.StrCode), e.CodeInit[t] = a.StrCode) : layer.msgWarn(a.StrCode)
                })
            }, delData: function (t, e) {
                var a = this;
                layer.open({
                    className: "layerConfirm",
                    title: "温馨提示",
                    shadeClose: !1,
                    content: "您确定要删除这条邀请码吗？",
                    btn: ["确定", "取消"],
                    yes: function (s) {
                        var n = {Action: "DelInviteUrl", InviteCode: e};
                        _fetch(n).then(function (e) {
                            1 == e.Code ? (a.ArrList.splice(t, 1), a.data_count = a.ArrList.length) : layer.msgWarn(e.StrCode)
                        }), layer.close(s)
                    },
                    no: function (t) {
                        layer.close(t)
                    }
                })
            }, setString: function (t) {
                for (var e = t.split("@"), a = [], s = e.length - 1; s >= 0; s--) {
                    var n = {}, r = e[s].split("#");
                    n.Name = this.caiName[r[0]], n.Num = r[1], n.Point = this.getPoint(r[0]), a.push(n)
                }
                this.DetailList = a, this.DetailShow = !0
            }, getPoint: function (t) {
                var e, a = state.AgentRebate;
                for (var s in a)if (a[s].LotteryType == t) {
                    e = a[s].Point;
                    break
                }
                return e
            }, doSearch: function (t) {
                this.arr.Index = t - 1, this.getAjaxData()
            }, editInfo: function (t, e, a) {
                e = "未设置" == e ? "" : e, this.DInfo = e, this.DetailCode = t, this.DCodeIndex = a, this.DetailInfoShow = !0
            }
        }, components: {DetailCode: r.default, DetailInfo: o.default, loading: c.default, page: d.default}
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["DImg"], data: function () {
            return {checkImg: "", checkName: ""}
        }, created: function () {
            var t = this, e = state.DefaultPhotoList;
            for (var a in e)e[a].ImageUrl == t.DImg && (t.checkName = e[a].ImageName, t.checkImg = e[a].ImageUrl)
        }, methods: {
            close: function () {
                this.$parent.ImageShow = !1
            }, getImg: function (t, e) {
                this.checkName = e, this.checkImg = t
            }, upHeadImg: function () {
                var t = this, e = {Action: "UpdateUserPhoto", UserPhoto: this.checkImg}, a = {wait: "正在处理"};
                _fetch(e, a).then(function (e) {
                    1 == e.Code ? RootApp.AjaxGetInitData(["UserPhoto"], function () {
                        layer.msgWarn(e.StrCode), sessionStorage.removeItem("card0"), t.close()
                    }) : layer.msgWarn(e.StrCode)
                })
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["s"], data: function () {
            return {isNoticeShow: !0}
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["NoticeData"];
            RootApp.GetInitData(s, function (t) {
                a()
            })
        }, methods: {
            close: function () {
                this.isNoticeShow = !1
            }, getUrl: function (t) {
                this.close(), router.push({name: "公告详情", query: {id: t}})
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {
                PagePath: !1,
                Selected: -1,
                LotteryList: [],
                a_state_time: 0,
                a_state_state: 0,
                StateArr: ["全部", "已中奖", "未中奖", "等待开奖"]
            }
        }, methods: {
            doSearchByState: function (t, e) {
                "Time" === e ? this.a_state_time = t : (this.a_state_state = t, "交易明细" != this.$route.name && "交易记录" != this.$route.name || (this.Selected = "-1")), this.$parent.SearchByState(t, e)
            }
        }, created: function () {
            var t = this;
            this.PagePath = this.$route.fullPath.toLowerCase().search("billrecord") > 0;
            var e = this.$route.fullPath.toLowerCase().search("seekorder") > 0, a = this.PagePath ? "AbstractType" : "LotteryList";
            RootApp.GetInitData([a], function (e) {
                t.LotteryList = e[a]
            }), this.PagePath ? (this.StateArr = ["账户明细", "充值记录", "提现记录"], this.RechargeStatus = [{
                Id: 0,
                Name: "充值中"
            }, {Id: 1, Name: "充值成功"}, {Id: 2, Name: "充值失败"}], this.WithdrawStatus = [{Id: 0, Name: "处理中"}, {
                Id: 1,
                Name: "提现成功"
            }, {Id: 2, Name: "提现失败"}]) : this.StateArr = e ? ["全部", "未开始", "已开始", "已结束"] : ["全部", "已中奖", "未中奖", "等待开奖"]
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {props: ["Arr", "TopVal", "ShowKey", "WW"]}
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: ["cardArr"], data: function () {
            return {
                LotterArr: {
                    K3: [1407, "L_K3"],
                    SSC: [1e3, "L_SSC"],
                    SYX5: [1100, "L_SYX5"],
                    PK10: [1303, "L_PK10"],
                    KL8: [1302, "L_KL8"],
                    FC3D: [1201, "L_FC3D"],
                    PL35: [1202, "L_PL35"]
                }
            }
        }, methods: {
            getOver: function () {
                this.$parent.cardShow = !0
            }, getOut: function () {
                this.$parent.cardShow = !1
            }, getKey: function (t, e) {
                return e.some(function (e) {
                    return e == t
                })
            }, getUrl: function (t) {
                this.getOut(), router.push(t)
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function n(t, e) {
        if (String.prototype.repeat || (String.prototype.repeat = function (t) {
                if (!(t < 0)) {
                    for (var e = "", a = 0; a < t; a++)e += this;
                    return e
                }
            }), t) {
            var a = t.length;
            return a > 3 && a <= 6 ? t = t.slice(0, 2) + "*".repeat(a - 3) + t.slice(-1) : a > 6 ? t = t.slice(0, 2) + "*".repeat(e ? a - 3 : 3) + t.slice(-1) : t
        }
    }

    function r(t, e, a, s, r, i) {
        t = t || this.DefPhoto, a = a ? n(a) : "匿名玩家", this.src = d + v + t, this.name = e ? e : a, this.lottery = s, this.bonus = r, this.UserId = i
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = a(12), o = s(i), l = (a(11), a(51)), c = a(37), u = s(c), d = l.constant.ImgHost, v = l.constant.PhotoPath;
    e.default = {
        data: function () {
            return {
                dataNum: 20,
                visible: 3,
                imgHeight: 60,
                imgIndex: 0,
                scrollTimer: null,
                pullTimer: null,
                scrollInterval: 3e3,
                transitionInterval: 300,
                transition: "all 0.3s linear 0s",
                setArr: ["女", "男", "保密"],
                cardArr: "",
                cardLeft: "",
                cardTop: "",
                cardShow: !1,
                cardDev: "",
                cardPosition: ["上", "下", "左", "右"],
                scrollList: [],
                dataList: [],
                bufferList: []
            }
        }, created: function () {
            var t = this;
            this.getNewestBonusList(this.dataNum), window.onscroll = document.onscroll = function () {
                t.cardShow = !1
            }, this.pullTimer = setInterval(function () {
                t.getNewestBonusList(t.dataNum)
            }, this.scrollInterval * this.dataNum)
        }, methods: {
            beginLoop: function () {
                var t = this;
                this.scrollTimer || (this.scrollTimer = setInterval(function () {
                    var e = t.scrollList.length;
                    e >= 2 * t.visible && t.imgIndex >= e - 1 - t.visible ? (t.imgIndex = e - t.visible, setTimeout(function () {
                        t.transition = "", t.imgIndex = 0, setTimeout(function () {
                            t.transition = "all 0.3s linear 0s"
                        }, 100)
                    }, t.transitionInterval)) : t.imgIndex++
                }, this.scrollInterval))
            }, clearTimer: function () {
                clearInterval(this.scrollTimer), this.scrollTimer = null
            }, getNewestBonusList: function (t, e) {
                var a = this;
                _fetch({Action: "GetNewestBonusList", dataNum: t}).then(function (t) {
                    if (1 === t.Code || 0 === t.Code) {
                        var s = t.BackData.NewestBonusList;
                        a.dataList = [], s.forEach(function (t) {
                            a.dataList.push(new r(t.UserPhoto, t.Nickname, t.UserName, t.LotteryName, t.Bonus, t.UserId))
                        }), a.createScrollList(), e && e()
                    } else layer.msgWarn(t.StrCode)
                })
            }, createScrollList: function () {
                if (this.scrollList = this.dataList.slice(0), this.dataList.length >= this.visible) {
                    for (var t = 0; t < this.visible; t++) {
                        var e = this.dataList[t];
                        this.scrollList.push(e)
                    }
                    this.beginLoop()
                }
            }, getCard: function (t, e, a) {
                this.cardDev = t;
                var s = this.cardPosition.indexOf(a);
                if (s == -1)return !1;
                var n = e.target, r = n.offsetTop, i = n.offsetLeft, o = n.offsetWidth, l = n.offsetHeight, c = n.parentNode.offsetTop, u = n.parentNode.offsetLeft, d = document.documentElement.scrollTop || window.scrollY;
                switch (a) {
                    case"上":
                        this.cardTop = r + c - l - 150, this.cardLeft = i + u - 50;
                        break;
                    case"下":
                        this.cardTop = r + c + l, this.cardLeft = i + u - 100;
                        break;
                    case"左":
                        this.cardTop = r + c - (d || 0), this.cardLeft = i + u - 300;
                        break;
                    case"右":
                        this.cardTop = r + c, this.cardLeft = i + u + o
                }
                this.getCardDate(t)
            }, getCardDate: function (t) {
                var e = JSON.parse(sessionStorage.getItem("card" + t));
                if (e)this.cardArr = e, this.cardShow = !0; else {
                    if (this.cardArr = "", this.ispass)return !1;
                    this.ispass = !0;
                    var a = this;
                    setTimeout(function () {
                        a.getData(t)
                    }, 500)
                }
            }, getData: function (t) {
                var e = this, a = {Action: "GetCard", UserId: t};
                _fetch(a).then(function (a) {
                    if (1 === a.Code || 0 === a.Code) {
                        var s = e.setCardArr(a.BackData);
                        sessionStorage.setItem("card" + t, (0, o.default)(s)), e.cardDev == t ? (e.cardArr = s, e.cardShow = !0) : (e.cardArr = "", e.cardShow = !1)
                    } else e.cardShow = !1;
                    e.ispass = !1
                })
            }, setCardArr: function (t) {
                var e = t;
                return e.Sex = this.setArr[e.Sex],
                    e.LotteryType = e.LotteryType.split(","), e
            }, getOut: function (t) {
                this.cardShow || (this.cardDev = ""), this.cardShow = !1
            }
        }, beforeDestroy: function () {
            clearInterval(this.scrollTimer), clearInterval(this.pullTimer), this.scrollTimer = null, this.pullTimer = null
        }, components: {UserCard: u.default}
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    a(11);
    e.default = {
        data: function () {
            return {detailLength: 26}
        }, computed: {
            basket: function () {
                return this.$store.state.lt.basket
            }, config: function () {
                return this.$store.state.lt.config
            }, award: function () {
                return this.$store.state.lt.award
            }, lottery: function () {
                return this.$store.state.lt.lottery.LotteryName
            }, NowIssue: function () {
                return this.$store.state.lt.NowIssue
            }, basketBets: function () {
                return this.$store.getters.basketBets
            }, basketTotal: function () {
                return this.$store.getters.basketTotal
            }, isChase: function () {
                return this.$store.state.lt.isChase
            }, noNeedChase: function () {
                return ["PL35", "FC3D"].indexOf(this.$route.params.type) > -1
            }
        }, methods: {
            unitStr: function (t) {
                var e = "";
                switch (t) {
                    case.01:
                        e = "分";
                        break;
                    case.1:
                        e = "角";
                        break;
                    default:
                        e = "元"
                }
                return e
            }, getTag: function (t) {
                var e = this.config, a = t.play_detail_code.slice(-3), s = t.betting_number;
                for (var n in e) {
                    var r = e[n];
                    for (var i in r)for (var o = r[i], l = 0; l < o.length; l++)if (o[l].mode === a) {
                        var c = "[" + o[l].group + "," + o[l].subGroup + "," + o[l].name + "] " + s;
                        return c
                    }
                }
            }, getExpectAward: function (t) {
                var e = t.betting_point.split("-")[0] * t.graduation_count * t.betting_model;
                return Math.floor(1e4 * e) / 1e4
            }, deleteBet: function (t) {
                this.$store.commit("lt_deleteBet", t)
            }, showBetDetail: function (t) {
                layer.msgWarn(t)
            }, confirmBet: function () {
                var t = this, e = [];
                this.basket.forEach(function (a) {
                    e.push("" + t.getTag(a))
                });
                var a = '<div id="CheckBetLayer" class="lotteryConfirm">\n      <ul>\n        <li><span>彩种：</span><em class="fill">' + this.lottery + '</em></li>\n        <li><span>期号：</span>第<em class="fill layerIssue">' + this.NowIssue + '</em>期</li>\n        <li><span>详情：</span>\n          <div class="fill textarea">\n            <p>' + e.join("<br>") + '</p>\n          </div>\n        </li>\n        <li><span>投注总金额：</span><em><em class="fill _submitPlansMoney">' + this.basketTotal + "</em>元</em>\n        </li>\n      </ul>\n    </div>";
                if (this.basket.length)var s = layer.open({
                    title: "投注确认",
                    className: "layerBet",
                    shadeClose: !1,
                    content: a,
                    btn: ["确认投注", "取消"],
                    yes: function () {
                        layer.close(s), t.$store.dispatch("lt_confirmBet")
                    },
                    no: function () {
                    }
                }); else layer.msgWarn("请至少选择一注投注号码")
            }, changeIsChase: function (t) {
                if (t) {
                    if (!this.basket.length)return this.$refs.notChase.checked = !0, this.$refs.chase.checked = !1, void layer.msgWarn("请至少选择一注投注号码");
                    var e = this.basket, a = e.some(function (t) {
                        return t.play_detail_code !== e[0].play_detail_code || t.betting_model !== e[0].betting_model
                    });
                    if (a)return this.$refs.notChase.checked = !0, this.$refs.chase.checked = !1, void layer.msgWarn("追号不支持混投，请确保您的投注都为同一玩法且元角分模式一致。")
                }
                this.$store.commit("lt_setIsChase", t)
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(336), r = s(n), i = a(338), o = s(i), l = a(326), c = s(l), u = a(330), d = s(u);
    e.default = {components: {modeSelect: r.default, playArea: o.default, basket: c.default, chaseBox: d.default}}
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = a(3), n = a(11), r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i = ["大", "小", "单", "双"], o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], d = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"], v = (0, s.createStringArray)(1, 40), m = (0, s.createStringArray)(41, 80), f = (0, s.createStringArray)(1, 10), p = {
        "全": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "大": [5, 6, 7, 8, 9],
        "小": [0, 1, 2, 3, 4],
        "奇": [1, 3, 5, 7, 9],
        "偶": [0, 2, 4, 6, 8],
        "清": []
    }, h = {
        "全": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
        "大": ["06", "07", "08", "09", "10", "11"],
        "小": ["01", "02", "03", "04", "05"],
        "奇": ["01", "03", "05", "07", "09", "11"],
        "偶": ["02", "04", "06", "08", "10"],
        "清": []
    }, _ = {
        "全": ["03", "04", "05", "06", "07", "08", "09"],
        "大": ["06", "07", "08", "09"],
        "小": ["03", "04", "05"],
        "奇": ["03", "05", "07", "09"],
        "偶": ["04", "06", "08"],
        "清": []
    }, g = {
        "全": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        "大": ["06", "07", "08", "09", "10"],
        "小": ["01", "02", "03", "04", "05"],
        "奇": ["01", "03", "05", "07", "09"],
        "偶": ["02", "04", "06", "08", "10"],
        "清": []
    }, y = {
        10000: {tag: "万位", itemArr: r, filters: p},
        1000: {tag: "千位", itemArr: r, filters: p},
        100: {tag: "百位", itemArr: r, filters: p},
        10: {tag: "十位", itemArr: r, filters: p},
        1: {tag: "个位", itemArr: r, filters: p},
        xxxx: {tag: "四重号位", itemArr: r, filters: p},
        xxx: {tag: "三重号位", itemArr: r, filters: p},
        xx: {tag: "二重号位", itemArr: r, filters: p},
        x: {tag: "单号位", itemArr: r, filters: p},
        zx120: {tag: "组选120", itemArr: r, filters: p},
        zx24: {tag: "组选24", itemArr: r, filters: p},
        yffs: {tag: "一帆风顺", itemArr: r, filters: p},
        hscs: {tag: "好事成双", itemArr: r, filters: p},
        sxbx: {tag: "三星报喜", itemArr: r, filters: p},
        sjfc: {tag: "四季发财", itemArr: r, filters: p},
        i10000: {tag: "万位", itemArr: i},
        i1000: {tag: "千位", itemArr: i},
        i100: {tag: "百位", itemArr: i},
        i10: {tag: "十位", itemArr: i},
        i1: {tag: "个位", itemArr: i},
        whole: {itemArr: r},
        psum27: {tag: "和值", itemArr: o},
        psum18: {tag: "和值", itemArr: c},
        csum26: {tag: "和值", itemArr: l},
        csum17: {tag: "和值", itemArr: u},
        baodan: {tag: "包胆", itemArr: r},
        diff: {tag: "跨度", itemArr: r},
        budingwei: {tag: "不定位", itemArr: r},
        z3: {tag: "组三", itemArr: r},
        z6: {tag: "组六", itemArr: r},
        zx: {tag: "组选", itemArr: r},
        d1: {tag: "第一位", itemArr: d, filters: h},
        d2: {tag: "第二位", itemArr: d, filters: h},
        d3: {tag: "第三位", itemArr: d, filters: h},
        d: {itemArr: d, filters: h},
        _budingwei: {tag: "不定位", itemArr: d, filters: h},
        dm: {tag: "胆码", itemArr: d},
        tm: {tag: "拖码", itemArr: d, filters: h},
        qezx: {tag: "前二组选", itemArr: d, filters: h},
        qszx: {tag: "前三组选", itemArr: d, filters: h},
        x1z1: {tag: "选一中一", itemArr: d, filters: h},
        x2z2: {tag: "选二中二", itemArr: d, filters: h},
        x3z3: {tag: "选三中三", itemArr: d, filters: h},
        x4z4: {tag: "选四中四", itemArr: d, filters: h},
        x5z5: {tag: "选五中五", itemArr: d, filters: h},
        x6z5: {tag: "选六中五", itemArr: d, filters: h},
        x7z5: {tag: "选七中五", itemArr: d, filters: h},
        x8z5: {tag: "选八中五", itemArr: d, filters: h},
        dds: {itemArr: ["5单0双", "4单1双", "3单2双", "2单3双", "1单4双", "0单5双"]},
        czw: {tag: "猜中位", itemArr: ["03", "04", "05", "06", "07", "08", "09"], filters: _},
        above: {tag: "上盘", itemArr: v},
        below: {tag: "下盘", itemArr: m},
        szx: {itemArr: ["上", "中", "下"]},
        jho: {itemArr: ["奇", "和", "偶"]},
        isum: {itemArr: ["大单", "大双", "小单", "小双"]},
        first: {tag: "冠军", itemArr: f, filters: g},
        second: {tag: "亚军", itemArr: f, filters: g},
        third: {tag: "季军", itemArr: f, filters: g},
        fourth: {tag: "第四", itemArr: f, filters: g},
        fifth: {tag: "第五", itemArr: f, filters: g},
        sixth: {tag: "第六", itemArr: f, filters: g},
        seventh: {tag: "第七", itemArr: f, filters: g},
        eighth: {tag: "第八", itemArr: f, filters: g},
        ninth: {tag: "第九", itemArr: f, filters: g},
        tenth: {tag: "第十", itemArr: f, filters: g}
    };
    e.default = {
        props: ["alias"], computed: (0, n.mapState)({
            config: function () {
                return y[this.alias]
            }, chosen: function () {
                return state.lt.tmp[this.alias]
            }, isSquare: function () {
                return ["dds", "isum", "szx", "jho"].indexOf(this.alias) > -1
            }, betboxClass: function () {
                var t = this.$route.params.type, e = this.config, a = e.tag, s = e.filters, n = ["i10000", "i1000", "i100", "i10", "i1"];
                return "SYX5" === t ? "dds" === this.alias ? "selectCenter" : "czw" === this.alias ? "selectNormal" : "selectSYX5" : n.indexOf(this.alias) > -1 ? "selectDsds" : a && s ? "selectNormal" : a ? "selectMini" : "selectCenter"
            }
        }), methods: {
            choose: function (t) {
                var e = this.chosen.indexOf(t), a = this.chosen.slice(0);
                if ("baodan" === this.alias)return void this.$emit("choose", this.alias, [t]);
                if (e > -1) {
                    a.splice(e, 1);
                    var n = a
                } else {
                    var r = "KL8" === this.$route.params.type, i = "A10" !== this.$store.state.lt.mode.mode;
                    if (r && i) {
                        var o = this.$store.state.lt.tmp.above, l = this.$store.state.lt.tmp.below;
                        if (o.length + l.length >= 8)return void layer.msgWarn("对不起，当前玩法最多只能选择8个号码")
                    }
                    var c = "SYX5" === this.$route.params.type, u = this.$store.state.lt.mode.mode, d = {
                        B23: 2,
                        B33: 2,
                        C23: 3,
                        C33: 3,
                        D13: 4,
                        E13: 5,
                        F13: 6,
                        G13: 7,
                        H13: 8
                    };
                    c && "dm" === this.alias && a.length >= d[u] - 1 && a.splice(a.length - 1, 1), a.push(t), a = (0, s.unique)(a);
                    for (var n = [], v = this.config.itemArr, m = 0; m < v.length; m++)a.indexOf(v[m]) > -1 && n.push(v[m])
                }
                this.$emit("choose", this.alias, n)
            }, filter: function (t) {
                this.$emit("choose", this.alias, this.config.filters[t].slice(0))
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = a(11), n = [0, 5];
    e.default = {
        data: function () {
            return {gridWidth: 112, viewport: n}
        }, watch: {
            $route: function (t, e) {
                t.params.type !== e.params.type && (this.viewport = n)
            }
        }, computed: (0, s.mapState)({
            LotteryClassID: function () {
                return this.$route.params.code.slice(0, 2)
            }, LotteryList: function t() {
                var e = this, a = this.$store.state.LotteryConfig, s = [];
                a.forEach(function (t) {
                    t.LotteryClassID === e.LotteryClassID && (s = t.LotteryList)
                });
                var t = s.map(function (t) {
                    return e.$store.state.LotteryList[t]
                });
                return t
            }, nowLottery: function (t) {
                return t.lt.lottery.LotteryName
            }
        }), methods: {
            changeLottery: function (t) {
                this.$store.commit("lt_changeLottery", t)
            }, moveNav: function (t) {
                var e = this.LotteryList.length;
                e <= 6 ? t < 0 ? layer.msg("已经到顶啦", 2) : layer.msg("已经到底啦", 2) : (this.viewport = this.viewport.map(function (e) {
                    return e + t
                }), this.viewport[0] < 0 ? (this.viewport = n, layer.msg("已经到顶啦", 2)) : this.viewport[1] >= e && (this.viewport = [e - 6, e - 1], layer.msg("已经到底啦", 2)))
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function n(t, e, a) {
        this.issueNo = t, this.graduation_count = e, this.money = +a
    }

    function r(t, e, a, s, n) {
        this.checked = t, this.issueNo = e, this.multiple = a, this.basketTotal = s, this.money = (this.multiple * this.basketTotal).toFixed(2), this.time = n
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = a(3), o = a(331), l = s(o), c = a(332), u = s(c);
    r.prototype.setMultiple = function (t) {
        this.multiple = t, this.money = (this.multiple * this.basketTotal).toFixed(2)
    }, e.default = {
        components: {chaseConfig: l.default, chaseList: u.default}, created: function () {
            this.updateStartIssue()
        }, data: function () {
            return {
                isStopAfterWin: !0,
                chaseConfig: [{
                    name: "普通追号",
                    cols: 5,
                    startIssue: 0,
                    chaseIssue: 10,
                    chasePower: 1,
                    scheme: []
                }, {
                    name: "翻倍追号",
                    cols: 5,
                    startIssue: 0,
                    chaseIssue: 10,
                    chasePower: 1,
                    scheme: [],
                    specialIndex: 0,
                    specialConfig: [{each: 2, multiple: 2}, {since: 5, multiple: 3}]
                }, {
                    name: "盈利率追号",
                    cols: 7,
                    startIssue: 0,
                    chaseIssue: 10,
                    chasePower: 1,
                    scheme: [],
                    specialIndex: 0,
                    specialConfig: [{rateBefore: 1}, {since: 5, rateBefore: .3, rateAfter: .1}]
                }, {
                    name: "盈利金额追号",
                    startIssue: 0,
                    chaseIssue: 10,
                    chasePower: 1,
                    cols: 7,
                    scheme: [],
                    specialIndex: 0,
                    specialConfig: [{cashBefore: 100}, {since: 2, cashBefore: 100, cashAfter: 50}]
                }],
                chaseMode: 0,
                scheme: []
            }
        }, watch: {
            $route: function (t, e) {
                t.params.type !== e.params.type && (this.chaseMode = 0, this.scheme = [])
            }, isChase: function (t, e) {
                t && this.createRenderScheme()
            }, issueNo: function (t, e) {
                this.updateStartIssue(), this.createRenderScheme()
            }
        }, computed: {
            isChase: function () {
                return this.$store.state.lt.isChase
            }, issueNo: function () {
                return this.$store.state.lt.IssueNo
            }, issueTotal: function () {
                return this.$store.state.lt.scheme.length
            }, schemeBets: function () {
                return this.$store.getters.schemeBets
            }, schemeTotal: function () {
                return this.$store.getters.schemeTotal
            }, award: function () {
                return this.$store.state.lt.award
            }, LotteryName: function () {
                return this.$store.state.lt.lottery.LotteryName
            }, bet: function () {
                return this.$store.state.lt.bet
            }, basket: function () {
                return this.$store.state.lt.basket
            }, LotteryCode: function () {
                return this.$store.state.lt.lottery.LotteryCode
            }, NowIssue: function () {
                return this.$store.state.lt.NowIssue
            }
        }, methods: {
            changeChaseMode: function (t) {
                var e = this.$route.params.type, a = "KL8" === e || "PK10" === e;
                return a && t >= 2 ? void layer.msgWarn("当前玩法不支持盈利率和盈利金额追号") : (this.chaseMode = t, void this.createRenderScheme())
            }, chaseErr: function (t) {
                this.isChase && layer.msgWarn(t)
            }, createRenderScheme: function () {
                function t(t, e, a, s) {
                    function n(a, n, r) {
                        this.checked = !0, this.issueNo = (0, i.computeIssue)(c, r), this.multiple = a, this.basketTotal = i.PERBET * e * s, this.money = 1 * (a * this.basketTotal).toFixed(4), this.award = 1 * (a * t * s).toFixed(4), this.profit = 1 * (this.award - n).toFixed(4), this.profitRate = (this.profit / n * 100).toFixed(2) + "%"
                    }

                    function r(a, r, o, l) {
                        var c, u, d = [], v = 0, f = "";
                        if (t <= i.PERBET * e) {
                            var p = "方案注数不能超过" + Math.floor(t / i.PERBET) + "注！";
                            return void m(p)
                        }
                        if (l[0] > -1 && l[1] === -1 && l[2] === -1)f = "A"; else {
                            if (!l.every(function (t) {
                                    return t > -1
                                }))return void layer.msgWarn("高级追号 预期盈利金额 配置错误");
                            f = "S"
                        }
                        for (var h = 0; h < a; h++) {
                            switch (f) {
                                case"A":
                                    u = l[0];
                                    break;
                                case"S":
                                    u = h < l[1] ? l[0] : l[2]
                            }
                            var _ = o + h;
                            if (c = Math.ceil((u + v) / (t * s - i.PERBET * e * s)), c <= r && (c = r), c > i.Max_Rate) {
                                var p = "您的倍数已超过" + i.Max_Rate + "倍";
                                m(p);
                                break
                            }
                            v += c * i.PERBET * e * s;
                            var g = new n(c, v, _);
                            d.push(g)
                        }
                        return d
                    }

                    function o(a, r, o, l) {
                        var c, u, d = [], v = 1e-10, f = "";
                        if (t <= i.PERBET * e)return void layer.msgWarn("方案注数不能超过" + Math.floor(t / i.PERBET) + "注！");
                        var p = (t - i.PERBET * e) / (i.PERBET * e);
                        if (p = +p.toFixed(4), l[0] > p || l[2] > p) {
                            var h = "您设置的盈利率不能超过" + (100 * p).toFixed(2) + "%！";
                            return void m(h)
                        }
                        if (l[0] > -1 && l[1] === -1 && l[2] === -1)f = "A"; else {
                            if (!l.every(function (t) {
                                    return t > -1
                                }))return void layer.msgWarn("高级追号 预期盈利率 配置错误");
                            f = "S"
                        }
                        for (var _ = 0; _ < a; _++) {
                            switch (f) {
                                case"A":
                                    u = l[0];
                                    break;
                                case"S":
                                    u = _ < l[1] ? l[0] : l[2]
                            }
                            var g = o + _;
                            if (c = Math.ceil((u + 1) * v / (t * s - i.PERBET * e * (u + 1) * s)), c === 1 / 0) {
                                c = r, v += c * i.PERBET * e * s;
                                var y = new n(c, v, g);
                                d.push(y);
                                break
                            }
                            if (c <= r && (c = r), c > i.Max_Rate) {
                                var h = "您的倍数已超过" + i.Max_Rate + "倍";
                                m(h);
                                break
                            }
                            v += c * i.PERBET * e * s;
                            var y = new n(c, v, g);
                            d.push(y)
                        }
                        return d
                    }

                    switch (n.prototype.setMultiple = function (t) {
                        this.multiple = t, this.money = (this.multiple * this.basketTotal).toFixed(2)
                    }, a) {
                        case"cash":
                            return r;
                        case"rate":
                            return o;
                        default:
                            console.log("模式code错误")
                    }
                }

                var e = (this.$store.state.lt, this.chaseConfig[this.chaseMode]), a = e.chaseIssue, s = e.chasePower, n = e.startIssue, o = e.specialConfig, l = e.specialIndex, c = this.LotteryCode, u = this.$store.getters.basketTotal, d = this.$store.state.lt.bet.betting_model, v = this.$store.getters.basketBets;
                e.scheme = [];
                var m = this.chaseErr;
                if (0 === this.chaseMode)for (var f = 0, p = e.chaseIssue; f < p; f++) {
                    var h = (0, i.computeIssue)(c, e.startIssue + f), _ = this.getChaseOpenTime(e.startIssue + f, c), g = new r(!0, h, s, u, _);
                    e.scheme.push(g)
                } else if (1 === this.chaseMode)if (l)for (var y = o[l], b = y.since, C = y.multiple, f = 0, p = e.chaseIssue; f < p; f++) {
                    if (f >= b && (s = C), s > i.Max_Rate) {
                        this.chaseErr("倍数最大不能超出" + i.Max_Rate + "倍");
                        break
                    }
                    var h = (0, i.computeIssue)(c, e.startIssue + f), _ = this.getChaseOpenTime(e.startIssue + f, c), g = new r(!0, h, s, u, _);
                    e.scheme.push(g)
                } else for (var w = o[l], S = w.each, C = w.multiple, f = 0, p = e.chaseIssue; f < p; f++) {
                    var x = f + 1;
                    if (x % S === 1 && 1 !== x ? s *= C : 1 === S && (s *= C), s > i.Max_Rate) {
                        this.chaseErr("倍数最大不能超出" + i.Max_Rate + "倍");
                        break
                    }
                    var h = (0, i.computeIssue)(c, e.startIssue + f), _ = this.getChaseOpenTime(e.startIssue + f, c), g = new r(!0, h, s, u, _);
                    e.scheme.push(g)
                } else if (2 === this.chaseMode)if (l) {
                    var A = o[l], b = A.since, k = A.rateBefore, D = A.rateAfter, M = t(this.award, v, "rate", d);
                    e.scheme = M(a, s, n, [k, b, D])
                } else {
                    var k = o[l].rateBefore, M = t(this.award, v, "rate", d);
                    e.scheme = M(a, s, n, [k, -1, -1])
                } else if (l) {
                    var N = o[l], b = N.since, B = N.cashBefore, B = N.cashBefore, M = t(this.award, v, "cash", d);
                    e.scheme = M(a, s, n, [B, b, B])
                } else {
                    var B = o[l].cashBefore, M = t(this.award, v, "cash", d);
                    e.scheme = M(a, s, n, [B, -1, -1])
                }
                this.createScheme()
            }, updateStartIssue: function () {
                var t = this;
                this.chaseConfig.map(function (e) {
                    e.startIssue = t.$store.state.lt.IssueNo
                })
            }, createScheme: function () {
                var t = this.chaseConfig[this.chaseMode].scheme;
                if (this.scheme = [], t && t.length)for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    a.checked && this.scheme.push(new n(a.issueNo, a.multiple, a.money))
                }
                this.$store.commit("lt_setScheme", this.scheme)
            }, comfirmChase: function () {
                var t = this, e = this.chaseConfig[this.chaseMode], a = e.specialConfig, s = e.specialIndex;
                e.startIssue;
                if (!this.scheme.length)return void layer.msgWarn("追号期数不能为零！");
                var n = this.LotteryName, r = this.basket.map(function (t) {
                    return t.betting_number
                }).join("<br>"), i = this.schemeTotal, o = this.scheme[0].issueNo, l = this.scheme[this.scheme.length - 1].issueNo, c = '<div id="CheckBetLayer" class="lotteryConfirm chaseLayer">\n                  <ul>\n                    <li><span>彩种：</span><em class="fill">' + n + ' </em></li>\n                    <li><span>期号：</span><em class="fill">' + o + "期 至第 " + l + "期 共" + this.scheme.length + '期</em></li>\n                    <li><span>详情：</span><div class="fill textarea">' + r + '</div></li>\n                    <li><span>投注总金额：</span><em><em class="fill _submitPlansMoney">' + i + "</em>元</em></li>\n                  </ul>\n              </div>", u = layer.open({
                    type: 1,
                    title: "投注确认",
                    className: "layerBet",
                    content: c,
                    area: "450px",
                    btn: ["确认投注", "取消"],
                    yes: function (e) {
                        layer.close(u), t.chaseMode ? store.dispatch({
                            type: "lt_chase",
                            isStopAfterWin: t.isStopAfterWin,
                            startIssue: o,
                            specialConfig: a[s]
                        }) : store.dispatch({
                            type: "lt_chase",
                            isStopAfterWin: t.isStopAfterWin,
                            startIssue: o,
                            specialConfig: null
                        })
                    },
                    no: function () {
                    }
                })
            }, getChaseOpenTime: function (t, e) {
                var a, s, n = this.$store.state.lt;
                a = Math.floor(t / n.PlanLen);
                var r = t - a * n.PlanLen;
                return s = a ? new Date((1 * n.Todaystr + a + "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")).format("yyyyMMdd") : n.Todaystr, "1001" === e && r >= 84 && (s = new Date((1 * s + 1 + "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")).format("yyyyMMdd")), s + " " + n.LotteryPlan[r].EndTime
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = a(3);
    e.default = {
        props: ["chaseMode", "chaseConfig"], computed: {
            startIssueArr: function t() {
                for (var e = this.$store.state.lt.IssueNo, t = [], a = 0; a < s.Max_Chase_Issue; a++) {
                    var n = (0, s.computeIssue)(this.$route.params.code, e + a);
                    t.push({issueNo: e + a, issueStr: n})
                }
                return t
            }
        }, methods: {
            selectChaseIssue: function (t, e) {
                this.$parent.chaseConfig[t].chaseIssue = e, this.$parent.createRenderScheme()
            }, changeChaseIssue: function (t, e) {
                var a = (0, s.checkIssue)(e, 10);
                this.$parent.chaseConfig[t].chaseIssue = a, 0 === t && this.$parent.createRenderScheme()
            }, changeChasePower: function (t, e) {
                var a = (0, s.checkMultiple)(e, 1);
                this.$parent.chaseConfig[t].chasePower = a, 0 === t && this.$parent.createRenderScheme()
            }, changeStartIssue: function (t, e) {
                this.$parent.chaseConfig[t].startIssue = e
            }, changeSpecialIndex: function (t, e) {
                this.$parent.chaseConfig[t].specialIndex = e
            }, changeSpecialConfig: function (t, e, a, n, r) {
                var i = ["each", "since"], o = ["rateBefore", "rateAfter"], l = ["cashBefore", "cashAfter"], c = n.value;
                c = o.indexOf(a) > -1 ? (0, s.checkRate)(n, r) : l.indexOf(a) > -1 ? (0, s.checkInt)(n, r) : i.indexOf(a) > -1 ? (0, s.checkIssue)(n, r) : (0, s.checkMultiple)(n, r), this.$parent.chaseConfig[t].specialConfig[e][a] = +c
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = a(3);
    e.default = {
        props: ["cols", "renderScheme"], computed: {
            NowIssue: function () {
                return this.$store.state.lt.NowIssue
            }
        }, methods: {
            changeSchemeCheck: function (t, e) {
                var a = this.$parent, s = a.chaseConfig[a.chaseMode].scheme;
                s[t].checked = e, a.createScheme()
            }, changeAllSchemeCheck: function (t) {
                var e = this.$parent, a = e.chaseConfig[e.chaseMode].scheme;
                a.map(function (e) {
                    e.checked = t
                }), e.createScheme()
            }, changeMultiple: function (t, e) {
                var a = (0, s.checkMultiple)(e, 1), n = this.$parent, r = n.chaseConfig[n.chaseMode].scheme;
                r[t].setMultiple(+a), n.createScheme()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t, e, a, s) {
        var n = t.lt;
        t.lt.bet;
        this.lottery_code = n.lottery.LotteryCode, this.play_detail_code = n.lottery.LotteryCode + n.mode.mode, this.betting_number = e, this.betting_count = s, this.betting_money = 0, this.betting_point = a + "-" + n.Rebate[n.lottery.LotteryType], this.betting_model = 1, this.betting_issuseNo = n.NowIssue, this.graduation_count = 1, this.compress = ""
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(11), r = a(3), i = function (t) {
        return t.map(function (t) {
            return t.length
        })
    }, o = function (t, e) {
        var a = t.map(function (t) {
            return t.join(" ")
        });
        return "C10" === e ? a.filter(function (t) {
            return t
        }).join(",") : a.join(",")
    }, l = {
        A10: {
            itemArr: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, "大", "小", "单", "双"],
            line: [["大", "小", "单", "双"], [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]],
            index: 0,
            alg: function (t) {
                return i(t).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        B10: {
            itemArr: ["三同号通选"], index: 1, line: [["三同号通选"]], alg: function (t) {
                return t[0].length
            }
        },
        C10: {
            itemArr: [111, 222, 333, 444, 555, 666],
            index: 2,
            line: [[111], [222], [333], [444], [555], [666]],
            alg: function (t) {
                return i(t).reduce(function (t, e) {
                    return t + e
                })
            }
        },
        D10: {
            itemArr: [1, 2, 3, 4, 5, 6], index: 3, line: [[1, 2, 3, 4, 5, 6]], alg: function (t) {
                return (0, r.C)(t[0].length, 3)
            }
        },
        E10: {
            itemArr: ["三连号通选"], index: 4, line: [["三连号通选"]], alg: function (t) {
                return t[0].length
            }
        },
        F10: {
            itemArr: [11, 22, 33, 44, 55, 66], index: 5, line: [[11, 22, 33, 44, 55, 66]], alg: function (t) {
                return t[0].length
            }
        },
        G10: {
            itemArr: [11, 22, 33, 44, 55, 66, 1, 2, 3, 4, 5, 6],
            index: 6,
            line: [[11, 22, 33, 44, 55, 66], [1, 2, 3, 4, 5, 6]],
            alg: function (t) {
                return (0, r.mul)(2, i(t))
            }
        },
        H10: {
            itemArr: [1, 2, 3, 4, 5, 6], index: 7, line: [[1, 2, 3, 4, 5, 6]], alg: function (t) {
                return (0, r.C)(t[0].length, 2)
            }
        }
    };
    s.prototype.setUnitPrice = function (t) {
        this.betting_money = t * this.betting_count
    }, s.prototype.setRebate = function (t, e) {
        var a = e.lt;
        this.betting_point = t + "-" + a.Rebate[a.lottery.LotteryType]
    }, e.default = {
        created: function () {
            this.$store.commit({type: "lt_updateTmp", alias: "K3", arr: []})
        }, data: function () {
            return {
                config: l,
                betStr: "",
                betCount: 0,
                addWhenSelect: [0, 1, 4],
                G10ItemArr1: [11, 22, 33, 44, 55, 66],
                G10ItemArr2: [1, 2, 3, 4, 5, 6]
            }
        }, computed: (0, n.mapState)({
            LotteryConfig: function (t) {
                return t.lt.config
            }, nowMode: function (t) {
                return t.lt.mode
            }, nowGroupItem: function () {
                return this.$store.state.lt.config[this.nowMode.group]
            }, tip: function (t) {
                return t.lt.mode.tip
            }, award: function () {
                return state.lt.award
            }, tipAward: function () {
                if ("A10" !== this.nowMode.mode)return this.award;
                if (this.award && this.award.length) {
                    var t = this.award.length;
                    return this.award[t - 1] + "-" + this.award[0]
                }
            }, nowItemArr: function () {
                return this.config[this.nowMode.mode].itemArr
            }, chosen: function () {
                return state.lt.tmp.K3
            }, basket: function () {
                return state.lt.basket
            }, basketBets: function () {
                return this.$store.getters.basketBets
            }, basketTotal: function () {
                return this.$store.getters.basketTotal
            }, showPanel: function () {
                return this.addWhenSelect.indexOf(this.config[this.nowMode.mode].index) === -1
            }, LotteryName: function () {
                return this.$store.state.lt.lottery.LotteryName
            }, NowIssue: function () {
                return this.$store.state.lt.NowIssue
            }, sumOdds: function () {
                var t = this.award, e = this.nowItemArr;
                if (!t || !t.length || "A10" !== this.nowMode.mode)return [];
                for (var a = [], s = 0; s < e.length; s++) {
                    e[s];
                    "string" == typeof e[s] ? a.push(t[8]) : e[s] >= 3 && e[s] <= 10 ? a.push(t[e[s] - 3]) : a.push(t[18 - e[s]])
                }
                return a
            }
        }), methods: {
            shouldHighlight: function (t) {
                return this.showPanel ? this.chosen.indexOf(t) > -1 : (t += "", this.basket.some(function (e) {
                    return e.betting_number === t
                }))
            }, changeMode: function (t) {
                l[this.nowMode.mode];
                this.betCount = 0, this.betStr = "", this.$store.commit("lt_changeMode", t);
                var e = ["A10", "B10", "E10"];
                if (e.indexOf(t.mode) > -1) {
                    var a = this.basket.map(function (t) {
                        var a = t.play_detail_code.slice(-3);
                        if (e.indexOf(a) > -1)return /^\d$/.test(t.betting_number) ? +t.betting_number : t.betting_number
                    });
                    this.$store.commit({type: "lt_updateTmp", alias: "K3", arr: a})
                }
            }, firstInputFocus: function () {
                var t = this;
                this.$nextTick(function () {
                    t.$refs.k3Basket.querySelector("input").focus()
                })
            }, choose: function (t, e) {
                if (this.award) {
                    var a = this.chosen.indexOf(t), n = this.chosen.slice(0);
                    if (a > -1) {
                        n.splice(a, 1);
                        var i = n
                    } else {
                        if ("G10" === this.nowMode.mode) {
                            var c = t.toString()[0], u = n.indexOf(+c), d = n.indexOf(+(c + c)), v = [u, d];
                            v.forEach(function (t) {
                                t > -1 && n.splice(t, 1)
                            })
                        }
                        n.push(t), n = (0, r.unique)(n);
                        for (var i = [], m = 0; m < this.nowItemArr.length; m++)n.indexOf(this.nowItemArr[m]) > -1 && i.push(this.nowItemArr[m])
                    }
                    this.$store.commit({type: "lt_updateTmp", alias: "K3", arr: i});
                    var f = l[this.nowMode.mode], p = f.line, h = [];
                    if (this.addWhenSelect.indexOf(f.index) > -1) {
                        var _, g = this.basket.slice(0), y = g.some(function (e, a) {
                            if (e.betting_number === t.toString())return _ = a, !0
                        });
                        if (y)g.splice(_, 1), this.$store.commit("lt_setBasket", g); else {
                            var b = "A10" === this.nowMode.mode ? this.sumOdds[e] : this.award, C = new s(this.$store.state, t.toString(), b, 1);
                            g.unshift(C), this.$store.commit("lt_setBasket", g), this.firstInputFocus()
                        }
                    } else {
                        p.forEach(function (t) {
                            for (var e = [], a = 0; a < t.length; a++)n.indexOf(t[a]) > -1 && e.push(t[a]);
                            h.push(e)
                        });
                        var w = f.alg(h);
                        this.betCount = w, this.betStr = o(h, this.nowMode.mode)
                    }
                }
            }, changeUnitPrice: function (t, e) {
                var a = 1e6;
                if (e.value > a)return e.value = a, this.basket[t].setUnitPrice(a), void layer.msg("最高投注额为" + a + "元");
                var s;
                /^\d+$/.test(e.value) ? s = e.value : (s = 0, e.value = 0), this.basket[t].setUnitPrice(s)
            }, confirmBet: function () {
                var t = this;
                if (this.basket.length) {
                    var e = this.basket.some(function (t) {
                        return 0 === t.betting_money
                    });
                    if (e)layer.msgWarn("您有号码未设置金额，请核对后投注。"); else var a = this.basket.map(function (e) {
                        return "[" + t.getModeName(e.play_detail_code.slice(-3)) + "] " + e.betting_number
                    }), s = '<div id="CheckBetLayer" class="lotteryConfirm" >\n              <ul>\n                  <li><span>彩种：</span><em class="fill">' + this.LotteryName + '</em></li>\n                  <li><span>期号：</span>第<em class="fill">' + this.NowIssue + '</em>期</li>\n                  <li><span>详情：</span><div class="fill textarea"><p>' + a.join("<br>") + '</p></div></li>\n                  <li><span>投注总金额：</span><em><em class="fill">' + this.basketTotal + "</em>元</em></li>\n              </ul>\n          </div>", n = layer.open({
                        title: "投注确认",
                        shadeClose: !1,
                        content: s,
                        className: "layerBet",
                        btn: ["确认投注", "取消"],
                        yes: function () {
                            layer.close(n), t.$store.dispatch("lt_confirmBet")
                        },
                        no: function () {
                        }
                    })
                } else layer.msgWarn("请至少选择一注投注号码")
            }, addBet: function () {
                if (!this.betCount)return void layer.msgWarn("号码选择不完整，请重新选择");
                var t = this.basket.slice(0), e = new s(this.$store.state, this.betStr, this.award, this.betCount);
                t.unshift(e), this.$store.commit("lt_setBasket", t), this.firstInputFocus(), this.$store.commit({
                    type: "lt_updateTmp",
                    alias: "K3",
                    arr: []
                }), this.betCount = 0, this.betStr = ""
            }, deleteBet: function (t) {
                this.$store.commit("lt_deleteBet", t)
            }, getModeName: function (t) {
                var e;
                return this.LotteryConfig.map(function (a) {
                    t === a.mode && (e = a.name)
                }), e
            }, getUnitPriceStr: function (t, e) {
                return e && t ? (t / e).toFixed(0) : ""
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(12), r = s(n), i = a(11), o = a(37), l = s(o);
    e.default = {
        data: function () {
            return {
                winState: "lottery",
                BonusList: "",
                BonusIndex: 0,
                Transition: "",
                BonusNum: "",
                setArr: ["女", "男", "保密"],
                cardArr: "",
                cardLeft: "",
                cardTop: "",
                cardDev: "",
                cardShow: !1,
                cardPosition: ["上", "下", "左", "右"],
                RankingList: "",
                ChaseArr: ["K3", "PL35", "FC3D"]
            }
        }, created: function () {
            var t = this, e = ["RankingList"];
            RootApp.GetInitData(e, function (e) {
                t.RankingList = e.RankingList
            }), this.setWscroll(), this.getBonusTimeData(), this.setBonusTimes()
        }, computed: (0, i.mapState)({
            whichRecord: function () {
                return state.lt.whichRecord
            }, pastOpen: function () {
                return this.$store.state.lt.LotteryResults[this.$route.params.code].results
            }, BetRecord: function () {
                return this.$store.state.lt.BetRecord
            }, ChaseRecord: function () {
                return this.$store.state.lt.ChaseRecord
            }, hasChase: function () {
                return this.ChaseArr.indexOf(this.$store.state.lt.lottery.LotteryType) === -1
            }, LotteryType: function () {
                return this.$store.state.lt.lottery.LotteryType
            }
        }), methods: {
            getK3Sum: function (t) {
                return t.split(",").map(function (t) {
                    return +t
                }).reduce(function (t, e) {
                    return t + e
                })
            }, getK3SumType: function (t, e) {
                var a = this.getK3Sum(t), s = {
                    DX: function (t) {
                        return t > 10 ? ["da", "大"] : ["xiao", "小"]
                    }, DS: function (t) {
                        return t % 2 === 1 ? ["dan", "单"] : ["shuang", "双"]
                    }
                };
                return s[e](a)
            }, betRecordUrl: function (t) {
                return t.indexOf(".html") > -1 ? "/betDetail?ID=" + t.replace(/^\S+\/(\d+).html$/, "$1") + "&UID=0" : t
            }, getBonusTimeData: function () {
                var t = this;
                this.clearScroll();
                var e = {Action: "GetNewestBonusList", dataNum: 20};
                _fetch(e).then(function (e) {
                    if (1 == e.Code) {
                        t.BonusList = e.BackData.NewestBonusList, t.BonusNum = e.BackData.NewestBonusList.length;
                        var a = t.BonusList.slice(0, 10);
                        t.BonusNum > 10 && t.BonusList.length == t.BonusNum && (t.BonusList = t.BonusList.concat(a)), t.setScroll()
                    } else layer.msgWarn(e.StrCode)
                })
            }, setBonusTimes: function () {
                var t = this;
                RootApp.isTime && clearTimeout(RootApp.isTime), RootApp.isTime || (RootApp.isTime = setTimeout(function () {
                    t.getBonusTimeData(), t.setBonusTimes()
                }, 6e4))
            }, setWscroll: function () {
                var t = this;
                window.onscroll = document.onscroll = function () {
                    t.cardShow = !1
                }
            }, showResultDetail: function (t) {
                layer.msg(t)
            }, toggleRecord: function (t) {
                this.$store.commit("lt_setWhichRecord", t)
            }, OpenWin: function (t) {
                var e, a, s = window.screen.height - 80, n = window.screen.width, r = 1018, i = .9 * s;
                n < r && (r = .9 * n), e = (s - i) / 2, a = (n - r) / 2, window.open(t, "_blank", "top=" + e + ",left=" + a + ",width=" + r + ",height=" + i)
            }, getCard: function (t, e, a) {
                this.cardDev = t;
                var s = this.cardPosition.indexOf(a);
                if (s == -1)return !1;
                var n = e.target, r = n.offsetTop, i = n.offsetLeft, o = n.offsetWidth, l = n.offsetHeight, c = n.parentNode.offsetTop, u = n.parentNode.offsetLeft, d = document.documentElement.scrollTop || window.scrollY, v = document.querySelector(".bet").offsetLeft;
                switch (a) {
                    case"上":
                        this.cardTop = r + c - l - 150, this.cardLeft = i + u - 50;
                        break;
                    case"下":
                        this.cardTop = r + c + l, this.cardLeft = i + u - 100;
                        break;
                    case"左":
                        this.cardTop = r + c - (d || 0) + 53, this.cardLeft = u + v - 300;
                        break;
                    case"右":
                        this.cardTop = r + c, this.cardLeft = i + u + o
                }
                this.getCardDate(t)
            }, getCardDate: function (t) {
                var e = JSON.parse(sessionStorage.getItem("card" + t));
                if (e)this.cardArr = e, this.cardShow = !0; else {
                    if (this.cardArr = "", this.ispass)return !1;
                    this.ispass = !0;
                    var a = this;
                    setTimeout(function () {
                        a.getData(t)
                    }, 500)
                }
            }, getData: function (t) {
                var e = this, a = {Action: "GetCard", UserId: t};
                _fetch(a).then(function (a) {
                    if (1 === a.Code || 0 === a.Code) {
                        var s = e.setCardArr(a.BackData);
                        sessionStorage.setItem("card" + t, (0, r.default)(s)), e.cardDev == t ? (e.cardArr = s, e.cardShow = !0, e.setWscroll()) : (e.cardArr = "", e.cardShow = !1)
                    } else e.cardShow = !1;
                    e.ispass = !1
                })
            }, setCardArr: function (t) {
                var e = t;
                return e.Sex = this.setArr[e.Sex], e.LotteryType = e.LotteryType.split(","), e
            }, getOut: function (t) {
                this.cardShow || "" == this.cardDev, this.cardShow = !1
            }, setScroll: function () {
                RootApp.isScroll || this.isScroll()
            }, isScroll: function () {
                var t = this;
                this.BonusNum < 11 ? this.clearScroll() : RootApp.isScroll = setTimeout(function () {
                    t.BonusIndex > t.BonusList.length - 1 - 10 ? (t.Transition = "", t.BonusIndex = 0) : (t.BonusIndex++, t.Transition = "all 0.3s linear"), t.isScroll()
                }, 3e3)
            }, clearScroll: function () {
                clearTimeout(RootApp.isScroll), RootApp.isScroll = ""
            }
        }, beforeDestroy: function () {
            this.clearScroll(), clearTimeout(RootApp.isTime), RootApp.isTime = ""
        }, components: {UserCard: l.default}
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = a(11);
    e.default = {
        computed: (0, s.mapState)({
            lotteryInfo: function (t) {
                return t.lt.lottery
            }, NowIssue: function (t) {
                return t.lt.NowIssue
            }, OldIssue: function (t) {
                return t.lt.OldIssue
            }, TimeBar: function (t) {
                return t.lt.TimeBar
            }, ImgHost: function (t) {
                return t.constant.ImgHost
            }, displayResults: function (t) {
                return t.lt.displayResults
            }, results: function () {
                var t = this.$store.state.lt.LotteryResults[this.$route.params.code].results;
                return t && t.length ? t[0].LotteryOpen.split(",") : []
            }, openNumbers: function () {
                var t = this.$route.params.type;
                return ["K3", "PL35", "FC3D"].indexOf(t) > -1 ? 3 : "KL8" === t ? 20 : "PK10" === t ? 10 : 5
            }, headClass: function () {
                var t = this.$route.params.type;
                return "PK10" === t ? "headPK10" : "KL8" === t ? "headKL8" : ""
            }
        })
    }
}, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = a(11);
    e.default = {
        computed: (0, s.mapState)({
            LotteryConfig: function (t) {
                return t.lt.config
            }, nowMode: function (t) {
                return t.lt.mode
            }, nowGroupItem: function () {
                return this.$store.state.lt.config[this.nowMode.group]
            }, tip: function (t) {
                return t.lt.mode.tip
            }, award: function () {
                return state.lt.award
            }, awardBoxText: function () {
                if (Array.isArray(this.award) && "KL8" === this.$route.params.type) {
                    var t = {
                        A12: [3, 2],
                        A13: [4, 3, 2],
                        A14: [5, 4, 3],
                        A15: [6, 5, 4, 3],
                        A16: [7, 6, 5, 4, 0],
                        B10: ["中", "上下"],
                        B11: ["中", "奇偶"]
                    };
                    return t[this.nowMode.mode]
                }
                return []
            }
        }), methods: {
            changeGroup: function (t) {
                var e = this;
                for (var a in t) {
                    var s = t[a];
                    s.forEach(function (t) {
                        t.default && e.$store.commit("lt_changeMode", t)
                    })
                }
            }, changeMode: function (t) {
                this.$store.commit("lt_changeMode", t)
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t = t.replace(/^\s+/g, ""), t = t.replace(/[^\d,，;；\s]/g, ""), t = t.replace(/，/g, ","), t = t.replace(/；/g, ";")
    }

    function n(t, e) {
        var a = r(e);
        return i(a, t)
    }

    function r(t) {
        for (var e = 0; e < t.length; e++)t[e] = t[e].split("").sort(function (t, e) {
            return +t - +e
        }).join("");
        return (0, l.unique)(t)
    }

    function i(t, e) {
        for (var a = [], s = 0; s < t.length; s++) {
            var n = (0, l.unique)(t[s].split("")).length;
            "number" == typeof e ? n === e && a.push(t[s]) : e.some(function (t) {
                return n === t
            }) && a.push(t[s])
        }
        return a
    }

    function o(t) {
        function e(t) {
            for (var e, a = [], s = 0, n = t.length - 1, r = 0; r < t.length; r++)if (e) {
                if (1 !== t[r]) {
                    var i = s ? e + "K" + s : e + "";
                    a.push(i), r === n && a.push(t[r] + ""), e = t[r], s = 0
                } else if (s++, r === n) {
                    var i = e ? e + "K" + s : "K" + s;
                    a.push(i)
                }
            } else if (1 !== t[r]) {
                if (e = t[r], s) {
                    var i = "K" + s;
                    a.push(i), s = 0
                }
                r === n && a.push(t[r] + "")
            } else if (s++, r === n) {
                var i = "K" + s;
                a.push(i)
            }
            return a
        }

        if (t = (0, l.unique)(t.map(function (t) {
                return +t
            })).sort(function (t, e) {
                return t - e
            }), t.length < 2)return t.toString();
        for (var a = t[0], s = [], n = 1; n < t.length; n++)s.push(t[n] - t[n - 1]);
        var r = e(s);
        return r.unshift(a), r.join(",")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var l = a(3), c = a(58), u = function (t) {
        var e = null, a = 0;
        return function (s) {
            e || (e = setTimeout(function () {
                s(), a++, clearTimeout(e), e = null
            }, t))
        }
    }(300);
    e.default = {
        props: ["len", "special"], data: function () {
            return {inputting: !1, betStr: "", legalArr: [], illegalArr: [], exampleText: {}}
        }, computed: {
            mode: function () {
                return this.$store.state.lt.mode.mode
            }, exampleArr: function () {
                return this.exampleText[this.mode]
            }
        }, created: function () {
            var t = this;
            l.bus.$off("clearNoteStr"), l.bus.$on("clearNoteStr", function () {
                t.betStr = "", t.inputting = !1, t.$refs.uploadItem && (t.$refs.uploadItem.value = "")
            });
            var e = this.$route.params.type;
            this.exampleText = c.exampleText[e]
        }, mounted: function () {
            function t() {
                var t = this.files;
                if (window.FileReader) {
                    var a = new FileReader;
                    a.onload = function () {
                        e.inputting = !0, e.betStr = this.result, e.whenInput()
                    }, a.readAsText(t[0])
                } else console.log("不支持FileReader")
            }

            this.$refs.uploadItem.addEventListener("change", t, !1);
            var e = this
        }, methods: {
            hideTip: function () {
                this.inputting = !0, this.$refs.textarea.focus()
            }, showTip: function () {
                this.betStr || (this.inputting = !1, this.$refs.textarea.blur())
            }, whenInput: function () {
                var t = this;
                u(function () {
                    var e = +t.len;
                    t.betStr = s(t.betStr);
                    var a = t.betStr.replace(/[;\s]/g, ","), r = a.split(",");
                    r = r.filter(function (t) {
                        return 0 !== t.length
                    });
                    var i = [], c = [];
                    if (r.forEach(function (t) {
                            t.length === e ? i.push(t) : c.push(t)
                        }), i = (0, l.unique)(i), t.special) {
                        var u = {b3x2x3: n([2, 3], i), b3x2: n(2, i), b3x3: n(3, i), b2x2: n(2, i)};
                        i = u[t.special]
                    }
                    var d = i, v = ["H12", "G12"], m = "SSC" === t.$route.params.type, f = "";
                    m && v.indexOf(t.mode) > -1 && (f = o(d)), t.$store.commit("lt_setBetCount", d.length), t.$store.commit("lt_setBetStr", d.join(",")), t.$store.commit("lt_setBetCompress", f), t.$store.commit({
                        type: "lt_updateTmp",
                        alias: "notebet",
                        arr: d
                    }), t.legalArr = d, t.illegalArr = c, t.repeatNum = i.length - d.length
                })
            }, uploadNoteBet: function () {
                this.$refs.uploadItem.click()
            }, warn: function (t) {
                function e(t) {
                    var e = "";
                    return e = t.length > 20 ? t.slice(0, 21).join(",") + "..." : t.join(",")
                }

                var a = "", s = "";
                if (this.repeatNum) {
                    var n = t ? ",已清除" : "";
                    a = "您有" + this.repeatNum + "注重复注单" + n + "<br>"
                }
                return this.illegalArr.length && (s = "以下投注格式不正确：<br>" + e(this.illegalArr)), this.betStr ? void(this.repeatNum || this.illegalArr.length ? layer.msgWarn(a + s) : layer.msgWarn("全部投注格式正确")) : void layer.msgWarn("请投注")
            }, deleteWrongItem: function () {
                this.warn(!0), this.betStr = this.legalArr.join(","), this.illegalArr = [], this.repeatNum = 0
            }, checkFormat: function () {
                this.warn(!1)
            }, clearNoteBet: function () {
                this.betStr = "", this.whenInput()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function n(t, e, a) {
        for (var s = [], n = 0; n < t.length; n++)s.push(e[t[n]].join(" "));
        return s = s.map(function (t) {
            for (var e = "", s = 0; s < a; s++)e += "-";
            return "" === t ? e : t
        }), s.join(",")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = a(3), i = a(328), o = s(i), l = a(337), c = s(l), u = a(339), d = s(u), v = a(56), m = a(57), f = a(52), p = a(55), h = a(53), _ = a(54), g = {
        SSC: v.sscPlay,
        SYX5: m.syx5Play,
        FC3D: f.fc3dPlay,
        PL35: p.pl3Play,
        KL8: h.kl8Play,
        PK10: _.pk10Play
    };
    e.default = {
        components: {betBox: o.default, noteBet: c.default, syx5NoteBet: d.default}, created: function () {
            var t = this;
            this.ltCfg = g[this.$route.params.type];
            for (var e in this.ltCfg)this.ltCfg[e].render && this.ltCfg[e].render.forEach(function (e) {
                t.$store.commit({type: "lt_updateTmp", alias: e, arr: []})
            })
        }, watch: {
            $route: function (t) {
                var e = this;
                this.ltCfg = g[this.$route.params.type];
                for (var a in this.ltCfg)this.ltCfg[a].render && this.ltCfg[a].render.forEach(function (t) {
                    e.$store.commit({type: "lt_updateTmp", alias: t, arr: []})
                })
            }
        }, data: function () {
            return {
                ltCfg: {},
                Max_Rate: r.Max_Rate,
                unitArr: [{unit: 1, word: "元"}, {unit: .1, word: "角"}, {unit: .01, word: "分"}]
            }
        }, computed: {
            mode: function () {
                return this.$store.state.lt.mode.mode
            }, LotteryType: function () {
                return this.$route.params.type
            }, betCount: function () {
                return this.$store.state.lt.bet.betting_count
            }, betMoney: function () {
                return this.$store.state.lt.bet.betting_money.toFixed(2)
            }, power: {
                get: function () {
                    return this.$store.state.lt.bet.graduation_count
                }, set: function (t) {
                    this.$store.commit("lt_setPower", +t), (t.toString().search(/[^\d]+/) > -1 || t <= 0) && this.$store.commit("lt_setPower", 1), t > r.Max_Rate && (this.$store.commit("lt_setPower", r.Max_Rate), layer.msgWarn("最多" + r.Max_Rate + "倍"))
                }
            }, unit: {
                get: function () {
                    return this.$store.state.lt.bet.betting_model
                }, set: function (t) {
                    this.$store.commit("lt_setUnit", t)
                }
            }
        }, methods: {
            whenChoose: function (t, e) {
                var a = this;
                this.$store.commit({type: "lt_updateTmp", alias: t, arr: e});
                var s = this.$store.state.lt.tmp, r = "SYX5" === this.$route.params.type;
                r && ("dm" === t ? s.dm.forEach(function (t) {
                    var e = s.tm.indexOf(t);
                    if (e > -1) {
                        var n = s.tm.slice(0);
                        n.splice(e, 1), a.$store.commit({type: "lt_updateTmp", alias: "tm", arr: n})
                    }
                }) : "tm" === t && s.tm.forEach(function (t) {
                    var e = s.dm.indexOf(t);
                    if (e > -1) {
                        var n = s.dm.slice(0);
                        n.splice(e, 1), a.$store.commit({type: "lt_updateTmp", alias: "dm", arr: n})
                    }
                }));
                var i = this.ltCfg[this.mode].render, o = this.ltCfg[this.mode].alg(i, s), l = "", c = "KL8" === this.LotteryType && "A1" === this.mode.slice(0, 2), r = "SYX5" === this.LotteryType;
                if (c) {
                    var u = {kl8: s.above.concat(s.below)};
                    l = n(["kl8"], u, 2)
                } else l = r ? n(i, s, 2) : n(i, s, 1);
                this.$store.commit("lt_setBetStr", l), this.$store.commit("lt_setBetCount", o)
            }, addPower: function () {
                this.power++
            }, reducePower: function () {
                this.power--
            }, addBet: function () {
                return this.betCount <= 0 ? void layer.msgWarn("当前为0注，请投注！") : void this.$store.commit("lt_addBet")
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t = t.replace(/^\s+/g, ""), t = t.replace(/[^\d,，;；\s]/g, ""), t = t.replace(/，/g, ","), t = t.replace(/；/g, ";")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(3), r = a(58), i = function (t) {
        var e = null, a = 0;
        return function (s) {
            e || (e = setTimeout(function () {
                s(), a++, clearTimeout(e), e = null
            }, t))
        }
    }(300);
    e.default = {
        props: ["len", "special"], data: function () {
            return {inputting: !1, betStr: "", legalArr: [], illegalArr: [], exampleText: {}}
        }, computed: {
            mode: function () {
                return this.$store.state.lt.mode.mode
            }, exampleArr: function () {
                return this.exampleText[this.mode]
            }
        }, created: function () {
            var t = this;
            n.bus.$off("clearNoteStr"), n.bus.$on("clearNoteStr", function () {
                t.betStr = "", t.inputting = !1, t.$refs.uploadItem && (t.$refs.uploadItem.value = "")
            });
            var e = this.$route.params.type;
            this.exampleText = r.exampleText[e]
        }, mounted: function () {
            function t() {
                var t = this.files;
                if (window.FileReader) {
                    var a = new FileReader;
                    a.onload = function () {
                        e.inputting = !0, e.betStr = this.result, e.whenInput()
                    }, a.readAsText(t[0])
                } else console.log("不支持FileReader")
            }

            this.$refs.uploadItem.addEventListener("change", t, !1);
            var e = this
        }, methods: {
            hideTip: function () {
                this.inputting = !0, this.$refs.textarea.focus()
            }, showTip: function () {
                this.betStr || (this.inputting = !1)
            }, whenInput: function () {
                var t = this;
                i(function () {
                    var e = [], a = [], r = [], i = +t.len;
                    t.betStr = s(t.betStr);
                    for (var o = t.betStr.replace(/[;\n]/g, ","), l = o.split(","), c = (0, n.createStringArray)(0, t.special), u = ["B12", "C12"], d = 0; d < l.length; d++) {
                        var v = l[d], m = v.trim().split(" ").map(function (t) {
                            return +t
                        }), f = m.filter(function (t, e, a) {
                            return a.indexOf(t) === e
                        }), p = m.some(function (t) {
                            return !c[t] || !t
                        }), h = f.length !== i;
                        if (p || h)a.push(v); else {
                            var _ = t.$route.params.type;
                            if (u.indexOf(t.mode) === -1 && "PK10" !== _)var f = f.sort(function (t, e) {
                                return t - e
                            });
                            var g = f.map(function (t) {
                                return c[t]
                            }).join(" ");
                            e.push(g)
                        }
                    }
                    r = (0, n.unique)(e), t.$store.commit("lt_setBetCount", r.length), t.$store.commit("lt_setBetStr", r.join(",")), t.$store.commit({
                        type: "lt_updateTmp",
                        alias: "notebet",
                        arr: r
                    }), t.betArr = r, t.illegalArr = a, t.repeatNum = e.length - r.length
                })
            }, uploadNoteBet: function () {
                this.$refs.uploadItem.click()
            }, warn: function (t) {
                function e(t) {
                    var e = "";
                    return e = t.length > 20 ? t.slice(0, 21).join(",") + "..." : t.join(",")
                }

                var a = "", s = "";
                if (this.repeatNum) {
                    var n = t ? ",已清除" : "";
                    a = "您有" + this.repeatNum + "注重复注单" + n + "<br>"
                }
                return this.illegalArr.length && (s = "以下投注格式不正确：<br>" + e(this.illegalArr)), this.betStr ? void(this.repeatNum || this.illegalArr.length ? layer.msgWarn(a + s) : layer.msgWarn("全部投注格式正确")) : void layer.msgWarn("请投注")
            }, deleteWrongItem: function () {
                this.warn(!0), this.betStr = this.betArr.join(","), this.illegalArr = [], this.repeatNum = 0
            }, checkFormat: function () {
                this.warn(!1)
            }, clearNoteBet: function () {
                this.betStr = "", this.whenInput()
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {current: 1, showItem: 5}
        }, props: ["allpage"], computed: {
            pages: function () {
                var t = [];
                if (this.current < this.showItem)for (var e = Math.min(this.showItem, this.allpage); e;)t.unshift(e--); else {
                    var a = this.current - Math.floor(this.showItem / 2), e = this.showItem;
                    for (a > this.allpage - this.showItem && (a = this.allpage - this.showItem + 1); e--;)t.push(a++)
                }
                return t
            }
        }, methods: {
            goto: function (t) {
                this.current = t, this.$parent.doSearch(this.current)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {props: ["isPass", "message"]}
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(74), r = s(n);
    e.default = {
        data: function () {
            return {CodeType: 1}
        }, components: {Icode: r.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(26), d = s(u), v = a(9), m = s(v);
    e.default = {
        data: function () {
            return {
                ajaxData: {
                    Action: "GetBetData",
                    BetweenDays: 0,
                    State: 1,
                    UserId: 0,
                    LotteryCode: -1,
                    DataNum: 10,
                    Index: 0
                },
                TimeArr: [0, 1, 7],
                BackData: [],
                DataCount: null,
                TotalPage: 0,
                StorageObj: {},
                TodaySituation: {},
                isDataNot: !0
            }
        },
        components: {UserSlide: o.default, page: c.default, RecordState: d.default, loading: m.default},
        methods: {
            SelectColor: function (t) {
                switch (t) {
                    case"已撤单":
                        return "#000";
                    case"未中奖":
                        return "#666";
                    case"等待开奖":
                        return "#666";
                    default:
                        return "#e4393c"
                }
            }, checkData: function () {
                var t = this.StorageObj[[this.ajaxData.LotteryCode, this.ajaxData.BetweenDays, this.ajaxData.State, this.ajaxData.Index].join("")];
                t ? (console.log("缓存"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.getData())
            }, saveData: function (t, e, a, s) {
                this.StorageObj[[t.LotteryCode, t.BetweenDays, t.State, t.Index].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, checkLength: function (t) {
                return !!(t && t.replace(/([^\x00-\xff])/g, "**").length > 14)
            }, showBetContent: function (t, e) {
                layer.open({title: t, content: e, btn: ["关闭"]})
            }, SearchByState: function (t, e) {
                "Time" === e ? this.ajaxData.BetweenDays = this.TimeArr[t] : this.ajaxData.State = t + 1, this.ajaxData.Index = 0, this.$refs.page.current = 1, this.checkData()
            }, SearchByLottery: function (t) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    LotteryCode: t,
                    Index: 0
                }), this.$refs.page.current = 1, this.checkData()
            }, getData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    1 === a.Code ? (t.isDataNot = !1, t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.saveData(e, a.BackData, t.DataCount, t.TotalPage), t.checkData()) : layer.msgWarn(a.StrCode)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.checkData()
            }
        },
        created: function () {
            var t = this;
            console.log("初始化"), this.checkData(), _fetch({Action: "GetProfitLoss", BetweenDays: 0}).then(function (e) {
                1 === e.Code && (t.TodaySituation = e.BackData)
            })
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(26), d = s(u), v = a(9), m = s(v);
    e.default = {
        data: function () {
            return {
                ajaxData: {Action: "GetBillRecord", Type: -1, UserId: 0, DataNum: 10, BetweenDays: 0, Index: 0},
                TimeArr: [0, 1, 7],
                ActionArr: ["GetBillRecord", "GetRechargeRecord", "GetWithdrawRecord"],
                BackData: [],
                DataCount: null,
                TotalPage: 0,
                StorageObj: {},
                isDataNot: !0
            }
        },
        components: {UserSlide: o.default, page: c.default, RecordState: d.default, loading: m.default},
        methods: {
            checkData: function () {
                var t = this.StorageObj[[this.ajaxData.Type, this.ajaxData.BetweenDays, this.ajaxData.Action, this.ajaxData.Index].join("")];
                t ? (console.log("缓存"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.getData())
            }, saveData: function (t, e, a, s) {
                this.StorageObj[[t.Type, t.BetweenDays, t.Action, t.Index].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, SearchByState: function (t, e) {
                "Time" === e ? this.ajaxData.BetweenDays = this.TimeArr[t] : this.ajaxData.Action = this.ActionArr[t], this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    Index: 0,
                    Type: -1
                }), this.$refs.page.current = 1, this.checkData()
            }, SearchByLottery: function (t) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    Index: 0,
                    Type: t
                }), this.$refs.page.current = 1, this.checkData()
            }, getData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    1 === a.Code ? (t.isDataNot = !1, t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.saveData(e, a.BackData, t.DataCount, t.TotalPage), t.checkData()) : layer.msgWarn(a.StrCode)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.checkData()
            }
        },
        created: function () {
            console.log("初始化"), this.checkData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(9), d = s(u);
    e.default = {
        data: function () {
            return {
                DataCount: null,
                TotalPage: 0,
                BackData: [],
                ajaxData: {Action: "GetMessageData", Index: 0},
                StorageObj: {},
                isDataNot: !0
            }
        }, components: {UserSlide: o.default, page: c.default, loading: d.default}, methods: {
            CheckData: function () {
                var t = this.StorageObj[this.ajaxData.Index];
                t ? (console.log("缓存"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.GetData())
            }, SaveData: function (t, e, a, s) {
                this.StorageObj[t.Index] = {BackData: e, DataCount: a, TotalPage: s}
            }, GetData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    1 === a.Code ? (t.isDataNot = !1, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / 10)), t.BackData = a.BackData, t.SaveData(e, a.BackData, t.DataCount, t.TotalPage), t.CheckData()) : layer.msgWarn(a.StrCode)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.CheckData()
            }
        }, created: function () {
            this.CheckData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n);
    e.default = {
        data: function () {
            return {BackData: {}}
        }, beforeRouteEnter: function (t, e, a) {
            t.query.id || RootApp.QueryNotFound(), a()
        }, components: {UserSlide: r.default}, created: function () {
            var t = this;
            _fetch({Action: "GetNoticeContent", ID: this.$route.query.id}).then(function (e) {
                1 === e.Code ? (e.BackData[0] || RootApp.QueryNotFound(), t.BackData = e.BackData[0]) : RootApp.QueryNotFound()
            })
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n);
    e.default = {
        data: function () {
            return {ArrObj: ""}
        }, beforeRouteEnter: function (t, e, a) {
            var s = {Action: "GetProfitLoss", BetweenDays: 0};
            _fetch(s).then(function (t) {
                a(function (e) {
                    var a = t.BackData;
                    1 == t.Code ? e.ArrObj = a : layer.msgWarn(t.StrCode)
                })
            })
        }, components: {UserSlide: r.default}
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {li_state: 0, LeftNavArr: [], titleName: "", ArticleContent: {}, ID: ""}
        }, beforeRouteEnter: function (t, e, a) {
            t.query.ID || RootApp.QueryNotFound(), a()
        }, methods: {
            changeTitle: function () {
                for (var t = 0; t < this.LeftNavArr.length; t++) {
                    var e = this.LeftNavArr[t];
                    e.ID == this.ID && (this.titleName = e.Title, this.li_state = t)
                }
            }, getData: function () {
                var t = this;
                _fetch({Action: "GetArticle", Qort: 1, ID: this.ID}).then(function (e) {
                    0 === e.Code || 1 === e.Code ? t.ArticleContent = e.BackData : RootApp.QueryNotFound()
                })
            }
        }, created: function () {
            var t = this;
            RootApp.GetInitData(["FooterConfig"], function (e) {
                for (var a = 0; a < e.FooterConfig.length; a++)t.$set(t.LeftNavArr, a, e.FooterConfig[a]);
                t.ID = t.$route.query.ID, t.changeTitle(), t.getData()
            })
        }, watch: {
            $route: function (t, e) {
                this.ID = t.query.ID, this.getData(), this.changeTitle()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(315), r = s(n);
    e.default = {
        data: function () {
            return {BoxShow: "", Num: ""}
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["ActivityConfig", "SysActivity", "RewardData", "GradeList"];
            RootApp.GetInitData(s, function (t) {
                a()
            })
        }, created: function () {
            var t = this.$route.params && this.$route.params.id;
            this.Num = state.SysActivity && state.SysActivity.length || 0, t && (this.BoxShow = 1 * t, this.ScrollTop(1 * t))
        }, methods: {
            showDetail: function (t) {
                this.BoxShow == t + 1 ? this.BoxShow = 0 : (this.BoxShow = t + 1, router.push("/activity/" + (t + 1)), this.ScrollTop(t + 1))
            }, ScrollTop: function (t) {
                var e = this;
                this.$nextTick(function () {
                    var a = e.$refs[t][0].offsetTop;
                    window.scrollTo(0, a - 15)
                })
            }
        }, components: {ActivityBox: r.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(26), d = s(u), v = a(9), m = s(v);
    e.default = {
        data: function () {
            return {
                ajaxData: {
                    Action: "GetAgentBillRecord",
                    Type: -1,
                    UserName: this.$route.query.username || 0,
                    DataNum: 10,
                    BetweenDays: 0,
                    Index: 0
                },
                isDataNot: !0,
                TimeArr: [0, 1, 7],
                ActionArr: ["GetAgentBillRecord", "GetAgentRechargeRecord", "GetAgentWithdrawRecord"],
                BackData: [],
                DataCount: null,
                TotalPage: 0,
                SearchName: this.$route.query.username || "",
                StorageObj: {},
                oldName: 0,
                UnFindUser: {}
            }
        },
        components: {UserSlide: o.default, page: c.default, RecordState: d.default, loading: m.default},
        methods: {
            checkData: function () {
                var t = this.StorageObj[[this.ajaxData.Type, this.ajaxData.BetweenDays, this.ajaxData.Action, this.ajaxData.Index, this.ajaxData.UserName].join("")];
                t ? (console.log("缓存"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.getData())
            }, saveData: function (t, e, a, s) {
                this.StorageObj[[t.Type, t.BetweenDays, t.Action, t.Index, t.UserName].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, SearchByState: function (t, e) {
                "Time" === e ? this.ajaxData.BetweenDays = this.TimeArr[t] : (this.ajaxData.Action = this.ActionArr[t], this.ajaxData.Type = -1), this.$refs.page.current = 1, this.ajaxData.Index = 0, this.checkData()
            }, SearchByLottery: function (t) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    Type: t,
                    Index: 0
                }), this.$refs.page.current = 1, this.checkData()
            }, SearchByName: function () {
                return this.oldName = this.ajaxData.UserName, this.UnFindUser[this.SearchName || 0] ? (layer.msgWarn(this.UnFindUser[this.SearchName]), void(this.SearchName = this.oldName || "")) : (this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    UserName: this.SearchName || 0,
                    Index: 0
                }), this.$refs.page.current = 1, void this.checkData())
            }, getData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    if (1 === a.Code) {
                        if (t.isDataNot = !1, e.UserName != t.ajaxData.UserName)return;
                        t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.saveData(e, a.BackData, t.DataCount, t.TotalPage), t.checkData()
                    } else layer.msgWarn(a.StrCode), t.isDataNot = !1, t.UnFindUser[t.SearchName || 0] = a.StrCode, t.SearchName = t.oldName || "", t.ajaxData.UserName = t.oldName || 0, t.$refs.page.current = 1, t.ajaxData.Index > 0 && (t.ajaxData.Index = 0, t.checkData())
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.checkData()
            }
        },
        created: function () {
            console.log("初始化"), this.checkData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n);
    e.default = {
        data: function () {
            return {}
        }, components: {UserSlide: r.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(73), o = s(i), l = a(1), c = s(l), u = a(10), d = s(u), v = a(9), m = s(v);
    e.default = {
        data: function () {
            return {
                DataCount: null,
                TotalPage: 0,
                ajaxData: {
                    Action: "GetMemberManagement",
                    UserId: 0,
                    UserName: 0,
                    MinMoney: -1,
                    MaxMoney: -1,
                    LoginTime: -1,
                    UserType: -1,
                    DataNum: 10,
                    Index: 0
                },
                caiName: {
                    SSC: "时时彩",
                    XYNC: "幸运农场",
                    PK10: "北京PK10",
                    KL8: "北京快乐8",
                    PL35: "排列3/5",
                    FC3D: "福彩3D",
                    SYX5: "11选5",
                    K3: "快3"
                },
                BackData: [],
                StorageObj: {},
                LowerNameArr: [],
                SearchName: "",
                CodeInit: {},
                Selected: -1,
                isDataNot: !0,
                DetailShow: !1,
                DetailList: []
            }
        },
        components: {UserSlide: c.default, DetailCode: o.default, page: d.default, loading: m.default},
        methods: {
            SeeRebate: function (t) {
                var e = this;
                e.CodeInit[t] ? e.setString(e.CodeInit[t]) : _fetch({
                    Action: "GetRebateInfo",
                    UserId: Number(t)
                }).then(function (a) {
                    1 === a.Code ? (e.setString(a.StrCode), e.CodeInit[t] = a.StrCode) : layer.msgWarn(data.StrCode)
                })
            }, setString: function (t) {
                for (var e = this, a = t.split("@"), s = [], n = a.length - 1; n >= 0; n--) {
                    var r = {}, i = a[n].split("#");
                    r.Name = e.caiName[i[0]], r.Num = i[1], s.push(r)
                }
                e.DetailList = s, e.DetailShow = !0
            }, SearchByType: function () {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    UserName: this.SearchName || 0,
                    UserType: this.Selected || -1,
                    UserId: 0,
                    Index: 0
                }), this.$refs.page.current = 1, this.LowerNameArr = [], this.CheckData()
            }, SeeLower: function (t, e) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {UserId: t, UserName: 0, Index: 0});
                var a = {LowerId: t, LowerName: e};
                this.LowerNameArr.push(a), this.$refs.page.current = 1, this.CheckData()
            }, ReturnBack: function (t) {
                this.ajaxData.UserId = t ? this.LowerNameArr[t - 1].LowerId : 0, this.ajaxData.Index = 0, this.LowerNameArr.splice(t), 0 === t && (this.SearchName = ""), this.$refs.page.current = 1, this.CheckData()
            }, SaveData: function (t, e, a, s) {
                this.StorageObj[[t.UserId, t.UserName, t.UserType, t.Index].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, CheckData: function () {
                var t = this.StorageObj[[this.ajaxData.UserId, this.ajaxData.UserName, this.ajaxData.UserType, this.ajaxData.Index].join("")];
                t ? (console.log("有"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.GetData())
            }, GetData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    return 1 !== a.Code ? (t.SearchName = "", layer.msgWarn(a.StrCode), void(t.isDataNot = !1)) : (t.isDataNot = !1, t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.SaveData(e, a.BackData, t.DataCount, t.TotalPage), t.CheckData(), void 0)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.CheckData()
            }
        },
        created: function () {
            this.CheckData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(12), r = s(n), i = a(1), o = s(i), l = a(9), c = s(l), u = {
        BetMoney: "投注金额",
        Bonus: "中奖金额",
        ActivityMoney: "活动礼金",
        RebateMoney: "团队返点",
        ProfitMoney: "团队盈利",
        RechargeMoney: "充值金额",
        WithdrawMoney: "提现金额",
        FirstChargeNum: "首充人数",
        RegisterNum: "注册人数",
        BetNum: "投注人数",
        TeamNum: "下级人数",
        TeamBalance: "团队余额",
        AgentRebate: "代理返点",
        AgentWages: "代理工资",
        AgentDividends: "代理分红"
    };
    e.default = {
        data: function () {
            return {
                TimeType: ["今天", "昨天", "本月", "上月"],
                DateName: "今天",
                UserName: 0,
                preNa: "",
                DateType: 0,
                Datalist: "",
                listNum: "",
                isDataNot: !0
            }
        }, created: function () {
            this.UserName = this.$route.query.username || "", this.DateType = 0, this.doSearch()
        }, methods: {
            setTime: function (t, e) {
                this.DateName = e, this.DateType = t, this.doSearch()
            }, doSearch: function () {
                var t = this.DateType, e = this.UserName || 0, a = sessionStorage.getItem("agentReport" + e + t);
                a ? (this.Datalist = this.setArrObj(JSON.parse(a)), this.listLong(), this.isDataNot = !1) : this.renderData(t, e)
            }, renderData: function (t, e) {
                var a = this, s = {Action: "GetAgencyHender", BetweenType: t, UserName: e};
                this.isDataNot = !0, _fetch(s).then(function (s) {
                    var n = s.BackData;
                    1 == s.Code ? (layer.closeAll(), a.isDataNot = !1, sessionStorage.setItem("agentReport" + e + t, (0, r.default)(n)), a.Datalist = a.setArrObj(n), a.listLong(), a.preNa = a.UserName) : (a.isDataNot = !1, a.UserName = a.preNa, layer.msgWarn(s.StrCode))
                })
            }, setArrObj: function (t) {
                var e = {}, a = t.TeamNum || 0;
                a || (u.RebateMoney = "会员返点", u.ProfitMoney = "会员赢利", u.TeamBalance = "会员余额");
                for (var s in u) {
                    var n = t[s];
                    if (null != n) {
                        var r = [n, u[s]];
                        e[s] = r
                    }
                }
                return e
            }, listLong: function () {
                var t = this.DateType, e = this.UserName || 0, a = [], s = JSON.parse(sessionStorage.getItem("agentReport" + e + t));
                for (var n in s)s[n] && a.push(s[n]);
                this.listNum = 5 - parseInt(a.length % 5)
            }
        }, beforeRouteLeave: function (t, e, a) {
            sessionStorage.clear(), a()
        }, components: {UserSlide: o.default, loading: c.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(2), o = s(i), l = a(23), c = s(l);
    e.default = {
        mixins: [c.default], data: function () {
            return {
                va: {Money: {}, PayUser: {}},
                MinMoney: "",
                MaxMoney: "",
                AliNo: "",
                CodeImg: "",
                PayType: "",
                RealName: "",
                TypeName: "",
                isSupportCopy: !!document.execCommand,
                ArrObj: {Action: "Recharge", Qort: 3, ID: "", BankCode: "", Money: "", PayUser: ""},
                isMaint: !1,
                layerBg: !1,
                layerShow: !1,
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            RootApp.GetInitData(["RechargeWayAlipay", "PayLimit"], function (t) {
                a(function (e) {
                    var a = t.RechargeWayAlipay;
                    a && a.length ? ("一般" !== a[0].PayType ? (e.ArrObj.PayUser = a[0].PayType, e.TypeName = "支付宝快捷", e.ArrObj.Qort = 6, t.bankType.Type.indexOf(a[0].PayType) == -1 && "undefined" == typeof QRCode && e.setScript()) : (e.RealName = a[0].RealName, e.CodeImg = a[0].CodeImg, e.TypeName = "支付宝", e.ArrObj.Qort = 3), e.ArrObj.ID = a[0].Id, e.AliNo = a[0].AliNo, e.PayType = a[0].PayType, e.isMaint = !1) : e.isMaint = !0, e.$nextTick(function () {
                        e.getMoney(t.PayLimit)
                    })
                })
            })
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, methods: {
            moneyChange: function (t) {
                var e = this.moneyFormat(t);
                this.ArrObj.Money = e
            }, delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, getMoney: function (t) {
                if (t) {
                    var e = t[this.TypeName];
                    this.MinMoney = e[0], this.MaxMoney = e[1];
                    var a = this.$va.Rule;
                    this.$va.addRule("Money", 2, new a("limit", [e[0], e[1]], ""))
                }
            }, setQrCode: function (t) {
                var e = new QRCode("qrcode");
                e.makeCode(t)
            }, setScript: function () {
                var t = document.createElement("script");
                t.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/04f46c6a/qrcode.min.js";
                var e = document.body.firstChild;
                document.body.insertBefore(t, e)
            }, close: function () {
                this.layerShow = !1, this.layerBg = !1, this.ArrObj.Money = "", this.$refs.qrcode.innerHTML = ""
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                if (1 * this.ArrObj.Money < 1 * this.MinMoney || 1 * this.ArrObj.Money > 1 * this.MaxMoney)return layer.alert("充值金额必须在" + this.MinMoney + "与" + this.MaxMoney + "之间");
                if ("一般" != this.PayType)if (state.bankType.Type.indexOf(this.PayType) == -1)this.layerBg = !0; else var a = window.open("about:blank");
                this.delKeyUp();
                var s = {wait: "正在处理"};
                _fetch(this.ArrObj, s).then(function (e) {
                    1 == e.Code ? "一般" != t.PayType ? state.bankType.Type.indexOf(t.PayType) == -1 ? (t.setQrCode(e.BackUrl), t.layerShow = !0) : (t.ArrObj.Money = "", t.$va.refreshValue("Money", ""), t.va.Money = {}, a.location.href = e.BackUrl) : (t.ArrObj.Money = "", t.ArrObj.PayUser = "", t.$va.refreshValue("Money", ""), t.va.Money = {}, t.$va.refreshValue("PayUser", ""), t.va.PayUser = {}, layer.msgWarn(e.StrCode)) : (layer.msgWarn(e.StrCode), t.layerBg = !1, t.addKeyUp())
                })
            }
        }, components: {UserSlide: r.default, tip: o.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(10), o = s(i);
    e.default = {
        data: function () {
            return {BackData: {}, UID: this.$route.query.UID, DataCount: null, TotalPage: 0}
        }, components: {UserSlide: r.default, page: o.default}, methods: {
            getOpenNum: function (t) {
                var e = t.LotteryName, a = t.OpenNum, s = {
                    "北京快乐8": a.split("+")[0].split(",").slice(0, 20).join(","),
                    "排列3/5": a.split(",").slice(0, 3).join(",")
                };
                return s[e] ? s[e] : a
            }, checkLength: function (t) {
                return !!(t && t.replace(/([^\x00-\xff])/g, "**").length > 12)
            }, showBetContent: function (t, e) {
                layer.open({title: t, content: e, btn: ["关闭"]})
            }, CancelBet: function (t) {
                var e = this;
                layer.open({
                    shadeClose: !1,
                    content: "撤单不可恢复，是否确认撤单？",
                    title: "温馨提示",
                    className: "layerConfirm",
                    btn: ["确定", "取消"],
                    yes: function () {
                        _fetch({Action: "CancelBet", ID: t}).then(function (t) {
                            if (1 === t.Code) {
                                for (var a = 0; a < e.BackData.BetInfoList.length; ++a) {
                                    var s = e.BackData.BetInfoList[a];
                                    s.State = "已撤单"
                                }
                                e.BackData.State = "已撤单", e.BackData.OpenNum = "已撤单", layer.alert(t.StrCode)
                            } else layer.msgWarn(t.StrCode)
                        })
                    }
                })
            }, SelectColor: function (t) {
                switch (t) {
                    case"已撤单":
                        return "#000";
                    case"未中奖":
                        return "#666";
                    case"等待开奖":
                        return "#666";
                    default:
                        return "#e4393c"
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            t.query.ID || router.push("/notfound"), a(function (e) {
                var a = {wait: "正在处理"};
                _fetch({Action: "GetBetDetail", UserId: t.query.UID || 0, ID: t.query.ID}, a).then(function (t) {
                    1 === t.Code ? (e.BackData = t.BackData, e.DataCount = t.DataCount) : (layer.msgWarn(t.StrCode), e.BackData.BetInfoList = !1, e.DataCount = 0)
                })
            })
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(27), o = s(i), l = a(1), c = s(l), u = a(2), d = s(u), v = a(23), m = s(v);
    e.default = {
        mixins: [m.default], data: function () {
            return {
                va: {Money: {}, PayUser: {}},
                BankList: "",
                BankCode: "",
                BankId: "",
                RealName: "",
                Money: "",
                PayUser: "",
                CardNum: "",
                MinMoney: "",
                isSupportCopy: !!document.execCommand,
                MaxMoney: "",
                isMaint: !1,
                keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            document.removeEventListener("keyup", this.keyupHandler)
        }, beforeRouteEnter: function (t, e, a) {
            var s = new o.default(function (t, e) {
                var a = ["RechargeWayBank"];
                RootApp.AjaxGetInitData(a, function (e) {
                    t(e.RechargeWayBank)
                })
            }), n = new o.default(function (t, e) {
                RootApp.GetInitData(["PayLimit"], function (e) {
                    t(e.PayLimit)
                })
            });
            o.default.all([s, n]).then(function (t) {
                a(function (e) {
                    t[0] && t[0].length ? (e.BankList = t[0], e.BankId = e.BankList[0].Id, e.BankCode = e.BankList[0].BankCode, e.RealName = e.BankList[0].RealName, e.CardNum = e.BankList[0].CardNum, e.BankStore = e.BankList[0].BankStore, e.isMaint = !1) : e.isMaint = !0, e.getMoney(t[1])
                })
            })
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, document.addEventListener("keyup", this.keyupHandler)
        }, methods: {
            moneyChange: function (t) {
                var e = this.moneyFormat(t);
                this.Money = e
            }, getMoney: function (t) {
                if (t) {
                    var e = t["银行转账"];
                    this.MinMoney = e[0], this.MaxMoney = e[1];
                    var a = this.$va.Rule;
                    this.$va.addRule("Money", 2, new a("limit", [e[0], e[1]], ""))
                }
            }, setBank: function (t) {
                this.BankId = t;
                var e = !0, a = !1, s = void 0;
                try {
                    for (var n, i = (0, r.default)(this.BankList); !(e = (n = i.next()).done); e = !0) {
                        var o = n.value;
                        if (o.Id == t)return this.BankCode = o.BankCode, this.RealName = o.RealName, this.CardNum = o.CardNum, void(this.BankStore = o.BankStore)
                    }
                } catch (t) {
                    a = !0, s = t
                } finally {
                    try {
                        !e && i.return && i.return()
                    } finally {
                        if (a)throw s
                    }
                }
            }, vaSubmit: function () {
                var t = this;
                if (!this.BankId || !this.BankCode)return layer.alert("请选择银行账户");
                var e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                if (1 * this.Money < 1 * this.MinMoney || 1 * this.Money > 1 * this.MaxMoney)return layer.alert("充值金额必须在" + this.MinMoney + "与" + this.MaxMoney + "之间");
                var a = {
                    Action: "Recharge",
                    Qort: 2,
                    ID: this.BankId,
                    BankCode: this.BankCode,
                    Money: this.Money,
                    PayUser: this.PayUser
                }, s = {wait: "正在处理"};
                _fetch(a, s).then(function (e) {
                    1 == e.Code ? (layer.closeAll(), t.Money = "", t.PayUser = "", layer.msgWarn(e.StrCode), t.$va.refreshValue("Money", ""), t.$va.refreshValue("PayUser", ""), t.va.Money = {}, t.va.PayUser = {}) : layer.msgWarn(e.StrCode)
                })
            }
        }, components: {UserSlide: c.default, tip: d.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(2), o = s(i);
    e.default = {
        data: function () {
            return {
                va: {UserName: {}, ImgCode: {}}, UserName: "", ImgCode: "", imgSrc: "", keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            document.removeEventListener("keyup", this.keyupHandler)
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, document.addEventListener("keyup", this.keyupHandler);
            var e = localStorage.getItem("UserName");
            if (e)router.push("/securityCenter"); else {
                sessionStorage.removeItem("isFind");
                var a = ["UserHasSafePwd", "UserMail", "UserMobile", "UserSafeQuestions"], s = !0, n = !1, i = void 0;
                try {
                    for (var o, l = (0, r.default)(a); !(s = (o = l.next()).done); s = !0) {
                        var c = o.value;
                        localStorage.removeItem(c)
                    }
                } catch (t) {
                    n = !0, i = t
                } finally {
                    try {
                        !s && l.return && l.return()
                    } finally {
                        if (n)throw i
                    }
                }
            }
            this.imgUrl()
        }, components: {tip: o.default}, methods: {
            vaSubmit: function () {
                var t = this.$va.checkAll();
                if (t)return void layer.msgWarn(t);
                var e = this, a = {UserName: this.UserName, ImgCode: this.ImgCode};
                a.Action = "SetSessionUser";
                var s = {wait: "正在处理"};
                _fetch(a, s).then(function (t) {
                    1 == t.Code || 0 == t.Code ? (RootApp.SaveInitData(t.BackData), sessionStorage.setItem("isFind", !0),
                        RootApp.$router.push({
                            path: "resetWay",
                            query: {Q: "ResetPwd"}
                        })) : layer.msgWarn(t.StrCode), e.imgUrl()
                })
            }, imgUrl: function () {
                var t = {Action: "GetImageCode"}, e = this;
                _fetchT(t).then(function (t) {
                    e.imgSrc = "data:image/png;base64,R0lGODlhPAAWAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAA8ABYAAAj" + t
                })
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n, r = a(59), i = s(r);
    e.default = (n = {
        data: function () {
            return {li_state: 0, LeftNavArr: [], titleName: "", ArticleContent: {}, ID: ""}
        }, beforeRouteEnter: function (t, e, a) {
            t.query.ID || RootApp.QueryNotFound(), a()
        }, methods: {
            changeTitle: function () {
                console.log(this.LeftNavArr.length);
                for (var t = 0; t < this.LeftNavArr.length; t++) {
                    var e = this.LeftNavArr[t];
                    e.ID == this.ID && (this.titleName = e.Title, this.li_state = t)
                }
            }, getData: function () {
                var t = this;
                _fetch({Action: "GetArticle", Qort: 2, ID: this.ID}).then(function (e) {
                    0 === e.Code || 1 === e.Code ? t.ArticleContent = e.BackData : RootApp.QueryNotFound()
                })
            }
        }
    }, (0, i.default)(n, "beforeRouteEnter", function (t, e, a) {
        RootApp.GetInitData(["HelpConfig"], function (e) {
            return t.query.ID ? void a(function (a) {
                a.LeftNavArr = e.HelpConfig, a.ID = t.query.ID, a.changeTitle(), a.getData()
            }) : void router.push("helpCenter?ID=" + e.HelpConfig[0].ID)
        })
    }), (0, i.default)(n, "watch", {
        $route: function (t, e) {
            this.ID = t.query.ID || state.HelpConfig[0].ID, this.getData(), this.changeTitle()
        }
    }), n)
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {lotteryType: "", lotteryName: "", howPlay: ""}
        }, beforeRouteEnter: function (t, e, a) {
            state.HeadFootShow = !1;
            var s = {Action: "GetHow2Play", LotteryCode: t.params.ID};
            _fetch(s).then(function (t) {
                1 === t.Code || 0 === t.Code ? a(function (e) {
                    e.lotteryType = state.LotteryList[e.$route.params.ID].LotteryType, e.lotteryName = state.LotteryList[e.$route.params.ID].LotteryName, e.$set(e, "howPlay", t.StrCode)
                }) : layer.msgWarn(t.StrCode)
            })
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(12), r = s(n), i = a(72), o = s(i), l = a(37), c = s(l);
    e.default = {
        props: ["s"], data: function () {
            var t = "background-position:0 ";
            return {
                tapArr: [t + "0", t + "-61px", t + "-122px", t + "-183px", t + "-244px", t + "-305px"],
                lotteryArr: {"江苏快３": "1401", "重庆时时彩": "1000", "上海11选5": "1101"},
                lotteryNum: 1401,
                lotteryList: {1401: "", 1e3: "", 1101: ""},
                LotteryConfig: "",
                LotteryClass: "",
                ispass: !1,
                BonusList: "",
                BonusIndex: 0,
                Transition: "",
                BonusNum: "",
                setArr: ["女", "男", "保密"],
                cardArr: "",
                cardLeft: "",
                cardTop: "",
                cardDev: "",
                cardShow: !1,
                cardPosition: ["上", "下", "左", "右"]
            }
        }, beforeRouteEnter: function (t, e, a) {
            RootApp.GetInitData(["LotteryConfig", "LotteryList", "BannerList", "RankingList"], function (t) {
                a(function (e) {
                    e.LotteryConfig = e.getLotterConfig(t.LotteryConfig), e.setLotter(1401), e.LotteryClass = e.getLotterList(e.LotteryConfig, t.LotteryList), e.setScroll()
                })
            })
        }, created: function () {
            this.getBonusTimeData(), this.setBonusTimes()
        }, methods: {
            getBonusTimeData: function () {
                var t = this;
                this.clearScroll();
                var e = {Action: "GetNewestBonusList", dataNum: 20};
                _fetch(e).then(function (e) {
                    1 == e.Code || 0 == e.Code ? (t.BonusList = e.BackData.NewestBonusList, t.BonusNum = e.BackData.NewestBonusList.length, t.BonusNum > 3 && t.BonusList.length == t.BonusNum && t.BonusList.push(t.BonusList[0], t.BonusList[1], t.BonusList[2]), t.setScroll()) : layer.msgWarn(e.StrCode)
                })
            }, setBonusTimes: function () {
                var t = this;
                RootApp.isTime && clearTimeout(RootApp.isTime), RootApp.isTime = setTimeout(function () {
                    t.getBonusTimeData(), t.setBonusTimes()
                }, 6e4)
            }, getLotterConfig: function (t) {
                for (var e in t)if ("热门" == t[e].LotteryClassName)return t[e].LotteryList
            }, getLotterList: function (t, e) {
                var a = [];
                for (var s in t)a.push(e[t[s]]);
                return a
            }, getCard: function (t, e, a) {
                this.cardDev = t;
                var s = this.cardPosition.indexOf(a);
                if (s == -1)return !1;
                var n = e.target, r = n.offsetTop, i = n.offsetLeft, o = n.offsetWidth, l = n.offsetHeight, c = n.parentNode.offsetTop, u = n.parentNode.offsetLeft, d = document.documentElement.scrollTop || window.scrollY;
                switch (a) {
                    case"上":
                        this.cardTop = r + c - l - 150, this.cardLeft = i + u - 50;
                        break;
                    case"下":
                        this.cardTop = r + c + l, this.cardLeft = i + u - 100;
                        break;
                    case"左":
                        this.cardTop = r + c - (d || 0), this.cardLeft = i + u - 300;
                        break;
                    case"右":
                        this.cardTop = r + c, this.cardLeft = i + u + o
                }
                this.getCardDate(t)
            }, getCardDate: function (t) {
                var e = JSON.parse(sessionStorage.getItem("card" + t));
                if (e)this.cardArr = e, this.cardShow = !0; else {
                    if (this.cardArr = "", this.ispass)return !1;
                    this.ispass = !0;
                    var a = this;
                    setTimeout(function () {
                        a.getData(t)
                    }, 500)
                }
            }, getData: function (t) {
                var e = this, a = {Action: "GetCard", UserId: t};
                _fetch(a).then(function (a) {
                    if (1 === a.Code || 0 === a.Code) {
                        var s = e.setCardArr(a.BackData);
                        sessionStorage.setItem("card" + t, (0, r.default)(s)), e.cardDev == t ? (e.cardArr = s, e.cardShow = !0) : (e.cardArr = "", e.cardShow = !1)
                    } else e.cardShow = !1;
                    e.ispass = !1
                })
            }, setCardArr: function (t) {
                var e = t;
                return e.Sex = this.setArr[e.Sex], e.LotteryType = e.LotteryType.split(","), e
            }, getOut: function (t) {
                this.cardShow || (this.cardDev = ""), this.cardShow = !1
            }, setLotter: function (t) {
                this.lotteryNum = t, this.lotteryList[t] || this.getLotter(t)
            }, getLotter: function (t) {
                var e = this, a = {Action: "GetLotteryOpen", LotteryCode: t, IssueNo: 0, DataNum: 1};
                _fetch(a).then(function (a) {
                    1 != a.Code && 0 != a.Code || (e.lotteryList[t] = a.BackData[0])
                })
            }, setHe: function (t) {
                var e = t.split(","), a = 0;
                return e.map(function (t) {
                    return a += 1 * t
                }), a
            }, getArr: function (t) {
                return t.split(",")
            }, loginOut: function () {
                var t = {Action: "LogOut"}, e = {wait: "正在处理"};
                _fetch(t, e).then(function (t) {
                    1 === t.Code ? (RootApp.Logout(), router.push("/login")) : layer.msgWarn(t.StrCode)
                })
            }, setScroll: function () {
                RootApp.isScroll || this.isScroll()
            }, isScroll: function () {
                var t = this;
                this.BonusNum < 4 ? clearTimeout(RootApp.isScroll) : RootApp.isScroll = setTimeout(function () {
                    t.BonusIndex > t.BonusList.length - 1 - 3 ? (t.Transition = "", t.BonusIndex = 0) : (t.BonusIndex++, t.Transition = "all 0.3s linear"), t.isScroll()
                }, 3e3)
            }, clearScroll: function () {
                clearTimeout(RootApp.isScroll), RootApp.isScroll = ""
            }
        }, beforeRouteLeave: function (t, e, a) {
            this.clearScroll(), clearTimeout(RootApp.isTime), RootApp.isTime = "", a()
        }, components: {BannerBox: o.default, UserCard: c.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(9), d = s(u);
    e.default = {
        data: function () {
            return {
                BackData: [],
                ajaxData: {Action: "GetLetterData", Index: 0},
                DataCount: null,
                TotalPage: 0,
                StorageObj: {},
                CheckDataArr: [],
                AllChose: !1,
                isDataNot: !0
            }
        },
        components: {UserSlide: o.default, page: c.default, loading: d.default},
        watch: {
            CheckDataArr: {
                handler: function (t) {
                    this.AllChose = t.every(function (t) {
                        return t.checked
                    })
                }, deep: !0
            }
        },
        methods: {
            ChooseAll: function () {
                var t = this;
                this.AllChose = !this.AllChose, this.CheckDataArr.map(function (e) {
                    return e.checked = t.AllChose
                })
            }, ReadAndDelete: function (t) {
                for (var e = this, a = [], s = 1 === t ? "UpdateLetterData" : "DelLetterData", n = 0; n < this.CheckDataArr.length; n++)this.CheckDataArr[n].checked && a.push(this.CheckDataArr[n].ID);
                a.length && _fetch({Action: s, LetterID: a.join(",")}).then(function (t) {
                    1 === t.Code ? (layer.msgWarn(t.StrCode), e.AllChose = !0, e.ChooseAll(), e.StorageObj = {}, e.CheckData()) : layer.msgWarn(t.StrCode)
                })
            }, CheckData: function () {
                var t = this.StorageObj[this.ajaxData.Index];
                t ? (console.log("缓存"), this.BackData = t.BackData) : (console.log("无"), t = "", this.GetData())
            }, SaveData: function (t, e) {
                this.StorageObj[t.Index] = {BackData: e}
            }, GetData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    if (1 === a.Code) {
                        t.isDataNot = !1, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / 10)), t.BackData = a.BackData;
                        for (var s = 0; s < a.BackData.length; s++)t.CheckDataArr.push({
                            checked: !1,
                            ID: a.BackData[s].ID
                        });
                        t.SaveData(e, a.BackData), t.CheckData()
                    } else layer.msgWarn(a.StrCode)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.CheckData()
            }
        },
        created: function () {
            this.CheckData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n);
    e.default = {
        data: function () {
            return {BackData: {}}
        }, components: {UserSlide: r.default}, beforeRouteEnter: function (t, e, a) {
            t.query.id || RootApp.QueryNotFound(), a(function (e) {
                _fetch({Action: "GetLetterContent", ID: t.query.id}).then(function (t) {
                    1 === t.Code ? e.BackData = t.BackData : RootApp.QueryNotFound()
                })
            })
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        components: {tip: r.default}, data: function () {
            return {
                va: {UserName: {}, Password: {}, ImgCode: {}},
                UserName: "",
                Password: "",
                ImgCode: "",
                imgSrc: "",
                IcodeShow: !1,
                keyupHandler: function () {
                }
            }
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.login())
            }, this.addKeyUp()
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, login: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                this.delKeyUp();
                var a = this, s = {Action: "Login", UserName: this.UserName, Password: this.Password};
                this.IcodeShow && (s.ImgCode = this.ImgCode);
                var n = {wait: "正在处理"};
                _fetch(s, n).then(function (e) {
                    1 === e.Code ? (RootApp.Logout(), RootApp.Login(t.UserName, function () {
                        router.push(state.login2path || "/index")
                    })) : 2 === e.Code ? (a.IcodeShow = !0, a.imgUrl(), t.addKeyUp(), layer.msgWarn(e.StrCode)) : (t.addKeyUp(), layer.msgWarn(e.StrCode))
                })
            }, imgUrl: function () {
                var t = {Action: "GetImageCode"}, e = this;
                _fetchT(t).then(function (t) {
                    e.imgSrc = "data:image/png;base64,R0lGODlhPAAWAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAA8ABYAAAj" + t
                })
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(59), o = s(i), l = a(184), c = s(l), u = a(12), d = s(u), v = a(27), m = s(v), f = a(335), p = s(f), h = a(334), _ = s(h), g = a(329), y = s(g), b = a(333), C = s(b), w = a(327), S = s(w), x = a(56), A = a(173), k = a(57), D = a(52), M = a(55), N = a(53), B = a(54), P = (a(11), a(3)), I = !0, T = Math.floor(4 * Math.random()), R = function (t) {
        return new m.default(function (e, a) {
            var s = "Rebate" + t, n = localStorage.getItem(s);
            n = JSON.parse(n), n ? e(n) : _fetch({Action: "GetBetRebate", LotteryType: t}).then(function (t) {
                if (1 === t.Code)localStorage.setItem(s, (0, d.default)(t.BackData)), e(t.BackData); else {
                    var n = new Error("无法获得返点，请重试");
                    a(n)
                }
            })
        })
    };
    e.default = {
        components: {
            lotteryTop: p.default,
            lotteryRight: _.default,
            betNav: y.default,
            k3: C.default,
            betArea: S.default
        }, beforeRouteEnter: function (t, e, a) {
            var s = t.fullPath.slice(1).split("/"), n = (0, c.default)(s, 3), r = n[1], i = n[2], o = R(r), l = new m.default(function (t, e) {
                RootApp.GetInitData(["LotteryList", "LotteryConfig"], t)
            }), u = new m.default(function (t, e) {
                var a = localStorage.getItem("Difftime");
                "NaN" !== a && a ? t() : (I = !1, RootApp.getServerTime(t))
            });
            m.default.all([o, l, u]).then(function (t) {
                var e = state.LotteryList[i];
                if (void 0 === e)return void layer.url("您所访问的彩种不存在，即将返回购彩大厅", "/lotteryHall");
                var s = e.LotteryType;
                e.LotteryType !== r && RootApp.$router.push("./lottery/" + s + "/" + i), a()
            }).catch(function (t) {
                store.commit("setTurning", !1), layer.msgWarn(t.message), RootApp.$router.push("/index")
            })
        }, created: function () {
            var t = this, e = this.$route.fullPath.slice(1).split("/"), a = (0, c.default)(e, 3);
            this.ltype = a[1], this.lcode = a[2], I && RootApp.getServerTime();
            var s = {
                SSC: x.sscConfig,
                SYX5: k.syx5Config,
                K3: A.k3Config,
                FC3D: D.fc3dConfig,
                PL35: M.pl3Config,
                KL8: N.kl8Config,
                PK10: B.pk10Config
            }, n = {
                SSC: P.getSSCRebate,
                K3: P.getMultipleRebate,
                SYX5: P.getRebate,
                FC3D: P.getRebate,
                PL35: P.getRebate,
                KL8: P.getMultipleRebate,
                PK10: P.getRebate
            }, i = 0, l = !1, u = {
                state: {
                    bet: {
                        betting_number: "",
                        betting_count: 0,
                        betting_money: 0,
                        betting_model: 1,
                        graduation_count: 1,
                        compress: ""
                    },
                    tmp: {},
                    basket: [],
                    isChase: !1,
                    scheme: [],
                    mode: {name: "", mode: "", group: "", subGroup: "", tag: "", eg: []},
                    lottery: {
                        LotteryIntro: "",
                        LotteryName: "",
                        LotteryType: "",
                        LotteryCode: "",
                        VerifyEndTime: "",
                        VerifyIssue: ""
                    },
                    Rebate: {},
                    Odds: {},
                    award: "",
                    box: "",
                    config: {},
                    LotteryPlan: [],
                    LotteryResults: {},
                    BetRecord: [],
                    ChaseRecord: [],
                    BetRecordOK: !1,
                    ChaseRecordOK: !1,
                    whichRecord: "BetRecord",
                    PlanLen: 0,
                    IssueNo: 0,
                    Todaystr: "",
                    TimeBar: "00:00:00",
                    displayResults: !1,
                    perbet: P.PERBET
                }, getters: {
                    basketBets: function (t) {
                        for (var e = 0, a = 0; a < t.basket.length; a++)e += t.basket[a].betting_count;
                        return e
                    }, basketTotal: function (t) {
                        for (var e = 0, a = 0; a < t.basket.length; a++)e += t.basket[a].betting_money;
                        return +e.toFixed(4)
                    }, schemeBets: function (t, e) {
                        return t.scheme.length * e.basketBets
                    }, schemeTotal: function (t, e) {
                        for (var a = 0, s = 0; s < t.scheme.length; s++)a += t.scheme[s].money;
                        return a.toFixed(2)
                    }
                }, mutations: {
                    lt_setPerbet: function (t, e) {
                        t.perbet = e
                    }, lt_changeBox: function (t, e) {
                        t.box = e
                    }, lt_changeMode: function (e, a) {
                        var s = e.lottery.LotteryType, r = e.Odds[s] || [];
                        P.bus.$emit("clearNoteStr"), t.$store.commit("lt_clearBet"), e.mode = a, e.award = n[s](a.mode, r)
                    }, lt_changeLottery: function (e, a) {
                        e.lottery = t.$store.state.LotteryList[a], router.push(a)
                    }, lt_initConfig: function (t) {
                        t.config = s[t.lottery.LotteryType]
                    }, lt_updateDate: function (e) {
                        var a = (new Date).getTime() - t.$store.state.Difftime;
                        e.Todaystr = new Date(a).format("yyyyMMdd")
                    }, lt_computeIssueNo: function (e, a) {
                        e.LotteryPlan = a, e.PlanLen = a.length;
                        var s, n, r, i = [], o = [];
                        r = ((new Date).getTime() - t.$store.state.Difftime - P.GMT_DIF) % P.DAY_TIME;
                        var l = a[a.length - 1].EndTime.split(":"), c = 36e5 * l[0] + 6e4 * l[1] + 1e3 * l[2], u = a[0].EndTime.split(":"), d = 36e5 * u[0] + 6e4 * u[1] + 1e3 * u[2];
                        r > c && c > d ? e.IssueNo = a.length : e.IssueNo = 0;
                        for (var v = (a.length, a.length - 1); v >= 0; v--)i = a[v].EndTime.split(":"), s = 36e5 * i[0] + 6e4 * i[1] + 1e3 * i[2], Vue.set(a[v], "End", s), o = a[v].StartTime.split(":"), n = 36e5 * o[0] + 6e4 * o[1] + 1e3 * o[2], Vue.set(a[v], "Start", n), r < s && r >= n ? e.IssueNo = v : n > s && (r < s || r >= n) && (e.IssueNo = v);
                        t.$store.commit("lt_updateIssue")
                    }, lt_updateIssue: function (t) {
                        layer.closeAll();
                        var e = t.lottery.LotteryCode;
                        Vue.set(t, "NowIssue", (0, P.computeIssue)(e, t.IssueNo)), Vue.set(t, "OldIssue", (0, P.computeIssue)(e, t.IssueNo - 1)), t.displayResults = !1, t.basket.forEach(function (a) {
                            a.betting_issuseNo = (0, P.computeIssue)(e, t.IssueNo)
                        })
                    }, lt_setLotteryResult: function (t, e) {
                        var a = e.code, s = e.results, n = e.time, r = {
                            1202: function () {
                                s.map(function (t) {
                                    t.LotteryOpen = t.LotteryOpen.split(",").slice(0, 3).join(",")
                                })
                            }, 1302: function () {
                                s.map(function (t) {
                                    t.LotteryOpen = t.LotteryOpen.split("+")[0]
                                })
                            }
                        };
                        r[a] && r[a](), Vue.set(t.LotteryResults, a, {time: n, results: s})
                    }, lt_stopSell: function (e, a) {
                        if (1 !== a)var s = "暂停销售"; else var s = "停止销售";
                        t.$store.commit("lt_updateTimeBar", s)
                    }, lt_setIssueNo: function (t, e) {
                        t.IssueNo = e
                    }, lt_displayResults: function (t, e) {
                        t.displayResults = e
                    }, lt_updateTimeBar: function (t, e) {
                        t.TimeBar = e
                    }, lt_setBetRecord: function (t, e) {
                        t.BetRecord = e
                    }, lt_setChaseRecord: function (t, e) {
                        t.ChaseRecord = e
                    }, lt_setWhichRecord: function (e, a) {
                        e.whichRecord !== a && (e.whichRecord = a), t.$store.dispatch("lt_updateRecord")
                    }, lt_setRebate: function (t, e) {
                        var a = e.rebate, s = e.LotteryType, r = t.mode.mode;
                        t.award = n[s](r, a.Odds), Vue.set(t.Rebate, s, a.Rebate), Vue.set(t.Odds, s, a.Odds)
                    }, lt_updateTmp: function (t, e) {
                        var a = e.alias, s = e.arr;
                        Vue.set(t.tmp, a, s)
                    }, lt_setBetStr: function (t, e) {
                        t.bet.betting_number = e
                    }, lt_setBetCount: function (e, a) {
                        e.bet.betting_count = a, t.$store.commit("lt_setMoney")
                    }, lt_setPower: function (e, a) {
                        e.bet.graduation_count = a, t.$store.commit("lt_setMoney")
                    }, lt_setUnit: function (e, a) {
                        e.bet.betting_model = a, t.$store.commit("lt_setMoney")
                    }, lt_setMoney: function (t) {
                        t.bet.betting_money = +(t.perbet * t.bet.betting_count * t.bet.graduation_count * t.bet.betting_model).toFixed(2)
                    }, lt_addBet: function (e) {
                        var a = new P.BaseBet(t.$store.state);
                        t.$store.commit("lt_addToBasket", a), t.$store.commit("lt_clearBet")
                    }, lt_addRandomBet: function (e, a) {
                        t.$store.commit("lt_addToBasket", a)
                    }, lt_addToBasket: function (e, a) {
                        var s, n = !1;
                        if (e.basket.forEach(function (t, e) {
                                var r = !0;
                                for (var i in t)("string" == typeof t[i] || "number" == typeof t[i] && "graduation_count" !== i && "betting_money" !== i) && t[i] !== a[i] && (r = !1);
                                if (r)return n = !0, void(s = e)
                            }), e.basket.length && n) {
                            var r = e.basket[s].graduation_count;
                            e.basket[s].setPower(r + a.graduation_count, t.$store.state)
                        } else e.basket.push(a);
                        t.$store.commit("lt_backChase")
                    }, lt_setBasket: function (t, e) {
                        t.basket = e
                    }, lt_clearBet: function (t) {
                        t.bet.betting_number = "", t.bet.betting_count = 0, t.bet.betting_money = 0, t.bet.compress = "", P.bus.$emit("clearNoteStr");
                        for (var e in t.tmp)t.tmp[e] = []
                    }, lt_clearBasket: function (e) {
                        e.basket = [], t.$store.commit("lt_setScheme", []), t.$store.commit("lt_backChase")
                    }, lt_deleteBet: function (e, a) {
                        e.basket.splice(a, 1), t.$store.commit("lt_backChase")
                    }, lt_setBetCompress: function (t, e) {
                        t.bet.compress = e
                    }, lt_isStopAfterWin: function (t, e) {
                        t.isStopAfterWin = e
                    }, lt_backChase: function (e) {
                        t.$store.state.lt.isChase && (t.$store.commit("lt_setIsChase", !1), e.basket = [], t.$store.commit("lt_setScheme", []))
                    }, lt_setScheme: function (t, e) {
                        t.scheme = e
                    }, lt_basketPowerTo1: function (t) {
                        t.basket.forEach(function (e) {
                            e.graduation_count = 1, e.betting_money = +(t.perbet * e.betting_count * e.graduation_count * e.betting_model).toFixed(2)
                        })
                    }, lt_setIsChase: function (e, a) {
                        if (a) {
                            var s = e.basket, n = s.some(function (t) {
                                return t.play_detail_code !== s[0].play_detail_code || t.betting_model !== s[0].betting_model
                            });
                            if (n)return e.isChase = e.isChase, void layer.msgWarn("追号不支持混投，请确保您的投注都为同一玩法且元角分模式一致。");
                            e.bet.graduation_count = 1, t.$store.commit("lt_basketPowerTo1")
                        }
                        e.isChase = a
                    }, lt_recordFail: function (t) {
                        t.BetRecordOK = !1, t.ChaseRecordOK = !1
                    }
                }, actions: {
                    lt_updateLottery: function (e, a) {
                        var s = e.state, n = (e.rootState, e.commit), r = e.dispatch;
                        s.LotteryResults[a] || n({
                            type: "lt_setLotteryResult",
                            code: a,
                            results: [],
                            time: null
                        }), n("lt_changeLottery", a), r("lt_getResults", a), i = 0, l = !1, clearTimeout(t.timer1), clearTimeout(t.timer2), r("lt_updatePlan", a)
                    }, lt_updatePlan: function (t, e) {
                        function a(t) {
                            _fetch({Action: "GetLotteryPlan", Qort: t}).then(function (e) {
                                if (1 === e.Code) {
                                    var a = e.Data;
                                    localStorage.setItem("lotteryPlan" + t, (0, d.default)(a)), t === s.lottery.LotteryCode && r("lt_computeIssueNo", a)
                                } else layer.msgWarn(e.StrCode)
                            })
                        }

                        var s = t.state, n = t.rootState, r = t.commit;
                        t.dispatch;
                        if ("1008" === e || "1407" === e) {
                            for (var i = [], o = 0; o < 1440; o++) {
                                var l = {};
                                l.IssueNo = ("000" + (o + 1)).slice(-4), l.StartTime = [("0" + Math.floor((o - 1) / 60)).slice(-2), ("0" + Math.floor((o - 1) % 60)).slice(-2), "59"].join(":"), l.EndTime = [("0" + Math.floor(o / 60)).slice(-2), ("0" + Math.floor(o % 60)).slice(-2), "59"].join(":"), 0 === o && (l.StartTime = "23:59:59"), i.push(l)
                            }
                            r("lt_computeIssueNo", i)
                        } else {
                            var i = localStorage.getItem("lotteryPlan" + e);
                            if (i = i && JSON.parse(i)) {
                                var c = n.LotteryList[e], u = i[1 * c.VerifyIssue - 1].EndTime, v = c.VerifyEndTime.split(" ")[1];
                                c && u !== v ? (localStorage.removeItem("lotteryPlan" + e), a(e), console.log("需要矫正")) : r("lt_computeIssueNo", i)
                            } else a(e)
                        }
                    }, lt_getResults: function (t, e) {
                        var a = t.state, s = (t.rootState, t.commit), n = (t.dispatch, 5e3), r = a.LotteryResults[e];
                        if (r && null !== r.time) {
                            var i = r.time.getTime(), o = (new Date).getTime();
                            if (o - i < n)return void console.log(o - i, "两次获取开奖结果请求小于5s")
                        }
                        _fetch({Action: "GetLotteryOpen", LotteryCode: e, IssueNo: 0, DataNum: 10}).then(function (t) {
                            1 === t.Code && s({
                                type: "lt_setLotteryResult",
                                code: e,
                                results: t.BackData,
                                time: new Date
                            })
                        })
                    }, lt_refresh: function (e) {
                        function a(t, e) {
                            var a = s.lottery.LotteryCode, n = ["1201", "1202"].indexOf(a) > -1, r = s.LotteryPlan[s.IssueNo % s.PlanLen], i = r.Start > r.End && e > r.Start, o = s.IssueNo === s.PlanLen, l = n && e > s.LotteryPlan[0].End, c = i || o || l, u = s.LotteryPlan[s.IssueNo % s.PlanLen].End + c * P.DAY_TIME - e;
                            return u
                        }

                        var s = e.state, n = e.rootState, r = e.commit, o = e.dispatch, c = s.lottery.LotteryCode, u = n.LotteryList[c].IsStop;
                        if ("1" === u)return void r("lt_stopSell", 1);
                        var d = ((new Date).getTime() - t.$store.state.Difftime - P.GMT_DIF) % P.DAY_TIME, v = s.IssueNo;
                        if (d < 1e3 && (r("lt_updateDate"), r("lt_setIssueNo", s.IssueNo % s.PlanLen)), s.PlanLen) {
                            var m = a(s.IssueNo, d);
                            m %= P.DAY_TIME;
                            var f = 0, p = ["1201", "1202"].indexOf(s.lottery.LotteryCode) > -1;
                            if (p) {
                                if (p && d > s.LotteryPlan[0].End - 500 && d < s.LotteryPlan[0].End + 500) {
                                    r("lt_updateIssue");
                                    var h = new Date((new Date).getTime() - t.$store.state.Difftime - P.GMT_DIF).getFullYear();
                                    layer.open({
                                        shadeClose: !1,
                                        className: "layerConfirm",
                                        content: s.OldIssue.replace(h, "") + '期已截止</br>当前期号<span style="color:red">' + s.NowIssue.replace(h, "") + "</span></br>投注时请注意期号",
                                        title: "温馨提示",
                                        btn: ["确定"]
                                    })
                                }
                            } else if (m <= 0) {
                                for (; m <= 0;) {
                                    f++;
                                    var _ = s.LotteryPlan[s.PlanLen - 1].End, g = s.LotteryPlan[0].Start;
                                    g >= _ ? r("lt_setIssueNo", ++v % s.PlanLen) : r("lt_setIssueNo", ++v), m = a(s.IssueNo, d)
                                }
                                f > 1 && (r("lt_updateDate"), r("lt_setIssueNo", s.IssueNo % s.PlanLen)), r("lt_updateIssue");
                                var h = new Date((new Date).getTime() - t.$store.state.Difftime - P.GMT_DIF).getFullYear();
                                layer.open({
                                    shadeClose: !1,
                                    className: "layerConfirm",
                                    content: s.OldIssue.replace(h, "") + '期已截止</br>当前期号<span style="color:red">' + s.NowIssue.replace(h, "") + "</span></br>投注时请注意期号",
                                    title: "温馨提示",
                                    btn: ["确定"]
                                })
                            }
                            if (m = Math.floor(m / 1e3), m > 600 && !p)r("lt_updateTimeBar", "预售中"); else {
                                var y = Math.floor(m / 3600), b = Math.floor(m % 3600 / 60), C = Math.floor(m % 60);
                                y = y > 9 ? y : "0" + y, b = b > 9 ? b : "0" + b, C = C > 9 ? C : "0" + C, r("lt_updateTimeBar", y + ":" + b + ":" + C)
                            }
                            var w = s.LotteryResults[s.lottery.LotteryCode].results, S = w ? w.length : 0;
                            if (!l)if (!S || 1 * w[0].IssueNo < 1 * s.OldIssue) {
                                i = 60 - m % 60;
                                var x;
                                switch (s.lottery.LotteryCode) {
                                    case"1407":
                                    case"1008":
                                        x = 5;
                                        break;
                                    default:
                                        x = 30
                                }
                                i > 5 + T && i % x === T && o("lt_getResults", s.lottery.LotteryCode)
                            } else 1 * w[0].IssueNo >= 1 * s.NowIssue ? r("lt_stopSell", 0) : (r("lt_displayResults", !0), i && (l = !0, t.timer2 = setTimeout(function () {
                                r("lt_recordFail"), o("lt_updateRecord"), i = 0, l = !1
                            }, 1e3 * (11 + T))))
                        }
                    }, lt_updateBetRecord: function (t) {
                        var e = t.state, a = (t.rootState, t.commit);
                        t.dispatch;
                        _fetch({Action: "GetBetting"}).then(function (t) {
                            if (1 === t.Code) {
                                var s = t.Data;
                                a("lt_setBetRecord", s), e.BetRecordOK = !0
                            }
                        })
                    }, lt_updateChaseRecord: function (t) {
                        var e = t.state, a = (t.rootState, t.commit);
                        t.dispatch;
                        _fetch({Action: "GetChaseBetting"}).then(function (t) {
                            if (1 === t.Code) {
                                var s = t.Data;
                                a("lt_setChaseRecord", s), e.ChaseRecordOK = !0
                            }
                        })
                    }, lt_updateRecord: function (t) {
                        var e = t.state, a = (t.rootState, t.commit, t.dispatch);
                        if ("BetRecord" === e.whichRecord) {
                            var s = e.BetRecordOK === !1, n = 0 === e.BetRecord.length, r = e.BetRecord.some(function (t) {
                                return "等待开奖" === t.openState
                            });
                            s && (n || r) && a("lt_updateBetRecord")
                        } else {
                            var s = e.ChaseRecordOK === !1, n = 0 === e.ChaseRecord.length, r = e.ChaseRecord.some(function (t) {
                                return "未开始" === t.state || "追号中" === t.state
                            });
                            s && (n || r) && a("lt_updateChaseRecord")
                        }
                    }, lt_getRebate: function (t, e) {
                        var a = t.state, s = t.rootState, n = t.commit, r = (t.dispatch, a.lottery.LotteryType), i = s["Rebate" + r];
                        i && e !== !0 ? n({type: "lt_setRebate", rebate: i, LotteryType: r}) : _fetch({
                            Action: "GetBetRebate",
                            LotteryType: r
                        }).then(function (t) {
                            1 === t.Code ? (n("SaveInitData", (0, o.default)({}, "Rebate" + r, t.BackData)), n({
                                type: "lt_setRebate",
                                rebate: t.BackData,
                                LotteryType: r
                            }), a.basket.forEach(function (e) {
                                e.setRebate(t.BackData.Rebate, s)
                            })) : console.log(t.StrCode)
                        })
                    }, lt_confirmBet: function (e) {
                        var a = e.state, s = (e.rootState, e.commit), n = (e.dispatch, (0, P.deleteCompress)(a.basket)), r = {wait: "正在投注，请稍候"};
                        _fetch({Action: "AddBetting", data: {BettingData: n}}, r).then(function (e) {
                            if (1 === e.Code) {
                                layer.alert(e.StrCode), s("lt_clearBet"), s("lt_clearBasket"), s("lt_changeBox", "");
                                var r = n.map(function (t) {
                                    return t.betting_money
                                }).reduce(function (t, e) {
                                    return t + e
                                }), i = n[0].betting_issuseNo, o = a.BetRecord.slice(0), l = {
                                    issueNo: i,
                                    normal_money: r.toFixed(2),
                                    openState: "等待开奖",
                                    url: "/BetRecord"
                                };
                                o.unshift(l), o.length > 5 && (o.length = 5), s("lt_setBetRecord", o)
                            } else if (e.Code === -9) {
                                layer.alert(e.StrCode);
                                a.lottery.LotteryType;
                                t.$store.dispatch("lt_getRebate", !0)
                            } else layer.msgWarn(e.StrCode)
                        })
                    }, lt_chase: function (e, a) {
                        var s = e.state, n = (e.rootState, e.commit), i = (e.dispatch, e.getters), o = a.isStopAfterWin, l = a.startIssue, c = a.specialConfig;
                        if (c)var u = c.since, d = c.rateBefore, v = c.rateAfter, m = c.cashBefore, f = c.cashAfter; else var u, d, v, m, f;
                        var p = {
                            before_issueNo: u || -1,
                            before_eamings_cash: m || -1,
                            after_eamings_cash: f || -1,
                            before_earnings_rate: 100 * d || -1,
                            after_earnings_rate: 100 * v || -1,
                            isstop_afterwinning: +o,
                            start_issueNo: l,
                            lottery_code: s.lottery.LotteryCode,
                            chase_money: +i.schemeTotal,
                            buy_count: s.scheme.length,
                            betting: (0, P.deleteCompress)(s.basket, !0),
                            shceme: s.scheme
                        }, h = (0, r.default)({}, p), _ = {wait: "正在投注，请稍候"};
                        _fetch({Action: "AddChaseBetting", data: h}, _).then(function (e) {
                            if (1 === e.Code) {
                                layer.alert(e.StrCode), n("lt_clearBet"), n("lt_clearBasket"), n("lt_changeBox", ""), n("lt_setScheme", []), n("lt_setIsChase", !1);
                                var a = h.start_issueNo, r = "0/" + h.shceme.length, i = h.chase_money, o = s.ChaseRecord.slice(0), l = {
                                    issueNo: a,
                                    complete_count: r,
                                    chase_money: i.toFixed(2),
                                    state: "未开始"
                                };
                                o.unshift(l), o.length > 5 && (o.length = 5), n("lt_setChaseRecord", o)
                            } else if (e.Code === -9) {
                                layer.alert(e.StrCode);
                                s.lottery.LotteryType;
                                t.$store.dispatch("lt_getRebate", !0)
                            } else layer.msgWarn(e.StrCode)
                        })
                    }
                }
            };
            this.$store.state.lt || this.$store.registerModule("lt", u), this.$store.commit("lt_updateDate"), this.$store.dispatch("lt_updateLottery", this.lcode), this.$store.commit("lt_initConfig");
            var v = this.$route.params.type;
            this.setDefaultMode(v), this.$store.dispatch("lt_updateRecord");
            var m = localStorage.getItem("Rebate" + v);
            m ? (m = JSON.parse(m), this.$store.commit({
                type: "lt_setRebate",
                rebate: m,
                LotteryType: v
            })) : console.log("返点不存在"), this.baseLoop = setInterval(function () {
                t.$store.dispatch("lt_refresh")
            }, 1e3)
        }, data: function () {
            return {ltype: "", lcode: "", timer1: null, timer2: null, timer3: null, timer4: null, baseLoop: null}
        }, computed: {
            isGroupLottery: function () {
                return ["10", "11", "14"].indexOf(this.lcode.slice(0, 2)) > -1
            }, LotteryConfig: function () {
                return this.$store.state.LotteryConfig
            }, LotteryList: function () {
                return this.$store.state.LotteryList
            }, lotteryClass: function () {
                var t = ["热门", "全部"];
                return this.LotteryConfig.map(function (t) {
                    return t.LotteryClassName
                }).filter(function (e) {
                    return t.indexOf(e) === -1
                })
            }
        }, methods: {
            closeBox: function () {
                store.commit("lt_changeBox", "")
            }, setDefaultMode: function (t) {
                var e = {
                    SSC: ["五星", "直选"],
                    SYX5: ["三码", "三码"],
                    FC3D: ["三星", "直选"],
                    PL35: ["三星", "直选"],
                    KL8: ["任选", "普通玩法"],
                    PK10: ["定位胆", "标准"]
                };
                if ("K3" !== this.ltype) {
                    var a, s;
                    a = e[t][0], s = e[t][1], store.commit("lt_changeMode", state.lt.config[a][s][0])
                } else store.commit("lt_changeMode", state.lt.config[0])
            }, getCodeList: function (t) {
                for (var e = 0; e < this.LotteryConfig.length; e++) {
                    var a = this.LotteryConfig[e];
                    if (a.LotteryClassName == t)return a.LotteryList
                }
            }, getLink: function (t, e) {
                return "/lottery/" + t + "/" + e
            }
        }, watch: {
            $route: function (t, e) {
                var a = this, s = this.$route.fullPath.slice(1).split("/"), n = (0, c.default)(s, 3);
                this.ltype = n[1], this.lcode = n[2], this.$store.commit("lt_setPerbet", P.PERBET), this.$store.commit("lt_clearBet"), this.$store.commit("lt_clearBasket"), this.$store.commit("lt_setScheme", []), this.$store.dispatch("lt_updateLottery", this.lcode), this.$store.commit("lt_initConfig");
                var r = this.$route.params.type;
                this.setDefaultMode(r), this.$store.commit("lt_setWhichRecord", "BetRecord");
                var i = R(r);
                i.then(function (t) {
                    a.$store.commit({type: "lt_setRebate", rebate: t, LotteryType: r})
                }).catch(function (t) {
                    a.$router.push("/lotteryHall"), layer.msgWarn(t.message)
                })
            }
        }, beforeRouteLeave: function (t, e, a) {
            store.state.lt && (store.commit("lt_setPower", 1), store.commit("lt_setPerbet", P.PERBET), store.commit("lt_setUnit", 1), store.commit("lt_clearBet"), store.commit("lt_clearBasket"), store.commit("lt_setScheme", []), store.commit("toggleAllLottery", !1), store.commit("lt_recordFail")), clearTimeout(RootApp.isScroll), a()
        }, beforeDestroy: function () {
            clearTimeout(this.timer1), clearTimeout(this.timer2), clearTimeout(this.timer3), clearTimeout(this.timer4), clearInterval(this.baseLoop)
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(72), r = s(n), i = a(325), o = s(i), l = a(11);
    e.default = {
        beforeRouteEnter: function (t, e, a) {
            var s = ["HallBanner", "LotteryConfig"];
            RootApp.GetInitData(s, function (t) {
                a()
            })
        },
        created: function () {
            var t = this;
            if (this.$store.state.LotteryConfig) {
                this.lotteryConfig = this.$store.state.LotteryConfig.slice(0);
                var e = [];
                this.lotteryConfig.forEach(function (t) {
                    "热门" !== t.LotteryClassName && (e = e.concat(t.LotteryList))
                }), this.whole = {
                    LotteryClassName: "全部",
                    LotteryList: e
                }, this.lotteryConfig.splice(1, 0, this.whole), this.nowDisplayList = this.lotteryConfig[0].LotteryList.map(function (e) {
                    return t.LotteryList[e]
                })
            }
        },
        data: function () {
            return {whole: {}, nowLotteryClass: "热门", nowDisplayList: [], dWidth: 800, TipId: ""}
        },
        components: {BannerBox: r.default, billboard: o.default},
        computed: (0, l.mapState)({LotteryConfig: "LotteryConfig", LotteryList: "LotteryList"}),
        methods: {
            changeNowLotteryClass: function (t, e) {
                var a = this;
                this.nowLotteryClass = t, this.nowDisplayList = e.map(function (t) {
                    return a.LotteryList[t]
                })
            }, OpenWin: function (t) {
                var e, a, s = window.screen.height - 80, n = window.screen.width, r = 1018, i = .9 * s;
                n < r && (r = .9 * n), e = (s - i) / 2, a = (n - r) / 2, window.open(t, "_blank", "top=" + e + ",left=" + a + ",width=" + r + ",height=" + i)
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(9), d = s(u);
    e.default = {
        data: function () {
            return {
                a_state: 0,
                DataCount: null,
                TotalPage: 0,
                ajaxData: {Action: "GetReportInfo", BetweenType: 0, DataNum: 10, UserName: 0, Index: 0},
                BackData: [],
                StorageObj: {},
                LowerNameArr: [],
                LowerPath: [0],
                isDataNot: !0
            }
        }, components: {UserSlide: o.default, page: c.default, loading: d.default}, methods: {
            SeeLower: function (t) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    UserName: t,
                    Index: 0
                }), this.LowerNameArr.push(t), this.CheckData()
            }, ReturnBack: function (t) {
                this.ajaxData.UserName = t ? this.LowerNameArr[t - 1] : 0, this.ajaxData.Index = 0, this.LowerNameArr.splice(t), this.CheckData()
            }, SearchByMonth: function (t) {
                this.a_state = t, this.LowerNameArr = [], this.$refs.page.current = 1, this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    BetweenType: t,
                    UserName: 0,
                    Index: 0
                }), this.CheckData()
            }, SaveData: function (t, e, a, s) {
                this.StorageObj[[t.UserName, t.BetweenType, t.Index].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, CheckData: function () {
                var t = this.StorageObj[[this.ajaxData.UserName, this.ajaxData.BetweenType, this.ajaxData.Index].join("")];
                t ? (this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.GetData())
            }, GetData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    1 === a.Code ? (t.isDataNot = !1, t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.SaveData(e, a.BackData, t.DataCount, t.TotalPage), t.CheckData()) : layer.msgWarn(a.StrCode)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.CheckData()
            }
        }, created: function () {
            this.CheckData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(12), r = s(n);
    e.default = {
        data: function () {
            return {Interval: null}
        }, beforeRouteEnter: function (t, e, a) {
            sessionStorage.getItem("Maintain") ? state.Maintain = JSON.parse(sessionStorage.getItem("Maintain")) : sessionStorage.setItem("Maintain", (0, r.default)(state.Maintain)), state.HeadFootShow = !1, state.Maintain ? t.meta.title = '<img src="' + (state.Maintain.ImgUrl + "/logo/mobile_logo.png") + '">' : t.meta.title = '<img src="' + (state.constant.ImgHost + state.SiteConfig.MobileLogo) + '">', a()
        }, beforeRouteLeave: function (t, e, a) {
            state.HeadFootShow = !0, a()
        }, created: function () {
            var t = setInterval(function () {
                _fetch({Action: "GetServerTimeMillisecond"}).then(function (e) {
                    e.Code > -1 && (clearInterval(t), sessionStorage.removeItem("Maintain"), router.push("/index"))
                })
            }, 12e4)
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(1), o = s(i);
    e.default = {
        data: function () {
            return {
                CardList: "",
                tipHtml: "",
                FiveUnlok: !0,
                oneCarLok: "",
                bankArr: {
                    "农业银行": "ABC",
                    "交通银行": "BCM",
                    "中国银行": "BOC",
                    "建设银行": "CCB",
                    "光大银行": "CEB",
                    "兴业银行": "CIB",
                    "中信银行": "CITIC",
                    "招商银行": "CMB",
                    "民生银行": "CMBC",
                    "广发银行": "GDB",
                    "华夏银行": "HXBANK",
                    "工商银行": "ICBC",
                    "邮政储蓄": "PSBC",
                    "平安银行": "SPABANK",
                    "浦发银行": "SPDB",
                    "农商银行": "CRCC"
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["UserBankCardList"];
            RootApp.GetInitData(s, function (t) {
                var e = localStorage.getItem("UserName");
                return e ? void a(function (e) {
                    e.CardList = t.UserBankCardList, e.setTip()
                }) : (router.push("/login"), void(t.turning = !1))
            })
        }, methods: {
            setCard: function () {
                var t = this.oneCarLok ? "/verifyBankcard" : "/setBankcard";
                router.push(t)
            }, setTip: function () {
                var t = this.CardList, e = "";
                t && t.length ? t.length >= 5 ? (e = "<p><i></i>您已绑定" + t.length + "张银行卡，无法绑定更多的卡。成功提现的银行卡会自动锁定，无法删除和修改。</p>", this.FiveUnlok = !0) : (e = "<p><i></i>您已绑定" + t.length + "张银行卡，一共可以绑定5张银行卡。为了您的资金安全，成功提现的银行卡会自动锁定，无法删除和修改。</p>", this.oneCarLok = !!this.isLock(t), this.FiveUnlok = !1) : (e = "<p><i></i>温馨提示：您尚未绑定银行卡，一共可以绑定5张银行卡。</p>", this.FiveUnlok = !1), this.tipHtml = e
            }, isLock: function (t) {
                var e = !1, a = !0, s = !1, n = void 0;
                try {
                    for (var i, o = (0, r.default)(t); !(a = (i = o.next()).done); a = !0) {
                        var l = i.value;
                        if (l.isLock)return e = !0
                    }
                } catch (t) {
                    s = !0, n = t
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (s)throw n
                    }
                }
                return e
            }
        }, components: {UserSlide: o.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n);
    e.default = {
        data: function () {
            return {}
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["AgentRebate"];
            RootApp.GetInitData(s, function (t) {
                a()
            })
        }, components: {UserSlide: r.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(1), o = s(i);
    e.default = {
        data: function () {
            return {
                va: {},
                caiName: {
                    SSC: "时时彩",
                    XYNC: "幸运农场",
                    PK10: "北京PK10",
                    KL8: "北京快乐8",
                    PL35: "排列3/5",
                    FC3D: "福彩3D",
                    SYX5: "11选5",
                    K3: "快3"
                },
                UserType: 1,
                caiList: "",
                dval: "",
                keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["AgentRebate"];
            RootApp.GetInitData(s, function (t) {
                a(function (e) {
                    e.TipShow = !1, e.caiList = t.AgentRebate, e.$nextTick(function () {
                        var a = e.$va.Rule, s = !0, n = !1, i = void 0;
                        try {
                            for (var o, l = (0, r.default)(t.AgentRebate); !(s = (o = l.next()).done); s = !0) {
                                var c = o.value;
                                e.$va.addRule(c.LotteryType, 2, new a("limit", [c.MinPoint, c.Point], ""))
                            }
                        } catch (t) {
                            n = !0, i = t
                        } finally {
                            try {
                                !s && l.return && l.return()
                            } finally {
                                if (n)throw i
                            }
                        }
                    })
                })
            })
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = this.$va.getValue(), s = "", n = -1;
                for (var r in a)++n, n > 0 && (s += "@"), s += r + "#" + a[r];
                var i = {Action: "SetInviteUrl", PointJson: s, UserType: this.UserType, Remark: "未设置"};
                this.delKeyUp();
                var o = {wait: "正在处理"};
                _fetch(i, o).then(function (e) {
                    1 == e.Code ? layer.alert(e.StrCode, function () {
                        var t = 1 == i.UserType ? "AgentCode" : "memberCode";
                        router.push("/manageIcode/" + t)
                    }) : (layer.msgWarn(e.StrCode), t.addKeyUp())
                })
            }, OpenWin: function (t) {
                var e, a, s = window.screen.height - 80, n = window.screen.width, r = 1240, i = .9 * s;
                n < r && (r = .9 * n), e = (s - i) / 2, a = (n - r) / 2, window.open(t, "_blank", "top=" + e + ",left=" + a + ",width=" + r + ",height=" + i)
            }
        }, components: {UserSlide: o.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(74), r = s(n);
    e.default = {
        data: function () {
            return {CodeType: 0}
        }, components: {Icode: r.default}
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = function (t) {
        var e = location.hostname;
        3 === e.split(".").length && (e = e.replace(e.split(".")[0] + ".", "")), document.getElementById("ios").innerHTML = "", document.getElementById("android").innerHTML = "";
        var a = new QRCode("ios", {width: 100, height: 100});
        a.makeCode("https://itunes.apple.com/cn/app/cai-shen-zheng-ba/id1196087181?l=zh&ls=1&mt=8");
        var a = new QRCode("android", {width: 100, height: 100});
        a.makeCode("http://static.imagess-google.com/app.html?m." + e + "/AppDownload")
    }, s = function () {
        var t = document.createElement("script");
        t.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/04f46c6a/qrcode.min.js";
        var e = document.body.firstChild;
        return document.body.insertBefore(t, e), t
    };
    e.default = {
        data: function () {
            return {
                hostName: "",
                siteName: "",
                imgLlist: ["1-home", "2-activity", "3-find", "4-myaccount", "5-grade"],
                vShow: 0
            }
        }, mounted: function () {
            var t = this;
            RootApp.GetInitData(["SiteConfig"], function (e) {
                e.SiteConfig && (t.siteName = e.SiteConfig.Name + "移动版")
            })
        }, created: function () {
            var t = s();
            t.onload = function () {
                a(this)
            }, this.hostName = "m." + location.hostname.replace("www.", ""), this.setAuto()
        }, methods: {
            setAuto: function () {
                var t = this, e = this.imgLlist.length, a = function a() {
                    t.vAoto = setTimeout(function () {
                        t.vShow >= e - 1 ? t.vShow = 0 : t.vShow += 1, a()
                    }, 3e3)
                };
                a()
            }
        }, beforeDestroy: function () {
            clearTimeout(this.vAoto), this.vAoto = "";
            var t = document.body.firstChild.src.indexOf("qrcode") != -1;
            t && document.body.removeChild(document.body.childNodes[0])
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {}
        }, beforeRouteEnter: function (t, e, a) {
            state.HeadFootShow = !1, a()
        }, beforeRouteLeave: function (t, e, a) {
            state.HeadFootShow = !0, a()
        }, methods: {
            back: function () {
                router.go(-1)
            }, goHome: function () {
                router.push("/"), state.HeadFootShow = !0
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(1), o = s(i), l = a(75), c = s(l), u = a(36), d = s(u), v = a(2), m = s(v);
    e.default = {
        data: function () {
            return {
                va: {NickName: {}, QQ: {}},
                ImageShow: !1,
                NickName: "",
                Mobile: "",
                Mail: "",
                QQ: "",
                Sex: "",
                ArrA: "",
                ArrB: "",
                ArrC: "",
                ShowA: !1,
                ShowB: !1,
                ShowC: !1,
                TextA: "年份",
                TextB: "月份",
                TextC: "日期",
                UserBirthDay: "",
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["UserPhoto", "DefaultPhotoList", "UserName", "UserUpGradeBonus", "UserNickName", "UserMobile", "UserMail", "UserSex", "UserQQ", "UserBirthDay", "UserGradeGrow", "GradeList"];
            RootApp.GetInitData(s, function (t) {
                a()
            })
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            if (this.keyupHandler = function (e) {
                    13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
                }, this.addKeyUp(), this.NickName = state.UserNickName, this.Mobile = state.UserMobile, this.Mail = state.UserMail, this.QQ = state.UserQQ, this.Sex = state.UserSex, this.UserBirthDay = state.UserBirthDay, this.UserBirthDay) {
                var e = this.UserBirthDay.split("-");
                this.TextA = e[0], this.TextB = 1 * e[1], this.TextC = 1 * e[2]
            }
            var a = new Date, s = a.getFullYear(), n = a.getMonth() + 1, r = new Date(s, n, 0).getDate();
            this.ArrA = this.setArr(s, s - 70), this.ArrB = this.setArr(1, 12), this.ArrC = this.setArr(1, r)
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, imageShow: function () {
                this.ImageShow = !0
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = {Action: "UpdatePersonInfo"};
                state.UserNickName || (a.NickName = this.NickName);
                var s = this.TextA + "-" + this.TextB + "-" + this.TextC;
                if (new Date(s).getDate() != s.split("-")[2])return void layer.msgWarn("生日不正确，请重新选择");
                a.Birthday = this.TextA + "-" + this.TextB + "-" + this.TextC, a.Sex = this.Sex, a.QQ = this.QQ, this.delKeyUp();
                var n = {wait: "正在处理"};
                _fetch(a, n).then(function (e) {
                    1 == e.Code ? (RootApp.AjaxGetInitData(["UserNickName", "UserSex", "UserBirthDay", "UserQQ"]), sessionStorage.removeItem("card0"), layer.msgWarn(e.StrCode)) : (layer.msgWarn(e.StrCode), t.addKeyUp())
                })
            }, close: function (t, e, a) {
                this["Text" + a] = t, this["Qid" + a] = e, this["Show" + a] = !1
            }, selShow: function (t) {
                this.ShowA = !1, this.ShowB = !1, this.ShowC = !1, this[t] = !0
            }, setArr: function (t, e) {
                var a = [], s = "push";
                t < e && (t ^= e, e ^= t, t ^= e, s = "unshift");
                for (var n = t; n >= e; n--)a[s](n);
                return a
            }, getUserTitle: function () {
                var t = state.UserUpGradeBonus.Grade;
                if ("-1" == t)return "测试组";
                var e = !0, a = !1, s = void 0;
                try {
                    for (var n, i = (0, r.default)(state.GradeList); !(e = (n = i.next()).done); e = !0) {
                        var o = n.value;
                        if (t == o.Grade)return o.GradeName
                    }
                } catch (t) {
                    a = !0, s = t
                } finally {
                    try {
                        !e && i.return && i.return()
                    } finally {
                        if (a)throw s
                    }
                }
            }
        }, components: {UserSlide: o.default, ImageList: c.default, SelectBox: d.default, tip: m.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(75), o = s(i);
    e.default = {
        data: function () {
            return {ImageShow: !1, nextGradeGrow: "", UserTitle: "", upGrow: "", perVal: ""}
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["UserPhoto", "DefaultPhotoList", "UserName", "UserUpGradeBonus", "UserGradeGrow", "GradeList"];
            RootApp.GetInitData(s, function (t) {
                a(function (e) {
                    var a = (t.UserGradeGrow, t.GradeList), s = "-1" != t.UserUpGradeBonus.Grade && 1 * t.UserUpGradeBonus.Grade + 1;
                    if (s = s < 9 ? s : 9, "-1" != t.UserUpGradeBonus.Grade) {
                        e.getPerLong(t.UserUpGradeBonus.Grade);
                        for (var n in a)a[n].Grade == s && (e.nextGradeGrow = a[n].GradeGrow, e.UserTitle = s < 9 ? a[n - 1].GradeName : a[n].GradeName)
                    } else e.nextGradeGrow = 0, e.UserTitle = "测试组"
                })
            })
        }, methods: {
            imageShow: function () {
                this.ImageShow = !0
            }, getPerLong: function (t) {
                var t = Number(t), e = t < 9 ? Number(t) : 8, a = t ? state.GradeList[e].GradeGrow : 0, s = t ? state.GradeList[t - 1].GradeGrow : 0, n = Math.ceil(((state.UserGradeGrow || s) - s) / (a - s) * 100);
                this.perVal = t < 9 ? (n > 100 ? 100 : n) || 0 : 100, this.upGrow = a - state.UserGradeGrow || 0
            }
        }, components: {UserSlide: r.default, ImageList: o.default}
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {btnMsg: "重新检测", btnIf: !0, islang: "", LineList: ""}
        }, beforeRouteEnter: function (t, e, a) {
            a()
        }, created: function () {
            this.getData()
        }, methods: {
            finder: function (t, e) {
                var a = this;
                e.length < a.islang ? (a.btnIf = !1, a.btnMsg = "正在检测") : (a.btnIf = !0, a.btnMsg = "重新检测")
            }, ping: function (t) {
                var e = this, a = [], s = t, n = s.length;
                window.callback = function (t) {
                    var s = a.pop();
                    s[2] = 0, a.unshift(s), e.evenNumbers(a)
                };
                var r = 0, i = setInterval(function () {
                    !function (t) {
                        var n = document.createElement("img");
                        n.src = "http://" + s[t] + "/jsonp.js?" + Math.random();
                        var r = (new Date).getTime();
                        n.onerror = function (i) {
                            r = (new Date).getTime() - r, a.push([s[t], r, 1]);
                            var o = document.createElement("script");
                            o.src = n.src, document.body.appendChild(o), e.finder(t, a), e.LineList = a
                        }
                    }(r), ++r == n && clearInterval(i)
                }, 100)
            }, getData: function () {
                var t = this, e = {Action: "getPingLine"};
                _fetch(e).then(function (e) {
                    1 == e.Code && (t.islang = e.BackData.length, t.ping(e.BackData))
                })
            }, upList: function () {
                this.btnIf && (this.islang = "", this.LineList = "", this.btnMsg = "正在检测", this.btnIf = !1, this.getData())
            }, evenNumbers: function (t) {
                t.sort(function (t, e) {
                    return t[1] - e[1]
                }).sort(function (t, e) {
                    return t[2] - e[2]
                }), this.LineList = t
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(27), o = s(i), l = a(1), c = s(l), u = a(2), d = s(u), v = a(23), m = s(v);
    e.default = {
        mixins: [m.default], data: function () {
            return {
                va: {Money: {}},
                BankList: "",
                BankCode: "",
                BankId: "",
                ShortName: "",
                BankName: "",
                Money: "",
                ID: "",
                PayUser: "",
                MinMoney: "",
                MaxMoney: "",
                isMaint: !1,
                keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = new o.default(function (t, e) {
                var a = ["RechargeWayQuick"];
                RootApp.AjaxGetInitData(a, function (e) {
                    t(e.RechargeWayQuick)
                })
            }), n = new o.default(function (t, e) {
                RootApp.GetInitData(["PayLimit"], function (e) {
                    t(e.PayLimit)
                })
            });
            o.default.all([s, n]).then(function (t) {
                a(function (e) {
                    e.getMoney(t[1]), t[0] && t[0].PayType ? (e.PayUser = t[0].PayType, e.BankList = t[0].FastBankList, e.ID = t[0].Id, e.isMaint = !1) : e.isMaint = !0
                })
            })
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, methods: {
            moneyChange: function (t) {
                var e = this.moneyFormat(t);
                this.Money = e
            }, delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, getMoney: function (t) {
                if (t) {
                    var e = t["快捷支付"];
                    this.MinMoney = e[0], this.MaxMoney = e[1];
                    var a = this.$va.Rule;
                    this.$va.addRule("Money", 2, new a("limit", [e[0], e[1]], ""))
                }
            }, setBank: function (t) {
                this.BankId = t;
                var e = !0, a = !1, s = void 0;
                try {
                    for (var n, i = (0, r.default)(this.BankList); !(e = (n = i.next()).done); e = !0) {
                        var o = n.value;
                        if (o.BankId == t)return this.BankCode = o.BankCode, this.RealName = o.RealName, void(this.ShortName = o.ShortName)
                    }
                } catch (t) {
                    a = !0, s = t
                } finally {
                    try {
                        !e && i.return && i.return()
                    } finally {
                        if (a)throw s
                    }
                }
            }, vaSubmit: function () {
                var t = this;
                if (!this.BankId || !this.BankCode)return layer.alert("请选择银行账户");
                var e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                if (1 * this.Money < 1 * this.MinMoney || 1 * this.Money > 1 * this.MaxMoney)return layer.alert("充值金额必须在" + this.MinMoney + "与" + this.MaxMoney + "之间");
                var a = {
                    Action: "Recharge",
                    Qort: 1,
                    ID: this.ID,
                    BankCode: this.BankCode,
                    Money: this.Money,
                    PayUser: this.PayUser
                };
                this.delKeyUp();
                var s = window.open("about:blank"), n = {wait: "正在处理"};
                _fetch(a, n).then(function (e) {
                    1 == e.Code ? (layer.closeAll(), t.Money = "", t.PayUser = "", t.$va.refreshValue("Money", ""), t.va.Money = {}, s.location.href = e.BackUrl) : layer.msgWarn(e.StrCode)
                })
            }
        }, components: {UserSlide: c.default, tip: d.default}
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {
                BetweenType: "",
                BottomBoxList: {
                    K3: "快3",
                    SSC: "时时彩",
                    SYX5: "11选5",
                    FC3D: "福彩3D",
                    PL35: "排列3/5",
                    KL8: "北京快乐8",
                    PK10: "北京PK10"
                },
                AgentRebate: "",
                setObj: {Max: "8.0", Min: "0.0"},
                ArrObj: "",
                reeData: {},
                isMinData: !1,
                theWidth: "",
                OrData: "",
                ListArr: "",
                aMax: 0,
                aMin: 0
            }
        }, beforeRouteEnter: function (t, e, a) {
            state.HeadFootShow = !1;
            var s = ["AgentRebate"];
            RootApp.GetInitData(s, function (t) {
                a()
            })
        }, beforeRouteLeave: function (t, e, a) {
            state.HeadFootShow = !0, a()
        }, created: function () {
            this.$route.hash && this.$route.hash.split("#")[1] ? this.BetweenType = this.$route.hash.split("#")[1] : this.BetweenType = "K3";
            var t = !this.BottomBoxList[this.BetweenType];
            return t ? router.push("/manageInvite") : (this.AgentRebate = state.AgentRebate, this.OrData = {
                SSC: [{
                    Mode: "大小单双-二星",
                    Odd: [1, 4]
                }, {Mode: "大小单双-三星", Odd: [1, 8]}, {Mode: "一星-复式", Odd: [1, 10]}, {
                    Mode: "二星-直选复式",
                    Odd: [1, 100]
                }, {Mode: "二星-直选单式", Odd: [1, 100]}, {Mode: "二星-直选和值", Odd: [1, 100]}, {
                    Mode: "二星-跨度",
                    Odd: [1, 100]
                }, {Mode: "二星-组选复式", Odd: [2, 100]}, {Mode: "二星-组选单式", Odd: [2, 100]}, {
                    Mode: "二星-组选和值",
                    Odd: [2, 100]
                }, {Mode: "二星-组选包胆", Odd: [2, 100]}, {Mode: "三星-复式", Odd: [1, 1e3]}, {
                    Mode: "三星-单式",
                    Odd: [1, 1e3]
                }, {Mode: "三星-直选和值", Odd: [1, 1e3]}, {Mode: "三星-跨度", Odd: [1, 1e3]}, {
                    Mode: "三星-组选和值",
                    Odd: [6, 1e3]
                }, {Mode: "三星-组三", Odd: [3, 1e3]}, {Mode: "三星-组六", Odd: [6, 1e3]}, {
                    Mode: "三星-混合组选",
                    Odd: [6, 1e3]
                }, {Mode: "三星-组选包胆", Odd: [6, 1e3]}, {Mode: "三星-组三单式", Odd: [3, 1e3]}, {
                    Mode: "三星-组六单式",
                    Odd: [6, 1e3]
                }, {Mode: "三星-一码不定位", Odd: [271, 1e3]}, {Mode: "三星-二码不定位", Odd: [54, 1e3]}, {
                    Mode: "四星-复式",
                    Odd: [1, 1e4]
                }, {Mode: "四星-单式", Odd: [1, 1e4]}, {Mode: "四星-组选24", Odd: [24, 1e4]}, {
                    Mode: "四星-组选12",
                    Odd: [12, 1e4]
                }, {Mode: "四星-组选6", Odd: [6, 1e4]}, {Mode: "四星-组选4", Odd: [4, 1e4]}, {
                    Mode: "四星-一码不定位",
                    Odd: [3439, 1e4]
                }, {Mode: "四星-二码不定位", Odd: [974, 1e4]}, {Mode: "五星-复式", Odd: [1, 1e5]}, {
                    Mode: "五星-单式",
                    Odd: [1, 1e5]
                }, {Mode: "五星-组选120", Odd: [120, 1e5]}, {Mode: "五星-组选60", Odd: [60, 1e5]}, {
                    Mode: "五星-组选30",
                    Odd: [30, 1e5]
                }, {Mode: "五星-组选20", Odd: [20, 1e5]}, {Mode: "五星-组选10", Odd: [10, 1e5]}, {
                    Mode: "五星-组选5",
                    Odd: [5, 1e5]
                }, {Mode: "五星-一码不定位", Odd: [40951, 1e5]}, {Mode: "五星-二码不定位", Odd: [14670, 1e5]}, {
                    Mode: "五星-三码不定位",
                    Odd: [4350, 1e5]
                }, {Mode: "五星-一帆风顺", Odd: [40951, 1e5]}, {Mode: "五星-好事成双", Odd: [8146, 1e5]}, {
                    Mode: "五星-三星报喜",
                    Odd: [856, 1e5]
                }, {Mode: "五星-四季发财", Odd: [46, 1e5]}],
                SYX5: [{Mode: "选一-前三一码不定位", Odd: [270, 990]}, {Mode: "选一-复式", Odd: [1, 11]}, {
                    Mode: "选一-任选一中一",
                    Odd: [25200, 55440]
                }, {Mode: "选二-前二直选", Odd: [1, 110]}, {Mode: "选二-前二组选", Odd: [2, 110]}, {
                    Mode: "选二-任选二中二",
                    Odd: [10080, 55440]
                }, {Mode: "选三-前三直选-复式", Odd: [1, 990]}, {Mode: "选三-前三直选-单式", Odd: [1, 990]}, {
                    Mode: "选三-前三组选-复式",
                    Odd: [6, 990]
                }, {Mode: "选三-前三组选-单式", Odd: [6, 990]}, {Mode: "选三-前三组选-胆拖", Odd: [6, 990]}, {
                    Mode: "选三-任选三中三",
                    Odd: [3360, 55440]
                }, {Mode: "选四-任选四中四", Odd: [840, 55440]}, {Mode: "选五-任选五中五", Odd: [120, 55440]}, {
                    Mode: "选六-任选六中五",
                    Odd: [720, 55440]
                }, {Mode: "选七-任选七中五", Odd: [2520, 55440]}, {Mode: "选八-任选八中五", Odd: [6720, 55440]}, {
                    Mode: "趣味-定单双-5单0双",
                    Odd: [720, 55440]
                }, {Mode: "趣味-定单双-4单1双", Odd: [9e3, 55440]}, {
                    Mode: "趣味-定单双-3单2双",
                    Odd: [24e3, 55440]
                }, {Mode: "趣味-定单双-2单3双", Odd: [18e3, 55440]}, {
                    Mode: "趣味-定单双-1单4双",
                    Odd: [3600, 55440]
                }, {Mode: "趣味-定单双-0单5双", Odd: [120, 55440]}, {
                    Mode: "趣味-猜中位-03/09",
                    Odd: [3360, 55440]
                }, {Mode: "趣味-猜中位-04/08", Odd: [7560, 55440]}, {
                    Mode: "趣味-猜中位-05/07",
                    Odd: [10800, 55440]
                }, {Mode: "趣味-猜中位-06", Odd: [12e3, 55440]}],
                FC3D: [{Mode: "大小单双-二星", Odd: [1, 4]}, {Mode: "一星-复式", Odd: [1, 10]}, {
                    Mode: "后二-直选",
                    Odd: [1, 100]
                }, {Mode: "后二-组选", Odd: [2, 100]}, {Mode: "前二-直选", Odd: [1, 100]}, {
                    Mode: "前二-组选",
                    Odd: [2, 100]
                }, {Mode: "三星-直选", Odd: [1, 1e3]}, {Mode: "三星-组选和值", Odd: [3, 1e3]}, {
                    Mode: "三星-组三",
                    Odd: [3, 1e3]
                }, {Mode: "三星-组六", Odd: [6, 1e3]}, {Mode: "三星-混合组选", Odd: [3, 1e3]}, {
                    Mode: "三星-组选包胆",
                    Odd: [3, 1e3]
                }, {Mode: "三星-组三单式", Odd: [3, 1e3]}, {Mode: "三星-组六单式", Odd: [6, 1e3]}, {
                    Mode: "三星-一码不定位",
                    Odd: [271, 1e3]
                }, {Mode: "三星-二码不定位", Odd: [54, 1e3]}],
                PL35: [{Mode: "大小单双-二星", Odd: [1, 4]}, {Mode: "一星-复式", Odd: [1, 10]}, {
                    Mode: "后二-直选",
                    Odd: [1, 100]
                }, {Mode: "后二-组选", Odd: [2, 100]}, {Mode: "前二-直选", Odd: [1, 100]}, {
                    Mode: "前二-组选",
                    Odd: [2, 100]
                }, {Mode: "三星-直选", Odd: [1, 1e3]}, {Mode: "三星-组选和值", Odd: [3, 1e3]}, {
                    Mode: "三星-组三",
                    Odd: [3, 1e3]
                }, {Mode: "三星-组六", Odd: [6, 1e3]}, {Mode: "三星-混合组选", Odd: [3, 1e3]}, {
                    Mode: "三星-组选包胆",
                    Odd: [3, 1e3]
                }, {Mode: "三星-一码不定位", Odd: [3, 1e3]}, {Mode: "三星-组六单式", Odd: [6, 1e3]}, {
                    Mode: "三星-一码不定位",
                    Odd: [271, 1e3]
                }, {Mode: "三星-二码不定位", Odd: [54, 1e3]}],
                KL8: [{Mode: "任选-任选一", Odd: [20, 80]}, {Mode: "任选-任选二", Odd: [190, 3160]}, {
                    Mode: "任选-任选三(中三)",
                    Odd: [1140, 82160]
                }, {Mode: "任选-任选三(中二)", Odd: [11400, 82160]}, {
                    Mode: "任选-任选四(中四)",
                    Odd: [4845, 1581580]
                }, {Mode: "任选-任选四(中三)", Odd: [68400, 1581580]}, {
                    Mode: "任选-任选四(中二)",
                    Odd: [336300, 1581580]
                }, {Mode: "任选-任选五(中五)", Odd: [15504, 24040016]}, {
                    Mode: "任选-任选五(中四)",
                    Odd: [290700, 24040016]
                }, {Mode: "任选-任选五(中三)", Odd: [2017800, 24040016]}, {
                    Mode: "任选-任选六(中六)",
                    Odd: [38760, 300500200]
                }, {Mode: "任选-任选六(中五)", Odd: [930240, 300500200]}, {
                    Mode: "任选-任选六(中四)",
                    Odd: [8575650, 300500200]
                }, {Mode: "任选-任选六(中三)", Odd: [39010800, 300500200]}, {
                    Mode: "任选-任选七(中七)",
                    Odd: [77520, 3176716400]
                }, {Mode: "任选-任选七(中六)", Odd: [2325600, 3176716400]}, {
                    Mode: "任选-任选七(中五)",
                    Odd: [27442080, 3176716400]
                }, {Mode: "任选-任选七(中四)", Odd: [165795900, 3176716400]}, {
                    Mode: "任选-任选七(中零)",
                    Odd: [386206920, 3176716400]
                }, {Mode: "趣味-上下盘(上下)", Odd: [140839388574146e4, 353531614221217e4]}, {
                    Mode: "趣味-上下盘(和)",
                    Odd: [0x9f8b9bf0a5b3e00, 353531614221217e4]
                }, {Mode: "趣味-奇偶盘(奇偶)", Odd: [140839388574146e4, 353531614221217e4]}, {
                    Mode: "趣味-奇偶盘(和)",
                    Odd: [0x9f8b9bf0a5b3e00, 353531614221217e4]
                }, {Mode: "趣味-和值大小单双", Odd: [1, 4]}],
                PK10: [{Mode: "定位胆-标准", Odd: [1, 10]}, {Mode: "前五-复式", Odd: [120, 3628800]}, {
                    Mode: "前五-单式",
                    Odd: [120, 3628800]
                }, {Mode: "前四-复式", Odd: [720, 3628800]}, {Mode: "前四-单式", Odd: [720, 3628800]}, {
                    Mode: "前三-复式",
                    Odd: [5040, 3628800]
                }, {Mode: "前三-单式", Odd: [5040, 3628800]}, {Mode: "前二-复式", Odd: [40320, 3628800]}, {
                    Mode: "前二-单式",
                    Odd: [40320, 3628800]
                }, {Mode: "前一-复式", Odd: [362880, 3628800]}]
            }, this.ListArr = {
                K3: {
                    Rebate: [7.5, 0],
                    List: [{Mode: "大/小/单/双", Odd: ["1.95", "1.80"]}, {
                        Mode: "和值3/18",
                        Odd: ["189.00", "172.80"]
                    }, {Mode: "和值4/17", Odd: ["63.00", "57.60"]}, {Mode: "和值5/16", Odd: ["31.50", "28.80"]}, {
                        Mode: "和值6/15",
                        Odd: ["18.90", "17.28"]
                    }, {Mode: "和值7/14", Odd: ["12.60", "11.52"]}, {Mode: "和值8/13", Odd: ["9.00", "8.228"]}, {
                        Mode: "和值9/12",
                        Odd: ["7.56", "6.912"]
                    }, {Mode: "和值10/11", Odd: ["7.00", "6.40"]}, {Mode: "三同号通选", Odd: ["31.50", "28.80"]}, {
                        Mode: "三同号单选",
                        Odd: ["189.00", "172.80"]
                    }, {Mode: "三不同号", Odd: ["31.50", "28.80"]}, {Mode: "三连号通选", Odd: ["7.87", "7.20"]}, {
                        Mode: "二同号复选",
                        Odd: ["12.60", "11.52"]
                    }, {Mode: "二同号单选", Odd: ["63.00", "57.60"]}, {Mode: "二不同号", Odd: ["6.30", "5.76"]}]
                },
                SSC: {Rebate: [8, 0], List: []},
                SYX5: {Rebate: [8, 0], List: []},
                FC3D: {Rebate: [8, 0], List: []},
                PL35: {Rebate: [8, 0], List: []},
                KL8: {Rebate: [8, 0], List: []},
                PK10: {Rebate: [8, 0], List: []}
            }, void this.setListDate(this.BetweenType))
        }, methods: {
            GETUrl: function (t) {
                this.BetweenType = t, this.isMinData = !1, router.push("/rebateDes#" + t), this.setListDate(t)
            }, ShowDom: function (t) {
                t != this.ArrObj.Data[this.ArrObj.Data.length - 1][0] && (t % 1 == 0 ? (this.aMax = t, this.aMin = t - 1, this.isMinData = !0) : (this.aMax = t, this.aMin = Math.floor(t), this.isMinData = !0))
            }, setMsg: function (t, e) {
                return e > 0 ? "SSC" == t ? "奖金" : "赔率" : ""
            }, setListDate: function (t) {
                this.reeData = this.ListArr[t];
                for (var e = 0; e < this.AgentRebate.length; e++) {
                    var a = this.AgentRebate[e].LotteryType;
                    if (a == t) {
                        var s = this.AgentRebate[e].Point, n = this.AgentRebate[e].MinPoint;
                        this.reeData.Rebate[0] = s, this.reeData.Rebate[1] = n
                    }
                }
                if ("K3" == t ? (this.setObj.Max = 7.5, this.setObj.Min = 0) : (this.setObj.Max = 8, this.setObj.Min = 0), this.OrData[t] && this.setPlayArr(this.OrData[t]), !this.reeData.List.length)return void(this.ArrObj = "");
                for (var r = this.ReMode().Mode, i = (this.ReMode().Data, []), o = this.Rebate(this.setObj.Max, this.setObj.Min), l = this.ReMode().Data, e = 0; e < o.length; e++) {
                    var c = [], u = o[e], d = 0;
                    for (c.push(o[e]); d < l.length; d++)c.push(l[d][e]);
                    u <= this.reeData.Rebate[0] && u >= this.reeData.Rebate[1] && i.push(c)
                }
                this.ArrObj = {Data: i, Mode: r}
            }, Rebate: function (t, e) {
                for (var a = [], s = 10 * (t - e), n = 0; n <= s; n++) {
                    var r = (10 * t - n) / 10;
                    a.push(r.toFixed(1))
                }
                return a
            }, SetOdd: function (t, e, a) {
                for (var s = this.Rebate(this.setObj.Max, this.setObj.Min).length - 1, n = [], r = (t - e) / s, i = s; i >= 0; i--) {
                    var o = r * i + Number(e);
                    a ? n.push(Number(Math.floor(1e3 * o) / 1e3).toFixed(3)) : n.push(Number(Math.floor(100 * o) / 100).toFixed(2))
                }
                return n
            }, ReMode: function () {
                var t = new Object;
                t.Mode = [], t.Data = [];
                for (var e = this.reeData.List, a = 0; a < e.length; a++) {
                    t.Mode.push(e[a].Mode);
                    var s = !1, n = e[a].Mode, r = n.substr(n.length - 2);
                    "三星" != r && "二星" != r && "/双" != r || (s = !0);
                    var i = this.SetOdd(e[a].Odd[0], e[a].Odd[1], s);
                    t.Data.push(i)
                }
                return t
            }, setPlayArr: function (t) {
                for (var e = [], a = 0, s = t, n = (this.Rebate(this.setObj.Max, this.setObj.Min), s.length); a < n; a++) {
                    var r = new Object;
                    r.Mode = s[a].Mode, r.Odd = [], r.Odd.push(s[a].Odd[1] / s[a].Odd[0] * .98 * 2, s[a].Odd[1] / s[a].Odd[0] * .9 * 2), e.push(r)
                }
                this.reeData.List = e
            }, MinList: function (t) {
                t % 1 !== 0 && t != this.ArrObj.Data[0][0] || (this.isMinData = !1)
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(26), d = s(u), v = a(9), m = s(v);
    e.default = {
        data: function () {
            return {
                ajaxData: {
                    Action: "GetAgentBetData",
                    BetweenDays: 0,
                    State: 1,
                    UserName: this.$route.query.username || 0,
                    LotteryCode: -1,
                    DataNum: 10,
                    Index: 0
                },
                TimeArr: [0, 1, 7],
                BackData: [],
                DataCount: null,
                TotalPage: 0,
                SearchName: this.$route.query.username || "",
                StorageObj: {},
                oldName: 0,
                UnFindUser: {}
            }
        },
        components: {UserSlide: o.default, page: c.default, RecordState: d.default, loading: m.default},
        methods: {
            SelectColor: function (t) {
                switch (t) {
                    case"已撤单":
                        return "#000";
                    case"未中奖":
                        return "#666";
                    case"等待开奖":
                        return "#666";
                    default:
                        return "#e4393c"
                }
            }, checkData: function () {
                var t = this.StorageObj[[this.ajaxData.LotteryCode, this.ajaxData.BetweenDays, this.ajaxData.State, this.ajaxData.Index, this.ajaxData.UserName].join("")];
                t ? (console.log("缓存"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.getData())
            }, saveData: function (t, e, a, s) {
                this.StorageObj[[t.LotteryCode, t.BetweenDays, t.State, t.Index, t.UserName].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, checkLength: function (t) {
                return !!(t && t.replace(/([^\x00-\xff])/g, "**").length > 12)
            }, showBetContent: function (t, e) {
                layer.open({title: t, content: e, btn: ["关闭"]})
            }, SearchByState: function (t, e) {
                "Time" === e ? this.ajaxData.BetweenDays = this.TimeArr[t] : this.ajaxData.State = t + 1, this.$refs.page.current = 1, this.ajaxData.Index = 0, this.checkData()
            }, SearchByLottery: function (t) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    LotteryCode: t,
                    Index: 0
                }), this.$refs.page.current = 1, this.checkData()
            }, SearchByName: function () {
                return this.oldName = this.ajaxData.UserName, this.UnFindUser[this.SearchName || 0] ? (layer.msgWarn(this.UnFindUser[this.SearchName]), void(this.SearchName = this.oldName || "")) : (this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    UserName: this.SearchName || 0,
                    Index: 0
                }), this.$refs.page.current = 1, void this.checkData())
            }, getData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    if (1 === a.Code) {
                        if (t.isDataNot = !1, e.UserName != t.ajaxData.UserName)return;
                        t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.saveData(e, a.BackData, t.DataCount, t.TotalPage), t.checkData()
                    } else layer.msgWarn(a.StrCode), t.UnFindUser[t.SearchName || 0] = a.StrCode, t.SearchName = t.oldName || "", t.ajaxData.UserName = t.oldName || 0, t.isDataNot = !1, t.$refs.page.current = 1, t.ajaxData.Index > 0 && (t.ajaxData.Index = 0, t.checkData())
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.checkData()
            }
        },
        created: function () {
            console.log("初始化"), this.checkData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        components: {tip: r.default}, data: function () {
            return {
                va: {InvitationCode: {}, UserName: {}, Password: {}, checkPassword: {}, ImgCode: {}},
                InvitationCode: "",
                NickName: "",
                UserName: "",
                Password: "",
                checkPassword: "",
                RegLimit: !0,
                ImgCode: "",
                YzmSrc: "",
                YqmReadOnly: !1,
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            RootApp.GetInitData(["DefaultPhotoList"], function (t) {
                a(function (e) {
                    e.NickName = t.DefaultPhotoList[Math.floor(25 * Math.random())].ImageName
                })
            })
        }, created: function () {
            var t = this, e = this.$route.query.id;
            if (e)this.InvitationCode = e, this.YqmReadOnly = !0, localStorage.setItem("InvitationCode", e); else {
                var a = localStorage.getItem("InvitationCode");
                a && (this.InvitationCode = a, this.YqmReadOnly = !0)
            }
            this.refreshYzm(), this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.register())
            }, this.addKeyUp()
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, register: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                this.delKeyUp();
                var a = {
                    Action: "Register",
                    InvitationCode: this.InvitationCode,
                    UserName: this.UserName,
                    Password: this.Password,
                    ImgCode: this.ImgCode
                }, s = this.RegLimit;
                if (!s)return layer.alert("请确认您是否年满18周岁");
                var n = this, r = {wait: "正在处理"};
                _fetch(a, r).then(function (e) {
                    1 === e.Code || 0 === e.Code ? (localStorage.setItem("InvitationCode", a.InvitationCode), layer.open({
                        shadeClose: !1,
                        className: "layerConfirm",
                        content: e.StrCode + "，是否立即登录?",
                        title: "温馨提示",
                        btn: ["登录", "取消"],
                        yes: function (t) {
                            RootApp.Logout(), layer.close(t);
                            var e = a;
                            e.Action = "Login", _fetch(e).then(function (t) {
                                1 === t.Code ? RootApp.Login(n.UserName, function () {
                                    router.push("/index")
                                }) : layer.msgWarn(t.StrCode)
                            })
                        },
                        no: function () {
                            n.UserName = "", n.Password = "", n.checkPassword = "", n.ImgCode = ""
                        }
                    })) : (e.Code === -2 && (t.InvitationCode = "", t.ImgCode = "", localStorage.removeItem("InvitationCode"), n.YqmReadOnly = !1), layer.msgWarn(e.StrCode), n.refreshYzm(), t.addKeyUp())
                })
            }, refreshYzm: function () {
                var t = this;
                _fetchT({Action: "GetImageCode"}).then(function (e) {
                    t.YzmSrc = "data:image/png;base64,R0lGODlhPAAWAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAA8ABYAAAj" + e
                })
            }, reset: function () {
                this.UserName = "", this.Password = "", this.checkPassword = "", this.ImgCode = "", this.$va.refreshValue("UserName", ""), this.$va.refreshValue("Password", ""), this.$va.refreshValue("checkPassword", ""), this.$va.refreshValue("ImgCode", "");
                for (var t in this.va)"InvitationCode" !== t && (this.va[t] = {});
                this.RegLimit = !1
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = {ResetPwd: "找回密码", ResetSafePwd: "找回安全密码", ResetMobile: "找回手机", ResetQuestion: "找回密保问题", ResetMail: "找回邮箱"};
    e.default = {
        data: function () {
            return {reUrl: "", Title: "密码", ResetSafePwd: "", ResetMobile: "", ResetQuestion: "", ResetMail: ""}
        }, beforeRouteEnter: function (t, e, s) {
            var n = ["UserSafeQuestions", "UserHasSafePwd", "UserMobile", "UserMail"];
            RootApp.GetInitData(n), t.meta.title = a[t.query.Q], t.query.Q || router.push("/index");
            var r = sessionStorage.getItem("isFind"), i = localStorage.getItem("UserName");
            s(function (e) {
                i || r || router.push("/login"), r && (t.meta.link = "/forgetPwd")
            })
        }, created: function () {
            var t = {ResetPwd: "密码", ResetSafePwd: "安全密码"}, e = this.$route.query.Q, s = this;
            e && (this.Title = t[e] || "密码"), s.ResetSafePwd = !!(1 * store.state.UserHasSafePwd), s.ResetMobile = !!store.state.UserMobile, s.ResetQuestion = !!store.state.UserSafeQuestions, s.ResetMail = !!store.state.UserMail, a[e] && (s.reUrl = e, "ResetPwd" != e && (s[e] = !1))
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(12), r = s(n), i = a(1), o = s(i);
    e.default = {
        data: function () {
            return {StarNum: 0, LevelText: 0, LastLogin: "", HasSafePwd: ""}
        }, beforeRouteEnter: function (t, e, a) {
            RootApp.GetInitData(["UserName"], function (t) {
                if (t.UserName) {
                    var e = ["UserHasSafePwd", "UserSafeQuestions", "UserMobile", "UserMail"], s = JSON.parse(sessionStorage.getItem("UserLastLoginInfo"));
                    s || e.push("UserLastLoginInfo"), RootApp.GetInitData(e, function (t) {
                        a(function (e) {
                            e.StarNum = 1, e.StarNum += 1 * t.UserHasSafePwd, e.StarNum += t.UserSafeQuestions ? 1 : 0, e.StarNum += t.UserMobile ? 1 : 0, e.StarNum += t.UserMail ? 1 : 0, e.HasSafePwd = 1 * t.UserHasSafePwd, s ? e.LastLogin = s : (sessionStorage.setItem("UserLastLoginInfo", (0, r.default)(t.UserLastLoginInfo[0])), e.LastLogin = t.UserLastLoginInfo[0]), e.LevelText = 5 == e.StarNum ? "极高" : 4 == e.StarNum ? "高" : 3 == e.StarNum ? "中" : 2 == e.StarNum ? "低" : "极低"
                        })
                    })
                } else state.turning = !1, router.push("/login")
            })
        }, components: {UserSlide: o.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(10);
    s(i);
    e.default = {
        data: function () {
            return {BackData: [], DataCount: null}
        }, components: {UserSlide: r.default}, beforeRouteEnter: function (t, e, a) {
            t.query.id || router.push("/notfound"), a()
        }, methods: {
            checkLength: function (t) {
                return !!(t && t.replace(/([^\x00-\xff])/g, "**").length > 12)
            }, showBetContent: function (t, e) {
                layer.open({title: t, content: e, btn: ["关闭"]})
            }, setNum: function (t) {
                return t.split("+")[0].split(",").slice(0, 20).join(",")
            }
        }, created: function () {
            var t = this;
            _fetch({Action: "GetChaseDetail", ID: this.$route.query.id}).then(function (e) {
                1 === e.Code ? (t.DataCount = e.DataCount, t.BackData = e.BackData) : layer.msgWarn(e.StrCode)
            })
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(7), r = s(n), i = a(1), o = s(i), l = a(10), c = s(l), u = a(26), d = s(u), v = a(9), m = s(v);
    e.default = {
        data: function () {
            return {
                DataCount: null,
                TotalPage: 0,
                ajaxData: {Action: "GetChaseData", BetweenDays: 0, State: 1, LotteryCode: -1, DataNum: 10, Index: 0},
                BackData: [],
                StorageObj: {},
                TimeArr: [0, 1, 7],
                isDataNot: !0
            }
        }, components: {UserSlide: o.default, page: c.default, RecordState: d.default, loading: m.default}, methods: {
            SearchByState: function (t, e) {
                console.log("SearchByState"), "Time" === e ? this.ajaxData.BetweenDays = this.TimeArr[t] : this.ajaxData.State = t + 1,
                    this.$refs.page.current = 1, this.ajaxData.Index = 0, this.CheckData()
            }, SearchByLottery: function (t) {
                this.ajaxData = (0, r.default)({}, this.ajaxData, {
                    LotteryCode: t,
                    Index: 0
                }), this.$refs.page.current = 1, this.CheckData()
            }, CheckData: function () {
                var t = this.StorageObj[[this.ajaxData.LotteryCode, this.ajaxData.BetweenDays, this.ajaxData.State, this.ajaxData.Index].join("")];
                t ? (console.log("缓存"), this.BackData = t.BackData, this.DataCount = t.DataCount, this.TotalPage = t.TotalPage) : (console.log("无"), t = "", this.GetData())
            }, SaveData: function (t, e, a, s) {
                this.StorageObj[[t.LotteryCode, t.BetweenDays, t.State, t.Index].join("")] = {
                    BackData: e,
                    DataCount: a,
                    TotalPage: s
                }
            }, GetData: function () {
                var t = this, e = (0, r.default)({}, this.ajaxData);
                this.isDataNot = !0, _fetch(this.ajaxData).then(function (a) {
                    1 === a.Code ? (t.isDataNot = !1, t.BackData = a.BackData, 0 === t.ajaxData.Index && (t.DataCount = a.DataCount, t.TotalPage = Math.ceil(a.DataCount / t.ajaxData.DataNum)), t.SaveData(e, a.BackData, t.DataCount, t.TotalPage), t.CheckData()) : layer.msgWarn(a.StrCode)
                })
            }, doSearch: function (t) {
                this.ajaxData.Index = t - 1, this.CheckData()
            }
        }, created: function () {
            this.CheckData()
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(36), o = s(i), l = a(1), c = s(l), u = a(316), d = s(u), v = a(2), m = s(v);
    e.default = {
        data: function () {
            return {
                va: {
                    Bank: {isPass: !1, message: "请选择开户银行"},
                    City: {isPass: !1, message: "请选择城市"},
                    RealName: {},
                    BankNum: {},
                    checkBankNum: {},
                    SafePassword: {}
                },
                Title: "绑定",
                Qort: "",
                QidA: "",
                TextA: "请选择银行",
                ShowA: !1,
                Banklist: {
                    1: "工商银行",
                    2: "建设银行",
                    3: "农业银行",
                    4: "民生银行",
                    5: "招商银行",
                    6: "交通银行",
                    7: "中国银行",
                    8: "邮政储蓄",
                    9: "中信银行",
                    10: "兴业银行",
                    11: "华夏银行",
                    12: "浦发银行",
                    13: "广发银行",
                    14: "平安银行",
                    15: "光大银行",
                    17: "农商银行"
                },
                City: "请选择城市",
                CityShow: !1,
                RealName: "",
                SafePassword: "",
                BankNum: "",
                checkBankNum: "",
                nextUrl: "",
                keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, watch: {
            QidA: function () {
                this.va.Bank.isPass = !this.QidA
            }, City: function () {
                this.va.City.isPass = 2 != this.City.split("-").length
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = localStorage.getItem("UserName");
            s || router.push("/login");
            var n = t.query.Q, r = "withdraw" == n ? "/withdraw" : "/manageBankcard", i = "withdraw" == n ? "add" : n || "add", o = {
                Action: "GetCardDetail",
                BankCardID: i
            };
            if ("add" !== i && "bindCard" != n)t.meta.title = "修改银行卡", _fetch(o).then(function (t) {
                a(function (e) {
                    e.Title = "修改";
                    var a = t.BackData;
                    1 == t.Code ? (e.City = a.Address_P + "-" + a.Address_C, e.QidA = e.getBandId(a.BankName), e.TextA = a.BankName, e.BankNum = a.CardNum, e.RealName = a.RealName, e.$va.refreshValue("RealName", a.RealName), e.$va.refreshValue("BankNum", a.CardNum), e.Qort = i, e.nextUrl = r) : layer.url(t.StrCode, "/securityCenter")
                })
            }); else {
                var l = ["UserHasSafePwd"];
                RootApp.GetInitData(l, function (e) {
                    if (e.UserHasSafePwd) {
                        var s = ["UserBankCardList"];
                        t.meta.title = "绑定银行卡", RootApp.AjaxGetInitData(s, function (t) {
                            a(function (t) {
                                t.Title = "绑定", t.getCardlist(), t.Qort = "add", t.nextUrl = r
                            })
                        })
                    } else layer.open({
                        shadeClose: !1,
                        className: "layerConfirm",
                        content: "您还未设置安全密码，是否先去设置安全密码?",
                        title: "温馨提示",
                        btn: ["是", "否"],
                        yes: function (t) {
                            layer.close(t), router.push("/setSafePwd")
                        },
                        no: function () {
                            e.turning = !1
                        }
                    })
                })
            }
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, selShow: function (t) {
                this.ShowA = !1, this[t] = !0
            }, close: function (t, e, a) {
                this["Text" + a] = t, this["Qid" + a] = e, this["Show" + a] = !1
            }, vaSubmit: function () {
                var t = this, e = this, a = e.City.split("-");
                if (!e.QidA)return e.va.Bank.isPass = !0;
                if (e.va.Bank.isPass = !1, 2 != a.length)return e.va.City.isPass = !0;
                e.va.City.isPass = !1;
                var s = this.$va.checkAll();
                if (s)return void layer.msgWarn(s);
                var n = {
                    Action: "SetBankCard",
                    Qort: this.Qort,
                    RealName: this.RealName,
                    BankNum: this.BankNum,
                    SafePassword: this.SafePassword,
                    Address_P: a[0],
                    Address_C: a[1],
                    BankId: this.QidA,
                    BankName: this.TextA
                };
                this.delKeyUp();
                var r = {wait: "正在处理"};
                _fetch(n, r).then(function (a) {
                    1 == a.Code ? (RootApp.AjaxGetInitData(["UserBankCardList", "UserFirstCardInfo"]), "/withdraw" == e.nextUrl ? layer.open({
                        shadeClose: !1,
                        className: "layerConfirm",
                        content: a.StrCode + "<br>是否立即去提现?",
                        title: "温馨提示",
                        btn: ["是", "否"],
                        no: function (t) {
                            router.push("/manageBankcard")
                        },
                        yes: function (t) {
                            router.push(e.nextUrl)
                        }
                    }) : layer.url(a.StrCode, "/manageBankcard")) : (layer.msgWarn(a.StrCode), t.addKeyUp())
                })
            }, getBandId: function (t) {
                for (var e in this.Banklist)if (this.Banklist[e] == t)return e
            }, isLock: function (t) {
                var e = !1, a = !0, s = !1, n = void 0;
                try {
                    for (var i, o = (0, r.default)(t); !(a = (i = o.next()).done); a = !0) {
                        var l = i.value;
                        if (l.isLock)return e = !0
                    }
                } catch (t) {
                    s = !0, n = t
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (s)throw n
                    }
                }
                return e
            }, getCardlist: function () {
                if (state.UserBankCardList) {
                    var t = state.UserBankCardList.length || 0;
                    t >= 5 ? layer.url("您已绑定5张银行卡，无法绑定更多的卡", "/manageBankcard") : this.isLock(state.UserBankCardList) && (state.UserVerify && "BankCard," === state.UserVerify || router.push("/verifyBankcard"))
                }
            }
        }, components: {UserSlide: c.default, SelectBox: o.default, CityBox: d.default, tip: m.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        data: function () {
            return {
                va: {Mail: {}, MailCode: {}},
                Mail: "",
                MailCode: "",
                reTime: "发送验证码",
                noDo: !0,
                toMsg: !0,
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            n || s || router.push("/login"), a()
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, components: {tip: r.default}, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = {
                    Action: "VerifyMail",
                    Mail: this.Mail,
                    MailCode: this.MailCode
                }, s = sessionStorage.getItem("isFind");
                s && (a.Action = "VerifyMailForget"), a.Qort = "Set", this.delKeyUp();
                var n = {wait: "正在处理"};
                _fetch(a, n).then(function (e) {
                    if (1 === e.Code) {
                        var a = t.Mail.split("@"), s = a[0], n = s.substr(0, 2) + "******" + s.substr(-4, 4);
                        RootApp.SaveInitData({UserMail: n + "@" + a[1]}), layer.url(e.StrCode, "/securityCenter")
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }, postMsg: function () {
                var t = this.$va.setVmResult("Mail");
                if (!t.isPass)return void layer.msgWarn(t.message);
                var e = this;
                if (e.toMsg) {
                    var a = {Action: "SendMailCode", Mail: e.Mail};
                    this.toMsg = !1, this.noDo = !1;
                    var s = {wait: "正在处理"};
                    _fetch(a, s).then(function (t) {
                        return 1 === t.Code ? (e.reTimex(), void layer.msg("我们已向您的邮箱发送了验证码！<br/>如未收到，请检查垃圾邮箱。")) : void layer.msgWarn(t.StrCode)
                    })
                }
            }, reTimex: function () {
                function t() {
                    return a--, a <= 0 ? (e.reTime = "发送验证码", clearTimeout(s), void(e.toMsg = !0)) : (e.reTime = "重新发送(" + a + "s)", void(s = setTimeout(t, 1e3)))
                }

                var e = this, a = 60, s = void 0;
                t()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        data: function () {
            return {
                va: {Mobile: {}, SmsCode: {}},
                Mobile: "",
                SmsCode: "",
                reTime: "发送验证码",
                noDo: !0,
                toMsg: !0,
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            n || s || router.push("/login"), a()
        }, components: {tip: r.default}, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = {
                    Action: "VerifyMobile",
                    Mobile: this.Mobile,
                    SmsCode: this.SmsCode
                }, s = sessionStorage.getItem("isFind");
                s && (a.Action = "VerifyMobileForget"), a.Qort = "Set", this.delKeyUp();
                var n = {wait: "正在处理"};
                _fetch(a, n).then(function (e) {
                    if (1 === e.Code) {
                        var a = t.Mobile;
                        RootApp.SaveInitData({UserMobile: a.substr(0, 2) + "******" + a.substr(-2, 2)}), layer.url(e.StrCode, "/securityCenter")
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }, postMsg: function () {
                var t = this.$va.setVmResult("Mobile");
                if (!t.isPass)return void layer.msgWarn(t.message);
                var e = this, a = {Action: "SendMobileCode", Mobile: this.Mobile};
                if (e.toMsg) {
                    this.toMsg = !1, this.noDo = !1;
                    var s = {wait: "正在处理"};
                    _fetch(a, s).then(function (t) {
                        return 1 === t.Code ? (e.reTimex(), void layer.msgWarn(t.StrCode)) : void layer.msgWarn(t.StrCode)
                    })
                }
            }, reTimex: function () {
                function t() {
                    return a--, a <= 0 ? (e.reTime = "发送验证码", clearTimeout(s), void(e.toMsg = !0)) : (e.reTime = "重新发送(" + a + "s)", void(s = setTimeout(t, 1e3)))
                }

                var e = this, a = 60, s = void 0;
                t()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n), i = {Mail: "密保邮箱", Mobile: "密保手机", Question: "密保问题", SafePwd: "安全密码"};
    e.default = {
        data: function () {
            return {
                va: {Password: {}, checkPassword: {}},
                Password: "",
                checkPassword: "",
                VerifyShow: !1,
                Verify: "密码",
                keyupHandler: function () {
                }
            }
        }, components: {tip: r.default}, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            n || s || router.push("/login"), a(function (t) {
                var e = RootApp.$route.query.F || "";
                e ? (t.VerifyShow = !0, t.Verify = i[e]) : t.VerifyShow = !1
            })
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = {Action: "SetPwd", Password: this.Password}, s = sessionStorage.getItem("isFind");
                s && (a.Action = "SetPassForget"), this.delKeyUp();
                var n = {wait: "正在处理"};
                _fetch(a, n).then(function (e) {
                    if (1 === e.Code) {
                        if (s)return sessionStorage.removeItem("isFind"), void layer.url(e.StrCode, "/login");
                        layer.url(e.StrCode, "/securityCenter")
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(36), o = s(i), l = a(2), c = s(l), u = ["ShowA", "ShowB", "ShowC"];
    e.default = {
        data: function () {
            return {
                va: {answer1: {}, answer2: {}, answer3: {}},
                Arr: "",
                QidA: "",
                QidB: "",
                QidC: "",
                ShowA: !1,
                ShowB: !1,
                ShowC: !1,
                answer1: "",
                answer2: "",
                answer3: "",
                TextA: "请选择密保问题",
                TextB: "请选择密保问题",
                TextC: "请选择密保问题",
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            n || s || router.push("/login"), a()
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp();
            var e = ["SafeQuestionList"], a = this;
            RootApp.GetInitData(e, function (e) {
                a.Arr = t.setDate(e.SafeQuestionList)
            }), document.addEventListener("click", function () {
                t.AllOut()
            }, !0)
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, close: function (t, e, a) {
                this["Text" + a] = t, this["Qid" + a] = e, this["Show" + a] = !1
            }, selShow: function (t) {
                this[t] = !this[t];
                var e = u.slice(0);
                for (var a in e)e[a] != t && (this[e[a]] = !1)
            }, AllOut: function () {
                this.ShowA = !1, this.ShowB = !1, this.ShowC = !1
            }, vaSubmit: function () {
                var t = this, e = {
                    Action: "SetQuestion",
                    Answer1: this.answer1,
                    Answer2: this.answer2,
                    Answer3: this.answer3
                }, a = this.OddGet(), s = "请选择密保问题";
                if (this.TextA == s || this.TextB == s || this.TextC == s)return layer.msgWarn("请选择密保问题");
                if (3 != a)return layer.msgWarn("请勿选择相同问题");
                var n = this.$va.checkAll();
                if (n)return void layer.msgWarn(n);
                var r = sessionStorage.getItem("isFind");
                r && (e.Action = "SetQuestionForget"), e.QuestionID1 = this.QidA, e.QuestionID2 = this.QidB, e.QuestionID3 = this.QidC, e.Question1 = this.TextA, e.Question2 = this.TextB, e.Question3 = this.TextC, this.delKeyUp();
                var i = {wait: "正在处理"};
                _fetch(e, i).then(function (e) {
                    1 === e.Code ? (t.QidA = "", t.QidB = "", t.QidC = "", t.answer1 = "", t.answer2 = "", t.answer3 = "", t.TextA = "请选择密保问题", t.TextB = "请选择密保问题", t.TextC = "请选择密保问题", RootApp.AjaxGetInitData(["UserSafeQuestions"], function () {
                        layer.url(e.StrCode, "/securityCenter")
                    })) : (layer.msgWarn(e.StrCode), t.addKeyUp())
                })
            }, OddGet: function () {
                var t = [], e = [], a = 0;
                for (t.push(this.TextA, this.TextB, this.TextC); a < t.length; a++)e.indexOf(t[a]) == -1 && e.push(t[a]);
                return e.length
            }, setDate: function (t) {
                var e = {}, a = !0, s = !1, n = void 0;
                try {
                    for (var i, o = (0, r.default)(t); !(a = (i = o.next()).done); a = !0) {
                        var l = i.value;
                        e[l.Question_Id] = l.Question
                    }
                } catch (t) {
                    s = !0, n = t
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (s)throw n
                    }
                }
                return e
            }
        }, components: {SelectBox: o.default, tip: c.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n), i = {Mail: "密保邮箱", Mobile: "密保手机", Question: "密保问题"};
    e.default = {
        data: function () {
            return {
                va: {Password: {}, checkPassword: {}},
                Password: "",
                checkPassword: "",
                Verify: "安全密码",
                VerifyShow: !1,
                isOrUrl: "",
                keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            n || s || router.push("/login"), a(function (t) {
                t.isOrUrl = RootApp.$route.query.Q || "";
                var e = RootApp.$route.query.F || "";
                e ? (t.Verify = i[e], t.VerifyShow = !0) : t.VerifyShow = !1
            })
        }, components: {tip: r.default}, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = this, s = {
                    Action: "SetSafePass",
                    Password: this.Password
                }, n = sessionStorage.getItem("isFind");
                n && (s.Action = "SetSafePassForget"), this.delKeyUp();
                var r = {wait: "正在处理"};
                _fetch(s, r).then(function (e) {
                    if (1 === e.Code)switch (a.isOrUrl) {
                        case"bindCard":
                        case"withdraw":
                            layer.open({
                                shadeClose: !1,
                                className: "layerConfirm",
                                content: "安全密码已设置成功,是否立即绑定银行卡",
                                title: "温馨提示",
                                btn: ["是", "否"],
                                yes: function (t) {
                                    layer.close(t), a.upPwd(function () {
                                        router.push("/setBankcard?Q=" + a.isOrUrl)
                                    })
                                },
                                no: function (t) {
                                    layer.close(t), a.upPwd(function () {
                                        router.push("/securityCenter")
                                    })
                                }
                            });
                            break;
                        default:
                            a.upPwd(function () {
                                layer.url(e.StrCode, "/securityCenter")
                            })
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }, upPwd: function (t) {
                RootApp.SaveInitData({UserHasSafePwd: 1}), t()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(9), r = s(n);
    e.default = {
        data: function () {
            return {
                headTitle: "",
                TypeCode: "",
                Guide: !0,
                Missing: !0,
                trend: !0,
                isChart: !1,
                chartBox: !0,
                CodeClass: "",
                ArrData: "",
                actionObj: {LotteryCode: 1e3, NumPeriods: 30, Type: "", Action: "GetChart"},
                weisu5x: ["万位", "千位", "百位", "十位", "个位", "号码分布"],
                weisu4x: ["千位", "百位", "十位", "个位", "号码分布"],
                weisu5XZH: {"号码分布": 12, "号码跨度": 12, "大小比": 14, "单双比": 14, "质合比": 14, "和值": 3},
                weisuQ3Arr: ["万位", "千位", "百位", "号码分布", "大小形态", "单双形态", "质合形态", "012形态", "组三", "组六", "豹子", "跨度", "直选和值", "和值尾数"],
                weisuQ2Arr: ["万位", "千位", "对子", "号码分布", "跨度走势", "和值"],
                weisu11X5: ["第一位", "第二位", "第三位", "第四位", "第五位", "号码分布", "单双比", "中位数"],
                weisuK3: {"号码走势": "8", "和值": "18", "和值组合形态": "12", "号码形态": "6"},
                weisuKL8: ["大小", "单双", "奇偶", "和值"],
                weisuPK10: ["冠军分布", "冠军", "冠军", "冠军", "冠军", "冠军"],
                keyPK10: ["Ji", "Ou", "Da", "Xiao", "Zhi", "He", "_0", "_1", "_2", "Sheng", "Ping", "Jiang"],
                key11X5: ["One", "Two", "Three", "Four", "Five", "Fen"],
                keyC5C4: ["Wan", "Qian", "Bai", "Shi", "Ge", "Fen"],
                key5XZH: ["DaXiaoBi", "DanShuangBi", "ZhiHeBi"],
                keyK3: ["XiaoQi", "XiaoOu", "DaQi", "DaOu"],
                ChamPion: ["奇", "偶", "大", "小", "质", "合", "0", "1", "2", "升", "平", "降"],
                HMZS: [1, 2, 3, 4, 5, 6],
                HEZHI: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                HZZHXT: ["小奇", "小偶", "大奇", "大偶"],
                HMXT: ["三同号", "三不同号", "三连号", "二同号(复)", "二同号(单)", "二不同号"],
                numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                bigSmall: ["5:0", "4:1", "3:2", "2:3", "1:4", "0:5"]
            }
        }, created: function () {
            this.actionObj.LotteryCode = this.$route.params.ID, this.HeadSet(this.$route.params.ID), this.getData()
        }, mounted: function () {
            var t = this;
            this.$nextTick(function () {
                t.nextFun()
            }), window.onresize = function () {
                t.nextFun()
            }
        }, methods: {
            getData: function () {
                var t = this;
                this.ArrData = "", _fetch(this.actionObj).then(function (e) {
                    1 == e.Code ? (t.ArrData = e.BackData, t.$nextTick(function () {
                        t.ArrData && t.nextFun()
                    })) : (0 == e.Code && router.push("/login"), layer.msgWarn(e.StrCode))
                })
            }, chartBoxfun: function () {
                var t = this;
                this.chartBox = !this.chartBox, this.$nextTick(function () {
                    t.nextFun()
                })
            }, nextFun: function () {
                this.ArrData && this.isChart && this.getListNum()
            }, getListNum: function () {
                var t = document.getElementById("J-chart-content"), e = document.getElementById("J-chart-canvas");
                this.clearChart();
                for (var a = t.querySelectorAll("tr").length, s = t.querySelectorAll("tr")[0].querySelectorAll(".openNo").length, n = 0; n < s; n++)for (var r = 0; r < a - 1; r++) {
                    var i = t.querySelectorAll("tr")[r].querySelectorAll(".openNo")[n], o = t.querySelectorAll("tr")[r + 1].querySelectorAll(".openNo")[n];
                    this.setChartLine(i, o, e)
                }
            }, clearChart: function () {
                document.getElementById("J-chart-canvas").innerHTML = ""
            }, setChartLine: function (t, e, a) {
                var s = Math.abs(t.offsetLeft - e.offsetLeft);
                0 == s && (s = 2);
                var n = Math.abs(t.offsetTop - e.offsetTop), r = "canvas_" + parseInt(1e3 * Math.random()) + "_" + parseInt(1500 * Math.random()), i = document.createElement("canvas");
                i.id = r, i.width = s, i.height = n, i.style.position = "absolute", a.appendChild(i);
                var o = t.offsetLeft < e.offsetLeft ? t.offsetLeft : e.offsetLeft, l = t.offsetTop < e.offsetTop ? t.offsetTop : e.offsetTop, c = e.clientWidth / 2, u = document.getElementById(r);
                u.style.left = o + c - 1 + "px", u.style.top = l + c - 2 + "px";
                var d = u.getContext("2d"), v = "";
                v = t.offsetLeft > e.offsetLeft ? this.mathNum(s, 0, 0, n, 7.5) : this.mathNum(0, 0, s, n, 7.5), d.beginPath(), d.moveTo(v[0], v[1]), d.lineTo(v[2], v[3]), d.lineWidth = 1.5, d.strokeStyle = "red", d.fill(), d.stroke(), d.closePath()
            }, mathNum: function (t, e, a, s, n) {
                var r = t - a, i = e - s, o = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))), l = Math.round(r * n / o), c = Math.round(i * n / o);
                return [a + l, s + c, t - l, e - c]
            }, CodeSet: function (t) {
                this.TypeCode != t && (this.TypeCode = t, this.actionObj.NumPeriods = "30", this.clearChart(), this.ActionSet(t), this.getData())
            }, NumSet: function (t) {
                this.actionObj.NumPeriods != t && (this.actionObj.NumPeriods = t, this.clearChart(), this.getData())
            }, HeadSet: function (t) {
                switch (t) {
                    case"1100":
                    case"1101":
                    case"1102":
                    case"1103":
                        this.headTitle = "11选五", this.ActionSet("11X5"), this.CodeClass = {"11X5": "基本走势"};
                        break;
                    case"1201":
                        this.headTitle = "福彩3D", this.ActionSet("FC3D"), this.CodeClass = {FC3D: "基本走势"};
                        break;
                    case"1202":
                        this.headTitle = "排列3/5", this.ActionSet("SSC5"), this.CodeClass = {
                            SSC5: "基本走势",
                            SSCH2: "P5后二",
                            SSCQ3: "P3基本",
                            SSCQ2: "P3前二",
                            P3H2: "P3后二"
                        };
                        break;
                    case"1401":
                    case"1402":
                    case"1403":
                    case"1404":
                    case"1405":
                    case"1406":
                    case"1407":
                    case"1408":
                    case"1409":
                    case"1410":
                    case"1411":
                        this.headTitle = "快三", this.ActionSet("K3"), this.CodeClass = {K3: "基本走势"};
                        break;
                    case"1302":
                        this.headTitle = "北京快乐8", this.ActionSet("BJKL8"), this.CodeClass = {BJKL8: "基本走势"};
                        break;
                    case"1303":
                        this.headTitle = "北京pk10", this.ActionSet("BJPK10"), this.CodeClass = {BJPK10: "基本走势"};
                        break;
                    case"1000":
                    case"1001":
                    case"1003":
                    case"1008":
                        this.headTitle = "时时彩", this.ActionSet("SSC5"), this.CodeClass = {
                            SSC5: "五星",
                            SSC5XZH: "五星综合",
                            SSC4: "四星",
                            SSCQ3: "前三",
                            SSCZ3: "中三",
                            SSCH3: "后三",
                            SSCQ2: "前二",
                            SSCH2: "后二"
                        };
                        break;
                    default:
                        router.go(-1)
                }
            }, ActionSet: function (t) {
                switch (this.TypeCode = t, t) {
                    case"SSC5":
                        this.actionObj.Type = "Ssc5X", this.isChart = !0;
                        break;
                    case"SSC5XZH":
                        this.actionObj.Type = "Ssc5XZH", this.isChart = !1;
                        break;
                    case"SSC4":
                        this.actionObj.Type = "Ssc4X", this.isChart = !0;
                        break;
                    case"SSCQ3":
                        this.actionObj.Type = "SscQ3", this.weisuQ3Arr = ["万位", "千位", "百位", "号码分布", "大小形态", "单双形态", "质合形态", "012形态", "组三", "组六", "豹子", "跨度", "直选和值", "和值尾数"], this.isChart = !0;
                        break;
                    case"SSCZ3":
                        this.actionObj.Type = "SscZ3", this.weisuQ3Arr = ["千位", "百位", "十位", "号码分布", "大小形态", "单双形态", "质合形态", "012形态", "组三", "组六", "豹子", "跨度", "直选和值", "和值尾数"], this.isChart = !0;
                        break;
                    case"SSCH3":
                        this.actionObj.Type = "SscH3", this.weisuQ3Arr = ["百位", "十位", "个位", "号码分布", "大小形态", "单双形态", "质合形态", "012形态", "组三", "组六", "豹子", "跨度", "直选和值", "和值尾数"], this.isChart = !0;
                        break;
                    case"SSCQ2":
                        this.actionObj.Type = "SscQ2", this.weisuQ2Arr = ["万位", "千位", "对子", "号码分布", "跨度走势", "和值"], this.isChart = !0;
                        break;
                    case"SSCH2":
                        this.actionObj.Type = "SscH2", this.weisuQ2Arr = ["十位", "个位", "对子", "号码分布", "跨度走势", "和值"], this.isChart = !0;
                        break;
                    case"P3H2":
                        this.actionObj.Type = "P3H2", this.weisuQ2Arr = ["千位", "百位", "对子", "号码分布", "跨度走势", "和值"], this.isChart = !0;
                        break;
                    case"11X5":
                        this.actionObj.Type = "11X5", this.isChart = !0;
                        break;
                    case"FC3D":
                        this.actionObj.Type = "FuCai3D", this.weisuQ3Arr = ["百位", "十位", "个位", "号码分布", "大小形态", "单双形态", "质合形态", "012形态", "组三", "组六", "豹子", "跨度", "直选和值", "和值尾数"], this.isChart = !0;
                        break;
                    case"BJKL8":
                        this.actionObj.Type = "BJKL8", this.isChart = !1;
                        break;
                    case"K3":
                        this.actionObj.Type = "K3", this.isChart = !1;
                        break;
                    case"BJPK10":
                        this.actionObj.Type = "BJPK10", this.isChart = !1
                }
            }, setPows: function (t, e) {
                var a = e.split(","), s = [];
                for (var n in a)a[n] == t && s.push(a[n]);
                return s.length
            }, getHeZhi: function (t) {
                var e = t.split(",");
                return e.reduce(function (t, e) {
                    return 1 * t + 1 * e
                })
            }
        }, beforeRouteEnter: function (t, e, a) {
            state.HeadFootShow = !1, a()
        }, beforeRouteLeave: function (t, e, a) {
            state.HeadFootShow = !0, a()
        }, components: {loading: r.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(2), o = s(i);
    e.default = {
        data: function () {
            return {
                va: {BankNum: {}, RealName: {}}, BankNum: "", RealName: "", keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["UserFirstCardInfo"];
            RootApp.AjaxGetInitData(s, function (t) {
                a()
            })
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = {Action: "VerifyBankCard", BankNum: this.BankNum, RealName: this.RealName};
                this.delKeyUp();
                var s = {wait: "正在处理"};
                _fetch(a, s).then(function (e) {
                    1 == e.Code ? layer.url(e.StrCode, "/setBankcard") : (layer.msgWarn(e.StrCode), t.addKeyUp())
                })
            }
        }, components: {UserSlide: r.default, tip: o.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        data: function () {
            return {
                va: {MailCode: {}},
                Mail: "",
                MailCode: "",
                reTime: "发送验证码",
                nTitle: "绑定密保邮箱",
                FindShow: !1,
                noDo: !0,
                toMsg: !0,
                nextUrl: "",
                keyupHandler: function () {
                }
            }
        }, components: {tip: r.default}, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            a(function (e) {
                n || s || router.push("/login"), s && (t.meta.link = "/resetWay?Q=ResetPwd", e.FindShow = !0)
            })
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp();
            var e = {ResetPwd: "设置密码", ResetSafePwd: "设置安全密码"}, a = this.$route.query.Q;
            a && (this.nextUrl = a.substr(2) + "?Q=" + a + "&F=Mail", this.nTitle = e[a]);
            var s = this, n = ["UserMail"];
            RootApp.GetInitData(n, function (t) {
                s.Mail = t.UserMail
            })
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = this, s = {
                    Action: "VerifyMail",
                    Mail: 0,
                    MailCode: this.MailCode
                }, n = sessionStorage.getItem("isFind");
                n && (s.Action = "VerifyMailForget"), s.Qort = "Verify", this.delKeyUp();
                var r = {wait: "正在处理"};
                _fetch(s, r).then(function (e) {
                    if (1 === e.Code) {
                        var s = a.nextUrl, n = s ? "/" + s : "/setMail";
                        layer.url(e.StrCode, n)
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }, postMsg: function () {
                var t = this;
                if (t.toMsg) {
                    this.toMsg = !1, this.noDo = !1;
                    var e = {Action: "SendMailCode", Mail: 0}, a = {wait: "正在处理"};
                    _fetch(e, a).then(function (e) {
                        1 === e.Code ? (t.reTimex(), layer.msgWarn("我们已向您的邮箱发送了验证码！<br/>如未收到，请检查垃圾邮箱。")) : layer.msgWarn(e.StrCode)
                    })
                }
            }, reTimex: function () {
                function t() {
                    return a--, a <= 0 ? (e.reTime = "发送验证码", clearTimeout(s), void(e.toMsg = !0)) : (e.reTime = "重新发送(" + a + "s)", void(s = setTimeout(t, 1e3)))
                }

                var e = this, a = 60, s = void 0;
                t()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        data: function () {
            return {
                va: {SmsCode: {}},
                Mobile: "",
                SmsCode: "",
                reTime: "发送验证码",
                nTitle: "绑定密保手机",
                FindShow: !1,
                noDo: !0,
                toMsg: !0,
                nextUrl: "",
                keyupHandler: function () {
                }
            }
        }, components: {tip: r.default}, beforeDestroy: function () {
            this.delKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            a(function (e) {
                n || s || router.push("/login"), s && (t.meta.link = "/resetWay?Q=ResetPwd", e.FindShow = !0)
            })
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp();
            var e = {ResetPwd: "设置密码", ResetSafePwd: "设置安全密码"}, a = this.$route.query.Q;
            a && (this.nextUrl = a.substr(2) + "?Q=" + a + "&F=Mobile", this.nTitle = e[a]);
            var s = this, n = ["UserMobile"];
            RootApp.GetInitData(n, function (t) {
                s.Mobile = t.UserMobile
            })
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this;
                if (!this.Mobile)return void layer.msgWarn("绑定手机号未获取");
                var e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = this, s = {
                    Action: "VerifyMobile",
                    Mobile: 0,
                    SmsCode: this.SmsCode
                }, n = sessionStorage.getItem("isFind");
                n && (s.Action = "VerifyMobileForget"), s.Qort = "Verify", this.delKeyUp();
                var r = {wait: "正在处理"};
                _fetch(s, r).then(function (e) {
                    if (1 === e.Code) {
                        var s = a.nextUrl, n = s ? "/" + s : "/setMobile";
                        layer.url(e.StrCode, n)
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }, postMsg: function () {
                var t = this;
                if (t.toMsg) {
                    this.toMsg = !1, this.noDo = !1;
                    var e = {Action: "SendMobileCode", Mobile: 0}, a = {wait: "正在处理"};
                    _fetch(e, a).then(function (e) {
                        return 1 === e.Code ? (t.reTimex(), void layer.msgWarn(e.StrCode)) : void layer.msgWarn(e.StrCode)
                    })
                }
            }, reTimex: function () {
                function t() {
                    return a--, a <= 0 ? (e.reTime = "发送验证码", clearTimeout(s), void(e.toMsg = !0)) : (e.reTime = "重新发送(" + a + "s)", void(s = setTimeout(t, 1e3)))
                }

                var e = this, a = 60, s = void 0;
                t()
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        data: function () {
            return {
                va: {Password: {}}, Password: "", keyupHandler: function () {
                }
            }
        }, components: {tip: r.default}, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp();
            var e = sessionStorage.getItem("isFind"), a = localStorage.getItem("UserName");
            a || e || router.push("/login")
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = {Action: "VerifyPwd", Password: this.Password}, s = sessionStorage.getItem("isFind");
                s && (a.Action = "verifyPassForget"), this.delKeyUp();
                var n = {wait: "正在处理"};
                _fetch(a, n).then(function (e) {
                    1 === e.Code ? layer.url(e.StrCode, "/setPwd?Q=ResetPwd") : (layer.msgWarn(e.StrCode), t.addKeyUp())
                })
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(6), r = s(n), i = a(36), o = s(i), l = a(2), c = s(l), u = ["ShowA", "ShowB"];
    e.default = {
        data: function () {
            return {
                va: {answer1: {}, answer2: {}},
                Arr: "",
                ShowA: !1,
                ShowB: !1,
                QidA: "",
                QidB: "",
                answer1: "",
                answer2: "",
                FindShow: !1,
                nTitle: "绑定密保问题",
                nextUrl: "",
                TextA: "请选择密保问题",
                TextB: "请选择密保问题",
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            a(function (e) {
                n || s || router.push("/login"), s && (t.meta.link = "/resetWay?Q=ResetPwd", e.FindShow = !0)
            })
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp();
            var e = {ResetPwd: "设置密码", ResetSafePwd: "设置安全密码"}, a = this.$route.query.Q;
            a && (this.nextUrl = a.substr(2) + "?Q=" + a + "&F=Question", this.nTitle = e[a]);
            var s = ["UserSafeQuestions"], n = this;
            RootApp.GetInitData(s, function (e) {
                var a = n.doOne();
                n.Arr = t.setDate(e.UserSafeQuestions);
                var s = e.UserSafeQuestions;
                n.TextA = s[a[0]].Question, n.TextB = s[a[1]].Question, n.QidA = s[a[0]].Id, n.QidB = s[a[1]].Id
            }), document.addEventListener("click", function () {
                t.AllOut()
            }, !0)
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this, a = {
                    Action: "VerifyQuestion",
                    Answer1: this.answer1,
                    Answer2: this.answer2
                }, s = sessionStorage.getItem("isFind");
                if (s && (a.Action = "VerifyQuestionForget"), this.TextA == this.TextB)return layer.msgWarn("请勿选择相同的问题");
                var n = this.$va.checkAll();
                if (n)return void layer.msgWarn(n);
                a.QuestionID1 = this.QidA, a.QuestionID2 = this.QidB, this.delKeyUp();
                var r = {wait: "正在处理"};
                _fetch(a, r).then(function (a) {
                    if (1 === a.Code) {
                        t.QidA = "", t.QidB = "", t.answer1 = "", t.answer2 = "", t.TextA = "请选择密保问题", t.TextB = "请选择密保问题";
                        var s = e.nextUrl, n = s ? "/" + s : "/setQuestion";
                        layer.url(a.StrCode, n)
                    } else layer.msgWarn(a.StrCode), t.addKeyUp()
                })
            }, close: function (t, e, a) {
                this["Text" + a] = t, this["Qid" + a] = e, this["Show" + a] = !1
            }, selShow: function (t) {
                this[t] = !this[t];
                var e = u.slice(0);
                for (var a in e)e[a] != t && (this[e[a]] = !1)
            }, doOne: function () {
                var t = [];
                return t[0] = Math.floor(3 * Math.random()), t[1] = Math.floor(3 * Math.random()), t[0] == t[1] ? this.doOne() : t
            }, AllOut: function () {
                this.ShowA = !1, this.ShowB = !1, this.ShowC = !1
            }, setDate: function (t) {
                var e = {}, a = !0, s = !1, n = void 0;
                try {
                    for (var i, o = (0, r.default)(t); !(a = (i = o.next()).done); a = !0) {
                        var l = i.value;
                        e[l.Id] = l.Question
                    }
                } catch (t) {
                    s = !0, n = t
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (s)throw n
                    }
                }
                return e
            }
        }, components: {SelectBox: o.default, tip: c.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(2), r = s(n);
    e.default = {
        data: function () {
            return {
                va: {Password: {}},
                Password: "",
                nTitle: "设置安全密码",
                FindShow: !1,
                nextUrl: "",
                keyupHandler: function () {
                }
            }
        }, components: {tip: r.default}, beforeDestroy: function () {
            this.delKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = sessionStorage.getItem("isFind"), n = localStorage.getItem("UserName");
            a(function (e) {
                n || s || router.push("/login"), s && (t.meta.link = "/resetWay?Q=ResetPwd", e.FindShow = !0)
            })
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp();
            var e = {ResetPwd: "设置密码", ResetSafePwd: "设置安全密码"}, a = this.$route.query.Q;
            a && (this.nextUrl = a.substr(2) + "?Q=" + a + "&F=SafePwd", this.nTitle = e[a])
        }, methods: {
            delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = this, s = {
                    Action: "VerifySafePwd",
                    Password: this.Password
                }, n = sessionStorage.getItem("isFind");
                n && (s.Action = "VerifySafePwdForget"), this.delKeyUp();
                var r = {wait: "正在处理"};
                _fetch(s, r).then(function (e) {
                    if (1 === e.Code) {
                        var s = a.nextUrl, n = s ? "/" + s : "/setSafePwd";
                        layer.url(e.StrCode, n)
                    } else layer.msgWarn(e.StrCode), t.addKeyUp()
                })
            }
        }
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(2), o = s(i), l = a(23), c = s(l);
    e.default = {
        mixins: [c.default], data: function () {
            return {
                va: {Money: {}, PayUser: {}},
                MinMoney: "",
                MaxMoney: "",
                CodeImg: "",
                PayType: "",
                TypeName: "",
                ArrObj: {Action: "Recharge", Qort: 4, ID: "", BankCode: "", Money: "", PayUser: ""},
                isMaint: !1,
                layerBg: !1,
                layerShow: !1,
                keyupHandler: function () {
                }
            }
        }, beforeRouteEnter: function (t, e, a) {
            RootApp.GetInitData(["RechargeWayWeixin", "PayLimit"], function (t) {
                a(function (e) {
                    var a = t.RechargeWayWeixin;
                    a && a.length ? ("一般" !== a[0].PayType ? (e.ArrObj.PayUser = a[0].PayType, e.TypeName = "微信快捷", e.ArrObj.Qort = 5, t.bankType.Type.indexOf(a[0].PayType) == -1 && "undefined" == typeof QRCode && e.setScript()) : (e.CodeImg = a[0].CodeImg, e.RealName = a[0].RealName,
                        e.TypeName = "微信支付", e.ArrObj.Qort = 4), e.ArrObj.ID = a[0].Id, e.PayType = a[0].PayType, e.isMaint = !1) : e.isMaint = !0, e.$nextTick(function () {
                        e.getMoney(t.PayLimit)
                    })
                })
            })
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, methods: {
            moneyChange: function (t) {
                var e = this.moneyFormat(t);
                this.ArrObj.Money = e
            }, delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, getMoney: function (t) {
                if (t && this.TypeName) {
                    var e = t[this.TypeName];
                    this.MinMoney = e[0], this.MaxMoney = e[1];
                    var a = this.$va.Rule;
                    this.$va.addRule("Money", 2, new a("limit", [e[0], e[1]], ""))
                }
            }, setQrCode: function (t) {
                var e = new QRCode("qrcode");
                e.makeCode(t)
            }, setScript: function () {
                var t = document.createElement("script");
                t.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/04f46c6a/qrcode.min.js";
                var e = document.body.firstChild;
                document.body.insertBefore(t, e)
            }, close: function () {
                this.layerShow = !1, this.layerBg = !1, this.ArrObj.Money = "", this.$refs.qrcode.innerHTML = ""
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                if (1 * this.ArrObj.Money < 1 * this.MinMoney || 1 * this.ArrObj.Money > 1 * this.MaxMoney)return layer.alert("充值金额必须在" + this.MinMoney + "与" + this.MaxMoney + "之间");
                if ("一般" != this.PayType)if (state.bankType.Type.indexOf(this.PayType) == -1)this.layerBg = !0; else var a = window.open("about:blank");
                this.delKeyUp();
                var s = {wait: "正在处理"};
                _fetch(this.ArrObj, s).then(function (e) {
                    1 == e.Code ? (layer.closeAll(), "一般" != t.PayType ? state.bankType.Type.indexOf(t.PayType) == -1 ? (t.setQrCode(e.BackUrl), t.layerShow = !0) : (t.ArrObj.Money = "", t.$va.refreshValue("Money", ""), t.va.Money = {}, a.location.href = e.BackUrl) : (t.ArrObj.PayUser = "", t.$va.refreshValue("Money", ""), t.va.Money = {}, t.$va.refreshValue("PayUser", ""), t.va.PayUser = {}, layer.msgWarn(e.StrCode))) : (layer.msgWarn(e.StrCode), t.layerBg = !1, t.addKeyUp())
                })
            }
        }, components: {UserSlide: r.default, tip: o.default}
    }
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = a(1), r = s(n), i = a(2), o = s(i), l = a(23), c = s(l);
    e.default = {
        mixins: [c.default], data: function () {
            return {
                va: {Money: {}, SafePassword: {}},
                bankArr: {
                    "农业银行": "ABC",
                    "交通银行": "BCM",
                    "中国银行": "BOC",
                    "建设银行": "CCB",
                    "光大银行": "CEB",
                    "兴业银行": "CIB",
                    "中信银行": "CITIC",
                    "招商银行": "CMB",
                    "民生银行": "CMBC",
                    "广发银行": "GDB",
                    "华夏银行": "HXBANK",
                    "工商银行": "ICBC",
                    "邮政储蓄": "PSBC",
                    "平安银行": "SPABANK",
                    "浦发银行": "SPDB",
                    "农商银行": "CRCC"
                },
                UserBankList: [],
                UserAvail: "",
                PayLimit: "",
                MinMoney: "",
                MaxMoney: "",
                ReGetTime: "",
                isShow: !1,
                BankCardCode: "",
                BankCardNum: "",
                ArrData: {Action: "Withdraw", SafePassword: "", BankCardID: "", Money: ""},
                keyupHandler: function () {
                }
            }
        }, beforeDestroy: function () {
            this.delKeyUp()
        }, created: function () {
            var t = this;
            this.keyupHandler = function (e) {
                13 === e.keyCode && (t.$va.refreshAllValue(), t.vaSubmit())
            }, this.addKeyUp()
        }, beforeRouteEnter: function (t, e, a) {
            var s = ["UserHasSafePwd", "UserFirstCardInfo"];
            RootApp.GetInitData(s, function (t) {
                var e = 1 * state.UserHasSafePwd, s = state.UserFirstCardInfo;
                if (e)if (s && s[0]) {
                    var n = ["UserBalance", "UserWithdrawAvail", "UserBankCardList", "WithdrawRemainTimes", "PayLimit"];
                    RootApp.GetInitData(n, function (t) {
                        a(function (e) {
                            return e.UserBankList = e.setBankList(t.UserBankCardList), e.UserBankList.length ? (e.UserBalance = t.UserBalance, e.UserAvail = t.UserWithdrawAvail, e.PayLimit = t.PayLimit, e.ArrData.BankCardID = e.UserBankList[0].BankCardID, e.BankCardCode = e.bankArr[e.UserBankList[0].BankName], e.BankCardNum = e.UserBankList[0].CardNum.substr(-4), e.getMoney(), void(e.ReGetTime = t.WithdrawRemainTimes)) : void layer.url("无可提现银行卡", "/securityCenter")
                        })
                    })
                } else layer.open({
                    shadeClose: !1,
                    className: "layerConfirm",
                    content: "您还没绑定银行卡，无法提现，</br>是否先去绑定银行卡?",
                    title: "温馨提示",
                    btn: ["是", "否"],
                    yes: function (t) {
                        layer.close(t), router.push("/setBankcard?Q=withdraw")
                    },
                    no: function () {
                        state.turning = !1
                    }
                }); else layer.open({
                    shadeClose: !1,
                    className: "layerConfirm width380",
                    content: "您还未设置安全密码和绑定银行卡，无法提现，是否先去设置安全密码?",
                    title: "温馨提示",
                    btn: ["是", "否"],
                    yes: function (t) {
                        layer.close(t), router.push("/setSafePwd?Q=withdraw")
                    },
                    no: function () {
                        state.turning = !1
                    }
                })
            })
        }, methods: {
            moneyChange: function (t) {
                var e = this.moneyFormat(t);
                this.ArrData.Money = e
            }, delKeyUp: function () {
                document.removeEventListener("keyup", this.keyupHandler)
            }, addKeyUp: function () {
                document.addEventListener("keyup", this.keyupHandler)
            }, vaSubmit: function () {
                var t = this, e = this.$va.checkAll();
                if (e)return void layer.msgWarn(e);
                var a = this;
                if (1 * a.ArrData.Money < this.MinMoney || 1 * a.ArrData.Money > this.MaxMoney)return layer.alert("提现金额必须在" + this.MinMoney + "与" + this.MaxMoney + "之间");
                this.delKeyUp();
                var s = {wait: "正在处理"};
                _fetch(this.ArrData, s).then(function (e) {
                    1 == e.Code ? layer.alert("提现申请提交成功，请在3-5分钟后查询是否到账。", function () {
                        a.upTime(), a.ArrData.Money = "", a.ArrData.SafePassword = "", t.$va.refreshValue("Money", ""), t.va.Money = {}, t.$va.refreshValue("SafePassword", ""), t.va.SafePassword = {}
                    }) : (layer.msgWarn(e.StrCode), t.addKeyUp())
                })
            }, getMoney: function () {
                var t = this.PayLimit["提现金额"];
                this.MinMoney = t[0], this.MaxMoney = t[1];
                var e = this.$va.Rule;
                this.$va.addRule("Money", 2, new e("limit", [t[0], t[1]], ""))
            }, toggle: function () {
                this.UserBankList.length > 1 ? this.isShow = !this.isShow : layer.msg("您只绑定了一张银行卡，无法切换。")
            }, setCard: function (t, e, a) {
                this.BankCardCode = t, this.BankCardNum = a.substr(-4), this.ArrData.BankCardID = e, this.isShow = !1
            }, upTime: function () {
                var t = this, e = ["UserBalance", "UserWithdrawAvail", "WithdrawRemainTimes"];
                RootApp.AjaxGetInitData(e, function (e) {
                    t.ReGetTime = e.WithdrawRemainTimes, t.UserBalance = e.UserBalance, t.UserAvail = e.UserWithdrawAvail
                })
            }, setBankList: function (t) {
                var e = [];
                return t.forEach(function (t) {
                    t.IsDisable || e.push(t)
                }), e
            }
        }, components: {UserSlide: r.default, tip: o.default}
    }
}, , , , function (t, e) {
    "use strict";
    var a = [{
        name: "安徽省",
        city: [{name: "安庆市"}, {name: "蚌埠市"}, {name: "亳州市"}, {name: "芜湖市"}, {name: "黄山市"}, {name: "马鞍山市"}, {name: "铜陵市"}, {name: "淮北市"}, {name: "阜阳市"}, {name: "宣城市"}, {name: "宿州市"}, {name: "六安市"}, {name: "池州市"}, {name: "淮南市"}, {name: "合肥市"}, {name: "滁州市"}]
    }, {name: "北京", city: [{name: "北京市"}]}, {name: "重庆", city: [{name: "重庆市"}]}, {
        name: "福建省",
        city: [{name: "三明市"}, {name: "宁德市"}, {name: "漳州市"}, {name: "莆田市"}, {name: "南平市"}, {name: "厦门市"}, {name: "福州市"}, {name: "龙岩市"}, {name: "泉州市"}]
    }, {
        name: "甘肃省",
        city: [{name: "天水市"}, {name: "甘南藏族"}, {name: "嘉峪关市"}, {name: "张掖市"}, {name: "武威市"}, {name: "陇南市"}, {name: "白银市"}, {name: "庆阳市"}, {name: "酒泉市"}, {name: "临夏回族"}, {name: "平凉市"}, {name: "金昌市"}, {name: "兰州市"}, {name: "定西市"}]
    }, {
        name: "广东省",
        city: [{name: "珠海市"}, {name: "河源市"}, {name: "佛山市"}, {name: "揭阳市"}, {name: "广州市"}, {name: "阳江市"}, {name: "东莞市"}, {name: "韶关市"}, {name: "汕尾市"}, {name: "云浮市"}, {name: "湛江市"}, {name: "深圳市"}, {name: "惠州市"}, {name: "茂名市"}, {name: "中山市"}, {name: "梅州市"}, {name: "汕头市"}, {name: "肇庆市"}, {name: "潮州市"}, {name: "江门市"}, {name: "清远市"}]
    }, {
        name: "广西壮族",
        city: [{name: "梧州市"}, {name: "玉林市"}, {name: "贺州市"}, {name: "崇左市"}, {name: "百色市"}, {name: "钦州市"}, {name: "北海市"}, {name: "贵港市"}, {name: "河池市"}, {name: "柳州市"}, {name: "来宾市"}, {name: "南宁市"}, {name: "桂林市"}, {name: "防城港市"}]
    }, {
        name: "贵州省",
        city: [{name: "六盘水市"}, {name: "安顺市"}, {name: "遵义市"}, {name: "黔西南布依族苗族"}, {name: "贵阳市"}, {name: "黔东南苗族侗族"}, {name: "毕节市"}, {name: "黔南布依族苗族"}, {name: "铜仁市"}]
    }, {
        name: "海南省",
        city: [{name: "海口市"}, {name: "定安县"}, {name: "临高县"}, {name: "澄迈县"}, {name: "白沙黎族自治县"}, {name: "三沙市"}, {name: "儋州市"}, {name: "琼海市"}, {name: "五指山市"}, {name: "昌江黎族自治县"}, {name: "文昌市"}, {name: "乐东黎族自治县"}, {name: "屯昌县"}, {name: "陵水黎族自治县"}, {name: "保亭黎族苗族自治县"}, {name: "三亚市"}, {name: "万宁市"}, {name: "琼中黎族苗族自治县"}, {name: "东方市"}]
    }, {
        name: "河北省",
        city: [{name: "邯郸市"}, {name: "衡水市"}, {name: "承德市"}, {name: "石家庄市"}, {name: "秦皇岛市"}, {name: "张家口市"}, {name: "廊坊市"}, {name: "邢台市"}, {name: "沧州市"}, {name: "唐山市"}, {name: "保定市"}]
    }, {
        name: "河南省",
        city: [{name: "焦作市"}, {name: "济源市"}, {name: "濮阳市"}, {name: "信阳市"}, {name: "开封市"}, {name: "南阳市"}, {name: "郑州市"}, {name: "安阳市"}, {name: "新乡市"}, {name: "驻马店市"}, {name: "鹤壁市"}, {name: "商丘市"}, {name: "平顶山市"}, {name: "三门峡市"}, {name: "许昌市"}, {name: "周口市"}, {name: "漯河市"}, {name: "洛阳市"}]
    }, {
        name: "黑龙江省",
        city: [{name: "七台河市"}, {name: "双鸭山市"}, {name: "鹤岗市"}, {name: "哈尔滨市"}, {name: "齐齐哈尔市"}, {name: "绥化市"}, {name: "牡丹江市"}, {name: "佳木斯市"}, {name: "伊春市"}, {name: "黑河市"}, {name: "鸡西市"}, {name: "大庆市"}]
    }, {
        name: "湖北省",
        city: [{name: "仙桃市"}, {name: "潜江市"}, {name: "鄂州市"}, {name: "宜昌市"}, {name: "咸宁市"}, {name: "神农架"}, {name: "黄冈市"}, {name: "孝感市"}, {name: "随州市"}, {name: "天门市"}, {name: "荆州市"}, {name: "十堰市"}, {name: "襄阳市"}, {name: "荆门市"}, {name: "武汉市"}, {name: "黄石市"}, {name: "恩施市"}]
    }, {
        name: "湖南省",
        city: [{name: "永州市"}, {name: "长沙市"}, {name: "株洲市"}, {name: "娄底市"}, {name: "湘西土家族苗族"}, {name: "湘潭市"}, {name: "衡阳市"}, {name: "常德市"}, {name: "邵阳市"}, {name: "怀化市"}, {name: "岳阳市"}, {name: "郴州市"}, {name: "张家界市"}, {name: "益阳市"}]
    }, {
        name: "吉林省",
        city: [{name: "吉林市"}, {name: "四平市"}, {name: "长春市"}, {name: "白山市"}, {name: "通化市"}, {name: "白城市"}, {name: "辽源市"}, {name: "松原市"}, {name: "延边市"}]
    }, {
        name: "江苏省",
        city: [{name: "泰州市"}, {name: "徐州市"}, {name: "苏州市"}, {name: "南京市"}, {name: "常州市"}, {name: "盐城市"}, {name: "淮安市"}, {name: "连云港市"}, {name: "扬州市"}, {name: "无锡市"}, {name: "宿迁市"}, {name: "南通市"}, {name: "镇江市"}]
    }, {
        name: "江西省",
        city: [{name: "南昌市"}, {name: "九江市"}, {name: "吉安市"}, {name: "抚州市"}, {name: "景德镇市"}, {name: "萍乡市"}, {name: "宜春市"}, {name: "新余市"}, {name: "赣州市"}, {name: "上饶市"}, {name: "鹰潭市"}]
    }, {
        name: "辽宁省",
        city: [{name: "丹东市"}, {name: "抚顺市"}, {name: "本溪市"}, {name: "朝阳市"}, {name: "辽阳市"}, {name: "铁岭市"}, {name: "大连市"}, {name: "锦州市"}, {name: "阜新市"}, {name: "沈阳市"}, {name: "葫芦岛市"}, {name: "营口市"}, {name: "鞍山市"}, {name: "盘锦市"}]
    }, {
        name: "内蒙古",
        city: [{name: "赤峰市"}, {name: "乌兰察布市"}, {name: "包头市"}, {name: "乌海市"}, {name: "呼伦贝尔市"}, {name: "鄂尔多斯市"}, {name: "通辽市"}, {name: "呼和浩特市"}, {name: "巴彦淖尔市"}, {name: "兴安"}, {name: "阿拉善"}, {name: "锡林郭勒"}]
    }, {name: "宁夏", city: [{name: "银川市"}, {name: "吴忠市"}, {name: "中卫市"}, {name: "石嘴山市"}, {name: "固原市"}]}, {
        name: "青海省",
        city: [{name: "海北藏族"}, {name: "黄南藏族"}, {name: "海东市"}, {name: "海西蒙古族藏族"}, {name: "西宁市"}, {name: "玉树藏族"}, {name: "果洛藏族"}, {name: "海南藏族"}]
    }, {
        name: "山东省",
        city: [{name: "威海市"}, {name: "烟台市"}, {name: "泰安市"}, {name: "临沂市"}, {name: "枣庄市"}, {name: "东营市"}, {name: "德州市"}, {name: "淄博市"}, {name: "聊城市"}, {name: "莱芜市"}, {name: "滨州市"}, {name: "潍坊市"}, {name: "日照市"}, {name: "青岛市"}, {name: "济南市"}, {name: "济宁市"}, {name: "菏泽市"}]
    }, {
        name: "山西省",
        city: [{name: "晋城市"}, {name: "临汾市"}, {name: "吕梁市"}, {name: "长治市"}, {name: "晋中市"}, {name: "太原市"}, {name: "运城市"}, {name: "朔州市"}, {name: "阳泉市"}, {name: "忻州市"}, {name: "大同市"}]
    }, {
        name: "陕西省",
        city: [{name: "榆林市"}, {name: "汉中市"}, {name: "延安市"}, {name: "宝鸡市"}, {name: "铜川市"}, {name: "咸阳市"}, {name: "渭南市"}, {name: "安康市"}, {name: "西安市"}, {name: "商洛市"}]
    }, {name: "上海", city: [{name: "上海市"}]}, {
        name: "四川省",
        city: [{name: "乐山市"}, {name: "凉山彝族"}, {name: "资阳市"}, {name: "巴中市"}, {name: "自贡市"}, {name: "甘孜藏族"}, {name: "广安市"}, {name: "广元市"}, {name: "雅安市"}, {name: "达州市"}, {name: "德阳市"}, {name: "绵阳市"}, {name: "宜宾市"}, {name: "阿坝藏族羌族"}, {name: "内江市"}, {name: "成都市"}, {name: "泸州市"}, {name: "遂宁市"}, {name: "攀枝花市"}, {name: "南充市"}, {name: "眉山市"}]
    }, {name: "天津", city: [{name: "天津市"}]}, {
        name: "西藏",
        city: [{name: "昌都地区"}, {name: "林芝地区"}, {name: "阿里地区"}, {name: "山南地区"}, {name: "拉萨市"}, {name: "日喀则市"}, {name: "那曲地区"}]
    }, {
        name: "新疆",
        city: [{name: "克拉玛依市"}, {name: "塔城地区"}, {name: "伊犁哈萨克"}, {name: "图木舒克市"}, {name: "巴音郭楞蒙古"}, {name: "阿拉尔市"}, {name: "博尔塔拉蒙古"}, {name: "石河子市"}, {name: "吐鲁番地区"}, {name: "喀什地区"}, {name: "五家渠市"}, {name: "阿勒泰地区"}, {name: "昌吉回族"}, {name: "哈密地区"}, {name: "和田地区"}, {name: "阿克苏地区"}, {name: "克孜勒苏柯尔克孜"}, {name: "乌鲁木齐市"}, {name: "北屯"}]
    }, {
        name: "云南省",
        city: [{name: "保山市"}, {name: "红河哈尼族彝族"}, {name: "昆明市"}, {name: "迪庆藏族"}, {name: "大理白族"}, {name: "丽江市"}, {name: "临沧市"}, {name: "西双版纳傣族"}, {name: "曲靖市"}, {name: "普洱市"}, {name: "昭通市"}, {name: "楚雄彝族"}, {name: "文山壮族苗族"}, {name: "玉溪市"}, {name: "德宏傣族景颇族"}, {name: "怒江傈僳族"}]
    }, {
        name: "浙江省",
        city: [{name: "丽水市"}, {name: "绍兴市"}, {name: "杭州市"}, {name: "宁波市"}, {name: "舟山市"}, {name: "嘉兴市"}, {name: "衢州市"}, {name: "台州市"}, {name: "温州市"}, {name: "金华市"}, {name: "湖州市"}]
    }];
    t.exports = a
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = [{name: "和值", mode: "A10", tip: "猜3个开奖号相加的和，3-10为小，11-18为大。", eg: [1, 2, 3]}, {
        name: "三同号通选",
        mode: "B10",
        tip: "对所有相同的三个号码(111、222、333、444、555、666)进行投注，任意号码开出，即为中奖。",
        eg: [1, 1, 1]
    }, {
        name: "三同号单选",
        mode: "C10",
        tip: "对相同的三个号码(111、222、333、444、555、666)中的任意一个或多个进行投注，所选号码开出，即为中奖。",
        eg: [1, 1, 1]
    }, {name: "三不同号", mode: "D10", tip: "从1-6中任选3个或多个号码,所选号码与开奖号码的3个号码相同,即为中奖。", eg: [2, 3, 5]}, {
        name: "三连号通选",
        mode: "E10",
        tip: "对所有的3个相连号码(123、234、345、456)进行投注，任意号码开出，即为中奖。",
        eg: [1, 2, 3]
    }, {
        name: "二同号复选",
        mode: "F10",
        tip: "从11-66中任选1个或多个号码，选号与奖号(包含11-66，不限顺序)相同，即为中奖（不含豹子）。",
        eg: [1, 1, 3]
    }, {name: "二同号单选", mode: "G10", tip: "选择1对相同号码和1个不同号码投注，选号与奖号相同，即为中奖。", eg: [1, 1, 3]}, {
        name: "二不同号",
        mode: "H10",
        tip: "从1-6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即为中奖。",
        eg: [1, 4, 4]
    }];
    e.k3Config = a
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function n(t, e) {
        t || console.error("[va-warn]:" + e)
    }

    function r(t, e, a) {
        this.ruleType = t, this.ruleValue = e, this.errMsg = a || ""
    }

    function i(t, e, a) {
        var s = this;
        this.ruleOrder = [], this.rules = {}, this.dom = t, this.value = t.value, this.validated = !1, this.tag = t.getAttribute("tag"), this.correctMsg = "", this.modifiers = a, this.noCheck = !1, this.ruleOrder = e.map(function (t) {
            return s.rules[t.ruleType] = t, t.ruleType
        })
    }

    function o() {
        for (var t = [], e = arguments.length, a = Array(e), s = 0; s < e; s++)a[s] = arguments[s];
        var n = Array.prototype.concat.apply([], a), r = {};
        return n.forEach(function (e) {
            if (void 0 === r[e.ruleType])t.push(e), r[e.ruleType] = t.length - 1; else {
                var a = r[e.ruleType];
                (0, I.default)(t[a], e)
            }
        }), t
    }

    function l(t, e, a, s) {
        this.ruleType = t, this.ruleValue = e, this.isPass = a, this.errMsg = s
    }

    function c(t, e) {
        this.isPass = t, this.message = e
    }

    function u(t, e) {
        n(t, "未输入要验证的字段");
        var a = this.forms[t], s = (a.ruleOrder, a.rules);
        if (void 0 === e)return this.checkForm(a);
        var r = s[e];
        return this.checkRule(a, r)
    }

    function d(t, e, a) {
        var s = t.tag, n = {
            NonEmpty: s + "不能为空",
            reg: s + "格式错误",
            limit: s + "必须在" + a[0] + "与" + a[1] + "之间",
            equal: "两次" + s + "不相同",
            length: s + "长度必须在" + a[0] + "与" + a[1] + "之间",
            unique: s + "不能相同"
        };
        return n[e]
    }

    function v(t, e, a) {
        return !!e.value.trim()
    }

    function m(t, e, a) {
        return !!t.test(e.value)
    }

    function f(t, e, a) {
        var s = e.value;
        return +s >= t[0] && +s <= t[1]
    }

    function p(t, e, a) {
        var s = a.forms[t];
        return s.value === e.value
    }

    function h(t, e, a) {
        var s = e.value.length;
        return +s >= t[0] && +s <= t[1]
    }

    function _(t, e, a) {
        var s = a.uniqueGroup[t], n = s.map(function (t) {
            return a.forms[t].value
        }), r = n.filter(function (t, e, a) {
            return a.indexOf(t) === e
        });
        return n.length === r.length
    }

    function g(t, e) {
        var a = (this.forms, e.ruleType), s = e.ruleValue, n = e.errMsg;
        n = n || d(t, a, s);
        var r = {
            NonEmpty: v,
            reg: m,
            limit: f,
            equal: p,
            length: h,
            unique: _
        }, i = r[a], o = i(s, t, this), c = new l(a, s, o, o ? null : n);
        return c
    }

    function y(t) {
        for (var e = this, a = t.ruleOrder.map(function (a) {
            var s = t.rules[a];
            return e.checkRule(t, s)
        }), s = null, n = 0; n < a.length; n++) {
            var r = a[n];
            if (r.isPass === !1) {
                s = n;
                break
            }
        }
        return null === s ? new c(!0, t.correctMsg) : new c(!1, a[s].errMsg)
    }

    function b(t, e) {
        this.forms[t].value = e + ""
    }

    function C() {
        var t = this;
        this.fieldOrder.forEach(function (e) {
            var a = t.forms[e];
            a.value = a.dom.value
        })
    }

    function w() {
        var t = this, e = null;
        return this.fieldOrder.forEach(function (a) {
            var s = t.forms[a], n = s.ruleOrder.every(function (t) {
                return "NonEmpty" !== t
            }), r = "" === s.value && n;
            if (s.noCheck === !1 && r === !1) {
                var i = t.setVmResult(a);
                null === e && i.isPass === !1 && (e = i.message)
            }
        }), e
    }

    function S(t) {
        var e = this.validate(t);
        return this.vmResult[t] = e, this.forms[t].validated = !0, e
    }

    function x() {
        var t = {};
        for (var e in this.forms)t[e] = this.forms[e].value;
        return t
    }

    function A(t, e, a) {
        var s = this.forms[t];
        s.ruleOrder.splice(e, 0, a.ruleType), s.rules[a.ruleType] = a
    }

    function k(t, e) {
        this.forms[t].noCheck = e
    }

    function D(t, e) {
        var a = {
            vmResult: t.va,
            fieldOrder: [],
            forms: {},
            group: {base: []},
            equalGroup: {},
            uniqueGroup: {},
            Rule: r,
            VaForm: i,
            validate: u,
            setVmResult: S,
            checkRule: g,
            checkForm: y,
            refreshValue: b,
            checkAll: w,
            getValue: x,
            setNoCheck: k,
            addRule: A,
            refreshAllValue: C
        };
        return t.$va ? t.$va : (t.$va = a, a)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var M, N = a(181), B = s(N), P = a(7), I = s(P), T = !0, R = {
        ImgCode: /^[0-9a-zA-Z]{4}$/,
        SmsCode: /^\d{4}$/,
        MailCode: /^\d{4}$/,
        UserName: /^[\w|\d]{4,16}$/,
        Password: /^[\w!@#$%^&*.]{6,16}$/,
        Mobile: /^1[3|4|5|7|8]\d{9}$/,
        RealName: /^[\u4e00-\u9fa5|·]{2,16}$|^[a-zA-Z|\s]{2,20}$/,
        BankNum: /^\d{10,19}$/,
        Money: /^([1-9]\d*|0)$/,
        Answer: /^\S+$/,
        Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    }, L = {};
    L.install = function (t, e) {
        M = t, M.directive("va", {
            bind: function (t, e, a) {
                var s = a.context, l = "EXTEND" === e.arg ? t.getAttribute("name") : e.arg, c = e.modifiers, u = (t.value, t.getAttribute("group") || "base"), d = t.getAttribute("tag"), v = t.getAttribute("regMsg") || "", m = [], f = [], p = [];
                n(d, "未设置输入框的tag"), n(s.va, "实例的data选项上，未设置va对象"), n(l, "未设置输入框字段");
                var h = D(s, l);
                h.fieldOrder.push(l), h.group[u].push(l);
                var _ = new r("NonEmpty", !0, "");
                void 0 === c.CanNull && m.push(_), R[l] && p.push(new r("reg", R[l], v));
                for (var g = (0, B.default)(c), y = 0; y < g.length; y++) {
                    var b = g[y];
                    R[g[y]] && p.push(new r("reg", R[b], v))
                }
                void 0 !== e.value && (f = e.value.map(function (t) {
                    var e = (0, B.default)(t)[0], a = "reg" === e ? v : "";
                    return new r(e, t[e], a)
                }));
                var C = o(m, p, f), w = !1;
                C.forEach(function (t) {
                    var e = t.ruleType, a = t.ruleValue;
                    "equal" === e && (void 0 === h.equalGroup[a] ? h.equalGroup[a] = [l] : h.equalGroup[a].push(l)), "unique" === e && (w = a, void 0 === h.uniqueGroup[a] ? h.uniqueGroup[a] = [l] : h.uniqueGroup[a].push(l))
                });
                var S = new i(t, C, c);
                if (h.forms[l] = S, T) {
                    var x = function () {
                        if (h.refreshValue(l, t.value), "" === S.value && c.CanNull)return void(h.vmResult[l] = {});
                        S.noCheck === !1 && h.setVmResult(l);
                        var e = !1;
                        for (var a in h.equalGroup)a === l && (e = !0);
                        e && h.equalGroup[l].forEach(function (t) {
                            h.setVmResult(t)
                        }), w && h.uniqueGroup[w].forEach(function (t) {
                            h.setVmResult(t)
                        })
                    };
                    t.addEventListener("change", x), t.addEventListener("blur", x)
                }
            }
        })
    }, e.default = L
}, function (t, e, a) {
    "use strict";
    var s = a(363), n = a(362), r = [{
        path: "/lotteryHall",
        name: "购彩大厅",
        meta: {title: "购彩大厅"},
        component: s
    }, {
        path: "/lottery/:type/:code",
        name: "彩种",
        meta: {title: "彩种", user: !0, component: n},
        component: n
    }, {path: "/lottery", redirect: "/lotteryHall"}];
    t.exports = r
}, function (t, e, a) {
    "use strict";
    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var n = a(178), r = s(n), i = a(177), o = s(i), l = a(175), c = s(l), u = a(358), d = a(371), v = a(365), m = [{
        path: "*",
        redirect: "/notfound"
    }], f = [{path: "/", redirect: "/index"}, {
        path: "/index",
        name: "主页",
        meta: {title: "未登录", nav: !0, link: !1, user: !1, agent: !1},
        component: u
    }, {path: "/maintain", name: "维护中...", meta: {title: "系统维护"}, component: v}, {
        path: "/notfound",
        name: "404",
        meta: {title: "找不到页面"},
        component: d
    }];
    f = f.concat(c.default).concat(o.default).concat(r.default).concat(m), t.exports = f
}, function (t, e, a) {
    "use strict";
    var s = a(361), n = a(378), r = a(380), i = a(372), o = a(373), l = a(366), c = a(390), u = a(383), d = a(347), v = a(345), m = a(351), f = a(368), p = a(367), h = a(340), _ = a(369), g = a(376), y = a(393), b = a(386), C = a(388), w = a(395), S = a(385), x = a(392), A = a(394), k = a(387), D = a(391), M = a(384), N = a(379), B = a(355), P = a(374), I = a(354), T = a(375), R = a(352), L = a(396), G = a(397), U = a(370), $ = a(389), O = a(357), j = [{
        path: "/login",
        name: "登录",
        meta: {title: "用户登录", user: !1},
        component: s
    }, {path: "/register", name: "注册", meta: {title: "用户注册", user: !1}, component: n}, {
        path: "/securityCenter",
        name: "我的帐户",
        meta: {title: "我的帐户", user: !0},
        component: r
    }, {path: "/personalInfo", name: "个人资料", meta: {title: "个人资料", user: !0}, component: i}, {
        path: "/personalLevel",
        name: "等级头衔",
        meta: {title: "等级头衔", user: !0},
        component: o
    }, {
        path: "/manageBankcard",
        name: "银行卡管理",
        meta: {title: "银行卡管理", user: !0},
        component: l
    }, {
        path: "/verifyBankcard",
        name: "验证首张银行卡",
        meta: {title: "验证首张银行卡", user: !0},
        component: c
    }, {path: "/setBankcard", name: "绑定银行卡", meta: {title: "绑定银行卡", user: !0}, component: u}, {
        path: "/activity",
        name: "activity",
        meta: {title: "活动中心", user: !1},
        children: [{path: "/activity/:id", component: d}],
        component: d
    }, {path: "/PLstatement", name: "今日盈亏", meta: {title: "今日盈亏", user: !0}, component: v}, {
        path: "/agentReport",
        name: "代理报表",
        meta: {title: "代理报表", user: !0, agent: !0},
        component: m
    }, {
        path: "/manageInvite",
        name: "下级开户",
        meta: {title: "下级开户", user: !0, agent: !0},
        component: f
    }, {
        path: "/manageIcode",
        name: "邀请码",
        meta: {title: "邀请码", user: !0, agent: !0},
        children: [{path: "", component: h}, {path: "AgentCode", component: h}, {path: "memberCode", component: _}],
        component: p
    }, {path: "/rebateDes", name: "返点赔率表", meta: {title: "返点赔率表", user: !0}, component: g}, {
        path: "/verifyPwd",
        name: "验证密码",
        meta: {title: "验证密码", user: !0},
        component: y
    }, {
        path: "/setPwd",
        name: "设置密码",
        meta: {title: "设置密码", user: !1, verify: 1, from: "Pwd,SafePwdForget,MobileForget,QuestionForget,MailForget,"},
        component: b
    }, {
        path: "/setSafePwd",
        name: "设置安全密码",
        meta: {title: "设置安全密码", user: !0, verify: "UserHasSafePwd", from: "SafePwd,Mobile,Question,Mail,"},
        component: C
    }, {path: "/verifySafePwd", name: "验证安全密码", meta: {title: "验证安全密码", user: !1}, component: w}, {
        path: "/setMobile",
        name: "绑定密保手机",
        meta: {title: "绑定密保手机", user: !0, verify: "UserMobile", from: "Mobile,"},
        component: S
    }, {
        path: "/verifyMobile",
        name: "验证密保手机",
        meta: {title: "验证密保手机", user: !1},
        component: x
    }, {
        path: "/verifyQuestion",
        name: "验证密保问题",
        meta: {title: "验证密保问题", user: !1},
        component: A
    }, {
        path: "/setQuestion",
        name: "设置密保问题",
        meta: {title: "设置密保问题", user: !0, verify: "UserSafeQuestions", from: "Question,"},
        component: k
    }, {path: "/verifyMail", name: "验证密保邮箱", meta: {title: "验证密保邮箱", user: !1}, component: D}, {
        path: "/setMail",
        name: "绑定密保邮箱",
        meta: {title: "绑定密保邮箱", user: !0, verify: "UserMail", from: "Mail,"},
        component: M
    }, {path: "/resetWay", name: "找回密码", meta: {title: "找回密码", user: !1}, component: N}, {
        path: "/forgetPwd",
        name: "忘记密码",
        meta: {title: "忘记密码", user: !1},
        component: B
    }, {path: "/ping", name: "线路检测", meta: {title: "线路检测", user: !0}, component: P}, {
        path: "/withdraw",
        name: "提现",
        meta: {title: "提现", user: !0},
        component: G
    }, {path: "/ebankPay", name: "银行转帐", meta: {title: "银行转帐", user: !0}, component: I}, {
        path: "/quickPay",
        name: "快捷支付",
        meta: {title: "快捷支付", user: !0},
        component: T
    }, {path: "/alipay", name: "支付宝充值", meta: {title: "支付宝充值", user: !0}, component: R}, {
        path: "/wechatPay",
        name: "微信充值",
        meta: {title: "微信充值", user: !0},
        component: L
    }, {path: "/mobile", name: "手机购彩", meta: {title: "手机购彩", user: !1}, component: U}, {
        path: "/trendChart/:ID",
        name: "trendChart",
        meta: {title: "走势图", user: !0},
        component: $
    }, {path: "/howtoplay/:ID", name: "howtoplay", meta: {title: "玩法说明", user: !1}, component: O}];
    t.exports = j
}, function (t, e, a) {
    "use strict";
    var s = a(377), n = a(346), r = a(356), i = a(348), o = a(341), l = a(342), c = a(364), u = a(350), d = a(382), v = a(344), m = a(343), f = a(359), p = a(360), h = a(353), _ = a(381), g = a(349), y = [{
        path: "/agentBetRecord",
        name: "投注明细",
        meta: {title: "投注明细", nav: !0, link: !1, user: !0, agent: !0},
        component: s
    }, {
        path: "/agentBillRecord",
        name: "交易明细",
        meta: {title: "交易明细", nav: !0, link: !1, user: !0, agent: !0},
        component: i
    }, {
        path: "/BetRecord",
        name: "投注记录",
        meta: {title: "投注记录", nav: !0, link: !1, user: !0, agent: !1},
        component: o
    }, {
        path: "/BillRecord",
        name: "交易记录",
        meta: {title: "交易记录", nav: !0, link: !1, user: !0, agent: !1},
        component: l
    }, {
        path: "/about",
        name: "关于我们",
        meta: {title: "关于我们", nav: !0, link: !1, user: !1, agent: !1},
        component: n
    }, {
        path: "/helpCenter",
        name: "帮助中心",
        meta: {title: "帮助中心", nav: !0, link: !1, user: !1, agent: !1},
        component: r
    }, {
        path: "/lowerReport",
        name: "下级报表",
        meta: {title: "下级报表", nav: !0, link: !1, user: !0, agent: !0},
        component: c
    }, {
        path: "/agentMember",
        name: "会员管理",
        meta: {title: "会员管理", nav: !0, link: !1, user: !0, agent: !0},
        component: u
    }, {
        path: "/seekOrder",
        name: "追号记录",
        meta: {title: "追号记录", nav: !0, link: !1, user: !0, agent: !1},
        component: d
    }, {
        path: "/Notice",
        name: "网站公告",
        meta: {title: "网站公告", nav: !0, link: !1, user: !0, agent: !1},
        component: m
    }, {
        path: "/NoticeDetail",
        name: "公告详情",
        meta: {title: "网站公告", nav: !0, link: !1, user: !0, agent: !1},
        component: v
    }, {
        path: "/letter",
        name: "站内信",
        meta: {title: "站内信", nav: !0, link: !1, user: !0, agent: !1},
        component: f
    }, {
        path: "/letterDetail",
        name: "站内信息",
        meta: {title: "站内信息", nav: !0, link: !1, user: !0, agent: !1},
        component: p
    }, {
        path: "/betDetail",
        name: "注单详情",
        meta: {title: "注单详情", nav: !0, link: !1, user: !0, agent: !1},
        component: h
    }, {
        path: "/seekDetail",
        name: "追号详情",
        meta: {title: "追号详情", nav: !0, link: !1, user: !0, agent: !1},
        component: _
    }, {
        path: "/agentIntro",
        name: "代理说明",
        meta: {title: "代理说明", nav: !0, link: !1, user: !0, agent: !0},
        component: g
    }];
    t.exports = y
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, a) {
    var s, n;
    a(238), s = a(77);
    var r = a(405);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(291), s = a(78);
    var r = a(461);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-6455a7f6", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(250), s = a(80);
    var r = a(420);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-29cb26a9", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(268), s = a(82);
    var r = a(441);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-482a0e66", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(249), s = a(83);
    var r = a(418);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-270904ef", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(234);
    var r = a(401);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-0835e1db", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(272), a(273), a(274), a(275), a(276), a(277), a(278), a(279), a(280), a(281), s = a(84);
    var r = a(447);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(283), s = a(85);
    var r = a(449);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(86);
    var r = a(468);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(287), s = a(87);
    var r = a(457);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-5d0c0cde", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(90);
    var r = a(455);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(246), s = a(94);
    var r = a(415);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-1d37e430", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(257), s = a(95);
    var r = a(428);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-3221fee0", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(233), s = a(96);
    var r = a(398);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-055cff14", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(312), s = a(97);
    var r = a(491);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-f90382d8", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(258), s = a(98);
    var r = a(429);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-336e0428", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(271), s = a(99);
    var r = a(446);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-4b0d0fd2", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(297), s = a(100);
    var r = a(469);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-7e4d2326", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(262), s = a(101);
    var r = a(434);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-414d6582", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(289), s = a(102);
    var r = a(459);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-60a0e242", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(265), s = a(103);
    var r = a(437);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-45d4a526", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(306), s = a(104);
    var r = a(482);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-cdb07b34", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(300), s = a(105);
    var r = a(474);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-8b0bf7ce", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(261), s = a(106);
    var r = a(433);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-3c7ebd15", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(269), s = a(107);
    var r = a(442);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-48d87cfb", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(240), s = a(108);
    var r = a(408);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-10802672", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(111);
    var r = a(399);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(112);
    var r = a(443);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(260), s = a(113);
    var r = a(431);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-343aee75", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(307), s = a(114);
    var r = a(484);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-d80896d6", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(299), s = a(115);
    var r = a(473);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(256), s = a(116);
    var r = a(427);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-31b8fc26", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(267), s = a(117);
    var r = a(440);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(243), s = a(118);
    var r = a(412);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-1c2493ec", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(245), s = a(119);
    var r = a(414);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-1cb52ed0", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(288), s = a(120);
    var r = a(458);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-5f0a2604", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(253), s = a(121);
    var r = a(424);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-2c0cc59c", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(303), s = a(122);
    var r = a(478);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-a5eeea68", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(242), s = a(123);
    var r = a(411);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-1c1eba32", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(302), s = a(124);
    var r = a(477);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-9e850696", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(304), s = a(125);
    var r = a(479);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-af571cb8", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(126);
    var r = a(487);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(295), s = a(127);
    var r = a(464);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(310), s = a(128);
    var r = a(489);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-f55ffb1c", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(294), a(293), s = a(129);
    var r = a(463);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-67d472c5", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(301), s = a(130);
    var r = a(476);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-981fe27a", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(309), s = a(131);
    var r = a(488);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(255), s = a(132);
    var r = a(426);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-317c15dc", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(286), a(285), s = a(133);
    var r = a(454);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-58f062fc", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(236), s = a(134);
    var r = a(403);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-0a301e56", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(247), s = a(135);
    var r = a(416);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-22dab070", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(251), s = a(136);
    var r = a(421);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-2a88b868", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(137);
    var r = a(453);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(138);
    var r = a(485);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(139);
    var r = a(400);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(140);
    var r = a(432);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(252), s = a(141);
    var r = a(422);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-2b324582", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(284), s = a(142);
    var r = a(452);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-5652996c", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(264), s = a(143);
    var r = a(436);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-458dfdeb", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(296), s = a(144);
    var r = a(467);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-7a9e99d2", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(237), s = a(145);
    var r = a(404);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-0c58e34f", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(146);
    var r = a(450);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(290), s = a(147);
    var r = a(460);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-62768f62", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(254), s = a(148);
    var r = a(425);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-2c8e723a", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(149);
    var r = a(451);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(150);
    var r = a(444);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(151);
    var r = a(475);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(313), s = a(152);
    var r = a(492);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-fd6040f4", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(239), s = a(153);
    var r = a(407);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-0fcaa629", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(270), s = a(154);
    var r = a(445);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-4abdc4fe", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(155);
    var r = a(419);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(156);
    var r = a(438);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(157);
    var r = a(406);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(311), s = a(158);
    var r = a(490);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-f7eb0dca", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(159);
    var r = a(472);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(266), s = a(160);
    var r = a(439);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-47d8bade", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(161);
    var r = a(410);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(162);
    var r = a(483);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(163);
    var r = a(423);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(164);
    var r = a(480);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(298), s = a(165);
    var r = a(471);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-816f3ec8", t.exports = s
}, function (t, e, a) {
    var s, n;
    s = a(166);
    var r = a(466);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, t.exports = s
}, function (t, e, a) {
    var s, n;
    a(282), s = a(167);
    var r = a(448);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-51545fd6", t.exports = s
}, function (t, e, a) {
    var s, n;
    a(244), s = a(168);
    var r = a(413);
    n = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (n = s = s.default), "function" == typeof n && (n = n.options), n.render = r.render, n.staticRenderFns = r.staticRenderFns, n._scopeId = "data-v-1c3b3667", t.exports = s
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("modeSelect"), t._v(" "), a("playArea"), t._v(" "), a("basket"), t._v(" "), a("chaseBox")], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("下级开户")]), t._v(" "), a("div", {staticClass: "userMain openAgent"}, [a("div", {staticClass: "newTab"}, [a("router-link", {attrs: {to: "/manageInvite"}}, [t._v("下级开户")]), t._v(" "), a("router-link", {
                staticClass: "curr",
                attrs: {to: "/manageIcode"}
            }, [t._v("邀请码管理")])], 1), t._v(" "), a("div", {staticClass: "TabLi"}, [a("ul", {staticClass: "searchFirst"}, [a("li", [a("span", [t._v("开户类型：")]), t._v(" "), a("router-link", {
                staticClass: "userSearch active",
                attrs: {to: "/manageIcode/AgentCode"}
            }, [t._v("代理")]), t._v(" "), a("router-link", {
                staticClass: "userSearch",
                attrs: {to: "/manageIcode/memberCode"}
            }, [t._v("玩家")])], 1)]), t._v(" "), a("Icode", {attrs: {CodeType: t.CodeType}})], 1)])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("下级开户")]), t._v(" "), a("div", {staticClass: "userMain openAgent"}, [a("div", {staticClass: "newTab"}, [a("router-link", {
                staticClass: "curr",
                attrs: {to: "/manageInvite"}
            }, [t._v("下级开户")]), t._v(" "), a("router-link", {attrs: {to: "/manageIcode"}}, [t._v("邀请码管理")])], 1), t._v(" "), a("div", {
                staticClass: "TabLi",
                attrs: {"data-id": "1", "data-title": ""}
            }, [a("ul", {staticClass: "searchFirst"}, [a("li", [a("span", [t._v("开户类型：")]), t._v(" "), a("a", {
                class: {
                    userSearch: !0,
                    active: 1 == t.UserType
                }, attrs: {href: "javascript:;"}, on: {
                    click: function (e) {
                        t.UserType = 1
                    }
                }
            }, [t._v("代理")]), t._v(" "), a("a", {
                class: {userSearch: !0, active: 0 == t.UserType},
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        t.UserType = 0
                    }
                }
            }, [t._v("玩家")]), t._v(" "), a("br"), t._v(" 返点设置：请先为下级设置返点。 "), a("a", {
                staticClass: "rebateDesLink",
                on: {
                    click: function (e) {
                        t.OpenWin("/rebateDes")
                    }
                }
            }, [t._v("点击查看返点赔率表")])])]), t._v(" "), t.caiList ? a("div", {
                staticClass: "bonusTable",
                attrs: {id: "NextOpen"}
            }, t._l(t.caiList, function (e) {
                return a("ul", [a("li", [t._v(t._s(t.caiName[e.LotteryType]))]), t._v(" "), a("li", [a("input", {
                    directives: [{
                        name: "va",
                        rawName: "v-va:EXTEND",
                        arg: "EXTEND"
                    }],
                    staticClass: "userInput mgl20",
                    attrs: {
                        type: "number",
                        name: e.LotteryType,
                        tag: t.caiName[e.LotteryType] + "返点",
                        placeholder: "",
                        min: e.MinPoint,
                        step: "0.1",
                        max: e.Point
                    },
                    domProps: {value: t.dval = ""}
                }), t._v(" "), a("span", [t._v("（自身返点" + t._s(e.Point) + "，可为下级设置返点范围" + t._s(e.MinPoint + "-" + e.Point) + "）")])])])
            })) : t._e(), t._v(" "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("生成邀请码")]), t._v(" "), t._m(0)])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mg30"}, [a("p", [t._v("※ 温馨提示：\r\n            "), a("br"), t._v(" 1、不同的返点赔率不同，返点越高赔率越高。\r\n            "), a("br"), t._v(" 2、代理可获得的佣金等于代理自身返点与下级返点的差值，如代理自身返点6，下级返点4，代理可获得下级投注金额的2%，即下级下注100元，代理可获得2元。\r\n            "), a("br"), t._v(" 3、下级返点值设得越低，下级的赔率就越低，建议给下级设置的返点不要过低。\r\n          ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.$store.state.turning,
                    expression: "$store.state.turning"
                }], staticClass: "layermbox layermbox2 layermshow"
            }, [a("div", {staticClass: "laymshade"}), t._v(" "), t._m(0)])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "layermmain"}, [a("div", {staticClass: "section"}, [a("div", {staticClass: "layermchild  layermanim"}, [a("div", {staticClass: "layermcont"}, [a("i"), t._v(" "), a("i", {staticClass: "laymloadtwo"}), t._v(" "), a("i"), t._v(" "), a("div")])])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "_div"}, [a("div", {staticClass: "layerBg"}), t._v(" "), a("div", {staticClass: "layerBox"}, [a("div", {
                staticClass: "layui-layer layui-layer-page  layer-anim",
                staticStyle: {"z-index": "19891018", width: "650px", height: "500px", top: "256.5px", left: "307px"},
                attrs: {id: "layui-layer4", type: "page", times: "4", showtime: "0", contype: "string"}
            }, [a("div", {
                staticClass: "layui-layer-title",
                staticStyle: {cursor: "move"},
                attrs: {move: "ok"}
            }, [t._v("详情")]), t._v(" "), a("div", {
                staticClass: "layui-layer-content",
                staticStyle: {height: "450px"},
                attrs: {id: ""}
            }, [a("div", {
                staticClass: "bonusTable",
                staticStyle: {padding: "0"},
                attrs: {id: "Detail"}
            }, t._l(t.ArrD, function (e) {
                return a("ul", {staticClass: "InviteW"}, [a("li", [t._v(t._s(e.Name))]), t._v(" "), a("li", [a("input", {
                    staticClass: "userInput mgl20",
                    attrs: {type: "text", name: "SSC", disabled: "disabled"},
                    domProps: {value: e.Num}
                }), t._v(" "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.setSpan,
                        expression: "setSpan"
                    }]
                }, [t._v("（自身返点：" + t._s(e.Point) + "）")])])])
            }))]), t._v(" "), a("span", {
                staticClass: "layui-layer-setwin",
                on: {click: t.close}
            }, [a("a", {staticClass: "close", attrs: {href: "javascript:;"}})])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container mgt15"}, [a("div", {staticClass: "lotteryHead fix"}, [a("div", {staticClass: "lotterySlider defaultImg"}, [t.$store.state.HallBanner ? a("BannerBox", {
                attrs: {
                    dArr: t.$store.state.HallBanner,
                    autoPlay: "true",
                    dWidth: t.dWidth
                }
            }) : t._e()], 1), t._v(" "), a("billboard")], 1), t._v(" "), t._m(0), t._v(" "), a("div", {staticClass: "lotteryContent slideTabBox"}, [a("ul", {staticClass: "lotteryNav hd fix"}, t._l(t.lotteryConfig, function (e) {
                return a("li", {
                    class: {on: e.LotteryClassName === t.nowLotteryClass}, on: {
                        click: function (a) {
                            t.changeNowLotteryClass(e.LotteryClassName, e.LotteryList)
                        }
                    }
                }, [a("a", [t._v(t._s(e.LotteryClassName))])])
            })), t._v(" "), a("div", {staticClass: "bd"}, [a("ul", {staticClass: "lotteryList fix"}, t._l(t.nowDisplayList, function (e, s) {
                return a("li", {staticClass: "ClickShade"}, [a("a", [a("i", {
                    staticClass: "iconfont",
                    class: "L_" + e.LotteryType
                }), t._v(" "), a("div", {staticClass: "lotteryDetail"}, [a("h4", [t._v(t._s(e.LotteryName))]), t._v(" "), a("em", [t._v(t._s(e.LotteryIntro))])])]), t._v(" "), a("div", {staticClass: "lotteryNow"}, [a("router-link", {
                    staticClass: "now MustLogin",
                    attrs: {to: "/lottery/" + e.LotteryType + "/" + e.LotteryCode}
                }, [t._v("立即投注")]), t._v(" "), a("a", {
                    staticClass: "help", on: {
                        click: function (a) {
                            t.OpenWin("/howtoplay/" + e.LotteryCode)
                        }, mouseover: function (e) {
                            t.TipId = s + 1
                        }, mouseleave: function (e) {
                            t.TipId = 0
                        }
                    }
                }, [a("i", {staticClass: "iconfont"}, [t._v("")])]), t._v(" "), a("transition", {attrs: {name: "fade"}}, [a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.TipId == s + 1,
                        expression: "TipId==index+1"
                    }], staticClass: "helpTip"
                }, [a("em", [t._v("玩法说明")])])])], 1)])
            }))])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "lotteryLine fix"}, [a("i"), t._v(" "), a("em")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container registerPage"}, [a("h3", {staticClass: "reg_tit"}, [t._v("线路检测")]), t._v(" "), a("p", {staticClass: "reg_small"}, [t._v("建议选择延迟最小的网址进行访问")]), t._v(" "), a("ul", {
                staticClass: "pingContent",
                attrs: {id: "pingContent"}
            }, t._l(t.LineList, function (e) {
                return a("li", {class: {noActive: 1 == e[2]}}, [a("input", {
                    attrs: {type: "text"},
                    domProps: {value: 0 == e[2] ? e[1] + "ms" : "连接超时"}
                }), a("i", {staticClass: "cssico-2right"}), a("input", {
                    attrs: {type: "text"},
                    domProps: {value: e[0]}
                }), 0 == e[2] ? a("a", {attrs: {href: "//" + e[0]}}, [t._v("切换")]) : a("a", [t._v("切换")])])
            })), t._v(" "), a("div", {staticClass: "refresh"}, [a("a", {
                class: {
                    mainColorBtn: !0,
                    submitBtnBig: !0,
                    noActive: 0 == t.btnIf
                }, on: {click: t.upList}
            })])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return t.$store.state.SiteConfig ? a("div", {
                class: t.bodyClass,
                attrs: {id: "app"}
            }, [t.$store.state.HeadFootShow ? a("HeaderCom", {attrs: {s: t.$store.state}}) : t._e(), t._v(" "), a("router-view", {attrs: {s: t.$store.state}}), t._v(" "), t.$store.state.HeadFootShow ? a("FooterCom", {attrs: {s: t.$store.state}}) : t._e(), t._v(" "), t.$store.state.HeadFootShow && t.$store.state.UserName ? a("Notice", {attrs: {s: t.$store.state}}) : t._e(), t._v(" "), a("Fullbg")], 1) : t._e()
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "queue"}, [t.VerifyShow ? a("li", {staticClass: "right"}, [a("span", [t._v("验证" + t._s(t.Verify))]), a("i")]) : t._e(), t._v(" "), t._m(0), t._v(" "), t._m(1)]), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("登录密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{name: "va", rawName: "v-va:Password", arg: "Password"}, {
                    name: "model",
                    rawName: "v-model",
                    value: t.Password,
                    expression: "Password",
                    arg: "Password"
                }],
                staticClass: "userInput",
                attrs: {regMsg: "密码应为6-16位字符", tag: "登录密码", type: "password", autocomplete: "off"},
                domProps: {value: t.Password},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Password = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Password.isPass,
                    message: t.va.Password.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("确认密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:checkPassword.Password",
                    value: [{equal: "Password"}],
                    expression: "[{'equal':'Password'}]",
                    arg: "checkPassword",
                    modifiers: {Password: !0}
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.checkPassword,
                    expression: "checkPassword",
                    arg: "checkPassword"
                }],
                staticClass: "userInput _no_paste",
                attrs: {tag: "确认密码", regMsg: "确认密码应为6-16位字符", type: "password", autocomplete: "off"},
                domProps: {value: t.checkPassword},
                on: {
                    input: function (e) {
                        e.target.composing || (t.checkPassword = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.checkPassword.isPass,
                    message: t.va.checkPassword.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("设置密码")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("追号记录")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("RecordState"), t._v(" "), a("div", {staticClass: "searchDetail"}, [a("table", [t._m(0), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {attrs: {colspan: "1"}}, [t._v(t._s(e.SerialNum))]), t._v(" "), a("td", [t._v(t._s(e.LotteryName))]), t._v(" "), a("td", [t._v(t._s(e.StartIssue))]), t._v(" "), a("td", [t._v(t._s(e.CompleteCount))]), t._v(" "), a("td", [t._v(t._s(e.CompleteMoney))]), t._v(" "), a("td", {staticStyle: {color: "#e4393c"}}, [t._v(t._s(e.State))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [a("a", {
                    staticClass: "alink",
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/seekDetail", query: {id: e.ID}})
                        }
                    }
                }, [t._v("查看")])])])
            })]], 2)])]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {ref: "page", attrs: {allpage: t.TotalPage}})], 1)]), t._v(" "), t._m(1)], 1)])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", {attrs: {colspan: "1"}}, [t._v("追号")]), t._v(" "), a("th", [t._v("彩种")]), t._v(" "), a("th", [t._v("起始期号")]), t._v(" "), a("th", [t._v("已追/总期数")]), t._v(" "), a("th", [t._v("已投/总金额")]), t._v(" "), a("th", [t._v("奖金状态")]), t._v(" "), a("th", [t._v("追号时间")]), t._v(" "), a("th", [t._v("操作项")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip"}, [a("p", [a("i"), t._v("温馨提示：追号记录最多只保留7天。\r\n        ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "textareaNumber"}, [a("div", {staticClass: "numberImport"}, [a("a", {
                staticClass: "submitBtn",
                on: {click: t.uploadNoteBet}
            }, [t._v("导入注单")]), t._v(" "), a("input", {
                ref: "uploadItem",
                staticStyle: {display: "none"},
                attrs: {type: "file"}
            }), t._v(" "), a("a", {staticClass: "selectEg"}, [t._v("查看标准格式样本\r\n    ")]), t._v(" "), a("div", {staticClass: "EgContent"}, [a("ul", t._l(t.exampleArr, function (e) {
                return a("li", [t._v(t._s(e))])
            }))])]), t._v(" "), a("div", {staticClass: "fileUpload"}), t._v(" "), a("div", {
                directives: [{
                    name: "chaseBack",
                    rawName: "v-chaseBack"
                }], staticClass: "numberTextarea", on: {click: t.hideTip}
            }, [a("textarea", {
                directives: [{name: "model", rawName: "v-model", value: t.betStr, expression: "betStr"}],
                ref: "textarea",
                staticClass: "betNote",
                domProps: {value: t.betStr},
                on: {
                    blur: t.showTip, input: [function (e) {
                        e.target.composing || (t.betStr = e.target.value)
                    }, t.whenInput]
                }
            }), t._v(" "), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.inputting,
                    expression: "!inputting"
                }], staticClass: "noteTip"
            }, [t._v("\r\n      说明：\r\n      "), a("br"), t._v(' 1、请参照"标准格式样本"格式录入或上传方案。\r\n      '), a("br"), t._v(" 2、每一注号码之间请使用空格分开，每注之间以回车、逗号或分号进行分隔\r\n      "), a("br"), t._v(" 3、文件格式必须是.txt格式。\r\n      "), a("br"), t._v(" 4、文件较大时会导致上传时间较长，请耐心等待！\r\n      "), a("br"), t._v(" 5、导入文本内容后将覆盖文本框中现有的内容。\r\n    ")])]), t._v(" "), a("div", {staticClass: "numberBtn"}, [a("a", {
                staticClass: "submitBtn",
                on: {click: t.deleteWrongItem}
            }, [t._v("删除错误项")]), t._v(" \r\n    "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.checkFormat}
            }, [t._v("检查格式是否正确")]), t._v(" \r\n    "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.clearNoteBet}
            }, [t._v("清空文本框")])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("ul", {staticClass: "searchFirst"}, [t.PagePath ? [0 === t.a_state_state ? a("li", [a("span", [t._v("摘要：")]), t._v(" "), a("ins", {staticClass: "selectIcon"}, [a("div", {staticClass: "title"}, [t._v(t._s(t.Selected == -1 ? "全部摘要" : t.LotteryList[t.Selected].Name) + "\r\n          "), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Selected,
                    expression: "Selected"
                }], staticClass: "userSelect", on: {
                    change: [function (e) {
                        var a = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        });
                        t.Selected = e.target.multiple ? a : a[0]
                    }, function (e) {
                        t.$parent.SearchByLottery(t.Selected)
                    }]
                }
            }, [a("option", {attrs: {value: "-1"}}, [t._v("全部摘要")]), t._v(" "), t._l(t.LotteryList, function (e) {
                return a("option", {domProps: {value: e.Id}}, [t._v("\r\n              " + t._s(e.Name) + "\r\n            ")])
            })], 2)]), t._v(" "), a("em")])]) : t._e(), t._v(" "), 1 === t.a_state_state ? a("li", [a("span", [t._v("状态：")]), t._v(" "), a("ins", {staticClass: "selectIcon"}, [a("div", {staticClass: "title"}, [t._v(t._s(t.Selected == -1 ? "所有状态" : t.RechargeStatus[t.Selected].Name) + "\r\n          "), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Selected,
                    expression: "Selected"
                }], staticClass: "userSelect", on: {
                    change: [function (e) {
                        var a = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        });
                        t.Selected = e.target.multiple ? a : a[0]
                    }, function (e) {
                        t.$parent.SearchByLottery(t.Selected)
                    }]
                }
            }, [a("option", {attrs: {value: "-1"}}, [t._v("所有状态")]), t._v(" "), t._l(t.RechargeStatus, function (e) {
                return a("option", {domProps: {value: e.Id}}, [t._v("\r\n              " + t._s(e.Name) + "\r\n            ")])
            })], 2)]), t._v(" "), a("em")])]) : t._e(), t._v(" "), 2 === t.a_state_state ? a("li", [a("span", [t._v("状态：")]), t._v(" "), a("ins", {staticClass: "selectIcon"}, [a("div", {staticClass: "title"}, [t._v(t._s(t.Selected == -1 ? "所有状态" : t.WithdrawStatus[t.Selected].Name) + "\r\n          "), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Selected,
                    expression: "Selected"
                }], staticClass: "userSelect", on: {
                    change: [function (e) {
                        var a = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        });
                        t.Selected = e.target.multiple ? a : a[0]
                    }, function (e) {
                        t.$parent.SearchByLottery(t.Selected)
                    }]
                }
            }, [a("option", {attrs: {value: "-1"}}, [t._v("所有状态")]), t._v(" "), t._l(t.WithdrawStatus, function (e) {
                return a("option", {domProps: {value: e.Id}}, [t._v("\r\n              " + t._s(e.Name) + "\r\n            ")])
            })], 2)]), t._v(" "), a("em")])]) : t._e()] : [a("li", [a("span", [t._v("彩种：")]), t._v(" "), a("ins", {staticClass: "selectIcon"}, [a("div", {staticClass: "title"}, [t._v(t._s(t.Selected == -1 ? "全部彩票" : t.LotteryList[t.Selected].LotteryName) + "\r\n            "), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Selected,
                    expression: "Selected"
                }], staticClass: "userSelect", on: {
                    change: [function (e) {
                        var a = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        });
                        t.Selected = e.target.multiple ? a : a[0]
                    }, function (e) {
                        t.$parent.SearchByLottery(t.Selected)
                    }]
                }
            }, [a("option", {attrs: {value: "-1"}}, [t._v("全部彩票")]), t._v(" "), t._l(t.LotteryList, function (e) {
                return a("option", {domProps: {value: e.LotteryCode}}, [t._v("\r\n                " + t._s(e.LotteryName) + "\r\n              ")])
            })], 2)]), t._v(" "), a("em")])])], t._v(" "), a("li", {staticClass: "_time"}, [a("span", [t._v("时间：\r\n        "), t._l(["今天", "昨天", "七天"], function (e, s) {
                return a("a", {
                    class: "userSearch time " + (t.a_state_time === s ? "active" : ""),
                    on: {
                        click: function (e) {
                            t.doSearchByState(s, "Time")
                        }
                    }
                }, [t._v(t._s(e))])
            })], 2)]), t._v(" "), a("li", {staticClass: "_state"}, [a("span", [t._v(t._s(t.PagePath ? "状态：" : "类型：") + "\r\n        "), t._l(t.StateArr, function (e, s) {
                return a("a", {
                    class: "userSearch time " + (t.a_state_state === s ? "active" : ""),
                    on: {
                        click: function (e) {
                            t.doSearchByState(s, "State")
                        }
                    }
                }, [t._v(t._s(e))])
            })], 2)])], 2)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("首张银行卡验证")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "submitContent mg30"}, [a("li", [a("span", [t._v("首张银行卡卡号：")]), a("ins", [t._v(t._s(t.$store.state.UserFirstCardInfo[0].CardNum))])]), t._v(" "), a("li", [a("span", [t._v("首张银行卡户名：")]), a("ins", [t._v(t._s(t.$store.state.UserFirstCardInfo[0].RealName))])]), t._v(" "), a("li", [a("span", [t._v("请输入完整卡号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:BankNum",
                    arg: "BankNum"
                }, {
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.BankNum,
                    expression: "BankNum",
                    arg: "BankNum",
                    modifiers: {trim: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "确认卡号", placeholder: "请输入完整卡号", type: "text"},
                domProps: {value: t.BankNum},
                on: {
                    input: function (e) {
                        e.target.composing || (t.BankNum = e.target.value.trim())
                    }, blur: function (e) {
                        t.$forceUpdate()
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.BankNum.isPass,
                    message: t.va.BankNum.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("请输入完整户名：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:RealName",
                    arg: "RealName"
                }, {
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.RealName,
                    expression: "RealName",
                    arg: "RealName",
                    modifiers: {trim: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "确认户名", placeholder: "请输入完整户名", type: "text"},
                domProps: {value: t.RealName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.RealName = e.target.value.trim())
                    }, blur: function (e) {
                        t.$forceUpdate()
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.RealName.isPass,
                    message: t.va.RealName.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])]), t._v(" "), t._m(0)])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mg30"}, [a("p", [a("i"), t._v("温馨提示：为确定是本人操作，再次添加银行卡时需要验证首张银行卡信息。")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("我要充值")]), t._v(" "), a("div", {staticClass: "userMain"}, [a("div", {staticClass: "newTab pt15 fix"}, [a("router-link", {attrs: {to: "/ebankPay"}}, [t._v("银行转账")]), t._v(" "), a("router-link", {attrs: {to: "/quickPay"}}, [t._v("快捷支付")]), t._v(" "), a("router-link", {
                staticClass: "curr",
                attrs: {to: "/alipay"}
            }, [t._v("支付宝充值")]), t._v(" "), a("router-link", {attrs: {to: "/wechatPay"}}, [t._v("微信支付")])], 1), t._v(" "), t.isMaint ? a("div", [t._m(0)]) : ["一般" == t.PayType ? a("div", {attrs: {id: "isShow"}}, [a("div", {staticClass: "row fix"}, [a("div", {staticClass: "colMd8"}, [a("div", {staticClass: "stepBox topBox h150"}, [a("em", [t._v("")]), a("span", [a("b", [t._v("请转账到以下支付宝账户：")]), t._v("单笔最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))]), t._v("元")]), t._v(" "), a("ul", {staticClass: "alipayee"}, [a("li", [a("ins", [t._v("收款支付宝姓名：")]), a("ins", [a("input", {
                staticClass: "code",
                attrs: {type: "text"},
                domProps: {value: t.RealName}
            }), t._v(" "), t.isSupportCopy ? a("a", {
                directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                staticClass: "copy_btn"
            }, [t._v("复制")]) : t._e()])]), t._v(" "), a("li", [a("ins", [t._v("收款支付宝账号：")]), a("ins", [a("input", {
                staticClass: "code",
                attrs: {type: "text"},
                domProps: {value: t.AliNo}
            }), t._v(" "), t.isSupportCopy ? a("a", {
                directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                staticClass: "copy_btn"
            }, [t._v("复制")]) : t._e()])])])])]), t._v(" "), a("div", {staticClass: "colMd4"}, [a("div", {staticClass: "stepBox h150"}, [a("span", {staticStyle: {display: "block"}}, [t._v("扫码支付")]), t._v(" "), a("div", {
                staticClass: "erweima",
                staticStyle: {"text-align": "center"}
            }, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + (t.CodeImg || "/system/common/other/noQRcode.png"),
                    alt: ""
                }
            })])])])]), t._v(" "), a("div", {staticClass: "stepBox"}, [a("em", [t._v("")]), a("span", [a("b", [t._v("请认真填写您的转账信息：")]), t._v("请务必转账后再提交订单,否则无法及时查到您的款项！")]), t._v(" "), a("ul", [a("li", [a("ins", [a("b", [t._v("充值金额：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money",
                    arg: "Money"
                }],
                staticClass: "userInput",
                attrs: {type: "text", tag: "充值金额"},
                domProps: {value: t.ArrObj.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Money.isPass,
                    message: t.va.Money.message
                }
            })], 1), t._v(" "), a("ins", [a("b", [t._v("支付宝姓名：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:PayUser.RealName",
                    arg: "PayUser",
                    modifiers: {RealName: !0}
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.ArrObj.PayUser,
                    expression: "ArrObj.PayUser",
                    arg: "PayUser"
                }],
                staticClass: "userInput",
                attrs: {tag: "支付宝姓名", type: "text"},
                domProps: {value: t.ArrObj.PayUser},
                on: {
                    input: function (e) {
                        e.target.composing || (t.ArrObj.PayUser = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.PayUser.isPass,
                    message: t.va.PayUser.message
                }
            })], 1)])]), t._v(" "), a("ul", [a("h6", [a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("提交充值订单")])])]), t._v(" "), a("div", {staticClass: "userTip"}, [a("p", {staticClass: "mgl20"}, [t._v("※ 温馨提示："), a("br"), t._v("\r\n                      1、请转账完成后再提交充值订单。"), a("br"), t._v("\r\n                      2、请正确填写您的姓名和充值金额。"), a("br"), t._v("\r\n                      3、若提供的是银行账号，请使用支付宝转账到银行卡的方式进行转账。"), a("br"), t._v("\r\n                      4、转账1笔提交1次，请勿重复提交订单。\r\n                  ")])])])]) : t._e(), t._v(" "), "一般" != t.PayType ? a("div", {staticClass: "stepBox"}, [a("ul", {staticClass: "submitContent mg30"}, [a("li", [a("span", [t._v("充值金额：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money",
                    arg: "Money"
                }],
                staticClass: "userInput",
                attrs: {tag: "充值金额", type: "text"},
                domProps: {value: t.ArrObj.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                staticStyle: {display: "inline"},
                attrs: {isPass: t.va.Money.isPass, message: t.va.Money.message}
            })], 1), t._v(" "), a("li", [a("span", [t._v("充值方式：")]), t._v(" "), a("div", {staticClass: "bankblockList fix"}, [a("div", {
                staticClass: "wechatCon rb rb_active",
                attrs: {name: "rbt", type: "radiobox"}
            }, [a("i"), a("span", {staticClass: "alipay"}, [t._v(" 支付宝")]), a("em")])])])]), t._v(" "), a("ul", {staticClass: "submitContent mg30"}, [a("li", [a("span"), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("充值")])])]), t._v(" "), a("div", {staticClass: "userTip"}, [a("p", [t._v("※ 温馨提示："), a("br"), t._v("\r\n                    1、使用支付宝扫一扫二维码进行支付，系统自动到账。"), a("br"), t._v("\r\n                    2、单笔充值金额最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))]), t._v("元。"), a("br"), t._v("\r\n                    3、转账1笔提交1次，请勿重复提交订单。"), a("br")])])]) : t._e()]], 2)]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.layerBg,
                    expression: "layerBg"
                }], staticClass: "layerBg"
            }), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.layerShow,
                    expression: "layerShow"
                }], staticClass: "layerBox"
            }, [a("div", {
                staticClass: "layui-layer layui-layer-page  layer-anim",
                staticStyle: {"z-index": "19891018", width: "650px", height: "500px", top: "256.5px", left: "307px"},
                attrs: {id: "layui-layer4", type: "page", times: "4", showtime: "0", contype: "string"}
            }, [a("div", {
                staticClass: "layui-layer-title",
                staticStyle: {cursor: "move"},
                attrs: {move: "ok"}
            }, [t._v("手机扫一扫支付")]), t._v(" "), a("div", {
                staticClass: "layui-layer-content",
                staticStyle: {height: "500px"},
                attrs: {id: ""}
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    margin: "0",
                    "text-align": "center",
                    padding: "10px 0"
                }
            }, [t._v("充值金额:¥" + t._s(t.ArrObj.Money))]), a("div", {staticStyle: {padding: "15px 20px"}}, [a("div", {
                staticStyle: {
                    padding: "10px",
                    "text-align": "center"
                }, attrs: {id: "qrdiv"}
            }, [a("div", {
                ref: "qrcode",
                staticStyle: {"text-align": "center"},
                attrs: {id: "qrcode"}
            })]), t._m(1)])]), t._v(" "), a("span", {staticClass: "layui-layer-setwin"}, [a("a", {
                staticClass: "close",
                attrs: {href: "javascript:;"},
                on: {click: t.close}
            })])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "maintain",
                staticStyle: {"padding-top": "180px", "padding-bottom": "180px"}
            }, [a("i", {staticClass: "iconfont"}), t._v("支付宝充值维护中，请选择其它充值方式")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "userTip",
                staticStyle: {margin: "15px 0 0 0"}
            }, [a("p", [t._v("温馨提示：支付成功后，会在一分钟内为您添加额度，请刷新您的账户余额!")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "container activity",
                attrs: {id: "ActivityBox"}
            }, [t._l(t.$store.state.SysActivity, function (e, s) {
                return [a("div", {class: {floor: !0, fix: !0, show: t.BoxShow == s + 1}}, [a("div", {
                    ref: s + 1,
                    refInFor: !0,
                    staticClass: "showDetail fix",
                    on: {
                        click: function (e) {
                            t.showDetail(s)
                        }
                    }
                }, [a("img", {
                    staticClass: "ImgLI floorTitleImg defaultImg",
                    attrs: {src: t.$store.state.constant.ImgHost + e.Img, alt: ""}
                }), t._v(" "), a("div", {staticClass: "floorRright"}, [a("h2", [t._v(t._s(e.Name))]), t._v(" "), a("p", [t._v(t._s(e.Intro))]), t._v(" "), t._m(0, !0)])]), t._v(" "), t.BoxShow == s + 1 ? a("ActivityBox", {
                    attrs: {
                        Type: e.Name,
                        Info: e.Content
                    }
                }) : t._e()], 1), t._v(" "), a("div", {staticClass: "floorLine"})]
            }), t._v(" "), t._l(t.$store.state.ActivityConfig, function (e, s) {
                return [a("div", {
                    class: {
                        floor: !0,
                        fix: !0,
                        show: t.BoxShow == t.Num + s + 1
                    }
                }, [a("div", {
                    ref: t.Num + s + 1, refInFor: !0, staticClass: "showDetail fix", on: {
                        click: function (e) {
                            t.showDetail(t.Num + s)
                        }
                    }
                }, [a("img", {
                    staticClass: "ImgLI floorTitleImg defaultImg",
                    attrs: {src: t.$store.state.constant.ImgHost + e.Img, alt: ""}
                }), t._v(" "), a("div", {staticClass: "floorRright"}, [a("h2", [t._v(t._s(e.Name))]), t._v(" "), a("p", [t._v(t._s(e.Intro))]), t._v(" "), t._m(1, !0)])]), t._v(" "), t.BoxShow == t.Num + s + 1 ? a("ActivityBox", {
                    attrs: {
                        Type: "站长",
                        Info: e.Content
                    }
                }) : t._e()], 1), t._v(" "), a("div", {staticClass: "floorLine"})]
            })], 2)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("a", {attrs: {href: "javascript:;"}}, [t._v("查看详情"), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("a", {attrs: {href: "javascript:;"}}, [t._v("查看详情"), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("我要提现")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "submitContent mg30"}, [a("li", [a("span", [t._v("账户余额：")]), a("ins", [a("div", {staticClass: "money"}, [t._v(t._s(t.$store.state.UserBalance))]), t._v("  ")]), t._v("元")]), t._v(" "), a("li", [a("span", [t._v("可提现金额：")]), a("ins", [a("div", {staticClass: "money"}, [t._v(t._s(t.UserAvail))]), t._v("  ")]), t._v("元")]), t._v(" "), a("li", [a("span", [t._v("今天剩余提现次数：")]), a("ins", [a("div", {staticClass: "money"}, [t._v(t._s(t.ReGetTime))]), t._v("  ")]), t._v("次")]), t._v(" "), a("li", [a("span", [t._v("选择银行：")]), t._v(" "), a("div", {staticClass: "selectBankCon"}, [a("div", {
                class: "selectBank banked bank" + t.BankCardCode,
                on: {click: t.toggle}
            }, [a("span", [t._v("请选择银行")]), a("i"), a("ins", [t._v("尾号：" + t._s(t.BankCardNum))])]), t._v(" "), a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShow,
                    expression: "isShow"
                }], staticClass: "bankList fix"
            }, t._l(t.UserBankList, function (e) {
                return a("li", {
                    on: {
                        click: function (a) {
                            t.setCard(t.bankArr[e.BankName], e.BankCardID, e.CardNum)
                        }
                    }
                }, [a("input", {
                    attrs: {type: "radio", id: e.BankCardID},
                    domProps: {checked: t.ArrData.BankCardID == e.BankCardID ? "checked" : ""}
                }), a("em", {class: "iconBank bank" + t.bankArr[e.BankName]}), a("ins", [t._v("开户人姓名：" + t._s(e.RealName)), a("br"), t._v("银行卡号：" + t._s(e.CardNum))])])
            }))])]), t._v(" "), a("li", [a("span", [t._v("提现金额：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money.num",
                    arg: "Money",
                    modifiers: {num: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "提现金额", placeholder: "请输入您要提现的金额", type: "text"},
                domProps: {value: t.ArrData.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Money.isPass,
                    message: t.va.Money.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("安全密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:SafePassword.Password",
                    arg: "SafePassword",
                    modifiers: {Password: !0}
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.ArrData.SafePassword,
                    expression: "ArrData.SafePassword",
                    arg: "SafePassword"
                }],
                staticClass: "userInput",
                attrs: {tag: "安全密码", placeholder: "请输入您的安全密码", type: "password", autocomplete: "off"},
                domProps: {value: t.ArrData.SafePassword},
                on: {
                    input: function (e) {
                        e.target.composing || (t.ArrData.SafePassword = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.SafePassword.isPass,
                    message: t.va.SafePassword.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t.ReGetTime > 0 ? a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("确定")]) : a("span", {staticClass: "submitBtn btnnot"}, [t._v("确定")])])]), t._v(" "), a("div", {staticClass: "userTip mg30"}, [a("p", [t._v("※ 温馨提示："), a("br"), t._v("\r\n                  可提现金额=有效投注×3(此项需达到充值金额的30%才计入)+奖金+活动礼金"), a("br"), t._v("\r\n                  单笔提现：最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))]), t._v("元")])])])])], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("交易明细")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("ul", {
                staticClass: "todayView mgb10",
                staticStyle: {"text-align": "left"}
            }, [a("em", [t._v("账号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.SearchName,
                    expression: "SearchName",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput",
                attrs: {type: "text", placeholder: "下级交易查询"},
                domProps: {value: t.SearchName},
                on: {
                    change: function (e) {
                        t.SearchName = e.target.value
                    }
                }
            }), t._v(" \r\n        "), a("a", {
                staticClass: "submitBtn", on: {
                    click: function (e) {
                        t.SearchByName()
                    }
                }
            }, [t._v("搜索")])]), t._v(" "), a("RecordState"), t._v(" "), a("div", {staticClass: "searchDetail"}, ["GetAgentBillRecord" === t.ajaxData.Action ? a("table", [t._m(0), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.UserName))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.TypeName))]), t._v(" "), a("td", [t._v(t._s(e.InMoney))]), t._v(" "), a("td", [t._v(t._s(e.OutMoney))]), t._v(" "), a("td", [t._v(t._s(e.Balance))]), t._v(" "), a("td", [t._v(t._s(e.Remarks))])])
            })]], 2)]) : t._e(), t._v(" "), "GetAgentRechargeRecord" === t.ajaxData.Action ? a("table", [t._m(1), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.UserName))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.ApplyMoney))]), t._v(" "), a("td", [t._v(t._s(e.InMoney))]), t._v(" "), a("td", [t._v(t._s(e.TypeName))]), t._v(" "), a("td", [t._v(t._s(e.State))])])
            })]], 2)]) : t._e(), t._v(" "), "GetAgentWithdrawRecord" === t.ajaxData.Action ? a("table", [t._m(2), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.UserName))]), t._v(" "), a("td", [t._v(t._s(e.BankName))]), t._v(" "), a("td", [t._v(t._s(e.BankNum))]), t._v(" "), a("td", [t._v(t._s(e.RealName))]), t._v(" "), a("td", [t._v(t._s(e.OutMoney))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.State))])])
            })]], 2)]) : t._e()]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {ref: "page", attrs: {allpage: t.TotalPage}})], 1)]), t._v(" "), t._m(3)], 1)])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("时间")]), t._v(" "), a("th", [t._v("摘要")]), t._v(" "), a("th", [t._v("收入金额")]), t._v(" "), a("th", [t._v("支出金额")]), t._v(" "), a("th", [t._v("可用余额")]), t._v(" "), a("th", [t._v("备注")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("发起时间")]), t._v(" "), a("th", [t._v("充值金额")]), t._v(" "), a("th", [t._v("到账金额")]), t._v(" "), a("th", [t._v("充值方式")]), t._v(" "), a("th", [t._v("状态")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("提现银行")]), t._v(" "), a("th", [t._v("银行卡号")]), t._v(" "), a("th", [t._v("姓名")]), t._v(" "), a("th", [t._v("提现金额")]), t._v(" "), a("th", [t._v("提现时间")]), t._v(" "), a("th", [t._v("状态")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mgt15"}, [a("p", [a("i"), t._v("温馨提示：交易明细最多只保留7天。\r\n        ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "winnerListCon"}, [a("h3", {staticClass: "color"}, [t._v("风云榜")]), t._v(" "), a("div", {staticClass: "winnerListSlide"}, [a("div", {
                staticClass: "bd",
                on: {mouseleave: t.beginLoop, mouseenter: t.clearTimer}
            }, [a("ul", {
                staticClass: "winnerList",
                style: {top: -t.imgHeight * t.imgIndex + "px", transition: "" + t.transition},
                attrs: {id: "carousel"}
            }, t._l(t.scrollList, function (e, s) {
                return a("li", {
                    on: {
                        mouseenter: function (a) {
                            return a.target !== a.currentTarget ? null : void t.getCard(e.UserId, a, "左")
                        }, mouseleave: function (e) {
                            return e.target !== e.currentTarget ? null : void t.getOut(e)
                        }
                    }
                }, [a("img", {attrs: {src: e.src}}), t._v(" "), a("p", {staticClass: "color"}, [t._v(t._s(e.name) + " 在" + t._s(e.lottery)), a("br"), t._v("喜中"), a("span", [t._v(t._s(e.bonus))])])])
            }))])]), t._v(" "), a("UserCard", {attrs: {cardArr: t.cardArr}})], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("\r\n      下级报表\r\n      "), t._l(t.LowerNameArr, function (e, s) {
                return t.LowerNameArr.length ? a("a", [t._v(" > "), a("span", {
                    on: {
                        click: function (e) {
                            t.ReturnBack(s)
                        }
                    }
                }, [t._v(t._s(e))])]) : t._e()
            })], 2), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {
                staticClass: "newTab",
                attrs: {id: "timeType"}
            }, t._l(["今天", "昨天", "本月", "上个月"], function (e, s) {
                return a("a", {
                    class: t.a_state === s ? "curr" : "", on: {
                        click: function (e) {
                            t.SearchByMonth(s)
                        }
                    }
                }, [t._v(t._s(e))])
            })), t._v(" "), a("div", {staticClass: "searchDetail"}, [a("table", {staticClass: "lowerReportTable"}, [t._m(0), t._v(" "), a("tbody", {staticClass: "_tableList"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {
                    staticClass: "username",
                    staticStyle: {color: "#4aa9db"}
                }, [t._v(t._s(e.UserName))]), t._v(" "), a("td", [t._v(t._s(e.UserType))]), t._v(" "), a("td", [t._v(t._s(e.BetMoney))]), t._v(" "), a("td", [t._v(t._s(e.WinMoney))]), t._v(" "), a("td", [t._v(t._s(e.RebateMoney))]), t._v(" "), a("td", [t._v(t._s(e.DiscountMoney))]), t._v(" "), a("td", [e.IsAgent && Number(e.BetNum) ? a("a", {
                    staticClass: "showXJ",
                    on: {
                        click: function (a) {
                            t.SeeLower(e.UserName)
                        }
                    }
                }, [t._v(t._s(e.BetNum))]) : [t._v(t._s(e.BetNum) + "\r\n                      ")]], 2), t._v(" "), a("td", [a("a", {
                    staticStyle: {color: "#e4393c"},
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/agentReport", query: {username: e.UserName}})
                        }
                    }
                }, [t._v(t._s(e.ProfitMoney))])])])
            })]], 2)])]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {ref: "page", attrs: {allpage: t.TotalPage}})], 1)])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", [t._v("用户类型")]), t._v(" "), a("th", [t._v("投注金额")]), t._v(" "), a("th", [t._v("中奖金额")]), t._v(" "), a("th", [t._v("返点金额")]), t._v(" "), a("th", [t._v("活动礼金")]), t._v(" "), a("th", [t._v("投注人数")]), t._v(" "), a("th", [t._v("盈利")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "pageNav", attrs: {id: "pageNav"}}, [a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.allpage > 1,
                    expression: "allpage>1"
                }], staticClass: "pagination"
            }, [a("li", {
                directives: [{name: "show", rawName: "v-show", value: t.current > 1, expression: "current > 1"}],
                on: {
                    click: function (e) {
                        t.current-- && t.goto(t.current)
                    }
                }
            }, [a("a", [t._v("上一页")])]), t._v(" "), t.current > 4 ? [a("li", {
                on: {
                    click: function (e) {
                        t.goto(1)
                    }
                }
            }, [a("a", [t._v("首页")])]), t._v(" "), t._m(0)] : t._e(), t._v(" "), t._l(t.pages, function (e) {
                return a("li", {
                    key: e, class: {active: t.current == e}, on: {
                        click: function (a) {
                            t.goto(e)
                        }
                    }
                }, [a("a", [t._v(t._s(e))])])
            }), t._v(" "), t.allpage > 5 && t.allpage != t.current ? [t.current < t.allpage - 2 ? a("li", [a("a", [t._v("...")])]) : t._e(), t._v(" "), a("li", {
                on: {
                    click: function (e) {
                        t.goto(t.allpage)
                    }
                }
            }, [a("a", [t._v("尾页")])])] : t._e(), t._v(" "), a("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.allpage != t.current && 0 != t.allpage,
                    expression: "allpage != current && allpage != 0 "
                }], on: {
                    click: function (e) {
                        t.current++ && t.goto(t.current++)
                    }
                }
            }, [a("a", [t._v("下一页")])])], 2)])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("a", [t._v("...")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "footer mgt40"}, [a("div", {staticClass: "ftadCon"}, [a("div", {staticClass: "container"}, [a("ul", {staticClass: "ftad fix"}, [a("li", [a("a", {
                attrs: {
                    id: "dafaCloud",
                    href: t.s.CloudUrl,
                    target: "_blank"
                }
            }, [t._m(0), t._v(" "), t._m(1)])]), t._v(" "), a("li", [t._m(2), t._v(" "), a("ul", {staticClass: "serviceExperience"}, [a("li", [t._v("昨日充值到账平均时间\n              "), t._m(3), t._v(" "), a("em", [t._v(t._s(t.ServiceTime.RechargeTime))]), a("i", [t._v("秒")])]), t._v(" "), a("li", [t._v("昨日提现到账平均时间\n              "), t._m(4), t._v(" "), a("em", {attrs: {id: "timer"}}, [t._v(t._s(t.ServiceTime.WithdrawTime))]), a("i", [t._v("秒")])])])]), t._v(" "), t._m(5)])])]), t._v(" "), a("div", {staticClass: "container _about aboutText"}, [a("p", {staticClass: "fix"}, [t._l(t.$store.state.FooterConfig, function (e) {
                return [a("a", {
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/about", query: {ID: e.ID}})
                        }
                    }
                }, [t._v(t._s(e.Title))]), t._v("|")]
            })], 2), t._v(" "), a("p", {staticClass: "copyright"}, [t._v("Copyright © "), a("span", {staticClass: "siteName"}, [t._v(t._s(t.s.SiteConfig.Name))]), t._v(" Reserved | 18+")])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("p", [t._v("技术支持"), a("i", [t._v("Technical support")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "technicalSupport fix"}, [a("img", {
                attrs: {
                    src: "http://imagess-google.com/test/../system/common/other/dafayun.png",
                    alt: "大发云"
                }
            }), t._v(" "), a("p", [t._v("\n                大发云系统\n                "), a("br"), t._v(" 专业的彩票系统平台\n              ")]), t._v(" "), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("p", [t._v("服务体验"), a("i", [t._v("Service experience")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("p", {staticClass: "footBar"}, [a("span", {staticClass: "s1"})])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("p", {staticClass: "footBar"}, [a("span", {staticClass: "s2"})])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("p", [t._v("充值方式"), a("i", [t._v("Recharge method")])]), t._v(" "), a("div", {staticClass: "rechargeMethod"}, [a("i", {staticClass: "wechat"}), a("i", {staticClass: "alipay"}), a("i", {staticClass: "cup"})])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [t._m(0), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("邮箱：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Mail",
                    arg: "Mail"
                }, {name: "model", rawName: "v-model", value: t.Mail, expression: "Mail", arg: "Mail"}],
                staticClass: "userInput",
                attrs: {tag: "邮箱", placeholder: "请输入您要绑定的邮箱地址", type: "text"},
                domProps: {value: t.Mail},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Mail = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Mail.isPass,
                    message: t.va.Mail.message
                }
            })], 1), t._v(" "), a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:MailCode",
                    arg: "MailCode"
                }, {name: "model", rawName: "v-model", value: t.MailCode, expression: "MailCode", arg: "MailCode"}],
                staticClass: "userInput",
                attrs: {tag: "验证码", placeholder: "输入验证码", type: "text"},
                domProps: {value: t.MailCode},
                on: {
                    input: function (e) {
                        e.target.composing || (t.MailCode = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.MailCode.isPass,
                    message: t.va.MailCode.message
                }
            }), t._v(" "), a("span", {staticClass: "btn SendCode"}, [a("a", {
                staticClass: "ClickShade",
                on: {click: t.postMsg}
            }, [t._v(t._s(t.reTime))])])], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("ul", {staticClass: "queue"}, [a("li", {staticClass: "now"}, [a("span", [t._v("绑定新邮箱")]), a("i")]), a("li", [a("span", [t._v("完成")]), a("i")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "_citys"}, [a("span", {
                staticClass: "cColse",
                attrs: {title: "关闭"},
                on: {click: t.close}
            }, [t._v("×")]), t._v(" "), a("ul", {staticClass: "_citys0"}, [a("li", {
                class: {citySel: "省" == t.defaultName},
                on: {
                    click: function (e) {
                        t.selName("省")
                    }
                }
            }, [t._v("省份")]), t._v(" "), a("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.CityArr,
                    expression: "CityArr"
                }], class: {citySel: "市" == t.defaultName}, on: {
                    click: function (e) {
                        t.selName("市")
                    }
                }
            }, [t._v("城市")])]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "省" == t.defaultName,
                    expression: "defaultName=='省'"
                }], staticClass: "_citys1"
            }, t._l(t.ProvinceArr, function (e) {
                return a("a", {
                    class: {AreaS: t.Province == e.name}, on: {
                        click: function (a) {
                            t.setProvin(e.name)
                        }
                    }
                }, [t._v(t._s(e.name))])
            })), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "市" == t.defaultName,
                    expression: "defaultName=='市'"
                }], staticClass: "_citys1"
            }, t._l(t.CityArr, function (e) {
                return a("a", {
                    class: {AreaS: t.City == e.name}, on: {
                        click: function (a) {
                            t.setCity(e.name)
                        }
                    }
                }, [t._v(t._s(e.name))])
            }))])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "maintainCon"}, [t.$store.state.Maintain ? a("div", {staticClass: "errorContent fix"}, [a("div", {staticClass: "maintain"}, [a("div", {staticClass: "left"}, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + "/system/pc/error/error.png",
                    alt: "",
                    width: "130",
                    height: "87"
                }
            })]), t._v(" "), a("div", {staticClass: "right"}, [a("h1", [t._v("系统维护中")]), t._v(" "), a("p", [t._v("每一次简单的维护\n          "), a("br"), t._v("都是为了给您带来更好的服务\n          "), a("br"), t._v("预计于 "), a("em", [t._v(t._s(t.$store.state.Maintain.FinishTime))]), t._v("维护完成")]), t._v(" "), a("router-link", {
                staticClass: "errorService",
                attrs: {to: "/service"}
            }, [t._v("在线客服")])], 1)])]) : t._e()])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "mobileCon"}, [a("div", {
                staticClass: "container mobile",
                attrs: {id: "port"}
            }, [a("div", {
                staticClass: "mobileSlide layer",
                attrs: {"data-depth": "0.1"}
            }, [a("div", {staticClass: "animate"}, [a("div", {staticClass: "slideTxtBox"}, [a("div", {staticClass: "bd"}, [a("ul", t._l(t.imgLlist, function (e, s) {
                return a("li", {class: {ShowAuto: t.vShow == s}}, [a("img", {
                    attrs: {
                        src: t.$store.state.constant.ImgHost + "/system/pc/mobile/" + e + ".png",
                        alt: ""
                    }
                })])
            }))])])])]), t._v(" "), a("div", {staticClass: "mobileText"}, [a("h1", [t._v(t._s(t.siteName))]), t._v(" "), a("h2", [t._v(t._s(t.hostName))]), t._v(" "), a("img", {
                staticClass: "cutFinger",
                attrs: {src: t.$store.state.constant.ImgHost + "/system/pc/mobile/finger.png", alt: ""}
            }), t._v(" "), a("div", {staticClass: "ios", attrs: {id: "ios"}}), t._v(" "), a("div", {
                staticClass: "android",
                attrs: {id: "android"}
            })]), t._v(" "), a("div", {staticClass: "dontTouch"})])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "queue"}, [t.FindShow ? a("li", {staticClass: "right"}, [a("span", [t._v("选择验证方式")]), a("i")]) : t._e(), t._v(" "), t._m(0), a("li", [a("span", [t._v(t._s(t.nTitle))]), a("i")]), t._m(1)]), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("已绑定手机：")]), t._v(" "), a("input", {
                staticClass: "userInput",
                attrs: {type: "text", disabled: "disabled", placeholder: t.Mobile}
            })]), t._v(" "), a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("输入验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:SmsCode",
                    arg: "SmsCode"
                }, {name: "model", rawName: "v-model", value: t.SmsCode, expression: "SmsCode", arg: "SmsCode"}],
                staticClass: "userInput",
                attrs: {tag: "验证码", type: "text", placeholder: "请输入验证码"},
                domProps: {value: t.SmsCode},
                on: {
                    input: function (e) {
                        e.target.composing || (t.SmsCode = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.SmsCode.isPass,
                    message: t.va.SmsCode.message
                }
            }), t._v(" "), a("span", {staticClass: "btn SendCode"}, [a("a", {
                staticClass: "ClickShade",
                on: {click: t.postMsg}
            }, [t._v(t._s(t.reTime))])])], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("验证手机")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("\r\n      会员管理\r\n      "), t._l(t.LowerNameArr, function (e, s) {
                return t.LowerNameArr.length ? a("a", [t._v(" > "), a("span", {
                    on: {
                        click: function (e) {
                            t.ReturnBack(s)
                        }
                    }
                }, [t._v(t._s(e.LowerName))])]) : t._e()
            })], 2), t._v(" "), a("div", {staticClass: "userMain mgb10 agentMember"}, [a("div", {
                staticClass: "searchOpt"
            }, [t._v("\r\n        账号：\r\n        "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.SearchName,
                    expression: "SearchName",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput w90",
                attrs: {type: "text", name: "a"},
                domProps: {value: t.SearchName},
                on: {
                    change: function (e) {
                        t.SearchName = e.target.value
                    }
                }
            }), t._v("   用户类型：\r\n        "), a("ins", {staticClass: "selectIcon"}, [a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Selected,
                    expression: "Selected"
                }], staticClass: "userSelect", attrs: {name: "f"}, on: {
                    change: function (e) {
                        var a = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        });
                        t.Selected = e.target.multiple ? a : a[0]
                    }
                }
            }, [a("option", {attrs: {value: "-1"}}, [t._v("全部")]), t._v(" "), a("option", {attrs: {value: "1"}}, [t._v("代理")]), t._v(" "), a("option", {attrs: {value: "0"}}, [t._v("玩家")])]), a("em")]), t._v(" \r\n        "), a("a", {
                staticClass: "submitBtn",
                on: {
                    click: function (e) {
                        t.SearchByType()
                    }
                }
            }, [t._v("搜索")])]), t._v(" "), a("div", {staticClass: "accountDetail"}, [a("table", {
                staticClass: "ty_table3",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }, [t._m(0), t._v(" "), a("tbody", {attrs: {id: "fudetail_list"}}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.UserName))]), t._v(" "), a("td", [t._v(t._s(e.UserType))]), t._v(" "), a("td", [Number(e.LowerCount) ? a("a", {
                    staticClass: "alink xiaji",
                    on: {
                        click: function (a) {
                            t.SeeLower(e.UserId, e.UserName)
                        }
                    }
                }, [t._v(t._s(e.LowerCount))]) : a("ins", [t._v(t._s(e.LowerCount))])]), t._v(" "), a("td", [t._v(t._s(e.Balance))]), t._v(" "), a("td", [t._v(t._s(e.LoginTime))]), t._v(" "), a("td", [a("div", {staticClass: "manage"}, [a("a", {
                    attrs: {title: "投注明细"},
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/agentBetRecord", query: {username: e.UserName}})
                        }
                    }
                }, [a("i", {staticClass: "iconfont"}, [t._v("")])]), t._v(" "), a("a", {
                    attrs: {title: "交易明细"},
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/agentBillRecord", query: {username: e.UserName}})
                        }
                    }
                }, [a("i", {staticClass: "iconfont"}, [t._v("")])]), t._v(" "), a("a", {
                    attrs: {title: "查看返点"},
                    on: {
                        click: function (a) {
                            t.SeeRebate(e.UserId)
                        }
                    }
                }, [a("i", {staticClass: "iconfont"}, [t._v("")])])])])])
            })]], 2)]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {
                ref: "page",
                attrs: {allpage: t.TotalPage}
            })], 1)])])])]), t._v(" "), a("DetailCode", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.DetailShow,
                    expression: "DetailShow"
                }], attrs: {ArrD: t.DetailList, setSpan: !1}
            })], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", [t._v("用户类型")]), t._v(" "), a("th", [t._v("下级人数")]), t._v(" "), a("th", [t._v("余额")]), t._v(" "), a("th", [t._v("最后登录")]), t._v(" "), a("th", [t._v("操作")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("投注明细")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("ul", {
                staticClass: "todayView mgb10",
                staticStyle: {"text-align": "left"}
            }, [a("em", [t._v("账号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.SearchName,
                    expression: "SearchName",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput",
                attrs: {type: "text", placeholder: "下级投注查询"},
                domProps: {value: t.SearchName},
                on: {
                    change: function (e) {
                        t.SearchName = e.target.value
                    }
                }
            }), t._v(" \r\n        "), a("a", {
                staticClass: "submitBtn", on: {
                    click: function (e) {
                        t.SearchByName()
                    }
                }
            }, [t._v("搜索")])]), t._v(" "), a("RecordState"), t._v(" "), a("div", {staticClass: "searchDetail"}, [a("table", [t._m(0), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.UserName))]), t._v(" "), a("td", [t._v(t._s(e.LotteryName))]), t._v(" "), a("td", [t._v(t._s(e.IssueNo))]), t._v(" "), a("td", [a("div", {staticClass: "betNum"}, [t._v(t._s(e.BetNum || "--"))]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkLength(e.BetNum),
                        expression: "checkLength(x.BetNum)"
                    }], staticClass: "NumLink", staticStyle: {color: "#4aa9bb"}, on: {
                        click: function (a) {
                            t.showBetContent("投注内容", e.BetNum)
                        }
                    }
                }, [t._v("[详情]")])]), t._v(" "), a("td", [t._v(t._s(e.BetMoney))]), t._v(" "), a("td", [a("div", {staticClass: "betNum"}, [t._v(t._s(e.OpenNum || "--"))]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkLength(e.OpenNum),
                        expression: "checkLength(x.OpenNum)"
                    }], staticClass: "NumLink", staticStyle: {color: "#4aa9bb"}, on: {
                        click: function (a) {
                            t.showBetContent("投注内容", e.OpenNum)
                        }
                    }
                }, [t._v("[详情]")])]), t._v(" "), a("td", {style: "color:" + t.SelectColor(e.State)}, [t._v(t._s(e.State))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [a("a", {
                    staticClass: "alink",
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/betDetail", query: {ID: e.ID, UID: e.UserId}})
                        }
                    }
                }, [t._v("查看")])])])
            })]], 2)])]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {ref: "page", attrs: {allpage: t.TotalPage}})], 1)]), t._v(" "), t._m(1)], 1)])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("彩种")]), t._v(" "), a("th", [t._v("期号")]), t._v(" "), a("th", [t._v("投注内容")]), t._v(" "), a("th", [t._v("投注金额")]), t._v(" "), a("th", [t._v("开奖号码")]), t._v(" "), a("th", [t._v("奖金状态")]), t._v(" "), a("th", [t._v("投注时间")]), t._v(" "), a("th", [t._v("操作项")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mgt15"}, [a("p", [a("i"), t._v("温馨提示：投注明细最多只保留7天。\r\n        ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container registerPage"}, [a("h3", {staticClass: "reg_tit"}, [t._v("用户登录")]), t._v(" "), a("p", {staticClass: "reg_small"}), t._v(" "), a("ul", {staticClass: "submitContent mglr30 regMain"}, [a("li", [a("span", [t._v("账 号：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:UserName",
                    arg: "UserName"
                }, {name: "model", rawName: "v-model", value: t.UserName, expression: "UserName", arg: "UserName"}],
                staticClass: "userInput",
                attrs: {tag: "帐号", type: "text", autocomplete: "off"},
                domProps: {value: t.UserName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.UserName = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.UserName.isPass,
                    message: t.va.UserName.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("密 码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Password",
                    value: [{reg: /^[\w!@#$%^&*.]{6,16}$/}],
                    expression: "[{reg:/^[\\w!@#$%^&*.]{6,16}$/}]",
                    arg: "Password"
                }, {name: "model", rawName: "v-model", value: t.Password, expression: "Password", arg: "Password"}],
                staticClass: "userInput",
                attrs: {tag: "密码", regMsg: "密码应为6-16位字符", type: "password", autocomplete: "off"},
                domProps: {value: t.Password},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Password = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Password.isPass,
                    message: t.va.Password.message
                }
            })], 1), t._v(" "), t.IcodeShow ? a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:ImgCode",
                    arg: "ImgCode"
                }, {name: "model", rawName: "v-model", value: t.ImgCode, expression: "ImgCode", arg: "ImgCode"}],
                staticClass: "userInput",
                attrs: {tag: "验证码", type: "text"},
                domProps: {value: t.ImgCode},
                on: {
                    input: function (e) {
                        e.target.composing || (t.ImgCode = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.ImgCode.isPass,
                    message: t.va.ImgCode.message
                }
            }), t._v(" "), a("img", {
                staticClass: "codeImg",
                attrs: {src: t.imgSrc, alt: ""},
                on: {click: t.imgUrl}
            })], 1) : t._e(), t._v(" "), a("li", {staticStyle: {"margin-top": "23px"}}, [a("span"), t._v(" "), a("a", {
                staticClass: "mainColorBtn submitBtnBig ClickShade",
                on: {click: t.login}
            }, [t._v("登 录")]), t._v(" "), a("router-link", {
                staticClass: "forgetPwd",
                attrs: {to: "/forgetPwd?Q=ResetPwd"}
            }, [t._v("忘记密码?")])], 1)])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("今日盈亏")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {attrs: {id: "PLhtml"}}, [a("div", {staticClass: "plCon fix"}, [a("div", {staticClass: "balance"}, [a("span", [a("i"), t._v(t._s(t.ArrObj.Balance))]), t._v(" "), a("p", [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v("余额\r\n                    "), a("router-link", {attrs: {to: "/ebankPay"}}, [t._v("充值")]), a("router-link", {attrs: {to: "/withdraw"}}, [t._v("提现")]), a("router-link", {attrs: {to: "/billRecord"}}, [t._v("交易记录")])], 1)]), t._v(" "), a("div", {staticClass: "plTotal"}, [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("div", {staticClass: "detail"}, [a("p", [t._v("盈亏总额（元）")]), t._v(" "), a("em", [a("i"), t._v(t._s(t.ArrObj.AllProfitLoss))])])]), t._v(" "), t._m(0)]), t._v(" "), a("ul", {staticClass: "plMore"}, [a("li", [a("em", [t._v(t._s(t._f("filNum")(t.ArrObj.Betting)))]), a("span", [t._v("投注金额")])]), t._v(" "), a("li", [a("em", [t._v(t._s(t._f("filNum")(t.ArrObj.BonusMoney)))]), a("span", [t._v("中奖金额")])]), t._v(" "), a("li", [a("em", [t._v(t._s(t._f("filNum")(t.ArrObj.Activity)))]), a("span", [t._v("活动礼金")])]), t._v(" "), a("li", [a("em", [t._v(t._s(t._f("filNum")(t.ArrObj.Rebate)))]), a("span", [t._v("返点金额")])]), t._v(" "), a("li", [a("em", [t._v(t._s(t._f("filNum")(t.ArrObj.Recharge)))]), a("span", [t._v("充值金额")])]), t._v(" "), a("li", [a("em", [t._v(t._s(t._f("filNum")(t.ArrObj.Withdraw)))]), a("span", [t._v("提现金额")])])])])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "calculate"}, [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("div", {staticClass: "detail"}, [a("p", [t._v("盈亏计算公式")]), t._v(" "), a("ins", [t._v("中奖-投注+活动+返点")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "checkedListCon"}, [a("div", {staticClass: "checkedList"}, [a("table", [a("tbody", t._l(t.basket, function (e, s) {
                return a("tr", [a("td", [a("i", {staticClass: "order_type"}, [t._v("\n              " + t._s(t.getTag(e).slice(0, t.detailLength)) + "\n              "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getTag(e).length > t.detailLength,
                        expression: "getTag(bet).length > detailLength"
                    }]
                }, [t._v("...")])]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getTag(e).length > t.detailLength,
                        expression: "getTag(bet).length > detailLength"
                    }], staticClass: "orderDetail", on: {
                        click: function (a) {
                            t.showBetDetail(t.getTag(e))
                        }
                    }
                }, [t._v("详细")])]), t._v(" "), a("td", [t._v(t._s(e.betting_count) + "注")]), t._v(" "), a("td", [t._v(t._s(e.graduation_count) + "倍")]), t._v(" "), a("td", [t._v(t._s(t.unitStr(e.betting_model)))]), t._v(" "), a("td", [t._v("可中金额"), a("i", {staticClass: "orderMoney"}, [t._v(t._s(t.getExpectAward(e))), a("i", [t._v("元")])])]), t._v(" "), a("td"), a("td", [a("i", {
                    directives: [{
                        name: "chaseBack",
                        rawName: "v-chaseBack"
                    }], staticClass: "orderCancel", on: {
                        click: function (e) {
                            t.deleteBet(s)
                        }
                    }
                }, [t._v("删除")])])])
            }))])]), t._v(" "), a("p", {staticClass: "betTotal"}, [t._v("\n    方案注数 "), a("em", [t._v(t._s(t.basketBets))]), t._v(" 注，金额 "), a("i", [t._v("￥" + t._s(t.basketTotal))]), t._v("元\n    "), t.noNeedChase ? t._e() : [a("input", {
                ref: "notChase",
                attrs: {type: "radio", name: "buyType", id: "radio1"},
                domProps: {checked: !t.isChase},
                on: {
                    click: function (e) {
                        t.changeIsChase(!1)
                    }
                }
            }), t._v(" "), a("label", {
                staticClass: "radioLabel",
                attrs: {for: "radio1"}
            }, [t._v("我要自购")]), t._v(" "), a("input", {
                ref: "chase",
                attrs: {type: "radio", name: "buyType", id: "radio2"},
                domProps: {checked: t.isChase},
                on: {
                    click: function (e) {
                        t.changeIsChase(!0)
                    }
                }
            }), t._v(" "), a("label", {
                staticClass: "radioLabel",
                attrs: {for: "radio2"}
            }, [t._v("我要追号")])]], 2), t._v(" "), a("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isChase,
                    expression: "!isChase"
                }], staticClass: "betBtn", on: {click: t.confirmBet}
            }, [t._v("马上投注")])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("div", {staticClass: "betNavCon"}, [a("ul", {
                staticClass: "betNav fix",
                style: {
                    width: t.gridWidth * t.LotteryList.length + "px",
                    transform: "translateX(" + -t.viewport[0] * t.gridWidth + "px)",
                    "-webkit-transform": "translateX(" + -t.viewport[0] * t.gridWidth + "px)"
                }
            }, t._l(t.LotteryList, function (e) {
                return a("li", {
                    directives: [{name: "chaseBack", rawName: "v-chaseBack"}, {
                        name: "clickShade",
                        rawName: "v-clickShade"
                    }], class: {active: e.LotteryName === t.nowLottery}, on: {
                        click: function (a) {
                            t.changeLottery(e.LotteryCode)
                        }
                    }
                }, [t._v(t._s(e.LotteryName))])
            }))]), t._v(" "), a("a", {
                staticClass: "betNavtab left", on: {
                    click: function (e) {
                        t.moveNav(-1)
                    }
                }
            }, [t._m(0)]), t._v(" "), a("a", {
                staticClass: "betNavtab right", on: {
                    click: function (e) {
                        t.moveNav(1)
                    }
                }
            }, [t._m(1)])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", [a("em")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", [a("em")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return void 0 !== t.isPass ? a("em", {class: t.isPass ? "verifyRight" : "verifyWrong"}, [a("i"), t._v(t._s(t.message))]) : t._e()
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("交易记录")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("RecordState"), t._v(" "), a("div", {staticClass: "searchDetail"}, ["GetBillRecord" === t.ajaxData.Action ? a("table", [t._m(0), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.SerialNum))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.TypeName))]), t._v(" "), a("td", [t._v(t._s(e.InMoney))]), t._v(" "), a("td", [t._v(t._s(e.OutMoney))]), t._v(" "), a("td", [t._v(t._s(e.Balance))]), t._v(" "), a("td", [t._v(t._s(e.Remarks))])])
            })]], 2)]) : t._e(), t._v(" "), "GetRechargeRecord" === t.ajaxData.Action ? a("table", [t._m(1), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.SerialNum))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.ApplyMoney))]), t._v(" "), a("td", [t._v(t._s(e.InMoney))]), t._v(" "), a("td", [t._v(t._s(e.TypeName))]), t._v(" "), a("td", [t._v(t._s(e.State))])])
            })]], 2)]) : t._e(), t._v(" "), "GetWithdrawRecord" === t.ajaxData.Action ? a("table", [t._m(2), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s(e.SerialNum))]), t._v(" "), a("td", [t._v(t._s(e.BankName))]), t._v(" "), a("td", [t._v(t._s(e.BankNum))]), t._v(" "), a("td", [t._v(t._s(e.RealName))]), t._v(" "), a("td", [t._v(t._s(e.OutMoney))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.State))])])
            })]], 2)]) : t._e()]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {ref: "page", attrs: {allpage: t.TotalPage}})], 1)]), t._v(" "), t._m(3)], 1)])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("账号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("时间")]), t._v(" "), a("th", [t._v("摘要")]), t._v(" "), a("th", [t._v("收入金额")]), t._v(" "), a("th", [t._v("支出金额")]), t._v(" "), a("th", [t._v("可用余额")]), t._v(" "), a("th", [t._v("备注")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("流水号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("发起时间")]), t._v(" "), a("th", [t._v("充值金额")]), t._v(" "), a("th", [t._v("到账金额")]), t._v(" "), a("th", [t._v("充值方式")]), t._v(" "), a("th", [t._v("状态")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", [t._v("流水号")]), t._v(" "), a("th", {attrs: {colspan: "1"}}, [t._v("提现银行")]), t._v(" "), a("th", [t._v("银行卡号")]), t._v(" "), a("th", [t._v("姓名")]), t._v(" "), a("th", [t._v("提现金额")]), t._v(" "), a("th", [t._v("提现时间")]), t._v(" "), a("th", [t._v("状态")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mgt15"}, [a("p", [a("i"), t._v("温馨提示：交易记录最多只保留7天。\n              ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("下级开户")]), t._v(" "), a("div", {staticClass: "userMain openAgent"}, [a("div", {staticClass: "newTab"}, [a("router-link", {attrs: {to: "/manageInvite"}}, [t._v("下级开户")]), t._v(" "), a("router-link", {
                staticClass: "curr",
                attrs: {to: "/manageIcode"}
            }, [t._v("邀请码管理")])], 1), t._v(" "), a("div", {staticClass: "TabLi"}, [a("ul", {staticClass: "searchFirst"}, [a("li", [a("span", [t._v("开户类型：")]), t._v(" "), a("router-link", {
                staticClass: "userSearch",
                attrs: {to: "/manageIcode/AgentCode"}
            }, [t._v("代理")]), t._v(" "), a("router-link", {
                staticClass: "userSearch active",
                attrs: {to: "/manageIcode/memberCode"}
            }, [t._v("玩家")])], 1)]), t._v(" "), a("Icode", {attrs: {CodeType: t.CodeType}})], 1)])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "textareaNumber"}, [a("div", {staticClass: "numberImport"}, [a("a", {
                staticClass: "submitBtn",
                on: {click: t.uploadNoteBet}
            }, [t._v("导入注单")]), t._v(" "), a("input", {
                ref: "uploadItem",
                staticStyle: {display: "none"},
                attrs: {type: "file"}
            }), t._v(" "), a("a", {staticClass: "selectEg"}, [t._v("查看标准格式样本\r\n    ")]), t._v(" "), a("div", {staticClass: "EgContent"}, [a("ul", t._l(t.exampleArr, function (e) {
                return a("li", [t._v(t._s(e))])
            }))])]), t._v(" "), a("div", {staticClass: "fileUpload"}), t._v(" "), a("div", {
                directives: [{
                    name: "chaseBack",
                    rawName: "v-chaseBack"
                }], staticClass: "numberTextarea", on: {click: t.hideTip}
            }, [a("textarea", {
                directives: [{name: "model", rawName: "v-model", value: t.betStr, expression: "betStr"}],
                ref: "textarea",
                staticClass: "betNote",
                domProps: {value: t.betStr},
                on: {
                    blur: t.showTip, input: [function (e) {
                        e.target.composing || (t.betStr = e.target.value)
                    }, t.whenInput]
                }
            }), t._v(" "), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.inputting,
                    expression: "!inputting"
                }], staticClass: "noteTip"
            }, [t._v("\r\n      说明：\r\n      "), a("br"), t._v(' 1、请参照"标准格式样本"格式录入或上传方案。\r\n      '), a("br"), t._v(" 2、每一注号码之间请使用空格分开，每注之间以回车、逗号或分号进行分隔\r\n      "), a("br"), t._v(" 3、文件格式必须是.txt格式。\r\n      "), a("br"), t._v(" 4、文件较大时会导致上传时间较长，请耐心等待！\r\n      "), a("br"), t._v(" 5、导入文本内容后将覆盖文本框中现有的内容。\r\n    ")])]), t._v(" "), a("div", {staticClass: "numberBtn"}, [a("a", {
                staticClass: "submitBtn",
                on: {click: t.deleteWrongItem}
            }, [t._v("删除错误项")]), t._v(" \r\n    "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.checkFormat}
            }, [t._v("检查格式是否正确")]), t._v(" \r\n    "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.clearNoteBet}
            }, [t._v("清空文本框")])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [5 === t.cols ? a("div", [a("table", {staticClass: "chaseList _col5"}, [a("tbody", [a("tr", [a("th", [t._v("序号")]), t._v(" "), a("th", [a("input", {
                attrs: {
                    type: "checkbox",
                    checked: ""
                }, on: {
                    change: function (e) {
                        t.changeAllSchemeCheck(e.target.checked)
                    }
                }
            }), t._v("追号期次")]), t._v(" "), a("th", [t._v("倍数")]), t._v(" "), a("th", [t._v("金额")]), t._v(" "), a("th", [t._v("预期开奖时间")])])])]), t._v(" "), a("div", {staticClass: "chaseListCon"}, [a("table", {staticClass: "chaseList generalTable _col5"}, [a("tbody", t._l(t.renderScheme, function (e, s) {
                return a("tr", [a("td", [t._v(t._s(s + 1))]), t._v(" "), a("td", [a("input", {
                    attrs: {type: "checkbox"},
                    domProps: {checked: e.checked},
                    on: {
                        change: function (e) {
                            t.changeSchemeCheck(s, e.target.checked)
                        }
                    }
                }), t._v(t._s(e.issueNo) + "\r\n                "), a("em", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.issueNo === t.NowIssue,
                        expression: "schemeItem.issueNo === NowIssue"
                    }]
                }, [t._v("(当前期)")])]), t._v(" "), a("td", [a("input", {
                    attrs: {type: "tel"},
                    domProps: {value: e.multiple},
                    on: {
                        change: function (e) {
                            t.changeMultiple(s, e.target)
                        }
                    }
                }), t._v(" 倍")]), t._v(" "), a("td", [t._v("￥" + t._s(e.money) + "元")]), t._v(" "), a("td", [t._v(t._s(e.time))])])
            }))])])]) : t._e(), t._v(" "), 7 === t.cols ? a("div", [a("table", {staticClass: "chaseList _col7"}, [a("tbody", [a("tr", [a("th", [t._v("序号")]), t._v(" "), a("th", [a("input", {
                attrs: {
                    type: "checkbox",
                    checked: ""
                }, on: {
                    change: function (e) {
                        t.changeAllSchemeCheck(e.target.checked)
                    }
                }
            }), t._v("追号期次")]), t._v(" "), a("th", [t._v("倍数")]), t._v(" "), a("th", [t._v("金额")]), t._v(" "), a("th", [t._v("奖金")]), t._v(" "), a("th", [t._v("预期盈利金额")]), t._v(" "), a("th", [t._v("预期盈利利率")])])])]), t._v(" "), a("div", {staticClass: "chaseListCon"}, [a("table", {staticClass: "chaseList _col7"}, [a("tbody", t._l(t.renderScheme, function (e, s) {
                return a("tr", [a("td", [t._v(t._s(s + 1))]), t._v(" "), a("td", [a("input", {
                    attrs: {type: "checkbox"},
                    domProps: {checked: e.checked},
                    on: {
                        change: function (e) {
                            t.changeSchemeCheck(s, e.target.checked)
                        }
                    }
                }), t._v(t._s(e.issueNo) + "\r\n                       "), a("em", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.issueNo === t.NowIssue,
                        expression: "schemeItem.issueNo === NowIssue"
                    }]
                }, [t._v("(当前期)")])]), t._v(" "), a("td", [a("input", {
                    attrs: {type: "tel"},
                    domProps: {value: e.multiple},
                    on: {
                        change: function (e) {
                            t.changeMultiple(s, e.target)
                        }
                    }
                }), t._v(" 倍\r\n            ")]), t._v(" "), a("td", [t._v("￥" + t._s(e.money) + "元")]), t._v(" "), a("td", [t._v("￥" + t._s(e.award) + "元")]), t._v(" "), a("td", [t._v(t._s(e.profit) + "元")]), t._v(" "), a("td", [t._v(t._s(e.profitRate))])])
            }))])])]) : t._e()])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c || e;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "iconLoadingCon",
                staticStyle: {transform: "scale(.6)"}
            }, [a("img", {
                staticClass: "loadingImg",
                attrs: {
                    "data-v-3bf35cfc": "",
                    src: "//imagess-google.com/system/mobile/lottery/loadingMobile.gif",
                    alt: ""
                }
            })])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("个人信息")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {
                staticClass: "newTab",
                attrs: {id: "newTab"}
            }, [a("router-link", {
                staticClass: "curr",
                attrs: {to: "/personalInfo"}
            }, [t._v("个人资料")]), t._v(" "), a("router-link", {attrs: {to: "/personalLevel"}}, [t._v("等级头衔")])], 1), t._v(" "), a("div", {staticClass: "fix tapli"}, [a("div", {staticClass: "selectHeadImg"}, [a("img", {
                staticClass: "headImg",
                attrs: {
                    src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + t.$store.state.UserPhoto,
                    width: "100",
                    height: "100",
                    alt: ""
                }
            }), t._v(" "), a("a", {on: {click: t.imageShow}}, [t._v("修改头像")])]), t._v(" "), a("ul", {staticClass: "personalInfo submitContent"}, [a("li", [a("span", [t._v("账号：")]), a("ins", [t._v(t._s(t.$store.state.UserName))])]), t._v(" "), a("li", [a("span", [t._v("等级：")]), "-1" != Number(t.$store.state.UserUpGradeBonus.Grade) ? a("ins", [t._v("VIP" + t._s(t.$store.state.UserUpGradeBonus.Grade))]) : a("ins", [t._v("测试组")])]), t._v(" "), a("li", [a("span", [t._v("头衔：")]), a("ins", [t._v(t._s(t.getUserTitle()))])]), t._v(" "), a("li", [a("span", [t._v("昵称：")]), t._v(" "), t.$store.state.UserNickName ? [t._v(t._s(t.$store.state.UserNickName))] : a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:NickName.CanNull",
                    value: [{reg: /^[\u4e00-\u9fa5]{1,5}$/}],
                    expression: "[{reg:/^[\\u4e00-\\u9fa5]{1,5}$/}]",
                    arg: "NickName",
                    modifiers: {CanNull: !0}
                }, {name: "model", rawName: "v-model", value: t.NickName, expression: "NickName", arg: "NickName"}],
                staticClass: "userInput",
                attrs: {regMsg: "请使用五位以内的汉字", tag: "昵称", placeholder: "昵称为1-5位汉字，设置后不能修改", type: "text"},
                domProps: {value: t.NickName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.NickName = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.NickName.isPass,
                    message: t.va.NickName.message
                }
            })], 2), t._v(" "), a("li", [a("span", [t._v("手机：")]), t._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Mobile,
                    expression: "Mobile"
                }],
                staticClass: "userInput",
                attrs: {type: "text", disabled: "disabled"},
                domProps: {value: t.Mobile},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Mobile = e.target.value)
                    }
                }
            }), t._v(" "), t.Mobile ? a("router-link", {
                attrs: {
                    notSubmit: "yes",
                    to: "/verifyMobile"
                }
            }, [t._v("修改")]) : a("router-link", {
                attrs: {
                    notSubmit: "yes",
                    to: "/setMobile"
                }
            }, [t._v("绑定")])], 1), t._v(" "), a("li", [a("span", [t._v("邮箱：")]), t._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Mail,
                    expression: "Mail"
                }],
                staticClass: "userInput",
                attrs: {type: "text", disabled: "disabled"},
                domProps: {value: t.Mail},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Mail = e.target.value)
                    }
                }
            }), t._v(" "), t.Mail ? a("router-link", {
                attrs: {
                    notSubmit: "yes",
                    to: "/verifyMail"
                }
            }, [t._v("修改")]) : a("router-link", {
                attrs: {
                    notSubmit: "yes",
                    to: "/setMail"
                }
            }, [t._v("绑定")])], 1), t._v(" "), a("li", [a("span", [t._v("QQ：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:QQ.CanNull",
                    value: [{reg: /^\d{5,12}$/}],
                    expression: "[{reg:/^\\d{5,12}$/}]",
                    arg: "QQ",
                    modifiers: {CanNull: !0}
                }, {name: "model", rawName: "v-model", value: t.QQ, expression: "QQ", arg: "QQ"}],
                staticClass: "userInput",
                attrs: {regMsg: "QQ号为5-12位数字", tag: "QQ号码", type: "text"},
                domProps: {value: t.QQ},
                on: {
                    input: function (e) {
                        e.target.composing || (t.QQ = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.QQ.isPass,
                    message: t.va.QQ.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("性别：")]), t._v(" "), a("label", {
                class: {
                    radio_box: !0,
                    checked: 1 == t.Sex
                }, on: {
                    click: function (e) {
                        t.Sex = 1
                    }
                }
            }, [a("i"), t._v("男")]), t._v(" "), a("label", {
                class: {radio_box: !0, checked: 0 == t.Sex},
                on: {
                    click: function (e) {
                        t.Sex = 0
                    }
                }
            }, [a("i"), t._v("女")]), t._v(" "), a("label", {
                class: {radio_box: !0, checked: 2 == t.Sex},
                on: {
                    click: function (e) {
                        t.Sex = 2
                    }
                }
            }, [a("i"), t._v("保密")])]), t._v(" "), a("li", [a("span", [t._v("生日：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb_active: t.ShowA
                }, attrs: {name: "Year", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowA")
                    }
                }
            }, [t._v(t._s(t.TextA))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowA,
                    expression: "ShowA"
                }], attrs: {Arr: t.ArrA, ShowKey: "A", TopVal: t.TextA, WW: "73"}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowA = !0
                    }
                }
            })], 1), t._v(" "), a("div", {
                class: {diyselect: !0, sb_active: t.ShowB},
                attrs: {name: "Month", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowB")
                    }
                }
            }, [t._v(t._s(t.TextB))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowB,
                    expression: "ShowB"
                }], attrs: {Arr: t.ArrB, ShowKey: "B", TopVal: t.TextB, WW: "73"}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowB = !0
                    }
                }
            })], 1), t._v(" "), a("div", {
                class: {diyselect: !0, sb_active: t.ShowC},
                attrs: {name: "Date", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowC")
                    }
                }
            }, [t._v(t._s(t.TextC))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowC,
                    expression: "ShowC"
                }], attrs: {Arr: t.ArrC, ShowKey: "C", TopVal: t.TextC, WW: "73"}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowC = !0
                    }
                }
            })], 1)]), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn",
                attrs: {href: "javascript:;"},
                on: {click: t.vaSubmit}
            }, [t._v("保存")])])])])])]), t._v(" "), a("ImageList", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ImageShow,
                    expression: "ImageShow"
                }], attrs: {DImg: t.$store.state.UserPhoto}
            })], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "betRight"}, [a("div", {staticClass: "today box"}, [a("h3", [t._v("今日开奖")]), t._v(" "), a("div", {staticClass: "more"}, [a("router-link", {
                attrs: {
                    target: "_blank",
                    to: "/trendChart/" + t.$route.params.code
                }
            }, [t._v("走势图")]), t._v(" "), a("a", {
                on: {
                    click: function (e) {
                        t.OpenWin("/howtoplay/" + t.$route.params.code)
                    }
                }
            }, [t._v("玩法说明")])], 1), t._v(" "), "K3" !== t.LotteryType ? a("div", {staticClass: "ResultsList"}, [a("table", {
                staticClass: "ty_table_gameBet curr",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0", id: "fn_getoPenGame"}
            }, [t._m(0), t._v(" "), a("tbody", t._l(t.pastOpen, function (e) {
                return a("tr", [a("td", {staticClass: "c_green"}, [a("i", {staticClass: "o_qi"}, [t._v(t._s(e.IssueNo))])]), t._v(" "), a("td", [e.LotteryOpen.length < 15 ? [a("i", {staticClass: "numbers"}, [t._v(t._s(e.LotteryOpen))])] : t._e(), t._v(" "), e.LotteryOpen.length >= 15 ? [a("i", {staticClass: "numbers"}, [t._v(t._s(e.LotteryOpen.slice(0, 15)) + ".."), a("a", {
                    on: {
                        click: function (a) {
                            t.showResultDetail(e.LotteryOpen)
                        }
                    }
                }, [t._v("详情")])])] : t._e()], 2), t._v(" "), a("td", [t._v(t._s(e.OpenTime.split(" ")[1]))])])
            }))])]) : t._e(), t._v(" "), "K3" === t.LotteryType ? a("div", {staticClass: "ResultsList"}, [a("table", {
                staticClass: "ty_table_gameBet curr",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0", id: "fn_getoPenGame"}
            }, [t._m(1), t._v(" "), a("tbody", t._l(t.pastOpen, function (e) {
                return a("tr", [a("td", {staticClass: "c_green"}, [a("i", {staticClass: "o_qi"}, [t._v(t._s(e.IssueNo))])]), t._v(" "), a("td", [a("i", {staticClass: "numbers"}, [t._v(t._s(e.LotteryOpen))])]), t._v(" "), a("td", [t._v(t._s(t.getK3Sum(e.LotteryOpen)))]), t._v(" "), a("td", [a("em", {class: t.getK3SumType(e.LotteryOpen, "DX")[0]}, [t._v("\n                " + t._s(t.getK3SumType(e.LotteryOpen, "DX")[1]) + "\n              ")]), t._v(" "), a("em", {class: t.getK3SumType(e.LotteryOpen, "DS")[0]}, [t._v("\n                " + t._s(t.getK3SumType(e.LotteryOpen, "DS")[1]) + "\n              ")])])])
            }))])]) : t._e()]), t._v(" "), a("div", {staticClass: "mybet box"}, [a("h3", {
                class: {notSelect: "BetRecord" !== t.whichRecord}, on: {
                    click: function (e) {
                        t.toggleRecord("BetRecord")
                    }
                }
            }, [t._v("我的投注")]), t._v(" "), t.hasChase ? a("h3", {
                class: {notSelect: "ChaseRecord" !== t.whichRecord},
                on: {
                    click: function (e) {
                        t.toggleRecord("ChaseRecord")
                    }
                }
            }, [t._v("我的追号")]) : t._e(), t._v(" "), "BetRecord" === t.whichRecord ? a("table", {
                staticClass: "_mybetContent",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }, [a("tbody", [t._m(2), t._v(" "), t.BetRecord.length ? t._l(t.BetRecord, function (e) {
                return a("tr", [a("td", [e.url ? a("router-link", {attrs: {to: t.betRecordUrl(e.url)}}, [t._v("\n                    " + t._s(e.issueNo) + "\n                  ")]) : t._e(), t._v(" "), e.url ? t._e() : a("a", [t._v(t._s(e.issueNo))])], 1), t._v(" "), a("td", [t._v(t._s(e.normal_money))]), t._v(" "), a("td", {class: {bonus: !isNaN(+e.openState)}}, [t._v(t._s(e.openState))])])
            }) : t._e(), t._v(" "), t.BetRecord.length ? t._e() : [t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), t._m(7)]], 2)]) : t._e(), t._v(" "), "ChaseRecord" === t.whichRecord ? a("table", {
                staticClass: "_mybetContent",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }, [a("tbody", [t._m(8), t._v(" "), t.ChaseRecord.length ? t._l(t.ChaseRecord, function (e) {
                return a("tr", [a("td", [a("router-link", {attrs: {to: "/seekOrder"}}, [t._v(t._s(e.issueNo))])], 1), t._v(" "), a("td", [t._v(t._s(e.complete_count))]), t._v(" "), a("td", [t._v(t._s(e.chase_money))]), t._v(" "), a("td", [t._v(t._s(e.state))])])
            }) : t._e(), t._v(" "), t.ChaseRecord.length ? t._e() : [t._m(9), t._v(" "), t._m(10), t._v(" "), t._m(11), t._v(" "), t._m(12), t._v(" "), t._m(13)]], 2)]) : t._e(), t._v(" "), a("table", {
                staticClass: "_betChaseAnimation dpn",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }), t._v(" "), a("table", {staticClass: "more"}, [a("tbody", ["BetRecord" == t.whichRecord ? a("tr", [a("td", [a("router-link", {attrs: {to: "/betRecord"}}, [t._v("更多>>")])], 1)]) : a("tr", [a("td", [a("router-link", {attrs: {to: "/seekOrder"}}, [t._v("更多>>")])], 1)])])])]), t._v(" "), a("div", {staticClass: "winningList box"}, [a("h3", {
                class: {notSelect: "lottery" != t.winState},
                on: {
                    click: function (e) {
                        t.winState = "lottery"
                    }
                }
            }, [t._v("中奖信息")]), t._v(" "), a("h3", {
                class: {notSelect: "winner" != t.winState},
                on: {
                    click: function (e) {
                        t.winState = "winner"
                    }
                }
            }, [t._v("昨日奖金榜")]), t._v(" "), a("div", {
                staticClass: "winnerListSlide",
                staticStyle: {width: "100%", "box-sizing": "content-box"},
                attrs: {id: "Ranking"}
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "lottery" == t.winState,
                    expression: "winState=='lottery'"
                }], staticStyle: {width: "100%"}, attrs: {id: "lotteryInfo"}
            }, [t._m(14), t._v(" "), a("div", {
                staticClass: "bd",
                on: {mouseenter: t.clearScroll, mouseleave: t.isScroll}
            }, [a("div", {
                staticClass: "tempWrap",
                staticStyle: {overflow: "hidden", height: "510px"}
            }, [a("ul", {
                staticClass: "winnerList",
                style: "cursor: pointer; position: relative;top:" + -51 * t.BonusIndex + "px;transition: " + t.Transition
            }, t._l(t.BonusList, function (e) {
                return a("li", {
                    on: {
                        mouseenter: function (a) {
                            return a.target !== a.currentTarget ? null : void t.getCard(e.UserId, a, "左")
                        }, mouseleave: function (e) {
                            return e.target !== e.currentTarget ? null : void t.getOut(e)
                        }
                    }
                }, [a("img", {attrs: {src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + e.UserPhoto}}), t._v(" "), a("p", [t._v(t._s(e.Nickname ? e.Nickname : e.UserName) + " " + t._s(e.LotteryName)), a("br"), t._v("喜中"), a("span", [t._v("¥" + t._s(e.Bonus))])])])
            }))])])]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "winner" == t.winState,
                    expression: "winState=='winner'"
                }], staticStyle: {width: "100%"}, attrs: {id: "moneyList"}
            }, [t.RankingList ? a("table", {
                staticStyle: {position: "relative"},
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }, [a("tr", [a("th", {attrs: {colspan: "2"}}, [t._v("昨日累计奖金排行榜")])]), t._v(" "), t._l(t.RankingList, function (e, s) {
                return s < 10 ? a("tr", {
                    on: {
                        mouseenter: function (a) {
                            return a.target !== a.currentTarget ? null : void t.getCard(e.UserId, a, "左")
                        }, mouseleave: function (e) {
                            return e.target !== e.currentTarget ? null : void t.getOut(e)
                        }
                    }
                }, [a("td", [a("img", {attrs: {src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + e.UserPhoto}}), t._v(" "), a("p", [t._v("账号昵称：" + t._s(e.NickName ? e.NickName : e.UserName)), a("br"), t._v("\n            昨日奖金："), a("i", [t._v("¥" + t._s(e.Bonus))])])]), t._v(" "), a("td", [a("ins", [t._v(t._s(s + 1))])])]) : t._e()
            })], 2) : [t._m(15), t._v(" "), a("div", {
                staticClass: "winningListLoading",
                staticStyle: {padding: "18px 0 !important"}
            }, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + "/system/common/loadding/winningList.gif",
                    alt: ""
                }
            }), t._v(" "), a("h5", [t._v("排名计算中")]), t._v(" "), a("p", [t._v("将在00:20公布榜单，请稍候...")])])]], 2)])]), t._v(" "), a("UserCard", {attrs: {cardArr: t.cardArr}})], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", {attrs: {scope: "col"}}, [t._v("期号")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("开奖号")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("开奖时间")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", {attrs: {scope: "col"}}, [t._v("期号")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("开奖号")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("和值")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("形态")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("期号")]), t._v(" "), a("th", [t._v("投注金额")]), t._v(" "), a("th", [t._v("奖金")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("起始期号")]), t._v(" "), a("th", [t._v("已追/总")]), t._v(" "), a("th", [t._v("总金额")]), t._v(" "), a("th", [t._v("奖金")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td"), a("td"), a("td"), a("td")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("table", {attrs: {width: "100%"}}, [a("tbody", [a("tr", [a("th", [t._v("中奖信息实时更新")])])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("table", {
                staticStyle: {position: "relative"},
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }, [a("tr", [a("th", {attrs: {colspan: "2"}}, [t._v("昨日累计奖金排行榜")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [t._m(0), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("手机号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Mobile",
                    arg: "Mobile"
                }, {
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.Mobile,
                    expression: "Mobile",
                    arg: "Mobile",
                    modifiers: {trim: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "手机号", placeholder: "请输入您要绑定的手机号码", type: "text"},
                domProps: {value: t.Mobile},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Mobile = e.target.value.trim())
                    }, blur: function (e) {
                        t.$forceUpdate()
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Mobile.isPass,
                    message: t.va.Mobile.message
                }
            })], 1), t._v(" "), a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:SmsCode",
                    arg: "SmsCode"
                }, {
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.SmsCode,
                    expression: "SmsCode",
                    arg: "SmsCode",
                    modifiers: {trim: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "验证码", placeholder: "输入验证码", type: "text"},
                domProps: {value: t.SmsCode},
                on: {
                    input: function (e) {
                        e.target.composing || (t.SmsCode = e.target.value.trim())
                    }, blur: function (e) {
                        t.$forceUpdate()
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.SmsCode.isPass,
                    message: t.va.SmsCode.message
                }
            }), t._v(" "), a("span", {staticClass: "btn SendCode"}, [a("a", {
                staticClass: "ClickShade",
                on: {click: t.postMsg}
            }, [t._v(t._s(t.reTime))])])], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("ul", {staticClass: "queue"}, [a("li", {staticClass: "now"}, [a("span", [t._v("绑定新手机")]), a("i")]), a("li", [a("span", [t._v("完成")]), a("i")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "Trend_chart",
                attrs: {id: "container"}
            }, [a("div", {staticClass: "select-section clearfix"}, [a("div", {staticClass: "select-function"}, [a("a", {
                class: {curr: !t.chartBox},
                on: {click: t.chartBoxfun}
            }, [a("em", [t._v(t._s(t.chartBox ? "收起功能区" : "展开功能区"))]), a("i", {staticClass: "iconfont"}, [t._v("")])]), t._v(" "), a("a", {
                staticClass: "btn",
                attrs: {target: "_blank"}
            }, [t._v("报表下载")])]), t._v(" "), a("div", {
                attrs: {
                    id: "select_lottery",
                    value: t.actionObj.letterycode
                }
            }, [a("h3", {staticClass: "select-title"}, [t._v("彩种：" + t._s(t.headTitle))]), t._v(" "), a("ul", {staticClass: "select-list"}, t._l(t.CodeClass, function (e, s) {
                return a("li", {class: {current: t.TypeCode == s}}, [a("a", {
                    on: {
                        click: function (e) {
                            t.CodeSet(s)
                        }
                    }
                }, [t._v(t._s(e))])])
            }))])]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.chartBox,
                    expression: "chartBox"
                }], staticClass: "chart_control_cont"
            }, [a("div", {staticClass: "title"}, [t._v("基本走势图")]), t._v(" "), a("div", {staticClass: "function"}, [a("label", {
                staticClass: "label",
                attrs: {for: "Guide"},
                on: {
                    click: function (e) {
                        t.Guide = !t.Guide
                    }
                }
            }, [a("input", {
                directives: [{name: "model", rawName: "v-model", value: t.Guide, expression: "Guide"}],
                staticClass: "checkbox",
                attrs: {name: "Guide", type: "checkbox"},
                domProps: {checked: Array.isArray(t.Guide) ? t._i(t.Guide, null) > -1 : t.Guide},
                on: {
                    __c: function (e) {
                        var a = t.Guide, s = e.target, n = !!s.checked;
                        if (Array.isArray(a)) {
                            var r = null, i = t._i(a, r);
                            n ? i < 0 && (t.Guide = a.concat(r)) : i > -1 && (t.Guide = a.slice(0, i).concat(a.slice(i + 1)))
                        } else t.Guide = n
                    }
                }
            }), t._v("辅助线")]), t._v(" "), a("label", {
                staticClass: "label",
                attrs: {for: "Missing"},
                on: {
                    click: function (e) {
                        t.Missing = !t.Missing
                    }
                }
            }, [a("input", {
                directives: [{name: "model", rawName: "v-model", value: t.Missing, expression: "Missing"}],
                staticClass: "checkbox",
                attrs: {name: "Missing", type: "checkbox"},
                domProps: {checked: Array.isArray(t.Missing) ? t._i(t.Missing, null) > -1 : t.Missing},
                on: {
                    __c: function (e) {
                        var a = t.Missing, s = e.target, n = !!s.checked;
                        if (Array.isArray(a)) {
                            var r = null, i = t._i(a, r);
                            n ? i < 0 && (t.Missing = a.concat(r)) : i > -1 && (t.Missing = a.slice(0, i).concat(a.slice(i + 1)))
                        } else t.Missing = n
                    }
                }
            }), t._v("遗漏")]), t._v(" "), a("label", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "BJPK10" != t.TypeCode && "SSC5XZH" != t.TypeCode && "BJKL8" != t.TypeCode && "BJPK10" != t.TypeCode && "K3" != t.TypeCode,
                    expression: "TypeCode!='BJPK10'&&TypeCode!='SSC5XZH'&&TypeCode!='BJKL8'&&TypeCode!='BJPK10'&&TypeCode!='K3'"
                }], staticClass: "label", attrs: {for: "trend"}, on: {
                    click: function (e) {
                        t.trend = !t.trend
                    }
                }
            }, [a("input", {
                directives: [{name: "model", rawName: "v-model", value: t.trend, expression: "trend"}],
                attrs: {name: "trend", type: "checkbox"},
                domProps: {checked: Array.isArray(t.trend) ? t._i(t.trend, null) > -1 : t.trend},
                on: {
                    __c: function (e) {
                        var a = t.trend, s = e.target, n = !!s.checked;
                        if (Array.isArray(a)) {
                            var r = null, i = t._i(a, r);
                            n ? i < 0 && (t.trend = a.concat(r)) : i > -1 && (t.trend = a.slice(0, i).concat(a.slice(i + 1)))
                        } else t.trend = n
                    }
                }
            }), t._v("走势")])]), t._v(" "), a("div", {
                staticClass: "time",
                attrs: {id: "periods-data"}
            }, [a("a", {
                class: {fb: "30" == t.actionObj.NumPeriods}, on: {
                    click: function (e) {
                        t.NumSet(30)
                    }
                }
            }, [t._v("近30期")]), t._v(" "), a("a", {
                class: {fb: "50" == t.actionObj.NumPeriods},
                on: {
                    click: function (e) {
                        t.NumSet(50)
                    }
                }
            }, [t._v("近50期")]), t._v(" "), a("a", {
                class: {fb: "200" == t.actionObj.NumPeriods},
                on: {
                    click: function (e) {
                        t.NumSet(200)
                    }
                }
            }, [t._v("近200期")])])]), t._v(" "), a("div", {
                staticClass: "chart-section",
                attrs: {id: "J-chart-area"}
            }, [t.ArrData ? a("table", {
                staticClass: "chart-table",
                attrs: {width: "100%", cellpadding: "0", cellspacing: "0", id: "J-chart-area-table"}
            }, [a("thead", {staticClass: "thead"}, ["SSC5" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisu5x, function (e, s) {
                return a("th", {class: {"border-right": s < 5}, attrs: {colspan: "12"}}, [t._v(t._s(e))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [t._l(6, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.numbers, function (e) {
                    return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e(), t._v(" "), "SSC4" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisu4x, function (e, s) {
                return a("th", {class: {"border-right": s < 4}, attrs: {colspan: "12"}}, [t._v(t._s(e))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [t._l(5, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.numbers, function (e) {
                    return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e(), t._v(" "), "SSC5XZH" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisu5XZH, function (e, s) {
                return a("th", {
                    class: "和值" == s ? "border-bottom" : "border-right",
                    attrs: {colspan: e, rowspan: "和值" == s && "2"}
                }, [t._v(t._s(s))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [t._l(2, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.numbers, function (e) {
                    return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            }), t._v(" "), t._l(3, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.bigSmall, function (e) {
                    return a("th", {
                        staticClass: "border-bottom-header",
                        attrs: {colspan: "2"}
                    }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e(), t._v(" "), "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode || "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisuQ3Arr, function (e, s) {
                return s < 4 ? a("th", {staticClass: "border-right", attrs: {colspan: "12"}}, [t._v(t._s(e))]) : t._e()
            }), t._v(" "), t._l(t.weisuQ3Arr, function (e, s) {
                return s > 3 ? a("th", {
                    class: {"border-bottom": !0, "border-right": s < 13},
                    attrs: {rowspan: "2", colspan: "3"}
                }, [t._v(t._s(e))]) : t._e()
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [t._l(4, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.numbers, function (e) {
                    return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e(), t._v(" "), "SSCQ2" == t.TypeCode || "SSCH2" == t.TypeCode || "P3H2" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisuQ2Arr, function (e, s) {
                return a("th", {
                    class: {"border-right": s < 5, "border-bottom": "对子" == e || "和值" == e},
                    attrs: {colspan: "对子" == e || "和值" == e ? "3" : "12", rowspan: ("对子" == e || "和值" == e) && "2"}
                }, [t._v(t._s(e))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [t._l(4, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.numbers, function (e) {
                    return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e(), t._v(" "), "BJPK10" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisuPK10, function (e, s) {
                return a("th", {
                    class: {"border-right": s < 5, "border-bottom": !0},
                    attrs: {colspan: s < 1 ? "12" : s < 4 ? "6" : "9"}
                }, [t._v(t._s(e))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [a("th", {staticClass: "ball-none border-bottom"}), t._v(" "), t._l(t.numbers, function (e) {
                return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e + 1))])])
            }), t._v(" "), a("th", {staticClass: "ball-none border-bottom  border-right"}), t._v(" "), t._l(t.ChamPion, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml hezhixingtai"}, [t._v(t._s(e))])]), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e(), t._v(" "), "BJKL8" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "82"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisuKL8, function (e, s) {
                return a("th", {
                    class: {"border-right": s < 3, "border-bottom": !0},
                    attrs: {colspan: "3", rowspan: "2"}
                }, [t._v(t._s(e))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(80, function (e) {
                return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
            }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})], 2)] : t._e(), t._v(" "), "K3" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisuK3, function (e, s, n) {
                return a("th", {
                    class: {"border-right": n < 2, "border-bottom": n > 1},
                    attrs: {colspan: e}
                }, [t._v(t._s(s))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.HMZS, function (e) {
                return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
            }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"}), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(t.HEZHI, function (e) {
                return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
            }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"}), t._v(" "), t._l(t.HZZHXT, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml hezhixingtai"}, [t._v(t._s(e))])]), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            }), t._v(" "), t._l(t.HMXT, function (e) {
                return a("th", {staticClass: "border-bottom-header  border-right"}, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s(e))])])
            })], 2)] : t._e(), t._v(" "), "11X5" == t.TypeCode ? [a("tr", {staticClass: "title-text"}, [a("th", {
                staticClass: "border-bottom border-right",
                attrs: {rowspan: "2", colspan: "3"}
            }, [t._v("期号")]), t._v(" "), a("th", {
                staticClass: "border-right border-bottom",
                attrs: {colspan: "3", rowspan: "2"}
            }, [t._v("开奖号码")]), t._v(" "), t._l(t.weisu11X5, function (e, s) {
                return a("th", {
                    class: {"border-right": s < 7, "border-bottom": s > 5},
                    attrs: {colspan: s < 6 ? "13" : "3", rowspan: s > 5 && "2"}
                }, [t._v(t._s(e))])
            })], 2), t._v(" "), a("tr", {staticClass: "title-number"}, [t._l(6, function (e) {
                return [a("th", {staticClass: "ball-none border-bottom-header"}), t._v(" "), t._l(11, function (e) {
                    return a("th", {staticClass: "border-bottom-header"}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                }), t._v(" "), a("th", {staticClass: "ball-none border-bottom-header border-right"})]
            })], 2)] : t._e()], 2), t._v(" "), t.ArrData ? a("tbody", {
                staticClass: "chart table-guides",
                attrs: {id: "J-chart-content"}
            }, ["SSC5" == t.TypeCode || "SSC4" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(t.keyC5C4, function (n, r) {
                    return 0 == r && "SSC5" == t.TypeCode || r > "0" ? [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }), t._v(" "), t._l(e[n], function (n, i) {
                        return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.Missing && "-2" != n || "-2" == n,
                                expression: "Missing&&x!='-2'||x=='-2'"
                            }],
                            class: {
                                "ball-noraml": !0,
                                openNo: r < 5 && "-2" == n,
                                "openNo-1": 5 == r && "-2" == n && 1 == t.setPows(i, e.LotteryOpenNo),
                                "openNo-2": 5 == r && "-2" == n && 2 == t.setPows(i, e.LotteryOpenNo),
                                "openNo-3": 5 == r && "-2" == n && t.setPows(i, e.LotteryOpenNo) >= 3
                            }
                        }, [t._v(t._s("-2" == n ? i : n))])])
                    }), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    })] : t._e()
                })], 2)
            }) : t._e(), t._v(" "), "SSC5XZH" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Fen, function (n, r) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != n || "-2" == n,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }],
                        class: {
                            "ball-noraml": !0,
                            "openNo-1": "-2" == n && 1 == t.setPows(r, e.LotteryOpenNo),
                            "openNo-2": "-2" == n && 2 == t.setPows(r, e.LotteryOpenNo),
                            "openNo-3": "-2" == n && 3 == t.setPows(r, e.LotteryOpenNo)
                        }
                    }, [t._v(t._s("-2" == n ? r : n))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.KuaDu, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, "openNo-2": "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(t.key5XZH, function (n) {
                    return [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }), t._v(" "), t._l(e[n], function (e, n) {
                        return a("td", {
                            class: {
                                "ball-none": !0,
                                _bili: "-2" == e,
                                "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                            }, attrs: {colspan: "2"}
                        }, [a("i", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.Missing && "-2" != e || "-2" == e,
                                expression: "Missing&&x!='-2'||x=='-2'"
                            }], staticClass: "ball-noraml"
                        }, [t._v(t._s("-2" == e ? t.bigSmall[n] : e))])])
                    }), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    })]
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.HeZhi))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })], 2)
            }) : t._e(), t._v(" "), "SSCH3" == t.TypeCode || "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode || "FC3D" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), "SSCQ3" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Wan, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Qian, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode || "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Bai, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCZ3" == t.TypeCode || "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Shi, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Ge, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Fen, function (n, r) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != n || "-2" == n,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }],
                        class: {
                            "ball-noraml": !0,
                            "openNo-1": "-2" == n && 1 == t.setPows(r, e.LotteryOpenNo),
                            "openNo-2": "-2" == n && 2 == t.setPows(r, e.LotteryOpenNo),
                            "openNo-3": "-2" == n && 3 == t.setPows(r, e.LotteryOpenNo)
                        }
                    }, [t._v(t._s("-2" == n ? r : n))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        bgc_blue: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.DaXiaoXingTai))])]), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        bgc_green: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.DanShuangXingTai))])]), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        bgc_blue: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.ZhiHeXingTai))])]), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        bgc_green: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e._012XingTai))])]), t._v(" "), t._l(["ZuSan", "ZuLiu", "BaoZi"], function (n, r) {
                    return a("td", {
                        class: {
                            zusan: r < 2,
                            baozi: 2 == r,
                            "border-right": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }, attrs: {colspan: "3"}
                    }, [a("i", {
                        class: {
                            "ball-noraml": !0,
                            duizi: "-2" == e[n]
                        }
                    }, [t._v(t._s("-2" == e[n] ? "" : e[n]))])])
                }), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        bgc_blue: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.KuaDu))])]), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        bgc_red: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.ZhiXuanHeZhi))])]), t._v(" "), a("td", {
                    class: {
                        dxxintai: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.HeZhiWeiShu))])])], 2)
            }) : t._e(), t._v(" "), "SSCH2" == t.TypeCode || "SSCQ2" == t.TypeCode || "P3H2" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), "SSCQ2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Wan, function (e, n) {
                    return a("td", {
                        class: {
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCQ2" == t.TypeCode || "P3H2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Qian, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "P3H2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Bai, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCH2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Shi, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Ge, function (e, n) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, openNo: "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })] : t._e(), t._v(" "), a("td", {
                    class: {
                        baozi: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {
                    class: {
                        "ball-noraml": !0,
                        duizi: "-2" == e.DuiZi
                    }
                }, [t._v(t._s("-2" == e.DuiZi ? "" : e.DuiZi))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.Fen, function (n, r) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != n || "-2" == n,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }],
                        class: {
                            "ball-noraml": !0,
                            "openNo-1": "-2" == n && 1 == t.setPows(r, e.LotteryOpenNo),
                            "openNo-2": "-2" == n && 2 == t.setPows(r, e.LotteryOpenNo),
                            "openNo-3": "-2" == n && t.setPows(r, e.LotteryOpenNo) >= 3
                        }
                    }, [t._v(t._s("-2" == n ? r : n))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.KuaDuZouShi, function (e, n) {
                    return a("td", {
                        class: {
                            "openNo-kuadu-td": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && "-2" != e || "-2" == e,
                            expression: "Missing&&x!='-2'||x=='-2'"
                        }], class: {"ball-noraml": !0, "openNo-kuadu": "-2" == e}
                    }, [t._v(t._s("-2" == e ? n : e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e.HeZhi))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })], 2)
            }) : t._e(), t._v(" "), "11X5" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(t.key11X5, function (n, r) {
                    return [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }), t._v(" "), t._l(e[n], function (e, n) {
                        return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.Missing && "-2" != e || "-2" == e,
                                expression: "Missing&&x!='-2'||x=='-2'"
                            }], class: {"ball-noraml": !0, openNo: r < 5 && "-2" == e, "openNo-1": 5 == r && "-2" == e}
                        }, [t._v(t._s("-2" == e ? n + 1 : e))])])
                    }), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    })]
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        _bili: !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.DanShuang))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.ZhongWeiShu))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                })], 2)
            }) : t._e(), t._v(" "), "K3" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.HaoMaZouShi, function (n, r) {
                    return a("td", {
                        class: {
                            KuaiSan_OpenNo: t.setPows(r + 1, e.LotteryOpenNo) >= 1,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && !t.setPows(r + 1, e.LotteryOpenNo) || t.setPows(r + 1, e.LotteryOpenNo) >= 1,
                            expression: "Missing&&!setPows((index+1),n.LotteryOpenNo)||setPows((index+1),n.LotteryOpenNo)>=1"
                        }], class: {"ball-noraml": !0, "openNo-0": t.setPows(r + 1, e.LotteryOpenNo) >= 1}
                    }, [t._v(t._s(t.setPows(r + 1, e.LotteryOpenNo) >= 1 ? r + 1 : n)), t.setPows(r + 1, e.LotteryOpenNo) >= 2 ? a("em", {staticClass: "chonghao"}, [t._v(t._s(t.setPows(r + 1, e.LotteryOpenNo)))]) : t._e()])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(e.HeZhi, function (n, r) {
                    return a("td", {
                        class: {
                            KuaiSan: t.getHeZhi(e.LotteryOpenNo) == r + 3,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }, [a("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Missing && t.getHeZhi(e.LotteryOpenNo) != r + 3 || t.getHeZhi(e.LotteryOpenNo) == r + 3,
                            expression: "Missing&&getHeZhi(n.LotteryOpenNo)!=(index+3)||getHeZhi(n.LotteryOpenNo)==(index+3)"
                        }], class: {"ball-noraml": !0, hezhizoushi: t.getHeZhi(e.LotteryOpenNo) == r + 3}
                    }, [t._v(t._s(t.getHeZhi(e.LotteryOpenNo) == r + 3 ? r + 3 : n))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(t.keyK3, function (n, r) {
                    return ["-2" != e.HeZhiZuHeXingTai[n] ? [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {staticClass: "ball-noraml hezhixingtai"}, [t._v(t._s(e.HeZhiZuHeXingTai[n]))])]), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }
                    })] : [a("td", {
                        class: {
                            isSHow: !0,
                            "border-right": !0,
                            "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                        }, attrs: {colspan: "3"}
                    }, [a("i", {staticClass: "ball-noraml hezhixingtai"}, [t._v(t._s(t.HZZHXT[r]))])])]]
                }), t._v(" "), a("td", {
                    class: {
                        "border-right": !0,
                        isSHow: "-2" == e.HaoMaXingTai.SanTongHao,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s("-2" == e.HaoMaXingTai.SanTongHao ? "三同号" : e.HaoMaXingTai.SanTongHao))])]), t._v(" "), a("td", {
                    class: {
                        "border-right": !0,
                        isSHow: "-2" == e.HaoMaXingTai.SanBuTongHao,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s("-2" == e.HaoMaXingTai.SanBuTongHao ? "三同号" : e.HaoMaXingTai.SanBuTongHao))])]), t._v(" "), a("td", {
                    class: {
                        "border-right": !0,
                        isBaozi: "-2" == e.HaoMaXingTai.SanLianHao,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s("-2" == e.HaoMaXingTai.SanLianHao ? "三同号" : e.HaoMaXingTai.SanLianHao))])]), t._v(" "), a("td", {
                    class: {
                        "border-right": !0,
                        isHmxt: "-2" == e.HaoMaXingTai.ErTongHaoFu,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s("-2" == e.HaoMaXingTai.ErTongHaoFu ? "二同号（复）" : e.HaoMaXingTai.ErTongHaoFu))])]), t._v(" "), a("td", {
                    class: {
                        "border-right": !0,
                        isHmxt: "-2" == e.HaoMaXingTai.ErTongHaoDan,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s("-2" == e.HaoMaXingTai.ErTongHaoDan ? "二同号（单）" : e.HaoMaXingTai.ErTongHaoDan))])]), t._v(" "), a("td", {
                    class: {
                        "border-right": !0,
                        isHmxt: "-2" == e.HaoMaXingTai.ErBuTongHao,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [a("i", {staticClass: "ball-noraml haomaxingtai"}, [t._v(t._s("-2" == e.HaoMaXingTai.ErBuTongHao ? "二不同号" : e.HaoMaXingTai.ErBuTongHao))])])], 2)
            }) : t._e(), t._v(" "), "BJPK10" == t.TypeCode ? t._l(t.ArrData.Body.Body, function (e, s) {
                return a("tr", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }, [t._v(t._s(e.No))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"}, [t._v(t._s(e.LotteryOpenNo))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(t.numbers, function (e) {
                    return a("td", {class: {"border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide}}, [a("i", {staticClass: "ball-noraml openNo"}, [t._v(t._s(e + 1))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide
                    }
                }), t._v(" "), t._l(t.keyPK10, function (n) {
                    return a("td", {
                        class: {"border-right": !0, "border-bottom": s > 0 && (s + 1) % 5 == 0 && t.Guide},
                        attrs: {colspan: "3"}
                    }, [a("i", {
                        class: {
                            "ball-noraml": !0,
                            duizi: "-2" == e[n]
                        }
                    }, [t._v(t._s("-2" == e[n] ? "" : e[n]))])])
                })], 2)
            }) : t._e()], 2) : t._e(), t._v(" "), t.ArrData ? a("tfoot", {staticClass: "chart table-tfoot table-guides"}, ["SSC5" == t.TypeCode || "SSC4" == t.TypeCode ? t._l(t.ArrData.Body.Foot, function (e, s) {
                return a("tr", {class: {"border-bottom": s < 3 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }, [t._v(t._s(e.StatisticsName))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(t.keyC5C4, function (n, r) {
                    return "SSC5" == t.TypeCode || r > 0 ? [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    }), t._v(" "), t._l(e[n], function (e) {
                        return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                    }), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    })] : t._e()
                })], 2)
            }) : t._e(), t._v(" "), "SSC5XZH" == t.TypeCode ? t._l(t.ArrData.Body.Foot, function (e, s) {
                return a("tr", {class: {"border-bottom": s < 3 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }, [t._v(t._s(e.StatisticsName))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Fen, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.KuaDu, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(t.key5XZH, function (n) {
                    return [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    }), t._v(" "), t._l(e[n], function (e) {
                        return a("td", {
                            class: {"ball-none": !0, "border-bottom": s < 3 && t.Guide},
                            attrs: {colspan: "2"}
                        }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                    }), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    })]
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })], 2)
            }) : t._e(), t._v(" "), "SSCH3" == t.TypeCode || "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode || "FC3D" == t.TypeCode ? t._l(t.ArrData.Body.Foot, function (e, s) {
                return a("tr", {class: {"border-bottom": s < 3 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }, [t._v(t._s(e.StatisticsName))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), "SSCQ3" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Wan, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {
                        staticClass: "ball-noraml ",
                        attrs: {"data-info": "2"}
                    }, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Qian, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {
                        staticClass: "ball-noraml ",
                        attrs: {"data-info": "2"}
                    }, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCQ3" == t.TypeCode || "SSCZ3" == t.TypeCode || "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Bai, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {
                        staticClass: "ball-noraml ",
                        attrs: {"data-info": "2"}
                    }, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCZ3" == t.TypeCode || "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Shi, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {
                        staticClass: "ball-noraml ",
                        attrs: {"data-info": "2"}
                    }, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCH3" == t.TypeCode || "FC3D" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Ge, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {
                        staticClass: "ball-noraml ",
                        attrs: {"data-info": "2"}
                    }, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Fen, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {
                        staticClass: "ball-noraml ",
                        attrs: {"data-info": "2"}
                    }, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(4, function (e) {
                    return [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    }), t._v(" "), a("td", {
                        class: {"border-bottom": s < 3 && t.Guide, dxxintai: !0},
                        attrs: {colspan: "1"}
                    }, [a("i", {
                        staticClass: "ball-noraml",
                        attrs: {"data-info": ""}
                    })]), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    })]
                }), t._v(" "), t._l(["ZuSan", "ZuLiu", "BaoZi"], function (n, r) {
                    return a("td", {
                        class: {
                            zusan: r < 2,
                            baozi: 2 == r,
                            "border-right": !0,
                            "border-bottom": s < 3 && t.Guide
                        }, attrs: {colspan: "3"}
                    }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e[n]))])])
                }), t._v(" "), t._l(3, function (e) {
                    return [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    }), t._v(" "), a("td", {
                        class: {"border-bottom": s < 3 && t.Guide, dxxintai: !0},
                        attrs: {colspan: "1"}
                    }, [a("i", {staticClass: "ball-noraml"})]), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    })]
                })], 2)
            }) : t._e(), t._v(" "), "SSCH2" == t.TypeCode || "SSCQ2" == t.TypeCode || "P3H2" == t.TypeCode ? t._l(t.ArrData.Body.Foot, function (e, s) {
                return a("tr", {class: {"border-bottom": s < 3 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }, [t._v(t._s(e.StatisticsName))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), "SSCQ2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Wan, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCQ2" == t.TypeCode || "P3H2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Qian, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "P3H2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Bai, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), "SSCH2" == t.TypeCode ? [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Shi, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Ge, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })] : t._e(), t._v(" "), a("td", {
                    class: {
                        baozi: !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }, attrs: {colspan: "3"}
                }, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e.DuiZi))])]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.Fen, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(e.KuaDuZouShi, function (e) {
                    return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml "}, [t._v(t._s(e))])])
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {"border-bottom": s < 3 && t.Guide, dxxintai: !0},
                    attrs: {colspan: "1"}
                }, [a("i", {staticClass: "ball-noraml"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })], 2)
            }) : t._e(), t._v(" "), "11X5" == t.TypeCode ? t._l(t.ArrData.Body.Foot, function (e, s) {
                return a("tr", {class: {"border-bottom": s < 3 && t.Guide}}, [a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "issue-numbers": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }, [t._v(t._s(e.StatisticsName))]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("span", {staticClass: "lottery-numbers"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), t._l(t.key11X5, function (n) {
                    return [a("td", {
                        class: {
                            "ball-none": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    }), t._v(" "), t._l(e[n], function (e) {
                        return a("td", {class: {"border-bottom": s < 3 && t.Guide}}, [a("i", {staticClass: "ball-noraml"}, [t._v(t._s(e))])])
                    }), t._v(" "), a("td", {
                        class: {
                            "ball-none": !0,
                            "border-right": !0,
                            "border-bottom": s < 3 && t.Guide
                        }
                    })]
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {"ball-none": !0, "border-bottom": s < 3 && t.Guide},
                    attrs: {colspan: "1"}
                }, [a("i", {staticClass: "ball-noraml"})]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                }, [a("i", {
                    staticClass: "ball-noraml",
                    attrs: {"data-info": ""}
                })]), t._v(" "), a("td", {
                    class: {
                        "ball-none": !0,
                        "border-right": !0,
                        "border-bottom": s < 3 && t.Guide
                    }
                })], 2)
            }) : t._e(), t._v(" "), "K3" == t.TypeCode ? [a("tr", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.Guide,
                    expression: "!Guide"
                }]
            }, [a("td", {
                staticStyle: {padding: "0", "border-top": "0", "border-bottom": "0"},
                attrs: {colspan: "48"}
            })])] : t._e()], 2) : t._e()], 1) : a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "20% 0"}
            }, [a("loading")], 1)]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.trend,
                    expression: "trend"
                }], staticClass: "J-chart-canvas", attrs: {id: "J-chart-canvas"}
            })])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container fix pt15"}, [a("div", {staticClass: "helpSlider"}, [a("h2", [t._v("About")]), t._v(" "), a("ul", {staticClass: "helpMenu"}, t._l(t.LeftNavArr, function (e, s) {
                return a("li", {
                    class: t.li_state === s ? "curr" : "", on: {
                        click: function (e) {
                            t.li_state = s
                        }
                    }
                }, [a("router-link", {attrs: {to: "/about?ID=" + e.ID}}, [t._v(t._s(e.Title))])], 1)
            }))]), t._v(" "), a("div", {staticClass: "helpContent"}, [a("h4", {staticClass: "_title"}, [t._v(t._s(t.titleName))]), t._v(" "), a("div", {
                staticClass: "_content helpArtical",
                domProps: {innerHTML: t._s(t.ArticleContent.Article)}
            })])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "_Info"}, [a("div", {staticClass: "layerBg"}), t._v(" "), a("div", {staticClass: "layerMsg"}, [a("div", {staticClass: "layui-layer layui-layer-dialog layui-layer-prompt layer-anim"}, [a("div", {
                staticClass: "layui-layer-title",
                staticStyle: {cursor: "move"}
            }, [t._v("备注")]), t._v(" "), a("div", {
                staticClass: "layui-layer-content",
                attrs: {id: ""}
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.$parent.DInfo,
                    expression: "$parent.DInfo"
                }],
                staticClass: "layui-layer-input",
                attrs: {type: "text"},
                domProps: {value: t.$parent.DInfo},
                on: {
                    input: function (e) {
                        e.target.composing || (t.$parent.DInfo = e.target.value)
                    }
                }
            })]), t._v(" "), a("span", {staticClass: "layui-layer-setwin"}, [a("a", {
                staticClass: "close",
                attrs: {href: "javascript:;"},
                on: {click: t.close}
            })]), t._v(" "), a("div", {staticClass: "layui-layer-btn"}, [a("a", {
                staticClass: "layui-layer-btn0",
                on: {click: t.UPData}
            }, [t._v("确定")]), t._v(" "), a("a", {
                staticClass: "layui-layer-btn1",
                on: {click: t.close}
            }, [t._v("取消")])])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("div", {staticClass: "mode"}, [t.ltCfg[t.mode].box ? t._e() : a("div", {staticClass: "sscCheckNumber"}, [a("ul", [a("li", t._l(t.ltCfg[t.mode].render, function (e) {
                return a("betBox", {attrs: {alias: e}, on: {choose: t.whenChoose}})
            }))])]), t._v(" "), t.ltCfg[t.mode].box && "normal" === t.ltCfg[t.mode].box ? a("noteBet", {
                attrs: {
                    len: t.ltCfg[t.mode].len,
                    special: t.ltCfg[t.mode].special
                }
            }) : t._e(), t._v(" "), t.ltCfg[t.mode].box && "syx5" === t.ltCfg[t.mode].box ? a("syx5NoteBet", {
                attrs: {
                    len: t.ltCfg[t.mode].len,
                    special: t.ltCfg[t.mode].special
                }
            }) : t._e()], 1), t._v(" "), a("div", {staticClass: "Panel"}, [a("p", {staticClass: "betTotal"}, [t._v("\n          您选择了"), a("em", [t._v(t._s(t.betCount))]), t._v(" 注，\n          "), a("em", {staticClass: "inputAdd fix"}, [a("i", {
                class: {off: this.power <= 1},
                on: {click: t.reducePower}
            }, [t._v("-")]), t._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.power,
                    expression: "power",
                    modifiers: {lazy: !0}
                }], attrs: {type: "tel"}, domProps: {value: t.power}, on: {
                    change: function (e) {
                        t.power = e.target.value
                    }
                }
            }), t._v(" "), a("i", {
                class: {off: this.power >= t.Max_Rate},
                on: {click: t.addPower}
            }, [t._v("+")])]), t._v(" 倍\n          "), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.unit,
                    expression: "unit"
                }], on: {
                    change: function (e) {
                        var a = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        });
                        t.unit = e.target.multiple ? a : a[0]
                    }
                }
            }, t._l(t.unitArr, function (e) {
                return a("option", {domProps: {value: e.unit}}, [t._v(t._s(e.word))])
            })), t._v("\n          共 "), a("i", [t._v(t._s(t.betMoney))]), t._v("元\n        ")]), t._v(" "), a("a", {
                staticClass: "betBtn",
                on: {click: t.addBet}
            }, [t._v("确认选号")])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("投注记录")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "todayView mgb10"}, [a("li", [t._v("今日概况")]), t._v(" "), a("li", [t._v("投注金额："), a("span", [t._v(t._s(t.TodaySituation.Betting) + "元")])]), t._v(" "), a("li", [t._v("中奖金额："), a("span", [t._v(t._s(t.TodaySituation.BonusMoney) + "元")])]), t._v(" "), a("li", [t._v("盈利："), a("span", [t._v(t._s(t.TodaySituation.AllProfitLoss) + "元")])])]), t._v(" "), a("RecordState"), t._v(" "), a("div", {staticClass: "searchDetail"}, [a("table", [t._m(0), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)]) : [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e) {
                return a("tr", [a("td", {staticStyle: {color: "#4aa9db"}}, [t._v(t._s("排列3/5" === e.LotteryName ? "排列3" : e.LotteryName))]), t._v(" "), a("td", [t._v(t._s(e.IssueNo))]), t._v(" "), a("td", [a("div", {staticClass: "betNum"}, [t._v(t._s(e.BetNum || "--"))]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkLength(e.BetNum),
                        expression: "checkLength(x.BetNum)"
                    }], staticClass: "NumLink", staticStyle: {color: "#4aa9bb"}, on: {
                        click: function (a) {
                            t.showBetContent("投注内容", e.BetNum)
                        }
                    }
                }, [t._v("[详情]")])]), t._v(" "), a("td", [t._v(t._s(e.BetMoney))]), t._v(" "), a("td", [a("div", {staticClass: "betNum"}, [t._v(t._s(("北京快乐8" === e.LotteryName ? e.OpenNum.split("+")[0] : e.OpenNum) || "--"))]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkLength(e.OpenNum),
                        expression: "checkLength(x.OpenNum)"
                    }], staticClass: "NumLink", staticStyle: {color: "#4aa9bb"}, on: {
                        click: function (a) {
                            t.showBetContent("开奖号码", "北京快乐8" === e.LotteryName ? e.OpenNum.split("+")[0].split(",").slice(0, 20).join(",") : e.OpenNum)
                        }
                    }
                }, [t._v("[详情]")])]), t._v(" "), a("td", {style: "color:" + t.SelectColor(e.State)}, [t._v(t._s(e.State))]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [a("a", {
                    staticClass: "alink",
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/betDetail", query: {ID: e.ID, UID: 0}})
                        }
                    }
                }, [t._v("查看")])])])
            })]], 2)])]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {ref: "page", attrs: {allpage: t.TotalPage}})], 1)]), t._v(" "), t._m(1)], 1)])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", {attrs: {colspan: "1"}}, [t._v("彩种")]), t._v(" "), a("th", [t._v("期号")]), t._v(" "), a("th", [t._v("投注内容")]), t._v(" "), a("th", [t._v("投注金额")]), t._v(" "), a("th", [t._v("开奖号码")]), t._v(" "), a("th", [t._v("奖金状态")]), t._v(" "), a("th", [t._v("投注时间")]), t._v(" "), a("th", [t._v("操作项")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mgt15"}, [a("p", [a("i"), t._v("温馨提示：投注记录最多只保留7天。\r\n        ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "queue"}, [t._m(0), t._v(" "), t._m(1), t._v(" "), a("li", [a("span", [t._v("修改" + t._s(t.Title))]), a("i")]), t._v(" "), t._m(2)]), t._v(" "), a("div", {staticClass: "mg30"}, [a("ul", {staticClass: "safeList"}, [a("li", {
                class: {
                    UserHasSafePwd: !0,
                    noSet: !t.ResetSafePwd
                }
            }, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(3), t._v(" "), a("span", {staticClass: "btn"}, [t.ResetSafePwd ? a("router-link", {
                attrs: {
                    to: {
                        path: "verifySafePwd",
                        query: {F: "SafePwd", Q: t.reUrl}
                    }
                }
            }, [t._v("立即找回")]) : a("a", {attrs: {href: "javascript:;"}}, [t._v("立即找回")])], 1)]), t._v(" "), a("li", {
                class: {
                    UserMobile: !0,
                    noSet: !t.ResetMobile
                }
            }, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(4), t._v(" "), a("span", {staticClass: "btn"}, [t.ResetMobile ? a("router-link", {
                attrs: {
                    to: {
                        path: "verifyMobile",
                        query: {F: "Mobile", Q: t.reUrl}
                    }
                }
            }, [t._v("立即找回")]) : a("a", {attrs: {href: "javascript:;"}}, [t._v("立即找回")])], 1)]), t._v(" "), a("li", {
                class: {
                    UserSafeQuestions: !0, noSet: !t.ResetQuestion
                }
            }, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(5), t._v(" "), a("span", {staticClass: "btn"}, [t.ResetQuestion ? a("router-link", {
                attrs: {
                    to: {
                        path: "verifyQuestion",
                        query: {F: "Question", Q: t.reUrl}
                    }
                }
            }, [t._v("立即找回")]) : a("a", {attrs: {href: "javascript:;"}}, [t._v("立即找回")])], 1)]), t._v(" "), a("li", {
                class: {
                    UserMail: !0,
                    noSet: !t.ResetMail
                }
            }, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(6), t._v(" "), a("span", {staticClass: "btn"}, [t.ResetMail ? a("router-link", {
                attrs: {
                    to: {
                        path: "verifyMail",
                        query: {F: "Mail", Q: t.reUrl}
                    }
                }
            }, [t._v("立即找回")]) : a("a", {attrs: {href: "javascript:;"}}, [t._v("立即找回")])], 1)])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("选择验证方式")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("身份验证")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("通过安全密码")]), t._v(" "), a("p", [t._v("安全密码用于提现、绑定银行卡等操作，可保障资金安全。")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("通过密保手机")]), t._v(" "), a("p", [t._v("密保手机可以增加账户安全性，快速找回帐号密码。")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("通过密保问题")]), t._v(" "), a("p", [t._v("密保问题可以增加账户安全性，快速找回帐号密码。")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("通过密保邮箱")]), t._v(" "), a("p", [t._v("密保邮箱可以增加账户安全性，快速找回帐号密码。")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v(t._s(t.Title) + "银行卡")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "submitContent mg30 setBankcard"}, [a("li", [a("span", [t._v("开户银行：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb: !0,
                    sb_active: t.ShowA
                }, staticStyle: {width: "231px", height: "30px"}, attrs: {name: "BankId", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowA")
                    }
                }
            }, [t._v(t._s(t.TextA))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowA,
                    expression: "ShowA"
                }], attrs: {Arr: t.Banklist, ShowKey: "A", TopVal: t.TextA}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowA = !0
                    }
                }
            })], 1), t._v(" "), a("em", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.va.Bank.isPass,
                    expression: "va.Bank.isPass"
                }], staticClass: "verifyWrong"
            }, [a("i"), t._v(t._s(t.va.Bank.message))])]), t._v(" "), a("li", [a("span", [t._v("开户城市：")]), t._v(" "), a("input", {
                staticClass: "userInput citycolor",
                attrs: {type: "text", readonly: ""},
                domProps: {value: t.City},
                on: {
                    click: function (e) {
                        t.CityShow = !0
                    }
                }
            }), t._v(" "), a("em", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.va.City.isPass,
                    expression: "va.City.isPass"
                }], staticClass: "verifyWrong"
            }, [a("i"), t._v(t._s(t.va.City.message))])]), t._v(" "), a("li", [a("span", [t._v("开户人姓名：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:RealName",
                    arg: "RealName"
                }, {name: "model", rawName: "v-model", value: t.RealName, expression: "RealName", arg: "RealName"}],
                staticClass: "userInput",
                attrs: {tag: "开户人姓名", type: "text", placeholder: "请输入银行卡的姓名"},
                domProps: {value: t.RealName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.RealName = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.RealName.isPass,
                    message: t.va.RealName.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("银行卡号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:BankNum",
                    arg: "BankNum"
                }, {name: "model", rawName: "v-model", value: t.BankNum, expression: "BankNum", arg: "BankNum"}],
                staticClass: "userInput",
                attrs: {tag: "银行卡号", type: "text", placeholder: "请输入银行卡的卡号"},
                domProps: {value: t.BankNum},
                on: {
                    input: function (e) {
                        e.target.composing || (t.BankNum = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.BankNum.isPass,
                    message: t.va.BankNum.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("确认卡号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:checkBankNum.BankNum",
                    value: [{equal: "BankNum"}],
                    expression: "[{'equal':'BankNum'}]",
                    arg: "checkBankNum",
                    modifiers: {BankNum: !0}
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.checkBankNum,
                    expression: "checkBankNum",
                    arg: "checkBankNum"
                }],
                staticClass: "userInput _no_paste",
                attrs: {tag: "确认卡号", type: "text", placeholder: "请再次输入银行卡号"},
                domProps: {value: t.checkBankNum},
                on: {
                    input: function (e) {
                        e.target.composing || (t.checkBankNum = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.checkBankNum.isPass,
                    message: t.va.checkBankNum.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("安全密码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Password",
                    arg: "Password"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.SafePassword,
                    expression: "SafePassword",
                    arg: "Password"
                }],
                staticClass: "userInput",
                attrs: {
                    tag: "安全密码",
                    type: "text",
                    onfocus: "this.type='password'",
                    autocomplete: "off",
                    placeholder: "请输入您的安全密码"
                },
                domProps: {value: t.SafePassword},
                on: {
                    input: function (e) {
                        e.target.composing || (t.SafePassword = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.SafePassword.isPass,
                    message: t.va.SafePassword.message
                }
            }), t._v(" "), a("router-link", {
                attrs: {
                    notSubmit: "yes",
                    to: "/ResetWay?Q=ResetSafePwd"
                }
            }, [t._v("忘记安全密码?")])], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])]), t._v(" "), a("CityBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.CityShow,
                    expression: "CityShow"
                }]
            })], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                directives: [{name: "show", rawName: "v-show", value: t.isChase, expression: "isChase"}],
                staticClass: "Bet"
            }, [a("div", {staticClass: "chaseBox"}, [a("div", {staticClass: "chase"}, [a("ul", {staticClass: "chaseSort fix"}, [t._l(t.chaseConfig, function (e, s) {
                return a("li", {
                    class: {curr: t.chaseMode === s},
                    staticStyle: {cursor: "pointer"},
                    on: {
                        click: function (e) {
                            t.changeChaseMode(s)
                        }
                    }
                }, [t._v(t._s(e.name))])
            }), t._v(" "), a("label", [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.isStopAfterWin,
                    expression: "isStopAfterWin"
                }],
                attrs: {type: "checkbox"},
                domProps: {checked: Array.isArray(t.isStopAfterWin) ? t._i(t.isStopAfterWin, null) > -1 : t.isStopAfterWin},
                on: {
                    __c: function (e) {
                        var a = t.isStopAfterWin, s = e.target, n = !!s.checked;
                        if (Array.isArray(a)) {
                            var r = null, i = t._i(a, r);
                            n ? i < 0 && (t.isStopAfterWin = a.concat(r)) : i > -1 && (t.isStopAfterWin = a.slice(0, i).concat(a.slice(i + 1)))
                        } else t.isStopAfterWin = n
                    }
                }
            }), t._v(" 中奖后停止追号\r\n        ")])], 2), t._v(" "), a("chaseConfig", {
                attrs: {
                    chaseMode: t.chaseMode,
                    chaseConfig: t.chaseConfig
                }
            }), t._v(" "), a("chaseList", {
                attrs: {
                    cols: t.chaseConfig[t.chaseMode].cols,
                    renderScheme: t.chaseConfig[t.chaseMode].scheme
                }
            })], 1), t._v(" "), a("div", {staticClass: "chaseDes"}, [a("p", {staticClass: "betTotal"}, [t._v("共追号 "), a("em", [t._v(t._s(t.issueTotal))]), t._v(" 期，"), a("i", [t._v(t._s(t.schemeBets))]), t._v(" 注，总投注金额 "), a("em", [t._v(t._s(t.schemeTotal))]), t._v("元")])]), t._v(" "), a("a", {
                staticClass: "betBtn",
                on: {click: t.comfirmChase}
            }, [t._v("立即投注")])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "header", class: t.headClass}, [a("HeaderTop", {
                attrs: {
                    s: t.s,
                    hasMid: t.hasMid
                }
            }), t._v(" "), t.hasMid && !t.isLotteryPage ? a("HeaderMid", {attrs: {s: t.s.SiteConfig}}) : t._e(), t._v(" "), t.isLotteryPage ? t._e() : a("HeaderNav", {
                attrs: {
                    fr: !t.hasMid,
                    s: t.s.SiteConfig.Service
                }
            })], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("我要充值")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "newTab pt15 fix"}, [a("router-link", {attrs: {to: "/ebankPay"}}, [t._v("银行转账")]), t._v(" "), a("router-link", {attrs: {to: "/quickPay"}}, [t._v("快捷支付")]), t._v(" "), a("router-link", {attrs: {to: "/alipay"}}, [t._v("支付宝充值")]), t._v(" "), a("router-link", {
                staticClass: "curr",
                attrs: {to: "/wechatPay"}
            }, [t._v("微信支付")])], 1), t._v(" "), t.isMaint ? a("div", [t._m(0)]) : ["微信支付" == t.TypeName ? a("div", [a("div", {staticClass: "row fix"}, [a("div", {staticClass: "colMd9"}, [a("div", {staticClass: "stepBox h200"}, [a("em", [t._v("")]), a("span", [a("b", [t._v("请用微信扫一扫以下二维码进行充值")]), t._v("，单笔最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))]), t._v("元")]), t._v(" "), a("ul", {
                staticClass: "alipayee",
                staticStyle: {margin: "20px 0", "margin-bottom": "0", "text-align": "center"}
            }, [a("li", [a("img", {
                staticStyle: {width: "130px"},
                attrs: {
                    src: t.$store.state.constant.ImgHost + (t.CodeImg || "/system/common/other/noQRcode.png"),
                    alt: ""
                }
            })])])])])]), t._v(" "), a("div", {staticClass: "stepBox"}, [a("em", [t._v("")]), a("span", [a("b", [t._v("请认真填写您的转账信息：")]), t._v("请务必转账后再提交订单,否则无法及时查到您的款项！ 转账后请添加好友留言账号")]), t._v(" "), a("ul", [a("li", [a("ins", [a("b", [t._v("充值金额：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money",
                    arg: "Money"
                }],
                staticClass: "userInput",
                attrs: {type: "text", tag: "充值金额"},
                domProps: {value: t.ArrObj.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Money.isPass,
                    message: t.va.Money.message
                }
            })], 1), a("ins", [a("b", [t._v("您的微信昵称：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:PayUser.RealName",
                    arg: "PayUser",
                    modifiers: {RealName: !0}
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.ArrObj.PayUser,
                    expression: "ArrObj.PayUser",
                    arg: "PayUser"
                }],
                staticClass: "userInput",
                attrs: {type: "text", tag: "您的微信昵称"},
                domProps: {value: t.ArrObj.PayUser},
                on: {
                    input: function (e) {
                        e.target.composing || (t.ArrObj.PayUser = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.PayUser.isPass,
                    message: t.va.PayUser.message
                }
            })], 1)])]), t._v(" "), a("h6", {staticStyle: {"text-align": "center"}}, [a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("提交充值订单")])]), t._v(" "), a("div", {staticClass: "userTip"}, [a("p", {staticClass: "mgl20"}, [t._v("※ 温馨提示："), a("br"), t._v("1、请转账完成后再提交充值订单。"), a("br"), t._v("2、请正确填写您的昵称和充值金额。"), a("br"), t._v("3、微信昵称并非微信账号，请注意区分。"), a("br"), t._v("4、转账1笔提交1次，请勿重复提交订单。")])])])]) : a("div", {staticClass: "stepBox"}, [a("ul", {staticClass: "submitContent mg30"}, [a("li", [a("span", [t._v("充值金额：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money",
                    arg: "Money"
                }],
                staticClass: "userInput",
                attrs: {tag: "充值金额", type: "text"},
                domProps: {value: t.ArrObj.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                staticStyle: {display: "inline"},
                attrs: {isPass: t.va.Money.isPass, message: t.va.Money.message}
            })], 1), t._v(" "), a("li", [a("span", [t._v("充值方式：")]), t._v(" "), a("div", {staticClass: "bankblockList fix"}, [a("div", {
                staticClass: "wechatCon rb rb_active",
                attrs: {name: "rbt", type: "radiobox"}
            }, [a("i", {attrs: {checked: "checked"}}), a("span", {
                staticClass: "wechat",
                attrs: {checked: "checked"}
            }, [t._v(" 微信支付")]), a("em", {attrs: {checked: "checked"}})])])]), t._v(" "), a("li", [a("span"), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("充值")])])]), t._v(" "), a("div", {staticClass: "userTip"}, [a("p", [t._v("※ 温馨提示："), a("br"), t._v("\r\n                1、使用微信扫一扫二维码进行支付，系统自动到账。"), a("br"), t._v("\r\n                2、单笔充值金额最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))]), t._v("元。"), a("br"), t._v("\r\n                3、转账1笔提交1次，请勿重复提交订单。"), a("br")])])])]], 2)]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.layerBg,
                    expression: "layerBg"
                }], staticClass: "layerBg"
            }), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.layerShow,
                    expression: "layerShow"
                }], staticClass: "layerBox"
            }, [a("div", {
                staticClass: "layui-layer layui-layer-page  layer-anim",
                staticStyle: {"z-index": "19891018", width: "650px", height: "500px", top: "256.5px", left: "307px"},
                attrs: {id: "layui-layer4", type: "page", times: "4", showtime: "0", contype: "string"}
            }, [a("div", {
                staticClass: "layui-layer-title",
                staticStyle: {cursor: "move"},
                attrs: {move: "ok"}
            }, [t._v("手机扫一扫支付")]), t._v(" "), a("div", {
                staticClass: "layui-layer-content",
                staticStyle: {height: "500px"},
                attrs: {id: ""}
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    margin: "0",
                    "text-align": "center",
                    padding: "10px 0"
                }
            }, [t._v("充值金额:¥" + t._s(t.ArrObj.Money))]), a("div", {staticStyle: {padding: "15px 20px"}}, [a("div", {
                staticStyle: {
                    padding: "10px",
                    "text-align": "center"
                }, attrs: {id: "qrdiv"}
            }, [a("div", {
                ref: "qrcode",
                staticStyle: {"text-align": "center"},
                attrs: {id: "qrcode"}
            })]), t._m(1)])]), t._v(" "), a("span", {staticClass: "layui-layer-setwin"}, [a("a", {
                staticClass: "close",
                on: {click: t.close}
            })])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "maintain",
                staticStyle: {"padding-top": "180px", "padding-bottom": "180px"}
            }, [a("i", {staticClass: "iconfont"}), t._v("微信支付维护中，请选择其它充值方式")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "userTip",
                staticStyle: {margin: "15px 0 0 0"}
            }, [a("p", [t._v("温馨提示：支付成功后，会在一分钟内为您添加额度，请刷新您的账户余额!")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "logoCon"}, [a("div", {staticClass: "logo container fix"}, [a("div", {staticClass: "logoL fix"}, [a("router-link", {attrs: {to: "/"}}, [a("img", {
                attrs: {
                    height: "50",
                    src: t.$store.state.constant.ImgHost + t.s.PCLogo.logo1
                }
            })]), t._v(" "), 10 == t.s.Style.Id ? a("a", {staticClass: "spread"}, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + t.s.Style.LogoL,
                    alt: ""
                }
            })]) : t._e()], 1), t._v(" "), a("div", {staticClass: "logoR"}, [a("a", {
                staticClass: "serviceLink ServiceBtn",
                on: {
                    click: function (e) {
                        t.getServer(t.s.Service.Url, t.s.Service.Width, t.s.Service.Height)
                    }
                }
            }, [a("i", {staticClass: "iconfont"}), a("span")])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("我要充值")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "newTab pt15 fix"}, [a("router-link", {attrs: {to: "/ebankPay"}}, [t._v("银行转账")]), t._v(" "), a("router-link", {
                staticClass: "curr",
                attrs: {to: "/quickPay"}
            }, [t._v("快捷支付")]), t._v(" "), a("router-link", {attrs: {to: "/alipay"}}, [t._v("支付宝充值")]), t._v(" "), a("router-link", {attrs: {to: "/wechatPay"}}, [t._v("微信支付")])], 1), t._v(" "), t.isMaint ? a("div", [t._m(0)]) : a("div", {staticClass: "stepBox quickPay"}, [a("ul", {staticClass: "submitContent mg30"}, [a("li", [a("span", [t._v("选择银行：")]), t._v(" "), a("div", {staticClass: "bankblockList fix"}, t._l(t.BankList, function (e) {
                return a("div", {
                    class: {rb: !0, rb_active: t.BankId == e.BankId}, on: {
                        click: function (a) {
                            t.setBank(e.BankId)
                        }
                    }
                }, [a("i"), a("span", {class: e.BankCode}, [t._v(" " + t._s(e.BankName))]), a("em")])
            }))]), t._v(" "), a("li", [a("span", [t._v("充值金额：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money",
                    arg: "Money"
                }],
                staticClass: "userInput",
                attrs: {tag: "充值金额", type: "text"},
                domProps: {value: t.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Money.isPass,
                    message: t.va.Money.message
                }
            })], 1), t._v(" "), a("li", [a("span"), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("充值")])])]), t._v(" "), a("div", {staticClass: "userTip"}, [a("p", [t._v("※ 温馨提示："), a("br"), t._v("\r\n                      1、快捷支付需开通网银才能进行支付。"), a("br"), t._v("\r\n                      2、单笔充值金额最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))]), t._v("元。"), a("br"), t._v("\r\n                      3、充值成功后，点击“返回商户”即可自动到账。\r\n                  ")])])])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "maintain",
                staticStyle: {"padding-top": "180px", "padding-bottom": "180px"}
            }, [a("i", {staticClass: "iconfont"}), t._v("快捷支付维护中，请选择其它充值方式")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container registerPage"}, [a("h3", {staticClass: "reg_tit"}, [t._v("用户注册")]), t._v(" "), a("p", {staticClass: "reg_small"}, [a("ins", [t._v(t._s(t.NickName))]), t._v("都已经注册了，赶紧加入吧！注册后系统将随机分配一张个性的头像。")]), t._v(" "), a("ul", {staticClass: "submitContent regMain"}, [a("li", [a("span", [t._v("邀请码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:InvitationCode",
                    value: [{reg: /^\d{8}$/}],
                    expression: "[{'reg':/^\\d{8}$/}]",
                    arg: "InvitationCode"
                }, {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.InvitationCode,
                    expression: "InvitationCode",
                    arg: "InvitationCode",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput",
                attrs: {
                    regMsg: "您输入的邀请码错误或者已过期",
                    tag: "邀请码",
                    type: "url",
                    placeholder: "请输入邀请码",
                    readonly: t.YqmReadOnly
                },
                domProps: {value: t.InvitationCode},
                on: {
                    change: function (e) {
                        t.InvitationCode = e.target.value
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.InvitationCode.isPass,
                    message: t.va.InvitationCode.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("账号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:UserName",
                    arg: "UserName"
                }, {name: "model", rawName: "v-model", value: t.UserName, expression: "UserName", arg: "UserName"}],
                staticClass: "userInput",
                attrs: {tag: "帐号", placeholder: "请输入账号", type: "url", autocomplete: "off"},
                domProps: {value: t.UserName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.UserName = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.UserName.isPass,
                    message: t.va.UserName.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("设置密码：")]), t._v(" "), a("input", {
                staticClass: "dpn",
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{name: "va", rawName: "v-va:Password", arg: "Password"}, {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.Password,
                    expression: "Password",
                    arg: "Password",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput",
                attrs: {type: "password", tag: "设置密码", placeholder: "请输入密码", autocomplete: "off"},
                domProps: {value: t.Password},
                on: {
                    change: function (e) {
                        t.Password = e.target.value
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Password.isPass,
                    message: t.va.Password.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("确认密码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:checkPassword.Password",
                    value: [{equal: "Password"}],
                    expression: "[{'equal':'Password'}]",
                    arg: "checkPassword",
                    modifiers: {Password: !0}
                }, {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.checkPassword,
                    expression: "checkPassword",
                    arg: "checkPassword",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput _no_paste",
                attrs: {type: "password", tag: "确认密码", placeholder: "请再次输入密码", autocomplete: "off"},
                domProps: {value: t.checkPassword},
                on: {
                    change: function (e) {
                        t.checkPassword = e.target.value
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.checkPassword.isPass,
                    message: t.va.checkPassword.message
                }
            })], 1), t._v(" "), a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:ImgCode",
                    arg: "ImgCode"
                }, {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: t.ImgCode,
                    expression: "ImgCode",
                    arg: "ImgCode",
                    modifiers: {lazy: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "验证码", placeholder: "请输入验证码", type: "text"},
                domProps: {value: t.ImgCode},
                on: {
                    change: function (e) {
                        t.ImgCode = e.target.value
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.ImgCode.isPass,
                    message: t.va.ImgCode.message
                }
            }), t._v(" "), a("img", {
                staticClass: "codeImg",
                attrs: {src: t.YzmSrc, alt: ""},
                on: {click: t.refreshYzm}
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("p", {
                staticStyle: {
                    display: "inline",
                    "margin-left": "0",
                    "font-size": "12px",
                    color: "#9a9a9a"
                }
            }, [a("input", {
                directives: [{name: "model", rawName: "v-model", value: t.RegLimit, expression: "RegLimit"}],
                staticStyle: {width: "inherit", "margin-right": "5px"},
                attrs: {type: "checkbox"},
                domProps: {checked: Array.isArray(t.RegLimit) ? t._i(t.RegLimit, null) > -1 : t.RegLimit},
                on: {
                    __c: function (e) {
                        var a = t.RegLimit, s = e.target, n = !!s.checked;
                        if (Array.isArray(a)) {
                            var r = null, i = t._i(a, r);
                            n ? i < 0 && (t.RegLimit = a.concat(r)) : i > -1 && (t.RegLimit = a.slice(0, i).concat(a.slice(i + 1)))
                        } else t.RegLimit = n
                    }
                }
            }), t._v("我已经年满18岁\r\n                "), a("span", {staticClass: "Validform_checktip"})])]), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "mainColorBtn submitBtnBig ClickShade",
                on: {click: t.register}
            }, [t._v("注 册")]), t._v(" "), a("a", {
                staticClass: "resetForm submitBtnBig ClickShade",
                staticStyle: {background: "#717074"},
                on: {click: t.reset}
            }, [t._v("重 置")])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "notFoundCon"}, [a("div", {staticClass: "notFound"}, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + "/system/pc/error/404.png",
                    alt: "",
                    width: "404"
                }
            }), t._v(" "), a("h1", [t._v("抱歉，无法访问此页面！")]), t._v(" "), a("p", [t._v("您可以尝试以下操作："), a("br"), t._v("\n      1.页面可能不存在，"), a("a", {
                staticClass: "backHome",
                on: {click: t.goHome}
            }, [t._v("返回首页")]), a("br"), t._v("\n      2.页面可能已失效，"), a("a", {
                staticClass: "backHome",
                on: {click: t.back}
            }, [t._v("返回上一页")])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container pt15 fix"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("银行卡管理")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "bindCard"}, [a("div", {staticClass: "fix"}, [t._l(t.$store.state.UserBankCardList, function (e) {
                return a("div", {staticClass: "cardItem"}, [a("div", {staticClass: "bankName"}, [a("i", {class: t.bankArr[e.BankName]}), t._v(t._s(e.BankName))]), t._v(" "), a("div", {staticClass: "bankNum"}, [t._v("尾号：*********" + t._s(e.CardNum.substr(-4)))]), t._v(" "), a("div", {staticClass: "cardInfo fix"}, [t._m(0, !0), t._v(" "), a("div", {staticClass: "cardOperation"}, [e.isLock && !e.IsDisable ? a("a", [t._v("已锁定")]) : t._e(), t._v(" "), e.IsDisable ? a("span", {style: {color: t.$store.state.color.red}}, [t._v("已禁用")]) : [a("span", {staticClass: "_islock"}, [t._v("未锁定")]), t._v(" "), a("router-link", {
                    staticClass: "_set_bankcard",
                    attrs: {to: "/setBankcard?Q=" + e.BankCardID}
                }, [t._v("修改")])]], 2)]), t._v(" "), a("div", {staticClass: "cardTxt"}, [a("span", [t._v("绑卡日期：" + t._s(e.Time.split(" ")[0]))]), t._v(" "), a("em", [t._v(t._s(e.RealName))])])])
            }), t._v(" "), a("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.CardList.length < 5,
                    expression: "CardList.length<5"
                }],
                staticClass: "cardEmpty cardItem ClickShade",
                attrs: {tag: "div", to: "/setBankcard"},
                on: {click: t.setCard}
            }, [t._v("立即添加银行卡")])], 2), t._v(" "), a("div", {
                staticClass: "userTip mgt15",
                domProps: {innerHTML: t._s(t.tipHtml)}
            })])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "cardStyle cardPink"}, [t._v("储蓄卡"), a("em")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container bet"}, [a("table", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.$store.state.showAllLottery,
                    expression: "this.$store.state.showAllLottery"
                }], staticClass: "betMoreList", staticStyle: {display: "table"}, on: {
                    mouseleave: function (e) {
                        t.$store.commit("toggleAllLottery", !1)
                    }
                }
            }, [a("tbody", [a("tr", t._l(t.lotteryClass, function (e) {
                return a("th", {style: {width: "快3" === e ? "214px" : ""}}, [t._v(t._s(e))])
            })), t._v(" "), a("tr", t._l(t.lotteryClass, function (e) {
                return a("td", t._l(t.getCodeList(e), function (e) {
                    return a("router-link", {attrs: {to: t.getLink(t.LotteryList[e].LotteryType, e)}}, [t._v("\n              " + t._s(t.LotteryList[e].LotteryName) + "\n            ")])
                }))
            }))])]), t._v(" "), a("lotteryTop"), t._v(" "), a("div", {staticClass: "betContent fix"}, [a("div", {staticClass: "betLeft"}, [t.isGroupLottery ? a("betNav") : t._e(), t._v(" "), "K3" !== t.ltype ? a("betArea") : t._e(), t._v(" "), "K3" === t.ltype ? a("k3") : t._e()], 1), t._v(" "), a("lotteryRight")], 1)], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isNoticeShow && t.$store.state.NoticeData && t.$store.state.NoticeData.length,
                    expression: "isNoticeShow&&$store.state.NoticeData&&$store.state.NoticeData.length"
                }], staticClass: "notice"
            }, [a("div", {staticClass: "noticCon"}, [a("h3", [t._v("网站最新公告 "), a("a", {
                staticClass: "iconfont closeNotice",
                on: {click: t.close}
            }, [t._v("")])]), t._v(" "), a("ul", t._l(t.$store.state.NoticeData, function (e, s) {
                return s < 1 ? a("li", [a("a", {
                    on: {
                        click: function (a) {
                            t.getUrl(e.ID)
                        }
                    }
                }, [a("i"), t._v(t._s(e.Title)), a("br"), t._v("[" + t._s(e.Add_Time) + "]")])]) : t._e()
            }))])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "opts",
                style: {display: "block", width: (t.WW || 231) + "px", top: "30px", left: "-1px"}
            }, t._l(t.Arr, function (e, s) {
                return a("a", {
                    attrs: {href: "javascript:;", value: s}, on: {
                        click: function (a) {
                            t.$parent.close(e, s, t.ShowKey)
                        }
                    }
                }, [t._v(t._s(e))])
            }))
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                class: {betHeader: t.isLotteryPage},
                attrs: {id: "HeaderTop"}
            }, [a("div", {staticClass: "snav"}, [a("div", {staticClass: "container"}, [a("div", {staticClass: "snavAll"}, [a("router-link", {attrs: {to: "/index"}}, [t.isLotteryPage ? t._e() : [t._v("Hi，欢迎来到" + t._s(t.s.SiteConfig.Name) + "！")]], 2), t._v(" "), a("ins", [t._v(" | ")]), t._v(" "), a("a", {
                staticClass: "betNavMore",
                on: {
                    mouseenter: function (e) {
                        t.$store.commit("toggleAllLottery", !0)
                    }
                }
            }, [t._v("全部彩票")])], 1), t._v(" "), a("ul", {staticClass: "snavInfo"}, [t.s.UserName ? [a("li", {staticClass: "userName MsgShow"}, [a("a", {
                staticClass: "_personalInfo",
                on: {
                    click: t.getUrl, mouseenter: function (e) {
                        return e.target !== e.currentTarget ? null : void t.getCard("0", e, "下")
                    }, mouseleave: function (e) {
                        return e.target !== e.currentTarget ? null : void t.getOut(e)
                    }
                }
            }, [t.s.UserPhoto ? a("img", {
                attrs: {
                    alt: "",
                    src: t.s.constant.ImgHost + t.s.constant.PhotoPath + t.s.UserPhoto
                }
            }) : t._e(), t._v(" "), a("i", [t._v(t._s(t.s.UserName))])]), t._v(" "), a("span", {
                attrs: {
                    id: "unreadMsgNum",
                    onclick: "window.location='letter'"
                }, on: {
                    mouseover: function (e) {
                        t.ShowLetter = !0
                    }, mouseleave: t.letterOut
                }
            }, [t._v(t._s(t.UserUnreadData.length > 5 ? "5+" : t.UserUnreadData.length))]), t._v(" "), t.ShowLetter ? a("div", {
                staticClass: "messageShow MessageShowContent",
                on: {mouseenter: t.ShowLe, mouseleave: t.OutLe}
            }, [a("i"), t._v(" "), a("dl", [a("dt", [a("p", [a("router-link", {attrs: {to: "/letter"}}, [t._v("\n                    我的未读消息("), a("small", [t._v(t._s(t.UserUnreadData.length > 5 ? "5+" : t.UserUnreadData.length))]), t._v(")\n                  ")])], 1), t._v(" "), a("router-link", {attrs: {to: "/letter"}}, [t._v("更多")])], 1), t._v(" "), a("dd", t._l(t.UserUnreadData, function (e) {
                return a("p", {staticClass: "mList"}, [a("a", {
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/letterDetail", query: {id: e.ID}})
                        }
                    }
                }, [t._v(t._s(e.Title))])])
            }))])]) : t._e()]), t._v(" "), a("li", {
                staticClass: "HoverShow", on: {
                    mouseover: function (e) {
                        t.ShowAccount = !0
                    }, mouseout: function (e) {
                        t.ShowAccount = !1
                    }
                }
            }, [a("router-link", {attrs: {to: "/securityCenter"}}, [t._v("我的账户 "), a("i", {staticClass: "iconfont"}, [t._v("")])]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowAccount,
                    expression: "ShowAccount"
                }], staticClass: "accountList HoverShowContent"
            }, [a("i"), t._v(" "), a("router-link", {attrs: {to: "/BetRecord"}}, [t._v("投注记录")]), t._v(" "), a("router-link", {attrs: {to: "/BillRecord"}}, [t._v("交易记录")]), t._v(" "), a("router-link", {attrs: {to: "/personalInfo"}}, [t._v("个人信息")]), t._v(" "), a("router-link", {attrs: {to: "/securityCenter"}}, [t._v("安全中心")]), t._v(" "), t.s.AgentRebate ? a("router-link", {attrs: {to: "/agentReport"}}, [t._v("代理中心")]) : t._e()], 1)], 1), t._v(" "), a("li", [t._v("余额：\n          "), t.isShowBanlance ? [a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowBanlance,
                    expression: "isShowBanlance"
                }], staticClass: "GetMoney getMoney"
            }, [a("em", [t._v(t._s(t.s.UserBalance))]), t._v(" "), a("i", {
                class: t.RefreshClass,
                attrs: {id: "icon"},
                on: {
                    click: function (e) {
                        t.RefreshBanlance()
                    }
                }
            }, [t._v("")]), t._v(" "), a("i", {
                on: {
                    click: function (e) {
                        t.isShowBanlance = !t.isShowBanlance
                    }
                }
            }, [t._v("隐藏")])])] : t._e(), t._v(" "), a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isShowBanlance,
                    expression: "!isShowBanlance"
                }], staticClass: "ShowMoney showMoney"
            }, [t._v("已隐藏\n            "), a("i", {on: {click: t.toggleBalance}}, [t._v(t._s(t.isShowBanlance ? "隐藏" : "显示"))])])], 2), t._v(" "), a("li", [a("router-link", {attrs: {to: "/ebankPay"}}, [t._v("充值")])], 1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/withdraw"}}, [t._v("提现")])], 1), t._v(" "), a("li", {
                staticClass: "LoginOut",
                on: {click: t.loginOut}
            }, [t._v("退出")])] : [a("li", [a("router-link", {attrs: {to: "/login"}}, [t._v("亲，请登录")]), a("i", {staticClass: "vertical"})], 1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/register"}}, [t._v("用户注册")])], 1)], t._v(" "), !t.Service || !t.isLotteryPage && t.$parent.hasMid ? t._e() : a("a", {
                staticClass: "serviceLink ServiceBtn",
                on: {
                    click: function (e) {
                        t.getServer(t.Service.Url, t.Service.Width, t.Service.Height)
                    }
                }
            }, [a("i", {staticClass: "iconfont"}), a("span")])], 2)]), t._v(" "), a("UserCard", {attrs: {cardArr: t.cardArr}})], 1)])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container fix pt15"}, [a("UserSlide"), t._v(" "), t._m(0)], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("代理说明")]), t._v(" "), a("div", {staticClass: "userMain agentIntro"}, [a("img", {
                attrs: {
                    src: "http://imagess-google.com/test/../system/pc/other/agentIntro.jpg",
                    alt: "代理说明",
                    width: "100%",
                    height: "160"
                }
            }), t._v(" "), a("em", [t._v("当您能看到这个页面，说明您的账号既是玩家账号也是代理账号，既可以自己投注，也可以发展下级玩家，赚取返点佣金。")]), t._v(" "), a("h3", [t._v("如何赚取返点？")]), t._v(" "), a("p", [t._v("可获得的返点，等于自身返点与下级返点的差值，如自身返点5，下级返点3，你将能获得下级投注金额2%的返点，如下级投注100元，你将会获得2元。点击下级开户，可查看自身返点，也可为下级设置返点。")]), t._v(" "), a("h3", [t._v("如何为下级开户？")]), t._v(" "), a("p", [t._v("点击下级开户，先为您的下级设置返点，设置成功后会生成一条邀请码，将邀请码发送给您的下级注册，注册后他就是您的下级，点击会员管理，就能查看他注册的账号；"), a("br"), t._v("如果您为下级设置的是代理类型的账号，那么您的下级就能继续发展下级，如果设置的是玩家类型，那么您的下级只能投注，不能再发展下级，也看不到代理中心；")]), t._v(" "), a("h3", [t._v("温馨提示：")]), t._v(" "), a("p", [t._v("返点不同赔率也不同，点击返点赔率表，可查看返点赔率；"), a("br"), t._v("\r\n            返点越低，赔率就越低，建议为下级设置的返点不要过低；"), a("br"), t._v("\r\n            可在代理报表、投注明细、交易明细查看代理的发展情况；"), a("br"), t._v("\r\n            建议开设的下级也是代理类型，无论发展了几级，您都能获得返点。")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("ul", {staticClass: "betFilter"}, t._l(t.LotteryConfig, function (e) {
                return a("li", {
                    class: {curr: e.name === t.nowMode.name}, on: {
                        click: function (a) {
                            t.changeMode(e)
                        }
                    }
                }, [t._v(t._s(e.name))])
            })), t._v(" "), a("div", {staticClass: "betTip"}, [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v(t._s(t.tip) + "赔率" + t._s(t.tipAward) + "倍。")]), t._v(" "), a("div", {staticClass: "checkNumber"}, ["G10" !== t.nowMode.mode ? a("ul", t._l(t.nowItemArr, function (e, s) {
                return a("li", {
                    class: {active: t.shouldHighlight(e)}, on: {
                        click: function (a) {
                            t.choose(e, s)
                        }
                    }
                }, [a("a", {staticClass: "ClickShade"}, [t._v(t._s(e))]), t._v(" "), "A10" === t.nowMode.mode ? a("span", [t._v(" " + t._s("string" == typeof e ? "赔率" : "赔") + t._s(t.sumOdds[s]))]) : t._e()])
            })) : t._e(), t._v(" "), "G10" === t.nowMode.mode ? a("ul", t._l(t.G10ItemArr1, function (e, s) {
                return a("li", {
                    class: {active: t.chosen.indexOf(e) > -1}, on: {
                        click: function (a) {
                            t.choose(e)
                        }
                    }
                }, [a("a", {staticClass: "ClickShade"}, [t._v(t._s(e))])])
            })) : t._e(), t._v(" "), "G10" === t.nowMode.mode ? a("ul", t._l(t.G10ItemArr2, function (e, s) {
                return a("li", {
                    class: {active: t.chosen.indexOf(e) > -1}, on: {
                        click: function (a) {
                            t.choose(e)
                        }
                    }
                }, [a("a", {staticClass: "ClickShade"}, [t._v(t._s(e))])])
            })) : t._e()]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPanel,
                    expression: "showPanel"
                }], staticClass: "Panel"
            }, [a("p", {staticClass: "betTotal"}, [t._v("您选择了 "), a("em", [t._v(t._s(t.betCount))]), t._v(" 注")]), t._v(" "), a("a", {
                staticClass: "betBtn ClickShade",
                on: {click: t.addBet}
            }, [t._v("确认选号")])]), t._v(" "), a("div", {staticClass: "checkedList"}, [a("table", {ref: "k3Basket"}, [a("tbody", t._l(t.basket, function (e, s) {
                return a("tr", [a("td", [a("i", {staticClass: "order_type"}, [t._v("\r\n                [" + t._s(t.getModeName(e.play_detail_code.slice(-3))) + "] " + t._s(e.betting_number) + "\r\n              ")])]), t._v(" "), a("td", [a("span", {staticClass: "order_zhushu"}, [t._v("\r\n                总共 "), a("i", {staticClass: "order_num c_red"}, [t._v(t._s(e.betting_count))]), t._v("注\r\n              ")])]), t._v(" "), a("td", [a("i", {
                    staticClass: "order_price"
                }, [t._v("\r\n                每注"), a("input", {
                    staticClass: "eachPrice",
                    attrs: {type: "text"},
                    domProps: {value: t.getUnitPriceStr(e.betting_money, e.betting_count)},
                    on: {
                        change: function (e) {
                            t.changeUnitPrice(s, e.target)
                        }
                    }
                }), t._v("元\r\n              ")])]), t._v(" "), a("td", [a("i", {staticClass: "c_3"}, [a("span", {staticClass: "hide_this"}, [t._v("\r\n                  可中金额："), a("i", {staticClass: "orderMoney c_red"}, [t._v(t._s((e.betting_point.split("-")[0] * e.betting_money / e.betting_count).toFixed(2)))]), t._v("元\r\n                ")])])]), t._v(" "), a("td", [a("i", {
                    staticClass: "orderCancel",
                    on: {
                        click: function (e) {
                            t.deleteBet(s)
                        }
                    }
                }, [t._v("删除")])])])
            }))])]), t._v(" "), a("div", {staticClass: "Bet"}, [a("p", {staticClass: "betTotal"}, [t._v("方案注数 "), a("em", [t._v(t._s(t.basketBets))]), t._v(" 注，金额 "), a("i", {staticClass: "money"}, [t._v(t._s(t.basketTotal))]), t._v(" 元")]), t._v(" "), a("a", {
                staticClass: "betBtn ClickShade UnClick",
                on: {click: t.confirmBet}
            }, [t._v("立即投注")])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "rebateDes"}, [a("div", {
                staticClass: "rebateNav fix",
                attrs: {id: "rebateNav"}
            }, t._l(t.BottomBoxList, function (e, s) {
                return a("a", {
                    class: {curr: t.BetweenType == s}, on: {
                        click: function (e) {
                            t.GETUrl(s)
                        }
                    }
                }, [t._v(t._s(e))])
            })), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ArrObj && "SSC" == t.BetweenType,
                    expression: "ArrObj&&BetweenType=='SSC'"
                }], staticClass: "testShow", attrs: {id: "testShow"}
            }, [t._v("温馨提示：时时彩是基数2元一注的奖金模式，要换算成赔率，只需奖金除以2即可。\r\n    ")]), t._v(" "), t.ArrObj ? a("div", {staticClass: "rebateContent fix"}, [a("ul", {
                staticClass: "rebateTitle",
                attrs: {id: "rebateTitle"}
            }, [t._m(0), t._v(" "), t._l(t.ArrObj.Mode, function (e) {
                return a("li", [t._v(t._s(e))])
            })], 2), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isMinData,
                    expression: "!isMinData"
                }], staticClass: "rebateTableCon"
            }, [a("i"), a("em"), t._v(" "), a("div", {staticClass: "rebateTable fix"}, t._l(t.ArrObj.Data, function (e) {
                return a("ul", {
                    class: {
                        isClass: e[0] % 1 === 0 || e[0] == t.ArrObj.Data[0][0],
                        noneed: e[0] % 1 !== 0 && e[0] != t.ArrObj.Data[0][0]
                    }, attrs: {"data-id": e[0]}, on: {
                        click: function (a) {
                            t.ShowDom(e[0])
                        }
                    }
                }, t._l(e, function (e, s) {
                    return a("li", [t._v(t._s(t.setMsg(t.BetweenType, s) + e))])
                }))
            }))]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isMinData,
                    expression: "isMinData"
                }], staticClass: "rebateTableCon minx"
            }, [a("i"), a("em"), t._v(" "), a("div", {staticClass: "rebateTable fix"}, t._l(t.ArrObj.Data, function (e) {
                return a("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e[0] <= t.aMax && e[0] > t.aMin,
                        expression: "n[0]<=aMax&&n[0]>aMin"
                    }],
                    class: {isClass: e[0] % 1 === 0 || e[0] == t.ArrObj.Data[0][0]},
                    attrs: {"data-id": e[0]},
                    on: {
                        click: function (a) {
                            t.MinList(e[0])
                        }
                    }
                }, t._l(e, function (e, s) {
                    return a("li", [t._v(t._s(t.setMsg(t.BetweenType, s) + e))])
                }))
            }))])]) : t._e(), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.ArrObj,
                    expression: "!ArrObj"
                }], attrs: {id: "noData"}
            }, [a("div", {staticClass: "notContent", staticStyle: {padding: "100px 0"}}, [t._v("功能完善中，将于近期添加完成！")])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("i", [t._v("玩法")]), a("span"), a("em", [t._v("返点")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "floorDetail",
                staticStyle: {display: "block"}
            }, ["每日加奖" == t.Type ? a("div", {staticClass: "inHtml"}, [t._m(0), t._v(" "), a("em", [t._v("昨日投注："), t.StateData.YesterdayBet ? a("i", [t._v(t._s(t.StateData.YesterdayBet))]) : a("i", [t._v("0")])]), t._v(" "), a("em", [t._v("当前等级："), t.StateData.UserGrade ? a("i", [t._v("VIP" + t._s(t.StateData.UserGrade))]) : a("i", [t._v("未登录")])]), t._v(" "), a("em", [t._v("加奖比例："), t.StateData.BonusRate ? a("i", [t._v(t._s(+t.StateData.BonusRate) + "%")]) : a("i", [t._v("0")])]), t._v(" "), a("em", [t._v("可得加奖："), t.StateData.Bonus ? a("i", [t._v(t._s(t.StateData.Bonus))]) : a("i", [t._v("0")])]), t._v(" "), a("a", {
                staticClass: "getBtn disable",
                attrs: {href: "javascript:;"},
                on: {click: t.getBtn}
            }, [t._v(t._s(t.ClickMsg))]), t._v(" "), t._m(1), t._v(" "), a("table", {attrs: {width: "60%"}}, [a("tbody", [a("tr", [t._m(2), t._v(" "), t._l(t.$store.state.RewardData[0].Title, function (e) {
                return a("th", [t._v(t._s(e))])
            })], 2), t._v(" "), t._l(t.$store.state.RewardData, function (e) {
                return a("tr", [a("td", [t._v(t._s(e.Grade))]), a("td", [t._v(t._s(e.Rewards[0]))]), a("td", [t._v(t._s(e.Rewards[1]))]), a("td", [t._v(t._s(e.Rewards[2]))])])
            })], 2)]), t._v(" "), t._m(3)]) : t._e(), t._v(" "), "晋级奖励" == t.Type ? a("div", {staticClass: "inHtml"}, [t._m(4), t._v(" "), t.$store.state.UserUpGradeBonus ? [a("em", [t._v("当前等级："), a("i", [t._v("VIP" + t._s(t.$store.state.UserUpGradeBonus.Grade))])]), t._v(" "), a("em", [t._v("晋级奖励："), a("i", [t._v(t._s(t.$store.state.UserUpGradeBonus.GradeBonus))])])] : [a("em", [t._v("当前等级："), a("i", [t._v("未登录")])]), t._v(" "), a("em", [t._v("晋级奖励："), a("i", [t._v("0")])])], t._v(" "), t.$store.state.UserUpGradeBonus ? a("a", {
                class: t.$store.state.UserUpGradeBonus.State && "disable",
                attrs: {href: "javascript:;"},
                on: {click: t.getBtn}
            }, [t._v(t._s(0 == t.$store.state.UserUpGradeBonus.State ? "立即领取" : 1 == t.$store.state.UserUpGradeBonus.State ? "已领取" : "不可领取"))]) : a("a", {staticClass: "disable"}, [t._v("不可领取")]), t._v(" "), t._m(5), t._v(" "), a("table", {
                staticStyle: {"table-layout": "fixed"},
                attrs: {width: "60%"}
            }, [a("tbody", [t._m(6), t._v(" "), t._l(t.$store.state.GradeList, function (e) {
                return a("tr", [a("td", [t._v("VIP" + t._s(e.Grade))]), a("td", [t._v(t._s(e.GradeName))]), a("td", [t._v(t._s(e.GradeGrow))]), a("td", [t._v(t._s(e.Bonus))]), a("td", [t._v(t._s(e.JumpBonus))])])
            })], 2)]), t._v(" "), t._m(7)], 2) : t._e(), t._v(" "), a("div", {
                staticClass: "activityCon",
                domProps: {innerHTML: t._s(t.Info)}
            })])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [t._v("每日加奖"), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [t._v("加奖比例"), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("th", {staticClass: "tbplus"}, [a("i", [t._v("等级")]), a("ins"), a("em", [t._v("昨日投注")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [t._v("活动说明"), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [t._v("晋级奖励"), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [t._v("晋级机制"), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("等级")]), t._v(" "), a("th", [t._v("头衔")]), t._v(" "), a("th", [t._v("成长积分")]), t._v(" "), a("th", [t._v("晋级奖励(元)")]), t._v(" "), a("th", [t._v("跳级奖励(元)")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [t._v("活动说明"), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("div", {staticClass: "layerBg"}), t._v(" "), a("div", {staticClass: "layerBox"}, [a("div", {staticClass: "headImgList"}, [a("div", {staticClass: "headImgListTitle"}, [t._v("修改头像 "), a("a", {
                staticClass: "close",
                on: {click: t.close}
            })]), t._v(" "), a("div", {staticClass: "headImgContent"}, t._l(t.$store.state.DefaultPhotoList, function (e) {
                return a("a", {
                    class: {curr: t.checkName == e.ImageName},
                    attrs: {title: e.ImageName},
                    on: {
                        click: function (a) {
                            t.getImg(e.ImageUrl, e.ImageName)
                        }
                    }
                }, [a("img", {
                    staticClass: "headImg",
                    attrs: {
                        src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + e.ImageUrl,
                        alt: ""
                    }
                })])
            })), t._v(" "), a("div", {staticClass: "headImgView"}, [a("h5", [t._v("预览")]), a("p", [t._v("100x100")]), t._v(" "), a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + t.checkImg,
                    alt: ""
                }
            }), t._v(" "), a("h5", {
                staticClass: "theName",
                staticStyle: {color: "#53a8f1"}
            }, [t._v(t._s(t.checkName))]), t._v(" "), a("div", {staticClass: "button"}, [a("a", {
                staticClass: "submitBtn",
                on: {click: t.upHeadImg}
            }, [t._v("保存头像")]), t._v(" "), a("a", {
                staticClass: "submitBtn cancel",
                on: {click: t.close}
            }, [t._v("取消")])])])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container pt15 fix"}, [a("div", {staticClass: "wrapL"}, [a("div", {staticClass: "rowR myCol"}, [t.LotteryClass ? a("ul", {staticClass: "subnav"}, t._l(t.LotteryClass, function (e, s) {
                return s < 10 ? a("li", [a("router-link", {
                    staticClass: "MustLogin",
                    attrs: {to: "/lottery/" + e.LotteryType + "/" + e.LotteryCode}
                }, [a("i", {class: "iconfont L_" + e.LotteryType}), a("span", {staticClass: "sortName"}, [t._v(t._s(e.LotteryName))]), a("span", {staticClass: "des"}, [t._v(t._s(e.LotteryIntro))])])], 1) : t._e()
            })) : t._e()])]), t._v(" "), a("div", {staticClass: "wrapC"}, [a("div", {staticClass: "banner defaultImg"}, [t.$store.state.BannerList ? a("BannerBox", {
                attrs: {
                    dArr: t.$store.state.BannerList,
                    autoPlay: "true"
                }
            }) : t._e()], 1), t._v(" "), a("div", {staticClass: "autoTab"}, [a("div", {staticClass: "slideTxtBox"}, [a("div", {staticClass: "hd"}, [a("ul", {staticClass: "fix"}, t._l(t.lotteryArr, function (e, s) {
                return a("li", {
                    class: {on: t.lotteryNum == e}, on: {
                        click: function (a) {
                            t.setLotter(e)
                        }
                    }
                }, [t._v(t._s(s))])
            }))]), t._v(" "), a("div", {staticClass: "bd"}, [a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1401 == t.lotteryNum,
                    expression: "lotteryNum==1401"
                }]
            }, [t.lotteryList[1401] ? [a("li", {staticClass: "jsk3"}, [a("div", {
                staticClass: "dice",
                attrs: {align: "center"}
            }, [t._l(t.lotteryList[1401].LotteryOpen.split(","), function (e, s) {
                return [s > 0 ? a("i", [t._v("+")]) : t._e(), t._v(" "), a("span", {style: t.tapArr[e - 1]})]
            }), t._v(" "), a("i", [t._v("=")]), t._v(" "), a("em", [t._v(t._s(t.setHe(t.lotteryList[1401].LotteryOpen)))])], 2)]), t._v(" "), a("li", {staticClass: "text"}, [a("p", [a("span", [t._v("当前期：第 "), a("i", [t._v(t._s(t.lotteryList[1401].IssueNo))]), t._v(" 期")]), t._v(" "), a("span", [t._v("开奖号码："), a("i", [t._v(t._s(t.lotteryList[1401].LotteryOpen))])]), t._v(" "), a("span", [t._v("和值："), a("i", [t._v(t._s(t.setHe(t.lotteryList[1401].LotteryOpen)))])]), t._v(" "), a("span", [t._v("形态："), a("a", [t._v(t._s(t.setHe(t.lotteryList[1401].LotteryOpen) < 11 ? "小" : "大"))]), a("a", [t._v(t._s(t.setHe(t.lotteryList[1401].LotteryOpen) % 2 ? "单" : "双"))])])])])] : t._e()], 2), t._v(" "), a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1e3 == t.lotteryNum,
                    expression: "lotteryNum==1000"
                }]
            }, [t.lotteryList[1e3] ? [a("li", {staticClass: "cqssc fix"}, [a("div", {staticClass: "number"}, t._l(t.getArr(t.lotteryList[1e3].LotteryOpen), function (e) {
                return a("em", [t._v(t._s(e))])
            })), t._v(" "), a("router-link", {
                staticClass: "mainColorBtn MustLogin",
                attrs: {to: "/lottery/SSC/1000"}
            }, [t._v("立即投注")])], 1), t._v(" "), a("li", {staticClass: "text"}, [a("p", [a("span", [t._v("当前期：第 "), a("i", [t._v(t._s(t.lotteryList[1e3].IssueNo))]), t._v(" 期")]), t._v(" "), a("span", [t._v("开奖号码："), a("i", [t._v(t._s(t.lotteryList[1e3].LotteryOpen))])])])])] : t._e()], 2), t._v(" "), a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1101 == t.lotteryNum,
                    expression: "lotteryNum==1101"
                }]
            }, [t.lotteryList[1101] ? [a("li", {staticClass: "cqssc fix"}, [a("div", {staticClass: "number"}, t._l(t.getArr(t.lotteryList[1101].LotteryOpen), function (e) {
                return a("em", [t._v(t._s(e))])
            })), t._v(" "), a("router-link", {
                staticClass: "mainColorBtn MustLogin",
                attrs: {to: "/lottery/SYX5/1101"}
            }, [t._v("立即投注")])], 1), t._v(" "), a("li", {staticClass: "text"}, [a("p", [a("span", [t._v("当前期：第 "), a("i", [t._v(t._s(t.lotteryList[1101].IssueNo))]), t._v(" 期")]), t._v(" "), a("span", [t._v("开奖号码："), a("i", [t._v(t._s(t.lotteryList[1101].LotteryOpen))])])])])] : t._e()], 2)])])])]), t._v(" "), a("div", {staticClass: "wrapR"}, [t.s.UserName ? [a("div", {staticClass: "logined"}, [a("h3", [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("b", [t._v(t._s(t.s.UserName))])]), t._v(" "), a("a", {
                staticClass: "LoginOut",
                on: {click: t.loginOut}
            }, [a("em", [t._v("退出")]), a("i", {staticClass: "iconfont"}, [t._v("")])])])] : a("div", {staticClass: "loginRegister"}, [a("router-link", {attrs: {to: "/login"}}, [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v("登  录")]), a("router-link", {attrs: {to: "/register"}}, [t._v("用户注册")])], 1), t._v(" "), a("div", {staticClass: "slide"}, [a("h6", [t._v("昨日奖金榜")]), t._v(" "), t.$store.state.RankingList ? a("table", {
                staticClass: "yestodayWinning",
                staticStyle: {position: "relative"}
            }, t._l(t.$store.state.RankingList, function (e, s) {
                return s < 3 ? a("tr", {
                    attrs: {"data-id": e.UserId}, on: {
                        mouseenter: function (a) {
                            return a.target !== a.currentTarget ? null : void t.getCard(e.UserId, a, "左")
                        }, mouseleave: function (e) {
                            return e.target !== e.currentTarget ? null : void t.getOut(e)
                        }
                    }
                }, [a("td", [a("img", {attrs: {src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + e.UserPhoto}}), t._v(" "), a("p", [t._v("账号昵称："), a("span", [t._v(t._s(e.NickName))]), a("br"), t._v("昨日奖金："), a("i", [t._v(t._s(e.Bonus))])])]), t._v(" "), a("td", [a("ins", [t._v(t._s(s + 1))])])]) : t._e()
            })) : a("div", {
                staticClass: "winningListLoading",
                staticStyle: {padding: "18px 0 !important"}
            }, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + "/system/common/loadding/winningList.gif",
                    alt: ""
                }
            }), t._v(" "), a("h5", [t._v("排名计算中")]), t._v(" "), a("p", [t._v("将在00:20公布榜单，请稍候...")])])]), t._v(" "), a("div", {staticClass: "winningList"}, [a("h6", [t._v("中奖信息")]), t._v(" "), a("div", {
                staticClass: "winnerListSlide",
                staticStyle: {"box-sizing": "content-box"}
            }, [a("div", {
                staticClass: "bd",
                on: {mouseenter: t.clearScroll, mouseleave: t.isScroll}
            }, [a("ul", {
                staticClass: "winnerList",
                style: "cursor: pointer; position: relative;top:" + (-52 * t.BonusIndex + 15) + "px;transition: " + t.Transition
            }, t._l(t.BonusList, function (e) {
                return a("li", {
                    on: {
                        mouseenter: function (a) {
                            return a.target !== a.currentTarget ? null : void t.getCard(e.UserId, a, "左")
                        }, mouseleave: function (e) {
                            return e.target !== e.currentTarget ? null : void t.getOut(e)
                        }
                    }
                }, [a("img", {attrs: {src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + e.UserPhoto}}), t._v(" "), a("p", [t._v(t._s(e.Nickname ? e.Nickname : e.UserName) + " " + t._s(e.LotteryName)), a("br"), t._v("喜中"), a("span", [t._v("¥" + t._s(e.Bonus))])])])
            }))])])])], 2), t._v(" "), a("UserCard", {attrs: {cardArr: t.cardArr}})], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container fix pt15"}, [a("div", {staticClass: "helpSlider"}, [a("h2", [t._v("Help")]), t._v(" "), a("ul", {staticClass: "helpMenu"}, t._l(t.LeftNavArr, function (e, s) {
                return a("li", {
                    class: t.li_state === s ? "curr" : "", on: {
                        click: function (e) {
                            t.li_state = s
                        }
                    }
                }, [a("router-link", {attrs: {to: "/helpCenter?ID=" + e.ID}}, [t._v(t._s(e.Title))])], 1)
            }))]), t._v(" "), a("div", {staticClass: "helpContent"}, [a("h4", {staticClass: "_title"}, [t._v(t._s(t.titleName))]), t._v(" "), a("div", {
                staticClass: "_content helpArtical",
                domProps: {innerHTML: t._s(t.ArticleContent.Article)}
            })])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "slideUser"}, [a("ul", {staticClass: "sildeSession"}, [t._m(0), t._v(" "), a("router-link", {
                attrs: {
                    tag: "li",
                    to: "/personalInfo"
                }
            }, [a("a", [t._v("个人信息")])]), t._v(" "), a("router-link", {
                attrs: {
                    tag: "li",
                    to: "/securityCenter"
                }
            }, [a("a", [t._v("安全中心")])]), t._v(" "), a("router-link", {
                attrs: {
                    tag: "li",
                    to: "/manageBankcard"
                }
            }, [a("a", [t._v("银行卡管理")])])], 1), t._v(" "), a("ul", {staticClass: "sildeSession"}, [t._m(1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/BetRecord"}}, [t._v("投注记录")])], 1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/seekOrder"}}, [t._v("追号记录")])], 1)]), t._v(" "), a("ul", {staticClass: "sildeSession"}, [t._m(2), t._v(" "), a("li", [a("router-link", {attrs: {to: "/BillRecord"}}, [t._v("交易记录")])], 1), t._v(" "), a("router-link", {
                attrs: {
                    tag: "li",
                    to: "/PLstatement"
                }
            }, [a("a", [t._v("今日盈亏")])])], 1), t._v(" "), t.$store.state.AgentRebate ? a("ul", {staticClass: "sildeSession"}, [t._m(3), t._v(" "), a("li", [a("router-link", {attrs: {to: "/agentIntro"}}, [t._v("代理说明")])], 1), t._v(" "), a("router-link", {
                attrs: {
                    tag: "li",
                    to: "/agentReport"
                }
            }, [a("a", [t._v("代理报表")])]), t._v(" "), a("li", [a("router-link", {attrs: {to: "/lowerReport"}}, [t._v("下级报表")])], 1), t._v(" "), a("router-link", {
                attrs: {
                    tag: "li",
                    to: "/manageInvite"
                }
            }, [a("a", [t._v("下级开户")])]), t._v(" "), a("li", [a("router-link", {attrs: {to: "/agentMember"}}, [t._v("会员管理")])], 1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/agentBetRecord"}}, [t._v("投注明细")])], 1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/agentBillRecord"}}, [t._v("交易明细")])], 1)], 1) : t._e(), t._v(" "), a("ul", {staticClass: "sildeSession"}, [t._m(4), t._v(" "), a("li", [a("router-link", {attrs: {to: "/letter"}}, [t._v("站内信")])], 1), t._v(" "), a("li", [a("router-link", {attrs: {to: "/Notice"}}, [t._v("网站公告")])], 1)])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [a("span", [t._v("")]), t._v("账号管理")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [a("span", [t._v("")]), t._v("投注管理")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [a("span", [t._v("")]), t._v("资金管理")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [a("span", [t._v("")]), t._v("代理中心")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("h3", [a("span", [t._v("")]), t._v("消息管理")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "queue"}, [t.FindShow ? a("li", {staticClass: "right"}, [a("span", [t._v("选择验证方式")]), a("i")]) : t._e(), t._v(" "), t._m(0), t._v(" "), a("li", [a("span", [t._v(t._s(t.nTitle))]), a("i")]), t._v(" "), t._m(1)]), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("原安全密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{name: "va", rawName: "v-va:Password", arg: "Password"}, {
                    name: "model",
                    rawName: "v-model",
                    value: t.Password,
                    expression: "Password",
                    arg: "Password"
                }],
                staticClass: "userInput",
                attrs: {tag: "原安全密码", regMsg: "原安全密码应为6-16位字符", type: "password", autocomplete: "off"},
                domProps: {value: t.Password},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Password = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Password.isPass,
                    message: t.va.Password.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("验证安全密码")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("个人信息")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {
                staticClass: "newTab",
                attrs: {id: "newTab"}
            }, [a("router-link", {attrs: {to: "/personalInfo"}}, [t._v("个人资料")]), t._v(" "), a("router-link", {
                staticClass: "curr",
                attrs: {to: "/personalLevel"}
            }, [t._v("等级头衔")])], 1), t._v(" "), a("div", {staticClass: "evCall fix tapli"}, [a("div", {staticClass: "selectHeadImg"}, [a("img", {
                staticClass: "headImg",
                attrs: {
                    src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + t.$store.state.UserPhoto,
                    width: "100",
                    height: "100",
                    alt: ""
                }
            }), t._v(" "), a("a", {on: {click: t.imageShow}}, [t._v("修改头像")])]), t._v(" "), a("ul", {staticClass: "evCallInfo"}, [a("li", [a("em", [t._v("账")]), t._v("号："), a("span", [t._v(t._s(t.$store.state.UserName))])]), t._v(" "), a("li", [a("em", [t._v("等")]), t._v("级："), "-1" != Number(t.$store.state.UserUpGradeBonus.Grade) ? a("span", [t._v("VIP" + t._s(t.$store.state.UserUpGradeBonus.Grade))]) : a("span", [t._v("测试组")])]), t._v(" "), a("li", [a("em", [t._v("头")]), t._v("衔："), a("span", [t._v(t._s(t.UserTitle))])]), t._v(" "), a("li", [t._v("成长值："), a("span", [t._v(t._s(t.$store.state.UserGradeGrow))])]), t._v(" "), a("li", {staticStyle: {color: "#999999"}}, [t._v("每充值1元加1分")])]), t._v(" "), "-1" != t.$store.state.UserUpGradeBonus.Grade ? a("div", {staticClass: "levelBar"}, [a("p", {staticClass: "u-progress"}, [a("span", {
                staticClass: "pgbar",
                style: {width: t.perVal + "%"}
            }, [a("span", {staticClass: "pging"})])]), t._v(" "), a("em", {staticClass: "point"}, [t._v(t._s(t.perVal + "%"))]), t._v(" "), a("div", {staticClass: "levelBarInfo"}, [a("em", [t._v("VIP" + t._s(Number(t.$store.state.UserUpGradeBonus.Grade)))]), a("p", [a("span", {staticStyle: {color: "#f14241"}}, [t._v(t._s(t.$store.state.UserGradeGrow))]), t._v("/" + t._s(t.nextGradeGrow) + "  距离下一级还要" + t._s(Number(t.$store.state.UserUpGradeBonus.Grade) < 9 ? t.upGrow < 0 ? 0 : t.upGrow : "0") + "分")]), a("i", [t._v("VIP" + t._s(Number(t.$store.state.UserUpGradeBonus.Grade) < 9 ? Number(t.$store.state.UserUpGradeBonus.Grade) + 1 : "9"))])])]) : a("div", {staticClass: "levelBar"}, [a("p", {staticClass: "u-progress"}, [a("span", {
                staticClass: "pgbar",
                staticStyle: {width: "0"}
            }, [a("span", {staticClass: "pging"})])]), t._v(" "), a("em", {staticClass: "point"}, [t._v("0%")]), t._v(" "), a("div", {staticClass: "levelBarInfo"}, [a("em", [t._v("测试组")]), a("p", [a("span", {staticStyle: {color: "#f14241"}}, [t._v("0")]), t._v("/0  距离下一级还要0分")]), a("i", [t._v("测试组")])])]), t._v(" "), a("h6", [t._v("等级机制")]), t._v(" "), a("table", {
                attrs: {
                    width: "80%",
                    id: "Gradelist"
                }
            }, [a("tbody", [t._m(0), t._v(" "), t._l(t.$store.state.GradeList, function (e) {
                return a("tr", [a("td", [t._v("VIP" + t._s(e.Grade))]), a("td", [t._v(t._s(e.GradeName))]), a("td", [t._v(t._s(e.GradeGrow))]), a("td", [t._v(t._s(e.Bonus))]), a("td", [t._v(t._s(e.JumpBonus))])])
            })], 2)])])])]), t._v(" "), a("ImageList", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ImageShow,
                    expression: "ImageShow"
                }], attrs: {DImg: t.$store.state.UserPhoto}
            })], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("等级")]), t._v(" "), a("th", [t._v("头衔")]), t._v(" "), a("th", [t._v("成长积分")]), t._v(" "), a("th", [t._v("晋级奖励(元)")]), t._v(" "), a("th", [t._v("跳级奖励(元)")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "nav"}, [a("div", {staticClass: "container fix"}, [t.fr ? a("h3", [a("a", {attrs: {href: "/"}}, [a("img", {attrs: {src: t.$store.state.constant.ImgHost + t.$store.state.SiteConfig.PCLogo.logo1}})])]) : t._e(), t._v(" "), 3 === t.$parent.mode ? a("a", {
                staticClass: "serviceLink ServiceBtn",
                on: {
                    click: function (e) {
                        t.getServer(t.s.Url, t.s.Width, t.s.Height)
                    }
                }
            }) : t._e(), t._v(" "), a("ul", {
                class: {
                    navItem: !0,
                    fix: !0,
                    flr: t.fr
                }
            }, [t._l(t.navConfig, function (e) {
                return a("router-link", {attrs: {tag: "li", to: e.link, id: e.id}}, [a("a", [t._v(t._s(e.word))])])
            }), t._v(" "), a("span")], 2)])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === t.chaseMode,
                    expression: "chaseMode === 0"
                }], staticClass: "ordinaryChase"
            }, [a("span", [t._v("连续追：")]), t._v(" "), a("ul", {
                staticClass: "chaseLonger fix",
                staticStyle: {cursor: "pointer"}
            }, t._l([5, 10, 15, 20], function (e) {
                return a("li", {
                    class: {curr: e === t.chaseConfig[0].chaseIssue}, on: {
                        click: function (a) {
                            t.selectChaseIssue(0, e)
                        }
                    }
                }, [t._v(t._s(e) + "期")])
            })), t._v("\r\n     \r\n    "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[0].chaseIssue},
                on: {
                    change: function (e) {
                        t.changeChaseIssue(0, e.target)
                    }
                }
            }), t._v("期 倍数：\r\n    "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[0].chasePower},
                on: {
                    input: function (e) {
                        t.changeChasePower(0, e.target)
                    }
                }
            })]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.chaseMode,
                    expression: "chaseMode === 1"
                }], staticClass: "advancedChase fix"
            }, [a("table", [a("tbody", [t._m(0), t._v(" "), a("tr", [a("td", [t._v("起始期号：\r\n          "), a("em", {staticClass: "selectIcon"}, [a("select", {
                staticClass: "userSelect",
                on: {
                    change: function (e) {
                        t.changeStartIssue(1, +e.target.value)
                    }
                }
            }, t._l(t.startIssueArr, function (e, s) {
                return a("option", {domProps: {value: e.issueNo}}, [t._v(t._s(e.issueStr) + t._s(0 === s ? "(当前期)" : ""))])
            })), t._v(" "), a("em")])])]), t._v(" "), a("tr", [a("td", [t._v("追号期数：\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[1].chaseIssue},
                on: {
                    change: function (e) {
                        t.changeChaseIssue(1, e.target)
                    }
                }
            }), t._v(" 期\r\n        ")])]), t._v(" "), a("tr", [a("td", [t._v("起始倍数：\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[1].chasePower},
                on: {
                    input: function (e) {
                        t.changeChasePower(1, e.target)
                    }
                }
            }), t._v(" 倍")])])])]), t._v(" "), a("table", [a("tbody", [t._m(1), t._v(" "), a("tr", [a("td", {class: {noCurr: 0 !== t.chaseConfig[1].specialIndex}}, [a("input", {
                attrs: {
                    type: "radio",
                    name: "multiplyIndex",
                    checked: ""
                }, on: {
                    click: function (e) {
                        t.changeSpecialIndex(1, 0)
                    }
                }
            }), t._v(" 每隔\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[1].specialConfig[0].each},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(1, 0, "each", e.target, 2)
                    }
                }
            }), t._v(" 期 倍数×\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[1].specialConfig[0].multiple},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(1, 0, "multiple", e.target, 2)
                    }
                }
            })])]), t._v(" "), a("tr", [a("td", {class: {noCurr: 1 !== t.chaseConfig[1].specialIndex}}, [a("input", {
                attrs: {
                    type: "radio",
                    name: "multiplyIndex"
                }, on: {
                    click: function (e) {
                        t.changeSpecialIndex(1, 1)
                    }
                }
            }), t._v(" 前\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[1].specialConfig[1].since},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(1, 1, "since", e.target, 5)
                    }
                }
            }), t._v(" 期 倍数=起始倍数，之后倍数=\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[1].specialConfig[1].multiple},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(1, 1, "multiple", e.target, 3)
                    }
                }
            })])])])]), t._v(" "), a("hr")]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 === t.chaseMode,
                    expression: "chaseMode === 2"
                }], staticClass: "advancedChase fix"
            }, [a("table", [a("tbody", [t._m(2), t._v(" "), a("tr", [a("td", [t._v("起始期号：\r\n          "), a("em", {staticClass: "selectIcon"}, [a("select", {
                staticClass: "userSelect",
                on: {
                    change: function (e) {
                        t.changeStartIssue(2, +e.target.value)
                    }
                }
            }, t._l(t.startIssueArr, function (e, s) {
                return a("option", {domProps: {value: e.issueNo}}, [t._v(t._s(e.issueStr) + t._s(0 === s ? "(当前期)" : ""))])
            })), t._v(" "), a("em")])])]), t._v(" "), a("tr", [a("td", [t._v("追号期数：\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[2].chaseIssue},
                on: {
                    change: function (e) {
                        t.changeChaseIssue(2, e.target)
                    }
                }
            }), t._v(" 期\r\n        ")])]), t._v(" "), a("tr", [a("td", [t._v("起始倍数：\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[2].chasePower},
                on: {
                    input: function (e) {
                        t.changeChasePower(2, e.target)
                    }
                }
            }), t._v(" 倍")])])])]), t._v(" "), a("table", [a("tbody", [t._m(3), t._v(" "), a("tr", [a("td", {class: {noCurr: 0 !== t.chaseConfig[2].specialIndex}}, [a("input", {
                attrs: {
                    type: "radio",
                    name: "rateIndex",
                    checked: ""
                }, on: {
                    click: function (e) {
                        t.changeSpecialIndex(2, 0)
                    }
                }
            }), t._v(" 预期盈利率≥\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: +(100 * t.chaseConfig[2].specialConfig[0].rateBefore).toFixed(2)},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(2, 0, "rateBefore", e.target, 100)
                    }
                }
            }), t._v(" %\r\n        ")])]), t._v(" "), a("tr", [a("td", {class: {noCurr: 1 !== t.chaseConfig[2].specialIndex}}, [a("input", {
                attrs: {
                    type: "radio",
                    name: "rateIndex"
                }, on: {
                    click: function (e) {
                        t.changeSpecialIndex(2, 1)
                    }
                }
            }), t._v(" 前\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[2].specialConfig[1].since},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(2, 1, "since", e.target, 5)
                    }
                }
            }), t._v(" 期 预期盈利率≥\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: +(100 * t.chaseConfig[2].specialConfig[1].rateBefore).toFixed(2)},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(2, 1, "rateBefore", e.target, 30)
                    }
                }
            }), t._v("%\r\n        ")])]), t._v(" "), a("tr", [a("td", {class: {noCurr: 1 !== t.chaseConfig[2].specialIndex}}, [t._v("\r\n          之后预期盈利率≥\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: +(100 * t.chaseConfig[2].specialConfig[1].rateAfter).toFixed(2)},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(2, 1, "rateAfter", e.target, 10)
                    }
                }
            }), t._v("%\r\n        ")])])])]), t._v(" "), a("hr")]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 3 === t.chaseMode,
                    expression: "chaseMode === 3"
                }], staticClass: "advancedChase fix"
            }, [a("table", [a("tbody", [t._m(4), t._v(" "), a("tr", [a("td", [t._v("起始期号：\r\n          "), a("em", {staticClass: "selectIcon"}, [a("select", {
                staticClass: "userSelect",
                on: {
                    change: function (e) {
                        t.changeStartIssue(3, +e.target.value)
                    }
                }
            }, t._l(t.startIssueArr, function (e, s) {
                return a("option", {domProps: {value: e.issueNo}}, [t._v(t._s(e.issueStr) + t._s(0 === s ? "(当前期)" : ""))])
            })), t._v(" "), a("em")])])]), t._v(" "), a("tr", [a("td", [t._v("追号期数：\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[3].chaseIssue},
                on: {
                    change: function (e) {
                        t.changeChaseIssue(3, e.target)
                    }
                }
            }), t._v(" 期\r\n        ")])]), t._v(" "), a("tr", [a("td", [t._v("起始倍数：\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[3].chasePower},
                on: {
                    input: function (e) {
                        t.changeChasePower(3, e.target)
                    }
                }
            }), t._v(" 倍")])])])]), t._v(" "), a("table", [a("tbody", [t._m(5), t._v(" "), a("tr", [a("td", {class: {noCurr: 0 !== t.chaseConfig[3].specialIndex}}, [a("input", {
                attrs: {
                    type: "radio",
                    name: "cashIndex",
                    checked: ""
                }, on: {
                    click: function (e) {
                        t.changeSpecialIndex(3, 0)
                    }
                }
            }), t._v(" 预期盈利金额≥\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[3].specialConfig[0].cashBefore},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(3, 0, "cashBefore", e.target, 100)
                    }
                }
            }), t._v(" 元\r\n        ")])]), t._v(" "), a("tr", [a("td", {class: {noCurr: 1 !== t.chaseConfig[3].specialIndex}}, [a("input", {
                attrs: {
                    type: "radio",
                    name: "cashIndex"
                }, on: {
                    click: function (e) {
                        t.changeSpecialIndex(3, 1)
                    }
                }
            }), t._v(" 前\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[3].specialConfig[1].since},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(3, 1, "since", e.target, 2)
                    }
                }
            }), t._v(" 期 预期盈利金额≥\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[3].specialConfig[1].cashBefore},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(3, 1, "cashBefore", e.target, 100)
                    }
                }
            }), t._v("元\r\n        ")])]), t._v(" "), a("tr", [a("td", {class: {noCurr: 1 !== t.chaseConfig[3].specialIndex}}, [t._v("\r\n          之后预期盈利金额≥\r\n          "), a("input", {
                attrs: {type: "number"},
                domProps: {value: t.chaseConfig[3].specialConfig[1].cashAfter},
                on: {
                    change: function (e) {
                        t.changeSpecialConfig(3, 1, "cashAfter", e.target, 50)
                    }
                }
            }), t._v("元\r\n        ")])])])]), t._v(" "), a("hr")]), t._v(" "), a("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 !== t.chaseMode,
                    expression: "chaseMode !== 0"
                }], staticClass: "betBtn generalScheme", on: {click: t.$parent.createRenderScheme}
            }, [t._v("生成追号计划")])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td", [t._v("基本参数： ")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td", [t._v("高级参数：")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td", [t._v("基本参数： ")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td", [t._v("高级参数：")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td", [t._v("基本参数： ")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("td", [t._v("高级参数：")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "slideBox", on: {
                    mouseenter: t.cleartime, mouseleave: function (e) {
                        t.AutoPlay(t.autoPlay, t.dArr.length)
                    }
                }
            }, [a("div", {staticClass: "hd"}, [a("ul", t._l(t.dArr, function (e, s) {
                return a("li", {
                    class: {on: t.BannerDev == s}, on: {
                        click: function (e) {
                            t.goSlide(s)
                        }
                    }
                })
            }))]), t._v(" "), a("div", {staticClass: "bd"}, [a("div", {staticClass: "tempWrap"}, [a("div", {
                staticClass: "tempWrap",
                style: "overflow:hidden; position:relative; width:" + t.dWid + "px"
            }, [a("ul", {style: "width: " + t.BannerWidth + "px; left: -" + t.leftNum + "px; position: relative; overflow: hidden; padding: 0px; margin: 0px;transition:left .5s;-webkit-transiton:left .5s;-moz-transition:left .5s;"}, t._l(t.dArr, function (e) {
                return a("li", {style: "float: left; width: " + t.dWid + "px;"}, [null == e.Url ? a("a", [a("img", {attrs: {src: t.$store.state.constant.ImgHost + e.Image}})]) : [0 == e.Url.indexOf("/") ? a("router-link", {attrs: {to: e.Url.replace(".html", "")}}, [a("img", {attrs: {src: t.$store.state.constant.ImgHost + e.Image}})]) : a("a", {
                    attrs: {
                        href: e.Url,
                        target: "blank"
                    }
                }, [a("img", {attrs: {src: t.$store.state.constant.ImgHost + e.Image}})])]], 2)
            }))])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10 verifyQuestion"}, [a("ul", {staticClass: "queue"}, [t.FindShow ? a("li", {staticClass: "right"}, [a("span", [t._v("选择验证方式")]), a("i")]) : t._e(), t._v(" "), t._m(0), a("li", [a("span", [t._v(t._s(t.nTitle))]), a("i")]), t._m(1)]), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("问题一：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb: !0,
                    sb_active: t.ShowA
                }, staticStyle: {width: "231px", height: "30px"}, attrs: {name: "question1", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowA")
                    }
                }
            }, [t._v(t._s(t.TextA))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowA,
                    expression: "ShowA"
                }], attrs: {Arr: t.Arr, ShowKey: "A", TopVal: t.TextA}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow",
                staticStyle: {top: "15px"},
                on: {
                    click: function (e) {
                        t.ShowA = !0
                    }
                }
            })], 1)]), t._v(" "), a("li", [a("span", [t._v("答案一：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:answer1.Answer",
                    arg: "answer1",
                    modifiers: {Answer: !0}
                }, {name: "model", rawName: "v-model", value: t.answer1, expression: "answer1", arg: "answer1"}],
                staticClass: "userInput",
                attrs: {tag: "答案一", placeholder: "请输入答案", type: "text"},
                domProps: {value: t.answer1},
                on: {
                    input: function (e) {
                        e.target.composing || (t.answer1 = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.answer1.isPass,
                    message: t.va.answer1.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("问题二：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb: !0,
                    sb_active: t.ShowB
                }, staticStyle: {width: "231px", height: "30px"}, attrs: {name: "question2", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowB")
                    }
                }
            }, [t._v(t._s(t.TextB))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowB,
                    expression: "ShowB"
                }], attrs: {Arr: t.Arr, ShowKey: "B", TopVal: t.TextB}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow",
                staticStyle: {top: "15px"},
                on: {
                    click: function (e) {
                        t.ShowB = !0
                    }
                }
            })], 1)]), t._v(" "), a("li", [a("span", [t._v("答案二：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:answer2.Answer",
                    arg: "answer2",
                    modifiers: {Answer: !0}
                }, {name: "model", rawName: "v-model", value: t.answer2, expression: "answer2", arg: "answer2"}],
                staticClass: "userInput",
                attrs: {tag: "答案二", placeholder: "请输入答案", type: "text"},
                domProps: {value: t.answer2},
                on: {
                    input: function (e) {
                        e.target.composing || (t.answer2 = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.answer2.isPass,
                    message: t.va.answer2.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("验证密保问题")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "queue"}, [t.VerifyShow ? a("li", {staticClass: "right"}, [a("span", [t._v("验证" + t._s(t.Verify))]), a("i")]) : t._e(), t._v(" "), t._m(0), t._m(1)]), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("安全密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{name: "va", rawName: "v-va:Password", arg: "Password"}, {
                    name: "model",
                    rawName: "v-model",
                    value: t.Password,
                    expression: "Password",
                    arg: "Password"
                }],
                staticClass: "userInput",
                attrs: {
                    tag: "安全密码",
                    regMsg: "安全密码应为6-16位字符",
                    type: "password",
                    autocomplete: "off",
                    placeholder: "请输入安全密码"
                },
                domProps: {value: t.Password},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Password = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Password.isPass,
                    message: t.va.Password.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("确认密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:checkPassword.Password",
                    value: [{equal: "Password"}],
                    expression: "[{'equal':'Password'}]",
                    arg: "checkPassword",
                    modifiers: {Password: !0}
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.checkPassword,
                    expression: "checkPassword",
                    arg: "checkPassword"
                }],
                staticClass: "userInput _no_paste",
                attrs: {
                    tag: "确认密码",
                    regMsg: "确认密码应为6-16位字符",
                    type: "password",
                    autocomplete: "off",
                    placeholder: "请再次输入安全密码"
                },
                domProps: {value: t.checkPassword},
                on: {
                    input: function (e) {
                        e.target.composing || (t.checkPassword = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.checkPassword.isPass,
                    message: t.va.checkPassword.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("设置安全密码")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("网站公告")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "pd30"}, [a("h2", {staticClass: "articleTitle"}, [t._v(t._s(t.BackData.Title))]), t._v(" "), a("div", {staticClass: "articlePublishTime"}, [t._v(t._s(t.BackData.Add_Time))]), t._v(" "), a("div", {
                staticClass: "articleContent",
                domProps: {innerHTML: t._s(t.BackData.Content)}
            })])])])], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("ul", {staticClass: "betFilter"}, t._l(t.LotteryConfig, function (e, s) {
                return a("li", {
                    directives: [{name: "chaseBack", rawName: "v-chaseBack"}],
                    class: {curr: s === t.nowMode.group},
                    on: {
                        click: function (a) {
                            t.changeGroup(e)
                        }
                    }
                }, [t._v(t._s(s))])
            })), t._v(" "), a("ul", {staticClass: "betFilterAnd"}, t._l(t.nowGroupItem, function (e, s) {
                return a("li", [a("span", [t._v(t._s(s))]), t._v(" "), a("div", t._l(e, function (e) {
                    return a("a", {
                        directives: [{name: "chaseBack", rawName: "v-chaseBack"}],
                        class: {curr: e.mode === t.nowMode.mode},
                        on: {
                            click: function (a) {
                                t.changeMode(e)
                            }
                        }
                    }, [t._v(t._s(e.name))])
                }))])
            })), t._v(" "), a("div", {staticClass: "betTip"}, [a("i", {staticClass: "iconfont"}, [t._v("")]), t._v(t._s(t.tip) + "\n\n    "), t._v(" "), Array.isArray(t.award) ? t._e() : [a("ins", [t._v(t._s(t.award))]), t._v("元")], t._v(" "), Array.isArray(t.award) ? a("div", {staticClass: "hoverMoney"}, [t._v("奖金详情")]) : t._e(), t._v(" "), a("div", {staticClass: "hoverContent"}, [a("table", [t._m(0), t._v(" "), t._l(t.award, function (e, s) {
                return a("tr", [a("td", [t._v(t._s(t.awardBoxText[s]))]), a("td", [t._v(t._s(e) + "元")])])
            })], 2)]), t._v(" "), a("div", {staticClass: "selectEg"}, [t._v("选号示例")]), t._v(" "), a("div", {staticClass: "EgContent"}, [a("ul", [a("li", [t._v("投注：" + t._s(t.nowMode.eg[0]))]), t._v(" "), a("li", [t._v("开奖：" + t._s(t.nowMode.eg[1]))]), t._v(" "), Array.isArray(t.award) ? t._e() : a("li", [t._v("奖金："), a("ins", [t._v(t._s(t.award))])]), t._v(" "), t.nowMode.eg.length >= 4 ? [a("li", [t._v("投注：" + t._s(t.nowMode.eg[2]))]), t._v(" "), a("li", [t._v("开奖：" + t._s(t.nowMode.eg[3]))]), t._v(" "), Array.isArray(t.award) ? t._e() : a("li", [t._v("奖金："), a("ins", [t._v(t._s(t.award / 2))])])] : t._e()], 2)])], 2)])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("猜中")]), a("th", [t._v("单注最高奖金")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("安全中心")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "mg30"}, [a("div", {staticClass: "safeTop mgb10"}, [a("div", {staticClass: "star"}, t._l(5, function (e) {
                return a("i", {class: {iconfont: !0, curr: e <= t.StarNum}}, [t._v("")])
            })), t._v(" "), a("div", {staticClass: "text"}, [a("strong", [t._v("您的账号安全级别为"), a("i", [t._v(t._s(t.LevelText))]), t._v("，可以通过完善安全信息提高级别。")]), t._v(" "), a("p", [t._v("上次登录： "), a("ins", [t._v(t._s(t.LastLogin.LoginTime))]), a("ins", [t._v(t._s(t.LastLogin.LoginAddr))]), t._v(" | 不是我登录？"), a("router-link", {
                staticClass: "alink",
                attrs: {to: "/verifyPwd"}
            }, [t._v("修改密码")])], 1)])]), t._v(" "), a("ul", {
                staticClass: "safeList",
                attrs: {id: "safeList"}
            }, [a("li", [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(0), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/verifyPwd"}}, [t._v("修改密码")])], 1)]), t._v(" "), t.HasSafePwd ? a("li", [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(1), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/verifySafePwd"}}, [t._v("修改安全密码")]), t._v(" "), a("router-link", {attrs: {to: "/resetWay?Q=ResetSafePwd"}}, [t._v("找回安全密码")])], 1)]) : a("li", {staticClass: "noSet"}, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("span", {staticClass: "text"}, [a("strong", [t._v("未设置安全密码")]), t._v(" "), a("p", [t._v("安全密码用于提现、绑定银行卡等操作，可保障资金安全。")])]), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/setSafePwd"}}, [t._v("设置安全密码")])], 1)]), t._v(" "), t.$store.state.UserMobile ? a("li", [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("span", {staticClass: "text"}, [a("strong", [t._v("已绑定密保手机:"), a("ins", {attrs: {id: "mobile"}}, [t._v(t._s(t.$store.state.UserMobile))])]), t._v(" "), a("p", [t._v("密保手机可以增加账户安全性，快速找回帐号密码。")])]), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/verifyMobile?Q=ResetMobile"}}, [t._v("修改密保手机")])], 1)]) : a("li", {staticClass: "noSet"}, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("span", {staticClass: "text"}, [a("strong", [t._v("未绑定密保手机:"), a("ins", {attrs: {id: "mobile"}})]), t._v(" "), a("p", [t._v("密保手机可以增加账户安全性，快速找回帐号密码。")])]), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/setMobile"}}, [t._v("绑定密保手机")])], 1)]), t._v(" "), t.$store.state.UserSafeQuestions ? a("li", [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(2), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/verifyQuestion"}}, [t._v("修改密保问题")])], 1)]) : a("li", {staticClass: "noSet"}, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("span", {staticClass: "text"}, [a("strong", [t._v("未设置密保问题")]), t._v(" "), a("p", [t._v("密保问题可以增加账户安全性，快速找回帐号密码。")])]), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/setQuestion"}}, [t._v("设置密保问题")])], 1)]), t._v(" "), t.$store.state.UserMail ? a("li", [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), t._m(3), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/verifyMail"}}, [t._v("修改密保邮箱")])], 1)]) : a("li", {staticClass: "noSet"}, [a("span", {staticClass: "iconfont"}, [t._v("")]), t._v(" "), a("span", {staticClass: "text"}, [a("strong", [t._v("未绑定密保邮箱")]), t._v(" "), a("p", [t._v("绑定邮箱可以增加账户安全性，快速找回帐号密码。")])]), t._v(" "), a("span", {staticClass: "btn"}, [a("router-link", {attrs: {to: "/setMail"}}, [t._v("绑定密保邮箱")])], 1)])])])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("登陆密码")]), t._v(" "), a("p", [t._v("建议您使用字母和数字的组合、混合大小写、在组合中加入下划线等符号。")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("已设置安全密码")]), t._v(" "), a("p", [t._v("安全密码用于提现、绑定银行卡等操作，可保障资金安全。")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("已设置密保问题")]), t._v(" "), a("p", [t._v("密保问题可以增加账户安全性，快速找回帐号密码。")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("span", {staticClass: "text"}, [a("strong", [t._v("已绑定密保邮箱")]), t._v(" "), a("p", [t._v("绑定邮箱可以增加账户安全性，快速找回帐号密码。")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("站内信")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "sendList"}, [a("table", {
                attrs: {
                    width: "100%",
                    border: "0",
                    cellspacing: "0",
                    cellpadding: "0"
                }
            }, [t._m(0), t._v(" "), a("tbody", {staticClass: "fudetail_list"}, [t.isDataNot ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [a("td", {
                staticStyle: {padding: "100px 0"},
                attrs: {colspan: "100"}
            }, [a("div", {staticStyle: {"text-align": "center"}}, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1)])]) : [0 === t.DataCount ? a("tr", {
                staticClass: "noData",
                staticStyle: {"border-bottom": "0px"}
            }, [a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])]) : t._l(t.BackData, function (e, s) {
                return a("tr", [a("td", {staticClass: "td1"}, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.CheckDataArr[s].checked,
                        expression: "CheckDataArr[index]['checked']"
                    }],
                    staticClass: "ch",
                    attrs: {type: "checkbox"},
                    domProps: {
                        value: e.ID,
                        checked: Array.isArray(t.CheckDataArr[s].checked) ? t._i(t.CheckDataArr[s].checked, e.ID) > -1 : t.CheckDataArr[s].checked
                    },
                    on: {
                        __c: function (a) {
                            var n = t.CheckDataArr[s].checked, r = a.target, i = !!r.checked;
                            if (Array.isArray(n)) {
                                var o = e.ID, l = t._i(n, o);
                                i ? l < 0 && (t.CheckDataArr[s].checked = n.concat(o)) : l > -1 && (t.CheckDataArr[s].checked = n.slice(0, l).concat(n.slice(l + 1)))
                            } else t.CheckDataArr[s].checked = i
                        }
                    }
                })]), t._v(" "), a("td", {staticClass: "td2"}, [a("a", {
                    staticClass: "alink", on: {
                        click: function (a) {
                            t.$router.push({path: "/letterDetail", query: {id: e.ID}})
                        }
                    }
                }, [a("span", {class: e.Is_Read ? "read" : ""}, [t._v(t._s(e.Title))])])]), t._v(" "), a("td", {staticClass: "td3"}, [t._v(t._s(e.PosUserName))]), t._v(" "), a("td", {staticClass: "td4"}, [t._v(t._s(e.Post_Time))])])
            })]], 2)]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {attrs: {allpage: t.TotalPage}})], 1)]), t._v(" "), a("div", {staticClass: "msgControl"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.AllChose,
                    expression: "AllChose"
                }],
                attrs: {type: "checkbox"},
                domProps: {checked: Array.isArray(t.AllChose) ? t._i(t.AllChose, null) > -1 : t.AllChose},
                on: {
                    click: function (e) {
                        t.ChooseAll()
                    }, __c: function (e) {
                        var a = t.AllChose, s = e.target, n = !!s.checked;
                        if (Array.isArray(a)) {
                            var r = null, i = t._i(a, r);
                            n ? i < 0 && (t.AllChose = a.concat(r)) : i > -1 && (t.AllChose = a.slice(0, i).concat(a.slice(i + 1)))
                        } else t.AllChose = n
                    }
                }
            }), t._v("全选\r\n                    "), a("input", {
                attrs: {type: "button", value: "标为已读"},
                on: {
                    click: function (e) {
                        t.ReadAndDelete(1)
                    }
                }
            }), t._v(" "), a("input", {
                attrs: {type: "button", value: "删除"}, on: {
                    click: function (e) {
                        t.ReadAndDelete(2)
                    }
                }
            })]), t._v(" "), t._m(1)])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("th", {attrs: {scope: "col"}}, [t._v(" ")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("主题")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("发件人")]), t._v(" "), a("th", {attrs: {scope: "col"}}, [t._v("时间")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip"}, [a("p", [a("i"), t._v("温馨提示：系统将自动清空5天前的用户消息记录。\r\n                    ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("注单详情")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [[t.BackData.IssueNo ? a("table", {
                staticClass: "resultTitle",
                attrs: {width: "100%"}
            }, [a("tbody", [a("th", [a("h2", [t._v(t._s("排列3/5" === t.BackData.LotteryName ? "排列3" : t.BackData.LotteryName))]), t._v(" "), a("p", [t._v("期号：" + t._s(t.BackData.IssueNo)), a("br"), t._v("投注总金额："), a("i", [t._v("¥" + t._s(t.BackData.BetMoney) + "元")]), t._v(" "), a("br"), t._v("投注单号："), a("span", [t._v(t._s(t.BackData.SerialNum))])])]), t._v(" "), a("th", [a("p", [t._v("投注时间：" + t._s(t.BackData.AddTime)), a("br"), t._v("总奖金："), a("i", [t._v("¥" + t._s(t.BackData.Bonus) + "元")]), a("br")])]), t._v(" "), a("th", [a("p", [t._v("开奖号码："), a("br"), t._v(" "), "等待开奖" === t.BackData.State && 0 == t.UID ? a("span", {
                staticClass: "fucBtn submitBtn cancel",
                on: {
                    click: function (e) {
                        t.CancelBet(t.$route.query.ID)
                    }
                }
            }, [t._v("撤销注单")]) : a("span", {staticClass: "fucBtn"}, [t._v("\r\n                  " + t._s(t.getOpenNum(t.BackData)) + "\r\n                ")])])])])]) : t._e(), t._v(" "), a("div", {staticClass: "searchDetail"}, [a("table", {staticClass: "betDetail"}, [t._m(0), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [t._m(1)]) : t._l(t.BackData.BetInfoList, function (e) {
                return a("tr", [a("td", {attrs: {colspan: "1"}}, [t._v(t._s(e.PlayName))]), t._v(" "), a("td", [a("div", {staticClass: "betNum"}, [t._v(t._s(e.BetNum || "--"))]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkLength(e.BetNum),
                        expression: "checkLength(x.BetNum)"
                    }], staticClass: "NumLink", staticStyle: {color: "#4aa9bb"}, on: {
                        click: function (a) {
                            t.showBetContent("投注内容", e.BetNum)
                        }
                    }
                }, [t._v("[详情]")])]), t._v(" "), a("td", [t._v(t._s(e.Unit))]), t._v(" "), a("td", [t._v(t._s(e.Multiple))]), t._v(" "), a("td", [t._v(t._s(e.BetMoney))]), t._v(" "), a("td", {staticStyle: {color: "#666"}}, [t._v(t._s(e.BetModel))]), t._v(" "), a("td", [t._v(t._s(e.Bonus))]), t._v(" "), a("td", [a("span", {
                    staticClass: "alink",
                    style: "color:" + t.SelectColor(e.State)
                }, [t._v(t._s(e.State))])])])
            })], 2)])]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")])]), t._v(" "), a("div", {staticClass: "userTip mgt15"}, [a("p", [a("i"), a("span", [t._v("温馨提示：您当前查看的是" + t._s(t.BackData.UserName) + "的" + t._s(t.BackData.LotteryName) + "第" + t._s(t.BackData.IssueNo) + "期注单详情")])])])]], 2)])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("td", {attrs: {colspan: "1"}}, [t._v("玩法")]), t._v(" "), a("td", [t._v("投注内容")]), t._v(" "), a("td", [t._v("注数 ")]), t._v(" "), a("td", [t._v("倍数")]), t._v(" "), a("td", [t._v("投注金额 ")]), t._v(" "), a("td", [t._v("模式")]), t._v(" "), a("td", [t._v("奖金")]), t._v(" "), a("td", [t._v("状态")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("td", {attrs: {colspan: "8"}}, [a("div", {staticClass: "notContent"}, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight agentReport"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("代理报表")]), t._v(" "), a("div", {
                staticClass: "userMain",
                attrs: {id: "Proxy_IndexPage"}
            }, [a("div", {staticClass: "u_codeedit"}, [a("div", {
                staticClass: "newTab",
                attrs: {id: "timeType"}
            }, t._l(t.TimeType, function (e, s) {
                return a("a", {
                    class: {curr: t.DateName == e}, on: {
                        click: function (a) {
                            t.setTime(s, e)
                        }
                    }
                }, [t._v(t._s(e))])
            })), t._v(" "), a("ul", {staticClass: "todayView mgb10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.UserName,
                    expression: "UserName"
                }],
                staticClass: "userInput",
                attrs: {type: "text", placeholder: "下级报表查询"},
                domProps: {value: t.UserName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.UserName = e.target.value)
                    }
                }
            }), t._v(" \r\n                "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.doSearch}
            }, [t._v("搜索")])]), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }], staticClass: "notContent", staticStyle: {padding: "100px 0"}
            }, [a("loading")], 1), t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isDataNot,
                    expression: "!isDataNot"
                }], staticClass: "code_cont", attrs: {id: "code_cont"}
            }, [t.Datalist ? [a("ul", {staticClass: "plMore"}, [a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.BetMoney[0])))]), a("span", [t._v(t._s(t.Datalist.BetMoney[1]))])]), t._v(" "), a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.Bonus[0])))]), a("span", [t._v(t._s(t.Datalist.Bonus[1]))])]), t._v(" "), a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.ActivityMoney[0])))]), a("span", [t._v(t._s(t.Datalist.ActivityMoney[1]))])]), t._v(" "), a("li", [a("em", [t._v("¥" + t._s(t.Datalist.RebateMoney[0]))]), a("span", [t._v(t._s(t.Datalist.RebateMoney[1]))])]), t._v(" "), a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.ProfitMoney[0])))]), a("span", [t._v(t._s(t.Datalist.ProfitMoney[1]))])])]), t._v(" "), t.Datalist.TeamNum ? a("ul", {staticClass: "plMore"}, [a("li", [a("em", [t._v(t._s(t.Datalist.BetNum[0]) + "人")]), a("span", [t._v(t._s(t.Datalist.BetNum[1]))])]), t._v(" "), a("li", [a("em", [t._v(t._s(t.Datalist.FirstChargeNum[0]) + "人")]), a("span", [t._v(t._s(t.Datalist.FirstChargeNum[1]))])]), t._v(" "), a("li", [a("em", [t._v(t._s(t.Datalist.RegisterNum[0]) + "人")]), a("span", [t._v(t._s(t.Datalist.RegisterNum[1]))])]), t._v(" "), a("li", [a("em", [t._v(t._s(t.Datalist.TeamNum[0]) + "人")]), a("span", [t._v(t._s(t.Datalist.TeamNum[1]))])]), t._v(" "), a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.TeamBalance[0])))]), a("span", [t._v(t._s(t.Datalist.TeamBalance[1]))])])]) : t._e(), t._v(" "), a("ul", {staticClass: "plMore"}, [a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.RechargeMoney[0])))]), a("span", [t._v(t._s(t.Datalist.RechargeMoney[1]))])]), t._v(" "), a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.WithdrawMoney[0])))]), a("span", [t._v(t._s(t.Datalist.WithdrawMoney[1]))])]), t._v(" "), t.Datalist.TeamNum ? t._e() : a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.TeamBalance[0])))]), a("span", [t._v(t._s(t.Datalist.TeamBalance[1]))])]), t._v(" "), t.Datalist.AgentRebate ? a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.AgentRebate[0])))]), a("span", [t._v(t._s(t.Datalist.AgentRebate[1]))])]) : t._e(), t._v(" "), t.Datalist.AgentWages ? a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.AgentWages[0])))]), a("span", [t._v(t._s(t.Datalist.AgentWages[1]))])]) : t._e(), t._v(" "), t.Datalist.AgentDividends ? a("li", [a("em", [t._v("¥" + t._s(t._f("filNum")(t.Datalist.AgentDividends[0])))]), a("span", [t._v(t._s(t.Datalist.AgentDividends[1]))])]) : t._e(), t._v(" "), t._l(t.listNum, function (t) {
                return a("li")
            })], 2)] : t._e(), t._v(" "), t._m(0)], 2)])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip"}, [a("p", [a("i"), t._v("温馨提示：代理报表最多只保存7天。\r\n                    ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("我要充值")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "newTab pt15 fix"}, [a("router-link", {
                staticClass: "curr",
                attrs: {to: "/ebankPay"}
            }, [t._v("银行转账")]), t._v(" "), a("router-link", {attrs: {to: "/quickPay"}}, [t._v("快捷支付")]), t._v(" "), a("router-link", {attrs: {to: "/alipay"}}, [t._v("支付宝充值")]), t._v(" "), a("router-link", {attrs: {to: "/wechatPay"}}, [t._v("微信支付")])], 1), t._v(" "), t.isMaint ? a("div", [t._m(0)]) : a("div", {attrs: {id: "isShow"}}, [a("div", {staticClass: "stepBox"}, [a("em", [t._v("")]), a("span", [a("b", [t._v("请转账到以下银行账户：")]), t._v("单笔最低"), a("ins", [t._v(t._s(t.MinMoney))]), t._v("元，最高"), a("ins", [t._v(t._s(t.MaxMoney))])]), t._v(" "), a("ul", {staticClass: "bankStyle"}, [a("li", {staticClass: "bankTable"}, [a("ins", [t._v("收款银行：")]), t._v(" "), a("ins", [a("div", {staticClass: "bankblockList fix"}, t._l(t.BankList, function (e) {
                return a("div", {
                    class: {rb: !0, rb_active: t.BankId == e.Id}, on: {
                        click: function (a) {
                            t.setBank(e.Id)
                        }
                    }
                }, [a("i", {attrs: {checked: "checked"}}), a("span", {
                    class: e.BankCode,
                    attrs: {checked: "checked"}
                }, [t._v(t._s(e.BankName))]), t._v(" "), a("em", {attrs: {checked: "checked"}})])
            }))])]), t._v(" "), a("li", [a("ins", {staticStyle: {width: "30px"}}, [t._v("银行账户：")]), a("ins", [a("input", {
                staticClass: "code",
                attrs: {type: "text"},
                domProps: {value: t.RealName}
            }), t._v(" "), t.isSupportCopy ? a("a", {
                directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                staticClass: "copy_btn"
            }, [t._v("复制")]) : t._e()])]), t._v(" "), a("li", [a("ins", {staticClass: "leftIn"}, [t._v("银行账号：")]), a("ins", [a("input", {
                staticClass: "code",
                attrs: {type: "text"},
                domProps: {value: t.CardNum}
            }), t._v(" "), t.isSupportCopy ? a("a", {
                directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                staticClass: "copy_btn"
            }, [t._v("复制")]) : t._e()])]), t._v(" "), a("li", [a("ins", {staticClass: "leftIn"}, [t._v("开户支行：")]), a("ins", [a("input", {
                staticClass: "code",
                attrs: {type: "text"},
                domProps: {value: t.BankStore}
            }), t._v(" "), t.isSupportCopy ? a("a", {
                directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                staticClass: "copy_btn"
            }, [t._v("复制")]) : t._e()])])])]), t._v(" "), a("div", {staticClass: "stepBox"}, [a("em", [t._v("")]), a("span", [a("b", [t._v("请认真填写您的转账信息：")]), t._v("请务必转账后再提交订单,否则无法及时查到您的款项！")]), t._v(" "), a("ul", [a("li", [a("ins", [a("span", [t._v("充值金额：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:Money",
                    arg: "Money"
                }],
                staticClass: "userInput",
                attrs: {type: "text", tag: "充值金额"},
                domProps: {value: t.Money},
                on: {change: t.moneyChange}
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Money.isPass,
                    message: t.va.Money.message
                }
            })], 1), t._v(" "), a("ins", [a("span", [t._v("您的银行账户名：")]), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:PayUser.RealName",
                    arg: "PayUser",
                    modifiers: {RealName: !0}
                }, {name: "model", rawName: "v-model", value: t.PayUser, expression: "PayUser", arg: "PayUser"}],
                staticClass: "userInput",
                attrs: {type: "text", tag: "银行账户名"},
                domProps: {value: t.PayUser},
                on: {
                    input: function (e) {
                        e.target.composing || (t.PayUser = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.PayUser.isPass,
                    message: t.va.PayUser.message
                }
            })], 1)])]), t._v(" "), a("ul", [a("h6", [a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("提交充值订单")])])]), t._v(" "), a("div", {staticClass: "userTip"}, [a("p", [t._v("※ 温馨提示："), a("br"), t._v("\r\n                    1、请转账完成后再提交充值订单。"), a("br"), t._v("\r\n                    2、请正确填写您的户名和充值金额。"), a("br"), t._v("\r\n                    3、转账1笔提交1次，请勿重复提交订单。"), a("br"), t._v("\r\n                    4、转帐完成后请保留单据作为核对证明。\r\n                ")])])])])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "maintain",
                staticStyle: {"padding-top": "180px", "padding-bottom": "180px"}
            }, [a("i", {staticClass: "iconfont"}), t._v("银行转账维护中，请选择其它充值方式")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userMain mgb10"}, [t._m(0), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("form", [a("li", [a("span", [t._v("原密码：")]), t._v(" "), a("input", {
                staticStyle: {display: "none"},
                attrs: {type: "password"}
            }), t._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.Password,
                    expression: "Password"
                }, {name: "va", rawName: "v-va:Password", arg: "Password"}],
                staticClass: "userInput",
                attrs: {tag: "原密码", regMsg: "密码应为6-16位字符", type: "password", autocomplete: "off"},
                domProps: {value: t.Password},
                on: {
                    input: function (e) {
                        e.target.composing || (t.Password = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.Password.isPass,
                    message: t.va.Password.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("ul", {staticClass: "queue"}, [a("li", {staticClass: "now"}, [a("span", [t._v("验证原密码")]), a("i")]), a("li", [a("span", [t._v("设置新密码")]), a("i")]), a("li", [a("span", [t._v("完成")]), a("i")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "invitationCode"}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }], staticClass: "notContent", staticStyle: {padding: "100px 0"}
            }, [a("loading")], 1), t._v(" "), t.isDataNot ? t._e() : [a("table", {
                staticClass: "manageInvite",
                attrs: {width: "100%", border: "0", margin: "0", padding: "0", cellspacing: "0", cellpadding: "0"}
            }, [t._m(0), t._v(" "), t._l(t.ArrList, function (e, s) {
                return a("tr", [a("td", [a("input", {
                    staticClass: "code",
                    attrs: {type: "text"},
                    domProps: {value: e.InviteCode}
                }), t._v(" "), t.isSupportCopy ? a("span", {
                    directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                    staticClass: "copybtn"
                }, [t._v("复制")]) : t._e()]), t._v(" "), a("td", [a("input", {
                    attrs: {type: "text"},
                    domProps: {value: "http://" + t.xUrl + "/register?id=" + e.InviteCode}
                }), t._v(" "), t.isSupportCopy ? a("span", {
                    directives: [{name: "copyBtn", rawName: "v-copyBtn"}],
                    staticClass: "copybtn"
                }, [t._v("复制")]) : t._e()]), t._v(" "), a("td", [a("em", {
                    staticClass: "xem", on: {
                        click: function (a) {
                            t.editInfo(e.InviteCode, e.Remark, s)
                        }
                    }
                }, [t._v(t._s(e.Remark))])]), t._v(" "), a("td", [t._v(t._s(e.AddTime))]), t._v(" "), a("td", [t._v(t._s(e.State))]), t._v(" "), a("td", [a("a", {
                    staticClass: "detail",
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (a) {
                            t.getList(e.InviteCode)
                        }
                    }
                }, [t._v("详情")]), t._v(" | "), a("a", {
                    staticClass: "del", on: {
                        click: function (a) {
                            t.delData(s, e.InviteCode)
                        }
                    }
                }, [t._v("删除")])])])
            })], 2)], t._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.data_count,
                    expression: "data_count"
                }], staticClass: "page"
            }, [a("p", [t._v("共"), a("em", [t._v(t._s(t.data_count))]), t._v("条记录")]), t._v(" "), a("page", {
                ref: "page",
                attrs: {allpage: t.TotalPage}
            })], 1), t._v(" "), t._m(1), t._v(" "), a("DetailCode", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.DetailShow,
                    expression: "DetailShow"
                }], attrs: {ArrD: t.DetailList, setSpan: !0}
            }), t._v(" "), a("DetailInfo", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.DetailInfoShow,
                    expression: "DetailInfoShow"
                }], attrs: {DCode: t.DetailCode}
            })], 2)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("邀请码")]), a("th", [t._v("注册链接")]), a("th", [t._v("备注")]), a("th", [t._v("生成时间")]), a("th", [t._v("状态")]), a("th", [t._v("操作")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "userTip mg30"}, [a("p", [a("i", {staticClass: "iconfont"}), t._v("温馨提示：“邀请码” 与 “注册链接” 功能一致，可以使用邀请码，也可以使用注册链接。")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "betTitle fix",
                class: t.headClass
            }, [a("div", {staticClass: "betLogo"}, [a("h2", [t._v(t._s(t.lotteryInfo.LotteryName))]), t._v(" "), a("i", {
                staticClass: "iconfont",
                class: "L_" + t.lotteryInfo.LotteryType
            })]), t._v(" "), a("div", {staticClass: "time"}, [a("div", {staticClass: "timeTitle"}, [t._v("距"), a("b", [t._v(t._s(t.NowIssue))]), t._v("期投注截止还有：")]), t._v(" "), a("em", [t._v(t._s(t.TimeBar))])]), t._v(" "), a("div", {
                staticClass: "announced",
                attrs: {id: "Results"}
            }, [a("div", {staticClass: "announcedTitle"}, [t._v("第"), a("b", [t._v(t._s(t.OldIssue))]), t._v("期开奖号码：")]), t._v(" "), t.displayResults || "K3" === t.lotteryInfo.LotteryType ? t._e() : a("ul", {staticClass: "roundNo fix"}, t._l(t.openNumbers, function (e) {
                return a("img", {attrs: {src: t.ImgHost + "/system/pc/ssc/ballOpening.gif"}})
            })), t._v(" "), t.displayResults && "K3" !== t.lotteryInfo.LotteryType ? a("ul", {staticClass: "roundNo fix"}, t._l(t.results, function (e) {
                return a("li", [t._v(t._s(e))])
            })) : t._e(), t._v(" "), a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.displayResults && "K3" === t.lotteryInfo.LotteryType,
                    expression: "!displayResults && lotteryInfo.LotteryType === 'K3'"
                }], staticClass: "announcedNo fix"
            }, [a("img", {
                attrs: {
                    width: "61",
                    height: "71",
                    src: t.ImgHost + "/system/pc/k3/open_num.gif"
                }
            }), t._v(" "), a("img", {
                attrs: {
                    width: "61",
                    height: "71",
                    src: t.ImgHost + "/system/pc/k3/open_num.gif"
                }
            }), t._v(" "), a("img", {
                attrs: {
                    width: "61",
                    height: "71",
                    src: t.ImgHost + "/system/pc/k3/open_num.gif"
                }
            })]), t._v(" "), a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.displayResults && "K3" === t.lotteryInfo.LotteryType,
                    expression: "displayResults && lotteryInfo.LotteryType === 'K3'"
                }], staticClass: "announcedNo fix"
            }, t._l(t.results, function (t) {
                return a("li", {class: "announcedNo" + t})
            }))])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [a("ul", {staticClass: "queue"}, [t.FindShow ? a("li", {staticClass: "right"}, [a("span", [t._v("选择验证方式")]), a("i")]) : t._e(), t._v(" "), t._m(0), t._v(" "), a("li", {}, [a("span", [t._v(t._s(t.nTitle))]), a("i")]), t._v(" "), t._m(1)]), t._v(" "), a("ul", {
                staticClass: "submitContent mglr30 mgt15"
            }, [a("li", [a("span", [t._v("已绑定邮箱：")]), t._v(" "), a("input", {
                staticClass: "userInput",
                attrs: {type: "text", id: "UserMail", disabled: "disabled", placeholder: t.Mail}
            }), t._v(" "), t._m(2)]), t._v(" "), a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("输入验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:MailCode",
                    arg: "MailCode"
                }, {
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.MailCode,
                    expression: "MailCode",
                    arg: "MailCode",
                    modifiers: {trim: !0}
                }],
                staticClass: "userInput",
                attrs: {tag: "验证码", placeholder: "请输入验证码", type: "text"},
                domProps: {value: t.MailCode},
                on: {
                    input: function (e) {
                        e.target.composing || (t.MailCode = e.target.value.trim())
                    }, blur: function (e) {
                        t.$forceUpdate()
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.MailCode.isPass,
                    message: t.va.MailCode.message
                }
            }), t._v(" "), a("span", {staticClass: "btn SendCode"}, [a("a", {
                staticClass: "ClickShade",
                on: {click: t.postMsg}
            }, [t._v(t._s(t.reTime))])])], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", {staticClass: "now"}, [a("span", [t._v("验证邮箱")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("li", [a("span", [t._v("完成")]), a("i")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("em", {staticClass: "verifyWrong dpn"}, [a("i")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("网站公告")]), t._v(" "), a("div", {staticClass: "announcementList"}, [a("ul", [t.isDataNot ? a("div", {
                staticStyle: {
                    "text-align": "center",
                    padding: "100px 0px"
                }
            }, [a("loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDataNot,
                    expression: "isDataNot"
                }]
            })], 1) : [0 === t.DataCount ? a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0px"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无公告")]) : t._l(t.BackData, function (e) {
                return a("li", {staticClass: "news_li"}, [a("a", {
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/NoticeDetail", query: {id: e.ID}})
                        }
                    }
                }, [t._v(t._s(e.Title))]), t._v(" "), a("span", {staticClass: "CreatTime"}, [t._v(t._s(e.Add_Time))])])
            })]], 2), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")]), t._v(" "), a("div", {
                staticClass: "pageNav",
                attrs: {id: "pageNav"}
            }, [a("page", {attrs: {allpage: t.TotalPage}})], 1)])])])], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("router-view")], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("transition", {attrs: {name: "fade"}}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.$parent.cardShow,
                    expression: "this.$parent.cardShow"
                }],
                staticClass: "cardBox",
                style: "left:" + t.$parent.cardLeft + "px;top:" + t.$parent.cardTop + "px",
                on: {mouseenter: t.getOver, mouseleave: t.getOut}
            }, [t.cardArr ? a("div", {staticClass: "card fix"}, [a("div", {staticClass: "cardLeft"}, [a("img", {
                attrs: {
                    src: t.$store.state.constant.ImgHost + t.$store.state.constant.PhotoPath + t.cardArr.UserPhoto,
                    alt: "",
                    width: "80",
                    height: "80"
                }
            }), t._v(" "), a("h6", [t._v(t._s(t.cardArr.NickName ? t.cardArr.NickName : "昵称未设置"))])]), t._v(" "), a("div", {staticClass: "cardInfo"}, [a("ul", [a("li", [t._v("性别：" + t._s(t.cardArr.Sex))]), t._v(" "), a("li", [t._v("账号：" + t._s(t.cardArr.UserName))]), t._v(" "), a("li", [t._v("等级：" + t._s(t.cardArr.GroupTitle))]), t._v(" "), a("li", [t._v("头衔：" + t._s(t.cardArr.Rank))]), t._v(" "), a("li", [t._v("累计中奖：" + t._s(t.cardArr.Award))])])]), t._v(" "), a("ul", {staticClass: "cardIcon fix"}, t._l(t.LotterArr, function (e, s) {
                return a("li", {attrs: {id: t.getKey(s, t.cardArr.LotteryType) ? "1" : "B"}}, [a("a", {
                    on: {
                        click: function (a) {
                            t.getUrl("/lottery/" + s + "/" + e[0])
                        }
                    }
                }, [a("i", {class: [{iconfont: !0, noActive: !t.getKey(s, t.cardArr.LotteryType)}, e[1]]})])])
            }))]) : t._e()])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10"}, [t._m(0), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("账号：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:UserName",
                    arg: "UserName"
                }, {name: "model", rawName: "v-model", value: t.UserName, expression: "UserName", arg: "UserName"}],
                staticClass: "userInput",
                attrs: {tag: "帐号", placeholder: "请输入账号", type: "text"},
                domProps: {value: t.UserName},
                on: {
                    input: function (e) {
                        e.target.composing || (t.UserName = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.UserName.isPass,
                    message: t.va.UserName.message
                }
            })], 1), t._v(" "), a("li", {staticStyle: {position: "relative"}}, [a("span", [t._v("验证码：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:ImgCode",
                    arg: "ImgCode"
                }, {name: "model", rawName: "v-model", value: t.ImgCode, expression: "ImgCode", arg: "ImgCode"}],
                staticClass: "userInput",
                attrs: {tag: "验证码", placeholder: "请输入验证码", type: "text"},
                domProps: {value: t.ImgCode},
                on: {
                    input: function (e) {
                        e.target.composing || (t.ImgCode = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.ImgCode.isPass,
                    message: t.va.ImgCode.message
                }
            }), t._v(" "), a("img", {
                staticClass: "codeImg",
                attrs: {src: t.imgSrc, alt: ""},
                on: {click: t.imgUrl}
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("ul", {staticClass: "queue"}, [a("li", {staticClass: "now"}, [a("span", [t._v("选择验证方式")]), a("i")]), t._v(" "), a("li", [a("span", [t._v("身份验证")]), a("i")]), t._v(" "), a("li", [a("span", [t._v("修改密码")]), a("i")]), t._v(" "), a("li", [a("span", [t._v("完成")]), a("i")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("站内信")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("div", {staticClass: "msgDetail"}, [a("table", {
                staticClass: "ty_table",
                attrs: {width: "100%", border: "0", cellspacing: "0", cellpadding: "0"}
            }, [a("tr", [a("th", {attrs: {scope: "row"}}, [t._v("主题：")]), t._v(" "), a("td", [t._v(t._s(t.BackData.Title))])]), t._v(" "), a("tr", [a("th", {attrs: {scope: "row"}}, [t._v("发件人：")]), t._v(" "), a("td", [t._v(t._s(t.BackData.Sender))])]), t._v(" "), a("tr", [a("th", {attrs: {scope: "row"}}, [t._v("时间：")]), t._v(" "), a("td", [t._v(t._s(t.BackData.Time))])]), t._v(" "), a("tr", [a("th", {attrs: {scope: "row"}}, [t._v("收件人：")]), t._v(" "), a("td", [t._v(t._s(t.BackData.Receiver))])])]), t._v(" "), a("div", {staticClass: "msgCon"}, [a("p", {domProps: {innerHTML: t._s(t.BackData.Content)}})])])])])], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "htp"}, [a("div", {staticClass: "htpHeader"}, [a("i", {class: "L_" + t.lotteryType}), t._v(" "), a("span", [t._v(t._s(t.lotteryName))])]), t._v(" "), a("div", {
                staticClass: "htpContent",
                domProps: {innerHTML: t._s(t.howPlay)}
            })])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container notSign fix pt15"}, [a("div", {staticClass: "userMain mgb10 setQuestion"}, [t._m(0), t._v(" "), a("ul", {staticClass: "submitContent mglr30 mgt15"}, [a("li", [a("span", [t._v("问题一：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb: !0,
                    sb_active: t.ShowA
                }, staticStyle: {width: "231px", height: "30px"}, attrs: {name: "question1", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowA")
                    }
                }
            }, [t._v(t._s(t.TextA))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowA,
                    expression: "ShowA"
                }], attrs: {Arr: t.Arr, ShowKey: "A", TopVal: t.TextA}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowA = !0
                    }
                }
            })], 1), t._v(" "), t._m(1)]), t._v(" "), a("li", [a("span", [t._v("答案一：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:answer1",
                    arg: "answer1"
                }, {name: "model", rawName: "v-model", value: t.answer1, expression: "answer1", arg: "answer1"}],
                staticClass: "userInput",
                attrs: {tag: "答案一", placeholder: "请输入答案", type: "text"},
                domProps: {value: t.answer1},
                on: {
                    input: function (e) {
                        e.target.composing || (t.answer1 = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.answer1.isPass,
                    message: t.va.answer1.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("问题二：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb: !0,
                    sb_active: t.ShowB
                }, staticStyle: {width: "231px", height: "30px"}, attrs: {name: "question2", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowB")
                    }
                }
            }, [t._v(t._s(t.TextB))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowB,
                    expression: "ShowB"
                }], attrs: {Arr: t.Arr, ShowKey: "B", TopVal: t.TextB}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowB = !0
                    }
                }
            })], 1), t._v(" "), t._m(2)]), t._v(" "), a("li", [a("span", [t._v("答案二：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:answer2",
                    arg: "answer2"
                }, {name: "model", rawName: "v-model", value: t.answer2, expression: "answer2", arg: "answer2"}],
                staticClass: "userInput",
                attrs: {tag: "答案二", placeholder: "请输入答案", type: "text"},
                domProps: {value: t.answer2},
                on: {
                    input: function (e) {
                        e.target.composing || (t.answer2 = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.answer2.isPass,
                    message: t.va.answer2.message
                }
            })], 1), t._v(" "), a("li", [a("span", [t._v("问题三：")]), t._v(" "), a("div", {
                class: {
                    diyselect: !0,
                    sb: !0,
                    sb_active: t.ShowC
                }, staticStyle: {width: "231px", height: "30px"}, attrs: {name: "question3", type: "selectbox"}
            }, [a("div", {
                staticClass: "selected", on: {
                    click: function (e) {
                        t.selShow("ShowC")
                    }
                }
            }, [t._v(t._s(t.TextC))]), t._v(" "), a("SelectBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowC,
                    expression: "ShowC"
                }], attrs: {Arr: t.Arr, ShowKey: "C", TopVal: t.TextC}
            }), t._v(" "), a("div", {
                staticClass: "sb_icon arrow", staticStyle: {top: "15px"}, on: {
                    click: function (e) {
                        t.ShowC = !0
                    }
                }
            })], 1), t._v(" "), t._m(3)]), t._v(" "), a("li", [a("span", [t._v("答案三：")]), t._v(" "), a("input", {
                directives: [{
                    name: "va",
                    rawName: "v-va:answer3",
                    arg: "answer3"
                }, {name: "model", rawName: "v-model", value: t.answer3, expression: "answer3", arg: "answer3"}],
                staticClass: "userInput",
                attrs: {tag: "答案三", placeholder: "请输入答案", type: "text"},
                domProps: {value: t.answer3},
                on: {
                    input: function (e) {
                        e.target.composing || (t.answer3 = e.target.value)
                    }
                }
            }), t._v(" "), a("tip", {
                attrs: {
                    isPass: t.va.answer3.isPass,
                    message: t.va.answer3.message
                }
            })], 1), t._v(" "), a("li", [a("span"), t._v(" "), a("a", {
                staticClass: "submitBtn ClickShade",
                on: {click: t.vaSubmit}
            }, [t._v("确定")])])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("ul", {staticClass: "queue"}, [a("li", {staticClass: "now"}, [a("span", [t._v("设置新密保问题")]), a("i")]), a("li", [a("span", [t._v("完成")]), a("i")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("em", {staticClass: "verifyWrong dpn"}, [a("i"), a("ins")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("em", {staticClass: "verifyWrong dpn"}, [a("i"), a("ins")])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("em", {staticClass: "verifyWrong dpn"}, [a("i"), a("ins")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "fix",
                class: t.betboxClass
            }, [t.config.tag ? a("span", {staticClass: "buyNumberTitle"}, [t._v(t._s(t.config.tag)), a("i")]) : t._e(), t._v(" "), t.isSquare ? t._e() : a("div", {staticClass: "buyNumber fix"}, t._l(t.config.itemArr, function (e) {
                return a("a", {
                    directives: [{name: "chaseBack", rawName: "v-chaseBack"}],
                    class: t.chosen.indexOf(e) > -1 ? "curr" : "",
                    on: {
                        click: function (a) {
                            t.choose(e)
                        }
                    }
                }, [t._v("\n       " + t._s(e) + "\n    ")])
            })), t._v(" "), t.isSquare ? a("div", {
                staticClass: "buyNumber fix",
                staticStyle: {width: "100%"}
            }, t._l(t.config.itemArr, function (e) {
                return a("ins", {
                    directives: [{name: "chaseBack", rawName: "v-chaseBack"}],
                    class: t.chosen.indexOf(e) > -1 ? "curr" : "",
                    on: {
                        click: function (a) {
                            t.choose(e)
                        }
                    }
                }, [t._v("\n       " + t._s(e) + "\n    ")])
            })) : t._e(), t._v(" "), t.config.filters ? a("div", {staticClass: "buyNumberFilter"}, t._l(t.config.filters, function (e, s) {
                return a("a", {
                    directives: [{name: "chaseBack", rawName: "v-chaseBack"}], on: {
                        click: function (e) {
                            t.filter(s)
                        }
                    }
                }, [t._v(t._s(s))])
            })) : t._e()])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "container containerUser fix pt15"}, [a("UserSlide"), t._v(" "), a("div", {staticClass: "userRight"}, [a("div", {staticClass: "userTitle mgb10"}, [t._v("追号详情")]), t._v(" "), a("div", {staticClass: "userMain mgb10"}, [a("table", {
                staticClass: "resultTitle",
                attrs: {width: "100%"}
            }, [a("tbody", [a("tr", {staticClass: "_zheader"}, [a("th", {
                attrs: {
                    scope: "col",
                    colspan: "3"
                }
            }, [a("h2", [t._v(t._s(t.BackData.LotteryName))]), t._v(" "), a("p", [t._v("起始期号：" + t._s(t.BackData.StartIssue)), a("br"), t._v("进度："), a("i", [t._v(t._s(t.BackData.Schedule))]), t._v(" "), a("br"), t._v("终止追号条件："), a("span", [t._v(t._s(t.BackData.Condition))])])]), t._v(" "), a("th", {
                attrs: {
                    scope: "col",
                    colspan: "3"
                }
            }, [a("br"), t._v(" "), a("p", [t._v("追号时间：" + t._s(t.BackData.AddTime)), a("br"), t._v("已追号金额："), a("span", [t._v("¥" + t._s(t.BackData.CompleteMoney) + "元")]), t._v(" "), a("br"), t._v("已获奖金："), a("i", [t._v("¥" + t._s(t.BackData.Bonus) + "元")]), a("br")])]), t._v(" "), a("th", {
                attrs: {
                    scope: "col",
                    colspan: "3"
                }
            }, [a("p", [t._v("追号方案金额：¥" + t._s(t.BackData.ChaseMoney) + "元"), a("br"), t._v("追号编号:\r\n                "), a("span", [t._v(t._s(t.BackData.SerialNum))])])])]), t._v(" "), a("tr", [t._m(0), t._v(" "), a("th", {
                staticClass: "keeyPlanCon",
                attrs: {scope: "col", colspan: "8"}
            }, [a("table", {
                staticClass: "keeyPlan",
                attrs: {width: "680px"}
            }, [a("tbody", [t._m(1), t._v(" "), t._l(t.BackData.ChaseScheme, function (e) {
                return a("tr", [a("td", [t._v(t._s(e.PlayName))]), t._v(" "), a("td", [a("div", {staticClass: "betNum"}, [t._v(t._s(e.BetNum))]), t._v(" "), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkLength(e.BetNum),
                        expression: "checkLength(x.BetNum)"
                    }], staticClass: "NumLink", staticStyle: {color: "#4aa9bb"}, on: {
                        click: function (a) {
                            t.showBetContent("投注内容", e.BetNum)
                        }
                    }
                }, [t._v("[详情]")])]), t._v(" "), a("td", [t._v(t._s(e.Unit))]), t._v(" "), a("td", [t._v(t._s(e.Multiple))]), t._v(" "), a("td", [t._v(t._s(e.BetModel))])])
            })], 2)])])])])]), t._v(" "), a("div", {staticClass: "searchDetail"}, [a("table", {staticClass: "seekDetail"}, [t._m(2), t._v(" "), a("tbody", {staticClass: "Records_listCont"}, [0 === t.DataCount ? a("tr", {staticStyle: {"border-bottom": "0px"}}, [t._m(3)]) : t._e(), t._v(" "), t._l(t.BackData.ChaseInfoList, function (e) {
                return a("tr", [a("td", {attrs: {colspan: "1"}}, [t._v(t._s(e.IssueNo))]), t._v(" "), a("td", [t._v(t._s(e.Multiple))]), t._v(" "), a("td", [t._v(t._s(e.BetMoney))]), t._v(" "), a("td", [t._v(t._s(t.setNum(e.OpenNum)))]), t._v(" "), a("td", [t._v(t._s(e.State))]), t._v(" "), a("td", {staticStyle: {}}, [t._v(t._s(e.Bonus))]), t._v(" "), a("td", [a("a", {
                    staticClass: "alink",
                    on: {
                        click: function (a) {
                            t.$router.push({path: "/betDetail", query: {ID: e.ID}})
                        }
                    }
                }, [t._v("查看")])])])
            })], 2)])]), t._v(" "), a("div", {staticClass: "page"}, [a("p", [t._v("共"), a("em", [t._v(t._s(t.DataCount))]), t._v("条记录")])])])])], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("th", {attrs: {scope: "col", colspan: "1"}}, [a("h4", [t._v("追号方案")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tr", [a("th", [t._v("玩法")]), t._v(" "), a("th", [t._v("投注内容")]), t._v(" "), a("th", [t._v("注数")]), t._v(" "), a("th", [t._v("倍数")]), t._v(" "), a("th", [t._v("模式")])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("tbody", [a("tr", [a("td", {attrs: {colspan: "1"}}, [t._v("期号")]), t._v(" "), a("td", [t._v("追号倍数")]), t._v(" "), a("td", [t._v("投注金额")]), t._v(" "), a("td", [t._v("当期开奖号码")]), t._v(" "), a("td", [t._v("状态")]), t._v(" "), a("td", [t._v("奖金")]), t._v(" "), a("td", [t._v("操作项")])])])
        }, function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("td", {attrs: {colspan: "100"}}, [a("div", {
                staticClass: "notContent",
                staticStyle: {padding: "100px 0"}
            }, [a("i", {staticClass: "iconfont"}), t._v("暂无记录")])])
        }]
    }
}]);