import React from "react"
import { social } from "./social"
export const projects = {
  1: {
    title: "Book Club",
    description: "A simple book trading app based on the Google Books API.",
    web: "https://bookclubfcc.herokuapp.com/",
    git: "https://github.com/telriot/book-club",
    display: "Book Club",
  },
  2: {
    title: "The Mines of Kogetaro",
    description:
      "A nostalgia-themed dungeon-crawler app rendered through React and managed through the Context API.",
    web: "https://obscure-falls-32133.herokuapp.com/",
    git: "https://github.com/telriot/dungeon-crawler",
    display: "Kogetaro",
  },
  3: {
    title: "d3 charts",
    description:
      "A set of responsive charts realized with D3 and rendered through React.",
    web: "https://fcc-charts-1.herokuapp.com/",
    git: "https://github.com/telriot/fcc-charts",
    display: "Charts",
  },
  4: {
    title: "Video chat app",
    description: ["A simple one-time video chat app"],
    web: "https://fcc-chat-app.herokuapp.com/",
    git: "https://github.com/telriot/chat-app",
    display: "Secret Chat",
  },
}
export const projectIntro = (
  <p>
    Here you can find some of my most recent projects.
    <br /> If you want to see more, make sure to visit my
    <a href={social.github}> Github </a>
    page!
  </p>
)
