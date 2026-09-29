export const site = {
  name: "Mae Florals",
  owner: "Melissa",
  phone: "802-272-2085",
  phoneHref: "tel:+18022722085",
  smsHref: "sms:+18022722085",
  phoneIntl: "+1-802-272-2085",
  town: "Claremont, NH",
  serviceArea: "Southern VT & NH · Upper Valley · Sullivan County",
  facebook: "https://www.facebook.com/people/Mae-Florals/61568948061510/",
  messenger: "https://m.me/61568948061510",
};

export const nav = [
  { href: "/offerings", label: "Offerings" },
  { href: "/pet-memorials", label: "Pet Memorials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Inquiry" },
];

export type Service = {
  no: string;
  title: string;
  kicker: string;
  body: string;
  formats: string[];
  image: string;
  alt: string;
  art: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Wedding flowers",
    kicker: "The bouquet, kept",
    body: "Your bouquet pressed flat into a floating glass frame, or set whole in a clear resin arch, block or heart. The invitation, a boutonnière or a length of ribbon can go in with it.",
    formats: ["Floating frames", "Resin arches & blocks", "Shadow boxes", "Coasters & bookends"],
    image: "/work/frame-white-garden.jpg",
    alt: "White garden roses and greenery pressed in a gold floating frame",
    art: "/art/cosmos.webp",
  },
  {
    no: "02",
    title: "Sympathy flowers",
    kicker: "Something quiet to hold",
    body: "Flowers from a service, dried and set into a framed piece or a resin keepsake — something gentle to keep close after the arrangements have gone.",
    formats: ["Resin hearts", "Framed keepsakes", "Pyramids & figures"],
    image: "/work/sympathy-heart.jpg",
    alt: "A purple and white heart-shaped sympathy arrangement beside the resin heart made from it",
    art: "/art/forgetmenot.webp",
  },
  {
    no: "03",
    title: "Pet memorials",
    kicker: "Fur & ashes in resin",
    body: "A curled cat, a sleeping dog or a paw print, cast with your pet's own fur or ashes inside, on a base colour you choose.",
    formats: ["Cats", "Dogs", "Paw prints"],
    image: "/work/pet-cats-bellflower.jpg",
    alt: "Two black resin cat memorials beside purple bellflowers",
    art: "/art/pansy.webp",
  },
  {
    no: "04",
    title: "Fresh arrangements",
    kicker: "For the day itself",
    body: "Bouquets and arrangements for birthdays, gatherings and just-because — the same eye for colour, before anything is pressed.",
    formats: ["Bouquets", "Table arrangements", "Seasonal pieces"],
    image: "/work/fresh-garden-vase.jpg",
    alt: "A bright garden arrangement of dahlias, lilies and delphinium outdoors",
    art: "/art/aster.webp",
  },
  {
    no: "05",
    title: "Pressed-flower keepsakes",
    kicker: "Little things, made by hand",
    body: "Heart dishes, trays, earrings, ornaments and keychains made with real pressed flowers and a little gold leaf — look for them at local craft fairs.",
    formats: ["Heart dishes", "Earrings", "Trays", "Ornaments"],
    image: "/work/dish-heart-botanical.jpg",
    alt: "A white heart-shaped dish with pressed wildflowers and ferns",
    art: "/art/hydrangea.webp",
  },
];

export type Stage = {
  step: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const stages: Stage[] = [
  {
    step: "The day",
    title: "It starts as a bouquet",
    body: "Reach out before the day if you can, then bring your flowers to Melissa as fresh as possible — the fresher they arrive, the truer their colour stays.",
    image: "/work/fresh-eucalyptus-bridal.jpg",
    alt: "A white rose and eucalyptus bridal bouquet",
  },
  {
    step: "Pressing",
    title: "Every bloom laid flat",
    body: "The bouquet is taken apart stem by stem. Petals and leaves are pressed and dried slowly so they keep their shape and colour.",
    image: "/work/studio-drying.jpg",
    alt: "Dried flower heads and petals laid out flat on a white surface",
  },
  {
    step: "Designing",
    title: "Arranged by hand",
    body: "With tweezers and patience, the pressed flowers are placed back into a composition — in a frame, a mould, or both.",
    image: "/work/studio-molds.jpg",
    alt: "Silicone moulds with pressed hydrangea petals ready to be set",
  },
  {
    step: "Setting",
    title: "Sealed in clear resin",
    body: "Resin is poured in layers so each flower sits suspended in the light. Gold leaf and a custom base colour are added if you want them.",
    image: "/work/resin-block-zinnia.jpg",
    alt: "A clear resin block with a white flower suspended inside, held in a hand",
  },
  {
    step: "Forever",
    title: "Yours to keep",
    body: "Your finished piece comes back to you — the flowers from the day you never want to forget, beautifully and forever.",
    image: "/work/frame-lupine.jpg",
    alt: "Pressed lupine, roses and wildflowers in a natural wood floating frame",
  },
];

export const petPricing = {
  cats: [
    { size: "Small", price: 25, dims: `2″ L × 1″ H` },
    { size: "Medium", price: 40, dims: `3″ L × 2″ H` },
    { size: "Large", price: 50, dims: `3.5″ L × 2″ H` },
  ],
  dogs: [
    { size: "Small", price: 25, dims: `2.5″ L × 1″ H` },
    { size: "Medium", price: 40, dims: `3.3″ L × 1.2″ H` },
    { size: "Large", price: 50, dims: `4″ L × 1.5″ H` },
  ],
  paws: [
    { size: "Small", price: 20, dims: `1″ L × 0.8″ H` },
    { size: "Large", price: 30, dims: `2″ L × 0.8″ H` },
  ],
};

export type Category = "wedding" | "resin" | "pets" | "fresh" | "keepsakes";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "wedding", label: "Wedding" },
  { id: "resin", label: "Resin" },
  { id: "pets", label: "Pets" },
  { id: "fresh", label: "Fresh" },
  { id: "keepsakes", label: "Keepsakes" },
];

export type Work = { src: string; alt: string; cat: Category; round?: boolean };

export const gallery: Work[] = [
  { src: "/work/resin-arch-roses.jpg", alt: "Roses, delphinium and greenery in a clear resin arch", cat: "wedding" },
  { src: "/work/pet-cat-daisy.jpg", alt: "A resin cat filled with pressed daisies", cat: "pets" },
  { src: "/work/fresh-staircase.jpg", alt: "A tall arrangement of gerberas, roses and gladiolus", cat: "fresh" },
  { src: "/work/dish-heart-moon-owl.jpg", alt: "Heart dish with moon phases, ferns and a barn owl", cat: "keepsakes", round: true },
  { src: "/work/resin-hex-roses.jpg", alt: "Hexagonal resin block with red and yellow roses and sunflowers", cat: "resin" },
  { src: "/work/bouquet-and-frame-white.jpg", alt: "A white bridal bouquet and the pressed frame made from it", cat: "wedding" },
  { src: "/work/pet-paw.jpg", alt: "A resin paw print memorial with fur inside", cat: "pets" },
  { src: "/work/earrings-monarch-set.jpg", alt: "Monarch butterfly earrings and pendants on ferns", cat: "keepsakes" },
  { src: "/work/shadowbox-peony.jpg", alt: "Peonies and dahlias preserved in a black shadow box", cat: "wedding" },
  { src: "/work/pyramid-dandelion.jpg", alt: "A dandelion seed head suspended in a resin pyramid", cat: "resin" },
  { src: "/work/fresh-roses-hydrangea.jpg", alt: "Orange roses and blue hydrangea in a white vase", cat: "fresh" },
  { src: "/work/resin-heart-anemone.jpg", alt: "A resin heart filled with anemones and ranunculus", cat: "resin", round: true },
  { src: "/work/bouquet-and-frame-lupine.jpg", alt: "Lupine and wildflower bouquet beside its pressed frame", cat: "wedding" },
  { src: "/work/pet-cat-grey.jpg", alt: "A grey resin cat memorial with fur inside", cat: "pets" },
  { src: "/work/tray-trio.jpg", alt: "Three resin trays with sunflowers and hydrangea", cat: "keepsakes" },
  { src: "/work/frame-delphinium.jpg", alt: "Blue delphinium and a white daisy pressed in a gold frame", cat: "wedding" },
  { src: "/work/resin-bookends.jpg", alt: "Half-moon resin bookends filled with dried flowers", cat: "resin" },
  { src: "/work/fresh-dahlia-bridal.jpg", alt: "A bouquet of dahlias, cosmos and baby's breath", cat: "fresh" },
  { src: "/work/dish-heart-pansy-moon.jpg", alt: "Heart dish with pansies and a crescent moon", cat: "keepsakes" },
  { src: "/work/bouquet-and-resin-calla.jpg", alt: "Calla lily bouquet beside the resin arch it became", cat: "wedding" },
  { src: "/work/pet-cats-hand.jpg", alt: "Two small black resin cats in an open hand", cat: "pets" },
  { src: "/work/resin-coasters-yellow.jpg", alt: "Four resin coasters with yellow roses", cat: "resin" },
  { src: "/work/fresh-coral-roses.jpg", alt: "Coral roses with Queen Anne's lace and stock", cat: "fresh" },
  { src: "/work/earrings-gold-flake.jpg", alt: "Round earrings with pressed petals and gold flakes", cat: "keepsakes", round: true },
  { src: "/work/frame-wood-white.jpg", alt: "White flowers pressed in a wooden frame", cat: "wedding" },
  { src: "/work/resin-square-daisy.jpg", alt: "Square resin block with a white daisy, ferns and zinnias", cat: "resin" },
  { src: "/work/pet-cat-tabby.jpg", alt: "A tabby-coloured resin cat memorial", cat: "pets" },
  { src: "/work/dish-heart-wildflower.jpg", alt: "Heart dish filled with pressed wildflowers", cat: "keepsakes", round: true },
  { src: "/work/bouquet-and-invitation.jpg", alt: "A tulip bouquet beside a framed wedding invitation with pressed flowers", cat: "wedding" },
  { src: "/work/fresh-harvest.jpg", alt: "A vivid harvest bouquet of carnations and sunflowers", cat: "fresh" },
  { src: "/work/resin-hex-blue.jpg", alt: "Hexagonal resin block with white and blue flowers", cat: "resin" },
  { src: "/work/ornament-monarch-hex.jpg", alt: "A hexagonal ornament with a monarch butterfly", cat: "keepsakes", round: true },
  { src: "/work/pet-lt-dan.jpg", alt: "A personalised resin memorial reading Lt. Dan", cat: "pets" },
  { src: "/work/frame-fern-pansy.jpg", alt: "Ferns, pansies and hydrangea pressed in a white frame", cat: "wedding" },
  { src: "/work/fresh-pink-roses.jpg", alt: "Pink roses and orchids in a pink vase", cat: "fresh" },
  { src: "/work/tray-peony.jpg", alt: "A resin tray with a pink peony and cornflowers", cat: "keepsakes", round: true },
];

export const testimonial = {
  quote:
    "Melissa is a wonderfully talented, heartfelt resin wizard! She really loves preserving people's memories — pet hair, wedding flowers, funeral flowers, photos and flowers mixed, framed, you name it. She'll try her best to keep your memories forever!",
  name: "Michelle R.",
  source: "Facebook recommendation",
};

export const kindWords = [
  { quote: "Our Nala girl turned out amazing, thank you.", name: "Mia P." },
  { quote: "Beautiful! I love how they keep their color.", name: "Jodie R." },
  { quote: "These are gorgeous! I love the daisy ones with the gold flakes.", name: "Keionna P." },
  { quote: "So special, I absolutely love it!! Thank you so much.", name: "Thistle Dew Flowers" },
  { quote: "I like the white ones with the hearts! These are so pretty, Mel.", name: "Colleen K." },
  { quote: "Incredible video! I love watching your process.", name: "Lauren M." },
  { quote: "Love those colors!!", name: "Sheila G." },
  { quote: "Oh my. So special.", name: "Jeanine W." },
  { quote: "Oh em geeeeeee these are so cute.", name: "Brittany B." },
  { quote: "Those are amazing.", name: "Michelle R." },
];

export const occasions = [
  "Wedding bouquet",
  "Sympathy flowers",
  "Pet memorial",
  "Fresh arrangement",
  "Keepsake / gift",
  "Something else",
];
