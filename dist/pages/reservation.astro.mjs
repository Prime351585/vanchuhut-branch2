/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, e as defineScriptVars, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMYH2_8g.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, H as HeroImg } from '../chunks/LandingImage_BSjkF7PI.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bp2nhWV8.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vanchuhut.in");
const $$Reservation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reservation;
  const { restaurantPhone = "+919971135534" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  document.getElementById('reservationForm').addEventListener('submit', (e) => {\n    e.preventDefault();\n    \n    const formData = new FormData(e.target);\n    const name = formData.get('name');\n    const phone = formData.get('phone');\n    const guests = formData.get('guests');\n    const date = formData.get('date');\n    const time = formData.get('time');\n    const requests = formData.get('requests');\n\n    // Format the message for WhatsApp\n    const message = `\n*New Reservation at Vanchu Hut*\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}\nSpecial Requests: ${requests || 'None'}\n    `.trim();\n\n    // Create WhatsApp URL\n    const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(message)}`;\n    \n    // Redirect to WhatsApp\n    window.location.href = whatsappUrl;\n  });\n})();<\/script>"], ["", " <script>(function(){", "\n  document.getElementById('reservationForm').addEventListener('submit', (e) => {\n    e.preventDefault();\n    \n    const formData = new FormData(e.target);\n    const name = formData.get('name');\n    const phone = formData.get('phone');\n    const guests = formData.get('guests');\n    const date = formData.get('date');\n    const time = formData.get('time');\n    const requests = formData.get('requests');\n\n    // Format the message for WhatsApp\n    const message = \\`\n*New Reservation at Vanchu Hut*\nName: \\${name}\nPhone: \\${phone}\nGuests: \\${guests}\nDate: \\${date}\nTime: \\${time}\nSpecial Requests: \\${requests || 'None'}\n    \\`.trim();\n\n    // Create WhatsApp URL\n    const whatsappUrl = \\`https://wa.me/\\${restaurantPhone}?text=\\${encodeURIComponent(message)}\\`;\n    \n    // Redirect to WhatsApp\n    window.location.href = whatsappUrl;\n  });\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": "Reservations", "description": "Reservations | Reserve your table at Vanchu Hut today!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-white-100 font-agdasima"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImg, "class": "scale-100 w-screen h-[140px] transform -translate-y-[101px] md:-translate-y-[60px]  object-cover", "alt": "Decorative header - Vanchu Hut Chinese cuisine ambiance" })} <!-- <div class="absolute inset-0 bg-black opacity-80 w-screen h-[140px]"></div> --> <div class="min-h-screen px-4 sm:px-6 lg:px-8"> <div class="max-w-md mx-auto"> <!-- Reservation Form --> <div class="bg-white shadow-lg rounded-lg p-6"> <h1 class="hidden">Welcome to Vanchu Hut | Make a Reservation</h1> <h2 class="text-2xl font-semibold text-gray-800 mb-6">Make a Reservation</h2> <form id="reservationForm" class="space-y-6"> <!-- Name Input --> <div> <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2"> </div> <!-- Phone Input --> <div> <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label> <input type="tel" id="phone" name="phone" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2"> </div> <!-- Number of Guests --> <div> <label for="guests" class="block text-sm font-medium text-gray-700">Number of Guests</label> <select id="guests" name="guests" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2"> ${[...Array(10)].map((_, i) => renderTemplate`<option${addAttribute(i + 1, "value")}>${i + 1} ${i === 0 ? "Guest" : "Guests"}</option>`)} </select> </div> <!-- Date Input --> <div> <label for="date" class="block text-sm font-medium text-gray-700">Date</label> <input type="date" id="date" name="date" required${addAttribute((/* @__PURE__ */ new Date()).toISOString().split("T")[0], "min")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2"> </div> <!-- Time Input --> <!-- Time Input --> <div> <label for="time" class="block text-sm font-medium text-gray-700">Time</label> <select id="time" name="time" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2"> ${[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((hour) => renderTemplate`<option${addAttribute(`${hour}:00`, "value")}> ${hour % 12 || 12}:00 ${hour >= 12 ? "PM" : "AM"} </option>`)} </select> </div> <!-- Special Requests --> <div> <label for="requests" class="block text-sm font-medium text-gray-700">Special Requests</label> <textarea id="requests" name="requests" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2"></textarea> </div> <!-- Submit Button --> <button type="submit" class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
Reserve Now
</button> </form> </div> </div> </div> </section> ` }), defineScriptVars({ restaurantPhone }));
}, "/workspaces/vanchuhut-branch2/src/pages/reservation.astro", void 0);

const $$file = "/workspaces/vanchuhut-branch2/src/pages/reservation.astro";
const $$url = "/reservation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reservation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
