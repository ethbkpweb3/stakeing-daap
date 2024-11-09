"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9159], {
    86291: function(e, t, n) {
        let a, i, r, s, o, c, l, u, d, h, p, f, m, A, w, g;
        n.d(t, {
            K: function() {
                return tQ
            }
        }),
        n(26181);
        var b = n(72688);
        let y = e => (t, n, a) => {
            let i = a.subscribe;
            return a.subscribe = (e, t, n) => {
                let r = e;
                if (t) {
                    let i = (null == n ? void 0 : n.equalityFn) || Object.is
                      , s = e(a.getState());
                    r = n => {
                        let a = e(n);
                        if (!i(s, a)) {
                            let e = s;
                            t(s = a, e)
                        }
                    }
                    ,
                    (null == n ? void 0 : n.fireImmediately) && t(s, s)
                }
                return i(r)
            }
            ,
            e(t, n, a)
        }
          , C = e => t => {
            try {
                let n = e(t);
                if (n instanceof Promise)
                    return n;
                return {
                    then: e => C(e)(n),
                    catch(e) {
                        return this
                    }
                }
            } catch (e) {
                return {
                    then(e) {
                        return this
                    },
                    catch: t => C(t)(e)
                }
            }
        }
          , v = (e, t) => (n, a, i) => {
            let r, s = {
                storage: function(e, t) {
                    let n;
                    try {
                        n = e()
                    } catch (e) {
                        return
                    }
                    return {
                        getItem: e => {
                            var t;
                            let a = e => null === e ? null : JSON.parse(e, void 0)
                              , i = null != (t = n.getItem(e)) ? t : null;
                            return i instanceof Promise ? i.then(a) : a(i)
                        }
                        ,
                        setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: e => n.removeItem(e)
                    }
                }( () => localStorage),
                partialize: e => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            }, o = !1, c = new Set, l = new Set, u = s.storage;
            if (!u)
                return e( (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),
                    n(...e)
                }
                , a, i);
            let d = () => {
                let e = s.partialize({
                    ...a()
                });
                return u.setItem(s.name, {
                    state: e,
                    version: s.version
                })
            }
              , h = i.setState;
            i.setState = (e, t) => {
                h(e, t),
                d()
            }
            ;
            let p = e( (...e) => {
                n(...e),
                d()
            }
            , a, i);
            i.getInitialState = () => p;
            let f = () => {
                var e, t;
                if (!u)
                    return;
                o = !1,
                c.forEach(e => {
                    var t;
                    return e(null != (t = a()) ? t : p)
                }
                );
                let i = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = a()) ? e : p)) || void 0;
                return C(u.getItem.bind(u))(s.name).then(e => {
                    if (e) {
                        if ("number" != typeof e.version || e.version === s.version)
                            return [!1, e.state];
                        if (s.migrate)
                            return [!0, s.migrate(e.state, e.version)];
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    }
                    return [!1, void 0]
                }
                ).then(e => {
                    var t;
                    let[i,o] = e;
                    if (n(r = s.merge(o, null != (t = a()) ? t : p), !0),
                    i)
                        return d()
                }
                ).then( () => {
                    null == i || i(r, void 0),
                    r = a(),
                    o = !0,
                    l.forEach(e => e(r))
                }
                ).catch(e => {
                    null == i || i(void 0, e)
                }
                )
            }
            ;
            return i.persist = {
                setOptions: e => {
                    s = {
                        ...s,
                        ...e
                    },
                    e.storage && (u = e.storage)
                }
                ,
                clearStorage: () => {
                    null == u || u.removeItem(s.name)
                }
                ,
                getOptions: () => s,
                rehydrate: () => f(),
                hasHydrated: () => o,
                onHydrate: e => (c.add(e),
                () => {
                    c.delete(e)
                }
                ),
                onFinishHydration: e => (l.add(e),
                () => {
                    l.delete(e)
                }
                )
            },
            s.skipHydration || f(),
            r || p
        }
          , E = e => {
            let t;
            let n = new Set
              , a = (e, a) => {
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    t = (null != a ? a : "object" != typeof i || null === i) ? i : Object.assign({}, t, i),
                    n.forEach(n => n(t, e))
                }
            }
              , i = () => t
              , r = {
                setState: a,
                getState: i,
                getInitialState: () => s,
                subscribe: e => (n.add(e),
                () => n.delete(e))
            }
              , s = t = e(a, i, r);
            return r
        }
          , I = e => e ? E(e) : E;
        var N = n(99112)
          , x = n(96329)
          , k = n(13581)
          , B = n(55894)
          , D = n(95046)
          , P = n(85770)
          , Q = n(50571);
        let U = /(rabby|trustwallet)/;
        function S(e={}) {
            let t, n, a, i;
            let {shimDisconnect: r=!0, unstable_shimAsyncInject: s} = e;
            function o() {
                let t = e.target;
                if ("function" == typeof t) {
                    let e = t();
                    if (e)
                        return e
                }
                return "object" == typeof t ? t : "string" == typeof t ? {
                    ...M[t] ?? {
                        id: t,
                        name: `${t[0].toUpperCase()}${t.slice(1)}`,
                        provider: `is${t[0].toUpperCase()}${t.slice(1)}`
                    }
                } : {
                    id: "injected",
                    name: "Injected",
                    provider: e => e?.ethereum
                }
            }
            return c => ({
                get icon() {
                    return o().icon
                },
                get id() {
                    return o().id
                },
                get name() {
                    return o().name
                },
                get supportsSimulation() {
                    return U.test(this.id.toLowerCase())
                },
                type: S.type,
                async setup() {
                    let n = await this.getProvider();
                    n?.on && e.target && (a || (a = this.onConnect.bind(this),
                    n.on("connect", a)),
                    t || (t = this.onAccountsChanged.bind(this),
                    n.on("accountsChanged", t)))
                },
                async connect({chainId: s, isReconnecting: o}={}) {
                    let l = await this.getProvider();
                    if (!l)
                        throw new Q.M;
                    let u = [];
                    if (o)
                        u = await this.getAccounts().catch( () => []);
                    else if (r)
                        try {
                            let e = await l.request({
                                method: "wallet_requestPermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            });
                            (u = e[0]?.caveats?.[0]?.value?.map(e => N.K(e))).length > 0 && (u = await this.getAccounts())
                        } catch (e) {
                            if (e.code === x.ab.code)
                                throw new x.ab(e);
                            if (e.code === x.pT.code)
                                throw e
                        }
                    try {
                        u?.length || o || (u = (await l.request({
                            method: "eth_requestAccounts"
                        })).map(e => (0,
                        N.K)(e))),
                        a && (l.removeListener("connect", a),
                        a = void 0),
                        t || (t = this.onAccountsChanged.bind(this),
                        l.on("accountsChanged", t)),
                        n || (n = this.onChainChanged.bind(this),
                        l.on("chainChanged", n)),
                        i || (i = this.onDisconnect.bind(this),
                        l.on("disconnect", i));
                        let d = await this.getChainId();
                        if (s && d !== s) {
                            let e = await this.switchChain({
                                chainId: s
                            }).catch(e => {
                                if (e.code === x.ab.code)
                                    throw e;
                                return {
                                    id: d
                                }
                            }
                            );
                            d = e?.id ?? d
                        }
                        return r && await c.storage?.removeItem(`${this.id}.disconnected`),
                        e.target || await c.storage?.setItem("injected.connected", !0),
                        {
                            accounts: u,
                            chainId: d
                        }
                    } catch (e) {
                        if (e.code === x.ab.code)
                            throw new x.ab(e);
                        if (e.code === x.pT.code)
                            throw new x.pT(e);
                        throw e
                    }
                },
                async disconnect() {
                    let t = await this.getProvider();
                    if (!t)
                        throw new Q.M;
                    n && (t.removeListener("chainChanged", n),
                    n = void 0),
                    i && (t.removeListener("disconnect", i),
                    i = void 0),
                    a || (a = this.onConnect.bind(this),
                    t.on("connect", a));
                    try {
                        await (0,
                        k.F)( () => t.request({
                            method: "wallet_revokePermissions",
                            params: [{
                                eth_accounts: {}
                            }]
                        }), {
                            timeout: 100
                        })
                    } catch {}
                    r && await c.storage?.setItem(`${this.id}.disconnected`, !0),
                    e.target || await c.storage?.removeItem("injected.connected")
                },
                async getAccounts() {
                    let e = await this.getProvider();
                    if (!e)
                        throw new Q.M;
                    return (await e.request({
                        method: "eth_accounts"
                    })).map(e => (0,
                    N.K)(e))
                },
                async getChainId() {
                    let e = await this.getProvider();
                    if (!e)
                        throw new Q.M;
                    return Number(await e.request({
                        method: "eth_chainId"
                    }))
                },
                async getProvider() {
                    let e;
                    if ("undefined" == typeof window)
                        return;
                    let t = o();
                    return (e = "function" == typeof t.provider ? t.provider(window) : "string" == typeof t.provider ? T(window, t.provider) : t.provider) && !e.removeListener && ("off"in e && "function" == typeof e.off ? e.removeListener = e.off : e.removeListener = () => {}
                    ),
                    e
                },
                async isAuthorized() {
                    try {
                        if (r && await c.storage?.getItem(`${this.id}.disconnected`) || !e.target && !await c.storage?.getItem("injected.connected"))
                            return !1;
                        if (!await this.getProvider()) {
                            if (void 0 !== s && !1 !== s) {
                                let e = async () => ("undefined" != typeof window && window.removeEventListener("ethereum#initialized", e),
                                !!await this.getProvider())
                                  , t = "number" == typeof s ? s : 1e3;
                                if (await Promise.race([..."undefined" != typeof window ? [new Promise(t => window.addEventListener("ethereum#initialized", () => t(e()), {
                                    once: !0
                                }))] : [], new Promise(n => setTimeout( () => n(e()), t))]))
                                    return !0
                            }
                            throw new Q.M
                        }
                        return !!(await (0,
                        B.J)( () => this.getAccounts())).length
                    } catch {
                        return !1
                    }
                },
                async switchChain({addEthereumChainParameter: e, chainId: t}) {
                    let n = await this.getProvider();
                    if (!n)
                        throw new Q.M;
                    let a = c.chains.find(e => e.id === t);
                    if (!a)
                        throw new x.x3(new P.X4);
                    try {
                        return await Promise.all([n.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: (0,
                                D.eC)(t)
                            }]
                        }).then(async () => {
                            await this.getChainId() === t && c.emitter.emit("change", {
                                chainId: t
                            })
                        }
                        ), new Promise(e => {
                            let n = a => {
                                "chainId"in a && a.chainId === t && (c.emitter.off("change", n),
                                e())
                            }
                            ;
                            c.emitter.on("change", n)
                        }
                        )]),
                        a
                    } catch (i) {
                        if (4902 === i.code || i?.data?.originalError?.code === 4902)
                            try {
                                let i, r;
                                let {default: s, ...o} = a.blockExplorers ?? {};
                                e?.blockExplorerUrls ? i = e.blockExplorerUrls : s && (i = [s.url, ...Object.values(o).map(e => e.url)]),
                                r = e?.rpcUrls?.length ? e.rpcUrls : [a.rpcUrls.default?.http[0] ?? ""];
                                let c = {
                                    blockExplorerUrls: i,
                                    chainId: (0,
                                    D.eC)(t),
                                    chainName: e?.chainName ?? a.name,
                                    iconUrls: e?.iconUrls,
                                    nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                                    rpcUrls: r
                                };
                                if (await n.request({
                                    method: "wallet_addEthereumChain",
                                    params: [c]
                                }),
                                await this.getChainId() !== t)
                                    throw new x.ab(Error("User rejected switch after adding network."));
                                return a
                            } catch (e) {
                                throw new x.ab(e)
                            }
                        if (i.code === x.ab.code)
                            throw new x.ab(i);
                        throw new x.x3(i)
                    }
                },
                async onAccountsChanged(e) {
                    if (0 === e.length)
                        this.onDisconnect();
                    else if (c.emitter.listenerCount("connect")) {
                        let e = (await this.getChainId()).toString();
                        this.onConnect({
                            chainId: e
                        }),
                        r && await c.storage?.removeItem(`${this.id}.disconnected`)
                    } else
                        c.emitter.emit("change", {
                            accounts: e.map(e => (0,
                            N.K)(e))
                        })
                },
                onChainChanged(e) {
                    let t = Number(e);
                    c.emitter.emit("change", {
                        chainId: t
                    })
                },
                async onConnect(e) {
                    let r = await this.getAccounts();
                    if (0 === r.length)
                        return;
                    let s = Number(e.chainId);
                    c.emitter.emit("connect", {
                        accounts: r,
                        chainId: s
                    });
                    let o = await this.getProvider();
                    o && (a && (o.removeListener("connect", a),
                    a = void 0),
                    t || (t = this.onAccountsChanged.bind(this),
                    o.on("accountsChanged", t)),
                    n || (n = this.onChainChanged.bind(this),
                    o.on("chainChanged", n)),
                    i || (i = this.onDisconnect.bind(this),
                    o.on("disconnect", i)))
                },
                async onDisconnect(e) {
                    let t = await this.getProvider();
                    e && 1013 === e.code && t && (await this.getAccounts()).length || (c.emitter.emit("disconnect"),
                    t && (n && (t.removeListener("chainChanged", n),
                    n = void 0),
                    i && (t.removeListener("disconnect", i),
                    i = void 0),
                    a || (a = this.onConnect.bind(this),
                    t.on("connect", a))))
                }
            })
        }
        S.type = "injected";
        let M = {
            coinbaseWallet: {
                id: "coinbaseWallet",
                name: "Coinbase Wallet",
                provider: e => e?.coinbaseWalletExtension ? e.coinbaseWalletExtension : T(e, "isCoinbaseWallet")
            },
            metaMask: {
                id: "metaMask",
                name: "MetaMask",
                provider: e => T(e, e => {
                    if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state)
                        return !1;
                    for (let t of ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isUniswapWallet", "isZerion"])
                        if (e[t])
                            return !1;
                    return !0
                }
                )
            },
            phantom: {
                id: "phantom",
                name: "Phantom",
                provider: e => e?.phantom?.ethereum ? e.phantom?.ethereum : T(e, "isPhantom")
            }
        };
        function T(e, t) {
            function n(e) {
                return "function" == typeof t ? t(e) : "string" != typeof t || e[t]
            }
            let a = e.ethereum;
            return a?.providers ? a.providers.find(e => n(e)) : a && n(a) ? a : void 0
        }
        var R = n(36393);
        class L {
            constructor(e) {
                Object.defineProperty(this, "uid", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                }),
                Object.defineProperty(this, "_emitter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new R.v
                })
            }
            on(e, t) {
                this._emitter.on(e, t)
            }
            once(e, t) {
                this._emitter.once(e, t)
            }
            off(e, t) {
                this._emitter.off(e, t)
            }
            emit(e, ...t) {
                let n = t[0];
                this._emitter.emit(e, {
                    uid: this.uid,
                    ...n
                })
            }
            listenerCount(e) {
                return this._emitter.listenerCount(e)
            }
        }
        function K(e, t) {
            return JSON.parse(e, (e, n) => {
                let a = n;
                return a?.__type === "bigint" && (a = BigInt(a.value)),
                a?.__type === "Map" && (a = new Map(a.value)),
                t?.(e, a) ?? a
            }
            )
        }
        function O(e, t) {
            return e.slice(0, t).join(".") || "."
        }
        function F(e, t) {
            let {length: n} = e;
            for (let a = 0; a < n; ++a)
                if (e[a] === t)
                    return a + 1;
            return 0
        }
        function G(e, t, n, a) {
            return JSON.stringify(e, function(e, t) {
                let n = "function" == typeof e
                  , a = "function" == typeof t
                  , i = []
                  , r = [];
                return function(s, o) {
                    if ("object" == typeof o) {
                        if (i.length) {
                            let e = F(i, this);
                            0 === e ? i[i.length] = this : (i.splice(e),
                            r.splice(e)),
                            r[r.length] = s;
                            let n = F(i, o);
                            if (0 !== n)
                                return a ? t.call(this, s, o, O(r, n)) : `[ref=${O(r, n)}]`
                        } else
                            i[0] = o,
                            r[0] = s
                    }
                    return n ? e.call(this, s, o) : o
                }
            }( (e, n) => {
                let a = n;
                return "bigint" == typeof a && (a = {
                    __type: "bigint",
                    value: n.toString()
                }),
                a instanceof Map && (a = {
                    __type: "Map",
                    value: Array.from(n.entries())
                }),
                t?.(e, a) ?? a
            }
            , a), n ?? void 0)
        }
        let H = {
            getItem: () => null,
            setItem: () => {}
            ,
            removeItem: () => {}
        }
          , J = 256;
        var q = n(52520)
          , j = n(70272);
        async function z(e, t) {
            let n;
            if ((n = "function" == typeof t.connector ? e._internal.connectors.setup(t.connector) : t.connector).uid === e.state.current)
                throw new P.wi;
            try {
                e.setState(e => ({
                    ...e,
                    status: "connecting"
                })),
                n.emitter.emit("message", {
                    type: "connecting"
                });
                let a = await n.connect({
                    chainId: t.chainId
                })
                  , i = a.accounts;
                return n.emitter.off("connect", e._internal.events.connect),
                n.emitter.on("change", e._internal.events.change),
                n.emitter.on("disconnect", e._internal.events.disconnect),
                await e.storage?.setItem("recentConnectorId", n.id),
                e.setState(e => ({
                    ...e,
                    connections: new Map(e.connections).set(n.uid, {
                        accounts: i,
                        chainId: a.chainId,
                        connector: n
                    }),
                    current: n.uid,
                    status: "connected"
                })),
                {
                    accounts: i,
                    chainId: a.chainId
                }
            } catch (t) {
                throw e.setState(e => ({
                    ...e,
                    status: e.current ? "connected" : "disconnected"
                })),
                t
            }
        }
        var V = n(2302)
          , Z = n(99154)
          , W = n(61954)
          , Y = n(33281);
        async function X(e, t) {
            let n;
            let {account: a, connector: i, ...r} = t;
            return n = "object" == typeof a && "local" === a.type ? e.getClient() : await (0,
            Y.e)(e, {
                account: a,
                connector: i
            }),
            (0,
            W.s)(n, Z.l, "signMessage")({
                ...r,
                ...a ? {
                    account: a
                } : {}
            })
        }
        var _ = n(60730);
        async function $(e, t) {
            let n;
            let {chainId: a, connector: i, ...r} = t;
            n = t.account ? t.account : (await (0,
            Y.e)(e, {
                account: t.account,
                chainId: a,
                connector: i
            })).account;
            let s = e.getClient({
                chainId: a
            });
            return (0,
            W.s)(s, _.Q, "estimateGas")({
                ...r,
                account: n
            })
        }
        var ee = n(48479)
          , et = n(79886)
          , en = n(20670)
          , ea = n(90894)
          , ei = n(21620)
          , er = n(97225)
          , es = n(31006)
          , eo = n(18543)
          , ec = n(77955)
          , el = n(47807)
          , eu = n(6649)
          , ed = n(58591);
        function eh(e, t) {
            if (!(e instanceof eu.G))
                return !1;
            let n = e.walk(e => e instanceof ed.Lu);
            return n instanceof ed.Lu && (!!(n.data?.errorName === "ResolverNotFound" || n.data?.errorName === "ResolverWildcardNotSupported" || n.data?.errorName === "ResolverNotContract" || n.data?.errorName === "ResolverError" || n.data?.errorName === "HttpError" || n.reason?.includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === t && n.reason === el.$[50])
        }
        var ep = n(53932)
          , ef = n(82361)
          , em = n(29886)
          , eA = n(40369);
        function ew(e) {
            if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
                return null;
            let t = `0x${e.slice(1, 65)}`;
            return (0,
            eA.v)(t) ? t : null
        }
        function eg(e) {
            let t = new Uint8Array(32).fill(0);
            if (!e)
                return (0,
                D.ci)(t);
            let n = e.split(".");
            for (let e = n.length - 1; e >= 0; e -= 1) {
                let a = ew(n[e])
                  , i = a ? (0,
                ef.O0)(a) : (0,
                em.w)((0,
                ef.qX)(n[e]), "bytes");
                t = (0,
                em.w)((0,
                ep.zo)([t, i]), "bytes")
            }
            return (0,
            D.ci)(t)
        }
        function eb(e) {
            let t = e.replace(/^\.|\.$/gm, "");
            if (0 === t.length)
                return new Uint8Array(1);
            let n = new Uint8Array((0,
            ef.qX)(t).byteLength + 2)
              , a = 0
              , i = t.split(".");
            for (let e = 0; e < i.length; e++) {
                let t = (0,
                ef.qX)(i[e]);
                if (t.byteLength > 255) {
                    var r;
                    t = (0,
                    ef.qX)((r = function(e) {
                        let t = new Uint8Array(32).fill(0);
                        return e ? ew(e) || (0,
                        em.w)((0,
                        ef.qX)(e)) : (0,
                        D.ci)(t)
                    }(i[e]),
                    `[${r.slice(2)}]`))
                }
                n[a] = t.length,
                n.set(t, a + 1),
                a += t.length + 1
            }
            return n.byteLength !== a + 1 ? n.slice(0, a + 1) : n
        }
        var ey = n(93413)
          , eC = n(3796);
        async function ev(e, {blockNumber: t, blockTag: n, coinType: a, name: i, gatewayUrls: r, strict: s, universalResolverAddress: o}) {
            let c = o;
            if (!c) {
                if (!e.chain)
                    throw Error("client chain not configured. universalResolverAddress is required.");
                c = (0,
                eo.L)({
                    blockNumber: t,
                    chain: e.chain,
                    contract: "ensUniversalResolver"
                })
            }
            try {
                let s = (0,
                es.R)({
                    abi: ei.X$,
                    functionName: "addr",
                    ...null != a ? {
                        args: [eg(i), BigInt(a)]
                    } : {
                        args: [eg(i)]
                    }
                })
                  , o = {
                    address: c,
                    abi: ei.k3,
                    functionName: "resolve",
                    args: [(0,
                    D.NC)(eb(i)), s],
                    blockNumber: t,
                    blockTag: n
                }
                  , l = (0,
                ey.s)(e, eC.L, "readContract")
                  , u = r ? await l({
                    ...o,
                    args: [...o.args, r]
                }) : await l(o);
                if ("0x" === u[0])
                    return null;
                let d = (0,
                er.k)({
                    abi: ei.X$,
                    args: null != a ? [eg(i), BigInt(a)] : void 0,
                    functionName: "addr",
                    data: u[0]
                });
                if ("0x" === d || "0x00" === (0,
                ec.f)(d))
                    return null;
                return d
            } catch (e) {
                if (s)
                    throw e;
                if (eh(e, "resolve"))
                    return null;
                throw e
            }
        }
        class eE extends eu.G {
            constructor({data: e}) {
                super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
                    metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`],
                    name: "EnsAvatarInvalidMetadataError"
                })
            }
        }
        class eI extends eu.G {
            constructor({reason: e}) {
                super(`ENS NFT avatar URI is invalid. ${e}`, {
                    name: "EnsAvatarInvalidNftUriError"
                })
            }
        }
        class eN extends eu.G {
            constructor({uri: e}) {
                super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`, {
                    name: "EnsAvatarUriResolutionError"
                })
            }
        }
        class ex extends eu.G {
            constructor({namespace: e}) {
                super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`, {
                    name: "EnsAvatarUnsupportedNamespaceError"
                })
            }
        }
        let ek = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/
          , eB = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/
          , eD = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/
          , eP = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
        async function eQ(e) {
            try {
                let t = await fetch(e, {
                    method: "HEAD"
                });
                if (200 === t.status) {
                    let e = t.headers.get("content-type");
                    return e?.startsWith("image/")
                }
                return !1
            } catch (t) {
                if ("object" == typeof t && void 0 !== t.response || !globalThis.hasOwnProperty("Image"))
                    return !1;
                return new Promise(t => {
                    let n = new Image;
                    n.onload = () => {
                        t(!0)
                    }
                    ,
                    n.onerror = () => {
                        t(!1)
                    }
                    ,
                    n.src = e
                }
                )
            }
        }
        function eU(e, t) {
            return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
        }
        function eS({uri: e, gatewayUrls: t}) {
            let n = eD.test(e);
            if (n)
                return {
                    uri: e,
                    isOnChain: !0,
                    isEncoded: n
                };
            let a = eU(t?.ipfs, "https://ipfs.io")
              , i = eU(t?.arweave, "https://arweave.net")
              , r = e.match(ek)
              , {protocol: s, subpath: o, target: c, subtarget: l=""} = r?.groups || {}
              , u = "ipns:/" === s || "ipns/" === o
              , d = "ipfs:/" === s || "ipfs/" === o || eB.test(e);
            if (e.startsWith("http") && !u && !d) {
                let n = e;
                return t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
                {
                    uri: n,
                    isOnChain: !1,
                    isEncoded: !1
                }
            }
            if ((u || d) && c)
                return {
                    uri: `${a}/${u ? "ipns" : "ipfs"}/${c}${l}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
            if ("ar:/" === s && c)
                return {
                    uri: `${i}/${c}${l || ""}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
            let h = e.replace(eP, "");
            if (h.startsWith("<svg") && (h = `data:image/svg+xml;base64,${btoa(h)}`),
            h.startsWith("data:") || h.startsWith("{"))
                return {
                    uri: h,
                    isOnChain: !0,
                    isEncoded: !1
                };
            throw new eN({
                uri: e
            })
        }
        function eM(e) {
            if ("object" != typeof e || !("image"in e) && !("image_url"in e) && !("image_data"in e))
                throw new eE({
                    data: e
                });
            return e.image || e.image_url || e.image_data
        }
        async function eT({gatewayUrls: e, uri: t}) {
            try {
                let n = await fetch(t).then(e => e.json());
                return await eR({
                    gatewayUrls: e,
                    uri: eM(n)
                })
            } catch {
                throw new eN({
                    uri: t
                })
            }
        }
        async function eR({gatewayUrls: e, uri: t}) {
            let {uri: n, isOnChain: a} = eS({
                uri: t,
                gatewayUrls: e
            });
            if (a || await eQ(n))
                return n;
            throw new eN({
                uri: t
            })
        }
        async function eL(e, {nft: t}) {
            if ("erc721" === t.namespace)
                return (0,
                eC.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
            if ("erc1155" === t.namespace)
                return (0,
                eC.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
            throw new ex({
                namespace: t.namespace
            })
        }
        async function eK(e, {gatewayUrls: t, record: n}) {
            return /eip155:/i.test(n) ? eO(e, {
                gatewayUrls: t,
                record: n
            }) : eR({
                uri: n,
                gatewayUrls: t
            })
        }
        async function eO(e, {gatewayUrls: t, record: n}) {
            let a = function(e) {
                let t = e;
                t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                let[n,a,i] = t.split("/")
                  , [r,s] = n.split(":")
                  , [o,c] = a.split(":");
                if (!r || "eip155" !== r.toLowerCase())
                    throw new eI({
                        reason: "Only EIP-155 supported"
                    });
                if (!s)
                    throw new eI({
                        reason: "Chain ID not found"
                    });
                if (!c)
                    throw new eI({
                        reason: "Contract address not found"
                    });
                if (!i)
                    throw new eI({
                        reason: "Token ID not found"
                    });
                if (!o)
                    throw new eI({
                        reason: "ERC namespace not found"
                    });
                return {
                    chainID: Number.parseInt(s),
                    namespace: o.toLowerCase(),
                    contractAddress: c,
                    tokenID: i
                }
            }(n)
              , {uri: i, isOnChain: r, isEncoded: s} = eS({
                uri: await eL(e, {
                    nft: a
                }),
                gatewayUrls: t
            });
            if (r && (i.includes("data:application/json;base64,") || i.startsWith("{")))
                return eR({
                    uri: eM(JSON.parse(s ? atob(i.replace("data:application/json;base64,", "")) : i)),
                    gatewayUrls: t
                });
            let o = a.tokenID;
            return "erc1155" === a.namespace && (o = o.replace("0x", "").padStart(64, "0")),
            eT({
                gatewayUrls: t,
                uri: i.replace(/(?:0x)?{id}/, o)
            })
        }
        async function eF(e, {blockNumber: t, blockTag: n, name: a, key: i, gatewayUrls: r, strict: s, universalResolverAddress: o}) {
            let c = o;
            if (!c) {
                if (!e.chain)
                    throw Error("client chain not configured. universalResolverAddress is required.");
                c = (0,
                eo.L)({
                    blockNumber: t,
                    chain: e.chain,
                    contract: "ensUniversalResolver"
                })
            }
            try {
                let s = {
                    address: c,
                    abi: ei.k3,
                    functionName: "resolve",
                    args: [(0,
                    D.NC)(eb(a)), (0,
                    es.R)({
                        abi: ei.nZ,
                        functionName: "text",
                        args: [eg(a), i]
                    })],
                    blockNumber: t,
                    blockTag: n
                }
                  , o = (0,
                ey.s)(e, eC.L, "readContract")
                  , l = r ? await o({
                    ...s,
                    args: [...s.args, r]
                }) : await o(s);
                if ("0x" === l[0])
                    return null;
                let u = (0,
                er.k)({
                    abi: ei.nZ,
                    functionName: "text",
                    data: l[0]
                });
                return "" === u ? null : u
            } catch (e) {
                if (s)
                    throw e;
                if (eh(e, "resolve"))
                    return null;
                throw e
            }
        }
        async function eG(e, {blockNumber: t, blockTag: n, assetGatewayUrls: a, name: i, gatewayUrls: r, strict: s, universalResolverAddress: o}) {
            let c = await (0,
            ey.s)(e, eF, "getEnsText")({
                blockNumber: t,
                blockTag: n,
                key: "avatar",
                name: i,
                universalResolverAddress: o,
                gatewayUrls: r,
                strict: s
            });
            if (!c)
                return null;
            try {
                return await eK(e, {
                    record: c,
                    gatewayUrls: a
                })
            } catch {
                return null
            }
        }
        function eH(e, t) {
            let {chainId: n, ...a} = t
              , i = e.getClient({
                chainId: n
            });
            return (0,
            W.s)(i, eG, "getEnsAvatar")(a)
        }
        var eJ = n(30807);
        async function eq(e, t) {
            let {connector: n} = t
              , a = e.state.connections.get(n.uid);
            if (!a)
                throw new P.aH;
            return await e.storage?.setItem("recentConnectorId", n.id),
            e.setState(e => ({
                ...e,
                current: n.uid
            })),
            {
                accounts: a.accounts,
                chainId: a.chainId
            }
        }
        async function ej(e, {address: t, blockNumber: n, blockTag: a, gatewayUrls: i, strict: r, universalResolverAddress: s}) {
            let o = s;
            if (!o) {
                if (!e.chain)
                    throw Error("client chain not configured. universalResolverAddress is required.");
                o = (0,
                eo.L)({
                    blockNumber: n,
                    chain: e.chain,
                    contract: "ensUniversalResolver"
                })
            }
            let c = `${t.toLowerCase().substring(2)}.addr.reverse`;
            try {
                let r = {
                    address: o,
                    abi: ei.du,
                    functionName: "reverse",
                    args: [(0,
                    D.NC)(eb(c))],
                    blockNumber: n,
                    blockTag: a
                }
                  , s = (0,
                ey.s)(e, eC.L, "readContract")
                  , [l,u] = i ? await s({
                    ...r,
                    args: [...r.args, i]
                }) : await s(r);
                if (t.toLowerCase() !== u.toLowerCase())
                    return null;
                return l
            } catch (e) {
                if (r)
                    throw e;
                if (eh(e, "reverse"))
                    return null;
                throw e
            }
        }
        var ez = n(89788)
          , eV = n(71284)
          , eZ = n(63685)
          , eW = n(42701);
        async function eY(e, t) {
            let {account: n, chainId: a, ...i} = t
              , r = n ?? (0,
            et.D)(e).address
              , s = e.getClient({
                chainId: a
            });
            return (0,
            W.s)(s, eW.Z, "prepareTransactionRequest")({
                ...i,
                ...r ? {
                    account: r
                } : {}
            })
        }
        var eX = n(28703);
        async function e_(e, t) {
            let n;
            let {account: a, chainId: i, connector: r, gas: s, ...o} = t;
            n = "object" == typeof a && a?.type === "local" ? e.getClient({
                chainId: i
            }) : await (0,
            Y.e)(e, {
                account: a ?? void 0,
                chainId: i,
                connector: r
            });
            let {connector: c} = (0,
            et.D)(e)
              , l = await (async () => {
                if (!(!("data"in t) || !t.data || (r ?? c)?.supportsSimulation) && null !== s)
                    return void 0 === s ? (0,
                    W.s)(n, _.Q, "estimateGas")({
                        ...o,
                        account: a,
                        chain: i ? {
                            id: i
                        } : null
                    }) : s
            }
            )()
              , u = (0,
            W.s)(n, eX.T, "sendTransaction");
            return await u({
                ...o,
                ...a ? {
                    account: a
                } : {},
                gas: l,
                chain: i ? {
                    id: i
                } : null
            })
        }
        var e$ = n(16491)
          , e0 = n(17439)
          , e1 = n(42921)
          , e5 = n(10875)
          , e6 = n(86461);
        n(33987),
        n(54308),
        n(58923);
        var e2 = n(8574);
        async function e8(e) {
            if (!e)
                throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
            let t = await e?.getProvider();
            return {
                supportsAllNetworks: !1,
                approvedCaipNetworkIds: e2.s.getChainsFromNamespaces(t?.session?.namespaces)
            }
        }
        function e3(e) {
            if (!e)
                throw Error("No CAIP address provided");
            let t = e.split(":")[2];
            if (!t)
                throw Error("Invalid CAIP address");
            return t
        }
        var e4 = n(7941);
        let e9 = new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
        function e7(e) {
            var t;
            let n;
            return t = function(e) {
                let t = 0;
                function n() {
                    return e[t++] << 8 | e[t++]
                }
                let a = n()
                  , i = 1
                  , r = [0, 1];
                for (let e = 1; e < a; e++)
                    r.push(i += n());
                let s = n()
                  , o = t;
                t += s;
                let c = 0
                  , l = 0;
                function u() {
                    return 0 == c && (l = l << 8 | e[t++],
                    c = 8),
                    l >> --c & 1
                }
                let d = 2147483648 - 1
                  , h = 0;
                for (let e = 0; e < 31; e++)
                    h = h << 1 | u();
                let p = []
                  , f = 0
                  , m = 2147483648;
                for (; ; ) {
                    let e = Math.floor(((h - f + 1) * i - 1) / m)
                      , t = 0
                      , n = a;
                    for (; n - t > 1; ) {
                        let a = t + n >>> 1;
                        e < r[a] ? n = a : t = a
                    }
                    if (0 == t)
                        break;
                    p.push(t);
                    let s = f + Math.floor(m * r[t] / i)
                      , o = f + Math.floor(m * r[t + 1] / i) - 1;
                    for (; ((s ^ o) & 1073741824) == 0; )
                        h = h << 1 & d | u(),
                        s = s << 1 & d,
                        o = o << 1 & d | 1;
                    for (; s & ~o & 536870912; )
                        h = 1073741824 & h | h << 1 & d >>> 1 | u(),
                        s = s << 1 ^ 1073741824,
                        o = (1073741824 ^ o) << 1 | 1073741825;
                    f = s,
                    m = 1 + o - s
                }
                let A = a - 4;
                return p.map(t => {
                    switch (t - A) {
                    case 3:
                        return A + 65792 + (e[o++] << 16 | e[o++] << 8 | e[o++]);
                    case 2:
                        return A + 256 + (e[o++] << 8 | e[o++]);
                    case 1:
                        return A + e[o++];
                    default:
                        return t - 1
                    }
                }
                )
            }(function(e) {
                let t = [];
                [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach( (e, n) => t[e.charCodeAt(0)] = n);
                let n = e.length
                  , a = new Uint8Array(6 * n >> 3);
                for (let i = 0, r = 0, s = 0, o = 0; i < n; i++)
                    o = o << 6 | t[e.charCodeAt(i)],
                    (s += 6) >= 8 && (a[r++] = o >> (s -= 8));
                return a
            }(e)),
            n = 0,
            () => t[n++]
        }
        function te(e, t=0) {
            let n = [];
            for (; ; ) {
                let a = e()
                  , i = e();
                if (!i)
                    break;
                t += a;
                for (let e = 0; e < i; e++)
                    n.push(t + e);
                t += i + 1
            }
            return n
        }
        function tt(e) {
            return ta( () => {
                let t = te(e);
                if (t.length)
                    return t
            }
            )
        }
        function tn(e) {
            let t = [];
            for (; ; ) {
                let n = e();
                if (0 == n)
                    break;
                t.push(function(e, t) {
                    let n = 1 + t()
                      , a = t()
                      , i = ta(t);
                    return ti(i.length, 1 + e, t).flatMap( (e, t) => {
                        let[r,...s] = e;
                        return Array(i[t]).fill().map( (e, t) => {
                            let i = t * a;
                            return [r + t * n, s.map(e => e + i)]
                        }
                        )
                    }
                    )
                }(n, e))
            }
            for (; ; ) {
                let n = e() - 1;
                if (n < 0)
                    break;
                t.push(ti(1 + e(), 1 + n, e).map(e => [e[0], e.slice(1)]))
            }
            return t.flat()
        }
        function ta(e) {
            let t = [];
            for (; ; ) {
                let n = e(t.length);
                if (!n)
                    break;
                t.push(n)
            }
            return t
        }
        function ti(e, t, n) {
            let a = Array(e).fill().map( () => []);
            for (let i = 0; i < t; i++)
                (function(e, t) {
                    let n = Array(e);
                    for (let i = 0, r = 0; i < e; i++) {
                        var a;
                        n[i] = r += 1 & (a = t()) ? ~a >> 1 : a >> 1
                    }
                    return n
                }
                )(e, n).forEach( (e, t) => a[t].push(e));
            return a
        }
        function tr(e) {
            return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`
        }
        function ts(e) {
            let t = e.length;
            if (t < 4096)
                return String.fromCodePoint(...e);
            let n = [];
            for (let a = 0; a < t; )
                n.push(String.fromCodePoint(...e.slice(a, a += 4096)));
            return n.join("")
        }
        function to(e, t) {
            let n = e.length
              , a = n - t.length;
            for (let i = 0; 0 == a && i < n; i++)
                a = e[i] - t[i];
            return a
        }
        function tc(e) {
            return e >> 24 & 255
        }
        function tl(e) {
            return 16777215 & e
        }
        function tu(e) {
            return e >= 44032 && e < 55204
        }
        function td(e) {
            i || function() {
                let e = e7("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");
                for (let[t,n] of (i = new Map(tt(e).flatMap( (e, t) => e.map(e => [e, t + 1 << 24]))),
                r = new Set(te(e)),
                s = new Map,
                o = new Map,
                tn(e))) {
                    if (!r.has(t) && 2 == n.length) {
                        let[e,a] = n
                          , i = o.get(e);
                        i || (i = new Map,
                        o.set(e, i)),
                        i.set(a, t)
                    }
                    s.set(t, n.reverse())
                }
            }();
            let t = []
              , n = []
              , a = !1;
            function c(e) {
                let n = i.get(e);
                n && (a = !0,
                e |= n),
                t.push(e)
            }
            for (let a of e)
                for (; ; ) {
                    if (a < 128)
                        t.push(a);
                    else if (tu(a)) {
                        let e = a - 44032
                          , t = e / 588 | 0
                          , n = e % 588 / 28 | 0
                          , i = e % 28;
                        c(4352 + t),
                        c(4449 + n),
                        i > 0 && c(4519 + i)
                    } else {
                        let e = s.get(a);
                        e ? n.push(...e) : c(a)
                    }
                    if (!n.length)
                        break;
                    a = n.pop()
                }
            if (a && t.length > 1) {
                let e = tc(t[0]);
                for (let n = 1; n < t.length; n++) {
                    let a = tc(t[n]);
                    if (0 == a || e <= a) {
                        e = a;
                        continue
                    }
                    let i = n - 1;
                    for (; ; ) {
                        let n = t[i + 1];
                        if (t[i + 1] = t[i],
                        t[i] = n,
                        !i || (e = tc(t[--i])) <= a)
                            break
                    }
                    e = tc(t[n])
                }
            }
            return t
        }
        function th(e) {
            return function(e) {
                let t = []
                  , n = []
                  , a = -1
                  , i = 0;
                for (let r of e) {
                    let e = tc(r)
                      , s = tl(r);
                    if (-1 == a)
                        0 == e ? a = s : t.push(s);
                    else if (i > 0 && i >= e)
                        0 == e ? (t.push(a, ...n),
                        n.length = 0,
                        a = s) : n.push(s),
                        i = e;
                    else {
                        let r = function(e, t) {
                            if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                                return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                            if (tu(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                                return e + (t - 4519);
                            {
                                let n = o.get(e);
                                return n && (n = n.get(t)) ? n : -1
                            }
                        }(a, s);
                        r >= 0 ? a = r : 0 == i && 0 == e ? (t.push(a),
                        a = s) : (n.push(s),
                        i = e)
                    }
                }
                return a >= 0 && t.push(a, ...n),
                t
            }(td(e))
        }
        let tp = e => Array.from(e);
        function tf(e, t) {
            return e.P.has(t) || e.Q.has(t)
        }
        class tm extends Array {
            get is_emoji() {
                return !0
            }
        }
        function tA() {
            let e, t;
            if (c)
                return;
            let n = e7("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")
              , a = () => te(n)
              , i = () => new Set(a())
              , r = (e, t) => t.forEach(t => e.add(t));
            c = new Map(tn(n)),
            l = i(),
            u = a(),
            d = new Set(a().map(e => u[e])),
            u = new Set(u),
            h = i(),
            i();
            let s = tt(n)
              , o = n()
              , b = () => {
                let e = new Set;
                return a().forEach(t => r(e, s[t])),
                r(e, a()),
                e
            }
            ;
            p = ta(e => {
                let t = ta(n).map(e => e + 96);
                if (t.length) {
                    let a = e >= o;
                    return t[0] -= 32,
                    t = ts(t),
                    a && (t = `Restricted[${t}]`),
                    {
                        N: t,
                        P: b(),
                        Q: b(),
                        M: !n(),
                        R: a
                    }
                }
            }
            ),
            f = i(),
            m = new Map;
            let y = a().concat(tp(f)).sort( (e, t) => e - t);
            for (let {V: e, M: t} of (y.forEach( (e, t) => {
                let a = n()
                  , i = y[t] = a ? y[t - a] : {
                    V: [],
                    M: new Map
                };
                i.V.push(e),
                f.has(e) || m.set(e, i)
            }
            ),
            new Set(m.values()))) {
                let n = [];
                for (let t of e) {
                    let e = p.filter(e => tf(e, t))
                      , a = n.find( ({G: t}) => e.some(e => t.has(e)));
                    a || (a = {
                        G: new Set,
                        V: []
                    },
                    n.push(a)),
                    a.V.push(t),
                    r(a.G, e)
                }
                let a = n.flatMap(e => tp(e.G));
                for (let {G: e, V: i} of n) {
                    let n = new Set(a.filter(t => !e.has(t)));
                    for (let e of i)
                        t.set(e, n)
                }
            }
            A = new Set;
            let C = new Set
              , v = e => A.has(e) ? C.add(e) : A.add(e);
            for (let e of p) {
                for (let t of e.P)
                    v(t);
                for (let t of e.Q)
                    v(t)
            }
            for (let e of A)
                m.has(e) || C.has(e) || m.set(e, 1);
            for (let a of (r(A, td(A).map(tl)),
            w = (e = [],
            t = te(n),
            function t({S: n, B: a}, i, r) {
                if (!(4 & n) || r !== i[i.length - 1])
                    for (let s of (2 & n && (r = i[i.length - 1]),
                    1 & n && e.push(i),
                    a))
                        for (let e of s.Q)
                            t(s, [...i, e], r)
            }(function e(a) {
                return {
                    S: n(),
                    B: ta( () => {
                        let a = te(n).map(e => t[e]);
                        if (a.length)
                            return e(a)
                    }
                    ),
                    Q: a
                }
            }([]), []),
            e).map(e => tm.from(e)).sort(to),
            g = new Map,
            w)) {
                let e = [g];
                for (let t of a) {
                    let n = e.map(e => {
                        let n = e.get(t);
                        return n || (n = new Map,
                        e.set(t, n)),
                        n
                    }
                    );
                    65039 === t ? e.push(...n) : e = n
                }
                for (let t of e)
                    t.V = a
            }
        }
        function tw(e) {
            return (ty(e) ? "" : `${tg(tb([e]))} `) + tr(e)
        }
        function tg(e) {
            return `"${e}"\u200E`
        }
        function tb(e, t=1 / 0, n=tr) {
            var a;
            let i = [];
            a = e[0],
            tA(),
            u.has(a) && i.push("◌"),
            e.length > t && (t >>= 1,
            e = [...e.slice(0, t), 8230, ...e.slice(-t)]);
            let r = 0
              , s = e.length;
            for (let t = 0; t < s; t++) {
                let a = e[t];
                ty(a) && (i.push(ts(e.slice(r, t))),
                i.push(n(a)),
                r = t + 1)
            }
            return i.push(ts(e.slice(r, s))),
            i.join("")
        }
        function ty(e) {
            return tA(),
            h.has(e)
        }
        function tC(e) {
            return Error(`disallowed character: ${tw(e)}`)
        }
        function tv(e, t) {
            let n = tw(t)
              , a = p.find(e => e.P.has(t));
            return a && (n = `${a.N} ${n}`),
            Error(`illegal mixture: ${e.N} + ${n}`)
        }
        function tE(e) {
            return Error(`illegal placement: ${e}`)
        }
        function tI(e) {
            return e.filter(e => 65039 != e)
        }
        function tN(e) {
            var t;
            return (t = function(e, t, n) {
                if (!e)
                    return [];
                tA();
                let a = 0;
                return e.split(".").map(e => {
                    let i = function(e) {
                        let t = [];
                        for (let n = 0, a = e.length; n < a; ) {
                            let a = e.codePointAt(n);
                            n += a < 65536 ? 1 : 2,
                            t.push(a)
                        }
                        return t
                    }(e)
                      , r = {
                        input: i,
                        offset: a
                    };
                    a += i.length + 1;
                    try {
                        let e, a = r.tokens = function(e, t, n) {
                            let a = []
                              , i = [];
                            for (e = e.slice().reverse(); e.length; ) {
                                let r = function(e, t) {
                                    let n, a = g, i = e.length;
                                    for (; i && (a = a.get(e[--i])); ) {
                                        let {V: t} = a;
                                        t && (n = t,
                                        e.length = i)
                                    }
                                    return n
                                }(e);
                                if (r)
                                    i.length && (a.push(t(i)),
                                    i = []),
                                    a.push(n(r));
                                else {
                                    let t = e.pop();
                                    if (A.has(t))
                                        i.push(t);
                                    else {
                                        let e = c.get(t);
                                        if (e)
                                            i.push(...e);
                                        else if (!l.has(t))
                                            throw tC(t)
                                    }
                                }
                            }
                            return i.length && a.push(t(i)),
                            a
                        }(i, t, n), s = a.length;
                        if (!s)
                            throw Error("empty label");
                        let o = r.output = a.flat();
                        if (!function(e) {
                            for (let t = e.lastIndexOf(95); t > 0; )
                                if (95 !== e[--t])
                                    throw Error("underscore allowed only at start")
                        }(o),
                        !(r.emoji = s > 1 || a[0].is_emoji) && o.every(e => e < 128))
                            !function(e) {
                                if (e.length >= 4 && 45 == e[2] && 45 == e[3])
                                    throw Error(`invalid label extension: "${ts(e.slice(0, 4))}"`)
                            }(o),
                            e = "ASCII";
                        else {
                            let t = a.flatMap(e => e.is_emoji ? [] : e);
                            if (t.length) {
                                if (u.has(o[0]))
                                    throw tE("leading combining mark");
                                for (let e = 1; e < s; e++) {
                                    let t = a[e];
                                    if (!t.is_emoji && u.has(t[0]))
                                        throw tE(`emoji + combining mark: "${ts(a[e - 1])} + ${tb([t[0]])}"`)
                                }
                                !function(e) {
                                    let t = e[0]
                                      , n = e9.get(t);
                                    if (n)
                                        throw tE(`leading ${n}`);
                                    let a = e.length
                                      , i = -1;
                                    for (let r = 1; r < a; r++) {
                                        t = e[r];
                                        let a = e9.get(t);
                                        if (a) {
                                            if (i == r)
                                                throw tE(`${n} + ${a}`);
                                            i = r + 1,
                                            n = a
                                        }
                                    }
                                    if (i == a)
                                        throw tE(`trailing ${n}`)
                                }(o);
                                let n = tp(new Set(t))
                                  , [i] = function(e) {
                                    let t = p;
                                    for (let n of e) {
                                        let e = t.filter(e => tf(e, n));
                                        if (!e.length) {
                                            if (p.some(e => tf(e, n)))
                                                throw tv(t[0], n);
                                            throw tC(n)
                                        }
                                        if (t = e,
                                        1 == e.length)
                                            break
                                    }
                                    return t
                                }(n);
                                (function(e, t) {
                                    for (let n of t)
                                        if (!tf(e, n))
                                            throw tv(e, n);
                                    if (e.M) {
                                        let e = td(t).map(tl);
                                        for (let t = 1, n = e.length; t < n; t++)
                                            if (d.has(e[t])) {
                                                let a = t + 1;
                                                for (let i; a < n && d.has(i = e[a]); a++)
                                                    for (let n = t; n < a; n++)
                                                        if (e[n] == i)
                                                            throw Error(`duplicate non-spacing marks: ${tw(i)}`);
                                                if (a - t > 4)
                                                    throw Error(`excessive non-spacing marks: ${tg(tb(e.slice(t - 1, a)))} (${a - t}/4)`);
                                                t = a
                                            }
                                    }
                                }
                                )(i, t),
                                function(e, t) {
                                    let n;
                                    let a = [];
                                    for (let e of t) {
                                        let t = m.get(e);
                                        if (1 === t)
                                            return;
                                        if (t) {
                                            let a = t.M.get(e);
                                            if (!(n = n ? n.filter(e => a.has(e)) : tp(a)).length)
                                                return
                                        } else
                                            a.push(e)
                                    }
                                    if (n) {
                                        for (let t of n)
                                            if (a.every(e => tf(t, e)))
                                                throw Error(`whole-script confusable: ${e.N}/${t.N}`)
                                    }
                                }(i, n),
                                e = i.N
                            } else
                                e = "Emoji"
                        }
                        r.type = e
                    } catch (e) {
                        r.error = e
                    }
                    return r
                }
                )
            }(e, th, tI)).map( ({input: e, error: n, output: a}) => {
                if (n) {
                    let a = n.message;
                    throw Error(1 == t.length ? a : `Invalid label ${tg(tb(e, 63))}: ${a}`)
                }
                return ts(a)
            }
            ).join(".")
        }
        function tx(e, t, n) {
            let a, i, r, s, o, c, l, u;
            let d = e.isNewChainsStale ?? !0;
            return e => ({
                id: "walletConnect",
                name: "WalletConnect",
                type: tx.type,
                async setup() {
                    let e = await this.getProvider().catch( () => null);
                    e && (o || (o = this.onConnect.bind(this),
                    e.on("connect", o)),
                    l || (l = this.onSessionDelete.bind(this),
                    e.on("session_delete", l)))
                },
                async connect({...e}={}) {
                    try {
                        let t = await this.getProvider();
                        if (!t)
                            throw new Q.M;
                        c || (c = this.onDisplayUri,
                        t.on("display_uri", c));
                        let a = await this.isChainsStale();
                        if (t.session && a && await t.disconnect(),
                        !t.session || a) {
                            let a = e2.s.createNamespaces(n);
                            await t.connect({
                                optionalNamespaces: a,
                                ..."pairingTopic"in e ? {
                                    pairingTopic: e.pairingTopic
                                } : {}
                            }),
                            this.setRequestedChainsIds(n.map(e => Number(e.id)))
                        }
                        let i = (await t.enable()).map(e => (0,
                        N.K)(e))
                          , d = await this.getChainId();
                        return c && (t.removeListener("display_uri", c),
                        c = void 0),
                        o && (t.removeListener("connect", o),
                        o = void 0),
                        r || (r = this.onAccountsChanged.bind(this),
                        t.on("accountsChanged", r)),
                        s || (s = this.onChainChanged.bind(this),
                        t.on("chainChanged", s)),
                        u || (u = this.onDisconnect.bind(this),
                        t.on("disconnect", u)),
                        l || (l = this.onSessionDelete.bind(this),
                        t.on("session_delete", l)),
                        {
                            accounts: i,
                            chainId: d
                        }
                    } catch (e) {
                        if (/(user rejected|connection request reset)/i.test(e?.message))
                            throw new x.ab(e);
                        throw e
                    }
                },
                async disconnect() {
                    let e = await this.getProvider();
                    try {
                        await e?.disconnect()
                    } catch (e) {
                        if (!/No matching key/i.test(e.message))
                            throw e
                    } finally {
                        s && (e?.removeListener("chainChanged", s),
                        s = void 0),
                        u && (e?.removeListener("disconnect", u),
                        u = void 0),
                        o || (o = this.onConnect.bind(this),
                        e?.on("connect", o)),
                        r && (e?.removeListener("accountsChanged", r),
                        r = void 0),
                        l && (e?.removeListener("session_delete", l),
                        l = void 0),
                        this.setRequestedChainsIds([])
                    }
                },
                async getAccounts() {
                    let e = await this.getProvider();
                    if (!e?.session?.namespaces)
                        return [];
                    let t = e?.session?.namespaces.eip155?.accounts;
                    return t?.map(e => e.split(":")[2]) ?? []
                },
                async getProvider({chainId: e}={}) {
                    async function r() {
                        if (!n.map(e => Number(e.id)).length)
                            return;
                        let e = t.universalAdapter?.getWalletConnectProvider();
                        if (!e)
                            throw Error("Provider not found");
                        return e
                    }
                    a || (i || (i = r()),
                    a = await i,
                    a?.events.setMaxListeners(Number.POSITIVE_INFINITY));
                    let s = t.getCaipNetwork()?.id;
                    if (e && s !== e) {
                        let t = eZ.MO.getStoredActiveCaipNetwork();
                        t && t.chainNamespace === e6.bq.CHAIN.EVM ? await this.switchChain?.({
                            chainId: Number(t.id)
                        }) : await this.switchChain?.({
                            chainId: e
                        })
                    }
                    return a
                },
                async getChainId() {
                    let e = t.getCaipNetwork()?.id;
                    if (e)
                        return e;
                    let a = await this.getProvider()
                      , i = a.session?.namespaces.eip155?.chains?.[0]
                      , r = n.find(e => e.id === i);
                    return r?.id
                },
                async isAuthorized() {
                    try {
                        let[e,t] = await Promise.all([this.getAccounts(), this.getProvider()]);
                        if (!e.length)
                            return !1;
                        if (await this.isChainsStale() && t.session)
                            return await t.disconnect().catch( () => {}
                            ),
                            !1;
                        return !0
                    } catch {
                        return !1
                    }
                },
                async switchChain({addEthereumChainParameter: t, chainId: a}) {
                    let i = await this.getProvider();
                    if (!i)
                        throw new Q.M;
                    let r = n.find(e => e.id === a);
                    if (!r)
                        throw new x.x3(new P.X4);
                    try {
                        r?.caipNetworkId && i.setDefaultChain(r?.caipNetworkId),
                        await i.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: (0,
                                D.eC)(a)
                            }]
                        }),
                        e.emitter.emit("change", {
                            chainId: Number(a)
                        });
                        let t = await this.getRequestedChainsIds();
                        return this.setRequestedChainsIds([...t, a]),
                        {
                            ...r,
                            id: r.id
                        }
                    } catch (e) {
                        if (/(?:user rejected)/iu.test(e.message))
                            throw new x.ab(e);
                        try {
                            let e = {
                                blockExplorerUrls: t?.blockExplorerUrls ? t.blockExplorerUrls : r.blockExplorers?.default.url ? [r.blockExplorers?.default.url] : [],
                                chainId: (0,
                                D.eC)(a),
                                chainName: r.name,
                                iconUrls: t?.iconUrls,
                                nativeCurrency: r.nativeCurrency,
                                rpcUrls: r.rpcUrls.default.http
                            };
                            await i.request({
                                method: "wallet_addEthereumChain",
                                params: [e]
                            });
                            let n = await this.getRequestedChainsIds();
                            return this.setRequestedChainsIds([...n, a]),
                            {
                                ...r,
                                id: r.id
                            }
                        } catch (e) {
                            throw new x.ab(e)
                        }
                    }
                },
                onAccountsChanged(t) {
                    0 === t.length ? this.onDisconnect() : e.emitter.emit("change", {
                        accounts: t.map(e => (0,
                        N.K)(e))
                    })
                },
                onChainChanged(t) {
                    let n = Number(t);
                    e.emitter.emit("change", {
                        chainId: n
                    })
                },
                async onConnect(t) {
                    let n = Number(t.chainId)
                      , a = await this.getAccounts();
                    e.emitter.emit("connect", {
                        accounts: a,
                        chainId: n
                    })
                },
                async onDisconnect(t) {
                    this.setRequestedChainsIds([]),
                    e.emitter.emit("disconnect");
                    let n = await this.getProvider();
                    r && (n.removeListener("accountsChanged", r),
                    r = void 0),
                    s && (n.removeListener("chainChanged", s),
                    s = void 0),
                    u && (n.removeListener("disconnect", u),
                    u = void 0),
                    l && (n.removeListener("session_delete", l),
                    l = void 0),
                    o || (o = this.onConnect.bind(this),
                    n.on("connect", o))
                },
                onDisplayUri(t) {
                    e.emitter.emit("message", {
                        type: "display_uri",
                        data: t
                    })
                },
                onSessionDelete() {
                    this.onDisconnect()
                },
                getNamespaceChainsIds() {
                    if (!a?.session?.namespaces)
                        return [];
                    let e = a?.session?.namespaces.eip155?.accounts;
                    return e?.map(e => Number.parseInt(e.split(":")[1] ?? "")) ?? []
                },
                async getRequestedChainsIds() {
                    return [...new Set(await e.storage?.getItem(this.requestedChainsStorageKey) ?? [])]
                },
                async isChainsStale() {
                    if (!d)
                        return !1;
                    let t = e.chains.map(e => e.id)
                      , n = this.getNamespaceChainsIds();
                    if (n.length && !n.some(e => t.includes(e)))
                        return !1;
                    let a = await this.getRequestedChainsIds();
                    return !t.every(e => a.includes(Number(e)))
                },
                async setRequestedChainsIds(t) {
                    await e.storage?.setItem(this.requestedChainsStorageKey, t)
                },
                get requestedChainsStorageKey() {
                    return `${this.id}.requestedChains`
                }
            })
        }
        function tk(e={}) {
            let t, a, i, r, s, o, c, l, u;
            return "3" === e.version || e.headlessMode ? o => ({
                id: "coinbaseWalletSDK",
                name: "Coinbase Wallet",
                supportsSimulation: !0,
                type: tk.type,
                async connect({chainId: e}={}) {
                    try {
                        let t = await this.getProvider()
                          , n = (await t.request({
                            method: "eth_requestAccounts"
                        })).map(e => (0,
                        N.K)(e));
                        i || (i = this.onAccountsChanged.bind(this),
                        t.on("accountsChanged", i)),
                        r || (r = this.onChainChanged.bind(this),
                        t.on("chainChanged", r)),
                        s || (s = this.onDisconnect.bind(this),
                        t.on("disconnect", s));
                        let a = await this.getChainId();
                        if (e && a !== e) {
                            let t = await this.switchChain({
                                chainId: e
                            }).catch(e => {
                                if (e.code === x.ab.code)
                                    throw e;
                                return {
                                    id: a
                                }
                            }
                            );
                            a = t?.id ?? a
                        }
                        return {
                            accounts: n,
                            chainId: a
                        }
                    } catch (e) {
                        if (/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))
                            throw new x.ab(e);
                        throw e
                    }
                },
                async disconnect() {
                    let e = await this.getProvider();
                    i && (e.removeListener("accountsChanged", i),
                    i = void 0),
                    r && (e.removeListener("chainChanged", r),
                    r = void 0),
                    s && (e.removeListener("disconnect", s),
                    s = void 0),
                    e.disconnect(),
                    e.close()
                },
                async getAccounts() {
                    let e = await this.getProvider();
                    return (await e.request({
                        method: "eth_accounts"
                    })).map(e => (0,
                    N.K)(e))
                },
                async getChainId() {
                    let e = await this.getProvider();
                    return Number(await e.request({
                        method: "eth_chainId"
                    }))
                },
                async getProvider() {
                    if (!a) {
                        t = new (await (async () => {
                            let {default: e} = await Promise.all([n.e(3121), n.e(8968), n.e(9381), n.e(2753)]).then(n.t.bind(n, 9381, 19));
                            return "function" != typeof e && "function" == typeof e.default ? e.default : e
                        }
                        )())({
                            ...e,
                            reloadOnDisconnect: !1
                        });
                        let i = t.walletExtension?.getChainId()
                          , r = o.chains.find(t => e.chainId ? t.id === e.chainId : t.id === i) || o.chains[0]
                          , s = e.chainId || r?.id
                          , c = e.jsonRpcUrl || r?.rpcUrls.default.http[0];
                        a = t.makeWeb3Provider(c, s)
                    }
                    return a
                },
                async isAuthorized() {
                    try {
                        return !!(await this.getAccounts()).length
                    } catch {
                        return !1
                    }
                },
                async switchChain({addEthereumChainParameter: e, chainId: t}) {
                    let n = o.chains.find(e => e.id === t);
                    if (!n)
                        throw new x.x3(new P.X4);
                    let a = await this.getProvider();
                    try {
                        return await a.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: (0,
                                D.eC)(n.id)
                            }]
                        }),
                        n
                    } catch (i) {
                        if (4902 === i.code)
                            try {
                                let i, r;
                                i = e?.blockExplorerUrls ? e.blockExplorerUrls : n.blockExplorers?.default.url ? [n.blockExplorers?.default.url] : [],
                                r = e?.rpcUrls?.length ? e.rpcUrls : [n.rpcUrls.default?.http[0] ?? ""];
                                let s = {
                                    blockExplorerUrls: i,
                                    chainId: (0,
                                    D.eC)(t),
                                    chainName: e?.chainName ?? n.name,
                                    iconUrls: e?.iconUrls,
                                    nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                                    rpcUrls: r
                                };
                                return await a.request({
                                    method: "wallet_addEthereumChain",
                                    params: [s]
                                }),
                                n
                            } catch (e) {
                                throw new x.ab(e)
                            }
                        throw new x.x3(i)
                    }
                },
                onAccountsChanged(e) {
                    0 === e.length ? this.onDisconnect() : o.emitter.emit("change", {
                        accounts: e.map(e => (0,
                        N.K)(e))
                    })
                },
                onChainChanged(e) {
                    let t = Number(e);
                    o.emitter.emit("change", {
                        chainId: t
                    })
                },
                async onDisconnect(e) {
                    o.emitter.emit("disconnect");
                    let t = await this.getProvider();
                    i && (t.removeListener("accountsChanged", i),
                    i = void 0),
                    r && (t.removeListener("chainChanged", r),
                    r = void 0),
                    s && (t.removeListener("disconnect", s),
                    s = void 0)
                }
            }) : t => ({
                id: "coinbaseWalletSDK",
                name: "Coinbase Wallet",
                rdns: "com.coinbase.wallet",
                supportsSimulation: !0,
                type: tk.type,
                async connect({chainId: e}={}) {
                    try {
                        let t = await this.getProvider()
                          , n = (await t.request({
                            method: "eth_requestAccounts"
                        })).map(e => (0,
                        N.K)(e));
                        c || (c = this.onAccountsChanged.bind(this),
                        t.on("accountsChanged", c)),
                        l || (l = this.onChainChanged.bind(this),
                        t.on("chainChanged", l)),
                        u || (u = this.onDisconnect.bind(this),
                        t.on("disconnect", u));
                        let a = await this.getChainId();
                        if (e && a !== e) {
                            let t = await this.switchChain({
                                chainId: e
                            }).catch(e => {
                                if (e.code === x.ab.code)
                                    throw e;
                                return {
                                    id: a
                                }
                            }
                            );
                            a = t?.id ?? a
                        }
                        return {
                            accounts: n,
                            chainId: a
                        }
                    } catch (e) {
                        if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message))
                            throw new x.ab(e);
                        throw e
                    }
                },
                async disconnect() {
                    let e = await this.getProvider();
                    c && (e.removeListener("accountsChanged", c),
                    c = void 0),
                    l && (e.removeListener("chainChanged", l),
                    l = void 0),
                    u && (e.removeListener("disconnect", u),
                    u = void 0),
                    e.disconnect(),
                    e.close?.()
                },
                async getAccounts() {
                    let e = await this.getProvider();
                    return (await e.request({
                        method: "eth_accounts"
                    })).map(e => (0,
                    N.K)(e))
                },
                async getChainId() {
                    let e = await this.getProvider();
                    return Number(await e.request({
                        method: "eth_chainId"
                    }))
                },
                getProvider: async () => (o || (o = new (await (async () => {
                    let {default: e} = await n.e(6080).then(n.t.bind(n, 86080, 19));
                    return "function" != typeof e && "function" == typeof e.default ? e.default : e
                }
                )())({
                    ...e,
                    appChainIds: t.chains.map(e => e.id)
                }).makeWeb3Provider({
                    ...e,
                    options: e.preference ?? "all"
                })),
                o),
                async isAuthorized() {
                    try {
                        return !!(await this.getAccounts()).length
                    } catch {
                        return !1
                    }
                },
                async switchChain({addEthereumChainParameter: e, chainId: n}) {
                    let a = t.chains.find(e => e.id === n);
                    if (!a)
                        throw new x.x3(new P.X4);
                    let i = await this.getProvider();
                    try {
                        return await i.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: (0,
                                D.eC)(a.id)
                            }]
                        }),
                        a
                    } catch (t) {
                        if (4902 === t.code)
                            try {
                                let t, r;
                                t = e?.blockExplorerUrls ? e.blockExplorerUrls : a.blockExplorers?.default.url ? [a.blockExplorers?.default.url] : [],
                                r = e?.rpcUrls?.length ? e.rpcUrls : [a.rpcUrls.default?.http[0] ?? ""];
                                let s = {
                                    blockExplorerUrls: t,
                                    chainId: (0,
                                    D.eC)(n),
                                    chainName: e?.chainName ?? a.name,
                                    iconUrls: e?.iconUrls,
                                    nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                                    rpcUrls: r
                                };
                                return await i.request({
                                    method: "wallet_addEthereumChain",
                                    params: [s]
                                }),
                                a
                            } catch (e) {
                                throw new x.ab(e)
                            }
                        throw new x.x3(t)
                    }
                },
                onAccountsChanged(e) {
                    0 === e.length ? this.onDisconnect() : t.emitter.emit("change", {
                        accounts: e.map(e => (0,
                        N.K)(e))
                    })
                },
                onChainChanged(e) {
                    let n = Number(e);
                    t.emitter.emit("change", {
                        chainId: n
                    })
                },
                async onDisconnect(e) {
                    t.emitter.emit("disconnect");
                    let n = await this.getProvider();
                    c && (n.removeListener("accountsChanged", c),
                    c = void 0),
                    l && (n.removeListener("chainChanged", l),
                    l = void 0),
                    u && (n.removeListener("disconnect", u),
                    u = void 0)
                }
            })
        }
        tx.type = "walletConnect",
        tk.type = "coinbaseWallet";
        class tB {
            constructor() {}
            static getInstance({projectId: e, chainId: t, onTimeout: n}) {
                return tB.instance || (tB.instance = new e4.Sd({
                    projectId: e,
                    chainId: t,
                    onTimeout: n
                })),
                tB.instance
            }
        }
        var tD = n(37099);
        let tP = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions"];
        class tQ {
            constructor(e) {
                if (this.appKit = void 0,
                this.options = void 0,
                this.chainNamespace = e6.bq.CHAIN.EVM,
                this.defaultCaipNetwork = void 0,
                this.tokens = e5.gk.getCaipTokens(this.options?.tokens),
                this.siweControllerClient = this.options?.siweConfig,
                this.adapterType = "wagmi",
                !e.projectId)
                    throw Error(e5.jD.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED.shortMessage);
                this.caipNetworks = e5.fZ.extendCaipNetworks(e.networks, {
                    projectId: e.projectId,
                    customNetworkImageUrls: {}
                }),
                this.wagmiChains = this.caipNetworks.filter(e => e.chainNamespace === e6.bq.CHAIN.EVM);
                let t = this.wagmiChains.map(e => [e.id, e5.fZ.getViemTransport(e)]);
                Object.entries(e.transports ?? {}).forEach( ([e,n]) => {
                    let a = t.findIndex( ([t]) => t === Number(e));
                    -1 === a ? t.push([Number(e), n]) : t[a] = [Number(e), n]
                }
                );
                let n = Object.fromEntries(t)
                  , i = [...e.connectors ?? []];
                this.wagmiConfig = function(e) {
                    let t;
                    let {multiInjectedProviderDiscovery: n=!0, storage: i=function(e) {
                        let {deserialize: t=K, key: n="wagmi", serialize: a=G, storage: i=H} = e;
                        function r(e) {
                            return e instanceof Promise ? e.then(e => e).catch( () => null) : e
                        }
                        return {
                            ...i,
                            key: n,
                            async getItem(e, a) {
                                let s = i.getItem(`${n}.${e}`)
                                  , o = await r(s);
                                return o ? t(o) ?? null : a ?? null
                            },
                            async setItem(e, t) {
                                let s = `${n}.${e}`;
                                null === t ? await r(i.removeItem(s)) : await r(i.setItem(s, a(t)))
                            },
                            async removeItem(e) {
                                await r(i.removeItem(`${n}.${e}`))
                            }
                        }
                    }({
                        storage: "undefined" != typeof window && window.localStorage ? window.localStorage : H
                    }), syncConnectedChain: r=!0, ssr: s=!1, ...o} = e
                      , c = "undefined" != typeof window && n ? function() {
                        let e = new Set
                          , t = []
                          , n = () => (function(e) {
                            if ("undefined" == typeof window)
                                return;
                            let t = t => e(t.detail);
                            return window.addEventListener("eip6963:announceProvider", t),
                            window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
                            () => window.removeEventListener("eip6963:announceProvider", t)
                        }
                        )(n => {
                            t.some( ({info: e}) => e.uuid === n.info.uuid) || (t = [...t, n],
                            e.forEach(e => e(t, {
                                added: [n]
                            })))
                        }
                        )
                          , a = n();
                        return {
                            _listeners: () => e,
                            clear() {
                                e.forEach(e => e([], {
                                    removed: [...t]
                                })),
                                t = []
                            },
                            destroy() {
                                this.clear(),
                                e.clear(),
                                a?.()
                            },
                            findProvider: ({rdns: e}) => t.find(t => t.info.rdns === e),
                            getProviders: () => t,
                            reset() {
                                this.clear(),
                                a?.(),
                                a = n()
                            },
                            subscribe: (n, {emitImmediately: a}={}) => (e.add(n),
                            a && n(t, {
                                added: t
                            }),
                            () => e.delete(n))
                        }
                    }() : void 0
                      , l = I( () => o.chains)
                      , u = I( () => {
                        let e = []
                          , t = new Set;
                        for (let n of o.connectors ?? []) {
                            let a = d(n);
                            e.push(a),
                            !s && a.rdns && t.add(a.rdns)
                        }
                        if (!s && c)
                            for (let n of c.getProviders())
                                t.has(n.info.rdns) || e.push(d(h(n)));
                        return e
                    }
                    );
                    function d(e) {
                        let t = new L(function(e=11) {
                            if (!a || J + e > 512) {
                                a = "",
                                J = 0;
                                for (let e = 0; e < 256; e++)
                                    a += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                            }
                            return a.substring(J, J++ + e)
                        }())
                          , n = {
                            ...e({
                                emitter: t,
                                chains: l.getState(),
                                storage: i,
                                transports: o.transports
                            }),
                            emitter: t,
                            uid: t.uid
                        };
                        return t.on("connect", C),
                        n.setup?.(),
                        n
                    }
                    function h(e) {
                        let {info: t} = e
                          , n = e.provider;
                        return S({
                            target: {
                                ...t,
                                id: t.rdns,
                                provider: n
                            }
                        })
                    }
                    let p = new Map;
                    function f() {
                        return {
                            chainId: l.getState()[0].id,
                            connections: new Map,
                            current: null,
                            status: "disconnected"
                        }
                    }
                    let m = "0.0.0-canary-";
                    t = q.i.startsWith(m) ? Number.parseInt(q.i.replace(m, "")) : Number.parseInt(q.i.split(".")[0] ?? "0");
                    let A = I(y(i ? v(f, {
                        migrate(e, n) {
                            if (n === t)
                                return e;
                            let a = f()
                              , i = w(e, a.chainId);
                            return {
                                ...a,
                                chainId: i
                            }
                        },
                        name: "store",
                        partialize: e => ({
                            connections: {
                                __type: "Map",
                                value: Array.from(e.connections.entries()).map( ([e,t]) => {
                                    let {id: n, name: a, type: i, uid: r} = t.connector;
                                    return [e, {
                                        ...t,
                                        connector: {
                                            id: n,
                                            name: a,
                                            type: i,
                                            uid: r
                                        }
                                    }]
                                }
                                )
                            },
                            chainId: e.chainId,
                            current: e.current
                        }),
                        merge(e, t) {
                            "object" == typeof e && e && "status"in e && delete e.status;
                            let n = w(e, t.chainId);
                            return {
                                ...t,
                                ...e,
                                chainId: n
                            }
                        },
                        skipHydration: s,
                        storage: i,
                        version: t
                    }) : f));
                    function w(e, t) {
                        return e && "object" == typeof e && "chainId"in e && "number" == typeof e.chainId && l.getState().some(t => t.id === e.chainId) ? e.chainId : t
                    }
                    function g(e) {
                        A.setState(t => {
                            let n = t.connections.get(e.uid);
                            return n ? {
                                ...t,
                                connections: new Map(t.connections).set(e.uid, {
                                    accounts: e.accounts ?? n.accounts,
                                    chainId: e.chainId ?? n.chainId,
                                    connector: n.connector
                                })
                            } : t
                        }
                        )
                    }
                    function C(e) {
                        "connecting" !== A.getState().status && "reconnecting" !== A.getState().status && A.setState(t => {
                            let n = u.getState().find(t => t.uid === e.uid);
                            return n ? (n.emitter.listenerCount("connect") && n.emitter.off("connect", g),
                            n.emitter.listenerCount("change") || n.emitter.on("change", g),
                            n.emitter.listenerCount("disconnect") || n.emitter.on("disconnect", E),
                            {
                                ...t,
                                connections: new Map(t.connections).set(e.uid, {
                                    accounts: e.accounts,
                                    chainId: e.chainId,
                                    connector: n
                                }),
                                current: e.uid,
                                status: "connected"
                            }) : t
                        }
                        )
                    }
                    function E(e) {
                        A.setState(t => {
                            let n = t.connections.get(e.uid);
                            if (n) {
                                let e = n.connector;
                                e.emitter.listenerCount("change") && n.connector.emitter.off("change", g),
                                e.emitter.listenerCount("disconnect") && n.connector.emitter.off("disconnect", E),
                                e.emitter.listenerCount("connect") || n.connector.emitter.on("connect", C)
                            }
                            if (t.connections.delete(e.uid),
                            0 === t.connections.size)
                                return {
                                    ...t,
                                    connections: new Map,
                                    current: null,
                                    status: "disconnected"
                                };
                            let a = t.connections.values().next().value;
                            return {
                                ...t,
                                connections: new Map(t.connections),
                                current: a.connector.uid
                            }
                        }
                        )
                    }
                    return A.setState(f()),
                    r && A.subscribe( ({connections: e, current: t}) => t ? e.get(t)?.chainId : void 0, e => {
                        if (l.getState().some(t => t.id === e))
                            return A.setState(t => ({
                                ...t,
                                chainId: e ?? t.chainId
                            }))
                    }
                    ),
                    c?.subscribe(e => {
                        let t = new Set
                          , n = new Set;
                        for (let e of u.getState())
                            t.add(e.id),
                            e.rdns && n.add(e.rdns);
                        let a = [];
                        for (let i of e) {
                            if (n.has(i.info.rdns))
                                continue;
                            let e = d(h(i));
                            t.has(e.id) || a.push(e)
                        }
                        (!i || A.persist.hasHydrated()) && u.setState(e => [...e, ...a], !0)
                    }
                    ),
                    {
                        get chains() {
                            return l.getState()
                        },
                        get connectors() {
                            return u.getState()
                        },
                        storage: i,
                        getClient: function(e={}) {
                            let t;
                            let n = e.chainId ?? A.getState().chainId
                              , a = l.getState().find(e => e.id === n);
                            if (e.chainId && !a)
                                throw new P.X4;
                            {
                                let e = p.get(A.getState().chainId);
                                if (e && !a)
                                    return e;
                                if (!a)
                                    throw new P.X4
                            }
                            {
                                let e = p.get(n);
                                if (e)
                                    return e
                            }
                            if (o.client)
                                t = o.client({
                                    chain: a
                                });
                            else {
                                let e = a.id
                                  , n = l.getState().map(e => e.id)
                                  , i = {};
                                for (let[t,a] of Object.entries(o))
                                    if ("chains" !== t && "client" !== t && "connectors" !== t && "transports" !== t) {
                                        if ("object" == typeof a) {
                                            if (e in a)
                                                i[t] = a[e];
                                            else {
                                                if (n.some(e => e in a))
                                                    continue;
                                                i[t] = a
                                            }
                                        } else
                                            i[t] = a
                                    }
                                t = (0,
                                b.e)({
                                    ...i,
                                    chain: a,
                                    batch: i.batch ?? {
                                        multicall: !0
                                    },
                                    transport: t => o.transports[e]({
                                        ...t,
                                        connectors: u
                                    })
                                })
                            }
                            return p.set(n, t),
                            t
                        },
                        get state() {
                            return A.getState()
                        },
                        setState(e) {
                            let t;
                            t = "function" == typeof e ? e(A.getState()) : e;
                            let n = f();
                            "object" != typeof t && (t = n),
                            Object.keys(n).some(e => !(e in t)) && (t = n),
                            A.setState(t, !0)
                        },
                        subscribe: (e, t, n) => A.subscribe(e, t, n ? {
                            ...n,
                            fireImmediately: n.emitImmediately
                        } : void 0),
                        _internal: {
                            mipd: c,
                            store: A,
                            ssr: !!s,
                            syncConnectedChain: r,
                            transports: o.transports,
                            chains: {
                                setState(e) {
                                    let t = "function" == typeof e ? e(l.getState()) : e;
                                    if (0 !== t.length)
                                        return l.setState(t, !0)
                                },
                                subscribe: e => l.subscribe(e)
                            },
                            connectors: {
                                providerDetailToConnector: h,
                                setup: d,
                                setState: e => u.setState("function" == typeof e ? e(u.getState()) : e, !0),
                                subscribe: e => u.subscribe(e)
                            },
                            events: {
                                change: g,
                                connect: C,
                                disconnect: E
                            }
                        }
                    }
                }({
                    ...e,
                    chains: this.wagmiChains,
                    transports: n,
                    connectors: i
                }),
                eZ.ChainController.subscribeKey("activeCaipAddress", e => {
                    let t = e?.startsWith("eip155:")
                      , n = eZ.ChainController.state.activeCaipNetwork
                      , a = n?.chainNamespace === this.chainNamespace;
                    n && t && a && this.setProfileAndBalance(eZ.j1.getPlainAddress(e), Number(n.id))
                }
                )
            }
            setCustomConnectors(e, t) {
                let n = [];
                !1 !== e.enableWalletConnect && n.push(tx(e, t, this.caipNetworks)),
                !1 !== e.enableInjected && n.push(S({
                    shimDisconnect: !0
                })),
                !1 !== e.enableCoinbase && n.push(tk({
                    version: "4",
                    appName: e.metadata?.name ?? "Unknown",
                    appLogoUrl: e.metadata?.icons[0] ?? "Unknown",
                    preference: e.coinbasePreference ?? "all"
                }));
                let a = e.features?.email === void 0 ? eZ.bq.DEFAULT_FEATURES.email : e.features?.email
                  , i = e.features?.socials ? e.features?.socials?.length > 0 : eZ.bq.DEFAULT_FEATURES.socials;
                (a || i) && n.push(function(e) {
                    let t = null;
                    function n(e) {
                        return e6.p1.parseEvmChainId(e) || 1
                    }
                    return a => ({
                        id: e5.bq.AUTH_CONNECTOR_ID,
                        name: "AppKit Auth",
                        type: "w3mAuth",
                        chain: e6.bq.CHAIN.EVM,
                        async connect(e={}) {
                            let a = await this.getProvider()
                              , i = e.chainId;
                            if (e.isReconnecting && !(i = a.getLastUsedChainId()))
                                throw Error("ChainId not found in provider");
                            let {address: r, chainId: s} = await a.connect({
                                chainId: i
                            });
                            t = r,
                            await a.getSmartAccountEnabledNetworks();
                            let o = n(s);
                            return {
                                accounts: [t],
                                account: t,
                                chainId: o,
                                chain: {
                                    id: o,
                                    unsuported: !1
                                }
                            }
                        },
                        async disconnect() {
                            let e = await this.getProvider();
                            await e.disconnect()
                        },
                        getAccounts: () => t ? (a.emitter.emit("change", {
                            accounts: [t]
                        }),
                        Promise.resolve([t])) : Promise.resolve([]),
                        async getProvider() {
                            return this.provider || (this.provider = tB.getInstance({
                                projectId: e.options.projectId,
                                onTimeout: () => {
                                    eZ.AlertController.open(e5.jD.ALERT_ERRORS.INVALID_APP_CONFIGURATION_SOCIALS, "error")
                                }
                            })),
                            Promise.resolve(this.provider)
                        },
                        async getChainId() {
                            let e = await this.getProvider()
                              , {chainId: t} = await e.getChainId();
                            return n(t)
                        },
                        async isAuthorized() {
                            let e = await this.getProvider()
                              , {isConnected: t} = await e.isConnected();
                            return t
                        },
                        async switchChain({chainId: e}) {
                            try {
                                let t = a.chains.find(t => t.id === e);
                                if (!t)
                                    throw new x.x3(Error("chain not found on connector."));
                                let n = await this.getProvider()
                                  , i = await n.connect({
                                    chainId: e
                                });
                                return a.emitter.emit("change", {
                                    chainId: Number(e),
                                    accounts: [i.address]
                                }),
                                t
                            } catch (e) {
                                if (e instanceof Error)
                                    throw new x.x3(e);
                                throw e
                            }
                        },
                        onAccountsChanged(e) {
                            0 === e.length ? this.onDisconnect() : a.emitter.emit("change", {
                                accounts: e.map(N.K)
                            })
                        },
                        onChainChanged(e) {
                            let t = Number(e);
                            a.emitter.emit("change", {
                                chainId: t
                            })
                        },
                        async onDisconnect(e) {
                            let t = await this.getProvider();
                            await t.disconnect()
                        }
                    })
                }({
                    chains: this.wagmiChains,
                    options: {
                        projectId: e.projectId
                    }
                })),
                n.forEach(e => {
                    let t = this.wagmiConfig._internal.connectors.setup(e);
                    this.wagmiConfig._internal.connectors.setState(e => [...e, t])
                }
                )
            }
            construct(e, t) {
                if (this.appKit = e,
                this.options = t,
                this.defaultCaipNetwork = t.defaultNetwork || t.networks?.[0],
                this.tokens = e5.gk.getCaipTokens(t.tokens),
                this.setCustomConnectors(t, e),
                !this.wagmiConfig)
                    throw Error("appkit:wagmiConfig - is undefined");
                this.networkControllerClient = {
                    switchCaipNetwork: async e => {
                        let t = e?.id;
                        t && this.wagmiConfig && await (0,
                        j.c)(this.wagmiConfig, {
                            chainId: t
                        })
                    }
                    ,
                    getApprovedCaipNetworksData: async () => {
                        if (!this.wagmiConfig)
                            throw Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");
                        return new Promise(e => {
                            let t = new Map(this.wagmiConfig.state.connections).get(this.wagmiConfig.state.current || "");
                            t?.connector?.id === e5.bq.AUTH_CONNECTOR_ID ? e({
                                supportsAllNetworks: !0,
                                approvedCaipNetworkIds: e5.CK.WalletConnectRpcChainIds.map(e => `${e5.bq.EIP155}:${e}`)
                            }) : t?.connector?.id === e5.bq.WALLET_CONNECT_CONNECTOR_ID && e(e8(this.wagmiConfig.connectors.find(e => e.id === e5.bq.WALLET_CONNECT_CONNECTOR_ID))),
                            e({
                                approvedCaipNetworkIds: [],
                                supportsAllNetworks: !0
                            })
                        }
                        )
                    }
                },
                this.connectionControllerClient = {
                    connectWalletConnect: async () => {
                        if (!this.wagmiConfig)
                            throw Error("connectionControllerClient:getWalletConnectUri - wagmiConfig is undefined");
                        let e = this.wagmiConfig.connectors.find(e => e.id === e5.bq.WALLET_CONNECT_CONNECTOR_ID);
                        if (!e)
                            throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
                        let t = await e.getProvider()
                          , a = await this.options?.siweConfig?.getMessageParams?.()
                          , i = this.options?.siweConfig?.options?.enabled
                          , r = "function" == typeof t?.authenticate
                          , s = a && Object.keys(a || {}).length > 0
                          , o = this.options?.siweConfig;
                        if (i && r && s && o) {
                            await e.setRequestedChainsIds(a.chains);
                            let {SIWEController: i, getDidChainId: r, getDidAddress: s} = await n.e(2196).then(n.bind(n, 52196))
                              , c = this.caipNetworks?.filter(e => "eip155" === e.chainNamespace).map(e => e.caipNetworkId);
                            a.chains = this.caipNetworks?.filter(e => "eip155" === e.chainNamespace).map(e => e.id);
                            let l = await t.authenticate({
                                nonce: await o.getNonce(),
                                methods: [...tP],
                                ...a,
                                chains: c
                            })
                              , u = l?.auths?.[0];
                            if (u) {
                                let {p: e, s: n} = u
                                  , a = r(e.iss)
                                  , o = s(e.iss);
                                o && a && i.setSession({
                                    address: o,
                                    chainId: parseInt(a, 10)
                                });
                                try {
                                    let a = t.client.formatAuthMessage({
                                        request: e,
                                        iss: e.iss
                                    });
                                    await i.verifyMessage({
                                        message: a,
                                        signature: n.s,
                                        cacao: u
                                    })
                                } catch (e) {
                                    throw console.error("Error verifying message", e),
                                    await t.disconnect().catch(console.error),
                                    await i.signOut().catch(console.error),
                                    e
                                }
                            }
                        }
                        let c = this.appKit?.getCaipNetworkId();
                        await z(this.wagmiConfig, {
                            connector: e,
                            chainId: c
                        })
                    }
                    ,
                    connectExternal: async ({id: e, provider: t, info: n}) => {
                        if (!this.wagmiConfig)
                            throw Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");
                        let a = this.wagmiConfig.connectors.find(t => t.id === e);
                        if (!a)
                            throw Error("connectionControllerClient:connectExternal - connector is undefined");
                        this.appKit?.setClientId(null),
                        t && n && a.id === e5.bq.EIP6963_CONNECTOR_ID && a.setEip6963Wallet?.({
                            provider: t,
                            info: n
                        });
                        let i = this.appKit?.getCaipNetworkId();
                        await z(this.wagmiConfig, {
                            connector: a,
                            chainId: i
                        })
                    }
                    ,
                    checkInstalled: e => {
                        let t = this.appKit?.getConnectors().find(e => "INJECTED" === e.type);
                        return e ? !!t && !!window?.ethereum && e.some(e => !!window.ethereum?.[String(e)]) : !!window.ethereum
                    }
                    ,
                    disconnect: async () => {
                        if (await (0,
                        V.z)(this.wagmiConfig),
                        this.options?.siweConfig?.options?.signOutOnDisconnect) {
                            let {SIWEController: e} = await n.e(2196).then(n.bind(n, 52196));
                            await e.signOut()
                        }
                        e6.mr.removeItem(e6.uJ.WALLET_ID),
                        e6.mr.removeItem(e6.uJ.CONNECTED_CONNECTOR),
                        e6.mr.removeItem(e6.uJ.WALLET_NAME),
                        this.appKit?.setClientId(null),
                        this.syncAccount({
                            address: void 0,
                            chainId: void 0,
                            connector: void 0,
                            addresses: void 0,
                            status: "disconnected"
                        }),
                        this.appKit?.resetAccount("solana")
                    }
                    ,
                    signMessage: async e => {
                        let t = e3(this.appKit?.getCaipAddress() || "");
                        return X(this.wagmiConfig, {
                            message: e,
                            account: t
                        })
                    }
                    ,
                    estimateGas: async e => {
                        if (e.chainNamespace && "eip155" !== e.chainNamespace)
                            throw Error(`Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`);
                        try {
                            return await $(this.wagmiConfig, {
                                account: e.address,
                                to: e.to,
                                data: e.data,
                                type: "legacy"
                            })
                        } catch (e) {
                            return BigInt(0)
                        }
                    }
                    ,
                    getCapabilities: async e => {
                        if (!this.wagmiConfig)
                            throw Error("connectionControllerClient:getCapabilities - wagmiConfig is undefined");
                        let t = (0,
                        ee.E)(this.wagmiConfig)[0];
                        if (!t?.connector)
                            throw Error("connectionControllerClient:getCapabilities - connector is undefined");
                        let n = await t.connector.getProvider();
                        if (!n)
                            throw Error("connectionControllerClient:getCapabilities - provider is undefined");
                        let a = n.session?.sessionProperties?.capabilities;
                        if (a) {
                            let t = function(e) {
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    throw Error("Error parsing wallet capabilities")
                                }
                            }(a)[e];
                            if (t)
                                return t
                        }
                        return await n.request({
                            method: "wallet_getCapabilities",
                            params: [e]
                        })
                    }
                    ,
                    grantPermissions: async e => {
                        if (!this.wagmiConfig)
                            throw Error("connectionControllerClient:grantPermissions - wagmiConfig is undefined");
                        let t = (0,
                        ee.E)(this.wagmiConfig)[0];
                        if (!t?.connector)
                            throw Error("connectionControllerClient:grantPermissions - connector is undefined");
                        let n = await t.connector.getProvider();
                        if (!n)
                            throw Error("connectionControllerClient:grantPermissions - provider is undefined");
                        return n.request({
                            method: "wallet_grantPermissions",
                            params: e
                        })
                    }
                    ,
                    revokePermissions: async e => {
                        if (!this.wagmiConfig)
                            throw Error("connectionControllerClient:revokePermissions - wagmiConfig is undefined");
                        let t = (0,
                        ee.E)(this.wagmiConfig)[0];
                        if (!t?.connector)
                            throw Error("connectionControllerClient:revokePermissions - connector is undefined");
                        let n = await t.connector.getProvider();
                        if (!n)
                            throw Error("connectionControllerClient:revokePermissions - provider is undefined");
                        return n.request({
                            method: "wallet_revokePermissions",
                            params: [e]
                        })
                    }
                    ,
                    sendTransaction: async e => {
                        if (e.chainNamespace && "eip155" !== e.chainNamespace)
                            throw Error(`Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`);
                        let {chainId: t} = (0,
                        et.D)(this.wagmiConfig)
                          , n = {
                            account: e.address,
                            to: e.to,
                            value: e.value,
                            gas: e.gas,
                            gasPrice: e.gasPrice,
                            data: e.data,
                            chainId: t,
                            type: "legacy"
                        };
                        await eY(this.wagmiConfig, n);
                        let a = await e_(this.wagmiConfig, n);
                        return await (0,
                        en.e)(this.wagmiConfig, {
                            hash: a,
                            timeout: 25e3
                        }),
                        a
                    }
                    ,
                    writeContract: async e => {
                        let t = e3(this.appKit?.getCaipAddress() || "")
                          , n = this.appKit?.getCaipNetworkId();
                        if (!n)
                            throw Error("networkControllerClient:writeContract - chainId is undefined");
                        return await (0,
                        ea.n)(this.wagmiConfig, {
                            chain: this.wagmiChains?.[n],
                            chainId: n,
                            address: e.tokenAddress,
                            account: t,
                            abi: e.abi,
                            functionName: e.method,
                            args: [e.receiverAddress, e.tokenAmount]
                        })
                    }
                    ,
                    getEnsAddress: async e => {
                        try {
                            if (!this.wagmiConfig)
                                throw Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");
                            let t = this.appKit?.getCaipNetworkId()
                              , n = !1
                              , a = !1;
                            return (0,
                            e6.oL)(e) && (a = await this.appKit?.resolveReownName(e) || !1),
                            1 === t && (n = await function(e, t) {
                                let {chainId: n, ...a} = t
                                  , i = e.getClient({
                                    chainId: n
                                });
                                return (0,
                                W.s)(i, ev, "getEnsAddress")(a)
                            }(this.wagmiConfig, {
                                name: tN(e),
                                chainId: t
                            })),
                            n || a || !1
                        } catch {
                            return !1
                        }
                    }
                    ,
                    getEnsAvatar: async e => {
                        let t = this.appKit?.getCaipNetworkId();
                        return t === e$.R.id && (await eH(this.wagmiConfig, {
                            name: tN(e),
                            chainId: t
                        }) || !1)
                    }
                    ,
                    parseUnits: e0.v,
                    formatUnits: e1.b
                },
                eZ.ChainController.state.chains.set(this.chainNamespace, {
                    chainNamespace: this.chainNamespace,
                    connectionControllerClient: this.connectionControllerClient,
                    networkControllerClient: this.networkControllerClient,
                    adapterType: this.adapterType,
                    caipNetworks: this.caipNetworks
                }),
                this.syncConnectors(this.wagmiConfig.connectors),
                this.syncAuthConnector(this.wagmiConfig?.connectors.find(e => e.id === e5.bq.AUTH_CONNECTOR_ID)),
                this.syncRequestedNetworks(this.caipNetworks),
                function(e, t) {
                    let {onChange: n} = t;
                    e._internal.connectors.subscribe( (e, t) => {
                        n(Object.values(e), t)
                    }
                    )
                }(this.wagmiConfig, {
                    onChange: e => {
                        this.syncConnectors(e),
                        this.syncAuthConnector(e.find(e => e.id === e5.bq.AUTH_CONNECTOR_ID))
                    }
                }),
                (0,
                eJ.u)(this.wagmiConfig, {
                    onChange: e => {
                        this.syncAccount(e)
                    }
                }),
                this.appKit?.setEIP6963Enabled(!1 !== t.enableEIP6963),
                this.appKit?.subscribeShouldUpdateToAddress(e => {
                    if (e) {
                        let t = ee.E(this.wagmiConfig)
                          , n = t[0]?.connector;
                        n && eq(this.wagmiConfig, {
                            connector: n
                        }).then(t => this.syncAccount({
                            address: e,
                            isConnected: !0,
                            addresses: t.accounts,
                            connector: n,
                            chainId: t.chainId,
                            status: "connected"
                        }))
                    }
                }
                )
            }
            subscribeState(e) {
                return this.appKit?.subscribeState(t => e({
                    ...t,
                    selectedNetworkId: t.selectedNetworkId ? Number(e6.p1.caipNetworkIdToNumber(t.selectedNetworkId)) : void 0
                }))
            }
            syncRequestedNetworks(e) {
                Array.from(new Set(e.map(e => e.chainNamespace))).filter(e => !!e).forEach(t => {
                    this.appKit?.setRequestedCaipNetworks(e.filter(e => e.chainNamespace === t), t)
                }
                )
            }
            async setProfileAndBalance(e, t) {
                await Promise.all([this.syncProfile(e, t), this.syncBalance(e, t)])
            }
            async syncAccount({address: e, chainId: t, connector: n, addresses: a, status: i}) {
                let r = n?.id === e5.bq.AUTH_CONNECTOR_ID;
                if ("disconnected" === i) {
                    this.appKit?.resetAccount(this.chainNamespace),
                    this.appKit?.resetWcConnection(),
                    this.appKit?.resetNetwork(this.chainNamespace),
                    this.appKit?.setAllAccounts([], this.chainNamespace),
                    this.appKit?.setStatus(i, this.chainNamespace),
                    this.appKit?.setLoading(!1),
                    e6.mr.removeItem(e6.uJ.WALLET_ID),
                    r && await n.disconnect();
                    return
                }
                if (this.wagmiConfig && n) {
                    if ("WalletConnect" === n.name && n.getProvider && e) {
                        let a = this.appKit?.getCaipNetwork()
                          , r = t || a?.id
                          , s = await n.getProvider()
                          , o = s?.session?.namespaces || {}
                          , c = o ? Object.keys(o) : []
                          , l = this.appKit?.getPreferredAccountType();
                        c.forEach(e => {
                            let t = o?.[e]?.accounts[0];
                            tD.h.setProvider(e, s),
                            tD.h.setProviderId(e, "walletConnect"),
                            this.appKit?.setPreferredAccountType(l, e),
                            this.appKit?.setCaipAddress(t, e),
                            this.appKit?.setStatus(i, e)
                        }
                        ),
                        this.appKit?.getCaipNetwork()?.chainNamespace !== e6.bq.CHAIN.SOLANA && r && (this.syncNetwork(e, r, !0),
                        await Promise.all([this.syncConnectedWalletInfo(n), this.appKit?.setApprovedCaipNetworksData(this.chainNamespace)]))
                    } else if ("connected" === i && e && t) {
                        tD.h.setProvider(this.chainNamespace, await n.getProvider()),
                        tD.h.setProviderId(this.chainNamespace, n.id);
                        let i = `eip155:${t}:${e}`;
                        this.syncNetwork(e, t, !0),
                        await Promise.all([this.syncConnectedWalletInfo(n), this.appKit?.setApprovedCaipNetworksData(this.chainNamespace)]),
                        this.appKit?.setLoading(!1),
                        this.appKit?.setCaipAddress(i, this.chainNamespace),
                        this.appKit?.setStatus("connected", this.chainNamespace),
                        !r && a?.length && this.appKit?.setAllAccounts(a.map(e => ({
                            address: e,
                            type: "eoa"
                        })), this.chainNamespace)
                    } else
                        "reconnecting" === i && this.appKit?.setLoading(!0)
                }
            }
            syncNetwork(e, t, n) {
                let a = this.caipNetworks.find(e => e.id === t);
                if (a && t && (this.appKit?.setCaipNetwork(a),
                n && e && t)) {
                    let n = `eip155:${t}:${e}`;
                    if (this.appKit?.setCaipAddress(n, this.chainNamespace),
                    a?.blockExplorers?.default.url) {
                        let t = `${a.blockExplorers.default.url}/address/${e}`;
                        this.appKit?.setAddressExplorerUrl(t, this.chainNamespace)
                    } else
                        this.appKit?.setAddressExplorerUrl(void 0, this.chainNamespace)
                }
            }
            async syncReownName(e) {
                if (!this.appKit)
                    throw Error("syncReownName - appKit is undefined");
                try {
                    let t = await this.appKit.getReownName(e);
                    if (t[0]) {
                        let e = t[0];
                        this.appKit?.setProfileName(e.name, this.chainNamespace)
                    } else
                        this.appKit?.setProfileName(null, this.chainNamespace)
                } catch {
                    this.appKit?.setProfileName(null, this.chainNamespace)
                }
            }
            async syncProfile(e, t) {
                if (!this.appKit)
                    throw Error("syncProfile - appKit is undefined");
                try {
                    let {name: t, avatar: n} = await this.appKit.fetchIdentity({
                        address: e
                    });
                    this.appKit?.setProfileName(t, this.chainNamespace),
                    this.appKit?.setProfileImage(n, this.chainNamespace),
                    t || await this.syncReownName(e)
                } catch {
                    if (t === e$.R.id) {
                        let n = await function(e, t) {
                            let {chainId: n, ...a} = t
                              , i = e.getClient({
                                chainId: n
                            });
                            return (0,
                            W.s)(i, ej, "getEnsName")(a)
                        }(this.wagmiConfig, {
                            address: e,
                            chainId: t
                        });
                        if (n) {
                            this.appKit?.setProfileName(n, this.chainNamespace);
                            let e = await eH(this.wagmiConfig, {
                                name: n,
                                chainId: t
                            });
                            e && this.appKit?.setProfileImage(e, this.chainNamespace)
                        } else
                            await this.syncReownName(e),
                            this.appKit?.setProfileImage(null, this.chainNamespace)
                    } else
                        await this.syncReownName(e),
                        this.appKit?.setProfileImage(null, this.chainNamespace)
                }
            }
            async syncBalance(e, t) {
                let n = this.caipNetworks.find(e => e.id === t);
                if (n && this.wagmiConfig) {
                    let a = await (0,
                    ez.s)(this.wagmiConfig, {
                        address: e,
                        chainId: t,
                        token: this.options?.tokens?.[n.caipNetworkId]?.address
                    });
                    this.appKit?.setBalance(a.formatted, a.symbol, this.chainNamespace);
                    return
                }
                this.appKit?.setBalance(void 0, void 0, this.chainNamespace)
            }
            async syncConnectedWalletInfo(e) {
                if (!e)
                    throw Error("syncConnectedWalletInfo - connector is undefined");
                if (e.id === e5.bq.WALLET_CONNECT_CONNECTOR_ID && e.getProvider) {
                    let t = await e.getProvider();
                    t.session && this.appKit?.setConnectedWalletInfo({
                        ...t.session.peer.metadata,
                        name: t.session.peer.metadata.name,
                        icon: t.session.peer.metadata.icons?.[0]
                    }, this.chainNamespace)
                } else {
                    let t = this.appKit?.getConnectors().find(t => t.id === e.id);
                    this.appKit?.setConnectedWalletInfo({
                        name: e.name,
                        icon: e.icon || this.appKit.getConnectorImage(t)
                    }, this.chainNamespace)
                }
            }
            syncConnectors(e) {
                let t = e.map(e => ({
                    ...e,
                    chain: this.chainNamespace
                }))
                  , n = new Set
                  , a = t.filter(e => {
                    let t = n.has(e.id);
                    return n.add(e.id),
                    !t
                }
                )
                  , i = [];
                a.forEach( ({id: e, name: t, type: n, icon: a}) => {
                    e5.bq.AUTH_CONNECTOR_ID !== e && i.push({
                        id: e,
                        explorerId: e5.CK.ConnectorExplorerIds[e],
                        imageUrl: this.options?.connectorImages?.[e] ?? a,
                        name: e5.CK.ConnectorNamesMap[e] ?? t,
                        imageId: e5.CK.ConnectorImageIds[e],
                        type: e5.CK.ConnectorTypesMap[n] ?? "EXTERNAL",
                        info: {
                            rdns: e
                        },
                        chain: this.chainNamespace
                    })
                }
                ),
                this.appKit?.setConnectors(i)
            }
            async syncAuthConnector(e) {
                if (e) {
                    let t = await e.getProvider();
                    this.appKit?.addConnector({
                        id: e5.bq.AUTH_CONNECTOR_ID,
                        type: "AUTH",
                        name: "w3mAuth",
                        provider: t,
                        chain: this.chainNamespace
                    }),
                    this.initAuthConnectorListeners(e)
                }
            }
            async initAuthConnectorListeners(e) {
                e && (await this.listenAuthConnector(e),
                await this.listenModal(e))
            }
            async listenAuthConnector(e, t=!1) {
                if (t || "undefined" != typeof window && e) {
                    this.appKit?.setLoading(!0);
                    let t = await e.getProvider()
                      , n = t.getLoginEmailUsed();
                    this.appKit?.setLoading(n),
                    t.onRpcRequest(e => {
                        e4.$D.checkIfRequestExists(e) ? e4.$D.checkIfRequestIsSafe(e) || this.appKit?.handleUnsafeRPCRequest() : (this.appKit?.open(),
                        console.error(e4.y_.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
                            method: e.method
                        }),
                        setTimeout( () => {
                            this.appKit?.showErrorMessage(e4.y_.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)
                        }
                        , 300),
                        t.rejectRpcRequests())
                    }
                    ),
                    t.onRpcError( () => {
                        this.appKit?.isOpen() && (this.appKit?.isTransactionStackEmpty() ? this.appKit?.close() : this.appKit?.popTransactionStack(!0))
                    }
                    ),
                    t.onRpcSuccess( (e, t) => {
                        e4.$D.checkIfRequestIsSafe(t) || (this.appKit?.isTransactionStackEmpty() ? this.appKit?.close() : this.appKit?.popTransactionStack())
                    }
                    ),
                    t.onNotConnected( () => {
                        let e = this.appKit?.getIsConnectedState()
                          , t = e6.mr.getItem(e6.uJ.CONNECTED_CONNECTOR);
                        e || "AUTH" !== t || (this.appKit?.setCaipAddress(void 0, this.chainNamespace),
                        this.appKit?.setLoading(!1))
                    }
                    ),
                    t.onConnect(e => {
                        let t = `eip155:${e.chainId}:${e.address}`;
                        this.appKit?.setCaipAddress(t, this.chainNamespace),
                        this.appKit?.setSmartAccountDeployed(!!e.smartAccountDeployed, this.chainNamespace),
                        this.appKit?.setPreferredAccountType(e.preferredAccountType, this.chainNamespace),
                        this.appKit?.setAllAccounts(e.accounts || [{
                            address: e.address,
                            type: e.preferredAccountType || "eoa"
                        }], this.chainNamespace),
                        eZ.MO.setConnectedConnector("AUTH"),
                        this.appKit?.setLoading(!1)
                    }
                    ),
                    t.onGetSmartAccountEnabledNetworks(e => {
                        this.appKit?.setSmartAccountEnabledNetworks(e, this.chainNamespace)
                    }
                    ),
                    t.onSetPreferredAccount( ({address: t, type: n}) => {
                        t && (this.appKit?.setPreferredAccountType(n, this.chainNamespace),
                        this.wagmiConfig && (0,
                        eV.G)(this.wagmiConfig, {
                            connectors: [e]
                        }))
                    }
                    )
                }
            }
            async listenModal(e) {
                let t = await e.getProvider();
                this.subscribeState(e => {
                    e.open || t.rejectRpcRequests()
                }
                )
            }
        }
    },
    91900: function(e, t, n) {
        n.d(t, {
            ueV: function() {
                return a.u
            },
            L5L: function() {
                return s
            },
            eGR: function() {
                return o.e
            },
            d2Y: function() {
                return c
            },
            RJ0: function() {
                return l.R
            },
            Fox: function() {
                return u
            }
        });
        var a = n(99445)
          , i = n(32784)
          , r = n(95258);
        let s = (0,
        r.a)({
            ...i.i,
            id: 84532,
            network: "base-sepolia",
            name: "Base Sepolia",
            nativeCurrency: {
                name: "Sepolia Ether",
                symbol: "ETH",
                decimals: 18
            },
            rpcUrls: {
                default: {
                    http: ["https://sepolia.base.org"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Basescan",
                    url: "https://sepolia.basescan.org",
                    apiUrl: "https://api-sepolia.basescan.org/api"
                }
            },
            contracts: {
                ...i.i.contracts,
                disputeGameFactory: {
                    11155111: {
                        address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
                    }
                },
                l2OutputOracle: {
                    11155111: {
                        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
                    }
                },
                portal: {
                    11155111: {
                        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
                        blockCreated: 4446677
                    }
                },
                l1StandardBridge: {
                    11155111: {
                        address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
                        blockCreated: 4446677
                    }
                },
                multicall3: {
                    address: "0xca11bde05977b3631167028862be2a173976ca11",
                    blockCreated: 1059647
                }
            },
            testnet: !0,
            sourceId: 11155111
        });
        var o = n(23281);
        let c = (0,
        r.a)({
            id: 97,
            name: "Binance Smart Chain Testnet",
            nativeCurrency: {
                decimals: 18,
                name: "BNB",
                symbol: "tBNB"
            },
            rpcUrls: {
                default: {
                    http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]
                }
            },
            blockExplorers: {
                default: {
                    name: "BscScan",
                    url: "https://testnet.bscscan.com",
                    apiUrl: "https://api-testnet.bscscan.com/api"
                }
            },
            contracts: {
                multicall3: {
                    address: "0xca11bde05977b3631167028862be2a173976ca11",
                    blockCreated: 17422483
                }
            },
            testnet: !0
        });
        var l = n(16491);
        let u = (0,
        r.a)({
            id: 11155111,
            name: "Sepolia",
            nativeCurrency: {
                name: "Sepolia Ether",
                symbol: "ETH",
                decimals: 18
            },
            rpcUrls: {
                default: {
                    http: ["https://rpc2.sepolia.org"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Etherscan",
                    url: "https://sepolia.etherscan.io",
                    apiUrl: "https://api-sepolia.etherscan.io/api"
                }
            },
            contracts: {
                multicall3: {
                    address: "0xca11bde05977b3631167028862be2a173976ca11",
                    blockCreated: 751532
                },
                ensRegistry: {
                    address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                },
                ensUniversalResolver: {
                    address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                    blockCreated: 5317080
                }
            },
            testnet: !0
        });
        function d(e) {
            return {
                formatters: void 0,
                fees: void 0,
                serializers: void 0,
                ...e
            }
        }
        d({
            id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            name: "Solana",
            network: "solana-mainnet",
            nativeCurrency: {
                name: "Solana",
                symbol: "SOL",
                decimals: 9
            },
            rpcUrls: {
                default: {
                    http: ["https://rpc.walletconnect.org/v1"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Solscan",
                    url: "https://solscan.io"
                }
            },
            testnet: !1,
            chainNamespace: "solana",
            caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
        }),
        d({
            id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
            name: "Solana Devnet",
            network: "solana-devnet",
            nativeCurrency: {
                name: "Solana",
                symbol: "SOL",
                decimals: 9
            },
            rpcUrls: {
                default: {
                    http: ["https://rpc.walletconnect.org/v1"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Solscan",
                    url: "https://solscan.io"
                }
            },
            testnet: !0,
            chainNamespace: "solana",
            caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        }),
        d({
            id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            name: "Solana Testnet",
            network: "solana-testnet",
            nativeCurrency: {
                name: "Solana",
                symbol: "SOL",
                decimals: 9
            },
            rpcUrls: {
                default: {
                    http: ["https://rpc.walletconnect.org/v1"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Solscan",
                    url: "https://solscan.io"
                }
            },
            testnet: !0,
            chainNamespace: "solana",
            caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
        })
    },
    92812: function(e, t, n) {
        n.d(t, {
            R: function() {
                return o
            },
            m: function() {
                return s
            }
        });
        var a = n(69948)
          , i = n(43494)
          , r = n(30924)
          , s = class extends i.F {
            #e;
            #t;
            #n;
            constructor(e) {
                super(),
                this.mutationId = e.mutationId,
                this.#t = e.mutationCache,
                this.#e = [],
                this.state = e.state || o(),
                this.setOptions(e.options),
                this.scheduleGc()
            }
            setOptions(e) {
                this.options = e,
                this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(e) {
                this.#e.includes(e) || (this.#e.push(e),
                this.clearGcTimeout(),
                this.#t.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#e = this.#e.filter(t => t !== e),
                this.scheduleGc(),
                this.#t.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#e.length || ("pending" === this.state.status ? this.scheduleGc() : this.#t.remove(this))
            }
            continue() {
                return this.#n?.continue() ?? this.execute(this.state.variables)
            }
            async execute(e) {
                this.#n = (0,
                r.Mz)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e, t) => {
                        this.#a({
                            type: "failed",
                            failureCount: e,
                            error: t
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
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#t.canRun(this)
                });
                let t = "pending" === this.state.status
                  , n = !this.#n.canStart();
                try {
                    if (!t) {
                        this.#a({
                            type: "pending",
                            variables: e,
                            isPaused: n
                        }),
                        await this.#t.config.onMutate?.(e, this);
                        let t = await this.options.onMutate?.(e);
                        t !== this.state.context && this.#a({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: n
                        })
                    }
                    let a = await this.#n.start();
                    return await this.#t.config.onSuccess?.(a, e, this.state.context, this),
                    await this.options.onSuccess?.(a, e, this.state.context),
                    await this.#t.config.onSettled?.(a, null, this.state.variables, this.state.context, this),
                    await this.options.onSettled?.(a, null, e, this.state.context),
                    this.#a({
                        type: "success",
                        data: a
                    }),
                    a
                } catch (t) {
                    try {
                        throw await this.#t.config.onError?.(t, e, this.state.context, this),
                        await this.options.onError?.(t, e, this.state.context),
                        await this.#t.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
                        await this.options.onSettled?.(void 0, t, e, this.state.context),
                        t
                    } finally {
                        this.#a({
                            type: "error",
                            error: t
                        })
                    }
                } finally {
                    this.#t.runNext(this)
                }
            }
            #a(e) {
                this.state = (t => {
                    switch (e.type) {
                    case "failed":
                        return {
                            ...t,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...t,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...t,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...t,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...t,
                            data: void 0,
                            error: e.error,
                            failureCount: t.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                    }
                }
                )(this.state),
                a.V.batch( () => {
                    this.#e.forEach(t => {
                        t.onMutationUpdate(e)
                    }
                    ),
                    this.#t.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                }
                )
            }
        }
        ;
        function o() {
            return {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0
            }
        }
    },
    2302: function(e, t, n) {
        n.d(t, {
            z: function() {
                return a
            }
        });
        async function a(e, t={}) {
            let n;
            if (t.connector)
                n = t.connector;
            else {
                let {connections: t, current: a} = e.state
                  , i = t.get(a);
                n = i?.connector
            }
            let a = e.state.connections;
            n && (await n.disconnect(),
            n.emitter.off("change", e._internal.events.change),
            n.emitter.off("disconnect", e._internal.events.disconnect),
            n.emitter.on("connect", e._internal.events.connect),
            a.delete(n.uid)),
            e.setState(e => {
                if (0 === a.size)
                    return {
                        ...e,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    };
                let t = a.values().next().value;
                return {
                    ...e,
                    connections: new Map(a),
                    current: t.connector.uid
                }
            }
            );
            {
                let t = e.state.current;
                if (!t)
                    return;
                let n = e.state.connections.get(t)?.connector;
                if (!n)
                    return;
                await e.storage?.setItem("recentConnectorId", n.id)
            }
        }
    },
    89788: function(e, t, n) {
        n.d(t, {
            s: function() {
                return I
            }
        });
        var a = n(58591)
          , i = n(21019)
          , r = n(77955)
          , s = n(42921)
          , o = n(5106)
          , c = n(61954)
          , l = n(90408);
        function u(e) {
            return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(l.Bd[e])
        }
        var d = n(21620)
          , h = n(52186)
          , p = n(6649)
          , f = n(97225)
          , m = n(31006)
          , A = n(18543)
          , w = n(92915)
          , g = n(93413)
          , b = n(3796);
        async function y(e, t) {
            let {allowFailure: n=!0, batchSize: i, blockNumber: r, blockTag: s, multicallAddress: o, stateOverride: c} = t
              , l = t.contracts
              , u = i ?? ("object" == typeof e.batch?.multicall && e.batch.multicall.batchSize || 1024)
              , y = o;
            if (!y) {
                if (!e.chain)
                    throw Error("client chain not configured. multicallAddress is required.");
                y = (0,
                A.L)({
                    blockNumber: r,
                    chain: e.chain,
                    contract: "multicall3"
                })
            }
            let C = [[]]
              , v = 0
              , E = 0;
            for (let e = 0; e < l.length; e++) {
                let {abi: t, address: a, args: i, functionName: r} = l[e];
                try {
                    let e = (0,
                    m.R)({
                        abi: t,
                        args: i,
                        functionName: r
                    });
                    E += (e.length - 2) / 2,
                    u > 0 && E > u && C[v].length > 0 && (v++,
                    E = (e.length - 2) / 2,
                    C[v] = []),
                    C[v] = [...C[v], {
                        allowFailure: !0,
                        callData: e,
                        target: a
                    }]
                } catch (s) {
                    let e = (0,
                    w.S)(s, {
                        abi: t,
                        address: a,
                        args: i,
                        docsPath: "/docs/contract/multicall",
                        functionName: r
                    });
                    if (!n)
                        throw e;
                    C[v] = [...C[v], {
                        allowFailure: !0,
                        callData: "0x",
                        target: a
                    }]
                }
            }
            let I = await Promise.allSettled(C.map(t => (0,
            g.s)(e, b.L, "readContract")({
                abi: d.F8,
                address: y,
                args: [t],
                blockNumber: r,
                blockTag: s,
                functionName: "aggregate3",
                stateOverride: c
            })))
              , N = [];
            for (let e = 0; e < I.length; e++) {
                let t = I[e];
                if ("rejected" === t.status) {
                    if (!n)
                        throw t.reason;
                    for (let n = 0; n < C[e].length; n++)
                        N.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                    continue
                }
                let i = t.value;
                for (let t = 0; t < i.length; t++) {
                    let {returnData: r, success: s} = i[t]
                      , {callData: o} = C[e][t]
                      , {abi: c, address: u, functionName: d, args: p} = l[N.length];
                    try {
                        if ("0x" === o)
                            throw new h.wb;
                        if (!s)
                            throw new a.VQ({
                                data: r
                            });
                        let e = (0,
                        f.k)({
                            abi: c,
                            args: p,
                            data: r,
                            functionName: d
                        });
                        N.push(n ? {
                            result: e,
                            status: "success"
                        } : e)
                    } catch (t) {
                        let e = (0,
                        w.S)(t, {
                            abi: c,
                            address: u,
                            args: p,
                            docsPath: "/docs/contract/multicall",
                            functionName: d
                        });
                        if (!n)
                            throw e;
                        N.push({
                            error: e,
                            result: void 0,
                            status: "failure"
                        })
                    }
                }
            }
            if (N.length !== l.length)
                throw new p.G("multicall results mismatch");
            return N
        }
        async function C(e, t) {
            let {allowFailure: n=!0, chainId: a, contracts: i, ...r} = t
              , s = e.getClient({
                chainId: a
            });
            return (0,
            c.s)(s, y, "multicall")({
                allowFailure: n,
                contracts: i,
                ...r
            })
        }
        var v = n(42467);
        async function E(e, t) {
            let {allowFailure: n=!0, blockNumber: i, blockTag: r, ...s} = t
              , o = t.contracts;
            try {
                let t = {};
                for (let[n,a] of o.entries()) {
                    let i = a.chainId ?? e.state.chainId;
                    t[i] || (t[i] = []),
                    t[i]?.push({
                        contract: a,
                        index: n
                    })
                }
                let a = (await Promise.all(Object.entries(t).map( ([t,a]) => C(e, {
                    ...s,
                    allowFailure: n,
                    blockNumber: i,
                    blockTag: r,
                    chainId: Number.parseInt(t),
                    contracts: a.map( ({contract: e}) => e)
                })))).flat()
                  , c = Object.values(t).flatMap(e => e.map( ({index: e}) => e));
                return a.reduce( (e, t, n) => (e && (e[c[n]] = t),
                e), [])
            } catch (s) {
                if (s instanceof a.uq)
                    throw s;
                let t = () => o.map(t => (0,
                v.L)(e, {
                    ...t,
                    blockNumber: i,
                    blockTag: r
                }));
                if (n)
                    return (await Promise.allSettled(t())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                return await Promise.all(t())
            }
        }
        async function I(e, t) {
            let {address: n, blockNumber: l, blockTag: d, chainId: h, token: p, unit: f="ether"} = t;
            if (p)
                try {
                    return N(e, {
                        balanceAddress: n,
                        chainId: h,
                        symbolType: "string",
                        tokenAddress: p
                    })
                } catch (t) {
                    if (t instanceof a.uq) {
                        let t = await N(e, {
                            balanceAddress: n,
                            chainId: h,
                            symbolType: "bytes32",
                            tokenAddress: p
                        })
                          , a = (0,
                        i.rR)((0,
                        r.f)(t.symbol, {
                            dir: "right"
                        }));
                        return {
                            ...t,
                            symbol: a
                        }
                    }
                    throw t
                }
            let m = e.getClient({
                chainId: h
            })
              , A = (0,
            c.s)(m, o.s, "getBalance")
              , w = await A(l ? {
                address: n,
                blockNumber: l
            } : {
                address: n,
                blockTag: d
            })
              , g = e.chains.find(e => e.id === h) ?? m.chain;
            return {
                decimals: g.nativeCurrency.decimals,
                formatted: (0,
                s.b)(w, u(f)),
                symbol: g.nativeCurrency.symbol,
                value: w
            }
        }
        async function N(e, t) {
            let {balanceAddress: n, chainId: a, symbolType: i, tokenAddress: r, unit: o} = t
              , c = {
                abi: [{
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        type: "address"
                    }],
                    outputs: [{
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "decimals",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "uint8"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: i
                    }]
                }],
                address: r
            }
              , [l,d,h] = await E(e, {
                allowFailure: !1,
                contracts: [{
                    ...c,
                    functionName: "balanceOf",
                    args: [n],
                    chainId: a
                }, {
                    ...c,
                    functionName: "decimals",
                    chainId: a
                }, {
                    ...c,
                    functionName: "symbol",
                    chainId: a
                }]
            })
              , p = (0,
            s.b)(l ?? "0", u(o ?? d));
            return {
                decimals: d,
                formatted: p,
                symbol: h,
                value: l
            }
        }
    },
    48479: function(e, t, n) {
        n.d(t, {
            E: function() {
                return r
            }
        });
        var a = n(90331);
        let i = [];
        function r(e) {
            let t = [...e.state.connections.values()];
            return "reconnecting" === e.state.status || (0,
            a.v)(i, t) ? i : (i = t,
            t)
        }
    },
    42467: function(e, t, n) {
        n.d(t, {
            L: function() {
                return r
            }
        });
        var a = n(3796)
          , i = n(61954);
        function r(e, t) {
            let {chainId: n, ...r} = t
              , s = e.getClient({
                chainId: n
            });
            return (0,
            i.s)(s, a.L, "readContract")(r)
        }
    },
    47634: function(e, t, n) {
        n.d(t, {
            a: function() {
                return h
            }
        });
        var a = n(96104)
          , i = n(97225)
          , r = n(31006)
          , s = n(92915)
          , o = n(93413)
          , c = n(1895);
        async function l(e, t) {
            let {abi: n, address: l, args: u, dataSuffix: d, functionName: h, ...p} = t
              , f = p.account ? (0,
            a.T)(p.account) : e.account
              , m = (0,
            r.R)({
                abi: n,
                args: u,
                functionName: h
            });
            try {
                let {data: a} = await (0,
                o.s)(e, c.R, "call")({
                    batch: !1,
                    data: `${m}${d ? d.replace("0x", "") : ""}`,
                    to: l,
                    ...p,
                    account: f
                })
                  , r = (0,
                i.k)({
                    abi: n,
                    args: u,
                    functionName: h,
                    data: a || "0x"
                })
                  , s = n.filter(e => "name"in e && e.name === t.functionName);
                return {
                    result: r,
                    request: {
                        abi: s,
                        address: l,
                        args: u,
                        dataSuffix: d,
                        functionName: h,
                        ...p,
                        account: f
                    }
                }
            } catch (e) {
                throw (0,
                s.S)(e, {
                    abi: n,
                    address: l,
                    args: u,
                    docsPath: "/docs/contract/simulateContract",
                    functionName: h,
                    sender: f?.address
                })
            }
        }
        var u = n(61954)
          , d = n(33281);
        async function h(e, t) {
            let n;
            let {abi: a, chainId: i, connector: r, ...s} = t;
            n = t.account ? t.account : (await (0,
            d.e)(e, {
                chainId: i,
                connector: r
            })).account;
            let o = e.getClient({
                chainId: i
            })
              , c = (0,
            u.s)(o, l, "simulateContract")
              , {result: h, request: p} = await c({
                ...s,
                abi: a,
                account: n
            });
            return {
                chainId: o.chain.id,
                result: h,
                request: {
                    __mode: "prepared",
                    ...p,
                    chainId: i
                }
            }
        }
    },
    70272: function(e, t, n) {
        n.d(t, {
            c: function() {
                return r
            }
        });
        var a = n(85770)
          , i = n(50571);
        async function r(e, t) {
            let {addEthereumChainParameter: n, chainId: r} = t
              , s = e.state.connections.get(t.connector?.uid ?? e.state.current);
            if (s) {
                let e = s.connector;
                if (!e.switchChain)
                    throw new i.O({
                        connector: e
                    });
                return await e.switchChain({
                    addEthereumChainParameter: n,
                    chainId: r
                })
            }
            let o = e.chains.find(e => e.id === r);
            if (!o)
                throw new a.X4;
            return e.setState(e => ({
                ...e,
                chainId: r
            })),
            o
        }
    },
    20670: function(e, t, n) {
        n.d(t, {
            e: function() {
                return P
            }
        });
        var a = n(21019)
          , i = n(87655)
          , r = n(97658)
          , s = n(93413);
        let o = new Map
          , c = new Map
          , l = 0;
        function u(e, t, n) {
            let a = ++l
              , i = () => o.get(e) || []
              , r = () => {
                let t = i();
                o.set(e, t.filter(e => e.id !== a))
            }
              , s = () => {
                let t = c.get(e);
                1 === i().length && t && t(),
                r()
            }
              , u = i();
            if (o.set(e, [...u, {
                id: a,
                fns: t
            }]),
            u && u.length > 0)
                return s;
            let d = {};
            for (let e in t)
                d[e] = (...t) => {
                    let n = i();
                    if (0 !== n.length)
                        for (let a of n)
                            a.fns[e]?.(...t)
                }
                ;
            let h = n(d);
            return "function" == typeof h && c.set(e, h),
            s
        }
        var d = n(49568)
          , h = n(55894)
          , p = n(47499)
          , f = n(49235)
          , m = n(95046)
          , A = n(16719);
        async function w(e, {blockHash: t, blockNumber: n, blockTag: a, hash: i, index: s}) {
            let o = a || "latest"
              , c = void 0 !== n ? (0,
            m.eC)(n) : void 0
              , l = null;
            if (i ? l = await e.request({
                method: "eth_getTransactionByHash",
                params: [i]
            }, {
                dedupe: !0
            }) : t ? l = await e.request({
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0,
                m.eC)(s)]
            }, {
                dedupe: !0
            }) : (c || o) && (l = await e.request({
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [c || o, (0,
                m.eC)(s)]
            }, {
                dedupe: !!c
            })),
            !l)
                throw new r.Bh({
                    blockHash: t,
                    blockNumber: n,
                    blockTag: o,
                    hash: i,
                    index: s
                });
            return (e.chain?.formatters?.transaction?.format || A.Tr)(l)
        }
        var g = n(93130);
        async function b(e, {hash: t}) {
            let n = await e.request({
                method: "eth_getTransactionReceipt",
                params: [t]
            }, {
                dedupe: !0
            });
            if (!n)
                throw new r.Yb({
                    hash: t
                });
            return (e.chain?.formatters?.transactionReceipt?.format || g.fA)(n)
        }
        var y = n(97317);
        let C = new Map
          , v = new Map;
        async function E(e, {cacheKey: t, cacheTime: n=Number.POSITIVE_INFINITY}) {
            let a = function(e) {
                let t = (e, t) => ({
                    clear: () => t.delete(e),
                    get: () => t.get(e),
                    set: n => t.set(e, n)
                })
                  , n = t(e, C)
                  , a = t(e, v);
                return {
                    clear: () => {
                        n.clear(),
                        a.clear()
                    }
                    ,
                    promise: n,
                    response: a
                }
            }(t)
              , i = a.response.get();
            if (i && n > 0 && new Date().getTime() - i.created.getTime() < n)
                return i.data;
            let r = a.promise.get();
            r || (r = e(),
            a.promise.set(r));
            try {
                let e = await r;
                return a.response.set({
                    created: new Date,
                    data: e
                }),
                e
            } finally {
                a.promise.clear()
            }
        }
        let I = e => `blockNumber.${e}`;
        async function N(e, {cacheTime: t=e.cacheTime}={}) {
            return BigInt(await E( () => e.request({
                method: "eth_blockNumber"
            }), {
                cacheKey: I(e.uid),
                cacheTime: t
            }))
        }
        function x(e, {emitOnBegin: t=!1, emitMissed: n=!1, onBlockNumber: i, onError: r, poll: o, pollingInterval: c=e.pollingInterval}) {
            let l;
            return (void 0 !== o ? o : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type)) ? u((0,
            p.P)(["watchBlockNumber", e.uid, t, n, c]), {
                onBlockNumber: i,
                onError: r
            }, a => (function(e, {emitOnBegin: t, initialWaitTime: n, interval: a}) {
                let i = !0
                  , r = () => i = !1;
                return (async () => {
                    let s;
                    t && (s = await e({
                        unpoll: r
                    }));
                    let o = await n?.(s) ?? a;
                    await (0,
                    y.D)(o);
                    let c = async () => {
                        i && (await e({
                            unpoll: r
                        }),
                        await (0,
                        y.D)(a),
                        c())
                    }
                    ;
                    c()
                }
                )(),
                r
            }
            )(async () => {
                try {
                    let t = await (0,
                    s.s)(e, N, "getBlockNumber")({
                        cacheTime: 0
                    });
                    if (l) {
                        if (t === l)
                            return;
                        if (t - l > 1 && n)
                            for (let e = l + 1n; e < t; e++)
                                a.onBlockNumber(e, l),
                                l = e
                    }
                    (!l || t > l) && (a.onBlockNumber(t, l),
                    l = t)
                } catch (e) {
                    a.onError?.(e)
                }
            }
            , {
                emitOnBegin: t,
                interval: c
            })) : u((0,
            p.P)(["watchBlockNumber", e.uid, t, n]), {
                onBlockNumber: i,
                onError: r
            }, t => {
                let n = !0
                  , i = () => n = !1;
                return (async () => {
                    try {
                        let r = ( () => {
                            if ("fallback" === e.transport.type) {
                                let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                return t ? t.value : e.transport
                            }
                            return e.transport
                        }
                        )()
                          , {unsubscribe: s} = await r.subscribe({
                            params: ["newHeads"],
                            onData(e) {
                                if (!n)
                                    return;
                                let i = (0,
                                a.y_)(e.result?.number);
                                t.onBlockNumber(i, l),
                                l = i
                            },
                            onError(e) {
                                t.onError?.(e)
                            }
                        });
                        i = s,
                        n || i()
                    } catch (e) {
                        r?.(e)
                    }
                }
                )(),
                () => i()
            }
            )
        }
        async function k(e, {confirmations: t=1, hash: n, onReplaced: a, pollingInterval: o=e.pollingInterval, retryCount: c=6, retryDelay: l= ({count: e}) => 200 * ~~(1 << e), timeout: m=18e4}) {
            let A, g, y;
            let C = (0,
            p.P)(["waitForTransactionReceipt", e.uid, n])
              , v = !1
              , {promise: E, resolve: I, reject: N} = (0,
            d.n)()
              , k = m ? setTimeout( () => N(new r.mc({
                hash: n
            })), m) : void 0
              , B = u(C, {
                onReplaced: a,
                resolve: I,
                reject: N
            }, a => {
                let u = (0,
                s.s)(e, x, "watchBlockNumber")({
                    emitMissed: !0,
                    emitOnBegin: !0,
                    poll: !0,
                    pollingInterval: o,
                    async onBlockNumber(o) {
                        let d = e => {
                            clearTimeout(k),
                            u(),
                            e(),
                            B()
                        }
                          , p = o;
                        if (!v)
                            try {
                                if (y) {
                                    if (t > 1 && (!y.blockNumber || p - y.blockNumber + 1n < t))
                                        return;
                                    d( () => a.resolve(y));
                                    return
                                }
                                if (A || (v = !0,
                                await (0,
                                h.J)(async () => {
                                    (A = await (0,
                                    s.s)(e, w, "getTransaction")({
                                        hash: n
                                    })).blockNumber && (p = A.blockNumber)
                                }
                                , {
                                    delay: l,
                                    retryCount: c
                                }),
                                v = !1),
                                y = await (0,
                                s.s)(e, b, "getTransactionReceipt")({
                                    hash: n
                                }),
                                t > 1 && (!y.blockNumber || p - y.blockNumber + 1n < t))
                                    return;
                                d( () => a.resolve(y))
                            } catch (n) {
                                if (n instanceof r.Bh || n instanceof r.Yb) {
                                    if (!A) {
                                        v = !1;
                                        return
                                    }
                                    try {
                                        g = A,
                                        v = !0;
                                        let n = await (0,
                                        h.J)( () => (0,
                                        s.s)(e, f.Q, "getBlock")({
                                            blockNumber: p,
                                            includeTransactions: !0
                                        }), {
                                            delay: l,
                                            retryCount: c,
                                            shouldRetry: ({error: e}) => e instanceof i.f
                                        });
                                        v = !1;
                                        let r = n.transactions.find( ({from: e, nonce: t}) => e === g.from && t === g.nonce);
                                        if (!r || (y = await (0,
                                        s.s)(e, b, "getTransactionReceipt")({
                                            hash: r.hash
                                        }),
                                        t > 1 && (!y.blockNumber || p - y.blockNumber + 1n < t)))
                                            return;
                                        let o = "replaced";
                                        r.to === g.to && r.value === g.value ? o = "repriced" : r.from === r.to && 0n === r.value && (o = "cancelled"),
                                        d( () => {
                                            a.onReplaced?.({
                                                reason: o,
                                                replacedTransaction: g,
                                                transaction: r,
                                                transactionReceipt: y
                                            }),
                                            a.resolve(y)
                                        }
                                        )
                                    } catch (e) {
                                        d( () => a.reject(e))
                                    }
                                } else
                                    d( () => a.reject(n))
                            }
                    }
                })
            }
            );
            return E
        }
        var B = n(1895)
          , D = n(61954);
        async function P(e, t) {
            let {chainId: n, timeout: i=0, ...r} = t
              , s = e.getClient({
                chainId: n
            })
              , o = (0,
            D.s)(s, k, "waitForTransactionReceipt")
              , c = await o({
                ...r,
                timeout: i
            });
            if ("reverted" === c.status) {
                let e = (0,
                D.s)(s, w, "getTransaction")
                  , t = await e({
                    hash: c.transactionHash
                })
                  , n = (0,
                D.s)(s, B.R, "call")
                  , i = await n({
                    ...t,
                    gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
                    maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
                    maxPriorityFeePerGas: "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0
                });
                throw Error(i?.data ? (0,
                a.rR)(`0x${i.data.substring(138)}`) : "unknown reason")
            }
            return {
                ...c,
                chainId: s.chain.id
            }
        }
    },
    90894: function(e, t, n) {
        n.d(t, {
            n: function() {
                return c
            }
        });
        var a = n(85721)
          , i = n(61954)
          , r = n(79886)
          , s = n(33281)
          , o = n(47634);
        async function c(e, t) {
            let n, c;
            let {account: l, chainId: u, connector: d, __mode: h, ...p} = t;
            n = "object" == typeof l && l?.type === "local" ? e.getClient({
                chainId: u
            }) : await (0,
            s.e)(e, {
                account: l ?? void 0,
                chainId: u,
                connector: d
            });
            let {connector: f} = (0,
            r.D)(e);
            if ("prepared" === h || f?.supportsSimulation)
                c = p;
            else {
                let {request: t} = await (0,
                o.a)(e, {
                    ...p,
                    account: l,
                    chainId: u
                });
                c = t
            }
            let m = (0,
            i.s)(n, a.n, "writeContract");
            return await m({
                ...c,
                ...l ? {
                    account: l
                } : {},
                chain: u ? {
                    id: u
                } : null
            })
        }
    },
    50571: function(e, t, n) {
        n.d(t, {
            M: function() {
                return i
            },
            O: function() {
                return r
            }
        });
        var a = n(66564);
        class i extends a.G {
            constructor() {
                super("Provider not found."),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "ProviderNotFoundError"
                })
            }
        }
        class r extends a.G {
            constructor({connector: e}) {
                super(`"${e.name}" does not support programmatic chain switching.`),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "SwitchChainNotSupportedError"
                })
            }
        }
    },
    61954: function(e, t, n) {
        n.d(t, {
            s: function() {
                return a
            }
        });
        function a(e, t, n) {
            let a = e[t.name];
            if ("function" == typeof a)
                return a;
            let i = e[n];
            return "function" == typeof i ? i : n => t(e, n)
        }
    },
    88726: function(e, t, n) {
        let a, i;
        function r(e, t) {
            return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        n.d(t, {
            Toaster: function() {
                return eB
            },
            ZP: function() {
                return eD
            }
        });
        var s, o = n(2265);
        let c = {
            data: ""
        }
          , l = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
            innerHTML: " ",
            id: "_goober"
        })).firstChild : e || c
          , u = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
          , d = /\/\*[^]*?\*\/|  +/g
          , h = /\n+/g
          , p = (e, t) => {
            let n = ""
              , a = ""
              , i = "";
            for (let r in e) {
                let s = e[r];
                "@" == r[0] ? "i" == r[1] ? n = r + " " + s + ";" : a += "f" == r[1] ? p(s, r) : r + "{" + p(s, "k" == r[1] ? "" : t) + "}" : "object" == typeof s ? a += p(s, t ? t.replace(/([^,])+/g, e => r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : r) : null != s && (r = /^--/.test(r) ? r : r.replace(/[A-Z]/g, "-$&").toLowerCase(),
                i += p.p ? p.p(r, s) : r + ":" + s + ";")
            }
            return n + (t && i ? t + "{" + i + "}" : i) + a
        }
          , f = {}
          , m = e => {
            if ("object" == typeof e) {
                let t = "";
                for (let n in e)
                    t += n + m(e[n]);
                return t
            }
            return e
        }
          , A = (e, t, n, a, i) => {
            var r;
            let s = m(e)
              , o = f[s] || (f[s] = (e => {
                let t = 0
                  , n = 11;
                for (; t < e.length; )
                    n = 101 * n + e.charCodeAt(t++) >>> 0;
                return "go" + n
            }
            )(s));
            if (!f[o]) {
                let t = s !== e ? e : (e => {
                    let t, n, a = [{}];
                    for (; t = u.exec(e.replace(d, "")); )
                        t[4] ? a.shift() : t[3] ? (n = t[3].replace(h, " ").trim(),
                        a.unshift(a[0][n] = a[0][n] || {})) : a[0][t[1]] = t[2].replace(h, " ").trim();
                    return a[0]
                }
                )(e);
                f[o] = p(i ? {
                    ["@keyframes " + o]: t
                } : t, n ? "" : "." + o)
            }
            let c = n && f.g ? f.g : null;
            return n && (f.g = f[o]),
            r = f[o],
            c ? t.data = t.data.replace(c, r) : -1 === t.data.indexOf(r) && (t.data = a ? r + t.data : t.data + r),
            o
        }
          , w = (e, t, n) => e.reduce( (e, a, i) => {
            let r = t[i];
            if (r && r.call) {
                let e = r(n)
                  , t = e && e.props && e.props.className || /^go/.test(e) && e;
                r = t ? "." + t : e && "object" == typeof e ? e.props ? "" : p(e, "") : !1 === e ? "" : e
            }
            return e + a + (null == r ? "" : r)
        }
        , "");
        function g(e) {
            let t = this || {}
              , n = e.call ? e(t.p) : e;
            return A(n.unshift ? n.raw ? w(n, [].slice.call(arguments, 1), t.p) : n.reduce( (e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {}) : n, l(t.target), t.g, t.o, t.k)
        }
        g.bind({
            g: 1
        });
        let b, y, C, v = g.bind({
            k: 1
        });
        function E(e, t) {
            let n = this || {};
            return function() {
                let a = arguments;
                function i(r, s) {
                    let o = Object.assign({}, r)
                      , c = o.className || i.className;
                    n.p = Object.assign({
                        theme: y && y()
                    }, o),
                    n.o = / *go\d+/.test(c),
                    o.className = g.apply(n, a) + (c ? " " + c : ""),
                    t && (o.ref = s);
                    let l = e;
                    return e[0] && (l = o.as || e,
                    delete o.as),
                    C && l[0] && C(o),
                    b(l, o)
                }
                return t ? t(i) : i
            }
        }
        function I() {
            let e = r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        function N() {
            let e = r(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);
            return N = function() {
                return e
            }
            ,
            e
        }
        function x() {
            let e = r(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function k() {
            let e = r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ", ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        function B() {
            let e = r(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
            return B = function() {
                return e
            }
            ,
            e
        }
        function D() {
            let e = r(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ", ";\n  border-right-color: ", ";\n  animation: ", " 1s linear infinite;\n"]);
            return D = function() {
                return e
            }
            ,
            e
        }
        function P() {
            let e = r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function Q() {
            let e = r(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);
            return Q = function() {
                return e
            }
            ,
            e
        }
        function U() {
            let e = r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ", " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);
            return U = function() {
                return e
            }
            ,
            e
        }
        function S() {
            let e = r(["\n  position: absolute;\n"]);
            return S = function() {
                return e
            }
            ,
            e
        }
        function M() {
            let e = r(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);
            return M = function() {
                return e
            }
            ,
            e
        }
        function T() {
            let e = r(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function R() {
            let e = r(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ", " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        function L() {
            let e = r(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        function K() {
            let e = r(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);
            return K = function() {
                return e
            }
            ,
            e
        }
        function O() {
            let e = r(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        var F = e => "function" == typeof e
          , G = (e, t) => F(e) ? e(t) : e
          , H = (a = 0,
        () => (++a).toString())
          , J = () => {
            if (void 0 === i && "u" > typeof window) {
                let e = matchMedia("(prefers-reduced-motion: reduce)");
                i = !e || e.matches
            }
            return i
        }
          , q = new Map
          , j = e => {
            if (q.has(e))
                return;
            let t = setTimeout( () => {
                q.delete(e),
                Y({
                    type: 4,
                    toastId: e
                })
            }
            , 1e3);
            q.set(e, t)
        }
          , z = e => {
            let t = q.get(e);
            t && clearTimeout(t)
        }
          , V = (e, t) => {
            switch (t.type) {
            case 0:
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, 20)
                };
            case 1:
                return t.toast.id && z(t.toast.id),
                {
                    ...e,
                    toasts: e.toasts.map(e => e.id === t.toast.id ? {
                        ...e,
                        ...t.toast
                    } : e)
                };
            case 2:
                let {toast: n} = t;
                return e.toasts.find(e => e.id === n.id) ? V(e, {
                    type: 1,
                    toast: n
                }) : V(e, {
                    type: 0,
                    toast: n
                });
            case 3:
                let {toastId: a} = t;
                return a ? j(a) : e.toasts.forEach(e => {
                    j(e.id)
                }
                ),
                {
                    ...e,
                    toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                        ...e,
                        visible: !1
                    } : e)
                };
            case 4:
                return void 0 === t.toastId ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(e => e.id !== t.toastId)
                };
            case 5:
                return {
                    ...e,
                    pausedAt: t.time
                };
            case 6:
                let i = t.time - (e.pausedAt || 0);
                return {
                    ...e,
                    pausedAt: void 0,
                    toasts: e.toasts.map(e => ({
                        ...e,
                        pauseDuration: e.pauseDuration + i
                    }))
                }
            }
        }
          , Z = []
          , W = {
            toasts: [],
            pausedAt: void 0
        }
          , Y = e => {
            W = V(W, e),
            Z.forEach(e => {
                e(W)
            }
            )
        }
          , X = {
            blank: 4e3,
            error: 4e3,
            success: 2e3,
            loading: 1 / 0,
            custom: 4e3
        }
          , _ = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , [t,n] = (0,
            o.useState)(W);
            (0,
            o.useEffect)( () => (Z.push(n),
            () => {
                let e = Z.indexOf(n);
                e > -1 && Z.splice(e, 1)
            }
            ), [t]);
            let a = t.toasts.map(t => {
                var n, a;
                return {
                    ...e,
                    ...e[t.type],
                    ...t,
                    duration: t.duration || (null == (n = e[t.type]) ? void 0 : n.duration) || (null == e ? void 0 : e.duration) || X[t.type],
                    style: {
                        ...e.style,
                        ...null == (a = e[t.type]) ? void 0 : a.style,
                        ...t.style
                    }
                }
            }
            );
            return {
                ...t,
                toasts: a
            }
        }
          , $ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "blank"
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return {
                createdAt: Date.now(),
                visible: !0,
                type: t,
                ariaProps: {
                    role: "status",
                    "aria-live": "polite"
                },
                message: e,
                pauseDuration: 0,
                ...n,
                id: (null == n ? void 0 : n.id) || H()
            }
        }
          , ee = e => (t, n) => {
            let a = $(t, e, n);
            return Y({
                type: 2,
                toast: a
            }),
            a.id
        }
          , et = (e, t) => ee("blank")(e, t);
        et.error = ee("error"),
        et.success = ee("success"),
        et.loading = ee("loading"),
        et.custom = ee("custom"),
        et.dismiss = e => {
            Y({
                type: 3,
                toastId: e
            })
        }
        ,
        et.remove = e => Y({
            type: 4,
            toastId: e
        }),
        et.promise = (e, t, n) => {
            let a = et.loading(t.loading, {
                ...n,
                ...null == n ? void 0 : n.loading
            });
            return e.then(e => (et.success(G(t.success, e), {
                id: a,
                ...n,
                ...null == n ? void 0 : n.success
            }),
            e)).catch(e => {
                et.error(G(t.error, e), {
                    id: a,
                    ...n,
                    ...null == n ? void 0 : n.error
                })
            }
            ),
            e
        }
        ;
        var en = (e, t) => {
            Y({
                type: 1,
                toast: {
                    id: e,
                    height: t
                }
            })
        }
          , ea = () => {
            Y({
                type: 5,
                time: Date.now()
            })
        }
          , ei = e => {
            let {toasts: t, pausedAt: n} = _(e);
            (0,
            o.useEffect)( () => {
                if (n)
                    return;
                let e = Date.now()
                  , a = t.map(t => {
                    if (t.duration === 1 / 0)
                        return;
                    let n = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                    if (n < 0) {
                        t.visible && et.dismiss(t.id);
                        return
                    }
                    return setTimeout( () => et.dismiss(t.id), n)
                }
                );
                return () => {
                    a.forEach(e => e && clearTimeout(e))
                }
            }
            , [t, n]);
            let a = (0,
            o.useCallback)( () => {
                n && Y({
                    type: 6,
                    time: Date.now()
                })
            }
            , [n])
              , i = (0,
            o.useCallback)( (e, n) => {
                let {reverseOrder: a=!1, gutter: i=8, defaultPosition: r} = n || {}
                  , s = t.filter(t => (t.position || r) === (e.position || r) && t.height)
                  , o = s.findIndex(t => t.id === e.id)
                  , c = s.filter( (e, t) => t < o && e.visible).length;
                return s.filter(e => e.visible).slice(...a ? [c + 1] : [0, c]).reduce( (e, t) => e + (t.height || 0) + i, 0)
            }
            , [t]);
            return {
                toasts: t,
                handlers: {
                    updateHeight: en,
                    startPause: ea,
                    endPause: a,
                    calculateOffset: i
                }
            }
        }
          , er = v(I())
          , es = v(N())
          , eo = v(x())
          , ec = E("div")(k(), e => e.primary || "#ff4b4b", er, es, e => e.secondary || "#fff", eo)
          , el = v(B())
          , eu = E("div")(D(), e => e.secondary || "#e0e0e0", e => e.primary || "#616161", el)
          , ed = v(P())
          , eh = v(Q())
          , ep = E("div")(U(), e => e.primary || "#61d345", ed, eh, e => e.secondary || "#fff")
          , ef = E("div")(S())
          , em = E("div")(M())
          , eA = v(T())
          , ew = E("div")(R(), eA)
          , eg = e => {
            let {toast: t} = e
              , {icon: n, type: a, iconTheme: i} = t;
            return void 0 !== n ? "string" == typeof n ? o.createElement(ew, null, n) : n : "blank" === a ? null : o.createElement(em, null, o.createElement(eu, {
                ...i
            }), "loading" !== a && o.createElement(ef, null, "error" === a ? o.createElement(ec, {
                ...i
            }) : o.createElement(ep, {
                ...i
            })))
        }
          , eb = e => "\n0% {transform: translate3d(0,".concat(-200 * e, "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")
          , ey = e => "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150 * e, "%,-1px) scale(.6); opacity:0;}\n")
          , eC = E("div")(L())
          , ev = E("div")(K())
          , eE = (e, t) => {
            let n = e.includes("top") ? 1 : -1
              , [a,i] = J() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [eb(n), ey(n)];
            return {
                animation: t ? "".concat(v(a), " 0.35s cubic-bezier(.21,1.02,.73,1) forwards") : "".concat(v(i), " 0.4s forwards cubic-bezier(.06,.71,.55,1)")
            }
        }
          , eI = o.memo(e => {
            let {toast: t, position: n, style: a, children: i} = e
              , r = t.height ? eE(t.position || n || "top-center", t.visible) : {
                opacity: 0
            }
              , s = o.createElement(eg, {
                toast: t
            })
              , c = o.createElement(ev, {
                ...t.ariaProps
            }, G(t.message, t));
            return o.createElement(eC, {
                className: t.className,
                style: {
                    ...r,
                    ...a,
                    ...t.style
                }
            }, "function" == typeof i ? i({
                icon: s,
                message: c
            }) : o.createElement(o.Fragment, null, s, c))
        }
        );
        s = o.createElement,
        p.p = void 0,
        b = s,
        y = void 0,
        C = void 0;
        var eN = e => {
            let {id: t, className: n, style: a, onHeightUpdate: i, children: r} = e
              , s = o.useCallback(e => {
                if (e) {
                    let n = () => {
                        i(t, e.getBoundingClientRect().height)
                    }
                    ;
                    n(),
                    new MutationObserver(n).observe(e, {
                        subtree: !0,
                        childList: !0,
                        characterData: !0
                    })
                }
            }
            , [t, i]);
            return o.createElement("div", {
                ref: s,
                className: n,
                style: a
            }, r)
        }
          , ex = (e, t) => {
            let n = e.includes("top")
              , a = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
            return {
                left: 0,
                right: 0,
                display: "flex",
                position: "absolute",
                transition: J() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                transform: "translateY(".concat(t * (n ? 1 : -1), "px)"),
                ...n ? {
                    top: 0
                } : {
                    bottom: 0
                },
                ...a
            }
        }
          , ek = g(O())
          , eB = e => {
            let {reverseOrder: t, position: n="top-center", toastOptions: a, gutter: i, children: r, containerStyle: s, containerClassName: c} = e
              , {toasts: l, handlers: u} = ei(a);
            return o.createElement("div", {
                style: {
                    position: "fixed",
                    zIndex: 9999,
                    top: 16,
                    left: 16,
                    right: 16,
                    bottom: 16,
                    pointerEvents: "none",
                    ...s
                },
                className: c,
                onMouseEnter: u.startPause,
                onMouseLeave: u.endPause
            }, l.map(e => {
                let a = e.position || n
                  , s = ex(a, u.calculateOffset(e, {
                    reverseOrder: t,
                    gutter: i,
                    defaultPosition: n
                }));
                return o.createElement(eN, {
                    id: e.id,
                    key: e.id,
                    onHeightUpdate: u.updateHeight,
                    className: e.visible ? ek : "",
                    style: s
                }, "custom" === e.type ? G(e.message, e) : r ? r(e) : o.createElement(eI, {
                    toast: e,
                    position: a
                }))
            }
            ))
        }
          , eD = et
    },
    1895: function(e, t, n) {
        n.d(t, {
            R: function() {
                return $
            }
        });
        var a = n(43197);
        let i = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/
          , r = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/
          , s = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/
          , o = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/
          , c = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/
          , l = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/
          , u = /^receive\(\) external payable$/
          , d = new Set(["indexed"])
          , h = new Set(["calldata", "memory", "storage"]);
        class p extends Error {
            constructor(e, t={}) {
                let n = t.cause instanceof p ? t.cause.details : t.cause?.message ? t.cause.message : t.details
                  , a = t.cause instanceof p && t.cause.docsPath || t.docsPath;
                super([e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...a ? [`Docs: https://abitype.dev${a}`] : [], ...n ? [`Details: ${n}`] : [], "Version: abitype@1.0.6"].join("\n")),
                Object.defineProperty(this, "details", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "docsPath", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "metaMessages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "shortMessage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "AbiTypeError"
                }),
                t.cause && (this.cause = t.cause),
                this.details = n,
                this.docsPath = a,
                this.metaMessages = t.metaMessages,
                this.shortMessage = e
            }
        }
        class f extends p {
            constructor({type: e}) {
                super("Unknown type.", {
                    metaMessages: [`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "UnknownTypeError"
                })
            }
        }
        class m extends p {
            constructor({type: e}) {
                super("Unknown type.", {
                    metaMessages: [`Type "${e}" is not a valid ABI type.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "UnknownSolidityTypeError"
                })
            }
        }
        class A extends p {
            constructor({param: e}) {
                super("Invalid ABI parameter.", {
                    details: e
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidParameterError"
                })
            }
        }
        class w extends p {
            constructor({param: e, name: t}) {
                super("Invalid ABI parameter.", {
                    details: e,
                    metaMessages: [`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "SolidityProtectedKeywordError"
                })
            }
        }
        class g extends p {
            constructor({param: e, type: t, modifier: n}) {
                super("Invalid ABI parameter.", {
                    details: e,
                    metaMessages: [`Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidModifierError"
                })
            }
        }
        class b extends p {
            constructor({param: e, type: t, modifier: n}) {
                super("Invalid ABI parameter.", {
                    details: e,
                    metaMessages: [`Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`, `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidFunctionModifierError"
                })
            }
        }
        class y extends p {
            constructor({abiParameter: e}) {
                super("Invalid ABI parameter.", {
                    details: JSON.stringify(e, null, 2),
                    metaMessages: ["ABI parameter type is invalid."]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidAbiTypeParameterError"
                })
            }
        }
        class C extends p {
            constructor({signature: e, type: t}) {
                super(`Invalid ${t} signature.`, {
                    details: e
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidSignatureError"
                })
            }
        }
        class v extends p {
            constructor({signature: e}) {
                super("Unknown signature.", {
                    details: e
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "UnknownSignatureError"
                })
            }
        }
        class E extends p {
            constructor({signature: e}) {
                super("Invalid struct signature.", {
                    details: e,
                    metaMessages: ["No properties exist."]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidStructSignatureError"
                })
            }
        }
        class I extends p {
            constructor({type: e}) {
                super("Circular reference detected.", {
                    metaMessages: [`Struct "${e}" is a circular reference.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "CircularReferenceError"
                })
            }
        }
        class N extends p {
            constructor({current: e, depth: t}) {
                super("Unbalanced parentheses.", {
                    metaMessages: [`"${e.trim()}" has too many ${t > 0 ? "opening" : "closing"} parentheses.`],
                    details: `Depth "${t}"`
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidParenthesisError"
                })
            }
        }
        let x = new Map([["address", {
            type: "address"
        }], ["bool", {
            type: "bool"
        }], ["bytes", {
            type: "bytes"
        }], ["bytes32", {
            type: "bytes32"
        }], ["int", {
            type: "int256"
        }], ["int256", {
            type: "int256"
        }], ["string", {
            type: "string"
        }], ["uint", {
            type: "uint256"
        }], ["uint8", {
            type: "uint8"
        }], ["uint16", {
            type: "uint16"
        }], ["uint24", {
            type: "uint24"
        }], ["uint32", {
            type: "uint32"
        }], ["uint64", {
            type: "uint64"
        }], ["uint96", {
            type: "uint96"
        }], ["uint112", {
            type: "uint112"
        }], ["uint160", {
            type: "uint160"
        }], ["uint192", {
            type: "uint192"
        }], ["uint256", {
            type: "uint256"
        }], ["address owner", {
            type: "address",
            name: "owner"
        }], ["address to", {
            type: "address",
            name: "to"
        }], ["bool approved", {
            type: "bool",
            name: "approved"
        }], ["bytes _data", {
            type: "bytes",
            name: "_data"
        }], ["bytes data", {
            type: "bytes",
            name: "data"
        }], ["bytes signature", {
            type: "bytes",
            name: "signature"
        }], ["bytes32 hash", {
            type: "bytes32",
            name: "hash"
        }], ["bytes32 r", {
            type: "bytes32",
            name: "r"
        }], ["bytes32 root", {
            type: "bytes32",
            name: "root"
        }], ["bytes32 s", {
            type: "bytes32",
            name: "s"
        }], ["string name", {
            type: "string",
            name: "name"
        }], ["string symbol", {
            type: "string",
            name: "symbol"
        }], ["string tokenURI", {
            type: "string",
            name: "tokenURI"
        }], ["uint tokenId", {
            type: "uint256",
            name: "tokenId"
        }], ["uint8 v", {
            type: "uint8",
            name: "v"
        }], ["uint256 balance", {
            type: "uint256",
            name: "balance"
        }], ["uint256 tokenId", {
            type: "uint256",
            name: "tokenId"
        }], ["uint256 value", {
            type: "uint256",
            name: "value"
        }], ["event:address indexed from", {
            type: "address",
            name: "from",
            indexed: !0
        }], ["event:address indexed to", {
            type: "address",
            name: "to",
            indexed: !0
        }], ["event:uint indexed tokenId", {
            type: "uint256",
            name: "tokenId",
            indexed: !0
        }], ["event:uint256 indexed tokenId", {
            type: "uint256",
            name: "tokenId",
            indexed: !0
        }]])
          , k = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/
          , B = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/
          , D = /^u?int$/;
        function P(e, t) {
            var n, i, r;
            let s;
            let o = (n = t?.type) ? `${n}:${e}` : e;
            if (x.has(o))
                return x.get(o);
            let c = a.cN.test(e)
              , l = (0,
            a.Zw)(c ? B : k, e);
            if (!l)
                throw new A({
                    param: e
                });
            if (l.name && ("address" === (i = l.name) || "bool" === i || "function" === i || "string" === i || "tuple" === i || a.eL.test(i) || a.lh.test(i) || S.test(i)))
                throw new w({
                    param: e,
                    name: l.name
                });
            let u = l.name ? {
                name: l.name
            } : {}
              , d = "indexed" === l.modifier ? {
                indexed: !0
            } : {}
              , p = t?.structs ?? {}
              , f = {};
            if (c) {
                s = "tuple";
                let e = Q(l.type)
                  , t = []
                  , n = e.length;
                for (let a = 0; a < n; a++)
                    t.push(P(e[a], {
                        structs: p
                    }));
                f = {
                    components: t
                }
            } else if (l.type in p)
                s = "tuple",
                f = {
                    components: p[l.type]
                };
            else if (D.test(l.type))
                s = `${l.type}256`;
            else if (s = l.type,
            t?.type !== "struct" && !U(s))
                throw new m({
                    type: s
                });
            if (l.modifier) {
                if (!t?.modifiers?.has?.(l.modifier))
                    throw new g({
                        param: e,
                        type: t?.type,
                        modifier: l.modifier
                    });
                if (h.has(l.modifier) && (r = s,
                !l.array && "bytes" !== r && "string" !== r && "tuple" !== r))
                    throw new b({
                        param: e,
                        type: t?.type,
                        modifier: l.modifier
                    })
            }
            let y = {
                type: `${s}${l.array ?? ""}`,
                ...u,
                ...d,
                ...f
            };
            return x.set(o, y),
            y
        }
        function Q(e, t=[], n="", a=0) {
            let i = e.trim().length;
            for (let r = 0; r < i; r++) {
                let i = e[r]
                  , s = e.slice(r + 1);
                switch (i) {
                case ",":
                    return 0 === a ? Q(s, [...t, n.trim()]) : Q(s, t, `${n}${i}`, a);
                case "(":
                    return Q(s, t, `${n}${i}`, a + 1);
                case ")":
                    return Q(s, t, `${n}${i}`, a - 1);
                default:
                    return Q(s, t, `${n}${i}`, a)
                }
            }
            if ("" === n)
                return t;
            if (0 !== a)
                throw new N({
                    current: n,
                    depth: a
                });
            return t.push(n.trim()),
            t
        }
        function U(e) {
            return "address" === e || "bool" === e || "function" === e || "string" === e || a.eL.test(e) || a.lh.test(e)
        }
        let S = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/
          , M = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
        function T(e) {
            let t = function(e) {
                let t = {}
                  , n = e.length;
                for (let i = 0; i < n; i++) {
                    let n = e[i];
                    if (!o.test(n))
                        continue;
                    let r = (0,
                    a.Zw)(o, n);
                    if (!r)
                        throw new C({
                            signature: n,
                            type: "struct"
                        });
                    let s = r.properties.split(";")
                      , c = []
                      , l = s.length;
                    for (let e = 0; e < l; e++) {
                        let t = s[e].trim();
                        if (!t)
                            continue;
                        let n = P(t, {
                            type: "struct"
                        });
                        c.push(n)
                    }
                    if (!c.length)
                        throw new E({
                            signature: n
                        });
                    t[r.name] = c
                }
                let i = {}
                  , r = Object.entries(t)
                  , s = r.length;
                for (let e = 0; e < s; e++) {
                    let[n,s] = r[e];
                    i[n] = function e(t, n, i=new Set) {
                        let r = []
                          , s = t.length;
                        for (let o = 0; o < s; o++) {
                            let s = t[o];
                            if (a.cN.test(s.type))
                                r.push(s);
                            else {
                                let t = (0,
                                a.Zw)(M, s.type);
                                if (!t?.type)
                                    throw new y({
                                        abiParameter: s
                                    });
                                let {array: o, type: c} = t;
                                if (c in n) {
                                    if (i.has(c))
                                        throw new I({
                                            type: c
                                        });
                                    r.push({
                                        ...s,
                                        type: `tuple${o ?? ""}`,
                                        components: e(n[c] ?? [], n, new Set([...i, c]))
                                    })
                                } else if (U(c))
                                    r.push(s);
                                else
                                    throw new f({
                                        type: c
                                    })
                            }
                        }
                        return r
                    }(s, t)
                }
                return i
            }(e)
              , n = []
              , p = e.length;
            for (let f = 0; f < p; f++) {
                let p = e[f];
                o.test(p) || n.push(function(e, t={}) {
                    if (s.test(e)) {
                        let n = (0,
                        a.Zw)(s, e);
                        if (!n)
                            throw new C({
                                signature: e,
                                type: "function"
                            });
                        let i = Q(n.parameters)
                          , r = []
                          , o = i.length;
                        for (let e = 0; e < o; e++)
                            r.push(P(i[e], {
                                modifiers: h,
                                structs: t,
                                type: "function"
                            }));
                        let c = [];
                        if (n.returns) {
                            let e = Q(n.returns)
                              , a = e.length;
                            for (let n = 0; n < a; n++)
                                c.push(P(e[n], {
                                    modifiers: h,
                                    structs: t,
                                    type: "function"
                                }))
                        }
                        return {
                            name: n.name,
                            type: "function",
                            stateMutability: n.stateMutability ?? "nonpayable",
                            inputs: r,
                            outputs: c
                        }
                    }
                    if (r.test(e)) {
                        let n = (0,
                        a.Zw)(r, e);
                        if (!n)
                            throw new C({
                                signature: e,
                                type: "event"
                            });
                        let i = Q(n.parameters)
                          , s = []
                          , o = i.length;
                        for (let e = 0; e < o; e++)
                            s.push(P(i[e], {
                                modifiers: d,
                                structs: t,
                                type: "event"
                            }));
                        return {
                            name: n.name,
                            type: "event",
                            inputs: s
                        }
                    }
                    if (i.test(e)) {
                        let n = (0,
                        a.Zw)(i, e);
                        if (!n)
                            throw new C({
                                signature: e,
                                type: "error"
                            });
                        let r = Q(n.parameters)
                          , s = []
                          , o = r.length;
                        for (let e = 0; e < o; e++)
                            s.push(P(r[e], {
                                structs: t,
                                type: "error"
                            }));
                        return {
                            name: n.name,
                            type: "error",
                            inputs: s
                        }
                    }
                    if (c.test(e)) {
                        let n = (0,
                        a.Zw)(c, e);
                        if (!n)
                            throw new C({
                                signature: e,
                                type: "constructor"
                            });
                        let i = Q(n.parameters)
                          , r = []
                          , s = i.length;
                        for (let e = 0; e < s; e++)
                            r.push(P(i[e], {
                                structs: t,
                                type: "constructor"
                            }));
                        return {
                            type: "constructor",
                            stateMutability: n.stateMutability ?? "nonpayable",
                            inputs: r
                        }
                    }
                    if (l.test(e))
                        return {
                            type: "fallback"
                        };
                    if (u.test(e))
                        return {
                            type: "receive",
                            stateMutability: "payable"
                        };
                    throw new v({
                        signature: e
                    })
                }(p, t))
            }
            return n
        }
        var R = n(96104)
          , L = n(21620)
          , K = n(6649)
          , O = n(89045)
          , F = n(58591)
          , G = n(97225)
          , H = n(32637)
          , J = n(31006)
          , q = n(18543)
          , j = n(95046)
          , z = n(37764)
          , V = n(43149)
          , Z = n(27031)
          , W = n(37669)
          , Y = n(10639)
          , X = n(11667)
          , _ = n(82857);
        async function $(e, t) {
            let {account: a=e.account, batch: i=!!e.batch?.multicall, blockNumber: r, blockTag: s="latest", accessList: o, blobs: c, code: l, data: u, factory: d, factoryData: h, gas: p, gasPrice: f, maxFeePerBlobGas: m, maxFeePerGas: A, maxPriorityFeePerGas: w, nonce: g, to: b, value: y, stateOverride: C, ...v} = t
              , E = a ? (0,
            R.T)(a) : void 0;
            if (l && (d || h))
                throw new K.G("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
            if (l && b)
                throw new K.G("Cannot provide both `code` & `to` as parameters.");
            let I = l && u
              , N = d && h && b && u
              , x = I || N
              , k = I ? function(e) {
                let {code: t, data: n} = e;
                return (0,
                H.w)({
                    abi: T(["constructor(bytes, bytes)"]),
                    bytecode: "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
                    args: [t, n]
                })
            }({
                code: l,
                data: u
            }) : N ? function(e) {
                let {data: t, factory: n, factoryData: a, to: i} = e;
                return (0,
                H.w)({
                    abi: T(["constructor(address, bytes, address, bytes)"]),
                    bytecode: "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
                    args: [i, t, n, a]
                })
            }({
                data: u,
                factory: d,
                factoryData: h,
                to: b
            }) : u;
            try {
                (0,
                _.F)(t);
                let n = (r ? (0,
                j.eC)(r) : void 0) || s
                  , a = (0,
                X.mF)(C)
                  , l = e.chain?.formatters?.transactionRequest?.format
                  , u = (l || W.tG)({
                    ...(0,
                    Z.K)(v, {
                        format: l
                    }),
                    from: E?.address,
                    accessList: o,
                    blobs: c,
                    data: k,
                    gas: p,
                    gasPrice: f,
                    maxFeePerBlobGas: m,
                    maxFeePerGas: A,
                    maxPriorityFeePerGas: w,
                    nonce: g,
                    to: x ? void 0 : b,
                    value: y
                });
                if (i && function({request: e}) {
                    let {data: t, to: n, ...a} = e;
                    return !(!t || t.startsWith("0x82ad56cb")) && !!n && !(Object.values(a).filter(e => void 0 !== e).length > 0)
                }({
                    request: u
                }) && !a)
                    try {
                        return await ee(e, {
                            ...u,
                            blockNumber: r,
                            blockTag: s
                        })
                    } catch (e) {
                        if (!(e instanceof O.pZ) && !(e instanceof O.mm))
                            throw e
                    }
                let d = await e.request({
                    method: "eth_call",
                    params: a ? [u, n, a] : [u, n]
                });
                if ("0x" === d)
                    return {
                        data: void 0
                    };
                return {
                    data: d
                }
            } catch (s) {
                let a = function(e) {
                    if (!(e instanceof K.G))
                        return;
                    let t = e.walk();
                    return "object" == typeof t?.data ? t.data?.data : t.data
                }(s)
                  , {offchainLookup: i, offchainLookupSignature: r} = await n.e(1395).then(n.bind(n, 81395));
                if (!1 !== e.ccipRead && a?.slice(0, 10) === r && b)
                    return {
                        data: await i(e, {
                            data: a,
                            to: b
                        })
                    };
                if (x && a?.slice(0, 10) === "0x101bb98d")
                    throw new F.Mo({
                        factory: d
                    });
                throw function(e, {docsPath: t, ...n}) {
                    let a = ( () => {
                        let t = (0,
                        V.k)(e, n);
                        return t instanceof z.cj ? e : t
                    }
                    )();
                    return new F.cg(a,{
                        docsPath: t,
                        ...n
                    })
                }(s, {
                    ...t,
                    account: E,
                    chain: e.chain
                })
            }
        }
        async function ee(e, t) {
            let {batchSize: n=1024, wait: a=0} = "object" == typeof e.batch?.multicall ? e.batch.multicall : {}
              , {blockNumber: i, blockTag: r="latest", data: s, multicallAddress: o, to: c} = t
              , l = o;
            if (!l) {
                if (!e.chain)
                    throw new O.pZ;
                l = (0,
                q.L)({
                    blockNumber: i,
                    chain: e.chain,
                    contract: "multicall3"
                })
            }
            let u = (i ? (0,
            j.eC)(i) : void 0) || r
              , {schedule: d} = (0,
            Y.S)({
                id: `${e.uid}.${u}`,
                wait: a,
                shouldSplitBatch: e => e.reduce( (e, {data: t}) => e + (t.length - 2), 0) > 2 * n,
                fn: async t => {
                    let n = t.map(e => ({
                        allowFailure: !0,
                        callData: e.data,
                        target: e.to
                    }))
                      , a = (0,
                    J.R)({
                        abi: L.F8,
                        args: [n],
                        functionName: "aggregate3"
                    })
                      , i = await e.request({
                        method: "eth_call",
                        params: [{
                            data: a,
                            to: l
                        }, u]
                    });
                    return (0,
                    G.k)({
                        abi: L.F8,
                        args: [n],
                        functionName: "aggregate3",
                        data: i || "0x"
                    })
                }
            })
              , [{returnData: h, success: p}] = await d({
                data: s,
                to: c
            });
            if (!p)
                throw new F.VQ({
                    data: h
                });
            return "0x" === h ? {
                data: void 0
            } : {
                data: h
            }
        }
    },
    3796: function(e, t, n) {
        n.d(t, {
            L: function() {
                return c
            }
        });
        var a = n(97225)
          , i = n(31006)
          , r = n(92915)
          , s = n(93413)
          , o = n(1895);
        async function c(e, t) {
            let {abi: n, address: c, args: l, functionName: u, ...d} = t
              , h = (0,
            i.R)({
                abi: n,
                args: l,
                functionName: u
            });
            try {
                let {data: t} = await (0,
                s.s)(e, o.R, "call")({
                    ...d,
                    data: h,
                    to: c
                });
                return (0,
                a.k)({
                    abi: n,
                    args: l,
                    functionName: u,
                    data: t || "0x"
                })
            } catch (e) {
                throw (0,
                r.S)(e, {
                    abi: n,
                    address: c,
                    args: l,
                    docsPath: "/docs/contract/readContract",
                    functionName: u
                })
            }
        }
    },
    99445: function(e, t, n) {
        n.d(t, {
            u: function() {
                return i
            }
        });
        var a = n(32784);
        let i = (0,
        n(95258).a)({
            ...a.i,
            id: 8453,
            name: "Base",
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18
            },
            rpcUrls: {
                default: {
                    http: ["https://mainnet.base.org"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Basescan",
                    url: "https://basescan.org",
                    apiUrl: "https://api.basescan.org/api"
                }
            },
            contracts: {
                ...a.i.contracts,
                disputeGameFactory: {
                    1: {
                        address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"
                    }
                },
                l2OutputOracle: {
                    1: {
                        address: "0x56315b90c40730925ec5485cf004d835058518A0"
                    }
                },
                multicall3: {
                    address: "0xca11bde05977b3631167028862be2a173976ca11",
                    blockCreated: 5022
                },
                portal: {
                    1: {
                        address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                        blockCreated: 17482143
                    }
                },
                l1StandardBridge: {
                    1: {
                        address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                        blockCreated: 17482143
                    }
                }
            },
            sourceId: 1
        })
    },
    23281: function(e, t, n) {
        n.d(t, {
            e: function() {
                return a
            }
        });
        let a = (0,
        n(95258).a)({
            id: 56,
            name: "BNB Smart Chain",
            nativeCurrency: {
                decimals: 18,
                name: "BNB",
                symbol: "BNB"
            },
            rpcUrls: {
                default: {
                    http: ["https://rpc.ankr.com/bsc"]
                }
            },
            blockExplorers: {
                default: {
                    name: "BscScan",
                    url: "https://bscscan.com",
                    apiUrl: "https://api.bscscan.com/api"
                }
            },
            contracts: {
                multicall3: {
                    address: "0xca11bde05977b3631167028862be2a173976ca11",
                    blockCreated: 15921452
                }
            }
        })
    },
    16491: function(e, t, n) {
        n.d(t, {
            R: function() {
                return a
            }
        });
        let a = (0,
        n(95258).a)({
            id: 1,
            name: "Ethereum",
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18
            },
            rpcUrls: {
                default: {
                    http: ["https://cloudflare-eth.com"]
                }
            },
            blockExplorers: {
                default: {
                    name: "Etherscan",
                    url: "https://etherscan.io",
                    apiUrl: "https://api.etherscan.io/api"
                }
            },
            contracts: {
                ensRegistry: {
                    address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                },
                ensUniversalResolver: {
                    address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                    blockCreated: 19258213
                },
                multicall3: {
                    address: "0xca11bde05977b3631167028862be2a173976ca11",
                    blockCreated: 14353601
                }
            }
        })
    },
    21620: function(e, t, n) {
        n.d(t, {
            F8: function() {
                return a
            },
            X$: function() {
                return c
            },
            du: function() {
                return s
            },
            k3: function() {
                return r
            },
            nZ: function() {
                return o
            }
        });
        let a = [{
            inputs: [{
                components: [{
                    name: "target",
                    type: "address"
                }, {
                    name: "allowFailure",
                    type: "bool"
                }, {
                    name: "callData",
                    type: "bytes"
                }],
                name: "calls",
                type: "tuple[]"
            }],
            name: "aggregate3",
            outputs: [{
                components: [{
                    name: "success",
                    type: "bool"
                }, {
                    name: "returnData",
                    type: "bytes"
                }],
                name: "returnData",
                type: "tuple[]"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , i = [{
            inputs: [],
            name: "ResolverNotFound",
            type: "error"
        }, {
            inputs: [],
            name: "ResolverWildcardNotSupported",
            type: "error"
        }, {
            inputs: [],
            name: "ResolverNotContract",
            type: "error"
        }, {
            inputs: [{
                name: "returnData",
                type: "bytes"
            }],
            name: "ResolverError",
            type: "error"
        }, {
            inputs: [{
                components: [{
                    name: "status",
                    type: "uint16"
                }, {
                    name: "message",
                    type: "string"
                }],
                name: "errors",
                type: "tuple[]"
            }],
            name: "HttpError",
            type: "error"
        }]
          , r = [...i, {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "name",
                type: "bytes"
            }, {
                name: "data",
                type: "bytes"
            }],
            outputs: [{
                name: "",
                type: "bytes"
            }, {
                name: "address",
                type: "address"
            }]
        }, {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "name",
                type: "bytes"
            }, {
                name: "data",
                type: "bytes"
            }, {
                name: "gateways",
                type: "string[]"
            }],
            outputs: [{
                name: "",
                type: "bytes"
            }, {
                name: "address",
                type: "address"
            }]
        }]
          , s = [...i, {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{
                type: "bytes",
                name: "reverseName"
            }],
            outputs: [{
                type: "string",
                name: "resolvedName"
            }, {
                type: "address",
                name: "resolvedAddress"
            }, {
                type: "address",
                name: "reverseResolver"
            }, {
                type: "address",
                name: "resolver"
            }]
        }, {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{
                type: "bytes",
                name: "reverseName"
            }, {
                type: "string[]",
                name: "gateways"
            }],
            outputs: [{
                type: "string",
                name: "resolvedName"
            }, {
                type: "address",
                name: "resolvedAddress"
            }, {
                type: "address",
                name: "reverseResolver"
            }, {
                type: "address",
                name: "resolver"
            }]
        }]
          , o = [{
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "name",
                type: "bytes32"
            }, {
                name: "key",
                type: "string"
            }],
            outputs: [{
                name: "",
                type: "string"
            }]
        }]
          , c = [{
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "name",
                type: "bytes32"
            }],
            outputs: [{
                name: "",
                type: "address"
            }]
        }, {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "name",
                type: "bytes32"
            }, {
                name: "coinType",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bytes"
            }]
        }]
    },
    32784: function(e, t, n) {
        n.d(t, {
            i: function() {
                return Q
            }
        });
        var a = n(21019)
          , i = n(20621)
          , r = n(16719)
          , s = n(93130);
        let o = {
            block: (0,
            i.G)({
                format: e => ({
                    transactions: e.transactions?.map(e => {
                        if ("string" == typeof e)
                            return e;
                        let t = r.Tr(e);
                        return "0x7e" === t.typeHex && (t.isSystemTx = e.isSystemTx,
                        t.mint = e.mint ? a.y_(e.mint) : void 0,
                        t.sourceHash = e.sourceHash,
                        t.type = "deposit"),
                        t
                    }
                    ),
                    stateRoot: e.stateRoot
                })
            }),
            transaction: (0,
            r.y_)({
                format(e) {
                    let t = {};
                    return "0x7e" === e.type && (t.isSystemTx = e.isSystemTx,
                    t.mint = e.mint ? (0,
                    a.y_)(e.mint) : void 0,
                    t.sourceHash = e.sourceHash,
                    t.type = "deposit"),
                    t
                }
            }),
            transactionReceipt: (0,
            s.dI)({
                format: e => ({
                    l1GasPrice: e.l1GasPrice ? (0,
                    a.y_)(e.l1GasPrice) : null,
                    l1GasUsed: e.l1GasUsed ? (0,
                    a.y_)(e.l1GasUsed) : null,
                    l1Fee: e.l1Fee ? (0,
                    a.y_)(e.l1Fee) : null,
                    l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
                })
            })
        };
        var c = n(51359)
          , l = n(64113)
          , u = n(53932)
          , d = n(95046)
          , h = n(7092)
          , p = n(97658)
          , f = n(40598)
          , m = n(18383)
          , A = n(92486)
          , w = n(30721)
          , g = n(77955)
          , b = n(9383)
          , y = n(62798)
          , C = n(6649)
          , v = n(25678)
          , E = n(89045)
          , I = n(37764)
          , N = n(7508)
          , x = n(49014);
        function k(e) {
            let {chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: a, to: i} = e;
            if (t <= 0)
                throw new E.hJ({
                    chainId: t
                });
            if (i && !(0,
            l.U)(i))
                throw new c.b({
                    address: i
                });
            if (a && a > y.zL)
                throw new I.Hh({
                    maxFeePerGas: a
                });
            if (n && a && n > a)
                throw new I.cs({
                    maxFeePerGas: a,
                    maxPriorityFeePerGas: n
                })
        }
        var B = n(33884);
        function D(e) {
            if (!e || 0 === e.length)
                return [];
            let t = [];
            for (let n = 0; n < e.length; n++) {
                let {address: a, storageKeys: i} = e[n];
                for (let e = 0; e < i.length; e++)
                    if (i[e].length - 2 != 64)
                        throw new p.JC({
                            storageKey: i[e]
                        });
                if (!(0,
                l.U)(a, {
                    strict: !1
                }))
                    throw new c.b({
                        address: a
                    });
                t.push([a, i])
            }
            return t
        }
        function P(e, t) {
            let n = t ?? e
              , {v: a, yParity: i} = n;
            if (void 0 === n.r || void 0 === n.s || void 0 === a && void 0 === i)
                return [];
            let r = (0,
            g.f)(n.r)
              , s = (0,
            g.f)(n.s);
            return ["number" == typeof i ? i ? (0,
            d.NC)(1) : "0x" : 0n === a ? "0x" : 1n === a ? (0,
            d.NC)(1) : 27n === a ? "0x" : (0,
            d.NC)(1), "0x00" === r ? "0x" : r, "0x00" === s ? "0x" : s]
        }
        let Q = {
            contracts: {
                gasPriceOracle: {
                    address: "0x420000000000000000000000000000000000000F"
                },
                l1Block: {
                    address: "0x4200000000000000000000000000000000000015"
                },
                l2CrossDomainMessenger: {
                    address: "0x4200000000000000000000000000000000000007"
                },
                l2Erc721Bridge: {
                    address: "0x4200000000000000000000000000000000000014"
                },
                l2StandardBridge: {
                    address: "0x4200000000000000000000000000000000000010"
                },
                l2ToL1MessagePasser: {
                    address: "0x4200000000000000000000000000000000000016"
                }
            },
            formatters: o,
            serializers: {
                transaction: function(e, t) {
                    return "deposit" === e.type || void 0 !== e.sourceHash ? function(e) {
                        !function(e) {
                            let {from: t, to: n} = e;
                            if (t && !(0,
                            l.U)(t))
                                throw new c.b({
                                    address: t
                                });
                            if (n && !(0,
                            l.U)(n))
                                throw new c.b({
                                    address: n
                                })
                        }(e);
                        let {sourceHash: t, data: n, from: a, gas: i, isSystemTx: r, mint: s, to: o, value: p} = e
                          , f = [t, a, o ?? "0x", s ? (0,
                        d.NC)(s) : "0x", p ? (0,
                        d.NC)(p) : "0x", i ? (0,
                        d.NC)(i) : "0x", r ? "0x1" : "0x", n ?? "0x"];
                        return (0,
                        u.SM)(["0x7e", (0,
                        h.LV)(f)])
                    }(e) : function(e, t) {
                        let n = (0,
                        B.l)(e);
                        return "eip1559" === n ? function(e, t) {
                            let {chainId: n, gas: a, nonce: i, to: r, value: s, maxFeePerGas: o, maxPriorityFeePerGas: c, accessList: l, data: p} = e;
                            k(e);
                            let f = D(l)
                              , m = [(0,
                            d.NC)(n), i ? (0,
                            d.NC)(i) : "0x", c ? (0,
                            d.NC)(c) : "0x", o ? (0,
                            d.NC)(o) : "0x", a ? (0,
                            d.NC)(a) : "0x", r ?? "0x", s ? (0,
                            d.NC)(s) : "0x", p ?? "0x", f, ...P(e, t)];
                            return (0,
                            u.SM)(["0x02", (0,
                            h.LV)(m)])
                        }(e, t) : "eip2930" === n ? function(e, t) {
                            let {chainId: n, gas: a, data: i, nonce: r, to: s, value: o, accessList: p, gasPrice: f} = e;
                            !function(e) {
                                let {chainId: t, maxPriorityFeePerGas: n, gasPrice: a, maxFeePerGas: i, to: r} = e;
                                if (t <= 0)
                                    throw new E.hJ({
                                        chainId: t
                                    });
                                if (r && !(0,
                                l.U)(r))
                                    throw new c.b({
                                        address: r
                                    });
                                if (n || i)
                                    throw new C.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
                                if (a && a > y.zL)
                                    throw new I.Hh({
                                        maxFeePerGas: a
                                    })
                            }(e);
                            let m = D(p)
                              , A = [(0,
                            d.NC)(n), r ? (0,
                            d.NC)(r) : "0x", f ? (0,
                            d.NC)(f) : "0x", a ? (0,
                            d.NC)(a) : "0x", s ?? "0x", o ? (0,
                            d.NC)(o) : "0x", i ?? "0x", m, ...P(e, t)];
                            return (0,
                            u.SM)(["0x01", (0,
                            h.LV)(A)])
                        }(e, t) : "eip4844" === n ? function(e, t) {
                            let {chainId: n, gas: i, nonce: r, to: s, value: o, maxFeePerBlobGas: c, maxFeePerGas: l, maxPriorityFeePerGas: p, accessList: g, data: y} = e;
                            !function(e) {
                                let {blobVersionedHashes: t} = e;
                                if (t) {
                                    if (0 === t.length)
                                        throw new v.RX;
                                    for (let e of t) {
                                        let t = (0,
                                        N.d)(e)
                                          , n = (0,
                                        a.ly)((0,
                                        x.tP)(e, 0, 1));
                                        if (32 !== t)
                                            throw new v.xd({
                                                hash: e,
                                                size: t
                                            });
                                        if (n !== b.l)
                                            throw new v.cJ({
                                                hash: e,
                                                version: n
                                            })
                                    }
                                }
                                k(e)
                            }(e);
                            let C = e.blobVersionedHashes
                              , E = e.sidecars;
                            if (e.blobs && (void 0 === C || void 0 === E)) {
                                let t = "string" == typeof e.blobs[0] ? e.blobs : e.blobs.map(e => (0,
                                d.ci)(e))
                                  , n = e.kzg
                                  , a = (0,
                                f.P)({
                                    blobs: t,
                                    kzg: n
                                });
                                if (void 0 === C && (C = (0,
                                A.C)({
                                    commitments: a
                                })),
                                void 0 === E) {
                                    let e = (0,
                                    m.y)({
                                        blobs: t,
                                        commitments: a,
                                        kzg: n
                                    });
                                    E = (0,
                                    w.j)({
                                        blobs: t,
                                        commitments: a,
                                        proofs: e
                                    })
                                }
                            }
                            let I = D(g)
                              , B = [(0,
                            d.NC)(n), r ? (0,
                            d.NC)(r) : "0x", p ? (0,
                            d.NC)(p) : "0x", l ? (0,
                            d.NC)(l) : "0x", i ? (0,
                            d.NC)(i) : "0x", s ?? "0x", o ? (0,
                            d.NC)(o) : "0x", y ?? "0x", I, c ? (0,
                            d.NC)(c) : "0x", C ?? [], ...P(e, t)]
                              , Q = []
                              , U = []
                              , S = [];
                            if (E)
                                for (let e = 0; e < E.length; e++) {
                                    let {blob: t, commitment: n, proof: a} = E[e];
                                    Q.push(t),
                                    U.push(n),
                                    S.push(a)
                                }
                            return (0,
                            u.SM)(["0x03", E ? (0,
                            h.LV)([B, Q, U, S]) : (0,
                            h.LV)(B)])
                        }(e, t) : "eip7702" === n ? function(e, t) {
                            let {authorizationList: n, chainId: a, gas: i, nonce: r, to: s, value: o, maxFeePerGas: p, maxPriorityFeePerGas: f, accessList: m, data: A} = e;
                            !function(e) {
                                let {authorizationList: t} = e;
                                if (t)
                                    for (let e of t) {
                                        let {contractAddress: t, chainId: n} = e;
                                        if (!(0,
                                        l.U)(t))
                                            throw new c.b({
                                                address: t
                                            });
                                        if (n < 0)
                                            throw new E.hJ({
                                                chainId: n
                                            })
                                    }
                                k(e)
                            }(e);
                            let w = D(m)
                              , g = function(e) {
                                if (!e || 0 === e.length)
                                    return [];
                                let t = [];
                                for (let n of e) {
                                    let {contractAddress: e, chainId: a, nonce: i, ...r} = n;
                                    t.push([a ? (0,
                                    d.NC)(a) : "0x", e, i ? (0,
                                    d.NC)(i) : "0x", ...P({}, r)])
                                }
                                return t
                            }(n);
                            return (0,
                            u.SM)(["0x04", (0,
                            h.LV)([(0,
                            d.NC)(a), r ? (0,
                            d.NC)(r) : "0x", f ? (0,
                            d.NC)(f) : "0x", p ? (0,
                            d.NC)(p) : "0x", i ? (0,
                            d.NC)(i) : "0x", s ?? "0x", o ? (0,
                            d.NC)(o) : "0x", A ?? "0x", w, g, ...P(e, t)])])
                        }(e, t) : function(e, t) {
                            let {chainId: n=0, gas: a, data: i, nonce: r, to: s, value: o, gasPrice: u} = e;
                            !function(e) {
                                let {chainId: t, maxPriorityFeePerGas: n, gasPrice: a, maxFeePerGas: i, to: r} = e;
                                if (r && !(0,
                                l.U)(r))
                                    throw new c.b({
                                        address: r
                                    });
                                if (void 0 !== t && t <= 0)
                                    throw new E.hJ({
                                        chainId: t
                                    });
                                if (n || i)
                                    throw new C.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
                                if (a && a > y.zL)
                                    throw new I.Hh({
                                        maxFeePerGas: a
                                    })
                            }(e);
                            let f = [r ? (0,
                            d.NC)(r) : "0x", u ? (0,
                            d.NC)(u) : "0x", a ? (0,
                            d.NC)(a) : "0x", s ?? "0x", o ? (0,
                            d.NC)(o) : "0x", i ?? "0x"];
                            if (t) {
                                let e = ( () => {
                                    if (t.v >= 35n)
                                        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (35n === t.v ? 0n : 1n);
                                    if (n > 0)
                                        return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                                    let e = 27n + (27n === t.v ? 0n : 1n);
                                    if (t.v !== e)
                                        throw new p.vl({
                                            v: t.v
                                        });
                                    return e
                                }
                                )()
                                  , a = (0,
                                g.f)(t.r)
                                  , i = (0,
                                g.f)(t.s);
                                f = [...f, (0,
                                d.NC)(e), "0x00" === a ? "0x" : a, "0x00" === i ? "0x" : i]
                            } else
                                n > 0 && (f = [...f, (0,
                                d.NC)(n), "0x", "0x"]);
                            return (0,
                            h.LV)(f)
                        }(e, t)
                    }(e, t)
                }
            }
        }
    },
    97225: function(e, t, n) {
        n.d(t, {
            k: function() {
                return o
            }
        });
        var a = n(52186)
          , i = n(52998)
          , r = n(10865);
        let s = "/docs/contract/decodeFunctionResult";
        function o(e) {
            let {abi: t, args: n, functionName: o, data: c} = e
              , l = t[0];
            if (o) {
                let e = (0,
                r.mE)({
                    abi: t,
                    args: n,
                    name: o
                });
                if (!e)
                    throw new a.xL(o,{
                        docsPath: s
                    });
                l = e
            }
            if ("function" !== l.type)
                throw new a.xL(void 0,{
                    docsPath: s
                });
            if (!l.outputs)
                throw new a.MX(l.name,{
                    docsPath: s
                });
            let u = (0,
            i.r)(l.outputs, c);
            return u && u.length > 1 ? u : u && 1 === u.length ? u[0] : void 0
        }
    },
    95258: function(e, t, n) {
        n.d(t, {
            a: function() {
                return a
            }
        });
        function a(e) {
            return {
                formatters: void 0,
                fees: void 0,
                serializers: void 0,
                ...e
            }
        }
    },
    18543: function(e, t, n) {
        n.d(t, {
            L: function() {
                return i
            }
        });
        var a = n(89045);
        function i({blockNumber: e, chain: t, contract: n}) {
            let i = t?.contracts?.[n];
            if (!i)
                throw new a.mm({
                    chain: t,
                    contract: {
                        name: n
                    }
                });
            if (e && i.blockCreated && i.blockCreated > e)
                throw new a.mm({
                    blockNumber: e,
                    chain: t,
                    contract: {
                        name: n,
                        blockCreated: i.blockCreated
                    }
                });
            return i.address
        }
    },
    93130: function(e, t, n) {
        n.d(t, {
            dI: function() {
                return c
            },
            fA: function() {
                return o
            }
        });
        var a = n(21019)
          , i = n(74558)
          , r = n(16719);
        let s = {
            "0x0": "reverted",
            "0x1": "success"
        };
        function o(e) {
            let t = {
                ...e,
                blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                contractAddress: e.contractAddress ? e.contractAddress : null,
                cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                logs: e.logs ? e.logs.map(e => (function(e, {args: t, eventName: n}={}) {
                    return {
                        ...e,
                        blockHash: e.blockHash ? e.blockHash : null,
                        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                        logIndex: e.logIndex ? Number(e.logIndex) : null,
                        transactionHash: e.transactionHash ? e.transactionHash : null,
                        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                        ...n ? {
                            args: t,
                            eventName: n
                        } : {}
                    }
                }
                )(e)) : null,
                to: e.to ? e.to : null,
                transactionIndex: e.transactionIndex ? (0,
                a.ly)(e.transactionIndex) : null,
                status: e.status ? s[e.status] : null,
                type: e.type ? r.c8[e.type] || e.type : null
            };
            return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
            e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
            t
        }
        let c = (0,
        i.$)("transactionReceipt", o)
    },
    17439: function(e, t, n) {
        n.d(t, {
            v: function() {
                return r
            }
        });
        var a = n(6649);
        class i extends a.G {
            constructor({value: e}) {
                super(`Number \`${e}\` is not a valid decimal number.`, {
                    name: "InvalidDecimalNumberError"
                })
            }
        }
        function r(e, t) {
            if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
                throw new i({
                    value: e
                });
            let[n,a="0"] = e.split(".")
              , r = n.startsWith("-");
            if (r && (n = n.slice(1)),
            a = a.replace(/(0+)$/, ""),
            0 === t)
                1 === Math.round(Number(`.${a}`)) && (n = `${BigInt(n) + 1n}`),
                a = "";
            else if (a.length > t) {
                let[e,i,r] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)]
                  , s = Math.round(Number(`${i}.${r}`));
                (a = s > 9 ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${s}`).length > t && (a = a.slice(1),
                n = `${BigInt(n) + 1n}`),
                a = a.slice(0, t)
            } else
                a = a.padEnd(t, "0");
            return BigInt(`${r ? "-" : ""}${n}${a}`)
        }
    }
}]);
