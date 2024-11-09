(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3185], {
    35883: function() {},
    89214: function() {},
    85568: function() {},
    79543: function(n, e, t) {
        Promise.resolve().then(t.bind(t, 64404)),
        Promise.resolve().then(t.bind(t, 27640)),
        Promise.resolve().then(t.bind(t, 90239)),
        Promise.resolve().then(t.t.bind(t, 84080, 23)),
        Promise.resolve().then(t.bind(t, 88726)),
        Promise.resolve().then(t.t.bind(t, 45161, 23)),
        Promise.resolve().then(t.bind(t, 51026)),
        Promise.resolve().then(t.t.bind(t, 15204, 23))
    },
    50800: function(n, e, t) {
        "use strict";
        t.d(e, {
            $_: function() {
                return w
            },
            Aq: function() {
                return h
            },
            FW: function() {
                return l
            },
            NX: function() {
                return i
            },
            PD: function() {
                return s
            },
            Sl: function() {
                return u
            },
            UX: function() {
                return p
            },
            VK: function() {
                return a
            },
            Xb: function() {
                return d
            },
            a7: function() {
                return P
            },
            ap: function() {
                return o
            },
            c4: function() {
                return m
            },
            ld: function() {
                return v
            },
            n9: function() {
                return f
            },
            t: function() {
                return b
            },
            t$: function() {
                return F
            },
            xb: function() {
                return c
            }
        });
        var r = t(25566);
        let i = "91a120dfcdcb5148b9d9a34bd9765cbe"
          , o = "https://indulgent-nameless-breeze.solana-mainnet.quiknode.pro/2b6505ab7ab18cc191980bc71258657098ea2b53"
          , u = !1
          , c = "0x85eE86215B95691655D2AD39020F7CC243a2369b"
          , s = "0x31d5CEba2E19A1Eb98e2c0814d037De2CdaA15b5"
          , d = "FREEdCqK6JZUUnWdaXkH5qtpPVeRoXvmwTjZiFsAjSaH"
          , f = "PSFDW8tuCXkm9cSoYz3gisXAp8po5Gr5L3Dw4MmTtNY"
          , a = "PSFF69pK92p5KTYbkNs31gtBphG8qPd36NNdXHUYgAt"
          , b = "65WXtaoH5STjjcJYpdyMdko3kJ43e82d6x2qzGWh94gy";
        r.env.API_URL,
        r.env.API2_URL;
        let l = "2025-12-24T00:00:00Z"
          , m = "2024-11-09T16:00:00Z"
          , h = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
          , p = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
          , w = "0x55d398326f99059fF775485246999027B3197955"
          , F = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
          , P = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
          , v = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
    },
    82890: function(n, e, t) {
        "use strict";
        t.d(e, {
            Hx: function() {
                return c
            },
            QW: function() {
                return u
            },
            vc: function() {
                return s
            }
        });
        var r = t(86291)
          , i = t(91900)
          , o = t(50800);
        let u = o.Sl ? [i.Fox, i.d2Y, i.L5L] : [i.RJ0, i.eGR, i.ueV]
          , c = new r.K({
            ssr: !0,
            projectId: o.NX,
            networks: u
        })
          , s = c.wagmiConfig
    },
    51026: function(n, e, t) {
        "use strict";
        var r = t(57437)
          , i = t(66094)
          , o = t(93191)
          , u = t(61874)
          , c = t(82890)
          , s = t(50800);
        t(2265);
        var d = t(94738);
        let[f] = c.QW
          , a = new i.S;
        if (!s.NX)
            throw Error("Project ID is not defined");
        (0,
        u.cz)({
            adapters: [c.Hx],
            projectId: s.NX,
            networks: c.QW,
            defaultNetwork: f,
            metadata: {
                name: "Freedum Fighters",
                description: "Freedum Fighters DAPP",
                url: "https://www.freedumfighters.com",
                icons: ["https://www.freedumfighters.com/assets/images/logo.png"]
            },
            features: {
                analytics: !1,
                swaps: !1,
                email: !1,
                socials: []
            }
        }),
        e.default = function(n) {
            let {children: e} = n;
            return (0,
            r.jsx)(d.F, {
                config: c.Hx.wagmiConfig,
                children: (0,
                r.jsx)(o.aH, {
                    client: a,
                    children: e
                })
            })
        }
    },
    15204: function() {}
}, function(n) {
    n.O(0, [4426, 6764, 2044, 7671, 9159, 3343, 2971, 7023, 1744], function() {
        return n(n.s = 79543)
    }),
    _N_E = n.O()
}
]);
