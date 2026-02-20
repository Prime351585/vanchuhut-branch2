/* empty css                                 */
import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from '../chunks/astro/server_Bc1SguY6.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CbsSthu6.mjs';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_ERSE8M9o.mjs';
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
import { B as Blog12Img } from '../chunks/blog12_Djcp_79H.mjs';
import { B as Blog13Img } from '../chunks/blog13_AXtoUZPu.mjs';
import { B as Blog14Img } from '../chunks/blog14_BgftbNII.mjs';
import { B as Blog15Img } from '../chunks/blog15_rGXhbVM9.mjs';
import { B as Blog16Img } from '../chunks/blog16_mFjeJ9Sz.mjs';
import { B as Blog17Img } from '../chunks/blog17_Cv2ctBxu.mjs';
import { B as Blog18Img } from '../chunks/blog18_sTxL9mJN.mjs';
import { B as Blog19Img } from '../chunks/blog19_DKDB9-nW.mjs';
import { B as Blog20Img } from '../chunks/blog20_DaRsx35a.mjs';
import { B as Blog22Img } from '../chunks/blog22_msjpx4SO.mjs';
import { B as Blog23Img } from '../chunks/blog23_DeFvjcOZ.mjs';
import { B as Blog24Img } from '../chunks/blog24_Bnazauh3.mjs';
import { B as Blog25Img } from '../chunks/blog25_CjHo1n7G.mjs';
import { B as Blog26Img } from '../chunks/blog26_D5auSU5k.mjs';
import { B as Blog27Img } from '../chunks/blog27_DS-aW67c.mjs';
import { B as Blog28Img } from '../chunks/blog28_ChZfKwy8.mjs';
import { B as Blog29Img } from '../chunks/blog29_B9AkrlST.mjs';
import { B as Blog30Img } from '../chunks/Blog30_irUmu27A.mjs';
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

const Blog21Img = new Proxy({"src":"/_astro/blog21.ozW6gJj9.webp","width":1200,"height":630,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog21.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog21.webp");
							return target[name];
						}
					});

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
    },
    {
      title: "10 Popular Chinese Dishes You Need to Try at Vanchu Hut",
      metaTitle: "10 Popular Chinese Dishes at Vanchu Hut Ghaziabad | Must-Try Menu",
      metaDescription: "Find the 10 most popular Chinese dishes you must try at Vanchu Hut in Ghaziabad! From crispy chili potatoes to flavorful momos, experience authentic Chinese cuisine in a family-friendly setting.",
      publishDate: "2025-05-15",
      // Example publish date
      image: Blog12Img,
      buttonlink: "/blogs/10-popular-chinese-dishes-you-need-to-try",
      timetoread: "5 min"
    },
    {
      title: "Is Chinese Food Healthy? What You Need to Know",
      metaTitle: "Is Chinese Food Healthy? What You Need to Know | Must-Try Menu",
      metaDescription: "Curious about Chinese food's healthiness? Learn about its nutritional aspects, healthy options, and how to make smarter choices when enjoying your favorite dishes.",
      publishDate: "2025-05-27",
      // Example publish date
      image: Blog13Img,
      buttonlink: "/blogs/is-chinese-food-healthy",
      timetoread: "5 min"
    },
    {
      title: "Why Is Chinese Food So Addictive? The Science Behind the Cravings",
      metaTitle: "Why Is Chinese Food So Addictive? Understanding Food Cravings | Vanchu Hut",
      metaDescription: "Read our blog to know why Chinese food is so addictive! Explore the science of flavor, from umami and MSG to spices and textures, that makes Chinese cuisine irresistibly crave-worthy.",
      image: Blog14Img,
      publishDate: "2025-06-11",
      buttonlink: "/blogs/why-is-chinese-food-so-addictive",
      timetoread: "6 min"
    },
    {
      title: "What is the Difference Between Indian-Chinese and Authentic Chinese Dishes",
      metaTitle: "Indian-Chinese vs Authentic Chinese Food: Key Differences | Vanchu Hut",
      metaDescription: "Find the key differences between Indian-Chinese and authentic Chinese dishes. Explore variations in ingredients, cooking styles, flavor profiles, and popular recipes in this flavorful comparison.",
      image: Blog15Img,
      publishDate: "2025-06-17",
      buttonlink: "/blogs/what-is-the-difference-between-indian-and-authentic-chinese",
      timetoread: "7 min"
    },
    {
      title: "Top Chinese Dishes for Fitness Enthusiasts",
      metaTitle: "Best Chinese Dishes for Fitness Enthusiasts | Healthy Options Guide",
      metaDescription: "Find the best Chinese dishes for fitness lovers! Healthy, protein-packed, low-fat meals that fuel your body\u2014plus smart tips for ordering right Chinese food.",
      image: Blog16Img,
      publishDate: "2025-07-09",
      buttonlink: "/blogs/top-chinese-dishes-for-fitness-enthusiasts",
      timetoread: "8 min"
    },
    {
      title: "How to Choose the Best Chinese Restaurant in Ghaziabad",
      metaTitle: "How to Choose the Best Chinese Restaurant in Ghaziabad | Vanchu Hut",
      metaDescription: "Learn how to choose the best Chinese restaurant in Ghaziabad. Discover key factors like menu variety, ambiance, and customer reviews to find your perfect dining spot.",
      image: Blog17Img,
      publishDate: "2025-07-26",
      buttonlink: "/blogs/how-to-choose-the-best-chinese-restaurant-in-ghaziabad",
      timetoread: "6 min"
    },
    {
      title: "Top 10 Vegetarian Chinese Dishes You Can't Miss in India",
      metaTitle: "Top 10 Vegetarian Chinese Dishes in India | Ultimate Foodie List | Vanchu Hut",
      metaDescription: "Discover the top 10 vegetarian Chinese dishes you can't miss in India. From street-style chowmein to American chopsuey, here's your ultimate foodie list with authentic Indo-Chinese flavors.",
      image: Blog18Img,
      publishDate: "2025-08-16",
      buttonlink: "/blogs/top-10-vegetarian-chinese-dishes-in-india/",
      timetoread: "5 min"
    },
    {
      title: "Why Momos Are the Most Loved Street Food in India?",
      metaTitle: "Why Momos Are India's Most Loved Street Food | Vanchu Hut Pratap Vihar",
      metaDescription: "Why do Indians love momos so much? Explore their origins, flavors, and cultural appeal\u2014plus taste the best ones at Vanchu Hut in Pratap Vihar",
      image: Blog19Img,
      publishDate: "2025-08-25",
      buttonlink: "/blogs/why-momos-are-the-most-loved-street-food-in-india",
      timetoread: "4 min"
    },
    {
      title: "The 4 Most-Ordered Customer Favourites at Vanchu Hut",
      metaTitle: "4 Most-Ordered Customer Favourites at Vanchu Hut | Best Chinese Food Pratap Vihar",
      metaDescription: "Craving the best Chinese food in Pratap Vihar, Ghaziabad? Discover the top 4 customer-favourite dishes at Vanchu Hut, from spicy Chilli Potato to classic Veg Chowmein. Order now!",
      image: Blog20Img,
      publishDate: "2025-09-14",
      buttonlink: "/blogs/the-4-most-ordered-customer-favourite",
      timetoread: "6 min"
    },
    {
      title: "A Foodie's Guide to Ordering Chinese Food in India",
      metaTitle: "Foodie's Guide to Ordering Chinese Food in India | Expert Tips & Must-Try Dishes",
      metaDescription: "Discover the ultimate guide to ordering Chinese food in India! Explore must-try dishes, restaurant tips, spice-level advice, and insider tricks to enjoy authentic Indo-Chinese flavors.",
      image: Blog21Img,
      publishDate: "2025-09-23",
      buttonlink: "/blogs/foodies-guide-ordering-chinese-food-india",
      timetoread: "7 min"
    },
    {
      title: "Top Combo Meals in Chinese Restaurants in India \u2013 Must-Try Deals for Food Lovers",
      metaTitle: "Top Chinese Combo Meals in India | Best Deals at Vanchu Hut Ghaziabad",
      metaDescription: "Discover the top Chinese combo meals in India at Vanchu Hut, Ghaziabad. Enjoy veg, non-veg, and family combos offering variety, authentic flavors, and great value for money\u2014perfect for solo diners or groups.",
      image: Blog22Img,
      publishDate: "2025-10-14",
      buttonlink: "/blogs/top-chinese-combo-meals-india",
      timetoread: "5 min"
    },
    {
      title: "How to Choose the Best Chinese Restaurant for Takeout in India: A Complete Guide",
      metaTitle: "Best Chinese Restaurant for Takeout in India | Complete Guide | Vanchu Hut",
      metaDescription: "Discover how to choose the best Chinese restaurant for takeout in India. Tips on authenticity, menu variety, hygiene, delivery, and reviews.",
      image: Blog23Img,
      publishDate: "2025-10-21",
      buttonlink: "/blogs/how-to-choose-best-chinese-restaurant-takeout-india",
      timetoread: "7 min"
    },
    {
      title: "Top 5 Spicy Indo-Chinese Dishes You Need to Try in Ghaziabad",
      metaTitle: "Top 5 Spicy Indo-Chinese Dishes in Ghaziabad | Vanchu Hut Best Chinese Restaurant",
      metaDescription: "Learn about the top 5 spicy Indo-Chinese dishes in Ghaziabad at Vanchu Hut. From Veg Manchurian to Hot & Sour Soup, enjoy bold flavors, dine-in or delivery.",
      image: Blog24Img,
      publishDate: "2025-11-12",
      buttonlink: "/blogs/top-spicy-indo-chinese-dishes-ghaziabad",
      timetoread: "6 min"
    },
    {
      title: "Top Chinese Street Food Trends You Must Try",
      metaTitle: "Top Chinese Street Food Trends 2025 Ghaziabad | Vanchu Hut Street Food",
      metaDescription: "Explore the top Chinese street food trends in 2025 in Ghaziabad. From dumplings to chili potatoes, enjoy fusion, plant-based, and delivery-friendly dishes at Vanchu Hut.",
      image: Blog25Img,
      publishDate: "2025-11-24",
      buttonlink: "/blogs/top-chinese-street-food-trends-ghaziabad",
      timetoread: "5 min"
    },
    {
      title: "Why Veg Chaap is a Favorite for Chinese Food Lovers",
      metaTitle: "Why Veg Chaap is Favorite for Chinese Food Lovers | Vanchu Hut",
      metaDescription: "Discover why Veg Chaap is a top choice for Chinese food lovers. Explore its bold flavors, popular dishes, health benefits, and the best place to try it in India.",
      image: Blog26Img,
      publishDate: "2025-12-14",
      buttonlink: "/blogs/why-veg-chaap-is-favorite-for-chinese-food-lovers",
      timetoread: "6 min"
    },
    {
      title: "What Makes a Good Chinese Restaurant? A Customer\u2019s Checklist",
      metaTitle: "What Makes a Good Chinese Restaurant? | Vanchu Hut",
      metaDescription: "Learn what makes a good Chinese restaurant with this easy customer checklist\u2014fresh food, hygiene, ambience, service, and family-friendly dining.",
      image: Blog27Img,
      publishDate: "2025-12-24",
      buttonlink: "/blogs/what-makes-a-good-chinese-restaurant",
      timetoread: "7 min"
    },
    {
      title: "Gravy vs Dry Manchurian: What's the Difference & Which One Should You Choose?",
      metaTitle: "Gravy vs Dry Manchurian: What's the Difference & Which One to Choose?",
      metaDescription: "Discover the difference between gravy and dry Manchurian. Learn which one to choose and enjoy authentic Indo-Chinese flavors at Vanchu Hut, Ghaziabad.",
      image: Blog28Img,
      publishDate: "2025-01-13",
      buttonlink: "/blogs/difference-between-gravy-and-dry-manchurian",
      timetoread: "5 min"
    },
    {
      title: "How to Read a Chinese Menu Like a Pro: A Beginner's Guide for Food Lovers",
      metaTitle: "How to Read a Chinese Menu Like a Pro | Beginner's Guide | Vanchu Hut",
      metaDescription: "Confused by Chinese menus? Our beginner's guide explains appetizers, soups, mains, sauces, and spice levels to help you order confidently.",
      image: Blog29Img,
      publishDate: "2026-01-24",
      buttonlink: "/blogs/read-chinese-menu-beginners-guide",
      timetoread: "6 min"
    },
    {
      title: "Chinese Restaurant vs Street Food: What's Better for Dining Out in Ghaziabad?",
      metaTitle: "Chinese Restaurant vs Street Food in Ghaziabad | Vanchu Hut",
      metaDescription: "Street food or a Chinese restaurant in Ghaziabad? Discover the key differences in hygiene, taste, ambiance, and value to make the right dining choice.",
      image: Blog30Img,
      publishDate: "2026-02-13",
      buttonlink: "/blogs/chinese-restaurant-vs-street-food-ghaziabad",
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
