export const games = [
  {
    id: 1,
    platforms: [
      { platform: { id: 1, slug: "playstation" } },
      { platform: { id: 2, slug: "pc" } },
      { platform: { id: 3, slug: "xbox" } },
    ],
    metacritic: 80,
    name: "Jogo A",
    release_date: "2022-10-20",
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "RPG" },
    ],
  },
  {
    id: 2,
    platforms: [{ platform: { id: 1, slug: "xbox" } }],
    metacritic: 60,
    name: "Jogo B",
    release_date: "2022-11-13",
    genres: [{ id: 1, name: "Action" }],
  },
  {
    id: 3,
    platforms: [{ platform: { id: 1, slug: "playstation" } }],
    metacritic: 30,
    name: "Jogo C",
    release_date: "2022-04-13",
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "RPG" },
    ],
  },
  {
    id: 4,
    platforms: [
      { platform: { id: 1, slug: "playstation" } },
      { platform: { id: 3, slug: "xbox" } },
    ],
    metacritic: 90,
    name: "Jogo D",
    release_date: "2022-12-20",
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Puzzle" },
    ],
  },
  {
    id: 5,
    platforms: [{ platform: { id: 3, slug: "xbox" } }],
    metacritic: 55,
    name: "Jogo E",
    release_date: "2022-05-12",
    genres: [{ id: 2, name: "Adventure" }],
  },
];
