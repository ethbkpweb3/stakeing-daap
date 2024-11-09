(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4029], {
    35883: function() {},
    46601: function() {},
    89214: function() {},
    85568: function() {},
    19618: function(e, t, a) {
        "use strict";
        a.d(t, {
            default: function() {
                return K
            }
        });
        var n = a(57437)
          , s = a(66648)
          , i = a(87138)
          , l = a(16463)
          , r = a(2265)
          , o = a(88726)
          , u = a(90089)
          , c = a(26408)
          , d = a(13320)
          , p = a(28782)
          , m = a(28489)
          , A = a(61811)
          , y = a(87099)
          , g = a(45429)
          , x = a(20670)
          , b = a(38472)
          , f = a(96164)
          , h = a(17439)
          , w = a(26735)
          , v = a(468)
          , M = a(85313)
          , k = a(57172)
          , N = a(41202)
          , T = {
            src: "/_next/static/media/kamacop.c6532673.png",
            height: 1280,
            width: 836,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAS1BMVEUVpuoMpd8pscwVqukatvEup8tEgYtMaXEAw/8Rw/sjq9cmmbcptuYA1P8Dre4AnuUypMuBeHY0s9sA2fsC0v9ls81MmqhrlaKItsSCFq0cAAAAFXRSTlMrev0Mi+b+ABhdle+zBks91frSjndRWmFzAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAM0lEQVR4nAXBiQGAIAwAseNtKwIKqOw/qQlqcynmszfce2dHT19pSNxnReIzFDnSBQKEHyaiAXYqA2ejAAAAAElFTkSuQmCC",
            blurWidth: 5,
            blurHeight: 8
        }
          , S = a(92472)
          , j = {
            src: "/_next/static/media/magatron.04a01167.png",
            height: 1440,
            width: 1199,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAeFBMVEWooQ//5gC/vB712wi2qSawnjKbky3RyBtQS2y0pieuoi+WjCnj1RDMvhn/5QDv1gibmVtkYlhqSY/Nvx85O6dIRYn94QqgkU6UikvDqDCflUfFuSVyqFbv3gOkpU775w3gyAb/6gD/3gb/7QDYyRfGvSK7sCd9r4Y6k6roAAAAJHRSTlOLGvz8zZT1/Pv7vrH+4Kjp/vr++P79lfPLmcGs/sr7pHSSdIC5wmaIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nAXBBQKAIAAEsKNTsbsF/P8P3UBm8XJLUKrIvH9QRLXR7CBN9R3SYc99o9ONk+quTgNWZsY2cMAu1yTwA3fDA8oPSDyDAAAAAElFTkSuQmCC",
            blurWidth: 7,
            blurHeight: 8
        }
          , D = a(41743)
          , E = a(50800)
          , B = a(82890)
          , U = a(11301)
          , F = a(64150)
          , C = a(28521)
          , R = a(93707)
          , P = a.n(R)
          , I = a(61874);
        let z = {
            ethereum: M.Z,
            solana: k.Z
        }
          , W = E.Xb
          , Y = new g.PublicKey(E.n9)
          , O = new g.PublicKey(E.VK);
        function K() {
            var e, t, a, g, M, k, R, K, V, L, G, Q, q, X, J;
            let Z = (0,
            l.useSearchParams)().get("pool")
              , {t: H} = (0,
            u.$G)()
              , {address: _, chainId: $} = (0,
            w.m)()
              , [ee,et] = (0,
            r.useState)({})
              , [ea,en] = (0,
            r.useState)({})
              , {open: es, close: ei} = (0,
            I.Ig)()
              , {writeContractAsync: el} = (0,
            v.S)()
              , [er,eo] = (0,
            r.useState)(!1)
              , [eu,ec] = (0,
            r.useState)({})
              , [ed,ep] = (0,
            r.useState)()
              , {connected: em, publicKey: eA} = (0,
            p.O)()
              , ey = (0,
            m.z)()
              , {connection: eg} = (0,
            A.R)()
              , [ex,eb] = (0,
            r.useState)("ethereum")
              , ef = (0,
            r.useRef)(null)
              , eh = null == eA ? void 0 : eA.toString()
              , ew = (0,
            p.O)()
              , [ev,eM] = (0,
            r.useTransition)();
            (0,
            r.useEffect)( () => {
                if (!ey)
                    return;
                let e = new d.Y7(eg,ey,{
                    preflightCommitment: "processed"
                });
                ep(new d.$r(C.x,W,e))
            }
            , [ey, eg]);
            let ek = async () => {
                try {
                    let {data: e} = await b.Z.get("/api/presale-state");
                    ec(e)
                } catch (e) {
                    console.error("Error fetching presale state", e)
                }
                setTimeout( () => {
                    ek()
                }
                , 6e4)
            }
            ;
            (0,
            r.useEffect)( () => {
                ek()
            }
            , []),
            (0,
            r.useEffect)( () => {
                if (_ || eh) {
                    if ("ethereum" === ex && !_ || "solana" === ex && !eh) {
                        et({}),
                        en({});
                        return
                    }
                    b.Z.post("/api/buys", {
                        address: "ethereum" === ex ? _ : eh
                    }).then(e => {
                        let {data: t} = e;
                        et(t.magaData),
                        en(t.kamaData)
                    }
                    )
                }
            }
            , [_, eh, ex, er]);
            let eN = (0,
            r.useMemo)( () => (ee.totalSold || 0) - (ee.remainingToStake || 0), [ee])
              , eT = (0,
            r.useMemo)( () => (ea.totalSold || 0) - (ea.remainingToStake || 0), [ea])
              , eS = async () => {
                eM(async () => {
                    if ("ethereum" === ex) {
                        if (!_) {
                            es();
                            return
                        }
                    } else if (!em) {
                        if (ef.current) {
                            let e = ef.current.children[0].children[0];
                            e && e.click()
                        }
                        return
                    }
                    if ("magatron" === Z && (null == ee ? void 0 : ee.remainingToStake) <= 0 || "kamacop" === Z && (null == ee ? void 0 : ee.remainingToStake) <= 0) {
                        o.ZP.error("Invalid staking amount");
                        return
                    }
                    if ("solana" === ex) {
                        if (!ew || !ed) {
                            o.ZP.error("Wallet or program is not defined");
                            return
                        }
                        await (0,
                        F.J)(ew, ed, "magatron" === Z ? Y : O, "magatron" === Z ? null == ee ? void 0 : ee.remainingToStake : null == ea ? void 0 : ea.remainingToStake)
                    } else {
                        let e = await el({
                            chainId: $,
                            abi: U,
                            address: "magatron" === Z ? E.xb : E.PD,
                            functionName: "stakeTokens",
                            args: [(0,
                            h.v)(("magatron" === Z ? null == ee ? void 0 : ee.remainingToStake : null == ea ? void 0 : ea.remainingToStake).toString(), 6)]
                        });
                        await (0,
                        x.e)(B.vc, {
                            hash: e
                        })
                    }
                    eo(e => !e)
                }
                )
            }
            ;
            return "magatron" !== Z && "kamacop" !== Z ? (0,
            n.jsx)(n.Fragment, {}) : (0,
            n.jsxs)("div", {
                className: "relative py-16",
                children: [(0,
                n.jsx)(s.default, {
                    src: N.Z,
                    alt: "Background",
                    className: "absolute top-0 left-0 object-cover size-full"
                }), (0,
                n.jsxs)("div", {
                    className: "container relative z-10 sm:!px-2.5",
                    children: [(0,
                    n.jsx)("h1", {
                        className: "relative z-10 text-center capitalize",
                        children: H("stake your vote")
                    }), (0,
                    n.jsx)(s.default, {
                        src: "kamacop" === Z ? T : j,
                        alt: Z,
                        className: "mx-auto -mt-20 h-[700px] w-fit sm:h-fit sm:w-[300px]"
                    }), (0,
                    n.jsxs)("div", {
                        className: "grid grid-cols-2 gap-5 -mt-80 md:grid-cols-1 sm:-mt-20",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "space-y-10 bg-[#001563] px-[30px] py-12 sm:p-5",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "space-y-3.5",
                                children: [(0,
                                n.jsxs)("hgroup", {
                                    className: "space-y-3.5",
                                    children: [(0,
                                    n.jsx)("h3", {
                                        className: "text-center capitalize text-4xl/10 sm:text-3xl",
                                        children: H("choose your side")
                                    }), (0,
                                    n.jsx)("p", {
                                        className: (0,
                                        f.m6)("text-center text-[21px]/[1.2] font-bold first-letter:capitalize sm:text-base", P().className),
                                        children: H("save a country from falling into the hands of the lesser evil")
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "flex items-center justify-center gap-16",
                                    children: [(0,
                                    n.jsx)(i.default, {
                                        href: "/stake?pool=magatron",
                                        children: (0,
                                        n.jsx)(s.default, {
                                            src: D.Z,
                                            alt: "Magatron Badge",
                                            className: (0,
                                            f.m6)("h-fit w-56 cursor-pointer", "kamacop" === Z ? "opacity-40" : ""),
                                            quality: 100
                                        })
                                    }), (0,
                                    n.jsx)(i.default, {
                                        href: "/stake?pool=kamacop",
                                        children: (0,
                                        n.jsx)(s.default, {
                                            src: S.Z,
                                            alt: "Kamacop Badge",
                                            className: (0,
                                            f.m6)("h-fit w-56 cursor-pointer", "magatron" === Z ? "opacity-40" : ""),
                                            quality: 100
                                        })
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "relative mx-4 flex h-4 gap-3 overflow-hidden rounded-full border-2 border-white bg-[#0009EF] pl-3 sm:h-3",
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "absolute -left-0.5 -top-0.5 h-4 rounded-full border-2 border-white bg-[#F00] sm:h-3",
                                        style: {
                                            width: "".concat(((null == eu ? void 0 : null === (e = eu.magaPresaleState) || void 0 === e ? void 0 : e.tokens_staked) || 0) / (((null == eu ? void 0 : null === (t = eu.magaPresaleState) || void 0 === t ? void 0 : t.tokens_staked) || 0) + ((null == eu ? void 0 : null === (a = eu.kamaPresaleState) || void 0 === a ? void 0 : a.tokens_staked) || 0)) * 100, "%")
                                        }
                                    }), [...Array(100)].map( (e, t) => (0,
                                    n.jsx)("div", {
                                        className: "relative z-10 -mt-2 h-6 w-0.5 flex-shrink-0 rotate-45 bg-white"
                                    }, "progress-bar-".concat(t)))]
                                })]
                            }), (0,
                            n.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0,
                                n.jsx)("h3", {
                                    className: "text-center capitalize text-4xl/10 sm:text-3xl",
                                    children: H("staking")
                                }), (0,
                                n.jsx)("div", {
                                    className: "flex items-center justify-center gap-6",
                                    children: Object.keys(z).map(e => (0,
                                    n.jsx)(s.default, {
                                        src: z[e],
                                        alt: e,
                                        className: (0,
                                        f.m6)("box-content size-12 cursor-pointer rounded-full shadow-[2px_2px_5.9px_#00000066] sm:size-9", e === ex ? "ring-[4px] ring-[#FFA14A] sm:ring-2" : ""),
                                        quality: 100,
                                        onClick: () => {
                                            eb(e)
                                        }
                                    }, e))
                                }), (0,
                                n.jsxs)("div", {
                                    className: "flex h-14 items-center justify-between bg-[#0138FF] px-6",
                                    children: [(0,
                                    n.jsx)("p", {
                                        className: (0,
                                        f.m6)("text-lg/[1.2] capitalize opacity-60 sm:text-base", P().className),
                                        children: H("your $DUM amount")
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "text-2xl/[1.2] sm:text-lg",
                                        children: null === (g = "magatron" === Z ? null == ee ? void 0 : ee.totalSold : null == ea ? void 0 : ea.totalSold) || void 0 === g ? void 0 : g.toLocaleString()
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "flex h-14 items-center justify-between bg-[#0138FF] px-6",
                                    children: [(0,
                                    n.jsxs)("p", {
                                        className: (0,
                                        f.m6)("text-lg/[1.2] sm:text-base", P().className),
                                        children: [(0,
                                        n.jsx)("span", {
                                            className: "capitalize opacity-60",
                                            children: H("staking period")
                                        }), " ", (0,
                                        n.jsx)("a", {
                                            "data-tooltip-id": "presale-read-more",
                                            className: "ml-1 text-xl font-bold text-white",
                                            children: "?"
                                        })]
                                    }), (0,
                                    n.jsxs)("p", {
                                        className: "text-2xl/[1.2] sm:text-lg",
                                        title: "",
                                        children: ["7 ", H("days")]
                                    }), (0,
                                    n.jsx)(c.u, {
                                        id: "presale-read-more",
                                        place: "top",
                                        children: (0,
                                        n.jsx)("div", {
                                            className: (0,
                                            f.m6)("text-base first-letter:capitalize", P().className),
                                            children: H("every balance change +/- results in 7 day re-locking")
                                        })
                                    })]
                                }), (0,
                                n.jsx)("div", {
                                    className: "grid grid-cols-2 gap-6",
                                    children: (0,
                                    n.jsx)("button", {
                                        className: "col-span-2 h-14 rounded-[10px] border-2 border-[#888] bg-white text-[21px]/[1.2] capitalize text-[#0138FF] disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg",
                                        disabled: ev,
                                        onClick: eS,
                                        children: "ethereum" === ex ? H(_ ? "stake now" : "connect wallet") : em ? "stake now" : "connect wallet"
                                    })
                                })]
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "space-y-5",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "grid grid-cols-8 gap-4 border-[3px] border-[#242424] bg-white p-[30px] sm:p-5",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "col-span-8 flex h-[70px] items-center justify-center bg-[#F00] sm:h-14",
                                    children: (0,
                                    n.jsx)("h3", {
                                        className: "capitalize text-4xl/10 sm:text-3xl",
                                        children: H("statistics")
                                    })
                                }), (0,
                                n.jsxs)("div", {
                                    className: "col-span-3 flex h-20 flex-col items-center justify-center border-4 border-[#F00]/40 bg-[#D9D9D9]/40",
                                    children: [(0,
                                    n.jsxs)("p", {
                                        className: "text-center text-2xl/[1.2] text-[#190B07] sm:text-base",
                                        children: ["magatron" === Z ? null == eu ? void 0 : null === (k = eu.magaPresaleState) || void 0 === k ? void 0 : null === (M = k.APY) || void 0 === M ? void 0 : M.toFixed(2) : null == eu ? void 0 : null === (K = eu.kamaPresaleState) || void 0 === K ? void 0 : null === (R = K.APY) || void 0 === R ? void 0 : R.toFixed(2), "%"]
                                    }), (0,
                                    n.jsxs)("p", {
                                        className: (0,
                                        f.m6)("text-center text-lg/[1.2] font-bold capitalize text-[#929292] sm:text-sm", P().className),
                                        children: [H("currently"), " APY"]
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "col-span-5 flex h-20 flex-col items-center justify-center bg-[#D9D9D9]/40",
                                    children: [(0,
                                    n.jsx)("p", {
                                        className: "text-center text-2xl/[1.2] text-[#190B07] sm:text-base",
                                        children: null === (V = ((null == eu ? void 0 : null === (L = eu.magaPresaleState) || void 0 === L ? void 0 : L.tokens_staked) || 0) + ((null == eu ? void 0 : null === (G = eu.kamaPresaleState) || void 0 === G ? void 0 : G.tokens_staked) || 0)) || void 0 === V ? void 0 : V.toLocaleString()
                                    }), (0,
                                    n.jsx)("p", {
                                        className: (0,
                                        f.m6)("text-center text-lg/[1.2] font-bold capitalize text-[#929292] sm:text-sm", P().className),
                                        children: H("total $DUM staked")
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "col-span-5 flex h-20 flex-col items-center justify-center bg-[#D9D9D9]/40",
                                    children: [(0,
                                    n.jsx)("p", {
                                        className: "text-center text-2xl/[1.2] text-[#190B07] sm:text-base",
                                        children: "0"
                                    }), (0,
                                    n.jsxs)("p", {
                                        className: (0,
                                        f.m6)("text-center text-lg/[1.2] font-bold capitalize text-[#929292] sm:text-sm", P().className),
                                        children: [H("total rewards paid"), "(DUM)"]
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "col-span-3 flex h-20 flex-col items-center justify-center bg-[#D9D9D9]/40",
                                    children: [(0,
                                    n.jsxs)("p", {
                                        className: "text-center text-2xl/[1.2] text-[#190B07] sm:text-base",
                                        children: [((((null == eu ? void 0 : null === (Q = eu.magaPresaleState) || void 0 === Q ? void 0 : Q.tokens_staked) || 0) + ((null == eu ? void 0 : null === (q = eu.kamaPresaleState) || void 0 === q ? void 0 : q.tokens_staked) || 0)) / 27e10 * 100).toLocaleString(void 0, {
                                            maximumFractionDigits: 5,
                                            minimumFractionDigits: 0
                                        }), "%"]
                                    }), (0,
                                    n.jsx)("p", {
                                        className: (0,
                                        f.m6)("text-center text-lg/[1.2] font-bold capitalize text-[#929292] sm:text-sm", P().className),
                                        children: H("% of total $DUM staked")
                                    })]
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "border-[3px] border-[#242424] bg-[#001563] p-[30px] sm:p-5",
                                children: (0,
                                n.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0,
                                    n.jsxs)("hgroup", {
                                        className: "space-y-3.5",
                                        children: [(0,
                                        n.jsx)("h3", {
                                            className: "text-center capitalize text-4xl/10 sm:text-3xl",
                                            children: H("unstake")
                                        }), (0,
                                        n.jsx)("p", {
                                            className: (0,
                                            f.m6)("text-center text-[21px]/[1.2] font-bold first-letter:capitalize sm:text-lg", P().className),
                                            children: H("stake your tokens to receive rewards")
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-6 lg:grid-cols-1",
                                        children: [(0,
                                        n.jsxs)("div", {
                                            className: "flex h-14 items-center justify-between bg-[#0138FF] px-6",
                                            children: [(0,
                                            n.jsx)("p", {
                                                className: (0,
                                                f.m6)("text-lg/[1.2] capitalize opacity-60 sm:text-base", P().className),
                                                children: H("your $DUM amount")
                                            }), (0,
                                            n.jsx)("p", {
                                                className: "text-2xl/[1.2] sm:text-lg",
                                                children: null === (X = "magatron" === Z ? eN || 0 : eT || 0) || void 0 === X ? void 0 : X.toLocaleString()
                                            })]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "flex h-14 items-center justify-between border-2 border-white bg-[#587CFF] px-6",
                                            children: [(0,
                                            n.jsx)("p", {
                                                className: (0,
                                                f.m6)("text-lg/[1.2] first-letter:capitalize sm:text-base", P().className),
                                                children: H("reward tokens")
                                            }), (0,
                                            n.jsx)("p", {
                                                className: "text-2xl/[1.2] sm:text-lg",
                                                children: null === (J = "magatron" === Z ? ee.totalRewards || 0 : ea.totalRewards || 0) || void 0 === J ? void 0 : J.toLocaleString()
                                            })]
                                        }), (0,
                                        n.jsx)("button", {
                                            className: "col-span-2 block h-14 rounded-[10px] border-2 border-[#888] bg-white text-[21px]/[1.2] text-[#F00] first-letter:capitalize disabled:opacity-50 lg:col-span-1 sm:text-lg",
                                            disabled: !0,
                                            "data-tooltip-id": "claim-rewards",
                                            children: H("claim rewards")
                                        }), (0,
                                        n.jsx)(c.u, {
                                            id: "claim-rewards",
                                            place: "top",
                                            children: (0,
                                            n.jsx)("div", {
                                                className: (0,
                                                f.m6)("text-base first-letter:capitalize", P().className),
                                                children: H("available post launch")
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "hidden",
                    ref: ef,
                    children: (0,
                    n.jsx)(y.a, {
                        className: "!hidden"
                    })
                })]
            })
        }
        new g.PublicKey(E.t)
    },
    50800: function(e, t, a) {
        "use strict";
        a.d(t, {
            $_: function() {
                return x
            },
            Aq: function() {
                return y
            },
            FW: function() {
                return m
            },
            NX: function() {
                return s
            },
            PD: function() {
                return o
            },
            Sl: function() {
                return l
            },
            UX: function() {
                return g
            },
            VK: function() {
                return d
            },
            Xb: function() {
                return u
            },
            a7: function() {
                return f
            },
            ap: function() {
                return i
            },
            c4: function() {
                return A
            },
            ld: function() {
                return h
            },
            n9: function() {
                return c
            },
            t: function() {
                return p
            },
            t$: function() {
                return b
            },
            xb: function() {
                return r
            }
        });
        var n = a(25566);
        let s = "91a120dfcdcb5148b9d9a34bd9765cbe"
          , i = "https://indulgent-nameless-breeze.solana-mainnet.quiknode.pro/2b6505ab7ab18cc191980bc71258657098ea2b53"
          , l = !1
          , r = "0x85eE86215B95691655D2AD39020F7CC243a2369b"
          , o = "0x31d5CEba2E19A1Eb98e2c0814d037De2CdaA15b5"
          , u = "FREEdCqK6JZUUnWdaXkH5qtpPVeRoXvmwTjZiFsAjSaH"
          , c = "PSFDW8tuCXkm9cSoYz3gisXAp8po5Gr5L3Dw4MmTtNY"
          , d = "PSFF69pK92p5KTYbkNs31gtBphG8qPd36NNdXHUYgAt"
          , p = "65WXtaoH5STjjcJYpdyMdko3kJ43e82d6x2qzGWh94gy";
        n.env.API_URL,
        n.env.API2_URL;
        let m = "2025-12-24T00:00:00Z"
          , A = "2024-11-09T16:00:00Z"
          , y = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
          , g = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
          , x = "0x55d398326f99059fF775485246999027B3197955"
          , b = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
          , f = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
          , h = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
    },
    82890: function(e, t, a) {
        "use strict";
        a.d(t, {
            Hx: function() {
                return r
            },
            QW: function() {
                return l
            },
            vc: function() {
                return o
            }
        });
        var n = a(86291)
          , s = a(91900)
          , i = a(50800);
        let l = i.Sl ? [s.Fox, s.d2Y, s.L5L] : [s.RJ0, s.eGR, s.ueV]
          , r = new n.K({
            ssr: !0,
            projectId: i.NX,
            networks: l
        })
          , o = r.wagmiConfig
    },
    64150: function(e, t, a) {
        "use strict";
        a.d(t, {
            D: function() {
                return r
            },
            J: function() {
                return o
            }
        });
        var n = a(45429)
          , s = a(13320);
        let i = async (e, t, a, i, l, r) => await e.methods.buyTokens(new s.BN(l), r).accounts({
            presale: t,
            buyer: a,
            paymentWallet: i,
            systemProgram: n.SystemProgram.programId
        }).instruction()
          , l = async (e, t, a, n) => await e.methods.stakeTokens(new s.BN(n)).accounts({
            presale: t,
            buyer: a
        }).instruction()
          , r = async (e, t, a, s, l, r) => {
            if (e.publicKey)
                try {
                    let o = new n.Transaction;
                    o.add(await i(t, a, e.publicKey, s, l, r));
                    let u = await e.sendTransaction(o, t.provider.connection, {
                        skipPreflight: !0
                    });
                    return await t.provider.connection.confirmTransaction(u, "confirmed"),
                    u
                } catch (e) {
                    throw e
                }
        }
          , o = async (e, t, a, s) => {
            if (e.publicKey)
                try {
                    let i = new n.Transaction;
                    i.add(await l(t, a, e.publicKey, s));
                    let r = await e.sendTransaction(i, t.provider.connection, {
                        skipPreflight: !0
                    });
                    return await t.provider.connection.confirmTransaction(r, "confirmed"),
                    r
                } catch (e) {
                    console.log(e);
                    return
                }
        }
    },
    28521: function(e, t, a) {
        "use strict";
        a.d(t, {
            x: function() {
                return n
            }
        });
        let n = {
            version: "0.1.0",
            name: "presale_program",
            instructions: [{
                name: "initialize",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !0
                }, {
                    name: "owner",
                    isMut: !0,
                    isSigner: !0
                }, {
                    name: "systemProgram",
                    isMut: !1,
                    isSigner: !1
                }],
                args: [{
                    name: "paymentWallet",
                    type: "publicKey"
                }, {
                    name: "rate",
                    type: "u64"
                }]
            }, {
                name: "stakeTokens",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "buyer",
                    isMut: !0,
                    isSigner: !0
                }],
                args: [{
                    name: "amount",
                    type: "u64"
                }]
            }, {
                name: "buyTokens",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "buyer",
                    isMut: !0,
                    isSigner: !0
                }, {
                    name: "paymentWallet",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "systemProgram",
                    isMut: !1,
                    isSigner: !1
                }],
                args: [{
                    name: "solAmount",
                    type: "u64"
                }, {
                    name: "stake",
                    type: "bool"
                }]
            }, {
                name: "withdrawSol",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "recipient",
                    isMut: !0,
                    isSigner: !0
                }, {
                    name: "owner",
                    isMut: !1,
                    isSigner: !0
                }],
                args: [{
                    name: "amount",
                    type: "u64"
                }]
            }, {
                name: "changeRate",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "owner",
                    isMut: !1,
                    isSigner: !0
                }],
                args: [{
                    name: "newRate",
                    type: "u64"
                }]
            }, {
                name: "changePaymentWallet",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "owner",
                    isMut: !1,
                    isSigner: !0
                }],
                args: [{
                    name: "newWallet",
                    type: "publicKey"
                }]
            }, {
                name: "pausePresale",
                accounts: [{
                    name: "presale",
                    isMut: !0,
                    isSigner: !1
                }, {
                    name: "owner",
                    isMut: !1,
                    isSigner: !0
                }],
                args: [{
                    name: "pause",
                    type: "bool"
                }]
            }],
            accounts: [{
                name: "Presale",
                type: {
                    kind: "struct",
                    fields: [{
                        name: "owner",
                        type: "publicKey"
                    }, {
                        name: "rate",
                        type: "u64"
                    }, {
                        name: "paymentWallet",
                        type: "publicKey"
                    }, {
                        name: "isPaused",
                        type: "bool"
                    }]
                }
            }],
            errors: [{
                code: 6e3,
                name: "PresaleIsPaused",
                msg: "The presale is currently paused."
            }, {
                code: 6001,
                name: "Overflow",
                msg: "Operation overflowed."
            }, {
                code: 6002,
                name: "Underflow",
                msg: "Operation underflowed."
            }, {
                code: 6003,
                name: "Unauthorized",
                msg: "Unauthorized."
            }, {
                code: 6004,
                name: "InvalidPaymentWallet",
                msg: "Invalid payment wallet provided."
            }, {
                code: 6005,
                name: "InvalidAmountTransferred",
                msg: "Invalid amount of SOL transferred."
            }]
        }
    },
    85313: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/ethereum.72b85b09.png",
            height: 300,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVhfOpffOtkge9lge9MaXF9lO2LoO9igO1tiOtifutdeepjgvqYq/Oxv/Xg5fvP2PlDcdnSAAAAEHRSTlMu/LDuAP3+5vmt5P/////+dcs00wAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwdyskRACEIBMAZDhUBzT/bLffXj4YhSIEBmqNSAUmeu1KgrNOD86HdOSG5bnvKy/VnQ+wdsA808AGRfaXllwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    57172: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/solana.f3d60a8b.png",
            height: 316,
            width: 316,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAABZR6kAAAAVR00AAAE3XosAAAACAwUAAABMaXEAAABLYKcOh24GDBEIGx0oYnkXFC4mipEAAAAyU3w9S4YuNGLfyl3eAAAADXRSTlOw/Ob+Lvsv6/YAMf75yx6Z4wAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAJF0RVh0UmF3AApleGlmCiAgICAgIDYyCjQ1Nzg2OTY2MDAwMDQ5NDkyYTAwMDgwMDAwMDAwMTAwNjk4NzA0MDAwMTAwMDAwMDFhMDAwMDAwMDAwMDAwMDAwMjAwMDJhMAowNDAwMDEwMDAwMDAzYzAxMDAwMDAzYTAwNDAwMDEwMDAwMDAzYzAxMDAwMDAwMDAwMDAwCjiJFf0AAAA+SURBVHicBcEJAoAgCADB1VCgAo/q/19tBhfMEOfUyEztEG2tO8DyfcaxK7a/NkZWiFKuFtB1zhnacUEr4j9SvQI4CTEw6QAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    41202: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/background.abec0e56.png",
            height: 1117,
            width: 1920,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEURKEsNHkARMlYSRWgI7PplAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nB3JsQ0AMAjAMBP+/7miVragMNhNY46rdGe/egPLADZ7UaClAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    92472: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/kamacop_badge.a62be5e5.png",
            height: 109,
            width: 236,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAASFBMVEUhNodOdn5YWVGAko7Aw9VWQDJTQDhsUABIVFoMDAAJFGeBl+cIGIYYDAAAAlaBhpyZpcmin5epss6RpfOJlpVpfJqanJV4kOY72ioNAAAAE3RSTlOu+f7j7tHnMVYKpfy4FWS/7Z3op1Ig4QAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxjYGPlYmBg4OFjEGESFRbnFuZnEGNkZhEQYhFk4ODgZGdn5+UEABa9AUtPB5niAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 4
        }
    },
    41743: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/magatron_badge.cba2901f.png",
            height: 109,
            width: 235,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAQlBMVEWJKyqQbm6NkpBXAABMUgl7ZGNxfV8AAAnQpaHffX7VtLWHDQ1mBwd/1oiGjoF2dV1bWwR6rnrrhIaogGiv1Z6V9I5KurRlAAAAEnRSTlOu1qtmJlfmCun+7bil/uHTOPrW+0roAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBCQIAEAgEwEWp3ML/v2oGeTYANeH142YecPdQ1RLBLLRI5AMVuAEqdUld1AAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }
    },
    11301: function(e) {
        "use strict";
        e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"string","name":"solanaAddress","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"BridgeSolana","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"StakeTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"TokensBoughtWithEth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"TokensBoughtWithUsd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DAIInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDCInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDTInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETHInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregatorInterface","outputs":[{"internalType":"contract Aggregator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"solanaAddress","type":"string"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"bridgeFromSolana","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"daiAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithDAI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdcAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wethAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithWETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPaymentWallet","type":"address"}],"name":"changePaymentWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_currentPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestEthPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasBridgedFromSolana","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
    }
}]);
