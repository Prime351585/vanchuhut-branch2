/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bp2nhWV8.mjs';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": "Page not found | Oops! The page you are trying to access is currently not available." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-white-100 font-agdasima"> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": HeroImg, "class": "scale-100 w-screen h-[140px] transform -translate-y-[101px] md:-translate-y-[60px]  object-cover", "alt": "Decorative header - Vanchu Hut Chinese cuisine ambiance" })} <div class="relative z-10 flex flex-col items-center justify-center h-[300px] text-black"> <h1 class="text-4xl font-bold mb-4">404</h1> <p class="text-xl mb-6">Oops! The page you are trying to access is currently not available.</p> <a href="/" class="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition">Go to Homepage</a> </div> </section> ` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/404.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
