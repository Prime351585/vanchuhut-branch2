/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, q as renderScript, b as addAttribute } from '../chunks/astro/server_Bc1SguY6.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CbsSthu6.mjs';
import 'clsx';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_ERSE8M9o.mjs';
import { $ as $$Button } from '../chunks/Button_CC4-jybd.mjs';
/* empty css                                 */
import { d as deliveryImage, m as momos } from '../chunks/chowmin_DFUkTUVz.mjs';
import { c as chillipotato } from '../chunks/chillipotato_F_zui8of.mjs';
import { $ as $$FindUssection } from '../chunks/FindUssection_DQ6zastL.mjs';
import { c as createSvgComponent } from '../chunks/runtime_CYzO9UGp.mjs';
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

const sliderImg1 = createSvgComponent({"meta":{"src":"/_astro/1.guDBy93d.svg","width":512,"height":512,"format":"svg"},"attributes":{"data-name":"Layer 1","viewBox":"0 0 512 512","width":"512","height":"512"},"children":"<circle cx=\"305.095\" cy=\"184.078\" r=\"88.876\" fill=\"#ffe966\" /><path fill=\"#ffe236\" d=\"M305.095 242.954a58.876 58.876 0 1 1 58.876-58.877 58.944 58.944 0 0 1-58.876 58.877Z\" /><path fill=\"#ffed80\" d=\"M305.095 212.954a28.876 28.876 0 1 1 28.876-28.877 28.91 28.91 0 0 1-28.876 28.877Z\" /><path fill=\"#f66\" d=\"M440.424 313.674h-75.423L410 199.5l37.934 103.419a8 8 0 0 1-7.51 10.755Z\" /><path fill=\"#ff4e4e\" d=\"M447.935 302.919 410 199.5l-15.538 39.425 23.473 63.994a8 8 0 0 1-7.51 10.755h30a8 8 0 0 0 7.51-10.755zm-376.36 10.755H147L102 199.5 64.065 302.919a8 8 0 0 0 7.51 10.755z\" /><path fill=\"#f66\" d=\"M365.001 504.5h-218l-45-305 157.374 30 150.626-30-45 305z\" /><path fill=\"#ff4e4e\" d=\"m229.375 229.5 14.672-2.922L102.001 199.5l.868 5.884L229.375 229.5zM379.092 205.656 335.001 504.5H365l45-305-30.908 6.156z\" /><path fill=\"#ff4e4e\" d=\"M327.749 309.139H184.252a15 15 0 0 1-11.756-5.684L102.001 214.5h308l-70.496 88.955a15 15 0 0 1-11.756 5.684Z\" /><path fill=\"#eee\" d=\"M327.749 294.139H184.252a15 15 0 0 1-11.756-5.684L102.001 199.5h308l-70.496 88.955a15 15 0 0 1-11.756 5.684Z\" /><path fill=\"#dedede\" d=\"m368.113 199.5-58.608 73.955a15 15 0 0 1-11.756 5.684H165.113l7.383 9.316a15 15 0 0 0 11.756 5.684H327.75a15 15 0 0 0 11.756-5.684L410 199.5Z\" /><rect width=\"153\" height=\"71\" x=\"179.501\" y=\"363.095\" fill=\"#fff\" rx=\"10\" /><path fill=\"#eee\" d=\"M322.5 363.095h-30a10 10 0 0 1 10 10v51a10 10 0 0 1-10 10h30a10 10 0 0 0 10-10v-51a10 10 0 0 0-10-10Z\" /><path fill=\"#272a33\" d=\"m454.972 300.337-37.93-103.42c-.017-.043-.038-.084-.055-.127-.022-.057-.04-.115-.064-.171-.038-.094-.083-.184-.126-.276-.04-.086-.08-.17-.123-.254q-.102-.199-.216-.392a7.186 7.186 0 0 0-.163-.267c-.04-.062-.078-.127-.12-.189h-.001c-.034-.05-.073-.095-.108-.143a7.311 7.311 0 0 0-.216-.285c-.05-.061-.097-.124-.149-.184l-.023-.03c-.026-.03-.055-.055-.08-.084a7.245 7.245 0 0 0-.255-.27c-.057-.06-.114-.119-.174-.176l-.12-.111c-.087-.079-.176-.152-.265-.227-.043-.035-.081-.075-.125-.11-.027-.02-.056-.038-.084-.059-.042-.032-.083-.066-.126-.098-.081-.06-.166-.113-.249-.17a7.672 7.672 0 0 0-.282-.184c-.036-.023-.072-.048-.109-.07-.067-.04-.137-.073-.205-.11a7.615 7.615 0 0 0-.365-.19c-.033-.016-.065-.035-.1-.05-.054-.026-.111-.045-.167-.07a7.308 7.308 0 0 0-.412-.166c-.043-.017-.087-.033-.131-.048-.058-.02-.118-.036-.177-.054a7.776 7.776 0 0 0-.38-.112c-.061-.016-.123-.03-.186-.045a8.112 8.112 0 0 0-.188-.04c-.106-.021-.213-.043-.32-.06-.087-.013-.174-.023-.26-.034a6.324 6.324 0 0 0-.192-.022c-.085-.008-.17-.017-.255-.022-.113-.007-.226-.008-.34-.01-.043-.001-.087-.008-.13-.008h-8.862c.214-2.633.332-5.279.332-7.922a96.376 96.376 0 0 0-192.753 0c0 2.643.115 5.289.33 7.922h-33.746l-49.225-72.227-9.725-112.916a7.5 7.5 0 1 0-14.944 1.287l7.436 86.344L55.85 16.73a7.5 7.5 0 0 0-12.395 8.447l68.015 99.798L117.242 192H102c-.04 0-.08.005-.122.006a7.45 7.45 0 0 0-.37.013 7.092 7.092 0 0 0-.414.04c-.098.012-.196.024-.293.04-.096.015-.192.036-.288.055-.063.013-.125.024-.187.038a7.561 7.561 0 0 0-.221.054c-.117.03-.232.067-.347.103-.058.018-.117.033-.175.053l-.165.06c-.12.043-.238.094-.356.144l-.112.046c-.026.011-.053.02-.079.032-.044.02-.087.044-.13.065-.106.051-.21.107-.313.164-.083.044-.167.085-.248.133-.027.016-.052.035-.079.051l-.024.016a7.32 7.32 0 0 0-.252.164c-.096.064-.193.127-.287.196l-.113.09c-.027.02-.056.037-.083.059-.036.029-.068.062-.104.091a7.386 7.386 0 0 0-.406.356c-.054.052-.106.105-.158.157a7.551 7.551 0 0 0-.284.303c-.022.024-.046.045-.067.07l-.024.03a7.596 7.596 0 0 0-.38.489c-.03.041-.063.08-.092.122v.001c-.04.056-.073.115-.11.172a7.6 7.6 0 0 0-.187.304q-.102.175-.195.354a7.539 7.539 0 0 0-.14.29c-.04.086-.081.17-.118.258-.021.052-.038.105-.059.158-.018.047-.042.092-.06.14L57.031 300.332a15.49 15.49 0 0 0 14.549 20.838h40.79l27.211 184.425a7.5 7.5 0 0 0 7.42 6.406h218a7.5 7.5 0 0 0 7.419-6.406l27.21-184.425h40.79a15.49 15.49 0 0 0 14.552-20.832ZM71.58 306.17a.452.452 0 0 1-.415-.211.441.441 0 0 1-.054-.457l27.775-75.73 11.272 76.398Zm233.515-203.468a81.468 81.468 0 0 1 81.376 81.376c0 2.646-.142 5.293-.395 7.923H370.99a66.375 66.375 0 1 0-131.794 0h-15.082a82.602 82.602 0 0 1-.396-7.923 81.468 81.468 0 0 1 81.377-81.376Zm0 45A36.303 36.303 0 0 0 269.609 192h-15.255a51.376 51.376 0 1 1 101.481 0H340.59a36.348 36.348 0 0 0-35.495-44.3Zm21.376 36.376a21.287 21.287 0 0 1-1.537 7.923h-39.682a21.372 21.372 0 1 1 41.219-7.923ZM157.149 192h-24.852l-3.595-41.74Zm14.178 15h158.09c.024 0 .048.004.071.004.027 0 .053-.004.08-.004h32.313l.045.002.035-.002h30.64l.045.002.044-.002h1.797l-60.861 76.796a7.455 7.455 0 0 1-5.878 2.842H184.252a7.457 7.457 0 0 1-5.878-2.842L117.514 207Zm187.199 290H153.475l-39.97-270.908 53.113 67.02a22.378 22.378 0 0 0 17.634 8.526h143.496a22.376 22.376 0 0 0 17.634-8.525l53.114-67.022Zm82.309-191.042a.452.452 0 0 1-.415.211h-38.577l11.272-76.396 27.776 75.735a.437.437 0 0 1-.056.45Zm-211.583-51.64h68.496a7.5 7.5 0 0 0 0-15h-68.496a7.5 7.5 0 0 0 0 15ZM322.5 355.595h-133a17.52 17.52 0 0 0-17.5 17.5v51a17.52 17.52 0 0 0 17.5 17.5h133a17.52 17.52 0 0 0 17.5-17.5v-51a17.52 17.52 0 0 0-17.5-17.5Zm2.5 68.5a2.503 2.503 0 0 1-2.5 2.5h-133a2.503 2.503 0 0 1-2.5-2.5v-51a2.503 2.503 0 0 1 2.5-2.5h133a2.503 2.503 0 0 1 2.5 2.5Z\" />"});

const sliderImg2 = createSvgComponent({"meta":{"src":"/_astro/2.DCJJZ5q2.svg","width":66,"height":66,"format":"svg"},"attributes":{"enable-background":"new 0 0 66 66","viewBox":"0 0 66 66","width":"66","height":"66"},"children":"<path fill=\"#abb734\" d=\"M36,36.4c-1.1-8.4-2.1-9-2.7-9.9c-0.6-0.9-0.7-2.3,0.1-3c0.9-0.8,2.5-0.4,3.5-1.3c1-0.9,1-2.8,2.3-3.2    c1.1-0.3,2,0.9,3.2,1c1.5,0.2,3-1.4,4.2-0.6c0.6,0.3,0.8,1,1,1.6c0.4,1.2,0.7,2.4,1.1,3.5c0.2,0.6,0.4,1.3,0.2,1.9    c-0.2,0.7-0.8,1.1-1.4,1.4c-0.6,0.2-1.3,0.3-1.9,8.2L36,36.4z\" /><ellipse cx=\"23.7\" cy=\"31.3\" fill=\"#fa4968\" rx=\"12.6\" ry=\"8.2\" /><ellipse cx=\"23.7\" cy=\"31.3\" fill=\"#ff6989\" rx=\"9.6\" ry=\"5\" /><path fill=\"#e5e5e5\" d=\"M59.8,35.5C57.3,42,51.7,46,47.4,44.3c-4.3-1.7-5.8-8.4-3.2-14.9c2.6-6.5,8.1-10.4,12.5-8.7    C61,22.3,62.4,29,59.8,35.5z\" /><circle cx=\"52\" cy=\"32.4\" r=\"4.4\" fill=\"#fecd04\" transform=\"rotate(-11.304 51.98 32.44)\" /><path fill=\"#ffb95c\" d=\"M4.3,7.9l35,3c0.8,0.1,1.5-0.5,1.6-1.3l0,0C41,8.8,40.4,8,39.6,7.9L4.9,2.5C3.4,2.3,2,3.4,1.8,4.9l0,0    C1.6,6.4,2.7,7.8,4.3,7.9z\" /><path fill=\"#ffb95c\" d=\"M4.2,13.9l35-3c0.8-0.1,1.5,0.5,1.6,1.3l0,0c0.1,0.8-0.5,1.6-1.3,1.7L4.9,19.3c-1.5,0.2-2.9-0.8-3.1-2.4l0,0    C1.6,15.4,2.7,14,4.2,13.9z\" /><path fill=\"#ffb95c\" d=\"M4.2,13.9l35-3c0.8-0.1,1.5,0.5,1.6,1.3l0,0c0.1,0.8-0.5,1.6-1.3,1.7L4.9,19.3c-1.5,0.2-2.9-0.8-3.1-2.4l0,0    C1.6,15.4,2.7,14,4.2,13.9z\" /><path fill=\"#559aff\" d=\"M10.7,38.9c0,0.1,0,0.3,0,0.4c0,12.3,11.4,22.3,25.5,22.3c14.1,0,25.5-10,25.5-22.3c0-0.1,0-0.3,0-0.4H10.7z    \" /><path fill=\"#e5e5e5\" d=\"M57.7,51.4c1.6-2.2,2.8-4.6,3.5-7.3H11.3c0.7,2.6,1.9,5.1,3.5,7.3H57.7z\" /><path fill=\"#3a8bed\" d=\"M61.8 38.9h-51c-1.4 0-2.5-1.1-2.5-2.5v-.3c0-1.4 1.1-2.5 2.5-2.5h51c1.4 0 2.5 1.1 2.5 2.5v.3C64.2 37.8 63.1 38.9 61.8 38.9zM23.7 58.5h25.1v2.3c0 1.5-1.2 2.7-2.7 2.7H26.4c-1.5 0-2.7-1.2-2.7-2.7V58.5z\" /><path fill=\"#fecd04\" d=\"M28.8,15.5c-0.1,0.2-0.3,0.5-0.5,0.7c-0.4,0.4-0.6,0.8-0.6,1.2s0.2,0.9,0.6,1.2c0.4,0.4,0.6,0.8,0.6,1.2    s-0.2,0.9-0.6,1.2c-0.4,0.4-0.6,0.8-0.6,1.2c0,0.4,0.2,0.9,0.6,1.2c0.4,0.3,0.6,0.8,0.6,1.2s-0.2,0.9-0.6,1.2    c-0.4,0.3-0.6,0.8-0.6,1.2s0.2,0.9,0.6,1.2c0.4,0.3,0.6,0.8,0.6,1.2c0,0.5-0.2,0.9-0.6,1.2c-0.4,0.4-0.6,0.8-0.6,1.2    c0,0.5,0.2,0.9,0.6,1.2h4.5c-0.9-0.7-0.9-1.8,0-2.5c0.4-0.4,0.6-0.8,0.6-1.2c0-0.4-0.2-0.9-0.6-1.2c-0.4-0.3-0.6-0.8-0.6-1.2    s0.2-0.9,0.6-1.2c0.4-0.3,0.6-0.8,0.6-1.2s-0.2-0.9-0.6-1.2c-0.4-0.3-0.6-0.8-0.6-1.2c0-0.5,0.2-0.9,0.6-1.2    c0.4-0.4,0.6-0.8,0.6-1.2s-0.2-0.9-0.6-1.2c-0.4-0.4-0.6-0.8-0.6-1.2s0.2-0.9,0.6-1.2c0.4-0.3,0.6-0.8,0.6-1.2c0,0,0,0,0,0    c0-0.4-0.2-0.9-0.6-1.2c-0.4-0.3-0.6-0.8-0.6-1.2c0-0.3,0.1-0.6,0.3-0.9l-4.7,0.3c-0.3,0.6-0.1,1.3,0.5,1.8    c0.4,0.3,0.6,0.8,0.6,1.2C28.9,15.1,28.9,15.3,28.8,15.5z\" /><path fill=\"#fecd04\" d=\"M33.4,14.9c0,0.5-0.2,0.9-0.6,1.2c-0.4,0.4-0.6,0.8-0.6,1.2s0.2,0.9,0.6,1.2c0.4,0.4,0.6,0.8,0.6,1.2    s-0.2,0.9-0.6,1.2c-0.4,0.4-0.6,0.8-0.6,1.2c0,0.4,0.2,0.9,0.6,1.2c0.4,0.3,0.6,0.8,0.6,1.2s-0.2,0.9-0.6,1.2    c-0.4,0.3-0.6,0.8-0.6,1.2s0.2,0.9,0.6,1.2c0.4,0.3,0.6,0.8,0.6,1.2c0,0.5-0.2,0.9-0.6,1.2c-0.4,0.4-0.6,0.8-0.6,1.2    c0,0.5,0.2,0.9,0.6,1.2h4.5c-0.8-0.7-0.8-1.8,0-2.5c0.4-0.4,0.6-0.8,0.6-1.2c0-0.4-0.2-0.9-0.6-1.2c-0.4-0.3-0.6-0.8-0.6-1.2    s0.2-0.9,0.6-1.2c0.4-0.3,0.6-0.8,0.6-1.2s-0.2-0.9-0.6-1.2c-0.4-0.3-0.6-0.8-0.6-1.2c0-0.5,0.2-0.9,0.6-1.2    c0.4-0.4,0.6-0.8,0.6-1.2s-0.2-0.9-0.6-1.2c-0.4-0.4-0.6-0.8-0.6-1.2s0.2-0.9,0.6-1.2c0.4-0.4,0.6-0.8,0.6-1.2    c0-0.2,0-0.4-0.1-0.5c-0.1-0.3-0.3-0.5-0.5-0.7c-0.4-0.3-0.6-0.8-0.6-1.2c0-0.4,0.2-0.9,0.6-1.2l-4.9,0.3    c-0.5,0.7-0.4,1.6,0.3,2.2C33.2,14,33.4,14.4,33.4,14.9C33.4,14.9,33.4,14.9,33.4,14.9z\" /><path fill=\"#fff\" d=\"M56.5 37h-13c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8h13c.4 0 .8.3.8.8C57.2 36.7 56.9 37 56.5 37zM37.2 37h-2.5c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8C38 36.7 37.6 37 37.2 37z\" opacity=\".4\" />"});

const sliderImg3 = createSvgComponent({"meta":{"src":"/_astro/3.Cohcp7Xb.svg","width":68,"height":68,"format":"svg"},"attributes":{"enable-background":"new 0 0 68 68","viewBox":"0 0 68 68","width":"68","height":"68"},"children":"<path fill=\"#4269c4\" d=\"M53.5012703,7.6939473L53.4322433,7.745626l-30.4739246,21.019701   c-0.4289227,0.2916622-1.009697,0.1969509-1.3248215-0.2239819c-0.3105316-0.4147968-0.2424088-1.0048695,0.1629696-1.3279781   L50.5488052,3.8940277c1.060482-0.8626156,2.6252861-0.6710773,3.4437599,0.4222131   C54.7922058,5.3843737,54.5634232,6.8987851,53.5012703,7.6939473z\" /><path fill=\"#255299\" d=\"M46.7626991,12.346097l6.6695442-4.600471l0.0690269-0.0516787   c1.0621529-0.7951622,1.2909355-2.3095737,0.4912949-3.3777065c-0.8184738-1.0932903-2.3832779-1.2848287-3.4437599-0.4222131   l-6.2928619,5.1036272L46.7626991,12.346097z\" /><path fill=\"#e0860e\" d=\"M26.6860828 42.7282753c0 3.7192421-3.2745514 5.1386108-7.3139153 5.1386108s-7.3139172-1.4193687-7.3139172-5.1386108c0-3.7192459 3.2745514-8.3299599 7.3139172-8.3299599S26.6860828 39.0090294 26.6860828 42.7282753zM42.6081924 42.7282753c0 3.7192421-3.2745514 5.1386108-7.3139153 5.1386108S27.98036 46.4475174 27.98036 42.7282753c0-3.7192459 3.2745533-8.3299599 7.3139172-8.3299599S42.6081924 39.0090294 42.6081924 42.7282753z\" /><path fill=\"#fbad3e\" d=\"M19.3721676,48.2805367c0,3.7192421-3.2745533,5.1386108-7.3139172,5.1386108    s-7.3139172-1.4193687-7.3139172-5.1386108c0-3.7192459,3.2745523-8.3299599,7.3139172-8.3299599    S19.3721676,44.5612907,19.3721676,48.2805367z\" /><path fill=\"#fa990e\" d=\"M34,48.2805367c0,3.7192421-3.2745514,5.1386108-7.3139172,5.1386108    s-7.3139153-1.4193687-7.3139153-5.1386108c0-3.7192459,3.2745514-8.3299599,7.3139153-8.3299599S34,44.5612907,34,48.2805367z\" /><path fill=\"#fbad3e\" d=\"M48.6278343 48.2805367c0 3.7192421-3.2745514 5.1386108-7.3139191 5.1386108S34 51.9997787 34 48.2805367c0-3.7192459 3.2745514-8.3299599 7.3139153-8.3299599S48.6278343 44.5612907 48.6278343 48.2805367zM39.067379 26.0969906c0 3.719244-3.2745552 5.1386127-7.3139191 5.1386127s-7.3139153-1.4193687-7.3139153-5.1386127 3.2745514-8.3299599 7.3139153-8.3299599S39.067379 22.3777485 39.067379 26.0969906z\" /><path fill=\"#fa990e\" d=\"M63.2556648,48.2805367c0,3.7192421-3.2745514,5.1386108-7.3139153,5.1386108    s-7.3139153-1.4193687-7.3139153-5.1386108c0-3.7192459,3.2745514-8.3299599,7.3139153-8.3299599    S63.2556648,44.5612907,63.2556648,48.2805367z\" /><g><path fill=\"#d1dafe\" d=\"M54.4840164,64.1032104c-13.4524117,0.6488495-27.1475182,0.7223282-41.0983963,0.1879883       c-2.6857519-0.1028671-5.1406412-1.2586174-6.4827485-3.0609589c-1.7381673-2.3342171-2.600853-6.6629333-2.7049479-9.2310104       h59.6041489c-0.5222473,2.5092964-1.4049377,6.7510757-2.8544044,8.9088326       C59.6917,62.777771,57.202816,63.9720764,54.4840164,64.1032104z\" /><path fill=\"#8a9bea\" d=\"M65.8917389,52.1881866c0,0.0636787,0,0.1276207-0.0106583,0.1915588     c-0.0745926,1.0539513-0.9900055,1.8524055-2.0333023,1.9163437c-19.8977051,1.2881317-39.805809,1.2774773-59.7032547-0.0213127     c-1.0328979-0.0639381-1.958971-0.8410797-2.0335662-1.8737183c-0.0103965-0.1915588,0-0.3727188,0.021313-0.5642738     c0.1172211-1.0326385,1.0219812-1.7887268,2.0548792-1.8417511c19.9826965-1.0326347,39.848175-1.0326347,59.6180038-0.0213127     C64.9760666,50.0376625,65.9343643,51.0170174,65.8917389,52.1881866z\" /></g><path fill=\"#4269c4\" d=\"M64.6292572,17.0925503l-0.0755157,0.0416241L31.4633198,33.7327309   c-0.4651699,0.2294769-1.0272388,0.055275-1.2810574-0.4052277c-0.2501163-0.4537926-0.1009617-1.0287514,0.3452454-1.2926331   l31.7037659-19.1143837c1.1696892-0.7074986,2.6929131-0.3011761,3.3521538,0.8948956   C66.2274933,14.9839306,65.7912598,16.4520874,64.6292572,17.0925503z\" /><path fill=\"#255299\" d=\"M57.3115349,20.7670307l7.2422066-3.6328564l0.0755157-0.0416241   c1.1620026-0.6404629,1.5982361-2.1086197,0.9541702-3.2771683c-0.6592407-1.1960716-2.1824646-1.6023941-3.3521538-0.8948956   l-6.9388046,4.1833134L57.3115349,20.7670307z\" />"});

const sliderImg4 = createSvgComponent({"meta":{"src":"/_astro/4.D1OVZqO9.svg","width":64,"height":64,"format":"svg"},"attributes":{"enable-background":"new 0 0 64 64","viewBox":"0 0 64 64","width":"64","height":"64"},"children":"<pattern id=\"j\" width=\"23.63\" height=\"23.25\" x=\"-168\" overflow=\"visible\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 -23.25 23.63 23.25\"><rect width=\"23.63\" height=\"23.25\" y=\"-23.25\" fill=\"none\" /><rect width=\"23.63\" height=\"23.25\" y=\"-23.25\" fill=\"#fccc77\" /></pattern><pattern id=\"o\" width=\"24.63\" height=\"24.63\" x=\"-168\" overflow=\"visible\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 -24.63 24.63 24.63\"><rect width=\"24.63\" height=\"24.63\" y=\"-24.63\" fill=\"none\" /><rect width=\"24.63\" height=\"24.63\" y=\"-24.63\" fill=\"#a4ccf0\" /></pattern><pattern id=\"d\" width=\"24.63\" height=\"24.63\" x=\"-168\" overflow=\"visible\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 -24.63 24.63 24.63\"><rect width=\"24.63\" height=\"24.63\" y=\"-24.63\" fill=\"none\" /><rect width=\"24.63\" height=\"24.63\" y=\"-24.63\" fill=\"#a5b0b9\" /></pattern><pattern id=\"a\" width=\"23.63\" height=\"23.25\" x=\"-168\" overflow=\"visible\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 -23.25 23.63 23.25\"><rect width=\"23.63\" height=\"23.25\" y=\"-23.25\" fill=\"none\" /><rect width=\"23.63\" height=\"23.25\" y=\"-23.25\" fill=\"#f26d74\" /></pattern><path d=\"M63.6,15.29c-0.3-0.33-0.69-0.54-1.12-0.57l-8.17-0.68c-0.01,0-0.01,0-0.02,0h-0.01l-3.39-0.28c0,0,0-0.01-0.01-0.01   l-0.01,0.01l-20.71-1.72V6.3h32.09c0.91,0,1.64-0.74,1.64-1.65V1.77c0-0.91-0.74-1.64-1.64-1.64H8.96c-0.91,0-1.64,0.74-1.64,1.64   v2.88c0,0.92,0.74,1.65,1.64,1.65H15v4.48l-6.11-0.49c-0.45-0.04-0.89,0.11-1.22,0.4c-0.33,0.29-0.53,0.68-0.56,1.11l-0.24,2.85   c-0.04,0.44,0.09,0.87,0.37,1.2c0.29,0.34,0.69,0.55,1.13,0.58L15,16.98v10.1H0.49C0.22,27.09,0,27.3,0,27.58v4.5   c0,0.27,0.22,0.49,0.49,0.49H2.4l5.34,27.89c0.04,0.23,0.25,0.39,0.48,0.39H8.6v1.75c0,0.7,0.57,1.27,1.27,1.27h28.48   c0.7,0,1.28-0.57,1.28-1.27v-1.75h0.12c0.24,0,0.43-0.17,0.48-0.39l5.58-27.89h1.75c0.27,0,0.49-0.23,0.49-0.49v-4.5   c0-0.28-0.23-0.49-0.49-0.49h-17.4v-8.86l20.34,1.69c0.01,0,0.01,0,0.02,0h0.03l3.15,0.27h0.05l8.22,0.69h0.13   c0.39,0,0.77-0.14,1.07-0.39c0.33-0.29,0.54-0.69,0.57-1.13L64,16.49C64.03,16.05,63.89,15.62,63.6,15.29z M54.74,1.11h7.51   c0.36,0,0.66,0.3,0.66,0.66v2.88c0,0.37-0.3,0.67-0.66,0.67h-7.51V1.11z M51.34,1.11h2.41v4.2h-2.41V1.11z M8.46,15.45   c-0.18-0.01-0.34-0.09-0.45-0.23c-0.12-0.14-0.17-0.31-0.15-0.48l0.24-2.86c0.01-0.18,0.09-0.33,0.22-0.45   c0.14-0.12,0.32-0.19,0.5-0.17L15,11.77V16L8.46,15.45z M5.21,42.01h11.7l-2.28,3.96c-0.09,0.15-0.09,0.33,0,0.49l2.28,3.96H6.82   L5.21,42.01z M19.86,38.86h8.49l4.24,7.36l-4.24,7.35h-8.49l-4.24-7.35L19.86,38.86z M38.64,62.6c0,0.16-0.14,0.29-0.3,0.29H9.87   c-0.16,0-0.29-0.13-0.29-0.29v-1.75h29.06V62.6z M39.34,59.87H8.63l-1.61-8.46h10.47l1.67,2.9c0.09,0.16,0.25,0.25,0.42,0.25h9.06   c0.18,0,0.33-0.09,0.42-0.25l1.67-2.9h10.3L39.34,59.87z M41.23,50.42H31.3l2.28-3.96c0.09-0.16,0.09-0.34,0-0.49l-2.28-3.96h11.61   L41.23,50.42z M43.11,41.03H30.73l-1.67-2.9c-0.09-0.15-0.25-0.25-0.42-0.25h-9.06c-0.18,0-0.33,0.1-0.42,0.25l-1.67,2.9H5.02   l-1.61-8.46h41.4L43.11,41.03z M47.07,28.07v3.52H0.98v-3.52H47.07z M15.98,27.09v-10.5c0-0.01,0-0.01,0-0.02v-5.19   c0-0.01,0-0.02,0-0.02V6.3h3.74v20.79H15.98z M20.71,27.09V6.3h3.74v20.79H20.71z M25.43,27.09V6.3h3.74v20.79H25.43z M8.96,5.31   c-0.36,0-0.66-0.3-0.66-0.67V1.77c0-0.36,0.3-0.66,0.66-0.66h41.4v4.2H8.96z M50.09,18.89l-19.93-1.65v-4.2l20.17,1.66L50.09,18.89   z M53.31,19.16l-2.25-0.19l0.25-4.19l2.39,0.2L53.31,19.16z M62.77,19.27c-0.01,0.19-0.09,0.34-0.23,0.46   c-0.14,0.12-0.32,0.17-0.48,0.16l-7.77-0.65l0.4-4.18l7.71,0.64c0.18,0.01,0.33,0.1,0.45,0.23c0.12,0.14,0.18,0.31,0.16,0.48   L62.77,19.27z\" /><pattern id=\"b\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#a\" /><polygon fill=\"url(#b)\" points=\"53.71 14.98 53.31 19.16 51.07 18.97 51.31 14.79\" /><pattern id=\"c\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#a\" /><rect width=\"2.41\" height=\"4.2\" x=\"51.34\" y=\"1.11\" fill=\"url(#c)\" /><pattern id=\"e\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><polygon fill=\"url(#e)\" points=\"50.33 14.7 50.09 18.89 30.16 17.24 30.16 13.03\" /><pattern id=\"f\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><path fill=\"url(#f)\" d=\"M63.01,16.41l-0.25,2.86c-0.01,0.19-0.09,0.34-0.23,0.46c-0.14,0.12-0.32,0.17-0.48,0.16l-7.77-0.65l0.4-4.18   l7.71,0.64c0.18,0.01,0.33,0.1,0.45,0.23C62.97,16.07,63.03,16.23,63.01,16.41z\" /><pattern id=\"g\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><path fill=\"url(#g)\" d=\"M62.91,1.77v2.88c0,0.37-0.3,0.67-0.66,0.67h-7.51v-4.2h7.51C62.62,1.11,62.91,1.41,62.91,1.77z\" /><pattern id=\"h\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><path fill=\"url(#h)\" d=\"M15,11.77V16l-6.54-0.55c-0.18-0.01-0.34-0.09-0.45-0.23c-0.12-0.14-0.17-0.31-0.15-0.48l0.24-2.86   c0.01-0.18,0.09-0.33,0.22-0.45c0.14-0.12,0.32-0.19,0.5-0.17L15,11.77z\" /><pattern id=\"i\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><path fill=\"url(#i)\" d=\"M50.36,1.11v4.2H8.96c-0.36,0-0.66-0.3-0.66-0.67V1.77c0-0.36,0.3-0.66,0.66-0.66H50.36z\" /><pattern id=\"k\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#j\" /><rect width=\"3.74\" height=\"20.79\" x=\"25.43\" y=\"6.3\" fill=\"url(#k)\" /><pattern id=\"l\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#j\" /><rect width=\"3.74\" height=\"20.79\" x=\"20.71\" y=\"6.3\" fill=\"url(#l)\" /><pattern id=\"m\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#j\" /><path fill=\"url(#m)\" d=\"M19.72,6.3v20.79h-3.74v-10.5c0-0.01,0-0.01,0-0.02v-5.19c0-0.01,0-0.02,0-0.02V6.3H19.72z\" /><pattern id=\"n\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#a\" /><path fill=\"url(#n)\" d=\"M42.91,42.01l-1.68,8.41H31.3l2.28-3.96c0.09-0.16,0.09-0.34,0-0.49l-2.28-3.96H42.91z\" /><pattern id=\"p\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#o\" /><path fill=\"url(#p)\" d=\"M28.35,38.86h-8.49l-4.24,7.36l4.24,7.35h8.49l4.24-7.35L28.35,38.86z M24.11,50.56   c-2.39,0-4.34-1.95-4.34-4.34c0-2.39,1.95-4.34,4.34-4.34s4.34,1.95,4.34,4.34C28.45,48.61,26.5,50.56,24.11,50.56z\" /><pattern id=\"q\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#a\" /><path fill=\"url(#q)\" d=\"M14.62,46.47l2.28,3.96H6.82l-1.61-8.41h11.7l-2.28,3.96C14.53,46.12,14.53,46.31,14.62,46.47z\" /><pattern id=\"r\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#j\" /><path fill=\"url(#r)\" d=\"M41.03,51.41l-1.69,8.46H8.63l-1.61-8.46h10.47l1.67,2.9c0.09,0.16,0.25,0.25,0.42,0.25h9.06   c0.18,0,0.33-0.09,0.42-0.25l1.67-2.9H41.03z\" /><pattern id=\"s\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#j\" /><path fill=\"url(#s)\" d=\"M44.8,32.57l-1.69,8.46H30.73l-1.67-2.9c-0.09-0.15-0.25-0.25-0.42-0.25h-9.06c-0.18,0-0.33,0.1-0.42,0.25   l-1.67,2.9H5.02l-1.61-8.46H44.8z\" /><pattern id=\"t\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><rect width=\"46.08\" height=\"3.52\" x=\".98\" y=\"28.07\" fill=\"url(#t)\" /><pattern id=\"u\" patternTransform=\"translate(-157.121 -103.209) scale(.9847)\" xlink:href=\"#d\" /><path fill=\"url(#u)\" d=\"M38.64,60.85v1.75c0,0.16-0.14,0.29-0.3,0.29H9.87c-0.16,0-0.29-0.13-0.29-0.29v-1.75H38.64z\" /><path d=\"M24.11,41.88c-2.39,0-4.34,1.95-4.34,4.34c0,2.39,1.95,4.34,4.34,4.34s4.34-1.95,4.34-4.34   C28.45,43.83,26.5,41.88,24.11,41.88z M24.11,49.58c-1.85,0-3.36-1.51-3.36-3.36c0-1.85,1.51-3.36,3.36-3.36s3.36,1.51,3.36,3.36   C27.46,48.07,25.96,49.58,24.11,49.58z\" /><pattern id=\"v\" patternTransform=\"translate(-151.213 -143.56) scale(.9847)\" xlink:href=\"#a\" /><circle cx=\"24.11\" cy=\"46.22\" r=\"3.36\" fill=\"url(#v)\" />"});

const sliderImg5 = createSvgComponent({"meta":{"src":"/_astro/5.v4acf2pC.svg","width":32,"height":32,"format":"svg"},"attributes":{"viewBox":"0 0 32 32","width":"32","height":"32"},"children":"<g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"none\" stroke=\"#faa41a\" d=\"M13.086 8.261a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M12.978 10.749a1.25 1.25 0 0 1-1.25-1.239 1.25 1.25 0 0 1 1.227-1.261M13.086 13.249a1.25 1.25 0 0 0 1.25-1.239 1.25 1.25 0 0 0-1.227-1.261m4.977-2.488a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M17.978 10.749a1.25 1.25 0 0 1-1.25-1.239 1.25 1.25 0 0 1 1.227-1.261M18.086 13.249a1.25 1.25 0 0 0 1.25-1.239 1.25 1.25 0 0 0-1.227-1.261M8.473 8.26a1.25 1.25 0 0 0 1.25-1.238A1.25 1.25 0 0 0 8.497 5.76M8.366 10.749a1.25 1.25 0 0 1-1.25-1.239A1.25 1.25 0 0 1 8.342 8.25M8.473 13.249a1.25 1.25 0 0 0 1.25-1.239 1.25 1.25 0 0 0-1.226-1.261\" /><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M29.907 9.92c0 1.279-.887 2.315-1.98 2.315-1.095 0-1.982-1.036-1.982-2.314s.887-3.296 1.981-3.296 1.981 2.018 1.981 3.296z\" /><path fill=\"none\" stroke=\"#383747\" d=\"M8.96 26.239h8.999v-2.976c-1.918.846-3.035.978-4.588 1.01-1.944.04-3.26-.296-4.41-.583zm18.95-13.452c-.94 2.905-.675 6.614-.978 9.944 0 1.532 1.989 1.48 1.989 0-.306-3.307.172-6.562-1.01-9.944z\" /><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M24.813 15.465c-1.681 6.274-8.13 9.997-14.404 8.316a11.76 11.76 0 0 1-8.316-8.316z\" /><path fill=\"none\" stroke=\"#fff\" d=\"M21.447 17.498c-.708 2.159-2.603 3.66-4.803 4.068\" /></g>"});

const sliderImg6 = createSvgComponent({"meta":{"src":"/_astro/6.v3QjDLlT.svg","width":32,"height":32,"format":"svg"},"attributes":{"viewBox":"0 0 32 32","width":"32","height":"32"},"children":"<g stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"translate(2223.996 -961.068)\"><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M-2216.14 969.958c0 1.631-.552 3.08-2.811 3.12-2.26.041-3.085-1.697-2.93-3.534.155-1.838 1.604-4.543 2.93-4.533 1.326.011 2.965 3.109 2.81 4.947z\" /><path fill=\"none\" stroke=\"#383747\" d=\"M-2219.015 973.41v6.203\" /><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M-2218.989 979.613c.294 0 .674.275.674.568 0 2.52.26 5.501.26 8.117 0 .415-.518.828-.934.827-.44 0-.985-.44-.985-.879 0-3.071.311-5.229.311-8.065 0-.293.38-.568.674-.568z\" /><path fill=\"none\" stroke=\"#383747\" d=\"M-2194.093 968.462v3.619c0 .729-.589 1.316-1.32 1.316-.731 0-1.32-.587-1.32-1.316v-3.62m1.322 4.933v-5.675m.005 5.67v6.204\" /><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M-2195.38 979.593c.294 0 .674.276.674.57 0 2.52.259 5.5.259 8.115 0 .415-.517.828-.933.828-.441 0-.986-.44-.986-.88 0-3.07.312-5.228.312-8.064 0-.293.38-.569.674-.569z\" /><ellipse cx=\"-2207.315\" cy=\"976.596\" fill=\"none\" stroke=\"#383747\" rx=\"6.896\" ry=\"6.876\" /><ellipse cx=\"-2207.315\" cy=\"976.596\" fill=\"#faa41a\" stroke=\"#383747\" rx=\"4.407\" ry=\"4.394\" /><path fill=\"none\" stroke=\"#fff\" d=\"M-2207.339 973.925a2.679 2.67 0 0 1 2.69 2.403\" /></g>"});

const sliderImg7 = createSvgComponent({"meta":{"src":"/_astro/7.Da1CUBfE.svg","width":32,"height":32,"format":"svg"},"attributes":{"viewBox":"0 0 32 32","width":"32","height":"32"},"children":"<g stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"translate(0 -1020.362)\"><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M3.469 1037.64h25.062c-.221-13.565-25.062-13.693-25.062 0z\" /><rect width=\"28.883\" height=\"4.044\" x=\"1.558\" y=\"1037.633\" fill=\"none\" stroke=\"#383747\" rx=\"2.022\" ry=\"2.022\" /><path fill=\"#faa41a\" stroke=\"#383747\" d=\"M3.174 1041.671c-.292 1.659.504 3.635 2.227 3.635h21.528c.955 0 1.728-1.268 1.676-3.65z\" /><path fill=\"none\" stroke=\"#383747\" d=\"M4.116 1040.256s.658-1.25 1.847-1.205c1.19.046 1.058 1.205 2.016 1.205.959 0 .591-1.25 2.037-1.205 1.446.046 1.075 1.205 2.037 1.205.961 0 .54-1.205 1.994-1.205s1.373 1.205 1.995 1.205c.622 0 .793-1.25 2.1-1.205 1.307.046 1.111 1.268 2.1 1.205.988-.062.704-1.205 1.931-1.205s1.03 1.19 1.932 1.205c.902.016.655-.947 1.89-1.205 1.234-.257 1.89 1.205 1.89 1.205\" /><path fill=\"none\" stroke=\"#fff\" d=\"M25.178 1034.474c-1.562-3.166-5.362-4.774-9.165-4.805\" /></g>"});

const sliderImg8 = createSvgComponent({"meta":{"src":"/_astro/8.f5696CXD.svg","width":212,"height":395,"format":"svg"},"attributes":{"viewBox":"0 0 212.03 395.244","width":"212.02999877929688","height":"395.2439880371094"},"children":"<path fill=\"#c9711a\" d=\"M62.785 159.772s10.482 170.627 106.368 172.943l-7.557 47.135H48.118L34.995 159.772h27.79z\" /><path fill=\"#352517\" d=\"M199.678 110.131h-5.591c-4.068-29.099-22.188-53.709-47.325-66.714l.884-18.714h45.856c6.821 0 12.351-5.53 12.351-12.351S200.324 0 193.503 0h-57.638c-6.595 0-12.026 5.181-12.336 11.769l-1.098 23.264c-5.328-.998-10.801-1.58-16.416-1.58-44.891 0-82.027 33.426-88.073 76.677h-5.591C5.53 110.131 0 115.661 0 122.482v37.054c0 6.824 5.53 12.351 12.351 12.351h5.295l10.476 189.45c1.052 19.013 16.793 33.906 35.836 33.906h84.114c19.043 0 34.783-14.893 35.836-33.906l10.476-189.45h5.295c6.821 0 12.351-5.527 12.351-12.351v-37.054c0-6.821-5.531-12.351-12.352-12.351zM24.703 147.185v-12.351h93.021l-.582 12.351H24.703zm117.748-12.351h44.876v12.351h-45.458l.582-12.351zm26.702-24.703h-25.537l1.811-38.387c12.032 9.369 20.695 22.869 23.726 38.387zm-63.138-51.975c5.254 0 10.345.681 15.237 1.876l-2.363 50.099H42.877c5.775-29.582 31.892-51.975 63.138-51.975zm53.226 301.816c-.329 5.925-5.235 10.569-11.169 10.569H63.958c-5.934 0-10.841-4.644-11.169-10.569l-10.4-188.084h73.587l-7.885 167.193c-.323 6.815 4.939 12.599 11.754 12.921.199.006.395.012.591.012 6.556 0 12.017-5.153 12.327-11.769l7.941-168.357h28.938l-10.401 188.084z\" />"});

const $$FoodSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="slider-container w-full overflow-hidden bg-gray-100 py-10" data-astro-cid-agzm3qoy> <div class="slider-track flex" data-astro-cid-agzm3qoy> <!-- First set of images --> <div class="flex space-x-16 mx-8 min-w-max" data-astro-cid-agzm3qoy> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg1, "alt": "Noodels", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg2, "alt": "ramen", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg3, "alt": "momos", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg4, "alt": "chowmin", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg5, "alt": "soup", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg6, "alt": "Omlette", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg7, "alt": "Burger", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg8, "alt": "Coffee", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} </div> <!-- Duplicate set for seamless loop --> <div class="flex space-x-16 mx-8 min-w-max" data-astro-cid-agzm3qoy> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg1, "alt": "Noodels", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg2, "alt": "ramen", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg3, "alt": "momos", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg4, "alt": "chowmin", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg5, "alt": "soup", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg6, "alt": "Omlette", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg7, "alt": "Burger", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": sliderImg8, "alt": "Coffee", "class": "w-auto h-[60px]", "data-astro-cid-agzm3qoy": true })} </div> </div> </div> `;
}, "/workspaces/vanchuhut-branch2/src/components/FoodSlider.astro", void 0);

const GoogleImg = createSvgComponent({"meta":{"src":"/_astro/google.yYid5rrk.svg","width":2443,"height":2500,"format":"svg"},"attributes":{"width":"2443","height":"2500","preserveAspectRatio":"xMidYMid","viewBox":"0 0 256 262","id":"google"},"children":"\n  <path fill=\"#4285F4\" d=\"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\"></path>\n  <path fill=\"#34A853\" d=\"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\"></path>\n  <path fill=\"#FBBC05\" d=\"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\"></path>\n  <path fill=\"#EB4335\" d=\"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\"></path>\n"});

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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Restaurant",\n  "name": "VANCHU HUT",\n  "image": "https://vanchuhut.in/_astro/DineIn.DTOb2J6X_1nEAwW.avif",\n  "@id": "https://vanchuhut.in/#restaurant",\n  "url": "https://vanchuhut.in/",\n  "telephone": "+91 9971135534",\n  "priceRange": "\u20B9500",\n  "servesCuisine": "Chinese",\n  "hasMenu": "https://vanchuhut.in/menu/",\n  "acceptsReservations": "false",\n  "sameAs": [\n    "https://www.facebook.com/vanchuhut",\n    "https://www.instagram.com/vanchuhut"\n  ],\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4",\n    "ratingCount": "756"\n  },\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "Santosh Medical Intersection, Block H, Pratap Vihar",\n    "addressLocality": "Ghaziabad",\n    "addressRegion": "Uttar Pradesh",\n    "postalCode": "201009",\n    "addressCountry": "IN"\n  },\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": 28.647540,\n    "longitude": 77.411249\n  },\n  "openingHoursSpecification": [\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": [\n        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"\n      ],\n      "opens": "12:00",\n      "closes": "22:00"\n    }\n  ]\n}\n<\/script> ', " ", ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Vanchu Hut - Best Chinese Restaurant in Pratap Vihar, Ghaziabad | Authentic Chinese Cuisine", "description": "Discover the best Chinese restaurant in Pratap Vihar, Ghaziabad, at Vanchu Hut. Enjoy authentic Chinese cuisine with family-friendly dining options." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${maybeRenderHead()}<div class=" flex justify-center items-center h-0 w-auto "> ${renderComponent($$result2, "Image", $$Image, { "id": "center-image", "src": dividerImage, "format": "avif", "alt": "Chowmin", "width": 250, "height": 250, "class": "z-10 " })}</div> ${renderComponent($$result2, "FoodSection", $$FoodSection, {})} ${renderComponent($$result2, "DeliverySection", $$DeliverySection, {})} ${renderComponent($$result2, "FoodSlider", $$FoodSlider, {})} ${renderComponent($$result2, "MenuSection", $$MenuSection, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "VideoSection", $$VideoSection, {})} ${renderComponent($$result2, "DineIn", $$DineIn, {})} ${renderComponent($$result2, "GoogleReview", $$GoogleReview, {})} ${renderComponent($$result2, "FindUssection", $$FindUssection, {})} ` }), renderScript($$result, "/workspaces/vanchuhut-branch2/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
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
