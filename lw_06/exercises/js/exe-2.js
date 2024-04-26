const postElGen = (data) => {
  const wrapperEl = document.createElement("li");
  const authorEl = document.createElement("h3");
  const imgEl = document.createElement("img");
  const likesEl = document.createElement("p");
  const commentEl = document.createElement("p1");

  wrapperEl.className = "post";
  authorEl.textContent = data.authorName;
  imgEl.src = data.photo;
  imgEl.alt = data.authorName;
  likesEl.textContent = data.likes;
  commentEl.textContent = data.comment;

  wrapperEl.append(authorEl, imgEl, likesEl, commentEl);

  return wrapperEl;
};

const postListElGen = () => {
  const wrapperEl = document.createElement("ul");

  wrapperEl.className = "list";

  return wrapperEl;
};

const navbarElGen = () => {
  const wrapperEl = document.createElement("navbar");
  const logoEl = document.createElement("img");
  const searchEl = document.createElement("input");

  wrapperEl.className = "navbar";
  logoEl.className = "logo";
  searchEl.className = "search";
  logoEl.src =
    "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png";
  logoEl.alt = "logo";
  searchEl.placeholder = "Search";

  wrapperEl.append(logoEl, searchEl);
  return wrapperEl;
};

const facebookPosts = [
  {
    id: 1,
    authorName: "Frodo Baggins",
    photo: "https://picsum.photos/500/300?1",
    likes: 1243,
    comment: "",
  },
  {
    id: 2,
    authorName: "Gandalf the Grey",
    photo: "https://picsum.photos/500/300?2",
    likes: 2654,
    comment: "",
  },
  {
    id: 3,
    authorName: "Aragorn",
    photo: "https://picsum.photos/500/300?3",
    likes: 3221,
    comment: "",
  },
  {
    id: 4,
    authorName: "Legolas",
    photo: "https://picsum.photos/500/300?4",
    likes: 2890,
    comment: "",
  },
  {
    id: 5,
    authorName: "Gimli",
    photo: "https://picsum.photos/500/300?5",
    likes: 1854,
    comment: "",
  },
  {
    id: 6,
    authorName: "Samwise Gamgee",
    photo: "https://picsum.photos/500/300?6",
    likes: 1745,
    comment: "",
  },
  {
    id: 7,
    authorName: "Gollum",
    photo: "https://picsum.photos/500/300?7",
    likes: 1432,
    comment: "",
  },
  {
    id: 8,
    authorName: "Saruman",
    photo: "https://picsum.photos/500/300?8",
    likes: 960,
    comment: "",
  },
  {
    id: 9,
    authorName: "Galadriel",
    photo: "https://picsum.photos/500/300?9",
    likes: 2531,
    comment: "",
  },
  {
    id: 10,
    authorName: "Boromir",
    photo: "https://picsum.photos/500/300?10",
    likes: 1922,
    comment: "",
  },
  {
    id: 11,
    authorName: "Elrond",
    photo: "https://picsum.photos/500/300?11",
    likes: 2210,
    comment: "",
  },
  {
    id: 12,
    authorName: "Arwen",
    photo: "https://picsum.photos/500/300?12",
    likes: 2399,
    comment: "",
  },
  {
    id: 13,
    authorName: "Théoden",
    photo: "https://picsum.photos/500/300?13",
    likes: 1405,
    comment: "",
  },
  {
    id: 14,
    authorName: "Éowyn",
    photo: "https://picsum.photos/500/300?14",
    likes: 1573,
    comment: "",
  },
  {
    id: 15,
    authorName: "Faramir",
    photo: "https://picsum.photos/500/300?15",
    likes: 1762,
    comment: "",
  },
];

const rootEl = document.querySelector(".root");
const listEl = postListElGen();
const navbarEl = navbarElGen();

facebookPosts.map((post) => listEl.append(postElGen(post)));

rootEl.append(navbarEl, listEl);
