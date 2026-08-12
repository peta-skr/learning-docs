import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第7章 ライブラリ移行 ①：座標が嘘をつく","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/07-coordinates-lie.md","filePath":"chapters/07-coordinates-lie.md","lastUpdated":1786106087000}');
const _sfc_main = { name: "chapters/07-coordinates-lie.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode("", 24)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-143",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20A%5B%22Java%20EE%208%3Cbr%2F%3E%E5%BA%A7%E6%A8%99%20javax%3Cbr%2F%3E%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%20javax%22%5D%20--%3E%7C%22Eclipse%20%E3%81%B8%E7%A7%BB%E7%AE%A1%3Cbr%2F%3E2018%E5%B9%B4%E3%80%9C%22%7C%20B%5B%22%E5%BA%A7%E6%A8%99%20jakarta%3Cbr%2F%3E%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%20javax%3Cbr%2F%3E%E2%98%85%E3%81%93%E3%81%93%E3%81%8C%E7%BD%A0%E2%98%85%22%5D%0A%20%20%20%20B%20--%3E%7C%22Big%20Bang%3Cbr%2F%3EJakarta%20EE%209%20%2F%202020%E5%B9%B4%22%7C%20C%5B%22%E5%BA%A7%E6%A8%99%20jakarta%3Cbr%2F%3E%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%20jakarta%22%5D%0A%0A%20%20%20%20style%20B%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20C%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 31)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-237",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22import%20javax.mail.*%3Cbr%2F%3E%E7%BD%AE%E6%8F%9B%E3%81%97%E5%BF%98%E3%82%8C%22%5D%20--%3E%20B%5B%22jakarta.mail%3A1.6.7%3Cbr%2F%3E%E3%81%8C%20javax.mail%20%E3%82%92%E6%8F%90%E4%BE%9B%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E6%88%90%E5%8A%9F%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22WAR%20%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%22%5D%0A%20%20%20%20D%20--%3E%20E%5B%22Tomcat%2010%20%E3%81%AB%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%22%5D%0A%20%20%20%20E%20--%3E%20F%5B%22%E8%B5%B7%E5%8B%95%E5%A4%B1%E6%95%97%3Cbr%2F%3ENoClassDefFoundError%22%5D%0A%0A%20%20%20%20style%20C%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20D%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20F%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[5] || (_cache[5] = createStaticVNode("", 32)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-438",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22%E4%BE%9D%E5%AD%98%E3%82%921%E3%81%A4%E9%81%B8%E3%81%B6%22%5D%20--%3E%20B%7B%22%E5%BA%A7%E6%A8%99%E3%81%AB%20javax%20%E3%81%8C%3Cbr%2F%3E%E5%85%A5%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%EF%BC%9F%22%7D%0A%20%20%20%20B%20--%3E%7C%22%E3%81%AF%E3%81%84%22%7C%20C%5B%22%E7%A7%BB%E8%A1%8C%E5%AF%BE%E8%B1%A1%E3%81%AE%E5%80%99%E8%A3%9C%3Cbr%2F%3E%EF%BC%88%E3%81%9F%E3%81%A0%E3%81%97%20JDK%20%E5%81%B4%E3%81%AE%20javax%20%E3%81%AF%E9%99%A4%E3%81%8F%EF%BC%89%22%5D%0A%20%20%20%20B%20--%3E%7C%22%E3%81%84%E3%81%84%E3%81%88%22%7C%20D%7B%22%E5%BA%A7%E6%A8%99%E3%81%AB%20jakarta%20%E3%81%8C%3Cbr%2F%3E%E5%85%A5%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%EF%BC%9F%22%7D%0A%20%20%20%20D%20--%3E%7C%22%E3%81%AF%E3%81%84%22%7C%20E%5B%22jar%20tf%20%E3%81%A7%E4%B8%AD%E8%BA%AB%E3%82%92%E8%A6%8B%E3%82%8B%22%5D%0A%20%20%20%20D%20--%3E%7C%22%E3%81%84%E3%81%84%E3%81%88%22%7C%20F%5B%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E4%B8%AD%E7%AB%8B%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%3Cbr%2F%3E%E2%86%92%20%E7%AC%AC8%E7%AB%A0%E3%81%AE%E5%88%A4%E5%AE%9A%E3%81%B8%22%5D%0A%0A%20%20%20%20E%20--%3E%20G%7B%22javax%2F...%20%E3%81%AE%3Cbr%2F%3E%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%8C%E3%81%82%E3%82%8B%EF%BC%9F%22%7D%0A%20%20%20%20G%20--%3E%7C%22%E3%81%82%E3%82%8B%22%7C%20H%5B%22%E5%BA%A7%E6%A8%99%E3%81%8C%E5%98%98%E3%82%92%E3%81%A4%E3%81%84%E3%81%A6%E3%81%84%E3%82%8B%3Cbr%2F%3E%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%92%E4%B8%8A%E3%81%92%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%82%E3%82%8A%22%5D%0A%20%20%20%20G%20--%3E%7C%22%E3%81%AA%E3%81%84%22%7C%20I%5B%22%E7%A7%BB%E8%A1%8C%E6%B8%88%E3%81%BF%22%5D%0A%0A%20%20%20%20C%20--%3E%20J%5B%22groupId%20%E3%81%94%E3%81%A8%E5%A4%89%E3%82%8F%E3%82%8B%E3%81%AE%E3%81%A7%3Cbr%2F%3Ediff%20%E3%81%A7%E7%9B%AE%E7%AB%8B%E3%81%A4%22%5D%0A%20%20%20%20H%20--%3E%20K%5B%22%E5%BA%A7%E6%A8%99%E3%81%8C%E5%A4%89%E3%82%8F%E3%82%89%E3%81%AA%E3%81%84%E3%81%AE%E3%81%A7%3Cbr%2F%3Ediff%20%E3%81%A7%E3%81%AF%E6%B0%97%E3%81%A5%E3%81%91%E3%81%AA%E3%81%84%22%5D%0A%0A%20%20%20%20style%20H%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20K%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20I%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 34))
  ]);
}
const _07CoordinatesLie = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _07CoordinatesLie as default
};
