/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, h as renderScript, b as addAttribute } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bp2nhWV8.mjs';
import 'clsx';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
import { $ as $$Button } from '../chunks/Button_Cix492Dv.mjs';
/* empty css                                 */
import { d as deliveryImage, m as momos } from '../chunks/chowmin_DFUkTUVz.mjs';
import { c as chillipotato } from '../chunks/chillipotato_F_zui8of.mjs';
import { $ as $$FindUssection } from '../chunks/FindUssection_BzNgPeP0.mjs';
export { renderers } from '../renderers.mjs';

const $$FoodSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="parallax-image" class="flex flex-col text-center -mt-24 md:mt-10 h-[90vh] md:h-[70vh] sm:text-6xl text-3xl m-2 "> <h2><b class="text-secondary "><b class="text-primary">A</b>uthentic</b> Flavors, Right Here</h2> <div class="text-3xl"> <h3>
Looking for the best restaurants in Ghaziabad that offer authentic flavors and a cozy atmosphere? Your search ends here at Vanchu Hut! Located in Pratap Vihar, we are proud to be one of the best restaurants in Ghaziabad. We serve a wide range of delicious Chinese dishes. </h3></div> </div>`;
}, "/workspaces/vanchuhut-branch2/src/components/FoodSection.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=" mx-auto relative flex justify-center items-center  overflow-hidden  "> ${renderComponent($$result, "Image", $$Image, { "id": "parallax-image", "src": HeroImg, "alt": "Home Page Image, shows picture of Various Chinese Food on a Table", "format": "avif", "class": "object-cover w-screen transform scale-[1.5] -z-10 h-[70vh] sm:h-[80vh] md:h-screen lg:h-screen xl:h-screen" })} <div class="absolute inset-0 bg-black opacity-60"></div> <div class="absolute inset-0 mt-30 flex flex-col items-center justify-center text-white sm:text-5xl text-3xl z-10 mt-10 text-center"> <h1> <span class="whitespace-nowrap"> <strong class="text-secondary">VANCHU HUT</strong><br> YOUR FAVOURITE<br><strong class="text-primary">CHINESE RESTAURANT</strong> <br>IN GHAZIABAD</span> </h1> <div class="text-2xl ">
Enjoy our Exclusive Chinese Food Collection
</div> <div class="flex text-lg mt-10"> ${renderComponent($$result, "Button", $$Button, { "text": "VIEW MENU", "onClick": "menu" })} ${renderComponent($$result, "Button", $$Button, { "text": "RESERVE A TABLE", "onClick": "reservation" })} </div> </div> </div>`;
}, "/workspaces/vanchuhut-branch2/src/components/HeroSection.astro", void 0);

const dividerImage = new Proxy({"src":"/_astro/divider.BKlj4bdN.webp","width":250,"height":250,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/divider.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/divider.webp");
							return target[name];
						}
					});

const BannerImg1 = new Proxy({"src":"/_astro/1.DOw1uuNq.webp","width":2880,"height":1620,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/banner/1.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/banner/1.webp");
							return target[name];
						}
					});

const BannerImg2 = new Proxy({"src":"/_astro/2.M0mv-3dt.webp","width":2880,"height":1620,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/banner/2.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/banner/2.webp");
							return target[name];
						}
					});

const BannerImg3 = new Proxy({"src":"/_astro/3.D1EyqMt9.webp","width":2880,"height":1620,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/banner/3.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/banner/3.webp");
							return target[name];
						}
					});

const BannerImg5 = new Proxy({"src":"/_astro/5.C6JlJ82S.webp","width":2880,"height":1620,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/banner/5.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/banner/5.webp");
							return target[name];
						}
					});

const BannerImg4 = new Proxy({"src":"/_astro/4.chfZJcVd.webp","width":2880,"height":1620,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/banner/4.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/banner/4.webp");
							return target[name];
						}
					});

const $$DeliverySection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full py-2 bg-primary" data-astro-cid-zuzcxizl> <div class="container mx-auto " data-astro-cid-zuzcxizl> <div class="cards-container relative" data-astro-cid-zuzcxizl> <div class="overflow-x-auto hide-scrollbar" data-astro-cid-zuzcxizl> <div class="flex space-x-6 " id="cardsWrapper" data-astro-cid-zuzcxizl> <!-- Deals and Offers --> <div class="flex-none w-72 bg-primary rounded-xl shadow-lg pl-4" data-astro-cid-zuzcxizl> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": BannerImg1, "alt": "Momo Madness ", "class": "w-full h-full object-cover rounded-lg", "loading": "lazy", "data-astro-cid-zuzcxizl": true })} </div> <!-- Deals and Offers --> <div class="flex-none w-72 bg-primary rounded-xl shadow-lg" data-astro-cid-zuzcxizl> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": BannerImg2, "alt": "A fiery Crunch, A Tasty Hunch", "class": "w-full h-full object-cover rounded-lg", "loading": "lazy", "data-astro-cid-zuzcxizl": true })} </div> <!-- Deals and Offers --> <div class="flex-none w-72 bg-primary rounded-xl shadow-lg" data-astro-cid-zuzcxizl> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": BannerImg3, "alt": "Slurp Savour Smile ", "class": "w-full h-full object-cover rounded-lg", "loading": "lazy", "data-astro-cid-zuzcxizl": true })} </div> <!-- Deals and Offers --> <div class="flex-none w-72 bg-primary rounded-xl shadow-lg" data-astro-cid-zuzcxizl> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": BannerImg5, "alt": "Burger Cheesy Pleasy", "class": "w-full h-full object-cover rounded-lg", "loading": "lazy", "data-astro-cid-zuzcxizl": true })} </div> <!-- Deals and Offers --> <div class="flex-none w-72 bg-primary rounded-xl shadow-lg pr-4" data-astro-cid-zuzcxizl> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": BannerImg4, "alt": "Call Now +919971135534", "class": "w-full h-full object-cover rounded-lg", "loading": "lazy", "data-astro-cid-zuzcxizl": true })} </div> </div> </div> </div>  ${renderScript($$result, "/workspaces/vanchuhut-branch2/src/components/DeliverySection.astro?astro&type=script&index=0&lang.ts")}</div></div>`;
}, "/workspaces/vanchuhut-branch2/src/components/DeliverySection.astro", void 0);

const manchurian = new Proxy({"src":"/_astro/manchurian.DRiKPziC.webp","width":7360,"height":4912,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/dishes/manchurian.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/dishes/manchurian.webp");
							return target[name];
						}
					});

const $$MenuSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white"> <div class="text-6xl text-center p-10 flex justify-between items-center"> <div class="flex-1">
Unmissable Dishes at Vanchu Hut<br> <div> <h3 class="text-xl">
Our chefs have mastered the art of preparing dishes that not only taste divine but also keep our guests coming back for more. Here are some signature selections you won’t want to miss at one of the best restaurants in Ghaziabad:
                    Every bite at Vanchu Hut reinforces our reputation as one of the top Chinese restaurants in Ghaziabad.
</h3> </div> </div> </div> <div class="flex flex-col sm:flex-row justify-center items-center text-center pb-4 flex-wrap"> <div class="w-[250px] bg-white shadow-lg rounded-lg overflow-hidden m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": deliveryImage, "alt": "Authentic Special Veg Noodles  - Fresh noodles stir-fried with vegetables at Vanchu Hut", "class": "w-full h-[200px] object-cover" })} <div class="p-4"> <h3 class="text-xl font-bold mb-2">Special Veg Noodles </h3> <p class="text-gray-600 text-sm">Loaded with fresh veggies and seasoned to perfection for that ultimate comfort food experience.</p> </div> </div> <div class="w-[250px] bg-white shadow-lg rounded-lg overflow-hidden m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": momos, "alt": "Steamed & Fried Dumplings  - Hand-crafted dumplings with spicy chutney at Vanchu Hut Pratap Vihar", "class": "w-full h-[200px] object-cover" })} <div class="p-4"> <h3 class="text-xl font-bold mb-2">Steamed & Fried Dumplings </h3> <p class="text-gray-600 text-sm">Indulge in these tender, flavorful bites paired with our signature dipping sauces.</p> </div> </div> <div class="w-[250px] bg-white shadow-lg rounded-lg overflow-hidden m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": chillipotato, "alt": "Crispy Chili Potatoes - Crispy Indo-Chinese fusion chilli potato at Vanchu Hut Pratap Vihar", "class": "w-full h-[200px] object-cover" })} <div class="p-4"> <h3 class="text-xl font-bold mb-2">Crispy Chili Potatoes</h3> <p class="text-gray-600 text-sm">A fusion favorite, balancing a delightful crunch with the perfect kick of spice.</p> </div> </div> <div class="w-[250px] bg-white shadow-lg rounded-lg overflow-hidden m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": manchurian, "alt": "Veg Manchurian - Spicy Asian-style Veg Manchurian with unique sauce at Vanchu Hut Pratap Vihar", "class": "w-full h-[200px] object-cover" })} <div class="p-4"> <h3 class="text-xl font-bold mb-2">Veg Manchurian</h3> <p class="text-gray-600 text-sm">A quintessential Chinese classic, perfect as a main dish or a crowd-pleasing side.</p> </div> </div> </div> <div class="flex justify-center items-center pb-10"> ${renderComponent($$result, "Button", $$Button, { "text": "VIEW MENU", "onClick": "menu" })} </div> </div>`;
}, "/workspaces/vanchuhut-branch2/src/components/MenuSection.astro", void 0);

const $$VideoSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary relative"> <div class="absolute inset-0 bg-black opacity-50 z-10 flex items-center justify-center"> <h2 class="text-white text-3xl md:text-4xl font-bold text-center ">A Perfect Spot for Your Family and Friends</h2> </div> <video class="w-screen md:h-[400px] object-cover md:object-none z-0" autoplay loop muted> <source src="/vid.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> </section> <div class="text-center px-8 mt-4 text-xl"> <div> <h2>
Family-Friendly Dining at Its Best
</h2> <h3>
Are you searching for the best place to enjoy a family meal? Do you want to impress your loved ones with a tasty and relaxed dining experience? Many people widely recognize Vanchu Hut as one of the ultimate family-friendly Chinese restaurants in Ghaziabad. Our staff dedicates themselves to ensuring your mealtime is not only delicious but also hassle-free.
    From birthday celebrations to casual dinners, our vibrant and accommodating space sets the ideal backdrop for creating unforgettable memories.
</h3> </div> <h3 class="text-2xl font-bold mt-4">
Order or Book Your Table Today!
</h3> <div class="flex p-5 justify-center items-center"> ${renderComponent($$result, "Button", $$Button, { "text": "Know More", "onClick": "reservation" })} </div> </div>`;
}, "/workspaces/vanchuhut-branch2/src/components/VideoSection.astro", void 0);

const dineInImage = new Proxy({"src":"/_astro/DineIn.DTOb2J6X.webp","width":1280,"height":960,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/DineIn.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/DineIn.webp");
							return target[name];
						}
					});

const $$DineIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 py-16 md:p-5"> <div class="container mx-auto px-4 max-w-6xl"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Dine-In or Enjoy the Best Food in Ghaziabad at Home!</h2> <p class="text-center text-gray-600 max-w-3xl mx-auto mb-16">
At Vanchu Hut, we make it easy for you to enjoy the best Chinese food in Pratap Vihar, no matter where you are. Whether you choose to dine in and soak up our welcoming ambiance or want to relish our dishes in the comfort of your home, we’ve got you covered. </p> <div class="grid md:grid-cols-2 gap-8"> <!-- Dine-In Option --> <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"> <div class="h-64 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": dineInImage, "alt": "Dine-in experience at Vanchu Hut", "class": "w-full h-full object-cover hover:scale-105 transition-transform duration-500", "format": "avif" })} </div> <div class="p-6"> <h3 class="text-2xl font-bold mb-3 text-secondary">Dine-In Experience</h3> <p class="text-gray-700 mb-4">
Soak up our welcoming ambiance and enjoy the complete Vanchu Hut experience with your family and friends.
</p> <ul class="space-y-2 mb-6"> <li class="flex items-start"> <span class="text-primary font-bold mr-2">•</span> <span>Comfortable seating in our restaurant</span> </li> <li class="flex items-start"> <span class="text-primary font-bold mr-2">•</span> <span>Attentive service from our staff</span> </li> <li class="flex items-start"> <span class="text-primary font-bold mr-2">•</span> <span>Fresh dishes served hot from our kitchen</span> </li> </ul> ${renderComponent($$result, "Button", $$Button, { "text": "Make a Reservation", "onClick": "reservation" })} </div> </div> <!-- Delivery Option --> <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"> <div class="h-64 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": deliveryImage, "alt": "Food delivery from Vanchu Hut", "class": "w-full h-full object-cover hover:scale-105 transition-transform duration-500", "format": "avif" })} </div> <div class="p-6"> <h3 class="text-2xl font-bold mb-3 text-secondary">Takeout & Delivery</h3> <p class="text-gray-700 mb-4">
Relish our delicious dishes in the comfort of your own home with our convenient delivery options, and offers.
</p> <ul class="space-y-2 mb-6"> <li class="flex items-start"> <span class="text-primary font-bold mr-2">•</span> <span>Easy online ordering process</span> </li> <li class="flex items-start"> <span class="text-primary font-bold mr-2">•</span> <span>Quick delivery to your doorstep</span> </li> <li class="flex items-start"> <span class="text-primary font-bold mr-2">•</span> <span>Special packaging to keep food fresh</span> </li> </ul> ${renderComponent($$result, "Button", $$Button, { "text": "Order Now", "onClick": "menu" })} </div> </div> </div> <div class="mt-16 text-center"> <p class="text-gray-700 text-lg">
Explore our menu and place your takeout or delivery order in just a few clicks.
</p> </div> </div> </section>`;
}, "/workspaces/vanchuhut-branch2/src/components/DineIn.astro", void 0);

const sliderImg1 = new Proxy({"src":"/_astro/1.guDBy93d.svg","width":512,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/1.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/1.svg");
							return target[name];
						}
					});

const sliderImg2 = new Proxy({"src":"/_astro/2.DCJJZ5q2.svg","width":66,"height":66,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/2.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/2.svg");
							return target[name];
						}
					});

const sliderImg3 = new Proxy({"src":"/_astro/3.Cohcp7Xb.svg","width":68,"height":68,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/3.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/3.svg");
							return target[name];
						}
					});

const sliderImg4 = new Proxy({"src":"/_astro/4.D1OVZqO9.svg","width":64,"height":64,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/4.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/4.svg");
							return target[name];
						}
					});

const sliderImg5 = new Proxy({"src":"/_astro/5.v4acf2pC.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/5.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/5.svg");
							return target[name];
						}
					});

const sliderImg6 = new Proxy({"src":"/_astro/6.v3QjDLlT.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/6.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/6.svg");
							return target[name];
						}
					});

const sliderImg7 = new Proxy({"src":"/_astro/7.Da1CUBfE.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/7.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/7.svg");
							return target[name];
						}
					});

const sliderImg8 = new Proxy({"src":"/_astro/8.f5696CXD.svg","width":212,"height":395,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/slider_svg/8.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/slider_svg/8.svg");
							return target[name];
						}
					});

const $$FoodSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="slider-container w-full overflow-hidden bg-gray-100 py-10" data-astro-cid-agzm3qoy> <div class="slider-track flex" data-astro-cid-agzm3qoy> <!-- First set of images --> <div class="flex space-x-16 mx-8 min-w-max" data-astro-cid-agzm3qoy> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg1, "alt": "Noodels", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg2, "alt": "ramen", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg3, "alt": "momos", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg4, "alt": "chowmin", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg5, "alt": "soup", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg6, "alt": "Omlette", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg7, "alt": "Burger", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg8, "alt": "Coffee", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} </div> <!-- Duplicate set for seamless loop --> <div class="flex space-x-16 mx-8 min-w-max" data-astro-cid-agzm3qoy> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg1, "alt": "Noodels", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg2, "alt": "ramen", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg3, "alt": "momos", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg4, "alt": "chowmin", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg5, "alt": "soup", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg6, "alt": "Omlette", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg7, "alt": "Burger", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg8, "alt": "Coffee", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} </div> </div> </div> `;
}, "/workspaces/vanchuhut-branch2/src/components/FoodSlider.astro", void 0);

const GoogleImg = new Proxy({"src":"/_astro/google.yYid5rrk.svg","width":2443,"height":2500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/socialIcons/google.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/socialIcons/google.svg");
							return target[name];
						}
					});

const ReviewImg1 = new Proxy({"src":"/_astro/dev.BeljVuwD.png","width":90,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/reviewSection/dev.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/reviewSection/dev.png");
							return target[name];
						}
					});

const ReviewImg2 = new Proxy({"src":"/_astro/harshit.C_70T8WB.png","width":90,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/reviewSection/harshit.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/reviewSection/harshit.png");
							return target[name];
						}
					});

const ReviewImg3 = new Proxy({"src":"/_astro/saurabh.OSqYpbSG.png","width":90,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/reviewSection/saurabh.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/reviewSection/saurabh.png");
							return target[name];
						}
					});

const ReviewImg4 = new Proxy({"src":"/_astro/siddharth.CKhNqWi_.png","width":90,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/reviewSection/siddharth.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/reviewSection/siddharth.png");
							return target[name];
						}
					});

const $$GoogleReview = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      name: "Dev Varma",
      rating: 4,
      date: "a year ago",
      content: "One of the best restaurants in Ghaziabad for Chinese cuisine! The dishes are flavorful, and the crispy chili potato is just unbeatable.\u{1F60B}",
      image: ReviewImg1
      // Replace with actual path
    },
    {
      name: "Dr. Harshit Lohani",
      rating: 4,
      date: "a year ago",
      content: "Perfect place for families looking for good vibes and the best food in Ghaziabad. Highly recommend the Manchurian and spring rolls! \u{1F602}.",
      image: ReviewImg2
    },
    {
      name: "Saurabh Bhatia",
      rating: 5,
      date: "a year ago",
      content: "Easily my go-to spot for comfort food in Pratap Vihar. Delicious food at a price that doesn\u2019t hurt your wallet!",
      image: ReviewImg3
    },
    {
      name: "Siddarth Nagpal",
      rating: 5,
      date: "a week ago",
      content: "The best restaurant for family and friends in Sector-12. I have been there maybe 100 times...\u{1F60D}\u{1F60D},Recommended dishes,Manchurian, Fried Rice, Spring Roll, Veg Momo.",
      image: ReviewImg4
    }
  ];
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => index < rating);
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4 max-w-7xl"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">What Customers Say About One of the Best Family Restaurants in Ghaziabad</h2> <div class="flex items-center justify-center gap-2 mb-4"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": GoogleImg, "alt": "Google", "class": "h-8 w-auto" })} <div class="flex items-center"> <svg class="w-24 h-5" viewBox="0 0 100 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <!-- Filled Star 1 --> <path class="text-yellow-400" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> <!-- Filled Star 2 --> <path class="text-yellow-400" d="M29.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L22.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> <!-- Filled Star 3 --> <path class="text-yellow-400" d="M49.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L42.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> <!-- Filled Star 4 --> <path class="text-yellow-400" d="M69.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L62.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> <!-- Blank Star 5 --> <path class="text-gray-300" d="M89.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L82.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="ml-2 text-lg font-semibold">4 Rating on Google</span> </div> </div> </div> <!-- Reviews Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${reviews.map((review) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"> <div class="flex items-center mb-4"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": review.image, "alt": review.name, "class": "w-12 h-12 rounded-full object-cover" })} <div class="ml-4"> <h3 class="font-semibold text-gray-800">${review.name}</h3> <p class="text-sm text-gray-500">${review.date}</p> </div> </div> <div class="flex mb-3"> ${renderStars(review.rating).map((isFilled) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${isFilled ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-gray-600 line-clamp-4">${review.content}</p> </div>`)} </div> <div class="flex items-center justify-center mt-10"> <!-- Call to Action --> ${renderComponent($$result, "Button", $$Button, { "text": "LEAVE US A REVIEW", "onClick": "https://g.page/r/CU-V7RII_Vk9EBM/review" })} </div> </div> </section>`;
}, "/workspaces/vanchuhut-branch2/src/components/GoogleReview.astro", void 0);

const restaurantInterior = new Proxy({"src":"/_astro/restaurantInterior.7qvCpwpU.jpeg","width":3072,"height":4096,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/restaurantInterior.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/restaurantInterior.jpeg");
							return target[name];
						}
					});

const chefCooking = new Proxy({"src":"/_astro/ChefCooking.DQKL53Zj.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/ChefCooking.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/ChefCooking.png");
							return target[name];
						}
					});

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20"> <div class="container mx-auto px-4 max-w-6xl"> <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">An Experience at One of the Best Restaurants in Ghaziabad</h2> <div class="grid md:grid-cols-2 gap-12 items-center mb-20 relative"> <div class="space-y-6 relative z-10"> <div class="w-16 h-1 bg-amber-600 mb-8"></div> <p class="text-lg leading-relaxed text-gray-700">
At Vanchu Hut, we believe that food is more than just a meal; it’s an experience. We cook each dish on our menu with care and serve it with love to excite the senses and bring people together. From sizzling starters to crowd-pleasing mains, we’ve perfected the art of delivering authentic Chinese cuisine in Ghaziabad.
</p> <p class="text-lg leading-relaxed text-gray-700">
Our <a class="text-secondary" href="/menu">menu</a> has a great selection of dishes. Enjoy crispy chili potatoes, spiced Manchurian, soft dumplings, and stir-fried noodles. If you are a vegetarian seeking filling options or a foodie wanting strong flavors, there is something for everyone.
</p> </div> <div class="rounded-lg overflow-hidden shadow-lg"> ${renderComponent($$result, "Image", $$Image, { "src": restaurantInterior, "alt": "Vanchu Hut Restaurant Interior", "class": "w-full h-[400px] object-cover", "format": "avif" })} </div> </div> <div class="border-t border-b border-gray-100 py-16 mb-16"> <h3 class="text-2xl md:text-3xl font-bold mb-12 text-center">Why We're a Favorite in Ghaziabad</h3> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="rounded-lg overflow-hidden shadow-lg order-2 md:order-1"> ${renderComponent($$result, "Image", $$Image, { "src": chefCooking, "alt": "Our Chef preparing delicious dishes", "class": "w-full h-[450px] object-cover", "format": "avif" })} </div> <ul class="space-y-6 text-lg order-1 md:order-2"> <li class="flex items-start"> <span class="text-amber-600 mr-3">•</span> <div> <strong class="block text-xl mb-1">Authentic Flavors</strong> <span class="text-gray-700">We focus on classic Chinese recipes made with fresh, high-quality ingredients. Enjoy a meal that feels like a fun adventure.</span> </div> </li> <li class="flex items-start"> <span class="text-amber-600 mr-3">•</span> <div> <strong class="block text-xl mb-1">Menu Variety</strong> <span class="text-gray-700">Our offerings range from rich aromatic soups to spicy stir-fries, catering to diverse tastes and preferences.</span> </div> </li> <li class="flex items-start"> <span class="text-amber-600 mr-3">•</span> <div> <strong class="block text-xl mb-1">Family-Friendly Ambiance</strong> <span class="text-gray-700">Our welcoming and lively atmosphere makes us the perfect destination for families and friends who want to enjoy a delicious meal together.</span> </div> </li> <li class="flex items-start"> <span class="text-amber-600 mr-3">•</span> <div> <strong class="block text-xl mb-1">Affordable Price</strong> <span class="text-gray-700">At Vanchu Hut, you can indulge in the best food in Ghaziabad without breaking the bank.</span> </div> </li> <li class="flex items-start"> <span class="text-amber-600 mr-3">•</span> <div> <strong class="block text-xl mb-1">Local Favorite</strong> <span class="text-gray-700">We are one of the best restaurants in Ghaziabad. We are known for our quality food, large portions, and friendly service.</span> </div> </li> </ul> </div> </div> <p class="text-center text-lg text-gray-700">
Learn more about our mission and history on our
<a href="/about" class="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">about page</a>. 
            Discover why we are a favorite dining spot in Pratap Vihar.
</p> </div> </section>`;
}, "/workspaces/vanchuhut-branch2/src/components/Experience.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vanchu Hut - Best Chinese Restaurant in Pratap Vihar, Ghaziabad | Authentic Chinese Cuisine", "description": "Discover the best Chinese restaurant in Pratap Vihar, Ghaziabad, at Vanchu Hut. Enjoy authentic Chinese cuisine with family-friendly dining options." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${maybeRenderHead()}<div class=" flex justify-center items-center h-0 w-auto "> ${renderComponent($$result2, "Image", $$Image, { "id": "center-image", "src": dividerImage, "format": "avif", "alt": "Chowmin", "width": 250, "height": 250, "class": "z-10 " })}</div> ${renderComponent($$result2, "FoodSection", $$FoodSection, {})} ${renderComponent($$result2, "DeliverySection", $$DeliverySection, {})} ${renderComponent($$result2, "FoodSlider", $$FoodSlider, {})} ${renderComponent($$result2, "MenuSection", $$MenuSection, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "VideoSection", $$VideoSection, {})} ${renderComponent($$result2, "DineIn", $$DineIn, {})} ${renderComponent($$result2, "GoogleReview", $$GoogleReview, {})} ${renderComponent($$result2, "FindUssection", $$FindUssection, {})} ` })} ${renderScript($$result, "/workspaces/vanchuhut-branch2/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/vanchuhut-branch2/src/pages/index.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
