(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3343], {
    90239: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            let {html: e, height: r=null, width: s=null, children: a, dataNtpc: u=""} = t;
            return (0,
            i.useEffect)( () => {
                u && performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-".concat(u)
                    }
                })
            }
            , [u]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [a, e ? (0,
                n.jsx)("div", {
                    style: {
                        height: null != r ? "".concat(r, "px") : "auto",
                        width: null != s ? "".concat(s, "px") : "auto"
                    },
                    "data-ntpc": u,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }) : null]
            })
        }
        ;
        let n = r(57437)
          , i = r(2265)
    },
    64404: function(t, e, r) {
        "use strict";
        var n;
        let i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.GoogleAnalytics = function(t) {
            let {gaId: e, debugMode: r, dataLayerName: n="dataLayer", nonce: o} = t;
            return void 0 === i && (i = n),
            (0,
            a.useEffect)( () => {
                performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-ga"
                    }
                })
            }
            , []),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(u.default, {
                    id: "_next-ga-init",
                    dangerouslySetInnerHTML: {
                        __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(e, "' ").concat(r ? ",{ 'debug_mode': true }" : "", ");")
                    },
                    nonce: o
                }), (0,
                s.jsx)(u.default, {
                    id: "_next-ga",
                    src: "https://www.googletagmanager.com/gtag/js?id=".concat(e),
                    nonce: o
                })]
            })
        }
        ,
        e.sendGAEvent = function() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            if (void 0 === i) {
                console.warn("@next/third-parties: GA has not been initialized");
                return
            }
            window[i] ? window[i].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(i, " does not exist"))
        }
        ;
        let s = r(57437)
          , a = r(2265)
          , u = (n = r(31877)) && n.__esModule ? n : {
            default: n
        }
    },
    27640: function(t, e, r) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.sendGTMEvent = void 0,
        e.GoogleTagManager = function(t) {
            let {gtmId: e, gtmScriptUrl: r="https://www.googletagmanager.com/gtm.js", dataLayerName: n="dataLayer", auth: o, preview: l, dataLayer: c, nonce: h} = t;
            u = n;
            let d = "dataLayer" !== n ? "&l=".concat(n) : "";
            return (0,
            s.useEffect)( () => {
                performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-gtm"
                    }
                })
            }
            , []),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(a.default, {
                    id: "_next-gtm-init",
                    dangerouslySetInnerHTML: {
                        __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c ? "w[l].push(".concat(JSON.stringify(c), ")") : "", "\n      })(window,'").concat(n, "');")
                    },
                    nonce: h
                }), (0,
                i.jsx)(a.default, {
                    id: "_next-gtm",
                    "data-ntpc": "GTM",
                    src: "".concat(r, "?id=").concat(e).concat(d).concat(o ? "&gtm_auth=".concat(o) : "").concat(l ? "&gtm_preview=".concat(l, "&gtm_cookies_win=x") : "")
                })]
            })
        }
        ;
        let i = r(57437)
          , s = r(2265)
          , a = (n = r(31877)) && n.__esModule ? n : {
            default: n
        }
          , u = "dataLayer";
        e.sendGTMEvent = (t, e) => {
            let r = e || u;
            window[r] = window[r] || [],
            window[r].push(t)
        }
    },
    31877: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, {
            default: function() {
                return i.a
            }
        });
        var n = r(84080)
          , i = r.n(n)
          , s = {};
        for (var a in n)
            "default" !== a && (s[a] = (function(t) {
                return n[t]
            }
            ).bind(0, a));
        r.d(e, s)
    },
    40905: function(t, e) {
        "use strict";
        let r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            DOMAttributeNames: function() {
                return n
            },
            default: function() {
                return a
            },
            isEqualNode: function() {
                return s
            }
        });
        let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function i(t) {
            let {type: e, props: r} = t
              , i = document.createElement(e);
            for (let t in r) {
                if (!r.hasOwnProperty(t) || "children" === t || "dangerouslySetInnerHTML" === t || void 0 === r[t])
                    continue;
                let s = n[t] || t.toLowerCase();
                "script" === e && ("async" === s || "defer" === s || "noModule" === s) ? i[s] = !!r[t] : i.setAttribute(s, r[t])
            }
            let {children: s, dangerouslySetInnerHTML: a} = r;
            return a ? i.innerHTML = a.__html || "" : s && (i.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : ""),
            i
        }
        function s(t, e) {
            if (t instanceof HTMLElement && e instanceof HTMLElement) {
                let r = e.getAttribute("nonce");
                if (r && !t.getAttribute("nonce")) {
                    let n = e.cloneNode(!0);
                    return n.setAttribute("nonce", ""),
                    n.nonce = r,
                    r === t.nonce && t.isEqualNode(n)
                }
            }
            return t.isEqualNode(e)
        }
        function a() {
            return {
                mountedInstances: new Set,
                updateHead: t => {
                    let e = {};
                    t.forEach(t => {
                        if ("link" === t.type && t.props["data-optimized-fonts"]) {
                            if (document.querySelector('style[data-href="' + t.props["data-href"] + '"]'))
                                return;
                            t.props.href = t.props["data-href"],
                            t.props["data-href"] = void 0
                        }
                        let r = e[t.type] || [];
                        r.push(t),
                        e[t.type] = r
                    }
                    );
                    let n = e.title ? e.title[0] : null
                      , i = "";
                    if (n) {
                        let {children: t} = n.props;
                        i = "string" == typeof t ? t : Array.isArray(t) ? t.join("") : ""
                    }
                    i !== document.title && (document.title = i),
                    ["meta", "base", "link", "style", "script"].forEach(t => {
                        r(t, e[t] || [])
                    }
                    )
                }
            }
        }
        r = (t, e) => {
            let r = document.getElementsByTagName("head")[0]
              , n = r.querySelector("meta[name=next-head-count]")
              , a = Number(n.content)
              , u = [];
            for (let e = 0, r = n.previousElementSibling; e < a; e++,
            r = (null == r ? void 0 : r.previousElementSibling) || null) {
                var o;
                (null == r ? void 0 : null == (o = r.tagName) ? void 0 : o.toLowerCase()) === t && u.push(r)
            }
            let l = e.map(i).filter(t => {
                for (let e = 0, r = u.length; e < r; e++)
                    if (s(u[e], t))
                        return u.splice(e, 1),
                        !1;
                return !0
            }
            );
            u.forEach(t => {
                var e;
                return null == (e = t.parentNode) ? void 0 : e.removeChild(t)
            }
            ),
            l.forEach(t => r.insertBefore(t, n)),
            n.content = (a - u.length + l.length).toString()
        }
        ,
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    84080: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            default: function() {
                return b
            },
            handleClientScriptLoad: function() {
                return m
            },
            initScriptLoader: function() {
                return g
            }
        });
        let n = r(99920)
          , i = r(41452)
          , s = r(57437)
          , a = n._(r(54887))
          , u = i._(r(2265))
          , o = r(36590)
          , l = r(40905)
          , c = r(49189)
          , h = new Map
          , d = new Set
          , f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"]
          , p = t => {
            if (a.default.preinit) {
                t.forEach(t => {
                    a.default.preinit(t, {
                        as: "style"
                    })
                }
                );
                return
            }
            if ("undefined" != typeof window) {
                let e = document.head;
                t.forEach(t => {
                    let r = document.createElement("link");
                    r.type = "text/css",
                    r.rel = "stylesheet",
                    r.href = t,
                    e.appendChild(r)
                }
                )
            }
        }
          , y = t => {
            let {src: e, id: r, onLoad: n= () => {}
            , onReady: i=null, dangerouslySetInnerHTML: s, children: a="", strategy: u="afterInteractive", onError: o, stylesheets: c} = t
              , y = r || e;
            if (y && d.has(y))
                return;
            if (h.has(e)) {
                d.add(y),
                h.get(e).then(n, o);
                return
            }
            let m = () => {
                i && i(),
                d.add(y)
            }
              , g = document.createElement("script")
              , v = new Promise( (t, e) => {
                g.addEventListener("load", function(e) {
                    t(),
                    n && n.call(this, e),
                    m()
                }),
                g.addEventListener("error", function(t) {
                    e(t)
                })
            }
            ).catch(function(t) {
                o && o(t)
            });
            for (let[r,n] of (s ? (g.innerHTML = s.__html || "",
            m()) : a ? (g.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "",
            m()) : e && (g.src = e,
            h.set(e, v)),
            Object.entries(t))) {
                if (void 0 === n || f.includes(r))
                    continue;
                let t = l.DOMAttributeNames[r] || r.toLowerCase();
                g.setAttribute(t, n)
            }
            "worker" === u && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", u),
            c && p(c),
            document.body.appendChild(g)
        }
        ;
        function m(t) {
            let {strategy: e="afterInteractive"} = t;
            "lazyOnload" === e ? window.addEventListener("load", () => {
                (0,
                c.requestIdleCallback)( () => y(t))
            }
            ) : y(t)
        }
        function g(t) {
            t.forEach(m),
            [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(t => {
                let e = t.id || t.getAttribute("src");
                d.add(e)
            }
            )
        }
        function v(t) {
            let {id: e, src: r="", onLoad: n= () => {}
            , onReady: i=null, strategy: l="afterInteractive", onError: h, stylesheets: f, ...p} = t
              , {updateScripts: m, scripts: g, getIsSsr: v, appDir: b, nonce: w} = (0,
            u.useContext)(o.HeadManagerContext)
              , C = (0,
            u.useRef)(!1);
            (0,
            u.useEffect)( () => {
                let t = e || r;
                C.current || (i && t && d.has(t) && i(),
                C.current = !0)
            }
            , [i, e, r]);
            let _ = (0,
            u.useRef)(!1);
            if ((0,
            u.useEffect)( () => {
                !_.current && ("afterInteractive" === l ? y(t) : "lazyOnload" === l && ("complete" === document.readyState ? (0,
                c.requestIdleCallback)( () => y(t)) : window.addEventListener("load", () => {
                    (0,
                    c.requestIdleCallback)( () => y(t))
                }
                )),
                _.current = !0)
            }
            , [t, l]),
            ("beforeInteractive" === l || "worker" === l) && (m ? (g[l] = (g[l] || []).concat([{
                id: e,
                src: r,
                onLoad: n,
                onReady: i,
                onError: h,
                ...p
            }]),
            m(g)) : v && v() ? d.add(e || r) : v && !v() && y(t)),
            b) {
                if (f && f.forEach(t => {
                    a.default.preinit(t, {
                        as: "style"
                    })
                }
                ),
                "beforeInteractive" === l)
                    return r ? (a.default.preload(r, p.integrity ? {
                        as: "script",
                        integrity: p.integrity,
                        nonce: w
                    } : {
                        as: "script",
                        nonce: w
                    }),
                    (0,
                    s.jsx)("script", {
                        nonce: w,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, {
                                ...p,
                                id: e
                            }]) + ")"
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html,
                    delete p.dangerouslySetInnerHTML),
                    (0,
                    s.jsx)("script", {
                        nonce: w,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...p,
                                id: e
                            }]) + ")"
                        }
                    }));
                "afterInteractive" === l && r && a.default.preload(r, p.integrity ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: w
                } : {
                    as: "script",
                    nonce: w
                })
            }
            return null
        }
        Object.defineProperty(v, "__nextScript", {
            value: !0
        });
        let b = v;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    45161: function() {},
    2459: function(t, e, r) {
        "use strict";
        r.d(e, {
            A: function() {
                return u
            },
            z: function() {
                return o
            }
        });
        var n = r(56298)
          , i = r(69948)
          , s = r(30924)
          , a = r(43494)
          , u = class extends a.F {
            #t;
            #e;
            #r;
            #n;
            #i;
            #s;
            constructor(t) {
                super(),
                this.#s = !1,
                this.#i = t.defaultOptions,
                this.setOptions(t.options),
                this.observers = [],
                this.#r = t.cache,
                this.queryKey = t.queryKey,
                this.queryHash = t.queryHash,
                this.#t = function(t) {
                    let e = "function" == typeof t.initialData ? t.initialData() : t.initialData
                      , r = void 0 !== e
                      , n = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                    return {
                        data: e,
                        dataUpdateCount: 0,
                        dataUpdatedAt: r ? n ?? Date.now() : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: null,
                        isInvalidated: !1,
                        status: r ? "success" : "pending",
                        fetchStatus: "idle"
                    }
                }(this.options),
                this.state = t.state ?? this.#t,
                this.scheduleGc()
            }
            get meta() {
                return this.options.meta
            }
            get promise() {
                return this.#n?.promise
            }
            setOptions(t) {
                this.options = {
                    ...this.#i,
                    ...t
                },
                this.updateGcTime(this.options.gcTime)
            }
            optionalRemove() {
                this.observers.length || "idle" !== this.state.fetchStatus || this.#r.remove(this)
            }
            setData(t, e) {
                let r = (0,
                n.oE)(this.state.data, t, this.options);
                return this.#a({
                    data: r,
                    type: "success",
                    dataUpdatedAt: e?.updatedAt,
                    manual: e?.manual
                }),
                r
            }
            setState(t, e) {
                this.#a({
                    type: "setState",
                    state: t,
                    setStateOptions: e
                })
            }
            cancel(t) {
                let e = this.#n?.promise;
                return this.#n?.cancel(t),
                e ? e.then(n.ZT).catch(n.ZT) : Promise.resolve()
            }
            destroy() {
                super.destroy(),
                this.cancel({
                    silent: !0
                })
            }
            reset() {
                this.destroy(),
                this.setState(this.#t)
            }
            isActive() {
                return this.observers.some(t => !1 !== (0,
                n.Nc)(t.options.enabled, this))
            }
            isDisabled() {
                return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === n.CN || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
            }
            isStale() {
                return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data)
            }
            isStaleByTime(t=0) {
                return this.state.isInvalidated || void 0 === this.state.data || !(0,
                n.Kp)(this.state.dataUpdatedAt, t)
            }
            onFocus() {
                let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                t?.refetch({
                    cancelRefetch: !1
                }),
                this.#n?.continue()
            }
            onOnline() {
                let t = this.observers.find(t => t.shouldFetchOnReconnect());
                t?.refetch({
                    cancelRefetch: !1
                }),
                this.#n?.continue()
            }
            addObserver(t) {
                this.observers.includes(t) || (this.observers.push(t),
                this.clearGcTimeout(),
                this.#r.notify({
                    type: "observerAdded",
                    query: this,
                    observer: t
                }))
            }
            removeObserver(t) {
                this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t),
                this.observers.length || (this.#n && (this.#s ? this.#n.cancel({
                    revert: !0
                }) : this.#n.cancelRetry()),
                this.scheduleGc()),
                this.#r.notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t
                }))
            }
            getObserversCount() {
                return this.observers.length
            }
            invalidate() {
                this.state.isInvalidated || this.#a({
                    type: "invalidate"
                })
            }
            fetch(t, e) {
                if ("idle" !== this.state.fetchStatus) {
                    if (void 0 !== this.state.data && e?.cancelRefetch)
                        this.cancel({
                            silent: !0
                        });
                    else if (this.#n)
                        return this.#n.continueRetry(),
                        this.#n.promise
                }
                if (t && this.setOptions(t),
                !this.options.queryFn) {
                    let t = this.observers.find(t => t.options.queryFn);
                    t && this.setOptions(t.options)
                }
                let r = new AbortController
                  , i = t => {
                    Object.defineProperty(t, "signal", {
                        enumerable: !0,
                        get: () => (this.#s = !0,
                        r.signal)
                    })
                }
                  , a = {
                    fetchOptions: e,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: () => {
                        let t = (0,
                        n.cG)(this.options, e)
                          , r = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return (i(r),
                        this.#s = !1,
                        this.options.persister) ? this.options.persister(t, r, this) : t(r)
                    }
                };
                i(a),
                this.options.behavior?.onFetch(a, this),
                this.#e = this.state,
                ("idle" === this.state.fetchStatus || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#a({
                    type: "fetch",
                    meta: a.fetchOptions?.meta
                });
                let u = t => {
                    (0,
                    s.DV)(t) && t.silent || this.#a({
                        type: "error",
                        error: t
                    }),
                    (0,
                    s.DV)(t) || (this.#r.config.onError?.(t, this),
                    this.#r.config.onSettled?.(this.state.data, t, this)),
                    this.scheduleGc()
                }
                ;
                return this.#n = (0,
                s.Mz)({
                    initialPromise: e?.initialPromise,
                    fn: a.fetchFn,
                    abort: r.abort.bind(r),
                    onSuccess: t => {
                        if (void 0 === t) {
                            u(Error(`${this.queryHash} data is undefined`));
                            return
                        }
                        try {
                            this.setData(t)
                        } catch (t) {
                            u(t);
                            return
                        }
                        this.#r.config.onSuccess?.(t, this),
                        this.#r.config.onSettled?.(t, this.state.error, this),
                        this.scheduleGc()
                    }
                    ,
                    onError: u,
                    onFail: (t, e) => {
                        this.#a({
                            type: "failed",
                            failureCount: t,
                            error: e
                        })
                    }
                    ,
                    onPause: () => {
                        this.#a({
                            type: "pause"
                        })
                    }
                    ,
                    onContinue: () => {
                        this.#a({
                            type: "continue"
                        })
                    }
                    ,
                    retry: a.options.retry,
                    retryDelay: a.options.retryDelay,
                    networkMode: a.options.networkMode,
                    canRun: () => !0
                }),
                this.#n.start()
            }
            #a(t) {
                this.state = (e => {
                    switch (t.type) {
                    case "failed":
                        return {
                            ...e,
                            fetchFailureCount: t.failureCount,
                            fetchFailureReason: t.error
                        };
                    case "pause":
                        return {
                            ...e,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...e,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...e,
                            ...o(e.data, this.options),
                            fetchMeta: t.meta ?? null
                        };
                    case "success":
                        return {
                            ...e,
                            data: t.data,
                            dataUpdateCount: e.dataUpdateCount + 1,
                            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!t.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        let r = t.error;
                        if ((0,
                        s.DV)(r) && r.revert && this.#e)
                            return {
                                ...this.#e,
                                fetchStatus: "idle"
                            };
                        return {
                            ...e,
                            error: r,
                            errorUpdateCount: e.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: e.fetchFailureCount + 1,
                            fetchFailureReason: r,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...e,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...e,
                            ...t.state
                        }
                    }
                }
                )(this.state),
                i.V.batch( () => {
                    this.observers.forEach(t => {
                        t.onQueryUpdate()
                    }
                    ),
                    this.#r.notify({
                        query: this,
                        type: "updated",
                        action: t
                    })
                }
                )
            }
        }
        ;
        function o(t, e) {
            return {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: (0,
                s.Kw)(e.networkMode) ? "fetching" : "paused",
                ...void 0 === t && {
                    error: null,
                    status: "pending"
                }
            }
        }
    },
    66094: function(t, e, r) {
        "use strict";
        r.d(e, {
            S: function() {
                return y
            }
        });
        var n = r(56298)
          , i = r(2459)
          , s = r(69948)
          , a = r(49010)
          , u = class extends a.l {
            constructor(t={}) {
                super(),
                this.config = t,
                this.#u = new Map
            }
            #u;
            build(t, e, r) {
                let s = e.queryKey
                  , a = e.queryHash ?? (0,
                n.Rm)(s, e)
                  , u = this.get(a);
                return u || (u = new i.A({
                    cache: this,
                    queryKey: s,
                    queryHash: a,
                    options: t.defaultQueryOptions(e),
                    state: r,
                    defaultOptions: t.getQueryDefaults(s)
                }),
                this.add(u)),
                u
            }
            add(t) {
                this.#u.has(t.queryHash) || (this.#u.set(t.queryHash, t),
                this.notify({
                    type: "added",
                    query: t
                }))
            }
            remove(t) {
                let e = this.#u.get(t.queryHash);
                e && (t.destroy(),
                e === t && this.#u.delete(t.queryHash),
                this.notify({
                    type: "removed",
                    query: t
                }))
            }
            clear() {
                s.V.batch( () => {
                    this.getAll().forEach(t => {
                        this.remove(t)
                    }
                    )
                }
                )
            }
            get(t) {
                return this.#u.get(t)
            }
            getAll() {
                return [...this.#u.values()]
            }
            find(t) {
                let e = {
                    exact: !0,
                    ...t
                };
                return this.getAll().find(t => (0,
                n._x)(e, t))
            }
            findAll(t={}) {
                let e = this.getAll();
                return Object.keys(t).length > 0 ? e.filter(e => (0,
                n._x)(t, e)) : e
            }
            notify(t) {
                s.V.batch( () => {
                    this.listeners.forEach(e => {
                        e(t)
                    }
                    )
                }
                )
            }
            onFocus() {
                s.V.batch( () => {
                    this.getAll().forEach(t => {
                        t.onFocus()
                    }
                    )
                }
                )
            }
            onOnline() {
                s.V.batch( () => {
                    this.getAll().forEach(t => {
                        t.onOnline()
                    }
                    )
                }
                )
            }
        }
          , o = r(92812)
          , l = class extends a.l {
            constructor(t={}) {
                super(),
                this.config = t,
                this.#o = new Map,
                this.#l = Date.now()
            }
            #o;
            #l;
            build(t, e, r) {
                let n = new o.m({
                    mutationCache: this,
                    mutationId: ++this.#l,
                    options: t.defaultMutationOptions(e),
                    state: r
                });
                return this.add(n),
                n
            }
            add(t) {
                let e = c(t)
                  , r = this.#o.get(e) ?? [];
                r.push(t),
                this.#o.set(e, r),
                this.notify({
                    type: "added",
                    mutation: t
                })
            }
            remove(t) {
                let e = c(t);
                if (this.#o.has(e)) {
                    let r = this.#o.get(e)?.filter(e => e !== t);
                    r && (0 === r.length ? this.#o.delete(e) : this.#o.set(e, r))
                }
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            canRun(t) {
                let e = this.#o.get(c(t))?.find(t => "pending" === t.state.status);
                return !e || e === t
            }
            runNext(t) {
                let e = this.#o.get(c(t))?.find(e => e !== t && e.state.isPaused);
                return e?.continue() ?? Promise.resolve()
            }
            clear() {
                s.V.batch( () => {
                    this.getAll().forEach(t => {
                        this.remove(t)
                    }
                    )
                }
                )
            }
            getAll() {
                return [...this.#o.values()].flat()
            }
            find(t) {
                let e = {
                    exact: !0,
                    ...t
                };
                return this.getAll().find(t => (0,
                n.X7)(e, t))
            }
            findAll(t={}) {
                return this.getAll().filter(e => (0,
                n.X7)(t, e))
            }
            notify(t) {
                s.V.batch( () => {
                    this.listeners.forEach(e => {
                        e(t)
                    }
                    )
                }
                )
            }
            resumePausedMutations() {
                let t = this.getAll().filter(t => t.state.isPaused);
                return s.V.batch( () => Promise.all(t.map(t => t.continue().catch(n.ZT))))
            }
        }
        ;
        function c(t) {
            return t.options.scope?.id ?? String(t.mutationId)
        }
        var h = r(34939)
          , d = r(49937);
        function f(t) {
            return {
                onFetch: (e, r) => {
                    let i = e.options
                      , s = e.fetchOptions?.meta?.fetchMore?.direction
                      , a = e.state.data?.pages || []
                      , u = e.state.data?.pageParams || []
                      , o = {
                        pages: [],
                        pageParams: []
                    }
                      , l = 0
                      , c = async () => {
                        let r = !1
                          , c = t => {
                            Object.defineProperty(t, "signal", {
                                enumerable: !0,
                                get: () => (e.signal.aborted ? r = !0 : e.signal.addEventListener("abort", () => {
                                    r = !0
                                }
                                ),
                                e.signal)
                            })
                        }
                          , h = (0,
                        n.cG)(e.options, e.fetchOptions)
                          , d = async (t, i, s) => {
                            if (r)
                                return Promise.reject();
                            if (null == i && t.pages.length)
                                return Promise.resolve(t);
                            let a = {
                                queryKey: e.queryKey,
                                pageParam: i,
                                direction: s ? "backward" : "forward",
                                meta: e.options.meta
                            };
                            c(a);
                            let u = await h(a)
                              , {maxPages: o} = e.options
                              , l = s ? n.Ht : n.VX;
                            return {
                                pages: l(t.pages, u, o),
                                pageParams: l(t.pageParams, i, o)
                            }
                        }
                        ;
                        if (s && a.length) {
                            let t = "backward" === s
                              , e = {
                                pages: a,
                                pageParams: u
                            }
                              , r = (t ? function(t, {pages: e, pageParams: r}) {
                                return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, r[0], r) : void 0
                            }
                            : p)(i, e);
                            o = await d(e, r, t)
                        } else {
                            let e = t ?? a.length;
                            do {
                                let t = 0 === l ? u[0] ?? i.initialPageParam : p(i, o);
                                if (l > 0 && null == t)
                                    break;
                                o = await d(o, t),
                                l++
                            } while (l < e)
                        }
                        return o
                    }
                    ;
                    e.options.persister ? e.fetchFn = () => e.options.persister?.(c, {
                        queryKey: e.queryKey,
                        meta: e.options.meta,
                        signal: e.signal
                    }, r) : e.fetchFn = c
                }
            }
        }
        function p(t, {pages: e, pageParams: r}) {
            let n = e.length - 1;
            return e.length > 0 ? t.getNextPageParam(e[n], e, r[n], r) : void 0
        }
        var y = class {
            #c;
            #h;
            #i;
            #d;
            #f;
            #p;
            #y;
            #m;
            constructor(t={}) {
                this.#c = t.queryCache || new u,
                this.#h = t.mutationCache || new l,
                this.#i = t.defaultOptions || {},
                this.#d = new Map,
                this.#f = new Map,
                this.#p = 0
            }
            mount() {
                this.#p++,
                1 === this.#p && (this.#y = h.j.subscribe(async t => {
                    t && (await this.resumePausedMutations(),
                    this.#c.onFocus())
                }
                ),
                this.#m = d.N.subscribe(async t => {
                    t && (await this.resumePausedMutations(),
                    this.#c.onOnline())
                }
                ))
            }
            unmount() {
                this.#p--,
                0 === this.#p && (this.#y?.(),
                this.#y = void 0,
                this.#m?.(),
                this.#m = void 0)
            }
            isFetching(t) {
                return this.#c.findAll({
                    ...t,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(t) {
                return this.#h.findAll({
                    ...t,
                    status: "pending"
                }).length
            }
            getQueryData(t) {
                let e = this.defaultQueryOptions({
                    queryKey: t
                });
                return this.#c.get(e.queryHash)?.state.data
            }
            ensureQueryData(t) {
                let e = this.getQueryData(t.queryKey);
                if (void 0 === e)
                    return this.fetchQuery(t);
                {
                    let r = this.defaultQueryOptions(t)
                      , i = this.#c.build(this, r);
                    return t.revalidateIfStale && i.isStaleByTime((0,
                    n.KC)(r.staleTime, i)) && this.prefetchQuery(r),
                    Promise.resolve(e)
                }
            }
            getQueriesData(t) {
                return this.#c.findAll(t).map( ({queryKey: t, state: e}) => [t, e.data])
            }
            setQueryData(t, e, r) {
                let i = this.defaultQueryOptions({
                    queryKey: t
                })
                  , s = this.#c.get(i.queryHash)
                  , a = s?.state.data
                  , u = (0,
                n.SE)(e, a);
                if (void 0 !== u)
                    return this.#c.build(this, i).setData(u, {
                        ...r,
                        manual: !0
                    })
            }
            setQueriesData(t, e, r) {
                return s.V.batch( () => this.#c.findAll(t).map( ({queryKey: t}) => [t, this.setQueryData(t, e, r)]))
            }
            getQueryState(t) {
                let e = this.defaultQueryOptions({
                    queryKey: t
                });
                return this.#c.get(e.queryHash)?.state
            }
            removeQueries(t) {
                let e = this.#c;
                s.V.batch( () => {
                    e.findAll(t).forEach(t => {
                        e.remove(t)
                    }
                    )
                }
                )
            }
            resetQueries(t, e) {
                let r = this.#c
                  , n = {
                    type: "active",
                    ...t
                };
                return s.V.batch( () => (r.findAll(t).forEach(t => {
                    t.reset()
                }
                ),
                this.refetchQueries(n, e)))
            }
            cancelQueries(t={}, e={}) {
                let r = {
                    revert: !0,
                    ...e
                };
                return Promise.all(s.V.batch( () => this.#c.findAll(t).map(t => t.cancel(r)))).then(n.ZT).catch(n.ZT)
            }
            invalidateQueries(t={}, e={}) {
                return s.V.batch( () => {
                    if (this.#c.findAll(t).forEach(t => {
                        t.invalidate()
                    }
                    ),
                    "none" === t.refetchType)
                        return Promise.resolve();
                    let r = {
                        ...t,
                        type: t.refetchType ?? t.type ?? "active"
                    };
                    return this.refetchQueries(r, e)
                }
                )
            }
            refetchQueries(t={}, e) {
                let r = {
                    ...e,
                    cancelRefetch: e?.cancelRefetch ?? !0
                };
                return Promise.all(s.V.batch( () => this.#c.findAll(t).filter(t => !t.isDisabled()).map(t => {
                    let e = t.fetch(void 0, r);
                    return r.throwOnError || (e = e.catch(n.ZT)),
                    "paused" === t.state.fetchStatus ? Promise.resolve() : e
                }
                ))).then(n.ZT)
            }
            fetchQuery(t) {
                let e = this.defaultQueryOptions(t);
                void 0 === e.retry && (e.retry = !1);
                let r = this.#c.build(this, e);
                return r.isStaleByTime((0,
                n.KC)(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
            }
            prefetchQuery(t) {
                return this.fetchQuery(t).then(n.ZT).catch(n.ZT)
            }
            fetchInfiniteQuery(t) {
                return t.behavior = f(t.pages),
                this.fetchQuery(t)
            }
            prefetchInfiniteQuery(t) {
                return this.fetchInfiniteQuery(t).then(n.ZT).catch(n.ZT)
            }
            ensureInfiniteQueryData(t) {
                return t.behavior = f(t.pages),
                this.ensureQueryData(t)
            }
            resumePausedMutations() {
                return d.N.isOnline() ? this.#h.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#c
            }
            getMutationCache() {
                return this.#h
            }
            getDefaultOptions() {
                return this.#i
            }
            setDefaultOptions(t) {
                this.#i = t
            }
            setQueryDefaults(t, e) {
                this.#d.set((0,
                n.Ym)(t), {
                    queryKey: t,
                    defaultOptions: e
                })
            }
            getQueryDefaults(t) {
                let e = [...this.#d.values()]
                  , r = {};
                return e.forEach(e => {
                    (0,
                    n.to)(t, e.queryKey) && (r = {
                        ...r,
                        ...e.defaultOptions
                    })
                }
                ),
                r
            }
            setMutationDefaults(t, e) {
                this.#f.set((0,
                n.Ym)(t), {
                    mutationKey: t,
                    defaultOptions: e
                })
            }
            getMutationDefaults(t) {
                let e = [...this.#f.values()]
                  , r = {};
                return e.forEach(e => {
                    (0,
                    n.to)(t, e.mutationKey) && (r = {
                        ...r,
                        ...e.defaultOptions
                    })
                }
                ),
                r
            }
            defaultQueryOptions(t) {
                if (t._defaulted)
                    return t;
                let e = {
                    ...this.#i.queries,
                    ...this.getQueryDefaults(t.queryKey),
                    ...t,
                    _defaulted: !0
                };
                return e.queryHash || (e.queryHash = (0,
                n.Rm)(e.queryKey, e)),
                void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode),
                void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
                !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
                !0 !== e.enabled && e.queryFn === n.CN && (e.enabled = !1),
                e
            }
            defaultMutationOptions(t) {
                return t?._defaulted ? t : {
                    ...this.#i.mutations,
                    ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
                    ...t,
                    _defaulted: !0
                }
            }
            clear() {
                this.#c.clear(),
                this.#h.clear()
            }
        }
    }
}]);
