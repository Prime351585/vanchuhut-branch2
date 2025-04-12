import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, f as renderSlot, g as renderHead, e as defineScriptVars, b as addAttribute } from './astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { a as $$Footer, b as $$Header } from './LandingImage_BSjkF7PI.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vanchuhut.in");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const googleAnalyticsId = "G-T1L95Q3ZJX";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><title>', '</title><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical" href="https://vanchuhut.in"><meta name="generator"', '><link rel="sitemap" href="/sitemap-index.xml"><script async src="https://www.googletagmanager.com/gtag/js?id={googleAnalyticsId}"><\/script><script>(function(){', `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);
    })();<\/script><!-- Open Graph / Social Media --><meta property="og:title" content="Vanchu Hut"><meta property="og:url" content="https://vanchuhut.in/"><meta property="og:type" content="website"><meta property="og:description" content="Discover the best Chinese restaurant in Pratap Vihar, Ghaziabad, at Vanchu Hut. Enjoy authentic Chinese cuisine with family-friendly dining options."><meta property="og:image" content="https://scontent.fdel64-1.fna.fbcdn.net/v/t39.30808-6/469533770_555317043943147_1103509364423730668_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=btjl9jicl0oQ7kNvgH_cf-m&_nc_oc=Adg9cqSt7i2vZkHHovBR8WvvfmkE032XqLVsgwJs9YBccDi5JCX_yNSwkKnoEllVPxQ&_nc_zt=23&_nc_ht=scontent.fdel64-1.fna&_nc_gid=AkWDLpKfGw1zjCo48BGYlLI&oh=00_AYC276OBE5UOdnjM1gtjQmybxtJScGU2qHXjCP9eQGa_Pw&oe=67B10393">`, '</head> <body class="font-agdasima"> ', " ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), defineScriptVars({ googleAnalyticsId }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/workspaces/vanchuhut-branch2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
