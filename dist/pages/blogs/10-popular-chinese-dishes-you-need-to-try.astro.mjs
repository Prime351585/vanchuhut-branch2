/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Bc1SguY6.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CbsSthu6.mjs';
import { $ as $$Image, H as HeroImg } from '../../chunks/LandingImage_ERSE8M9o.mjs';
import { B as Blog12Img } from '../../chunks/blog12_Djcp_79H.mjs';
export { renderers } from '../../renderers.mjs';

const $$10PopularChineseDishesYouNeedToTry = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "10 Popular Chinese Dishes at Vanchu Hut", href: "#", current: true }
  ];
  const blogData = {
    title: "10 Popular Chinese Dishes You Need to Try at Vanchu Hut",
    metaTitle: "10 Popular Chinese Dishes at Vanchu Hut Ghaziabad | Must-Try Menu",
    metaDescription: "Find the 10 most popular Chinese dishes you must try at Vanchu Hut in Ghaziabad! From crispy chili potatoes to flavorful momos, experience authentic Chinese cuisine in a family-friendly setting.",
    image: Blog12Img,
    introduction: "If you're looking for <a href='/' class='text-primary hover:underline'> authentic Chinese food in Ghaziabad </a>, Vanchu Hut is a top choice. Whether you're dining with family or ordering at home, <a href='/menu' class='text-primary hover:underline'>our menu</a> offers delicious options made to satisfy your taste buds. Not sure what to try next? Here are 10 popular Chinese dishes you must try at Vanchu Hut!",
    main_content_title: "10 Chinese Dishes You Must Try at Vanchu Hut",
    dishes: [
      {
        name: "Special Veg Noodles",
        description: "A staple of Chinese cuisine, our Veg Noodles are stir-fried with fresh vegetables and a secret blend of sauces. Comforting, flavorful, and satisfying\u2014this is our most-loved classic."
      },
      {
        name: "Veg Manchurian",
        description: "A favorite among foodies, our Veg Manchurian features deep-fried vegetable balls in a zesty, tangy sauce. Served dry or with gravy, it\u2019s the perfect side or main course for spice lovers."
      },
      {
        name: "Crispy Chili Potatoes",
        description: "Crispy, spicy, and sweet\u2014our Indo-Chinese take on chili potatoes is the ultimate appetizer. It\u2019s crunchy on the outside and full of flavor on the inside."
      },
      {
        name: "Steamed & Fried Dumplings (Momos)",
        description: "Whether you like them soft and steamed or golden and crispy, our dumplings are handcrafted and served with signature spicy chutneys. A crowd-favorite every time!"
      },
      {
        name: "Spring Rolls",
        description: "Light, crispy, and loaded with veggies, our spring rolls are the perfect crunchy snack to start your meal. Dip them in our <a href='/menu#sauces' class='text-primary hover:underline'>homemade sauces</a> for the best experience."
        // Example link to a menu section
      },
      {
        name: "Fried Rice",
        description: "Our fried rice is a blend of aromatic rice, vegetables, and savory sauces. It's a versatile dish that pairs perfectly with almost everything on our menu."
      },
      {
        name: "Hot & Sour Soup",
        description: "Kick off your meal with a bowl of our Hot & Sour Soup\u2014spicy, tangy, and full of fresh ingredients. It\u2019s the ultimate comfort on a chilly day."
      },
      {
        name: "Chili Paneer",
        description: "Paneer tossed in a fiery mix of soy, chili, and garlic\u2014it\u2019s one of the most popular Indo-Chinese dishes and a true delight for vegetarians and spice lovers alike."
      },
      {
        name: "Veg Thukpa (Himalayan Soup Noodles)",
        description: "A heartwarming noodle soup loaded with veggies, this dish brings Himalayan flavors to your bowl. Perfect for those looking for a hearty, slurp-worthy option."
      },
      {
        name: "Cheesy Chinese Burger",
        description: "Fusing Chinese flavors with a fast-food twist, our cheesy burger is packed with crunchy fillings and irresistible sauces\u2014perfect for kids and adults alike!"
      }
    ],
    reason_section: {
      title: "Why These Dishes Are a Hit at Vanchu Hut",
      content: "At Vanchu Hut, we believe in offering authentic flavors, generous portions, and a family-friendly atmosphere. These dishes are popular for their unique taste, quality ingredients, and comforting vibe that make you feel right at home. Whether you're dining in at our <a href='/contact#location' class='text-primary hover:underline'>Pratap Vihar location</a> or enjoying a meal at home, every bite delivers a burst of flavor."
    },
    conclusion: {
      content: "Ready to embark on a culinary journey through the best of Chinese cuisine? <a href='/contact' class='text-primary hover:underline'>Visit Vanchu Hut</a> in Pratap Vihar, Ghaziabad, or <a href='/menu' class='text-primary hover:underline'>check our menu</a> to order your favorites for home delivery. Experience authentic flavors and a memorable meal with us!"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blogData.metaTitle, "description": blogData.metaDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="font-agdasima"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "class": "scale-100 w-screen h-[168px] transform -translate-y-[100px] md:-translate-y-[60px] object-cover", "alt": "Header Image, shows picture of Various Chinese Food on a Table" })} </section> <nav class="flex px-4 mb-4" aria-label="Breadcrumb"> <ol class="flex items-center space-x-2"> ${breadcrumbs.map((item, index) => renderTemplate`<li class="flex items-center"> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg>`} ${item.current ? renderTemplate`<span class="text-gray-600" aria-current="page">${item.label}</span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-primary hover:text-primary/80">${item.label}</a>`} </li>`)} </ol> </nav> <main class="max-w-4xl mx-auto px-4 py-8"> <div class="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden shadow-lg"> ${renderComponent($$result2, "Image", $$Image, { "format": "webp", "src": blogData.image, "alt": "Showcasing popular Chinese dishes available at Vanchu Hut", "class": "w-full h-full object-cover" })} </div> <article class="prose prose-lg max-w-4xl mx-auto px-4 py-8"> <h1 class="text-3xl md:text-4xl font-bold text-primary mb-6 text-center md:text-left">${blogData.title}</h1>    <div class="bg-gray-50 p-6 rounded-lg mb-8 shadow"> <h2 class="text-xl font-semibold mb-4 text-secondary">Table of Contents</h2> <ol class="list-decimal pl-5 space-y-1"> <li><a href="#introduction" class="text-primary hover:underline">Introduction</a></li> <li><a href="#top-dishes" class="text-primary hover:underline">${blogData.main_content_title}</a></li> <li><a href="#why-vanchu-hut" class="text-primary hover:underline">${blogData.reason_section.title}</a></li> <li><a href="#conclusion" class="text-primary hover:underline">Conclusion</a></li> </ol> </div>  <section id="introduction" class="mb-10"> <p class="lead text-lg md:text-xl text-gray-700">${unescapeHTML(blogData.introduction)}</p> </section>  <section id="top-dishes" class="mb-12"> <h2 class="text-2xl md:text-3xl font-semibold text-secondary mb-8">${blogData.main_content_title}</h2> <div class="space-y-8"> ${blogData.dishes.map((dish, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"> <h3 class="text-xl md:text-2xl font-semibold text-primary mb-2">${index + 1}. ${dish.name}</h3> <p class="text-gray-700 text-base md:text-lg">${unescapeHTML(dish.description)}</p> </div>`)} </div> </section>  <section id="why-vanchu-hut" class="mb-12"> <h2 class="text-2xl md:text-3xl font-semibold text-secondary mb-4"> ${blogData.reason_section.title} </h2> <p class="text-gray-700 text-base md:text-lg">${unescapeHTML(blogData.reason_section.content)}</p> </section>  <section id="conclusion" class="mb-12"> <h2 class="text-2xl md:text-3xl font-semibold text-secondary mb-4">Conclusion</h2> <p class="text-gray-700 text-base md:text-lg">${unescapeHTML(blogData.conclusion.content)}</p> </section>  <div class="flex flex-col sm:flex-row justify-center items-center gap-6 my-12"> <a href="/menu" class="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
Explore Our Menu
</a> <a href="/contact" class="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
Visit Us Today
</a> </div> </article> </main> ` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/blogs/10-popular-chinese-dishes-you-need-to-try.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/blogs/10-popular-chinese-dishes-you-need-to-try.astro";
const $$url = "/blogs/10-popular-chinese-dishes-you-need-to-try";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$10PopularChineseDishesYouNeedToTry,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
