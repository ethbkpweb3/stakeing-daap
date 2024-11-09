"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1359], {
    92798: function(e, t, n) {
        let r;
        n.d(t, {
            JO: function() {
                return ex
            }
        });
        var i, o = n(2265);
        let l = Object.freeze({
            left: 0,
            top: 0,
            width: 16,
            height: 16
        })
          , a = Object.freeze({
            rotate: 0,
            vFlip: !1,
            hFlip: !1
        })
          , c = Object.freeze({
            ...l,
            ...a
        })
          , f = Object.freeze({
            ...c,
            body: "",
            hidden: !1
        });
        function s(e, t) {
            let n = function(e, t) {
                let n = {};
                !e.hFlip != !t.hFlip && (n.hFlip = !0),
                !e.vFlip != !t.vFlip && (n.vFlip = !0);
                let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
                return r && (n.rotate = r),
                n
            }(e, t);
            for (let r in f)
                r in a ? r in e && !(r in n) && (n[r] = a[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
            return n
        }
        function u(e, t) {
            let n = [];
            if ("object" != typeof e || "object" != typeof e.icons)
                return n;
            e.not_found instanceof Array && e.not_found.forEach(e => {
                t(e, null),
                n.push(e)
            }
            );
            let r = function(e, t) {
                let n = e.icons
                  , r = e.aliases || Object.create(null)
                  , i = Object.create(null);
                return Object.keys(n).concat(Object.keys(r)).forEach(function e(t) {
                    if (n[t])
                        return i[t] = [];
                    if (!(t in i)) {
                        i[t] = null;
                        let n = r[t] && r[t].parent
                          , o = n && e(n);
                        o && (i[t] = [n].concat(o))
                    }
                    return i[t]
                }),
                i
            }(e);
            for (let i in r) {
                let o = r[i];
                o && (t(i, function(e, t, n) {
                    let r = e.icons
                      , i = e.aliases || Object.create(null)
                      , o = {};
                    function l(e) {
                        o = s(r[e] || i[e], o)
                    }
                    return l(t),
                    n.forEach(l),
                    s(e, o)
                }(e, i, o)),
                n.push(i))
            }
            return n
        }
        let d = /^[a-z0-9]+(-[a-z0-9]+)*$/
          , p = function(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
              , i = e.split(":");
            if ("@" === e.slice(0, 1)) {
                if (i.length < 2 || i.length > 3)
                    return null;
                r = i.shift().slice(1)
            }
            if (i.length > 3 || !i.length)
                return null;
            if (i.length > 1) {
                let e = i.pop()
                  , n = i.pop()
                  , o = {
                    provider: i.length > 0 ? i[0] : r,
                    prefix: n,
                    name: e
                };
                return t && !h(o) ? null : o
            }
            let o = i[0]
              , l = o.split("-");
            if (l.length > 1) {
                let e = {
                    provider: r,
                    prefix: l.shift(),
                    name: l.join("-")
                };
                return t && !h(e) ? null : e
            }
            if (n && "" === r) {
                let e = {
                    provider: r,
                    prefix: "",
                    name: o
                };
                return t && !h(e, n) ? null : e
            }
            return null
        }
          , h = (e, t) => !!e && !!(("" === e.provider || e.provider.match(d)) && (t && "" === e.prefix || e.prefix.match(d)) && e.name.match(d))
          , g = {
            provider: "",
            aliases: {},
            not_found: {},
            ...l
        };
        function m(e, t) {
            for (let n in t)
                if (n in e && typeof e[n] != typeof t[n])
                    return !1;
            return !0
        }
        function b(e) {
            if ("object" != typeof e || null === e || "string" != typeof e.prefix || !e.icons || "object" != typeof e.icons || !m(e, g))
                return null;
            let t = e.icons;
            for (let e in t) {
                let n = t[e];
                if (!e.match(d) || "string" != typeof n.body || !m(n, f))
                    return null
            }
            let n = e.aliases || Object.create(null);
            for (let e in n) {
                let r = n[e]
                  , i = r.parent;
                if (!e.match(d) || "string" != typeof i || !t[i] && !n[i] || !m(r, f))
                    return null
            }
            return e
        }
        let y = Object.create(null);
        function v(e, t) {
            let n = y[e] || (y[e] = Object.create(null));
            return n[t] || (n[t] = {
                provider: e,
                prefix: t,
                icons: Object.create(null),
                missing: new Set
            })
        }
        function x(e, t) {
            return b(t) ? u(t, (t, n) => {
                n ? e.icons[t] = n : e.missing.add(t)
            }
            ) : []
        }
        let w = !1;
        function k(e) {
            return "boolean" == typeof e && (w = e),
            w
        }
        function j(e) {
            let t = "string" == typeof e ? p(e, !0, w) : e;
            if (t) {
                let e = v(t.provider, t.prefix)
                  , n = t.name;
                return e.icons[n] || (e.missing.has(n) ? null : void 0)
            }
        }
        let O = Object.freeze({
            width: null,
            height: null
        })
          , S = Object.freeze({
            ...O,
            ...a
        })
          , E = /(-?[0-9.]*[0-9]+[0-9.]*)/g
          , M = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
        function F(e, t, n) {
            if (1 === t)
                return e;
            if (n = n || 100,
            "number" == typeof e)
                return Math.ceil(e * t * n) / n;
            if ("string" != typeof e)
                return e;
            let r = e.split(E);
            if (null === r || !r.length)
                return e;
            let i = []
              , o = r.shift()
              , l = M.test(o);
            for (; ; ) {
                if (l) {
                    let e = parseFloat(o);
                    isNaN(e) ? i.push(o) : i.push(Math.ceil(e * t * n) / n)
                } else
                    i.push(o);
                if (void 0 === (o = r.shift()))
                    return i.join("");
                l = !l
            }
        }
        let T = e => "unset" === e || "undefined" === e || "none" === e
          , C = /\sid="(\S+)"/g
          , I = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16)
          , L = 0
          , N = Object.create(null);
        function _(e) {
            return N[e] || N[""]
        }
        function z(e) {
            let t;
            if ("string" == typeof e.resources)
                t = [e.resources];
            else if (!((t = e.resources)instanceof Array) || !t.length)
                return null;
            return {
                resources: t,
                path: e.path || "/",
                maxURL: e.maxURL || 500,
                rotate: e.rotate || 750,
                timeout: e.timeout || 5e3,
                random: !0 === e.random,
                index: e.index || 0,
                dataAfterTimeout: !1 !== e.dataAfterTimeout
            }
        }
        let A = Object.create(null)
          , R = ["https://api.simplesvg.com", "https://api.unisvg.com"]
          , P = [];
        for (; R.length > 0; )
            1 === R.length ? P.push(R.shift()) : Math.random() > .5 ? P.push(R.shift()) : P.push(R.pop());
        A[""] = z({
            resources: ["https://api.iconify.design"].concat(P)
        });
        let $ = ( () => {
            let e;
            try {
                if (e = fetch,
                "function" == typeof e)
                    return e
            } catch (e) {}
        }
        )();
        function D(e, t) {
            e.forEach(e => {
                let n = e.loaderCallbacks;
                n && (e.loaderCallbacks = n.filter(e => e.id !== t))
            }
            )
        }
        let J = 0;
        var U = {
            resources: [],
            index: 0,
            timeout: 2e3,
            rotate: 750,
            random: !1,
            dataAfterTimeout: !1
        };
        function H(e) {
            let t = {
                ...U,
                ...e
            }
              , n = [];
            function r() {
                n = n.filter(e => "pending" === e().status)
            }
            return {
                query: function(e, i, o) {
                    let l = function(e, t, n, r) {
                        let i, o;
                        let l = e.resources.length
                          , a = e.random ? Math.floor(Math.random() * l) : e.index;
                        if (e.random) {
                            let t = e.resources.slice(0);
                            for (i = []; t.length > 1; ) {
                                let e = Math.floor(Math.random() * t.length);
                                i.push(t[e]),
                                t = t.slice(0, e).concat(t.slice(e + 1))
                            }
                            i = i.concat(t)
                        } else
                            i = e.resources.slice(a).concat(e.resources.slice(0, a));
                        let c = Date.now()
                          , f = "pending"
                          , s = 0
                          , u = null
                          , d = []
                          , p = [];
                        function h() {
                            u && (clearTimeout(u),
                            u = null)
                        }
                        function g() {
                            "pending" === f && (f = "aborted"),
                            h(),
                            d.forEach(e => {
                                "pending" === e.status && (e.status = "aborted")
                            }
                            ),
                            d = []
                        }
                        function m(e, t) {
                            t && (p = []),
                            "function" == typeof e && p.push(e)
                        }
                        function b() {
                            f = "failed",
                            p.forEach(e => {
                                e(void 0, o)
                            }
                            )
                        }
                        function y() {
                            d.forEach(e => {
                                "pending" === e.status && (e.status = "aborted")
                            }
                            ),
                            d = []
                        }
                        return "function" == typeof r && p.push(r),
                        setTimeout(function r() {
                            if ("pending" !== f)
                                return;
                            h();
                            let l = i.shift();
                            if (void 0 === l) {
                                if (d.length) {
                                    u = setTimeout( () => {
                                        h(),
                                        "pending" === f && (y(),
                                        b())
                                    }
                                    , e.timeout);
                                    return
                                }
                                b();
                                return
                            }
                            let a = {
                                status: "pending",
                                resource: l,
                                callback: (t, n) => {
                                    !function(t, n, l) {
                                        let a = "success" !== n;
                                        switch (d = d.filter(e => e !== t),
                                        f) {
                                        case "pending":
                                            break;
                                        case "failed":
                                            if (a || !e.dataAfterTimeout)
                                                return;
                                            break;
                                        default:
                                            return
                                        }
                                        if ("abort" === n) {
                                            o = l,
                                            b();
                                            return
                                        }
                                        if (a) {
                                            o = l,
                                            d.length || (i.length ? r() : b());
                                            return
                                        }
                                        if (h(),
                                        y(),
                                        !e.random) {
                                            let n = e.resources.indexOf(t.resource);
                                            -1 !== n && n !== e.index && (e.index = n)
                                        }
                                        f = "completed",
                                        p.forEach(e => {
                                            e(l)
                                        }
                                        )
                                    }(a, t, n)
                                }
                            };
                            d.push(a),
                            s++,
                            u = setTimeout(r, e.rotate),
                            n(l, t, a.callback)
                        }),
                        function() {
                            return {
                                startTime: c,
                                payload: t,
                                status: f,
                                queriesSent: s,
                                queriesPending: d.length,
                                subscribe: m,
                                abort: g
                            }
                        }
                    }(t, e, i, (e, t) => {
                        r(),
                        o && o(e, t)
                    }
                    );
                    return n.push(l),
                    l
                },
                find: function(e) {
                    return n.find(t => e(t)) || null
                },
                setIndex: e => {
                    t.index = e
                }
                ,
                getIndex: () => t.index,
                cleanup: r
            }
        }
        let q = Object.create(null)
          , Q = "iconify2"
          , B = "iconify"
          , W = B + "-count"
          , X = B + "-version";
        function G(e, t) {
            try {
                return e.getItem(t)
            } catch (e) {}
        }
        function K(e, t, n) {
            try {
                return e.setItem(t, n),
                !0
            } catch (e) {}
        }
        function V(e, t) {
            try {
                e.removeItem(t)
            } catch (e) {}
        }
        function Y(e, t) {
            return K(e, W, t.toString())
        }
        function Z(e) {
            return parseInt(G(e, W)) || 0
        }
        let ee = {
            local: !0,
            session: !0
        }
          , et = {
            local: new Set,
            session: new Set
        }
          , en = !1
          , er = "undefined" == typeof window ? {} : window;
        function ei(e) {
            let t = e + "Storage";
            try {
                if (er && er[t] && "number" == typeof er[t].length)
                    return er[t]
            } catch (e) {}
            ee[e] = !1
        }
        function eo(e, t) {
            let n = ei(e);
            if (!n)
                return;
            let r = G(n, X);
            if (r !== Q) {
                if (r) {
                    let e = Z(n);
                    for (let t = 0; t < e; t++)
                        V(n, B + t.toString())
                }
                K(n, X, Q),
                Y(n, 0);
                return
            }
            let i = Math.floor(Date.now() / 36e5) - 168
              , o = e => {
                let r = B + e.toString()
                  , o = G(n, r);
                if ("string" == typeof o) {
                    try {
                        let n = JSON.parse(o);
                        if ("object" == typeof n && "number" == typeof n.cached && n.cached > i && "string" == typeof n.provider && "object" == typeof n.data && "string" == typeof n.data.prefix && t(n, e))
                            return !0
                    } catch (e) {}
                    V(n, r)
                }
            }
              , l = Z(n);
            for (let t = l - 1; t >= 0; t--)
                o(t) || (t === l - 1 ? Y(n, --l) : et[e].add(t))
        }
        function el() {
            if (!en)
                for (let e in en = !0,
                ee)
                    eo(e, e => {
                        let t = e.data
                          , n = v(e.provider, t.prefix);
                        if (!x(n, t).length)
                            return !1;
                        let r = t.lastModified || -1;
                        return n.lastModifiedCached = n.lastModifiedCached ? Math.min(n.lastModifiedCached, r) : r,
                        !0
                    }
                    )
        }
        function ea() {}
        let ec = (e, t) => {
            let n, r;
            let i = function(e) {
                let t = {
                    loaded: [],
                    missing: [],
                    pending: []
                }
                  , n = Object.create(null);
                e.sort( (e, t) => e.provider !== t.provider ? e.provider.localeCompare(t.provider) : e.prefix !== t.prefix ? e.prefix.localeCompare(t.prefix) : e.name.localeCompare(t.name));
                let r = {
                    provider: "",
                    prefix: "",
                    name: ""
                };
                return e.forEach(e => {
                    if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider)
                        return;
                    r = e;
                    let i = e.provider
                      , o = e.prefix
                      , l = e.name
                      , a = n[i] || (n[i] = Object.create(null))
                      , c = a[o] || (a[o] = v(i, o));
                    (l in c.icons ? t.loaded : "" === o || c.missing.has(l) ? t.missing : t.pending).push({
                        provider: i,
                        prefix: o,
                        name: l
                    })
                }
                ),
                t
            }(function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = [];
                return e.forEach(e => {
                    let i = "string" == typeof e ? p(e, t, n) : e;
                    i && r.push(i)
                }
                ),
                r
            }(e, !0, k()));
            if (!i.pending.length) {
                let e = !0;
                return t && setTimeout( () => {
                    e && t(i.loaded, i.missing, i.pending, ea)
                }
                ),
                () => {
                    e = !1
                }
            }
            let o = Object.create(null)
              , l = [];
            return i.pending.forEach(e => {
                let {provider: t, prefix: i} = e;
                if (i === r && t === n)
                    return;
                n = t,
                r = i,
                l.push(v(t, i));
                let a = o[t] || (o[t] = Object.create(null));
                a[i] || (a[i] = [])
            }
            ),
            i.pending.forEach(e => {
                let {provider: t, prefix: n, name: r} = e
                  , i = v(t, n)
                  , l = i.pendingIcons || (i.pendingIcons = new Set);
                l.has(r) || (l.add(r),
                o[t][n].push(r))
            }
            ),
            l.forEach(e => {
                let {provider: t, prefix: n} = e;
                if (o[t][n].length) {
                    var r;
                    r = o[t][n],
                    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(r).sort() : e.iconsToLoad = r,
                    e.iconsQueueFlag || (e.iconsQueueFlag = !0,
                    setTimeout( () => {
                        let t;
                        e.iconsQueueFlag = !1;
                        let {provider: n, prefix: r} = e
                          , i = e.iconsToLoad;
                        delete e.iconsToLoad,
                        i && (t = _(n)) && t.prepare(n, r, i).forEach(t => {
                            !function(e, t, n) {
                                let r, i;
                                if ("string" == typeof e) {
                                    let t = _(e);
                                    if (!t)
                                        return n(void 0, 424);
                                    i = t.send;
                                    let o = function(e) {
                                        if (!q[e]) {
                                            let t = A[e];
                                            if (!t)
                                                return;
                                            let n = H(t);
                                            q[e] = {
                                                config: t,
                                                redundancy: n
                                            }
                                        }
                                        return q[e]
                                    }(e);
                                    o && (r = o.redundancy)
                                } else {
                                    let t = z(e);
                                    if (t) {
                                        r = H(t);
                                        let n = _(e.resources ? e.resources[0] : "");
                                        n && (i = n.send)
                                    }
                                }
                                r && i ? r.query(t, i, n)().abort : n(void 0, 424)
                            }(n, t, n => {
                                if ("object" != typeof n)
                                    t.icons.forEach(t => {
                                        e.missing.add(t)
                                    }
                                    );
                                else
                                    try {
                                        let t = x(e, n);
                                        if (!t.length)
                                            return;
                                        let r = e.pendingIcons;
                                        r && t.forEach(e => {
                                            r.delete(e)
                                        }
                                        ),
                                        function(e, t) {
                                            function n(n) {
                                                let r, i;
                                                if (!ee[n] || !(r = ei(n)))
                                                    return;
                                                let o = et[n];
                                                if (o.size)
                                                    o.delete(i = Array.from(o).shift());
                                                else if ((i = Z(r)) >= 50 || !Y(r, i + 1))
                                                    return;
                                                let l = {
                                                    cached: Math.floor(Date.now() / 36e5),
                                                    provider: e.provider,
                                                    data: t
                                                };
                                                return K(r, B + i.toString(), JSON.stringify(l))
                                            }
                                            en || el(),
                                            (!t.lastModified || function(e, t) {
                                                let n = e.lastModifiedCached;
                                                if (n && n >= t)
                                                    return n === t;
                                                if (e.lastModifiedCached = t,
                                                n)
                                                    for (let n in ee)
                                                        eo(n, n => {
                                                            let r = n.data;
                                                            return n.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === t
                                                        }
                                                        );
                                                return !0
                                            }(e, t.lastModified)) && Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t),
                                            delete t.not_found),
                                            n("local") || n("session"))
                                        }(e, n)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                e.iconsLoaderFlag || (e.iconsLoaderFlag = !0,
                                setTimeout( () => {
                                    e.iconsLoaderFlag = !1,
                                    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0,
                                    setTimeout( () => {
                                        e.pendingCallbacksFlag = !1;
                                        let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                                        if (!t.length)
                                            return;
                                        let n = !1
                                          , r = e.provider
                                          , i = e.prefix;
                                        t.forEach(t => {
                                            let o = t.icons
                                              , l = o.pending.length;
                                            o.pending = o.pending.filter(t => {
                                                if (t.prefix !== i)
                                                    return !0;
                                                let l = t.name;
                                                if (e.icons[l])
                                                    o.loaded.push({
                                                        provider: r,
                                                        prefix: i,
                                                        name: l
                                                    });
                                                else {
                                                    if (!e.missing.has(l))
                                                        return n = !0,
                                                        !0;
                                                    o.missing.push({
                                                        provider: r,
                                                        prefix: i,
                                                        name: l
                                                    })
                                                }
                                                return !1
                                            }
                                            ),
                                            o.pending.length !== l && (n || D([e], t.id),
                                            t.callback(o.loaded.slice(0), o.missing.slice(0), o.pending.slice(0), t.abort))
                                        }
                                        )
                                    }
                                    ))
                                }
                                ))
                            }
                            )
                        }
                        )
                    }
                    ))
                }
            }
            ),
            t ? function(e, t, n) {
                let r = J++
                  , i = D.bind(null, n, r);
                if (!t.pending.length)
                    return i;
                let o = {
                    id: r,
                    icons: t,
                    callback: e,
                    abort: i
                };
                return n.forEach(e => {
                    (e.loaderCallbacks || (e.loaderCallbacks = [])).push(o)
                }
                ),
                i
            }(t, i, l) : ea
        }
          , ef = /[\s,]+/
          , es = {
            ...S,
            inline: !1
        }
          , eu = {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "aria-hidden": !0,
            role: "img"
        }
          , ed = {
            display: "inline-block"
        }
          , ep = {
            backgroundColor: "currentColor"
        }
          , eh = {
            backgroundColor: "transparent"
        }
          , eg = {
            Image: "var(--svg)",
            Repeat: "no-repeat",
            Size: "100% 100%"
        }
          , em = {
            WebkitMask: ep,
            mask: ep,
            background: eh
        };
        for (let e in em) {
            let t = em[e];
            for (let n in eg)
                t[e + n] = eg[n]
        }
        let eb = {
            ...es,
            inline: !0
        };
        function ey(e) {
            return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
        }
        let ev = (e, t, n) => {
            let i = t.inline ? eb : es
              , l = function(e, t) {
                let n = {
                    ...e
                };
                for (let e in t) {
                    let r = t[e]
                      , i = typeof r;
                    e in O ? (null === r || r && ("string" === i || "number" === i)) && (n[e] = r) : i === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r)
                }
                return n
            }(i, t)
              , a = t.mode || "svg"
              , f = {}
              , s = t.style || {}
              , u = {
                ..."svg" === a ? eu : {}
            };
            if (n) {
                let e = p(n, !1, !0);
                if (e) {
                    let t = ["iconify"];
                    for (let n of ["provider", "prefix"])
                        e[n] && t.push("iconify--" + e[n]);
                    u.className = t.join(" ")
                }
            }
            for (let e in t) {
                let n = t[e];
                if (void 0 !== n)
                    switch (e) {
                    case "icon":
                    case "style":
                    case "children":
                    case "onLoad":
                    case "mode":
                    case "ssr":
                        break;
                    case "_ref":
                        u.ref = n;
                        break;
                    case "className":
                        u[e] = (u[e] ? u[e] + " " : "") + n;
                        break;
                    case "inline":
                    case "hFlip":
                    case "vFlip":
                        l[e] = !0 === n || "true" === n || 1 === n;
                        break;
                    case "flip":
                        "string" == typeof n && function(e, t) {
                            t.split(ef).forEach(t => {
                                switch (t.trim()) {
                                case "horizontal":
                                    e.hFlip = !0;
                                    break;
                                case "vertical":
                                    e.vFlip = !0
                                }
                            }
                            )
                        }(l, n);
                        break;
                    case "color":
                        f.color = n;
                        break;
                    case "rotate":
                        "string" == typeof n ? l[e] = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                              , n = e.replace(/^-?[0-9.]*/, "");
                            function r(e) {
                                for (; e < 0; )
                                    e += 4;
                                return e % 4
                            }
                            if ("" === n) {
                                let t = parseInt(e);
                                return isNaN(t) ? 0 : r(t)
                            }
                            if (n !== e) {
                                let t = 0;
                                switch (n) {
                                case "%":
                                    t = 25;
                                    break;
                                case "deg":
                                    t = 90
                                }
                                if (t) {
                                    let i = parseFloat(e.slice(0, e.length - n.length));
                                    return isNaN(i) ? 0 : (i /= t) % 1 == 0 ? r(i) : 0
                                }
                            }
                            return t
                        }(n) : "number" == typeof n && (l[e] = n);
                        break;
                    case "ariaHidden":
                    case "aria-hidden":
                        !0 !== n && "true" !== n && delete u["aria-hidden"];
                        break;
                    default:
                        void 0 === i[e] && (u[e] = n)
                    }
            }
            let d = function(e, t) {
                let n, r;
                let i = {
                    ...c,
                    ...e
                }
                  , o = {
                    ...S,
                    ...t
                }
                  , l = {
                    left: i.left,
                    top: i.top,
                    width: i.width,
                    height: i.height
                }
                  , a = i.body;
                [i, o].forEach(e => {
                    let t;
                    let n = []
                      , r = e.hFlip
                      , i = e.vFlip
                      , o = e.rotate;
                    switch (r ? i ? o += 2 : (n.push("translate(" + (l.width + l.left).toString() + " " + (0 - l.top).toString() + ")"),
                    n.push("scale(-1 1)"),
                    l.top = l.left = 0) : i && (n.push("translate(" + (0 - l.left).toString() + " " + (l.height + l.top).toString() + ")"),
                    n.push("scale(1 -1)"),
                    l.top = l.left = 0),
                    o < 0 && (o -= 4 * Math.floor(o / 4)),
                    o %= 4) {
                    case 1:
                        n.unshift("rotate(90 " + (t = l.height / 2 + l.top).toString() + " " + t.toString() + ")");
                        break;
                    case 2:
                        n.unshift("rotate(180 " + (l.width / 2 + l.left).toString() + " " + (l.height / 2 + l.top).toString() + ")");
                        break;
                    case 3:
                        n.unshift("rotate(-90 " + (t = l.width / 2 + l.left).toString() + " " + t.toString() + ")")
                    }
                    o % 2 == 1 && (l.left !== l.top && (t = l.left,
                    l.left = l.top,
                    l.top = t),
                    l.width !== l.height && (t = l.width,
                    l.width = l.height,
                    l.height = t)),
                    n.length && (a = function(e, t, n) {
                        var r, i;
                        let o = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "defs"
                              , n = ""
                              , r = e.indexOf("<" + t);
                            for (; r >= 0; ) {
                                let i = e.indexOf(">", r)
                                  , o = e.indexOf("</" + t);
                                if (-1 === i || -1 === o)
                                    break;
                                let l = e.indexOf(">", o);
                                if (-1 === l)
                                    break;
                                n += e.slice(i + 1, o).trim(),
                                e = e.slice(0, r).trim() + e.slice(l + 1)
                            }
                            return {
                                defs: n,
                                content: e
                            }
                        }(e);
                        return r = o.defs,
                        i = t + o.content + n,
                        r ? "<defs>" + r + "</defs>" + i : i
                    }(a, '<g transform="' + n.join(" ") + '">', "</g>"))
                }
                );
                let f = o.width
                  , s = o.height
                  , u = l.width
                  , d = l.height;
                null === f ? n = F(r = null === s ? "1em" : "auto" === s ? d : s, u / d) : (n = "auto" === f ? u : f,
                r = null === s ? F(n, d / u) : "auto" === s ? d : s);
                let p = {}
                  , h = (e, t) => {
                    T(t) || (p[e] = t.toString())
                }
                ;
                h("width", n),
                h("height", r);
                let g = [l.left, l.top, u, d];
                return p.viewBox = g.join(" "),
                {
                    attributes: p,
                    viewBox: g,
                    body: a
                }
            }(e, l)
              , h = d.attributes;
            if (l.inline && (f.verticalAlign = "-0.125em"),
            "svg" === a) {
                var g;
                u.style = {
                    ...f,
                    ...s
                },
                Object.assign(u, h);
                let e = 0
                  , n = t.id;
                return "string" == typeof n && (n = n.replace(/-/g, "_")),
                u.dangerouslySetInnerHTML = {
                    __html: (g = function(e) {
                        let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I, r = [];
                        for (; t = C.exec(e); )
                            r.push(t[1]);
                        if (!r.length)
                            return e;
                        let i = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
                        return r.forEach(t => {
                            let r = "function" == typeof n ? n(t) : n + (L++).toString()
                              , o = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                            e = e.replace(RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"), "$1" + r + i + "$3")
                        }
                        ),
                        e = e.replace(RegExp(i, "g"), "")
                    }(d.body, n ? () => n + "ID" + e++ : "iconifyReact"),
                    void 0 === r && function() {
                        try {
                            r = window.trustedTypes.createPolicy("iconify", {
                                createHTML: e => e
                            })
                        } catch (e) {
                            r = null
                        }
                    }(),
                    r ? r.createHTML(g) : g)
                },
                (0,
                o.createElement)("svg", u)
            }
            let {body: m, width: b, height: y} = e
              , v = "mask" === a || "bg" !== a && -1 !== m.indexOf("currentColor")
              , x = function(e, t) {
                let n = -1 === e.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
                for (let e in t)
                    n += " " + e + '="' + t[e] + '"';
                return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
            }(m, {
                ...h,
                width: b + "",
                height: y + ""
            });
            return u.style = {
                ...f,
                "--svg": 'url("data:image/svg+xml,' + x.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ") + '")',
                width: ey(h.width),
                height: ey(h.height),
                ...ed,
                ...v ? ep : eh,
                ...s
            },
            (0,
            o.createElement)("span", u)
        }
        ;
        if (k(!0),
        i = {
            prepare: (e, t, n) => {
                let r = []
                  , i = function(e, t) {
                    let n;
                    let r = A[e];
                    if (!r)
                        return 0;
                    if (r.maxURL) {
                        let e = 0;
                        r.resources.forEach(t => {
                            e = Math.max(e, t.length)
                        }
                        ),
                        n = r.maxURL - e - r.path.length - (t + ".json?icons=").length
                    } else
                        n = 0;
                    return n
                }(e, t)
                  , o = "icons"
                  , l = {
                    type: o,
                    provider: e,
                    prefix: t,
                    icons: []
                }
                  , a = 0;
                return n.forEach( (n, c) => {
                    (a += n.length + 1) >= i && c > 0 && (r.push(l),
                    l = {
                        type: o,
                        provider: e,
                        prefix: t,
                        icons: []
                    },
                    a = n.length),
                    l.icons.push(n)
                }
                ),
                r.push(l),
                r
            }
            ,
            send: (e, t, n) => {
                if (!$) {
                    n("abort", 424);
                    return
                }
                let r = function(e) {
                    if ("string" == typeof e) {
                        let t = A[e];
                        if (t)
                            return t.path
                    }
                    return "/"
                }(t.provider);
                switch (t.type) {
                case "icons":
                    r += t.prefix + ".json?" + new URLSearchParams({
                        icons: t.icons.join(",")
                    }).toString();
                    break;
                case "custom":
                    {
                        let e = t.uri;
                        r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                        break
                    }
                default:
                    n("abort", 400);
                    return
                }
                let i = 503;
                $(e + r).then(e => {
                    let t = e.status;
                    if (200 !== t) {
                        setTimeout( () => {
                            n(404 === t ? "abort" : "next", t)
                        }
                        );
                        return
                    }
                    return i = 501,
                    e.json()
                }
                ).then(e => {
                    if ("object" != typeof e || null === e) {
                        setTimeout( () => {
                            404 === e ? n("abort", e) : n("next", i)
                        }
                        );
                        return
                    }
                    setTimeout( () => {
                        n("success", e)
                    }
                    )
                }
                ).catch( () => {
                    n("next", i)
                }
                )
            }
        },
        N[""] = i,
        "undefined" != typeof document && "undefined" != typeof window) {
            el();
            let e = window;
            if (void 0 !== e.IconifyPreload) {
                let t = e.IconifyPreload
                  , n = "Invalid IconifyPreload syntax.";
                "object" == typeof t && null !== t && (t instanceof Array ? t : [t]).forEach(e => {
                    try {
                        ("object" != typeof e || null === e || e instanceof Array || "object" != typeof e.icons || "string" != typeof e.prefix || !function(e, t) {
                            if ("object" != typeof e)
                                return !1;
                            if ("string" != typeof t && (t = e.provider || ""),
                            w && !t && !e.prefix) {
                                let t = !1;
                                return b(e) && (e.prefix = "",
                                u(e, (e, n) => {
                                    n && function(e, t) {
                                        let n = p(e, !0, w);
                                        return !!n && function(e, t, n) {
                                            try {
                                                if ("string" == typeof n.body)
                                                    return e.icons[t] = {
                                                        ...n
                                                    },
                                                    !0
                                            } catch (e) {}
                                            return !1
                                        }(v(n.provider, n.prefix), n.name, t)
                                    }(e, n) && (t = !0)
                                }
                                )),
                                t
                            }
                            let n = e.prefix;
                            return !!h({
                                provider: t,
                                prefix: n,
                                name: "a"
                            }) && !!x(v(t, n), e)
                        }(e)) && console.error(n)
                    } catch (e) {
                        console.error(n)
                    }
                }
                )
            }
            if (void 0 !== e.IconifyProviders) {
                let t = e.IconifyProviders;
                if ("object" == typeof t && null !== t)
                    for (let e in t) {
                        let n = "IconifyProviders[" + e + "] is invalid.";
                        try {
                            let r = t[e];
                            if ("object" != typeof r || !r || void 0 === r.resources)
                                continue;
                            !function(e, t) {
                                let n = z(t);
                                return null !== n && (A[e] = n,
                                !0)
                            }(e, r) && console.error(n)
                        } catch (e) {
                            console.error(n)
                        }
                    }
            }
        }
        let ex = (0,
        o.forwardRef)( (e, t) => (function(e) {
            let[t,n] = (0,
            o.useState)(!!e.ssr)
              , [r,i] = (0,
            o.useState)({})
              , [l,a] = (0,
            o.useState)(function(t) {
                if (t) {
                    let t = e.icon;
                    if ("object" == typeof t)
                        return {
                            name: "",
                            data: t
                        };
                    let n = j(t);
                    if (n)
                        return {
                            name: t,
                            data: n
                        }
                }
                return {
                    name: ""
                }
            }(!!e.ssr));
            function f() {
                let e = r.callback;
                e && (e(),
                i({}))
            }
            function s(e) {
                if (JSON.stringify(l) !== JSON.stringify(e))
                    return f(),
                    a(e),
                    !0
            }
            (0,
            o.useEffect)( () => (n(!0),
            f), []),
            (0,
            o.useEffect)( () => {
                t && function t() {
                    var n;
                    let r = e.icon;
                    if ("object" == typeof r) {
                        s({
                            name: "",
                            data: r
                        });
                        return
                    }
                    let o = j(r);
                    s({
                        name: r,
                        data: o
                    }) && (void 0 === o ? i({
                        callback: ec([r], t)
                    }) : o && (null === (n = e.onLoad) || void 0 === n || n.call(e, r)))
                }()
            }
            , [e.icon, t]);
            let {name: u, data: d} = l;
            return d ? ev({
                ...c,
                ...d
            }, e, u) : e.children ? e.children : (0,
            o.createElement)("span", {})
        }
        )({
            ...e,
            _ref: t
        }))
    }
}]);
