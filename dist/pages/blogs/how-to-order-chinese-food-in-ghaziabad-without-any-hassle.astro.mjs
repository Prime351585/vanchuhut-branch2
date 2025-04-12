/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Bp2nhWV8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../../chunks/LandingImage_BSjkF7PI.mjs';
import { B as Blog3Img } from '../../chunks/blog3_Dp9KrvGK.mjs';
export { renderers } from '../../renderers.mjs';

const $$HowToOrderChineseFoodInGhaziabadWithoutAnyHassle = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "How to Order...Hassle", href: "#", current: true }
  ];
  const blogData = {
    title: "How to Order Chinese Food in Ghaziabad Without Any Hassle",
    metaTitle: "Guide to Ordering Chinese Food in Ghaziabad | Vanchu Hut",
    metaDescription: "Learn how to order Chinese food in Ghaziabad easily. Tips, tricks, and recommendations for the best ordering experience.",
    image: Blog3Img,
    introduction: "Chinese cuisine has become an all-time favourite for food lovers across Ghaziabad, offering flavours that range from spicy to tangy and everything in between. Whether you're planning a cozy family dinner or craving a late-night snack, ordering Chinese food doesn't have to be complicated. Here's your ultimate guide to ordering Chinese food in Ghaziabad with ease.",
    sections: [
      {
        title: "Why Ordering Chinese Food is Popular in Ghaziabad",
        content: "Ghaziabad's food scene is buzzing with restaurants that offer Chinese cuisine, making it a hub for foodies who love bold flavours. Restaurants like Vanchu Hut combine authentic cooking techniques with a local twist, ensuring that every dish delights your taste buds. With online delivery services and quick takeaway options, enjoying Chinese food has never been easier."
      },
      {
        title: "Simplifying Your Chinese Food Ordering Experience",
        subsections: [
          {
            title: "Use Food Delivery Apps for Convenience",
            content: 'Apps like Zomato and Swiggy provide a wide range of options for Chinese food delivery in Ghaziabad. You can browse menus, check customer reviews, and place your order in just a few clicks. Simply search for "Chinese food delivery in Ghaziabad" and find places like Vanchu Hut, known for its delicious and affordable dishes.'
          },
          {
            title: "Know Your Favourite Dishes",
            content: "Chinese menus are filled with tempting options, from starters like momos and spring rolls to main courses like noodles and fried rice. Knowing your preferences can make ordering quicker and more satisfying. For example, if you're a fan of spicy flavours, Chilli Paneer or Schezwan noodles are excellent choices."
          },
          {
            title: "Customize Your Order",
            content: "Many restaurants offer customization options for spice levels, portion sizes, and additional toppings. At Vanchu Hut, we cater to your needs, ensuring that every dish suits your taste."
          },
          {
            title: "Call the Restaurant Directly",
            content: "For a more personalized experience, contact the restaurant. Speaking to staff members can help clarify the menu and get recommendations based on your preferences."
          }
        ]
      }
    ],
    tips: [
      "Choose Trusted Restaurants: Opt for places with good reviews and hygiene standards. Restaurants like Vanchu Hut are known for their high-quality food and service.",
      "Check Offers and Discounts: Many restaurants provide exclusive deals for online orders or group meals. Keep an eye out for promotions like combo offers at Vanchu Hut.",
      "Plan for Takeaway or Dine-In: If you're not in the mood for delivery, visiting a restaurant can be a fun experience. Enjoy freshly prepared dishes served with warmth."
    ],
    whyChooseUs: {
      title: "Why Choose Vanchu Hut for Chinese Food in Ghaziabad?",
      content: "Vanchu Hut, located in Pratap Vihar, is a top choice for Chinese food lovers in Ghaziabad. With a wide menu featuring everything from Veg Manchurian to Fried Rice, we deliver both taste and affordability. Whether it's a casual meal or a party order, our team ensures that your dining experience is exceptional."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blogData.metaTitle, "description": blogData.metaDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" font-agdasima "> <!-- <Image format="avif" src={heroImg} class="scale-100 w-screen h-[168px] transform -translate-y-[101px] md:-translate-y-[60px] object-cover" alt="Decorative header - Vanchu Hut Chinese cuisine ambiance"/> --> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "class": "scale-100 w-screen h-[168px] transform -translate-y-[100px] md:-translate-y-[60px]  object-cover", "alt": "Header Image, shows picture of Various Chinese Food on a Table" })} </section> <nav class="flex px-4 " aria-label="Breadcrumb"> <ol class="flex items-center space-x-2"> ${breadcrumbs.map((item, index) => renderTemplate`<li class="flex items-center"> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg>`} ${item.current ? renderTemplate`<span class="text-gray-600" aria-current="page">${item.label}</span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-primary hover:text-primary/80">${item.label}</a>`} </li>`)} </ol> </nav> <main class="max-w-4xl mx-auto px-4 py-8"> <div class="relative h-[400px] mb-8 rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": blogData.image, "alt": "Guide to ordering Chinese food in Ghaziabad", "class": "w-full h-full object-cover" })} </div> <article class="prose prose-lg max-w-4xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold text-primary mb-8">${blogData.title}</h1>  <div class="bg-gray-50 p-6 rounded-lg mb-8"> <h2 class="text-xl font-semibold mb-4">Table of Contents</h2> <ol class="list-decimal pl-4"> <li>Why Ordering Chinese Food is Popular in Ghaziabad</li> <li>Simplifying Your Chinese Food Ordering Experience
<ul class="list-disc pl-6 mt-2"> <li>Use Food Delivery Apps for Convenience</li> <li>Know Your Favourite Dishes</li> <li>Customize Your Order</li> <li>Call the Restaurant Directly</li> </ul> </li> <li>Tips for a Hassle-Free Dining Experience</li> <li>Why Choose Vanchu Hut for Chinese Food in Ghaziabad</li> </ol> </div>  <p class="text-gray-700 mb-8">${blogData.introduction}</p>  ${blogData.sections.map((section, index) => renderTemplate`<section class="mb-12"> <h2 class="text-2xl font-semibold text-secondary mb-4"> ${section.title} </h2> <p class="text-gray-700 mb-4">${section.content}</p> ${section.subsections && renderTemplate`<div class="space-y-6 pl-4"> ${section.subsections.map((sub, subIndex) => renderTemplate`<div> <h3 class="text-xl font-semibold mb-2">${sub.title}</h3> <p class="text-gray-700">${sub.content}</p> </div>`)} </div>`} </section>`)}  <section class="bg-primary/10 p-6 rounded-lg mb-12"> <h2 class="text-2xl font-semibold mb-4">Tips for a Hassle-Free Dining Experience</h2> <ul class="list-disc pl-6 space-y-2"> ${blogData.tips.map((tip, index) => renderTemplate`<li class="text-gray-700">${tip}</li>`)} </ul> </section>  <section class="mb-12"> <h2 class="text-2xl font-semibold text-secondary mb-4"> ${blogData.whyChooseUs.title} </h2> <p class="text-gray-700">${blogData.whyChooseUs.content}</p> </section>  <div class="flex justify-center gap-6 mt-12"> <a href="/menu" class="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90">
View Our Menu
</a> <a href="/contact" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90">
Contact Us
</a> </div> </article> </main> ` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/blogs/how-to-order-chinese-food-in-ghaziabad-without-any-hassle.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/blogs/how-to-order-chinese-food-in-ghaziabad-without-any-hassle.astro";
const $$url = "/blogs/how-to-order-chinese-food-in-ghaziabad-without-any-hassle";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$HowToOrderChineseFoodInGhaziabadWithoutAnyHassle,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
