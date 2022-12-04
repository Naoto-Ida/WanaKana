function O(e) {
  return e === null ? "null" : e !== Object(e) ? typeof e : {}.toString.call(e).slice(8, -1).toLowerCase();
}
function l(e) {
  return O(e) !== "string" ? !0 : !e.length;
}
function N(e = "", t, n) {
  if (l(e))
    return !1;
  const u = e.charCodeAt(0);
  return t <= u && u <= n;
}
const Qt = "5.0.2", H = {
  HIRAGANA: "toHiragana",
  KATAKANA: "toKatakana"
}, ue = {
  HEPBURN: "hepburn"
}, Te = {
  useObsoleteKana: !1,
  passRomaji: !1,
  upcaseKatakana: !1,
  IMEMode: !1,
  convertLongVowelMark: !0,
  romanization: ue.HEPBURN
}, Ke = 65, je = 90, _e = 65345, ye = 65370, Re = 65313, ve = 65338, w = 12353, Ie = 12438, P = 12449, me = 12540, Le = 19968, Ue = 40879, Fe = 12540, Me = 12539, be = [65296, 65305], we = [Re, ve], Pe = [_e, ye], ke = [65281, 65295], De = [65306, 65311], Je = [65339, 65343], Be = [65371, 65376], He = [65504, 65518], ze = [12352, 12447], $e = [12448, 12543], Ge = [65382, 65439], We = [12539, 12540], re = [65377, 65381], Ze = [12288, 12351], Ye = [19968, 40959], Ve = [13312, 19903], xe = [
  ze,
  $e,
  re,
  Ge
], oe = [
  Ze,
  re,
  We,
  ke,
  De,
  Je,
  Be,
  He
], qe = [
  ...xe,
  ...oe,
  we,
  Pe,
  be,
  Ye,
  Ve
], Xe = [0, 127], Qe = [
  [256, 257],
  [274, 275],
  [298, 299],
  [332, 333],
  [362, 363]
], et = [
  [8216, 8217],
  [8220, 8221]
], tt = [Xe, ...Qe], nt = [
  [32, 47],
  [58, 63],
  [91, 96],
  [123, 126],
  ...et
];
function M(e = "") {
  return qe.some(([t, n]) => N(e, t, n));
}
function C(e = "", t) {
  const n = O(t) === "regexp";
  return l(e) ? !1 : [...e].every((u) => {
    const r = M(u);
    return n ? r || t.test(u) : r;
  });
}
var z = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function ut(e, t) {
  return !!(e === t || z(e) && z(t));
}
function rt(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!ut(e[n], t[n]))
      return !1;
  return !0;
}
function se(e, t) {
  t === void 0 && (t = rt);
  var n = null;
  function u() {
    for (var r = [], o = 0; o < arguments.length; o++)
      r[o] = arguments[o];
    if (n && n.lastThis === this && t(r, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, r);
    return n = {
      lastResult: s,
      lastArgs: r,
      lastThis: this
    }, s;
  }
  return u.clear = function() {
    n = null;
  }, u;
}
var $ = Object.prototype.hasOwnProperty;
function G(e, t, n) {
  for (n of e.keys())
    if (d(n, t))
      return n;
}
function d(e, t) {
  var n, u, r;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((u = e.length) === t.length)
        for (; u-- && d(e[u], t[u]); )
          ;
      return u === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (u of e)
        if (r = u, r && typeof r == "object" && (r = G(t, r), !r) || !t.has(r))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (u of e)
        if (r = u[0], r && typeof r == "object" && (r = G(t, r), !r) || !d(u[1], t.get(r)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((u = e.byteLength) === t.byteLength)
        for (; u-- && e.getInt8(u) === t.getInt8(u); )
          ;
      return u === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((u = e.byteLength) === t.byteLength)
        for (; u-- && e[u] === t[u]; )
          ;
      return u === -1;
    }
    if (!n || typeof e == "object") {
      u = 0;
      for (n in e)
        if ($.call(e, n) && ++u && !$.call(t, n) || !(n in t) || !d(e[n], t[n]))
          return !1;
      return Object.keys(t).length === u;
    }
  }
  return e !== e && t !== t;
}
const p = (e = {}) => Object.assign({}, Te, e);
function ie(e, t, n) {
  const u = t;
  function r(i, a) {
    if (i[a] !== void 0)
      return Object.assign({ "": i[""] + a }, i[a]);
  }
  function o(i, a) {
    const c = i.charAt(0);
    return s(
      Object.assign({ "": c }, u[c]),
      i.slice(1),
      a,
      a + 1
    );
  }
  function s(i, a, c, A) {
    if (!a)
      return n || Object.keys(i).length === 1 ? i[""] ? [[c, A, i[""]]] : [] : [[c, A, null]];
    if (Object.keys(i).length === 1)
      return [[c, A, i[""]]].concat(
        o(a, A)
      );
    const f = r(i, a.charAt(0));
    return f === void 0 ? [[c, A, i[""]]].concat(
      o(a, A)
    ) : s(f, a.slice(1), c, A + 1);
  }
  return o(e, 0);
}
function k(e) {
  return Object.entries(e).reduce((t, [n, u]) => {
    const r = O(u) === "string";
    return t[n] = r ? { "": u } : k(u), t;
  }, {});
}
function ae(e, t) {
  return t.split("").reduce((n, u) => (n[u] === void 0 && (n[u] = {}), n[u]), e);
}
function ce(e = {}) {
  const t = {};
  return O(e) === "object" && Object.entries(e).forEach(([n, u]) => {
    let r = t;
    n.split("").forEach((o) => {
      r[o] === void 0 && (r[o] = {}), r = r[o];
    }), r[""] = u;
  }), function(u) {
    const r = JSON.parse(JSON.stringify(u));
    function o(s, i) {
      return s === void 0 || O(s) === "string" ? i : Object.entries(i).reduce(
        (a, [c, A]) => (a[c] = o(s[c], A), a),
        s
      );
    }
    return o(r, t);
  };
}
function fe(e, t) {
  return t ? O(t) === "function" ? t(e) : ce(t)(e) : e;
}
const ot = {
  a: "\u3042",
  i: "\u3044",
  u: "\u3046",
  e: "\u3048",
  o: "\u304A",
  k: { a: "\u304B", i: "\u304D", u: "\u304F", e: "\u3051", o: "\u3053" },
  s: { a: "\u3055", i: "\u3057", u: "\u3059", e: "\u305B", o: "\u305D" },
  t: { a: "\u305F", i: "\u3061", u: "\u3064", e: "\u3066", o: "\u3068" },
  n: { a: "\u306A", i: "\u306B", u: "\u306C", e: "\u306D", o: "\u306E" },
  h: { a: "\u306F", i: "\u3072", u: "\u3075", e: "\u3078", o: "\u307B" },
  m: { a: "\u307E", i: "\u307F", u: "\u3080", e: "\u3081", o: "\u3082" },
  y: { a: "\u3084", u: "\u3086", o: "\u3088" },
  r: { a: "\u3089", i: "\u308A", u: "\u308B", e: "\u308C", o: "\u308D" },
  w: { a: "\u308F", i: "\u3090", e: "\u3091", o: "\u3092" },
  g: { a: "\u304C", i: "\u304E", u: "\u3050", e: "\u3052", o: "\u3054" },
  z: { a: "\u3056", i: "\u3058", u: "\u305A", e: "\u305C", o: "\u305E" },
  d: { a: "\u3060", i: "\u3062", u: "\u3065", e: "\u3067", o: "\u3069" },
  b: { a: "\u3070", i: "\u3073", u: "\u3076", e: "\u3079", o: "\u307C" },
  p: { a: "\u3071", i: "\u3074", u: "\u3077", e: "\u307A", o: "\u307D" },
  v: { a: "\u3094\u3041", i: "\u3094\u3043", u: "\u3094", e: "\u3094\u3047", o: "\u3094\u3049" }
}, st = {
  ".": "\u3002",
  ",": "\u3001",
  ":": "\uFF1A",
  "/": "\u30FB",
  "!": "\uFF01",
  "?": "\uFF1F",
  "~": "\u301C",
  "-": "\u30FC",
  "\u2018": "\u300C",
  "\u2019": "\u300D",
  "\u201C": "\u300E",
  "\u201D": "\u300F",
  "[": "\uFF3B",
  "]": "\uFF3D",
  "(": "\uFF08",
  ")": "\uFF09",
  "{": "\uFF5B",
  "}": "\uFF5D"
}, W = {
  k: "\u304D",
  s: "\u3057",
  t: "\u3061",
  n: "\u306B",
  h: "\u3072",
  m: "\u307F",
  r: "\u308A",
  g: "\u304E",
  z: "\u3058",
  d: "\u3062",
  b: "\u3073",
  p: "\u3074",
  v: "\u3094",
  q: "\u304F",
  f: "\u3075"
}, Ae = { ya: "\u3083", yi: "\u3043", yu: "\u3085", ye: "\u3047", yo: "\u3087" }, le = { a: "\u3041", i: "\u3043", u: "\u3045", e: "\u3047", o: "\u3049" }, Z = {
  sh: "sy",
  ch: "ty",
  cy: "ty",
  chy: "ty",
  shy: "sy",
  j: "zy",
  jy: "zy",
  shi: "si",
  chi: "ti",
  tsu: "tu",
  ji: "zi",
  fu: "hu"
}, it = Object.assign(
  {
    tu: "\u3063",
    wa: "\u308E",
    ka: "\u30F5",
    ke: "\u30F6"
  },
  le,
  Ae
), at = {
  yi: "\u3044",
  wu: "\u3046",
  ye: "\u3044\u3047",
  wi: "\u3046\u3043",
  we: "\u3046\u3047",
  kwa: "\u304F\u3041",
  whu: "\u3046",
  tha: "\u3066\u3083",
  thu: "\u3066\u3085",
  tho: "\u3066\u3087",
  dha: "\u3067\u3083",
  dhu: "\u3067\u3085",
  dho: "\u3067\u3087"
}, ct = {
  wh: "\u3046",
  kw: "\u304F",
  qw: "\u304F",
  q: "\u304F",
  gw: "\u3050",
  sw: "\u3059",
  ts: "\u3064",
  th: "\u3066",
  tw: "\u3068",
  dh: "\u3067",
  dw: "\u3069",
  fw: "\u3075",
  f: "\u3075"
};
function ft() {
  const e = k(ot), t = (r) => ae(e, r);
  Object.entries(W).forEach(([r, o]) => {
    Object.entries(Ae).forEach(([s, i]) => {
      t(r + s)[""] = o + i;
    });
  }), Object.entries(st).forEach(([r, o]) => {
    t(r)[""] = o;
  }), Object.entries(ct).forEach(([r, o]) => {
    Object.entries(le).forEach(([s, i]) => {
      const a = t(r + s);
      a[""] = o + i;
    });
  }), ["n", "n'", "xn"].forEach((r) => {
    t(r)[""] = "\u3093";
  }), e.c = JSON.parse(JSON.stringify(e.k)), Object.entries(Z).forEach(([r, o]) => {
    const s = r.slice(0, r.length - 1), i = r.charAt(r.length - 1), a = t(s);
    a[i] = JSON.parse(JSON.stringify(t(o)));
  });
  function n(r) {
    return [...Object.entries(Z), ["c", "k"]].reduce(
      (o, [s, i]) => r.startsWith(i) ? o.concat(r.replace(i, s)) : o,
      []
    );
  }
  Object.entries(it).forEach(([r, o]) => {
    const s = (f) => f.charAt(f.length - 1), i = (f) => f.slice(0, f.length - 1), a = `x${r}`, c = t(a);
    c[""] = o;
    const A = t(`l${i(r)}`);
    A[s(r)] = c, n(r).forEach((f) => {
      ["l", "x"].forEach((E) => {
        const Se = t(E + i(f));
        Se[s(f)] = t(E + r);
      });
    });
  }), Object.entries(at).forEach(([r, o]) => {
    t(r)[""] = o;
  });
  function u(r) {
    return Object.entries(r).reduce((o, [s, i]) => (s ? o[s] = u(i) : o[s] = `\u3063${i}`, o), {});
  }
  return [...Object.keys(W), "c", "y", "w", "j"].forEach((r) => {
    const o = e[r];
    o[r] = u(o);
  }), delete e.n.n, Object.freeze(JSON.parse(JSON.stringify(e)));
}
let I = null;
function At() {
  return I == null && (I = ft()), I;
}
const lt = ce({
  wi: "\u3090",
  we: "\u3091"
});
function Et(e) {
  const t = JSON.parse(JSON.stringify(e));
  return t.n.n = { "": "\u3093" }, t.n[" "] = { "": "\u3093" }, t;
}
function Nt(e = "") {
  return l(e) ? !1 : N(e, Ke, je);
}
function S(e = "") {
  return l(e) ? !1 : e.charCodeAt(0) === Fe;
}
function Ee(e = "") {
  return l(e) ? !1 : e.charCodeAt(0) === Me;
}
function v(e = "") {
  return l(e) ? !1 : S(e) ? !0 : N(e, w, Ie);
}
function T(e = "") {
  const t = [];
  return e.split("").forEach((n) => {
    if (S(n) || Ee(n))
      t.push(n);
    else if (v(n)) {
      const u = n.charCodeAt(0) + (P - w), r = String.fromCharCode(u);
      t.push(r);
    } else
      t.push(n);
  }), t.join("");
}
const D = se(
  (e, t, n) => {
    let u = At();
    return u = e ? Et(u) : u, u = t ? lt(u) : u, n && (u = fe(u, n)), u;
  },
  d
);
function _(e = "", t = {}, n) {
  let u;
  return n ? u = t : (u = p(t), n = D(
    u.IMEMode,
    u.useObsoleteKana,
    u.customKanaMapping
  )), Ot(e, u, n).map((r) => {
    const [o, s, i] = r;
    if (i === null)
      return e.slice(o);
    const a = u.IMEMode === H.HIRAGANA, c = u.IMEMode === H.KATAKANA || [...e.slice(o, s)].every(Nt);
    return a || !c ? i : T(i);
  }).join("");
}
function Ot(e = "", t = {}, n) {
  const { IMEMode: u, useObsoleteKana: r, customKanaMapping: o } = t;
  return n || (n = D(u, r, o)), ie(e.toLowerCase(), n, !u);
}
let h = [];
function dt(e) {
  let t;
  const n = Object.assign({}, p(e), {
    IMEMode: e.IMEMode || !0
  }), u = D(
    n.IMEMode,
    n.useObsoleteKana,
    n.customKanaMapping
  ), r = [
    ...Object.keys(u),
    ...Object.keys(u).map((o) => o.toUpperCase())
  ];
  return function({ target: s }) {
    s.value !== t && s.dataset.ignoreComposition !== "true" && ht(s, n, u, r);
  };
}
function ht(e, t, n, u, r) {
  const [o, s, i] = St(
    e.value,
    e.selectionEnd,
    u
  ), a = _(s, t, n);
  if (s !== a) {
    const A = o.length + a.length, f = o + a + i;
    e.value = f, i.length ? setTimeout(() => e.setSelectionRange(A, A), 1) : e.setSelectionRange(A, A);
  } else
    e.value;
}
function m({ type: e, target: t, data: n }) {
  /Mac/.test(window.navigator && window.navigator.platform) && (e === "compositionupdate" && C(n) && (t.dataset.ignoreComposition = "true"), e === "compositionend" && (t.dataset.ignoreComposition = "false"));
}
function gt(e, t, n) {
  h = h.concat({
    id: e,
    inputHandler: t,
    compositionHandler: n
  });
}
function Ct({ id: e }) {
  h = h.filter(({ id: t }) => t !== e);
}
function pt(e) {
  return e && h.find(({ id: t }) => t === e.getAttribute("data-wanakana-id"));
}
function St(e = "", t = 0, n = []) {
  let u, r, o;
  return t === 0 && n.includes(e[0]) ? [u, r, o] = Tt(e, n) : t > 0 ? [u, r, o] = Kt(e, t) : ([u, r] = y(
    e,
    (s) => !n.includes(s)
  ), [r, o] = y(
    r,
    (s) => !C(s)
  )), [u, r, o];
}
function Tt(e, t) {
  return [
    "",
    ...y(
      e,
      (n) => t.includes(n) || !C(n, /[0-9]/)
    )
  ];
}
function Kt(e = "", t = 0) {
  const [n, u] = y(
    [...e.slice(0, t)].reverse(),
    (r) => !C(r)
  );
  return [
    u.reverse().join(""),
    n.split("").reverse().join(""),
    e.slice(t)
  ];
}
function y(e = {}, t = (n) => !!n) {
  const n = [], { length: u } = e;
  let r = 0;
  for (; r < u && t(e[r], r); )
    n.push(e[r]), r += 1;
  return [n.join(""), e.slice(r)];
}
const jt = ({ target: { value: e, selectionStart: t, selectionEnd: n } }) => console.log("input:", { value: e, selectionStart: t, selectionEnd: n }), _t = () => console.log("compositionstart"), yt = ({
  target: { value: e, selectionStart: t, selectionEnd: n },
  data: u
}) => console.log("compositionupdate", {
  data: u,
  value: e,
  selectionStart: t,
  selectionEnd: n
}), Rt = () => console.log("compositionend"), Ne = {
  input: jt,
  compositionstart: _t,
  compositionupdate: yt,
  compositionend: Rt
}, vt = (e) => {
  Object.entries(Ne).forEach(
    ([t, n]) => e.addEventListener(t, n)
  );
}, It = (e) => {
  Object.entries(Ne).forEach(
    ([t, n]) => e.removeEventListener(t, n)
  );
}, mt = ["TEXTAREA", "INPUT"];
let Y = 0;
const Lt = () => (Y += 1, `${Date.now()}${Y}`);
function en(e, t = {}, n = !1) {
  if (!mt.includes(e.nodeName))
    throw new Error(
      `Element provided to Wanakana bind() was not a valid input or textarea element.
 Received: (${JSON.stringify(
        e
      )})`
    );
  const u = dt(t), r = Lt();
  e.setAttribute("data-wanakana-id", r), e.setAttribute("lang", "ja"), e.setAttribute("autoCapitalize", "none"), e.setAttribute("autoCorrect", "off"), e.setAttribute("autoComplete", "off"), e.setAttribute("spellCheck", "false"), e.addEventListener("input", u), e.addEventListener("compositionupdate", m), e.addEventListener("compositionend", m), gt(r, u, m), n === !0 && vt(e);
}
function tn(e, t = !1) {
  const n = pt(e);
  if (n == null)
    throw new Error(
      `Element provided to Wanakana unbind() had no listener registered.
 Received: ${JSON.stringify(
        e
      )}`
    );
  const { inputHandler: u, compositionHandler: r } = n;
  e.removeAttribute("data-wanakana-id"), e.removeAttribute("data-ignore-composition"), e.removeEventListener("input", u), e.removeEventListener("compositionstart", r), e.removeEventListener("compositionupdate", r), e.removeEventListener("compositionend", r), Ct(n), t === !0 && It(e);
}
function b(e = "") {
  return l(e) ? !1 : tt.some(([t, n]) => N(e, t, n));
}
function J(e = "", t) {
  const n = O(t) === "regexp";
  return l(e) ? !1 : [...e].every((u) => {
    const r = b(u);
    return n ? r || t.test(u) : r;
  });
}
function g(e = "") {
  return N(e, P, me);
}
function Ut(e = "") {
  return l(e) ? !1 : v(e) || g(e);
}
function B(e = "") {
  return l(e) ? !1 : [...e].every(Ut);
}
function Ft(e = "") {
  return l(e) ? !1 : [...e].every(v);
}
function Oe(e = "") {
  return l(e) ? !1 : [...e].every(g);
}
function de(e = "") {
  return N(e, Le, Ue);
}
function he(e = "") {
  return l(e) ? !1 : [...e].every(de);
}
function ge(e = "", t = { passKanji: !0 }) {
  const n = [...e];
  let u = !1;
  return t.passKanji || (u = n.some(he)), (n.some(Ft) || n.some(Oe)) && n.some(J) && !u;
}
const Mt = (e, t) => S(e) && t < 1, bt = (e, t) => S(e) && t > 0, wt = (e) => ["\u30F6", "\u30F5"].includes(e), Pt = {
  a: "\u3042",
  i: "\u3044",
  u: "\u3046",
  e: "\u3048",
  o: "\u3046"
};
function K(e = "", t, { isDestinationRomaji: n, convertLongVowelMark: u } = {}) {
  let r = "";
  return e.split("").reduce((o, s, i) => {
    if (Ee(s) || Mt(s, i) || wt(s))
      return o.concat(s);
    if (u && r && bt(s, i)) {
      const a = t(r).slice(-1);
      return g(e[i - 1]) && a === "o" && n ? o.concat("\u304A") : o.concat(Pt[a]);
    }
    if (!S(s) && g(s)) {
      const a = s.charCodeAt(0) + (w - P), c = String.fromCharCode(a);
      return r = c, o.concat(c);
    }
    return r = "", o.concat(s);
  }, []).join("");
}
let L;
const kt = {
  \u3042: "a",
  \u3044: "i",
  \u3046: "u",
  \u3048: "e",
  \u304A: "o",
  \u304B: "ka",
  \u304D: "ki",
  \u304F: "ku",
  \u3051: "ke",
  \u3053: "ko",
  \u3055: "sa",
  \u3057: "shi",
  \u3059: "su",
  \u305B: "se",
  \u305D: "so",
  \u305F: "ta",
  \u3061: "chi",
  \u3064: "tsu",
  \u3066: "te",
  \u3068: "to",
  \u306A: "na",
  \u306B: "ni",
  \u306C: "nu",
  \u306D: "ne",
  \u306E: "no",
  \u306F: "ha",
  \u3072: "hi",
  \u3075: "fu",
  \u3078: "he",
  \u307B: "ho",
  \u307E: "ma",
  \u307F: "mi",
  \u3080: "mu",
  \u3081: "me",
  \u3082: "mo",
  \u3089: "ra",
  \u308A: "ri",
  \u308B: "ru",
  \u308C: "re",
  \u308D: "ro",
  \u3084: "ya",
  \u3086: "yu",
  \u3088: "yo",
  \u308F: "wa",
  \u3090: "wi",
  \u3091: "we",
  \u3092: "wo",
  \u3093: "n",
  \u304C: "ga",
  \u304E: "gi",
  \u3050: "gu",
  \u3052: "ge",
  \u3054: "go",
  \u3056: "za",
  \u3058: "ji",
  \u305A: "zu",
  \u305C: "ze",
  \u305E: "zo",
  \u3060: "da",
  \u3062: "ji",
  \u3065: "zu",
  \u3067: "de",
  \u3069: "do",
  \u3070: "ba",
  \u3073: "bi",
  \u3076: "bu",
  \u3079: "be",
  \u307C: "bo",
  \u3071: "pa",
  \u3074: "pi",
  \u3077: "pu",
  \u307A: "pe",
  \u307D: "po",
  \u3094\u3041: "va",
  \u3094\u3043: "vi",
  \u3094: "vu",
  \u3094\u3047: "ve",
  \u3094\u3049: "vo"
}, Dt = {
  "\u3002": ".",
  "\u3001": ",",
  "\uFF1A": ":",
  "\u30FB": "/",
  "\uFF01": "!",
  "\uFF1F": "?",
  "\u301C": "~",
  \u30FC: "-",
  "\u300C": "\u2018",
  "\u300D": "\u2019",
  "\u300E": "\u201C",
  "\u300F": "\u201D",
  "\uFF3B": "[",
  "\uFF3D": "]",
  "\uFF08": "(",
  "\uFF09": ")",
  "\uFF5B": "{",
  "\uFF5D": "}",
  "\u3000": " "
}, Jt = ["\u3042", "\u3044", "\u3046", "\u3048", "\u304A", "\u3084", "\u3086", "\u3088"], U = { \u3083: "ya", \u3085: "yu", \u3087: "yo" }, Bt = { \u3043: "yi", \u3047: "ye" }, Ht = {
  \u3041: "a",
  \u3043: "i",
  \u3045: "u",
  \u3047: "e",
  \u3049: "o"
}, zt = [
  "\u304D",
  "\u306B",
  "\u3072",
  "\u307F",
  "\u308A",
  "\u304E",
  "\u3073",
  "\u3074",
  "\u3094",
  "\u304F",
  "\u3075"
], $t = {
  \u3057: "sh",
  \u3061: "ch",
  \u3058: "j",
  \u3062: "j"
}, Gt = {
  \u3063: "",
  \u3083: "ya",
  \u3085: "yu",
  \u3087: "yo",
  \u3041: "a",
  \u3043: "i",
  \u3045: "u",
  \u3047: "e",
  \u3049: "o"
}, V = {
  b: "b",
  c: "t",
  d: "d",
  f: "f",
  g: "g",
  h: "h",
  j: "j",
  k: "k",
  m: "m",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  v: "v",
  w: "w",
  x: "x",
  z: "z"
};
function Wt() {
  return L == null && (L = Yt()), L;
}
function Zt(e) {
  switch (e) {
    case ue.HEPBURN:
      return Wt();
    default:
      return {};
  }
}
function Yt() {
  const e = k(kt), t = (u) => ae(e, u), n = (u, r) => {
    t(u)[""] = r;
  };
  return Object.entries(Dt).forEach(([u, r]) => {
    t(u)[""] = r;
  }), [...Object.entries(U), ...Object.entries(Ht)].forEach(
    ([u, r]) => {
      n(u, r);
    }
  ), zt.forEach((u) => {
    const r = t(u)[""][0];
    Object.entries(U).forEach(([o, s]) => {
      n(u + o, r + s);
    }), Object.entries(Bt).forEach(([o, s]) => {
      n(u + o, r + s);
    });
  }), Object.entries($t).forEach(([u, r]) => {
    Object.entries(U).forEach(([o, s]) => {
      n(u + o, r + s[1]);
    }), n(`${u}\u3043`, `${r}yi`), n(`${u}\u3047`, `${r}e`);
  }), e.\u3063 = Ce(e), Object.entries(Gt).forEach(([u, r]) => {
    n(u, r);
  }), Jt.forEach((u) => {
    n(`\u3093${u}`, `n'${t(u)[""]}`);
  }), Object.freeze(JSON.parse(JSON.stringify(e)));
}
function Ce(e) {
  return Object.entries(e).reduce((t, [n, u]) => {
    if (n)
      t[n] = Ce(u);
    else {
      const r = u.charAt(0);
      t[n] = Object.keys(V).includes(r) ? V[r] + u : u;
    }
    return t;
  }, {});
}
const pe = se(
  (e, t) => {
    let n = Zt(e);
    return t && (n = fe(n, t)), n;
  },
  d
);
function j(e = "", t = {}, n) {
  const u = p(t);
  return n || (n = pe(
    u.romanization,
    u.customRomajiMapping
  )), Vt(e, u, n).map((r) => {
    const [o, s, i] = r;
    return u.upcaseKatakana && Oe(e.slice(o, s)) ? i.toUpperCase() : i;
  }).join("");
}
function Vt(e, t, n) {
  n || (n = pe(
    t.romanization,
    t.customRomajiMapping
  ));
  const u = Object.assign({}, { isDestinationRomaji: !0 }, t);
  return ie(
    K(e, j, u),
    n,
    !t.IMEMode
  );
}
function R(e = "") {
  return l(e) ? !1 : nt.some(([t, n]) => N(e, t, n));
}
function nn(e = "", t = {}) {
  const n = p(t);
  if (n.passRomaji)
    return K(e, j, n);
  if (ge(e, { passKanji: !0 })) {
    const u = K(e, j, n);
    return _(u.toLowerCase(), n);
  }
  return J(e) || R(e) ? _(e.toLowerCase(), n) : K(e, j, n);
}
function un(e = "", t = {}) {
  const n = p(t);
  if (n.passRomaji)
    return T(e);
  if (ge(e) || J(e) || R(e)) {
    const u = _(e.toLowerCase(), n);
    return T(u);
  }
  return T(e);
}
function x(e = "") {
  return l(e) ? !1 : oe.some(([t, n]) => N(e, t, n));
}
const q = (e) => e === " ", X = (e) => e === "\u3000", Q = (e) => typeof e == "string" && /[０-９]/.test(e), ee = (e) => typeof e == "string" && /[0-9]/.test(e), F = {
  EN: "en",
  JA: "ja",
  EN_NUM: "englishNumeral",
  JA_NUM: "japaneseNumeral",
  EN_PUNC: "englishPunctuation",
  JA_PUNC: "japanesePunctuation",
  KANJI: "kanji",
  HIRAGANA: "hiragana",
  KATAKANA: "katakana",
  SPACE: "space",
  OTHER: "other"
};
function te(e, t = !1) {
  const {
    EN: n,
    JA: u,
    EN_NUM: r,
    JA_NUM: o,
    EN_PUNC: s,
    JA_PUNC: i,
    KANJI: a,
    HIRAGANA: c,
    KATAKANA: A,
    SPACE: f,
    OTHER: E
  } = F;
  if (t)
    switch (!0) {
      case Q(e):
        return F.OTHER;
      case ee(e):
        return E;
      case q(e):
        return F.EN;
      case R(e):
        return E;
      case X(e):
        return u;
      case x(e):
        return E;
      case M(e):
        return u;
      case b(e):
        return n;
      default:
        return E;
    }
  else
    switch (!0) {
      case X(e):
        return f;
      case q(e):
        return f;
      case Q(e):
        return o;
      case ee(e):
        return r;
      case R(e):
        return s;
      case x(e):
        return i;
      case de(e):
        return a;
      case v(e):
        return c;
      case g(e):
        return A;
      case M(e):
        return u;
      case b(e):
        return n;
      default:
        return E;
    }
}
function ne(e, { compact: t = !1, detailed: n = !1 } = {}) {
  if (e == null || l(e))
    return [];
  const u = [...e];
  let r = u.shift(), o = te(r, t);
  return r = n ? { type: o, value: r } : r, u.reduce(
    (i, a) => {
      const c = te(a, t), A = c === o;
      o = c;
      let f = a;
      return A && (f = (n ? i.pop().value : i.pop()) + f), n ? i.concat({ type: c, value: f }) : i.concat(f);
    },
    [r]
  );
}
const xt = (e, t) => t && !B(e[0]), qt = (e, t) => !t && !B(e[e.length - 1]), Xt = (e, t) => t && ![...t].some(he) || !t && B(e);
function rn(e = "", { leading: t = !1, matchKanji: n = "" } = {}) {
  if (!C(e) || xt(e, t) || qt(e, t) || Xt(e, n))
    return e;
  const u = n || e, r = new RegExp(
    t ? `^${ne(u).shift()}` : `${ne(u).pop()}$`
  );
  return e.replace(r, "");
}
export {
  ue as ROMANIZATIONS,
  H as TO_KANA_METHODS,
  Qt as VERSION,
  en as bind,
  Ft as isHiragana,
  C as isJapanese,
  B as isKana,
  he as isKanji,
  Oe as isKatakana,
  ge as isMixed,
  J as isRomaji,
  rn as stripOkurigana,
  nn as toHiragana,
  _ as toKana,
  un as toKatakana,
  j as toRomaji,
  ne as tokenize,
  tn as unbind
};
//# sourceMappingURL=index.mjs.map
