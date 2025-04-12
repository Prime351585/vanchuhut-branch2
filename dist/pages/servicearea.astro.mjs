/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, f as renderSlot, g as renderHead, e as defineScriptVars, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Footer, b as $$Header, $ as $$Image, H as HeroImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
import { m as momos, d as deliveryImage } from '../chunks/chowmin_DFUkTUVz.mjs';
import { p as pasta } from '../chunks/pasta_BzWC6T68.mjs';
import { $ as $$FindUssection } from '../chunks/FindUssection_BzNgPeP0.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://vanchuhut.in");
const $$PhotosphereLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhotosphereLayout;
  const { title, description } = Astro2.props;
  const googleAnalyticsId = "G-T1L95Q3ZJX";
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><title>', '</title><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical" href="https://vanchuhut.in"><meta name="generator"', '><link rel="sitemap" href="/sitemap-index.xml"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css"><script async src="https://www.googletagmanager.com/gtag/js?id={googleAnalyticsId}"><\/script><script>(function(){', `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);
    })();<\/script><!-- Open Graph / Social Media --><meta property="og:title" content="Vanchu Hut"><meta property="og:url" content="https://vanchuhut.in/"><meta property="og:type" content="website"><meta property="og:description" content="Discover the best Chinese restaurant in Pratap Vihar, Ghaziabad, at Vanchu Hut. Enjoy authentic Chinese cuisine with family-friendly dining options."><meta property="og:image" content="https://scontent.fdel64-1.fna.fbcdn.net/v/t39.30808-6/469533770_555317043943147_1103509364423730668_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=btjl9jicl0oQ7kNvgH_cf-m&_nc_oc=Adg9cqSt7i2vZkHHovBR8WvvfmkE032XqLVsgwJs9YBccDi5JCX_yNSwkKnoEllVPxQ&_nc_zt=23&_nc_ht=scontent.fdel64-1.fna&_nc_gid=AkWDLpKfGw1zjCo48BGYlLI&oh=00_AYC276OBE5UOdnjM1gtjQmybxtJScGU2qHXjCP9eQGa_Pw&oe=67B10393">`, '</head> <body class="font-agdasima"> ', " ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), defineScriptVars({ googleAnalyticsId }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/workspaces/vanchuhut-branch2/src/layouts/PhotosphereLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="importmap">
    
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three/build/three.module.js",
            "@photo-sphere-viewer/core": "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.module.js"
        }
    }
<\/script> <script type="module">
    import { Viewer } from '@photo-sphere-viewer/core';

    const viewer = new Viewer({
  "container": "viewer",
  "panorama": "/photosphere/vanchuhutphotosphere.jpg",
  "moveInertia": true,
  "sphereCorrection": {
    "pan": "-63deg"
  },
  "navbar":false
});
<\/script>`])), renderComponent($$result, "PhotosphereLayout", $$PhotosphereLayout, { "title": "Best Chinese Restaurant in Pratap Vihar \u2013 Vanchu Hut", "description": "Discover delicious, authentic Chinese cuisine at Vanchu Hut in Pratap Vihar. Featuring family-friendly dining, fresh ingredients, and quick delivery. View menu & order now." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-white-100 font-agdasima"> <!-- Hero Section --> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "class": "scale-100 w-screen h-[140px] transform -translate-y-[101px] md:-translate-y-[60px] object-cover", "alt": "Decorative header - Vanchu Hut Chinese cuisine ambiance" })} <div class="container mx-auto px-4"> <!-- Intro Section --> <div class="text-center mt-8"> <h1 class="text-4xl font-bold text-gray-800 mb-4">Authentic Chinese Cuisine in Pratap Vihar</h1> <p class="text-lg text-gray-600 mb-8">Experience the Best of Chinese Delights at Vanchu Hut</p> <p class="text-gray-700 mb-8">Craving mouth-watering Chinese dishes with fresh ingredients and authentic flavours? Whether you’re dining with family or enjoying a quiet meal at home, we’ve got you covered.</p> <a href="/menu" class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">View Menu & Order Online</a> </div> <!-- Why Choose Us Section --> <div class="mt-16"> <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Vanchu Hut?</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center"> <h3 class="text-xl font-semibold text-gray-800 mb-4">Family-Friendly Atmosphere</h3> <p class="text-gray-600">Bring your loved ones together and enjoy a cosy, welcoming dining experience. Our restaurant is perfect for family dinners, friendly outings or catching up over delicious Chinese food.</p> </div> <div class="text-center"> <h3 class="text-xl font-semibold text-gray-800 mb-4">Fresh, High-Quality Ingredients</h3> <p class="text-gray-600">Every dish at Vanchu Hut is made using the freshest, locally-sourced ingredients, ensuring unbeatable taste and quality in every bite.</p> </div> <div class="text-center"> <h3 class="text-xl font-semibold text-gray-800 mb-4">Convenient Takeout & Delivery</h3> <p class="text-gray-600">Prefer dining at home? Enjoy the same authentic flavours delivered straight to your doorstep or simply pick up your order for a hassle-free experience.</p> </div> </div> </div> <!-- Signature Dishes Section --> <div class="mt-16"> <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Signature Dishes You'll Love</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": momos, "class": "w-full h-48 object-cover rounded-lg mb-4", "alt": "Famous Dumplings" })} <h3 class="text-xl font-semibold text-gray-800 mb-2">Our Famous Dumplings 🥟</h3> <p class="text-gray-600">Perfectly steamed, tender dumplings packed with mouth-watering fillings.</p> </div> <div class="text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": deliveryImage, "class": "w-full h-48 object-cover rounded-lg mb-4", "alt": "Classic Chowmein" })} <h3 class="text-xl font-semibold text-gray-800 mb-2">Classic Chowmein 🍜</h3> <p class="text-gray-600">Stir-fried perfection with noodles, veggies, and irresistible sauces.</p> </div> <div class="text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": pasta, "class": "w-full h-48 object-cover rounded-lg mb-4", "alt": "Vegetarian Options" })} <h3 class="text-xl font-semibold text-gray-800 mb-2">Vegetarian Options 🥬</h3> <p class="text-gray-600">Delicious, plant-forward dishes that even meat lovers can’t resist.</p> </div> </div> <div class="text-center mt-8"> <a href="/menu" class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">View Full Menu</a> </div> </div> <!-- Ambience Section --> <div class="mt-16"> <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Our Ambience – Designed for Comfort & Joy</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div id="viewer" class="w-full h-64  rounded-lg"> <!-- <Image src={placeholder2} class="w-full h-64 object-cover rounded-lg" alt="Vanchu Hut Ambience" /> --> </div> <div> <p class="text-gray-700">Vanchu Hut isn’t just about food; it’s about creating memories. Our warm and inviting atmosphere is perfect for sharing good times with your family and friends. Whether it’s weekend brunch, a special celebration, or just a casual dinner, enjoy every moment with us.</p> </div> </div> </div> <!-- Customer Reviews Section --> <div class="mt-16"> <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">What Our Customers Are Saying</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-20"> <div class="text-center"> <!-- <Image src={placeholder3} class="w-full h-48 object-cover rounded-lg mb-4" alt="Customer Review" /> --> <p class="text-gray-700 italic">"They offer very tasty Chinese food with good quantity. Special mention for their crispy chilli potato and Veg Noodles!" – Dev Varma ⭐⭐⭐⭐</p> </div> <div class="text-center"> <!-- <Image src={placeholder3} class="w-full h-48 object-cover rounded-lg mb-4" alt="Customer Review" /> --> <p class="text-gray-700 italic">"Fantastic taste! Paneer chowmein, spring roll, fried rice – every dish was delicious. The perfect place to dine with family." – Saurabh Bhatia ⭐⭐⭐⭐</p> </div> <div class="text-center"> <!-- <Image src={placeholder3} class="w-full h-48 object-cover rounded-lg mb-4" alt="Customer Review" /> --> <p class="text-gray-700 italic">"Best restaurant in Sector-12 for family and friends. I’ve been here over 100 times!" – Siddarth Nagpal ⭐⭐⭐⭐⭐</p> </div> </div> <div class="text-center mt-8"> <a href="https://www.google.com/maps/place/Vanchu+Hut+Authentic+Chinese+Restaurant/@28.6478815,77.4104177,612m/data=!3m1!1e3!4m8!3m7!1s0x390cf12d99d3f4e3:0x3d59fd0812ed954f!8m2!3d28.6478815!4d77.4104177!9m1!1b1!16s%2Fg%2F11fd7lq_hs?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">Read More Reviews</a> </div> </div> <!-- Visit Us Section --> <div class="mt-16 -mx-4"> ${renderComponent($$result2, "FindUssection", $$FindUssection, {})} </div> <!-- FAQ Section --> <div class="mt-16"> <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2> <div class="space-y-4"> <div> <h3 class="text-xl font-semibold text-gray-800">Q. Do you deliver outside Pratap Vihar?</h3> <p class="text-gray-700">Absolutely! Send us your location details, and we’ll confirm if we can deliver to your area.</p> </div> <div> <h3 class="text-xl font-semibold text-gray-800">Q. Are there vegetarian options available?</h3> <p class="text-gray-700">Yes! We pride ourselves on serving a variety of vegetarian dishes like Veg Momos, Paneer Chowmein, and much more.</p> </div> <div> <h3 class="text-xl font-semibold text-gray-800">Q. Are there special discounts for regular customers?</h3> <p class="text-gray-700">Yes, we offer exclusive promotions and discounts for our loyal diners! Follow us on social media or join our mailing list to stay updated.</p> </div> <div> <h3 class="text-xl font-semibold text-gray-800">Q. Can I book a table in advance?</h3> <p class="text-gray-700">Definitely! Use our Reserve a Table option to secure your spot and enjoy a hassle-free dining experience.</p> </div> </div> </div> <!-- Call to Action Section --> <div class="mt-16 text-center"> <h2 class="text-3xl font-bold text-gray-800 mb-8">Visit Us Today or Order Online!</h2> <p class="text-gray-700 mb-8">Whether you want a quick takeout, a delivery to your home, or a relaxed meal at our cosy restaurant, Vanchu Hut is here to serve you.</p> <a href="/menu" class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">View Menu & Order Online</a> </div> </div> </section> ` }));
}, "/workspaces/vanchuhut-branch2/src/pages/servicearea/index.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/servicearea/index.astro";
const $$url = "/servicearea";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
