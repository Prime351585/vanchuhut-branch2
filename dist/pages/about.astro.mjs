/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bp2nhWV8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg, l as logoImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
export { renderers } from '../renderers.mjs';

const Image1 = new Proxy({"src":"/_astro/noodles.C8hOyZwz.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/about/noodles.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/about/noodles.svg");
							return target[name];
						}
					});

const Image2 = new Proxy({"src":"/_astro/celebration.BwvnWPzn.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/about/celebration.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/about/celebration.svg");
							return target[name];
						}
					});

const Image3 = new Proxy({"src":"/_astro/quality.BHPFWrmQ.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/about/quality.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/about/quality.svg");
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const ourStory = [
    {
      year: "",
      title: "",
      img: Image1,
      alt: "Image of a noodle bowl",
      description: "At Vanchu Hut, we bring you the bold and unique flavors of Chinese cuisine, from savory dumplings and sizzling stir-fried noodles to popular dishes like fried rice and crispy spring rolls. We\u2019re proud to be known for our authentic Chinese dishes, prepared with recipes that pay homage to traditional flavors"
    },
    {
      year: "",
      title: "",
      img: Image2,
      alt: "Image of a Party Popper",
      description: "Our restaurant is family-friendly, with a comfortable atmosphere ideal for gatherings, small celebrations, or simply enjoying a cozy meal with friends. We\u2019re all about creating a welcoming vibe for everyone who steps through our doors."
    },
    {
      year: "",
      title: "",
      img: Image3,
      alt: "Image of a Quality Badge",
      description: "Whether you\u2019re a regular or trying us out for the first time, Vanchu Hut is dedicated to quality, from ingredients to service. We aim to be your top choice for Chinese food near Pratap Vihar and beyond."
    }
  ];
  const values = [
    {
      title: "Authenticity You Can Taste",
      description: "Every dish is crafted with traditional recipes and techniques passed down through generations.",
      icon: "\u{1F958}"
    },
    {
      title: "Top-Rated & Trusted",
      description: "We source the finest local and imported ingredients to ensure the highest quality in every meal.",
      icon: "\u{1F33F}"
    },
    {
      title: "Family Values",
      description: "We treat every guest as family, creating a warm and welcoming atmosphere for all.",
      icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Vanchu Hut", "description": "Craving affordable Chinese food in Pratap Vihar? Discover popular Chinese dishes and delicious vegetarian options at Vanchu Hut.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="hidden" data-astro-cid-kh7btl4r>Vanchu Hut - Affordable Chinese Food in Pratap Vihar, Ghaziabad</h1> <section class="py-12 bg-white-100 font-agdasima" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": HeroImg, "class": "scale-100 w-screen h-[140px] transform -translate-y-[101px] md:-translate-y-[60px]  object-cover", "alt": "Decorative header - Vanchu Hut Chinese cuisine ambiance", "data-astro-cid-kh7btl4r": true })} <!-- Hero Section --> <!-- Welcome Section --> <section class=" bg-white" data-astro-cid-kh7btl4r> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-kh7btl4r> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-astro-cid-kh7btl4r> <div class="space-y-6" data-astro-cid-kh7btl4r> <h2 class="text-3xl md:text-4xl font-bold text-primary" data-astro-cid-kh7btl4r>
Discover Affordable Chinese Food at Vanchu Hut in Pratap Vihar
</h2> <p class="text-gray-600 leading-relaxed" data-astro-cid-kh7btl4r>
Welcome to Vanchu Hut, your go-to destination for delicious and affordable Chinese food in Pratap Vihar. Nestled in the heart of Ghaziabad, we pride ourselves on serving a variety of popular Chinese dishes that cater to every palate. Whether you’re craving classic favorites or innovative twists on traditional recipes, our menu is designed to delight both meat lovers and vegetarians alike. </p> <p class="text-gray-600 leading-relaxed" data-astro-cid-kh7btl4r>
At Vanchu Hut, we understand the importance of quality and flavor. Our chefs use the freshest ingredients to create mouth-watering dishes that reflect the authentic tastes of Chinese cuisine. From savory stir-fries to delectable dim sum, we’ve got something for everyone, including a wide selection of vegetarian Chinese food that has made us a favorite in Ghaziabad. </p> </div> <div class="relative h-[400px] rounded-lg overflow-hidden shadow-xl" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": logoImg, "alt": "About Us, and our values in the resturant in Pratap Vihar Ghaziabad", "class": "w-full h-full object-cover", "data-astro-cid-kh7btl4r": true })} </div> </div> </div> </section> <!-- Timeline Section --> <section class="py-16 bg-gray-50 " data-astro-cid-kh7btl4r> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-kh7btl4r> <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12" data-astro-cid-kh7btl4r>
WHY CHOOSE US
</h2> <div class="space-y-12" data-astro-cid-kh7btl4r> ${ourStory.map((story, index) => renderTemplate`<div${addAttribute(`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} gap-8 items-center`, "class")} data-astro-cid-kh7btl4r> <div class="w-full md:w-1/3 text-center" data-astro-cid-kh7btl4r> <div class="text-4xl font-bold text-secondary mb-2" data-astro-cid-kh7btl4r>${story.year}</div> <h3 class="text-xl font-semibold text-primary" data-astro-cid-kh7btl4r>${story.title}</h3> <div class="flex items-center justify-center" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": story.img, "alt": story.alt, "class": "w-20 h-20", "data-astro-cid-kh7btl4r": true })} </div> </div> <div class="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md" data-astro-cid-kh7btl4r> <p class="text-gray-600" data-astro-cid-kh7btl4r>${story.description}</p> </div> </div>`)} </div> </div> </section> <!-- Values Section --> <section class="py-16 bg-white" data-astro-cid-kh7btl4r> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-kh7btl4r> <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12" data-astro-cid-kh7btl4r>
Our Values
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-kh7btl4r> ${values.map((value) => renderTemplate`<div class="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300" data-astro-cid-kh7btl4r> <div class="text-4xl mb-4" data-astro-cid-kh7btl4r>${value.icon}</div> <h3 class="text-xl font-semibold text-primary mb-3" data-astro-cid-kh7btl4r>${value.title}</h3> <p class="text-gray-600" data-astro-cid-kh7btl4r>${value.description}</p> </div>`)} </div> </div> </section> <!-- Call to Action --> <section class="py-16 -mb-12 bg-primary text-white" data-astro-cid-kh7btl4r> <div class="container mx-auto px-4 max-w-7xl text-center" data-astro-cid-kh7btl4r> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-kh7btl4r>
Join Us for an Authentic Chinese Dining Experience
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto" data-astro-cid-kh7btl4r>
Come taste the difference that passion, tradition, and quality ingredients make.
</p> <div class="flex flex-col md:flex-row gap-4 justify-center" data-astro-cid-kh7btl4r> <a href="/menu" class="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300" data-astro-cid-kh7btl4r>
View Our Menu
</a> <a href="/reservation" class="inline-block px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-300" data-astro-cid-kh7btl4r>
Make a Reservation
</a> </div> </div> </section> </section> ` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/about.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
