export type ProductBox = {
  quantity: number;
  item: string;
};

export type ProductAssets = {
  small: [string, string];
  large: string;
  xSmall: string;
};

export type Product = {
  id: string;
  isNewProduct: boolean;
  title: string;
  shortTitle: string;
  description: string;
  img: string;
  price: number;
  features: string;
  inBox: ProductBox[];
  assets: ProductAssets;
  category: "Headphones" | "Speakers" | "Earphones";
};

export const products = new Map<string, Product>();

// YX1
products.set("8e3c7c8b-2764-4cbc-93c2-b42f9f65c465", {
  id: "8e3c7c8b-2764-4cbc-93c2-b42f9f65c465",
  isNewProduct: true,
  title: "YX1 WIRELESS",
  shortTitle: "YX1",
  category: "Earphones",
  img: "/category-yx1.png",
  description:
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  price: 599,
  features:
    "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. \n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
  inBox: [
    { quantity: 2, item: "Earphone Unit" },
    { quantity: 6, item: "Multi-size Earplugs" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "USB-C Charging Cable" },
    { quantity: 1, item: "Travel Pouch" },
  ],
  assets: {
    large: "/products/yx1/large.png",
    small: ["/products/yx1/small-1.png", "/products/yx1/small-2.png"],
    xSmall: "/small/yx1.png",
  },
});

// ZX7
products.set("5e3eba61-21e1-401b-9f6a-834358f2ae39", {
  id: "5e3eba61-21e1-401b-9f6a-834358f2ae39",
  isNewProduct: false,
  title: "ZX7",
  shortTitle: "ZX7",
  category: "Speakers",
  img: "/category-zx7.png",
  description:
    "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  price: 3500,
  features:
    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. \n\n The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
  inBox: [
    { quantity: 2, item: "Speaker Unit" },
    { quantity: 2, item: "Speaker Cloth Panel" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
    { quantity: 1, item: "7.5m Optical Cable" },
  ],
  assets: {
    large: "/products/zx7/large.png",
    small: ["/products/zx7/small-1.png", "/products/zx7/small-2.png"],
    xSmall: "/small/zx7.png",
  },
});

// ZX9
products.set("e11a6fdb-3374-49c8-a702-1793005de8e0", {
  id: "e11a6fdb-3374-49c8-a702-1793005de8e0",
  isNewProduct: true,
  title: "ZX9",
  shortTitle: "ZX9",
  category: "Speakers",
  img: "/category-zx9.png",
  description:
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  price: 4500,
  features:
    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). \n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
  inBox: [
    { quantity: 2, item: "Speaker Unit" },
    { quantity: 2, item: "Speaker Cloth Panel" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "3.5mm 10m Audio Cable" },
    { quantity: 1, item: "10m Optical Cable" },
  ],
  assets: {
    large: "/products/zx9/large.png",
    small: ["/products/zx9/small-1.png", "/products/zx9/small-2.png"],
    xSmall: "/small/zx9.png",
  },
});

// XX59
products.set("f435732e-de84-4a95-ace6-af3daa6bca09", {
  id: "f435732e-de84-4a95-ace6-af3daa6bca09",
  isNewProduct: false,
  title: "XX59",
  shortTitle: "XX59",
  category: "Headphones",
  description:
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  price: 899,
  img: "/category-xx59.png",
  features:
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. \n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
  inBox: [
    { quantity: 1, item: "Headphone Unit" },
    { quantity: 2, item: "Replacement Earcups" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "3.5mm 5m Audio Cable" },
  ],
  assets: {
    large: "/products/xx59/large.png",
    small: ["/products/xx59/small-1.png", "/products/xx59/small-2.png"],
    xSmall: "/small/xx59.png",
  },
});

// XX99 mark 1
products.set("b1a7d49d-8cb2-4580-8aa6-ae5f5a3832f6", {
  id: "b1a7d49d-8cb2-4580-8aa6-ae5f5a3832f6",
  isNewProduct: false,
  title: "XX99 Mark I",
  shortTitle: "XX99 MK I",
  category: "Headphones",
  description:
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  price: 1750,
  features:
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. \n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
  inBox: [
    { quantity: 1, item: "Headphone Unit" },
    { quantity: 2, item: "Replacement Earcups" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "3.5mm 5m Audio Cable" },
  ],
  img: "/category-xx99-mark-1.png",
  assets: {
    large: "/products/xx99-1/large.png",
    small: ["/products/xx99-1/small-1.png", "/products/xx99-1/small-2.png"],
    xSmall: "/small/xx99-mk-I.png",
  },
});

// XX99 mark 2
products.set("c1590e9f-c0e9-4ab1-88c7-edaa37b16589", {
  id: "c1590e9f-c0e9-4ab1-88c7-edaa37b16589",
  isNewProduct: true,
  title: "XX99 Mark II",
  shortTitle: "XX99 MK II",
  category: "Headphones",
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  price: 2999,
  features:
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. \n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  inBox: [
    { quantity: 1, item: "Headphone Unit" },
    { quantity: 2, item: "Replacement Earcups" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "3.5mm 5m Audio Cable" },
    { quantity: 1, item: "Travel Bag" },
  ],
  img: "/category-xx99-mark-2.png",
  assets: {
    large: "/products/xx99-2/large.png",
    small: ["/products/xx99-2/small-1.png", "/products/xx99-1/small-2.png"],
    xSmall: "/small/xx99-mk-II.png",
  },
});

export const getProductById = (id: string) => products.get(id);
