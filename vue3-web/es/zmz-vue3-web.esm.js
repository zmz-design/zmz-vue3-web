import { defineComponent as rt, inject as be, computed as z, h as ie, openBlock as v, createElementBlock as _, normalizeStyle as j, renderSlot as N, ref as b, onMounted as de, onBeforeUnmount as Ne, createElementVNode as u, resolveComponent as oe, normalizeClass as P, createBlock as pe, Transition as Ve, withCtx as le, createCommentVNode as A, withModifiers as _e, createVNode as K, reactive as Le, watch as ue, nextTick as Se, onUnmounted as Ze, provide as Fe, createTextVNode as ne, toDisplayString as Z, getCurrentInstance as Ce, Fragment as G, withDirectives as re, vShow as Be, Teleport as ct, mergeProps as Ie, render as Dt, renderList as fe, vModelDynamic as Ir, resolveDirective as qt, vModelText as Oe, withKeys as Ar, vModelRadio as Pr, vModelCheckbox as zo, TransitionGroup as Nr, createSlots as _o, isVNode as ho, onUpdated as Vr, onBeforeMount as Fr, createApp as Rr } from "vue";
const xt = rt({
  name: "ZmzButton",
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "error", "primary", "default", "info"].includes(e);
      }
    },
    /**
     * 大小
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "default", "small", "mini"].includes(e);
      }
    },
    /**
     * 圆角
     */
    round: {
      type: Boolean,
      default: !1
    },
    /**
     * 加载中
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * 加载中图标
     */
    loadingIcon: {
      type: String,
      default: "zmz-icon--loading"
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * 朴素
     */
    plain: {
      type: Boolean,
      default: !1
    },
    /**
     * 虚线
     */
    dashed: {
      type: Boolean,
      default: !1
    },
    /**
     * 圆型
     */
    circle: {
      type: Boolean,
      default: !1
    },
    /**
     * 链接
     */
    link: {
      type: Boolean,
      default: !1
    },
    /**
     * 文字
     */
    text: {
      type: Boolean,
      default: !1
    },
    /**
     * 文字背景
     */
    textBg: {
      type: Boolean,
      default: !1
    },
    /**
     * 原生类型
     */
    nativeType: {
      type: String,
      default: "button"
    },
    /**
     * 标签
     */
    tag: {
      type: String,
      default: "button"
    },
    /**
     * 长按钮
     */
    long: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = be("zmzForm", {}), o = z(() => {
      let i = [];
      return e.type === "text" ? (i.push("zmz-button--text"), i.push(`zmz-button--text-${e.textColor}`)) : (e.type && i.push(`zmz-button--${e.type}`), l.value && i.push(`zmz-button--size-${l.value}`), e.round && i.push("zmz-button--round"), e.plain && i.push("zmz-button--plain"), e.dashed && i.push("zmz-button--dashed"), e.loading && i.push("zmz-button--loading"), e.text && i.push("zmz-button--text"), e.text && e.textBg && i.push("zmz-button--text-bg"), e.link && i.push("zmz-button--link"), e.circle && !e.loading && i.push("zmz-button--circle"), e.long && i.push("zmz-button--long")), e.disabled && i.push("zmz-button--disabled"), i;
    }), r = z(() => ({})), l = z(() => n && n.formSize ? n.formSize.value : e.size);
    return () => {
      let i = "", s = "", d = "";
      return t.default && (i = ie("span", {
        class: ["zmz-button__inner"]
      }, t.default())), t.icon && (s = ie("slot", { name: "icon" }, t.icon())), !t.icon && e.icon && !e.loading && (s = ie("i", {
        class: ["zmz-button__icon", e.icon]
      })), t.loading && (d = ie("slot", { name: "loading" }, t.loading())), !t.loading && e.loading && !e.circle && (d = ie("i", {
        class: ["zmz-button__icon", e.loadingIcon]
      })), ie(e.tag, {
        ...a,
        class: ["zmz-button", o.value],
        style: r.value,
        type: e.nativeType
      }, [
        s,
        d,
        i
      ]);
    };
  }
});
xt.install = function(e) {
  e.component(xt.name, xt);
};
const H = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Zr = {
  name: "ZmzButtonGroup",
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    /**
     * 滚动时间
     */
    duration: {
      type: Number,
      default: 10
    },
    /**
     * 右部距离
     */
    right: {
      type: Number,
      default: 50
    },
    /**
     * 底部距离
     */
    bottom: {
      type: Number,
      default: 50
    },
    /**
     * 滚动目标
     */
    scrollTarget: {
      type: String,
      default: ""
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "zmz-icon--arrow-top"
    }
  },
  emits: ["on-backtop", "on-click"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(0), o = b(null), r = b(null), l = z(() => {
      let d = {};
      return e.right && (d.right = e.right + "px"), e.bottom && (d.bottom = e.bottom + "px"), d;
    }), i = () => {
      r.value = setInterval(() => {
        let d = n.value / 4;
        e.scrollTarget ? (document.querySelector(e.scrollTarget).scrollTop -= d, document.querySelector(e.scrollTarget).scrollTop -= d) : (document.documentElement.scrollTop -= d, document.body.scrollTop -= d), n.value === 0 && (t("on-backtop"), clearInterval(r.value), r.value = null);
      }, e.duration), t("on-click");
    }, s = () => {
      e.scrollTarget ? n.value = document.querySelector(e.scrollTarget).scrollTop : n.value = document.body.scrollTop || document.documentElement.scrollTop, n.value > e.visibilityHeight ? a.value = !0 : a.value = !1;
    };
    return de(() => {
      e.scrollTarget ? o.value = document.querySelector(e.scrollTarget).addEventListener("scroll", s) : o.value = window.addEventListener("scroll", s);
    }), Ne(() => {
      o.value && (e.scrollTarget ? document.querySelector(e.scrollTarget).removeEventListener("scroll", s) : window.removeEventListener("scroll", s));
    }), {
      zmzBacktopStyle: l,
      handleBacktop: i,
      handleScroll: s,
      isShow: a
    };
  }
};
function Wr(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-button-group",
    style: j([n.zmzBacktopStyle])
  }, [
    N(e.$slots, "default")
  ], 4);
}
const xn = /* @__PURE__ */ H(Zr, [["render", Wr]]);
xn.install = function(e) {
  e.component(xn.name, xn);
};
const $r = {
  name: "ZmzFloatbuttonItem"
}, jr = { class: "zmz-floatbutton__item" }, Hr = { class: "zmz-floatbutton__item__button" };
function Yr(e, t, a, n, o, r) {
  return v(), _("div", jr, [
    u("button", Hr, [
      N(e.$slots, "default")
    ])
  ]);
}
const Jt = /* @__PURE__ */ H($r, [["render", Yr]]), qr = {
  name: "ZmzFloatbutton",
  components: { ZmzFloatbuttonItem: Jt },
  props: {
    /** 是否吸附到边缘 */
    adsorption: {
      type: Boolean,
      default: !1
    },
    /** 开启组模式 */
    group: {
      type: Boolean,
      default: !1
    },
    /** 禁用按钮 */
    disabled: {
      type: Boolean,
      default: !1
    },
    /** 禁用按钮 */
    drag: {
      type: Boolean,
      default: !1
    },
    /** 按钮类型 */
    type: {
      type: String,
      default: "default",
      validator: (e) => ["success", "warning", "error", "primary", "default", "info"].includes(e)
    },
    /** 按钮形状 */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => ["circle", "square"].includes(e)
    },
    offset: {
      type: [Number, String],
      default: 20,
      validator: (e) => {
        const t = typeof e == "string" ? parseFloat(e) : e;
        return !isNaN(t) && t >= 0;
      }
    },
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: a }) {
    const n = b(null), o = b(null), r = b(null), l = b(!1), i = b(!1), s = b(!1), d = b(!1), c = b(!1), f = b(0), m = b(0), g = b(0), h = b(0), y = Le({
      left: "auto",
      top: "auto",
      right: "20px",
      bottom: "20px"
    }), C = z({
      get() {
        return e.modelValue;
      },
      set(T) {
        t("update:modelValue", T);
      }
    });
    ue(
      () => C.value,
      (T) => {
        l.value = T;
      },
      { immediate: !0 }
    );
    const k = () => typeof e.offset == "string" ? parseFloat(e.offset) : e.offset, S = async () => {
      if (await Se(), !n.value) return;
      const T = k();
      y.left = "auto", y.top = "auto", y.right = Math.max(T, 20) + "px", y.bottom = Math.max(T, 20) + "px", e.adsorption && O();
    }, L = (T) => {
      if (T.button !== 2 || e.disabled) return;
      T.preventDefault();
      const I = n.value;
      if (!I) return;
      const V = T.type === "touchstart" ? T.touches[0] : T, W = V.clientX, $ = V.clientY, X = I.getBoundingClientRect();
      g.value = W - X.left, h.value = $ - X.top, f.value = W, m.value = $, i.value = !0, s.value = !1, c.value = !1, D();
    }, p = (T) => {
      if (e.disabled || !e.drag || !i.value) return;
      const I = T.type === "touchmove" ? T.touches[0] : T, V = I.clientX, W = I.clientY, $ = Math.abs(V - f.value), X = Math.abs(W - m.value);
      if (($ > 5 || X > 5) && (s.value = !0, T.preventDefault()), s.value) {
        const ee = n.value;
        if (!ee) return;
        const J = ee.getBoundingClientRect(), q = k(), ve = window.innerWidth, se = window.innerHeight;
        let he = V - g.value, ye = W - h.value;
        const Te = ve - J.width - q;
        he = Math.max(q, Math.min(Te, he));
        const De = se - J.height - q;
        ye = Math.max(q, Math.min(De, ye)), y.left = `${he}px`, y.top = `${ye}px`, y.right = "auto", y.bottom = "auto", d.value = !1;
      }
    }, w = (T) => {
      T.button === 2 && (e.disabled || (s.value && e.adsorption && O(), s.value && (c.value = !0, setTimeout(() => {
        c.value = !1;
      }, 300)), i.value = !1, s.value = !1, f.value = 0, m.value = 0));
    }, O = () => {
      const T = n.value;
      if (!T) return;
      const I = T.getBoundingClientRect(), V = k(), W = window.innerWidth, $ = window.innerHeight, X = I.width, ee = I.height, J = I.left + X / 2, q = I.top + ee / 2, ve = {
        maxX: W - V,
        minX: V,
        maxY: $ - V,
        minY: V
      }, se = {
        left: J - ve.minX,
        right: ve.maxX - J,
        top: q - ve.minY,
        bottom: ve.maxY - q
      }, he = Object.keys(se).reduce(
        (Te, De) => se[Te] < se[De] ? Te : De
      ), ye = {
        left: {
          left: `${ve.minX}px`,
          top: `${Math.max(ve.minY, Math.min(ve.maxY - ee, q - ee / 2))}px`
        },
        right: {
          left: `${ve.maxX - X}px`,
          top: `${Math.max(ve.minY, Math.min(ve.maxY - ee, q - ee / 2))}px`
        },
        top: {
          left: `${Math.max(ve.minX, Math.min(ve.maxX - X, J - X / 2))}px`,
          top: `${ve.minY}px`
        },
        bottom: {
          left: `${Math.max(ve.minX, Math.min(ve.maxX - X, J - X / 2))}px`,
          top: `${ve.maxY - ee}px`
        }
      };
      Object.assign(y, ye[he]), y.right = "auto", y.bottom = "auto", d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    }, x = () => {
      e.disabled || s.value || c.value || (i.value = !1, l.value = !l.value, console.log(l.value));
    }, D = () => {
      l.value && (l.value = !1);
    }, M = (T) => {
      if (!n.value || l.value === !1) return;
      n.value.contains(T.target) || r.value && r.value.contains(T.target) || D();
    }, R = (T) => {
      T.preventDefault();
    };
    de(async () => {
      await Se(), S(), document.addEventListener("mousemove", p), document.addEventListener("touchmove", p, { passive: !1 }), document.addEventListener("mouseup", w), document.addEventListener("touchend", w), document.addEventListener("click", M), window.addEventListener("resize", O);
    }), Ze(() => {
      document.removeEventListener("mousemove", p), document.removeEventListener("touchmove", p), document.removeEventListener("mouseup", w), document.removeEventListener("touchend", w), document.removeEventListener("click", M), window.removeEventListener("resize", O);
    });
    const B = z(() => {
      let T = [];
      return l.value && T.push("zmz-floatbutton-open"), i.value && T.push("zmz-floatbutton-dragging"), e.type && T.push("zmz-floatbutton--" + e.type), e.shape && !e.group && T.push("zmz-floatbutton--shape-" + e.shape), e.disabled && T.push("zmz-floatbutton--disabled"), T;
    }), F = z(() => {
      let T = [];
      return e.group && T.push("zmz-floatbutton__button--group"), T;
    }), E = z(() => {
      let T = {};
      return d.value && (T.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"), y && Object.keys(y).length > 0 && (T = Object.assign(T, y)), T;
    });
    return {
      zmzFloatbutton: n,
      zmzFloatbuttonButton: o,
      zmzFloatbuttonGroup: r,
      zmzFloatbuttonClass: B,
      zmzFloatbuttonStyle: E,
      zmzFloatbuttonButtonClass: F,
      innerValue: l,
      handleClick: x,
      startDrag: L,
      isDragEnd: c,
      handleRightMenu: R
    };
  }
}, Ur = {
  key: 0,
  ref: "zmzFloatbuttonGroup",
  class: "zmz-floatbutton__menu"
};
function Gr(e, t, a, n, o, r) {
  const l = oe("zmz-floatbutton-item");
  return v(), _("div", {
    ref: "zmzFloatbutton",
    class: P(["zmz-floatbutton", [n.zmzFloatbuttonClass]]),
    style: j([n.zmzFloatbuttonStyle])
  }, [
    e.$slots.default ? (v(), pe(Ve, {
      key: 0,
      name: "zmz-fade-bottom"
    }, {
      default: le(() => [
        n.innerValue ? (v(), _("div", Ur, [
          N(e.$slots, "default")
        ], 512)) : A("", !0)
      ]),
      _: 3
    })) : A("", !0),
    u("div", {
      class: P(["zmz-floatbutton__button", [n.zmzFloatbuttonButtonClass]]),
      ref: "zmzFloatbuttonButton",
      onMousedown: t[0] || (t[0] = (...i) => n.startDrag && n.startDrag(...i)),
      onTouchstart: t[1] || (t[1] = (...i) => n.startDrag && n.startDrag(...i)),
      onContextmenu: t[2] || (t[2] = _e((...i) => n.handleRightMenu && n.handleRightMenu(...i), ["prevent"]))
    }, [
      a.group ? N(e.$slots, "default", { key: 0 }) : N(e.$slots, "button", { key: 1 }, () => [
        K(l, {
          onClick: _e(n.handleClick, ["prevent"])
        }, {
          default: le(() => [...t[3] || (t[3] = [
            u("i", { class: "zmz-icon--menu-1" }, null, -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ])
    ], 34)
  ], 6);
}
const Tn = /* @__PURE__ */ H(qr, [["render", Gr]]);
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
Jt.install = function(e) {
  e.component(Jt.name, Jt);
};
let Xr = () => new Promise((e) => {
  let t = {};
  const a = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  a && (t.effectiveType = a.effectiveType, t.downlink = a.downlink, t.rtt = a.rtt, t.saveData = a.saveData), navigator.onLine ? t.online = !0 : t.online = !1, e(t);
});
const Me = (e) => /^em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax|auto$/.test(e) ? e : e + "px", Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  unitDefaultCompletion: Me
}, Symbol.toStringTag, { value: "Module" })), Qr = {
  name: "ZmzIcon",
  props: {
    /**
     * 名称
     */
    name: {
      type: String,
      default: "",
      required: !0
    },
    /**
     * 图标大小
     */
    size: {
      type: [String, Number],
      default: 12
    },
    /**
     * 图标颜色
     */
    color: {
      type: String,
      default: ""
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(() => `zmz-icon--${e.name}`);
    return {
      zmzIconStyle: z(() => {
        let n = {};
        return e.size && (n.fontSize = Me(e.size)), e.color && (n.color = e.color), n;
      }),
      zmzIconClass: t
    };
  }
};
function Jr(e, t, a, n, o, r) {
  return v(), _("i", {
    class: P(n.zmzIconClass),
    style: j(n.zmzIconStyle)
  }, null, 6);
}
const On = /* @__PURE__ */ H(Qr, [["render", Jr]]);
On.install = function(e) {
  e.component(On.name, On);
};
const Ln = {
  name: "ZmzRow",
  componentName: "ZmzRow",
  props: {
    /**
     * 生成标签
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * 间距
     */
    gutter: Number,
    /**
     * 盒子布局
     */
    flex: {
      type: Boolean,
      default: !1
    },
    /**
     * 盒子换行
     */
    wrap: {
      type: Boolean,
      default: !0
    },
    /**
     * 居中
     */
    justify: {
      type: String,
      default: "",
      validator(e) {
        return ["start", "end", "center", "space-around", "space-between", "space-evenly", ""].includes(e);
      }
    },
    /**
     * 垂直
     */
    align: {
      type: String,
      default: "",
      validator(e) {
        return ["top", "center", "bottom", ""].includes(e);
      }
    }
  },
  setup(e, {
    slots: t
  }) {
    const a = b(e.gutter), n = z(() => {
      let r = {};
      return a.value && (r.marginLeft = `-${a.value / 2}px`, r.marginRight = r.marginLeft), r;
    }), o = z(() => {
      let r = [];
      return e.flex && (r.push("zmz-row--flex"), e.justify && r.push(`zmz-row--flex-justify-${e.justify}`), e.align && r.push(`zmz-row--flex-align-${e.align}`), e.wrap && r.push("zmz-row--flex-wrap")), r;
    });
    return ue(() => e.gutter, (r) => {
      a.value = r;
    }), Fe("gutter", a), () => ie(e.tag, {
      class: [
        "zmz-row",
        o.value
      ],
      style: n.value
    }, t.default && t.default());
  }
};
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
const Dn = {
  name: "ZmzCol",
  props: {
    /**
     * 栅格占比
     */
    span: {
      type: Number,
      default: 24
    },
    /**
     * 生成标签
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * 偏移量
     */
    offset: Number,
    /**
     * 向前
     */
    pull: Number,
    /**
     * 向后
     */
    push: Number,
    /**
     * 以下栅格阶段
     */
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup(e, {
    slots: t
  }) {
    const a = be("gutter", 0), n = z(() => {
      let r = {};
      if (a.value) {
        let l = a.value;
        r.paddingLeft = l / 2 + "px", r.paddingRight = r.paddingLeft;
      }
      return r;
    }), o = z(() => {
      let r = [];
      return ["span", "offset", "pull", "push"].forEach((l) => {
        e[l] && r.push(
          l !== "span" ? `zmz-col-${l}-${e[l]}` : `zmz-col-${e[l]}`
        );
      }), ["xs", "sm", "md", "lg", "xl"].forEach((l) => {
        if (typeof e[l] == "number")
          r.push(`zmz-col-${l}-${e[l]}`);
        else if (typeof e[l] == "object") {
          let i = i[l];
          Object.keys(i).forEach((s) => {
            r.push(
              s !== "span" ? `zmz-col-${l}-${s}-${i[s]}` : `zmz-col-${l}-${i[s]}`
            );
          });
        }
      }), r;
    });
    return () => ie(e.tag, {
      class: ["zmz-col", o.value],
      style: n.value
    }, t.default && t.default());
  }
};
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
const ei = {
  name: "ZmzGrid",
  componentName: "ZmzGrid",
  props: {
    /**
     * 宫格的列数
     */
    column: {
      type: [Number, String],
      default: 4
    },
    /**
     * 宫格间隔
     */
    gutter: {
      type: String,
      default: ""
    },
    /**
     * 宫格对齐方式
     */
    align: {
      type: String,
      default: "left",
      validator(e) {
        return ["left", "center", "right"].includes(e);
      }
    },
    /**
     * 是否显示边线
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
    * 是否宽高一致
    */
    square: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-change"],
  setup(e, { emit: t }) {
    const a = b([]);
    de(() => {
      r();
    });
    const n = z(() => {
      let l = [];
      return e.align && l.push(`zmz-grid--${e.align}`), e.border && l.push("zmz-grid--border"), l;
    }), o = (l) => {
      t("on-change", l);
    }, r = () => {
      a.value.forEach((l, i) => {
        l.instance.proxy.index = i;
      });
    };
    return Fe("zmzGrid", {
      zmzGridList: a,
      column: e.column,
      updateDom: r,
      gutter: e.gutter,
      square: e.square,
      onChange: o
    }), {
      zmzGridClass: n,
      onChange: o
    };
  }
};
function ti(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-grid", [n.zmzGridClass]])
  }, [
    N(e.$slots, "default")
  ], 2);
}
const Mn = /* @__PURE__ */ H(ei, [["render", ti]]);
Mn.install = function(e) {
  e.component(Mn.name, Mn);
};
const ni = {
  name: "ZmzGridItem",
  props: {
    /**
     * 图标
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * 地址
     */
    src: {
      type: String,
      default: ""
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const e = Ce(), t = be("zmzGrid", {}), a = b(0), n = b(null), o = z(() => 100 / t.column + "%"), r = z(() => {
      const f = {};
      return t.gutter && ((a.value + 1) % t.column == 0 ? f["padding-right"] = 0 : f["padding-right"] = `${t.gutter}`), n.value && t.square && (f.height = n.value.offsetWidth + "px"), f["flex-basis"] = o.value, f["margin-bottom"] = t.gutter, f;
    }), l = () => {
      t.onChange(a.value);
    };
    de(() => {
      i(), s();
    }), Ne(() => {
      d(), s();
    });
    const i = () => {
      t.zmzGridList.value.push({
        uid: e.uid,
        instance: e
      });
    }, s = () => {
      t.updateDom();
    }, d = () => {
      if (t.zmzGridList.value && t.zmzGridList.value.length) {
        const f = t.zmzGridList.value.findIndex((m) => m.uid === e.uid);
        t.zmzGridList.value.splice(f, 1);
      }
    }, c = z(() => []);
    return {
      index: a,
      columnNum: o,
      handleClick: l,
      zmzGridItemStyle: r,
      zmzGridItemClass: c,
      zmzGridItem: n
    };
  }
}, ai = { class: "zmz-grid__content" }, li = { class: "zmz-grid__content__icon" }, oi = ["src"], ri = { class: "zmz-grid__content__title" };
function ii(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-grid__item", [n.zmzGridItemClass]]),
    ref: "zmzGridItem",
    style: j([n.zmzGridItemStyle]),
    onClick: t[0] || (t[0] = (...l) => n.handleClick && n.handleClick(...l))
  }, [
    u("div", ai, [
      N(e.$slots, "default", {}, () => [
        u("div", li, [
          N(e.$slots, "icon", {}, () => [
            a.icon ? (v(), _("i", {
              key: 0,
              class: P(a.icon)
            }, null, 2)) : A("", !0),
            a.src ? (v(), _("img", {
              key: 1,
              src: a.src
            }, null, 8, oi)) : A("", !0)
          ])
        ]),
        u("div", ri, [
          N(e.$slots, "title", {}, () => [
            ne(Z(a.title), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const En = /* @__PURE__ */ H(ni, [["render", ii]]);
En.install = function(e) {
  e.component(En.name, En);
};
const si = {
  name: "ZmzCard",
  props: {
    /**
     * 是否显示阴影
     */
    boxShadow: {
      type: String,
      default: "hover",
      validator(e) {
        return ["always", "hover", "never"].includes(e);
      }
    },
    /**
     * 头部边线
     */
    headerBorder: {
      type: Boolean,
      default: !0
    },
    /**
     * 底部边线
     */
    footerBorder: {
      type: Boolean,
      default: !0
    },
    /**
    * 边线
    */
    border: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return {
      zmzCardClass: z(() => {
        let a = [];
        return e.boxShadow && a.push(`zmz-card--${e.boxShadow}`), e.headerBorder && a.push("zmz-card--header-border"), e.footerBorder && a.push("zmz-card--footer-border"), e.border && a.push("zmz-card--border"), a;
      })
    };
  }
}, ui = {
  key: 0,
  class: "zmz-card__header"
}, di = { class: "zmz-card__body" }, ci = {
  key: 1,
  class: "zmz-card__footer"
};
function mi(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-card", [n.zmzCardClass]])
  }, [
    e.$slots.header ? (v(), _("div", ui, [
      N(e.$slots, "header")
    ])) : A("", !0),
    u("div", di, [
      N(e.$slots, "default")
    ]),
    e.$slots.footer ? (v(), _("div", ci, [
      N(e.$slots, "footer")
    ])) : A("", !0)
  ], 2);
}
const Bn = /* @__PURE__ */ H(si, [["render", mi]]);
Bn.install = function(e) {
  e.component(Bn.name, Bn);
};
const fi = {
  name: "ZmzTag",
  props: {
    /**
     * 关闭按钮
     */
    closable: {
      type: Boolean,
      default: !1
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "default", "small", "mini"].includes(e);
      }
    },
    /**
     * 颜色
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "error", "primary", "default", "info"].includes(e);
      }
    },
    /**
     * 效果
     */
    effect: {
      type: String,
      default: "",
      validator(e) {
        return ["plain", "linear", ""].includes(e);
      }
    }
  },
  setup(e, { emit: t }) {
    const a = z(() => {
      let o = [];
      return e.type && o.push(`zmz-tag--${e.type}`), e.size && o.push(`zmz-tag--size-${e.size}`), e.effect && o.push(`zmz-tag--${e.effect}`), o;
    });
    return {
      handleClose: () => {
        t("on-close", !0);
      },
      zmzTagClass: a
    };
  }
}, vi = { class: "zmz-tag__text" };
function zi(e, t, a, n, o, r) {
  return v(), pe(Ve, { name: "zmz-fade" }, {
    default: le(() => [
      u("div", {
        class: P(["zmz-tag", [n.zmzTagClass]])
      }, [
        u("span", vi, [
          N(e.$slots, "default")
        ]),
        a.closable ? (v(), _("i", {
          key: 0,
          class: "zmz-tag__icon zmz-icon--wrong",
          onClick: t[0] || (t[0] = (...l) => n.handleClose && n.handleClose(...l))
        })) : A("", !0)
      ], 2)
    ]),
    _: 3
  });
}
const In = /* @__PURE__ */ H(fi, [["render", zi]]);
In.install = function(e) {
  e.component(In.name, In);
};
const An = {
  name: "ZmzCell",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 描述
     */
    describe: {
      type: String,
      default: ""
    },
    /**
     * 打开方式
     */
    target: {
      type: String,
      default: ""
    },
    /**
     * 原生跳转
     */
    href: {
      type: String,
      default: ""
    },
    /**
     * 右边icon
     */
    iconRight: {
      type: String,
      default: ""
    },
    /**
     * 左边icon
     */
    iconLeft: {
      type: String,
      default: ""
    },
    /**
     * 图片左
     */
    imgLeft: {
      type: String,
      default: ""
    },
    /**
     * 图片右
     */
    imgRight: {
      type: String,
      default: ""
    },
    /**
     * 是否链接
     */
    link: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = z(() => {
      let a = [];
      return e.describe && a.push("zmz-cell--describe"), a;
    });
    return () => {
      let a = "div", n = {};
      e.link && (a = "a", n = {
        href: e.href,
        target: e.target
      });
      let o = "", r = "", l = "";
      if (e.iconLeft || e.imgLeft) {
        let i = "";
        e.iconLeft && (i = ie("i", {
          class: ["zmz-cell__icon__i", e.iconLeft]
        })), e.imgLeft && (i = ie("img", {
          src: ["zmz-cell__icon__img", e.imgLeft]
        })), o = ie("div", {
          class: ["zmz-cell__icon"]
        }, i);
      }
      if (e.title) {
        let i = "";
        e.describe && (i = ie("p", {
          class: ["zmz-cell__left__describe"]
        }, e.describe)), r = ie("div", {
          class: ["zmz-cell__left"]
        }, [ie("span", {
          class: ["zmz-cell__left__title"]
        }, e.title), i]);
      }
      if (e.iconRight || e.imgRight) {
        let i = "";
        e.iconRight && (i = ie("i", {
          class: ["zmz-cell__right__i", e.iconRight]
        })), e.imgRight && (i = ie("img", {
          src: [e.imgRight],
          class: ["zmz-cell__right__img"]
        })), l = ie("div", {
          class: ["zmz-cell__right"]
        }, i);
      }
      return ie("div", {
        class: ["zmz-cell", t.value]
      }, ie(a, { class: ["zmz-cell__wrap"], ...n }, [
        o,
        r,
        l
      ]));
    };
  }
};
An.install = function(e) {
  e.component(An.name, An);
};
const _i = {
  name: "ZmzGraphic",
  props: {
    /**
     * 间距
     */
    spacing: {
      type: String,
      default: "5px 0 5px 0"
    }
  }
}, hi = { class: "zmz-graphic" };
function gi(e, t, a, n, o, r) {
  return v(), _("div", hi, [
    N(e.$slots, "default")
  ]);
}
const Pn = /* @__PURE__ */ H(_i, [["render", gi]]);
Pn.install = function(e) {
  e.component(Pn.name, Pn);
};
const yi = {
  name: "ZmzGraphicImage",
  props: {
    /**
     * 宽度
     */
    width: {
      type: [String, Number],
      default: ""
    },
    /**
     * 高度
     */
    height: {
      type: [String, Number],
      default: ""
    },
    /**
     * 地址
     */
    src: {
      type: String,
      default: ""
    },
    /**
     * 间距
     */
    spacing: {
      type: [String, Number],
      default: 20
    },
    /**
     * 圆角
     */
    radius: {
      type: [String, Number],
      default: "10"
    }
  },
  setup(e) {
    return {
      zmzGraphicImageStyle: z(() => {
        let a = {};
        return e.width && (a.width = Me(e.width)), e.height && (a.height = Me(e.height)), e.spacing && (a["margin-right"] = Me(e.spacing)), e.radius && (a["border-radius"] = Me(e.radius)), a;
      })
    };
  }
}, pi = ["src"];
function bi(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-graphic__image",
    style: j([n.zmzGraphicImageStyle])
  }, [
    N(e.$slots, "image", { class: "zmz-graphic__image__img" }, () => [
      u("img", {
        src: a.src,
        class: "zmz-graphic__image__img"
      }, null, 8, pi)
    ])
  ], 4);
}
const Nn = /* @__PURE__ */ H(yi, [["render", bi]]);
Nn.install = function(e) {
  e.component(Nn.name, Nn);
};
const ki = {
  name: "ZmzGraphicText",
  props: {
    /**
     * 标题
     */
    title: String,
    /**
     * 内容
     */
    content: String,
    /**
     * 对齐方式
     */
    justifyContent: {
      type: String,
      default: "space-around"
    },
    /**
     * 间距
     */
    spacing: {
      type: String,
      default: "5px 0 5px 0"
    }
  },
  setup(e) {
    return {
      zmzGraphicTextStyle: z(() => {
        let a = {};
        return e.justifyContent && (a["justify-content"] = e.justifyContent), e.spacing && (a.padding = e.spacing), a;
      })
    };
  }
}, Ci = { class: "zmz-graphic__text__wrap" }, wi = {
  key: 0,
  class: "zmz-graphic__text__wrap__title"
}, Si = {
  key: 1,
  class: "zmz-graphic__text__wrap__content"
}, xi = {
  key: 0,
  class: "zmz-graphic__text__other"
};
function Ti(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-graphic__text",
    style: j([n.zmzGraphicTextStyle])
  }, [
    u("div", Ci, [
      a.title || e.$slots.title ? (v(), _("div", wi, [
        N(e.$slots, "title", {}, () => [
          ne(Z(a.title), 1)
        ])
      ])) : A("", !0),
      a.content || e.$slots.content ? (v(), _("div", Si, [
        N(e.$slots, "content", {}, () => [
          ne(Z(a.content), 1)
        ])
      ])) : A("", !0)
    ]),
    e.$slots.other || e.$slots.default ? (v(), _("div", xi, [
      e.$slots.default ? N(e.$slots, "default", { key: 0 }) : A("", !0),
      e.$slots.other ? N(e.$slots, "other", { key: 1 }) : A("", !0)
    ])) : A("", !0)
  ], 4);
}
const Vn = /* @__PURE__ */ H(ki, [["render", Ti]]);
Vn.install = function(e) {
  e.component(Vn.name, Vn);
};
const Fn = {
  name: "ZmzContainer",
  props: {
    /**
     * 自定义元素标签
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, { slots: t }) {
    return () => ie(e.tag, {
      class: [e.tag !== "div" ? `zmz-${e.tag}` : "zmz-container"]
    }, t.default && t.default());
  }
};
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
const Oi = {
  name: "ZmzShowmore",
  props: {
    /**
     * 长度
     */
    long: {
      type: Number,
      default: -1
    },
    /**
     * 文字
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 显示文字
     */
    showText: {
      type: String,
      default: "显示更多"
    },
    /**
     * 隐藏文字
     */
    hideText: {
      type: String,
      default: "收起更多"
    },
    /**
     * 是否折叠
     */
    fold: {
      type: Boolean,
      default: !0
    },
    /**
     * 折叠方式
     */
    foldHideButton: {
      type: Boolean,
      default: !0
    },
    /**
     * 折叠方式
     */
    foldShowButton: {
      type: Boolean,
      default: !0
    },
    /**
     * 折叠方式
     */
    foldType: {
      type: String,
      default: "line",
      validator(e) {
        return ["line", "block"].includes(e);
      }
    },
    /**
     * 主题
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "error", "primary", "default", "info"].includes(e);
      }
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-fold"],
  setup(e, { emit: t }) {
    const a = b(e.long), n = z(() => a.value !== -1 && a.value < e.content.length ? e.content.substring(0, a.value) + "..." : e.content), o = z(() => {
      let i = "";
      return e.foldType && (i = `zmz-showmore--${e.foldType}`), e.type && (i = `zmz-showmore--${e.type}`), [{ "zmz-showmore--disbaled": e.disabled }, i];
    }), r = z(() => e.content.length);
    return {
      filterText: n,
      handleShowMore: () => {
        e.disabled || (a.value === e.content.length ? (t("on-fold", "hide"), a.value = e.long) : (t("on-fold", "show"), a.value = e.content.length));
      },
      defaultLong: a,
      zmzShowmoreClass: o,
      contentLong: r
    };
  }
}, Li = { class: "zmz-showmore__text" };
function Di(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-showmore", [n.zmzShowmoreClass]])
  }, [
    u("div", Li, [
      N(e.$slots, "default", {}, () => [
        ne(Z(n.filterText), 1)
      ])
    ]),
    a.fold ? (v(), _("span", {
      key: 0,
      onClick: t[0] || (t[0] = (...l) => n.handleShowMore && n.handleShowMore(...l)),
      class: "zmz-showmore__button"
    }, [
      N(e.$slots, "button", {
        long: "defaultLong",
        contentLong: "contentLong",
        fold: a.fold,
        foldShowButton: a.foldShowButton,
        foldHideButton: a.foldHideButton
      }, () => [
        n.defaultLong !== -1 && n.defaultLong < n.contentLong && a.foldShowButton ? (v(), _(G, { key: 0 }, [
          ne(Z(a.showText), 1)
        ], 64)) : A("", !0),
        n.defaultLong !== -1 && n.defaultLong === n.contentLong && a.foldHideButton ? (v(), _(G, { key: 1 }, [
          ne(Z(a.hideText), 1)
        ], 64)) : A("", !0)
      ])
    ])) : A("", !0)
  ], 2);
}
const Rn = /* @__PURE__ */ H(Oi, [["render", Di]]);
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
const pn = "metaInfo", Fl = "data-vue-meta-info";
function Mi(e, t) {
  e.setAttribute(Fl, !0);
  for (let a in t)
    Object.prototype.hasOwnProperty.call(t, a) && e.setAttribute(a, t[a]);
}
function Ei(e) {
  let t = e.querySelectorAll(`[${Fl}]`);
  for (let a = t.length - 1; a > -1; a--)
    t[a].getAttribute(Fl) === "true" && e.removeChild(t[a]);
}
function go() {
  let e = document.getElementsByTagName("head")[0];
  return {
    /**
     * 设置 metaInfo 信息
     * @param metaOpts
     */
    setMetaInfo(t) {
      for (let a in t) {
        if (a === "title") {
          document.title = t.title;
          continue;
        }
        Object.prototype.hasOwnProperty.call(t, a) && t[a].forEach((n) => {
          let o = document.createElement(a);
          Mi(o, n), e.appendChild(o);
        });
      }
    },
    /**
     * 删除 metaInfo 添加的 meta 信息
     */
    removeMetaInfo() {
      Ei(e);
    }
  };
}
function bn(e) {
  go().removeMetaInfo(), go().setMetaInfo(e);
}
let Ho = () => {
};
Ho.install = function(e) {
  e.mixin({
    beforeCreate() {
      if (this.$options[pn] !== void 0) {
        let t = typeof this.$options[pn];
        this._hasMetaInfo = !0, typeof this.$options.computed > "u" && (this.$options.computed = {}), this.$options.computed.$metaInfo = t === "function" ? this.$options[pn] : () => this.$options[pn];
      }
    },
    computed: {},
    beforeMount() {
      this._hasMetaInfo && bn(this.$metaInfo);
    },
    watch: {
      $metaInfo: function() {
      }
    },
    mounted() {
      this._hasMetaInfo && this.$watch("$metaInfo", () => {
        bn(this.$metaInfo);
      });
    },
    activated() {
      this._hasMetaInfo && bn(this.$metaInfo);
    },
    deactivated() {
      this._hasMetaInfo && bn(this.$metaInfo);
    }
  });
};
const Bi = {
  name: "ZmzAlert",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      requre: ""
    },
    /**
     * 类型
     */
    effect: {
      type: String,
      default: "",
      validator(e) {
        return ["plain", "linear", ""].includes(e);
      }
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "error", "default", "primary", "info"].includes(e);
      }
    },
    /**
     * 显示图标
     */
    showIcon: {
      type: Boolean,
      default: !1
    },
    /**
     * 显示图标
     */
    icon: {
      type: String,
      default: "zmz-icon--wrong"
    },
    /**
     * 居中
     */
    center: {
      type: Boolean,
      default: !1
    },
    /**
     * 关闭文字
     */
    closeText: {
      type: String,
      default: ""
    },
    /**
     * 关闭按钮
     */
    closable: {
      type: Boolean,
      default: !1
    },
    /**
     * 描述
     */
    description: {
      type: String,
      default: ""
    },
    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["on-close", "update:show"],
  setup(e, { emit: t, slots: a }) {
    const n = z(() => {
      let f = [];
      return s.value && f.push("zmz-alert__title--bold"), f;
    }), o = z(() => {
      let f = [];
      return e.type && f.push(`zmz-icon--${e.type}`), f;
    }), r = z(() => {
      let f = [];
      return e.type && f.push(`zmz-alert--${e.type}`), e.center && f.push("zmz-alert--center"), e.effect && f.push(`zmz-alert--${e.effect}`), f;
    }), l = z({
      get() {
        return e.show;
      },
      set(f) {
        t("update:show", f);
      }
    }), i = () => {
      l.value = !1, t("on-close");
    }, s = z(() => a.default && a.default()[0]?.children || e.description), d = z(() => a.title && a.title()[0]?.children || e.title), c = z(() => e.closeText ? "zmz-alert__closebtn--text" : e.icon);
    return {
      handleClose: i,
      zmzAlertTitleClass: n,
      zmzAlertIconClass: o,
      zmzAlertClass: r,
      model: l,
      isDescription: s,
      isTitle: d,
      closeTextClass: c
    };
  }
}, Ii = { class: "zmz-alert__wrap" }, Ai = {
  key: 1,
  class: "zmz-alert__description"
};
function Pi(e, t, a, n, o, r) {
  return v(), pe(Ve, { name: "zmz-fade" }, {
    default: le(() => [
      re(u("div", {
        class: P(["zmz-alert", [n.zmzAlertClass]])
      }, [
        N(e.$slots, "icon", {}, () => [
          a.showIcon ? (v(), _("i", {
            key: 0,
            class: P(["zmz-alert__icon", [n.zmzAlertIconClass]])
          }, null, 2)) : A("", !0)
        ]),
        u("div", Ii, [
          n.isTitle ? (v(), _("div", {
            key: 0,
            class: P(["zmz-alert__title", [n.zmzAlertTitleClass]])
          }, [
            N(e.$slots, "title", {}, () => [
              ne(Z(a.title), 1)
            ])
          ], 2)) : A("", !0),
          n.isDescription ? (v(), _("div", Ai, [
            N(e.$slots, "default", {}, () => [
              ne(Z(a.description), 1)
            ])
          ])) : A("", !0)
        ]),
        N(e.$slots, "closebtn", {}, () => [
          a.closable ? (v(), _("i", {
            key: 0,
            class: P(["zmz-alert__closebtn", n.closeTextClass]),
            onClick: t[0] || (t[0] = (...l) => n.handleClose && n.handleClose(...l))
          }, Z(a.closeText), 3)) : A("", !0)
        ])
      ], 2), [
        [Be, n.model]
      ])
    ]),
    _: 3
  });
}
const Zn = /* @__PURE__ */ H(Bi, [["render", Pi]]);
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
let Yo = 2e3;
const qe = () => Yo++, Ni = (e) => {
  Yo = e;
}, Vi = {
  name: "ZmzLoading",
  props: {
    /**
     * 文本
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "zmz-icon--loading"
    },
    /**
     * 背景
     */
    background: {
      type: String,
      default: ""
    },
    /**
     * 样式
     */
    loadingStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 类名
     */
    loadingClass: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 旋转
     */
    rotate: {
      type: Boolean,
      default: !0
    },
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["vertical", "horizontal"].includes(e);
      }
    },
    /**
     * 全屏
     */
    fullscreen: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    }
  },
  emits: ["update:modelValue", "on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after"],
  setup(e, { emit: t }) {
    const { proxy: a } = Ce(), n = b(null), o = b(!1), r = Le({
      promise: null,
      resolve: null,
      reject: null
    }), l = z(() => {
      let L = [];
      return e.rotate && L.push("zmz-loading__icon__rotate"), L;
    }), i = z(() => {
      let L = [];
      return e.fullscreen && L.push("zmz-loading--fullscreen"), e.mode && L.push(`zmz-loading--${e.mode}`), L;
    }), s = z(() => {
      let L = {};
      return e.background && (L.background = e.background), L;
    }), d = z({
      get() {
        return e.modelValue;
      },
      set(L) {
        t("update:modelValue", L);
      }
    }), c = () => {
      o.value = !1;
    }, f = () => (r.promise = new Promise((L, p) => {
      o.value = !0, m(), r.resolve = L(a), r.reject = p(a);
    }), r.promise), m = () => {
      Se(() => {
        n.value && (n.value.style["z-index"] = qe());
      });
    }, g = () => {
      t("on-open-before");
    }, h = () => {
      m(), t("on-open");
    }, y = () => {
      t("on-open-after");
    }, C = () => {
      t("on-close-before");
    }, k = () => {
      t("on-close");
    }, S = () => {
      t("on-close-after");
    };
    return ue(() => d.value, (L) => {
      o.value = L;
    }, {
      immediate: !0
    }), {
      zmzIconClass: l,
      zmzLoadingClass: i,
      isOpen: o,
      zmzLoadingStyle: s,
      loading: f,
      close: c,
      zmzLoading: n,
      setZindex: m,
      handleAfterLeave: S,
      handleLeave: k,
      handleBeforeLeave: C,
      handleAfterEnter: y,
      handleEnter: h,
      handleBeforeEnter: g
    };
  }
}, Fi = { class: "zmz-loading__wrap" }, Ri = {
  key: 0,
  class: "zmz-loading__icon"
}, Zi = {
  key: 1,
  class: "zmz-loading__content"
};
function Wi(e, t, a, n, o, r) {
  return v(), pe(ct, {
    to: a.teleportDom,
    disabled: !a.teleport
  }, [
    K(Ve, {
      name: "zmz-fade",
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        re(u("div", Ie({
          class: ["zmz-loading", [n.zmzLoadingClass, a.loadingClass]],
          ref: "zmzLoading",
          style: [n.zmzLoadingStyle, a.loadingStyle]
        }, e.$attrs), [
          u("div", Fi, [
            N(e.$slots, "default", {}, () => [
              a.icon ? (v(), _("div", Ri, [
                u("i", {
                  class: P(["zmz-loading__icon__inner", [a.icon, n.zmzIconClass]])
                }, null, 2)
              ])) : A("", !0),
              a.content ? (v(), _("div", Zi, Z(a.content), 1)) : A("", !0)
            ])
          ])
        ], 16), [
          [Be, n.isOpen]
        ])
      ]),
      _: 3
    }, 8, ["onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 8, ["to", "disabled"]);
}
const to = /* @__PURE__ */ H(Vi, [["render", Wi]]);
var qo = (function() {
  if (typeof Map < "u")
    return Map;
  function e(t, a) {
    var n = -1;
    return t.some(function(o, r) {
      return o[0] === a ? (n = r, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(a) {
        var n = e(this.__entries__, a), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(a, n) {
        var o = e(this.__entries__, a);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([a, n]);
      }, t.prototype.delete = function(a) {
        var n = this.__entries__, o = e(n, a);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(a) {
        return !!~e(this.__entries__, a);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(a, n) {
        n === void 0 && (n = null);
        for (var o = 0, r = this.__entries__; o < r.length; o++) {
          var l = r[o];
          a.call(n, l[1], l[0]);
        }
      }, t;
    })()
  );
})(), Rl = typeof window < "u" && typeof document < "u" && window.document === document, xl = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), $i = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(xl) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), ji = 2;
function Hi(e, t) {
  var a = !1, n = !1, o = 0;
  function r() {
    a && (a = !1, e()), n && i();
  }
  function l() {
    $i(r);
  }
  function i() {
    var s = Date.now();
    if (a) {
      if (s - o < ji)
        return;
      n = !0;
    } else
      a = !0, n = !1, setTimeout(l, t);
    o = s;
  }
  return i;
}
var Yi = 20, qi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ui = typeof MutationObserver < "u", Gi = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Hi(this.refresh.bind(this), Yi);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var a = this.observers_, n = a.indexOf(t);
      ~n && a.splice(n, 1), !a.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(a) {
        return a.gatherActive(), a.hasActive();
      });
      return t.forEach(function(a) {
        return a.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Rl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ui ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Rl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var a = t.propertyName, n = a === void 0 ? "" : a, o = qi.some(function(r) {
        return !!~n.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), Uo = (function(e, t) {
  for (var a = 0, n = Object.keys(t); a < n.length; a++) {
    var o = n[a];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}), Wt = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || xl;
}), Go = Ml(0, 0, 0, 0);
function Tl(e) {
  return parseFloat(e) || 0;
}
function yo(e) {
  for (var t = [], a = 1; a < arguments.length; a++)
    t[a - 1] = arguments[a];
  return t.reduce(function(n, o) {
    var r = e["border-" + o + "-width"];
    return n + Tl(r);
  }, 0);
}
function Xi(e) {
  for (var t = ["top", "right", "bottom", "left"], a = {}, n = 0, o = t; n < o.length; n++) {
    var r = o[n], l = e["padding-" + r];
    a[r] = Tl(l);
  }
  return a;
}
function Ki(e) {
  var t = e.getBBox();
  return Ml(0, 0, t.width, t.height);
}
function Qi(e) {
  var t = e.clientWidth, a = e.clientHeight;
  if (!t && !a)
    return Go;
  var n = Wt(e).getComputedStyle(e), o = Xi(n), r = o.left + o.right, l = o.top + o.bottom, i = Tl(n.width), s = Tl(n.height);
  if (n.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= yo(n, "left", "right") + r), Math.round(s + l) !== a && (s -= yo(n, "top", "bottom") + l)), !es(e)) {
    var d = Math.round(i + r) - t, c = Math.round(s + l) - a;
    Math.abs(d) !== 1 && (i -= d), Math.abs(c) !== 1 && (s -= c);
  }
  return Ml(o.left, o.top, i, s);
}
var Ji = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Wt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Wt(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function es(e) {
  return e === Wt(e).document.documentElement;
}
function ts(e) {
  return Rl ? Ji(e) ? Ki(e) : Qi(e) : Go;
}
function ns(e) {
  var t = e.x, a = e.y, n = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(r.prototype);
  return Uo(l, {
    x: t,
    y: a,
    width: n,
    height: o,
    top: a,
    right: t + n,
    bottom: o + a,
    left: t
  }), l;
}
function Ml(e, t, a, n) {
  return { x: e, y: t, width: a, height: n };
}
var as = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ml(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ts(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), ls = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, a) {
      var n = ns(a);
      Uo(this, { target: t, contentRect: n });
    }
    return e;
  })()
), os = (
  /** @class */
  (function() {
    function e(t, a, n) {
      if (this.activeObservations_ = [], this.observations_ = new qo(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = a, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Wt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var a = this.observations_;
        a.has(t) || (a.set(t, new as(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Wt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var a = this.observations_;
        a.has(t) && (a.delete(t), a.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(a) {
        a.isActive() && t.activeObservations_.push(a);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, a = this.activeObservations_.map(function(n) {
          return new ls(n.target, n.broadcastRect());
        });
        this.callback_.call(t, a, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), Xo = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new qo(), Ko = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var a = Gi.getInstance(), n = new os(t, a, this);
      Xo.set(this, n);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Ko.prototype[e] = function() {
    var t;
    return (t = Xo.get(this))[e].apply(t, arguments);
  };
});
var rs = (function() {
  return typeof xl.ResizeObserver < "u" ? xl.ResizeObserver : Ko;
})();
function is(e, t) {
  for (var a = e.className.split(" ").concat(t.split(" ")), n = 0; n < a.length; n++)
    for (var o = a.length - 1; o > n; o--)
      a[o] === "" && a.splice(o, 1), a[n] === a[o] && a.splice(o, 1);
  e.className = a.join(" ");
}
function ss(e, t) {
  for (var a = e.className.split(" "), n = t.split(" "), o = 0; o < n.length; o++) for (var r = a.length - 1; r >= 0; r--) n[o] === a[r] && a.splice(r, 1);
  e.className = a.join(" ");
}
const us = (function() {
  if (typeof document > "u")
    return () => {
    };
  if (document.addEventListener)
    return (e, t, a, n) => e.addEventListener(t, a, n || !1);
  if (document.attachEvent)
    return (e, t, a) => e.attachEvent(`on${t}`, (n) => {
      n = n || window.event, n.target = n.target || n.srcElement, n.currentTarget = e, a.call(e, n);
    });
})(), ds = (function() {
  if (typeof document > "u")
    return () => {
    };
  if (document.addEventListener)
    return (e, t, a, n) => e.removeEventListener(t, a, n || !1);
  if (document.attachEvent)
    return (e, t, a) => e.detachEvent(`on${t}`, a);
})(), Qo = (e) => {
  if (window.resizeObserver)
    return window.resizeObserver;
  let t = window.resizeObserver;
  return t || (t = rs), new t((a) => {
    a && a.length && a.forEach((n) => {
      const { contentRect: o, target: r } = n;
      e && e(o, r);
    });
  });
};
let Jo = () => {
}, cs = (e, t = {}) => {
  let a = K(to, t);
  return Dt(a, e), a.component.proxy;
};
Jo.install = (e) => {
  const t = (n, o) => {
    o.modifiers.fullscreen || is(n, "zmz-loading--parent");
  }, a = (n, o) => {
    o.modifiers.fullscreen || ss(n, "zmz-loading--parent");
  };
  e.directive("zmz-loading", {
    beforeMount(n, o) {
      const r = {}, l = n.getAttribute("zmzLoading-content"), i = n.getAttribute("zmzLoading-loading-style"), s = n.getAttribute("zmzLoading-loading-class"), d = n.getAttribute("zmzLoading-background"), c = n.getAttribute("zmzLoading-rotate"), f = n.getAttribute("zmzLoading-icon"), m = n.getAttribute("zmzLoading-teleport"), g = n.getAttribute("zmzLoading-mode");
      o.modifiers.fullscreen && (r.fullscreen = o.modifiers.fullscreen), m === "true" && (r.teleport = !!m), o.modifiers.teleport && (r.teleport = o.modifiers.teleport), l && (r.content = l), i && (r.loadingStyle = i), s && (r.loadingClass = s), d && (r.background = d), f && (r.icon = f), c && (r.rotate = c), g && (r.mode = g), n.instance = cs(n, r);
    },
    mounted(n, o) {
      n.instance && o.value && (t(n, o), n.instance.isOpen = o.value);
    },
    updated(n, o) {
      n.instance && o.value !== o.oldValue && (n.instance.isOpen = o.value, t(n, o));
    },
    unmounted(n, o) {
      n.instance && (a(n, o), n.instance.isOpen = !1);
    }
  });
};
let Vt = null, ms = (e = {}) => {
  let t = K(to, e);
  return Dt(t, document.body), t.component;
};
function fs(e) {
  return Vt = ms(e), Vt.proxy.setZindex(), Vt.proxy.loading().then((t) => Promise.resolve(t)).catch((t) => Promise.reject(t));
}
const vs = {
  name: "ZmzLoadingEvent",
  start(e) {
    return typeof e == "string" && (e = {
      content: e
    }), fs(e);
  },
  close() {
    Vt && Vt.proxy && Vt.proxy.close();
  }
}, zs = {
  name: "ZmzLoadingbar",
  props: {
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 穿梭节点
     */
    teleportClass: [String, Array],
    /**
     * 显示
     */
    visible: {
      type: Boolean,
      default: !0
    },
    /**
     * 总进度
     */
    totalProgress: {
      type: Number,
      default: 0
    },
    /**
     * 速度
     */
    speed: {
      type: Number,
      default: 5
    },
    /**
     * spinner加载动画
     */
    easing: {
      type: String,
      default: "linear"
    },
    /**
     * 每次前进的百分比
     */
    percent: {
      type: Number,
      default: 0
    },
    /**
     * 颜色
     */
    color: {
      type: String,
      default: "linear"
    },
    /**
     *  错误
     */
    error: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = b(!1), a = b(null), n = z(() => {
      let s = [];
      return e.error && s.push("zmz-loadingbar__bar--error"), s;
    }), o = z(() => {
      let s = {};
      return e.color && (s.background = e.color), e.totalProgress && (s.width = e.totalProgress + "%"), s;
    }), r = () => {
      Se(() => {
        a.value && (a.value.style["z-index"] = qe());
      });
    };
    ue(() => e.visible, (s) => {
      t.value = s;
    }, {
      immediate: !0
    });
    const l = z(() => {
      let s = {};
      return e.color && (s["border-top-color"] = e.color, s["border-left-color"] = e.color), e.easing && (s.animation = "zmz-loadingbar-spinner 500ms " + e.easing + " infinite"), s;
    }), i = z(() => {
      let s = [];
      return e.error && s.push("zmz-loadingbar__spinner__icon--error"), s;
    });
    return {
      zmzLoadingbarBarClass: n,
      zmzLoadingbarBarStyle: o,
      zmzLoadingbar: a,
      setZindex: r,
      currentVisible: t,
      zmzLoadingbarSpinnerIconStyle: l,
      zmzLoadingbarSpinnerIconClass: i
    };
  }
}, _s = { class: "zmz-loadingbar__spinner" };
function hs(e, t, a, n, o, r) {
  return v(), pe(ct, Ie({
    to: a.teleportDom,
    disabled: !a.teleport
  }, e.$attrs), [
    re(u("div", {
      class: P(["zmz-loadingbar", [a.teleportClass]]),
      ref: "zmzLoadingbar"
    }, [
      u("div", {
        class: P(["zmz-loadingbar__bar", [n.zmzLoadingbarBarClass]]),
        style: j([n.zmzLoadingbarBarStyle])
      }, null, 6),
      u("div", _s, [
        u("div", {
          class: P(["zmz-loadingbar__spinner__icon", [n.zmzLoadingbarSpinnerIconClass]]),
          style: j([n.zmzLoadingbarSpinnerIconStyle])
        }, null, 6)
      ])
    ], 2), [
      [Be, n.currentVisible]
    ])
  ], 16, ["to", "disabled"]);
}
const gs = /* @__PURE__ */ H(zs, [["render", hs]]);
let Il = null, Al = null, ys = (e = {}) => {
  let t = K(gs, e);
  return Dt(t, document.body), t.component;
};
function ps(e) {
  let t = ys(e);
  return t.proxy.setZindex(), t.props;
}
const bs = {
  name: "ZmzLoadingBar",
  init(e) {
    return ps(e);
  },
  start(e) {
    let t = this.init();
    t.totalProgress = 0, t.error = !1, Object.keys(e).forEach((a) => {
      a === "error" || a === "totalProgress" || (t[a] = e[a]);
    }), Il = setInterval(() => {
      t.totalProgress < 90 && (t.totalProgress += (t.percent || Math.random()) * t.speed);
    }, 100);
  },
  end() {
    let e = this.init();
    return e.totalProgress = 100, e.error = !1, e.visible = !0, Al && clearTimeout(Al), Al = setTimeout(() => {
      clearTimeout(Il), Il = null, e.visible = !1;
    }, 200), e;
  },
  error() {
    let e = this.end();
    e.totalProgress = 100, e.error = !0;
  }
};
let er = () => {
};
er.install = function(e, t = {}) {
  Array.prototype.remove || (Array.prototype.remove = function(m) {
    if (this.length) {
      var g = this.indexOf(m);
      if (g > -1)
        return this.splice(g, 1), this;
    }
  });
  var a = t.loadingImage || "", n = t.scrollTarget || "", o = t.errorImage || "", r = t.scrollDistance || 100, l = [], i = [];
  const s = (m) => i.indexOf(m) > -1, d = (m, g) => {
    var h = m.ele, y = m.src, C = "", k = 0, S = "";
    if (typeof g.value == "object" ? C = g.value.error ? g.value.error : "" : C = o, typeof g.value == "object" && g.value.scrollTarget ? S = document.querySelector(g.value.scrollTarget) && document.querySelector(g.value.scrollTarget).offsetHeight : n ? S = document.querySelector(n).offsetHeight : S = window.innerHeight, g.value.scrollTarget ? k = h.getBoundingClientRect().top - document.querySelector(g.value.scrollTarget).getBoundingClientRect().top : k = h.getBoundingClientRect().top, parseInt(k) - r < S) {
      var L = new Image();
      return L.src = y, L.onload = function() {
        h.src = y, i.push(y), l.remove(m);
      }, L.onerror = function() {
        h.src = C, i.push(y), l.remove(m);
      }, !0;
    } else
      return !1;
  }, c = (m) => {
    m.value.scrollTarget ? document.querySelector(m.value.scrollTarget).onscroll = function() {
      var g = l.length;
      for (let h = 0; h < g; h++)
        d(l[h], m);
    } : window.addEventListener("scroll", function() {
      var g = l.length;
      for (let h = 0; h < g; h++)
        d(l[h], m);
    });
  }, f = (m, g) => {
    var h = "";
    if (typeof g.value == "object" ? h = g.value.src : h = g.value, s(h))
      return m.src = h, !1;
    var y = {
      ele: m,
      src: h
    };
    typeof g.value == "object" ? m.src = g.value.loading ? g.value.loading : "" : m.src = a, !d(y, g) && (l.push(y), c(g));
  };
  e.directive("zmzlazyload", {
    mounted: f,
    updated: f
  });
};
const ks = {
  name: "ZmzTimeaxis"
}, Cs = { class: "zmz-timeaxis" };
function ws(e, t, a, n, o, r) {
  return v(), _("div", Cs, [
    N(e.$slots, "default")
  ]);
}
const Wn = /* @__PURE__ */ H(ks, [["render", ws]]);
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
const Ss = {
  name: "ZmzTimeaxisItem",
  props: {
    color: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    /**
     * 颜色
     */
    type: {
      type: String,
      default: "",
      validator(e) {
        return ["success", "warning", "error", "primary", "info", ""].includes(e);
      }
    }
  },
  setup(e, { emit: t }) {
    const a = z(() => {
      let r = {};
      return e.color && (r["background-color"] = e.color), r;
    }), n = z(() => {
      let r = [];
      return e.type && !e.color && r.push(`zmz-timeaxis__node--${e.type}`), r;
    });
    return {
      handleClose: () => {
        t("on-close", !0);
      },
      zmzTimeaxisNodeStyle: a,
      zmzTimeaxisNodeClass: n
    };
  }
}, xs = { class: "zmz-timeaxis__item" }, Ts = { class: "zmz-timeaxis__item__wrap" }, Os = {
  key: 0,
  class: "zmz-timeaxis__title"
}, Ls = { class: "zmz-timeaxis__content" }, Ds = {
  key: 1,
  class: "zmz-timeaxis__date"
};
function Ms(e, t, a, n, o, r) {
  return v(), _("div", xs, [
    u("div", {
      class: P(["zmz-timeaxis__node", n.zmzTimeaxisNodeClass]),
      style: j(n.zmzTimeaxisNodeStyle)
    }, [
      N(e.$slots, "icon", {}, () => [
        u("i", {
          class: P(["zmz-timeaxis__node__icon", a.icon])
        }, null, 2)
      ])
    ], 6),
    N(e.$slots, "line", {}, () => [
      t[0] || (t[0] = u("div", { class: "zmz-timeaxis__line" }, null, -1))
    ]),
    u("div", Ts, [
      a.title || e.$slots.title ? (v(), _("div", Os, [
        N(e.$slots, "title", {}, () => [
          ne(Z(a.title), 1)
        ])
      ])) : A("", !0),
      u("div", Ls, [
        N(e.$slots, "default")
      ]),
      a.date || e.$slots.date ? (v(), _("div", Ds, [
        N(e.$slots, "date", {}, () => [
          ne(Z(a.date), 1)
        ])
      ])) : A("", !0)
    ])
  ]);
}
const $n = /* @__PURE__ */ H(Ss, [["render", Ms]]);
$n.install = function(e) {
  e.component($n.name, $n);
};
function Ut() {
  const e = b(1), t = z(() => e.value + 1), a = (p, w) => {
    let O = p;
    for (; O; ) {
      if (O.type.componentName === w)
        return O;
      O = O.parent;
    }
    return !1;
  }, n = (p, w) => {
    let O = p, x = [];
    for (; O; )
      O.$options.name === w && x.push(O), O = O.$parent;
    return x;
  }, o = (p, w) => {
    let O = p.parent;
    for (; O; ) {
      if (O.type.componentName === w)
        return p.parent = O, !0;
      O = O.parent;
    }
    return !1;
  }, r = () => !!navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  ), l = (p, w, O) => {
    p /= 255, w /= 255, O /= 255;
    var x = Math.max(p, w, O), D = Math.min(p, w, O), M, R, B = (x + D) / 2;
    if (x == D)
      M = R = 0;
    else {
      var F = x - D;
      switch (R = B > 0.5 ? F / (2 - x - D) : F / (x + D), x) {
        case p:
          M = (w - O) / F + (w < O ? 6 : 0);
          break;
        case w:
          M = (O - p) / F + 2;
          break;
        case O:
          M = (p - w) / F + 4;
          break;
      }
      M /= 6;
    }
    return [M, R, B];
  }, i = (p) => {
    p = p.toLowerCase();
    var w = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (p && w.test(p)) {
      if (p.length === 4) {
        for (var O = "#", x = 1; x < 4; x += 1)
          O += p.slice(x, x + 1).concat(p.slice(x, x + 1));
        p = O;
      }
      for (var D = [], M = 1; M < 7; M += 2)
        D.push(parseInt("0x" + p.slice(M, M + 2)));
      return D;
    }
    return p;
  }, s = (p, w, O) => {
    if (p.addEventListener)
      return p.addEventListener(w, O, !1), {
        remove() {
          p.removeEventListener(w, O, !1);
        }
      };
    if (p.attachEvent)
      return p.attachEvent("on" + w, O), {
        remove() {
          p.detachEvent("on" + w, O);
        }
      };
  }, d = (p, w) => (Date.prototype.format = function(O) {
    var x = this, D = function(M, R) {
      R || (R = 2), M = String(M);
      for (var B = 0, F = ""; B < R - M.length; B++)
        F += "0";
      return F + M;
    };
    return O.replace(
      /d{1,4}|M{1,4}|S{1,3}|yy(?:yy)?|([hHmsaAZqQwW])\1?|[llLoszz]|"[^"]*"|'[^']*'/g,
      function(M) {
        switch (M) {
          case "d":
            return x.getDate();
          case "dd":
            return D(x.getDate());
          case "ddd":
            return ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"][x.getDay()];
          case "dddd":
            return [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ][x.getDay()];
          case "M":
            return x.getMonth() + 1;
          case "MM":
            return D(x.getMonth() + 1);
          case "MMM":
            return [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ][x.getMonth()];
          case "MMMM":
            return [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ][x.getMonth()];
          case "yy":
            return String(x.getFullYear()).substr(2);
          case "yyyy":
            return x.getFullYear();
          case "h":
            return x.getHours() % 12 || 12;
          case "hh":
            return D(x.getHours() % 12 || 12);
          case "H":
            return x.getHours();
          case "HH":
            return D(x.getHours());
          case "m":
            return x.getMinutes();
          case "mm":
            return D(x.getMinutes());
          case "s":
            return x.getSeconds();
          case "ss":
            return D(x.getSeconds());
          case "SSS":
            return D(x.getMilliseconds(), 3);
          case "SS":
            var R = x.getMilliseconds();
            return R > 99 && (R = Math.round(R / 10)), D(R);
          case "S":
            return x.getMilliseconds();
          case "aa":
            return x.getHours() < 12 ? "am" : "pm";
          case "AA":
            return x.getHours() < 12 ? "AM" : "PM";
          case "ZZ":
            return x.toUTCString().match(/[A-Z]+$/);
          case "q":
            return Math.floor((x.getMonth() + 3) / 3);
          case "qq":
            return D(Math.floor((x.getMonth() + 3) / 3));
          case "Q":
            return ["一", "二", "三", "四"][Math.floor((x.getMonth() + 3) / 3) - 1];
          case "w":
            return ["7", "1", "2", "3", "4", "5", "6"][x.getDay()];
          case "ww":
            return ["07", "01", "02", "03", "04", "05", "06"][x.getDay()];
          case "W":
            return ["日", "一", "二", "三", "四", "五", "六"][x.getDay()];
          default:
            return M.substr(1, M.length - 2);
        }
      }
    );
  }, w && w != "timestamp" ? new Date(p).format(w) : w && w == "timestamp" ? new Date(p).getTime() : new Date(p)), c = (p) => {
    let [w, O, x] = p.split("-"), D = w, M = parseInt(O) - 1;
    M == 0 && (D = parseInt(D) - 1, M = 12);
    let R = x, B = new Date(D, M, 0);
    return B = B.getDate(), R > B && (R = B), M < 10 && (M = "0" + M), R ? D + "-" + M + "-" + R : D + "-" + M;
  }, f = (p) => {
    let [w, O, x] = p.split("-"), D = w, M = parseInt(O) + 1;
    M == 13 && (D = parseInt(D) + 1, M = 1);
    let R = x, B = new Date(D, M, 0);
    return B = B.getDate(), R > B && (R = B), M < 10 && (M = "0" + M), R ? D + "-" + M + "-" + R : D + "-" + M;
  }, m = (p) => {
    if (typeof p == "string")
      return /^em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax|auto$/.test(p) ? p : p + "px";
    if (typeof p == "number")
      return p + "px";
  }, g = (p, w) => Object.prototype.toString.call(p) === "[object Array]" && w == "Array" || Object.prototype.toString.call(p) === "[object Number]" && w == "Number" || Object.prototype.toString.call(p) === "[object String]" && w == "String" || Object.prototype.toString.call(p) === "[object Boolean]" && w == "Boolean" || Object.prototype.toString.call(p) === "[object Object]" && w == "Object" ? !0 : Object.prototype.toString.call(p) === "[object Null]" && w == "Null", h = (p) => {
    let w = {
      left: p.offsetLeft,
      top: p.offsetTop,
      width: p.offsetWidth,
      height: p.offsetHeight
    };
    do {
      if (p = p.offsetParent, p == null) return w;
      w.left += p.offsetLeft, w.top += p.offsetTop;
    } while (p != document.body);
    return w;
  }, y = (p, w) => {
    if (w == "rgb" || w == "rgba")
      if (/rgba?/.test(p)) {
        var O = p.split(",");
        if (O.length < 3) return "";
        p = "#";
        for (var x = 0, D; D = O[x++]; )
          if (x < 4)
            D = parseInt(D.replace(/[^\d]/gi, ""), 10).toString(16), p += D.length == 1 ? "0" + D : D;
          else {
            D = D.replace(")", "");
            var M = parseInt(D * 255), R = M.toString(16);
            p += R;
          }
        return p = p.toUpperCase(), p;
      } else
        return p;
    else if (w == "hsl" || w == "hsla")
      if (/hsla?/.test(p)) {
        const T = (se) => se.replaceAll(" ", "").replaceAll("&nbsp;", "").replaceAll("&nbsp;", ""), I = /hsla?\((\d+),*([\d.]+)%?,*([\d.]+)%?,*([\d.]+)?\)/g.exec(T(p)), V = parseInt(I[1]) / 360, W = parseInt(I[2]) / 100, $ = parseInt(I[3]) / 100;
        let X = I[4];
        const ee = (se, he, ye) => (ye < 0 && (ye += 1), ye > 1 && (ye -= 1), ye < 1 / 6 ? se + (he - se) * 6 * ye : ye < 1 / 2 ? he : ye < 2 / 3 ? se + (he - se) * (2 / 3 - ye) * 6 : se);
        let J, q, ve;
        if (W == 0)
          J = q = ve = $;
        else {
          const se = $ < 0.5 ? $ * (1 + W) : $ + W - $ * W, he = 2 * $ - se;
          J = ee(he, se, V + 1 / 3), q = ee(he, se, V), ve = ee(he, se, V - 1 / 3);
        }
        var B = "";
        X != null ? B = `rgb(${Math.round(J * 255)},${Math.round(q * 255)},${Math.round(ve * 255)}, ${X})` : B = `rgb(${Math.round(J * 255)},${Math.round(q * 255)},${Math.round(ve * 255)})`;
        var F = B.split(",");
        if (F.length < 3) return "";
        var E = "#";
        for (let se = 0, he; he = F[se++]; )
          if (se < 4)
            he = parseInt(he.replace(/[^\d]/gi, ""), 10).toString(16), E += he.length == 1 ? "0" + he : he;
          else {
            he = he.replace(")", "");
            let Te = parseInt(he * 255).toString(16);
            E += Te;
          }
        return E = E.toUpperCase(), E;
      } else
        return p;
    else
      return p;
  }, C = (p, w, O, x) => {
    let D;
    return (...R) => {
      if (clearTimeout(D), x) {
        let B = !D;
        D = setTimeout(() => {
          D = null;
        }, w), B && p.apply(O, R);
      } else
        D = setTimeout(() => {
          p.apply(O, R);
        }, w);
    };
  }, k = (p) => Promise.all(
    [...p].map(() => function(O) {
      return O.complete ? Promise.resolve(!0) : new Promise((x) => {
        O.onload = x, O.onerror = x;
      });
    })
  ), S = (p = 1, w = () => 0, O = []) => O.length < p ? (O.push(w()), S(p, w, O)) : O;
  return {
    count: e,
    plusOne: t,
    findParent: a,
    findParent2: o,
    isMobile: r,
    rgbToHsl: l,
    colorRgb: i,
    eventListener: s,
    formatEvent: d,
    getPreMonthEvent: c,
    getNextMonthEvent: f,
    getValueSuffix: m,
    isDataType: g,
    getElementAttr: h,
    getColorConversion: y,
    debounce: C,
    imageLoad: k,
    getDefaultArr: S,
    preventReClick: (p) => {
      if (p) {
        var w = (/* @__PURE__ */ new Date()).getTime(), O = !0;
        if (p.preventContinuousClickedTime)
          O = w - p.preventContinuousClickedTime > 1500;
        else {
          p.preventContinuousClickedTime = w;
          var x = setTimeout(function() {
            p.preventContinuousClickedTime = null, clearTimeout(x);
          }, 1500);
        }
        return O;
      }
    },
    findComponent: n
  };
}
const Es = {
  name: "ZmzCarousel",
  props: {
    /**
     * 激活层
     */
    modelValue: {
      type: Number,
      default: 0
    },
    /**
     * 高度
     */
    height: {
      type: [Number, String],
      default: 0
    },
    /**
     * 点位置
     */
    indicator: {
      type: String,
      default: "inside",
      validator(e) {
        return ["none", "outside", "inside"].includes(e);
      }
    },
    /**
     * 指示器触发
     */
    trigger: {
      type: String,
      default: "click",
      validator(e) {
        return ["click", "hover"].includes(e);
      }
    },
    /**
     * 箭头
     */
    arrow: {
      type: String,
      default: "hover",
      validator(e) {
        return ["always", "hover", "never"].includes(e);
      }
    },
    /**
     * 自动轮播
     */
    autoplay: {
      type: Boolean,
      default: !1
    },
    /**
     * 循环
     */
    loop: {
      type: Boolean,
      default: !1
    },
    /**
     * 过度时间
     */
    delay: {
      type: Number,
      default: 3e3
    },
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["horizontal", "vertical"].includes(e);
      }
    },
    /**
     * 效果
     */
    effect: {
      type: String,
      default: "slide",
      validator(e) {
        return ["slide", "card", "fade", "custom"].includes(e);
      }
    },
    /**
     * 默认缩放
     */
    scale: Number,
    /**
     * 激活缩放
     */
    activeScale: Number,
    /**
     * 自定义效果
     */
    effectTranslate: Function,
    /**
     * 可滑动
     */
    swipeable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { isMobile: a } = Ut(), n = b(null), o = b(0), r = b(0), l = b(null), i = b(null), s = b(null), d = b(null), c = b([]), f = b(1), m = b(-1), g = b(3e3), h = b(!1), y = b(0), C = b(0), k = b(0), S = b(!1), L = b(null), p = z({
      get() {
        return e.modelValue;
      },
      set(Y) {
        t("update:modelValue", Y);
      }
    });
    de(() => {
      Se(() => {
        p.value < c.value.length && p.value >= 0 && (m.value = p.value), q(), s.value && e.swipeable && (s.value.addEventListener("mousedown", D), s.value.addEventListener("mousemove", M), s.value.addEventListener("mouseup", R), s.value.addEventListener("mouseleave", R), s.value.addEventListener("touchstart", D), s.value.addEventListener("touchmove", M), s.value.addEventListener("touchend", R)), window.addEventListener("resize", w), document.addEventListener("visibilitychange", F);
      });
    }), Ze(() => {
      X(), s.value && e.swipeable && (s.value.removeEventListener("mousedown", D), s.value.removeEventListener("mousemove", M), s.value.removeEventListener("mouseup", R), s.value.removeEventListener("mouseleave", R), s.value.removeEventListener("touchstart", D), s.value.removeEventListener("touchmove", M), s.value.removeEventListener("touchend", R)), document.removeEventListener("visibilitychange", F), window.removeEventListener("resize", w);
    });
    const w = () => {
    }, O = z(() => e.mode === "vertical"), x = z(() => s.value[O.value ? "offsetHeight" : "offsetWidth"]), D = (Y) => {
      if (!h.value) {
        B(Y), X();
        let ce = O.value ? "clientY" : "clientX";
        C.value = a() ? Y.touches[0][ce] : Y[ce], h.value = !0;
      }
    }, M = (Y) => {
      if (h.value) {
        B(Y);
        let ce = O.value ? "clientY" : "clientX";
        y.value = a() ? Y.touches[0][ce] : Y[ce], k.value = y.value - C.value;
      }
    }, R = (Y) => {
      h.value && (B(Y), h.value && Math.abs(k.value) > x.value / 3 && (k.value > 0 ? J(m.value - 1) : J(m.value + 1)), h.value = !1, C.value = 0, y.value = 0, k.value = 0);
    }, B = (Y) => (Y.stopPropagation && Y.stopPropagation(), Y.preventDefault && Y.preventDefault(), Y.cancelBubble = !0, Y.returnValue = !1, !1), F = () => {
      let Y = document.visibilityState;
      Y === "visible" && se(), Y === "hidden" && X();
    }, E = (Y) => {
      e.trigger !== "click" && (m.value = Y);
    }, T = (Y) => {
      e.trigger !== "hover" && (m.value = Y);
    }, I = () => {
      S.value = !1, q();
    }, V = () => {
      S.value = !0, X();
    }, W = () => {
      !e.loop && m.value === 0 || J(m.value - 1);
    }, $ = () => {
      !e.loop && m.value === c.value.length - 1 || J(m.value + 1);
    };
    ue(() => c.value, (Y) => {
      Y.length > 0 && J(p.value);
    }), ue(() => m.value, (Y, ce) => {
      ee(ce), p.value = Y, ce > -1 && t("on-change", Y, ce);
    }), ue(() => e.autoplay, (Y) => {
      Y ? q() : X();
    }), ue(() => e.delay, () => {
      se();
    });
    const X = () => {
      d.value && (clearInterval(d.value), d.value = null);
    }, ee = (Y) => {
      c.value.forEach((ce, Ae) => {
        ce.instance.proxy.setTranslateItem(Ae, m.value, Y);
      });
    }, J = (Y) => {
      if (Y = Number(Y), isNaN(Y) || Y !== Math.floor(Y)) {
        console.warn("[ZMZ-UI Warn][zmz-carousel]index must be an integer.");
        return;
      }
      let ce = c.value.length;
      const Ae = m.value;
      Y < 0 ? m.value = e.loop ? ce - 1 : 0 : Y >= ce ? m.value = e.loop ? 0 : ce - 1 : m.value = Y, Ae === m.value && ee(Ae), se();
    }, q = () => {
      !e.autoplay || d.value || (d.value = setInterval(ve, g.value));
    }, ve = () => {
      m.value < c.value.length - 1 ? m.value++ : m.value = 0;
    }, se = () => {
      X(), q();
    }, he = z(() => ({})), ye = z(() => {
      let Y = [];
      return e.mode && Y.push(`zmz-carousel--${e.mode}`), e.effect && Y.push(`zmz-carousel--${e.effect}`), Y;
    }), Te = z(() => {
      let Y = {};
      return e.height && (Y.height = Me(e.height)), Y;
    }), De = z(() => {
      let Y = !1;
      return e.arrow === "never" ? Y = !1 : (e.arrow === "always" || e.arrow === "hover" && S.value) && (Y = !0), Y;
    }), ge = z(() => {
      let Y = [];
      return e.indicator && Y.push(`zmz-carousel__indicator--${e.indicator}`), Y;
    }), Q = z(() => {
      let Y = [];
      return m.value === 0 && !e.loop && Y.push("zmz-carousel__arrow--disabled"), Y;
    }), ke = z(() => {
      let Y = [];
      return m.value === c.value.length - 1 && !e.loop && Y.push("zmz-carousel__arrow--disabled"), Y;
    });
    return Fe("zmzCarousel", {
      zmzCarouselList: c,
      width: o,
      height: r,
      updateDom: () => {
        c.value.forEach((Y, ce) => {
          Y.instance.props.index = ce;
        });
      },
      zmzCarouselIndex: f,
      loop: e.loop,
      zmzCarousel: n,
      effect: e.effect,
      scale: e.scale,
      activeScale: e.activeScale,
      isVertical: O,
      zmzCarouselWrapDistance: x,
      effectTranslate: e.effectTranslate,
      setActiveItemPosition: J
    }), {
      zmzCarouselList: c,
      transitionStyle: l,
      transformStyle: i,
      handleBtnNext: $,
      handleBtnPrev: W,
      zmzCarouselWrap: s,
      handleMouseleave: I,
      handleMouseenter: V,
      handleDotClick: T,
      itemWidth: o,
      zmzCarouselDotClass: ge,
      zmzCarouselStyle: he,
      zmzCarouselWrapStyle: Te,
      zmzCarouselIndex: f,
      activeIndex: m,
      handleDotMouseenter: E,
      isArrow: De,
      zmzCarouselArrowLeftClass: Q,
      zmzCarouselArrowRightClass: ke,
      zmzCarouselClass: ye,
      zmzCarousel: n,
      zmzCarouselIndicator: L
    };
  }
}, Bs = ["onMouseenter", "onClick"];
function Is(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-carousel", [n.zmzCarouselClass]]),
    onMouseleave: t[2] || (t[2] = (...l) => n.handleMouseleave && n.handleMouseleave(...l)),
    onMouseenter: t[3] || (t[3] = (...l) => n.handleMouseenter && n.handleMouseenter(...l)),
    style: j([n.zmzCarouselStyle])
  }, [
    u("div", {
      class: "zmz-carousel__wrap",
      ref: "zmzCarouselWrap",
      style: j([n.zmzCarouselWrapStyle])
    }, [
      K(Ve, {
        name: a.mode == "horizontal" ? "zmz-carousel-arrow-left" : "zmz-carousel-arrow-top"
      }, {
        default: le(() => [
          re(u("div", {
            class: P(["zmz-carousel__arrow zmz-carousel__arrow--prev", [n.zmzCarouselArrowLeftClass]]),
            onClick: t[0] || (t[0] = _e((...l) => n.handleBtnPrev && n.handleBtnPrev(...l), ["stop"]))
          }, [...t[4] || (t[4] = [
            u("i", { class: "zmz-carousel__arrow__icon zmz-icon--arrow-left" }, null, -1)
          ])], 2), [
            [Be, n.isArrow]
          ])
        ]),
        _: 1
      }, 8, ["name"]),
      K(Ve, {
        name: a.mode == "horizontal" ? "zmz-carousel-arrow-right" : "zmz-carousel-arrow-bottom"
      }, {
        default: le(() => [
          re(u("div", {
            class: P(["zmz-carousel__arrow zmz-carousel__arrow--next", [n.zmzCarouselArrowRightClass]]),
            onClick: t[1] || (t[1] = _e((...l) => n.handleBtnNext && n.handleBtnNext(...l), ["stop"]))
          }, [...t[5] || (t[5] = [
            u("i", { class: "zmz-carousel__arrow__icon zmz-icon--arrow-right" }, null, -1)
          ])], 2), [
            [Be, n.isArrow]
          ])
        ]),
        _: 1
      }, 8, ["name"]),
      N(e.$slots, "default")
    ], 4),
    a.indicator !== "none" ? (v(), _("div", {
      key: 0,
      class: P(["zmz-carousel__indicator", [n.zmzCarouselDotClass]]),
      ref: "zmzCarouselIndicator"
    }, [
      (v(!0), _(G, null, fe(n.zmzCarouselList, (l, i) => (v(), _("div", {
        class: P(["zmz-carousel__indicator__item", { "zmz-carousel__indicator__item__active": i === n.activeIndex }]),
        key: i,
        onMouseenter: (s) => n.handleDotMouseenter(i),
        onClick: _e((s) => n.handleDotClick(i), ["stop"])
      }, [...t[6] || (t[6] = [
        u("span", { class: "zmz-carousel__indicator__item__inner" }, null, -1)
      ])], 42, Bs))), 128))
    ], 2)) : A("", !0)
  ], 38);
}
const jn = /* @__PURE__ */ H(Es, [["render", Is]]);
jn.install = function(e) {
  e.component(jn.name, jn);
};
const As = {
  name: "ZmzCarouselItem",
  props: {
    index: {
      type: Number
    }
  },
  setup(e) {
    const t = Ce(), a = be("zmzCarousel", {}), n = b(!1), o = b(!1), r = b(!1), l = b(1), i = b(0), s = b(!1), d = b(!1), c = b(!1);
    de(() => {
      f(), m();
    }), Ne(() => {
      g(), m();
    });
    const f = () => {
      a.zmzCarouselList.value.push({
        uid: t.uid,
        instance: t
      });
    }, m = () => {
      a.updateDom();
    }, g = () => {
      if (a.zmzCarouselList.value && a.zmzCarouselList.value.length) {
        const D = a.zmzCarouselList.value.findIndex((M) => M.id === t.uid);
        a.zmzCarouselList.value.splice(D, 1);
      }
    }, h = (D, M) => {
      let R = D + 1;
      return R > M - 1 ? 0 : R;
    }, y = (D, M) => {
      let R = D - 1;
      return R < 0 ? M - 1 : R;
    }, C = (D, M, R) => M === 0 && D === R - 1 ? -1 : M === R - 1 && D === 0 ? R : D < M - 1 && M - D >= R / 2 ? R + 1 : D > M + 1 && D - M >= R / 2 ? -2 : D, k = (D, M) => {
      const R = a.zmzCarouselWrapDistance.value, B = a.scale ? a.scale : a.effect == "card" ? 0.8 : 1;
      return d.value ? R * ((2 - B) * (D - M) + 1) / 4 : D < M ? -(1 + B) * R / 4 : (3 + B) * R / 4;
    }, S = (D, M) => a.zmzCarouselWrapDistance.value * (D - M), L = (D, M, R) => a.effectTranslate ? a.effectTranslate(D, M, R) : S(D, M), p = (D, M, R) => {
      const B = a.zmzCarouselList.value.length;
      a.effect !== "card" && R !== void 0 && (c.value = D === M || D === R), D !== M && B > 2 && a.loop && (D = C(D, M, B)), n.value = D === M, r.value = e.index === y(M, B), o.value = e.index === h(M, B), a.effect === "card" ? (d.value = Math.round(Math.abs(D - M)) <= 1, i.value = k(D, M)) : a.effect === "fade" ? i.value = 0 : a.effect === "custom" ? i.value = L(D, M, B) : i.value = S(D, M), l.value = n.value ? a.activeScale ? a.activeScale : 1 : a.scale ? a.scale : a.effect == "card" ? 0.8 : 1, s.value = !0;
    }, w = () => {
      a.effect === "card" && a.setActiveItemPosition(e.index);
    }, O = z(() => {
      let D = {};
      const M = a.isVertical.value ? "translateY" : "translateX";
      return D.transform = `${M}(${i.value}px) scale(${l.value})`, D;
    }), x = z(() => {
      let D = [];
      return n.value && D.push("zmz-carousel__item--active"), o.value && D.push("zmz-carousel__item--next"), r.value && D.push("zmz-carousel__item--prev"), D;
    });
    return {
      zmzCarouselItemStyle: O,
      zmzCarouselItemClass: x,
      handleItemClick: w,
      setTranslateItem: p,
      isReady: s
    };
  }
};
function Ps(e, t, a, n, o, r) {
  return re((v(), _("div", {
    class: P(["zmz-carousel__item", [n.zmzCarouselItemClass]]),
    style: j([n.zmzCarouselItemStyle]),
    onClick: t[0] || (t[0] = _e((...l) => n.handleItemClick && n.handleItemClick(...l), ["stop"]))
  }, [
    N(e.$slots, "default")
  ], 6)), [
    [Be, n.isReady]
  ]);
}
const Hn = /* @__PURE__ */ H(As, [["render", Ps]]);
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
const Ns = {
  name: "ZmzToast",
  props: {
    /**
     * 内容
     */
    content: {
      type: String
    },
    /**
     * 展示位置
     */
    placement: {
      type: String,
      default: "center",
      validator(e) {
        return ["top", "center", "bottom"].includes(e);
      }
    },
    /**
     * 显示时间
     */
    duration: {
      type: Number,
      default: 2e3
    },
    /**
     * 消息类型
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * 标志
     */
    type: {
      type: String,
      default: "text-icon",
      validator(e) {
        return ["text", "icon", "text-icon", "loading", "success", "warning", "error"].includes(e);
      }
    },
    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: !1
    },
    /**
     * 遮罩类名
     */
    maskCustomClass: [Array, String],
    /**
     * 遮罩样式
     */
    maskCustomStyle: Object,
    /**
     * 自定义类名
     */
    toastCustomClass: [Array, String],
    /**
     * 自定义样式
     */
    toastCustomStyle: Object
  },
  emits: ["on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(null), o = b(null), r = Le({
      promise: null,
      resolve: null,
      reject: null
    }), l = z(() => "zmz-scales-" + e.placement), i = z(() => {
      let S = [];
      return e.type && S.push("zmz-toast--" + e.type), e.placement && S.push("zmz-toast--" + e.placement), S;
    }), s = z(() => {
      let S = [];
      return e.type == "text-icon" ? S.push(e.icon) : e.type == "icon" ? S.push(e.content) : e.type == "loading" ? S.push("zmz-icon--loading", "zmz-toast__icon--rotate") : e.icon ? S.push(e.icon) : S.push("zmz-icon--" + e.type), S;
    });
    return Ze(() => {
      r.promise = null, r.resolve = null, r.reject = null;
    }), {
      confirm,
      alert,
      prompt,
      currentVisible: a,
      handleAfterLeave: () => {
        t("on-close-after");
      },
      handleLeave: () => {
        t("on-close");
      },
      handleBeforeLeave: () => {
        t("on-close-before");
      },
      handleAfterEnter: () => {
        t("on-open-after");
      },
      handleEnter: () => {
        t("on-open");
      },
      handleBeforeEnter: () => {
        t("on-open-before");
      },
      zmzTeleportMask: n,
      zmzToast: o,
      setZindex: () => {
        Se(() => {
          n.value && (n.value.style["z-index"] = qe()), o.value && (o.value.style["z-index"] = qe());
        });
      },
      common: () => (r.promise = new Promise((S, L) => {
        a.value = !0, Math.abs(e.duration) != 0 && setTimeout(() => {
          a.value = !1;
        }, e.duration), r.resolve = S, r.reject = L;
      }), r.promise),
      zmzToastClass: i,
      zmzIconClass: s,
      clear: () => (r.promise = new Promise((S, L) => {
        a.value = !1, r.resolve = S, r.reject = L;
      }), r.promise),
      zmzToastTransition: l
    };
  }
}, Vs = { class: "zmz-toast__wrap" }, Fs = {
  key: 1,
  class: "zmz-toast__text"
};
function Rs(e, t, a, n, o, r) {
  return v(), _(G, null, [
    K(Ve, { name: "zmz-fade" }, {
      default: le(() => [
        re(u("div", Ie({
          class: "zmz-toast-mask",
          ref: "zmzTeleportMask"
        }, e.$attrs, {
          style: [a.maskCustomStyle],
          class: [a.maskCustomClass]
        }), null, 16), [
          [Be, n.currentVisible && a.mask]
        ])
      ]),
      _: 1
    }),
    K(Ve, {
      name: n.zmzToastTransition,
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        re(u("div", Ie({ class: "zmz-toast" }, e.$attrs, {
          ref: "zmzToast",
          class: [n.zmzToastClass, a.toastCustomClass],
          style: a.toastCustomStyle
        }), [
          u("div", Vs, [
            a.type != "text" ? (v(), _("div", {
              key: 0,
              class: P(["zmz-toast__icon", n.zmzIconClass])
            }, null, 2)) : A("", !0),
            a.type != "icon" ? (v(), _("div", Fs, Z(a.content), 1)) : A("", !0)
          ])
        ], 16), [
          [Be, n.currentVisible]
        ])
      ]),
      _: 1
    }, 8, ["name", "onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 64);
}
const Zs = /* @__PURE__ */ H(Ns, [["render", Rs]]);
let tr = (e = {}) => {
  let t = K(Zs, e);
  return Dt(t, document.body), t.component;
};
function po(e) {
  let t = tr(e);
  return t.proxy.setZindex(), t.proxy.common().then((a) => Promise.resolve(a)).catch((a) => Promise.reject(a));
}
function Ws() {
  return tr().proxy.clear().then((t) => Promise.resolve(t)).catch((t) => Promise.reject(t));
}
const $s = {
  name: "ZmzToast",
  success(e) {
    return this.common("success", e);
  },
  error(e) {
    return this.common("error", e);
  },
  warning(e) {
    return this.common("warning", e);
  },
  loading(e) {
    return this.common("loading", e);
  },
  clear() {
    return Ws();
  },
  text(e) {
    return this.common("text", e);
  },
  icon(e) {
    return this.common("icon", e);
  },
  toast(e) {
    return po(e);
  },
  common(e, t) {
    return typeof t == "string" && (t = {
      content: t
    }), t.type = e, po(t);
  }
}, js = {
  name: "ZmzMessage",
  props: {
    /**
     * 内容
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "info",
      validator(e) {
        return ["success", "warning", "error", "info", "primary"].includes(e);
      }
    },
    /**
     * 背景色
     */
    background: {
      type: Boolean,
      default: !1
    },
    /**
     * id
     */
    id: String,
    /**
     * 关闭时间
     */
    duration: {
      type: Number,
      default: 3e3
    },
    /**
     * 自定义类名
     */
    messageCustomClass: [Array, String],
    /**
     * 弹窗偏移
     */
    offset: {
      type: Number,
      default: 20
    },
    onClose: Function,
    /**
     * 显示关闭按钮
     */
    showCloseButton: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否html
     */
    html: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否居中
     */
    center: {
      type: Boolean,
      default: !1
    },
    /**
     * 自动关闭
     */
    autoClosed: {
      type: Boolean,
      default: !0
    },
    /**
     * 图标
     */
    icon: String
  },
  emits: ["on-close"],
  setup(e) {
    const t = b(!1), a = b(null), { proxy: n } = Ce(), o = z(() => {
      let m = [];
      return e.type && (e.background ? m.push(`zmz-message--background-${e.type}`) : m.push(`zmz-message--${e.type}`)), e.center && m.push("zmz-message--center"), e.showCloseBtn && m.push("zmz-message--closable"), m;
    }), r = z(() => {
      let m = [];
      return e.type && !e.icon && m.push(`zmz-message__icon zmz-icon--${e.type}-fill`), m;
    }), l = () => {
      n.$el && n.$el.parentNode && n.$el.parentNode.removeChild(n.$el);
    };
    Ze(() => {
      a.value && (clearTimeout(a.value), a.value = null);
    });
    const i = () => {
      e.onClose && typeof e.onClose == "function" && e.onClose(n), nr.close(e.id), t.value = !1, n.$el && n.$el.parentNode && document.body.removeChild(n.$el.parentNode);
    }, s = () => {
      t.value = !0;
    }, d = () => {
      a.value && (clearTimeout(a.value), a.value = null);
    }, c = () => {
      e.duration > 0 && (a.value = setTimeout(() => {
        e.autoClosed && i();
      }, e.duration));
    }, f = (m) => {
      m.keyCode === 27 && e.autoClosed && i();
    };
    return de(() => {
      c(), document.addEventListener("keydown", f);
    }), Ne(() => {
      document.removeEventListener("keydown", f);
    }), {
      handleAfterLeave: l,
      close: i,
      clearTimer: d,
      startTimer: c,
      keydowns: f,
      zmzMessageClass: o,
      zmzMessageTypeClass: r,
      show: s,
      visible: t
    };
  }
}, Hs = {
  key: 2,
  class: "zmz-message__content"
}, Ys = ["innerHTML"];
function qs(e, t, a, n, o, r) {
  return v(), pe(Ve, {
    name: "zmz-fade-top",
    onAfterLeave: n.handleAfterLeave
  }, {
    default: le(() => [
      re(u("div", Ie({
        class: ["zmz-message", [n.zmzMessageClass, a.messageCustomClass]],
        onMouseenter: t[1] || (t[1] = (...l) => n.clearTimer && n.clearTimer(...l)),
        onMouseleave: t[2] || (t[2] = (...l) => n.startTimer && n.startTimer(...l))
      }, e.$attrs), [
        a.icon ? (v(), _("i", {
          key: 0,
          class: P([a.icon])
        }, null, 2)) : (v(), _("i", {
          key: 1,
          class: P([n.zmzMessageTypeClass])
        }, null, 2)),
        a.html ? (v(), _("div", {
          key: 3,
          innerHTML: e.message,
          class: "zmz-message__content"
        }, null, 8, Ys)) : (v(), _("div", Hs, Z(a.content), 1)),
        a.showCloseButton ? (v(), _("div", {
          key: 4,
          class: "zmz-message__close",
          onClick: t[0] || (t[0] = (...l) => n.close && n.close(...l))
        }, [...t[3] || (t[3] = [
          u("i", { class: "zmz-message__close__icon zmz-icon--wrong" }, null, -1)
        ])])) : A("", !0)
      ], 16), [
        [Be, n.visible]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Us = /* @__PURE__ */ H(js, [["render", qs]]);
let lt = [], vt = null, kn = 0, Gs = (e = {}) => {
  let t = "zmz-message-" + (/* @__PURE__ */ new Date()).getTime();
  vt = document.createElement("div"), vt.id = t, vt.style.position = "fixed", vt.style.left = "50%", vt.style.transform = "translateX(-50%)", vt.style.zIndex = qe(), kn = e.offset || 0, lt.forEach((n) => {
    kn += n.el.offsetHeight + 16;
  }), kn += 16, vt.style.top = `${kn}px`, e.id = t;
  let a = K(Us, e);
  return Dt(a, vt), document.body.appendChild(vt), lt.push(a), a.component;
};
function Xs(e) {
  return Gs(e).proxy.show();
}
const It = (e, t, a) => {
  let n = {};
  return typeof a == "string" || typeof a == "boolean" ? n.content = String(a) : n = a, n.type = t, e.message(n);
}, nr = {
  name: "ZmzMessage",
  default(e) {
    return It(this, "default", e);
  },
  primary(e) {
    return It(this, "primary", e);
  },
  success(e) {
    return It(this, "success", e);
  },
  warning(e) {
    return It(this, "warning", e);
  },
  error(e) {
    return It(this, "error", e);
  },
  info(e) {
    return It(this, "info", e);
  },
  message(e, t) {
    return Xs(e);
  },
  close(e, t) {
    let a = lt.length, n = -1;
    for (let r = 0; r < a; r++)
      if (e === lt[r].component.proxy.id) {
        n = r, typeof t == "function" && t(lt[r]), lt.splice(r, 1);
        break;
      }
    if (a <= 1 || n === -1 || n > lt.length - 1) return;
    const o = lt[n].el.offsetHeight;
    for (let r = n; r < a - 1; r++) {
      let l = lt[r].el.parentNode;
      l.style.top = parseInt(l.style.top, 10) - o - 16 + "px";
    }
  },
  closeAll() {
    for (let e = lt.length - 1; e >= 0; e--)
      lt[e].close();
  }
}, Nt = (e, t) => {
  let a = [];
  const n = e.$parent;
  return n ? (n.$options.name === t && a.push(n), a.concat(Nt(n, t))) : [];
}, Ks = (e, t) => {
  let a = e, n = [];
  for (; a; )
    a.$options.name === t && n.push(a), a = a.$parent;
  return n;
}, Qs = (e, t) => {
  let a = e, n = [];
  for (; a; )
    a.$options.name === t && n.push(a), a = a.$parent;
  return n;
}, Pe = (e, t) => {
  let a = e;
  for (; a; ) {
    if (a.type.componentName === t)
      return a;
    a = a.parent;
  }
  return !1;
}, Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  findComponent: Ks,
  findComponentDown: Qs,
  findComponentsUp: Nt,
  findParent: Pe
}, Symbol.toStringTag, { value: "Module" })), eu = {
  name: "ZmzInput",
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: "text"
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * 自动填充
     */
    autocomplete: {
      type: String,
      default: "off"
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 获取焦点
     */
    autofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * 焦点边线
     */
    focusBorder: {
      type: Boolean,
      default: !0
    },
    /**
     * 清空按钮
     */
    clearbtn: {
      type: Boolean,
      default: !1
    },
    /**
     * 切换按钮
     */
    togglePasswordBtn: {
      type: Boolean,
      default: !0
    },
    /**
     * 后缀图标
     */
    suffixIcon: {
      type: String,
      default: ""
    },
    /**
     * 后缀是否显示
     */
    suffix: {
      type: Boolean,
      default: !0
    },
    /**
     * 前缀是否显示
     */
    prefix: {
      type: Boolean,
      default: !0
    },
    /**
     * 后缀图标
     */
    prefixIcon: {
      type: String,
      default: ""
    },
    /**
     * 前置pandding
     */
    prependPadding: {
      type: Number,
      default: -1
    },
    /**
     * 前置Style
     */
    prependStyle: {
      type: String,
      default: ""
    },
    /**
     * 前置Class
     */
    prependClass: {
      type: String,
      default: ""
    },
    /**
     * 后置pandding
     */
    appendPadding: {
      type: Number,
      default: -1
    },
    /**
     * 后置Style
     */
    appendStyle: {
      type: String,
      default: ""
    },
    /**
     * 后置Class
     */
    appendClass: {
      type: String,
      default: ""
    },
    /**
     * 输入限制
     */
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    /**
     * 最大值
     */
    maxlength: {
      type: Number,
      default: -1
    },
    /**
     * 绑定值
     */
    modelValue: [String, Array, Number]
  },
  emits: ["on-change", "on-prefix-icon", "on-suffix-icon", "on-clear", "on-password-switch", "on-focus", "on-blur", "update:modelValue"],
  setup(e, { emit: t, slots: a }) {
    const { parent: n } = Ce(), o = b(!1), r = b(!1), l = b(e.type), i = b(e.autofocus), s = b(e.autofocus), d = b(25), c = b(null), f = b(null), m = be("zmzForm", {}), g = be("zmzFormItem", {}), h = z(() => m && m.size ? m.size.value : ""), y = z(() => e.placeholder ? e.placeholder : g.placeholderPrefixTextInput ? g.placeholderPrefixTextInput.value : ""), C = z(() => m && m.disabled ? m.disabled : e.disabled), k = z(() => m && m.readonly ? m.readonly : e.readonly), S = z({
      get() {
        return e.modelValue;
      },
      set(q) {
        C.value || k.value || t("update:modelValue", q);
      }
    }), L = (q) => {
      t("on-change", q.target.value);
    }, p = (q) => {
      i.value = !0, o.value = !0, t("on-focus", q, S.value);
    }, w = (q) => {
      t("on-blur", q, S.value), i.value = !1, o.value = !1, E.value && E.value.proxy.onValidate("blur");
    }, O = z(() => {
      let q = {};
      return e.suffixIcon && (T.value || I.value) && (q.width = d.value * 2 + "px"), e.type == "password" && T.value && I.value && (q.width = d.value * 2 + "px"), c.value && (q.right = c.value.offsetWidth + "px"), q;
    }), x = z(() => {
      let q = {};
      return e.suffixIcon && (T.value || I.value) && (q.width = d.value * 2 + "px"), e.type == "password" && T.value && I.value && (q.width = d.value * 2 + "px"), f.value && (q.left = f.value.offsetWidth + "px"), q;
    }), D = z(() => {
      let q = {};
      return e.prependPadding > -1 && (q["padding-left"] = e.prependPadding + "px", q["padding-right"] = e.prependPadding + "px"), q;
    }), M = z(() => {
      let q = {};
      return e.appendPadding > -1 && (q["padding-left"] = e.appendPadding + "px", q["padding-right"] = e.appendPadding + "px"), q;
    }), R = z(() => {
      let q = {};
      return e.suffixIcon && (T.value || I.value) && (q["padding-right"] = d.value * 2 + "px"), e.type == "password" && T.value && I.value && (q["padding-right"] = d.value * 2 + "px"), q;
    }), B = z(() => e.suffix && (e.suffixIcon || T.value || I.value || a.suffix || e.showWordLimit && e.maxlength)), F = z(() => e.prefix && (e.prefixIcon || a.prefix)), E = z(() => Pe(n, "ZmzFormItem")), T = z(() => S.value && e.clearbtn && (o.value || r.value)), I = z(() => S.value && e.type == "password" && e.togglePasswordBtn), V = z(() => l.value === "password" ? "zmz-icon--eye-close" : "zmz-icon--eye"), W = z(() => {
      let q = [];
      return (h.value || e.size) && q.push(`zmz-input--size-${h.value || e.size}`), e.type == "number" && q.push("zmz-input--number"), C.value && q.push("zmz-input--disabled"), k.value && q.push("zmz-input--readonly"), e.showPassword && q.push("zmz-input--showPassword"), e.focusBorder && i.value && !C.value && q.push("zmz-input--focus"), B.value && q.push("zmz-input--suffix"), F.value && q.push("zmz-input--prefix"), (a.prepend || a.append) && q.push("zmz-input--ground"), a.prepend && q.push("zmz-input--ground-prepend"), a.append && q.push("zmz-input--ground-append"), q;
    });
    return {
      model: S,
      zmzInputclass: W,
      showClearBtn: T,
      showPasswordBtn: I,
      showPasswordBtnIcon: V,
      handleSwitchPassword: () => {
        l.value == "password" ? l.value = "text" : l.value = "password", t("on-password-switch", l.value);
      },
      handleBlur: w,
      handleFocus: p,
      hovering: r,
      clearInput: () => {
        S.value = "", t("on-clear");
      },
      focusTag: s,
      placeholderText: y,
      typeInner: l,
      suffixClick: () => {
        t("on-suffix-icon");
      },
      zmzInputSuffixStyle: O,
      zmzInputInputStyle: R,
      zmzInputPrefixStyle: x,
      prefixClick: () => {
        t("on-prefix-icon");
      },
      isSuffix: B,
      isPrefix: F,
      zmzInputAppend: c,
      zmzInputPrepend: f,
      zmzInputPrependStyle: D,
      zmzInputAppendStyle: M,
      handleInput: L,
      globalFromDisabled: C,
      globalFromReadonly: k
    };
  }
}, tu = ["type", "autocomplete", "disabled", "readonly", "placeholder", "autofocus", "name", "maxlength"];
function nu(e, t, a, n, o, r) {
  return v(), _("div", Ie({
    class: ["zmz-input", [n.zmzInputclass]],
    onMouseenter: t[9] || (t[9] = (l) => n.hovering = !0),
    onMouseleave: t[10] || (t[10] = (l) => n.hovering = !1)
  }, e.$attrs), [
    e.$slots.prepend ? (v(), _("div", {
      key: 0,
      class: P(["zmz-input__prepend", [a.prependClass]]),
      ref: "zmzInputPrepend",
      style: j([n.zmzInputPrependStyle, a.prependStyle])
    }, [
      N(e.$slots, "prepend")
    ], 6)) : A("", !0),
    re(u("input", {
      type: n.typeInner,
      class: "zmz-input__input",
      onInput: t[0] || (t[0] = (...l) => n.handleInput && n.handleInput(...l)),
      onFocus: t[1] || (t[1] = (...l) => n.handleFocus && n.handleFocus(...l)),
      onBlur: t[2] || (t[2] = (...l) => n.handleBlur && n.handleBlur(...l)),
      autocomplete: a.autocomplete,
      disabled: n.globalFromDisabled,
      readonly: n.globalFromReadonly,
      placeholder: n.placeholderText,
      autofocus: a.autofocus,
      name: a.name,
      "onUpdate:modelValue": t[3] || (t[3] = (l) => n.model = l),
      style: j([n.zmzInputInputStyle]),
      maxlength: a.maxlength
    }, null, 44, tu), [
      [Ir, n.model]
    ]),
    e.$slots.append ? (v(), _("div", {
      key: 1,
      class: P(["zmz-input__append", [a.appendClass]]),
      ref: "zmzInputAppend",
      style: j([n.zmzInputAppendStyle, a.appendStyle])
    }, [
      N(e.$slots, "append")
    ], 6)) : A("", !0),
    n.isSuffix ? (v(), _("div", {
      key: 2,
      class: "zmz-input__suffix",
      style: j([n.zmzInputSuffixStyle])
    }, [
      n.showPasswordBtn ? (v(), _("span", {
        key: 0,
        class: "zmz-input__suffix__icon",
        onClick: t[4] || (t[4] = _e((...l) => n.handleSwitchPassword && n.handleSwitchPassword(...l), ["stop"]))
      }, [
        u("i", {
          class: P(n.showPasswordBtnIcon)
        }, null, 2)
      ])) : A("", !0),
      a.suffixIcon || e.$slots.suffix ? (v(), _("span", {
        key: 1,
        class: "zmz-input__suffix__icon",
        onClick: t[5] || (t[5] = (...l) => n.suffixClick && n.suffixClick(...l))
      }, [
        N(e.$slots, "suffix", {}, () => [
          u("i", {
            class: P(["zmz-input__suffix__icon__inner", a.suffixIcon])
          }, null, 2)
        ])
      ])) : A("", !0),
      n.showClearBtn ? (v(), _("span", {
        key: 2,
        class: "zmz-input__suffix__icon",
        onClick: t[6] || (t[6] = _e((...l) => n.clearInput && n.clearInput(...l), ["stop"]))
      }, [...t[11] || (t[11] = [
        u("i", { class: "zmz-input__suffix__icon__inner zmz-icon--error" }, null, -1)
      ])])) : A("", !0),
      a.showWordLimit ? (v(), _("span", {
        key: 3,
        class: "zmz-input__suffix__text",
        onClick: t[7] || (t[7] = _e((...l) => n.clearInput && n.clearInput(...l), ["stop"]))
      }, Z(n.model.length) + "/" + Z(a.maxlength), 1)) : A("", !0)
    ], 4)) : A("", !0),
    n.isPrefix ? (v(), _("div", {
      key: 3,
      class: "zmz-input__prefix",
      style: j([n.zmzInputPrefixStyle])
    }, [
      a.prefixIcon || e.$slots.prefix ? (v(), _("span", {
        key: 0,
        class: "zmz-input__prefix__icon",
        onClick: t[8] || (t[8] = (...l) => n.prefixClick && n.prefixClick(...l))
      }, [
        N(e.$slots, "prefix", {}, () => [
          u("i", {
            class: P(["zmz-input__prefix__icon__inner", a.prefixIcon])
          }, null, 2)
        ])
      ])) : A("", !0)
    ], 4)) : A("", !0)
  ], 16);
}
const _t = /* @__PURE__ */ H(eu, [["render", nu]]);
_t.install = function(e) {
  e.component(_t.name, _t);
};
const au = {
  name: "ZmzMessagebox",
  components: {
    ZmzInput: _t,
    ZmzButton: xt
  },
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "提示"
    },
    /**
     * 内容
     */
    content: {
      type: String
    },
    /**
     * 确定按钮文本
     */
    confirmBtnText: {
      type: String,
      default: "确定"
    },
    /**
     * 取消按钮文本
     */
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    /**
     * 消息类型
     */
    icon: {
      type: String,
      default: "primary",
      validator(e) {
        return ["success", "warning", "default", "error", "primary", "dark", ""].includes(e);
      }
    },
    /**
     * 内容居中
     */
    contentCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 头部居中
     */
    headerCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 底部居中
     */
    footerCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 整体居中
     */
    center: {
      type: Boolean,
      default: !1
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: "请输入"
    },
    /**
     * 输入框验证
     */
    inputValidation: {
      type: String,
      default: ""
    },
    /**
     * 输入框错误提示
     */
    inputErrorMsg: {
      type: String,
      default: ""
    },
    /**
     * 标志
     */
    type: {
      type: String,
      default: "alert",
      validator(e) {
        return ["alert", "confirm", "prompt"].includes(e);
      }
    },
    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: !0
    },
    /**
     * 点击遮罩关闭
     */
    maskClosable: {
      type: Boolean,
      default: !1
    },
    /**
     * html
     */
    contentHtml: {
      type: Boolean,
      default: !1
    },
    /**
     * 遮罩类名
     */
    maskCustomClass: [Array, String],
    /**
     * 遮罩样式
     */
    maskCustomStyle: Object,
    /**
     * 按键关闭
     */
    closeOnPressEscape: {
      type: Boolean,
      default: !0
    },
    /**
     * 自定义类名
     */
    messageboxCustomClass: [Array, String],
    /**
     * 自定义样式
     */
    messageboxCustomStyle: Object,
    /**
     * 显示关闭
     */
    showCloseBtn: {
      type: Boolean,
      default: !0
    },
    /**
     * 关闭前操作
     */
    beforeClose: Function
  },
  emits: ["on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(!1), o = b(""), r = b(""), l = b(!1), i = b(null), s = b(null), d = Le({
      promise: null,
      resolve: null,
      reject: null
    }), c = z(() => `zmz-icon--${e.icon}-fill`), f = z(() => ({
      "zmz-messagebox--center": e.center
    }));
    Ze(() => {
      d.promise = null, d.resolve = null, d.reject = null;
    });
    const m = () => (d.promise = new Promise((x, D) => {
      a.value = !0, l.value = !1, d.resolve = x, d.reject = D;
    }), d.promise), g = (x) => {
      if (e.type == "alert" || e.type == "confirm")
        x ? d.resolve(x) : d.reject(x), a.value = !1;
      else if (e.type == "prompt")
        if (x)
          if (e.inputValidation) {
            var D = new RegExp(e.inputValidation, "g");
            r.value && D.test(r.value) ? (l.value = !1, a.value = !1, d.resolve({ action: x, value: r.value })) : l.value = !0;
          } else
            a.value = !1, d.resolve({ action: x, value: r.value });
        else
          a.value = !1, d.reject({ action: x, value: r.value });
    }, h = () => {
      e.maskClosable && (typeof e.beforeClose == "function" ? a.value = e.beforeClose() : a.value = !1);
    }, y = () => {
      t("on-open-before");
    }, C = () => {
      t("on-open");
    }, k = () => {
      t("on-open-after");
    }, S = () => {
      t("on-close-before");
    }, L = () => {
      t("on-close");
    }, p = () => {
      t("on-close-after");
    }, w = (x) => {
      x.keyCode == 27 && (a.value = !1);
    };
    return de(() => {
      window.addEventListener("keydown", (x) => {
        e.closeOnPressEscape && w(x);
      });
    }), {
      confirm,
      alert,
      prompt,
      handleAction: g,
      currentVisible: a,
      titleCenter: n,
      bottonCenter: o,
      iconClass: c,
      handleAfterLeave: p,
      handleLeave: L,
      handleBeforeLeave: S,
      handleAfterEnter: k,
      handleEnter: C,
      handleBeforeEnter: y,
      promptValue: r,
      isInputErrorMsg: l,
      zmzTeleportMask: i,
      zmzMessageBox: s,
      setZindex: () => {
        Se(() => {
          i.value && (i.value.style["z-index"] = qe()), s.value && (s.value.style["z-index"] = qe());
        });
      },
      common: m,
      handleCloseMask: h,
      zmzMessageBoxClass: f
    };
  }
}, lu = { class: "zmz-messagebox__wrap" }, ou = { class: "zmz-messagebox__header" }, ru = {
  key: 0,
  class: "zmz-messagebox__content"
}, iu = ["innerHTML"], su = {
  key: 2,
  class: "zmz-messagebox__content__inner"
}, uu = ["innerHTML"], du = {
  key: 1,
  class: "zmz-messagebox__body__prompt"
}, cu = { class: "zmz-messagebox__body__input" }, mu = {
  key: 0,
  class: "zmz-messagebox__body__input__errormsg"
};
function fu(e, t, a, n, o, r) {
  const l = oe("zmz-input"), i = oe("zmz-button");
  return v(), _(G, null, [
    K(Ve, { name: "zmz-fade" }, {
      default: le(() => [
        re(u("div", {
          class: P(["zmz-messagebox zmz-teleport-mask", [a.maskCustomClass]]),
          ref: "zmzTeleportMask",
          style: j([a.maskCustomStyle]),
          onClick: t[0] || (t[0] = _e((...s) => n.handleCloseMask && n.handleCloseMask(...s), ["stop"]))
        }, null, 6), [
          [Be, n.currentVisible && a.mask]
        ])
      ]),
      _: 1
    }),
    K(Ve, {
      name: "zmz-fade-top",
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        re(u("div", {
          class: P(["zmz-messagebox", [n.zmzMessageBoxClass, a.messageboxCustomClass]]),
          ref: "zmzMessageBox",
          style: j(a.messageboxCustomStyle)
        }, [
          u("div", lu, [
            u("div", ou, [
              u("div", {
                class: P(["zmz-messagebox__header__title", { "zmz-messagebox__header__title--center": a.headerCenter }])
              }, Z(a.title), 3),
              a.showCloseBtn ? (v(), _("div", {
                key: 0,
                class: "zmz-messagebox__header__close",
                onClick: t[1] || (t[1] = (s) => n.handleAction(!1))
              }, [...t[6] || (t[6] = [
                u("i", { class: "zmz-messagebox__header__close__icon zmz-icon--wrong" }, null, -1)
              ])])) : A("", !0)
            ]),
            u("div", {
              class: P(["zmz-messagebox__body", { "zmz-messagebox__body--center": a.contentCenter }])
            }, [
              a.type == "alert" || a.type == "confirm" ? (v(), _("div", ru, [
                a.type != "" ? (v(), _("i", {
                  key: 0,
                  class: P([n.iconClass, "zmz-messagebox__content__icon"])
                }, null, 2)) : A("", !0),
                a.contentHtml ? (v(), _("div", {
                  key: 1,
                  class: "zmz-messagebox__content__inner",
                  innerHTML: a.content
                }, null, 8, iu)) : (v(), _("div", su, Z(a.content), 1))
              ])) : A("", !0),
              a.type == "prompt" ? (v(), _(G, { key: 1 }, [
                a.contentHtml ? (v(), _("div", {
                  key: 0,
                  class: "zmz-messagebox__body__prompt",
                  innerHTML: a.content
                }, null, 8, uu)) : (v(), _("div", du, Z(a.content), 1)),
                u("div", cu, [
                  K(l, {
                    placeholder: a.placeholder,
                    class: P({ failed: n.isInputErrorMsg }),
                    modelValue: n.promptValue,
                    "onUpdate:modelValue": t[2] || (t[2] = (s) => n.promptValue = s)
                  }, null, 8, ["placeholder", "class", "modelValue"]),
                  n.isInputErrorMsg ? (v(), _("div", mu, Z(a.inputErrorMsg), 1)) : A("", !0)
                ])
              ], 64)) : A("", !0)
            ], 2),
            u("div", {
              class: P(["zmz-messagebox__footer", { "zmz-messagebox__footer--center": a.footerCenter }])
            }, [
              a.type == "alert" ? (v(), pe(i, {
                key: 0,
                type: "primary",
                class: "zmz-messagebox__footer__confirm",
                size: "small",
                onClick: t[3] || (t[3] = _e((s) => n.handleAction(!0), ["stop"]))
              }, {
                default: le(() => [
                  ne(Z(a.confirmBtnText), 1)
                ]),
                _: 1
              })) : A("", !0),
              a.type == "confirm" || a.type == "prompt" ? (v(), _(G, { key: 1 }, [
                K(i, {
                  type: "default",
                  class: "zmz-messagebox__footer__cancel",
                  onClick: t[4] || (t[4] = _e((s) => n.handleAction(!1), ["stop"]))
                }, {
                  default: le(() => [
                    ne(Z(a.cancelBtnText), 1)
                  ]),
                  _: 1
                }),
                K(i, {
                  type: "primary",
                  class: "zmz-messagebox__footer__confirm",
                  onClick: t[5] || (t[5] = _e((s) => n.handleAction(!0), ["stop"]))
                }, {
                  default: le(() => [
                    ne(Z(a.confirmBtnText), 1)
                  ]),
                  _: 1
                })
              ], 64)) : A("", !0)
            ], 2)
          ])
        ], 6), [
          [Be, n.currentVisible]
        ])
      ]),
      _: 1
    }, 8, ["onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 64);
}
const vu = /* @__PURE__ */ H(au, [["render", fu]]);
let zu = (e = {}) => {
  let t = K(vu, e);
  return Dt(t, document.body), t.component;
};
function _u(e) {
  let t = zu(e);
  return t.proxy.setZindex(), t.proxy.common();
}
const hu = {
  name: "ZmzMessagebox",
  confirm(e) {
    return this.message("confirm", e);
  },
  alert(e) {
    return this.message("alert", e);
  },
  prompt(e) {
    return this.message("prompt", e);
  },
  message(e, t) {
    return typeof t == "string" && (t = {
      content: t
    }), t.type = e, _u(t);
  }
}, gu = {
  name: "ZmzNotice",
  props: {
    /**
     * 内容
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "default", "error", "primary", "info"].includes(e);
      }
    },
    /**
     * 背景色
     */
    background: {
      type: Boolean,
      default: !1
    },
    /**
     * id
     */
    id: String,
    /**
     * 关闭时间
     */
    duration: {
      type: Number,
      default: 3e3
    },
    /**
     * 自定义类名
     */
    noticeCustomClass: [Array, String],
    /**
     * 弹窗偏移
     */
    offset: {
      type: Number,
      default: 20
    },
    onClose: Function,
    /**
     * 显示关闭按钮
     */
    showCloseBtn: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否html
     */
    html: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否居中
     */
    center: {
      type: Boolean,
      default: !1
    },
    /**
     * 自动关闭
     */
    autoClosed: {
      type: Boolean,
      default: !0
    },
    /**
     * 图标
     */
    icon: String,
    /**
     * 标题
     */
    title: {
      type: String,
      default: "提示"
    }
  },
  setup(e) {
    const t = b(!1), a = b(null), { proxy: n } = Ce(), o = z(() => {
      let m = [];
      return e.type && (e.background ? m.push(`zmz-notice--background-${e.type}`) : m.push(`zmz-notice--${e.type}`)), m;
    }), r = z(() => {
      let m = [];
      return e.type && !e.icon && m.push(`zmz-notice__icon zmz-icon--${e.type}-fill`), m;
    });
    Ze(() => {
      a.value && (clearTimeout(a.value), a.value = null);
    });
    const l = () => {
      e.onClose && typeof e.onClose == "function" && e.onClose(n), ar.close(e.id), t.value = !1, n.$el && n.$el.parentNode && document.body.removeChild(n.$el.parentNode);
    }, i = () => {
      a.value && (clearTimeout(a.value), a.value = null);
    }, s = () => {
      e.duration > 0 && (a.value = setTimeout(() => {
        e.autoClosed && l();
      }, e.duration));
    }, d = (m) => {
      m.keyCode === 27 && e.autoClosed && l();
    };
    return de(() => {
      s(), document.addEventListener("keydown", d);
    }), Ne(() => {
      document.removeEventListener("keydown", d);
    }), {
      timer: a,
      zmzNoticeClass: o,
      close: l,
      clearTimer: i,
      startTimer: s,
      keydowns: d,
      visible: t,
      show: () => {
        t.value = !0;
      },
      handleAfterLeave: () => {
        n.$el && n.$el.parentNode && n.$el.parentNode.removeChild(n.$el);
      },
      zmzNoticeTypeClass: r
    };
  }
}, yu = { class: "zmz-notice__wrap" }, pu = { class: "zmz-notice__title" }, bu = {
  key: 0,
  class: "zmz-notice__content"
}, ku = ["innerHTML"], Cu = {
  key: 2,
  class: "zmz-notice__close"
};
function wu(e, t, a, n, o, r) {
  return v(), pe(Ve, {
    name: "zmz-slide-right",
    onAfterLeave: n.handleAfterLeave
  }, {
    default: le(() => [
      re(u("div", Ie({
        class: ["zmz-notice", [n.zmzNoticeClass, a.noticeCustomClass]]
      }, e.$attrs, {
        onMouseenter: t[1] || (t[1] = (...l) => n.clearTimer && n.clearTimer(...l)),
        onMouseleave: t[2] || (t[2] = (...l) => n.startTimer && n.startTimer(...l))
      }), [
        a.icon ? (v(), _("i", {
          key: 0,
          class: P([a.icon])
        }, null, 2)) : (v(), _("i", {
          key: 1,
          class: P([n.zmzNoticeTypeClass])
        }, null, 2)),
        u("div", yu, [
          u("div", pu, Z(a.title), 1),
          a.html ? (v(), _("div", {
            key: 1,
            innerHTML: e.notice,
            class: "zmz-notice__content"
          }, null, 8, ku)) : (v(), _("div", bu, Z(a.content), 1))
        ]),
        a.showCloseBtn ? (v(), _("div", Cu, [
          u("i", {
            class: "zmz-notice__close__btn zmz-icon--wrong",
            onClick: t[0] || (t[0] = (...l) => n.close && n.close(...l))
          })
        ])) : A("", !0)
      ], 16), [
        [Be, n.visible]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Su = /* @__PURE__ */ H(gu, [["render", wu]]);
let ot = [], yt = null, Cn = 0, xu = (e = {}) => {
  let t = "zmz-notice-" + (/* @__PURE__ */ new Date()).getTime();
  yt = document.createElement("div"), yt.id = t, yt.style.position = "fixed", yt.style.right = "20px", yt.style.zIndex = qe(), Cn = e.offset || 0, ot.forEach((n) => {
    Cn += n.el.offsetHeight + 16;
  }), Cn += 16, yt.style.top = `${Cn}px`, e.id = t;
  let a = K(Su, e);
  return Dt(a, yt), document.body.appendChild(yt), ot.push(a), a.component;
};
function Tu(e) {
  return xu(e).proxy.show();
}
const At = (e, t, a) => {
  let n = {};
  return typeof a == "string" ? n.content = a : n = a, n.type = t, e.message(n);
}, ar = {
  success(e) {
    return At(this, "success", e);
  },
  warning(e) {
    return At(this, "warning", e);
  },
  default(e) {
    return At(this, "default", e);
  },
  error(e) {
    return At(this, "error", e);
  },
  primary(e) {
    return At(this, "primary", e);
  },
  info(e) {
    return At(this, "info", e);
  },
  message(e, t) {
    return Tu(e);
  },
  close(e, t) {
    let a = ot.length, n = -1;
    for (let r = 0; r < a; r++)
      if (e === ot[r].component.proxy.id) {
        n = r, typeof t == "function" && t(ot[r]), ot.splice(r, 1);
        break;
      }
    if (a <= 1 || n === -1 || n > ot.length - 1) return;
    const o = ot[n].el.offsetHeight;
    for (let r = n; r < a - 1; r++) {
      let l = ot[r].el.parentNode;
      l.style.top = parseInt(l.style.top, 10) - o - 16 + "px";
    }
  },
  closeAll() {
    for (let e = ot.length - 1; e >= 0; e--)
      ot[e].close();
  }
}, Ou = rt({
  name: "ZmzModel",
  props: {
    /**
     * 默认宽度
     */
    width: {
      type: String,
      default: "500px"
    },
    /**
     * 是否整体居中
     */
    center: {
      type: Boolean,
      default: !1
    },
    /**
     * 点击遮罩关闭
     */
    maskClosable: {
      type: Boolean,
      default: !1
    },
    /**
     * 按下esc关闭
     */
    closeOnPressEscape: {
      type: Boolean,
      default: !0
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 显示关闭
     */
    showCloseBtn: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否阻止关闭
     */
    beforeClose: Function,
    /**
     * 动态绑定
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * 内容是否居中
     */
    contentCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 标题是否居中
     */
    headerCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 底部是否居中
     */
    footerCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否显示头部
     */
    hideHeader: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否显示底部
     */
    hideFooter: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否显示头部
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 传送节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 模态框偏移
     */
    offsetTop: {
      type: String,
      default: ""
    },
    /**
     * 自定义类名
     */
    modelCustomClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 自定义样式
     */
    modelCustomStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 遮罩类名
     */
    maskCustomClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 遮罩样式
     */
    maskCustomStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["update:modelValue", "on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), { proxy: o } = Ce(), r = () => {
      t("on-close-before");
    }, l = () => {
      t("on-close");
    }, i = () => {
      t("on-close-after");
    }, s = () => {
      e.beforeClose && typeof e.beforeClose == "function" ? g.value = e.beforeClose(o) : g.value = !1;
    }, d = () => {
      e.maskClosable && (e.beforeClose && typeof e.beforeClose == "function" ? g.value = e.beforeClose(o) : g.value = !1);
    }, c = () => {
      t("on-open-before");
    }, f = () => {
      y(), t("on-open");
    }, m = () => {
      t("on-open-after");
    }, g = z({
      get() {
        return e.modelValue;
      },
      set(L) {
        t("update:modelValue", L);
      }
    }), h = (L) => {
      e.closeOnPressEscape && L.keyCode == 27 && (g.value = !1);
    };
    de(() => {
      us(window, "keydown", h);
    }), Ze(() => {
      ds(window, "keydown", h);
    });
    const y = () => {
      Se(() => {
        a.value && (a.value.style["z-index"] = qe()), n.value && (n.value.style["z-index"] = qe());
      });
    }, C = z(() => ({})), k = z(() => {
      let L = {};
      return e.width && (L.width = e.width), e.offsetTop && (L.offsetTop = e.offsetTop), L;
    }), S = z(() => {
      let L = [];
      return e.center && L.push("zmz-model--center"), e.border && L.push("zmz-model--border"), L;
    });
    return {
      model: g,
      handleClose: s,
      handleCloseMask: d,
      handleAfterLeave: i,
      handleLeave: l,
      handleBeforeLeave: r,
      handleAfterEnter: m,
      handleEnter: f,
      handleBeforeEnter: c,
      zmzModelMask: a,
      zmzModelClass: S,
      zmzModelStyle: C,
      zmzModel: n,
      zmzModelWrapStyle: k
    };
  }
}), Lu = {
  key: 0,
  class: "zmz-model__header--title"
};
function Du(e, t, a, n, o, r) {
  return v(), pe(ct, {
    to: e.teleportDom,
    disabled: !e.teleport
  }, [
    K(Ve, { name: "zmz-fade" }, {
      default: le(() => [
        e.model && e.mask ? (v(), _("div", Ie({
          key: 0,
          class: "zmz-model zmz-model__mask",
          ref: "zmzModelMask"
        }, e.$attrs, {
          style: [e.maskCustomStyle],
          class: [e.maskCustomClass],
          onClick: t[0] || (t[0] = (...l) => e.handleCloseMask && e.handleCloseMask(...l))
        }), null, 16)) : A("", !0)
      ]),
      _: 1
    }),
    K(Ve, {
      name: "zmz-fade-top",
      onBeforeLeave: e.handleBeforeLeave,
      onLeave: e.handleLeave,
      onAfterLeave: e.handleAfterLeave,
      onBeforeEnter: e.handleBeforeEnter,
      onEnter: e.handleEnter,
      onAfterEnter: e.handleAfterEnter
    }, {
      default: le(() => [
        e.model ? (v(), _("div", Ie({
          key: 0,
          class: "zmz-model"
        }, e.$attrs, {
          ref: "zmzModel",
          class: [e.zmzModelClass, e.modelCustomClass],
          style: [e.zmzModelStyle, e.modelCustomStyle]
        }), [
          u("div", {
            class: "zmz-model__wrap",
            style: j([e.zmzModelWrapStyle])
          }, [
            e.hideHeader ? (v(), _("div", {
              key: 0,
              class: P(["zmz-model__header", { "zmz-model__header--center": e.headerCenter }])
            }, [
              e.$slots.header || e.title ? (v(), _("div", Lu, [
                N(e.$slots, "header", {}, () => [
                  ne(Z(e.title), 1)
                ])
              ])) : A("", !0),
              e.showCloseBtn ? (v(), _("div", {
                key: 1,
                class: "zmz-model__header--close",
                onClick: t[1] || (t[1] = (...l) => e.handleClose && e.handleClose(...l))
              }, [
                N(e.$slots, "close", {}, () => [
                  t[2] || (t[2] = u("i", { class: "zmz-model__header--close__icon zmz-icon--wrong" }, null, -1))
                ])
              ])) : A("", !0)
            ], 2)) : A("", !0),
            u("div", {
              class: P(["zmz-model__body", { "zmz-model__footer--center": e.contentCenter }])
            }, [
              N(e.$slots, "default")
            ], 2),
            e.hideFooter ? (v(), _("div", {
              key: 1,
              class: P(["zmz-model__footer", { "zmz-model__footer--center": e.footerCenter }])
            }, [
              N(e.$slots, "footer")
            ], 2)) : A("", !0)
          ], 4)
        ], 16)) : A("", !0)
      ]),
      _: 3
    }, 8, ["onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 8, ["to", "disabled"]);
}
const Yn = /* @__PURE__ */ H(Ou, [["render", Du]]);
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
const Mu = {
  name: "ZmzDrawer",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 显示关闭按钮
     */
    showCloseBtn: {
      type: Boolean,
      default: !0
    },
    /**
     * 关闭回调
     */
    beforeClose: Function,
    /**
     * 大小
     */
    size: {
      type: String,
      default: "30%"
    },
    /**
     * 双向绑定
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * 内容居中
     */
    contentCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 头部居中
     */
    headerCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 底部居中
     */
    footerCenter: {
      type: Boolean,
      default: !1
    },
    /**
     * 整体居中
     */
    center: {
      type: Boolean,
      default: !1
    },
    /**
     * 方向
     */
    direction: {
      type: String,
      default: "right",
      validator(e) {
        return ["top", "bottom", "right", "left"].includes(e);
      }
    },
    /**
     * 自定义类名
     */
    drawerCustomClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 自定义样式
     */
    drawerCustomStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 隐藏头部
     */
    hideHeader: {
      type: Boolean,
      default: !0
    },
    /**
     * 隐藏底部
     */
    hideFooter: {
      type: Boolean,
      default: !0
    },
    /**
     * 销毁子元素
     */
    destroyOnClose: {
      type: Boolean,
      default: !1
    },
    /**
     * 显示遮罩
     */
    mask: {
      type: Boolean,
      default: !0
    },
    /**
     * 遮罩类名
     */
    maskCustomClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 遮罩样式
     */
    maskCustomStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 点击遮罩关闭
     */
    maskClosable: {
      type: Boolean,
      default: !0
    },
    /**
     * esc关闭
     */
    closeOnPressEscape: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), { proxy: o } = Ce(), r = z(() => `zmz-slide-${e.direction}`), l = () => {
      e.beforeClose && typeof e.beforeClose == "function" ? h.value = e.beforeClose(o) : (h.value = !1, t("update:modelValue", !1));
    }, i = () => {
      e.maskClosable && (e.beforeClose && typeof e.beforeClose == "function" ? h.value = e.beforeClose(o) : (h.value = !1, t("update:modelValue", !1)));
    }, s = () => {
      t("on-close-before");
    }, d = () => {
      t("on-close");
    }, c = () => {
      t("on-close-after");
    }, f = () => {
      t("on-open-before");
    }, m = () => {
      k(), t("on-open");
    }, g = () => {
      t("on-open-after");
    }, h = z({
      get() {
        return e.modelValue;
      },
      set(L) {
        t("update:modelValue", L);
      }
    }), y = z(() => {
      let L = {};
      return (e.direction == "left" || e.direction == "right") && (L.width = e.size), (e.direction == "top" || e.direction == "bottom") && (L.height = e.size), L;
    }), C = z(() => {
      let L = [];
      return e.direction && L.push(`zmz-drawer--${e.direction}`), e.center && L.push("zmz-drawer--center"), L;
    }), k = () => {
      Se(() => {
        n.value && (n.value.style["z-index"] = o.$zmzConfig.zIndex++), a.value && (a.value.style["z-index"] = o.$zmzConfig.zIndex++);
      });
    }, S = () => {
      window.event.keyCode == 27 && (h.value = !1, t("update:modelValue", !1));
    };
    return de(() => {
      window.addEventListener("keydown", () => {
        e.closeOnPressEscape && S();
      });
    }), {
      handleClose: l,
      close,
      model: h,
      handleCloseMask: i,
      handleBeforeEnter: f,
      handleEnter: m,
      handleAfterEnter: g,
      handleBeforeLeave: s,
      handleLeave: d,
      handleAfterLeave: c,
      zmzDrawerClass: C,
      transitionName: r,
      zmzDrawerStyle: y,
      zmzDrawer: a,
      zmzDrawerMask: n
    };
  }
}, Eu = { class: "zmz-drawer__wrap" }, Bu = {
  key: 0,
  class: "zmz-drawer__header__title"
};
function Iu(e, t, a, n, o, r) {
  return v(), pe(ct, {
    to: a.teleportDom,
    disabled: !a.teleport
  }, [
    K(Ve, { name: "zmz-fade" }, {
      default: le(() => [
        n.model && a.mask ? (v(), _("div", Ie({
          key: 0,
          class: "zmz-drawer zmz-drawer__mask",
          ref: "zmzDrawerMask"
        }, e.$attrs, {
          style: [a.maskCustomStyle],
          class: [a.maskCustomClass],
          onClick: t[0] || (t[0] = (...l) => n.handleCloseMask && n.handleCloseMask(...l))
        }), null, 16)) : A("", !0)
      ]),
      _: 1
    }),
    K(Ve, {
      name: n.transitionName,
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        n.model ? (v(), _("div", Ie({
          key: 0,
          class: "zmz-drawer",
          ref: "zmzDrawer"
        }, e.$attrs, {
          style: [n.zmzDrawerStyle, a.drawerCustomStyle],
          class: [n.zmzDrawerClass, a.drawerCustomClass]
        }), [
          u("div", Eu, [
            a.hideHeader ? (v(), _("div", {
              key: 0,
              class: P(["zmz-drawer__header", { "zmz-drawer__header--center": a.headerCenter }])
            }, [
              e.$slots.header || a.title ? (v(), _("div", Bu, [
                N(e.$slots, "header", {}, () => [
                  ne(Z(a.title), 1)
                ])
              ])) : A("", !0),
              a.showCloseBtn ? (v(), _("div", {
                key: 1,
                class: "zmz-drawer__header__close",
                onClick: t[1] || (t[1] = (l) => n.handleClose("close"))
              }, [
                N(e.$slots, "close", {}, () => [
                  t[2] || (t[2] = u("i", { class: "zmz-drawer__header__close__icon zmz-icon--wrong" }, null, -1))
                ])
              ])) : A("", !0)
            ], 2)) : A("", !0),
            u("div", {
              class: P(["zmz-drawer__body", { "zmz-drawer__body--center": a.contentCenter }])
            }, [
              N(e.$slots, "default")
            ], 2),
            a.hideFooter ? (v(), _("div", {
              key: 1,
              class: P(["zmz-drawer__footer", { "zmz-drawer__footer--center": a.footerCenter }])
            }, [
              N(e.$slots, "footer")
            ], 2)) : A("", !0)
          ])
        ], 16)) : A("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 8, ["to", "disabled"]);
}
const qn = /* @__PURE__ */ H(Mu, [["render", Iu]]);
qn.install = function(e) {
  e.component(qn.name, qn);
};
var Ge = "top", tt = "bottom", nt = "right", Xe = "left", no = "auto", _n = [Ge, tt, nt, Xe], $t = "start", cn = "end", Au = "clippingParents", lr = "viewport", Xt = "popper", Pu = "reference", bo = /* @__PURE__ */ _n.reduce(function(e, t) {
  return e.concat([t + "-" + $t, t + "-" + cn]);
}, []), or = /* @__PURE__ */ [].concat(_n, [no]).reduce(function(e, t) {
  return e.concat([t, t + "-" + $t, t + "-" + cn]);
}, []), Nu = "beforeRead", Vu = "read", Fu = "afterRead", Ru = "beforeMain", Zu = "main", Wu = "afterMain", $u = "beforeWrite", ju = "write", Hu = "afterWrite", Yu = [Nu, Vu, Fu, Ru, Zu, Wu, $u, ju, Hu];
function mt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Lt(e) {
  var t = Qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function et(e) {
  var t = Qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ao(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(a) {
    var n = t.styles[a] || {}, o = t.attributes[a] || {}, r = t.elements[a];
    !et(r) || !mt(r) || (Object.assign(r.style, n), Object.keys(o).forEach(function(l) {
      var i = o[l];
      i === !1 ? r.removeAttribute(l) : r.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Uu(e) {
  var t = e.state, a = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, a.popper), t.styles = a, t.elements.arrow && Object.assign(t.elements.arrow.style, a.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], r = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : a[n]), i = l.reduce(function(s, d) {
        return s[d] = "", s;
      }, {});
      !et(o) || !mt(o) || (Object.assign(o.style, i), Object.keys(r).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
const Gu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qu,
  effect: Uu,
  requires: ["computeStyles"]
};
function dt(e) {
  return e.split("-")[0];
}
var Tt = Math.max, Ol = Math.min, jt = Math.round;
function Zl() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function rr() {
  return !/^((?!chrome|android).)*safari/i.test(Zl());
}
function Ht(e, t, a) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  t && et(e) && (o = e.offsetWidth > 0 && jt(n.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && jt(n.height) / e.offsetHeight || 1);
  var l = Lt(e) ? Qe(e) : window, i = l.visualViewport, s = !rr() && a, d = (n.left + (s && i ? i.offsetLeft : 0)) / o, c = (n.top + (s && i ? i.offsetTop : 0)) / r, f = n.width / o, m = n.height / r;
  return {
    width: f,
    height: m,
    top: c,
    right: d + f,
    bottom: c + m,
    left: d,
    x: d,
    y: c
  };
}
function lo(e) {
  var t = Ht(e), a = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - a) <= 1 && (a = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: a,
    height: n
  };
}
function ir(e, t) {
  var a = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (a && ao(a)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ht(e) {
  return Qe(e).getComputedStyle(e);
}
function Xu(e) {
  return ["table", "td", "th"].indexOf(mt(e)) >= 0;
}
function kt(e) {
  return ((Lt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function El(e) {
  return mt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ao(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    kt(e)
  );
}
function ko(e) {
  return !et(e) || // https://github.com/popperjs/popper-core/issues/837
  ht(e).position === "fixed" ? null : e.offsetParent;
}
function Ku(e) {
  var t = /firefox/i.test(Zl()), a = /Trident/i.test(Zl());
  if (a && et(e)) {
    var n = ht(e);
    if (n.position === "fixed")
      return null;
  }
  var o = El(e);
  for (ao(o) && (o = o.host); et(o) && ["html", "body"].indexOf(mt(o)) < 0; ) {
    var r = ht(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function hn(e) {
  for (var t = Qe(e), a = ko(e); a && Xu(a) && ht(a).position === "static"; )
    a = ko(a);
  return a && (mt(a) === "html" || mt(a) === "body" && ht(a).position === "static") ? t : a || Ku(e) || t;
}
function oo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function en(e, t, a) {
  return Tt(e, Ol(t, a));
}
function Qu(e, t, a) {
  var n = en(e, t, a);
  return n > a ? a : n;
}
function sr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ur(e) {
  return Object.assign({}, sr(), e);
}
function dr(e, t) {
  return t.reduce(function(a, n) {
    return a[n] = e, a;
  }, {});
}
var Ju = function(t, a) {
  return t = typeof t == "function" ? t(Object.assign({}, a.rects, {
    placement: a.placement
  })) : t, ur(typeof t != "number" ? t : dr(t, _n));
};
function ed(e) {
  var t, a = e.state, n = e.name, o = e.options, r = a.elements.arrow, l = a.modifiersData.popperOffsets, i = dt(a.placement), s = oo(i), d = [Xe, nt].indexOf(i) >= 0, c = d ? "height" : "width";
  if (!(!r || !l)) {
    var f = Ju(o.padding, a), m = lo(r), g = s === "y" ? Ge : Xe, h = s === "y" ? tt : nt, y = a.rects.reference[c] + a.rects.reference[s] - l[s] - a.rects.popper[c], C = l[s] - a.rects.reference[s], k = hn(r), S = k ? s === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, L = y / 2 - C / 2, p = f[g], w = S - m[c] - f[h], O = S / 2 - m[c] / 2 + L, x = en(p, O, w), D = s;
    a.modifiersData[n] = (t = {}, t[D] = x, t.centerOffset = x - O, t);
  }
}
function td(e) {
  var t = e.state, a = e.options, n = a.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ir(t.elements.popper, o) && (t.elements.arrow = o));
}
const nd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ed,
  effect: td,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yt(e) {
  return e.split("-")[1];
}
var ad = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ld(e, t) {
  var a = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: jt(a * o) / o || 0,
    y: jt(n * o) / o || 0
  };
}
function Co(e) {
  var t, a = e.popper, n = e.popperRect, o = e.placement, r = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, f = e.isFixed, m = l.x, g = m === void 0 ? 0 : m, h = l.y, y = h === void 0 ? 0 : h, C = typeof c == "function" ? c({
    x: g,
    y
  }) : {
    x: g,
    y
  };
  g = C.x, y = C.y;
  var k = l.hasOwnProperty("x"), S = l.hasOwnProperty("y"), L = Xe, p = Ge, w = window;
  if (d) {
    var O = hn(a), x = "clientHeight", D = "clientWidth";
    if (O === Qe(a) && (O = kt(a), ht(O).position !== "static" && i === "absolute" && (x = "scrollHeight", D = "scrollWidth")), O = O, o === Ge || (o === Xe || o === nt) && r === cn) {
      p = tt;
      var M = f && O === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[x]
      );
      y -= M - n.height, y *= s ? 1 : -1;
    }
    if (o === Xe || (o === Ge || o === tt) && r === cn) {
      L = nt;
      var R = f && O === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      g -= R - n.width, g *= s ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: i
  }, d && ad), F = c === !0 ? ld({
    x: g,
    y
  }, Qe(a)) : {
    x: g,
    y
  };
  if (g = F.x, y = F.y, s) {
    var E;
    return Object.assign({}, B, (E = {}, E[p] = S ? "0" : "", E[L] = k ? "0" : "", E.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + y + "px)" : "translate3d(" + g + "px, " + y + "px, 0)", E));
  }
  return Object.assign({}, B, (t = {}, t[p] = S ? y + "px" : "", t[L] = k ? g + "px" : "", t.transform = "", t));
}
function od(e) {
  var t = e.state, a = e.options, n = a.gpuAcceleration, o = n === void 0 ? !0 : n, r = a.adaptive, l = r === void 0 ? !0 : r, i = a.roundOffsets, s = i === void 0 ? !0 : i, d = {
    placement: dt(t.placement),
    variation: Yt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Co(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Co(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const rd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: od,
  data: {}
};
var wn = {
  passive: !0
};
function id(e) {
  var t = e.state, a = e.instance, n = e.options, o = n.scroll, r = o === void 0 ? !0 : o, l = n.resize, i = l === void 0 ? !0 : l, s = Qe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && d.forEach(function(c) {
    c.addEventListener("scroll", a.update, wn);
  }), i && s.addEventListener("resize", a.update, wn), function() {
    r && d.forEach(function(c) {
      c.removeEventListener("scroll", a.update, wn);
    }), i && s.removeEventListener("resize", a.update, wn);
  };
}
const sd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: id,
  data: {}
};
var ud = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Un(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ud[t];
  });
}
var dd = {
  start: "end",
  end: "start"
};
function wo(e) {
  return e.replace(/start|end/g, function(t) {
    return dd[t];
  });
}
function ro(e) {
  var t = Qe(e), a = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: a,
    scrollTop: n
  };
}
function io(e) {
  return Ht(kt(e)).left + ro(e).scrollLeft;
}
function cd(e, t) {
  var a = Qe(e), n = kt(e), o = a.visualViewport, r = n.clientWidth, l = n.clientHeight, i = 0, s = 0;
  if (o) {
    r = o.width, l = o.height;
    var d = rr();
    (d || !d && t === "fixed") && (i = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i + io(e),
    y: s
  };
}
function md(e) {
  var t, a = kt(e), n = ro(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Tt(a.scrollWidth, a.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Tt(a.scrollHeight, a.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + io(e), s = -n.scrollTop;
  return ht(o || a).direction === "rtl" && (i += Tt(a.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: i,
    y: s
  };
}
function so(e) {
  var t = ht(e), a = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + o + n);
}
function cr(e) {
  return ["html", "body", "#document"].indexOf(mt(e)) >= 0 ? e.ownerDocument.body : et(e) && so(e) ? e : cr(El(e));
}
function tn(e, t) {
  var a;
  t === void 0 && (t = []);
  var n = cr(e), o = n === ((a = e.ownerDocument) == null ? void 0 : a.body), r = Qe(n), l = o ? [r].concat(r.visualViewport || [], so(n) ? n : []) : n, i = t.concat(l);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(tn(El(l)))
  );
}
function Wl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fd(e, t) {
  var a = Ht(e, !1, t === "fixed");
  return a.top = a.top + e.clientTop, a.left = a.left + e.clientLeft, a.bottom = a.top + e.clientHeight, a.right = a.left + e.clientWidth, a.width = e.clientWidth, a.height = e.clientHeight, a.x = a.left, a.y = a.top, a;
}
function So(e, t, a) {
  return t === lr ? Wl(cd(e, a)) : Lt(t) ? fd(t, a) : Wl(md(kt(e)));
}
function vd(e) {
  var t = tn(El(e)), a = ["absolute", "fixed"].indexOf(ht(e).position) >= 0, n = a && et(e) ? hn(e) : e;
  return Lt(n) ? t.filter(function(o) {
    return Lt(o) && ir(o, n) && mt(o) !== "body";
  }) : [];
}
function zd(e, t, a, n) {
  var o = t === "clippingParents" ? vd(e) : [].concat(t), r = [].concat(o, [a]), l = r[0], i = r.reduce(function(s, d) {
    var c = So(e, d, n);
    return s.top = Tt(c.top, s.top), s.right = Ol(c.right, s.right), s.bottom = Ol(c.bottom, s.bottom), s.left = Tt(c.left, s.left), s;
  }, So(e, l, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function mr(e) {
  var t = e.reference, a = e.element, n = e.placement, o = n ? dt(n) : null, r = n ? Yt(n) : null, l = t.x + t.width / 2 - a.width / 2, i = t.y + t.height / 2 - a.height / 2, s;
  switch (o) {
    case Ge:
      s = {
        x: l,
        y: t.y - a.height
      };
      break;
    case tt:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case nt:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case Xe:
      s = {
        x: t.x - a.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? oo(o) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (r) {
      case $t:
        s[d] = s[d] - (t[c] / 2 - a[c] / 2);
        break;
      case cn:
        s[d] = s[d] + (t[c] / 2 - a[c] / 2);
        break;
    }
  }
  return s;
}
function mn(e, t) {
  t === void 0 && (t = {});
  var a = t, n = a.placement, o = n === void 0 ? e.placement : n, r = a.strategy, l = r === void 0 ? e.strategy : r, i = a.boundary, s = i === void 0 ? Au : i, d = a.rootBoundary, c = d === void 0 ? lr : d, f = a.elementContext, m = f === void 0 ? Xt : f, g = a.altBoundary, h = g === void 0 ? !1 : g, y = a.padding, C = y === void 0 ? 0 : y, k = ur(typeof C != "number" ? C : dr(C, _n)), S = m === Xt ? Pu : Xt, L = e.rects.popper, p = e.elements[h ? S : m], w = zd(Lt(p) ? p : p.contextElement || kt(e.elements.popper), s, c, l), O = Ht(e.elements.reference), x = mr({
    reference: O,
    element: L,
    placement: o
  }), D = Wl(Object.assign({}, L, x)), M = m === Xt ? D : O, R = {
    top: w.top - M.top + k.top,
    bottom: M.bottom - w.bottom + k.bottom,
    left: w.left - M.left + k.left,
    right: M.right - w.right + k.right
  }, B = e.modifiersData.offset;
  if (m === Xt && B) {
    var F = B[o];
    Object.keys(R).forEach(function(E) {
      var T = [nt, tt].indexOf(E) >= 0 ? 1 : -1, I = [Ge, tt].indexOf(E) >= 0 ? "y" : "x";
      R[E] += F[I] * T;
    });
  }
  return R;
}
function _d(e, t) {
  t === void 0 && (t = {});
  var a = t, n = a.placement, o = a.boundary, r = a.rootBoundary, l = a.padding, i = a.flipVariations, s = a.allowedAutoPlacements, d = s === void 0 ? or : s, c = Yt(n), f = c ? i ? bo : bo.filter(function(h) {
    return Yt(h) === c;
  }) : _n, m = f.filter(function(h) {
    return d.indexOf(h) >= 0;
  });
  m.length === 0 && (m = f);
  var g = m.reduce(function(h, y) {
    return h[y] = mn(e, {
      placement: y,
      boundary: o,
      rootBoundary: r,
      padding: l
    })[dt(y)], h;
  }, {});
  return Object.keys(g).sort(function(h, y) {
    return g[h] - g[y];
  });
}
function hd(e) {
  if (dt(e) === no)
    return [];
  var t = Un(e);
  return [wo(e), t, wo(t)];
}
function gd(e) {
  var t = e.state, a = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = a.mainAxis, r = o === void 0 ? !0 : o, l = a.altAxis, i = l === void 0 ? !0 : l, s = a.fallbackPlacements, d = a.padding, c = a.boundary, f = a.rootBoundary, m = a.altBoundary, g = a.flipVariations, h = g === void 0 ? !0 : g, y = a.allowedAutoPlacements, C = t.options.placement, k = dt(C), S = k === C, L = s || (S || !h ? [Un(C)] : hd(C)), p = [C].concat(L).reduce(function(se, he) {
      return se.concat(dt(he) === no ? _d(t, {
        placement: he,
        boundary: c,
        rootBoundary: f,
        padding: d,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : he);
    }, []), w = t.rects.reference, O = t.rects.popper, x = /* @__PURE__ */ new Map(), D = !0, M = p[0], R = 0; R < p.length; R++) {
      var B = p[R], F = dt(B), E = Yt(B) === $t, T = [Ge, tt].indexOf(F) >= 0, I = T ? "width" : "height", V = mn(t, {
        placement: B,
        boundary: c,
        rootBoundary: f,
        altBoundary: m,
        padding: d
      }), W = T ? E ? nt : Xe : E ? tt : Ge;
      w[I] > O[I] && (W = Un(W));
      var $ = Un(W), X = [];
      if (r && X.push(V[F] <= 0), i && X.push(V[W] <= 0, V[$] <= 0), X.every(function(se) {
        return se;
      })) {
        M = B, D = !1;
        break;
      }
      x.set(B, X);
    }
    if (D)
      for (var ee = h ? 3 : 1, J = function(he) {
        var ye = p.find(function(Te) {
          var De = x.get(Te);
          if (De)
            return De.slice(0, he).every(function(ge) {
              return ge;
            });
        });
        if (ye)
          return M = ye, "break";
      }, q = ee; q > 0; q--) {
        var ve = J(q);
        if (ve === "break") break;
      }
    t.placement !== M && (t.modifiersData[n]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const yd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function xo(e, t, a) {
  return a === void 0 && (a = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - a.y,
    right: e.right - t.width + a.x,
    bottom: e.bottom - t.height + a.y,
    left: e.left - t.width - a.x
  };
}
function To(e) {
  return [Ge, nt, tt, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function pd(e) {
  var t = e.state, a = e.name, n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, l = mn(t, {
    elementContext: "reference"
  }), i = mn(t, {
    altBoundary: !0
  }), s = xo(l, n), d = xo(i, o, r), c = To(s), f = To(d);
  t.modifiersData[a] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const bd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: pd
};
function kd(e, t, a) {
  var n = dt(e), o = [Xe, Ge].indexOf(n) >= 0 ? -1 : 1, r = typeof a == "function" ? a(Object.assign({}, t, {
    placement: e
  })) : a, l = r[0], i = r[1];
  return l = l || 0, i = (i || 0) * o, [Xe, nt].indexOf(n) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Cd(e) {
  var t = e.state, a = e.options, n = e.name, o = a.offset, r = o === void 0 ? [0, 0] : o, l = or.reduce(function(c, f) {
    return c[f] = kd(f, t.rects, r), c;
  }, {}), i = l[t.placement], s = i.x, d = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = l;
}
const wd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Cd
};
function Sd(e) {
  var t = e.state, a = e.name;
  t.modifiersData[a] = mr({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const xd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sd,
  data: {}
};
function Td(e) {
  return e === "x" ? "y" : "x";
}
function Od(e) {
  var t = e.state, a = e.options, n = e.name, o = a.mainAxis, r = o === void 0 ? !0 : o, l = a.altAxis, i = l === void 0 ? !1 : l, s = a.boundary, d = a.rootBoundary, c = a.altBoundary, f = a.padding, m = a.tether, g = m === void 0 ? !0 : m, h = a.tetherOffset, y = h === void 0 ? 0 : h, C = mn(t, {
    boundary: s,
    rootBoundary: d,
    padding: f,
    altBoundary: c
  }), k = dt(t.placement), S = Yt(t.placement), L = !S, p = oo(k), w = Td(p), O = t.modifiersData.popperOffsets, x = t.rects.reference, D = t.rects.popper, M = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, R = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (O) {
    if (r) {
      var E, T = p === "y" ? Ge : Xe, I = p === "y" ? tt : nt, V = p === "y" ? "height" : "width", W = O[p], $ = W + C[T], X = W - C[I], ee = g ? -D[V] / 2 : 0, J = S === $t ? x[V] : D[V], q = S === $t ? -D[V] : -x[V], ve = t.elements.arrow, se = g && ve ? lo(ve) : {
        width: 0,
        height: 0
      }, he = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sr(), ye = he[T], Te = he[I], De = en(0, x[V], se[V]), ge = L ? x[V] / 2 - ee - De - ye - R.mainAxis : J - De - ye - R.mainAxis, Q = L ? -x[V] / 2 + ee + De + Te + R.mainAxis : q + De + Te + R.mainAxis, ke = t.elements.arrow && hn(t.elements.arrow), Ee = ke ? p === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, Y = (E = B?.[p]) != null ? E : 0, ce = W + ge - Y - Ee, Ae = W + Q - Y, $e = en(g ? Ol($, ce) : $, W, g ? Tt(X, Ae) : X);
      O[p] = $e, F[p] = $e - W;
    }
    if (i) {
      var He, We = p === "x" ? Ge : Xe, Ue = p === "x" ? tt : nt, at = O[w], gt = w === "y" ? "height" : "width", Mt = at + C[We], it = at - C[Ue], st = [Ge, Xe].indexOf(k) !== -1, te = (He = B?.[w]) != null ? He : 0, we = st ? Mt : at - x[gt] - D[gt] - te + R.altAxis, Et = st ? at + x[gt] + D[gt] - te - R.altAxis : it, yn = g && st ? Qu(we, at, Et) : en(g ? we : Mt, at, g ? Et : it);
      O[w] = yn, F[w] = yn - at;
    }
    t.modifiersData[n] = F;
  }
}
const Ld = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Od,
  requiresIfExists: ["offset"]
};
function Dd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Md(e) {
  return e === Qe(e) || !et(e) ? ro(e) : Dd(e);
}
function Ed(e) {
  var t = e.getBoundingClientRect(), a = jt(t.width) / e.offsetWidth || 1, n = jt(t.height) / e.offsetHeight || 1;
  return a !== 1 || n !== 1;
}
function Bd(e, t, a) {
  a === void 0 && (a = !1);
  var n = et(t), o = et(t) && Ed(t), r = kt(t), l = Ht(e, o, a), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !a) && ((mt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  so(r)) && (i = Md(t)), et(t) ? (s = Ht(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : r && (s.x = io(r))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Id(e) {
  var t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function o(r) {
    a.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(i) {
      if (!a.has(i)) {
        var s = t.get(i);
        s && o(s);
      }
    }), n.push(r);
  }
  return e.forEach(function(r) {
    a.has(r.name) || o(r);
  }), n;
}
function Ad(e) {
  var t = Id(e);
  return Yu.reduce(function(a, n) {
    return a.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Pd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(a) {
      Promise.resolve().then(function() {
        t = void 0, a(e());
      });
    })), t;
  };
}
function Nd(e) {
  var t = e.reduce(function(a, n) {
    var o = a[n.name];
    return a[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, a;
  }, {});
  return Object.keys(t).map(function(a) {
    return t[a];
  });
}
var Oo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Lo() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Vd(e) {
  e === void 0 && (e = {});
  var t = e, a = t.defaultModifiers, n = a === void 0 ? [] : a, o = t.defaultOptions, r = o === void 0 ? Oo : o;
  return function(i, s, d) {
    d === void 0 && (d = r);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Oo, r),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], m = !1, g = {
      state: c,
      setOptions: function(k) {
        var S = typeof k == "function" ? k(c.options) : k;
        y(), c.options = Object.assign({}, r, c.options, S), c.scrollParents = {
          reference: Lt(i) ? tn(i) : i.contextElement ? tn(i.contextElement) : [],
          popper: tn(s)
        };
        var L = Ad(Nd([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = L.filter(function(p) {
          return p.enabled;
        }), h(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var k = c.elements, S = k.reference, L = k.popper;
          if (Lo(S, L)) {
            c.rects = {
              reference: Bd(S, hn(L), c.options.strategy === "fixed"),
              popper: lo(L)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var p = 0; p < c.orderedModifiers.length; p++) {
              if (c.reset === !0) {
                c.reset = !1, p = -1;
                continue;
              }
              var w = c.orderedModifiers[p], O = w.fn, x = w.options, D = x === void 0 ? {} : x, M = w.name;
              typeof O == "function" && (c = O({
                state: c,
                options: D,
                name: M,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pd(function() {
        return new Promise(function(C) {
          g.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        y(), m = !0;
      }
    };
    if (!Lo(i, s))
      return g;
    g.setOptions(d).then(function(C) {
      !m && d.onFirstUpdate && d.onFirstUpdate(C);
    });
    function h() {
      c.orderedModifiers.forEach(function(C) {
        var k = C.name, S = C.options, L = S === void 0 ? {} : S, p = C.effect;
        if (typeof p == "function") {
          var w = p({
            state: c,
            name: k,
            instance: g,
            options: L
          }), O = function() {
          };
          f.push(w || O);
        }
      });
    }
    function y() {
      f.forEach(function(C) {
        return C();
      }), f = [];
    }
    return g;
  };
}
var Fd = [sd, xd, rd, Gu, wd, yd, Ld, nd, bd], fr = /* @__PURE__ */ Vd({
  defaultModifiers: Fd
});
const Rd = {
  name: "ZmzTeleportdom",
  props: {
    /**
     * 穿梭位置
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * 类名
     */
    className: {
      type: [String, Array],
      default: ""
    },
    /**
     * 是否显示
     */
    visible: {
      type: Boolean
    },
    /**
     * 动画名称
     */
    transitionName: {
      type: String,
      default: "transition-drop"
    },
    /**
     * 穿梭父节点
     */
    parentRef: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 是否显示辅助指向
     */
    arrow: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["on-mouseenter", "on-mouseleave", "on-click", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = () => {
      Se(() => {
        if (a.value && (a.value.style["z-index"] = qe()), n.value)
          n.value.update();
        else {
          let y = [
            {
              name: "offset",
              options: {
                offset: e.offset
              }
            },
            {
              name: "popperOffsets"
            },
            {
              name: "arrow"
            },
            {
              name: "computeStyles",
              options: {
                gpuAcceleration: !1,
                adaptive: !1
              }
            },
            {
              name: "preventOverflow",
              options: {
                padding: 5,
                boundariesElement: "scrollParent"
                // 父元素如果可以滚动，就会使用它作为边界
              }
            }
          ].concat(e.popperOptions);
          n.value = fr(e.parentRef, a.value, {
            strategy: "fixed",
            placement: e.placement,
            padding: 10,
            modifiers: y
          });
        }
      });
    }, r = () => {
      n.value && (n.value.destroy(), n.value = null);
    }, l = (y) => {
      t("on-mouseenter", y);
    }, i = (y) => {
      t("on-mouseleave", y);
    }, s = (y) => {
      t("on-click", y);
    };
    return Ne(() => {
      r();
    }), ue(
      () => e.visible,
      (y) => {
        e.parentRef && y && o();
      },
      { immediate: !0 }
    ), {
      update: o,
      destroy: r,
      handleClick: s,
      handleMouseleave: i,
      handleMouseenter: l,
      handleAfterLeave: () => {
        t("on-close-after");
      },
      handleLeave: () => {
        t("on-close");
      },
      handleBeforeLeave: () => {
        t("on-close-before");
      },
      handleAfterEnter: () => {
        t("on-open-after");
      },
      handleEnter: () => {
        t("on-open");
      },
      handleBeforeEnter: async () => {
        t("on-open-before");
      },
      zmzTeleportdom: a
    };
  }
}, Zd = {
  key: 0,
  class: "zmz-teleportdom__arrow",
  ref: "menuHorn",
  "data-popper-arrow": ""
};
function Wd(e, t, a, n, o, r) {
  return v(), pe(ct, Ie({
    to: a.teleportDom,
    disabled: !a.teleport
  }, e.$attrs), [
    K(Ve, {
      name: a.transitionName,
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        re(u("div", Ie({
          class: ["zmz-teleportdom", a.className],
          ref: "zmzTeleportdom"
        }, e.$attrs, {
          onMouseenter: t[0] || (t[0] = (...l) => n.handleMouseenter && n.handleMouseenter(...l)),
          onMouseleave: t[1] || (t[1] = (...l) => n.handleMouseleave && n.handleMouseleave(...l)),
          onClick: t[2] || (t[2] = _e((...l) => n.handleClick && n.handleClick(...l), ["stop"]))
        }), [
          a.arrow ? (v(), _("div", Zd, null, 512)) : A("", !0),
          N(e.$slots, "default")
        ], 16), [
          [Be, a.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 16, ["to", "disabled"]);
}
const Gt = /* @__PURE__ */ H(Rd, [["render", Wd]]), $d = {
  name: "ZmzTooltip",
  components: {
    ZmzTeleportdom: Gt
  },
  props: {
    /**
     * 内容
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 主题
     */
    effect: {
      type: String,
      default: "black",
      validator(e) {
        return ["black", "white"].includes(e);
      }
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom",
      validator(e) {
        return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"].includes(e);
      }
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 弹出方式
     */
    trigger: {
      type: String,
      default: "hover",
      validator(e) {
        return ["hover", "click", "focus"].includes(e);
      }
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 双向绑定
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * 宽度
     */
    maxWidth: {
      type: String,
      default: ""
    }
  },
  emits: ["on-change", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(!1), o = b(null), r = b(null), l = b(null), i = b(null), s = b(null), d = z(() => {
      let O = ["zmz-tooltip", "zmz-teleportdom--tooltip"];
      return e.effect && O.push(`zmz-teleportdom--tooltip-${e.effect}`), O;
    }), c = z(() => {
      let O = {};
      return e.maxWidth && (O["max-width"] = e.maxWidth), O;
    }), f = () => {
      t("on-close-before");
    }, m = () => {
      t("on-close");
    }, g = () => {
      t("on-close-after");
    }, h = () => {
      t("on-open-before");
    }, y = () => {
      t("on-open");
    }, C = () => {
      t("on-open-after");
    }, k = () => {
      e.disabled || (n.value = !0, t("on-change", !0));
    }, S = () => {
      e.disabled || (n.value = !1, t("on-change", !1));
    }, L = () => {
      e.disabled || (n.value = !1, t("on-change", !1));
    }, p = () => {
      e.disabled || (n.value = !0, t("on-change", !0));
    }, w = () => {
      e.disabled || (n.value = !n.value, t("on-change", n.value));
    };
    return de(() => {
      Se(() => {
        e.trigger == "hover" ? (o.value = a.value.addEventListener("mouseenter", p), r.value = a.value.addEventListener("mouseleave", L)) : e.trigger == "focus" ? (l.value = a.value.addEventListener("focus", k), i.value = a.value.addEventListener("blur", S)) : e.trigger == "click" && (s.value = a.value.addEventListener("click", w));
      });
    }), Ne(() => {
      o.value && a.value.removeEventListener("mouseenter", p), r.value && a.value.removeEventListener("mouseleave", L), l.value && a.value.removeEventListener("focus", k), i.value && a.value.removeEventListener("blur", S), s.value && a.value.removeEventListener("click", w);
    }), {
      zmzTooltip: a,
      handleAfterLeave: g,
      handleLeave: m,
      handleBeforeLeave: f,
      handleAfterEnter: C,
      handleEnter: y,
      handleBeforeEnter: h,
      currentVisible: n,
      zmzTeleportdomClass: d,
      zmzTooltipWrapStyle: c
    };
  }
}, jd = { class: "zmz-tooltip__content" };
function Hd(e, t, a, n, o, r) {
  const l = oe("zmz-teleportdom");
  return v(), _(G, null, [
    K(Ve, Ie({ class: "zmz-tooltip" }, e.$attrs, {
      ref: "zmzTooltip",
      name: "zmz-fade"
    }), {
      default: le(() => [
        N(e.$slots, "default")
      ]),
      _: 3
    }, 16),
    K(l, Ie(e.$attrs, {
      offset: a.offset,
      "popper-options": a.popperOptions,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      arrow: a.arrow,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzTooltip,
      visible: n.currentVisible,
      placement: a.placement,
      teleport: a.teleport,
      "transition-name": "zmz-fade",
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }), {
      default: le(() => [
        u("div", {
          class: P(["zmz-tooltip__wrap", [n.zmzTooltipWrapStyle]])
        }, [
          u("div", jd, [
            N(e.$slots, "content", {}, () => [
              ne(Z(a.content), 1)
            ])
          ])
        ], 2)
      ]),
      _: 3
    }, 16, ["offset", "popper-options", "class-name", "arrow", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])
  ], 64);
}
const Gn = /* @__PURE__ */ H($d, [["render", Hd]]);
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
const Yd = {
  name: "ZmzPopover",
  components: {
    ZmzTeleportdom: Gt
  },
  props: {
    /**
     * 内容
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 主题
     */
    effect: {
      type: String,
      default: "black",
      validator(e) {
        return ["black", "white"].includes(e);
      }
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom",
      validator(e) {
        return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"].includes(e);
      }
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 弹出方式
     */
    trigger: {
      type: String,
      default: "hover",
      validator(e) {
        return ["hover", "click", "focus"].includes(e);
      }
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "on-change", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(null), l = b(null), i = b(null), s = b(null), d = z(() => {
      let x = ["zmz-popover", "zmz-teleportdom--popover"];
      return e.effect && x.push(`zmz-teleportdom--popover-${e.effect}`), x;
    }), c = z({
      get() {
        return e.modelValue;
      },
      set(x) {
        t("update:modelValue", x);
      }
    }), f = () => {
      t("on-close-before");
    }, m = () => {
      t("on-close");
    }, g = () => {
      t("on-close-after");
    }, h = () => {
      t("on-open-before");
    }, y = () => {
      t("on-open");
    }, C = () => {
      t("on-open-after");
    }, k = () => {
      e.disabled || (c.value = !0, t("on-change", !0));
    }, S = () => {
      e.disabled || (c.value = !1, t("on-change", !1));
    }, L = () => {
      e.disabled || (c.value = !1, t("on-change", !1));
    }, p = () => {
      e.disabled || (c.value = !0, t("on-change", !0));
    }, w = () => {
      e.disabled || (c.value = !c.value, t("on-change", c.value));
    }, O = (x) => {
      a.value && !a.value.contains(x.target) && c.value && (c.value = !1);
    };
    return de(() => {
      Se(() => {
        e.trigger == "hover" ? (n.value = a.value.addEventListener("mouseenter", p), o.value = a.value.addEventListener("mouseleave", L)) : e.trigger == "focus" ? (r.value = a.value.addEventListener("focus", k), l.value = a.value.addEventListener("blur", S)) : e.trigger == "click" && (i.value = a.value.addEventListener("click", w), s.value = document.addEventListener("click", O));
      });
    }), Ne(() => {
      n.value && a.value.removeEventListener("mouseenter", p), o.value && a.value.removeEventListener("mouseleave", L), r.value && a.value.removeEventListener("focus", k), l.value && a.value.removeEventListener("blur", S), i.value && a.value.removeEventListener("click", w), s.value && document.removeEventListener("click", w);
    }), {
      zmzPopover: a,
      handleAfterLeave: g,
      handleLeave: m,
      handleBeforeLeave: f,
      handleAfterEnter: C,
      handleEnter: y,
      handleBeforeEnter: h,
      zmzTeleportdomClass: d,
      model: c,
      bodyCloseMenus: O
    };
  }
}, qd = {
  key: 0,
  class: "zmz-popover__wrap"
}, Ud = { class: "zmz-popover__content" }, Gd = {
  key: 1,
  class: "zmz-popover__wrap"
}, Xd = {
  key: 0,
  class: "zmz-popover__title"
}, Kd = {
  key: 1,
  class: "zmz-popover__content"
};
function Qd(e, t, a, n, o, r) {
  const l = oe("zmz-teleportdom");
  return v(), _(G, null, [
    K(Ve, Ie({ class: "zmz-popover" }, e.$attrs, {
      ref: "zmzPopover",
      name: "zmz-fade"
    }), {
      default: le(() => [
        N(e.$slots, "default")
      ]),
      _: 3
    }, 16),
    K(l, Ie(e.$attrs, {
      offset: a.offset,
      "popper-options": a.popperOptions,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      arrow: a.arrow,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzPopover,
      visible: n.model,
      placement: a.placement,
      teleport: a.teleport,
      "transition-name": "zmz-fade",
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }), {
      default: le(() => [
        e.$slots.content ? (v(), _("div", qd, [
          u("div", Ud, [
            N(e.$slots, "content")
          ])
        ])) : (v(), _("div", Gd, [
          a.title ? (v(), _("div", Xd, Z(a.title), 1)) : A("", !0),
          a.content ? (v(), _("div", Kd, Z(a.content), 1)) : A("", !0)
        ]))
      ]),
      _: 3
    }, 16, ["offset", "popper-options", "class-name", "arrow", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])
  ], 64);
}
const Xn = /* @__PURE__ */ H(Yd, [["render", Qd]]);
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
const Jd = {
  name: "ZmzCalendar",
  props: {
    /**
     * 当前时间
     */
    modelValue: {
      type: Date,
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    /**
     * 月份
     */
    months: {
      type: Array,
      default() {
        return ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
      }
    },
    /**
     * 周
     */
    weeks: {
      type: Array,
      default() {
        return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      }
    },
    /**
     * 显示按钮
     */
    showButton: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["on-prev-year", "on-next-year", "on-prev-month", "on-next-month", "on-month", "on-day", "on-toggle-month-year", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(-1), o = b(-1), r = b(""), l = Le({
      dayList: [],
      //二维数组，循环行，循环列
      prev: [],
      current: [],
      next: [],
      year: "",
      month: "",
      isDay: "",
      //判断是否是'今天'
      isMonth: "",
      //判断是否是'当月'
      isYear: ""
      //判断是否是'当年'
    }), i = z({
      get() {
        return e.modelValue;
      },
      set(O) {
        t("update:modelValue", O);
      }
    }), s = z(() => {
      var O = [];
      let x = new Date(i.value);
      return e.months.forEach((D, M) => {
        x.getMonth() == M ? O.push({
          index: y(M + 1),
          text: D,
          year: x.getFullYear(),
          current: !0
        }) : O.push({
          index: y(M + 1),
          text: D,
          year: x.getFullYear(),
          current: !1
        });
      }), O;
    }), d = (O, x) => {
      O === "month" ? (a.value = !1, n.value = x) : (a.value = !0, n.value = x), t("on-toggle-month-year", x);
    }, c = (O, x) => {
      O === "prev" ? (o.value = x, n.value == 1 ? f() : m()) : O === "next" ? (o.value = x, n.value == 1 ? g() : h()) : (o.value = x, L());
    }, f = () => {
      l.year != 1995 ? l.year = y(--l.year) : l.year = --l.year, S(), C(), t("on-prev-year", 0);
    }, m = () => {
      l.month != 1 ? l.month = y(--l.month) : (l.month = 12, l.year = --l.year), S(), C(), t("on-prev-month", 0);
    }, g = () => {
      l.year != 1995 ? l.year = y(++l.year) : l.year = ++l.year, S(), C(), t("on-next-year", 1);
    }, h = () => {
      l.month < 12 ? l.month = y(++l.month) : (l.month = "01", l.year = ++l.year), S(), C(), t("on-next-month", 1);
    }, y = (O) => O < 10 ? "0" + O : O, C = () => {
      let O = new Date(i.value), x = l.year, D = l.month;
      x === O.getFullYear() && D == O.getMonth() + 1 ? (l.isDay = x + "-" + D + "-" + y(O.getDate()), l.isMonth = D, l.isYear = x) : (l.isDay = -1, l.isMonth = -1, l.isYear = -1);
    }, k = (O, x) => new Date(O, x, 0), S = () => {
      let O = l.year, x = l.month, D, M, R, B;
      l.current = [], l.prev = [], l.next = [];
      for (let T = 1; T <= k(O, x).getDate(); T++)
        l.current.push({
          date: O + "-" + x + "-" + y(T),
          day: T,
          month: x,
          year: O,
          disable: !0,
          isMonth: !0,
          state: 1
        });
      let F = k(O, x - 1).getDate();
      D = x == 1 ? O - 1 : O, M = x == 1 ? 12 : y(parseInt(x) - 1);
      for (let T = k(O, x - 1).getDay(); T >= 0; T--)
        l.prev.push({
          date: D + "-" + M + "-" + (F - T),
          day: F - T,
          month: M,
          year: D,
          disable: !0,
          isMonth: !1,
          state: 0
        });
      R = x == 12 ? O + 1 : O, B = x == 12 ? "01" : y(parseInt(x) + 1);
      for (let T = 1; T <= 42 - l.current.length - l.prev.length; T++)
        l.next.push({
          date: R + "-" + B + "-" + y(T),
          day: T,
          month: B,
          year: R,
          disable: !0,
          isMonth: !1,
          state: 2
        });
      l.dayList = [];
      let E = l.prev.concat(l.current, l.next);
      l.dayList = E;
    }, L = () => {
      let O = new Date(i.value);
      l.year = O.getFullYear(), l.month = y(O.getMonth() + 1), C(), S();
    }, p = (O) => {
      O.state == 0 ? m() : O.state == 2 && h(), O.isMonth && (l.isDay = O.date, t("on-day", O));
    }, w = (O) => {
      l.isMonth = O.index, a.value = !1, n.value = 0, l.month = O.index, S(), t("on-month", O);
    };
    return de(() => {
      let O = new Date(i.value);
      r.value = O.getFullYear() + "-" + y(O.getMonth() + 1) + "-" + y(O.getDate()), L();
    }), {
      monthsList: s,
      isMonth: a,
      handleToggle: d,
      isToggleIndex: n,
      isStateIndex: o,
      handleState: c,
      calendar: l,
      handleDaysClick: p,
      handleMonthsClick: w,
      today: r
    };
  }
}, ec = { class: "zmz-calendar" }, tc = { class: "zmz-calendar__header" }, nc = { class: "zmz-calendar__header__left" }, ac = {
  key: 0,
  class: "zmz-calendar__header__right"
}, lc = { class: "zmz-calendar__header__right__btn" }, oc = { class: "zmz-calendar__header__right__btn" }, rc = {
  key: 0,
  class: "zmz-calendar__months"
}, ic = ["onClick"], sc = { class: "zmz-calendar__months__wrap__text" }, uc = { class: "zmz-calendar__weeks" }, dc = { class: "zmz-calendar__days" }, cc = ["onClick"], mc = { class: "zmz-calendar__days__wrap__text" };
function fc(e, t, a, n, o, r) {
  return v(), _("div", ec, [
    u("div", tc, [
      u("div", nc, [
        N(e.$slots, "date", { date: n.calendar }, () => [
          ne(Z(n.calendar.year) + " ", 1),
          t[5] || (t[5] = u("em", { class: "zmz-calendar__header__left__inner" }, "年", -1)),
          ne(" " + Z(n.calendar.month) + " ", 1),
          t[6] || (t[6] = u("em", { class: "zmz-calendar__header__left__inner" }, "月", -1))
        ])
      ]),
      a.showButton ? (v(), _("div", ac, [
        u("div", lc, [
          u("span", {
            class: P(["zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--left", { "zmz-calendar__header__right__btn__inner--active": n.isStateIndex === 0 }]),
            onClick: t[0] || (t[0] = (l) => n.handleState("prev", 0))
          }, [...t[7] || (t[7] = [
            u("i", { class: "zmz-icon--arrow-left" }, null, -1)
          ])], 2),
          u("span", {
            class: P(["zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--center", { "zmz-calendar__header__right__btn__inner--active": n.isStateIndex === 1 }]),
            onClick: t[1] || (t[1] = (l) => n.handleState("day", 1))
          }, "今天", 2),
          u("span", {
            class: P(["zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--right", { "zmz-calendar__header__right__btn__inner--active": n.isStateIndex === 2 }]),
            onClick: t[2] || (t[2] = (l) => n.handleState("next", 2))
          }, [...t[8] || (t[8] = [
            u("i", { class: "zmz-icon--arrow-right" }, null, -1)
          ])], 2)
        ]),
        u("div", oc, [
          u("span", {
            class: P(["zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--month", { "zmz-calendar__header__right__btn__inner--active": n.isToggleIndex === 0 }]),
            onClick: t[3] || (t[3] = (l) => n.handleToggle("month", 0))
          }, "月", 2),
          u("span", {
            class: P(["zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--year", { "zmz-calendar__header__right__btn__inner--active": n.isToggleIndex === 1 }]),
            onClick: t[4] || (t[4] = (l) => n.handleToggle("year", 1))
          }, "年", 2)
        ])
      ])) : A("", !0)
    ]),
    N(e.$slots, "default", {
      months: n.monthsList,
      weeks: a.weeks,
      days: n.calendar.dayList,
      state: n.isMonth
    }, () => [
      n.isMonth ? (v(), _("div", rc, [
        (v(!0), _(G, null, fe(n.monthsList, (l, i) => (v(), _("div", {
          key: i,
          class: "zmz-calendar__months__li",
          onClick: (s) => n.handleMonthsClick(l)
        }, [
          u("div", {
            class: P(["zmz-calendar__months__wrap", { "zmz-calendar__months__wrap--current": l.current, "zmz-calendar__months__wrap--active": n.calendar.isMonth == l.index }])
          }, [
            u("div", sc, [
              N(e.$slots, "month", { item: l }, () => [
                ne(Z(l.text), 1)
              ])
            ])
          ], 2)
        ], 8, ic))), 128))
      ])) : (v(), _(G, { key: 1 }, [
        u("div", uc, [
          (v(!0), _(G, null, fe(a.weeks, (l, i) => (v(), _("div", {
            key: i,
            class: "zmz-calendar__weeks__li"
          }, [
            N(e.$slots, "week", { item: l }, () => [
              ne(Z(l), 1)
            ])
          ]))), 128))
        ]),
        u("div", dc, [
          (v(!0), _(G, null, fe(n.calendar.dayList, (l, i) => (v(), _("div", {
            key: i,
            class: "zmz-calendar__days__li",
            onClick: (s) => n.handleDaysClick(l)
          }, [
            u("div", {
              class: P(["zmz-calendar__days__wrap", { "zmz-calendar__days__wrap--current": n.today == l.date, "zmz-calendar__days__wrap--active": n.calendar.isDay == l.date, "zmz-calendar__days__wrap--month": !l.isMonth }])
            }, [
              u("div", mc, [
                N(e.$slots, "day", { item: l }, () => [
                  ne(Z(l.day), 1)
                ])
              ])
            ], 2)
          ], 8, cc))), 128))
        ])
      ], 64))
    ])
  ]);
}
const Kn = /* @__PURE__ */ H(Jd, [["render", fc]]);
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
const vc = {
  name: "ZmzSplit",
  props: {
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["vertical", "horizontal"].includes(e);
      }
    },
    /**
     * 绑定
     */
    modelValue: {
      type: Number,
      default: 50
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: 10
    },
    /**
     * 最大值
     */
    max: {
      type: Number,
      default: 90
    },
    /**
     * 最大值
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否显示分割
     */
    showSplitBtn: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "on-drag"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(!1), r = b(0), l = b(0), i = z(() => {
      let y = [];
      return e.mode && y.push(`zmz-split--${e.mode}`), e.disabled && y.push("zmz-split--disabled"), y;
    }), s = z({
      get() {
        return e.modelValue;
      },
      set(y) {
        t("update:modelValue", y);
      }
    }), d = z(() => e.mode === "horizontal"), c = (y) => {
      if (!e.disabled) {
        var C = y || window.event;
        d.value ? r.value = C.clientX - n.value?.offsetLeft - n.value?.offsetWidth / 2 : l.value = C.clientY - n.value?.offsetTop - n.value?.offsetHeight / 2, o.value = !0, t("on-drag", "start", y), h(y);
      }
    };
    document.addEventListener("mousemove", function(y) {
      if (o.value) {
        var C = y || window.event, k = s.value, S = 0, L = 0;
        d.value ? S = C.clientX - r.value : L = C.clientY - l.value, d.value ? k = S / a.value?.offsetWidth * 100 : k = L / a.value?.offsetHeight * 100, k > e.max ? k = 90 : k < e.min ? k = 10 : k = parseInt(k), s.value = k, t("on-drag", "move", y), h(y);
      }
    }), document.addEventListener("mouseup", function(y) {
      o.value = !1, t("on-drag", "end", y), h(y);
    }), document.addEventListener("mouseleave", function(y) {
      o.value = !1, h(y);
    });
    const f = z(() => {
      let y = {};
      return d.value ? y.right = 100 - s.value + "%" : y.bottom = 100 - s.value + "%", y;
    }), m = z(() => {
      let y = {};
      return d.value ? (y.left = s.value + "%", y["padding-left"] = n.value?.offsetWidth + "px") : (y.top = s.value + "%", y["padding-top"] = n.value?.offsetHeight + "px"), y;
    }), g = z(() => {
      let y = {};
      return d.value ? y.left = s.value + "%" : y.top = s.value + "%", y;
    }), h = (y) => (y.stopPropagation && y.stopPropagation(), y.preventDefault && y.preventDefault(), y.cancelBubble = !0, y.returnValue = !1, !1);
    return {
      model: s,
      splitPanelOne: f,
      splitPanelTwo: m,
      zmzSplitDragbtn: n,
      zmzSplit: a,
      zmzSplitDragbtnStyle: g,
      mousedownhandle: c,
      zmzSplitClass: i,
      isHorizontal: d
    };
  }
};
function zc(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-split", [n.zmzSplitClass]]),
    ref: "zmzSplit"
  }, [
    n.isHorizontal ? (v(), _(G, { key: 0 }, [
      e.$slots.left ? (v(), _("div", {
        key: 0,
        class: "zmz-split__left zmz-split__panel",
        style: j([n.splitPanelOne])
      }, [
        N(e.$slots, "left")
      ], 4)) : A("", !0),
      a.showSplitBtn ? (v(), _("div", {
        key: 1,
        class: "zmz-split__dragbtn",
        onMousedown: t[0] || (t[0] = (...l) => n.mousedownhandle && n.mousedownhandle(...l)),
        style: j([n.zmzSplitDragbtnStyle]),
        ref: "zmzSplitDragbtn"
      }, [
        N(e.$slots, "split", {}, () => [
          t[2] || (t[2] = u("div", { class: "zmz-split__dragbtn__icon" }, null, -1))
        ])
      ], 36)) : A("", !0),
      e.$slots.right ? (v(), _("div", {
        key: 2,
        class: "zmz-split__right zmz-split__panel",
        style: j([n.splitPanelTwo])
      }, [
        N(e.$slots, "right")
      ], 4)) : A("", !0)
    ], 64)) : (v(), _(G, { key: 1 }, [
      e.$slots.top ? (v(), _("div", {
        key: 0,
        class: "zmz-split__top zmz-split__panel",
        style: j([n.splitPanelOne])
      }, [
        N(e.$slots, "top")
      ], 4)) : A("", !0),
      a.showSplitBtn ? (v(), _("div", {
        key: 1,
        class: "zmz-split__dragbtn",
        onMousedown: t[1] || (t[1] = (...l) => n.mousedownhandle && n.mousedownhandle(...l)),
        style: j([n.zmzSplitDragbtnStyle]),
        ref: "zmzSplitDragbtn"
      }, [
        N(e.$slots, "split", {}, () => [
          t[3] || (t[3] = u("div", { class: "zmz-split__dragbtn__icon" }, null, -1))
        ])
      ], 36)) : A("", !0),
      e.$slots.bottom ? (v(), _("div", {
        key: 2,
        class: "zmz-split__bottom zmz-split__panel",
        style: j([n.splitPanelTwo])
      }, [
        N(e.$slots, "bottom")
      ], 4)) : A("", !0)
    ], 64))
  ], 2);
}
const Qn = /* @__PURE__ */ H(vc, [["render", zc]]);
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
const _c = {
  name: "ZmzMenu",
  componentName: "ZmzMenu",
  props: {
    /**
     * 激活菜单
     */
    defaultActiveName: {
      type: Array,
      default: () => []
    },
    /**
     * 激活二级菜单
     */
    defaultActiveSubname: {
      type: Array,
      default: () => []
    },
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "vertical",
      validator(e) {
        return ["vertical", "horizontal"].includes(e);
      }
    },
    /**
     * 路由
     */
    router: {
      type: Boolean,
      default: !1
    },
    /**
     * 收缩
     */
    shrink: {
      type: Boolean,
      default: !1
    },
    /**
     * 手风琴
     */
    accordion: {
      type: Boolean,
      default: !1
    },
    /**
     * 主题
     */
    effect: {
      type: String,
      default: "light",
      validator(e) {
        return ["primary", "light", "dark"].includes(e);
      }
    },
    /**
     * 提示窗主题
     */
    tooltipEffect: {
      type: String,
      default: "black",
      validator(e) {
        return ["black", "white"].includes(e);
      }
    },
    /**
     * 菜单激活方式
     */
    trigger: {
      type: String,
      default: "hover",
      validator(e) {
        return ["click", "hover"].includes(e);
      }
    }
  },
  emits: ["on-select", "on-submenu-toggle"],
  setup(e, { emit: t }) {
    const n = Ce().appContext.config.globalProperties.$router, o = b(e.defaultActiveName), r = b(e.defaultActiveSubname), l = b([]), i = b([]), s = b(null), d = b([]), c = b(!1), f = z(() => {
      let C = [];
      return e.mode && C.push(`zmz-menu--${e.mode}`), e.effect && C.push(`zmz-menu--${e.effect}`), e.shrink && e.mode == "vertical" && C.push("zmz-menu--shrink"), e.activeMenuBorder && C.push("zmz-menu--border"), C;
    }), m = (C) => {
      let S = [...d.value].indexOf(C);
      if (e.accordion && i.value.forEach((p) => {
        p.instance.proxy.opened = !1;
      }), S > -1) {
        let p = null;
        i.value.forEach((w) => {
          C === w.instance.proxy.name && (p = w.instance.proxy, w.instance.proxy.opened = !1);
        }), Nt(p, "ZmzMenuSubmenu") && Nt(p, "ZmzMenuSubmenu").forEach((w) => {
          w.opened = !0;
        }), p.childSubmenuList.map((w) => w).forEach((w) => {
          w.instance.proxy.opened = !1;
        });
      } else if (e.accordion) {
        let p = null;
        i.value.forEach((w) => {
          C === w.instance.proxy.name && (p = w.instance.proxy, w.instance.proxy.opened = !0);
        }), Nt(p, "ZmzMenuSubmenu") && Nt(p, "ZmzMenuSubmenu").forEach((w) => {
          w.opened = !0;
        });
      }
      let L = i.value.filter((p) => p.instance.proxy.opened).map((p) => p.instance.proxy.name);
      d.value = [...L];
    };
    ue(
      () => e.defaultActiveName,
      (C) => {
        o.value = C;
      },
      { lazy: !0 }
    ), ue(
      () => e.defaultActiveSubname,
      (C) => {
        r.value = C;
      },
      { lazy: !0 }
    ), ue(
      () => e.shrink,
      (C) => {
        c.value = C;
      },
      { immediate: !0, lazy: !0 }
    );
    const g = (C) => {
      t("on-select", C), e.router && C && h(C, (k) => {
        if (k) {
          if (k.name === "NavigationDuplicated") return;
          console.error(k);
        }
      });
    }, h = (C, k) => {
      try {
        n.push(C, () => {
        }, k);
      } catch (S) {
        console.error(S);
      }
    }, y = (C, k) => {
      t("on-submenu-toggle", { action: C, name: k });
    };
    return Fe("zmzMenu", {
      mode: e.mode,
      defaultActiveName: o,
      defaultActiveSubname: r,
      menuItemList: l,
      menuSubList: i,
      router: e.router,
      shrink: c,
      updateSubOpen: m,
      accordion: e.accordion,
      trigger: e.trigger,
      tooltipEffect: e.tooltipEffect,
      onItemSelect: g,
      onSubToggle: y
    }), {
      zmzMenuClass: f,
      zmzMenu: s
    };
  }
};
function hc(e, t, a, n, o, r) {
  return v(), _("ul", {
    class: P(["zmz-menu", [n.zmzMenuClass]]),
    ref: "zmzMenu"
  }, [
    N(e.$slots, "default")
  ], 2);
}
const Jn = /* @__PURE__ */ H(_c, [["render", hc]]);
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
const gc = {
  name: "ZmzMenuItem",
  props: {
    /**
     * 标志
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const { findParent: t } = Ut(), a = Ce(), n = be("zmzMenu", {}), o = be("zmzMenuSubMenu", {}), r = b(!1), l = b(!1), i = z(() => n.shrink.value), s = z(() => n.tooltipEffect), d = z(() => n.defaultActiveName.value.indexOf(e.name) > -1 || r.value), c = (p) => {
      if (e.disabled) return;
      let w = t(p, "ZmzMenuSubmenu");
      w && (n.defaultActiveName.value.unshift(w.proxy.name), c(w.parent));
    }, f = () => {
      if (e.disabled) return;
      n.defaultActiveName.value = [];
      let p = t(a.parent, "ZmzMenuSubmenu");
      p ? (n.defaultActiveName.value.unshift(e.name), c(a.parent), p && o.onItemSelect(e.name)) : (n.defaultActiveName.value.unshift(e.name), n.onItemSelect(e.name));
    }, m = () => {
      l.value = !0;
    }, g = () => {
      l.value = !1;
    }, h = z(() => {
      let p = {};
      return L.value && (p["padding-left"] = L.value + "px"), p;
    }), y = z(() => n.router), C = z(() => {
      let p = [];
      return l.value && p.push("zmz-menu-item--hover"), e.disabled && p.push("zmz-menu-item--disabled"), d.value && p.push("zmz-menu-item--active"), p;
    });
    de(() => {
      k();
    }), Ne(() => {
      S();
    });
    const k = () => {
      n.menuItemList.value.push({
        uid: a.uid,
        instance: a
      });
    }, S = () => {
      if (n.menuItemList.value && n.menuItemList.value.length) {
        const p = n.menuItemList.value.findIndex((w) => w.uid === a.uid);
        n.menuItemList.value.splice(p, 1);
      }
    }, L = z(() => {
      if (n.mode != "vertical" || n.shrink.value) return "";
      let p = 20, w = a.parent;
      for (; w && w.type.componentName !== "zmzMenu"; )
        w.type.componentName === "ZmzMenuSubmenu" && (p += 20), w = w.parent;
      return p;
    });
    return {
      handleClick: f,
      isSelected: d,
      zmzMenuItemStyle: h,
      isRouter: y,
      handleMouseoverEvent: m,
      handleMouseoutEvent: g,
      zmzMenuItemClass: C,
      isShrink: i,
      selected: r,
      tooltipEffect: s
    };
  }
}, yc = { class: "zmz-menu-item__icon" };
function pc(e, t, a, n, o, r) {
  const l = oe("zmz-tooltip");
  return v(), _("li", {
    class: P(["zmz-menu-item", [n.zmzMenuItemClass]]),
    onClick: t[0] || (t[0] = (...i) => n.handleClick && n.handleClick(...i)),
    onMouseover: t[1] || (t[1] = (...i) => n.handleMouseoverEvent && n.handleMouseoverEvent(...i)),
    onMouseout: t[2] || (t[2] = (...i) => n.handleMouseoutEvent && n.handleMouseoutEvent(...i)),
    ref: "item",
    tabindex: "-1",
    style: j([n.zmzMenuItemStyle])
  }, [
    n.isShrink && e.$slots.title ? (v(), pe(l, {
      key: 0,
      effect: n.tooltipEffect,
      placement: "right",
      teleport: ""
    }, {
      content: le(() => [
        N(e.$slots, "default")
      ]),
      default: le(() => [
        u("div", yc, [
          N(e.$slots, "title")
        ])
      ]),
      _: 3
    }, 8, ["effect"])) : (v(), _(G, { key: 1 }, [
      N(e.$slots, "title"),
      N(e.$slots, "default")
    ], 64))
  ], 38);
}
const ea = /* @__PURE__ */ H(gc, [["render", pc]]);
ea.install = function(e) {
  e.component(ea.name, ea);
};
const bc = {
  name: "ZmzMenuSubmenu",
  componentName: "ZmzMenuSubmenu",
  props: {
    /**
     * 标志
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = b(null), a = Ce(), n = be("zmzMenu", {}), o = b(0), r = b(n.defaultActiveSubname.value.indexOf(e.name) > -1), l = b(null), i = b([]), { findParent: s } = Ut(), d = z(() => n.defaultActiveName.value.indexOf(e.name) > -1), c = z(() => r.value ? "zmz-icon--arrow-top" : "zmz-icon--arrow-bottom"), f = () => {
      e.disabled || n.mode == "horizontal" && n.trigger != "click" || n.mode == "vertical" && n.shrink.value || (r.value = !r.value, n.updateSubOpen(e.name));
    }, m = z(() => n.mode == "vertical"), g = () => {
      e.disabled || n.mode == "horizontal" && n.trigger != "hover" || n.mode == "vertical" && !n.shrink.value || (clearTimeout(l.value), l.value = null, r.value = !0, n.onSubToggle("open", e.name));
    }, h = () => {
      e.disabled || n.mode == "horizontal" && n.trigger != "hover" || n.mode == "vertical" && !n.shrink.value || (l.value = setTimeout(() => {
        r.value = !1, n.onSubToggle("close", e.name), clearTimeout(l.value), l.value = null;
      }, 100));
    }, y = z(() => {
      let x = {};
      return C.value && (x["padding-left"] = C.value + "px"), x;
    }), C = z(() => {
      if (n.mode != "vertical" || n.shrink.value) return "";
      let x = 20, D = a.parent;
      for (; D && D.type.componentName !== "zmzMenu"; )
        D.type.componentName === "ZmzMenuSubmenu" && (x += 20), D = D.parent;
      return x;
    }), k = z(() => ({})), S = z(() => {
      let x = [];
      return d.value && x.push("zmz-menu-submenu--active"), e.disabled && x.push("zmz-menu-submenu--disabled"), r.value && x.push("zmz-menu-submenu--open"), x;
    }), L = z(() => n.shrink.value);
    Fe("zmzMenuSubMenu", {
      onItemSelect: (x, D) => {
        n.mode === "horizontal" && (r.value = !1), n.onItemSelect(x, D);
      }
    }), de(() => {
      w();
    }), Ne(() => {
      O();
    });
    const w = () => {
      n.menuSubList.value.push({
        uid: a.uid,
        instance: a
      });
      const x = s(a.parent, "ZmzMenuSubmenu");
      x && (x.proxy.childSubmenuList || (x.proxy.childSubmenuList = []), x.proxy.childSubmenuList.push({
        uid: a.uid,
        instance: a
      }));
    }, O = () => {
      if (n.menuSubList.value && n.menuSubList.value.length) {
        const D = n.menuSubList.value.findIndex((M) => M.uid === a.uid);
        n.menuSubList.value.splice(D, 1);
      }
      const x = s(a.parent, "ZmzMenuSubmenu");
      if (x && x.proxy.childSubmenuList && x.proxy.childSubmenuList.length) {
        const D = x.proxy.childSubmenuList.findIndex((M) => M.uid === a.uid);
        x.proxy.childSubmenuList.splice(D, 1);
      }
    };
    return {
      active: d,
      iconActive: c,
      opened: r,
      handleClick: f,
      handleClosePanel: h,
      handleOpenPanel: g,
      zmzSubmenuTitleStyle: y,
      isVertical: m,
      zmzSubmenu: t,
      zmzSubmenuClass: S,
      padding: o,
      isShrink: L,
      zmzSubmenuDropdownStyle: k,
      childSubmenuList: i
    };
  }
}, kc = ["data-index"], Cc = { class: "zmz-menu" }, wc = { class: "zmz-menu-submenu__dropdown" }, Sc = { class: "zmz-menu" };
function xc(e, t, a, n, o, r) {
  const l = oe("zmz-transition-collapse");
  return v(), _("li", {
    class: P(["zmz-menu-submenu", [n.zmzSubmenuClass]]),
    onMouseleave: t[1] || (t[1] = (...i) => n.handleClosePanel && n.handleClosePanel(...i)),
    onMouseenter: t[2] || (t[2] = (...i) => n.handleOpenPanel && n.handleOpenPanel(...i)),
    ref: "zmzSubmenu"
  }, [
    u("div", {
      class: "zmz-menu-submenu__title",
      tabindex: "-1",
      onClick: t[0] || (t[0] = (...i) => n.handleClick && n.handleClick(...i)),
      style: j([n.zmzSubmenuTitleStyle]),
      "data-index": n.isShrink
    }, [
      N(e.$slots, "title"),
      u("i", {
        class: P(["zmz-menu-submenu__title__arrow", [n.iconActive]])
      }, null, 2)
    ], 12, kc),
    n.isVertical && !n.isShrink ? (v(), pe(l, { key: 0 }, {
      default: le(() => [
        re(u("div", {
          class: "zmz-menu-submenu__dropdown",
          style: j(n.zmzSubmenuDropdownStyle)
        }, [
          u("ul", Cc, [
            N(e.$slots, "default")
          ])
        ], 4), [
          [Be, n.opened]
        ])
      ]),
      _: 3
    })) : (v(), pe(Ve, {
      key: 1,
      name: "zmz-fold-top"
    }, {
      default: le(() => [
        re(u("div", wc, [
          u("ul", Sc, [
            N(e.$slots, "default")
          ])
        ], 512), [
          [Be, n.opened]
        ])
      ]),
      _: 3
    }))
  ], 34);
}
const ta = /* @__PURE__ */ H(bc, [["render", xc]]);
ta.install = function(e) {
  e.component(ta.name, ta);
};
const Tc = {
  name: "ZmzMenuGroup",
  componentName: "ZmzMenuGroup",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const e = be("zmzMenu", {}), { parent: t } = Ce(), a = z(() => {
      let o = {};
      return n.value && (o["padding-left"] = n.value + "px"), o;
    }), n = z(() => {
      if (e.mode != "vertical" || e.shrink.value) return "";
      let o = 20, r = t;
      for (; r && r.type.componentName !== "zmzMenu"; )
        r.type.componentName === "ZmzMenuSubmenu" && (o += 20), r = r.parent;
      return o;
    });
    return {
      zmzMenuItemGroupTitleStyle: a
    };
  }
}, Oc = { class: "zmz-menu-item-group" }, Lc = { class: "zmz-menu" };
function Dc(e, t, a, n, o, r) {
  return v(), _("li", Oc, [
    u("div", {
      class: "zmz-menu-item-group__title",
      style: j([n.zmzMenuItemGroupTitleStyle])
    }, Z(a.title), 5),
    u("ul", Lc, [
      N(e.$slots, "default")
    ])
  ]);
}
const na = /* @__PURE__ */ H(Tc, [["render", Dc]]);
na.install = function(e) {
  e.component(na.name, na);
};
const Mc = {
  name: "ZmzBreadcrumb",
  componentName: "ZmzBreadcrumb",
  props: {
    /**
     * 分段器
     */
    segmenter: {
      type: String,
      default: "/"
    },
    /**
     * 分段图标
     */
    segmenterIcon: String
  },
  setup(e) {
    const t = b([]), a = () => {
    };
    return Fe("zmzBreadcrumb", {
      zmzBreadcrumbList: t,
      segmenter: e.segmenter,
      segmenterIcon: e.segmenterIcon,
      updateDom: a
    }), {};
  }
}, Ec = { class: "zmz-breadcrumb" };
function Bc(e, t, a, n, o, r) {
  return v(), _("div", Ec, [
    N(e.$slots, "default")
  ]);
}
const aa = /* @__PURE__ */ H(Mc, [["render", Bc]]);
aa.install = function(e) {
  e.component(aa.name, aa);
};
const Ic = {
  name: "ZmzBreadcrumbItem",
  setup() {
    const e = Ce(), t = be("zmzBreadcrumb", {}), a = z(() => t.segmenter), n = z(() => t.segmenterIcon);
    de(() => {
      o(), r();
    }), Ne(() => {
      l(), r();
    });
    const o = () => {
      t.zmzBreadcrumbList.value.push({
        uid: e.uid,
        instance: e
      });
    }, r = () => {
      t.updateDom();
    }, l = () => {
      if (t.zmzBreadcrumbList.value && t.zmzBreadcrumbList.value.length) {
        const i = t.zmzBreadcrumbList.value.findIndex((s) => s.uid === e.uid);
        t.zmzBreadcrumbList.value.splice(i, 1);
      }
    };
    return {
      segmenter: a,
      segmenterIcon: n
    };
  }
}, Ac = { class: "zmz-breadcrumb__item" }, Pc = { class: "zmz-breadcrumb__text" }, Nc = {
  key: 1,
  class: "zmz-breadcrumb__icon"
};
function Vc(e, t, a, n, o, r) {
  return v(), _("span", Ac, [
    u("span", Pc, [
      N(e.$slots, "default")
    ]),
    n.segmenterIcon ? (v(), _("i", {
      key: 0,
      class: P([n.segmenterIcon, "zmz-breadcrumb__icon"])
    }, null, 2)) : (v(), _("i", Nc, Z(n.segmenter), 1))
  ]);
}
const la = /* @__PURE__ */ H(Ic, [["render", Vc]]);
la.install = function(e) {
  e.component(la.name, la);
};
const Fc = {
  name: "ZmzDropdown",
  components: {
    ZmzTeleportdom: Gt
  },
  props: {
    /**
     * 显示位置
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * 高度
     */
    height: String,
    /**
     * 宽度
     */
    width: String,
    /**
     * 下拉角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 穿梭类名
     */
    teleportClass: [Array, String],
    /**
     * 显示
     */
    modelValue: [String, Number],
    /**
     * 激活方式
     */
    trigger: {
      type: String,
      default: "hover",
      validator(e) {
        return ["click", "hover"].includes(e);
      }
    },
    /**
     * 点击是否隐藏
     */
    hideOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 6];
      }
    }
  },
  emits: ["on-change", "on-visible-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = b(e.show), n = b(null), o = b(null), r = b(null), l = b([]), i = z({
      get() {
        return e.modelValue;
      },
      set(y) {
        t("update:modelValue", y);
      }
    }), s = () => {
      if (!e.disabled) {
        if (e.trigger === "custom" || e.trigger !== "click")
          return !1;
        a.value = !a.value;
      }
    }, d = (y) => {
      i.value = y, e.hideOnClick ? a.value = !1 : a.value = !0, t("on-change", y);
    };
    de(() => {
      c();
    });
    const c = () => {
      l.value.forEach((y, C) => {
        y.instance.props.index || (y.instance.props.index = C);
      });
    };
    Fe("zmzDropdown", {
      zmzDropdownList: l,
      model: i,
      width: e.width,
      height: e.height,
      hideOnClick: e.hideOnClick,
      handleItemClick: d,
      updateDom: c
    }), ue(
      a,
      (y) => {
        t("on-visible-change", y);
      },
      { lazy: !0 }
    );
    const f = () => {
      if (e.trigger === "custom" || e.trigger !== "hover")
        return !1;
      n.value && (clearTimeout(n.value), n.value = null), n.value = setTimeout(() => {
        a.value = !0;
      }, 250);
    }, m = () => {
      if (e.trigger === "custom" || e.trigger !== "hover")
        return !1;
      n.value && (clearTimeout(n.value), n.value = null, n.value = setTimeout(() => {
        a.value = !1;
      }, 150));
    }, g = (y) => {
      o.value && !o.value.contains(y.target) && a.value && (a.value = !1);
    }, h = z(() => {
      let y = [];
      return e.disabled && y.push("zmz-dropdown--disabled"), a.value && y.push("zmz-dropdown--open"), y;
    });
    return {
      currentVisible: a,
      handleClick: s,
      handleMouseenter: f,
      handleMouseleave: m,
      zmzDropdown: o,
      zmzDropdownTeleport: r,
      bodyCloseMenus: g,
      zmzDropdownClass: h
    };
  }
};
function Rc(e, t, a, n, o, r) {
  const l = oe("zmz-teleportdom"), i = qt("zmzclickoutside");
  return re((v(), _("div", {
    class: P(["zmz-dropdown", [n.zmzDropdownClass]]),
    onMouseenter: t[1] || (t[1] = (...s) => n.handleMouseenter && n.handleMouseenter(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => n.handleMouseleave && n.handleMouseleave(...s)),
    ref: "zmzDropdown"
  }, [
    u("div", {
      class: "zmz-dropdown__header",
      onClick: t[0] || (t[0] = (...s) => n.handleClick && n.handleClick(...s))
    }, [
      N(e.$slots, "default")
    ]),
    K(l, {
      arrow: a.arrow,
      ref: "zmzDropdownTeleport",
      "class-name": ["zmz-teleportdom--dropdown", a.teleportClass],
      "parent-ref": n.zmzDropdown,
      visible: n.currentVisible,
      offset: a.offset,
      placement: a.placement,
      teleport: a.teleport,
      "transition-name": a.placement == "top" || a.placement == "bottom" ? "zmz-fold-top" : "zmz-fold-left",
      onOnMouseenter: n.handleMouseenter,
      onOnMouseleave: n.handleMouseleave
    }, {
      default: le(() => [
        N(e.$slots, "dropdown")
      ]),
      _: 3
    }, 8, ["arrow", "class-name", "parent-ref", "visible", "offset", "placement", "teleport", "transition-name", "onOnMouseenter", "onOnMouseleave"])
  ], 34)), [
    [i, n.bodyCloseMenus]
  ]);
}
const oa = /* @__PURE__ */ H(Fc, [["render", Rc]]);
oa.install = function(e) {
  e.component(oa.name, oa);
};
const Zc = {
  name: "ZmzDropdownItem",
  props: {
    /**
     * 下标
     */
    index: {
      type: [Number, String]
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ce(), a = be("zmzDropdown", {}), n = (s) => {
      a.handleItemClick(s);
    }, o = z(() => {
      let s = [];
      return e.index == a.model.value && s.push("zmz-dropdown__item--active"), e.disabled && s.push("zmz-dropdown__item--disabled"), s;
    });
    de(() => {
      r(), l();
    }), Ne(() => {
      i(), l();
    });
    const r = () => {
      a.zmzDropdownList.value.push({
        uid: t.uid,
        instance: t
      });
    }, l = () => {
      a.updateDom();
    }, i = () => {
      if (a.zmzDropdownList.value && a.zmzDropdownList.value.length) {
        const s = a.zmzDropdownList.value.findIndex((d) => d.uid === t.uid);
        a.zmzDropdownList.value.splice(s, 1);
      }
    };
    return {
      handleClick: n,
      zmzDropdownItemClass: o
    };
  }
}, Wc = ["data-index"];
function $c(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-dropdown__item", [n.zmzDropdownItemClass]]),
    "data-index": a.index,
    onClick: t[0] || (t[0] = (l) => n.handleClick(a.index))
  }, [
    N(e.$slots, "default")
  ], 10, Wc);
}
const ra = /* @__PURE__ */ H(Zc, [["render", $c]]);
ra.install = function(e) {
  e.component(ra.name, ra);
};
const jc = {
  name: "ZmzDropdownMenu",
  setup() {
    const e = be("zmzDropdown");
    return {
      zmzDropdownWrapMenuStyle: z(() => {
        let a = {};
        return e.width && (a.width = e.width), e.height && (a.height = e.height), e.height && (a["overflow-y"] = e.height ? "auto" : ""), a;
      })
    };
  }
};
function Hc(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-dropdown__menu",
    style: j([n.zmzDropdownWrapMenuStyle])
  }, [
    N(e.$slots, "default")
  ], 4);
}
const ia = /* @__PURE__ */ H(jc, [["render", Hc]]);
ia.install = function(e) {
  e.component(ia.name, ia);
};
const Yc = {
  name: "ZmzStep",
  componentName: "ZmzStep",
  props: {
    /**
     * 当前
     */
    modelValue: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0
    },
    /**
     * 状态
     */
    status: {
      type: String,
      default: "process",
      validator(e) {
        return ["wait", "process", "finish", "error"].includes(e);
      }
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["default", "small"].includes(e);
      }
    },
    /**
     * 偏移
     */
    margin: {
      type: Number,
      default: 0
    },
    /**
     * 对齐
     */
    textAlign: {
      type: String,
      default: "left",
      validator(e) {
        return ["left", "center", "right"].includes(e);
      }
    },
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["horizontal", "vertical"].includes(e);
      }
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = b([]), n = z({
      get() {
        return e.modelValue;
      },
      set(s) {
        t("update:modelValue", s);
      }
    }), o = z(() => {
      let s = [];
      return e.mode && s.push(`zmz-step--${e.mode}`), e.mode === "horizontal" && s.push(`zmz-step--${e.textAlign}`), s;
    }), r = z(() => n.value >= a.value.length ? a.value.length : n.value);
    de(() => {
      i();
    });
    const l = () => {
      const s = e.status;
      a.value.forEach((d, c) => {
        const f = a.value[c - 1];
        c === r.value ? s === "error" ? (d.instance.proxy.internalStatus = "error", f && (f.instance.proxy.nextError = !0)) : d.instance.proxy.internalStatus = "process" : c < r.value ? d.instance.proxy.internalStatus = "finish" : d.instance.proxy.internalStatus = "wait", d.instance.proxy.finalStatus !== "error" && f && (f.instance.proxy.nextError = !1);
      });
    };
    ue(r, () => {
      l();
    }, { lazy: !0 });
    const i = () => {
      a.value.forEach((s, d) => {
        s.instance.proxy.index = d;
      }), l();
    };
    return Fe("zmzStep", {
      zmzStepList: a,
      updateDom: i,
      textAlign: e.textAlign,
      margin: e.margin
    }), {
      zmzStepClass: o
    };
  }
};
function qc(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-step", [n.zmzStepClass]])
  }, [
    N(e.$slots, "default")
  ], 2);
}
const sa = /* @__PURE__ */ H(Yc, [["render", qc]]);
sa.install = function(e) {
  e.component(sa.name, sa);
};
const Uc = {
  name: "ZmzStepItem",
  props: {
    /**
     * 图标
     */
    icon: String,
    /**
     * 标题
     */
    title: String,
    /**
     * 内容
     */
    status: {
      type: String,
      validator(e) {
        return ["wait", "process", "finish", "error"].includes(e);
      }
    },
    /**
     * 描述
     */
    description: String
  },
  setup(e) {
    const t = Ce(), a = be("zmzStep", {}), n = b(-1), o = b(""), r = b(!1), l = z(() => {
      const g = {};
      return a.textAlign == "center" ? n.value + 1 == i.value ? g["flex-basis"] = `${1 / (i.value - 1) * 100}% !important` : g["flex-basis"] = `${1 / (i.value - 1) * 100}%` : n.value + 1 == i.value ? g["flex-basis"] = 0 : g["flex-basis"] = `${1 / (i.value - 1) * 100}%`, g;
    }), i = z(() => a.zmzStepList.value.length), s = z(() => e.status || o.value), d = z(() => {
      const g = [];
      return s.value && g.push(`zmz-step__item--${s.value}`), r.value && g.push("zmz-step__item--next-error"), g;
    });
    de(() => {
      c(), f();
    }), Ne(() => {
      m(), f();
    });
    const c = () => {
      a.zmzStepList.value.push({
        uid: t.uid,
        instance: t
      });
    }, f = () => {
      a.updateDom();
    }, m = () => {
      if (a.zmzStepList.value && a.zmzStepList.value.length) {
        const g = a.zmzStepList.value.findIndex((h) => h.uid === t.uid);
        a.zmzStepList.value.splice(g, 1);
      }
    };
    return {
      index: n,
      zmzStepItemStyle: l,
      finalStatus: s,
      zmzStepItemClass: d,
      internalStatus: o
    };
  }
}, Gc = { class: "zmz-step__header" }, Xc = {
  key: 0,
  class: "zmz-step__icons"
}, Kc = {
  key: 0,
  class: "zmz-step__num"
}, Qc = {
  key: 1,
  class: "zmz-step__icon"
}, Jc = {
  key: 2,
  class: "zmz-step__icon"
}, em = { class: "zmz-step__section" }, tm = { class: "zmz-step__title" }, nm = {
  key: 0,
  class: "zmz-step__describe"
};
function am(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-step__item", [n.zmzStepItemClass]]),
    style: j([n.zmzStepItemStyle])
  }, [
    u("div", Gc, [
      N(e.$slots, "icon", {}, () => [
        a.icon ? (v(), _("div", Xc, [
          u("i", {
            class: P(["zmz-step__icons__inner", a.icon])
          }, null, 2)
        ])) : (v(), _(G, { key: 1 }, [
          ["process", "wait"].indexOf(n.finalStatus) > -1 ? (v(), _("div", Kc, Z(n.index + 1), 1)) : A("", !0),
          n.finalStatus === "finish" ? (v(), _("div", Qc, [...t[0] || (t[0] = [
            u("i", { class: "zmz-step__icon__inner zmz-icon--check" }, null, -1)
          ])])) : A("", !0),
          n.finalStatus === "error" ? (v(), _("div", Jc, [...t[1] || (t[1] = [
            u("i", { class: "zmz-step__icon__inner zmz-icon--wrong" }, null, -1)
          ])])) : A("", !0)
        ], 64))
      ])
    ]),
    t[2] || (t[2] = u("div", { class: "zmz-step__line" }, null, -1)),
    u("div", em, [
      u("div", tm, [
        N(e.$slots, "title", {}, () => [
          ne(Z(a.title), 1)
        ])
      ]),
      e.$slots.default || a.description ? (v(), _("div", nm, [
        N(e.$slots, "default", {}, () => [
          ne(Z(a.description), 1)
        ])
      ])) : A("", !0)
    ])
  ], 6);
}
const ua = /* @__PURE__ */ H(Uc, [["render", am]]);
ua.install = function(e) {
  e.component(ua.name, ua);
};
const lm = {
  name: "ZmzRender",
  props: {
    render: {
      type: Function,
      default() {
        return "Default function";
      }
    }
  },
  render() {
    return this.render(ie);
  }
}, Do = {
  name: "ZmzTabsNav",
  inject: ["zmzTabs"],
  components: {
    Render: lm
  },
  props: {
    /**
     * 卡片动画
     */
    animated: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签可增加和可关闭
     */
    editable: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签可增加
     */
    addable: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签可关闭
     */
    closable: {
      type: Boolean,
      default: !1
    }
  },
  created() {
    this.$nextTick(() => {
      this.update(), this.updateNavScroll(), this.resizeObserver = Qo(() => {
        this.updateNavScroll();
      }), this.resizeObserver && this.$refs.zmzTabsNav && this.resizeObserver.observe(this.$refs.zmzTabsNav);
    });
  },
  beforeUnmount() {
    this.resizeObserver && this.$refs.zmzTabsNav && (this.resizeObserver.unobserve(this.$refs.zmzTabsNav), this.resizeObserver = null);
  },
  data() {
    return {
      navStyle: {
        transform: ""
      },
      resizeObserver: null
    };
  },
  methods: {
    update() {
      if (this.$refs["zmzTabsNavItem" + this.zmzTabs.transformIndex.value] && this.$refs.zmzTabsNavLine && this.animated) {
        let e = "transform:translateX(" + this.$refs["zmzTabsNavItem" + this.zmzTabs.transformIndex.value].offsetLeft + "px)", t = "width:" + this.$refs["zmzTabsNavItem" + this.zmzTabs.transformIndex.value].offsetWidth + "px;";
        this.$refs.zmzTabsNavLine.style = t + e;
      }
    },
    handleTabs(e) {
      e.instance.proxy.disabled || (this.zmzTabs.handleTabsNavItemClick(e), this.update());
    },
    getCurrentScrollOffset() {
      const { navStyle: e } = this;
      return e.transform ? Number(e.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1]) : 0;
    },
    setOffset(e) {
      this.navStyle.transform = `translateX(-${e}px)`;
    },
    // 左键滚动
    scrollPrev() {
      const e = this.$refs.zmzTabsNavScroll.offsetWidth, t = this.getCurrentScrollOffset();
      if (!t) return;
      let a = t > e ? t - e : 0;
      this.setOffset(a), this.zmzTabs.handleScrollPrevNextTabs("prev", a);
    },
    // 右键滚动
    scrollNext() {
      const e = this.$refs.zmzTabsNav.offsetWidth, t = this.$refs.zmzTabsNavScroll.offsetWidth, a = this.getCurrentScrollOffset();
      if (e - a <= t) return;
      let n = e - a > t * 2 ? a + t : e - t;
      this.setOffset(n), this.zmzTabs.handleScrollPrevNextTabs("next", n);
    },
    // 获取滚动
    updateNavScroll() {
      const e = this.$refs.zmzTabsNav.offsetWidth, t = this.$refs.zmzTabsNavScroll.offsetWidth, a = this.getCurrentScrollOffset();
      t < e ? (this.zmzTabs.scroll.value = !0, e - a < t && this.setOffset(e - t)) : (this.zmzTabs.scroll.value = !1, a > 0 && this.setOffset(0));
    }
  },
  render() {
    let e = ie("div", {
      class: ["zmz-tabs__header__push"],
      onClick: (s) => this.zmzTabs.handleAddTabsItem(s)
    }, [
      ie("i", {
        class: ["zmz-icon--add"]
      })
    ]), t = ie("div", {
      class: ["zmz-tabs__header__wrap__prev"],
      onClick: () => this.scrollPrev()
    }, [
      ie("i", {
        class: ["zmz-icon--arrow-left"]
      })
    ]), a = ie("div", {
      class: ["zmz-tabs__header__wrap__next"],
      onClick: () => this.scrollNext()
    }, [
      ie("i", {
        class: ["zmz-icon--arrow-right"]
      })
    ]), n = null;
    (this.editable || this.addable) && (n = e);
    let o = null, r = null;
    this.zmzTabs.scroll.value && (o = t, r = a);
    let l = null;
    this.animated && this.zmzTabs.type == "" && (l = ie("div", {
      class: ["zmz-tabs__nav--line"],
      ref: "zmzTabsNavLine",
      style: this.update()
    }));
    let i = [];
    return this.zmzTabs.zmzTabsList.value.forEach((s, d) => {
      let c = null;
      s.instance.proxy.icon && !s.instance.proxy.$slots.title && (c = ie("i", {
        class: ["zmz-tabs__nav--item__icon", s.instance.proxy.icon]
      }));
      let f = null;
      s.instance.proxy.label && !s.instance.proxy.$slots.title && typeof s.instance.proxy.label != "function" && (f = ie("span", {}, s.instance.proxy.label));
      let m = null;
      s.instance.proxy.$slots.title && (m = s.instance.proxy.$slots.title());
      let g = null;
      typeof s.instance.proxy.label == "function" && (g = ie("render", {
        render: s.instance.proxy.label
      }));
      let h = null;
      (this.editable || this.closable) && s.instance.proxy.closable && (h = ie("i", {
        class: ["zmz-icon--wrong zmz-tabs__nav--item__closicon"],
        onClick: (y) => this.zmzTabs.handleRemoveTabsItem(y, s)
      })), i.push(ie("div", {
        class: ["zmz-tabs__nav--item", { "zmz-tabs__nav--item--active": s.instance.proxy.selected }, { "zmz-tabs__nav--item--disabled": s.instance.proxy.disabled }],
        ref: "zmzTabsNavItem" + d,
        key: d,
        onClick: () => this.handleTabs(s)
      }, [c, f, m, g, h]));
    }), ie("div", {
      class: ["zmz-tabs__header"]
    }, [
      ie("div", {
        class: ["zmz-tabs__header__wrap"],
        ref: "zmzTabsHeaderWrap"
      }, [
        o,
        r,
        ie("div", {
          class: ["zmz-tabs__header__wrap__scroll"],
          ref: "zmzTabsNavScroll"
        }, [
          ie("div", {
            class: ["zmz-tabs__nav"],
            ref: "zmzTabsNav",
            style: this.navStyle
          }, [
            i,
            l
          ])
        ])
      ]),
      n
    ]);
  }
}, da = {
  name: "ZmzTabs",
  props: {
    /**
     * 卡片激活name
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * 卡片风格
     */
    type: {
      type: String,
      default: "",
      validator(e) {
        return ["border-card", "", "card"].includes(e);
      }
    },
    /**
     * 卡片动画
     */
    animated: {
      type: Boolean,
      default: !1
    },
    /**
     * 卡片位置
     */
    tabPosition: {
      type: String,
      default: "top",
      validator(e) {
        return ["top", "bottom", "left", "right"].includes(e);
      }
    },
    /**
     * 激活辅助线
     */
    tabActiveLine: {
      type: Boolean,
      default: !0
    },
    /**
     * 标签可增加和可关闭
     */
    editable: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签可增加
     */
    addable: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签可关闭
     */
    closable: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签是否自动撑开
     */
    stretch: {
      type: Boolean,
      default: !1
    },
    // 删除回调
    beforeRemove: {
      type: Function,
      default() {
        return "Default function";
      }
    }
  },
  emits: ["update:modelValue", "on-change", "on-editable", "on-scroll-prev-next"],
  setup(e, {
    slots: t,
    emit: a
  }) {
    const n = b([]), o = b(0), r = b(!1), l = z({
      get() {
        return e.modelValue;
      },
      set(k) {
        a("update:modelValue", k);
      }
    });
    ue(() => l.value, (k, S) => {
      k != S && m();
    });
    const i = z(() => {
      let k = [];
      return e.type && k.push(`zmz-tabs--${e.type}`), e.tabPosition && k.push(`zmz-tabs--${e.tabPosition}`), e.tabActiveLine && e.type == "" && k.push("zmz-tabs--line"), e.animated && k.push("zmz-tabs--animated"), e.editable && k.push("zmz-tabs--editable"), e.addable && k.push("zmz-tabs--addable"), e.closable && k.push("zmz-tabs--closable"), e.stretch && k.push("zmz-tabs--stretch"), r.value && k.push("zmz-tabs--scroll"), k;
    }), s = (k) => {
      n.value.forEach((S, L) => {
        k.instance.proxy.name == S.instance.proxy.name ? (l.value = k.instance.proxy.name, o.value = L, S.instance.proxy.selected = !0, a("on-change", S.instance.proxy.name)) : S.instance.proxy.selected = !1;
      });
    }, d = z(() => {
      let k = {};
      return e.animated && (k.transform = "translateX(-" + 100 * o.value + "%)  translateZ(0px)"), k;
    }), c = z(() => {
      let k = [];
      return e.animated && k.push("zmz-tabs__content--animated"), k;
    }), f = () => {
      m();
    }, m = () => {
      n.value.forEach((k) => k.instance.proxy.selected = k.instance.proxy.name === l.value);
    }, g = () => {
      a("on-editable", null, "add");
    }, h = (k, S) => {
      k.stopPropagation(), e.beforeRemove || y(S.instance.proxy);
      const L = e.beforeRemove(S.instance.proxy);
      L && L.then ? L.then(() => {
        y(S.instance.proxy);
      }) : y(S.instance.proxy);
    }, y = (k) => {
      a("on-editable", k.name, "remove");
    }, C = (k, S) => {
      a("on-scroll-prev-next", S, k);
    };
    return Fe("zmzTabs", {
      zmzTabsList: n,
      animated: e.animated,
      type: e.type,
      transformIndex: o,
      handleTabsNavItemClick: s,
      handleAddTabsItem: g,
      handleRemoveTabsItem: h,
      updateNavDom: f,
      scroll: r,
      handleScrollPrevNextTabs: C
    }), de(() => {
      f();
    }), () => {
      let k = [
        ie(Do, {
          animated: e.animated,
          editable: e.editable,
          addable: e.addable,
          closable: e.closable
        }),
        ie("div", {
          class: ["zmz-tabs__content", c.value],
          style: [d.value]
        }, t.default())
      ];
      return (e.tabPosition == "right" || e.tabPosition == "bottom") && (k = [
        ie("div", {
          class: ["zmz-tabs__content", c.value],
          style: [d.value]
        }, t.default()),
        ie(Do, {
          animated: e.animated,
          editable: e.editable,
          addable: e.addable,
          closable: e.closable
        })
      ]), ie("div", {
        class: ["zmz-tabs", i.value]
      }, k);
    };
  }
};
da.install = function(e) {
  e.component(da.name, da);
};
const om = rt({
  name: "ZmzTabsItem",
  props: {
    label: {
      type: [String, Function],
      default: ""
    },
    name: {
      type: [String, Number],
      default: "0"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !0
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup() {
    const e = Ce(), t = be("zmzTabs", {}), a = b(!1);
    de(() => {
      n(), o();
    }), Ne(() => {
      r(), o();
    });
    const n = () => {
      t.zmzTabsList.value.push({
        uid: e.uid,
        instance: e
      });
    }, o = () => {
      t.updateNavDom();
    }, r = () => {
      if (t.zmzTabsList.value && t.zmzTabsList.value.length) {
        const i = t.zmzTabsList.value.findIndex((s) => s.uid === e.uid);
        t.zmzTabsList.value.splice(i, 1);
      }
    }, l = z(() => {
      let i = {};
      return t.animated && (a.value ? i.visibility = "visible" : i.visibility = "hidden"), i;
    });
    return {
      selected: a,
      zmzTabsContentItemStyle: l
    };
  }
});
function rm(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-tabs__content--item", [{ "zmz-tabs__content--item--active": e.selected }]]),
    style: j([e.zmzTabsContentItemStyle])
  }, [
    N(e.$slots, "default")
  ], 6);
}
const ca = /* @__PURE__ */ H(om, [["render", rm]]);
ca.install = function(e) {
  e.component(ca.name, ca);
};
const im = {
  name: "ZmzInputnumber",
  props: {
    /**
     * 原生
     */
    autocomplete: {
      type: String,
      default: "off"
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 控制器
     */
    controls: {
      type: Boolean,
      default: !0
    },
    /**
     * 位置
     */
    controlsPosition: {
      type: String,
      default: "",
      validator(e) {
        return ["left", "right", ""].includes(e);
      }
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 双向绑定
     */
    modelValue: {
      type: [Number, String],
      default: 0
    },
    /**
     * 最大值
     */
    max: {
      type: Number,
      default: 1 / 0
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: -1 / 0
    },
    /**
     * 步长
     */
    step: {
      type: Number,
      default: 1
    },
    /**
     * 精度值
     */
    accuracy: {
      type: Number,
      default: 0
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(!1), o = b(!1), r = b(!1), l = b(!1), i = be("zmzForm", {}), s = z(() => i && i.size ? i.size.value : ""), d = z({
      get() {
        let E = isNaN(e.modelValue) || !e.modelValue ? 0 : e.modelValue;
        return e.accuracy ? parseFloat(E).toFixed(e.accuracy) : parseFloat(E);
      },
      set(E) {
        if (B.value || F.value) return;
        let T = isNaN(E) || !E ? 0 : E;
        t("update:modelValue", e.accuracy ? parseFloat(T).toFixed(e.accuracy) : parseFloat(T)), c.value && c.value.proxy.onValidate();
      }
    }), c = z(() => Pe(a, "ZmzFormItem")), f = z(() => {
      let E = 1;
      return e.step > 1 && !e.accuracy ? E = parseInt(e.step) : e.accuracy && (E = e.step), E;
    }), m = () => {
      o.value = !0;
    }, g = () => {
      o.value = !1, d.value && (parseFloat(d.value) > e.max ? d.value = e.max : d.value = parseInt(d.value));
    }, h = (E) => {
      E.data || (d.value = 0), isNaN(E.data) && (d.value = 0);
    }, y = z(() => {
      let E = [];
      return (s.value || e.size) && E.push(`zmz-inputnumber--size-${s.value || e.size}`), e.controls && E.push("zmz-inputnumber--controls"), e.controls && e.controlsPosition && E.push(`zmz-inputnumber--controls-${e.controlsPosition}`), n.value && E.push("zmz-inputnumber--hover"), o.value && E.push("zmz-inputnumber--focus"), B.value && E.push("zmz-inputnumber--disabled"), F.value && E.push("zmz-inputnumber--readonly"), E;
    }), C = z(() => {
      let E = "";
      return e.controls && (E = "zmz-icon--reduce"), e.controls && e.controlsPosition && (E = "zmz-icon--arrow-bottom"), E;
    }), k = z(() => {
      let E = "";
      return e.controls && (E = "zmz-icon--add"), e.controls && e.controlsPosition && (E = "zmz-icon--arrow-top"), E;
    }), S = z(() => {
      let E = [];
      return l.value && E.push("zmz-inputnumber__reduce--disabeld"), E;
    }), L = z(() => {
      let E = [];
      return r.value && E.push("zmz-inputnumber__add--disabeld"), E;
    }), p = () => {
      let E = d.value;
      Number(E) - Number(f.value) <= e.min ? (E = e.min, l.value = !0) : (r.value = !1, l.value = !1, E = Number(E) - Number(f.value)), d.value = E, t("on-change", e.accuracy ? parseFloat(E).toFixed(e.accuracy) : parseFloat(E));
    }, w = () => {
      let E = d.value;
      Number(E) + Number(f.value) >= e.max ? (E = e.max, r.value = !0) : (l.value = !1, r.value = !1, E = Number(E) + Number(f.value)), d.value = E, t("on-change", e.accuracy ? parseFloat(E).toFixed(e.accuracy) : parseFloat(E));
    }, O = () => {
      const T = setInterval(() => {
        p();
      }, 100), I = (/* @__PURE__ */ new Date()).getTime(), V = () => {
        (/* @__PURE__ */ new Date()).getTime() - I < 100 && p(), clearInterval(T), document.removeEventListener("mouseup", V);
      };
      document.addEventListener("mouseup", V);
    }, x = () => {
      const T = setInterval(() => {
        w();
      }, 100), I = (/* @__PURE__ */ new Date()).getTime(), V = () => {
        (/* @__PURE__ */ new Date()).getTime() - I < 100 && w(), clearInterval(T), document.removeEventListener("mouseup", V);
      };
      document.addEventListener("mouseup", V);
    }, D = (E) => {
      E.keyCode === 38 ? (E.preventDefault(), w()) : E.keyCode === 40 && (E.preventDefault(), p());
    }, M = () => {
      B.value || F.value || (n.value = !0);
    }, R = () => {
      B.value || F.value || (n.value = !1);
    }, B = z(() => i && i.disabled ? i.disabled : e.disabled), F = z(() => i && i.readonly ? i.readonly : e.readonly);
    return {
      model: d,
      zmzInputnumberClass: y,
      handleBlur: g,
      handleFocus: m,
      handleInput: h,
      handleReduceClick: O,
      handleAddClick: x,
      handleKeyDown: D,
      handleMouseenter: M,
      handleMouseleave: R,
      globalFromReadonly: F,
      globalFromDisabled: B,
      zmzInputnumberIconReduceClass: C,
      zmzInputnumberIconAddClass: k,
      zmzInputnumberReduceClass: S,
      zmzInputnumberAddClass: L
    };
  }
}, sm = { class: "zmz-inputnumber__wrap" }, um = ["autocomplete", "disabled", "readonly", "name"];
function dm(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-inputnumber", [n.zmzInputnumberClass]])
  }, [
    a.controls ? (v(), _("div", {
      key: 0,
      class: P(["zmz-inputnumber__reduce", [n.zmzInputnumberReduceClass]]),
      onMousedown: t[0] || (t[0] = (...l) => n.handleReduceClick && n.handleReduceClick(...l)),
      onMouseenter: t[1] || (t[1] = (...l) => n.handleMouseenter && n.handleMouseenter(...l)),
      onMouseleave: t[2] || (t[2] = (...l) => n.handleMouseleave && n.handleMouseleave(...l))
    }, [
      u("i", {
        class: P(["zmz-inputnumber__icon", [n.zmzInputnumberIconReduceClass]])
      }, null, 2)
    ], 34)) : A("", !0),
    u("div", sm, [
      re(u("input", {
        type: "text",
        class: "zmz-inputnumber__input",
        onInput: t[3] || (t[3] = (...l) => n.handleInput && n.handleInput(...l)),
        onFocus: t[4] || (t[4] = (...l) => n.handleFocus && n.handleFocus(...l)),
        onBlur: t[5] || (t[5] = (...l) => n.handleBlur && n.handleBlur(...l)),
        onKeydown: t[6] || (t[6] = (...l) => n.handleKeyDown && n.handleKeyDown(...l)),
        autocomplete: a.autocomplete,
        disabled: n.globalFromDisabled,
        readonly: n.globalFromReadonly,
        name: a.name,
        "onUpdate:modelValue": t[7] || (t[7] = (l) => n.model = l)
      }, null, 40, um), [
        [Oe, n.model]
      ])
    ]),
    a.controls ? (v(), _("div", {
      key: 1,
      class: P(["zmz-inputnumber__add", [n.zmzInputnumberAddClass]]),
      onMousedown: t[8] || (t[8] = (...l) => n.handleAddClick && n.handleAddClick(...l)),
      onMouseenter: t[9] || (t[9] = (...l) => n.handleMouseenter && n.handleMouseenter(...l)),
      onMouseleave: t[10] || (t[10] = (...l) => n.handleMouseleave && n.handleMouseleave(...l))
    }, [
      u("i", {
        class: P(["zmz-inputnumber__icon", [n.zmzInputnumberIconAddClass]])
      }, null, 2)
    ], 34)) : A("", !0)
  ], 2);
}
const ma = /* @__PURE__ */ H(im, [["render", dm]]);
ma.install = function(e) {
  e.component(ma.name, ma);
};
const cm = {
  name: "ZmzInputtag",
  props: {
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * 自动填充
     */
    autocomplete: {
      type: String,
      default: "off"
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 获取焦点
     */
    autofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * 标签列表
     */
    tagList: {
      type: Array,
      default: () => []
    },
    /**
     * 标签长度
     */
    maxleng: {
      type: Number,
      default: -1
    }
  },
  emits: ["on-change", "on-delete", "on-focus", "on-blur", "update:modelValue", "update:tag-list"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(!1), o = b(null), r = b(null), l = b("100%"), i = be("zmzForm", {}), s = be("zmzFormItem", {}), d = z(() => i && i.size ? i.size.value : ""), c = z(() => e.placeholder ? e.placeholder : s.placeholderPrefixTextInput ? s.placeholderPrefixTextInput.value : ""), f = z(() => i && i.disabled ? i.disabled : e.disabled), m = z(() => i && i.readonly ? i.readonly : e.readonly), g = z({
      get() {
        return e.modelValue;
      },
      set(x) {
        f.value || m.value || t("update:modelValue", x);
      }
    }), h = z({
      get() {
        return e.tagList;
      },
      set(x) {
        f.value || m.value || t("update:tag-list", x);
      }
    }), y = (x) => {
      t("on-change", x.target.value);
    }, C = () => {
      n.value = !0, t("on-focus", h.value);
    }, k = (x) => {
      if (n.value = !1, g.value != "") {
        if (e.maxleng == "-1") {
          if (h.value.findIndex((M) => M == g.value) != -1) return;
          h.value.push(g.value);
        } else if (h.value.length >= e.maxleng)
          h.value.splice(e.maxleng);
        else if (h.value.length < e.maxleng) {
          if (h.value.findIndex((M) => M == g.value) != -1) return;
          h.value.push(g.value);
        }
        t("on-blur", h.value, g.value, x), g.value = "", L.value && L.value.proxy.onValidate("blur");
      }
    }, S = z(() => {
      let x = {};
      return x.width = l.value, x;
    }), L = z(() => Pe(a, "ZmzFormItem")), p = z(() => {
      let x = [];
      return f.value && x.push("zmz-inputtag--disabled"), m.value && x.push("zmz-inputtag--readonly"), (d.value || e.size) && x.push(`zmz-inputtag--size-${d.value || e.size}`), n.value && x.push("zmz-inputtag--focus"), x;
    }), w = (x) => {
      if (f.value || m.value) return;
      let D = h.value.findIndex((M) => x === M);
      t("on-delete", D, h.value[D]), h.value.splice(D, 1);
    }, O = () => {
      Se(() => {
        let x = parseInt(r.value ? r.value.clientWidth : 0), D = parseInt(o.value ? o.value.clientWidth : 0);
        x - D > 100 ? l.value = x - D - 2 + "px" : l.value = "100%";
      });
    };
    return ue(() => h.value, () => {
      O();
    }, { lazy: !0, immediate: !0, deep: !0 }), {
      modelTagList: h,
      model: g,
      zmzInputtagclass: p,
      handleDelete: w,
      handleBlur: k,
      handleFocus: C,
      placeholderText: c,
      zmzinputtagTags: o,
      zmzInputtag: r,
      handleInput: y,
      globalFromDisabled: f,
      globalFromReadonly: m,
      zmzInputtagInputStyle: S
    };
  }
}, mm = {
  class: "zmz-inputtag__tags",
  ref: "zmzinputtagTags"
}, fm = { class: "zmz-inputtag__item__inner" }, vm = { class: "zmz-inputtag__text" }, zm = ["onClick"], _m = ["placeholder", "disabled", "readonly", "autofocus", "autocomplete"];
function hm(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-inputtag", n.zmzInputtagclass]),
    ref: "zmzInputtag"
  }, [
    u("div", mm, [
      (v(!0), _(G, null, fe(n.modelTagList, (l, i) => (v(), _("div", {
        class: "zmz-inputtag__item",
        key: i
      }, [
        u("div", fm, [
          u("span", vm, Z(l), 1),
          u("i", {
            class: "zmz-icon--error zmz-inputtag__icon",
            onClick: (s) => n.handleDelete(l)
          }, null, 8, zm)
        ])
      ]))), 128))
    ], 512),
    re(u("input", {
      class: "zmz-inputtag__input",
      placeholder: n.placeholderText,
      onKeyup: t[0] || (t[0] = Ar((...l) => n.handleBlur && n.handleBlur(...l), ["enter"])),
      onFocus: t[1] || (t[1] = (...l) => n.handleFocus && n.handleFocus(...l)),
      ref: "zmzInputtagInput",
      disabled: n.globalFromDisabled,
      readonly: n.globalFromReadonly,
      "onUpdate:modelValue": t[2] || (t[2] = (l) => n.model = l),
      onBlur: t[3] || (t[3] = (...l) => n.handleBlur && n.handleBlur(...l)),
      style: j([n.zmzInputtagInputStyle]),
      autofocus: a.autofocus,
      autocomplete: a.autocomplete,
      onInput: t[4] || (t[4] = (...l) => n.handleInput && n.handleInput(...l))
    }, null, 44, _m), [
      [Oe, n.model]
    ])
  ], 2);
}
const fa = /* @__PURE__ */ H(cm, [["render", hm]]);
fa.install = function(e) {
  e.component(fa.name, fa);
};
const gm = {
  name: "ZmzTextarea",
  props: {
    /**
     * 	超出字符是否裁剪
     */
    cut: {
      type: Boolean,
      default: !1
    },
    /**
     * 伸缩
     */
    resize: {
      type: Boolean,
      default: !0
    },
    /**
     * 获取焦点
     */
    autofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定
     */
    modelValue: [Number, String, Boolean],
    /**
     * 显示文字限制
     */
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * 行高
     */
    rows: {
      type: Number,
      default: 4
    },
    /**
     * 行宽
     */
    cols: Number,
    /**
     * 最大长度
     */
    maxlength: {
      type: Number,
      default: -1
    },
    /**
     * 最小长度
     */
    minlength: Number,
    /**
     * 原生属性name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 提交字段
     */
    dirname: {
      type: String,
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 换行提交
     */
    wrap: {
      type: String,
      default: "soft",
      validator(e) {
        return ["soft", "hard"].includes(e);
      }
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = be("zmzFormItem", {}), o = be("zmzForm", {}), r = z(() => Pe(a, "ZmzFormItem")), l = z({
      get() {
        return e.modelValue;
      },
      set(k) {
        h.value || y.value || t("update:modelValue", k);
      }
    }), i = () => {
      let k = l.value;
      t("on-change", k);
    }, s = z(() => e.cut ? e.maxlength : -1), d = z(() => e.maxlength == -1 ? !1 : l.value.length > e.maxlength && e.showWordLimit), c = z(() => l.value.length), f = z(() => o && o.size ? o.size.value : ""), m = z(() => {
      let k = [];
      return h.value && k.push("zmz-textarea--disabled"), y.value && k.push("zmz-textarea--readonly"), e.resize && k.push("zmz-textarea--resize"), d.value && k.push("zmz-textarea--outrange"), e.showWordLimit && k.push("zmz-textarea--limit"), e.cols && k.push("zmz-textarea--cols"), (f.value || e.size) && k.push(`zmz-switch--size-${f.value || e.size}`), k;
    }), g = z(() => e.placeholder ? e.placeholder : n.placeholderPrefixTextInput ? n.placeholderPrefixTextInput.value : ""), h = z(() => o && o.disabled ? o.disabled : e.disabled), y = z(() => o && o.readonly ? o.readonly : e.readonly);
    return {
      model: l,
      handleInput: i,
      censusNumber: c,
      outrangeStatus: d,
      zmzTextareaClass: m,
      maxCount: s,
      placeholderText: g,
      handleBlur: () => {
        r.value && r.value.proxy.onValidate("blur");
      },
      globalFromDisabled: h,
      globalFromReadonly: y
    };
  }
}, ym = ["rows", "name", "disabled", "readonly", "maxlength", "minlength", "autofocus", "placeholder", "dirname", "cols", "wrap"], pm = {
  key: 0,
  class: "zmz-textarea__count"
}, bm = { class: "zmz-textarea__total" };
function km(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-textarea", [n.zmzTextareaClass]])
  }, [
    re(u("textarea", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => n.model = l),
      rows: a.rows,
      name: a.name,
      onInput: t[1] || (t[1] = (...l) => n.handleInput && n.handleInput(...l)),
      disabled: n.globalFromDisabled,
      readonly: n.globalFromReadonly,
      maxlength: n.maxCount,
      minlength: a.minlength,
      autofocus: a.autofocus,
      class: P(["zmz-textarea__inner", { "zmz-textarea__textarea__outrange": n.outrangeStatus }]),
      placeholder: n.placeholderText,
      dirname: a.dirname,
      cols: a.cols,
      wrap: a.wrap,
      onBlur: t[2] || (t[2] = (...l) => n.handleBlur && n.handleBlur(...l))
    }, null, 42, ym), [
      [Oe, n.model]
    ]),
    a.maxlength && a.showWordLimit ? (v(), _("span", pm, [
      e.$slots.count ? N(e.$slots, "count", {
        key: 0,
        status: n.outrangeStatus,
        count: n.censusNumber,
        maxCount: a.maxlength
      }) : (v(), _(G, { key: 1 }, [
        u("span", {
          class: P(["zmz-textarea__num", { "zmz-textarea__num--outrange": n.outrangeStatus }])
        }, Z(n.censusNumber), 3),
        a.maxlength != -1 ? (v(), _(G, { key: 0 }, [
          t[3] || (t[3] = u("span", { class: "zmz-textarea__division" }, "/", -1)),
          u("span", bm, Z(a.maxlength), 1)
        ], 64)) : A("", !0)
      ], 64))
    ])) : A("", !0)
  ], 2);
}
const va = /* @__PURE__ */ H(gm, [["render", km]]);
va.install = function(e) {
  e.component(va.name, va);
};
const Cm = {
  name: "ZmzRadio",
  props: {
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 原生name
     */
    name: String,
    /**
     * 边线
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 文本
     */
    label: {
      type: [String, Boolean, Number],
      default: ""
    },
    /**
     * 值
     */
    value: {
      type: [String, Boolean, Number],
      default: ""
    },
    /**
     * 绑定
     */
    modelValue: [Boolean, String, Number],
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = be("zmzForm", {}), o = z(() => n && n.size ? n.size.value : ""), r = z({
      get() {
        return i.value && i.value.proxy ? i.value.proxy.modelGroup : e.modelValue;
      },
      set(C) {
        h.value || y.value || (i.value ? i.value.proxy.onGroupChange(C) : (t("update:modelValue", C), t("on-change", C)), l.value && l.value.proxy.onValidate());
      }
    }), l = z(() => Pe(a, "ZmzFormItem")), i = z(() => Pe(a, "ZmzRadioGroup")), s = z(() => e.name ? e.name : i.value ? a.proxy.zmzRadioGroupName : ""), d = z(() => {
      let C = r.value;
      return typeof C == "string" || typeof C == "number" || typeof C == "boolean" ? C === e.value : null;
    }), c = z(() => i.value && i.value.proxy.disabled ? i.value.proxy.disabled : e.disabled), f = z(() => i.value && i.value.proxy.readonly ? i.value.proxy.readonly : e.readonly), m = z(() => {
      let C = [];
      return (o.value || e.size) && C.push(`zmz-radio--size-${o.value || e.size}`), e.border && C.push("zmz-radio--border"), d.value && C.push("zmz-radio--checked"), h.value && C.push("zmz-radio--disabled"), y.value && C.push("zmz-radio--readonly"), C;
    }), g = z(() => !(i.value && i.value.proxy.button)), h = z(() => n && n.disabled ? n.disabled : c.value), y = z(() => n && n.readonly ? n.readonly : f.value);
    return {
      model: r,
      isChecked: d,
      globalFromDisabled: h,
      globalFromReadonly: y,
      zmzRadioName: s,
      zmzRadioClass: m,
      isButton: g
    };
  }
}, wm = {
  key: 0,
  class: "zmz-radio__wrap"
}, Sm = { class: "zmz-radio__text" }, xm = {
  key: 1,
  class: "zmz-radio__wrap"
}, Tm = {
  key: 0,
  class: "zmz-radio__icon"
}, Om = {
  key: 1,
  class: "zmz-radio__text"
}, Lm = ["disable", "readonly", "name", "value", "checked"];
function Dm(e, t, a, n, o, r) {
  return v(), _("label", {
    class: P(["zmz-radio", [n.zmzRadioClass]])
  }, [
    e.$slots.radio ? (v(), _("div", wm, [
      u("div", Sm, [
        N(e.$slots, "radio", {
          item: { checked: n.isChecked }
        })
      ])
    ])) : (v(), _("div", xm, [
      n.isButton ? (v(), _("span", Tm, [...t[1] || (t[1] = [
        u("i", { class: "zmz-radio__icon__inner" }, null, -1)
      ])])) : A("", !0),
      e.$slots.default || a.label ? (v(), _("span", Om, [
        N(e.$slots, "default", {}, () => [
          ne(Z(a.label), 1)
        ])
      ])) : A("", !0)
    ])),
    re(u("input", {
      type: "radio",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => n.model = l),
      disable: n.globalFromDisabled,
      readonly: n.globalFromReadonly,
      name: n.zmzRadioName,
      value: a.value,
      checked: n.isChecked,
      class: "zmz-radio__input"
    }, null, 8, Lm), [
      [Pr, n.model]
    ])
  ], 2);
}
const nn = /* @__PURE__ */ H(Cm, [["render", Dm]]);
nn.install = function(e) {
  e.component(nn.name, nn);
};
const Mm = {
  name: "ZmzRadioGroup",
  componentName: "ZmzRadioGroup",
  props: {
    /**
     * 绑定值
     */
    modelValue: [String, Number, Boolean],
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 垂直
     */
    vertical: {
      type: Boolean,
      default: !1
    },
    /**
     * 按钮
     */
    button: {
      type: Boolean,
      default: !1
    },
    /**
     * 按钮填充
     */
    buttonBorder: {
      type: Boolean,
      default: !1
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = be("zmzForm", {}), o = z(() => n && n.size ? n.size.value : ""), r = z({
      get() {
        return e.modelValue;
      },
      set(d) {
        i(d);
      }
    }), l = z(() => e.name ? e.name : "zmzRadioGroup_" + (/* @__PURE__ */ new Date()).getTime()), i = (d) => {
      t("update:modelValue", d), t("on-change", d), Pe(a, "ZmzFormItem") && Pe(a, "ZmzFormItem").proxy.onValidate();
    }, s = z(() => {
      let d = [];
      return (o.value || e.size) && d.push(`zmz-radiogroup--size-${o.value || e.size}`), e.vertical && d.push("zmz-radiogroup--vertical"), e.button && d.push("zmz-radiogroup--button"), e.button && e.buttonBorder && d.push("zmz-radiogroup--button-border"), d;
    });
    return {
      modelGroup: r,
      onGroupChange: i,
      zmzRadioGroupName: l,
      zmzRadioGroupClass: s
    };
  }
};
function Em(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-radiogroup", [n.zmzRadioGroupClass]])
  }, [
    N(e.$slots, "default")
  ], 2);
}
const za = /* @__PURE__ */ H(Mm, [["render", Em]]);
za.install = function(e) {
  e.component(za.name, za);
};
const Bm = {
  name: "ZmzCheckbox",
  props: {
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 边框
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 文本
     */
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    /**
     * 值
     */
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    /**
     * 双向绑定
     */
    modelValue: [Boolean],
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 半选
     */
    semiselection: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = be("zmzForm", {}), o = z(() => n && n.size ? n.size.value : ""), r = z({
      get() {
        return i.value && i.value.proxy ? i.value.proxy.modelGroup : e.modelValue;
      },
      set(k) {
        y.value || C.value || (i.value ? i.value.proxy.onGroupChange(k) : (t("update:modelValue", k), t("on-change", k)), l.value && l.value.proxy.onValidate());
      }
    }), l = z(() => Pe(a, "ZmzFormItem")), i = z(() => Pe(a, "ZmzCheckboxGroup")), s = z(() => e.value ? e.value : e.label), d = z(() => {
      const k = r.value;
      return typeof k == "boolean" ? k : k instanceof Array ? k.includes(s.value) : null;
    }), c = z(() => e.name ? e.name : i.value ? a.proxy.zmzCheckboxGroupName : ""), f = z(() => i.value && i.value.proxy.disabled ? i.value.proxy.disabled : e.disabled), m = z(() => i.value && i.value.proxy.readonly ? i.value.proxy.readonly : e.readonly), g = z(() => {
      let k = [];
      return (o.value || e.size) && k.push(`zmz-checkbox--size-${o.value || e.size}`), e.border && k.push("zmz-checkbox--border"), d.value && k.push("zmz-checkbox--checked"), e.semiselection && !d.value && k.push("zmz-checkbox--semiselection"), y.value && k.push("zmz-checkbox--disabled"), C.value && k.push("zmz-checkbox--readonly"), k;
    }), h = z(() => !(i.value && i.value.proxy.button)), y = z(() => n && n.disabled ? n.disabled : f.value), C = z(() => n && n.readonly ? n.readonly : m.value);
    return {
      model: r,
      isChecked: d,
      labelOrValue: s,
      globalFromDisabled: y,
      globalFromReadonly: C,
      zmzCheckedClass: g,
      isButton: h,
      zmzCheckboxName: c
    };
  }
}, Im = {
  key: 0,
  class: "zmz-checkbox__wrap"
}, Am = { class: "zmz-checkbox__text" }, Pm = ["disable", "readonly", "value", "checked", "name"], Nm = {
  key: 1,
  class: "zmz-checkbox__wrap"
}, Vm = {
  key: 0,
  class: "zmz-checkbox__icon"
}, Fm = ["disable", "readonly", "value", "checked", "name"], Rm = {
  key: 1,
  class: "zmz-checkbox__text"
};
function Zm(e, t, a, n, o, r) {
  return v(), _("label", {
    class: P(["zmz-checkbox", [n.zmzCheckedClass]])
  }, [
    e.$slots.checkbox ? (v(), _("div", Im, [
      u("div", Am, [
        N(e.$slots, "checkbox", { checked: n.isChecked })
      ]),
      re(u("input", {
        type: "checkbox",
        "onUpdate:modelValue": t[0] || (t[0] = (l) => n.model = l),
        disable: n.globalFromDisabled,
        readonly: n.globalFromReadonly,
        value: a.value,
        checked: n.isChecked,
        name: n.zmzCheckboxName,
        class: "zmz-checkbox__input"
      }, null, 8, Pm), [
        [zo, n.model]
      ])
    ])) : (v(), _("div", Nm, [
      n.isButton ? (v(), _("span", Vm, [
        N(e.$slots, "icon", {}, () => [
          t[2] || (t[2] = u("i", { class: "zmz-checkbox__icon__inner" }, null, -1))
        ])
      ])) : A("", !0),
      re(u("input", {
        type: "checkbox",
        "onUpdate:modelValue": t[1] || (t[1] = (l) => n.model = l),
        disable: n.globalFromDisabled,
        readonly: n.globalFromReadonly,
        value: a.value,
        checked: n.isChecked,
        name: n.zmzCheckboxName,
        class: "zmz-checkbox__input"
      }, null, 8, Fm), [
        [zo, n.model]
      ]),
      e.$slots.default || a.label ? (v(), _("span", Rm, [
        N(e.$slots, "default", {}, () => [
          ne(Z(a.label), 1)
        ])
      ])) : A("", !0)
    ]))
  ], 2);
}
const Ot = /* @__PURE__ */ H(Bm, [["render", Zm]]);
Ot.install = function(e) {
  e.component(Ot.name, Ot);
};
const Wm = {
  name: "ZmzCheckboxGroup",
  componentName: "ZmzCheckboxGroup",
  props: {
    /**
     * 双向绑定
     */
    modelValue: Array,
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 垂直
     */
    vertical: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否按钮
     */
    button: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否边线
     */
    buttonBorder: {
      type: Boolean,
      default: !1
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = be("zmzForm", {}), o = z(() => n && n.size ? n.size.value : ""), r = z({
      get() {
        return e.modelValue;
      },
      set(d) {
        l(d);
      }
    }), l = (d) => {
      t("update:modelValue", d), t("on-change", d), Pe(a, "ZmzFormItem") && Pe(a, "ZmzFormItem").proxy.onValidate();
    }, i = z(() => e.name ? e.name : "zmzCheckboxGroup_" + (/* @__PURE__ */ new Date()).getTime()), s = z(() => {
      let d = [];
      return (o.value || e.size) && d.push(`zmz-checkboxgroup--size-${o.value || e.size}`), e.vertical && d.push("zmz-checkboxgroup--vertical"), e.button && d.push("zmz-checkboxgroup--button"), e.button && e.buttonBorder && d.push("zmz-checkboxgroup--button-border"), d;
    });
    return {
      modelGroup: r,
      onGroupChange: l,
      zmzCheckboxGroupClass: s,
      zmzCheckboxGroupName: i
    };
  }
};
function $m(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-checkboxgroup", [n.zmzCheckboxGroupClass]])
  }, [
    N(e.$slots, "default")
  ], 2);
}
const _a = /* @__PURE__ */ H(Wm, [["render", $m]]);
_a.install = function(e) {
  e.component(_a.name, _a);
};
const jm = {
  name: "ZmzSwitch",
  props: {
    /**
     * 是否禁用
     */
    name: {
      type: String
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 双向绑定
     */
    modelValue: {
      type: [Boolean, String, Number],
      default: !1
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "default", "small", "mini"].includes(e);
      }
    },
    /**
     * 打开值
     */
    openValue: {
      type: [Boolean, String, Number],
      default: !0
    },
    /**
     * 关闭值
     */
    closeValue: {
      type: [Boolean, String, Number],
      default: !1
    },
    /**
     * 打开颜色
     */
    openColor: {
      type: String,
      default: ""
    },
    /**
     * 关闭颜色
     */
    closeColor: {
      type: String,
      default: ""
    },
    /**
     * 打开border颜色
     */
    openBorderColor: {
      type: String,
      default: ""
    },
    /**
     * 关闭border颜色
     */
    closeBorderColor: {
      type: String,
      default: ""
    },
    /**
     * 打开icon
     */
    openIcon: {
      type: String,
      default: ""
    },
    /**
     * 关闭icon
     */
    closeIcon: {
      type: String,
      default: ""
    },
    /**
     * 打开icon颜色
     */
    openIconColor: {
      type: String,
      default: ""
    },
    /**
     * 关闭icon
     */
    closeIconColor: {
      type: String,
      default: ""
    },
    /**
     * 打开dot颜色
     */
    openDotColor: {
      type: String,
      default: ""
    },
    /**
     * 关闭dot颜色
     */
    closeDotColor: {
      type: String,
      default: ""
    },
    /**
     * 加载
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * 宽度
     */
    width: {
      type: [String, Number],
      default: ""
    },
    /**
     * 打开前阻止
     */
    beforeChange: {
      type: Function,
      default() {
        return "Default function";
      }
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = be("zmzForm", {}), o = z(() => n && n.size ? n.size.value : ""), r = () => {
      const y = l.value === e.openValue ? e.closeValue : e.openValue;
      l.value = y, t("on-change", y), Pe(a, "ZmzFormItem") && Pe(a, "ZmzFormItem").proxy.onValidate();
    }, l = z({
      get() {
        return e.modelValue;
      },
      set(y) {
        t("update:modelValue", y);
      }
    }), i = (y) => {
      y.preventDefault(), !(g.value || h.value || e.loading) && (typeof e.beforeChange == "function" && Object.prototype.toString.call(e.beforeChange()) === "[object Promise]" ? e.beforeChange().then(() => {
        r();
      }) : r());
    }, s = z(() => {
      let y = [];
      return (o.value || e.size) && y.push(`zmz-switch--size-${o.value || e.size}`), l.value === e.openValue && y.push("zmz-switch--checked"), g.value && y.push("zmz-switch--disabled"), h.value && y.push("zmz-switch--readonly"), e.loading && y.push("zmz-switch--loading"), y;
    }), d = z(() => {
      let y = {};
      return e.width && (y.width = Me(e.width)), y;
    }), c = z(() => {
      let y = {};
      return (e.openColor || e.closeColor) && (y.background = l.value === e.openValue ? e.openColor : e.closeColor, y["border-color"] = l.value === e.openValue ? e.openColor : e.closeColor), (e.openBorderColor || e.closeBorderColor) && (y["border-color"] = l.value === e.openValue ? e.openBorderColor : e.closeBorderColor), y;
    }), f = z(() => {
      let y = "";
      return (e.openIcon || e.closeIcon) && (y = l.value === e.openValue ? e.openIcon : e.closeIcon), y;
    }), m = z(() => {
      let y = {};
      return (e.openDotColor || e.closeDotColor) && (y.background = l.value === e.openValue ? e.openDotColor : e.closeDotColor), (e.openIconColor || e.closeIconColor) && (y.color = l.value === e.openValue ? e.openIconColor : e.closeIconColor), y;
    }), g = z(() => n && n.disabled ? n.disabled : e.disabled), h = z(() => n && n.readonly ? n.readonly : e.readonly);
    return {
      headleClick: i,
      zmzSwitchClass: s,
      model: l,
      zmzSwitchStyle: d,
      zmzSwitchWrapStyle: c,
      zmzSwitchDotIcon: f,
      zmzSwitchDotStyle: m
    };
  }
}, Hm = ["value", "name"], Ym = {
  key: 0,
  class: "zmz-switch__wrap__dot__icon zmz-icon--loading"
};
function qm(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-switch", [n.zmzSwitchClass]]),
    onClick: t[0] || (t[0] = (...l) => n.headleClick && n.headleClick(...l)),
    style: j([n.zmzSwitchStyle])
  }, [
    u("input", {
      class: "zmz-switch__input",
      type: "hidden",
      value: n.model,
      name: a.name
    }, null, 8, Hm),
    u("div", {
      class: "zmz-switch__wrap",
      style: j([n.zmzSwitchStyle, n.zmzSwitchWrapStyle])
    }, [
      u("span", {
        class: "zmz-switch__wrap__dot",
        style: j([n.zmzSwitchDotStyle])
      }, [
        a.loading ? (v(), _("i", Ym)) : A("", !0),
        (a.openIcon || a.closeIcon) && !a.loading ? (v(), _("i", {
          key: 1,
          class: P(n.zmzSwitchDotIcon)
        }, null, 2)) : A("", !0)
      ], 4),
      u("div", {
        class: "zmz-switch__wrap__text",
        style: j([n.zmzSwitchStyle])
      }, [
        n.model === a.openValue ? N(e.$slots, "open", { key: 0 }) : A("", !0),
        n.model === a.closeValue ? N(e.$slots, "close", { key: 1 }) : A("", !0),
        N(e.$slots, "default")
      ], 4)
    ], 4)
  ], 6);
}
const ha = /* @__PURE__ */ H(jm, [["render", qm]]);
ha.install = function(e) {
  e.component(ha.name, ha);
};
const Um = {
  name: "ZmzSelect",
  componentName: "ZmzSelect",
  components: {
    ZmzTeleportdom: Gt
  },
  props: {
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 清除按钮
     */
    clearbtn: {
      type: Boolean,
      default: !1
    },
    /**
     * 后缀图标
     */
    suffixIcon: {
      type: String,
      default: ""
    },
    /**
     * 后缀是否显示
     */
    suffix: {
      type: Boolean,
      default: !0
    },
    /**
     * 前缀是否显示
     */
    prefix: {
      type: Boolean,
      default: !1
    },
    /**
     * 后缀图标
     */
    prefixIcon: {
      type: String,
      default: ""
    },
    /**
     * 原生的自动完成功能
     */
    autocomplete: {
      type: String,
      default: "off"
    },
    /**
     * 双向绑定
     */
    modelValue: [String, Number],
    /**
     * 打开
     */
    open: {
      type: Boolean,
      default: !1
    },
    /**
     * 空
     */
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["on-change", "on-focus", "on-clear", "on-blur", "update:modelValue", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(""), o = be("zmzFormItem", {}), r = be("zmzForm", {}), l = b(null), i = b(null), s = b(!1), d = b(!1), c = b(null), f = b(!1), m = b([]), g = z(() => r && r.size ? r.size.value : ""), h = z({
      get() {
        return e.modelValue;
      },
      set(q) {
        k(q);
      }
    });
    de(() => {
      e.open && (f.value = e.open);
    });
    const y = z(() => e.placeholder ? e.placeholder : o.placeholderPrefixTextSelect ? o.placeholderPrefixTextSelect.value : ""), C = z(() => Pe(a, "ZmzFormItem")), k = (q) => {
      X.value || ee.value || (s.value = !1, t("update:modelValue", q), t("on-change", q), t("on-blur", !0), C.value && C.value.proxy.onValidate());
    }, S = z(() => {
      let q = [];
      return (g.value || e.size) && q.push(`zmz-select--size-${g.value || e.size}`), f.value && q.push("zmz-select--open"), X.value && q.push("zmz-select--disabled"), ee.value && q.push("zmz-select--readonly"), s.value && q.push("zmz-select--focus"), q;
    }), L = z(() => {
      let q = ["zmz-teleportdom--select"];
      return e.effect && q.push(`zmz-teleportdom--tooltip-${e.effect}`), (g.value || e.size) && q.push(`zmz-teleportdom--select--size-${g.value || e.size}`), q;
    }), p = z(() => {
      let q = [];
      return e.suffix && q.push("zmz-select__input--suffix"), e.prefix && q.push("zmz-select__input--prefix"), q;
    }), w = () => {
      X.value || ee.value || (s.value = !0, f.value ? (f.value = !1, C.value && C.value.proxy.onValidate()) : (t("on-focus", !0), f.value = !0));
    }, O = (q) => {
      l.value && !l.value.contains(q.target) && (s.value = !1, f.value == !0 && (t("on-blur", !0), f.value = !1, C.value && C.value.proxy.onValidate()));
    }, x = z(() => !!m.value.length), D = z(() => n.value && e.clearbtn && d.value && !f.value), M = () => {
      n.value = "", t("update:modelValue", ""), t("on-clear");
    }, R = () => {
      t("on-close-before");
    }, B = () => {
      t("on-close");
    }, F = () => {
      t("on-close-after");
    }, E = () => {
      t("on-open-before");
    }, T = () => {
      t("on-open");
    }, I = () => {
      t("on-open-after");
    }, V = () => {
      if (e.trigger === "custom" || e.trigger !== "hover")
        return !1;
      c.value && (clearTimeout(c.value), c.value = null), c.value = setTimeout(() => {
        f.value = !0;
      }, 250);
    }, W = () => {
      if (e.trigger === "custom" || e.trigger !== "hover")
        return !1;
      c.value && (clearTimeout(c.value), c.value = null, c.value = setTimeout(() => {
        f.value = !1;
      }, 150));
    }, $ = z(() => {
      let q = {};
      if (i.value && f.value) {
        let ve = l.value.getBoundingClientRect();
        q["min-width"] = ve.width + "px";
      }
      return q;
    }), X = z(() => r && r.disabled ? r.disabled : e.disabled), ee = z(() => r && r.readonly ? r.readonly : e.readonly);
    return Fe("zmzSelect", {
      currentVisible: f,
      updateDom: () => {
      },
      zmzSelectList: m
    }), {
      model: h,
      handleClick: w,
      selectLabel: n,
      currentVisible: f,
      isEmpty: x,
      hovering: d,
      clearInput: M,
      isClear: D,
      zmzSelectClass: S,
      zmzSelect: l,
      zmzSelectContainer: i,
      handleAfterLeave: F,
      handleLeave: B,
      handleBeforeLeave: R,
      handleAfterEnter: I,
      handleEnter: T,
      handleBeforeEnter: E,
      onGroupChange: k,
      bodyCloseMenus: O,
      placeholderText: y,
      handleMouseenter: V,
      handleMouseleave: W,
      zmzSelectTeleportStyle: $,
      globalFromDisabled: X,
      globalFromReadonly: ee,
      zmzTeleportdomClass: L,
      zmzSelectInput: p
    };
  }
}, Gm = {
  key: 0,
  class: "zmz-select__input__prefix"
}, Xm = ["value", "name", "placeholder", "autocomplete"], Km = {
  key: 1,
  class: "zmz-select__input__suffix"
}, Qm = {
  key: 1,
  class: "zmz-select__input__toggle"
}, Jm = {
  class: "zmz-select__dropdown",
  ref: "zmzSelectContainer"
}, ef = {
  key: 0,
  class: "zmz-select__empty"
};
function tf(e, t, a, n, o, r) {
  const l = oe("zmz-teleportdom"), i = qt("zmzclickoutside");
  return re((v(), _("div", {
    class: P(["zmz-select", [n.zmzSelectClass]]),
    ref: "zmzSelect",
    onMouseenter: t[2] || (t[2] = (s) => n.hovering = !0),
    onMouseleave: t[3] || (t[3] = (s) => n.hovering = !1)
  }, [
    u("div", {
      class: P(["zmz-select__input", [n.zmzSelectInput]]),
      onClick: t[1] || (t[1] = (...s) => n.handleClick && n.handleClick(...s))
    }, [
      a.prefix ? (v(), _("div", Gm, [
        N(e.$slots, "prefix", {}, () => [
          u("i", {
            class: P(["zmz-select__input__prefix__icon", a.prefixIcon])
          }, null, 2)
        ])
      ])) : A("", !0),
      u("input", {
        type: "text",
        class: "zmz-select__input__inner",
        readonly: "readonly",
        value: n.selectLabel,
        name: a.name,
        placeholder: n.placeholderText,
        autocomplete: a.autocomplete
      }, null, 8, Xm),
      a.suffix ? (v(), _("div", Km, [
        n.isClear ? (v(), _("span", {
          key: 0,
          class: "zmz-select__input__clear",
          onClick: t[0] || (t[0] = _e((...s) => n.clearInput && n.clearInput(...s), ["stop"]))
        }, [
          N(e.$slots, "clear", {}, () => [
            t[4] || (t[4] = u("i", { class: "zmz-select__icon zmz-icon--error" }, null, -1))
          ])
        ])) : (v(), _("span", Qm, [
          N(e.$slots, "suffix", {}, () => [
            t[5] || (t[5] = u("i", { class: "zmz-select__icon zmz-icon--arrow-bottom" }, null, -1))
          ])
        ]))
      ])) : A("", !0)
    ], 2),
    K(l, {
      arrow: a.arrow,
      offset: a.offset,
      "popper-options": a.popperOptions,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzSelect,
      visible: n.currentVisible,
      placement: a.placement,
      teleport: a.teleport,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      "transition-name": "zmz-fold-top",
      onOnMouseenter: n.handleMouseenter,
      onOnMouseleave: n.handleMouseleave,
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter,
      style: j([n.zmzSelectTeleportStyle])
    }, {
      default: le(() => [
        re(u("div", Jm, [
          N(e.$slots, "default"),
          n.isEmpty ? A("", !0) : (v(), _("div", ef, [
            N(e.$slots, "empty", {}, () => [
              ne(Z(a.emptyText), 1)
            ])
          ]))
        ], 512), [
          [Be, n.currentVisible]
        ])
      ]),
      _: 3
    }, 8, ["arrow", "offset", "popper-options", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "class-name", "onOnMouseenter", "onOnMouseleave", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter", "style"])
  ], 34)), [
    [i, n.bodyCloseMenus]
  ]);
}
const Ft = /* @__PURE__ */ H(Um, [["render", tf]]);
Ft.install = function(e) {
  e.component(Ft.name, Ft);
};
const nf = {
  name: "ZmzSelectOption",
  props: {
    /**
     * 值
     */
    value: [String, Number],
    /**
     * 文本
     */
    label: [String, Number],
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = be("zmzSelect", {}), { parent: a } = Ce(), n = Ce(), o = z(() => Pe(a, "ZmzSelect"));
    de(() => {
      r(), l();
    }), Ne(() => {
      i(), l();
    });
    const r = () => {
      t.zmzSelectList.value.push({
        uid: n.uid,
        instance: n
      });
    }, l = () => {
      t.updateDom();
    }, i = () => {
      if (t.zmzSelectList.value && t.zmzSelectList.value.length) {
        const m = t.zmzSelectList.value.findIndex((g) => g.uid === n.uid);
        t.zmzSelectList.value.splice(m, 1);
      }
    }, s = () => {
      o.value.proxy.selectLabel = e.label;
    }, d = z(() => o.value.proxy.model == e.value ? (s(), !0) : !1), c = z(() => {
      let m = [];
      return d.value && m.push("zmz-select__item--selected"), e.disabled && m.push("zmz-select__item--disabled"), m;
    });
    return {
      setCurrentValue: (m, g) => {
        e.disabled || o.value && (o.value.proxy.model = m, o.value.proxy.selectLabel = g, t.currentVisible.value = !1);
      },
      zmzOptionClass: c
    };
  }
};
function af(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-select__item", [n.zmzOptionClass]]),
    onClick: t[0] || (t[0] = (l) => n.setCurrentValue(a.value, a.label))
  }, Z(a.label), 3);
}
const Rt = /* @__PURE__ */ H(nf, [["render", af]]);
Rt.install = function(e) {
  e.component(Rt.name, Rt);
};
const lf = {
  name: "ZmzSelectOptionGroup",
  props: {
    /**
     * 文本
     */
    label: {
      type: String,
      default: ""
    }
  }
}, of = { class: "zmz-select__group" }, rf = {
  key: 0,
  class: "zmz-select__group__lable"
}, sf = { class: "zmz-select__group__wrap" };
function uf(e, t, a, n, o, r) {
  return v(), _("div", of, [
    a.label ? (v(), _("div", rf, Z(a.label), 1)) : A("", !0),
    u("div", sf, [
      N(e.$slots, "default")
    ])
  ]);
}
const ga = /* @__PURE__ */ H(lf, [["render", uf]]);
ga.install = function(e) {
  e.component(ga.name, ga);
};
function df(e, t) {
  let a;
  t.response ? a = `${t.response.error || t.response}` : t.responseText ? a = `${t.responseText}` : a = `fail to post ${e} ${t.status}`;
  const n = new Error(a);
  return n.status = t.status, n.method = "post", n.url = e, n;
}
function cf(e) {
  const t = new FormData();
  return e.data && Object.keys(e.data).forEach((a) => {
    t.append(a, e.data[a]);
  }), t.append(e.filename, e.file, e.file.name), t;
}
function mf(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function ff(e) {
  if (typeof XMLHttpRequest > "u")
    return;
  const t = new XMLHttpRequest(), a = e.action;
  t.upload && (t.upload.onprogress = function(r) {
    r.total > 0 && (r.percent = r.loaded / r.total * 100), e.onProgress(r);
  }), t.onerror = function(r) {
    e.onError(r);
  }, t.onload = function() {
    if (t.status < 200 || t.status >= 300)
      return e.onError(df(a, t));
    e.onSuccess(mf(t));
  }, t.open("post", a, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const n = e.headers || {};
  for (let o in n)
    Object.prototype.hasOwnProperty.call(n, o) && n[o] !== null && t.setRequestHeader(o, n[o]);
  return t.send(cf(e)), t;
}
const vf = {
  name: "ZmzUploadList",
  props: {
    /**
     * 数据源
     */
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 显示文件列表
     */
    showFileList: {
      type: Boolean,
      default: !1
    },
    /**
     * 类型
     */
    fileListType: {
      type: String,
      default: "text",
      validator(e) {
        return ["text", "picture", "picture-card"].includes(e);
      }
    }
  },
  data() {
    return {
      currentHover: null
    };
  },
  methods: {
    // 预览文件
    handlePreview(e, t) {
      this.$emit("on-preview", e, t);
    },
    // 移除文件
    handleRemove(e, t) {
      this.$emit("on-remove", e, t);
    },
    // 滑入
    handleMouseover(e) {
      this.currentHover = e;
    },
    // 滑出
    handleMouseout() {
      this.currentHover = null;
    }
  }
}, zf = { class: "zmz-upload__list" }, _f = ["onMouseover", "onMouseout"], hf = ["on:Click"], gf = { class: "zmz-upload__list__item__file__name" }, yf = { class: "zmz-upload__list__item__operation" }, pf = ["onClick"], bf = {
  key: 1,
  class: "zmz-upload__list__item__operation__icon"
}, kf = {
  key: 0,
  class: "zmz-icon--loading"
}, Cf = {
  key: 1,
  class: "zmz-icon--success"
}, wf = ["onClick"], Sf = { class: "zmz-upload__list__item__file__wrap" }, xf = ["src"], Tf = { class: "zmz-upload__list__item__file__name" }, Of = { class: "zmz-upload__list__item__operation" }, Lf = ["onClick"], Df = {
  key: 1,
  class: "zmz-upload__list__item__operation__icon"
}, Mf = {
  key: 0,
  class: "zmz-icon--loading"
}, Ef = {
  key: 1,
  class: "zmz-icon--success"
}, Bf = { class: "zmz-upload__list__item__file" }, If = { class: "zmz-upload__list__item__file__wrap" }, Af = ["src"], Pf = { class: "zmz-upload__list__item__operation" }, Nf = ["onClick"], Vf = ["onClick"];
function Ff(e, t, a, n, o, r) {
  return v(), _("div", zf, [
    K(Nr, { name: "zmz-fade-top" }, {
      default: le(() => [
        (v(!0), _(G, null, fe(a.fileList, (l, i) => (v(), _("div", {
          class: P(["zmz-upload__list__item", {
            "zmz-upload__list__item--hover": o.currentHover === i,
            "zmz-upload__list__item--success": l.status === "success",
            "zmz-upload__list__item--ready": l.status === "ready"
          }]),
          key: i,
          onMouseover: (s) => r.handleMouseover(i),
          onMouseout: (s) => r.handleMouseout(i)
        }, [
          a.fileListType === "text" ? (v(), _(G, { key: 0 }, [
            u("div", {
              class: "zmz-upload__list__item__file",
              "on:Click": (s) => r.handlePreview(l, i)
            }, [
              t[0] || (t[0] = u("div", { class: "zmz-upload__list__item__file__wrap" }, [
                u("i", { class: "zmz-icon--file-fill" })
              ], -1)),
              u("div", gf, Z(l.name), 1)
            ], 40, hf),
            u("div", yf, [
              o.currentHover === i ? (v(), _("div", {
                key: 0,
                class: "zmz-upload__list__item__operation__icon",
                onClick: (s) => r.handleRemove(l, i)
              }, [...t[1] || (t[1] = [
                u("i", { class: "zmz-icon--del" }, null, -1)
              ])], 8, pf)) : (v(), _("div", bf, [
                l.status === "ready" ? (v(), _("i", kf)) : (v(), _("i", Cf))
              ]))
            ])
          ], 64)) : A("", !0),
          a.fileListType === "picture" ? (v(), _(G, { key: 1 }, [
            u("div", {
              class: "zmz-upload__list__item__file",
              onClick: (s) => r.handlePreview(l, i)
            }, [
              u("div", Sf, [
                u("img", {
                  src: l.url,
                  class: "zmz-upload__list__item__file__wrap__image"
                }, null, 8, xf)
              ]),
              u("div", Tf, Z(l.name), 1)
            ], 8, wf),
            u("div", Of, [
              o.currentHover === i ? (v(), _("div", {
                key: 0,
                class: "zmz-upload__list__item__operation__icon",
                onClick: (s) => r.handleRemove(l, i)
              }, [...t[2] || (t[2] = [
                u("i", { class: "zmz-icon--del" }, null, -1)
              ])], 8, Lf)) : (v(), _("div", Df, [
                l.status === "ready" ? (v(), _("i", Mf)) : (v(), _("i", Ef))
              ]))
            ])
          ], 64)) : A("", !0),
          a.fileListType === "picture-card" ? (v(), _(G, { key: 2 }, [
            u("div", Bf, [
              u("div", If, [
                u("img", {
                  src: l.url,
                  class: "zmz-upload__list__item__file__wrap__image"
                }, null, 8, Af)
              ])
            ]),
            u("div", Pf, [
              u("div", {
                class: "zmz-upload__list__item__operation__icon",
                onClick: (s) => r.handlePreview(
                  l,
                  i
                )
              }, [...t[3] || (t[3] = [
                u("i", { class: "zmz-icon--enlarge" }, null, -1)
              ])], 8, Nf),
              u("div", {
                class: "zmz-upload__list__item__operation__icon",
                onClick: (s) => r.handleRemove(
                  l,
                  i
                )
              }, [...t[4] || (t[4] = [
                u("i", { class: "zmz-icon--del" }, null, -1)
              ])], 8, Vf)
            ])
          ], 64)) : A("", !0)
        ], 42, _f))), 128))
      ]),
      _: 1
    })
  ]);
}
const Rf = /* @__PURE__ */ H(vf, [["render", Ff]]), Zf = {
  name: "ZmzUpload",
  components: {
    zmzUploadList: Rf
  },
  props: {
    /**
     * 请求方法
     */
    method: {
      type: String,
      default: "POST"
    },
    /**
     * 请求地址
     */
    action: {
      type: String,
      default: ""
    },
    /**
     * 上传文件类型
     */
    accept: String,
    /**
     * 请求头
     */
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 请求参数
     */
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    insideRequest: {
      type: Boolean,
      default: !0
    },
    /**
     * name 属性
     */
    name: {
      type: String,
      default: "file"
    },
    /**
     * 是否多选
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 类型
     */
    fileListType: {
      type: String,
      default: "text",
      validator(e) {
        return ["text", "picture", "picture-card"].includes(e);
      }
    },
    /**
     * 显示文件列表
     */
    showFileList: {
      type: Boolean,
      default: !1
    },
    /**
     * 上传限制
     */
    limit: Number,
    /**
     * 是否显示提示
     */
    tip: {
      type: Boolean,
      default: !0
    },
    /**
     * 提示文本
     */
    tipText: {
      type: String,
      default: "只能上传jpg/png文件,且不超过500kb"
    },
    /**
     * 上传之前钩子
     */
    beforeUpload: Function,
    /**
     * 删除之前钩子
     */
    beforeRemove: Function,
    /**
     * 上传请求
     */
    httpRequest: {
      type: Function,
      default: ff
    },
    /**
     * 支持发送 cookie 凭证信息
     */
    withCredentials: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否自动上传
     */
    autoUpload: {
      type: Boolean,
      default: !0
    },
    /**
     * 上传列表
     */
    modelValue: {
      type: Array,
      required: !0,
      default() {
        return [];
      }
    }
  },
  emits: ["update:modelValue", "on-file", "on-success", "on-error", "on-change", "on-remove", "on-preview", "on-exceed", "on-progress"],
  setup(e, { emit: t }) {
    const { findParent: a } = Ut(), { parent: n } = Ce(), o = b(0), r = be("zmzForm", {}), l = b(null), i = b([]), s = b({}), d = () => {
      x.value || (l.value.value = null, l.value.click());
    }, c = z({
      get() {
        return e.modelValue;
      },
      set(M) {
        t("update:modelValue", M), m.value && m.value.proxy.onValidate();
      }
    });
    ue(() => e.modelValue, (M) => {
      M && M.length && (i.value = M.map((R) => (R.uid = R.uid || Date.now() + o.value++, R.status = R.status || "success", R)));
    }, { immediate: !0, deep: !0 });
    const f = z(() => {
      let M = [];
      return e.fileListType && M.push(`zmz-upload--${e.fileListType}`), x.value && M.push("zmz-upload--disabled"), D.value && M.push("zmz-upload--readonly"), M;
    }), m = z(() => a(n, "ZmzFormItem")), g = (M) => {
      if (c.value.length > e.limit)
        t("on-exceed", M, c.value);
      else {
        if (Object.prototype.toString.call(M) === "[object Array]")
          M.forEach((R) => {
            let B = window.URL.createObjectURL(R);
            c.value.push({
              name: R.name,
              url: B,
              uid: R.uid,
              status: "ready",
              file: R
            });
          });
        else {
          let R = window.URL.createObjectURL(M);
          c.value.push({
            name: M.name,
            url: R,
            uid: M.uid,
            status: "ready",
            file: M
          });
        }
        if (e.insideRequest) {
          if (!M || !window.FileReader) return;
          M.uid = Date.now() + o.value++, e.autoUpload && C(M);
        } else
          t("on-file", M);
      }
    }, h = (M) => {
      var R = M.target.files || M.dataTransfer.files;
      R.length != 0 && (typeof e.beforeUpload == "function" && Object.prototype.toString.call(e.beforeUpload()) === "[object Promise]" ? e.beforeUpload(R).then((B) => {
        B && y(R);
      }) : y(R));
    }, y = (M) => {
      let R = [];
      for (let B = 0; B < M.length; B++)
        R.push(M[B]), e.insideRequest && g(M[B]);
      e.insideRequest || g(R);
    }, C = (M) => {
      let { uid: R } = M;
      const B = {
        headers: e.headers,
        withCredentials: e.withCredentials,
        file: M,
        data: e.data,
        filename: e.name,
        action: e.action,
        method: e.method,
        onProgress: (E) => {
          w(E, M);
        },
        onSuccess: (E) => {
          p(E, M), delete s.value[R];
        },
        onError: (E) => {
          L(E, M), delete s.value[R];
        }
      }, F = e.httpRequest(B);
      s.value[R] = F, F && F.then && F.then(B.onSuccess, B.onError);
    }, k = (M, R) => {
      let B = () => {
        let F = i.value;
        F.splice(R, 1), c.value = F, t("on-remove", R, M, F);
      };
      typeof e.beforeRemove == "function" && Object.prototype.toString.call(e.beforeRemove()) === "[object Promise]" ? e.beforeRemove(R, M, i.value).then((F) => {
        F && B();
      }) : B();
    }, S = (M, R) => {
      t("on-preview", R, M, i.value);
    }, L = (M, R) => {
      let B = i.value.find((E) => E.file && E.file.uid === R.uid);
      const F = i.value;
      B.status = "fail", F.splice(F.indexOf(B), 1), c.value = F, t("on-change", B, F), t("on-error", M, R, F);
    }, p = (M, R) => {
      R && (R.status = "success", R.response = M, i.value.forEach((B) => {
        B.status = "success";
      }), t("on-change", R, i.value), t("on-success", M, R, i.value));
    }, w = (M, R) => {
      t("on-progress", M, R, i.value);
    }, O = () => {
      e.autoUpload || c.value.filter((M) => M.status === "ready").forEach((M) => {
        C(M.file);
      });
    }, x = z(() => r && r.disabled ? r.disabled : e.disabled), D = z(() => r && r.readonly ? r.readonly : e.readonly);
    return {
      handleClick: d,
      handleChange: h,
      handleRemove: k,
      handlePreview: S,
      zmzUploadInner: l,
      model: c,
      zmzUploadClass: f,
      uploadFiles: i,
      submit: O
    };
  }
}, Wf = {
  key: 0,
  class: "zmz-upload__wrap__icon zmz-icon--add"
}, $f = {
  key: 0,
  class: "zmz-upload__tip"
}, jf = { class: "zmz-upload__input" }, Hf = ["accept", "multiple", "name"];
function Yf(e, t, a, n, o, r) {
  const l = oe("zmz-upload-list"), i = oe("zmz-button");
  return v(), _("div", {
    class: P(["zmz-upload", [n.zmzUploadClass]])
  }, [
    a.fileListType === "picture-card" ? (v(), pe(l, {
      key: 0,
      "file-list": n.uploadFiles,
      "file-list-type": a.fileListType,
      onOnPreview: n.handlePreview,
      onOnRemove: n.handleRemove
    }, {
      default: le(() => [
        N(e.$slots, "list")
      ]),
      _: 3
    }, 8, ["file-list", "file-list-type", "onOnPreview", "onOnRemove"])) : A("", !0),
    u("div", {
      class: "zmz-upload__wrap",
      onClick: t[0] || (t[0] = (...s) => n.handleClick && n.handleClick(...s))
    }, [
      N(e.$slots, "default", {}, () => [
        a.fileListType === "picture-card" ? (v(), _("i", Wf)) : A("", !0),
        a.fileListType === "text" || a.fileListType === "picture" ? (v(), _(G, { key: 1 }, [
          K(i, {
            class: "zmz-upload__wrap__btn",
            icon: "zmz-icon--cloud-upload"
          }, {
            default: le(() => [...t[2] || (t[2] = [
              ne("点击上传", -1)
            ])]),
            _: 1
          }),
          a.tip ? (v(), _("div", $f, Z(a.tipText), 1)) : A("", !0)
        ], 64)) : A("", !0)
      ])
    ]),
    a.showFileList && a.fileListType === "text" || a.fileListType === "picture" ? (v(), pe(l, {
      key: 1,
      "file-list": n.uploadFiles,
      "file-list-type": a.fileListType,
      onOnPreview: n.handlePreview,
      onOnRemove: n.handleRemove
    }, {
      default: le(() => [
        N(e.$slots, "list")
      ]),
      _: 3
    }, 8, ["file-list", "file-list-type", "onOnPreview", "onOnRemove"])) : A("", !0),
    u("div", jf, [
      u("input", {
        type: "file",
        accept: a.accept,
        multiple: a.multiple,
        name: a.name,
        onChange: t[1] || (t[1] = (...s) => n.handleChange && n.handleChange(...s)),
        ref: "zmzUploadInner",
        class: "zmz-upload__input__inner"
      }, null, 40, Hf)
    ])
  ], 2);
}
const ya = /* @__PURE__ */ H(Zf, [["render", Yf]]);
ya.install = function(e) {
  e.component(ya.name, ya);
};
const qf = {
  name: "ZmzCascader",
  components: {
    ZmzTeleportdom: Gt
  },
  props: {
    /**
     * 配置
     */
    options: {
      type: Array,
      defautl() {
        return [];
      }
    },
    /**
     * 原生name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 自动完成
     */
    autocomplete: {
      type: String,
      default: "off"
    },
    // 占位符
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 清空按钮
     */
    clearbtn: {
      type: Boolean,
      default: !1
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: Array,
      defautl() {
        return [];
      }
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom-start"
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    theme: {
      type: String,
      default: "white",
      validator(e) {
        return ["black", "white"].includes(e);
      }
    },
    /**
     * 后缀图标
     */
    suffixIcon: {
      type: String,
      default: ""
    },
    /**
     * 后缀是否显示
     */
    suffix: {
      type: Boolean,
      default: !0
    },
    /**
     * 前缀是否显示
     */
    prefix: {
      type: Boolean,
      default: !1
    },
    /**
     * 后缀图标
     */
    prefixIcon: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "on-clear", "on-change", "on-blur", "on-expand-change", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b([e.options]), o = b(!1), r = b(""), l = b(!1), i = b(null), s = b(null), d = be("zmzForm", {}), c = be("zmzFormItem", {}), f = z(() => d && d.size ? d.size.value : ""), m = z(() => {
      let W = ["zmz-teleportdom--cascader"];
      return e.theme && W.push(`zmz-teleportdom--cascader-${e.theme}`), W;
    }), g = z({
      get() {
        return e.modelValue;
      },
      set(W) {
        I.value || V.value || (t("update:modelValue", W), h.value && h.value.proxy.onValidate());
      }
    }), h = z(() => Pe(a, "ZmzFormItem")), y = () => {
      n.value = [e.options];
      let W = [];
      var $ = function(X) {
        X.forEach((ee) => {
          ee.selected = !1, g.value.forEach((J) => {
            ee.value == J && (ee.selected = !0, ee.children && n.value.push(ee.children), W.push(ee.label));
          }), ee.children && $(ee.children);
        });
      };
      return $(e.options), r.value = k(W), n.value;
    }, C = z(() => y()), k = (W) => W.join("/"), S = (W, $, X) => {
      if (!X.disabled)
        if (W.stopPropagation(), t("on-change", X.value), C.value.length !== 1 + $ && C.value.splice($ + 1, C.value.length - 1), C.value[$].map((ee) => {
          ee.selected = !1;
        }), X.selected = !0, X.children)
          C.value.push(X.children);
        else {
          let ee = [];
          C.value.forEach((J) => {
            J.forEach((q) => {
              q.selected && ee.push(q.value);
            });
          }), t("on-expand-change", ee), g.value = ee, o.value = !1;
        }
    }, L = () => {
      I.value || V.value || (o.value = !o.value, o.value && y());
    }, p = z(() => r.value && e.clearbtn && l.value && !o.value), w = () => {
      r.value = "", n.value.forEach((W) => {
        W.forEach(($) => {
          $.selected = !1;
        });
      }), n.value = [e.options], t("update:modelValue", []), t("on-clear");
    }, O = z(() => {
      let W = [];
      return (f.value || e.size) && W.push(`zmz-cascader--size-${f.value || e.size}`), I.value && W.push("zmz-cascader--disabled"), o.value && W.push("zmz-cascader--open"), V.value && W.push("zmz-cascader--readonly"), l.value && !I.value && W.push("zmz-cascader--focus"), e.suffix && W.push("zmz-cascader--suffix"), e.prefix && W.push("zmz-cascader--prefix"), W;
    }), x = (W) => {
      i.value && !i.value.contains(W.target) && o.value == !0 && (t("on-blur", !0), o.value = !1, h.value && h.value.proxy.onValidate());
    }, D = () => {
      t("on-close-before");
    }, M = () => {
      t("on-close");
    }, R = () => {
      t("on-close-after");
    }, B = () => {
      t("on-open-before");
    }, F = () => {
      t("on-open");
    }, E = () => {
      t("on-open-after");
    }, T = z(() => e.placeholder ? e.placeholder : c.placeholderPrefixTextSelect ? c.placeholderPrefixTextSelect.value : ""), I = z(() => d && d.disabled ? d.disabled : e.disabled), V = z(() => d && d.readonly ? d.readonly : e.readonly);
    return {
      cascaderData: n,
      currentVisible: o,
      handleSelectClick: L,
      inputModel: r,
      isClear: p,
      hovering: l,
      handleItemClick: S,
      handleClear: w,
      zmzCascaderClass: O,
      handleAfterLeave: R,
      handleLeave: M,
      handleBeforeLeave: D,
      handleAfterEnter: E,
      handleEnter: F,
      handleBeforeEnter: B,
      zmzCascader: i,
      zmzCascaderContainer: s,
      cascaderPanelData: C,
      bodyCloseMenus: x,
      zmzTeleportdomClass: m,
      placeholderText: T,
      globalFromDisabled: I
    };
  }
}, Uf = {
  key: 0,
  class: "zmz-cascader__prefix"
}, Gf = ["disabled", "name", "placeholder", "autocomplete"], Xf = { class: "zmz-cascader__suffix" }, Kf = {
  key: 1,
  class: "zmz-cascader__toggle"
}, Qf = {
  class: "zmz-cascader__dropdown",
  ref: "zmzCascaderContainer"
}, Jf = ["onClick"], ev = { class: "zmz-cascader__item__text" }, tv = {
  key: 0,
  class: "zmz-cascader__item__icon zmz-icon--arrow-right"
};
function nv(e, t, a, n, o, r) {
  const l = oe("zmz-teleportdom"), i = qt("zmzclickoutside");
  return re((v(), _("div", {
    class: P(["zmz-cascader", [n.zmzCascaderClass]]),
    ref: "zmzCascader",
    onMouseenter: t[2] || (t[2] = (s) => n.hovering = !0),
    onMouseleave: t[3] || (t[3] = (s) => n.hovering = !1),
    onClick: t[4] || (t[4] = (...s) => n.handleSelectClick && n.handleSelectClick(...s))
  }, [
    a.prefix ? (v(), _("div", Uf, [
      N(e.$slots, "prefix", {}, () => [
        u("i", {
          class: P(["zmz-select__icon", a.prefixIcon])
        }, null, 2)
      ])
    ])) : A("", !0),
    re(u("input", {
      type: "text",
      class: "zmz-cascader__input",
      readonly: "readonly",
      disabled: n.globalFromDisabled,
      "onUpdate:modelValue": t[0] || (t[0] = (s) => n.inputModel = s),
      name: a.name,
      placeholder: n.placeholderText,
      autocomplete: a.autocomplete
    }, null, 8, Gf), [
      [Oe, n.inputModel]
    ]),
    u("div", Xf, [
      n.isClear ? (v(), _("span", {
        key: 0,
        class: "zmz-cascader__clear",
        onClick: t[1] || (t[1] = _e((...s) => n.handleClear && n.handleClear(...s), ["stop"]))
      }, [...t[5] || (t[5] = [
        u("i", { class: "zmz-cascader__icon zmz-icon--error" }, null, -1)
      ])])) : (v(), _("span", Kf, [...t[6] || (t[6] = [
        u("i", { class: "zmz-cascader__icon zmz-icon--arrow-bottom" }, null, -1)
      ])]))
    ]),
    K(l, {
      arrow: a.arrow,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzCascader,
      visible: n.currentVisible,
      placement: a.placement,
      teleport: a.teleport,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      offset: a.offset,
      "popper-options": a.popperOptions,
      "transition-name": "zmz-fold-top",
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }, {
      default: le(() => [
        u("div", Qf, [
          (v(!0), _(G, null, fe(n.cascaderPanelData, (s, d) => (v(), _("div", {
            class: "zmz-cascader__panel",
            key: d
          }, [
            (v(!0), _(G, null, fe(s, (c, f) => (v(), _("div", {
              class: P(["zmz-cascader__item", { "zmz-cascader__item--active": c.selected, "zmz-cascader__item--disabled": c.disabled }]),
              onClick: (m) => n.handleItemClick(m, d, c),
              key: f
            }, [
              u("div", ev, [
                N(e.$slots, "default", { item: c }, () => [
                  ne(Z(c.label), 1)
                ])
              ]),
              c.children ? (v(), _("i", tv)) : A("", !0)
            ], 10, Jf))), 128))
          ]))), 128))
        ], 512)
      ]),
      _: 3
    }, 8, ["arrow", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "class-name", "offset", "popper-options", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])
  ], 34)), [
    [i, n.bodyCloseMenus]
  ]);
}
const pa = /* @__PURE__ */ H(qf, [["render", nv]]);
pa.install = function(e) {
  e.component(pa.name, pa);
};
const av = {
  name: "ZmzCascaderItem"
}, lv = { class: "zmz-option__item" };
function ov(e, t, a, n, o, r) {
  return v(), _("div", lv);
}
const ba = /* @__PURE__ */ H(av, [["render", ov]]);
ba.install = function(e) {
  e.component(ba.name, ba);
};
const rv = {
  name: "ZmzCascaderPanel"
}, iv = { class: "zmz-cascader__panel__warp" };
function sv(e, t, a, n, o, r) {
  return v(), _("div", iv);
}
const ka = /* @__PURE__ */ H(rv, [["render", sv]]);
ka.install = function(e) {
  e.component(ka.name, ka);
};
const uv = {
  name: "ZmzForm",
  componentName: "ZmzForm",
  props: {
    /**
     * 数据源
     */
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 验证源
     */
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 行内模式
     */
    inline: {
      type: Boolean,
      default: !1
    },
    /**
     * 表单尺寸
     */
    size: {
      type: String,
      default: "",
      validator(e) {
        return ["large", "medium", "small", "mini", "default", ""].includes(e);
      }
    },
    /**
     * 隐藏必选
     */
    hideRequired: {
      type: Boolean,
      default: !1
    },
    /**
     * 禁用所有
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * label对齐方式
     */
    labelPosition: {
      type: String,
      default: "right",
      validator(e) {
        return ["left", "right", "top"].includes(e);
      }
    },
    /**
     * 	label宽度
     */
    labelWidth: [String, Number],
    /**
     * 占位符前缀
     */
    placeholderPrefixInput: String,
    /**
     * 占位符前缀
     */
    placeholderPrefixSelect: String
  },
  setup(e, { emit: t }) {
    const a = b([]), n = b(e.labelPosition), o = (g) => new Promise((h) => {
      let y = !0, C = 0, k = a.value.filter((S) => S.instance.props.prop);
      k.length === 0 && (h(y), typeof g == "function" && g(y)), k.forEach((S) => {
        S.instance.proxy.validate("", (L) => {
          L && (y = !1), ++C === k.length && (h(y), typeof g == "function" && g(y));
        });
      });
    }), r = (g, h) => {
      const y = a.value.filter((C) => C.instance.proxy.prop === g)[0];
      if (!y)
        throw new Error("[ZMZUI3 warn]: must call validateField with valid prop string!");
      y.instance.proxy.validate("", h);
    }, l = () => {
      a.value.forEach((g) => g.instance.props.prop && g.instance.proxy.resetField());
    }, i = (g = []) => {
      (g.length ? typeof g == "string" ? a.value.filter((y) => g === y.instance.proxy.prop) : a.value.filter((y) => g.indexOf(y.instance.proxy.prop) > -1) : a.value).forEach((y) => {
        y.instance.proxy.clearValidate();
      });
    }, s = z(() => {
      let g = [];
      return e.inline && g.push("zmz-form--inline"), e.size && g.push(`zmz-form--size-${e.size}`), e.labelPosition && g.push(`zmz-form--label-${e.labelPosition}`), g;
    }), d = z(() => e.size), c = z(() => e.labelPosition), f = z(() => e.labelWidth), m = (g, h, y) => {
      t("on-validate", g, h, y);
    };
    return ue(() => e.labelPosition, (g) => {
      n.value = g;
    }), Fe("zmzForm", {
      model: e.model,
      rules: e.rules,
      size: d,
      zmzFormList: a,
      labelWidth: f,
      labelPosition: c,
      placeholderPrefixInput: e.placeholderPrefixInput,
      placeholderPrefixSelect: e.placeholderPrefixSelect,
      onValidate: m,
      disabled: e.disabled,
      hideRequired: e.hideRequired
    }), {
      validate: o,
      resetFields: l,
      zmzFormClass: s,
      validateField: r,
      clearValidate: i
    };
  }
};
function dv(e, t, a, n, o, r) {
  return v(), _("form", {
    class: P(["zmz-form", [n.zmzFormClass]])
  }, [
    N(e.$slots, "default")
  ], 2);
}
const Ca = /* @__PURE__ */ H(uv, [["render", dv]]);
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, St.apply(this, arguments);
}
function cv(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, fn(e, t);
}
function $l(e) {
  return $l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
    return a.__proto__ || Object.getPrototypeOf(a);
  }, $l(e);
}
function fn(e, t) {
  return fn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, fn(e, t);
}
function mv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wa(e, t, a) {
  return mv() ? wa = Reflect.construct.bind() : wa = function(o, r, l) {
    var i = [null];
    i.push.apply(i, r);
    var s = Function.bind.apply(o, i), d = new s();
    return l && fn(d, l.prototype), d;
  }, wa.apply(null, arguments);
}
function fv(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function jl(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return jl = function(n) {
    if (n === null || !fv(n)) return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return wa(n, arguments, $l(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), fn(o, n);
  }, jl(e);
}
var vv = /%[sdj%]/g, vr = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (vr = function(t, a) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && a.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, a);
});
function Hl(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(a) {
    var n = a.field;
    t[n] = t[n] || [], t[n].push(a);
  }), t;
}
function Ke(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var o = 0, r = a.length;
  if (typeof e == "function")
    return e.apply(null, a);
  if (typeof e == "string") {
    var l = e.replace(vv, function(i) {
      if (i === "%%")
        return "%";
      if (o >= r)
        return i;
      switch (i) {
        case "%s":
          return String(a[o++]);
        case "%d":
          return Number(a[o++]);
        case "%j":
          try {
            return JSON.stringify(a[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return i;
      }
    });
    return l;
  }
  return e;
}
function zv(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Re(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || zv(t) && typeof e == "string" && !e);
}
function _v(e, t, a) {
  var n = [], o = 0, r = e.length;
  function l(i) {
    n.push.apply(n, i || []), o++, o === r && a(n);
  }
  e.forEach(function(i) {
    t(i, l);
  });
}
function Mo(e, t, a) {
  var n = 0, o = e.length;
  function r(l) {
    if (l && l.length) {
      a(l);
      return;
    }
    var i = n;
    n = n + 1, i < o ? t(e[i], r) : a([]);
  }
  r([]);
}
function hv(e) {
  var t = [];
  return Object.keys(e).forEach(function(a) {
    t.push.apply(t, e[a] || []);
  }), t;
}
var Eo = /* @__PURE__ */ (function(e) {
  cv(t, e);
  function t(a, n) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = a, o.fields = n, o;
  }
  return t;
})(/* @__PURE__ */ jl(Error));
function gv(e, t, a, n, o) {
  if (t.first) {
    var r = new Promise(function(m, g) {
      var h = function(k) {
        return n(k), k.length ? g(new Eo(k, Hl(k))) : m(o);
      }, y = hv(e);
      Mo(y, a, h);
    });
    return r.catch(function(m) {
      return m;
    }), r;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], i = Object.keys(e), s = i.length, d = 0, c = [], f = new Promise(function(m, g) {
    var h = function(C) {
      if (c.push.apply(c, C), d++, d === s)
        return n(c), c.length ? g(new Eo(c, Hl(c))) : m(o);
    };
    i.length || (n(c), m(o)), i.forEach(function(y) {
      var C = e[y];
      l.indexOf(y) !== -1 ? Mo(C, a, h) : _v(C, a, h);
    });
  });
  return f.catch(function(m) {
    return m;
  }), f;
}
function yv(e) {
  return !!(e && e.message !== void 0);
}
function pv(e, t) {
  for (var a = e, n = 0; n < t.length; n++) {
    if (a == null)
      return a;
    a = a[t[n]];
  }
  return a;
}
function Bo(e, t) {
  return function(a) {
    var n;
    return e.fullFields ? n = pv(t, e.fullFields) : n = t[a.field || e.fullField], yv(a) ? (a.field = a.field || e.fullField, a.fieldValue = n, a) : {
      message: typeof a == "function" ? a() : a,
      fieldValue: n,
      field: a.field || e.fullField
    };
  };
}
function Io(e, t) {
  if (t) {
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var n = t[a];
        typeof n == "object" && typeof e[a] == "object" ? e[a] = St({}, e[a], n) : e[a] = n;
      }
  }
  return e;
}
var zr = function(t, a, n, o, r, l) {
  t.required && (!n.hasOwnProperty(t.field) || Re(a, l || t.type)) && o.push(Ke(r.messages.required, t.fullField));
}, bv = function(t, a, n, o, r) {
  (/^\s+$/.test(a) || a === "") && o.push(Ke(r.messages.whitespace, t.fullField));
}, Sn, kv = (function() {
  if (Sn)
    return Sn;
  var e = "[a-fA-F\\d:]", t = function(p) {
    return p && p.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, a = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + a + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + a + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + a + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + a + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + a + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + a + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + a + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), r = new RegExp("(?:^" + a + "$)|(?:^" + o + "$)"), l = new RegExp("^" + a + "$"), i = new RegExp("^" + o + "$"), s = function(p) {
    return p && p.exact ? r : new RegExp("(?:" + t(p) + a + t(p) + ")|(?:" + t(p) + o + t(p) + ")", "g");
  };
  s.v4 = function(L) {
    return L && L.exact ? l : new RegExp("" + t(L) + a + t(L), "g");
  }, s.v6 = function(L) {
    return L && L.exact ? i : new RegExp("" + t(L) + o + t(L), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = s.v4().source, m = s.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", C = "(?::\\d{2,5})?", k = '(?:[/?#][^\\s"]*)?', S = "(?:" + d + "|www\\.)" + c + "(?:localhost|" + f + "|" + m + "|" + g + h + y + ")" + C + k;
  return Sn = new RegExp("(?:^" + S + "$)", "i"), Sn;
}), Ao = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Kt = {
  integer: function(t) {
    return Kt.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Kt.number(t) && !Kt.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Kt.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ao.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(kv());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ao.hex);
  }
}, Cv = function(t, a, n, o, r) {
  if (t.required && a === void 0) {
    zr(t, a, n, o, r);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], i = t.type;
  l.indexOf(i) > -1 ? Kt[i](a) || o.push(Ke(r.messages.types[i], t.fullField, t.type)) : i && typeof a !== t.type && o.push(Ke(r.messages.types[i], t.fullField, t.type));
}, wv = function(t, a, n, o, r) {
  var l = typeof t.len == "number", i = typeof t.min == "number", s = typeof t.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = a, f = null, m = typeof a == "number", g = typeof a == "string", h = Array.isArray(a);
  if (m ? f = "number" : g ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (c = a.length), g && (c = a.replace(d, "_").length), l ? c !== t.len && o.push(Ke(r.messages[f].len, t.fullField, t.len)) : i && !s && c < t.min ? o.push(Ke(r.messages[f].min, t.fullField, t.min)) : s && !i && c > t.max ? o.push(Ke(r.messages[f].max, t.fullField, t.max)) : i && s && (c < t.min || c > t.max) && o.push(Ke(r.messages[f].range, t.fullField, t.min, t.max));
}, Pt = "enum", Sv = function(t, a, n, o, r) {
  t[Pt] = Array.isArray(t[Pt]) ? t[Pt] : [], t[Pt].indexOf(a) === -1 && o.push(Ke(r.messages[Pt], t.fullField, t[Pt].join(", ")));
}, xv = function(t, a, n, o, r) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(a) || o.push(Ke(r.messages.pattern.mismatch, t.fullField, a, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(a) || o.push(Ke(r.messages.pattern.mismatch, t.fullField, a, t.pattern));
    }
  }
}, xe = {
  required: zr,
  whitespace: bv,
  type: Cv,
  range: wv,
  enum: Sv,
  pattern: xv
}, Tv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a, "string") && !t.required)
      return n();
    xe.required(t, a, o, l, r, "string"), Re(a, "string") || (xe.type(t, a, o, l, r), xe.range(t, a, o, l, r), xe.pattern(t, a, o, l, r), t.whitespace === !0 && xe.whitespace(t, a, o, l, r));
  }
  n(l);
}, Ov = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && xe.type(t, a, o, l, r);
  }
  n(l);
}, Lv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (a === "" && (a = void 0), Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && (xe.type(t, a, o, l, r), xe.range(t, a, o, l, r));
  }
  n(l);
}, Dv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && xe.type(t, a, o, l, r);
  }
  n(l);
}, Mv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), Re(a) || xe.type(t, a, o, l, r);
  }
  n(l);
}, Ev = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && (xe.type(t, a, o, l, r), xe.range(t, a, o, l, r));
  }
  n(l);
}, Bv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && (xe.type(t, a, o, l, r), xe.range(t, a, o, l, r));
  }
  n(l);
}, Iv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (a == null && !t.required)
      return n();
    xe.required(t, a, o, l, r, "array"), a != null && (xe.type(t, a, o, l, r), xe.range(t, a, o, l, r));
  }
  n(l);
}, Av = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && xe.type(t, a, o, l, r);
  }
  n(l);
}, Pv = "enum", Nv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r), a !== void 0 && xe[Pv](t, a, o, l, r);
  }
  n(l);
}, Vv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a, "string") && !t.required)
      return n();
    xe.required(t, a, o, l, r), Re(a, "string") || xe.pattern(t, a, o, l, r);
  }
  n(l);
}, Fv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a, "date") && !t.required)
      return n();
    if (xe.required(t, a, o, l, r), !Re(a, "date")) {
      var s;
      a instanceof Date ? s = a : s = new Date(a), xe.type(t, s, o, l, r), s && xe.range(t, s.getTime(), o, l, r);
    }
  }
  n(l);
}, Rv = function(t, a, n, o, r) {
  var l = [], i = Array.isArray(a) ? "array" : typeof a;
  xe.required(t, a, o, l, r, i), n(l);
}, Pl = function(t, a, n, o, r) {
  var l = t.type, i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Re(a, l) && !t.required)
      return n();
    xe.required(t, a, o, i, r, l), Re(a, l) || xe.type(t, a, o, i, r);
  }
  n(i);
}, Zv = function(t, a, n, o, r) {
  var l = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Re(a) && !t.required)
      return n();
    xe.required(t, a, o, l, r);
  }
  n(l);
}, an = {
  string: Tv,
  method: Ov,
  number: Lv,
  boolean: Dv,
  regexp: Mv,
  integer: Ev,
  float: Bv,
  array: Iv,
  object: Av,
  enum: Nv,
  pattern: Vv,
  date: Fv,
  url: Pl,
  hex: Pl,
  email: Pl,
  required: Rv,
  any: Zv
};
function Yl() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ql = Yl(), gn = /* @__PURE__ */ (function() {
  function e(a) {
    this.rules = null, this._messages = ql, this.define(a);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var o = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(r) {
      var l = n[r];
      o.rules[r] = Array.isArray(l) ? l : [l];
    });
  }, t.messages = function(n) {
    return n && (this._messages = Io(Yl(), n)), this._messages;
  }, t.validate = function(n, o, r) {
    var l = this;
    o === void 0 && (o = {}), r === void 0 && (r = function() {
    });
    var i = n, s = o, d = r;
    if (typeof s == "function" && (d = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return d && d(null, i), Promise.resolve(i);
    function c(y) {
      var C = [], k = {};
      function S(p) {
        if (Array.isArray(p)) {
          var w;
          C = (w = C).concat.apply(w, p);
        } else
          C.push(p);
      }
      for (var L = 0; L < y.length; L++)
        S(y[L]);
      C.length ? (k = Hl(C), d(C, k)) : d(null, i);
    }
    if (s.messages) {
      var f = this.messages();
      f === ql && (f = Yl()), Io(f, s.messages), s.messages = f;
    } else
      s.messages = this.messages();
    var m = {}, g = s.keys || Object.keys(this.rules);
    g.forEach(function(y) {
      var C = l.rules[y], k = i[y];
      C.forEach(function(S) {
        var L = S;
        typeof L.transform == "function" && (i === n && (i = St({}, i)), k = i[y] = L.transform(k)), typeof L == "function" ? L = {
          validator: L
        } : L = St({}, L), L.validator = l.getValidationMethod(L), L.validator && (L.field = y, L.fullField = L.fullField || y, L.type = l.getType(L), m[y] = m[y] || [], m[y].push({
          rule: L,
          value: k,
          source: i,
          field: y
        }));
      });
    });
    var h = {};
    return gv(m, s, function(y, C) {
      var k = y.rule, S = (k.type === "object" || k.type === "array") && (typeof k.fields == "object" || typeof k.defaultField == "object");
      S = S && (k.required || !k.required && y.value), k.field = y.field;
      function L(O, x) {
        return St({}, x, {
          fullField: k.fullField + "." + O,
          fullFields: k.fullFields ? [].concat(k.fullFields, [O]) : [O]
        });
      }
      function p(O) {
        O === void 0 && (O = []);
        var x = Array.isArray(O) ? O : [O];
        !s.suppressWarning && x.length && e.warning("async-validator:", x), x.length && k.message !== void 0 && (x = [].concat(k.message));
        var D = x.map(Bo(k, i));
        if (s.first && D.length)
          return h[k.field] = 1, C(D);
        if (!S)
          C(D);
        else {
          if (k.required && !y.value)
            return k.message !== void 0 ? D = [].concat(k.message).map(Bo(k, i)) : s.error && (D = [s.error(k, Ke(s.messages.required, k.field))]), C(D);
          var M = {};
          k.defaultField && Object.keys(y.value).map(function(F) {
            M[F] = k.defaultField;
          }), M = St({}, M, y.rule.fields);
          var R = {};
          Object.keys(M).forEach(function(F) {
            var E = M[F], T = Array.isArray(E) ? E : [E];
            R[F] = T.map(L.bind(null, F));
          });
          var B = new e(R);
          B.messages(s.messages), y.rule.options && (y.rule.options.messages = s.messages, y.rule.options.error = s.error), B.validate(y.value, y.rule.options || s, function(F) {
            var E = [];
            D && D.length && E.push.apply(E, D), F && F.length && E.push.apply(E, F), C(E.length ? E : null);
          });
        }
      }
      var w;
      if (k.asyncValidator)
        w = k.asyncValidator(k, y.value, p, y.source, s);
      else if (k.validator) {
        try {
          w = k.validator(k, y.value, p, y.source, s);
        } catch (O) {
          console.error?.(O), s.suppressValidatorError || setTimeout(function() {
            throw O;
          }, 0), p(O.message);
        }
        w === !0 ? p() : w === !1 ? p(typeof k.message == "function" ? k.message(k.fullField || k.field) : k.message || (k.fullField || k.field) + " fails") : w instanceof Array ? p(w) : w instanceof Error && p(w.message);
      }
      w && w.then && w.then(function() {
        return p();
      }, function(O) {
        return p(O);
      });
    }, function(y) {
      c(y);
    }, i);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !an.hasOwnProperty(n.type))
      throw new Error(Ke("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var o = Object.keys(n), r = o.indexOf("message");
    return r !== -1 && o.splice(r, 1), o.length === 1 && o[0] === "required" ? an.required : an[this.getType(n)] || void 0;
  }, e;
})();
gn.register = function(t, a) {
  if (typeof a != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  an[t] = a;
};
gn.warning = vr;
gn.messages = ql;
gn.validators = an;
const Wv = {
  name: "ZmzFormItem",
  componentName: "ZmzFormItem",
  props: {
    /**
     * 标签文本
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * 验证字段
     */
    prop: {
      type: String,
      default: ""
    },
    /**
     * 是否必填项
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * 标签宽度
     */
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    /**
     * 标签样式
     */
    labelStyle: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 标签类名
     */
    labelClass: {
      type: Array,
      default: () => []
    },
    /**
     * 内容样式
     */
    contentStyle: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 内容类名
     */
    contentClass: {
      type: Array,
      default: () => []
    },
    /**
     * 验证规则
     */
    rules: [Array, Object]
  },
  setup(e) {
    const t = Ce(), a = be("zmzForm", ""), n = b(!1), o = b(""), r = b(""), l = b(!1);
    de(() => {
      if (i(), e.prop) {
        let B = new Proxy(t.proxy, {});
        B.initialValue = c.value;
      }
      h();
    }), ue(() => e.rules, () => {
      h();
    }), ue(() => e.required, (B, F) => {
      n.value = B, F && !B && f();
    }), Ne(() => {
      s();
    });
    const i = () => {
      a.zmzFormList.value.push({
        uid: t.uid,
        instance: t
      });
    }, s = () => {
      if (a.zmzFormList.value && a.zmzFormList.value.length) {
        const B = a.zmzFormList.value.findIndex((F) => F.uid === t.uid);
        a.zmzFormList.value.splice(B, 1);
      }
    }, d = (B, F) => {
      let E = B;
      F = F.replace(/\[(\w+)\]/g, ".$1"), F = F.replace(/^\./, "");
      let T = F.split("."), I = 0;
      for (let V = T.length; I < V - 1; ++I) {
        let W = T[I];
        if (W in E)
          E = E[W];
        else
          throw new Error("[ZMZUI3 warn]: please transfer a valid prop path to form item!");
      }
      return {
        o: E,
        k: T[I],
        v: E[T[I]]
      };
    }, c = z(() => {
      const B = a.model;
      if (!B || !e.prop)
        return;
      let F = e.prop;
      return F.indexOf(":") !== -1 && (F = F.replace(/:/, ".")), d(B, F).v;
    }), f = () => {
      o.value = "success", r.value = "";
      let B = a.model, F = c.value, E = e.prop;
      E.indexOf(":") !== -1 && (E = E.replace(/:/, "."));
      let T = d(B, E);
      Array.isArray(F) && t.proxy.initialValue !== null ? (l.value = !0, T.o[T.k] = [].concat(t.proxy.initialValue)) : (l.value = !0, T.o[T.k] = t.proxy.initialValue);
    }, m = (B, F = function() {
    }) => {
      let E = g(B);
      if (!E || E.length === 0)
        if (e.required)
          E = [{ required: !0 }];
        else
          return F(), !0;
      o.value = "validating";
      let T = {};
      T[e.prop] = E;
      const I = new gn(T);
      let V = {};
      V[e.prop] = c.value, I.validate(V, { firstFields: !0 }, (W) => {
        o.value = W ? "error" : "success", r.value = W ? W[0].message : "", F(r.value), a && a.onValidate(e.prop, !W, r.value || null);
      }), l.value = !1;
    }, g = (B) => y().filter((E) => !E.trigger || E.trigger.indexOf(B) !== -1), h = () => {
      let B = y();
      B.length && e.required || (B.length ? B.every((F) => {
        n.value = F.required;
      }) : e.required && (n.value = this.required));
    }, y = () => {
      let B = a.rules;
      const F = e.rules;
      return B = B ? B[e.prop] : [], [].concat(F || B || []);
    }, C = z(() => {
      let B = [];
      return (e.required || h.value && h.value.required) && B.push("zmz-form__item--required"), o.value == "error" && B.push("zmz-form__item--error"), B;
    }), k = () => {
      m("blur");
    }, S = () => {
      if (l.value) {
        l.value = !1;
        return;
      }
      m("change");
    }, L = (B) => {
      e.prop && (B === "blur" && k(), S());
    }, p = () => {
      o.value = "", r.value = "";
    }, w = z(() => []), O = z(() => {
      let B = {};
      return a.labelPosition.value == "top" || (e.labelWidth ? B.width = Me(e.labelWidth) : a.labelWidth.value && (B.width = Me(a.labelWidth.value))), B;
    }), x = z(() => {
      let B = {};
      return a.labelPosition.value == "top" || (e.labelWidth ? B["margin-left"] = Me(e.labelWidth) : a.labelWidth.value && (B["margin-left"] = Me(a.labelWidth.value))), B;
    }), D = z(() => a.placeholderPrefixInput ? a.placeholderPrefixInput + e.label : ""), M = z(() => a.placeholderPrefixSelect ? a.placeholderPrefixSelect + e.label : ""), R = z(() => a.hideRequired);
    return Fe("zmzFormItem", {
      formLabel: e.label,
      placeholderPrefixTextInput: D,
      placeholderPrefixTextSelect: M
    }), {
      validate: m,
      onValidate: L,
      setRules: h,
      resetField: f,
      zmzFormItemLableClass: w,
      zmzFormItemLableStyle: O,
      zmzFormItemContentStyle: x,
      clearValidate: p,
      validateMessage: r,
      validateState: o,
      zmzFormItemClass: C,
      isRequired: n,
      hideRequired: R
    };
  }
}, $v = ["data-prop"], jv = {
  key: 0,
  class: "zmz-form__item__label__required"
}, Hv = {
  key: 0,
  class: "zmz-form__item__error"
};
function Yv(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-form__item", [n.zmzFormItemClass]]),
    "data-prop": a.prop
  }, [
    a.label ? (v(), _("div", {
      key: 0,
      class: P(["zmz-form__item__label", [n.zmzFormItemLableClass, a.labelClass]]),
      style: j([n.zmzFormItemLableStyle, a.labelStyle])
    }, [
      n.isRequired && !n.hideRequired ? (v(), _("span", jv, "*")) : A("", !0),
      N(e.$slots, "label", {}, () => [
        ne(Z(a.label), 1)
      ])
    ], 6)) : A("", !0),
    u("div", {
      class: P(["zmz-form__item__content", [a.contentClass]]),
      style: j([n.zmzFormItemContentStyle, a.contentStyle])
    }, [
      N(e.$slots, "default"),
      K(Ve, { name: "zmz-fold-top" }, {
        default: le(() => [
          n.validateState === "error" ? (v(), _("div", Hv, Z(n.validateMessage), 1)) : A("", !0)
        ]),
        _: 1
      })
    ], 6)
  ], 10, $v);
}
const Sa = /* @__PURE__ */ H(Wv, [["render", Yv]]);
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
const qv = (e, t) => {
  if (!(!e || e && typeof e != "string")) {
    var a = e.split(":"), n = function(o, r) {
      r || (r = 2), o = String(o);
      for (var l = 0, i = ""; l < r - o.length; l++)
        i += "0";
      return i + o;
    };
    return t.replace(
      /([hHmsaAZqQwW])\1?|"[^"]*"|'[^']*'/g,
      function(o) {
        switch (o) {
          case "h":
            return a[0] % 12 || 12;
          case "hh":
            return n(a[0] % 12 || 12);
          case "H":
            return a[0];
          case "HH":
            return n(a[0]);
          case "m":
            return a[1];
          case "mm":
            return n(a[1]);
          case "s":
            return a[2];
          case "ss":
            return n(a[2]);
          default:
            return o.substr(1, o.length - 2);
        }
      }
    );
  }
}, Uv = (e) => {
  for (var t = e.start.split(":"), a = parseInt(t[0] * 60) + parseInt(t[1]), n = e.end.split(":"), o = parseInt(n[0] * 60) + parseInt(n[1]), r = e.step.split(":"), l = parseInt(r[0] * 60) + parseInt(r[1]), i = [], s = o - a, d = a; d <= s; d++) {
    var c = "";
    d % l == 0 && (c = Je(parseInt(d / 60)) + ":" + Je(d % 60), c === "24:00" ? i.push("23:59") : i.push(c));
  }
  return i;
}, Je = (e) => e < 10 ? "0" + parseInt(e) : e, Gv = (e) => {
  let t = new Date(e), a = t.getFullYear(), n = t.getMonth(), o = t.getDate(), r = a, l = parseInt(n);
  l == 0 && (r = parseInt(r) - 1, l = 12);
  let i = o, s = new Date(r, l, 0);
  return s = s.getDate(), i > s && (i = s), l < 10 && (l = "0" + l), i ? r + "/" + l + "/" + i : r + "/" + l;
}, Xv = (e) => {
  let t = new Date(e), a = t.getFullYear() - 1, n = t.getMonth(), o = t.getDate(), r = a, l = parseInt(n) - 2;
  l == 0 && (r = parseInt(r) - 1, l = 12);
  let i = o, s = new Date(r, l, 0);
  return s = s.getDate(), i > s && (i = s), l < 10 && (l = "0" + l), i ? r + "/" + l + "/" + i : r + "/" + l;
}, wt = (e) => new Date(e).getFullYear(), Ul = (e) => new Date(e).getMonth() + 1, Kv = (e) => !(e == null || isNaN(new Date(e).getTime()) || !/^(\d{4})(-|\/)([0-1][0-9])(-|\/)([0-5][0-9])$/.test(e)), Qv = (e) => !(e == null || isNaN(new Date(e).getTime()) || !/^(\d{4})(-|\/)([0-1][0-9])(-|\/)([0-5][0-9])\s{1}([01]?[0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/.test(
  e
)), Jv = (e) => !(e == null || !/^([01]?[0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/.test(e)), ez = (e, t) => {
  if (!t) return e;
}, tz = (e, t = {}) => {
  var a = 6e4, n = a * 60, o = n * 24, r = o * 7, l = o * 30, i = o * 365, s = (/* @__PURE__ */ new Date()).getTime(), d = new Date(e).getTime(), c = s - d, f = c / a, m = c / n, g = c / o, h = c / r, y = c / l, C = c / i;
  let k = "";
  if (C == 1)
    k = " " + parseInt(C) + (t && t.Y ? t.Y : "年前");
  else if (y >= 1 && y <= 12)
    k = " " + parseInt(y) + (t && t.M ? t.M : "月前");
  else if (h >= 1 && h <= 4)
    k = " " + parseInt(h) + (t && t.W ? t.W : "周前");
  else if (g >= 1 && g <= 7)
    k = " " + parseInt(g) + (t && t.D ? t.D : "天前");
  else if (m >= 1 && m <= 24)
    k = " " + parseInt(m) + (t && t.H ? t.H : "小时前");
  else if (f >= 1 && f <= 60)
    k = " " + parseInt(f) + (t && t.S ? t.S : "分钟前");
  else if (c >= 0 && c <= a)
    k = t && t.Y ? t.Y : "刚刚";
  else {
    var S = /* @__PURE__ */ new Date();
    S.setTime(d);
    var L = S.getFullYear(), p = S.getMonth() + 1 < 10 ? "0" + (S.getMonth() + 1) : S.getMonth() + 1, w = S.getDate() < 10 ? "0" + S.getDate() : S.getDate(), O = S.getHours() < 10 ? "0" + S.getHours() : S.getHours(), x = S.getMinutes() < 10 ? "0" + S.getMinutes() : S.getMinutes(), D = S.getSeconds() < 10 ? "0" + S.getSeconds() : S.getSeconds();
    k = L + "-" + p + "-" + w + " " + O + ":" + x + ":" + D;
  }
  return k;
}, uo = (e) => {
  var t = String(e).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
  if (t == null) return !1;
  var a = new Date(t[1], t[3] - 1, t[4], t[5], t[6], t[7]);
  return a.getFullYear() == t[1] && a.getMonth() + 1 == t[3] && a.getDate() == t[4] && a.getHours() == t[5] && a.getMinutes() == t[6] && a.getSeconds() == t[7];
}, co = (e) => {
  let t = String(e).match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/g);
  return !(t == null || t[1] > 24 || t[3] > 60 || t[4] > 60);
}, _r = (e) => {
  let t = String(e).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  if (t == null) return !1;
  var a = new Date(t[1], t[3] - 1, t[4]);
  return a.getFullYear() == t[1] && a.getMonth() + 1 == t[3] && a.getDate() == t[4];
}, Ll = function(e, t) {
  return new Date(Math.min(e.getTime() + t));
}, mo = function(e, t) {
  return new Date(Math.min(e.getTime() - t));
}, ut = (e) => e < 10 ? "0" + parseInt(e) : parseInt(e), hr = (e) => !(e == null || !/^([01]?[0-9]|2[0-3])(:)([0-5][0-9])$/.test(e)), je = (e, t) => {
  if (e)
    return Date.prototype.format = function(a) {
      var n = this, o = function(r, l) {
        l || (l = 2), r = String(r);
        for (var i = 0, s = ""; i < l - r.length; i++)
          s += "0";
        return s + r;
      };
      return a.replace(
        /d{1,4}|M{1,4}|S{1,3}|yy(?:yy)?|([hHmsaAZqQwW])\1?|[llLoszz]|"[^"]*"|'[^']*'/g,
        function(r) {
          switch (r) {
            case "d":
              return n.getDate();
            case "dd":
              return o(n.getDate());
            case "ddd":
              return ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"][n.getDay()];
            case "dddd":
              return [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ][n.getDay()];
            case "M":
              return n.getMonth() + 1;
            case "MM":
              return o(n.getMonth() + 1);
            case "MMM":
              return [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ][n.getMonth()];
            case "MMMM":
              return [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ][n.getMonth()];
            case "yy":
              return String(n.getFullYear()).substr(2);
            case "yyyy":
              return n.getFullYear();
            case "h":
              return n.getHours() % 12 || 12;
            case "hh":
              return o(n.getHours() % 12 || 12);
            case "H":
              return n.getHours();
            case "HH":
              return o(n.getHours());
            case "m":
              return n.getMinutes();
            case "mm":
              return o(n.getMinutes());
            case "s":
              return n.getSeconds();
            case "ss":
              return o(n.getSeconds());
            case "SSS":
              return o(n.getMilliseconds(), 3);
            case "SS":
              var l = n.getMilliseconds();
              return l > 99 && (l = Math.round(l / 10)), o(l);
            case "S":
              return n.getMilliseconds();
            case "aa":
              return n.getHours() < 12 ? "am" : "pm";
            case "AA":
              return n.getHours() < 12 ? "AM" : "PM";
            case "ZZ":
              return n.toUTCString().match(/[A-Z]+$/);
            case "q":
              return Math.floor((n.getMonth() + 3) / 3);
            case "qq":
              return o(Math.floor((n.getMonth() + 3) / 3));
            case "Q":
              return ["一", "二", "三", "四"][Math.floor((n.getMonth() + 3) / 3) - 1];
            case "w":
              return ["7", "1", "2", "3", "4", "5", "6"][n.getDay()];
            case "ww":
              return ["07", "01", "02", "03", "04", "05", "06"][n.getDay()];
            case "W":
              return ["日", "一", "二", "三", "四", "五", "六"][n.getDay()];
            default:
              return r.substr(1, r.length - 2);
          }
        }
      );
    }, t ? new Date(e).format(t) : new Date(e);
}, bt = (e, t, a, n) => new Date(e.getFullYear(), e.getMonth(), e.getDate(), t, a, n), gr = (e) => {
  const t = (e || "").split(":");
  if (t.length == 3) {
    const a = parseInt(t[0], 10), n = parseInt(t[1], 10), o = parseInt(t[2], 10);
    return {
      hour: a,
      minute: n,
      second: o
    };
  }
  return {
    hour: "",
    minute: "",
    second: ""
  };
}, Gl = (e) => {
  let t = new Date(e), a = t.getFullYear(), n = t.getMonth(), o = t.getDate(), r = a, l = parseInt(n) + 2;
  l == 13 && (r = parseInt(r) + 1, l = 1);
  let i = o, s = new Date(r, l, 0);
  return s = s.getDate(), i > s && (i = s), l < 10 && (l = "0" + l), i < 10 && (i = "0" + i), i ? r + "/" + l + "/" + i : r + "/" + l;
}, yr = (e) => {
  let t = new Date(e), a = t.getFullYear(), n = t.getMonth(), o = t.getDate(), r = a, l = parseInt(n) + 1;
  l == 13 && (r = parseInt(r) + 1, l = 1);
  let i = o, s = new Date(r, l, 0);
  return s = s.getDate(), i > s && (i = s), l < 10 && (l = "0" + l), i < 10 && (i = "0" + i), i ? r + "/" + l + "/" + i : r + "/" + l;
}, pr = (e) => {
  let t = new Date(e), a = t.getFullYear(), n = t.getMonth(), o = t.getDate(), r = a, l = parseInt(n) + 1;
  l == 13 && (r = parseInt(r) + 1, l = 1);
  let i = o, s = new Date(r, l, 0);
  return s = s.getDate(), i > s && (i = s), l < 10 && (l = "0" + l), i ? r + "/" + l + "/" + i : r + "/" + l;
}, br = (e) => {
  let t = new Date(e), a = t.getFullYear() + 1, n = t.getMonth(), o = t.getDate(), r = a, l = parseInt(n) + 2;
  l == 13 && (r = parseInt(r) + 1, l = 1);
  let i = o, s = new Date(r, l, 0);
  return s = s.getDate(), i > s && (i = s), l < 10 && (l = "0" + l), i ? r + "/" + l + "/" + i : r + "/" + l;
}, xa = (e) => {
  let t = {
    date: "yyyy-MM-dd",
    month: "yyyy-MM",
    datetime: "yyyy-MM-dd HH:mm:ss",
    time: "HH:mm:ss",
    week: "yyyywWW",
    timerange: "HH:mm:ss",
    daterange: "yyyy-MM-dd",
    monthrange: "yyyy-MM",
    datetimerange: "yyyy-MM-dd HH:mm:ss",
    year: "yyyy"
  };
  return e && t[e] ? t[e] : t.date;
}, Ta = (e, t) => new Date(e, t, 0), vn = (e, t) => {
  for (var a = new Array(), n = 0, o = new Date(e).getFullYear(), r = new Date(e).getMonth() + 1, l = new Date(e).getDate(), i = new Date(t).getFullYear(), s = new Date(t).getMonth() + 1, d = new Date(t).getDate(), c = o + "/" + Je(r) + "/" + Je(l), f = i + "/" + Je(s) + "/" + Je(d); new Date(c) <= new Date(f); ) {
    a[n] = c;
    var m = new Date(c).getTime(), g = m + 1440 * 60 * 1e3, h = new Date(g).getFullYear() + "/", y = Je(new Date(g).getMonth() + 1) + "/", C = Je(new Date(g).getDate());
    c = h + y + C, n++;
  }
  return a;
}, zn = (e, t) => {
  for (var a = new Array(), n = new Date(e).getFullYear(), o = new Date(e).getMonth(), r = new Date(t).getFullYear(), l = new Date(t).getMonth(), i = parseInt(n) * 12 + parseInt(o), s = parseInt(r) * 12 + parseInt(l), d = Math.abs(i - s) + 1, c = 0; c < d; c++) {
    let f = new Date(n, o + c, 1), m = f.getFullYear(), g = f.getMonth() + 1;
    a.push(m + "/" + Je(g));
  }
  return a;
}, Xl = (e, t) => {
  if (!e) return;
  let a = new Date(e), n = a.getFullYear(), o = a.getMonth() + 1, r = a.getDate();
  return t == "string" ? n + "/" + Je(o) + "/" + Je(r) : {
    year: n,
    month: o,
    day: r
  };
}, nz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateZeroFill: ut,
  determineDateFormat: _r,
  determineTimeFormat: co,
  determineTimeMinutes: hr,
  determineTimeOrDate: uo,
  earliestTime: mo,
  formatDate: je,
  formatHMS: qv,
  formatTimeDate: ez,
  getCurrentMonth: yr,
  getCurrentYear: pr,
  getDiffDate: vn,
  getDiffMonth: zn,
  getHMS: gr,
  getLastDate: Ta,
  getMonth: Ul,
  getNextMonth: Gl,
  getNextYear: br,
  getPrevMonth: Gv,
  getPrevYear: Xv,
  getTimeList: Uv,
  getYMD: Xl,
  getYear: wt,
  isDate: Kv,
  isDateTime: Qv,
  isTime: Jv,
  latestTime: Ll,
  publicTimeFormat: xa,
  relativeFormattime: tz,
  updateDate: bt,
  zero: Je
}, Symbol.toStringTag, { value: "Module" })), az = {
  name: "ZmzDatepickerMonth",
  props: {
    modelValue: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    current: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    defaultValue: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    motion: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "date"
    },
    moveInOut: {
      type: Boolean,
      default: !0
    },
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    },
    leftBtn: {
      type: Boolean,
      default: !0
    },
    rightBtn: {
      type: Boolean,
      default: !0
    },
    prevYearDisabled: {
      type: Boolean,
      default: !1
    },
    nextYearDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "on-change", "on-prev-year", "on-next-year", "on-click", "on-mouseenter"],
  setup(e, { emit: t }) {
    const a = b(""), n = b(""), o = b(!1), r = z({
      get() {
        return e.modelValue;
      },
      set(y) {
        t("update:modelValue", y);
      }
    }), l = z({
      get() {
        return e.current;
      },
      set(y) {
        t("update:current", y);
      }
    }), i = z({
      get() {
        return e.motion;
      },
      set(y) {
        t("update:motion", y);
      }
    });
    ue(
      () => e.moveInOut,
      (y) => {
        o.value = y;
      }
    ), ue(
      () => e.startTime,
      (y) => {
        a.value = y;
      }
    ), ue(
      () => e.endTime,
      (y) => {
        n.value = y;
      }
    );
    const s = (y) => {
      t("on-click", y);
    }, d = z(() => r.value ? new Date(r.value).getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), c = z(() => r.value ? new Date(r.value).getMonth() + 1 : (/* @__PURE__ */ new Date()).getMonth() + 1);
    return {
      monthListData: z(() => {
        let y = [], C = [];
        for (let k = 1; k <= 12; k++) {
          let S = d.value + "/" + ut(k), L = !1, p = !1, w = !1, O = !1, x = !1;
          S == je(l.value, "yyyy/MM") && (L = !0), S == je(e.defaultValue, "yyyy/MM") && (p = !0), i.value[0] == S && (w = !0), i.value[i.value.length - 1] == S && (x = !0), i.value.forEach((D) => {
            D == S && (O = !0);
          }), y.push({
            month: ut(k),
            date: S,
            year: d.value,
            day: "01",
            disable: !1,
            current: L,
            active: p,
            start: w,
            motion: O,
            end: x
          });
        }
        for (let k = 0; k < y.length; k += 4)
          C.push(y.slice(k, k + 4));
        return C;
      }),
      handleMonthClick: s,
      year: d,
      handlePrevYearClick: () => {
        e.prevYearDisabled || t("on-prev-year", d.value, c.value);
      },
      handleNextYearClick: () => {
        e.nextYearDisabled || t("on-next-year", d.value, c.value);
      },
      handleDayMouseenter: (y) => {
        o.value && (a.value <= y.date ? t("on-mouseenter", zn(a.value, y.date)) : a.value >= y.date && t("on-mouseenter", zn(y.date, a.value)));
      }
    };
  }
}, lz = { class: "zmz-datepicker__months" }, oz = { class: "zmz-datepicker__title" }, rz = {
  key: 0,
  class: "zmz-datepicker__title__prev"
}, iz = { class: "zmz-datepicker__title__text__label" }, sz = {
  key: 1,
  class: "zmz-datepicker__title__next"
}, uz = { class: "zmz-datepicker__months__month" }, dz = ["onClick", "onMouseenter"], cz = { class: "zmz-datepicker__months__month__ul__li__text__label" };
function mz(e, t, a, n, o, r) {
  return v(), _("div", lz, [
    u("div", oz, [
      a.leftBtn ? (v(), _("div", rz, [
        u("div", {
          class: P(["zmz-datepicker__title__prev__year", { "zmz-datepicker__title__prev__disabled": a.prevYearDisabled }]),
          onClick: t[0] || (t[0] = (...l) => n.handlePrevYearClick && n.handlePrevYearClick(...l))
        }, [...t[3] || (t[3] = [
          u("i", { class: "zmz-icon--doublearrow-left" }, null, -1)
        ])], 2)
      ])) : A("", !0),
      u("div", {
        class: "zmz-datepicker__title__text",
        onClick: t[1] || (t[1] = (...l) => e.getSwitchYear && e.getSwitchYear(...l))
      }, [
        u("span", iz, Z(n.year) + " 年", 1)
      ]),
      a.rightBtn ? (v(), _("div", sz, [
        u("div", {
          class: P(["zmz-datepicker__title__next__year", { "zmz-datepicker__title__next__disabled": a.nextYearDisabled }]),
          onClick: t[2] || (t[2] = (...l) => n.handleNextYearClick && n.handleNextYearClick(...l))
        }, [...t[4] || (t[4] = [
          u("i", { class: "zmz-icon--doublearrow-right" }, null, -1)
        ])], 2)
      ])) : A("", !0)
    ]),
    u("div", uz, [
      (v(!0), _(G, null, fe(n.monthListData, (l, i) => (v(), _("div", {
        class: "zmz-datepicker__months__month__ul",
        key: i
      }, [
        (v(!0), _(G, null, fe(l, (s, d) => (v(), _("div", {
          class: P(["zmz-datepicker__months__month__ul__li", { "zmz-datepicker__months__month__ul__li--disabled": s.disable }]),
          key: d,
          onClick: (c) => n.handleMonthClick(s),
          onMouseenter: (c) => n.handleDayMouseenter(s)
        }, [
          u("div", {
            class: P(["zmz-datepicker__months__month__ul__li__text", {
              "zmz-datepicker__months__month__ul__li__text--start": s.start,
              "zmz-datepicker__months__month__ul__li__text--motion": s.motion,
              "zmz-datepicker__months__month__ul__li__text--end": s.end,
              "zmz-datepicker__months__month__ul__li__text--current": s.current,
              "zmz-datepicker__months__month__ul__li__text--active": s.active
            }])
          }, [
            u("span", cz, Z(s.month) + "月", 1)
          ], 2)
        ], 42, dz))), 128))
      ]))), 128))
    ])
  ]);
}
const kr = /* @__PURE__ */ H(az, [["render", mz]]), fz = {
  name: "ZmzDatepickerDay",
  props: {
    modelValue: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    current: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    defaultValue: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    motion: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "date"
    },
    moveInOut: {
      type: Boolean,
      default: !0
    },
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    },
    leftBtn: {
      type: Boolean,
      default: !0
    },
    rightBtn: {
      type: Boolean,
      default: !0
    },
    prevYearDisabled: {
      type: Boolean,
      default: !1
    },
    prevMonthDisabled: {
      type: Boolean,
      default: !1
    },
    nextYearDisabled: {
      type: Boolean,
      default: !1
    },
    nextMonthDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "on-click", "on-change", "on-prev-year", "on-next-year", "on-prev-month", "on-next-month", "on-mouseenter"],
  setup(e, { emit: t }) {
    const a = b(["日", "一", "二", "三", "四", "五", "六"]), n = b(""), o = b(""), r = b(!1), l = z({
      get() {
        return e.modelValue;
      },
      set(p) {
        e.disabled || (t("update:modelValue", p), t("on-change", p));
      }
    }), i = z({
      get() {
        return e.current;
      },
      set(p) {
        e.disabled || t("update:current", p);
      }
    }), s = z({
      get() {
        return e.motion;
      },
      set(p) {
        e.disabled || t("update:current", p);
      }
    });
    ue(() => e.moveInOut, (p) => {
      r.value = p;
    }), ue(() => e.startTime, (p) => {
      n.value = p;
    }), ue(() => e.endTime, (p) => {
      o.value = p;
    });
    const d = z(() => l.value ? new Date(l.value).getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), c = z(() => l.value ? new Date(l.value).getMonth() + 1 : (/* @__PURE__ */ new Date()).getMonth() + 1), f = z(() => l.value ? new Date(l.value).getDate() + 1 : (/* @__PURE__ */ new Date()).getDate()), m = (p) => {
      e.disabled || t("on-click", p);
    }, g = z(() => {
      let p, w, O, x, D = [], M = [], R = [], B = [];
      for (let T = 1; T <= Ta(d.value, c.value).getDate(); T++) {
        let I = d.value + "/" + ut(c.value) + "/" + ut(T), V = !1, W = !1, $ = !1, X = !1, ee = !1;
        I == je(i.value, "yyyy/MM/dd") && (V = !0), I == je(e.defaultValue, "yyyy/MM/dd") && (W = !0), s.value[0] == I && ($ = !0), s.value[s.value.length - 1] == I && (ee = !0), s.value.forEach((J) => {
          J == I && (X = !0);
        }), M.push({
          date: I,
          day: T,
          month: c.value,
          year: d.value,
          disable: !1,
          isMonth: !1,
          current: V,
          active: W,
          state: 1,
          start: $,
          motion: X,
          end: ee
        });
      }
      let F = Ta(d.value, c.value - 1).getDate();
      p = c.value == 1 ? d.value - 1 : d.value, w = c.value == 1 ? 12 : parseInt(c.value) - 1;
      for (let T = Ta(d.value, c.value - 1).getDay(); T >= 0; T--) {
        let I = p + "/" + ut(w) + "/" + (F - T), V = !1;
        I == je(l.value, "yyyy/MM/dd") && (V = !0), R.push({
          date: I,
          day: F - T,
          month: w,
          year: p,
          disable: !1,
          isMonth: !0,
          current: V,
          active: !1,
          state: 1,
          start: !1,
          motion: !1,
          end: !1
        });
      }
      O = c.value == 12 ? d.value + 1 : d.value, x = c.value == 12 ? 1 : parseInt(c.value) + 1;
      for (let T = 1; T <= 42 - M.length - R.length; T++) {
        let I = O + "/" + ut(x) + "/" + ut(T), V = !1;
        I == je(l.value, "yyyy/MM/dd") && (V = !0), B.push({
          date: I,
          day: T,
          month: x,
          year: O,
          disable: !1,
          isMonth: !0,
          current: V,
          active: !1,
          state: 2,
          start: !1,
          motion: !1,
          end: !1
        });
      }
      let E = R.concat(M, B);
      for (let T = 0; T < E.length; T += 7)
        D.push(E.slice(T, T + 7));
      return D;
    });
    return {
      weekListData: a,
      handleDayClick: m,
      dayListData: g,
      year: d,
      month: c,
      handleDayMouseenter: (p) => {
        r.value && (n.value <= p.date ? t("on-mouseenter", vn(n.value, p.date)) : n.value >= p.date && t("on-mouseenter", vn(p.date, n.value)));
      },
      hanldeNextMonthClick: () => {
        e.nextMonthDisabled || t("on-next-month", d.value, c.value, f.value);
      },
      hanldePrevMonthClick: () => {
        e.prevMonthDisabled || t("on-prev-month", d.value, c.value, f.value);
      },
      handleNextYearClick: () => {
        e.nextYearDisabled || t("on-next-year", d.value, c.value, f.value);
      },
      handlePrevYearClick: () => {
        e.prevYearDisabled || t("on-prev-year", d.value, c.value, f.value);
      },
      handleTitleSwitch: () => {
      }
    };
  }
}, vz = { class: "zmz-datepicker__days" }, zz = { class: "zmz-datepicker__title" }, _z = {
  key: 0,
  class: "zmz-datepicker__title__prev"
}, hz = { class: "zmz-datepicker__title__text__label" }, gz = { class: "zmz-datepicker__title__text__label" }, yz = {
  key: 1,
  class: "zmz-datepicker__title__next"
}, pz = { class: "zmz-datepicker__days__week" }, bz = { class: "zmz-datepicker__days__week__li__text" }, kz = { class: "zmz-datepicker__days__day" }, Cz = ["onClick", "onMouseenter"], wz = { class: "zmz-datepicker__days__day__ul__li__text__label" };
function Sz(e, t, a, n, o, r) {
  return v(), _("div", vz, [
    u("div", zz, [
      a.leftBtn ? (v(), _("div", _z, [
        u("div", {
          class: P(["zmz-datepicker__title__prev__year", { "zmz-datepicker__title__prev__disabled": a.prevYearDisabled }]),
          onClick: t[0] || (t[0] = (...l) => n.handlePrevYearClick && n.handlePrevYearClick(...l))
        }, [...t[5] || (t[5] = [
          u("i", { class: "zmz-icon--doublearrow-left" }, null, -1)
        ])], 2),
        u("div", {
          class: P(["zmz-datepicker__title__prev__month", { "zmz-datepicker__title__prev__disabled": a.prevMonthDisabled }]),
          onClick: t[1] || (t[1] = (...l) => n.hanldePrevMonthClick && n.hanldePrevMonthClick(...l))
        }, [...t[6] || (t[6] = [
          u("i", { class: "zmz-icon--arrow-left" }, null, -1)
        ])], 2)
      ])) : A("", !0),
      u("div", {
        class: "zmz-datepicker__title__text",
        onClick: t[2] || (t[2] = (...l) => n.handleTitleSwitch && n.handleTitleSwitch(...l))
      }, [
        u("span", hz, Z(n.year) + " 年", 1),
        u("span", gz, Z(n.month) + " 月", 1)
      ]),
      a.rightBtn ? (v(), _("div", yz, [
        u("div", {
          class: P(["zmz-datepicker__title__next__month", { "zmz-datepicker__title__next__disabled": a.nextMonthDisabled }]),
          onClick: t[3] || (t[3] = (...l) => n.hanldeNextMonthClick && n.hanldeNextMonthClick(...l))
        }, [...t[7] || (t[7] = [
          u("i", { class: "zmz-icon--arrow-right" }, null, -1)
        ])], 2),
        u("div", {
          class: P(["zmz-datepicker__title__next__year", { "zmz-datepicker__title__next__disabled": a.nextYearDisabled }]),
          onClick: t[4] || (t[4] = (...l) => n.handleNextYearClick && n.handleNextYearClick(...l))
        }, [...t[8] || (t[8] = [
          u("i", { class: "zmz-icon--doublearrow-right" }, null, -1)
        ])], 2)
      ])) : A("", !0)
    ]),
    u("div", pz, [
      (v(!0), _(G, null, fe(n.weekListData, (l, i) => (v(), _("div", {
        class: "zmz-datepicker__days__week__li",
        key: i
      }, [
        u("span", bz, Z(l), 1)
      ]))), 128))
    ]),
    u("div", kz, [
      (v(!0), _(G, null, fe(n.dayListData, (l, i) => (v(), _("div", {
        class: "zmz-datepicker__days__day__ul",
        key: i
      }, [
        (v(!0), _(G, null, fe(l, (s, d) => (v(), _("div", {
          class: P(["zmz-datepicker__days__day__ul__li", {
            "zmz-datepicker__days__day__ul__li--disabled": s.disable
          }]),
          key: d,
          onClick: (c) => n.handleDayClick(s),
          onMouseenter: (c) => n.handleDayMouseenter(s)
        }, [
          u("div", {
            class: P(["zmz-datepicker__days__day__ul__li__text", {
              "zmz-datepicker__days__day__ul__li__text--start": s.start,
              "zmz-datepicker__days__day__ul__li__text--motion": s.motion,
              "zmz-datepicker__days__day__ul__li__text--end": s.end,
              "zmz-datepicker__days__day__ul__li__text--current": s.current,
              "zmz-datepicker__days__day__ul__li__text--active": s.active,
              "zmz-datepicker__days__day__ul__li__text--nomonth": s.isMonth
            }])
          }, [
            u("span", wz, Z(s.day), 1)
          ], 2)
        ], 42, Cz))), 128))
      ]))), 128))
    ])
  ]);
}
const Cr = /* @__PURE__ */ H(fz, [["render", Sz]]), xz = {
  name: "ZmzDatepickerRange",
  components: {
    ZmzDatepickerDay: Cr,
    ZmzDatepickerMonth: kr
  },
  props: {
    type: {
      type: String,
      default: "monthrange"
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    start: {
      type: [Date, String, Number],
      default: () => /* @__PURE__ */ new Date()
    },
    end: {
      type: [Date, String, Number],
      default: () => /* @__PURE__ */ new Date()
    },
    linkage: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "update:end", "update:start", "on-click", "on-change"],
  setup(e, { emit: t }) {
    const a = b(""), n = b(""), o = b([]), r = b(!1), l = b(""), i = b(/* @__PURE__ */ new Date()), s = b(""), d = b(""), c = z({
      get() {
        return e.modelValue;
      },
      set(B) {
        e.disabled || (t("update:modelValue", B), t("on-change", B));
      }
    }), f = z({
      get() {
        return e.start;
      },
      set(B) {
        e.disabled || t("update:start", B);
      }
    }), m = z({
      get() {
        return e.end;
      },
      set(B) {
        e.disabled || t("update:end", B);
      }
    });
    ue(
      () => c.value,
      (B) => {
        e.type == "monthrange" ? o.value = zn(B[0], B[1]) : o.value = vn(B[0], B[1]);
      }
    ), de(() => {
      e.type == "monthrange" ? o.value = zn(c.value[0], c.value[1]) : o.value = vn(c.value[0], c.value[1]);
    });
    const g = (B) => {
      o.value = B;
    }, h = (B) => {
      o.value = B;
    }, y = (B) => {
      r.value ? (n.value = B.date, r.value = !1, a.value < n.value ? t("on-click", a.value, n.value, r.value) : t("on-click", n.value, a.value, r.value)) : (o.value = [], o.value.push(B.date), a.value = B.date, n.value = "", r.value = !0, t("on-click", a.value, "", r.value));
    }, C = (B) => {
      r.value ? (n.value = B.date, r.value = !1, a.value < n.value ? t("on-click", a.value, n.value) : t("on-click", n.value, a.value)) : (o.value = [], o.value.push(B.date), a.value = B.date, n.value = "", r.value = !0, t("on-click", a.value, "", r.value));
    }, k = (B, F) => {
      e.linkage ? (f.value = new Date(B, F - 1, 0), m.value = new Date(B, F, 0)) : f.value = new Date(B, F - 1, 0);
    }, S = (B, F) => {
      f.value = new Date(B, F + 1, 0);
    }, L = (B, F) => {
      e.linkage ? e.type == "monthrange" ? (f.value = new Date(B - 1, F, 0), m.value = new Date(B, F, 0)) : (f.value = new Date(B - 1, F, 0), m.value = new Date(B - 1, F + 1, 0)) : f.value = new Date(B - 1, F, 0);
    }, p = (B, F) => {
      f.value = new Date(B + 1, F, 0);
    }, w = (B, F) => {
      m.value = new Date(B, F - 1, 0);
    }, O = (B, F) => {
      e.linkage ? (f.value = new Date(B, F, 0), m.value = new Date(B, F + 1, 0)) : m.value = new Date(B, F + 1, 0);
    }, x = (B, F) => {
      m.value = new Date(B - 1, F, 0);
    }, D = (B, F) => {
      e.linkage ? e.type == "monthrange" ? (f.value = new Date(B, F, 0), m.value = new Date(B + 1, F, 0)) : (f.value = new Date(B + 1, F - 1, 0), m.value = new Date(B + 1, F, 0)) : m.value = new Date(B + 1, F, 0);
    }, M = z(() => {
      if (e.type == "monthrange") {
        if (wt(f.value) == wt(m.value) - 1)
          return !0;
      } else if (wt(f.value) == wt(m.value))
        return !0;
      return !1;
    }), R = z(() => wt(f.value) == wt(m.value) && Ul(f.value) == Ul(m.value) - 1);
    return {
      model: c,
      modelStart: f,
      modelEnd: m,
      startTime: a,
      endTime: n,
      handleStartOnMouseenter: g,
      handleEndOnMouseenter: h,
      handleStartClick: y,
      handleEndClick: C,
      motionList: o,
      moveInOut: r,
      defaultValueStart: i,
      defaultValueEnd: l,
      modelCurrentStart: s,
      modelCurrentEnd: d,
      hanldePrevMonthStart: k,
      hanldePrevYearStart: L,
      hanldeNextMonthStart: S,
      hanldeNextYearStart: p,
      hanldePrevMonthEnd: w,
      hanldePrevYearEnd: x,
      hanldeNextMonthEnd: O,
      hanldeNextYearEnd: D,
      yearDisabled: M,
      monthDisabled: R
    };
  }
}, Tz = { class: "zmz-datepicker__range" }, Oz = { class: "zmz-datepicker__range__wrap zmz-datepicker__range__wrap--left" }, Lz = {
  key: 0,
  class: "zmz-datepicker__range__days"
}, Dz = {
  key: 1,
  class: "zmz-datepicker__range__month"
}, Mz = { class: "zmz-datepicker__range__wrap zmz-datepicker__range__wrap--right" }, Ez = {
  key: 0,
  class: "zmz-datepicker__range__days"
}, Bz = {
  key: 1,
  class: "zmz-datepicker__range__month"
};
function Iz(e, t, a, n, o, r) {
  const l = oe("zmz-datepicker-day"), i = oe("zmz-datepicker-month");
  return v(), _("div", Tz, [
    u("div", Oz, [
      a.type == "daterange" || a.type == "datetimerange" ? (v(), _("div", Lz, [
        K(l, {
          modelValue: n.modelStart,
          "onUpdate:modelValue": t[0] || (t[0] = (s) => n.modelStart = s),
          motion: n.motionList,
          "onUpdate:motion": t[1] || (t[1] = (s) => n.motionList = s),
          current: n.modelCurrentStart,
          "onUpdate:current": t[2] || (t[2] = (s) => n.modelCurrentStart = s),
          type: a.type,
          "move-in-out": n.moveInOut,
          "start-time": n.startTime,
          "end-time": n.endTime,
          "default-value": n.defaultValueStart,
          onOnClick: n.handleStartClick,
          onOnPrevMonth: n.hanldePrevMonthStart,
          onOnPrevYear: n.hanldePrevYearStart,
          onOnNextMonth: n.hanldeNextMonthStart,
          onOnNextYear: n.hanldeNextYearStart,
          onOnMouseenter: n.handleStartOnMouseenter,
          "right-btn": !a.linkage,
          nextYearDisabled: n.yearDisabled,
          nextMonthDisabled: n.monthDisabled
        }, null, 8, ["modelValue", "motion", "current", "type", "move-in-out", "start-time", "end-time", "default-value", "onOnClick", "onOnPrevMonth", "onOnPrevYear", "onOnNextMonth", "onOnNextYear", "onOnMouseenter", "right-btn", "nextYearDisabled", "nextMonthDisabled"])
      ])) : A("", !0),
      a.type == "monthrange" ? (v(), _("div", Dz, [
        K(i, {
          modelValue: n.modelStart,
          "onUpdate:modelValue": t[3] || (t[3] = (s) => n.modelStart = s),
          motion: n.motionList,
          "onUpdate:motion": t[4] || (t[4] = (s) => n.motionList = s),
          current: n.modelCurrentStart,
          "onUpdate:current": t[5] || (t[5] = (s) => n.modelCurrentStart = s),
          type: a.type,
          "move-in-out": n.moveInOut,
          "start-time": n.startTime,
          "end-time": n.endTime,
          "default-value": n.defaultValueStart,
          onOnClick: n.handleStartClick,
          onOnPrevMonth: n.hanldePrevMonthStart,
          onOnPrevYear: n.hanldePrevYearStart,
          onOnNextMonth: n.hanldeNextMonthStart,
          onOnNextYear: n.hanldeNextYearStart,
          onOnMouseenter: n.handleStartOnMouseenter,
          "right-btn": !a.linkage,
          nextYearDisabled: n.yearDisabled,
          nextMonthDisabled: n.monthDisabled
        }, null, 8, ["modelValue", "motion", "current", "type", "move-in-out", "start-time", "end-time", "default-value", "onOnClick", "onOnPrevMonth", "onOnPrevYear", "onOnNextMonth", "onOnNextYear", "onOnMouseenter", "right-btn", "nextYearDisabled", "nextMonthDisabled"])
      ])) : A("", !0)
    ]),
    u("div", Mz, [
      a.type == "daterange" || a.type == "datetimerange" ? (v(), _("div", Ez, [
        K(l, {
          modelValue: n.modelEnd,
          "onUpdate:modelValue": t[6] || (t[6] = (s) => n.modelEnd = s),
          motion: n.motionList,
          "onUpdate:motion": t[7] || (t[7] = (s) => n.motionList = s),
          current: n.modelCurrentEnd,
          "onUpdate:current": t[8] || (t[8] = (s) => n.modelCurrentEnd = s),
          type: a.type,
          "move-in-out": n.moveInOut,
          "start-time": n.startTime,
          "end-time": n.endTime,
          "default-value": n.defaultValueEnd,
          onOnClick: n.handleEndClick,
          onOnPrevMonth: n.hanldePrevMonthEnd,
          onOnPrevYear: n.hanldePrevYearEnd,
          onOnNextMonth: n.hanldeNextMonthEnd,
          onOnNextYear: n.hanldeNextYearEnd,
          onOnMouseenter: n.handleEndOnMouseenter,
          "left-btn": !a.linkage,
          prevYearDisabled: n.yearDisabled,
          prevMonthDisabled: n.monthDisabled
        }, null, 8, ["modelValue", "motion", "current", "type", "move-in-out", "start-time", "end-time", "default-value", "onOnClick", "onOnPrevMonth", "onOnPrevYear", "onOnNextMonth", "onOnNextYear", "onOnMouseenter", "left-btn", "prevYearDisabled", "prevMonthDisabled"])
      ])) : A("", !0),
      a.type == "monthrange" ? (v(), _("div", Bz, [
        K(i, {
          modelValue: n.modelEnd,
          "onUpdate:modelValue": t[9] || (t[9] = (s) => n.modelEnd = s),
          motion: n.motionList,
          "onUpdate:motion": t[10] || (t[10] = (s) => n.motionList = s),
          current: n.modelCurrentEnd,
          "onUpdate:current": t[11] || (t[11] = (s) => n.modelCurrentEnd = s),
          type: a.type,
          "move-in-out": n.moveInOut,
          "start-time": n.startTime,
          "end-time": n.endTime,
          "default-value": n.defaultValueEnd,
          onOnClick: n.handleEndClick,
          onOnPrevMonth: n.hanldePrevMonthEnd,
          onOnPrevYear: n.hanldePrevYearEnd,
          onOnNextMonth: n.hanldeNextMonthEnd,
          onOnNextYear: n.hanldeNextYearEnd,
          onOnMouseenter: n.handleEndOnMouseenter,
          "left-btn": !a.linkage,
          prevYearDisabled: n.yearDisabled,
          prevMonthDisabled: n.monthDisabled
        }, null, 8, ["modelValue", "motion", "current", "type", "move-in-out", "start-time", "end-time", "default-value", "onOnClick", "onOnPrevMonth", "onOnPrevYear", "onOnNextMonth", "onOnNextYear", "onOnMouseenter", "left-btn", "prevYearDisabled", "prevMonthDisabled"])
      ])) : A("", !0)
    ])
  ]);
}
const Az = /* @__PURE__ */ H(xz, [["render", Iz]]), Pz = {
  name: "ZmzDatepickerYear",
  props: {
    type: {
      type: String,
      default: "date"
    },
    modelValue: {
      type: [String, Number, Date, Array],
      default: () => /* @__PURE__ */ new Date()
    },
    current: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    defaultValue: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    }
  },
  emits: ["update:modelValue", "on-change", "on-click", "on-prev-year", "on-next-year"],
  setup(e, { emit: t }) {
    const a = b((/* @__PURE__ */ new Date()).getFullYear()), n = z({
      get() {
        return e.modelValue;
      },
      set(g) {
        t("update:modelValue", g), t("on-change", g);
      }
    }), o = z({
      get() {
        return e.current;
      },
      set(g) {
        t("update:current", g);
      }
    }), r = z(() => n.value ? new Date(n.value).getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), l = z(() => n.value ? new Date(n.value).getMonth() + 1 : (/* @__PURE__ */ new Date()).getMonth()), i = (g) => {
      t("on-click", g);
    }, s = z(() => {
      let g = [], h = [];
      for (let y = r.value - Number(r.value % 10); y <= Number(r.value) + (9 - r.value % 10); y++) {
        let C = !1, k = !1;
        y == je(o.value, "yyyy") && (C = !0), y == je(e.defaultValue, "yyyy") && (k = !0), h.push({
          year: y,
          date: y + "-01-01",
          disable: !1,
          current: C,
          active: k
        });
      }
      for (let y = 0; y < h.length; y += 4)
        g.push(h.slice(y, y + 4));
      return g;
    }), d = z(() => r.value - Number(r.value % 10)), c = z(() => r.value + Number(9 - r.value % 10));
    return {
      yearListData: s,
      toYear: a,
      handleYearClick: i,
      yearStart: d,
      yearEnd: c,
      handlePrevYearClick: () => {
        t("on-prev-year", d.value, l.value);
      },
      handleNextYearClick: () => {
        t("on-next-year", c.value, l.value);
      }
    };
  }
}, Nz = { class: "zmz-datepicker__years" }, Vz = { class: "zmz-datepicker__title" }, Fz = { class: "zmz-datepicker__title__prev" }, Rz = { class: "zmz-datepicker__title__text__label" }, Zz = { class: "zmz-datepicker__title__text__label" }, Wz = { class: "zmz-datepicker__title__next" }, $z = { class: "zmz-datepicker__years__year" }, jz = ["onClick"], Hz = { class: "zmz-datepicker__years__year__ul__li__text__label" };
function Yz(e, t, a, n, o, r) {
  return v(), _("div", Nz, [
    u("div", Vz, [
      u("div", Fz, [
        u("div", {
          class: "zmz-datepicker__title__prev__year",
          onClick: t[0] || (t[0] = (...l) => n.handlePrevYearClick && n.handlePrevYearClick(...l))
        }, [...t[3] || (t[3] = [
          u("i", { class: "zmz-icon--doublearrow-left" }, null, -1)
        ])])
      ]),
      u("div", {
        class: "zmz-datepicker__title__text",
        onClick: t[1] || (t[1] = (...l) => e.getSwitchYear && e.getSwitchYear(...l))
      }, [
        u("span", Rz, Z(n.yearStart) + " 年", 1),
        t[4] || (t[4] = u("span", { class: "zmz-datepicker__title__text__label" }, "-", -1)),
        u("span", Zz, Z(n.yearEnd) + " 年", 1)
      ]),
      u("div", Wz, [
        u("div", {
          class: "zmz-datepicker__title__next__year",
          onClick: t[2] || (t[2] = (...l) => n.handleNextYearClick && n.handleNextYearClick(...l))
        }, [...t[5] || (t[5] = [
          u("i", { class: "zmz-icon--doublearrow-right" }, null, -1)
        ])])
      ])
    ]),
    u("div", $z, [
      (v(!0), _(G, null, fe(n.yearListData, (l, i) => (v(), _("div", {
        class: "zmz-datepicker__years__year__ul",
        key: i
      }, [
        (v(!0), _(G, null, fe(l, (s, d) => (v(), _("div", {
          class: "zmz-datepicker__years__year__ul__li",
          key: d,
          onClick: (c) => n.handleYearClick(s)
        }, [
          u("div", {
            class: P(["zmz-datepicker__years__year__ul__li__text", {
              "zmz-datepicker__years__year__ul__li__text--active": s.active,
              "zmz-datepicker__years__year__ul__li__text--current": s.current,
              "zmz-datepicker__years__year__ul__li__text--disabled": s.disable
            }])
          }, [
            u("span", Hz, Z(s.year) + "年", 1)
          ], 2)
        ], 8, jz))), 128))
      ]))), 128))
    ])
  ]);
}
const qz = /* @__PURE__ */ H(Pz, [["render", Yz]]), Uz = {
  name: "ZmzTimepickerTime",
  props: {
    /**
     * 绑定值
     */
    modelValue: {
      type: [String, Number, Date, Array],
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    /**
     * 默认值
     */
    defaultValue: {
      type: [Number, Date],
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    /**
     * 最小值
     */
    minTime: {
      type: [Date, String],
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    /**
     * 最小值
     */
    type: {
      type: String,
      default: "start",
      validator(e) {
        return ["start", "end"].includes(e);
      }
    }
  },
  emits: ["on-change", "update:modelValue", "on-canel", "on-confirm", "on-click"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(null), l = b(null), i = b(null), s = b(null), d = b(null), c = z({
      get() {
        return e.modelValue;
      },
      set(p) {
        t("on-change", p), t("update:modelValue", p);
      }
    });
    ue(() => e.minTime, (p) => {
      p && e.type == "end" && (i.value = new Date(p).getHours(), s.value = new Date(p).getMinutes(), d.value = new Date(p).getSeconds());
    }, { immediate: !0, lazy: !0 });
    const f = z(() => c.value ? new Date(c.value).getHours() : new Date(e.defaultValue).getHours()), m = z(() => c.value ? new Date(c.value).getMinutes() : new Date(e.defaultValue).getMinutes()), g = z(() => c.value ? new Date(c.value).getSeconds() : new Date(e.defaultValue).getSeconds()), h = z(() => {
      let p = [];
      for (let w = 0; w < 24; w++) {
        let O = !1, x = !1;
        f.value == w && f.value != "" && (x = !0, Se(() => {
          setTimeout(() => {
            if (n.value[0]) {
              let D = n.value[0].offsetHeight;
              o.value.$el.querySelector(".zmz-scrollbar__wrap").scrollTo(0, D * w);
            }
          }, 13);
        })), i.value > w && (O = !0), p.push({
          date: w,
          active: x,
          disabled: O
        });
      }
      return p;
    }), y = z(() => {
      let p = [];
      for (let w = 0; w < 60; w++) {
        let O = !1, x = !1;
        m.value == w && m.value != "" && (x = !0, Se(() => {
          setTimeout(() => {
            if (n.value[0]) {
              let D = n.value[0].offsetHeight;
              r.value.$el.querySelector(".zmz-scrollbar__wrap").scrollTo(0, D * w);
            }
          }, 13);
        })), i.value >= f.value && s.value > w && (O = !0), p.push({
          date: w,
          active: x,
          disabled: O
        });
      }
      return p;
    }), C = z(() => {
      let p = [];
      for (let w = 0; w < 60; w++) {
        let O = !1, x = !1;
        g.value == w && g.value != "" && (x = !0, Se(() => {
          setTimeout(() => {
            if (n.value[0]) {
              let D = n.value[0].offsetHeight;
              l.value.$el.querySelector(".zmz-scrollbar__wrap").scrollTo(0, D * w);
            }
          }, 13);
        })), i.value >= f.value && s.value >= m.value && d.value > w && (O = !0), p.push({
          date: w,
          active: x,
          disabled: O
        });
      }
      return p;
    }), k = (p, w) => {
      w.disabled || (p == "hour" && (c.value = bt(S(c.value), w.date, m.value, g.value)), p == "minute" && (c.value = bt(S(c.value), f.value, w.date, g.value)), p == "second" && (c.value = bt(S(c.value), f.value, m.value, w.date)), t("on-click"));
    }, S = (p) => p ? new Date(p) : /* @__PURE__ */ new Date();
    return {
      hourCurrent: f,
      minuteCurrent: m,
      secondCurrent: g,
      handleClick: k,
      hourListData: h,
      minuteListData: y,
      secondListData: C,
      model: c,
      initDate: (p) => p < 10 ? "0" + parseInt(p) : parseInt(p),
      zmzTimepickerTime: a,
      zmzTimepickerTimeLi: n,
      zmzTimepickerTimeHour: o,
      zmzTimepickerTimeMinute: r,
      zmzTimepickerTimeSecond: l
    };
  }
}, Gz = {
  class: "zmz-timepicker__time",
  ref: "zmzTimepickerTime"
}, Xz = { class: "zmz-timepicker__time__hour" }, Kz = ["onClick"], Qz = { class: "zmz-timepicker__time__minute" }, Jz = ["onClick"], e_ = { class: "zmz-timepicker__time__second" }, t_ = ["onClick"];
function n_(e, t, a, n, o, r) {
  const l = oe("zmz-scrollbar");
  return v(), _("div", Gz, [
    u("div", Xz, [
      K(l, {
        class: "zmz-timepicker__scrollbar",
        ref: "zmzTimepickerTimeHour"
      }, {
        default: le(() => [
          (v(!0), _(G, null, fe(n.hourListData, (i, s) => (v(), _("div", {
            class: P(["zmz-timepicker__time__item", { "zmz-timepicker__time__item--active": i.date == n.hourCurrent, "zmz-timepicker__time__item--disabled": i.disabled }]),
            ref_for: !0,
            ref: "zmzTimepickerTimeLi",
            onClick: (d) => n.handleClick("hour", i),
            key: s
          }, Z(n.initDate(i.date)), 11, Kz))), 128))
        ]),
        _: 1
      }, 512)
    ]),
    u("div", Qz, [
      K(l, {
        class: "zmz-timepicker__scrollbar",
        ref: "zmzTimepickerTimeMinute"
      }, {
        default: le(() => [
          (v(!0), _(G, null, fe(n.minuteListData, (i, s) => (v(), _("div", {
            class: P(["zmz-timepicker__time__item", { "zmz-timepicker__time__item--active": i.date == n.minuteCurrent, "zmz-timepicker__time__item--disabled": i.disabled }]),
            ref_for: !0,
            ref: "zmzTimepickerTimeLi",
            onClick: (d) => n.handleClick("minute", i),
            key: s
          }, Z(n.initDate(i.date)), 11, Jz))), 128))
        ]),
        _: 1
      }, 512)
    ]),
    u("div", e_, [
      K(l, {
        class: "zmz-timepicker__scrollbar",
        ref: "zmzTimepickerTimeSecond"
      }, {
        default: le(() => [
          (v(!0), _(G, null, fe(n.secondListData, (i, s) => (v(), _("div", {
            class: P(["zmz-timepicker__time__item", { "zmz-timepicker__time__item--active": i.date == n.secondCurrent, "zmz-timepicker__time__item--disabled": i.disabled }]),
            ref_for: !0,
            ref: "zmzTimepickerTimeLi",
            onClick: (d) => n.handleClick("second", i),
            key: s
          }, Z(n.initDate(i.date)), 11, t_))), 128))
        ]),
        _: 1
      }, 512)
    ])
  ], 512);
}
const wr = /* @__PURE__ */ H(Uz, [["render", n_]]), a_ = {
  name: "ZmzTimepickerRange",
  components: {
    ZmzTimepickerTime: wr
  },
  props: {
    /**
     * 绑定值
     */
    modelValue: [String, Number, Date, Array]
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(/* @__PURE__ */ new Date()), r = b(Ll(/* @__PURE__ */ new Date(), 3600 * 1e3)), l = z({
      get() {
        return e.modelValue;
      },
      set(i) {
        t("update:modelValue", i);
      }
    });
    return ue([() => a.value, () => n.value], ([i, s]) => {
      i && !s && (l.value = [i, Ll(i, 3600 * 1e3)]), !i && s && (l.value = [mo(s, 3600 * 1e3), s]), i && s && (l.value = [i, s]);
    }), de(() => {
      l.value.length && (a.value = l.value[0], n.value = l.value[1]);
    }), {
      modelStart: a,
      modelEnd: n,
      minDate: o,
      maxDate: r
    };
  }
}, l_ = { class: "zmz-timepicker__range" }, o_ = { class: "zmz-timepicker__range__wrap zmz-timepicker__range__wrap--left" }, r_ = { class: "zmz-timepicker__range__content" }, i_ = { class: "zmz-timepicker__range__wrap zmz-timepicker__range__wrap--right" }, s_ = { class: "zmz-timepicker__range__content" };
function u_(e, t, a, n, o, r) {
  const l = oe("zmz-timepicker-time");
  return v(), _("div", l_, [
    u("div", o_, [
      t[2] || (t[2] = u("div", { class: "zmz-timepicker__range__title" }, "开始时间", -1)),
      u("div", r_, [
        K(l, {
          modelValue: n.modelStart,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => n.modelStart = i),
          type: "start",
          "default-value": n.minDate
        }, null, 8, ["modelValue", "default-value"])
      ])
    ]),
    u("div", i_, [
      t[3] || (t[3] = u("div", { class: "zmz-timepicker__range__title" }, "结束时间", -1)),
      u("div", s_, [
        K(l, {
          modelValue: n.modelEnd,
          "onUpdate:modelValue": t[1] || (t[1] = (i) => n.modelEnd = i),
          type: "end",
          "default-value": n.maxDate,
          "min-time": n.modelStart
        }, null, 8, ["modelValue", "default-value", "min-time"])
      ])
    ])
  ]);
}
const d_ = /* @__PURE__ */ H(a_, [["render", u_]]), c_ = {
  name: "ZmzTimepickerSelect",
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: "date"
    },
    /**
     * 配置
     */
    options: {
      type: Object,
      default: () => ({
        start: "00:00",
        step: "00:20",
        end: "24:00"
      })
    },
    /**
     * 时间数据
     */
    time: {
      type: Array,
      default: () => []
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = z({
      get() {
        return e.modelValue;
      },
      set(s) {
        t("update:modelValue", s);
      }
    }), r = z({
      get() {
        return e.time;
      },
      set(s) {
        t("update:time", s);
      }
    }), l = z(() => {
      let s = [];
      return r.value.forEach((d, c) => {
        let f = !1, m = !1;
        d === o.value && (f = !0, Se(() => {
          let g = a.value[0].offsetHeight;
          setTimeout(() => {
            n.value && n.value.$el.querySelector(".zmz-scrollbar__wrap").scrollTo(0, g * c);
          }, 13);
        })), (e.options.minTime >= d || e.options.maxTime <= d) && (m = !0), s.push({
          time: d,
          active: f,
          disabled: m
        });
      }), s;
    });
    return {
      handleClick: (s) => {
        s.disabled || (o.value = s.time, t("on-change", s.time));
      },
      selectTimeData: l,
      zmzTimepickerSelectBar: n,
      zmzTimepickerSelectItem: a,
      modelTime: r
    };
  }
}, m_ = { class: "zmz-timepicker__select" }, f_ = ["onClick"];
function v_(e, t, a, n, o, r) {
  const l = oe("zmz-scrollbar");
  return v(), _("div", m_, [
    K(l, {
      class: "zmz-timepicker__scrollbar",
      ref: "zmzTimepickerSelectBar"
    }, {
      default: le(() => [
        (v(!0), _(G, null, fe(n.selectTimeData, (i, s) => (v(), _("div", {
          class: P(["zmz-timepicker__select__item", { "zmz-timepicker__select__item--active": i.active, "zmz-timepicker__select__item--disabled": i.disabled }]),
          key: s,
          onClick: (d) => n.handleClick(i),
          ref_for: !0,
          ref: "zmzTimepickerSelectItem"
        }, Z(i.time), 11, f_))), 128))
      ]),
      _: 1
    }, 512)
  ]);
}
const z_ = /* @__PURE__ */ H(c_, [["render", v_]]), __ = {
  name: "ZmzTeleportdom",
  props: {
    /**
     * 穿梭位置
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * 类名
     */
    className: {
      type: [String, Array],
      default: ""
    },
    /**
     * 是否显示
     */
    visible: {
      type: Boolean
    },
    /**
     * 动画名称
     */
    transitionName: {
      type: String,
      default: "transition-drop"
    },
    /**
     * 穿梭父节点
     */
    parentRef: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 是否显示辅助指向
     */
    arrow: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["on-mouseenter", "on-mouseleave", "on-click", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = () => {
      Se(() => {
        if (a.value && (a.value.style["z-index"] = qe()), n.value)
          n.value.update();
        else {
          let y = [
            {
              name: "offset",
              options: {
                offset: e.offset
              }
            },
            {
              name: "popperOffsets"
            },
            {
              name: "arrow"
            },
            {
              name: "computeStyles",
              options: {
                gpuAcceleration: !1,
                adaptive: !1
              }
            },
            {
              name: "preventOverflow",
              options: {
                padding: 5
              }
            }
          ].concat(e.popperOptions);
          n.value = fr(e.parentRef, a.value, {
            strategy: "fixed",
            placement: e.placement,
            padding: 10,
            modifiers: y
          });
        }
      });
    }, r = () => {
      n.value && setTimeout(() => {
        n.value && (n.value.destroy(), n.value = null);
      }, 300);
    }, l = (y) => {
      t("on-mouseenter", y);
    }, i = (y) => {
      t("on-mouseleave", y);
    }, s = (y) => {
      t("on-click", y);
    };
    return Ne(() => {
      n.value && (n.value.destroy(), n.value = null);
    }), ue(
      () => e.visible,
      (y) => {
        e.parentRef && (y ? o() : r());
      },
      { immediate: !0 }
    ), {
      update: o,
      destroy: r,
      handleClick: s,
      handleMouseleave: i,
      handleMouseenter: l,
      handleAfterLeave: () => {
        t("on-close-after");
      },
      handleLeave: () => {
        t("on-close");
      },
      handleBeforeLeave: () => {
        t("on-close-before");
      },
      handleAfterEnter: () => {
        t("on-open-after");
      },
      handleEnter: () => {
        t("on-open");
      },
      handleBeforeEnter: async () => {
        t("on-open-before");
      },
      zmzTeleportdom: a
    };
  }
}, h_ = {
  key: 0,
  class: "zmz-teleportdom__arrow",
  ref: "menuHorn",
  "data-popper-arrow": ""
};
function g_(e, t, a, n, o, r) {
  return v(), pe(ct, Ie({
    to: a.teleportDom,
    disabled: !a.teleport
  }, e.$attrs), [
    K(Ve, {
      name: a.transitionName,
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        a.visible ? (v(), _("div", Ie({
          key: 0,
          class: ["zmz-teleportdom", a.className],
          ref: "zmzTeleportdom"
        }, e.$attrs, {
          onMouseenter: t[0] || (t[0] = (...l) => n.handleMouseenter && n.handleMouseenter(...l)),
          onMouseleave: t[1] || (t[1] = (...l) => n.handleMouseleave && n.handleMouseleave(...l)),
          onClick: t[2] || (t[2] = _e((...l) => n.handleClick && n.handleClick(...l), ["stop"]))
        }), [
          a.arrow ? (v(), _("div", h_, null, 512)) : A("", !0),
          N(e.$slots, "default")
        ], 16)) : A("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 16, ["to", "disabled"]);
}
const Sr = /* @__PURE__ */ H(__, [["render", g_]]), y_ = {
  name: "ZmzTimepicker",
  components: {
    ZmzTimepickerTime: wr,
    ZmzTimepickerRange: d_,
    ZmzTimepickerSelect: z_,
    ZmzTeleportdom: Sr
  },
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: "time",
      validator(e) {
        return ["time", "timeselect", "timerange"].includes(e);
      }
    },
    /**
     * 配置
     */
    options: {
      type: Object,
      default: () => ({
        start: "00:00",
        step: "00:20",
        end: "24:00"
      })
    },
    /**
     * 提示
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * 分隔符
     */
    divisionRange: {
      type: String,
      default: "至"
    },
    /**
     * 开始提示
     */
    startPlaceholder: {
      type: String,
      default: ""
    },
    /**
     * 结束提示
     */
    endPlaceholder: {
      type: String,
      default: ""
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: [String, Number, Date, Array],
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    /**
     * 格式
     */
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    /**
     * 清除按钮
     */
    clearbtn: {
      type: Boolean,
      default: !0
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    /**
     *尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 默认值
     */
    defaultValue: {
      type: [Number, Date],
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    /**
     * 前缀
     */
    prefix: {
      type: Boolean,
      default: !0
    },
    /**
     * 后缀
     */
    suffix: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom"
    }
  },
  emits: ["update:modelValue", "on-input", "on-focus", "on-blur", "on-canel", "on-confirm", "on-click", "on-change", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(!1), o = b(!1), r = b(!1), l = b(null), i = b(null), s = b(null), d = be("zmzForm", {}), c = be("zmzFormItem", {}), f = b(e.modelValue), m = b(!1), g = z(() => d && d.size ? d.size.value : ""), h = z(() => e.defaultValue ? new Date(e.defaultValue) : /* @__PURE__ */ new Date()), y = z({
      get() {
        return e.modelValue;
      },
      set(ge) {
        Te.value || De.value || (t("update:modelValue", ge), t("on-change", ge), C.value && C.value.proxy.onValidate());
      }
    }), C = z(() => Pe(a, "ZmzFormItem")), k = z(() => e.format && e.type == "time" ? y.value && je(y.value, e.format) : y.value), S = z(() => e.format && e.type == "timerange" ? y.value[0] && je(y.value[0], e.format) : y.value[0]), L = z(() => e.format && e.type == "timerange" ? y.value[1] && je(y.value[1], e.format) : y.value[1]), p = (ge) => {
      y.value = ge, t("on-change", ge), r.value = !1;
    }, w = () => {
      f.value = y.value, t("on-confirm", y.value), r.value = !1;
    }, O = () => {
      y.value = f.value, t("on-canel", y.value), r.value = !1;
    }, x = () => {
      Te.value || De.value || (r.value = !r.value);
    }, D = () => {
      y.value = "", f.value = "", r.value = !1;
    }, M = (ge) => {
      t("on-change", ge.target.value);
    }, R = (ge) => {
      t("on-input", ge);
    }, B = (ge) => {
      Te.value || De.value || (o.value = !0, t("on-focus", ge));
    }, F = (ge) => {
      if (!(Te.value || De.value)) {
        if (e.type == "timeselect")
          hr(ge.target.value) && (y.value = q.value.find((Q) => Q === ge.target.value)), ge.target.value = y.value;
        else if (e.type == "time") {
          if (co(ge.target.value)) {
            const { hour: Q, minute: ke, second: Ee } = gr(ge.target.value);
            y.value = bt(new Date(h.value), Q, ke, Ee);
          }
          ge.target.value = je(y.value, e.format);
        }
        o.value = !1, t("on-blur", ge);
      }
    }, E = z(() => {
      let ge = [];
      return Te.value && ge.push("zmz-timepicker--disabled"), De.value && ge.push("zmz-timepicker--readonly"), e.type && ge.push(`zmz-timepicker--${e.type}`), (g.value || e.size) && ge.push(`zmz-timepicker--size-${g.value || e.size}`), r.value && ge.push("zmz-timepicker--focus"), e.prefix && ge.push("zmz-timepicker--prefix"), (e.suffix || e.clearbtn) && ge.push("zmz-timepicker--suffix"), ge;
    }), T = z(() => []), I = () => {
      t("on-close-before");
    }, V = () => {
      t("on-close");
    }, W = () => {
      t("on-close-after");
    }, $ = () => {
      t("on-open-before");
    }, X = () => {
      t("on-open");
    }, ee = () => {
      t("on-open-after");
    }, J = (ge) => {
      if (m.value)
        return m.value = !1, !1;
      if (l.value && !l.value.contains(ge.target) && r.value) {
        r.value = !1, f.value = y.value, ge.preventDefault(), ge.stopPropagation();
        return;
      }
    }, q = z(() => {
      for (var ge = e.options.start.split(":"), Q = parseInt(ge[0] * 60) + parseInt(ge[1]), ke = e.options.end.split(":"), Ee = parseInt(ke[0] * 60) + parseInt(ke[1]), Y = e.options.step.split(":"), ce = parseInt(Y[0] * 60) + parseInt(Y[1]), Ae = [], $e = Ee - Q, He = Q; He <= $e; He++) {
        var We = "";
        He % ce == 0 && (We = ut(parseInt(He / 60)) + ":" + ut(He % 60), We === "24:00" ? Ae.push("23:59") : Ae.push(We));
      }
      return Ae;
    }), ve = z(() => !Te.value && !De.value && e.clearbtn && (o.value || n.value) && (y.value && (e.type == "" || e.type == "timeselect") || e.type == "timerange")), se = () => {
      e.appendToBody && (m.value = !0);
    }, he = z(() => ["zmz-teleportdom--timepicker"]), ye = z(() => e.placeholder ? e.placeholder : c.placeholderPrefixTextInput ? c.placeholderPrefixTextInput.value : ""), Te = z(() => d && d.disabled ? d.disabled : e.disabled), De = z(() => d && d.readonly ? d.readonly : e.readonly);
    return {
      handleConfirm: w,
      handleCanel: O,
      model: y,
      showClear: ve,
      currentVisible: r,
      hovering: n,
      handleTimepicker: x,
      clearInput: D,
      handleChange: M,
      handleInput: R,
      handleFocus: B,
      handleBlur: F,
      zmzDatepickerInput: i,
      // 范围
      zmzTimepickerClass: E,
      bodyCloseMenus: J,
      zmzTimepicker: l,
      handleAfterLeave: W,
      handleLeave: V,
      handleBeforeLeave: I,
      handleAfterEnter: ee,
      handleEnter: X,
      handleBeforeEnter: $,
      handleOnChangeSelect: p,
      zmzTeleportdomClass: he,
      modelTimeSelectInput: k,
      modelTimeRangeStartInput: S,
      modelTimeRangeEndInput: L,
      zmzTimepickerPanel: s,
      zmzTimepickerWrapClass: T,
      timeListData: q,
      modelDefaultValue: h,
      handlePanelClick: se,
      placeholderText: ye,
      globalFromReadonly: De,
      globalFromDisabled: Te
    };
  }
}, p_ = {
  key: 0,
  class: "zmz-timepicker__prefix"
}, b_ = ["disabled", "readonly", "placeholder", "value"], k_ = ["disabled", "readonly", "placeholder", "value"], C_ = { class: "zmz-timepicker__division" }, w_ = ["disabled", "readonly", "placeholder", "value"], S_ = {
  key: 3,
  class: "zmz-timepicker__suffix"
}, x_ = { class: "zmz-timepicker__content" }, T_ = {
  key: 0,
  class: "zmz-timepicker__footer"
};
function O_(e, t, a, n, o, r) {
  const l = oe("zmz-timepicker-select"), i = oe("zmz-timepicker-time"), s = oe("zmz-timepicker-range"), d = oe("zmz-button"), c = oe("zmz-teleportdom"), f = qt("zmzclickoutside");
  return re((v(), _("div", {
    class: P(["zmz-timepicker", [n.zmzTimepickerClass]]),
    ref: "zmzTimepicker"
  }, [
    u("div", {
      class: P(["zmz-timepicker__wrap", [n.zmzTimepickerWrapClass]]),
      onClick: t[13] || (t[13] = (...m) => n.handleTimepicker && n.handleTimepicker(...m)),
      onMouseenter: t[14] || (t[14] = (m) => n.hovering = !0),
      onMouseleave: t[15] || (t[15] = (m) => n.hovering = !1)
    }, [
      a.prefix ? (v(), _("span", p_, [...t[21] || (t[21] = [
        u("i", { class: "zmz-timepicker__icon zmz-icon--time" }, null, -1)
      ])])) : A("", !0),
      a.type == "timeselect" || a.type == "time" ? (v(), _("input", {
        key: 1,
        type: "text",
        class: "zmz-timepicker__input",
        onChange: t[0] || (t[0] = (...m) => n.handleChange && n.handleChange(...m)),
        onInput: t[1] || (t[1] = (...m) => n.handleInput && n.handleInput(...m)),
        onFocus: t[2] || (t[2] = (...m) => n.handleFocus && n.handleFocus(...m)),
        onBlur: t[3] || (t[3] = (...m) => n.handleBlur && n.handleBlur(...m)),
        disabled: n.globalFromDisabled,
        readonly: n.globalFromReadonly,
        placeholder: n.placeholderText,
        value: n.modelTimeSelectInput,
        ref: "zmzDatepickerInput"
      }, null, 40, b_)) : A("", !0),
      a.type == "timerange" ? (v(), _(G, { key: 2 }, [
        u("input", {
          type: "text",
          class: "zmz-timepicker__input",
          onChange: t[4] || (t[4] = (...m) => n.handleChange && n.handleChange(...m)),
          onInput: t[5] || (t[5] = (...m) => n.handleInput && n.handleInput(...m)),
          onFocus: t[6] || (t[6] = (...m) => n.handleFocus && n.handleFocus(...m)),
          onBlur: t[7] || (t[7] = (...m) => n.handleBlur && n.handleBlur(...m)),
          disabled: n.globalFromDisabled,
          readonly: n.globalFromReadonly,
          placeholder: a.startPlaceholder,
          value: n.modelTimeRangeStartInput,
          ref: "zmzDatepickerInput"
        }, null, 40, k_),
        u("span", C_, Z(a.divisionRange), 1),
        u("input", {
          type: "text",
          class: "zmz-timepicker__input",
          onChange: t[8] || (t[8] = (...m) => n.handleChange && n.handleChange(...m)),
          onInput: t[9] || (t[9] = (...m) => n.handleInput && n.handleInput(...m)),
          onFocus: t[10] || (t[10] = (...m) => n.handleFocus && n.handleFocus(...m)),
          onBlur: t[11] || (t[11] = (...m) => n.handleBlur && n.handleBlur(...m)),
          disabled: n.globalFromDisabled,
          readonly: n.globalFromReadonly,
          placeholder: a.endPlaceholder,
          value: n.modelTimeRangeEndInput,
          ref: "zmzDatepickerInput"
        }, null, 40, w_)
      ], 64)) : A("", !0),
      a.suffix ? (v(), _("span", S_, [
        n.showClear ? (v(), _("i", {
          key: 0,
          class: "zmz-timepicker__icon zmz-icon--error",
          onClick: t[12] || (t[12] = _e((...m) => n.clearInput && n.clearInput(...m), ["stop"]))
        })) : A("", !0)
      ])) : A("", !0)
    ], 34),
    K(c, {
      arrow: a.arrow,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzTimepicker,
      visible: n.currentVisible,
      placement: a.placement,
      teleport: a.teleport,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      offset: a.offset,
      "popper-options": a.popperOptions,
      "transition-name": "zmz-fold-top",
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }, {
      default: le(() => [
        u("div", {
          class: "zmz-timepicker__dropdown",
          ref: "zmzTimepickerPanel",
          onClick: t[20] || (t[20] = (...m) => n.handlePanelClick && n.handlePanelClick(...m))
        }, [
          u("div", x_, [
            a.type == "timeselect" ? (v(), pe(l, {
              key: 0,
              onOnChange: n.handleOnChangeSelect,
              modelValue: n.model,
              "onUpdate:modelValue": t[16] || (t[16] = (m) => n.model = m),
              time: n.timeListData,
              "onUpdate:time": t[17] || (t[17] = (m) => n.timeListData = m),
              options: a.options
            }, null, 8, ["onOnChange", "modelValue", "time", "options"])) : A("", !0),
            a.type == "time" ? (v(), pe(i, {
              key: 1,
              modelValue: n.model,
              "onUpdate:modelValue": t[18] || (t[18] = (m) => n.model = m),
              "default-value": n.modelDefaultValue
            }, null, 8, ["modelValue", "default-value"])) : A("", !0),
            a.type == "timerange" ? (v(), pe(s, {
              key: 2,
              modelValue: n.model,
              "onUpdate:modelValue": t[19] || (t[19] = (m) => n.model = m),
              "default-value": n.modelDefaultValue
            }, null, 8, ["modelValue", "default-value"])) : A("", !0)
          ]),
          a.type == "time" || a.type == "timerange" ? (v(), _("div", T_, [
            K(d, {
              text: "",
              size: "mini",
              onClick: _e(n.handleCanel, ["stop"])
            }, {
              default: le(() => [...t[22] || (t[22] = [
                ne("取消", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            K(d, {
              text: "",
              type: "primary",
              size: "mini",
              onClick: _e(n.handleConfirm, ["stop"])
            }, {
              default: le(() => [...t[23] || (t[23] = [
                ne("确认", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])) : A("", !0)
        ], 512)
      ]),
      _: 1
    }, 8, ["arrow", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "class-name", "offset", "popper-options", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])
  ], 2)), [
    [f, n.bodyCloseMenus]
  ]);
}
const ln = /* @__PURE__ */ H(y_, [["render", O_]]);
ln.install = function(e) {
  e.component(ln.name, ln);
};
const L_ = {
  name: "ZmzDatepickerTime",
  components: {
    ZmzInput: _t,
    ZmzTimepicker: ln
  },
  props: {
    modelValue: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    old: {
      type: [String, Number, Date],
      default: () => /* @__PURE__ */ new Date()
    },
    disabledTime: {
      type: Boolean,
      default: !1
    },
    disabledDate: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:old", "on-blur"],
  setup(e, { emit: t }) {
    const a = z({
      get() {
        return e.modelValue;
      },
      set(c) {
        t("update:modelValue", c);
      }
    }), n = z({
      get() {
        return e.old ? new Date(e.old) : /* @__PURE__ */ new Date();
      },
      set(c) {
        t("update:old", c);
      }
    }), o = z(() => a.value ? new Date(a.value).getHours() : (/* @__PURE__ */ new Date()).getHours()), r = z(() => a.value ? new Date(a.value).getMinutes() : (/* @__PURE__ */ new Date()).getMinutes()), l = z(() => a.value ? new Date(a.value).getSeconds() : (/* @__PURE__ */ new Date()).getSeconds()), i = b("");
    return ue(
      () => a.value,
      (c) => {
        i.value = Xl(c, "string");
      }
    ), de(() => {
      i.value = Xl(a.value, "string");
    }), {
      model: a,
      modelOld: n,
      handleBlur: (c) => {
        uo(c.target.value) && (a.value = bt(new Date(c.target.value), o.value, r.value, l.value), t("on-blur", a.value));
      },
      handleOpen: () => {
        a.value || (a.value = /* @__PURE__ */ new Date(), n.value = /* @__PURE__ */ new Date());
      },
      modelDateInput: i
    };
  }
}, D_ = { class: "zmz-datepicker__times" }, M_ = { class: "zmz-datepicker__times__date" }, E_ = { class: "zmz-datepicker__times__time" };
function B_(e, t, a, n, o, r) {
  const l = oe("zmz-input"), i = oe("zmz-timepicker");
  return v(), _("div", D_, [
    u("div", M_, [
      K(l, {
        disabled: a.disabledDate,
        modelValue: n.modelDateInput,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => n.modelDateInput = s),
        onOnBlur: n.handleBlur
      }, null, 8, ["disabled", "modelValue", "onOnBlur"])
    ]),
    u("div", E_, [
      K(i, {
        disabled: a.disabledTime,
        modelValue: n.model,
        "onUpdate:modelValue": t[1] || (t[1] = (s) => n.model = s),
        "default-value": n.modelOld,
        onOnOpen: n.handleOpen,
        clearbtn: !1,
        prefix: !1,
        suffix: !1
      }, null, 8, ["disabled", "modelValue", "default-value", "onOnOpen"])
    ])
  ]);
}
const xr = /* @__PURE__ */ H(L_, [["render", B_]]), I_ = {
  name: "ZmzDatepickerTimeRange",
  components: {
    ZmzDatepickerTime: xr
  },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    old: {
      type: [String, Number, Date, Array],
      default: () => /* @__PURE__ */ new Date()
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:old", "on-blur"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(null), l = b(""), i = z({
      get() {
        return e.modelValue;
      },
      set(f) {
        t("update:modelValue", f);
      }
    }), s = z({
      get() {
        return e.old;
      },
      set(f) {
        t("update:old", f);
      }
    });
    return ue(
      () => i.value,
      (f) => {
        a.value = f[0], n.value = f[1], o.value = f[0], r.value = f[1];
      }
    ), ue([() => a.value, () => n.value], ([f, m]) => {
      f && !m && (o.value = f, i.value = [f, Ll(f, 3600 * 1e3)]), !f && m && (r.value = m, i.value = [mo(m, 3600 * 1e3), m]), f && m && (o.value = f, r.value = m, i.value = [f, m]);
    }), de(() => {
      i.value.length == 2 && (a.value = i.value[0], n.value = i.value[1], o.value = i.value[0], r.value = i.value[1]);
    }), {
      model: i,
      handleOpen: () => {
        i.value || (i.value = /* @__PURE__ */ new Date(), s.value = /* @__PURE__ */ new Date());
      },
      modelDateInput: l,
      modelStart: a,
      modelEnd: n,
      modelStartOld: o,
      modelEndOld: r,
      modelOld: s,
      hanldeOnBlur: (f, m) => {
        t("on-blur", f, m);
      }
    };
  }
}, A_ = { class: "zmz-datepicker__timesrange" };
function P_(e, t, a, n, o, r) {
  const l = oe("zmz-datepicker-time");
  return v(), _("div", A_, [
    K(l, {
      "disabled-date": a.disabled,
      "disabled-time": a.disabled,
      modelValue: n.modelStart,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => n.modelStart = i),
      old: n.modelStartOld,
      "onUpdate:old": t[1] || (t[1] = (i) => n.modelStartOld = i),
      onOnBlur: t[2] || (t[2] = (i) => n.hanldeOnBlur(i, "start"))
    }, null, 8, ["disabled-date", "disabled-time", "modelValue", "old"]),
    K(l, {
      "disabled-date": a.disabled,
      "disabled-time": a.disabled,
      modelValue: n.modelEnd,
      "onUpdate:modelValue": t[3] || (t[3] = (i) => n.modelEnd = i),
      old: n.modelEndOld,
      "onUpdate:old": t[4] || (t[4] = (i) => n.modelEndOld = i),
      onOnBlur: t[5] || (t[5] = (i) => n.hanldeOnBlur(i, "end"))
    }, null, 8, ["disabled-date", "disabled-time", "modelValue", "old"])
  ]);
}
const N_ = /* @__PURE__ */ H(I_, [["render", P_]]), V_ = {
  name: "ZmzDatepicker",
  components: {
    ZmzDatepickerMonth: kr,
    ZmzDatepickerRange: Az,
    ZmzDatepickerYear: qz,
    ZmzDatepickerDay: Cr,
    ZmzDatepickerTime: xr,
    ZmzDatepickerTimeRange: N_,
    ZmzTeleportdom: Sr
  },
  props: {
    type: {
      type: String,
      default: "date"
    },
    placeholder: {
      type: String,
      default: ""
    },
    divisionRange: {
      type: String,
      default: "至"
    },
    startPlaceholder: {
      type: String,
      default: ""
    },
    endPlaceholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !1
    },
    focuss: {
      type: Boolean,
      default: !1
    },
    blurs: {
      type: Boolean,
      default: !1
    },
    modelValue: [String, Number, Date, Array],
    format: {
      type: String,
      default: ""
    },
    linkage: {
      // 联动
      type: Boolean,
      default: !0
    },
    shortcut: {
      type: Array,
      default: () => []
    },
    prefix: {
      type: Boolean,
      default: !0
    },
    suffix: {
      type: Boolean,
      default: !0
    },
    timestamp: {
      type: Boolean,
      default: !1
    },
    /**
     *尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom"
    }
  },
  emits: ["on-focus", "on-blur", "update:modelValue", "on-click", "on-change", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const a = b(e.modelValue), { parent: n } = Ce(), o = b(!1), r = b(!1), l = b(!0), i = b(!1), s = b(null), d = b(/* @__PURE__ */ new Date()), c = b(null), f = b(null), m = b(!1), g = b(""), h = b(""), y = b(!1), C = be("zmzForm", {}), k = be("zmzFormItem", {}), S = z(() => C && C.size ? C.size.value : ""), L = z({
      get() {
        return e.modelValue;
      },
      set(te) {
        it.value || (e.timestamp ? t("update:modelValue", new Date(te).getTime()) : t("update:modelValue", te), p.value && p.value.proxy.onValidate());
      }
    }), p = z(() => Pe(n, "ZmzFormItem"));
    ue(
      () => L.value,
      (te) => {
        te && (d.value = te, c.value = te);
      }
    );
    const w = z(() => (/* @__PURE__ */ new Date()).getFullYear()), O = z(() => (/* @__PURE__ */ new Date()).getMonth() + 1), x = z(() => (/* @__PURE__ */ new Date()).getDate() + 1), D = z(() => w.value + "/" + O.value + "/" + x.value), M = () => {
      it.value || st.value || (i.value = !i.value);
    }, R = (te) => {
      t("on-change", te);
    }, B = (te) => {
      t("on-change", te);
    }, F = (te) => {
      r.value = !0, t("on-focus", te);
    }, E = (te) => {
      r.value = !1, t("on-blur", te);
    }, T = (te) => {
      if (y.value)
        return y.value = !1, !1;
      if (i.value) {
        if (te.preventDefault(), te.stopPropagation(), s.value && s.value.contains(te.target)) return;
        i.value = !1, te.preventDefault(), te.stopPropagation();
        return;
      }
    }, I = z(() => {
      let te = [];
      return it.value && te.push("zmz-datepicker--disabled"), st.value && te.push("zmz-datepicker--readonly"), e.type.indexOf("range") > -1 && te.push("zmz-datepicker--range"), (S.value || e.size) && te.push(`zmz-datepicker--size-${S.value || e.size}`), i.value && te.push("zmz-datepicker--focus"), e.prefix && te.push("zmz-datepicker--prefix"), (e.suffix || e.clearbtn) && te.push("zmz-datepicker--suffix"), te;
    }), V = z(() => {
      let te = [];
      return e.type.indexOf("range") > -1 && te.push("zmz-datepicker__panel--range"), e.shortcut.length && te.push("zmz-datepicker__panel--shortcut"), te;
    }), W = z(() => []), $ = z(() => L.value && je(L.value, e.format || xa(e.type)));
    de(() => {
      (e.type == "daterange" || e.type == "datetimerange") && (g.value = yr(/* @__PURE__ */ new Date()), h.value = Gl(/* @__PURE__ */ new Date())), e.type == "monthrange" && (g.value = pr(/* @__PURE__ */ new Date()), h.value = br(/* @__PURE__ */ new Date()));
    });
    const X = (te) => {
      if (e.type == "date" && (L.value = new Date(te.date), d.value = te.date, c.value = te.date, i.value = !1), e.type == "month" && (L.value = new Date(te.date), i.value = !1), e.type == "year" && (L.value = new Date(te.date), i.value = !1), e.type == "datetime") {
        let we = /* @__PURE__ */ new Date();
        a.value && (we = new Date(a.value)), L.value = bt(new Date(te.date), we.getHours(), we.getMinutes(), we.getSeconds()), a.value = bt(new Date(te.date), we.getHours(), we.getMinutes(), we.getSeconds()), d.value = te.date, c.value = te.date;
      }
    }, ee = (te, we) => {
      we == "start" && (g.value = te, h.value = Gl(te));
    }, J = z(() => L.value[0] && je(L.value[0], e.format || xa(e.type))), q = z(() => L.value[1] && je(L.value[1], e.format || xa(e.type))), ve = (te, we, Et) => {
      e.type == "daterange" && te && we && (L.value = [new Date(te), new Date(we)], i.value = !1), e.type == "monthrange" && te && we && (L.value = [new Date(te), new Date(we)], i.value = !1), e.type == "datetimerange" && (m.value = Et, te && we ? L.value = [new Date(te), new Date(we)] : L.value = [new Date(te), new Date(te)]);
    }, se = (te) => {
      te.onClick && (L.value = te.onClick(L.value), i.value = !1);
    }, he = () => {
    }, ye = () => {
      e.type == "datetime" && (L.value = /* @__PURE__ */ new Date(), i.value = !1, c.value = D.value, d.value = D.value);
    }, Te = () => {
      (e.type == "datetime" || e.type == "datetimerange") && (i.value = !1, L.value || (L.value = /* @__PURE__ */ new Date()));
    }, De = (te, we) => {
      (e.type == "month" || e.type == "year" || e.type == "date" || e.type == "datetime") && (d.value = new Date(te, we - 1, 0)), e.type.indexOf("range") > -1 && (e.linkage ? (g.value = new Date(te, we - 1, 0), h.value = new Date(te, we, 0)) : g.value = new Date(te, we - 1, 0));
    }, ge = (te, we) => {
      (e.type == "month" || e.type == "year" || e.type == "date" || e.type == "datetime") && (d.value = new Date(te, we + 1, 0)), e.type.indexOf("range") > -1 && (g.value = new Date(te, we + 1, 0));
    }, Q = (te, we) => {
      (e.type == "month" || e.type == "date" || e.type == "datetime") && (d.value = new Date(te - 1, we, 0)), e.type == "year" && (d.value <= 100 ? d.value = 1980 : d.value = new Date(te - 10, we, 0)), e.type.indexOf("range") > -1 && (e.linkage ? e.type == "monthrange" ? (g.value = new Date(te - 1, we, 0), h.value = new Date(te, we, 0)) : (g.value = new Date(te - 1, we, 0), h.value = new Date(te - 1, we + 1, 0)) : g.value = new Date(te - 1, we, 0));
    }, ke = (te, we) => {
      (e.type == "month" || e.type == "date" || e.type == "datetime") && (d.value = new Date(te + 1, we, 0)), e.type == "year" && (d.value = new Date(te + 10, we, 0)), e.type.indexOf("range") > -1 && (g.value = new Date(te + 1, we, 0));
    }, Ee = () => {
      (e.type == "date" || e.type == "datetime") && (L.value = "", c.value = /* @__PURE__ */ new Date(), d.value = /* @__PURE__ */ new Date()), e.type.indexOf("range") > -1 && (L.value = []), i.value = !1;
    }, Y = z(() => !it.value && !st.value && l.value && (r.value || o.value) && L.value), ce = () => {
      t("on-close-before");
    }, Ae = () => {
      t("on-close");
    }, $e = () => {
      t("on-close-after");
    }, He = () => {
      t("on-open-before");
    }, We = () => {
      t("on-open");
    }, Ue = () => {
      t("on-open-after");
    }, at = () => {
      e.teleport && (y.value = !0);
    }, gt = z(() => {
      let te = ["zmz-teleportdom--datepicker"];
      return e.type.indexOf("range") > -1 && te.push("zmz-datepicker--range"), te;
    }), Mt = z(() => e.placeholder ? e.placeholder : k.placeholderPrefixTextInput ? k.placeholderPrefixTextInput.value : ""), it = z(() => C && C.disabled ? C.disabled : e.disabled), st = z(() => C && C.readonly ? C.readonly : e.readonly);
    return {
      model: L,
      showClear: Y,
      currentVisible: i,
      hovering: o,
      handleCalendar: M,
      handleClear: Ee,
      handleChange: R,
      handleInput: B,
      handleFocus: F,
      handleBlur: E,
      zmzDatepicker: s,
      modelStart: g,
      modelEnd: h,
      zmzDatepickerClass: I,
      handleEmpty: he,
      handleConfirm: Te,
      handleCurrent: ye,
      modelInput: $,
      zmzDatepickerWrapClass: W,
      handleDateClick: X,
      modelDate: d,
      modelDateCurrent: c,
      hanldePrevMonthDay: De,
      hanldePrevYearDay: Q,
      hanldeNextMonthDay: ge,
      hanldeNextYearDay: ke,
      handleRangeClickStartEnd: ve,
      modelStartInput: J,
      modelEndInput: q,
      bodyCloseMenus: T,
      handleAfterLeave: $e,
      handleLeave: Ae,
      handleBeforeLeave: ce,
      handleAfterEnter: Ue,
      handleEnter: We,
      handleBeforeEnter: He,
      zmzDatepickerContainer: f,
      modelOld: a,
      hanldeOnBlur: ee,
      rangeDatetimeState: m,
      zmzDatepickerPanelClass: V,
      handleShortcut: se,
      handlePanelClick: at,
      zmzTeleportdomClass: gt,
      placeholderText: Mt,
      globalFromDisabled: it,
      globalFromReadonly: st
    };
  }
}, F_ = {
  key: 0,
  class: "zmz-datepicker__prefix"
}, R_ = ["disabled", "readonly", "placeholder", "value"], Z_ = { class: "zmz-datepicker__division" }, W_ = ["disabled", "readonly", "placeholder", "value"], $_ = ["disabled", "readonly", "placeholder", "value"], j_ = {
  key: 3,
  class: "zmz-datepicker__suffix"
}, H_ = { class: "zmz-datepicker__panel__wrap" }, Y_ = {
  key: 0,
  class: "zmz-datepicker__panel__wrap__sidebar"
}, q_ = ["onClick"], U_ = { class: "zmz-datepicker__panel__wrap__content" }, G_ = {
  key: 0,
  class: "zmz-datepicker__panel__wrap__content__header"
}, X_ = { class: "zmz-datepicker__panel__wrap__content__wrap" }, K_ = {
  key: 0,
  class: "zmz-datepicker__panel__footer"
};
function Q_(e, t, a, n, o, r) {
  const l = oe("zmz-button"), i = oe("zmz-scrollbar"), s = oe("zmz-datepicker-time"), d = oe("zmz-datepicker-time-range"), c = oe("zmz-datepicker-day"), f = oe("zmz-datepicker-year"), m = oe("zmz-datepicker-month"), g = oe("zmz-datepicker-range"), h = oe("zmz-teleportdom"), y = qt("zmzclickoutside");
  return re((v(), _("div", {
    class: P(["zmz-datepicker", [n.zmzDatepickerClass]]),
    ref: "zmzDatepicker"
  }, [
    u("div", {
      class: P(["zmz-datepicker__wrap", [n.zmzDatepickerWrapClass]]),
      onClick: t[13] || (t[13] = (...C) => n.handleCalendar && n.handleCalendar(...C)),
      onMouseenter: t[14] || (t[14] = (C) => n.hovering = !0),
      onMouseleave: t[15] || (t[15] = (C) => n.hovering = !1)
    }, [
      a.prefix ? (v(), _("span", F_, [...t[30] || (t[30] = [
        u("i", { class: "zmz-datepicker__icon zmz-icon--calendar" }, null, -1)
      ])])) : A("", !0),
      a.type == "daterange" || a.type == "datetimerange" || a.type == "monthrange" ? (v(), _(G, { key: 1 }, [
        u("input", {
          type: "text",
          class: "zmz-datepicker__input",
          onChange: t[0] || (t[0] = (...C) => n.handleChange && n.handleChange(...C)),
          onInput: t[1] || (t[1] = (...C) => n.handleInput && n.handleInput(...C)),
          onFocus: t[2] || (t[2] = (...C) => n.handleFocus && n.handleFocus(...C)),
          onBlur: t[3] || (t[3] = (...C) => n.handleBlur && n.handleBlur(...C)),
          disabled: n.globalFromDisabled,
          readonly: n.globalFromReadonly,
          placeholder: a.startPlaceholder,
          value: n.modelStartInput
        }, null, 40, R_),
        u("span", Z_, Z(a.divisionRange), 1),
        u("input", {
          type: "text",
          class: "zmz-datepicker__input",
          onChange: t[4] || (t[4] = (...C) => n.handleChange && n.handleChange(...C)),
          onInput: t[5] || (t[5] = (...C) => n.handleInput && n.handleInput(...C)),
          onFocus: t[6] || (t[6] = (...C) => n.handleFocus && n.handleFocus(...C)),
          onBlur: t[7] || (t[7] = (...C) => n.handleBlur && n.handleBlur(...C)),
          disabled: n.globalFromDisabled,
          readonly: n.globalFromReadonly,
          placeholder: a.endPlaceholder,
          value: n.modelEndInput
        }, null, 40, W_)
      ], 64)) : (v(), _("input", {
        key: 2,
        type: "text",
        class: "zmz-datepicker__input",
        onChange: t[8] || (t[8] = (...C) => n.handleChange && n.handleChange(...C)),
        onInput: t[9] || (t[9] = (...C) => n.handleInput && n.handleInput(...C)),
        onFocus: t[10] || (t[10] = (...C) => n.handleFocus && n.handleFocus(...C)),
        onBlur: t[11] || (t[11] = (...C) => n.handleBlur && n.handleBlur(...C)),
        disabled: n.globalFromDisabled,
        readonly: n.globalFromReadonly,
        placeholder: n.placeholderText,
        value: n.modelInput
      }, null, 40, $_)),
      a.suffix ? (v(), _("span", j_, [
        n.showClear ? (v(), _("i", {
          key: 0,
          class: "zmz-datepicker__icon zmz-icon--error",
          onClick: t[12] || (t[12] = _e((...C) => n.handleClear && n.handleClear(...C), ["stop"]))
        })) : A("", !0)
      ])) : A("", !0)
    ], 34),
    K(h, {
      arrow: a.arrow,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzDatepicker,
      visible: n.currentVisible,
      placement: a.placement,
      teleport: a.teleport,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      offset: a.offset,
      "popper-options": a.popperOptions,
      "transition-name": "zmz-fold-top",
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }, {
      default: le(() => [
        u("div", {
          class: P(["zmz-datepicker__panel", [n.zmzDatepickerPanelClass]]),
          ref: "zmzDatepickerContainer",
          onClick: t[29] || (t[29] = (...C) => n.handlePanelClick && n.handlePanelClick(...C))
        }, [
          u("div", H_, [
            a.shortcut.length ? (v(), _("div", Y_, [
              K(i, {
                class: "zmz-datepicker__scrollbar",
                ref: "zmzDatepickerTimeHour"
              }, {
                default: le(() => [
                  (v(!0), _(G, null, fe(a.shortcut, (C, k) => (v(), _("div", {
                    class: "zmz-datepicker__panel__wrap__sidebar__item",
                    key: k,
                    onClick: (S) => n.handleShortcut(C)
                  }, [
                    K(l, {
                      text: "",
                      disabled: C.disabled
                    }, {
                      default: le(() => [
                        ne(Z(C.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled"])
                  ], 8, q_))), 128))
                ]),
                _: 1
              }, 512)
            ])) : A("", !0),
            u("div", U_, [
              a.type == "datetime" || a.type == "datetimerange" ? (v(), _("div", G_, [
                a.type == "datetime" ? (v(), pe(s, {
                  key: 0,
                  modelValue: n.model,
                  "onUpdate:modelValue": t[16] || (t[16] = (C) => n.model = C),
                  old: n.modelOld,
                  "onUpdate:old": t[17] || (t[17] = (C) => n.modelOld = C),
                  onOnBlur: n.hanldeOnBlur
                }, null, 8, ["modelValue", "old", "onOnBlur"])) : A("", !0),
                a.type == "datetimerange" ? (v(), pe(d, {
                  key: 1,
                  modelValue: n.model,
                  "onUpdate:modelValue": t[18] || (t[18] = (C) => n.model = C),
                  disabled: n.rangeDatetimeState,
                  old: n.modelOld,
                  "onUpdate:old": t[19] || (t[19] = (C) => n.modelOld = C),
                  onOnBlur: n.hanldeOnBlur
                }, null, 8, ["modelValue", "disabled", "old", "onOnBlur"])) : A("", !0)
              ])) : A("", !0),
              u("div", X_, [
                a.type == "date" || a.type == "datetime" ? (v(), pe(c, {
                  key: 0,
                  onOnPrevMonth: n.hanldePrevMonthDay,
                  onOnPrevYear: n.hanldePrevYearDay,
                  onOnNextMonth: n.hanldeNextMonthDay,
                  onOnNextYear: n.hanldeNextYearDay,
                  onOnClick: n.handleDateClick,
                  current: n.modelDateCurrent,
                  "onUpdate:current": t[20] || (t[20] = (C) => n.modelDateCurrent = C),
                  modelValue: n.modelDate,
                  "onUpdate:modelValue": t[21] || (t[21] = (C) => n.modelDate = C),
                  type: a.type
                }, null, 8, ["onOnPrevMonth", "onOnPrevYear", "onOnNextMonth", "onOnNextYear", "onOnClick", "current", "modelValue", "type"])) : A("", !0),
                a.type == "year" ? (v(), pe(f, {
                  key: 1,
                  modelValue: n.modelDate,
                  "onUpdate:modelValue": t[22] || (t[22] = (C) => n.modelDate = C),
                  current: n.modelDateCurrent,
                  "onUpdate:current": t[23] || (t[23] = (C) => n.modelDateCurrent = C),
                  onOnPrevYear: n.hanldePrevYearDay,
                  onOnNextYear: n.hanldeNextYearDay,
                  onOnClick: n.handleDateClick,
                  type: a.type
                }, null, 8, ["modelValue", "current", "onOnPrevYear", "onOnNextYear", "onOnClick", "type"])) : A("", !0),
                a.type == "month" ? (v(), pe(m, {
                  key: 2,
                  modelValue: n.modelDate,
                  "onUpdate:modelValue": t[24] || (t[24] = (C) => n.modelDate = C),
                  current: n.modelDateCurrent,
                  "onUpdate:current": t[25] || (t[25] = (C) => n.modelDateCurrent = C),
                  onOnPrevYear: n.hanldePrevYearDay,
                  onOnNextYear: n.hanldeNextYearDay,
                  onOnClick: n.handleDateClick,
                  type: a.type
                }, null, 8, ["modelValue", "current", "onOnPrevYear", "onOnNextYear", "onOnClick", "type"])) : A("", !0),
                a.type == "daterange" || a.type == "monthrange" || a.type == "datetimerange" ? (v(), pe(g, {
                  key: 3,
                  type: a.type,
                  modelValue: n.model,
                  "onUpdate:modelValue": t[26] || (t[26] = (C) => n.model = C),
                  start: n.modelStart,
                  "onUpdate:start": t[27] || (t[27] = (C) => n.modelStart = C),
                  end: n.modelEnd,
                  "onUpdate:end": t[28] || (t[28] = (C) => n.modelEnd = C),
                  onOnClick: n.handleRangeClickStartEnd
                }, null, 8, ["type", "modelValue", "start", "end", "onOnClick"])) : A("", !0)
              ])
            ])
          ]),
          a.type == "datetime" || a.type == "datetimerange" ? (v(), _("div", K_, [
            a.type == "datetime" ? (v(), pe(l, {
              key: 0,
              class: "zmz-datepicker__panel__footer__button",
              text: "",
              size: "mini",
              onClick: _e(n.handleCurrent, ["stop"])
            }, {
              default: le(() => [...t[31] || (t[31] = [
                ne("当前", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])) : A("", !0),
            a.type == "datetimerange" ? (v(), pe(l, {
              key: 1,
              class: "zmz-datepicker__panel__footer__button",
              text: "",
              size: "mini",
              onClick: _e(n.handleClear, ["stop"])
            }, {
              default: le(() => [...t[32] || (t[32] = [
                ne("清空", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])) : A("", !0),
            K(l, {
              class: "zmz-datepicker__panel__footer__button",
              text: "",
              type: "primary",
              size: "mini",
              onClick: _e(n.handleConfirm, ["stop"])
            }, {
              default: le(() => [...t[33] || (t[33] = [
                ne("确认", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])) : A("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["arrow", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "class-name", "offset", "popper-options", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])
  ], 2)), [
    [y, n.bodyCloseMenus]
  ]);
}
const Oa = /* @__PURE__ */ H(V_, [["render", Q_]]);
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
class Kl {
  constructor() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 1, this.h = 0, this.s = 0, this.l = 0, this.init(arguments), this.COLORHUES = [], this.colorhues();
  }
  /**
   *
   * @param {array} params
   */
  init(t) {
    if (!(!t || t.length == 0))
      if (t.length == 1) {
        let a = t[0];
        if (typeof a == "string" && this.formHTML(a), typeof a == "number")
          this.fromHex("#" + (16777216 | a).toString(16).slice(1));
        else if (typeof a == "object") {
          let n = a.keys();
          n.includes("r", "g", "b") ? this.fromRGB(a.r, a.g, a.b) : n.includes("h", "s", "l") && this.fromHSL(a.h, a.s, a.l);
        }
      } else
        this.fromRGB(...t);
  }
  /**
   * 设置RGB,并 更新hsl
   * @param {number} r 0-255
   * @param {number} g 0-255
   * @param {number} b 0-255
   */
  fromRGB(t, a, n) {
    isNaN(t) || (this.r = Math.round(t)), isNaN(a) || (this.g = Math.round(a)), isNaN(n) || (this.b = Math.round(n));
    let o = this.rgb2hsl(this.r, this.g, this.b);
    return this.h = o[0], this.s = o[1], this.l = o[2], this;
  }
  /**
   * 设置HSL,并更新RGB
   * @param {number} h 0-360
   * @param {number} s 0-100
   * @param {number} l 0-100
   */
  fromHSL(t, a, n) {
    isNaN(t) || (this.h = Math.round(t)), isNaN(a) || (this.s = Math.round(a)), isNaN(n) || (this.l = Math.round(n));
    let o = this.hsl2rgb(this.h, this.s, this.l);
    return this.r = o[0], this.g = o[1], this.b = o[2], this;
  }
  fromHex(t) {
    let a = this.hex2rgb(t);
    return this.r = a[0], this.g = a[1], this.b = a[2], this.a = a[3] != null ? a[3] / 100 : 1, this.fromRGB(), this;
  }
  /**
  * 解析颜色字符串（替代原 formHTML，移除 eval 安全风险）
  * @param {string} str 颜色字符串（支持 Hex/RGB/RGBA/HSL/HSLA）
  * @returns {this} 链式调用，方便后续操作
  */
  formHTML(t) {
    const a = t.trim();
    if (a.startsWith("#"))
      return this.fromHex(a), this;
    const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, o = a.match(n);
    if (o) {
      const i = Number(o[1]), s = Number(o[2]), d = Number(o[3]), c = o[4] ? Number(o[4]) : 1;
      return this.fromRGB(
        Math.max(0, Math.min(255, i)),
        Math.max(0, Math.min(255, s)),
        Math.max(0, Math.min(255, d)),
        Math.max(0, Math.min(1, c))
      ), this;
    }
    const r = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, l = a.match(r);
    if (l) {
      const i = Number(l[1]), s = Number(l[2]), d = Number(l[3]), c = l[4] ? Number(l[4]) : 1;
      return this.fromHSL(
        Math.max(0, Math.min(360, i)),
        Math.max(0, Math.min(100, s)),
        Math.max(0, Math.min(100, d)),
        Math.max(0, Math.min(1, c))
      ), this;
    }
    throw new Error(`不支持的颜色格式：${t}，请使用 Hex/RGB/RGBA/HSL/HSLA 格式`);
  }
  toHex() {
    return this.rgb2hex(this.r, this.g, this.b, this.a * 100);
  }
  toRGB() {
    let t = `${this.r},${this.g},${this.b}`;
    return this.a !== 1 ? `rgba(${t},${Math.round(this.a)})` : `rgb(${t})`;
  }
  toHSL() {
    let t = `${this.h},${this.s},${this.l}`;
    return this.a !== 1 ? `hsla(${t},${Math.round(this.a)})` : `hsl(${t})`;
  }
  hsla(t, a, n, o) {
    let r = this.hsl2rgb(t, a, n, o);
    return {
      r: r[0],
      g: r[1],
      b: r[2],
      h: t,
      s: a,
      l: n
    };
  }
  /**
   * rgb2hsl
   *
   * @param {number} r 红色颜色值 0~255
   * @param {number} g 绿色颜色值 0~255
   * @param {number} b 蓝色颜色值 0~255
   */
  rgb2hsl(t, a, n) {
    t /= 255, a /= 255, n /= 255;
    var o = Math.max(t, a, n), r = Math.min(t, a, n), l = o - r, i = 0, s = (o + r) / 2, d = 0;
    return o === r ? i = 0 : o === t && a >= n ? i = 60 * ((a - n) / l) : o === t && a < n ? i = 60 * ((a - n) / l) + 360 : o === a ? i = 60 * ((n - t) / l) + 120 : o === n && (i = 60 * ((t - a) / l) + 240), s === 0 || o === r ? d = 0 : 0 < s && s <= 0.5 ? d = l / (2 * s) : s > 0.5 && (d = l / (2 - 2 * s)), [Math.round(i), Math.round(d * 100), Math.round(s * 100)];
  }
  /**
   * rgb2hsv
   *
   * @param {number} r 红色颜色值 0~255
   * @param {number} g 绿色颜色值 0~255
   * @param {number} b 蓝色颜色值 0~255
   */
  rgb2hsv(t, a, n) {
    t /= 255, a /= 255, n /= 255;
    var o = Math.max(t, a, n), r = Math.min(t, a, n), l = o - r, i = 0, s = o, d = o === 0 ? 0 : l / o;
    return o === r ? i = 0 : o === t && a >= n ? i = 60 * ((a - n) / l) : o === t && a < n ? i = 60 * ((a - n) / l) + 360 : o === a ? i = 60 * ((n - t) / l) + 120 : o === n && (i = 60 * ((t - a) / l) + 240), [Math.round(i), Math.round(d * 100), Math.round(s * 100)];
  }
  /**
   * rgb2hex
   *
   * @param {number} r 红色颜色值 0~255
   * @param {number} g 绿色颜色值 0~255
   * @param {number} b 蓝色颜色值 0~255
   * @param {number} a 透明度 0~100，默认100
   */
  rgb2hex(t, a, n, o) {
    typeof o > "u" || o === 100 ? o = "" : (o = Math.round(255 * o / 100), o = (o | 256).toString(16).slice(1));
    var r = (n | a << 8 | t << 16 | 1 << 24).toString(16).slice(1);
    return "#" + r.toUpperCase() + o.toUpperCase();
  }
  /**
   * hsl2rgb
   *
   * @param {number} h Hue 色调 0 ~ 360
   * @param {number} s Saturation 饱和度 0 ~ 100
   * @param {number} l Lightness 亮度 0 ~ 100
   */
  hsl2rgb(t, a, n) {
    t /= 360, a /= 100, n /= 100;
    var o = 0, r = 0, l = 0, i = 0, s = 0;
    function d(f, m, g) {
      return f < 1 / 6 ? m + (g - m) * 6 * f : f >= 1 / 6 && f < 1 / 2 ? g : f >= 1 / 2 && f < 2 / 3 ? m + (g - m) * (2 / 3 - f) * 6 : m;
    }
    function c(f) {
      return f < 0 ? f + 1 : f > 1 ? f - 1 : f;
    }
    return a === 0 ? o = r = l = n : (s = n < 0.5 ? n * (1 + a) : n + a - n * a, i = 2 * n - s, o = d(c(t + 1 / 3), i, s), r = d(c(t), i, s), l = d(c(t - 1 / 3), i, s)), [Math.round(o * 255), Math.round(r * 255), Math.round(l * 255)];
  }
  /**
   * hsv2rgb
   *
   * @param {number} h Hue 色调 0 ~ 360
   * @param {number} s Saturation 饱和度 0 ~ 100
   * @param {number} v Value 明度 0 ~ 100
   */
  hsv2rgb(t, a, n) {
    t /= 1, a /= 100, n /= 100;
    var o = 0, r = 0, l = 0;
    if (a === 0)
      o = r = l = n;
    else {
      var i = t / 60, s = Math.floor(i), d = i - s, c = n * (1 - a), f = n * (1 - d * a), m = n * (1 - (1 - d) * a);
      switch (s) {
        case 0:
          o = n, r = m, l = c;
          break;
        case 1:
          o = f, r = n, l = c;
          break;
        case 2:
          o = c, r = n, l = m;
          break;
        case 3:
          o = c, r = f, l = n;
          break;
        case 4:
          o = m, r = c, l = n;
          break;
        case 5:
          o = n, r = c, l = f;
          break;
      }
    }
    return [Math.round(o * 255), Math.round(r * 255), Math.round(l * 255)];
  }
  /**
   * hex2rgb
   *
   * @param {string} r hex颜色值 eg: #000、#325312、#b2c343
   */
  hex2rgb(t) {
    t = t.replace(/^#/, "");
    var a = null;
    t.length === 8 && (a = parseInt(t.slice(6, 8), 16) / 255, t = t.slice(0, 6)), t.length === 4 && (a = parseInt(t.slice(3, 4).repeat(2), 16) / 255, t = t.slice(0, 3)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
    var n = parseInt(t, 16), o = n >> 16, r = n >> 8 & 255, l = n & 255, i = [o, r, l];
    return a !== null && i.push(Math.round(a * 100)), i;
  }
  colorhues() {
    for (let t = 0; t <= 360; t++) {
      let a = this.hsl2rgb(t, 100, 50);
      a.r = a[0], a.g = a[1], a.b = a[2], this.COLORHUES.push(a);
    }
  }
  /**
   *
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @returns {{r: (*|number), b: (*|number), s: number, g: (*|number), h: number, l: number}}
   */
  rgb(t, a, n) {
    t = Number.isInteger(t) ? t : Math.round(t * 255), a = Number.isInteger(a) ? a : Math.round(a * 255), n = Number.isInteger(n) ? t : Math.round(n * 255);
    let o = this.rgb2hsl(t, a, n);
    return {
      r: t,
      g: a,
      b: n,
      h: o[0],
      s: o[1],
      l: o[2]
    };
  }
  rgba(t, a, n, o) {
    t = Number.isInteger(t) ? t : Math.round(t * 255), a = Number.isInteger(a) ? a : Math.round(a * 255), n = Number.isInteger(n) ? n : Math.round(n * 255);
    let r = this.rgb2hsl(t, a, n);
    return {
      r: t,
      g: a,
      b: n,
      a: o ?? 1,
      h: r[0],
      s: r[1],
      l: r[2]
    };
  }
  hsl(t, a, n) {
    let o = this.hsl2rgb(t, a, n);
    return {
      r: o[0],
      g: o[1],
      b: o[2]
    };
  }
}
const J_ = {
  name: "ZmzColorpickerSlider",
  props: {
    /**
     * 绑定值
     */
    modelValue: {
      type: Number,
      default: 0
    },
    /**
     * 步长
     */
    step: {
      type: Number,
      default: 1
    },
    /**
     * 最小
     */
    min: {
      type: Number,
      default: 10
    },
    /**
     * 最大
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * 开始
     */
    startOn: {
      type: String,
      default: "left"
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(0), n = b(!0), o = b(null), r = z(() => {
      let m = {};
      return m[e.startOn] = a.value - 7 + "px", m;
    }), l = z({
      get() {
        return e.modelValue;
      },
      set(m) {
        t("update:modelValue", m);
      }
    });
    de(() => {
      let m = (l.value - e.min) / (e.max - e.min);
      a.value = o.value.offsetWidth * m;
    });
    const i = (m) => {
      m.button === 0 && (n.value = !1, c(m), window.addEventListener("mousemove", d), window.addEventListener("mouseup", s));
    }, s = () => {
      document.documentElement.style.cursor = "", n.value = !0, window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", s);
    }, d = (m) => {
      if (m.buttons === 0) {
        document.documentElement.style.cursor = "", n.value = !0, window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", s);
        return;
      }
      c(m);
    }, c = (m) => {
      let g = o.value.getBoundingClientRect(), h = m.clientX - g.left;
      h > o.value.offsetWidth && (h = o.value.offsetWidth), h < 0 && (h = 0), e.startOn === "right" && (h = o.value.offsetWidth - h), f(h);
    }, f = (m) => {
      if (a.value != m) {
        a.value = m;
        let g = m / o.value.offsetWidth;
        g = (e.max - e.min) * g + e.min;
        let h = 1, y = e.step.toString(), C = y.indexOf(".");
        C != -1 && (h = Math.pow(10, y.length - C - 1)), y = e.step * h, g = Math.round(g / e.step) * y / h, l.value = g, t("on-change", g);
      }
    };
    return {
      handleMouseDown: i,
      zmzColorpickerSliderPointStyle: r,
      zmzColorpickerSlider: o
    };
  }
}, eh = { class: "zmz-colorpicker__slider__bar" };
function th(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-colorpicker__slider",
    onMousedown: t[0] || (t[0] = (...l) => n.handleMouseDown && n.handleMouseDown(...l)),
    ref: "zmzColorpickerSlider"
  }, [
    u("div", eh, [
      N(e.$slots, "default")
    ]),
    u("div", {
      class: "zmz-colorpicker__slider__point",
      style: j([n.zmzColorpickerSliderPointStyle])
    }, null, 4)
  ], 544);
}
const nh = /* @__PURE__ */ H(J_, [["render", th]]), ah = {
  name: "ZmzColorpickerCanvas",
  props: {
    /**
     * 颜色
     */
    color: {
      type: Object,
      default: new Kl()
    },
    /**
     * 点
     */
    dot: {
      type: String,
      default: ""
    }
  },
  emits: ["on-change"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(null), l = b(), i = b(), s = b(!0), d = b(0), c = b(0), f = b(new Kl());
    de(() => {
      l.value = 250, i.value = 125, r.value = o.value.getContext("2d", { willReadFrequently: !0 }), o.value.width = l.value, o.value.height = i.value, S();
    });
    const m = z(() => ({ left: d.value + "px", top: c.value + "px" })), g = (p) => {
      p.button === 0 && (s.value = !1, C(p), window.addEventListener("mousemove", y), window.addEventListener("mouseup", h));
    }, h = () => {
      document.documentElement.style.cursor = "", s.value = !0, window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", h);
    }, y = (p) => {
      p.buttons === 1 ? C(p) : (document.documentElement.style.cursor = "", s.value = !0, window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", h));
    }, C = (p) => {
      let w = a.value.getBoundingClientRect(), O = p.clientX - w.left, x = p.clientY - w.top;
      O <= 0 && (O = 0), O >= w.width && (O = w.width), x < 0 && (x = 0), x > w.height && (x = w.height), d.value = O, c.value = x, k(O, x);
    }, k = (p, w) => {
      let O = f.value.COLORHUES[e.color.h], x = { r: 255, g: 255, b: 255 }, D = [O.r, O.g, O.b];
      if (p > 0 && p < l.value)
        D = r.value.getImageData(p, w, 1, 1).data;
      else {
        let M = 1 - w / i.value, R = p ? O : x;
        D[0] = Math.round(R.r * M), D[1] = Math.round(R.g * M), D[2] = Math.round(R.b * M);
      }
      t("on-change", ...D);
    }, S = () => {
      let p = e.color, w = f.value.COLORHUES[p.h], O = w.r > w.g ? "r" : "g";
      O = w[O] > w.b ? O : "b";
      let x = w.r < w.g ? "r" : "g";
      x = w.b < w[x] ? "b" : x;
      let D = 1 - p[O] / 255, M = 1 - p[x] / p[O];
      isNaN(M) && (M = 0), isNaN(D) && (D = 0), d.value = Math.round(l.value * M), c.value = Math.round(i.value * D), L();
    }, L = () => {
      let p = f.value.COLORHUES[e.color.h], w = l.value, O = i.value, x = { r: 255, g: 255, b: 255 }, D = p;
      for (let M = 0; M <= O; M++) {
        let R = r.value.createLinearGradient(0, 0, w, 1), B = (O - M) / O, F = Math.round(x.r * B), E = Math.round(x.g * B), T = Math.round(x.b * B);
        R.addColorStop(0, f.value.rgb2hex(F, E, T)), F = Math.round(D.r * B), E = Math.round(D.g * B), T = Math.round(D.b * B), R.addColorStop(1, f.value.rgb2hex(F, E, T)), r.value.fillStyle = R, r.value.fillRect(0, M, w, 1);
      }
    };
    return ue(
      e.color,
      () => {
        s.value && S();
      },
      { lazy: !0 }
    ), {
      zmzColorpickerBoardcolor: a,
      zmzColorpickerBoardcolorPoint: n,
      zmzColorpickerBoardcolorCanvas: o,
      zmzColorpickerBoardcolorPointStyle: m,
      handleMousedown: g
    };
  }
}, lh = {
  class: "zmz-colorpicker__boardcolor__canvas",
  ref: "zmzColorpickerBoardcolorCanvas"
};
function oh(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-colorpicker__boardcolor",
    ref: "zmzColorpickerBoardcolor",
    onMousedown: t[0] || (t[0] = (...l) => n.handleMousedown && n.handleMousedown(...l))
  }, [
    re(u("div", {
      class: "zmz-colorpicker__boardcolor__point",
      ref: "zmzColorpickerBoardcolorPoint",
      style: j([n.zmzColorpickerBoardcolorPointStyle])
    }, [...t[1] || (t[1] = [
      u("div", { class: "zmz-colorpicker__boardcolor__point__block" }, null, -1)
    ])], 4), [
      [Be, a.dot]
    ]),
    u("canvas", lh, null, 512)
  ], 544);
}
const rh = /* @__PURE__ */ H(ah, [["render", oh]]), ih = {
  name: "ZmzColorpickerPreset",
  props: {
    presetColor: {
      type: Array,
      default: () => []
    }
  },
  emits: ["on-change"],
  setup(e, { emit: t }) {
    return {
      handlePresetClick: (n) => {
        t("on-change", n);
      }
    };
  }
}, sh = { class: "zmz-colorpicker__presetcolor__lists" }, uh = ["onClick"];
function dh(e, t, a, n, o, r) {
  return v(), _("div", sh, [
    (v(!0), _(G, null, fe(a.presetColor, (l, i) => (v(), _("div", {
      class: "zmz-colorpicker__presetcolor__lists__item",
      key: i,
      onClick: (s) => n.handlePresetClick(l)
    }, [
      u("span", {
        class: "zmz-colorpicker__presetcolor__lists__item__span",
        style: j({ backgroundColor: l })
      }, null, 4)
    ], 8, uh))), 128))
  ]);
}
const ch = /* @__PURE__ */ H(ih, [["render", dh]]), Ql = (e, t) => {
  if (t == "rgb" || t == "rgba")
    if (/rgba?/.test(e)) {
      var a = e.split(",");
      if (a.length < 3) return "";
      e = "#";
      for (var n = 0, o; o = a[n++]; )
        if (n < 4)
          o = parseInt(o.replace(/[^\d]/gi, ""), 10).toString(16), e += o.length == 1 ? "0" + o : o;
        else {
          o = o.replace(")", "");
          var r = parseInt(o * 255), l = r.toString(16);
          e += l;
        }
      return e = e.toUpperCase(), e;
    } else
      return e;
  else if (t == "hsl" || t == "hsla")
    if (/hsla?/.test(e)) {
      const c = (p) => p.replaceAll(" ", "").replaceAll("&nbsp;", "").replaceAll("&nbsp;", ""), f = /hsla?\((\d+),*([\d.]+)%?,*([\d.]+)%?,*([\d.]+)?\)/g.exec(c(e)), m = parseInt(f[1]) / 360, g = parseInt(f[2]) / 100, h = parseInt(f[3]) / 100;
      let y = f[4];
      const C = (p, w, O) => (O < 0 && (O += 1), O > 1 && (O -= 1), O < 1 / 6 ? p + (w - p) * 6 * O : O < 1 / 2 ? w : O < 2 / 3 ? p + (w - p) * (2 / 3 - O) * 6 : p);
      let k, S, L;
      if (g == 0)
        k = S = L = h;
      else {
        const p = h < 0.5 ? h * (1 + g) : h + g - h * g, w = 2 * h - p;
        k = C(w, p, m + 1 / 3), S = C(w, p, m), L = C(w, p, m - 1 / 3);
      }
      var i = "";
      y != null ? i = `rgb(${Math.round(k * 255)},${Math.round(S * 255)},${Math.round(L * 255)}, ${y})` : i = `rgb(${Math.round(k * 255)},${Math.round(S * 255)},${Math.round(L * 255)})`;
      var s = i.split(",");
      if (s.length < 3) return "";
      var d = "#";
      for (let p = 0, w; w = s[p++]; )
        if (p < 4)
          w = parseInt(w.replace(/[^\d]/gi, ""), 10).toString(16), d += w.length == 1 ? "0" + w : w;
        else {
          w = w.replace(")", "");
          let x = parseInt(w * 255).toString(16);
          d += x;
        }
      return d = d.toUpperCase(), d;
    } else
      return e;
  else
    return e;
}, mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getColorConversion: Ql
}, Symbol.toStringTag, { value: "Module" })), fh = {
  name: "ZmzColorpicker",
  components: { ZmzColorpickerSlider: nh, ZmzColorpickerCanvas: rh, ZmzColorpickerPreset: ch, ZmzTeleportdom: Gt },
  props: {
    /**
     * 绑定值
     */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * 互联
     */
    strictly: {
      type: Boolean,
      default: !1
    },
    /**
     * 显示在输入框中的格式
     */
    format: {
      type: String,
      default: "hex"
    },
    /**
     * 是否显示预设
     */
    preset: {
      type: Boolean,
      default: !1
    },
    /**
     * 预设颜色
     */
    presetColor: {
      type: Array,
      default: () => [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B"
      ]
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读状态下是否启用默认文字
     */
    readonlyPrompt: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否显示透明度
     */
    alpha: {
      type: Boolean,
      default: !1
    },
    /**
     * 提示文字
     */
    promptText: {
      type: String,
      default: ""
    },
    /**
     * 提示文字颜色
     */
    promptTextColor: {
      type: String,
      default: ""
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !0
    },
    /**
     * 穿梭类名
     */
    teleportClass: {
      type: [Array, String],
      default: ""
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default() {
        return [0, 10];
      }
    },
    /**
     * 配置
     */
    popperOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 辅助三角
     */
    arrow: {
      type: Boolean,
      default: !0
    },
    /**
     * 弹出位置
     */
    placement: {
      type: String,
      default: "bottom"
    }
  },
  emits: ["update:modelValue", "on-input", "on-change", "on-blur", "on-close-before", "on-close", "on-close-after", "on-open-before", "on-open", "on-open-after"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(0), o = b(!0), r = b(null), l = b(null), i = b(null), s = be("zmzForm", {}), d = z(() => s && s.formSize ? s.formSize.value : ""), c = b(!1), f = b(Ql(e.modelValue, e.format)), m = b(new Kl(Ql(e.modelValue, e.format))), g = z({
      get() {
        if (e.modelValue)
          return V(e.modelValue, e.format);
      },
      set(Y) {
        ke.value || Ee.value || (t("update:modelValue", V(Y, e.format)), h.value && h.value.proxy.onValidate());
      }
    }), h = z(() => Pe(a, "ZmzFormItem")), y = z(() => e.format == "rgba" || e.format == "hsla"), C = z(() => {
      let Y = {};
      return e.promptTextColor ? Y.color = e.promptTextColor : Y.color = g.value, Y;
    }), k = z(() => {
      let Y = [];
      return ke.value && Y.push("zmz-colorpicker--disabled"), Ee.value && Y.push("zmz-colorpicker--readonly"), (d.value || e.size) && Y.push(`zmz-colorpicker--size-${d.value || e.size}`), Y;
    }), S = z(() => {
      let Y = {};
      return g.value ? Y.background = g.value : (Y.background = "#ffffff", Y.color = "#000"), Y;
    }), L = z(() => {
      let Y = "zmz-icon--wrong";
      return g.value && (Y = "zmz-icon--check"), Y;
    }), p = () => {
    }, w = (Y) => {
      let ce = Y.target.value;
      O(g.value) && (m.value.fromHex(ce), t("on-blur", ce));
    }, O = (Y) => {
      let ce = "";
      /^rgb\(/.test(Y) ? ce = "^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$" : /^rgba\(/.test(Y) ? ce = "^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$" : /^#/.test(Y) ? ce = "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$" : /^hsl\(/.test(Y) ? ce = "^[hH][Ss][Ll][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[)]$" : /^hsla\(/.test(Y) && (ce = "^[hH][Ss][Ll][Aa][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[)]$");
      let Ae = new RegExp(ce);
      return !(Y && Y.match(Ae) == null);
    }, x = (Y) => {
      r.value && !r.value.contains(Y.target) && c.value == !0 && (c.value = !1);
    }, D = (Y) => {
      e.strictly ? (Y ? f.value = Y : f.value = m.value.toHex(), g.value = m.value.toHex()) : Y ? f.value = Y : f.value = m.value.toHex(), Y ? t("on-change", Y) : t("on-change", m.value.toHex());
    }, M = (Y, ce, Ae) => {
      let $e = m.value.rgb2hsl(Y, ce, Ae);
      Object.assign(m.value, { r: Y, g: ce, b: Ae, h: m.value.h, s: $e[1], l: $e[2] }), D();
    }, R = () => {
      m.value.fromHSL(), D();
    }, B = () => {
      D();
    }, F = (Y) => {
      m.value.fromHex(Y), D(Y);
    }, E = () => {
      o.value = !o.value;
    }, T = () => {
      m.value.fromRGB(), D();
    }, I = () => {
      m.value.fromHSL(), D();
    }, V = (Y, ce) => Y ? ce == "rgba" ? `rgba(${m.value.r},${m.value.g},${m.value.b},${m.value.a})` : ce == "rgb" ? `rgb(${m.value.r},${m.value.g},${m.value.b})` : ce == "hsla" ? `hsla(${m.value.h},${m.value.s}%,${m.value.l}%,${m.value.a})` : ce == "hsl" ? `hsl(${m.value.h},${m.value.s}%,${m.value.l}%)` : ce == "hex" ? m.value.toHex() : "" : "", W = z(() => ({
      background: `linear-gradient(to left, rgba(${m.value.r},${m.value.g},${m.value.b},1), rgba(${m.value.r},${m.value.g},${m.value.b},0))`
    })), $ = z(() => ({ background: `linear-gradient(to left, rgb(0,${m.value.g},${m.value.b}), rgb(255,${m.value.g},${m.value.b}))` })), X = z(() => ({ background: `linear-gradient(to left, rgb(${m.value.r},0,${m.value.b}), rgb(${m.value.r},255,${m.value.b}))` })), ee = z(() => ({ background: `linear-gradient(to left, rgb(${m.value.r},${m.value.g},0), rgb(${m.value.r},${m.value.g},255))` })), J = () => {
      ke.value || Ee.value || (c.value = !c.value);
    }, q = () => {
      c.value = !1, g.value = "", f.value = "";
    }, ve = () => {
      g.value = f.value, c.value = !1;
    }, se = () => {
      t("on-close-before");
    }, he = () => {
      t("on-close");
    }, ye = () => {
      t("on-close-after");
    }, Te = () => {
      t("on-open-before");
    }, De = () => {
      t("on-open");
    }, ge = () => {
      t("on-open-after");
    }, Q = z(() => ["zmz-teleportdom--colorpicker"]), ke = z(() => s && s.disabled ? s.disabled : e.disabled), Ee = z(() => s && s.readonly ? s.readonly : e.readonly);
    return {
      handleHex: p,
      handleCanvas: M,
      handleHue: R,
      handleAlpha: B,
      handlePreset: F,
      handlePresetSwitch: E,
      handleRgb: T,
      changeFromHSL: I,
      alphaStyle: W,
      sliderRStyle: $,
      sliderGStyle: X,
      sliderBStyle: ee,
      COLOR: m,
      hue: n,
      material: o,
      colorBlockStyle: S,
      colorBlockClass: L,
      handleClick: J,
      currentVisible: c,
      model: g,
      handleInputBlur: w,
      inputColor: f,
      handleCancel: q,
      handleConfirm: ve,
      isOpacity: y,
      zmzColorpickerClass: k,
      promptTextColorStyle: C,
      zmzColorpicker: r,
      bodyCloseMenus: x,
      handleAfterLeave: ye,
      handleLeave: he,
      handleBeforeLeave: se,
      handleAfterEnter: ge,
      handleEnter: De,
      handleBeforeEnter: Te,
      zmzColorpickerContainer: l,
      zmzColorpickerWrap: i,
      zmzTeleportdomClass: Q
    };
  }
}, vh = { class: "zmz-colorpicker__color" }, zh = {
  class: "zmz-colorpicker__dropdown",
  ref: "zmzColorpickerContainer"
}, _h = { class: "zmz-colorpicker__palette" }, hh = { class: "zmz-colorpicker__palette__wrap" }, gh = {
  class: "zmz-colorpicker__palette__barcolor",
  ref: "barcolor"
}, yh = {
  key: 0,
  class: "zmz-colorpicker__palette__opacitys"
}, ph = {
  key: 0,
  class: "zmz-colorpicker__presetcolor"
}, bh = { class: "zmz-colorpicker__presetcolor__wrap" }, kh = {
  key: 1,
  class: "zmz-colorpicker__presetcolor__rgb"
}, Ch = { class: "zmz-colorpicker__presetcolor__switchs" }, wh = { class: "zmz-colorpicker__databoard" }, Sh = { class: "zmz-colorpicker__databoard__inputs" }, xh = { class: "zmz-colorpicker__databoard__btngroup" };
function Th(e, t, a, n, o, r) {
  const l = oe("zmz-colorpicker-canvas"), i = oe("zmz-colorpicker-slider"), s = oe("zmz-colorpicker-preset"), d = oe("zmz-teleportdom"), c = qt("zmzclickoutside");
  return re((v(), _("div", {
    class: P(["zmz-colorpicker", [n.zmzColorpickerClass]]),
    ref: "zmzColorpicker"
  }, [
    u("div", {
      class: "zmz-colorpicker__wrap",
      onClick: t[0] || (t[0] = (...f) => n.handleClick && n.handleClick(...f)),
      ref: "zmzColorpickerWrap"
    }, [
      u("div", vh, [
        u("div", {
          class: P(["zmz-colorpicker__color__block", [n.colorBlockClass]]),
          style: j([n.colorBlockStyle])
        }, null, 6)
      ])
    ], 512),
    e.$slots.default || a.promptText ? (v(), _("div", {
      key: 0,
      class: "zmz-colorpicker__text",
      style: j([n.promptTextColorStyle])
    }, [
      e.$slots.default && !a.promptText || e.$slots.default && a.promptText ? N(e.$slots, "default", { key: 0 }) : A("", !0),
      !e.$slots.default && a.promptText ? (v(), _(G, { key: 1 }, [
        ne(Z(a.promptText), 1)
      ], 64)) : A("", !0),
      !e.$slots.default && !a.promptText && a.readonly && a.readonlyPrompt ? (v(), _(G, { key: 2 }, [
        ne(Z(n.model), 1)
      ], 64)) : A("", !0)
    ], 4)) : A("", !0),
    K(d, {
      arrow: a.arrow,
      "teleport-dom": a.teleportDom,
      "parent-ref": n.zmzColorpicker,
      visible: n.currentVisible,
      placement: a.placement,
      teleport: a.teleport,
      "class-name": [n.zmzTeleportdomClass, a.teleportClass],
      offset: a.offset,
      "popper-options": a.popperOptions,
      "transition-name": "zmz-fold-top",
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }, {
      default: le(() => [
        u("div", zh, [
          u("div", _h, [
            u("div", hh, [
              K(l, {
                dot: a.modelValue,
                color: n.COLOR,
                onOnChange: n.handleCanvas
              }, null, 8, ["dot", "color", "onOnChange"])
            ]),
            u("div", gh, [
              K(i, {
                max: 360,
                min: 0,
                modelValue: n.COLOR.h,
                "onUpdate:modelValue": t[1] || (t[1] = (f) => n.COLOR.h = f),
                "start-on": "right",
                onOnChange: n.handleHue
              }, {
                default: le(() => [...t[12] || (t[12] = [
                  u("div", { class: "zmz-colorpicker__slider__color" }, null, -1)
                ])]),
                _: 1
              }, 8, ["modelValue", "onOnChange"])
            ], 512),
            n.isOpacity && a.alpha ? (v(), _("div", yh, [
              K(i, {
                class: "zmz-colorpicker__slider--alpha slider",
                max: 1,
                min: 0,
                modelValue: n.COLOR.a,
                "onUpdate:modelValue": t[2] || (t[2] = (f) => n.COLOR.a = f),
                onOnChange: n.handleAlpha,
                step: 0.01
              }, {
                default: le(() => [
                  u("div", {
                    style: j([{ width: "100%", height: "100%" }, [n.alphaStyle]])
                  }, null, 4)
                ]),
                _: 1
              }, 8, ["modelValue", "onOnChange"])
            ])) : A("", !0)
          ]),
          a.preset ? (v(), _("div", ph, [
            u("div", bh, [
              n.material ? (v(), pe(s, {
                key: 0,
                presetColor: a.presetColor,
                onOnChange: n.handlePreset
              }, null, 8, ["presetColor", "onOnChange"])) : (v(), _("div", kh, [
                K(i, {
                  modelValue: n.COLOR.r,
                  "onUpdate:modelValue": t[3] || (t[3] = (f) => n.COLOR.r = f),
                  "start-on": "right",
                  onOnChange: n.handleRgb,
                  max: 255,
                  min: 0
                }, {
                  default: le(() => [
                    u("div", {
                      class: "zmz-colorpicker__slider__bar__bg",
                      style: j([n.sliderRStyle])
                    }, null, 4)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onOnChange"]),
                K(i, {
                  modelValue: n.COLOR.g,
                  "onUpdate:modelValue": t[4] || (t[4] = (f) => n.COLOR.g = f),
                  "start-on": "right",
                  onOnChange: n.handleRgb,
                  max: 255,
                  min: 0
                }, {
                  default: le(() => [
                    u("div", {
                      class: "zmz-colorpicker__slider__bar__bg",
                      style: j([n.sliderGStyle])
                    }, null, 4)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onOnChange"]),
                K(i, {
                  modelValue: n.COLOR.b,
                  "onUpdate:modelValue": t[5] || (t[5] = (f) => n.COLOR.b = f),
                  "start-on": "right",
                  onOnChange: n.handleRgb,
                  max: 255,
                  min: 0
                }, {
                  default: le(() => [
                    u("div", {
                      class: "zmz-colorpicker__slider__bar__bg",
                      style: j([n.sliderBStyle])
                    }, null, 4)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onOnChange"])
              ]))
            ]),
            u("div", Ch, [
              (v(), _("svg", {
                width: "20",
                height: "22",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: t[6] || (t[6] = (...f) => n.handlePresetSwitch && n.handlePresetSwitch(...f))
              }, [...t[13] || (t[13] = [
                u("polygon", {
                  points: "7,8 13,8 10,4",
                  style: { fill: "#000" }
                }, null, -1),
                u("polygon", {
                  points: "7,13 13,13 10,17",
                  style: { fill: "#000" }
                }, null, -1)
              ])]))
            ])
          ])) : A("", !0),
          u("div", wh, [
            u("div", Sh, [
              re(u("input", {
                class: "zmz-colorpicker__databoard__inputs__inner",
                type: "text",
                "onUpdate:modelValue": t[7] || (t[7] = (f) => n.inputColor = f),
                onChange: t[8] || (t[8] = (...f) => n.handleHex && n.handleHex(...f)),
                onBlur: t[9] || (t[9] = (...f) => n.handleInputBlur && n.handleInputBlur(...f))
              }, null, 544), [
                [Oe, n.inputColor]
              ])
            ]),
            u("div", xh, [
              u("div", {
                class: "zmz-colorpicker__databoard__btngroup__cancel",
                onClick: t[10] || (t[10] = (...f) => n.handleCancel && n.handleCancel(...f))
              }, "清空"),
              u("div", {
                class: "zmz-colorpicker__databoard__btngroup__confirm",
                onClick: t[11] || (t[11] = (...f) => n.handleConfirm && n.handleConfirm(...f))
              }, "确定")
            ])
          ])
        ], 512)
      ]),
      _: 1
    }, 8, ["arrow", "teleport-dom", "parent-ref", "visible", "placement", "teleport", "class-name", "offset", "popper-options", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])
  ], 2)), [
    [c, n.bodyCloseMenus]
  ]);
}
const La = /* @__PURE__ */ H(fh, [["render", Th]]);
La.install = function(e) {
  e.component(La.name, La);
};
const Oh = {
  name: "ZmzSliderDot",
  props: {
    /**
     * 绑定
     */
    modelValue: {
      type: [Number, String, Array],
      default: 0
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 节点
     */
    eldom: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 模式
     */
    vertical: {
      type: Boolean,
      default: !1
    },
    /**
     * 步长
     */
    step: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(!1), o = b(null), r = b(0), l = b(0), i = b(0), s = z({
      get() {
        return e.modelValue;
      },
      set(C) {
        t("update:modelValue", C);
      }
    }), d = () => {
      n.value = !1;
    }, c = () => {
      n.value = !0;
    }, f = (C) => {
      if (e.disabled || e.readonly) return;
      C.stopPropagation && C.stopPropagation(), C.preventDefault && C.preventDefault();
      let k = C.target.getBoundingClientRect();
      e.vertical ? l.value = C.pageY - k.top : r.value = C.pageX - k.left, a.value = !0, window.addEventListener("mousemove", g), window.addEventListener("mouseup", m), window.addEventListener("mouseleave", m);
    }, m = () => {
      a.value = !1;
    }, g = (C) => {
      if (a.value) {
        let k = e.eldom.getBoundingClientRect();
        if (e.vertical) {
          let S = C.pageY - l.value - k.top;
          i.value = S / k.height * 100;
        } else {
          let S = C.pageX - r.value - k.left;
          i.value = S / k.width * 100;
        }
        i.value <= 0 ? i.value = 0 : i.value >= 100 && (i.value = 100), s.value = Math.round(i.value), t("on-change", Math.round(i.value));
      }
    };
    Ze(() => {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", m), window.removeEventListener("mouseleave", m);
    });
    const h = z(() => {
      let C = [];
      return n.value && !e.disabled && !e.readonly && C.push("zmz-slider__block--hover"), C;
    }), y = z(() => {
      let C = {};
      return e.vertical ? C.top = s.value + "%" : C.left = s.value + "%", C;
    });
    return {
      zmzSliderBlock: o,
      handleMousedown: f,
      isHover: n,
      handleMouseLeave: d,
      handleMouseEnter: c,
      model: s,
      zmzSliderBlockClass: h,
      zmzSliderBlockStyle: y
    };
  }
};
function Lh(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-slider__block", [n.zmzSliderBlockClass]]),
    ref: "zmzSliderBlock",
    onMousedown: t[0] || (t[0] = _e((...l) => n.handleMousedown && n.handleMousedown(...l), ["stop"])),
    onMouseenter: t[1] || (t[1] = (...l) => n.handleMouseEnter && n.handleMouseEnter(...l)),
    onMouseleave: t[2] || (t[2] = (...l) => n.handleMouseLeave && n.handleMouseLeave(...l)),
    onFocus: t[3] || (t[3] = (...l) => n.handleMouseEnter && n.handleMouseEnter(...l)),
    onBlur: t[4] || (t[4] = (...l) => n.handleMouseLeave && n.handleMouseLeave(...l)),
    style: j([n.zmzSliderBlockStyle])
  }, [...t[5] || (t[5] = [
    u("div", { class: "zmz-slider__block__dot" }, null, -1)
  ])], 38);
}
const Dh = /* @__PURE__ */ H(Oh, [["render", Lh]]), Mh = {
  name: "ZmzSlider",
  components: {
    ZmzSliderDot: Dh
  },
  props: {
    /**
     * 最大值
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: 0
    },
    /**
     * 步长
     */
    step: {
      type: Number,
      default: 2
    },
    /**
     * 范围
     */
    range: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定
     */
    modelValue: {
      type: [Number, String, Array],
      default: 0
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 模式
     */
    vertical: {
      type: Boolean,
      default: !1
    },
    /**
     * 高度
     */
    height: {
      type: [Number, String],
      default: ""
    }
  },
  emits: ["on-change", "rightValue", "update:modelValue"],
  setup(e, { emit: t }) {
    const { findParent: a, getValueSuffix: n } = Ut(), { parent: o } = Ce(), r = b(null), l = b(0), i = b(0), s = b(null), d = b(null), c = be("zmzForm", {}), f = z(() => c && c.size ? c.size.value : ""), m = z({
      get() {
        return e.modelValue;
      },
      set(w) {
        L.value || p.value || (t("update:modelValue", w), g.value && g.value.proxy.onValidate());
      }
    }), g = z(() => a(o, "ZmzFormItem"));
    ue(
      () => l.value,
      (w) => {
        e.range ? i.value > l.value ? m.value = [Math.round(w), Math.round(i.value)] : m.value = [Math.round(i.value), Math.round(w)] : m.value = Math.round(w);
      }
    ), ue(
      () => i.value,
      (w) => {
        i.value > l.value ? m.value = [Math.round(l.value), Math.round(w)] : m.value = [Math.round(w), Math.round(l.value)];
      }
    ), ue(
      () => m.value,
      (w) => {
        e.range ? i.value > l.value ? (l.value = w[0], i.value = w[1]) : (l.value = w[1], i.value = w[0]) : l.value = w;
      }
    );
    const h = (w) => {
      t("on-change", w);
    };
    de(() => {
      e.range ? (l.value = Math.round(m.value[0]), i.value = Math.round(m.value[1])) : l.value = Math.round(m.value);
    });
    const y = z(() => {
      let w = {};
      return e.vertical ? e.range ? i.value > l.value ? (w.height = i.value - l.value + "%", w.top = l.value + "%") : (w.height = l.value - i.value + "%", w.top = i.value + "%") : (w.top = "0%", w.height = l.value + "%") : e.range ? i.value > l.value ? (w.width = i.value - l.value + "%", w.left = l.value + "%") : (w.width = l.value - i.value + "%", w.left = i.value + "%") : (w.left = "0%", w.width = l.value + "%"), w;
    }), C = (w) => {
      if (L.value || p.value) return;
      let O = r.value.getBoundingClientRect();
      if (e.range) {
        let x = s.value.$el.getBoundingClientRect(), D = d.value.$el.getBoundingClientRect();
        e.vertical ? x.top < D.top ? w.pageY - x.top < (D.top - x.top) / 2 ? l.value = (w.pageY - O.top) / O.height * 100 : i.value = (w.pageY - O.top) / O.height * 100 : w.pageY - D.top < (x.top - D.top) / 2 ? i.value = (w.pageY - O.top) / O.height * 100 : l.value = (w.pageY - O.top) / O.height * 100 : x.left < D.left ? w.pageX - x.left < (D.left - x.left) / 2 ? l.value = (w.pageX - O.left) / O.width * 100 : i.value = (w.pageX - O.left) / O.width * 100 : w.pageX - D.left < (x.left - D.left) / 2 ? i.value = (w.pageX - O.left) / O.width * 100 : l.value = (w.pageX - O.left) / O.width * 100;
      } else if (e.vertical) {
        let x = (w.pageY - O.top) / O.height * 100;
        m.value = x, l.value = x;
      } else {
        let x = (w.pageX - O.left) / O.width * 100;
        m.value = x, l.value = x;
      }
    }, k = z(() => {
      let w = [], O = f.value || e.size;
      return O && w.push(`zmz-slider--size-${O}`), L.value && w.push("zmz-slider--disabled"), p.value && w.push("zmz-slider--readonly"), e.vertical && w.push("zmz-slider--vertical"), w;
    }), S = z(() => {
      let w = {};
      return e.height && (w.height = n(e.height)), w;
    }), L = z(() => c && c.disabled ? c.disabled : e.disabled), p = z(() => c && c.readonly ? c.readonly : e.readonly);
    return {
      zmzSlider: r,
      handleClick: C,
      model: m,
      leftValue: l,
      rightValue: i,
      lineStyle: y,
      zmzLeftDot: s,
      zmzRightDot: d,
      zmzSliderClass: k,
      zmzSliderStyle: S,
      onChange: h,
      globalFromDisabled: L,
      globalFromReadonly: p
    };
  }
};
function Eh(e, t, a, n, o, r) {
  const l = oe("zmz-slider-dot");
  return v(), _("div", {
    class: P(["zmz-slider", [n.zmzSliderClass]]),
    ref: "zmzSlider",
    style: j([n.zmzSliderStyle])
  }, [
    u("div", {
      class: "zmz-slider__line",
      onClick: t[0] || (t[0] = (...i) => n.handleClick && n.handleClick(...i))
    }, [
      u("div", {
        class: "zmz-slider__line__bar",
        style: j([n.lineStyle])
      }, null, 4)
    ]),
    K(l, {
      ref: "zmzLeftDot",
      step: a.step,
      disabled: n.globalFromDisabled,
      readonly: n.globalFromReadonly,
      eldom: n.zmzSlider,
      vertical: a.vertical,
      modelValue: n.leftValue,
      "onUpdate:modelValue": t[1] || (t[1] = (i) => n.leftValue = i),
      onOnChange: n.onChange
    }, null, 8, ["step", "disabled", "readonly", "eldom", "vertical", "modelValue", "onOnChange"]),
    a.range ? (v(), pe(l, {
      key: 0,
      ref: "zmzRightDot",
      step: a.step,
      disabled: n.globalFromDisabled,
      readonly: n.globalFromReadonly,
      eldom: n.zmzSlider,
      vertical: a.vertical,
      modelValue: n.rightValue,
      "onUpdate:modelValue": t[2] || (t[2] = (i) => n.rightValue = i),
      onOnChange: n.onChange
    }, null, 8, ["step", "disabled", "readonly", "eldom", "vertical", "modelValue", "onOnChange"])) : A("", !0)
  ], 6);
}
const on = /* @__PURE__ */ H(Mh, [["render", Eh]]);
on.install = function(e) {
  e.component(on.name, on);
};
function Bh(e, t) {
  for (let a = 0; a < t.length; a++)
    if (e === t[a])
      return !0;
  return !1;
}
const Jl = (e, t, a, n) => {
  let o;
  return (...l) => {
    if (clearTimeout(o), n) {
      let i = !o;
      o = setTimeout(() => {
        o = null;
      }, t), i && e.apply(a, l);
    } else
      o = setTimeout(() => {
        e.apply(a, l);
      }, t);
  };
}, Ih = (e) => (e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1, !1), eo = (e, t) => Object.prototype.toString.call(e) === "[object Array]" && t == "Array" || Object.prototype.toString.call(e) === "[object Number]" && t == "Number" || Object.prototype.toString.call(e) === "[object String]" && t == "String" || Object.prototype.toString.call(e) === "[object Boolean]" && t == "Boolean" || Object.prototype.toString.call(e) === "[object Object]" && t == "Object" ? !0 : Object.prototype.toString.call(e) === "[object Null]" && t == "Null", Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  debounce: Jl,
  included: Bh,
  pauseEvent: Ih,
  typeJudgment: eo
}, Symbol.toStringTag, { value: "Module" })), Ph = {
  name: "ZmzRate",
  props: {
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: [Number, String],
      default: 0
    },
    /**
     * 最大值
     */
    maxCount: {
      type: [Number, String],
      default: 5
    },
    /**
     * 最小阈值
     */
    minThreshold: {
      type: [Number, String],
      default: 2
    },
    /**
     * 最大阈值
     */
    maxThreshold: {
      type: [Number, String],
      default: 4
    },
    /**
     * 渐变颜色组
     */
    colors: {
      type: [Array, Object],
      default: () => []
    },
    /**
     * 每颗星提示文字
     */
    promptText: {
      type: [Array, Object],
      default: () => []
    },
    /**
     * 提示文字颜色
     */
    promptTextColor: {
      type: String,
      default: ""
    },
    /**
     * 默认底色
     */
    bottomColor: {
      type: String,
      default: "#e8e8e8"
    },
    /**
     * 默认选中颜色
     */
    selectColor: {
      type: String,
      default: "#fadb14"
    },
    /**
     * 是否显示分数
     */
    scores: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否半颗
     */
    allowHalf: {
      type: Boolean,
      default: !1
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(e.modelValue), o = b(e.promptText), r = b(e.allowHalf), l = be("zmzForm", {}), i = z(() => l && l.size ? l.size.value : ""), s = z({
      get() {
        return Number(e.modelValue);
      },
      set(D) {
        x.value || O.value || t("update:modelValue", D);
      }
    }), d = (D) => {
      x.value || O.value || (n.value = D + 1, t("on-change", n.value), Pe(a, "ZmzFormItem") && Pe(a, "ZmzFormItem").proxy.onValidate());
    }, c = (D) => {
      const M = D + 1;
      let R = "";
      return r.value && s.value + 0.5 >= M && s.value < M || x.value && s.value + 0.5 >= M && s.value < M ? R += " zmz-rate__item--half zmz-rate__item--active" : R += M <= s.value ? " zmz-rate__item--full" : " zmz-rate__item--zero", R;
    }, f = () => ({
      color: S.value
    }), m = () => {
      let D = "";
      return x.value ? D = `${g.value}%` : r.value && (D = "50%"), {
        width: D
      };
    }, g = z(() => s.value * 100 - Math.floor(s.value) * 100), h = (D, M) => {
      x.value || O.value || (r.value ? M == "half" ? s.value = D + 0.5 : M == "full" && (s.value = D + 1) : s.value = D + 1);
    }, y = (D) => {
      x.value || O.value || (n.value > 0 ? s.value = n.value : D == 0 ? s.value = 0 : s.value = D + 1);
    }, C = z(() => {
      if (e.scores)
        return s.value;
      {
        let D = Math.floor(s.value - 1);
        return o.value[D];
      }
    }), k = z(() => ({ color: e.promptTextColor })), S = z(() => {
      if (e.colors.length || Object.keys(e.colors).length !== 0) {
        const D = Object.keys(p.value).filter((R) => {
          const B = p.value[R];
          return (eo(B, "Object") ? B.excluded : !1) ? s.value < R : s.value <= R;
        }).sort((R, B) => R - B), M = p.value[D[0]];
        return eo(M, "Object") ? M.value : M || "";
      } else
        return e.selectColor;
    }), L = (D) => ({
      color: D + 1 <= s.value ? S.value : e.bottomColor
    }), p = z(() => Array.isArray(e.colors) ? {
      [e.minThreshold]: e.colors[0],
      [e.maxThreshold]: e.colors[1],
      [e.maxCount]: e.colors[2]
    } : e.colors), w = z(() => {
      let D = [];
      return (i.value || e.size) && D.push(`zmz-rate--size-${i.value || e.size}`), x.value && D.push("zmz-rate--readonly"), O.value && D.push("zmz-rate--disabled"), D;
    }), O = z(() => l && l.disabled ? l.disabled : e.disabled), x = z(() => l && l.readonly ? l.readonly : e.readonly);
    return {
      model: s,
      handleMouseenter: h,
      handleMouseleave: y,
      current: n,
      handleClick: d,
      iconStyle: L,
      promptTextTitle: C,
      zmzRatePromptextStyle: k,
      itemClass: c,
      decimalStyle: f,
      decimalFirstStyle: m,
      zmzRateClass: w
    };
  }
}, Nh = ["onClick"], Vh = ["onMouseleave", "onMouseenter"], Fh = { class: "zmz-rate__item__second" }, Rh = ["onMouseleave", "onMouseenter"];
function Zh(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-rate", [n.zmzRateClass]])
  }, [
    (v(!0), _(G, null, fe(a.maxCount, (l, i) => (v(), _("div", {
      class: P(["zmz-rate__item", [{ "zmz-rate__item--active": i + 1 <= n.model }, n.itemClass(i)]]),
      onClick: (s) => n.handleClick(i),
      key: i
    }, [
      u("div", {
        class: "zmz-rate__item__first",
        style: j([n.decimalFirstStyle()])
      }, [
        u("i", {
          class: "zmz-rate__icon zmz-icon--stars",
          style: j([n.decimalStyle(i)]),
          onMouseleave: (s) => n.handleMouseleave(i),
          onMouseenter: (s) => n.handleMouseenter(i, "half")
        }, null, 44, Vh)
      ], 4),
      u("div", Fh, [
        u("i", {
          class: "zmz-rate__icon zmz-icon--stars",
          style: j([n.iconStyle(i)]),
          onMouseleave: (s) => n.handleMouseleave(i),
          onMouseenter: (s) => n.handleMouseenter(i, "full")
        }, null, 44, Rh)
      ])
    ], 10, Nh))), 128)),
    u("div", {
      class: "zmz-rate__promptext",
      style: j([n.zmzRatePromptextStyle])
    }, Z(n.promptTextTitle), 5)
  ], 2);
}
const Da = /* @__PURE__ */ H(Ph, [["render", Zh]]);
Da.install = function(e) {
  e.component(Da.name, Da);
};
const Wh = {
  name: "ZmzTransfer",
  components: {
    ZmzInput: _t
  },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    titles: Array,
    format: Object,
    fieldAlias: Object,
    filterMethod: Function,
    emptyText: String,
    searchEmptyText: String,
    searchPlaceholder: String,
    search: Boolean,
    searchMethod: Function,
    disabled: Boolean,
    readonly: Boolean,
    leftDefaultChecked: Array,
    rightDefaultChecked: Array,
    insert: String
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b([]), o = b(""), r = z({
      get() {
        return e.modelValue;
      },
      set(g) {
        t("update:modelValue", g), t("on-change", g);
      }
    }), l = z(() => r.value.length > 0 && r.value.length < i.value.length), i = z(() => d.value.filter((g) => !g[e.fieldAlias.disabled])), s = z(() => d.value.length), d = z(() => e.data.filter((g) => typeof e.filterMethod == "function" ? e.filterMethod(o.value, g) : (g[e.fieldAlias.label] || g[e.fieldAlias.key].toString()).toLowerCase().indexOf(o.value.toLowerCase()) > -1)), c = (g) => {
      r.value = g;
      let h = g.length;
      a.value = h === i.value.length, t("on-change", g);
    }, f = z(() => r.value.length);
    return {
      dataTotal: s,
      selectedTotal: f,
      checkboxGroupOnChange: c,
      checkedList: n,
      handleAllCheckedChange: (g) => {
        i.value.length == 0 && (a.value = !1), l.value && (a.value = !0), r.value = g ? d.value.map((h) => {
          if (!h[e.fieldAlias.disabled])
            return h[e.fieldAlias.key];
        }).filter(function(h) {
          return h;
        }) : [];
      },
      isAllChecked: a,
      filteredData: d,
      model: r,
      searchQuery: o,
      semiselection: l
    };
  }
}, $h = { class: "zmz-transfer__panel" }, jh = { class: "zmz-transfer__panel__header" }, Hh = { class: "zmz-transfer__panel__header__checkbox" }, Yh = { class: "zmz-transfer__panel__header__total" }, qh = { class: "zmz-transfer__panel__bodyer" }, Uh = {
  key: 1,
  class: "zmz-transfer__panel__bodyer__empty"
}, Gh = {
  key: 0,
  class: "zmz-transfer__panel__footer"
};
function Xh(e, t, a, n, o, r) {
  const l = oe("zmz-checkbox"), i = oe("zmz-input"), s = oe("zmz-checkbox-group");
  return v(), _("div", $h, [
    u("div", jh, [
      u("div", Hh, [
        K(l, {
          modelValue: n.isAllChecked,
          "onUpdate:modelValue": t[0] || (t[0] = (d) => n.isAllChecked = d),
          semiselection: n.semiselection,
          onOnChange: n.handleAllCheckedChange,
          disabled: a.disabled,
          readonly: a.readonly
        }, {
          default: le(() => [
            e.$slots.rightTitle ? N(e.$slots, "rightTitle", { key: 0 }) : A("", !0),
            e.$slots.leftTitle ? N(e.$slots, "leftTitle", { key: 1 }) : A("", !0),
            !e.$slots.rightTitle && !e.$slots.leftTitle ? (v(), _(G, { key: 2 }, [
              ne(Z(a.title), 1)
            ], 64)) : A("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "semiselection", "onOnChange", "disabled", "readonly"])
      ]),
      u("div", Yh, [
        e.$slots.leftCount ? N(e.$slots, "leftCount", {
          key: 0,
          selectedtotal: n.selectedTotal,
          datatotal: n.dataTotal
        }) : A("", !0),
        e.$slots.rightCount ? N(e.$slots, "rightCount", {
          key: 1,
          selectedtotal: n.selectedTotal,
          datatotal: n.dataTotal
        }) : A("", !0),
        !e.$slots.leftCount && !e.$slots.rightCount ? (v(), _(G, { key: 2 }, [
          ne(Z(n.selectedTotal) + "/" + Z(n.dataTotal), 1)
        ], 64)) : A("", !0)
      ])
    ]),
    u("div", qh, [
      a.search ? (v(), pe(i, {
        key: 0,
        type: "text",
        modelValue: n.searchQuery,
        "onUpdate:modelValue": t[1] || (t[1] = (d) => n.searchQuery = d),
        size: "mini",
        disabled: a.disabled,
        readonly: a.readonly,
        class: "zmz-transfer__panel__bodyer__search",
        placeholder: a.searchPlaceholder
      }, null, 8, ["modelValue", "disabled", "readonly", "placeholder"])) : A("", !0),
      K(s, {
        modelValue: n.model,
        "onUpdate:modelValue": t[2] || (t[2] = (d) => n.model = d),
        onOnChange: n.checkboxGroupOnChange,
        disabled: a.disabled,
        readonly: a.readonly
      }, {
        default: le(() => [
          (v(!0), _(G, null, fe(n.filteredData, (d, c) => (v(), pe(l, {
            class: "zmz-transfer__panel__bodyer__item",
            disabled: d[a.fieldAlias.disabled],
            key: c,
            label: d.label,
            value: d[a.fieldAlias.key]
          }, {
            default: le(() => [
              e.$slots.leftLabel ? N(e.$slots, "leftLabel", {
                key: 0,
                item: d
              }) : A("", !0),
              e.$slots.rightLabel ? N(e.$slots, "rightLabel", {
                key: 1,
                item: d
              }) : A("", !0),
              !e.$slots.leftLabel && !e.$slots.rightLabel ? (v(), _(G, { key: 2 }, [
                ne(Z(d.label), 1)
              ], 64)) : A("", !0)
            ]),
            _: 2
          }, 1032, ["disabled", "label", "value"]))), 128))
        ]),
        _: 3
      }, 8, ["modelValue", "onOnChange", "disabled", "readonly"]),
      n.filteredData.length == 0 ? (v(), _("div", Uh, [
        n.searchQuery ? (v(), _(G, { key: 0 }, [
          ne(Z(a.searchEmptyText), 1)
        ], 64)) : (v(), _(G, { key: 1 }, [
          ne(Z(a.emptyText), 1)
        ], 64))
      ])) : A("", !0)
    ]),
    e.$slots.leftFooter || e.$slots.rightFooter ? (v(), _("div", Gh, [
      e.$slots.leftFooter ? N(e.$slots, "leftFooter", { key: 0 }) : A("", !0),
      e.$slots.rightFooter ? N(e.$slots, "rightFooter", { key: 1 }) : A("", !0)
    ])) : A("", !0)
  ]);
}
const Kh = /* @__PURE__ */ H(Wh, [["render", Xh]]), Qh = {
  name: "ZmzTransfer",
  components: {
    ZmzButton: xt,
    ZmzTransferCheckbox: Kh
  },
  props: {
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: Array,
      default: () => []
    },
    /**
     * 数据
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 
     */
    insert: {
      type: String,
      default: "initial"
    },
    /**
     * 标题
     */
    titles: {
      type: Array,
      default: () => ["左列表", "右列表"]
    },
    /**
     * 左默认选中
     */
    leftDefaultChecked: {
      type: Array,
      default: () => []
    },
    /**
     * 右默认选中
     */
    rightDefaultChecked: {
      type: Array,
      default: () => []
    },
    /**
     * 
     */
    fieldAlias: {
      type: Object,
      default() {
        return {
          label: "label",
          key: "key",
          disabled: "disabled"
        };
      }
    },
    /**
     * 搜索
     */
    search: {
      type: Boolean,
      default: !1
    },
    /**
     * 搜索提示
     */
    searchPlaceholder: {
      type: String,
      default: "请输入搜索内容"
    },
    /**
     * 空
     */
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    /**
     * 搜索空
     */
    searchEmptyText: {
      type: String,
      default: "暂无匹配数据"
    },
    /**
     * 搜索回调
     */
    searchMethod: Function
  },
  emits: ["update:modelValue", "on-change", "on-left-btn-click", "on-right-btn-click"],
  setup(e, { emit: t }) {
    const { parent: a } = Ce(), n = b(e.leftDefaultChecked), o = b(e.rightDefaultChecked), r = b(e.leftDefaultChecked), l = b([]), i = b(null), s = b(null), d = be("zmzForm", {}), c = z({
      get() {
        return e.modelValue;
      },
      set(M) {
        t("update:modelValue", M), p.value && p.value.proxy.onValidate();
      }
    }), f = z(() => e.data.reduce((M, R) => (M[R[e.fieldAlias.key]] = R) && M, {})), m = z(() => e.data.filter((M) => c.value.indexOf(M[e.fieldAlias.key]) === -1)), g = z(() => e.insert == "initial" ? e.data.filter((M) => c.value.indexOf(M[e.fieldAlias.key]) > -1) : c.value.reduce((M, R) => {
      const B = f.value[R];
      return B && M.push(B), M;
    }, [])), h = () => {
      let M = c.value.slice();
      const R = [];
      e.data.forEach((B) => {
        const F = B[e.fieldAlias.key];
        r.value.indexOf(F) > -1 && c.value.indexOf(F) === -1 && R.push(F);
      }), e.insert == "unshift" ? c.value = R.concat(M) : c.value = M.concat(R), t("on-change", c.value, r.value), t("on-right-btn-click", c.value, r.value), r.value = [], n.value = [], i.value.isAllChecked = !1;
    }, y = () => {
      let M = c.value.slice();
      l.value.forEach((R) => {
        const B = M.indexOf(R);
        B > -1 && M.splice(B, 1);
      }), c.value = M, t("on-change", c.value, l.value), t("on-left-btn-click", c.value, r.value), l.value = [], o.value = [], s.value.isAllChecked = !1;
    }, C = (M) => {
      r.value = M, n.value = M, t("on-change", "left", M);
    }, k = (M) => {
      l.value = M, o.value = M, t("on-change", "right", M);
    }, S = z(() => r.value.length), L = z(() => l.value.length), p = z(() => Pe(a, "ZmzFormItem")), w = z(() => {
      let M = {};
      return x.value && (M["zmz-transfer--disabled"] = x.value), D.value && (M["zmz-transfer--readonly"] = D.value), M;
    }), O = (M) => {
      M === "left" ? i.value.searchQuery = "" : M === "right" && (s.value.searchQuery = "");
    }, x = z(() => d && d.disabled ? d.disabled : e.disabled), D = z(() => d && d.readonly ? d.readonly : e.readonly);
    return {
      leftDataList: m,
      rightDataList: g,
      handleLeftBtnClick: y,
      handleRightBtnClick: h,
      checkboxGroupLeftLength: S,
      checkboxGroupRightLength: L,
      checkboxGroupLeftOnChange: C,
      checkboxGroupRightOnChange: k,
      leftCheckedList: r,
      leftDefaultCheckedList: n,
      rightDefaultCheckedList: o,
      tansferClass: w,
      clearSearchQuery: O,
      zmztransfercheckboxright: s,
      zmztransfercheckboxleft: i
    };
  }
}, Jh = { class: "zmz-transfer__button" };
function eg(e, t, a, n, o, r) {
  const l = oe("zmz-transfer-checkbox"), i = oe("zmz-button");
  return v(), _("div", {
    class: P(["zmz-transfer", [n.tansferClass]])
  }, [
    K(l, Ie({ ref: "zmztransfercheckboxleft" }, e.$props, {
      data: n.leftDataList,
      modelValue: n.leftDefaultCheckedList,
      "onUpdate:modelValue": t[0] || (t[0] = (s) => n.leftDefaultCheckedList = s),
      title: a.titles[0],
      onOnChange: n.checkboxGroupLeftOnChange
    }), _o({ _: 2 }, [
      e.$slots.leftTitle ? {
        name: "leftTitle",
        fn: le(() => [
          N(e.$slots, "leftTitle")
        ]),
        key: "0"
      } : void 0,
      e.$slots.leftCount ? {
        name: "leftCount",
        fn: le(({ selectedtotal: s, datatotal: d }) => [
          N(e.$slots, "leftCount", {
            selectedtotal: s,
            datatotal: d
          })
        ]),
        key: "1"
      } : void 0,
      e.$slots.leftFooter ? {
        name: "leftFooter",
        fn: le(() => [
          N(e.$slots, "leftFooter")
        ]),
        key: "2"
      } : void 0,
      e.$slots.leftLabel ? {
        name: "leftLabel",
        fn: le(({ item: s }) => [
          N(e.$slots, "leftLabel", { item: s })
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["data", "modelValue", "title", "onOnChange"]),
    u("div", Jh, [
      u("div", {
        class: "zmz-transfer__button__btn",
        onClick: t[1] || (t[1] = (...s) => n.handleLeftBtnClick && n.handleLeftBtnClick(...s))
      }, [
        e.$slots.leftBtn ? N(e.$slots, "leftBtn", {
          key: 0,
          disabled: n.checkboxGroupRightLength == 0
        }) : (v(), pe(i, {
          key: 1,
          type: "primary",
          icon: "zmz-icon--arrow-left",
          disabled: n.checkboxGroupRightLength == 0
        }, null, 8, ["disabled"]))
      ]),
      u("div", {
        class: "zmz-transfer__button__btn",
        onClick: t[2] || (t[2] = (...s) => n.handleRightBtnClick && n.handleRightBtnClick(...s))
      }, [
        e.$slots.rightBtn ? N(e.$slots, "rightBtn", {
          key: 0,
          disabled: n.checkboxGroupLeftLength == 0
        }) : (v(), pe(i, {
          key: 1,
          type: "primary",
          icon: "zmz-icon--arrow-right",
          disabled: n.checkboxGroupLeftLength == 0
        }, null, 8, ["disabled"]))
      ])
    ]),
    K(l, Ie({ ref: "zmztransfercheckboxright" }, e.$props, {
      data: n.rightDataList,
      modelValue: n.rightDefaultCheckedList,
      "onUpdate:modelValue": t[3] || (t[3] = (s) => n.rightDefaultCheckedList = s),
      title: a.titles[1],
      onOnChange: n.checkboxGroupRightOnChange
    }), _o({ _: 2 }, [
      e.$slots.rightTitle ? {
        name: "rightTitle",
        fn: le(() => [
          N(e.$slots, "rightTitle")
        ]),
        key: "0"
      } : void 0,
      e.$slots.rightCount ? {
        name: "rightCount",
        fn: le(({ selectedtotal: s, datatotal: d }) => [
          N(e.$slots, "rightCount", {
            selectedtotal: s,
            datatotal: d
          })
        ]),
        key: "1"
      } : void 0,
      e.$slots.rightFooter ? {
        name: "rightFooter",
        fn: le(() => [
          N(e.$slots, "rightFooter")
        ]),
        key: "2"
      } : void 0,
      e.$slots.rightLabel ? {
        name: "rightLabel",
        fn: le(({ item: s }) => [
          N(e.$slots, "rightLabel", { item: s })
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["data", "modelValue", "title", "onOnChange"])
  ], 2);
}
const Ma = /* @__PURE__ */ H(Qh, [["render", eg]]);
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
const tg = {
  name: "ZmzPaginationTotal",
  props: {
    /**
     * 总数
     */
    total: {
      type: Number,
      default: 0
    }
  }
}, ng = { class: "zmz-pagination__total" };
function ag(e, t, a, n, o, r) {
  return v(), _("div", ng, " 共" + Z(a.total) + "条 ", 1);
}
const Po = /* @__PURE__ */ H(tg, [["render", ag]]), lg = {
  name: "ZmzPaginationPrev",
  props: {
    /**
     * 当前值
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 最大值
     */
    pageNumTotal: {
      type: Number,
      default: 0
    },
    prevText: {
      type: String,
      default: ""
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-prev-page"],
  setup(e, { emit: t }) {
    const a = z(() => e.current === 1);
    return {
      isDisabled: a,
      handleOnPrevPage: () => {
        a.value || t("on-prev-page");
      }
    };
  }
}, og = ["disabled"], rg = {
  key: 1,
  class: "zmz-pagination__button__icon zmz-icon--arrow-left"
};
function ig(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-pagination__prev", { "zmz-pagination__prev--disabled": n.isDisabled }]),
    onClick: t[0] || (t[0] = (...l) => n.handleOnPrevPage && n.handleOnPrevPage(...l))
  }, [
    u("button", {
      class: "zmz-pagination__prev__button",
      type: "button",
      disabled: n.isDisabled
    }, [
      a.prevText ? (v(), _(G, { key: 0 }, [
        ne(Z(a.prevText), 1)
      ], 64)) : (v(), _("i", rg))
    ], 8, og)
  ], 2);
}
const No = /* @__PURE__ */ H(lg, [["render", ig]]), sg = {
  name: "ZmzPaginationNext",
  props: {
    /**
     * 当前值
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 最大值
     */
    pageNumTotal: {
      type: Number,
      default: 0
    },
    nextText: {
      type: String,
      default: ""
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-next-page"],
  setup(e, { emit: t }) {
    const a = z(() => e.current === e.pageNumTotal);
    return {
      isDisabled: a,
      handleOnNextPage: () => {
        a.value || t("on-next-page");
      }
    };
  }
}, ug = ["disabled"], dg = {
  key: 1,
  class: "zmz-pagination__button__icon zmz-icon--arrow-right"
};
function cg(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-pagination__next", { "zmz-pagination__next--disabled": n.isDisabled }]),
    onClick: t[0] || (t[0] = (...l) => n.handleOnNextPage && n.handleOnNextPage(...l))
  }, [
    u("button", {
      class: "zmz-pagination__next__button",
      type: "button",
      disabled: n.isDisabled
    }, [
      a.nextText ? (v(), _(G, { key: 0 }, [
        ne(Z(a.nextText), 1)
      ], 64)) : (v(), _("i", dg))
    ], 8, ug)
  ], 2);
}
const Vo = /* @__PURE__ */ H(sg, [["render", cg]]), mg = {
  name: "ZmzPaginationJumper",
  components: {
    ZmzInput: _t
  },
  props: {
    current: {
      type: [Number, String],
      default: 1
    },
    /**
     * 最大值
     */
    pageNumTotal: {
      type: Number,
      default: 0
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 大小
     */
    size: {
      type: String,
      default: "default"
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(e.current);
    return ue(() => e.current, (o) => {
      e.pageNumTotal < o ? a.value = e.pageNumTotal : a.value = o;
    }, { immediate: !0 }), {
      handleOnBlur: (o) => {
        let r = 0;
        e.pageNumTotal < parseInt(o.target.value) ? r = e.pageNumTotal : r = parseInt(o.target.value), a.value = r, t("on-change", r);
      },
      defaultModel: a
    };
  }
}, fg = { class: "zmz-pagination__jumper" }, vg = { class: "zmz-pagination__jumper__input" };
function zg(e, t, a, n, o, r) {
  const l = oe("zmz-input");
  return v(), _("ul", fg, [
    t[1] || (t[1] = u("div", { class: "zmz-pagination__jumper__text" }, "跳至", -1)),
    u("div", vg, [
      K(l, {
        size: a.size,
        disabled: a.disabled,
        modelValue: n.defaultModel,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => n.defaultModel = i),
        onOnBlur: n.handleOnBlur
      }, null, 8, ["size", "disabled", "modelValue", "onOnBlur"])
    ]),
    t[2] || (t[2] = u("div", { class: "zmz-pagination__jumper__text" }, "页", -1))
  ]);
}
const Fo = /* @__PURE__ */ H(mg, [["render", zg]]), _g = {
  name: "ZmzPaginationPage",
  props: {
    /**
     * 每页显示条数
     */
    pageNumTotal: {
      type: Number,
      default: 10
    },
    /**
     * 过多折叠
     */
    fold: {
      type: Number,
      default: 5,
      coerce: function(e) {
        return e = e > 0 ? e : 5, e % 2 === 1 ? e : e + 1;
      }
    },
    /**
     * 页码
     */
    current: {
      type: [Number, String],
      default: 1
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = b(e.current);
    ue(() => e.current, (r) => {
      a.value = parseInt(r);
    }, { immediate: !0 });
    const n = z(() => {
      var r = e.pageNumTotal, l = [], i = [], s = Math.floor(e.fold / 2), d = a.value;
      if (r <= e.fold) {
        for (; r--; )
          l.push({
            text: e.pageNumTotal - r,
            val: e.pageNumTotal - r
          });
        return l;
      }
      for (; r--; )
        l.push(e.pageNumTotal - r);
      var c = l.indexOf(d);
      c < s && (d = d + s - c), a.value > e.pageNumTotal - s && (d = e.pageNumTotal - s), l = l.splice(d - s - 1, e.fold);
      do {
        var f = l.shift();
        i.push({
          text: f,
          val: f
        });
      } while (l.length);
      return e.pageNumTotal > e.fold && (a.value > s + 1 && (i[0].val - 1 == 1 ? i.unshift({
        text: 1,
        val: 1
      }) : (i.unshift({
        text: "···",
        val: i[0].val - 1
      }), i.unshift({
        text: 1,
        val: 1
      }))), a.value <= e.pageNumTotal + s && i[i.length - 1].val + 1 <= e.pageNumTotal && (i[i.length - 1].val + 1 == e.pageNumTotal ? i.push({
        text: e.pageNumTotal,
        val: e.pageNumTotal
      }) : (i.push({
        text: "···",
        val: i[i.length - 1].val + 1
      }), i.push({
        text: e.pageNumTotal,
        val: e.pageNumTotal
      })))), i;
    });
    return {
      handleCurrent: (r) => {
        e.disabled || a.value != r && r > 0 && r < e.pageNumTotal + 1 && (a.value = r, t("on-change", r));
      },
      defaultModel: a,
      grouplist: n
    };
  }
}, hg = { class: "zmz-pagination__page" }, gg = ["onClick"];
function yg(e, t, a, n, o, r) {
  return v(), _("div", hg, [
    (v(!0), _(G, null, fe(n.grouplist, (l, i) => (v(), _("div", {
      class: P(["zmz-pagination__page__item", { "zmz-pagination__page__item--active": n.defaultModel == l.val, "zmz-pagination__page__item--disabled": a.disabled }]),
      key: i,
      onClick: (s) => n.handleCurrent(l.val)
    }, Z(l.text), 11, gg))), 128))
  ]);
}
const Ro = /* @__PURE__ */ H(_g, [["render", yg]]), pg = {
  name: "ZmzPaginationSizes",
  components: {
    ZmzSelect: Ft,
    ZmzSelectOption: Rt
  },
  props: {
    current: {
      type: [Number, String],
      default: 10
    },
    pageSizeOption: {
      type: Array,
      default() {
        return [10, 20, 30, 40];
      }
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 大小
     */
    size: {
      type: String,
      default: "default"
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: t }) {
    const a = b(10);
    ue(() => e.current, (r) => {
      a.value = r;
    }, { immediate: !0 });
    const n = z(() => {
      let r = [];
      return Array.isArray(e.pageSizeOption) && e.pageSizeOption.length && e.pageSizeOption.forEach((l) => {
        r.push({
          value: parseInt(l),
          label: l + "条/页"
        });
      }), r;
    });
    return {
      defaultModel: a,
      zmzSelectOptionDataList: n,
      handleChange: (r) => {
        t("on-change", r);
      }
    };
  }
}, bg = { class: "zmz-pagination__sizes" };
function kg(e, t, a, n, o, r) {
  const l = oe("zmz-select-option"), i = oe("zmz-select");
  return v(), _("div", bg, [
    K(i, {
      size: a.size,
      disabled: a.disabled,
      modelValue: n.defaultModel,
      "onUpdate:modelValue": t[0] || (t[0] = (s) => n.defaultModel = s),
      onOnChange: n.handleChange
    }, {
      default: le(() => [
        (v(!0), _(G, null, fe(n.zmzSelectOptionDataList, (s, d) => (v(), pe(l, {
          value: s.value,
          label: s.label,
          key: d
        }, null, 8, ["value", "label"]))), 128))
      ]),
      _: 1
    }, 8, ["size", "disabled", "modelValue", "onOnChange"])
  ]);
}
const Cg = /* @__PURE__ */ H(pg, [["render", kg]]), wg = {
  name: "ZmzPaginationNumsize",
  props: {
    /**
     * 总数
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 每页显示条数
     */
    pageNumTotal: {
      type: Number,
      default: 10
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "default", "small", "mini"].includes(e);
      }
    },
    /**
     * 主题
     */
    theme: {
      type: String,
      default: "primary",
      validator(e) {
        return ["success", "warning", "error", "primary"].includes(e);
      }
    },
    /**
     * 过多折叠
     */
    fold: {
      type: Number,
      default: 5,
      coerce: function(e) {
        return e = e > 0 ? e : 5, e % 2 === 1 ? e : e + 1;
      }
    },
    /**
     * 只有一页时是否隐藏分页
     */
    onePageHidden: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否显示背景色
     */
    background: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否显示边线
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 上一页
     */
    prev: {
      type: Boolean,
      default: !1
    },
    /**
     * 下一样
     */
    next: {
      type: Boolean,
      default: !1
    },
    /**
     * 第一页
     */
    firstPage: {
      type: Boolean,
      default: !1
    },
    /**
     * 最后一页
     */
    lastPage: {
      type: Boolean,
      default: !1
    },
    /**
     * 页码
     */
    modelValue: {
      type: [Number, String],
      default: 1
    },
    /**
     * 布局
     */
    layout: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["on-change", "update:modelValue", "on-next-page", "on-prev-page"],
  setup(e, { emit: t }) {
    const a = z({
      get() {
        return parseInt(e.modelValue);
      },
      set(s) {
        t("update:modelValue", parseInt(s));
      }
    }), n = z(() => Math.ceil(e.total / e.pageSize)), o = z(() => {
      var s = e.pageNumTotal, d = [], c = [], f = Math.floor(e.fold / 2), m = a.value;
      if (s <= e.fold) {
        for (; s--; )
          d.push({
            text: e.pageNumTotal - s,
            val: e.pageNumTotal - s
          });
        return d;
      }
      for (; s--; )
        d.push(e.pageNumTotal - s);
      var g = d.indexOf(m);
      g < f && (m = m + f - g), a.value > e.pageNumTotal - f && (m = e.pageNumTotal - f), d = d.splice(m - f - 1, e.fold);
      do {
        var h = d.shift();
        c.push({
          text: h,
          val: h
        });
      } while (d.length);
      return e.pageNumTotal > e.fold && (a.value > f + 1 && (c[0].val - 1 == 1 ? c.unshift({
        text: 1,
        val: 1
      }) : (c.unshift({
        text: "···",
        val: c[0].val - 1
      }), c.unshift({
        text: 1,
        val: 1
      }))), a.value <= e.pageNumTotal + f && c[c.length - 1].val + 1 <= e.pageNumTotal && (c[c.length - 1].val + 1 == e.pageNumTotal ? c.push({
        text: e.pageNumTotal,
        val: e.pageNumTotal
      }) : (c.push({
        text: "···",
        val: c[c.length - 1].val + 1
      }), c.push({
        text: e.pageNumTotal,
        val: e.pageNumTotal
      })))), c;
    });
    return {
      pageTotal: n,
      setCurrent: (s) => {
        a.value != s && s > 0 && s < e.pageNumTotal + 1 && (a.value = s, t("on-change", s));
      },
      model: a,
      grouplist: o,
      prevCurrent: (s) => {
        a.value != s && s > 0 && s < e.pageNumTotal + 1 && (a.value = s, t("on-prev-page", s), t("on-change", s));
      },
      nextCurrent: (s) => {
        a.value != s && s > 0 && s < e.pageNumTotal + 1 && (a.value = s, t("on-next-page", s), t("on-change", s));
      }
    };
  }
}, Sg = { class: "zmz-pagination__numsize" }, xg = { class: "zmz-pagination__numsize__current" }, Tg = { class: "zmz-pagination__numsize__total" };
function Og(e, t, a, n, o, r) {
  return v(), _("ul", Sg, [
    u("div", xg, "第" + Z(a.current) + "页", 1),
    t[0] || (t[0] = u("div", { class: "zmz-pagination__numsize__split" }, "/", -1)),
    u("div", Tg, "共" + Z(a.pageNumTotal) + "页", 1)
  ]);
}
const Zo = /* @__PURE__ */ H(wg, [["render", Og]]), Lg = {
  name: "ZmzPaginationLast",
  props: {
    /**
     * 当前值
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 最大值
     */
    pageNumTotal: {
      type: Number,
      default: 0
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-last-page"],
  setup(e, { emit: t }) {
    const a = z(() => e.current === e.pageNumTotal);
    return {
      isDisabled: a,
      handleOnNextPage: () => {
        a.value || t("on-last-page");
      }
    };
  }
}, Dg = ["disabled"];
function Mg(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-pagination__next", { "zmz-pagination__next--disabled": n.isDisabled }]),
    onClick: t[0] || (t[0] = (...l) => n.handleOnNextPage && n.handleOnNextPage(...l))
  }, [
    u("button", {
      class: "zmz-pagination__next__button",
      type: "button",
      disabled: n.isDisabled
    }, Z(e.lastText ? e.lastText : "尾页"), 9, Dg)
  ], 2);
}
const Wo = /* @__PURE__ */ H(Lg, [["render", Mg]]), Eg = {
  name: "ZmzPaginationFirst",
  props: {
    /**
     * 当前值
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 最大值
     */
    pageNumTotal: {
      type: Number,
      default: 0
    },
    firstText: {
      type: String,
      default: ""
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-first-page"],
  setup(e, { emit: t }) {
    const a = z(() => e.current === 1);
    return {
      isDisabled: a,
      handleOnPrevPage: () => {
        a.value || t("on-first-page");
      }
    };
  }
}, Bg = ["disabled"];
function Ig(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-pagination__prev", { "zmz-pagination__prev--disabled": n.isDisabled }]),
    onClick: t[0] || (t[0] = (...l) => n.handleOnPrevPage && n.handleOnPrevPage(...l))
  }, [
    u("button", {
      class: "zmz-pagination__prev__button",
      type: "button",
      disabled: n.isDisabled
    }, Z(a.firstText ? a.firstText : "首页"), 9, Bg)
  ], 2);
}
const $o = /* @__PURE__ */ H(Eg, [["render", Ig]]), Ea = {
  name: "ZmzPagination",
  components: {
    ZmzSelect: Ft,
    ZmzSelectItem: Rt,
    ZmzInput: _t,
    ZmzPaginationTotal: Po,
    ZmzPaginationPage: Ro,
    ZmzPaginationPrev: No,
    ZmzPaginationNext: Vo,
    ZmzPaginationJumper: Fo,
    ZmzPaginationPagenumsize: Zo,
    ZmzPaginationPageLast: Wo,
    ZmzPaginationPageFirst: $o
  },
  props: {
    /**
     * 页数配置
     */
    pageSizeOption: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    /**
     * 总数
     */
    total: {
      type: Number,
      default: 0
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "default", "small", "mini"].includes(e);
      }
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "primary",
      validator(e) {
        return ["success", "warning", "error", "primary"].includes(e);
      }
    },
    /**
     * 过多折叠
     */
    fold: {
      type: Number,
      default: 5,
      coerce: function(e) {
        return e = e > 0 ? e : 5, e % 2 === 1 ? e : e + 1;
      }
    },
    /**
     * 只有一页时是否隐藏分页
     */
    onePageHidden: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否显示背景色
     */
    background: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否显示边线
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 禁用分页
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 上一页
     */
    prevText: {
      type: String,
      default: ""
    },
    /**
     * 下一样
     */
    nextText: {
      type: String,
      default: ""
    },
    /**
     * 第一页
     */
    firstText: {
      type: String,
      default: ""
    },
    /**
     * 最后一页
     */
    lastText: {
      type: String,
      default: ""
    },
    /**
     * 页码
     */
    pageNum: {
      type: [Number, String],
      default: 1
    },
    /**
     * 每页显示条数
     */
    pageSize: {
      type: [Number, String],
      default: 10
    },
    /**
     * 布局
     */
    layout: {
      type: Array,
      default() {
        return ["total", "prev", "page", "next", "sizes", "jumper"];
      }
    }
  },
  emits: ["on-num-change", "on-size-change", "update:page-size", "update:page-num", "on-prev-page", "on-next-page", "on-first-page", "on-last-page"],
  setup(e, {
    emit: t
  }) {
    const a = b(e.pageSize), n = b(e.pageNum), o = z({
      get() {
        return parseInt(e.pageNum);
      },
      set(h) {
        t("update:page-num", parseInt(h));
      }
    }), r = z({
      get() {
        return parseInt(e.pageSize);
      },
      set(h) {
        t("update:page-size", parseInt(h));
      }
    }), l = z(() => {
      let h = [];
      return e.border && h.push("zmz-pagination--border"), e.background && h.push("zmz-pagination--background"), e.type && h.push(`zmz-pagination--${e.type}`), e.size && h.push(`zmz-pagination--size-${e.size}`), e.disabled && h.push("zmz-pagination--disabled"), h;
    }), i = z(() => Math.ceil(e.total / a.value)), s = (h) => {
      e.disabled || (n.value = h, o.value = h, t("on-num-change", h));
    }, d = () => {
      if (e.disabled) return;
      let h = n.value;
      h = h + 1, o.value = h, s(h), t("on-next-page", h);
    }, c = () => {
      if (e.disabled) return;
      let h = n.value;
      h = h - 1, o.value = h, s(h), t("on-prev-page", h);
    }, f = () => {
      e.disabled || (o.value = 1, s(1), t("on-first-page", 1));
    }, m = () => {
      e.disabled || (o.value = i.value, s(i.value), t("on-last-page", i.value));
    }, g = (h) => {
      e.disabled || (a.value = h, r.value = h, n.value > i.value && (o.value = i.value), t("on-size-change", h));
    };
    return ue(() => e.pageSize, (h) => {
      a.value = parseInt(h);
    }, {
      immediate: !0
    }), ue(() => e.pageNum, (h) => {
      n.value = parseInt(h);
    }, {
      immediate: !0
    }), ue(() => r.value, (h) => {
      a.value = parseInt(h);
    }, {
      immediate: !0
    }), ue(() => o.value, (h) => {
      n.value = parseInt(h);
    }, {
      immediate: !0
    }), () => {
      if (e.onePageHidden && (!i.value || i.value === 1)) return null;
      const h = {
        total: K(Po, {
          total: e.total
        }, null),
        jumper: K(Fo, {
          size: e.size,
          disabled: e.disabled,
          current: n.value,
          pageNumTotal: i.value,
          onOnChange: s
        }, null),
        page: K(Ro, {
          disabled: e.disabled,
          fold: e.fold,
          current: n.value,
          pageNumTotal: i.value,
          onOnChange: s
        }, null),
        sizes: K(Cg, {
          size: e.size,
          disabled: e.disabled,
          current: a.value,
          pageSizeOption: e.pageSizeOption,
          onOnChange: g
        }, null),
        prev: K(No, {
          disabled: e.disabled,
          prevText: e.prevText,
          current: n.value,
          pageNumTotal: i.value,
          onOnPrevPage: c
        }, null),
        next: K(Vo, {
          disabled: e.disabled,
          nextText: e.nextText,
          current: n.value,
          pageNumTotal: i.value,
          onOnNextPage: d
        }, null),
        numsize: K(Zo, {
          current: n.value,
          pageNumTotal: i.value
        }, null),
        first: K($o, {
          disabled: e.disabled,
          firstText: e.firstText,
          current: n.value,
          pageNumTotal: i.value,
          onOnFirstPage: f
        }, null),
        last: K(Wo, {
          disabled: e.disabled,
          lastText: e.lastText,
          current: n.value,
          pageNumTotal: i.value,
          onOnLastPage: m
        }, null)
      }, y = [];
      return e.layout.forEach((C) => {
        C && h[C] && h[C].type && h[C].type.name && y.push(ie("div", {
          class: ["zmz-pagination__item"]
        }, h[C]));
      }), ie("div", {
        class: ["zmz-pagination", l.value]
      }, {
        default: () => y
      });
    };
  }
};
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
const Ag = {
  name: "ZmzTreeLabel",
  props: {
    node: Object,
    props: Object,
    renderContent: Function
  },
  setup(e, t) {
    return () => e.renderContent(ie, { ...t, node: e.node });
  }
}, Pg = {
  name: "ZmzTreeItem",
  components: {
    ZmzCheckbox: Ot,
    ZmzTreeLable: Ag
  },
  props: {
    node: Object,
    indent: Number,
    props: Object,
    showCheckbox: Boolean,
    renderContent: Function,
    icon: String
  },
  setup(e) {
    const t = be("zmzTree", {}), a = b(e.props.children || "children"), n = b(e.props.label || "label"), o = z(() => e.node[a.value]), r = z(() => "loading" in e.node && e.node.loading), l = z(() => o.value && o.value.length || "loading" in e.node && !e.node.loading), i = (m) => {
      l.value && (o.value && o.value.length == 0 && t.lazyLoadData && (m.loading = !0, t.lazyLoadData(m, (g) => {
        m.loading = !1, g.length && (m[a.value] = g.map((h, y) => {
          let C = h[n.value], k = `${m.nodeKey}-${y}`;
          return t.filterTreeObj(h, { label: C, level: m.level + 1, nodeKey: k, parentNodeKey: m.nodeKey });
        }), m.expanded = !0);
      })), o.value && o.value.length && t.handleExpandedNode(m));
    }, s = (m) => {
      t.expandNodeClick && t.handleExpandedNode(m);
    }, d = (m) => {
      m.disabled || (t.expandNodeClick ? i(m) : t.handleSelectNode(m));
    };
    return {
      zmzTreeItemContentStyle: z(() => {
        let m = {};
        return e.node.level * e.indent && (m["padding-left"] = e.node.level * e.indent + "px"), m;
      }),
      handleParentNode: s,
      handleCheckboxNode: (m) => {
        m.disabled || t.handleCheckboxNode(m);
      },
      zmzTree: t,
      currentChildren: o,
      handleIconExpanded: i,
      isExpandedIcon: l,
      handleNode: d,
      labelKey: n,
      isLoading: r
    };
  }
}, Ng = {
  key: 1,
  class: "zmz-tree__item__expanded__icon zmz-icon--arrow-right"
}, Vg = {
  key: 1,
  class: "zmz-tree__item__loading__icon zmz-icon--loading"
}, Fg = {
  key: 0,
  class: "zmz-tree__item__checkbox"
}, Rg = {
  key: 0,
  class: "zmz-tree__item__children"
};
function Zg(e, t, a, n, o, r) {
  const l = oe("zmz-checkbox"), i = oe("zmz-tree-lable"), s = oe("zmz-tree-item", !0);
  return v(), _("div", {
    class: P(["zmz-tree__item", { "zmz-tree__item--current": a.node.current, "zmz-tree__item--expanded": a.node.expanded, "zmz-tree__item--disabled": a.node.disabled }]),
    onClick: t[3] || (t[3] = _e((d) => n.handleParentNode(a.node), ["stop"])),
    onFocus: t[4] || (t[4] = (...d) => e.handleFocus && e.handleFocus(...d))
  }, [
    u("div", {
      class: "zmz-tree__item__content",
      style: j([n.zmzTreeItemContentStyle]),
      tabindex: "-1"
    }, [
      u("div", {
        class: "zmz-tree__item__expanded",
        onClick: t[0] || (t[0] = _e((d) => n.handleIconExpanded(a.node), ["stop"]))
      }, [
        n.isExpandedIcon ? N(e.$slots, "icon", {
          key: 0,
          node: a.node
        }, () => [
          a.icon ? (v(), _("i", {
            key: 0,
            class: P(["zmz-tree__item__expanded__icon", [a.icon]])
          }, null, 2)) : (v(), _("i", Ng))
        ]) : A("", !0),
        n.isLoading ? (v(), _("i", Vg)) : A("", !0)
      ]),
      a.showCheckbox ? (v(), _("div", Fg, [
        K(l, {
          onClick: t[1] || (t[1] = _e((d) => n.handleCheckboxNode(a.node), ["prevent", "stop"])),
          modelValue: a.node.checked,
          semiselection: a.node.semiselection,
          disabled: a.node.disabled
        }, null, 8, ["modelValue", "semiselection", "disabled"])
      ])) : A("", !0),
      u("div", {
        class: "zmz-tree__item__label",
        onClick: t[2] || (t[2] = _e((d) => n.handleNode(a.node), ["stop"]))
      }, [
        a.renderContent ? (v(), pe(i, {
          key: 0,
          "render-content": a.renderContent,
          props: a.props,
          node: a.node
        }, null, 8, ["render-content", "props", "node"])) : N(e.$slots, "default", {
          key: 1,
          node: a.node
        }, () => [
          ne(Z(a.node[n.labelKey]), 1)
        ])
      ])
    ], 4),
    n.currentChildren && n.currentChildren.length ? re((v(), _("div", Rg, [
      (v(!0), _(G, null, fe(n.currentChildren, (d, c) => (v(), pe(s, {
        props: a.props,
        node: d,
        key: c,
        "show-checkbox": a.showCheckbox,
        indent: a.indent,
        "render-content": a.renderContent,
        icon: a.icon
      }, {
        icon: le(({ node: f }) => [
          N(e.$slots, "icon", { node: f })
        ]),
        default: le(({ node: f }) => [
          N(e.$slots, "default", { node: f })
        ]),
        _: 3
      }, 8, ["props", "node", "show-checkbox", "indent", "render-content", "icon"]))), 128))
    ], 512)), [
      [Be, a.node.expanded]
    ]) : A("", !0)
  ], 34);
}
const Wg = /* @__PURE__ */ H(Pg, [["render", Zg]]);
function Tr(e, t = "children") {
  var a = [];
  let n = (o, r) => {
    for (var l = 0; l < o.length; l++)
      a.push(o[l]), o[l][r] && Array.isArray(o[l][r]) && o[l][r].length && n(o[l][r], r);
  };
  return n(e, t), a;
}
const $g = (e) => {
  for (var t = [], a = {}, n = 0; n < e.length; n++)
    a[e[n].key] || (t.push(e[n]), a[e[n].key] = !0);
  return t;
}, Or = (e) => [].concat(...e.map(
  (t) => Array.isArray(t) ? Or(t) : t
)), Dl = (e = 1, t = () => 0, a = []) => a.length < e ? (a.push(t()), Dl(e, t, a)) : a;
function rn(e) {
  const t = Array.isArray(e) ? e : [e], a = [];
  return t.forEach((n) => {
    Array.isArray(n) ? a.push(...rn(n)) : ho(n) && Array.isArray(n.children) ? a.push(...rn(n.children)) : (a.push(n), ho(n) && n.component && n.component.subTree && a.push(...rn(n.component.subTree)));
  }), a;
}
function pt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Qt(e) {
  if (pt(e) === "Object") {
    let a = {};
    for (let n in e)
      a[n] = Qt(e[n]);
    return a;
  } else if (pt(e) === "Array") {
    var t = [];
    for (let a = 0, n = e.length; a < n; a++)
      t[a] = Qt(e[a]);
    return t;
  } else {
    if (pt(e) === "Function")
      return new Function("return " + e.toString()).call(this);
    if (pt(e) === "Date")
      return new Date(e.valueOf());
    if (pt(e) === "RegExp")
      return new RegExp(e);
    if (pt(e) === "Map") {
      let a = /* @__PURE__ */ new Map();
      return e.forEach((n, o) => {
        a.set(o, Qt(n));
      }), a;
    } else if (pt(e) === "Set") {
      let a = /* @__PURE__ */ new Set();
      for (let n of e.values())
        a.add(Qt(n));
      return a;
    }
  }
  return e;
}
const jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allToOneArray: Or,
  checkType: pt,
  createDefaultArray: Dl,
  deepClone: Qt,
  duplicateRemovalArrayMap: $g,
  flattenChildren: rn,
  flattenTreeData: Tr
}, Symbol.toStringTag, { value: "Module" })), Hg = {
  name: "ZmzTree",
  components: {
    ZmzTreeItem: Wg
  },
  props: {
    /**
     * 数据
     */
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 偏移
     */
    indent: {
      type: Number,
      default: 15
    },
    /**
     * 唯一
     */
    nodeKey: {
      type: String,
      default: ""
    },
    /**
     * 字段
     */
    props: {
      type: Object,
      default: () => ({
        label: "label",
        children: "children"
      })
    },
    /**
    * 展开全部
    */
    expandAll: {
      type: Boolean,
      default: !1
    },
    /**
     * 严格父节点
     */
    checkStrictly: {
      type: Boolean,
      default: !1
    },
    /**
     * 点击收缩节点
     */
    expandNodeClick: {
      type: Boolean,
      default: !0
    },
    /**
     * 多选
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * 懒加载数据
     */
    lazyLoadData: Function,
    /**
     * 空提示
     */
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * 是否显示复选框
     */
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    /**
     * 默认复选选中
     */
    defaultCheckedKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 默认选中
     */
    defaultSelectKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 默认展开
     */
    defaultExpandedKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 过滤节点方法
     */
    filterNodeMethod: Function,
    /**
     * 自定义渲染内容
     */
    renderContent: Function
  },
  emits: ["on-select-change", "on-check-change", "on-filter-change", "on-expand-change"],
  setup(e, { emit: t }) {
    const a = b([]), n = b(e.props.children || "children"), o = b(e.props.label || "label"), r = (E, T = null, I = 0) => E.map((V, W) => {
      let $ = I, X = V[n.value], ee = V[o.value], J = {}, q = T ? `${T}-${W}` : `${W}`, ve = l(V, { label: ee, level: $, nodeKey: q, parentNodeKey: T });
      return X && X.length && (J[n.value] = r(X, q, $ + 1)), e.expandAll && (ve.expanded = e.expandAll), Object.assign({}, ve, J);
    }), l = (E, T) => {
      const I = {
        expanded: !1,
        //打开关闭
        disabled: !1,
        // 禁用
        current: !1,
        //选中
        checked: !1,
        //复选框选中
        semiselection: !1
        //复选框半选中
      };
      let V = {};
      for (const W in E)
        Object.keys(I).includes(W) && (V[W] = E[W]);
      return e.expandAll && (V.expanded = e.expandAll), V.node = E, Object.assign(I, E, V, T);
    }, i = z(() => Tr(a.value, n.value)), s = (E) => {
      let T = E[n.value];
      T && T.length && (E.expanded = !E.expanded, t("on-expand-change", E));
    }, d = (E) => {
      i.value.forEach((T) => {
        E.nodeKey != T.nodeKey && !e.multiple && (T.current = !1);
      }), E.current = !E.current, t("on-select-change", E);
    }, c = (E) => {
      if (e.showCheckbox) {
        let T = !E.checked && !E.semiselection;
        E.checked = T, E.semiselection = !1, m(E), f(E, { checked: T, semiselection: !1 }), t("on-check-change", E);
      }
    }, f = (E, T) => {
      if (!e.checkStrictly) {
        for (const I in T)
          E[I] = T[I];
        E[n.value] && E[n.value].length && E[n.value].forEach((I) => {
          f(I, T);
        });
      }
    }, m = (E) => {
      if (e.checkStrictly) return;
      let T = i.value.find((I) => I.nodeKey == E.parentNodeKey);
      typeof T > "u" || E.checked == T.checked && E.semiselection == T.semiselection || (E.checked ? (T.checked = T[n.value].every((I) => I.checked), T.semiselection = !T.checked) : (T.checked = !1, T.semiselection = T[n.value].some((I) => I.checked || I.semiselection)), m(T));
    }, g = (E, T, I) => E.reduce((V, W) => {
      if (console.log(W), I(T, W))
        V.push(W);
      else if (W[n.value] && W[n.value].length) {
        const $ = g(W[n.value], T, I);
        if ($.length) {
          let X = {};
          X[n.value] = $, V.push({ ...W, ...X });
        }
      }
      return V;
    }, []), h = (E) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in getNodes");
      if (E)
        return i.value.filter((T) => T[e.nodeKey] === E).map((T) => T.node);
    }, y = () => i.value.filter((E) => E.expanded).map((E) => E.node), C = (E) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in setExpandedNodes");
      let T = Array.isArray(E) ? E : [E];
      i.value.forEach((I) => {
        I.expanded = !1;
      }), i.value.forEach((I) => {
        T.forEach((V) => {
          I[e.nodeKey] == V && (I.expanded = !0);
        });
      });
    }, k = () => i.value.filter((E) => E.current).map((E) => E.node), S = (E) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in setSelectNodes");
      let T = Array.isArray(E) ? E : [E];
      i.value.forEach((I) => {
        I.current = !1;
      }), i.value.forEach((I) => {
        T.forEach((V, W, $) => {
          !e.multiple && I[e.nodeKey] == V && W == $.length - 1 && (I.current = !0), e.multiple && I[e.nodeKey] == V && (I.current = !0);
        });
      });
    }, L = () => i.value.filter((E) => E.checked).map((E) => E.node), p = (E) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in setcheckedNodes");
      let T = Array.isArray(E) ? E : [E];
      i.value.forEach((I) => {
        I.checked = !1, I.semiselection = !1;
      }), i.value.forEach((I) => {
        T.forEach((V) => {
          I[e.nodeKey] == V && c(I);
        });
      });
    }, w = () => i.value.filter((E) => E.semiselection).map((E) => E.node), O = () => i.value.filter((E) => E.checked || E.semiselection).map((E) => E.node), x = (E) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in remove");
      E && F("remove", {}, E);
    }, D = (E, T) => {
      if (T) throw new Error("[zmz-tree] nodeKey is required in append");
      T && F("append", E, T);
    }, M = (E, T) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in insertBefore");
      T && F("before", E, T);
    }, R = (E, T) => {
      if (!e.nodeKey) throw new Error("[zmz-tree] nodeKey is required in insertAfter");
      T && F("after", E, T);
    }, B = (E) => {
      if (!e.filterNodeMethod) throw new Error("[zmz-tree] filterNodeMethod is required when filter");
      E ? a.value = g(r(e.data), E, e.filterNodeMethod) : (a.value = r(e.data), t("on-filter-change", E, a.value));
    }, F = (E, T, I) => {
      let V = (W) => {
        W.forEach(($, X, ee) => {
          let J = $[n.value];
          if ($[e.nodeKey] && $[e.nodeKey] == I) {
            if (E == "before") {
              let q = l(T, { node: T, level: $.level, parent: $.parent });
              ee.splice(X, 0, q), e.showCheckbox && (m(q), f(q, { checked: q.checked, semiselection: !1 }));
            }
            if (E === "after") {
              let q = l(T, { node: T, level: $.level, parent: $.parent });
              ee.splice(X + 1, 0, q), e.showCheckbox && (m(q), f(q, { checked: q.checked, semiselection: !1 }));
            }
            if (E === "remove" && ee.splice(X, 1), E === "remove") {
              let q = l(T, { node: T, level: $.level + 1, parent: $.parent });
              J && J.length ? J.push(q) : J = [q], e.showCheckbox && (m(q), f(q, { checked: q.checked, semiselection: !1 }));
            }
          }
          J && J.length && V(J);
        });
      };
      V(a.value);
    };
    return ue(() => e.data, (E) => {
      a.value = r(E);
    }, {
      deep: !0,
      immediate: !0
    }), ue(() => e.defaultCheckedKeys, (E) => {
      E && E.length && p(E);
    }, {
      deep: !0,
      immediate: !0
    }), ue(() => e.defaultSelectKeys, (E) => {
      E && E.length && S(E);
    }, {
      deep: !0,
      immediate: !0
    }), ue(() => e.defaultExpandedKeys, (E) => {
      E && E.length && C(E);
    }, {
      deep: !0,
      immediate: !0
    }), Fe("zmzTree", {
      handleExpandedNode: s,
      handleSelectNode: d,
      expandNodeClick: e.expandNodeClick,
      handleCheckboxNode: c,
      lazyLoadData: e.lazyLoadData,
      filterTreeObj: l,
      renderContent: e.renderContent
    }), {
      dataTree: a,
      filter: B,
      getNodes: h,
      getExpandedNodes: y,
      setExpandedNodes: C,
      getSelectNodes: k,
      setSelectNodes: S,
      getCheckedNodes: L,
      setCheckedNodes: p,
      getSemiselectionNodes: w,
      getCheckedAndSemiselectionNodes: O,
      remove: x,
      append: D,
      insertBefore: M,
      insertAfter: R
    };
  }
}, Yg = { class: "zmz-tree" }, qg = {
  key: 0,
  class: "zmz-tree__empty"
};
function Ug(e, t, a, n, o, r) {
  const l = oe("zmz-tree-item");
  return v(), _("div", Yg, [
    (v(!0), _(G, null, fe(n.dataTree, (i, s) => (v(), pe(l, {
      key: s,
      props: a.props,
      node: i,
      indent: a.indent,
      "show-checkbox": a.showCheckbox,
      "render-content": a.renderContent,
      icon: a.icon
    }, {
      icon: le(({ node: d }) => [
        N(e.$slots, "icon", { node: d })
      ]),
      default: le(({ node: d }) => [
        N(e.$slots, "default", { node: d })
      ]),
      _: 3
    }, 8, ["props", "node", "indent", "show-checkbox", "render-content", "icon"]))), 128)),
    n.dataTree.length == 0 ? (v(), _("div", qg, [
      N(e.$slots, "empty", {}, () => [
        ne(Z(a.emptyText), 1)
      ])
    ])) : A("", !0)
  ]);
}
const Ba = /* @__PURE__ */ H(Hg, [["render", Ug]]);
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
const Lr = {
  name: "ZmzTableColgroup",
  props: {
    /**
     * 数据
     */
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    space: {
      type: Boolean,
      default: !1
    },
    scrollBar: {
      type: Object,
      default() {
        return {
          width: 0,
          height: 0
        };
      }
    }
  },
  setup(e) {
    const t = b([]);
    return ue(() => e.data, (a) => {
      t.value = a;
    }, { immediate: !0, lazy: !0 }), () => ie("colgroup", {}, (() => {
      let n = [];
      return t.value.forEach((o, r) => {
        o.Instance.props && n.push(ie("col", {
          name: "zmzTableColumn__" + r,
          key: r,
          width: o.Instance.props.width || o.Instance.props.realWidth
        }));
      }), e.scrollBar && e.scrollBar.width && e.space && n.push(ie("col", {
        name: "scroll",
        width: e.scrollBar.width
      })), n;
    })());
  }
}, Gg = {
  name: "ZmzTableRender",
  props: {
    /**
     * 数据对象
     */
    item: {
      type: Object,
      default() {
        return {
          name: ""
        };
      }
    },
    /**
     * 插槽对象
     */
    itemColumn: Object,
    /**
     * 下标
     */
    index: Number
  },
  setup(e) {
    let t = null;
    return e.itemColumn.slots.default && e.item ? t = e.itemColumn.slots.default({
      row: { ...e.item },
      rowIndex: e.index
    }) : t = e.item[e.itemColumn.props.prop], () => ie("div", { class: ["zmz-table__cell"] }, t);
  }
}, Xg = {
  name: "ZmzTableTbody",
  components: {
    ZmzTableColgroup: Lr,
    ZmzTableRender: Gg,
    ZmzRadio: nn,
    ZmzCheckbox: Ot
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 列
     */
    column: {
      type: Array,
      default: () => []
    },
    /**
     * 行内类名
     */
    rowClassName: [String, Function],
    /**
     * 斑马纹
     */
    stripes: {
      type: Boolean,
      default: !1
    },
    /**
     * 斑马纹颜色
     */
    stripesColor: String,
    /**
     * 滑入行
     */
    rowHover: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = be("zmzTable", {}), a = b([]), n = b(!1), o = b(""), r = b(""), l = (T, I) => {
      let V = [];
      return typeof e.rowClassName == "string" ? V.push(e.rowClassName) : typeof e.rowClassName == "function" && V.push(e.rowClassName.call(null, {
        row: T,
        rowIndex: I
      })), e.stripes && !e.stripesColor && I % 2 == 1 && V.push("zmz-table__row--stripes"), T.align && V.push(`zmz-table__column--${T.align}`), T.radio && V.push("zmz-table__row--active"), e.rowHover.index === T.index && V.push("zmz-table__row--hover"), V;
    }, i = (T) => {
      let I = [];
      return T && T.align && I.push(`zmz-table__column--${T.align}`), I;
    }, s = (T) => {
      let I = {};
      return e.stripes && e.stripesColor && T % 2 == 1 && (I.background = e.stripesColor), I;
    }, d = () => e.data.map((I) => ({ ...I, ...I.row })).sort((I, V) => {
      if (t.defaultSort && !n.value && !o.value && !r.value)
        return E(I, V, t.defaultSort.prop, t.defaultSort.order);
      if (o.value && r.value)
        return E(I, V, o.value, r.value);
    }), c = z(() => e.column.map((T) => ({
      ...T.Instance.props,
      slots: T.Instance.slots
    }))), f = (T) => {
      a.value.forEach((I, V) => {
        I.radio = !1, T === V && (I.radio = !0);
      });
    }, m = (T, I) => {
      a.value.forEach((W, $) => {
        I == $ && (W.checkbox = !W.checkbox);
      });
      let V = a.value.filter((W) => W.checkbox);
      t.onSelectCheckbox(T, a.value.length, V.length);
    }, g = (T) => {
      a.value.forEach((I, V) => {
        I.radio = !1, V == T && (t.onSelectRadio(I), I.radio = !0);
      });
    }, h = () => {
      a.value.forEach((T) => {
        T.radio = !1;
      });
    }, y = (T) => {
      let I = [];
      a.value.forEach((W, $) => {
        T.forEach((X) => {
          X === $ && (W.checkbox = !0, I.push(W));
        });
      });
      let V = a.value.filter((W) => W.checkbox);
      t.onSelectCheckbox(I, a.value.length, V.length);
    }, C = () => {
      let T = [];
      a.value.forEach((V) => {
        V.checkbox = !1;
      });
      let I = a.value.filter((V) => V.checkbox);
      t.onSelectCheckbox(T, a.value.length, I.length);
    }, k = (T, I, V) => {
      t.onRowClick(T, I, V);
    }, S = (T, I, V) => {
      t.onRowDblclick(T, I, V);
    }, L = (T, I, V) => {
      t.onRowContextmenu(T, I, V);
    }, p = (T, I, V) => {
      t.onRowMouseover(T, I, V);
    }, w = (T, I, V) => {
      t.onRowMouseout(T, I, V);
    }, O = (T, I, V, W) => {
      t.onCellClick(T, I, V, W);
    }, x = (T, I, V, W) => {
      t.onCellDblclick(T, I, V, W);
    }, D = (T, I, V, W) => {
      t.onCellContextmenu(T, I, V, W);
    }, M = (T, I, V, W) => {
      t.onCellMouseover(T, I, V, W);
    }, R = (T, I, V, W) => {
      t.onCellMouseout(T, I, V, W);
    }, B = (T) => {
      a.value.forEach((V) => {
        V.checkbox = T;
      });
      let I = a.value.filter((V) => V.checkbox);
      t.onSelectAllCheckbox(T, I);
    }, F = (T, I) => {
      I ? (n.value = !0, o.value = T, r.value = I) : (n.value = !1, o.value = "", r.value = "");
    }, E = (T, I, V, W = "asc") => {
      if (t.sortMethod && typeof t.sortMethod == "function")
        return t.sortMethod(T, I);
      if (!Object.prototype.hasOwnProperty.call(T, V) || !Object.prototype.hasOwnProperty.call(I, V))
        return 0;
      const $ = typeof T[V] == "string" ? T[V].toUpperCase() : T[V], X = typeof I[V] == "string" ? I[V].toUpperCase() : I[V];
      let ee = 0;
      return $ > X ? ee = 1 : $ < X && (ee = -1), W === "desc" ? ee * -1 : ee;
    };
    return ue([() => e.data, () => o.value, () => r.value, () => n.value], () => {
      a.value = d();
    }, {
      immediate: !0,
      deep: !0
    }), {
      setRowClass: l,
      setRowStyle: s,
      setColumnClass: i,
      zmzDataColumn: c,
      radioChange: f,
      checkboxChange: m,
      setRadioCurrentRow: g,
      clearRadioCurrentRow: h,
      setCheckboxCurrentRow: y,
      clearCheckboxCurrentRow: C,
      onRowClick: k,
      onRowDblclick: S,
      onRowContextmenu: L,
      onRowMouseover: p,
      onRowMouseout: w,
      onCellClick: O,
      onCellDblclick: x,
      onCellContextmenu: D,
      onCellMouseover: M,
      onCellMouseout: R,
      onSelectAllCheckbox: B,
      onUpdateSort: F,
      zmzDataList: a
    };
  }
}, Kg = {
  class: "zmz-table__tbody",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, Qg = ["onClick", "onDblclick", "onContextmenu", "onMouseenter", "onMouseleave"], Jg = ["onClick", "onDblclick", "onContextmenu", "onMouseover", "onMouseout"], ey = {
  key: 0,
  class: "zmz-table__cell"
}, ty = {
  key: 1,
  class: "zmz-table__cell"
}, ny = {
  key: 2,
  class: "zmz-table__cell"
}, ay = {
  key: 3,
  class: "zmz-table__cell"
};
function ly(e, t, a, n, o, r) {
  const l = oe("zmz-table-colgroup"), i = oe("zmz-table-render"), s = oe("zmz-radio"), d = oe("zmz-checkbox");
  return v(), _("table", Kg, [
    K(l, { data: a.column }, null, 8, ["data"]),
    u("tbody", null, [
      (v(!0), _(G, null, fe(n.zmzDataList, (c, f) => (v(), _("tr", {
        class: P(["zmz-table__row", [n.setRowClass(c, f)]]),
        key: c.columnKey,
        style: j([n.setRowStyle(f)]),
        onClick: (m) => n.onRowClick(c, f, m),
        onDblclick: (m) => n.onRowDblclick(c, f, m),
        onContextmenu: _e((m) => n.onRowContextmenu(c, f, m), ["prevent"]),
        onMouseenter: (m) => n.onRowMouseover(c, f, m),
        onMouseleave: (m) => n.onRowMouseout(c, f, m)
      }, [
        (v(!0), _(G, null, fe(n.zmzDataColumn, (m, g) => (v(), _("td", {
          class: P(["zmz-table__column", [n.setColumnClass(m)]]),
          key: g,
          onClick: _e((h) => n.onCellClick(m, c, f, h), ["stop"]),
          onDblclick: _e((h) => n.onCellDblclick(m, c, f, h), ["stop"]),
          onContextmenu: _e((h) => n.onCellContextmenu(m, c, f, h), ["prevent", "stop"]),
          onMouseover: _e((h) => n.onCellMouseover(m, c, f, h), ["stop"]),
          onMouseout: _e((h) => n.onCellMouseout(m, c, f, h), ["stop"])
        }, [
          m.slots && m.slots.default ? (v(), pe(i, {
            key: 0,
            item: c,
            "item-column": m,
            index: f
          }, null, 8, ["item", "item-column", "index"])) : (v(), _(G, { key: 1 }, [
            m.type === "radio" ? (v(), _("div", ey, [
              K(s, {
                modelValue: c.radio,
                "onUpdate:modelValue": (h) => c.radio = h,
                name: c.nameKey,
                onClick: _e((h) => n.radioChange(f), ["prevent", "stop"]),
                value: !0
              }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "onClick"])
            ])) : m.type === "checkbox" ? (v(), _("div", ty, [
              K(d, {
                modelValue: c.checkbox,
                "onUpdate:modelValue": (h) => c.checkbox = h,
                name: c.nameKey,
                onClick: _e((h) => n.checkboxChange(c, f), ["prevent", "stop"]),
                value: !0
              }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "onClick"])
            ])) : m.type === "index" ? (v(), _("div", ny, Z(f), 1)) : (v(), _("div", ay, Z(c.row[m.prop]), 1))
          ], 64))
        ], 42, Jg))), 128))
      ], 46, Qg))), 128))
    ])
  ]);
}
const oy = /* @__PURE__ */ H(Xg, [["render", ly]]), ry = {
  name: "ZmzTableThead",
  components: {
    ZmzTableColgroup: Lr,
    ZmzCheckbox: Ot
  },
  props: {
    /**
     * 列
     */
    column: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 总宽度
     */
    space: {
      type: Boolean,
      default: !1
    },
    scrollBar: {
      type: Object,
      default() {
        return {
          width: 0,
          height: 0
        };
      }
    }
  },
  setup(e) {
    const t = be("zmzTable", {}), a = b(!1), n = b(!1), o = b([null, "asc", "desc"]), r = z(() => e.column.map((f) => f.Instance)), l = (f) => {
      let m = [];
      return m.push(`zmz-table__column--${f.props.align}`), f.props.sortable && (m.push("zmz-table__column--sortable"), f.proxy.order && m.push(`zmz-table__column--sortable-${f.proxy.order}`)), m;
    }, i = (f, m) => {
      m == 0 || f == m ? n.value = !1 : n.value = !0, f == m ? a.value = !0 : a.value = !1;
    }, s = (f) => {
      f || (n.value = !1), t.setSelectAllCheckbox(f);
    }, d = (f, m, g) => {
      f.stopPropagation();
      let h = m.proxy.order === g ? null : g || c(m);
      m.props.sortable && (h ? m.proxy.order = h : m.proxy.order = null, t.onSortChange(m, h, f));
    }, c = (f) => {
      if (f.proxy.order === "") return o.value[0];
      const m = o.value.indexOf(f.proxy.order || null);
      return o.value[m > o.value.length - 2 ? 0 : m + 1];
    };
    return {
      columnList: r,
      setColumnClass: l,
      semiselection: n,
      checkbox: a,
      setCheckbox: i,
      onAllChange: s,
      handleSortClick: d
    };
  }
}, iy = {
  class: "zmz-table__thead",
  cellspacing: "0",
  cellpadding: "0",
  border: "0"
}, sy = ["data-title"], uy = {
  key: 0,
  class: "zmz-table__cell"
}, dy = {
  key: 1,
  class: "zmz-table__cell"
}, cy = {
  key: 2,
  class: "zmz-table__cell"
}, my = ["onClick"], fy = ["onClick"], vy = ["onClick"];
function zy(e, t, a, n, o, r) {
  const l = oe("zmz-table-colgroup"), i = oe("zmz-checkbox");
  return v(), _("table", iy, [
    K(l, {
      data: a.column,
      space: "",
      "scroll-bar": a.scrollBar
    }, null, 8, ["data", "scroll-bar"]),
    u("thead", null, [
      u("tr", null, [
        (v(!0), _(G, null, fe(n.columnList, (s, d) => (v(), _("th", {
          class: P(["zmz-table__column", [n.setColumnClass(s)]]),
          "data-title": s.props.label,
          key: d
        }, [
          s.props.type === "checkbox" ? (v(), _("div", uy, [
            K(i, {
              modelValue: n.checkbox,
              "onUpdate:modelValue": t[0] || (t[0] = (c) => n.checkbox = c),
              semiselection: n.semiselection,
              onOnChange: n.onAllChange
            }, null, 8, ["modelValue", "semiselection", "onOnChange"])
          ])) : s.props.type === "radio" ? (v(), _("div", dy, [...t[1] || (t[1] = [
            u("span", null, null, -1)
          ])])) : (v(), _("div", cy, [
            ne(Z(s.props.label) + " ", 1),
            s.props.sortable ? (v(), _("span", {
              key: 0,
              class: "zmz-table__sortable",
              onClick: _e((c) => n.handleSortClick(c, s), ["stop"])
            }, [
              u("i", {
                class: "zmz-table__sortable__icon zmz-table__sortable__icon--asc",
                onClick: (c) => n.handleSortClick(c, s, "asc")
              }, null, 8, fy),
              u("i", {
                class: "zmz-table__sortable__icon zmz-table__sortable__icon--desc",
                onClick: (c) => n.handleSortClick(c, s, "desc")
              }, null, 8, vy)
            ], 8, my)) : A("", !0)
          ]))
        ], 10, sy))), 128)),
        a.scrollBar.width ? (v(), _("th", {
          key: 0,
          class: "zmz-table__scroll",
          style: j({ width: a.scrollBar.width + "px" })
        }, null, 4)) : A("", !0)
      ])
    ])
  ]);
}
const _y = /* @__PURE__ */ H(ry, [["render", zy]]), hy = (e) => (e !== void 0 && (e = parseInt(e, 10), isNaN(e) && (e = null)), e), gy = rt({
  name: "ZmzTable",
  components: {
    ZmzTableTbody: oy,
    ZmzTableThead: _y
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: {
      type: Boolean,
      default: !1
    },
    checkboxKey: {
      type: String,
      default: ""
    },
    /**
     * 高度
     */
    height: [Number, String],
    /**
     * 最大高度
     */
    maxHeight: [Number, String],
    /**
     * 边线
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 行内类名
     */
    rowClassName: [String, Function],
    /**
     * 斑马纹
     */
    stripes: {
      type: Boolean,
      default: !1
    },
    /**
     * 斑马纹颜色
     */
    stripesColor: String,
    /**
    * 自适应
    */
    fit: {
      type: Boolean,
      default: !0
    },
    /**
     * 默认排序
     */
    defaultSort: Object,
    /**
     * 排序方法
     */
    sortMethod: Function
  },
  emits: ["on-select", "on-sort-change", "on-select-radio", "on-select-checkbox", "on-select-all-checkbox", "on-row-click", "on-row-dblclick", "on-row-contextmenu", "on-row-contextmenu", "on-row-mouseover", "on-row-mouseout", "on-cell-click", "on-cell-dblclick", "on-cell-contextmenu", "on-cell-mouseover", "on-cell-mouseout"],
  setup(e, { emit: t }) {
    const a = b(), n = b(null), o = b(null), r = b(null), l = b(null), i = b(null), s = b(null), d = b(0), c = b([]), f = b("start"), m = b("start"), g = b(0), h = b(0), y = b(0), C = b(!1), k = b(!1), S = b({}), L = b(null), p = b([]), w = b(null);
    de(async () => {
      await Se(), h.value = r.value.getBoundingClientRect().height, k.value = n.value.$el.offsetHeight > l.value.offsetHeight, l.value && l.value.addEventListener("scroll", O), i.value && i.value.addEventListener("scroll", x), s.value && s.value.addEventListener("scroll", x), w.value = Qo(() => {
        V(), W();
      }), w.value && a.value && w.value.observe(a.value);
    }), Ze(() => {
      w.value && a.value && (w.value.unobserve(a.value), w.value = null), l.value && l.value.removeEventListener("scroll", O), i.value && i.value.removeEventListener("scroll", x), s.value && s.value.removeEventListener("scroll", x);
    });
    const O = (U) => {
      let { scrollTop: ae, scrollLeft: ze, scrollWidth: me, scrollHeight: Ye, clientWidth: ft, clientHeight: Bt } = l.value;
      r.value.scrollLeft = U.target.scrollLeft, k.value && (i.value && (i.value.scrollTop = U.target.scrollTop), s.value && (s.value.scrollTop = U.target.scrollTop), D(Math.ceil(ae), Ye, Bt, "y")), C.value && (i.value && (i.value.scrollLeft = U.target.scrollLeft), s.value && (s.value.scrollLeft = U.target.scrollLeft), D(Math.ceil(ze), me, ft, "x"));
    }, x = (U) => {
      let { scrollTop: ae, scrollHeight: ze, clientHeight: me } = l.value;
      k.value && (l.value && (l.value.scrollTop = U.target.scrollTop), D(ae, ze, me, "y"));
    }, D = (U, ae, ze, me) => {
      U == 0 ? me == "x" ? f.value = "start" : m.value = "start" : U >= ae - ze ? me == "x" ? f.value = "end" : m.value = "end" : me == "x" ? f.value = "center" : m.value = "center";
    };
    Vr(async () => {
      await Se(), h.value = r.value.getBoundingClientRect().height, k.value = n.value.$el.offsetHeight > l.value.offsetHeight, V(), W();
    });
    const M = z(() => {
      let U = [], ae = [], ze = [], me = [];
      return c.value.forEach((Ye) => {
        (Ye.Instance.props.fixed === "left" || Ye.Instance.props.fixed === !0) && ae.push(Ye), Ye.Instance.props.fixed === "right" && ze.push(Ye), Ye.Instance.props.fixed !== "left" && Ye.Instance.props.fixed !== "right" && Ye.Instance.props.fixed !== !0 && me.push(Ye);
      }), U.concat(ae, me, ze);
    }), R = z(() => {
      let U = [];
      return e.border && U.push("zmz-table--border"), C.value && U.push("zmz-table--overflow-scrollx"), k.value && U.push("zmz-table--overflow-scrolly"), C.value && U.push(`zmz-table--overflow-scrollx-${f.value}`), k.value && U.push(`zmz-table--overflow-scrolly-${m.value}`), U;
    }), B = z(() => {
      let U = {};
      return e.height && (U.height = Me(e.height)), e.maxHeight && (U["max-height"] = Me(e.maxHeight)), U;
    }), F = z(() => {
      let U = {};
      return e.height && (U.height = y.value + "px"), e.maxHeight && (U["max-height"] = y.value + "px"), U;
    }), E = z(() => {
      let U = {}, ae = d.value;
      return k.value && (ae = d.value - ye.value.width), U.width = ae + "px", U;
    }), T = z(() => {
      let U = {}, ae = d.value;
      return k.value && (ae = d.value - ye.value.width), U.width = ae + "px", U;
    }), I = () => {
      const U = [];
      return c.value.forEach((ae) => {
        ae.Instance.props.width = hy(ae.Instance.props.width), U.push(ae.Instance.props);
      }), U;
    }, V = () => {
      if (!a.value) return;
      let U = I(), ae = 0, ze = U.filter((me) => typeof me.width != "number");
      if (U.length > 0 && e.fit) {
        if (U.forEach((me) => {
          ae += me.width || me.minWidth || 80;
        }), ae <= a.value.offsetWidth - ye.value.width) {
          C.value = !1;
          const me = a.value.offsetWidth - ye.value.width - ae, Ye = ze.reduce((Ct, Bl) => Ct + (Bl.minWidth || 80), 0), ft = me / Ye;
          let Bt = 0;
          ze.forEach((Ct, Bl) => {
            if (Bl === 0) return;
            const vo = Math.floor((Ct.minWidth || 80) * ft);
            Bt += vo, Ct.realWidth = (Ct.minWidth || 80) + vo;
          }), ze.length && (ze[0].realWidth = (ze[0].minWidth || 80) + me - Bt);
        } else
          C.value = !0, ze.forEach((me) => {
            me.realWidth = me.minWidth || 80;
          });
        d.value = Math.max(ae, a.value.offsetWidth);
      } else
        U.forEach((me) => {
          !me.width && !me.minWidth ? me.realWidth = 80 : me.realWidth = me.width || me.minWidth || 80, ae += me.realWidth;
        }), C.value = ae > a.value.offsetWidth, d.value = ae;
    }, W = () => {
      if (!a.value) return;
      if (e.height || e.maxHeight) {
        let ae = a.value.getBoundingClientRect().height, ze = h.value;
        y.value = ae - ze;
      }
    }, $ = () => {
      a.value && l.value && n.value && (V(), W());
    }, X = z(() => c.value.filter((U) => U.Instance.props.fixed === "left" || U.Instance.props.fixed === !0).length), ee = z(() => {
      let U = {}, ae = 0;
      if (I().forEach((me) => {
        (me.fixed === "left" || me.fixed === !0) && (ae += me.width || me.realWidth);
      }), e.height) {
        let me = y.value + h.value;
        C.value && (me = y.value + h.value - ye.value.height), U.height = me + "px";
      }
      if (e.maxHeight) {
        let me = y.value + h.value;
        C.value && (me = y.value + h.value - ye.value.height), U["max-height"] = me + "px";
      }
      return C.value && (U.bottom = ye.value.height + "px"), U.width = ae + "px", U;
    }), J = z(() => {
      let U = {};
      if (e.height) {
        let ae = y.value;
        C.value && (ae = y.value - ye.value.height), U.height = ae + "px";
      }
      if (e.maxHeight) {
        let ae = y.value;
        C.value && (ae = y.value - ye.value.height), U["max-height"] = ae + "px";
      }
      return U.top = h.value + "px", U;
    }), q = z(() => c.value.filter((U) => U.Instance.props.fixed === "right").length), ve = z(() => {
      let U = {}, ae = 0;
      if (I().forEach((me) => {
        me.fixed === "right" && (ae += me.width || me.realWidth);
      }), k.value && (U.right = ye.value.width + "px"), e.height) {
        let me = y.value + h.value;
        C.value && (me = y.value + h.value - ye.value.height), U.height = me + "px";
      }
      if (e.maxHeight) {
        let me = y.value + h.value;
        C.value && (me = y.value + h.value - ye.value.height), U["max-height"] = me + "px";
      }
      return C.value && (U.bottom = ye.value.height + "px"), U.width = ae + "px", U;
    }), se = z(() => {
      let U = {};
      if (e.height) {
        let ae = y.value;
        C.value && (ae = y.value - ye.value.height), U.height = ae + "px";
      }
      if (e.maxHeight) {
        let ae = y.value;
        C.value && (ae = y.value - ye.value.height), U["max-height"] = ae + "px";
      }
      return U.top = h.value + "px", U;
    }), he = z(() => {
      let U = {};
      return U.height = h.value + "px", U.width = ye.value.width + "px", U;
    }), ye = z(() => {
      let U, ae;
      if (U !== void 0) return U;
      if (ae !== void 0) return ae;
      const ze = document.createElement("div");
      ze.className = "zmz-table__tbody-wrap", ze.style.visibility = "hidden", ze.style.width = "100px", ze.style.height = "100px", ze.style.position = "absolute", ze.style.top = "-9999px", document.body.appendChild(ze);
      const me = ze.offsetWidth, Ye = ze.offsetHeight;
      ze.style.overflow = "scroll";
      const ft = document.createElement("div");
      ft.style.width = "100%", ft.style.height = "100%", ze.appendChild(ft);
      const Bt = ft.offsetWidth, Ct = ft.offsetHeight;
      return ze.parentNode.removeChild(ze), U = me - Bt, ae = Ye - Ct, {
        width: U,
        height: ae
      };
    }), Te = (U) => {
      if (!l.value) return;
      let { scrollTop: ae, scrollHeight: ze, clientHeight: me } = l.value;
      U === "top" && (i.value && (i.value.scrollTop = l.value.scrollTop - 40), s.value && (s.value.scrollTop = l.value.scrollTop - 40)), U === "bottom" && (i.value && (i.value.scrollTop = l.value.scrollTop + 40), s.value && (s.value.scrollTop = l.value.scrollTop + 40)), k.value && D(Math.round(ae), ze, me, "y");
    }, De = (U) => {
      U.wheelDelta ? (U.wheelDelta > 0 && Te("top"), U.wheelDelta < 0 && Te("bottom")) : U.detail && (U.detail > 0 && Te("top"), U.detail < 0 && Te("bottom"));
    }, ge = () => e.data.map((U, ae) => ({
      index: ae + 1,
      row: U,
      columnKey: g.value++,
      nameKey: (/* @__PURE__ */ new Date()).getTime() + "",
      checkbox: !1,
      radio: !1
    })), Q = (U) => {
      n.value.setRadioCurrentRow(U);
    }, ke = (U) => {
      n.value.clearRadioCurrentRow(U);
    }, Ee = (U) => {
      n.value.setCheckboxCurrentRow(U);
    }, Y = (U) => {
      n.value.clearCheckboxCurrentRow(U);
    }, ce = (U) => {
      t("on-select-radio", U);
    }, Ae = (U, ae, ze) => {
      o.value.setCheckbox(ae, ze), t("on-select-checkbox", U);
    }, $e = (U) => {
      n.value.onSelectAllCheckbox(U);
    }, He = (U, ae) => {
      t("on-select-all-checkbox", U, ae);
    }, We = (U, ae, ze) => {
      t("on-row-click", U, ae, ze), t("on-select", U);
    }, Ue = (U, ae, ze) => {
      t("on-row-dblclick", U, ae, ze);
    }, at = (U, ae, ze) => {
      t("on-row-contextmenu", U, ae, ze);
    }, gt = (U, ae, ze) => {
      S.value = U, t("on-row-mouseover", U, ae, ze);
    }, Mt = (U, ae, ze) => {
      S.value = {}, t("on-row-mouseout", U, ae, ze);
    }, it = (U, ae, ze, me) => {
      t("on-cell-click", U, ae, ze, me);
    }, st = (U, ae, ze, me) => {
      t("on-cell-dblclick", U, ae, ze, me);
    }, te = (U, ae, ze, me) => {
      t("on-cell-contextmenu", U, ae, ze, me);
    }, we = (U, ae, ze, me) => {
      t("on-cell-mouseover", U, ae, ze, me);
    }, Et = (U, ae, ze, me) => {
      t("on-cell-mouseout", U, ae, ze, me);
    }, yn = (U, ae, ze) => {
      n.value.onUpdateSort(U.props.prop, ae, ze), t("on-sort-change", U, ae, ze);
    };
    return ue(() => e.data, () => {
      p.value = ge();
    }, { immediate: !0, deep: !0 }), Fe("zmzTable", {
      zmzTableList: c,
      updateDom: $,
      defaultSort: e.defaultSort,
      sortMethod: e.sortMethod,
      columnKey: g,
      onSelectRadio: ce,
      onSelectCheckbox: Ae,
      setSelectAllCheckbox: $e,
      onRowClick: We,
      onRowDblclick: Ue,
      onRowContextmenu: at,
      onCellClick: it,
      onCellDblclick: st,
      onCellContextmenu: te,
      onRowMouseover: gt,
      onRowMouseout: Mt,
      onCellMouseover: we,
      onCellMouseout: Et,
      onSelectAllCheckbox: He,
      onSortChange: yn,
      dataClone: L
    }), {
      zmzTable: a,
      zmzTableTbodyWrap: l,
      zmzTableTheadWrap: r,
      tableHeader: M,
      zmzTableClass: R,
      zmzTableStyle: B,
      zmzTableTbodyWrapStyle: F,
      zmzTableTbody: n,
      zmzTableThead: o,
      scroll,
      isScrollY: k,
      zmzTableTheadWidthStyle: E,
      zmzTableTbodyWidthStyle: T,
      zmzTableList: c,
      zmzTableFixedRightTbodyWrap: s,
      zmzTableData: p,
      rowHover: S,
      scrollBar: ye,
      isFixedRight: q,
      zmzTableFixedRightStyle: ve,
      zmzTableFixedRightTbodyWrapStyle: se,
      isFixedLeft: X,
      zmzTableFixedLeftStyle: ee,
      zmzTableFixedLeftTbodyWrapStyle: J,
      zmzTableFixedLeftTbodyWrap: i,
      zmzTableFixedRightSupplementStyle: he,
      setRadioCurrentRow: Q,
      clearRadioCurrentRow: ke,
      setCheckboxCurrentRow: Ee,
      clearCheckboxCurrentRow: Y,
      mousewheelFunc: De
    };
  }
}), yy = {
  class: "zmz-table__thead-wrap",
  ref: "zmzTableTheadWrap"
}, py = { class: "zmz-table__fixed-left__thead-wrap" }, by = { class: "zmz-table__fixed-right__thead-wrap" }, ky = { class: "zmz-table__columns-hidden" };
function Cy(e, t, a, n, o, r) {
  const l = oe("zmz-table-thead"), i = oe("zmz-table-tbody");
  return v(), _("div", {
    class: P(["zmz-table", [e.zmzTableClass]]),
    ref: "zmzTable",
    style: j([e.zmzTableStyle])
  }, [
    u("div", yy, [
      K(l, {
        column: e.tableHeader,
        space: "",
        "scroll-bar": e.scrollBar,
        style: j(e.zmzTableTheadWidthStyle),
        ref: "zmzTableThead"
      }, null, 8, ["column", "scroll-bar", "style"])
    ], 512),
    u("div", {
      class: "zmz-table__tbody-wrap",
      ref: "zmzTableTbodyWrap",
      style: j([e.zmzTableTbodyWrapStyle]),
      onMousewheel: t[0] || (t[0] = (...s) => e.mousewheelFunc && e.mousewheelFunc(...s))
    }, [
      K(i, {
        "row-class-name": e.rowClassName,
        "stripes-color": e.stripesColor,
        stripes: e.stripes,
        data: e.zmzTableData,
        column: e.tableHeader,
        ref: "zmzTableTbody",
        style: j(e.zmzTableTbodyWidthStyle),
        "row-hover": e.rowHover
      }, null, 8, ["row-class-name", "stripes-color", "stripes", "data", "column", "style", "row-hover"]),
      e.zmzTableData.length ? A("", !0) : (v(), _("div", {
        key: 0,
        class: "zmz-table__empty",
        style: j([e.zmzTableTbodyWidthStyle])
      }, [...t[3] || (t[3] = [
        u("div", { class: "zmz-table__empty__text" }, "暂无数据", -1)
      ])], 4))
    ], 36),
    e.isFixedLeft ? (v(), _("div", {
      key: 0,
      class: "zmz-table__fixed-left",
      style: j([e.zmzTableFixedLeftStyle]),
      ref: "zmzTableFixedLeft"
    }, [
      u("div", py, [
        K(l, {
          column: e.tableHeader,
          style: j(e.zmzTableTheadWidthStyle)
        }, null, 8, ["column", "style"])
      ]),
      u("div", {
        class: "zmz-table__fixed-left__tbody-wrap",
        ref: "zmzTableFixedLeftTbodyWrap",
        style: j([e.zmzTableFixedLeftTbodyWrapStyle]),
        onMousewheel: t[1] || (t[1] = (...s) => e.mousewheelFunc && e.mousewheelFunc(...s))
      }, [
        K(i, {
          "row-class-name": e.rowClassName,
          "stripes-color": e.stripesColor,
          data: e.zmzTableData,
          column: e.tableHeader,
          style: j(e.zmzTableTbodyWidthStyle),
          "row-hover": e.rowHover
        }, null, 8, ["row-class-name", "stripes-color", "data", "column", "style", "row-hover"])
      ], 36)
    ], 4)) : A("", !0),
    e.isFixedRight ? (v(), _("div", {
      key: 1,
      class: "zmz-table__fixed-right",
      style: j([e.zmzTableFixedRightStyle]),
      ref: "zmzTableFixedRight"
    }, [
      u("div", by, [
        K(l, {
          column: e.tableHeader,
          style: j(e.zmzTableTheadWidthStyle)
        }, null, 8, ["column", "style"])
      ]),
      u("div", {
        class: "zmz-table__fixed-right__tbody-wrap",
        ref: "zmzTableFixedRightTbodyWrap",
        style: j([e.zmzTableFixedRightTbodyWrapStyle]),
        onMousewheel: t[2] || (t[2] = (...s) => e.mousewheelFunc && e.mousewheelFunc(...s))
      }, [
        K(i, {
          "row-class-name": e.rowClassName,
          "stripes-color": e.stripesColor,
          data: e.zmzTableData,
          column: e.tableHeader,
          style: j(e.zmzTableTbodyWidthStyle),
          "row-hover": e.rowHover
        }, null, 8, ["row-class-name", "stripes-color", "data", "column", "style", "row-hover"])
      ], 36)
    ], 4)) : A("", !0),
    e.isScrollY ? (v(), _("div", {
      key: 2,
      class: "zmz-table__fixed-right--supplement",
      style: j([e.zmzTableFixedRightSupplementStyle])
    }, null, 4)) : A("", !0),
    u("div", ky, [
      N(e.$slots, "default")
    ])
  ], 6);
}
const Ia = /* @__PURE__ */ H(gy, [["render", Cy]]);
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
const wy = {
  name: "ZmzTableColumn",
  componentName: "ZmzTableColumn",
  props: {
    /**
     * 文本
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * 字段
     */
    prop: {
      type: String,
      default: ""
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: ""
    },
    /**
     * 最小宽度
     */
    minWidth: {
      type: String,
      default: ""
    },
    /**
     * 固定列
     */
    fixed: {
      type: [Boolean, String],
      default: !1,
      validator(e) {
        return [!0, !1, "left", "right"].includes(e);
      }
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "",
      validator(e) {
        return ["", "index", "radio", "checkbox"].includes(e);
      }
    },
    /**
     * 多级表头特有
     */
    parent: {
      type: Boolean,
      default: !1
    },
    /**
     * 类型
     */
    align: {
      type: String,
      default: "left",
      validator(e) {
        return ["left", "center", "right"].includes(e);
      }
    },
    /**
     * 排序
     */
    sortable: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = b(null), t = be("zmzTable", {}), a = Ce();
    if (t == "")
      throw new Error("zmzTableColumn 父标签不存在");
    de(() => {
      n(), o();
    }), Ne(() => {
      r(), o();
    });
    const n = () => {
      t.zmzTableList.value.push({
        uid: a.uid,
        Instance: a
      });
      const l = Pe(a.parent, "ZmzTableColumn");
      l && (l.childColumnList || (l.childColumnList = []), l.childColumnList.push({
        uid: a.uid,
        Instance: a
      }));
    }, o = () => {
      t.updateDom();
    }, r = () => {
      if (t.zmzTableList.value && t.zmzTableList.value.length) {
        const i = t.zmzTableList.value.findIndex((s) => s.uid === a.uid);
        t.zmzTableList.value.splice(i, 1);
      }
      const l = Pe(a.parent, "ZmzTableColumn");
      if (l && l.childColumnList && l.childColumnList.length) {
        const i = l.childColumnList.findIndex((s) => s.uid === a.uid);
        l.childColumnList.splice(i, 1);
      }
    };
    return {
      order: e
    };
  }
};
function Sy(e, t, a, n, o, r) {
  return v(), _("div", null, [
    N(e.$slots, "default")
  ]);
}
const Aa = /* @__PURE__ */ H(wy, [["render", Sy]]);
Aa.install = function(e) {
  e.component(Aa.name, Aa);
};
const xy = {
  name: "ZmzProgress",
  props: {
    /**
     * 进度值
     */
    num: {
      type: Number,
      default: 0
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "error", "primary", "info", "default"].includes(e);
      }
    },
    /**
     * 大小
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "default", "small", "mini"].includes(e);
      }
    },
    /**
     * 线宽
     */
    width: String,
    /**
     * 线高
     */
    height: String,
    /**
     * 线圆角
     */
    radius: String,
    /**
     * 线颜色
     */
    color: String,
    /**
     * 背景色
     */
    backgroundColor: String,
    /**
     * 文字颜色
     */
    textColor: String
  },
  emits: ["on-change"],
  setup(e, { emit: t }) {
    const a = z(() => {
      let f = [];
      return e.type && f.push(`zmz-progress--${e.type}`), f;
    }), n = z(() => {
      let f = [];
      return e.size && f.push(`zmz-progress--size-${e.size}`), f;
    }), o = z(() => {
      var f = e.num;
      return f > 100 ? f = 100 : f < 0 && (f = 0), t("on-change", f), f;
    }), r = z(() => {
      let f = {};
      return e.width && (f.width = e.width), f;
    }), l = z(() => {
      let f = {};
      return e.height && (f.height = e.height), f;
    }), i = z(() => {
      let f = {};
      return e.radius && (f.borderRadius = e.radius), f;
    }), s = z(() => {
      let f = {};
      return e.backgroundColor && (f.background = e.backgroundColor), f;
    }), d = z(() => {
      let f = {};
      return e.color && (f.background = e.color), f;
    }), c = z(() => {
      let f = {};
      return e.textColor && (f.color = e.textColor), f;
    });
    return {
      numlen: o,
      typeClass: a,
      sizeClass: n,
      styleWidth: r,
      styleHeight: l,
      lineBorderStyle: i,
      textColorStyle: c,
      lineColorStyle: d,
      lineBgColorStyle: s
    };
  }
};
function Ty(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-progress", [n.typeClass, n.sizeClass]]),
    style: j([n.styleWidth, n.styleHeight])
  }, [
    u("div", {
      class: "zmz-progress__line",
      style: j([n.styleWidth, n.styleHeight, n.lineBorderStyle, n.lineBgColorStyle])
    }, [
      u("div", {
        class: "zmz-progress__bar",
        style: j([{ width: n.numlen + "%" }, n.styleHeight, n.lineBorderStyle, n.lineColorStyle])
      }, null, 4)
    ], 4),
    u("div", {
      class: "zmz-progress__text",
      style: j(n.textColorStyle)
    }, Z(n.numlen) + "%", 5)
  ], 6);
}
const Pa = /* @__PURE__ */ H(xy, [["render", Ty]]);
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
const Oy = {
  name: "ZmzComment",
  props: {
    /**
     * 嵌套偏移
     */
    offset: {
      type: String,
      default: "70px"
    }
  },
  setup(e) {
    return Fe("zmzComment", {
      offset: e.offset
    }), {};
  }
}, Ly = { class: "zmz-comment" };
function Dy(e, t, a, n, o, r) {
  return v(), _("div", Ly, [
    N(e.$slots, "default")
  ]);
}
const Na = /* @__PURE__ */ H(Oy, [["render", Dy]]);
Na.install = function(e) {
  e.component(Na.name, Na);
};
const My = {
  name: "ZmzCommentItem",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 内容
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 时间
     */
    date: {
      type: String,
      default: ""
    },
    /**
     * 头像
     */
    avatar: String,
    /**
     * 偏移
     */
    offset: {
      type: String,
      default: "70px"
    }
  },
  setup(e) {
    const t = be("zmzComment", {});
    return {
      itemOffset: z(() => e.offset ? e.offset : t.offset)
    };
  }
}, Ey = { class: "zmz-comment__item" }, By = { class: "zmz-comment__wrap" }, Iy = {
  key: 0,
  class: "zmz-comment__wrap__left"
}, Ay = { class: "zmz-comment__avatar" }, Py = ["src"], Ny = { class: "zmz-comment__wrap__right" }, Vy = {
  key: 0,
  class: "zmz-comment__title"
}, Fy = {
  key: 1,
  class: "zmz-comment__content"
}, Ry = { class: "zmz-comment__operation" }, Zy = {
  key: 0,
  class: "zmz-comment__date"
}, Wy = {
  key: 1,
  class: "zmz-comment__button"
};
function $y(e, t, a, n, o, r) {
  return v(), _("div", Ey, [
    u("div", By, [
      a.avatar || e.$slots.avatar ? (v(), _("div", Iy, [
        N(e.$slots, "avatar", {}, () => [
          u("div", Ay, [
            u("img", {
              class: "zmz-comment__avatar__inner",
              src: a.avatar
            }, null, 8, Py)
          ])
        ])
      ])) : A("", !0),
      u("div", Ny, [
        a.title || e.$slots.title ? (v(), _("div", Vy, [
          N(e.$slots, "title", {}, () => [
            ne(Z(a.title), 1)
          ])
        ])) : A("", !0),
        a.content || e.$slots.content ? (v(), _("div", Fy, [
          N(e.$slots, "content", {}, () => [
            ne(Z(a.content), 1)
          ])
        ])) : A("", !0),
        u("div", Ry, [
          a.date || e.$slots.date ? (v(), _("div", Zy, [
            N(e.$slots, "date", {}, () => [
              ne(Z(a.date), 1)
            ])
          ])) : A("", !0),
          e.$slots.button ? (v(), _("div", Wy, [
            N(e.$slots, "button")
          ])) : A("", !0)
        ])
      ])
    ]),
    u("div", {
      class: "zmz-comment__nested",
      style: j({ "margin-left": n.itemOffset })
    }, [
      N(e.$slots, "default")
    ], 4)
  ]);
}
const Va = /* @__PURE__ */ H(My, [["render", $y]]);
Va.install = function(e) {
  e.component(Va.name, Va);
};
const jy = {
  name: "ZmzCollapse",
  props: {
    /**
     * 激活
     */
    modelValue: [String, Number, Array],
    /**
     * 	手风琴模式
     */
    accordion: {
      type: Boolean,
      default: !1
    },
    /**
     * 	边线
     */
    border: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = b([]), n = z({
      get() {
        return e.modelValue;
      },
      set(s) {
        t("update:modelValue", s);
      }
    }), o = (s) => {
      n.value = s, t("on-change", s);
    }, r = (s) => {
      if (e.accordion) {
        let d = n.value === s ? "" : s;
        o(d);
      } else {
        let d = l();
        if (d.indexOf(s) > -1) {
          let c = d.findIndex((f) => f == s);
          d.splice(c, 1);
        } else
          d.push(s);
        o(d);
      }
    }, l = () => {
      let s = n.value || [];
      return Object.prototype.toString.call(s) !== "[object Array]" && (s = [s]), e.accordion && s.length && (s = [s[0]]), s;
    }, i = z(() => {
      let s = [];
      return e.border && s.push("zmz-collapse--border"), s;
    });
    return Fe("zmzCollapse", {
      zmzCollapseList: a,
      handleItemClick: r,
      model: n
    }), {
      zmzCollapseClass: i
    };
  }
};
function Hy(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-collapse", n.zmzCollapseClass])
  }, [
    N(e.$slots, "default")
  ], 2);
}
const Fa = /* @__PURE__ */ H(jy, [["render", Hy]]);
Fa.install = function(e) {
  e.component(Fa.name, Fa);
};
const Yy = {
  name: "ZmzCollapseItem",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      requre: !0
    },
    /**
     * 唯一标识
     */
    name: [String, Number],
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = be("zmzCollapse", {}), a = Ce(), n = () => {
      e.disabled || t.handleItemClick(e.name);
    }, o = z(() => typeof t.model.value == "string" || typeof t.model.value == "number" ? t.model.value === e.name : t.model.value.indexOf(e.name) > -1);
    de(() => {
      r();
    }), Ne(() => {
      l();
    });
    const r = () => {
      t.zmzCollapseList.value.push({
        uid: a.uid,
        instance: a
      });
    }, l = () => {
      if (t.zmzCollapseList.value && t.zmzCollapseList.value.length) {
        const s = t.zmzCollapseList.value.findIndex((d) => d.uid === a.uid);
        t.zmzCollapseList.value.splice(s, 1);
      }
    }, i = z(() => {
      let s = [];
      return o.value && s.push("zmz-collapse__item--active"), e.disabled && s.push("zmz-collapse__item--disabled"), s;
    });
    return {
      isActive: o,
      zmzCollapseItemClass: i,
      handleClick: n
    };
  }
}, qy = { class: "zmz-collapse__content" };
function Uy(e, t, a, n, o, r) {
  const l = oe("zmz-transition-collapse");
  return v(), _("div", {
    class: P(["zmz-collapse__item", [n.zmzCollapseItemClass]])
  }, [
    u("div", {
      class: "zmz-collapse__title",
      onClick: t[0] || (t[0] = (...i) => n.handleClick && n.handleClick(...i))
    }, [
      N(e.$slots, "title", {}, () => [
        ne(Z(a.title) + " ", 1),
        t[1] || (t[1] = u("i", { class: "zmz-collapse__icon zmz-icon--arrow-right" }, null, -1))
      ])
    ]),
    K(l, null, {
      default: le(() => [
        re(u("div", null, [
          u("div", qy, [
            N(e.$slots, "default")
          ])
        ], 512), [
          [Be, n.isActive]
        ])
      ]),
      _: 3
    })
  ], 2);
}
const Ra = /* @__PURE__ */ H(Yy, [["render", Uy]]);
Ra.install = function(e) {
  e.component(Ra.name, Ra);
};
const Gy = {
  name: "ZmzResult",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 图标
     */
    type: {
      type: String,
      default: "info",
      validator(e) {
        return ["success", "warning", "error", "info"].includes(e);
      }
    },
    /**
     * 描述
     */
    describes: {
      type: String,
      default: ""
    },
    /**
     * 补充信息
     */
    extra: {
      type: String,
      default: ""
    },
    /**
     * 操作
     */
    actions: {
      type: String,
      default: ""
    },
    /**
     * 图标大小
     */
    iconSize: String,
    /**
     * 图标颜色
     */
    iconColor: String
  },
  setup(e) {
    const t = z(() => {
      let o = [];
      return e.type && o.push(`zmz-result__icon--${e.type}`), o;
    }), a = z(() => {
      let o = [];
      return e.type && o.push(`zmz-icon--${e.type}`), o;
    }), n = z(() => {
      let o = {};
      return e.iconSize && (o["font-size"] = e.iconSize), e.iconColor && (o["font-size"] = e.iconColor), o;
    });
    return {
      zmzResultIconClass: t,
      zmzResultIconStyle: n,
      zmzResultIconIClass: a
    };
  }
}, Xy = { class: "zmz-result" }, Ky = {
  key: 1,
  class: "zmz-result__title"
}, Qy = {
  key: 2,
  class: "zmz-result__describes"
}, Jy = {
  key: 3,
  class: "zmz-result__extra"
}, ep = {
  key: 4,
  class: "zmz-result__actions"
};
function tp(e, t, a, n, o, r) {
  return v(), _("div", Xy, [
    e.$slots.icon || a.type ? (v(), _("div", {
      key: 0,
      class: P(["zmz-result__icon", n.zmzResultIconClass])
    }, [
      N(e.$slots, "icon", {}, () => [
        u("i", {
          class: P([n.zmzResultIconIClass]),
          style: j([n.zmzResultIconStyle])
        }, null, 6)
      ])
    ], 2)) : A("", !0),
    e.$slots.title || a.title ? (v(), _("div", Ky, [
      N(e.$slots, "title", {}, () => [
        ne(Z(a.title), 1)
      ])
    ])) : A("", !0),
    e.$slots.describes || a.describes ? (v(), _("div", Qy, [
      N(e.$slots, "describes", {}, () => [
        ne(Z(a.describes), 1)
      ])
    ])) : A("", !0),
    e.$slots.extra || a.extra ? (v(), _("div", Jy, [
      N(e.$slots, "extra", {}, () => [
        ne(Z(a.extra), 1)
      ])
    ])) : A("", !0),
    e.$slots.actions || a.actions ? (v(), _("div", ep, [
      N(e.$slots, "actions", {}, () => [
        ne(Z(a.actions), 1)
      ])
    ])) : A("", !0)
  ]);
}
const Za = /* @__PURE__ */ H(Gy, [["render", tp]]);
Za.install = function(e) {
  e.component(Za.name, Za);
};
const np = {
  name: "ZmzEmpty",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "暂无数据"
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "zmz-icon--empty"
    },
    /**
     * 描述
     */
    describe: {
      type: String,
      default: ""
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: [String, Array],
      default: ""
    },
    /**
     * 图标颜色
     */
    iconColor: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(() => {
      let o = {};
      return e.iconSize && (o["font-size"] = e.iconSize), e.iconColor && (o.color = e.iconColor), o;
    }), a = z(() => {
      let o = {};
      return typeof e.iconSize == "object" && e.iconSize.length ? (o.width = e.iconSize[0], o.height = e.iconSize[1]) : (o.width = e.iconSize, o.height = e.iconSize), o;
    }), n = z(() => /\.(png|jpg|jpeg|gif|svg)$/i.test(e.icon));
    return {
      iconStyle: t,
      imageStyle: a,
      isImage: n
    };
  }
}, ap = { class: "zmz-empty" }, lp = {
  key: 0,
  class: "zmz-empty__icon"
}, op = ["src"], rp = {
  key: 1,
  class: "zmz-empty__title"
}, ip = {
  key: 2,
  class: "zmz-empty__describe"
}, sp = {
  key: 3,
  class: "zmz-empty__custom"
};
function up(e, t, a, n, o, r) {
  return v(), _("div", ap, [
    e.$slots.icon || a.icon ? (v(), _("div", lp, [
      N(e.$slots, "icon", {}, () => [
        n.isImage ? (v(), _("img", {
          key: 1,
          class: "zmz-empty__icon__image",
          src: a.icon,
          style: j([n.imageStyle]),
          alt: "Image or Icon"
        }, null, 12, op)) : (v(), _("i", {
          key: 0,
          class: P(["zmz-empty__icon__inner", [a.icon]]),
          style: j([n.iconStyle])
        }, null, 6))
      ])
    ])) : A("", !0),
    e.$slots.title || a.title ? (v(), _("div", rp, [
      N(e.$slots, "title", {}, () => [
        ne(Z(a.title), 1)
      ])
    ])) : A("", !0),
    e.$slots.describe || a.describe ? (v(), _("div", ip, [
      N(e.$slots, "describe", {}, () => [
        ne(Z(a.describe), 1)
      ])
    ])) : A("", !0),
    e.$slots.default ? (v(), _("div", sp, [
      N(e.$slots, "default")
    ])) : A("", !0)
  ]);
}
const Wa = /* @__PURE__ */ H(np, [["render", up]]);
Wa.install = function(e) {
  e.component(Wa.name, Wa);
};
const dp = {
  name: "ZmzBadge",
  props: {
    /**
     * 主题
     */
    type: {
      type: String,
      default: "primary",
      validator(e) {
        return ["success", "warning", "error", "primary", "default", "info"].includes(e);
      }
    },
    /**
     * 最大值
     */
    max: Number,
    /**
     * 最小值
     */
    num: {
      type: Number,
      default: 0
    },
    /**
     * 是否点
     */
    dot: {
      type: Boolean,
      default: !1
    },
    /**
     * 点大小
     */
    dotSize: {
      type: Number,
      default: 0
    },
    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否固定
     */
    fixed: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = z(() => {
      let r = [];
      return e.fixed && r.push("zmz-badge--fixed"), r;
    }), a = z(() => {
      let r = [];
      return e.type && r.push("zmz-badge__num--" + e.type), r;
    }), n = z(() => {
      let r = 0;
      return e.max ? e.num < e.max ? r = e.num : r = e.max + "+" : r = e.num, r;
    }), o = z(() => {
      let r = {};
      return e.dotSize && (r.width = e.dotSize + "px", r.height = e.dotSize + "px", r.right = e.dotSize / 2 + "px"), r;
    });
    return {
      zmzBadgeClass: t,
      zmzBadgeDotClass: a,
      numOrMax: n,
      zmzBadgeDotStyle: o
    };
  }
};
function cp(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-badge", [n.zmzBadgeClass]])
  }, [
    N(e.$slots, "default"),
    a.show ? (v(), _(G, { key: 0 }, [
      a.dot ? (v(), _("div", {
        key: 0,
        class: P(["zmz-badge__dot", [n.zmzBadgeDotClass]]),
        style: j([n.zmzBadgeDotStyle])
      }, null, 6)) : (v(), _("div", {
        key: 1,
        class: P(["zmz-badge__num", [n.zmzBadgeDotClass]])
      }, [
        N(e.$slots, "num", {}, () => [
          ne(Z(n.numOrMax), 1)
        ])
      ], 2))
    ], 64)) : A("", !0)
  ], 2);
}
const $a = /* @__PURE__ */ H(dp, [["render", cp]]);
$a.install = function(e) {
  e.component($a.name, $a);
};
const Dr = (e) => Promise.all(
  [...e].map(() => function(a) {
    return a.complete ? Promise.resolve(!0) : new Promise((n) => {
      a.onload = n, a.onerror = n;
    });
  })
), mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageLoad: Dr
}, Symbol.toStringTag, { value: "Module" })), fp = {
  name: "ZmzWaterfallItem",
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    delay: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["on-load"],
  setup(e, { emit: t }) {
    const a = b(null), n = () => ({
      ...e.item,
      height: o.value
    }), o = z(() => a.value ? a.value.clientHeight : 200), r = async () => {
      await Dr(a.value.querySelectorAll("img")), setTimeout(() => {
        t("on-load", n());
      }, 100);
    }, l = () => {
      t("on-load", n());
    };
    return de(() => {
      e.delay ? r() : l();
    }), {
      zmzWaterfallItem: a
    };
  }
}, vp = {
  class: "zmz-waterfall__item",
  ref: "zmzWaterfallItem"
};
function zp(e, t, a, n, o, r) {
  return v(), _("div", vp, [
    N(e.$slots, "default")
  ], 512);
}
const sn = /* @__PURE__ */ H(fp, [["render", zp]]), _p = {
  name: "ZmzWaterfall",
  components: {
    ZmzWaterfallItem: sn
  },
  props: {
    /**
     * 数据
     */
    data: {
      type: Array,
      default: () => [],
      validator: (e = []) => !e.length || e[0].key
    },
    /**
     * 是否延迟加载
     */
    delay: {
      type: Boolean,
      default: !0
    },
    /**
     * 间隔
     */
    gutter: {
      type: [Number, String],
      default: 0
    },
    /**
     * 每个子集的默认宽度
     */
    width: {
      type: [Number, String],
      default: 200
    },
    /**
     * 是否显示加载按钮
     */
    button: {
      type: Boolean,
      default: !0
    },
    /**
     * 按钮样式
     */
    buttonStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 按钮文字
     */
    buttonText: {
      type: String,
      default: "加载更多"
    },
    /**
     * 按钮类型
     */
    buttonType: {
      type: String,
      default: "default"
    },
    /**
     * 加载状态
     */
    loading: {
      type: Boolean,
      default: !0
    },
    /**
     * 加载文字
     */
    loadingText: {
      type: String,
      default: "加载中..."
    },
    /**
     * 加载图标
     */
    loadingIcon: {
      type: String,
      default: "zmz-icon--loading"
    },
    /**
     * 加载样式
     */
    loadingStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["on-ready", "on-loadmore"],
  setup(e, { emit: t }) {
    const a = b([]), n = b(e.data), o = b("100%"), r = b(0), l = b(null), i = b(1), s = b([]), d = b(0), c = Dl(i.value), f = Jl(() => {
      let B = 0;
      const F = a.value;
      for (let T = 0; T < F.length && F[T]; T++)
        B = T + 1;
      const E = F.slice(0, B);
      S(E), E.length >= F.length && Se(() => {
        t("on-ready");
      });
    }), m = (B, F) => {
      a.value[B] = F, f();
    }, g = (B = [], F = []) => (B.forEach((E, T) => {
      const I = F[T] || {};
      I.key === E.key && (B[T] = I);
    }), B);
    ue(
      () => e.data,
      (B) => {
        n.value = g(B, n.value);
      }
    );
    const h = z(() => Me(parseInt(e.gutter) / 2)), y = z(() => Me(e.width)), C = z(() => parseInt(e.width) + parseInt(e.gutter)), k = ({ data: B, height: F }) => {
      const E = window.scrollY;
      n.value = n.value.length > B.length ? [...B, ...n.value.slice(B.length)] : B, r.value = F, window.scrollTo({ top: E });
    }, S = (B) => {
      k(w(B));
    }, L = () => {
      i.value = Math.floor(l.value.clientWidth / C.value) || 1, o.value = `${i.value * C.value}px`;
    }, p = Jl(() => {
      L(), k(x(C.value, i.value));
    });
    de(async () => {
      await Se(), L(), window.addEventListener("resize", p);
    }), Fr(() => {
      window.removeEventListener("resize", p);
    });
    const w = (B = []) => (s.value = [], c.value = Dl(i.value), O(B)), O = (B = []) => (B.forEach((F) => {
      const E = D(c.value);
      F.loaded || (F.left = E * C.value, F.top = Math.min(...c.value), F.loaded = 1), c.value[E] += F.height || 100;
    }), d.value = Math.max(...c.value, 0), s.value = s.value.length ? [...s.value, ...B] : B, {
      data: s.value,
      height: d.value
    }), x = () => {
      const B = s.value.map((F) => (F.loaded = 0, F));
      return w(B);
    }, D = (B) => {
      let F = 0;
      for (let E = 1; E < B.length; E++)
        B[E] < B[F] && (F = E);
      return F;
    }, M = z(() => {
      let B = {};
      return o.value && (B.width = o.value), r.value && (B.height = r.value + "px"), B;
    });
    return {
      newlist: n,
      zmzWaterfall: l,
      padding: h,
      waterfallItemWidth: y,
      onLoad: m,
      onLoadData: a,
      zmzWaterfallWrapStyle: M,
      loadMore: () => {
        t("on-loadmore");
      }
    };
  }
}, hp = {
  ref: "zmzWaterfall",
  class: "zmz-waterfall"
}, gp = { class: "zmz-waterfall__loading__text" };
function yp(e, t, a, n, o, r) {
  const l = oe("zmz-waterfall-item"), i = oe("zmz-button");
  return v(), _("div", hp, [
    u("div", {
      class: "zmz-waterfall__wrap",
      style: j([n.zmzWaterfallWrapStyle])
    }, [
      (v(!0), _(G, null, fe(n.newlist, (s, d) => (v(), pe(l, {
        key: s.key || s.id,
        item: s,
        delay: a.delay,
        class: P({ "zmz-waterfall__item__loaded": s.loaded }),
        style: j({
          padding: n.padding,
          width: n.waterfallItemWidth,
          left: `${s.left || 0}px`,
          top: s.loaded ? `${s.top || 0}px` : "100%"
        }),
        onOnLoad: (c) => n.onLoad(d, c)
      }, {
        default: le(() => [
          N(e.$slots, "default", Ie({ ref_for: !0 }, s))
        ]),
        _: 2
      }, 1032, ["item", "delay", "class", "style", "onOnLoad"]))), 128))
    ], 4),
    n.onLoadData.length < n.newlist.length && a.loading ? (v(), _("div", {
      key: 0,
      class: "zmz-waterfall__loading",
      style: j([a.loadingStyle])
    }, [
      u("i", {
        class: P(["zmz-waterfall__loading__icon", a.loadingIcon])
      }, null, 2),
      u("div", gp, Z(a.loadingText), 1)
    ], 4)) : A("", !0),
    a.button ? (v(), _("div", {
      key: 1,
      class: "zmz-waterfall__button",
      style: j([a.buttonStyle])
    }, [
      e.$slots.button ? (v(), _("div", {
        key: 0,
        class: "zmz-waterfall__button__inner",
        onClick: t[0] || (t[0] = _e((...s) => n.loadMore && n.loadMore(...s), ["stop", "prevent"]))
      }, [
        N(e.$slots, "button")
      ])) : (v(), pe(i, {
        key: 1,
        class: "zmz-waterfall__button__inner",
        type: a.buttonType,
        onClick: _e(n.loadMore, ["stop", "prevent"])
      }, {
        default: le(() => [
          ne(Z(a.buttonText), 1)
        ]),
        _: 1
      }, 8, ["type", "onClick"]))
    ], 4)) : A("", !0)
  ], 512);
}
const ja = /* @__PURE__ */ H(_p, [["render", yp]]);
ja.install = function(e) {
  e.component(ja.name, ja);
};
sn.install = function(e) {
  e.component(sn.name, sn);
};
const pp = {
  name: "ZmzSkeletonItem",
  props: {
    /**
     * 下标
     */
    index: {
      type: Number,
      default: 0
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: ""
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "text",
      validator(e) {
        return ["text", "image"].includes(e);
      }
    },
    /**
     * 清除浮动
     */
    both: {
      type: Boolean,
      default: !1
    },
    /**
     * 外边距
     */
    margin: {
      type: String,
      default: ""
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: ""
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = be("zmzSkeleton", {}), a = Ce(), n = z(() => {
      let s = [];
      return e.both && s.push("zmz-skeleton__item--both"), t.isChild ? e.index > 0 && s.push("zmz-skeleton__item--margin") : (e.index + 1 == t.num && s.push("zmz-skeleton__item--last"), e.index > 0 && s.push("zmz-skeleton__item--margin"), e.index == 0 && s.push("zmz-skeleton__item--frist")), e.type ? s.push(`zmz-skeleton__item--${e.type}`) : s.push(`zmz-skeleton__item--${t.type}`), s;
    }), o = z(() => {
      let s = {};
      return e.type == "image" ? e.height ? s.height = Me(e.height) : s.height = "100px" : s.height = Me(e.height), e.width && (s.width = Me(e.width)), e.margin && (s.margin = e.margin), e.padding && (s.padding = e.padding), s;
    });
    de(() => {
      r(), l();
    }), Ne(() => {
      i(), l();
    });
    const r = () => {
      t.zmzSkeletonList.value.push({
        uid: a.uid,
        Instance: a
      });
    }, l = () => {
      t.updateDom();
    }, i = () => {
      if (t.zmzSkeletonList.value && t.zmzSkeletonList.value.length) {
        const s = t.zmzSkeletonList.value.findIndex((d) => d.uid === a.uid);
        t.zmzSkeletonList.value.splice(s, 1);
      }
    };
    return {
      zmzSkeletonItemClass: n,
      zmzSkeletonItemStyle: o
    };
  }
};
function bp(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-skeleton__item", [n.zmzSkeletonItemClass]]),
    style: j([n.zmzSkeletonItemStyle])
  }, null, 6);
}
const un = /* @__PURE__ */ H(pp, [["render", bp]]), kp = {
  name: "ZmzSkeleton",
  components: {
    ZmzSkeletonItem: un
  },
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: "text",
      validator(e) {
        return ["text", "image"].includes(e);
      }
    },
    /**
     * 数量
     */
    num: {
      type: Number,
      default: 4
    },
    /**
     * 动画
     */
    animation: {
      type: Boolean,
      default: !1
    },
    /**
     * 显示
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: ""
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: a }) {
    const n = b([]), o = z(() => {
      let d = [];
      return e.animation && d.push("zmz-skeleton--animation"), d;
    }), r = z(() => {
      let d = {};
      return e.width && (d.width = Me(e.width)), e.height && (d.height = Me(e.height)), d;
    }), l = z({
      get() {
        return e.modelValue;
      },
      set(d) {
        a("update:modelValue", d);
      }
    }), i = z(() => !!t.default);
    de(() => {
      s();
    });
    const s = () => {
      n.value.forEach((d, c) => {
        d.Instance.props.index = c;
      });
    };
    return Fe("zmzSkeleton", {
      type: e.type,
      num: e.num,
      isChild: i.value,
      zmzSkeletonList: n,
      updateDom: s
    }), {
      model: l,
      zmzSkeletonClass: o,
      zmzSkeletonStyle: r
    };
  }
};
function Cp(e, t, a, n, o, r) {
  const l = oe("zmz-skeleton-item");
  return v(), _("div", {
    class: P(["zmz-skeleton", [n.zmzSkeletonClass]]),
    style: j([n.zmzSkeletonStyle])
  }, [
    e.$slots.loading ? (v(), _(G, { key: 0 }, [
      n.model ? N(e.$slots, "loading", { key: 0 }) : N(e.$slots, "default", { key: 1 })
    ], 64)) : N(e.$slots, "default", { key: 1 }, () => [
      (v(!0), _(G, null, fe(a.num, (i, s) => (v(), pe(l, {
        key: s,
        index: s
      }, null, 8, ["index"]))), 128))
    ])
  ], 6);
}
const Ha = /* @__PURE__ */ H(kp, [["render", Cp]]);
Ha.install = function(e) {
  e.component(Ha.name, Ha);
};
un.install = function(e) {
  e.component(un.name, un);
};
const wp = {
  name: "ZmzScroll",
  props: {
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "vertical",
      validator(e) {
        return ["horizontal", "vertical"].includes(e);
      }
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "200px"
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "100%"
    }
  },
  emits: ["on-scroll-lowerright", "on-scroll-upperleft", "on-scroll"],
  setup(e, { emit: t }) {
    const a = b(null);
    de(() => {
      a.value.addEventListener("scroll", (r) => {
        var l = 0, i = 0, s = 0;
        e.mode == "y" ? (l = a.value.scrollTop, i = a.value.clientHeight, s = a.value.scrollHeight) : (l = a.value.scrollLeft, i = a.value.clientWidth, s = a.value.scrollWidth), l + i == s ? t("on-scroll-lowerright", l, r) : t("on-scroll", l, r), l == 0 && t("on-scroll-upperleft", l, r);
      });
    });
    const n = z(() => {
      let r = [];
      return e.mode && r.push(`zmz-scroll--${e.mode}`), r;
    }), o = z(() => {
      let r = {};
      return e.height && (r.height = e.height), e.width && (r.width = e.width), r;
    });
    return {
      zmzScroll: a,
      zmzScrollStyle: o,
      zmzScrollClass: n
    };
  }
};
function Sp(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-scroll", [n.zmzScrollClass]]),
    ref: "zmzScroll",
    style: j([n.zmzScrollStyle])
  }, [
    N(e.$slots, "default")
  ], 6);
}
const Ya = /* @__PURE__ */ H(wp, [["render", Sp]]);
Ya.install = function(e) {
  e.component(Ya.name, Ya);
};
const xp = {
  name: "ZmzDivider",
  props: {
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["vertical", "horizontal"].includes(e);
      }
    },
    /**
     * 位置
     */
    textAlign: {
      type: String,
      default: "center",
      validator(e) {
        return ["center", "left", "right"].includes(e);
      }
    },
    /**
     * 是否虚线
     */
    dashed: {
      type: Boolean,
      default: !1
    },
    /**
     * 文字大小
     */
    textSize: {
      type: String,
      default: ""
    },
    /**
     * 字体颜色
     */
    textColor: {
      type: String,
      default: ""
    },
    /**
     * 线宽
     */
    lineWidth: {
      type: String,
      default: ""
    },
    /**
     * 线颜色
     */
    lineColor: {
      type: String,
      default: ""
    },
    /**
     * 文字加粗
     */
    textWeight: {
      type: String,
      default: ""
    },
    /**
     * 线边距
     */
    lineMargin: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(() => {
      let o = [];
      return e.mode && o.push(`zmz-divider--${e.mode}`), e.textAlign && o.push(`zmz-divider--${e.textAlign}`), e.dashed && o.push("zmz-divider--dashed"), o;
    }), a = z(() => {
      let o = {};
      return e.lineWidth && e.mode == "horizontal" && (o["border-top-width"] = e.lineWidth), e.lineWidth && e.mode == "vertical" && (o["border-right-width"] = e.lineWidth), e.lineColor && e.mode == "horizontal" && (o["border-top-color"] = e.lineColor), e.lineColor && e.mode == "vertical" && (o["border-right-color"] = e.lineColor), e.lineMargin && e.mode == "horizontal" && (o.margin = e.lineMargin + " 0"), e.lineMargin && e.mode == "vertical" && (o.margin = "0 " + e.lineMargin), o;
    }), n = z(() => {
      let o = {};
      return e.textSize && (o["font-size"] = e.textSize), e.textColor && (o.color = e.textColor), e.textWeight && (o["font-weight"] = e.textWeight), o;
    });
    return {
      zmzDividerClass: t,
      zmzDividerTextStyle: n,
      zmzDividerStyle: a
    };
  }
};
function Tp(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-divider", [n.zmzDividerClass]]),
    style: j([n.zmzDividerStyle])
  }, [
    e.$slots.default ? (v(), _("div", {
      key: 0,
      class: "zmz-divider__text",
      style: j([n.zmzDividerTextStyle])
    }, [
      N(e.$slots, "default")
    ], 4)) : A("", !0)
  ], 6);
}
const qa = /* @__PURE__ */ H(xp, [["render", Tp]]);
qa.install = function(e) {
  e.component(qa.name, qa);
};
const Op = rt({
  name: "ZmzLink",
  props: {
    /**
     * 主题
     */
    type: {
      type: String,
      default: "default",
      validator(e) {
        return ["success", "warning", "error", "primary", "default", "info"].includes(e);
      }
    },
    /**
     * 图标
     */
    icon: String,
    /**
     * 下划线
     */
    underline: {
      type: Boolean,
      default: !1
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 原生target
     */
    target: String,
    /**
     * 原生href
     */
    href: String
  },
  setup(e) {
    return {
      zmzLinkClass: z(() => {
        let a = [];
        return e.type && a.push(`zmz-link--${e.type}`), e.size && a.push(`zmz-link--size-${e.size}`), e.disabled && a.push("zmz-link--disabled"), e.underline && a.push("zmz-link--underline"), a;
      })
    };
  }
}), Lp = ["href", "target"], Dp = { class: "zmz-link__inner" };
function Mp(e, t, a, n, o, r) {
  return v(), _("a", Ie({
    class: ["zmz-link", [e.zmzLinkClass]],
    href: e.href,
    target: e.target
  }, e.$attrs), [
    N(e.$slots, "icon", {}, () => [
      e.icon ? (v(), _("i", {
        key: 0,
        class: P(["zmz-link__icon", e.icon])
      }, null, 2)) : A("", !0)
    ]),
    u("span", Dp, [
      N(e.$slots, "default")
    ])
  ], 16, Lp);
}
const Ua = /* @__PURE__ */ H(Op, [["render", Mp]]);
Ua.install = function(e) {
  e.component(Ua.name, Ua);
};
const Ep = {
  name: "ZmzLoadmore",
  props: {
    /**
     * icon
     */
    icon: {
      type: String,
      default: "zmz-icon--loading"
    },
    /**
     * 颜色
     */
    color: {
      type: String,
      default: ""
    },
    /**
     * 线是否显示
     */
    line: {
      type: Boolean,
      default: !0
    },
    /**
     * 字体
     */
    lineText: {
      type: String,
      default: ""
    },
    /**
     * icon大小
     */
    iconSize: {
      type: String,
      default: ""
    },
    /**
     * icon颜色
     */
    iconColor: {
      type: String,
      default: ""
    },
    /**
     * 加载高度
     */
    height: {
      type: String,
      default: ""
    },
    /**
     * 内容宽度
     */
    lineWidth: {
      type: String,
      default: ""
    },
    /**
     * 加载前
     */
    loadbefore: {
      type: String,
      default: "点击加载更多"
    },
    /**
     * 加载后
     */
    loadafter: {
      type: String,
      default: "加载完毕"
    },
    /**
     * 加载中
     */
    loading: {
      type: String,
      default: "正在加载"
    },
    /**
     * 没有更多
     */
    nomore: {
      type: String,
      default: "没有更多"
    },
    /**
     * 绑定值
     */
    modelValue: {
      type: String,
      default: "loadbefore",
      validator(e) {
        return ["loadbefore", "loadafter", "loading", "nomore"].includes(e);
      }
    },
    /**
     * 自定义加载文字
     */
    loadingText: {
      type: String,
      default: ""
    }
  },
  emits: ["on-click", "update:modelValue"],
  setup(e, { slots: t, emit: a }) {
    const n = z(() => ({
      "font-size": e.iconSize,
      color: e.iconColor
    })), o = z(() => ({
      color: e.color
    })), r = z(() => e.line && !e.lineText && t && !t.line && !t.lineLeft && !t.lineRight ? !0 : (!e.line && !e.lineText && t && !t.line && !t.lineLeft && !t.lineRight || !e.line && e.lineText && !t && !t.line && !t.lineLeft && !t.lineRight || e.line && e.lineText && t && !t.line && !t.lineLeft && !t.lineRight, !1)), l = z(() => e.line && !e.lineText && !t.lineLeft && !t.lineRight ? !0 : !e.line && !e.lineText && !t.lineLeft && !t.lineRight || !e.line && e.lineText && !t.lineLeft && !t.lineRight ? !1 : !!(e.line && e.lineText && !t.lineLeft && !t.lineRight)), i = z(() => e.line && t && t.line ? !0 : (e.line && t && !t.line, !1)), s = z(() => e.line && t && t.line && t.lineLeft ? !1 : e.line && t && !t.line && t.lineLeft ? !0 : (e.line && t && !t.line && !t.lineLeft, !1)), d = z(() => e.line && t && t.line && t.lineRight ? !1 : e.line && t && !t.line && t.lineRight ? !0 : (e.line && t && !t.line && !t.lineRight, !1)), c = z({
      get() {
        return e.modelValue;
      },
      set(h) {
        a("update:modelValue", h);
      }
    }), f = z(() => e.loadingText ? e.loadingText : e[c.value]), m = () => {
      c.value != "loading" || c.value != "nomore" || a("on-click", c.value);
    }, g = z(() => ({
      "zmz-loadmore__wrap__center--cursor": c.value == "loadbefore" || c.value == "loadafter"
    }));
    return {
      isLine: r,
      isLineText: l,
      isLineSlot: i,
      isLineLeftSlot: s,
      isLineRightSlot: d,
      model: c,
      titleText: f,
      handleClick: m,
      zmzLoadmoreWrapCenterClass: g,
      iconStyle: n,
      zmzLoadmoreWrapCenterStyle: o
    };
  }
}, Bp = { class: "zmz-loadmore__wrap" }, Ip = {
  key: 0,
  class: "zmz-loadmore__wrap__left__line"
}, Ap = {
  key: 0,
  class: "zmz-loadmore__icon"
}, Pp = { class: "zmz-loadmore__text" }, Np = {
  key: 0,
  class: "zmz-loadmore__wrap__right__line"
};
function Vp(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-loadmore",
    style: j({ height: a.height })
  }, [
    u("div", Bp, [
      u("div", {
        class: "zmz-loadmore__wrap__left",
        style: j({ width: a.lineWidth })
      }, [
        n.isLineLeftSlot ? N(e.$slots, "lineLeft", { key: 0 }) : A("", !0),
        n.isLineSlot ? N(e.$slots, "line", { key: 1 }) : A("", !0),
        !n.isLineLeftSlot && !n.isLineSlot ? (v(), _(G, { key: 2 }, [
          n.isLine ? (v(), _("span", Ip)) : A("", !0),
          n.isLineText ? (v(), _(G, { key: 1 }, [
            ne(Z(a.lineText), 1)
          ], 64)) : A("", !0)
        ], 64)) : A("", !0)
      ], 4),
      u("div", {
        class: P(["zmz-loadmore__wrap__center", [n.zmzLoadmoreWrapCenterClass]]),
        onClick: t[0] || (t[0] = (...l) => n.handleClick && n.handleClick(...l)),
        style: j([n.zmzLoadmoreWrapCenterStyle])
      }, [
        n.model == "loading" ? (v(), _("div", Ap, [
          N(e.$slots, "icon", {}, () => [
            u("i", {
              class: P([a.icon]),
              style: j([n.iconStyle])
            }, null, 6)
          ])
        ])) : A("", !0),
        u("div", Pp, Z(n.titleText), 1)
      ], 6),
      u("div", {
        class: "zmz-loadmore__wrap__right",
        style: j({ width: a.lineWidth })
      }, [
        n.isLineRightSlot ? N(e.$slots, "lineRight", { key: 0 }) : A("", !0),
        n.isLineSlot ? N(e.$slots, "line", { key: 1 }) : A("", !0),
        !n.isLineRightSlot && !n.isLineSlot ? (v(), _(G, { key: 2 }, [
          n.isLine ? (v(), _("span", Np)) : A("", !0),
          n.isLineText ? (v(), _(G, { key: 1 }, [
            ne(Z(a.lineText), 1)
          ], 64)) : A("", !0)
        ], 64)) : A("", !0)
      ], 4)
    ])
  ], 4);
}
const Ga = /* @__PURE__ */ H(Ep, [["render", Vp]]);
Ga.install = function(e) {
  e.component(Ga.name, Ga);
};
const Fp = {
  name: "ZmzSticky",
  props: {
    /**
     * 	开启状态
     */
    modelValue: [Boolean],
    /**
     * 距离窗口顶部达到指定偏移量
     */
    offsetTop: {
      type: Number,
      default: 0
    },
    /**
     * 	距离窗口底部达到指定偏移量
     */
    offsetBottom: {
      type: Number,
      default: 0
    },
    /**
     * 吸顶层级
     */
    zIndex: {
      type: Number,
      default: 0
    },
    /**
     * 	向上吸顶还是向下吸底
     */
    direction: {
      type: String,
      default: "top",
      validator(e) {
        return ["top", "bottom"].includes(e);
      }
    },
    /**
     * 滚动容器
     */
    scrollTarget: {
      type: String,
      default: ""
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = b([]), n = b(null), o = b(null), r = b(null);
    Se(() => {
      n.value = a.value.offsetTop, o.value = a.value.offsetHeight, r.value = a.value.offsetWidth, e.scrollTarget && document.querySelector(e.scrollTarget) ? document.querySelector(e.scrollTarget).addEventListener("scroll", i) : window.addEventListener("scroll", i);
    }), Ze(() => {
      e.scrollTarget && document.querySelector(e.scrollTarget) ? document.querySelector(e.scrollTarget).removeEventListener("scroll", i) : window.removeEventListener("scroll", i);
    });
    const l = z({
      get() {
        return e.modelValue;
      },
      set(s) {
        t("update:modelValue", s);
      }
    }), i = (s) => {
      let d = 0;
      e.scrollTarget && document.querySelector(e.scrollTarget) ? d = document.querySelector(e.scrollTarget).scrollTop : d = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      const c = window.innerHeight;
      l.value && (d >= n.value - e.offsetTop && e.direction == "top" ? (a.value.firstChild && (a.value.firstChild.style.top = e.offsetTop + "px", a.value.firstChild.style.width = r.value + "px", a.value.firstChild.style.position = "fixed", e.zIndex && (a.value.firstChild.style.zIndex = e.zIndex)), a.value.lastChild && (a.value.lastChild.style.width = a.value.firstChild.offsetWidth + "px", a.value.lastChild.style.height = a.value.firstChild.offsetHeight + "px", a.value.lastChild.style.display = "inline-block"), t("on-change", !0, e.direction)) : d < n.value - e.offsetTop && e.direction == "top" && (a.value.firstChild && (a.value.firstChild.style.top = "", a.value.firstChild.style.width = "", a.value.firstChild.style.position = "", e.zIndex && (a.value.firstChild.style.zIndex = "")), a.value.lastChild && (a.value.lastChild.style.display = "none"), t("on-change", !1, e.direction)), d + c >= n.value + o.value + e.offsetBottom && e.direction == "bottom" ? (a.value.firstChild && (a.value.firstChild.style.bottom = e.offsetBottom + "px", a.value.firstChild.style.width = r.value + "px", a.value.firstChild.style.position = "fixed", e.zIndex && (a.value.firstChild.style.zIndex = e.zIndex)), a.value.lastChild && (a.value.lastChild.style.width = a.value.firstChild.offsetWidth + "px", a.value.lastChild.style.height = a.value.firstChild.offsetHeight + "px", a.value.lastChild.style.display = "inline-block"), t("on-change", !0, e.direction)) : d < n.value + o.value + e.offsetBottom && e.direction == "bottom" && (a.value.firstChild && (a.value.firstChild.style.bottom = "", a.value.firstChild.style.width = "", a.value.firstChild.style.position = "", e.zIndex && (a.value.firstChild.style.zIndex = "")), a.value.lastChild && (a.value.lastChild.style.display = "none"), t("on-change", !1, e.direction)), s.stopPropagation());
    };
    return {
      zmzSticky: a
    };
  }
}, Rp = {
  class: "zmz-sticky",
  ref: "zmzSticky"
}, Zp = { class: "zmz-sticky__wrap" };
function Wp(e, t, a, n, o, r) {
  return v(), _("div", Rp, [
    u("div", Zp, [
      N(e.$slots, "default")
    ]),
    t[0] || (t[0] = u("div", { class: "zmz-sticky__seat" }, null, -1))
  ], 512);
}
const Xa = /* @__PURE__ */ H(Fp, [["render", Wp]]);
Xa.install = function(e) {
  e.component(Xa.name, Xa);
};
const $p = {
  name: "ZmzAvatar",
  props: {
    /**
     * 头像形状
     */
    shape: {
      type: String,
      default: "circle",
      validator(e) {
        return ["circle", "square"].includes(e);
      }
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * 地址
     */
    src: {
      type: String,
      default: ""
    },
    /**
     * 图片缩放类型
     */
    fit: {
      type: String,
      default: "cover",
      validator(e) {
        return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
      }
    },
    /**
     * 原生属性
     */
    alt: String
  },
  emits: ["on-image-error"],
  setup(e, { emit: t }) {
    const a = b(!1), n = z(() => {
      let l = [];
      return e.shape && l.push(`zmz-avatar--${e.shape}`), e.size && l.push(`zmz-avatar--size-${e.size}`), l;
    }), o = z(() => {
      let l = {};
      return e.fit && (l["object-fit"] = e.fit), l;
    });
    return {
      zmzAvatarClass: n,
      fitClass: o,
      imgError: (l) => {
        a.value = !0, t("on-image-error", l);
      },
      isImgError: a
    };
  }
}, jp = {
  key: 0,
  class: "zmz-avatar__icon"
}, Hp = {
  key: 1,
  class: "zmz-avatar__img"
}, Yp = ["src"], qp = {
  key: 2,
  class: "zmz-avatar__custom"
};
function Up(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-avatar", [n.zmzAvatarClass]])
  }, [
    a.icon ? (v(), _("div", jp, [
      u("i", {
        class: P(["zmz-avatar__icon__inner", a.icon])
      }, null, 2)
    ])) : A("", !0),
    a.src ? (v(), _("div", Hp, [
      n.isImgError ? N(e.$slots, "default", { key: 1 }) : (v(), _("img", {
        key: 0,
        class: "zmz-avatar__img__inner",
        onError: t[0] || (t[0] = (...l) => n.imgError && n.imgError(...l)),
        style: j([n.fitClass]),
        src: a.src
      }, null, 44, Yp))
    ])) : A("", !0),
    e.$slots.default ? (v(), _("div", qp, [
      N(e.$slots, "default")
    ])) : A("", !0)
  ], 2);
}
const Ka = /* @__PURE__ */ H($p, [["render", Up]]);
Ka.install = function(e) {
  e.component(Ka.name, Ka);
};
const Gp = {
  name: "ZmzAvatarGroup",
  props: {
    /**
     * 头像形状
     */
    shape: {
      type: String,
      default: "circle",
      validator(e) {
        return ["circle", "square"].includes(e);
      }
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
      validator(e) {
        return ["large", "medium", "small", "mini", "default"].includes(e);
      }
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * 地址
     */
    src: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 图片缩放类型
     */
    fit: {
      type: String,
      default: "cover",
      validator(e) {
        return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
      }
    },
    /**
     * 原生属性
     */
    alt: String,
    /**
     * 偏移
     */
    offset: {
      type: Number,
      default: 14
    },
    /**
     * 最大数量
     */
    maxCount: {
      type: Number,
      default: 5
    },
    /**
     * 指定对象字段
     */
    keyField: {
      type: String,
      default: ""
    }
  },
  emits: ["on-img-error"],
  setup(e, { emit: t }) {
    const a = b(!1), n = z(() => {
      let c = [];
      return e.shape && c.push(`zmz-avatar-group--${e.shape}`), e.size && c.push(`zmz-avatar-group--size-${e.size}`), c;
    }), o = z(() => {
      let c = {};
      return e.fit && (c["object-fit"] = e.fit), c;
    }), r = (c, f) => {
      a.value = !0, t("on-img-error", c, f);
    }, l = (c) => {
      let f = {};
      return c > 0 && (f["margin-left"] = "-" + e.offset + "px"), f;
    }, i = z(() => e.src.filter((f, m) => m < e.maxCount)), s = z(() => e.src.length > e.maxCount), d = z(() => e.src.length - e.maxCount);
    return {
      zmzAvatarClass: n,
      fitClass: o,
      imgError: r,
      isImgError: a,
      zmzAvatarGroupItemStyle: l,
      isMore: s,
      moreTip: d,
      srcData: i
    };
  }
}, Xp = {
  key: 0,
  class: "zmz-avatar-group__icon"
}, Kp = {
  key: 1,
  class: "zmz-avatar-group__img"
}, Qp = ["onError", "src"], Jp = {
  key: 2,
  class: "zmz-avatar-group__other"
}, eb = {
  key: 3,
  class: "zmz-avatar-group__more"
};
function tb(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-avatar-group", [n.zmzAvatarClass]])
  }, [
    (v(!0), _(G, null, fe(n.srcData, (l, i) => (v(), _("div", {
      class: "zmz-avatar-group__item",
      key: i,
      style: j(n.zmzAvatarGroupItemStyle(i))
    }, [
      a.icon ? (v(), _("div", Xp, [
        u("i", {
          class: P(["zmz-avatar-group__icon__inner", a.icon])
        }, null, 2)
      ])) : A("", !0),
      a.src ? (v(), _("div", Kp, [
        n.isImgError ? N(e.$slots, "default", { key: 1 }) : (v(), _("img", {
          key: 0,
          class: "zmz-avatar-group__img__inner",
          onError: (s) => n.imgError(s, i),
          style: j([n.fitClass]),
          src: a.keyField ? l[a.keyField] : l
        }, null, 44, Qp))
      ])) : A("", !0),
      !a.src && !a.icon && e.$slots.default ? (v(), _("div", Jp, [
        N(e.$slots, "default")
      ])) : A("", !0),
      n.isMore && a.maxCount - 1 === i ? (v(), _("div", eb, " +" + Z(n.moreTip), 1)) : A("", !0)
    ], 4))), 128))
  ], 2);
}
const Qa = /* @__PURE__ */ H(Gp, [["render", tb]]);
Qa.install = function(e) {
  e.component(Qa.name, Qa);
};
const nb = {
  name: "ZmzImagePreview",
  props: {
    /**
     * 图片列表
     */
    previewImageList: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 是否显示
     */
    modelValue: [Boolean],
    /**
     * 图片下标
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 传送节点
     */
    teleportDom: {
      type: String,
      default: "body"
    }
  },
  emits: ["update:modelValue", "on-preview-down", "on-preview-move", "on-preview-up", "on-preview-equal", "on-preview-prev", "on-preview-next", "on-preview-wheel", "on-preview-rotate-right", "on-preview-rotate-left", "on-preview-enlarge", "on-preview-narrow", "on-button-close", "on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after", "on-image-load", "on-image-error"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(!1), o = b(!1), r = Le({
      scale: 1,
      rotate: 0,
      offsetX: 0,
      offsetY: 0,
      position: "absolute"
    }), l = b(0), i = b(0), s = b(null), d = b(e.current), c = b(qe()), f = z({
      get() {
        return e.modelValue;
      },
      set(J) {
        t("update:modelValue", J);
      }
    }), m = (J) => {
      a.value = !0, t("on-image-error", J);
    }, g = (J) => {
      a.value = !1, t("on-image-load", J);
    }, h = () => {
      f.value = !1;
    }, y = () => {
      f.value = !1, t("on-button-close");
    }, C = () => {
      t("on-close-before");
    }, k = () => {
      r.scale = 1, r.rotate = 0, r.offsetX = 0, r.offsetY = 0, r.position = "absolute", t("on-close");
    }, S = () => {
      t("on-close-after");
    }, L = () => {
      t("on-open-before");
    }, p = () => {
      c.value = qe(), t("on-open");
    }, w = () => {
      t("on-open-after");
    }, O = () => {
      r.scale = parseFloat((r.scale += 0.2).toFixed(1)), t("on-preview-enlarge", r);
    }, x = () => {
      r.scale <= 0.2 || (r.scale = parseFloat((r.scale -= 0.2).toFixed(1)), t("on-preview-narrow", r));
    }, D = () => {
      r.rotate -= 90, t("on-preview-rotate-left", r);
    }, M = () => {
      r.rotate += 90, t("on-preview-rotate-right", r);
    }, R = () => {
      n.value = !n.value, t("on-preview-equal", n.value);
    }, B = z(() => {
      let J = {
        transform: `scale(${r.scale}) rotate(${r.rotate}deg)`,
        transition: "transform 0.4s ease 0s",
        position: r.position
      };
      return r.offsetX && (J.left = r.offsetX + "px"), r.offsetY && (J.top = r.offsetY + "px"), n.value || (J["max-height"] = "100%", J["max-width"] = "100%"), J;
    }), F = () => {
      d.value <= 0 ? d.value = e.previewImageList.length - 1 : d.value--, t("on-preview-prev", d.value, e.previewImageList.length);
    }, E = () => {
      d.value >= e.previewImageList.length - 1 ? d.value = 0 : d.value++, t("on-preview-next", d.value, e.previewImageList.length);
    }, T = (J) => {
      J.stopPropagation && J.stopPropagation(), J.preventDefault && J.preventDefault(), l.value = J.pageX - s.value.offsetLeft, i.value = J.pageY - s.value.offsetTop, o.value = !0, document.addEventListener("mousemove", I), document.addEventListener("mouseup", V), t("on-preview-down", r);
    }, I = (J) => {
      o.value && (r.offsetX = J.pageX - l.value, r.offsetY = J.pageY - i.value, t("on-preview-move", r));
    }, V = () => {
      o.value = !1, t("on-preview-up");
    }, W = (J) => {
      if (f.value) {
        if (J.stopPropagation && J.stopPropagation(), $(J) < 0)
          r.scale = parseFloat((r.scale += 0.02).toFixed(2));
        else {
          if (r.scale <= 0.2) return;
          r.scale = parseFloat((r.scale -= 0.02).toFixed(2));
        }
        t("on-preview-wheel", r);
      }
    }, $ = (J) => {
      var q = J || window.event;
      if (q.wheelDelta)
        return q.wheelDelta;
      if (q.detail)
        return q.detail * -40;
    }, X = z(() => e.previewImageList[d.value]), ee = z(() => `z-index: ${c.value}`);
    return de(() => {
      document.addEventListener("mousewheel", W, { passive: !0 });
    }), Ze(() => {
      document.removeEventListener("mousewheel", W), document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", V);
    }), ue(
      () => e.current,
      (J) => {
        d.value = J;
      },
      { lazy: !1 }
    ), {
      handleImageError: m,
      isImgError: a,
      model: f,
      previewClick: h,
      handleClose: y,
      handleBeforeEnter: L,
      handleEnter: p,
      handleAfterEnter: w,
      handleBeforeLeave: C,
      handleLeave: k,
      handleAfterLeave: S,
      handleEnlarge: O,
      handleNarrow: x,
      handleFullscreenToEqual: R,
      handleRotateLeft: D,
      handleRotateRight: M,
      zmzImagePreviewPanelImgStyle: B,
      isFullscreenToEqual: n,
      handleMouseDown: T,
      img: s,
      isMove: o,
      previewImageListOne: X,
      handlePrev: F,
      handleNext: E,
      zmzImagePreviewStyle: ee,
      handleImageLoad: g,
      index: d
    };
  }
}, ab = { class: "zmz-image-preview__num" }, lb = { class: "zmz-image-preview__num__current" }, ob = { class: "zmz-image-preview__num__total" }, rb = { class: "zmz-image-preview__btn" }, ib = { class: "zmz-image-preview__console" }, sb = {
  key: 0,
  class: "zmz-icon--fullscreen"
}, ub = {
  key: 1,
  class: "zmz-icon--equal"
}, db = { class: "zmz-image-preview__panel" }, cb = ["src"], mb = { class: "zmz-image-preview__error" };
function fb(e, t, a, n, o, r) {
  return v(), pe(ct, Ie({
    to: a.teleportDom,
    disabled: !a.teleport
  }, e.$attrs), [
    K(Ve, {
      name: "zmz-fade-top",
      onBeforeLeave: n.handleBeforeLeave,
      onLeave: n.handleLeave,
      onAfterLeave: n.handleAfterLeave,
      onBeforeEnter: n.handleBeforeEnter,
      onEnter: n.handleEnter,
      onAfterEnter: n.handleAfterEnter
    }, {
      default: le(() => [
        n.model ? (v(), _("div", {
          key: 0,
          class: "zmz-image-preview",
          style: j([n.zmzImagePreviewStyle])
        }, [
          t[20] || (t[20] = u("div", { class: "zmz-image-preview__mask" }, null, -1)),
          u("div", ab, [
            u("span", lb, Z(n.index + 1), 1),
            t[11] || (t[11] = u("span", { class: "zmz-image-preview__num__split" }, "/", -1)),
            u("span", ob, Z(a.previewImageList.length), 1)
          ]),
          u("div", rb, [
            u("div", {
              class: "zmz-image-preview__btn__prev",
              onClick: t[0] || (t[0] = (...l) => n.handlePrev && n.handlePrev(...l))
            }, [...t[12] || (t[12] = [
              u("i", { class: "zmz-icon--arrow-left" }, null, -1)
            ])]),
            u("div", {
              class: "zmz-image-preview__btn__next",
              onClick: t[1] || (t[1] = (...l) => n.handleNext && n.handleNext(...l))
            }, [...t[13] || (t[13] = [
              u("i", { class: "zmz-icon--arrow-right" }, null, -1)
            ])])
          ]),
          u("div", {
            class: "zmz-image-preview__close",
            onClick: t[2] || (t[2] = (...l) => n.handleClose && n.handleClose(...l))
          }, [...t[14] || (t[14] = [
            u("i", { class: "zmz-icon--wrong" }, null, -1)
          ])]),
          u("div", ib, [
            u("div", {
              class: "zmz-image-preview__console__li",
              onClick: t[3] || (t[3] = (...l) => n.handleEnlarge && n.handleEnlarge(...l))
            }, [...t[15] || (t[15] = [
              u("i", { class: "zmz-icon--enlarge" }, null, -1)
            ])]),
            u("div", {
              class: "zmz-image-preview__console__li",
              onClick: t[4] || (t[4] = (...l) => n.handleNarrow && n.handleNarrow(...l))
            }, [...t[16] || (t[16] = [
              u("i", { class: "zmz-icon--narrow" }, null, -1)
            ])]),
            u("div", {
              class: "zmz-image-preview__console__li",
              onClick: t[5] || (t[5] = (...l) => n.handleFullscreenToEqual && n.handleFullscreenToEqual(...l))
            }, [
              n.isFullscreenToEqual ? (v(), _("i", ub)) : (v(), _("i", sb))
            ]),
            u("div", {
              class: "zmz-image-preview__console__li",
              onClick: t[6] || (t[6] = (...l) => n.handleRotateLeft && n.handleRotateLeft(...l))
            }, [...t[17] || (t[17] = [
              u("i", { class: "zmz-icon--rotate-left" }, null, -1)
            ])]),
            u("div", {
              class: "zmz-image-preview__console__li",
              onClick: t[7] || (t[7] = (...l) => n.handleRotateRight && n.handleRotateRight(...l))
            }, [...t[18] || (t[18] = [
              u("i", { class: "zmz-icon--rotate-right" }, null, -1)
            ])])
          ]),
          u("div", db, [
            re(u("img", {
              class: P({ "is-move": n.isMove }),
              ref: "img",
              onMousedown: t[8] || (t[8] = (...l) => n.handleMouseDown && n.handleMouseDown(...l)),
              onLoad: t[9] || (t[9] = (...l) => n.handleImageLoad && n.handleImageLoad(...l)),
              onError: t[10] || (t[10] = (...l) => n.handleImageError && n.handleImageError(...l)),
              style: j([n.zmzImagePreviewPanelImgStyle]),
              src: n.previewImageListOne
            }, null, 46, cb), [
              [Be, !n.isImgError]
            ]),
            re(u("div", mb, [
              N(e.$slots, "error", {}, () => [
                t[19] || (t[19] = ne("加载失败", -1))
              ])
            ], 512), [
              [Be, n.isImgError]
            ])
          ])
        ], 4)) : A("", !0)
      ]),
      _: 3
    }, 8, ["onBeforeLeave", "onLeave", "onAfterLeave", "onBeforeEnter", "onEnter", "onAfterEnter"])
  ], 16, ["to", "disabled"]);
}
const dn = /* @__PURE__ */ H(nb, [["render", fb]]), vb = {
  name: "ZmzImage",
  components: {
    zmzImagePreview: dn
  },
  props: {
    /**
     * 图片形状
     */
    shape: {
      type: String,
      default: "square",
      validator(e) {
        return ["circle", "square"].includes(e);
      }
    },
    /**
     * 图片地址
     */
    src: {
      type: String,
      default: ""
    },
    /**
     * 图片自适应类型
     */
    fit: {
      type: String,
      default: "cover",
      validator(e) {
        return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
      }
    },
    /**
     * 原生 alt
     */
    alt: String,
    previewPictureList: {
      type: Array,
      default() {
        return [];
      }
    },
    radius: {
      type: String,
      default: ""
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 传送节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    /**
    * 是否开启预览
    */
    preview: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否穿梭
     */
    previewTeleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 传送节点
     */
    previewTeleportDom: {
      type: String,
      default: "body"
    }
  },
  emits: ["on-image-error", "update:modelValue", "on-open-before", "on-open", "on-open-after", "on-close-before", "on-close", "on-close-after"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(!1);
    ue(() => e.src, () => {
      a.value = !1;
    });
    const o = z(() => {
      let k = [];
      return e.radius || k.push(`zmz-image--${e.shape}`), k;
    }), r = z(() => {
      let k = {};
      return e.radius && (k["border-radius"] = e.radius), e.width && (k.width = Me(e.width)), e.height && (k.height = Me(e.height)), k;
    }), l = z(() => {
      let k = {};
      return e.fit && !a.value && (k["object-fit"] = e.fit), e.width && (k.width = Me(e.width)), e.height && (k.height = Me(e.height)), k;
    }), i = (k) => {
      a.value = !0, t("on-image-error", k);
    }, s = () => {
      e.preview && (document.body.style.overflow = "hidden", n.value = !0);
    }, d = () => {
      e.preview && (document.body.style.overflow = "", n.value = !1);
    }, c = z(() => {
      const k = e.previewPictureList.indexOf(e.src);
      return k >= 0 ? k : 0;
    });
    return {
      handleImageError: i,
      isImageError: a,
      isPreview: n,
      onPreviewOpen: s,
      onPreviewClose: d,
      current: c,
      zmzImageClass: o,
      zmzImageImgStyle: l,
      zmzImageStyle: r,
      handleAfterLeave: () => {
        t("on-close-after");
      },
      handleLeave: () => {
        t("on-close");
      },
      handleBeforeLeave: () => {
        t("on-close-before");
      },
      handleAfterEnter: () => {
        t("on-open-after");
      },
      handleEnter: () => {
        t("on-open");
      },
      handleBeforeEnter: () => {
        t("on-open-before");
      }
    };
  }
}, zb = { class: "zmz-image__wrap" }, _b = ["src", "alt"];
function hb(e, t, a, n, o, r) {
  const l = oe("zmzImagePreview");
  return v(), _("div", {
    class: P(["zmz-image", [n.zmzImageClass]]),
    style: j([n.zmzImageStyle])
  }, [
    u("div", zb, [
      n.isImageError ? (v(), _("div", {
        key: 1,
        class: "zmz-image__error",
        style: j([n.zmzImageImgStyle])
      }, [
        N(e.$slots, "error", {}, () => [
          t[3] || (t[3] = ne(" 加载失败 ", -1))
        ])
      ], 4)) : (v(), _("img", {
        key: 0,
        class: P(["zmz-image__img", { "zmz-image__preview": a.preview }]),
        onClick: t[0] || (t[0] = (...i) => n.onPreviewOpen && n.onPreviewOpen(...i)),
        onError: t[1] || (t[1] = (...i) => n.handleImageError && n.handleImageError(...i)),
        style: j([n.zmzImageImgStyle]),
        src: a.src,
        alt: a.alt
      }, null, 46, _b))
    ]),
    a.preview ? (v(), pe(l, {
      key: 0,
      "teleport-dom": a.previewTeleportDom,
      teleport: a.previewTeleport,
      onOnBtnClose: n.onPreviewClose,
      current: n.current,
      "preview-image-list": a.previewPictureList,
      modelValue: n.isPreview,
      "onUpdate:modelValue": t[2] || (t[2] = (i) => n.isPreview = i),
      onOnCloseBefore: n.handleBeforeLeave,
      onOnClose: n.handleLeave,
      onOnCloseAfter: n.handleAfterLeave,
      onOnOpenBefore: n.handleBeforeEnter,
      onOnOpen: n.handleEnter,
      onOnOpenAfter: n.handleAfterEnter
    }, null, 8, ["teleport-dom", "teleport", "onOnBtnClose", "current", "preview-image-list", "modelValue", "onOnCloseBefore", "onOnClose", "onOnCloseAfter", "onOnOpenBefore", "onOnOpen", "onOnOpenAfter"])) : A("", !0)
  ], 6);
}
const Ja = /* @__PURE__ */ H(vb, [["render", hb]]);
Ja.install = function(e) {
  e.component(Ja.name, Ja);
};
dn.install = function(e) {
  e.component(dn.name, dn);
};
const gb = {
  name: "ZmzAlbum",
  props: {
    /**
     * 图片地址
     */
    image: {
      type: [String, Array],
      default: ""
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "100%"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "100%"
    },
    /**
     * 图片自适应
     */
    fit: {
      type: String,
      default: "cover",
      validator(e) {
        return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
      }
    },
    /**
     * 间隔
     */
    gutter: {
      type: String,
      default: ""
    },
    /**
     * 最大个数
     */
    maxCount: {
      type: [Number, String],
      default: 9
    },
    /**
     * 是否开启预览
     */
    preview: {
      type: Boolean,
      default: !1
    },
    /**
     * 每行个数
     */
    rowCount: {
      type: [Number, String],
      default: 3
    },
    /**
     * 自定义图片圆角
     */
    radius: {
      type: String,
      default: ""
    },
    /**
     * 是否穿梭
     */
    previewTeleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 传送节点
     */
    previewTeleportDom: {
      type: String,
      default: "body"
    }
  },
  emits: ["on-image-error"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b([]), o = b([]), r = b(!1), l = b(e.gutter), i = b(0), s = z(() => {
      let L = {};
      return e.radius && (L["border-radius"] = e.radius), L;
    }), d = z(() => {
      const L = [];
      return e.image.map((p, w) => {
        if (w + 1 <= e.maxCount) {
          const O = Math.floor(w / e.rowCount);
          L[O] || (L[O] = []), L[O].push(p);
        }
      }), L;
    }), c = z(() => e.image.length - e.maxCount), f = (L, p, w) => {
      h.value ? (n.value.push(p), o.value.push(w), L.target.style.display = "none") : a.value = !0, t("on-image-error", L);
    }, m = () => {
      document.body.style.overflow = "", r.value = !1;
    }, g = z(() => {
      let L = [];
      return h.value ? L.push("zmz-album--multiple") : L.push("zmz-album--single"), L;
    }), h = z(() => typeof e.image != "string"), y = z(() => {
      const L = {};
      return l.value && h.value && (L["margin-right"] = l.value, L["margin-bottom"] = l.value), e.width && (L.width = e.width), e.height && (L.height = e.height), L;
    }), C = z(() => {
      let L = {};
      return e.fit && (L["object-fit"] = e.fit), L;
    }), k = (L) => {
      if (!e.preview) return;
      document.body.style.overflow = "hidden";
      let p = S.value.findIndex((w) => w === L);
      i.value = p, r.value = !0;
    }, S = z(() => {
      let L = [];
      return typeof e.image == "string" ? L.push(e.image) : L.push(...e.image), L;
    });
    return {
      handleImageError: f,
      isImagesError: a,
      isPreview: r,
      handlePreviewClick: k,
      onBtnClose: m,
      current: i,
      zmzAlbumCommonStyle: s,
      isMultiple: h,
      imagesUrlList: d,
      moreNumber: c,
      zmzAlbumWrapStyle: y,
      zmzAlbumImgStyle: C,
      imgErrorIndex: n,
      imgErrorChildIndex: o,
      zmzAlbumClass: g,
      previewImageList: S
    };
  }
}, yb = ["src"], pb = {
  key: 1,
  class: "zmz-album__wrap"
}, bb = ["src", "onError", "onClick"], kb = ["onClick"];
function Cb(e, t, a, n, o, r) {
  const l = oe("zmz-image-preview");
  return v(), _("div", {
    class: P(["zmz-album", [n.zmzAlbumClass]])
  }, [
    n.isMultiple ? (v(), _("div", pb, [
      (v(!0), _(G, null, fe(n.imagesUrlList, (i, s) => (v(), _("div", {
        class: "zmz-album__row",
        key: s
      }, [
        (v(!0), _(G, null, fe(i, (d, c) => (v(), _("div", {
          class: "zmz-album__item",
          key: c,
          style: j([n.zmzAlbumWrapStyle, n.zmzAlbumCommonStyle])
        }, [
          u("img", {
            src: d,
            onError: (f) => n.handleImageError(f, s, c),
            class: P(["zmz-album__img", { "zmz-album__preview": a.preview }]),
            style: j([n.zmzAlbumImgStyle]),
            onClick: (f) => n.handlePreviewClick(d)
          }, null, 46, bb),
          (v(!0), _(G, null, fe(n.imgErrorIndex, (f, m) => (v(), _(G, { key: m }, [
            (v(!0), _(G, null, fe(n.imgErrorChildIndex, (g, h) => (v(), _(G, { key: h }, [
              f == s && g == c ? (v(), _("div", {
                key: 0,
                class: "zmz-album__error",
                style: j([n.zmzAlbumWrapStyle, n.zmzAlbumCommonStyle])
              }, [
                N(e.$slots, "error", {}, () => [
                  t[4] || (t[4] = ne(" 加载失败 ", -1))
                ])
              ], 4)) : A("", !0)
            ], 64))), 128))
          ], 64))), 128)),
          a.image.length > a.rowCount * n.imagesUrlList.length && s === n.imagesUrlList.length - 1 && c === n.imagesUrlList[n.imagesUrlList.length - 1].length - 1 ? (v(), _("div", {
            key: 0,
            class: P(["zmz-album__text", { "zmz-album__preview": a.preview }]),
            onClick: _e((f) => n.handlePreviewClick(d), ["stop"])
          }, " +" + Z(n.moreNumber), 11, kb)) : A("", !0)
        ], 4))), 128))
      ]))), 128))
    ])) : (v(), _("div", {
      key: 0,
      class: "zmz-album__wrap",
      style: j([n.zmzAlbumWrapStyle, n.zmzAlbumCommonStyle])
    }, [
      n.isImagesError ? (v(), _("div", {
        key: 1,
        class: "zmz-album__error",
        style: j([n.zmzAlbumWrapStyle, n.zmzAlbumCommonStyle])
      }, [
        N(e.$slots, "error", {}, () => [
          t[3] || (t[3] = ne(" 加载失败 ", -1))
        ])
      ], 4)) : (v(), _("img", {
        key: 0,
        src: a.image,
        class: P(["zmz-album__img", { "zmz-album__preview": a.preview }]),
        style: j([n.zmzAlbumImgStyle]),
        onClick: t[0] || (t[0] = _e((i) => n.handlePreviewClick(a.image), ["stop"])),
        onError: t[1] || (t[1] = (...i) => n.handleImageError && n.handleImageError(...i))
      }, null, 46, yb))
    ], 4)),
    a.preview ? (v(), pe(l, {
      key: 2,
      teleport: a.previewTeleport,
      teleportDom: a.previewTeleportDom,
      onOnBtnClose: n.onBtnClose,
      current: n.current,
      "preview-image-list": n.previewImageList,
      modelValue: n.isPreview,
      "onUpdate:modelValue": t[2] || (t[2] = (i) => n.isPreview = i)
    }, null, 8, ["teleport", "teleportDom", "onOnBtnClose", "current", "preview-image-list", "modelValue"])) : A("", !0)
  ], 2);
}
const el = /* @__PURE__ */ H(gb, [["render", Cb]]);
el.install = function(e) {
  e.component(el.name, el);
};
const wb = {
  name: "ZmzSpaceItem",
  props: {
    /**
     * 当前内间距
     */
    padding: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 当前外间距
     */
    margin: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(e) {
    const { getValueSuffix: t } = Ut(), a = Ce(), n = be("zmzSpace", ""), o = b(e.padding), r = b(e.margin);
    if (n == "")
      throw new Error("zmzSpaceItem 父标签不存在");
    de(() => {
      l(), i();
    }), Ne(() => {
      s(), i();
    });
    const l = () => {
      n.spaceList.value.push({
        uid: a.uid,
        instance: a
      });
    }, i = () => {
      n.updateDom();
    }, s = () => {
      if (n.spaceList.value && n.spaceList.value.length) {
        const c = n.spaceList.value.findIndex((f) => f.uid === a.uid);
        n.spaceList.value.splice(c, 1);
      }
    };
    return {
      zmzSpacItemStyle: z(() => {
        let c = {};
        if (o.value.length) {
          let f = [];
          o.value.forEach((m) => {
            f.push(t(m));
          }), c.padding = f.join(" ");
        }
        if (r.value.length) {
          let f = [];
          r.value.forEach((m) => {
            f.push(t(m));
          }), c.margin = f.join(" ");
        }
        return c;
      }),
      paddingChild: o,
      marginChild: r
    };
  }
};
function Sb(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-space-item",
    style: j([n.zmzSpacItemStyle])
  }, [
    N(e.$slots, "default")
  ], 4);
}
const Zt = /* @__PURE__ */ H(wb, [["render", Sb]]), tl = {
  name: "ZmzSpace",
  props: {
    /**
     * 标题
     */
    title: {
      type: String
    },
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["vertical", "horizontal"].includes(e);
      }
    },
    /**
     * 间隔
     */
    interval: {
      type: Boolean,
      default: !0
    },
    /**
     * 全局内间距
     */
    padding: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 全局外间距
     */
    margin: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 显示最后外边距
     */
    showLastMargin: {
      type: Boolean,
      default: !0
    },
    /**
     * 显示最后内边距
     */
    showLastPadding: {
      type: Boolean,
      default: !0
    },
    /**
     * 显示第一外边距
     */
    showFirstMargin: {
      type: Boolean,
      default: !0
    },
    /**
     * 显示第一内边距
     */
    showFirstPadding: {
      type: Boolean,
      default: !0
    },
    /**
     * 自定义标签
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = b([]), o = () => {
      n.value.forEach((i, s) => {
        let d = i.instance;
        d.proxy.paddingChild = r.value, d.proxy.marginChild = e.margin, s == 0 && !e.showFirstMargin && (d.proxy.marginChild = []), s == 0 && !e.showFirstPadding && (d.proxy.paddingChild = []), s == n.value.length - 1 && !e.showLastMargin && (d.proxy.marginChild = []), s == n.value.length - 1 && !e.showLastPadding && (d.proxy.paddingChild = []);
      });
    }, r = z(() => {
      let i = [];
      return e.mode === "horizontal" && e.padding.length == 0 ? i = [0, 20, 0, 0] : e.mode === "horizontal" && e.padding.length && (i = e.padding), e.mode === "vertical" && e.padding.length == 0 ? i = [0, 0, 20, 0] : e.mode === "vertical" && e.padding.length && (i = e.padding), i;
    }), l = z(() => {
      let i = [];
      return e.mode && i.push(`zmz-space--${e.mode}`), e.interval && i.push("zmz-space--interval"), (e.title || t.title) && i.push("zmz-space--title"), i;
    });
    return de(() => {
      o();
    }), ue(() => r.value, () => {
      o();
    }), Fe("zmzSpace", {
      spaceList: n,
      updateDom: o
    }), () => {
      let i = "", s = "";
      if (t.title && (i = ie("slot", { name: "title" }, t.title())), !t.title && e.title && (i = ie("div", {
        class: "zmz-space__title"
      }, e.title)), e.title || t.title)
        s = ie("div", {
          class: "zmz-space__content"
        }, t.default());
      else {
        let d = t.default();
        d && d.length ? s = d.map((c) => {
          if (c.children && Array.isArray(c.children))
            return c.children.map((f) => {
              let m = null;
              return f.type && f.type.name == "ZmzSpaceItem" ? m = ie(() => f) : m = ie(Zt, {}, () => f), m;
            });
          {
            let f = null;
            return c.type && c.type.name == "ZmzSpaceItem" ? f = ie(() => c) : f = ie(Zt, {}, () => c), f;
          }
        }) : s = null;
      }
      return ie(e.tag, {
        ...a,
        class: ["zmz-space", l.value]
      }, [
        i,
        s
      ]);
    };
  }
};
tl.install = function(e) {
  e.component(tl.name, tl);
};
Zt.install = function(e) {
  e.component(Zt.name, Zt);
};
const xb = {
  name: "ZmzAnchor",
  props: {
    /**
     * 滚动容器
     */
    scrollTarget: {
      type: String,
      requre: ""
    },
    /**
     * 激活层
     */
    modelValue: {
      type: [String, Number],
      default: 0
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 传送节点
     */
    teleportDom: {
      type: String,
      default: "body"
    },
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "custom",
      validator(e) {
        return ["native", "custom"].includes(e);
      }
    }
  },
  emits: ["on-change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { proxy: a } = Ce(), n = b([]), o = b(null), r = b(0), l = b(0), i = b(0), s = z({
      get() {
        return e.modelValue;
      },
      set(g) {
        t("update:modelValue", g);
      }
    }), d = () => {
      let g = 0;
      e.scrollTarget && document.querySelector(e.scrollTarget) ? g = document.querySelector(e.scrollTarget).scrollTop : g = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, n.value.forEach((h, y) => {
        document.getElementById(h.Instance.proxy.href) && document.getElementById(h.Instance.proxy.href).offsetTop - document.getElementById(h.Instance.proxy.href).offsetHeight / 2 < g && (l.value = h.Instance.proxy.$el.offsetTop + h.Instance.proxy.$el.offsetHeight / 2, t("on-change", y, l.value));
      });
    };
    Ze(() => {
      e.scrollTarget && document.querySelector(e.scrollTarget) ? document.querySelector(e.scrollTarget).removeEventListener("scroll", d) : window.removeEventListener("scroll", d);
    }), Se(() => {
      e.scrollTarget && document.querySelector(e.scrollTarget) ? document.querySelector(e.scrollTarget).addEventListener("scroll", d) : window.addEventListener("scroll", d);
    }), de(() => {
      n.value.forEach((g, h) => {
        g.Instance.proxy.index = h, h == s.value && (l.value = g.Instance.proxy.$el.offsetTop + g.Instance.proxy.$el.offsetHeight / 2);
      }), a.$zmzConfig && (i.value = a.$zmzConfig.zIndex++);
    });
    const c = z(() => {
      let g = {};
      return g.top = l.value - r.value / 2 + "px", g;
    }), f = z(() => {
      let g = {};
      return g.zIndex = qe(), g;
    });
    return Fe("zmzAnchor", {
      zmzAnchorList: n,
      updateDom: () => {
        o.value && (r.value = o.value.offsetHeight);
      },
      scrollTarget: e.scrollTarget,
      mode: e.mode
    }), {
      zmzAnchorLineDotStyle: c,
      zmzAnchorLineDot: o,
      zmzAnchorStyle: f
    };
  }
}, Tb = { class: "zmz-anchor__line" };
function Ob(e, t, a, n, o, r) {
  return v(), pe(ct, Ie({
    to: a.teleportDom,
    disabled: !a.teleport
  }, e.$attrs), [
    u("div", Ie({
      class: "zmz-anchor",
      style: [n.zmzAnchorStyle]
    }, e.$attrs), [
      u("div", Tb, [
        u("div", {
          class: "zmz-anchor__line__dot",
          ref: "zmzAnchorLineDot",
          style: j([n.zmzAnchorLineDotStyle])
        }, null, 4)
      ]),
      N(e.$slots, "default")
    ], 16)
  ], 16, ["to", "disabled"]);
}
const nl = /* @__PURE__ */ H(xb, [["render", Ob]]);
nl.install = function(e) {
  e.component(nl.name, nl);
};
const Lb = rt({
  name: "ZmzAnchorItem",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      requre: ""
    },
    /**
     * 目标id
     */
    href: {
      type: String,
      default: ""
    },
    /**
     * 偏移
     */
    offset: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e) {
    const t = Ce(), a = be("zmzAnchor", {}), n = b(0), o = b(null), r = z(() => a.mode === "custom"), l = (f) => {
      let m = 0, g = 0;
      a.scrollTarget && document.querySelector(a.scrollTarget) ? (a.scrollTarget ? m = document.querySelector(a.scrollTarget).scrollTop : m = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, typeof f == "number" ? g = f - m : g = (document.getElementById(f) || { offsetTop: 0 }).offsetTop - m, a.scrollTarget ? document.querySelector(a.scrollTarget).scrollBy({ top: g, behavior: "smooth" }) : window.scrollBy({ top: g, behavior: "smooth" })) : console.error("警告:scrollTarget参数不是滚动目标节点，请检查！");
    }, i = z(() => {
      let f = {};
      return e.offset && (f["padding-left"] = Me(e.offset)), f;
    });
    de(() => {
      s(), d();
    }), Ne(() => {
      c(), d();
    });
    const s = () => {
      a.zmzAnchorList.value.push({
        uid: t.uid,
        Instance: t
      });
    }, d = () => {
      a.updateDom();
    }, c = () => {
      if (a.zmzAnchorList.value && a.zmzAnchorList.value.length) {
        const f = a.zmzAnchorList.value.findIndex((m) => m.uid === t.uid);
        a.zmzAnchorList.value.splice(f, 1);
      }
    };
    return {
      goAnchor: l,
      hashOrhistory: r,
      index: n,
      zmzAnchorItem: o,
      itemStyle: i
    };
  }
}), Db = {
  class: "zmz-anchor__item",
  ref: "zmzAnchorItem"
}, Mb = ["href"];
function Eb(e, t, a, n, o, r) {
  return v(), _("div", Db, [
    e.hashOrhistory ? (v(), _("div", {
      key: 0,
      class: "zmz-anchor__item__link",
      onClick: t[0] || (t[0] = (l) => e.goAnchor(e.href, e.index)),
      style: j(e.itemStyle)
    }, [
      N(e.$slots, "default", {}, () => [
        ne(Z(e.title), 1)
      ])
    ], 4)) : (v(), _("a", {
      key: 1,
      class: "zmz-anchor__item__link",
      href: e.href,
      style: j(e.itemStyle)
    }, [
      N(e.$slots, "default", {}, () => [
        ne(Z(e.title), 1)
      ])
    ], 12, Mb))
  ], 512);
}
const al = /* @__PURE__ */ H(Lb, [["render", Eb]]);
al.install = function(e) {
  e.component(al.name, al);
};
const Bb = {
  name: "ZmzDescriptions",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 操作
     */
    operation: {
      type: String,
      default: ""
    },
    /**
     * 最大列
     */
    maxCount: {
      type: [String, Number],
      default: 3
    },
    /**
     * 样式
     */
    labelStyle: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 内容样式
     */
    contentStyle: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 类名label
     */
    labelClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 类名content
     */
    contentClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * 边线
     */
    border: {
      type: Boolean,
      default: !1
    },
    /**
     * 模式
     */
    mode: {
      type: String,
      default: "horizontal",
      validator(e) {
        return ["horizontal", "vertical"].includes(e);
      }
    }
  },
  setup(e, { slots: t }) {
    const a = b([]), n = b([]), o = b(0), r = b(0);
    Fe("zmzDescriptions", {
      labelStyle: e.labelStyle,
      contentStyle: e.contentStyle,
      labelClass: e.labelClass,
      contentClass: e.contentClass,
      border: e.border,
      mode: e.mode
    });
    const l = z(() => i()), i = () => {
      let c = rn(t.default());
      return a.value = [], n.value = [], r.value = 0, o.value = e.maxCount, c.forEach((f, m, g) => {
        const h = f.props?.span || 1;
        if (m < g.length - 1 && (r.value += h > o.value ? o.value : h), m == g.length - 1) {
          const y = e.maxCount - r.value % e.maxCount;
          n.value.push(s(f, y, o.value, !0)), a.value.push(n.value);
          return;
        }
        h < o.value ? (o.value -= h, n.value.push(f)) : (n.value.push(s(f, h, o.value)), a.value.push(n.value), o.value = e.maxCount, n.value = []);
      }), a.value;
    }, s = (c, f, m, g = !1) => (c.props || (c.props = {}), f > m && (c.props.span = m), g && (c.props.span = f), c), d = z(() => {
      let c = "";
      return e.mode && (c = `zmz-descriptions--${e.mode}`), [{
        "zmz-descriptions--border": e.border
      }, c];
    });
    return {
      children: l,
      zmzDescriptionsClass: d
    };
  }
}, Ib = {
  key: 0,
  class: "zmz-descriptions__header"
}, Ab = {
  key: 0,
  class: "zmz-descriptions__header__title"
}, Pb = {
  key: 1,
  class: "zmz-descriptions__header__operation"
}, Nb = { class: "zmz-descriptions__body" }, Vb = { class: "zmz-descriptions__table" }, Fb = { class: "zmz-descriptions__tbody" };
function Rb(e, t, a, n, o, r) {
  const l = oe("zmzDescriptionsItem");
  return v(), _("div", {
    class: P(["zmz-descriptions", [n.zmzDescriptionsClass]])
  }, [
    e.$slots.title || a.title || e.$slots.operation || a.operation ? (v(), _("div", Ib, [
      e.$slots.title || a.title ? (v(), _("div", Ab, [
        N(e.$slots, "title", {}, () => [
          ne(Z(a.title), 1)
        ])
      ])) : A("", !0),
      e.$slots.operation || a.operation ? (v(), _("div", Pb, [
        N(e.$slots, "operation", {}, () => [
          ne(Z(a.operation), 1)
        ])
      ])) : A("", !0)
    ])) : A("", !0),
    u("div", Nb, [
      u("table", Vb, [
        u("tbody", Fb, [
          (v(!0), _(G, null, fe(n.children, (i, s) => (v(), pe(l, {
            key: s,
            row: i
          }, null, 8, ["row"]))), 128))
        ])
      ])
    ])
  ], 2);
}
const ll = /* @__PURE__ */ H(Bb, [["render", Rb]]);
ll.install = function(e) {
  e.component(ll.name, ll);
};
const Zb = {
  name: "ZmzDescriptionsCell",
  props: {
    /**
     * 数据
     */
    cell: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: ""
    },
    /**
     * 标签
     */
    tag: {
      type: String,
      default: "td"
    }
  },
  setup(e) {
    const t = be("zmzDescriptions", {}), a = z(() => ({
      children: e.cell.children,
      label: e.cell.props.label,
      span: e.cell.props.span ? e.cell.props.span : 1,
      labelStyle: e.cell.props["label-style"] ? e.cell.props["label-style"] : t.labelStyle,
      contentStyle: e.cell.props["content-style"] ? e.cell.props["content-style"] : t.contentStyle,
      labelClass: e.cell.props["label-class"] ? e.cell.props["label-class"] : t.labelClass,
      contentClass: e.cell.props["content-class"] ? e.cell.props["content-class"] : t.contentClass
    }));
    return () => {
      let n = "";
      a.value.children && a.value.children.default && (n = a.value.children.default());
      let o = "";
      a.value.children && a.value.children.label ? o = a.value.children.label() : o = a.value.label;
      let r = "";
      switch (o || (r = {
        "margin-right": 0
      }), e.type) {
        case "label":
          return ie(e.tag, {
            class: ["zmz-descriptions__label", a.value.labelClass],
            colSpan: 1,
            style: {
              ...a.value.labelStyle,
              ...r
            }
          }, o);
        case "content":
          return ie(e.tag, {
            class: ["zmz-descriptions__content", a.value.contentClass],
            colSpan: a.value.span * 2 - 1,
            style: {
              ...a.value.contentStyle
            }
          }, n);
        default:
          return ie(e.tag, {
            class: ["zmz-descriptions__td"],
            colSpan: a.value.span
          }, [
            ie("div", {
              class: ["zmz-descriptions__item"]
            }, [
              [
                ie("div", {
                  class: ["zmz-descriptions__label", a.value.labelClass],
                  style: {
                    ...a.value.labelStyle,
                    ...r
                  }
                }, o),
                ie("div", {
                  class: ["zmz-descriptions__content", a.value.contentClass],
                  style: {
                    ...a.value.contentStyle
                  }
                }, n)
              ]
            ])
          ]);
      }
    };
  }
}, Wb = {
  name: "ZmzDescriptionsItem",
  components: {
    zmzDescriptionsCell: Zb
  },
  props: {
    /**
     * 标签
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * 数据
     */
    row: {
      type: Array
    },
    /**
     * 合并
     */
    span: {
      type: [Number, String],
      default: 1
    },
    /**
     * label样式
     */
    labelStyle: {
      type: Object,
      default: () => {
      }
    },
    /**
     * content样式
     */
    contentStyle: {
      type: Object,
      default: () => {
      }
    },
    /**
     * label类名
     */
    labelClass: {
      type: [String, Array],
      default: ""
    },
    /**
     * content内容
     */
    contentClass: {
      type: [String, Array],
      default: ""
    }
  },
  setup() {
    const e = be("zmzDescriptions", {}), t = z(() => e.mode == "vertical");
    return {
      isBorder: z(() => e.border),
      isVertical: t
    };
  }
}, $b = { class: "zmz-descriptions__tr" };
function jb(e, t, a, n, o, r) {
  const l = oe("zmzDescriptionsCell");
  return v(), _("tr", $b, [
    n.isVertical ? (v(!0), _(G, { key: 0 }, fe(a.row, (i, s) => (v(), pe(l, {
      key: s,
      cell: i,
      type: "item",
      tag: "td"
    }, null, 8, ["cell"]))), 128)) : (v(!0), _(G, { key: 1 }, fe(a.row, (i, s) => (v(), _(G, null, [
      n.isBorder ? (v(), _(G, { key: 0 }, [
        (v(), pe(l, {
          key: s,
          cell: i,
          type: "label",
          tag: "td"
        }, null, 8, ["cell"])),
        (v(), pe(l, {
          key: s,
          cell: i,
          type: "content",
          tag: "td"
        }, null, 8, ["cell"]))
      ], 64)) : (v(), pe(l, {
        key: s,
        cell: i,
        type: "item",
        tag: "td"
      }, null, 8, ["cell"]))
    ], 64))), 256))
  ]);
}
const ol = /* @__PURE__ */ H(Wb, [["render", jb]]);
ol.install = function(e) {
  e.component(ol.name, ol);
};
const Hb = {
  name: "ZmzFormattime",
  props: {
    /**
     * 时间
     */
    time: {
      type: [String, Number],
      default: ""
    },
    /**
     * 默认展示
     */
    defaultTime: {
      type: [String, Number],
      default: ""
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: "currenttime",
      validator(e) {
        return ["countdown", "relativetime", "currenttime"].includes(e);
      }
    },
    relativetimeOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    countdownOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    currenttimeOptions: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = b(null), a = b(e.defaultTime);
    de(() => {
      n(e.time);
    }), Ze(() => {
      t.value && (clearInterval(t.value), t.value = null);
    });
    const n = (i) => {
      var s = 0;
      co(i) || (_r(i) && (s = new Date(i.replace(/-/g, "/")).getTime()), uo(i) && (s = new Date(i.replace(/-/g, "/")).getTime()), typeof i == "number" && (s = i), e.type === "countdown" ? r(s) : e.type === "relativetime" ? l(s) : o());
    }, o = () => {
      t.value = setInterval(() => {
        a.value = je(/* @__PURE__ */ new Date(), e.currenttimeOptions && e.currenttimeOptions.format ? e.currenttimeOptions.format : "yyyy-MM-dd hh:mm:ss");
      }, 1e3);
    }, r = (i) => {
      t.value = setInterval(() => {
        var s = new Date(i) - /* @__PURE__ */ new Date();
        if (s < 0)
          clearInterval(t.value), t.value = null;
        else {
          var d = parseInt(s / 1e3 / 60 / 60 / 24, 10), c = parseInt(s / 1e3 / 60 / 60 % 24, 10), f = parseInt(s / 1e3 / 60 % 60, 10), m = parseInt(s / 1e3 % 60, 10);
          let g = (d < 10 ? "0" + d : d) + (e.countdownOptions && e.countdownOptions.d ? e.countdownOptions.d : "天"), h = (c < 10 ? "0" + c : c) + (e.countdownOptions && e.countdownOptions.h ? e.countdownOptions.h : "时"), y = (f < 10 ? "0" + f : f) + (e.countdownOptions && e.countdownOptions.m ? e.countdownOptions.m : "分"), C = (m < 10 ? "0" + m : m) + (e.countdownOptions && e.countdownOptions.s ? e.countdownOptions.s : "秒");
          a.value = g + h + y + C;
        }
      }, 1e3);
    }, l = (i) => {
      var s = 6e4, d = s * 60, c = d * 24, f = c * 7, m = c * 30, g = c * 365, h = (/* @__PURE__ */ new Date()).getTime(), y = new Date(i).getTime(), C = h - y, k = C / s, S = C / d, L = C / c, p = C / f, w = C / m, O = C / g;
      if (O == 1)
        a.value = parseInt(O) + (e.relativetimeOptions && e.relativetimeOptions.Y ? e.relativetimeOptions.Y : "年前");
      else if (w >= 1 && w <= 12)
        a.value = parseInt(w) + (e.relativetimeOptions && e.relativetimeOptions.M ? e.relativetimeOptions.M : "月前");
      else if (p >= 1 && p <= 4)
        a.value = parseInt(p) + (e.relativetimeOptions && e.relativetimeOptions.W ? e.relativetimeOptions.W : "周前");
      else if (L >= 1 && L <= 7)
        a.value = parseInt(L) + (e.relativetimeOptions && e.relativetimeOptions.D ? e.relativetimeOptions.D : "天前");
      else if (S >= 1 && S <= 24)
        a.value = parseInt(S) + (e.relativetimeOptions && e.relativetimeOptions.h ? e.relativetimeOptions.h : "小时前");
      else if (k >= 1 && k <= 60)
        a.value = parseInt(k) + (e.relativetimeOptions && e.relativetimeOptions.m ? e.relativetimeOptions.m : "分钟前");
      else if (C >= 0 && C <= s)
        a.value = e.relativetimeOptions && e.relativetimeOptions.s ? e.relativetimeOptions.s : "刚刚";
      else {
        var x = /* @__PURE__ */ new Date();
        x.setTime(y);
        var D = x.getFullYear(), M = x.getMonth() + 1 < 10 ? "0" + (x.getMonth() + 1) : x.getMonth() + 1, R = x.getDate() < 10 ? "0" + x.getDate() : x.getDate(), B = x.getHours() < 10 ? "0" + x.getHours() : x.getHours(), F = x.getMinutes() < 10 ? "0" + x.getMinutes() : x.getMinutes(), E = x.getSeconds() < 10 ? "0" + x.getSeconds() : x.getSeconds();
        a.value = D + "-" + M + "-" + R + " " + B + ":" + F + ":" + E;
      }
    };
    return {
      formatTime: a
    };
  }
}, Yb = { class: "zmz-formattime" }, qb = { class: "zmz-formattime__date" };
function Ub(e, t, a, n, o, r) {
  return v(), _("div", Yb, [
    u("span", qb, Z(n.formatTime), 1)
  ]);
}
const rl = /* @__PURE__ */ H(Hb, [["render", Ub]]);
rl.install = function(e) {
  e.component(rl.name, rl);
};
const jo = {
  name: "ZmzScrollbarBar",
  props: {
    mode: Object,
    size: String,
    move: Number,
    wrap: Object,
    barStyle: Object,
    barClass: Array,
    barWrapStyle: Object,
    barWrapClass: Array
  },
  setup(e) {
    const t = b(null), a = b(null), n = b(0), o = b(0), r = b(!1);
    de(() => {
      e.normal || (Se(() => {
        l();
      }), e.noResize || window.addEventListener("resize", l));
    }), Ne(() => {
      e.normal || (e.noResize || window.removeEventListener("resize", l), window.removeEventListener("mouseup", f));
    });
    const l = () => {
      let g, h;
      e.wrap.value && (g = e.wrap.value.clientHeight * 100 / e.wrap.value.scrollHeight, h = e.wrap.value.clientWidth * 100 / e.wrap.value.scrollWidth, o.value = g < 100 ? g + "%" : "", n.value = h < 100 ? h + "%" : "");
    }, i = (g) => {
      g.ctrlKey || g.button === 2 || (d(g), e.mode[e.mode.axis] = g.currentTarget[e.mode.offset] - (g[e.mode.client] - g.currentTarget.getBoundingClientRect()[e.mode.direction]));
    }, s = (g) => {
      const h = Math.abs(g.target.getBoundingClientRect()[e.mode.direction] - g[e.mode.client]), y = t.value[e.mode.offset] / 2, C = (h - y) * 100 / a.value[e.mode.offset];
      e.wrap.value[e.mode.scroll] = C * e.wrap.value[e.mode.scrollSize] / 100;
    }, d = (g) => {
      g.stopImmediatePropagation(), r.value = !0, window.addEventListener("mousemove", c), window.addEventListener("mouseup", f), document.onselectstart = () => !1;
    }, c = (g) => {
      if (r.value === !1) return;
      const h = e.mode[e.mode.axis];
      if (!h) return;
      const y = (a.value.getBoundingClientRect()[e.mode.direction] - g[e.mode.client]) * -1, C = t.value[e.mode.offset] - h, k = (y - C) * 100 / a.value[e.mode.offset];
      e.wrap.value[e.mode.scroll] = k * e.wrap.value[e.mode.scrollSize] / 100;
    }, f = () => {
      r.value = !1, e.mode[e.mode.axis] = 0, window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", f), document.onselectstart = null;
    }, m = () => {
      const g = {}, h = `translate${e.mode.axis}(${e.move}%)`;
      return g[e.mode.size] = e.size, g.transform = h, g.msTransform = h, g.webkitTransform = h, g;
    };
    return () => {
      let g = Object.assign({}, m(), e.barStyle);
      return ie("div", {
        class: ["zmz-scrollbar__bar", "zmz-scrollbar__bar--" + e.mode.key, e.barWrapClass],
        ref: a,
        onMousedown: s,
        style: e.barWrapStyle
      }, [
        ie("div", {
          ref: t,
          class: ["zmz-scrollbar__bar__thumb", e.barClass],
          onMousedown: i,
          style: g
        })
      ]);
    };
  }
}, il = {
  name: "ZmzScrollbar",
  props: {
    /**
     * 容器样式
     */
    wrapStyle: Object,
    /**
     * 容器类名
     */
    wrapClass: Array,
    /**
     * 视图样式
     */
    viewStyle: Object,
    /**
     * 视图类名
     */
    viewClass: Array,
    /**
     * bar样式
     */
    barStyle: Object,
    /**
     * bar类名
     */
    barClass: Array,
    /**
     * bar容器
     */
    barWrapStyle: Object,
    // bar容器样式
    barWrapClass: Array,
    /**
     * 自适应
     */
    noResize: Boolean,
    /**
     * 自动宽度
     */
    autoBarWidth: {
      type: Boolean,
      default: !1
    },
    /**
     * 垂直
     */
    vertical: {
      type: Boolean,
      default: !0
    },
    /**
     * 是否显示滚动条
     */
    showScrollBar: {
      type: Boolean,
      default: !0
    },
    /**
     * 原生滚动
     */
    nativeScrollbar: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(0), l = b(0), i = b(0), s = b(0), d = b(17), c = b({
      offset: "offsetHeight",
      scroll: "scrollTop",
      scrollSize: "scrollHeight",
      size: "height",
      key: "vertical",
      axis: "Y",
      client: "clientY",
      direction: "top"
    }), f = b({
      offset: "offsetWidth",
      scroll: "scrollLeft",
      scrollSize: "scrollWidth",
      size: "width",
      key: "horizontal",
      axis: "X",
      client: "clientX",
      direction: "left"
    }), m = (k) => {
      let S = {};
      for (let L = 0; L < k.length; L++)
        k[L] && g(S, k[L]);
      return S;
    }, g = (k, S) => {
      for (let L in S)
        k[L] = S[L];
      return k;
    }, h = z(() => {
      let k;
      if (k !== void 0) return k;
      const S = document.createElement("div");
      S.className = "zmz-scrollbar__wrap", S.style.visibility = "hidden", S.style.width = "100px", S.style.position = "absolute", S.style.top = "-9999px", document.body.appendChild(S);
      const L = S.offsetWidth;
      S.style.overflow = "scroll";
      const p = document.createElement("div");
      p.style.width = "100%", S.appendChild(p);
      const w = p.offsetWidth;
      return S.parentNode.removeChild(S), k = L - w, k;
    });
    de(() => {
      e.nativeScrollbar || (Se(() => {
        y();
      }), e.noResize || window.addEventListener("resize", y));
    }), Ne(() => {
      e.nativeScrollbar || e.noResize || window.removeEventListener("resize", y);
    });
    const y = () => {
      let k, S;
      a.value && (k = a.value.clientHeight * 100 / a.value.scrollHeight, S = a.value.clientWidth * 100 / a.value.scrollWidth, l.value = k < 100 ? k + "%" : "", r.value = S < 100 ? S + "%" : "");
    }, C = () => {
      s.value = a.value.scrollTop * 100 / a.value.clientHeight, i.value = a.value.scrollLeft * 100 / a.value.clientWidth;
    };
    return () => {
      e.autoBarWidth && (d.value = h.value);
      let k = e.wrapStyle;
      if (d.value) {
        const w = `-${d.value}px`, O = `margin-bottom: ${w}; margin-right: ${w};`;
        Array.isArray(e.wrapStyle) ? (k = m(e.wrapStyle), k.marginRight = k.marginBottom = w) : typeof e.wrapStyle == "string" ? k += O : k = O;
      }
      e.nativeScrollbar && (k = "margin-bottom: 0; margin-right: 0;");
      const S = ie("div", {
        class: ["zmz-scrollbar__view", e.viewClass],
        style: e.viewStyle,
        ref: n
      }, t.default()), L = ie("div", {
        class: [
          e.wrapClass,
          "zmz-scrollbar__wrap",
          d.value ? "" : "zmz-scrollbar__wrap--hidden-default"
        ],
        style: k,
        ref: a,
        onScroll: C
      }, [S]);
      let p;
      return e.nativeScrollbar ? p = [
        ie("div", {
          class: [e.wrapClass, "zmz-scrollbar__wrap", { "zmz-scrollbar__wrap--native": e.nativeScrollbar }],
          style: k,
          ref: a
        }, [S])
      ] : (p = [L], r.value && p.push(
        ie(jo, {
          class: [{
            "zmz-scrollbar__bar--show": e.showScrollBar
          }],
          mode: f.value,
          move: i.value,
          size: r.value,
          barStyle: e.barStyle,
          barClass: e.barClass,
          barWrapStyle: e.barWrapStyle,
          barWrapClass: e.barWrapClass,
          wrap: a
        })
      ), l.value && p.push(
        ie(jo, {
          class: [{
            "zmz-scrollbar__bar--show": e.showScrollBar
          }],
          mode: c.value,
          move: s.value,
          size: l.value,
          barStyle: e.barStyle,
          barClass: e.barClass,
          barWrapStyle: e.barWrapStyle,
          barWrapClass: e.barWrapClass,
          wrap: a
        })
      )), ie("div", {
        class: ["zmz-scrollbar"],
        ref: o
      }, p);
    };
  }
};
il.install = function(e) {
  e.component(il.name, il);
};
let Gb = (e) => new Promise((t) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(e).then(() => {
      t(!0);
    }).catch(() => {
      t(!1);
    });
  else {
    var a = document.createElement("textarea");
    document.body.appendChild(a), a.value = e, a.select();
    try {
      document.execCommand("copy", !1), t(!0);
    } catch {
      t(!1);
    }
    a.remove();
  }
});
const Xb = {
  name: "ZmzSigned",
  components: {
    ZmzButton: xt
  },
  props: {
    /**
     * 颜色
     */
    color: {
      type: String,
      default: "black"
    },
    /**
     * 宽度
     */
    width: {
      type: Number,
      default: 700
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 700
    },
    /**
     * 显示米字格
     */
    lattice: {
      type: Boolean,
      default: !0
    },
    /**
     * 米字格颜色
     */
    latticeColor: {
      type: String,
      default: "red"
    },
    /**
     * 画板颜色组
     */
    paint: {
      type: Array,
      default: () => ["black", "blue", "green", "red", "orange", "yellow"]
    },
    /**
     * 清除按钮
     */
    showClearButton: {
      type: Boolean,
      default: !0
    },
    /**
     * 线宽
     */
    lineWidth: {
      type: Number,
      default: 10
    },
    /**
     * 下载按钮
     */
    showDownloadButton: {
      type: Boolean,
      default: !0
    },
    /**
     * 下载名称
     */
    downloadName: {
      type: String,
      default: "fileName"
    },
    /**
     * 下载类型
     */
    downloadMimeType: {
      type: String,
      default: "image/png"
    }
  },
  emits: ["on-change", "on-clear", "on-download", "on-canvas-down", "on-canvas-move", "on-canvas-up"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(e.color), r = b(e.width), l = b(e.height), i = b(!1);
    var s = Le({
      x: 0,
      y: 0
    });
    const d = b(0), c = b(-1), f = b(e.lineWidth), m = b(1), g = b(10), h = b(0.1);
    Se(() => {
      n.value = a.value.getContext("2d"), a.value.width = r.value, a.value.height = l.value, e.lattice && W();
    });
    const y = z(() => e.paint.findIndex((X) => X == o.value)), C = z(() => {
      let $ = {};
      return $.width = e.width + "px", $;
    }), k = () => {
      n.value.clearRect(0, 0, r.value, l.value), e.lattice && W(), t("on-clear");
    }, S = () => {
      var $ = e.downloadMimeType, X = a.value.toDataURL($), ee = document.createElement("a");
      ee.download = e.downloadName, ee.href = X, ee.dataset.downloadurl = [$, ee.download, ee.href].join(":"), document.body.appendChild(ee), ee.click(), document.body.removeChild(ee), t("on-download");
    }, L = ($) => {
      o.value = $;
    }, p = ($) => {
      i.value = !0, s = T($.x, $.y), d.value = (/* @__PURE__ */ new Date()).getTime(), t("on-canvas-down");
    }, w = () => {
      i.value = !1, t("on-change", a.value.toDataURL("image/png")), t("on-canvas-up");
    }, O = ($) => {
      var X = T($.x, $.y), ee = (/* @__PURE__ */ new Date()).getTime(), J = I(X, s), q = ee - d.value, ve = V(q, J);
      n.value.beginPath(), n.value.moveTo(s.x, s.y), n.value.lineTo(X.x, X.y), n.value.strokeStyle = o.value, n.value.lineWidth = ve, n.value.lineCap = "round", n.value.lineJoin = "round", n.value.stroke(), s = X, d.value = ee, c.value = ve, t("on-canvas-move");
    };
    de(() => {
      a.value.addEventListener("touchstart", x), a.value.addEventListener("touchmove", D), a.value.addEventListener("touchend", M);
    });
    const x = ($) => {
      $.preventDefault();
      let X = $.touches[0];
      p({
        x: X.pageX,
        y: X.pageY
      });
    }, D = ($) => {
      if ($.preventDefault(), i.value) {
        let X = $.touches[0];
        O({
          x: X.pageX,
          y: X.pageY
        });
      }
    }, M = ($) => {
      $.preventDefault(), w();
    };
    Ze(() => {
      a.value && (a.value.removeEventListener("touchstart", x), a.value.removeEventListener("touchmove", D), a.value.removeEventListener("touchend", M));
    });
    const R = ($) => {
      $.preventDefault(), p({
        x: $.clientX,
        y: $.clientY
      });
    }, B = ($) => {
      $.preventDefault(), w();
    }, F = ($) => {
      $.preventDefault(), w();
    }, E = ($) => {
      $.preventDefault(), i.value && O({
        x: $.clientX,
        y: $.clientY
      });
    }, T = ($, X) => {
      var ee = a.value.getBoundingClientRect();
      return {
        x: Math.round($ - ee.left),
        y: Math.round(X - ee.top)
      };
    }, I = ($, X) => Math.sqrt(($.x - X.x) * ($.x - X.x) + ($.y - X.y) * ($.y - X.y)), V = ($, X) => {
      var ee = X / $, J;
      return ee <= h.value ? J = f.value : ee >= g.value ? J = m.value : J = f.value - (ee - h.value) / (g.value - h.value) * (f.value - m.value), c.value == -1 ? J : c.value * 2 / 3 + J * 1 / 3;
    }, W = () => {
      n.value.save(), n.value.strokeStyle = e.latticeColor, n.value.beginPath(), n.value.moveTo(3, 3), n.value.lineTo(r.value - 3, 3), n.value.lineTo(r.value - 3, l.value - 3), n.value.lineTo(3, l.value - 3), n.value.closePath(), n.value.lineWidth = 6, n.value.stroke(), n.value.beginPath(), n.value.moveTo(0, 0), n.value.lineTo(r.value, l.value), n.value.moveTo(r.value, 0), n.value.lineTo(0, l.value), n.value.moveTo(r.value / 2, 0), n.value.lineTo(r.value / 2, l.value), n.value.moveTo(0, l.value / 2), n.value.lineTo(r.value, l.value / 2), n.value.lineWidth = 2, n.value.stroke(), n.value.restore();
    };
    return {
      zmzSignedCanvas: a,
      handleMousedown: R,
      handleMouseUp: B,
      handleMouseOut: F,
      handleMouseMove: E,
      handleClear: k,
      handleDownload: S,
      handleColorSelect: L,
      current: y,
      zmzSignedStyle: C
    };
  }
}, Kb = { class: "zmz-signed__wrap" }, Qb = { class: "zmz-signed__paint" }, Jb = ["onClick"], e1 = { class: "zmz-signed__button" };
function t1(e, t, a, n, o, r) {
  const l = oe("zmz-button");
  return v(), _("div", {
    class: "zmz-signed",
    style: j([n.zmzSignedStyle])
  }, [
    u("canvas", {
      class: "zmz-signed__canvas",
      ref: "zmzSignedCanvas",
      onMousemove: t[0] || (t[0] = (...i) => n.handleMouseMove && n.handleMouseMove(...i)),
      onMousedown: t[1] || (t[1] = (...i) => n.handleMousedown && n.handleMousedown(...i)),
      onMouseup: t[2] || (t[2] = (...i) => n.handleMouseUp && n.handleMouseUp(...i)),
      onMouseout: t[3] || (t[3] = (...i) => n.handleMouseOut && n.handleMouseOut(...i))
    }, " 您的浏览器不支持canvas ", 544),
    u("div", Kb, [
      u("div", Qb, [
        (v(!0), _(G, null, fe(a.paint, (i, s) => (v(), _("div", {
          class: "zmz-signed__paint__item",
          key: s,
          onClick: (d) => n.handleColorSelect(i)
        }, [
          u("span", {
            class: P(["zmz-signed__paint__item__inner", { "zmz-signed__paint__item__inner--selected": n.current == s }]),
            style: j({ background: i })
          }, null, 6)
        ], 8, Jb))), 128))
      ]),
      u("div", e1, [
        a.showDownloadButton ? (v(), _("div", {
          key: 0,
          class: "zmz-signed__button__item",
          onClick: t[4] || (t[4] = (...i) => n.handleDownload && n.handleDownload(...i))
        }, [
          N(e.$slots, "download", {}, () => [
            K(l, {
              type: "primary",
              class: "zmz-signed__button__btn"
            }, {
              default: le(() => [...t[6] || (t[6] = [
                ne("下载", -1)
              ])]),
              _: 1
            })
          ])
        ])) : A("", !0),
        a.showClearButton ? (v(), _("div", {
          key: 1,
          class: "zmz-signed__button__item",
          onClick: t[5] || (t[5] = (...i) => n.handleClear && n.handleClear(...i))
        }, [
          N(e.$slots, "clear", {}, () => [
            K(l, { class: "" }, {
              default: le(() => [...t[7] || (t[7] = [
                ne("清除", -1)
              ])]),
              _: 1
            })
          ])
        ])) : A("", !0)
      ])
    ])
  ], 4);
}
const sl = /* @__PURE__ */ H(Xb, [["render", t1]]);
sl.install = function(e) {
  e.component(sl.name, sl);
};
const n1 = rt({
  name: "ZmzLoupe",
  props: {
    /**
     * 图片地址
     */
    src: {
      type: String,
      default: ""
    },
    /**
     * 宽度
     */
    width: {
      type: Number,
      default: 400
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 400
    },
    /**
     * 放大倍数
     */
    magnifierMultiple: {
      type: Number,
      default: 2
    },
    /**
     * 放大镜背景色
     */
    magnifierBackground: String,
    /**
     * 放大镜阴影
     */
    magnifierShadow: String,
    /**
    * 放大镜宽度
    */
    magnifierWidth: String,
    /**
    * 放大镜高度
    */
    magnifierHeight: String
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  emits: ["on-change"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(!1), l = z(() => {
      let c = {};
      return c.width = e.width * e.magnifierMultiple + "px", c.height = e.height * e.magnifierMultiple + "px", c;
    }), i = z(() => {
      let c = {};
      return c.width = e.width + "px", c.height = e.height + "px", c;
    }), s = (c) => {
      Se(() => {
        let f = o.value.getBoundingClientRect(), m = c.pageX - f.left - a.value.offsetWidth / 2, g = c.pageY - f.top - a.value.offsetHeight / 2;
        m <= 0 - a.value.offsetWidth / 2 && (m = 0 - a.value.offsetWidth / 2), m >= o.value.offsetWidth - a.value.offsetWidth / 2 && (m = o.value.offsetWidth - a.value.offsetWidth / 2), g <= 0 - a.value.offsetHeight / 2 && (g = 0 - a.value.offsetHeight / 2), g >= o.value.offsetHeight - a.value.offsetHeight / 2 && (g = o.value.offsetHeight - a.value.offsetHeight / 2), a.value.style.left = m + "px", a.value.style.top = g + "px", n.value.style.left = -e.magnifierMultiple * m - a.value.offsetWidth * (e.magnifierMultiple - 1) / 2 + "px", n.value.style.top = -e.magnifierMultiple * g - a.value.offsetHeight * (e.magnifierMultiple - 1) / 2 + "px", t("on-change", { left: m, top: g });
      });
    }, d = z(() => {
      let c = {};
      return e.magnifierBackground && (c.background = e.magnifierBackground), e.magnifierShadow && (c["box-shadow"] = e.magnifierShadow), e.magnifierHeight && (c.height = e.magnifierHeight), e.magnifierWidth && (c.width = e.magnifierWidth), c;
    });
    return {
      handleMouseMove: s,
      zmzLoupeMagnifier: a,
      zmzLoupeMagnifierImg: n,
      zmzLoupe: o,
      imgStyle: l,
      zmzLoupeMaskStyle: d,
      isMagnifier: r,
      zmzLoupeStyle: i
    };
  }
}), a1 = { class: "zmz-loupe__image" }, l1 = ["src"], o1 = ["src"];
function r1(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-loupe",
    ref: "zmzLoupe",
    style: j([e.zmzLoupeStyle]),
    onMousemove: t[0] || (t[0] = (...l) => e.handleMouseMove && e.handleMouseMove(...l)),
    onMouseover: t[1] || (t[1] = (l) => e.isMagnifier = !0),
    onMouseout: t[2] || (t[2] = (l) => e.isMagnifier = !1)
  }, [
    u("div", a1, [
      u("img", {
        src: e.src,
        class: "zmz-loupe__image__inner"
      }, null, 8, l1)
    ]),
    re(u("div", {
      class: "zmz-loupe__magnifier",
      ref: "zmzLoupeMagnifier",
      style: j([e.zmzLoupeMaskStyle])
    }, [
      u("img", {
        style: j([e.imgStyle]),
        class: "zmz-loupe__magnifier__image",
        src: e.src,
        ref: "zmzLoupeMagnifierImg"
      }, null, 12, o1)
    ], 4), [
      [Be, e.isMagnifier]
    ])
  ], 36);
}
const ul = /* @__PURE__ */ H(n1, [["render", r1]]);
ul.install = function(e) {
  e.component(ul.name, ul);
};
const i1 = {
  name: "ZmzShutters",
  componentName: "ZmzShutters",
  props: {
    /**
     * 宽度
     */
    height: {
      type: [Number, String],
      default: 200
    },
    /**
     * 高度
     */
    width: [Number, String],
    /**
     * 激活
     */
    modelValue: {
      type: Number,
      default: -1
    },
    /**
     * 展开宽度
     */
    expandWidth: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "on-mouseout", "on-mouseover", "on-item-mouseout", "on-item-mouseover", "on-expand"],
  setup(e, { emit: t }) {
    const a = b(null), n = b([]), o = b(Me(e.width)), r = z({
      get() {
        return e.modelValue;
      },
      set(g) {
        t("update:modelValue", g);
      }
    }), l = () => {
      n.value.forEach((g, h) => {
        g.instance.proxy.index = h;
      }), i();
    }, i = () => {
      Se(() => {
        if (a.value) {
          let g = 0, h, y, C = a.value.getBoundingClientRect();
          e.expandWidth && n.value.length > 1 ? (g = e.expandWidth, h = (C.width - e.expandWidth) / (n.value.length - 1), y = C.width / n.value.length) : (h = C.width / n.value.length, y = C.width / n.value.length, g = y), n.value.forEach((k, S) => {
            r.value === -1 ? k.instance.proxy.width = y + "px" : r.value !== S ? k.instance.proxy.width = h + "px" : k.instance.proxy.width = g + "px";
          });
        }
      });
    }, s = () => {
      r.value = -1, i(), t("on-mouseout");
    }, d = () => {
      t("on-mouseover");
    }, c = (g) => {
      t("on-item-mouseout", g), t("on-expand", g);
    }, f = (g) => {
      r.value = g, i(), t("on-item-mouseover", g), t("on-expand", g);
    }, m = z(() => {
      let g = {};
      return e.height && (g.height = Me(e.height)), e.width && (g.width = Me(e.width)), g;
    });
    return Fe("zmzShutters", {
      width: o.value,
      height: Me(e.height),
      expand: e.expand,
      zmzShuttersItemList: n,
      updateDom: l,
      handleItemMouseout: c,
      handleItemMouseover: f,
      model: r
    }), {
      zmzShutters: a,
      zmzShuttersStyle: m,
      handleMouseOut: s,
      handleMounseOver: d
    };
  }
};
function s1(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-shutters",
    ref: "zmzShutters",
    style: j([n.zmzShuttersStyle]),
    onMouseout: t[0] || (t[0] = (...l) => n.handleMouseOut && n.handleMouseOut(...l)),
    onMouseover: t[1] || (t[1] = (...l) => n.handleMounseOver && n.handleMounseOver(...l))
  }, [
    N(e.$slots, "default")
  ], 36);
}
const dl = /* @__PURE__ */ H(i1, [["render", s1]]);
dl.install = function(e) {
  e.component(dl.name, dl);
};
const u1 = {
  name: "ZmzShuttersItem",
  setup() {
    const e = Ce(), t = be("zmzShutters", {}), a = b(0), n = b(0), o = b(!1), r = z(() => {
      let m = {};
      return t.height && (m.height = t.height), n.value && (m.width = n.value), m;
    });
    de(() => {
      l(), i();
    }), Ne(() => {
      s(), i();
    });
    const l = () => {
      t.zmzShuttersItemList.value.push({
        uid: e.uid,
        instance: e
      });
    }, i = () => {
      t.updateDom();
    }, s = () => {
      if (t.zmzShuttersItemList.value && t.zmzShuttersItemList.value.length) {
        const m = t.zmzShuttersItemList.value.findIndex((g) => g.uid === e.uid);
        t.zmzShuttersItemList.value.splice(m, 1);
      }
    }, d = (m) => {
      o.value = !0, t.handleItemMouseover(m);
    }, c = (m) => {
      o.value = !1, t.handleItemMouseout(m);
    }, f = z(() => {
      let m = [];
      return o.value && m.push("zmz-shutters__item--hover"), t.model.value == a.value && m.push("zmz-shutters__item--active"), m;
    });
    return {
      width: n,
      index: a,
      shuttersItemStyle: r,
      handleMouseOut: c,
      handleMounseOver: d,
      zmzShuttersItemClass: f
    };
  }
};
function d1(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-shutters__item", [n.zmzShuttersItemClass]]),
    style: j([n.shuttersItemStyle]),
    onMouseout: t[0] || (t[0] = (l) => n.handleMouseOut(n.index)),
    onMouseover: t[1] || (t[1] = (l) => n.handleMounseOver(n.index))
  }, [
    N(e.$slots, "default")
  ], 38);
}
const cl = /* @__PURE__ */ H(u1, [["render", d1]]);
cl.install = function(e) {
  e.component(cl.name, cl);
};
const c1 = {
  name: "ZmzNumberdynamic",
  props: {
    /**
     * 加载时间
     */
    time: {
      type: Number,
      default: 10
    },
    /**
     * 结束值
     */
    endValue: {
      type: Number,
      default: 0
    },
    /**
     * 开始值
     */
    startValue: {
      type: Number,
      default: 0
    },
    /**
     * 是否分割
     */
    division: {
      type: Boolean,
      default: !1
    },
    /**
     * 分割位数
     */
    divisionDigit: {
      type: Number,
      default: 3
    },
    /**
     * 分割符号
     */
    divisionSymbol: {
      type: String,
      default: ","
    },
    /**
     * 加载速度
     */
    speed: {
      type: Number,
      default: 10
    }
  },
  emits: ["on-animation-end"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(e.startValue), o = () => {
      let r = (e.endValue - n.value) * 10 / (e.time * 100), l = 0, i = n.value, s = setInterval(function() {
        if (i += r, i > e.endValue && (clearInterval(s), i = e.endValue, s = null, t("on-animation-end")), l !== i)
          if (l = parseInt(i), e.division) {
            let d = new RegExp("(\\d)(?=(?:\\d{" + e.divisionDigit + "}[+]?)+$)", "g");
            n.value = l.toString().replace(d, "$1" + e.divisionSymbol);
          } else
            n.value = l.toString();
      }, e.speed);
    };
    return ue([() => e.startValue, () => e.endValue], ([r, l]) => {
      n.value = r, l && o();
    }, {
      deep: !0,
      immediate: !0
    }), {
      numberGrow: o,
      zmzNumberdynamicNumber: a,
      numberValue: n
    };
  }
}, m1 = { class: "zmz-numberdynamic" };
function f1(e, t, a, n, o, r) {
  return v(), _("span", m1, [
    u("span", {
      ref: "zmzNumberdynamicNumber",
      class: "zmz-numberdynamic__number"
    }, Z(n.numberValue), 513)
  ]);
}
const ml = /* @__PURE__ */ H(c1, [["render", f1]]);
ml.install = function(e) {
  e.component(ml.name, ml);
};
const v1 = {
  name: "ZmzPagefooter",
  props: {
    copyright: {
      type: String,
      default: ""
    },
    safetyWidth: {
      type: String,
      default: "100%"
    },
    fixed: {
      type: Boolean,
      default: !1
    },
    background: {
      type: String,
      default: "#fff"
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(() => {
      let o = {};
      return e.fixed && (o.position = "fixed", o.bottom = "0", o.left = "0", o.right = "0"), e.background && (o.background = e.background), e.zIndex && (o.zIndex = e.zIndex), o;
    }), a = z(() => {
      let o = {};
      return e.safetyWidth && (o.width = e.safetyWidth), o;
    }), n = z(() => {
      let o = {};
      return e.color && (o.color = e.color), o;
    });
    return {
      zmzPagefooterStyle: t,
      zmzPagefooterWrapStyle: a,
      zmzPagefooterCommonStyle: n
    };
  }
};
function z1(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-pagefooter",
    style: j([n.zmzPagefooterStyle])
  }, [
    u("div", {
      class: "zmz-pagefooter__wrap",
      style: j([n.zmzPagefooterWrapStyle])
    }, [
      u("div", {
        class: "zmz-pagefooter__content",
        style: j([n.zmzPagefooterCommonStyle])
      }, [
        N(e.$slots, "default")
      ], 4),
      e.$slots.copyright || a.copyright ? (v(), _("div", {
        key: 0,
        class: "zmz-pagefooter__copyright",
        style: j([n.zmzPagefooterCommonStyle])
      }, [
        N(e.$slots, "copyright", {}, () => [
          ne(Z(a.copyright), 1)
        ])
      ], 4)) : A("", !0)
    ], 4)
  ], 4);
}
const fl = /* @__PURE__ */ H(v1, [["render", z1]]);
fl.install = function(e) {
  e.component(fl.name, fl);
};
const _1 = {
  name: "ZmzPageheader",
  props: {
    /**
     * 标题
     */
    title: String,
    /**
     * 二级标题
     */
    subtitle: String,
    /**
     * 高度
     */
    height: String
  },
  emits: ["on-back"],
  setup(e, { emit: t }) {
    const a = () => {
      t("on-back");
    }, n = z(() => {
      let o = [];
      return e.height && (o.height = e.height), o;
    });
    return {
      handleBack: a,
      zmzPageheaderStyle: n
    };
  }
}, h1 = { class: "zmz-pageheader__left" }, g1 = { class: "zmz-pageheader__wrap" }, y1 = { class: "zmz-pageheader__title" }, p1 = { class: "zmz-pageheader__subtitle" }, b1 = {
  key: 0,
  class: "zmz-pageheader__right"
};
function k1(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-pageheader",
    style: j([n.zmzPageheaderStyle])
  }, [
    u("div", h1, [
      u("div", {
        class: "zmz-pageheader__back",
        onClick: t[0] || (t[0] = (...l) => n.handleBack && n.handleBack(...l))
      }, [
        N(e.$slots, "icon", {}, () => [
          t[1] || (t[1] = u("i", { class: "zmz-pageheader__back__icon zmz-icon--back" }, null, -1))
        ])
      ]),
      u("div", g1, [
        u("div", y1, [
          N(e.$slots, "title", {}, () => [
            ne(Z(a.title), 1)
          ])
        ]),
        u("div", p1, [
          N(e.$slots, "subtitle", {}, () => [
            ne(Z(a.subtitle), 1)
          ])
        ])
      ])
    ]),
    e.$slots.operation ? (v(), _("div", b1, [
      N(e.$slots, "operation")
    ])) : A("", !0)
  ], 4);
}
const vl = /* @__PURE__ */ H(_1, [["render", k1]]);
vl.install = function(e) {
  e.component(vl.name, vl);
};
const C1 = {
  name: "ZmzPagecontent",
  props: {
    /**
     * 标题
     */
    title: String,
    /**
     * 二级标题
     */
    subtitle: String,
    /**
     * 背景色
     */
    background: String,
    /**
     * 标题样式
     */
    titleStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 二级样式
     */
    subtitleStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 消息样式
     */
    infoStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 内容样式
     */
    contentStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 消息
     */
    info: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * html
     */
    html: {
      type: Boolean,
      default: !1
    },
    /**
     * text
     */
    content: {
      type: String,
      default: ""
    },
    /**
     * 线
     */
    border: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(() => {
      let n = {};
      return e.background && (n.background = e.background), Object.assign(n, e.contentStyle);
    }), a = z(() => {
      let n = {};
      return e.background && (n.background = e.background, n["border-top"] = "1px solid" + e.background), e.border && (n["border-top"] = "1px solid" + e.border), n;
    });
    return {
      zmzPagecontentStyle: t,
      zmzPagecontentContentStyle: a
    };
  }
}, w1 = { class: "zmz-pagecontent__header" }, S1 = { class: "zmz-pagecontent__info__item__label" }, x1 = { class: "zmz-pagecontent__info__item__content" }, T1 = ["innerHTML"], O1 = ["textContent"];
function L1(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-pagecontent",
    style: j([n.zmzPagecontentStyle])
  }, [
    u("div", w1, [
      a.title || e.$slots.title ? (v(), _("div", {
        key: 0,
        class: "zmz-pagecontent__header__title",
        style: j([a.titleStyle])
      }, [
        N(e.$slots, "title", {}, () => [
          ne(Z(a.title), 1)
        ])
      ], 4)) : A("", !0),
      a.subtitle || e.$slots.subtitle ? (v(), _("div", {
        key: 1,
        class: "zmz-pagecontent__header__subtitle",
        style: j([a.subtitleStyle])
      }, [
        N(e.$slots, "subtitle", {}, () => [
          ne(Z(a.subtitle), 1)
        ])
      ], 4)) : A("", !0)
    ]),
    a.info || e.$slots.info ? (v(), _("div", {
      key: 0,
      class: "zmz-pagecontent__info",
      style: j([a.infoStyle])
    }, [
      N(e.$slots, "info", {}, () => [
        (v(!0), _(G, null, fe(a.info, (l, i) => (v(), _("div", {
          class: "zmz-pagecontent__info__item",
          key: i
        }, [
          u("div", S1, Z(l.label), 1),
          u("div", x1, Z(l.content), 1)
        ]))), 128))
      ])
    ], 4)) : A("", !0),
    e.$slots.default || a.content ? (v(), _("div", {
      key: 1,
      class: "zmz-pagecontent__content",
      style: j([n.zmzPagecontentContentStyle])
    }, [
      N(e.$slots, "default", {}, () => [
        a.html ? (v(), _("div", {
          key: 0,
          class: "zmz-pagecontent__content__wrap",
          innerHTML: a.html
        }, null, 8, T1)) : (v(), _("div", {
          key: 1,
          class: "zmz-pagecontent__content__wrap",
          textContent: Z(a.content)
        }, null, 8, O1))
      ])
    ], 4)) : A("", !0)
  ], 4);
}
const zl = /* @__PURE__ */ H(C1, [["render", L1]]);
zl.install = function(e) {
  e.component(zl.name, zl);
};
const D1 = {
  name: "ZmzBacktop",
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    /**
     * 滚动时间
     */
    duration: {
      type: Number,
      default: 10
    },
    /**
     * 右部距离
     */
    right: {
      type: Number,
      default: 50
    },
    /**
     * 底部距离
     */
    bottom: {
      type: Number,
      default: 50
    },
    /**
     * 滚动目标
     */
    scrollTarget: {
      type: String,
      default: ""
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "zmz-icon--arrow-top"
    }
  },
  emits: ["on-backtop", "on-click"],
  setup(e, { emit: t }) {
    const a = b(!1), n = b(0), o = b(null), r = b(null), l = z(() => {
      let d = {};
      return e.right && (d.right = e.right + "px"), e.bottom && (d.bottom = e.bottom + "px"), d;
    }), i = () => {
      r.value = setInterval(() => {
        let d = n.value / 4;
        e.scrollTarget ? (document.querySelector(e.scrollTarget).scrollTop -= d, document.querySelector(e.scrollTarget).scrollTop -= d) : (document.documentElement.scrollTop -= d, document.body.scrollTop -= d), n.value === 0 && (t("on-backtop"), clearInterval(r.value), r.value = null);
      }, e.duration), t("on-click");
    }, s = () => {
      e.scrollTarget ? n.value = document.querySelector(e.scrollTarget).scrollTop : n.value = document.body.scrollTop || document.documentElement.scrollTop, n.value > e.visibilityHeight ? a.value = !0 : a.value = !1;
    };
    return de(() => {
      Se(() => {
        e.scrollTarget && document.querySelector(e.scrollTarget) ? o.value = document.querySelector(e.scrollTarget).addEventListener("scroll", s) : o.value = window.addEventListener("scroll", s);
      });
    }), Ne(() => {
      o.value && (e.scrollTarget && document.querySelector(e.scrollTarget) ? document.querySelector(e.scrollTarget).removeEventListener("scroll", s) : window.removeEventListener("scroll", s));
    }), {
      zmzBacktopStyle: l,
      handleBacktop: i,
      handleScroll: s,
      isShow: a
    };
  }
}, M1 = { class: "zmz-backtop__button" };
function E1(e, t, a, n, o, r) {
  return n.isShow ? (v(), _("div", {
    key: 0,
    class: "zmz-backtop",
    onClick: t[0] || (t[0] = (...l) => n.handleBacktop && n.handleBacktop(...l)),
    style: j([n.zmzBacktopStyle])
  }, [
    N(e.$slots, "default", {}, () => [
      u("div", M1, [
        u("i", {
          class: P(["zmz-backtop__icon", a.icon])
        }, null, 2)
      ])
    ])
  ], 4)) : A("", !0);
}
const _l = /* @__PURE__ */ H(D1, [["render", E1]]);
_l.install = function(e) {
  e.component(_l.name, _l);
};
const Nl = [], Mr = (e, t) => e ? {
  video: e,
  option: {
    muted: !1,
    // 静音
    preload: "auto",
    // 预加载
    loop: !1,
    // 循环播放
    autoplay: !1,
    // 自动播放
    hotkey: !1,
    // 开启热键
    fastForwardSpan: 2,
    // 快进跨度
    rewindSpan: 2,
    // 快退跨度
    volume: 0,
    // 默认音量
    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
    // 可选的播放速率
    quality: [],
    defaultQuality: 0
  },
  videoEvents: [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "mozaudioavailable",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "enterpictureinpicture",
    "leavepictureinpicture"
  ],
  init: function(n) {
    return this.video = e, this.option = Object.assign(this.option, n), this.videoEvents.forEach((o) => {
      this.video.addEventListener(o, () => {
        this.listenEvents.emit(o);
      });
    }), Nl.push(this.video), this;
  },
  play() {
    this.video.play();
  },
  pause() {
    this.video.pause();
  },
  seek(n) {
    typeof n != "number" && console.error("错误提示：seek参数类型不正确"), this.video.currentTime = n;
  },
  toggle() {
    this.video.paused ? this.video.play() : this.video.pause();
  },
  on(n, o) {
    this.listenEvents.on(n, o);
  },
  off(n, o) {
    let r = this.listenEvents.storage[n];
    return this.listenEvents.storage[n] = r && r.filter((l) => l !== o), this;
  },
  switchVideo(n) {
    return new Promise((o) => {
      var r = this.video.canPlayType(n.type);
      r ? (this.video.src = n.url, this.video.setAttribute("data-type", n.type), o({
        code: 1,
        data: this.video
      })) : o({
        code: 0,
        msg: "媒体类型不存在"
      });
    });
  },
  setQuality(n) {
    return new Promise((o) => {
      if (this.option.quality.length) {
        let r = this.option.quality.find((l, i) => i === n);
        this.switchVideo(r).then((l) => {
          o(l);
        });
      } else
        o({
          code: 0,
          msg: "清晰度列表不能为空"
        });
    });
  },
  destroy() {
    this.video && (Nl.splice(Nl.indexOf(this.video), 1), this.video.pause(), Object.keys(this.listenEvents.storage).forEach((n) => {
      this.videoEvents.indexOf(n) > -1 && this.video.removeEventListener(n, this.listenEvents.storage[n]);
    }), this.video.src = "", this.video.setAttribute("data-type", ""), this.video.setAttribute("src", ""), this.video = null, this.listenEvents.emit("destroy"), this.listenEvents.storage = {});
  },
  setPlaybackRate(n) {
    typeof n != "number" && console.error("错误提示：setPlaybackRate参数类型不正确"), this.video.playbackRate = parseFloat(n);
  },
  getPlaybackRate() {
    return this.video.playbackRate;
  },
  setVolume(n) {
    typeof n != "number" && console.error("错误提示：setVolume参数类型不正确"), this.video.volume = parseFloat(n);
  },
  getVolume() {
    return this.video.volume;
  },
  listenEvents: {
    // 事件监听
    storage: {},
    on(n, o) {
      typeof o == "function" && (this.storage[n] || (this.storage[n] = []), this.storage[n].push(o));
    },
    emit(n, o) {
      if (this.storage[n] && this.storage[n].length)
        for (let r = 0; r < this.storage[n].length; r++)
          this.storage[n][r](o);
    }
  }
}.init(t) : console.error("错误提示：音频对象不存在"), Vl = [], Er = (e, t) => e ? {
  audio: e,
  option: {
    muted: !1,
    // 静音
    preload: "auto",
    // 预加载
    loop: !1,
    // 循环播放
    autoplay: !1,
    // 自动播放
    hotkey: !1,
    // 开启热键
    fastForwardSpan: 2,
    // 快进跨度
    rewindSpan: 2,
    // 快退跨度
    volume: 0,
    // 默认音量
    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
    // 可选的播放速率
    quality: [],
    defaultQuality: 0
  },
  audioEvents: [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "mozaudioavailable",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "enterpictureinpicture",
    "leavepictureinpicture"
  ],
  init: function(n) {
    return this.audio = e, this.option = Object.assign(this.option, n), this.audioEvents.forEach((o) => {
      this.audio.addEventListener(o, () => {
        this.listenEvents.emit(o);
      });
    }), Vl.push(this.audio), this;
  },
  play() {
    this.audio.play();
  },
  pause() {
    this.audio.pause();
  },
  seek(n) {
    typeof n != "number" && console.error("错误提示：seek参数类型不正确"), this.audio.currentTime = n;
  },
  toggle() {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  },
  on(n, o) {
    this.listenEvents.on(n, o);
  },
  off(n, o) {
    let r = this.listenEvents.storage[n];
    return this.listenEvents.storage[n] = r && r.filter((l) => l !== o), this;
  },
  switchAudio(n) {
    return new Promise((o) => {
      var r = this.audio.canPlayType(n.type);
      r ? (this.audio.src = n.url, this.audio.setAttribute("data-type", n.type), o({
        code: 1,
        data: this.audio
      })) : o({
        code: 0,
        msg: "媒体类型不存在"
      });
    });
  },
  notice() {
  },
  setQuality(n) {
    return new Promise((o) => {
      if (this.option.quality.length) {
        let r = this.option.quality.find((l, i) => i === n);
        this.switchAudio(r).then((l) => {
          o(l);
        });
      } else
        o({
          code: 0,
          msg: "清晰度列表不能为空"
        });
    });
  },
  destroy() {
    this.audio && (Vl.splice(Vl.indexOf(this.audio), 1), this.audio.pause(), Object.keys(this.listenEvents.storage).forEach((n) => {
      this.audioEvents.indexOf(n) > -1 && this.audio.removeEventListener(n, this.listenEvents.storage[n]);
    }), this.audio.src = "", this.audio.setAttribute("data-type", ""), this.audio.setAttribute("src", ""), this.audio = null, this.listenEvents.emit("destroy"), this.listenEvents.storage = {});
  },
  setPlaybackRate(n) {
    typeof n != "number" && console.error("错误提示：setPlaybackRate参数类型不正确"), console.log(n), this.audio.playbackRate = parseFloat(n);
  },
  getPlaybackRate() {
    return this.audio.playbackRate;
  },
  setVolume(n) {
    typeof n != "number" && console.error("错误提示：setVolume参数类型不正确"), this.audio.volume = parseFloat(n);
  },
  getVolume() {
    return this.audio.volume;
  },
  listenEvents: {
    // 事件监听
    storage: {},
    on(n, o) {
      typeof o == "function" && (this.storage[n] || (this.storage[n] = []), this.storage[n].push(o));
    },
    emit(n, o) {
      if (this.storage[n] && this.storage[n].length)
        for (let r = 0; r < this.storage[n].length; r++)
          this.storage[n][r](o);
    }
  }
}.init(t) : console.error("错误提示：音频对象不存在"), zt = (e) => {
  if (e = e || 0, e === 0 || e === 1 / 0 || e.toString() === "NaN")
    return "00:00";
  const t = (r) => r < 10 ? "0" + r : "" + r, a = Math.floor(e / 3600), n = Math.floor((e - a * 3600) / 60), o = Math.floor(e - a * 3600 - n * 60);
  return (a > 0 ? [a, n, o] : [n, o]).map(t).join(":");
}, B1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAudioInstance: Er,
  getVideoInstance: Mr,
  timeConversion: zt
}, Symbol.toStringTag, { value: "Module" })), I1 = {
  name: "ZmzMusic",
  components: {
    ZmzSlider: on
  },
  props: {
    /**
     * 音乐数组
     */
    album: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 当前播放
     */
    albumCurrent: {
      type: Number,
      default: 0
    },
    /**
     * 音量
     */
    volume: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "on-pause",
    "on-paused",
    "on-play",
    "on-timeupdate",
    "on-ended",
    "on-volume",
    "on-error",
    "on-canplay",
    "on-song-next",
    "on-song-prev",
    "on-song-change",
    "on-song-prev-last",
    "on-song-next-last"
  ],
  setup(e, { emit: t }) {
    const a = b(null), n = b(0), o = b(null), r = b(e.volume), l = b("00:00"), i = b([]), s = b([]), d = b(0), c = b(0), f = b(null), m = b(!1), g = b(!1), h = b(0), y = b(e.albumCurrent), C = Le({
      muted: !1,
      // 静音
      loop: !1,
      // 循环播放
      hotkey: !1,
      // 开启热键
      autoplay: !1,
      // 自动播放
      defaultQuality: 0,
      quality: []
    }), k = Le({
      currentTime: "00:00",
      duration: "00:00",
      isPlay: !1
    }), S = z(() => Object.assign(C, { quality: e.album, defaultQuality: e.albumCurrent })), L = z(() => S.value && S.value.quality[S.value.defaultQuality]);
    Se(() => {
      n.value = a.value.clientWidth, window.addEventListener("resize", p);
    }), Ze(() => {
      window.removeEventListener("resize", p), o.value && (o.value.removeEventListener("canplay", O), o.value.removeEventListener("pause", x), o.value.removeEventListener("play", D), o.value.removeEventListener("ended", M), o.value.removeEventListener("error", R), o.value.removeEventListener("timeupdate", B));
    });
    const p = () => {
      a.value && (n.value = a.value.clientWidth);
    }, w = z(() => {
      let se = "";
      return n.value > 1140 ? se = "is-xs" : n.value < 1140 && n.value >= 870 ? se = "is-sm" : n.value < 870 && n.value >= 600 ? se = "is-md" : n.value < 600 && (se = "is-mn"), se;
    }), O = () => {
      W(r.value), k.duration = zt(o.value.duration), k.currentTime = zt(o.value.currentTime), i.value = ve(L.value.lrc);
      let se = o.value.play();
      se !== void 0 && se.then(() => {
        o.value.play();
      }).catch(() => {
      }), t("on-canplay");
    }, x = () => {
      k.isPlay = !1, t("on-pause");
    }, D = () => {
      k.isPlay = !0, t("on-play");
    }, M = () => {
      if (h.value == 0)
        S.value.loop = !1, S.value.defaultQuality == e.album.length - 1 ? (o.value.pause(), t("on-song-prev-last", S.value.defaultQuality)) : T();
      else if (h.value == 1)
        S.value.loop = !0, y.value = S.value.defaultQuality;
      else if (h.value == 2) {
        S.value.loop = !1;
        var se = parseInt(Math.random() * e.album.length);
        S.value.defaultQuality = se, y.value = se;
      }
      t("on-ended", h.value);
    }, R = () => {
      t("on-error");
    }, B = () => {
      isNaN(o.value.duration) || (k.currentTime = zt(o.value.currentTime), d.value = parseInt(o.value.currentTime / o.value.duration * 100), i.value.map((se, he) => {
        se.T === Math.floor(o.value.currentTime) && (c.value = he, m.value && (f.value.style.top = f.value.offsetParent.clientHeight / 2 - 30 * he + "px"));
      })), t("on-timeupdate", o.value.currentTime);
    }, F = (se) => {
      o.value = se.audio, o.value.addEventListener("canplay", O), o.value.addEventListener("pause", x), o.value.addEventListener("play", D), o.value.addEventListener("ended", M), o.value.addEventListener("error", R), o.value.addEventListener("timeupdate", B);
    }, E = () => {
      S.value.defaultQuality == 0 ? t("on-song-prev-last") : (S.value.defaultQuality--, t("on-song-prev", S.value.defaultQuality), t("on-song-change", S.value.defaultQuality));
    }, T = () => {
      S.value.defaultQuality == e.album.length - 1 ? t("on-song-next-last") : (S.value.defaultQuality++, t("on-song-next", S.value.defaultQuality), t("on-song-change", S.value.defaultQuality));
    }, I = (se) => {
      d.value = 0, y.value = se, S.value.defaultQuality = se;
    }, V = () => {
      h.value++, h.value > 2 ? h.value = 0 : h.value < 0 && (h.value = 1);
    }, W = (se) => {
      se == 0 ? S.value.muted = !1 : S.value.muted = !0, r.value = se, o.value.volume = se / 100;
    }, $ = () => {
      o.value.muted ? (o.value.muted = !1, S.value.muted = !0) : (o.value.muted = !0, S.value.muted = !1);
    }, X = () => {
      g.value = !g.value, g.value && (m.value = !1);
    }, ee = () => {
      m.value = !m.value, m.value && (g.value = !1);
    }, J = () => {
      o.value.paused ? o.value.play() : o.value.pause(), t("on-paused", k.isPlay);
    }, q = (se) => {
      o.value.currentTime >= 0 && !isNaN(o.value.duration) && (o.value.currentTime = se / 100 * o.value.duration, k.currentTime = zt(o.value.currentTime));
    }, ve = (se) => {
      var he = se.split("[");
      se.split("[").map((We) => {
        s.value.push(We.slice(9));
      }), s.value.shift(), he.shift();
      var ye = [];
      he.map((We) => {
        ye.push("[" + We);
      }), he = ye;
      for (var Te = [], De = 0; De < he.length; De++) {
        var ge = decodeURIComponent(he[De]), Q = /\[\d*:\d*((\.|\\:)\d*)*\]/g, ke = ge.match(Q);
        if (ke)
          for (var Ee = ge.replace(Q, ""), Y = Ee.replace(/\n/, ""), ce = 0, Ae = ke.length; ce < Ae; ce++) {
            var $e = ke[ce];
            const We = Number(String($e.match(/\[\d*/i)).slice(1)), Ue = Number(String($e.match(/:\d*/i)).slice(1));
            var He = We * 60 + Ue;
            Te.push({ T: He, V: Y });
          }
      }
      return Te;
    };
    return {
      getExample: F,
      zmzMusic: a,
      zmzMusicClass: w,
      sliderVal: q,
      volumemuted: $,
      volumemutedslider: W,
      handlePlay: J,
      lrcBox: f,
      currentTime: l,
      musicValue: d,
      issong: g,
      islrc: m,
      volumevalue: r,
      currentLoop: h,
      handleLrcblock: ee,
      lrcList: s,
      lrcObj: i,
      lrcIndex: c,
      handlePrev: E,
      handleNext: T,
      handleSonglist: X,
      currentActive: y,
      handleClick: I,
      handleLoop: V,
      options: S,
      currentSong: L,
      vaObj: k
    };
  }
}, A1 = { class: "zmz-music__console" }, P1 = { class: "zmz-music__cover" }, N1 = { class: "zmz-music__cover--img" }, V1 = ["src", "alt", "title"], F1 = { class: "zmz-music__cover--info" }, R1 = { class: "zmz-music__cover--info__songname" }, Z1 = { class: "zmz-music__cover--info__author" }, W1 = { class: "zmz-music__subject" }, $1 = { class: "zmz-music__subject--playnav" }, j1 = { class: "zmz-music__subject--playnav__prev" }, H1 = {
  key: 0,
  class: "zmz-icon--player-play"
}, Y1 = {
  key: 1,
  class: "zmz-icon--arrow-right-fill"
}, q1 = { class: "zmz-music__subject--playnav__next" }, U1 = { class: "zmz-music__subject--progress" }, G1 = { class: "zmz-music__subject--progress__timeStart" }, X1 = { class: "zmz-music__subject--progress__line" }, K1 = { class: "zmz-music__subject--progress__timeEnd" }, Q1 = { class: "zmz-music__subject--Other" }, J1 = { class: "zmz-music__subject--Other__loop" }, e0 = {
  key: 0,
  class: "zmz-icon--player-volume"
}, t0 = {
  key: 1,
  class: "zmz-icon--player-volume-mute"
}, n0 = { class: "zmz-music__subject--Other__volumeline" }, a0 = { class: "zmz-music__subject--Other__lyric" }, l0 = {
  key: 0,
  class: "zmz-music__lrc"
}, o0 = { class: "zmz-music__lrc--overflow" }, r0 = {
  ref: "lrcBox",
  class: "zmz-music__lrc--box"
}, i0 = { key: 0 }, s0 = { key: 1 }, u0 = {
  key: 1,
  class: "zmz-music__song"
}, d0 = { class: "zmz-music__song--list" }, c0 = ["onClick"];
function m0(e, t, a, n, o, r) {
  const l = oe("zmz-slider"), i = oe("zmz-audio");
  return v(), _("div", {
    class: P(["zmz-music", [n.zmzMusicClass]]),
    ref: "zmzMusic"
  }, [
    u("div", A1, [
      u("div", P1, [
        u("div", N1, [
          u("img", {
            src: n.currentSong.pic,
            alt: n.currentSong.title,
            title: n.currentSong.title
          }, null, 8, V1)
        ]),
        u("div", F1, [
          u("div", R1, Z(n.currentSong.title), 1),
          u("div", Z1, Z(n.currentSong.author), 1)
        ])
      ]),
      u("div", W1, [
        u("div", $1, [
          u("div", j1, [
            u("i", {
              class: "zmz-icon--player-left",
              onClick: t[0] || (t[0] = (...s) => n.handlePrev && n.handlePrev(...s))
            })
          ]),
          u("div", {
            class: "zmz-music__subject--playnav__play",
            onClick: t[1] || (t[1] = (...s) => n.handlePlay && n.handlePlay(...s))
          }, [
            n.vaObj.isPlay ? (v(), _("i", H1)) : (v(), _("i", Y1))
          ]),
          u("div", q1, [
            u("i", {
              class: "zmz-icon--player-right",
              onClick: t[2] || (t[2] = (...s) => n.handleNext && n.handleNext(...s))
            })
          ])
        ]),
        u("div", U1, [
          u("div", G1, Z(n.vaObj.currentTime), 1),
          u("div", X1, [
            K(l, {
              min: 0,
              modelValue: n.musicValue,
              "onUpdate:modelValue": t[3] || (t[3] = (s) => n.musicValue = s),
              onOnChange: n.sliderVal
            }, null, 8, ["modelValue", "onOnChange"])
          ]),
          u("div", K1, Z(n.vaObj.duration), 1)
        ]),
        u("div", Q1, [
          u("div", J1, [
            u("i", {
              class: P({ "zmz-icon--player-loop": n.currentLoop == 0, "zmz-icon--player-single": n.currentLoop == 1, "zmz-icon--player-random": n.currentLoop == 2 }),
              onClick: t[4] || (t[4] = (...s) => n.handleLoop && n.handleLoop(...s))
            }, null, 2)
          ]),
          u("div", {
            class: "zmz-music__subject--Other__volume",
            onClick: t[5] || (t[5] = (...s) => n.volumemuted && n.volumemuted(...s))
          }, [
            n.options.muted ? (v(), _("i", e0)) : (v(), _("i", t0))
          ]),
          u("div", n0, [
            K(l, {
              min: 0,
              modelValue: n.volumevalue,
              "onUpdate:modelValue": t[6] || (t[6] = (s) => n.volumevalue = s),
              onOnChange: n.volumemutedslider
            }, null, 8, ["modelValue", "onOnChange"])
          ]),
          u("div", a0, [
            u("i", {
              class: "zmz-icon--player-lyric",
              onClick: t[7] || (t[7] = (s) => n.handleLrcblock())
            }),
            u("i", {
              class: "zmz-icon--menu",
              onClick: t[8] || (t[8] = (s) => n.handleSonglist())
            })
          ])
        ]),
        K(i, {
          option: n.options,
          class: "zmz-music__audio",
          onOnLoad: n.getExample,
          style: { opacity: "0", width: "0", height: "0" }
        }, null, 8, ["option", "onOnLoad"])
      ])
    ]),
    n.islrc ? (v(), _("div", l0, [
      u("div", o0, [
        u("div", r0, [
          n.lrcList.length === 0 ? (v(), _("span", i0, "暂无歌词")) : A("", !0),
          n.lrcList.length >= 0 ? (v(), _("ul", s0, [
            (v(!0), _(G, null, fe(n.lrcObj, (s, d) => (v(), _("li", {
              key: d,
              class: P({ currLrc: d === n.lrcIndex })
            }, Z(s.V), 3))), 128))
          ])) : A("", !0)
        ], 512)
      ])
    ])) : A("", !0),
    n.issong ? (v(), _("div", u0, [
      t[9] || (t[9] = u("div", { class: "zmz-music__song--title" }, [
        u("span", null, "序号"),
        u("span", null, "歌曲标题"),
        u("span", null, "歌手")
      ], -1)),
      u("div", d0, [
        (v(!0), _(G, null, fe(a.album, (s, d) => (v(), _("div", {
          class: P(["zmz-music__song--item", { "is-active": n.currentActive == d }]),
          key: d,
          onClick: (c) => n.handleClick(d)
        }, [
          u("span", null, Z(d + 1) + ".", 1),
          u("span", null, Z(s.title), 1),
          u("span", null, Z(s.author), 1)
        ], 10, c0))), 128))
      ])
    ])) : A("", !0)
  ], 2);
}
const hl = /* @__PURE__ */ H(I1, [["render", m0]]);
hl.install = function(e) {
  e.component(hl.name, hl);
};
const f0 = rt({
  name: "ZmzAudio",
  props: {
    /**
     * 配置
     */
    option: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: [
    "on-load",
    "on-pause",
    "on-paused",
    "on-play",
    "on-timeupdate",
    "on-volume",
    "on-error",
    "on-autoplay",
    "on-canplay",
    "on-drag",
    "on-playbackRate",
    "on-quality"
  ],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(0), r = b(0), l = b(null), i = b(null), s = b(null), d = b(!1), c = b("horizontal"), f = b(null), m = b(2), g = Le({
      muted: !1,
      // 静音
      preload: "auto",
      // 预加载
      loop: !1,
      // 循环播放
      autoplay: !1,
      // 自动播放
      hotkey: !1,
      // 开启热键
      fastForwardSpan: 2,
      // 快进跨度
      rewindSpan: 2,
      // 快退跨度
      volume: 0,
      // 默认音量
      playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3],
      // 可选的播放速率
      defaultPlaybackSpeed: 1,
      defaultQuality: 0
    }), h = Le({
      currentTime: "00:00",
      duration: "00:00",
      currentTimeNum: 0,
      isPlay: !1,
      volume: 0
    }), y = z(() => Object.assign(g, e.option)), C = z(() => y.value.playbackSpeed), k = z(() => y.value.quality), S = z(() => {
      let T = {};
      if (y.value.quality && y.value.quality.length && f.value && f.value.audio) {
        let I = y.value.quality[y.value.defaultQuality].url, V = y.value.quality[y.value.defaultQuality].type;
        f.value.audio.setAttribute("src", I), f.value.audio.setAttribute("data-type", V), T.src = I;
      }
      return T;
    });
    Se(() => {
      f.value = Er(a.value, y.value), f.value.on("canplay", function() {
        h.duration = zt(f.value.audio.duration), o.value = f.value.audio.currentTime / f.value.audio.duration * 100 + "%", r.value = f.value.audio.volume * 100 + "%", h.volume = f.value.audio.volume * 100, t("on-canplay", f.value);
      }), f.value.on("pause", function(T) {
        h.isPlay = !1, t("on-pause", T);
      }), f.value.on("play", function(T) {
        h.isPlay = !0, t("on-play", T);
      }), f.value.on("timeupdate", function() {
        h.currentTime = zt(f.value.audio.currentTime), h.currentTimeNum = f.value.audio.currentTime, o.value = f.value.audio.currentTime / f.value.audio.duration * 100 + "%", t("on-timeupdate", f.value.audio.currentTime);
      }), f.value.on("volumechange", () => {
        f.value.audio.muted ? r.value = "0%" : r.value = f.value.audio.volume * 100 + "%", h.volume = f.value.audio.volume * 100, t("on-volume", f.value.audio.volume);
      }), f.value.on("error", function(T) {
        t("on-error", T);
      }), t("on-load", f.value);
    });
    const L = z(() => y.value.autoplay ? (t("on-autoplay", !0), !0) : (t("on-autoplay", !1), !1)), p = () => {
      f.value.toggle(), t("on-paused", h.isPlay);
    }, w = (T, I) => {
      c.value = I, T.stopPropagation && T.stopPropagation(), T.preventDefault && T.preventDefault(), O(), document.addEventListener("mousemove", x), document.addEventListener("mouseup", D), document.addEventListener("mouseleave", D);
    }, O = () => {
      d.value = !0, t("on-drag", 1, c.value);
    }, x = (T) => {
      if (d.value) {
        if (M(T))
          if (c.value == "horizontal") {
            let I = i.value.getBoundingClientRect(), W = (T.clientX - I.left) / i.value.offsetWidth;
            o.value = W * 100 + "%", f.value.audio.currentTime = f.value.audio.duration * W;
          } else {
            let I = s.value.getBoundingClientRect(), W = 1 - (T.clientY - I.top) / s.value.offsetHeight;
            r.value = W * 100 + "%", f.value.audio.volume = W.toFixed(1);
          }
        t("on-drag", 2, c.value), T.stopPropagation && T.stopPropagation(), T.preventDefault && T.preventDefault();
      }
    }, D = () => {
      d.value = !1, t("on-drag", 3, c.value);
    }, M = (T) => {
      if (c.value == "horizontal") {
        var I = i.value.getBoundingClientRect();
        let W = I.left, $ = W + i.value.offsetWidth;
        if (T.clientX < W || T.clientX > $) return !1;
      } else {
        var V = s.value.getBoundingClientRect();
        let W = V.top, $ = W + s.value.offsetHeight;
        if (T.clientY < W || T.clientY > $) return !1;
      }
      return !0;
    }, R = (T, I) => {
      if (M(T))
        if (I == "horizontal") {
          let V = i.value.getBoundingClientRect(), $ = (T.clientX - V.left) / i.value.offsetWidth;
          o.value = $ * 100 + "%", f.value.audio.currentTime = f.value.audio.duration * $;
        } else {
          let V = s.value.getBoundingClientRect(), $ = 1 - (T.clientY - V.top) / s.value.offsetHeight;
          r.value = $ * 100 + "%", f.value.audio.volume = $.toFixed(1);
        }
    }, B = (T) => {
      g.defaultPlaybackSpeed = T, f.value.audio.playbackRate = Number(T), t("on-playbackRate", T);
    }, F = (T, I) => {
      g.defaultQuality = I, t("on-quality", T.name), f.value.switchAudio({
        url: T.url,
        type: T.type
      });
    }, E = (T) => {
      if (!y.value.hotkey) return;
      let I = window.event.keyCode;
      if (I == 32 && (p(), T.stopPropagation && T.stopPropagation(), T.preventDefault && T.preventDefault()), I == 38) {
        if (f.value.audio.volume == 1) return;
        f.value.audio.volume = (parseFloat(f.value.audio.volume) + 0.1).toFixed(1);
      } else if (I == 40) {
        if (f.value.audio.volume == 0) return;
        f.value.audio.volume = (parseFloat(f.value.audio.volume) - 0.1).toFixed(1);
      } else I == 37 ? Object.prototype.hasOwnProperty.call(y.value, "fastForwardSpan") ? f.value.audio.currentTime = f.value.audio.currentTime - y.value.fastForwardSpan : f.value.audio.currentTime = f.value.audio.currentTime - m.value : I == 39 && (Object.prototype.hasOwnProperty.call(y.value, "rewindSpan") ? f.value.audio.currentTime = f.value.audio.currentTime + y.value.rewindSpan : f.value.audio.currentTime = f.value.audio.currentTime + m.value);
    };
    return Ze(() => {
      f.value && (f.value.destroy(), f.value = null), document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", D), document.removeEventListener("mouseleave", D), document.removeEventListener("keydown", E);
    }), de(() => {
      document.addEventListener("keydown", E);
    }), {
      zmzAudioInner: a,
      paused: p,
      vaObj: h,
      onDotDown: w,
      zmzAudioProgressDot: l,
      progressline: i,
      barPlay: R,
      progressvoice: s,
      mode: c,
      progressbarWidth: o,
      progressbarHeight: r,
      zmzAudio: n,
      playbackRateList: C,
      playbackRateClick: B,
      definitionList: k,
      definitionClick: F,
      options: y,
      muted: L,
      audioObj: S
    };
  }
}), v0 = {
  class: "zmz-audio",
  ref: "zmzAudio"
}, z0 = { class: "zmz-audio__container" }, _0 = ["preload", "src", "muted", "loop"], h0 = { class: "zmz-audio__controls" }, g0 = { class: "zmz-audio__controls__left" }, y0 = {
  key: 0,
  class: "zmz-audio__play__icon zmz-icon--player-play"
}, p0 = {
  key: 1,
  class: "zmz-audio__play__icon zmz-icon--arrow-right-fill"
}, b0 = { class: "zmz-audio__unite zmz-audio__time" }, k0 = { class: "zmz-audio__time__start" }, C0 = { class: "zmz-audio__time__end" }, w0 = { class: "zmz-audio__controls__center" }, S0 = { class: "zmz-audio__timeaxis" }, x0 = { class: "zmz-audio__controls__right" }, T0 = { class: "zmz-audio__unite zmz-audio__definition" }, O0 = { class: "zmz-audio__definition__wrap zmz-audio__unite__hover" }, L0 = { class: "zmz-audio__definitionBox" }, D0 = ["onClick"], M0 = { class: "zmz-audio__unite zmz-audio__double" }, E0 = { class: "zmz-audio__double__wrap zmz-audio__unite__hover" }, B0 = { class: "zmz-audio__doubleBox" }, I0 = ["onClick"], A0 = { class: "zmz-audio__unite zmz-audio__voice" }, P0 = { class: "zmz-audio__voice__wrap zmz-audio__unite__hover" }, N0 = { class: "zmz-audio__voice__wrap__fixed" }, V0 = { class: "zmz-audio__voiceNum" };
function F0(e, t, a, n, o, r) {
  return v(), _("div", v0, [
    u("div", z0, [
      u("audio", {
        ref: "zmzAudioInner",
        preload: e.options.preload,
        class: "zmz-video-current",
        src: e.audioObj && e.audioObj.url,
        muted: e.muted,
        loop: e.options.loop
      }, " Your browser does not support the audio element. ", 8, _0)
    ]),
    u("div", h0, [
      u("div", g0, [
        u("div", {
          class: "zmz-audio__unite zmz-audio__play",
          onClick: t[0] || (t[0] = _e((...l) => e.paused && e.paused(...l), ["stop"]))
        }, [
          e.vaObj.isPlay ? (v(), _("i", y0)) : (v(), _("i", p0))
        ]),
        u("div", b0, [
          u("div", k0, Z(e.vaObj.currentTime), 1),
          t[5] || (t[5] = u("div", { class: "zmz-audio__time__split" }, "/", -1)),
          u("div", C0, Z(e.vaObj.duration), 1)
        ])
      ]),
      u("div", w0, [
        u("div", S0, [
          u("div", {
            class: "zmz-audio__progress",
            ref: "progressline",
            onClick: t[2] || (t[2] = _e((l) => e.barPlay(l, "horizontal"), ["stop"]))
          }, [
            t[6] || (t[6] = u("div", { class: "zmz-audio__progress__loaded" }, null, -1)),
            u("div", {
              class: "zmz-audio__progress__played",
              style: j({ width: e.progressbarWidth })
            }, [
              u("div", {
                class: "zmz-audio__progress__dot",
                ref: "zmzAudioProgressDot",
                onMousedown: t[1] || (t[1] = (l) => e.onDotDown(l, "horizontal"))
              }, null, 544)
            ], 4),
            t[7] || (t[7] = u("div", { class: "zmz-audio__progress__bar" }, null, -1))
          ], 512)
        ])
      ]),
      u("div", x0, [
        u("div", T0, [
          t[8] || (t[8] = u("span", null, "音质", -1)),
          u("div", O0, [
            u("div", L0, [
              (v(!0), _(G, null, fe(e.definitionList, (l, i) => (v(), _("div", {
                class: P(["zmz-audio__definitionBox__li", { "is-active": i === e.options.defaultQuality, "zmz-icon--check": i === e.options.defaultQuality }]),
                key: i,
                onClick: (s) => e.definitionClick(l, i)
              }, [
                u("span", null, Z(l.name), 1)
              ], 10, D0))), 128))
            ])
          ])
        ]),
        u("div", M0, [
          t[9] || (t[9] = u("span", null, "倍速", -1)),
          u("div", E0, [
            u("div", B0, [
              (v(!0), _(G, null, fe(e.playbackRateList, (l, i) => (v(), _("div", {
                class: P(["zmz-audio__doubleBox__li", { "is-active": l == e.options.defaultPlaybackSpeed, "zmz-icon--check": l == e.options.defaultPlaybackSpeed }]),
                key: i,
                onClick: (s) => e.playbackRateClick(l)
              }, [
                u("span", null, Z(l) + "x", 1)
              ], 10, I0))), 128))
            ])
          ])
        ]),
        u("div", A0, [
          t[12] || (t[12] = u("span", null, "声音", -1)),
          u("div", P0, [
            u("div", N0, [
              u("div", V0, Z(e.vaObj.volume) + "%", 1),
              u("div", {
                class: "zmz-audio__voiceBox",
                ref: "progressvoice",
                onClick: t[4] || (t[4] = _e((l) => e.barPlay(l, "vertical"), ["stop"]))
              }, [
                t[10] || (t[10] = u("div", { class: "zmz-audio__voiceBox__loaded" }, null, -1)),
                u("div", {
                  class: "zmz-audio__voiceBox__played",
                  style: j({ height: e.progressbarHeight })
                }, [
                  u("div", {
                    class: "zmz-audio__voiceBox__dot",
                    ref: "zmzAudioProgressDot",
                    onMousedown: t[3] || (t[3] = (l) => e.onDotDown(l, "vertical"))
                  }, null, 544)
                ], 4),
                t[11] || (t[11] = u("div", { class: "zmz-audio__voiceBox__bar" }, null, -1))
              ], 512)
            ])
          ])
        ])
      ])
    ])
  ], 512);
}
const gl = /* @__PURE__ */ H(f0, [["render", F0]]);
gl.install = function(e) {
  e.component(gl.name, gl);
};
const R0 = rt({
  name: "ZmzVideo",
  props: {
    video: {
      type: Object,
      default: () => ({})
    },
    option: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    "on-load",
    "on-pause",
    "on-paused",
    "on-play",
    "on-timeupdate",
    "on-volume",
    "on-error",
    "on-contextmenu",
    "on-autoplay",
    "on-notice",
    "on-canplay",
    "on-webfullscreen",
    "on-fullscreen",
    "on-drag",
    "on-picture",
    "on-playbackRate",
    "on-quality"
  ],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(0), r = b(0), l = b(null), i = b(!1), s = b({}), d = b(null), c = b(null), f = b(null), m = b(!1), g = b("horizontal"), h = b(null), y = b(!1), C = b(""), k = b(null), S = Le({
      contextmenu: []
    }), L = b(2), p = Le({
      muted: !1,
      // 静音
      preload: "auto",
      // 预加载
      loop: !1,
      // 循环播放
      autoplay: !1,
      // 自动播放
      screenshot: !1,
      // 屏幕截图
      hotkey: !1,
      // 开启热键
      fastForwardSpan: 2,
      // 快进跨度
      rewindSpan: 2,
      // 快退跨度
      volume: 0.5,
      // 默认音量
      playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
      // 可选的播放速率
      logo: "",
      // 自定义左上角logo
      contextmenu: [],
      // 右键菜单
      quality: [],
      defaultQuality: 0,
      // 默认质量
      defaultPlaybackSpeed: 1
      // 默认倍速
    }), w = Le({
      currentTime: "00:00",
      duration: "00:00",
      currentTimeNum: 0,
      isPlay: !1,
      volume: 0
    }), O = b(!1), x = z(() => Object.assign(p, e.option)), D = z(() => S.contextmenu.concat(x.value.contextmenu)), M = z(() => x.value.playbackSpeed), R = z(() => e.video.quality), B = () => {
      var Q = window.canvas = document.createElement("canvas");
      Q.width = n.value.clientWidth, Q.height = n.value.clientHeight, Q.getContext("2d").drawImage(n.value, 0, 0, Q.width, Q.height);
      for (var ke = Q.toDataURL("image/png"), Ee = ke.split(","), Y = Ee[0].match(/:(.*?);/)[1], ce = atob(Ee[1]), Ae = ce.length, $e = new Uint8Array(Ae); Ae--; )
        $e[Ae] = ce.charCodeAt(Ae);
      var He = new Blob([$e], {
        type: Y
      }), We = window.URL.createObjectURL(He), Ue = document.createElement("a");
      Ue.style.display = "none", Ue.href = We, Ue.download = "截图", document.body.appendChild(Ue), Ue.click(), setTimeout(function() {
        document.body.removeChild(Ue), window.URL.revokeObjectURL(We);
      }, 1e3);
    }, F = (Q, ke = 2e3) => {
      y.value = !0, C.value = Q, k.value && clearTimeout(k.value), ke > 0 && (k.value = setTimeout(() => {
        y.value = !1;
      }, ke)), t("on-notice", y.value);
    }, E = z(() => {
      let Q = {};
      if (x.value.quality && x.value.quality.length && h.value && h.value.video) {
        let Ee = x.value.quality[x.value.defaultQuality].url, Y = x.value.quality[x.value.defaultQuality].type, ce = x.value.quality[x.value.defaultQuality].cover;
        var ke = h.value && h.value.video.canPlayType(Y);
        if (ke)
          return h.value.video.setAttribute("src", Ee), h.value.video.setAttribute("data-type", Y), Q.cover = ce || x.value.cover, Q.src = Ee, Q;
        F("警告:媒体类型不支持或不存在");
      }
      return Q;
    });
    Se(() => {
      h.value = Mr(n.value, x.value), h.value.on("canplay", function() {
        w.duration = zt(h.value.video.duration), o.value = h.value.video.currentTime / h.value.video.duration * 100 + "%", r.value = h.value.video.volume * 100 + "%", w.volume = h.value.video.volume * 100, t("on-canplay", h.value);
      }), h.value.on("pause", function(Q) {
        w.isPlay = !1, t("on-pause", Q);
      }), h.value.on("play", function(Q) {
        w.isPlay = !0, t("on-play", Q);
      }), h.value.on("timeupdate", function() {
        w.currentTime = zt(h.value.video.currentTime), w.currentTimeNum = h.value.video.currentTime, o.value = h.value.video.currentTime / h.value.video.duration * 100 + "%", t("on-timeupdate", h.value.video.currentTime);
      }), h.value.on("volumechange", () => {
        w.volume = h.value.video.volume * 100, h.value.video.muted ? r.value = "0%" : r.value = h.value.video.volume * 100 + "%", t("on-volume", h.value.video.volume);
      }), a.value.addEventListener("contextmenu", se), h.value.on("error", function(Q) {
        t("on-error", Q);
      }), h.value.on("enterpictureinpicture", function() {
        h.value.video.paused ? (h.value.pause(), w.isPlay = !1) : (h.value.play(), w.isPlay = !0), t("on-picture", !0), F("开启画中画模式");
      }), h.value.on("leavepictureinpicture", function() {
        h.value.video.paused ? (h.value.pause(), w.isPlay = !1) : (h.value.play(), w.isPlay = !0), t("on-picture", !1), F("关闭画中画模式");
      }), t("on-load", h.value);
    });
    const T = z(() => x.value.autoplay ? (t("on-autoplay", !0), !0) : (t("on-autoplay", !1), !1)), I = () => {
      i.value = !1, t("on-contextmenu", !1);
    }, V = () => {
      h.value.toggle(), t("on-paused", w.isPlay);
    }, W = () => {
      s.value["is-fullscreen"] ? (s.value["is-fullscreen"] = !1, document.querySelector("body").style.overflow = "", document.querySelector("html").style.overflow = "") : (s.value["is-fullscreen"] = !0, document.querySelector("body").style.overflow = "hidden", document.querySelector("html").style.overflow = "hidden", document.fullscreenElement && (X(), s.value["is-fullscreen"] = !0)), t("on-webfullscreen", s.value["is-fullscreen"]);
    }, $ = () => {
      X();
    }, X = () => {
      s.value["is-fullscreen"] = !1;
      let Q = a.value;
      document.fullscreenElement ? (document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), t("on-fullscreen", !1)) : (Q.requestFullscreen ? Q.requestFullscreen() : Q.webkitRequestFullScreen ? Q.webkitRequestFullScreen() : Q.mozRequestFullScreen ? Q.mozRequestFullScreen() : Q.msRequestFullscreen && Q.msRequestFullscreen(), t("on-fullscreen", !0));
    }, ee = (Q, ke) => {
      g.value = ke, Q.stopPropagation && Q.stopPropagation(), Q.preventDefault && Q.preventDefault(), J(), document.addEventListener("mousemove", q), document.addEventListener("mouseup", ve), document.addEventListener("mouseleave", ve);
    }, J = () => {
      m.value = !0, t("on-drag", 1, g.value);
    }, q = (Q) => {
      if (m.value) {
        if (he(Q))
          if (g.value == "horizontal") {
            let ke = c.value.getBoundingClientRect(), Y = (Q.clientX - ke.left) / c.value.offsetWidth;
            o.value = Y * 100 + "%", h.value.video.currentTime = h.value.video.duration * Y;
          } else {
            let ke = f.value.getBoundingClientRect(), Y = 1 - (Q.clientY - ke.top) / f.value.offsetHeight;
            r.value = Y * 100 + "%", h.value.video.volume = Y.toFixed(1);
          }
        t("on-drag", 2, g.value), Q.stopPropagation && Q.stopPropagation(), Q.preventDefault && Q.preventDefault();
      }
    }, ve = () => {
      m.value = !1, t("on-drag", 3, g.value);
    }, se = (Q) => {
      Q.stopPropagation && Q.stopPropagation(), Q.preventDefault && Q.preventDefault(), i.value = !0, l.value.style.left = Q.offsetX + "px", l.value.style.top = Q.offsetY + "px", t("on-contextmenu", !0);
    }, he = (Q) => {
      if (g.value == "horizontal") {
        var ke = c.value.getBoundingClientRect();
        let Y = ke.left, ce = Y + c.value.offsetWidth;
        if (Q.clientX < Y || Q.clientX > ce) return !1;
      } else {
        var Ee = f.value.getBoundingClientRect();
        let Y = Ee.top, ce = Y + f.value.offsetHeight;
        if (Q.clientY < Y || Q.clientY > ce) return !1;
      }
      return !0;
    }, ye = () => {
      document.pictureInPictureElement ? document.exitPictureInPicture().catch((Q) => {
        console.log(Q, "Video failed to leave Picture-in-Picture mode.");
      }) : h.value.video.requestPictureInPicture().catch((Q) => {
        console.log(Q, "Video failed to enter Picture-in-Picture mode.");
      });
    }, Te = (Q, ke) => {
      if (he(Q))
        if (ke == "horizontal") {
          let Ee = c.value.getBoundingClientRect(), ce = (Q.clientX - Ee.left) / c.value.offsetWidth;
          o.value = ce * 100 + "%", h.value.video.currentTime = h.value.video.duration * ce, O.value = !0;
        } else {
          let Ee = f.value.getBoundingClientRect(), ce = 1 - (Q.clientY - Ee.top) / f.value.offsetHeight;
          r.value = ce * 100 + "%", h.value.video.volume = ce.toFixed(1);
        }
    }, De = (Q) => {
      p.defaultPlaybackSpeed = Q, F("正在切换" + Q + "倍播放速度"), h.value.video.playbackRate = Number(Q), t("on-playbackRate", Q);
    }, ge = (Q, ke) => {
      p.defaultQuality = ke, t("on-quality", Q.name), h.value.switchVideo({
        url: Q.url,
        type: Q.type
      }).then((Ee) => {
        Ee ? (y.value = !1, F("正在切换" + Q.name + "模式")) : F("加载失败，媒体类型不支持");
      });
    };
    return Ze(() => {
      h.value && (h.value.destroy(), h.value = null), document.removeEventListener("mousemove", q), document.removeEventListener("mouseup", ve), document.removeEventListener("mouseleave", ve), document.removeEventListener("contextmenu", se);
    }), de(() => {
      document.onkeydown = function(Q) {
        if (!x.value.hotkey) return;
        let ke = window.event.keyCode;
        if (ke == 32 && (V(), Q.stopPropagation && Q.stopPropagation(), Q.preventDefault && Q.preventDefault()), ke == 38) {
          if (h.value.video.volume == 1) return;
          h.value.video.volume = (parseFloat(h.value.video.volume) + 0.1).toFixed(1), F("音量" + h.value.video.volume * 100 + "%");
        } else if (ke == 40) {
          if (h.value.video.volume == 0) return;
          h.value.video.volume = (parseFloat(h.value.video.volume) - 0.1).toFixed(1), F("音量" + h.value.video.volume * 100 + "%");
        } else ke == 37 ? Object.prototype.hasOwnProperty.call(x.value, "fastForwardSpan") ? (h.value.video.currentTime = h.value.video.currentTime - x.value.fastForwardSpan, F("快退" + x.value.fastForwardSpan + "秒")) : (h.value.video.currentTime = h.value.video.currentTime - L.value, F("快退" + L.value + "秒")) : ke == 39 && (Object.prototype.hasOwnProperty.call(x.value, "rewindSpan") ? (h.value.video.currentTime = h.value.video.currentTime + x.value.rewindSpan, F("快进" + x.value.rewindSpan + "秒")) : (h.value.video.currentTime = h.value.video.currentTime + L.value, F("快进" + L.value + "秒")));
      };
    }), ue(
      () => w.currentTimeNum,
      (Q, ke) => {
        O.value && (Q - ke > 0 ? F("快进" + parseInt(Q - ke) + "秒") : F("快退" + Math.abs(parseInt(Q - ke)) + "秒"), O.value = !1);
      },
      { lazy: !0 }
    ), {
      zmzVideoInner: n,
      fullscreen: $,
      webfullscreen: W,
      fullscreenClass: s,
      paused: V,
      vaObj: w,
      onDotDown: ee,
      zmzVideoProgressDot: d,
      progressline: c,
      picture: ye,
      barPlay: Te,
      progressvoice: f,
      mode: g,
      progressbarWidth: o,
      progressbarHeight: r,
      zmzVideo: a,
      rightmenu: l,
      isRightmenu: i,
      playbackRateList: M,
      playbackRateClick: De,
      definitionList: R,
      definitionClick: ge,
      options: x,
      contextmenuList: D,
      maskClick: I,
      screenshotClick: B,
      muted: T,
      notice: C,
      isNotice: y,
      audioObj: E
    };
  }
}), Z0 = { class: "zmz-video__container" }, W0 = ["preload", "autoplay", "poster", "src", "muted", "loop"], $0 = { class: "zmz-video__controls" }, j0 = { class: "zmz-video__controls__left" }, H0 = {
  key: 0,
  class: "zmz-icon--player-play"
}, Y0 = {
  key: 1,
  class: "zmz-icon--arrow-right-fill"
}, q0 = { class: "zmz-video__unite zmz-video__time" }, U0 = { class: "zmz-video__controls__right" }, G0 = { class: "zmz-video__unite zmz-video__definition" }, X0 = { class: "zmz-video__definition__wrap zmz-video__unite__hover" }, K0 = { class: "zmz-video__definitionBox" }, Q0 = ["onClick"], J0 = { class: "zmz-video__unite zmz-video__double" }, ek = { class: "zmz-video__double__wrap zmz-video__unite__hover" }, tk = { class: "zmz-video__doubleBox" }, nk = ["onClick"], ak = { class: "zmz-video__unite zmz-video__voice" }, lk = { class: "zmz-video__voice__wrap zmz-video__unite__hover" }, ok = { class: "zmz-video__voice__wrap__fixed" }, rk = { class: "zmz-video__voiceNum" }, ik = { class: "zmz-video__timeaxis" }, sk = {
  key: 0,
  class: "zmz-video__logo"
}, uk = ["src"], dk = {
  class: "zmz-video__rightmenu",
  ref: "rightmenu"
}, ck = ["onClick"], mk = ["href"];
function fk(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-video", [e.fullscreenClass]]),
    ref: "zmzVideo",
    onClick: t[10] || (t[10] = (...l) => e.paused && e.paused(...l))
  }, [
    u("div", Z0, [
      u("video", {
        ref: "zmzVideoInner",
        "x-webkit-airplay": "allow",
        playsinline: "",
        crossorigin: "anonymous",
        preload: e.options.preload,
        autoplay: e.options.autoplay,
        "x5-video-player-fullscreen": "true",
        "webkit-playsinline": "true",
        "x5-video-player-type": "h5",
        "x5-video-orientation": "portraint",
        class: "zmz-video-current",
        poster: e.audioObj && e.audioObj.cover,
        src: e.audioObj && e.audioObj.url,
        muted: e.muted,
        loop: e.options.loop
      }, null, 8, W0)
    ]),
    u("div", $0, [
      u("div", j0, [
        u("div", {
          class: "zmz-video__unite zmz-video__play",
          onClick: t[0] || (t[0] = _e((...l) => e.paused && e.paused(...l), ["stop"]))
        }, [
          e.vaObj.isPlay ? (v(), _("i", H0)) : (v(), _("i", Y0))
        ]),
        u("div", q0, [
          ne(Z(e.vaObj.currentTime) + " ", 1),
          t[11] || (t[11] = u("em", null, "/", -1)),
          ne(" " + Z(e.vaObj.duration), 1)
        ])
      ]),
      u("div", U0, [
        u("div", G0, [
          t[12] || (t[12] = u("span", null, "清晰度", -1)),
          u("div", X0, [
            u("div", K0, [
              (v(!0), _(G, null, fe(e.definitionList, (l, i) => (v(), _("div", {
                class: P(["zmz-video__definitionBox__li", { "is-active": i === e.options.defaultQuality, "zmz-icon--check": i === e.options.defaultQuality }]),
                key: i,
                onClick: (s) => e.definitionClick(l, i)
              }, [
                u("span", null, Z(l.name), 1)
              ], 10, Q0))), 128))
            ])
          ])
        ]),
        u("div", J0, [
          t[13] || (t[13] = u("span", null, "倍速", -1)),
          u("div", ek, [
            u("div", tk, [
              (v(!0), _(G, null, fe(e.playbackRateList, (l, i) => (v(), _("div", {
                class: P(["zmz-video__doubleBox__li", { "is-active": l == e.options.defaultPlaybackSpeed, "zmz-icon--check": l == e.options.defaultPlaybackSpeed }]),
                key: i,
                onClick: (s) => e.playbackRateClick(l)
              }, [
                u("span", null, Z(l) + "x", 1)
              ], 10, nk))), 128))
            ])
          ])
        ]),
        u("div", ak, [
          t[16] || (t[16] = u("span", null, "声音", -1)),
          u("div", lk, [
            u("div", ok, [
              u("div", rk, Z(e.vaObj.volume) + "%", 1),
              u("div", {
                class: "zmz-video__voiceBox",
                ref: "progressvoice",
                onClick: t[2] || (t[2] = _e((l) => e.barPlay(l, "vertical"), ["stop"]))
              }, [
                t[14] || (t[14] = u("div", { class: "zmz-video__voiceBox__loaded" }, null, -1)),
                u("div", {
                  class: "zmz-video__voiceBox__played",
                  style: j({ height: e.progressbarHeight })
                }, [
                  u("div", {
                    class: "zmz-video__voiceBox__dot",
                    ref: "zmzVideoProgressDot",
                    onMousedown: t[1] || (t[1] = (l) => e.onDotDown(l, "vertical"))
                  }, null, 544)
                ], 4),
                t[15] || (t[15] = u("div", { class: "zmz-video__voiceBox__bar" }, null, -1))
              ], 512)
            ])
          ])
        ]),
        e.options.screenshot ? (v(), _("div", {
          key: 0,
          class: "zmz-video__unite zmz-video__picture",
          onClick: t[3] || (t[3] = _e((l) => e.screenshotClick(), ["stop"]))
        }, " 截图")) : A("", !0),
        u("div", {
          class: "zmz-video__unite zmz-video__picture",
          onClick: t[4] || (t[4] = _e((l) => e.picture(), ["stop"]))
        }, "画中画"),
        u("div", {
          class: "zmz-video__unite zmz-video__webFullscreen",
          onClick: t[5] || (t[5] = _e((l) => e.webfullscreen("webfullscreen"), ["stop"]))
        }, "网页全屏 "),
        u("div", {
          class: "zmz-video__unite zmz-video__fullscreen",
          onClick: t[6] || (t[6] = _e((l) => e.fullscreen("fullscreen"), ["stop"]))
        }, "全屏")
      ])
    ]),
    u("div", ik, [
      (v(), _("div", {
        key: 0,
        class: "zmz-video__progress",
        ref: "progressline",
        onClick: t[8] || (t[8] = _e((l) => e.barPlay(l, "horizontal"), ["stop"]))
      }, [
        t[17] || (t[17] = u("div", { class: "zmz-video__progress__loaded" }, null, -1)),
        u("div", {
          class: "zmz-video__progress__played",
          style: j({ width: e.progressbarWidth })
        }, [
          u("div", {
            class: "zmz-video__progress__dot",
            ref: "zmzVideoProgressDot",
            onMousedown: t[7] || (t[7] = (l) => e.onDotDown(l, "horizontal"))
          }, null, 544)
        ], 4),
        t[18] || (t[18] = u("div", { class: "zmz-video__progress__bar" }, null, -1))
      ], 512))
    ]),
    K(Ve, { name: "zmz-video__notice__slide--fade" }, {
      default: le(() => [
        re(u("div", { class: "zmz-video__notice" }, Z(e.notice), 513), [
          [Be, e.isNotice]
        ])
      ]),
      _: 1
    }),
    e.options.logo ? (v(), _("div", sk, [
      u("img", {
        class: "zmz-video__logo__img",
        src: e.options.logo
      }, null, 8, uk)
    ])) : A("", !0),
    re(u("div", dk, [
      e.contextmenuList.length ? (v(!0), _(G, { key: 0 }, fe(e.contextmenuList, (l, i) => (v(), _("div", {
        class: "zmz-video__rightmenu__li",
        key: i
      }, [
        l.click ? (v(), _("span", {
          key: 0,
          onClick: (s) => l.click(l)
        }, Z(l.title), 9, ck)) : (v(), _("a", {
          key: 1,
          href: l.link,
          target: "_blank"
        }, Z(l.title), 9, mk))
      ]))), 128)) : A("", !0),
      t[19] || (t[19] = u("div", { class: "zmz-video__rightmenu__li" }, [
        u("a", {
          href: "https://www.zhuimengzhu.com",
          target: "_blank"
        }, "官网信息")
      ], -1)),
      t[20] || (t[20] = u("div", { class: "zmz-video__rightmenu__li" }, [
        u("span", null, " 版本v0.0.1")
      ], -1))
    ], 512), [
      [Be, e.isRightmenu]
    ]),
    re(u("div", {
      class: "zmz-video__mask",
      onClick: t[9] || (t[9] = _e((...l) => e.maskClick && e.maskClick(...l), ["stop"]))
    }, null, 512), [
      [Be, e.isRightmenu]
    ])
  ], 2);
}
const yl = /* @__PURE__ */ H(R0, [["render", fk]]);
yl.install = function(e) {
  e.component(yl.name, yl);
};
const vk = {
  name: "ZmzBook",
  props: {
    /**
     * 宽度
     */
    width: {
      type: Number,
      default: 200
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 300
    },
    /**
     * 数据数据
     */
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    pageNumberStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    pageNumberClass: {
      type: Array,
      default() {
        return [];
      }
    },
    pageTitleStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    pageTitleClass: {
      type: Array,
      default() {
        return [];
      }
    },
    pageContentStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    pageContentClass: {
      type: Array,
      default() {
        return [];
      }
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    emptyIcon: {
      type: String,
      default: ""
    },
    nomoreText: {
      type: String,
      default: "最后一页"
    },
    nomoreIcon: {
      type: String,
      default: ""
    },
    frontCover: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * 只读
     */
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "on-enclosure-click", "on-first-page", "on-last-page", "on-change-page"],
  setup(e, { emit: t }) {
    const a = b(e.data), n = b(a.value.length), o = b(0), r = z({
      get() {
        return Number(e.modelValue);
      },
      set(C) {
        t("update:modelValue", Number(C));
      }
    }), l = z(() => {
      let C = {};
      return e.width && (C.width = Me(parseFloat(e.width) * 2)), e.height && (C.height = Me(parseFloat(e.height))), C;
    }), i = z(() => {
      let C = [];
      return e.disabled && C.push("zmz-book--disabled"), e.readonly && C.push("zmz-book--readonly"), C;
    }), s = z(() => {
      let C = {};
      return e.width && (C.width = Me(e.width)), e.height && (C.height = Me(e.height)), C;
    });
    de(() => {
      let C = a.value.length;
      a.value.map((k, S) => {
        k.behindImgUrl = k.behind?.imgUrl, k.behindEnclosure = k.behind?.enclosure, k.behindContent = k.behind?.content, k.behindTitle = k.behind?.title, k.behindStyle = k.behind?.style, k.frontImgUrl = k.front?.imgUrl, k.frontEnclosure = k.front?.enclosure, k.frontContent = k.front?.content, k.frontTitle = k.front?.title, k.frontStyle = k.front?.style, k.className = "zmz-book__item--close", S == r.value - 1 ? (k.isFront = !0, k.zIndex = C--, k.className = "zmz-book__item--open") : S > r.value - 1 ? k.zIndex = C-- : S < r.value - 1 && (k.isFront = !0, k.zIndex = 1, k.className = "zmz-book__item--open"), e.frontCover && S > 0 ? (k.frontPageNumber = S * 2 - 1, k.behindPageNumber = S * 2) : !e.frontCover && S >= 0 && (k.frontPageNumber = (S + 1) * 2 - 1, k.behindPageNumber = (S + 1) * 2);
        let L = (Math.min(Math.abs(r.value - S) * 25, 100) + 50) / 100;
        return k.transitionDuration = `${L}s`, k;
      });
    });
    const d = z(() => a.value), c = (C, k) => {
      e.disabled || e.readonly || (k.isFront ? f("prev", 180, k) : f("next", 1, k), C < r.value && (k.zIndex = n.value += 1), C > r.value && (k.zIndex = n.value -= 1), C == r.value && (k.zIndex = n.value += 1), k.isFront = !k.isFront, t("on-change-page", C));
    }, f = (C, k, S) => {
      const L = a.value.length - 1;
      C == "prev" && (r.value = r.value - 1), C == "next" && (r.value = r.value + 1);
      let p = setInterval(() => {
        C == "next" ? k == 180 ? (clearInterval(p), k = 1, p = null) : (k += 1, o.value = k, S.isFront && k >= 70 && (S.className = "zmz-book__item--open")) : C == "prev" && (k == 1 ? (clearInterval(p), k = 180, p = null) : (k -= 1, o.value = k, !S.isFront && k <= 120 && (S.className = "zmz-book__item--close")));
      });
      r.value == "0" ? t("on-first-page", r.value) : r.value == L && t("on-last-page", r.value);
    }, m = z(() => d.value.length == 0), g = z(() => d.value.length && r.value == d.value.length);
    return {
      zmzBookStyle: l,
      zmzBookPageStyle: s,
      handleClick: c,
      model: r,
      pageDataList: d,
      isEmpty: m,
      rotateNum: o,
      pageStyle: (C, k) => {
        let S = {};
        return C == r.value && (S.transform = "translateZ(0px) rotateY(-" + o.value + "deg)"), k.isFront || (S.transform = "translateZ(0px) rotateY(0deg)"), k.isFront && (S.transform = "translateZ(0px) rotateY(-180deg)"), S;
      },
      isNomore: g,
      handleEnclosure: (C, k, S) => {
        t("on-enclosure-click", C, k, S);
      },
      zmzBookClass: i
    };
  }
}, zk = { class: "zmz-book__wrap" }, _k = ["data-index", "onClick"], hk = {
  key: 0,
  class: "zmz-book__item__imgwrap"
}, gk = {
  key: 0,
  class: "zmz-book__item__imgwrap"
}, yk = ["src"], pk = { class: "zmz-book__item__bodywrap" }, bk = {
  key: 2,
  class: "zmz-book__item__enclosure"
}, kk = ["onClick"], Ck = {
  key: 0,
  class: "zmz-book__item__imgwrap"
}, wk = {
  key: 0,
  class: "zmz-book__item__imgwrap"
}, Sk = ["src"], xk = { class: "zmz-book__item__bodywrap" }, Tk = {
  key: 2,
  class: "zmz-book__item__enclosure"
}, Ok = ["onClick"], Lk = {
  key: 0,
  class: "zmz-book__empty__icon"
}, Dk = { class: "zmz-book__empty__text" }, Mk = {
  key: 0,
  class: "zmz-book__nomore__icon"
}, Ek = { class: "zmz-book__nomore__text" };
function Bk(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-book", [n.zmzBookClass]]),
    style: j([n.zmzBookStyle])
  }, [
    u("div", zk, [
      (v(!0), _(G, null, fe(n.pageDataList, (l, i) => (v(), _("div", {
        key: i,
        "data-index": l.isFront,
        class: P(["zmz-book__item", [l.className, { "zmz-book__item--active": i == n.model }]]),
        onClick: _e((s) => n.handleClick(i, l), ["stop"]),
        style: j([{ zIndex: l.zIndex }, n.zmzBookPageStyle, n.pageStyle(i, l)])
      }, [
        u("div", {
          class: "zmz-book__item__front",
          style: j([l.frontStyle])
        }, [
          e.$slots.frontImg ? (v(), _("div", hk, [
            N(e.$slots, "frontImg", { item: l })
          ])) : (v(), _(G, { key: 1 }, [
            l.frontImgUrl ? (v(), _("div", gk, [
              u("img", {
                class: "zmz-book__item__img",
                src: l.frontImgUrl,
                onError: t[0] || (t[0] = (s) => s.target.classList.add("error"))
              }, null, 40, yk)
            ])) : A("", !0)
          ], 64)),
          u("div", pk, [
            e.$slots.front ? N(e.$slots, "front", {
              key: 0,
              item: l
            }) : (v(), _(G, { key: 1 }, [
              l.frontTitle ? (v(), _("div", {
                key: 0,
                class: P(["zmz-book__item__title", [a.pageTitleClass]]),
                style: j([a.pageTitleStyle])
              }, [
                e.$slots.frontTitle ? N(e.$slots, "frontTitle", {
                  key: 0,
                  title: e.frontTitle
                }) : (v(), _(G, { key: 1 }, [
                  ne(Z(l.frontTitle), 1)
                ], 64))
              ], 6)) : A("", !0),
              l.frontContent ? (v(), _("div", {
                key: 1,
                class: P(["zmz-book__item__content", [a.pageContentClass]]),
                style: j([a.pageContentStyle])
              }, [
                e.$slots.frontContent ? N(e.$slots, "frontContent", {
                  key: 0,
                  content: e.frontContent
                }) : (v(), _(G, { key: 1 }, [
                  ne(Z(l.frontContent), 1)
                ], 64))
              ], 6)) : A("", !0),
              l.frontEnclosure && l.frontEnclosure.length ? (v(), _("div", bk, [
                e.$slots.frontEnclosure ? N(e.$slots, "frontEnclosure", {
                  key: 0,
                  item: e.items
                }) : (v(!0), _(G, { key: 1 }, fe(l.frontEnclosure, (s, d) => (v(), _("div", {
                  class: "zmz-book__item__enclosure__li",
                  onClick: _e((c) => n.handleEnclosure(i, d, s), ["stop"]),
                  key: d,
                  style: j([s.style])
                }, Z(s.name), 13, kk))), 128))
              ])) : A("", !0),
              l.frontPageNumber ? (v(), _("div", {
                key: 3,
                class: P(["zmz-book__item__number", [a.pageNumberClass]]),
                style: j([a.pageNumberStyle])
              }, Z(l.frontPageNumber), 7)) : A("", !0)
            ], 64))
          ])
        ], 4),
        t[2] || (t[2] = u("div", { class: "zmz-book__item__background" }, null, -1)),
        u("div", {
          class: "zmz-book__item__behind",
          style: j([l.behindStyle])
        }, [
          e.$slots.behindImg ? (v(), _("div", Ck, [
            N(e.$slots, "behindImg", { item: l })
          ])) : (v(), _(G, { key: 1 }, [
            l.behindImgUrl ? (v(), _("div", wk, [
              u("img", {
                class: "zmz-book__item__img",
                src: l.behindImgUrl,
                onError: t[1] || (t[1] = (s) => s.target.classList.add("error"))
              }, null, 40, Sk)
            ])) : A("", !0)
          ], 64)),
          u("div", xk, [
            e.$slots.behind ? N(e.$slots, "behind", {
              key: 0,
              item: l
            }) : (v(), _(G, { key: 1 }, [
              l.behindTitle ? (v(), _("div", {
                key: 0,
                class: P(["zmz-book__item__title", [a.pageTitleClass]]),
                style: j([a.pageTitleStyle])
              }, [
                e.$slots.behindTitle ? N(e.$slots, "behindTitle", {
                  key: 0,
                  title: e.behindTitle
                }) : (v(), _(G, { key: 1 }, [
                  ne(Z(l.behindTitle), 1)
                ], 64))
              ], 6)) : A("", !0),
              l.behindContent ? (v(), _("div", {
                key: 1,
                class: P(["zmz-book__item__content", [a.pageContentClass]]),
                style: j([a.pageContentStyle])
              }, [
                e.$slots.behindContent ? N(e.$slots, "behindContent", {
                  key: 0,
                  content: e.behindContent
                }) : (v(), _(G, { key: 1 }, [
                  ne(Z(l.behindContent), 1)
                ], 64))
              ], 6)) : A("", !0),
              l.behindEnclosure && l.behindEnclosure.length ? (v(), _("div", Tk, [
                e.$slots.behindEnclosure ? N(e.$slots, "behindEnclosure", {
                  key: 0,
                  item: e.items
                }) : (v(!0), _(G, { key: 1 }, fe(l.behindEnclosure, (s, d) => (v(), _("div", {
                  class: "zmz-book__item__enclosure__li",
                  onClick: _e((c) => n.handleEnclosure(i, d, s), ["stop"]),
                  key: d,
                  style: j([s.style])
                }, Z(s.name), 13, Ok))), 128))
              ])) : A("", !0),
              l.behindPageNumber ? (v(), _("div", {
                key: 3,
                class: P(["zmz-book__item__number", [a.pageNumberClass]]),
                style: j([a.pageNumberStyle])
              }, Z(l.behindPageNumber), 7)) : A("", !0)
            ], 64))
          ])
        ], 4)
      ], 14, _k))), 128)),
      n.isEmpty ? (v(), _("div", {
        key: 0,
        class: "zmz-book__empty",
        style: j([n.zmzBookPageStyle])
      }, [
        N(e.$slots, "empty", {}, () => [
          a.emptyIcon ? (v(), _("div", Lk, [
            u("i", {
              class: P(["zmz-book__empty__icon__inner", a.emptyIcon])
            }, null, 2)
          ])) : A("", !0),
          u("div", Dk, Z(a.emptyText), 1)
        ])
      ], 4)) : A("", !0),
      n.isNomore ? (v(), _("div", {
        key: 1,
        class: "zmz-book__nomore",
        style: j([n.zmzBookPageStyle])
      }, [
        N(e.$slots, "nomore", {}, () => [
          a.nomoreIcon ? (v(), _("div", Mk, [
            u("i", {
              class: P(["zmz-book__nomore__icon__inner", a.nomoreIcon])
            }, null, 2)
          ])) : A("", !0),
          u("div", Ek, Z(a.nomoreText), 1)
        ])
      ], 4)) : A("", !0)
    ])
  ], 6);
}
const pl = /* @__PURE__ */ H(vk, [["render", Bk]]);
pl.install = function(e) {
  e.component(pl.name, pl);
};
const Ik = {
  name: "ZmzWatermark",
  props: {
    /**
     * 透明度
     */
    alpha: {
      type: [Number, String],
      default: 0.5
    },
    /**
     * 宽度
     */
    width: {
      type: [Number, String],
      default: 220
    },
    /**
     * 高度
     */
    height: {
      type: [Number, String],
      default: 220
    },
    /**
     * 图片地址
     */
    image: {
      type: String,
      default: ""
    },
    /**
     * 图片地址
     */
    imageZoom: {
      type: Number,
      default: 1
    },
    /**
     * 文本配置
     */
    contentOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 内容
     */
    content: {
      type: [String, Array],
      default: ""
    },
    /**
     * 层级
     */
    zindex: {
      type: Number,
      default: 9
    },
    /**
     * 旋转
     */
    rotate: {
      type: [Number, String],
      default: 0
    },
    /**
     * 显示
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * 全屏
     */
    fullscreen: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否穿梭
     */
    teleport: {
      type: Boolean,
      default: !1
    },
    /**
     * 穿梭节点
     */
    teleportDom: {
      type: String,
      default: "body"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = b(null), n = b(null), o = b(null), r = b(Object.assign({
      space: 0,
      baseline: "middle",
      color: "#2d8ff4",
      font: "12 Arial",
      align: "center"
    }, e.contentOptions)), l = b({
      childList: !0,
      attributes: !0,
      subtree: !0,
      attributesOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0
    }), i = b(null), s = z({
      get() {
        return e.modelValue;
      },
      set(h) {
        t("update:modelValue", h);
      }
    }), d = () => {
      let h = document.createElement("canvas"), y = parseFloat(e.height) / 2 + 6, C = parseFloat(e.width) / 2;
      h.width = parseFloat(e.width), h.height = parseFloat(e.height);
      let k = h.getContext("2d");
      if (e.image) {
        let S = new Image();
        S.setAttribute("crossOrigin", "Anonymous"), S.crossOrigin = "*", S.src = e.image + "?time=" + Math.random(), S.onload = function() {
          let L = S.width * e.imageZoom, p = S.height * e.imageZoom, w = (h.width - L) / 2, O = (h.height - p) / 2;
          k.rotate(-(parseFloat(e.rotate) * Math.PI) / 180), k.drawImage(S, w, O, L, p), k.globalAlpha = parseFloat(e.alpha), o.value = h.toDataURL("image/png"), f(), m();
        };
      } else
        k.font = r.value.font, k.translate(C, y), k.globalAlpha = parseFloat(e.alpha), k.rotate(-(parseFloat(e.rotate) * Math.PI) / 180), k.translate(-C, -y), k.textBaseline = r.value.baseline, k.fillStyle = r.value.color, k.textAlign = r.value.align, c(k, e.content, 0, 0, h.width, h.height), o.value = h.toDataURL("image/png"), f(), m(), h = null;
    }, c = (h, y, C, k, S, L) => {
      let p = Array.isArray(e.content) ? e.content : [e.content];
      for (let w = 0; w < p.length; w++) {
        let O = (S - C) / 2, x = h.measureText(p[w]), D = x.fontBoundingBoxAscent + x.fontBoundingBoxDescent + r.value.space, M = k + (L - D * p.length) / 2 + D * (w + 1);
        h.fillText(p[w], O, M);
      }
    }, f = () => {
      Se(() => {
        n.value && (n.value.style.pointerEvents = "none", n.value.style.top = "0", n.value.style.left = "0", n.value.style.right = "0", n.value.style.bottom = "0", n.value.style.fontWeight = "lighter", n.value.style.background = "url(" + o.value + ") center center repeat", n.value.style.zIndex = e.zindex, e.fullscreen || e.teleport ? n.value.style.position = "fixed" : n.value.style.position = "absolute");
      });
    }, m = () => {
      Se(() => {
        a.value && (e.fullscreen ? a.value.style.position = "" : a.value.style.position = "relative");
      });
    }, g = z(() => {
      let h = [];
      return e.teleport && h.push("zmz-watermark"), h;
    });
    return de(() => {
      i.value = new MutationObserver(() => {
        d();
      }), i.value.observe(a.value, l.value), window.addEventListener("resize", d);
    }), Ze(() => {
      window.removeEventListener("resize", d);
    }), ue(() => s.value, (h) => {
      h && d();
    }, {
      lazy: !0
    }), {
      zmzWatermark: a,
      zmzWatermarkInner: n,
      zmzWatermarkInnerClass: g,
      model: s
    };
  }
}, Ak = {
  class: "zmz-watermark",
  ref: "zmzWatermark"
}, Pk = {
  key: 0,
  class: "zmz-watermark__slot"
};
function Nk(e, t, a, n, o, r) {
  return v(), pe(ct, Ie({
    to: a.teleportDom,
    disabled: !a.fullscreen
  }, e.$attrs), [
    u("div", Ak, [
      e.$slots.default ? (v(), _("div", Pk, [
        N(e.$slots, "default")
      ])) : A("", !0),
      (v(), pe(ct, Ie({
        to: a.teleportDom,
        disabled: !a.teleport
      }, e.$attrs), [
        n.model ? (v(), _("div", {
          key: 0,
          class: P([[n.zmzWatermarkInnerClass], "zmz-watermark--inner"]),
          ref: "zmzWatermarkInner"
        }, null, 2)) : A("", !0)
      ], 16, ["to", "disabled"]))
    ], 512)
  ], 16, ["to", "disabled"]);
}
const bl = /* @__PURE__ */ H(Ik, [["render", Nk]]);
bl.install = function(e) {
  e.component(bl.name, bl);
};
const Vk = {
  name: "ZmzAmount",
  props: {
    /**
     * 数据源
     */
    amount: {
      type: [String, Number],
      default: ""
    },
    /**
     * 整数
     */
    intUnit: {
      type: Array,
      default: () => ["", "万", "亿", "兆"]
    },
    /**
     * 整数基数
     */
    intRadiceUnit: {
      type: Array,
      default: () => ["", "拾", "佰", "仟"]
    },
    /**
     * 整数最后单位
     */
    intLastUnit: {
      type: String,
      default: "元"
    },
    /**
     * 整数最后补齐
     */
    intLastEger: {
      type: String,
      default: "整"
    },
    /**
     * 小数
     */
    decUnit: {
      type: Array,
      default: () => ["角", "分", "毫", "厘"]
    },
    /**
     * 大写数字
     */
    uppercaseNum: {
      type: Array,
      default: () => ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]
    }
  },
  setup(e) {
    return {
      currentValue: z(() => {
        let a = "", n = Math.floor(e.amount), o = Math.round((e.amount - n) * 100), r = String(n);
        if (r) {
          let d = r.length, c = 0;
          for (let f = 0; f < d; f++) {
            let m = r.substring(f, f + 1), g = d - f - 1, h = g % 4, y = g / 4;
            m === "0" ? c++ : (c > 0 && (a += e.uppercaseNum[0]), c = 0, a += e.uppercaseNum[parseInt(m)] + e.intRadiceUnit[h]), h === 0 && c < 4 && (a += e.intUnit[y]);
          }
          a += e.intLastUnit;
        }
        let l = String(o);
        if (l) {
          let d = l.length;
          for (var i = 0; i < d; i++) {
            var s = l.substring(i, i + 1);
            s != "0" && (a += e.uppercaseNum[Number(s)] + e.decUnit[i]);
          }
          a == "" ? a += e.uppercaseNum[0] + e.intLastUnit + e.intLastEger : d.length || (a += e.intLastEger);
        }
        return a;
      })
    };
  }
}, Fk = { class: "zmz-amount" };
function Rk(e, t, a, n, o, r) {
  return v(), _("span", Fk, [
    N(e.$slots, "default", { amount: n.currentValue }, () => [
      ne(Z(n.currentValue), 1)
    ])
  ]);
}
const kl = /* @__PURE__ */ H(Vk, [["render", Rk]]);
kl.install = function(e) {
  e.component(kl.name, kl);
};
const Zk = {
  props: {
    modelValue: {
      type: String,
      default: "*"
    }
  },
  setup(e, { emit: t }) {
    const a = b("1"), n = Le({
      // 周期
      start: 1,
      end: 2
    }), o = Le({
      start: 1,
      end: 2
    }), r = Le({
      // 周期
      start: 0,
      end: 1
    }), l = b(0), i = b(0), s = b([]), d = z({
      get() {
        return e.modelValue;
      },
      set(p) {
        t("update:modelValue", p);
      }
    }), c = () => {
      d.value && (d.value === "?" ? a.value = "5" : d.value.indexOf("-") !== -1 ? d.value.split("-").length === 2 && (a.value = "2", n.start = d.value.split("-")[0], n.end = d.value.split("-")[1]) : d.value.indexOf("/") !== -1 ? d.value.split("/").length === 2 && (a.value = "3", r.start = d.value.split("/")[0], r.end = d.value.split("/")[1]) : d.value.indexOf("*") !== -1 ? a.value = "1" : d.value.indexOf("L") !== -1 ? (a.value = "6", i.value = d.value.replace("L", "")) : d.value.indexOf("#") !== -1 ? d.value.split("#").length === 2 && (a.value = "7", o.start = d.value.split("#")[0], o.end = d.value.split("#")[1]) : d.value.indexOf("W") !== -1 ? (a.value = "8", l.value = d.value.replace("W", "")) : (a.value = "4", s.value = d.value.split(",")));
    }, f = (p) => {
      a.value = p, m();
    }, m = () => {
      let p = [];
      switch (a.value) {
        case "1":
          p.push("*");
          break;
        case "2":
          p.push(`${n.start}-${n.end}`);
          break;
        case "3":
          p.push(`${r.start}/${r.end}`);
          break;
        case "4":
          p.push(s.value.join(","));
          break;
        case "6":
          p.push(`${i.value === 0 ? "" : i.value}L`);
          break;
        case "7":
          p.push(`${o.start}#${o.end}`);
          break;
        case "8":
          p.push(`${l.value}W`);
          break;
        default:
          p.push("?");
          break;
      }
      d.value = p.join("");
    };
    return de(() => {
      m(), c();
    }), ue(() => d.value, () => {
      c();
    }), {
      currentType: a,
      cycle: n,
      loop: r,
      work: l,
      week: o,
      last: i,
      appoint: s,
      handleTypeClick: f,
      updateModelValue: c,
      model: d,
      handleCycleStart: (p) => {
        n.start > n.end && (n.start = n.end), a.value = p, m();
      },
      handleCycleEnd: (p) => {
        n.start > n.end && (n.end = n.start), a.value = p, m();
      },
      handleLoopStart: (p) => {
        a.value = p, m();
      },
      handleLoopEnd: (p) => {
        a.value = p, m();
      },
      handleMonth: (p, w) => {
        let O = s.value.findIndex((x) => x == w);
        O > -1 ? s.value.splice(O, 1) : s.value.push(w), a.value = p, m();
      },
      handleLast: (p) => {
        a.value = p, m();
      },
      handleWork: (p) => {
        a.value = p, m();
      }
    };
  }
}, Wk = { class: "zmz-cron-datetime" }, $k = { class: "zmz-cron-datetime__item" }, jk = { class: "zmz-cron-datetime__item" }, Hk = { class: "zmz-cron-datetime__item__input" }, Yk = { class: "zmz-cron-datetime__item__input" }, qk = { class: "zmz-cron-datetime__item" }, Uk = { class: "zmz-cron-datetime__item__input" }, Gk = { class: "zmz-cron-datetime__item__input" }, Xk = { class: "zmz-cron-datetime__item zmz-cron-datetime__item__column" }, Kk = { class: "zmz-cron-datetime__item__checkbox__group" }, Qk = ["onClick"], Jk = { class: "zmz-cron-datetime__item__checkbox__text" };
function eC(e, t, a, n, o, r) {
  return v(), _("div", Wk, [
    u("div", $k, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[13] || (t[13] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每分", -1)
      ])], 2)
    ]),
    u("div", jk, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("2"))
      }, [...t[14] || (t[14] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "周期", -1)
      ])], 2),
      t[15] || (t[15] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", Hk, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (l) => n.cycle.start = l),
          onInput: t[3] || (t[3] = (l) => n.handleCycleStart("2")),
          min: 1,
          max: 59
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[16] || (t[16] = u("div", { class: "zmz-cron-datetime__item__text" }, "至", -1)),
      u("div", Yk, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[4] || (t[4] = (l) => n.cycle.end = l),
          onInput: t[5] || (t[5] = (l) => n.handleCycleEnd("2")),
          min: 2,
          max: 59
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ]),
      t[17] || (t[17] = u("div", { class: "zmz-cron-datetime__item__text" }, "分", -1))
    ]),
    u("div", qk, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "3" }]),
        onClick: t[6] || (t[6] = (l) => n.handleTypeClick("3"))
      }, [...t[18] || (t[18] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "循环", -1)
      ])], 2),
      t[19] || (t[19] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", Uk, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[7] || (t[7] = (l) => n.loop.start = l),
          onInput: t[8] || (t[8] = (l) => n.handleLoopStart("3")),
          min: 0,
          max: 59
        }, null, 544), [
          [Oe, n.loop.start]
        ])
      ]),
      t[20] || (t[20] = u("div", { class: "zmz-cron-datetime__item__text" }, "分开始，每", -1)),
      u("div", Gk, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[9] || (t[9] = (l) => n.loop.end = l),
          onInput: t[10] || (t[10] = (l) => n.handleLoopEnd("3")),
          min: 1,
          max: 59
        }, null, 544), [
          [Oe, n.loop.end]
        ])
      ]),
      t[21] || (t[21] = u("div", { class: "zmz-cron-datetime__item__text" }, "分执行一次", -1))
    ]),
    u("div", Xk, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "4" }]),
        onClick: t[11] || (t[11] = (l) => n.handleTypeClick("4"))
      }, [...t[22] || (t[22] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定", -1)
      ])], 2),
      u("div", Kk, [
        (v(), _(G, null, fe(6, (l) => u("div", {
          class: "zmz-cron-datetime__item__checkbox__group__item",
          key: l
        }, [
          (v(), _(G, null, fe(10, (i) => u("div", {
            onChange: t[12] || (t[12] = (s) => e.type = "4"),
            key: i,
            class: P(["zmz-cron-datetime__item__checkbox", { "zmz-cron-datetime__item__checkbox--active": n.appoint.includes(l - 1 + "" + (i - 1)) }]),
            onClick: (s) => n.handleMonth("4", l - 1 + "" + (i - 1))
          }, [
            t[23] || (t[23] = u("span", { class: "zmz-cron-datetime__item__checkbox__dot" }, null, -1)),
            u("span", Jk, Z(l - 1 + "" + (i - 1)), 1)
          ], 42, Qk)), 64))
        ])), 64))
      ])
    ])
  ]);
}
const tC = /* @__PURE__ */ H(Zk, [["render", eC]]), nC = {
  props: {
    modelValue: {
      type: String,
      default: "*"
    }
  },
  setup(e, { emit: t }) {
    const a = b("1"), n = Le({
      // 周期
      start: 1,
      end: 2
    }), o = Le({
      start: 0,
      end: 0
    }), r = Le({
      // 周期
      start: 0,
      end: 1
    }), l = b(0), i = b(0), s = b([]), d = z({
      get() {
        return e.modelValue;
      },
      set(p) {
        t("update:modelValue", p);
      }
    }), c = () => {
      d.value && (d.value === "?" ? a.value = "5" : d.value.indexOf("-") !== -1 ? d.value.split("-").length === 2 && (a.value = "2", n.start = d.value.split("-")[0], n.end = d.value.split("-")[1]) : d.value.indexOf("/") !== -1 ? d.value.split("/").length === 2 && (a.value = "3", r.start = d.value.split("/")[0], r.end = d.value.split("/")[1]) : d.value.indexOf("*") !== -1 ? a.value = "1" : d.value.indexOf("L") !== -1 ? (a.value = "6", i.value = d.value.replace("L", "")) : d.value.indexOf("#") !== -1 ? d.value.split("#").length === 2 && (a.value = "7", o.start = d.value.split("#")[0], o.end = d.value.split("#")[1]) : d.value.indexOf("W") !== -1 ? (a.value = "8", l.value = d.value.replace("W", "")) : (a.value = "4", s.value = d.value.split(",")));
    }, f = (p) => {
      a.value = p, m();
    }, m = () => {
      let p = [];
      switch (a.value) {
        case "1":
          p.push("*");
          break;
        case "2":
          p.push(`${n.start}-${n.end}`);
          break;
        case "3":
          p.push(`${r.start}/${r.end}`);
          break;
        case "4":
          p.push(s.value.join(","));
          break;
        case "6":
          p.push(`${i.value === 0 ? "" : i.value}L`);
          break;
        case "7":
          p.push(`${o.start}#${o.end}`);
          break;
        case "8":
          p.push(`${l.value}W`);
          break;
        default:
          p.push("?");
          break;
      }
      d.value = p.join("");
    };
    return de(() => {
      m(), c();
    }), ue(() => d.value, () => {
      c();
    }), {
      currentType: a,
      cycle: n,
      loop: r,
      work: l,
      week: o,
      last: i,
      appoint: s,
      handleTypeClick: f,
      updateModelValue: c,
      model: d,
      handleCycleStart: (p) => {
        let w = n.start, O = n.end;
        n.start > O ? n.start = O : n.start < w && (n.start = w), a.value = p, m();
      },
      handleCycleEnd: (p) => {
        n.start > n.end && (n.end = n.start), a.value = p, m();
      },
      handleLoopStart: (p) => {
        a.value = p, m();
      },
      handleLoopEnd: (p) => {
        a.value = p, m();
      },
      handleMonth: (p, w) => {
        let O = s.value.findIndex((x) => x == w);
        O > -1 ? s.value.splice(O, 1) : s.value.push(w), a.value = p, m();
      },
      handleLast: (p) => {
        a.value = p, m();
      },
      handleWork: (p) => {
        a.value = p, m();
      }
    };
  }
}, aC = { class: "zmz-cron-datetime" }, lC = { class: "zmz-cron-datetime__item" }, oC = { class: "zmz-cron-datetime__item" }, rC = { class: "zmz-cron-datetime__item__input" }, iC = { class: "zmz-cron-datetime__item__input" }, sC = { class: "zmz-cron-datetime__item" }, uC = { class: "zmz-cron-datetime__item__input" }, dC = { class: "zmz-cron-datetime__item__input" }, cC = { class: "zmz-cron-datetime__item zmz-cron-datetime__item__column" }, mC = { class: "zmz-cron-datetime__item__checkbox__group" }, fC = ["onClick"], vC = { class: "zmz-cron-datetime__item__checkbox__text" };
function zC(e, t, a, n, o, r) {
  return v(), _("div", aC, [
    u("div", lC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[13] || (t[13] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每秒", -1)
      ])], 2)
    ]),
    u("div", oC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("2"))
      }, [...t[14] || (t[14] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "周期", -1)
      ])], 2),
      t[15] || (t[15] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", rC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (l) => n.cycle.start = l),
          onInput: t[3] || (t[3] = (l) => n.handleCycleStart("2")),
          min: 1,
          max: 59
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[16] || (t[16] = u("div", { class: "zmz-cron-datetime__item__text" }, "至", -1)),
      u("div", iC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[4] || (t[4] = (l) => n.cycle.end = l),
          onInput: t[5] || (t[5] = (l) => n.handleCycleEnd("2")),
          min: 2,
          max: 59
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ]),
      t[17] || (t[17] = u("div", { class: "zmz-cron-datetime__item__text" }, "秒", -1))
    ]),
    u("div", sC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "3" }]),
        onClick: t[6] || (t[6] = (l) => n.handleTypeClick("3"))
      }, [...t[18] || (t[18] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "循环", -1)
      ])], 2),
      t[19] || (t[19] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", uC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[7] || (t[7] = (l) => n.loop.start = l),
          onInput: t[8] || (t[8] = (l) => n.handleLoopStart("3")),
          min: 0,
          max: 59
        }, null, 544), [
          [Oe, n.loop.start]
        ])
      ]),
      t[20] || (t[20] = u("div", { class: "zmz-cron-datetime__item__text" }, "秒开始，每", -1)),
      u("div", dC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[9] || (t[9] = (l) => n.loop.end = l),
          onInput: t[10] || (t[10] = (l) => n.handleLoopEnd("3")),
          min: 1,
          max: 59
        }, null, 544), [
          [Oe, n.loop.end]
        ])
      ]),
      t[21] || (t[21] = u("div", { class: "zmz-cron-datetime__item__text" }, "秒执行一次", -1))
    ]),
    u("div", cC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "4" }]),
        onClick: t[11] || (t[11] = (l) => n.handleTypeClick("4"))
      }, [...t[22] || (t[22] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定", -1)
      ])], 2),
      u("div", mC, [
        (v(), _(G, null, fe(6, (l) => u("div", {
          class: "zmz-cron-datetime__item__checkbox__group__item",
          key: l
        }, [
          (v(), _(G, null, fe(10, (i) => u("div", {
            onChange: t[12] || (t[12] = (s) => e.type = "4"),
            key: i,
            class: P(["zmz-cron-datetime__item__checkbox", { "zmz-cron-datetime__item__checkbox--active": n.appoint.includes(l - 1 + "" + (i - 1)) }]),
            onClick: (s) => n.handleMonth("4", l - 1 + "" + (i - 1))
          }, [
            t[23] || (t[23] = u("span", { class: "zmz-cron-datetime__item__checkbox__dot" }, null, -1)),
            u("span", vC, Z(l - 1 + "" + (i - 1)), 1)
          ], 42, fC)), 64))
        ])), 64))
      ])
    ])
  ]);
}
const _C = /* @__PURE__ */ H(nC, [["render", zC]]), hC = {
  props: {
    modelValue: {
      type: String,
      default: "*"
    }
  },
  setup(e, { emit: t }) {
    const a = b("1"), n = Le({
      // 周期
      start: 0,
      end: 2
    }), o = Le({
      start: 0,
      end: 0
    }), r = Le({
      // 周期
      start: 0,
      end: 1
    }), l = b(0), i = b(0), s = b([]), d = z({
      get() {
        return e.modelValue;
      },
      set(S) {
        t("update:modelValue", S);
      }
    }), c = () => {
      d.value && (d.value === "?" ? a.value = "5" : d.value.indexOf("-") !== -1 ? d.value.split("-").length === 2 && (a.value = "2", n.start = d.value.split("-")[0], n.end = d.value.split("-")[1]) : d.value.indexOf("/") !== -1 ? d.value.split("/").length === 2 && (a.value = "3", r.start = d.value.split("/")[0], r.end = d.value.split("/")[1]) : d.value.indexOf("*") !== -1 ? a.value = "1" : d.value.indexOf("L") !== -1 ? (a.value = "6", i.value = d.value.replace("L", "")) : d.value.indexOf("#") !== -1 ? d.value.split("#").length === 2 && (a.value = "7", o.start = d.value.split("#")[0], o.end = d.value.split("#")[1]) : d.value.indexOf("W") !== -1 ? (a.value = "8", l.value = d.value.replace("W", "")) : (a.value = "4", s.value = d.value.split(",")));
    }, f = (S) => {
      a.value = S, m();
    }, m = () => {
      let S = [];
      switch (a.value) {
        case "1":
          S.push("*");
          break;
        case "2":
          S.push(`${n.start}-${n.end}`);
          break;
        case "3":
          S.push(`${r.start}/${r.end}`);
          break;
        case "4":
          S.push(s.value.join(","));
          break;
        case "6":
          S.push(`${i.value === 0 ? "" : i.value}L`);
          break;
        case "7":
          S.push(`${o.start}#${o.end}`);
          break;
        case "8":
          S.push(`${l.value}W`);
          break;
        default:
          S.push("?");
          break;
      }
      d.value = S.join("");
    };
    return de(() => {
      m(), c();
    }), ue(() => d.value, () => {
      c();
    }), {
      currentType: a,
      cycle: n,
      loop: r,
      work: l,
      week: o,
      last: i,
      appoint: s,
      handleTypeClick: f,
      updateModelValue: c,
      model: d,
      handleCycleStart: (S) => {
        n.start > n.end && (n.start = n.end), a.value = S, m();
      },
      handleCycleEnd: (S) => {
        n.start > n.end && (n.end = n.start), a.value = S, m();
      },
      handleLoopStart: (S) => {
        a.value = S, m();
      },
      handleLoopEnd: (S) => {
        a.value = S, m();
      },
      handleMonth: (S, L) => {
        let p = s.value.findIndex((w) => w == L);
        p > -1 ? s.value.splice(p, 1) : s.value.push(L), a.value = S, m();
      }
    };
  }
}, gC = { class: "zmz-cron-datetime" }, yC = { class: "zmz-cron-datetime__item" }, pC = { class: "zmz-cron-datetime__item" }, bC = { class: "zmz-cron-datetime__item__input" }, kC = { class: "zmz-cron-datetime__item__input" }, CC = { class: "zmz-cron-datetime__item" }, wC = { class: "zmz-cron-datetime__item__input" }, SC = { class: "zmz-cron-datetime__item__input" }, xC = { class: "zmz-cron-datetime__item zmz-cron-datetime__item__column" }, TC = { class: "zmz-cron-datetime__item__checkbox__group" }, OC = ["onClick"], LC = { class: "zmz-cron-datetime__item__checkbox__text" };
function DC(e, t, a, n, o, r) {
  return v(), _("div", gC, [
    u("div", yC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[13] || (t[13] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每时", -1)
      ])], 2)
    ]),
    u("div", pC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("2"))
      }, [...t[14] || (t[14] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "周期", -1)
      ])], 2),
      t[15] || (t[15] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", bC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (l) => n.cycle.start = l),
          onInput: t[3] || (t[3] = (l) => n.handleCycleStart("2")),
          min: 0,
          max: 23
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[16] || (t[16] = u("div", { class: "zmz-cron-datetime__item__text" }, "至", -1)),
      u("div", kC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[4] || (t[4] = (l) => n.cycle.end = l),
          onInput: t[5] || (t[5] = (l) => n.handleCycleEnd("2")),
          min: 2,
          max: 23
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ]),
      t[17] || (t[17] = u("div", { class: "zmz-cron-datetime__item__text" }, "时", -1))
    ]),
    u("div", CC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "3" }]),
        onClick: t[6] || (t[6] = (l) => n.handleTypeClick("3"))
      }, [...t[18] || (t[18] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "循环", -1)
      ])], 2),
      t[19] || (t[19] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", wC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[7] || (t[7] = (l) => n.loop.start = l),
          onInput: t[8] || (t[8] = (l) => n.handleLoopStart("3")),
          min: 0,
          max: 23
        }, null, 544), [
          [Oe, n.loop.start]
        ])
      ]),
      t[20] || (t[20] = u("div", { class: "zmz-cron-datetime__item__text" }, "时开始，每", -1)),
      u("div", SC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[9] || (t[9] = (l) => n.loop.end = l),
          onInput: t[10] || (t[10] = (l) => n.handleLoopEnd("3")),
          min: 1,
          max: 23
        }, null, 544), [
          [Oe, n.loop.end]
        ])
      ]),
      t[21] || (t[21] = u("div", { class: "zmz-cron-datetime__item__text" }, "时执行一次", -1))
    ]),
    u("div", xC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "4" }]),
        onClick: t[11] || (t[11] = (l) => n.handleTypeClick("4"))
      }, [...t[22] || (t[22] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定", -1)
      ])], 2),
      u("div", TC, [
        (v(), _(G, null, fe(3, (l) => u("div", {
          class: "zmz-cron-datetime__item__checkbox__group__item",
          key: l
        }, [
          (v(), _(G, null, fe(10, (i) => (v(), _(G, null, [
            parseInt(l - 1 + "" + (i - 1)) < 24 ? (v(), _("div", {
              onChange: t[12] || (t[12] = (s) => e.type = "4"),
              key: i,
              class: P(["zmz-cron-datetime__item__checkbox", { "zmz-cron-datetime__item__checkbox--active": n.appoint.includes(l - 1 + "" + (i - 1)) }]),
              onClick: (s) => n.handleMonth("4", l - 1 + "" + (i - 1))
            }, [
              t[23] || (t[23] = u("span", { class: "zmz-cron-datetime__item__checkbox__dot" }, null, -1)),
              u("span", LC, Z(l - 1 + "" + (i - 1)), 1)
            ], 42, OC)) : A("", !0)
          ], 64))), 64))
        ])), 64))
      ])
    ])
  ]);
}
const MC = /* @__PURE__ */ H(hC, [["render", DC]]), EC = {
  props: {
    modelValue: {
      type: String,
      default: "?"
    }
  },
  setup(e, { emit: t }) {
    const a = b("1"), n = Le({
      // 周期
      start: 1,
      end: 2
    }), o = Le({
      start: 0,
      end: 0
    }), r = Le({
      // 周期
      start: 1,
      end: 1
    }), l = b(0), i = b(0), s = b([]), d = z({
      get() {
        return e.modelValue;
      },
      set(p) {
        t("update:modelValue", p);
      }
    }), c = () => {
      d.value && (d.value === "?" ? a.value = "5" : d.value.indexOf("-") !== -1 ? d.value.split("-").length === 2 && (a.value = "2", n.start = d.value.split("-")[0], n.end = d.value.split("-")[1]) : d.value.indexOf("/") !== -1 ? d.value.split("/").length === 2 && (a.value = "3", r.start = d.value.split("/")[0], r.end = d.value.split("/")[1]) : d.value.indexOf("*") !== -1 ? a.value = "1" : d.value.indexOf("L") !== -1 ? (a.value = "6", i.value = d.value.replace("L", "")) : d.value.indexOf("#") !== -1 ? d.value.split("#").length === 2 && (a.value = "7", o.start = d.value.split("#")[0], o.end = d.value.split("#")[1]) : d.value.indexOf("W") !== -1 ? (a.value = "8", l.value = d.value.replace("W", "")) : (a.value = "4", s.value = d.value.split(",")));
    }, f = (p) => {
      a.value = p, m();
    }, m = () => {
      let p = [];
      switch (a.value) {
        case "1":
          p.push("*");
          break;
        case "2":
          p.push(`${n.start}-${n.end}`);
          break;
        case "3":
          p.push(`${r.start}/${r.end}`);
          break;
        case "4":
          p.push(s.value.join(","));
          break;
        case "6":
          p.push(`${i.value === 0 ? "" : i.value}L`);
          break;
        case "7":
          p.push(`${o.start}#${o.end}`);
          break;
        case "8":
          p.push(`${l.value}W`);
          break;
        default:
          p.push("?");
          break;
      }
      d.value = p.join("");
    };
    return de(() => {
      m(), c();
    }), ue(() => d.value, () => {
      c();
    }), {
      currentType: a,
      cycle: n,
      loop: r,
      work: l,
      week: o,
      last: i,
      appoint: s,
      handleTypeClick: f,
      updateModelValue: c,
      model: d,
      handleCycleStart: (p) => {
        n.start > n.end && (n.start = n.end), a.value = p, m();
      },
      handleCycleEnd: (p) => {
        n.start > n.end && (n.end = n.start), a.value = p, m();
      },
      handleLoopStart: (p) => {
        a.value = p, m();
      },
      handleLoopEnd: (p) => {
        a.value = p, m();
      },
      handleMonth: (p, w) => {
        let O = s.value.findIndex((x) => x == w);
        O > -1 ? s.value.splice(O, 1) : s.value.push(w), a.value = p, m();
      },
      handleLast: (p) => {
        a.value = p, m();
      },
      handleWork: (p) => {
        a.value = p, m();
      }
    };
  }
}, BC = { class: "zmz-cron-datetime" }, IC = { class: "zmz-cron-datetime__item" }, AC = { class: "zmz-cron-datetime__item" }, PC = { class: "zmz-cron-datetime__item" }, NC = { class: "zmz-cron-datetime__item__input" }, VC = { class: "zmz-cron-datetime__item__input" }, FC = { class: "zmz-cron-datetime__item" }, RC = { class: "zmz-cron-datetime__item__input" }, ZC = { class: "zmz-cron-datetime__item__input" }, WC = { class: "zmz-cron-datetime__item" }, $C = { class: "zmz-cron-datetime__item__input" }, jC = { class: "zmz-cron-datetime__item" }, HC = { class: "zmz-cron-datetime__item zmz-cron-datetime__item__column" }, YC = { class: "zmz-cron-datetime__item__checkbox__group" }, qC = ["onClick"], UC = { class: "zmz-cron-datetime__item__checkbox__text" };
function GC(e, t, a, n, o, r) {
  return v(), _("div", BC, [
    u("div", IC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[18] || (t[18] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每日", -1)
      ])], 2)
    ]),
    u("div", AC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "5" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("5"))
      }, [...t[19] || (t[19] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "不指定", -1)
      ])], 2)
    ]),
    u("div", PC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[2] || (t[2] = (l) => n.handleTypeClick("2"))
      }, [...t[20] || (t[20] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "周期", -1)
      ])], 2),
      t[21] || (t[21] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", NC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[3] || (t[3] = (l) => n.cycle.start = l),
          onInput: t[4] || (t[4] = (l) => n.handleCycleStart("2")),
          min: 1,
          max: 31
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[22] || (t[22] = u("div", { class: "zmz-cron-datetime__item__text" }, "至", -1)),
      u("div", VC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[5] || (t[5] = (l) => n.cycle.end = l),
          onInput: t[6] || (t[6] = (l) => n.handleCycleEnd("2")),
          min: 2,
          max: 31
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ]),
      t[23] || (t[23] = u("div", { class: "zmz-cron-datetime__item__text" }, "日", -1))
    ]),
    u("div", FC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "3" }]),
        onClick: t[7] || (t[7] = (l) => n.handleTypeClick("3"))
      }, [...t[24] || (t[24] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "循环", -1)
      ])], 2),
      t[25] || (t[25] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", RC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[8] || (t[8] = (l) => n.loop.start = l),
          onInput: t[9] || (t[9] = (l) => n.handleLoopStart("3")),
          min: 1,
          max: 31
        }, null, 544), [
          [Oe, n.loop.start]
        ])
      ]),
      t[26] || (t[26] = u("div", { class: "zmz-cron-datetime__item__text" }, "日开始，每", -1)),
      u("div", ZC, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[10] || (t[10] = (l) => n.loop.end = l),
          onInput: t[11] || (t[11] = (l) => n.handleLoopEnd("3")),
          min: 1,
          max: 31
        }, null, 544), [
          [Oe, n.loop.end]
        ])
      ]),
      t[27] || (t[27] = u("div", { class: "zmz-cron-datetime__item__text" }, "日执行一次", -1))
    ]),
    u("div", WC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "8" }]),
        onClick: t[12] || (t[12] = (l) => n.handleTypeClick("8"))
      }, [...t[28] || (t[28] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "工作日", -1)
      ])], 2),
      t[29] || (t[29] = u("div", { class: "zmz-cron-datetime__item__text" }, "本月", -1)),
      u("div", $C, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[13] || (t[13] = (l) => n.work = l),
          onChange: t[14] || (t[14] = (l) => n.handleWork("8")),
          min: 1,
          max: 31
        }, null, 544), [
          [Oe, n.work]
        ])
      ]),
      t[30] || (t[30] = u("div", { class: "zmz-cron-datetime__item__text" }, "号，最近的工作日", -1))
    ]),
    u("div", jC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "6" }]),
        onClick: t[15] || (t[15] = (l) => n.handleTypeClick("6"))
      }, [...t[31] || (t[31] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "本月最后一天", -1)
      ])], 2)
    ]),
    u("div", HC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "4" }]),
        onClick: t[16] || (t[16] = (l) => n.handleTypeClick("4"))
      }, [...t[32] || (t[32] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定", -1)
      ])], 2),
      u("div", YC, [
        (v(), _(G, null, fe(4, (l) => u("div", {
          class: "zmz-cron-datetime__item__checkbox__group__item",
          key: l
        }, [
          (v(), _(G, null, fe(10, (i) => (v(), _(G, null, [
            parseInt(l - 1 + "" + (i - 1)) < 32 && !(l === 1 && i === 1) ? (v(), _("div", {
              onChange: t[17] || (t[17] = (s) => e.type = "4"),
              class: P([{ "zmz-cron-datetime__item__checkbox--active": n.appoint.includes(l - 1 + "" + (i - 1)) }, "zmz-cron-datetime__item__checkbox"]),
              key: i,
              onClick: (s) => n.handleMonth("4", l - 1 + "" + (i - 1))
            }, [
              t[33] || (t[33] = u("span", { class: "zmz-cron-datetime__item__checkbox__dot" }, null, -1)),
              u("span", UC, Z(l - 1 + "" + (i - 1)), 1)
            ], 42, qC)) : A("", !0)
          ], 64))), 64))
        ])), 64))
      ])
    ])
  ]);
}
const XC = /* @__PURE__ */ H(EC, [["render", GC]]), KC = {
  props: {
    modelValue: {
      type: String,
      default: "*"
    }
  },
  setup(e, { emit: t }) {
    const a = b("1"), n = Le({
      // 周期
      start: 1,
      end: 2
    }), o = Le({
      start: 0,
      end: 0
    }), r = Le({
      // 周期
      start: 1,
      end: 0
    }), l = b(0), i = b(0), s = b([]), d = z({
      get() {
        return e.modelValue;
      },
      set(S) {
        t("update:modelValue", S);
      }
    }), c = () => {
      d.value && (d.value === "?" ? a.value = "5" : d.value.indexOf("-") !== -1 ? d.value.split("-").length === 2 && (a.value = "2", n.start = d.value.split("-")[0], n.end = d.value.split("-")[1]) : d.value.indexOf("/") !== -1 ? d.value.split("/").length === 2 && (a.value = "3", r.start = d.value.split("/")[0], r.end = d.value.split("/")[1]) : d.value.indexOf("*") !== -1 ? a.value = "1" : d.value.indexOf("L") !== -1 ? (a.value = "6", i.value = d.value.replace("L", "")) : d.value.indexOf("#") !== -1 ? d.value.split("#").length === 2 && (a.value = "7", o.start = d.value.split("#")[0], o.end = d.value.split("#")[1]) : d.value.indexOf("W") !== -1 ? (a.value = "8", l.value = d.value.replace("W", "")) : (a.value = "4", s.value = d.value.split(",")));
    }, f = (S) => {
      a.value = S, m();
    }, m = () => {
      let S = [];
      switch (a.value) {
        case "1":
          S.push("*");
          break;
        case "2":
          S.push(`${n.start}-${n.end}`);
          break;
        case "3":
          S.push(`${r.start}/${r.end}`);
          break;
        case "4":
          S.push(s.value.join(","));
          break;
        case "6":
          S.push(`${i.value === 0 ? "" : i.value}L`);
          break;
        default:
          S.push("?");
          break;
      }
      d.value = S.join("");
    };
    return de(() => {
      m(), c();
    }), ue(() => d.value, () => {
      c();
    }), {
      currentType: a,
      cycle: n,
      loop: r,
      work: l,
      last: i,
      appoint: s,
      handleTypeClick: f,
      updateModelValue: c,
      model: d,
      handleCycleStart: (S) => {
        n.start > n.end && (n.start = n.end), a.value = S, m();
      },
      handleCycleEnd: (S) => {
        n.start > n.end && (n.end = n.start), a.value = S, m();
      },
      handleLoopStart: (S) => {
        a.value = S, m();
      },
      handleLoopEnd: (S) => {
        a.value = S, m();
      },
      handleMonth: (S, L) => {
        let p = s.value.findIndex((w) => w == L);
        p > -1 ? s.value.splice(p, 1) : s.value.push(L), a.value = S, m();
      }
    };
  }
}, QC = { class: "zmz-cron-datetime" }, JC = { class: "zmz-cron-datetime__item" }, ew = { class: "zmz-cron-datetime__item" }, tw = { class: "zmz-cron-datetime__item" }, nw = { class: "zmz-cron-datetime__item__input" }, aw = { class: "zmz-cron-datetime__item__input" }, lw = { class: "zmz-cron-datetime__item" }, ow = { class: "zmz-cron-datetime__item__input" }, rw = { class: "zmz-cron-datetime__item__input" }, iw = { class: "zmz-cron-datetime__item zmz-cron-datetime__item__column" }, sw = { class: "zmz-cron-datetime__item__checkbox__group" }, uw = { class: "zmz-cron-datetime__item__checkbox__group__item" }, dw = ["onClick"], cw = { class: "zmz-cron-datetime__item__checkbox__text" };
function mw(e, t, a, n, o, r) {
  return v(), _("div", QC, [
    u("div", JC, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[13] || (t[13] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每月", -1)
      ])], 2)
    ]),
    u("div", ew, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "5" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("5"))
      }, [...t[14] || (t[14] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "不指定", -1)
      ])], 2)
    ]),
    u("div", tw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[2] || (t[2] = (l) => n.handleTypeClick("2"))
      }, [...t[15] || (t[15] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "周期", -1)
      ])], 2),
      t[16] || (t[16] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", nw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[3] || (t[3] = (l) => n.cycle.start = l),
          onInput: t[4] || (t[4] = (l) => n.handleCycleStart("2")),
          min: 1,
          max: 12
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[17] || (t[17] = u("div", { class: "zmz-cron-datetime__item__text" }, "至", -1)),
      u("div", aw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[5] || (t[5] = (l) => n.cycle.end = l),
          onInput: t[6] || (t[6] = (l) => n.handleCycleEnd("2")),
          min: 1,
          max: 12
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ]),
      t[18] || (t[18] = u("div", { class: "zmz-cron-datetime__item__text" }, "月", -1))
    ]),
    u("div", lw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "3" }]),
        onClick: t[7] || (t[7] = (l) => n.handleTypeClick("3"))
      }, [...t[19] || (t[19] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "循环", -1)
      ])], 2),
      t[20] || (t[20] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", ow, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[8] || (t[8] = (l) => n.loop.start = l),
          onInput: t[9] || (t[9] = (l) => n.handleLoopStart("3")),
          min: 1,
          max: 12
        }, null, 544), [
          [Oe, n.loop.start]
        ])
      ]),
      t[21] || (t[21] = u("div", { class: "zmz-cron-datetime__item__text" }, "月开始，每", -1)),
      u("div", rw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[10] || (t[10] = (l) => n.loop.end = l),
          onInput: t[11] || (t[11] = (l) => n.handleLoopEnd("3")),
          min: 1,
          max: 12
        }, null, 544), [
          [Oe, n.loop.end]
        ])
      ]),
      t[22] || (t[22] = u("div", { class: "zmz-cron-datetime__item__text" }, "月执行一次", -1))
    ]),
    u("div", iw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "4" }]),
        onClick: t[12] || (t[12] = (l) => n.handleTypeClick("4"))
      }, [...t[23] || (t[23] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定", -1)
      ])], 2),
      u("div", sw, [
        u("div", uw, [
          (v(), _(G, null, fe(12, (l) => u("div", {
            class: P(["zmz-cron-datetime__item__checkbox", { "zmz-cron-datetime__item__checkbox--active": n.appoint.includes(l) }]),
            key: l,
            onClick: (i) => n.handleMonth("4", l)
          }, [
            t[24] || (t[24] = u("span", { class: "zmz-cron-datetime__item__checkbox__dot" }, null, -1)),
            u("span", cw, Z(l), 1)
          ], 10, dw)), 64))
        ])
      ])
    ])
  ]);
}
const fw = /* @__PURE__ */ H(KC, [["render", mw]]), vw = {
  props: {
    modelValue: {
      type: String,
      default: "*"
    }
  },
  setup(e, { emit: t }) {
    const a = b("1"), n = Le({
      // 周期
      start: 1,
      end: 2
    }), o = Le({
      start: 1,
      end: 4
    }), r = Le({
      // 周期
      start: 1,
      end: 0
    }), l = b(0), i = b(0), s = b([]), d = z({
      get() {
        return e.modelValue;
      },
      set(w) {
        t("update:modelValue", w);
      }
    }), c = () => {
      d.value && (d.value === "?" ? a.value = "5" : d.value.indexOf("-") !== -1 ? d.value.split("-").length === 2 && (a.value = "2", n.start = d.value.split("-")[0], n.end = d.value.split("-")[1]) : d.value.indexOf("/") !== -1 ? d.value.split("/").length === 2 && (a.value = "3", r.start = d.value.split("/")[0], r.end = d.value.split("/")[1]) : d.value.indexOf("*") !== -1 ? a.value = "1" : d.value.indexOf("L") !== -1 ? (a.value = "6", i.value = d.value.replace("L", "")) : d.value.indexOf("#") !== -1 ? d.value.split("#").length === 2 && (a.value = "7", o.start = d.value.split("#")[0], o.end = d.value.split("#")[1]) : d.value.indexOf("W") !== -1 ? (a.value = "8", l.value = d.value.replace("W", "")) : (a.value = "4", s.value = d.value.split(",")));
    }, f = (w) => {
      a.value = w, m();
    }, m = () => {
      let w = [];
      switch (a.value) {
        case "1":
          w.push("*");
          break;
        case "2":
          w.push(`${n.start}-${n.end}`);
          break;
        case "3":
          w.push(`${r.start}/${r.end}`);
          break;
        case "4":
          w.push(s.value.join(","));
          break;
        case "6":
          w.push(`${i.value === 0 ? "" : i.value}L`);
          break;
        case "7":
          w.push(`${o.start}#${o.end}`);
          break;
        default:
          w.push("?");
          break;
      }
      d.value = w.join("");
    };
    return de(() => {
      m(), c();
    }), ue(() => d.value, () => {
      c();
    }), {
      currentType: a,
      cycle: n,
      loop: r,
      work: l,
      week: o,
      last: i,
      appoint: s,
      handleTypeClick: f,
      updateModelValue: c,
      model: d,
      handleCycleStart: (w) => {
        n.start > n.end && (n.start = n.end), a.value = w, m();
      },
      handleCycleEnd: (w) => {
        n.start > n.end && (n.end = n.start), a.value = w, m();
      },
      handleLoopStart: (w) => {
        a.value = w, m();
      },
      handleLoopEnd: (w) => {
        a.value = w, m();
      },
      handleWeekStart: (w) => {
        o.start > o.end && (o.start = o.end), a.value = w, m();
      },
      handleWeekEnd: (w) => {
        o.start > o.end && (o.end = o.start), a.value = w, m();
      },
      handleMonth: (w, O) => {
        let x = s.value.findIndex((D) => D == O);
        x > -1 ? s.value.splice(x, 1) : s.value.push(O), a.value = w, m();
      },
      handleLast: (w) => {
        a.value = w, m();
      }
    };
  }
}, zw = { class: "zmz-cron-datetime" }, _w = { class: "zmz-cron-datetime__item" }, hw = { class: "zmz-cron-datetime__item" }, gw = { class: "zmz-cron-datetime__item" }, yw = { class: "zmz-cron-datetime__item__input" }, pw = { class: "zmz-cron-datetime__item__input" }, bw = { class: "zmz-cron-datetime__item" }, kw = { class: "zmz-cron-datetime__item__input" }, Cw = { class: "zmz-cron-datetime__item__input" }, ww = { class: "zmz-cron-datetime__item" }, Sw = { class: "zmz-cron-datetime__item__input" }, xw = { class: "zmz-cron-datetime__item__input" }, Tw = { class: "zmz-cron-datetime__item" }, Ow = { class: "zmz-cron-datetime__item__input" }, Lw = { class: "zmz-cron-datetime__item zmz-cron-datetime__item__column" }, Dw = { class: "zmz-cron-datetime__item__checkbox__group" }, Mw = { class: "zmz-cron-datetime__item__checkbox__group__item" }, Ew = ["onClick"], Bw = { class: "zmz-cron-datetime__item__checkbox__text" };
function Iw(e, t, a, n, o, r) {
  return v(), _("div", zw, [
    u("div", _w, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[21] || (t[21] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每周", -1)
      ])], 2)
    ]),
    u("div", hw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "5" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("5"))
      }, [...t[22] || (t[22] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "不指定", -1)
      ])], 2)
    ]),
    u("div", gw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[2] || (t[2] = (l) => n.handleTypeClick("2"))
      }, [...t[23] || (t[23] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "从星期", -1)
      ])], 2),
      t[24] || (t[24] = u("div", { class: "zmz-cron-datetime__item__text" }, "从星期", -1)),
      u("div", yw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[3] || (t[3] = (l) => n.cycle.start = l),
          onInput: t[4] || (t[4] = (l) => n.handleCycleStart("2")),
          min: 1,
          max: 7
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[25] || (t[25] = u("div", { class: "zmz-cron-datetime__item__text" }, "至星期", -1)),
      u("div", pw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[5] || (t[5] = (l) => n.cycle.end = l),
          onInput: t[6] || (t[6] = (l) => n.handleCycleEnd("2")),
          min: 1,
          max: 7
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ])
    ]),
    u("div", bw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "3" }]),
        onClick: t[7] || (t[7] = (l) => n.handleTypeClick("3"))
      }, [...t[26] || (t[26] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "循环", -1)
      ])], 2),
      t[27] || (t[27] = u("div", { class: "zmz-cron-datetime__item__text" }, "从星期", -1)),
      u("div", kw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[8] || (t[8] = (l) => n.loop.start = l),
          onInput: t[9] || (t[9] = (l) => n.handleLoopStart("3")),
          min: 1,
          max: 7
        }, null, 544), [
          [Oe, n.loop.start]
        ])
      ]),
      t[28] || (t[28] = u("div", { class: "zmz-cron-datetime__item__text" }, "开始，每", -1)),
      u("div", Cw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[10] || (t[10] = (l) => n.loop.end = l),
          onInput: t[11] || (t[11] = (l) => n.handleLoopEnd("3")),
          min: 1,
          max: 7
        }, null, 544), [
          [Oe, n.loop.end]
        ])
      ]),
      t[29] || (t[29] = u("div", { class: "zmz-cron-datetime__item__text" }, "天执行一次", -1))
    ]),
    u("div", ww, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "7" }]),
        onClick: t[12] || (t[12] = (l) => n.handleTypeClick("7"))
      }, [...t[30] || (t[30] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定周", -1)
      ])], 2),
      t[31] || (t[31] = u("div", { class: "zmz-cron-datetime__item__text" }, "本月第", -1)),
      u("div", Sw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[13] || (t[13] = (l) => n.week.start = l),
          onInput: t[14] || (t[14] = (l) => n.handleWeekStart("7")),
          min: 1,
          max: 4
        }, null, 544), [
          [Oe, n.week.start]
        ])
      ]),
      t[32] || (t[32] = u("div", { class: "zmz-cron-datetime__item__text" }, "周，星期", -1)),
      u("div", xw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[15] || (t[15] = (l) => n.week.end = l),
          onInput: t[16] || (t[16] = (l) => n.handleWeekEnd("7")),
          min: 1,
          max: 7
        }, null, 544), [
          [Oe, n.week.end]
        ])
      ])
    ]),
    u("div", Tw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "6" }]),
        onClick: t[17] || (t[17] = (l) => n.handleTypeClick("6"))
      }, [...t[33] || (t[33] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "本月最后一个", -1)
      ])], 2),
      t[34] || (t[34] = u("div", { class: "zmz-cron-datetime__item__text" }, "星期", -1)),
      u("div", Ow, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[18] || (t[18] = (l) => n.last = l),
          onInput: t[19] || (t[19] = (l) => n.handleLast("6")),
          min: 1,
          max: 7
        }, null, 544), [
          [Oe, n.last]
        ])
      ])
    ]),
    u("div", Lw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "4" }]),
        onClick: t[20] || (t[20] = (l) => n.handleTypeClick("4"))
      }, [...t[35] || (t[35] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "指定", -1)
      ])], 2),
      u("div", Dw, [
        u("div", Mw, [
          (v(), _(G, null, fe(7, (l) => u("div", {
            class: P(["zmz-cron-datetime__item__checkbox", { "zmz-cron-datetime__item__checkbox--active": n.appoint.includes(l) }]),
            key: l,
            onClick: (i) => n.handleMonth("4", l)
          }, [
            t[36] || (t[36] = u("span", { class: "zmz-cron-datetime__item__checkbox__dot" }, null, -1)),
            u("span", Bw, Z(l), 1)
          ], 10, Ew)), 64))
        ])
      ])
    ])
  ]);
}
const Aw = /* @__PURE__ */ H(vw, [["render", Iw]]), Pw = {
  props: {
    modelValue: {
      type: String,
      default: "*"
    }
  },
  setup(e, { emit: t }) {
    const a = (/* @__PURE__ */ new Date()).getFullYear(), n = b("1"), o = Le({
      // 周期
      start: a,
      end: a
    }), r = Le({
      start: 0,
      end: 0
    }), l = Le({
      // 周期
      start: 0,
      end: 0
    }), i = b(0), s = b(0), d = b([]), c = z({
      get() {
        return e.modelValue;
      },
      set(C) {
        t("update:modelValue", C);
      }
    }), f = () => {
      c.value && (c.value === "?" ? n.value = "5" : c.value.indexOf("-") !== -1 ? c.value.split("-").length === 2 && (n.value = "2", o.start = c.value.split("-")[0], o.end = c.value.split("-")[1]) : c.value.indexOf("/") !== -1 ? c.value.split("/").length === 2 && (n.value = "3", l.start = c.value.split("/")[0], l.end = c.value.split("/")[1]) : c.value.indexOf("*") !== -1 ? n.value = "1" : c.value.indexOf("L") !== -1 ? (n.value = "6", s.value = c.value.replace("L", "")) : c.value.indexOf("#") !== -1 ? c.value.split("#").length === 2 && (n.value = "7", r.start = c.value.split("#")[0], r.end = c.value.split("#")[1]) : c.value.indexOf("W") !== -1 ? (n.value = "8", i.value = c.value.replace("W", "")) : (n.value = "4", d.value = c.value.split(",")));
    }, m = (C) => {
      n.value = C, g();
    }, g = () => {
      let C = [];
      switch (n.value) {
        case "1":
          C.push("*");
          break;
        case "2":
          C.push(`${o.start}-${o.end}`);
          break;
        case "3":
          C.push(`${l.start}/${l.end}`);
          break;
        case "4":
          C.push(d.value.join(","));
          break;
        case "6":
          C.push(`${s.value === 0 ? "" : s.value}L`);
          break;
        default:
          C.push("?");
          break;
      }
      c.value = C.join("");
    };
    return de(() => {
      g(), f();
    }), ue(() => c.value, () => {
      f();
    }), {
      currentType: n,
      cycle: o,
      loop: l,
      work: i,
      last: s,
      appoint: d,
      handleTypeClick: m,
      updateModelValue: f,
      model: c,
      handleCycleStart: (C) => {
        o.start > o.end && (o.start = o.end), n.value = C, g();
      },
      handleCycleEnd: (C) => {
        o.start > o.end && (o.end = o.start), n.value = C, g();
      }
    };
  }
}, Nw = ["val"], Vw = { class: "zmz-cron-datetime__item" }, Fw = { class: "zmz-cron-datetime__item" }, Rw = { class: "zmz-cron-datetime__item" }, Zw = { class: "zmz-cron-datetime__item__input" }, Ww = { class: "zmz-cron-datetime__item__input" };
function $w(e, t, a, n, o, r) {
  return v(), _("div", {
    class: "zmz-cron-datetime",
    val: n.model
  }, [
    u("div", Vw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "1" }]),
        onClick: t[0] || (t[0] = (l) => n.handleTypeClick("1"))
      }, [...t[7] || (t[7] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "每年", -1)
      ])], 2)
    ]),
    u("div", Fw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "5" }]),
        onClick: t[1] || (t[1] = (l) => n.handleTypeClick("5"))
      }, [...t[8] || (t[8] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "不指定", -1)
      ])], 2)
    ]),
    u("div", Rw, [
      u("div", {
        class: P(["zmz-cron-datetime__item__radio", { "zmz-cron-datetime__item__radio--active": n.currentType == "2" }]),
        onClick: t[2] || (t[2] = (l) => n.handleTypeClick("2"))
      }, [...t[9] || (t[9] = [
        u("span", { class: "zmz-cron-datetime__item__radio__dot" }, null, -1),
        u("span", { class: "zmz-cron-datetime__item__radio__text" }, "周期", -1)
      ])], 2),
      t[10] || (t[10] = u("div", { class: "zmz-cron-datetime__item__text" }, "从", -1)),
      u("div", Zw, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[3] || (t[3] = (l) => n.cycle.start = l),
          onInput: t[4] || (t[4] = (l) => n.handleCycleStart("2")),
          min: 2e3
        }, null, 544), [
          [Oe, n.cycle.start]
        ])
      ]),
      t[11] || (t[11] = u("div", { class: "zmz-cron-datetime__item__text" }, "年至", -1)),
      u("div", Ww, [
        re(u("input", {
          class: "zmz-cron-datetime__item__input__inner",
          type: "number",
          "onUpdate:modelValue": t[5] || (t[5] = (l) => n.cycle.end = l),
          onInput: t[6] || (t[6] = (l) => n.handleCycleEnd("2")),
          min: 2e3
        }, null, 544), [
          [Oe, n.cycle.end]
        ])
      ]),
      t[12] || (t[12] = u("div", { class: "zmz-cron-datetime__item__text" }, "年", -1))
    ])
  ], 8, Nw);
}
const jw = /* @__PURE__ */ H(Pw, [["render", $w]]), Hw = {
  name: "ZmzCron",
  components: {
    minute: tC,
    hour: MC,
    day: XC,
    month: fw,
    week: Aw,
    year: jw,
    second: _C
  },
  props: {
    modelValue: {
      type: String,
      default: "* * * * * * *"
    }
  },
  setup(e, { emit: t }) {
    const a = b("second"), n = b("*"), o = b("*"), r = b("*"), l = b("*"), i = b("*"), s = b("*"), d = b("*"), c = b([]), f = (h) => {
      a.value = h;
    };
    de(() => {
      g();
    });
    const m = z({
      get() {
        return e.modelValue;
      },
      set(h) {
        t("update:modelValue", h);
      }
    }), g = () => {
      if (!m.value)
        return;
      let h = m.value.split(" ");
      n.value = h[0], o.value = h[1], r.value = h[2], l.value = h[3], i.value = h[4], s.value = h[5], d.value = h[6];
    };
    return ue(() => m.value, () => {
      g();
    }), ue([() => n.value, () => o.value, () => r.value, () => l.value, () => i.value, () => s.value, () => d.value], () => {
      if (c.value = [{
        secondValue: n.value,
        minuteValue: o.value,
        hourValue: r.value,
        dayValue: l.value,
        monthValue: i.value,
        weekValue: s.value,
        yearValue: d.value
      }], !l.value && !s.value)
        return "";
      l.value === "?" && s.value === "?" && console.error("日期与星期不可以同时为“不指定”"), l.value !== "?" && s.value !== "?" && console.error("日期与星期必须有一个为“不指定”");
      let h = `${n.value} ${o.value} ${r.value} ${l.value} ${i.value} ${s.value} ${d.value}`;
      h !== m.value && (m.value = h);
    }), {
      secondValue: n,
      minuteValue: o,
      hourValue: r,
      dayValue: l,
      monthValue: i,
      weekValue: s,
      yearValue: d,
      currentTabs: a,
      handleHeaderTabs: f,
      tableData: c
    };
  }
}, Yw = { class: "zmz-cron" }, qw = { class: "zmz-cron__tabs" }, Uw = { class: "zmz-cron__tabs__header" }, Gw = { class: "zmz-cron__tabs__section" }, Xw = { class: "zmz-cron__tabs__section__item" }, Kw = { class: "zmz-cron__tabs__section__item" }, Qw = { class: "zmz-cron__tabs__section__item" }, Jw = { class: "zmz-cron__tabs__section__item" }, eS = { class: "zmz-cron__tabs__section__item" }, tS = { class: "zmz-cron__tabs__section__item" }, nS = { class: "zmz-cron__tabs__section__item" }, aS = {
  border: "0",
  cellspacing: "0",
  cellpadding: "0",
  class: "zmz-cron__table"
}, lS = { class: "zmz-cron__table__tbody" }, oS = { class: "zmz-cron__table__tbody__tr__td" }, rS = { class: "zmz-cron__table__tbody__tr__td" }, iS = { class: "zmz-cron__table__tbody__tr__td" }, sS = { class: "zmz-cron__table__tbody__tr__td" }, uS = { class: "zmz-cron__table__tbody__tr__td" }, dS = { class: "zmz-cron__table__tbody__tr__td" }, cS = { class: "zmz-cron__table__tbody__tr__td" };
function mS(e, t, a, n, o, r) {
  const l = oe("second"), i = oe("minute"), s = oe("hour"), d = oe("day"), c = oe("week"), f = oe("month"), m = oe("year");
  return v(), _("div", Yw, [
    u("div", qw, [
      u("div", Uw, [
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "second" }]),
          onClick: t[0] || (t[0] = (g) => n.handleHeaderTabs("second"))
        }, [...t[14] || (t[14] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "秒", -1)
        ])], 2),
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "minute" }]),
          onClick: t[1] || (t[1] = (g) => n.handleHeaderTabs("minute"))
        }, [...t[15] || (t[15] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "分", -1)
        ])], 2),
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "hour" }]),
          onClick: t[2] || (t[2] = (g) => n.handleHeaderTabs("hour"))
        }, [...t[16] || (t[16] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "时", -1)
        ])], 2),
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "day" }]),
          onClick: t[3] || (t[3] = (g) => n.handleHeaderTabs("day"))
        }, [...t[17] || (t[17] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "日", -1)
        ])], 2),
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "week" }]),
          onClick: t[4] || (t[4] = (g) => n.handleHeaderTabs("week"))
        }, [...t[18] || (t[18] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "周", -1)
        ])], 2),
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "month" }]),
          onClick: t[5] || (t[5] = (g) => n.handleHeaderTabs("month"))
        }, [...t[19] || (t[19] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "月", -1)
        ])], 2),
        u("div", {
          class: P(["zmz-cron__tabs__header__item", { "zmz-cron__tabs__header__item--active": n.currentTabs == "year" }]),
          onClick: t[6] || (t[6] = (g) => n.handleHeaderTabs("year"))
        }, [...t[20] || (t[20] = [
          u("span", { class: "zmz-cron__tabs__header__item__text" }, "年", -1)
        ])], 2)
      ]),
      u("div", Gw, [
        re(u("div", Xw, [
          K(l, {
            modelValue: n.secondValue,
            "onUpdate:modelValue": t[7] || (t[7] = (g) => n.secondValue = g),
            lable: "秒"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "second"]
        ]),
        re(u("div", Kw, [
          K(i, {
            modelValue: n.minuteValue,
            "onUpdate:modelValue": t[8] || (t[8] = (g) => n.minuteValue = g),
            lable: "分"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "minute"]
        ]),
        re(u("div", Qw, [
          K(s, {
            modelValue: n.hourValue,
            "onUpdate:modelValue": t[9] || (t[9] = (g) => n.hourValue = g),
            lable: "时"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "hour"]
        ]),
        re(u("div", Jw, [
          K(d, {
            modelValue: n.dayValue,
            "onUpdate:modelValue": t[10] || (t[10] = (g) => n.dayValue = g),
            lable: "日"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "day"]
        ]),
        re(u("div", eS, [
          K(c, {
            modelValue: n.weekValue,
            "onUpdate:modelValue": t[11] || (t[11] = (g) => n.weekValue = g),
            lable: "周"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "week"]
        ]),
        re(u("div", tS, [
          K(f, {
            modelValue: n.monthValue,
            "onUpdate:modelValue": t[12] || (t[12] = (g) => n.monthValue = g),
            lable: "月"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "month"]
        ]),
        re(u("div", nS, [
          K(m, {
            modelValue: n.yearValue,
            "onUpdate:modelValue": t[13] || (t[13] = (g) => n.yearValue = g),
            lable: "年"
          }, null, 8, ["modelValue"])
        ], 512), [
          [Be, n.currentTabs == "year"]
        ])
      ])
    ]),
    u("table", aS, [
      t[21] || (t[21] = u("thead", { class: "zmz-cron__table__thead" }, [
        u("tr", { class: "zmz-cron__table__thead__tr" }, [
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "秒"),
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "分"),
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "时"),
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "日"),
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "月"),
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "周"),
          u("th", { class: "zmz-cron__table__thead__tr__th" }, "年")
        ])
      ], -1)),
      u("tbody", lS, [
        (v(!0), _(G, null, fe(n.tableData, (g, h) => (v(), _("tr", {
          class: "zmz-cron__table__tbody__tr",
          key: h
        }, [
          u("td", oS, Z(g.secondValue), 1),
          u("td", rS, Z(g.minuteValue), 1),
          u("td", iS, Z(g.hourValue), 1),
          u("td", sS, Z(g.dayValue), 1),
          u("td", uS, Z(g.monthValue), 1),
          u("td", dS, Z(g.weekValue), 1),
          u("td", cS, Z(g.yearValue), 1)
        ]))), 128))
      ])
    ])
  ]);
}
const Cl = /* @__PURE__ */ H(Hw, [["render", mS]]);
Cl.install = function(e) {
  e.component(Cl.name, Cl);
};
const fS = rt({
  name: "ZmzBarrage",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    //循环播放
    loop: {
      type: Boolean,
      default: !1
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: !0
    },
    // 速度
    speeds: {
      type: Number,
      default: 200
    },
    // 轨道数
    tracks: {
      type: Number,
      default: 3
    },
    offsetRight: {
      type: Number,
      default: 10
    },
    // 偏移
    offsetTop: {
      type: Number,
      default: 10
    },
    // 默认字号
    fontSize: {
      type: Number,
      default: 18
    },
    // 默认颜色
    color: {
      type: String,
      default: "#000"
    },
    //刷新频率
    debounce: {
      type: Number,
      default: 0
    },
    //使用htm1
    useHtml: {
      type: Boolean,
      default: !1
    },
    // 是否开启悬浮暂停
    suspend: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["on-barrage-track-change", "on-barrage-loop", "on-barrage-item-mousemove", "on-barrage-item-mouseout", "on-barrage-item-loop-end", "on-barrage-item-end", "on-barrage-end"],
  setup(e, { emit: t, slots: a }) {
    const n = b(null), o = b(0), r = b([]), l = b([]), i = b(null), s = b(!1), d = b(!1);
    de(() => {
      c();
    }), Ze(() => {
      S();
    }), ue(() => e.tracks, () => {
      m();
    }), ue(() => e.data, (T) => {
      l.value = [...T];
    }, { immediate: !0 });
    const c = () => {
      f(), e.autoplay && g();
    }, f = () => {
      for (let T = 0; T < e.tracks; T++)
        r.value[T] = [];
    }, m = () => {
      if (r.value.length > e.tracks) {
        let T = r.value.length - e.tracks;
        r.value = r.value.splice(T);
      } else if (r.value.length < e.tracks) {
        let T = e.tracks - r.value.length;
        r.value = r.value.concat(new Array(T).fill([]));
      }
      t("on-barrage-track-change", e.tracks);
    }, g = () => {
      S(), L(), s.value = !1, Math.abs(e.debounce) == 0 ? i.value = requestAnimationFrame(g.bind(this)) : i.value = setTimeout(() => {
        g();
      }, Math.abs(e.debounce));
    }, h = () => {
      s.value = !0, S();
    }, y = () => {
      s.value = !1, o.value = 0, S(), f(), Se(() => {
        n.value.innerHTML = "";
      });
    }, C = () => {
      d.value = !1;
    }, k = () => {
      d.value = !0;
    }, S = () => {
      i.value && (Math.abs(e.debounce) == 0 ? cancelAnimationFrame(i.value) : (clearTimeout(i.value), i.value = null));
    }, L = () => {
      e.loop && l.value.length - o.value && (t("on-barrage-loop", o.value), o.value = 0), p();
    }, p = (T) => {
      let I = e.loop ? o.value % l.value.length : o.value, V = l.value[I];
      V && V.content && Se(() => {
        if (n.value) {
          let W = B();
          if (W > -1) {
            let $ = document.createElement("div");
            if (a.default ? $ = w(V, I) : (e.useHtml, $.innerHTML = V.content), $.classList.add("zmz-barrage__item"), n.value.appendChild($), r.value[W].push($), $.classList.add("zmz-barrage__item--move"), $.style.fontSize = `${e.fontSize}px`, $.style.color = `${e.color}`, V.style != null && V.style != null && Object.keys(V.style).length)
              for (const ve in V.style)
                $.style[ve] = V.style[ve];
            let X = $.offsetHeight, ee = $.offsetWidth, J = n.value.offsetWidth;
            typeof V.height == "number" && (X = V.height);
            let q = (J + ee) / e.speeds;
            V.speeds && typeof V.speeds == "number" && (q = (J + ee) / (e.speeds + parseFloat(V.speeds))), $.style.height = `${X}px`, $.style.top = `${W * (X + e.offsetTop)}px`, $.style.width = `${ee}px`, $.style.setProperty("--zmz-barrage-item-move-width", `-${J + ee}px`), $.style.animationDuration = `${q}s`, $.dataset.index = o.value, $.dataset.itemspeeds = V.speeds ? V.speeds : "", e.suspend && $.addEventListener("mousemove", (ve) => {
              O(ve, $);
            }), e.suspend && $.addEventListener("mouseout", (ve) => {
              x(ve, $);
            }), $.addEventListener("animationend", (ve) => {
              D(ve, $);
            }), o.value++;
          }
        }
      });
    }, w = (T, I) => {
      const W = Rr({
        render() {
          return ie("div", {}, [
            a.default && a.default({
              node: T,
              index: I
            })
          ]);
        }
      }).mount(document.createElement("div"));
      return W && W.$el;
    }, O = (T, I) => {
      I.classList.add("zmz-barrage__item--paused"), t("on-barrage-item-mousemove", T, I);
    }, x = (T, I) => {
      I.classList.remove("zmz-barrage__item--paused"), t("on-barrage-item-mouseout", T, I);
    }, D = (T, I) => {
      e.loop ? t("on-barrage-item-loop-end", T, I.dataset.index) : t("on-barrage-item-end", T, I.dataset.index), o.value == l.value.length - 1 && !e.loop && t("on-barrage-end", T, I.dataset.index);
      for (let V = 0; V < r.value.length; V++)
        for (let W = 0; W < r.value[V].length; W++)
          if (r.value[V][W] == I) {
            r.value[V].splice(W, 1);
            break;
          }
      e.suspend && I.removeEventListener("mousemove", (V) => {
        O(V, I);
      }), e.suspend && I.removeEventListener("mouseout", (V) => {
        x(V, I);
      }), I.removeEventListener("animationend", (V) => {
        D(V, I);
      }), n.value.removeChild(I);
    }, M = (T) => {
      if (o.value == l.value.length)
        return l.value.push(T), l.value.length - 1;
      {
        const I = I.value % l.value.length;
        return l.value.splice(I, 0, T), I + 1;
      }
    }, R = (T) => (l.value.push(T), l.value.length - 1), B = () => {
      for (let T = 0; T < r.value.length; T++) {
        let I = r.value[T];
        if (I && I.length)
          for (let V = 0; V < I.length; V++) {
            let W = I[I.length - 1];
            if (F(W) - e.offsetRight <= 0)
              break;
            if (V === I.length - 1)
              return T % e.tracks;
          }
        else
          return T % e.tracks;
      }
      return -1;
    }, F = (T) => n.value.getBoundingClientRect().right - T.getBoundingClientRect().right;
    return {
      zmzBarrageWrap: n,
      hidden: d,
      pause: h,
      show: C,
      reset: y,
      hide: k,
      addcurrent: M,
      addEnd: R,
      resize: () => {
        Se(() => {
          if (n.value) {
            const T = n.value.children, I = n.value.offsetWidth;
            console.log(T);
            for (let V = 0; V < T.length; V++) {
              const W = T[V];
              W.style.setProperty("--zmz-barrage-item-move-width", `-${I + W.offsetWidth}px`);
              let $ = (I + W.offsetWidth) / W.dataset.itemspeeds;
              parseFloat(W.dataset.itemspeeds) && ($ = (I + W.offsetWidth) / (e.speeds + parseFloat(W.dataset.itemspeeds))), W.style.animationDuration = `${$}s`;
            }
          }
        });
      },
      clearTimer: S,
      paused: s
    };
  }
}), vS = {
  class: "zmz-barrage__wrap",
  ref: "zmzBarrageWrap"
};
function zS(e, t, a, n, o, r) {
  return v(), _("div", {
    class: P(["zmz-barrage", { "zmz-barrage--paused": e.paused, "zmz -barrage-hidden": e.hidden }])
  }, [
    u("div", vS, null, 512)
  ], 2);
}
const wl = /* @__PURE__ */ H(fS, [["render", zS]]);
wl.install = function(e) {
  e.component(wl.name, wl);
};
const Sl = rt({
  name: "ZmzTransitionCollapse",
  setup(e, { slots: t }) {
    const a = (s) => {
      s.classList.add("zmz-transition-collapse"), s.dataset || (s.dataset = {}), s.dataset.oldPaddingTop = s.style.paddingTop, s.dataset.oldPaddingBottom = s.style.paddingBottom, s.style.height = "0", s.style.paddingTop = 0, s.style.paddingBottom = 0;
    }, n = (s) => {
      s.dataset.oldOverflow = s.style.overflow, s.scrollHeight !== 0 ? (s.style.height = s.scrollHeight + "px", s.style.paddingTop = s.dataset.oldPaddingTop, s.style.paddingBottom = s.dataset.oldPaddingBottom) : (s.style.height = "", s.style.paddingTop = s.dataset.oldPaddingTop, s.style.paddingBottom = s.dataset.oldPaddingBottom), s.style.overflow = "hidden";
    }, o = (s) => {
      s.classList.remove("zmz-transition-collapse"), s.style.height = "", s.style.overflow = s.dataset.oldOverflow;
    }, r = (s) => {
      s.dataset || (s.dataset = {}), s.dataset.oldPaddingTop = s.style.paddingTop, s.dataset.oldPaddingBottom = s.style.paddingBottom, s.dataset.oldOverflow = s.style.overflow, s.style.height = s.scrollHeight + "px", s.style.overflow = "hidden";
    }, l = (s) => {
      s.scrollHeight !== 0 && (s.classList.add("zmz-transition-collapse"), s.style.height = 0, s.style.paddingTop = 0, s.style.paddingBottom = 0);
    }, i = (s) => {
      s.classList.remove("zmz-transition-collapse"), s.style.height = "", s.style.overflow = s.dataset.oldOverflow, s.style.paddingTop = s.dataset.oldPaddingTop, s.style.paddingBottom = s.dataset.oldPaddingBottom;
    };
    return () => ie(Ve, {
      onBeforeEnter: a,
      onEnter: n,
      onAfterEnter: o,
      onBeforeLeave: r,
      onLeave: l,
      onAfterLeave: i
    }, t.default);
  }
});
Sl.install = function(e) {
  e.component(Sl.name, Sl);
};
const fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZmzAlbum: el,
  ZmzAlert: Zn,
  ZmzAmount: kl,
  ZmzAnchor: nl,
  ZmzAnchorItem: al,
  ZmzAudio: gl,
  ZmzAvatar: Ka,
  ZmzAvatarGroup: Qa,
  ZmzBacktop: _l,
  ZmzBadge: $a,
  ZmzBarrage: wl,
  ZmzBook: pl,
  ZmzBreadcrumb: aa,
  ZmzBreadcrumbItem: la,
  ZmzButton: xt,
  ZmzButtonGroup: xn,
  ZmzCalendar: Kn,
  ZmzCard: Bn,
  ZmzCarousel: jn,
  ZmzCarouselItem: Hn,
  ZmzCascader: pa,
  ZmzCascaderItem: ba,
  ZmzCascaderPanel: ka,
  ZmzCell: An,
  ZmzCheckbox: Ot,
  ZmzCheckboxGroup: _a,
  ZmzCol: Dn,
  ZmzCollapse: Fa,
  ZmzCollapseItem: Ra,
  ZmzColorPicker: La,
  ZmzComment: Na,
  ZmzCommentItem: Va,
  ZmzContainer: Fn,
  ZmzCopy: Gb,
  ZmzCron: Cl,
  ZmzDatePicker: Oa,
  ZmzDescriptions: ll,
  ZmzDescriptionsItem: ol,
  ZmzDivider: qa,
  ZmzDrawer: qn,
  ZmzDropdown: oa,
  ZmzDropdownItem: ra,
  ZmzDropdownMenu: ia,
  ZmzEmpty: Wa,
  ZmzFloatbutton: Tn,
  ZmzFloatbuttonItem: Jt,
  ZmzForm: Ca,
  ZmzFormItem: Sa,
  ZmzGraphic: Pn,
  ZmzGraphicImage: Nn,
  ZmzGraphicText: Vn,
  ZmzGrid: Mn,
  ZmzGridItem: En,
  ZmzIcon: On,
  ZmzImage: Ja,
  ZmzImagePreview: dn,
  ZmzInput: _t,
  ZmzInputnumber: ma,
  ZmzInputtag: fa,
  ZmzLazyload: er,
  ZmzLink: Ua,
  ZmzLoading: to,
  ZmzLoadingBar: bs,
  ZmzLoadingDirective: Jo,
  ZmzLoadingEvent: vs,
  ZmzLoadmore: Ga,
  ZmzLoupe: ul,
  ZmzMenu: Jn,
  ZmzMenuItem: ea,
  ZmzMenuItemGroup: na,
  ZmzMenuSubmenu: ta,
  ZmzMessage: nr,
  ZmzMessageBox: hu,
  ZmzMetaInfo: Ho,
  ZmzModel: Yn,
  ZmzMusic: hl,
  ZmzNetwork: Xr,
  ZmzNotice: ar,
  ZmzNumberdynamic: ml,
  ZmzPagecontent: zl,
  ZmzPagefooter: fl,
  ZmzPageheader: vl,
  ZmzPagination: Ea,
  ZmzPopover: Xn,
  ZmzProgress: Pa,
  ZmzRadio: nn,
  ZmzRadioGroup: za,
  ZmzRate: Da,
  ZmzResult: Za,
  ZmzRow: Ln,
  ZmzScroll: Ya,
  ZmzScrollbar: il,
  ZmzSelect: Ft,
  ZmzSelectOption: Rt,
  ZmzSelectOptionGroup: ga,
  ZmzShowMore: Rn,
  ZmzShutters: dl,
  ZmzShuttersItem: cl,
  ZmzSigned: sl,
  ZmzSkeleton: Ha,
  ZmzSkeletonItem: un,
  ZmzSlider: on,
  ZmzSpace: tl,
  ZmzSpaceItem: Zt,
  ZmzSplit: Qn,
  ZmzStep: sa,
  ZmzStepItem: ua,
  ZmzSticky: Xa,
  ZmzSwitch: ha,
  ZmzTabItems: ca,
  ZmzTable: Ia,
  ZmzTableColumn: Aa,
  ZmzTabs: da,
  ZmzTag: In,
  ZmzTextarea: va,
  ZmzTime: rl,
  ZmzTimeaxis: Wn,
  ZmzTimeaxisItem: $n,
  ZmzTimepicker: ln,
  ZmzToast: $s,
  ZmzTooltip: Gn,
  ZmzTransfer: Ma,
  ZmzTransitionCollapse: Sl,
  ZmzTree: Ba,
  ZmzUpload: ya,
  ZmzVideo: yl,
  ZmzWaterfall: ja,
  ZmzWaterfallItem: sn,
  ZmzWatermark: bl
}, Symbol.toStringTag, { value: "Module" })), _S = {
  mounted(e, t) {
    e.__vueClickOutside__ = (a) => {
      if (a.stopPropagation(), e && !e.contains(a.target)) {
        let n = t.value;
        n(a);
      }
    }, document.addEventListener("click", e.__vueClickOutside__);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e.__vueClickOutside__), e.__vueClickOutside__ = null;
  }
}, hS = {
  beforeMount(e, t, a) {
    let n = (l, i) => l.tagName.toLowerCase() === i ? l : l.querySelector(i), o = (l, i) => {
      const s = document.createEvent("HTMLEvents");
      s.initEvent(i, !0, !0), l.dispatchEvent(s);
    }, r = n(e, "input");
    r.addEventListener("compositionstart", () => {
      a.inputLocking = !0;
    }), r.addEventListener("compositionend", () => {
      a.inputLocking = !1, r.dispatchEvent(new Event("input"));
    }), r.addEventListener("input", () => {
      if (a.inputLocking)
        return;
      let l = r.value, i = r.value;
      if (t.modifiers.float) {
        if (i = i.replace(/[^\d.]/g, ""), i = i.replace(/\.{2,}/g, "."), i = i.replace(/^\./g, "0."), i = i.replace(/^0{2,}/g, "0"), /^0\d+/.test(i) && (i = i.slice(1)), i = i.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), typeof t.value < "u") {
          let s = 0;
          if ((typeof t.value == "string" || typeof t.value == "number") && (s = parseInt(t.value)), !isNaN(s)) {
            (!Number.isInteger(s) || s < 0) && (s = 0);
            const d = "^(\\d+)\\.(\\d{" + s + "}).*$", c = new RegExp(d);
            s === 0 ? i = i.replace(c, "$1") : i = i.replace(c, "$1.$2");
          }
        }
      } else
        i = i.replace(/[^\d]/g, ""), i = i ? parseInt(i) : "";
      +i != +l && (r.value = i, o(r, "input"));
    });
  }
}, gS = {
  mounted(e, t) {
    var a = !0;
    t.modifiers.button && (e.disabled = !1), e.__vuePreventReClick__ = () => {
      if (a) {
        let n = t.value;
        n(), t.modifiers.button && (e.disabled = !0), a = !1, e.timeId = setTimeout(() => {
          t.modifiers.button && (e.disabled = !1), a = !0, clearTimeout(e.timeId);
        }, 1e3);
      }
    }, e.addEventListener("click", e.__vuePreventReClick__);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e.__vuePreventReClick__), e.__vuePreventReClick__ = null;
  }
}, yS = {
  mounted(e, t) {
    var a = 0, n = 0, o = 0, r = 0, l = !1, i = null, s = t.instance.$zmzConfig || 2e3;
    e.__vueFreedragDown__ = (d) => {
      if (!t.value) return;
      d.stopPropagation && d.stopPropagation(), d.preventDefault && d.preventDefault();
      let c = e.getBoundingClientRect();
      a = d.pageX - c.left, n = d.pageY - c.top, o = c.width, r = c.height, l = !0, e.style.cursor = "move", window.addEventListener("mousemove", e.__vueFreedragMove__), window.addEventListener("mouseup", e.__vueFreedragUp__);
    }, e.__vueFreedragMove__ = (d) => {
      if (l) {
        !i && t.modifiers.seat && (i = document.createElement("div"), i.style.width = o + "px", i.style.height = r + "px", e.parentNode.appendChild(i));
        let c = d.pageX - a, f = d.pageY - n;
        e.style.position = "fixed", e.style.left = c + "px", e.style.top = f + "px", e.style.transition = "initial", e.style.zIndex = s.zIndex;
      }
    }, e.__vueFreedragUp__ = () => {
      l = !1, e.__vueFreedragDown__ = null, e.__vueFreedragMove__ = null;
    }, e.addEventListener("mousedown", e.__vueFreedragDown__);
  },
  unmounted: function(e) {
    window.removeEventListener("mousedown", e.__vueFreedragDown__), window.removeEventListener("mousemove", e.__vueFreedragMove__), window.removeEventListener("mouseup", e.__vueFreedragUp__), e.__vueFreedragDown__ = null, e.__vueFreedragMove__ = null, e.__vueFreedragUp__ = null;
  }
}, pS = {
  mounted(e, t) {
    const a = e.getAttribute("zmzcopy-tips") || "复制成功", n = e.getAttribute("zmzcopy-tips-type") || "success", o = e.getAttribute("zmzcopy-text") || t.value;
    e.__vueCopy__ = () => {
      var r = document.createElement("input");
      document.body.appendChild(r), r.value = o, r.select(), document.execCommand("copy", !1), r.remove(), t.instance && t.instance.$message ? t.instance.$message[n](a) : alert(a);
    }, e.addEventListener("click", e.__vueCopy__);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e.__vueCopy__), e.__vueCopy__ = null;
  }
}, bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  zmzclickoutside: _S,
  zmzcopy: pS,
  zmzfreedrag: yS,
  zmzpreventreclick: gS,
  zmzverifynumber: hS
}, Symbol.toStringTag, { value: "Module" }));
class kS {
  browser() {
    let t = {};
    var a = navigator.userAgent.toLowerCase(), n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let o = a.indexOf("chrome") > -1 && a.indexOf("safari") > -1, r = /chrome\/[\d.]+/gi, l = a.match(r);
    t.Chrome = {
      name: "chrome浏览器",
      is: o,
      v: l && l.toString()
    };
    let i = a.indexOf("safari") > -1 && a.indexOf("chrome") == -1, s = /safari\/[\d.]+/gi, d = a.match(s);
    t.Safari = {
      name: "safari浏览器",
      is: i,
      v: d && d.toString()
    };
    let c = a.indexOf("firefox") > -1, f = /firefox\/[\d.]+/gi, m = a.match(f);
    t.Firefox = {
      name: "firefox浏览器",
      is: c,
      v: m && m.toString()
    };
    let g = a.indexOf("opera") > -1, h = /chrome\/[\d.]+/gi, y = a.match(h);
    t.Opera = {
      name: "opera浏览器",
      is: g,
      v: y && y.toString()
    };
    var C = a.indexOf("compatible") > -1 && a.indexOf("msie") > -1 && !a.indexOf("opera") > -1, k = new RegExp("msie (\\d+\\.\\d+);");
    k.test(a);
    var S = parseFloat(RegExp.$1);
    t.IE = {
      name: "ie浏览器",
      is: C,
      v: ""
    }, t.IE7 = {
      name: "ie7浏览器",
      is: C && S == 7,
      v: ""
    }, t.IE8 = {
      name: "ie8浏览器",
      is: C && S == 8,
      v: ""
    }, t.IE9 = {
      name: "ie9浏览器",
      is: C && S == 9,
      v: ""
    }, t.IE10 = {
      name: "ie10浏览器",
      is: C && S == 10,
      v: ""
    }, t.IE11 = {
      name: "ie11浏览器",
      is: a.indexOf("trident") > -1 && a.indexOf("rv:11.0") > -1,
      v: ""
    }, t.Mobile = {
      name: "mobile",
      is: !!a.match(/applewebkit.*mobile.*/)
    }, t.IPhone = {
      name: "iphone",
      is: a.indexOf("iphone") > -1
    }, t.IPhoneSE = {
      name: "iphonese",
      is: a.indexOf("iphone") > -1 && n == 375
    }, t.IPhone11 = {
      name: "iphone11",
      is: a.indexOf("iphone") > -1 && n == 414
    }, t.IPhone12Pro = {
      name: "iphone12pro",
      is: a.indexOf("iphone") > -1 && n == 390
    };
    let L = a.indexOf("windows nt 6.1; trident/7.0;") > -1 && !(a.indexOf("compatible") > -1 && a.indexOf(
      "msie"
    ) > -1) || a.indexOf("edg") > -1, p = /edg\/[\d.]+/gi, w = a.match(p);
    return t.Edge = {
      name: "edge浏览器",
      is: L,
      v: w && w.toString()
    }, t.Trident = {
      name: "ie内核",
      is: a.indexOf("trident") > -1
    }, t.Presto = {
      name: "opera内核",
      is: a.indexOf("presto") > -1
    }, t.WebKit = {
      name: "苹果、谷歌内核",
      is: a.indexOf("applewebkit") > -1
    }, t.Gecko = {
      name: "火狐内核",
      is: a.indexOf("gecko") > -1 && a.indexOf("khtml") === -1
    }, t.Ios = {
      name: "ios终端",
      is: !!a.match(/\(i[^;]+;( U;)? cpu.+mac os x/)
    }, t.Android = {
      name: "android终端",
      is: a.indexOf("android") > -1 || a.indexOf("adr") > -1
    }, t.IPad = {
      name: "ipad平板",
      is: a.indexOf("ipad") > -1
    }, t.WebApp = {
      name: "webapp",
      is: a.indexOf("safari") === -1
    }, t.Weixin = {
      name: "微信",
      is: a.indexOf("micromessenger") > -1
    }, t.Qq = {
      name: "qq",
      is: a.match(/\bqq\b/i) == "qq"
    }, t.Wechatdevtools = {
      name: "微信开发者工具",
      is: a.indexOf("wechatdevtools") > -1
    }, t.Qqbrowser = {
      name: "qq浏览器",
      is: a.indexOf("mqqbrowser") > -1
    }, t.Ucbrowser = {
      name: "uc浏览器",
      is: a.indexOf("ucbrowser") > -1
    }, t.Baiduapp = {
      name: "百度app",
      is: a.indexOf("baiduboxapp") > -1
    }, t.Miuibrowser = {
      name: "小米浏览器",
      is: a.indexOf("miuibrowser") > -1
    }, t;
  }
}
let CS = (e) => new kS(e);
const wS = (e, t = "image/jpeg", a = 4e6, n = 0.5) => {
  let o = document.createElement("canvas"), r = o.getContext("2d"), l = document.createElement("canvas"), i = l.getContext("2d"), s = e.width, d = e.height, c;
  (c = s * d / a) > 1 ? (c = Math.sqrt(c), s /= c, d /= c) : c = 1, o.width = s, o.height = d, r.fillStyle = "#fff", r.fillRect(0, 0, o.width, o.height);
  let f;
  if ((f = s * d / 1e6) > 1) {
    f = ~~(Math.sqrt(f) + 1);
    let g = ~~(s / f), h = ~~(d / f);
    l.width = g, l.height = h;
    for (let y = 0; y < f; y++)
      for (let C = 0; C < f; C++)
        i.drawImage(e, y * g * c, C * h * c, g * c, h * c, 0, 0, g, h), r.drawImage(l, y * g, C * h, g, h);
  } else
    r.drawImage(e, 0, 0, s, d);
  let m = o.toDataURL(t, n);
  return l.width = l.height = o.width = o.height = 0, m;
}, SS = (e, t = "base64") => {
  for (var a = e.split(","), n = a[0].match(/:(.*?);/)[1], o = Buffer.from(a[1]).toString("base64"), r = o.length, l = new Uint8Array(r); r--; )
    l[r] = o.charCodeAt(r);
  return new File([l], t, {
    type: n
  });
}, xS = (e) => {
  var t;
  e.split(",")[0].indexOf("base64") >= 0 ? t = Buffer.from(e.split(",")[1]).toString("base64") : t = decodeURIComponent(e.split(",")[1]);
  for (var a = e.split(",")[0].split(":")[1].split(";")[0], n = new Uint8Array(t.length), o = 0; o < t.length; o++)
    n[o] = t.charCodeAt(o);
  return new Blob([n], {
    type: a,
    name: "123"
  });
}, TS = (e) => new Promise((t) => {
  const a = new FileReader();
  a.readAsDataURL(e), a.onload = () => {
    t(a.result);
  }, a.onerror = (n) => {
    t(n);
  };
}), OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64ToBlob: xS,
  base64ToFile: SS,
  fileToBase64: TS,
  imageCompress: wS
}, Symbol.toStringTag, { value: "Module" })), LS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: jg,
  color: mh,
  date: nz,
  file: OS,
  find: Js,
  image: mp,
  media: B1,
  unit: Kr,
  utils: Ah
}, Symbol.toStringTag, { value: "Module" })), DS = "0.0.2", Br = {
  version: DS
}, MS = {
  size: "",
  zIndex: 2e3
}, ES = {
  $copy: "ZmzCopy",
  $network: "ZmzNetwork",
  $loading: "ZmzLoadingEvent",
  $loadingbar: "ZmzLoadingBar",
  $message: "ZmzMessage",
  $toast: "ZmzToast",
  $messageBox: "ZmzMessageBox",
  $notice: "ZmzNotice"
}, BS = (e = {}, t) => ({
  ...t,
  ...e,
  // 确保 zIndex 是数字类型
  zIndex: Number(e.zIndex) || t.zIndex
}), IS = (e, t) => {
  Object.values(fo).forEach((a) => {
    a && a.install ? e.use(a, t) : a && a.name && e.component(a.name, a);
  });
}, AS = (e) => {
  Object.entries(bS).forEach(([t, a]) => {
    a && e.directive(t, a);
  });
}, PS = (e, t) => {
  e.config.globalProperties.$zmzConfig = t, e.config.globalProperties.$zmzGlobal = CS(t), e.config.globalProperties.$zmzTools = LS, Object.entries(ES).forEach(([a, n]) => {
    const o = fo[n];
    o ? e.config.globalProperties[a] = o : console.warn(`[zmz-vue3-web] 组件 ${n} 未找到，无法挂载到 $${a.slice(1)}`);
  });
}, FS = Br.version, NS = (e, t = {}) => {
  if (e._zmzInstalled)
    return console.warn("[zmz-vue3-web] 组件库已安装，请勿重复安装"), e;
  const a = BS(t, MS);
  return Ni(a.zIndex), IS(e, a), AS(e), PS(e, a), e._zmzInstalled = !0, e;
}, RS = {
  version: Br.version,
  install: NS,
  // 解构导出所有组件，方便直接使用
  ...fo
};
export {
  el as ZmzAlbum,
  Zn as ZmzAlert,
  kl as ZmzAmount,
  nl as ZmzAnchor,
  al as ZmzAnchorItem,
  gl as ZmzAudio,
  Ka as ZmzAvatar,
  Qa as ZmzAvatarGroup,
  _l as ZmzBacktop,
  $a as ZmzBadge,
  wl as ZmzBarrage,
  pl as ZmzBook,
  aa as ZmzBreadcrumb,
  la as ZmzBreadcrumbItem,
  xt as ZmzButton,
  xn as ZmzButtonGroup,
  Kn as ZmzCalendar,
  Bn as ZmzCard,
  jn as ZmzCarousel,
  Hn as ZmzCarouselItem,
  pa as ZmzCascader,
  ba as ZmzCascaderItem,
  ka as ZmzCascaderPanel,
  An as ZmzCell,
  Ot as ZmzCheckbox,
  _a as ZmzCheckboxGroup,
  Dn as ZmzCol,
  Fa as ZmzCollapse,
  Ra as ZmzCollapseItem,
  La as ZmzColorPicker,
  Na as ZmzComment,
  Va as ZmzCommentItem,
  Fn as ZmzContainer,
  Gb as ZmzCopy,
  Cl as ZmzCron,
  Oa as ZmzDatePicker,
  ll as ZmzDescriptions,
  ol as ZmzDescriptionsItem,
  qa as ZmzDivider,
  qn as ZmzDrawer,
  oa as ZmzDropdown,
  ra as ZmzDropdownItem,
  ia as ZmzDropdownMenu,
  Wa as ZmzEmpty,
  Tn as ZmzFloatbutton,
  Jt as ZmzFloatbuttonItem,
  Ca as ZmzForm,
  Sa as ZmzFormItem,
  Pn as ZmzGraphic,
  Nn as ZmzGraphicImage,
  Vn as ZmzGraphicText,
  Mn as ZmzGrid,
  En as ZmzGridItem,
  On as ZmzIcon,
  Ja as ZmzImage,
  dn as ZmzImagePreview,
  _t as ZmzInput,
  ma as ZmzInputnumber,
  fa as ZmzInputtag,
  er as ZmzLazyload,
  Ua as ZmzLink,
  to as ZmzLoading,
  bs as ZmzLoadingBar,
  Jo as ZmzLoadingDirective,
  vs as ZmzLoadingEvent,
  Ga as ZmzLoadmore,
  ul as ZmzLoupe,
  Jn as ZmzMenu,
  ea as ZmzMenuItem,
  na as ZmzMenuItemGroup,
  ta as ZmzMenuSubmenu,
  nr as ZmzMessage,
  hu as ZmzMessageBox,
  Ho as ZmzMetaInfo,
  Yn as ZmzModel,
  hl as ZmzMusic,
  Xr as ZmzNetwork,
  ar as ZmzNotice,
  ml as ZmzNumberdynamic,
  zl as ZmzPagecontent,
  fl as ZmzPagefooter,
  vl as ZmzPageheader,
  Ea as ZmzPagination,
  Xn as ZmzPopover,
  Pa as ZmzProgress,
  nn as ZmzRadio,
  za as ZmzRadioGroup,
  Da as ZmzRate,
  Za as ZmzResult,
  Ln as ZmzRow,
  Ya as ZmzScroll,
  il as ZmzScrollbar,
  Ft as ZmzSelect,
  Rt as ZmzSelectOption,
  ga as ZmzSelectOptionGroup,
  Rn as ZmzShowMore,
  dl as ZmzShutters,
  cl as ZmzShuttersItem,
  sl as ZmzSigned,
  Ha as ZmzSkeleton,
  un as ZmzSkeletonItem,
  on as ZmzSlider,
  tl as ZmzSpace,
  Zt as ZmzSpaceItem,
  Qn as ZmzSplit,
  sa as ZmzStep,
  ua as ZmzStepItem,
  Xa as ZmzSticky,
  ha as ZmzSwitch,
  ca as ZmzTabItems,
  Ia as ZmzTable,
  Aa as ZmzTableColumn,
  da as ZmzTabs,
  In as ZmzTag,
  va as ZmzTextarea,
  rl as ZmzTime,
  Wn as ZmzTimeaxis,
  $n as ZmzTimeaxisItem,
  ln as ZmzTimepicker,
  $s as ZmzToast,
  Gn as ZmzTooltip,
  Ma as ZmzTransfer,
  Sl as ZmzTransitionCollapse,
  Ba as ZmzTree,
  ya as ZmzUpload,
  yl as ZmzVideo,
  ja as ZmzWaterfall,
  sn as ZmzWaterfallItem,
  bl as ZmzWatermark,
  RS as default,
  NS as install,
  Ni as setZindex,
  FS as version,
  CS as zmzGlobal,
  LS as zmzTools,
  _S as zmzclickoutside,
  pS as zmzcopy,
  yS as zmzfreedrag,
  gS as zmzpreventreclick,
  hS as zmzverifynumber
};
