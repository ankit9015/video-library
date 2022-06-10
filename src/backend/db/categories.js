import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Lofi",
    img: "lofi.jpeg",
    gif: "lofi.gif",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "Pop",
    img: "pop.jpeg",
    gif: "pop.gif",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    categoryName: "Bass boosters",
    img: "bass.jpeg",
    gif: "bass.gif",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "Rap",
    img: "rap.jpeg",
    gif: "rap.gif",

    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "Gaming",
    img: "gaming.jpeg",
    gif: "gaming.gif",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "Meditation",
    img: "meditation.jpeg",
    gif: "meditation.gif",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
];
