import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-5RXB4S5H.UQwLe8AC.js";
import { _ as __name } from "../app.CHtHelNj.js";
import "./chunk-XXDRQBXY.CYfAMw4V.js";
import "./chunk-KBJHAD2P.C7IoNvi1.js";
import "./chunk-2GRJ4B5K.Q1nBJ-mF.js";
import "./framework.CHIFnItg.js";
import "./theme.wO3w5b6Q.js";
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
