"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[944], {
    2459: function(t, e, r) {
        r.d(e, {
            A: function() {
                return o
            },
            z: function() {
                return u
            }
        });
        var s = r(56298)
          , i = r(69948)
          , n = r(30924)
          , a = r(43494)
          , o = class extends a.F {
            #t;
            #e;
            #r;
            #s;
            #i;
            #n;
            constructor(t) {
                super(),
                this.#n = !1,
                this.#i = t.defaultOptions,
                this.setOptions(t.options),
                this.observers = [],
                this.#r = t.cache,
                this.queryKey = t.queryKey,
                this.queryHash = t.queryHash,
                this.#t = function(t) {
                    let e = "function" == typeof t.initialData ? t.initialData() : t.initialData
                      , r = void 0 !== e
                      , s = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                    return {
                        data: e,
                        dataUpdateCount: 0,
                        dataUpdatedAt: r ? s ?? Date.now() : 0,
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
                return this.#s?.promise
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
                s.oE)(this.state.data, t, this.options);
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
                let e = this.#s?.promise;
                return this.#s?.cancel(t),
                e ? e.then(s.ZT).catch(s.ZT) : Promise.resolve()
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
                s.Nc)(t.options.enabled, this))
            }
            isDisabled() {
                return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === s.CN || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
            }
            isStale() {
                return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data)
            }
            isStaleByTime(t=0) {
                return this.state.isInvalidated || void 0 === this.state.data || !(0,
                s.Kp)(this.state.dataUpdatedAt, t)
            }
            onFocus() {
                let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                t?.refetch({
                    cancelRefetch: !1
                }),
                this.#s?.continue()
            }
            onOnline() {
                let t = this.observers.find(t => t.shouldFetchOnReconnect());
                t?.refetch({
                    cancelRefetch: !1
                }),
                this.#s?.continue()
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
                this.observers.length || (this.#s && (this.#n ? this.#s.cancel({
                    revert: !0
                }) : this.#s.cancelRetry()),
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
                    else if (this.#s)
                        return this.#s.continueRetry(),
                        this.#s.promise
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
                        get: () => (this.#n = !0,
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
                        s.cG)(this.options, e)
                          , r = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return (i(r),
                        this.#n = !1,
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
                let o = t => {
                    (0,
                    n.DV)(t) && t.silent || this.#a({
                        type: "error",
                        error: t
                    }),
                    (0,
                    n.DV)(t) || (this.#r.config.onError?.(t, this),
                    this.#r.config.onSettled?.(this.state.data, t, this)),
                    this.scheduleGc()
                }
                ;
                return this.#s = (0,
                n.Mz)({
                    initialPromise: e?.initialPromise,
                    fn: a.fetchFn,
                    abort: r.abort.bind(r),
                    onSuccess: t => {
                        if (void 0 === t) {
                            o(Error(`${this.queryHash} data is undefined`));
                            return
                        }
                        try {
                            this.setData(t)
                        } catch (t) {
                            o(t);
                            return
                        }
                        this.#r.config.onSuccess?.(t, this),
                        this.#r.config.onSettled?.(t, this.state.error, this),
                        this.scheduleGc()
                    }
                    ,
                    onError: o,
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
                this.#s.start()
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
                            ...u(e.data, this.options),
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
                        n.DV)(r) && r.revert && this.#e)
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
        function u(t, e) {
            return {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: (0,
                n.Kw)(e.networkMode) ? "fetching" : "paused",
                ...void 0 === t && {
                    error: null,
                    status: "pending"
                }
            }
        }
    },
    40932: function(t, e, r) {
        let s;
        r.d(e, {
            a: function() {
                return E
            }
        });
        var i = r(34939)
          , n = r(69948)
          , a = r(2459)
          , o = r(49010)
          , u = r(56922)
          , c = r(56298)
          , h = class extends o.l {
            constructor(t, e) {
                super(),
                this.options = e,
                this.#o = t,
                this.#u = null,
                this.#c = (0,
                u.O)(),
                this.options.experimental_prefetchInRender || this.#c.reject(Error("experimental_prefetchInRender feature flag is not enabled")),
                this.bindMethods(),
                this.setOptions(e)
            }
            #o;
            #h = void 0;
            #l = void 0;
            #d = void 0;
            #p;
            #f;
            #c;
            #u;
            #y;
            #v;
            #m;
            #b;
            #g;
            #R;
            #C = new Set;
            bindMethods() {
                this.refetch = this.refetch.bind(this)
            }
            onSubscribe() {
                1 === this.listeners.size && (this.#h.addObserver(this),
                l(this.#h, this.options) ? this.#S() : this.updateResult(),
                this.#I())
            }
            onUnsubscribe() {
                this.hasListeners() || this.destroy()
            }
            shouldFetchOnReconnect() {
                return d(this.#h, this.options, this.options.refetchOnReconnect)
            }
            shouldFetchOnWindowFocus() {
                return d(this.#h, this.options, this.options.refetchOnWindowFocus)
            }
            destroy() {
                this.listeners = new Set,
                this.#O(),
                this.#w(),
                this.#h.removeObserver(this)
            }
            setOptions(t, e) {
                let r = this.options
                  , s = this.#h;
                if (this.options = this.#o.defaultQueryOptions(t),
                void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof (0,
                c.Nc)(this.options.enabled, this.#h))
                    throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                this.#Q(),
                this.#h.setOptions(this.options),
                r._defaulted && !(0,
                c.VS)(this.options, r) && this.#o.getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: this.#h,
                    observer: this
                });
                let i = this.hasListeners();
                i && p(this.#h, s, this.options, r) && this.#S(),
                this.updateResult(e),
                i && (this.#h !== s || (0,
                c.Nc)(this.options.enabled, this.#h) !== (0,
                c.Nc)(r.enabled, this.#h) || (0,
                c.KC)(this.options.staleTime, this.#h) !== (0,
                c.KC)(r.staleTime, this.#h)) && this.#T();
                let n = this.#q();
                i && (this.#h !== s || (0,
                c.Nc)(this.options.enabled, this.#h) !== (0,
                c.Nc)(r.enabled, this.#h) || n !== this.#R) && this.#E(n)
            }
            getOptimisticResult(t) {
                let e = this.#o.getQueryCache().build(this.#o, t)
                  , r = this.createResult(e, t);
                return (0,
                c.VS)(this.getCurrentResult(), r) || (this.#d = r,
                this.#f = this.options,
                this.#p = this.#h.state),
                r
            }
            getCurrentResult() {
                return this.#d
            }
            trackResult(t, e) {
                let r = {};
                return Object.keys(t).forEach(s => {
                    Object.defineProperty(r, s, {
                        configurable: !1,
                        enumerable: !0,
                        get: () => (this.trackProp(s),
                        e?.(s),
                        t[s])
                    })
                }
                ),
                r
            }
            trackProp(t) {
                this.#C.add(t)
            }
            getCurrentQuery() {
                return this.#h
            }
            refetch({...t}={}) {
                return this.fetch({
                    ...t
                })
            }
            fetchOptimistic(t) {
                let e = this.#o.defaultQueryOptions(t)
                  , r = this.#o.getQueryCache().build(this.#o, e);
                return r.fetch().then( () => this.createResult(r, e))
            }
            fetch(t) {
                return this.#S({
                    ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                }).then( () => (this.updateResult(),
                this.#d))
            }
            #S(t) {
                this.#Q();
                let e = this.#h.fetch(this.options, t);
                return t?.throwOnError || (e = e.catch(c.ZT)),
                e
            }
            #T() {
                this.#O();
                let t = (0,
                c.KC)(this.options.staleTime, this.#h);
                if (c.sk || this.#d.isStale || !(0,
                c.PN)(t))
                    return;
                let e = (0,
                c.Kp)(this.#d.dataUpdatedAt, t);
                this.#b = setTimeout( () => {
                    this.#d.isStale || this.updateResult()
                }
                , e + 1)
            }
            #q() {
                return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#h) : this.options.refetchInterval) ?? !1
            }
            #E(t) {
                this.#w(),
                this.#R = t,
                !c.sk && !1 !== (0,
                c.Nc)(this.options.enabled, this.#h) && (0,
                c.PN)(this.#R) && 0 !== this.#R && (this.#g = setInterval( () => {
                    (this.options.refetchIntervalInBackground || i.j.isFocused()) && this.#S()
                }
                , this.#R))
            }
            #I() {
                this.#T(),
                this.#E(this.#q())
            }
            #O() {
                this.#b && (clearTimeout(this.#b),
                this.#b = void 0)
            }
            #w() {
                this.#g && (clearInterval(this.#g),
                this.#g = void 0)
            }
            createResult(t, e) {
                let r;
                let s = this.#h
                  , i = this.options
                  , n = this.#d
                  , o = this.#p
                  , h = this.#f
                  , d = t !== s ? t.state : this.#l
                  , {state: y} = t
                  , v = {
                    ...y
                }
                  , m = !1;
                if (e._optimisticResults) {
                    let r = this.hasListeners()
                      , n = !r && l(t, e)
                      , o = r && p(t, s, e, i);
                    (n || o) && (v = {
                        ...v,
                        ...(0,
                        a.z)(y.data, t.options)
                    }),
                    "isRestoring" === e._optimisticResults && (v.fetchStatus = "idle")
                }
                let {error: b, errorUpdatedAt: g, status: R} = v;
                if (e.select && void 0 !== v.data) {
                    if (n && v.data === o?.data && e.select === this.#y)
                        r = this.#v;
                    else
                        try {
                            this.#y = e.select,
                            r = e.select(v.data),
                            r = (0,
                            c.oE)(n?.data, r, e),
                            this.#v = r,
                            this.#u = null
                        } catch (t) {
                            this.#u = t
                        }
                } else
                    r = v.data;
                if (void 0 !== e.placeholderData && void 0 === r && "pending" === R) {
                    let t;
                    if (n?.isPlaceholderData && e.placeholderData === h?.placeholderData)
                        t = n.data;
                    else if (t = "function" == typeof e.placeholderData ? e.placeholderData(this.#m?.state.data, this.#m) : e.placeholderData,
                    e.select && void 0 !== t)
                        try {
                            t = e.select(t),
                            this.#u = null
                        } catch (t) {
                            this.#u = t
                        }
                    void 0 !== t && (R = "success",
                    r = (0,
                    c.oE)(n?.data, t, e),
                    m = !0)
                }
                this.#u && (b = this.#u,
                r = this.#v,
                g = Date.now(),
                R = "error");
                let C = "fetching" === v.fetchStatus
                  , S = "pending" === R
                  , I = "error" === R
                  , O = S && C
                  , w = void 0 !== r
                  , Q = {
                    status: R,
                    fetchStatus: v.fetchStatus,
                    isPending: S,
                    isSuccess: "success" === R,
                    isError: I,
                    isInitialLoading: O,
                    isLoading: O,
                    data: r,
                    dataUpdatedAt: v.dataUpdatedAt,
                    error: b,
                    errorUpdatedAt: g,
                    failureCount: v.fetchFailureCount,
                    failureReason: v.fetchFailureReason,
                    errorUpdateCount: v.errorUpdateCount,
                    isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                    isFetchedAfterMount: v.dataUpdateCount > d.dataUpdateCount || v.errorUpdateCount > d.errorUpdateCount,
                    isFetching: C,
                    isRefetching: C && !S,
                    isLoadingError: I && !w,
                    isPaused: "paused" === v.fetchStatus,
                    isPlaceholderData: m,
                    isRefetchError: I && w,
                    isStale: f(t, e),
                    refetch: this.refetch,
                    promise: this.#c
                };
                if (this.options.experimental_prefetchInRender) {
                    let e = t => {
                        "error" === Q.status ? t.reject(Q.error) : void 0 !== Q.data && t.resolve(Q.data)
                    }
                      , r = () => {
                        e(this.#c = Q.promise = (0,
                        u.O)())
                    }
                      , i = this.#c;
                    switch (i.status) {
                    case "pending":
                        t.queryHash === s.queryHash && e(i);
                        break;
                    case "fulfilled":
                        ("error" === Q.status || Q.data !== i.value) && r();
                        break;
                    case "rejected":
                        ("error" !== Q.status || Q.error !== i.reason) && r()
                    }
                }
                return Q
            }
            updateResult(t) {
                let e = this.#d
                  , r = this.createResult(this.#h, this.options);
                if (this.#p = this.#h.state,
                this.#f = this.options,
                void 0 !== this.#p.data && (this.#m = this.#h),
                (0,
                c.VS)(r, e))
                    return;
                this.#d = r;
                let s = {};
                t?.listeners !== !1 && ( () => {
                    if (!e)
                        return !0;
                    let {notifyOnChangeProps: t} = this.options
                      , r = "function" == typeof t ? t() : t;
                    if ("all" === r || !r && !this.#C.size)
                        return !0;
                    let s = new Set(r ?? this.#C);
                    return this.options.throwOnError && s.add("error"),
                    Object.keys(this.#d).some(t => this.#d[t] !== e[t] && s.has(t))
                }
                )() && (s.listeners = !0),
                this.#D({
                    ...s,
                    ...t
                })
            }
            #Q() {
                let t = this.#o.getQueryCache().build(this.#o, this.options);
                if (t === this.#h)
                    return;
                let e = this.#h;
                this.#h = t,
                this.#l = t.state,
                this.hasListeners() && (e?.removeObserver(this),
                t.addObserver(this))
            }
            onQueryUpdate() {
                this.updateResult(),
                this.hasListeners() && this.#I()
            }
            #D(t) {
                n.V.batch( () => {
                    t.listeners && this.listeners.forEach(t => {
                        t(this.#d)
                    }
                    ),
                    this.#o.getQueryCache().notify({
                        query: this.#h,
                        type: "observerResultsUpdated"
                    })
                }
                )
            }
        }
        ;
        function l(t, e) {
            return !1 !== (0,
            c.Nc)(e.enabled, t) && void 0 === t.state.data && !("error" === t.state.status && !1 === e.retryOnMount) || void 0 !== t.state.data && d(t, e, e.refetchOnMount)
        }
        function d(t, e, r) {
            if (!1 !== (0,
            c.Nc)(e.enabled, t)) {
                let s = "function" == typeof r ? r(t) : r;
                return "always" === s || !1 !== s && f(t, e)
            }
            return !1
        }
        function p(t, e, r, s) {
            return (t !== e || !1 === (0,
            c.Nc)(s.enabled, t)) && (!r.suspense || "error" !== t.state.status) && f(t, r)
        }
        function f(t, e) {
            return !1 !== (0,
            c.Nc)(e.enabled, t) && t.isStaleByTime((0,
            c.KC)(e.staleTime, t))
        }
        var y = r(2265)
          , v = r(93191);
        r(57437);
        var m = y.createContext((s = !1,
        {
            clearReset: () => {
                s = !1
            }
            ,
            reset: () => {
                s = !0
            }
            ,
            isReset: () => s
        }))
          , b = () => y.useContext(m)
          , g = r(37832)
          , R = (t, e) => {
            (t.suspense || t.throwOnError) && !e.isReset() && (t.retryOnMount = !1)
        }
          , C = t => {
            y.useEffect( () => {
                t.clearReset()
            }
            , [t])
        }
          , S = t => {
            let {result: e, errorResetBoundary: r, throwOnError: s, query: i} = t;
            return e.isError && !r.isReset() && !e.isFetching && i && (0,
            g.L)(s, [e.error, i])
        }
          , I = y.createContext(!1)
          , O = () => y.useContext(I);
        I.Provider;
        var w = t => {
            t.suspense && (void 0 === t.staleTime && (t.staleTime = 1e3),
            "number" == typeof t.gcTime && (t.gcTime = Math.max(t.gcTime, 1e3)))
        }
          , Q = (t, e) => t.isLoading && t.isFetching && !e
          , T = (t, e) => t?.suspense && e.isPending
          , q = (t, e, r) => e.fetchOptimistic(t).catch( () => {
            r.clearReset()
        }
        );
        function E(t, e) {
            return function(t, e, r) {
                var s, i, a, o, u;
                let h = (0,
                v.NL)(r)
                  , l = O()
                  , d = b()
                  , p = h.defaultQueryOptions(t);
                null === (i = h.getDefaultOptions().queries) || void 0 === i || null === (s = i._experimental_beforeQuery) || void 0 === s || s.call(i, p),
                p._optimisticResults = l ? "isRestoring" : "optimistic",
                w(p),
                R(p, d),
                C(d);
                let f = !h.getQueryCache().get(p.queryHash)
                  , [m] = y.useState( () => new e(h,p))
                  , I = m.getOptimisticResult(p);
                if (y.useSyncExternalStore(y.useCallback(t => {
                    let e = l ? () => void 0 : m.subscribe(n.V.batchCalls(t));
                    return m.updateResult(),
                    e
                }
                , [m, l]), () => m.getCurrentResult(), () => m.getCurrentResult()),
                y.useEffect( () => {
                    m.setOptions(p, {
                        listeners: !1
                    })
                }
                , [p, m]),
                T(p, I))
                    throw q(p, m, d);
                if (S({
                    result: I,
                    errorResetBoundary: d,
                    throwOnError: p.throwOnError,
                    query: h.getQueryCache().get(p.queryHash)
                }))
                    throw I.error;
                if (null === (o = h.getDefaultOptions().queries) || void 0 === o || null === (a = o._experimental_afterQuery) || void 0 === a || a.call(o, p, I),
                p.experimental_prefetchInRender && !c.sk && Q(I, l)) {
                    let t = f ? q(p, m, d) : null === (u = h.getQueryCache().get(p.queryHash)) || void 0 === u ? void 0 : u.promise;
                    null == t || t.catch(g.Z).finally( () => {
                        m.updateResult()
                    }
                    )
                }
                return p.notifyOnChangeProps ? I : m.trackResult(I)
            }(t, h, e)
        }
    },
    34954: function(t, e, r) {
        r.d(e, {
            OP: function() {
                return u
            },
            if: function() {
                return n
            },
            kq: function() {
                return a
            }
        });
        var s = r(56298)
          , i = r(90331);
        function n(t, e) {
            return (0,
            i.v)(t, e) ? t : (0,
            s.Q$)(t, e)
        }
        function a(t) {
            return JSON.stringify(t, (t, e) => !function(t) {
                if (!o(t))
                    return !1;
                let e = t.constructor;
                if (void 0 === e)
                    return !0;
                let r = e.prototype;
                return !!(o(r) && r.hasOwnProperty("isPrototypeOf"))
            }(e) ? "bigint" == typeof e ? e.toString() : e : Object.keys(e).sort().reduce( (t, r) => (t[r] = e[r],
            t), {}))
        }
        function o(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }
        function u(t) {
            let {_defaulted: e, behavior: r, gcTime: s, initialData: i, initialDataUpdatedAt: n, maxPages: a, meta: o, networkMode: u, queryFn: c, queryHash: h, queryKey: l, queryKeyHashFn: d, retry: p, retryDelay: f, structuralSharing: y, getPreviousPageParam: v, getNextPageParam: m, initialPageParam: b, _optimisticResults: g, enabled: R, notifyOnChangeProps: C, placeholderData: S, refetchInterval: I, refetchIntervalInBackground: O, refetchOnMount: w, refetchOnReconnect: Q, refetchOnWindowFocus: T, retryOnMount: q, select: E, staleTime: D, suspense: F, throwOnError: P, config: U, connector: k, query: x, ...N} = t;
            return N
        }
    },
    98286: function(t, e, r) {
        function s(t) {
            return t.state.chainId
        }
        r.d(e, {
            x: function() {
                return a
            }
        });
        var i = r(2265)
          , n = r(94956);
        function a() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = (0,
            n.Z)(t);
            return (0,
            i.useSyncExternalStore)(t => (function(t, e) {
                let {onChange: r} = e;
                return t.subscribe(t => t.chainId, r)
            }
            )(e, {
                onChange: t
            }), () => s(e), () => s(e))
        }
    },
    944: function(t, e, r) {
        r.d(e, {
            p: function() {
                return W
            }
        });
        var s = r(93191)
          , i = r(16416)
          , n = r(95046);
        async function a(t, {chain: e}) {
            let {id: r, name: s, nativeCurrency: i, rpcUrls: a, blockExplorers: o} = e;
            await t.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: (0,
                    n.eC)(r),
                    chainName: s,
                    nativeCurrency: i,
                    rpcUrls: a.default.http,
                    blockExplorerUrls: o ? Object.values(o).map( ({url: t}) => t) : void 0
                }]
            }, {
                dedupe: !0,
                retryCount: 0
            })
        }
        var o = r(32637)
          , u = r(28703)
          , c = r(99112);
        async function h(t) {
            return t.account?.type === "local" ? [t.account.address] : (await t.request({
                method: "eth_accounts"
            }, {
                dedupe: !0
            })).map(t => (0,
            c.x)(t))
        }
        async function l(t) {
            return await t.request({
                method: "wallet_getPermissions"
            }, {
                dedupe: !0
            })
        }
        var d = r(42701);
        async function p(t) {
            return (await t.request({
                method: "eth_requestAccounts"
            }, {
                dedupe: !0,
                retryCount: 0
            })).map(t => (0,
            c.K)(t))
        }
        async function f(t, e) {
            return t.request({
                method: "wallet_requestPermissions",
                params: [e]
            }, {
                retryCount: 0
            })
        }
        var y = r(96432)
          , v = r(99154)
          , m = r(96104)
          , b = r(25355)
          , g = r(63659)
          , R = r(37669)
          , C = r(93413)
          , S = r(82857);
        async function I(t, e) {
            let {account: r=t.account, chain: s=t.chain, ...a} = e;
            if (!r)
                throw new b.o({
                    docsPath: "/docs/actions/wallet/signTransaction"
                });
            let o = (0,
            m.T)(r);
            (0,
            S.F)({
                account: o,
                ...e
            });
            let u = await (0,
            C.s)(t, i.L, "getChainId")({});
            null !== s && (0,
            g.q)({
                currentChainId: u,
                chain: s
            });
            let c = s?.formatters || t.chain?.formatters
              , h = c?.transactionRequest?.format || R.tG;
            return o.signTransaction ? o.signTransaction({
                ...a,
                chainId: u
            }, {
                serializer: t.chain?.serializers?.transaction
            }) : await t.request({
                method: "eth_signTransaction",
                params: [{
                    ...h(a),
                    chainId: (0,
                    n.eC)(u),
                    from: o.address
                }]
            }, {
                retryCount: 0
            })
        }
        var O = r(52186)
          , w = r(51359)
          , Q = r(6649);
        class T extends Q.G {
            constructor({primaryType: t, types: e}) {
                super(`Invalid primary type \`${t}\` must be one of \`${JSON.stringify(Object.keys(e))}\`.`, {
                    docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
                    metaMessages: ["Check that the primary type is a key in `types`."]
                })
            }
        }
        class q extends Q.G {
            constructor({type: t}) {
                super(`Struct type "${t}" is invalid.`, {
                    metaMessages: ["Struct type must not be a Solidity type."],
                    name: "InvalidStructTypeError"
                })
            }
        }
        var E = r(64113)
          , D = r(7508);
        let F = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/
          , P = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
        var U = r(47499);
        async function k(t, e) {
            let {account: r=t.account, domain: s, message: i, primaryType: a} = e;
            if (!r)
                throw new b.o({
                    docsPath: "/docs/actions/wallet/signTypedData"
                });
            let o = (0,
            m.T)(r)
              , u = {
                EIP712Domain: function({domain: t}) {
                    return ["string" == typeof t?.name && {
                        name: "name",
                        type: "string"
                    }, t?.version && {
                        name: "version",
                        type: "string"
                    }, "number" == typeof t?.chainId && {
                        name: "chainId",
                        type: "uint256"
                    }, t?.verifyingContract && {
                        name: "verifyingContract",
                        type: "address"
                    }, t?.salt && {
                        name: "salt",
                        type: "bytes32"
                    }].filter(Boolean)
                }({
                    domain: s
                }),
                ...e.types
            };
            if (!function(t) {
                let {domain: e, message: r, primaryType: s, types: i} = t
                  , a = (t, e) => {
                    for (let r of t) {
                        let {name: t, type: s} = r
                          , o = e[t]
                          , u = s.match(P);
                        if (u && ("number" == typeof o || "bigint" == typeof o)) {
                            let[t,e,r] = u;
                            (0,
                            n.eC)(o, {
                                signed: "int" === e,
                                size: Number.parseInt(r) / 8
                            })
                        }
                        if ("address" === s && "string" == typeof o && !(0,
                        E.U)(o))
                            throw new w.b({
                                address: o
                            });
                        let c = s.match(F);
                        if (c) {
                            let[t,e] = c;
                            if (e && (0,
                            D.d)(o) !== Number.parseInt(e))
                                throw new O.KY({
                                    expectedSize: Number.parseInt(e),
                                    givenSize: (0,
                                    D.d)(o)
                                })
                        }
                        let h = i[s];
                        h && (function(t) {
                            if ("address" === t || "bool" === t || "string" === t || t.startsWith("bytes") || t.startsWith("uint") || t.startsWith("int"))
                                throw new q({
                                    type: t
                                })
                        }(s),
                        a(h, o))
                    }
                }
                ;
                if (i.EIP712Domain && e && a(i.EIP712Domain, e),
                "EIP712Domain" !== s) {
                    if (i[s])
                        a(i[s], r);
                    else
                        throw new T({
                            primaryType: s,
                            types: i
                        })
                }
            }({
                domain: s,
                message: i,
                primaryType: a,
                types: u
            }),
            o.signTypedData)
                return o.signTypedData({
                    domain: s,
                    message: i,
                    primaryType: a,
                    types: u
                });
            let c = function(t) {
                let {domain: e, message: r, primaryType: s, types: i} = t
                  , n = (t, e) => {
                    let r = {
                        ...e
                    };
                    for (let e of t) {
                        let {name: t, type: s} = e;
                        "address" === s && (r[t] = r[t].toLowerCase())
                    }
                    return r
                }
                  , a = i.EIP712Domain && e ? n(i.EIP712Domain, e) : {}
                  , o = ( () => {
                    if ("EIP712Domain" !== s)
                        return n(i[s], r)
                }
                )();
                return (0,
                U.P)({
                    domain: a,
                    message: o,
                    primaryType: s,
                    types: i
                })
            }({
                domain: s,
                message: i,
                primaryType: a,
                types: u
            });
            return t.request({
                method: "eth_signTypedData_v4",
                params: [o.address, c]
            }, {
                retryCount: 0
            })
        }
        async function x(t, {id: e}) {
            await t.request({
                method: "wallet_switchEthereumChain",
                params: [{
                    chainId: (0,
                    n.eC)(e)
                }]
            }, {
                retryCount: 0
            })
        }
        async function N(t, e) {
            return await t.request({
                method: "wallet_watchAsset",
                params: e
            }, {
                retryCount: 0
            })
        }
        var _ = r(85721);
        function A(t) {
            return {
                addChain: e => a(t, e),
                deployContract: e => (function(t, e) {
                    let {abi: r, args: s, bytecode: i, ...n} = e
                      , a = (0,
                    o.w)({
                        abi: r,
                        args: s,
                        bytecode: i
                    });
                    return (0,
                    u.T)(t, {
                        ...n,
                        data: a
                    })
                }
                )(t, e),
                getAddresses: () => h(t),
                getChainId: () => (0,
                i.L)(t),
                getPermissions: () => l(t),
                prepareTransactionRequest: e => (0,
                d.Z)(t, e),
                requestAddresses: () => p(t),
                requestPermissions: e => f(t, e),
                sendRawTransaction: e => (0,
                y.p)(t, e),
                sendTransaction: e => (0,
                u.T)(t, e),
                signMessage: e => (0,
                v.l)(t, e),
                signTransaction: e => I(t, e),
                signTypedData: e => k(t, e),
                switchChain: e => x(t, e),
                watchAsset: e => N(t, e),
                writeContract: e => (0,
                _.n)(t, e)
            }
        }
        var K = r(33281);
        async function M(t, e={}) {
            return (await (0,
            K.e)(t, e)).extend(A)
        }
        var j = r(34954)
          , L = r(2265)
          , z = r(42086)
          , G = r(26735)
          , V = r(98286)
          , H = r(94956);
        function W() {
            var t, e, r, i;
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {query: a={}, ...o} = n
              , u = (0,
            H.Z)(o)
              , c = (0,
            s.NL)()
              , {address: h, connector: l, status: d} = (0,
            G.m)({
                config: u
            })
              , p = (0,
            V.x)({
                config: u
            })
              , f = null !== (t = n.connector) && void 0 !== t ? t : l
              , {queryKey: y, ...v} = function(t, e={}) {
                return {
                    gcTime: 0,
                    async queryFn({queryKey: r}) {
                        let {connector: s} = e
                          , {connectorUid: i, scopeKey: n, ...a} = r[1];
                        return M(t, {
                            ...a,
                            connector: s
                        })
                    },
                    queryKey: function(t={}) {
                        let {connector: e, ...r} = t;
                        return ["walletClient", {
                            ...(0,
                            j.OP)(r),
                            connectorUid: e?.uid
                        }]
                    }(e)
                }
            }(u, {
                ...n,
                chainId: null !== (e = n.chainId) && void 0 !== e ? e : p,
                connector: null !== (r = n.connector) && void 0 !== r ? r : l
            })
              , m = !!(("connected" === d || "reconnecting" === d && (null == f ? void 0 : f.getProvider)) && (null === (i = a.enabled) || void 0 === i || i))
              , b = (0,
            L.useRef)(h);
            return (0,
            L.useEffect)( () => {
                let t = b.current;
                !h && t ? (c.removeQueries({
                    queryKey: y
                }),
                b.current = void 0) : h !== t && (c.invalidateQueries({
                    queryKey: y
                }),
                b.current = h)
            }
            , [h, c]),
            (0,
            z.aM)({
                ...a,
                ...v,
                queryKey: y,
                enabled: m,
                staleTime: Number.POSITIVE_INFINITY
            })
        }
    },
    42086: function(t, e, r) {
        r.d(e, {
            aM: function() {
                return n
            }
        });
        var s = r(40932)
          , i = r(34954);
        function n(t) {
            let e = (0,
            s.a)({
                ...t,
                queryKeyHashFn: i.kq
            });
            return e.queryKey = t.queryKey,
            e
        }
    }
}]);
