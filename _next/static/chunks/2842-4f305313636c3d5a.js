(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2842], {
    58334: function(t) {
        "use strict";
        t.exports = function(t) {
            if (t.length >= 255)
                throw TypeError("Alphabet too long");
            for (var e = new Uint8Array(256), n = 0; n < e.length; n++)
                e[n] = 255;
            for (var i = 0; i < t.length; i++) {
                var r = t.charAt(i)
                  , s = r.charCodeAt(0);
                if (255 !== e[s])
                    throw TypeError(r + " is ambiguous");
                e[s] = i
            }
            var o = t.length
              , a = t.charAt(0)
              , l = Math.log(o) / Math.log(256)
              , c = Math.log(256) / Math.log(o);
            function u(t) {
                if ("string" != typeof t)
                    throw TypeError("Expected String");
                if (0 === t.length)
                    return new Uint8Array;
                for (var n = 0, i = 0, r = 0; t[n] === a; )
                    i++,
                    n++;
                for (var s = (t.length - n) * l + 1 >>> 0, c = new Uint8Array(s); t[n]; ) {
                    var u = e[t.charCodeAt(n)];
                    if (255 === u)
                        return;
                    for (var h = 0, d = s - 1; (0 !== u || h < r) && -1 !== d; d--,
                    h++)
                        u += o * c[d] >>> 0,
                        c[d] = u % 256 >>> 0,
                        u = u / 256 >>> 0;
                    if (0 !== u)
                        throw Error("Non-zero carry");
                    r = h,
                    n++
                }
                for (var g = s - r; g !== s && 0 === c[g]; )
                    g++;
                for (var f = new Uint8Array(i + (s - g)), p = i; g !== s; )
                    f[p++] = c[g++];
                return f
            }
            return {
                encode: function(e) {
                    if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))),
                    !(e instanceof Uint8Array))
                        throw TypeError("Expected Uint8Array");
                    if (0 === e.length)
                        return "";
                    for (var n = 0, i = 0, r = 0, s = e.length; r !== s && 0 === e[r]; )
                        r++,
                        n++;
                    for (var l = (s - r) * c + 1 >>> 0, u = new Uint8Array(l); r !== s; ) {
                        for (var h = e[r], d = 0, g = l - 1; (0 !== h || d < i) && -1 !== g; g--,
                        d++)
                            h += 256 * u[g] >>> 0,
                            u[g] = h % o >>> 0,
                            h = h / o >>> 0;
                        if (0 !== h)
                            throw Error("Non-zero carry");
                        i = d,
                        r++
                    }
                    for (var f = l - i; f !== l && 0 === u[f]; )
                        f++;
                    for (var p = a.repeat(n); f < l; ++f)
                        p += t.charAt(u[f]);
                    return p
                },
                decodeUnsafe: u,
                decode: function(t) {
                    var e = u(t);
                    if (e)
                        return e;
                    throw Error("Non-base" + o + " character")
                }
            }
        }
    },
    33716: function(t, e, n) {
        let i = n(58334);
        t.exports = i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    },
    40734: function(t, e, n) {
        let i = n(65585)
          , r = n(33326)
          , s = n(1688)
          , o = n(4707);
        function a(t, e, n, s, o) {
            let a = [].slice.call(arguments, 1)
              , l = a.length
              , c = "function" == typeof a[l - 1];
            if (!c && !i())
                throw Error("Callback required as last argument");
            if (c) {
                if (l < 2)
                    throw Error("Too few arguments provided");
                2 === l ? (o = n,
                n = e,
                e = s = void 0) : 3 === l && (e.getContext && void 0 === o ? (o = s,
                s = void 0) : (o = s,
                s = n,
                n = e,
                e = void 0))
            } else {
                if (l < 1)
                    throw Error("Too few arguments provided");
                return 1 === l ? (n = e,
                e = s = void 0) : 2 !== l || e.getContext || (s = n,
                n = e,
                e = void 0),
                new Promise(function(i, o) {
                    try {
                        let o = r.create(n, s);
                        i(t(o, e, s))
                    } catch (t) {
                        o(t)
                    }
                }
                )
            }
            try {
                let i = r.create(n, s);
                o(null, t(i, e, s))
            } catch (t) {
                o(t)
            }
        }
        e.create = r.create,
        e.toCanvas = a.bind(null, s.render),
        e.toDataURL = a.bind(null, s.renderToDataURL),
        e.toString = a.bind(null, function(t, e, n) {
            return o.render(t, n)
        })
    },
    65585: function(t) {
        t.exports = function() {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
        }
    },
    22053: function(t, e, n) {
        let i = n(79991).getSymbolSize;
        e.getRowColCoords = function(t) {
            if (1 === t)
                return [];
            let e = Math.floor(t / 7) + 2
              , n = i(t)
              , r = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2))
              , s = [n - 7];
            for (let t = 1; t < e - 1; t++)
                s[t] = s[t - 1] - r;
            return s.push(6),
            s.reverse()
        }
        ,
        e.getPositions = function(t) {
            let n = []
              , i = e.getRowColCoords(t)
              , r = i.length;
            for (let t = 0; t < r; t++)
                for (let e = 0; e < r; e++)
                    (0 !== t || 0 !== e) && (0 !== t || e !== r - 1) && (t !== r - 1 || 0 !== e) && n.push([i[t], i[e]]);
            return n
        }
    },
    98664: function(t, e, n) {
        let i = n(53705)
          , r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        function s(t) {
            this.mode = i.ALPHANUMERIC,
            this.data = t
        }
        s.getBitsLength = function(t) {
            return 11 * Math.floor(t / 2) + t % 2 * 6
        }
        ,
        s.prototype.getLength = function() {
            return this.data.length
        }
        ,
        s.prototype.getBitsLength = function() {
            return s.getBitsLength(this.data.length)
        }
        ,
        s.prototype.write = function(t) {
            let e;
            for (e = 0; e + 2 <= this.data.length; e += 2) {
                let n = 45 * r.indexOf(this.data[e]);
                n += r.indexOf(this.data[e + 1]),
                t.put(n, 11)
            }
            this.data.length % 2 && t.put(r.indexOf(this.data[e]), 6)
        }
        ,
        t.exports = s
    },
    71998: function(t) {
        function e() {
            this.buffer = [],
            this.length = 0
        }
        e.prototype = {
            get: function(t) {
                return (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
            },
            put: function(t, e) {
                for (let n = 0; n < e; n++)
                    this.putBit((t >>> e - n - 1 & 1) == 1)
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                let e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++
            }
        },
        t.exports = e
    },
    25972: function(t) {
        function e(t) {
            if (!t || t < 1)
                throw Error("BitMatrix size must be defined and greater than 0");
            this.size = t,
            this.data = new Uint8Array(t * t),
            this.reservedBit = new Uint8Array(t * t)
        }
        e.prototype.set = function(t, e, n, i) {
            let r = t * this.size + e;
            this.data[r] = n,
            i && (this.reservedBit[r] = !0)
        }
        ,
        e.prototype.get = function(t, e) {
            return this.data[t * this.size + e]
        }
        ,
        e.prototype.xor = function(t, e, n) {
            this.data[t * this.size + e] ^= n
        }
        ,
        e.prototype.isReserved = function(t, e) {
            return this.reservedBit[t * this.size + e]
        }
        ,
        t.exports = e
    },
    27838: function(t, e, n) {
        let i = n(53705);
        function r(t) {
            this.mode = i.BYTE,
            "string" == typeof t ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t)
        }
        r.getBitsLength = function(t) {
            return 8 * t
        }
        ,
        r.prototype.getLength = function() {
            return this.data.length
        }
        ,
        r.prototype.getBitsLength = function() {
            return r.getBitsLength(this.data.length)
        }
        ,
        r.prototype.write = function(t) {
            for (let e = 0, n = this.data.length; e < n; e++)
                t.put(this.data[e], 8)
        }
        ,
        t.exports = r
    },
    8997: function(t, e, n) {
        let i = n(17517)
          , r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
          , s = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        e.getBlocksCount = function(t, e) {
            switch (e) {
            case i.L:
                return r[(t - 1) * 4 + 0];
            case i.M:
                return r[(t - 1) * 4 + 1];
            case i.Q:
                return r[(t - 1) * 4 + 2];
            case i.H:
                return r[(t - 1) * 4 + 3];
            default:
                return
            }
        }
        ,
        e.getTotalCodewordsCount = function(t, e) {
            switch (e) {
            case i.L:
                return s[(t - 1) * 4 + 0];
            case i.M:
                return s[(t - 1) * 4 + 1];
            case i.Q:
                return s[(t - 1) * 4 + 2];
            case i.H:
                return s[(t - 1) * 4 + 3];
            default:
                return
            }
        }
    },
    17517: function(t, e) {
        e.L = {
            bit: 1
        },
        e.M = {
            bit: 0
        },
        e.Q = {
            bit: 3
        },
        e.H = {
            bit: 2
        },
        e.isValid = function(t) {
            return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
        }
        ,
        e.from = function(t, n) {
            if (e.isValid(t))
                return t;
            try {
                return function(t) {
                    if ("string" != typeof t)
                        throw Error("Param is not a string");
                    switch (t.toLowerCase()) {
                    case "l":
                    case "low":
                        return e.L;
                    case "m":
                    case "medium":
                        return e.M;
                    case "q":
                    case "quartile":
                        return e.Q;
                    case "h":
                    case "high":
                        return e.H;
                    default:
                        throw Error("Unknown EC Level: " + t)
                    }
                }(t)
            } catch (t) {
                return n
            }
        }
    },
    15078: function(t, e, n) {
        let i = n(79991).getSymbolSize;
        e.getPositions = function(t) {
            let e = i(t);
            return [[0, 0], [e - 7, 0], [0, e - 7]]
        }
    },
    91566: function(t, e, n) {
        let i = n(79991)
          , r = i.getBCHDigit(1335);
        e.getEncodedBits = function(t, e) {
            let n = t.bit << 3 | e
              , s = n << 10;
            for (; i.getBCHDigit(s) - r >= 0; )
                s ^= 1335 << i.getBCHDigit(s) - r;
            return (n << 10 | s) ^ 21522
        }
    },
    14132: function(t, e) {
        let n = new Uint8Array(512)
          , i = new Uint8Array(256);
        !function() {
            let t = 1;
            for (let e = 0; e < 255; e++)
                n[e] = t,
                i[t] = e,
                256 & (t <<= 1) && (t ^= 285);
            for (let t = 255; t < 512; t++)
                n[t] = n[t - 255]
        }(),
        e.log = function(t) {
            if (t < 1)
                throw Error("log(" + t + ")");
            return i[t]
        }
        ,
        e.exp = function(t) {
            return n[t]
        }
        ,
        e.mul = function(t, e) {
            return 0 === t || 0 === e ? 0 : n[i[t] + i[e]]
        }
    },
    38970: function(t, e, n) {
        let i = n(53705)
          , r = n(79991);
        function s(t) {
            this.mode = i.KANJI,
            this.data = t
        }
        s.getBitsLength = function(t) {
            return 13 * t
        }
        ,
        s.prototype.getLength = function() {
            return this.data.length
        }
        ,
        s.prototype.getBitsLength = function() {
            return s.getBitsLength(this.data.length)
        }
        ,
        s.prototype.write = function(t) {
            let e;
            for (e = 0; e < this.data.length; e++) {
                let n = r.toSJIS(this.data[e]);
                if (n >= 33088 && n <= 40956)
                    n -= 33088;
                else if (n >= 57408 && n <= 60351)
                    n -= 49472;
                else
                    throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                n = (n >>> 8 & 255) * 192 + (255 & n),
                t.put(n, 13)
            }
        }
        ,
        t.exports = s
    },
    83283: function(t, e) {
        e.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        let n = {
            N1: 3,
            N2: 3,
            N3: 40,
            N4: 10
        };
        e.isValid = function(t) {
            return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
        }
        ,
        e.from = function(t) {
            return e.isValid(t) ? parseInt(t, 10) : void 0
        }
        ,
        e.getPenaltyN1 = function(t) {
            let e = t.size
              , i = 0
              , r = 0
              , s = 0
              , o = null
              , a = null;
            for (let l = 0; l < e; l++) {
                r = s = 0,
                o = a = null;
                for (let c = 0; c < e; c++) {
                    let e = t.get(l, c);
                    e === o ? r++ : (r >= 5 && (i += n.N1 + (r - 5)),
                    o = e,
                    r = 1),
                    (e = t.get(c, l)) === a ? s++ : (s >= 5 && (i += n.N1 + (s - 5)),
                    a = e,
                    s = 1)
                }
                r >= 5 && (i += n.N1 + (r - 5)),
                s >= 5 && (i += n.N1 + (s - 5))
            }
            return i
        }
        ,
        e.getPenaltyN2 = function(t) {
            let e = t.size
              , i = 0;
            for (let n = 0; n < e - 1; n++)
                for (let r = 0; r < e - 1; r++) {
                    let e = t.get(n, r) + t.get(n, r + 1) + t.get(n + 1, r) + t.get(n + 1, r + 1);
                    (4 === e || 0 === e) && i++
                }
            return i * n.N2
        }
        ,
        e.getPenaltyN3 = function(t) {
            let e = t.size
              , i = 0
              , r = 0
              , s = 0;
            for (let n = 0; n < e; n++) {
                r = s = 0;
                for (let o = 0; o < e; o++)
                    r = r << 1 & 2047 | t.get(n, o),
                    o >= 10 && (1488 === r || 93 === r) && i++,
                    s = s << 1 & 2047 | t.get(o, n),
                    o >= 10 && (1488 === s || 93 === s) && i++
            }
            return i * n.N3
        }
        ,
        e.getPenaltyN4 = function(t) {
            let e = 0
              , i = t.data.length;
            for (let n = 0; n < i; n++)
                e += t.data[n];
            return Math.abs(Math.ceil(100 * e / i / 5) - 10) * n.N4
        }
        ,
        e.applyMask = function(t, n) {
            let i = n.size;
            for (let r = 0; r < i; r++)
                for (let s = 0; s < i; s++)
                    n.isReserved(s, r) || n.xor(s, r, function(t, n, i) {
                        switch (t) {
                        case e.Patterns.PATTERN000:
                            return (n + i) % 2 == 0;
                        case e.Patterns.PATTERN001:
                            return n % 2 == 0;
                        case e.Patterns.PATTERN010:
                            return i % 3 == 0;
                        case e.Patterns.PATTERN011:
                            return (n + i) % 3 == 0;
                        case e.Patterns.PATTERN100:
                            return (Math.floor(n / 2) + Math.floor(i / 3)) % 2 == 0;
                        case e.Patterns.PATTERN101:
                            return n * i % 2 + n * i % 3 == 0;
                        case e.Patterns.PATTERN110:
                            return (n * i % 2 + n * i % 3) % 2 == 0;
                        case e.Patterns.PATTERN111:
                            return (n * i % 3 + (n + i) % 2) % 2 == 0;
                        default:
                            throw Error("bad maskPattern:" + t)
                        }
                    }(t, s, r))
        }
        ,
        e.getBestMask = function(t, n) {
            let i = Object.keys(e.Patterns).length
              , r = 0
              , s = 1 / 0;
            for (let o = 0; o < i; o++) {
                n(o),
                e.applyMask(o, t);
                let i = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                e.applyMask(o, t),
                i < s && (s = i,
                r = o)
            }
            return r
        }
    },
    53705: function(t, e, n) {
        let i = n(52544)
          , r = n(25672);
        e.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        },
        e.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        },
        e.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        },
        e.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        },
        e.MIXED = {
            bit: -1
        },
        e.getCharCountIndicator = function(t, e) {
            if (!t.ccBits)
                throw Error("Invalid mode: " + t);
            if (!i.isValid(e))
                throw Error("Invalid version: " + e);
            return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
        }
        ,
        e.getBestModeForData = function(t) {
            return r.testNumeric(t) ? e.NUMERIC : r.testAlphanumeric(t) ? e.ALPHANUMERIC : r.testKanji(t) ? e.KANJI : e.BYTE
        }
        ,
        e.toString = function(t) {
            if (t && t.id)
                return t.id;
            throw Error("Invalid mode")
        }
        ,
        e.isValid = function(t) {
            return t && t.bit && t.ccBits
        }
        ,
        e.from = function(t, n) {
            if (e.isValid(t))
                return t;
            try {
                return function(t) {
                    if ("string" != typeof t)
                        throw Error("Param is not a string");
                    switch (t.toLowerCase()) {
                    case "numeric":
                        return e.NUMERIC;
                    case "alphanumeric":
                        return e.ALPHANUMERIC;
                    case "kanji":
                        return e.KANJI;
                    case "byte":
                        return e.BYTE;
                    default:
                        throw Error("Unknown mode: " + t)
                    }
                }(t)
            } catch (t) {
                return n
            }
        }
    },
    29654: function(t, e, n) {
        let i = n(53705);
        function r(t) {
            this.mode = i.NUMERIC,
            this.data = t.toString()
        }
        r.getBitsLength = function(t) {
            return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
        }
        ,
        r.prototype.getLength = function() {
            return this.data.length
        }
        ,
        r.prototype.getBitsLength = function() {
            return r.getBitsLength(this.data.length)
        }
        ,
        r.prototype.write = function(t) {
            let e, n;
            for (e = 0; e + 3 <= this.data.length; e += 3)
                n = parseInt(this.data.substr(e, 3), 10),
                t.put(n, 10);
            let i = this.data.length - e;
            i > 0 && (n = parseInt(this.data.substr(e), 10),
            t.put(n, 3 * i + 1))
        }
        ,
        t.exports = r
    },
    57263: function(t, e, n) {
        let i = n(14132);
        e.mul = function(t, e) {
            let n = new Uint8Array(t.length + e.length - 1);
            for (let r = 0; r < t.length; r++)
                for (let s = 0; s < e.length; s++)
                    n[r + s] ^= i.mul(t[r], e[s]);
            return n
        }
        ,
        e.mod = function(t, e) {
            let n = new Uint8Array(t);
            for (; n.length - e.length >= 0; ) {
                let t = n[0];
                for (let r = 0; r < e.length; r++)
                    n[r] ^= i.mul(e[r], t);
                let r = 0;
                for (; r < n.length && 0 === n[r]; )
                    r++;
                n = n.slice(r)
            }
            return n
        }
        ,
        e.generateECPolynomial = function(t) {
            let n = new Uint8Array([1]);
            for (let r = 0; r < t; r++)
                n = e.mul(n, new Uint8Array([1, i.exp(r)]));
            return n
        }
    },
    33326: function(t, e, n) {
        let i = n(79991)
          , r = n(17517)
          , s = n(71998)
          , o = n(25972)
          , a = n(22053)
          , l = n(15078)
          , c = n(83283)
          , u = n(8997)
          , h = n(98038)
          , d = n(62108)
          , g = n(91566)
          , f = n(53705)
          , p = n(33653);
        function y(t, e, n) {
            let i, r;
            let s = t.size
              , o = g.getEncodedBits(e, n);
            for (i = 0; i < 15; i++)
                r = (o >> i & 1) == 1,
                i < 6 ? t.set(i, 8, r, !0) : i < 8 ? t.set(i + 1, 8, r, !0) : t.set(s - 15 + i, 8, r, !0),
                i < 8 ? t.set(8, s - i - 1, r, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, r, !0) : t.set(8, 15 - i - 1, r, !0);
            t.set(s - 8, 8, 1, !0)
        }
        e.create = function(t, e) {
            let n, g;
            if (void 0 === t || "" === t)
                throw Error("No input text");
            let m = r.M;
            return void 0 !== e && (m = r.from(e.errorCorrectionLevel, r.M),
            n = d.from(e.version),
            g = c.from(e.maskPattern),
            e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)),
            function(t, e, n, r) {
                let g;
                if (Array.isArray(t))
                    g = p.fromArray(t);
                else if ("string" == typeof t) {
                    let i = e;
                    if (!i) {
                        let e = p.rawSplit(t);
                        i = d.getBestVersionForData(e, n)
                    }
                    g = p.fromString(t, i || 40)
                } else
                    throw Error("Invalid data");
                let m = d.getBestVersionForData(g, n);
                if (!m)
                    throw Error("The amount of data is too big to be stored in a QR Code");
                if (e) {
                    if (e < m)
                        throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
                } else
                    e = m;
                let w = function(t, e, n) {
                    let r = new s;
                    n.forEach(function(e) {
                        r.put(e.mode.bit, 4),
                        r.put(e.getLength(), f.getCharCountIndicator(e.mode, t)),
                        e.write(r)
                    });
                    let o = (i.getSymbolTotalCodewords(t) - u.getTotalCodewordsCount(t, e)) * 8;
                    for (r.getLengthInBits() + 4 <= o && r.put(0, 4); r.getLengthInBits() % 8 != 0; )
                        r.putBit(0);
                    let a = (o - r.getLengthInBits()) / 8;
                    for (let t = 0; t < a; t++)
                        r.put(t % 2 ? 17 : 236, 8);
                    return function(t, e, n) {
                        let r, s;
                        let o = i.getSymbolTotalCodewords(e)
                          , a = o - u.getTotalCodewordsCount(e, n)
                          , l = u.getBlocksCount(e, n)
                          , c = o % l
                          , d = l - c
                          , g = Math.floor(o / l)
                          , f = Math.floor(a / l)
                          , p = f + 1
                          , y = g - f
                          , m = new h(y)
                          , w = 0
                          , M = Array(l)
                          , N = Array(l)
                          , v = 0
                          , L = new Uint8Array(t.buffer);
                        for (let t = 0; t < l; t++) {
                            let e = t < d ? f : p;
                            M[t] = L.slice(w, w + e),
                            N[t] = m.encode(M[t]),
                            w += e,
                            v = Math.max(v, e)
                        }
                        let I = new Uint8Array(o)
                          , S = 0;
                        for (r = 0; r < v; r++)
                            for (s = 0; s < l; s++)
                                r < M[s].length && (I[S++] = M[s][r]);
                        for (r = 0; r < y; r++)
                            for (s = 0; s < l; s++)
                                I[S++] = N[s][r];
                        return I
                    }(r, t, e)
                }(e, n, g)
                  , M = new o(i.getSymbolSize(e));
                return function(t, e) {
                    let n = t.size
                      , i = l.getPositions(e);
                    for (let e = 0; e < i.length; e++) {
                        let r = i[e][0]
                          , s = i[e][1];
                        for (let e = -1; e <= 7; e++)
                            if (!(r + e <= -1) && !(n <= r + e))
                                for (let i = -1; i <= 7; i++)
                                    s + i <= -1 || n <= s + i || (e >= 0 && e <= 6 && (0 === i || 6 === i) || i >= 0 && i <= 6 && (0 === e || 6 === e) || e >= 2 && e <= 4 && i >= 2 && i <= 4 ? t.set(r + e, s + i, !0, !0) : t.set(r + e, s + i, !1, !0))
                    }
                }(M, e),
                function(t) {
                    let e = t.size;
                    for (let n = 8; n < e - 8; n++) {
                        let e = n % 2 == 0;
                        t.set(n, 6, e, !0),
                        t.set(6, n, e, !0)
                    }
                }(M),
                function(t, e) {
                    let n = a.getPositions(e);
                    for (let e = 0; e < n.length; e++) {
                        let i = n[e][0]
                          , r = n[e][1];
                        for (let e = -2; e <= 2; e++)
                            for (let n = -2; n <= 2; n++)
                                -2 === e || 2 === e || -2 === n || 2 === n || 0 === e && 0 === n ? t.set(i + e, r + n, !0, !0) : t.set(i + e, r + n, !1, !0)
                    }
                }(M, e),
                y(M, n, 0),
                e >= 7 && function(t, e) {
                    let n, i, r;
                    let s = t.size
                      , o = d.getEncodedBits(e);
                    for (let e = 0; e < 18; e++)
                        n = Math.floor(e / 3),
                        i = e % 3 + s - 8 - 3,
                        r = (o >> e & 1) == 1,
                        t.set(n, i, r, !0),
                        t.set(i, n, r, !0)
                }(M, e),
                function(t, e) {
                    let n = t.size
                      , i = -1
                      , r = n - 1
                      , s = 7
                      , o = 0;
                    for (let a = n - 1; a > 0; a -= 2)
                        for (6 === a && a--; ; ) {
                            for (let n = 0; n < 2; n++)
                                if (!t.isReserved(r, a - n)) {
                                    let i = !1;
                                    o < e.length && (i = (e[o] >>> s & 1) == 1),
                                    t.set(r, a - n, i),
                                    -1 == --s && (o++,
                                    s = 7)
                                }
                            if ((r += i) < 0 || n <= r) {
                                r -= i,
                                i = -i;
                                break
                            }
                        }
                }(M, w),
                isNaN(r) && (r = c.getBestMask(M, y.bind(null, M, n))),
                c.applyMask(r, M),
                y(M, n, r),
                {
                    modules: M,
                    version: e,
                    errorCorrectionLevel: n,
                    maskPattern: r,
                    segments: g
                }
            }(t, n, m, g)
        }
    },
    98038: function(t, e, n) {
        let i = n(57263);
        function r(t) {
            this.genPoly = void 0,
            this.degree = t,
            this.degree && this.initialize(this.degree)
        }
        r.prototype.initialize = function(t) {
            this.degree = t,
            this.genPoly = i.generateECPolynomial(this.degree)
        }
        ,
        r.prototype.encode = function(t) {
            if (!this.genPoly)
                throw Error("Encoder not initialized");
            let e = new Uint8Array(t.length + this.degree);
            e.set(t);
            let n = i.mod(e, this.genPoly)
              , r = this.degree - n.length;
            if (r > 0) {
                let t = new Uint8Array(this.degree);
                return t.set(n, r),
                t
            }
            return n
        }
        ,
        t.exports = r
    },
    25672: function(t, e) {
        let n = "[0-9]+"
          , i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+"
          , r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (i = i.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        e.KANJI = RegExp(i, "g"),
        e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"),
        e.BYTE = RegExp(r, "g"),
        e.NUMERIC = RegExp(n, "g"),
        e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
        let s = RegExp("^" + i + "$")
          , o = RegExp("^" + n + "$")
          , a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        e.testKanji = function(t) {
            return s.test(t)
        }
        ,
        e.testNumeric = function(t) {
            return o.test(t)
        }
        ,
        e.testAlphanumeric = function(t) {
            return a.test(t)
        }
    },
    33653: function(t, e, n) {
        let i = n(53705)
          , r = n(29654)
          , s = n(98664)
          , o = n(27838)
          , a = n(38970)
          , l = n(25672)
          , c = n(79991)
          , u = n(52892);
        function h(t) {
            return unescape(encodeURIComponent(t)).length
        }
        function d(t, e, n) {
            let i;
            let r = [];
            for (; null !== (i = t.exec(n)); )
                r.push({
                    data: i[0],
                    index: i.index,
                    mode: e,
                    length: i[0].length
                });
            return r
        }
        function g(t) {
            let e, n;
            let r = d(l.NUMERIC, i.NUMERIC, t)
              , s = d(l.ALPHANUMERIC, i.ALPHANUMERIC, t);
            return c.isKanjiModeEnabled() ? (e = d(l.BYTE, i.BYTE, t),
            n = d(l.KANJI, i.KANJI, t)) : (e = d(l.BYTE_KANJI, i.BYTE, t),
            n = []),
            r.concat(s, e, n).sort(function(t, e) {
                return t.index - e.index
            }).map(function(t) {
                return {
                    data: t.data,
                    mode: t.mode,
                    length: t.length
                }
            })
        }
        function f(t, e) {
            switch (e) {
            case i.NUMERIC:
                return r.getBitsLength(t);
            case i.ALPHANUMERIC:
                return s.getBitsLength(t);
            case i.KANJI:
                return a.getBitsLength(t);
            case i.BYTE:
                return o.getBitsLength(t)
            }
        }
        function p(t, e) {
            let n;
            let l = i.getBestModeForData(t);
            if ((n = i.from(e, l)) !== i.BYTE && n.bit < l.bit)
                throw Error('"' + t + '" cannot be encoded with mode ' + i.toString(n) + ".\n Suggested mode is: " + i.toString(l));
            switch (n !== i.KANJI || c.isKanjiModeEnabled() || (n = i.BYTE),
            n) {
            case i.NUMERIC:
                return new r(t);
            case i.ALPHANUMERIC:
                return new s(t);
            case i.KANJI:
                return new a(t);
            case i.BYTE:
                return new o(t)
            }
        }
        e.fromArray = function(t) {
            return t.reduce(function(t, e) {
                return "string" == typeof e ? t.push(p(e, null)) : e.data && t.push(p(e.data, e.mode)),
                t
            }, [])
        }
        ,
        e.fromString = function(t, n) {
            let r = function(t, e) {
                let n = {}
                  , r = {
                    start: {}
                }
                  , s = ["start"];
                for (let o = 0; o < t.length; o++) {
                    let a = t[o]
                      , l = [];
                    for (let t = 0; t < a.length; t++) {
                        let c = a[t]
                          , u = "" + o + t;
                        l.push(u),
                        n[u] = {
                            node: c,
                            lastCount: 0
                        },
                        r[u] = {};
                        for (let t = 0; t < s.length; t++) {
                            let o = s[t];
                            n[o] && n[o].node.mode === c.mode ? (r[o][u] = f(n[o].lastCount + c.length, c.mode) - f(n[o].lastCount, c.mode),
                            n[o].lastCount += c.length) : (n[o] && (n[o].lastCount = c.length),
                            r[o][u] = f(c.length, c.mode) + 4 + i.getCharCountIndicator(c.mode, e))
                        }
                    }
                    s = l
                }
                for (let t = 0; t < s.length; t++)
                    r[s[t]].end = 0;
                return {
                    map: r,
                    table: n
                }
            }(function(t) {
                let e = [];
                for (let n = 0; n < t.length; n++) {
                    let r = t[n];
                    switch (r.mode) {
                    case i.NUMERIC:
                        e.push([r, {
                            data: r.data,
                            mode: i.ALPHANUMERIC,
                            length: r.length
                        }, {
                            data: r.data,
                            mode: i.BYTE,
                            length: r.length
                        }]);
                        break;
                    case i.ALPHANUMERIC:
                        e.push([r, {
                            data: r.data,
                            mode: i.BYTE,
                            length: r.length
                        }]);
                        break;
                    case i.KANJI:
                        e.push([r, {
                            data: r.data,
                            mode: i.BYTE,
                            length: h(r.data)
                        }]);
                        break;
                    case i.BYTE:
                        e.push([{
                            data: r.data,
                            mode: i.BYTE,
                            length: h(r.data)
                        }])
                    }
                }
                return e
            }(g(t, c.isKanjiModeEnabled())), n)
              , s = u.find_path(r.map, "start", "end")
              , o = [];
            for (let t = 1; t < s.length - 1; t++)
                o.push(r.table[s[t]].node);
            return e.fromArray(o.reduce(function(t, e) {
                let n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return n && n.mode === e.mode ? t[t.length - 1].data += e.data : t.push(e),
                t
            }, []))
        }
        ,
        e.rawSplit = function(t) {
            return e.fromArray(g(t, c.isKanjiModeEnabled()))
        }
    },
    79991: function(t, e) {
        let n;
        let i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        e.getSymbolSize = function(t) {
            if (!t)
                throw Error('"version" cannot be null or undefined');
            if (t < 1 || t > 40)
                throw Error('"version" should be in range from 1 to 40');
            return 4 * t + 17
        }
        ,
        e.getSymbolTotalCodewords = function(t) {
            return i[t]
        }
        ,
        e.getBCHDigit = function(t) {
            let e = 0;
            for (; 0 !== t; )
                e++,
                t >>>= 1;
            return e
        }
        ,
        e.setToSJISFunction = function(t) {
            if ("function" != typeof t)
                throw Error('"toSJISFunc" is not a valid function.');
            n = t
        }
        ,
        e.isKanjiModeEnabled = function() {
            return void 0 !== n
        }
        ,
        e.toSJIS = function(t) {
            return n(t)
        }
    },
    52544: function(t, e) {
        e.isValid = function(t) {
            return !isNaN(t) && t >= 1 && t <= 40
        }
    },
    62108: function(t, e, n) {
        let i = n(79991)
          , r = n(8997)
          , s = n(17517)
          , o = n(53705)
          , a = n(52544)
          , l = i.getBCHDigit(7973);
        function c(t, e) {
            return o.getCharCountIndicator(t, e) + 4
        }
        e.from = function(t, e) {
            return a.isValid(t) ? parseInt(t, 10) : e
        }
        ,
        e.getCapacity = function(t, e, n) {
            if (!a.isValid(t))
                throw Error("Invalid QR Code version");
            void 0 === n && (n = o.BYTE);
            let s = (i.getSymbolTotalCodewords(t) - r.getTotalCodewordsCount(t, e)) * 8;
            if (n === o.MIXED)
                return s;
            let l = s - c(n, t);
            switch (n) {
            case o.NUMERIC:
                return Math.floor(l / 10 * 3);
            case o.ALPHANUMERIC:
                return Math.floor(l / 11 * 2);
            case o.KANJI:
                return Math.floor(l / 13);
            case o.BYTE:
            default:
                return Math.floor(l / 8)
            }
        }
        ,
        e.getBestVersionForData = function(t, n) {
            let i;
            let r = s.from(n, s.M);
            if (Array.isArray(t)) {
                if (t.length > 1)
                    return function(t, n) {
                        for (let i = 1; i <= 40; i++)
                            if (function(t, e) {
                                let n = 0;
                                return t.forEach(function(t) {
                                    let i = c(t.mode, e);
                                    n += i + t.getBitsLength()
                                }),
                                n
                            }(t, i) <= e.getCapacity(i, n, o.MIXED))
                                return i
                    }(t, r);
                if (0 === t.length)
                    return 1;
                i = t[0]
            } else
                i = t;
            return function(t, n, i) {
                for (let r = 1; r <= 40; r++)
                    if (n <= e.getCapacity(r, i, t))
                        return r
            }(i.mode, i.getLength(), r)
        }
        ,
        e.getEncodedBits = function(t) {
            if (!a.isValid(t) || t < 7)
                throw Error("Invalid QR Code version");
            let e = t << 12;
            for (; i.getBCHDigit(e) - l >= 0; )
                e ^= 7973 << i.getBCHDigit(e) - l;
            return t << 12 | e
        }
    },
    1688: function(t, e, n) {
        let i = n(88123);
        e.render = function(t, e, n) {
            var r;
            let s = n
              , o = e;
            void 0 !== s || e && e.getContext || (s = e,
            e = void 0),
            e || (o = function() {
                try {
                    return document.createElement("canvas")
                } catch (t) {
                    throw Error("You need to specify a canvas element")
                }
            }()),
            s = i.getOptions(s);
            let a = i.getImageWidth(t.modules.size, s)
              , l = o.getContext("2d")
              , c = l.createImageData(a, a);
            return i.qrToImageData(c.data, t, s),
            r = o,
            l.clearRect(0, 0, r.width, r.height),
            r.style || (r.style = {}),
            r.height = a,
            r.width = a,
            r.style.height = a + "px",
            r.style.width = a + "px",
            l.putImageData(c, 0, 0),
            o
        }
        ,
        e.renderToDataURL = function(t, n, i) {
            let r = i;
            void 0 !== r || n && n.getContext || (r = n,
            n = void 0),
            r || (r = {});
            let s = e.render(t, n, r)
              , o = r.type || "image/png"
              , a = r.rendererOpts || {};
            return s.toDataURL(o, a.quality)
        }
    },
    4707: function(t, e, n) {
        let i = n(88123);
        function r(t, e) {
            let n = t.a / 255
              , i = e + '="' + t.hex + '"';
            return n < 1 ? i + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : i
        }
        function s(t, e, n) {
            let i = t + e;
            return void 0 !== n && (i += " " + n),
            i
        }
        e.render = function(t, e, n) {
            let o = i.getOptions(e)
              , a = t.modules.size
              , l = t.modules.data
              , c = a + 2 * o.margin
              , u = o.color.light.a ? "<path " + r(o.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : ""
              , h = "<path " + r(o.color.dark, "stroke") + ' d="' + function(t, e, n) {
                let i = ""
                  , r = 0
                  , o = !1
                  , a = 0;
                for (let l = 0; l < t.length; l++) {
                    let c = Math.floor(l % e)
                      , u = Math.floor(l / e);
                    c || o || (o = !0),
                    t[l] ? (a++,
                    l > 0 && c > 0 && t[l - 1] || (i += o ? s("M", c + n, .5 + u + n) : s("m", r, 0),
                    r = 0,
                    o = !1),
                    c + 1 < e && t[l + 1] || (i += s("h", a),
                    a = 0)) : r++
                }
                return i
            }(l, a, o.margin) + '"/>'
              , d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + ('viewBox="0 0 ' + c) + " " + c + '" shape-rendering="crispEdges">' + u + h + "</svg>\n";
            return "function" == typeof n && n(null, d),
            d
        }
    },
    88123: function(t, e) {
        function n(t) {
            if ("number" == typeof t && (t = t.toString()),
            "string" != typeof t)
                throw Error("Color should be defined as hex string");
            let e = t.slice().replace("#", "").split("");
            if (e.length < 3 || 5 === e.length || e.length > 8)
                throw Error("Invalid hex color: " + t);
            (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function(t) {
                return [t, t]
            }))),
            6 === e.length && e.push("F", "F");
            let n = parseInt(e.join(""), 16);
            return {
                r: n >> 24 & 255,
                g: n >> 16 & 255,
                b: n >> 8 & 255,
                a: 255 & n,
                hex: "#" + e.slice(0, 6).join("")
            }
        }
        e.getOptions = function(t) {
            t || (t = {}),
            t.color || (t.color = {});
            let e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin
              , i = t.width && t.width >= 21 ? t.width : void 0
              , r = t.scale || 4;
            return {
                width: i,
                scale: i ? 4 : r,
                margin: e,
                color: {
                    dark: n(t.color.dark || "#000000ff"),
                    light: n(t.color.light || "#ffffffff")
                },
                type: t.type,
                rendererOpts: t.rendererOpts || {}
            }
        }
        ,
        e.getScale = function(t, e) {
            return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
        }
        ,
        e.getImageWidth = function(t, n) {
            let i = e.getScale(t, n);
            return Math.floor((t + 2 * n.margin) * i)
        }
        ,
        e.qrToImageData = function(t, n, i) {
            let r = n.modules.size
              , s = n.modules.data
              , o = e.getScale(r, i)
              , a = Math.floor((r + 2 * i.margin) * o)
              , l = i.margin * o
              , c = [i.color.light, i.color.dark];
            for (let e = 0; e < a; e++)
                for (let n = 0; n < a; n++) {
                    let u = (e * a + n) * 4
                      , h = i.color.light;
                    e >= l && n >= l && e < a - l && n < a - l && (h = c[s[Math.floor((e - l) / o) * r + Math.floor((n - l) / o)] ? 1 : 0]),
                    t[u++] = h.r,
                    t[u++] = h.g,
                    t[u++] = h.b,
                    t[u] = h.a
                }
        }
    },
    55638: function(t) {
        "use strict";
        var e = Object.prototype.hasOwnProperty
          , n = "~";
        function i() {}
        function r(t, e, n) {
            this.fn = t,
            this.context = e,
            this.once = n || !1
        }
        function s(t, e, i, s, o) {
            if ("function" != typeof i)
                throw TypeError("The listener must be a function");
            var a = new r(i,s || t,o)
              , l = n ? n + e : e;
            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], a] : t._events[l].push(a) : (t._events[l] = a,
            t._eventsCount++),
            t
        }
        function o(t, e) {
            0 == --t._eventsCount ? t._events = new i : delete t._events[e]
        }
        function a() {
            this._events = new i,
            this._eventsCount = 0
        }
        Object.create && (i.prototype = Object.create(null),
        new i().__proto__ || (n = !1)),
        a.prototype.eventNames = function() {
            var t, i, r = [];
            if (0 === this._eventsCount)
                return r;
            for (i in t = this._events)
                e.call(t, i) && r.push(n ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }
        ,
        a.prototype.listeners = function(t) {
            var e = n ? n + t : t
              , i = this._events[e];
            if (!i)
                return [];
            if (i.fn)
                return [i.fn];
            for (var r = 0, s = i.length, o = Array(s); r < s; r++)
                o[r] = i[r].fn;
            return o
        }
        ,
        a.prototype.listenerCount = function(t) {
            var e = n ? n + t : t
              , i = this._events[e];
            return i ? i.fn ? 1 : i.length : 0
        }
        ,
        a.prototype.emit = function(t, e, i, r, s, o) {
            var a = n ? n + t : t;
            if (!this._events[a])
                return !1;
            var l, c, u = this._events[a], h = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(t, u.fn, void 0, !0),
                h) {
                case 1:
                    return u.fn.call(u.context),
                    !0;
                case 2:
                    return u.fn.call(u.context, e),
                    !0;
                case 3:
                    return u.fn.call(u.context, e, i),
                    !0;
                case 4:
                    return u.fn.call(u.context, e, i, r),
                    !0;
                case 5:
                    return u.fn.call(u.context, e, i, r, s),
                    !0;
                case 6:
                    return u.fn.call(u.context, e, i, r, s, o),
                    !0
                }
                for (c = 1,
                l = Array(h - 1); c < h; c++)
                    l[c - 1] = arguments[c];
                u.fn.apply(u.context, l)
            } else {
                var d, g = u.length;
                for (c = 0; c < g; c++)
                    switch (u[c].once && this.removeListener(t, u[c].fn, void 0, !0),
                    h) {
                    case 1:
                        u[c].fn.call(u[c].context);
                        break;
                    case 2:
                        u[c].fn.call(u[c].context, e);
                        break;
                    case 3:
                        u[c].fn.call(u[c].context, e, i);
                        break;
                    case 4:
                        u[c].fn.call(u[c].context, e, i, r);
                        break;
                    default:
                        if (!l)
                            for (d = 1,
                            l = Array(h - 1); d < h; d++)
                                l[d - 1] = arguments[d];
                        u[c].fn.apply(u[c].context, l)
                    }
            }
            return !0
        }
        ,
        a.prototype.on = function(t, e, n) {
            return s(this, t, e, n, !1)
        }
        ,
        a.prototype.once = function(t, e, n) {
            return s(this, t, e, n, !0)
        }
        ,
        a.prototype.removeListener = function(t, e, i, r) {
            var s = n ? n + t : t;
            if (!this._events[s])
                return this;
            if (!e)
                return o(this, s),
                this;
            var a = this._events[s];
            if (a.fn)
                a.fn !== e || r && !a.once || i && a.context !== i || o(this, s);
            else {
                for (var l = 0, c = [], u = a.length; l < u; l++)
                    (a[l].fn !== e || r && !a[l].once || i && a[l].context !== i) && c.push(a[l]);
                c.length ? this._events[s] = 1 === c.length ? c[0] : c : o(this, s)
            }
            return this
        }
        ,
        a.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = n ? n + t : t,
            this._events[e] && o(this, e)) : (this._events = new i,
            this._eventsCount = 0),
            this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.addListener = a.prototype.on,
        a.prefixed = n,
        a.EventEmitter = a,
        t.exports = a
    },
    58064: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "$", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let i = n(74590);
        function r(t) {
            let {createServerReference: e} = n(6671);
            return e(t, i.callServer)
        }
    },
    35438: function() {},
    50277: function(t, e, n) {
        "use strict";
        n.d(e, {
            H: function() {
                return c
            },
            i1: function() {
                return r
            },
            mI: function() {
                return a
            },
            su: function() {
                return l
            }
        });
        var i, r, s = n(55638), o = n(59860);
        (i = r || (r = {})).Installed = "Installed",
        i.NotDetected = "NotDetected",
        i.Loadable = "Loadable",
        i.Unsupported = "Unsupported";
        class a extends s {
            get connected() {
                return !!this.publicKey
            }
            async autoConnect() {
                await this.connect()
            }
            async prepareTransaction(t, e, n={}) {
                let i = this.publicKey;
                if (!i)
                    throw new o.oS;
                return t.feePayer = t.feePayer || i,
                t.recentBlockhash = t.recentBlockhash || (await e.getLatestBlockhash({
                    commitment: n.preflightCommitment,
                    minContextSlot: n.minContextSlot
                })).blockhash,
                t
            }
        }
        function l(t) {
            if ("undefined" == typeof window || "undefined" == typeof document)
                return;
            let e = [];
            function n() {
                if (t())
                    for (let t of e)
                        t()
            }
            let i = setInterval(n, 1e3);
            e.push( () => clearInterval(i)),
            "loading" === document.readyState && (document.addEventListener("DOMContentLoaded", n, {
                once: !0
            }),
            e.push( () => document.removeEventListener("DOMContentLoaded", n))),
            "complete" !== document.readyState && (window.addEventListener("load", n, {
                once: !0
            }),
            e.push( () => window.removeEventListener("load", n))),
            n()
        }
        function c() {
            if (!navigator)
                return !1;
            let t = navigator.userAgent.toLowerCase()
              , e = t.includes("iphone") || t.includes("ipad")
              , n = t.includes("safari");
            return e && n
        }
    },
    59860: function(t, e, n) {
        "use strict";
        n.d(e, {
            $w: function() {
                return a
            },
            IW: function() {
                return g
            },
            Nx: function() {
                return h
            },
            OZ: function() {
                return r
            },
            PY: function() {
                return f
            },
            UG: function() {
                return c
            },
            W8: function() {
                return s
            },
            at: function() {
                return l
            },
            bD: function() {
                return y
            },
            cO: function() {
                return u
            },
            fk: function() {
                return p
            },
            lj: function() {
                return i
            },
            oS: function() {
                return d
            },
            p6: function() {
                return o
            }
        });
        class i extends Error {
            constructor(t, e) {
                super(t),
                this.error = e
            }
        }
        class r extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletNotReadyError"
            }
        }
        class s extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletLoadError"
            }
        }
        class o extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletConfigError"
            }
        }
        class a extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletConnectionError"
            }
        }
        class l extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletDisconnectedError"
            }
        }
        class c extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletDisconnectionError"
            }
        }
        class u extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletAccountError"
            }
        }
        class h extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletPublicKeyError"
            }
        }
        class d extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletNotConnectedError"
            }
        }
        class g extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletSendTransactionError"
            }
        }
        class f extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletSignTransactionError"
            }
        }
        class p extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletSignMessageError"
            }
        }
        class y extends i {
            constructor() {
                super(...arguments),
                this.name = "WalletSignInError"
            }
        }
    },
    74750: function(t, e, n) {
        "use strict";
        n.d(e, {
            eC: function() {
                return a
            },
            qz: function() {
                return l
            }
        });
        var i = n(50277)
          , r = n(59860)
          , s = n(19931);
        class o extends i.mI {
            async sendTransaction(t, e, n={}) {
                let i = !0;
                try {
                    if ((0,
                    s.W)(t)) {
                        if (!this.supportedTransactionVersions)
                            throw new r.IW("Sending versioned transactions isn't supported by this wallet");
                        if (!this.supportedTransactionVersions.has(t.version))
                            throw new r.IW(`Sending transaction version ${t.version} isn't supported by this wallet`);
                        try {
                            let i = (t = await this.signTransaction(t)).serialize();
                            return await e.sendRawTransaction(i, n)
                        } catch (t) {
                            if (t instanceof r.PY)
                                throw i = !1,
                                t;
                            throw new r.IW(t?.message,t)
                        }
                    } else
                        try {
                            let {signers: i, ...r} = n;
                            t = await this.prepareTransaction(t, e, r),
                            i?.length && t.partialSign(...i);
                            let s = (t = await this.signTransaction(t)).serialize();
                            return await e.sendRawTransaction(s, r)
                        } catch (t) {
                            if (t instanceof r.PY)
                                throw i = !1,
                                t;
                            throw new r.IW(t?.message,t)
                        }
                } catch (t) {
                    throw i && this.emit("error", t),
                    t
                }
            }
            async signAllTransactions(t) {
                for (let e of t)
                    if ((0,
                    s.W)(e)) {
                        if (!this.supportedTransactionVersions)
                            throw new r.PY("Signing versioned transactions isn't supported by this wallet");
                        if (!this.supportedTransactionVersions.has(e.version))
                            throw new r.PY(`Signing transaction version ${e.version} isn't supported by this wallet`)
                    }
                let e = [];
                for (let n of t)
                    e.push(await this.signTransaction(n));
                return e
            }
        }
        class a extends o {
        }
        class l extends a {
        }
    },
    19931: function(t, e, n) {
        "use strict";
        function i(t) {
            return "version"in t
        }
        n.d(e, {
            W: function() {
                return i
            }
        })
    },
    65442: function(t, e, n) {
        "use strict";
        var i, r;
        n.d(e, {
            Q: function() {
                return i
            }
        }),
        (r = i || (i = {})).Mainnet = "mainnet-beta",
        r.Testnet = "testnet",
        r.Devnet = "devnet"
    },
    45538: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return l
            }
        });
        var i = n(74750)
          , r = n(50277)
          , s = n(59860)
          , o = n(19931)
          , a = n(45429);
        class l extends i.eC {
            constructor(t={}) {
                super(),
                this.name = "Phantom",
                this.url = "https://phantom.app",
                this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==",
                this.supportedTransactionVersions = new Set(["legacy", 0]),
                this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.NotDetected,
                this._disconnected = () => {
                    let t = this._wallet;
                    t && (t.off("disconnect", this._disconnected),
                    t.off("accountChanged", this._accountChanged),
                    this._wallet = null,
                    this._publicKey = null,
                    this.emit("error", new s.at),
                    this.emit("disconnect"))
                }
                ,
                this._accountChanged = t => {
                    let e = this._publicKey;
                    if (e) {
                        try {
                            t = new a.PublicKey(t.toBytes())
                        } catch (t) {
                            this.emit("error", new s.Nx(t?.message,t));
                            return
                        }
                        e.equals(t) || (this._publicKey = t,
                        this.emit("connect", t))
                    }
                }
                ,
                this._connecting = !1,
                this._wallet = null,
                this._publicKey = null,
                this._readyState !== r.i1.Unsupported && ((0,
                r.H)() ? (this._readyState = r.i1.Loadable,
                this.emit("readyStateChange", this._readyState)) : (0,
                r.su)( () => !!(window.phantom?.solana?.isPhantom || window.solana?.isPhantom) && (this._readyState = r.i1.Installed,
                this.emit("readyStateChange", this._readyState),
                !0)))
            }
            get publicKey() {
                return this._publicKey
            }
            get connecting() {
                return this._connecting
            }
            get readyState() {
                return this._readyState
            }
            async autoConnect() {
                this.readyState === r.i1.Installed && await this.connect()
            }
            async connect() {
                try {
                    let t;
                    if (this.connected || this.connecting)
                        return;
                    if (this.readyState === r.i1.Loadable) {
                        let t = encodeURIComponent(window.location.href)
                          , e = encodeURIComponent(window.location.origin);
                        window.location.href = `https://phantom.app/ul/browse/${t}?ref=${e}`;
                        return
                    }
                    if (this.readyState !== r.i1.Installed)
                        throw new s.OZ;
                    this._connecting = !0;
                    let e = window.phantom?.solana || window.solana;
                    if (!e.isConnected)
                        try {
                            await e.connect()
                        } catch (t) {
                            throw new s.$w(t?.message,t)
                        }
                    if (!e.publicKey)
                        throw new s.cO;
                    try {
                        t = new a.PublicKey(e.publicKey.toBytes())
                    } catch (t) {
                        throw new s.Nx(t?.message,t)
                    }
                    e.on("disconnect", this._disconnected),
                    e.on("accountChanged", this._accountChanged),
                    this._wallet = e,
                    this._publicKey = t,
                    this.emit("connect", t)
                } catch (t) {
                    throw this.emit("error", t),
                    t
                } finally {
                    this._connecting = !1
                }
            }
            async disconnect() {
                let t = this._wallet;
                if (t) {
                    t.off("disconnect", this._disconnected),
                    t.off("accountChanged", this._accountChanged),
                    this._wallet = null,
                    this._publicKey = null;
                    try {
                        await t.disconnect()
                    } catch (t) {
                        this.emit("error", new s.UG(t?.message,t))
                    }
                }
                this.emit("disconnect")
            }
            async sendTransaction(t, e, n={}) {
                try {
                    let i = this._wallet;
                    if (!i)
                        throw new s.oS;
                    try {
                        let {signers: r, ...s} = n;
                        (0,
                        o.W)(t) ? r?.length && t.sign(r) : (t = await this.prepareTransaction(t, e, s),
                        r?.length && t.partialSign(...r)),
                        s.preflightCommitment = s.preflightCommitment || e.commitment;
                        let {signature: a} = await i.signAndSendTransaction(t, s);
                        return a
                    } catch (t) {
                        if (t instanceof s.lj)
                            throw t;
                        throw new s.IW(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signTransaction(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new s.oS;
                    try {
                        return await e.signTransaction(t) || t
                    } catch (t) {
                        throw new s.PY(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signAllTransactions(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new s.oS;
                    try {
                        return await e.signAllTransactions(t) || t
                    } catch (t) {
                        throw new s.PY(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signMessage(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new s.oS;
                    try {
                        let {signature: n} = await e.signMessage(t);
                        return n
                    } catch (t) {
                        throw new s.fk(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
        }
    },
    81303: function(t, e, n) {
        "use strict";
        n.d(e, {
            s: function() {
                return f
            }
        });
        var i = n(2265)
          , r = n(98058)
          , s = n(50277)
          , o = n(28782)
          , a = n(54887);
        let l = ({id: t, children: e, expanded: n=!1}) => {
            let r = (0,
            i.useRef)(null)
              , s = (0,
            i.useRef)(!0)
              , o = () => {
                let t = r.current;
                t && requestAnimationFrame( () => {
                    t.style.height = t.scrollHeight + "px"
                }
                )
            }
              , a = () => {
                let t = r.current;
                t && requestAnimationFrame( () => {
                    t.style.height = t.offsetHeight + "px",
                    t.style.overflow = "hidden",
                    requestAnimationFrame( () => {
                        t.style.height = "0"
                    }
                    )
                }
                )
            }
            ;
            return (0,
            i.useLayoutEffect)( () => {
                n ? o() : a()
            }
            , [n]),
            (0,
            i.useLayoutEffect)( () => {
                let t = r.current;
                if (t)
                    return s.current && (e(),
                    s.current = !1),
                    t.addEventListener("transitionend", i),
                    () => t.removeEventListener("transitionend", i);
                function e() {
                    t && (t.style.overflow = n ? "initial" : "hidden",
                    n && (t.style.height = "auto"))
                }
                function i(n) {
                    t && n.target === t && "height" === n.propertyName && e()
                }
            }
            , [n]),
            i.createElement("div", {
                className: "wallet-adapter-collapse",
                id: t,
                ref: r,
                role: "region",
                style: {
                    height: 0,
                    transition: s.current ? void 0 : "height 250ms ease-out"
                }
            }, e)
        }
        ;
        var c = n(82426)
          , u = n(7549);
        let h = ({handleClick: t, tabIndex: e, wallet: n}) => i.createElement("li", null, i.createElement(c.z, {
            onClick: t,
            startIcon: i.createElement(u.o, {
                wallet: n
            }),
            tabIndex: e
        }, n.adapter.name, n.readyState === s.i1.Installed && i.createElement("span", null, "Detected")))
          , d = () => i.createElement("svg", {
            width: "97",
            height: "96",
            viewBox: "0 0 97 96",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, i.createElement("circle", {
            cx: "48.5",
            cy: "48",
            r: "48",
            fill: "url(#paint0_linear_880_5115)",
            fillOpacity: "0.1"
        }), i.createElement("circle", {
            cx: "48.5",
            cy: "48",
            r: "47",
            stroke: "url(#paint1_linear_880_5115)",
            strokeOpacity: "0.4",
            strokeWidth: "2"
        }), i.createElement("g", {
            clipPath: "url(#clip0_880_5115)"
        }, i.createElement("path", {
            d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
            fill: "url(#paint2_linear_880_5115)"
        }), i.createElement("path", {
            d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
            fill: "url(#paint3_linear_880_5115)"
        })), i.createElement("defs", null, i.createElement("linearGradient", {
            id: "paint0_linear_880_5115",
            x1: "3.41664",
            y1: "98.0933",
            x2: "103.05",
            y2: "8.42498",
            gradientUnits: "userSpaceOnUse"
        }, i.createElement("stop", {
            stopColor: "#9945FF"
        }), i.createElement("stop", {
            offset: "0.14",
            stopColor: "#8A53F4"
        }), i.createElement("stop", {
            offset: "0.42",
            stopColor: "#6377D6"
        }), i.createElement("stop", {
            offset: "0.79",
            stopColor: "#24B0A7"
        }), i.createElement("stop", {
            offset: "0.99",
            stopColor: "#00D18C"
        }), i.createElement("stop", {
            offset: "1",
            stopColor: "#00D18C"
        })), i.createElement("linearGradient", {
            id: "paint1_linear_880_5115",
            x1: "3.41664",
            y1: "98.0933",
            x2: "103.05",
            y2: "8.42498",
            gradientUnits: "userSpaceOnUse"
        }, i.createElement("stop", {
            stopColor: "#9945FF"
        }), i.createElement("stop", {
            offset: "0.14",
            stopColor: "#8A53F4"
        }), i.createElement("stop", {
            offset: "0.42",
            stopColor: "#6377D6"
        }), i.createElement("stop", {
            offset: "0.79",
            stopColor: "#24B0A7"
        }), i.createElement("stop", {
            offset: "0.99",
            stopColor: "#00D18C"
        }), i.createElement("stop", {
            offset: "1",
            stopColor: "#00D18C"
        })), i.createElement("linearGradient", {
            id: "paint2_linear_880_5115",
            x1: "25.9583",
            y1: "68.7101",
            x2: "67.2337",
            y2: "23.7879",
            gradientUnits: "userSpaceOnUse"
        }, i.createElement("stop", {
            stopColor: "#9945FF"
        }), i.createElement("stop", {
            offset: "0.14",
            stopColor: "#8A53F4"
        }), i.createElement("stop", {
            offset: "0.42",
            stopColor: "#6377D6"
        }), i.createElement("stop", {
            offset: "0.79",
            stopColor: "#24B0A7"
        }), i.createElement("stop", {
            offset: "0.99",
            stopColor: "#00D18C"
        }), i.createElement("stop", {
            offset: "1",
            stopColor: "#00D18C"
        })), i.createElement("linearGradient", {
            id: "paint3_linear_880_5115",
            x1: "58.3326",
            y1: "49.4467",
            x2: "61.0002",
            y2: "45.4453",
            gradientUnits: "userSpaceOnUse"
        }, i.createElement("stop", {
            stopColor: "#9945FF"
        }), i.createElement("stop", {
            offset: "0.14",
            stopColor: "#8A53F4"
        }), i.createElement("stop", {
            offset: "0.42",
            stopColor: "#6377D6"
        }), i.createElement("stop", {
            offset: "0.79",
            stopColor: "#24B0A7"
        }), i.createElement("stop", {
            offset: "0.99",
            stopColor: "#00D18C"
        }), i.createElement("stop", {
            offset: "1",
            stopColor: "#00D18C"
        })), i.createElement("clipPath", {
            id: "clip0_880_5115"
        }, i.createElement("rect", {
            width: "48",
            height: "48",
            fill: "white",
            transform: "translate(24.5 24)"
        }))))
          , g = ({className: t="", container: e="body"}) => {
            let n = (0,
            i.useRef)(null)
              , {wallets: c, select: u} = (0,
            o.O)()
              , {setVisible: g} = (0,
            r.h)()
              , [f,p] = (0,
            i.useState)(!1)
              , [y,m] = (0,
            i.useState)(!1)
              , [w,M] = (0,
            i.useState)(null)
              , [N,v] = (0,
            i.useMemo)( () => {
                let t = []
                  , e = [];
                for (let n of c)
                    n.readyState === s.i1.Installed ? t.push(n) : e.push(n);
                return t.length ? [t, e] : [e, []]
            }
            , [c])
              , L = (0,
            i.useCallback)( () => {
                m(!1),
                setTimeout( () => g(!1), 150)
            }
            , [g])
              , I = (0,
            i.useCallback)(t => {
                t.preventDefault(),
                L()
            }
            , [L])
              , S = (0,
            i.useCallback)( (t, e) => {
                u(e),
                I(t)
            }
            , [u, I])
              , j = (0,
            i.useCallback)( () => p(!f), [f])
              , b = (0,
            i.useCallback)(t => {
                let e = n.current;
                if (!e)
                    return;
                let i = e.querySelectorAll("button")
                  , r = i[0]
                  , s = i[i.length - 1];
                t.shiftKey ? document.activeElement === r && (s.focus(),
                t.preventDefault()) : document.activeElement === s && (r.focus(),
                t.preventDefault())
            }
            , [n]);
            return (0,
            i.useLayoutEffect)( () => {
                let t = t => {
                    "Escape" === t.key ? L() : "Tab" === t.key && b(t)
                }
                  , {overflow: e} = window.getComputedStyle(document.body);
                return setTimeout( () => m(!0), 0),
                document.body.style.overflow = "hidden",
                window.addEventListener("keydown", t, !1),
                () => {
                    document.body.style.overflow = e,
                    window.removeEventListener("keydown", t, !1)
                }
            }
            , [L, b]),
            (0,
            i.useLayoutEffect)( () => M(document.querySelector(e)), [e]),
            w && (0,
            a.createPortal)(i.createElement("div", {
                "aria-labelledby": "wallet-adapter-modal-title",
                "aria-modal": "true",
                className: `wallet-adapter-modal ${y && "wallet-adapter-modal-fade-in"} ${t}`,
                ref: n,
                role: "dialog"
            }, i.createElement("div", {
                className: "wallet-adapter-modal-container"
            }, i.createElement("div", {
                className: "wallet-adapter-modal-wrapper"
            }, i.createElement("button", {
                onClick: I,
                className: "wallet-adapter-modal-button-close"
            }, i.createElement("svg", {
                width: "14",
                height: "14"
            }, i.createElement("path", {
                d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
            }))), N.length ? i.createElement(i.Fragment, null, i.createElement("h1", {
                className: "wallet-adapter-modal-title"
            }, "Connect a wallet on Solana to continue"), i.createElement("ul", {
                className: "wallet-adapter-modal-list"
            }, N.map(t => i.createElement(h, {
                key: t.adapter.name,
                handleClick: e => S(e, t.adapter.name),
                wallet: t
            })), v.length ? i.createElement(l, {
                expanded: f,
                id: "wallet-adapter-modal-collapse"
            }, v.map(t => i.createElement(h, {
                key: t.adapter.name,
                handleClick: e => S(e, t.adapter.name),
                tabIndex: f ? 0 : -1,
                wallet: t
            }))) : null), v.length ? i.createElement("button", {
                className: "wallet-adapter-modal-list-more",
                onClick: j,
                tabIndex: 0
            }, i.createElement("span", null, f ? "Less " : "More ", "options"), i.createElement("svg", {
                width: "13",
                height: "7",
                viewBox: "0 0 13 7",
                xmlns: "http://www.w3.org/2000/svg",
                className: `${f ? "wallet-adapter-modal-list-more-icon-rotate" : ""}`
            }, i.createElement("path", {
                d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
            }))) : null) : i.createElement(i.Fragment, null, i.createElement("h1", {
                className: "wallet-adapter-modal-title"
            }, "You'll need a wallet on Solana to continue"), i.createElement("div", {
                className: "wallet-adapter-modal-middle"
            }, i.createElement(d, null)), v.length ? i.createElement(i.Fragment, null, i.createElement("button", {
                className: "wallet-adapter-modal-list-more",
                onClick: j,
                tabIndex: 0
            }, i.createElement("span", null, f ? "Hide " : "Already have a wallet? View ", "options"), i.createElement("svg", {
                width: "13",
                height: "7",
                viewBox: "0 0 13 7",
                xmlns: "http://www.w3.org/2000/svg",
                className: `${f ? "wallet-adapter-modal-list-more-icon-rotate" : ""}`
            }, i.createElement("path", {
                d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
            }))), i.createElement(l, {
                expanded: f,
                id: "wallet-adapter-modal-collapse"
            }, i.createElement("ul", {
                className: "wallet-adapter-modal-list"
            }, v.map(t => i.createElement(h, {
                key: t.adapter.name,
                handleClick: e => S(e, t.adapter.name),
                tabIndex: f ? 0 : -1,
                wallet: t
            }))))) : null))), i.createElement("div", {
                className: "wallet-adapter-modal-overlay",
                onMouseDown: I
            })), w)
        }
          , f = ({children: t, ...e}) => {
            let[n,s] = (0,
            i.useState)(!1);
            return i.createElement(r.g.Provider, {
                value: {
                    visible: n,
                    setVisible: s
                }
            }, t, n && i.createElement(g, {
                ...e
            }))
        }
    },
    91910: function(t, e, n) {
        "use strict";
        n.d(e, {
            U: function() {
                return o
            }
        });
        var i = n(45429)
          , r = n(2265)
          , s = n(61811);
        let o = ({children: t, endpoint: e, config: n={
            commitment: "confirmed"
        }}) => {
            let o = (0,
            r.useMemo)( () => new i.Connection(e,n), [e, n]);
            return r.createElement(s.h.Provider, {
                value: {
                    connection: o
                }
            }, t)
        }
    },
    22393: function(t, e, n) {
        "use strict";
        let i, r, s, o;
        n.d(e, {
            n: function() {
                return tZ
            }
        });
        var a, l, c, u, h, d, g, f, p, y, m, w, M, N, v, L, I, S, j, b, E, T = n(74750), x = n(50277), A = n(59860), D = n(19931), O = n(45429);
        let C = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
        RegExp(`^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${C}\\n*$`);
        let z = {
            ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
            ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
            ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
            ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
            ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
            ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
            ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION"
        };
        class k extends Error {
            constructor(...t) {
                let[e,n,i] = t;
                super(n),
                this.code = e,
                this.data = i,
                this.name = "SolanaMobileWalletAdapterError"
            }
        }
        class R extends Error {
            constructor(...t) {
                let[e,n,i,r] = t;
                super(i),
                this.code = n,
                this.data = r,
                this.jsonRpcMessageId = e,
                this.name = "SolanaMobileWalletAdapterProtocolError"
            }
        }
        function _(t, e, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(t) {
                    try {
                        l(i.next(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function a(t) {
                    try {
                        l(i.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function l(t) {
                    var e;
                    t.done ? r(t.value) : ((e = t.value)instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(o, a)
                }
                l((i = i.apply(t, e || [])).next())
            }
            )
        }
        function P(t, e) {
            return _(this, void 0, void 0, function*() {
                let n = yield crypto.subtle.exportKey("raw", t)
                  , i = yield crypto.subtle.sign({
                    hash: "SHA-256",
                    name: "ECDSA"
                }, e, n)
                  , r = new Uint8Array(n.byteLength + i.byteLength);
                return r.set(new Uint8Array(n), 0),
                r.set(new Uint8Array(i), n.byteLength),
                r
            })
        }
        let U = "solana:cloneAuthorization";
        function Y(t, e) {
            return _(this, void 0, void 0, function*() {
                let n = t.slice(0, 4)
                  , r = t.slice(4, 16)
                  , s = t.slice(16)
                  , o = yield crypto.subtle.decrypt(B(n, r), e, s);
                return (void 0 === i && (i = new TextDecoder("utf-8")),
                i).decode(o)
            })
        }
        function B(t, e) {
            return {
                additionalData: t,
                iv: e,
                name: "AES-GCM",
                tagLength: 128
            }
        }
        function W() {
            return _(this, void 0, void 0, function*() {
                return yield crypto.subtle.generateKey({
                    name: "ECDH",
                    namedCurve: "P-256"
                }, !1, ["deriveKey", "deriveBits"])
            })
        }
        function Q(t) {
            if (t < 49152 || t > 65535)
                throw new k(z.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,`Association port number must be between 49152 and 65535. ${t} given.`,{
                    port: t
                });
            return t
        }
        function $(t) {
            return t.replace(/(^\/+|\/+$)/g, "").split("/")
        }
        let Z = {
            Firefox: 0,
            Other: 1
        }
          , F = null
          , H = [150, 150, 200, 500, 500, 750, 750, 1e3];
        function K(t) {
            return new DataView(t).getUint32(0, !1)
        }
        var V = n(33716);
        function G(t, e) {
            var n = {};
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
                    0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
            return n
        }
        function J(t, e, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(t) {
                    try {
                        l(i.next(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function a(t) {
                    try {
                        l(i.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function l(t) {
                    var e;
                    t.done ? r(t.value) : ((e = t.value)instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(o, a)
                }
                l((i = i.apply(t, e || [])).next())
            }
            )
        }
        function q(t) {
            return window.btoa(String.fromCharCode.call(null, ...t))
        }
        function X(t) {
            return new Uint8Array(window.atob(t).split("").map(t => t.charCodeAt(0)))
        }
        function tt(t) {
            return q("version"in t ? t.serialize() : t.serialize({
                requireAllSignatures: !1,
                verifySignatures: !1
            }))
        }
        function te(t) {
            let e = t[0] * O.SIGNATURE_LENGTH_IN_BYTES + 1;
            return "legacy" === O.VersionedMessage.deserializeMessageVersion(t.slice(e, t.length)) ? O.Transaction.from(t) : O.VersionedTransaction.deserialize(t)
        }
        n(40734);
        let tn = "function" == typeof n(9109).Buffer;
        "function" == typeof TextDecoder && new TextDecoder,
        "function" == typeof TextEncoder && new TextEncoder;
        let ti = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
          , tr = (s = {},
        ti.forEach( (t, e) => s[t] = e),
        s)
          , ts = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
          , to = String.fromCharCode.bind(String);
        function ta(t, e, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(t) {
                    try {
                        l(i.next(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function a(t) {
                    try {
                        l(i.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function l(t) {
                    var e;
                    t.done ? r(t.value) : ((e = t.value)instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(o, a)
                }
                l((i = i.apply(t, e || [])).next())
            }
            )
        }
        function tl(t) {
            return new Uint8Array(window.atob(t).split("").map(t => t.charCodeAt(0)))
        }
        "function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array),
        "function" == typeof btoa || tn || (t => {
            let e, n, i, r, s = "", o = t.length % 3;
            for (let o = 0; o < t.length; ) {
                if ((n = t.charCodeAt(o++)) > 255 || (i = t.charCodeAt(o++)) > 255 || (r = t.charCodeAt(o++)) > 255)
                    throw TypeError("invalid character found");
                s += ti[(e = n << 16 | i << 8 | r) >> 18 & 63] + ti[e >> 12 & 63] + ti[e >> 6 & 63] + ti[63 & e]
            }
            return o ? s.slice(0, o - 3) + "===".substring(o) : s
        }
        ),
        "function" == typeof atob || tn || (t => {
            if (t = t.replace(/\s+/g, ""),
            !ts.test(t))
                throw TypeError("malformed base64.");
            t += "==".slice(2 - (3 & t.length));
            let e, n = "", i, r;
            for (let s = 0; s < t.length; )
                e = tr[t.charAt(s++)] << 18 | tr[t.charAt(s++)] << 12 | (i = tr[t.charAt(s++)]) << 6 | (r = tr[t.charAt(s++)]),
                n += 64 === i ? to(e >> 16 & 255) : 64 === r ? to(e >> 16 & 255, e >> 8 & 255) : to(e >> 16 & 255, e >> 8 & 255, 255 & e);
            return n
        }
        );
        let tc = "Mobile Wallet Adapter";
        function tu(t) {
            return "version"in t
        }
        class th extends T.qz {
            constructor(t) {
                var e;
                super(),
                this.supportedTransactionVersions = new Set(["legacy", 0]),
                this.name = tc,
                this.url = "https://solanamobile.com/wallets",
                this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==",
                this._connecting = !1,
                this._connectionGeneration = 0,
                this._readyState = "undefined" != typeof window && window.isSecureContext && "undefined" != typeof document && /android/i.test(navigator.userAgent) ? x.i1.Loadable : x.i1.Unsupported,
                this._authorizationResultCache = t.authorizationResultCache,
                this._addressSelector = t.addressSelector,
                this._appIdentity = t.appIdentity,
                this._chain = null !== (e = t.chain) && void 0 !== e ? e : function(t) {
                    switch (t) {
                    case "mainnet-beta":
                        return "solana:mainnet";
                    case "testnet":
                        return "solana:testnet";
                    case "devnet":
                        return "solana:devnet"
                    }
                }(t.cluster),
                this._hostAuthority = t.remoteHostAuthority,
                this._onWalletNotFound = t.onWalletNotFound,
                this._readyState !== x.i1.Unsupported && this._authorizationResultCache.get().then(t => {
                    t && this.declareWalletAsInstalled()
                }
                )
            }
            get publicKey() {
                if (null == this._publicKey && null != this._selectedAddress)
                    try {
                        this._publicKey = function(t) {
                            let e = tl(t);
                            return new O.PublicKey(e)
                        }(this._selectedAddress)
                    } catch (t) {
                        throw new A.Nx(t instanceof Error && (null == t ? void 0 : t.message) || "Unknown error",t)
                    }
                return this._publicKey ? this._publicKey : null
            }
            get connected() {
                return !!this._authorizationResult
            }
            get connecting() {
                return this._connecting
            }
            get readyState() {
                return this._readyState
            }
            declareWalletAsInstalled() {
                this._readyState !== x.i1.Installed && this.emit("readyStateChange", this._readyState = x.i1.Installed)
            }
            runWithGuard(t) {
                return ta(this, void 0, void 0, function*() {
                    try {
                        return yield t()
                    } catch (t) {
                        throw this.emit("error", t),
                        t
                    }
                })
            }
            autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
                return ta(this, void 0, void 0, function*() {
                    return yield this.autoConnect()
                })
            }
            autoConnect() {
                return ta(this, void 0, void 0, function*() {
                    if (!this.connecting && !this.connected)
                        return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                            if (this._readyState !== x.i1.Installed && this._readyState !== x.i1.Loadable)
                                throw new A.OZ;
                            this._connecting = !0;
                            try {
                                let t = yield this._authorizationResultCache.get();
                                t && this.handleAuthorizationResult(t)
                            } catch (t) {
                                throw new A.$w(t instanceof Error && t.message || "Unknown error",t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                })
            }
            connect() {
                return ta(this, void 0, void 0, function*() {
                    if (!this.connecting && !this.connected)
                        return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                            if (this._readyState !== x.i1.Installed && this._readyState !== x.i1.Loadable)
                                throw new A.OZ;
                            this._connecting = !0;
                            try {
                                yield this.performAuthorization()
                            } catch (t) {
                                throw new A.$w(t instanceof Error && t.message || "Unknown error",t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                })
            }
            performAuthorization(t) {
                return ta(this, void 0, void 0, function*() {
                    try {
                        let e = yield this._authorizationResultCache.get();
                        if (e)
                            return this.handleAuthorizationResult(e),
                            e;
                        return yield this.transact(e => ta(this, void 0, void 0, function*() {
                            let n = yield e.authorize({
                                chain: this._chain,
                                identity: this._appIdentity,
                                sign_in_payload: t
                            });
                            return Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)]),
                            n
                        }))
                    } catch (t) {
                        throw new A.$w(t instanceof Error && t.message || "Unknown error",t)
                    }
                })
            }
            handleAuthorizationResult(t) {
                var e;
                return ta(this, void 0, void 0, function*() {
                    let n = null == this._authorizationResult || (null === (e = this._authorizationResult) || void 0 === e ? void 0 : e.accounts.length) !== t.accounts.length || this._authorizationResult.accounts.some( (e, n) => e.address !== t.accounts[n].address);
                    if (this._authorizationResult = t,
                    this.declareWalletAsInstalled(),
                    n) {
                        let e = yield this._addressSelector.select(t.accounts.map( ({address: t}) => t));
                        e !== this._selectedAddress && (this._selectedAddress = e,
                        delete this._publicKey,
                        this.emit("connect", this.publicKey))
                    }
                })
            }
            performReauthorization(t, e) {
                return ta(this, void 0, void 0, function*() {
                    try {
                        let n = yield t.authorize({
                            auth_token: e,
                            identity: this._appIdentity
                        });
                        Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)])
                    } catch (t) {
                        throw this.disconnect(),
                        new A.at(t instanceof Error && (null == t ? void 0 : t.message) || "Unknown error",t)
                    }
                })
            }
            disconnect() {
                return ta(this, void 0, void 0, function*() {
                    this._authorizationResultCache.clear(),
                    this._connecting = !1,
                    this._connectionGeneration++,
                    delete this._authorizationResult,
                    delete this._publicKey,
                    delete this._selectedAddress,
                    this.emit("disconnect")
                })
            }
            transact(t) {
                var e;
                return ta(this, void 0, void 0, function*() {
                    let n = null === (e = this._authorizationResult) || void 0 === e ? void 0 : e.wallet_uri_base
                      , i = this._hostAuthority ? {
                        remoteHostAuthority: this._hostAuthority
                    } : void 0
                      , r = this._connectionGeneration;
                    try {
                        return yield function(t, e) {
                            return J(this, void 0, void 0, function*() {
                                return yield function(t, e) {
                                    return _(this, void 0, void 0, function*() {
                                        let n;
                                        !function() {
                                            if ("undefined" == typeof window || !0 !== window.isSecureContext)
                                                throw new k(z.ERROR_SECURE_CONTEXT_REQUIRED,"The mobile wallet adapter protocol must be used in a secure context (`https`).")
                                        }();
                                        let i = yield function() {
                                            return _(this, void 0, void 0, function*() {
                                                return yield crypto.subtle.generateKey({
                                                    name: "ECDSA",
                                                    namedCurve: "P-256"
                                                }, !1, ["sign"])
                                            })
                                        }()
                                          , r = yield function(t, e) {
                                            return _(this, void 0, void 0, function*() {
                                                let n = Q(49152 + Math.floor(16384 * Math.random()))
                                                  , i = yield function(t, e, n, i=["v1"]) {
                                                    return _(this, void 0, void 0, function*() {
                                                        let r = Q(e)
                                                          , s = function(t) {
                                                            let e = ""
                                                              , n = new Uint8Array(t)
                                                              , i = n.byteLength;
                                                            for (let t = 0; t < i; t++)
                                                                e += String.fromCharCode(n[t]);
                                                            return window.btoa(e)
                                                        }((yield crypto.subtle.exportKey("raw", t)))
                                                          , o = function(t, e) {
                                                            let n = null;
                                                            if (e) {
                                                                try {
                                                                    n = new URL(e)
                                                                } catch (t) {}
                                                                if ((null == n ? void 0 : n.protocol) !== "https:")
                                                                    throw new k(z.ERROR_FORBIDDEN_WALLET_BASE_URL,"Base URLs supplied by wallets must be valid `https` URLs")
                                                            }
                                                            return n || (n = new URL("solana-wallet:/")),
                                                            new URL(t.startsWith("/") ? t : [...$(n.pathname), ...$(t)].join("/"),n)
                                                        }("v1/associate/local", n);
                                                        return o.searchParams.set("association", s.replace(/[/+=]/g, t => ({
                                                            "/": "_",
                                                            "+": "-",
                                                            "=": "."
                                                        })[t])),
                                                        o.searchParams.set("port", `${r}`),
                                                        i.forEach(t => {
                                                            o.searchParams.set("v", t)
                                                        }
                                                        ),
                                                        o
                                                    })
                                                }(t, n, e);
                                                return yield function(t) {
                                                    return _(this, void 0, void 0, function*() {
                                                        if ("https:" === t.protocol)
                                                            window.location.assign(t);
                                                        else
                                                            try {
                                                                switch (-1 !== navigator.userAgent.indexOf("Firefox/") ? Z.Firefox : Z.Other) {
                                                                case Z.Firefox:
                                                                    null == F && ((F = document.createElement("iframe")).style.display = "none",
                                                                    document.body.appendChild(F)),
                                                                    F.contentWindow.location.href = t.toString();
                                                                    break;
                                                                case Z.Other:
                                                                    {
                                                                        let e = new Promise( (t, e) => {
                                                                            function n() {
                                                                                clearTimeout(r),
                                                                                window.removeEventListener("blur", i)
                                                                            }
                                                                            function i() {
                                                                                n(),
                                                                                t()
                                                                            }
                                                                            window.addEventListener("blur", i);
                                                                            let r = setTimeout( () => {
                                                                                n(),
                                                                                e()
                                                                            }
                                                                            , 2e3)
                                                                        }
                                                                        );
                                                                        window.location.assign(t),
                                                                        yield e
                                                                    }
                                                                }
                                                            } catch (t) {
                                                                throw new k(z.ERROR_WALLET_NOT_FOUND,"Found no installed wallet that supports the mobile wallet protocol.")
                                                            }
                                                    })
                                                }(i),
                                                n
                                            })
                                        }(i.publicKey, null == e ? void 0 : e.baseUri)
                                          , s = `ws://localhost:${r}/solana-wallet`
                                          , o = ( () => {
                                            let t = [...H];
                                            return () => t.length > 1 ? t.shift() : t[0]
                                        }
                                        )()
                                          , a = 1
                                          , l = 0
                                          , c = {
                                            __type: "disconnected"
                                        };
                                        return new Promise( (e, r) => {
                                            let u, h, d;
                                            let g = {}
                                              , f = () => _(this, void 0, void 0, function*() {
                                                if ("connecting" !== c.__type) {
                                                    console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${c.__type}\`.`);
                                                    return
                                                }
                                                u.removeEventListener("open", f);
                                                let {associationKeypair: t} = c
                                                  , e = yield W();
                                                u.send((yield P(e.publicKey, t.privateKey))),
                                                c = {
                                                    __type: "hello_req_sent",
                                                    associationPublicKey: t.publicKey,
                                                    ecdhPrivateKey: e.privateKey
                                                }
                                            })
                                              , p = t => {
                                                t.wasClean ? c = {
                                                    __type: "disconnected"
                                                } : r(new k(z.ERROR_SESSION_CLOSED,`The wallet session dropped unexpectedly (${t.code}: ${t.reason}).`,{
                                                    closeEvent: t
                                                })),
                                                h()
                                            }
                                              , y = t => _(this, void 0, void 0, function*() {
                                                h(),
                                                Date.now() - n >= 3e4 ? r(new k(z.ERROR_SESSION_TIMEOUT,`Failed to connect to the wallet websocket at ${s}.`)) : (yield new Promise(t => {
                                                    let e = o();
                                                    d = window.setTimeout(t, e)
                                                }
                                                ),
                                                w())
                                            })
                                              , m = n => _(this, void 0, void 0, function*() {
                                                let s = yield n.data.arrayBuffer();
                                                switch (c.__type) {
                                                case "connecting":
                                                    if (0 !== s.byteLength)
                                                        throw Error("Encountered unexpected message while connecting");
                                                    let o = yield W();
                                                    u.send((yield P(o.publicKey, i.privateKey))),
                                                    c = {
                                                        __type: "hello_req_sent",
                                                        associationPublicKey: i.publicKey,
                                                        ecdhPrivateKey: o.privateKey
                                                    };
                                                    break;
                                                case "connected":
                                                    try {
                                                        let t = s.slice(0, 4)
                                                          , e = K(t);
                                                        if (e !== l + 1)
                                                            throw Error("Encrypted message has invalid sequence number");
                                                        l = e;
                                                        let n = yield function(t, e) {
                                                            return _(this, void 0, void 0, function*() {
                                                                let n = JSON.parse((yield Y(t, e)));
                                                                if (Object.hasOwnProperty.call(n, "error"))
                                                                    throw new R(n.id,n.error.code,n.error.message);
                                                                return n
                                                            })
                                                        }(s, c.sharedSecret)
                                                          , i = g[n.id];
                                                        delete g[n.id],
                                                        i.resolve(n.result)
                                                    } catch (t) {
                                                        if (t instanceof R) {
                                                            let e = g[t.jsonRpcMessageId];
                                                            delete g[t.jsonRpcMessageId],
                                                            e.reject(t)
                                                        } else
                                                            throw t
                                                    }
                                                    break;
                                                case "hello_req_sent":
                                                    {
                                                        var d, f;
                                                        if (0 === s.byteLength) {
                                                            let t = yield W();
                                                            u.send((yield P(t.publicKey, i.privateKey))),
                                                            c = {
                                                                __type: "hello_req_sent",
                                                                associationPublicKey: i.publicKey,
                                                                ecdhPrivateKey: t.privateKey
                                                            };
                                                            break
                                                        }
                                                        let n = yield function(t, e, n) {
                                                            return _(this, void 0, void 0, function*() {
                                                                let[i,r] = yield Promise.all([crypto.subtle.exportKey("raw", e), crypto.subtle.importKey("raw", t.slice(0, 65), {
                                                                    name: "ECDH",
                                                                    namedCurve: "P-256"
                                                                }, !1, [])])
                                                                  , s = yield crypto.subtle.deriveBits({
                                                                    name: "ECDH",
                                                                    public: r
                                                                }, n, 256)
                                                                  , o = yield crypto.subtle.importKey("raw", s, "HKDF", !1, ["deriveKey"]);
                                                                return yield crypto.subtle.deriveKey({
                                                                    name: "HKDF",
                                                                    hash: "SHA-256",
                                                                    salt: new Uint8Array(i),
                                                                    info: new Uint8Array
                                                                }, o, {
                                                                    name: "AES-GCM",
                                                                    length: 128
                                                                }, !1, ["encrypt", "decrypt"])
                                                            })
                                                        }(s, c.associationPublicKey, c.ecdhPrivateKey)
                                                          , o = s.slice(65)
                                                          , p = 0 !== o.byteLength ? yield _(this, void 0, void 0, function*() {
                                                            let t = K(o.slice(0, 4));
                                                            if (t !== l + 1)
                                                                throw Error("Encrypted message has invalid sequence number");
                                                            return l = t,
                                                            function(t, e) {
                                                                return _(this, void 0, void 0, function*() {
                                                                    let n = JSON.parse((yield Y(t, e)))
                                                                      , i = "legacy";
                                                                    if (Object.hasOwnProperty.call(n, "v"))
                                                                        switch (n.v) {
                                                                        case 1:
                                                                        case "1":
                                                                        case "v1":
                                                                            i = "v1";
                                                                            break;
                                                                        case "legacy":
                                                                            i = "legacy";
                                                                            break;
                                                                        default:
                                                                            throw new k(z.ERROR_INVALID_PROTOCOL_VERSION,`Unknown/unsupported protocol version: ${n.v}`)
                                                                        }
                                                                    return {
                                                                        protocol_version: i
                                                                    }
                                                                })
                                                            }(o, n)
                                                        }) : {
                                                            protocol_version: "legacy"
                                                        };
                                                        c = {
                                                            __type: "connected",
                                                            sharedSecret: n,
                                                            sessionProperties: p
                                                        };
                                                        let y = (d = p.protocol_version,
                                                        f = (t, e) => _(this, void 0, void 0, function*() {
                                                            let i = a++;
                                                            return u.send((yield function(t, e) {
                                                                return _(this, void 0, void 0, function*() {
                                                                    let n = JSON.stringify(t);
                                                                    return function(t, e, n) {
                                                                        return _(this, void 0, void 0, function*() {
                                                                            let i = function(t) {
                                                                                if (t >= 4294967296)
                                                                                    throw Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
                                                                                let e = new ArrayBuffer(4);
                                                                                return new DataView(e).setUint32(0, t, !1),
                                                                                new Uint8Array(e)
                                                                            }(e)
                                                                              , r = new Uint8Array(12);
                                                                            crypto.getRandomValues(r);
                                                                            let s = yield crypto.subtle.encrypt(B(i, r), n, new TextEncoder().encode(t))
                                                                              , o = new Uint8Array(i.byteLength + r.byteLength + s.byteLength);
                                                                            return o.set(new Uint8Array(i), 0),
                                                                            o.set(new Uint8Array(r), i.byteLength),
                                                                            o.set(new Uint8Array(s), i.byteLength + r.byteLength),
                                                                            o
                                                                        })
                                                                    }(n, t.id, e)
                                                                })
                                                            }({
                                                                id: i,
                                                                jsonrpc: "2.0",
                                                                method: t,
                                                                params: null != e ? e : {}
                                                            }, n))),
                                                            new Promise( (e, n) => {
                                                                g[i] = {
                                                                    resolve(i) {
                                                                        switch (t) {
                                                                        case "authorize":
                                                                        case "reauthorize":
                                                                            {
                                                                                let {wallet_uri_base: t} = i;
                                                                                if (null != t)
                                                                                    try {
                                                                                        !function(t) {
                                                                                            let e;
                                                                                            try {
                                                                                                e = new URL(t)
                                                                                            } catch (t) {
                                                                                                throw new k(z.ERROR_FORBIDDEN_WALLET_BASE_URL,"Invalid base URL supplied by wallet")
                                                                                            }
                                                                                            if ("https:" !== e.protocol)
                                                                                                throw new k(z.ERROR_FORBIDDEN_WALLET_BASE_URL,"Base URLs supplied by wallets must be valid `https` URLs")
                                                                                        }(t)
                                                                                    } catch (t) {
                                                                                        n(t);
                                                                                        return
                                                                                    }
                                                                            }
                                                                        }
                                                                        e(i)
                                                                    },
                                                                    reject: n
                                                                }
                                                            }
                                                            )
                                                        }),
                                                        new Proxy({},{
                                                            get: (t, e) => (null == t[e] && (t[e] = function(t) {
                                                                return _(this, void 0, void 0, function*() {
                                                                    let {method: n, params: i} = function(t, e, n) {
                                                                        let i = e
                                                                          , r = t.toString().replace(/[A-Z]/g, t => `_${t.toLowerCase()}`).toLowerCase();
                                                                        switch (t) {
                                                                        case "authorize":
                                                                            {
                                                                                let {chain: t} = i;
                                                                                if ("legacy" === n) {
                                                                                    switch (t) {
                                                                                    case "solana:testnet":
                                                                                        t = "testnet";
                                                                                        break;
                                                                                    case "solana:devnet":
                                                                                        t = "devnet";
                                                                                        break;
                                                                                    case "solana:mainnet":
                                                                                        t = "mainnet-beta";
                                                                                        break;
                                                                                    default:
                                                                                        t = i.cluster
                                                                                    }
                                                                                    i.cluster = t
                                                                                } else {
                                                                                    switch (t) {
                                                                                    case "testnet":
                                                                                    case "devnet":
                                                                                        t = `solana:${t}`;
                                                                                        break;
                                                                                    case "mainnet-beta":
                                                                                        t = "solana:mainnet"
                                                                                    }
                                                                                    i.chain = t
                                                                                }
                                                                            }
                                                                        case "reauthorize":
                                                                            {
                                                                                let {auth_token: t, identity: e} = i;
                                                                                t && ("legacy" === n ? (r = "reauthorize",
                                                                                i = {
                                                                                    auth_token: t,
                                                                                    identity: e
                                                                                }) : r = "authorize")
                                                                            }
                                                                        }
                                                                        return {
                                                                            method: r,
                                                                            params: i
                                                                        }
                                                                    }(e, t, d)
                                                                      , r = yield f(n, i);
                                                                    return "authorize" === n && i.sign_in_payload && !r.sign_in_result && (r.sign_in_result = yield function(t, e, n) {
                                                                        var i;
                                                                        return _(this, void 0, void 0, function*() {
                                                                            var r, s;
                                                                            let o = null !== (i = t.domain) && void 0 !== i ? i : window.location.host
                                                                              , a = e.accounts[0].address
                                                                              , l = (r = Object.assign(Object.assign({}, t), {
                                                                                domain: o,
                                                                                address: a
                                                                            }),
                                                                            s = function(t) {
                                                                                let e = `${t.domain} wants you to sign in with your Solana account:
`;
                                                                                e += `${t.address}`,
                                                                                t.statement && (e += `

${t.statement}`);
                                                                                let n = [];
                                                                                if (t.uri && n.push(`URI: ${t.uri}`),
                                                                                t.version && n.push(`Version: ${t.version}`),
                                                                                t.chainId && n.push(`Chain ID: ${t.chainId}`),
                                                                                t.nonce && n.push(`Nonce: ${t.nonce}`),
                                                                                t.issuedAt && n.push(`Issued At: ${t.issuedAt}`),
                                                                                t.expirationTime && n.push(`Expiration Time: ${t.expirationTime}`),
                                                                                t.notBefore && n.push(`Not Before: ${t.notBefore}`),
                                                                                t.requestId && n.push(`Request ID: ${t.requestId}`),
                                                                                t.resources)
                                                                                    for (let e of (n.push("Resources:"),
                                                                                    t.resources))
                                                                                        n.push(`- ${e}`);
                                                                                return n.length && (e += `

${n.join("\n")}`),
                                                                                e
                                                                            }(r),
                                                                            window.btoa(s))
                                                                              , c = yield n("sign_messages", {
                                                                                addresses: [a],
                                                                                payloads: [l]
                                                                            });
                                                                            return {
                                                                                address: a,
                                                                                signed_message: l,
                                                                                signature: c.signed_payloads[0].slice(l.length)
                                                                            }
                                                                        })
                                                                    }(i.sign_in_payload, r, f)),
                                                                    function(t, e, n) {
                                                                        if ("getCapabilities" === t)
                                                                            switch (n) {
                                                                            case "legacy":
                                                                                {
                                                                                    let t = ["solana:signTransactions"];
                                                                                    return !0 === e.supports_clone_authorization && t.push(U),
                                                                                    Object.assign(Object.assign({}, e), {
                                                                                        features: t
                                                                                    })
                                                                                }
                                                                            case "v1":
                                                                                return Object.assign(Object.assign({}, e), {
                                                                                    supports_sign_and_send_transactions: !0,
                                                                                    supports_clone_authorization: e.features.includes(U)
                                                                                })
                                                                            }
                                                                        return e
                                                                    }(e, r, d)
                                                                })
                                                            }
                                                            ),
                                                            t[e]),
                                                            defineProperty: () => !1,
                                                            deleteProperty: () => !1
                                                        }));
                                                        try {
                                                            e((yield t(y)))
                                                        } catch (t) {
                                                            r(t)
                                                        } finally {
                                                            h(),
                                                            u.close()
                                                        }
                                                    }
                                                }
                                            })
                                              , w = () => {
                                                h && h(),
                                                c = {
                                                    __type: "connecting",
                                                    associationKeypair: i
                                                },
                                                void 0 === n && (n = Date.now()),
                                                (u = new WebSocket(s,["com.solana.mobilewalletadapter.v1"])).addEventListener("open", f),
                                                u.addEventListener("close", p),
                                                u.addEventListener("error", y),
                                                u.addEventListener("message", m),
                                                h = () => {
                                                    window.clearTimeout(d),
                                                    u.removeEventListener("open", f),
                                                    u.removeEventListener("close", p),
                                                    u.removeEventListener("error", y),
                                                    u.removeEventListener("message", m)
                                                }
                                            }
                                            ;
                                            w()
                                        }
                                        )
                                    })
                                }(e => t(new Proxy({},{
                                    get(t, n) {
                                        if (null == t[n])
                                            switch (n) {
                                            case "signAndSendTransactions":
                                                t[n] = function(t) {
                                                    var {minContextSlot: n, commitment: i, skipPreflight: r, maxRetries: s, waitForCommitmentToSendNextTransaction: o, transactions: a} = t
                                                      , l = G(t, ["minContextSlot", "commitment", "skipPreflight", "maxRetries", "waitForCommitmentToSendNextTransaction", "transactions"]);
                                                    return J(this, void 0, void 0, function*() {
                                                        let t = a.map(tt)
                                                          , c = {
                                                            min_context_slot: n,
                                                            commitment: i,
                                                            skip_preflight: r,
                                                            max_retries: s,
                                                            wait_for_commitment_to_send_next_transaction: o
                                                        }
                                                          , {signatures: u} = yield e.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, l), Object.values(c).some(t => null != t) ? {
                                                            options: c
                                                        } : null), {
                                                            payloads: t
                                                        }));
                                                        return u.map(X).map(V.encode)
                                                    })
                                                }
                                                ;
                                                break;
                                            case "signMessages":
                                                t[n] = function(t) {
                                                    var {payloads: n} = t
                                                      , i = G(t, ["payloads"]);
                                                    return J(this, void 0, void 0, function*() {
                                                        let t = n.map(q)
                                                          , {signed_payloads: r} = yield e.signMessages(Object.assign(Object.assign({}, i), {
                                                            payloads: t
                                                        }));
                                                        return r.map(X)
                                                    })
                                                }
                                                ;
                                                break;
                                            case "signTransactions":
                                                t[n] = function(t) {
                                                    var {transactions: n} = t
                                                      , i = G(t, ["transactions"]);
                                                    return J(this, void 0, void 0, function*() {
                                                        let t = n.map(tt)
                                                          , {signed_payloads: r} = yield e.signTransactions(Object.assign(Object.assign({}, i), {
                                                            payloads: t
                                                        }));
                                                        return r.map(X).map(te)
                                                    })
                                                }
                                                ;
                                                break;
                                            default:
                                                t[n] = e[n]
                                            }
                                        return t[n]
                                    },
                                    defineProperty: () => !1,
                                    deleteProperty: () => !1
                                })), e)
                            })
                        }(t, Object.assign(Object.assign({}, n ? {
                            baseUri: n
                        } : void 0), i))
                    } catch (t) {
                        throw this._connectionGeneration !== r && (yield new Promise( () => {}
                        )),
                        t instanceof Error && "SolanaMobileWalletAdapterError" === t.name && "ERROR_WALLET_NOT_FOUND" === t.code && (yield this._onWalletNotFound(this)),
                        t
                    }
                })
            }
            assertIsAuthorized() {
                if (!this._authorizationResult || !this._selectedAddress)
                    throw new A.oS;
                return {
                    authToken: this._authorizationResult.auth_token,
                    selectedAddress: this._selectedAddress
                }
            }
            performSignTransactions(t) {
                return ta(this, void 0, void 0, function*() {
                    let {authToken: e} = this.assertIsAuthorized();
                    try {
                        return yield this.transact(n => ta(this, void 0, void 0, function*() {
                            return yield this.performReauthorization(n, e),
                            yield n.signTransactions({
                                transactions: t
                            })
                        }))
                    } catch (t) {
                        throw new A.PY(null == t ? void 0 : t.message,t)
                    }
                })
            }
            sendTransaction(t, e, n) {
                return ta(this, void 0, void 0, function*() {
                    return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                        let {authToken: i} = this.assertIsAuthorized()
                          , r = null == n ? void 0 : n.minContextSlot;
                        try {
                            return yield this.transact(s => ta(this, void 0, void 0, function*() {
                                function o() {
                                    let t, i;
                                    switch (e.commitment) {
                                    case "confirmed":
                                    case "finalized":
                                    case "processed":
                                        t = e.commitment;
                                        break;
                                    default:
                                        t = "finalized"
                                    }
                                    switch (null == n ? void 0 : n.preflightCommitment) {
                                    case "confirmed":
                                    case "finalized":
                                    case "processed":
                                        i = n.preflightCommitment;
                                        break;
                                    case void 0:
                                        i = t;
                                        break;
                                    default:
                                        i = "finalized"
                                    }
                                    let r = "finalized" === i ? 2 : "confirmed" === i ? 1 : 0
                                      , s = "finalized" === t ? 2 : "confirmed" === t ? 1 : 0;
                                    return r < s ? i : t
                                }
                                let[a,l,c] = yield Promise.all([s.getCapabilities(), this.performReauthorization(s, i), tu(t) ? null : ta(this, void 0, void 0, function*() {
                                    var n;
                                    if (t.feePayer || (t.feePayer = null !== (n = this.publicKey) && void 0 !== n ? n : void 0),
                                    null == t.recentBlockhash) {
                                        let {blockhash: n} = yield e.getLatestBlockhash({
                                            commitment: o()
                                        });
                                        t.recentBlockhash = n
                                    }
                                })]);
                                if (a.supports_sign_and_send_transactions)
                                    return (yield s.signAndSendTransactions({
                                        minContextSlot: r,
                                        transactions: [t]
                                    }))[0];
                                {
                                    let[i] = yield s.signTransactions({
                                        transactions: [t]
                                    });
                                    if (tu(i))
                                        return yield e.sendTransaction(i);
                                    {
                                        let t = i.serialize();
                                        return yield e.sendRawTransaction(t, Object.assign(Object.assign({}, n), {
                                            preflightCommitment: o()
                                        }))
                                    }
                                }
                            }))
                        } catch (t) {
                            throw new A.IW(null == t ? void 0 : t.message,t)
                        }
                    }))
                })
            }
            signTransaction(t) {
                return ta(this, void 0, void 0, function*() {
                    return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                        let[e] = yield this.performSignTransactions([t]);
                        return e
                    }))
                })
            }
            signAllTransactions(t) {
                return ta(this, void 0, void 0, function*() {
                    return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                        return yield this.performSignTransactions(t)
                    }))
                })
            }
            signMessage(t) {
                return ta(this, void 0, void 0, function*() {
                    return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                        let {authToken: e, selectedAddress: n} = this.assertIsAuthorized();
                        try {
                            return yield this.transact(i => ta(this, void 0, void 0, function*() {
                                yield this.performReauthorization(i, e);
                                let[r] = yield i.signMessages({
                                    addresses: [n],
                                    payloads: [t]
                                });
                                return r.slice(-64)
                            }))
                        } catch (t) {
                            throw new A.fk(null == t ? void 0 : t.message,t)
                        }
                    }))
                })
            }
            signIn(t) {
                return ta(this, void 0, void 0, function*() {
                    return yield this.runWithGuard( () => ta(this, void 0, void 0, function*() {
                        var e, n;
                        if (this._readyState !== x.i1.Installed && this._readyState !== x.i1.Loadable)
                            throw new A.OZ;
                        this._connecting = !0;
                        try {
                            let i = yield this.performAuthorization(Object.assign(Object.assign({}, t), {
                                domain: null !== (e = null == t ? void 0 : t.domain) && void 0 !== e ? e : window.location.host
                            }));
                            if (!i.sign_in_result)
                                throw Error("Sign in failed, no sign in result returned by wallet");
                            let r = i.sign_in_result.address;
                            return {
                                account: Object.assign(Object.assign({}, null !== (n = i.accounts.find(t => t.address == r)) && void 0 !== n ? n : {
                                    address: r
                                }), {
                                    publicKey: tl(r)
                                }),
                                signedMessage: tl(i.sign_in_result.signed_message),
                                signature: tl(i.sign_in_result.signature)
                            }
                        } catch (t) {
                            throw new A.$w(t instanceof Error && t.message || "Unknown error",t)
                        } finally {
                            this._connecting = !1
                        }
                    }))
                })
            }
        }
        let td = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
        function tg(t) {
            return ta(this, void 0, void 0, function*() {
                "undefined" != typeof window && window.location.assign(t.url)
            })
        }
        var tf = n(45587)
          , tp = n(36822)
          , ty = n(49321)
          , tm = n(51169);
        let tw = function(t) {
            return ty.V in t.features && tm.k in t.features && (tf.G in t.features || tp.R in t.features)
        };
        var tM = n(30685);
        let tN = "solana:signIn";
        var tv = n(35119);
        function tL(t) {
            switch (t) {
            case "processed":
            case "confirmed":
            case "finalized":
            case void 0:
                return t;
            case "recent":
                return "processed";
            case "single":
            case "singleGossip":
                return "confirmed";
            case "max":
            case "root":
                return "finalized";
            default:
                return
            }
        }
        var tI = n(48459);
        new WeakMap,
        new WeakMap,
        new WeakMap,
        new WeakMap,
        new WeakMap,
        new WeakMap;
        var tS = n(46124)
          , tj = function(t, e, n, i, r) {
            if ("m" === i)
                throw TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n),
            n
        }
          , tb = function(t, e, n, i) {
            if ("a" === n && !i)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
        };
        class tE extends x.mI {
            constructor({wallet: t}) {
                super(),
                l.add(this),
                c.set(this, void 0),
                u.set(this, void 0),
                h.set(this, void 0),
                d.set(this, void 0),
                g.set(this, void 0),
                f.set(this, void 0),
                p.set(this, void 0),
                y.set(this, "undefined" == typeof window || "undefined" == typeof document ? x.i1.Unsupported : x.i1.Installed),
                v.set(this, t => {
                    if ("accounts"in t) {
                        let t = tb(this, p, "f").accounts[0];
                        tb(this, c, "f") && !tb(this, d, "f") && t !== tb(this, c, "f") && (t ? tb(this, l, "m", w).call(this, t) : (this.emit("error", new A.at),
                        tb(this, l, "m", M).call(this)))
                    }
                    "features"in t && tb(this, l, "m", N).call(this)
                }
                ),
                tj(this, p, t, "f"),
                tj(this, c, null, "f"),
                tj(this, u, null, "f"),
                tj(this, h, !1, "f"),
                tj(this, d, !1, "f"),
                tj(this, g, tb(this, p, "f").features[tm.k].on("change", tb(this, v, "f")), "f"),
                tb(this, l, "m", N).call(this)
            }
            get name() {
                return tb(this, p, "f").name
            }
            get url() {
                return "https://github.com/solana-labs/wallet-standard"
            }
            get icon() {
                return tb(this, p, "f").icon
            }
            get readyState() {
                return tb(this, y, "f")
            }
            get publicKey() {
                return tb(this, u, "f")
            }
            get connecting() {
                return tb(this, h, "f")
            }
            get supportedTransactionVersions() {
                return tb(this, f, "f")
            }
            get wallet() {
                return tb(this, p, "f")
            }
            get standard() {
                return !0
            }
            destroy() {
                tj(this, c, null, "f"),
                tj(this, u, null, "f"),
                tj(this, h, !1, "f"),
                tj(this, d, !1, "f");
                let t = tb(this, g, "f");
                t && (tj(this, g, null, "f"),
                t())
            }
            async autoConnect() {
                return tb(this, l, "m", m).call(this, {
                    silent: !0
                })
            }
            async connect() {
                return tb(this, l, "m", m).call(this)
            }
            async disconnect() {
                if (tI.R in tb(this, p, "f").features)
                    try {
                        tj(this, d, !0, "f"),
                        await tb(this, p, "f").features[tI.R].disconnect()
                    } catch (t) {
                        this.emit("error", new A.UG(t?.message,t))
                    } finally {
                        tj(this, d, !1, "f")
                    }
                tb(this, l, "m", M).call(this)
            }
            async sendTransaction(t, e, n={}) {
                try {
                    var i;
                    let r;
                    let s = tb(this, c, "f");
                    if (!s)
                        throw new A.oS;
                    if (tf.G in tb(this, p, "f").features) {
                        if (s.features.includes(tf.G))
                            r = tf.G;
                        else if (tp.R in tb(this, p, "f").features && s.features.includes(tp.R))
                            r = tp.R;
                        else
                            throw new A.cO
                    } else if (tp.R in tb(this, p, "f").features) {
                        if (!s.features.includes(tp.R))
                            throw new A.cO;
                        r = tp.R
                    } else
                        throw new A.p6;
                    let o = (i = e.rpcEndpoint).includes("https://api.mainnet-beta.solana.com") ? tv.aI : /\bdevnet\b/i.test(i) ? tv.BR : /\btestnet\b/i.test(i) ? tv.gv : /\blocalhost\b/i.test(i) || /\b127\.0\.0\.1\b/.test(i) ? tv.l1 : tv.aI;
                    if (!s.chains.includes(o))
                        throw new A.IW;
                    try {
                        let i;
                        let {signers: a, ...l} = n;
                        if ((0,
                        D.W)(t) ? (a?.length && t.sign(a),
                        i = t.serialize()) : (t = await this.prepareTransaction(t, e, l),
                        a?.length && t.partialSign(...a),
                        i = new Uint8Array(t.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1
                        }))),
                        r === tf.G) {
                            let[t] = await tb(this, p, "f").features[tf.G].signAndSendTransaction({
                                account: s,
                                chain: o,
                                transaction: i,
                                options: {
                                    preflightCommitment: tL(l.preflightCommitment || e.commitment),
                                    skipPreflight: l.skipPreflight,
                                    maxRetries: l.maxRetries,
                                    minContextSlot: l.minContextSlot
                                }
                            });
                            return tS.encode(t.signature)
                        }
                        {
                            let[t] = await tb(this, p, "f").features[tp.R].signTransaction({
                                account: s,
                                chain: o,
                                transaction: i,
                                options: {
                                    preflightCommitment: tL(l.preflightCommitment || e.commitment),
                                    minContextSlot: l.minContextSlot
                                }
                            });
                            return await e.sendRawTransaction(t.signedTransaction, {
                                ...l,
                                preflightCommitment: tL(l.preflightCommitment || e.commitment)
                            })
                        }
                    } catch (t) {
                        if (t instanceof A.lj)
                            throw t;
                        throw new A.IW(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
        }
        c = new WeakMap,
        u = new WeakMap,
        h = new WeakMap,
        d = new WeakMap,
        g = new WeakMap,
        f = new WeakMap,
        p = new WeakMap,
        y = new WeakMap,
        v = new WeakMap,
        l = new WeakSet,
        m = async function(t) {
            try {
                if (this.connected || this.connecting)
                    return;
                if (tb(this, y, "f") !== x.i1.Installed)
                    throw new A.OZ;
                if (tj(this, h, !0, "f"),
                !tb(this, p, "f").accounts.length)
                    try {
                        await tb(this, p, "f").features[ty.V].connect(t)
                    } catch (t) {
                        throw new A.$w(t?.message,t)
                    }
                let e = tb(this, p, "f").accounts[0];
                if (!e)
                    throw new A.cO;
                tb(this, l, "m", w).call(this, e)
            } catch (t) {
                throw this.emit("error", t),
                t
            } finally {
                tj(this, h, !1, "f")
            }
        }
        ,
        w = function(t) {
            let e;
            try {
                e = new O.PublicKey(t.address)
            } catch (t) {
                throw new A.Nx(t?.message,t)
            }
            tj(this, c, t, "f"),
            tj(this, u, e, "f"),
            tb(this, l, "m", N).call(this),
            this.emit("connect", e)
        }
        ,
        M = function() {
            tj(this, c, null, "f"),
            tj(this, u, null, "f"),
            tb(this, l, "m", N).call(this),
            this.emit("disconnect")
        }
        ,
        N = function() {
            let t = tf.G in tb(this, p, "f").features ? tb(this, p, "f").features[tf.G].supportedTransactionVersions : tb(this, p, "f").features[tp.R].supportedTransactionVersions;
            tj(this, f, !function(t, e) {
                if (t === e)
                    return !0;
                let n = t.length;
                if (n !== e.length)
                    return !1;
                for (let i = 0; i < n; i++)
                    if (t[i] !== e[i])
                        return !1;
                return !0
            }(t, ["legacy"]) ? new Set(t) : null, "f"),
            tp.R in tb(this, p, "f").features && tb(this, c, "f")?.features.includes(tp.R) ? (this.signTransaction = tb(this, l, "m", L),
            this.signAllTransactions = tb(this, l, "m", I)) : (delete this.signTransaction,
            delete this.signAllTransactions),
            tM.g in tb(this, p, "f").features && tb(this, c, "f")?.features.includes(tM.g) ? this.signMessage = tb(this, l, "m", S) : delete this.signMessage,
            tN in tb(this, p, "f").features ? this.signIn = tb(this, l, "m", j) : delete this.signIn
        }
        ,
        L = async function(t) {
            try {
                let e = tb(this, c, "f");
                if (!e)
                    throw new A.oS;
                if (!(tp.R in tb(this, p, "f").features))
                    throw new A.p6;
                if (!e.features.includes(tp.R))
                    throw new A.cO;
                try {
                    let n = (await tb(this, p, "f").features[tp.R].signTransaction({
                        account: e,
                        transaction: (0,
                        D.W)(t) ? t.serialize() : new Uint8Array(t.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1
                        }))
                    }))[0].signedTransaction;
                    return (0,
                    D.W)(t) ? O.VersionedTransaction.deserialize(n) : O.Transaction.from(n)
                } catch (t) {
                    if (t instanceof A.lj)
                        throw t;
                    throw new A.PY(t?.message,t)
                }
            } catch (t) {
                throw this.emit("error", t),
                t
            }
        }
        ,
        I = async function(t) {
            try {
                let e = tb(this, c, "f");
                if (!e)
                    throw new A.oS;
                if (!(tp.R in tb(this, p, "f").features))
                    throw new A.p6;
                if (!e.features.includes(tp.R))
                    throw new A.cO;
                try {
                    let n = await tb(this, p, "f").features[tp.R].signTransaction(...t.map(t => ({
                        account: e,
                        transaction: (0,
                        D.W)(t) ? t.serialize() : new Uint8Array(t.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1
                        }))
                    })));
                    return t.map( (t, e) => {
                        let i = n[e].signedTransaction;
                        return (0,
                        D.W)(t) ? O.VersionedTransaction.deserialize(i) : O.Transaction.from(i)
                    }
                    )
                } catch (t) {
                    throw new A.PY(t?.message,t)
                }
            } catch (t) {
                throw this.emit("error", t),
                t
            }
        }
        ,
        S = async function(t) {
            try {
                let e = tb(this, c, "f");
                if (!e)
                    throw new A.oS;
                if (!(tM.g in tb(this, p, "f").features))
                    throw new A.p6;
                if (!e.features.includes(tM.g))
                    throw new A.cO;
                try {
                    return (await tb(this, p, "f").features[tM.g].signMessage({
                        account: e,
                        message: t
                    }))[0].signature
                } catch (t) {
                    throw new A.fk(t?.message,t)
                }
            } catch (t) {
                throw this.emit("error", t),
                t
            }
        }
        ,
        j = async function(t={}) {
            try {
                let e;
                if (!(tN in tb(this, p, "f").features))
                    throw new A.p6;
                try {
                    [e] = await tb(this, p, "f").features[tN].signIn(t)
                } catch (t) {
                    throw new A.bD(t?.message,t)
                }
                if (!e)
                    throw new A.bD;
                return tb(this, l, "m", w).call(this, e.account),
                e
            } catch (t) {
                throw this.emit("error", t),
                t
            }
        }
        ;
        var tT = function(t, e, n, i, r) {
            if ("m" === i)
                throw TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n),
            n
        }
          , tx = function(t, e, n, i) {
            if ("a" === n && !i)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
        };
        let tA = new Set
          , tD = {};
        function tO(...t) {
            return (t = t.filter(t => !tA.has(t))).length ? (t.forEach(t => tA.add(t)),
            tD.register?.forEach(e => tk( () => e(...t))),
            function() {
                t.forEach(t => tA.delete(t)),
                tD.unregister?.forEach(e => tk( () => e(...t)))
            }
            ) : () => {}
        }
        function tC() {
            return [...tA]
        }
        function tz(t, e) {
            return tD[t]?.push(e) || (tD[t] = [e]),
            function() {
                tD[t] = tD[t]?.filter(t => e !== t)
            }
        }
        function tk(t) {
            try {
                t()
            } catch (t) {
                console.error(t)
            }
        }
        class tR extends Event {
            constructor(t) {
                super("wallet-standard:app-ready", {
                    bubbles: !1,
                    cancelable: !1,
                    composed: !1
                }),
                b.set(this, void 0),
                tT(this, b, t, "f")
            }
            get detail() {
                return tx(this, b, "f")
            }
            get type() {
                return "wallet-standard:app-ready"
            }
            preventDefault() {
                throw Error("preventDefault cannot be called")
            }
            stopImmediatePropagation() {
                throw Error("stopImmediatePropagation cannot be called")
            }
            stopPropagation() {
                throw Error("stopPropagation cannot be called")
            }
        }
        b = new WeakMap;
        var t_ = n(2265);
        function tP(t) {
            let e = (0,
            t_.useRef)();
            return e.current || (e.current = {
                value: t()
            }),
            e.current.value
        }
        function tU(t) {
            return t.filter(tw).map(t => new tE({
                wallet: t
            }))
        }
        (a = E || (E = {}))[a.DESKTOP_WEB = 0] = "DESKTOP_WEB",
        a[a.MOBILE_WEB = 1] = "MOBILE_WEB";
        var tY = n(61811);
        class tB extends A.lj {
            constructor() {
                super(...arguments),
                this.name = "WalletNotSelectedError"
            }
        }
        var tW = n(28782);
        function tQ({children: t, wallets: e, adapter: n, isUnloadingRef: i, onAutoConnectRequest: r, onConnectError: s, onError: o, onSelectWallet: a}) {
            let l = (0,
            t_.useRef)(!1)
              , [c,u] = (0,
            t_.useState)(!1)
              , h = (0,
            t_.useRef)(!1)
              , [d,g] = (0,
            t_.useState)(!1)
              , [f,p] = (0,
            t_.useState)( () => n?.publicKey ?? null)
              , [y,m] = (0,
            t_.useState)( () => n?.connected ?? !1)
              , w = (0,
            t_.useRef)(o);
            (0,
            t_.useEffect)( () => (w.current = o,
            () => {
                w.current = void 0
            }
            ), [o]);
            let M = (0,
            t_.useRef)( (t, e) => (!i.current && (w.current ? w.current(t, e) : (console.error(t, e),
            t instanceof A.OZ && "undefined" != typeof window && e && window.open(e.url, "_blank"))),
            t))
              , [N,v] = (0,
            t_.useState)( () => e.map(t => ({
                adapter: t,
                readyState: t.readyState
            })).filter( ({readyState: t}) => t !== x.i1.Unsupported));
            (0,
            t_.useEffect)( () => {
                function t(t) {
                    v(e => {
                        let n = e.findIndex( ({adapter: t}) => t === this);
                        if (-1 === n)
                            return e;
                        let {adapter: i} = e[n];
                        return [...e.slice(0, n), {
                            adapter: i,
                            readyState: t
                        }, ...e.slice(n + 1)].filter( ({readyState: t}) => t !== x.i1.Unsupported)
                    }
                    )
                }
                return v(t => e.map( (e, n) => {
                    let i = t[n];
                    return i && i.adapter === e && i.readyState === e.readyState ? i : {
                        adapter: e,
                        readyState: e.readyState
                    }
                }
                ).filter( ({readyState: t}) => t !== x.i1.Unsupported)),
                e.forEach(e => e.on("readyStateChange", t, e)),
                () => {
                    e.forEach(e => e.off("readyStateChange", t, e))
                }
            }
            , [n, e]);
            let L = (0,
            t_.useMemo)( () => N.find(t => t.adapter === n) ?? null, [n, N]);
            (0,
            t_.useEffect)( () => {
                if (!n)
                    return;
                let t = t => {
                    p(t),
                    l.current = !1,
                    u(!1),
                    m(!0),
                    h.current = !1,
                    g(!1)
                }
                  , e = () => {
                    i.current || (p(null),
                    l.current = !1,
                    u(!1),
                    m(!1),
                    h.current = !1,
                    g(!1))
                }
                  , r = t => {
                    M.current(t, n)
                }
                ;
                return n.on("connect", t),
                n.on("disconnect", e),
                n.on("error", r),
                () => {
                    n.off("connect", t),
                    n.off("disconnect", e),
                    n.off("error", r),
                    e()
                }
            }
            , [n, i]);
            let I = (0,
            t_.useRef)(!1);
            (0,
            t_.useEffect)( () => () => {
                I.current = !1
            }
            , [n]),
            (0,
            t_.useEffect)( () => {
                I.current || l.current || y || !r || L?.readyState !== x.i1.Installed && L?.readyState !== x.i1.Loadable || (l.current = !0,
                u(!0),
                I.current = !0,
                async function() {
                    try {
                        await r()
                    } catch {
                        s()
                    } finally {
                        u(!1),
                        l.current = !1
                    }
                }())
            }
            , [y, r, s, L]);
            let S = (0,
            t_.useCallback)(async (t, e, i) => {
                if (!n)
                    throw M.current(new tB);
                if (!y)
                    throw M.current(new A.oS, n);
                return await n.sendTransaction(t, e, i)
            }
            , [n, y])
              , j = (0,
            t_.useMemo)( () => n && "signTransaction"in n ? async t => {
                if (!y)
                    throw M.current(new A.oS, n);
                return await n.signTransaction(t)
            }
            : void 0, [n, y])
              , b = (0,
            t_.useMemo)( () => n && "signAllTransactions"in n ? async t => {
                if (!y)
                    throw M.current(new A.oS, n);
                return await n.signAllTransactions(t)
            }
            : void 0, [n, y])
              , E = (0,
            t_.useMemo)( () => n && "signMessage"in n ? async t => {
                if (!y)
                    throw M.current(new A.oS, n);
                return await n.signMessage(t)
            }
            : void 0, [n, y])
              , T = (0,
            t_.useMemo)( () => n && "signIn"in n ? async t => await n.signIn(t) : void 0, [n])
              , D = (0,
            t_.useCallback)(async () => {
                if (l.current || h.current || L?.adapter.connected)
                    return;
                if (!L)
                    throw M.current(new tB);
                let {adapter: t, readyState: e} = L;
                if (!(e === x.i1.Installed || e === x.i1.Loadable))
                    throw M.current(new A.OZ, t);
                l.current = !0,
                u(!0);
                try {
                    await t.connect()
                } catch (t) {
                    throw s(),
                    t
                } finally {
                    u(!1),
                    l.current = !1
                }
            }
            , [s, L])
              , O = (0,
            t_.useCallback)(async () => {
                if (!h.current && n) {
                    h.current = !0,
                    g(!0);
                    try {
                        await n.disconnect()
                    } finally {
                        g(!1),
                        h.current = !1
                    }
                }
            }
            , [n]);
            return t_.createElement(tW.z.Provider, {
                value: {
                    autoConnect: !!r,
                    wallets: N,
                    wallet: L,
                    publicKey: f,
                    connected: y,
                    connecting: c,
                    disconnecting: d,
                    select: a,
                    connect: D,
                    disconnect: O,
                    sendTransaction: S,
                    signTransaction: j,
                    signAllTransactions: b,
                    signMessage: E,
                    signIn: T
                }
            }, t)
        }
        function t$(t) {
            return function({adapters: t, userAgentString: e}) {
                return t.some(t => t.name !== tc && t.readyState === x.i1.Installed) ? E.DESKTOP_WEB : e && /android/i.test(e) && !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(e) ? E.MOBILE_WEB : E.DESKTOP_WEB
            }({
                adapters: t,
                userAgentString: (void 0 === r && (r = globalThis.navigator?.userAgent ?? null),
                r)
            }) === E.MOBILE_WEB
        }
        function tZ({children: t, wallets: e, autoConnect: n, localStorageKey: i="walletName", onError: r}) {
            let {connection: s} = (0,
            tY.R)()
              , a = function(t) {
                let e = tP( () => new Set)
                  , {get: n, on: i} = tP( () => (function() {
                    if (o || (o = function() {
                        if (o || (o = Object.freeze({
                            register: tO,
                            get: tC,
                            on: tz
                        }),
                        "undefined" == typeof window))
                            return o;
                        let t = Object.freeze({
                            register: tO
                        });
                        try {
                            window.addEventListener("wallet-standard:register-wallet", ({detail: e}) => e(t))
                        } catch (t) {
                            console.error("wallet-standard:register-wallet event listener could not be added\n", t)
                        }
                        try {
                            window.dispatchEvent(new tR(t))
                        } catch (t) {
                            console.error("wallet-standard:app-ready event could not be dispatched\n", t)
                        }
                        return o
                    }(),
                    "undefined" == typeof window))
                        return o;
                    let t = window.navigator.wallets || [];
                    if (!Array.isArray(t))
                        return console.error("window.navigator.wallets is not an array"),
                        o;
                    let {register: e} = o
                      , n = (...t) => t.forEach(t => tk( () => t({
                        register: e
                    })));
                    try {
                        Object.defineProperty(window.navigator, "wallets", {
                            value: Object.freeze({
                                push: n
                            })
                        })
                    } catch (t) {
                        return console.error("window.navigator.wallets could not be set"),
                        o
                    }
                    return n(...t),
                    o
                }
                )())
                  , [r,s] = (0,
                t_.useState)( () => tU(n()));
                (0,
                t_.useEffect)( () => {
                    let t = [i("register", (...t) => s(e => [...e, ...tU(t)])), i("unregister", (...t) => s(e => e.filter(e => t.some(t => t === e.wallet))))];
                    return () => t.forEach(t => t())
                }
                , [i]);
                let a = function(t) {
                    let e = (0,
                    t_.useRef)();
                    return (0,
                    t_.useEffect)( () => {
                        e.current = t
                    }
                    ),
                    e.current
                }(r);
                return (0,
                t_.useEffect)( () => {
                    if (!a)
                        return;
                    let t = new Set(r);
                    new Set(a.filter(e => !t.has(e))).forEach(t => t.destroy())
                }
                , [a, r]),
                (0,
                t_.useEffect)( () => () => r.forEach(t => t.destroy()), []),
                (0,
                t_.useMemo)( () => [...r, ...t.filter( ({name: t}) => !r.some(e => e.name === t) || (e.has(t) || (e.add(t),
                console.warn(`${t} was registered as a Standard Wallet. The Wallet Adapter for ${t} can be removed from your app.`)),
                !1))], [r, t, e])
            }(e)
              , l = (0,
            t_.useMemo)( () => {
                var t;
                if (!t$(a))
                    return null;
                let e = a.find(t => t.name === tc);
                return e || new th({
                    addressSelector: {
                        select(t) {
                            return ta(this, void 0, void 0, function*() {
                                return t[0]
                            })
                        }
                    },
                    appIdentity: {
                        uri: function() {
                            let t = globalThis.location;
                            if (t)
                                return `${t.protocol}//${t.host}`
                        }()
                    },
                    authorizationResultCache: function() {
                        let t;
                        try {
                            t = window.localStorage
                        } catch (t) {}
                        return {
                            clear() {
                                return ta(this, void 0, void 0, function*() {
                                    if (t)
                                        try {
                                            t.removeItem(td)
                                        } catch (t) {}
                                })
                            },
                            get() {
                                return ta(this, void 0, void 0, function*() {
                                    if (t)
                                        try {
                                            return JSON.parse(t.getItem(td)) || void 0
                                        } catch (t) {}
                                })
                            },
                            set(e) {
                                return ta(this, void 0, void 0, function*() {
                                    if (t)
                                        try {
                                            t.setItem(td, JSON.stringify(e))
                                        } catch (t) {}
                                })
                            }
                        }
                    }(),
                    cluster: (t = s?.rpcEndpoint) ? /devnet/i.test(t) ? "devnet" : /testnet/i.test(t) ? "testnet" : "mainnet-beta" : "mainnet-beta",
                    onWalletNotFound: tg
                })
            }
            , [a, s?.rpcEndpoint])
              , c = (0,
            t_.useMemo)( () => null == l || -1 !== a.indexOf(l) ? a : [l, ...a], [a, l])
              , [u,h] = function(t, e) {
                let n = (0,
                t_.useState)( () => {
                    try {
                        let e = localStorage.getItem(t);
                        if (e)
                            return JSON.parse(e)
                    } catch (t) {
                        "undefined" != typeof window && console.error(t)
                    }
                    return e
                }
                )
                  , i = n[0]
                  , r = (0,
                t_.useRef)(!0);
                return (0,
                t_.useEffect)( () => {
                    if (r.current) {
                        r.current = !1;
                        return
                    }
                    try {
                        null === i ? localStorage.removeItem(t) : localStorage.setItem(t, JSON.stringify(i))
                    } catch (t) {
                        "undefined" != typeof window && console.error(t)
                    }
                }
                , [i, t]),
                n
            }(i, t$(a) ? tc : null)
              , d = (0,
            t_.useMemo)( () => c.find(t => t.name === u) ?? null, [c, u])
              , g = (0,
            t_.useCallback)(t => {
                u !== t && (d && d.name !== tc && d.disconnect(),
                h(t))
            }
            , [d, h, u]);
            (0,
            t_.useEffect)( () => {
                if (d)
                    return d.on("disconnect", t),
                    () => {
                        d.off("disconnect", t)
                    }
                    ;
                function t() {
                    !y.current && (u === tc && t$(a) || h(null))
                }
            }
            , [d, a, h, u]);
            let f = (0,
            t_.useRef)(!1)
              , p = (0,
            t_.useMemo)( () => {
                if (n && d)
                    return async () => {
                        (!0 === n || await n(d)) && (f.current ? await d.connect() : await d.autoConnect())
                    }
            }
            , [n, d])
              , y = (0,
            t_.useRef)(!1);
            (0,
            t_.useEffect)( () => {
                if (u === tc && t$(a)) {
                    y.current = !1;
                    return
                }
                function t() {
                    y.current = !0
                }
                return window.addEventListener("beforeunload", t),
                () => {
                    window.removeEventListener("beforeunload", t)
                }
            }
            , [a, u]);
            let m = (0,
            t_.useCallback)( () => {
                d && d.name !== tc && g(null)
            }
            , [d, g])
              , w = (0,
            t_.useCallback)(t => {
                f.current = !0,
                g(t)
            }
            , [g]);
            return t_.createElement(tQ, {
                wallets: c,
                adapter: d,
                isUnloadingRef: y,
                onAutoConnectRequest: p,
                onConnectError: m,
                onError: r,
                onSelectWallet: w
            }, t)
        }
    },
    33494: function(t, e, n) {
        "use strict";
        n.d(e, {
            e: function() {
                return P
            }
        });
        var i, r, s, o, a, l, c, u, h, d, g, f, p, y, m, w = n(74750), M = n(50277), N = n(59860), v = n(19931), L = n(45429), I = function(t, e, n, i, r) {
            if ("m" === i)
                throw TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n),
            n
        }, S = function(t, e, n, i) {
            if ("a" === n && !i)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
        };
        class j extends Event {
            constructor(t) {
                super("wallet-standard:register-wallet", {
                    bubbles: !1,
                    cancelable: !1,
                    composed: !1
                }),
                i.set(this, void 0),
                I(this, i, t, "f")
            }
            get detail() {
                return S(this, i, "f")
            }
            get type() {
                return "wallet-standard:register-wallet"
            }
            preventDefault() {
                throw Error("preventDefault cannot be called")
            }
            stopImmediatePropagation() {
                throw Error("stopImmediatePropagation cannot be called")
            }
            stopPropagation() {
                throw Error("stopPropagation cannot be called")
            }
        }
        i = new WeakMap;
        var b = n(35119)
          , E = n(45587)
          , T = n(36822)
          , x = n(30685)
          , A = n(49321)
          , D = n(48459)
          , O = n(51169)
          , C = function(t, e, n, i) {
            if ("a" === n && !i)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
        }
          , z = function(t, e, n, i, r) {
            if ("m" === i)
                throw TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n),
            n
        };
        class k {
            constructor() {
                r.add(this),
                s.set(this, {}),
                o.set(this, "1.0.0"),
                a.set(this, "MetaMask"),
                l.set(this, "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="),
                c.set(this, null),
                u.set(this, (t, e) => (C(this, s, "f")[t]?.push(e) || (C(this, s, "f")[t] = [e]),
                () => C(this, r, "m", d).call(this, t, e))),
                g.set(this, async () => {
                    if (!C(this, c, "f")) {
                        let t;
                        try {
                            t = (await n.e(6248).then(n.bind(n, 36248))).default
                        } catch (t) {
                            throw Error("Unable to load Solflare MetaMask SDK")
                        }
                        z(this, c, new t, "f"),
                        C(this, c, "f").on("standard_change", t => C(this, r, "m", h).call(this, "change", t))
                    }
                    return this.accounts.length || await C(this, c, "f").connect(),
                    {
                        accounts: this.accounts
                    }
                }
                ),
                f.set(this, async () => {
                    C(this, c, "f") && await C(this, c, "f").disconnect()
                }
                ),
                p.set(this, async (...t) => {
                    if (!C(this, c, "f"))
                        throw new N.oS;
                    return await C(this, c, "f").standardSignAndSendTransaction(...t)
                }
                ),
                y.set(this, async (...t) => {
                    if (!C(this, c, "f"))
                        throw new N.oS;
                    return await C(this, c, "f").standardSignTransaction(...t)
                }
                ),
                m.set(this, async (...t) => {
                    if (!C(this, c, "f"))
                        throw new N.oS;
                    return await C(this, c, "f").standardSignMessage(...t)
                }
                )
            }
            get version() {
                return C(this, o, "f")
            }
            get name() {
                return C(this, a, "f")
            }
            get icon() {
                return C(this, l, "f")
            }
            get chains() {
                return [b.aI, b.BR, b.gv]
            }
            get features() {
                return {
                    [A.V]: {
                        version: "1.0.0",
                        connect: C(this, g, "f")
                    },
                    [D.R]: {
                        version: "1.0.0",
                        disconnect: C(this, f, "f")
                    },
                    [O.k]: {
                        version: "1.0.0",
                        on: C(this, u, "f")
                    },
                    [E.G]: {
                        version: "1.0.0",
                        supportedTransactionVersions: ["legacy", 0],
                        signAndSendTransaction: C(this, p, "f")
                    },
                    [T.R]: {
                        version: "1.0.0",
                        supportedTransactionVersions: ["legacy", 0],
                        signTransaction: C(this, y, "f")
                    },
                    [x.g]: {
                        version: "1.0.0",
                        signMessage: C(this, m, "f")
                    }
                }
            }
            get accounts() {
                return C(this, c, "f") ? C(this, c, "f").standardAccounts : []
            }
        }
        s = new WeakMap,
        o = new WeakMap,
        a = new WeakMap,
        l = new WeakMap,
        c = new WeakMap,
        u = new WeakMap,
        g = new WeakMap,
        f = new WeakMap,
        p = new WeakMap,
        y = new WeakMap,
        m = new WeakMap,
        r = new WeakSet,
        h = function(t, ...e) {
            C(this, s, "f")[t]?.forEach(t => t.apply(null, e))
        }
        ,
        d = function(t, e) {
            C(this, s, "f")[t] = C(this, s, "f")[t]?.filter(t => e !== t)
        }
        ;
        let R = !1;
        async function _() {
            let t = "solflare-detect-metamask";
            function e() {
                window.postMessage({
                    target: "metamask-contentscript",
                    data: {
                        name: "metamask-provider",
                        data: {
                            id: t,
                            jsonrpc: "2.0",
                            method: "wallet_getSnaps"
                        }
                    }
                }, window.location.origin)
            }
            function n(i) {
                let r = i.data;
                r?.target === "metamask-inpage" && r.data?.name === "metamask-provider" && (r.data.data?.id === t ? (window.removeEventListener("message", n),
                !r.data.data.error && (R || (function(t) {
                    let e = ({register: e}) => e(t);
                    try {
                        window.dispatchEvent(new j(e))
                    } catch (t) {
                        console.error("wallet-standard:register-wallet event could not be dispatched\n", t)
                    }
                    try {
                        window.addEventListener("wallet-standard:app-ready", ({detail: t}) => e(t))
                    } catch (t) {
                        console.error("wallet-standard:app-ready event listener could not be added\n", t)
                    }
                }(new k),
                R = !0))) : e())
            }
            window.addEventListener("message", n),
            window.setTimeout( () => window.removeEventListener("message", n), 5e3),
            e()
        }
        class P extends w.eC {
            constructor(t={}) {
                super(),
                this.name = "Solflare",
                this.url = "https://solflare.com",
                this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+",
                this.supportedTransactionVersions = new Set(["legacy", 0]),
                this._readyState = "undefined" == typeof window || "undefined" == typeof document ? M.i1.Unsupported : M.i1.Loadable,
                this._disconnected = () => {
                    let t = this._wallet;
                    t && (t.off("disconnect", this._disconnected),
                    this._wallet = null,
                    this._publicKey = null,
                    this.emit("error", new N.at),
                    this.emit("disconnect"))
                }
                ,
                this._accountChanged = t => {
                    if (!t)
                        return;
                    let e = this._publicKey;
                    if (e) {
                        try {
                            t = new L.PublicKey(t.toBytes())
                        } catch (t) {
                            this.emit("error", new N.Nx(t?.message,t));
                            return
                        }
                        e.equals(t) || (this._publicKey = t,
                        this.emit("connect", t))
                    }
                }
                ,
                this._connecting = !1,
                this._publicKey = null,
                this._wallet = null,
                this._config = t,
                this._readyState !== M.i1.Unsupported && ((0,
                M.su)( () => (!!window.solflare?.isSolflare || !!window.SolflareApp) && (this._readyState = M.i1.Installed,
                this.emit("readyStateChange", this._readyState),
                !0)),
                _())
            }
            get publicKey() {
                return this._publicKey
            }
            get connecting() {
                return this._connecting
            }
            get connected() {
                return !!this._wallet?.connected
            }
            get readyState() {
                return this._readyState
            }
            async autoConnect() {
                this.readyState === M.i1.Loadable && (0,
                M.H)() || await this.connect()
            }
            async connect() {
                try {
                    let t, e, i;
                    if (this.connected || this.connecting)
                        return;
                    if (this._readyState !== M.i1.Loadable && this._readyState !== M.i1.Installed)
                        throw new N.OZ;
                    if (this.readyState === M.i1.Loadable && (0,
                    M.H)()) {
                        let t = encodeURIComponent(window.location.href)
                          , e = encodeURIComponent(window.location.origin);
                        window.location.href = `https://solflare.com/ul/v1/browse/${t}?ref=${e}`;
                        return
                    }
                    try {
                        t = (await n.e(6085).then(n.bind(n, 86085))).default
                    } catch (t) {
                        throw new N.W8(t?.message,t)
                    }
                    try {
                        e = new t({
                            network: this._config.network
                        })
                    } catch (t) {
                        throw new N.p6(t?.message,t)
                    }
                    if (this._connecting = !0,
                    !e.connected)
                        try {
                            await e.connect()
                        } catch (t) {
                            throw new N.$w(t?.message,t)
                        }
                    if (!e.publicKey)
                        throw new N.$w;
                    try {
                        i = new L.PublicKey(e.publicKey.toBytes())
                    } catch (t) {
                        throw new N.Nx(t?.message,t)
                    }
                    e.on("disconnect", this._disconnected),
                    e.on("accountChanged", this._accountChanged),
                    this._wallet = e,
                    this._publicKey = i,
                    this.emit("connect", i)
                } catch (t) {
                    throw this.emit("error", t),
                    t
                } finally {
                    this._connecting = !1
                }
            }
            async disconnect() {
                let t = this._wallet;
                if (t) {
                    t.off("disconnect", this._disconnected),
                    t.off("accountChanged", this._accountChanged),
                    this._wallet = null,
                    this._publicKey = null;
                    try {
                        await t.disconnect()
                    } catch (t) {
                        this.emit("error", new N.UG(t?.message,t))
                    }
                }
                this.emit("disconnect")
            }
            async sendTransaction(t, e, n={}) {
                try {
                    let i = this._wallet;
                    if (!i)
                        throw new N.oS;
                    try {
                        let {signers: r, ...s} = n;
                        return (0,
                        v.W)(t) ? r?.length && t.sign(r) : (t = await this.prepareTransaction(t, e, s),
                        r?.length && t.partialSign(...r)),
                        s.preflightCommitment = s.preflightCommitment || e.commitment,
                        await i.signAndSendTransaction(t, s)
                    } catch (t) {
                        if (t instanceof N.lj)
                            throw t;
                        throw new N.IW(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signTransaction(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new N.oS;
                    try {
                        return await e.signTransaction(t) || t
                    } catch (t) {
                        throw new N.PY(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signAllTransactions(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new N.oS;
                    try {
                        return await e.signAllTransactions(t) || t
                    } catch (t) {
                        throw new N.PY(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signMessage(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new N.oS;
                    try {
                        return await e.signMessage(t, "utf8")
                    } catch (t) {
                        throw new N.fk(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
        }
    },
    59808: function(t, e, n) {
        "use strict";
        n.d(e, {
            X: function() {
                return a
            }
        });
        var i = n(74750)
          , r = n(50277)
          , s = n(59860)
          , o = n(45429);
        class a extends i.eC {
            constructor({params: t={
                showTorusButton: !1
            }}={
                params: {
                    showTorusButton: !1
                }
            }) {
                super(),
                this.name = "Torus",
                this.url = "https://tor.us",
                this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
                this.supportedTransactionVersions = null,
                this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.Loadable,
                this._connecting = !1,
                this._wallet = null,
                this._publicKey = null,
                this._params = t
            }
            get publicKey() {
                return this._publicKey
            }
            get connecting() {
                return this._connecting
            }
            get connected() {
                return !!this._wallet?.isLoggedIn
            }
            get readyState() {
                return this._readyState
            }
            async connect() {
                try {
                    let t, e, i, a;
                    if (this.connected || this.connecting)
                        return;
                    if (this._readyState !== r.i1.Loadable)
                        throw new s.OZ;
                    this._connecting = !0;
                    try {
                        t = (await Promise.all([n.e(8218), n.e(2615), n.e(8968), n.e(8884), n.e(507)]).then(n.bind(n, 57837))).default
                    } catch (t) {
                        throw new s.W8(t?.message,t)
                    }
                    try {
                        e = window.torus || new t
                    } catch (t) {
                        throw new s.p6(t?.message,t)
                    }
                    if (!e.isInitialized)
                        try {
                            await e.init(this._params)
                        } catch (t) {
                            throw new s.$w(t?.message,t)
                        }
                    try {
                        i = await e.login()
                    } catch (t) {
                        throw new s.cO(t?.message,t)
                    }
                    try {
                        a = new o.PublicKey(i[0])
                    } catch (t) {
                        throw new s.Nx(t?.message,t)
                    }
                    this._wallet = e,
                    this._publicKey = a,
                    this.emit("connect", a)
                } catch (t) {
                    throw this.emit("error", t),
                    t
                } finally {
                    this._connecting = !1
                }
            }
            async disconnect() {
                let t = this._wallet;
                if (t) {
                    this._wallet = null,
                    this._publicKey = null;
                    try {
                        t.isLoggedIn && await t.cleanUp()
                    } catch (t) {
                        this.emit("error", new s.UG(t?.message,t))
                    }
                }
                this.emit("disconnect")
            }
            async sendTransaction(t, e, n={}) {
                try {
                    let i = this._wallet;
                    if (!i)
                        throw new s.oS;
                    try {
                        let {signers: r, ...s} = n;
                        t = await this.prepareTransaction(t, e, s),
                        r?.length && t.partialSign(...r),
                        s.preflightCommitment = s.preflightCommitment || e.commitment;
                        let {signature: o} = await i.signAndSendTransaction(t, s);
                        return o
                    } catch (t) {
                        if (t instanceof s.lj)
                            throw t;
                        throw new s.IW(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signTransaction(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new s.oS;
                    try {
                        return await e.signTransaction(t) || t
                    } catch (t) {
                        throw new s.PY(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signAllTransactions(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new s.oS;
                    try {
                        return await e.signAllTransactions(t) || t
                    } catch (t) {
                        throw new s.PY(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
            async signMessage(t) {
                try {
                    let e = this._wallet;
                    if (!e)
                        throw new s.oS;
                    try {
                        return await e.signMessage(t)
                    } catch (t) {
                        throw new s.fk(t?.message,t)
                    }
                } catch (t) {
                    throw this.emit("error", t),
                    t
                }
            }
        }
    },
    35119: function(t, e, n) {
        "use strict";
        n.d(e, {
            BR: function() {
                return r
            },
            aI: function() {
                return i
            },
            gv: function() {
                return s
            },
            l1: function() {
                return o
            }
        });
        let i = "solana:mainnet"
          , r = "solana:devnet"
          , s = "solana:testnet"
          , o = "solana:localnet"
    },
    45587: function(t, e, n) {
        "use strict";
        n.d(e, {
            G: function() {
                return i
            }
        });
        let i = "solana:signAndSendTransaction"
    },
    30685: function(t, e, n) {
        "use strict";
        n.d(e, {
            g: function() {
                return i
            }
        });
        let i = "solana:signMessage"
    },
    36822: function(t, e, n) {
        "use strict";
        n.d(e, {
            R: function() {
                return i
            }
        });
        let i = "solana:signTransaction"
    },
    49321: function(t, e, n) {
        "use strict";
        n.d(e, {
            V: function() {
                return i
            }
        });
        let i = "standard:connect"
    },
    48459: function(t, e, n) {
        "use strict";
        n.d(e, {
            R: function() {
                return i
            }
        });
        let i = "standard:disconnect"
    },
    51169: function(t, e, n) {
        "use strict";
        n.d(e, {
            k: function() {
                return i
            }
        });
        let i = "standard:events"
    },
    46027: function(t, e, n) {
        "use strict";
        n.d(e, {
            ZP: function() {
                return te
            }
        });
        let i = t => "string" == typeof t
          , r = () => {
            let t, e;
            let n = new Promise( (n, i) => {
                t = n,
                e = i
            }
            );
            return n.resolve = t,
            n.reject = e,
            n
        }
          , s = t => null == t ? "" : "" + t
          , o = (t, e, n) => {
            t.forEach(t => {
                e[t] && (n[t] = e[t])
            }
            )
        }
          , a = /###/g
          , l = t => t && t.indexOf("###") > -1 ? t.replace(a, ".") : t
          , c = t => !t || i(t)
          , u = (t, e, n) => {
            let r = i(e) ? e.split(".") : e
              , s = 0;
            for (; s < r.length - 1; ) {
                if (c(t))
                    return {};
                let e = l(r[s]);
                !t[e] && n && (t[e] = new n),
                t = Object.prototype.hasOwnProperty.call(t, e) ? t[e] : {},
                ++s
            }
            return c(t) ? {} : {
                obj: t,
                k: l(r[s])
            }
        }
          , h = (t, e, n) => {
            let {obj: i, k: r} = u(t, e, Object);
            if (void 0 !== i || 1 === e.length) {
                i[r] = n;
                return
            }
            let s = e[e.length - 1]
              , o = e.slice(0, e.length - 1)
              , a = u(t, o, Object);
            for (; void 0 === a.obj && o.length; )
                s = `${o[o.length - 1]}.${s}`,
                (a = u(t, o = o.slice(0, o.length - 1), Object)) && a.obj && void 0 !== a.obj[`${a.k}.${s}`] && (a.obj = void 0);
            a.obj[`${a.k}.${s}`] = n
        }
          , d = (t, e, n, i) => {
            let {obj: r, k: s} = u(t, e, Object);
            r[s] = r[s] || [],
            r[s].push(n)
        }
          , g = (t, e) => {
            let {obj: n, k: i} = u(t, e);
            if (n)
                return n[i]
        }
          , f = (t, e, n) => {
            let i = g(t, n);
            return void 0 !== i ? i : g(e, n)
        }
          , p = (t, e, n) => {
            for (let r in e)
                "__proto__" !== r && "constructor" !== r && (r in t ? i(t[r]) || t[r]instanceof String || i(e[r]) || e[r]instanceof String ? n && (t[r] = e[r]) : p(t[r], e[r], n) : t[r] = e[r]);
            return t
        }
          , y = t => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        var m = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        let w = t => i(t) ? t.replace(/[&<>"'\/]/g, t => m[t]) : t;
        class M {
            constructor(t) {
                this.capacity = t,
                this.regExpMap = new Map,
                this.regExpQueue = []
            }
            getRegExp(t) {
                let e = this.regExpMap.get(t);
                if (void 0 !== e)
                    return e;
                let n = new RegExp(t);
                return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
                this.regExpMap.set(t, n),
                this.regExpQueue.push(t),
                n
            }
        }
        let N = [" ", ",", "?", "!", ";"]
          , v = new M(20)
          , L = (t, e, n) => {
            e = e || "",
            n = n || "";
            let i = N.filter(t => 0 > e.indexOf(t) && 0 > n.indexOf(t));
            if (0 === i.length)
                return !0;
            let r = v.getRegExp(`(${i.map(t => "?" === t ? "\\?" : t).join("|")})`)
              , s = !r.test(t);
            if (!s) {
                let e = t.indexOf(n);
                e > 0 && !r.test(t.substring(0, e)) && (s = !0)
            }
            return s
        }
          , I = function(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (!t)
                return;
            if (t[e])
                return t[e];
            let i = e.split(n)
              , r = t;
            for (let t = 0; t < i.length; ) {
                let e;
                if (!r || "object" != typeof r)
                    return;
                let s = "";
                for (let o = t; o < i.length; ++o)
                    if (o !== t && (s += n),
                    s += i[o],
                    void 0 !== (e = r[s])) {
                        if (["string", "number", "boolean"].indexOf(typeof e) > -1 && o < i.length - 1)
                            continue;
                        t += o - t + 1;
                        break
                    }
                r = e
            }
            return r
        }
          , S = t => t && t.replace("_", "-")
          , j = {
            type: "logger",
            log(t) {
                this.output("log", t)
            },
            warn(t) {
                this.output("warn", t)
            },
            error(t) {
                this.output("error", t)
            },
            output(t, e) {
                console && console[t] && console[t].apply(console, e)
            }
        };
        class b {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.init(t, e)
            }
            init(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.prefix = e.prefix || "i18next:",
                this.logger = t || j,
                this.options = e,
                this.debug = e.debug
            }
            log() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "log", "", !0)
            }
            warn() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "warn", "", !0)
            }
            error() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "error", "")
            }
            deprecate() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
            }
            forward(t, e, n, r) {
                return r && !this.debug ? null : (i(t[0]) && (t[0] = `${n}${this.prefix} ${t[0]}`),
                this.logger[e](t))
            }
            create(t) {
                return new b(this.logger,{
                    prefix: `${this.prefix}:${t}:`,
                    ...this.options
                })
            }
            clone(t) {
                return (t = t || this.options).prefix = t.prefix || this.prefix,
                new b(this.logger,t)
            }
        }
        var E = new b;
        class T {
            constructor() {
                this.observers = {}
            }
            on(t, e) {
                return t.split(" ").forEach(t => {
                    this.observers[t] || (this.observers[t] = new Map);
                    let n = this.observers[t].get(e) || 0;
                    this.observers[t].set(e, n + 1)
                }
                ),
                this
            }
            off(t, e) {
                if (this.observers[t]) {
                    if (!e) {
                        delete this.observers[t];
                        return
                    }
                    this.observers[t].delete(e)
                }
            }
            emit(t) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                this.observers[t] && Array.from(this.observers[t].entries()).forEach(t => {
                    let[e,i] = t;
                    for (let t = 0; t < i; t++)
                        e(...n)
                }
                ),
                this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(e => {
                    let[i,r] = e;
                    for (let e = 0; e < r; e++)
                        i.apply(i, [t, ...n])
                }
                )
            }
        }
        class x extends T {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                super(),
                this.data = t || {},
                this.options = e,
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
            }
            addNamespaces(t) {
                0 > this.options.ns.indexOf(t) && this.options.ns.push(t)
            }
            removeNamespaces(t) {
                let e = this.options.ns.indexOf(t);
                e > -1 && this.options.ns.splice(e, 1)
            }
            getResource(t, e, n) {
                let r, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator, a = void 0 !== s.ignoreJSONStructure ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
                t.indexOf(".") > -1 ? r = t.split(".") : (r = [t, e],
                n && (Array.isArray(n) ? r.push(...n) : i(n) && o ? r.push(...n.split(o)) : r.push(n)));
                let l = g(this.data, r);
                return (!l && !e && !n && t.indexOf(".") > -1 && (t = r[0],
                e = r[1],
                n = r.slice(2).join(".")),
                !l && a && i(n)) ? I(this.data && this.data[t] && this.data[t][e], n, o) : l
            }
            addResource(t, e, n, i) {
                let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    silent: !1
                }
                  , s = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                  , o = [t, e];
                n && (o = o.concat(s ? n.split(s) : n)),
                t.indexOf(".") > -1 && (o = t.split("."),
                i = e,
                e = o[1]),
                this.addNamespaces(e),
                h(this.data, o, i),
                r.silent || this.emit("added", t, e, n, i)
            }
            addResources(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    silent: !1
                };
                for (let r in n)
                    (i(n[r]) || Array.isArray(n[r])) && this.addResource(t, e, r, n[r], {
                        silent: !0
                    });
                r.silent || this.emit("added", t, e, n)
            }
            addResourceBundle(t, e, n, i, r) {
                let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    silent: !1,
                    skipCopy: !1
                }
                  , o = [t, e];
                t.indexOf(".") > -1 && (o = t.split("."),
                i = n,
                n = e,
                e = o[1]),
                this.addNamespaces(e);
                let a = g(this.data, o) || {};
                s.skipCopy || (n = JSON.parse(JSON.stringify(n))),
                i ? p(a, n, r) : a = {
                    ...a,
                    ...n
                },
                h(this.data, o, a),
                s.silent || this.emit("added", t, e, n)
            }
            removeResourceBundle(t, e) {
                this.hasResourceBundle(t, e) && delete this.data[t][e],
                this.removeNamespaces(e),
                this.emit("removed", t, e)
            }
            hasResourceBundle(t, e) {
                return void 0 !== this.getResource(t, e)
            }
            getResourceBundle(t, e) {
                return (e || (e = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI) ? {
                    ...this.getResource(t, e)
                } : this.getResource(t, e)
            }
            getDataByLanguage(t) {
                return this.data[t]
            }
            hasLanguageSomeTranslations(t) {
                let e = this.getDataByLanguage(t);
                return !!(e && Object.keys(e) || []).find(t => e[t] && Object.keys(e[t]).length > 0)
            }
            toJSON() {
                return this.data
            }
        }
        var A = {
            processors: {},
            addPostProcessor(t) {
                this.processors[t.name] = t
            },
            handle(t, e, n, i, r) {
                return t.forEach(t => {
                    this.processors[t] && (e = this.processors[t].process(e, n, i, r))
                }
                ),
                e
            }
        };
        let D = {};
        class O extends T {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(),
                o(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
                this.options = e,
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                this.logger = E.create("translator")
            }
            changeLanguage(t) {
                t && (this.language = t)
            }
            exists(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                };
                if (null == t)
                    return !1;
                let n = this.resolve(t, e);
                return n && void 0 !== n.res
            }
            extractFromKey(t, e) {
                let n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                void 0 === n && (n = ":");
                let r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator
                  , s = e.ns || this.options.defaultNS || []
                  , o = n && t.indexOf(n) > -1
                  , a = !this.options.userDefinedKeySeparator && !e.keySeparator && !this.options.userDefinedNsSeparator && !e.nsSeparator && !L(t, n, r);
                if (o && !a) {
                    let e = t.match(this.interpolator.nestingRegexp);
                    if (e && e.length > 0)
                        return {
                            key: t,
                            namespaces: s
                        };
                    let i = t.split(n);
                    (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (s = i.shift()),
                    t = i.join(r)
                }
                return i(s) && (s = [s]),
                {
                    key: t,
                    namespaces: s
                }
            }
            translate(t, e, n) {
                if ("object" != typeof e && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)),
                "object" == typeof e && (e = {
                    ...e
                }),
                e || (e = {}),
                null == t)
                    return "";
                Array.isArray(t) || (t = [String(t)]);
                let r = void 0 !== e.returnDetails ? e.returnDetails : this.options.returnDetails
                  , s = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator
                  , {key: o, namespaces: a} = this.extractFromKey(t[t.length - 1], e)
                  , l = a[a.length - 1]
                  , c = e.lng || this.language
                  , u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if (c && "cimode" === c.toLowerCase()) {
                    if (u) {
                        let t = e.nsSeparator || this.options.nsSeparator;
                        return r ? {
                            res: `${l}${t}${o}`,
                            usedKey: o,
                            exactUsedKey: o,
                            usedLng: c,
                            usedNS: l,
                            usedParams: this.getUsedParamsDetails(e)
                        } : `${l}${t}${o}`
                    }
                    return r ? {
                        res: o,
                        usedKey: o,
                        exactUsedKey: o,
                        usedLng: c,
                        usedNS: l,
                        usedParams: this.getUsedParamsDetails(e)
                    } : o
                }
                let h = this.resolve(t, e)
                  , d = h && h.res
                  , g = h && h.usedKey || o
                  , f = h && h.exactUsedKey || o
                  , p = Object.prototype.toString.apply(d)
                  , y = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays
                  , m = !this.i18nFormat || this.i18nFormat.handleAsObject
                  , w = !i(d) && "boolean" != typeof d && "number" != typeof d;
                if (m && d && w && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(p) && !(i(y) && Array.isArray(d))) {
                    if (!e.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                        let t = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, d, {
                            ...e,
                            ns: a
                        }) : `key '${o} (${this.language})' returned an object instead of string.`;
                        return r ? (h.res = t,
                        h.usedParams = this.getUsedParamsDetails(e),
                        h) : t
                    }
                    if (s) {
                        let t = Array.isArray(d)
                          , n = t ? [] : {}
                          , i = t ? f : g;
                        for (let t in d)
                            if (Object.prototype.hasOwnProperty.call(d, t)) {
                                let r = `${i}${s}${t}`;
                                n[t] = this.translate(r, {
                                    ...e,
                                    joinArrays: !1,
                                    ns: a
                                }),
                                n[t] === r && (n[t] = d[t])
                            }
                        d = n
                    }
                } else if (m && i(y) && Array.isArray(d))
                    (d = d.join(y)) && (d = this.extendTranslation(d, t, e, n));
                else {
                    let r = !1
                      , a = !1
                      , u = void 0 !== e.count && !i(e.count)
                      , g = O.hasDefaultValue(e)
                      , f = u ? this.pluralResolver.getSuffix(c, e.count, e) : ""
                      , p = e.ordinal && u ? this.pluralResolver.getSuffix(c, e.count, {
                        ordinal: !1
                    }) : ""
                      , y = u && !e.ordinal && 0 === e.count && this.pluralResolver.shouldUseIntlApi()
                      , m = y && e[`defaultValue${this.options.pluralSeparator}zero`] || e[`defaultValue${f}`] || e[`defaultValue${p}`] || e.defaultValue;
                    !this.isValidLookup(d) && g && (r = !0,
                    d = m),
                    this.isValidLookup(d) || (a = !0,
                    d = o);
                    let w = (e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : d
                      , M = g && m !== d && this.options.updateMissing;
                    if (a || r || M) {
                        if (this.logger.log(M ? "updateKey" : "missingKey", c, l, o, M ? m : d),
                        s) {
                            let t = this.resolve(o, {
                                ...e,
                                keySeparator: !1
                            });
                            t && t.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                        }
                        let t = []
                          , n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                        if ("fallback" === this.options.saveMissingTo && n && n[0])
                            for (let e = 0; e < n.length; e++)
                                t.push(n[e]);
                        else
                            "all" === this.options.saveMissingTo ? t = this.languageUtils.toResolveHierarchy(e.lng || this.language) : t.push(e.lng || this.language);
                        let i = (t, n, i) => {
                            let r = g && i !== d ? i : w;
                            this.options.missingKeyHandler ? this.options.missingKeyHandler(t, l, n, r, M, e) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(t, l, n, r, M, e),
                            this.emit("missingKey", t, l, n, d)
                        }
                        ;
                        this.options.saveMissing && (this.options.saveMissingPlurals && u ? t.forEach(t => {
                            let n = this.pluralResolver.getSuffixes(t, e);
                            y && e[`defaultValue${this.options.pluralSeparator}zero`] && 0 > n.indexOf(`${this.options.pluralSeparator}zero`) && n.push(`${this.options.pluralSeparator}zero`),
                            n.forEach(n => {
                                i([t], o + n, e[`defaultValue${n}`] || m)
                            }
                            )
                        }
                        ) : i(t, o, m))
                    }
                    d = this.extendTranslation(d, t, e, h, n),
                    a && d === o && this.options.appendNamespaceToMissingKey && (d = `${l}:${o}`),
                    (a || r) && this.options.parseMissingKeyHandler && (d = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, r ? d : void 0) : this.options.parseMissingKeyHandler(d))
                }
                return r ? (h.res = d,
                h.usedParams = this.getUsedParamsDetails(e),
                h) : d
            }
            extendTranslation(t, e, n, r, s) {
                var o = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                    t = this.i18nFormat.parse(t, {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    });
                else if (!n.skipInterpolation) {
                    let a;
                    n.interpolation && this.interpolator.init({
                        ...n,
                        interpolation: {
                            ...this.options.interpolation,
                            ...n.interpolation
                        }
                    });
                    let l = i(t) && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                    if (l) {
                        let e = t.match(this.interpolator.nestingRegexp);
                        a = e && e.length
                    }
                    let c = n.replace && !i(n.replace) ? n.replace : n;
                    if (this.options.interpolation.defaultVariables && (c = {
                        ...this.options.interpolation.defaultVariables,
                        ...c
                    }),
                    t = this.interpolator.interpolate(t, c, n.lng || this.language || r.usedLng, n),
                    l) {
                        let e = t.match(this.interpolator.nestingRegexp);
                        a < (e && e.length) && (n.nest = !1)
                    }
                    !n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = this.language || r.usedLng),
                    !1 !== n.nest && (t = this.interpolator.nest(t, function() {
                        for (var t = arguments.length, i = Array(t), r = 0; r < t; r++)
                            i[r] = arguments[r];
                        return s && s[0] === i[0] && !n.context ? (o.logger.warn(`It seems you are nesting recursively key: ${i[0]} in key: ${e[0]}`),
                        null) : o.translate(...i, e)
                    }, n)),
                    n.interpolation && this.interpolator.reset()
                }
                let a = n.postProcess || this.options.postProcess
                  , l = i(a) ? [a] : a;
                return null != t && l && l.length && !1 !== n.applyPostProcessor && (t = A.handle(l, t, e, this.options && this.options.postProcessPassResolved ? {
                    i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n)
                    },
                    ...n
                } : n, this)),
                t
            }
            resolve(t) {
                let e, n, r, s, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return i(t) && (t = [t]),
                t.forEach(t => {
                    if (this.isValidLookup(e))
                        return;
                    let l = this.extractFromKey(t, a)
                      , c = l.key;
                    n = c;
                    let u = l.namespaces;
                    this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                    let h = void 0 !== a.count && !i(a.count)
                      , d = h && !a.ordinal && 0 === a.count && this.pluralResolver.shouldUseIntlApi()
                      , g = void 0 !== a.context && (i(a.context) || "number" == typeof a.context) && "" !== a.context
                      , f = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
                    u.forEach(t => {
                        this.isValidLookup(e) || (o = t,
                        !D[`${f[0]}-${t}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (D[`${f[0]}-${t}`] = !0,
                        this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                        f.forEach(n => {
                            let i;
                            if (this.isValidLookup(e))
                                return;
                            s = n;
                            let o = [c];
                            if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                                this.i18nFormat.addLookupKeys(o, c, n, t, a);
                            else {
                                let t;
                                h && (t = this.pluralResolver.getSuffix(n, a.count, a));
                                let e = `${this.options.pluralSeparator}zero`
                                  , i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (h && (o.push(c + t),
                                a.ordinal && 0 === t.indexOf(i) && o.push(c + t.replace(i, this.options.pluralSeparator)),
                                d && o.push(c + e)),
                                g) {
                                    let n = `${c}${this.options.contextSeparator}${a.context}`;
                                    o.push(n),
                                    h && (o.push(n + t),
                                    a.ordinal && 0 === t.indexOf(i) && o.push(n + t.replace(i, this.options.pluralSeparator)),
                                    d && o.push(n + e))
                                }
                            }
                            for (; i = o.pop(); )
                                this.isValidLookup(e) || (r = i,
                                e = this.getResource(n, t, i, a))
                        }
                        ))
                    }
                    )
                }
                ),
                {
                    res: e,
                    usedKey: n,
                    exactUsedKey: r,
                    usedLng: s,
                    usedNS: o
                }
            }
            isValidLookup(t) {
                return void 0 !== t && !(!this.options.returnNull && null === t) && !(!this.options.returnEmptyString && "" === t)
            }
            getResource(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, i) : this.resourceStore.getResource(t, e, n, i)
            }
            getUsedParamsDetails() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.replace && !i(t.replace)
                  , n = e ? t.replace : t;
                if (e && void 0 !== t.count && (n.count = t.count),
                this.options.interpolation.defaultVariables && (n = {
                    ...this.options.interpolation.defaultVariables,
                    ...n
                }),
                !e)
                    for (let t of (n = {
                        ...n
                    },
                    ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]))
                        delete n[t];
                return n
            }
            static hasDefaultValue(t) {
                let e = "defaultValue";
                for (let n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n) && e === n.substring(0, e.length) && void 0 !== t[n])
                        return !0;
                return !1
            }
        }
        let C = t => t.charAt(0).toUpperCase() + t.slice(1);
        class z {
            constructor(t) {
                this.options = t,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = E.create("languageUtils")
            }
            getScriptPartFromCode(t) {
                if (!(t = S(t)) || 0 > t.indexOf("-"))
                    return null;
                let e = t.split("-");
                return 2 === e.length ? null : (e.pop(),
                "x" === e[e.length - 1].toLowerCase()) ? null : this.formatLanguageCode(e.join("-"))
            }
            getLanguagePartFromCode(t) {
                if (!(t = S(t)) || 0 > t.indexOf("-"))
                    return t;
                let e = t.split("-");
                return this.formatLanguageCode(e[0])
            }
            formatLanguageCode(t) {
                if (i(t) && t.indexOf("-") > -1) {
                    if ("undefined" != typeof Intl && void 0 !== Intl.getCanonicalLocales)
                        try {
                            let e = Intl.getCanonicalLocales(t)[0];
                            if (e && this.options.lowerCaseLng && (e = e.toLowerCase()),
                            e)
                                return e
                        } catch (t) {}
                    let e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                      , n = t.split("-");
                    return this.options.lowerCaseLng ? n = n.map(t => t.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                    n[1] = n[1].toUpperCase(),
                    e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = C(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                    e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = C(n[1].toLowerCase())),
                    e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = C(n[2].toLowerCase()))),
                    n.join("-")
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
            }
            isSupportedCode(t) {
                return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
                !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
            }
            getBestMatchFromCodes(t) {
                let e;
                return t ? (t.forEach(t => {
                    if (e)
                        return;
                    let n = this.formatLanguageCode(t);
                    (!this.options.supportedLngs || this.isSupportedCode(n)) && (e = n)
                }
                ),
                !e && this.options.supportedLngs && t.forEach(t => {
                    if (e)
                        return;
                    let n = this.getLanguagePartFromCode(t);
                    if (this.isSupportedCode(n))
                        return e = n;
                    e = this.options.supportedLngs.find(t => {
                        if (t === n || !(0 > t.indexOf("-") && 0 > n.indexOf("-")) && (t.indexOf("-") > 0 && 0 > n.indexOf("-") && t.substring(0, t.indexOf("-")) === n || 0 === t.indexOf(n) && n.length > 1))
                            return t
                    }
                    )
                }
                ),
                e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]),
                e) : null
            }
            getFallbackCodes(t, e) {
                if (!t)
                    return [];
                if ("function" == typeof t && (t = t(e)),
                i(t) && (t = [t]),
                Array.isArray(t))
                    return t;
                if (!e)
                    return t.default || [];
                let n = t[e];
                return n || (n = t[this.getScriptPartFromCode(e)]),
                n || (n = t[this.formatLanguageCode(e)]),
                n || (n = t[this.getLanguagePartFromCode(e)]),
                n || (n = t.default),
                n || []
            }
            toResolveHierarchy(t, e) {
                let n = this.getFallbackCodes(e || this.options.fallbackLng || [], t)
                  , r = []
                  , s = t => {
                    t && (this.isSupportedCode(t) ? r.push(t) : this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))
                }
                ;
                return i(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && s(this.formatLanguageCode(t)),
                "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && s(this.getScriptPartFromCode(t)),
                "currentOnly" !== this.options.load && s(this.getLanguagePartFromCode(t))) : i(t) && s(this.formatLanguageCode(t)),
                n.forEach(t => {
                    0 > r.indexOf(t) && s(this.formatLanguageCode(t))
                }
                ),
                r
            }
        }
        let k = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , R = {
            1: t => Number(t > 1),
            2: t => Number(1 != t),
            3: t => 0,
            4: t => Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2),
            5: t => Number(0 == t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5),
            6: t => Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2),
            7: t => Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2),
            8: t => Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3),
            9: t => Number(t >= 2),
            10: t => Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4),
            11: t => Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3),
            12: t => Number(t % 10 != 1 || t % 100 == 11),
            13: t => Number(0 !== t),
            14: t => Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3),
            15: t => Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2),
            16: t => Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2),
            17: t => Number(1 == t || t % 10 == 1 && t % 100 != 11 ? 0 : 1),
            18: t => Number(0 == t ? 0 : 1 == t ? 1 : 2),
            19: t => Number(1 == t ? 0 : 0 == t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3),
            20: t => Number(1 == t ? 0 : 0 == t || t % 100 > 0 && t % 100 < 20 ? 1 : 2),
            21: t => Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0),
            22: t => Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
        }
          , _ = ["v1", "v2", "v3"]
          , P = ["v4"]
          , U = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        }
          , Y = () => {
            let t = {};
            return k.forEach(e => {
                e.lngs.forEach(n => {
                    t[n] = {
                        numbers: e.nr,
                        plurals: R[e.fc]
                    }
                }
                )
            }
            ),
            t
        }
        ;
        class B {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.languageUtils = t,
                this.options = e,
                this.logger = E.create("pluralResolver"),
                (!this.options.compatibilityJSON || P.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = Y(),
                this.pluralRulesCache = {}
            }
            addRule(t, e) {
                this.rules[t] = e
            }
            clearCache() {
                this.pluralRulesCache = {}
            }
            getRule(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.shouldUseIntlApi())
                    try {
                        let n = S("dev" === t ? "en" : t)
                          , i = e.ordinal ? "ordinal" : "cardinal"
                          , r = JSON.stringify({
                            cleanedCode: n,
                            type: i
                        });
                        if (r in this.pluralRulesCache)
                            return this.pluralRulesCache[r];
                        let s = new Intl.PluralRules(n,{
                            type: i
                        });
                        return this.pluralRulesCache[r] = s,
                        s
                    } catch (t) {
                        return
                    }
                return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
            }
            needsPlural(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this.getRule(t, e);
                return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
            }
            getPluralFormsOfKey(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.getSuffixes(t, n).map(t => `${e}${t}`)
            }
            getSuffixes(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this.getRule(t, e);
                return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort( (t, e) => U[t] - U[e]).map(t => `${this.options.prepend}${e.ordinal ? `ordinal${this.options.prepend}` : ""}${t}`) : n.numbers.map(n => this.getSuffix(t, n, e)) : []
            }
            getSuffix(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , i = this.getRule(t, n);
                return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(e)}` : this.getSuffixRetroCompatible(i, e) : (this.logger.warn(`no plural rule found for: ${t}`),
                "")
            }
            getSuffixRetroCompatible(t, e) {
                let n = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e))
                  , i = t.numbers[n];
                this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                let r = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
                return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? `_plural_${i.toString()}` : r() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] ? r() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
            }
            shouldUseIntlApi() {
                return !_.includes(this.options.compatibilityJSON)
            }
        }
        let W = function(t, e, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "."
              , s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4]
              , o = f(t, e, n);
            return !o && s && i(n) && void 0 === (o = I(t, n, r)) && (o = I(e, n, r)),
            o
        }
          , Q = t => t.replace(/\$/g, "$$$$");
        class $ {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger = E.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || (t => t),
                this.init(t)
            }
            init() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.interpolation || (t.interpolation = {
                    escapeValue: !0
                });
                let {escape: e, escapeValue: n, useRawValueToEscape: i, prefix: r, prefixEscaped: s, suffix: o, suffixEscaped: a, formatSeparator: l, unescapeSuffix: c, unescapePrefix: u, nestingPrefix: h, nestingPrefixEscaped: d, nestingSuffix: g, nestingSuffixEscaped: f, nestingOptionsSeparator: p, maxReplaces: m, alwaysFormat: M} = t.interpolation;
                this.escape = void 0 !== e ? e : w,
                this.escapeValue = void 0 === n || n,
                this.useRawValueToEscape = void 0 !== i && i,
                this.prefix = r ? y(r) : s || "{{",
                this.suffix = o ? y(o) : a || "}}",
                this.formatSeparator = l || ",",
                this.unescapePrefix = c ? "" : u || "-",
                this.unescapeSuffix = this.unescapePrefix ? "" : c || "",
                this.nestingPrefix = h ? y(h) : d || y("$t("),
                this.nestingSuffix = g ? y(g) : f || y(")"),
                this.nestingOptionsSeparator = p || ",",
                this.maxReplaces = m || 1e3,
                this.alwaysFormat = void 0 !== M && M,
                this.resetRegExp()
            }
            reset() {
                this.options && this.init(this.options)
            }
            resetRegExp() {
                let t = (t, e) => t && t.source === e ? (t.lastIndex = 0,
                t) : RegExp(e, "g");
                this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
                this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
                this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
            }
            interpolate(t, e, n, r) {
                let o, a, l;
                let c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
                  , u = t => {
                    if (0 > t.indexOf(this.formatSeparator)) {
                        let i = W(e, c, t, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(i, void 0, n, {
                            ...r,
                            ...e,
                            interpolationkey: t
                        }) : i
                    }
                    let i = t.split(this.formatSeparator)
                      , s = i.shift().trim()
                      , o = i.join(this.formatSeparator).trim();
                    return this.format(W(e, c, s, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, {
                        ...r,
                        ...e,
                        interpolationkey: s
                    })
                }
                ;
                this.resetRegExp();
                let h = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                  , d = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                return [{
                    regex: this.regexpUnescape,
                    safeValue: t => Q(t)
                }, {
                    regex: this.regexp,
                    safeValue: t => this.escapeValue ? Q(this.escape(t)) : Q(t)
                }].forEach(e => {
                    for (l = 0; o = e.regex.exec(t); ) {
                        let n = o[1].trim();
                        if (void 0 === (a = u(n))) {
                            if ("function" == typeof h) {
                                let e = h(t, o, r);
                                a = i(e) ? e : ""
                            } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                                a = "";
                            else if (d) {
                                a = o[0];
                                continue
                            } else
                                this.logger.warn(`missed to pass in variable ${n} for interpolating ${t}`),
                                a = ""
                        } else
                            i(a) || this.useRawValueToEscape || (a = s(a));
                        let c = e.safeValue(a);
                        if (t = t.replace(o[0], c),
                        d ? (e.regex.lastIndex += a.length,
                        e.regex.lastIndex -= o[0].length) : e.regex.lastIndex = 0,
                        ++l >= this.maxReplaces)
                            break
                    }
                }
                ),
                t
            }
            nest(t, e) {
                let n, r, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = (t, e) => {
                    let n = this.nestingOptionsSeparator;
                    if (0 > t.indexOf(n))
                        return t;
                    let i = t.split(RegExp(`${n}[ ]*{`))
                      , r = `{${i[1]}`;
                    t = i[0];
                    let s = (r = this.interpolate(r, o)).match(/'/g)
                      , a = r.match(/"/g);
                    (s && s.length % 2 == 0 && !a || a.length % 2 != 0) && (r = r.replace(/'/g, '"'));
                    try {
                        o = JSON.parse(r),
                        e && (o = {
                            ...e,
                            ...o
                        })
                    } catch (e) {
                        return this.logger.warn(`failed parsing options string in nesting for key ${t}`, e),
                        `${t}${n}${r}`
                    }
                    return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue,
                    t
                }
                ;
                for (; n = this.nestingRegexp.exec(t); ) {
                    let c = [];
                    (o = (o = {
                        ...a
                    }).replace && !i(o.replace) ? o.replace : o).applyPostProcessor = !1,
                    delete o.defaultValue;
                    let u = !1;
                    if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                        let t = n[1].split(this.formatSeparator).map(t => t.trim());
                        n[1] = t.shift(),
                        c = t,
                        u = !0
                    }
                    if ((r = e(l.call(this, n[1].trim(), o), o)) && n[0] === t && !i(r))
                        return r;
                    i(r) || (r = s(r)),
                    r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),
                    r = ""),
                    u && (r = c.reduce( (t, e) => this.format(t, e, a.lng, {
                        ...a,
                        interpolationkey: n[1].trim()
                    }), r.trim())),
                    t = t.replace(n[0], r),
                    this.regexp.lastIndex = 0
                }
                return t
            }
        }
        let Z = t => {
            let e = t.toLowerCase().trim()
              , n = {};
            if (t.indexOf("(") > -1) {
                let i = t.split("(");
                e = i[0].toLowerCase().trim();
                let r = i[1].substring(0, i[1].length - 1);
                "currency" === e && 0 > r.indexOf(":") ? n.currency || (n.currency = r.trim()) : "relativetime" === e && 0 > r.indexOf(":") ? n.range || (n.range = r.trim()) : r.split(";").forEach(t => {
                    if (t) {
                        let[e,...i] = t.split(":")
                          , r = i.join(":").trim().replace(/^'+|'+$/g, "")
                          , s = e.trim();
                        n[s] || (n[s] = r),
                        "false" === r && (n[s] = !1),
                        "true" === r && (n[s] = !0),
                        isNaN(r) || (n[s] = parseInt(r, 10))
                    }
                }
                )
            }
            return {
                formatName: e,
                formatOptions: n
            }
        }
          , F = t => {
            let e = {};
            return (n, i, r) => {
                let s = r;
                r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (s = {
                    ...s,
                    [r.interpolationkey]: void 0
                });
                let o = i + JSON.stringify(s)
                  , a = e[o];
                return a || (a = t(S(i), r),
                e[o] = a),
                a(n)
            }
        }
        ;
        class H {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger = E.create("formatter"),
                this.options = t,
                this.formats = {
                    number: F( (t, e) => n => new Intl.NumberFormat(t,{
                        ...e
                    }).format(n)),
                    currency: F( (t, e) => n => new Intl.NumberFormat(t,{
                        ...e,
                        style: "currency"
                    }).format(n)),
                    datetime: F( (t, e) => n => new Intl.DateTimeFormat(t,{
                        ...e
                    }).format(n)),
                    relativetime: F( (t, e) => n => new Intl.RelativeTimeFormat(t,{
                        ...e
                    }).format(n, e.range || "day")),
                    list: F( (t, e) => n => new Intl.ListFormat(t,{
                        ...e
                    }).format(n))
                },
                this.init(t)
            }
            init(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                };
                this.formatSeparator = e.interpolation.formatSeparator || ","
            }
            add(t, e) {
                this.formats[t.toLowerCase().trim()] = e
            }
            addCached(t, e) {
                this.formats[t.toLowerCase().trim()] = F(e)
            }
            format(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , r = e.split(this.formatSeparator);
                if (r.length > 1 && r[0].indexOf("(") > 1 && 0 > r[0].indexOf(")") && r.find(t => t.indexOf(")") > -1)) {
                    let t = r.findIndex(t => t.indexOf(")") > -1);
                    r[0] = [r[0], ...r.splice(1, t)].join(this.formatSeparator)
                }
                return r.reduce( (t, e) => {
                    let {formatName: r, formatOptions: s} = Z(e);
                    if (this.formats[r]) {
                        let e = t;
                        try {
                            let o = i && i.formatParams && i.formatParams[i.interpolationkey] || {}
                              , a = o.locale || o.lng || i.locale || i.lng || n;
                            e = this.formats[r](t, a, {
                                ...s,
                                ...i,
                                ...o
                            })
                        } catch (t) {
                            this.logger.warn(t)
                        }
                        return e
                    }
                    return this.logger.warn(`there was no format function for ${r}`),
                    t
                }
                , t)
            }
        }
        let K = (t, e) => {
            void 0 !== t.pending[e] && (delete t.pending[e],
            t.pendingCount--)
        }
        ;
        class V extends T {
            constructor(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                super(),
                this.backend = t,
                this.store = e,
                this.services = n,
                this.languageUtils = n.languageUtils,
                this.options = i,
                this.logger = E.create("backendConnector"),
                this.waitingReads = [],
                this.maxParallelReads = i.maxParallelReads || 10,
                this.readingCalls = 0,
                this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5,
                this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350,
                this.state = {},
                this.queue = [],
                this.backend && this.backend.init && this.backend.init(n, i.backend, i)
            }
            queueLoad(t, e, n, i) {
                let r = {}
                  , s = {}
                  , o = {}
                  , a = {};
                return t.forEach(t => {
                    let i = !0;
                    e.forEach(e => {
                        let o = `${t}|${e}`;
                        !n.reload && this.store.hasResourceBundle(t, e) ? this.state[o] = 2 : this.state[o] < 0 || (1 === this.state[o] ? void 0 === s[o] && (s[o] = !0) : (this.state[o] = 1,
                        i = !1,
                        void 0 === s[o] && (s[o] = !0),
                        void 0 === r[o] && (r[o] = !0),
                        void 0 === a[e] && (a[e] = !0)))
                    }
                    ),
                    i || (o[t] = !0)
                }
                ),
                (Object.keys(r).length || Object.keys(s).length) && this.queue.push({
                    pending: s,
                    pendingCount: Object.keys(s).length,
                    loaded: {},
                    errors: [],
                    callback: i
                }),
                {
                    toLoad: Object.keys(r),
                    pending: Object.keys(s),
                    toLoadLanguages: Object.keys(o),
                    toLoadNamespaces: Object.keys(a)
                }
            }
            loaded(t, e, n) {
                let i = t.split("|")
                  , r = i[0]
                  , s = i[1];
                e && this.emit("failedLoading", r, s, e),
                !e && n && this.store.addResourceBundle(r, s, n, void 0, void 0, {
                    skipCopy: !0
                }),
                this.state[t] = e ? -1 : 2,
                e && n && (this.state[t] = 0);
                let o = {};
                this.queue.forEach(n => {
                    d(n.loaded, [r], s),
                    K(n, t),
                    e && n.errors.push(e),
                    0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(t => {
                        o[t] || (o[t] = {});
                        let e = n.loaded[t];
                        e.length && e.forEach(e => {
                            void 0 === o[t][e] && (o[t][e] = !0)
                        }
                        )
                    }
                    ),
                    n.done = !0,
                    n.errors.length ? n.callback(n.errors) : n.callback())
                }
                ),
                this.emit("loaded", o),
                this.queue = this.queue.filter(t => !t.done)
            }
            read(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                  , s = arguments.length > 5 ? arguments[5] : void 0;
                if (!t.length)
                    return s(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                    this.waitingReads.push({
                        lng: t,
                        ns: e,
                        fcName: n,
                        tried: i,
                        wait: r,
                        callback: s
                    });
                    return
                }
                this.readingCalls++;
                let o = (o, a) => {
                    if (this.readingCalls--,
                    this.waitingReads.length > 0) {
                        let t = this.waitingReads.shift();
                        this.read(t.lng, t.ns, t.fcName, t.tried, t.wait, t.callback)
                    }
                    if (o && a && i < this.maxRetries) {
                        setTimeout( () => {
                            this.read.call(this, t, e, n, i + 1, 2 * r, s)
                        }
                        , r);
                        return
                    }
                    s(o, a)
                }
                  , a = this.backend[n].bind(this.backend);
                if (2 === a.length) {
                    try {
                        let n = a(t, e);
                        n && "function" == typeof n.then ? n.then(t => o(null, t)).catch(o) : o(null, n)
                    } catch (t) {
                        o(t)
                    }
                    return
                }
                return a(t, e, o)
            }
            prepareLoading(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                    return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                    r && r();
                i(t) && (t = this.languageUtils.toResolveHierarchy(t)),
                i(e) && (e = [e]);
                let s = this.queueLoad(t, e, n, r);
                if (!s.toLoad.length)
                    return s.pending.length || r(),
                    null;
                s.toLoad.forEach(t => {
                    this.loadOne(t)
                }
                )
            }
            load(t, e, n) {
                this.prepareLoading(t, e, {}, n)
            }
            reload(t, e, n) {
                this.prepareLoading(t, e, {
                    reload: !0
                }, n)
            }
            loadOne(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = t.split("|")
                  , i = n[0]
                  , r = n[1];
                this.read(i, r, "read", void 0, void 0, (n, s) => {
                    n && this.logger.warn(`${e}loading namespace ${r} for language ${i} failed`, n),
                    !n && s && this.logger.log(`${e}loaded namespace ${r} for language ${i}`, s),
                    this.loaded(t, n, s)
                }
                )
            }
            saveMissing(t, e, n, i, r) {
                let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                  , o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}
                ;
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e)) {
                    this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    return
                }
                if (null != n && "" !== n) {
                    if (this.backend && this.backend.create) {
                        let a = {
                            ...s,
                            isUpdate: r
                        }
                          , l = this.backend.create.bind(this.backend);
                        if (l.length < 6)
                            try {
                                let r;
                                (r = 5 === l.length ? l(t, e, n, i, a) : l(t, e, n, i)) && "function" == typeof r.then ? r.then(t => o(null, t)).catch(o) : o(null, r)
                            } catch (t) {
                                o(t)
                            }
                        else
                            l(t, e, n, i, o, a)
                    }
                    t && t[0] && this.store.addResource(t[0], e, n, i)
                }
            }
        }
        let G = () => ({
            debug: !1,
            initImmediate: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            supportedLngs: !1,
            nonExplicitSupportedLngs: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: !1,
            saveMissing: !1,
            updateMissing: !1,
            saveMissingTo: "fallback",
            saveMissingPlurals: !0,
            missingKeyHandler: !1,
            missingInterpolationHandler: !1,
            postProcess: !1,
            postProcessPassResolved: !1,
            returnNull: !1,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: t => {
                let e = {};
                if ("object" == typeof t[1] && (e = t[1]),
                i(t[1]) && (e.defaultValue = t[1]),
                i(t[2]) && (e.tDescription = t[2]),
                "object" == typeof t[2] || "object" == typeof t[3]) {
                    let n = t[3] || t[2];
                    Object.keys(n).forEach(t => {
                        e[t] = n[t]
                    }
                    )
                }
                return e
            }
            ,
            interpolation: {
                escapeValue: !0,
                format: t => t,
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0
            }
        })
          , J = t => (i(t.ns) && (t.ns = [t.ns]),
        i(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
        i(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
        t.supportedLngs && 0 > t.supportedLngs.indexOf("cimode") && (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
        t)
          , q = () => {}
          , X = t => {
            Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e => {
                "function" == typeof t[e] && (t[e] = t[e].bind(t))
            }
            )
        }
        ;
        class tt extends T {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                if (super(),
                this.options = J(t),
                this.services = {},
                this.logger = E,
                this.modules = {
                    external: []
                },
                X(this),
                e && !this.isInitialized && !t.isClone) {
                    if (!this.options.initImmediate)
                        return this.init(t, e),
                        this;
                    setTimeout( () => {
                        this.init(t, e)
                    }
                    , 0)
                }
            }
            init() {
                var t = this;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                this.isInitializing = !0,
                "function" == typeof e && (n = e,
                e = {}),
                !e.defaultNS && !1 !== e.defaultNS && e.ns && (i(e.ns) ? e.defaultNS = e.ns : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
                let s = G();
                this.options = {
                    ...s,
                    ...this.options,
                    ...J(e)
                },
                "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                    ...s.interpolation,
                    ...this.options.interpolation
                }),
                void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator),
                void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
                let o = t => t ? "function" == typeof t ? new t : t : null;
                if (!this.options.isClone) {
                    let e;
                    this.modules.logger ? E.init(o(this.modules.logger), this.options) : E.init(null, this.options),
                    this.modules.formatter ? e = this.modules.formatter : "undefined" != typeof Intl && (e = H);
                    let n = new z(this.options);
                    this.store = new x(this.options.resources,this.options);
                    let i = this.services;
                    i.logger = E,
                    i.resourceStore = this.store,
                    i.languageUtils = n,
                    i.pluralResolver = new B(n,{
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }),
                    e && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (i.formatter = o(e),
                    i.formatter.init(i, this.options),
                    this.options.interpolation.format = i.formatter.format.bind(i.formatter)),
                    i.interpolator = new $(this.options),
                    i.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    },
                    i.backendConnector = new V(o(this.modules.backend),i.resourceStore,i,this.options),
                    i.backendConnector.on("*", function(e) {
                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            i[r - 1] = arguments[r];
                        t.emit(e, ...i)
                    }),
                    this.modules.languageDetector && (i.languageDetector = o(this.modules.languageDetector),
                    i.languageDetector.init && i.languageDetector.init(i, this.options.detection, this.options)),
                    this.modules.i18nFormat && (i.i18nFormat = o(this.modules.i18nFormat),
                    i.i18nFormat.init && i.i18nFormat.init(this)),
                    this.translator = new O(this.services,this.options),
                    this.translator.on("*", function(e) {
                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            i[r - 1] = arguments[r];
                        t.emit(e, ...i)
                    }),
                    this.modules.external.forEach(t => {
                        t.init && t.init(this)
                    }
                    )
                }
                if (this.format = this.options.interpolation.format,
                n || (n = q),
                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    let t = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    t.length > 0 && "dev" !== t[0] && (this.options.lng = t[0])
                }
                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"),
                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                    this[e] = function() {
                        return t.store[e](...arguments)
                    }
                }
                ),
                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                    this[e] = function() {
                        return t.store[e](...arguments),
                        t
                    }
                }
                );
                let a = r()
                  , l = () => {
                    let t = (t, e) => {
                        this.isInitializing = !1,
                        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                        this.isInitialized = !0,
                        this.options.isClone || this.logger.log("initialized", this.options),
                        this.emit("initialized", this.options),
                        a.resolve(e),
                        n(t, e)
                    }
                    ;
                    if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized)
                        return t(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, t)
                }
                ;
                return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                a
            }
            loadResources(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q
                  , n = e
                  , r = i(t) ? t : this.language;
                if ("function" == typeof t && (n = t),
                !this.options.resources || this.options.partialBundledLanguages) {
                    if (r && "cimode" === r.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length))
                        return n();
                    let t = []
                      , e = e => {
                        e && "cimode" !== e && this.services.languageUtils.toResolveHierarchy(e).forEach(e => {
                            "cimode" !== e && 0 > t.indexOf(e) && t.push(e)
                        }
                        )
                    }
                    ;
                    r ? e(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(t => e(t)),
                    this.options.preload && this.options.preload.forEach(t => e(t)),
                    this.services.backendConnector.load(t, this.options.ns, t => {
                        t || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language),
                        n(t)
                    }
                    )
                } else
                    n(null)
            }
            reloadResources(t, e, n) {
                let i = r();
                return "function" == typeof t && (n = t,
                t = void 0),
                "function" == typeof e && (n = e,
                e = void 0),
                t || (t = this.languages),
                e || (e = this.options.ns),
                n || (n = q),
                this.services.backendConnector.reload(t, e, t => {
                    i.resolve(),
                    n(t)
                }
                ),
                i
            }
            use(t) {
                if (!t)
                    throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!t.type)
                    throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return "backend" === t.type && (this.modules.backend = t),
                ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t),
                "languageDetector" === t.type && (this.modules.languageDetector = t),
                "i18nFormat" === t.type && (this.modules.i18nFormat = t),
                "postProcessor" === t.type && A.addPostProcessor(t),
                "formatter" === t.type && (this.modules.formatter = t),
                "3rdParty" === t.type && this.modules.external.push(t),
                this
            }
            setResolvedLanguage(t) {
                if (t && this.languages && !(["cimode", "dev"].indexOf(t) > -1))
                    for (let t = 0; t < this.languages.length; t++) {
                        let e = this.languages[t];
                        if (!(["cimode", "dev"].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
                            this.resolvedLanguage = e;
                            break
                        }
                    }
            }
            changeLanguage(t, e) {
                var n = this;
                this.isLanguageChangingTo = t;
                let s = r();
                this.emit("languageChanging", t);
                let o = t => {
                    this.language = t,
                    this.languages = this.services.languageUtils.toResolveHierarchy(t),
                    this.resolvedLanguage = void 0,
                    this.setResolvedLanguage(t)
                }
                  , a = (t, i) => {
                    i ? (o(i),
                    this.translator.changeLanguage(i),
                    this.isLanguageChangingTo = void 0,
                    this.emit("languageChanged", i),
                    this.logger.log("languageChanged", i)) : this.isLanguageChangingTo = void 0,
                    s.resolve(function() {
                        return n.t(...arguments)
                    }),
                    e && e(t, function() {
                        return n.t(...arguments)
                    })
                }
                  , l = e => {
                    t || e || !this.services.languageDetector || (e = []);
                    let n = i(e) ? e : this.services.languageUtils.getBestMatchFromCodes(e);
                    n && (this.language || o(n),
                    this.translator.language || this.translator.changeLanguage(n),
                    this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)),
                    this.loadResources(n, t => {
                        a(t, n)
                    }
                    )
                }
                ;
                return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(t) : l(this.services.languageDetector.detect()),
                s
            }
            getFixedT(t, e, n) {
                var r = this;
                let s = function(t, e) {
                    let i, o;
                    if ("object" != typeof e) {
                        for (var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++)
                            l[c - 2] = arguments[c];
                        i = r.options.overloadTranslationOptionHandler([t, e].concat(l))
                    } else
                        i = {
                            ...e
                        };
                    i.lng = i.lng || s.lng,
                    i.lngs = i.lngs || s.lngs,
                    i.ns = i.ns || s.ns,
                    "" !== i.keyPrefix && (i.keyPrefix = i.keyPrefix || n || s.keyPrefix);
                    let u = r.options.keySeparator || ".";
                    return o = i.keyPrefix && Array.isArray(t) ? t.map(t => `${i.keyPrefix}${u}${t}`) : i.keyPrefix ? `${i.keyPrefix}${u}${t}` : t,
                    r.t(o, i)
                };
                return i(t) ? s.lng = t : s.lngs = t,
                s.ns = e,
                s.keyPrefix = n,
                s
            }
            t() {
                return this.translator && this.translator.translate(...arguments)
            }
            exists() {
                return this.translator && this.translator.exists(...arguments)
            }
            setDefaultNamespace(t) {
                this.options.defaultNS = t
            }
            hasLoadedNamespace(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.isInitialized)
                    return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                    !1;
                if (!this.languages || !this.languages.length)
                    return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                    !1;
                let n = e.lng || this.resolvedLanguage || this.languages[0]
                  , i = !!this.options && this.options.fallbackLng
                  , r = this.languages[this.languages.length - 1];
                if ("cimode" === n.toLowerCase())
                    return !0;
                let s = (t, e) => {
                    let n = this.services.backendConnector.state[`${t}|${e}`];
                    return -1 === n || 0 === n || 2 === n
                }
                ;
                if (e.precheck) {
                    let t = e.precheck(this, s);
                    if (void 0 !== t)
                        return t
                }
                return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, t) && (!i || s(r, t)))
            }
            loadNamespaces(t, e) {
                let n = r();
                return this.options.ns ? (i(t) && (t = [t]),
                t.forEach(t => {
                    0 > this.options.ns.indexOf(t) && this.options.ns.push(t)
                }
                ),
                this.loadResources(t => {
                    n.resolve(),
                    e && e(t)
                }
                ),
                n) : (e && e(),
                Promise.resolve())
            }
            loadLanguages(t, e) {
                let n = r();
                i(t) && (t = [t]);
                let s = this.options.preload || []
                  , o = t.filter(t => 0 > s.indexOf(t) && this.services.languageUtils.isSupportedCode(t));
                return o.length ? (this.options.preload = s.concat(o),
                this.loadResources(t => {
                    n.resolve(),
                    e && e(t)
                }
                ),
                n) : (e && e(),
                Promise.resolve())
            }
            dir(t) {
                return (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                t) ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf((this.services && this.services.languageUtils || new z(G())).getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
            }
            static createInstance() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                return new tt(t,e)
            }
            cloneInstance() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q
                  , n = t.forkResourceStore;
                n && delete t.forkResourceStore;
                let i = {
                    ...this.options,
                    ...t,
                    isClone: !0
                }
                  , r = new tt(i);
                return (void 0 !== t.debug || void 0 !== t.prefix) && (r.logger = r.logger.clone(t)),
                ["store", "services", "language"].forEach(t => {
                    r[t] = this[t]
                }
                ),
                r.services = {
                    ...this.services
                },
                r.services.utils = {
                    hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                },
                n && (r.store = new x(this.store.data,i),
                r.services.resourceStore = r.store),
                r.translator = new O(r.services,i),
                r.translator.on("*", function(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        n[i - 1] = arguments[i];
                    r.emit(t, ...n)
                }),
                r.init(i, e),
                r.translator.options = i,
                r.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                },
                r
            }
            toJSON() {
                return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                    resolvedLanguage: this.resolvedLanguage
                }
            }
        }
        let te = tt.createInstance();
        te.createInstance = tt.createInstance,
        te.createInstance,
        te.dir,
        te.init,
        te.loadResources,
        te.reloadResources,
        te.use,
        te.changeLanguage,
        te.getFixedT,
        te.t,
        te.exists,
        te.setDefaultNamespace,
        te.hasLoadedNamespace,
        te.loadNamespaces,
        te.loadLanguages
    }
}]);
