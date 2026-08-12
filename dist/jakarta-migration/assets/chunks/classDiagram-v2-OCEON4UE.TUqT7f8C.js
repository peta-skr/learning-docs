import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-GF5L2VYU.DB0kZiDX.js";
import { _ as __name } from "../app.CHtHelNj.js";
import "./chunk-5VM5RSS4.JeUseEdo.js";
import "./chunk-XXDRQBXY.CYfAMw4V.js";
import "./chunk-KBJHAD2P.C7IoNvi1.js";
import "./chunk-2GRJ4B5K.Q1nBJ-mF.js";
import "./framework.CHIFnItg.js";
import "./theme.wO3w5b6Q.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
