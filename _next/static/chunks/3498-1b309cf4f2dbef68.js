(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3498], {
    66648: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return o.a
            }
        });
        var n = r(55601)
          , o = r.n(n)
    },
    87138: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return o.a
            }
        });
        var n = r(231)
          , o = r.n(n)
    },
    844: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "addLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(18157);
        let n = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            return e
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    25944: function(e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(18157),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    38173: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return w
            }
        });
        let n = r(99920)
          , o = r(41452)
          , i = r(57437)
          , s = o._(r(2265))
          , a = n._(r(54887))
          , l = n._(r(28321))
          , u = r(80497)
          , c = r(7103)
          , d = r(93938);
        r(72301);
        let f = r(60291)
          , p = n._(r(21241))
          , h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, r, n, o, i, s) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && o(!0),
                    null == r ? void 0 : r.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let n = !1
                          , o = !1;
                        r.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => o,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(e)
                }
            }
            ))
        }
        function g(e) {
            return s.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let b = (0,
        s.forwardRef)( (e, t) => {
            let {src: r, srcSet: n, sizes: o, height: a, width: l, decoding: u, className: c, style: d, fetchPriority: f, placeholder: p, loading: h, unoptimized: b, fill: y, onLoadRef: w, onLoadingCompleteRef: v, setBlurComplete: x, setShowAltText: E, sizesInput: S, onLoad: O, onError: R, ..._} = e;
            return (0,
            i.jsx)("img", {
                ..._,
                ...g(f),
                loading: h,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: c,
                style: d,
                sizes: o,
                srcSet: n,
                src: r,
                ref: (0,
                s.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (R && (e.src = e.src),
                    e.complete && m(e, p, w, v, x, b, S))
                }
                , [r, p, w, v, x, R, b, S, t]),
                onLoad: e => {
                    m(e.currentTarget, p, w, v, x, b, S)
                }
                ,
                onError: e => {
                    E(!0),
                    "empty" !== p && x(!0),
                    R && R(e)
                }
            })
        }
        );
        function y(e) {
            let {isAppRouter: t, imgAttributes: r} = e
              , n = {
                as: "image",
                imageSrcSet: r.srcSet,
                imageSizes: r.sizes,
                crossOrigin: r.crossOrigin,
                referrerPolicy: r.referrerPolicy,
                ...g(r.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(r.src, n),
            null) : (0,
            i.jsx)(l.default, {
                children: (0,
                i.jsx)("link", {
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
        }
        let w = (0,
        s.forwardRef)( (e, t) => {
            let r = (0,
            s.useContext)(f.RouterContext)
              , n = (0,
            s.useContext)(d.ImageConfigContext)
              , o = (0,
            s.useMemo)( () => {
                let e = h || n || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , r = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: l} = e
              , m = (0,
            s.useRef)(a);
            (0,
            s.useEffect)( () => {
                m.current = a
            }
            , [a]);
            let g = (0,
            s.useRef)(l);
            (0,
            s.useEffect)( () => {
                g.current = l
            }
            , [l]);
            let[w,v] = (0,
            s.useState)(!1)
              , [x,E] = (0,
            s.useState)(!1)
              , {props: S, meta: O} = (0,
            u.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: o,
                blurComplete: w,
                showAltText: x
            });
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(b, {
                    ...S,
                    unoptimized: O.unoptimized,
                    placeholder: O.placeholder,
                    fill: O.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: v,
                    setShowAltText: E,
                    sizesInput: e.sizes,
                    ref: t
                }), O.priority ? (0,
                i.jsx)(y, {
                    isAppRouter: !r,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    231: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return v
            }
        });
        let n = r(99920)
          , o = r(57437)
          , i = n._(r(2265))
          , s = r(98016)
          , a = r(18029)
          , l = r(41142)
          , u = r(43461)
          , c = r(844)
          , d = r(60291)
          , f = r(44467)
          , p = r(53106)
          , h = r(25944)
          , m = r(4897)
          , g = r(51507)
          , b = new Set;
        function y(e, t, r, n, o, i) {
            if ("undefined" != typeof window && (i || (0,
            a.isLocalURL)(t))) {
                if (!n.bypassPrefetchedCheck) {
                    let o = t + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale"in e ? e.locale : void 0);
                    if (b.has(o))
                        return;
                    b.add(o)
                }
                (async () => i ? e.prefetch(t, o) : e.prefetch(t, r, n))().catch(e => {}
                )
            }
        }
        function w(e) {
            return "string" == typeof e ? e : (0,
            l.formatUrl)(e)
        }
        let v = i.default.forwardRef(function(e, t) {
            let r, n;
            let {href: l, as: b, children: v, prefetch: x=null, passHref: E, replace: S, shallow: O, scroll: R, locale: _, onClick: j, onMouseEnter: P, onTouchStart: C, legacyBehavior: k=!1, ...N} = e;
            r = v,
            k && ("string" == typeof r || "number" == typeof r) && (r = (0,
            o.jsx)("a", {
                children: r
            }));
            let T = i.default.useContext(d.RouterContext)
              , A = i.default.useContext(f.AppRouterContext)
              , M = null != T ? T : A
              , z = !T
              , L = !1 !== x
              , U = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL
              , {href: I, as: F} = i.default.useMemo( () => {
                if (!T) {
                    let e = w(l);
                    return {
                        href: e,
                        as: b ? w(b) : e
                    }
                }
                let[e,t] = (0,
                s.resolveHref)(T, l, !0);
                return {
                    href: e,
                    as: b ? (0,
                    s.resolveHref)(T, b) : t || e
                }
            }
            , [T, l, b])
              , D = i.default.useRef(I)
              , B = i.default.useRef(F);
            k && (n = i.default.Children.only(r));
            let q = k ? n && "object" == typeof n && n.ref : t
              , [W,$,G] = (0,
            p.useIntersection)({
                rootMargin: "200px"
            })
              , H = i.default.useCallback(e => {
                (B.current !== F || D.current !== I) && (G(),
                B.current = F,
                D.current = I),
                W(e),
                q && ("function" == typeof q ? q(e) : "object" == typeof q && (q.current = e))
            }
            , [F, q, I, G, W]);
            i.default.useEffect( () => {
                M && $ && L && y(M, I, F, {
                    locale: _
                }, {
                    kind: U
                }, z)
            }
            , [F, I, $, _, L, null == T ? void 0 : T.locale, M, z, U]);
            let K = {
                ref: H,
                onClick(e) {
                    k || "function" != typeof j || j(e),
                    k && n.props && "function" == typeof n.props.onClick && n.props.onClick(e),
                    M && !e.defaultPrevented && function(e, t, r, n, o, s, l, u, c) {
                        let {nodeName: d} = e.currentTarget;
                        if ("A" === d.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        a.isLocalURL)(r)))
                            return;
                        e.preventDefault();
                        let f = () => {
                            let e = null == l || l;
                            "beforePopState"in t ? t[o ? "replace" : "push"](r, n, {
                                shallow: s,
                                locale: u,
                                scroll: e
                            }) : t[o ? "replace" : "push"](n || r, {
                                scroll: e
                            })
                        }
                        ;
                        c ? i.default.startTransition(f) : f()
                    }(e, M, I, F, S, O, R, _, z)
                },
                onMouseEnter(e) {
                    k || "function" != typeof P || P(e),
                    k && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                    M && (L || !z) && y(M, I, F, {
                        locale: _,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: U
                    }, z)
                },
                onTouchStart: function(e) {
                    k || "function" != typeof C || C(e),
                    k && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                    M && (L || !z) && y(M, I, F, {
                        locale: _,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: U
                    }, z)
                }
            };
            if ((0,
            u.isAbsoluteUrl)(F))
                K.href = F;
            else if (!k || E || "a" === n.type && !("href"in n.props)) {
                let e = void 0 !== _ ? _ : null == T ? void 0 : T.locale
                  , t = (null == T ? void 0 : T.isLocaleDomain) && (0,
                h.getDomainLocale)(F, e, null == T ? void 0 : T.locales, null == T ? void 0 : T.domainLocales);
                K.href = t || (0,
                m.addBasePath)((0,
                c.addLocale)(F, e, null == T ? void 0 : T.defaultLocale))
            }
            return k ? i.default.cloneElement(n, K) : (0,
            o.jsx)("a", {
                ...N,
                ...K,
                children: r
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    98016: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "resolveHref", {
            enumerable: !0,
            get: function() {
                return d
            }
        });
        let n = r(18323)
          , o = r(41142)
          , i = r(45519)
          , s = r(43461)
          , a = r(18157)
          , l = r(18029)
          , u = r(59195)
          , c = r(80020);
        function d(e, t, r) {
            let d;
            let f = "string" == typeof t ? t : (0,
            o.formatWithValidation)(t)
              , p = f.match(/^[a-zA-Z]{1,}:\/\//)
              , h = p ? f.slice(p[0].length) : f;
            if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + f + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let t = (0,
                s.normalizeRepeatedSlashes)(h);
                f = (p ? p[0] : "") + t
            }
            if (!(0,
            l.isLocalURL)(f))
                return r ? [f] : f;
            try {
                d = new URL(f.startsWith("#") ? e.asPath : e.pathname,"http://n")
            } catch (e) {
                d = new URL("/","http://n")
            }
            try {
                let e = new URL(f,d);
                e.pathname = (0,
                a.normalizePathTrailingSlash)(e.pathname);
                let t = "";
                if ((0,
                u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
                    let r = (0,
                    n.searchParamsToUrlQuery)(e.searchParams)
                      , {result: s, params: a} = (0,
                    c.interpolateAs)(e.pathname, e.pathname, r);
                    s && (t = (0,
                    o.formatWithValidation)({
                        pathname: s,
                        hash: e.hash,
                        query: (0,
                        i.omit)(r, a)
                    }))
                }
                let s = e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
                return r ? [s, t || s] : s
            } catch (e) {
                return r ? [f] : f
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    53106: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let n = r(2265)
          , o = r(49189)
          , i = "function" == typeof IntersectionObserver
          , s = new Map
          , a = [];
        function l(e) {
            let {rootRef: t, rootMargin: r, disabled: l} = e
              , u = l || !i
              , [c,d] = (0,
            n.useState)(!1)
              , f = (0,
            n.useRef)(null)
              , p = (0,
            n.useCallback)(e => {
                f.current = e
            }
            , []);
            return (0,
            n.useEffect)( () => {
                if (i) {
                    if (u || c)
                        return;
                    let e = f.current;
                    if (e && e.tagName)
                        return function(e, t, r) {
                            let {id: n, observer: o, elements: i} = function(e) {
                                let t;
                                let r = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , n = a.find(e => e.root === r.root && e.margin === r.margin);
                                if (n && (t = s.get(n)))
                                    return t;
                                let o = new Map;
                                return t = {
                                    id: r,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target)
                                              , r = e.isIntersecting || e.intersectionRatio > 0;
                                            t && r && t(r)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: o
                                },
                                a.push(r),
                                s.set(r, t),
                                t
                            }(r);
                            return i.set(e, t),
                            o.observe(e),
                            function() {
                                if (i.delete(e),
                                o.unobserve(e),
                                0 === i.size) {
                                    o.disconnect(),
                                    s.delete(n);
                                    let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                                    e > -1 && a.splice(e, 1)
                                }
                            }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: r
                        })
                } else if (!c) {
                    let e = (0,
                    o.requestIdleCallback)( () => d(!0));
                    return () => (0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [u, r, t, c, f.current]),
            [p, c, (0,
            n.useCallback)( () => {
                d(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    82901: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(99920)._(r(2265)).default.createContext({})
    },
    40687: function(e, t) {
        "use strict";
        function r(e) {
            let {ampFirst: t=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === e ? {} : e;
            return t || r && n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    81943: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = /[|\\{}()[\]^$+*?.-]/
          , n = /[|\\{}()[\]^$+*?.-]/g;
        function o(e) {
            return r.test(e) ? e.replace(n, "\\$&") : e
        }
    },
    80497: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        r(72301);
        let n = r(51564)
          , o = r(7103);
        function i(e) {
            return void 0 !== e.default
        }
        function s(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function a(e, t) {
            var r;
            let a, l, u, {src: c, sizes: d, unoptimized: f=!1, priority: p=!1, loading: h, className: m, quality: g, width: b, height: y, fill: w=!1, style: v, overrideSrc: x, onLoad: E, onLoadingComplete: S, placeholder: O="empty", blurDataURL: R, fetchPriority: _, layout: j, objectFit: P, objectPosition: C, lazyBoundary: k, lazyRoot: N, ...T} = e, {imgConf: A, showAltText: M, blurComplete: z, defaultLoader: L} = t, U = A || o.imageConfigDefault;
            if ("allSizes"in U)
                a = U;
            else {
                let e = [...U.deviceSizes, ...U.imageSizes].sort( (e, t) => e - t)
                  , t = U.deviceSizes.sort( (e, t) => e - t);
                a = {
                    ...U,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            if (void 0 === L)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let I = T.loader || L;
            delete T.loader,
            delete T.srcSet;
            let F = "__next_img_default"in I;
            if (F) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = I;
                I = t => {
                    let {config: r, ...n} = t;
                    return e(n)
                }
            }
            if (j) {
                "fill" === j && (w = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[j];
                e && (v = {
                    ...v,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[j];
                t && !d && (d = t)
            }
            let D = ""
              , B = s(b)
              , q = s(y);
            if ("object" == typeof (r = c) && (i(r) || void 0 !== r.src)) {
                let e = i(c) ? c.default : c;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                u = e.blurHeight,
                R = R || e.blurDataURL,
                D = e.src,
                !w) {
                    if (B || q) {
                        if (B && !q) {
                            let t = B / e.width;
                            q = Math.round(e.height * t)
                        } else if (!B && q) {
                            let t = q / e.height;
                            B = Math.round(e.width * t)
                        }
                    } else
                        B = e.width,
                        q = e.height
                }
            }
            let W = !p && ("lazy" === h || void 0 === h);
            (!(c = "string" == typeof c ? c : D) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0,
            W = !1),
            a.unoptimized && (f = !0),
            F && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
            p && (_ = "high");
            let $ = s(g)
              , G = Object.assign(w ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: C
            } : {}, M ? {} : {
                color: "transparent"
            }, v)
              , H = z || "empty" === O ? null : "blur" === O ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: B,
                heightInt: q,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: R || "",
                objectFit: G.objectFit
            }) + '")' : 'url("' + O + '")'
              , K = H ? {
                backgroundSize: G.objectFit || "cover",
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H
            } : {}
              , V = function(e) {
                let {config: t, src: r, unoptimized: n, width: o, quality: i, sizes: s, loader: a} = e;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, r) {
                    let {deviceSizes: n, allSizes: o} = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let n; n = e.exec(r); n)
                            t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                        kind: "x"
                    }
                }(t, o, s)
                  , c = l.length - 1;
                return {
                    sizes: s || "w" !== u ? s : "100vw",
                    srcSet: l.map( (e, n) => a({
                        config: t,
                        src: r,
                        quality: i,
                        width: e
                    }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                    src: a({
                        config: t,
                        src: r,
                        quality: i,
                        width: l[c]
                    })
                }
            }({
                config: a,
                src: c,
                unoptimized: f,
                width: B,
                quality: $,
                sizes: d,
                loader: I
            });
            return {
                props: {
                    ...T,
                    loading: W ? "lazy" : h,
                    fetchPriority: _,
                    width: B,
                    height: q,
                    decoding: "async",
                    className: m,
                    style: {
                        ...G,
                        ...K
                    },
                    sizes: V.sizes,
                    srcSet: V.srcSet,
                    src: x || V.src
                },
                meta: {
                    unoptimized: f,
                    priority: p,
                    placeholder: O,
                    fill: w
                }
            }
        }
    },
    28321: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return m
            },
            defaultHead: function() {
                return d
            }
        });
        let n = r(99920)
          , o = r(41452)
          , i = r(57437)
          , s = o._(r(2265))
          , a = n._(r(65960))
          , l = r(82901)
          , u = r(36590)
          , c = r(40687);
        function d(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            i.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        r(72301);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
            let {inAmpMode: r} = t;
            return e.reduce(f, []).reverse().concat(d(r).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , r = new Set
                  , n = {};
                return o => {
                    let i = !0
                      , s = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        s = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? i = !1 : e.add(t)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (o.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    r.has(t) ? i = !1 : r.add(t);
                                else {
                                    let e = o.props[t]
                                      , r = n[t] || new Set;
                                    ("name" !== t || !s) && r.has(e) ? i = !1 : (r.add(e),
                                    n[t] = r)
                                }
                            }
                        }
                    }
                    return i
                }
            }()).reverse().map( (e, t) => {
                let n = e.key || t;
                if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    s.default.cloneElement(e, t)
                }
                return s.default.cloneElement(e, {
                    key: n
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , r = (0,
            s.useContext)(l.AmpStateContext)
              , n = (0,
            s.useContext)(u.HeadManagerContext);
            return (0,
            i.jsx)(a.default, {
                reduceComponentsToState: h,
                headManager: n,
                inAmpMode: (0,
                c.isInAmpMode)(r),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    51564: function(e, t) {
        "use strict";
        function r(e) {
            let {widthInt: t, heightInt: r, blurWidth: n, blurHeight: o, blurDataURL: i, objectFit: s} = e
              , a = n ? 40 * n : t
              , l = o ? 40 * o : r
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    93938: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(99920)._(r(2265))
          , o = r(7103)
          , i = n.default.createContext(o.imageConfigDefault)
    },
    7103: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            VALID_LOADERS: function() {
                return r
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    55601: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let n = r(99920)
          , o = r(80497)
          , i = r(38173)
          , s = n._(r(21241));
        function a(e) {
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,r] of Object.entries(t))
                void 0 === r && delete t[e];
            return {
                props: t
            }
        }
        let l = i.Image
    },
    21241: function(e, t) {
        "use strict";
        function r(e) {
            let {config: t, src: r, width: n, quality: o} = e;
            return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (o || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    },
    60291: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(99920)._(r(2265)).default.createContext(null)
    },
    41142: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            formatUrl: function() {
                return i
            },
            formatWithValidation: function() {
                return a
            },
            urlObjectKeys: function() {
                return s
            }
        });
        let n = r(41452)._(r(18323))
          , o = /https?|ftp|gopher|file/;
        function i(e) {
            let {auth: t, hostname: r} = e
              , i = e.protocol || ""
              , s = e.pathname || ""
              , a = e.hash || ""
              , l = e.query || ""
              , u = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
            e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? "[" + r + "]" : r),
            e.port && (u += ":" + e.port)),
            l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
            let c = e.search || l && "?" + l || "";
            return i && !i.endsWith(":") && (i += ":"),
            e.slashes || (!i || o.test(i)) && !1 !== u ? (u = "//" + (u || ""),
            s && "/" !== s[0] && (s = "/" + s)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            c && "?" !== c[0] && (c = "?" + c),
            "" + i + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
        }
        let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(e) {
            return i(e)
        }
    },
    59195: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            getSortedRoutes: function() {
                return n.getSortedRoutes
            },
            isDynamicRoute: function() {
                return o.isDynamicRoute
            }
        });
        let n = r(49089)
          , o = r(28083)
    },
    80020: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(41533)
          , o = r(63169);
        function i(e, t, r) {
            let i = ""
              , s = (0,
            o.getRouteRegex)(e)
              , a = s.groups
              , l = (t !== e ? (0,
            n.getRouteMatcher)(s)(t) : "") || r;
            i = e;
            let u = Object.keys(a);
            return u.every(e => {
                let t = l[e] || ""
                  , {repeat: r, optional: n} = a[e]
                  , o = "[" + (r ? "..." : "") + e + "]";
                return n && (o = (t ? "" : "/") + "[" + o + "]"),
                r && !Array.isArray(t) && (t = [t]),
                (n || e in l) && (i = i.replace(o, r ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
            }
            ) || (i = ""),
            {
                params: u,
                result: i
            }
        }
    },
    28083: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(82269)
          , o = /\/\[[^/]+?\](?=\/|$)/;
        function i(e) {
            return (0,
            n.isInterceptionRouteAppPath)(e) && (e = (0,
            n.extractInterceptionRouteInformation)(e).interceptedRoute),
            o.test(e)
        }
    },
    18029: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(43461)
          , o = r(49404);
        function i(e) {
            if (!(0,
            n.isAbsoluteUrl)(e))
                return !0;
            try {
                let t = (0,
                n.getLocationOrigin)()
                  , r = new URL(e,t);
                return r.origin === t && (0,
                o.hasBasePath)(r.pathname)
            } catch (e) {
                return !1
            }
        }
    },
    45519: function(e, t) {
        "use strict";
        function r(e, t) {
            let r = {};
            return Object.keys(e).forEach(n => {
                t.includes(n) || (r[n] = e[n])
            }
            ),
            r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "omit", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    18323: function(e, t) {
        "use strict";
        function r(e) {
            let t = {};
            return e.forEach( (e, r) => {
                void 0 === t[r] ? t[r] = e : Array.isArray(t[r]) ? t[r].push(e) : t[r] = [t[r], e]
            }
            ),
            t
        }
        function n(e) {
            return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function o(e) {
            let t = new URLSearchParams;
            return Object.entries(e).forEach(e => {
                let[r,o] = e;
                Array.isArray(o) ? o.forEach(e => t.append(r, n(e))) : t.set(r, n(o))
            }
            ),
            t
        }
        function i(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            return r.forEach(t => {
                Array.from(t.keys()).forEach(t => e.delete(t)),
                t.forEach( (t, r) => e.append(r, t))
            }
            ),
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            assign: function() {
                return i
            },
            searchParamsToUrlQuery: function() {
                return r
            },
            urlQueryToSearchParams: function() {
                return o
            }
        })
    },
    41533: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(43461);
        function o(e) {
            let {re: t, groups: r} = e;
            return e => {
                let o = t.exec(e);
                if (!o)
                    return !1;
                let i = e => {
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        throw new n.DecodeError("failed to decode param")
                    }
                }
                  , s = {};
                return Object.keys(r).forEach(e => {
                    let t = r[e]
                      , n = o[t.pos];
                    void 0 !== n && (s[e] = ~n.indexOf("/") ? n.split("/").map(e => i(e)) : t.repeat ? [i(n)] : i(n))
                }
                ),
                s
            }
        }
    },
    63169: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            getNamedMiddlewareRegex: function() {
                return f
            },
            getNamedRouteRegex: function() {
                return d
            },
            getRouteRegex: function() {
                return l
            }
        });
        let n = r(82269)
          , o = r(81943)
          , i = r(67741);
        function s(e) {
            let t = e.startsWith("[") && e.endsWith("]");
            t && (e = e.slice(1, -1));
            let r = e.startsWith("...");
            return r && (e = e.slice(3)),
            {
                key: e,
                repeat: r,
                optional: t
            }
        }
        function a(e) {
            let t = (0,
            i.removeTrailingSlash)(e).slice(1).split("/")
              , r = {}
              , a = 1;
            return {
                parameterizedRoute: t.map(e => {
                    let t = n.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t))
                      , i = e.match(/\[((?:\[.*\])|.+)\]/);
                    if (t && i) {
                        let {key: e, optional: n, repeat: l} = s(i[1]);
                        return r[e] = {
                            pos: a++,
                            repeat: l,
                            optional: n
                        },
                        "/" + (0,
                        o.escapeStringRegexp)(t) + "([^/]+?)"
                    }
                    if (!i)
                        return "/" + (0,
                        o.escapeStringRegexp)(e);
                    {
                        let {key: e, repeat: t, optional: n} = s(i[1]);
                        return r[e] = {
                            pos: a++,
                            repeat: t,
                            optional: n
                        },
                        t ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: r
            }
        }
        function l(e) {
            let {parameterizedRoute: t, groups: r} = a(e);
            return {
                re: RegExp("^" + t + "(?:/)?$"),
                groups: r
            }
        }
        function u(e) {
            let {interceptionMarker: t, getSafeRouteKey: r, segment: n, routeKeys: i, keyPrefix: a} = e
              , {key: l, optional: u, repeat: c} = s(n)
              , d = l.replace(/\W/g, "");
            a && (d = "" + a + d);
            let f = !1;
            (0 === d.length || d.length > 30) && (f = !0),
            isNaN(parseInt(d.slice(0, 1))) || (f = !0),
            f && (d = r()),
            a ? i[d] = "" + a + l : i[d] = l;
            let p = t ? (0,
            o.escapeStringRegexp)(t) : "";
            return c ? u ? "(?:/" + p + "(?<" + d + ">.+?))?" : "/" + p + "(?<" + d + ">.+?)" : "/" + p + "(?<" + d + ">[^/]+?)"
        }
        function c(e, t) {
            let r;
            let s = (0,
            i.removeTrailingSlash)(e).slice(1).split("/")
              , a = (r = 0,
            () => {
                let e = ""
                  , t = ++r;
                for (; t > 0; )
                    e += String.fromCharCode(97 + (t - 1) % 26),
                    t = Math.floor((t - 1) / 26);
                return e
            }
            )
              , l = {};
            return {
                namedParameterizedRoute: s.map(e => {
                    let r = n.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t))
                      , i = e.match(/\[((?:\[.*\])|.+)\]/);
                    if (r && i) {
                        let[r] = e.split(i[0]);
                        return u({
                            getSafeRouteKey: a,
                            interceptionMarker: r,
                            segment: i[1],
                            routeKeys: l,
                            keyPrefix: t ? "nxtI" : void 0
                        })
                    }
                    return i ? u({
                        getSafeRouteKey: a,
                        segment: i[1],
                        routeKeys: l,
                        keyPrefix: t ? "nxtP" : void 0
                    }) : "/" + (0,
                    o.escapeStringRegexp)(e)
                }
                ).join(""),
                routeKeys: l
            }
        }
        function d(e, t) {
            let r = c(e, t);
            return {
                ...l(e),
                namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                routeKeys: r.routeKeys
            }
        }
        function f(e, t) {
            let {parameterizedRoute: r} = a(e)
              , {catchAll: n=!0} = t;
            if ("/" === r)
                return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: o} = c(e, !1);
            return {
                namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    49089: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getSortedRoutes", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        class r {
            insert(e) {
                this._insert(e.split("/").filter(Boolean), [], !1)
            }
            smoosh() {
                return this._smoosh()
            }
            _smoosh(e) {
                void 0 === e && (e = "/");
                let t = [...this.children.keys()].sort();
                null !== this.slugName && t.splice(t.indexOf("[]"), 1),
                null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
                null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
                let r = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce( (e, t) => [...e, ...t], []);
                if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")),
                !this.placeholder) {
                    let t = "/" === e ? "/" : e.slice(0, -1);
                    if (null != this.optionalRestSlugName)
                        throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
                    r.unshift(t)
                }
                return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")),
                null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")),
                r
            }
            _insert(e, t, n) {
                if (0 === e.length) {
                    this.placeholder = !1;
                    return
                }
                if (n)
                    throw Error("Catch-all must be the last part of the URL.");
                let o = e[0];
                if (o.startsWith("[") && o.endsWith("]")) {
                    let r = o.slice(1, -1)
                      , s = !1;
                    if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1),
                    s = !0),
                    r.startsWith("...") && (r = r.substring(3),
                    n = !0),
                    r.startsWith("[") || r.endsWith("]"))
                        throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                    if (r.startsWith("."))
                        throw Error("Segment names may not start with erroneous periods ('" + r + "').");
                    function i(e, r) {
                        if (null !== e && e !== r)
                            throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + r + "').");
                        t.forEach(e => {
                            if (e === r)
                                throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                            if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                                throw Error('You cannot have the slug names "' + e + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                        }
                        ),
                        t.push(r)
                    }
                    if (n) {
                        if (s) {
                            if (null != this.restSlugName)
                                throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                            i(this.optionalRestSlugName, r),
                            this.optionalRestSlugName = r,
                            o = "[[...]]"
                        } else {
                            if (null != this.optionalRestSlugName)
                                throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                            i(this.restSlugName, r),
                            this.restSlugName = r,
                            o = "[...]"
                        }
                    } else {
                        if (s)
                            throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
                        i(this.slugName, r),
                        this.slugName = r,
                        o = "[]"
                    }
                }
                this.children.has(o) || this.children.set(o, new r),
                this.children.get(o)._insert(e.slice(1), t, n)
            }
            constructor() {
                this.placeholder = !0,
                this.children = new Map,
                this.slugName = null,
                this.restSlugName = null,
                this.optionalRestSlugName = null
            }
        }
        function n(e) {
            let t = new r;
            return e.forEach(e => t.insert(e)),
            t.smoosh()
        }
    },
    65960: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(2265)
          , o = "undefined" == typeof window
          , i = o ? () => {}
        : n.useLayoutEffect
          , s = o ? () => {}
        : n.useEffect;
        function a(e) {
            let {headManager: t, reduceComponentsToState: r} = e;
            function a() {
                if (t && t.mountedInstances) {
                    let o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(r(o, e))
                }
            }
            if (o) {
                var l;
                null == t || null == (l = t.mountedInstances) || l.add(e.children),
                a()
            }
            return i( () => {
                var r;
                return null == t || null == (r = t.mountedInstances) || r.add(e.children),
                () => {
                    var r;
                    null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                }
            }
            ),
            i( () => (t && (t._pendingUpdate = a),
            () => {
                t && (t._pendingUpdate = a)
            }
            )),
            s( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    43461: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            DecodeError: function() {
                return h
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            MissingStaticPage: function() {
                return b
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return f
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return r
            },
            execOnce: function() {
                return n
            },
            getDisplayName: function() {
                return l
            },
            getLocationOrigin: function() {
                return s
            },
            getURL: function() {
                return a
            },
            isAbsoluteUrl: function() {
                return i
            },
            isResSent: function() {
                return u
            },
            loadGetInitialProps: function() {
                return d
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            stringifyError: function() {
                return w
            }
        });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(e) {
            let t, r = !1;
            return function() {
                for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return r || (r = !0,
                t = e(...o)),
                t
            }
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , i = e => o.test(e);
        function s() {
            let {protocol: e, hostname: t, port: r} = window.location;
            return e + "//" + t + (r ? ":" + r : "")
        }
        function a() {
            let {href: e} = window.location
              , t = s();
            return e.substring(t.length)
        }
        function l(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }
        function u(e) {
            return e.finished || e.headersSent
        }
        function c(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        }
        async function d(e, t) {
            let r = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps)
                return t.ctx && t.Component ? {
                    pageProps: await d(t.Component, t.ctx)
                } : {};
            let n = await e.getInitialProps(t);
            if (r && u(r))
                return n;
            if (!n)
                throw Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
            return n
        }
        let f = "undefined" != typeof performance
          , p = f && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class h extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(e) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + e
            }
        }
        class b extends Error {
            constructor(e, t) {
                super(),
                this.message = "Failed to load static file for page: " + e + " " + t
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function w(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    },
    71906: function(e) {
        e.exports = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
    },
    93707: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__Fredoka_e984eb', '__Fredoka_Fallback_e984eb'",
                fontStyle: "normal"
            },
            className: "__className_e984eb"
        }
    },
    38472: function(e, t, r) {
        "use strict";
        let n, o, i;
        r.d(t, {
            Z: function() {
                return th
            }
        });
        var s, a, l, u, c, d = {};
        function f(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        r.r(d),
        r.d(d, {
            hasBrowserEnv: function() {
                return eb
            },
            hasStandardBrowserEnv: function() {
                return ew
            },
            hasStandardBrowserWebWorkerEnv: function() {
                return ev
            },
            navigator: function() {
                return ey
            },
            origin: function() {
                return ex
            }
        });
        var p = r(25566);
        let {toString: h} = Object.prototype
          , {getPrototypeOf: m} = Object
          , g = (n = Object.create(null),
        e => {
            let t = h.call(e);
            return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
        }
        )
          , b = e => (e = e.toLowerCase(),
        t => g(t) === e)
          , y = e => t => typeof t === e
          , {isArray: w} = Array
          , v = y("undefined")
          , x = b("ArrayBuffer")
          , E = y("string")
          , S = y("function")
          , O = y("number")
          , R = e => null !== e && "object" == typeof e
          , _ = e => {
            if ("object" !== g(e))
                return !1;
            let t = m(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        }
          , j = b("Date")
          , P = b("File")
          , C = b("Blob")
          , k = b("FileList")
          , N = b("URLSearchParams")
          , [T,A,M,z] = ["ReadableStream", "Request", "Response", "Headers"].map(b);
        function L(e, t, {allOwnKeys: r=!1}={}) {
            let n, o;
            if (null != e) {
                if ("object" != typeof e && (e = [e]),
                w(e))
                    for (n = 0,
                    o = e.length; n < o; n++)
                        t.call(null, e[n], n, e);
                else {
                    let o;
                    let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e)
                      , s = i.length;
                    for (n = 0; n < s; n++)
                        o = i[n],
                        t.call(null, e[o], o, e)
                }
            }
        }
        function U(e, t) {
            let r;
            t = t.toLowerCase();
            let n = Object.keys(e)
              , o = n.length;
            for (; o-- > 0; )
                if (t === (r = n[o]).toLowerCase())
                    return r;
            return null
        }
        let I = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global
          , F = e => !v(e) && e !== I
          , D = (o = "undefined" != typeof Uint8Array && m(Uint8Array),
        e => o && e instanceof o)
          , B = b("HTMLFormElement")
          , q = ( ({hasOwnProperty: e}) => (t, r) => e.call(t, r))(Object.prototype)
          , W = b("RegExp")
          , $ = (e, t) => {
            let r = Object.getOwnPropertyDescriptors(e)
              , n = {};
            L(r, (r, o) => {
                let i;
                !1 !== (i = t(r, o, e)) && (n[o] = i || r)
            }
            ),
            Object.defineProperties(e, n)
        }
          , G = "abcdefghijklmnopqrstuvwxyz"
          , H = "0123456789"
          , K = {
            DIGIT: H,
            ALPHA: G,
            ALPHA_DIGIT: G + G.toUpperCase() + H
        }
          , V = b("AsyncFunction")
          , J = (s = "function" == typeof setImmediate,
        a = S(I.postMessage),
        s ? setImmediate : a ? (l = `axios@${Math.random()}`,
        u = [],
        I.addEventListener("message", ({source: e, data: t}) => {
            e === I && t === l && u.length && u.shift()()
        }
        , !1),
        e => {
            u.push(e),
            I.postMessage(l, "*")
        }
        ) : e => setTimeout(e))
          , Y = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(I) : void 0 !== p && p.nextTick || J;
        var Q = {
            isArray: w,
            isArrayBuffer: x,
            isBuffer: function(e) {
                return null !== e && !v(e) && null !== e.constructor && !v(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || S(e.append) && ("formdata" === (t = g(e)) || "object" === t && S(e.toString) && "[object FormData]" === e.toString()))
            }
            ,
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && x(e.buffer)
            },
            isString: E,
            isNumber: O,
            isBoolean: e => !0 === e || !1 === e,
            isObject: R,
            isPlainObject: _,
            isReadableStream: T,
            isRequest: A,
            isResponse: M,
            isHeaders: z,
            isUndefined: v,
            isDate: j,
            isFile: P,
            isBlob: C,
            isRegExp: W,
            isFunction: S,
            isStream: e => R(e) && S(e.pipe),
            isURLSearchParams: N,
            isTypedArray: D,
            isFileList: k,
            forEach: L,
            merge: function e() {
                let {caseless: t} = F(this) && this || {}
                  , r = {}
                  , n = (n, o) => {
                    let i = t && U(r, o) || o;
                    _(r[i]) && _(n) ? r[i] = e(r[i], n) : _(n) ? r[i] = e({}, n) : w(n) ? r[i] = n.slice() : r[i] = n
                }
                ;
                for (let e = 0, t = arguments.length; e < t; e++)
                    arguments[e] && L(arguments[e], n);
                return r
            },
            extend: (e, t, r, {allOwnKeys: n}={}) => (L(t, (t, n) => {
                r && S(t) ? e[n] = f(t, r) : e[n] = t
            }
            , {
                allOwnKeys: n
            }),
            e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e),
            inherits: (e, t, r, n) => {
                e.prototype = Object.create(t.prototype, n),
                e.prototype.constructor = e,
                Object.defineProperty(e, "super", {
                    value: t.prototype
                }),
                r && Object.assign(e.prototype, r)
            }
            ,
            toFlatObject: (e, t, r, n) => {
                let o, i, s;
                let a = {};
                if (t = t || {},
                null == e)
                    return t;
                do {
                    for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                        s = o[i],
                        (!n || n(s, e, t)) && !a[s] && (t[s] = e[s],
                        a[s] = !0);
                    e = !1 !== r && m(e)
                } while (e && (!r || r(e, t)) && e !== Object.prototype);
                return t
            }
            ,
            kindOf: g,
            kindOfTest: b,
            endsWith: (e, t, r) => {
                e = String(e),
                (void 0 === r || r > e.length) && (r = e.length),
                r -= t.length;
                let n = e.indexOf(t, r);
                return -1 !== n && n === r
            }
            ,
            toArray: e => {
                if (!e)
                    return null;
                if (w(e))
                    return e;
                let t = e.length;
                if (!O(t))
                    return null;
                let r = Array(t);
                for (; t-- > 0; )
                    r[t] = e[t];
                return r
            }
            ,
            forEachEntry: (e, t) => {
                let r;
                let n = (e && e[Symbol.iterator]).call(e);
                for (; (r = n.next()) && !r.done; ) {
                    let n = r.value;
                    t.call(e, n[0], n[1])
                }
            }
            ,
            matchAll: (e, t) => {
                let r;
                let n = [];
                for (; null !== (r = e.exec(t)); )
                    n.push(r);
                return n
            }
            ,
            isHTMLForm: B,
            hasOwnProperty: q,
            hasOwnProp: q,
            reduceDescriptors: $,
            freezeMethods: e => {
                $(e, (t, r) => {
                    if (S(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                        return !1;
                    if (S(e[r])) {
                        if (t.enumerable = !1,
                        "writable"in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + r + "'")
                        }
                        )
                    }
                }
                )
            }
            ,
            toObjectSet: (e, t) => {
                let r = {};
                return (e => {
                    e.forEach(e => {
                        r[e] = !0
                    }
                    )
                }
                )(w(e) ? e : String(e).split(t)),
                r
            }
            ,
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: () => {}
            ,
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
            findKey: U,
            global: I,
            isContextDefined: F,
            ALPHABET: K,
            generateString: (e=16, t=K.ALPHA_DIGIT) => {
                let r = ""
                  , {length: n} = t;
                for (; e--; )
                    r += t[Math.random() * n | 0];
                return r
            }
            ,
            isSpecCompliantForm: function(e) {
                return !!(e && S(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e => {
                let t = Array(10)
                  , r = (e, n) => {
                    if (R(e)) {
                        if (t.indexOf(e) >= 0)
                            return;
                        if (!("toJSON"in e)) {
                            t[n] = e;
                            let o = w(e) ? [] : {};
                            return L(e, (e, t) => {
                                let i = r(e, n + 1);
                                v(i) || (o[t] = i)
                            }
                            ),
                            t[n] = void 0,
                            o
                        }
                    }
                    return e
                }
                ;
                return r(e, 0)
            }
            ,
            isAsyncFn: V,
            isThenable: e => e && (R(e) || S(e)) && S(e.then) && S(e.catch),
            setImmediate: J,
            asap: Y
        };
        function X(e, t, r, n, o) {
            Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack,
            this.message = e,
            this.name = "AxiosError",
            t && (this.code = t),
            r && (this.config = r),
            n && (this.request = n),
            o && (this.response = o,
            this.status = o.status ? o.status : null)
        }
        Q.inherits(X, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: Q.toJSONObject(this.config),
                    code: this.code,
                    status: this.status
                }
            }
        });
        let Z = X.prototype
          , ee = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
            ee[e] = {
                value: e
            }
        }
        ),
        Object.defineProperties(X, ee),
        Object.defineProperty(Z, "isAxiosError", {
            value: !0
        }),
        X.from = (e, t, r, n, o, i) => {
            let s = Object.create(Z);
            return Q.toFlatObject(e, s, function(e) {
                return e !== Error.prototype
            }, e => "isAxiosError" !== e),
            X.call(s, e.message, t, r, n, o),
            s.cause = e,
            s.name = e.name,
            i && Object.assign(s, i),
            s
        }
        ;
        var et = r(9109).Buffer;
        function er(e) {
            return Q.isPlainObject(e) || Q.isArray(e)
        }
        function en(e) {
            return Q.endsWith(e, "[]") ? e.slice(0, -2) : e
        }
        function eo(e, t, r) {
            return e ? e.concat(t).map(function(e, t) {
                return e = en(e),
                !r && t ? "[" + e + "]" : e
            }).join(r ? "." : "") : t
        }
        let ei = Q.toFlatObject(Q, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        });
        var es = function(e, t, r) {
            if (!Q.isObject(e))
                throw TypeError("target must be an object");
            t = t || new FormData;
            let n = (r = Q.toFlatObject(r, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, function(e, t) {
                return !Q.isUndefined(t[e])
            })).metaTokens
              , o = r.visitor || u
              , i = r.dots
              , s = r.indexes
              , a = (r.Blob || "undefined" != typeof Blob && Blob) && Q.isSpecCompliantForm(t);
            if (!Q.isFunction(o))
                throw TypeError("visitor must be a function");
            function l(e) {
                if (null === e)
                    return "";
                if (Q.isDate(e))
                    return e.toISOString();
                if (!a && Q.isBlob(e))
                    throw new X("Blob is not supported. Use a Buffer instead.");
                return Q.isArrayBuffer(e) || Q.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : et.from(e) : e
            }
            function u(e, r, o) {
                let a = e;
                if (e && !o && "object" == typeof e) {
                    if (Q.endsWith(r, "{}"))
                        r = n ? r : r.slice(0, -2),
                        e = JSON.stringify(e);
                    else {
                        var u;
                        if (Q.isArray(e) && (u = e,
                        Q.isArray(u) && !u.some(er)) || (Q.isFileList(e) || Q.endsWith(r, "[]")) && (a = Q.toArray(e)))
                            return r = en(r),
                            a.forEach(function(e, n) {
                                Q.isUndefined(e) || null === e || t.append(!0 === s ? eo([r], n, i) : null === s ? r : r + "[]", l(e))
                            }),
                            !1
                    }
                }
                return !!er(e) || (t.append(eo(o, r, i), l(e)),
                !1)
            }
            let c = []
              , d = Object.assign(ei, {
                defaultVisitor: u,
                convertValue: l,
                isVisitable: er
            });
            if (!Q.isObject(e))
                throw TypeError("data must be an object");
            return !function e(r, n) {
                if (!Q.isUndefined(r)) {
                    if (-1 !== c.indexOf(r))
                        throw Error("Circular reference detected in " + n.join("."));
                    c.push(r),
                    Q.forEach(r, function(r, i) {
                        !0 === (!(Q.isUndefined(r) || null === r) && o.call(t, r, Q.isString(i) ? i.trim() : i, n, d)) && e(r, n ? n.concat(i) : [i])
                    }),
                    c.pop()
                }
            }(e),
            t
        };
        function ea(e) {
            let t = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                return t[e]
            })
        }
        function el(e, t) {
            this._pairs = [],
            e && es(e, this, t)
        }
        let eu = el.prototype;
        function ec(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        function ed(e, t, r) {
            let n;
            if (!t)
                return e;
            let o = r && r.encode || ec
              , i = r && r.serialize;
            if (n = i ? i(t, r) : Q.isURLSearchParams(t) ? t.toString() : new el(t,r).toString(o)) {
                let t = e.indexOf("#");
                -1 !== t && (e = e.slice(0, t)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + n
            }
            return e
        }
        eu.append = function(e, t) {
            this._pairs.push([e, t])
        }
        ,
        eu.toString = function(e) {
            let t = e ? function(t) {
                return e.call(this, t, ea)
            }
            : ea;
            return this._pairs.map(function(e) {
                return t(e[0]) + "=" + t(e[1])
            }, "").join("&")
        }
        ;
        class ef {
            constructor() {
                this.handlers = []
            }
            use(e, t, r) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!r && r.synchronous,
                    runWhen: r ? r.runWhen : null
                }),
                this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                Q.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        }
        var ep = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
          , eh = "undefined" != typeof URLSearchParams ? URLSearchParams : el
          , em = "undefined" != typeof FormData ? FormData : null
          , eg = "undefined" != typeof Blob ? Blob : null;
        let eb = "undefined" != typeof window && "undefined" != typeof document
          , ey = "object" == typeof navigator && navigator || void 0
          , ew = eb && (!ey || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(ey.product))
          , ev = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
          , ex = eb && window.location.href || "http://localhost";
        var eE = {
            ...d,
            isBrowser: !0,
            classes: {
                URLSearchParams: eh,
                FormData: em,
                Blob: eg
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }
          , eS = function(e) {
            if (Q.isFormData(e) && Q.isFunction(e.entries)) {
                let t = {};
                return Q.forEachEntry(e, (e, r) => {
                    !function e(t, r, n, o) {
                        let i = t[o++];
                        if ("__proto__" === i)
                            return !0;
                        let s = Number.isFinite(+i)
                          , a = o >= t.length;
                        return (i = !i && Q.isArray(n) ? n.length : i,
                        a) ? Q.hasOwnProp(n, i) ? n[i] = [n[i], r] : n[i] = r : (n[i] && Q.isObject(n[i]) || (n[i] = []),
                        e(t, r, n[i], o) && Q.isArray(n[i]) && (n[i] = function(e) {
                            let t, r;
                            let n = {}
                              , o = Object.keys(e)
                              , i = o.length;
                            for (t = 0; t < i; t++)
                                n[r = o[t]] = e[r];
                            return n
                        }(n[i]))),
                        !s
                    }(Q.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }
                ),
                t
            }
            return null
        };
        let eO = {
            transitional: ep,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r;
                let n = t.getContentType() || ""
                  , o = n.indexOf("application/json") > -1
                  , i = Q.isObject(e);
                if (i && Q.isHTMLForm(e) && (e = new FormData(e)),
                Q.isFormData(e))
                    return o ? JSON.stringify(eS(e)) : e;
                if (Q.isArrayBuffer(e) || Q.isBuffer(e) || Q.isStream(e) || Q.isFile(e) || Q.isBlob(e) || Q.isReadableStream(e))
                    return e;
                if (Q.isArrayBufferView(e))
                    return e.buffer;
                if (Q.isURLSearchParams(e))
                    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                    e.toString();
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                        var s, a;
                        return (s = e,
                        a = this.formSerializer,
                        es(s, new eE.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, r, n) {
                                return eE.isNode && Q.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                !1) : n.defaultVisitor.apply(this, arguments)
                            }
                        }, a))).toString()
                    }
                    if ((r = Q.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return es(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return i || o ? (t.setContentType("application/json", !1),
                function(e, t, r) {
                    if (Q.isString(e))
                        try {
                            return (0,
                            JSON.parse)(e),
                            Q.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name)
                                throw e
                        }
                    return (0,
                    JSON.stringify)(e)
                }(e)) : e
            }
            ],
            transformResponse: [function(e) {
                let t = this.transitional || eO.transitional
                  , r = t && t.forcedJSONParsing
                  , n = "json" === this.responseType;
                if (Q.isResponse(e) || Q.isReadableStream(e))
                    return e;
                if (e && Q.isString(e) && (r && !this.responseType || n)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (!r && n) {
                            if ("SyntaxError" === e.name)
                                throw X.from(e, X.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: eE.classes.FormData,
                Blob: eE.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        Q.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
            eO.headers[e] = {}
        }
        );
        let eR = Q.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var e_ = e => {
            let t, r, n;
            let o = {};
            return e && e.split("\n").forEach(function(e) {
                n = e.indexOf(":"),
                t = e.substring(0, n).trim().toLowerCase(),
                r = e.substring(n + 1).trim(),
                !t || o[t] && eR[t] || ("set-cookie" === t ? o[t] ? o[t].push(r) : o[t] = [r] : o[t] = o[t] ? o[t] + ", " + r : r)
            }),
            o
        }
        ;
        let ej = Symbol("internals");
        function eP(e) {
            return e && String(e).trim().toLowerCase()
        }
        function eC(e) {
            return !1 === e || null == e ? e : Q.isArray(e) ? e.map(eC) : String(e)
        }
        let ek = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
        function eN(e, t, r, n, o) {
            if (Q.isFunction(n))
                return n.call(this, t, r);
            if (o && (t = r),
            Q.isString(t)) {
                if (Q.isString(n))
                    return -1 !== t.indexOf(n);
                if (Q.isRegExp(n))
                    return n.test(t)
            }
        }
        class eT {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, r) {
                let n = this;
                function o(e, t, r) {
                    let o = eP(t);
                    if (!o)
                        throw Error("header name must be a non-empty string");
                    let i = Q.findKey(n, o);
                    i && void 0 !== n[i] && !0 !== r && (void 0 !== r || !1 === n[i]) || (n[i || t] = eC(e))
                }
                let i = (e, t) => Q.forEach(e, (e, r) => o(e, r, t));
                if (Q.isPlainObject(e) || e instanceof this.constructor)
                    i(e, t);
                else if (Q.isString(e) && (e = e.trim()) && !ek(e))
                    i(e_(e), t);
                else if (Q.isHeaders(e))
                    for (let[t,n] of e.entries())
                        o(n, t, r);
                else
                    null != e && o(t, e, r);
                return this
            }
            get(e, t) {
                if (e = eP(e)) {
                    let r = Q.findKey(this, e);
                    if (r) {
                        let e = this[r];
                        if (!t)
                            return e;
                        if (!0 === t)
                            return function(e) {
                                let t;
                                let r = Object.create(null)
                                  , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; t = n.exec(e); )
                                    r[t[1]] = t[2];
                                return r
                            }(e);
                        if (Q.isFunction(t))
                            return t.call(this, e, r);
                        if (Q.isRegExp(t))
                            return t.exec(e);
                        throw TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = eP(e)) {
                    let r = Q.findKey(this, e);
                    return !!(r && void 0 !== this[r] && (!t || eN(this, this[r], r, t)))
                }
                return !1
            }
            delete(e, t) {
                let r = this
                  , n = !1;
                function o(e) {
                    if (e = eP(e)) {
                        let o = Q.findKey(r, e);
                        o && (!t || eN(r, r[o], o, t)) && (delete r[o],
                        n = !0)
                    }
                }
                return Q.isArray(e) ? e.forEach(o) : o(e),
                n
            }
            clear(e) {
                let t = Object.keys(this)
                  , r = t.length
                  , n = !1;
                for (; r--; ) {
                    let o = t[r];
                    (!e || eN(this, this[o], o, e, !0)) && (delete this[o],
                    n = !0)
                }
                return n
            }
            normalize(e) {
                let t = this
                  , r = {};
                return Q.forEach(this, (n, o) => {
                    let i = Q.findKey(r, o);
                    if (i) {
                        t[i] = eC(n),
                        delete t[o];
                        return
                    }
                    let s = e ? o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(o).trim();
                    s !== o && delete t[o],
                    t[s] = eC(n),
                    r[s] = !0
                }
                ),
                this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                let t = Object.create(null);
                return Q.forEach(this, (r, n) => {
                    null != r && !1 !== r && (t[n] = e && Q.isArray(r) ? r.join(", ") : r)
                }
                ),
                t
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]()
            }
            toString() {
                return Object.entries(this.toJSON()).map( ([e,t]) => e + ": " + t).join("\n")
            }
            get[Symbol.toStringTag]() {
                return "AxiosHeaders"
            }
            static from(e) {
                return e instanceof this ? e : new this(e)
            }
            static concat(e, ...t) {
                let r = new this(e);
                return t.forEach(e => r.set(e)),
                r
            }
            static accessor(e) {
                let t = (this[ej] = this[ej] = {
                    accessors: {}
                }).accessors
                  , r = this.prototype;
                function n(e) {
                    let n = eP(e);
                    t[n] || (!function(e, t) {
                        let r = Q.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(n => {
                            Object.defineProperty(e, n + r, {
                                value: function(e, r, o) {
                                    return this[n].call(this, t, e, r, o)
                                },
                                configurable: !0
                            })
                        }
                        )
                    }(r, e),
                    t[n] = !0)
                }
                return Q.isArray(e) ? e.forEach(n) : n(e),
                this
            }
        }
        function eA(e, t) {
            let r = this || eO
              , n = t || r
              , o = eT.from(n.headers)
              , i = n.data;
            return Q.forEach(e, function(e) {
                i = e.call(r, i, o.normalize(), t ? t.status : void 0)
            }),
            o.normalize(),
            i
        }
        function eM(e) {
            return !!(e && e.__CANCEL__)
        }
        function ez(e, t, r) {
            X.call(this, null == e ? "canceled" : e, X.ERR_CANCELED, t, r),
            this.name = "CanceledError"
        }
        function eL(e, t, r) {
            let n = r.config.validateStatus;
            !r.status || !n || n(r.status) ? e(r) : t(new X("Request failed with status code " + r.status,[X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
        }
        eT.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        Q.reduceDescriptors(eT.prototype, ({value: e}, t) => {
            let r = t[0].toUpperCase() + t.slice(1);
            return {
                get: () => e,
                set(e) {
                    this[r] = e
                }
            }
        }
        ),
        Q.freezeMethods(eT),
        Q.inherits(ez, X, {
            __CANCEL__: !0
        });
        var eU = function(e, t) {
            let r;
            let n = Array(e = e || 10)
              , o = Array(e)
              , i = 0
              , s = 0;
            return t = void 0 !== t ? t : 1e3,
            function(a) {
                let l = Date.now()
                  , u = o[s];
                r || (r = l),
                n[i] = a,
                o[i] = l;
                let c = s
                  , d = 0;
                for (; c !== i; )
                    d += n[c++],
                    c %= e;
                if ((i = (i + 1) % e) === s && (s = (s + 1) % e),
                l - r < t)
                    return;
                let f = u && l - u;
                return f ? Math.round(1e3 * d / f) : void 0
            }
        }
          , eI = function(e, t) {
            let r, n, o = 0, i = 1e3 / t, s = (t, i=Date.now()) => {
                o = i,
                r = null,
                n && (clearTimeout(n),
                n = null),
                e.apply(null, t)
            }
            ;
            return [ (...e) => {
                let t = Date.now()
                  , a = t - o;
                a >= i ? s(e, t) : (r = e,
                n || (n = setTimeout( () => {
                    n = null,
                    s(r)
                }
                , i - a)))
            }
            , () => r && s(r)]
        };
        let eF = (e, t, r=3) => {
            let n = 0
              , o = eU(50, 250);
            return eI(r => {
                let i = r.loaded
                  , s = r.lengthComputable ? r.total : void 0
                  , a = i - n
                  , l = o(a);
                n = i,
                e({
                    loaded: i,
                    total: s,
                    progress: s ? i / s : void 0,
                    bytes: a,
                    rate: l || void 0,
                    estimated: l && s && i <= s ? (s - i) / l : void 0,
                    event: r,
                    lengthComputable: null != s,
                    [t ? "download" : "upload"]: !0
                })
            }
            , r)
        }
          , eD = (e, t) => {
            let r = null != e;
            return [n => t[0]({
                lengthComputable: r,
                total: e,
                loaded: n
            }), t[1]]
        }
          , eB = e => (...t) => Q.asap( () => e(...t));
        var eq = eE.hasStandardBrowserEnv ? function() {
            let e;
            let t = eE.navigator && /(msie|trident)/i.test(eE.navigator.userAgent)
              , r = document.createElement("a");
            function n(e) {
                let n = e;
                return t && (r.setAttribute("href", n),
                n = r.href),
                r.setAttribute("href", n),
                {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                }
            }
            return e = n(window.location.href),
            function(t) {
                let r = Q.isString(t) ? n(t) : t;
                return r.protocol === e.protocol && r.host === e.host
            }
        }() : function() {
            return !0
        }
          , eW = eE.hasStandardBrowserEnv ? {
            write(e, t, r, n, o, i) {
                let s = [e + "=" + encodeURIComponent(t)];
                Q.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                Q.isString(n) && s.push("path=" + n),
                Q.isString(o) && s.push("domain=" + o),
                !0 === i && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read(e) {
                let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };
        function e$(e, t) {
            return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
        }
        let eG = e => e instanceof eT ? {
            ...e
        } : e;
        function eH(e, t) {
            t = t || {};
            let r = {};
            function n(e, t, r) {
                return Q.isPlainObject(e) && Q.isPlainObject(t) ? Q.merge.call({
                    caseless: r
                }, e, t) : Q.isPlainObject(t) ? Q.merge({}, t) : Q.isArray(t) ? t.slice() : t
            }
            function o(e, t, r) {
                return Q.isUndefined(t) ? Q.isUndefined(e) ? void 0 : n(void 0, e, r) : n(e, t, r)
            }
            function i(e, t) {
                if (!Q.isUndefined(t))
                    return n(void 0, t)
            }
            function s(e, t) {
                return Q.isUndefined(t) ? Q.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
            }
            function a(r, o, i) {
                return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0
            }
            let l = {
                url: i,
                method: i,
                data: i,
                baseURL: s,
                transformRequest: s,
                transformResponse: s,
                paramsSerializer: s,
                timeout: s,
                timeoutMessage: s,
                withCredentials: s,
                withXSRFToken: s,
                adapter: s,
                responseType: s,
                xsrfCookieName: s,
                xsrfHeaderName: s,
                onUploadProgress: s,
                onDownloadProgress: s,
                decompress: s,
                maxContentLength: s,
                maxBodyLength: s,
                beforeRedirect: s,
                transport: s,
                httpAgent: s,
                httpsAgent: s,
                cancelToken: s,
                socketPath: s,
                responseEncoding: s,
                validateStatus: a,
                headers: (e, t) => o(eG(e), eG(t), !0)
            };
            return Q.forEach(Object.keys(Object.assign({}, e, t)), function(n) {
                let i = l[n] || o
                  , s = i(e[n], t[n], n);
                Q.isUndefined(s) && i !== a || (r[n] = s)
            }),
            r
        }
        var eK = e => {
            let t;
            let r = eH({}, e)
              , {data: n, withXSRFToken: o, xsrfHeaderName: i, xsrfCookieName: s, headers: a, auth: l} = r;
            if (r.headers = a = eT.from(a),
            r.url = ed(e$(r.baseURL, r.url), e.params, e.paramsSerializer),
            l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))),
            Q.isFormData(n)) {
                if (eE.hasStandardBrowserEnv || eE.hasStandardBrowserWebWorkerEnv)
                    a.setContentType(void 0);
                else if (!1 !== (t = a.getContentType())) {
                    let[e,...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                    a.setContentType([e || "multipart/form-data", ...r].join("; "))
                }
            }
            if (eE.hasStandardBrowserEnv && (o && Q.isFunction(o) && (o = o(r)),
            o || !1 !== o && eq(r.url))) {
                let e = i && s && eW.read(s);
                e && a.set(i, e)
            }
            return r
        }
          , eV = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                let n, o, i, s, a;
                let l = eK(e)
                  , u = l.data
                  , c = eT.from(l.headers).normalize()
                  , {responseType: d, onUploadProgress: f, onDownloadProgress: p} = l;
                function h() {
                    s && s(),
                    a && a(),
                    l.cancelToken && l.cancelToken.unsubscribe(n),
                    l.signal && l.signal.removeEventListener("abort", n)
                }
                let m = new XMLHttpRequest;
                function g() {
                    if (!m)
                        return;
                    let n = eT.from("getAllResponseHeaders"in m && m.getAllResponseHeaders());
                    eL(function(e) {
                        t(e),
                        h()
                    }, function(e) {
                        r(e),
                        h()
                    }, {
                        data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: n,
                        config: e,
                        request: m
                    }),
                    m = null
                }
                m.open(l.method.toUpperCase(), l.url, !0),
                m.timeout = l.timeout,
                "onloadend"in m ? m.onloadend = g : m.onreadystatechange = function() {
                    m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
                }
                ,
                m.onabort = function() {
                    m && (r(new X("Request aborted",X.ECONNABORTED,e,m)),
                    m = null)
                }
                ,
                m.onerror = function() {
                    r(new X("Network Error",X.ERR_NETWORK,e,m)),
                    m = null
                }
                ,
                m.ontimeout = function() {
                    let t = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded"
                      , n = l.transitional || ep;
                    l.timeoutErrorMessage && (t = l.timeoutErrorMessage),
                    r(new X(t,n.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,e,m)),
                    m = null
                }
                ,
                void 0 === u && c.setContentType(null),
                "setRequestHeader"in m && Q.forEach(c.toJSON(), function(e, t) {
                    m.setRequestHeader(t, e)
                }),
                Q.isUndefined(l.withCredentials) || (m.withCredentials = !!l.withCredentials),
                d && "json" !== d && (m.responseType = l.responseType),
                p && ([i,a] = eF(p, !0),
                m.addEventListener("progress", i)),
                f && m.upload && ([o,s] = eF(f),
                m.upload.addEventListener("progress", o),
                m.upload.addEventListener("loadend", s)),
                (l.cancelToken || l.signal) && (n = t => {
                    m && (r(!t || t.type ? new ez(null,e,m) : t),
                    m.abort(),
                    m = null)
                }
                ,
                l.cancelToken && l.cancelToken.subscribe(n),
                l.signal && (l.signal.aborted ? n() : l.signal.addEventListener("abort", n)));
                let b = function(e) {
                    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(l.url);
                if (b && -1 === eE.protocols.indexOf(b)) {
                    r(new X("Unsupported protocol " + b + ":",X.ERR_BAD_REQUEST,e));
                    return
                }
                m.send(u || null)
            }
            )
        }
          , eJ = (e, t) => {
            let {length: r} = e = e ? e.filter(Boolean) : [];
            if (t || r) {
                let r, n = new AbortController, o = function(e) {
                    if (!r) {
                        r = !0,
                        s();
                        let t = e instanceof Error ? e : this.reason;
                        n.abort(t instanceof X ? t : new ez(t instanceof Error ? t.message : t))
                    }
                }, i = t && setTimeout( () => {
                    i = null,
                    o(new X(`timeout ${t} of ms exceeded`,X.ETIMEDOUT))
                }
                , t), s = () => {
                    e && (i && clearTimeout(i),
                    i = null,
                    e.forEach(e => {
                        e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
                    }
                    ),
                    e = null)
                }
                ;
                e.forEach(e => e.addEventListener("abort", o));
                let {signal: a} = n;
                return a.unsubscribe = () => Q.asap(s),
                a
            }
        }
        ;
        let eY = function*(e, t) {
            let r, n = e.byteLength;
            if (!t || n < t) {
                yield e;
                return
            }
            let o = 0;
            for (; o < n; )
                r = o + t,
                yield e.slice(o, r),
                o = r
        }
          , eQ = async function*(e, t) {
            for await(let r of eX(e))
                yield*eY(r, t)
        }
          , eX = async function*(e) {
            if (e[Symbol.asyncIterator]) {
                yield*e;
                return
            }
            let t = e.getReader();
            try {
                for (; ; ) {
                    let {done: e, value: r} = await t.read();
                    if (e)
                        break;
                    yield r
                }
            } finally {
                await t.cancel()
            }
        }
          , eZ = (e, t, r, n) => {
            let o;
            let i = eQ(e, t)
              , s = 0
              , a = e => {
                !o && (o = !0,
                n && n(e))
            }
            ;
            return new ReadableStream({
                async pull(e) {
                    try {
                        let {done: t, value: n} = await i.next();
                        if (t) {
                            a(),
                            e.close();
                            return
                        }
                        let o = n.byteLength;
                        if (r) {
                            let e = s += o;
                            r(e)
                        }
                        e.enqueue(new Uint8Array(n))
                    } catch (e) {
                        throw a(e),
                        e
                    }
                },
                cancel: e => (a(e),
                i.return())
            },{
                highWaterMark: 2
            })
        }
          , e0 = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response
          , e1 = e0 && "function" == typeof ReadableStream
          , e2 = e0 && ("function" == typeof TextEncoder ? (i = new TextEncoder,
        e => i.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
          , e4 = (e, ...t) => {
            try {
                return !!e(...t)
            } catch (e) {
                return !1
            }
        }
          , e3 = e1 && e4( () => {
            let e = !1
              , t = new Request(eE.origin,{
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0,
                    "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }
        )
          , e8 = e1 && e4( () => Q.isReadableStream(new Response("").body))
          , e9 = {
            stream: e8 && (e => e.body)
        };
        e0 && (c = new Response,
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            e9[e] || (e9[e] = Q.isFunction(c[e]) ? t => t[e]() : (t, r) => {
                throw new X(`Response type '${e}' is not supported`,X.ERR_NOT_SUPPORT,r)
            }
            )
        }
        ));
        let e5 = async e => {
            if (null == e)
                return 0;
            if (Q.isBlob(e))
                return e.size;
            if (Q.isSpecCompliantForm(e)) {
                let t = new Request(eE.origin,{
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return Q.isArrayBufferView(e) || Q.isArrayBuffer(e) ? e.byteLength : (Q.isURLSearchParams(e) && (e += ""),
            Q.isString(e)) ? (await e2(e)).byteLength : void 0
        }
          , e6 = async (e, t) => {
            let r = Q.toFiniteNumber(e.getContentLength());
            return null == r ? e5(t) : r
        }
          , e7 = {
            http: null,
            xhr: eV,
            fetch: e0 && (async e => {
                let t, r, {url: n, method: o, data: i, signal: s, cancelToken: a, timeout: l, onDownloadProgress: u, onUploadProgress: c, responseType: d, headers: f, withCredentials: p="same-origin", fetchOptions: h} = eK(e);
                d = d ? (d + "").toLowerCase() : "text";
                let m = eJ([s, a && a.toAbortSignal()], l)
                  , g = m && m.unsubscribe && ( () => {
                    m.unsubscribe()
                }
                );
                try {
                    if (c && e3 && "get" !== o && "head" !== o && 0 !== (r = await e6(f, i))) {
                        let e, t = new Request(n,{
                            method: "POST",
                            body: i,
                            duplex: "half"
                        });
                        if (Q.isFormData(i) && (e = t.headers.get("content-type")) && f.setContentType(e),
                        t.body) {
                            let[e,n] = eD(r, eF(eB(c)));
                            i = eZ(t.body, 65536, e, n)
                        }
                    }
                    Q.isString(p) || (p = p ? "include" : "omit");
                    let s = "credentials"in Request.prototype;
                    t = new Request(n,{
                        ...h,
                        signal: m,
                        method: o.toUpperCase(),
                        headers: f.normalize().toJSON(),
                        body: i,
                        duplex: "half",
                        credentials: s ? p : void 0
                    });
                    let a = await fetch(t)
                      , l = e8 && ("stream" === d || "response" === d);
                    if (e8 && (u || l && g)) {
                        let e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = a[t]
                        }
                        );
                        let t = Q.toFiniteNumber(a.headers.get("content-length"))
                          , [r,n] = u && eD(t, eF(eB(u), !0)) || [];
                        a = new Response(eZ(a.body, 65536, r, () => {
                            n && n(),
                            g && g()
                        }
                        ),e)
                    }
                    d = d || "text";
                    let b = await e9[Q.findKey(e9, d) || "text"](a, e);
                    return !l && g && g(),
                    await new Promise( (r, n) => {
                        eL(r, n, {
                            data: b,
                            headers: eT.from(a.headers),
                            status: a.status,
                            statusText: a.statusText,
                            config: e,
                            request: t
                        })
                    }
                    )
                } catch (r) {
                    if (g && g(),
                    r && "TypeError" === r.name && /fetch/i.test(r.message))
                        throw Object.assign(new X("Network Error",X.ERR_NETWORK,e,t), {
                            cause: r.cause || r
                        });
                    throw X.from(r, r && r.code, e, t)
                }
            }
            )
        };
        Q.forEach(e7, (e, t) => {
            if (e) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t
                    })
                } catch (e) {}
                Object.defineProperty(e, "adapterName", {
                    value: t
                })
            }
        }
        );
        let te = e => `- ${e}`
          , tt = e => Q.isFunction(e) || null === e || !1 === e;
        var tr = e => {
            let t, r;
            let {length: n} = e = Q.isArray(e) ? e : [e]
              , o = {};
            for (let i = 0; i < n; i++) {
                let n;
                if (r = t = e[i],
                !tt(t) && void 0 === (r = e7[(n = String(t)).toLowerCase()]))
                    throw new X(`Unknown adapter '${n}'`);
                if (r)
                    break;
                o[n || "#" + i] = r
            }
            if (!r) {
                let e = Object.entries(o).map( ([e,t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                throw new X("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(te).join("\n") : " " + te(e[0]) : "as no adapter specified"),"ERR_NOT_SUPPORT")
            }
            return r
        }
        ;
        function tn(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
                throw new ez(null,e)
        }
        function to(e) {
            return tn(e),
            e.headers = eT.from(e.headers),
            e.data = eA.call(e, e.transformRequest),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
            tr(e.adapter || eO.adapter)(e).then(function(t) {
                return tn(e),
                t.data = eA.call(e, e.transformResponse, t),
                t.headers = eT.from(t.headers),
                t
            }, function(t) {
                return !eM(t) && (tn(e),
                t && t.response && (t.response.data = eA.call(e, e.transformResponse, t.response),
                t.response.headers = eT.from(t.response.headers))),
                Promise.reject(t)
            })
        }
        let ti = "1.7.7"
          , ts = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
            ts[e] = function(r) {
                return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        );
        let ta = {};
        ts.transitional = function(e, t, r) {
            function n(e, t) {
                return "[Axios v" + ti + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
            }
            return (r, o, i) => {
                if (!1 === e)
                    throw new X(n(o, " has been removed" + (t ? " in " + t : "")),X.ERR_DEPRECATED);
                return t && !ta[o] && (ta[o] = !0,
                console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(r, o, i)
            }
        }
        ;
        var tl = {
            assertOptions: function(e, t, r) {
                if ("object" != typeof e)
                    throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);
                let n = Object.keys(e)
                  , o = n.length;
                for (; o-- > 0; ) {
                    let i = n[o]
                      , s = t[i];
                    if (s) {
                        let t = e[i]
                          , r = void 0 === t || s(t, i, e);
                        if (!0 !== r)
                            throw new X("option " + i + " must be " + r,X.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== r)
                        throw new X("Unknown option " + i,X.ERR_BAD_OPTION)
                }
            },
            validators: ts
        };
        let tu = tl.validators;
        class tc {
            constructor(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new ef,
                    response: new ef
                }
            }
            async request(e, t) {
                try {
                    return await this._request(e, t)
                } catch (e) {
                    if (e instanceof Error) {
                        let t;
                        Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = Error();
                        let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                        try {
                            e.stack ? r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + r) : e.stack = r
                        } catch (e) {}
                    }
                    throw e
                }
            }
            _request(e, t) {
                let r, n;
                "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                let {transitional: o, paramsSerializer: i, headers: s} = t = eH(this.defaults, t);
                void 0 !== o && tl.assertOptions(o, {
                    silentJSONParsing: tu.transitional(tu.boolean),
                    forcedJSONParsing: tu.transitional(tu.boolean),
                    clarifyTimeoutError: tu.transitional(tu.boolean)
                }, !1),
                null != i && (Q.isFunction(i) ? t.paramsSerializer = {
                    serialize: i
                } : tl.assertOptions(i, {
                    encode: tu.function,
                    serialize: tu.function
                }, !0)),
                t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let a = s && Q.merge(s.common, s[t.method]);
                s && Q.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                    delete s[e]
                }
                ),
                t.headers = eT.concat(a, s);
                let l = []
                  , u = !0;
                this.interceptors.request.forEach(function(e) {
                    ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (u = u && e.synchronous,
                    l.unshift(e.fulfilled, e.rejected))
                });
                let c = [];
                this.interceptors.response.forEach(function(e) {
                    c.push(e.fulfilled, e.rejected)
                });
                let d = 0;
                if (!u) {
                    let e = [to.bind(this), void 0];
                    for (e.unshift.apply(e, l),
                    e.push.apply(e, c),
                    n = e.length,
                    r = Promise.resolve(t); d < n; )
                        r = r.then(e[d++], e[d++]);
                    return r
                }
                n = l.length;
                let f = t;
                for (d = 0; d < n; ) {
                    let e = l[d++]
                      , t = l[d++];
                    try {
                        f = e(f)
                    } catch (e) {
                        t.call(this, e);
                        break
                    }
                }
                try {
                    r = to.call(this, f)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (d = 0,
                n = c.length; d < n; )
                    r = r.then(c[d++], c[d++]);
                return r
            }
            getUri(e) {
                return ed(e$((e = eH(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
            }
        }
        Q.forEach(["delete", "get", "head", "options"], function(e) {
            tc.prototype[e] = function(t, r) {
                return this.request(eH(r || {}, {
                    method: e,
                    url: t,
                    data: (r || {}).data
                }))
            }
        }),
        Q.forEach(["post", "put", "patch"], function(e) {
            function t(t) {
                return function(r, n, o) {
                    return this.request(eH(o || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: r,
                        data: n
                    }))
                }
            }
            tc.prototype[e] = t(),
            tc.prototype[e + "Form"] = t(!0)
        });
        class td {
            constructor(e) {
                let t;
                if ("function" != typeof e)
                    throw TypeError("executor must be a function.");
                this.promise = new Promise(function(e) {
                    t = e
                }
                );
                let r = this;
                this.promise.then(e => {
                    if (!r._listeners)
                        return;
                    let t = r._listeners.length;
                    for (; t-- > 0; )
                        r._listeners[t](e);
                    r._listeners = null
                }
                ),
                this.promise.then = e => {
                    let t;
                    let n = new Promise(e => {
                        r.subscribe(e),
                        t = e
                    }
                    ).then(e);
                    return n.cancel = function() {
                        r.unsubscribe(t)
                    }
                    ,
                    n
                }
                ,
                e(function(e, n, o) {
                    r.reason || (r.reason = new ez(e,n,o),
                    t(r.reason))
                })
            }
            throwIfRequested() {
                if (this.reason)
                    throw this.reason
            }
            subscribe(e) {
                if (this.reason) {
                    e(this.reason);
                    return
                }
                this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            unsubscribe(e) {
                if (!this._listeners)
                    return;
                let t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1)
            }
            toAbortSignal() {
                let e = new AbortController
                  , t = t => {
                    e.abort(t)
                }
                ;
                return this.subscribe(t),
                e.signal.unsubscribe = () => this.unsubscribe(t),
                e.signal
            }
            static source() {
                let e;
                return {
                    token: new td(function(t) {
                        e = t
                    }
                    ),
                    cancel: e
                }
            }
        }
        let tf = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(tf).forEach( ([e,t]) => {
            tf[t] = e
        }
        );
        let tp = function e(t) {
            let r = new tc(t)
              , n = f(tc.prototype.request, r);
            return Q.extend(n, tc.prototype, r, {
                allOwnKeys: !0
            }),
            Q.extend(n, r, null, {
                allOwnKeys: !0
            }),
            n.create = function(r) {
                return e(eH(t, r))
            }
            ,
            n
        }(eO);
        tp.Axios = tc,
        tp.CanceledError = ez,
        tp.CancelToken = td,
        tp.isCancel = eM,
        tp.VERSION = ti,
        tp.toFormData = es,
        tp.AxiosError = X,
        tp.Cancel = tp.CanceledError,
        tp.all = function(e) {
            return Promise.all(e)
        }
        ,
        tp.spread = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        ,
        tp.isAxiosError = function(e) {
            return Q.isObject(e) && !0 === e.isAxiosError
        }
        ,
        tp.mergeConfig = eH,
        tp.AxiosHeaders = eT,
        tp.formToJSON = e => eS(Q.isHTMLForm(e) ? new FormData(e) : e),
        tp.getAdapter = tr,
        tp.HttpStatusCode = tf,
        tp.default = tp;
        var th = tp
    },
    90089: function(e, t, r) {
        "use strict";
        let n;
        r.d(t, {
            Db: function() {
                return E
            },
            $G: function() {
                return P
            }
        });
        var o = r(2265);
        r(71906),
        Object.create(null);
        let i = (...e) => {
            console?.warn && (f(e[0]) && (e[0] = `react-i18next:: ${e[0]}`),
            console.warn(...e))
        }
          , s = {}
          , a = (...e) => {
            f(e[0]) && s[e[0]] || (f(e[0]) && (s[e[0]] = new Date),
            i(...e))
        }
          , l = (e, t) => () => {
            if (e.isInitialized)
                t();
            else {
                let r = () => {
                    setTimeout( () => {
                        e.off("initialized", r)
                    }
                    , 0),
                    t()
                }
                ;
                e.on("initialized", r)
            }
        }
          , u = (e, t, r) => {
            e.loadNamespaces(t, l(e, r))
        }
          , c = (e, t, r, n) => {
            f(r) && (r = [r]),
            r.forEach(t => {
                0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
            }
            ),
            e.loadLanguages(t, l(e, n))
        }
          , d = (e, t, r={}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
            lng: r.lng,
            precheck: (t, n) => {
                if (r.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !n(t.isLanguageChangingTo, e))
                    return !1
            }
        }) : (a("i18n.languages were undefined or empty", t.languages),
        !0)
          , f = e => "string" == typeof e
          , p = e => "object" == typeof e && null !== e
          , h = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
          , m = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "\xa9",
            "&#169;": "\xa9",
            "&reg;": "\xae",
            "&#174;": "\xae",
            "&hellip;": "…",
            "&#8230;": "…",
            "&#x2F;": "/",
            "&#47;": "/"
        }
          , g = e => m[e]
          , b = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: e => e.replace(h, g)
        }
          , y = (e={}) => {
            b = {
                ...b,
                ...e
            }
        }
          , w = () => b
          , v = e => {
            n = e
        }
          , x = () => n
          , E = {
            type: "3rdParty",
            init(e) {
                y(e.options.react),
                v(e)
            }
        }
          , S = (0,
        o.createContext)();
        class O {
            constructor() {
                this.usedNamespaces = {}
            }
            addUsedNamespaces(e) {
                e.forEach(e => {
                    this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
                }
                )
            }
            getUsedNamespaces() {
                return Object.keys(this.usedNamespaces)
            }
        }
        let R = (e, t) => {
            let r = (0,
            o.useRef)();
            return (0,
            o.useEffect)( () => {
                r.current = t ? r.current : e
            }
            , [e, t]),
            r.current
        }
          , _ = (e, t, r, n) => e.getFixedT(t, r, n)
          , j = (e, t, r, n) => (0,
        o.useCallback)(_(e, t, r, n), [e, t, r, n])
          , P = (e, t={}) => {
            let {i18n: r} = t
              , {i18n: n, defaultNS: i} = (0,
            o.useContext)(S) || {}
              , s = r || n || x();
            if (s && !s.reportNamespaces && (s.reportNamespaces = new O),
            !s) {
                a("You will need to pass in an i18next instance by using initReactI18next");
                let e = (e, t) => f(t) ? t : p(t) && f(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
                  , t = [e, {}, !1];
                return t.t = e,
                t.i18n = {},
                t.ready = !1,
                t
            }
            s.options.react?.wait && a("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            let l = {
                ...w(),
                ...s.options.react,
                ...t
            }
              , {useSuspense: h, keyPrefix: m} = l
              , g = e || i || s.options?.defaultNS;
            g = f(g) ? [g] : g || ["translation"],
            s.reportNamespaces.addUsedNamespaces?.(g);
            let b = (s.isInitialized || s.initializedStoreOnce) && g.every(e => d(e, s, l))
              , y = j(s, t.lng || null, "fallback" === l.nsMode ? g : g[0], m)
              , v = () => y
              , E = () => _(s, t.lng || null, "fallback" === l.nsMode ? g : g[0], m)
              , [P,C] = (0,
            o.useState)(v)
              , k = g.join();
            t.lng && (k = `${t.lng}${k}`);
            let N = R(k)
              , T = (0,
            o.useRef)(!0);
            (0,
            o.useEffect)( () => {
                let {bindI18n: e, bindI18nStore: r} = l;
                T.current = !0,
                b || h || (t.lng ? c(s, t.lng, g, () => {
                    T.current && C(E)
                }
                ) : u(s, g, () => {
                    T.current && C(E)
                }
                )),
                b && N && N !== k && T.current && C(E);
                let n = () => {
                    T.current && C(E)
                }
                ;
                return e && s?.on(e, n),
                r && s?.store.on(r, n),
                () => {
                    T.current = !1,
                    s && e?.split(" ").forEach(e => s.off(e, n)),
                    r && s && r.split(" ").forEach(e => s.store.off(e, n))
                }
            }
            , [s, k]),
            (0,
            o.useEffect)( () => {
                T.current && b && C(v)
            }
            , [s, m, b]);
            let A = [P, s, b];
            if (A.t = P,
            A.i18n = s,
            A.ready = b,
            b || !b && !h)
                return A;
            throw new Promise(e => {
                t.lng ? c(s, t.lng, g, () => e()) : u(s, g, () => e())
            }
            )
        }
    },
    96164: function(e, t, r) {
        "use strict";
        r.d(t, {
            m6: function() {
                return J
            }
        });
        let n = e => {
            let t = a(e)
              , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
            return {
                getClassGroupId: e => {
                    let r = e.split("-");
                    return "" === r[0] && 1 !== r.length && r.shift(),
                    o(r, t) || s(e)
                }
                ,
                getConflictingClassGroupIds: (e, t) => {
                    let o = r[e] || [];
                    return t && n[e] ? [...o, ...n[e]] : o
                }
            }
        }
          , o = (e, t) => {
            if (0 === e.length)
                return t.classGroupId;
            let r = e[0]
              , n = t.nextPart.get(r)
              , i = n ? o(e.slice(1), n) : void 0;
            if (i)
                return i;
            if (0 === t.validators.length)
                return;
            let s = e.join("-");
            return t.validators.find( ({validator: e}) => e(s))?.classGroupId
        }
          , i = /^\[(.+)\]$/
          , s = e => {
            if (i.test(e)) {
                let t = i.exec(e)[1]
                  , r = t?.substring(0, t.indexOf(":"));
                if (r)
                    return "arbitrary.." + r
            }
        }
          , a = e => {
            let {theme: t, prefix: r} = e
              , n = {
                nextPart: new Map,
                validators: []
            };
            return d(Object.entries(e.classGroups), r).forEach( ([e,r]) => {
                l(r, n, e, t)
            }
            ),
            n
        }
          , l = (e, t, r, n) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : u(t, e)).classGroupId = r;
                    return
                }
                if ("function" == typeof e) {
                    if (c(e)) {
                        l(e(n), t, r, n);
                        return
                    }
                    t.validators.push({
                        validator: e,
                        classGroupId: r
                    });
                    return
                }
                Object.entries(e).forEach( ([e,o]) => {
                    l(o, u(t, e), r, n)
                }
                )
            }
            )
        }
          , u = (e, t) => {
            let r = e;
            return t.split("-").forEach(e => {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(e)
            }
            ),
            r
        }
          , c = e => e.isThemeGetter
          , d = (e, t) => t ? e.map( ([e,r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,r]) => [t + e, r])) : e)]) : e
          , f = e => {
            if (e < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let t = 0
              , r = new Map
              , n = new Map
              , o = (o, i) => {
                r.set(o, i),
                ++t > e && (t = 0,
                n = r,
                r = new Map)
            }
            ;
            return {
                get(e) {
                    let t = r.get(e);
                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t),
                    t) : void 0
                },
                set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t)
                }
            }
        }
          , p = e => {
            let {separator: t, experimentalParseClassName: r} = e
              , n = 1 === t.length
              , o = t[0]
              , i = t.length
              , s = e => {
                let r;
                let s = []
                  , a = 0
                  , l = 0;
                for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === a) {
                        if (c === o && (n || e.slice(u, u + i) === t)) {
                            s.push(e.slice(l, u)),
                            l = u + i;
                            continue
                        }
                        if ("/" === c) {
                            r = u;
                            continue
                        }
                    }
                    "[" === c ? a++ : "]" === c && a--
                }
                let u = 0 === s.length ? e : e.substring(l)
                  , c = u.startsWith("!")
                  , d = c ? u.substring(1) : u;
                return {
                    modifiers: s,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: r && r > l ? r - l : void 0
                }
            }
            ;
            return r ? e => r({
                className: e,
                parseClassName: s
            }) : s
        }
          , h = e => {
            if (e.length <= 1)
                return e;
            let t = []
              , r = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...r.sort(), e),
                r = []) : r.push(e)
            }
            ),
            t.push(...r.sort()),
            t
        }
          , m = e => ({
            cache: f(e.cacheSize),
            parseClassName: p(e),
            ...n(e)
        })
          , g = /\s+/
          , b = (e, t) => {
            let {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o} = t
              , i = []
              , s = e.trim().split(g)
              , a = "";
            for (let e = s.length - 1; e >= 0; e -= 1) {
                let t = s[e]
                  , {modifiers: l, hasImportantModifier: u, baseClassName: c, maybePostfixModifierPosition: d} = r(t)
                  , f = !!d
                  , p = n(f ? c.substring(0, d) : c);
                if (!p) {
                    if (!f || !(p = n(c))) {
                        a = t + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    f = !1
                }
                let m = h(l).join(":")
                  , g = u ? m + "!" : m
                  , b = g + p;
                if (i.includes(b))
                    continue;
                i.push(b);
                let y = o(p, f);
                for (let e = 0; e < y.length; ++e) {
                    let t = y[e];
                    i.push(g + t)
                }
                a = t + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        ;
        function y() {
            let e, t, r = 0, n = "";
            for (; r < arguments.length; )
                (e = arguments[r++]) && (t = w(e)) && (n && (n += " "),
                n += t);
            return n
        }
        let w = e => {
            let t;
            if ("string" == typeof e)
                return e;
            let r = "";
            for (let n = 0; n < e.length; n++)
                e[n] && (t = w(e[n])) && (r && (r += " "),
                r += t);
            return r
        }
          , v = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
          , x = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , E = /^\d+\/\d+$/
          , S = new Set(["px", "full", "screen"])
          , O = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , R = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , _ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , P = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , C = e => N(e) || S.has(e) || E.test(e)
          , k = e => $(e, "length", G)
          , N = e => !!e && !Number.isNaN(Number(e))
          , T = e => $(e, "number", N)
          , A = e => !!e && Number.isInteger(Number(e))
          , M = e => e.endsWith("%") && N(e.slice(0, -1))
          , z = e => x.test(e)
          , L = e => O.test(e)
          , U = new Set(["length", "size", "percentage"])
          , I = e => $(e, U, H)
          , F = e => $(e, "position", H)
          , D = new Set(["image", "url"])
          , B = e => $(e, D, V)
          , q = e => $(e, "", K)
          , W = () => !0
          , $ = (e, t, r) => {
            let n = x.exec(e);
            return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
        }
          , G = e => R.test(e) && !_.test(e)
          , H = () => !1
          , K = e => j.test(e)
          , V = e => P.test(e)
          , J = function(e, ...t) {
            let r, n, o;
            let i = function(a) {
                return n = (r = m(t.reduce( (e, t) => t(e), e()))).cache.get,
                o = r.cache.set,
                i = s,
                s(a)
            };
            function s(e) {
                let t = n(e);
                if (t)
                    return t;
                let i = b(e, r);
                return o(e, i),
                i
            }
            return function() {
                return i(y.apply(null, arguments))
            }
        }( () => {
            let e = v("colors")
              , t = v("spacing")
              , r = v("blur")
              , n = v("brightness")
              , o = v("borderColor")
              , i = v("borderRadius")
              , s = v("borderSpacing")
              , a = v("borderWidth")
              , l = v("contrast")
              , u = v("grayscale")
              , c = v("hueRotate")
              , d = v("invert")
              , f = v("gap")
              , p = v("gradientColorStops")
              , h = v("gradientColorStopPositions")
              , m = v("inset")
              , g = v("margin")
              , b = v("opacity")
              , y = v("padding")
              , w = v("saturate")
              , x = v("scale")
              , E = v("sepia")
              , S = v("skew")
              , O = v("space")
              , R = v("translate")
              , _ = () => ["auto", "contain", "none"]
              , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , P = () => ["auto", z, t]
              , U = () => [z, t]
              , D = () => ["", C, k]
              , $ = () => ["auto", N, z]
              , G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , H = () => ["solid", "dashed", "dotted", "double", "none"]
              , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , J = () => ["", "0", z]
              , Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , Q = () => [N, z];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [W],
                    spacing: [C, k],
                    blur: ["none", "", L, z],
                    brightness: Q(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", L, z],
                    borderSpacing: U(),
                    borderWidth: D(),
                    contrast: Q(),
                    grayscale: J(),
                    hueRotate: Q(),
                    invert: J(),
                    gap: U(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [M, k],
                    inset: P(),
                    margin: P(),
                    opacity: Q(),
                    padding: U(),
                    saturate: Q(),
                    scale: Q(),
                    sepia: J(),
                    skew: Q(),
                    space: U(),
                    translate: U()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", z]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [L]
                    }],
                    "break-after": [{
                        "break-after": Y()
                    }],
                    "break-before": [{
                        "break-before": Y()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...G(), z]
                    }],
                    overflow: [{
                        overflow: j()
                    }],
                    "overflow-x": [{
                        "overflow-x": j()
                    }],
                    "overflow-y": [{
                        "overflow-y": j()
                    }],
                    overscroll: [{
                        overscroll: _()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": _()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": _()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [m]
                    }],
                    "inset-x": [{
                        "inset-x": [m]
                    }],
                    "inset-y": [{
                        "inset-y": [m]
                    }],
                    start: [{
                        start: [m]
                    }],
                    end: [{
                        end: [m]
                    }],
                    top: [{
                        top: [m]
                    }],
                    right: [{
                        right: [m]
                    }],
                    bottom: [{
                        bottom: [m]
                    }],
                    left: [{
                        left: [m]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", A, z]
                    }],
                    basis: [{
                        basis: P()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", z]
                    }],
                    grow: [{
                        grow: J()
                    }],
                    shrink: [{
                        shrink: J()
                    }],
                    order: [{
                        order: ["first", "last", "none", A, z]
                    }],
                    "grid-cols": [{
                        "grid-cols": [W]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", A, z]
                        }, z]
                    }],
                    "col-start": [{
                        "col-start": $()
                    }],
                    "col-end": [{
                        "col-end": $()
                    }],
                    "grid-rows": [{
                        "grid-rows": [W]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [A, z]
                        }, z]
                    }],
                    "row-start": [{
                        "row-start": $()
                    }],
                    "row-end": [{
                        "row-end": $()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", z]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", z]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...V()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...V(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...V(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [y]
                    }],
                    px: [{
                        px: [y]
                    }],
                    py: [{
                        py: [y]
                    }],
                    ps: [{
                        ps: [y]
                    }],
                    pe: [{
                        pe: [y]
                    }],
                    pt: [{
                        pt: [y]
                    }],
                    pr: [{
                        pr: [y]
                    }],
                    pb: [{
                        pb: [y]
                    }],
                    pl: [{
                        pl: [y]
                    }],
                    m: [{
                        m: [g]
                    }],
                    mx: [{
                        mx: [g]
                    }],
                    my: [{
                        my: [g]
                    }],
                    ms: [{
                        ms: [g]
                    }],
                    me: [{
                        me: [g]
                    }],
                    mt: [{
                        mt: [g]
                    }],
                    mr: [{
                        mr: [g]
                    }],
                    mb: [{
                        mb: [g]
                    }],
                    ml: [{
                        ml: [g]
                    }],
                    "space-x": [{
                        "space-x": [O]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [O]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t]
                    }],
                    "min-w": [{
                        "min-w": [z, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [z, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [L]
                        }, L]
                    }],
                    h: [{
                        h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [z, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", L, k]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", T]
                    }],
                    "font-family": [{
                        font: [W]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", N, T]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C, z]
                    }],
                    "list-image": [{
                        "list-image": ["none", z]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", z]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [b]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [b]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...H(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", C, k]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", C, z]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: U()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", z]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [b]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...G(), F]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", I]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, B]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [h]
                    }],
                    "gradient-via-pos": [{
                        via: [h]
                    }],
                    "gradient-to-pos": [{
                        to: [h]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [b]
                    }],
                    "border-style": [{
                        border: [...H(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [b]
                    }],
                    "divide-style": [{
                        divide: H()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-s": [{
                        "border-s": [o]
                    }],
                    "border-color-e": [{
                        "border-e": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: ["", ...H()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [C, z]
                    }],
                    "outline-w": [{
                        outline: [C, k]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: D()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [b]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [C, k]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", L, q]
                    }],
                    "shadow-color": [{
                        shadow: [W]
                    }],
                    opacity: [{
                        opacity: [b]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...K(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": K()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [l]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", L, z]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [c]
                    }],
                    invert: [{
                        invert: [d]
                    }],
                    saturate: [{
                        saturate: [w]
                    }],
                    sepia: [{
                        sepia: [E]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [l]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [c]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [d]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [b]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [w]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [E]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [s]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [s]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [s]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
                    }],
                    duration: [{
                        duration: Q()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", z]
                    }],
                    delay: [{
                        delay: Q()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", z]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [x]
                    }],
                    "scale-x": [{
                        "scale-x": [x]
                    }],
                    "scale-y": [{
                        "scale-y": [x]
                    }],
                    rotate: [{
                        rotate: [A, z]
                    }],
                    "translate-x": [{
                        "translate-x": [R]
                    }],
                    "translate-y": [{
                        "translate-y": [R]
                    }],
                    "skew-x": [{
                        "skew-x": [S]
                    }],
                    "skew-y": [{
                        "skew-y": [S]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": U()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": U()
                    }],
                    "scroll-my": [{
                        "scroll-my": U()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": U()
                    }],
                    "scroll-me": [{
                        "scroll-me": U()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": U()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": U()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": U()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": U()
                    }],
                    "scroll-p": [{
                        "scroll-p": U()
                    }],
                    "scroll-px": [{
                        "scroll-px": U()
                    }],
                    "scroll-py": [{
                        "scroll-py": U()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": U()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": U()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": U()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": U()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": U()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": U()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", z]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [C, k, T]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        )
    }
}]);
