import { v4 as uuidv4 } from "uuid";
export const materials = [
  {
    id: uuidv4(),
    name: "Aluminum – Classic Matt (3mm)",
    image: "material1.webp",
    best_seller: true,
    description: [
      "A cost-effective solution for anyone who wants an easy-to-clean and robust back panel.",
    ],
  },
  {
    id: uuidv4(),
    name: "Alu Prime – Lotus silk matt (3mm)",
    image: "material2.webp",
    best_seller: false,
    description: [
      "The perfect choice for elegance and particularly rich colors.",
    ],
  },
  {
    id: uuidv4(),
    name: "Alu Prime – HD Gloss (3mm)",
    image: "material3.webp",
    best_seller: false,
    description: ["The ideal choice for colorful and contrasting motifs."],
  },
  {
    id: uuidv4(),
    name: "Alu Prime – Brushed Metal (3mm)",
    image: "material4.webp",
    best_seller: false,
    description: [
      "Real haptic experience. Particularly popular with motifs such as wood, metal or concrete.",
    ],
  },
  {
    id: uuidv4(),
    name: "Acrylic – Classic (3mm)",
    image: "material5.webp",
    best_seller: false,
    description: [
      "Perfect for anyone who wants a cheap glass alternative with a 3D depth effect.",
    ],
  },
];
