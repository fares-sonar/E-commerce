/////////////////////////////////// BillingDetails ////////////////////////////////////////////

export const inputDiv = [
  { text: "firstName", type: "text", desc: "First Name" },
  { text: "companyName", type: "text", desc: "company Name" },
  { text: "streetAddress", type: "text", desc: "street Address" },
  { text: "apartment", type: "text", desc: "apartment" },
  { text: "town", type: "text", desc: "City/Town" },
  { text: "phone", type: "tel", desc: "Phone Number" },
  { text: "email", type: "email", desc: "Email Address" },
  {
    text: "saveInfo",
    type: "checkbox",
    desc: "Save this information for faster check-out next time",
  },
];

/////////////////////////////////// OrderSummary ////////////////////////////////////////////

export const images = [
  { url: "./images/bkash.webp", desc: "bkash" },
  { url: "./images/visa.webp", desc: "visa" },
  { url: "./images/master-card.webp", desc: "master-card" },
  { url: "./images/nagad.webp", desc: "nagad" },
];

/////////////////////////////////// Aside ////////////////////////////////////////////
export const categories = [
  { id: 1, text: "Woman’s Fashion" },
  { id: 2, text: "Men’s Fashion" },
  { id: 3, text: "Electronics" },
  { id: 4, text: "Home & Lifestyle" },
  { id: 5, text: "Medicine" },
  { id: 6, text: "Sports & Outdoor" },
  { id: 7, text: "Baby’s & Toys" },
  { id: 8, text: "Groceries & Pets" },
  { id: 9, text: "Health & Beauty" },
];

/////////////////////////////////// MusicTime ////////////////////////////////////////////
export const times = [
  { hours: "23", text: "Hours" },
  { hours: "05", text: "Days" },
  { hours: "59", text: "Minutes" },
  { hours: "35", text: "Secondes" },
];

/////////////////////////////////// Featured ////////////////////////////////////////////

export const feature = [
  {
    imgUrl: "images/play.webp",
    text: "PlayStation 5",
    decs: "Black and White version of the PS5  coming out on sale.",
    link: "Shop Now",
  },
  {
    imgUrl: "images/woman.webp",
    text: "Women’s Collections",
    decs: "Featured woman collections that give you another vibe.",
    link: "Shop Now",
  },
  {
    imgUrl: "images/speaker.webp",
    text: "Speakers",
    decs: "Amazon wireless speakers",
    link: "Shop Now",
  },
  {
    imgUrl: "images/perfum.webp",
    text: "Perfume",
    decs: "GUCCI INTENSE OUD EDP",
    link: "Shop Now",
  },
];

/////////////////////////////////// Profile ////////////////////////////////////////////
export const inputs = [
  { text: "first-name", type: "text", autoComplete: "given-name" },
  { text: "last-name", type: "text", autoComplete: "family-name" },
  { text: "email", type: "email", autoComplete: "email" },
  { text: "address", type: "text", autoComplete: "address" },
];

export const password = [
  { name: "city", autoComplete: "address-level2" },
  { name: "region", autoComplete: "address-level1" },
  { name: "postal-code", autoComplete: "postal-code" },
];

/////////////////////////////////// CartItem ////////////////////////////////////////////
export const tableLink = ["Product", "Price", "Quantity", "Subtotal"];
