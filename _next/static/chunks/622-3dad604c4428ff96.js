(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[622], {
    24459: function(e, t, r) {
        "use strict";
        t._O = t.Jq = t.KB = t.u8 = t.cv = void 0,
        t.Ik = t.A9 = t.n_ = t.gM = void 0;
        let n = r(9109);
        function i(e) {
            if (!(e instanceof Uint8Array))
                throw TypeError("b must be a Uint8Array")
        }
        function o(e) {
            return i(e),
            n.Buffer.from(e.buffer, e.byteOffset, e.length)
        }
        class s {
            constructor(e, t) {
                if (!Number.isInteger(e))
                    throw TypeError("span must be an integer");
                this.span = e,
                this.property = t
            }
            makeDestinationObject() {
                return {}
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
        function a(e, t) {
            return t.property ? e + "[" + t.property + "]" : e
        }
        class u extends s {
            isCount() {
                throw Error("ExternalLayout is abstract")
            }
        }
        class c extends u {
            constructor(e, t=0, r) {
                if (!(e instanceof s))
                    throw TypeError("layout must be a Layout");
                if (!Number.isInteger(t))
                    throw TypeError("offset must be integer or undefined");
                super(e.span, r || e.property),
                this.layout = e,
                this.offset = t
            }
            isCount() {
                return this.layout instanceof l || this.layout instanceof f
            }
            decode(e, t=0) {
                return this.layout.decode(e, t + this.offset)
            }
            encode(e, t, r=0) {
                return this.layout.encode(e, t, r + this.offset)
            }
        }
        class l extends s {
            constructor(e, t) {
                if (super(e, t),
                6 < this.span)
                    throw RangeError("span must not exceed 6 bytes")
            }
            decode(e, t=0) {
                return o(e).readUIntLE(t, this.span)
            }
            encode(e, t, r=0) {
                return o(t).writeUIntLE(e, r, this.span),
                this.span
            }
        }
        class f extends s {
            constructor(e, t) {
                if (super(e, t),
                6 < this.span)
                    throw RangeError("span must not exceed 6 bytes")
            }
            decode(e, t=0) {
                return o(e).readUIntBE(t, this.span)
            }
            encode(e, t, r=0) {
                return o(t).writeUIntBE(e, r, this.span),
                this.span
            }
        }
        function h(e) {
            let t = Math.floor(e / 4294967296);
            return {
                hi32: t,
                lo32: e - 4294967296 * t
            }
        }
        function d(e, t) {
            return 4294967296 * e + t
        }
        class p extends s {
            constructor(e) {
                super(8, e)
            }
            decode(e, t=0) {
                let r = o(e)
                  , n = r.readUInt32LE(t);
                return d(r.readUInt32LE(t + 4), n)
            }
            encode(e, t, r=0) {
                let n = h(e)
                  , i = o(t);
                return i.writeUInt32LE(n.lo32, r),
                i.writeUInt32LE(n.hi32, r + 4),
                8
            }
        }
        class y extends s {
            constructor(e) {
                super(8, e)
            }
            decode(e, t=0) {
                let r = o(e)
                  , n = r.readUInt32LE(t);
                return d(r.readInt32LE(t + 4), n)
            }
            encode(e, t, r=0) {
                let n = h(e)
                  , i = o(t);
                return i.writeUInt32LE(n.lo32, r),
                i.writeInt32LE(n.hi32, r + 4),
                8
            }
        }
        class g extends s {
            constructor(e, t, r) {
                if (!(e instanceof s))
                    throw TypeError("elementLayout must be a Layout");
                if (!(t instanceof u && t.isCount() || Number.isInteger(t) && 0 <= t))
                    throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                let n = -1;
                t instanceof u || !(0 < e.span) || (n = t * e.span),
                super(n, r),
                this.elementLayout = e,
                this.count = t
            }
            getSpan(e, t=0) {
                if (0 <= this.span)
                    return this.span;
                let r = 0
                  , n = this.count;
                if (n instanceof u && (n = n.decode(e, t)),
                0 < this.elementLayout.span)
                    r = n * this.elementLayout.span;
                else {
                    let i = 0;
                    for (; i < n; )
                        r += this.elementLayout.getSpan(e, t + r),
                        ++i
                }
                return r
            }
            decode(e, t=0) {
                let r = []
                  , n = 0
                  , i = this.count;
                for (i instanceof u && (i = i.decode(e, t)); n < i; )
                    r.push(this.elementLayout.decode(e, t)),
                    t += this.elementLayout.getSpan(e, t),
                    n += 1;
                return r
            }
            encode(e, t, r=0) {
                let n = this.elementLayout
                  , i = e.reduce( (e, i) => e + n.encode(i, t, r + e), 0);
                return this.count instanceof u && this.count.encode(e.length, t, r),
                i
            }
        }
        class b extends s {
            constructor(e, t, r) {
                if (!(Array.isArray(e) && e.reduce( (e, t) => e && t instanceof s, !0)))
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
            getSpan(e, t=0) {
                if (0 <= this.span)
                    return this.span;
                let r = 0;
                try {
                    r = this.fields.reduce( (r, n) => {
                        let i = n.getSpan(e, t);
                        return t += i,
                        r + i
                    }
                    , 0)
                } catch (e) {
                    throw RangeError("indeterminate span")
                }
                return r
            }
            decode(e, t=0) {
                i(e);
                let r = this.makeDestinationObject();
                for (let n of this.fields)
                    if (void 0 !== n.property && (r[n.property] = n.decode(e, t)),
                    t += n.getSpan(e, t),
                    this.decodePrefixes && e.length === t)
                        break;
                return r
            }
            encode(e, t, r=0) {
                let n = r
                  , i = 0
                  , o = 0;
                for (let n of this.fields) {
                    let s = n.span;
                    if (o = 0 < s ? s : 0,
                    void 0 !== n.property) {
                        let i = e[n.property];
                        void 0 !== i && (o = n.encode(i, t, r),
                        0 > s && (s = n.getSpan(t, r)))
                    }
                    i = r,
                    r += s
                }
                return i + o - n
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
        class m {
            constructor(e) {
                this.property = e
            }
            decode(e, t) {
                throw Error("UnionDiscriminator is abstract")
            }
            encode(e, t, r) {
                throw Error("UnionDiscriminator is abstract")
            }
        }
        class w extends m {
            constructor(e, t) {
                if (!(e instanceof u && e.isCount()))
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
        class v extends s {
            constructor(e, t, r) {
                let n;
                if (e instanceof l || e instanceof f)
                    n = new w(new c(e));
                else if (e instanceof u && e.isCount())
                    n = new w(e);
                else if (e instanceof m)
                    n = e;
                else
                    throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                if (void 0 === t && (t = null),
                !(null === t || t instanceof s))
                    throw TypeError("defaultLayout must be null or a Layout");
                if (null !== t) {
                    if (0 > t.span)
                        throw Error("defaultLayout must have constant span");
                    void 0 === t.property && (t = t.replicate("content"))
                }
                let i = -1;
                t && 0 <= (i = t.span) && (e instanceof l || e instanceof f) && (i += n.layout.span),
                super(i, r),
                this.discriminator = n,
                this.usesPrefixDiscriminator = e instanceof l || e instanceof f,
                this.defaultLayout = t,
                this.registry = {};
                let o = this.defaultGetSourceVariant.bind(this);
                this.getSourceVariant = function(e) {
                    return o(e)
                }
                ,
                this.configGetSourceVariant = function(e) {
                    o = e.bind(this)
                }
            }
            getSpan(e, t=0) {
                if (0 <= this.span)
                    return this.span;
                let r = this.getVariant(e, t);
                if (!r)
                    throw Error("unable to determine span for unrecognized variant");
                return r.getSpan(e, t)
            }
            defaultGetSourceVariant(e) {
                if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
                    if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property))
                        return;
                    let t = this.registry[e[this.discriminator.property]];
                    if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
                        return t
                } else
                    for (let t in this.registry) {
                        let r = this.registry[t];
                        if (r.property && Object.prototype.hasOwnProperty.call(e, r.property))
                            return r
                    }
                throw Error("unable to infer src variant")
            }
            decode(e, t=0) {
                let r;
                let n = this.discriminator
                  , i = n.decode(e, t)
                  , o = this.registry[i];
                if (void 0 === o) {
                    let o = this.defaultLayout
                      , s = 0;
                    this.usesPrefixDiscriminator && (s = n.layout.span),
                    (r = this.makeDestinationObject())[n.property] = i,
                    r[o.property] = o.decode(e, t + s)
                } else
                    r = o.decode(e, t);
                return r
            }
            encode(e, t, r=0) {
                let n = this.getSourceVariant(e);
                if (void 0 === n) {
                    let n = this.discriminator
                      , i = this.defaultLayout
                      , o = 0;
                    return this.usesPrefixDiscriminator && (o = n.layout.span),
                    n.encode(e[n.property], t, r),
                    o + i.encode(e[i.property], t, r + o)
                }
                return n.encode(e, t, r)
            }
            addVariant(e, t, r) {
                let n = new x(this,e,t,r);
                return this.registry[e] = n,
                n
            }
            getVariant(e, t=0) {
                let r;
                return e instanceof Uint8Array ? r = this.discriminator.decode(e, t) : r = e,
                this.registry[r]
            }
        }
        class x extends s {
            constructor(e, t, r, n) {
                if (!(e instanceof v))
                    throw TypeError("union must be a Union");
                if (!Number.isInteger(t) || 0 > t)
                    throw TypeError("variant must be a (non-negative) integer");
                if ("string" == typeof r && void 0 === n && (n = r,
                r = null),
                r) {
                    if (!(r instanceof s))
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
            getSpan(e, t=0) {
                if (0 <= this.span)
                    return this.span;
                let r = 0;
                this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
                let n = 0;
                return this.layout && (n = this.layout.getSpan(e, t + r)),
                r + n
            }
            decode(e, t=0) {
                let r = this.makeDestinationObject();
                if (this !== this.union.getVariant(e, t))
                    throw Error("variant mismatch");
                let n = 0;
                return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span),
                this.layout ? r[this.property] = this.layout.decode(e, t + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant),
                r
            }
            encode(e, t, r=0) {
                let n = 0;
                if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span),
                this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
                    throw TypeError("variant lacks property " + this.property);
                this.union.discriminator.encode(this.variant, t, r);
                let i = n;
                if (this.layout && (this.layout.encode(e[this.property], t, r + n),
                i += this.layout.getSpan(t, r + n),
                0 <= this.union.span && i > this.union.span))
                    throw Error("encoded variant overruns containing union");
                return i
            }
            fromArray(e) {
                if (this.layout)
                    return this.layout.fromArray(e)
            }
        }
        function E(e) {
            return 0 > e && (e += 4294967296),
            e
        }
        class _ extends s {
            constructor(e, t, r) {
                if (!(e instanceof l || e instanceof f))
                    throw TypeError("word must be a UInt or UIntBE layout");
                if ("string" == typeof t && void 0 === r && (r = t,
                t = !1),
                4 < e.span)
                    throw RangeError("word cannot exceed 32 bits");
                super(e.span, r),
                this.word = e,
                this.msb = !!t,
                this.fields = [];
                let n = 0;
                this._packedSetValue = function(e) {
                    return n = E(e),
                    this
                }
                ,
                this._packedGetValue = function() {
                    return n
                }
            }
            decode(e, t=0) {
                let r = this.makeDestinationObject()
                  , n = this.word.decode(e, t);
                for (let t of (this._packedSetValue(n),
                this.fields))
                    void 0 !== t.property && (r[t.property] = t.decode(e));
                return r
            }
            encode(e, t, r=0) {
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
                let r = new A(this,e,t);
                return this.fields.push(r),
                r
            }
            addBoolean(e) {
                let t = new B(this,e);
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
        class A {
            constructor(e, t, r) {
                if (!(e instanceof _))
                    throw TypeError("container must be a BitStructure");
                if (!Number.isInteger(t) || 0 >= t)
                    throw TypeError("bits must be positive integer");
                let n = 8 * e.span
                  , i = e.fields.reduce( (e, t) => e + t.bits, 0);
                if (t + i > n)
                    throw Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                this.container = e,
                this.bits = t,
                this.valueMask = (1 << t) - 1,
                32 === t && (this.valueMask = 4294967295),
                this.start = i,
                this.container.msb && (this.start = n - i - t),
                this.wordMask = E(this.valueMask << this.start),
                this.property = r
            }
            decode(e, t) {
                return E(this.container._packedGetValue() & this.wordMask) >>> this.start
            }
            encode(e) {
                if ("number" != typeof e || !Number.isInteger(e) || e !== E(e & this.valueMask))
                    throw TypeError(a("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                let t = this.container._packedGetValue()
                  , r = E(e << this.start);
                this.container._packedSetValue(E(t & ~this.wordMask) | r)
            }
        }
        class B extends A {
            constructor(e, t) {
                super(e, 1, t)
            }
            decode(e, t) {
                return !!super.decode(e, t)
            }
            encode(e) {
                "boolean" == typeof e && (e = +e),
                super.encode(e)
            }
        }
        class S extends s {
            constructor(e, t) {
                if (!(e instanceof u && e.isCount() || Number.isInteger(e) && 0 <= e))
                    throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                let r = -1;
                e instanceof u || (r = e),
                super(r, t),
                this.length = e
            }
            getSpan(e, t) {
                let r = this.span;
                return 0 > r && (r = this.length.decode(e, t)),
                r
            }
            decode(e, t=0) {
                let r = this.span;
                return 0 > r && (r = this.length.decode(e, t)),
                o(e).slice(t, t + r)
            }
            encode(e, t, r) {
                let n = this.length;
                if (this.length instanceof u && (n = e.length),
                !(e instanceof Uint8Array && n === e.length))
                    throw TypeError(a("Blob.encode", this) + " requires (length " + n + ") Uint8Array as src");
                if (r + n > t.length)
                    throw RangeError("encoding overruns Uint8Array");
                let i = o(e);
                return o(t).write(i.toString("hex"), r, n, "hex"),
                this.length instanceof u && this.length.encode(n, t, r),
                n
            }
        }
        t.cv = (e, t, r) => new c(e,t,r),
        t.u8 = e => new l(1,e),
        t.KB = e => new l(2,e),
        t.Jq = e => new l(4,e),
        t._O = e => new p(e),
        t.gM = e => new y(e),
        t.n_ = (e, t, r) => new b(e,t,r),
        t.A9 = (e, t, r) => new g(e,t,r),
        t.Ik = (e, t) => new S(e,t)
    },
    35197: function(e, t, r) {
        "use strict";
        var n = r(10632).Buffer;
        e.exports = function(e) {
            if (e.length >= 255)
                throw TypeError("Alphabet too long");
            for (var t = new Uint8Array(256), r = 0; r < t.length; r++)
                t[r] = 255;
            for (var i = 0; i < e.length; i++) {
                var o = e.charAt(i)
                  , s = o.charCodeAt(0);
                if (255 !== t[s])
                    throw TypeError(o + " is ambiguous");
                t[s] = i
            }
            var a = e.length
              , u = e.charAt(0)
              , c = Math.log(a) / Math.log(256)
              , l = Math.log(256) / Math.log(a);
            function f(e) {
                if ("string" != typeof e)
                    throw TypeError("Expected String");
                if (0 === e.length)
                    return n.alloc(0);
                for (var r = 0, i = 0, o = 0; e[r] === u; )
                    i++,
                    r++;
                for (var s = (e.length - r) * c + 1 >>> 0, l = new Uint8Array(s); r < e.length; ) {
                    var f = t[e.charCodeAt(r)];
                    if (255 === f)
                        return;
                    for (var h = 0, d = s - 1; (0 !== f || h < o) && -1 !== d; d--,
                    h++)
                        f += a * l[d] >>> 0,
                        l[d] = f % 256 >>> 0,
                        f = f / 256 >>> 0;
                    if (0 !== f)
                        throw Error("Non-zero carry");
                    o = h,
                    r++
                }
                for (var p = s - o; p !== s && 0 === l[p]; )
                    p++;
                var y = n.allocUnsafe(i + (s - p));
                y.fill(0, 0, i);
                for (var g = i; p !== s; )
                    y[g++] = l[p++];
                return y
            }
            return {
                encode: function(t) {
                    if ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
                    !n.isBuffer(t))
                        throw TypeError("Expected Buffer");
                    if (0 === t.length)
                        return "";
                    for (var r = 0, i = 0, o = 0, s = t.length; o !== s && 0 === t[o]; )
                        o++,
                        r++;
                    for (var c = (s - o) * l + 1 >>> 0, f = new Uint8Array(c); o !== s; ) {
                        for (var h = t[o], d = 0, p = c - 1; (0 !== h || d < i) && -1 !== p; p--,
                        d++)
                            h += 256 * f[p] >>> 0,
                            f[p] = h % a >>> 0,
                            h = h / a >>> 0;
                        if (0 !== h)
                            throw Error("Non-zero carry");
                        i = d,
                        o++
                    }
                    for (var y = c - i; y !== c && 0 === f[y]; )
                        y++;
                    for (var g = u.repeat(r); y < c; ++y)
                        g += e.charAt(f[y]);
                    return g
                },
                decodeUnsafe: f,
                decode: function(e) {
                    var t = f(e);
                    if (t)
                        return t;
                    throw Error("Non-base" + a + " character")
                }
            }
        }
    },
    12653: function(e, t, r) {
        "use strict";
        var n = r(9109).Buffer;
        t.oU = function(e) {
            {
                let t = n.from(e);
                t.reverse();
                let r = t.toString("hex");
                return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`)
            }
        }
        ,
        t.k$ = function(e, t) {
            {
                let r = e.toString(16)
                  , i = n.from(r.padStart(2 * t, "0").slice(0, 2 * t), "hex");
                return i.reverse(),
                i
            }
        }
    },
    5810: function(e, t, r) {
        "use strict";
        var n = r(9109).Buffer
          , i = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , s = this && this.__decorate || function(e, t, r, n) {
            var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, r, n);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s),
            s
        }
          , a = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.hasOwnProperty.call(e, r) && i(t, e, r);
            return o(t, e),
            t
        }
          , u = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.deserializeUnchecked = t.deserialize = t.serialize = t.BinaryReader = t.BinaryWriter = t.BorshError = t.baseDecode = t.baseEncode = void 0;
        let c = u(r(58171))
          , l = u(r(46124))
          , f = a(r(57139))
          , h = new ("function" != typeof TextDecoder ? f.TextDecoder : TextDecoder)("utf-8",{
            fatal: !0
        });
        t.baseEncode = function(e) {
            return "string" == typeof e && (e = n.from(e, "utf8")),
            l.default.encode(n.from(e))
        }
        ,
        t.baseDecode = function(e) {
            return n.from(l.default.decode(e))
        }
        ;
        class d extends Error {
            constructor(e) {
                super(e),
                this.fieldPath = [],
                this.originalMessage = e
            }
            addToFieldPath(e) {
                this.fieldPath.splice(0, 0, e),
                this.message = this.originalMessage + ": " + this.fieldPath.join(".")
            }
        }
        t.BorshError = d;
        class p {
            constructor() {
                this.buf = n.alloc(1024),
                this.length = 0
            }
            maybeResize() {
                this.buf.length < 16 + this.length && (this.buf = n.concat([this.buf, n.alloc(1024)]))
            }
            writeU8(e) {
                this.maybeResize(),
                this.buf.writeUInt8(e, this.length),
                this.length += 1
            }
            writeU16(e) {
                this.maybeResize(),
                this.buf.writeUInt16LE(e, this.length),
                this.length += 2
            }
            writeU32(e) {
                this.maybeResize(),
                this.buf.writeUInt32LE(e, this.length),
                this.length += 4
            }
            writeU64(e) {
                this.maybeResize(),
                this.writeBuffer(n.from(new c.default(e).toArray("le", 8)))
            }
            writeU128(e) {
                this.maybeResize(),
                this.writeBuffer(n.from(new c.default(e).toArray("le", 16)))
            }
            writeU256(e) {
                this.maybeResize(),
                this.writeBuffer(n.from(new c.default(e).toArray("le", 32)))
            }
            writeU512(e) {
                this.maybeResize(),
                this.writeBuffer(n.from(new c.default(e).toArray("le", 64)))
            }
            writeBuffer(e) {
                this.buf = n.concat([n.from(this.buf.subarray(0, this.length)), e, n.alloc(1024)]),
                this.length += e.length
            }
            writeString(e) {
                this.maybeResize();
                let t = n.from(e, "utf8");
                this.writeU32(t.length),
                this.writeBuffer(t)
            }
            writeFixedArray(e) {
                this.writeBuffer(n.from(e))
            }
            writeArray(e, t) {
                for (let r of (this.maybeResize(),
                this.writeU32(e.length),
                e))
                    this.maybeResize(),
                    t(r)
            }
            toArray() {
                return this.buf.subarray(0, this.length)
            }
        }
        function y(e, t, r) {
            let n = r.value;
            r.value = function(...e) {
                try {
                    return n.apply(this, e)
                } catch (e) {
                    if (e instanceof RangeError && ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(e.code) >= 0)
                        throw new d("Reached the end of buffer when deserializing");
                    throw e
                }
            }
        }
        t.BinaryWriter = p;
        class g {
            constructor(e) {
                this.buf = e,
                this.offset = 0
            }
            readU8() {
                let e = this.buf.readUInt8(this.offset);
                return this.offset += 1,
                e
            }
            readU16() {
                let e = this.buf.readUInt16LE(this.offset);
                return this.offset += 2,
                e
            }
            readU32() {
                let e = this.buf.readUInt32LE(this.offset);
                return this.offset += 4,
                e
            }
            readU64() {
                let e = this.readBuffer(8);
                return new c.default(e,"le")
            }
            readU128() {
                let e = this.readBuffer(16);
                return new c.default(e,"le")
            }
            readU256() {
                let e = this.readBuffer(32);
                return new c.default(e,"le")
            }
            readU512() {
                let e = this.readBuffer(64);
                return new c.default(e,"le")
            }
            readBuffer(e) {
                if (this.offset + e > this.buf.length)
                    throw new d(`Expected buffer length ${e} isn't within bounds`);
                let t = this.buf.slice(this.offset, this.offset + e);
                return this.offset += e,
                t
            }
            readString() {
                let e = this.readU32()
                  , t = this.readBuffer(e);
                try {
                    return h.decode(t)
                } catch (e) {
                    throw new d(`Error decoding UTF-8 string: ${e}`)
                }
            }
            readFixedArray(e) {
                return new Uint8Array(this.readBuffer(e))
            }
            readArray(e) {
                let t = this.readU32()
                  , r = [];
                for (let n = 0; n < t; ++n)
                    r.push(e());
                return r
            }
        }
        function b(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        function m(e, t, r, n, i) {
            try {
                if ("string" == typeof n)
                    i[`write${b(n)}`](r);
                else if (n instanceof Array) {
                    if ("number" == typeof n[0]) {
                        if (r.length !== n[0])
                            throw new d(`Expecting byte array of length ${n[0]}, but got ${r.length} bytes`);
                        i.writeFixedArray(r)
                    } else if (2 === n.length && "number" == typeof n[1]) {
                        if (r.length !== n[1])
                            throw new d(`Expecting byte array of length ${n[1]}, but got ${r.length} bytes`);
                        for (let t = 0; t < n[1]; t++)
                            m(e, null, r[t], n[0], i)
                    } else
                        i.writeArray(r, r => {
                            m(e, t, r, n[0], i)
                        }
                        )
                } else if (void 0 !== n.kind)
                    switch (n.kind) {
                    case "option":
                        null == r ? i.writeU8(0) : (i.writeU8(1),
                        m(e, t, r, n.type, i));
                        break;
                    case "map":
                        i.writeU32(r.size),
                        r.forEach( (r, o) => {
                            m(e, t, o, n.key, i),
                            m(e, t, r, n.value, i)
                        }
                        );
                        break;
                    default:
                        throw new d(`FieldType ${n} unrecognized`)
                    }
                else
                    w(e, r, i)
            } catch (e) {
                throw e instanceof d && e.addToFieldPath(t),
                e
            }
        }
        function w(e, t, r) {
            if ("function" == typeof t.borshSerialize) {
                t.borshSerialize(r);
                return
            }
            let n = e.get(t.constructor);
            if (!n)
                throw new d(`Class ${t.constructor.name} is missing in schema`);
            if ("struct" === n.kind)
                n.fields.map( ([n,i]) => {
                    m(e, n, t[n], i, r)
                }
                );
            else if ("enum" === n.kind) {
                let i = t[n.field];
                for (let o = 0; o < n.values.length; ++o) {
                    let[s,a] = n.values[o];
                    if (s === i) {
                        r.writeU8(o),
                        m(e, s, t[s], a, r);
                        break
                    }
                }
            } else
                throw new d(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`)
        }
        function v(e, t, r, n) {
            try {
                if ("string" == typeof r)
                    return n[`read${b(r)}`]();
                if (r instanceof Array) {
                    if ("number" == typeof r[0])
                        return n.readFixedArray(r[0]);
                    if ("number" != typeof r[1])
                        return n.readArray( () => v(e, t, r[0], n));
                    {
                        let t = [];
                        for (let i = 0; i < r[1]; i++)
                            t.push(v(e, null, r[0], n));
                        return t
                    }
                }
                if ("option" === r.kind) {
                    if (n.readU8())
                        return v(e, t, r.type, n);
                    return
                }
                if ("map" === r.kind) {
                    let i = new Map
                      , o = n.readU32();
                    for (let s = 0; s < o; s++) {
                        let o = v(e, t, r.key, n)
                          , s = v(e, t, r.value, n);
                        i.set(o, s)
                    }
                    return i
                }
                return x(e, r, n)
            } catch (e) {
                throw e instanceof d && e.addToFieldPath(t),
                e
            }
        }
        function x(e, t, r) {
            if ("function" == typeof t.borshDeserialize)
                return t.borshDeserialize(r);
            let n = e.get(t);
            if (!n)
                throw new d(`Class ${t.name} is missing in schema`);
            if ("struct" === n.kind) {
                let n = {};
                for (let[i,o] of e.get(t).fields)
                    n[i] = v(e, i, o, r);
                return new t(n)
            }
            if ("enum" === n.kind) {
                let i = r.readU8();
                if (i >= n.values.length)
                    throw new d(`Enum index: ${i} is out of range`);
                let[o,s] = n.values[i]
                  , a = v(e, o, s, r);
                return new t({
                    [o]: a
                })
            }
            throw new d(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`)
        }
        s([y], g.prototype, "readU8", null),
        s([y], g.prototype, "readU16", null),
        s([y], g.prototype, "readU32", null),
        s([y], g.prototype, "readU64", null),
        s([y], g.prototype, "readU128", null),
        s([y], g.prototype, "readU256", null),
        s([y], g.prototype, "readU512", null),
        s([y], g.prototype, "readString", null),
        s([y], g.prototype, "readFixedArray", null),
        s([y], g.prototype, "readArray", null),
        t.BinaryReader = g,
        t.serialize = function(e, t, r=p) {
            let n = new r;
            return w(e, t, n),
            n.toArray()
        }
        ,
        t.deserialize = function(e, t, r, n=g) {
            let i = new n(r)
              , o = x(e, t, i);
            if (i.offset < r.length)
                throw new d(`Unexpected ${r.length - i.offset} bytes after deserialized data`);
            return o
        }
        ,
        t.deserializeUnchecked = function(e, t, r, n=g) {
            return x(e, t, new n(r))
        }
    },
    46124: function(e, t, r) {
        var n = r(35197);
        e.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    },
    4531: function(e, t, r) {
        "use strict";
        let n = r(3538).v4
          , i = r(62309)
          , o = function(e, t) {
            if (!(this instanceof o))
                return new o(e,t);
            t || (t = {}),
            this.options = {
                reviver: void 0 !== t.reviver ? t.reviver : null,
                replacer: void 0 !== t.replacer ? t.replacer : null,
                generator: void 0 !== t.generator ? t.generator : function() {
                    return n()
                }
                ,
                version: void 0 !== t.version ? t.version : 2,
                notificationIdNull: "boolean" == typeof t.notificationIdNull && t.notificationIdNull
            },
            this.callServer = e
        };
        e.exports = o,
        o.prototype.request = function(e, t, r, n) {
            let o;
            let s = this
              , a = null
              , u = Array.isArray(e) && "function" == typeof t;
            if (1 === this.options.version && u)
                throw TypeError("JSON-RPC 1.0 does not support batching");
            let c = !u && e && "object" == typeof e && "function" == typeof t;
            if (u || c)
                n = t,
                a = e;
            else {
                "function" == typeof r && (n = r,
                r = void 0);
                let o = "function" == typeof n;
                try {
                    a = i(e, t, r, {
                        generator: this.options.generator,
                        version: this.options.version,
                        notificationIdNull: this.options.notificationIdNull
                    })
                } catch (e) {
                    if (o)
                        return n(e);
                    throw e
                }
                if (!o)
                    return a
            }
            try {
                o = JSON.stringify(a, this.options.replacer)
            } catch (e) {
                return n(e)
            }
            return this.callServer(o, function(e, t) {
                s._parseResponse(e, t, n)
            }),
            a
        }
        ,
        o.prototype._parseResponse = function(e, t, r) {
            let n;
            if (e) {
                r(e);
                return
            }
            if (!t)
                return r();
            try {
                n = JSON.parse(t, this.options.reviver)
            } catch (e) {
                return r(e)
            }
            if (3 === r.length) {
                if (!Array.isArray(n))
                    return r(null, n.error, n.result);
                {
                    let e = function(e) {
                        return void 0 !== e.error
                    };
                    return r(null, n.filter(e), n.filter(function(t) {
                        return !e(t)
                    }))
                }
            }
            r(null, n)
        }
    },
    62309: function(e, t, r) {
        "use strict";
        let n = r(3538).v4;
        e.exports = function(e, t, r, i) {
            if ("string" != typeof e)
                throw TypeError(e + " must be a string");
            let o = "number" == typeof (i = i || {}).version ? i.version : 2;
            if (1 !== o && 2 !== o)
                throw TypeError(o + " must be 1 or 2");
            let s = {
                method: e
            };
            if (2 === o && (s.jsonrpc = "2.0"),
            t) {
                if ("object" != typeof t && !Array.isArray(t))
                    throw TypeError(t + " must be an object, array or omitted");
                s.params = t
            }
            if (void 0 === r) {
                let e = "function" == typeof i.generator ? i.generator : function() {
                    return n()
                }
                ;
                s.id = e(s, i)
            } else
                2 === o && null === r ? i.notificationIdNull && (s.id = null) : s.id = r;
            return s
        }
    },
    16463: function(e, t, r) {
        "use strict";
        var n = r(71169);
        r.o(n, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return n.useSearchParams
            }
        })
    },
    57139: function(e, t) {
        "use strict";
        function r(e, t, r) {
            return t <= e && e <= r
        }
        function n(e) {
            if (void 0 === e)
                return {};
            if (e === Object(e))
                return e;
            throw TypeError("Could not convert argument to dictionary")
        }
        function i(e) {
            this.tokens = [].slice.call(e)
        }
        function o(e, t) {
            if (e)
                throw TypeError("Decoder error");
            return t || 65533
        }
        i.prototype = {
            endOfStream: function() {
                return !this.tokens.length
            },
            read: function() {
                return this.tokens.length ? this.tokens.shift() : -1
            },
            prepend: function(e) {
                if (Array.isArray(e))
                    for (; e.length; )
                        this.tokens.unshift(e.pop());
                else
                    this.tokens.unshift(e)
            },
            push: function(e) {
                if (Array.isArray(e))
                    for (; e.length; )
                        this.tokens.push(e.shift());
                else
                    this.tokens.push(e)
            }
        };
        var s = "utf-8";
        function a(e, t) {
            if (!(this instanceof a))
                return new a(e,t);
            if ((e = void 0 !== e ? String(e).toLowerCase() : s) !== s)
                throw Error("Encoding not supported. Only utf-8 is supported");
            t = n(t),
            this._streaming = !1,
            this._BOMseen = !1,
            this._decoder = null,
            this._fatal = !!t.fatal,
            this._ignoreBOM = !!t.ignoreBOM,
            Object.defineProperty(this, "encoding", {
                value: "utf-8"
            }),
            Object.defineProperty(this, "fatal", {
                value: this._fatal
            }),
            Object.defineProperty(this, "ignoreBOM", {
                value: this._ignoreBOM
            })
        }
        function u(e, t) {
            if (!(this instanceof u))
                return new u(e,t);
            if ((e = void 0 !== e ? String(e).toLowerCase() : s) !== s)
                throw Error("Encoding not supported. Only utf-8 is supported");
            t = n(t),
            this._streaming = !1,
            this._encoder = null,
            this._options = {
                fatal: !!t.fatal
            },
            Object.defineProperty(this, "encoding", {
                value: "utf-8"
            })
        }
        function c(e) {
            var t = e.fatal
              , n = 0
              , i = 0
              , s = 0
              , a = 128
              , u = 191;
            this.handler = function(e, c) {
                if (-1 === c && 0 !== s)
                    return s = 0,
                    o(t);
                if (-1 === c)
                    return -1;
                if (0 === s) {
                    if (r(c, 0, 127))
                        return c;
                    if (r(c, 194, 223))
                        s = 1,
                        n = c - 192;
                    else if (r(c, 224, 239))
                        224 === c && (a = 160),
                        237 === c && (u = 159),
                        s = 2,
                        n = c - 224;
                    else {
                        if (!r(c, 240, 244))
                            return o(t);
                        240 === c && (a = 144),
                        244 === c && (u = 143),
                        s = 3,
                        n = c - 240
                    }
                    return n <<= 6 * s,
                    null
                }
                if (!r(c, a, u))
                    return n = s = i = 0,
                    a = 128,
                    u = 191,
                    e.prepend(c),
                    o(t);
                if (a = 128,
                u = 191,
                i += 1,
                n += c - 128 << 6 * (s - i),
                i !== s)
                    return null;
                var l = n;
                return n = s = i = 0,
                l
            }
        }
        function l(e) {
            e.fatal,
            this.handler = function(e, t) {
                if (-1 === t)
                    return -1;
                if (r(t, 0, 127))
                    return t;
                r(t, 128, 2047) ? (n = 1,
                i = 192) : r(t, 2048, 65535) ? (n = 2,
                i = 224) : r(t, 65536, 1114111) && (n = 3,
                i = 240);
                for (var n, i, o = [(t >> 6 * n) + i]; n > 0; ) {
                    var s = t >> 6 * (n - 1);
                    o.push(128 | 63 & s),
                    n -= 1
                }
                return o
            }
        }
        a.prototype = {
            decode: function(e, t) {
                r = "object" == typeof e && e instanceof ArrayBuffer ? new Uint8Array(e) : "object" == typeof e && "buffer"in e && e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : new Uint8Array(0),
                t = n(t),
                this._streaming || (this._decoder = new c({
                    fatal: this._fatal
                }),
                this._BOMseen = !1),
                this._streaming = !!t.stream;
                for (var r, o, s = new i(r), a = []; !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read())); )
                    null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
                if (!this._streaming) {
                    do {
                        if (-1 === (o = this._decoder.handler(s, s.read())))
                            break;
                        if (null === o)
                            continue;
                        Array.isArray(o) ? a.push.apply(a, o) : a.push(o)
                    } while (!s.endOfStream());
                    this._decoder = null
                }
                return !a.length || -1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === a[0] ? (this._BOMseen = !0,
                a.shift()) : this._BOMseen = !0),
                function(e) {
                    for (var t = "", r = 0; r < e.length; ++r) {
                        var n = e[r];
                        n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536,
                        t += String.fromCharCode((n >> 10) + 55296, (1023 & n) + 56320))
                    }
                    return t
                }(a)
            }
        },
        u.prototype = {
            encode: function(e, t) {
                e = e ? String(e) : "",
                t = n(t),
                this._streaming || (this._encoder = new l(this._options)),
                this._streaming = !!t.stream;
                for (var r, o = [], s = new i(function(e) {
                    for (var t = String(e), r = t.length, n = 0, i = []; n < r; ) {
                        var o = t.charCodeAt(n);
                        if (o < 55296 || o > 57343)
                            i.push(o);
                        else if (56320 <= o && o <= 57343)
                            i.push(65533);
                        else if (55296 <= o && o <= 56319) {
                            if (n === r - 1)
                                i.push(65533);
                            else {
                                var s = e.charCodeAt(n + 1);
                                if (56320 <= s && s <= 57343) {
                                    var a = 1023 & o
                                      , u = 1023 & s;
                                    i.push(65536 + (a << 10) + u),
                                    n += 1
                                } else
                                    i.push(65533)
                            }
                        }
                        n += 1
                    }
                    return i
                }(e)); !s.endOfStream() && -1 !== (r = this._encoder.handler(s, s.read())); )
                    Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
                if (!this._streaming) {
                    for (; -1 !== (r = this._encoder.handler(s, s.read())); )
                        Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
                    this._encoder = null
                }
                return new Uint8Array(o)
            }
        },
        t.TextEncoder = u,
        t.TextDecoder = a
    },
    85107: function(e, t, r) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(2265)
          , i = r(10554)
          , o = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , s = i.useSyncExternalStore
          , a = n.useRef
          , u = n.useEffect
          , c = n.useMemo
          , l = n.useDebugValue;
        t.useSyncExternalStoreWithSelector = function(e, t, r, n, i) {
            var f = a(null);
            if (null === f.current) {
                var h = {
                    hasValue: !1,
                    value: null
                };
                f.current = h
            } else
                h = f.current;
            var d = s(e, (f = c(function() {
                function e(e) {
                    if (!u) {
                        if (u = !0,
                        s = e,
                        e = n(e),
                        void 0 !== i && h.hasValue) {
                            var t = h.value;
                            if (i(t, e))
                                return a = t
                        }
                        return a = e
                    }
                    if (t = a,
                    o(s, e))
                        return t;
                    var r = n(e);
                    return void 0 !== i && i(t, r) ? t : (s = e,
                    a = r)
                }
                var s, a, u = !1, c = void 0 === r ? null : r;
                return [function() {
                    return e(t())
                }
                , null === c ? void 0 : function() {
                    return e(c())
                }
                ]
            }, [t, r, n, i]))[0], f[1]);
            return u(function() {
                h.hasValue = !0,
                h.value = d
            }, [d]),
            l(d),
            d
        }
    },
    35006: function(e, t, r) {
        "use strict";
        e.exports = r(85107)
    },
    3538: function(e, t, r) {
        "use strict";
        r.d(t, {
            v4: function() {
                return c
            }
        });
        for (var n, i = new Uint8Array(16), o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, s = [], a = 0; a < 256; ++a)
            s.push((a + 256).toString(16).substr(1));
        var u = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , r = (s[e[t + 0]] + s[e[t + 1]] + s[e[t + 2]] + s[e[t + 3]] + "-" + s[e[t + 4]] + s[e[t + 5]] + "-" + s[e[t + 6]] + s[e[t + 7]] + "-" + s[e[t + 8]] + s[e[t + 9]] + "-" + s[e[t + 10]] + s[e[t + 11]] + s[e[t + 12]] + s[e[t + 13]] + s[e[t + 14]] + s[e[t + 15]]).toLowerCase();
            if (!("string" == typeof r && o.test(r)))
                throw TypeError("Stringified UUID is invalid");
            return r
        }
          , c = function(e, t, r) {
            var o = (e = e || {}).random || (e.rng || function() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                    throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(i)
            }
            )();
            if (o[6] = 15 & o[6] | 64,
            o[8] = 63 & o[8] | 128,
            t) {
                r = r || 0;
                for (var s = 0; s < 16; ++s)
                    t[r + s] = o[s];
                return t
            }
            return u(o)
        }
    },
    56800: function(e, t) {
        var r;
        /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function i() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    r && (e = o(e, function(e) {
                        if ("string" == typeof e || "number" == typeof e)
                            return e;
                        if ("object" != typeof e)
                            return "";
                        if (Array.isArray(e))
                            return i.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                            return e.toString();
                        var t = "";
                        for (var r in e)
                            n.call(e, r) && e[r] && (t = o(t, r));
                        return t
                    }(r)))
                }
                return e
            }
            function o(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (i.default = i,
            e.exports = i) : void 0 !== (r = (function() {
                return i
            }
            ).apply(t, [])) && (e.exports = r)
        }()
    },
    2552: function(e, t, r) {
        "use strict";
        r.d(t, {
            UN: function() {
                return k
            }
        });
        var n = r(44815)
          , i = r(75390)
          , o = r(68104);
        let[s,a] = i.ZP.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e)))
          , u = new Uint32Array(80)
          , c = new Uint32Array(80);
        class l extends n.VR {
            constructor() {
                super(128, 64, 16, !1),
                this.Ah = 1779033703,
                this.Al = -205731576,
                this.Bh = -1150833019,
                this.Bl = -2067093701,
                this.Ch = 1013904242,
                this.Cl = -23791573,
                this.Dh = -1521486534,
                this.Dl = 1595750129,
                this.Eh = 1359893119,
                this.El = -1377402159,
                this.Fh = -1694144372,
                this.Fl = 725511199,
                this.Gh = 528734635,
                this.Gl = -79577749,
                this.Hh = 1541459225,
                this.Hl = 327033209
            }
            get() {
                let {Ah: e, Al: t, Bh: r, Bl: n, Ch: i, Cl: o, Dh: s, Dl: a, Eh: u, El: c, Fh: l, Fl: f, Gh: h, Gl: d, Hh: p, Hl: y} = this;
                return [e, t, r, n, i, o, s, a, u, c, l, f, h, d, p, y]
            }
            set(e, t, r, n, i, o, s, a, u, c, l, f, h, d, p, y) {
                this.Ah = 0 | e,
                this.Al = 0 | t,
                this.Bh = 0 | r,
                this.Bl = 0 | n,
                this.Ch = 0 | i,
                this.Cl = 0 | o,
                this.Dh = 0 | s,
                this.Dl = 0 | a,
                this.Eh = 0 | u,
                this.El = 0 | c,
                this.Fh = 0 | l,
                this.Fl = 0 | f,
                this.Gh = 0 | h,
                this.Gl = 0 | d,
                this.Hh = 0 | p,
                this.Hl = 0 | y
            }
            process(e, t) {
                for (let r = 0; r < 16; r++,
                t += 4)
                    u[r] = e.getUint32(t),
                    c[r] = e.getUint32(t += 4);
                for (let e = 16; e < 80; e++) {
                    let t = 0 | u[e - 15]
                      , r = 0 | c[e - 15]
                      , n = i.ZP.rotrSH(t, r, 1) ^ i.ZP.rotrSH(t, r, 8) ^ i.ZP.shrSH(t, r, 7)
                      , o = i.ZP.rotrSL(t, r, 1) ^ i.ZP.rotrSL(t, r, 8) ^ i.ZP.shrSL(t, r, 7)
                      , s = 0 | u[e - 2]
                      , a = 0 | c[e - 2]
                      , l = i.ZP.rotrSH(s, a, 19) ^ i.ZP.rotrBH(s, a, 61) ^ i.ZP.shrSH(s, a, 6)
                      , f = i.ZP.rotrSL(s, a, 19) ^ i.ZP.rotrBL(s, a, 61) ^ i.ZP.shrSL(s, a, 6)
                      , h = i.ZP.add4L(o, f, c[e - 7], c[e - 16])
                      , d = i.ZP.add4H(h, n, l, u[e - 7], u[e - 16]);
                    u[e] = 0 | d,
                    c[e] = 0 | h
                }
                let {Ah: r, Al: n, Bh: o, Bl: l, Ch: f, Cl: h, Dh: d, Dl: p, Eh: y, El: g, Fh: b, Fl: m, Gh: w, Gl: v, Hh: x, Hl: E} = this;
                for (let e = 0; e < 80; e++) {
                    let t = i.ZP.rotrSH(y, g, 14) ^ i.ZP.rotrSH(y, g, 18) ^ i.ZP.rotrBH(y, g, 41)
                      , _ = i.ZP.rotrSL(y, g, 14) ^ i.ZP.rotrSL(y, g, 18) ^ i.ZP.rotrBL(y, g, 41)
                      , A = y & b ^ ~y & w
                      , B = g & m ^ ~g & v
                      , S = i.ZP.add5L(E, _, B, a[e], c[e])
                      , P = i.ZP.add5H(S, x, t, A, s[e], u[e])
                      , U = 0 | S
                      , k = i.ZP.rotrSH(r, n, 28) ^ i.ZP.rotrBH(r, n, 34) ^ i.ZP.rotrBH(r, n, 39)
                      , O = i.ZP.rotrSL(r, n, 28) ^ i.ZP.rotrBL(r, n, 34) ^ i.ZP.rotrBL(r, n, 39)
                      , R = r & o ^ r & f ^ o & f
                      , L = n & l ^ n & h ^ l & h;
                    x = 0 | w,
                    E = 0 | v,
                    w = 0 | b,
                    v = 0 | m,
                    b = 0 | y,
                    m = 0 | g,
                    ({h: y, l: g} = i.ZP.add(0 | d, 0 | p, 0 | P, 0 | U)),
                    d = 0 | f,
                    p = 0 | h,
                    f = 0 | o,
                    h = 0 | l,
                    o = 0 | r,
                    l = 0 | n;
                    let j = i.ZP.add3L(U, O, L);
                    r = i.ZP.add3H(j, P, k, R),
                    n = 0 | j
                }
                ({h: r, l: n} = i.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
                ({h: o, l: l} = i.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | l)),
                ({h: f, l: h} = i.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | f, 0 | h)),
                ({h: d, l: p} = i.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
                ({h: y, l: g} = i.ZP.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | g)),
                ({h: b, l: m} = i.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | b, 0 | m)),
                ({h: w, l: v} = i.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | w, 0 | v)),
                ({h: x, l: E} = i.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | x, 0 | E)),
                this.set(r, n, o, l, f, h, d, p, y, g, b, m, w, v, x, E)
            }
            roundClean() {
                u.fill(0),
                c.fill(0)
            }
            destroy() {
                this.buffer.fill(0),
                this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            }
        }
        let f = (0,
        o.hE)( () => new l);
        var h = r(65332)
          , d = r(53554)
          , p = r(91678);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        let y = BigInt(0)
          , g = BigInt(1)
          , b = BigInt(2)
          , m = BigInt(8)
          , w = {
            zip215: !0
        }
          , v = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949")
          , x = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752")
          , E = BigInt(0)
          , _ = BigInt(1)
          , A = BigInt(2);
        BigInt(3);
        let B = BigInt(5)
          , S = BigInt(8);
        function P(e, t) {
            let r = (0,
            d.wQ)(t * t * t, v)
              , n = function(e) {
                let t = BigInt(10)
                  , r = BigInt(20)
                  , n = BigInt(40)
                  , i = BigInt(80)
                  , o = e * e % v * e % v
                  , s = (0,
                d.oA)(o, A, v) * o % v
                  , a = (0,
                d.oA)(s, _, v) * e % v
                  , u = (0,
                d.oA)(a, B, v) * a % v
                  , c = (0,
                d.oA)(u, t, v) * u % v
                  , l = (0,
                d.oA)(c, r, v) * c % v
                  , f = (0,
                d.oA)(l, n, v) * l % v
                  , h = (0,
                d.oA)(f, i, v) * f % v
                  , p = (0,
                d.oA)(h, i, v) * f % v
                  , y = (0,
                d.oA)(p, t, v) * u % v;
                return {
                    pow_p_5_8: (0,
                    d.oA)(y, A, v) * e % v,
                    b2: o
                }
            }(e * (0,
            d.wQ)(r * r * t, v)).pow_p_5_8
              , i = (0,
            d.wQ)(e * r * n, v)
              , o = (0,
            d.wQ)(t * i * i, v)
              , s = i
              , a = (0,
            d.wQ)(i * x, v)
              , u = o === e
              , c = o === (0,
            d.wQ)(-e, v)
              , l = o === (0,
            d.wQ)(-e * x, v);
            return u && (i = s),
            (c || l) && (i = a),
            (0,
            d.Tu)(i, v) && (i = (0,
            d.wQ)(-i, v)),
            {
                isValid: u || c,
                value: i
            }
        }
        let U = (0,
        d.gN)(v, void 0, !0)
          , k = function(e) {
            let t = function(e) {
                let t = (0,
                h.Kd)(e);
                return p.FF(e, {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function"
                }, {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function"
                }),
                Object.freeze({
                    ...t
                })
            }(e)
              , {Fp: r, n: n, prehash: i, hash: o, randomBytes: s, nByteLength: a, h: u} = t
              , c = b << BigInt(8 * a) - g
              , l = r.create
              , f = (0,
            d.gN)(t.n, t.nBitLength)
              , v = t.uvRatio || ( (e, t) => {
                try {
                    return {
                        isValid: !0,
                        value: r.sqrt(e * r.inv(t))
                    }
                } catch (e) {
                    return {
                        isValid: !1,
                        value: y
                    }
                }
            }
            )
              , x = t.adjustScalarBytes || (e => e)
              , E = t.domain || ( (e, t, r) => {
                if ((0,
                p.uw)("phflag", r),
                t.length || r)
                    throw Error("Contexts/pre-hash are not supported");
                return e
            }
            );
            function _(e, t) {
                p.Fy("coordinate " + e, t, y, c)
            }
            function A(e) {
                if (!(e instanceof P))
                    throw Error("ExtendedPoint expected")
            }
            let B = (0,
            p.H9)( (e, t) => {
                let {ex: n, ey: i, ez: o} = e
                  , s = e.is0();
                null == t && (t = s ? m : r.inv(o));
                let a = l(n * t)
                  , u = l(i * t)
                  , c = l(o * t);
                if (s)
                    return {
                        x: y,
                        y: g
                    };
                if (c !== g)
                    throw Error("invZ was invalid");
                return {
                    x: a,
                    y: u
                }
            }
            )
              , S = (0,
            p.H9)(e => {
                let {a: r, d: n} = t;
                if (e.is0())
                    throw Error("bad point: ZERO");
                let {ex: i, ey: o, ez: s, et: a} = e
                  , u = l(i * i)
                  , c = l(o * o)
                  , f = l(s * s)
                  , h = l(f * f)
                  , d = l(u * r);
                if (l(f * l(d + c)) !== l(h + l(n * l(u * c))))
                    throw Error("bad point: equation left != right (1)");
                if (l(i * o) !== l(s * a))
                    throw Error("bad point: equation left != right (2)");
                return !0
            }
            );
            class P {
                constructor(e, t, r, n) {
                    this.ex = e,
                    this.ey = t,
                    this.ez = r,
                    this.et = n,
                    _("x", e),
                    _("y", t),
                    _("z", r),
                    _("t", n),
                    Object.freeze(this)
                }
                get x() {
                    return this.toAffine().x
                }
                get y() {
                    return this.toAffine().y
                }
                static fromAffine(e) {
                    if (e instanceof P)
                        throw Error("extended point not allowed");
                    let {x: t, y: r} = e || {};
                    return _("x", t),
                    _("y", r),
                    new P(t,r,g,l(t * r))
                }
                static normalizeZ(e) {
                    let t = r.invertBatch(e.map(e => e.ez));
                    return e.map( (e, r) => e.toAffine(t[r])).map(P.fromAffine)
                }
                static msm(e, t) {
                    return (0,
                    h.D1)(P, f, e, t)
                }
                _setWindowSize(e) {
                    O.setWindowSize(this, e)
                }
                assertValidity() {
                    S(this)
                }
                equals(e) {
                    A(e);
                    let {ex: t, ey: r, ez: n} = this
                      , {ex: i, ey: o, ez: s} = e
                      , a = l(t * s)
                      , u = l(i * n)
                      , c = l(r * s)
                      , f = l(o * n);
                    return a === u && c === f
                }
                is0() {
                    return this.equals(P.ZERO)
                }
                negate() {
                    return new P(l(-this.ex),this.ey,this.ez,l(-this.et))
                }
                double() {
                    let {a: e} = t
                      , {ex: r, ey: n, ez: i} = this
                      , o = l(r * r)
                      , s = l(n * n)
                      , a = l(b * l(i * i))
                      , u = l(e * o)
                      , c = r + n
                      , f = l(l(c * c) - o - s)
                      , h = u + s
                      , d = h - a
                      , p = u - s
                      , y = l(f * d)
                      , g = l(h * p)
                      , m = l(f * p);
                    return new P(y,g,l(d * h),m)
                }
                add(e) {
                    A(e);
                    let {a: r, d: n} = t
                      , {ex: i, ey: o, ez: s, et: a} = this
                      , {ex: u, ey: c, ez: f, et: h} = e;
                    if (r === BigInt(-1)) {
                        let e = l((o - i) * (c + u))
                          , t = l((o + i) * (c - u))
                          , r = l(t - e);
                        if (r === y)
                            return this.double();
                        let n = l(s * b * h)
                          , d = l(a * b * f)
                          , p = d + n
                          , g = t + e
                          , m = d - n
                          , w = l(p * r)
                          , v = l(g * m)
                          , x = l(p * m);
                        return new P(w,v,l(r * g),x)
                    }
                    let d = l(i * u)
                      , p = l(o * c)
                      , g = l(a * n * h)
                      , m = l(s * f)
                      , w = l((i + o) * (u + c) - d - p)
                      , v = m - g
                      , x = m + g
                      , E = l(p - r * d)
                      , _ = l(w * v)
                      , B = l(x * E)
                      , S = l(w * E);
                    return new P(_,B,l(v * x),S)
                }
                subtract(e) {
                    return this.add(e.negate())
                }
                wNAF(e) {
                    return O.wNAFCached(this, e, P.normalizeZ)
                }
                multiply(e) {
                    p.Fy("scalar", e, g, n);
                    let {p: t, f: r} = this.wNAF(e);
                    return P.normalizeZ([t, r])[0]
                }
                multiplyUnsafe(e) {
                    return (p.Fy("scalar", e, y, n),
                    e === y) ? k : this.equals(k) || e === g ? this : this.equals(U) ? this.wNAF(e).p : O.unsafeLadder(this, e)
                }
                isSmallOrder() {
                    return this.multiplyUnsafe(u).is0()
                }
                isTorsionFree() {
                    return O.unsafeLadder(this, n).is0()
                }
                toAffine(e) {
                    return B(this, e)
                }
                clearCofactor() {
                    let {h: e} = t;
                    return e === g ? this : this.multiplyUnsafe(e)
                }
                static fromHex(e, n=!1) {
                    let {d: i, a: o} = t
                      , s = r.BYTES;
                    e = (0,
                    p.ql)("pointHex", e, s),
                    (0,
                    p.uw)("zip215", n);
                    let a = e.slice()
                      , u = e[s - 1];
                    a[s - 1] = -129 & u;
                    let f = p.ty(a)
                      , h = n ? c : r.ORDER;
                    p.Fy("pointHex.y", f, y, h);
                    let d = l(f * f)
                      , {isValid: b, value: m} = v(l(d - g), l(i * d - o));
                    if (!b)
                        throw Error("Point.fromHex: invalid y coordinate");
                    let w = (m & g) === g
                      , x = (128 & u) != 0;
                    if (!n && m === y && x)
                        throw Error("Point.fromHex: x=0 and x_0=1");
                    return x !== w && (m = l(-m)),
                    P.fromAffine({
                        x: m,
                        y: f
                    })
                }
                static fromPrivateKey(e) {
                    return L(e).point
                }
                toRawBytes() {
                    let {x: e, y: t} = this.toAffine()
                      , n = p.S5(t, r.BYTES);
                    return n[n.length - 1] |= e & g ? 128 : 0,
                    n
                }
                toHex() {
                    return p.ci(this.toRawBytes())
                }
            }
            P.BASE = new P(t.Gx,t.Gy,g,l(t.Gx * t.Gy)),
            P.ZERO = new P(y,g,g,y);
            let {BASE: U, ZERO: k} = P
              , O = (0,
            h.Mx)(P, 8 * a);
            function R(e) {
                var t;
                return t = p.ty(e),
                (0,
                d.wQ)(t, n)
            }
            function L(e) {
                e = (0,
                p.ql)("private key", e, a);
                let t = (0,
                p.ql)("hashed private key", o(e), 2 * a)
                  , r = x(t.slice(0, a))
                  , n = t.slice(a, 2 * a)
                  , i = R(r)
                  , s = U.multiply(i)
                  , u = s.toRawBytes();
                return {
                    head: r,
                    prefix: n,
                    scalar: i,
                    point: s,
                    pointBytes: u
                }
            }
            function j(e=new Uint8Array, ...t) {
                return R(o(E(p.eV(...t), (0,
                p.ql)("context", e), !!i)))
            }
            return U._setWindowSize(8),
            {
                CURVE: t,
                getPublicKey: function(e) {
                    return L(e).pointBytes
                },
                sign: function(e, t, o={}) {
                    var s;
                    e = (0,
                    p.ql)("message", e),
                    i && (e = i(e));
                    let {prefix: u, scalar: c, pointBytes: l} = L(t)
                      , f = j(o.context, u, e)
                      , h = U.multiply(f).toRawBytes()
                      , g = (s = f + j(o.context, h, l, e) * c,
                    (0,
                    d.wQ)(s, n));
                    p.Fy("signature.s", g, y, n);
                    let b = p.eV(h, p.S5(g, r.BYTES));
                    return (0,
                    p.ql)("result", b, 2 * a)
                },
                verify: function(e, t, n, o=w) {
                    let s, a, u;
                    let {context: c, zip215: l} = o
                      , f = r.BYTES;
                    e = (0,
                    p.ql)("signature", e, 2 * f),
                    t = (0,
                    p.ql)("message", t),
                    void 0 !== l && (0,
                    p.uw)("zip215", l),
                    i && (t = i(t));
                    let h = p.ty(e.slice(f, 2 * f));
                    try {
                        s = P.fromHex(n, l),
                        a = P.fromHex(e.slice(0, f), l),
                        u = U.multiplyUnsafe(h)
                    } catch (e) {
                        return !1
                    }
                    if (!l && s.isSmallOrder())
                        return !1;
                    let d = j(c, a.toRawBytes(), s.toRawBytes(), t);
                    return a.add(s.multiplyUnsafe(d)).subtract(u).clearCofactor().equals(P.ZERO)
                },
                ExtendedPoint: P,
                utils: {
                    getExtendedPublicKey: L,
                    randomPrivateKey: () => s(r.BYTES),
                    precompute: (e=8, t=P.BASE) => (t._setWindowSize(e),
                    t.multiply(BigInt(3)),
                    t)
                }
            }
        }({
            a: BigInt(-1),
            d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
            Fp: U,
            n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
            h: S,
            Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
            Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
            hash: f,
            randomBytes: o.O6,
            adjustScalarBytes: function(e) {
                return e[0] &= 248,
                e[31] &= 127,
                e[31] |= 64,
                e
            },
            uvRatio: P
        });
        function O(e) {
            if (!(e instanceof I))
                throw Error("RistrettoPoint expected")
        }
        let R = e => P(_, e)
          , L = e => k.CURVE.Fp.create(null & bytesToNumberLE(e));
        function j(e) {
            let {d: t} = k.CURVE
              , r = k.CURVE.Fp.ORDER
              , n = k.CURVE.Fp.create
              , i = n(null * e * e)
              , o = n((i + _) * null)
              , s = BigInt(-1)
              , a = n((s - t * i) * n(i + t))
              , {isValid: u, value: c} = P(o, a)
              , l = n(c * e);
            isNegativeLE(l, r) || (l = n(-l)),
            u || (c = l),
            u || (s = i);
            let f = n(s * (i - _) * null - a)
              , h = c * c
              , d = n((c + c) * a)
              , p = n(null * f)
              , y = n(_ - h)
              , g = n(_ + h);
            return new k.ExtendedPoint(n(d * g),n(y * p),n(p * g),n(d * y))
        }
        class I {
            constructor(e) {
                this.ep = e
            }
            static fromAffine(e) {
                return new I(k.ExtendedPoint.fromAffine(e))
            }
            static hashToCurve(e) {
                let t = j(L((e = ensureBytes("ristrettoHash", e, 64)).slice(0, 32)))
                  , r = j(L(e.slice(32, 64)));
                return new I(t.add(r))
            }
            static fromHex(e) {
                e = ensureBytes("ristrettoHex", e, 32);
                let {a: t, d: r} = k.CURVE
                  , n = k.CURVE.Fp.ORDER
                  , i = k.CURVE.Fp.create
                  , o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint"
                  , s = L(e);
                if (!equalBytes(numberToBytesLE(s, 32), e) || isNegativeLE(s, n))
                    throw Error(o);
                let a = i(s * s)
                  , u = i(_ + t * a)
                  , c = i(_ - t * a)
                  , l = i(u * u)
                  , f = i(c * c)
                  , h = i(t * r * l - f)
                  , {isValid: d, value: p} = R(i(h * f))
                  , y = i(p * c)
                  , g = i(p * y * h)
                  , b = i((s + s) * y);
                isNegativeLE(b, n) && (b = i(-b));
                let m = i(u * g)
                  , w = i(b * m);
                if (!d || isNegativeLE(w, n) || m === E)
                    throw Error(o);
                return new I(new k.ExtendedPoint(b,m,_,w))
            }
            toRawBytes() {
                let e, {ex: t, ey: r, ez: n, et: i} = this.ep, o = k.CURVE.Fp.ORDER, s = k.CURVE.Fp.create, a = s(s(n + r) * s(n - r)), u = s(t * r), c = s(u * u), {value: l} = R(s(a * c)), f = s(l * a), h = s(l * u), d = s(f * h * i);
                if (isNegativeLE(i * d, o)) {
                    let n = s(null * r)
                      , i = s(null * t);
                    t = n,
                    r = i,
                    e = s(null * f)
                } else
                    e = h;
                isNegativeLE(t * d, o) && (r = s(-r));
                let p = s((n - r) * e);
                return isNegativeLE(p, o) && (p = s(-p)),
                numberToBytesLE(p, 32)
            }
            toHex() {
                return bytesToHex(this.toRawBytes())
            }
            toString() {
                return this.toHex()
            }
            equals(e) {
                O(e);
                let {ex: t, ey: r} = this.ep
                  , {ex: n, ey: i} = e.ep
                  , o = k.CURVE.Fp.create
                  , s = o(t * i) === o(r * n)
                  , a = o(r * i) === o(t * n);
                return s || a
            }
            add(e) {
                return O(e),
                new I(this.ep.add(e.ep))
            }
            subtract(e) {
                return O(e),
                new I(this.ep.subtract(e.ep))
            }
            multiply(e) {
                return new I(this.ep.multiply(e))
            }
            multiplyUnsafe(e) {
                return new I(this.ep.multiplyUnsafe(e))
            }
            double() {
                return new I(this.ep.double())
            }
            negate() {
                return new I(this.ep.negate())
            }
        }
    },
    82426: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return i
            }
        });
        var n = r(2265);
        let i = e => n.createElement("button", {
            className: `wallet-adapter-button ${e.className || ""}`,
            disabled: e.disabled,
            style: e.style,
            onClick: e.onClick,
            tabIndex: e.tabIndex || 0,
            type: "button"
        }, e.startIcon && n.createElement("i", {
            className: "wallet-adapter-button-start-icon"
        }, e.startIcon), e.children, e.endIcon && n.createElement("i", {
            className: "wallet-adapter-button-end-icon"
        }, e.endIcon))
    },
    7549: function(e, t, r) {
        "use strict";
        r.d(t, {
            o: function() {
                return i
            }
        });
        var n = r(2265);
        let i = ({wallet: e, ...t}) => e && n.createElement("img", {
            src: e.adapter.icon,
            alt: `${e.adapter.name} icon`,
            ...t
        })
    },
    98058: function(e, t, r) {
        "use strict";
        r.d(t, {
            g: function() {
                return s
            },
            h: function() {
                return a
            }
        });
        var n = r(2265);
        let i = {
            setVisible(e) {
                console.error(o("call", "setVisible"))
            },
            visible: !1
        };
        function o(e, t) {
            return `You have tried to  ${e} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`
        }
        Object.defineProperty(i, "visible", {
            get: () => (console.error(o("read", "visible")),
            !1)
        });
        let s = (0,
        n.createContext)(i);
        function a() {
            return (0,
            n.useContext)(s)
        }
    },
    61811: function(e, t, r) {
        "use strict";
        r.d(t, {
            R: function() {
                return o
            },
            h: function() {
                return i
            }
        });
        var n = r(2265);
        let i = (0,
        n.createContext)({});
        function o() {
            return (0,
            n.useContext)(i)
        }
    },
    28782: function(e, t, r) {
        "use strict";
        r.d(t, {
            O: function() {
                return u
            },
            z: function() {
                return a
            }
        });
        var n = r(2265);
        let i = []
          , o = {
            autoConnect: !1,
            connecting: !1,
            connected: !1,
            disconnecting: !1,
            select() {
                s("call", "select")
            },
            connect: () => Promise.reject(s("call", "connect")),
            disconnect: () => Promise.reject(s("call", "disconnect")),
            sendTransaction: () => Promise.reject(s("call", "sendTransaction")),
            signTransaction: () => Promise.reject(s("call", "signTransaction")),
            signAllTransactions: () => Promise.reject(s("call", "signAllTransactions")),
            signMessage: () => Promise.reject(s("call", "signMessage")),
            signIn: () => Promise.reject(s("call", "signIn"))
        };
        function s(e, t) {
            let r = Error(`You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);
            return console.error(r),
            r
        }
        Object.defineProperty(o, "wallets", {
            get: () => (s("read", "wallets"),
            i)
        }),
        Object.defineProperty(o, "wallet", {
            get: () => (s("read", "wallet"),
            null)
        }),
        Object.defineProperty(o, "publicKey", {
            get: () => (s("read", "publicKey"),
            null)
        });
        let a = (0,
        n.createContext)(o);
        function u() {
            return (0,
            n.useContext)(a)
        }
    },
    13025: function(e, t, r) {
        "use strict";
        r.d(t, {
            AG: function() {
                return w
            },
            G0: function() {
                return S
            },
            IM: function() {
                return E
            },
            IX: function() {
                return y
            },
            O7: function() {
                return g
            },
            Rx: function() {
                return v
            },
            Ue: function() {
                return f
            },
            Yj: function() {
                return p
            },
            Z_: function() {
                return _
            },
            _4: function() {
                return P
            },
            bc: function() {
                return A
            },
            dt: function() {
                return B
            },
            eE: function() {
                return b
            },
            hu: function() {
                return l
            },
            i0: function() {
                return m
            },
            jt: function() {
                return x
            },
            oQ: function() {
                return U
            }
        });
        class n extends TypeError {
            constructor(e, t) {
                let r;
                let {message: n, explanation: i, ...o} = e
                  , {path: s} = e
                  , a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
                super(i ?? a),
                null != i && (this.cause = a),
                Object.assign(this, o),
                this.name = this.constructor.name,
                this.failures = () => r ?? (r = [e, ...t()])
            }
        }
        function i(e) {
            return "object" == typeof e && null != e
        }
        function o(e) {
            return i(e) && !Array.isArray(e)
        }
        function s(e) {
            return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
        }
        function *a(e, t, r, n) {
            var o;
            for (let a of (i(o = e) && "function" == typeof o[Symbol.iterator] || (e = [e]),
            e)) {
                let e = function(e, t, r, n) {
                    if (!0 === e)
                        return;
                    !1 === e ? e = {} : "string" == typeof e && (e = {
                        message: e
                    });
                    let {path: i, branch: o} = t
                      , {type: a} = r
                      , {refinement: u, message: c=`Expected a value of type \`${a}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${s(n)}\``} = e;
                    return {
                        value: n,
                        type: a,
                        refinement: u,
                        key: i[i.length - 1],
                        path: i,
                        branch: o,
                        ...e,
                        message: c
                    }
                }(a, t, r, n);
                e && (yield e)
            }
        }
        function *u(e, t, r={}) {
            let {path: n=[], branch: o=[e], coerce: s=!1, mask: a=!1} = r
              , c = {
                path: n,
                branch: o,
                mask: a
            };
            s && (e = t.coercer(e, c));
            let l = "valid";
            for (let n of t.validator(e, c))
                n.explanation = r.message,
                l = "not_valid",
                yield[n, void 0];
            for (let[f,h,d] of t.entries(e, c))
                for (let t of u(h, d, {
                    path: void 0 === f ? n : [...n, f],
                    branch: void 0 === f ? o : [...o, h],
                    coerce: s,
                    mask: a,
                    message: r.message
                }))
                    t[0] ? (l = null != t[0].refinement ? "not_refined" : "not_valid",
                    yield[t[0], void 0]) : s && (h = t[1],
                    void 0 === f ? e = h : e instanceof Map ? e.set(f, h) : e instanceof Set ? e.add(h) : i(e) && (void 0 !== h || f in e) && (e[f] = h));
            if ("not_valid" !== l)
                for (let n of t.refiner(e, c))
                    n.explanation = r.message,
                    l = "not_refined",
                    yield[n, void 0];
            "valid" === l && (yield[void 0, e])
        }
        class c {
            constructor(e) {
                let {type: t, schema: r, validator: n, refiner: i, coercer: o=e => e, entries: s=function*() {}
                } = e;
                this.type = t,
                this.schema = r,
                this.entries = s,
                this.coercer = o,
                n ? this.validator = (e, t) => a(n(e, t), t, this, e) : this.validator = () => [],
                i ? this.refiner = (e, t) => a(i(e, t), t, this, e) : this.refiner = () => []
            }
            assert(e, t) {
                return l(e, this, t)
            }
            create(e, t) {
                return f(e, this, t)
            }
            is(e) {
                return !h(e, this)[0]
            }
            mask(e, t) {
                return function(e, t, r) {
                    let n = h(e, t, {
                        coerce: !0,
                        mask: !0,
                        message: r
                    });
                    if (!n[0])
                        return n[1];
                    throw n[0]
                }(e, this, t)
            }
            validate(e, t={}) {
                return h(e, this, t)
            }
        }
        function l(e, t, r) {
            let n = h(e, t, {
                message: r
            });
            if (n[0])
                throw n[0]
        }
        function f(e, t, r) {
            let n = h(e, t, {
                coerce: !0,
                message: r
            });
            if (!n[0])
                return n[1];
            throw n[0]
        }
        function h(e, t, r={}) {
            let i = u(e, t, r)
              , o = function(e) {
                let {done: t, value: r} = e.next();
                return t ? void 0 : r
            }(i);
            return o[0] ? [new n(o[0],function*() {
                for (let e of i)
                    e[0] && (yield e[0])
            }
            ), void 0] : [void 0, o[1]]
        }
        function d(e, t) {
            return new c({
                type: e,
                schema: null,
                validator: t
            })
        }
        function p() {
            return d("any", () => !0)
        }
        function y(e) {
            return new c({
                type: "array",
                schema: e,
                *entries(t) {
                    if (e && Array.isArray(t))
                        for (let[r,n] of t.entries())
                            yield[r, n, e]
                },
                coercer: e => Array.isArray(e) ? e.slice() : e,
                validator: e => Array.isArray(e) || `Expected an array value, but received: ${s(e)}`
            })
        }
        function g() {
            return d("boolean", e => "boolean" == typeof e)
        }
        function b(e) {
            return d("instance", t => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${s(t)}`)
        }
        function m(e) {
            let t = s(e)
              , r = typeof e;
            return new c({
                type: "literal",
                schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                validator: r => r === e || `Expected the literal \`${t}\`, but received: ${s(r)}`
            })
        }
        function w(e) {
            return new c({
                ...e,
                validator: (t, r) => null === t || e.validator(t, r),
                refiner: (t, r) => null === t || e.refiner(t, r)
            })
        }
        function v() {
            return d("number", e => "number" == typeof e && !isNaN(e) || `Expected a number, but received: ${s(e)}`)
        }
        function x(e) {
            return new c({
                ...e,
                validator: (t, r) => void 0 === t || e.validator(t, r),
                refiner: (t, r) => void 0 === t || e.refiner(t, r)
            })
        }
        function E(e, t) {
            return new c({
                type: "record",
                schema: null,
                *entries(r) {
                    if (i(r))
                        for (let n in r) {
                            let i = r[n];
                            yield[n, n, e],
                            yield[n, i, t]
                        }
                },
                validator: e => o(e) || `Expected an object, but received: ${s(e)}`,
                coercer: e => o(e) ? {
                    ...e
                } : e
            })
        }
        function _() {
            return d("string", e => "string" == typeof e || `Expected a string, but received: ${s(e)}`)
        }
        function A(e) {
            let t = d("never", () => !1);
            return new c({
                type: "tuple",
                schema: null,
                *entries(r) {
                    if (Array.isArray(r)) {
                        let n = Math.max(e.length, r.length);
                        for (let i = 0; i < n; i++)
                            yield[i, r[i], e[i] || t]
                    }
                },
                validator: e => Array.isArray(e) || `Expected an array, but received: ${s(e)}`,
                coercer: e => Array.isArray(e) ? e.slice() : e
            })
        }
        function B(e) {
            let t = Object.keys(e);
            return new c({
                type: "type",
                schema: e,
                *entries(r) {
                    if (i(r))
                        for (let n of t)
                            yield[n, r[n], e[n]]
                },
                validator: e => o(e) || `Expected an object, but received: ${s(e)}`,
                coercer: e => o(e) ? {
                    ...e
                } : e
            })
        }
        function S(e) {
            let t = e.map(e => e.type).join(" | ");
            return new c({
                type: "union",
                schema: null,
                coercer(t, r) {
                    for (let n of e) {
                        let[e,i] = n.validate(t, {
                            coerce: !0,
                            mask: r.mask
                        });
                        if (!e)
                            return i
                    }
                    return t
                },
                validator(r, n) {
                    let i = [];
                    for (let t of e) {
                        let[...e] = u(r, t, n)
                          , [o] = e;
                        if (!o[0])
                            return [];
                        for (let[t] of e)
                            t && i.push(t)
                    }
                    return [`Expected the value to satisfy a union of \`${t}\`, but received: ${s(r)}`, ...i]
                }
            })
        }
        function P() {
            return d("unknown", () => !0)
        }
        function U(e, t, r) {
            return new c({
                ...e,
                coercer: (n, i) => h(n, t)[0] ? e.coercer(n, i) : e.coercer(r(n, i), i)
            })
        }
    },
    37832: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return "function" == typeof e ? e(...t) : !!e
        }
        function i() {}
        r.d(t, {
            L: function() {
                return n
            },
            Z: function() {
                return i
            }
        })
    },
    92290: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ey: function() {
                return u
            },
            XY: function() {
                return s
            }
        });
        var n = r(9109)
          , i = r(36393)
          , o = class extends i.v {
            socket;
            constructor(e, t, r) {
                super(),
                this.socket = new window.WebSocket(e,r),
                this.socket.onopen = () => this.emit("open"),
                this.socket.onmessage = e => this.emit("message", e.data),
                this.socket.onerror = e => this.emit("error", e),
                this.socket.onclose = e => {
                    this.emit("close", e.code, e.reason)
                }
            }
            send(e, t, r) {
                let n = r || t;
                try {
                    this.socket.send(e),
                    n()
                } catch (e) {
                    n(e)
                }
            }
            close(e, t) {
                this.socket.close(e, t)
            }
            addEventListener(e, t, r) {
                this.socket.addEventListener(e, t, r)
            }
        }
        ;
        function s(e, t) {
            return new o(e,t)
        }
        var a = class {
            encode(e) {
                return JSON.stringify(e)
            }
            decode(e) {
                return JSON.parse(e)
            }
        }
          , u = class extends i.v {
            address;
            rpc_id;
            queue;
            options;
            autoconnect;
            ready;
            reconnect;
            reconnect_timer_id;
            reconnect_interval;
            max_reconnects;
            rest_options;
            current_reconnects;
            generate_request_id;
            socket;
            webSocketFactory;
            dataPack;
            constructor(e, t="ws://localhost:8080", {autoconnect: r=!0, reconnect: n=!0, reconnect_interval: i=1e3, max_reconnects: o=5, ...s}={}, u, c) {
                super(),
                this.webSocketFactory = e,
                this.queue = {},
                this.rpc_id = 0,
                this.address = t,
                this.autoconnect = r,
                this.ready = !1,
                this.reconnect = n,
                this.reconnect_timer_id = void 0,
                this.reconnect_interval = i,
                this.max_reconnects = o,
                this.rest_options = s,
                this.current_reconnects = 0,
                this.generate_request_id = u || ( () => ++this.rpc_id),
                c ? this.dataPack = c : this.dataPack = new a,
                this.autoconnect && this._connect(this.address, {
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects,
                    ...this.rest_options
                })
            }
            connect() {
                this.socket || this._connect(this.address, {
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects,
                    ...this.rest_options
                })
            }
            call(e, t, r, n) {
                return n || "object" != typeof r || (n = r,
                r = null),
                new Promise( (i, o) => {
                    if (!this.ready)
                        return o(Error("socket not ready"));
                    let s = this.generate_request_id(e, t);
                    this.socket.send(this.dataPack.encode({
                        jsonrpc: "2.0",
                        method: e,
                        params: t || void 0,
                        id: s
                    }), n, e => {
                        if (e)
                            return o(e);
                        this.queue[s] = {
                            promise: [i, o]
                        },
                        r && (this.queue[s].timeout = setTimeout( () => {
                            delete this.queue[s],
                            o(Error("reply timeout"))
                        }
                        , r))
                    }
                    )
                }
                )
            }
            async login(e) {
                let t = await this.call("rpc.login", e);
                if (!t)
                    throw Error("authentication failed");
                return t
            }
            async listMethods() {
                return await this.call("__listMethods")
            }
            notify(e, t) {
                return new Promise( (r, n) => {
                    if (!this.ready)
                        return n(Error("socket not ready"));
                    this.socket.send(this.dataPack.encode({
                        jsonrpc: "2.0",
                        method: e,
                        params: t
                    }), e => {
                        if (e)
                            return n(e);
                        r()
                    }
                    )
                }
                )
            }
            async subscribe(e) {
                "string" == typeof e && (e = [e]);
                let t = await this.call("rpc.on", e);
                if ("string" == typeof e && "ok" !== t[e])
                    throw Error("Failed subscribing to an event '" + e + "' with: " + t[e]);
                return t
            }
            async unsubscribe(e) {
                "string" == typeof e && (e = [e]);
                let t = await this.call("rpc.off", e);
                if ("string" == typeof e && "ok" !== t[e])
                    throw Error("Failed unsubscribing from an event with: " + t);
                return t
            }
            close(e, t) {
                this.socket.close(e || 1e3, t)
            }
            setAutoReconnect(e) {
                this.reconnect = e
            }
            setReconnectInterval(e) {
                this.reconnect_interval = e
            }
            setMaxReconnects(e) {
                this.max_reconnects = e
            }
            _connect(e, t) {
                clearTimeout(this.reconnect_timer_id),
                this.socket = this.webSocketFactory(e, t),
                this.socket.addEventListener("open", () => {
                    this.ready = !0,
                    this.emit("open"),
                    this.current_reconnects = 0
                }
                ),
                this.socket.addEventListener("message", ({data: e}) => {
                    e instanceof ArrayBuffer && (e = n.Buffer.from(e).toString());
                    try {
                        e = this.dataPack.decode(e)
                    } catch (e) {
                        return
                    }
                    if (e.notification && this.listeners(e.notification).length) {
                        if (!Object.keys(e.params).length)
                            return this.emit(e.notification);
                        let t = [e.notification];
                        if (e.params.constructor === Object)
                            t.push(e.params);
                        else
                            for (let r = 0; r < e.params.length; r++)
                                t.push(e.params[r]);
                        return Promise.resolve().then( () => {
                            this.emit.apply(this, t)
                        }
                        )
                    }
                    if (!this.queue[e.id])
                        return e.method ? Promise.resolve().then( () => {
                            this.emit(e.method, e?.params)
                        }
                        ) : void 0;
                    "error"in e == "result"in e && this.queue[e.id].promise[1](Error('Server response malformed. Response must include either "result" or "error", but not both.')),
                    this.queue[e.id].timeout && clearTimeout(this.queue[e.id].timeout),
                    e.error ? this.queue[e.id].promise[1](e.error) : this.queue[e.id].promise[0](e.result),
                    delete this.queue[e.id]
                }
                ),
                this.socket.addEventListener("error", e => this.emit("error", e)),
                this.socket.addEventListener("close", ({code: r, reason: n}) => {
                    this.ready && setTimeout( () => this.emit("close", r, n), 0),
                    this.ready = !1,
                    this.socket = void 0,
                    1e3 !== r && (this.current_reconnects++,
                    this.reconnect && (this.max_reconnects > this.current_reconnects || 0 === this.max_reconnects) && (this.reconnect_timer_id = setTimeout( () => this._connect(e, t), this.reconnect_interval)))
                }
                )
            }
        }
    },
    26735: function(e, t, r) {
        "use strict";
        r.d(t, {
            m: function() {
                return l
            }
        });
        var n = r(30807)
          , i = r(79886)
          , o = r(94956)
          , s = r(90331)
          , a = r(2265)
          , u = r(35006);
        let c = e => "object" == typeof e && !Array.isArray(e);
        function l() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = (0,
            o.Z)(e);
            return function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.v
                  , i = (0,
                a.useRef)([])
                  , o = (0,
                u.useSyncExternalStoreWithSelector)(e, t, r, e => e, (e, t) => {
                    if (c(e) && c(t) && i.current.length) {
                        for (let r of i.current)
                            if (!n(e[r], t[r]))
                                return !1;
                        return !0
                    }
                    return n(e, t)
                }
                );
                return (0,
                a.useMemo)( () => {
                    if (c(o)) {
                        let e = {
                            ...o
                        }
                          , t = {};
                        for (let[r,n] of Object.entries(e))
                            t = {
                                ...t,
                                [r]: {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: () => (i.current.includes(r) || i.current.push(r),
                                    n)
                                }
                            };
                        return Object.defineProperties(e, t),
                        e
                    }
                    return o
                }
                , [o])
            }(e => (0,
            n.u)(t, {
                onChange: e
            }), () => (0,
            i.D)(t))
        }
    },
    94956: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return c
            }
        });
        var n = r(2265)
          , i = r(94738)
          , o = r(66564);
        let s = () => "wagmi@2.12.25";
        class a extends o.G {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "WagmiError"
                })
            }
            get docsBaseUrl() {
                return "https://wagmi.sh/react"
            }
            get version() {
                return s()
            }
        }
        class u extends a {
            constructor() {
                super("`useConfig` must be used within `WagmiProvider`.", {
                    docsPath: "/api/WagmiProvider"
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "WagmiProviderNotFoundError"
                })
            }
        }
        function c() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = null !== (e = t.config) && void 0 !== e ? e : (0,
            n.useContext)(i.V);
            if (!r)
                throw new u;
            return r
        }
    }
}]);