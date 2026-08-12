import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第2章 移行対象を地図にする","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/02-map-the-target.md","filePath":"chapters/02-map-the-target.md","lastUpdated":1786106087000}');
const _sfc_main = { name: "chapters/02-map-the-target.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 132)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-1096",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20B%5B%22%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%B3%3Cbr%2F%3ETomcat%209%20%E3%81%A7%E5%85%A8%E9%83%A8%E5%8B%95%E3%81%8F%3Cbr%2F%3EservletSpec%204.0%3Cbr%2F%3E9%E6%9C%AC200%20%2F%2047%E4%BB%B6green%22%5D%0A%0A%20%20%20%20B%20--%3E%20M%5B%22%E7%A7%BB%E8%A1%8C%E4%BD%9C%E6%A5%AD%E3%82%92%E5%A7%8B%E3%82%81%E3%82%8B%22%5D%0A%20%20%20%20M%20--%3E%20E%5B%22%E4%BD%95%E3%81%8B%E5%A3%8A%E3%82%8C%E3%81%9F%22%5D%0A%0A%20%20%20%20E%20--%3E%20Q%7B%22%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%A7%3Cbr%2F%3E%E5%8B%95%E3%81%84%E3%81%A6%E3%81%84%E3%81%9F%E3%81%8B%EF%BC%9F%22%7D%0A%0A%20%20%20%20Q%20--%3E%7C%22%E5%8B%95%E3%81%84%E3%81%A6%E3%81%84%E3%81%9F%22%7C%20Y%5B%22%E7%A7%BB%E8%A1%8C%E3%81%8C%E5%8E%9F%E5%9B%A0%3Cbr%2F%3E%E7%9B%B4%E3%81%97%E3%81%9F%E7%AE%87%E6%89%80%E3%82%92%E7%96%91%E3%81%86%22%5D%0A%20%20%20%20Q%20--%3E%7C%22%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%22%7C%20N%5B%22%E5%88%87%E3%82%8A%E5%88%86%E3%81%91%E4%B8%8D%E8%83%BD%3Cbr%2F%3E%E5%80%99%E8%A3%9C%E3%81%8C%E7%84%A1%E9%99%90%E3%81%AB%E5%BA%83%E3%81%8C%E3%82%8B%22%5D%0A%0A%20%20%20%20subgraph%20SN%20%5B%22%E5%80%99%E8%A3%9C%22%5D%0A%20%20%20%20%20%20direction%20TB%0A%20%20%20%20%20%20N1%5B%22Spring%206%20%E3%81%AE%3Cbr%2F%3E%E7%A0%B4%E5%A3%8A%E7%9A%84%E5%A4%89%E6%9B%B4%EF%BC%9F%22%5D%0A%20%20%20%20%20%20N2%5B%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%AE%3Cbr%2F%3E%E7%BD%AE%E6%8F%9B%E6%BC%8F%E3%82%8C%EF%BC%9F%22%5D%0A%20%20%20%20%20%20N3%5B%22%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%3Cbr%2F%3E%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%EF%BC%9F%22%5D%0A%20%20%20%20%20%20N4%5B%22%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%3Cbr%2F%3E%E5%A3%8A%E3%82%8C%E3%81%A6%E3%81%84%E3%81%9F%EF%BC%9F%22%5D%0A%20%20%20%20end%0A%0A%20%20%20%20N%20--%3E%20SN%0A%0A%20%20%20%20style%20Y%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20N%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20B%20fill%3A%23e0f0ff%2Cstroke%3A%2306c%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[2] || (_cache[2] = createStaticVNode("", 37))
  ]);
}
const _02MapTheTarget = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _02MapTheTarget as default
};
