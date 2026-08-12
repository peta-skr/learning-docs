import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第1章 なぜ名前が変わったのか、そして何が変わらないのか","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/01-why-renamed.md","filePath":"chapters/01-why-renamed.md","lastUpdated":1786106087000}');
const _sfc_main = { name: "chapters/01-why-renamed.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 19)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-83",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20ROOT%5B%22javax.*%20%E3%81%A8%E3%81%84%E3%81%86%E5%90%8D%E5%89%8D%E3%81%A7%3Cbr%2F%3E%E5%91%BC%E3%81%B0%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%82%82%E3%81%AE%22%5D%0A%0A%20%20%20%20ROOT%20--%3E%20EE%5B%22%E5%87%BA%E8%87%AA%3A%20Java%20EE%20%E4%BB%95%E6%A7%98%3Cbr%2F%3E%EF%BC%88Eclipse%20Foundation%20%E3%81%AB%E7%A7%BB%E7%AE%A1%E3%81%95%E3%82%8C%E3%81%9F%EF%BC%89%22%5D%0A%20%20%20%20ROOT%20--%3E%20JDK%5B%22%E5%87%BA%E8%87%AA%3A%20JDK%20%E6%A8%99%E6%BA%96%20API%3Cbr%2F%3E%EF%BC%88Oracle%20%E3%81%AE%E7%AE%A1%E8%BD%84%E3%81%AE%E3%81%BE%E3%81%BE%EF%BC%89%22%5D%0A%0A%20%20%20%20EE%20--%3E%20EE1%5B%22javax.servlet%3Cbr%2F%3Ejavax.persistence%3Cbr%2F%3Ejavax.validation%3Cbr%2F%3Ejavax.mail%3Cbr%2F%3Ejavax.xml.bind%22%5D%0A%20%20%20%20JDK%20--%3E%20JDK1%5B%22javax.sql%3Cbr%2F%3Ejavax.naming%3Cbr%2F%3Ejavax.crypto%3Cbr%2F%3Ejavax.net%3Cbr%2F%3Ejavax.imageio%3Cbr%2F%3Ejavax.xml.parsers%3Cbr%2F%3Ejavax.xml.transform%22%5D%0A%0A%20%20%20%20EE1%20%3D%3D%3E%7C%22jakarta.*%20%E3%81%AB%E6%94%B9%E5%90%8D%E3%81%95%E3%82%8C%E3%81%9F%22%7C%20OK%5B%22%E7%BD%AE%E6%8F%9B%E3%81%99%E3%82%8B%22%5D%0A%20%20%20%20JDK1%20%3D%3D%3E%7C%22jakarta%20%E7%89%88%E3%81%AF%E5%AD%98%E5%9C%A8%E3%81%97%E3%81%AA%E3%81%84%22%7C%20NG%5B%22%E7%BD%AE%E6%8F%9B%E3%81%97%E3%81%A6%E3%81%AF%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%22%5D%0A%0A%20%20%20%20style%20OK%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20NG%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 55)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-598",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20START%5B%22javax.XXX%20%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%22%5D%20--%3E%20Q1%7B%22JDK%2017%20%E3%81%AB%3Cbr%2F%3E%E5%85%A5%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%EF%BC%9F%3Cbr%2F%3E%EF%BC%88java%20--describe-module%EF%BC%89%22%7D%0A%0A%20%20%20%20Q1%20--%3E%7C%22%E5%85%A5%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%22%7C%20KEEP%5B%22%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E6%AE%8B%E3%81%99%3Cbr%2F%3Ejakarta%20%E7%89%88%E3%81%AF%E5%AD%98%E5%9C%A8%E3%81%97%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20Q1%20--%3E%7C%22%E5%85%A5%E3%81%A3%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%22%7C%20Q2%7B%22%E6%8E%A5%E9%A0%AD%E8%BE%9E%E3%81%AF%3Cbr%2F%3Ejavax.xml.*%20%E3%81%8B%EF%BC%9F%22%7D%0A%0A%20%20%20%20Q2%20--%3E%7C%22%E3%81%AF%E3%81%84%22%7C%20Q3%7B%223%E9%9A%8E%E5%B1%A4%E7%9B%AE%E3%81%AF%3Cbr%2F%3Ebind%20%E3%81%8B%EF%BC%9F%22%7D%0A%20%20%20%20Q2%20--%3E%7C%22%E3%81%84%E3%81%84%E3%81%88%22%7C%20CONV%5B%22jakarta.XXX%20%E3%81%AB%E7%BD%AE%E6%8F%9B%E3%81%99%E3%82%8B%22%5D%0A%0A%20%20%20%20Q3%20--%3E%7C%22bind%EF%BC%88JAXB%EF%BC%89%22%7C%20CONV%0A%20%20%20%20Q3%20--%3E%7C%22parsers%20%2F%20transform%EF%BC%88JAXP%EF%BC%89%22%7C%20KEEP%0A%0A%20%20%20%20CONV%20--%3E%20Q4%7B%22%E4%BE%9D%E5%AD%98%E3%81%AE%20JAR%20%E3%81%AF%3Cbr%2F%3E%E6%9C%AC%E5%BD%93%E3%81%AB%20jakarta%20%E3%82%92%3Cbr%2F%3E%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%EF%BC%9F%22%7D%0A%20%20%20%20Q4%20--%3E%7C%22%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B%22%7C%20JAR%5B%22jar%20tf%20%E3%81%A7%E4%B8%AD%E8%BA%AB%E3%82%92%E8%A6%8B%E3%82%8B%3Cbr%2F%3E%EF%BC%88%E7%AC%AC7%E7%AB%A0%EF%BC%89%22%5D%0A%0A%20%20%20%20style%20KEEP%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20CONV%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 31))
  ]);
}
const _01WhyRenamed = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _01WhyRenamed as default
};
