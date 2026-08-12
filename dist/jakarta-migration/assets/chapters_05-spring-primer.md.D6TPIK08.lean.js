import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第5章 Spring 入門 — DI と Spring Boot","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/05-spring-primer.md","filePath":"chapters/05-spring-primer.md","lastUpdated":1786107438000}');
const _sfc_main = { name: "chapters/05-spring-primer.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 139)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-756",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20START%5B%22Tomcat%20%E3%81%8C%20web.xml%20%E3%82%92%E8%AA%AD%E3%82%80%22%5D%20--%3E%20LISTENER%5B%22ContextLoaderListener%20%E8%B5%B7%E5%8B%95%22%5D%0A%20%20%20%20LISTENER%20--%3E%20CTX%5B%22ApplicationContext%20%E3%82%92%E4%BD%9C%E3%82%8B%3Cbr%2F%3E%EF%BC%88%EF%BC%9DIoC%20%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%EF%BC%89%22%5D%0A%0A%20%20%20%20CTX%20--%3E%20SCAN%5B%22%40ComponentScan%3Cbr%2F%3E%E6%8C%87%E5%AE%9A%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%82%92%E8%B5%B0%E6%9F%BB%22%5D%0A%20%20%20%20CTX%20--%3E%20BEANM%5B%22%40Bean%20%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%82%92%E5%AE%9F%E8%A1%8C%22%5D%0A%0A%20%20%20%20SCAN%20--%3E%20FOUND%5B%22%40Service%20%2F%20%40Repository%20%2F%3Cbr%2F%3E%40Controller%20%E3%81%8C%E4%BB%98%E3%81%84%E3%81%9F%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%92%E7%99%BA%E8%A6%8B%22%5D%0A%20%20%20%20BEANM%20--%3E%20MADE%5B%22DataSource%20%2F%20EntityManagerFactory%20%2F%3Cbr%2F%3EJavaMailSender%20%E3%81%AA%E3%81%A9%E3%82%92%E7%94%9F%E6%88%90%22%5D%0A%0A%20%20%20%20FOUND%20--%3E%20WIRE%5B%22%E4%BE%9D%E5%AD%98%E3%82%92%E8%A7%A3%E6%B1%BA%E3%81%97%E3%81%A6%20new%20%E3%81%99%E3%82%8B%3Cbr%2F%3E%EF%BC%88%E3%82%B3%E3%83%B3%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%82%BF%E3%81%AE%E5%BC%95%E6%95%B0%E3%81%AE%E5%9E%8B%E3%81%A7%E6%8E%A2%E3%81%99%EF%BC%89%22%5D%0A%20%20%20%20MADE%20--%3E%20WIRE%0A%0A%20%20%20%20WIRE%20--%3E%20PROXY%7B%22%40Transactional%20%E3%81%8C%3Cbr%2F%3E%E4%BB%98%E3%81%84%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%22%7D%0A%20%20%20%20PROXY%20--%3E%7C%22%E4%BB%98%E3%81%84%E3%81%A6%E3%81%84%E3%82%8B%22%7C%20WRAP%5B%22%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E3%81%A7%E5%8C%85%E3%82%80%3Cbr%2F%3EJDK%E5%8B%95%E7%9A%84%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%20or%20CGLIB%22%5D%0A%20%20%20%20PROXY%20--%3E%7C%22%E4%BB%98%E3%81%84%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%22%7C%20REG%0A%20%20%20%20WRAP%20--%3E%20REG%5B%22%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%81%AB%E7%99%BB%E9%8C%B2%22%5D%0A%0A%20%20%20%20REG%20--%3E%20READY%5B%22%E8%B5%B7%E5%8B%95%E5%AE%8C%E4%BA%86%3Cbr%2F%3E%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%82%92%E5%8F%97%E3%81%91%E4%BB%98%E3%81%91%E3%82%8B%22%5D%0A%0A%20%20%20%20style%20CTX%20fill%3A%23e0e8ff%2Cstroke%3A%2336c%0A%20%20%20%20style%20WRAP%20fill%3A%23ffe8d0%2Cstroke%3A%23c60%0A%20%20%20%20style%20READY%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 63)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-1189",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20PLAIN%5B%22%E7%B4%A0%E3%81%AE%20Spring%EF%BC%88app-jakarta%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20P1%5B%22web.xml%3Cbr%2F%3E75%E8%A1%8C%22%5D%0A%20%20%20%20%20%20%20%20P2%5B%22AppConfig%3Cbr%2F%3E48%E8%A1%8C%22%5D%0A%20%20%20%20%20%20%20%20P3%5B%22PersistenceConfig%3Cbr%2F%3E56%E8%A1%8C%22%5D%0A%20%20%20%20%20%20%20%20P4%5B%22WebConfig%3Cbr%2F%3E45%E8%A1%8C%22%5D%0A%20%20%20%20%20%20%20%20P5%5B%22BatchConfig%3Cbr%2F%3E42%E8%A1%8C%22%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20BOOT%5B%22Spring%20Boot%EF%BC%88app-boot%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20B1%5B%22%40SpringBootApplication%3Cbr%2F%3E9%E8%A1%8C%22%5D%0A%20%20%20%20%20%20%20%20B2%5B%22application.properties%3Cbr%2F%3E15%E8%A1%8C%22%5D%0A%20%20%20%20%20%20%20%20B3%5B%22%E8%87%AA%E5%8B%95%E8%A8%AD%E5%AE%9A%3Cbr%2F%3E%E9%81%A9%E7%94%A8118%E4%BB%B6%E3%83%BB%E8%A6%8B%E9%80%81%E3%82%8A169%E4%BB%B6%22%5D%0A%20%20%20%20end%0A%0A%20%20%20%20P1%20-.-%3E%7C%22DispatcherServletAutoConfiguration%22%7C%20B3%0A%20%20%20%20P3%20-.-%3E%7C%22DataSourceAutoConfiguration%3Cbr%2F%3EHibernateJpaAutoConfiguration%22%7C%20B3%0A%20%20%20%20P4%20-.-%3E%7C%22JacksonAutoConfiguration%22%7C%20B3%0A%20%20%20%20P2%20-.-%3E%7C%22%40ComponentScan%20%E3%81%AF%3Cbr%2F%3E%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E7%BD%AE%E3%81%8D%E5%A0%B4%E6%89%80%E3%81%A7%E6%B1%BA%E3%81%BE%E3%82%8B%22%7C%20B1%0A%0A%20%20%20%20style%20PLAIN%20fill%3A%23e8f0ff%2Cstroke%3A%2336c%0A%20%20%20%20style%20BOOT%20fill%3A%23fff0e0%2Cstroke%3A%23c60%0A%20%20%20%20style%20B3%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 60))
  ]);
}
const _05SpringPrimer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _05SpringPrimer as default
};
