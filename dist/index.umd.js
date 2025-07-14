(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.JazVitePoc = {}, global.jsxRuntime));
})(this, function(exports2, jsxRuntime) {
  "use strict";
  const Button = ({ color = "yellow-ujv" }) => {
    return /* @__PURE__ */ jsxRuntime.jsx("button", { "data-testid": "button", className: `bg-${color}`, children: /* @__PURE__ */ jsxRuntime.jsx("p", { children: "soy un boton" }) });
  };
  exports2.Button = Button;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=index.umd.js.map
