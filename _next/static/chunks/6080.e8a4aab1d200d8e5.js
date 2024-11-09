(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6080], {
    5777: function(e, t, n) {
        "use strict";
        var r = this && this.__rest || function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletProvider = void 0;
        let s = n(39172)
          , i = n(47224)
          , a = n(47977)
          , o = n(96741)
          , l = n(66320)
          , c = n(42057)
          , d = n(83465)
          , u = n(98997);
        class h extends a.ProviderEventEmitter {
            constructor(e) {
                var {metadata: t} = e
                  , n = e.preference
                  , {keysUrl: s} = n
                  , i = r(n, ["keysUrl"]);
                super(),
                this.signer = null,
                this.isCoinbaseWallet = !0,
                this.metadata = t,
                this.preference = i,
                this.communicator = new c.Communicator(s,t);
                let a = (0,
                o.loadSignerType)();
                a && (this.signer = this.initSigner(a))
            }
            async request(e) {
                try {
                    if ((0,
                    l.checkErrorForInvalidRequestArgs)(e),
                    !this.signer)
                        switch (e.method) {
                        case "eth_requestAccounts":
                            {
                                let t = await this.requestSignerSelection(e)
                                  , n = this.initSigner(t);
                                await n.handshake(e),
                                this.signer = n,
                                (0,
                                o.storeSignerType)(t);
                                break
                            }
                        case "net_version":
                            return 1;
                        case "eth_chainId":
                            return (0,
                            u.hexStringFromNumber)(1);
                        default:
                            throw s.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods")
                        }
                    return this.signer.request(e)
                } catch (t) {
                    let {code: e} = t;
                    return e === s.standardErrorCodes.provider.unauthorized && this.disconnect(),
                    Promise.reject((0,
                    i.serializeError)(t))
                }
            }
            async enable() {
                return console.warn('.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'),
                await this.request({
                    method: "eth_requestAccounts"
                })
            }
            async disconnect() {
                var e;
                await (null === (e = this.signer) || void 0 === e ? void 0 : e.cleanup()),
                this.signer = null,
                d.ScopedLocalStorage.clearAll(),
                this.emit("disconnect", s.standardErrors.provider.disconnected("User initiated disconnection"))
            }
            requestSignerSelection(e) {
                return (0,
                o.fetchSignerType)({
                    communicator: this.communicator,
                    preference: this.preference,
                    metadata: this.metadata,
                    handshakeRequest: e
                })
            }
            initSigner(e) {
                return (0,
                o.createSigner)({
                    signerType: e,
                    metadata: this.metadata,
                    communicator: this.communicator,
                    callback: this.emit.bind(this)
                })
            }
        }
        t.CoinbaseWalletProvider = h
    },
    46111: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletSDK = void 0;
        let r = n(5814)
          , s = n(5777)
          , i = n(54750)
          , a = n(83465)
          , o = n(98997)
          , l = n(66320);
        class c {
            constructor(e) {
                this.metadata = {
                    appName: e.appName || "Dapp",
                    appLogoUrl: e.appLogoUrl || (0,
                    o.getFavicon)(),
                    appChainIds: e.appChainIds || []
                },
                this.storeLatestVersion()
            }
            makeWeb3Provider(e={
                options: "all"
            }) {
                var t;
                let n = {
                    metadata: this.metadata,
                    preference: e
                };
                return null !== (t = (0,
                l.getCoinbaseInjectedProvider)(n)) && void 0 !== t ? t : new s.CoinbaseWalletProvider(n)
            }
            getCoinbaseWalletLogo(e, t=240) {
                return (0,
                r.walletLogo)(e, t)
            }
            storeLatestVersion() {
                new a.ScopedLocalStorage("CBWSDK").setItem("VERSION", i.LIB_VERSION)
            }
        }
        t.CoinbaseWalletSDK = c
    },
    5814: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.walletLogo = void 0,
        t.walletLogo = (e, t) => {
            let n;
            switch (e) {
            case "standard":
            default:
                return n = t,
                `data:image/svg+xml,%3Csvg width='${t}' height='${n}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
            case "circle":
                return n = t,
                `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${n}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
            case "text":
                return n = (.1 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
            case "textWithLogo":
                return n = (.25 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
            case "textLight":
                return n = (.1 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
            case "textWithLogoLight":
                return n = (.25 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
            }
        }
    },
    42057: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Communicator = void 0;
        let r = n(54750)
          , s = n(99285)
          , i = n(39172)
          , a = n(46662);
        class o {
            constructor(e=s.CB_KEYS_URL, t) {
                this.popup = null,
                this.listeners = new Map,
                this.postMessage = async e => {
                    (await this.waitForPopupLoaded()).postMessage(e, this.url.origin)
                }
                ,
                this.postRequestAndWaitForResponse = async e => {
                    let t = this.onMessage( ({requestId: t}) => t === e.id);
                    return this.postMessage(e),
                    await t
                }
                ,
                this.onMessage = async e => new Promise( (t, n) => {
                    let r = n => {
                        if (n.origin !== this.url.origin)
                            return;
                        let s = n.data;
                        e(s) && (t(s),
                        window.removeEventListener("message", r),
                        this.listeners.delete(r))
                    }
                    ;
                    window.addEventListener("message", r),
                    this.listeners.set(r, {
                        reject: n
                    })
                }
                ),
                this.disconnect = () => {
                    (0,
                    a.closePopup)(this.popup),
                    this.popup = null,
                    this.listeners.forEach( ({reject: e}, t) => {
                        e(i.standardErrors.provider.userRejectedRequest("Request rejected")),
                        window.removeEventListener("message", t)
                    }
                    ),
                    this.listeners.clear()
                }
                ,
                this.waitForPopupLoaded = async () => this.popup && !this.popup.closed ? (this.popup.focus(),
                this.popup) : (this.popup = (0,
                a.openPopup)(this.url),
                this.onMessage( ({event: e}) => "PopupUnload" === e).then(this.disconnect).catch( () => {}
                ),
                this.onMessage( ({event: e}) => "PopupLoaded" === e).then(e => {
                    this.postMessage({
                        requestId: e.id,
                        data: {
                            version: r.LIB_VERSION,
                            metadata: this.metadata
                        }
                    })
                }
                ).then( () => {
                    if (!this.popup)
                        throw i.standardErrors.rpc.internal();
                    return this.popup
                }
                )),
                this.url = new URL(e),
                this.metadata = t
            }
        }
        t.Communicator = o
    },
    99285: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CBW_MOBILE_DEEPLINK_URL = t.WALLETLINK_URL = t.CB_KEYS_URL = void 0,
        t.CB_KEYS_URL = "https://keys.coinbase.com/connect",
        t.WALLETLINK_URL = "https://www.walletlink.org",
        t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink"
    },
    4406: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.errorValues = t.standardErrorCodes = void 0,
        t.standardErrorCodes = {
            rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603
            },
            provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901,
                unsupportedChain: 4902
            }
        },
        t.errorValues = {
            "-32700": {
                standard: "JSON RPC 2.0",
                message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available."
            },
            "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s)."
            },
            "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error."
            },
            "-32000": {
                standard: "EIP-1474",
                message: "Invalid input."
            },
            "-32001": {
                standard: "EIP-1474",
                message: "Resource not found."
            },
            "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable."
            },
            "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected."
            },
            "-32004": {
                standard: "EIP-1474",
                message: "Method not supported."
            },
            "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded."
            },
            4001: {
                standard: "EIP-1193",
                message: "User rejected the request."
            },
            4100: {
                standard: "EIP-1193",
                message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
                standard: "EIP-1193",
                message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains."
            },
            4901: {
                standard: "EIP-1193",
                message: "The provider is disconnected from the specified chain."
            },
            4902: {
                standard: "EIP-3085",
                message: "Unrecognized chain ID."
            }
        }
    },
    71839: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.standardErrors = void 0;
        let r = n(4406)
          , s = n(86687);
        function i(e, t) {
            let[n,r] = o(t);
            return new l(e,n || (0,
            s.getMessageFromCode)(e),r)
        }
        function a(e, t) {
            let[n,r] = o(t);
            return new c(e,n || (0,
            s.getMessageFromCode)(e),r)
        }
        function o(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    let {message: t, data: n} = e;
                    if (t && "string" != typeof t)
                        throw Error("Must specify string message.");
                    return [t || void 0, n]
                }
            }
            return []
        }
        t.standardErrors = {
            rpc: {
                parse: e => i(r.standardErrorCodes.rpc.parse, e),
                invalidRequest: e => i(r.standardErrorCodes.rpc.invalidRequest, e),
                invalidParams: e => i(r.standardErrorCodes.rpc.invalidParams, e),
                methodNotFound: e => i(r.standardErrorCodes.rpc.methodNotFound, e),
                internal: e => i(r.standardErrorCodes.rpc.internal, e),
                server: e => {
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw Error("Ethereum RPC Server errors must provide single object argument.");
                    let {code: t} = e;
                    if (!Number.isInteger(t) || t > -32005 || t < -32099)
                        throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                    return i(t, e)
                }
                ,
                invalidInput: e => i(r.standardErrorCodes.rpc.invalidInput, e),
                resourceNotFound: e => i(r.standardErrorCodes.rpc.resourceNotFound, e),
                resourceUnavailable: e => i(r.standardErrorCodes.rpc.resourceUnavailable, e),
                transactionRejected: e => i(r.standardErrorCodes.rpc.transactionRejected, e),
                methodNotSupported: e => i(r.standardErrorCodes.rpc.methodNotSupported, e),
                limitExceeded: e => i(r.standardErrorCodes.rpc.limitExceeded, e)
            },
            provider: {
                userRejectedRequest: e => a(r.standardErrorCodes.provider.userRejectedRequest, e),
                unauthorized: e => a(r.standardErrorCodes.provider.unauthorized, e),
                unsupportedMethod: e => a(r.standardErrorCodes.provider.unsupportedMethod, e),
                disconnected: e => a(r.standardErrorCodes.provider.disconnected, e),
                chainDisconnected: e => a(r.standardErrorCodes.provider.chainDisconnected, e),
                unsupportedChain: e => a(r.standardErrorCodes.provider.unsupportedChain, e),
                custom: e => {
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw Error("Ethereum Provider custom errors must provide single object argument.");
                    let {code: t, message: n, data: r} = e;
                    if (!n || "string" != typeof n)
                        throw Error('"message" must be a nonempty string');
                    return new c(t,n,r)
                }
            }
        };
        class l extends Error {
            constructor(e, t, n) {
                if (!Number.isInteger(e))
                    throw Error('"code" must be an integer.');
                if (!t || "string" != typeof t)
                    throw Error('"message" must be a nonempty string.');
                super(t),
                this.code = e,
                void 0 !== n && (this.data = n)
            }
        }
        class c extends l {
            constructor(e, t, n) {
                if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
                    throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                super(e, t, n)
            }
        }
    },
    39172: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.standardErrors = t.standardErrorCodes = void 0;
        var r = n(4406);
        Object.defineProperty(t, "standardErrorCodes", {
            enumerable: !0,
            get: function() {
                return r.standardErrorCodes
            }
        });
        var s = n(71839);
        Object.defineProperty(t, "standardErrors", {
            enumerable: !0,
            get: function() {
                return s.standardErrors
            }
        })
    },
    47224: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.serializeError = function(e) {
            let t = (0,
            a.serialize)(function(e) {
                var t;
                if ("string" == typeof e)
                    return {
                        message: e,
                        code: i.standardErrorCodes.rpc.internal
                    };
                if ((0,
                r.isErrorResponse)(e)) {
                    let n = e.errorMessage
                      , r = null !== (t = e.errorCode) && void 0 !== t ? t : n.match(/(denied|rejected)/i) ? i.standardErrorCodes.provider.userRejectedRequest : void 0;
                    return Object.assign(Object.assign({}, e), {
                        message: n,
                        code: r,
                        data: {
                            method: e.method
                        }
                    })
                }
                return e
            }(e), {
                shouldIncludeStack: !0
            })
              , n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
            return n.searchParams.set("version", s.LIB_VERSION),
            n.searchParams.set("code", t.code.toString()),
            n.searchParams.set("message", t.message),
            Object.assign(Object.assign({}, t), {
                docUrl: n.href
            })
        }
        ;
        let r = n(83705)
          , s = n(54750)
          , i = n(4406)
          , a = n(86687)
    },
    86687: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0,
        t.getMessageFromCode = i,
        t.isValidCode = a,
        t.getErrorCode = function(e) {
            var t;
            return "number" == typeof e ? e : "object" == typeof e && null !== e && ("number" == typeof e.code || "number" == typeof e.errorCode) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
        }
        ,
        t.serialize = function(e, {shouldIncludeStack: t=!1}={}) {
            let n = {};
            return e && "object" == typeof e && !Array.isArray(e) && l(e, "code") && a(e.code) ? (n.code = e.code,
            e.message && "string" == typeof e.message ? (n.message = e.message,
            l(e, "data") && (n.data = e.data)) : (n.message = i(n.code),
            n.data = {
                originalError: o(e)
            })) : (n.code = r.standardErrorCodes.rpc.internal,
            n.message = c(e, "message") ? e.message : s,
            n.data = {
                originalError: o(e)
            }),
            t && (n.stack = c(e, "stack") ? e.stack : void 0),
            n
        }
        ;
        let r = n(4406)
          , s = "Unspecified error message.";
        function i(e, n=s) {
            if (e && Number.isInteger(e)) {
                let n = e.toString();
                if (l(r.errorValues, n))
                    return r.errorValues[n].message;
                if (e >= -32099 && e <= -32e3)
                    return t.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return n
        }
        function a(e) {
            if (!Number.isInteger(e))
                return !1;
            let t = e.toString();
            return !!(r.errorValues[t] || e >= -32099 && e <= -32e3)
        }
        function o(e) {
            return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
        }
        function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function c(e, t) {
            return "object" == typeof e && null !== e && t in e && "string" == typeof e[t]
        }
        t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."
    },
    47977: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ProviderEventEmitter = void 0;
        let r = n(37836);
        class s extends r.EventEmitter {
        }
        t.ProviderEventEmitter = s
    },
    83465: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScopedLocalStorage = void 0;
        class n {
            constructor(e, t) {
                this.scope = e,
                this.module = t
            }
            storeObject(e, t) {
                this.setItem(e, JSON.stringify(t))
            }
            loadObject(e) {
                let t = this.getItem(e);
                return t ? JSON.parse(t) : void 0
            }
            setItem(e, t) {
                localStorage.setItem(this.scopedKey(e), t)
            }
            getItem(e) {
                return localStorage.getItem(this.scopedKey(e))
            }
            removeItem(e) {
                localStorage.removeItem(this.scopedKey(e))
            }
            clear() {
                let e = this.scopedKey("")
                  , t = [];
                for (let n = 0; n < localStorage.length; n++) {
                    let r = localStorage.key(n);
                    "string" == typeof r && r.startsWith(e) && t.push(r)
                }
                t.forEach(e => localStorage.removeItem(e))
            }
            scopedKey(e) {
                return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`
            }
            static clearAll() {
                new n("CBWSDK").clear(),
                new n("walletlink").clear()
            }
        }
        t.ScopedLocalStorage = n
    },
    34468: function(e, t) {
        "use strict";
        function n() {
            return e => e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RegExpString = t.BigIntString = t.AddressString = t.HexString = void 0,
        t.OpaqueType = n,
        t.IntNumber = function(e) {
            return Math.floor(e)
        }
        ,
        t.HexString = n(),
        t.AddressString = n(),
        t.BigIntString = n(),
        t.RegExpString = n()
    },
    98997: function(e, t, n) {
        "use strict";
        var r = n(9109).Buffer;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.randomBytesHex = function(e) {
            return l(crypto.getRandomValues(new Uint8Array(e)))
        }
        ,
        t.uint8ArrayToHex = l,
        t.hexStringToUint8Array = function(e) {
            return new Uint8Array(e.match(/.{1,2}/g).map(e => parseInt(e, 16)))
        }
        ,
        t.hexStringFromBuffer = c,
        t.encodeToHexString = function(e) {
            return c(_(e), !0)
        }
        ,
        t.bigIntStringFromBigInt = function(e) {
            return (0,
            i.BigIntString)(e.toString(10))
        }
        ,
        t.intNumberFromHexString = function(e) {
            return (0,
            i.IntNumber)(Number(BigInt(g(e, !0))))
        }
        ,
        t.hexStringFromNumber = function(e) {
            return (0,
            i.HexString)(`0x${BigInt(e).toString(16)}`)
        }
        ,
        t.has0xPrefix = d,
        t.strip0x = u,
        t.prepend0x = h,
        t.isHexString = p,
        t.ensureHexString = f,
        t.ensureEvenLengthHexString = g,
        t.ensureAddressString = function(e) {
            if ("string" == typeof e) {
                let t = u(e).toLowerCase();
                if (p(t) && 40 === t.length)
                    return (0,
                    i.AddressString)(h(t))
            }
            throw s.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
        }
        ,
        t.ensureBuffer = _,
        t.ensureIntNumber = m,
        t.ensureRegExpString = function(e) {
            if (e instanceof RegExp)
                return (0,
                i.RegExpString)(e.toString());
            throw s.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
        }
        ,
        t.ensureBigInt = function(e) {
            if (null !== e && ("bigint" == typeof e || y(e)))
                return BigInt(e.toString(10));
            if ("number" == typeof e)
                return BigInt(m(e));
            if ("string" == typeof e) {
                if (a.test(e))
                    return BigInt(e);
                if (p(e))
                    return BigInt(g(e, !0))
            }
            throw s.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
        }
        ,
        t.ensureParsedJSONObject = function(e) {
            if ("string" == typeof e)
                return JSON.parse(e);
            if ("object" == typeof e)
                return e;
            throw s.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
        }
        ,
        t.isBigNumber = y,
        t.range = function(e, t) {
            return Array.from({
                length: t - e
            }, (t, n) => e + n)
        }
        ,
        t.getFavicon = function() {
            let e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
              , {protocol: t, host: n} = document.location
              , r = e ? e.getAttribute("href") : null;
            return !r || r.startsWith("javascript:") || r.startsWith("vbscript:") ? null : r.startsWith("http://") || r.startsWith("https://") || r.startsWith("data:") ? r : r.startsWith("//") ? t + r : `${t}//${n}${r}`
        }
        ,
        t.areAddressArraysEqual = function(e, t) {
            return e.length === t.length && e.every( (e, n) => e === t[n])
        }
        ;
        let s = n(39172)
          , i = n(34468)
          , a = /^[0-9]*$/
          , o = /^[a-f0-9]*$/;
        function l(e) {
            return [...e].map(e => e.toString(16).padStart(2, "0")).join("")
        }
        function c(e, t=!1) {
            let n = e.toString("hex");
            return (0,
            i.HexString)(t ? `0x${n}` : n)
        }
        function d(e) {
            return e.startsWith("0x") || e.startsWith("0X")
        }
        function u(e) {
            return d(e) ? e.slice(2) : e
        }
        function h(e) {
            return d(e) ? `0x${e.slice(2)}` : `0x${e}`
        }
        function p(e) {
            if ("string" != typeof e)
                return !1;
            let t = u(e).toLowerCase();
            return o.test(t)
        }
        function f(e, t=!1) {
            if ("string" == typeof e) {
                let n = u(e).toLowerCase();
                if (o.test(n))
                    return (0,
                    i.HexString)(t ? `0x${n}` : n)
            }
            throw s.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
        }
        function g(e, t=!1) {
            let n = f(e, !1);
            return n.length % 2 == 1 && (n = (0,
            i.HexString)(`0${n}`)),
            t ? (0,
            i.HexString)(`0x${n}`) : n
        }
        function _(e) {
            if (r.isBuffer(e))
                return e;
            if ("string" == typeof e) {
                if (p(e)) {
                    let t = g(e, !1);
                    return r.from(t, "hex")
                }
                return r.from(e, "utf8")
            }
            throw s.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
        }
        function m(e) {
            if ("number" == typeof e && Number.isInteger(e))
                return (0,
                i.IntNumber)(e);
            if ("string" == typeof e) {
                if (a.test(e))
                    return (0,
                    i.IntNumber)(Number(e));
                if (p(e))
                    return (0,
                    i.IntNumber)(Number(BigInt(g(e, !0))))
            }
            throw s.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
        }
        function y(e) {
            if (null == e || "function" != typeof e.constructor)
                return !1;
            let {constructor: t} = e;
            return "function" == typeof t.config && "number" == typeof t.EUCLID
        }
    },
    86080: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletSDK = void 0;
        let r = n(46111);
        t.default = r.CoinbaseWalletSDK;
        var s = n(46111);
        Object.defineProperty(t, "CoinbaseWalletSDK", {
            enumerable: !0,
            get: function() {
                return s.CoinbaseWalletSDK
            }
        })
    },
    7977: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SCWKeyManager = void 0;
        let r = n(83465)
          , s = n(89665)
          , i = {
            storageKey: "ownPrivateKey",
            keyType: "private"
        }
          , a = {
            storageKey: "ownPublicKey",
            keyType: "public"
        }
          , o = {
            storageKey: "peerPublicKey",
            keyType: "public"
        };
        class l {
            constructor() {
                this.storage = new r.ScopedLocalStorage("CBWSDK","SCWKeyManager"),
                this.ownPrivateKey = null,
                this.ownPublicKey = null,
                this.peerPublicKey = null,
                this.sharedSecret = null
            }
            async getOwnPublicKey() {
                return await this.loadKeysIfNeeded(),
                this.ownPublicKey
            }
            async getSharedSecret() {
                return await this.loadKeysIfNeeded(),
                this.sharedSecret
            }
            async setPeerPublicKey(e) {
                this.sharedSecret = null,
                this.peerPublicKey = e,
                await this.storeKey(o, e),
                await this.loadKeysIfNeeded()
            }
            async clear() {
                this.ownPrivateKey = null,
                this.ownPublicKey = null,
                this.peerPublicKey = null,
                this.sharedSecret = null,
                this.storage.removeItem(a.storageKey),
                this.storage.removeItem(i.storageKey),
                this.storage.removeItem(o.storageKey)
            }
            async generateKeyPair() {
                let e = await (0,
                s.generateKeyPair)();
                this.ownPrivateKey = e.privateKey,
                this.ownPublicKey = e.publicKey,
                await this.storeKey(i, e.privateKey),
                await this.storeKey(a, e.publicKey)
            }
            async loadKeysIfNeeded() {
                null === this.ownPrivateKey && (this.ownPrivateKey = await this.loadKey(i)),
                null === this.ownPublicKey && (this.ownPublicKey = await this.loadKey(a)),
                (null === this.ownPrivateKey || null === this.ownPublicKey) && await this.generateKeyPair(),
                null === this.peerPublicKey && (this.peerPublicKey = await this.loadKey(o)),
                null === this.sharedSecret && null !== this.ownPrivateKey && null !== this.peerPublicKey && (this.sharedSecret = await (0,
                s.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey))
            }
            async loadKey(e) {
                let t = this.storage.getItem(e.storageKey);
                return t ? (0,
                s.importKeyFromHexString)(e.keyType, t) : null
            }
            async storeKey(e, t) {
                let n = await (0,
                s.exportKeyToHexString)(e.keyType, t);
                this.storage.setItem(e.storageKey, n)
            }
        }
        t.SCWKeyManager = l
    },
    51902: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SCWSigner = void 0;
        let r = n(7977)
          , s = n(39172)
          , i = n(83465)
          , a = n(98997)
          , o = n(89665)
          , l = n(66320)
          , c = "accounts"
          , d = "activeChain"
          , u = "availableChains"
          , h = "walletCapabilities";
        class p {
            constructor(e) {
                var t, n, s;
                this.metadata = e.metadata,
                this.communicator = e.communicator,
                this.callback = e.callback,
                this.keyManager = new r.SCWKeyManager,
                this.storage = new i.ScopedLocalStorage("CBWSDK","SCWStateManager"),
                this.accounts = null !== (t = this.storage.loadObject(c)) && void 0 !== t ? t : [],
                this.chain = this.storage.loadObject(d) || {
                    id: null !== (s = null === (n = e.metadata.appChainIds) || void 0 === n ? void 0 : n[0]) && void 0 !== s ? s : 1
                },
                this.handshake = this.handshake.bind(this),
                this.request = this.request.bind(this),
                this.createRequestMessage = this.createRequestMessage.bind(this),
                this.decryptResponseMessage = this.decryptResponseMessage.bind(this)
            }
            async handshake(e) {
                var t, n;
                let r = await this.createRequestMessage({
                    handshake: {
                        method: e.method,
                        params: Object.assign({}, this.metadata, null !== (t = e.params) && void 0 !== t ? t : {})
                    }
                })
                  , s = await this.communicator.postRequestAndWaitForResponse(r);
                if ("failure"in s.content)
                    throw s.content.failure;
                let i = await (0,
                o.importKeyFromHexString)("public", s.sender);
                await this.keyManager.setPeerPublicKey(i);
                let a = (await this.decryptResponseMessage(s)).result;
                if ("error"in a)
                    throw a.error;
                let l = a.value;
                this.accounts = l,
                this.storage.storeObject(c, l),
                null === (n = this.callback) || void 0 === n || n.call(this, "accountsChanged", l)
            }
            async request(e) {
                var t;
                if (0 === this.accounts.length)
                    throw s.standardErrors.provider.unauthorized();
                switch (e.method) {
                case "eth_requestAccounts":
                    return null === (t = this.callback) || void 0 === t || t.call(this, "connect", {
                        chainId: (0,
                        a.hexStringFromNumber)(this.chain.id)
                    }),
                    this.accounts;
                case "eth_accounts":
                    return this.accounts;
                case "eth_coinbase":
                    return this.accounts[0];
                case "net_version":
                    return this.chain.id;
                case "eth_chainId":
                    return (0,
                    a.hexStringFromNumber)(this.chain.id);
                case "wallet_getCapabilities":
                    return this.storage.loadObject(h);
                case "wallet_switchEthereumChain":
                    return this.handleSwitchChainRequest(e);
                case "eth_ecRecover":
                case "personal_sign":
                case "personal_ecRecover":
                case "eth_signTransaction":
                case "eth_sendTransaction":
                case "eth_signTypedData_v1":
                case "eth_signTypedData_v3":
                case "eth_signTypedData_v4":
                case "eth_signTypedData":
                case "wallet_addEthereumChain":
                case "wallet_watchAsset":
                case "wallet_sendCalls":
                case "wallet_showCallsStatus":
                case "wallet_grantPermissions":
                    return this.sendRequestToPopup(e);
                default:
                    if (!this.chain.rpcUrl)
                        throw s.standardErrors.rpc.internal("No RPC URL set for chain");
                    return (0,
                    l.fetchRPCRequest)(e, this.chain.rpcUrl)
                }
            }
            async sendRequestToPopup(e) {
                var t, n;
                await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n ? void 0 : n.call(t));
                let r = await this.sendEncryptedRequest(e)
                  , s = (await this.decryptResponseMessage(r)).result;
                if ("error"in s)
                    throw s.error;
                return s.value
            }
            async cleanup() {
                var e, t;
                this.storage.clear(),
                await this.keyManager.clear(),
                this.accounts = [],
                this.chain = {
                    id: null !== (t = null === (e = this.metadata.appChainIds) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : 1
                }
            }
            async handleSwitchChainRequest(e) {
                var t;
                let n = e.params;
                if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
                    throw s.standardErrors.rpc.invalidParams();
                let r = (0,
                a.ensureIntNumber)(n[0].chainId);
                if (this.updateChain(r))
                    return null;
                let i = await this.sendRequestToPopup(e);
                return null === i && this.updateChain(r),
                i
            }
            async sendEncryptedRequest(e) {
                let t = await this.keyManager.getSharedSecret();
                if (!t)
                    throw s.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
                let n = await (0,
                o.encryptContent)({
                    action: e,
                    chainId: this.chain.id
                }, t)
                  , r = await this.createRequestMessage({
                    encrypted: n
                });
                return this.communicator.postRequestAndWaitForResponse(r)
            }
            async createRequestMessage(e) {
                let t = await (0,
                o.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
                return {
                    id: crypto.randomUUID(),
                    sender: t,
                    content: e,
                    timestamp: new Date
                }
            }
            async decryptResponseMessage(e) {
                var t, n;
                let r = e.content;
                if ("failure"in r)
                    throw r.failure;
                let i = await this.keyManager.getSharedSecret();
                if (!i)
                    throw s.standardErrors.provider.unauthorized("Invalid session");
                let a = await (0,
                o.decryptContent)(r.encrypted, i)
                  , l = null === (t = a.data) || void 0 === t ? void 0 : t.chains;
                if (l) {
                    let e = Object.entries(l).map( ([e,t]) => ({
                        id: Number(e),
                        rpcUrl: t
                    }));
                    this.storage.storeObject(u, e),
                    this.updateChain(this.chain.id, e)
                }
                let c = null === (n = a.data) || void 0 === n ? void 0 : n.capabilities;
                return c && this.storage.storeObject(h, c),
                a
            }
            updateChain(e, t) {
                var n;
                let r = null != t ? t : this.storage.loadObject(u)
                  , s = null == r ? void 0 : r.find(t => t.id === e);
                return !!s && (s !== this.chain && (this.chain = s,
                this.storage.storeObject(d, s),
                null === (n = this.callback) || void 0 === n || n.call(this, "chainChanged", (0,
                a.hexStringFromNumber)(s.id))),
                !0)
            }
        }
        t.SCWSigner = p
    },
    96741: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.loadSignerType = function() {
            return o.getItem(a)
        }
        ,
        t.storeSignerType = function(e) {
            o.setItem(a, e)
        }
        ,
        t.fetchSignerType = l,
        t.createSigner = function(e) {
            let {signerType: t, metadata: n, communicator: i, callback: a} = e;
            switch (t) {
            case "scw":
                return new r.SCWSigner({
                    metadata: n,
                    callback: a,
                    communicator: i
                });
            case "walletlink":
                return new s.WalletLinkSigner({
                    metadata: n,
                    callback: a
                })
            }
        }
        ;
        let r = n(51902)
          , s = n(86510)
          , i = n(83465)
          , a = "SignerType"
          , o = new i.ScopedLocalStorage("CBWSDK","SignerConfigurator");
        async function l(e) {
            let {communicator: t, metadata: n, handshakeRequest: r} = e;
            c(t, n).catch( () => {}
            );
            let s = {
                id: crypto.randomUUID(),
                event: "selectSignerType",
                data: Object.assign(Object.assign({}, e.preference), {
                    handshakeRequest: r
                })
            }
              , {data: i} = await t.postRequestAndWaitForResponse(s);
            return i
        }
        async function c(e, t) {
            await e.onMessage( ({event: e}) => "WalletLinkSessionRequest" === e);
            let n = new s.WalletLinkSigner({
                metadata: t
            });
            e.postMessage({
                event: "WalletLinkUpdate",
                data: {
                    session: n.getSession()
                }
            }),
            await n.handshake(),
            e.postMessage({
                event: "WalletLinkUpdate",
                data: {
                    connected: !0
                }
            })
        }
    },
    86510: function(e, t, n) {
        "use strict";
        var r = n(9109).Buffer
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkSigner = void 0;
        let i = s(n(80745))
          , a = n(56663)
          , o = n(83705)
          , l = n(78461)
          , c = n(99285)
          , d = n(39172)
          , u = n(83465)
          , h = n(98997)
          , p = n(66320)
          , f = "DefaultChainId"
          , g = "DefaultJsonRpcUrl";
        class _ {
            constructor(e) {
                this._relay = null,
                this._addresses = [],
                this.metadata = e.metadata,
                this._storage = new u.ScopedLocalStorage("walletlink",c.WALLETLINK_URL),
                this.callback = e.callback || null;
                let t = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
                if (t) {
                    let e = t.split(" ");
                    "" !== e[0] && (this._addresses = e.map(e => (0,
                    h.ensureAddressString)(e)))
                }
                this.initializeRelay()
            }
            getSession() {
                let {id: e, secret: t} = this.initializeRelay().getWalletLinkSession();
                return {
                    id: e,
                    secret: t
                }
            }
            async handshake() {
                await this._eth_requestAccounts()
            }
            get selectedAddress() {
                return this._addresses[0] || void 0
            }
            get jsonRpcUrl() {
                var e;
                return null !== (e = this._storage.getItem(g)) && void 0 !== e ? e : void 0
            }
            set jsonRpcUrl(e) {
                this._storage.setItem(g, e)
            }
            updateProviderInfo(e, t) {
                var n;
                this.jsonRpcUrl = e;
                let r = this.getChainId();
                this._storage.setItem(f, t.toString(10)),
                (0,
                h.ensureIntNumber)(t) !== r && (null === (n = this.callback) || void 0 === n || n.call(this, "chainChanged", (0,
                h.hexStringFromNumber)(t)))
            }
            async watchAsset(e) {
                let t = Array.isArray(e) ? e[0] : e;
                if (!t.type)
                    throw d.standardErrors.rpc.invalidParams("Type is required");
                if ((null == t ? void 0 : t.type) !== "ERC20")
                    throw d.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
                if (!(null == t ? void 0 : t.options))
                    throw d.standardErrors.rpc.invalidParams("Options are required");
                if (!(null == t ? void 0 : t.options.address))
                    throw d.standardErrors.rpc.invalidParams("Address is required");
                let n = this.getChainId()
                  , {address: r, symbol: s, image: i, decimals: a} = t.options
                  , l = this.initializeRelay()
                  , c = await l.watchAsset(t.type, r, s, a, i, null == n ? void 0 : n.toString());
                return !(0,
                o.isErrorResponse)(c) && !!c.result
            }
            async addEthereumChain(e) {
                var t, n;
                let r = e[0];
                if ((null === (t = r.rpcUrls) || void 0 === t ? void 0 : t.length) === 0)
                    throw d.standardErrors.rpc.invalidParams("please pass in at least 1 rpcUrl");
                if (!r.chainName || "" === r.chainName.trim())
                    throw d.standardErrors.rpc.invalidParams("chainName is a required field");
                if (!r.nativeCurrency)
                    throw d.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                let s = parseInt(r.chainId, 16);
                if (s === this.getChainId())
                    return !1;
                let i = this.initializeRelay()
                  , {rpcUrls: a=[], blockExplorerUrls: l=[], chainName: c, iconUrls: u=[], nativeCurrency: h} = r
                  , p = await i.addEthereumChain(s.toString(), a, u, l, c, h);
                if ((0,
                o.isErrorResponse)(p))
                    return !1;
                if ((null === (n = p.result) || void 0 === n ? void 0 : n.isApproved) === !0)
                    return this.updateProviderInfo(a[0], s),
                    null;
                throw d.standardErrors.rpc.internal("unable to add ethereum chain")
            }
            async switchEthereumChain(e) {
                let t = parseInt(e[0].chainId, 16)
                  , n = this.initializeRelay()
                  , r = await n.switchEthereumChain(t.toString(10), this.selectedAddress || void 0);
                if ((0,
                o.isErrorResponse)(r))
                    throw r;
                let s = r.result;
                return s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, t),
                null
            }
            async cleanup() {
                this.callback = null,
                this._relay && this._relay.resetAndReload(),
                this._storage.clear()
            }
            _setAddresses(e, t) {
                var n;
                if (!Array.isArray(e))
                    throw Error("addresses is not an array");
                let r = e.map(e => (0,
                h.ensureAddressString)(e));
                JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses = r,
                null === (n = this.callback) || void 0 === n || n.call(this, "accountsChanged", r),
                this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, r.join(" ")))
            }
            async request(e) {
                let t = e.params || [];
                switch (e.method) {
                case "eth_accounts":
                    return [...this._addresses];
                case "eth_coinbase":
                    return this.selectedAddress || null;
                case "net_version":
                    return this.getChainId().toString(10);
                case "eth_chainId":
                    return (0,
                    h.hexStringFromNumber)(this.getChainId());
                case "eth_requestAccounts":
                    return this._eth_requestAccounts();
                case "eth_ecRecover":
                case "personal_ecRecover":
                    return this.ecRecover(e);
                case "personal_sign":
                    return this.personalSign(e);
                case "eth_signTransaction":
                    return this._eth_signTransaction(t);
                case "eth_sendRawTransaction":
                    return this._eth_sendRawTransaction(t);
                case "eth_sendTransaction":
                    return this._eth_sendTransaction(t);
                case "eth_signTypedData_v1":
                case "eth_signTypedData_v3":
                case "eth_signTypedData_v4":
                case "eth_signTypedData":
                    return this.signTypedData(e);
                case "wallet_addEthereumChain":
                    return this.addEthereumChain(t);
                case "wallet_switchEthereumChain":
                    return this.switchEthereumChain(t);
                case "wallet_watchAsset":
                    return this.watchAsset(t);
                default:
                    if (!this.jsonRpcUrl)
                        throw d.standardErrors.rpc.internal("No RPC URL set for chain");
                    return (0,
                    p.fetchRPCRequest)(e, this.jsonRpcUrl)
                }
            }
            _ensureKnownAddress(e) {
                let t = (0,
                h.ensureAddressString)(e);
                if (!this._addresses.map(e => (0,
                h.ensureAddressString)(e)).includes(t))
                    throw Error("Unknown Ethereum address")
            }
            _prepareTransactionParams(e) {
                let t = e.from ? (0,
                h.ensureAddressString)(e.from) : this.selectedAddress;
                if (!t)
                    throw Error("Ethereum address is unavailable");
                this._ensureKnownAddress(t);
                let n = e.to ? (0,
                h.ensureAddressString)(e.to) : null
                  , s = null != e.value ? (0,
                h.ensureBigInt)(e.value) : BigInt(0)
                  , i = e.data ? (0,
                h.ensureBuffer)(e.data) : r.alloc(0)
                  , a = null != e.nonce ? (0,
                h.ensureIntNumber)(e.nonce) : null
                  , o = null != e.gasPrice ? (0,
                h.ensureBigInt)(e.gasPrice) : null
                  , l = null != e.maxFeePerGas ? (0,
                h.ensureBigInt)(e.maxFeePerGas) : null;
                return {
                    fromAddress: t,
                    toAddress: n,
                    weiValue: s,
                    data: i,
                    nonce: a,
                    gasPriceInWei: o,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: null != e.maxPriorityFeePerGas ? (0,
                    h.ensureBigInt)(e.maxPriorityFeePerGas) : null,
                    gasLimit: null != e.gas ? (0,
                    h.ensureBigInt)(e.gas) : null,
                    chainId: e.chainId ? (0,
                    h.ensureIntNumber)(e.chainId) : this.getChainId()
                }
            }
            async ecRecover(e) {
                let {method: t, params: n} = e;
                if (!Array.isArray(n))
                    throw d.standardErrors.rpc.invalidParams();
                let r = this.initializeRelay()
                  , s = await r.sendRequest({
                    method: "ethereumAddressFromSignedMessage",
                    params: {
                        message: (0,
                        h.encodeToHexString)(n[0]),
                        signature: (0,
                        h.encodeToHexString)(n[1]),
                        addPrefix: "personal_ecRecover" === t
                    }
                });
                if ((0,
                o.isErrorResponse)(s))
                    throw s;
                return s.result
            }
            getChainId() {
                var e;
                return parseInt(null !== (e = this._storage.getItem(f)) && void 0 !== e ? e : "1", 10)
            }
            async _eth_requestAccounts() {
                var e, t;
                if (this._addresses.length > 0)
                    return null === (e = this.callback) || void 0 === e || e.call(this, "connect", {
                        chainId: (0,
                        h.hexStringFromNumber)(this.getChainId())
                    }),
                    this._addresses;
                let n = this.initializeRelay()
                  , r = await n.requestEthereumAccounts();
                if ((0,
                o.isErrorResponse)(r))
                    throw r;
                if (!r.result)
                    throw Error("accounts received is empty");
                return this._setAddresses(r.result),
                null === (t = this.callback) || void 0 === t || t.call(this, "connect", {
                    chainId: (0,
                    h.hexStringFromNumber)(this.getChainId())
                }),
                this._addresses
            }
            async personalSign({params: e}) {
                if (!Array.isArray(e))
                    throw d.standardErrors.rpc.invalidParams();
                let t = e[1]
                  , n = e[0];
                this._ensureKnownAddress(t);
                let r = this.initializeRelay()
                  , s = await r.sendRequest({
                    method: "signEthereumMessage",
                    params: {
                        address: (0,
                        h.ensureAddressString)(t),
                        message: (0,
                        h.encodeToHexString)(n),
                        addPrefix: !0,
                        typedDataJson: null
                    }
                });
                if ((0,
                o.isErrorResponse)(s))
                    throw s;
                return s.result
            }
            async _eth_signTransaction(e) {
                let t = this._prepareTransactionParams(e[0] || {})
                  , n = this.initializeRelay()
                  , r = await n.signEthereumTransaction(t);
                if ((0,
                o.isErrorResponse)(r))
                    throw r;
                return r.result
            }
            async _eth_sendRawTransaction(e) {
                let t = (0,
                h.ensureBuffer)(e[0])
                  , n = this.initializeRelay()
                  , r = await n.submitEthereumTransaction(t, this.getChainId());
                if ((0,
                o.isErrorResponse)(r))
                    throw r;
                return r.result
            }
            async _eth_sendTransaction(e) {
                let t = this._prepareTransactionParams(e[0] || {})
                  , n = this.initializeRelay()
                  , r = await n.signAndSubmitEthereumTransaction(t);
                if ((0,
                o.isErrorResponse)(r))
                    throw r;
                return r.result
            }
            async signTypedData(e) {
                let {method: t, params: n} = e;
                if (!Array.isArray(n))
                    throw d.standardErrors.rpc.invalidParams();
                let r = n["eth_signTypedData_v1" === t ? 1 : 0]
                  , s = n["eth_signTypedData_v1" === t ? 0 : 1];
                this._ensureKnownAddress(r);
                let a = this.initializeRelay()
                  , l = await a.sendRequest({
                    method: "signEthereumMessage",
                    params: {
                        address: (0,
                        h.ensureAddressString)(r),
                        message: (e => {
                            let n = {
                                eth_signTypedData_v1: i.default.hashForSignTypedDataLegacy,
                                eth_signTypedData_v3: i.default.hashForSignTypedData_v3,
                                eth_signTypedData_v4: i.default.hashForSignTypedData_v4,
                                eth_signTypedData: i.default.hashForSignTypedData_v4
                            };
                            return (0,
                            h.hexStringFromBuffer)(n[t]({
                                data: (0,
                                h.ensureParsedJSONObject)(e)
                            }), !0)
                        }
                        )(s),
                        typedDataJson: JSON.stringify(s, null, 2),
                        addPrefix: !1
                    }
                });
                if ((0,
                o.isErrorResponse)(l))
                    throw l;
                return l.result
            }
            initializeRelay() {
                return this._relay || (this._relay = new l.WalletLinkRelay({
                    linkAPIUrl: c.WALLETLINK_URL,
                    storage: this._storage,
                    metadata: this.metadata,
                    accountsCallback: this._setAddresses.bind(this),
                    chainCallback: this.updateProviderInfo.bind(this)
                })),
                this._relay
            }
        }
        t.WalletLinkSigner = _
    },
    65896: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RelayEventManager = void 0;
        let r = n(98997);
        class s {
            constructor() {
                this._nextRequestId = 0,
                this.callbacks = new Map
            }
            makeRequestId() {
                this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                let e = this._nextRequestId
                  , t = (0,
                r.prepend0x)(e.toString(16));
                return this.callbacks.get(t) && this.callbacks.delete(t),
                e
            }
        }
        t.RelayEventManager = s
    },
    78461: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkRelay = void 0;
        let r = n(32485)
          , s = n(56663)
          , i = n(65896)
          , a = n(42922)
          , o = n(83705)
          , l = n(44412)
          , c = n(34614)
          , d = n(78826)
          , u = n(39172)
          , h = n(83465)
          , p = n(98997);
        class f {
            constructor(e) {
                this.chainCallbackParams = {
                    chainId: "",
                    jsonRpcUrl: ""
                },
                this.isMobileWeb = (0,
                l.isMobileWeb)(),
                this.linkedUpdated = e => {
                    this.isLinked = e;
                    let t = this.storage.getItem(s.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (e && (this._session.linked = e),
                    this.isUnlinkedErrorState = !1,
                    t) {
                        let n = t.split(" ")
                          , r = "true" === this.storage.getItem("IsStandaloneSigning");
                        "" === n[0] || e || !this._session.linked || r || (this.isUnlinkedErrorState = !0)
                    }
                }
                ,
                this.metadataUpdated = (e, t) => {
                    this.storage.setItem(e, t)
                }
                ,
                this.chainUpdated = (e, t) => {
                    (this.chainCallbackParams.chainId !== e || this.chainCallbackParams.jsonRpcUrl !== t) && (this.chainCallbackParams = {
                        chainId: e,
                        jsonRpcUrl: t
                    },
                    this.chainCallback && this.chainCallback(t, parseInt(e, 10)))
                }
                ,
                this.accountUpdated = e => {
                    this.accountsCallback && this.accountsCallback([e]),
                    f.accountRequestCallbackIds.size > 0 && (Array.from(f.accountRequestCallbackIds.values()).forEach(t => {
                        this.invokeCallback(t, {
                            method: "requestEthereumAccounts",
                            result: [e]
                        })
                    }
                    ),
                    f.accountRequestCallbackIds.clear())
                }
                ,
                this.resetAndReload = this.resetAndReload.bind(this),
                this.linkAPIUrl = e.linkAPIUrl,
                this.storage = e.storage,
                this.metadata = e.metadata,
                this.accountsCallback = e.accountsCallback,
                this.chainCallback = e.chainCallback;
                let {session: t, ui: n, connection: r} = this.subscribe();
                this._session = t,
                this.connection = r,
                this.relayEventManager = new i.RelayEventManager,
                this.ui = n,
                this.ui.attach()
            }
            subscribe() {
                let e = a.WalletLinkSession.load(this.storage) || a.WalletLinkSession.create(this.storage)
                  , {linkAPIUrl: t} = this
                  , n = new r.WalletLinkConnection({
                    session: e,
                    linkAPIUrl: t,
                    listener: this
                })
                  , s = this.isMobileWeb ? new d.WLMobileRelayUI : new c.WalletLinkRelayUI;
                return n.connect(),
                {
                    session: e,
                    ui: s,
                    connection: n
                }
            }
            resetAndReload() {
                this.connection.destroy().then( () => {
                    let e = a.WalletLinkSession.load(this.storage);
                    (null == e ? void 0 : e.id) === this._session.id && h.ScopedLocalStorage.clearAll(),
                    document.location.reload()
                }
                ).catch(e => {}
                )
            }
            signEthereumTransaction(e) {
                return this.sendRequest({
                    method: "signEthereumTransaction",
                    params: {
                        fromAddress: e.fromAddress,
                        toAddress: e.toAddress,
                        weiValue: (0,
                        p.bigIntStringFromBigInt)(e.weiValue),
                        data: (0,
                        p.hexStringFromBuffer)(e.data, !0),
                        nonce: e.nonce,
                        gasPriceInWei: e.gasPriceInWei ? (0,
                        p.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                        maxFeePerGas: e.gasPriceInWei ? (0,
                        p.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                        maxPriorityFeePerGas: e.gasPriceInWei ? (0,
                        p.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                        gasLimit: e.gasLimit ? (0,
                        p.bigIntStringFromBigInt)(e.gasLimit) : null,
                        chainId: e.chainId,
                        shouldSubmit: !1
                    }
                })
            }
            signAndSubmitEthereumTransaction(e) {
                return this.sendRequest({
                    method: "signEthereumTransaction",
                    params: {
                        fromAddress: e.fromAddress,
                        toAddress: e.toAddress,
                        weiValue: (0,
                        p.bigIntStringFromBigInt)(e.weiValue),
                        data: (0,
                        p.hexStringFromBuffer)(e.data, !0),
                        nonce: e.nonce,
                        gasPriceInWei: e.gasPriceInWei ? (0,
                        p.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                        maxFeePerGas: e.maxFeePerGas ? (0,
                        p.bigIntStringFromBigInt)(e.maxFeePerGas) : null,
                        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0,
                        p.bigIntStringFromBigInt)(e.maxPriorityFeePerGas) : null,
                        gasLimit: e.gasLimit ? (0,
                        p.bigIntStringFromBigInt)(e.gasLimit) : null,
                        chainId: e.chainId,
                        shouldSubmit: !0
                    }
                })
            }
            submitEthereumTransaction(e, t) {
                return this.sendRequest({
                    method: "submitEthereumTransaction",
                    params: {
                        signedTransaction: (0,
                        p.hexStringFromBuffer)(e, !0),
                        chainId: t
                    }
                })
            }
            getWalletLinkSession() {
                return this._session
            }
            sendRequest(e) {
                let t = null
                  , n = (0,
                p.randomBytesHex)(8)
                  , r = r => {
                    this.publishWeb3RequestCanceledEvent(n),
                    this.handleErrorResponse(n, e.method, r),
                    null == t || t()
                }
                ;
                return new Promise( (s, i) => {
                    t = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: r,
                        onResetConnection: this.resetAndReload
                    }),
                    this.relayEventManager.callbacks.set(n, e => {
                        if (null == t || t(),
                        (0,
                        o.isErrorResponse)(e))
                            return i(Error(e.errorMessage));
                        s(e)
                    }
                    ),
                    this.publishWeb3RequestEvent(n, e)
                }
                )
            }
            publishWeb3RequestEvent(e, t) {
                let n = {
                    type: "WEB3_REQUEST",
                    id: e,
                    request: t
                };
                this.publishEvent("Web3Request", n, !0).then(e => {}
                ).catch(e => {
                    this.handleWeb3ResponseMessage(n.id, {
                        method: t.method,
                        errorMessage: e.message
                    })
                }
                ),
                this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method)
            }
            openCoinbaseWalletDeeplink(e) {
                if (this.ui instanceof d.WLMobileRelayUI)
                    switch (e) {
                    case "requestEthereumAccounts":
                    case "switchEthereumChain":
                        return;
                    default:
                        window.addEventListener("blur", () => {
                            window.addEventListener("focus", () => {
                                this.connection.checkUnseenEvents()
                            }
                            , {
                                once: !0
                            })
                        }
                        , {
                            once: !0
                        }),
                        this.ui.openCoinbaseWalletDeeplink()
                    }
            }
            publishWeb3RequestCanceledEvent(e) {
                this.publishEvent("Web3RequestCanceled", {
                    type: "WEB3_REQUEST_CANCELED",
                    id: e
                }, !1).then()
            }
            publishEvent(e, t, n) {
                return this.connection.publishEvent(e, t, n)
            }
            handleWeb3ResponseMessage(e, t) {
                if ("requestEthereumAccounts" === t.method) {
                    f.accountRequestCallbackIds.forEach(e => this.invokeCallback(e, t)),
                    f.accountRequestCallbackIds.clear();
                    return
                }
                this.invokeCallback(e, t)
            }
            handleErrorResponse(e, t, n) {
                var r;
                let s = null !== (r = null == n ? void 0 : n.message) && void 0 !== r ? r : "Unspecified error message.";
                this.handleWeb3ResponseMessage(e, {
                    method: t,
                    errorMessage: s
                })
            }
            invokeCallback(e, t) {
                let n = this.relayEventManager.callbacks.get(e);
                n && (n(t),
                this.relayEventManager.callbacks.delete(e))
            }
            requestEthereumAccounts() {
                let {appName: e, appLogoUrl: t} = this.metadata
                  , n = {
                    method: "requestEthereumAccounts",
                    params: {
                        appName: e,
                        appLogoUrl: t
                    }
                }
                  , r = (0,
                p.randomBytesHex)(8);
                return new Promise( (e, t) => {
                    this.relayEventManager.callbacks.set(r, n => {
                        if ((0,
                        o.isErrorResponse)(n))
                            return t(Error(n.errorMessage));
                        e(n)
                    }
                    ),
                    f.accountRequestCallbackIds.add(r),
                    this.publishWeb3RequestEvent(r, n)
                }
                )
            }
            watchAsset(e, t, n, r, s, i) {
                let a = {
                    method: "watchAsset",
                    params: {
                        type: e,
                        options: {
                            address: t,
                            symbol: n,
                            decimals: r,
                            image: s
                        },
                        chainId: i
                    }
                }
                  , l = null
                  , c = (0,
                p.randomBytesHex)(8);
                return l = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: e => {
                        this.publishWeb3RequestCanceledEvent(c),
                        this.handleErrorResponse(c, a.method, e),
                        null == l || l()
                    }
                    ,
                    onResetConnection: this.resetAndReload
                }),
                new Promise( (e, t) => {
                    this.relayEventManager.callbacks.set(c, n => {
                        if (null == l || l(),
                        (0,
                        o.isErrorResponse)(n))
                            return t(Error(n.errorMessage));
                        e(n)
                    }
                    ),
                    this.publishWeb3RequestEvent(c, a)
                }
                )
            }
            addEthereumChain(e, t, n, r, s, i) {
                let a = {
                    method: "addEthereumChain",
                    params: {
                        chainId: e,
                        rpcUrls: t,
                        blockExplorerUrls: r,
                        chainName: s,
                        iconUrls: n,
                        nativeCurrency: i
                    }
                }
                  , l = null
                  , c = (0,
                p.randomBytesHex)(8);
                return l = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: e => {
                        this.publishWeb3RequestCanceledEvent(c),
                        this.handleErrorResponse(c, a.method, e),
                        null == l || l()
                    }
                    ,
                    onResetConnection: this.resetAndReload
                }),
                new Promise( (e, t) => {
                    this.relayEventManager.callbacks.set(c, n => {
                        if (null == l || l(),
                        (0,
                        o.isErrorResponse)(n))
                            return t(Error(n.errorMessage));
                        e(n)
                    }
                    ),
                    this.publishWeb3RequestEvent(c, a)
                }
                )
            }
            switchEthereumChain(e, t) {
                let n = {
                    method: "switchEthereumChain",
                    params: Object.assign({
                        chainId: e
                    }, {
                        address: t
                    })
                }
                  , r = null
                  , s = (0,
                p.randomBytesHex)(8);
                return r = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: e => {
                        this.publishWeb3RequestCanceledEvent(s),
                        this.handleErrorResponse(s, n.method, e),
                        null == r || r()
                    }
                    ,
                    onResetConnection: this.resetAndReload
                }),
                new Promise( (e, t) => {
                    this.relayEventManager.callbacks.set(s, n => (null == r || r(),
                    (0,
                    o.isErrorResponse)(n) && n.errorCode) ? t(u.standardErrors.provider.custom({
                        code: n.errorCode,
                        message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                    })) : (0,
                    o.isErrorResponse)(n) ? t(Error(n.errorMessage)) : void e(n)),
                    this.publishWeb3RequestEvent(s, n)
                }
                )
            }
        }
        t.WalletLinkRelay = f,
        f.accountRequestCallbackIds = new Set
    },
    93007: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkCipher = void 0;
        let r = n(98997);
        class s {
            constructor(e) {
                this.secret = e
            }
            async encrypt(e) {
                let t = this.secret;
                if (64 !== t.length)
                    throw Error("secret must be 256 bits");
                let n = crypto.getRandomValues(new Uint8Array(12))
                  , s = await crypto.subtle.importKey("raw", (0,
                r.hexStringToUint8Array)(t), {
                    name: "aes-gcm"
                }, !1, ["encrypt", "decrypt"])
                  , i = new TextEncoder
                  , a = await window.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: n
                }, s, i.encode(e))
                  , o = a.slice(a.byteLength - 16)
                  , l = a.slice(0, a.byteLength - 16)
                  , c = new Uint8Array(o)
                  , d = new Uint8Array(l)
                  , u = new Uint8Array([...n, ...c, ...d]);
                return (0,
                r.uint8ArrayToHex)(u)
            }
            async decrypt(e) {
                let t = this.secret;
                if (64 !== t.length)
                    throw Error("secret must be 256 bits");
                return new Promise( (n, s) => {
                    !async function() {
                        let i = await crypto.subtle.importKey("raw", (0,
                        r.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"])
                          , a = (0,
                        r.hexStringToUint8Array)(e)
                          , o = a.slice(0, 12)
                          , l = a.slice(12, 28)
                          , c = new Uint8Array([...a.slice(28), ...l])
                          , d = {
                            name: "AES-GCM",
                            iv: new Uint8Array(o)
                        };
                        try {
                            let e = await window.crypto.subtle.decrypt(d, i, c)
                              , t = new TextDecoder;
                            n(t.decode(e))
                        } catch (e) {
                            s(e)
                        }
                    }()
                }
                )
            }
        }
        t.WalletLinkCipher = s
    },
    32485: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkConnection = void 0;
        let r = n(56663)
          , s = n(93007)
          , i = n(99085)
          , a = n(77730)
          , o = n(34468);
        class l {
            constructor({session: e, linkAPIUrl: t, listener: n}) {
                this.destroyed = !1,
                this.lastHeartbeatResponse = 0,
                this.nextReqId = (0,
                o.IntNumber)(1),
                this._connected = !1,
                this._linked = !1,
                this.shouldFetchUnseenEventsOnConnect = !1,
                this.requestResolutions = new Map,
                this.handleSessionMetadataUpdated = e => {
                    e && new Map([["__destroyed", this.handleDestroyed], ["EthereumAddress", this.handleAccountUpdated], ["WalletUsername", this.handleWalletUsernameUpdated], ["AppVersion", this.handleAppVersionUpdated], ["ChainId", t => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)]]).forEach( (t, n) => {
                        let r = e[n];
                        void 0 !== r && t(r)
                    }
                    )
                }
                ,
                this.handleDestroyed = e => {
                    var t;
                    "1" === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload())
                }
                ,
                this.handleAccountUpdated = async e => {
                    var t;
                    let n = await this.cipher.decrypt(e);
                    null === (t = this.listener) || void 0 === t || t.accountUpdated(n)
                }
                ,
                this.handleMetadataUpdated = async (e, t) => {
                    var n;
                    let r = await this.cipher.decrypt(t);
                    null === (n = this.listener) || void 0 === n || n.metadataUpdated(e, r)
                }
                ,
                this.handleWalletUsernameUpdated = async e => {
                    this.handleMetadataUpdated(r.WALLET_USER_NAME_KEY, e)
                }
                ,
                this.handleAppVersionUpdated = async e => {
                    this.handleMetadataUpdated(r.APP_VERSION_KEY, e)
                }
                ,
                this.handleChainUpdated = async (e, t) => {
                    var n;
                    let r = await this.cipher.decrypt(e)
                      , s = await this.cipher.decrypt(t);
                    null === (n = this.listener) || void 0 === n || n.chainUpdated(r, s)
                }
                ,
                this.session = e,
                this.cipher = new s.WalletLinkCipher(e.secret),
                this.listener = n;
                let l = new a.WalletLinkWebSocket(`${t}/rpc`,WebSocket);
                l.setConnectionStateListener(async e => {
                    let t = !1;
                    switch (e) {
                    case a.ConnectionState.DISCONNECTED:
                        if (!this.destroyed) {
                            let e = async () => {
                                await new Promise(e => setTimeout(e, 5e3)),
                                this.destroyed || l.connect().catch( () => {
                                    e()
                                }
                                )
                            }
                            ;
                            e()
                        }
                        break;
                    case a.ConnectionState.CONNECTED:
                        t = await this.handleConnected(),
                        this.updateLastHeartbeat(),
                        setInterval( () => {
                            this.heartbeat()
                        }
                        , 1e4),
                        this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                    case a.ConnectionState.CONNECTING:
                    }
                    this.connected !== t && (this.connected = t)
                }
                ),
                l.setIncomingDataListener(e => {
                    var t;
                    switch (e.type) {
                    case "Heartbeat":
                        this.updateLastHeartbeat();
                        return;
                    case "IsLinkedOK":
                    case "Linked":
                        {
                            let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                            this.linked = t || e.onlineGuests > 0;
                            break
                        }
                    case "GetSessionConfigOK":
                    case "SessionConfigUpdated":
                        this.handleSessionMetadataUpdated(e.metadata);
                        break;
                    case "Event":
                        this.handleIncomingEvent(e)
                    }
                    void 0 !== e.id && (null === (t = this.requestResolutions.get(e.id)) || void 0 === t || t(e))
                }
                ),
                this.ws = l,
                this.http = new i.WalletLinkHTTP(t,e.id,e.key)
            }
            connect() {
                if (this.destroyed)
                    throw Error("instance is destroyed");
                this.ws.connect()
            }
            async destroy() {
                this.destroyed || (await this.makeRequest({
                    type: "SetSessionConfig",
                    id: (0,
                    o.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id,
                    metadata: {
                        __destroyed: "1"
                    }
                }, {
                    timeout: 1e3
                }),
                this.destroyed = !0,
                this.ws.disconnect(),
                this.listener = void 0)
            }
            get connected() {
                return this._connected
            }
            set connected(e) {
                this._connected = e
            }
            get linked() {
                return this._linked
            }
            set linked(e) {
                var t, n;
                this._linked = e,
                e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
                null === (n = this.listener) || void 0 === n || n.linkedUpdated(e)
            }
            setOnceLinked(e) {
                return new Promise(t => {
                    this.linked ? e().then(t) : this.onceLinked = () => {
                        e().then(t),
                        this.onceLinked = void 0
                    }
                }
                )
            }
            async handleIncomingEvent(e) {
                var t;
                if ("Event" !== e.type || "Web3Response" !== e.event)
                    return;
                let n = JSON.parse(await this.cipher.decrypt(e.data));
                if ("WEB3_RESPONSE" !== n.type)
                    return;
                let {id: r, response: s} = n;
                null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(r, s)
            }
            async checkUnseenEvents() {
                if (!this.connected) {
                    this.shouldFetchUnseenEventsOnConnect = !0;
                    return
                }
                await new Promise(e => setTimeout(e, 250));
                try {
                    await this.fetchUnseenEventsAPI()
                } catch (e) {
                    console.error("Unable to check for unseen events", e)
                }
            }
            async fetchUnseenEventsAPI() {
                this.shouldFetchUnseenEventsOnConnect = !1,
                (await this.http.fetchUnseenEvents()).forEach(e => this.handleIncomingEvent(e))
            }
            async publishEvent(e, t, n=!1) {
                let r = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                    origin: location.origin,
                    relaySource: "coinbaseWalletExtension"in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                })))
                  , s = {
                    type: "PublishEvent",
                    id: (0,
                    o.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id,
                    event: e,
                    data: r,
                    callWebhook: n
                };
                return this.setOnceLinked(async () => {
                    let e = await this.makeRequest(s);
                    if ("Fail" === e.type)
                        throw Error(e.error || "failed to publish event");
                    return e.eventId
                }
                )
            }
            sendData(e) {
                this.ws.sendData(JSON.stringify(e))
            }
            updateLastHeartbeat() {
                this.lastHeartbeatResponse = Date.now()
            }
            heartbeat() {
                if (Date.now() - this.lastHeartbeatResponse > 2e4) {
                    this.ws.disconnect();
                    return
                }
                try {
                    this.ws.sendData("h")
                } catch (e) {}
            }
            async makeRequest(e, t={
                timeout: 6e4
            }) {
                let n;
                let r = e.id;
                return this.sendData(e),
                Promise.race([new Promise( (e, s) => {
                    n = window.setTimeout( () => {
                        s(Error(`request ${r} timed out`))
                    }
                    , t.timeout)
                }
                ), new Promise(e => {
                    this.requestResolutions.set(r, t => {
                        clearTimeout(n),
                        e(t),
                        this.requestResolutions.delete(r)
                    }
                    )
                }
                )])
            }
            async handleConnected() {
                return "Fail" !== (await this.makeRequest({
                    type: "HostSession",
                    id: (0,
                    o.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id,
                    sessionKey: this.session.key
                })).type && (this.sendData({
                    type: "IsLinked",
                    id: (0,
                    o.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id
                }),
                this.sendData({
                    type: "GetSessionConfig",
                    id: (0,
                    o.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id
                }),
                !0)
            }
        }
        t.WalletLinkConnection = l
    },
    99085: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkHTTP = void 0;
        class n {
            constructor(e, t, n) {
                this.linkAPIUrl = e,
                this.sessionId = t;
                let r = `${t}:${n}`;
                this.auth = `Basic ${btoa(r)}`
            }
            async markUnseenEventsAsSeen(e) {
                return Promise.all(e.map(e => fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                    method: "POST",
                    headers: {
                        Authorization: this.auth
                    }
                }))).catch(e => console.error("Unabled to mark event as failed:", e))
            }
            async fetchUnseenEvents() {
                var e;
                let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
                    headers: {
                        Authorization: this.auth
                    }
                });
                if (t.ok) {
                    let {events: n, error: r} = await t.json();
                    if (r)
                        throw Error(`Check unseen events failed: ${r}`);
                    let s = null !== (e = null == n ? void 0 : n.filter(e => "Web3Response" === e.event).map(e => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data
                    }))) && void 0 !== e ? e : [];
                    return this.markUnseenEventsAsSeen(s),
                    s
                }
                throw Error(`Check unseen events failed: ${t.status}`)
            }
        }
        t.WalletLinkHTTP = n
    },
    77730: function(e, t) {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkWebSocket = t.ConnectionState = void 0,
        (r = n || (t.ConnectionState = n = {}))[r.DISCONNECTED = 0] = "DISCONNECTED",
        r[r.CONNECTING = 1] = "CONNECTING",
        r[r.CONNECTED = 2] = "CONNECTED";
        class s {
            setConnectionStateListener(e) {
                this.connectionStateListener = e
            }
            setIncomingDataListener(e) {
                this.incomingDataListener = e
            }
            constructor(e, t=WebSocket) {
                this.WebSocketClass = t,
                this.webSocket = null,
                this.pendingData = [],
                this.url = e.replace(/^http/, "ws")
            }
            async connect() {
                if (this.webSocket)
                    throw Error("webSocket object is not null");
                return new Promise( (e, t) => {
                    var r;
                    let s;
                    try {
                        this.webSocket = s = new this.WebSocketClass(this.url)
                    } catch (e) {
                        t(e);
                        return
                    }
                    null === (r = this.connectionStateListener) || void 0 === r || r.call(this, n.CONNECTING),
                    s.onclose = e => {
                        var r;
                        this.clearWebSocket(),
                        t(Error(`websocket error ${e.code}: ${e.reason}`)),
                        null === (r = this.connectionStateListener) || void 0 === r || r.call(this, n.DISCONNECTED)
                    }
                    ,
                    s.onopen = t => {
                        var r;
                        e(),
                        null === (r = this.connectionStateListener) || void 0 === r || r.call(this, n.CONNECTED),
                        this.pendingData.length > 0 && ([...this.pendingData].forEach(e => this.sendData(e)),
                        this.pendingData = [])
                    }
                    ,
                    s.onmessage = e => {
                        var t, n;
                        if ("h" === e.data)
                            null === (t = this.incomingDataListener) || void 0 === t || t.call(this, {
                                type: "Heartbeat"
                            });
                        else
                            try {
                                let t = JSON.parse(e.data);
                                null === (n = this.incomingDataListener) || void 0 === n || n.call(this, t)
                            } catch (e) {}
                    }
                }
                )
            }
            disconnect() {
                var e;
                let {webSocket: t} = this;
                if (t) {
                    this.clearWebSocket(),
                    null === (e = this.connectionStateListener) || void 0 === e || e.call(this, n.DISCONNECTED),
                    this.connectionStateListener = void 0,
                    this.incomingDataListener = void 0;
                    try {
                        t.close()
                    } catch (e) {}
                }
            }
            sendData(e) {
                let {webSocket: t} = this;
                if (!t) {
                    this.pendingData.push(e),
                    this.connect();
                    return
                }
                t.send(e)
            }
            clearWebSocket() {
                let {webSocket: e} = this;
                e && (this.webSocket = null,
                e.onclose = null,
                e.onerror = null,
                e.onmessage = null,
                e.onopen = null)
            }
        }
        t.WalletLinkWebSocket = s
    },
    56663: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0,
        t.WALLET_USER_NAME_KEY = "walletUsername",
        t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses",
        t.APP_VERSION_KEY = "AppVersion"
    },
    42922: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkSession = void 0;
        let r = n(44212)
          , s = n(85758)
          , i = n(98997)
          , a = "session:id"
          , o = "session:secret"
          , l = "session:linked";
        class c {
            constructor(e, t, n, i=!1) {
                this.storage = e,
                this.id = t,
                this.secret = n,
                this.key = (0,
                s.bytesToHex)((0,
                r.sha256)(`${t}, ${n} WalletLink`)),
                this._linked = !!i
            }
            static create(e) {
                return new c(e,(0,
                i.randomBytesHex)(16),(0,
                i.randomBytesHex)(32)).save()
            }
            static load(e) {
                let t = e.getItem(a)
                  , n = e.getItem(l)
                  , r = e.getItem(o);
                return t && r ? new c(e,t,r,"1" === n) : null
            }
            get linked() {
                return this._linked
            }
            set linked(e) {
                this._linked = e,
                this.persistLinked()
            }
            save() {
                return this.storage.setItem(a, this.id),
                this.storage.setItem(o, this.secret),
                this.persistLinked(),
                this
            }
            persistLinked() {
                this.storage.setItem(l, this._linked ? "1" : "0")
            }
        }
        t.WalletLinkSession = c
    },
    83705: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isErrorResponse = function(e) {
            return void 0 !== e.errorMessage
        }
    },
    78826: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WLMobileRelayUI = void 0;
        let r = n(30054)
          , s = n(44412)
          , i = n(99285);
        class a {
            constructor() {
                this.attached = !1,
                this.redirectDialog = new r.RedirectDialog
            }
            attach() {
                if (this.attached)
                    throw Error("Coinbase Wallet SDK UI is already attached");
                this.redirectDialog.attach(),
                this.attached = !0
            }
            redirectToCoinbaseWallet(e) {
                let t = new URL(i.CBW_MOBILE_DEEPLINK_URL);
                t.searchParams.append("redirect_url", (0,
                s.getLocation)().href),
                e && t.searchParams.append("wl_url", e);
                let n = document.createElement("a");
                n.target = "cbw-opener",
                n.href = t.href,
                n.rel = "noreferrer noopener",
                n.click()
            }
            openCoinbaseWalletDeeplink(e) {
                this.redirectDialog.present({
                    title: "Redirecting to Coinbase Wallet...",
                    buttonText: "Open",
                    onButtonClick: () => {
                        this.redirectToCoinbaseWallet(e)
                    }
                }),
                setTimeout( () => {
                    this.redirectToCoinbaseWallet(e)
                }
                , 99)
            }
            showConnecting(e) {
                return () => {
                    this.redirectDialog.clear()
                }
            }
        }
        t.WLMobileRelayUI = a
    },
    34614: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkRelayUI = void 0;
        let r = n(69573)
          , s = n(91989);
        class i {
            constructor() {
                this.attached = !1,
                this.snackbar = new s.Snackbar
            }
            attach() {
                if (this.attached)
                    throw Error("Coinbase Wallet SDK UI is already attached");
                let e = document.documentElement
                  , t = document.createElement("div");
                t.className = "-cbwsdk-css-reset",
                e.appendChild(t),
                this.snackbar.attach(t),
                this.attached = !0,
                (0,
                r.injectCssReset)()
            }
            showConnecting(e) {
                let t;
                return t = e.isUnlinkedErrorState ? {
                    autoExpand: !0,
                    message: "Connection lost",
                    menuItems: [{
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection
                    }]
                } : {
                    message: "Confirm on phone",
                    menuItems: [{
                        isRed: !0,
                        info: "Cancel transaction",
                        svgWidth: "11",
                        svgHeight: "11",
                        path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                        defaultFillRule: "inherit",
                        defaultClipRule: "inherit",
                        onClick: e.onCancel
                    }, {
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection
                    }]
                },
                this.snackbar.presentItem(t)
            }
        }
        t.WalletLinkRelayUI = i
    },
    7568: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
    },
    30054: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RedirectDialog = void 0;
        let s = r(n(952))
          , i = n(57764)
          , a = n(69573)
          , o = n(91989)
          , l = n(44412)
          , c = r(n(7568));
        class d {
            constructor() {
                this.root = null,
                this.darkMode = (0,
                l.isDarkMode)()
            }
            attach() {
                let e = document.documentElement;
                this.root = document.createElement("div"),
                this.root.className = "-cbwsdk-css-reset",
                e.appendChild(this.root),
                (0,
                a.injectCssReset)()
            }
            present(e) {
                this.render(e)
            }
            clear() {
                this.render(null)
            }
            render(e) {
                this.root && ((0,
                i.render)(null, this.root),
                e && (0,
                i.render)((0,
                i.h)(u, Object.assign({}, e, {
                    onDismiss: () => {
                        this.clear()
                    }
                    ,
                    darkMode: this.darkMode
                })), this.root))
            }
        }
        t.RedirectDialog = d;
        let u = ({title: e, buttonText: t, darkMode: n, onButtonClick: r, onDismiss: a}) => (0,
        i.h)(o.SnackbarContainer, {
            darkMode: n
        }, (0,
        i.h)("div", {
            class: "-cbwsdk-redirect-dialog"
        }, (0,
        i.h)("style", null, c.default), (0,
        i.h)("div", {
            class: "-cbwsdk-redirect-dialog-backdrop",
            onClick: a
        }), (0,
        i.h)("div", {
            class: (0,
            s.default)("-cbwsdk-redirect-dialog-box", n ? "dark" : "light")
        }, (0,
        i.h)("p", null, e), (0,
        i.h)("button", {
            onClick: r
        }, t))))
    },
    91931: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
    },
    91989: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
        let s = r(n(952))
          , i = n(57764)
          , a = n(83148)
          , o = n(44412)
          , l = r(n(91931));
        class c {
            constructor() {
                this.items = new Map,
                this.nextItemKey = 0,
                this.root = null,
                this.darkMode = (0,
                o.isDarkMode)()
            }
            attach(e) {
                this.root = document.createElement("div"),
                this.root.className = "-cbwsdk-snackbar-root",
                e.appendChild(this.root),
                this.render()
            }
            presentItem(e) {
                let t = this.nextItemKey++;
                return this.items.set(t, e),
                this.render(),
                () => {
                    this.items.delete(t),
                    this.render()
                }
            }
            clear() {
                this.items.clear(),
                this.render()
            }
            render() {
                this.root && (0,
                i.render)((0,
                i.h)("div", null, (0,
                i.h)(t.SnackbarContainer, {
                    darkMode: this.darkMode
                }, Array.from(this.items.entries()).map( ([e,n]) => (0,
                i.h)(t.SnackbarInstance, Object.assign({}, n, {
                    key: e
                }))))), this.root)
            }
        }
        t.Snackbar = c,
        t.SnackbarContainer = e => (0,
        i.h)("div", {
            class: (0,
            s.default)("-cbwsdk-snackbar-container")
        }, (0,
        i.h)("style", null, l.default), (0,
        i.h)("div", {
            class: "-cbwsdk-snackbar"
        }, e.children)),
        t.SnackbarInstance = ({autoExpand: e, message: t, menuItems: n}) => {
            let[r,o] = (0,
            a.useState)(!0)
              , [l,c] = (0,
            a.useState)(null != e && e);
            return (0,
            a.useEffect)( () => {
                let e = [window.setTimeout( () => {
                    o(!1)
                }
                , 1), window.setTimeout( () => {
                    c(!0)
                }
                , 1e4)];
                return () => {
                    e.forEach(window.clearTimeout)
                }
            }
            ),
            (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-snackbar-instance", r && "-cbwsdk-snackbar-instance-hidden", l && "-cbwsdk-snackbar-instance-expanded")
            }, (0,
            i.h)("div", {
                class: "-cbwsdk-snackbar-instance-header",
                onClick: () => {
                    c(!l)
                }
            }, (0,
            i.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                class: "-cbwsdk-snackbar-instance-header-cblogo"
            }), " ", (0,
            i.h)("div", {
                class: "-cbwsdk-snackbar-instance-header-message"
            }, t), (0,
            i.h)("div", {
                class: "-gear-container"
            }, !l && (0,
            i.h)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0,
            i.h)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "#F5F7F8"
            })), (0,
            i.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                class: "-gear-icon",
                title: "Expand"
            }))), n && n.length > 0 && (0,
            i.h)("div", {
                class: "-cbwsdk-snackbar-instance-menu"
            }, n.map( (e, t) => (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                onClick: e.onClick,
                key: t
            }, (0,
            i.h)("svg", {
                width: e.svgWidth,
                height: e.svgHeight,
                viewBox: "0 0 10 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0,
            i.h)("path", {
                "fill-rule": e.defaultFillRule,
                "clip-rule": e.defaultClipRule,
                d: e.path,
                fill: "#AAAAAA"
            })), (0,
            i.h)("span", {
                class: (0,
                s.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
            }, e.info)))))
        }
    },
    4316: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
    },
    69573: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.injectCssReset = function() {
            let e = document.createElement("style");
            e.type = "text/css",
            e.appendChild(document.createTextNode(s.default)),
            document.documentElement.appendChild(e)
        }
        ;
        let s = r(n(4316))
    },
    44412: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createQrUrl = function(e, t, n, r, s, i) {
            let a = new URLSearchParams({
                [r ? "parent-id" : "id"]: e,
                secret: t,
                server: n,
                v: s,
                chainId: i.toString()
            }).toString();
            return `${n}/#/link?${a}`
        }
        ,
        t.getLocation = function() {
            try {
                if (function() {
                    try {
                        return null !== window.frameElement
                    } catch (e) {
                        return !1
                    }
                }() && window.top)
                    return window.top.location;
                return window.location
            } catch (e) {
                return window.location
            }
        }
        ,
        t.isMobileWeb = function() {
            var e;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (e = null == window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent)
        }
        ,
        t.isDarkMode = function() {
            var e, t;
            return null !== (t = null === (e = null == window ? void 0 : window.matchMedia) || void 0 === e ? void 0 : e.call(window, "(prefers-color-scheme: dark)").matches) && void 0 !== t && t
        }
    },
    89665: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.generateKeyPair = s,
        t.deriveSharedSecret = i,
        t.encrypt = a,
        t.decrypt = o,
        t.exportKeyToHexString = c,
        t.importKeyFromHexString = d,
        t.encryptContent = u,
        t.decryptContent = h;
        let r = n(98997);
        async function s() {
            return crypto.subtle.generateKey({
                name: "ECDH",
                namedCurve: "P-256"
            }, !0, ["deriveKey"])
        }
        async function i(e, t) {
            return crypto.subtle.deriveKey({
                name: "ECDH",
                public: t
            }, e, {
                name: "AES-GCM",
                length: 256
            }, !1, ["encrypt", "decrypt"])
        }
        async function a(e, t) {
            let n = crypto.getRandomValues(new Uint8Array(12))
              , r = await crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: n
            }, e, new TextEncoder().encode(t));
            return {
                iv: n,
                cipherText: r
            }
        }
        async function o(e, {iv: t, cipherText: n}) {
            let r = await crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: t
            }, e, n);
            return new TextDecoder().decode(r)
        }
        function l(e) {
            switch (e) {
            case "public":
                return "spki";
            case "private":
                return "pkcs8"
            }
        }
        async function c(e, t) {
            let n = l(e)
              , s = await crypto.subtle.exportKey(n, t);
            return (0,
            r.uint8ArrayToHex)(new Uint8Array(s))
        }
        async function d(e, t) {
            let n = l(e)
              , s = (0,
            r.hexStringToUint8Array)(t).buffer;
            return await crypto.subtle.importKey(n, s, {
                name: "ECDH",
                namedCurve: "P-256"
            }, !0, "private" === e ? ["deriveKey"] : [])
        }
        async function u(e, t) {
            return a(t, JSON.stringify(e, (e, t) => t instanceof Error ? Object.assign(Object.assign({}, t.code ? {
                code: t.code
            } : {}), {
                message: t.message
            }) : t))
        }
        async function h(e, t) {
            return JSON.parse(await o(t, e))
        }
    },
    66320: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.fetchRPCRequest = i,
        t.getCoinbaseInjectedProvider = function({metadata: e, preference: t}) {
            var n;
            if ("smartWalletOnly" !== t.options) {
                let t = globalThis.coinbaseWalletExtension;
                if (t) {
                    let {appName: r, appLogoUrl: s, appChainIds: i} = e;
                    return null === (n = t.setAppInfo) || void 0 === n || n.call(t, r, s, i),
                    t
                }
            }
            let r = function() {
                var e, t;
                try {
                    let n = globalThis;
                    return null !== (e = n.ethereum) && void 0 !== e ? e : null === (t = n.top) || void 0 === t ? void 0 : t.ethereum
                } catch (e) {
                    return
                }
            }();
            if (null == r ? void 0 : r.isCoinbaseBrowser)
                return r
        }
        ,
        t.checkErrorForInvalidRequestArgs = function(e) {
            if (!e || "object" != typeof e || Array.isArray(e))
                throw s.standardErrors.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e
                });
            let {method: t, params: n} = e;
            if ("string" != typeof t || 0 === t.length)
                throw s.standardErrors.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e
                });
            if (void 0 !== n && !Array.isArray(n) && ("object" != typeof n || null === n))
                throw s.standardErrors.rpc.invalidParams({
                    message: "'args.params' must be an object or array if provided.",
                    data: e
                });
            switch (t) {
            case "eth_sign":
            case "eth_signTypedData_v2":
            case "eth_subscribe":
            case "eth_unsubscribe":
                throw s.standardErrors.provider.unsupportedMethod()
            }
        }
        ;
        let r = n(54750)
          , s = n(39172);
        async function i(e, t) {
            let n = Object.assign(Object.assign({}, e), {
                jsonrpc: "2.0",
                id: crypto.randomUUID()
            })
              , s = await window.fetch(t, {
                method: "POST",
                body: JSON.stringify(n),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "X-Cbw-Sdk-Version": r.LIB_VERSION
                }
            })
              , {result: i, error: a} = await s.json();
            if (a)
                throw a;
            return i
        }
    },
    46662: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.openPopup = function(e) {
            let t = (window.innerWidth - 420) / 2 + window.screenX
              , n = (window.innerHeight - 540) / 2 + window.screenY
              , s = window.open(e, "Smart Wallet", `width=420, height=540, left=${t}, top=${n}`);
            if (null == s || s.focus(),
            !s)
                throw r.standardErrors.rpc.internal("Pop up window failed to open");
            return s
        }
        ,
        t.closePopup = function(e) {
            e && !e.closed && e.close()
        }
        ;
        let r = n(39172)
    },
    86105: function(e, t, n) {
        var r = n(9109).Buffer;
        let s = n(77114);
        function i(e) {
            if (e.startsWith("int["))
                return "int256" + e.slice(3);
            if ("int" === e)
                return "int256";
            if (e.startsWith("uint["))
                return "uint256" + e.slice(4);
            if ("uint" === e)
                return "uint256";
            if (e.startsWith("fixed["))
                return "fixed128x128" + e.slice(5);
            if ("fixed" === e)
                return "fixed128x128";
            if (e.startsWith("ufixed["))
                return "ufixed128x128" + e.slice(6);
            else if ("ufixed" === e)
                return "ufixed128x128";
            return e
        }
        function a(e) {
            return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
        }
        function o(e) {
            var t = /^\D+(\d+)x(\d+)$/.exec(e);
            return [parseInt(t[1], 10), parseInt(t[2], 10)]
        }
        function l(e) {
            var t = e.match(/(.*)\[(.*?)\]$/);
            return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
        }
        function c(e) {
            var t = typeof e;
            if ("string" === t || "number" === t)
                return BigInt(e);
            if ("bigint" === t)
                return e;
            throw Error("Argument is not a number")
        }
        function d(e, t) {
            if ("address" === e)
                return d("uint160", c(t));
            if ("bool" === e)
                return d("uint8", t ? 1 : 0);
            if ("string" === e)
                return d("bytes", new r(t,"utf8"));
            if ((p = e).lastIndexOf("]") === p.length - 1) {
                if (void 0 === t.length)
                    throw Error("Not an array?");
                if ("dynamic" !== (n = l(e)) && 0 !== n && t.length > n)
                    throw Error("Elements exceed array size: " + n);
                for (h in u = [],
                e = e.slice(0, e.lastIndexOf("[")),
                "string" == typeof t && (t = JSON.parse(t)),
                t)
                    u.push(d(e, t[h]));
                if ("dynamic" === n) {
                    var n, i, u, h, p, f = d("uint256", t.length);
                    u.unshift(f)
                }
                return r.concat(u)
            }
            if ("bytes" === e)
                return t = new r(t),
                u = r.concat([d("uint256", t.length), t]),
                t.length % 32 != 0 && (u = r.concat([u, s.zeros(32 - t.length % 32)])),
                u;
            if (e.startsWith("bytes")) {
                if ((n = a(e)) < 1 || n > 32)
                    throw Error("Invalid bytes<N> width: " + n);
                return s.setLengthRight(t, 32)
            } else if (e.startsWith("uint")) {
                if ((n = a(e)) % 8 || n < 8 || n > 256)
                    throw Error("Invalid uint<N> width: " + n);
                i = c(t);
                let r = s.bitLengthFromBigInt(i);
                if (r > n)
                    throw Error("Supplied uint exceeds width: " + n + " vs " + r);
                if (i < 0)
                    throw Error("Supplied uint is negative");
                return s.bufferBEFromBigInt(i, 32)
            } else if (e.startsWith("int")) {
                if ((n = a(e)) % 8 || n < 8 || n > 256)
                    throw Error("Invalid int<N> width: " + n);
                i = c(t);
                let r = s.bitLengthFromBigInt(i);
                if (r > n)
                    throw Error("Supplied int exceeds width: " + n + " vs " + r);
                let o = s.twosFromBigInt(i, 256);
                return s.bufferBEFromBigInt(o, 32)
            } else if (e.startsWith("ufixed")) {
                if (n = o(e),
                (i = c(t)) < 0)
                    throw Error("Supplied ufixed is negative");
                return d("uint256", i * BigInt(2) ** BigInt(n[1]))
            } else if (e.startsWith("fixed"))
                return n = o(e),
                d("int256", c(t) * BigInt(2) ** BigInt(n[1]));
            throw Error("Unsupported or invalid type: " + e)
        }
        function u(e, t) {
            if (e.length !== t.length)
                throw Error("Number of types are not matching the values");
            for (var n, o, l = [], d = 0; d < e.length; d++) {
                var u = i(e[d])
                  , h = t[d];
                if ("bytes" === u)
                    l.push(h);
                else if ("string" === u)
                    l.push(new r(h,"utf8"));
                else if ("bool" === u)
                    l.push(new r(h ? "01" : "00","hex"));
                else if ("address" === u)
                    l.push(s.setLength(h, 20));
                else if (u.startsWith("bytes")) {
                    if ((n = a(u)) < 1 || n > 32)
                        throw Error("Invalid bytes<N> width: " + n);
                    l.push(s.setLengthRight(h, n))
                } else if (u.startsWith("uint")) {
                    if ((n = a(u)) % 8 || n < 8 || n > 256)
                        throw Error("Invalid uint<N> width: " + n);
                    o = c(h);
                    let e = s.bitLengthFromBigInt(o);
                    if (e > n)
                        throw Error("Supplied uint exceeds width: " + n + " vs " + e);
                    l.push(s.bufferBEFromBigInt(o, n / 8))
                } else if (u.startsWith("int")) {
                    if ((n = a(u)) % 8 || n < 8 || n > 256)
                        throw Error("Invalid int<N> width: " + n);
                    o = c(h);
                    let e = s.bitLengthFromBigInt(o);
                    if (e > n)
                        throw Error("Supplied int exceeds width: " + n + " vs " + e);
                    let t = s.twosFromBigInt(o, n);
                    l.push(s.bufferBEFromBigInt(t, n / 8))
                } else
                    throw Error("Unsupported or invalid type: " + u)
            }
            return r.concat(l)
        }
        e.exports = {
            rawEncode: function(e, t) {
                var n = []
                  , s = []
                  , a = 32 * e.length;
                for (var o in e) {
                    var c = i(e[o])
                      , u = d(c, t[o]);
                    "string" === c || "bytes" === c || "dynamic" === l(c) ? (n.push(d("uint256", a)),
                    s.push(u),
                    a += u.length) : n.push(u)
                }
                return r.concat(n.concat(s))
            },
            solidityPack: u,
            soliditySHA3: function(e, t) {
                return s.keccak(u(e, t))
            }
        }
    },
    80745: function(e, t, n) {
        var r = n(9109).Buffer;
        let s = n(77114)
          , i = n(86105)
          , a = {
            type: "object",
            properties: {
                types: {
                    type: "object",
                    additionalProperties: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                type: {
                                    type: "string"
                                }
                            },
                            required: ["name", "type"]
                        }
                    }
                },
                primaryType: {
                    type: "string"
                },
                domain: {
                    type: "object"
                },
                message: {
                    type: "object"
                }
            },
            required: ["types", "primaryType", "domain", "message"]
        }
          , o = {
            encodeData(e, t, n, a=!0) {
                let o = ["bytes32"]
                  , l = [this.hashType(e, n)];
                if (a) {
                    let c = (e, t, o) => {
                        if (void 0 !== n[t])
                            return ["bytes32", null == o ? "0x0000000000000000000000000000000000000000000000000000000000000000" : s.keccak(this.encodeData(t, o, n, a))];
                        if (void 0 === o)
                            throw Error(`missing value for field ${e} of type ${t}`);
                        if ("bytes" === t)
                            return ["bytes32", s.keccak(o)];
                        if ("string" === t)
                            return "string" == typeof o && (o = r.from(o, "utf8")),
                            ["bytes32", s.keccak(o)];
                        if (t.lastIndexOf("]") === t.length - 1) {
                            let n = t.slice(0, t.lastIndexOf("["))
                              , r = o.map(t => c(e, n, t));
                            return ["bytes32", s.keccak(i.rawEncode(r.map( ([e]) => e), r.map( ([,e]) => e)))]
                        }
                        return [t, o]
                    }
                    ;
                    for (let r of n[e]) {
                        let[e,n] = c(r.name, r.type, t[r.name]);
                        o.push(e),
                        l.push(n)
                    }
                } else
                    for (let i of n[e]) {
                        let e = t[i.name];
                        if (void 0 !== e) {
                            if ("bytes" === i.type)
                                o.push("bytes32"),
                                e = s.keccak(e),
                                l.push(e);
                            else if ("string" === i.type)
                                o.push("bytes32"),
                                "string" == typeof e && (e = r.from(e, "utf8")),
                                e = s.keccak(e),
                                l.push(e);
                            else if (void 0 !== n[i.type])
                                o.push("bytes32"),
                                e = s.keccak(this.encodeData(i.type, e, n, a)),
                                l.push(e);
                            else if (i.type.lastIndexOf("]") === i.type.length - 1)
                                throw Error("Arrays currently unimplemented in encodeData");
                            else
                                o.push(i.type),
                                l.push(e)
                        }
                    }
                return i.rawEncode(o, l)
            },
            encodeType(e, t) {
                let n = ""
                  , r = this.findTypeDependencies(e, t).filter(t => t !== e);
                for (let s of r = [e].concat(r.sort())) {
                    if (!t[s])
                        throw Error("No type definition specified: " + s);
                    n += s + "(" + t[s].map( ({name: e, type: t}) => t + " " + e).join(",") + ")"
                }
                return n
            },
            findTypeDependencies(e, t, n=[]) {
                if (e = e.match(/^\w*/)[0],
                n.includes(e) || void 0 === t[e])
                    return n;
                for (let r of (n.push(e),
                t[e]))
                    for (let e of this.findTypeDependencies(r.type, t, n))
                        n.includes(e) || n.push(e);
                return n
            },
            hashStruct(e, t, n, r=!0) {
                return s.keccak(this.encodeData(e, t, n, r))
            },
            hashType(e, t) {
                return s.keccak(this.encodeType(e, t))
            },
            sanitizeData(e) {
                let t = {};
                for (let n in a.properties)
                    e[n] && (t[n] = e[n]);
                return t.types && (t.types = Object.assign({
                    EIP712Domain: []
                }, t.types)),
                t
            },
            hash(e, t=!0) {
                let n = this.sanitizeData(e)
                  , i = [r.from("1901", "hex")];
                return i.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
                "EIP712Domain" !== n.primaryType && i.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
                s.keccak(r.concat(i))
            }
        };
        e.exports = {
            TYPED_MESSAGE_SCHEMA: a,
            TypedDataUtils: o,
            hashForSignTypedDataLegacy: function(e) {
                return function(e) {
                    let t = Error("Expect argument to be non-empty array");
                    if ("object" != typeof e || !e.length)
                        throw t;
                    let n = e.map(function(e) {
                        return "bytes" === e.type ? s.toBuffer(e.value) : e.value
                    })
                      , r = e.map(function(e) {
                        return e.type
                    })
                      , a = e.map(function(e) {
                        if (!e.name)
                            throw t;
                        return e.type + " " + e.name
                    });
                    return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(Array(e.length).fill("string"), a), i.soliditySHA3(r, n)])
                }(e.data)
            },
            hashForSignTypedData_v3: function(e) {
                return o.hash(e.data, !1)
            },
            hashForSignTypedData_v4: function(e) {
                return o.hash(e.data)
            }
        }
    },
    77114: function(e, t, n) {
        var r = n(9109).Buffer;
        let {keccak_256: s} = n(52975);
        function i(e) {
            return r.allocUnsafe(e).fill(0)
        }
        function a(e, t) {
            let n = e.toString(16);
            n.length % 2 != 0 && (n = "0" + n);
            let s = n.match(/.{1,2}/g).map(e => parseInt(e, 16));
            for (; s.length < t; )
                s.unshift(0);
            return r.from(s)
        }
        function o(e, t, n) {
            let r = i(t);
            return (e = l(e),
            n) ? e.length < t ? (e.copy(r),
            r) : e.slice(0, t) : e.length < t ? (e.copy(r, t - e.length),
            r) : e.slice(-t)
        }
        function l(e) {
            if (!r.isBuffer(e)) {
                if (Array.isArray(e))
                    e = r.from(e);
                else if ("string" == typeof e) {
                    var t;
                    e = c(e) ? r.from((t = d(e)).length % 2 ? "0" + t : t, "hex") : r.from(e)
                } else if ("number" == typeof e)
                    e = intToBuffer(e);
                else if (null == e)
                    e = r.allocUnsafe(0);
                else if ("bigint" == typeof e)
                    e = a(e);
                else if (e.toArray)
                    e = r.from(e.toArray());
                else
                    throw Error("invalid type")
            }
            return e
        }
        function c(e) {
            return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
        }
        function d(e) {
            return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e
        }
        e.exports = {
            zeros: i,
            setLength: o,
            setLengthRight: function(e, t) {
                return o(e, t, !0)
            },
            isHexString: c,
            stripHexPrefix: d,
            toBuffer: l,
            bufferToHex: function(e) {
                return "0x" + (e = l(e)).toString("hex")
            },
            keccak: function(e, t) {
                if (e = l(e),
                t || (t = 256),
                256 !== t)
                    throw Error("unsupported");
                return r.from(s(new Uint8Array(e)))
            },
            bitLengthFromBigInt: function(e) {
                return e.toString(2).length
            },
            bufferBEFromBigInt: a,
            twosFromBigInt: function(e, t) {
                return (e < 0n ? (~e & (1n << BigInt(t)) - 1n) + 1n : e) & (1n << BigInt(t)) - 1n
            }
        }
    },
    54750: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LIB_VERSION = void 0,
        t.LIB_VERSION = "4.1.0"
    },
    67021: function(e, t) {
        "use strict";
        function n(e) {
            if (!Number.isSafeInteger(e) || e < 0)
                throw Error(`positive integer expected, not ${e}`)
        }
        function r(e) {
            if ("boolean" != typeof e)
                throw Error(`boolean expected, not ${e}`)
        }
        function s(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        function i(e, ...t) {
            if (!s(e))
                throw Error("Uint8Array expected");
            if (t.length > 0 && !t.includes(e.length))
                throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
        }
        function a(e) {
            if ("function" != typeof e || "function" != typeof e.create)
                throw Error("Hash should be wrapped by utils.wrapConstructor");
            n(e.outputLen),
            n(e.blockLen)
        }
        function o(e, t=!0) {
            if (e.destroyed)
                throw Error("Hash instance has been destroyed");
            if (t && e.finished)
                throw Error("Hash#digest() has already been called")
        }
        function l(e, t) {
            i(e);
            let n = t.outputLen;
            if (e.length < n)
                throw Error(`digestInto() expects output buffer of length at least ${n}`)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isBytes = s,
        t.number = n,
        t.bool = r,
        t.bytes = i,
        t.hash = a,
        t.exists = o,
        t.output = l,
        t.default = {
            number: n,
            bool: r,
            bytes: i,
            hash: a,
            exists: o,
            output: l
        }
    },
    6423: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HashMD = t.Maj = t.Chi = void 0;
        let r = n(67021)
          , s = n(85758);
        t.Chi = (e, t, n) => e & t ^ ~e & n,
        t.Maj = (e, t, n) => e & t ^ e & n ^ t & n;
        class i extends s.Hash {
            constructor(e, t, n, r) {
                super(),
                this.blockLen = e,
                this.outputLen = t,
                this.padOffset = n,
                this.isLE = r,
                this.finished = !1,
                this.length = 0,
                this.pos = 0,
                this.destroyed = !1,
                this.buffer = new Uint8Array(e),
                this.view = (0,
                s.createView)(this.buffer)
            }
            update(e) {
                (0,
                r.exists)(this);
                let {view: t, buffer: n, blockLen: i} = this
                  , a = (e = (0,
                s.toBytes)(e)).length;
                for (let r = 0; r < a; ) {
                    let o = Math.min(i - this.pos, a - r);
                    if (o === i) {
                        let t = (0,
                        s.createView)(e);
                        for (; i <= a - r; r += i)
                            this.process(t, r);
                        continue
                    }
                    n.set(e.subarray(r, r + o), this.pos),
                    this.pos += o,
                    r += o,
                    this.pos === i && (this.process(t, 0),
                    this.pos = 0)
                }
                return this.length += e.length,
                this.roundClean(),
                this
            }
            digestInto(e) {
                (0,
                r.exists)(this),
                (0,
                r.output)(e, this),
                this.finished = !0;
                let {buffer: t, view: n, blockLen: i, isLE: a} = this
                  , {pos: o} = this;
                t[o++] = 128,
                this.buffer.subarray(o).fill(0),
                this.padOffset > i - o && (this.process(n, 0),
                o = 0);
                for (let e = o; e < i; e++)
                    t[e] = 0;
                !function(e, t, n, r) {
                    if ("function" == typeof e.setBigUint64)
                        return e.setBigUint64(t, n, r);
                    let s = BigInt(32)
                      , i = BigInt(4294967295)
                      , a = Number(n >> s & i)
                      , o = Number(n & i)
                      , l = r ? 4 : 0
                      , c = r ? 0 : 4;
                    e.setUint32(t + l, a, r),
                    e.setUint32(t + c, o, r)
                }(n, i - 8, BigInt(8 * this.length), a),
                this.process(n, 0);
                let l = (0,
                s.createView)(e)
                  , c = this.outputLen;
                if (c % 4)
                    throw Error("_sha2: outputLen should be aligned to 32bit");
                let d = c / 4
                  , u = this.get();
                if (d > u.length)
                    throw Error("_sha2: outputLen bigger than state");
                for (let e = 0; e < d; e++)
                    l.setUint32(4 * e, u[e], a)
            }
            digest() {
                let {buffer: e, outputLen: t} = this;
                this.digestInto(e);
                let n = e.slice(0, t);
                return this.destroy(),
                n
            }
            _cloneInto(e) {
                e || (e = new this.constructor),
                e.set(...this.get());
                let {blockLen: t, buffer: n, length: r, finished: s, destroyed: i, pos: a} = this;
                return e.length = r,
                e.pos = a,
                e.finished = s,
                e.destroyed = i,
                r % t && e.buffer.set(n),
                e
            }
        }
        t.HashMD = i
    },
    30455: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.add5L = t.add5H = t.add4H = t.add4L = t.add3H = t.add3L = t.rotlBL = t.rotlBH = t.rotlSL = t.rotlSH = t.rotr32L = t.rotr32H = t.rotrBL = t.rotrBH = t.rotrSL = t.rotrSH = t.shrSL = t.shrSH = t.toBig = void 0,
        t.fromBig = s,
        t.split = i,
        t.add = b;
        let n = BigInt(4294967296 - 1)
          , r = BigInt(32);
        function s(e, t=!1) {
            return t ? {
                h: Number(e & n),
                l: Number(e >> r & n)
            } : {
                h: 0 | Number(e >> r & n),
                l: 0 | Number(e & n)
            }
        }
        function i(e, t=!1) {
            let n = new Uint32Array(e.length)
              , r = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
                let {h: a, l: o} = s(e[i], t);
                [n[i],r[i]] = [a, o]
            }
            return [n, r]
        }
        let a = (e, t) => BigInt(e >>> 0) << r | BigInt(t >>> 0);
        t.toBig = a;
        let o = (e, t, n) => e >>> n;
        t.shrSH = o;
        let l = (e, t, n) => e << 32 - n | t >>> n;
        t.shrSL = l;
        let c = (e, t, n) => e >>> n | t << 32 - n;
        t.rotrSH = c;
        let d = (e, t, n) => e << 32 - n | t >>> n;
        t.rotrSL = d;
        let u = (e, t, n) => e << 64 - n | t >>> n - 32;
        t.rotrBH = u;
        let h = (e, t, n) => e >>> n - 32 | t << 64 - n;
        t.rotrBL = h;
        let p = (e, t) => t;
        t.rotr32H = p;
        let f = (e, t) => e;
        t.rotr32L = f;
        let g = (e, t, n) => e << n | t >>> 32 - n;
        t.rotlSH = g;
        let _ = (e, t, n) => t << n | e >>> 32 - n;
        t.rotlSL = _;
        let m = (e, t, n) => t << n - 32 | e >>> 64 - n;
        t.rotlBH = m;
        let y = (e, t, n) => e << n - 32 | t >>> 64 - n;
        function b(e, t, n, r) {
            let s = (t >>> 0) + (r >>> 0);
            return {
                h: e + n + (s / 4294967296 | 0) | 0,
                l: 0 | s
            }
        }
        t.rotlBL = y;
        let v = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
        t.add3L = v;
        let w = (e, t, n, r) => t + n + r + (e / 4294967296 | 0) | 0;
        t.add3H = w;
        let k = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
        t.add4L = k;
        let E = (e, t, n, r, s) => t + n + r + s + (e / 4294967296 | 0) | 0;
        t.add4H = E;
        let S = (e, t, n, r, s) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (s >>> 0);
        t.add5L = S;
        let C = (e, t, n, r, s, i) => t + n + r + s + i + (e / 4294967296 | 0) | 0;
        t.add5H = C,
        t.default = {
            fromBig: s,
            split: i,
            toBig: a,
            shrSH: o,
            shrSL: l,
            rotrSH: c,
            rotrSL: d,
            rotrBH: u,
            rotrBL: h,
            rotr32H: p,
            rotr32L: f,
            rotlSH: g,
            rotlSL: _,
            rotlBH: m,
            rotlBL: y,
            add: b,
            add3L: v,
            add3H: w,
            add4L: k,
            add4H: E,
            add5H: C,
            add5L: S
        }
    },
    4319: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.crypto = void 0,
        t.crypto = "object" == typeof globalThis && "crypto"in globalThis ? globalThis.crypto : void 0
    },
    44212: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sha224 = t.sha256 = t.SHA256 = void 0;
        let r = n(6423)
          , s = n(85758)
          , i = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
          , a = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
          , o = new Uint32Array(64);
        class l extends r.HashMD {
            constructor() {
                super(64, 32, 8, !1),
                this.A = 0 | a[0],
                this.B = 0 | a[1],
                this.C = 0 | a[2],
                this.D = 0 | a[3],
                this.E = 0 | a[4],
                this.F = 0 | a[5],
                this.G = 0 | a[6],
                this.H = 0 | a[7]
            }
            get() {
                let {A: e, B: t, C: n, D: r, E: s, F: i, G: a, H: o} = this;
                return [e, t, n, r, s, i, a, o]
            }
            set(e, t, n, r, s, i, a, o) {
                this.A = 0 | e,
                this.B = 0 | t,
                this.C = 0 | n,
                this.D = 0 | r,
                this.E = 0 | s,
                this.F = 0 | i,
                this.G = 0 | a,
                this.H = 0 | o
            }
            process(e, t) {
                for (let n = 0; n < 16; n++,
                t += 4)
                    o[n] = e.getUint32(t, !1);
                for (let e = 16; e < 64; e++) {
                    let t = o[e - 15]
                      , n = o[e - 2]
                      , r = (0,
                    s.rotr)(t, 7) ^ (0,
                    s.rotr)(t, 18) ^ t >>> 3
                      , i = (0,
                    s.rotr)(n, 17) ^ (0,
                    s.rotr)(n, 19) ^ n >>> 10;
                    o[e] = i + o[e - 7] + r + o[e - 16] | 0
                }
                let {A: n, B: a, C: l, D: c, E: d, F: u, G: h, H: p} = this;
                for (let e = 0; e < 64; e++) {
                    let t = p + ((0,
                    s.rotr)(d, 6) ^ (0,
                    s.rotr)(d, 11) ^ (0,
                    s.rotr)(d, 25)) + (0,
                    r.Chi)(d, u, h) + i[e] + o[e] | 0
                      , f = ((0,
                    s.rotr)(n, 2) ^ (0,
                    s.rotr)(n, 13) ^ (0,
                    s.rotr)(n, 22)) + (0,
                    r.Maj)(n, a, l) | 0;
                    p = h,
                    h = u,
                    u = d,
                    d = c + t | 0,
                    c = l,
                    l = a,
                    a = n,
                    n = t + f | 0
                }
                n = n + this.A | 0,
                a = a + this.B | 0,
                l = l + this.C | 0,
                c = c + this.D | 0,
                d = d + this.E | 0,
                u = u + this.F | 0,
                h = h + this.G | 0,
                p = p + this.H | 0,
                this.set(n, a, l, c, d, u, h, p)
            }
            roundClean() {
                o.fill(0)
            }
            destroy() {
                this.set(0, 0, 0, 0, 0, 0, 0, 0),
                this.buffer.fill(0)
            }
        }
        t.SHA256 = l;
        class c extends l {
            constructor() {
                super(),
                this.A = -1056596264,
                this.B = 914150663,
                this.C = 812702999,
                this.D = -150054599,
                this.E = -4191439,
                this.F = 1750603025,
                this.G = 1694076839,
                this.H = -1090891868,
                this.outputLen = 28
            }
        }
        t.sha256 = (0,
        s.wrapConstructor)( () => new l),
        t.sha224 = (0,
        s.wrapConstructor)( () => new c)
    },
    52975: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.shake256 = t.shake128 = t.keccak_512 = t.keccak_384 = t.keccak_256 = t.keccak_224 = t.sha3_512 = t.sha3_384 = t.sha3_256 = t.sha3_224 = t.Keccak = void 0,
        t.keccakP = b;
        let r = n(67021)
          , s = n(30455)
          , i = n(85758)
          , a = []
          , o = []
          , l = []
          , c = BigInt(0)
          , d = BigInt(1)
          , u = BigInt(2)
          , h = BigInt(7)
          , p = BigInt(256)
          , f = BigInt(113);
        for (let e = 0, t = d, n = 1, r = 0; e < 24; e++) {
            [n,r] = [r, (2 * n + 3 * r) % 5],
            a.push(2 * (5 * r + n)),
            o.push((e + 1) * (e + 2) / 2 % 64);
            let s = c;
            for (let e = 0; e < 7; e++)
                (t = (t << d ^ (t >> h) * f) % p) & u && (s ^= d << (d << BigInt(e)) - d);
            l.push(s)
        }
        let[g,_] = (0,
        s.split)(l, !0)
          , m = (e, t, n) => n > 32 ? (0,
        s.rotlBH)(e, t, n) : (0,
        s.rotlSH)(e, t, n)
          , y = (e, t, n) => n > 32 ? (0,
        s.rotlBL)(e, t, n) : (0,
        s.rotlSL)(e, t, n);
        function b(e, t=24) {
            let n = new Uint32Array(10);
            for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                    n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                    let r = (t + 8) % 10
                      , s = (t + 2) % 10
                      , i = n[s]
                      , a = n[s + 1]
                      , o = m(i, a, 1) ^ n[r]
                      , l = y(i, a, 1) ^ n[r + 1];
                    for (let n = 0; n < 50; n += 10)
                        e[t + n] ^= o,
                        e[t + n + 1] ^= l
                }
                let t = e[2]
                  , s = e[3];
                for (let n = 0; n < 24; n++) {
                    let r = o[n]
                      , i = m(t, s, r)
                      , l = y(t, s, r)
                      , c = a[n];
                    t = e[c],
                    s = e[c + 1],
                    e[c] = i,
                    e[c + 1] = l
                }
                for (let t = 0; t < 50; t += 10) {
                    for (let r = 0; r < 10; r++)
                        n[r] = e[t + r];
                    for (let r = 0; r < 10; r++)
                        e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                }
                e[0] ^= g[r],
                e[1] ^= _[r]
            }
            n.fill(0)
        }
        class v extends i.Hash {
            constructor(e, t, n, s=!1, a=24) {
                if (super(),
                this.blockLen = e,
                this.suffix = t,
                this.outputLen = n,
                this.enableXOF = s,
                this.rounds = a,
                this.pos = 0,
                this.posOut = 0,
                this.finished = !1,
                this.destroyed = !1,
                (0,
                r.number)(n),
                0 >= this.blockLen || this.blockLen >= 200)
                    throw Error("Sha3 supports only keccak-f1600 function");
                this.state = new Uint8Array(200),
                this.state32 = (0,
                i.u32)(this.state)
            }
            keccak() {
                i.isLE || (0,
                i.byteSwap32)(this.state32),
                b(this.state32, this.rounds),
                i.isLE || (0,
                i.byteSwap32)(this.state32),
                this.posOut = 0,
                this.pos = 0
            }
            update(e) {
                (0,
                r.exists)(this);
                let {blockLen: t, state: n} = this
                  , s = (e = (0,
                i.toBytes)(e)).length;
                for (let r = 0; r < s; ) {
                    let i = Math.min(t - this.pos, s - r);
                    for (let t = 0; t < i; t++)
                        n[this.pos++] ^= e[r++];
                    this.pos === t && this.keccak()
                }
                return this
            }
            finish() {
                if (this.finished)
                    return;
                this.finished = !0;
                let {state: e, suffix: t, pos: n, blockLen: r} = this;
                e[n] ^= t,
                (128 & t) != 0 && n === r - 1 && this.keccak(),
                e[r - 1] ^= 128,
                this.keccak()
            }
            writeInto(e) {
                (0,
                r.exists)(this, !1),
                (0,
                r.bytes)(e),
                this.finish();
                let t = this.state
                  , {blockLen: n} = this;
                for (let r = 0, s = e.length; r < s; ) {
                    this.posOut >= n && this.keccak();
                    let i = Math.min(n - this.posOut, s - r);
                    e.set(t.subarray(this.posOut, this.posOut + i), r),
                    this.posOut += i,
                    r += i
                }
                return e
            }
            xofInto(e) {
                if (!this.enableXOF)
                    throw Error("XOF is not possible for this instance");
                return this.writeInto(e)
            }
            xof(e) {
                return (0,
                r.number)(e),
                this.xofInto(new Uint8Array(e))
            }
            digestInto(e) {
                if ((0,
                r.output)(e, this),
                this.finished)
                    throw Error("digest() was already called");
                return this.writeInto(e),
                this.destroy(),
                e
            }
            digest() {
                return this.digestInto(new Uint8Array(this.outputLen))
            }
            destroy() {
                this.destroyed = !0,
                this.state.fill(0)
            }
            _cloneInto(e) {
                let {blockLen: t, suffix: n, outputLen: r, rounds: s, enableXOF: i} = this;
                return e || (e = new v(t,n,r,i,s)),
                e.state32.set(this.state32),
                e.pos = this.pos,
                e.posOut = this.posOut,
                e.finished = this.finished,
                e.rounds = s,
                e.suffix = n,
                e.outputLen = r,
                e.enableXOF = i,
                e.destroyed = this.destroyed,
                e
            }
        }
        t.Keccak = v;
        let w = (e, t, n) => (0,
        i.wrapConstructor)( () => new v(t,e,n));
        t.sha3_224 = w(6, 144, 28),
        t.sha3_256 = w(6, 136, 32),
        t.sha3_384 = w(6, 104, 48),
        t.sha3_512 = w(6, 72, 64),
        t.keccak_224 = w(1, 144, 28),
        t.keccak_256 = w(1, 136, 32),
        t.keccak_384 = w(1, 104, 48),
        t.keccak_512 = w(1, 72, 64);
        let k = (e, t, n) => (0,
        i.wrapXOFConstructorWithOpts)( (r={}) => new v(t,e,void 0 === r.dkLen ? n : r.dkLen,!0));
        t.shake128 = k(31, 168, 16),
        t.shake256 = k(31, 136, 32)
    },
    85758: function(e, t, n) {
        "use strict";
        /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Hash = t.nextTick = t.byteSwapIfBE = t.byteSwap = t.isLE = t.rotl = t.rotr = t.createView = t.u32 = t.u8 = void 0,
        t.isBytes = function(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        ,
        t.byteSwap32 = function(e) {
            for (let n = 0; n < e.length; n++)
                e[n] = (0,
                t.byteSwap)(e[n])
        }
        ,
        t.bytesToHex = function(e) {
            (0,
            s.bytes)(e);
            let t = "";
            for (let n = 0; n < e.length; n++)
                t += i[e[n]];
            return t
        }
        ,
        t.hexToBytes = function(e) {
            if ("string" != typeof e)
                throw Error("hex string expected, got " + typeof e);
            let t = e.length
              , n = t / 2;
            if (t % 2)
                throw Error("padded hex string expected, got unpadded hex of length " + t);
            let r = new Uint8Array(n);
            for (let t = 0, s = 0; t < n; t++,
            s += 2) {
                let n = o(e.charCodeAt(s))
                  , i = o(e.charCodeAt(s + 1));
                if (void 0 === n || void 0 === i)
                    throw Error('hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s);
                r[t] = 16 * n + i
            }
            return r
        }
        ,
        t.asyncLoop = c,
        t.utf8ToBytes = d,
        t.toBytes = u,
        t.concatBytes = function(...e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                (0,
                s.bytes)(r),
                t += r.length
            }
            let n = new Uint8Array(t);
            for (let t = 0, r = 0; t < e.length; t++) {
                let s = e[t];
                n.set(s, r),
                r += s.length
            }
            return n
        }
        ,
        t.checkOpts = function(e, t) {
            if (void 0 !== t && "[object Object]" !== p.call(t))
                throw Error("Options should be object or undefined");
            return Object.assign(e, t)
        }
        ,
        t.wrapConstructor = function(e) {
            let t = t => e().update(u(t)).digest()
              , n = e();
            return t.outputLen = n.outputLen,
            t.blockLen = n.blockLen,
            t.create = () => e(),
            t
        }
        ,
        t.wrapConstructorWithOpts = function(e) {
            let t = (t, n) => e(n).update(u(t)).digest()
              , n = e({});
            return t.outputLen = n.outputLen,
            t.blockLen = n.blockLen,
            t.create = t => e(t),
            t
        }
        ,
        t.wrapXOFConstructorWithOpts = function(e) {
            let t = (t, n) => e(n).update(u(t)).digest()
              , n = e({});
            return t.outputLen = n.outputLen,
            t.blockLen = n.blockLen,
            t.create = t => e(t),
            t
        }
        ,
        t.randomBytes = function(e=32) {
            if (r.crypto && "function" == typeof r.crypto.getRandomValues)
                return r.crypto.getRandomValues(new Uint8Array(e));
            if (r.crypto && "function" == typeof r.crypto.randomBytes)
                return r.crypto.randomBytes(e);
            throw Error("crypto.getRandomValues must be defined")
        }
        ;
        let r = n(4319)
          , s = n(67021);
        t.u8 = e => new Uint8Array(e.buffer,e.byteOffset,e.byteLength),
        t.u32 = e => new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength / 4)),
        t.createView = e => new DataView(e.buffer,e.byteOffset,e.byteLength),
        t.rotr = (e, t) => e << 32 - t | e >>> t,
        t.rotl = (e, t) => e << t | e >>> 32 - t >>> 0,
        t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        t.byteSwap = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255,
        t.byteSwapIfBE = t.isLE ? e => e : e => (0,
        t.byteSwap)(e);
        let i = Array.from({
            length: 256
        }, (e, t) => t.toString(16).padStart(2, "0"))
          , a = {
            _0: 48,
            _9: 57,
            _A: 65,
            _F: 70,
            _a: 97,
            _f: 102
        };
        function o(e) {
            return e >= a._0 && e <= a._9 ? e - a._0 : e >= a._A && e <= a._F ? e - (a._A - 10) : e >= a._a && e <= a._f ? e - (a._a - 10) : void 0
        }
        let l = async () => {}
        ;
        async function c(e, n, r) {
            let s = Date.now();
            for (let i = 0; i < e; i++) {
                r(i);
                let e = Date.now() - s;
                e >= 0 && e < n || (await (0,
                t.nextTick)(),
                s += e)
            }
        }
        function d(e) {
            if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
            return new Uint8Array(new TextEncoder().encode(e))
        }
        function u(e) {
            return "string" == typeof e && (e = d(e)),
            (0,
            s.bytes)(e),
            e
        }
        t.nextTick = l;
        class h {
            clone() {
                return this._cloneInto()
            }
        }
        t.Hash = h;
        let p = {}.toString
    },
    952: function(e, t, n) {
        "use strict";
        function r() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    var n, r, s = "";
                    if ("string" == typeof t || "number" == typeof t)
                        s += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++)
                                t[n] && (r = e(t[n])) && (s && (s += " "),
                                s += r);
                        else
                            for (n in t)
                                t[n] && (s && (s += " "),
                                s += n)
                    }
                    return s
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
        n.r(t),
        n.d(t, {
            clsx: function() {
                return r
            }
        }),
        t.default = r
    },
    57764: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Component: function() {
                return C
            },
            Fragment: function() {
                return S
            },
            cloneElement: function() {
                return W
            },
            createContext: function() {
                return H
            },
            createElement: function() {
                return w
            },
            createRef: function() {
                return E
            },
            h: function() {
                return w
            },
            hydrate: function() {
                return U
            },
            isValidElement: function() {
                return a
            },
            options: function() {
                return s
            },
            render: function() {
                return T
            },
            toChildArray: function() {
                return function e(t, n) {
                    return n = n || [],
                    null == t || "boolean" == typeof t || (y(t) ? t.some(function(t) {
                        e(t, n)
                    }) : n.push(t)),
                    n
                }
            }
        });
        var r, s, i, a, o, l, c, d, u, h, p, f, g = {}, _ = [], m = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y = Array.isArray;
        function b(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function v(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        function w(e, t, n) {
            var s, i, a, o = {};
            for (a in t)
                "key" == a ? s = t[a] : "ref" == a ? i = t[a] : o[a] = t[a];
            if (arguments.length > 2 && (o.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
                for (a in e.defaultProps)
                    void 0 === o[a] && (o[a] = e.defaultProps[a]);
            return k(e, o, s, i, null)
        }
        function k(e, t, n, r, a) {
            var o = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == a ? ++i : a,
                __i: -1,
                __u: 0
            };
            return null == a && null != s.vnode && s.vnode(o),
            o
        }
        function E() {
            return {
                current: null
            }
        }
        function S(e) {
            return e.children
        }
        function C(e, t) {
            this.props = e,
            this.context = t
        }
        function I(e, t) {
            if (null == t)
                return e.__ ? I(e.__, e.__i + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e)
                    return n.__e;
            return "function" == typeof e.type ? I(e) : null
        }
        function x(e) {
            (!e.__d && (e.__d = !0) && o.push(e) && !M.__r++ || l !== s.debounceRendering) && ((l = s.debounceRendering) || c)(M)
        }
        function M() {
            var e, t, n, r, i, a, l, c;
            for (o.sort(d); e = o.shift(); )
                e.__d && (t = o.length,
                r = void 0,
                a = (i = (n = e).__v).__e,
                l = [],
                c = [],
                n.__P && ((r = b({}, i)).__v = i.__v + 1,
                s.vnode && s.vnode(r),
                O(n.__P, r, i, n.__n, n.__P.namespaceURI, 32 & i.__u ? [a] : null, l, null == a ? I(i) : a, !!(32 & i.__u), c),
                r.__v = i.__v,
                r.__.__k[r.__i] = r,
                N(l, r, c),
                r.__e != a && function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null,
                        n = 0; n < t.__k.length; n++)
                            if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break
                            }
                        return e(t)
                    }
                }(r)),
                o.length > t && o.sort(d));
            M.__r = 0
        }
        function L(e, t, n, r, i, a, o, l, c, d, u) {
            var h, p, f, m, b, w = r && r.__k || _, E = t.length;
            for (n.__d = c,
            function(e, t, n) {
                var r, i, a, o, l, c = t.length, d = n.length, u = d, h = 0;
                for (e.__k = [],
                r = 0; r < c; r++)
                    null != (i = t[r]) && "boolean" != typeof i && "function" != typeof i ? (o = r + h,
                    (i = e.__k[r] = "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? k(null, i, null, null, null) : y(i) ? k(S, {
                        children: i
                    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? k(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = e,
                    i.__b = e.__b + 1,
                    a = null,
                    -1 !== (l = i.__i = function(e, t, n, r) {
                        var s = e.key
                          , i = e.type
                          , a = n - 1
                          , o = n + 1
                          , l = t[n];
                        if (null === l || l && s == l.key && i === l.type && 0 == (131072 & l.__u))
                            return n;
                        if (r > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
                            for (; a >= 0 || o < t.length; ) {
                                if (a >= 0) {
                                    if ((l = t[a]) && 0 == (131072 & l.__u) && s == l.key && i === l.type)
                                        return a;
                                    a--
                                }
                                if (o < t.length) {
                                    if ((l = t[o]) && 0 == (131072 & l.__u) && s == l.key && i === l.type)
                                        return o;
                                    o++
                                }
                            }
                        return -1
                    }(i, n, o, u)) && (u--,
                    (a = n[l]) && (a.__u |= 131072)),
                    null == a || null === a.__v ? (-1 == l && h--,
                    "function" != typeof i.type && (i.__u |= 65536)) : l !== o && (l == o - 1 ? h-- : l == o + 1 ? h++ : (l > o ? h-- : h++,
                    i.__u |= 65536))) : i = e.__k[r] = null;
                if (u)
                    for (r = 0; r < d; r++)
                        null != (a = n[r]) && 0 == (131072 & a.__u) && (a.__e == e.__d && (e.__d = I(a)),
                        function e(t, n, r) {
                            var i, a;
                            if (s.unmount && s.unmount(t),
                            (i = t.ref) && (i.current && i.current !== t.__e || D(i, null, n)),
                            null != (i = t.__c)) {
                                if (i.componentWillUnmount)
                                    try {
                                        i.componentWillUnmount()
                                    } catch (e) {
                                        s.__e(e, n)
                                    }
                                i.base = i.__P = null
                            }
                            if (i = t.__k)
                                for (a = 0; a < i.length; a++)
                                    i[a] && e(i[a], n, r || "function" != typeof t.type);
                            r || v(t.__e),
                            t.__c = t.__ = t.__e = t.__d = void 0
                        }(a, a))
            }(n, t, w),
            c = n.__d,
            h = 0; h < E; h++)
                null != (f = n.__k[h]) && (p = -1 === f.__i ? g : w[f.__i] || g,
                f.__i = h,
                O(e, f, p, i, a, o, l, c, d, u),
                m = f.__e,
                f.ref && p.ref != f.ref && (p.ref && D(p.ref, null, f),
                u.push(f.ref, f.__c || m, f)),
                null == b && null != m && (b = m),
                65536 & f.__u || p.__k === f.__k ? c = function e(t, n, r) {
                    var s, i;
                    if ("function" == typeof t.type) {
                        for (s = t.__k,
                        i = 0; s && i < s.length; i++)
                            s[i] && (s[i].__ = t,
                            n = e(s[i], n, r));
                        return n
                    }
                    t.__e != n && (n && t.type && !r.contains(n) && (n = I(t)),
                    r.insertBefore(t.__e, n || null),
                    n = t.__e);
                    do
                        n = n && n.nextSibling;
                    while (null != n && 8 === n.nodeType);
                    return n
                }(f, c, e) : "function" == typeof f.type && void 0 !== f.__d ? c = f.__d : m && (c = m.nextSibling),
                f.__d = void 0,
                f.__u &= -196609);
            n.__d = c,
            n.__e = b
        }
        function A(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || m.test(t) ? n : n + "px"
        }
        function R(e, t, n, r, s) {
            var i;
            e: if ("style" === t) {
                if ("string" == typeof n)
                    e.style.cssText = n;
                else {
                    if ("string" == typeof r && (e.style.cssText = r = ""),
                    r)
                        for (t in r)
                            n && t in n || A(e.style, t, "");
                    if (n)
                        for (t in n)
                            r && n[t] === r[t] || A(e.style, t, n[t])
                }
            } else if ("o" === t[0] && "n" === t[1])
                i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")),
                t = t.toLowerCase()in e || "onFocusOut" === t || "onFocusIn" === t ? t.toLowerCase().slice(2) : t.slice(2),
                e.l || (e.l = {}),
                e.l[t + i] = n,
                n ? r ? n.u = r.u : (n.u = u,
                e.addEventListener(t, i ? p : h, i)) : e.removeEventListener(t, i ? p : h, i);
            else {
                if ("http://www.w3.org/2000/svg" == s)
                    t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e)
                    try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
            }
        }
        function P(e) {
            return function(t) {
                if (this.l) {
                    var n = this.l[t.type + e];
                    if (null == t.t)
                        t.t = u++;
                    else if (t.t < n.u)
                        return;
                    return n(s.event ? s.event(t) : t)
                }
            }
        }
        function O(e, t, n, i, a, o, l, c, d, u) {
            var h, p, f, _, m, w, k, E, x, M, A, P, O, N, D, T, U = t.type;
            if (void 0 !== t.constructor)
                return null;
            128 & n.__u && (d = !!(32 & n.__u),
            o = [c = t.__e = n.__e]),
            (h = s.__b) && h(t);
            e: if ("function" == typeof U)
                try {
                    if (E = t.props,
                    x = "prototype"in U && U.prototype.render,
                    M = (h = U.contextType) && i[h.__c],
                    A = h ? M ? M.props.value : h.__ : i,
                    n.__c ? k = (p = t.__c = n.__c).__ = p.__E : (x ? t.__c = p = new U(E,A) : (t.__c = p = new C(E,A),
                    p.constructor = U,
                    p.render = j),
                    M && M.sub(p),
                    p.props = E,
                    p.state || (p.state = {}),
                    p.context = A,
                    p.__n = i,
                    f = p.__d = !0,
                    p.__h = [],
                    p._sb = []),
                    x && null == p.__s && (p.__s = p.state),
                    x && null != U.getDerivedStateFromProps && (p.__s == p.state && (p.__s = b({}, p.__s)),
                    b(p.__s, U.getDerivedStateFromProps(E, p.__s))),
                    _ = p.props,
                    m = p.state,
                    p.__v = t,
                    f)
                        x && null == U.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(),
                        x && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (x && null == U.getDerivedStateFromProps && E !== _ && null != p.componentWillReceiveProps && p.componentWillReceiveProps(E, A),
                        !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(E, p.__s, A) || t.__v === n.__v)) {
                            for (t.__v !== n.__v && (p.props = E,
                            p.state = p.__s,
                            p.__d = !1),
                            t.__e = n.__e,
                            t.__k = n.__k,
                            t.__k.some(function(e) {
                                e && (e.__ = t)
                            }),
                            P = 0; P < p._sb.length; P++)
                                p.__h.push(p._sb[P]);
                            p._sb = [],
                            p.__h.length && l.push(p);
                            break e
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(E, p.__s, A),
                        x && null != p.componentDidUpdate && p.__h.push(function() {
                            p.componentDidUpdate(_, m, w)
                        })
                    }
                    if (p.context = A,
                    p.props = E,
                    p.__P = e,
                    p.__e = !1,
                    O = s.__r,
                    N = 0,
                    x) {
                        for (p.state = p.__s,
                        p.__d = !1,
                        O && O(t),
                        h = p.render(p.props, p.state, p.context),
                        D = 0; D < p._sb.length; D++)
                            p.__h.push(p._sb[D]);
                        p._sb = []
                    } else
                        do
                            p.__d = !1,
                            O && O(t),
                            h = p.render(p.props, p.state, p.context),
                            p.state = p.__s;
                        while (p.__d && ++N < 25);
                    p.state = p.__s,
                    null != p.getChildContext && (i = b(b({}, i), p.getChildContext())),
                    x && !f && null != p.getSnapshotBeforeUpdate && (w = p.getSnapshotBeforeUpdate(_, m)),
                    L(e, y(T = null != h && h.type === S && null == h.key ? h.props.children : h) ? T : [T], t, n, i, a, o, l, c, d, u),
                    p.base = t.__e,
                    t.__u &= -161,
                    p.__h.length && l.push(p),
                    k && (p.__E = p.__ = null)
                } catch (e) {
                    if (t.__v = null,
                    d || null != o) {
                        for (t.__u |= d ? 160 : 128; c && 8 === c.nodeType && c.nextSibling; )
                            c = c.nextSibling;
                        o[o.indexOf(c)] = null,
                        t.__e = c
                    } else
                        t.__e = n.__e,
                        t.__k = n.__k;
                    s.__e(e, t, n)
                }
            else
                null == o && t.__v === n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : t.__e = function(e, t, n, i, a, o, l, c, d) {
                    var u, h, p, f, _, m, b, w = n.props, k = t.props, E = t.type;
                    if ("svg" === E ? a = "http://www.w3.org/2000/svg" : "math" === E ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"),
                    null != o) {
                        for (u = 0; u < o.length; u++)
                            if ((_ = o[u]) && "setAttribute"in _ == !!E && (E ? _.localName === E : 3 === _.nodeType)) {
                                e = _,
                                o[u] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === E)
                            return document.createTextNode(k);
                        e = document.createElementNS(a, E, k.is && k),
                        c && (s.__m && s.__m(t, o),
                        c = !1),
                        o = null
                    }
                    if (null === E)
                        w === k || c && e.data === k || (e.data = k);
                    else {
                        if (o = o && r.call(e.childNodes),
                        w = n.props || g,
                        !c && null != o)
                            for (w = {},
                            u = 0; u < e.attributes.length; u++)
                                w[(_ = e.attributes[u]).name] = _.value;
                        for (u in w)
                            if (_ = w[u],
                            "children" == u)
                                ;
                            else if ("dangerouslySetInnerHTML" == u)
                                p = _;
                            else if (!(u in k)) {
                                if ("value" == u && "defaultValue"in k || "checked" == u && "defaultChecked"in k)
                                    continue;
                                R(e, u, null, _, a)
                            }
                        for (u in k)
                            _ = k[u],
                            "children" == u ? f = _ : "dangerouslySetInnerHTML" == u ? h = _ : "value" == u ? m = _ : "checked" == u ? b = _ : c && "function" != typeof _ || w[u] === _ || R(e, u, _, w[u], a);
                        if (h)
                            c || p && (h.__html === p.__html || h.__html === e.innerHTML) || (e.innerHTML = h.__html),
                            t.__k = [];
                        else if (p && (e.innerHTML = ""),
                        L(e, y(f) ? f : [f], t, n, i, "foreignObject" === E ? "http://www.w3.org/1999/xhtml" : a, o, l, o ? o[0] : n.__k && I(n, 0), c, d),
                        null != o)
                            for (u = o.length; u--; )
                                v(o[u]);
                        c || (u = "value",
                        "progress" === E && null == m ? e.removeAttribute("value") : void 0 === m || m === e[u] && ("progress" !== E || m) && ("option" !== E || m === w[u]) || R(e, u, m, w[u], a),
                        u = "checked",
                        void 0 !== b && b !== e[u] && R(e, u, b, w[u], a))
                    }
                    return e
                }(n.__e, t, n, i, a, o, l, d, u);
            (h = s.diffed) && h(t)
        }
        function N(e, t, n) {
            t.__d = void 0;
            for (var r = 0; r < n.length; r++)
                D(n[r], n[++r], n[++r]);
            s.__c && s.__c(t, e),
            e.some(function(t) {
                try {
                    e = t.__h,
                    t.__h = [],
                    e.some(function(e) {
                        e.call(t)
                    })
                } catch (e) {
                    s.__e(e, t.__v)
                }
            })
        }
        function D(e, t, n) {
            try {
                if ("function" == typeof e) {
                    var r = "function" == typeof e.__u;
                    r && e.__u(),
                    r && null == t || (e.__u = e(t))
                } else
                    e.current = t
            } catch (e) {
                s.__e(e, n)
            }
        }
        function j(e, t, n) {
            return this.constructor(e, n)
        }
        function T(e, t, n) {
            var i, a, o, l;
            s.__ && s.__(e, t),
            a = (i = "function" == typeof n) ? null : n && n.__k || t.__k,
            o = [],
            l = [],
            O(t, e = (!i && n || t).__k = w(S, null, [e]), a || g, g, t.namespaceURI, !i && n ? [n] : a ? null : t.firstChild ? r.call(t.childNodes) : null, o, !i && n ? n : a ? a.__e : t.firstChild, i, l),
            N(o, e, l)
        }
        function U(e, t) {
            T(e, t, U)
        }
        function W(e, t, n) {
            var s, i, a, o, l = b({}, e.props);
            for (a in e.type && e.type.defaultProps && (o = e.type.defaultProps),
            t)
                "key" == a ? s = t[a] : "ref" == a ? i = t[a] : l[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a];
            return arguments.length > 2 && (l.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            k(e.type, l, s || e.key, i || e.ref, null)
        }
        function H(e, t) {
            var n = {
                __c: t = "__cC" + f++,
                __: e,
                Consumer: function(e, t) {
                    return e.children(t)
                },
                Provider: function(e) {
                    var n, r;
                    return this.getChildContext || (n = new Set,
                    (r = {})[t] = this,
                    this.getChildContext = function() {
                        return r
                    }
                    ,
                    this.componentWillUnmount = function() {
                        n = null
                    }
                    ,
                    this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && n.forEach(function(e) {
                            e.__e = !0,
                            x(e)
                        })
                    }
                    ,
                    this.sub = function(e) {
                        n.add(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            n && n.delete(e),
                            t && t.call(e)
                        }
                    }
                    ),
                    e.children
                }
            };
            return n.Provider.__ = n.Consumer.contextType = n
        }
        r = _.slice,
        s = {
            __e: function(e, t, n, r) {
                for (var s, i, a; t = t.__; )
                    if ((s = t.__c) && !s.__)
                        try {
                            if ((i = s.constructor) && null != i.getDerivedStateFromError && (s.setState(i.getDerivedStateFromError(e)),
                            a = s.__d),
                            null != s.componentDidCatch && (s.componentDidCatch(e, r || {}),
                            a = s.__d),
                            a)
                                return s.__E = s
                        } catch (t) {
                            e = t
                        }
                throw e
            }
        },
        i = 0,
        a = function(e) {
            return null != e && null == e.constructor
        }
        ,
        C.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = b({}, this.state),
            "function" == typeof e && (e = e(b({}, n), this.props)),
            e && b(n, e),
            null != e && this.__v && (t && this._sb.push(t),
            x(this))
        }
        ,
        C.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            x(this))
        }
        ,
        C.prototype.render = S,
        o = [],
        c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        d = function(e, t) {
            return e.__v.__b - t.__v.__b
        }
        ,
        M.__r = 0,
        u = 0,
        h = P(!1),
        p = P(!0),
        f = 0
    },
    83148: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            useCallback: function() {
                return C
            },
            useContext: function() {
                return I
            },
            useDebugValue: function() {
                return x
            },
            useEffect: function() {
                return v
            },
            useErrorBoundary: function() {
                return M
            },
            useId: function() {
                return L
            },
            useImperativeHandle: function() {
                return E
            },
            useLayoutEffect: function() {
                return w
            },
            useMemo: function() {
                return S
            },
            useReducer: function() {
                return b
            },
            useRef: function() {
                return k
            },
            useState: function() {
                return y
            }
        });
        var r, s, i, a, o = n(57764), l = 0, c = [], d = o.options, u = d.__b, h = d.__r, p = d.diffed, f = d.__c, g = d.unmount, _ = d.__;
        function m(e, t) {
            d.__h && d.__h(s, e, l || t),
            l = 0;
            var n = s.__H || (s.__H = {
                __: [],
                __h: []
            });
            return e >= n.__.length && n.__.push({}),
            n.__[e]
        }
        function y(e) {
            return l = 1,
            b(D, e)
        }
        function b(e, t, n) {
            var i = m(r++, 2);
            if (i.t = e,
            !i.__c && (i.__ = [n ? n(t) : D(void 0, t), function(e) {
                var t = i.__N ? i.__N[0] : i.__[0]
                  , n = i.t(t, e);
                t !== n && (i.__N = [n, i.__[1]],
                i.__c.setState({}))
            }
            ],
            i.__c = s,
            !s.u)) {
                var a = function(e, t, n) {
                    if (!i.__c.__H)
                        return !0;
                    var r = i.__c.__H.__.filter(function(e) {
                        return !!e.__c
                    });
                    if (r.every(function(e) {
                        return !e.__N
                    }))
                        return !o || o.call(this, e, t, n);
                    var s = !1;
                    return r.forEach(function(e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N,
                            e.__N = void 0,
                            t !== e.__[0] && (s = !0)
                        }
                    }),
                    !(!s && i.__c.props === e) && (!o || o.call(this, e, t, n))
                };
                s.u = !0;
                var o = s.shouldComponentUpdate
                  , l = s.componentWillUpdate;
                s.componentWillUpdate = function(e, t, n) {
                    if (this.__e) {
                        var r = o;
                        o = void 0,
                        a(e, t, n),
                        o = r
                    }
                    l && l.call(this, e, t, n)
                }
                ,
                s.shouldComponentUpdate = a
            }
            return i.__N || i.__
        }
        function v(e, t) {
            var n = m(r++, 3);
            !d.__s && N(n.__H, t) && (n.__ = e,
            n.i = t,
            s.__H.__h.push(n))
        }
        function w(e, t) {
            var n = m(r++, 4);
            !d.__s && N(n.__H, t) && (n.__ = e,
            n.i = t,
            s.__h.push(n))
        }
        function k(e) {
            return l = 5,
            S(function() {
                return {
                    current: e
                }
            }, [])
        }
        function E(e, t, n) {
            l = 6,
            w(function() {
                return "function" == typeof e ? (e(t()),
                function() {
                    return e(null)
                }
                ) : e ? (e.current = t(),
                function() {
                    return e.current = null
                }
                ) : void 0
            }, null == n ? n : n.concat(e))
        }
        function S(e, t) {
            var n = m(r++, 7);
            return N(n.__H, t) && (n.__ = e(),
            n.__H = t,
            n.__h = e),
            n.__
        }
        function C(e, t) {
            return l = 8,
            S(function() {
                return e
            }, t)
        }
        function I(e) {
            var t = s.context[e.__c]
              , n = m(r++, 9);
            return n.c = e,
            t ? (null == n.__ && (n.__ = !0,
            t.sub(s)),
            t.props.value) : e.__
        }
        function x(e, t) {
            d.useDebugValue && d.useDebugValue(t ? t(e) : e)
        }
        function M(e) {
            var t = m(r++, 10)
              , n = y();
            return t.__ = e,
            s.componentDidCatch || (s.componentDidCatch = function(e, r) {
                t.__ && t.__(e, r),
                n[1](e)
            }
            ),
            [n[0], function() {
                n[1](void 0)
            }
            ]
        }
        function L() {
            var e = m(r++, 11);
            if (!e.__) {
                for (var t = s.__v; null !== t && !t.__m && null !== t.__; )
                    t = t.__;
                var n = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + n[0] + "-" + n[1]++
            }
            return e.__
        }
        function A() {
            for (var e; e = c.shift(); )
                if (e.__P && e.__H)
                    try {
                        e.__H.__h.forEach(P),
                        e.__H.__h.forEach(O),
                        e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [],
                        d.__e(t, e.__v)
                    }
        }
        d.__b = function(e) {
            s = null,
            u && u(e)
        }
        ,
        d.__ = function(e, t) {
            e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
            _ && _(e, t)
        }
        ,
        d.__r = function(e) {
            h && h(e),
            r = 0;
            var t = (s = e.__c).__H;
            t && (i === s ? (t.__h = [],
            s.__h = [],
            t.__.forEach(function(e) {
                e.__N && (e.__ = e.__N),
                e.i = e.__N = void 0
            })) : (t.__h.forEach(P),
            t.__h.forEach(O),
            t.__h = [],
            r = 0)),
            i = s
        }
        ,
        d.diffed = function(e) {
            p && p(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== c.push(t) && a === d.requestAnimationFrame || ((a = d.requestAnimationFrame) || function(e) {
                var t, n = function() {
                    clearTimeout(r),
                    R && cancelAnimationFrame(t),
                    setTimeout(e)
                }, r = setTimeout(n, 100);
                R && (t = requestAnimationFrame(n))
            }
            )(A)),
            t.__H.__.forEach(function(e) {
                e.i && (e.__H = e.i),
                e.i = void 0
            })),
            i = s = null
        }
        ,
        d.__c = function(e, t) {
            t.some(function(e) {
                try {
                    e.__h.forEach(P),
                    e.__h = e.__h.filter(function(e) {
                        return !e.__ || O(e)
                    })
                } catch (n) {
                    t.some(function(e) {
                        e.__h && (e.__h = [])
                    }),
                    t = [],
                    d.__e(n, e.__v)
                }
            }),
            f && f(e, t)
        }
        ,
        d.unmount = function(e) {
            g && g(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach(function(e) {
                try {
                    P(e)
                } catch (e) {
                    t = e
                }
            }),
            n.__H = void 0,
            t && d.__e(t, n.__v))
        }
        ;
        var R = "function" == typeof requestAnimationFrame;
        function P(e) {
            var t = s
              , n = e.__c;
            "function" == typeof n && (e.__c = void 0,
            n()),
            s = t
        }
        function O(e) {
            var t = s;
            e.__c = e.__(),
            s = t
        }
        function N(e, t) {
            return !e || e.length !== t.length || t.some(function(t, n) {
                return t !== e[n]
            })
        }
        function D(e, t) {
            return "function" == typeof t ? t(e) : t
        }
    }
}]);
