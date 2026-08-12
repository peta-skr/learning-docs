import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.CHIFnItg.js";
const __pageData = JSON.parse('{"title":"第9章 JUnit 入門 — テストを読めるようにする","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/09-junit4-migration.md","filePath":"chapters/09-junit4-migration.md","lastUpdated":1786107438000}');
const _sfc_main = { name: "chapters/09-junit4-migration.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createStaticVNode("", 139)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-955",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20BC%5B%22%40BeforeClass%3Cbr%2F%3E%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AB1%E5%9B%9E%E3%83%BBstatic%22%5D%20--%3E%20L1%5B%22%E3%83%86%E3%82%B9%E3%83%881%20%E3%81%AE%E7%95%AA%22%5D%0A%20%20%20%20L1%20--%3E%20B1%5B%22%40Before%22%5D%0A%20%20%20%20B1%20--%3E%20T1%5B%22%40Test%20%E3%83%A1%E3%82%BD%E3%83%83%E3%83%891%22%5D%0A%20%20%20%20T1%20--%3E%20A1%5B%22%40After%22%5D%0A%20%20%20%20A1%20--%3E%20L2%5B%22%E3%83%86%E3%82%B9%E3%83%882%20%E3%81%AE%E7%95%AA%22%5D%0A%20%20%20%20L2%20--%3E%20B2%5B%22%40Before%22%5D%0A%20%20%20%20B2%20--%3E%20T2%5B%22%40Test%20%E3%83%A1%E3%82%BD%E3%83%83%E3%83%892%22%5D%0A%20%20%20%20T2%20--%3E%20A2%5B%22%40After%22%5D%0A%20%20%20%20A2%20--%3E%20DOTS%5B%22%E2%80%A6%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E6%95%B0%E3%81%A0%E3%81%91%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%99%22%5D%0A%20%20%20%20DOTS%20--%3E%20AC%5B%22%40AfterClass%3Cbr%2F%3E%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AB1%E5%9B%9E%E3%83%BBstatic%22%5D%0A%0A%20%20%20%20style%20BC%20fill%3A%23e0e8ff%2Cstroke%3A%2336c%0A%20%20%20%20style%20AC%20fill%3A%23e0e8ff%2Cstroke%3A%2336c%0A%20%20%20%20style%20B1%20fill%3A%23fff0d0%2Cstroke%3A%23c80%0A%20%20%20%20style%20B2%20fill%3A%23fff0d0%2Cstroke%3A%23c80%0A%20%20%20%20style%20A1%20fill%3A%23fff0d0%2Cstroke%3A%23c80%0A%20%20%20%20style%20A2%20fill%3A%23fff0d0%2Cstroke%3A%23c80%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[8] || (_cache[8] = createStaticVNode("", 92)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-1467",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20F%7B%22%E3%83%86%E3%82%B9%E3%83%88%E3%81%8C%E8%90%BD%E3%81%A1%E3%81%9F%22%7D%20--%3E%20E%5B%22Errors%20%E3%81%8C%E5%87%BA%E3%81%A6%E3%81%84%E3%82%8B%22%5D%0A%20%20%20%20F%20--%3E%20FA%5B%22Failures%20%E3%81%8C%E5%87%BA%E3%81%A6%E3%81%84%E3%82%8B%22%5D%0A%0A%20%20%20%20E%20--%3E%20E1%5B%22%E6%83%B3%E5%AE%9A%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E4%BE%8B%E5%A4%96%3Cbr%2F%3E%3D%20%E3%82%B3%E3%83%BC%E3%83%89%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%AB%E3%81%99%E3%82%89%E8%87%B3%E3%81%A3%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20E1%20--%3E%20E2%5B%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%20%2F%20%E4%BE%9D%E5%AD%98%20%2F%20%E3%82%AF%E3%83%A9%E3%82%B9%E3%83%91%E3%82%B9%E3%82%92%E7%96%91%E3%81%86%3Cbr%2F%3ENoClassDefFoundError%20%E3%81%AA%E3%81%A9%22%5D%0A%0A%20%20%20%20FA%20--%3E%20F1%5B%22assert%20%E3%81%8C%20false%3Cbr%2F%3E%3D%20%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AF%E5%8B%95%E3%81%84%E3%81%9F%E3%80%82%E7%B5%90%E6%9E%9C%E3%81%8C%E9%81%95%E3%81%86%22%5D%0A%20%20%20%20F1%20--%3E%20F2%5B%22%E6%A5%AD%E5%8B%99%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF%E3%81%AE%E7%B5%90%E6%9E%9C%E3%81%8C%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%9F%E3%81%A8%E7%96%91%E3%81%86%3Cbr%2F%3Eexpected%20%E3%81%A8%20was%20%E3%81%AE%E5%B7%AE%E3%82%92%E8%AA%AD%E3%82%80%22%5D%0A%0A%20%20%20%20style%20E2%20fill%3A%23ffe8d0%2Cstroke%3A%23c60%0A%20%20%20%20style%20F2%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[9] || (_cache[9] = createStaticVNode("", 23)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-1592",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20R%5B%22%40RunWith(SpringJUnit4ClassRunner.class)%22%5D%20--%3E%20C%5B%22Spring%20%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%92%E8%B5%B7%E5%8B%95%3Cbr%2F%3E%EF%BC%88%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AB1%E5%9B%9E%E3%83%BB%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%81%95%E3%82%8C%E3%82%8B%EF%BC%89%22%5D%0A%20%20%20%20C%20--%3E%20INJ%5B%22%40Autowired%20%2F%20%40PersistenceContext%20%E3%81%AB%3Cbr%2F%3EBean%20%E3%82%92%E6%B3%A8%E5%85%A5%22%5D%0A%20%20%20%20INJ%20--%3E%20TX%5B%22%40Transactional%3Cbr%2F%3E%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B6%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E5%A7%8B%22%5D%0A%20%20%20%20TX%20--%3E%20BF%5B%22%40Before%20setUpMasterData()%3Cbr%2F%3E%E9%A1%A7%E5%AE%A2%E3%83%BB%E5%95%86%E5%93%81%E3%82%92%20persist%22%5D%0A%20%20%20%20BF%20--%3E%20T%5B%22%40Test%20%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%22%5D%0A%20%20%20%20T%20--%3E%20RB%5B%22%E2%98%85%E8%87%AA%E5%8B%95%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E2%98%85%3Cbr%2F%3EDB%20%E3%81%AE%E5%A4%89%E6%9B%B4%E3%82%92%E5%85%A8%E9%83%A8%E5%8F%96%E3%82%8A%E6%B6%88%E3%81%99%22%5D%0A%20%20%20%20RB%20--%3E%20NEXT%5B%22%E6%AC%A1%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E3%81%B8%3Cbr%2F%3E%EF%BC%88DB%20%E3%81%AF%E3%81%BE%E3%81%A3%E3%81%95%E3%82%89%EF%BC%89%22%5D%0A%0A%20%20%20%20style%20RB%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[10] || (_cache[10] = createStaticVNode("", 92)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-2058",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20PRE%5B%22%E7%A7%BB%E8%A1%8C%E5%89%8D%3Cbr%2F%3E.%2Fmvnw%20test%3Cbr%2F%3ETests%20run%3A%2047%2C%20Failures%3A%200%2C%20Errors%3A%200%22%5D%0A%20%20%20%20PRE%20--%3E%20BASE%5B%22%E2%98%85%E5%9F%BA%E6%BA%96%E7%B7%9A%EF%BC%88%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%B3%EF%BC%89%E2%98%85%3Cbr%2F%3E%E3%81%93%E3%82%8C%E3%81%8C%E3%80%8C%E5%89%8D%E3%81%A8%E5%90%8C%E3%81%98%E3%80%8D%E3%81%AE%E5%AE%9A%E7%BE%A9%22%5D%0A%0A%20%20%20%20BASE%20--%3E%20MIG%5B%22%E7%A7%BB%E8%A1%8C%E4%BD%9C%E6%A5%AD%3Cbr%2F%3E%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%AE%E7%BD%AE%E6%8F%9B%E3%83%BB%E4%BE%9D%E5%AD%98%E3%81%AE%E5%85%A5%E3%82%8C%E6%9B%BF%E3%81%88%22%5D%0A%0A%20%20%20%20MIG%20--%3E%20POST%5B%22%E7%A7%BB%E8%A1%8C%E5%BE%8C%3Cbr%2F%3E.%2Fmvnw%20test%22%5D%0A%0A%20%20%20%20POST%20--%3E%20R1%5B%22Tests%20run%3A%2047%3Cbr%2F%3EFailures%3A%200%2C%20Errors%3A%200%22%5D%0A%20%20%20%20POST%20--%3E%20R2%5B%22Errors%20%E3%81%8C%E5%A2%97%E3%81%88%E3%81%9F%22%5D%0A%20%20%20%20POST%20--%3E%20R3%5B%22Failures%20%E3%81%8C%E5%A2%97%E3%81%88%E3%81%9F%22%5D%0A%20%20%20%20POST%20--%3E%20R4%5B%22Tests%20run%20%E3%81%8C%2047%20%E6%9C%AA%E6%BA%80%22%5D%0A%0A%20%20%20%20R1%20--%3E%20OK%5B%22%E7%A7%BB%E8%A1%8C%E6%88%90%E5%8A%9F%3Cbr%2F%3E%EF%BC%8847%E4%BB%B6%E3%81%8C%E6%A4%9C%E6%9F%BB%E3%81%99%E3%82%8B%E7%AF%84%E5%9B%B2%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%EF%BC%89%22%5D%0A%20%20%20%20R2%20--%3E%20D2%5B%22%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%83%BB%E4%BE%9D%E5%AD%98%E3%82%92%E7%96%91%E3%81%86%22%5D%0A%20%20%20%20R3%20--%3E%20D3%5B%22%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF%E3%81%AE%E5%A4%89%E5%8C%96%E3%82%92%E7%96%91%E3%81%86%3Cbr%2F%3E%E2%98%85%E6%9C%9F%E5%BE%85%E5%80%A4%E3%82%92%E6%9B%B8%E3%81%8D%E6%8F%9B%E3%81%88%E3%81%AA%E3%81%84%E2%98%85%22%5D%0A%20%20%20%20R4%20--%3E%20D4%5B%22%E3%83%86%E3%82%B9%E3%83%88%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%3Cbr%2F%3Etest-compile%20%E3%82%92%E7%96%91%E3%81%86%22%5D%0A%0A%20%20%20%20style%20BASE%20fill%3A%23e0e8ff%2Cstroke%3A%2336c%0A%20%20%20%20style%20OK%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20D2%20fill%3A%23ffe8d0%2Cstroke%3A%23c60%0A%20%20%20%20style%20D3%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20D4%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[3] || (_cache[3] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[11] || (_cache[11] = createStaticVNode("", 33)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-2302",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%22validate%22%5D%20--%3E%20B%5B%22compile%3Cbr%2F%3Esrc%2Fmain%2Fjava%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22test-compile%3Cbr%2F%3Esrc%2Ftest%2Fjava%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22test%3Cbr%2F%3E%E3%83%86%E3%82%B9%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%22%5D%0A%20%20%20%20D%20--%3E%20E%5B%22package%3Cbr%2F%3EWAR%20%E3%82%92%E4%BD%9C%E3%82%8B%22%5D%0A%0A%20%20%20%20B%20-.-%3E%7C%22%E3%81%93%E3%81%93%E3%81%8C%E7%B7%91%E3%81%A7%E3%82%82%22%7C%20B1%5B%22main%20%E3%81%AE%E7%A7%BB%E8%A1%8C%E3%81%AF%E5%AE%8C%E4%BA%86%22%5D%0A%20%20%20%20C%20-.-%3E%7C%22%E3%81%93%E3%81%93%E3%81%A7%E5%88%9D%E3%82%81%E3%81%A6%E8%90%BD%E3%81%A1%E3%82%8B%22%7C%20C1%5B%22test%20%E3%81%AE%E7%A7%BB%E8%A1%8C%E6%BC%8F%E3%82%8C%E3%81%8C%3Cbr%2F%3E%E8%A1%A8%E9%9D%A2%E5%8C%96%22%5D%0A%0A%20%20%20%20style%20B1%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20C1%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[4] || (_cache[4] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[12] || (_cache[12] = createStaticVNode("", 34)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-2552",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20S%5B%22mvn%20package%22%5D%20--%3E%20C%5B%22compile%3Cbr%2F%3Esrc%2Fmain%22%5D%0A%20%20%20%20C%20--%3E%20TC%7B%22test-compile%22%7D%0A%20%20%20%20TC%20--%3E%7C%22-DskipTests%3Cbr%2F%3E%EF%BC%88%E8%B5%B0%E3%82%8B%EF%BC%89%22%7C%20TC1%5B%22javax%20%E3%81%AE%20import%20%E3%81%A7%3Cbr%2F%3E%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%82%A8%E3%83%A9%E3%83%BC%22%5D%0A%20%20%20%20TC%20--%3E%7C%22-Dmaven.test.skip%3Dtrue%3Cbr%2F%3E%EF%BC%88%E9%A3%9B%E3%81%B0%E3%81%99%EF%BC%89%22%7C%20SKIP%5B%22%E4%BD%95%E3%82%82%E6%A4%9C%E6%9F%BB%E3%81%95%E3%82%8C%E3%81%AA%E3%81%84%22%5D%0A%20%20%20%20TC1%20--%3E%20F%5B%22BUILD%20FAILURE%22%5D%0A%20%20%20%20SKIP%20--%3E%20P%5B%22package%22%5D%0A%20%20%20%20P%20--%3E%20W%5B%22orders.war%20%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%22%5D%0A%0A%20%20%20%20style%20F%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20W%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[5] || (_cache[5] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[13] || (_cache[13] = createStaticVNode("", 29)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-2770",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20MAIN%5B%22src%2Fmain%EF%BC%88%E7%AC%AC3%E3%80%9C8%E7%AB%A0%E3%81%A7%E7%A7%BB%E8%A1%8C%E6%B8%88%E3%81%BF%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20M1%5B%22javax.servlet%20%E2%86%92%20jakarta.servlet%22%5D%0A%20%20%20%20%20%20%20%20M2%5B%22javax.persistence%20%E2%86%92%20jakarta.persistence%22%5D%0A%20%20%20%20%20%20%20%20M3%5B%22pom%3A%20jakarta.mail%202.0.2%20%E3%81%AA%E3%81%A9%22%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20TEST%5B%22src%2Ftest%EF%BC%88%E3%81%93%E3%81%AE%E7%AB%A0%EF%BC%89%22%5D%0A%20%20%20%20%20%20%20%20T1%5B%224%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%20import%20%E7%BD%AE%E6%8F%9B%22%5D%0A%20%20%20%20%20%20%20%20T2%5B%22pom%3A%20spring-test%206.2.19%22%5D%0A%20%20%20%20%20%20%20%20T3%5B%22pom%3A%20greenmail%202.0.1%22%5D%0A%20%20%20%20%20%20%20%20T4%5B%22javax.sql.DataSource%20%E3%81%AF%E6%AE%8B%E3%81%99%22%5D%0A%20%20%20%20end%0A%0A%20%20%20%20MAIN%20--%3E%7C%22compile%20%E3%81%AF%E7%B7%91%E3%81%AB%E3%81%AA%E3%82%8B%22%7C%20GATE%7B%22%E3%81%A9%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%A7%3Cbr%2F%3E%E3%83%93%E3%83%AB%E3%83%89%E3%81%97%E3%81%9F%E3%81%8B%22%7D%0A%20%20%20%20GATE%20--%3E%7C%22-DskipTests%20%2F%20verify%22%7C%20STOP%5B%22test-compile%20%E3%81%A7%E8%90%BD%E3%81%A1%E3%82%8B%3Cbr%2F%3E%EF%BC%9D%E7%A7%BB%E8%A1%8C%E6%BC%8F%E3%82%8C%E3%81%8C%E6%AD%A2%E3%81%BE%E3%82%8B%22%5D%0A%20%20%20%20GATE%20--%3E%7C%22-Dmaven.test.skip%3Dtrue%22%7C%20PASS%5B%22WAR%20%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%3Cbr%2F%3E%EF%BC%9D%E6%9C%AA%E7%A7%BB%E8%A1%8C%E3%81%AE%E3%81%BE%E3%81%BE%E6%9C%AC%E7%95%AA%E3%81%B8%22%5D%0A%0A%20%20%20%20TEST%20--%3E%20OK%5B%2247%20%E4%BB%B6%20green%3Cbr%2F%3E%E7%A7%BB%E8%A1%8C%E5%89%8D%E3%81%A8%E5%90%8C%E6%95%B0%E3%83%BB%E5%90%8C%E5%86%85%E8%A8%B3%22%5D%0A%0A%20%20%20%20style%20STOP%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A%20%20%20%20style%20PASS%20fill%3A%23ffe0e0%2Cstroke%3A%23c00%0A%20%20%20%20style%20OK%20fill%3A%23e0ffe0%2Cstroke%3A%230a0%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[6] || (_cache[6] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[14] || (_cache[14] = createStaticVNode("", 63))
  ]);
}
const _09Junit4Migration = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _09Junit4Migration as default
};
