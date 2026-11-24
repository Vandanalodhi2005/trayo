import { PRODUCTS } from "@/lib/catalog";

export const MARQUEE_ITEMS = [
  "GOODNESS IN EVERY CRUNCH",
  "SNACK HAPPY. LIVE HAPPY.",
  "THAT'S THE TRAYO WAY",
];

export const FEATURED_PRODUCTS = PRODUCTS.map((product) => ({
  id: product.slug,
  slug: product.slug,
  name: product.name,
  category: product.category,
  samplePrice: product.samplePrice,
  description: product.shortDescription,
  image: product.image,
  alt: product.alt,
}));

export const GOODNESS_PILLARS = [
  {
    number: "01",
    title: "Thoughtfully Selected",
    description:
      "Every batch begins with carefully graded lotus seeds chosen for size, lightness, and clean texture.",
  },
  {
    number: "02",
    title: "Delicious Flavour Experiences",
    description:
      "Balanced seasoning profiles crafted to complement the natural nuttiness of makhana without overpowering it.",
  },
  {
    number: "03",
    title: "Made for Everyday Snacking",
    description:
      "Light enough for desk-side afternoons, evening tea rituals, and shared bowls with family.",
  },
  {
    number: "04",
    title: "A Satisfying Crunch",
    description:
      "Slow-tumbled and roasted for an airy, crisp snap in every single handful.",
  },
];

export const SHOWCASE_GALLERY = [
  {
    id: "ritual-bowl",
    title: "Everyday Rituals",
    caption: "Served warm alongside afternoon chai or quiet focus.",
    image: "/images/story-ritual.jpg",
    alt: "Makhana served in a stoneware dish next to a ceramic cup of tea",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    placeholderTone: "cream",
  },
  {
    id: "closeup",
    title: "Airy, Crisp Texture",
    caption: "Lightly roasted for a clean, delicate snap.",
    image: "/images/showcase-closeup.jpg",
    alt: "Macro close-up photograph of crisp roasted makhana texture in warm sunlight",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
    placeholderTone: "sand",
  },
  {
    id: "ingredients",
    title: "Honest Pantry Spices",
    caption: "Rock salt, cracked pepper, and warm botanicals.",
    image: "/images/showcase-ingredients.svg",
    alt: "Editorial flat-lay of makhana with rock salt, black pepper, and botanicals",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
    placeholderTone: "olive",
  },
];

// Clearly marked demo testimonials — replace with verified customer reviews when live
export const DEMO_TESTIMONIALS = [
  {
    id: "demo-1",
    quote:
      "The crunch feels noticeably lighter and cleaner than ordinary packaged snacks. The Himalayan Pink Salt bowl disappears fast at our desk.",
    author: "Demo Customer A",
    context: "Demo Review · Replace with verified customer feedback",
  },
  {
    id: "demo-2",
    quote:
      "Finally a spiced makhana where the seasoning tastes balanced rather than dusty or overly salty. Warm, crisp, and genuinely snackable.",
    author: "Demo Customer B",
    context: "Demo Review · Replace with verified customer feedback",
  },
  {
    id: "demo-3",
    quote:
      "We keep the Classic Raw Makhana in our kitchen pantry for quick evening roasting. Consistently crisp and great quality.",
    author: "Demo Customer C",
    context: "Demo Review · Replace with verified customer feedback",
  },
];
