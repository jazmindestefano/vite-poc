import { jsx } from "react/jsx-runtime";
const Button = ({ color = "yellow-ujv" }) => {
  return /* @__PURE__ */ jsx("button", { "data-testid": "button", className: `bg-${color}`, children: /* @__PURE__ */ jsx("p", { children: "soy un boton" }) });
};
export {
  Button
};
//# sourceMappingURL=index.es.js.map
