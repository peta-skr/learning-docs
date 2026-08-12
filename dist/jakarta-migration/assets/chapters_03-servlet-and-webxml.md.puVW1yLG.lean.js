import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第3章 Servlet と web.xml","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/03-servlet-and-webxml.md","filePath":"chapters/03-servlet-and-webxml.md","lastUpdated":1786106087000}');
const _sfc_main = { name: "chapters/03-servlet-and-webxml.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 109)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-720",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22Servlet%20%E5%B1%A4%E3%81%AE%E7%A7%BB%E8%A1%8C%E5%AF%BE%E8%B1%A1%22%5D%0A%0A%20%20%20%20A%20--%3E%20B%5B%22Java%20%E3%81%AE%20import%3Cbr%2F%3Ejavax.servlet.*%3Cbr%2F%3E%E2%86%92%20jakarta.servlet.*%22%5D%0A%20%20%20%20A%20--%3E%20C%5B%22pom.xml%20%E3%81%AE%E4%BE%9D%E5%AD%98%3Cbr%2F%3E%E5%BA%A7%E6%A8%99%E3%81%8C%E4%B8%B8%E3%81%94%E3%81%A8%E5%A4%89%E3%82%8F%E3%82%8B%22%5D%0A%20%20%20%20A%20--%3E%20D%5B%22web.xml%20%E3%81%AE3%E8%A1%8C%3Cbr%2F%3Exmlns%20%2F%20schemaLocation%3Cbr%2F%3E%2F%20version%22%5D%0A%20%20%20%20A%20--%3E%20E%5B%22web.xml%20%E3%81%AE%3Cbr%2F%3Efilter-class%20%E3%81%AA%E3%81%A9%E3%81%AE%3Cbr%2F%3E%E3%82%AF%E3%83%A9%E3%82%B9%E5%90%8D%EF%BC%88%E6%96%87%E5%AD%97%E5%88%97%EF%BC%89%22%5D%0A%0A%20%20%20%20B%20--%3E%20B1%5B%22%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%81%8C%E6%A4%9C%E6%9F%BB%E3%81%99%E3%82%8B%22%5D%0A%20%20%20%20C%20--%3E%20B1%0A%20%20%20%20D%20--%3E%20D1%5B%22%E8%AA%B0%E3%82%82%E6%A4%9C%E6%9F%BB%E3%81%97%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20E%20--%3E%20E1%5B%22%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%81%8C%3Cbr%2F%3E%E6%A4%9C%E6%9F%BB%E3%81%97%E3%81%AA%E3%81%84%22%5D%0A%0A%20%20%20%20B1%20--%3E%20OK%5B%22%E7%9B%B4%E3%81%97%E5%BF%98%E3%82%8C%E3%81%9F%E3%82%89%3Cbr%2F%3E%E3%83%93%E3%83%AB%E3%83%89%E3%81%A7%E6%AD%A2%E3%81%BE%E3%82%8B%22%5D%0A%20%20%20%20D1%20--%3E%20NG%5B%22%E7%9B%B4%E3%81%97%E5%BF%98%E3%82%8C%E3%81%A6%E3%82%82%3Cbr%2F%3E%E3%83%93%E3%83%AB%E3%83%89%E7%B7%91%E3%83%BB%E8%B5%B7%E5%8B%95%E6%88%90%E5%8A%9F%3Cbr%2F%3E%E5%85%A8%E9%83%A8%20200%22%5D%0A%20%20%20%20E1%20--%3E%20NG2%5B%22%E7%9B%B4%E3%81%97%E5%BF%98%E3%82%8C%E3%81%9F%E3%82%89%3Cbr%2F%3E%E8%B5%B7%E5%8B%95%E6%99%82%E3%81%AB%E5%88%9D%E3%82%81%E3%81%A6%E5%A4%B1%E6%95%97%22%5D%0A%0A%20%20%20%20style%20OK%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20NG%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20NG2%20fill%3A%23fff0d0%2Cstroke%3A%23c80%0A%20%20%20%20style%20D1%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[2] || (_cache[2] = createStaticVNode("", 30))
  ]);
}
const _03ServletAndWebxml = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _03ServletAndWebxml as default
};
