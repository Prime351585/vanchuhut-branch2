/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_Cix492Dv.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bp2nhWV8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us | Vanchu Hut - Family Chinese Restaurant in Pratap Vihar, Ghaziabad", "description": "Get in touch with Vanchu Hut! Visit us in Pratap Vihar, Ghaziabad, or reach out via phone or email for inquiries about our Chinese cuisine, reservations, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-white-100 font-agdasima"> ${renderComponent($$result2, "Image", $$Image, { "format": "avif", "src": HeroImg, "class": "scale-100 w-screen h-[140px] transform -translate-y-[101px] md:-translate-y-[60px]  object-cover", "alt": "Decorative header - Vanchu Hut Chinese cuisine ambiance" })} <!-- <div class="absolute inset-0 bg-black opacity-80 w-screen h-[140px]"></div> --> <main class="container mx-auto px-4 py-8 lg:pr-20 lg:pl-20"> <h1 class="text-4xl font-bold mb-6">Contact Us at Vanchu Hut</h1> <div class="grid md:grid-cols-2 gap-8"> <div> <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2> <form class="space-y-4"> <div> <label for="name" class="block mb-1">Name</label> <input type="text" id="name" name="name" class="w-full p-2 border rounded" required> </div> <div> <label for="email" class="block mb-1">Email</label> <input type="email" id="email" name="email" class="w-full p-2 border rounded" required> </div> <div> <label for="message" class="block mb-1">Message</label> <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded" required></textarea> </div> ${renderComponent($$result2, "Button", $$Button, { "text": "Send Message", "onClick": "mailto:vanchuhut@gmail.com" }, { "default": ($$result3) => renderTemplate`Send Message` })} </form> </div> <div> <h2 class="text-2xl font-semibold mb-4">Our Address</h2> <p class="mb-2"> Santosh Medical Intersection Block H</p> <p class="mb-2">Pratap Vihar Ghaziabad Uttar Pradesh 201009</p> <p class="mb-2">Phone:<a href="tel:+919971135534"> +919971135534 </a></p> <p class="mb-2">Email: <a href="mailto:vanchuhut@gmail.com"> vanchuhut@gmail.com</a> </p> <div class="mt-4"> <h3 class="text-xl font-semibold mb-2">Opens</h3> <p>Monday - Friday: 10:00 AM - 06:00 PM</p> <p>Saturday - Sunday: Closed</p> </div> <div class="mt-4"> <h3 class="text-xl font-semibold mb-2">Follow Us on Social Media</h3> <p class="py-2"> Stay updated with our latest offers and events by following us on social media:</p> <div class="hidden md:flex space-x-6"> <a href="#" aria-label="Twitter" class="hover:text-secondary transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> </a> <a href="#" aria-label="Facebook" class="hover:text-secondary transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> </a> <a href="#" aria-label="Instagram" class="hover:text-secondary transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </a> </div> </div> </div> </div> <div class="py-5">We look forward to welcoming you to Vanchu Hut for a memorable dining experience. Don’t hesitate to reach out with any questions or comments—we’re here to assist you</div> </main> <section></section> </section>` })}`;
}, "/workspaces/vanchuhut-branch2/src/pages/contact.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
