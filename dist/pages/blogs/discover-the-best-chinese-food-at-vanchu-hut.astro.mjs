/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Bp2nhWV8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../../chunks/LandingImage_BSjkF7PI.mjs';
import { B as Blog1Img } from '../../chunks/blog1_CALiDxJN.mjs';
/* empty css                                                                           */
export { renderers } from '../../renderers.mjs';

const $$DiscoverTheBestChineseFoodAtVanchuHut = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Discover the Best...Vanchu Hut", href: "#", current: true }
  ];
  const blogData = {
    title: "Discover the Top Dishes You Must Try at Vanchu Hut \u2013 Best Chinese Food in Pratap Vihar",
    metaTitle: "Discover the Best Chinese Food at Vanchu Hut \u2013 Top Dishes in Pratap Vihar",
    metaDescription: "Explore the top 5 must-try dishes at Vanchu Hut. From spicy Hakka Noodles to crispy Chicken Salt & Pepper, find the best Chinese food in Pratap Vihar, Ghaziabad.",
    image: Blog1Img,
    dishes: [
      {
        name: "Hakka Noodles",
        description: "Craving something with a kick? Our Hakka Noodles are the perfect choice for spice enthusiasts. The bold and zesty flavours will leave your taste buds tingling! Ideal for those seeking the best Chinese food in Pratap Vihar."
      },
      {
        name: "Chicken Salt & Pepper\u2013 Crispy & Flavourful",
        description: "Enjoy crispy, tender chicken tossed in a spicy, tangy sauce with our Chicken Salt & Pepper. It's a fan favourite and a must-try for anyone looking for affordable Chinese food in Ghaziabad."
      },
      {
        name: "Dim Sum - Kurkure Momos",
        description: "You can't call it a complete Chinese meal without Dim Sum. These bite-sized, flavorful dumplings are perfect for sharing and are available in a variety of fillings. Whether you love vegetables or meat, we have it all at Vanchu Hut!"
      },
      {
        name: "Honey Chilli Potato",
        description: "For a perfect blend of sweet and spicy, try our Honey Chilli Potato. Crispy, golden potatoes coated in a sweet, tangy sauce are sure to satisfy your cravings for popular Chinese dishes."
      },
      {
        name: "Hot and Sour Soup - The ideal Starter",
        description: "Warming and delicious, our Hot and Sour Soup is the ideal way to start your meal at Vanchu Hut. Its perfect balance of heat and tanginess prepares you for a delightful meal."
      }
    ],
    faqs: [
      {
        question: "What is the best Chinese dish at Vanchu Hut?",
        answer: "Our Chili Chicken and Schezwan Noodles are customer favourites and must-try dishes if you're in the mood for spicy, flavourful Chinese food."
      },
      {
        question: "Do you offer delivery for Chinese food in Pratap Vihar?",
        answer: "Yes! We offer Chinese food delivery in Pratap Vihar for your convenience. . Enjoy your favourite dishes from Vanchu Hut, right at your doorstep."
      },
      {
        question: "What makes Vanchu Hut different from other Chinese restaurants in Ghaziabad?",
        answer: "We offer authentic Chinese cuisine in Ghaziabad at unbeatable prices, and our customer service ensures that every meal is a delightful experience."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blogData.metaTitle, "description": blogData.metaDescription, "data-astro-cid-i54xcl43": true }, { "default": ($$result2) => renderTemplate` >
${maybeRenderHead()}<section class=" font-agdasima " data-astro-cid-i54xcl43> <!-- <Image format="avif" src={heroImg} class="scale-100 w-screen h-[168px] transform -translate-y-[101px] md:-translate-y-[60px] object-cover" alt="Decorative header - Vanchu Hut Chinese cuisine ambiance"/> --> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "class": "scale-100 w-screen h-[168px] transform -translate-y-[100px] md:-translate-y-[65px]  object-cover", "alt": "Header Image, shows picture of Various Chinese Food on a Table", "data-astro-cid-i54xcl43": true })} </section>  <nav class="flex px-4 " aria-label="Breadcrumb" data-astro-cid-i54xcl43> <ol class="flex items-center space-x-2" data-astro-cid-i54xcl43> ${breadcrumbs.map((item, index) => renderTemplate`<li class="flex items-center" data-astro-cid-i54xcl43> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-i54xcl43> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-i54xcl43></path> </svg>`} ${item.current ? renderTemplate`<span class="text-gray-600" aria-current="page" data-astro-cid-i54xcl43>${item.label}</span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-primary hover:text-primary/80" data-astro-cid-i54xcl43>${item.label}</a>`} </li>`)} </ol> </nav> <main class="max-w-4xl mx-auto px-4 py-8" data-astro-cid-i54xcl43> <!-- Hero Section --> <div class="relative h-[400px] mb-8 rounded-lg overflow-hidden" data-astro-cid-i54xcl43> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": blogData.image, "alt": "Delicious Chinese dishes at Vanchu Hut", "class": "w-full h-full object-cover", "data-astro-cid-i54xcl43": true })} </div> <!-- Content --> <article class="prose prose-lg max-w-none" data-astro-cid-i54xcl43> <h1 data-astro-cid-i54xcl43>${blogData.title}</h1> <p class="lead" data-astro-cid-i54xcl43>
Looking for authentic Chinese food near me? Look no further! Vanchu Hut, located in Pratap Vihar, is your go-to spot for delicious and affordable Chinese food in Ghaziabad.
</p> <h2 data-astro-cid-i54xcl43>Top 5 Must-Try Dishes</h2> ${blogData.dishes.map((dish, index) => renderTemplate`<div class="mb-6" data-astro-cid-i54xcl43> <h3 data-astro-cid-i54xcl43>${index + 1}. ${dish.name}</h3> <p data-astro-cid-i54xcl43>${dish.description}</p> </div>`)} <h2 data-astro-cid-i54xcl43>Why Visit Vanchu Hut?</h2> <p data-astro-cid-i54xcl43>
At Vanchu Hut, we believe that great food doesn't have to come at a high price. From vegetarian Chinese options to affordable delivery in Pratap Vihar, we ensure that every bite is packed with flavour and value.Whether you're dining with family or ordering takeout, we guarantee a satisfying experience.
</p> <div class="bg-primary/10 p-6 rounded-lg my-8" data-astro-cid-i54xcl43> <h2 class="text-2xl font-bold mb-4" data-astro-cid-i54xcl43>Frequently Asked Questions</h2> ${blogData.faqs.map((faq) => renderTemplate`<details class="mb-4" data-astro-cid-i54xcl43> <summary class="font-semibold cursor-pointer" data-astro-cid-i54xcl43>${faq.question}</summary> <p class="mt-2 pl-4" data-astro-cid-i54xcl43>${faq.answer}</p> </details>`)} </div> <div class="flex justify-center gap-4 my-8" data-astro-cid-i54xcl43> <a href="/menu" class="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90" data-astro-cid-i54xcl43>
View Our Menu
</a> <a href="/contact" class="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90" data-astro-cid-i54xcl43>
Contact Us
</a> </div> </article> </main> ` })} `;
}, "/workspaces/vanchuhut-branch2/src/pages/blogs/discover-the-best-chinese-food-at-vanchu-hut.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/blogs/discover-the-best-chinese-food-at-vanchu-hut.astro";
const $$url = "/blogs/discover-the-best-chinese-food-at-vanchu-hut";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DiscoverTheBestChineseFoodAtVanchuHut,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
