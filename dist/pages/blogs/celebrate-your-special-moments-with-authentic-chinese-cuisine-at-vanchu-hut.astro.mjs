/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Bp2nhWV8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../../chunks/LandingImage_BSjkF7PI.mjs';
import { B as Blog2Img } from '../../chunks/blog2_BI1wvPAp.mjs';
export { renderers } from '../../renderers.mjs';

const $$CelebrateYourSpecialMomentsWithAuthenticChineseCuisineAtVanchuHut = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Celebrate Your...Vanchu Hut", href: "#", current: true }
  ];
  const blogData = {
    title: "Celebrate Your Special Moments with Authentic Chinese Cuisine at Vanchu Hut",
    metaTitle: "Top Chinese Dishes You Can't Miss at Vanchu Hut \u2013 Best Chinese Food in Pratap Vihar",
    metaDescription: "Explore the must-try Chinese dishes at Vanchu Hut. From Hakka Noodles to Honey Chilli Potato, discover the best Chinese food in Pratap Vihar, Ghaziabad. Affordable, delicious, and perfect for any occasion!",
    image: Blog2Img,
    sections: [
      {
        title: "Why Choose Chinese Food for Special Occasions?",
        content: "Chinese cuisine is synonymous with bold flavours, aromatic spices, and diverse textures. It offers something for everyone, whether you're craving something spicy, sweet, savoury, or light. When it comes to celebrating special moments like anniversaries, birthdays, or family gatherings, Chinese food brings people together in a way that few other cuisines can. The beauty of sharing plates, from stir-fried vegetables to sizzling meat dishes, makes it the perfect choice for creating lasting memories."
      },
      {
        title: "What Makes Vanchu Hut's Chinese Food Stand Out?",
        content: "At Vanchu Hut, we are committed to bringing the authentic taste of Chinese cuisine to Pratap Vihar, Ghaziabad. Our chefs use fresh, high-quality ingredients to prepare each dish, ensuring that every bite is packed with flavour.",
        features: [
          "Authentic Flavors: We focus on delivering the true essence of Chinese food, from the perfect balance of heat and sweetness to the crispy textures that make each dish unique.",
          "Wide Variety: Whether you're in the mood for vegetarian Chinese food or delicious meat options, we've got you covered. From starters like Dim Sum to mains like Chilli Chicken and Schezwan Noodles, there's something for everyone.",
          "Customizable Orders: We understand that each occasion is different, so we offer customizable catering options that can be tailored to your specific preferences and dietary needs."
        ]
      },
      {
        title: "How Vanchu Hut Enhances Your Celebration",
        content: "At Vanchu Hut, we not only serve delicious food but also create an atmosphere that enhances your celebration. Whether you're hosting a cozy dinner or a larger gathering, we strive to make your experience unforgettable. Our friendly staff is dedicated to making sure everything goes smoothly, so you can focus on enjoying the special moment with your loved ones."
      },
      {
        title: "Celebrate with Vanchu Hut's Delivery Service",
        content: "For those who prefer to celebrate at home, we also offer delivery services to make your occasion hassle-free. You can enjoy your favourite Chinese dishes without having to step out of the house. Whether it's a quiet night in or a big family get-together, our food is just a phone call away!"
      }
    ],
    dishes: [
      {
        name: "Veg Hakka Noodles",
        description: "This dish is a go-to option for vegetarians. Loaded with fresh veggies and tossed in a spicy soy-based sauce, these noodles are always a hit."
      },
      {
        name: "Paneer Manchurian",
        description: "For a vegetarian delight, try our Paneer Manchurian, with soft, crispy paneer cubes tossed in a spicy, tangy sauce that will surely please your taste buds."
      },
      {
        name: "Momos",
        description: "These steamed dumplings filled with savoury fillings like chicken or vegetables are the ultimate comfort food, great for sharing with family and friends."
      },
      {
        name: "Honey Chilli Potato",
        description: "Crispy, sweet, and spicy potatoes coated with a tangy sauce make for the perfect appetizer to start your celebration meal."
      }
    ],
    faqs: [
      {
        question: "What are the best dishes to order for a large group?",
        answer: "For large gatherings, we recommend ordering a mix of appetizers like Dim Sum, mains such as Noodles, and Hakka Noodles, and sides like Honey Chilli Potatoes."
      },
      {
        question: "Can I order for delivery for special occasions?",
        answer: "Yes, we offer convenient delivery options so you can enjoy Vanchu Hut's authentic Chinese food from the comfort of your home."
      },
      {
        question: "Do you offer catering for events?",
        answer: "Yes, we offer catering services for parties and events, ensuring that your celebration is complete with delicious food everyone will love."
      },
      {
        question: "Is there a vegetarian menu available?",
        answer: "Absolutely! We offer a wide range of vegetarian options, including Vegetable Hakka Noodles, Chilli Paneer, and Veg Fried Rice."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blogData.metaTitle, "description": blogData.metaDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" font-agdasima "> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "class": "scale-100 w-screen h-[168px] transform -translate-y-[100px] md:-translate-y-[60px]  object-cover", "alt": "Header Image, shows picture of Various Chinese Food on a Table" })} </section> <nav class="flex px-4 " aria-label="Breadcrumb"> <ol class="flex items-center space-x-2"> ${breadcrumbs.map((item, index) => renderTemplate`<li class="flex items-center"> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg>`} ${item.current ? renderTemplate`<span class="text-gray-600" aria-current="page">${item.label}</span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-primary hover:text-primary/80">${item.label}</a>`} </li>`)} </ol> </nav> <main class="max-w-4xl mx-auto px-4 py-8"> <div class="relative h-[400px] mb-8 rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": blogData.image, "alt": "Delicious Chinese dishes at Vanchu Hut", "class": "w-full h-full object-cover" })} </div> <article class="max-w-4xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold text-primary mb-8">${blogData.title}</h1> <p class="lead text-xl text-gray-700 mb-8">
Are you planning a family celebration, a birthday party, or just looking to treat your loved ones to something special? There's no better way to make these moments unforgettable than with a feast of authentic Chinese food.At Vanchu Hut, we offer a wide selection of dishes that are perfect for sharing with friends and family, making your special occasion even more memorable.
</p> ${blogData.sections.map((section, index) => renderTemplate`<section class="mb-12"> <h2 class="text-2xl font-semibold text-secondary mb-4">${section.title}</h2> <p class="text-gray-700">${section.content}</p> ${section.features && renderTemplate`<ul class="list-disc pl-6 mt-4 space-y-2"> ${section.features.map((feature, idx) => renderTemplate`<li class="text-gray-700">${feature}</li>`)} </ul>`} </section>`)} <section class="mb-12"> <h2 class="text-2xl font-semibold text-secondary mb-6">Must-Try Dishes for Your Special Celebration</h2> <div class="grid md:grid-cols-2 gap-6"> ${blogData.dishes.map((dish, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md"> <h3 class="font-semibold mb-2">${dish.name}</h3> <p class="text-gray-600">${dish.description}</p> </div>`)} </div> </section> <section class="bg-primary/10 p-6 rounded-lg mb-12"> <h2 class="text-2xl font-semibold mb-6">Frequently Asked Questions</h2> ${blogData.faqs.map((faq, index) => renderTemplate`<details class="mb-4 bg-white p-4 rounded-lg"> <summary class="font-semibold cursor-pointer">${faq.question}</summary> <p class="mt-2 pl-4 text-gray-600">${faq.answer}</p> </details>`)} </section> <section class="mb-12"> <h2 class="text-2xl font-semibold text-secondary mb-4">Conclusion: Celebrate at Vanchu Hut</h2> <p class="text-gray-700">
Whether you're celebrating a birthday, anniversary, or just want to treat your family and friends to something special, Vanchu Hut is here to make your occasion extraordinary. With our wide variety of authentic Chinese dishes and affordable pricing, we ensure your celebration is delicious, memorable, and stress-free. Visit us or place an order today to experience the best Chinese food in Pratap Vihar.
</p> </section> <div class="flex justify-center gap-6"> <a href="/contact" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90">
Contact Us
</a> <a href="/menu" class="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90">
View Menu
</a> </div> </article> </main> ` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/blogs/celebrate-your-special-moments-with-authentic-chinese-cuisine-at-vanchu-hut.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/blogs/celebrate-your-special-moments-with-authentic-chinese-cuisine-at-vanchu-hut.astro";
const $$url = "/blogs/celebrate-your-special-moments-with-authentic-chinese-cuisine-at-vanchu-hut";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CelebrateYourSpecialMomentsWithAuthenticChineseCuisineAtVanchuHut,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
