import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第8章 ライブラリ移行 ②：上げなくてよいものを見分ける","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/08-what-not-to-upgrade.md","filePath":"chapters/08-what-not-to-upgrade.md","lastUpdated":1786106087000}');
const _sfc_main = { name: "chapters/08-what-not-to-upgrade.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 58)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-586",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22Tomcat%2010.1%20%E3%81%AB%E8%BC%89%E3%81%9B%E3%81%9F%E3%81%84%22%5D%20--%3E%20B%5B%22Servlet%206.0%20%E3%81%8C%E5%BF%85%E8%A6%81%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22Spring%20Framework%206.2%20%E3%81%8C%E5%BF%85%E8%A6%81%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22Spring%20Batch%205%20%E3%81%8C%E5%BF%85%E8%A6%81%3Cbr%2F%3E%EF%BC%88Batch%204.3%20%E3%81%AF%20Spring%205%20%E3%83%99%E3%83%BC%E3%82%B9%EF%BC%89%22%5D%0A%20%20%20%20D%20--%3E%20E%5B%22Batch%205%20%E3%81%AE%20API%20%E7%A0%B4%E5%A3%8A%E3%81%AB%E5%AF%BE%E5%BF%9C%22%5D%0A%0A%20%20%20%20C%20--%3E%20F%5B%22Hibernate%20ORM%206%20%E3%81%8C%E5%BF%85%E8%A6%81%3Cbr%2F%3E%EF%BC%88Hibernate%205.6%20%E3%81%AF%20javax.persistence%EF%BC%89%22%5D%0A%20%20%20%20C%20--%3E%20G%5B%22Hibernate%20Validator%208%20%E3%81%8C%E5%BF%85%E8%A6%81%3Cbr%2F%3E%EF%BC%88HV%206%20%E3%81%AF%20javax.validation%EF%BC%89%22%5D%0A%20%20%20%20G%20--%3E%20H%5B%22EL%20%E5%AE%9F%E8%A3%85%E3%82%82%E5%B7%AE%E3%81%97%E6%9B%BF%E3%81%88%3Cbr%2F%3Eexpressly%205.0.0%22%5D%0A%0A%20%20%20%20E%20-.-%3E%7C%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%A8%E3%81%AF%E7%84%A1%E9%96%A2%E4%BF%82%22%7C%20X%5B%22%E3%81%A0%E3%81%8C%E9%81%BF%E3%81%91%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20style%20X%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 17)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-753",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22%E4%BE%9D%E5%AD%98%E3%82%921%E3%81%A4%E9%81%B8%E3%81%B6%22%5D%20--%3E%20B%7B%22%E8%87%AA%E5%88%86%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%81%8C%3Cbr%2F%3E%E3%81%9D%E3%81%AE%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E7%B5%8C%E7%94%B1%E3%81%A7%3Cbr%2F%3Ejavax%20%E3%81%AB%E8%A7%A6%E3%82%8C%E3%82%8B%EF%BC%9F%22%7D%0A%20%20%20%20B%20--%3E%7C%22%E3%81%AF%E3%81%84%22%7C%20U%5B%22%E4%B8%8A%E3%81%92%E3%82%8B%22%5D%0A%20%20%20%20B%20--%3E%7C%22%E3%81%84%E3%81%84%E3%81%88%22%7C%20C%7B%22jar%20tf%20%E3%81%A7%20javax%2F%20%E3%81%AE%3Cbr%2F%3E%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%92%E5%90%AB%E3%82%80%EF%BC%9F%22%7D%0A%20%20%20%20C%20--%3E%7C%22%E5%90%AB%E3%82%80%22%7C%20U%0A%20%20%20%20C%20--%3E%7C%22%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84%22%7C%20D%7B%22dependency%3Atree%20%E3%81%A7%3Cbr%2F%3Ejavax%20%E7%B3%BB%E3%82%92%E5%BC%95%E3%81%8D%E3%81%9A%E3%82%8A%E8%BE%BC%E3%82%80%EF%BC%9F%22%7D%0A%20%20%20%20D%20--%3E%7C%22%E3%81%AF%E3%81%84%22%7C%20U%0A%20%20%20%20D%20--%3E%7C%22%E3%81%84%E3%81%84%E3%81%88%22%7C%20E%5B%22%E6%8D%AE%E3%81%88%E7%BD%AE%E3%81%8D%E3%81%AE%E5%80%99%E8%A3%9C%22%5D%0A%20%20%20%20E%20--%3E%20F%5B%22%E6%8D%AE%E3%81%88%E7%BD%AE%E3%81%84%E3%81%9F%E3%81%BE%E3%81%BE%3Cbr%2F%3Eclean%20verify%20%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%99%22%5D%0A%20%20%20%20F%20--%3E%20G%7B%22%E3%83%86%E3%82%B9%E3%83%88%E3%81%8C%E9%80%9A%E3%82%8B%EF%BC%9F%22%7D%0A%20%20%20%20G%20--%3E%7C%22%E9%80%9A%E3%82%8B%22%7C%20H%5B%22%E4%B8%8A%E3%81%92%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20G%20--%3E%7C%22%E8%90%BD%E3%81%A1%E3%82%8B%22%7C%20U%0A%0A%20%20%20%20U%20--%3E%20V%7B%22%E3%83%A1%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%8C%3Cbr%2F%3E%E4%B8%8A%E3%81%8C%E3%82%8B%EF%BC%9F%22%7D%0A%20%20%20%20V%20--%3E%7C%22%E4%B8%8A%E3%81%8C%E3%82%8B%22%7C%20W%5B%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%A8%E7%84%A1%E9%96%A2%E4%BF%82%E3%81%AA%3Cbr%2F%3EAPI%20%E7%A0%B4%E5%A3%8A%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B%3Cbr%2F%3E%EF%BC%88%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%EF%BC%89%22%5D%0A%20%20%20%20V%20--%3E%7C%22%E3%83%91%E3%83%83%E3%83%81%E3%81%AE%E3%81%BF%22%7C%20X%5B%22%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E4%B8%8A%E3%81%92%E3%82%8B%22%5D%0A%0A%20%20%20%20style%20H%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20W%20fill%3A%23fff4d0%2Cstroke%3A%23c90%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 39))
  ]);
}
const _08WhatNotToUpgrade = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _08WhatNotToUpgrade as default
};
