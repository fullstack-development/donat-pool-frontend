(() => {
  var e,
    n,
    t,
    r,
    o,
    i,
    c,
    _,
    u,
    d,
    f,
    s,
    a,
    b,
    p,
    l,
    g,
    w,
    v,
    x,
    h,
    m,
    y,
    j,
    O,
    S,
    P,
    E,
    k,
    A,
    T,
    W,
    C,
    N,
    q,
    B,
    M,
    V,
    $,
    F,
    R,
    U,
    Y,
    L,
    D,
    I,
    X,
    H,
    Z,
    z,
    J,
    K,
    Q,
    G,
    ee,
    ne,
    te,
    re,
    oe,
    ie,
    ce,
    _e,
    ue,
    de = {
      6010: (e, n, t) => {
        window.offchain = Promise.all([t.e(868), t.e(535)])
          .then(t.t.bind(t, 2711, 23))
          .then((e) => e.default.main.value0);
      },
    },
    fe = {};
  function se(e) {
    var n = fe[e];
    if (void 0 !== n) return n.exports;
    var t = (fe[e] = { id: e, loaded: !1, exports: {} });
    return de[e].call(t.exports, t, t.exports, se), (t.loaded = !0), t.exports;
  }
  (se.m = de),
    (se.c = fe),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (se.t = function (t, r) {
      if ((1 & r && (t = this(t)), 8 & r)) return t;
      if ('object' == typeof t && t) {
        if (4 & r && t.__esModule) return t;
        if (16 & r && 'function' == typeof t.then) return t;
      }
      var o = Object.create(null);
      se.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var c = 2 & r && t; 'object' == typeof c && !~e.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((e) => (i[e] = () => t[e]));
      return (i.default = () => t), se.d(o, i), o;
    }),
    (se.d = (e, n) => {
      for (var t in n)
        se.o(n, t) &&
          !se.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (se.f = {}),
    (se.e = (e) =>
      Promise.all(Object.keys(se.f).reduce((n, t) => (se.f[t](e, n), n), []))),
    (se.u = (e) => e + '.index.js'),
    (se.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (se.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              e.id,
          );
        },
      }),
      e
    )),
    (se.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t = {}),
    (r = 'ctl-scaffold:'),
    (se.l = (e, n, o, i) => {
      if (t[e]) t[e].push(n);
      else {
        var c, _;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName('script'), d = 0;
            d < u.length;
            d++
          ) {
            var f = u[d];
            if (
              f.getAttribute('src') == e ||
              f.getAttribute('data-webpack') == r + o
            ) {
              c = f;
              break;
            }
          }
        c ||
          ((_ = !0),
          ((c = document.createElement('script')).charset = 'utf-8'),
          (c.timeout = 120),
          se.nc && c.setAttribute('nonce', se.nc),
          c.setAttribute('data-webpack', r + o),
          (c.src = e)),
          (t[e] = [n]);
        var s = (n, r) => {
            (c.onerror = c.onload = null), clearTimeout(a);
            var o = t[e];
            if (
              (delete t[e],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((e) => e(r)),
              n)
            )
              return n(r);
          },
          a = setTimeout(
            s.bind(null, void 0, { type: 'timeout', target: c }),
            12e4,
          );
        (c.onerror = s.bind(null, c.onerror)),
          (c.onload = s.bind(null, c.onload)),
          _ && document.head.appendChild(c);
      }
    }),
    (se.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (se.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      se.g.importScripts && (e = se.g.location + '');
      var n = se.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var t = n.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (se.p = e);
    })(),
    (() => {
      var e = { 179: 0 };
      se.f.j = (n, t) => {
        var r = se.o(e, n) ? e[n] : void 0;
        if (0 !== r)
          if (r) t.push(r[2]);
          else {
            var o = new Promise((t, o) => (r = e[n] = [t, o]));
            t.push((r[2] = o));
            var i = se.p + se.u(n),
              c = new Error();
            se.l(
              i,
              (t) => {
                if (se.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
                  var o = t && ('load' === t.type ? 'missing' : t.type),
                    i = t && t.target && t.target.src;
                  (c.message =
                    'Loading chunk ' + n + ' failed.\n(' + o + ': ' + i + ')'),
                    (c.name = 'ChunkLoadError'),
                    (c.type = o),
                    (c.request = i),
                    r[1](c);
                }
              },
              'chunk-' + n,
              n,
            );
          }
      };
      var n = (n, t) => {
          var r,
            o,
            [i, c, _] = t,
            u = 0;
          if (i.some((n) => 0 !== e[n])) {
            for (r in c) se.o(c, r) && (se.m[r] = c[r]);
            _ && _(se);
          }
          for (n && n(t); u < i.length; u++)
            (o = i[u]), se.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        t = (self.webpackChunkctl_scaffold =
          self.webpackChunkctl_scaffold || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })(),
    (ce = {}),
    (_e = {
      7223: function () {
        return {
          './cardano_message_signing_bg.js': {
            __wbindgen_object_drop_ref: function (e) {
              return void 0 === o && (o = se.c[9304].exports), o.ug(e);
            },
            __wbindgen_string_new: function (e, n) {
              return void 0 === i && (i = se.c[9304].exports), i.h4(e, n);
            },
            __wbindgen_debug_string: function (e, n) {
              return void 0 === c && (c = se.c[9304].exports), c.fY(e, n);
            },
            __wbindgen_throw: function (e, n) {
              return void 0 === _ && (_ = se.c[9304].exports), _.Or(e, n);
            },
            __wbindgen_rethrow: function (e) {
              return void 0 === u && (u = se.c[9304].exports), u.nD(e);
            },
          },
        };
      },
      7240: function () {
        return {
          './cardano_serialization_lib_bg.js': {
            __wbindgen_object_drop_ref: function (e) {
              return void 0 === d && (d = se.c[8894].exports), d.ug$(e);
            },
            __wbindgen_string_new: function (e, n) {
              return void 0 === f && (f = se.c[8894].exports), f.h4u(e, n);
            },
            __wbindgen_error_new: function (e, n) {
              return void 0 === s && (s = se.c[8894].exports), s.hdV(e, n);
            },
            __wbindgen_string_get: function (e, n) {
              return void 0 === a && (a = se.c[8894].exports), a.qtq(e, n);
            },
            __wbindgen_number_new: function (e) {
              return void 0 === b && (b = se.c[8894].exports), b.pT7(e);
            },
            __wbindgen_object_clone_ref: function (e) {
              return void 0 === p && (p = se.c[8894].exports), p.m_1(e);
            },
            __wbindgen_is_object: function (e) {
              return void 0 === l && (l = se.c[8894].exports), l.WlW(e);
            },
            __wbg_String_91fba7ded13ba54c: function (e, n) {
              return void 0 === g && (g = se.c[8894].exports), g.RVh(e, n);
            },
            __wbg_set_20cbc34131e76824: function (e, n, t) {
              return void 0 === w && (w = se.c[8894].exports), w.Wl7(e, n, t);
            },
            __wbg_crypto_e1d53a1d73fb10b8: function (e) {
              return void 0 === v && (v = se.c[8894].exports), v.Nko(e);
            },
            __wbg_process_038c26bf42b093f8: function (e) {
              return void 0 === x && (x = se.c[8894].exports), x.DIc(e);
            },
            __wbg_versions_ab37218d2f0b24a8: function (e) {
              return void 0 === h && (h = se.c[8894].exports), h.QT3(e);
            },
            __wbg_node_080f4b19d15bc1fe: function (e) {
              return void 0 === m && (m = se.c[8894].exports), m.f5q(e);
            },
            __wbindgen_is_string: function (e) {
              return void 0 === y && (y = se.c[8894].exports), y.eYF(e);
            },
            __wbg_require_78a3dcfbdba9cbce: function () {
              return void 0 === j && (j = se.c[8894].exports), j.goM();
            },
            __wbg_msCrypto_6e7d3e1f92610cbb: function (e) {
              return void 0 === O && (O = se.c[8894].exports), O.crw(e);
            },
            __wbg_getRandomValues_805f1c3d65988a5a: function (e, n) {
              return void 0 === S && (S = se.c[8894].exports), S.eaI(e, n);
            },
            __wbg_randomFillSync_6894564c2c334c42: function (e, n, t) {
              return void 0 === P && (P = se.c[8894].exports), P.exY(e, n, t);
            },
            __wbg_new_1d9a920c6bfc44a8: function () {
              return void 0 === E && (E = se.c[8894].exports), E.BF4();
            },
            __wbindgen_is_function: function (e) {
              return void 0 === k && (k = se.c[8894].exports), k.o$X(e);
            },
            __wbg_newnoargs_b5b063fc6c2f0376: function (e, n) {
              return void 0 === A && (A = se.c[8894].exports), A.gWb(e, n);
            },
            __wbg_new_268f7b7dd3430798: function () {
              return void 0 === T && (T = se.c[8894].exports), T.Add();
            },
            __wbg_call_97ae9d8645dc388b: function (e, n) {
              return void 0 === W && (W = se.c[8894].exports), W.Niw(e, n);
            },
            __wbg_new_0b9bfdd97583284e: function () {
              return void 0 === C && (C = se.c[8894].exports), C.uB_();
            },
            __wbg_self_6d479506f72c6a71: function () {
              return void 0 === N && (N = se.c[8894].exports), N.yBo();
            },
            __wbg_window_f2557cc78490aceb: function () {
              return void 0 === q && (q = se.c[8894].exports), q.Sne();
            },
            __wbg_globalThis_7f206bda628d5286: function () {
              return void 0 === B && (B = se.c[8894].exports), B.$Li();
            },
            __wbg_global_ba75c50d1cf384f4: function () {
              return void 0 === M && (M = se.c[8894].exports), M.wJ_();
            },
            __wbindgen_is_undefined: function (e) {
              return void 0 === V && (V = se.c[8894].exports), V.XP4(e);
            },
            __wbg_set_a68214f35c417fa9: function (e, n, t) {
              return void 0 === $ && ($ = se.c[8894].exports), $.WAd(e, n, t);
            },
            __wbg_call_168da88779e35f61: function (e, n, t) {
              return void 0 === F && (F = se.c[8894].exports), F.VDL(e, n, t);
            },
            __wbg_set_933729cf5b66ac11: function (e, n, t) {
              return void 0 === R && (R = se.c[8894].exports), R.EWt(e, n, t);
            },
            __wbg_buffer_3f3d764d4747d564: function (e) {
              return void 0 === U && (U = se.c[8894].exports), U.jpb(e);
            },
            __wbg_new_8c3f0052272a457a: function (e) {
              return void 0 === Y && (Y = se.c[8894].exports), Y.lBI(e);
            },
            __wbg_set_83db9690f9353e79: function (e, n, t) {
              return void 0 === L && (L = se.c[8894].exports), L.fP1(e, n, t);
            },
            __wbg_length_9e1ae1900cb0fbd5: function (e) {
              return void 0 === D && (D = se.c[8894].exports), D.bjU(e);
            },
            __wbg_newwithlength_f5933855e4f48a19: function (e) {
              return void 0 === I && (I = se.c[8894].exports), I.ibT(e);
            },
            __wbg_subarray_58ad4efbb5bcb886: function (e, n, t) {
              return void 0 === X && (X = se.c[8894].exports), X.kHX(e, n, t);
            },
            __wbg_new_d87f272aec784ec0: function (e, n) {
              return void 0 === H && (H = se.c[8894].exports), H.neC(e, n);
            },
            __wbg_call_eae29933372a39be: function (e, n) {
              return void 0 === Z && (Z = se.c[8894].exports), Z.UZK(e, n);
            },
            __wbindgen_jsval_eq: function (e, n) {
              return void 0 === z && (z = se.c[8894].exports), z.YqC(e, n);
            },
            __wbg_self_e0b3266d2d9eba1a: function (e) {
              return void 0 === J && (J = se.c[8894].exports), J.NRn(e);
            },
            __wbg_crypto_e95a6e54c5c2e37f: function (e) {
              return void 0 === K && (K = se.c[8894].exports), K.yfN(e);
            },
            __wbg_getRandomValues_dc67302a7bd1aec5: function (e) {
              return void 0 === Q && (Q = se.c[8894].exports), Q.j8U(e);
            },
            __wbg_require_0993fe224bf8e202: function (e, n) {
              return void 0 === G && (G = se.c[8894].exports), G.dVC(e, n);
            },
            __wbg_randomFillSync_dd2297de5917c74e: function (e, n, t) {
              return (
                void 0 === ee && (ee = se.c[8894].exports), ee.SaM(e, n, t)
              );
            },
            __wbg_getRandomValues_02639197c8166a96: function (e, n, t) {
              return (
                void 0 === ne && (ne = se.c[8894].exports), ne.ZU4(e, n, t)
              );
            },
            __wbindgen_debug_string: function (e, n) {
              return void 0 === te && (te = se.c[8894].exports), te.fYP(e, n);
            },
            __wbindgen_throw: function (e, n) {
              return void 0 === re && (re = se.c[8894].exports), re.Or8(e, n);
            },
            __wbindgen_memory: function () {
              return void 0 === oe && (oe = se.c[8894].exports), oe.oHO();
            },
          },
        };
      },
      6275: function () {
        return {
          './apply_args_browser_bg.js': {
            __wbindgen_string_new: function (e, n) {
              return void 0 === ie && (ie = se.c[2798].exports), ie.h(e, n);
            },
          },
        };
      },
    }),
    (ue = { 868: [6275, 7223, 7240] }),
    (se.w = {}),
    (se.f.wasm = function (e, n) {
      (ue[e] || []).forEach(function (t, r) {
        var o = ce[t];
        if (o) n.push(o);
        else {
          var i,
            c = _e[t](),
            _ = fetch(
              se.p +
                '' +
                {
                  868: {
                    6275: '60d30e9fea285fea96be',
                    7223: 'd283065ef9bc1437911e',
                    7240: 'bf2b53d95d5c5bb4feeb',
                  },
                }[e][t] +
                '.module.wasm',
            );
          (i =
            c &&
            'function' == typeof c.then &&
            'function' == typeof WebAssembly.compileStreaming
              ? Promise.all([WebAssembly.compileStreaming(_), c]).then(
                  function (e) {
                    return WebAssembly.instantiate(e[0], e[1]);
                  },
                )
              : 'function' == typeof WebAssembly.instantiateStreaming
              ? WebAssembly.instantiateStreaming(_, c)
              : _.then(function (e) {
                  return e.arrayBuffer();
                }).then(function (e) {
                  return WebAssembly.instantiate(e, c);
                })),
            n.push(
              (ce[t] = i.then(function (e) {
                return (se.w[t] = (e.instance || e).exports);
              })),
            );
        }
      });
    }),
    se(6010);
})();
