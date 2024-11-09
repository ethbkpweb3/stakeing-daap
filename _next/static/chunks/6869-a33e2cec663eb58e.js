(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6869], {
    3179: function(e, t, r) {
        "use strict";
        var n = r(9109).Buffer
          , o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.map = t.array = t.rustEnum = t.str = t.vecU8 = t.tagged = t.vec = t.bool = t.option = t.publicKey = t.i256 = t.u256 = t.i128 = t.u128 = t.i64 = t.u64 = t.struct = t.f64 = t.f32 = t.i32 = t.u32 = t.i16 = t.u16 = t.i8 = t.u8 = void 0;
        let i = r(19632)
          , s = r(45429)
          , l = o(r(58171));
        var a = r(19632);
        Object.defineProperty(t, "u8", {
            enumerable: !0,
            get: function() {
                return a.u8
            }
        }),
        Object.defineProperty(t, "i8", {
            enumerable: !0,
            get: function() {
                return a.s8
            }
        }),
        Object.defineProperty(t, "u16", {
            enumerable: !0,
            get: function() {
                return a.u16
            }
        }),
        Object.defineProperty(t, "i16", {
            enumerable: !0,
            get: function() {
                return a.s16
            }
        }),
        Object.defineProperty(t, "u32", {
            enumerable: !0,
            get: function() {
                return a.u32
            }
        }),
        Object.defineProperty(t, "i32", {
            enumerable: !0,
            get: function() {
                return a.s32
            }
        }),
        Object.defineProperty(t, "f32", {
            enumerable: !0,
            get: function() {
                return a.f32
            }
        }),
        Object.defineProperty(t, "f64", {
            enumerable: !0,
            get: function() {
                return a.f64
            }
        }),
        Object.defineProperty(t, "struct", {
            enumerable: !0,
            get: function() {
                return a.struct
            }
        });
        class u extends i.Layout {
            constructor(e, t, r) {
                super(e, r),
                this.blob = (0,
                i.blob)(e),
                this.signed = t
            }
            decode(e, t=0) {
                let r = new l.default(this.blob.decode(e, t),10,"le");
                return this.signed ? r.fromTwos(8 * this.span).clone() : r
            }
            encode(e, t, r=0) {
                return this.signed && (e = e.toTwos(8 * this.span)),
                this.blob.encode(e.toArrayLike(n, "le", this.span), t, r)
            }
        }
        function c(e) {
            return new u(8,!1,e)
        }
        function d(e) {
            return new u(8,!0,e)
        }
        function f(e) {
            return new u(16,!1,e)
        }
        function h(e) {
            return new u(16,!0,e)
        }
        function p(e) {
            return new u(32,!1,e)
        }
        function y(e) {
            return new u(32,!0,e)
        }
        t.u64 = c,
        t.i64 = d,
        t.u128 = f,
        t.i128 = h,
        t.u256 = p,
        t.i256 = y;
        class v extends i.Layout {
            constructor(e, t, r, n) {
                super(e.span, n),
                this.layout = e,
                this.decoder = t,
                this.encoder = r
            }
            decode(e, t) {
                return this.decoder(this.layout.decode(e, t))
            }
            encode(e, t, r) {
                return this.layout.encode(this.encoder(e), t, r)
            }
            getSpan(e, t) {
                return this.layout.getSpan(e, t)
            }
        }
        function m(e) {
            return new v((0,
            i.blob)(32),e => new s.PublicKey(e),e => e.toBuffer(),e)
        }
        t.publicKey = m;
        class w extends i.Layout {
            constructor(e, t) {
                super(-1, t),
                this.layout = e,
                this.discriminator = (0,
                i.u8)()
            }
            encode(e, t, r=0) {
                return null == e ? this.discriminator.encode(0, t, r) : (this.discriminator.encode(1, t, r),
                this.layout.encode(e, t, r + 1) + 1)
            }
            decode(e, t=0) {
                let r = this.discriminator.decode(e, t);
                if (0 === r)
                    return null;
                if (1 === r)
                    return this.layout.decode(e, t + 1);
                throw Error("Invalid option " + this.property)
            }
            getSpan(e, t=0) {
                let r = this.discriminator.decode(e, t);
                if (0 === r)
                    return 1;
                if (1 === r)
                    return this.layout.getSpan(e, t + 1) + 1;
                throw Error("Invalid option " + this.property)
            }
        }
        function g(e, t) {
            return new w(e,t)
        }
        function b(e) {
            return new v((0,
            i.u8)(),E,x,e)
        }
        function E(e) {
            if (0 === e)
                return !1;
            if (1 === e)
                return !0;
            throw Error("Invalid bool: " + e)
        }
        function x(e) {
            return e ? 1 : 0
        }
        function _(e, t) {
            let r = (0,
            i.u32)("length");
            return new v((0,
            i.struct)([r, (0,
            i.seq)(e, (0,
            i.offset)(r, -r.span), "values")]), ({values: e}) => e,e => ({
                values: e
            }),t)
        }
        function S(e, t, r) {
            function n({tag: t, data: r}) {
                if (!t.eq(e))
                    throw Error("Invalid tag, expected: " + e.toString("hex") + ", got: " + t.toString("hex"));
                return r
            }
            return new v((0,
            i.struct)([c("tag"), t.replicate("data")]),n,t => ({
                tag: e,
                data: t
            }),r)
        }
        function L(e) {
            let t = (0,
            i.u32)("length");
            return new v((0,
            i.struct)([t, (0,
            i.blob)((0,
            i.offset)(t, -t.span), "data")]), ({data: e}) => e,e => ({
                data: e
            }),e)
        }
        function A(e) {
            return new v(L(),e => e.toString("utf-8"),e => n.from(e, "utf-8"),e)
        }
        function O(e, t, r) {
            let n = (0,
            i.union)(null != r ? r : (0,
            i.u8)(), t);
            return e.forEach( (e, t) => n.addVariant(t, e, e.property)),
            n
        }
        function k(e, t, r) {
            return new v((0,
            i.struct)([(0,
            i.seq)(e, t, "values")]), ({values: e}) => e,e => ({
                values: e
            }),r)
        }
        t.option = g,
        t.bool = b,
        t.vec = _,
        t.tagged = S,
        t.vecU8 = L,
        t.str = A,
        t.rustEnum = O,
        t.array = k;
        class T extends i.Layout {
            constructor(e, t, r) {
                super(e.span + t.span, r),
                this.keyLayout = e,
                this.valueLayout = t
            }
            decode(e, t) {
                return t = t || 0,
                [this.keyLayout.decode(e, t), this.valueLayout.decode(e, t + this.keyLayout.getSpan(e, t))]
            }
            encode(e, t, r) {
                r = r || 0;
                let n = this.keyLayout.encode(e[0], t, r)
                  , o = this.valueLayout.encode(e[1], t, r + n);
                return n + o
            }
            getSpan(e, t) {
                return this.keyLayout.getSpan(e, t) + this.valueLayout.getSpan(e, t)
            }
        }
        function R(e, t, r) {
            let n = (0,
            i.u32)("length");
            return new v((0,
            i.struct)([n, (0,
            i.seq)(new T(e,t), (0,
            i.offset)(n, -n.span), "values")]), ({values: e}) => new Map(e),e => ({
                values: Array.from(e.entries())
            }),r)
        }
        t.map = R
    },
    19467: function(e) {
        "use strict";
        let t = /[\p{Lu}]/u
          , r = /[\p{Ll}]/u
          , n = /^[\p{Lu}](?![\p{Lu}])/gu
          , o = /([\p{Alpha}\p{N}_]|$)/u
          , i = /[_.\- ]+/
          , s = RegExp("^" + i.source)
          , l = RegExp(i.source + o.source, "gu")
          , a = RegExp("\\d+" + o.source, "gu")
          , u = (e, n, o) => {
            let i = !1
              , s = !1
              , l = !1;
            for (let a = 0; a < e.length; a++) {
                let u = e[a];
                i && t.test(u) ? (e = e.slice(0, a) + "-" + e.slice(a),
                i = !1,
                l = s,
                s = !0,
                a++) : s && l && r.test(u) ? (e = e.slice(0, a - 1) + "-" + e.slice(a - 1),
                l = s,
                s = !1,
                i = !0) : (i = n(u) === u && o(u) !== u,
                l = s,
                s = o(u) === u && n(u) !== u)
            }
            return e
        }
          , c = (e, t) => (n.lastIndex = 0,
        e.replace(n, e => t(e)))
          , d = (e, t) => (l.lastIndex = 0,
        a.lastIndex = 0,
        e.replace(l, (e, r) => t(r)).replace(a, e => t(e)))
          , f = (e, t) => {
            if (!("string" == typeof e || Array.isArray(e)))
                throw TypeError("Expected the input to be `string | string[]`");
            if (t = {
                pascalCase: !1,
                preserveConsecutiveUppercase: !1,
                ...t
            },
            0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length)
                return "";
            let r = !1 === t.locale ? e => e.toLowerCase() : e => e.toLocaleLowerCase(t.locale)
              , n = !1 === t.locale ? e => e.toUpperCase() : e => e.toLocaleUpperCase(t.locale);
            return 1 === e.length ? t.pascalCase ? n(e) : r(e) : (e !== r(e) && (e = u(e, r, n)),
            e = e.replace(s, ""),
            e = t.preserveConsecutiveUppercase ? c(e, r) : r(e),
            t.pascalCase && (e = n(e.charAt(0)) + e.slice(1)),
            d(e, n))
        }
        ;
        e.exports = f,
        e.exports.default = f
    },
    91587: function(e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty
          , r = "~";
        function n() {}
        function o(e, t, r) {
            this.fn = e,
            this.context = t,
            this.once = r || !1
        }
        function i(e, t, n, i, s) {
            if ("function" != typeof n)
                throw TypeError("The listener must be a function");
            var l = new o(n,i || e,s)
              , a = r ? r + t : t;
            return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], l] : e._events[a].push(l) : (e._events[a] = l,
            e._eventsCount++),
            e
        }
        function s(e, t) {
            0 == --e._eventsCount ? e._events = new n : delete e._events[t]
        }
        function l() {
            this._events = new n,
            this._eventsCount = 0
        }
        Object.create && (n.prototype = Object.create(null),
        new n().__proto__ || (r = !1)),
        l.prototype.eventNames = function() {
            var e, n, o = [];
            if (0 === this._eventsCount)
                return o;
            for (n in e = this._events)
                t.call(e, n) && o.push(r ? n.slice(1) : n);
            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
        }
        ,
        l.prototype.listeners = function(e) {
            var t = r ? r + e : e
              , n = this._events[t];
            if (!n)
                return [];
            if (n.fn)
                return [n.fn];
            for (var o = 0, i = n.length, s = Array(i); o < i; o++)
                s[o] = n[o].fn;
            return s
        }
        ,
        l.prototype.listenerCount = function(e) {
            var t = r ? r + e : e
              , n = this._events[t];
            return n ? n.fn ? 1 : n.length : 0
        }
        ,
        l.prototype.emit = function(e, t, n, o, i, s) {
            var l = r ? r + e : e;
            if (!this._events[l])
                return !1;
            var a, u, c = this._events[l], d = arguments.length;
            if (c.fn) {
                switch (c.once && this.removeListener(e, c.fn, void 0, !0),
                d) {
                case 1:
                    return c.fn.call(c.context),
                    !0;
                case 2:
                    return c.fn.call(c.context, t),
                    !0;
                case 3:
                    return c.fn.call(c.context, t, n),
                    !0;
                case 4:
                    return c.fn.call(c.context, t, n, o),
                    !0;
                case 5:
                    return c.fn.call(c.context, t, n, o, i),
                    !0;
                case 6:
                    return c.fn.call(c.context, t, n, o, i, s),
                    !0
                }
                for (u = 1,
                a = Array(d - 1); u < d; u++)
                    a[u - 1] = arguments[u];
                c.fn.apply(c.context, a)
            } else {
                var f, h = c.length;
                for (u = 0; u < h; u++)
                    switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0),
                    d) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, t);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, t, n);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, t, n, o);
                        break;
                    default:
                        if (!a)
                            for (f = 1,
                            a = Array(d - 1); f < d; f++)
                                a[f - 1] = arguments[f];
                        c[u].fn.apply(c[u].context, a)
                    }
            }
            return !0
        }
        ,
        l.prototype.on = function(e, t, r) {
            return i(this, e, t, r, !1)
        }
        ,
        l.prototype.once = function(e, t, r) {
            return i(this, e, t, r, !0)
        }
        ,
        l.prototype.removeListener = function(e, t, n, o) {
            var i = r ? r + e : e;
            if (!this._events[i])
                return this;
            if (!t)
                return s(this, i),
                this;
            var l = this._events[i];
            if (l.fn)
                l.fn !== t || o && !l.once || n && l.context !== n || s(this, i);
            else {
                for (var a = 0, u = [], c = l.length; a < c; a++)
                    (l[a].fn !== t || o && !l[a].once || n && l[a].context !== n) && u.push(l[a]);
                u.length ? this._events[i] = 1 === u.length ? u[0] : u : s(this, i)
            }
            return this
        }
        ,
        l.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = r ? r + e : e,
            this._events[t] && s(this, t)) : (this._events = new n,
            this._eventsCount = 0),
            this
        }
        ,
        l.prototype.off = l.prototype.removeListener,
        l.prototype.addListener = l.prototype.on,
        l.prefixed = r,
        l.EventEmitter = l,
        e.exports = l
    },
    19632: function(e, t, r) {
        "use strict";
        var n = r(9109).Buffer;
        /**
 * Support for translating between Buffer instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */
        class o {
            constructor(e, t) {
                if (!Number.isInteger(e))
                    throw TypeError("span must be an integer");
                this.span = e,
                this.property = t
            }
            makeDestinationObject() {
                return {}
            }
            decode(e, t) {
                throw Error("Layout is abstract")
            }
            encode(e, t, r) {
                throw Error("Layout is abstract")
            }
            getSpan(e, t) {
                if (0 > this.span)
                    throw RangeError("indeterminate span");
                return this.span
            }
            replicate(e) {
                let t = Object.create(this.constructor.prototype);
                return Object.assign(t, this),
                t.property = e,
                t
            }
            fromArray(e) {}
        }
        function i(e, t) {
            return t.property ? e + "[" + t.property + "]" : e
        }
        function s(e, t) {
            if ("function" != typeof e)
                throw TypeError("Class must be constructor");
            if (e.hasOwnProperty("layout_"))
                throw Error("Class is already bound to a layout");
            if (!(t && t instanceof o))
                throw TypeError("layout must be a Layout");
            if (t.hasOwnProperty("boundConstructor_"))
                throw Error("layout is already bound to a constructor");
            e.layout_ = t,
            t.boundConstructor_ = e,
            t.makeDestinationObject = () => new e,
            Object.defineProperty(e.prototype, "encode", {
                value: function(e, r) {
                    return t.encode(this, e, r)
                },
                writable: !0
            }),
            Object.defineProperty(e, "decode", {
                value: function(e, r) {
                    return t.decode(e, r)
                },
                writable: !0
            })
        }
        t.Layout = o,
        t.nameWithProperty = i,
        t.bindConstructorLayout = s;
        class l extends o {
            isCount() {
                throw Error("ExternalLayout is abstract")
            }
        }
        class a extends l {
            constructor(e, t) {
                if (void 0 === e && (e = 1),
                !Number.isInteger(e) || 0 >= e)
                    throw TypeError("elementSpan must be a (positive) integer");
                super(-1, t),
                this.elementSpan = e
            }
            isCount() {
                return !0
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                Math.floor((e.length - t) / this.elementSpan)
            }
            encode(e, t, r) {
                return 0
            }
        }
        class u extends l {
            constructor(e, t, r) {
                if (!(e instanceof o))
                    throw TypeError("layout must be a Layout");
                if (void 0 === t)
                    t = 0;
                else if (!Number.isInteger(t))
                    throw TypeError("offset must be integer or undefined");
                super(e.span, r || e.property),
                this.layout = e,
                this.offset = t
            }
            isCount() {
                return this.layout instanceof c || this.layout instanceof d
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                this.layout.decode(e, t + this.offset)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                this.layout.encode(e, t, r + this.offset)
            }
        }
        class c extends o {
            constructor(e, t) {
                if (super(e, t),
                6 < this.span)
                    throw RangeError("span must not exceed 6 bytes")
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readUIntLE(t, this.span)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeUIntLE(e, r, this.span),
                this.span
            }
        }
        class d extends o {
            constructor(e, t) {
                if (super(e, t),
                6 < this.span)
                    throw RangeError("span must not exceed 6 bytes")
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readUIntBE(t, this.span)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeUIntBE(e, r, this.span),
                this.span
            }
        }
        class f extends o {
            constructor(e, t) {
                if (super(e, t),
                6 < this.span)
                    throw RangeError("span must not exceed 6 bytes")
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readIntLE(t, this.span)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeIntLE(e, r, this.span),
                this.span
            }
        }
        class h extends o {
            constructor(e, t) {
                if (super(e, t),
                6 < this.span)
                    throw RangeError("span must not exceed 6 bytes")
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readIntBE(t, this.span)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeIntBE(e, r, this.span),
                this.span
            }
        }
        let p = 4294967296;
        function y(e) {
            let t = Math.floor(e / p)
              , r = e - t * p;
            return {
                hi32: t,
                lo32: r
            }
        }
        function v(e, t) {
            return e * p + t
        }
        class m extends o {
            constructor(e) {
                super(8, e)
            }
            decode(e, t) {
                void 0 === t && (t = 0);
                let r = e.readUInt32LE(t);
                return v(e.readUInt32LE(t + 4), r)
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = y(e);
                return t.writeUInt32LE(n.lo32, r),
                t.writeUInt32LE(n.hi32, r + 4),
                8
            }
        }
        class w extends o {
            constructor(e) {
                super(8, e)
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                v(e.readUInt32BE(t), e.readUInt32BE(t + 4))
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = y(e);
                return t.writeUInt32BE(n.hi32, r),
                t.writeUInt32BE(n.lo32, r + 4),
                8
            }
        }
        class g extends o {
            constructor(e) {
                super(8, e)
            }
            decode(e, t) {
                void 0 === t && (t = 0);
                let r = e.readUInt32LE(t);
                return v(e.readInt32LE(t + 4), r)
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = y(e);
                return t.writeUInt32LE(n.lo32, r),
                t.writeInt32LE(n.hi32, r + 4),
                8
            }
        }
        class b extends o {
            constructor(e) {
                super(8, e)
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                v(e.readInt32BE(t), e.readUInt32BE(t + 4))
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = y(e);
                return t.writeInt32BE(n.hi32, r),
                t.writeUInt32BE(n.lo32, r + 4),
                8
            }
        }
        class E extends o {
            constructor(e) {
                super(4, e)
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readFloatLE(t)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeFloatLE(e, r),
                4
            }
        }
        class x extends o {
            constructor(e) {
                super(4, e)
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readFloatBE(t)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeFloatBE(e, r),
                4
            }
        }
        class _ extends o {
            constructor(e) {
                super(8, e)
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readDoubleLE(t)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeDoubleLE(e, r),
                8
            }
        }
        class S extends o {
            constructor(e) {
                super(8, e)
            }
            decode(e, t) {
                return void 0 === t && (t = 0),
                e.readDoubleBE(t)
            }
            encode(e, t, r) {
                return void 0 === r && (r = 0),
                t.writeDoubleBE(e, r),
                8
            }
        }
        class L extends o {
            constructor(e, t, r) {
                if (!(e instanceof o))
                    throw TypeError("elementLayout must be a Layout");
                if (!(t instanceof l && t.isCount() || Number.isInteger(t) && 0 <= t))
                    throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                let n = -1;
                t instanceof l || !(0 < e.span) || (n = t * e.span),
                super(n, r),
                this.elementLayout = e,
                this.count = t
            }
            getSpan(e, t) {
                if (0 <= this.span)
                    return this.span;
                void 0 === t && (t = 0);
                let r = 0
                  , n = this.count;
                if (n instanceof l && (n = n.decode(e, t)),
                0 < this.elementLayout.span)
                    r = n * this.elementLayout.span;
                else {
                    let o = 0;
                    for (; o < n; )
                        r += this.elementLayout.getSpan(e, t + r),
                        ++o
                }
                return r
            }
            decode(e, t) {
                void 0 === t && (t = 0);
                let r = []
                  , n = 0
                  , o = this.count;
                for (o instanceof l && (o = o.decode(e, t)); n < o; )
                    r.push(this.elementLayout.decode(e, t)),
                    t += this.elementLayout.getSpan(e, t),
                    n += 1;
                return r
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = this.elementLayout
                  , o = e.reduce( (e, o) => e + n.encode(o, t, r + e), 0);
                return this.count instanceof l && this.count.encode(e.length, t, r),
                o
            }
        }
        class A extends o {
            constructor(e, t, r) {
                if (!(Array.isArray(e) && e.reduce( (e, t) => e && t instanceof o, !0)))
                    throw TypeError("fields must be array of Layout instances");
                for (let n of ("boolean" == typeof t && void 0 === r && (r = t,
                t = void 0),
                e))
                    if (0 > n.span && void 0 === n.property)
                        throw Error("fields cannot contain unnamed variable-length layout");
                let n = -1;
                try {
                    n = e.reduce( (e, t) => e + t.getSpan(), 0)
                } catch (e) {}
                super(n, t),
                this.fields = e,
                this.decodePrefixes = !!r
            }
            getSpan(e, t) {
                if (0 <= this.span)
                    return this.span;
                void 0 === t && (t = 0);
                let r = 0;
                try {
                    r = this.fields.reduce( (r, n) => {
                        let o = n.getSpan(e, t);
                        return t += o,
                        r + o
                    }
                    , 0)
                } catch (e) {
                    throw RangeError("indeterminate span")
                }
                return r
            }
            decode(e, t) {
                void 0 === t && (t = 0);
                let r = this.makeDestinationObject();
                for (let n of this.fields)
                    if (void 0 !== n.property && (r[n.property] = n.decode(e, t)),
                    t += n.getSpan(e, t),
                    this.decodePrefixes && e.length === t)
                        break;
                return r
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = r
                  , o = 0
                  , i = 0;
                for (let n of this.fields) {
                    let s = n.span;
                    if (i = 0 < s ? s : 0,
                    void 0 !== n.property) {
                        let o = e[n.property];
                        void 0 !== o && (i = n.encode(o, t, r),
                        0 > s && (s = n.getSpan(t, r)))
                    }
                    o = r,
                    r += s
                }
                return o + i - n
            }
            fromArray(e) {
                let t = this.makeDestinationObject();
                for (let r of this.fields)
                    void 0 !== r.property && 0 < e.length && (t[r.property] = e.shift());
                return t
            }
            layoutFor(e) {
                if ("string" != typeof e)
                    throw TypeError("property must be string");
                for (let t of this.fields)
                    if (t.property === e)
                        return t
            }
            offsetOf(e) {
                if ("string" != typeof e)
                    throw TypeError("property must be string");
                let t = 0;
                for (let r of this.fields) {
                    if (r.property === e)
                        return t;
                    0 > r.span ? t = -1 : 0 <= t && (t += r.span)
                }
            }
        }
        class O {
            constructor(e) {
                this.property = e
            }
            decode() {
                throw Error("UnionDiscriminator is abstract")
            }
            encode() {
                throw Error("UnionDiscriminator is abstract")
            }
        }
        class k extends O {
            constructor(e, t) {
                if (!(e instanceof l && e.isCount()))
                    throw TypeError("layout must be an unsigned integer ExternalLayout");
                super(t || e.property || "variant"),
                this.layout = e
            }
            decode(e, t) {
                return this.layout.decode(e, t)
            }
            encode(e, t, r) {
                return this.layout.encode(e, t, r)
            }
        }
        class T extends o {
            constructor(e, t, r) {
                let n = e instanceof c || e instanceof d;
                if (n)
                    e = new k(new u(e));
                else if (e instanceof l && e.isCount())
                    e = new k(e);
                else if (!(e instanceof O))
                    throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                if (void 0 === t && (t = null),
                !(null === t || t instanceof o))
                    throw TypeError("defaultLayout must be null or a Layout");
                if (null !== t) {
                    if (0 > t.span)
                        throw Error("defaultLayout must have constant span");
                    void 0 === t.property && (t = t.replicate("content"))
                }
                let i = -1;
                t && 0 <= (i = t.span) && n && (i += e.layout.span),
                super(i, r),
                this.discriminator = e,
                this.usesPrefixDiscriminator = n,
                this.defaultLayout = t,
                this.registry = {};
                let s = this.defaultGetSourceVariant.bind(this);
                this.getSourceVariant = function(e) {
                    return s(e)
                }
                ,
                this.configGetSourceVariant = function(e) {
                    s = e.bind(this)
                }
            }
            getSpan(e, t) {
                if (0 <= this.span)
                    return this.span;
                void 0 === t && (t = 0);
                let r = this.getVariant(e, t);
                if (!r)
                    throw Error("unable to determine span for unrecognized variant");
                return r.getSpan(e, t)
            }
            defaultGetSourceVariant(e) {
                if (e.hasOwnProperty(this.discriminator.property)) {
                    if (this.defaultLayout && e.hasOwnProperty(this.defaultLayout.property))
                        return;
                    let t = this.registry[e[this.discriminator.property]];
                    if (t && (!t.layout || e.hasOwnProperty(t.property)))
                        return t
                } else
                    for (let t in this.registry) {
                        let r = this.registry[t];
                        if (e.hasOwnProperty(r.property))
                            return r
                    }
                throw Error("unable to infer src variant")
            }
            decode(e, t) {
                let r;
                void 0 === t && (t = 0);
                let n = this.discriminator
                  , o = n.decode(e, t)
                  , i = this.registry[o];
                if (void 0 === i) {
                    let s = 0;
                    i = this.defaultLayout,
                    this.usesPrefixDiscriminator && (s = n.layout.span),
                    (r = this.makeDestinationObject())[n.property] = o,
                    r[i.property] = this.defaultLayout.decode(e, t + s)
                } else
                    r = i.decode(e, t);
                return r
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = this.getSourceVariant(e);
                if (void 0 === n) {
                    let n = this.discriminator
                      , o = this.defaultLayout
                      , i = 0;
                    return this.usesPrefixDiscriminator && (i = n.layout.span),
                    n.encode(e[n.property], t, r),
                    i + o.encode(e[o.property], t, r + i)
                }
                return n.encode(e, t, r)
            }
            addVariant(e, t, r) {
                let n = new R(this,e,t,r);
                return this.registry[e] = n,
                n
            }
            getVariant(e, t) {
                let r = e;
                return n.isBuffer(e) && (void 0 === t && (t = 0),
                r = this.discriminator.decode(e, t)),
                this.registry[r]
            }
        }
        class R extends o {
            constructor(e, t, r, n) {
                if (!(e instanceof T))
                    throw TypeError("union must be a Union");
                if (!Number.isInteger(t) || 0 > t)
                    throw TypeError("variant must be a (non-negative) integer");
                if ("string" == typeof r && void 0 === n && (n = r,
                r = null),
                r) {
                    if (!(r instanceof o))
                        throw TypeError("layout must be a Layout");
                    if (null !== e.defaultLayout && 0 <= r.span && r.span > e.defaultLayout.span)
                        throw Error("variant span exceeds span of containing union");
                    if ("string" != typeof n)
                        throw TypeError("variant must have a String property")
                }
                let i = e.span;
                0 > e.span && 0 <= (i = r ? r.span : 0) && e.usesPrefixDiscriminator && (i += e.discriminator.layout.span),
                super(i, n),
                this.union = e,
                this.variant = t,
                this.layout = r || null
            }
            getSpan(e, t) {
                if (0 <= this.span)
                    return this.span;
                void 0 === t && (t = 0);
                let r = 0;
                return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span),
                r + this.layout.getSpan(e, t + r)
            }
            decode(e, t) {
                let r = this.makeDestinationObject();
                if (void 0 === t && (t = 0),
                this !== this.union.getVariant(e, t))
                    throw Error("variant mismatch");
                let n = 0;
                return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span),
                this.layout ? r[this.property] = this.layout.decode(e, t + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant),
                r
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = 0;
                if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span),
                this.layout && !e.hasOwnProperty(this.property))
                    throw TypeError("variant lacks property " + this.property);
                this.union.discriminator.encode(this.variant, t, r);
                let o = n;
                if (this.layout && (this.layout.encode(e[this.property], t, r + n),
                o += this.layout.getSpan(t, r + n),
                0 <= this.union.span && o > this.union.span))
                    throw Error("encoded variant overruns containing union");
                return o
            }
            fromArray(e) {
                if (this.layout)
                    return this.layout.fromArray(e)
            }
        }
        function C(e) {
            return 0 > e && (e += 4294967296),
            e
        }
        class B extends o {
            constructor(e, t, r) {
                if (!(e instanceof c || e instanceof d))
                    throw TypeError("word must be a UInt or UIntBE layout");
                if ("string" == typeof t && void 0 === r && (r = t,
                t = void 0),
                4 < e.span)
                    throw RangeError("word cannot exceed 32 bits");
                super(e.span, r),
                this.word = e,
                this.msb = !!t,
                this.fields = [];
                let n = 0;
                this._packedSetValue = function(e) {
                    return n = C(e),
                    this
                }
                ,
                this._packedGetValue = function() {
                    return n
                }
            }
            decode(e, t) {
                let r = this.makeDestinationObject();
                void 0 === t && (t = 0);
                let n = this.word.decode(e, t);
                for (let e of (this._packedSetValue(n),
                this.fields))
                    void 0 !== e.property && (r[e.property] = e.decode(n));
                return r
            }
            encode(e, t, r) {
                void 0 === r && (r = 0);
                let n = this.word.decode(t, r);
                for (let t of (this._packedSetValue(n),
                this.fields))
                    if (void 0 !== t.property) {
                        let r = e[t.property];
                        void 0 !== r && t.encode(r)
                    }
                return this.word.encode(this._packedGetValue(), t, r)
            }
            addField(e, t) {
                let r = new I(this,e,t);
                return this.fields.push(r),
                r
            }
            addBoolean(e) {
                let t = new N(this,e);
                return this.fields.push(t),
                t
            }
            fieldFor(e) {
                if ("string" != typeof e)
                    throw TypeError("property must be string");
                for (let t of this.fields)
                    if (t.property === e)
                        return t
            }
        }
        class I {
            constructor(e, t, r) {
                if (!(e instanceof B))
                    throw TypeError("container must be a BitStructure");
                if (!Number.isInteger(t) || 0 >= t)
                    throw TypeError("bits must be positive integer");
                let n = 8 * e.span
                  , o = e.fields.reduce( (e, t) => e + t.bits, 0);
                if (t + o > n)
                    throw Error("bits too long for span remainder (" + (n - o) + " of " + n + " remain)");
                this.container = e,
                this.bits = t,
                this.valueMask = (1 << t) - 1,
                32 === t && (this.valueMask = 4294967295),
                this.start = o,
                this.container.msb && (this.start = n - o - t),
                this.wordMask = C(this.valueMask << this.start),
                this.property = r
            }
            decode() {
                return C(this.container._packedGetValue() & this.wordMask) >>> this.start
            }
            encode(e) {
                if (!Number.isInteger(e) || e !== C(e & this.valueMask))
                    throw TypeError(i("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                let t = this.container._packedGetValue()
                  , r = C(e << this.start);
                this.container._packedSetValue(C(t & ~this.wordMask) | r)
            }
        }
        class N extends I {
            constructor(e, t) {
                super(e, 1, t)
            }
            decode(e, t) {
                return !!I.prototype.decode.call(this, e, t)
            }
            encode(e) {
                return "boolean" == typeof e && (e = +e),
                I.prototype.encode.call(this, e)
            }
        }
        class D extends o {
            constructor(e, t) {
                if (!(e instanceof l && e.isCount() || Number.isInteger(e) && 0 <= e))
                    throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                let r = -1;
                e instanceof l || (r = e),
                super(r, t),
                this.length = e
            }
            getSpan(e, t) {
                let r = this.span;
                return 0 > r && (r = this.length.decode(e, t)),
                r
            }
            decode(e, t) {
                void 0 === t && (t = 0);
                let r = this.span;
                return 0 > r && (r = this.length.decode(e, t)),
                e.slice(t, t + r)
            }
            encode(e, t, r) {
                let o = this.length;
                if (this.length instanceof l && (o = e.length),
                !(n.isBuffer(e) && o === e.length))
                    throw TypeError(i("Blob.encode", this) + " requires (length " + o + ") Buffer as src");
                if (r + o > t.length)
                    throw RangeError("encoding overruns Buffer");
                return t.write(e.toString("hex"), r, o, "hex"),
                this.length instanceof l && this.length.encode(o, t, r),
                o
            }
        }
        class j extends o {
            constructor(e) {
                super(-1, e)
            }
            getSpan(e, t) {
                if (!n.isBuffer(e))
                    throw TypeError("b must be a Buffer");
                void 0 === t && (t = 0);
                let r = t;
                for (; r < e.length && 0 !== e[r]; )
                    r += 1;
                return 1 + r - t
            }
            decode(e, t, r) {
                void 0 === t && (t = 0);
                let n = this.getSpan(e, t);
                return e.slice(t, t + n - 1).toString("utf-8")
            }
            encode(e, t, r) {
                void 0 === r && (r = 0),
                "string" != typeof e && (e = e.toString());
                let o = new n(e,"utf8")
                  , i = o.length;
                if (r + i > t.length)
                    throw RangeError("encoding overruns Buffer");
                return o.copy(t, r),
                t[r + i] = 0,
                i + 1
            }
        }
        class M extends o {
            constructor(e, t) {
                if ("string" == typeof e && void 0 === t && (t = e,
                e = void 0),
                void 0 === e)
                    e = -1;
                else if (!Number.isInteger(e))
                    throw TypeError("maxSpan must be an integer");
                super(-1, t),
                this.maxSpan = e
            }
            getSpan(e, t) {
                if (!n.isBuffer(e))
                    throw TypeError("b must be a Buffer");
                return void 0 === t && (t = 0),
                e.length - t
            }
            decode(e, t, r) {
                void 0 === t && (t = 0);
                let n = this.getSpan(e, t);
                if (0 <= this.maxSpan && this.maxSpan < n)
                    throw RangeError("text length exceeds maxSpan");
                return e.slice(t, t + n).toString("utf-8")
            }
            encode(e, t, r) {
                void 0 === r && (r = 0),
                "string" != typeof e && (e = e.toString());
                let o = new n(e,"utf8")
                  , i = o.length;
                if (0 <= this.maxSpan && this.maxSpan < i)
                    throw RangeError("text length exceeds maxSpan");
                if (r + i > t.length)
                    throw RangeError("encoding overruns Buffer");
                return o.copy(t, r),
                i
            }
        }
        class P extends o {
            constructor(e, t) {
                super(0, t),
                this.value = e
            }
            decode(e, t, r) {
                return this.value
            }
            encode(e, t, r) {
                return 0
            }
        }
        t.ExternalLayout = l,
        t.GreedyCount = a,
        t.OffsetLayout = u,
        t.UInt = c,
        t.UIntBE = d,
        t.Int = f,
        t.IntBE = h,
        t.Float = E,
        t.FloatBE = x,
        t.Double = _,
        t.DoubleBE = S,
        t.Sequence = L,
        t.Structure = A,
        t.UnionDiscriminator = O,
        t.UnionLayoutDiscriminator = k,
        t.Union = T,
        t.VariantLayout = R,
        t.BitStructure = B,
        t.BitField = I,
        t.Boolean = N,
        t.Blob = D,
        t.CString = j,
        t.UTF8 = M,
        t.Constant = P,
        t.greedy = (e, t) => new a(e,t),
        t.offset = (e, t, r) => new u(e,t,r),
        t.u8 = e => new c(1,e),
        t.u16 = e => new c(2,e),
        t.u24 = e => new c(3,e),
        t.u32 = e => new c(4,e),
        t.u40 = e => new c(5,e),
        t.u48 = e => new c(6,e),
        t.nu64 = e => new m(e),
        t.u16be = e => new d(2,e),
        t.u24be = e => new d(3,e),
        t.u32be = e => new d(4,e),
        t.u40be = e => new d(5,e),
        t.u48be = e => new d(6,e),
        t.nu64be = e => new w(e),
        t.s8 = e => new f(1,e),
        t.s16 = e => new f(2,e),
        t.s24 = e => new f(3,e),
        t.s32 = e => new f(4,e),
        t.s40 = e => new f(5,e),
        t.s48 = e => new f(6,e),
        t.ns64 = e => new g(e),
        t.s16be = e => new h(2,e),
        t.s24be = e => new h(3,e),
        t.s32be = e => new h(4,e),
        t.s40be = e => new h(5,e),
        t.s48be = e => new h(6,e),
        t.ns64be = e => new b(e),
        t.f32 = e => new E(e),
        t.f32be = e => new x(e),
        t.f64 = e => new _(e),
        t.f64be = e => new S(e),
        t.struct = (e, t, r) => new A(e,t,r),
        t.bits = (e, t, r) => new B(e,t,r),
        t.seq = (e, t, r) => new L(e,t,r),
        t.union = (e, t, r) => new T(e,t,r),
        t.unionLayoutDiscriminator = (e, t) => new k(e,t),
        t.blob = (e, t) => new D(e,t),
        t.cstr = e => new j(e),
        t.utf8 = (e, t) => new M(e,t),
        t.const = (e, t) => new P(e,t)
    },
    75544: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__, process = __webpack_require__(25566);
        !function() {
            "use strict";
            var ERROR = "input is invalid type"
              , WINDOW = "object" == typeof window
              , root = WINDOW ? window : {};
            root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
            var WEB_WORKER = !WINDOW && "object" == typeof self
              , NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
            NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
            var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports
              , AMD = __webpack_require__.amdO
              , ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
              , HEX_CHARS = "0123456789abcdef".split("")
              , EXTRA = [-2147483648, 8388608, 32768, 128]
              , SHIFT = [24, 16, 8, 0]
              , K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
              , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
              , blocks = [];
            (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ),
            ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(e) {
                return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
            }
            );
            var createOutputMethod = function(e, t) {
                return function(r) {
                    return new Sha256(t,!0).update(r)[e]()
                }
            }
              , createMethod = function(e) {
                var t = createOutputMethod("hex", e);
                NODE_JS && (t = nodeWrap(t, e)),
                t.create = function() {
                    return new Sha256(e)
                }
                ,
                t.update = function(e) {
                    return t.create().update(e)
                }
                ;
                for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
                    var n = OUTPUT_TYPES[r];
                    t[n] = createOutputMethod(n, e)
                }
                return t
            }
              , nodeWrap = function(method, is224) {
                var crypto = eval("require('crypto')")
                  , Buffer = eval("require('buffer').Buffer")
                  , algorithm = is224 ? "sha224" : "sha256"
                  , nodeMethod = function(e) {
                    if ("string" == typeof e)
                        return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
                    if (null == e)
                        throw Error(ERROR);
                    return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                    Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
                };
                return nodeMethod
            }
              , createHmacOutputMethod = function(e, t) {
                return function(r, n) {
                    return new HmacSha256(r,t,!0).update(n)[e]()
                }
            }
              , createHmacMethod = function(e) {
                var t = createHmacOutputMethod("hex", e);
                t.create = function(t) {
                    return new HmacSha256(t,e)
                }
                ,
                t.update = function(e, r) {
                    return t.create(e).update(r)
                }
                ;
                for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
                    var n = OUTPUT_TYPES[r];
                    t[n] = createHmacOutputMethod(n, e)
                }
                return t
            };
            function Sha256(e, t) {
                t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                e ? (this.h0 = 3238371032,
                this.h1 = 914150663,
                this.h2 = 812702999,
                this.h3 = 4144912697,
                this.h4 = 4290775857,
                this.h5 = 1750603025,
                this.h6 = 1694076839,
                this.h7 = 3204075428) : (this.h0 = 1779033703,
                this.h1 = 3144134277,
                this.h2 = 1013904242,
                this.h3 = 2773480762,
                this.h4 = 1359893119,
                this.h5 = 2600822924,
                this.h6 = 528734635,
                this.h7 = 1541459225),
                this.block = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0,
                this.is224 = e
            }
            function HmacSha256(e, t, r) {
                var n, o = typeof e;
                if ("string" === o) {
                    var i, s = [], l = e.length, a = 0;
                    for (n = 0; n < l; ++n)
                        (i = e.charCodeAt(n)) < 128 ? s[a++] = i : (i < 2048 ? s[a++] = 192 | i >> 6 : (i < 55296 || i >= 57344 ? s[a++] = 224 | i >> 12 : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++n)),
                        s[a++] = 240 | i >> 18,
                        s[a++] = 128 | i >> 12 & 63),
                        s[a++] = 128 | i >> 6 & 63),
                        s[a++] = 128 | 63 & i);
                    e = s
                } else if ("object" === o) {
                    if (null === e)
                        throw Error(ERROR);
                    if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                        e = new Uint8Array(e);
                    else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
                        throw Error(ERROR)
                } else
                    throw Error(ERROR);
                e.length > 64 && (e = new Sha256(t,!0).update(e).array());
                var u = []
                  , c = [];
                for (n = 0; n < 64; ++n) {
                    var d = e[n] || 0;
                    u[n] = 92 ^ d,
                    c[n] = 54 ^ d
                }
                Sha256.call(this, t, r),
                this.update(c),
                this.oKeyPad = u,
                this.inner = !0,
                this.sharedMemory = r
            }
            Sha256.prototype.update = function(e) {
                if (!this.finalized) {
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === e)
                                throw Error(ERROR);
                            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                                e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
                                throw Error(ERROR)
                        } else
                            throw Error(ERROR);
                        t = !0
                    }
                    for (var n, o, i = 0, s = e.length, l = this.blocks; i < s; ) {
                        if (this.hashed && (this.hashed = !1,
                        l[0] = this.block,
                        l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0),
                        t)
                            for (o = this.start; i < s && o < 64; ++i)
                                l[o >> 2] |= e[i] << SHIFT[3 & o++];
                        else
                            for (o = this.start; i < s && o < 64; ++i)
                                (n = e.charCodeAt(i)) < 128 ? l[o >> 2] |= n << SHIFT[3 & o++] : (n < 2048 ? l[o >> 2] |= (192 | n >> 6) << SHIFT[3 & o++] : (n < 55296 || n >= 57344 ? l[o >> 2] |= (224 | n >> 12) << SHIFT[3 & o++] : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)),
                                l[o >> 2] |= (240 | n >> 18) << SHIFT[3 & o++],
                                l[o >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & o++]),
                                l[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++]),
                                l[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]);
                        this.lastByteIndex = o,
                        this.bytes += o - this.start,
                        o >= 64 ? (this.block = l[16],
                        this.start = o - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = o
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                    this
                }
            }
            ,
            Sha256.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var e = this.blocks
                      , t = this.lastByteIndex;
                    e[16] = this.block,
                    e[t >> 2] |= EXTRA[3 & t],
                    this.block = e[16],
                    t >= 56 && (this.hashed || this.hash(),
                    e[0] = this.block,
                    e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                    e[14] = this.hBytes << 3 | this.bytes >>> 29,
                    e[15] = this.bytes << 3,
                    this.hash()
                }
            }
            ,
            Sha256.prototype.hash = function() {
                var e, t, r, n, o, i, s, l, a, u, c, d = this.h0, f = this.h1, h = this.h2, p = this.h3, y = this.h4, v = this.h5, m = this.h6, w = this.h7, g = this.blocks;
                for (e = 16; e < 64; ++e)
                    t = ((o = g[e - 15]) >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3,
                    r = ((o = g[e - 2]) >>> 17 | o << 15) ^ (o >>> 19 | o << 13) ^ o >>> 10,
                    g[e] = g[e - 16] + t + g[e - 7] + r << 0;
                for (e = 0,
                c = f & h; e < 64; e += 4)
                    this.first ? (this.is224 ? (l = 300032,
                    w = (o = g[0] - 1413257819) - 150054599 << 0,
                    p = o + 24177077 << 0) : (l = 704751109,
                    w = (o = g[0] - 210244248) - 1521486534 << 0,
                    p = o + 143694565 << 0),
                    this.first = !1) : (t = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10),
                    r = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7),
                    n = (l = d & f) ^ d & h ^ c,
                    o = w + r + (s = y & v ^ ~y & m) + K[e] + g[e],
                    i = t + n,
                    w = p + o << 0,
                    p = o + i << 0),
                    t = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10),
                    r = (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7),
                    n = (a = p & d) ^ p & f ^ l,
                    o = m + r + (s = w & y ^ ~w & v) + K[e + 1] + g[e + 1],
                    i = t + n,
                    m = h + o << 0,
                    t = ((h = o + i << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
                    r = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7),
                    n = (u = h & p) ^ h & d ^ a,
                    o = v + r + (s = m & w ^ ~m & y) + K[e + 2] + g[e + 2],
                    i = t + n,
                    v = f + o << 0,
                    t = ((f = o + i << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10),
                    r = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7),
                    n = (c = f & h) ^ f & p ^ u,
                    o = y + r + (s = v & m ^ ~v & w) + K[e + 3] + g[e + 3],
                    i = t + n,
                    y = d + o << 0,
                    d = o + i << 0;
                this.h0 = this.h0 + d << 0,
                this.h1 = this.h1 + f << 0,
                this.h2 = this.h2 + h << 0,
                this.h3 = this.h3 + p << 0,
                this.h4 = this.h4 + y << 0,
                this.h5 = this.h5 + v << 0,
                this.h6 = this.h6 + m << 0,
                this.h7 = this.h7 + w << 0
            }
            ,
            Sha256.prototype.hex = function() {
                this.finalize();
                var e = this.h0
                  , t = this.h1
                  , r = this.h2
                  , n = this.h3
                  , o = this.h4
                  , i = this.h5
                  , s = this.h6
                  , l = this.h7
                  , a = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s];
                return this.is224 || (a += HEX_CHARS[l >> 28 & 15] + HEX_CHARS[l >> 24 & 15] + HEX_CHARS[l >> 20 & 15] + HEX_CHARS[l >> 16 & 15] + HEX_CHARS[l >> 12 & 15] + HEX_CHARS[l >> 8 & 15] + HEX_CHARS[l >> 4 & 15] + HEX_CHARS[15 & l]),
                a
            }
            ,
            Sha256.prototype.toString = Sha256.prototype.hex,
            Sha256.prototype.digest = function() {
                this.finalize();
                var e = this.h0
                  , t = this.h1
                  , r = this.h2
                  , n = this.h3
                  , o = this.h4
                  , i = this.h5
                  , s = this.h6
                  , l = this.h7
                  , a = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s];
                return this.is224 || a.push(l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l),
                a
            }
            ,
            Sha256.prototype.array = Sha256.prototype.digest,
            Sha256.prototype.arrayBuffer = function() {
                this.finalize();
                var e = new ArrayBuffer(this.is224 ? 28 : 32)
                  , t = new DataView(e);
                return t.setUint32(0, this.h0),
                t.setUint32(4, this.h1),
                t.setUint32(8, this.h2),
                t.setUint32(12, this.h3),
                t.setUint32(16, this.h4),
                t.setUint32(20, this.h5),
                t.setUint32(24, this.h6),
                this.is224 || t.setUint32(28, this.h7),
                e
            }
            ,
            HmacSha256.prototype = new Sha256,
            HmacSha256.prototype.finalize = function() {
                if (Sha256.prototype.finalize.call(this),
                this.inner) {
                    this.inner = !1;
                    var e = this.array();
                    Sha256.call(this, this.is224, this.sharedMemory),
                    this.update(this.oKeyPad),
                    this.update(e),
                    Sha256.prototype.finalize.call(this)
                }
            }
            ;
            var exports = createMethod();
            exports.sha256 = exports,
            exports.sha224 = createMethod(!0),
            exports.sha256.hmac = createHmacMethod(),
            exports.sha224.hmac = createHmacMethod(!0),
            COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256,
            root.sha224 = exports.sha224,
            AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return exports
            }
            ).call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }()
    },
    87099: function(e, t, r) {
        "use strict";
        r.d(t, {
            a: function() {
                return f
            }
        });
        var n = r(2265)
          , o = r(28782);
        function i({onSelectWallet: e}) {
            let t;
            let {connect: r, connected: i, connecting: s, disconnect: l, disconnecting: a, publicKey: u, select: c, wallet: d, wallets: f} = (0,
            o.O)();
            t = s ? "connecting" : i ? "connected" : a ? "disconnecting" : d ? "has-wallet" : "no-wallet";
            let h = (0,
            n.useCallback)( () => {
                r().catch( () => {}
                )
            }
            , [r])
              , p = (0,
            n.useCallback)( () => {
                l().catch( () => {}
                )
            }
            , [l]);
            return {
                buttonState: t,
                onConnect: "has-wallet" === t ? h : void 0,
                onDisconnect: "disconnecting" !== t && "no-wallet" !== t ? p : void 0,
                onSelectWallet: (0,
                n.useCallback)( () => {
                    e({
                        onSelectWallet: c,
                        wallets: f
                    })
                }
                , [e, c, f]),
                publicKey: u ?? void 0,
                walletIcon: d?.adapter.icon,
                walletName: d?.adapter.name
            }
        }
        var s = r(82426)
          , l = r(7549);
        function a({walletIcon: e, walletName: t, ...r}) {
            return n.createElement(s.z, {
                ...r,
                className: "wallet-adapter-button-trigger",
                startIcon: e && t ? n.createElement(l.o, {
                    wallet: {
                        adapter: {
                            icon: e,
                            name: t
                        }
                    }
                }) : void 0
            })
        }
        var u = r(98058);
        function c({children: e, labels: t, ...r}) {
            let {setVisible: o} = (0,
            u.h)()
              , {buttonState: s, onConnect: l, onDisconnect: c, publicKey: d, walletIcon: f, walletName: h} = i({
                onSelectWallet() {
                    o(!0)
                }
            })
              , [p,y] = (0,
            n.useState)(!1)
              , [v,m] = (0,
            n.useState)(!1)
              , w = (0,
            n.useRef)(null);
            (0,
            n.useEffect)( () => {
                let e = e => {
                    let t = w.current;
                    !t || t.contains(e.target) || m(!1)
                }
                ;
                return document.addEventListener("mousedown", e),
                document.addEventListener("touchstart", e),
                () => {
                    document.removeEventListener("mousedown", e),
                    document.removeEventListener("touchstart", e)
                }
            }
            , []);
            let g = (0,
            n.useMemo)( () => {
                if (e)
                    return e;
                if (d) {
                    let e = d.toBase58();
                    return e.slice(0, 4) + ".." + e.slice(-4)
                }
                return "connecting" === s || "has-wallet" === s ? t[s] : t["no-wallet"]
            }
            , [s, e, t, d]);
            return n.createElement("div", {
                className: "wallet-adapter-dropdown"
            }, n.createElement(a, {
                ...r,
                "aria-expanded": v,
                style: {
                    pointerEvents: v ? "none" : "auto",
                    ...r.style
                },
                onClick: () => {
                    switch (s) {
                    case "no-wallet":
                        o(!0);
                        break;
                    case "has-wallet":
                        l && l();
                        break;
                    case "connected":
                        m(!0)
                    }
                }
                ,
                walletIcon: f,
                walletName: h
            }, g), n.createElement("ul", {
                "aria-label": "dropdown-list",
                className: `wallet-adapter-dropdown-list ${v && "wallet-adapter-dropdown-list-active"}`,
                ref: w,
                role: "menu"
            }, d ? n.createElement("li", {
                className: "wallet-adapter-dropdown-list-item",
                onClick: async () => {
                    await navigator.clipboard.writeText(d.toBase58()),
                    y(!0),
                    setTimeout( () => y(!1), 400)
                }
                ,
                role: "menuitem"
            }, p ? t.copied : t["copy-address"]) : null, n.createElement("li", {
                className: "wallet-adapter-dropdown-list-item",
                onClick: () => {
                    o(!0),
                    m(!1)
                }
                ,
                role: "menuitem"
            }, t["change-wallet"]), c ? n.createElement("li", {
                className: "wallet-adapter-dropdown-list-item",
                onClick: () => {
                    c(),
                    m(!1)
                }
                ,
                role: "menuitem"
            }, t.disconnect) : null))
        }
        let d = {
            "change-wallet": "Change wallet",
            connecting: "Connecting ...",
            "copy-address": "Copy address",
            copied: "Copied",
            disconnect: "Disconnect",
            "has-wallet": "Connect",
            "no-wallet": "Select Wallet"
        };
        function f(e) {
            return n.createElement(c, {
                ...e,
                labels: d
            })
        }
    },
    28489: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return i
            }
        });
        var n = r(2265)
          , o = r(28782);
        function i() {
            let {publicKey: e, signTransaction: t, signAllTransactions: r} = (0,
            o.O)();
            return (0,
            n.useMemo)( () => e && t && r ? {
                publicKey: e,
                signTransaction: t,
                signAllTransactions: r
            } : void 0, [e, t, r])
        }
    },
    25524: function(e, t, r) {
        "use strict";
        r.d(t, {
            D: function() {
                return d
            }
        });
        var n = r(2265)
          , o = r(92812)
          , i = r(69948)
          , s = r(49010)
          , l = r(56298)
          , a = class extends s.l {
            #e;
            #t = void 0;
            #r;
            #n;
            constructor(e, t) {
                super(),
                this.#e = e,
                this.setOptions(t),
                this.bindMethods(),
                this.#o()
            }
            bindMethods() {
                this.mutate = this.mutate.bind(this),
                this.reset = this.reset.bind(this)
            }
            setOptions(e) {
                let t = this.options;
                this.options = this.#e.defaultMutationOptions(e),
                (0,
                l.VS)(this.options, t) || this.#e.getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#r,
                    observer: this
                }),
                t?.mutationKey && this.options.mutationKey && (0,
                l.Ym)(t.mutationKey) !== (0,
                l.Ym)(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options)
            }
            onUnsubscribe() {
                this.hasListeners() || this.#r?.removeObserver(this)
            }
            onMutationUpdate(e) {
                this.#o(),
                this.#i(e)
            }
            getCurrentResult() {
                return this.#t
            }
            reset() {
                this.#r?.removeObserver(this),
                this.#r = void 0,
                this.#o(),
                this.#i()
            }
            mutate(e, t) {
                return this.#n = t,
                this.#r?.removeObserver(this),
                this.#r = this.#e.getMutationCache().build(this.#e, this.options),
                this.#r.addObserver(this),
                this.#r.execute(e)
            }
            #o() {
                let e = this.#r?.state ?? (0,
                o.R)();
                this.#t = {
                    ...e,
                    isPending: "pending" === e.status,
                    isSuccess: "success" === e.status,
                    isError: "error" === e.status,
                    isIdle: "idle" === e.status,
                    mutate: this.mutate,
                    reset: this.reset
                }
            }
            #i(e) {
                i.V.batch( () => {
                    if (this.#n && this.hasListeners()) {
                        let t = this.#t.variables
                          , r = this.#t.context;
                        e?.type === "success" ? (this.#n.onSuccess?.(e.data, t, r),
                        this.#n.onSettled?.(e.data, null, t, r)) : e?.type === "error" && (this.#n.onError?.(e.error, t, r),
                        this.#n.onSettled?.(void 0, e.error, t, r))
                    }
                    this.listeners.forEach(e => {
                        e(this.#t)
                    }
                    )
                }
                )
            }
        }
          , u = r(93191)
          , c = r(37832);
        function d(e, t) {
            let r = (0,
            u.NL)(t)
              , [o] = n.useState( () => new a(r,e));
            n.useEffect( () => {
                o.setOptions(e)
            }
            , [o, e]);
            let s = n.useSyncExternalStore(n.useCallback(e => o.subscribe(i.V.batchCalls(e)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult())
              , l = n.useCallback( (e, t) => {
                o.mutate(e, t).catch(c.Z)
            }
            , [o]);
            if (s.error && (0,
            c.L)(o.options.throwOnError, [s.error]))
                throw s.error;
            return {
                ...s,
                mutate: l,
                mutateAsync: s.mutate
            }
        }
    },
    26408: function(e, t, r) {
        "use strict";
        r.d(t, {
            u: function() {
                return eQ
            }
        });
        var n = r(2265);
        let o = Math.min
          , i = Math.max
          , s = Math.round
          , l = Math.floor
          , a = e => ({
            x: e,
            y: e
        })
          , u = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , c = {
            start: "end",
            end: "start"
        };
        function d(e, t, r) {
            return i(e, o(t, r))
        }
        function f(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function h(e) {
            return e.split("-")[0]
        }
        function p(e) {
            return e.split("-")[1]
        }
        function y(e) {
            return "x" === e ? "y" : "x"
        }
        function v(e) {
            return "y" === e ? "height" : "width"
        }
        function m(e) {
            return ["top", "bottom"].includes(h(e)) ? "y" : "x"
        }
        function w(e) {
            return y(m(e))
        }
        function g(e, t, r) {
            void 0 === r && (r = !1);
            let n = p(e)
              , o = w(e)
              , i = v(o)
              , s = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
            return t.reference[i] > t.floating[i] && (s = S(s)),
            [s, S(s)]
        }
        function b(e) {
            let t = S(e);
            return [E(e), t, E(t)]
        }
        function E(e) {
            return e.replace(/start|end/g, e => c[e])
        }
        function x(e, t, r) {
            let n = ["left", "right"]
              , o = ["right", "left"]
              , i = ["top", "bottom"]
              , s = ["bottom", "top"];
            switch (e) {
            case "top":
            case "bottom":
                if (r)
                    return t ? o : n;
                return t ? n : o;
            case "left":
            case "right":
                return t ? i : s;
            default:
                return []
            }
        }
        function _(e, t, r, n) {
            let o = p(e)
              , i = x(h(e), "start" === r, n);
            return o && (i = i.map(e => e + "-" + o),
            t && (i = i.concat(i.map(E)))),
            i
        }
        function S(e) {
            return e.replace(/left|right|bottom|top/g, e => u[e])
        }
        function L(e) {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            }
        }
        function A(e) {
            return "number" != typeof e ? L(e) : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function O(e) {
            let {x: t, y: r, width: n, height: o} = e;
            return {
                width: n,
                height: o,
                top: r,
                left: t,
                right: t + n,
                bottom: r + o,
                x: t,
                y: r
            }
        }
        function k(e, t, r) {
            let n, {reference: o, floating: i} = e, s = m(t), l = w(t), a = v(l), u = h(t), c = "y" === s, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, y = o[a] / 2 - i[a] / 2;
            switch (u) {
            case "top":
                n = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                n = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                n = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                n = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                n = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (p(t)) {
            case "start":
                n[l] -= y * (r && c ? -1 : 1);
                break;
            case "end":
                n[l] += y * (r && c ? -1 : 1)
            }
            return n
        }
        let T = async (e, t, r) => {
            let {placement: n="bottom", strategy: o="absolute", middleware: i=[], platform: s} = r
              , l = i.filter(Boolean)
              , a = await (null == s.isRTL ? void 0 : s.isRTL(t))
              , u = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: c, y: d} = k(u, n, a)
              , f = n
              , h = {}
              , p = 0;
            for (let r = 0; r < l.length; r++) {
                let {name: i, fn: y} = l[r]
                  , {x: v, y: m, data: w, reset: g} = await y({
                    x: c,
                    y: d,
                    initialPlacement: n,
                    placement: f,
                    strategy: o,
                    middlewareData: h,
                    rects: u,
                    platform: s,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                c = null != v ? v : c,
                d = null != m ? m : d,
                h = {
                    ...h,
                    [i]: {
                        ...h[i],
                        ...w
                    }
                },
                g && p <= 50 && (p++,
                "object" == typeof g && (g.placement && (f = g.placement),
                g.rects && (u = !0 === g.rects ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : g.rects),
                {x: c, y: d} = k(u, f, a)),
                r = -1)
            }
            return {
                x: c,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: h
            }
        }
        ;
        async function R(e, t) {
            var r;
            void 0 === t && (t = {});
            let {x: n, y: o, platform: i, rects: s, elements: l, strategy: a} = e
              , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: h=!1, padding: p=0} = f(t, e)
              , y = A(p)
              , v = "floating" === d ? "reference" : "floating"
              , m = l[h ? v : d]
              , w = O(await i.getClippingRect({
                element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                boundary: u,
                rootBoundary: c,
                strategy: a
            }))
              , g = "floating" === d ? {
                x: n,
                y: o,
                width: s.floating.width,
                height: s.floating.height
            } : s.reference
              , b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating))
              , E = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
                x: 1,
                y: 1
            }
              , x = O(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: l,
                rect: g,
                offsetParent: b,
                strategy: a
            }) : g);
            return {
                top: (w.top - x.top + y.top) / E.y,
                bottom: (x.bottom - w.bottom + y.bottom) / E.y,
                left: (w.left - x.left + y.left) / E.x,
                right: (x.right - w.right + y.right) / E.x
            }
        }
        let C = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: r, y: n, placement: i, rects: s, platform: l, elements: a, middlewareData: u} = t
                  , {element: c, padding: h=0} = f(e, t) || {};
                if (null == c)
                    return {};
                let y = A(h)
                  , m = {
                    x: r,
                    y: n
                }
                  , g = w(i)
                  , b = v(g)
                  , E = await l.getDimensions(c)
                  , x = "y" === g
                  , _ = x ? "top" : "left"
                  , S = x ? "bottom" : "right"
                  , L = x ? "clientHeight" : "clientWidth"
                  , O = s.reference[b] + s.reference[g] - m[g] - s.floating[b]
                  , k = m[g] - s.reference[g]
                  , T = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c))
                  , R = T ? T[L] : 0;
                R && await (null == l.isElement ? void 0 : l.isElement(T)) || (R = a.floating[L] || s.floating[b]);
                let C = O / 2 - k / 2
                  , B = R / 2 - E[b] / 2 - 1
                  , I = o(y[_], B)
                  , N = o(y[S], B)
                  , D = I
                  , j = R - E[b] - N
                  , M = R / 2 - E[b] / 2 + C
                  , P = d(D, M, j)
                  , U = !u.arrow && null != p(i) && M !== P && s.reference[b] / 2 - (M < D ? I : N) - E[b] / 2 < 0
                  , V = U ? M < D ? M - D : M - j : 0;
                return {
                    [g]: m[g] + V,
                    data: {
                        [g]: P,
                        centerOffset: M - P - V,
                        ...U && {
                            alignmentOffset: V
                        }
                    },
                    reset: U
                }
            }
        })
          , B = function(e) {
            return void 0 === e && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var r, n, o, i, s;
                    let {placement: l, middlewareData: a, rects: u, initialPlacement: c, platform: d, elements: p} = t
                      , {mainAxis: y=!0, crossAxis: v=!0, fallbackPlacements: w, fallbackStrategy: E="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: L=!0, ...A} = f(e, t);
                    if (null != (r = a.arrow) && r.alignmentOffset)
                        return {};
                    let O = h(l)
                      , k = m(c)
                      , T = h(c) === c
                      , C = await (null == d.isRTL ? void 0 : d.isRTL(p.floating))
                      , B = w || (T || !L ? [S(c)] : b(c))
                      , I = "none" !== x;
                    !w && I && B.push(..._(c, L, x, C));
                    let N = [c, ...B]
                      , D = await R(t, A)
                      , j = []
                      , M = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                    if (y && j.push(D[O]),
                    v) {
                        let e = g(l, u, C);
                        j.push(D[e[0]], D[e[1]])
                    }
                    if (M = [...M, {
                        placement: l,
                        overflows: j
                    }],
                    !j.every(e => e <= 0)) {
                        let e = ((null == (o = a.flip) ? void 0 : o.index) || 0) + 1
                          , t = N[e];
                        if (t)
                            return {
                                data: {
                                    index: e,
                                    overflows: M
                                },
                                reset: {
                                    placement: t
                                }
                            };
                        let r = null == (i = M.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                        if (!r)
                            switch (E) {
                            case "bestFit":
                                {
                                    let e = null == (s = M.filter(e => {
                                        if (I) {
                                            let t = m(e.placement);
                                            return t === k || "y" === t
                                        }
                                        return !0
                                    }
                                    ).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]) ? void 0 : s[0];
                                    e && (r = e);
                                    break
                                }
                            case "initialPlacement":
                                r = c
                            }
                        if (l !== r)
                            return {
                                reset: {
                                    placement: r
                                }
                            }
                    }
                    return {}
                }
            }
        };
        async function I(e, t) {
            let {placement: r, platform: n, elements: o} = e
              , i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating))
              , s = h(r)
              , l = p(r)
              , a = "y" === m(r)
              , u = ["left", "top"].includes(s) ? -1 : 1
              , c = i && a ? -1 : 1
              , d = f(t, e)
              , {mainAxis: y, crossAxis: v, alignmentAxis: w} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis
            };
            return l && "number" == typeof w && (v = "end" === l ? -1 * w : w),
            a ? {
                x: v * c,
                y: y * u
            } : {
                x: y * u,
                y: v * c
            }
        }
        let N = function(e) {
            return void 0 === e && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var r, n;
                    let {x: o, y: i, placement: s, middlewareData: l} = t
                      , a = await I(t, e);
                    return s === (null == (r = l.offset) ? void 0 : r.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                        x: o + a.x,
                        y: i + a.y,
                        data: {
                            ...a,
                            placement: s
                        }
                    }
                }
            }
        }
          , D = function(e) {
            return void 0 === e && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    let {x: r, y: n, placement: o} = t
                      , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                        fn: e => {
                            let {x: t, y: r} = e;
                            return {
                                x: t,
                                y: r
                            }
                        }
                    }, ...a} = f(e, t)
                      , u = {
                        x: r,
                        y: n
                    }
                      , c = await R(t, a)
                      , p = m(h(o))
                      , v = y(p)
                      , w = u[v]
                      , g = u[p];
                    if (i) {
                        let e = "y" === v ? "top" : "left"
                          , t = "y" === v ? "bottom" : "right"
                          , r = w + c[e]
                          , n = w - c[t];
                        w = d(r, w, n)
                    }
                    if (s) {
                        let e = "y" === p ? "top" : "left"
                          , t = "y" === p ? "bottom" : "right"
                          , r = g + c[e]
                          , n = g - c[t];
                        g = d(r, g, n)
                    }
                    let b = l.fn({
                        ...t,
                        [v]: w,
                        [p]: g
                    });
                    return {
                        ...b,
                        data: {
                            x: b.x - r,
                            y: b.y - n,
                            enabled: {
                                [v]: i,
                                [p]: s
                            }
                        }
                    }
                }
            }
        };
        function j() {
            return "undefined" != typeof window
        }
        function M(e) {
            return V(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function P(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function U(e) {
            var t;
            return null == (t = (V(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function V(e) {
            return !!j() && (e instanceof Node || e instanceof P(e).Node)
        }
        function F(e) {
            return !!j() && (e instanceof Element || e instanceof P(e).Element)
        }
        function z(e) {
            return !!j() && (e instanceof HTMLElement || e instanceof P(e).HTMLElement)
        }
        function H(e) {
            return !!j() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof P(e).ShadowRoot)
        }
        function W(e) {
            let {overflow: t, overflowX: r, overflowY: n, display: o} = X(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
        }
        function $(e) {
            return ["table", "td", "th"].includes(M(e))
        }
        function q(e) {
            return [":popover-open", ":modal"].some(t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            )
        }
        function K(e) {
            let t = J()
              , r = F(e) ? X(e) : e;
            return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
        }
        function G(e) {
            let t = Q(e);
            for (; z(t) && !Y(t); ) {
                if (K(t))
                    return t;
                if (q(t))
                    break;
                t = Q(t)
            }
            return null
        }
        function J() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function Y(e) {
            return ["html", "body", "#document"].includes(M(e))
        }
        function X(e) {
            return P(e).getComputedStyle(e)
        }
        function Z(e) {
            return F(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.scrollX,
                scrollTop: e.scrollY
            }
        }
        function Q(e) {
            if ("html" === M(e))
                return e;
            let t = e.assignedSlot || e.parentNode || H(e) && e.host || U(e);
            return H(t) ? t.host : t
        }
        function ee(e) {
            let t = Q(e);
            return Y(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : z(t) && W(t) ? t : ee(t)
        }
        function et(e, t, r) {
            var n;
            void 0 === t && (t = []),
            void 0 === r && (r = !0);
            let o = ee(e)
              , i = o === (null == (n = e.ownerDocument) ? void 0 : n.body)
              , s = P(o);
            if (i) {
                let e = er(s);
                return t.concat(s, s.visualViewport || [], W(o) ? o : [], e && r ? et(e) : [])
            }
            return t.concat(o, et(o, [], r))
        }
        function er(e) {
            return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
        }
        function en(e) {
            let t = X(e)
              , r = parseFloat(t.width) || 0
              , n = parseFloat(t.height) || 0
              , o = z(e)
              , i = o ? e.offsetWidth : r
              , l = o ? e.offsetHeight : n
              , a = s(r) !== i || s(n) !== l;
            return a && (r = i,
            n = l),
            {
                width: r,
                height: n,
                $: a
            }
        }
        function eo(e) {
            return F(e) ? e : e.contextElement
        }
        function ei(e) {
            let t = eo(e);
            if (!z(t))
                return a(1);
            let r = t.getBoundingClientRect()
              , {width: n, height: o, $: i} = en(t)
              , l = (i ? s(r.width) : r.width) / n
              , u = (i ? s(r.height) : r.height) / o;
            return l && Number.isFinite(l) || (l = 1),
            u && Number.isFinite(u) || (u = 1),
            {
                x: l,
                y: u
            }
        }
        let es = a(0);
        function el(e) {
            let t = P(e);
            return J() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : es
        }
        function ea(e, t, r) {
            return void 0 === t && (t = !1),
            !!r && (!t || r === P(e)) && t
        }
        function eu(e, t, r, n) {
            void 0 === t && (t = !1),
            void 0 === r && (r = !1);
            let o = e.getBoundingClientRect()
              , i = eo(e)
              , s = a(1);
            t && (n ? F(n) && (s = ei(n)) : s = ei(e));
            let l = ea(i, r, n) ? el(i) : a(0)
              , u = (o.left + l.x) / s.x
              , c = (o.top + l.y) / s.y
              , d = o.width / s.x
              , f = o.height / s.y;
            if (i) {
                let e = P(i)
                  , t = n && F(n) ? P(n) : n
                  , r = e
                  , o = er(r);
                for (; o && n && t !== r; ) {
                    let e = ei(o)
                      , t = o.getBoundingClientRect()
                      , n = X(o)
                      , i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x
                      , s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                    u *= e.x,
                    c *= e.y,
                    d *= e.x,
                    f *= e.y,
                    u += i,
                    c += s,
                    o = er(r = P(o))
                }
            }
            return O({
                width: d,
                height: f,
                x: u,
                y: c
            })
        }
        function ec(e, t) {
            let r = Z(e).scrollLeft;
            return t ? t.left + r : eu(U(e)).left + r
        }
        function ed(e) {
            let t = U(e)
              , r = Z(e)
              , n = e.ownerDocument.body
              , o = i(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
              , s = i(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight)
              , l = -r.scrollLeft + ec(e)
              , a = -r.scrollTop;
            return "rtl" === X(n).direction && (l += i(t.clientWidth, n.clientWidth) - o),
            {
                width: o,
                height: s,
                x: l,
                y: a
            }
        }
        function ef(e, t) {
            let r = P(e)
              , n = U(e)
              , o = r.visualViewport
              , i = n.clientWidth
              , s = n.clientHeight
              , l = 0
              , a = 0;
            if (o) {
                i = o.width,
                s = o.height;
                let e = J();
                (!e || e && "fixed" === t) && (l = o.offsetLeft,
                a = o.offsetTop)
            }
            return {
                width: i,
                height: s,
                x: l,
                y: a
            }
        }
        function eh(e, t) {
            let r = eu(e, !0, "fixed" === t)
              , n = r.top + e.clientTop
              , o = r.left + e.clientLeft
              , i = z(e) ? ei(e) : a(1)
              , s = e.clientWidth * i.x;
            return {
                width: s,
                height: e.clientHeight * i.y,
                x: o * i.x,
                y: n * i.y
            }
        }
        function ep(e, t, r) {
            let n;
            if ("viewport" === t)
                n = ef(e, r);
            else if ("document" === t)
                n = ed(U(e));
            else if (F(t))
                n = eh(t, r);
            else {
                let r = el(e);
                n = {
                    ...t,
                    x: t.x - r.x,
                    y: t.y - r.y
                }
            }
            return O(n)
        }
        function ey(e, t) {
            let r = Q(e);
            return !(r === t || !F(r) || Y(r)) && ("fixed" === X(r).position || ey(r, t))
        }
        function ev(e, t) {
            let r = t.get(e);
            if (r)
                return r;
            let n = et(e, [], !1).filter(e => F(e) && "body" !== M(e))
              , o = null
              , i = "fixed" === X(e).position
              , s = i ? Q(e) : e;
            for (; F(s) && !Y(s); ) {
                let t = X(s)
                  , r = K(s);
                r || "fixed" !== t.position || (o = null),
                (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || W(s) && !r && ey(e, s)) ? n = n.filter(e => e !== s) : o = t,
                s = Q(s)
            }
            return t.set(e, n),
            n
        }
        function em(e, t, r) {
            let n = z(t)
              , o = U(t)
              , i = "fixed" === r
              , s = eu(e, !0, i, t)
              , l = {
                scrollLeft: 0,
                scrollTop: 0
            }
              , u = a(0);
            if (n || !n && !i) {
                if (("body" !== M(t) || W(o)) && (l = Z(t)),
                n) {
                    let e = eu(t, !0, i, t);
                    u.x = e.x + t.clientLeft,
                    u.y = e.y + t.clientTop
                } else
                    o && (u.x = ec(o))
            }
            let c = 0
              , d = 0;
            if (o && !n && !i) {
                let e = o.getBoundingClientRect();
                d = e.top + l.scrollTop,
                c = e.left + l.scrollLeft - ec(o, e)
            }
            return {
                x: s.left + l.scrollLeft - u.x - c,
                y: s.top + l.scrollTop - u.y - d,
                width: s.width,
                height: s.height
            }
        }
        function ew(e) {
            return "static" === X(e).position
        }
        function eg(e, t) {
            if (!z(e) || "fixed" === X(e).position)
                return null;
            if (t)
                return t(e);
            let r = e.offsetParent;
            return U(e) === r && (r = r.ownerDocument.body),
            r
        }
        function eb(e, t) {
            let r = P(e);
            if (q(e))
                return r;
            if (!z(e)) {
                let t = Q(e);
                for (; t && !Y(t); ) {
                    if (F(t) && !ew(t))
                        return t;
                    t = Q(t)
                }
                return r
            }
            let n = eg(e, t);
            for (; n && $(n) && ew(n); )
                n = eg(n, t);
            return n && Y(n) && ew(n) && !K(n) ? r : n || G(e) || r
        }
        let eE = async function(e) {
            let t = this.getOffsetParent || eb
              , r = this.getDimensions
              , n = await r(e.floating);
            return {
                reference: em(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: n.width,
                    height: n.height
                }
            }
        }
          , ex = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: r, offsetParent: n, strategy: o} = e
                  , i = "fixed" === o
                  , s = U(n)
                  , l = !!t && q(t.floating);
                if (n === s || l && i)
                    return r;
                let u = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , c = a(1)
                  , d = a(0)
                  , f = z(n);
                if ((f || !f && !i) && (("body" !== M(n) || W(s)) && (u = Z(n)),
                z(n))) {
                    let e = eu(n);
                    c = ei(n),
                    d.x = e.x + n.clientLeft,
                    d.y = e.y + n.clientTop
                }
                return {
                    width: r.width * c.x,
                    height: r.height * c.y,
                    x: r.x * c.x - u.scrollLeft * c.x + d.x,
                    y: r.y * c.y - u.scrollTop * c.y + d.y
                }
            },
            getDocumentElement: U,
            getClippingRect: function(e) {
                let {element: t, boundary: r, rootBoundary: n, strategy: s} = e
                  , l = [..."clippingAncestors" === r ? q(t) ? [] : ev(t, this._c) : [].concat(r), n]
                  , a = l[0]
                  , u = l.reduce( (e, r) => {
                    let n = ep(t, r, s);
                    return e.top = i(n.top, e.top),
                    e.right = o(n.right, e.right),
                    e.bottom = o(n.bottom, e.bottom),
                    e.left = i(n.left, e.left),
                    e
                }
                , ep(t, a, s));
                return {
                    width: u.right - u.left,
                    height: u.bottom - u.top,
                    x: u.left,
                    y: u.top
                }
            },
            getOffsetParent: eb,
            getElementRects: eE,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: r} = en(e);
                return {
                    width: t,
                    height: r
                }
            },
            getScale: ei,
            isElement: F,
            isRTL: function(e) {
                return "rtl" === X(e).direction
            }
        };
        function e_(e, t) {
            let r, n = null, s = U(e);
            function a() {
                var e;
                clearTimeout(r),
                null == (e = n) || e.disconnect(),
                n = null
            }
            function u(c, d) {
                void 0 === c && (c = !1),
                void 0 === d && (d = 1),
                a();
                let {left: f, top: h, width: p, height: y} = e.getBoundingClientRect();
                if (c || t(),
                !p || !y)
                    return;
                let v = l(h)
                  , m = {
                    rootMargin: -v + "px " + -l(s.clientWidth - (f + p)) + "px " + -l(s.clientHeight - (h + y)) + "px " + -l(f) + "px",
                    threshold: i(0, o(1, d)) || 1
                }
                  , w = !0;
                function g(e) {
                    let t = e[0].intersectionRatio;
                    if (t !== d) {
                        if (!w)
                            return u();
                        t ? u(!1, t) : r = setTimeout( () => {
                            u(!1, 1e-7)
                        }
                        , 1e3)
                    }
                    w = !1
                }
                try {
                    n = new IntersectionObserver(g,{
                        ...m,
                        root: s.ownerDocument
                    })
                } catch (e) {
                    n = new IntersectionObserver(g,m)
                }
                n.observe(e)
            }
            return u(!0),
            a
        }
        function eS(e, t, r, n) {
            let o;
            void 0 === n && (n = {});
            let {ancestorScroll: i=!0, ancestorResize: s=!0, elementResize: l="function" == typeof ResizeObserver, layoutShift: a="function" == typeof IntersectionObserver, animationFrame: u=!1} = n
              , c = eo(e)
              , d = i || s ? [...c ? et(c) : [], ...et(t)] : [];
            d.forEach(e => {
                i && e.addEventListener("scroll", r, {
                    passive: !0
                }),
                s && e.addEventListener("resize", r)
            }
            );
            let f = c && a ? e_(c, r) : null
              , h = -1
              , p = null;
            l && (p = new ResizeObserver(e => {
                let[n] = e;
                n && n.target === c && p && (p.unobserve(t),
                cancelAnimationFrame(h),
                h = requestAnimationFrame( () => {
                    var e;
                    null == (e = p) || e.observe(t)
                }
                )),
                r()
            }
            ),
            c && !u && p.observe(c),
            p.observe(t));
            let y = u ? eu(e) : null;
            function v() {
                let t = eu(e);
                y && (t.x !== y.x || t.y !== y.y || t.width !== y.width || t.height !== y.height) && r(),
                y = t,
                o = requestAnimationFrame(v)
            }
            return u && v(),
            r(),
            () => {
                var e;
                d.forEach(e => {
                    i && e.removeEventListener("scroll", r),
                    s && e.removeEventListener("resize", r)
                }
                ),
                null == f || f(),
                null == (e = p) || e.disconnect(),
                p = null,
                u && cancelAnimationFrame(o)
            }
        }
        let eL = N
          , eA = D
          , eO = B
          , ek = C
          , eT = (e, t, r) => {
            let n = new Map
              , o = {
                platform: ex,
                ...r
            }
              , i = {
                ...o.platform,
                _c: n
            };
            return T(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var eR = r(56800)
          , eC = r(25566);
        /*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
        let eB = "react-tooltip-core-styles"
          , eI = "react-tooltip-base-styles"
          , eN = {
            core: !1,
            base: !1
        };
        function eD({css: e, id: t=eI, type: r="base", ref: n}) {
            var o, i;
            if (!e || "undefined" == typeof document || eN[r] || "core" === r && void 0 !== eC && (null === (o = null == eC ? void 0 : eC.env) || void 0 === o ? void 0 : o.REACT_TOOLTIP_DISABLE_CORE_STYLES) || "base" !== r && void 0 !== eC && (null === (i = null == eC ? void 0 : eC.env) || void 0 === i ? void 0 : i.REACT_TOOLTIP_DISABLE_BASE_STYLES))
                return;
            "core" === r && (t = eB),
            n || (n = {});
            let {insertAt: s} = n;
            if (document.getElementById(t))
                return;
            let l = document.head || document.getElementsByTagName("head")[0]
              , a = document.createElement("style");
            a.id = t,
            a.type = "text/css",
            "top" === s && l.firstChild ? l.insertBefore(a, l.firstChild) : l.appendChild(a),
            a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e)),
            eN[r] = !0
        }
        let ej = async ({elementReference: e=null, tooltipReference: t=null, tooltipArrowReference: r=null, place: n="top", offset: o=10, strategy: i="absolute", middlewares: s=[eL(Number(o)), eO({
            fallbackAxisSideDirection: "start"
        }), eA({
            padding: 5
        })], border: l}) => {
            if (!e || null === t)
                return {
                    tooltipStyles: {},
                    tooltipArrowStyles: {},
                    place: n
                };
            let a = s;
            return r ? (a.push(ek({
                element: r,
                padding: 5
            })),
            eT(e, t, {
                placement: n,
                strategy: i,
                middleware: a
            }).then( ({x: e, y: t, placement: r, middlewareData: n}) => {
                var o, i;
                let s = {
                    left: `${e}px`,
                    top: `${t}px`,
                    border: l
                }
                  , {x: a, y: u} = null !== (o = n.arrow) && void 0 !== o ? o : {
                    x: 0,
                    y: 0
                }
                  , c = null !== (i = ({
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                })[r.split("-")[0]]) && void 0 !== i ? i : "bottom"
                  , d = l && {
                    borderBottom: l,
                    borderRight: l
                }
                  , f = 0;
                if (l) {
                    let e = `${l}`.match(/(\d+)px/);
                    f = (null == e ? void 0 : e[1]) ? Number(e[1]) : 1
                }
                return {
                    tooltipStyles: s,
                    tooltipArrowStyles: {
                        left: null != a ? `${a}px` : "",
                        top: null != u ? `${u}px` : "",
                        right: "",
                        bottom: "",
                        ...d,
                        [c]: `-${4 + f}px`
                    },
                    place: r
                }
            }
            )) : eT(e, t, {
                placement: "bottom",
                strategy: i,
                middleware: a
            }).then( ({x: e, y: t, placement: r}) => ({
                tooltipStyles: {
                    left: `${e}px`,
                    top: `${t}px`
                },
                tooltipArrowStyles: {},
                place: r
            }))
        }
          , eM = (e, t) => !("CSS"in window && "supports"in window.CSS) || window.CSS.supports(e, t)
          , eP = (e, t, r) => {
            let n = null
              , o = function(...o) {
                let i = () => {
                    n = null,
                    r || e.apply(this, o)
                }
                ;
                r && !n && (e.apply(this, o),
                n = setTimeout(i, t)),
                r || (n && clearTimeout(n),
                n = setTimeout(i, t))
            };
            return o.cancel = () => {
                n && (clearTimeout(n),
                n = null)
            }
            ,
            o
        }
          , eU = e => null !== e && !Array.isArray(e) && "object" == typeof e
          , eV = (e, t) => {
            if (e === t)
                return !0;
            if (Array.isArray(e) && Array.isArray(t))
                return e.length === t.length && e.every( (e, r) => eV(e, t[r]));
            if (Array.isArray(e) !== Array.isArray(t))
                return !1;
            if (!eU(e) || !eU(t))
                return e === t;
            let r = Object.keys(e)
              , n = Object.keys(t);
            return r.length === n.length && r.every(r => eV(e[r], t[r]))
        }
          , eF = e => {
            if (!(e instanceof HTMLElement || e instanceof SVGElement))
                return !1;
            let t = getComputedStyle(e);
            return ["overflow", "overflow-x", "overflow-y"].some(e => {
                let r = t.getPropertyValue(e);
                return "auto" === r || "scroll" === r
            }
            )
        }
          , ez = e => {
            if (!e)
                return null;
            let t = e.parentElement;
            for (; t; ) {
                if (eF(t))
                    return t;
                t = t.parentElement
            }
            return document.scrollingElement || document.documentElement
        }
          , eH = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect
          , eW = e => {
            e.current && (clearTimeout(e.current),
            e.current = null)
        }
          , e$ = "DEFAULT_TOOLTIP_ID"
          , eq = {
            anchorRefs: new Set,
            activeAnchor: {
                current: null
            },
            attach: () => {}
            ,
            detach: () => {}
            ,
            setActiveAnchor: () => {}
        }
          , eK = (0,
        n.createContext)({
            getTooltipData: () => eq
        });
        function eG(e=e$) {
            return (0,
            n.useContext)(eK).getTooltipData(e)
        }
        var eJ = {
            tooltip: "core-styles-module_tooltip__3vRRp",
            fixed: "core-styles-module_fixed__pcSol",
            arrow: "core-styles-module_arrow__cvMwQ",
            noArrow: "core-styles-module_noArrow__xock6",
            clickable: "core-styles-module_clickable__ZuTTB",
            show: "core-styles-module_show__Nt9eE",
            closing: "core-styles-module_closing__sGnxF"
        }
          , eY = {
            tooltip: "styles-module_tooltip__mnnfp",
            arrow: "styles-module_arrow__K0L3T",
            dark: "styles-module_dark__xNqje",
            light: "styles-module_light__Z6W-X",
            success: "styles-module_success__A2AKt",
            warning: "styles-module_warning__SCK0X",
            error: "styles-module_error__JvumD",
            info: "styles-module_info__BWdHW"
        };
        let eX = ({forwardRef: e, id: t, className: r, classNameArrow: o, variant: i="dark", anchorId: s, anchorSelect: l, place: a="top", offset: u=10, events: c=["hover"], openOnClick: d=!1, positionStrategy: f="absolute", middlewares: h, wrapper: p, delayShow: y=0, delayHide: v=0, float: m=!1, hidden: w=!1, noArrow: g=!1, clickable: b=!1, closeOnEsc: E=!1, closeOnScroll: x=!1, closeOnResize: _=!1, openEvents: S, closeEvents: L, globalCloseEvents: A, imperativeModeOnly: O, style: k, position: T, afterShow: R, afterHide: C, disableTooltip: B, content: I, contentWrapperRef: N, isOpen: D, defaultIsOpen: j=!1, setIsOpen: M, activeAnchor: P, setActiveAnchor: U, border: V, opacity: F, arrowColor: z, role: H="tooltip"}) => {
            var W;
            let $ = (0,
            n.useRef)(null)
              , q = (0,
            n.useRef)(null)
              , K = (0,
            n.useRef)(null)
              , G = (0,
            n.useRef)(null)
              , J = (0,
            n.useRef)(null)
              , [Y,X] = (0,
            n.useState)({
                tooltipStyles: {},
                tooltipArrowStyles: {},
                place: a
            })
              , [Z,Q] = (0,
            n.useState)(!1)
              , [ee,et] = (0,
            n.useState)(!1)
              , [er,en] = (0,
            n.useState)(null)
              , eo = (0,
            n.useRef)(!1)
              , ei = (0,
            n.useRef)(null)
              , {anchorRefs: es, setActiveAnchor: el} = eG(t)
              , ea = (0,
            n.useRef)(!1)
              , [eu,ec] = (0,
            n.useState)([])
              , ed = (0,
            n.useRef)(!1)
              , ef = d || c.includes("click")
              , eh = ef || (null == S ? void 0 : S.click) || (null == S ? void 0 : S.dblclick) || (null == S ? void 0 : S.mousedown)
              , ep = S ? {
                ...S
            } : {
                mouseover: !0,
                focus: !0,
                mouseenter: !1,
                click: !1,
                dblclick: !1,
                mousedown: !1
            };
            !S && ef && Object.assign(ep, {
                mouseenter: !1,
                focus: !1,
                mouseover: !1,
                click: !0
            });
            let ey = L ? {
                ...L
            } : {
                mouseout: !0,
                blur: !0,
                mouseleave: !1,
                click: !1,
                dblclick: !1,
                mouseup: !1
            };
            !L && ef && Object.assign(ey, {
                mouseleave: !1,
                blur: !1,
                mouseout: !1
            });
            let ev = A ? {
                ...A
            } : {
                escape: E || !1,
                scroll: x || !1,
                resize: _ || !1,
                clickOutsideAnchor: eh || !1
            };
            O && (Object.assign(ep, {
                mouseenter: !1,
                focus: !1,
                click: !1,
                dblclick: !1,
                mousedown: !1
            }),
            Object.assign(ey, {
                mouseleave: !1,
                blur: !1,
                click: !1,
                dblclick: !1,
                mouseup: !1
            }),
            Object.assign(ev, {
                escape: !1,
                scroll: !1,
                resize: !1,
                clickOutsideAnchor: !1
            })),
            eH( () => (ed.current = !0,
            () => {
                ed.current = !1
            }
            ), []);
            let em = e => {
                ed.current && (e && et(!0),
                setTimeout( () => {
                    ed.current && (null == M || M(e),
                    void 0 === D && Q(e))
                }
                , 10))
            }
            ;
            (0,
            n.useEffect)( () => {
                if (void 0 === D)
                    return () => null;
                D && et(!0);
                let e = setTimeout( () => {
                    Q(D)
                }
                , 10);
                return () => {
                    clearTimeout(e)
                }
            }
            , [D]),
            (0,
            n.useEffect)( () => {
                if (Z !== eo.current) {
                    if (eW(J),
                    eo.current = Z,
                    Z)
                        null == R || R();
                    else {
                        let e = (e => {
                            let t = e.match(/^([\d.]+)(ms|s)$/);
                            if (!t)
                                return 0;
                            let[,r,n] = t;
                            return Number(r) * ("ms" === n ? 1 : 1e3)
                        }
                        )(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
                        J.current = setTimeout( () => {
                            et(!1),
                            en(null),
                            null == C || C()
                        }
                        , e + 25)
                    }
                }
            }
            , [Z]);
            let ew = e => {
                X(t => eV(t, e) ? t : e)
            }
              , eg = (e=y) => {
                eW(K),
                ee ? em(!0) : K.current = setTimeout( () => {
                    em(!0)
                }
                , e)
            }
              , eb = (e=v) => {
                eW(G),
                G.current = setTimeout( () => {
                    ea.current || em(!1)
                }
                , e)
            }
              , eE = e => {
                var t;
                if (!e)
                    return;
                let r = null !== (t = e.currentTarget) && void 0 !== t ? t : e.target;
                if (!(null == r ? void 0 : r.isConnected))
                    return U(null),
                    void el({
                        current: null
                    });
                y ? eg() : em(!0),
                U(r),
                el({
                    current: r
                }),
                eW(G)
            }
              , ex = () => {
                b ? eb(v || 100) : v ? eb() : em(!1),
                eW(K)
            }
              , e_ = ({x: e, y: t}) => {
                var r;
                let n = {
                    getBoundingClientRect: () => ({
                        x: e,
                        y: t,
                        width: 0,
                        height: 0,
                        top: t,
                        left: e,
                        right: e,
                        bottom: t
                    })
                };
                ej({
                    place: null !== (r = null == er ? void 0 : er.place) && void 0 !== r ? r : a,
                    offset: u,
                    elementReference: n,
                    tooltipReference: $.current,
                    tooltipArrowReference: q.current,
                    strategy: f,
                    middlewares: h,
                    border: V
                }).then(e => {
                    ew(e)
                }
                )
            }
              , eL = e => {
                if (!e)
                    return;
                let t = e
                  , r = {
                    x: t.clientX,
                    y: t.clientY
                };
                e_(r),
                ei.current = r
            }
              , eA = e => {
                var t;
                if (!Z)
                    return;
                let r = e.target;
                r.isConnected && (null === (t = $.current) || void 0 === t || !t.contains(r)) && ([document.querySelector(`[id='${s}']`), ...eu].some(e => null == e ? void 0 : e.contains(r)) || (em(!1),
                eW(K)))
            }
              , eO = eP(eE, 50, !0)
              , ek = eP(ex, 50, !0)
              , eT = e => {
                ek.cancel(),
                eO(e)
            }
              , eC = () => {
                eO.cancel(),
                ek()
            }
              , eB = (0,
            n.useCallback)( () => {
                var e, t;
                let r = null !== (e = null == er ? void 0 : er.position) && void 0 !== e ? e : T;
                r ? e_(r) : m ? ei.current && e_(ei.current) : (null == P ? void 0 : P.isConnected) && ej({
                    place: null !== (t = null == er ? void 0 : er.place) && void 0 !== t ? t : a,
                    offset: u,
                    elementReference: P,
                    tooltipReference: $.current,
                    tooltipArrowReference: q.current,
                    strategy: f,
                    middlewares: h,
                    border: V
                }).then(e => {
                    ed.current && ew(e)
                }
                )
            }
            , [Z, P, I, k, a, null == er ? void 0 : er.place, u, f, T, null == er ? void 0 : er.position, m]);
            (0,
            n.useEffect)( () => {
                var e, t;
                let r = new Set(es);
                eu.forEach(e => {
                    (null == B ? void 0 : B(e)) || r.add({
                        current: e
                    })
                }
                );
                let n = document.querySelector(`[id='${s}']`);
                !n || (null == B ? void 0 : B(n)) || r.add({
                    current: n
                });
                let o = () => {
                    em(!1)
                }
                  , i = ez(P)
                  , l = ez($.current);
                ev.scroll && (window.addEventListener("scroll", o),
                null == i || i.addEventListener("scroll", o),
                null == l || l.addEventListener("scroll", o));
                let a = null;
                ev.resize ? window.addEventListener("resize", o) : P && $.current && (a = eS(P, $.current, eB, {
                    ancestorResize: !0,
                    elementResize: !0,
                    layoutShift: !0
                }));
                let u = e => {
                    "Escape" === e.key && em(!1)
                }
                ;
                ev.escape && window.addEventListener("keydown", u),
                ev.clickOutsideAnchor && window.addEventListener("click", eA);
                let c = []
                  , d = e => {
                    Z && (null == e ? void 0 : e.target) === P || eE(e)
                }
                  , f = e => {
                    Z && (null == e ? void 0 : e.target) === P && ex()
                }
                  , h = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"]
                  , p = ["click", "dblclick", "mousedown", "mouseup"];
                Object.entries(ep).forEach( ([e,t]) => {
                    t && (h.includes(e) ? c.push({
                        event: e,
                        listener: eT
                    }) : p.includes(e) && c.push({
                        event: e,
                        listener: d
                    }))
                }
                ),
                Object.entries(ey).forEach( ([e,t]) => {
                    t && (h.includes(e) ? c.push({
                        event: e,
                        listener: eC
                    }) : p.includes(e) && c.push({
                        event: e,
                        listener: f
                    }))
                }
                ),
                m && c.push({
                    event: "pointermove",
                    listener: eL
                });
                let y = () => {
                    ea.current = !0
                }
                  , v = () => {
                    ea.current = !1,
                    ex()
                }
                ;
                return b && !eh && (null === (e = $.current) || void 0 === e || e.addEventListener("mouseenter", y),
                null === (t = $.current) || void 0 === t || t.addEventListener("mouseleave", v)),
                c.forEach( ({event: e, listener: t}) => {
                    r.forEach(r => {
                        var n;
                        null === (n = r.current) || void 0 === n || n.addEventListener(e, t)
                    }
                    )
                }
                ),
                () => {
                    var e, t;
                    ev.scroll && (window.removeEventListener("scroll", o),
                    null == i || i.removeEventListener("scroll", o),
                    null == l || l.removeEventListener("scroll", o)),
                    ev.resize ? window.removeEventListener("resize", o) : null == a || a(),
                    ev.clickOutsideAnchor && window.removeEventListener("click", eA),
                    ev.escape && window.removeEventListener("keydown", u),
                    b && !eh && (null === (e = $.current) || void 0 === e || e.removeEventListener("mouseenter", y),
                    null === (t = $.current) || void 0 === t || t.removeEventListener("mouseleave", v)),
                    c.forEach( ({event: e, listener: t}) => {
                        r.forEach(r => {
                            var n;
                            null === (n = r.current) || void 0 === n || n.removeEventListener(e, t)
                        }
                        )
                    }
                    )
                }
            }
            , [P, eB, ee, es, eu, S, L, A, ef, y, v]),
            (0,
            n.useEffect)( () => {
                var e, r;
                let n = null !== (r = null !== (e = null == er ? void 0 : er.anchorSelect) && void 0 !== e ? e : l) && void 0 !== r ? r : "";
                !n && t && (n = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`);
                let o = new MutationObserver(e => {
                    let r = []
                      , o = [];
                    e.forEach(e => {
                        if ("attributes" === e.type && "data-tooltip-id" === e.attributeName && (e.target.getAttribute("data-tooltip-id") === t ? r.push(e.target) : e.oldValue === t && o.push(e.target)),
                        "childList" === e.type) {
                            if (P) {
                                let t = [...e.removedNodes].filter(e => 1 === e.nodeType);
                                if (n)
                                    try {
                                        o.push(...t.filter(e => e.matches(n))),
                                        o.push(...t.flatMap(e => [...e.querySelectorAll(n)]))
                                    } catch (e) {}
                                t.some(e => {
                                    var t;
                                    return !!(null === (t = null == e ? void 0 : e.contains) || void 0 === t ? void 0 : t.call(e, P)) && (et(!1),
                                    em(!1),
                                    U(null),
                                    eW(K),
                                    eW(G),
                                    !0)
                                }
                                )
                            }
                            if (n)
                                try {
                                    let t = [...e.addedNodes].filter(e => 1 === e.nodeType);
                                    r.push(...t.filter(e => e.matches(n))),
                                    r.push(...t.flatMap(e => [...e.querySelectorAll(n)]))
                                } catch (e) {}
                        }
                    }
                    ),
                    (r.length || o.length) && ec(e => [...e.filter(e => !o.includes(e)), ...r])
                }
                );
                return o.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["data-tooltip-id"],
                    attributeOldValue: !0
                }),
                () => {
                    o.disconnect()
                }
            }
            , [t, l, null == er ? void 0 : er.anchorSelect, P]),
            (0,
            n.useEffect)( () => {
                eB()
            }
            , [eB]),
            (0,
            n.useEffect)( () => {
                if (!(null == N ? void 0 : N.current))
                    return () => null;
                let e = new ResizeObserver( () => {
                    setTimeout( () => eB())
                }
                );
                return e.observe(N.current),
                () => {
                    e.disconnect()
                }
            }
            , [I, null == N ? void 0 : N.current]),
            (0,
            n.useEffect)( () => {
                var e;
                let t = document.querySelector(`[id='${s}']`)
                  , r = [...eu, t];
                P && r.includes(P) || U(null !== (e = eu[0]) && void 0 !== e ? e : t)
            }
            , [s, eu, P]),
            (0,
            n.useEffect)( () => (j && em(!0),
            () => {
                eW(K),
                eW(G)
            }
            ), []),
            (0,
            n.useEffect)( () => {
                var e;
                let r = null !== (e = null == er ? void 0 : er.anchorSelect) && void 0 !== e ? e : l;
                if (!r && t && (r = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`),
                r)
                    try {
                        let e = Array.from(document.querySelectorAll(r));
                        ec(e)
                    } catch (e) {
                        ec([])
                    }
            }
            , [t, l, null == er ? void 0 : er.anchorSelect]),
            (0,
            n.useEffect)( () => {
                K.current && (eW(K),
                eg(y))
            }
            , [y]);
            let eI = null !== (W = null == er ? void 0 : er.content) && void 0 !== W ? W : I
              , eN = Z && Object.keys(Y.tooltipStyles).length > 0;
            return (0,
            n.useImperativeHandle)(e, () => ({
                open: e => {
                    if (null == e ? void 0 : e.anchorSelect)
                        try {
                            document.querySelector(e.anchorSelect)
                        } catch (t) {
                            return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)
                        }
                    en(null != e ? e : null),
                    (null == e ? void 0 : e.delay) ? eg(e.delay) : em(!0)
                }
                ,
                close: e => {
                    (null == e ? void 0 : e.delay) ? eb(e.delay) : em(!1)
                }
                ,
                activeAnchor: P,
                place: Y.place,
                isOpen: !!(ee && !w && eI && eN)
            })),
            ee && !w && eI ? n.createElement(p, {
                id: t,
                role: H,
                className: eR("react-tooltip", eJ.tooltip, eY.tooltip, eY[i], r, `react-tooltip__place-${Y.place}`, eJ[eN ? "show" : "closing"], eN ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === f && eJ.fixed, b && eJ.clickable),
                onTransitionEnd: e => {
                    eW(J),
                    Z || "opacity" !== e.propertyName || (et(!1),
                    en(null),
                    null == C || C())
                }
                ,
                style: {
                    ...k,
                    ...Y.tooltipStyles,
                    opacity: void 0 !== F && eN ? F : void 0
                },
                ref: $
            }, eI, n.createElement(p, {
                className: eR("react-tooltip-arrow", eJ.arrow, eY.arrow, o, g && eJ.noArrow),
                style: {
                    ...Y.tooltipArrowStyles,
                    background: z ? `linear-gradient(to right bottom, transparent 50%, ${z} 50%)` : void 0
                },
                ref: q
            })) : null
        }
          , eZ = ({content: e}) => n.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: e
            }
        })
          , eQ = n.forwardRef( ({id: e, anchorId: t, anchorSelect: r, content: o, html: i, render: s, className: l, classNameArrow: a, variant: u="dark", place: c="top", offset: d=10, wrapper: f="div", children: h=null, events: p=["hover"], openOnClick: y=!1, positionStrategy: v="absolute", middlewares: m, delayShow: w=0, delayHide: g=0, float: b=!1, hidden: E=!1, noArrow: x=!1, clickable: _=!1, closeOnEsc: S=!1, closeOnScroll: L=!1, closeOnResize: A=!1, openEvents: O, closeEvents: k, globalCloseEvents: T, imperativeModeOnly: R=!1, style: C, position: B, isOpen: I, defaultIsOpen: N=!1, disableStyleInjection: D=!1, border: j, opacity: M, arrowColor: P, setIsOpen: U, afterShow: V, afterHide: F, disableTooltip: z, role: H="tooltip"}, W) => {
            let[$,q] = (0,
            n.useState)(o)
              , [K,G] = (0,
            n.useState)(i)
              , [J,Y] = (0,
            n.useState)(c)
              , [X,Z] = (0,
            n.useState)(u)
              , [Q,ee] = (0,
            n.useState)(d)
              , [et,er] = (0,
            n.useState)(w)
              , [en,eo] = (0,
            n.useState)(g)
              , [ei,es] = (0,
            n.useState)(b)
              , [el,ea] = (0,
            n.useState)(E)
              , [eu,ec] = (0,
            n.useState)(f)
              , [ed,ef] = (0,
            n.useState)(p)
              , [eh,ep] = (0,
            n.useState)(v)
              , [ey,ev] = (0,
            n.useState)(null)
              , [em,ew] = (0,
            n.useState)(null)
              , eg = (0,
            n.useRef)(D)
              , {anchorRefs: eb, activeAnchor: eE} = eG(e)
              , ex = e => null == e ? void 0 : e.getAttributeNames().reduce( (t, r) => {
                var n;
                return r.startsWith("data-tooltip-") && (t[r.replace(/^data-tooltip-/, "")] = null !== (n = null == e ? void 0 : e.getAttribute(r)) && void 0 !== n ? n : null),
                t
            }
            , {})
              , e_ = e => {
                let t = {
                    place: e => {
                        var t;
                        Y(null !== (t = e) && void 0 !== t ? t : c)
                    }
                    ,
                    content: e => {
                        q(null != e ? e : o)
                    }
                    ,
                    html: e => {
                        G(null != e ? e : i)
                    }
                    ,
                    variant: e => {
                        var t;
                        Z(null !== (t = e) && void 0 !== t ? t : u)
                    }
                    ,
                    offset: e => {
                        ee(null === e ? d : Number(e))
                    }
                    ,
                    wrapper: e => {
                        var t;
                        ec(null !== (t = e) && void 0 !== t ? t : f)
                    }
                    ,
                    events: e => {
                        let t = null == e ? void 0 : e.split(" ");
                        ef(null != t ? t : p)
                    }
                    ,
                    "position-strategy": e => {
                        var t;
                        ep(null !== (t = e) && void 0 !== t ? t : v)
                    }
                    ,
                    "delay-show": e => {
                        er(null === e ? w : Number(e))
                    }
                    ,
                    "delay-hide": e => {
                        eo(null === e ? g : Number(e))
                    }
                    ,
                    float: e => {
                        es(null === e ? b : "true" === e)
                    }
                    ,
                    hidden: e => {
                        ea(null === e ? E : "true" === e)
                    }
                    ,
                    "class-name": e => {
                        ev(e)
                    }
                };
                Object.values(t).forEach(e => e(null)),
                Object.entries(e).forEach( ([e,r]) => {
                    var n;
                    null === (n = t[e]) || void 0 === n || n.call(t, r)
                }
                )
            }
            ;
            (0,
            n.useEffect)( () => {
                q(o)
            }
            , [o]),
            (0,
            n.useEffect)( () => {
                G(i)
            }
            , [i]),
            (0,
            n.useEffect)( () => {
                Y(c)
            }
            , [c]),
            (0,
            n.useEffect)( () => {
                Z(u)
            }
            , [u]),
            (0,
            n.useEffect)( () => {
                ee(d)
            }
            , [d]),
            (0,
            n.useEffect)( () => {
                er(w)
            }
            , [w]),
            (0,
            n.useEffect)( () => {
                eo(g)
            }
            , [g]),
            (0,
            n.useEffect)( () => {
                es(b)
            }
            , [b]),
            (0,
            n.useEffect)( () => {
                ea(E)
            }
            , [E]),
            (0,
            n.useEffect)( () => {
                ep(v)
            }
            , [v]),
            (0,
            n.useEffect)( () => {
                eg.current !== D && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
            }
            , [D]),
            (0,
            n.useEffect)( () => {
                "undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{
                    detail: {
                        disableCore: "core" === D,
                        disableBase: D
                    }
                }))
            }
            , []),
            (0,
            n.useEffect)( () => {
                var n;
                let o = new Set(eb)
                  , i = r;
                if (!i && e && (i = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`),
                i)
                    try {
                        document.querySelectorAll(i).forEach(e => {
                            o.add({
                                current: e
                            })
                        }
                        )
                    } catch (e) {
                        console.warn(`[react-tooltip] "${i}" is not a valid CSS selector`)
                    }
                let s = document.querySelector(`[id='${t}']`);
                if (s && o.add({
                    current: s
                }),
                !o.size)
                    return () => null;
                let l = null !== (n = null != em ? em : s) && void 0 !== n ? n : eE.current
                  , a = new MutationObserver(e => {
                    e.forEach(e => {
                        var t;
                        l && "attributes" === e.type && (null === (t = e.attributeName) || void 0 === t ? void 0 : t.startsWith("data-tooltip-")) && e_(ex(l))
                    }
                    )
                }
                )
                  , u = {
                    attributes: !0,
                    childList: !1,
                    subtree: !1
                };
                return l && (e_(ex(l)),
                a.observe(l, u)),
                () => {
                    a.disconnect()
                }
            }
            , [eb, eE, em, t, r]),
            (0,
            n.useEffect)( () => {
                (null == C ? void 0 : C.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),
                j && !eM("border", `${j}`) && console.warn(`[react-tooltip] "${j}" is not a valid \`border\`.`),
                (null == C ? void 0 : C.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),
                M && !eM("opacity", `${M}`) && console.warn(`[react-tooltip] "${M}" is not a valid \`opacity\`.`)
            }
            , []);
            let eS = h
              , eL = (0,
            n.useRef)(null);
            if (s) {
                let e = s({
                    content: (null == em ? void 0 : em.getAttribute("data-tooltip-content")) || $ || null,
                    activeAnchor: em
                });
                eS = e ? n.createElement("div", {
                    ref: eL,
                    className: "react-tooltip-content-wrapper"
                }, e) : null
            } else
                $ && (eS = $);
            K && (eS = n.createElement(eZ, {
                content: K
            }));
            let eA = {
                forwardRef: W,
                id: e,
                anchorId: t,
                anchorSelect: r,
                className: eR(l, ey),
                classNameArrow: a,
                content: eS,
                contentWrapperRef: eL,
                place: J,
                variant: X,
                offset: Q,
                wrapper: eu,
                events: ed,
                openOnClick: y,
                positionStrategy: eh,
                middlewares: m,
                delayShow: et,
                delayHide: en,
                float: ei,
                hidden: el,
                noArrow: x,
                clickable: _,
                closeOnEsc: S,
                closeOnScroll: L,
                closeOnResize: A,
                openEvents: O,
                closeEvents: k,
                globalCloseEvents: T,
                imperativeModeOnly: R,
                style: C,
                position: B,
                isOpen: I,
                defaultIsOpen: N,
                border: j,
                opacity: M,
                arrowColor: P,
                setIsOpen: U,
                afterShow: V,
                afterHide: F,
                disableTooltip: z,
                activeAnchor: em,
                setActiveAnchor: e => ew(e),
                role: H
            };
            return n.createElement(eX, {
                ...eA
            })
        }
        );
        "undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", e => {
            e.detail.disableCore || eD({
                css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
                type: "core"
            }),
            e.detail.disableBase || eD({
                css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
                type: "base"
            })
        }
        )
    },
    468: function(e, t, r) {
        "use strict";
        r.d(t, {
            S: function() {
                return l
            }
        });
        var n = r(25524)
          , o = r(90894);
        function i(e) {
            return {
                mutationFn: t => (0,
                o.n)(e, t),
                mutationKey: ["writeContract"]
            }
        }
        var s = r(94956);
        function l() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {mutation: t} = e
              , r = i((0,
            s.Z)(e))
              , {mutate: o, mutateAsync: l, ...a} = (0,
            n.D)({
                ...t,
                ...r
            });
            return {
                ...a,
                writeContract: o,
                writeContractAsync: l
            }
        }
    }
}]);
