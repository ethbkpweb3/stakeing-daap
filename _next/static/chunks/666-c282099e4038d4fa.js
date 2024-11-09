"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[666], {
    65332: function(t, e, r) {
        r.d(e, {
            D1: function() {
                return a
            },
            Kd: function() {
                return d
            },
            Mx: function() {
                return s
            }
        });
        var n = r(53554)
          , i = r(91678);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        let o = BigInt(0)
          , l = BigInt(1)
          , f = new WeakMap
          , u = new WeakMap;
        function s(t, e) {
            let r = (t, e) => {
                let r = e.negate();
                return t ? r : e
            }
              , n = t => {
                if (!Number.isSafeInteger(t) || t <= 0 || t > e)
                    throw Error(`Wrong window size=${t}, should be [1..${e}]`)
            }
              , i = t => (n(t),
            {
                windows: Math.ceil(e / t) + 1,
                windowSize: 2 ** (t - 1)
            });
            return {
                constTimeNegate: r,
                unsafeLadder(e, r) {
                    let n = t.ZERO
                      , i = e;
                    for (; r > o; )
                        r & l && (n = n.add(i)),
                        i = i.double(),
                        r >>= l;
                    return n
                },
                precomputeWindow(t, e) {
                    let {windows: r, windowSize: n} = i(e)
                      , o = []
                      , l = t
                      , f = l;
                    for (let t = 0; t < r; t++) {
                        f = l,
                        o.push(f);
                        for (let t = 1; t < n; t++)
                            f = f.add(l),
                            o.push(f);
                        l = f.double()
                    }
                    return o
                },
                wNAF(e, n, o) {
                    let {windows: f, windowSize: u} = i(e)
                      , s = t.ZERO
                      , a = t.BASE
                      , d = BigInt(2 ** e - 1)
                      , h = 2 ** e
                      , c = BigInt(e);
                    for (let t = 0; t < f; t++) {
                        let e = t * u
                          , i = Number(o & d);
                        o >>= c,
                        i > u && (i -= h,
                        o += l);
                        let f = e + Math.abs(i) - 1
                          , g = t % 2 != 0
                          , p = i < 0;
                        0 === i ? a = a.add(r(g, n[e])) : s = s.add(r(p, n[f]))
                    }
                    return {
                        p: s,
                        f: a
                    }
                },
                wNAFCached(t, e, r) {
                    let n = u.get(t) || 1
                      , i = f.get(t);
                    return i || (i = this.precomputeWindow(t, n),
                    1 !== n && f.set(t, r(i))),
                    this.wNAF(n, i, e)
                },
                setWindowSize(t, e) {
                    n(e),
                    u.set(t, e),
                    f.delete(t)
                }
            }
        }
        function a(t, e, r, n) {
            if (!Array.isArray(r) || !Array.isArray(n) || n.length !== r.length)
                throw Error("arrays of points and scalars must have equal length");
            n.forEach( (t, r) => {
                if (!e.isValid(t))
                    throw Error(`wrong scalar at index ${r}`)
            }
            ),
            r.forEach( (e, r) => {
                if (!(e instanceof t))
                    throw Error(`wrong point at index ${r}`)
            }
            );
            let o = (0,
            i.Dd)(BigInt(r.length))
              , l = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1
              , f = (1 << l) - 1
              , u = Array(f + 1).fill(t.ZERO)
              , s = Math.floor((e.BITS - 1) / l) * l
              , a = t.ZERO;
            for (let e = s; e >= 0; e -= l) {
                u.fill(t.ZERO);
                for (let t = 0; t < n.length; t++) {
                    let i = Number(n[t] >> BigInt(e) & BigInt(f));
                    u[i] = u[i].add(r[t])
                }
                let i = t.ZERO;
                for (let e = u.length - 1, r = t.ZERO; e > 0; e--)
                    r = r.add(u[e]),
                    i = i.add(r);
                if (a = a.add(i),
                0 !== e)
                    for (let t = 0; t < l; t++)
                        a = a.double()
            }
            return a
        }
        function d(t) {
            return (0,
            n.OP)(t.Fp),
            (0,
            i.FF)(t, {
                n: "bigint",
                h: "bigint",
                Gx: "field",
                Gy: "field"
            }, {
                nBitLength: "isSafeInteger",
                nByteLength: "isSafeInteger"
            }),
            Object.freeze({
                ...(0,
                n.kK)(t.n, t.nBitLength),
                ...t,
                p: t.Fp.ORDER
            })
        }
    },
    53554: function(t, e, r) {
        r.d(e, {
            OP: function() {
                return y
            },
            PS: function() {
                return b
            },
            Tu: function() {
                return g
            },
            U_: function() {
                return c
            },
            Us: function() {
                return B
            },
            gN: function() {
                return m
            },
            kK: function() {
                return w
            },
            oA: function() {
                return h
            },
            wQ: function() {
                return d
            }
        });
        var n = r(91678);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        let i = BigInt(0)
          , o = BigInt(1)
          , l = BigInt(2)
          , f = BigInt(3)
          , u = BigInt(4)
          , s = BigInt(5)
          , a = BigInt(8);
        function d(t, e) {
            let r = t % e;
            return r >= i ? r : e + r
        }
        function h(t, e, r) {
            let n = t;
            for (; e-- > i; )
                n *= n,
                n %= r;
            return n
        }
        function c(t, e) {
            if (t === i || e <= i)
                throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
            let r = d(t, e)
              , n = e
              , l = i
              , f = o
              , u = o
              , s = i;
            for (; r !== i; ) {
                let t = n / r
                  , e = n % r
                  , i = l - u * t
                  , o = f - s * t;
                n = r,
                r = e,
                l = u,
                f = s,
                u = i,
                s = o
            }
            if (n !== o)
                throw Error("invert: does not exist");
            return d(l, e)
        }
        BigInt(9),
        BigInt(16);
        let g = (t, e) => (d(t, e) & o) === o
          , p = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
        function y(t) {
            let e = p.reduce( (t, e) => (t[e] = "function",
            t), {
                ORDER: "bigint",
                MASK: "bigint",
                BYTES: "isSafeInteger",
                BITS: "isSafeInteger"
            });
            return (0,
            n.FF)(t, e)
        }
        function w(t, e) {
            let r = void 0 !== e ? e : t.toString(2).length;
            return {
                nBitLength: r,
                nByteLength: Math.ceil(r / 8)
            }
        }
        function m(t, e, r=!1, h={}) {
            if (t <= i)
                throw Error(`Expected Field ORDER > 0, got ${t}`);
            let {nBitLength: g, nByteLength: p} = w(t, e);
            if (p > 2048)
                throw Error("Field lengths over 2048 bytes are not supported");
            let y = function(t) {
                if (t % u === f) {
                    let e = (t + o) / u;
                    return function(t, r) {
                        let n = t.pow(r, e);
                        if (!t.eql(t.sqr(n), r))
                            throw Error("Cannot find square root");
                        return n
                    }
                }
                if (t % a === s) {
                    let e = (t - s) / a;
                    return function(t, r) {
                        let n = t.mul(r, l)
                          , i = t.pow(n, e)
                          , o = t.mul(r, i)
                          , f = t.mul(t.mul(o, l), i)
                          , u = t.mul(o, t.sub(f, t.ONE));
                        if (!t.eql(t.sqr(u), r))
                            throw Error("Cannot find square root");
                        return u
                    }
                }
                return function(t) {
                    let e, r, n;
                    let f = (t - o) / l;
                    for (e = t - o,
                    r = 0; e % l === i; e /= l,
                    r++)
                        ;
                    for (n = l; n < t && function(t, e, r) {
                        if (r <= i || e < i)
                            throw Error("Expected power/modulo > 0");
                        if (r === o)
                            return i;
                        let n = o;
                        for (; e > i; )
                            e & o && (n = n * t % r),
                            t = t * t % r,
                            e >>= o;
                        return n
                    }(n, f, t) !== t - o; n++)
                        ;
                    if (1 === r) {
                        let e = (t + o) / u;
                        return function(t, r) {
                            let n = t.pow(r, e);
                            if (!t.eql(t.sqr(n), r))
                                throw Error("Cannot find square root");
                            return n
                        }
                    }
                    let s = (e + o) / l;
                    return function(t, i) {
                        if (t.pow(i, f) === t.neg(t.ONE))
                            throw Error("Cannot find square root");
                        let l = r
                          , u = t.pow(t.mul(t.ONE, n), e)
                          , a = t.pow(i, s)
                          , d = t.pow(i, e);
                        for (; !t.eql(d, t.ONE); ) {
                            if (t.eql(d, t.ZERO))
                                return t.ZERO;
                            let e = 1;
                            for (let r = t.sqr(d); e < l && !t.eql(r, t.ONE); e++)
                                r = t.sqr(r);
                            let r = t.pow(u, o << BigInt(l - e - 1));
                            u = t.sqr(r),
                            a = t.mul(a, r),
                            d = t.mul(d, u),
                            l = e
                        }
                        return a
                    }
                }(t)
            }(t)
              , m = Object.freeze({
                ORDER: t,
                BITS: g,
                BYTES: p,
                MASK: (0,
                n.dQ)(g),
                ZERO: i,
                ONE: o,
                create: e => d(e, t),
                isValid: e => {
                    if ("bigint" != typeof e)
                        throw Error(`Invalid field element: expected bigint, got ${typeof e}`);
                    return i <= e && e < t
                }
                ,
                is0: t => t === i,
                isOdd: t => (t & o) === o,
                neg: e => d(-e, t),
                eql: (t, e) => t === e,
                sqr: e => d(e * e, t),
                add: (e, r) => d(e + r, t),
                sub: (e, r) => d(e - r, t),
                mul: (e, r) => d(e * r, t),
                pow: (t, e) => (function(t, e, r) {
                    if (r < i)
                        throw Error("Expected power > 0");
                    if (r === i)
                        return t.ONE;
                    if (r === o)
                        return e;
                    let n = t.ONE
                      , l = e;
                    for (; r > i; )
                        r & o && (n = t.mul(n, l)),
                        l = t.sqr(l),
                        r >>= o;
                    return n
                }
                )(m, t, e),
                div: (e, r) => d(e * c(r, t), t),
                sqrN: t => t * t,
                addN: (t, e) => t + e,
                subN: (t, e) => t - e,
                mulN: (t, e) => t * e,
                inv: e => c(e, t),
                sqrt: h.sqrt || (t => y(m, t)),
                invertBatch: t => (function(t, e) {
                    let r = Array(e.length)
                      , n = e.reduce( (e, n, i) => t.is0(n) ? e : (r[i] = e,
                    t.mul(e, n)), t.ONE)
                      , i = t.inv(n);
                    return e.reduceRight( (e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]),
                    t.mul(e, n)), i),
                    r
                }
                )(m, t),
                cmov: (t, e, r) => r ? e : t,
                toBytes: t => r ? (0,
                n.S5)(t, p) : (0,
                n.tL)(t, p),
                fromBytes: t => {
                    if (t.length !== p)
                        throw Error(`Fp.fromBytes: expected ${p}, got ${t.length}`);
                    return r ? (0,
                    n.ty)(t) : (0,
                    n.bytesToNumberBE)(t)
                }
            });
            return Object.freeze(m)
        }
        function E(t) {
            if ("bigint" != typeof t)
                throw Error("field order must be bigint");
            return Math.ceil(t.toString(2).length / 8)
        }
        function b(t) {
            let e = E(t);
            return e + Math.ceil(e / 2)
        }
        function B(t, e, r=!1) {
            let i = t.length
              , l = E(e)
              , f = b(e);
            if (i < 16 || i < f || i > 1024)
                throw Error(`expected ${f}-1024 bytes of input, got ${i}`);
            let u = d(r ? (0,
            n.bytesToNumberBE)(t) : (0,
            n.ty)(t), e - o) + o;
            return r ? (0,
            n.S5)(u, l) : (0,
            n.tL)(u, l)
        }
    },
    91678: function(t, e, r) {
        r.d(e, {
            Dd: function() {
                return S
            },
            FF: function() {
                return $
            },
            Fy: function() {
                return A
            },
            H9: function() {
                return F
            },
            S5: function() {
                return E
            },
            Z2: function() {
                return x
            },
            _t: function() {
                return l
            },
            bytesToNumberBE: function() {
                return y
            },
            ci: function() {
                return a
            },
            dQ: function() {
                return I
            },
            eV: function() {
                return B
            },
            gk: function() {
                return f
            },
            hexToBytes: function() {
                return p
            },
            n$: function() {
                return N
            },
            ql: function() {
                return b
            },
            tL: function() {
                return m
            },
            ty: function() {
                return w
            },
            uw: function() {
                return u
            },
            uz: function() {
                return d
            }
        });
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        let n = BigInt(0)
          , i = BigInt(1)
          , o = BigInt(2);
        function l(t) {
            return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
        }
        function f(t) {
            if (!l(t))
                throw Error("Uint8Array expected")
        }
        function u(t, e) {
            if ("boolean" != typeof e)
                throw Error(`${t} must be valid boolean, got "${e}".`)
        }
        let s = Array.from({
            length: 256
        }, (t, e) => e.toString(16).padStart(2, "0"));
        function a(t) {
            f(t);
            let e = "";
            for (let r = 0; r < t.length; r++)
                e += s[t[r]];
            return e
        }
        function d(t) {
            let e = t.toString(16);
            return 1 & e.length ? `0${e}` : e
        }
        function h(t) {
            if ("string" != typeof t)
                throw Error("hex string expected, got " + typeof t);
            return BigInt("" === t ? "0" : `0x${t}`)
        }
        let c = {
            _0: 48,
            _9: 57,
            _A: 65,
            _F: 70,
            _a: 97,
            _f: 102
        };
        function g(t) {
            return t >= c._0 && t <= c._9 ? t - c._0 : t >= c._A && t <= c._F ? t - (c._A - 10) : t >= c._a && t <= c._f ? t - (c._a - 10) : void 0
        }
        function p(t) {
            if ("string" != typeof t)
                throw Error("hex string expected, got " + typeof t);
            let e = t.length
              , r = e / 2;
            if (e % 2)
                throw Error("padded hex string expected, got unpadded hex of length " + e);
            let n = new Uint8Array(r);
            for (let e = 0, i = 0; e < r; e++,
            i += 2) {
                let r = g(t.charCodeAt(i))
                  , o = g(t.charCodeAt(i + 1));
                if (void 0 === r || void 0 === o)
                    throw Error('hex string expected, got non-hex character "' + (t[i] + t[i + 1]) + '" at index ' + i);
                n[e] = 16 * r + o
            }
            return n
        }
        function y(t) {
            return h(a(t))
        }
        function w(t) {
            return f(t),
            h(a(Uint8Array.from(t).reverse()))
        }
        function m(t, e) {
            return p(t.toString(16).padStart(2 * e, "0"))
        }
        function E(t, e) {
            return m(t, e).reverse()
        }
        function b(t, e, r) {
            let n;
            if ("string" == typeof e)
                try {
                    n = p(e)
                } catch (r) {
                    throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)
                }
            else if (l(e))
                n = Uint8Array.from(e);
            else
                throw Error(`${t} must be hex string or Uint8Array`);
            let i = n.length;
            if ("number" == typeof r && i !== r)
                throw Error(`${t} expected ${r} bytes, got ${i}`);
            return n
        }
        function B(...t) {
            let e = 0;
            for (let r = 0; r < t.length; r++) {
                let n = t[r];
                f(n),
                e += n.length
            }
            let r = new Uint8Array(e);
            for (let e = 0, n = 0; e < t.length; e++) {
                let i = t[e];
                r.set(i, n),
                n += i.length
            }
            return r
        }
        let v = t => "bigint" == typeof t && n <= t;
        function x(t, e, r) {
            return v(t) && v(e) && v(r) && e <= t && t < r
        }
        function A(t, e, r, n) {
            if (!x(e, r, n))
                throw Error(`expected valid ${t}: ${r} <= n < ${n}, got ${typeof e} ${e}`)
        }
        function S(t) {
            let e;
            for (e = 0; t > n; t >>= i,
            e += 1)
                ;
            return e
        }
        let I = t => (o << BigInt(t - 1)) - i
          , O = t => new Uint8Array(t)
          , q = t => Uint8Array.from(t);
        function N(t, e, r) {
            if ("number" != typeof t || t < 2)
                throw Error("hashLen must be a number");
            if ("number" != typeof e || e < 2)
                throw Error("qByteLen must be a number");
            if ("function" != typeof r)
                throw Error("hmacFn must be a function");
            let n = O(t)
              , i = O(t)
              , o = 0
              , l = () => {
                n.fill(1),
                i.fill(0),
                o = 0
            }
              , f = (...t) => r(i, n, ...t)
              , u = (t=O()) => {
                i = f(q([0]), t),
                n = f(),
                0 !== t.length && (i = f(q([1]), t),
                n = f())
            }
              , s = () => {
                if (o++ >= 1e3)
                    throw Error("drbg: tried 1000 values");
                let t = 0
                  , r = [];
                for (; t < e; ) {
                    let e = (n = f()).slice();
                    r.push(e),
                    t += n.length
                }
                return B(...r)
            }
            ;
            return (t, e) => {
                let r;
                for (l(),
                u(t); !(r = e(s())); )
                    u();
                return l(),
                r
            }
        }
        let R = {
            bigint: t => "bigint" == typeof t,
            function: t => "function" == typeof t,
            boolean: t => "boolean" == typeof t,
            string: t => "string" == typeof t,
            stringOrUint8Array: t => "string" == typeof t || l(t),
            isSafeInteger: t => Number.isSafeInteger(t),
            array: t => Array.isArray(t),
            field: (t, e) => e.Fp.isValid(t),
            hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
        };
        function $(t, e, r={}) {
            let n = (e, r, n) => {
                let i = R[r];
                if ("function" != typeof i)
                    throw Error(`Invalid validator "${r}", expected function`);
                let o = t[e];
                if ((!n || void 0 !== o) && !i(o, t))
                    throw Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)
            }
            ;
            for (let[t,r] of Object.entries(e))
                n(t, r, !1);
            for (let[t,e] of Object.entries(r))
                n(t, e, !0);
            return t
        }
        function F(t) {
            let e = new WeakMap;
            return (r, ...n) => {
                let i = e.get(r);
                if (void 0 !== i)
                    return i;
                let o = t(r, ...n);
                return e.set(r, o),
                o
            }
        }
    },
    90666: function(t, e, r) {
        r.d(e, {
            secp256k1: function() {
                return A
            }
        });
        var n = r(65530)
          , i = r(65376)
          , o = r(68104);
        class l extends o.kb {
            constructor(t, e) {
                super(),
                this.finished = !1,
                this.destroyed = !1,
                (0,
                i.vp)(t);
                let r = (0,
                o.O0)(e);
                if (this.iHash = t.create(),
                "function" != typeof this.iHash.update)
                    throw Error("Expected instance of class which extends utils.Hash");
                this.blockLen = this.iHash.blockLen,
                this.outputLen = this.iHash.outputLen;
                let n = this.blockLen
                  , l = new Uint8Array(n);
                l.set(r.length > n ? t.create().update(r).digest() : r);
                for (let t = 0; t < l.length; t++)
                    l[t] ^= 54;
                this.iHash.update(l),
                this.oHash = t.create();
                for (let t = 0; t < l.length; t++)
                    l[t] ^= 106;
                this.oHash.update(l),
                l.fill(0)
            }
            update(t) {
                return (0,
                i.Gg)(this),
                this.iHash.update(t),
                this
            }
            digestInto(t) {
                (0,
                i.Gg)(this),
                (0,
                i.aI)(t, this.outputLen),
                this.finished = !0,
                this.iHash.digestInto(t),
                this.oHash.update(t),
                this.oHash.digestInto(t),
                this.destroy()
            }
            digest() {
                let t = new Uint8Array(this.oHash.outputLen);
                return this.digestInto(t),
                t
            }
            _cloneInto(t) {
                t || (t = Object.create(Object.getPrototypeOf(this), {}));
                let {oHash: e, iHash: r, finished: n, destroyed: i, blockLen: o, outputLen: l} = this;
                return t.finished = n,
                t.destroyed = i,
                t.blockLen = o,
                t.outputLen = l,
                t.oHash = e._cloneInto(t.oHash),
                t.iHash = r._cloneInto(t.iHash),
                t
            }
            destroy() {
                this.destroyed = !0,
                this.oHash.destroy(),
                this.iHash.destroy()
            }
        }
        let f = (t, e, r) => new l(t,e).update(r).digest();
        f.create = (t, e) => new l(t,e);
        var u = r(65332)
          , s = r(53554)
          , a = r(91678);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        function d(t) {
            void 0 !== t.lowS && (0,
            a.uw)("lowS", t.lowS),
            void 0 !== t.prehash && (0,
            a.uw)("prehash", t.prehash)
        }
        let {bytesToNumberBE: h, hexToBytes: c} = a
          , g = {
            Err: class extends Error {
                constructor(t="") {
                    super(t)
                }
            }
            ,
            _tlv: {
                encode: (t, e) => {
                    let {Err: r} = g;
                    if (t < 0 || t > 256)
                        throw new r("tlv.encode: wrong tag");
                    if (1 & e.length)
                        throw new r("tlv.encode: unpadded data");
                    let n = e.length / 2
                      , i = a.uz(n);
                    if (i.length / 2 & 128)
                        throw new r("tlv.encode: long form length too big");
                    let o = n > 127 ? a.uz(i.length / 2 | 128) : "";
                    return `${a.uz(t)}${o}${i}${e}`
                }
                ,
                decode(t, e) {
                    let {Err: r} = g
                      , n = 0;
                    if (t < 0 || t > 256)
                        throw new r("tlv.encode: wrong tag");
                    if (e.length < 2 || e[n++] !== t)
                        throw new r("tlv.decode: wrong tlv");
                    let i = e[n++]
                      , o = 0;
                    if (128 & i) {
                        let t = 127 & i;
                        if (!t)
                            throw new r("tlv.decode(long): indefinite length not supported");
                        if (t > 4)
                            throw new r("tlv.decode(long): byte length is too big");
                        let l = e.subarray(n, n + t);
                        if (l.length !== t)
                            throw new r("tlv.decode: length bytes not complete");
                        if (0 === l[0])
                            throw new r("tlv.decode(long): zero leftmost byte");
                        for (let t of l)
                            o = o << 8 | t;
                        if (n += t,
                        o < 128)
                            throw new r("tlv.decode(long): not minimal encoding")
                    } else
                        o = i;
                    let l = e.subarray(n, n + o);
                    if (l.length !== o)
                        throw new r("tlv.decode: wrong value length");
                    return {
                        v: l,
                        l: e.subarray(n + o)
                    }
                }
            },
            _int: {
                encode(t) {
                    let {Err: e} = g;
                    if (t < p)
                        throw new e("integer: negative integers are not allowed");
                    let r = a.uz(t);
                    if (8 & Number.parseInt(r[0], 16) && (r = "00" + r),
                    1 & r.length)
                        throw new e("unexpected assertion");
                    return r
                },
                decode(t) {
                    let {Err: e} = g;
                    if (128 & t[0])
                        throw new e("Invalid signature integer: negative");
                    if (0 === t[0] && !(128 & t[1]))
                        throw new e("Invalid signature integer: unnecessary leading zero");
                    return h(t)
                }
            },
            toSig(t) {
                let {Err: e, _int: r, _tlv: n} = g
                  , i = "string" == typeof t ? c(t) : t;
                a.gk(i);
                let {v: o, l: l} = n.decode(48, i);
                if (l.length)
                    throw new e("Invalid signature: left bytes after parsing");
                let {v: f, l: u} = n.decode(2, o)
                  , {v: s, l: d} = n.decode(2, u);
                if (d.length)
                    throw new e("Invalid signature: left bytes after parsing");
                return {
                    r: r.decode(f),
                    s: r.decode(s)
                }
            },
            hexFromSig(t) {
                let {_tlv: e, _int: r} = g
                  , n = `${e.encode(2, r.encode(t.r))}${e.encode(2, r.encode(t.s))}`;
                return e.encode(48, n)
            }
        }
          , p = BigInt(0)
          , y = BigInt(1)
          , w = (BigInt(2),
        BigInt(3));
        BigInt(4);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        let m = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
          , E = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141")
          , b = BigInt(1)
          , B = BigInt(2)
          , v = (t, e) => (t + e / B) / e
          , x = (0,
        s.gN)(m, void 0, void 0, {
            sqrt: function(t) {
                let e = BigInt(3)
                  , r = BigInt(6)
                  , n = BigInt(11)
                  , i = BigInt(22)
                  , o = BigInt(23)
                  , l = BigInt(44)
                  , f = BigInt(88)
                  , u = t * t * t % m
                  , a = u * u * t % m
                  , d = (0,
                s.oA)(a, e, m) * a % m
                  , h = (0,
                s.oA)(d, e, m) * a % m
                  , c = (0,
                s.oA)(h, B, m) * u % m
                  , g = (0,
                s.oA)(c, n, m) * c % m
                  , p = (0,
                s.oA)(g, i, m) * g % m
                  , y = (0,
                s.oA)(p, l, m) * p % m
                  , w = (0,
                s.oA)(y, f, m) * y % m
                  , E = (0,
                s.oA)(w, l, m) * p % m
                  , b = (0,
                s.oA)(E, e, m) * a % m
                  , v = (0,
                s.oA)(b, o, m) * g % m
                  , A = (0,
                s.oA)(v, r, m) * u % m
                  , S = (0,
                s.oA)(A, B, m);
                if (!x.eql(x.sqr(S), t))
                    throw Error("Cannot find square root");
                return S
            }
        })
          , A = function(t, e) {
            let r = e => (function(t) {
                let e = function(t) {
                    let e = (0,
                    u.Kd)(t);
                    return a.FF(e, {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function"
                    }, {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean"
                    }),
                    Object.freeze({
                        lowS: !0,
                        ...e
                    })
                }(t)
                  , {Fp: r, n: n} = e
                  , i = r.BYTES + 1
                  , o = 2 * r.BYTES + 1;
                function l(t) {
                    return s.wQ(t, n)
                }
                function f(t) {
                    return s.U_(t, n)
                }
                let {ProjectivePoint: h, normPrivateKeyToScalar: c, weierstrassEquation: m, isWithinCurveOrder: E} = function(t) {
                    let e = function(t) {
                        let e = (0,
                        u.Kd)(t);
                        a.FF(e, {
                            a: "field",
                            b: "field"
                        }, {
                            allowedPrivateKeyLengths: "array",
                            wrapPrivateKey: "boolean",
                            isTorsionFree: "function",
                            clearCofactor: "function",
                            allowInfinityPoint: "boolean",
                            fromBytes: "function",
                            toBytes: "function"
                        });
                        let {endo: r, Fp: n, a: i} = e;
                        if (r) {
                            if (!n.eql(i, n.ZERO))
                                throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                            if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar)
                                throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                        }
                        return Object.freeze({
                            ...e
                        })
                    }(t)
                      , {Fp: r} = e
                      , n = s.gN(e.n, e.nBitLength)
                      , i = e.toBytes || ( (t, e, n) => {
                        let i = e.toAffine();
                        return a.eV(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                    }
                    )
                      , o = e.fromBytes || (t => {
                        let e = t.subarray(1);
                        return {
                            x: r.fromBytes(e.subarray(0, r.BYTES)),
                            y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
                        }
                    }
                    );
                    function l(t) {
                        let {a: n, b: i} = e
                          , o = r.sqr(t)
                          , l = r.mul(o, t);
                        return r.add(r.add(l, r.mul(t, n)), i)
                    }
                    if (!r.eql(r.sqr(e.Gy), l(e.Gx)))
                        throw Error("bad generator point: equation left != right");
                    function f(t) {
                        let r;
                        let {allowedPrivateKeyLengths: n, nByteLength: i, wrapPrivateKey: o, n: l} = e;
                        if (n && "bigint" != typeof t) {
                            if (a._t(t) && (t = a.ci(t)),
                            "string" != typeof t || !n.includes(t.length))
                                throw Error("Invalid key");
                            t = t.padStart(2 * i, "0")
                        }
                        try {
                            r = "bigint" == typeof t ? t : a.bytesToNumberBE((0,
                            a.ql)("private key", t, i))
                        } catch (e) {
                            throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof t}`)
                        }
                        return o && (r = s.wQ(r, l)),
                        a.Fy("private key", r, y, l),
                        r
                    }
                    function d(t) {
                        if (!(t instanceof g))
                            throw Error("ProjectivePoint expected")
                    }
                    let h = (0,
                    a.H9)( (t, e) => {
                        let {px: n, py: i, pz: o} = t;
                        if (r.eql(o, r.ONE))
                            return {
                                x: n,
                                y: i
                            };
                        let l = t.is0();
                        null == e && (e = l ? r.ONE : r.inv(o));
                        let f = r.mul(n, e)
                          , u = r.mul(i, e)
                          , s = r.mul(o, e);
                        if (l)
                            return {
                                x: r.ZERO,
                                y: r.ZERO
                            };
                        if (!r.eql(s, r.ONE))
                            throw Error("invZ was invalid");
                        return {
                            x: f,
                            y: u
                        }
                    }
                    )
                      , c = (0,
                    a.H9)(t => {
                        if (t.is0()) {
                            if (e.allowInfinityPoint && !r.is0(t.py))
                                return;
                            throw Error("bad point: ZERO")
                        }
                        let {x: n, y: i} = t.toAffine();
                        if (!r.isValid(n) || !r.isValid(i))
                            throw Error("bad point: x or y not FE");
                        let o = r.sqr(i)
                          , f = l(n);
                        if (!r.eql(o, f))
                            throw Error("bad point: equation left != right");
                        if (!t.isTorsionFree())
                            throw Error("bad point: not in prime-order subgroup");
                        return !0
                    }
                    );
                    class g {
                        constructor(t, e, n) {
                            if (this.px = t,
                            this.py = e,
                            this.pz = n,
                            null == t || !r.isValid(t))
                                throw Error("x required");
                            if (null == e || !r.isValid(e))
                                throw Error("y required");
                            if (null == n || !r.isValid(n))
                                throw Error("z required");
                            Object.freeze(this)
                        }
                        static fromAffine(t) {
                            let {x: e, y: n} = t || {};
                            if (!t || !r.isValid(e) || !r.isValid(n))
                                throw Error("invalid affine point");
                            if (t instanceof g)
                                throw Error("projective point not allowed");
                            let i = t => r.eql(t, r.ZERO);
                            return i(e) && i(n) ? g.ZERO : new g(e,n,r.ONE)
                        }
                        get x() {
                            return this.toAffine().x
                        }
                        get y() {
                            return this.toAffine().y
                        }
                        static normalizeZ(t) {
                            let e = r.invertBatch(t.map(t => t.pz));
                            return t.map( (t, r) => t.toAffine(e[r])).map(g.fromAffine)
                        }
                        static fromHex(t) {
                            let e = g.fromAffine(o((0,
                            a.ql)("pointHex", t)));
                            return e.assertValidity(),
                            e
                        }
                        static fromPrivateKey(t) {
                            return g.BASE.multiply(f(t))
                        }
                        static msm(t, e) {
                            return (0,
                            u.D1)(g, n, t, e)
                        }
                        _setWindowSize(t) {
                            E.setWindowSize(this, t)
                        }
                        assertValidity() {
                            c(this)
                        }
                        hasEvenY() {
                            let {y: t} = this.toAffine();
                            if (r.isOdd)
                                return !r.isOdd(t);
                            throw Error("Field doesn't support isOdd")
                        }
                        equals(t) {
                            d(t);
                            let {px: e, py: n, pz: i} = this
                              , {px: o, py: l, pz: f} = t
                              , u = r.eql(r.mul(e, f), r.mul(o, i))
                              , s = r.eql(r.mul(n, f), r.mul(l, i));
                            return u && s
                        }
                        negate() {
                            return new g(this.px,r.neg(this.py),this.pz)
                        }
                        double() {
                            let {a: t, b: n} = e
                              , i = r.mul(n, w)
                              , {px: o, py: l, pz: f} = this
                              , u = r.ZERO
                              , s = r.ZERO
                              , a = r.ZERO
                              , d = r.mul(o, o)
                              , h = r.mul(l, l)
                              , c = r.mul(f, f)
                              , p = r.mul(o, l);
                            return p = r.add(p, p),
                            a = r.mul(o, f),
                            a = r.add(a, a),
                            u = r.mul(t, a),
                            s = r.mul(i, c),
                            s = r.add(u, s),
                            u = r.sub(h, s),
                            s = r.add(h, s),
                            s = r.mul(u, s),
                            u = r.mul(p, u),
                            a = r.mul(i, a),
                            c = r.mul(t, c),
                            p = r.sub(d, c),
                            p = r.mul(t, p),
                            p = r.add(p, a),
                            a = r.add(d, d),
                            d = r.add(a, d),
                            d = r.add(d, c),
                            d = r.mul(d, p),
                            s = r.add(s, d),
                            c = r.mul(l, f),
                            c = r.add(c, c),
                            d = r.mul(c, p),
                            u = r.sub(u, d),
                            a = r.mul(c, h),
                            a = r.add(a, a),
                            new g(u,s,a = r.add(a, a))
                        }
                        add(t) {
                            d(t);
                            let {px: n, py: i, pz: o} = this
                              , {px: l, py: f, pz: u} = t
                              , s = r.ZERO
                              , a = r.ZERO
                              , h = r.ZERO
                              , c = e.a
                              , p = r.mul(e.b, w)
                              , y = r.mul(n, l)
                              , m = r.mul(i, f)
                              , E = r.mul(o, u)
                              , b = r.add(n, i)
                              , B = r.add(l, f);
                            b = r.mul(b, B),
                            B = r.add(y, m),
                            b = r.sub(b, B),
                            B = r.add(n, o);
                            let v = r.add(l, u);
                            return B = r.mul(B, v),
                            v = r.add(y, E),
                            B = r.sub(B, v),
                            v = r.add(i, o),
                            s = r.add(f, u),
                            v = r.mul(v, s),
                            s = r.add(m, E),
                            v = r.sub(v, s),
                            h = r.mul(c, B),
                            s = r.mul(p, E),
                            h = r.add(s, h),
                            s = r.sub(m, h),
                            h = r.add(m, h),
                            a = r.mul(s, h),
                            m = r.add(y, y),
                            m = r.add(m, y),
                            E = r.mul(c, E),
                            B = r.mul(p, B),
                            m = r.add(m, E),
                            E = r.sub(y, E),
                            E = r.mul(c, E),
                            B = r.add(B, E),
                            y = r.mul(m, B),
                            a = r.add(a, y),
                            y = r.mul(v, B),
                            s = r.mul(b, s),
                            s = r.sub(s, y),
                            y = r.mul(b, m),
                            h = r.mul(v, h),
                            new g(s,a,h = r.add(h, y))
                        }
                        subtract(t) {
                            return this.add(t.negate())
                        }
                        is0() {
                            return this.equals(g.ZERO)
                        }
                        wNAF(t) {
                            return E.wNAFCached(this, t, g.normalizeZ)
                        }
                        multiplyUnsafe(t) {
                            a.Fy("scalar", t, p, e.n);
                            let n = g.ZERO;
                            if (t === p)
                                return n;
                            if (t === y)
                                return this;
                            let {endo: i} = e;
                            if (!i)
                                return E.unsafeLadder(this, t);
                            let {k1neg: o, k1: l, k2neg: f, k2: u} = i.splitScalar(t)
                              , s = n
                              , d = n
                              , h = this;
                            for (; l > p || u > p; )
                                l & y && (s = s.add(h)),
                                u & y && (d = d.add(h)),
                                h = h.double(),
                                l >>= y,
                                u >>= y;
                            return o && (s = s.negate()),
                            f && (d = d.negate()),
                            d = new g(r.mul(d.px, i.beta),d.py,d.pz),
                            s.add(d)
                        }
                        multiply(t) {
                            let n, i;
                            let {endo: o, n: l} = e;
                            if (a.Fy("scalar", t, y, l),
                            o) {
                                let {k1neg: e, k1: l, k2neg: f, k2: u} = o.splitScalar(t)
                                  , {p: s, f: a} = this.wNAF(l)
                                  , {p: d, f: h} = this.wNAF(u);
                                s = E.constTimeNegate(e, s),
                                d = E.constTimeNegate(f, d),
                                d = new g(r.mul(d.px, o.beta),d.py,d.pz),
                                n = s.add(d),
                                i = a.add(h)
                            } else {
                                let {p: e, f: r} = this.wNAF(t);
                                n = e,
                                i = r
                            }
                            return g.normalizeZ([n, i])[0]
                        }
                        multiplyAndAddUnsafe(t, e, r) {
                            let n = g.BASE
                              , i = (t, e) => e !== p && e !== y && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e)
                              , o = i(this, e).add(i(t, r));
                            return o.is0() ? void 0 : o
                        }
                        toAffine(t) {
                            return h(this, t)
                        }
                        isTorsionFree() {
                            let {h: t, isTorsionFree: r} = e;
                            if (t === y)
                                return !0;
                            if (r)
                                return r(g, this);
                            throw Error("isTorsionFree() has not been declared for the elliptic curve")
                        }
                        clearCofactor() {
                            let {h: t, clearCofactor: r} = e;
                            return t === y ? this : r ? r(g, this) : this.multiplyUnsafe(e.h)
                        }
                        toRawBytes(t=!0) {
                            return (0,
                            a.uw)("isCompressed", t),
                            this.assertValidity(),
                            i(g, this, t)
                        }
                        toHex(t=!0) {
                            return (0,
                            a.uw)("isCompressed", t),
                            a.ci(this.toRawBytes(t))
                        }
                    }
                    g.BASE = new g(e.Gx,e.Gy,r.ONE),
                    g.ZERO = new g(r.ZERO,r.ONE,r.ZERO);
                    let m = e.nBitLength
                      , E = (0,
                    u.Mx)(g, e.endo ? Math.ceil(m / 2) : m);
                    return {
                        CURVE: e,
                        ProjectivePoint: g,
                        normPrivateKeyToScalar: f,
                        weierstrassEquation: l,
                        isWithinCurveOrder: function(t) {
                            return a.Z2(t, y, e.n)
                        }
                    }
                }({
                    ...e,
                    toBytes(t, e, n) {
                        let i = e.toAffine()
                          , o = r.toBytes(i.x)
                          , l = a.eV;
                        return ((0,
                        a.uw)("isCompressed", n),
                        n) ? l(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o) : l(Uint8Array.from([4]), o, r.toBytes(i.y))
                    },
                    fromBytes(t) {
                        let e = t.length
                          , n = t[0]
                          , l = t.subarray(1);
                        if (e === i && (2 === n || 3 === n)) {
                            let t;
                            let e = a.bytesToNumberBE(l);
                            if (!a.Z2(e, y, r.ORDER))
                                throw Error("Point is not on curve");
                            let i = m(e);
                            try {
                                t = r.sqrt(i)
                            } catch (t) {
                                throw Error("Point is not on curve" + (t instanceof Error ? ": " + t.message : ""))
                            }
                            return (1 & n) == 1 != ((t & y) === y) && (t = r.neg(t)),
                            {
                                x: e,
                                y: t
                            }
                        }
                        if (e === o && 4 === n)
                            return {
                                x: r.fromBytes(l.subarray(0, r.BYTES)),
                                y: r.fromBytes(l.subarray(r.BYTES, 2 * r.BYTES))
                            };
                        throw Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)
                    }
                })
                  , b = t => a.ci(a.tL(t, e.nByteLength))
                  , B = (t, e, r) => a.bytesToNumberBE(t.slice(e, r));
                class v {
                    constructor(t, e, r) {
                        this.r = t,
                        this.s = e,
                        this.recovery = r,
                        this.assertValidity()
                    }
                    static fromCompact(t) {
                        let r = e.nByteLength;
                        return new v(B(t = (0,
                        a.ql)("compactSignature", t, 2 * r), 0, r),B(t, r, 2 * r))
                    }
                    static fromDER(t) {
                        let {r: e, s: r} = g.toSig((0,
                        a.ql)("DER", t));
                        return new v(e,r)
                    }
                    assertValidity() {
                        a.Fy("r", this.r, y, n),
                        a.Fy("s", this.s, y, n)
                    }
                    addRecoveryBit(t) {
                        return new v(this.r,this.s,t)
                    }
                    recoverPublicKey(t) {
                        let {r: n, s: i, recovery: o} = this
                          , u = S((0,
                        a.ql)("msgHash", t));
                        if (null == o || ![0, 1, 2, 3].includes(o))
                            throw Error("recovery id invalid");
                        let s = 2 === o || 3 === o ? n + e.n : n;
                        if (s >= r.ORDER)
                            throw Error("recovery id 2 or 3 invalid");
                        let d = (1 & o) == 0 ? "02" : "03"
                          , c = h.fromHex(d + b(s))
                          , g = f(s)
                          , p = l(-u * g)
                          , y = l(i * g)
                          , w = h.BASE.multiplyAndAddUnsafe(c, p, y);
                        if (!w)
                            throw Error("point at infinify");
                        return w.assertValidity(),
                        w
                    }
                    hasHighS() {
                        return this.s > n >> y
                    }
                    normalizeS() {
                        return this.hasHighS() ? new v(this.r,l(-this.s),this.recovery) : this
                    }
                    toDERRawBytes() {
                        return a.hexToBytes(this.toDERHex())
                    }
                    toDERHex() {
                        return g.hexFromSig({
                            r: this.r,
                            s: this.s
                        })
                    }
                    toCompactRawBytes() {
                        return a.hexToBytes(this.toCompactHex())
                    }
                    toCompactHex() {
                        return b(this.r) + b(this.s)
                    }
                }
                function x(t) {
                    let e = a._t(t)
                      , r = "string" == typeof t
                      , n = (e || r) && t.length;
                    return e ? n === i || n === o : r ? n === 2 * i || n === 2 * o : t instanceof h
                }
                let A = e.bits2int || function(t) {
                    let r = a.bytesToNumberBE(t)
                      , n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r
                }
                  , S = e.bits2int_modN || function(t) {
                    return l(A(t))
                }
                  , I = a.dQ(e.nBitLength);
                function O(t) {
                    return a.Fy(`num < 2^${e.nBitLength}`, t, p, I),
                    a.tL(t, e.nByteLength)
                }
                let q = {
                    lowS: e.lowS,
                    prehash: !1
                }
                  , N = {
                    lowS: e.lowS,
                    prehash: !1
                };
                return h.BASE._setWindowSize(8),
                {
                    CURVE: e,
                    getPublicKey: function(t, e=!0) {
                        return h.fromPrivateKey(t).toRawBytes(e)
                    },
                    getSharedSecret: function(t, e, r=!0) {
                        if (x(t))
                            throw Error("first arg must be private key");
                        if (!x(e))
                            throw Error("second arg must be public key");
                        return h.fromHex(e).multiply(c(t)).toRawBytes(r)
                    },
                    sign: function(t, i, o=q) {
                        let {seed: u, k2sig: s} = function(t, i, o=q) {
                            if (["recovered", "canonical"].some(t => t in o))
                                throw Error("sign() legacy options not supported");
                            let {hash: u, randomBytes: s} = e
                              , {lowS: g, prehash: w, extraEntropy: m} = o;
                            null == g && (g = !0),
                            t = (0,
                            a.ql)("msgHash", t),
                            d(o),
                            w && (t = (0,
                            a.ql)("prehashed msgHash", u(t)));
                            let b = S(t)
                              , B = c(i)
                              , x = [O(B), O(b)];
                            if (null != m && !1 !== m) {
                                let t = !0 === m ? s(r.BYTES) : m;
                                x.push((0,
                                a.ql)("extraEntropy", t))
                            }
                            return {
                                seed: a.eV(...x),
                                k2sig: function(t) {
                                    let e = A(t);
                                    if (!E(e))
                                        return;
                                    let r = f(e)
                                      , i = h.BASE.multiply(e).toAffine()
                                      , o = l(i.x);
                                    if (o === p)
                                        return;
                                    let u = l(r * l(b + o * B));
                                    if (u === p)
                                        return;
                                    let s = (i.x === o ? 0 : 2) | Number(i.y & y)
                                      , a = u;
                                    if (g && u > n >> y)
                                        a = u > n >> y ? l(-u) : u,
                                        s ^= 1;
                                    return new v(o,a,s)
                                }
                            }
                        }(t, i, o);
                        return a.n$(e.hash.outputLen, e.nByteLength, e.hmac)(u, s)
                    },
                    verify: function(t, r, n, i=N) {
                        let o, u;
                        if (r = (0,
                        a.ql)("msgHash", r),
                        n = (0,
                        a.ql)("publicKey", n),
                        "strict"in i)
                            throw Error("options.strict was renamed to lowS");
                        d(i);
                        let {lowS: s, prehash: c} = i;
                        try {
                            if ("string" == typeof t || a._t(t))
                                try {
                                    u = v.fromDER(t)
                                } catch (e) {
                                    if (!(e instanceof g.Err))
                                        throw e;
                                    u = v.fromCompact(t)
                                }
                            else if ("object" == typeof t && "bigint" == typeof t.r && "bigint" == typeof t.s) {
                                let {r: e, s: r} = t;
                                u = new v(e,r)
                            } else
                                throw Error("PARSE");
                            o = h.fromHex(n)
                        } catch (t) {
                            if ("PARSE" === t.message)
                                throw Error("signature must be Signature instance, Uint8Array or hex string");
                            return !1
                        }
                        if (s && u.hasHighS())
                            return !1;
                        c && (r = e.hash(r));
                        let {r: p, s: y} = u
                          , w = S(r)
                          , m = f(y)
                          , E = l(w * m)
                          , b = l(p * m)
                          , B = h.BASE.multiplyAndAddUnsafe(o, E, b)?.toAffine();
                        return !!B && l(B.x) === p
                    },
                    ProjectivePoint: h,
                    Signature: v,
                    utils: {
                        isValidPrivateKey(t) {
                            try {
                                return c(t),
                                !0
                            } catch (t) {
                                return !1
                            }
                        },
                        normPrivateKeyToScalar: c,
                        randomPrivateKey: () => {
                            let t = s.PS(e.n);
                            return s.Us(e.randomBytes(t), e.n)
                        }
                        ,
                        precompute: (t=8, e=h.BASE) => (e._setWindowSize(t),
                        e.multiply(BigInt(3)),
                        e)
                    }
                }
            }
            )({
                ...t,
                hash: e,
                hmac: (t, ...r) => f(e, t, (0,
                o.eV)(...r)),
                randomBytes: o.O6
            });
            return Object.freeze({
                ...r(e),
                create: r
            })
        }({
            a: BigInt(0),
            b: BigInt(7),
            Fp: x,
            n: E,
            Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
            Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
            h: BigInt(1),
            lowS: !0,
            endo: {
                beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                splitScalar: t => {
                    let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
                      , r = -b * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
                      , n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
                      , i = BigInt("0x100000000000000000000000000000000")
                      , o = v(e * t, E)
                      , l = v(-r * t, E)
                      , f = (0,
                    s.wQ)(t - o * e - l * n, E)
                      , u = (0,
                    s.wQ)(-o * r - l * e, E)
                      , a = f > i
                      , d = u > i;
                    if (a && (f = E - f),
                    d && (u = E - u),
                    f > i || u > i)
                        throw Error("splitScalar: Endomorphism failed, k=" + t);
                    return {
                        k1neg: a,
                        k1: f,
                        k2neg: d,
                        k2: u
                    }
                }
            }
        }, n.JQ);
        BigInt(0),
        A.ProjectivePoint
    }
}]);
