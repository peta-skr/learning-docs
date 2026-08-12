import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第11章 どこまで上げるべきか","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/11-how-far-to-go.md","filePath":"chapters/11-how-far-to-go.md","lastUpdated":1786106087000}');
const _sfc_main = { name: "chapters/11-how-far-to-go.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode("", 24)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-292",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20S9%5B%22Servlet%204.0%EF%BC%88javax%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20T9%5B%22Tomcat%209.0.x%22%5D%20---%20SP5%5B%22Spring%205.3.x%22%5D%0A%20%20%20%20end%0A%20%20%20%20subgraph%20S60%5B%22Servlet%206.0%EF%BC%88jakarta%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20T101%5B%22Tomcat%2010.1.x%22%5D%20---%20SP62%5B%22Spring%206.2.x%22%5D%0A%20%20%20%20end%0A%20%20%20%20subgraph%20S61%5B%22Servlet%206.1%EF%BC%88jakarta%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20T11%5B%22Tomcat%2011.0.x%22%5D%20---%20SP7%5B%22Spring%207.0.x%22%5D%0A%20%20%20%20end%0A%0A%20%20%20%20S9%20%3D%3D%3E%7C%22%E3%81%93%E3%81%AE%E6%95%99%E6%9D%90%22%7C%20S60%0A%20%20%20%20S60%20-.-%3E%7C%22%E6%AC%A1%E3%81%AE%E5%88%A4%E6%96%AD%22%7C%20S61%0A%0A%20%20%20%20style%20S60%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 32)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-656",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20NOW%5B%22%E7%8F%BE%E5%9C%A8%3Cbr%2F%3ETomcat%209%20%2B%20Spring%205.3%EF%BC%88javax%EF%BC%89%3Cbr%2F%3ESpring%20%E3%81%AF%202024%E5%B9%B48%E6%9C%88%E3%81%AB%20EOL%22%5D%0A%0A%20%20%20%20NOW%20--%3E%20A%5B%22%E6%A1%881%3A%20%E5%8B%95%E3%81%8B%E3%81%95%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20NOW%20--%3E%20B%5B%22%E6%A1%882%3A%20Tomcat%2010.1%20%2B%20Spring%206.2%3Cbr%2F%3E%EF%BC%88%E3%81%93%E3%81%AE%E6%95%99%E6%9D%90%EF%BC%89%22%5D%0A%20%20%20%20NOW%20--%3E%20C%5B%22%E6%A1%883%3A%20Tomcat%2011%20%2B%20Spring%207.0%22%5D%0A%0A%20%20%20%20A%20--%3E%20A1%5B%22%E4%BD%9C%E6%A5%AD%E3%82%BC%E3%83%AD%3Cbr%2F%3Ejavax%20%E3%81%AE%E3%81%BE%E3%81%BE%3Cbr%2F%3E%E6%AC%A1%E3%81%AE%E7%A7%BB%E8%A1%8C%E3%81%A7%E5%90%8C%E3%81%98%E5%B7%A5%E4%BA%8B%E3%81%8C%E5%BE%85%E3%81%A4%22%5D%0A%20%20%20%20B%20--%3E%20B1%5B%22jakarta%20%E5%8C%96%E3%81%8C%E5%AE%8C%E4%BA%86%3Cbr%2F%3ESpring%20%E3%81%AF%20EOL%20%E6%B8%88%E3%81%BF%EF%BC%882026%E5%B9%B46%E6%9C%88%EF%BC%89%3Cbr%2F%3ESpring%207%20%E3%81%B8%E3%81%AE%E9%81%93%E3%81%8C%E7%9F%AD%E3%81%8F%E3%81%AA%E3%82%8B%22%5D%0A%20%20%20%20C%20--%3E%20C1%5B%22%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E6%9C%80%E6%96%B0%3Cbr%2F%3ESpring%206%E2%86%927%20%E3%81%AE%E5%A4%89%E6%9B%B4%E5%AF%BE%E5%BF%9C%E3%81%8C%E8%BF%BD%E5%8A%A0%3Cbr%2F%3EJUnit%205%20%E5%8C%96%E3%82%82%E5%90%8C%E6%99%82%E3%81%AB%E5%BF%85%E8%A6%81%3Cbr%2F%3E2026%E5%B9%B411%E6%9C%88%E3%81%AB%E5%86%8D%E5%88%A4%E6%96%AD%22%5D%0A%0A%20%20%20%20style%20A1%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20B1%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[5] || (_cache[5] = createStaticVNode("", 20)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-887",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20Q1%7B%22%E7%A7%BB%E8%A1%8C%E5%85%88%E3%81%AE%3Cbr%2F%3E%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%81%AF%EF%BC%9F%22%7D%0A%0A%20%20%20%20Q1%20--%3E%7C%22Tomcat%209.0.x%22%7C%20R1%5B%22Servlet%204.0%3Cbr%2F%3Ejavax%20%E3%81%AE%E3%81%BE%E3%81%BE%3Cbr%2F%3ESpring%205.3%20%E3%81%BE%E3%81%A7%22%5D%0A%20%20%20%20Q1%20--%3E%7C%22Tomcat%2010.0.x%22%7C%20R4%5B%22Servlet%205.0%3Cbr%2F%3E%E9%81%B8%E3%81%B9%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20Q1%20--%3E%7C%22Tomcat%2010.1.x%22%7C%20R2%5B%22Servlet%206.0%3Cbr%2F%3Ejakarta%20%E5%8C%96%E3%81%8C%E5%BF%85%E8%A6%81%3Cbr%2F%3ESpring%20%E3%81%AF%206.2%20%E3%81%A7%E7%A2%BA%E5%AE%9A%22%5D%0A%20%20%20%20Q1%20--%3E%7C%22Tomcat%2011.0.x%22%7C%20R3%5B%22Servlet%206.1%3Cbr%2F%3Ejakarta%20%E5%8C%96%E3%81%8C%E5%BF%85%E8%A6%81%3Cbr%2F%3ESpring%207.0%20%E3%81%8C%E4%BD%BF%E3%81%88%E3%82%8B%22%5D%0A%0A%20%20%20%20R1%20--%3E%20N1%5B%229.0.x%20%E7%B5%82%E4%BA%86%202027-03-31%3Cbr%2F%3E9.1.x%20%E3%81%AF%202030-12-31%20%E3%81%BE%E3%81%A7%22%5D%0A%20%20%20%20R4%20--%3E%20N4%5B%222022-10-31%20%E3%81%AB%3Cbr%2F%3EEOL%E3%83%BB%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96%E6%B8%88%E3%81%BF%22%5D%0A%20%20%20%20R2%20--%3E%20N2%5B%22Spring%206.2%20%E3%81%AF%3Cbr%2F%3E2026%E5%B9%B46%E6%9C%88%E3%81%AB%20EOL%20%E6%B8%88%E3%81%BF%22%5D%0A%20%20%20%20R3%20--%3E%20N3%5B%22Spring%207.0%20%E3%81%AE%20EOL%20%E4%BA%88%E5%AE%9A%3Cbr%2F%3E2026%E5%B9%B411%E6%9C%88%22%5D%0A%0A%20%20%20%20style%20R2%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20R4%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20N4%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 44))
  ]);
}
const _11HowFarToGo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _11HowFarToGo as default
};
