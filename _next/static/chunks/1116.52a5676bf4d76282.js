"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1116], {
    91116: function(t, e, n) {
        n.d(e, {
            customAlphabet: function() {
                return u
            }
        });
        let l = t => crypto.getRandomValues(new Uint8Array(t))
          , r = (t, e, n) => {
            let l = (2 << Math.log(t.length - 1) / Math.LN2) - 1
              , r = -~(1.6 * l * e / t.length);
            return (u=e) => {
                let h = "";
                for (; ; ) {
                    let e = n(r)
                      , a = r;
                    for (; a--; )
                        if ((h += t[e[a] & l] || "").length === u)
                            return h
                }
            }
        }
          , u = (t, e=21) => r(t, e, l)
    }
}]);
