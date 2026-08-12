import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第6章 Spring Framework 5.3 → 6.2","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/06-spring-5-to-6.md","filePath":"chapters/06-spring-5-to-6.md","lastUpdated":1786107438000}');
const _sfc_main = { name: "chapters/06-spring-5-to-6.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 100)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-569",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22Spring%205.3%20%E2%86%92%206.2%3Cbr%2F%3E%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%92%E4%B8%8A%E3%81%92%E3%82%8B%22%5D%20--%3E%20B%5B%22%E2%91%A0%20NoUniqueBeanDefinition%3Cbr%2F%3Ejakarta.validation.Validator%20%E3%81%8C%202%20%E5%80%8B%22%5D%0A%20%20%20%20B%20--%3E%7C%22Bean%20%E3%82%92%201%20%E3%81%A4%E3%81%AB%E7%B5%B1%E5%90%88%22%7C%20C%5B%22%E2%91%A1%20NoUniqueBeanDefinition%3Cbr%2F%3EStep%20%E3%81%8C%202%20%E5%80%8B%22%5D%0A%20%20%20%20C%20--%3E%7C%22%40Qualifier%20%E3%82%92%E4%BB%98%E3%81%91%E3%82%8B%22%7C%20D%5B%22%E8%B5%B7%E5%8B%95%E6%88%90%E5%8A%9F%3Cbr%2F%3ESEVERE%200%20%E4%BB%B6%3Cbr%2F%3E%E3%83%86%E3%82%B9%E3%83%88%2047%20%E4%BB%B6%20green%22%5D%0A%20%20%20%20D%20--%3E%20E%7B%22%E5%AE%8C%E4%BA%86%EF%BC%9F%22%7D%0A%20%20%20%20E%20--%3E%7C%22%E8%A6%8B%E3%81%9F%E7%9B%AE%E3%81%AF%E5%AE%8C%E4%BA%86%22%7C%20F%5B%22%E2%91%A2%20%E5%BC%95%E6%95%B0%E5%90%8D%E3%81%8C%E8%A7%A3%E6%B1%BA%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%3Cbr%2F%3E7%20%E3%81%A4%E4%B8%AD%204%20%E3%81%A4%E3%81%8C%20400%20%2F%20500%22%5D%0A%20%20%20%20F%20--%3E%7C%22%26lt%3Bparameters%26gt%3Btrue%26lt%3B%2Fparameters%26gt%3B%22%7C%20G%5B%22%E5%85%A8%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%20200%22%5D%0A%0A%20%20%20%20B%20-.-%3E%7C%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%A8%E3%81%AF%E7%84%A1%E9%96%A2%E4%BF%82%22%7C%20N1%5B%22javax%E2%86%92jakarta%20%E3%81%AE%E7%BD%AE%E6%8F%9B%E3%81%A7%E3%81%AF%E7%9B%B4%E3%82%89%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20C%20-.-%3E%7C%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%A8%E3%81%AF%E7%84%A1%E9%96%A2%E4%BF%82%22%7C%20N1%0A%20%20%20%20F%20-.-%3E%7C%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%A8%E3%81%AF%E7%84%A1%E9%96%A2%E4%BF%82%22%7C%20N1%0A%0A%20%20%20%20style%20D%20fill%3A%23fff4d0%2Cstroke%3A%23c90%0A%20%20%20%20style%20F%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20G%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20N1%20fill%3A%23f0f0f0%2Cstroke%3A%23666%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[2] || (_cache[2] = createStaticVNode("", 31))
  ]);
}
const _06Spring5To6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _06Spring5To6 as default
};
