"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3814], {
    45429: function(e, t, r) {
        r.r(t),
        r.d(t, {
            Account: function() {
                return N
            },
            AddressLookupTableAccount: function() {
                return eV
            },
            AddressLookupTableInstruction: function() {
                return rR
            },
            AddressLookupTableProgram: function() {
                return rx
            },
            Authorized: function() {
                return rN
            },
            BLOCKHASH_CACHE_TIMEOUT_MS: function() {
                return eX
            },
            BPF_LOADER_DEPRECATED_PROGRAM_ID: function() {
                return z
            },
            BPF_LOADER_PROGRAM_ID: function() {
                return ez
            },
            BpfLoader: function() {
                return eU
            },
            COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: function() {
                return rv
            },
            ComputeBudgetInstruction: function() {
                return rP
            },
            ComputeBudgetProgram: function() {
                return rE
            },
            Connection: function() {
                return rI
            },
            Ed25519Program: function() {
                return rT
            },
            Enum: function() {
                return T
            },
            EpochSchedule: function() {
                return eG
            },
            FeeCalculatorLayout: function() {
                return eP
            },
            Keypair: function() {
                return r_
            },
            LAMPORTS_PER_SOL: function() {
                return r3
            },
            LOOKUP_TABLE_INSTRUCTION_LAYOUTS: function() {
                return rA
            },
            Loader: function() {
                return eN
            },
            Lockup: function() {
                return rz
            },
            MAX_SEED_LENGTH: function() {
                return L
            },
            Message: function() {
                return er
            },
            MessageAccountKeys: function() {
                return V
            },
            MessageV0: function() {
                return ei
            },
            NONCE_ACCOUNT_LENGTH: function() {
                return eE
            },
            NonceAccount: function() {
                return eB
            },
            PACKET_DATA_SIZE: function() {
                return U
            },
            PUBLIC_KEY_LENGTH: function() {
                return O
            },
            PublicKey: function() {
                return K
            },
            SIGNATURE_LENGTH_IN_BYTES: function() {
                return M
            },
            SOLANA_SCHEMA: function() {
                return C
            },
            STAKE_CONFIG_ID: function() {
                return rK
            },
            STAKE_INSTRUCTION_LAYOUTS: function() {
                return rq
            },
            SYSTEM_INSTRUCTION_LAYOUTS: function() {
                return eO
            },
            SYSVAR_CLOCK_PUBKEY: function() {
                return ed
            },
            SYSVAR_EPOCH_SCHEDULE_PUBKEY: function() {
                return eh
            },
            SYSVAR_INSTRUCTIONS_PUBKEY: function() {
                return eg
            },
            SYSVAR_RECENT_BLOCKHASHES_PUBKEY: function() {
                return ep
            },
            SYSVAR_RENT_PUBKEY: function() {
                return ey
            },
            SYSVAR_REWARDS_PUBKEY: function() {
                return em
            },
            SYSVAR_SLOT_HASHES_PUBKEY: function() {
                return ef
            },
            SYSVAR_SLOT_HISTORY_PUBKEY: function() {
                return eb
            },
            SYSVAR_STAKE_HISTORY_PUBKEY: function() {
                return ek
            },
            Secp256k1Program: function() {
                return rW
            },
            SendTransactionError: function() {
                return eS
            },
            SolanaJSONRPCError: function() {
                return eI
            },
            SolanaJSONRPCErrorCode: function() {
                return ew
            },
            StakeAuthorizationLayout: function() {
                return rM
            },
            StakeInstruction: function() {
                return rU
            },
            StakeProgram: function() {
                return rG
            },
            Struct: function() {
                return B
            },
            SystemInstruction: function() {
                return eL
            },
            SystemProgram: function() {
                return eW
            },
            Transaction: function() {
                return ec
            },
            TransactionExpiredBlockheightExceededError: function() {
                return G
            },
            TransactionExpiredNonceInvalidError: function() {
                return J
            },
            TransactionExpiredTimeoutError: function() {
                return j
            },
            TransactionInstruction: function() {
                return ea
            },
            TransactionMessage: function() {
                return eu
            },
            TransactionStatus: function() {
                return es
            },
            VALIDATOR_INFO_KEY: function() {
                return rH
            },
            VERSION_PREFIX_MASK: function() {
                return q
            },
            VOTE_PROGRAM_ID: function() {
                return rX
            },
            ValidatorInfo: function() {
                return rZ
            },
            VersionedMessage: function() {
                return en
            },
            VersionedTransaction: function() {
                return el
            },
            VoteAccount: function() {
                return rQ
            },
            VoteAuthorizationLayout: function() {
                return rD
            },
            VoteInit: function() {
                return rj
            },
            VoteInstruction: function() {
                return rJ
            },
            VoteProgram: function() {
                return r$
            },
            clusterApiUrl: function() {
                return r8
            },
            sendAndConfirmRawTransaction: function() {
                return r5
            },
            sendAndConfirmTransaction: function() {
                return e_
            }
        });
        var i, n, s, o, a = r(9109), c = r(2552), u = r(58171), l = r.n(u), d = r(46124), h = r.n(d), g = r(65530), p = r(5810), y = r(24459), m = r(12653), f = r(13025), b = r(4531), k = r.n(b), S = r(92290), w = r(35743), I = r(90666);
        let _ = c.UN.utils.randomPrivateKey
          , A = () => {
            let e = c.UN.utils.randomPrivateKey()
              , t = R(e)
              , r = new Uint8Array(64);
            return r.set(e),
            r.set(t, 32),
            {
                publicKey: t,
                secretKey: r
            }
        }
          , R = c.UN.getPublicKey;
        function x(e) {
            try {
                return c.UN.ExtendedPoint.fromHex(e),
                !0
            } catch {
                return !1
            }
        }
        let P = (e, t) => c.UN.sign(e, t.slice(0, 32))
          , v = c.UN.verify
          , E = e => a.Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? a.Buffer.from(e.buffer, e.byteOffset, e.byteLength) : a.Buffer.from(e);
        class B {
            constructor(e) {
                Object.assign(this, e)
            }
            encode() {
                return a.Buffer.from((0,
                p.serialize)(C, this))
            }
            static decode(e) {
                return (0,
                p.deserialize)(C, this, e)
            }
            static decodeUnchecked(e) {
                return (0,
                p.deserializeUnchecked)(C, this, e)
            }
        }
        class T extends B {
            constructor(e) {
                if (super(e),
                this.enum = "",
                1 !== Object.keys(e).length)
                    throw Error("Enum can only take single value");
                Object.keys(e).map(e => {
                    this.enum = e
                }
                )
            }
        }
        let C = new Map
          , L = 32
          , O = 32
          , W = 1;
        class K extends B {
            constructor(e) {
                if (super({}),
                this._bn = void 0,
                void 0 !== e._bn)
                    this._bn = e._bn;
                else {
                    if ("string" == typeof e) {
                        let t = h().decode(e);
                        if (t.length != O)
                            throw Error("Invalid public key input");
                        this._bn = new (l())(t)
                    } else
                        this._bn = new (l())(e);
                    if (this._bn.byteLength() > O)
                        throw Error("Invalid public key input")
                }
            }
            static unique() {
                let e = new K(W);
                return W += 1,
                new K(e.toBuffer())
            }
            equals(e) {
                return this._bn.eq(e._bn)
            }
            toBase58() {
                return h().encode(this.toBytes())
            }
            toJSON() {
                return this.toBase58()
            }
            toBytes() {
                let e = this.toBuffer();
                return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
            }
            toBuffer() {
                let e = this._bn.toArrayLike(a.Buffer);
                if (e.length === O)
                    return e;
                let t = a.Buffer.alloc(32);
                return e.copy(t, 32 - e.length),
                t
            }
            get[Symbol.toStringTag]() {
                return `PublicKey(${this.toString()})`
            }
            toString() {
                return this.toBase58()
            }
            static async createWithSeed(e, t, r) {
                let i = a.Buffer.concat([e.toBuffer(), a.Buffer.from(t), r.toBuffer()]);
                return new K((0,
                g.JQ)(i))
            }
            static createProgramAddressSync(e, t) {
                let r = a.Buffer.alloc(0);
                e.forEach(function(e) {
                    if (e.length > L)
                        throw TypeError("Max seed length exceeded");
                    r = a.Buffer.concat([r, E(e)])
                }),
                r = a.Buffer.concat([r, t.toBuffer(), a.Buffer.from("ProgramDerivedAddress")]);
                let i = (0,
                g.JQ)(r);
                if (x(i))
                    throw Error("Invalid seeds, address must fall off the curve");
                return new K(i)
            }
            static async createProgramAddress(e, t) {
                return this.createProgramAddressSync(e, t)
            }
            static findProgramAddressSync(e, t) {
                let r, i = 255;
                for (; 0 != i; ) {
                    try {
                        let n = e.concat(a.Buffer.from([i]));
                        r = this.createProgramAddressSync(n, t)
                    } catch (e) {
                        if (e instanceof TypeError)
                            throw e;
                        i--;
                        continue
                    }
                    return [r, i]
                }
                throw Error("Unable to find a viable program address nonce")
            }
            static async findProgramAddress(e, t) {
                return this.findProgramAddressSync(e, t)
            }
            static isOnCurve(e) {
                return x(new K(e).toBytes())
            }
        }
        K.default = new K("11111111111111111111111111111111"),
        C.set(K, {
            kind: "struct",
            fields: [["_bn", "u256"]]
        });
        class N {
            constructor(e) {
                if (this._publicKey = void 0,
                this._secretKey = void 0,
                e) {
                    let t = E(e);
                    if (64 !== e.length)
                        throw Error("bad secret key size");
                    this._publicKey = t.slice(32, 64),
                    this._secretKey = t.slice(0, 32)
                } else
                    this._secretKey = E(_()),
                    this._publicKey = E(R(this._secretKey))
            }
            get publicKey() {
                return new K(this._publicKey)
            }
            get secretKey() {
                return a.Buffer.concat([this._secretKey, this._publicKey], 64)
            }
        }
        let z = new K("BPFLoader1111111111111111111111111111111111")
          , U = 1232
          , q = 127
          , M = 64;
        class G extends Error {
            constructor(e) {
                super(`Signature ${e} has expired: block height exceeded.`),
                this.signature = void 0,
                this.signature = e
            }
        }
        Object.defineProperty(G.prototype, "name", {
            value: "TransactionExpiredBlockheightExceededError"
        });
        class j extends Error {
            constructor(e, t) {
                super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`),
                this.signature = void 0,
                this.signature = e
            }
        }
        Object.defineProperty(j.prototype, "name", {
            value: "TransactionExpiredTimeoutError"
        });
        class J extends Error {
            constructor(e) {
                super(`Signature ${e} has expired: the nonce is no longer valid.`),
                this.signature = void 0,
                this.signature = e
            }
        }
        Object.defineProperty(J.prototype, "name", {
            value: "TransactionExpiredNonceInvalidError"
        });
        class V {
            constructor(e, t) {
                this.staticAccountKeys = void 0,
                this.accountKeysFromLookups = void 0,
                this.staticAccountKeys = e,
                this.accountKeysFromLookups = t
            }
            keySegments() {
                let e = [this.staticAccountKeys];
                return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable),
                e.push(this.accountKeysFromLookups.readonly)),
                e
            }
            get(e) {
                for (let t of this.keySegments()) {
                    if (e < t.length)
                        return t[e];
                    e -= t.length
                }
            }
            get length() {
                return this.keySegments().flat().length
            }
            compileInstructions(e) {
                if (this.length > 256)
                    throw Error("Account index overflow encountered during compilation");
                let t = new Map;
                this.keySegments().flat().forEach( (e, r) => {
                    t.set(e.toBase58(), r)
                }
                );
                let r = e => {
                    let r = t.get(e.toBase58());
                    if (void 0 === r)
                        throw Error("Encountered an unknown instruction account key during compilation");
                    return r
                }
                ;
                return e.map(e => ({
                    programIdIndex: r(e.programId),
                    accountKeyIndexes: e.keys.map(e => r(e.pubkey)),
                    data: e.data
                }))
            }
        }
        let D = (e="publicKey") => y.Ik(32, e)
          , $ = (e="signature") => y.Ik(64, e)
          , H = (e="string") => {
            let t = y.n_([y.Jq("length"), y.Jq("lengthPadding"), y.Ik(y.cv(y.Jq(), -8), "chars")], e)
              , r = t.decode.bind(t)
              , i = t.encode.bind(t);
            return t.decode = (e, t) => r(e, t).chars.toString(),
            t.encode = (e, t, r) => i({
                chars: a.Buffer.from(e, "utf8")
            }, t, r),
            t.alloc = e => y.Jq().span + y.Jq().span + a.Buffer.from(e, "utf8").length,
            t
        }
        ;
        function F(e) {
            let t = 0
              , r = 0;
            for (; ; ) {
                let i = e.shift();
                if (t |= (127 & i) << 7 * r,
                r += 1,
                (128 & i) == 0)
                    break
            }
            return t
        }
        function Z(e, t) {
            let r = t;
            for (; ; ) {
                let t = 127 & r;
                if (0 == (r >>= 7)) {
                    e.push(t);
                    break
                }
                t |= 128,
                e.push(t)
            }
        }
        function X(e, t) {
            if (!e)
                throw Error(t || "Assertion failed")
        }
        class Y {
            constructor(e, t) {
                this.payer = void 0,
                this.keyMetaMap = void 0,
                this.payer = e,
                this.keyMetaMap = t
            }
            static compile(e, t) {
                let r = new Map
                  , i = e => {
                    let t = e.toBase58()
                      , i = r.get(t);
                    return void 0 === i && (i = {
                        isSigner: !1,
                        isWritable: !1,
                        isInvoked: !1
                    },
                    r.set(t, i)),
                    i
                }
                  , n = i(t);
                for (let t of (n.isSigner = !0,
                n.isWritable = !0,
                e))
                    for (let e of (i(t.programId).isInvoked = !0,
                    t.keys)) {
                        let t = i(e.pubkey);
                        t.isSigner ||= e.isSigner,
                        t.isWritable ||= e.isWritable
                    }
                return new Y(t,r)
            }
            getMessageComponents() {
                let e = [...this.keyMetaMap.entries()];
                X(e.length <= 256, "Max static account keys length exceeded");
                let t = e.filter( ([,e]) => e.isSigner && e.isWritable)
                  , r = e.filter( ([,e]) => e.isSigner && !e.isWritable)
                  , i = e.filter( ([,e]) => !e.isSigner && e.isWritable)
                  , n = e.filter( ([,e]) => !e.isSigner && !e.isWritable)
                  , s = {
                    numRequiredSignatures: t.length + r.length,
                    numReadonlySignedAccounts: r.length,
                    numReadonlyUnsignedAccounts: n.length
                };
                {
                    X(t.length > 0, "Expected at least one writable signer key");
                    let[e] = t[0];
                    X(e === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
                }
                return [s, [...t.map( ([e]) => new K(e)), ...r.map( ([e]) => new K(e)), ...i.map( ([e]) => new K(e)), ...n.map( ([e]) => new K(e))]]
            }
            extractTableLookup(e) {
                let[t,r] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && e.isWritable)
                  , [i,n] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && !e.isWritable);
                if (0 !== t.length || 0 !== i.length)
                    return [{
                        accountKey: e.key,
                        writableIndexes: t,
                        readonlyIndexes: i
                    }, {
                        writable: r,
                        readonly: n
                    }]
            }
            drainKeysFoundInLookupTable(e, t) {
                let r = []
                  , i = [];
                for (let[n,s] of this.keyMetaMap.entries())
                    if (t(s)) {
                        let t = new K(n)
                          , s = e.findIndex(e => e.equals(t));
                        s >= 0 && (X(s < 256, "Max lookup table index exceeded"),
                        r.push(s),
                        i.push(t),
                        this.keyMetaMap.delete(n))
                    }
                return [r, i]
            }
        }
        let Q = "Reached end of buffer unexpectedly";
        function ee(e) {
            if (0 === e.length)
                throw Error(Q);
            return e.shift()
        }
        function et(e, ...t) {
            let[r] = t;
            if (2 === t.length ? r + (t[1] ?? 0) > e.length : r >= e.length)
                throw Error(Q);
            return e.splice(...t)
        }
        class er {
            constructor(e) {
                this.header = void 0,
                this.accountKeys = void 0,
                this.recentBlockhash = void 0,
                this.instructions = void 0,
                this.indexToProgramIds = new Map,
                this.header = e.header,
                this.accountKeys = e.accountKeys.map(e => new K(e)),
                this.recentBlockhash = e.recentBlockhash,
                this.instructions = e.instructions,
                this.instructions.forEach(e => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]))
            }
            get version() {
                return "legacy"
            }
            get staticAccountKeys() {
                return this.accountKeys
            }
            get compiledInstructions() {
                return this.instructions.map(e => ({
                    programIdIndex: e.programIdIndex,
                    accountKeyIndexes: e.accounts,
                    data: h().decode(e.data)
                }))
            }
            get addressTableLookups() {
                return []
            }
            getAccountKeys() {
                return new V(this.staticAccountKeys)
            }
            static compile(e) {
                let[t,r] = Y.compile(e.instructions, e.payerKey).getMessageComponents()
                  , i = new V(r).compileInstructions(e.instructions).map(e => ({
                    programIdIndex: e.programIdIndex,
                    accounts: e.accountKeyIndexes,
                    data: h().encode(e.data)
                }));
                return new er({
                    header: t,
                    accountKeys: r,
                    recentBlockhash: e.recentBlockhash,
                    instructions: i
                })
            }
            isAccountSigner(e) {
                return e < this.header.numRequiredSignatures
            }
            isAccountWritable(e) {
                let t = this.header.numRequiredSignatures;
                if (!(e >= this.header.numRequiredSignatures))
                    return e < t - this.header.numReadonlySignedAccounts;
                {
                    let r = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
                    return e - t < r
                }
            }
            isProgramId(e) {
                return this.indexToProgramIds.has(e)
            }
            programIds() {
                return [...this.indexToProgramIds.values()]
            }
            nonProgramIds() {
                return this.accountKeys.filter( (e, t) => !this.isProgramId(t))
            }
            serialize() {
                let e = this.accountKeys.length
                  , t = [];
                Z(t, e);
                let r = this.instructions.map(e => {
                    let {accounts: t, programIdIndex: r} = e
                      , i = Array.from(h().decode(e.data))
                      , n = [];
                    Z(n, t.length);
                    let s = [];
                    return Z(s, i.length),
                    {
                        programIdIndex: r,
                        keyIndicesCount: a.Buffer.from(n),
                        keyIndices: t,
                        dataLength: a.Buffer.from(s),
                        data: i
                    }
                }
                )
                  , i = [];
                Z(i, r.length);
                let n = a.Buffer.alloc(U);
                a.Buffer.from(i).copy(n);
                let s = i.length;
                r.forEach(e => {
                    let t = y.n_([y.u8("programIdIndex"), y.Ik(e.keyIndicesCount.length, "keyIndicesCount"), y.A9(y.u8("keyIndex"), e.keyIndices.length, "keyIndices"), y.Ik(e.dataLength.length, "dataLength"), y.A9(y.u8("userdatum"), e.data.length, "data")]).encode(e, n, s);
                    s += t
                }
                ),
                n = n.slice(0, s);
                let o = y.n_([y.Ik(1, "numRequiredSignatures"), y.Ik(1, "numReadonlySignedAccounts"), y.Ik(1, "numReadonlyUnsignedAccounts"), y.Ik(t.length, "keyCount"), y.A9(D("key"), e, "keys"), D("recentBlockhash")])
                  , c = {
                    numRequiredSignatures: a.Buffer.from([this.header.numRequiredSignatures]),
                    numReadonlySignedAccounts: a.Buffer.from([this.header.numReadonlySignedAccounts]),
                    numReadonlyUnsignedAccounts: a.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                    keyCount: a.Buffer.from(t),
                    keys: this.accountKeys.map(e => E(e.toBytes())),
                    recentBlockhash: h().decode(this.recentBlockhash)
                }
                  , u = a.Buffer.alloc(2048)
                  , l = o.encode(c, u);
                return n.copy(u, l),
                u.slice(0, l + n.length)
            }
            static from(e) {
                let t = [...e]
                  , r = ee(t);
                if (r !== (r & q))
                    throw Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                let i = ee(t)
                  , n = ee(t)
                  , s = F(t)
                  , o = [];
                for (let e = 0; e < s; e++) {
                    let e = et(t, 0, O);
                    o.push(new K(a.Buffer.from(e)))
                }
                let c = et(t, 0, O)
                  , u = F(t)
                  , l = [];
                for (let e = 0; e < u; e++) {
                    let e = ee(t)
                      , r = F(t)
                      , i = et(t, 0, r)
                      , n = F(t)
                      , s = et(t, 0, n)
                      , o = h().encode(a.Buffer.from(s));
                    l.push({
                        programIdIndex: e,
                        accounts: i,
                        data: o
                    })
                }
                return new er({
                    header: {
                        numRequiredSignatures: r,
                        numReadonlySignedAccounts: i,
                        numReadonlyUnsignedAccounts: n
                    },
                    recentBlockhash: h().encode(a.Buffer.from(c)),
                    accountKeys: o,
                    instructions: l
                })
            }
        }
        class ei {
            constructor(e) {
                this.header = void 0,
                this.staticAccountKeys = void 0,
                this.recentBlockhash = void 0,
                this.compiledInstructions = void 0,
                this.addressTableLookups = void 0,
                this.header = e.header,
                this.staticAccountKeys = e.staticAccountKeys,
                this.recentBlockhash = e.recentBlockhash,
                this.compiledInstructions = e.compiledInstructions,
                this.addressTableLookups = e.addressTableLookups
            }
            get version() {
                return 0
            }
            get numAccountKeysFromLookups() {
                let e = 0;
                for (let t of this.addressTableLookups)
                    e += t.readonlyIndexes.length + t.writableIndexes.length;
                return e
            }
            getAccountKeys(e) {
                let t;
                if (e && "accountKeysFromLookups"in e && e.accountKeysFromLookups) {
                    if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
                        throw Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                    t = e.accountKeysFromLookups
                } else if (e && "addressLookupTableAccounts"in e && e.addressLookupTableAccounts)
                    t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
                else if (this.addressTableLookups.length > 0)
                    throw Error("Failed to get account keys because address table lookups were not resolved");
                return new V(this.staticAccountKeys,t)
            }
            isAccountSigner(e) {
                return e < this.header.numRequiredSignatures
            }
            isAccountWritable(e) {
                let t = this.header.numRequiredSignatures
                  , r = this.staticAccountKeys.length;
                if (e >= r)
                    return e - r < this.addressTableLookups.reduce( (e, t) => e + t.writableIndexes.length, 0);
                if (!(e >= this.header.numRequiredSignatures))
                    return e < t - this.header.numReadonlySignedAccounts;
                {
                    let i = r - t - this.header.numReadonlyUnsignedAccounts;
                    return e - t < i
                }
            }
            resolveAddressTableLookups(e) {
                let t = {
                    writable: [],
                    readonly: []
                };
                for (let r of this.addressTableLookups) {
                    let i = e.find(e => e.key.equals(r.accountKey));
                    if (!i)
                        throw Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
                    for (let e of r.writableIndexes)
                        if (e < i.state.addresses.length)
                            t.writable.push(i.state.addresses[e]);
                        else
                            throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`);
                    for (let e of r.readonlyIndexes)
                        if (e < i.state.addresses.length)
                            t.readonly.push(i.state.addresses[e]);
                        else
                            throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`)
                }
                return t
            }
            static compile(e) {
                let t = Y.compile(e.instructions, e.payerKey)
                  , r = []
                  , i = {
                    writable: [],
                    readonly: []
                };
                for (let n of e.addressLookupTableAccounts || []) {
                    let e = t.extractTableLookup(n);
                    if (void 0 !== e) {
                        let[t,{writable: n, readonly: s}] = e;
                        r.push(t),
                        i.writable.push(...n),
                        i.readonly.push(...s)
                    }
                }
                let[n,s] = t.getMessageComponents()
                  , o = new V(s,i).compileInstructions(e.instructions);
                return new ei({
                    header: n,
                    staticAccountKeys: s,
                    recentBlockhash: e.recentBlockhash,
                    compiledInstructions: o,
                    addressTableLookups: r
                })
            }
            serialize() {
                let e = [];
                Z(e, this.staticAccountKeys.length);
                let t = this.serializeInstructions()
                  , r = [];
                Z(r, this.compiledInstructions.length);
                let i = this.serializeAddressTableLookups()
                  , n = [];
                Z(n, this.addressTableLookups.length);
                let s = y.n_([y.u8("prefix"), y.n_([y.u8("numRequiredSignatures"), y.u8("numReadonlySignedAccounts"), y.u8("numReadonlyUnsignedAccounts")], "header"), y.Ik(e.length, "staticAccountKeysLength"), y.A9(D(), this.staticAccountKeys.length, "staticAccountKeys"), D("recentBlockhash"), y.Ik(r.length, "instructionsLength"), y.Ik(t.length, "serializedInstructions"), y.Ik(n.length, "addressTableLookupsLength"), y.Ik(i.length, "serializedAddressTableLookups")])
                  , o = new Uint8Array(U)
                  , a = s.encode({
                    prefix: 128,
                    header: this.header,
                    staticAccountKeysLength: new Uint8Array(e),
                    staticAccountKeys: this.staticAccountKeys.map(e => e.toBytes()),
                    recentBlockhash: h().decode(this.recentBlockhash),
                    instructionsLength: new Uint8Array(r),
                    serializedInstructions: t,
                    addressTableLookupsLength: new Uint8Array(n),
                    serializedAddressTableLookups: i
                }, o);
                return o.slice(0, a)
            }
            serializeInstructions() {
                let e = 0
                  , t = new Uint8Array(U);
                for (let r of this.compiledInstructions) {
                    let i = [];
                    Z(i, r.accountKeyIndexes.length);
                    let n = [];
                    Z(n, r.data.length);
                    let s = y.n_([y.u8("programIdIndex"), y.Ik(i.length, "encodedAccountKeyIndexesLength"), y.A9(y.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"), y.Ik(n.length, "encodedDataLength"), y.Ik(r.data.length, "data")]);
                    e += s.encode({
                        programIdIndex: r.programIdIndex,
                        encodedAccountKeyIndexesLength: new Uint8Array(i),
                        accountKeyIndexes: r.accountKeyIndexes,
                        encodedDataLength: new Uint8Array(n),
                        data: r.data
                    }, t, e)
                }
                return t.slice(0, e)
            }
            serializeAddressTableLookups() {
                let e = 0
                  , t = new Uint8Array(U);
                for (let r of this.addressTableLookups) {
                    let i = [];
                    Z(i, r.writableIndexes.length);
                    let n = [];
                    Z(n, r.readonlyIndexes.length);
                    let s = y.n_([D("accountKey"), y.Ik(i.length, "encodedWritableIndexesLength"), y.A9(y.u8(), r.writableIndexes.length, "writableIndexes"), y.Ik(n.length, "encodedReadonlyIndexesLength"), y.A9(y.u8(), r.readonlyIndexes.length, "readonlyIndexes")]);
                    e += s.encode({
                        accountKey: r.accountKey.toBytes(),
                        encodedWritableIndexesLength: new Uint8Array(i),
                        writableIndexes: r.writableIndexes,
                        encodedReadonlyIndexesLength: new Uint8Array(n),
                        readonlyIndexes: r.readonlyIndexes
                    }, t, e)
                }
                return t.slice(0, e)
            }
            static deserialize(e) {
                let t = [...e]
                  , r = ee(t)
                  , i = r & q;
                X(r !== i, "Expected versioned message but received legacy message"),
                X(0 === i, `Expected versioned message with version 0 but found version ${i}`);
                let n = {
                    numRequiredSignatures: ee(t),
                    numReadonlySignedAccounts: ee(t),
                    numReadonlyUnsignedAccounts: ee(t)
                }
                  , s = []
                  , o = F(t);
                for (let e = 0; e < o; e++)
                    s.push(new K(et(t, 0, O)));
                let a = h().encode(et(t, 0, O))
                  , c = F(t)
                  , u = [];
                for (let e = 0; e < c; e++) {
                    let e = ee(t)
                      , r = F(t)
                      , i = et(t, 0, r)
                      , n = F(t)
                      , s = new Uint8Array(et(t, 0, n));
                    u.push({
                        programIdIndex: e,
                        accountKeyIndexes: i,
                        data: s
                    })
                }
                let l = F(t)
                  , d = [];
                for (let e = 0; e < l; e++) {
                    let e = new K(et(t, 0, O))
                      , r = F(t)
                      , i = et(t, 0, r)
                      , n = F(t)
                      , s = et(t, 0, n);
                    d.push({
                        accountKey: e,
                        writableIndexes: i,
                        readonlyIndexes: s
                    })
                }
                return new ei({
                    header: n,
                    staticAccountKeys: s,
                    recentBlockhash: a,
                    compiledInstructions: u,
                    addressTableLookups: d
                })
            }
        }
        let en = {
            deserializeMessageVersion(e) {
                let t = e[0]
                  , r = t & q;
                return r === t ? "legacy" : r
            },
            deserialize: e => {
                let t = en.deserializeMessageVersion(e);
                if ("legacy" === t)
                    return er.from(e);
                if (0 === t)
                    return ei.deserialize(e);
                throw Error(`Transaction message version ${t} deserialization is not supported`)
            }
        }
          , es = ((i = {})[i.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED",
        i[i.PROCESSED = 1] = "PROCESSED",
        i[i.TIMED_OUT = 2] = "TIMED_OUT",
        i[i.NONCE_INVALID = 3] = "NONCE_INVALID",
        i)
          , eo = a.Buffer.alloc(M).fill(0);
        class ea {
            constructor(e) {
                this.keys = void 0,
                this.programId = void 0,
                this.data = a.Buffer.alloc(0),
                this.programId = e.programId,
                this.keys = e.keys,
                e.data && (this.data = e.data)
            }
            toJSON() {
                return {
                    keys: this.keys.map( ({pubkey: e, isSigner: t, isWritable: r}) => ({
                        pubkey: e.toJSON(),
                        isSigner: t,
                        isWritable: r
                    })),
                    programId: this.programId.toJSON(),
                    data: [...this.data]
                }
            }
        }
        class ec {
            get signature() {
                return this.signatures.length > 0 ? this.signatures[0].signature : null
            }
            constructor(e) {
                if (this.signatures = [],
                this.feePayer = void 0,
                this.instructions = [],
                this.recentBlockhash = void 0,
                this.lastValidBlockHeight = void 0,
                this.nonceInfo = void 0,
                this.minNonceContextSlot = void 0,
                this._message = void 0,
                this._json = void 0,
                !e)
                    return;
                if (e.feePayer && (this.feePayer = e.feePayer),
                e.signatures && (this.signatures = e.signatures),
                Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                    let {minContextSlot: t, nonceInfo: r} = e;
                    this.minNonceContextSlot = t,
                    this.nonceInfo = r
                } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                    let {blockhash: t, lastValidBlockHeight: r} = e;
                    this.recentBlockhash = t,
                    this.lastValidBlockHeight = r
                } else {
                    let {recentBlockhash: t, nonceInfo: r} = e;
                    r && (this.nonceInfo = r),
                    this.recentBlockhash = t
                }
            }
            toJSON() {
                return {
                    recentBlockhash: this.recentBlockhash || null,
                    feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                    nonceInfo: this.nonceInfo ? {
                        nonce: this.nonceInfo.nonce,
                        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                    } : null,
                    instructions: this.instructions.map(e => e.toJSON()),
                    signers: this.signatures.map( ({publicKey: e}) => e.toJSON())
                }
            }
            add(...e) {
                if (0 === e.length)
                    throw Error("No instructions");
                return e.forEach(e => {
                    "instructions"in e ? this.instructions = this.instructions.concat(e.instructions) : "data"in e && "programId"in e && "keys"in e ? this.instructions.push(e) : this.instructions.push(new ea(e))
                }
                ),
                this
            }
            compileMessage() {
                let e, t, r;
                if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
                    return this._message;
                if (this.nonceInfo ? (e = this.nonceInfo.nonce,
                t = this.instructions[0] != this.nonceInfo.nonceInstruction ? [this.nonceInfo.nonceInstruction, ...this.instructions] : this.instructions) : (e = this.recentBlockhash,
                t = this.instructions),
                !e)
                    throw Error("Transaction recentBlockhash required");
                if (t.length < 1 && console.warn("No instructions provided"),
                this.feePayer)
                    r = this.feePayer;
                else if (this.signatures.length > 0 && this.signatures[0].publicKey)
                    r = this.signatures[0].publicKey;
                else
                    throw Error("Transaction fee payer required");
                for (let e = 0; e < t.length; e++)
                    if (void 0 === t[e].programId)
                        throw Error(`Transaction instruction index ${e} has undefined program id`);
                let i = []
                  , n = [];
                t.forEach(e => {
                    e.keys.forEach(e => {
                        n.push({
                            ...e
                        })
                    }
                    );
                    let t = e.programId.toString();
                    i.includes(t) || i.push(t)
                }
                ),
                i.forEach(e => {
                    n.push({
                        pubkey: new K(e),
                        isSigner: !1,
                        isWritable: !1
                    })
                }
                );
                let s = [];
                n.forEach(e => {
                    let t = e.pubkey.toString()
                      , r = s.findIndex(e => e.pubkey.toString() === t);
                    r > -1 ? (s[r].isWritable = s[r].isWritable || e.isWritable,
                    s[r].isSigner = s[r].isSigner || e.isSigner) : s.push(e)
                }
                ),
                s.sort(function(e, t) {
                    return e.isSigner !== t.isSigner ? e.isSigner ? -1 : 1 : e.isWritable !== t.isWritable ? e.isWritable ? -1 : 1 : e.pubkey.toBase58().localeCompare(t.pubkey.toBase58(), "en", {
                        localeMatcher: "best fit",
                        usage: "sort",
                        sensitivity: "variant",
                        ignorePunctuation: !1,
                        numeric: !1,
                        caseFirst: "lower"
                    })
                });
                let o = s.findIndex(e => e.pubkey.equals(r));
                if (o > -1) {
                    let[e] = s.splice(o, 1);
                    e.isSigner = !0,
                    e.isWritable = !0,
                    s.unshift(e)
                } else
                    s.unshift({
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !0
                    });
                for (let e of this.signatures) {
                    let t = s.findIndex(t => t.pubkey.equals(e.publicKey));
                    if (t > -1)
                        s[t].isSigner || (s[t].isSigner = !0,
                        console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                    else
                        throw Error(`unknown signer: ${e.publicKey.toString()}`)
                }
                let a = 0
                  , c = 0
                  , u = 0
                  , l = []
                  , d = [];
                s.forEach( ({pubkey: e, isSigner: t, isWritable: r}) => {
                    t ? (l.push(e.toString()),
                    a += 1,
                    r || (c += 1)) : (d.push(e.toString()),
                    r || (u += 1))
                }
                );
                let g = l.concat(d)
                  , p = t.map(e => {
                    let {data: t, programId: r} = e;
                    return {
                        programIdIndex: g.indexOf(r.toString()),
                        accounts: e.keys.map(e => g.indexOf(e.pubkey.toString())),
                        data: h().encode(t)
                    }
                }
                );
                return p.forEach(e => {
                    X(e.programIdIndex >= 0),
                    e.accounts.forEach(e => X(e >= 0))
                }
                ),
                new er({
                    header: {
                        numRequiredSignatures: a,
                        numReadonlySignedAccounts: c,
                        numReadonlyUnsignedAccounts: u
                    },
                    accountKeys: g,
                    recentBlockhash: e,
                    instructions: p
                })
            }
            _compile() {
                let e = this.compileMessage()
                  , t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
                return this.signatures.length === t.length && this.signatures.every( (e, r) => t[r].equals(e.publicKey)) || (this.signatures = t.map(e => ({
                    signature: null,
                    publicKey: e
                }))),
                e
            }
            serializeMessage() {
                return this._compile().serialize()
            }
            async getEstimatedFee(e) {
                return (await e.getFeeForMessage(this.compileMessage())).value
            }
            setSigners(...e) {
                if (0 === e.length)
                    throw Error("No signers");
                let t = new Set;
                this.signatures = e.filter(e => {
                    let r = e.toString();
                    return !t.has(r) && (t.add(r),
                    !0)
                }
                ).map(e => ({
                    signature: null,
                    publicKey: e
                }))
            }
            sign(...e) {
                if (0 === e.length)
                    throw Error("No signers");
                let t = new Set
                  , r = [];
                for (let i of e) {
                    let e = i.publicKey.toString();
                    t.has(e) || (t.add(e),
                    r.push(i))
                }
                this.signatures = r.map(e => ({
                    signature: null,
                    publicKey: e.publicKey
                }));
                let i = this._compile();
                this._partialSign(i, ...r)
            }
            partialSign(...e) {
                if (0 === e.length)
                    throw Error("No signers");
                let t = new Set
                  , r = [];
                for (let i of e) {
                    let e = i.publicKey.toString();
                    t.has(e) || (t.add(e),
                    r.push(i))
                }
                let i = this._compile();
                this._partialSign(i, ...r)
            }
            _partialSign(e, ...t) {
                let r = e.serialize();
                t.forEach(e => {
                    let t = P(r, e.secretKey);
                    this._addSignature(e.publicKey, E(t))
                }
                )
            }
            addSignature(e, t) {
                this._compile(),
                this._addSignature(e, t)
            }
            _addSignature(e, t) {
                X(64 === t.length);
                let r = this.signatures.findIndex(t => e.equals(t.publicKey));
                if (r < 0)
                    throw Error(`unknown signer: ${e.toString()}`);
                this.signatures[r].signature = a.Buffer.from(t)
            }
            verifySignatures(e=!0) {
                return !this._getMessageSignednessErrors(this.serializeMessage(), e)
            }
            _getMessageSignednessErrors(e, t) {
                let r = {};
                for (let {signature: i, publicKey: n} of this.signatures)
                    null === i ? t && (r.missing ||= []).push(n) : v(i, e, n.toBytes()) || (r.invalid ||= []).push(n);
                return r.invalid || r.missing ? r : void 0
            }
            serialize(e) {
                let {requireAllSignatures: t, verifySignatures: r} = Object.assign({
                    requireAllSignatures: !0,
                    verifySignatures: !0
                }, e)
                  , i = this.serializeMessage();
                if (r) {
                    let e = this._getMessageSignednessErrors(i, t);
                    if (e) {
                        let t = "Signature verification failed.";
                        throw e.invalid && (t += `
Invalid signature for public key${1 === e.invalid.length ? "" : "(s)"} [\`${e.invalid.map(e => e.toBase58()).join("`, `")}\`].`),
                        e.missing && (t += `
Missing signature for public key${1 === e.missing.length ? "" : "(s)"} [\`${e.missing.map(e => e.toBase58()).join("`, `")}\`].`),
                        Error(t)
                    }
                }
                return this._serialize(i)
            }
            _serialize(e) {
                let {signatures: t} = this
                  , r = [];
                Z(r, t.length);
                let i = r.length + 64 * t.length + e.length
                  , n = a.Buffer.alloc(i);
                return X(t.length < 256),
                a.Buffer.from(r).copy(n, 0),
                t.forEach( ({signature: e}, t) => {
                    null !== e && (X(64 === e.length, "signature has invalid length"),
                    a.Buffer.from(e).copy(n, r.length + 64 * t))
                }
                ),
                e.copy(n, r.length + 64 * t.length),
                X(n.length <= U, `Transaction too large: ${n.length} > ${U}`),
                n
            }
            get keys() {
                return X(1 === this.instructions.length),
                this.instructions[0].keys.map(e => e.pubkey)
            }
            get programId() {
                return X(1 === this.instructions.length),
                this.instructions[0].programId
            }
            get data() {
                return X(1 === this.instructions.length),
                this.instructions[0].data
            }
            static from(e) {
                let t = [...e]
                  , r = F(t)
                  , i = [];
                for (let e = 0; e < r; e++) {
                    let e = et(t, 0, M);
                    i.push(h().encode(a.Buffer.from(e)))
                }
                return ec.populate(er.from(t), i)
            }
            static populate(e, t=[]) {
                let r = new ec;
                return r.recentBlockhash = e.recentBlockhash,
                e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]),
                t.forEach( (t, i) => {
                    let n = {
                        signature: t == h().encode(eo) ? null : h().decode(t),
                        publicKey: e.accountKeys[i]
                    };
                    r.signatures.push(n)
                }
                ),
                e.instructions.forEach(t => {
                    let i = t.accounts.map(t => {
                        let i = e.accountKeys[t];
                        return {
                            pubkey: i,
                            isSigner: r.signatures.some(e => e.publicKey.toString() === i.toString()) || e.isAccountSigner(t),
                            isWritable: e.isAccountWritable(t)
                        }
                    }
                    );
                    r.instructions.push(new ea({
                        keys: i,
                        programId: e.accountKeys[t.programIdIndex],
                        data: h().decode(t.data)
                    }))
                }
                ),
                r._message = e,
                r._json = r.toJSON(),
                r
            }
        }
        class eu {
            constructor(e) {
                this.payerKey = void 0,
                this.instructions = void 0,
                this.recentBlockhash = void 0,
                this.payerKey = e.payerKey,
                this.instructions = e.instructions,
                this.recentBlockhash = e.recentBlockhash
            }
            static decompile(e, t) {
                let {header: r, compiledInstructions: i, recentBlockhash: n} = e
                  , {numRequiredSignatures: s, numReadonlySignedAccounts: o, numReadonlyUnsignedAccounts: a} = r
                  , c = s - o;
                X(c > 0, "Message header is invalid");
                let u = e.staticAccountKeys.length - s - a;
                X(u >= 0, "Message header is invalid");
                let l = e.getAccountKeys(t)
                  , d = l.get(0);
                if (void 0 === d)
                    throw Error("Failed to decompile message because no account keys were found");
                let h = [];
                for (let e of i) {
                    let t = [];
                    for (let i of e.accountKeyIndexes) {
                        let e;
                        let n = l.get(i);
                        if (void 0 === n)
                            throw Error(`Failed to find key for account key index ${i}`);
                        e = i < s ? i < c : i < l.staticAccountKeys.length ? i - s < u : i - l.staticAccountKeys.length < l.accountKeysFromLookups.writable.length,
                        t.push({
                            pubkey: n,
                            isSigner: i < r.numRequiredSignatures,
                            isWritable: e
                        })
                    }
                    let i = l.get(e.programIdIndex);
                    if (void 0 === i)
                        throw Error(`Failed to find program id for program id index ${e.programIdIndex}`);
                    h.push(new ea({
                        programId: i,
                        data: E(e.data),
                        keys: t
                    }))
                }
                return new eu({
                    payerKey: d,
                    instructions: h,
                    recentBlockhash: n
                })
            }
            compileToLegacyMessage() {
                return er.compile({
                    payerKey: this.payerKey,
                    recentBlockhash: this.recentBlockhash,
                    instructions: this.instructions
                })
            }
            compileToV0Message(e) {
                return ei.compile({
                    payerKey: this.payerKey,
                    recentBlockhash: this.recentBlockhash,
                    instructions: this.instructions,
                    addressLookupTableAccounts: e
                })
            }
        }
        class el {
            get version() {
                return this.message.version
            }
            constructor(e, t) {
                if (this.signatures = void 0,
                this.message = void 0,
                void 0 !== t)
                    X(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"),
                    this.signatures = t;
                else {
                    let t = [];
                    for (let r = 0; r < e.header.numRequiredSignatures; r++)
                        t.push(new Uint8Array(M));
                    this.signatures = t
                }
                this.message = e
            }
            serialize() {
                let e = this.message.serialize()
                  , t = [];
                Z(t, this.signatures.length);
                let r = y.n_([y.Ik(t.length, "encodedSignaturesLength"), y.A9($(), this.signatures.length, "signatures"), y.Ik(e.length, "serializedMessage")])
                  , i = new Uint8Array(2048)
                  , n = r.encode({
                    encodedSignaturesLength: new Uint8Array(t),
                    signatures: this.signatures,
                    serializedMessage: e
                }, i);
                return i.slice(0, n)
            }
            static deserialize(e) {
                let t = [...e]
                  , r = []
                  , i = F(t);
                for (let e = 0; e < i; e++)
                    r.push(new Uint8Array(et(t, 0, M)));
                return new el(en.deserialize(new Uint8Array(t)),r)
            }
            sign(e) {
                let t = this.message.serialize()
                  , r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
                for (let i of e) {
                    let e = r.findIndex(e => e.equals(i.publicKey));
                    X(e >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`),
                    this.signatures[e] = P(t, i.secretKey)
                }
            }
            addSignature(e, t) {
                X(64 === t.byteLength, "Signature must be 64 bytes long");
                let r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(t => t.equals(e));
                X(r >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`),
                this.signatures[r] = t
            }
        }
        let ed = new K("SysvarC1ock11111111111111111111111111111111")
          , eh = new K("SysvarEpochSchedu1e111111111111111111111111")
          , eg = new K("Sysvar1nstructions1111111111111111111111111")
          , ep = new K("SysvarRecentB1ockHashes11111111111111111111")
          , ey = new K("SysvarRent111111111111111111111111111111111")
          , em = new K("SysvarRewards111111111111111111111111111111")
          , ef = new K("SysvarS1otHashes111111111111111111111111111")
          , eb = new K("SysvarS1otHistory11111111111111111111111111")
          , ek = new K("SysvarStakeHistory1111111111111111111111111");
        class eS extends Error {
            constructor({action: e, signature: t, transactionMessage: r, logs: i}) {
                let n;
                let s = i ? `Logs: 
${JSON.stringify(i.slice(-10), null, 2)}. ` : ""
                  , o = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
                switch (e) {
                case "send":
                    n = `Transaction ${t} resulted in an error. 
${r}. ` + s + o;
                    break;
                case "simulate":
                    n = `Simulation failed. 
Message: ${r}. 
` + s + o;
                    break;
                default:
                    n = `Unknown action '${e}'`
                }
                super(n),
                this.signature = void 0,
                this.transactionMessage = void 0,
                this.transactionLogs = void 0,
                this.signature = t,
                this.transactionMessage = r,
                this.transactionLogs = i || void 0
            }
            get transactionError() {
                return {
                    message: this.transactionMessage,
                    logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
                }
            }
            get logs() {
                let e = this.transactionLogs;
                if (null == e || "object" != typeof e || !("then"in e))
                    return e
            }
            async getLogs(e) {
                return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise( (t, r) => {
                    e.getTransaction(this.signature).then(e => {
                        if (e && e.meta && e.meta.logMessages) {
                            let r = e.meta.logMessages;
                            this.transactionLogs = r,
                            t(r)
                        } else
                            r(Error("Log messages not found"))
                    }
                    ).catch(r)
                }
                )),
                await this.transactionLogs
            }
        }
        let ew = {
            JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
            JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
            JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
            JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
            JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
            JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
            JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
            JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
            JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
            JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
            JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
            JSON_RPC_SCAN_ERROR: -32012,
            JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
            JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
            JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
            JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
        };
        class eI extends Error {
            constructor({code: e, message: t, data: r}, i) {
                super(null != i ? `${i}: ${t}` : t),
                this.code = void 0,
                this.data = void 0,
                this.code = e,
                this.data = r,
                this.name = "SolanaJSONRPCError"
            }
        }
        async function e_(e, t, r, i) {
            let n;
            let s = i && {
                skipPreflight: i.skipPreflight,
                preflightCommitment: i.preflightCommitment || i.commitment,
                maxRetries: i.maxRetries,
                minContextSlot: i.minContextSlot
            }
              , o = await e.sendTransaction(t, r, s);
            if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
                n = (await e.confirmTransaction({
                    abortSignal: i?.abortSignal,
                    signature: o,
                    blockhash: t.recentBlockhash,
                    lastValidBlockHeight: t.lastValidBlockHeight
                }, i && i.commitment)).value;
            else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
                let {nonceInstruction: r} = t.nonceInfo
                  , s = r.keys[0].pubkey;
                n = (await e.confirmTransaction({
                    abortSignal: i?.abortSignal,
                    minContextSlot: t.minNonceContextSlot,
                    nonceAccountPubkey: s,
                    nonceValue: t.nonceInfo.nonce,
                    signature: o
                }, i && i.commitment)).value
            } else
                i?.abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."),
                n = (await e.confirmTransaction(o, i && i.commitment)).value;
            if (n.err) {
                if (null != o)
                    throw new eS({
                        action: "send",
                        signature: o,
                        transactionMessage: `Status: (${JSON.stringify(n)})`
                    });
                throw Error(`Transaction ${o} failed (${JSON.stringify(n)})`)
            }
            return o
        }
        function eA(e) {
            return new Promise(t => setTimeout(t, e))
        }
        function eR(e, t) {
            let r = e.layout.span >= 0 ? e.layout.span : function e(t, r) {
                let i = t => {
                    if (t.span >= 0)
                        return t.span;
                    if ("function" == typeof t.alloc)
                        return t.alloc(r[t.property]);
                    if ("count"in t && "elementLayout"in t) {
                        let e = r[t.property];
                        if (Array.isArray(e))
                            return e.length * i(t.elementLayout)
                    } else if ("fields"in t)
                        return e({
                            layout: t
                        }, r[t.property]);
                    return 0
                }
                  , n = 0;
                return t.layout.fields.forEach(e => {
                    n += i(e)
                }
                ),
                n
            }(e, t)
              , i = a.Buffer.alloc(r)
              , n = Object.assign({
                instruction: e.index
            }, t);
            return e.layout.encode(n, i),
            i
        }
        function ex(e, t) {
            let r;
            try {
                r = e.layout.decode(t)
            } catch (e) {
                throw Error("invalid instruction; " + e)
            }
            if (r.instruction !== e.index)
                throw Error(`invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`);
            return r
        }
        let eP = y._O("lamportsPerSignature")
          , ev = y.n_([y.Jq("version"), y.Jq("state"), D("authorizedPubkey"), D("nonce"), y.n_([eP], "feeCalculator")])
          , eE = ev.span;
        class eB {
            constructor(e) {
                this.authorizedPubkey = void 0,
                this.nonce = void 0,
                this.feeCalculator = void 0,
                this.authorizedPubkey = e.authorizedPubkey,
                this.nonce = e.nonce,
                this.feeCalculator = e.feeCalculator
            }
            static fromAccountData(e) {
                let t = ev.decode(E(e), 0);
                return new eB({
                    authorizedPubkey: new K(t.authorizedPubkey),
                    nonce: new K(t.nonce).toString(),
                    feeCalculator: t.feeCalculator
                })
            }
        }
        let eT = e => ({
            decode: e.decode.bind(e),
            encode: e.encode.bind(e)
        })
          , eC = e => {
            let t = (0,
            y.Ik)(8, e)
              , {encode: r, decode: i} = eT(t);
            return t.decode = (e, t) => {
                let r = i(e, t);
                return (0,
                m.oU)(a.Buffer.from(r))
            }
            ,
            t.encode = (e, t, i) => r((0,
            m.k$)(e, 8), t, i),
            t
        }
        ;
        class eL {
            constructor() {}
            static decodeInstructionType(e) {
                let t;
                this.checkProgramId(e.programId);
                let r = y.Jq("instruction").decode(e.data);
                for (let[e,i] of Object.entries(eO))
                    if (i.index == r) {
                        t = e;
                        break
                    }
                if (!t)
                    throw Error("Instruction type incorrect; not a SystemInstruction");
                return t
            }
            static decodeCreateAccount(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 2);
                let {lamports: t, space: r, programId: i} = ex(eO.Create, e.data);
                return {
                    fromPubkey: e.keys[0].pubkey,
                    newAccountPubkey: e.keys[1].pubkey,
                    lamports: t,
                    space: r,
                    programId: new K(i)
                }
            }
            static decodeTransfer(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 2);
                let {lamports: t} = ex(eO.Transfer, e.data);
                return {
                    fromPubkey: e.keys[0].pubkey,
                    toPubkey: e.keys[1].pubkey,
                    lamports: t
                }
            }
            static decodeTransferWithSeed(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {lamports: t, seed: r, programId: i} = ex(eO.TransferWithSeed, e.data);
                return {
                    fromPubkey: e.keys[0].pubkey,
                    basePubkey: e.keys[1].pubkey,
                    toPubkey: e.keys[2].pubkey,
                    lamports: t,
                    seed: r,
                    programId: new K(i)
                }
            }
            static decodeAllocate(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 1);
                let {space: t} = ex(eO.Allocate, e.data);
                return {
                    accountPubkey: e.keys[0].pubkey,
                    space: t
                }
            }
            static decodeAllocateWithSeed(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 1);
                let {base: t, seed: r, space: i, programId: n} = ex(eO.AllocateWithSeed, e.data);
                return {
                    accountPubkey: e.keys[0].pubkey,
                    basePubkey: new K(t),
                    seed: r,
                    space: i,
                    programId: new K(n)
                }
            }
            static decodeAssign(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 1);
                let {programId: t} = ex(eO.Assign, e.data);
                return {
                    accountPubkey: e.keys[0].pubkey,
                    programId: new K(t)
                }
            }
            static decodeAssignWithSeed(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 1);
                let {base: t, seed: r, programId: i} = ex(eO.AssignWithSeed, e.data);
                return {
                    accountPubkey: e.keys[0].pubkey,
                    basePubkey: new K(t),
                    seed: r,
                    programId: new K(i)
                }
            }
            static decodeCreateWithSeed(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 2);
                let {base: t, seed: r, lamports: i, space: n, programId: s} = ex(eO.CreateWithSeed, e.data);
                return {
                    fromPubkey: e.keys[0].pubkey,
                    newAccountPubkey: e.keys[1].pubkey,
                    basePubkey: new K(t),
                    seed: r,
                    lamports: i,
                    space: n,
                    programId: new K(s)
                }
            }
            static decodeNonceInitialize(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {authorized: t} = ex(eO.InitializeNonceAccount, e.data);
                return {
                    noncePubkey: e.keys[0].pubkey,
                    authorizedPubkey: new K(t)
                }
            }
            static decodeNonceAdvance(e) {
                return this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3),
                ex(eO.AdvanceNonceAccount, e.data),
                {
                    noncePubkey: e.keys[0].pubkey,
                    authorizedPubkey: e.keys[2].pubkey
                }
            }
            static decodeNonceWithdraw(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 5);
                let {lamports: t} = ex(eO.WithdrawNonceAccount, e.data);
                return {
                    noncePubkey: e.keys[0].pubkey,
                    toPubkey: e.keys[1].pubkey,
                    authorizedPubkey: e.keys[4].pubkey,
                    lamports: t
                }
            }
            static decodeNonceAuthorize(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 2);
                let {authorized: t} = ex(eO.AuthorizeNonceAccount, e.data);
                return {
                    noncePubkey: e.keys[0].pubkey,
                    authorizedPubkey: e.keys[1].pubkey,
                    newAuthorizedPubkey: new K(t)
                }
            }
            static checkProgramId(e) {
                if (!e.equals(eW.programId))
                    throw Error("invalid instruction; programId is not SystemProgram")
            }
            static checkKeyLength(e, t) {
                if (e.length < t)
                    throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
            }
        }
        let eO = Object.freeze({
            Create: {
                index: 0,
                layout: y.n_([y.Jq("instruction"), y.gM("lamports"), y.gM("space"), D("programId")])
            },
            Assign: {
                index: 1,
                layout: y.n_([y.Jq("instruction"), D("programId")])
            },
            Transfer: {
                index: 2,
                layout: y.n_([y.Jq("instruction"), eC("lamports")])
            },
            CreateWithSeed: {
                index: 3,
                layout: y.n_([y.Jq("instruction"), D("base"), H("seed"), y.gM("lamports"), y.gM("space"), D("programId")])
            },
            AdvanceNonceAccount: {
                index: 4,
                layout: y.n_([y.Jq("instruction")])
            },
            WithdrawNonceAccount: {
                index: 5,
                layout: y.n_([y.Jq("instruction"), y.gM("lamports")])
            },
            InitializeNonceAccount: {
                index: 6,
                layout: y.n_([y.Jq("instruction"), D("authorized")])
            },
            AuthorizeNonceAccount: {
                index: 7,
                layout: y.n_([y.Jq("instruction"), D("authorized")])
            },
            Allocate: {
                index: 8,
                layout: y.n_([y.Jq("instruction"), y.gM("space")])
            },
            AllocateWithSeed: {
                index: 9,
                layout: y.n_([y.Jq("instruction"), D("base"), H("seed"), y.gM("space"), D("programId")])
            },
            AssignWithSeed: {
                index: 10,
                layout: y.n_([y.Jq("instruction"), D("base"), H("seed"), D("programId")])
            },
            TransferWithSeed: {
                index: 11,
                layout: y.n_([y.Jq("instruction"), eC("lamports"), H("seed"), D("programId")])
            },
            UpgradeNonceAccount: {
                index: 12,
                layout: y.n_([y.Jq("instruction")])
            }
        });
        class eW {
            constructor() {}
            static createAccount(e) {
                let t = eR(eO.Create, {
                    lamports: e.lamports,
                    space: e.space,
                    programId: E(e.programId.toBuffer())
                });
                return new ea({
                    keys: [{
                        pubkey: e.fromPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: e.newAccountPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }],
                    programId: this.programId,
                    data: t
                })
            }
            static transfer(e) {
                let t, r;
                return "basePubkey"in e ? (t = eR(eO.TransferWithSeed, {
                    lamports: BigInt(e.lamports),
                    seed: e.seed,
                    programId: E(e.programId.toBuffer())
                }),
                r = [{
                    pubkey: e.fromPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]) : (t = eR(eO.Transfer, {
                    lamports: BigInt(e.lamports)
                }),
                r = [{
                    pubkey: e.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]),
                new ea({
                    keys: r,
                    programId: this.programId,
                    data: t
                })
            }
            static assign(e) {
                let t, r;
                return "basePubkey"in e ? (t = eR(eO.AssignWithSeed, {
                    base: E(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    programId: E(e.programId.toBuffer())
                }),
                r = [{
                    pubkey: e.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]) : (t = eR(eO.Assign, {
                    programId: E(e.programId.toBuffer())
                }),
                r = [{
                    pubkey: e.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]),
                new ea({
                    keys: r,
                    programId: this.programId,
                    data: t
                })
            }
            static createAccountWithSeed(e) {
                let t = eR(eO.CreateWithSeed, {
                    base: E(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    lamports: e.lamports,
                    space: e.space,
                    programId: E(e.programId.toBuffer())
                })
                  , r = [{
                    pubkey: e.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: e.newAccountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }];
                return e.basePubkey.equals(e.fromPubkey) || r.push({
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }),
                new ea({
                    keys: r,
                    programId: this.programId,
                    data: t
                })
            }
            static createNonceAccount(e) {
                let t = new ec;
                "basePubkey"in e && "seed"in e ? t.add(eW.createAccountWithSeed({
                    fromPubkey: e.fromPubkey,
                    newAccountPubkey: e.noncePubkey,
                    basePubkey: e.basePubkey,
                    seed: e.seed,
                    lamports: e.lamports,
                    space: eE,
                    programId: this.programId
                })) : t.add(eW.createAccount({
                    fromPubkey: e.fromPubkey,
                    newAccountPubkey: e.noncePubkey,
                    lamports: e.lamports,
                    space: eE,
                    programId: this.programId
                }));
                let r = {
                    noncePubkey: e.noncePubkey,
                    authorizedPubkey: e.authorizedPubkey
                };
                return t.add(this.nonceInitialize(r)),
                t
            }
            static nonceInitialize(e) {
                let t = eR(eO.InitializeNonceAccount, {
                    authorized: E(e.authorizedPubkey.toBuffer())
                });
                return new ea({
                    keys: [{
                        pubkey: e.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ep,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: ey,
                        isSigner: !1,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: t
                })
            }
            static nonceAdvance(e) {
                let t = eR(eO.AdvanceNonceAccount);
                return new ea({
                    keys: [{
                        pubkey: e.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ep,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e.authorizedPubkey,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: t
                })
            }
            static nonceWithdraw(e) {
                let t = eR(eO.WithdrawNonceAccount, {
                    lamports: e.lamports
                });
                return new ea({
                    keys: [{
                        pubkey: e.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.toPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ep,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: ey,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e.authorizedPubkey,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: t
                })
            }
            static nonceAuthorize(e) {
                let t = eR(eO.AuthorizeNonceAccount, {
                    authorized: E(e.newAuthorizedPubkey.toBuffer())
                });
                return new ea({
                    keys: [{
                        pubkey: e.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.authorizedPubkey,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: t
                })
            }
            static allocate(e) {
                let t, r;
                return "basePubkey"in e ? (t = eR(eO.AllocateWithSeed, {
                    base: E(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    space: e.space,
                    programId: E(e.programId.toBuffer())
                }),
                r = [{
                    pubkey: e.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]) : (t = eR(eO.Allocate, {
                    space: e.space
                }),
                r = [{
                    pubkey: e.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]),
                new ea({
                    keys: r,
                    programId: this.programId,
                    data: t
                })
            }
        }
        eW.programId = new K("11111111111111111111111111111111");
        let eK = U - 300;
        class eN {
            constructor() {}
            static getMinNumSignatures(e) {
                return 2 * (Math.ceil(e / eN.chunkSize) + 1 + 1)
            }
            static async load(e, t, r, i, n) {
                {
                    let s = await e.getMinimumBalanceForRentExemption(n.length)
                      , o = await e.getAccountInfo(r.publicKey, "confirmed")
                      , a = null;
                    if (null !== o) {
                        if (o.executable)
                            return console.error("Program load failed, account is already executable"),
                            !1;
                        o.data.length !== n.length && (a = a || new ec).add(eW.allocate({
                            accountPubkey: r.publicKey,
                            space: n.length
                        })),
                        o.owner.equals(i) || (a = a || new ec).add(eW.assign({
                            accountPubkey: r.publicKey,
                            programId: i
                        })),
                        o.lamports < s && (a = a || new ec).add(eW.transfer({
                            fromPubkey: t.publicKey,
                            toPubkey: r.publicKey,
                            lamports: s - o.lamports
                        }))
                    } else
                        a = new ec().add(eW.createAccount({
                            fromPubkey: t.publicKey,
                            newAccountPubkey: r.publicKey,
                            lamports: s > 0 ? s : 1,
                            space: n.length,
                            programId: i
                        }));
                    null !== a && await e_(e, a, [t, r], {
                        commitment: "confirmed"
                    })
                }
                let s = y.n_([y.Jq("instruction"), y.Jq("offset"), y.Jq("bytesLength"), y.Jq("bytesLengthPadding"), y.A9(y.u8("byte"), y.cv(y.Jq(), -8), "bytes")])
                  , o = eN.chunkSize
                  , c = 0
                  , u = n
                  , l = [];
                for (; u.length > 0; ) {
                    let n = u.slice(0, o)
                      , d = a.Buffer.alloc(o + 16);
                    s.encode({
                        instruction: 0,
                        offset: c,
                        bytes: n,
                        bytesLength: 0,
                        bytesLengthPadding: 0
                    }, d);
                    let h = new ec().add({
                        keys: [{
                            pubkey: r.publicKey,
                            isSigner: !0,
                            isWritable: !0
                        }],
                        programId: i,
                        data: d
                    });
                    l.push(e_(e, h, [t, r], {
                        commitment: "confirmed"
                    })),
                    e._rpcEndpoint.includes("solana.com") && await eA(250),
                    c += o,
                    u = u.slice(o)
                }
                await Promise.all(l);
                {
                    let n = y.n_([y.Jq("instruction")])
                      , s = a.Buffer.alloc(n.span);
                    n.encode({
                        instruction: 1
                    }, s);
                    let o = new ec().add({
                        keys: [{
                            pubkey: r.publicKey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: ey,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        programId: i,
                        data: s
                    })
                      , c = "processed"
                      , u = await e.sendTransaction(o, [t, r], {
                        preflightCommitment: c
                    })
                      , {context: l, value: d} = await e.confirmTransaction({
                        signature: u,
                        lastValidBlockHeight: o.lastValidBlockHeight,
                        blockhash: o.recentBlockhash
                    }, c);
                    if (d.err)
                        throw Error(`Transaction ${u} failed (${JSON.stringify(d)})`);
                    for (; ; ) {
                        try {
                            if (await e.getSlot({
                                commitment: c
                            }) > l.slot)
                                break
                        } catch {}
                        await new Promise(e => setTimeout(e, Math.round(200)))
                    }
                }
                return !0
            }
        }
        eN.chunkSize = eK;
        let ez = new K("BPFLoader2111111111111111111111111111111111");
        class eU {
            static getMinNumSignatures(e) {
                return eN.getMinNumSignatures(e)
            }
            static load(e, t, r, i, n) {
                return eN.load(e, t, r, n, i)
            }
        }
        var eq = (n = function() {
            if (o)
                return s;
            o = 1;
            var e = Object.prototype.toString
              , t = Object.keys || function(e) {
                var t = [];
                for (var r in e)
                    t.push(r);
                return t
            }
            ;
            return s = function(r) {
                var i = function r(i, n) {
                    var s, o, a, c, u, l, d;
                    if (!0 === i)
                        return "true";
                    if (!1 === i)
                        return "false";
                    switch (typeof i) {
                    case "object":
                        if (null === i)
                            return null;
                        if (i.toJSON && "function" == typeof i.toJSON)
                            return r(i.toJSON(), n);
                        if ("[object Array]" === (d = e.call(i))) {
                            for (s = 0,
                            a = "[",
                            o = i.length - 1; s < o; s++)
                                a += r(i[s], !0) + ",";
                            return o > -1 && (a += r(i[s], !0)),
                            a + "]"
                        }
                        if ("[object Object]" !== d)
                            return JSON.stringify(i);
                        for (o = (c = t(i).sort()).length,
                        a = "",
                        s = 0; s < o; )
                            void 0 !== (l = r(i[u = c[s]], !1)) && (a && (a += ","),
                            a += JSON.stringify(u) + ":" + l),
                            s++;
                        return "{" + a + "}";
                    case "function":
                    case "undefined":
                        return n ? null : void 0;
                    case "string":
                        return JSON.stringify(i);
                    default:
                        return isFinite(i) ? i : null
                    }
                }(r, !1);
                if (void 0 !== i)
                    return "" + i
            }
        }()) && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        function eM(e) {
            let t = 0;
            for (; e > 1; )
                e /= 2,
                t++;
            return t
        }
        class eG {
            constructor(e, t, r, i, n) {
                this.slotsPerEpoch = void 0,
                this.leaderScheduleSlotOffset = void 0,
                this.warmup = void 0,
                this.firstNormalEpoch = void 0,
                this.firstNormalSlot = void 0,
                this.slotsPerEpoch = e,
                this.leaderScheduleSlotOffset = t,
                this.warmup = r,
                this.firstNormalEpoch = i,
                this.firstNormalSlot = n
            }
            getEpoch(e) {
                return this.getEpochAndSlotIndex(e)[0]
            }
            getEpochAndSlotIndex(e) {
                if (e < this.firstNormalSlot) {
                    var t;
                    let r = eM(0 === (t = e + 32 + 1) ? 1 : (t--,
                    t |= t >> 1,
                    t |= t >> 2,
                    t |= t >> 4,
                    t |= t >> 8,
                    t |= t >> 16,
                    (t |= t >> 32) + 1)) - eM(32) - 1
                      , i = this.getSlotsInEpoch(r);
                    return [r, e - (i - 32)]
                }
                {
                    let t = e - this.firstNormalSlot
                      , r = Math.floor(t / this.slotsPerEpoch);
                    return [this.firstNormalEpoch + r, t % this.slotsPerEpoch]
                }
            }
            getFirstSlotInEpoch(e) {
                return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * 32 : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
            }
            getLastSlotInEpoch(e) {
                return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
            }
            getSlotsInEpoch(e) {
                return e < this.firstNormalEpoch ? Math.pow(2, e + eM(32)) : this.slotsPerEpoch
            }
        }
        var ej = globalThis.fetch;
        class eJ extends S.Ey {
            constructor(e, t, r) {
                super(e => {
                    let r = (0,
                    S.XY)(e, {
                        autoconnect: !0,
                        max_reconnects: 5,
                        reconnect: !0,
                        reconnect_interval: 1e3,
                        ...t
                    });
                    return "socket"in r ? this.underlyingSocket = r.socket : this.underlyingSocket = r,
                    r
                }
                , e, t, r),
                this.underlyingSocket = void 0
            }
            call(...e) {
                let t = this.underlyingSocket?.readyState;
                return 1 === t ? super.call(...e) : Promise.reject(Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
            }
            notify(...e) {
                let t = this.underlyingSocket?.readyState;
                return 1 === t ? super.notify(...e) : Promise.reject(Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
            }
        }
        class eV {
            constructor(e) {
                this.key = void 0,
                this.state = void 0,
                this.key = e.key,
                this.state = e.state
            }
            isActive() {
                let e = BigInt("0xffffffffffffffff");
                return this.state.deactivationSlot === e
            }
            static deserialize(e) {
                let t = function(e, t) {
                    let r;
                    try {
                        r = e.layout.decode(t)
                    } catch (e) {
                        throw Error("invalid instruction; " + e)
                    }
                    if (r.typeIndex !== e.index)
                        throw Error(`invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`);
                    return r
                }(eD, e)
                  , r = e.length - 56;
                X(r >= 0, "lookup table is invalid"),
                X(r % 32 == 0, "lookup table is invalid");
                let {addresses: i} = y.n_([y.A9(D(), r / 32, "addresses")]).decode(e.slice(56));
                return {
                    deactivationSlot: t.deactivationSlot,
                    lastExtendedSlot: t.lastExtendedSlot,
                    lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
                    authority: 0 !== t.authority.length ? new K(t.authority[0]) : void 0,
                    addresses: i.map(e => new K(e))
                }
            }
        }
        let eD = {
            index: 1,
            layout: y.n_([y.Jq("typeIndex"), eC("deactivationSlot"), y._O("lastExtendedSlot"), y.u8("lastExtendedStartIndex"), y.u8(), y.A9(D(), y.cv(y.u8(), -1), "authority")])
        }
          , e$ = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i
          , eH = (0,
        f.oQ)((0,
        f.eE)(K), (0,
        f.Z_)(), e => new K(e))
          , eF = (0,
        f.bc)([(0,
        f.Z_)(), (0,
        f.i0)("base64")])
          , eZ = (0,
        f.oQ)((0,
        f.eE)(a.Buffer), eF, e => a.Buffer.from(e[0], "base64"))
          , eX = 3e4;
        function eY(e) {
            let t, r;
            if ("string" == typeof e)
                t = e;
            else if (e) {
                let {commitment: i, ...n} = e;
                t = i,
                r = n
            }
            return {
                commitment: t,
                config: r
            }
        }
        function eQ(e) {
            return e.map(e => "memcmp"in e ? {
                ...e,
                memcmp: {
                    ...e.memcmp,
                    encoding: e.memcmp.encoding ?? "base58"
                }
            } : e)
        }
        function e0(e) {
            return (0,
            f.G0)([(0,
            f.dt)({
                jsonrpc: (0,
                f.i0)("2.0"),
                id: (0,
                f.Z_)(),
                result: e
            }), (0,
            f.dt)({
                jsonrpc: (0,
                f.i0)("2.0"),
                id: (0,
                f.Z_)(),
                error: (0,
                f.dt)({
                    code: (0,
                    f._4)(),
                    message: (0,
                    f.Z_)(),
                    data: (0,
                    f.jt)((0,
                    f.Yj)())
                })
            })])
        }
        let e1 = e0((0,
        f._4)());
        function e2(e) {
            return (0,
            f.oQ)(e0(e), e1, t => "error"in t ? t : {
                ...t,
                result: (0,
                f.Ue)(t.result, e)
            })
        }
        function e8(e) {
            return e2((0,
            f.dt)({
                context: (0,
                f.dt)({
                    slot: (0,
                    f.Rx)()
                }),
                value: e
            }))
        }
        function e5(e) {
            return (0,
            f.dt)({
                context: (0,
                f.dt)({
                    slot: (0,
                    f.Rx)()
                }),
                value: e
            })
        }
        function e3(e, t) {
            return 0 === e ? new ei({
                header: t.header,
                staticAccountKeys: t.accountKeys.map(e => new K(e)),
                recentBlockhash: t.recentBlockhash,
                compiledInstructions: t.instructions.map(e => ({
                    programIdIndex: e.programIdIndex,
                    accountKeyIndexes: e.accounts,
                    data: h().decode(e.data)
                })),
                addressTableLookups: t.addressTableLookups
            }) : new er(t)
        }
        let e4 = (0,
        f.dt)({
            foundation: (0,
            f.Rx)(),
            foundationTerm: (0,
            f.Rx)(),
            initial: (0,
            f.Rx)(),
            taper: (0,
            f.Rx)(),
            terminal: (0,
            f.Rx)()
        })
          , e6 = e2((0,
        f.IX)((0,
        f.AG)((0,
        f.dt)({
            epoch: (0,
            f.Rx)(),
            effectiveSlot: (0,
            f.Rx)(),
            amount: (0,
            f.Rx)(),
            postBalance: (0,
            f.Rx)(),
            commission: (0,
            f.jt)((0,
            f.AG)((0,
            f.Rx)()))
        }))))
          , e9 = (0,
        f.IX)((0,
        f.dt)({
            slot: (0,
            f.Rx)(),
            prioritizationFee: (0,
            f.Rx)()
        }))
          , e7 = (0,
        f.dt)({
            total: (0,
            f.Rx)(),
            validator: (0,
            f.Rx)(),
            foundation: (0,
            f.Rx)(),
            epoch: (0,
            f.Rx)()
        })
          , te = (0,
        f.dt)({
            epoch: (0,
            f.Rx)(),
            slotIndex: (0,
            f.Rx)(),
            slotsInEpoch: (0,
            f.Rx)(),
            absoluteSlot: (0,
            f.Rx)(),
            blockHeight: (0,
            f.jt)((0,
            f.Rx)()),
            transactionCount: (0,
            f.jt)((0,
            f.Rx)())
        })
          , tt = (0,
        f.dt)({
            slotsPerEpoch: (0,
            f.Rx)(),
            leaderScheduleSlotOffset: (0,
            f.Rx)(),
            warmup: (0,
            f.O7)(),
            firstNormalEpoch: (0,
            f.Rx)(),
            firstNormalSlot: (0,
            f.Rx)()
        })
          , tr = (0,
        f.IM)((0,
        f.Z_)(), (0,
        f.IX)((0,
        f.Rx)()))
          , ti = (0,
        f.AG)((0,
        f.G0)([(0,
        f.dt)({}), (0,
        f.Z_)()]))
          , tn = (0,
        f.dt)({
            err: ti
        })
          , ts = (0,
        f.i0)("receivedSignature")
          , to = (0,
        f.dt)({
            "solana-core": (0,
            f.Z_)(),
            "feature-set": (0,
            f.jt)((0,
            f.Rx)())
        })
          , ta = (0,
        f.dt)({
            program: (0,
            f.Z_)(),
            programId: eH,
            parsed: (0,
            f._4)()
        })
          , tc = (0,
        f.dt)({
            programId: eH,
            accounts: (0,
            f.IX)(eH),
            data: (0,
            f.Z_)()
        })
          , tu = e8((0,
        f.dt)({
            err: (0,
            f.AG)((0,
            f.G0)([(0,
            f.dt)({}), (0,
            f.Z_)()])),
            logs: (0,
            f.AG)((0,
            f.IX)((0,
            f.Z_)())),
            accounts: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)((0,
            f.AG)((0,
            f.dt)({
                executable: (0,
                f.O7)(),
                owner: (0,
                f.Z_)(),
                lamports: (0,
                f.Rx)(),
                data: (0,
                f.IX)((0,
                f.Z_)()),
                rentEpoch: (0,
                f.jt)((0,
                f.Rx)())
            }))))),
            unitsConsumed: (0,
            f.jt)((0,
            f.Rx)()),
            returnData: (0,
            f.jt)((0,
            f.AG)((0,
            f.dt)({
                programId: (0,
                f.Z_)(),
                data: (0,
                f.bc)([(0,
                f.Z_)(), (0,
                f.i0)("base64")])
            }))),
            innerInstructions: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)((0,
            f.dt)({
                index: (0,
                f.Rx)(),
                instructions: (0,
                f.IX)((0,
                f.G0)([ta, tc]))
            }))))
        }))
          , tl = e8((0,
        f.dt)({
            byIdentity: (0,
            f.IM)((0,
            f.Z_)(), (0,
            f.IX)((0,
            f.Rx)())),
            range: (0,
            f.dt)({
                firstSlot: (0,
                f.Rx)(),
                lastSlot: (0,
                f.Rx)()
            })
        }))
          , td = e2(e4)
          , th = e2(e7)
          , tg = e2(e9)
          , tp = e2(te)
          , ty = e2(tt)
          , tm = e2(tr)
          , tf = e2((0,
        f.Rx)())
          , tb = e8((0,
        f.dt)({
            total: (0,
            f.Rx)(),
            circulating: (0,
            f.Rx)(),
            nonCirculating: (0,
            f.Rx)(),
            nonCirculatingAccounts: (0,
            f.IX)(eH)
        }))
          , tk = (0,
        f.dt)({
            amount: (0,
            f.Z_)(),
            uiAmount: (0,
            f.AG)((0,
            f.Rx)()),
            decimals: (0,
            f.Rx)(),
            uiAmountString: (0,
            f.jt)((0,
            f.Z_)())
        })
          , tS = e8((0,
        f.IX)((0,
        f.dt)({
            address: eH,
            amount: (0,
            f.Z_)(),
            uiAmount: (0,
            f.AG)((0,
            f.Rx)()),
            decimals: (0,
            f.Rx)(),
            uiAmountString: (0,
            f.jt)((0,
            f.Z_)())
        })))
          , tw = e8((0,
        f.IX)((0,
        f.dt)({
            pubkey: eH,
            account: (0,
            f.dt)({
                executable: (0,
                f.O7)(),
                owner: eH,
                lamports: (0,
                f.Rx)(),
                data: eZ,
                rentEpoch: (0,
                f.Rx)()
            })
        })))
          , tI = (0,
        f.dt)({
            program: (0,
            f.Z_)(),
            parsed: (0,
            f._4)(),
            space: (0,
            f.Rx)()
        })
          , t_ = e8((0,
        f.IX)((0,
        f.dt)({
            pubkey: eH,
            account: (0,
            f.dt)({
                executable: (0,
                f.O7)(),
                owner: eH,
                lamports: (0,
                f.Rx)(),
                data: tI,
                rentEpoch: (0,
                f.Rx)()
            })
        })))
          , tA = e8((0,
        f.IX)((0,
        f.dt)({
            lamports: (0,
            f.Rx)(),
            address: eH
        })))
          , tR = (0,
        f.dt)({
            executable: (0,
            f.O7)(),
            owner: eH,
            lamports: (0,
            f.Rx)(),
            data: eZ,
            rentEpoch: (0,
            f.Rx)()
        })
          , tx = (0,
        f.dt)({
            pubkey: eH,
            account: tR
        })
          , tP = (0,
        f.oQ)((0,
        f.G0)([(0,
        f.eE)(a.Buffer), tI]), (0,
        f.G0)([eF, tI]), e => Array.isArray(e) ? (0,
        f.Ue)(e, eZ) : e)
          , tv = (0,
        f.dt)({
            executable: (0,
            f.O7)(),
            owner: eH,
            lamports: (0,
            f.Rx)(),
            data: tP,
            rentEpoch: (0,
            f.Rx)()
        })
          , tE = (0,
        f.dt)({
            pubkey: eH,
            account: tv
        })
          , tB = (0,
        f.dt)({
            state: (0,
            f.G0)([(0,
            f.i0)("active"), (0,
            f.i0)("inactive"), (0,
            f.i0)("activating"), (0,
            f.i0)("deactivating")]),
            active: (0,
            f.Rx)(),
            inactive: (0,
            f.Rx)()
        })
          , tT = e2((0,
        f.IX)((0,
        f.dt)({
            signature: (0,
            f.Z_)(),
            slot: (0,
            f.Rx)(),
            err: ti,
            memo: (0,
            f.AG)((0,
            f.Z_)()),
            blockTime: (0,
            f.jt)((0,
            f.AG)((0,
            f.Rx)()))
        })))
          , tC = e2((0,
        f.IX)((0,
        f.dt)({
            signature: (0,
            f.Z_)(),
            slot: (0,
            f.Rx)(),
            err: ti,
            memo: (0,
            f.AG)((0,
            f.Z_)()),
            blockTime: (0,
            f.jt)((0,
            f.AG)((0,
            f.Rx)()))
        })))
          , tL = (0,
        f.dt)({
            subscription: (0,
            f.Rx)(),
            result: e5(tR)
        })
          , tO = (0,
        f.dt)({
            pubkey: eH,
            account: tR
        })
          , tW = (0,
        f.dt)({
            subscription: (0,
            f.Rx)(),
            result: e5(tO)
        })
          , tK = (0,
        f.dt)({
            parent: (0,
            f.Rx)(),
            slot: (0,
            f.Rx)(),
            root: (0,
            f.Rx)()
        })
          , tN = (0,
        f.dt)({
            subscription: (0,
            f.Rx)(),
            result: tK
        })
          , tz = (0,
        f.G0)([(0,
        f.dt)({
            type: (0,
            f.G0)([(0,
            f.i0)("firstShredReceived"), (0,
            f.i0)("completed"), (0,
            f.i0)("optimisticConfirmation"), (0,
            f.i0)("root")]),
            slot: (0,
            f.Rx)(),
            timestamp: (0,
            f.Rx)()
        }), (0,
        f.dt)({
            type: (0,
            f.i0)("createdBank"),
            parent: (0,
            f.Rx)(),
            slot: (0,
            f.Rx)(),
            timestamp: (0,
            f.Rx)()
        }), (0,
        f.dt)({
            type: (0,
            f.i0)("frozen"),
            slot: (0,
            f.Rx)(),
            timestamp: (0,
            f.Rx)(),
            stats: (0,
            f.dt)({
                numTransactionEntries: (0,
                f.Rx)(),
                numSuccessfulTransactions: (0,
                f.Rx)(),
                numFailedTransactions: (0,
                f.Rx)(),
                maxTransactionsPerEntry: (0,
                f.Rx)()
            })
        }), (0,
        f.dt)({
            type: (0,
            f.i0)("dead"),
            slot: (0,
            f.Rx)(),
            timestamp: (0,
            f.Rx)(),
            err: (0,
            f.Z_)()
        })])
          , tU = (0,
        f.dt)({
            subscription: (0,
            f.Rx)(),
            result: tz
        })
          , tq = (0,
        f.dt)({
            subscription: (0,
            f.Rx)(),
            result: e5((0,
            f.G0)([tn, ts]))
        })
          , tM = (0,
        f.dt)({
            subscription: (0,
            f.Rx)(),
            result: (0,
            f.Rx)()
        })
          , tG = (0,
        f.dt)({
            pubkey: (0,
            f.Z_)(),
            gossip: (0,
            f.AG)((0,
            f.Z_)()),
            tpu: (0,
            f.AG)((0,
            f.Z_)()),
            rpc: (0,
            f.AG)((0,
            f.Z_)()),
            version: (0,
            f.AG)((0,
            f.Z_)())
        })
          , tj = (0,
        f.dt)({
            votePubkey: (0,
            f.Z_)(),
            nodePubkey: (0,
            f.Z_)(),
            activatedStake: (0,
            f.Rx)(),
            epochVoteAccount: (0,
            f.O7)(),
            epochCredits: (0,
            f.IX)((0,
            f.bc)([(0,
            f.Rx)(), (0,
            f.Rx)(), (0,
            f.Rx)()])),
            commission: (0,
            f.Rx)(),
            lastVote: (0,
            f.Rx)(),
            rootSlot: (0,
            f.AG)((0,
            f.Rx)())
        })
          , tJ = e2((0,
        f.dt)({
            current: (0,
            f.IX)(tj),
            delinquent: (0,
            f.IX)(tj)
        }))
          , tV = (0,
        f.G0)([(0,
        f.i0)("processed"), (0,
        f.i0)("confirmed"), (0,
        f.i0)("finalized")])
          , tD = (0,
        f.dt)({
            slot: (0,
            f.Rx)(),
            confirmations: (0,
            f.AG)((0,
            f.Rx)()),
            err: ti,
            confirmationStatus: (0,
            f.jt)(tV)
        })
          , t$ = e8((0,
        f.IX)((0,
        f.AG)(tD)))
          , tH = e2((0,
        f.Rx)())
          , tF = (0,
        f.dt)({
            accountKey: eH,
            writableIndexes: (0,
            f.IX)((0,
            f.Rx)()),
            readonlyIndexes: (0,
            f.IX)((0,
            f.Rx)())
        })
          , tZ = (0,
        f.dt)({
            signatures: (0,
            f.IX)((0,
            f.Z_)()),
            message: (0,
            f.dt)({
                accountKeys: (0,
                f.IX)((0,
                f.Z_)()),
                header: (0,
                f.dt)({
                    numRequiredSignatures: (0,
                    f.Rx)(),
                    numReadonlySignedAccounts: (0,
                    f.Rx)(),
                    numReadonlyUnsignedAccounts: (0,
                    f.Rx)()
                }),
                instructions: (0,
                f.IX)((0,
                f.dt)({
                    accounts: (0,
                    f.IX)((0,
                    f.Rx)()),
                    data: (0,
                    f.Z_)(),
                    programIdIndex: (0,
                    f.Rx)()
                })),
                recentBlockhash: (0,
                f.Z_)(),
                addressTableLookups: (0,
                f.jt)((0,
                f.IX)(tF))
            })
        })
          , tX = (0,
        f.dt)({
            pubkey: eH,
            signer: (0,
            f.O7)(),
            writable: (0,
            f.O7)(),
            source: (0,
            f.jt)((0,
            f.G0)([(0,
            f.i0)("transaction"), (0,
            f.i0)("lookupTable")]))
        })
          , tY = (0,
        f.dt)({
            accountKeys: (0,
            f.IX)(tX),
            signatures: (0,
            f.IX)((0,
            f.Z_)())
        })
          , tQ = (0,
        f.dt)({
            parsed: (0,
            f._4)(),
            program: (0,
            f.Z_)(),
            programId: eH
        })
          , t0 = (0,
        f.dt)({
            accounts: (0,
            f.IX)(eH),
            data: (0,
            f.Z_)(),
            programId: eH
        })
          , t1 = (0,
        f.G0)([t0, tQ])
          , t2 = (0,
        f.G0)([(0,
        f.dt)({
            parsed: (0,
            f._4)(),
            program: (0,
            f.Z_)(),
            programId: (0,
            f.Z_)()
        }), (0,
        f.dt)({
            accounts: (0,
            f.IX)((0,
            f.Z_)()),
            data: (0,
            f.Z_)(),
            programId: (0,
            f.Z_)()
        })])
          , t8 = (0,
        f.oQ)(t1, t2, e => "accounts"in e ? (0,
        f.Ue)(e, t0) : (0,
        f.Ue)(e, tQ))
          , t5 = (0,
        f.dt)({
            signatures: (0,
            f.IX)((0,
            f.Z_)()),
            message: (0,
            f.dt)({
                accountKeys: (0,
                f.IX)(tX),
                instructions: (0,
                f.IX)(t8),
                recentBlockhash: (0,
                f.Z_)(),
                addressTableLookups: (0,
                f.jt)((0,
                f.AG)((0,
                f.IX)(tF)))
            })
        })
          , t3 = (0,
        f.dt)({
            accountIndex: (0,
            f.Rx)(),
            mint: (0,
            f.Z_)(),
            owner: (0,
            f.jt)((0,
            f.Z_)()),
            uiTokenAmount: tk
        })
          , t4 = (0,
        f.dt)({
            writable: (0,
            f.IX)(eH),
            readonly: (0,
            f.IX)(eH)
        })
          , t6 = (0,
        f.dt)({
            err: ti,
            fee: (0,
            f.Rx)(),
            innerInstructions: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)((0,
            f.dt)({
                index: (0,
                f.Rx)(),
                instructions: (0,
                f.IX)((0,
                f.dt)({
                    accounts: (0,
                    f.IX)((0,
                    f.Rx)()),
                    data: (0,
                    f.Z_)(),
                    programIdIndex: (0,
                    f.Rx)()
                }))
            })))),
            preBalances: (0,
            f.IX)((0,
            f.Rx)()),
            postBalances: (0,
            f.IX)((0,
            f.Rx)()),
            logMessages: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)((0,
            f.Z_)()))),
            preTokenBalances: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)(t3))),
            postTokenBalances: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)(t3))),
            loadedAddresses: (0,
            f.jt)(t4),
            computeUnitsConsumed: (0,
            f.jt)((0,
            f.Rx)())
        })
          , t9 = (0,
        f.dt)({
            err: ti,
            fee: (0,
            f.Rx)(),
            innerInstructions: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)((0,
            f.dt)({
                index: (0,
                f.Rx)(),
                instructions: (0,
                f.IX)(t8)
            })))),
            preBalances: (0,
            f.IX)((0,
            f.Rx)()),
            postBalances: (0,
            f.IX)((0,
            f.Rx)()),
            logMessages: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)((0,
            f.Z_)()))),
            preTokenBalances: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)(t3))),
            postTokenBalances: (0,
            f.jt)((0,
            f.AG)((0,
            f.IX)(t3))),
            loadedAddresses: (0,
            f.jt)(t4),
            computeUnitsConsumed: (0,
            f.jt)((0,
            f.Rx)())
        })
          , t7 = (0,
        f.G0)([(0,
        f.i0)(0), (0,
        f.i0)("legacy")])
          , re = (0,
        f.dt)({
            pubkey: (0,
            f.Z_)(),
            lamports: (0,
            f.Rx)(),
            postBalance: (0,
            f.AG)((0,
            f.Rx)()),
            rewardType: (0,
            f.AG)((0,
            f.Z_)()),
            commission: (0,
            f.jt)((0,
            f.AG)((0,
            f.Rx)()))
        })
          , rt = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            transactions: (0,
            f.IX)((0,
            f.dt)({
                transaction: tZ,
                meta: (0,
                f.AG)(t6),
                version: (0,
                f.jt)(t7)
            })),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)()),
            blockHeight: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , rr = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)()),
            blockHeight: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , ri = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            transactions: (0,
            f.IX)((0,
            f.dt)({
                transaction: tY,
                meta: (0,
                f.AG)(t6),
                version: (0,
                f.jt)(t7)
            })),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)()),
            blockHeight: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , rn = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            transactions: (0,
            f.IX)((0,
            f.dt)({
                transaction: t5,
                meta: (0,
                f.AG)(t9),
                version: (0,
                f.jt)(t7)
            })),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)()),
            blockHeight: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , rs = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            transactions: (0,
            f.IX)((0,
            f.dt)({
                transaction: tY,
                meta: (0,
                f.AG)(t9),
                version: (0,
                f.jt)(t7)
            })),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)()),
            blockHeight: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , ro = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)()),
            blockHeight: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , ra = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            transactions: (0,
            f.IX)((0,
            f.dt)({
                transaction: tZ,
                meta: (0,
                f.AG)(t6)
            })),
            rewards: (0,
            f.jt)((0,
            f.IX)(re)),
            blockTime: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , rc = e2((0,
        f.AG)((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            previousBlockhash: (0,
            f.Z_)(),
            parentSlot: (0,
            f.Rx)(),
            signatures: (0,
            f.IX)((0,
            f.Z_)()),
            blockTime: (0,
            f.AG)((0,
            f.Rx)())
        })))
          , ru = e2((0,
        f.AG)((0,
        f.dt)({
            slot: (0,
            f.Rx)(),
            meta: (0,
            f.AG)(t6),
            blockTime: (0,
            f.jt)((0,
            f.AG)((0,
            f.Rx)())),
            transaction: tZ,
            version: (0,
            f.jt)(t7)
        })))
          , rl = e2((0,
        f.AG)((0,
        f.dt)({
            slot: (0,
            f.Rx)(),
            transaction: t5,
            meta: (0,
            f.AG)(t9),
            blockTime: (0,
            f.jt)((0,
            f.AG)((0,
            f.Rx)())),
            version: (0,
            f.jt)(t7)
        })))
          , rd = e8((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            feeCalculator: (0,
            f.dt)({
                lamportsPerSignature: (0,
                f.Rx)()
            })
        }))
          , rh = e8((0,
        f.dt)({
            blockhash: (0,
            f.Z_)(),
            lastValidBlockHeight: (0,
            f.Rx)()
        }))
          , rg = e8((0,
        f.O7)())
          , rp = (0,
        f.dt)({
            slot: (0,
            f.Rx)(),
            numTransactions: (0,
            f.Rx)(),
            numSlots: (0,
            f.Rx)(),
            samplePeriodSecs: (0,
            f.Rx)()
        })
          , ry = e2((0,
        f.IX)(rp))
          , rm = e8((0,
        f.AG)((0,
        f.dt)({
            feeCalculator: (0,
            f.dt)({
                lamportsPerSignature: (0,
                f.Rx)()
            })
        })))
          , rf = e2((0,
        f.Z_)())
          , rb = e2((0,
        f.Z_)())
          , rk = (0,
        f.dt)({
            err: ti,
            logs: (0,
            f.IX)((0,
            f.Z_)()),
            signature: (0,
            f.Z_)()
        })
          , rS = (0,
        f.dt)({
            result: e5(rk),
            subscription: (0,
            f.Rx)()
        })
          , rw = {
            "solana-client": "js/1.0.0-maintenance"
        };
        class rI {
            constructor(e, t) {
                var r, i;
                let n, s, o, a, c, u;
                this._commitment = void 0,
                this._confirmTransactionInitialTimeout = void 0,
                this._rpcEndpoint = void 0,
                this._rpcWsEndpoint = void 0,
                this._rpcClient = void 0,
                this._rpcRequest = void 0,
                this._rpcBatchRequest = void 0,
                this._rpcWebSocket = void 0,
                this._rpcWebSocketConnected = !1,
                this._rpcWebSocketHeartbeat = null,
                this._rpcWebSocketIdleTimeout = null,
                this._rpcWebSocketGeneration = 0,
                this._disableBlockhashCaching = !1,
                this._pollingBlockhash = !1,
                this._blockhashInfo = {
                    latestBlockhash: null,
                    lastFetch: 0,
                    transactionSignatures: [],
                    simulatedSignatures: []
                },
                this._nextClientSubscriptionId = 0,
                this._subscriptionDisposeFunctionsByClientSubscriptionId = {},
                this._subscriptionHashByClientSubscriptionId = {},
                this._subscriptionStateChangeCallbacksByHash = {},
                this._subscriptionCallbacksByServerSubscriptionId = {},
                this._subscriptionsByHash = {},
                this._subscriptionsAutoDisposedByRpc = new Set,
                this.getBlockHeight = ( () => {
                    let e = {};
                    return async t => {
                        let {commitment: r, config: i} = eY(t)
                          , n = this._buildArgs([], r, void 0, i)
                          , s = eq(n);
                        return e[s] = e[s] ?? (async () => {
                            try {
                                let e = await this._rpcRequest("getBlockHeight", n)
                                  , t = (0,
                                f.Ue)(e, e2((0,
                                f.Rx)()));
                                if ("error"in t)
                                    throw new eI(t.error,"failed to get block height information");
                                return t.result
                            } finally {
                                delete e[s]
                            }
                        }
                        )(),
                        await e[s]
                    }
                }
                )(),
                t && "string" == typeof t ? this._commitment = t : t && (this._commitment = t.commitment,
                this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout,
                n = t.wsEndpoint,
                s = t.httpHeaders,
                o = t.fetch,
                a = t.fetchMiddleware,
                c = t.disableRetryOnRateLimit,
                u = t.httpAgent),
                this._rpcEndpoint = function(e) {
                    if (!1 === /^https?:/.test(e))
                        throw TypeError("Endpoint URL must start with `http:` or `https:`.");
                    return e
                }(e),
                this._rpcWsEndpoint = n || function(e) {
                    let t = e.match(e$);
                    if (null == t)
                        throw TypeError(`Failed to validate endpoint URL \`${e}\``);
                    let[r,i,n,s] = t
                      , o = e.startsWith("https:") ? "wss:" : "ws:"
                      , a = null == n ? null : parseInt(n.slice(1), 10)
                      , c = null == a ? "" : `:${a + 1}`;
                    return `${o}//${i}${c}${s}`
                }(e),
                this._rpcClient = function(e, t, r, i, n, s) {
                    let o, a;
                    let c = r || ej;
                    return null != s && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."),
                    i && (a = async (e, t) => {
                        let r = await new Promise( (r, n) => {
                            try {
                                i(e, t, (e, t) => r([e, t]))
                            } catch (e) {
                                n(e)
                            }
                        }
                        );
                        return await c(...r)
                    }
                    ),
                    new (k())(async (r, i) => {
                        let s = {
                            method: "POST",
                            body: r,
                            agent: o,
                            headers: Object.assign({
                                "Content-Type": "application/json"
                            }, t || {}, rw)
                        };
                        try {
                            let t, r = 5, o = 500;
                            for (; t = a ? await a(e, s) : await c(e, s),
                            429 === t.status && !0 !== n && (r -= 1,
                            0 !== r); )
                                console.error(`Server responded with ${t.status} ${t.statusText}.  Retrying after ${o}ms delay...`),
                                await eA(o),
                                o *= 2;
                            let u = await t.text();
                            t.ok ? i(null, u) : i(Error(`${t.status} ${t.statusText}: ${u}`))
                        } catch (e) {
                            e instanceof Error && i(e)
                        }
                    }
                    ,{})
                }(e, s, o, a, c, u),
                this._rpcRequest = (r = this._rpcClient,
                (e, t) => new Promise( (i, n) => {
                    r.request(e, t, (e, t) => {
                        if (e) {
                            n(e);
                            return
                        }
                        i(t)
                    }
                    )
                }
                )),
                this._rpcBatchRequest = (i = this._rpcClient,
                e => new Promise( (t, r) => {
                    0 === e.length && t([]);
                    let n = e.map(e => i.request(e.methodName, e.args));
                    i.request(n, (e, i) => {
                        if (e) {
                            r(e);
                            return
                        }
                        t(i)
                    }
                    )
                }
                )),
                this._rpcWebSocket = new eJ(this._rpcWsEndpoint,{
                    autoconnect: !1,
                    max_reconnects: 1 / 0
                }),
                this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
                this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
                this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
                this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)),
                this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)),
                this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)),
                this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)),
                this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)),
                this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)),
                this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
            }
            get commitment() {
                return this._commitment
            }
            get rpcEndpoint() {
                return this._rpcEndpoint
            }
            async getBalanceAndContext(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgs([e.toBase58()], r, void 0, i)
                  , s = await this._rpcRequest("getBalance", n)
                  , o = (0,
                f.Ue)(s, e8((0,
                f.Rx)()));
                if ("error"in o)
                    throw new eI(o.error,`failed to get balance for ${e.toBase58()}`);
                return o.result
            }
            async getBalance(e, t) {
                return await this.getBalanceAndContext(e, t).then(e => e.value).catch(t => {
                    throw Error("failed to get balance of account " + e.toBase58() + ": " + t)
                }
                )
            }
            async getBlockTime(e) {
                let t = await this._rpcRequest("getBlockTime", [e])
                  , r = (0,
                f.Ue)(t, e2((0,
                f.AG)((0,
                f.Rx)())));
                if ("error"in r)
                    throw new eI(r.error,`failed to get block time for slot ${e}`);
                return r.result
            }
            async getMinimumLedgerSlot() {
                let e = await this._rpcRequest("minimumLedgerSlot", [])
                  , t = (0,
                f.Ue)(e, e2((0,
                f.Rx)()));
                if ("error"in t)
                    throw new eI(t.error,"failed to get minimum ledger slot");
                return t.result
            }
            async getFirstAvailableBlock() {
                let e = await this._rpcRequest("getFirstAvailableBlock", [])
                  , t = (0,
                f.Ue)(e, tf);
                if ("error"in t)
                    throw new eI(t.error,"failed to get first available block");
                return t.result
            }
            async getSupply(e) {
                let t = {};
                t = "string" == typeof e ? {
                    commitment: e
                } : e ? {
                    ...e,
                    commitment: e && e.commitment || this.commitment
                } : {
                    commitment: this.commitment
                };
                let r = await this._rpcRequest("getSupply", [t])
                  , i = (0,
                f.Ue)(r, tb);
                if ("error"in i)
                    throw new eI(i.error,"failed to get supply");
                return i.result
            }
            async getTokenSupply(e, t) {
                let r = this._buildArgs([e.toBase58()], t)
                  , i = await this._rpcRequest("getTokenSupply", r)
                  , n = (0,
                f.Ue)(i, e8(tk));
                if ("error"in n)
                    throw new eI(n.error,"failed to get token supply");
                return n.result
            }
            async getTokenAccountBalance(e, t) {
                let r = this._buildArgs([e.toBase58()], t)
                  , i = await this._rpcRequest("getTokenAccountBalance", r)
                  , n = (0,
                f.Ue)(i, e8(tk));
                if ("error"in n)
                    throw new eI(n.error,"failed to get token account balance");
                return n.result
            }
            async getTokenAccountsByOwner(e, t, r) {
                let {commitment: i, config: n} = eY(r)
                  , s = [e.toBase58()];
                "mint"in t ? s.push({
                    mint: t.mint.toBase58()
                }) : s.push({
                    programId: t.programId.toBase58()
                });
                let o = this._buildArgs(s, i, "base64", n)
                  , a = await this._rpcRequest("getTokenAccountsByOwner", o)
                  , c = (0,
                f.Ue)(a, tw);
                if ("error"in c)
                    throw new eI(c.error,`failed to get token accounts owned by account ${e.toBase58()}`);
                return c.result
            }
            async getParsedTokenAccountsByOwner(e, t, r) {
                let i = [e.toBase58()];
                "mint"in t ? i.push({
                    mint: t.mint.toBase58()
                }) : i.push({
                    programId: t.programId.toBase58()
                });
                let n = this._buildArgs(i, r, "jsonParsed")
                  , s = await this._rpcRequest("getTokenAccountsByOwner", n)
                  , o = (0,
                f.Ue)(s, t_);
                if ("error"in o)
                    throw new eI(o.error,`failed to get token accounts owned by account ${e.toBase58()}`);
                return o.result
            }
            async getLargestAccounts(e) {
                let t = {
                    ...e,
                    commitment: e && e.commitment || this.commitment
                }
                  , r = t.filter || t.commitment ? [t] : []
                  , i = await this._rpcRequest("getLargestAccounts", r)
                  , n = (0,
                f.Ue)(i, tA);
                if ("error"in n)
                    throw new eI(n.error,"failed to get largest accounts");
                return n.result
            }
            async getTokenLargestAccounts(e, t) {
                let r = this._buildArgs([e.toBase58()], t)
                  , i = await this._rpcRequest("getTokenLargestAccounts", r)
                  , n = (0,
                f.Ue)(i, tS);
                if ("error"in n)
                    throw new eI(n.error,"failed to get token largest accounts");
                return n.result
            }
            async getAccountInfoAndContext(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgs([e.toBase58()], r, "base64", i)
                  , s = await this._rpcRequest("getAccountInfo", n)
                  , o = (0,
                f.Ue)(s, e8((0,
                f.AG)(tR)));
                if ("error"in o)
                    throw new eI(o.error,`failed to get info about account ${e.toBase58()}`);
                return o.result
            }
            async getParsedAccountInfo(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgs([e.toBase58()], r, "jsonParsed", i)
                  , s = await this._rpcRequest("getAccountInfo", n)
                  , o = (0,
                f.Ue)(s, e8((0,
                f.AG)(tv)));
                if ("error"in o)
                    throw new eI(o.error,`failed to get info about account ${e.toBase58()}`);
                return o.result
            }
            async getAccountInfo(e, t) {
                try {
                    return (await this.getAccountInfoAndContext(e, t)).value
                } catch (t) {
                    throw Error("failed to get info about account " + e.toBase58() + ": " + t)
                }
            }
            async getMultipleParsedAccounts(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = e.map(e => e.toBase58())
                  , s = this._buildArgs([n], r, "jsonParsed", i)
                  , o = await this._rpcRequest("getMultipleAccounts", s)
                  , a = (0,
                f.Ue)(o, e8((0,
                f.IX)((0,
                f.AG)(tv))));
                if ("error"in a)
                    throw new eI(a.error,`failed to get info for accounts ${n}`);
                return a.result
            }
            async getMultipleAccountsInfoAndContext(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = e.map(e => e.toBase58())
                  , s = this._buildArgs([n], r, "base64", i)
                  , o = await this._rpcRequest("getMultipleAccounts", s)
                  , a = (0,
                f.Ue)(o, e8((0,
                f.IX)((0,
                f.AG)(tR))));
                if ("error"in a)
                    throw new eI(a.error,`failed to get info for accounts ${n}`);
                return a.result
            }
            async getMultipleAccountsInfo(e, t) {
                return (await this.getMultipleAccountsInfoAndContext(e, t)).value
            }
            async getStakeActivation(e, t, r) {
                let {commitment: i, config: n} = eY(t)
                  , s = this._buildArgs([e.toBase58()], i, void 0, {
                    ...n,
                    epoch: null != r ? r : n?.epoch
                })
                  , o = await this._rpcRequest("getStakeActivation", s)
                  , a = (0,
                f.Ue)(o, e2(tB));
                if ("error"in a)
                    throw new eI(a.error,`failed to get Stake Activation ${e.toBase58()}`);
                return a.result
            }
            async getProgramAccounts(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , {encoding: n, ...s} = i || {}
                  , o = this._buildArgs([e.toBase58()], r, n || "base64", {
                    ...s,
                    ...s.filters ? {
                        filters: eQ(s.filters)
                    } : null
                })
                  , a = await this._rpcRequest("getProgramAccounts", o)
                  , c = (0,
                f.IX)(tx)
                  , u = !0 === s.withContext ? (0,
                f.Ue)(a, e8(c)) : (0,
                f.Ue)(a, e2(c));
                if ("error"in u)
                    throw new eI(u.error,`failed to get accounts owned by program ${e.toBase58()}`);
                return u.result
            }
            async getParsedProgramAccounts(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgs([e.toBase58()], r, "jsonParsed", i)
                  , s = await this._rpcRequest("getProgramAccounts", n)
                  , o = (0,
                f.Ue)(s, e2((0,
                f.IX)(tE)));
                if ("error"in o)
                    throw new eI(o.error,`failed to get accounts owned by program ${e.toBase58()}`);
                return o.result
            }
            async confirmTransaction(e, t) {
                let r, i;
                if ("string" == typeof e)
                    r = e;
                else {
                    if (e.abortSignal?.aborted)
                        return Promise.reject(e.abortSignal.reason);
                    r = e.signature
                }
                try {
                    i = h().decode(r)
                } catch (e) {
                    throw Error("signature must be base58 encoded: " + r)
                }
                return (X(64 === i.length, "signature has invalid length"),
                "string" == typeof e) ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: t || this.commitment,
                    signature: r
                }) : "lastValidBlockHeight"in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: t || this.commitment,
                    strategy: e
                }) : await this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e
                })
            }
            getCancellationPromise(e) {
                return new Promise( (t, r) => {
                    null != e && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
                        r(e.reason)
                    }
                    ))
                }
                )
            }
            getTransactionConfirmationPromise({commitment: e, signature: t}) {
                let r, i;
                let n = !1;
                return {
                    abortConfirmation: () => {
                        i && (i(),
                        i = void 0),
                        null != r && (this.removeSignatureListener(r),
                        r = void 0)
                    }
                    ,
                    confirmationPromise: new Promise( (s, o) => {
                        try {
                            r = this.onSignature(t, (e, t) => {
                                r = void 0,
                                s({
                                    __type: es.PROCESSED,
                                    response: {
                                        context: t,
                                        value: e
                                    }
                                })
                            }
                            , e);
                            let a = new Promise(e => {
                                null == r ? e() : i = this._onSubscriptionStateChange(r, t => {
                                    "subscribed" === t && e()
                                }
                                )
                            }
                            );
                            (async () => {
                                if (await a,
                                n)
                                    return;
                                let r = await this.getSignatureStatus(t);
                                if (n || null == r)
                                    return;
                                let {context: i, value: c} = r;
                                if (null != c) {
                                    if (c?.err)
                                        o(c.err);
                                    else {
                                        switch (e) {
                                        case "confirmed":
                                        case "single":
                                        case "singleGossip":
                                            if ("processed" === c.confirmationStatus)
                                                return;
                                            break;
                                        case "finalized":
                                        case "max":
                                        case "root":
                                            if ("processed" === c.confirmationStatus || "confirmed" === c.confirmationStatus)
                                                return
                                        }
                                        n = !0,
                                        s({
                                            __type: es.PROCESSED,
                                            response: {
                                                context: i,
                                                value: c
                                            }
                                        })
                                    }
                                }
                            }
                            )()
                        } catch (e) {
                            o(e)
                        }
                    }
                    )
                }
            }
            async confirmTransactionUsingBlockHeightExceedanceStrategy({commitment: e, strategy: {abortSignal: t, lastValidBlockHeight: r, signature: i}}) {
                let n, s = !1, o = new Promise(t => {
                    let i = async () => {
                        try {
                            return await this.getBlockHeight(e)
                        } catch (e) {
                            return -1
                        }
                    }
                    ;
                    (async () => {
                        let e = await i();
                        if (!s) {
                            for (; e <= r; )
                                if (await eA(1e3),
                                s || (e = await i(),
                                s))
                                    return;
                            t({
                                __type: es.BLOCKHEIGHT_EXCEEDED
                            })
                        }
                    }
                    )()
                }
                ), {abortConfirmation: a, confirmationPromise: c} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: i
                }), u = this.getCancellationPromise(t);
                try {
                    let e = await Promise.race([u, c, o]);
                    if (e.__type === es.PROCESSED)
                        n = e.response;
                    else
                        throw new G(i)
                } finally {
                    s = !0,
                    a()
                }
                return n
            }
            async confirmTransactionUsingDurableNonceStrategy({commitment: e, strategy: {abortSignal: t, minContextSlot: r, nonceAccountPubkey: i, nonceValue: n, signature: s}}) {
                let o, a = !1, c = new Promise(t => {
                    let s = n
                      , o = null
                      , c = async () => {
                        try {
                            let {context: t, value: n} = await this.getNonceAndContext(i, {
                                commitment: e,
                                minContextSlot: r
                            });
                            return o = t.slot,
                            n?.nonce
                        } catch (e) {
                            return s
                        }
                    }
                    ;
                    (async () => {
                        if (s = await c(),
                        !a)
                            for (; ; ) {
                                if (n !== s) {
                                    t({
                                        __type: es.NONCE_INVALID,
                                        slotInWhichNonceDidAdvance: o
                                    });
                                    return
                                }
                                if (await eA(2e3),
                                a || (s = await c(),
                                a))
                                    return
                            }
                    }
                    )()
                }
                ), {abortConfirmation: u, confirmationPromise: l} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: s
                }), d = this.getCancellationPromise(t);
                try {
                    let t = await Promise.race([d, l, c]);
                    if (t.__type === es.PROCESSED)
                        o = t.response;
                    else {
                        let i;
                        for (; ; ) {
                            let e = await this.getSignatureStatus(s);
                            if (null == e)
                                break;
                            if (e.context.slot < (t.slotInWhichNonceDidAdvance ?? r)) {
                                await eA(400);
                                continue
                            }
                            i = e;
                            break
                        }
                        if (i?.value) {
                            let t = e || "finalized"
                              , {confirmationStatus: r} = i.value;
                            switch (t) {
                            case "processed":
                            case "recent":
                                if ("processed" !== r && "confirmed" !== r && "finalized" !== r)
                                    throw new J(s);
                                break;
                            case "confirmed":
                            case "single":
                            case "singleGossip":
                                if ("confirmed" !== r && "finalized" !== r)
                                    throw new J(s);
                                break;
                            case "finalized":
                            case "max":
                            case "root":
                                if ("finalized" !== r)
                                    throw new J(s)
                            }
                            o = {
                                context: i.context,
                                value: {
                                    err: i.value.err
                                }
                            }
                        } else
                            throw new J(s)
                    }
                } finally {
                    a = !0,
                    u()
                }
                return o
            }
            async confirmTransactionUsingLegacyTimeoutStrategy({commitment: e, signature: t}) {
                let r, i;
                let n = new Promise(t => {
                    let i = this._confirmTransactionInitialTimeout || 6e4;
                    switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip":
                        i = this._confirmTransactionInitialTimeout || 3e4
                    }
                    r = setTimeout( () => t({
                        __type: es.TIMED_OUT,
                        timeoutMs: i
                    }), i)
                }
                )
                  , {abortConfirmation: s, confirmationPromise: o} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t
                });
                try {
                    let e = await Promise.race([o, n]);
                    if (e.__type === es.PROCESSED)
                        i = e.response;
                    else
                        throw new j(t,e.timeoutMs / 1e3)
                } finally {
                    clearTimeout(r),
                    s()
                }
                return i
            }
            async getClusterNodes() {
                let e = await this._rpcRequest("getClusterNodes", [])
                  , t = (0,
                f.Ue)(e, e2((0,
                f.IX)(tG)));
                if ("error"in t)
                    throw new eI(t.error,"failed to get cluster nodes");
                return t.result
            }
            async getVoteAccounts(e) {
                let t = this._buildArgs([], e)
                  , r = await this._rpcRequest("getVoteAccounts", t)
                  , i = (0,
                f.Ue)(r, tJ);
                if ("error"in i)
                    throw new eI(i.error,"failed to get vote accounts");
                return i.result
            }
            async getSlot(e) {
                let {commitment: t, config: r} = eY(e)
                  , i = this._buildArgs([], t, void 0, r)
                  , n = await this._rpcRequest("getSlot", i)
                  , s = (0,
                f.Ue)(n, e2((0,
                f.Rx)()));
                if ("error"in s)
                    throw new eI(s.error,"failed to get slot");
                return s.result
            }
            async getSlotLeader(e) {
                let {commitment: t, config: r} = eY(e)
                  , i = this._buildArgs([], t, void 0, r)
                  , n = await this._rpcRequest("getSlotLeader", i)
                  , s = (0,
                f.Ue)(n, e2((0,
                f.Z_)()));
                if ("error"in s)
                    throw new eI(s.error,"failed to get slot leader");
                return s.result
            }
            async getSlotLeaders(e, t) {
                let r = await this._rpcRequest("getSlotLeaders", [e, t])
                  , i = (0,
                f.Ue)(r, e2((0,
                f.IX)(eH)));
                if ("error"in i)
                    throw new eI(i.error,"failed to get slot leaders");
                return i.result
            }
            async getSignatureStatus(e, t) {
                let {context: r, value: i} = await this.getSignatureStatuses([e], t);
                return X(1 === i.length),
                {
                    context: r,
                    value: i[0]
                }
            }
            async getSignatureStatuses(e, t) {
                let r = [e];
                t && r.push(t);
                let i = await this._rpcRequest("getSignatureStatuses", r)
                  , n = (0,
                f.Ue)(i, t$);
                if ("error"in n)
                    throw new eI(n.error,"failed to get signature status");
                return n.result
            }
            async getTransactionCount(e) {
                let {commitment: t, config: r} = eY(e)
                  , i = this._buildArgs([], t, void 0, r)
                  , n = await this._rpcRequest("getTransactionCount", i)
                  , s = (0,
                f.Ue)(n, e2((0,
                f.Rx)()));
                if ("error"in s)
                    throw new eI(s.error,"failed to get transaction count");
                return s.result
            }
            async getTotalSupply(e) {
                return (await this.getSupply({
                    commitment: e,
                    excludeNonCirculatingAccountsList: !0
                })).value.total
            }
            async getInflationGovernor(e) {
                let t = this._buildArgs([], e)
                  , r = await this._rpcRequest("getInflationGovernor", t)
                  , i = (0,
                f.Ue)(r, td);
                if ("error"in i)
                    throw new eI(i.error,"failed to get inflation");
                return i.result
            }
            async getInflationReward(e, t, r) {
                let {commitment: i, config: n} = eY(r)
                  , s = this._buildArgs([e.map(e => e.toBase58())], i, void 0, {
                    ...n,
                    epoch: null != t ? t : n?.epoch
                })
                  , o = await this._rpcRequest("getInflationReward", s)
                  , a = (0,
                f.Ue)(o, e6);
                if ("error"in a)
                    throw new eI(a.error,"failed to get inflation reward");
                return a.result
            }
            async getInflationRate() {
                let e = await this._rpcRequest("getInflationRate", [])
                  , t = (0,
                f.Ue)(e, th);
                if ("error"in t)
                    throw new eI(t.error,"failed to get inflation rate");
                return t.result
            }
            async getEpochInfo(e) {
                let {commitment: t, config: r} = eY(e)
                  , i = this._buildArgs([], t, void 0, r)
                  , n = await this._rpcRequest("getEpochInfo", i)
                  , s = (0,
                f.Ue)(n, tp);
                if ("error"in s)
                    throw new eI(s.error,"failed to get epoch info");
                return s.result
            }
            async getEpochSchedule() {
                let e = await this._rpcRequest("getEpochSchedule", [])
                  , t = (0,
                f.Ue)(e, ty);
                if ("error"in t)
                    throw new eI(t.error,"failed to get epoch schedule");
                let r = t.result;
                return new eG(r.slotsPerEpoch,r.leaderScheduleSlotOffset,r.warmup,r.firstNormalEpoch,r.firstNormalSlot)
            }
            async getLeaderSchedule() {
                let e = await this._rpcRequest("getLeaderSchedule", [])
                  , t = (0,
                f.Ue)(e, tm);
                if ("error"in t)
                    throw new eI(t.error,"failed to get leader schedule");
                return t.result
            }
            async getMinimumBalanceForRentExemption(e, t) {
                let r = this._buildArgs([e], t)
                  , i = await this._rpcRequest("getMinimumBalanceForRentExemption", r)
                  , n = (0,
                f.Ue)(i, tH);
                return "error"in n ? (console.warn("Unable to fetch minimum balance for rent exemption"),
                0) : n.result
            }
            async getRecentBlockhashAndContext(e) {
                let t = this._buildArgs([], e)
                  , r = await this._rpcRequest("getRecentBlockhash", t)
                  , i = (0,
                f.Ue)(r, rd);
                if ("error"in i)
                    throw new eI(i.error,"failed to get recent blockhash");
                return i.result
            }
            async getRecentPerformanceSamples(e) {
                let t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : [])
                  , r = (0,
                f.Ue)(t, ry);
                if ("error"in r)
                    throw new eI(r.error,"failed to get recent performance samples");
                return r.result
            }
            async getFeeCalculatorForBlockhash(e, t) {
                let r = this._buildArgs([e], t)
                  , i = await this._rpcRequest("getFeeCalculatorForBlockhash", r)
                  , n = (0,
                f.Ue)(i, rm);
                if ("error"in n)
                    throw new eI(n.error,"failed to get fee calculator");
                let {context: s, value: o} = n.result;
                return {
                    context: s,
                    value: null !== o ? o.feeCalculator : null
                }
            }
            async getFeeForMessage(e, t) {
                let r = E(e.serialize()).toString("base64")
                  , i = this._buildArgs([r], t)
                  , n = await this._rpcRequest("getFeeForMessage", i)
                  , s = (0,
                f.Ue)(n, e8((0,
                f.AG)((0,
                f.Rx)())));
                if ("error"in s)
                    throw new eI(s.error,"failed to get fee for message");
                if (null === s.result)
                    throw Error("invalid blockhash");
                return s.result
            }
            async getRecentPrioritizationFees(e) {
                let t = e?.lockedWritableAccounts?.map(e => e.toBase58())
                  , r = t?.length ? [t] : []
                  , i = await this._rpcRequest("getRecentPrioritizationFees", r)
                  , n = (0,
                f.Ue)(i, tg);
                if ("error"in n)
                    throw new eI(n.error,"failed to get recent prioritization fees");
                return n.result
            }
            async getRecentBlockhash(e) {
                try {
                    return (await this.getRecentBlockhashAndContext(e)).value
                } catch (e) {
                    throw Error("failed to get recent blockhash: " + e)
                }
            }
            async getLatestBlockhash(e) {
                try {
                    return (await this.getLatestBlockhashAndContext(e)).value
                } catch (e) {
                    throw Error("failed to get recent blockhash: " + e)
                }
            }
            async getLatestBlockhashAndContext(e) {
                let {commitment: t, config: r} = eY(e)
                  , i = this._buildArgs([], t, void 0, r)
                  , n = await this._rpcRequest("getLatestBlockhash", i)
                  , s = (0,
                f.Ue)(n, rh);
                if ("error"in s)
                    throw new eI(s.error,"failed to get latest blockhash");
                return s.result
            }
            async isBlockhashValid(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgs([e], r, void 0, i)
                  , s = await this._rpcRequest("isBlockhashValid", n)
                  , o = (0,
                f.Ue)(s, rg);
                if ("error"in o)
                    throw new eI(o.error,"failed to determine if the blockhash `" + e + "`is valid");
                return o.result
            }
            async getVersion() {
                let e = await this._rpcRequest("getVersion", [])
                  , t = (0,
                f.Ue)(e, e2(to));
                if ("error"in t)
                    throw new eI(t.error,"failed to get version");
                return t.result
            }
            async getGenesisHash() {
                let e = await this._rpcRequest("getGenesisHash", [])
                  , t = (0,
                f.Ue)(e, e2((0,
                f.Z_)()));
                if ("error"in t)
                    throw new eI(t.error,"failed to get genesis hash");
                return t.result
            }
            async getBlock(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgsAtLeastConfirmed([e], r, void 0, i)
                  , s = await this._rpcRequest("getBlock", n);
                try {
                    switch (i?.transactionDetails) {
                    case "accounts":
                        {
                            let e = (0,
                            f.Ue)(s, ri);
                            if ("error"in e)
                                throw e.error;
                            return e.result
                        }
                    case "none":
                        {
                            let e = (0,
                            f.Ue)(s, rr);
                            if ("error"in e)
                                throw e.error;
                            return e.result
                        }
                    default:
                        {
                            let e = (0,
                            f.Ue)(s, rt);
                            if ("error"in e)
                                throw e.error;
                            let {result: t} = e;
                            return t ? {
                                ...t,
                                transactions: t.transactions.map( ({transaction: e, meta: t, version: r}) => ({
                                    meta: t,
                                    transaction: {
                                        ...e,
                                        message: e3(r, e.message)
                                    },
                                    version: r
                                }))
                            } : null
                        }
                    }
                } catch (e) {
                    throw new eI(e,"failed to get confirmed block")
                }
            }
            async getParsedBlock(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i)
                  , s = await this._rpcRequest("getBlock", n);
                try {
                    switch (i?.transactionDetails) {
                    case "accounts":
                        {
                            let e = (0,
                            f.Ue)(s, rs);
                            if ("error"in e)
                                throw e.error;
                            return e.result
                        }
                    case "none":
                        {
                            let e = (0,
                            f.Ue)(s, ro);
                            if ("error"in e)
                                throw e.error;
                            return e.result
                        }
                    default:
                        {
                            let e = (0,
                            f.Ue)(s, rn);
                            if ("error"in e)
                                throw e.error;
                            return e.result
                        }
                    }
                } catch (e) {
                    throw new eI(e,"failed to get block")
                }
            }
            async getBlockProduction(e) {
                let t, r;
                if ("string" == typeof e)
                    r = e;
                else if (e) {
                    let {commitment: i, ...n} = e;
                    r = i,
                    t = n
                }
                let i = this._buildArgs([], r, "base64", t)
                  , n = await this._rpcRequest("getBlockProduction", i)
                  , s = (0,
                f.Ue)(n, tl);
                if ("error"in s)
                    throw new eI(s.error,"failed to get block production information");
                return s.result
            }
            async getTransaction(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgsAtLeastConfirmed([e], r, void 0, i)
                  , s = await this._rpcRequest("getTransaction", n)
                  , o = (0,
                f.Ue)(s, ru);
                if ("error"in o)
                    throw new eI(o.error,"failed to get transaction");
                let a = o.result;
                return a ? {
                    ...a,
                    transaction: {
                        ...a.transaction,
                        message: e3(a.version, a.transaction.message)
                    }
                } : a
            }
            async getParsedTransaction(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i)
                  , s = await this._rpcRequest("getTransaction", n)
                  , o = (0,
                f.Ue)(s, rl);
                if ("error"in o)
                    throw new eI(o.error,"failed to get transaction");
                return o.result
            }
            async getParsedTransactions(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = e.map(e => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i)
                }));
                return (await this._rpcBatchRequest(n)).map(e => {
                    let t = (0,
                    f.Ue)(e, rl);
                    if ("error"in t)
                        throw new eI(t.error,"failed to get transactions");
                    return t.result
                }
                )
            }
            async getTransactions(e, t) {
                let {commitment: r, config: i} = eY(t)
                  , n = e.map(e => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([e], r, void 0, i)
                }));
                return (await this._rpcBatchRequest(n)).map(e => {
                    let t = (0,
                    f.Ue)(e, ru);
                    if ("error"in t)
                        throw new eI(t.error,"failed to get transactions");
                    let r = t.result;
                    return r ? {
                        ...r,
                        transaction: {
                            ...r.transaction,
                            message: e3(r.version, r.transaction.message)
                        }
                    } : r
                }
                )
            }
            async getConfirmedBlock(e, t) {
                let r = this._buildArgsAtLeastConfirmed([e], t)
                  , i = await this._rpcRequest("getConfirmedBlock", r)
                  , n = (0,
                f.Ue)(i, ra);
                if ("error"in n)
                    throw new eI(n.error,"failed to get confirmed block");
                let s = n.result;
                if (!s)
                    throw Error("Confirmed block " + e + " not found");
                let o = {
                    ...s,
                    transactions: s.transactions.map( ({transaction: e, meta: t}) => {
                        let r = new er(e.message);
                        return {
                            meta: t,
                            transaction: {
                                ...e,
                                message: r
                            }
                        }
                    }
                    )
                };
                return {
                    ...o,
                    transactions: o.transactions.map( ({transaction: e, meta: t}) => ({
                        meta: t,
                        transaction: ec.populate(e.message, e.signatures)
                    }))
                }
            }
            async getBlocks(e, t, r) {
                let i = this._buildArgsAtLeastConfirmed(void 0 !== t ? [e, t] : [e], r)
                  , n = await this._rpcRequest("getBlocks", i)
                  , s = (0,
                f.Ue)(n, e2((0,
                f.IX)((0,
                f.Rx)())));
                if ("error"in s)
                    throw new eI(s.error,"failed to get blocks");
                return s.result
            }
            async getBlockSignatures(e, t) {
                let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                })
                  , i = await this._rpcRequest("getBlock", r)
                  , n = (0,
                f.Ue)(i, rc);
                if ("error"in n)
                    throw new eI(n.error,"failed to get block");
                let s = n.result;
                if (!s)
                    throw Error("Block " + e + " not found");
                return s
            }
            async getConfirmedBlockSignatures(e, t) {
                let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                })
                  , i = await this._rpcRequest("getConfirmedBlock", r)
                  , n = (0,
                f.Ue)(i, rc);
                if ("error"in n)
                    throw new eI(n.error,"failed to get confirmed block");
                let s = n.result;
                if (!s)
                    throw Error("Confirmed block " + e + " not found");
                return s
            }
            async getConfirmedTransaction(e, t) {
                let r = this._buildArgsAtLeastConfirmed([e], t)
                  , i = await this._rpcRequest("getConfirmedTransaction", r)
                  , n = (0,
                f.Ue)(i, ru);
                if ("error"in n)
                    throw new eI(n.error,"failed to get transaction");
                let s = n.result;
                if (!s)
                    return s;
                let o = new er(s.transaction.message)
                  , a = s.transaction.signatures;
                return {
                    ...s,
                    transaction: ec.populate(o, a)
                }
            }
            async getParsedConfirmedTransaction(e, t) {
                let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
                  , i = await this._rpcRequest("getConfirmedTransaction", r)
                  , n = (0,
                f.Ue)(i, rl);
                if ("error"in n)
                    throw new eI(n.error,"failed to get confirmed transaction");
                return n.result
            }
            async getParsedConfirmedTransactions(e, t) {
                let r = e.map(e => ({
                    methodName: "getConfirmedTransaction",
                    args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
                }));
                return (await this._rpcBatchRequest(r)).map(e => {
                    let t = (0,
                    f.Ue)(e, rl);
                    if ("error"in t)
                        throw new eI(t.error,"failed to get confirmed transactions");
                    return t.result
                }
                )
            }
            async getConfirmedSignaturesForAddress(e, t, r) {
                let i = {}
                  , n = await this.getFirstAvailableBlock();
                for (; !("until"in i) && !(--t <= 0) && !(t < n); )
                    try {
                        let e = await this.getConfirmedBlockSignatures(t, "finalized");
                        e.signatures.length > 0 && (i.until = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped"))
                            continue;
                        throw e
                    }
                let s = await this.getSlot("finalized");
                for (; !("before"in i) && !(++r > s); )
                    try {
                        let e = await this.getConfirmedBlockSignatures(r);
                        e.signatures.length > 0 && (i.before = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped"))
                            continue;
                        throw e
                    }
                return (await this.getConfirmedSignaturesForAddress2(e, i)).map(e => e.signature)
            }
            async getConfirmedSignaturesForAddress2(e, t, r) {
                let i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t)
                  , n = await this._rpcRequest("getConfirmedSignaturesForAddress2", i)
                  , s = (0,
                f.Ue)(n, tT);
                if ("error"in s)
                    throw new eI(s.error,"failed to get confirmed signatures for address");
                return s.result
            }
            async getSignaturesForAddress(e, t, r) {
                let i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t)
                  , n = await this._rpcRequest("getSignaturesForAddress", i)
                  , s = (0,
                f.Ue)(n, tC);
                if ("error"in s)
                    throw new eI(s.error,"failed to get signatures for address");
                return s.result
            }
            async getAddressLookupTable(e, t) {
                let {context: r, value: i} = await this.getAccountInfoAndContext(e, t)
                  , n = null;
                return null !== i && (n = new eV({
                    key: e,
                    state: eV.deserialize(i.data)
                })),
                {
                    context: r,
                    value: n
                }
            }
            async getNonceAndContext(e, t) {
                let {context: r, value: i} = await this.getAccountInfoAndContext(e, t)
                  , n = null;
                return null !== i && (n = eB.fromAccountData(i.data)),
                {
                    context: r,
                    value: n
                }
            }
            async getNonce(e, t) {
                return await this.getNonceAndContext(e, t).then(e => e.value).catch(t => {
                    throw Error("failed to get nonce for account " + e.toBase58() + ": " + t)
                }
                )
            }
            async requestAirdrop(e, t) {
                let r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t])
                  , i = (0,
                f.Ue)(r, rf);
                if ("error"in i)
                    throw new eI(i.error,`airdrop to ${e.toBase58()} failed`);
                return i.result
            }
            async _blockhashWithExpiryBlockHeight(e) {
                if (!e) {
                    for (; this._pollingBlockhash; )
                        await eA(100);
                    let e = Date.now() - this._blockhashInfo.lastFetch;
                    if (null !== this._blockhashInfo.latestBlockhash && !(e >= eX))
                        return this._blockhashInfo.latestBlockhash
                }
                return await this._pollNewBlockhash()
            }
            async _pollNewBlockhash() {
                this._pollingBlockhash = !0;
                try {
                    let e = Date.now()
                      , t = this._blockhashInfo.latestBlockhash
                      , r = t ? t.blockhash : null;
                    for (let e = 0; e < 50; e++) {
                        let e = await this.getLatestBlockhash("finalized");
                        if (r !== e.blockhash)
                            return this._blockhashInfo = {
                                latestBlockhash: e,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            },
                            e;
                        await eA(200)
                    }
                    throw Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`)
                } finally {
                    this._pollingBlockhash = !1
                }
            }
            async getStakeMinimumDelegation(e) {
                let {commitment: t, config: r} = eY(e)
                  , i = this._buildArgs([], t, "base64", r)
                  , n = await this._rpcRequest("getStakeMinimumDelegation", i)
                  , s = (0,
                f.Ue)(n, e8((0,
                f.Rx)()));
                if ("error"in s)
                    throw new eI(s.error,"failed to get stake minimum delegation");
                return s.result
            }
            async simulateTransaction(e, t, r) {
                let i;
                if ("message"in e) {
                    let i = e.serialize()
                      , n = a.Buffer.from(i).toString("base64");
                    if (Array.isArray(t) || void 0 !== r)
                        throw Error("Invalid arguments");
                    let s = t || {};
                    s.encoding = "base64",
                    "commitment"in s || (s.commitment = this.commitment),
                    t && "object" == typeof t && "innerInstructions"in t && (s.innerInstructions = t.innerInstructions);
                    let o = await this._rpcRequest("simulateTransaction", [n, s])
                      , c = (0,
                    f.Ue)(o, tu);
                    if ("error"in c)
                        throw Error("failed to simulate transaction: " + c.error.message);
                    return c.result
                }
                if (e instanceof ec ? ((i = new ec).feePayer = e.feePayer,
                i.instructions = e.instructions,
                i.nonceInfo = e.nonceInfo,
                i.signatures = e.signatures) : (i = ec.populate(e))._message = i._json = void 0,
                void 0 !== t && !Array.isArray(t))
                    throw Error("Invalid arguments");
                if (i.nonceInfo && t)
                    i.sign(...t);
                else {
                    let e = this._disableBlockhashCaching;
                    for (; ; ) {
                        let r = await this._blockhashWithExpiryBlockHeight(e);
                        if (i.lastValidBlockHeight = r.lastValidBlockHeight,
                        i.recentBlockhash = r.blockhash,
                        !t)
                            break;
                        if (i.sign(...t),
                        !i.signature)
                            throw Error("!signature");
                        let n = i.signature.toString("base64");
                        if (this._blockhashInfo.simulatedSignatures.includes(n) || this._blockhashInfo.transactionSignatures.includes(n))
                            e = !0;
                        else {
                            this._blockhashInfo.simulatedSignatures.push(n);
                            break
                        }
                    }
                }
                let n = i._compile()
                  , s = n.serialize()
                  , o = i._serialize(s).toString("base64")
                  , c = {
                    encoding: "base64",
                    commitment: this.commitment
                };
                if (r) {
                    let e = (Array.isArray(r) ? r : n.nonProgramIds()).map(e => e.toBase58());
                    c.accounts = {
                        encoding: "base64",
                        addresses: e
                    }
                }
                t && (c.sigVerify = !0),
                t && "object" == typeof t && "innerInstructions"in t && (c.innerInstructions = t.innerInstructions);
                let u = await this._rpcRequest("simulateTransaction", [o, c])
                  , l = (0,
                f.Ue)(u, tu);
                if ("error"in l) {
                    let e;
                    if ("data"in l.error && (e = l.error.data.logs) && Array.isArray(e)) {
                        let t = "\n    "
                          , r = t + e.join(t);
                        console.error(l.error.message, r)
                    }
                    throw new eS({
                        action: "simulate",
                        signature: "",
                        transactionMessage: l.error.message,
                        logs: e
                    })
                }
                return l.result
            }
            async sendTransaction(e, t, r) {
                if ("version"in e) {
                    if (t && Array.isArray(t))
                        throw Error("Invalid arguments");
                    let r = e.serialize();
                    return await this.sendRawTransaction(r, t)
                }
                if (void 0 === t || !Array.isArray(t))
                    throw Error("Invalid arguments");
                if (e.nonceInfo)
                    e.sign(...t);
                else {
                    let r = this._disableBlockhashCaching;
                    for (; ; ) {
                        let i = await this._blockhashWithExpiryBlockHeight(r);
                        if (e.lastValidBlockHeight = i.lastValidBlockHeight,
                        e.recentBlockhash = i.blockhash,
                        e.sign(...t),
                        !e.signature)
                            throw Error("!signature");
                        let n = e.signature.toString("base64");
                        if (this._blockhashInfo.transactionSignatures.includes(n))
                            r = !0;
                        else {
                            this._blockhashInfo.transactionSignatures.push(n);
                            break
                        }
                    }
                }
                let i = e.serialize();
                return await this.sendRawTransaction(i, r)
            }
            async sendRawTransaction(e, t) {
                let r = E(e).toString("base64");
                return await this.sendEncodedTransaction(r, t)
            }
            async sendEncodedTransaction(e, t) {
                let r = {
                    encoding: "base64"
                }
                  , i = t && t.skipPreflight
                  , n = !0 === i ? "processed" : t && t.preflightCommitment || this.commitment;
                t && null != t.maxRetries && (r.maxRetries = t.maxRetries),
                t && null != t.minContextSlot && (r.minContextSlot = t.minContextSlot),
                i && (r.skipPreflight = i),
                n && (r.preflightCommitment = n);
                let s = await this._rpcRequest("sendTransaction", [e, r])
                  , o = (0,
                f.Ue)(s, rb);
                if ("error"in o) {
                    let e;
                    throw "data"in o.error && (e = o.error.data.logs),
                    new eS({
                        action: i ? "send" : "simulate",
                        signature: "",
                        transactionMessage: o.error.message,
                        logs: e
                    })
                }
                return o.result
            }
            _wsOnOpen() {
                this._rpcWebSocketConnected = !0,
                this._rpcWebSocketHeartbeat = setInterval( () => {
                    (async () => {
                        try {
                            await this._rpcWebSocket.notify("ping")
                        } catch {}
                    }
                    )()
                }
                , 5e3),
                this._updateSubscriptions()
            }
            _wsOnError(e) {
                this._rpcWebSocketConnected = !1,
                console.error("ws error:", e.message)
            }
            _wsOnClose(e) {
                if (this._rpcWebSocketConnected = !1,
                this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER,
                this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout),
                this._rpcWebSocketIdleTimeout = null),
                this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat),
                this._rpcWebSocketHeartbeat = null),
                1e3 === e) {
                    this._updateSubscriptions();
                    return
                }
                this._subscriptionCallbacksByServerSubscriptionId = {},
                Object.entries(this._subscriptionsByHash).forEach( ([e,t]) => {
                    this._setSubscription(e, {
                        ...t,
                        state: "pending"
                    })
                }
                )
            }
            _setSubscription(e, t) {
                let r = this._subscriptionsByHash[e]?.state;
                if (this._subscriptionsByHash[e] = t,
                r !== t.state) {
                    let r = this._subscriptionStateChangeCallbacksByHash[e];
                    r && r.forEach(e => {
                        try {
                            e(t.state)
                        } catch {}
                    }
                    )
                }
            }
            _onSubscriptionStateChange(e, t) {
                let r = this._subscriptionHashByClientSubscriptionId[e];
                if (null == r)
                    return () => {}
                    ;
                let i = this._subscriptionStateChangeCallbacksByHash[r] ||= new Set;
                return i.add(t),
                () => {
                    i.delete(t),
                    0 === i.size && delete this._subscriptionStateChangeCallbacksByHash[r]
                }
            }
            async _updateSubscriptions() {
                if (0 === Object.keys(this._subscriptionsByHash).length) {
                    this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1,
                    this._rpcWebSocketIdleTimeout = setTimeout( () => {
                        this._rpcWebSocketIdleTimeout = null;
                        try {
                            this._rpcWebSocket.close()
                        } catch (e) {
                            e instanceof Error && console.log(`Error when closing socket connection: ${e.message}`)
                        }
                    }
                    , 500));
                    return
                }
                if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout),
                this._rpcWebSocketIdleTimeout = null,
                this._rpcWebSocketConnected = !0),
                !this._rpcWebSocketConnected) {
                    this._rpcWebSocket.connect();
                    return
                }
                let e = this._rpcWebSocketGeneration
                  , t = () => e === this._rpcWebSocketGeneration;
                await Promise.all(Object.keys(this._subscriptionsByHash).map(async e => {
                    let r = this._subscriptionsByHash[e];
                    if (void 0 !== r)
                        switch (r.state) {
                        case "pending":
                        case "unsubscribed":
                            if (0 === r.callbacks.size) {
                                delete this._subscriptionsByHash[e],
                                "unsubscribed" === r.state && delete this._subscriptionCallbacksByServerSubscriptionId[r.serverSubscriptionId],
                                await this._updateSubscriptions();
                                return
                            }
                            await (async () => {
                                let {args: i, method: n} = r;
                                try {
                                    this._setSubscription(e, {
                                        ...r,
                                        state: "subscribing"
                                    });
                                    let t = await this._rpcWebSocket.call(n, i);
                                    this._setSubscription(e, {
                                        ...r,
                                        serverSubscriptionId: t,
                                        state: "subscribed"
                                    }),
                                    this._subscriptionCallbacksByServerSubscriptionId[t] = r.callbacks,
                                    await this._updateSubscriptions()
                                } catch (s) {
                                    if (console.error(`Received ${sinstanceof Error ? "" : "JSON-RPC "}error calling \`${n}\``, {
                                        args: i,
                                        error: s
                                    }),
                                    !t())
                                        return;
                                    this._setSubscription(e, {
                                        ...r,
                                        state: "pending"
                                    }),
                                    await this._updateSubscriptions()
                                }
                            }
                            )();
                            break;
                        case "subscribed":
                            0 === r.callbacks.size && await (async () => {
                                let {serverSubscriptionId: i, unsubscribeMethod: n} = r;
                                if (this._subscriptionsAutoDisposedByRpc.has(i))
                                    this._subscriptionsAutoDisposedByRpc.delete(i);
                                else {
                                    this._setSubscription(e, {
                                        ...r,
                                        state: "unsubscribing"
                                    }),
                                    this._setSubscription(e, {
                                        ...r,
                                        state: "unsubscribing"
                                    });
                                    try {
                                        await this._rpcWebSocket.call(n, [i])
                                    } catch (i) {
                                        if (i instanceof Error && console.error(`${n} error:`, i.message),
                                        !t())
                                            return;
                                        this._setSubscription(e, {
                                            ...r,
                                            state: "subscribed"
                                        }),
                                        await this._updateSubscriptions();
                                        return
                                    }
                                }
                                this._setSubscription(e, {
                                    ...r,
                                    state: "unsubscribed"
                                }),
                                await this._updateSubscriptions()
                            }
                            )()
                        }
                }
                ))
            }
            _handleServerNotification(e, t) {
                let r = this._subscriptionCallbacksByServerSubscriptionId[e];
                void 0 !== r && r.forEach(e => {
                    try {
                        e(...t)
                    } catch (e) {
                        console.error(e)
                    }
                }
                )
            }
            _wsOnAccountNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, tL);
                this._handleServerNotification(r, [t.value, t.context])
            }
            _makeSubscription(e, t) {
                let r = this._nextClientSubscriptionId++
                  , i = eq([e.method, t])
                  , n = this._subscriptionsByHash[i];
                return void 0 === n ? this._subscriptionsByHash[i] = {
                    ...e,
                    args: t,
                    callbacks: new Set([e.callback]),
                    state: "pending"
                } : n.callbacks.add(e.callback),
                this._subscriptionHashByClientSubscriptionId[r] = i,
                this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
                    delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r],
                    delete this._subscriptionHashByClientSubscriptionId[r];
                    let t = this._subscriptionsByHash[i];
                    X(void 0 !== t, `Could not find a \`Subscription\` when tearing down client subscription #${r}`),
                    t.callbacks.delete(e.callback),
                    await this._updateSubscriptions()
                }
                ,
                this._updateSubscriptions(),
                r
            }
            onAccountChange(e, t, r) {
                let {commitment: i, config: n} = eY(r)
                  , s = this._buildArgs([e.toBase58()], i || this._commitment || "finalized", "base64", n);
                return this._makeSubscription({
                    callback: t,
                    method: "accountSubscribe",
                    unsubscribeMethod: "accountUnsubscribe"
                }, s)
            }
            async removeAccountChangeListener(e) {
                await this._unsubscribeClientSubscription(e, "account change")
            }
            _wsOnProgramAccountNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, tW);
                this._handleServerNotification(r, [{
                    accountId: t.value.pubkey,
                    accountInfo: t.value.account
                }, t.context])
            }
            onProgramAccountChange(e, t, r, i) {
                let {commitment: n, config: s} = eY(r)
                  , o = this._buildArgs([e.toBase58()], n || this._commitment || "finalized", "base64", s || (i ? {
                    filters: eQ(i)
                } : void 0));
                return this._makeSubscription({
                    callback: t,
                    method: "programSubscribe",
                    unsubscribeMethod: "programUnsubscribe"
                }, o)
            }
            async removeProgramAccountChangeListener(e) {
                await this._unsubscribeClientSubscription(e, "program account change")
            }
            onLogs(e, t, r) {
                let i = this._buildArgs(["object" == typeof e ? {
                    mentions: [e.toString()]
                } : e], r || this._commitment || "finalized");
                return this._makeSubscription({
                    callback: t,
                    method: "logsSubscribe",
                    unsubscribeMethod: "logsUnsubscribe"
                }, i)
            }
            async removeOnLogsListener(e) {
                await this._unsubscribeClientSubscription(e, "logs")
            }
            _wsOnLogsNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, rS);
                this._handleServerNotification(r, [t.value, t.context])
            }
            _wsOnSlotNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, tN);
                this._handleServerNotification(r, [t])
            }
            onSlotChange(e) {
                return this._makeSubscription({
                    callback: e,
                    method: "slotSubscribe",
                    unsubscribeMethod: "slotUnsubscribe"
                }, [])
            }
            async removeSlotChangeListener(e) {
                await this._unsubscribeClientSubscription(e, "slot change")
            }
            _wsOnSlotUpdatesNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, tU);
                this._handleServerNotification(r, [t])
            }
            onSlotUpdate(e) {
                return this._makeSubscription({
                    callback: e,
                    method: "slotsUpdatesSubscribe",
                    unsubscribeMethod: "slotsUpdatesUnsubscribe"
                }, [])
            }
            async removeSlotUpdateListener(e) {
                await this._unsubscribeClientSubscription(e, "slot update")
            }
            async _unsubscribeClientSubscription(e, t) {
                let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
                r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
            }
            _buildArgs(e, t, r, i) {
                let n = t || this._commitment;
                if (n || r || i) {
                    let t = {};
                    r && (t.encoding = r),
                    n && (t.commitment = n),
                    i && (t = Object.assign(t, i)),
                    e.push(t)
                }
                return e
            }
            _buildArgsAtLeastConfirmed(e, t, r, i) {
                let n = t || this._commitment;
                if (n && !["confirmed", "finalized"].includes(n))
                    throw Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                return this._buildArgs(e, t, r, i)
            }
            _wsOnSignatureNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, tq);
                "receivedSignature" !== t.value && this._subscriptionsAutoDisposedByRpc.add(r),
                this._handleServerNotification(r, "receivedSignature" === t.value ? [{
                    type: "received"
                }, t.context] : [{
                    type: "status",
                    result: t.value
                }, t.context])
            }
            onSignature(e, t, r) {
                let i = this._buildArgs([e], r || this._commitment || "finalized")
                  , n = this._makeSubscription({
                    callback: (e, r) => {
                        if ("status" === e.type) {
                            t(e.result, r);
                            try {
                                this.removeSignatureListener(n)
                            } catch (e) {}
                        }
                    }
                    ,
                    method: "signatureSubscribe",
                    unsubscribeMethod: "signatureUnsubscribe"
                }, i);
                return n
            }
            onSignatureWithOptions(e, t, r) {
                let {commitment: i, ...n} = {
                    ...r,
                    commitment: r && r.commitment || this._commitment || "finalized"
                }
                  , s = this._buildArgs([e], i, void 0, n)
                  , o = this._makeSubscription({
                    callback: (e, r) => {
                        t(e, r);
                        try {
                            this.removeSignatureListener(o)
                        } catch (e) {}
                    }
                    ,
                    method: "signatureSubscribe",
                    unsubscribeMethod: "signatureUnsubscribe"
                }, s);
                return o
            }
            async removeSignatureListener(e) {
                await this._unsubscribeClientSubscription(e, "signature result")
            }
            _wsOnRootNotification(e) {
                let {result: t, subscription: r} = (0,
                f.Ue)(e, tM);
                this._handleServerNotification(r, [t])
            }
            onRootChange(e) {
                return this._makeSubscription({
                    callback: e,
                    method: "rootSubscribe",
                    unsubscribeMethod: "rootUnsubscribe"
                }, [])
            }
            async removeRootChangeListener(e) {
                await this._unsubscribeClientSubscription(e, "root change")
            }
        }
        class r_ {
            constructor(e) {
                this._keypair = void 0,
                this._keypair = e ?? A()
            }
            static generate() {
                return new r_(A())
            }
            static fromSecretKey(e, t) {
                if (64 !== e.byteLength)
                    throw Error("bad secret key size");
                let r = e.slice(32, 64);
                if (!t || !t.skipValidation) {
                    let t = R(e.slice(0, 32));
                    for (let e = 0; e < 32; e++)
                        if (r[e] !== t[e])
                            throw Error("provided secretKey is invalid")
                }
                return new r_({
                    publicKey: r,
                    secretKey: e
                })
            }
            static fromSeed(e) {
                let t = R(e)
                  , r = new Uint8Array(64);
                return r.set(e),
                r.set(t, 32),
                new r_({
                    publicKey: t,
                    secretKey: r
                })
            }
            get publicKey() {
                return new K(this._keypair.publicKey)
            }
            get secretKey() {
                return new Uint8Array(this._keypair.secretKey)
            }
        }
        let rA = Object.freeze({
            CreateLookupTable: {
                index: 0,
                layout: y.n_([y.Jq("instruction"), eC("recentSlot"), y.u8("bumpSeed")])
            },
            FreezeLookupTable: {
                index: 1,
                layout: y.n_([y.Jq("instruction")])
            },
            ExtendLookupTable: {
                index: 2,
                layout: y.n_([y.Jq("instruction"), eC(), y.A9(D(), y.cv(y.Jq(), -8), "addresses")])
            },
            DeactivateLookupTable: {
                index: 3,
                layout: y.n_([y.Jq("instruction")])
            },
            CloseLookupTable: {
                index: 4,
                layout: y.n_([y.Jq("instruction")])
            }
        });
        class rR {
            constructor() {}
            static decodeInstructionType(e) {
                let t;
                this.checkProgramId(e.programId);
                let r = y.Jq("instruction").decode(e.data);
                for (let[e,i] of Object.entries(rA))
                    if (i.index == r) {
                        t = e;
                        break
                    }
                if (!t)
                    throw Error("Invalid Instruction. Should be a LookupTable Instruction");
                return t
            }
            static decodeCreateLookupTable(e) {
                this.checkProgramId(e.programId),
                this.checkKeysLength(e.keys, 4);
                let {recentSlot: t} = ex(rA.CreateLookupTable, e.data);
                return {
                    authority: e.keys[1].pubkey,
                    payer: e.keys[2].pubkey,
                    recentSlot: Number(t)
                }
            }
            static decodeExtendLookupTable(e) {
                if (this.checkProgramId(e.programId),
                e.keys.length < 2)
                    throw Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
                let {addresses: t} = ex(rA.ExtendLookupTable, e.data);
                return {
                    lookupTable: e.keys[0].pubkey,
                    authority: e.keys[1].pubkey,
                    payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
                    addresses: t.map(e => new K(e))
                }
            }
            static decodeCloseLookupTable(e) {
                return this.checkProgramId(e.programId),
                this.checkKeysLength(e.keys, 3),
                {
                    lookupTable: e.keys[0].pubkey,
                    authority: e.keys[1].pubkey,
                    recipient: e.keys[2].pubkey
                }
            }
            static decodeFreezeLookupTable(e) {
                return this.checkProgramId(e.programId),
                this.checkKeysLength(e.keys, 2),
                {
                    lookupTable: e.keys[0].pubkey,
                    authority: e.keys[1].pubkey
                }
            }
            static decodeDeactivateLookupTable(e) {
                return this.checkProgramId(e.programId),
                this.checkKeysLength(e.keys, 2),
                {
                    lookupTable: e.keys[0].pubkey,
                    authority: e.keys[1].pubkey
                }
            }
            static checkProgramId(e) {
                if (!e.equals(rx.programId))
                    throw Error("invalid instruction; programId is not AddressLookupTable Program")
            }
            static checkKeysLength(e, t) {
                if (e.length < t)
                    throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
            }
        }
        class rx {
            constructor() {}
            static createLookupTable(e) {
                let[t,r] = K.findProgramAddressSync([e.authority.toBuffer(), (0,
                m.k$)(BigInt(e.recentSlot), 8)], this.programId)
                  , i = eR(rA.CreateLookupTable, {
                    recentSlot: BigInt(e.recentSlot),
                    bumpSeed: r
                })
                  , n = [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authority,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: e.payer,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: eW.programId,
                    isSigner: !1,
                    isWritable: !1
                }];
                return [new ea({
                    programId: this.programId,
                    keys: n,
                    data: i
                }), t]
            }
            static freezeLookupTable(e) {
                let t = eR(rA.FreezeLookupTable)
                  , r = [{
                    pubkey: e.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authority,
                    isSigner: !0,
                    isWritable: !1
                }];
                return new ea({
                    programId: this.programId,
                    keys: r,
                    data: t
                })
            }
            static extendLookupTable(e) {
                let t = eR(rA.ExtendLookupTable, {
                    addresses: e.addresses.map(e => e.toBytes())
                })
                  , r = [{
                    pubkey: e.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authority,
                    isSigner: !0,
                    isWritable: !1
                }];
                return e.payer && r.push({
                    pubkey: e.payer,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: eW.programId,
                    isSigner: !1,
                    isWritable: !1
                }),
                new ea({
                    programId: this.programId,
                    keys: r,
                    data: t
                })
            }
            static deactivateLookupTable(e) {
                let t = eR(rA.DeactivateLookupTable)
                  , r = [{
                    pubkey: e.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authority,
                    isSigner: !0,
                    isWritable: !1
                }];
                return new ea({
                    programId: this.programId,
                    keys: r,
                    data: t
                })
            }
            static closeLookupTable(e) {
                let t = eR(rA.CloseLookupTable)
                  , r = [{
                    pubkey: e.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authority,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: e.recipient,
                    isSigner: !1,
                    isWritable: !0
                }];
                return new ea({
                    programId: this.programId,
                    keys: r,
                    data: t
                })
            }
        }
        rx.programId = new K("AddressLookupTab1e1111111111111111111111111");
        class rP {
            constructor() {}
            static decodeInstructionType(e) {
                let t;
                this.checkProgramId(e.programId);
                let r = y.u8("instruction").decode(e.data);
                for (let[e,i] of Object.entries(rv))
                    if (i.index == r) {
                        t = e;
                        break
                    }
                if (!t)
                    throw Error("Instruction type incorrect; not a ComputeBudgetInstruction");
                return t
            }
            static decodeRequestUnits(e) {
                this.checkProgramId(e.programId);
                let {units: t, additionalFee: r} = ex(rv.RequestUnits, e.data);
                return {
                    units: t,
                    additionalFee: r
                }
            }
            static decodeRequestHeapFrame(e) {
                this.checkProgramId(e.programId);
                let {bytes: t} = ex(rv.RequestHeapFrame, e.data);
                return {
                    bytes: t
                }
            }
            static decodeSetComputeUnitLimit(e) {
                this.checkProgramId(e.programId);
                let {units: t} = ex(rv.SetComputeUnitLimit, e.data);
                return {
                    units: t
                }
            }
            static decodeSetComputeUnitPrice(e) {
                this.checkProgramId(e.programId);
                let {microLamports: t} = ex(rv.SetComputeUnitPrice, e.data);
                return {
                    microLamports: t
                }
            }
            static checkProgramId(e) {
                if (!e.equals(rE.programId))
                    throw Error("invalid instruction; programId is not ComputeBudgetProgram")
            }
        }
        let rv = Object.freeze({
            RequestUnits: {
                index: 0,
                layout: y.n_([y.u8("instruction"), y.Jq("units"), y.Jq("additionalFee")])
            },
            RequestHeapFrame: {
                index: 1,
                layout: y.n_([y.u8("instruction"), y.Jq("bytes")])
            },
            SetComputeUnitLimit: {
                index: 2,
                layout: y.n_([y.u8("instruction"), y.Jq("units")])
            },
            SetComputeUnitPrice: {
                index: 3,
                layout: y.n_([y.u8("instruction"), eC("microLamports")])
            }
        });
        class rE {
            constructor() {}
            static requestUnits(e) {
                let t = eR(rv.RequestUnits, e);
                return new ea({
                    keys: [],
                    programId: this.programId,
                    data: t
                })
            }
            static requestHeapFrame(e) {
                let t = eR(rv.RequestHeapFrame, e);
                return new ea({
                    keys: [],
                    programId: this.programId,
                    data: t
                })
            }
            static setComputeUnitLimit(e) {
                let t = eR(rv.SetComputeUnitLimit, e);
                return new ea({
                    keys: [],
                    programId: this.programId,
                    data: t
                })
            }
            static setComputeUnitPrice(e) {
                let t = eR(rv.SetComputeUnitPrice, {
                    microLamports: BigInt(e.microLamports)
                });
                return new ea({
                    keys: [],
                    programId: this.programId,
                    data: t
                })
            }
        }
        rE.programId = new K("ComputeBudget111111111111111111111111111111");
        let rB = y.n_([y.u8("numSignatures"), y.u8("padding"), y.KB("signatureOffset"), y.KB("signatureInstructionIndex"), y.KB("publicKeyOffset"), y.KB("publicKeyInstructionIndex"), y.KB("messageDataOffset"), y.KB("messageDataSize"), y.KB("messageInstructionIndex")]);
        class rT {
            constructor() {}
            static createInstructionWithPublicKey(e) {
                let {publicKey: t, message: r, signature: i, instructionIndex: n} = e;
                X(32 === t.length, `Public Key must be 32 bytes but received ${t.length} bytes`),
                X(64 === i.length, `Signature must be 64 bytes but received ${i.length} bytes`);
                let s = rB.span
                  , o = s + t.length
                  , c = o + i.length
                  , u = a.Buffer.alloc(c + r.length)
                  , l = null == n ? 65535 : n;
                return rB.encode({
                    numSignatures: 1,
                    padding: 0,
                    signatureOffset: o,
                    signatureInstructionIndex: l,
                    publicKeyOffset: s,
                    publicKeyInstructionIndex: l,
                    messageDataOffset: c,
                    messageDataSize: r.length,
                    messageInstructionIndex: l
                }, u),
                u.fill(t, s),
                u.fill(i, o),
                u.fill(r, c),
                new ea({
                    keys: [],
                    programId: rT.programId,
                    data: u
                })
            }
            static createInstructionWithPrivateKey(e) {
                let {privateKey: t, message: r, instructionIndex: i} = e;
                X(64 === t.length, `Private key must be 64 bytes but received ${t.length} bytes`);
                try {
                    let e = r_.fromSecretKey(t)
                      , n = e.publicKey.toBytes()
                      , s = P(r, e.secretKey);
                    return this.createInstructionWithPublicKey({
                        publicKey: n,
                        message: r,
                        signature: s,
                        instructionIndex: i
                    })
                } catch (e) {
                    throw Error(`Error creating instruction; ${e}`)
                }
            }
        }
        rT.programId = new K("Ed25519SigVerify111111111111111111111111111");
        let rC = (e, t) => {
            let r = I.secp256k1.sign(e, t);
            return [r.toCompactRawBytes(), r.recovery]
        }
        ;
        I.secp256k1.utils.isValidPrivateKey;
        let rL = I.secp256k1.getPublicKey
          , rO = y.n_([y.u8("numSignatures"), y.KB("signatureOffset"), y.u8("signatureInstructionIndex"), y.KB("ethAddressOffset"), y.u8("ethAddressInstructionIndex"), y.KB("messageDataOffset"), y.KB("messageDataSize"), y.u8("messageInstructionIndex"), y.Ik(20, "ethAddress"), y.Ik(64, "signature"), y.u8("recoveryId")]);
        class rW {
            constructor() {}
            static publicKeyToEthAddress(e) {
                X(64 === e.length, `Public key must be 64 bytes but received ${e.length} bytes`);
                try {
                    return a.Buffer.from((0,
                    w.fr)(E(e))).slice(-20)
                } catch (e) {
                    throw Error(`Error constructing Ethereum address: ${e}`)
                }
            }
            static createInstructionWithPublicKey(e) {
                let {publicKey: t, message: r, signature: i, recoveryId: n, instructionIndex: s} = e;
                return rW.createInstructionWithEthAddress({
                    ethAddress: rW.publicKeyToEthAddress(t),
                    message: r,
                    signature: i,
                    recoveryId: n,
                    instructionIndex: s
                })
            }
            static createInstructionWithEthAddress(e) {
                let t;
                let {ethAddress: r, message: i, signature: n, recoveryId: s, instructionIndex: o=0} = e;
                X(20 === (t = "string" == typeof r ? r.startsWith("0x") ? a.Buffer.from(r.substr(2), "hex") : a.Buffer.from(r, "hex") : r).length, `Address must be 20 bytes but received ${t.length} bytes`);
                let c = 12 + t.length
                  , u = c + n.length + 1
                  , l = a.Buffer.alloc(rO.span + i.length);
                return rO.encode({
                    numSignatures: 1,
                    signatureOffset: c,
                    signatureInstructionIndex: o,
                    ethAddressOffset: 12,
                    ethAddressInstructionIndex: o,
                    messageDataOffset: u,
                    messageDataSize: i.length,
                    messageInstructionIndex: o,
                    signature: E(n),
                    ethAddress: E(t),
                    recoveryId: s
                }, l),
                l.fill(E(i), rO.span),
                new ea({
                    keys: [],
                    programId: rW.programId,
                    data: l
                })
            }
            static createInstructionWithPrivateKey(e) {
                let {privateKey: t, message: r, instructionIndex: i} = e;
                X(32 === t.length, `Private key must be 32 bytes but received ${t.length} bytes`);
                try {
                    let e = E(t)
                      , n = rL(e, !1).slice(1)
                      , s = a.Buffer.from((0,
                    w.fr)(E(r)))
                      , [o,c] = rC(s, e);
                    return this.createInstructionWithPublicKey({
                        publicKey: n,
                        message: r,
                        signature: o,
                        recoveryId: c,
                        instructionIndex: i
                    })
                } catch (e) {
                    throw Error(`Error creating instruction; ${e}`)
                }
            }
        }
        rW.programId = new K("KeccakSecp256k11111111111111111111111111111");
        let rK = new K("StakeConfig11111111111111111111111111111111");
        class rN {
            constructor(e, t) {
                this.staker = void 0,
                this.withdrawer = void 0,
                this.staker = e,
                this.withdrawer = t
            }
        }
        class rz {
            constructor(e, t, r) {
                this.unixTimestamp = void 0,
                this.epoch = void 0,
                this.custodian = void 0,
                this.unixTimestamp = e,
                this.epoch = t,
                this.custodian = r
            }
        }
        rz.default = new rz(0,0,K.default);
        class rU {
            constructor() {}
            static decodeInstructionType(e) {
                let t;
                this.checkProgramId(e.programId);
                let r = y.Jq("instruction").decode(e.data);
                for (let[e,i] of Object.entries(rq))
                    if (i.index == r) {
                        t = e;
                        break
                    }
                if (!t)
                    throw Error("Instruction type incorrect; not a StakeInstruction");
                return t
            }
            static decodeInitialize(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 2);
                let {authorized: t, lockup: r} = ex(rq.Initialize, e.data);
                return {
                    stakePubkey: e.keys[0].pubkey,
                    authorized: new rN(new K(t.staker),new K(t.withdrawer)),
                    lockup: new rz(r.unixTimestamp,r.epoch,new K(r.custodian))
                }
            }
            static decodeDelegate(e) {
                return this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 6),
                ex(rq.Delegate, e.data),
                {
                    stakePubkey: e.keys[0].pubkey,
                    votePubkey: e.keys[1].pubkey,
                    authorizedPubkey: e.keys[5].pubkey
                }
            }
            static decodeAuthorize(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {newAuthorized: t, stakeAuthorizationType: r} = ex(rq.Authorize, e.data)
                  , i = {
                    stakePubkey: e.keys[0].pubkey,
                    authorizedPubkey: e.keys[2].pubkey,
                    newAuthorizedPubkey: new K(t),
                    stakeAuthorizationType: {
                        index: r
                    }
                };
                return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey),
                i
            }
            static decodeAuthorizeWithSeed(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 2);
                let {newAuthorized: t, stakeAuthorizationType: r, authoritySeed: i, authorityOwner: n} = ex(rq.AuthorizeWithSeed, e.data)
                  , s = {
                    stakePubkey: e.keys[0].pubkey,
                    authorityBase: e.keys[1].pubkey,
                    authoritySeed: i,
                    authorityOwner: new K(n),
                    newAuthorizedPubkey: new K(t),
                    stakeAuthorizationType: {
                        index: r
                    }
                };
                return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey),
                s
            }
            static decodeSplit(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {lamports: t} = ex(rq.Split, e.data);
                return {
                    stakePubkey: e.keys[0].pubkey,
                    splitStakePubkey: e.keys[1].pubkey,
                    authorizedPubkey: e.keys[2].pubkey,
                    lamports: t
                }
            }
            static decodeMerge(e) {
                return this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3),
                ex(rq.Merge, e.data),
                {
                    stakePubkey: e.keys[0].pubkey,
                    sourceStakePubKey: e.keys[1].pubkey,
                    authorizedPubkey: e.keys[4].pubkey
                }
            }
            static decodeWithdraw(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 5);
                let {lamports: t} = ex(rq.Withdraw, e.data)
                  , r = {
                    stakePubkey: e.keys[0].pubkey,
                    toPubkey: e.keys[1].pubkey,
                    authorizedPubkey: e.keys[4].pubkey,
                    lamports: t
                };
                return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey),
                r
            }
            static decodeDeactivate(e) {
                return this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3),
                ex(rq.Deactivate, e.data),
                {
                    stakePubkey: e.keys[0].pubkey,
                    authorizedPubkey: e.keys[2].pubkey
                }
            }
            static checkProgramId(e) {
                if (!e.equals(rG.programId))
                    throw Error("invalid instruction; programId is not StakeProgram")
            }
            static checkKeyLength(e, t) {
                if (e.length < t)
                    throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
            }
        }
        let rq = Object.freeze({
            Initialize: {
                index: 0,
                layout: y.n_([y.Jq("instruction"), ( (e="authorized") => y.n_([D("staker"), D("withdrawer")], e))(), ( (e="lockup") => y.n_([y.gM("unixTimestamp"), y.gM("epoch"), D("custodian")], e))()])
            },
            Authorize: {
                index: 1,
                layout: y.n_([y.Jq("instruction"), D("newAuthorized"), y.Jq("stakeAuthorizationType")])
            },
            Delegate: {
                index: 2,
                layout: y.n_([y.Jq("instruction")])
            },
            Split: {
                index: 3,
                layout: y.n_([y.Jq("instruction"), y.gM("lamports")])
            },
            Withdraw: {
                index: 4,
                layout: y.n_([y.Jq("instruction"), y.gM("lamports")])
            },
            Deactivate: {
                index: 5,
                layout: y.n_([y.Jq("instruction")])
            },
            Merge: {
                index: 7,
                layout: y.n_([y.Jq("instruction")])
            },
            AuthorizeWithSeed: {
                index: 8,
                layout: y.n_([y.Jq("instruction"), D("newAuthorized"), y.Jq("stakeAuthorizationType"), H("authoritySeed"), D("authorityOwner")])
            }
        })
          , rM = Object.freeze({
            Staker: {
                index: 0
            },
            Withdrawer: {
                index: 1
            }
        });
        class rG {
            constructor() {}
            static initialize(e) {
                let {stakePubkey: t, authorized: r, lockup: i} = e
                  , n = i || rz.default
                  , s = eR(rq.Initialize, {
                    authorized: {
                        staker: E(r.staker.toBuffer()),
                        withdrawer: E(r.withdrawer.toBuffer())
                    },
                    lockup: {
                        unixTimestamp: n.unixTimestamp,
                        epoch: n.epoch,
                        custodian: E(n.custodian.toBuffer())
                    }
                });
                return new ea({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ey,
                        isSigner: !1,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: s
                })
            }
            static createAccountWithSeed(e) {
                let t = new ec;
                t.add(eW.createAccountWithSeed({
                    fromPubkey: e.fromPubkey,
                    newAccountPubkey: e.stakePubkey,
                    basePubkey: e.basePubkey,
                    seed: e.seed,
                    lamports: e.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                let {stakePubkey: r, authorized: i, lockup: n} = e;
                return t.add(this.initialize({
                    stakePubkey: r,
                    authorized: i,
                    lockup: n
                }))
            }
            static createAccount(e) {
                let t = new ec;
                t.add(eW.createAccount({
                    fromPubkey: e.fromPubkey,
                    newAccountPubkey: e.stakePubkey,
                    lamports: e.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                let {stakePubkey: r, authorized: i, lockup: n} = e;
                return t.add(this.initialize({
                    stakePubkey: r,
                    authorized: i,
                    lockup: n
                }))
            }
            static delegate(e) {
                let {stakePubkey: t, authorizedPubkey: r, votePubkey: i} = e
                  , n = eR(rq.Delegate);
                return new ec().add({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: ed,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: ek,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: rK,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: n
                })
            }
            static authorize(e) {
                let {stakePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: i, stakeAuthorizationType: n, custodianPubkey: s} = e
                  , o = eR(rq.Authorize, {
                    newAuthorized: E(i.toBuffer()),
                    stakeAuthorizationType: n.index
                })
                  , a = [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: ed,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: r,
                    isSigner: !0,
                    isWritable: !1
                }];
                return s && a.push({
                    pubkey: s,
                    isSigner: !0,
                    isWritable: !1
                }),
                new ec().add({
                    keys: a,
                    programId: this.programId,
                    data: o
                })
            }
            static authorizeWithSeed(e) {
                let {stakePubkey: t, authorityBase: r, authoritySeed: i, authorityOwner: n, newAuthorizedPubkey: s, stakeAuthorizationType: o, custodianPubkey: a} = e
                  , c = eR(rq.AuthorizeWithSeed, {
                    newAuthorized: E(s.toBuffer()),
                    stakeAuthorizationType: o.index,
                    authoritySeed: i,
                    authorityOwner: E(n.toBuffer())
                })
                  , u = [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: r,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: ed,
                    isSigner: !1,
                    isWritable: !1
                }];
                return a && u.push({
                    pubkey: a,
                    isSigner: !0,
                    isWritable: !1
                }),
                new ec().add({
                    keys: u,
                    programId: this.programId,
                    data: c
                })
            }
            static splitInstruction(e) {
                let {stakePubkey: t, authorizedPubkey: r, splitStakePubkey: i, lamports: n} = e
                  , s = eR(rq.Split, {
                    lamports: n
                });
                return new ea({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: s
                })
            }
            static split(e, t) {
                let r = new ec;
                return r.add(eW.createAccount({
                    fromPubkey: e.authorizedPubkey,
                    newAccountPubkey: e.splitStakePubkey,
                    lamports: t,
                    space: this.space,
                    programId: this.programId
                })),
                r.add(this.splitInstruction(e))
            }
            static splitWithSeed(e, t) {
                let {stakePubkey: r, authorizedPubkey: i, splitStakePubkey: n, basePubkey: s, seed: o, lamports: a} = e
                  , c = new ec;
                return c.add(eW.allocate({
                    accountPubkey: n,
                    basePubkey: s,
                    seed: o,
                    space: this.space,
                    programId: this.programId
                })),
                t && t > 0 && c.add(eW.transfer({
                    fromPubkey: e.authorizedPubkey,
                    toPubkey: n,
                    lamports: t
                })),
                c.add(this.splitInstruction({
                    stakePubkey: r,
                    authorizedPubkey: i,
                    splitStakePubkey: n,
                    lamports: a
                }))
            }
            static merge(e) {
                let {stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: i} = e
                  , n = eR(rq.Merge);
                return new ec().add({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ed,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: ek,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: n
                })
            }
            static withdraw(e) {
                let {stakePubkey: t, authorizedPubkey: r, toPubkey: i, lamports: n, custodianPubkey: s} = e
                  , o = eR(rq.Withdraw, {
                    lamports: n
                })
                  , a = [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: ed,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: ek,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: r,
                    isSigner: !0,
                    isWritable: !1
                }];
                return s && a.push({
                    pubkey: s,
                    isSigner: !0,
                    isWritable: !1
                }),
                new ec().add({
                    keys: a,
                    programId: this.programId,
                    data: o
                })
            }
            static deactivate(e) {
                let {stakePubkey: t, authorizedPubkey: r} = e
                  , i = eR(rq.Deactivate);
                return new ec().add({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ed,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: i
                })
            }
        }
        rG.programId = new K("Stake11111111111111111111111111111111111111"),
        rG.space = 200;
        class rj {
            constructor(e, t, r, i) {
                this.nodePubkey = void 0,
                this.authorizedVoter = void 0,
                this.authorizedWithdrawer = void 0,
                this.commission = void 0,
                this.nodePubkey = e,
                this.authorizedVoter = t,
                this.authorizedWithdrawer = r,
                this.commission = i
            }
        }
        class rJ {
            constructor() {}
            static decodeInstructionType(e) {
                let t;
                this.checkProgramId(e.programId);
                let r = y.Jq("instruction").decode(e.data);
                for (let[e,i] of Object.entries(rV))
                    if (i.index == r) {
                        t = e;
                        break
                    }
                if (!t)
                    throw Error("Instruction type incorrect; not a VoteInstruction");
                return t
            }
            static decodeInitializeAccount(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 4);
                let {voteInit: t} = ex(rV.InitializeAccount, e.data);
                return {
                    votePubkey: e.keys[0].pubkey,
                    nodePubkey: e.keys[3].pubkey,
                    voteInit: new rj(new K(t.nodePubkey),new K(t.authorizedVoter),new K(t.authorizedWithdrawer),t.commission)
                }
            }
            static decodeAuthorize(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {newAuthorized: t, voteAuthorizationType: r} = ex(rV.Authorize, e.data);
                return {
                    votePubkey: e.keys[0].pubkey,
                    authorizedPubkey: e.keys[2].pubkey,
                    newAuthorizedPubkey: new K(t),
                    voteAuthorizationType: {
                        index: r
                    }
                }
            }
            static decodeAuthorizeWithSeed(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {voteAuthorizeWithSeedArgs: {currentAuthorityDerivedKeyOwnerPubkey: t, currentAuthorityDerivedKeySeed: r, newAuthorized: i, voteAuthorizationType: n}} = ex(rV.AuthorizeWithSeed, e.data);
                return {
                    currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
                    currentAuthorityDerivedKeyOwnerPubkey: new K(t),
                    currentAuthorityDerivedKeySeed: r,
                    newAuthorizedPubkey: new K(i),
                    voteAuthorizationType: {
                        index: n
                    },
                    votePubkey: e.keys[0].pubkey
                }
            }
            static decodeWithdraw(e) {
                this.checkProgramId(e.programId),
                this.checkKeyLength(e.keys, 3);
                let {lamports: t} = ex(rV.Withdraw, e.data);
                return {
                    votePubkey: e.keys[0].pubkey,
                    authorizedWithdrawerPubkey: e.keys[2].pubkey,
                    lamports: t,
                    toPubkey: e.keys[1].pubkey
                }
            }
            static checkProgramId(e) {
                if (!e.equals(r$.programId))
                    throw Error("invalid instruction; programId is not VoteProgram")
            }
            static checkKeyLength(e, t) {
                if (e.length < t)
                    throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
            }
        }
        let rV = Object.freeze({
            InitializeAccount: {
                index: 0,
                layout: y.n_([y.Jq("instruction"), ( (e="voteInit") => y.n_([D("nodePubkey"), D("authorizedVoter"), D("authorizedWithdrawer"), y.u8("commission")], e))()])
            },
            Authorize: {
                index: 1,
                layout: y.n_([y.Jq("instruction"), D("newAuthorized"), y.Jq("voteAuthorizationType")])
            },
            Withdraw: {
                index: 3,
                layout: y.n_([y.Jq("instruction"), y.gM("lamports")])
            },
            UpdateValidatorIdentity: {
                index: 4,
                layout: y.n_([y.Jq("instruction")])
            },
            AuthorizeWithSeed: {
                index: 10,
                layout: y.n_([y.Jq("instruction"), ( (e="voteAuthorizeWithSeedArgs") => y.n_([y.Jq("voteAuthorizationType"), D("currentAuthorityDerivedKeyOwnerPubkey"), H("currentAuthorityDerivedKeySeed"), D("newAuthorized")], e))()])
            }
        })
          , rD = Object.freeze({
            Voter: {
                index: 0
            },
            Withdrawer: {
                index: 1
            }
        });
        class r$ {
            constructor() {}
            static initializeAccount(e) {
                let {votePubkey: t, nodePubkey: r, voteInit: i} = e
                  , n = eR(rV.InitializeAccount, {
                    voteInit: {
                        nodePubkey: E(i.nodePubkey.toBuffer()),
                        authorizedVoter: E(i.authorizedVoter.toBuffer()),
                        authorizedWithdrawer: E(i.authorizedWithdrawer.toBuffer()),
                        commission: i.commission
                    }
                });
                return new ea({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ey,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: ed,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: n
                })
            }
            static createAccount(e) {
                let t = new ec;
                return t.add(eW.createAccount({
                    fromPubkey: e.fromPubkey,
                    newAccountPubkey: e.votePubkey,
                    lamports: e.lamports,
                    space: this.space,
                    programId: this.programId
                })),
                t.add(this.initializeAccount({
                    votePubkey: e.votePubkey,
                    nodePubkey: e.voteInit.nodePubkey,
                    voteInit: e.voteInit
                }))
            }
            static authorize(e) {
                let {votePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: i, voteAuthorizationType: n} = e
                  , s = eR(rV.Authorize, {
                    newAuthorized: E(i.toBuffer()),
                    voteAuthorizationType: n.index
                });
                return new ec().add({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ed,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: s
                })
            }
            static authorizeWithSeed(e) {
                let {currentAuthorityDerivedKeyBasePubkey: t, currentAuthorityDerivedKeyOwnerPubkey: r, currentAuthorityDerivedKeySeed: i, newAuthorizedPubkey: n, voteAuthorizationType: s, votePubkey: o} = e
                  , a = eR(rV.AuthorizeWithSeed, {
                    voteAuthorizeWithSeedArgs: {
                        currentAuthorityDerivedKeyOwnerPubkey: E(r.toBuffer()),
                        currentAuthorityDerivedKeySeed: i,
                        newAuthorized: E(n.toBuffer()),
                        voteAuthorizationType: s.index
                    }
                });
                return new ec().add({
                    keys: [{
                        pubkey: o,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ed,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: t,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: a
                })
            }
            static withdraw(e) {
                let {votePubkey: t, authorizedWithdrawerPubkey: r, lamports: i, toPubkey: n} = e
                  , s = eR(rV.Withdraw, {
                    lamports: i
                });
                return new ec().add({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: s
                })
            }
            static safeWithdraw(e, t, r) {
                if (e.lamports > t - r)
                    throw Error("Withdraw will leave vote account with insufficient funds.");
                return r$.withdraw(e)
            }
            static updateValidatorIdentity(e) {
                let {votePubkey: t, authorizedWithdrawerPubkey: r, nodePubkey: i} = e
                  , n = eR(rV.UpdateValidatorIdentity);
                return new ec().add({
                    keys: [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: n
                })
            }
        }
        r$.programId = new K("Vote111111111111111111111111111111111111111"),
        r$.space = 3762;
        let rH = new K("Va1idator1nfo111111111111111111111111111111")
          , rF = (0,
        f.dt)({
            name: (0,
            f.Z_)(),
            website: (0,
            f.jt)((0,
            f.Z_)()),
            details: (0,
            f.jt)((0,
            f.Z_)()),
            iconUrl: (0,
            f.jt)((0,
            f.Z_)()),
            keybaseUsername: (0,
            f.jt)((0,
            f.Z_)())
        });
        class rZ {
            constructor(e, t) {
                this.key = void 0,
                this.info = void 0,
                this.key = e,
                this.info = t
            }
            static fromConfigData(e) {
                let t = [...e];
                if (2 !== F(t))
                    return null;
                let r = [];
                for (let e = 0; e < 2; e++) {
                    let e = new K(et(t, 0, O))
                      , i = 1 === ee(t);
                    r.push({
                        publicKey: e,
                        isSigner: i
                    })
                }
                if (r[0].publicKey.equals(rH) && r[1].isSigner) {
                    let e = JSON.parse(H().decode(a.Buffer.from(t)));
                    return (0,
                    f.hu)(e, rF),
                    new rZ(r[1].publicKey,e)
                }
                return null
            }
        }
        let rX = new K("Vote111111111111111111111111111111111111111")
          , rY = y.n_([D("nodePubkey"), D("authorizedWithdrawer"), y.u8("commission"), y._O(), y.A9(y.n_([y._O("slot"), y.Jq("confirmationCount")]), y.cv(y.Jq(), -8), "votes"), y.u8("rootSlotValid"), y._O("rootSlot"), y._O(), y.A9(y.n_([y._O("epoch"), D("authorizedVoter")]), y.cv(y.Jq(), -8), "authorizedVoters"), y.n_([y.A9(y.n_([D("authorizedPubkey"), y._O("epochOfLastAuthorizedSwitch"), y._O("targetEpoch")]), 32, "buf"), y._O("idx"), y.u8("isEmpty")], "priorVoters"), y._O(), y.A9(y.n_([y._O("epoch"), y._O("credits"), y._O("prevCredits")]), y.cv(y.Jq(), -8), "epochCredits"), y.n_([y._O("slot"), y._O("timestamp")], "lastTimestamp")]);
        class rQ {
            constructor(e) {
                this.nodePubkey = void 0,
                this.authorizedWithdrawer = void 0,
                this.commission = void 0,
                this.rootSlot = void 0,
                this.votes = void 0,
                this.authorizedVoters = void 0,
                this.priorVoters = void 0,
                this.epochCredits = void 0,
                this.lastTimestamp = void 0,
                this.nodePubkey = e.nodePubkey,
                this.authorizedWithdrawer = e.authorizedWithdrawer,
                this.commission = e.commission,
                this.rootSlot = e.rootSlot,
                this.votes = e.votes,
                this.authorizedVoters = e.authorizedVoters,
                this.priorVoters = e.priorVoters,
                this.epochCredits = e.epochCredits,
                this.lastTimestamp = e.lastTimestamp
            }
            static fromAccountData(e) {
                let t = rY.decode(E(e), 4)
                  , r = t.rootSlot;
                return t.rootSlotValid || (r = null),
                new rQ({
                    nodePubkey: new K(t.nodePubkey),
                    authorizedWithdrawer: new K(t.authorizedWithdrawer),
                    commission: t.commission,
                    votes: t.votes,
                    rootSlot: r,
                    authorizedVoters: t.authorizedVoters.map(r0),
                    priorVoters: function({buf: e, idx: t, isEmpty: r}) {
                        return r ? [] : [...e.slice(t + 1).map(r1), ...e.slice(0, t).map(r1)]
                    }(t.priorVoters),
                    epochCredits: t.epochCredits,
                    lastTimestamp: t.lastTimestamp
                })
            }
        }
        function r0({authorizedVoter: e, epoch: t}) {
            return {
                epoch: t,
                authorizedVoter: new K(e)
            }
        }
        function r1({authorizedPubkey: e, epochOfLastAuthorizedSwitch: t, targetEpoch: r}) {
            return {
                authorizedPubkey: new K(e),
                epochOfLastAuthorizedSwitch: t,
                targetEpoch: r
            }
        }
        let r2 = {
            http: {
                devnet: "http://api.devnet.solana.com",
                testnet: "http://api.testnet.solana.com",
                "mainnet-beta": "http://api.mainnet-beta.solana.com/"
            },
            https: {
                devnet: "https://api.devnet.solana.com",
                testnet: "https://api.testnet.solana.com",
                "mainnet-beta": "https://api.mainnet-beta.solana.com/"
            }
        };
        function r8(e, t) {
            let r = !1 === t ? "http" : "https";
            if (!e)
                return r2[r].devnet;
            let i = r2[r][e];
            if (!i)
                throw Error(`Unknown ${r} cluster: ${e}`);
            return i
        }
        async function r5(e, t, r, i) {
            let n, s;
            r && Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight") ? (n = r,
            s = i) : r && Object.prototype.hasOwnProperty.call(r, "nonceValue") ? (n = r,
            s = i) : s = r;
            let o = s && {
                skipPreflight: s.skipPreflight,
                preflightCommitment: s.preflightCommitment || s.commitment,
                minContextSlot: s.minContextSlot
            }
              , a = await e.sendRawTransaction(t, o)
              , c = s && s.commitment
              , u = n ? e.confirmTransaction(n, c) : e.confirmTransaction(a, c)
              , l = (await u).value;
            if (l.err) {
                if (null != a)
                    throw new eS({
                        action: o?.skipPreflight ? "send" : "simulate",
                        signature: a,
                        transactionMessage: `Status: (${JSON.stringify(l)})`
                    });
                throw Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`)
            }
            return a
        }
        let r3 = 1e9
    }
}]);
