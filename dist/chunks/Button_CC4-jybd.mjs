import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, q as renderScript, a as renderTemplate } from './astro/server_Bc1SguY6.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://vanchuhut.in");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { type = "button", text, onClick, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(`md:flex bg-transparent hover:bg-primary border border-primary hover:text-black font-bold px-5 mx-2 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 font-sans ${className}`, "class")}${addAttribute(onClick, "data-redirect")}> ${text} </button> ${renderScript($$result, "/workspaces/vanchuhut-branch2/src/components/Button.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/vanchuhut-branch2/src/components/Button.astro", void 0);

export { $$Button as $ };
