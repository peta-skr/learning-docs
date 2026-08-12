import { c as createFlowDiagram, s as styles_default } from "./flowDiagram-UKHOOZJN.CInLo8eB.js";
import { _ as __name } from "../app.CHtHelNj.js";
import "./chunk-5VM5RSS4.JeUseEdo.js";
import "./chunk-XXDRQBXY.CYfAMw4V.js";
import "./chunk-KBJHAD2P.C7IoNvi1.js";
import "./chunk-2GRJ4B5K.Q1nBJ-mF.js";
import "./channel.Dlu_t9NC.js";
import "./framework.CHIFnItg.js";
import "./theme.wO3w5b6Q.js";
var getStyles = /* @__PURE__ */ __name((options) => `${styles_default(options)}
  .swimlane.cluster rect {
    stroke: ${options.clusterBorder} !important;
  }
  [data-look="neo"].cluster rect {
    filter: none;
  }
`, "getStyles");
var styles_default2 = getStyles;
var diagram = createFlowDiagram({ defaultLayout: "swimlane", styles: styles_default2 });
export {
  diagram
};
