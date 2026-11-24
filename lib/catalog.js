export const COLLECTIONS = [
  {
    slug: "raw-makhana",
    name: "Raw Makhana",
    eyebrow: "Pure & Unroasted",
    description:
      "Carefully graded, airy fox nuts in their natural form—ideal for slow roasting at home, festive recipes, or everyday kitchen prep.",
  },
  {
    slug: "flavoured-makhana",
    name: "Flavoured Makhana",
    eyebrow: "Small-Batch Seasoned",
    description:
      "Crisp, lightly roasted fox nuts tumbled with balanced pantry spices, cooling herbs, and mineral rock salt.",
  },
];

export const PRODUCTS = [
  {
    slug: "classic-raw-makhana",
    name: "Classic Raw Makhana",
    collectionSlug: "raw-makhana",
    category: "Pure Unroasted",
    samplePrice: "₹240 (Sample)",
    weightLabel: "100g (Sample Pack)",
    shortDescription:
      "Whole, airy fox nuts ready for slow-roasting at home or everyday kitchen creations.",
    fullDescription:
      "Our Classic Raw Makhana brings clean, whole puffed lotus seeds straight to your kitchen. Light, crisp, and versatile—roast them gently in ghee or olive oil with your own spices, or enjoy them in traditional recipes.",
    tastingNotes: ["Clean & neutral", "Airy crunch", "Kitchen versatile"],
    image: "/images/product-raw-makhana.jpg",
    alt: "Classic Raw Makhana in a minimal off-white ceramic bowl on a cream backdrop",
  },
  {
    slug: "himalayan-pink-salt-makhana",
    name: "Himalayan Pink Salt",
    collectionSlug: "flavoured-makhana",
    category: "Lightly Roasted",
    samplePrice: "₹260 (Sample)",
    weightLabel: "70g (Sample Pack)",
    shortDescription:
      "Crisp roasted fox nuts finished with a delicate mineral kiss of pink rock salt.",
    fullDescription:
      "Lightly roasted to bring out a warm, nutty crunch and finished with fine Himalayan pink salt. Designed for effortless everyday snacking—clean on the palate and easy to reach for any hour of the day.",
    tastingNotes: ["Delicate mineral salt", "Warm roasted note", "Crisp finish"],
    image: "/images/product-himalayan-salt.jpg",
    alt: "Roasted makhana dusted with Himalayan pink salt in a sand ceramic bowl",
  },
  {
    slug: "smoked-peri-peri-makhana",
    name: "Smoked Peri Peri",
    collectionSlug: "flavoured-makhana",
    category: "Bold & Spiced",
    samplePrice: "₹280 (Sample)",
    weightLabel: "70g (Sample Pack)",
    shortDescription:
      "Warm, vibrant spice notes balanced against a light, satisfyingly crisp crunch.",
    fullDescription:
      "A lively blend of warm chilli, subtle smokiness, and savoury spices tumbled over crisp roasted makhana. Crafted to deliver bold flavour without feeling heavy.",
    tastingNotes: ["Warm gentle heat", "Smoky paprika note", "Savoury crunch"],
    image: "/images/product-peri-peri.svg",
    alt: "Smoked Peri Peri roasted makhana in a charcoal bowl",
  },
  {
    slug: "pudina-black-pepper-makhana",
    name: "Pudina & Black Pepper",
    collectionSlug: "flavoured-makhana",
    category: "Garden Herb",
    samplePrice: "₹280 (Sample)",
    weightLabel: "70g (Sample Pack)",
    shortDescription:
      "Cooling garden mint paired with cracked black pepper for a bright afternoon snack.",
    fullDescription:
      "Refreshing dried pudina leaves meet the gentle warmth of freshly cracked black pepper. Balanced, aromatic, and crisp—made to sit right beside your afternoon cup of tea.",
    tastingNotes: ["Cooling mint", "Cracked pepper warmth", "Light & aromatic"],
    image: "/images/product-pudina-herb.svg",
    alt: "Pudina and Black Pepper herb-roasted makhana in a sand ceramic bowl",
  },
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getProductBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug) || null;
}

export function getCollectionBySlug(slug) {
  return COLLECTIONS.find((collection) => collection.slug === slug) || null;
}

export function getProductsByCollection(collectionSlug) {
  return PRODUCTS.filter(
    (product) => product.collectionSlug === collectionSlug
  );
}
