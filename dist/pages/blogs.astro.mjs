/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bp2nhWV8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
import { B as Blog1Img } from '../chunks/blog1_CALiDxJN.mjs';
import { B as Blog2Img } from '../chunks/blog2_BI1wvPAp.mjs';
import { B as Blog3Img } from '../chunks/blog3_Dp9KrvGK.mjs';
import { B as Blog4Img } from '../chunks/blog4_ClV9ELpf.mjs';
import { B as Blog5Img } from '../chunks/blog5_C6b1A8C-.mjs';
import { B as Blog6Img } from '../chunks/blog6_Cr_Ja6QY.mjs';
import { B as Blog7Img } from '../chunks/blog7_D9zDVgxR.mjs';
import { B as Blog8Img } from '../chunks/blog8_B5G4qV5r.mjs';
import { B as Blog9Img } from '../chunks/blog9_8AqCIGJ1.mjs';
import { B as Blog10Img } from '../chunks/blog10_B042nKdt.mjs';
import { B as Blog11Img } from '../chunks/blog11_CjYFg26O.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://vanchuhut.in");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, description, image, date, buttonLink, timetoRead } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white shadow-lg rounded-lg overflow-hidden "> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": image, "alt": "Blog Image", "class": "w-full h-44 object-cover object-center" })} <div class="p-6 flex flex-col justify-center"> <a${addAttribute(buttonLink, "href")}> <h2 class="font-semibold text-2xl text-primary hover:text-secondary">${title}</h2> </a> <div class="flex justify-between m-2 px-5"> <p class="text-gray-800 text-sm mt-2">Vanchu Hut</p> <p class="text-gray-800 text-sm mt-2">${date}</p> <p class="text-gray-800 text-sm mt-2">${timetoRead}</p> </div> <p class="text-gray-500 text-md mt-2">${description.length > 150 ? description.substring(0, 150) + "..." : description}</p> <div class="flex mt-4"> <a${addAttribute(buttonLink, "href")} class="inline-block px-4 py-2 bg-secondary text-white text-sm rounded hover:bg-secondary/90">
Read More
</a> </div> </div> </article>`;
}, "/workspaces/vanchuhut-branch2/src/components/BlogCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const blogCardContent = [
    {
      metaTitle: "Discover the Best Chinese Food at Vanchu Hut \u2013 Top Dishes in Pratap Vihar",
      metaDescription: "Vanchu Hut is the best Chinese restaurant in Ghaziabad. We offer a wide range of Chinese dishes, including dumplings, noodles, and more. Our food is made with fresh ingredients and authentic Chinese flavors. Visit us today to enjoy delicious Chinese food!",
      image: Blog1Img,
      publishDate: "2024-03-15",
      buttonlink: "/blogs/discover-the-best-chinese-food-at-vanchu-hut",
      timetoread: "5 min"
    },
    {
      title: "Celebrate Your Special Moments with Authentic Chinese Cuisine at Vanchu Hut",
      metaTitle: "Top Chinese Dishes You Can't Miss at Vanchu Hut \u2013 Best Chinese Food in Pratap Vihar",
      metaDescription: "Explore the must-try Chinese dishes at Vanchu Hut. From Hakka Noodles to Honey Chilli Potato, discover the best Chinese food in Pratap Vihar, Ghaziabad.",
      image: Blog2Img,
      publishDate: "2024-11-23",
      buttonlink: "/blogs/celebrate-your-special-moments-with-authentic-chinese-cuisine-at-vanchu-hut",
      timetoread: "7 min"
    },
    {
      title: "How to Order Chinese Food in Ghaziabad Without Any Hassle",
      metaTitle: "Guide to Ordering Chinese Food in Ghaziabad | Vanchu Hut",
      metaDescription: "Learn how to order Chinese food in Ghaziabad easily. Tips, tricks, and recommendations for the best ordering experience.",
      image: Blog3Img,
      publishDate: "2024-12-12",
      buttonlink: "/blogs/how-to-order-chinese-food-in-ghaziabad-without-any-hassle",
      timetoread: "5 min"
    },
    {
      title: "The Secrets Behind Popular Chinese Dishes in Ghaziabad",
      metaTitle: "Popular Chinese Dishes in Ghaziabad | Secret Recipes & Flavors",
      metaDescription: "Discover the secrets behind popular Chinese dishes in Ghaziabad. Learn about authentic flavors and fusion cuisine at Vanchu Hut.",
      image: Blog4Img,
      publishDate: "2024-12-24",
      buttonlink: "/blogs/the-secrets-behind-popular-chinese-dishes-in-ghaziabad",
      timetoread: "6 min"
    },
    {
      title: "The Role of Ambiance in Dining: Why Vanchu Hut Stands Out in Ghaziabad",
      metaTitle: "Why Vanchu Hut\u2019s Ambiance Makes Dining in Ghaziabad Special",
      metaDescription: "At Vanchu Hut in Ghaziabad, we blend cozy decor, family-friendly seating, and relaxing ambiance with delicious Chinese cuisine. Discover why our atmosphere makes every meal memorable!",
      image: Blog5Img,
      publishDate: "2025-01-12",
      buttonlink: "/blogs/the-role-of-ambiance-in-dining",
      timetoread: "8 min"
    },
    {
      title: "Dining Out: The Ultimate Stress Reliever and How to Make It Special at Vanchu Hut",
      metaTitle: "Dining Out: The Ultimate Stress Reliever",
      metaDescription: "Discover how dining out at Vanchu Hut can be the ultimate stress reliever. Enjoy great food, excellent service, and a soothing ambiance.",
      image: Blog6Img,
      publishDate: "2025-01-21",
      buttonlink: "/blogs/dining-out-the-ultimate-stress-reliever",
      timetoread: "5 min"
    },
    {
      title: "Love in the Making: The Remarkable Blend of Indian and Chinese Cuisine!",
      metaTitle: "Love in the Making: The Remarkable Blend of Indian and Chinese Cuisine",
      metaDescription: "Satiate your curiosity about Chinese food in India and why it's loved so much. Browse through the best Chinese restaurant menu in Ghaziabad at Vanchu Hut.",
      publishDate: "2025-02-11",
      image: Blog7Img,
      buttonlink: "/blogs/love-in-the-making",
      timetoread: "5 min"
    },
    {
      title: "Fried Rice and Manchurian: Tips for Cooking, Recipes, and Vanchu Hut Review",
      metaTitle: "Fried Rice and Manchurian: Tips for Cooking, Recipes, and Vanchu Hut Review",
      metaDescription: "Learn how to make fried rice and manchurian, get tips, and find out the best Chinese restaurant in Ghaziabad. Read here!",
      publishDate: "2025-02-23",
      image: Blog8Img,
      buttonlink: "/blogs/fried-rice-and-manchurian-tips-for-cooking",
      timetoread: "7 min"
    },
    {
      title: "The 5 Leading Food Delivery Applications in India",
      metaTitle: "Top 5 Food Delivery Apps in India | Comparison & Reviews",
      metaDescription: "Explore food delivery apps in India and view their pros, cons, detailed reviews, and pricing. Make a comparison of Zomato, Swiggy, Uber Eats, and others.",
      publishDate: "2025-03-14",
      image: Blog9Img,
      buttonlink: "/blogs/top-five-food-delivery-partner",
      timetoread: "8 min"
    },
    {
      title: "From Farm to Table: The Importance of Sustainable Dining in India",
      metaTitle: "Sustainable Dining in India: Farm-to-Table at Vanchu Hut",
      metaDescription: "Discover sustainable dining at Vanchu Hut! Explore the best food in Ghaziabad while supporting local farmers and enjoying fresh, eco-friendly meals.",
      publishDate: "2025-04-11",
      image: Blog10Img,
      // Note: Update to BlogImgPlaceholder when available
      buttonlink: "/blogs/the-importance-of-sustainable-dining-in-india",
      timetoread: "7 min"
    },
    {
      title: "The Art of Pairing: Perfect Food and Beverage Combinations for Chinese Palates",
      metaTitle: "Perfect Food & Drink Pairings for Chinese Cuisine | Vanchu Hut",
      metaDescription: "Discover the best food in Ghaziabad with Vanchu Hut's expert tips on pairing Chinese cuisine with beverages. Elevate your dining experience today!",
      publishDate: "2025-04-22",
      image: Blog11Img,
      // Note: You'll need to replace with BlogPairingHeroPlaceholder when available
      buttonlink: "/blogs/perfect-food-and-beverage-combinations-for-chinese-palates",
      timetoread: "6 min"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vanchu Hut Menu - Best Chinese Restaurant Menu in Ghaziabad", "description": "Explore Vanchu Hut's menu for the best Chinese food in Ghaziabad! Enjoy delicious takeout, mouth-watering dumplings, and flavorful noodles in Pratap Vihar." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" bg-gray-100 min-h-screen font-agdasima "> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "format": "avif", "class": "scale-100 w-screen h-[168px] transform -translate-y-[101px] md:-translate-y-[60px]  object-cover", "alt": "Decorative header - Vanchu Hut Chinese cuisine ambiance" })} <h1 class="hidden">Welcome To Vanchu Hut Blog Page</h1> <h2 class="text-primary text-5xl font-bold text-center ">
Vanchu Hut Blog
</h2> <h2 class="text-center text-lg text-gray-500 mt-4 pb-10">
Discover our culinary stories, recipes, and restaurant updates
</h2> <div class="px-5 grid grid-cols-1 md:grid-cols-3 gap-4"> ${blogCardContent.reverse().map((card, index) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": card.metaTitle, "date": card.publishDate, "description": card.metaDescription, "image": card.image, "buttonLink": card.buttonlink, ",": true, "timetoRead": card.timetoread })}`)} </div> </section> ` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/blogs/index.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
